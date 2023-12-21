import React from "react";
import { BiSolidBell } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import Orten from "../../assets/images.jpg";
import karemm from "../../assets/kareem.jpg";
import Roman from "../../assets/romanwwe.jpg";
import { NotificationsCard } from "../../component/div";
import NotificationMessage from "./notificationMessage";
const Card = () => {
  return (
    <>
      <NotificationsCard>
        <BiSolidBell size={30} color="#1DA1F2" />
        <NotificationMessage
          pImg={Orten}
          text="Recent tweet from"
          name="Randy Orten"
          tweet="Randy will come back soon..."
        />
      </NotificationsCard>
      <NotificationsCard>
        <BsHeartFill size={25} color="#E0144C" />
        <NotificationMessage
          pImg={karemm}
          text="your tweet is liked from"
          name="Kareem Abdelaziz"
        />
      </NotificationsCard>
      <NotificationsCard>
        <BiSolidBell size={30} color="#1DA1F2" />
        <NotificationMessage
          pImg={Roman}
          text="Recent tweet from"
          name="Roman Reigns"
          tweet="Acknowledge Me as your tribal chief "
        />
      </NotificationsCard>
      <NotificationsCard>
        <BsHeartFill size={25} color="#E0144C" />
        <NotificationMessage
          pImg={Orten}
          text="your tweet is liked from"
          name="Randy Orten"
        />
      </NotificationsCard>
      <NotificationsCard>
        <BiSolidBell size={30} color="#1DA1F2" />
        <NotificationMessage
          pImg={karemm}
          text="Recent tweet from"
          name="Kareem Abdelaziz"
          tweet="انتظروا فيل الارزق 3 قريبا"
        />
      </NotificationsCard>
      <NotificationsCard>
        <BsHeartFill size={25} color="#E0144C" />
        <NotificationMessage
          pImg={Roman}
          text="your tweet is liked from"
          name="Roman Reigns"
        />
      </NotificationsCard>
      <NotificationsCard>
        <BiSolidBell size={30} color="#1DA1F2" />
        <NotificationMessage
          pImg={Roman}
          text="Recent tweet from"
          name="Roman Reigns"
          tweet="I am WWE  "
        />
      </NotificationsCard>
    </>
  );
};

export default Card;
