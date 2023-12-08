import React from "react";
import { useState } from "react";
import Forms from "./Forms";
import BootstrapCard from "react-bootstrap/Card";

const Card = () => {
  const [submit, setSubmit] = useState([]);
  return (
    <div>
      <Forms setSubmit={setSubmit} submit={submit} />
      <div className="mainCard">
        {submit &&
          submit.map((item, index) => {
            return (
              <div key={index}>
                <BootstrapCard style={{ width: "18rem" }}>
                  <BootstrapCard.Img variant="top" src={item.url} />
                  <BootstrapCard.Body>
                    <BootstrapCard.Title>{item.username}</BootstrapCard.Title>
                    <BootstrapCard.Text>
                      {item.firstname} {item.lastname}
                    </BootstrapCard.Text>
                    <BootstrapCard.Text>{item.email}</BootstrapCard.Text>
                  </BootstrapCard.Body>
                </BootstrapCard>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Card;
