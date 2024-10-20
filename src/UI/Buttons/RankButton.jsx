import "./Buttons.css";
import PropTypes from "prop-types";
const RankButton = ({ children, type }) => {
  return <button className={`default ${type}`}> {children}</button>;
};
export default RankButton;
RankButton.proptypes = { children: PropTypes.any };
