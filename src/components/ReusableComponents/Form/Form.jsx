import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Text from "../InputControls/Text.jsx";
import Radio from "../InputControls/Radio.jsx";
import CheckBox from "../InputControls/CheckBox.jsx";
import Button from "../InputControls/Button.jsx";
import * as actions from "../../../actions/index.js";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        email: "",
        portfolioLink: "",
        gender: "",
        hobbies: { sports: false, programming: false },
        skills: { leadership: false, timeManagement: false },
      },
    };
  }

  handleHobbies = (value) => {
    let fields = { ...this.state.fields };
    fields.hobbies[value] = !fields.hobbies[value];
    this.setState({ fields });
    console.log(this.state.fields.hobbies);
  };
  handleSkills = (value) => {
    let fields = { ...this.state.fields };

    fields.skills[value] = !fields.skills[value];
    this.setState({ fields });
  };

  componentDidMount() {
    if (this.props.userData && this.props.specificUserData) {
      // let fields={...this.state.fields};
      this.setState({ fields: this.props.specificUserData });
    }
  }

  render() {
    return (
      <form>
        <div>
          <div className="form-group">
            <label htmlFor="name">Enter Name</label>
            <Text
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              onChange={(e) => {
                let fields = { ...this.state.fields };
                fields["name"] = e.target.value;
                this.setState({ fields });
              }}
              value={this.state.fields.name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <Text
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              onChange={(e) => {
                let fields = { ...this.state.fields };
                fields["email"] = e.target.value;
                this.setState({ fields });
              }}
              value={this.state.fields.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="portfolioLink">Portfolio Link</label>
            <Text
              type="text"
              className="form-control"
              id="portfolioLink"
              placeholder="Enter portfolio link"
              onChange={(e) => {
                let fields = { ...this.state.fields };
                fields["portfolioLink"] = e.target.value;
                this.setState({ fields });
              }}
              value={this.state.fields.portfolioLink}
            />
          </div>

          <div className="form-group">
            <h5>Gender</h5>
            <div className="form-check">
              <label className="form-check-label">
                <Radio
                  type="radio"
                  className="form-check-input"
                  name="optionsRadios"
                  id="optionsRadios1"
                  defaultValue="option1"
                  onChange={() => {
                    let fields = { ...this.state.fields };
                    fields["gender"] = "male";
                    this.setState({ fields });
                  }}
                  checked={this.state.fields.gender === "male" ? true : false}
                />
                Male
              </label>
            </div>
            <div className="form-check">
              <label className="form-check-label">
                <Radio
                  type="radio"
                  className="form-check-input"
                  name="optionsRadios"
                  id="optionsRadios2"
                  defaultValue="option2"
                  onChange={() => {
                    let fields = { ...this.state.fields };
                    fields["gender"] = "female";
                    this.setState({ fields });
                  }}
                  checked={this.state.fields.gender === "female" ? true : false}
                />
                Female
              </label>
            </div>
            <div className="form-check ">
              <label className="form-check-label">
                <Radio
                  type="radio"
                  className="form-check-input"
                  name="optionsRadios"
                  id="optionsRadios3"
                  defaultValue="option3"
                  onChange={() => {
                    let fields = { ...this.state.fields };
                    fields["gender"] = "others";
                    this.setState({ fields });
                  }}
                  checked={this.state.fields.gender === "others" ? true : false}
                />
                Others
              </label>
            </div>
          </div>

          <div className="row form-group">
            <div className="col-md-6">
              <h6 className="">Hobbies</h6>
              <div className="form-check">
                <label className="form-check-label">
                  <CheckBox
                    className="form-check-input"
                    type="checkbox"
                    onChange={() => {
                      this.handleHobbies("sports");
                    }}
                    checked={this.state.fields.hobbies["sports"]}
                  />
                  Sports
                </label>
              </div>
              <div className="form-check disabled">
                <label className="form-check-label">
                  <CheckBox
                    className="form-check-input"
                    type="checkbox"
                    onChange={() => {
                      this.handleHobbies("programming");
                    }}
                    checked={this.state.fields.hobbies["programming"]}
                  />
                  Computer Programming
                </label>
              </div>
            </div>
            <div className="col-md-6">
              <h6>Skills</h6>
              <div className="form-check">
                <label className="form-check-label">
                  <CheckBox
                    className="form-check-input"
                    type="checkbox"
                    onChange={() => {
                      this.handleSkills("leadership");
                    }}
                    checked={this.state.fields.skills["leadership"]}
                  />
                  Leadership
                </label>
              </div>
              <div className="form-check disabled">
                <label className="form-check-label">
                  <CheckBox
                    className="form-check-input"
                    type="checkbox"
                    onChange={() => {
                      this.handleSkills("timeManagement");
                    }}
                    checked={this.state.fields.skills["timeManagement"]}
                  />
                  Time management
                </label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <Button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  console.log(this.state);

                  if (this.props.updateFlag) {
                    this.props.updateFormData({
                      data: this.state.fields,
                      index: this.props.index,
                    });
                    this.props.handleClose();
                  } else {
                    this.props.addFormData(this.state.fields);
                  }
                  this.props.history.push("/table");
                }}
              >
                {this.props.updateFlag ? "Update" : "Submit"}
              </Button>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </form>
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
  addFormData: (data) => dispatch(actions.formRequest(data)),
  updateFormData: (data) => dispatch(actions.updateFormData(data)),
});
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Form));
