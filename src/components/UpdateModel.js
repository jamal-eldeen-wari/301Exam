import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export class UpdateModel extends Component {
  render() {
    return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Update Favorite Flower</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <Form onSubmit={(e) => this.props.updateFlower(e)}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Flower Name</Form.Label>
            <Form.Control type="email" placeholder="Enter Name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Instructions</Form.Label>
            <Form.Control type="password" placeholder="instructions" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.props.showModel}>
            Update
          </Button>
        </Form>
        </Modal.Body>

       
      </Modal.Dialog>
    );
  }
}

export default UpdateModel;
