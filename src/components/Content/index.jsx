import React, {Component} from 'react';
import './index.css'
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "../../pages/Home";

class Content extends Component {
    render() {
        const {items} = this.props
        return (
            <div className="content">
                <Routes>
                    {/*默认组件渲染*/}
                    <Route path="/" element={<Navigate to="/home"/>}></Route>
                    {/*这里也用map遍历*/}
                    {
                        items.map(item => {
                            return (
                                <Route key={item.itemUri} path={item.itemUri} element={item.itemPage}></Route>
                            )
                        })
                    }
                </Routes>
            </div>
        );
    }
}

export default Content;