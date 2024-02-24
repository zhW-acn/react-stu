import React, {Component} from 'react';
import Item from "../Item";
import PropTypes from "prop-types";

class List extends Component {

    static propTypes = {
        items: PropTypes.array.isRequired,
        isFirst:PropTypes.bool.isRequired,
        isLoading:PropTypes.bool.isRequired,
        errorMessage:PropTypes.string.isRequired,
    }

    render() {
        const {
            items,
            isFirst,
            isLoading,
            errorMessage
        } = this.props
        return (
            <div className="row">
                {
                    isFirst ? <h3>welcome</h3> :
                    isLoading ? <h3>loading...</h3> :
                    errorMessage ? <h3 style={{color:'red'}}>{errorMessage}</h3> :
                    items.length !== 0 ? items.map(item => {
                        return <Item key={item.login} item={item}/>
                    }): '搜索为空'
                }
            </div>
        );
    }
}

export default List;