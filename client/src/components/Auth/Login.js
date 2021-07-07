import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { login } from "../../js/action/authAction";

const LoginModal = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();

  const [modal, setModal] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleConfim = () => {
    dispatch(login(formData));
    history.push("/dashboard");
  };

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Login
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Login</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                onChange={handleFormChange}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="Enter your Email..."
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">password</Label>
              <Input
                onChange={handleFormChange}
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password..."
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleConfim}>
            Confirm
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default LoginModal;