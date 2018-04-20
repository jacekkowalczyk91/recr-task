import React from 'react'
import {Table} from 'react-bootstrap'

class Test extends React.Component {

    state = {
        data: null,
        filteredId: '',
        filteredFirstName: '',
        filteredLastName: '',
        filteredDateOfBirth: '',
        filteredCompany: '',
        filteredNote: ''
    }

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
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
                        <td>
                            <input
                                name='filteredId'
                                type='text'
                                value={this.state.filteredId}
                                onChange={this.handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                name='filteredFirstName'
                                type='text'
                                value={this.state.filteredFirstName}
                                onChange={this.handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                name='filteredLastName'
                                type='text'
                                value={this.state.filteredLastName}
                                onChange={this.handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                name='filteredDateOfBirth'
                                type='text'
                                value={this.state.filteredDateOfBirth}
                                onChange={this.handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                name='filteredCompany'
                                type='text'
                                value={this.state.filteredCompany}
                                onChange={this.handleInputChange}
                            />
                        </td>
                        <td>
                            <input
                                name='filteredNote'
                                type='text'
                                value={this.state.filteredNote}
                                onChange={this.handleInputChange}
                            />
                        </td>

                    </tr>
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