import Header from "./components/Header/Header";
import Buttons from "./UI/Buttons/Buttons";
import "./App.css"
import HeroPage from "./components/Pages/Hero-Page/Hero-Page";
const App = () => {
  return (
    <div id="navContainer">
      <div>
        <Header />
        <HeroPage/>
      </div>
      {/* <div>
        <Buttons fff="SignIn" title="Sign In" />
        <Buttons fff="SignUp" title="Sign Up" />
      </div> */}
    </div>
  );
};

export default App;
