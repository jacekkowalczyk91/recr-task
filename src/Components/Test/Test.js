import React from 'react'
import {Table} from 'react-bootstrap'
import IdSearch from "./IdSearch";
import FirstNameSearch from "./FirstNameSearch";
import LastNameSearch from "./LastNameSearch";

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

    handleIdChange = event => {
        this.setState({
            filteredId: event.target.value
        })
    }

    handleFirstNameChange = event => {
        this.setState({
            filteredFirstName: event.target.value
        })
    }

    handleLastNameChange = event => {
        this.setState({
            filteredLastName: event.target.value
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
                            <IdSearch
                                searchPhrase={this.state.filteredId}
                                handleChange={this.handleIdChange}
                            />
                        </td>
                        <td>
                            <FirstNameSearch
                                searchPhrase={this.state.filteredFirstName}
                                handleChange={this.handleFirstNameChange}
                            />
                        </td>
                        <td>
                           <LastNameSearch
                               searchPhrase={this.state.filteredLastName}
                               handleChange={this.handleLastNameChange}
                           />
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                        <td>

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
                        data && data
                            .filter(
                                data =>
                                    data.id.toString().includes(this.state.filteredId)
                            )
                            .filter(
                                data =>
                                    data.firstName.toLowerCase().includes(this.state.filteredFirstName)
                            )
                            .filter(
                                data =>
                                    data.lastName.toLowerCase().includes(this.state.filteredLastName)
                            )
                            .map(
                            data =>
                                <tr>
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