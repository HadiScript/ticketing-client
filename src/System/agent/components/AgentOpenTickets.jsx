import React, { useEffect, useState } from "react";

const AgentOpenTickets = ({ x, index, pickedTicket }) => {
  // state in which createaAt
  // current Date
  // differernce
  // timer start

  const [timer, setTimer] = useState(differenceTime(x.createdAt)); 

  const differenceTime = (createdAt) => {
    return Math.floor(new Date() - new Date());
  };

  useEffect(() => {
    const timersss = setInterval(() => {
      setTimer((prevTime) => prevTime + 1); // Increment by 1 second
    }, 1000); // Update every second

    return () => clearInterval(timersss);
  }, []);

  return (
    <tr key={index}>
      {/* {JSON.stringify(x)} */}
      <th scope="row">{++index}</th>
      <td>{x?.title}</td>
      <td>{x.category?.name}</td>
      <td>{x.priority}</td>
      <td>{x.createdAt.slice(0, 10)}</td>
      <td>
        {/* <span
          className={`${elapsedTime >= 600 && "breached"} text-center px-3`}
        >
          {formatTime(elapsedTime)}
        </span> */}
      </td>
      <td className="text-center" role="button">
        <span className="text-warning" onClick={() => pickedTicket(x._id)}>
          Pick
        </span>
      </td>
    </tr>
  );
};

export default AgentOpenTickets;
