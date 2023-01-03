import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PassItem from '../PasswordList/index'

import './index.css'

class Password extends Component {
  state = {
    passList: [],
    name: '',
    url: '',
    password: '',
    searchInput: '',
  }

  onAddBut = event => {
    event.preventDefault()
    const {name, url, password} = this.state
    const newPass = {
      id: uuidv4(),
      name,
      url,
      password,
    }

    this.setState(prev => ({
      passList: [...prev.passList, newPass],
      name: '',
      url: '',
      password: '',
    }))
  }

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  onChangeUrl = event => {
    this.setState({url: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onDeleteHistory = id => {
    const {passList} = this.state
    const deleteList = passList(current =>
      current.filter(each => each.id !== id),
    )
    this.setState({passList: deleteList})
  }

  render() {
    const {passList, name, url, password, searchInput} = this.state

    const searchList = passList.filter(each =>
      each.url.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div>
        <div className="bg-con">
          <div className="container">
            <h1> Add New Password</h1>
            <form onSubmit={this.onAddBut}>
              <div className="div-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="icon"
                />

                <input
                  type="text"
                  placeholder="Enter Website"
                  value={url}
                  onChange={this.onChangeUrl}
                />
              </div>
              <div className="div-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="icon"
                />

                <input
                  type="text"
                  placeholder="Enter Username"
                  value={name}
                  onChange={this.onChangeName}
                />
              </div>
              <div className="div-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="icon"
                />

                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={this.onChangePassword}
                />
              </div>

              <div className="bt1">
                <button type="submit" className="btn">
                  Add
                </button>
              </div>
            </form>
          </div>
          <div className="bg1">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="sm"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="lg"
            />
          </div>
        </div>

        <div className="cont">
          <div>
            <p>Your Passwords {searchList.length}</p>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                type="search"
                placeholder="search"
                value={searchInput}
                onChange={this.onSearch}
              />
            </div>
          </div>
          <hr />
          <div className="btn1">
            <input type="checkbox" id="check" onClick={this.onShowBut} />
            <label htmlFor="check">Show passwords</label>
          </div>
          {this.onRenderOfList}
          <ul className="ulList">
            {passList.map(each => (
              <PassItem
                key={each.id}
                passDetails={each}
                onDeleteHistory={this.onDelete}
              />
            ))}
          </ul>
          {passList.length === 0 && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
              alt="no passwords"
              className="image1"
            />
          )}
          {passList.length === 0 && <p> No Passwords</p>}
        </div>
      </div>
    )
  }
}

export default Password
