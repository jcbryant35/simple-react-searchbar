import React from  'react';

export class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 'none',
    }
    this.showBar = this.showBar.bind(this);
    this.hideBar = this.hideBar.bind(this);
    this.userInput = this.userInput.bind(this);
  };

  showBar() {
    this.setState({ display: 'block' });
  };

  hideBar() {
    this.setState({ display: 'none' });
  };

  userInput(e) {
    this.props.searches(e.target.value)
  };

  render() {
    const searchValue = this.props.value;

    return (
      <div>
        <h1>Search Bar</h1>
        <input value={searchValue} onChange={this.userInput} style={{display: this.state.display}} type="text"  />
        <button onClick={this.showBar}>Show Search Bar</button>
        <button onClick={this.hideBar}>Hide Search Bar</button>
      </div>
    )
  };
};
