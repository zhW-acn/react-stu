import React, {Component} from 'react';
import './index.css'
import PropTypes from "prop-types";

class Footer extends Component {

    static propsType = {
        todos: PropTypes.array.isRequired,
        deleteCheckedTodo: PropTypes.func.isRequired,
        batchCheck: PropTypes.func.isRequired
    }

    // 批量删除
    handelDelete = () => {
        const {deleteCheckedTodo} = this.props
        if (!window.confirm('是否删除所有已完成TODO？')) {
            return
        }
        deleteCheckedTodo()
    };

    // 计算已完成TODO
    count() {
        const {todos} = this.props
        let sum = 0
        todos.forEach(todoObj => {
            if (todoObj.done === true)
                sum++;
        })
        return sum
    }

    // 批量勾选
    handleClick = () => {
        const {batchCheck} = this.props
        return (event) => {
            batchCheck(event.target.checked)
        }
    }

    render() {
        const {todos} = this.props

        /* reduce函数
        * 参数1：回调函数，回调函数参数1：初始值和返回值；回调函数参数2：子项
        * 参数2：初始值
        * */
        // const count = todos.reduce((pre, todo) => {return pre + (todo.done ? 1 : 0)}, 0)
        return (
            <div className="todo-footer">
                <label>
                    <input onChange={this.handleClick()} type="checkbox"
                           checked={this.count() === todos.length && todos.length !== 0}/>
                </label>
                <span>
                    <span>已完成 {this.count()}/{todos.length}</span>
                </span>
                <button onClick={this.handelDelete} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}

export default Footer;