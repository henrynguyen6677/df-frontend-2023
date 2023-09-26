import avatar from '../../assets/images/avatar.png'
import ToogleComponent from "../toogle/toogle.component";

export default function ProfileComponent () {
  return (
    <div className="profile-container">
      <div className="left-side">Bookstore</div>
      <div className="right-side">
        <div className="mode">
          <ToogleComponent />
        </div>
        <div className="user">
          <img className="avatar" src={avatar} alt=""/>
          <div className="user-name">Alibaba</div>
        </div>
      </div>
    </div>
  )
}
