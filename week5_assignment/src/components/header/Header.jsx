import { useLocation, Link } from "react-router-dom";
import { HeaderWrapper, Logo, Nav, NavItem } from "./Header.styles";

export default function Header() {
  const location = useLocation();

  return (
    <HeaderWrapper>
      <Logo>IDT</Logo>
      <Nav>
        <NavItem as={Link} to="/" className={location.pathname === "/" ? "active" : ""}>
          About
        </NavItem>
        <NavItem as={Link} to="/project" className={location.pathname === "/project" ? "active" : ""}>
          Project
        </NavItem>
        <NavItem as={Link} to="/diary" className={location.pathname === "/diary" ? "active" : ""}>
          Diary
        </NavItem>
        <NavItem as={Link} to="/qna" className={location.pathname === "/qna" ? "active" : ""}>
          QnA
        </NavItem>
      </Nav>
    </HeaderWrapper>
  );
}