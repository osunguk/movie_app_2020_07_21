import React from 'react';

class App extends React.Component {
  state = {
    count: 0,
    loading: true,
  }

  plus = () => {
    this.setState(
      current => ({ count: current.count + 1 })
    )
  }

  minus = () => {
    this.setState(
      current => ({ count: current.count - 1 })
    )
  }

  componentDidMount() {
    console.log('rendered')
    setTimeout(() => {
      this.setState({loading:false})
    }, 6000);
  }

  componentDidUpdate() {
    console.log('update')
  }

  componentWillUnmount() {
    console.log('end')
  }

  render() {
    console.log('render')
    const { loading } = this.state
    return (
      <div>
        {loading
          ? "loading...."
          : "We are ready"}
        <h1>The number is:  {this.state.count}</h1>
        <button onClick={this.plus}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    )
  }
}

export default App;
