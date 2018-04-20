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
                        <th>id</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Date of birth</th>
                        <th>Company</th>
                        <th>Note</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data && data.map(
                            data =>
                                <tr key={data.id}>
                                    <td>{data.id}</td>
                                    <td>{data.firstName}</td>
                                    <td>{data.lastName}</td>
                                    <td>{data.dateOfBirth}</td>
                                    <td>{data.company}</td>
                                    <td>{data.note}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </Table>
            </div>
        )
    }
}

export default Test