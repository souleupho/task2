import React from "react";
import { Col, Row, Statistic } from "antd";
import "./offer-header.css";

const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK
const OfferHeader = () => {
  const onFinish = () => {
    console.log("finished!");
  };

  return (
    <div className="offer-header">
      <div className="offer-heder-title">
        Get 25% off This Summer Sale, Grab it Fast
      </div>
      <div className="offer-heder-countdown">
        <Countdown title="" value={deadline} onFinish={onFinish} />
      </div>
    </div>
  );
};

export default OfferHeader;
