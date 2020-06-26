import React from 'react';
import { Button, form, label, input, textarea, select } from 'reactstrap'

// Form to fill out with content: Image, title, description, project type


class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      projectType: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // projectOptions: ['React', 'React-Native', 'MongoDB', 'NodeJS']

  }

  handleChange(event) {
    this.setState({ title: event.target.title, description: event.target.description, projectType: event.target.projectType });
  }

  handleSubmit(event) {
    alert('A project was submitted: ' + this.state.title);
    event.preventDefault();
    this.handleResetForm();
    // Post as new card to Projects Page
  }

  handleResetForm() {
    // Logic for resetting the form
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit}>

        <label>
          Project Title:
          <input
            placeholder="Title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange} />
        </label>

        <label>
          Project Description:
        <textarea
            placeholder="Project Description"
            value={this.state.description}
            onChange={this.handleChange}
          >
          </textarea>
        </label>

        <label>
          Project Type:
        <select
            value={this.state.projectType}
            onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="React-Native">React-Native</option>
            <option selected value="MongoDB">MongoDB</option>
            <option value="NodeJS">NodeJS</option>
          </select>
        </label>
{/* 
        <label>
          Image:
        <input type="file" onChange={this.fileChangedHandler}>
        </label> */}
        <input type="submit" value="Submit" />

          {/* <button onClick={this.handleSubmit}>Submit!</button> */}
      </form>
    );
  }
}

// if (content) {
//   return(
//     // New Card on correct project page
//   )
// }



// const Input = (props) => {
//   return (  
// <div className="form-group">
//   <label htmlFor={props.name} className="form-label">{props.title}</label>
//   <input
//     className="form-input"
//     id={props.name}
//     name={props.name}
//     type={props.type}
//     value={props.value}
//     onChange={props.handleChange}
//     placeholder={props.placeholder} 
//   />
// </div>
// )
// }

// export default Input;