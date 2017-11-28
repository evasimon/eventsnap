import React from "react";
// style = {{ height: 300 }} 
const Jumbotron = ({ children }) =>
  <div className="jumbotron" style={{ backgroundColor: '#38527c'}}>
    {children}
  </div>;

export default Jumbotron;
