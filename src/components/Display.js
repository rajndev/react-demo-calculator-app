import React, { Component } from 'react'
import $ from "jquery"

class Display extends Component {
    constructor(props){
        super(props)
       this.textareaRef = React.createRef(null);
    }
    
    componentDidMount () {
        this.props.getRef(this.textareaRef);
        $("#user-inputs").on( "keypress", function(e) {
            if(e.key !== 'Backspace')
            {
                e.preventDefault();
                return false;
            }
        });
    }

    render() {
        return (
            <div className="display">
                <div>
                    <textarea 
                    type="text" 
                    id="user-inputs" 
                    className="user-inputs" 
                    value={this.props.value} 
                    ref={this.textareaRef}
                    onChange={(event) => this.props.onChange(event)}
                    onSelect={this.props.onSelect}/>
                </div>
            </div>
        )
    }
}

export default Display;