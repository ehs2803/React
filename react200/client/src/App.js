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
import ReactState from './R024_ReactState'
import SetState from './R025_SetState'
import ForceUpdate from './R026_ForceUpdate'
import ComponentClass from './R027_ComponentClass'
import PureComponentClass from './R028_PureComponentClass'
import ShallowEqual from './R029_ShallowEqual'
import FunctionComponent from './R030_FunctionComponent'
import ReactHook from './R031_ReactHook'
import Fragments from './R032_Fragments'
import ReturnMap from './R033_ReturnMap'
import ReactstrapAlerts from './R034_ReactstrapAlerts'
import 'bootstrap/dist/css/bootstrap.css'
import ReactstrapBadges from './R035_ReactstrapBadges'
import ReactstrapBreadcrumbs from './R036_ReactstrapBreadcrumbs'
import ReactstrapDropdown from './R037_ReactstrapDropdown'
import ReactstrapButtonGroup from './R038_ReactstrapButtonGroup'
import R039_ReactstrapBottons from "./R039_ReactstrapBottons";
import R040_ReactstrapCard from "./R040_ReactstrapCard";
import R041_ReactstrapCarousel from "./R041_ReactstrapCarousel";
import R042_ReactstrapCollapse from "./R042_ReactstrapCollapse";
import R043_ReactstrapFade from "./R043_ReactstrapFade";
import R044_ReactstrapForm from "./R044_ReactstrapForm";
import R047_ReactstrapListGroup from "./R047_ReactstrapListGroup";
import R048_ReactstrapModal from "./R048_ReactstrapModal";
import R049_ReactstrapNavbar from "./R049_ReactstrapNavbar";
import R050_ReactstrapPagination from "./R050_ReactstrapPagination";
import R051_ReactstrapPopover from "./R051_ReactstrapPopover";
import R052_ReactstrapProgress from "./R052_ReactstrapProgress";
import R053_ReactstrapSpinner from "./R053_ReactstrapSpinner";
import R054_ReactstrapTable from "./R054_ReactstrapTable";
import R055_ReactstrapTab from "./R055_ReactstrapTab";
import R056_Sweetalert2Basic from "./R056_Sweetalert2Basic";
import R057_Sweetalert2Position from "./R057_Sweetalert2Position";
import R058_Sweetalert2Confirm from "./R058_Sweetalert2Confirm";
function App() {
    return (
        <div>
            <h1>Start React 200!</h1>
            <p>HTML 적용하기</p>
            <ImportConponent></ImportConponent>
            <LifecycleEx
                prop_value='FromApp.js'
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
                Boolean={1 == 1}
                Array={[0, 1, 8]}
                ObjectJson={{react: "리액트", twohundred: "200"}}
                Function={console.log("FunctionProps: function!")}
            />
            <PropsBoolean BooleanTrueFalse={false}/>
            <PropsBoolean BooleanTrueFalse/>
            <PropsObjVal ObjectJson={{react: "리액트", twohundred: "200"}}/>
            <PropsDefault ReactNumber={200}/>
            <PropsNode>
                <span>node from App.js</span>
            </PropsNode>
            <ReactState reactString={"react"}/>
            <SetState/>
                <ForceUpdate/>
                <ComponentClass/>
                <PureComponentClass/>
                <ShallowEqual/>
            <FunctionComponent contents="[THIS IS FunctionComponent ]"/>
            <ReactHook/>
            <Fragments/>
            <ReturnMap/>
            <ReactstrapAlerts/>
            <ReactstrapBadges/>
            <ReactstrapBreadcrumbs/>
            <ReactstrapDropdown/>
            <ReactstrapButtonGroup/>
            <R039_ReactstrapBottons/>
            <R040_ReactstrapCard/>
            <R041_ReactstrapCarousel/>
                <R042_ReactstrapCollapse/>
                <R043_ReactstrapFade/>
                <R044_ReactstrapForm/>
            <R047_ReactstrapListGroup/>
            <R048_ReactstrapModal/>
            <R049_ReactstrapNavbar/>
            <R050_ReactstrapPagination/>
            <R051_ReactstrapPopover/>
            <R052_ReactstrapProgress/>
            <R053_ReactstrapSpinner/>
            <R054_ReactstrapTable/>
            <R055_ReactstrapTab/>
            <R056_Sweetalert2Basic/>
            <R057_Sweetalert2Position/>
                <R058_Sweetalert2Confirm/>
        </div>
    );
}

export default App;
