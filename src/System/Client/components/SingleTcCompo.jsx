import React, { useContext, useEffect, useState } from "react";
import { getRequest } from "../../Actions/Requests";

// from = resolved detail
// from = open tc
const SingleTcCompo = ({ from, auth, url }) => {
  const [single, setSingle] = useState({});
  const [loading, setLoading] = useState(false);

  const gettingSingleTicket = async () => {
    setLoading(true);

    const data = await getRequest(url, auth);
    if (data.ok) {
      setLoading(false);
      setSingle(data.singleTicket);
    }
  };

  useEffect(() => {
    if (auth && auth?.token) {
      gettingSingleTicket();
    }
  }, [auth && auth?.token]);

  return (
    <>
      {JSON.stringify(single?.title)}
      <br />
      {from === "open-inprogress" && <>comment section</>}
    </>
  );
};

export default SingleTcCompo;
