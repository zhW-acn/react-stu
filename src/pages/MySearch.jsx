import React, {Component} from 'react';
import {Input} from 'antd';
import SearchResult from "../components/SearchResult";
import axios from "axios";

const {Search} = Input;

class MySearch extends Component {

    state = {
        stuData: [ // 数据渲染
            // {
            //     key: '1',
            //     name: 'aca',
            //     age: 32,
            //     avatar: 'http...'
            // }
        ]
    }

    getStudent = (e) => {
        const stuName = e.target.value
        if(stuName === '' || typeof stuName !== "string"){
            return
        }
        axios.get('http://localhost:8848/stu/' + stuName).then(
            response => {
                const data = response.data
                // 更新搜索结果
                this.setState({stuData: data})
            },
            error => {
                alert('请求出错' + error.message)
            }
        )
    };

    // 暴露更新data状态
    updData = (data) =>{
        this.setState({stuData:data})
    }

    render() {
        return (
            <div onKeyUp={this.getStudent}>
                <Search onSearch={this.getStudent} placeholder="在此输入学生姓名以搜索" size="large" loading={false}/>
                {/*这里展示搜索结果，姑且展示学生姓名
                创个数据库先，定义学生信息：
                    id,name,age,avatar
                */}
                <SearchResult updData={this.updData} data={this.state.stuData}/>
            </div>
        );
    }
}

export default MySearch;