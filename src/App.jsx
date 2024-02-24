import React, {Component} from 'react';
import {Routes, Route, Navigate, NavLink} from 'react-router-dom'
import About from "./pages/About";
import Home from "./pages/Home";

class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header">
                            <h2>React Router Demo</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/* 路由链接切换组件，类比a标签 */}
                            {/*<a className="list-group-item" href="./about.html">About</a>*/}
                            <NavLink className="list-group-item" to="/about">About</NavLink>
                            <NavLink className="list-group-item" to="/home">Home</NavLink>
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由 */}
                                {/* uri与path匹配成功就展示element里的组件 */}
                                <Routes>
                                    <Route path="/about" element={<About/>}/>
                                    <Route path="/home" element={<Home/>}/>
                                    {/*Navigate表示path默认的组件渲染*/}
                                    <Route path="/" element={<Navigate to="/home"/>}></Route>
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;