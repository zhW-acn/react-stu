import React, {Component} from 'react';
import {nanoid} from 'nanoid'
import './index.css'
class Header extends Component {
    handleKeyUp = (event) =>{
        const addTodo = this.props.addTodo
        const {target,keyCode} = event
        const name = target.value.trim()
        // 没敲回车
        if(keyCode !== 13) return
        // 添加的todo不能为空
        if(name === ''){
            alert('输入不能为空')
            return
        }
        // 调用nanoid生成唯一字符串【类似uuid】
        const todoObj = {id:nanoid(),name:name,done:false}
        addTodo(todoObj)
        // 清空输入
        target.value = ''
    };
    render() {
        return (
            <div className="todo-header">
                <input onKeyUp={this.handleKeyUp} type="text" placeholder="输入TODO"/>
            </div>
        );
    }
}

export default Header;