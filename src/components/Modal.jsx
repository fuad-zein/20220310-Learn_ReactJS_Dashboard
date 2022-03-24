import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import {
  getListTransaction,
  addTransaction,
} from "../actions/TransactionAction";

export default function CreateTransaction(index) {
  const [modal, setModal] = useState(false);
  const [customers, setCustomers] = useState("");
  const [incomes, setIncomes] = useState("");
  const [sold, setSold] = useState("");

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div>
      <Button
        className="rounded-lg p-1 mb-4 w-32 text-white text-lg font-bold bg-sky-600 hover:bg-sky-700"
        color="primary"
        onClick={toggle}
      >
        Create
      </Button>
      <Modal isOpen={modal} toggle={toggle} color="primary">
        <ModalHeader toggle={toggle} className="font-bold">
          Create Transaction
        </ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        {/* <ModalFooter>
          <Button color="primary" onClick={function noRefCheck() {}}>
            Do Something
          </Button>{" "}
          <Button onClick={function noRefCheck() {}}>Cancel</Button>
        </ModalFooter> */}
      </Modal>
    </div>
  );
}
