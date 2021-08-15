import React from "react";
import Select from "react-select";
import "./MenuSearchOptions.css";

const options = [
  { value: "Appetizers", label: "Appetizers" },
  { value: "Burgers", label: "Burgers" },
  { value: "Dishes", label: "Dishes" },
  { value: "Soups", label: "Soups" },
  { value: "Sandwiches", label: "Sandwiches" },
  { value: "Salads", label: "Salads" },
  { value: "Protein", label: "Protein" },
  { value: "Cakes", label: "Cakes" },
  { value: "Drinks", label: "Drinks" },
];

class MenuSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedOption: null,
    };
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
        defaultValue={options[0]}
        className="menu-search"
        isMulti
      />
    );
  }
}

export default MenuSearch;
