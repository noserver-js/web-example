import React, { Component, PropTypes } from 'react';
import './App.css';

class App extends Component {
  static contextTypes = {
    faas: PropTypes.object
  };

  state = {
    func: 'getTodos'
  };

  // onAdd = () => {
  //   console.log('addTodo');
  //   this.context.faas.addTodo({
  //     message: 'asdas'
  //   }).then(() => {
  //     console.log('addTodo done');
  //   });
  // };

  execute = () => {
    console.log(this.state.func);
    this.context.faas[this.state.func]().then((params) => {
      console.log(this.state.func, 'done', params);
    });
  };

  // getTodos = () => {
  //   console.log('getTodos');
  //   this.context.faas.getTodos().then(() => {
  //     console.log('getTodos done');
  //   });
  // };

  onChange = (e) => {
    console.log(arguments);

    this.setState({
      func: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Hello World</h2>
        </div>
        <p className="App-intro">
          <input type="text" value={this.state.func} onChange={this.onChange} />

          <button onClick={this.execute}>
            execute
          </button>
        </p>        
      </div>
    );
  }
}

export default App;
