import React from 'react'

class IdSearch extends React.Component {

    handleChange = event => {
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {
        return(
            <input
                type='text'
                onChange={this.props.handleChange}
            />
        )
    }
}

export default IdSearch