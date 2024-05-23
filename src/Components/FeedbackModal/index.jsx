import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./feedback.css"
export const FeedBackModal = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <div id="feedback-form-wrapper">
        <div id="floating-icon">
          <Button
            type="button"
            className="btn btn-primary btn-sm rounded-0"
            onClick={handleShow}
          >
            Feedback
          </Button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} size="md" backdrop="static" >
        <Modal.Header className="text-light" closeButton style={{background:"#1e2330", color:"white"}}>
          <Modal.Title>
            Content Business Writing Services Feedback
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>
                How satisfied are you with our content writing services?
              </Form.Label>
              <Form.Select defaultValue="Choose...">
                <option value={0}>Satisfied</option>
                <option value={1}>Not Satisfied</option>
                <option value={2}>Extremely Satisfied</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupImprove">
              <Form.Label>
                What can we do to improve our content writing services?
              </Form.Label>
              <Form.Control type="text" placeholder="Help us to improve our services..." />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupComments">
              <Form.Label>Additional Comments</Form.Label>
              <Form.Control type="text" placeholder="Write a detailed note..." />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default FeedBackModal;
