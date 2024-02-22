import React,{Component} from "react";
import Hello from "./components/Hello/Hello";
import Aca from "./components/imaca/Aca";
export default class App extends Component{
    render() {
        return (
            <div>
                <Hello/>
                <Aca/>
            </div>
        )
    }
}