import React, { useContext } from "react";
import ClientLayout from "./components/ClientLayout";
import SingleTcCompo from "./components/SingleTcCompo";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../context/Auth";

const ResolvedDetaiilTc = () => {
  const { id } = useParams();
  const [auth] = useContext(AuthContext);

  return (
    <ClientLayout>
      <h5>breads from resolved </h5>
      <SingleTcCompo auth={auth} from={"resolved-tc"} url={`/_/single/${id}`} />
    </ClientLayout>
  );
};

export default ResolvedDetaiilTc;
