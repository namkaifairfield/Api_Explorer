import React, {Component} from 'react';
import {connect} from 'react-redux';




class ResponseBody extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.response, `i'm this.props.respnse on body`);
        let {data} = this.props.response;
        let jsonData = JSON.stringify(data.data, null, "\t")

        return (
                <li>
                    <div className="collapsible-header">
                        <i className="material-icons">filter_drama</i>Body</div>
                    <div className="collapsible-body">
                        <textarea readOnly id="ResponseBody" className="materialize-textarea"
                            type="text" value={jsonData}/>
                    </div>
                </li>
        )
    }
}


function mapStateToProps({response}) {
    return {response: response.response}
}

export default connect(mapStateToProps)(ResponseBody);
