import React, {Component} from "react";
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";
import './App.css'

export default class App extends Component {
    // 初始化状态
    state = {
        todos: [
            {id: '001', name: '吃饭', done: true},
            {id: '002', name: '睡觉', done: true},
            {id: '003', name: '敲代码', done: false}
        ]
    }

    // 子组件与父组件通信
    // 父组件通过props传递函数，子组件调用props中的函数以传递

    // 添加TODO
    addTodo = (todoObj) => {
        // 获取原todos
        const {todos} = this.state
        // 追加一个todo
        const newTodos = [todoObj, ...todos]
        // 更新状态
        this.setState({todos: newTodos})
    }

    // 更新TODO
    updateTodo = (id, done) => {
        const {todos} = this.state
        // 遍历每个todo，比较id。如果id与要修改的id相同，则修改其done值
        const newTodos = todos.map(todoObj => {
            if (todoObj.id === id) {
                return {...todoObj, done: done}
            } else return todoObj
        })
        // 更新state
        this.setState({todos: newTodos})
    }

    // 删除TODO
    deleteTodo = (id) => {
        const {todos} = this.state
        const newTodos = todos.filter(todoObj => todoObj.id !== id)
        this.setState({todos: newTodos})
    }

    // 批量删除
    deleteCheckedTodo = () => {
        const {todos} = this.state
        const newTodos = todos.filter(todoObj => todoObj.done !== true)
        this.setState({todos: newTodos})
    }

    // 批量勾选
    batchCheck = (checked) => {
        const {todos} = this.state
        const newTodos = todos.map(todoObj => {
            return {...todoObj, done: checked}
        })

        this.setState({todos: newTodos})
    }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={this.state.todos} deleteCheckedTodo={this.deleteCheckedTodo}
                            batchCheck={this.batchCheck}/>
                </div>
            </div>
        )
    }
}