import React, { Component } from 'react'
import { Button } from 'rebass'
class Form extends Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        window.gtag("conversion", "click")
    }

    render() {
        return (
            <div className='au'>

            <Button variant='secondary' onClick={this.handleClick}>Contact us</Button>

            </div>
        )
    }
}

export default Form;
