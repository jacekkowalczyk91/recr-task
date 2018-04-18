import React from 'react'

class Test extends React.Component {

    state = {
        data: null
    }

    componentDidMount() {
        fetch(`${process.env.PUBLIC_URL}/data/data.json`)
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
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                </table>
            </div>
        )
    }
}

export default Test