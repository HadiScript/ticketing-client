import React, { useContext, useEffect, useState } from "react";
import AgentLayout from "./components/AgentLayout";
import { useParams } from "react-router-dom";
import { getRequest } from "../Actions/Requests";
import { AuthContext } from "../../context/Auth";

const SingleTcCompo = () => {
  const { id } = useParams();
  const [auth] = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [single, setSingle] = useState({});
  const [comments, setComments] = useState([]);

  const gettingSinleTicket = async (i) => {
    setLoading(true);
    const data = await getRequest(`/by/agent/single/${i}`, auth);
    setLoading(false);
    setComments(data.comments);
    setSingle(data);
  };

  useEffect(() => {
    if (auth && auth?.token) gettingSinleTicket(id);
  }, [auth && auth?.token, id]);

  return (
    <AgentLayout>
      SingleTicket - {id} - {JSON.stringify(single.comments)} <br />
      {/* breadcurmbs */}
      {/* description */}
      {/* textarea and button */}
      {/* comments list */}
    </AgentLayout>
  );
};

export default SingleTcCompo;
