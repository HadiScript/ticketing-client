import React, { useContext, useEffect, useState } from "react";
import AgentLayout from "./components/AgentLayout";
import { AuthContext } from "../../context/Auth";
import { getRequest } from "../Actions/Requests";
import PickedTicketItems from "./components/PickedTicketItems";

const PickedTicket = () => {
  const [auth] = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [list, setList] = useState([]);

  const gettingAllMyPickedTickets = async () => {
    setLoading(true);

    const data = await getRequest("/by/agent/picks", auth);
    if (data.ok) {
      setList(data.tickets);
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (auth && auth?.token) gettingAllMyPickedTickets();
  }, [auth && auth?.token]);

  return (
    <AgentLayout>
      {/* breadcrumbds */}

      <div className="mainHeading mt-4">
        <h2>Development Category Tickets</h2>
      </div>

      <div className="table-responsive">
        <table className="table mt-1 agent-table">
          <thead>
            <tr>
              <th scope="col"># {loading && "loading"}</th>
              <th scope="col">Title</th>
              <th scope="col">Picket At</th>
              <th scope="col">Priority</th>
              <th scope="col">Created At</th>
              <th scope="col ">1st SLA</th>
              <th scope="col ">2nd SLA</th>
              <th scope="col "></th>
            </tr>
          </thead>

          <tbody>
            {list.map((x, index) => (
              <PickedTicketItems x={x} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </AgentLayout>
  );
};

export default PickedTicket;
