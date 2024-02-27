import React, {Component} from 'react';
import './index.css'
import SidebarItem from "../SidebarItem";
import {NavLink} from "react-router-dom";

class Sidebar extends Component {

    render() {
        const {items, itemPoint,updateItemPoint} = this.props
        return (
            <div className="sidebar">
                <ul>
                    {/*这里用map遍历*/}
                    {
                        items.map(item => {
                            return (
                                <NavLink key={item.itemUri} to={item.itemUri}>
                                    <SidebarItem name={item.itemName} itemPoint={itemPoint} updateItemPoint={updateItemPoint}/>
                                </NavLink>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Sidebar;