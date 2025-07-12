import React, { useEffect } from "react";
import { NotificationWrapper, CloseBtn } from "./notification.styled";

const Notification = ({ message, type = "error", onClose }) => {
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      onClose();
    }, 5000); 

    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <NotificationWrapper type={type}>
      <p>{message}</p>
      <CloseBtn onClick={onClose}>&times;</CloseBtn>
    </NotificationWrapper>
  );
};

export default Notification;
