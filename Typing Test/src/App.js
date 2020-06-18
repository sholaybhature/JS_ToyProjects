import React, { Component } from 'react';
import logo from './logo.svg';
import Preview from './Preview';
import Speed from './Speed';
import getText from './getText'

const initialState = {
  text: getText(),
  userInput: '',
  symbols: 0,
  sec: 0,
  started: false,
  finished: false
}

class App extends Component {
  state = initialState;

  onRestart = () => {
    this.setState(initialState);
  }

  onUserInputChange = (e) => {
    const v = e.target.value;
    this.setTimer();
    this.onFinish();
    this.setState({
      userInput: v,
      symbols: this.countCorrectSymbols(v)
    })
  }

  countCorrectSymbols(userInput){
    const text = this.state.text.replace(' ', '');
    return userInput.replace(' ', '').split('').filter((s,i) => s === text[i]).length;
  }

  setTimer() {
    if (!this.state.started){
      this.setState({started:true});
      this.interval = setInterval(()=>{
        this.setState(prevProps => {
          return {sec: prevProps.sec + 1}
        })
      },1000)
    }
  }

  onFinish(userInput) {
    if(userInput == this.state.text){
      clearInterval(this.interval);
      this.setState({
        finished:true
      })
    }
  }

  render(){
  return (
    <div className="container mb-5 mt-5">
      <h1 className="text-center pb-2">Typing Test</h1>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <Preview text={this.state.text} userInput={this.state.userInput}></Preview>
          <textarea
          value={this.state.userInput}
          onChange={this.onUserInputChange} 
          className="form-control mb-3"
          placeholder="Start typing..."
          readOnly={this.state.finished}>  
          </textarea>
          <Speed sec={this.state.sec} symbols={this.state.symbols}></Speed>
          <div className="text-right">
            <button className="btn btn-light" onClick={this.onRestart}>Restart</button>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
