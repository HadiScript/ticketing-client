import React, { useContext, useEffect, useState } from "react";
import ClientLayout from "./components/ClientLayout";
import { getRequest } from "../Actions/Requests";
import { AuthContext } from "../../context/Auth";

import { IoHome } from "react-icons/io5";
import Breadcrumbs from "../components/Breadcrumbs";
import { AiFillFolderOpen } from "react-icons/ai";
import { GoLinkExternal } from "react-icons/go";
import { Link } from "react-router-dom";

const OpenRequest = () => {
  const [auth] = useContext(AuthContext);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const gettingList = async () => {
    setLoading(true);
    let data = await getRequest("/my/tickets", auth);

    if (data.ok) {
      setLoading(false);
      setList(data.tickets);
    }
  };

  useEffect(() => {
    if (auth && auth?.token) {
      gettingList();
    }
  }, [auth && auth?.token]);

  return (
    <ClientLayout>
      <Breadcrumbs
        from={"Client"}
        fromPath={"/client"}
        to={"Open Request"}
        fromIcon={<IoHome className="bread-text" />}
        toIcon={<AiFillFolderOpen className="bread-text-active" />}
      />
      <div class="table-responsive">
        <table class="table ">
          <caption>Your open tickets</caption>
          <thead>
            <tr>
              <th scope="col"># {loading && "loading..."}</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Category</th>
              <th scope="col">Priority</th>
              <th scope="col">Created At</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {list?.map((x, index) => (
              <tr>
                <th scope="row">{++index}</th>
                <td>{x.title}</td>
                <td>{x.description}</td>
                <td>{x.category?.name}</td>
                <td>{x.priority}</td>
                <td>{x.createdAt.slice(0, 10)}</td>
                <td>
                  <Link to={`/client/single/${x._id}`}>
                    <GoLinkExternal />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ClientLayout>
  );
};

export default OpenRequest;
