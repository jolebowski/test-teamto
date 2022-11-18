import { ReactComponent as Logo } from "../../assets/icon/logo-star-wars.svg";
import "./header.styles.css";

const Header = () => {
  return (
    <>
      <header className="headerContainer">
        <Logo className="logo" />
      </header>
    </>
  );
};

export default Header;
