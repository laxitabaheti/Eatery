import ReactDom from "react-dom";
import { Fragment } from "react";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.Backdrop}></div>;
};
const ModalOverlay = (props) => {
  return (
    <div className={styles.Modal}>
      <div className={styles.Content}>{props.children}</div>
    </div>
  );
};

const PortalElement = document.getElementById("overlays");
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop />, PortalElement)}
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        PortalElement
      )}
    </Fragment>
  );
};
export default Modal;
