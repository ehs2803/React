import logo from './logo.svg';
import React from 'react';
import './App.css';
import ImportConponent from "./R003_ImportConponent"
import LifecycleEx from "./R007_LifecycleEx"
import Es6 from "./R009_Es6"
import Variable from './R010_Variable'
import SpreadOperator from './R011_SpreadOperator'
import ClassPrototype from './R012_Class&Prototype'
import ArrowFunc from './R013_ArrowFunction'
import ForEach from './R014_ForEach'
import Map from './R015_Map'
import Jquery from './R016_Jquery'
import Props from './R017_Props'
import PropsDatatype from './R018_PropsDatatype'
import PropsBoolean from './R019_PropsBoolean'
import PropsObjVal from './R020_PropsObjVal'
import PropsRequired from './R021_PropsRequired'
import PropsDefault from './R022_PropsDefault'
import PropsNode from './R023_PropsNode'

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
        <ClassPrototype/>
        <ForEach/>
        <Map/>
        <Jquery/>
        <Props props_val="THIS IS PROPS"/>
        <PropsDatatype
            String="react"
            Number={200}
            Boolean={1==1}
            Array={[0, 1, 8]}
            ObjectJson={{react:"리액트", twohundred:"200"}}
            Function={console.log("FunctionProps: function!")}
        />
        <PropsBoolean BooleanTrueFalse={false}/>
        <PropsBoolean BooleanTrueFalse/>
        <PropsObjVal ObjectJson={{react:"리액트", twohundred:"200"}}/>
        <PropsDefault ReactNumber={200}/>
        <PropsNode>
            <span>node from App.js</span>
        </PropsNode>

    </div>
  );
}

export default App;
