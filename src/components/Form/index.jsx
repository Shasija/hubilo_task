import React from "react";
import Form from "../ReusableComponents/Form/Form.jsx";
import Layout from "../../containers/Layout.jsx";
const FormContainer = () => {
  return (
    <div className="overflow-hidden">
      <div className="row mt-5">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <h4 className="text-center">Hubilo - Demo</h4>
          <Form />
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default Layout(FormContainer);
