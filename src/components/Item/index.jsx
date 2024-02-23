import React, {Component} from 'react';
import './index.css'
import PropTypes from "prop-types";

class Item extends Component {

    static propType = {
        updateTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired
    }

    state = {mouse: false}// 标识鼠标移入移出

    handleMouse = (flag) => { // 鼠标移入移出的回调
        return () => {
            this.setState({mouse: flag})
        }
    }

    handleCheck = (id) => { // TODO项的勾选回调
        const {updateTodo} = this.props
        return (event) => {
            updateTodo(id, event.target.checked)
        }
    };
    handleDelete = (id) => {// TODO项的删除
        return () => {
            // 指定window的confirm方法
            if (!window.confirm('确定删除?')) {
                return
            }
            const {deleteTodo} = this.props
            deleteTodo(id)
        }
    };

    render() {
        const {id, name, done} = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor: mouse ? '#ddd' : '#fff'}}
                onMouseLeave={this.handleMouse(false)}
                onMouseEnter={this.handleMouse(true)}>
                <label>
                    {/*defaultChecked默认是否勾选,只调用一次。checked是否勾选，checked改变需要写onChange*/}
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDelete(id)} className="btn btn-danger"
                        style={{display: mouse ? 'block' : 'none'}}>删除
                </button>
            </li>
        );
    }
}

export default Item;