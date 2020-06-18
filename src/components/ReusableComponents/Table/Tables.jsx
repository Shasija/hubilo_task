import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../../containers/Layout.jsx";
import { withRouter } from "react-router-dom";
import Button from "../InputControls/Button.jsx";
import CheckBox from "../InputControls/CheckBox.jsx";
import * as actions from "../../../actions/index.js";
import Modal from "react-bootstrap/Modal";
import Form from "../Form/Form.jsx";
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      dataIndex: "",
      dataIndexes: [],
    };
  }
  handleClose = () => {
    this.setState({ showModal: false });
  };
  handleMultipleSelect = (index) => {
    let dataIndexes = [...this.state.dataIndexes];
    if (dataIndexes.indexOf(index) === -1) {
      dataIndexes.push(index);
    } else {
      dataIndexes.slice(dataIndexes.indexOf(index));
    }
    this.setState({ dataIndexes });
  };
  render() {
    return (
      <>
        <Modal
          show={this.state.showModal}
          onHide={() => this.handleClose()}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <h6>Update Data</h6>
          </Modal.Header>
          <Modal.Body className="modal-body">
            <Form
              updateFlag={true}
              specificUserData={this.props.userData[this.state.dataIndex]}
              index={this.state.dataIndex}
              handleClose={this.handleClose.bind(this)}
            ></Form>
          </Modal.Body>
        </Modal>
        <Button
          className="btn btn-primary mt-2"
          onClick={() => {
            this.props.deleteMultipleData(this.state.dataIndexes);
            this.setState({ dataIndexes: [] });
          }}
        >
          Delete Selected Records
        </Button>
        <table className="table table-hover mt-2">
          <thead>
            <tr>
              <th scope="col">Index</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Portfolio Link</th>
              <th scope="col">Gender</th>
              <th scope="col">Hobbies</th>
              <th scope="col">Skills</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
              <th scope="col">Select</th>
            </tr>
          </thead>
          <tbody>
            {this.props.userData &&
              this.props.userData.map((obj, index) => {
                return (
                  <tr key={index} className="table-active">
                    <th scope="row">{index}</th>
                    <td>{obj.name}</td>
                    <td>{obj.email}</td>
                    <td>{obj.portfolioLink}</td>
                    <td>{obj.gender}</td>
                    <td>
                      {obj.hobbies.sports && "Sports"}
                      {obj.hobbies.programming && ", Computer Programming"}
                    </td>
                    <td>
                      {obj.skills.leadership && "Leadership"}
                      {obj.skills.timeManagement && ", Time Management"}
                    </td>
                    <td>
                      <Button
                        onClick={() => {
                          this.setState({ showModal: true, dataIndex: index });
                        }}
                      >
                        <FontAwesomeIcon icon={faPencilAlt} />
                      </Button>
                    </td>
                    <td>
                      <Button
                        onClick={() => {
                          console.log(this.props);
                          this.props.delFormData(index);
                          console.log(this.props.userData);
                        }}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </Button>
                    </td>
                    <td className="">
                      <CheckBox
                        className="form-check-input ml-3"
                        type="checkbox"
                        onChange={() => {
                          this.handleMultipleSelect(index);
                        }}
                        checked={
                          this.state.dataIndexes.indexOf(index) !== -1
                            ? true
                            : false
                        }
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("userdata", state.Form.userData);
  return {
    userData: state.Form.userData,
  };
};
const mapDispatchToProps = (dispatch) => ({
  delFormData: (data) => dispatch(actions.delFormData(data)),
  updateFormData: (data) => dispatch(actions.updateFormData(data)),
  deleteMultipleData: (data) => dispatch(actions.deleteMultipleData(data)),
});
export default Layout(
  withRouter(connect(mapStateToProps, mapDispatchToProps)(Table))
);
