import React, {Component} from 'react';
import {Space, Table} from 'antd';
import axios from "axios";

// 定义行数据格式

// 要渲染的数据


class SearchResult extends Component {

    state = {
        columns: [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
                render: (text) => text,
            },
            {
                title: 'Age',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: 'Avatar',
                dataIndex: 'avatar',
                key: 'avatar',
                render: (avatar) => (
                    <div key={avatar} style={{overflow: 'hidden'}}>
                        <img style={{height: '100px', width: '100px'}} alt={'头像'}
                             src={'http://localhost:8848/avatar/' + avatar + '.png'}/>
                    </div>
                )
            },
            {
                title: 'Action',
                key: 'action',
                render: (_, record) => (
                    <Space size="middle">
                        {/*这里定义每条记录的操作*/}
                        {record.name}
                    </Space>
                )
            }
        ],
        bottom: 'bottomRight'// 分页按钮在右下角
    }

    // 初始化获取所有data
    getData = () => {
        const {updData} = this.props
        axios.get('http://localhost:8848/stus').then(
            response => {
                updData(response.data)
            },
            error => {
                alert('获取数据失败' + error.message)
            }
        )
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        const {bottom, columns} = this.state;
        const {data} = this.props
        return (
            <div>
                <Table columns={columns}
                       dataSource={data}
                       rowKey={record => record.id}
                       pagination={{
                           position: [bottom]
                       }}
                />
            </div>
        );
    }
}

export default SearchResult;