import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="overflow-hidden">
        <div className="row mt-5">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <h4 className="text-center">Hubilo - Demo</h4>
            <form>
              <div>
                <div className="form-group">
                  <label htmlFor="name">Enter Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="portfolioLink">Portfolio Link</label>
                  <input
                    type="text"
                    className="form-control"
                    id="portfolioLink"
                    placeholder="Enter portfolio link"
                  />
                </div>

                <div className="form-group">
                  <h5>Gender</h5>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="optionsRadios"
                        id="optionsRadios1"
                        defaultValue="option1"
                        defaultChecked
                      />
                      Male
                    </label>
                  </div>
                  <div className="form-check">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="optionsRadios"
                        id="optionsRadios2"
                        defaultValue="option2"
                      />
                      Female
                    </label>
                  </div>
                  <div className="form-check ">
                    <label className="form-check-label">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="optionsRadios"
                        id="optionsRadios3"
                        defaultValue="option3"
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
                        <input className="form-check-input" type="checkbox" />
                        Sports
                      </label>
                    </div>
                    <div className="form-check disabled">
                      <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" />
                        Computer Programming
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h6>Skills</h6>
                    <div className="form-check">
                      <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" />
                        Leadership
                      </label>
                    </div>
                    <div className="form-check disabled">
                      <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" />
                        Time management
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4"></div>
                  <div className="col-md-4">
                    <button type="submit" className="btn btn-primary ">
                      Submit
                    </button>
                  </div>
                  <div className="col-md-4"></div>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    );
  }
}

export default Form;
