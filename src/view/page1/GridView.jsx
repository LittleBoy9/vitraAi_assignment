import React, { useState } from "react";
import { Card, Button, Modal, Tabs, Tab } from "react-bootstrap";

import * as faIcon from "react-icons/fa";
import * as aiIcon from "react-icons/ai";
import * as riIcon from "react-icons/ri";

const GridView = ({ props }) => {
  const [modalShow, setModalShow] = useState(false);
  const DatailModal = (_props) => {
    return (
      <Modal
        {..._props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            <faIcon.FaUserAlt className="userIcon color" />
            {props.name}
          </Modal.Title>
          {props.isActive ? (
            <span className="greencircle active-inactive">Active</span>
          ) : (
            <span className="redcircle active-inactive">InActive</span>
          )}
        </Modal.Header>
        <Modal.Body>
          <Tabs
            defaultActiveKey="details"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="details" title="Details">
              <table>
                <tbody>
                  <tr>
                    <th>
                      <riIcon.RiMoneyDollarBoxLine className="color icon" />{" "}
                      <span className="d-none d-md-inline">Balance</span>
                    </th>
                    <td className="table-data color">
                      <b>{props.balance}</b>
                    </td>
                  </tr>
                  <tr>
                    <th>
                      <aiIcon.AiOutlineMail className="color icon" />{" "}
                      <span className="d-none d-md-inline">Email</span>
                    </th>
                    <td className="table-data">{props.email}</td>
                  </tr>
                  <tr>
                    <th>
                      <aiIcon.AiOutlinePhone className="color icon" />{" "}
                      <span className="d-none d-md-inline">Phone</span>
                    </th>
                    <td className="table-data">{props.phone}</td>
                  </tr>
                </tbody>
              </table>
            </Tab>
            <Tab eventKey="friends" title="Friends">
              {props.friends.map((friend, index) => {
                return (
                  <p className="friend-name" key={friend.id}>
                    <b>{index + 1}.</b> {friend.name}
                  </p>
                );
              })}
            </Tab>
          </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-primary" onClick={_props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  };

  return (
    <div className="card-container">
      <Card className="gridCard shadow">
        <Card.Body>
          <span className="card-header">
            <Card.Title className="color name">
              <span className="round">{props.name.charAt(0)}</span>

              {props.name}
            </Card.Title>
            <span
              className={`circle ${
                props.isActive ? "greencircle" : "redcircle"
              } `}
            ></span>
          </span>

          <span className="balance">
            <b>{props.balance}</b>
          </span>

          <span className="showModal">
            <aiIcon.AiOutlinePlusCircle
              onClick={() => setModalShow(true)}
              className="icon color"
            />
          </span>

          <DatailModal show={modalShow} onHide={() => setModalShow(false)} />
        </Card.Body>
      </Card>
    </div>
  );
};
export default GridView;
