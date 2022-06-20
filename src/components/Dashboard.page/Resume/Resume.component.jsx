import React from "react";
import {
  DetailName,
  LastOrders,
  Order,
  ResumeContainer,
  Status,
} from "./Resume.styles";
import Accordion from "react-bootstrap/Accordion";

const Resume = ({ orders }) => {
  const returnStatus = status => {
    switch (status) {
      case "pending":
        return "В ожидании обработаки";
      default:
        return status;
    }
  };

  return (
    <ResumeContainer>
      <LastOrders>
        <h4>Последние заказы</h4>

        {orders.length ? (
          <>
            {orders.slice(0, 5).map((item, key) => (
              <Accordion alwaysOpen={false} key={key}>
                <Accordion.Item className="mb-1" eventKey={key}>
                  <Accordion.Header>
                    <div className="d-flex gap-5">
                      <Status>
                        <DetailName>Статус:</DetailName>
                        {returnStatus(item.status)}
                      </Status>
                      <Status>
                        <DetailName>Кол. товара:</DetailName>
                        {item.line_items.length}
                      </Status>
                      <Status>
                        <DetailName>Итого:</DetailName>
                        {item.total} руб.
                      </Status>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            ))}
          </>
        ) : (
          <h5>Нет заказов.</h5>
        )}
      </LastOrders>
    </ResumeContainer>
  );
};

export default Resume;
