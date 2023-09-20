import React, { useContext, useEffect, useState } from "react";
import { Avatar, Card, List, Modal } from "antd";
import { AuthContext } from "../../context/Auth";
import toast from "react-hot-toast";
import axios from "axios";

const AllUsersComponent = () => {
  const [auth] = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([{ title: "here " }]);
  const [currentItem, setCurrectItem] = useState({});

  const [modalOpen, setModalOpen] = useState(false);

  const gettingUsers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("http://localhost:9000/api/all-users", {
        headers: {
          Authorization: `Bearer ${auth?.token}`,
        },
      });

      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.error("Failed, try again");
    }
  };

  useEffect(() => {
    if (auth && auth?.token) gettingUsers();
  }, [auth && auth?.token]);

  return (
    <>
      <Card title={"All Users"}>
        <List
          loading={loading}
          itemLayout="horizontal"
          dataSource={users}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <a
                  key="list-loadmore-edit"
                  onClick={() => {
                    setModalOpen(true);
                    setCurrectItem(item);
                  }}
                >
                  edit
                </a>,
              ]}
            >
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                  />
                }
                title={<a>{item.name}</a>}
                description={item.role}
              />
            </List.Item>
          )}
        />
      </Card>

      <Modal
        title={currentItem.name}
        centered
        open={modalOpen}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        width={500}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
  );
};

export default AllUsersComponent;
