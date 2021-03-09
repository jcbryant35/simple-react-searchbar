import React from 'react';
import ReactDOM from 'react-dom';
import { Breakfast } from './Breakfast';

class App extends React.Component {

  render() {
    return (
      <div>
        <Breakfast />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
