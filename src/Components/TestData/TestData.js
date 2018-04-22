import React from 'react'
import {Table} from 'react-bootstrap'
import IdSearch from "./IdSearch";
import FirstNameSearch from "./FirstNameSearch";
import LastNameSearch from "./LastNameSearch";
import DateOfBirthSearch from "./DateOfBirthSearch";
import CompanySearch from "./CompanySearch";
import NoteSearch from "./NoteSearch";
import './TestData.css'

class Test extends React.Component {

    state = {
        currentPage: 1,
        dataPerPage: 5,
        data: [],
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

    handleDateOfBirthChange = event => {
        this.setState({
            filteredDateOfBirth: event.target.value
        })
    }

    handleCompanyChange = event => {
        this.setState({
            filteredCompany: event.target.value
        })
    }

    handleNoteChange = event => {
        this.setState({
            filteredNote: event.target.value
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

    compareBy = key => {
        return function (a, b) {
            if (a[key] < b[key]) return -1;
            if (a[key] > b[key]) return 1;
            return 0;
        };
    }

    sortBy = key => {
        let arrayCopy = [...this.state.data];
        arrayCopy.sort(this.compareBy(key));
        this.setState({data: arrayCopy});
    }

    handlePageClick = event => {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    render() {

        const {data, currentPage, dataPerPage} = this.state

        const indexOfLast = currentPage * dataPerPage
        const indexOfFirst = indexOfLast - dataPerPage


        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(data.length / dataPerPage); i++) {
            pageNumbers.push(i);
        }

        const setPageNumbers = pageNumbers.map(number => {
            return (
                <div
                    style={{
                        display: 'inline-block',
                        marginRight: '5px',
                        marginLeft: '5px',
                        cursor: 'pointer',
                        color: 'blue'
                    }}
                    key={number}
                    id={number}
                    onClick={this.handlePageClick}
                >
                    {number}
                </div>
            );
        });
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
                            <DateOfBirthSearch
                                searchPhrase={this.state.filteredDateOfBirth}
                                handleChange={this.handleDateOfBirthChange}
                            />
                        </td>
                        <td>
                            <CompanySearch
                                searchPhrase={this.state.filteredCompany}
                                handleChange={this.handleCompanyChange}
                            />
                        </td>
                        <td>
                            <NoteSearch
                                searchPhrase={this.state.filteredNote}
                                handleChange={this.handleNoteChange}
                            />
                        </td>

                    </tr>
                    <tr>
                        <th onClick={() => this.sortBy('id')}>id</th>
                        <th onClick={() => this.sortBy('firstName')}>First name</th>
                        <th onClick={() => this.sortBy('lastName')}>Last name</th>
                        <th onClick={() => this.sortBy('dateOfBirth')}>Date of birth</th>
                        <th onClick={() => this.sortBy('company')}>Company</th>
                        <th onClick={() => this.sortBy('note')}>Note</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data && data
                            .slice(indexOfFirst, indexOfLast)
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
                            .filter(
                                data =>
                                    data.dateOfBirth.toString().includes(this.state.filteredDateOfBirth)
                            )
                            .filter(
                                data =>
                                    data.company.toLowerCase().includes(this.state.filteredCompany)
                            )
                            .filter(
                                data =>
                                    data.note.toString().includes(this.state.filteredNote)
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
                    <div>
                        {setPageNumbers}
                    </div>
                </Table>
            </div>
        )
    }
}

export default Test