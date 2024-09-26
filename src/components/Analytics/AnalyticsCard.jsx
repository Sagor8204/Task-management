import React from "react";

const AnalyticsCard = ({ data }) => {
  return (
    <>
      {data.title === "Team Performance" ? (
        <div>
          <h3>{data.title}</h3>
          <div>
            Current Month <span>{data.dropUpIcon}</span>
            <span>{data.month}%</span>
          </div>
        </div>
      ) : data.title === "Tasks Summary" ? (
        <div>
          <h3>{data.title}</h3>
          <h1>{data.percentes}</h1>
          <div>
            Current Week <span>{data.dropUpIcon}</span>
            <span>{data.week}%</span>
          </div>
        </div>
      ) : (
        <div>
          <h3>{data.title}</h3>
          <h1>{data.quantity}</h1>
          <div>
            Current Week <span>{data.dropUpIcon}</span>
            <span>{data.week}%</span>
          </div>
        </div>
      )}
    </>
  );
};

export default AnalyticsCard;
