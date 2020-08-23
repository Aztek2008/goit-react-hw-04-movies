import React, { Component } from "react";
import Button from "../Button/Button";
import s from "./Search.module.css";

export default class Search extends Component {
  state = {
    value: "",
    isLoading: false,
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(this.state.value);

    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.SearchForm}>
        <input
          type="text"
          onChange={this.handleChange}
          className={s.SearchFormInput}
          value={this.state.value}
          placeholder="Search movie here..."
        />
        <Button>
          <span className={s.SearchIcon}></span>
        </Button>
      </form>
    );
  }
}
