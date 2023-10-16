import React, { useContext, useEffect, useState } from "react";
import ClientLayout from "./components/ClientLayout";
import { useParams } from "react-router-dom";
import { getRequest } from "../Actions/Requests";
import { AuthContext } from "../../context/Auth";
import SingleTcCompo from "./components/SingleTcCompo";

const ClientSingleTc = () => {
  const { id } = useParams();
  const [auth] = useContext(AuthContext);

  return (
    <ClientLayout>
      <h5>Breadcurmdb from single client ticket</h5>
      <SingleTcCompo from={"open-inprogress"} url={`/_/single/${id}`} auth={auth} />
    </ClientLayout>
  );
};

export default ClientSingleTc;
