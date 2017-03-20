import React, {Component} from 'react';
import {connect} from 'react-redux';




class ResponseMethod extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {data} = this.props.response;

        return (
                <li>
                    <div className="collapsible-header">
                        <i className="material-icons">filter_drama</i>Method</div>
                    <div className="collapsible-body">
                        <textarea readOnly id="ResponseMethod" className="materialize-textarea"
                            type="text" value={data.config.method.toUpperCase()}/>
                    </div>
                </li>
        )
    }
}


function mapStateToProps({response}) {
    return {response: response.response}
}

export default connect(mapStateToProps)(ResponseMethod);
