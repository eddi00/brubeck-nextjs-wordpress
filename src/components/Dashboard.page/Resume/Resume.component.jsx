import React from "react";
import { LastOrders, Order, ResumeContainer, Status } from "./Resume.styles";

const Resume = ({ orders }) => {
  const returnStatus = status => {
    switch (status) {
      case "pending":
        return "В ожидание";
    }
  };

  return (
    <ResumeContainer>
      <LastOrders>
        <h4>Последние заказы</h4>

        {orders.length ? (
          <>
            {orders.slice(0, 5).map((item, key) => (
              <Order key={key}>
                <Status>Статус: {returnStatus(item.status)}</Status>
                <Status>Количество:{item.line_items.length}</Status>
              </Order>
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
