import React, { Component } from 'react';
import ResultsHolder from './ResultsHolder';
import Button from './Button';
import Form from './Form';

const padding = { paddingLeft: 61 };
const width = {width: 118};

class App extends Component {
  constructor() {
    super();
    this.state = {
      params: {
        showForm: false,
        search: null,
        ascending: true,
        buttonTitle: "Sort by Ascending",
      },
      userDetails: {
        first: '',
        last: '',
        email: '',
        picture: 'https://randomuser.me/api/portraits/thumb/women/55.jpg',
      },
      results: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.showForm = this.showForm.bind(this);
    this.formChange = this.formChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  componentDidMount () {
    this.getData()
  }

  getData() {
    fetch("https://randomuser.me/api/?results=20")
      .then(results => results.json())
      .then(data => {
        this.setState({
          results: data.results
        })
      })
  }

  handleChange(event) {
    const { name, value } = event.target;
    const params = this.state.params;
    params[name] = value;

    this.setState({
      params
    });
  }

  handleOnClick(event) {
    const { name }  = event.target;
    const { textContent } = event.target;
    const params = this.state.params;
    const currentValue = this.state.params[name];

    params[name] = !currentValue;

    if(textContent === "Sort by Ascending"){
      this.sort();
      params["buttonTitle"] = "Sort by Descending";
      this.setState({params})
    }
    else {
      this.state.results.reverse();
      params["buttonTitle"] = "Sort by Ascending";
      this.setState({params})
    }

    this.setState({
      params
    });
  }

  showForm() {
    const params = this.state.params;
    const currentValue = this.state.params['showForm'];

    params['showForm'] = !currentValue;

    this.setState({params})
  }

  sort() {
    const sortedList = this.state.results.sort((a, b) => a.name.last.localeCompare(b.name.last));
    this.setState({results: sortedList});
  }

  formChange(event) {
    const {name, value} = event.target;
    const userDetails = this.state.userDetails;

    userDetails[name] = value;

    this.setState({
      userDetails
    });

  }

  submit() {
    const userDetails = this.state.userDetails;
    const results = this.state.results;
    const userObject = {
      email: userDetails.email,
      name: {
        first: userDetails.first,
        last: userDetails.last,
      },
      picture: {
        medium: userDetails.picture
      }
    };

    results.push(userObject);

    this.setState({
      results: results
    })
  }

  render() {

    const search = this.state.params.search;
    const results = this.state.results;
    const showForm = this.state.params.showForm;

    return results ? (
      <div>
        <div style={padding}>
          <input
            style={width}
            type="text"
            name="search"
            onChange={this.handleChange}
          />
        </div>
        <Button
          title={this.state.params.buttonTitle}
          name='ascending'
          onClick={this.handleOnClick}
        />
        <Button
          title='Add a user'
          name='showForm'
          onClick={this.showForm}
        />
          {showForm ?
            <Form
              onChange={this.formChange}
              onClick={this.submit}
            /> : null
          }
        <ResultsHolder
          results={results}
          search={search}
        />
      </div>
    ) : (
      <div>
        <h2>Fetching Data!</h2>
      </div>
    )
  }
}

export default App;