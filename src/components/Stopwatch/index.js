import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {totalSeconds: 0}

  onStart = () => {
    this.timerId = setInterval(this.tick, 1000)
    // this.setState({isStarted: true})
  }

  onStop = () => {
    clearInterval(this.timerId)
  }

  onReset = () => {
    clearInterval(this.timerId)
    this.setState({totalSeconds: 0})
  }

  renderStopwatch = () => {
    const {totalSeconds} = this.state
    let minutes = Math.floor(totalSeconds / 60)
    let seconds = Math.floor(totalSeconds % 60)
    minutes = minutes >= 9 ? minutes : `0${minutes}`
    seconds = seconds >= 9 ? seconds : `0${seconds}`
    return <h1 className="timer">{`${minutes}:${seconds}`}</h1>
  }

  renderControlButtons = () => (
    <div>
      <button className="start-btn btn" type="button" onClick={this.onStart}>
        Start
      </button>
      <button className="btn stop-btn" type="button" onClick={this.onStop}>
        Stop
      </button>
      <button className="btn reset-btn" type="button" onClick={this.onReset}>
        Reset
      </button>
    </div>
  )

  componentWillUnmount = () => {
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState(prevState => ({totalSeconds: prevState.totalSeconds + 1}))
  }

  render() {
    return (
      <div className="app-container">
        <div className="card">
          <h1 className="heading">Stopwatch</h1>
          <div className="timer-container">
            <div className="subtitle-icon-container">
              <img
                className="icon"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="subtitle">Timer</p>
            </div>
            {this.renderStopwatch()}
            {this.renderControlButtons()}
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
