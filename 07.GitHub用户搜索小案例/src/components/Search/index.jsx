import React, {Component} from 'react';
import axios from "axios";
import PropTypes from "prop-types";

class Search extends Component {

    static propTypes = {
        updateState: PropTypes.func.isRequired
    }
    search = () => {
        const {updateState} = this.props
        updateState({isFirst: false, isLoading: true})
        // 获取输入，两次解构赋值并将value重命名为keyWord
        const {inputSearch: {value: keyWord}} = this
        // 发送请求
        axios.get("https://api.github.com/search/users?q=" + keyWord).then(
            response => {
                updateState({isLoading: false})
                const itemsArr = response.data.items;
                const getFilterItems = this.filterItems(itemsArr)
                updateState({items: getFilterItems})
            },
            error => {
                updateState({errorMessage: error.message})
            }
        )
    }

    // 处理参数
    filterItems = (itemsArr) => {
        return itemsArr.map(item => {
            return {
                "login": item.login,
                "avatar_url": item.avatar_url,
                "html_url": item.html_url
            }
        })
    }

    // 键盘输入回车也会调用search
    doSearch = (event) => {
        if (event.keyCode !== 13) {
            return
        }
        this.search()
    };

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <input ref={c => this.inputSearch = c} onKeyUp={this.doSearch} type="text"
                       placeholder="请输入关键字"/>&nbsp;
                <button onClick={this.search}>搜素</button>
            </section>
        );
    }
}

export default Search;