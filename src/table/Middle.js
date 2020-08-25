import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function Middle({ posts, loading }) {
  const [show, setShow] = useState(
    "modal-four" | "modal-five" | "modal-six" | ("close" > "close")
  );

  const handleCloseUpdate = () => setShow("close");
  const handleShowUpdate = () => setShow("modal-four");

  const handleCloseDelete = () => setShow("close");
  const handleShowDelete = () => setShow("modal-five");

  const handleCloseInsert = () => setShow("close");
  const handleShowInsert = () => setShow("modal-six");

  // if (loading) {
  //   return <h2>Loading...</h2>;
  // }
  return (
    <div>
      <Button
        className="btn btn-primary mb-3"
        // style={{ width: "0" }}
        onClick={handleShowInsert}
      >
        Tambah Data
      </Button>
      <div className=" table-responsive topdown">
        <table className="table table-bordered mb-5 table-striped">
          <thead className="bg-success text-center text-white">
            <tr>
              <th scope="col">Nik</th>
              <th scope="col">Nama</th>
              <th scope="col">Lokasi</th>
              <th scope="col">Area</th>
              <th scope="col">Job Title</th>
              <th scope="col">Masuk</th>
              <th scope="col">Pulang</th>
              <th scope="col">Interval</th>
              <th scope="col">Tools</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((item, index2) => {
              return [
                <tr key={`middleTable-${index2}`}>
                  <td className="text-center">{item._id}</td>
                  <td>{item.name}</td>
                  <td>{item.locations}</td>
                  <td>{item.areas}</td>
                  <td>{item.jobs}</td>
                  <td>{item.enter}</td>
                  <td>{item.back}</td>
                  <td>{item.interval}</td>
                  <td className="text-right">
                    <Button
                      className="btn btn-warning  badge-pill"
                      style={{ width: "80px" }}
                      onClick={handleShowUpdate}
                    >
                      Update
                    </Button>{" "}
                    <Button
                      className="btn btn-danger badge-pill"
                      style={{ width: "80px" }}
                      onClick={handleShowDelete}
                    >
                      Delete
                    </Button>{" "}
                  </td>
                </tr>,
              ];
            })}
          </tbody>
        </table>
        {/* Modal Update */}
        <Modal
          show={show === "modal-four"}
          onHide={handleCloseUpdate}
          className="modal-dialog-scrollable"
        >
          <Modal.Header closeButton>
            <Modal.Title>Update Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>NIK</Form.Label>
                <Form.Control type="text" placeholder="Masukan Nik Anda" />
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
                <Form.Control
                  type="text"
                  placeholder="Masukan Job Title anda"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Masuk</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukan jam kehadiran anda"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Pulang</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukan jam pulang anda anda"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Interval</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukan jam interval anda"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseUpdate}>
              Tutup
            </Button>
            <Button variant="success" onClick={handleCloseUpdate}>
              Simpan
            </Button>
          </Modal.Footer>
        </Modal>
        {/* end of modal Update */}

        {/* modal delete */}
        <Modal show={show === "modal-five"} onHide={handleCloseDelete}>
          <Modal.Header closeButton>
            <Modal.Title>Update Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>Apakah anda yakin untuk menghapus tabel ini?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseDelete}>
              Close
            </Button>
            <Button variant="danger" onClick={handleCloseDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
        {/* end of modal delete */}

        {/* modal of insert data */}
        <Modal
          show={show === "modal-six"}
          onHide={handleCloseInsert}
          className="modal-dialog-scrollable"
        >
          <Modal.Header closeButton>
            <Modal.Title>Tambah data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formGroupEmail">
                <Form.Label>NIK</Form.Label>
                <Form.Control type="text" placeholder="Masukan Nik Anda" />
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
                <Form.Control
                  type="text"
                  placeholder="Masukan Job Title anda"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Masuk</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukan jam kehadiran anda"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>Pulang</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukan jam pulang anda anda"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label>interval</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Masukan jam interval anda"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseInsert}>
              Close
            </Button>
            <Button variant="success" onClick={handleCloseInsert}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
        {/* end of modal insert of data */}
      </div>
    </div>
  );
}
