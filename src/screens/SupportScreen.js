import React, { useState } from "react";
import { Button } from "../core-components/Button";
import { BrowserRouter, Route, Switch, Link, Redirect } from "react-router-dom";
import firebase from "firebase";
import { connect } from "react-redux";
import { buyStrategy } from "../redux/actions/mainCategoryActions";

export function SupportScreen(props) {
  

  return (
    <div className="screen">
      
      <br></br>
      <Link to="/mainCategory">
        <Button id="supportButton" text="Ich brauche Unterstützung"></Button>
      </Link>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    // buyStrategy: (project) => dispatch(buyStrategy(project)),
  };
};

export default connect(null, mapDispatchToProps)(SupportScreen);
