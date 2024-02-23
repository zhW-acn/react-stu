import React, {Component} from 'react';
import axios from 'axios'

class App extends Component {

    state = {stuData: ""}

    getStudentData = () => {
        // 发送get请求

        // 客户端在3000端口发送ajax请求给服务端的8848端口
        // ajax成功发送给服务端。服务端响应后，客户端同源策略发现不在一个端口
        // 客户端拦截了服务端的响应数据，导致不能接收数据

        // 如何解决：
        // 1.在package.json中配置【proxy: 代理地址】解决跨域
        // 代理端口与客户端发送请求的端口要一致【get里请求的是代理地址】
        // 通过代理，向服务端发送ajax请求【代理的proxy里是真正请求的地址】
        // 同源策略：【两个 URL 的协议 (protocol)、主机 (host) 和端口 (port) 都必须相同，才能被视为同源。如果不同源，浏览器就会阻止它们之间的通信。
        // 跨域问题本质是浏览器拒绝了自己的请求。因为服务器之间没有同源策略，所以会正常收发数据
        // 需要注意的是：该方法只能是3000端口找不到的资源才会找代理【3000端口优先级比8848大】，且代理不能绑定多个代理

        // 2.在src下新建setupProxy.js

        // 3.SpringBoot注解：@CrossOrigin(origins = "http://localhost:3000")
        // 这里使用的是方法3
        axios.get('http://localhost:8848/api/1/student').then(
            response => {// 成功的回调

                let str = ""
                response.data.forEach(stu => {
                    str = str + JSON.stringify(stu)
                })
                this.setState({stuData: str})
            },
            error => {// 失败的回调
                console.log('失败', error)
            }
        )
    };

    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取数据</button>
                <div>
                    {this.state.stuData}
                </div>
            </div>
        );
    }
}

export default App;