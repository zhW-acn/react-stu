import React, {Component} from 'react';
import PhotoItem from "../components/PhotoItem";
import axios from "axios";
import {NavLink} from "react-router-dom";

class Photo extends Component {

    state = {
        stuAvatarInfo: [
            {
                name: "",
                url: ""
            }
        ]
    }
    getData = () => {
        axios.get('http://localhost:8848/stus').then(
            response => {
                this.setState(
                    {
                        stuAvatarInfo:
                            response.data.map(item => ({
                                id: item.id,
                                name: item.name,
                                url: item.avatar
                            }))
                    })
            },
            error => {
                alert('获取数据失败' + error.message)
            }
        )
    }

    componentDidMount() {
        this.getData();
    }

    handleClick = () =>{
        const {updateItemPoint} = this.props
        updateItemPoint("学生信息")
    }

    render() {
        return (
            <div>
                <h2>照片墙</h2>
                <ul className="photo-ul">
                    {
                        this.state.stuAvatarInfo.map(
                            (item) => {
                                return (
                                    /*点击跳转到学生信息*/
                                    <li key={item.url} className="photo-li" onClick={this.handleClick}>
                                        <NavLink to={`/studentInfo/?stuid=${item.id}`}>
                                            <PhotoItem item={item} />
                                        </NavLink>
                                    </li>
                                )
                            })
                    }
                </ul>
            </div>
        );
    }
}

export default Photo;