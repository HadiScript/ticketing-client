import React, { useContext, useEffect, useState } from "react";
import AgentLayout from "./components/AgentLayout";
import { AuthContext } from "../../context/Auth";
import { getRequest } from "../Actions/Requests";
import Breadcrumbs from "../components/Breadcrumbs";
import { IoHome, IoReload } from "react-icons/io5";
import { Button } from "antd";
import AgentOpenTickets from "./components/AgentOpenTickets";
import Tickets from "./components/Tickets";
import axios from "axios";
import toast from "react-hot-toast";

const Agent = () => {
  const [auth] = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [pickedLoading, setPickedLoading] = useState(false);
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);

  // getting list from backend
  const gettingListByCategory = async () => {
    setLoading(true);
    let data = await getRequest("/by/agent/category/list", auth);
    // console.log(data);
    if (data.ok) {
      setLoading(false);
      setList(data.tickets);
    }
  };

  // first time call
  useEffect(() => {
    if (auth && auth.token) {
      gettingListByCategory();

      // const interval = setInterval(() => {
      //   // gettingListByCategory();
      //   setCount(count + 1);
      // }, 1000); // 2 minutes in milliseconds

      // // Clear the interval when the component is unmounted
      // return () => clearInterval(interval);
    }
  }, [auth && auth.token]);

  // picked ticket
  const pickedTicket = async (tcID) => {
    setPickedLoading(true);
    try {
      const { data } = await axios.put(
        "/by/agent/pick",
        { ticketId: tcID },
        {
          headers: {
            Authorization: `Bearer ${auth?.token}`,
          },
        }
      );
      toast.success("Picked");
      gettingListByCategory(); // list rerender
      setPickedLoading(false);
    } catch (error) {
      console.log(error);
      setPickedLoading(false);
      toast.error("Failed, try again");
    }
  };

  return (
    <AgentLayout>
      <Breadcrumbs from="Agent" fromIcon={<IoHome />} />

      <div className="d-flex justify-content-end ">
        <Button className="dark-clicks" icon={<IoReload />}>
          reload
        </Button>
      </div>

      <small className="text-secondary">
        Red background means, 1st SLA has breached
      </small>

      {loading && "loading..."}
      <div className="table-responsive">
        <table className="table mt-3 agent-table">
          <thead>
            <tr>
              <th scope="col"># {loading && "loading"}</th>
              <th scope="col">Title</th>
              <th scope="col">Category</th>
              <th scope="col">Priority</th>
              <th scope="col">Created At</th>
              <th scope="col ">Timer</th>
              <th scope="col "></th>
            </tr>
          </thead>
          <tbody>
            {list?.map((x, index) => (
              <Tickets x={x} index={index} pickedTicket={pickedTicket} />
            ))}
          </tbody>
        </table>
      </div>
    </AgentLayout>
  );
};

export default Agent;
