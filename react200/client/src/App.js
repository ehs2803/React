import logo from './logo.svg';
import React from 'react';
import './App.css';
import ImportConponent from "./R003_ImportConponent"
import LifecycleEx from "./R007_LifecycleEx"
import Es6 from "./R009_Es6"
import Variable from './R010_Variable'
import SpreadOperator from './R011_SpreadOperator'

function App() {
  return (
    <div>
	    <h1>Start React 200!</h1>
	    <p>HTML 적용하기</p>
        <ImportConponent></ImportConponent>
        <LifecycleEx
            prop_value = 'FromApp.js'
        />
        <Es6/>
        <Variable/>
        <SpreadOperator/>
    </div>
  );
}

export default App;
