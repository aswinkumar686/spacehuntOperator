import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import '../../../assets/css/support-details.css'
import register from "../../../assets/img/registration.png"

const SuccessModal = ({ onClick }) => {
  return (
    <>
      
      <Modal
        show="true"
        className="paymentModal paymentSuccess"
        id="paymentSuccessModal"
        size="s">
        <ModalHeader>
          <button
            onClick={() => onClick(false)}
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"></button>
        </ModalHeader>
        <ModalBody>
          <div className="success-contents d-flex flex-column justify-content-center align-items-center">
            <img src={register} className="mx-auto" alt="" />

            <h3>Great! your payment was successful</h3>
            <p>you can now continue using Decrowd</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn btn-1 btn-ok"
            onClick={() => onClick(false)}>
            OK
          </button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default SuccessModal;
