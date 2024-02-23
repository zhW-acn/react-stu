import React, {Component} from 'react';
import './index.css'

class Item extends Component {

    state = {mouse: false}

    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    render() {
        const {name, done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse ? '#ddd' : '#fff'}}
                onMouseLeave={this.handleMouse(false)}
                onMouseEnter={this.handleMouse(true)}>
                <label>
                    {/*defaultChecked默认是否勾选和checked是否勾选，checked改变需要另写函数*/}
                    <input type="checkbox" defaultChecked={done}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除</button>
            </li>
        );
    }
}

export default Item;