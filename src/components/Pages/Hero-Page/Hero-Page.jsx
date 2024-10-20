import Buttons from "../../../UI/Buttons/Buttons";
import "./Hero-Page.css";
import RankButton from "../../../UI/Buttons/RankButton";

const HeroPage = () => {
  return (
    <div className="heroContainer">
      <div className="leftHero">
        <h1 id="headerText">
          {" "}
          The super fast <br />
          color palettes <br /> generator!
        </h1>
        <p id="pText">
          Create the perfect palette or get inspired <br /> by thousands of
          beautiful color schemes
        </p>
        <a href="#">
          <Buttons type="generator" title="Start the generator!" />
        </a>
        <a href="#">
          {" "}
          <Buttons type="explore" title="Explore trending palettes" />{" "}
        </a>

        <a href="#" className="rankButton">
          <RankButton type="rank">
            <div id="trophy">
              <img
                src="/trophy-svgrepo-com.svg"
                alt=""
                height={"45rem"}
                width={"25rem"}
              />
              <p>
                PRODUCT HUNT <br /> <strong>#1 Product of the Month</strong>
              </p>
            </div>
          </RankButton>{" "}
        </a>
      </div>

      <div className="rightHero">
        <div id="bgImg">
          <img src="coolor homepage_hero_palettes.png" alt="" height={"100%"} width={"70%"}/>
        </div>
        <div id="smImg"></div>
      </div>
    </div>
  );
};

export default HeroPage;
