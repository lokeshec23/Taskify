import PowerOff from "../assets/PowerOff.svg";
import "../styles/Header.css";
import { useAuth } from "../context/AuthContext";
const Header = ({ name = "User" }) => {
  const { logout } = useAuth();
  return (
    <div className="header-container bg-light shadow">
      {/* Left div */}
      <div className="header-left-div">
        <img
          src={"/taskify_icon.svg"}
          alt="taskify_logo"
          className="header-logo"
        />
        <h3>Taskify</h3>
      </div>

      {/* Right Div */}
      <div className="header-right-div">
        <h4>
          Hi, <span className="header-name">{name}</span>
        </h4>
        <img
          src={PowerOff}
          alt="power off"
          className="header-poweroff"
          onClick={logout}
        />
      </div>
    </div>
  );
};

export default Header;
