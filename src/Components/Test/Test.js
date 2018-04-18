import React from 'react'

class Test extends React.Component {

    state = {
        data: null
    }

    componentDidMount() {
        fetch(`${process.env.PUBLIC_URL}/data.json`)
            .then(
                response => response.json()
            ).then(
            data => this.setState({data})
        )
    }

    render() {
        const {data} = this.state

        return (
            <div>
                {
                    console.log(data)
                }
            </div>
        )
    }
}

export default Test