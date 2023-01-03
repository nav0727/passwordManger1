/* eslint-disable react/no-unknown-property */
import './index.css'

const PassItem = props => {
  const {passDetails, onDeleteHistory, isShow} = props
  const {url, id, name, password} = passDetails

  const passShow = isShow ? (
    <p>{password}</p>
  ) : (
    <img
      src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
      alt="stars"
    />
  )

  const onDelete = () => {
    onDeleteHistory(id)
  }

  const na = url.charAt(0).toUpperCase()
  return (
    <li className="lis-con">
      <h1 className="bgColor">{na}</h1>
      <div>
        <p>{url}</p>
        <p>{name}</p>
        {passShow}
      </div>
      <button type="submit" className="btn1" testid="delete" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="icon"
        />
      </button>
    </li>
  )
}

export default PassItem
