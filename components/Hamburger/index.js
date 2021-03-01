import { useAppState } from "../../context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Hamburger = () => {
  const { toggleSideNav } = useAppState();

  const handleHamburgerClick = () => {
    toggleSideNav();
  };

  return (
    <div className="hamburger" onClick={handleHamburgerClick}>
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
};

export default Hamburger;
