import React, {Component} from 'react';
import './App.css'
import Search from "./components/Search";
import List from "./components/List";

class App extends Component {

    state = {
        items: [], // 搜索结果
        isFirst: true, // 是否第一次加载页面
        isLoading: false, // 是否处于加载中
        errorMessage: '' // 存储错误信息
    }

    updateState = (stateObj) => {
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="container">
                <Search updateState={this.updateState}/>
                <List {...this.state}/>
            </div>
        );
    }
}

export default App;