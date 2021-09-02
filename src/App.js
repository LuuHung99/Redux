import React, { useState, useEffect, useMemo } from "react";
import TodoApp from "./components/todo_app";
import AppRedux from "./pages/index";
import Color from "./pages/ReduxColor/components/color";
import axios from "axios";
import "./App.css";

function App() {
  let person = {
    firstName: "Thau",
    lastName: "Nguyen",
    getFullName: function () {
      console.log(`My name is ${this.firstName} ${this.lastName}`);
    },
  };

  let logName = function (lang) {
    console.log(`My name is ${this.firstName} ${this.lastName}`);
    if (lang) {
      console.log(`I speak ${lang}`);
    }
  };
  logName.apply(person, ["Huy,Hai"]);
  // logFullName(); //"My name is Thau Nguyen"
  return (
    <>
      {/* <TodoApp /> */}
      <h1>hello Promise</h1>
    </>
  );
}

export default App;
