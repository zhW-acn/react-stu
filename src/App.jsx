import React, {Component} from 'react';
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import './App.css'
import Home from "./pages/Home";
import MySearch from "./pages/MySearch";
import Photo from "./pages/Photo";
import StudentInfo from "./pages/StudentInfo";

class App extends Component {

    // 这里需要放什么信息？ 我现在需要：遍历SideBarItem的名字，和他们对应的uri
    // 报错，不能在初始化时赋值
    // state = {
    //     items: [// 关于导航栏的信息
    //         {itemName: '首页', itemUri: '/home', itemPage: <Home/>},
    //         {itemName: '信息搜索', itemUri: '/search', itemPage: <Search/>},
    //         {itemName: '照片墙', itemUri: '/photo', itemPage: <Photo/>},
    //         {itemName: '学生信息', itemUri: '/studentInfo', itemPage: <StudentInfo/>}
    //     ],
    //     itemPoint: this.items[0].itemName // 当前导航栏指向
    // }
    constructor(props) {
        super(props);
        this.state = {
            items: [// 关于导航栏的信息
                {itemName: '首页', itemUri: '/home', itemPage: <Home/>},
                {itemName: '信息搜索', itemUri: '/search', itemPage: <MySearch/>},
                {itemName: '照片墙', itemUri: '/photo', itemPage: <Photo updateItemPoint={this.updateItemPoint}/>},
                {itemName: '学生信息', itemUri: '/studentInfo', itemPage: <StudentInfo/>}
            ],
            itemPoint: '首页'
        };
        // this.state.itemPoint = this.state.items[0].itemName; // 初始化当前导航栏指向
    }

    // 更新指向
    updateItemPoint = (name) => {
        this.setState({itemPoint: name})
    }


    componentDidMount() {
        if (performance.navigation.type === 1) {
            // 如果是从缓存加载的页面，则不执行状态更新操作`
            console.log('页面是从缓存加载的，执行状态更新操作');
            this.setState({itemPoint: this.state.itemPoint})
            window.location.href = 'http://localhost:3000/home'
        } else {
            // 执行其他初始化操作，例如状态更新等
            console.log('页面是重新加载的，执行状态更新操作');
            this.setState({itemPoint: "首页"})
        }
    }

    render() {
        return (
            <div className="container">
                <Sidebar {...this.state} updateItemPoint={this.updateItemPoint}/>
                <Content {...this.state}/>
            </div>
        );
    }
}

export default App;