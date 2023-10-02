import avatar from '../../assets/images/avatar.png';
import ThemeToggleInputComponent from '../toogle/theme-toggle-input.component';

export default function ProfileComponent() {
  return (
    <div className="profile-container">
      <div className="left-side">Bookstore</div>
      <div className="right-side">
        <div className="mode">
          <ThemeToggleInputComponent />
          <span>Light mode</span>
        </div>
        <div className="user">
          <img className="avatar" src={avatar} alt="" />
          <div className="user-name">Alibaba</div>
        </div>
      </div>
    </div>
  );
}
