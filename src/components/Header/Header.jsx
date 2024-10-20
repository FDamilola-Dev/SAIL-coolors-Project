import logo from "../../assets/Images/logo.svg";
import "./Header.css";
import Buttons from "../../UI/Buttons/Buttons";
const Header = () => {
  return (
    <div id="container">
      <div>
        <img src={logo} />
      </div>
      {/* <div id="line"></div> */}
      <div id="rightNav">
        <div id="tool">
          <a href="Tools" id="toolTool">
            Tools
          </a>
          <a href="Go Pro" id="toolGo">
            Go pro
          </a>
        </div>

        <span id="divider"></span>

        <div className="navBtn">
            
          <Buttons type="signIn" title="Sign in"/>
          <Buttons type="signUpBtn" title="Sign up" />
        </div>
      </div>
    </div>
  );
};

export default Header;
