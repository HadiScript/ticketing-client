import React from "react";
import { useParams } from "react-router-dom";
import ClientLayout from "../Client/components/ClientLayout";

const SingleTCResolved = () => {
  const { id } = useParams();
  return <ClientLayout>SingleTCResolved - {id}</ClientLayout>;
};

export default SingleTCResolved;
