import { useAppState } from "../../context";
import Link from "next/link";

const Nav = () => {
  const { state, toggleSideNav } = useAppState();
  const handleBackdropClick = () => {
    toggleSideNav();
  };
  return (
    <nav className={`${state.showSideNav ? "expand" : ""}`}>
      <div className="backdrop" onClick={handleBackdropClick}></div>
      <ul>
        <li>Features</li>
        <li>Pricing</li>
        <li>Resources</li>
        <li className="separator"></li>
        <li>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </li>
        <li className="sign-up">
          <Link href="/signup">
            <a>Sign Up</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
