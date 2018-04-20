import React from 'react'
import {Table} from 'react-bootstrap'

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
                <Table
                    striped
                    hover
                    condensed
                    responsive
                >
                    <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
                        <th></th>
                    </tr>
                    </thead>
                </Table>
            </div>
        )
    }
}

export default Test