import s from "components/Notification/Notification.module.css";

function Notification({ message }) {
  return <h2 className={s.negativeTitle}>{message}</h2>;
}

export default Notification;
