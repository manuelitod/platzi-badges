import React, { useState } from "react";
import Badge from "../components/Badge";
import { Link } from "react-router-dom";
import confLogo from "../images/platziconf-logo.svg";
import { Modal, Button } from "react-bootstrap";

const DeleteModal = (props) => {
  const badge = props.badge;

  return (
    <>
      <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Delete {badge.firstName} badge</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete {badge.firstName} {badge.lastName}{" "}
          badge?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={props.onDeleteBadge}>
            Yes
          </Button>
          <Button variant="secondary" onClick={props.onHide}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const BadgeDetails = (props) => {
  const [showModal, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Logo de la conferencia" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>
                  {props.badge.firstName} {props.badge.LastName}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={props.badge.firstName}
                lastName={props.badge.lastName}
                twitterUsername={props.badge.twitter}
                jobTitle={props.badge.jobTitle}
                email={props.badge.email}
              />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <div>
                  <Link
                    className="btn btn-primary mb-4"
                    to={`/badges/${props.badge.id}/edit`}
                  >
                    Edit
                  </Link>
                </div>
                <div>
                  <button className="btn btn-danger" onClick={handleShow}>
                    Delete
                  </button>
                  <DeleteModal
                    badge={props.badge}
                    show={showModal}
                    onHide={handleClose}
                    onDeleteBadge={props.onDeleteBadge}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
};

export default BadgeDetails;
