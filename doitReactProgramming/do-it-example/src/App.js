import logo from './logo.svg';
import './App.css';
import React from 'react';

import TodaysPlanfrom from './03/TodaysPlan';
import TodaysPlan from "./03/TodaysPlan";
import PropsComponent from "./03/PropsComponent";
import ChildComponent from "./03/ChildComponent";
import {render} from "react-dom";


class App extends React.Component {
    render() {
        const array = [1, 2, 3];
        const obj = {name: 'title', age: 24};
        const node = <h1>node</h1>;
        const func = () => {
            console.log('message')
        };
        return (
        <ChildComponent
            boolValue={true}
            numValue={1}
            arrayValue={array}
            objValue={obj}
            nodeValue={node}
            funcValue={func}
        />
    );
    }
}

export default App;
