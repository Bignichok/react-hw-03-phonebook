import React, { Component } from "react";
import styles from "./ContactForm.module.css";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e, type) => {
    this.setState({
      [type]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, number } = this.state;
    this.props.onAddContact(name, number);

    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.phonebookForm}>
        <label htmlFor="">
          Name
          <input
            required
            type="text"
            name="name"
            value={this.state.name}
            onChange={(e) => this.handleChange(e, "name")}
          />
        </label>
        <label htmlFor="">
          Number
          <input
            type="tel"
            name="number"
            value={this.state.number}
            required
            onChange={(e) => this.handleChange(e, "number")}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
