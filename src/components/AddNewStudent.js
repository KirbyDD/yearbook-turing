import React, { Component } from 'react';

class AddNewStudent extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      quote: '',
      superlative: '',
      form: false     
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  createForm = () => {
    this.setState({ form: true })
  }

  makeStudent = () => {
    let newStudent = {
      id: Date.now(),
      name: this.state.name,
      quote: this.state.quote,
      superlative: this.state.superlative,
      photo: 'https://placekitten.com/200/300',
    }
    this.props.addStudent(newStudent);
    this.resetForm()
  }

  resetForm = () => {
    this.setState({
      name: '',
      quote: '',
      superlative: '',
      form: false
    })
  }

  render(){

    return (
      <section>
        <button onClick={event => this.createForm() }>Add Student!</button>
        {this.state.form && 
          <form onChange={event => this.handleChange(event)}>
            <input type='text' placeholder='name' value={this.state.name} name='name'/>
            <input type='text' placeholder='quote' value={this.state.quote} name='quote'/>
            <input type='text' placeholder='superlative' value={this.state.superlative} name='superlative'/>
            <button onClick={event => this.makeStudent()}>Submit</button>
          </form>
        }
      </section>
    )
  }
}

export default AddNewStudent;