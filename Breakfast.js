import React from 'react';
import { BreakfastTacoRecipe } from './BreakfastTacoRecipe';
import { BreakfastBurritoRecipe } from './BreakfastBurritoRecipe';
import { OmeletteRecipe } from './OmeletteRecipe';
import { SearchBar } from './SearchBar';


export class Breakfast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tacos: true,
      burritos: true,
      omelette: true,
      value: '',
    }
    this.hideComponents = this.hideComponents.bind(this);
  };


  hideComponents(value) {
    this.setState({ value: value });
    
    switch(value) {
      case 'taco':
        this.setState({
          burritos: !this.state.burritos,
          omelette: !this.state.omelette
        })
        break;
      case 'breakfast taco':
        this.setState({
          burritos: !this.state.burritos,
          omelette: !this.state.omelette
        })
        break;
      case 'burrito':
        this.setState({
          tacos: !this.state.tacos,
          omelette: !this.state.omelette
        })
        break;
      case 'breakfast burrito':
        this.setState({
          tacos: !this.state.tacos,
          omelette: !this.state.omelette
        })
        break;
      case 'omelette':
        this.setState({
          tacos: !this.state.tacos,
          burritos: !this.state.burritos
        })
        break;
      default: 
        this.setState({
          tacos: true,
          burritos: true,
          omelette: true
        })
    };
  };
 

  render() {
    const { tacos, burritos, omelette } = this.state;
    
    return (
      <div>
      <SearchBar searches={this.hideComponents}/>
      <hr />
      {tacos && <BreakfastTacoRecipe />}
      <hr />
      {burritos && <BreakfastBurritoRecipe />}
      <hr />
      {omelette && <OmeletteRecipe />}
      <hr />
      </div>
    )
  };
};

