import React, {Component} from 'react';
class PhotoItem extends Component {
    render() {
        const {item} = this.props
        return (
            <div>
                <img src={'http://localhost:8848/avatar/' + item.url + '.png'} style={{width: "100px"}}
                     alt="用户头像"/>
                <p className="card-text">{item.name}</p>
            </div>
        );
    }
}

export default PhotoItem;