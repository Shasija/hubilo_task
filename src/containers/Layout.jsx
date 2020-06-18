import React from "react";
import Header from "../components/ReusableComponents/Header/Header.jsx";
const Layout = (WrappedComponent) => {
  return () => {
    return (
      <>
        <Header />
        <WrappedComponent />
      </>
    );
  };
  //   console.log("component", WrappedComponent);
};

export default Layout;
