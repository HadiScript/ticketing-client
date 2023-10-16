import React, { useContext, useEffect, useState } from "react";
import ClientLayout from "./components/ClientLayout";
import { AuthContext } from "../../context/Auth";
import { getRequest } from "../Actions/Requests";
import { Card, List } from "antd";
import { Link } from "react-router-dom";
import { BsCheckSquareFill } from "react-icons/bs";

const ResolvedTc = () => {
  const [auth] = useContext(AuthContext);

  const [tcs, setTcs] = useState([]);
  const [loading, setLoading] = useState(false);

  const gettingTcs = async () => {
    setLoading(true);
    let data = await getRequest("/resolved-tickets", auth);

    if (data.ok) {
      setLoading(false);
      setTcs(data.tickets);
    }
  };

  useEffect(() => {
    if (auth && auth?.token) {
      gettingTcs();
    }
  }, [auth && auth?.token]);

  return (
    <ClientLayout>
      {/* Breadcrumb */}

      <Card className="cardStyle mt-3">
        <h3>Resolved Tickets</h3>
        <List
          loading={loading}
          itemLayout="horizontal"
          dataSource={tcs}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={<BsCheckSquareFill color="blue" />}
                title={
                  <b>
                    <Link className="text-dark" to={`/client/resolved/${item._id}`}>
                      {item.title}
                    </Link>
                  </b>
                }
                description={<p className="text-dark">{item.description.slice(0, 100)}</p>}
              />
            </List.Item>
          )}
        />
      </Card>
    </ClientLayout>
  );
};

export default ResolvedTc;
