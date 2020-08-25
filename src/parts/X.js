import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function X() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button
        className="btn btn-primary "
        // style={{ width: "0" }}
        onClick={handleShow}
      >
       Tambah Data
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formGroupEmail">
              <Form.Label>NIK</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukan Nik Anda"
              />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Masukan Nama anda" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Lokasi</Form.Label>
              <Form.Control type="text" placeholder="Masukan Lokasi anda" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Area</Form.Label>
              <Form.Control type="text" placeholder="Masukan Area anda" />
            </Form.Group>
            <Form.Group controlId="formGroupPassword">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" placeholder="Masukan Job Title anda" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="Success" onClick={handleClose}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>
      <br />
      
    </div>
  );
}
