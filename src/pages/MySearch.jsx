import React, {Component} from 'react';
import {Input} from 'antd';
import SearchResult from "../components/SearchResult";

const {Search} = Input;

class MySearch extends Component {
    render() {
        return (
            <div>
                <Search placeholder="在此输入学生信息" enterButton="点击搜索" size="large" loading={false}/>
                {/*这里展示搜索结果，姑且展示学生姓名
                创个数据库先，定义学生信息：
                    id,name,age,avatar
                */}
                <SearchResult/>
            </div>
        );
    }
}

export default MySearch;