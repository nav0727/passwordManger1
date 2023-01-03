import {Component} from 'react'

import Password from './components/Password/index'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="bg">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="image"
        />
        <Password />
      </div>
    )
  }
}

export default App
