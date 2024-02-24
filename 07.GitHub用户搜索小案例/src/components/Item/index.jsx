import React, {Component} from 'react';
import PropTypes from "prop-types";

class Item extends Component {
    static propTypes = {
        item:PropTypes.object.isRequired
    }
    render() {
        const {item} = this.props

        return (
            <div className="card">
                <a target="_blank" href={item.html_url}>
                    <img src={item.avatar_url} style={{width: "100px"}}
                         alt="用户头像"/>
                </a>
                <p className="card-text">{item.login}</p>
            </div>
        );
    }
}

export default Item;