import { usePathname } from "next/navigation";
import Link from "next/link";
import styled from "styled-components";
export default function Menu() {
  const PathName = usePathname();

  return (
    <NavMenu>
      <Link href={"/"} className={PathName === "/" ? "active" : ""}>
        Home
      </Link>

      <Link
        href="/characters"
        className={PathName === "/characters" ? "active" : ""}
      >
        Characters
      </Link>

      <Link href="/about" className={PathName === "/about" ? "active" : ""}>
        About
      </Link>
    </NavMenu>
  );
}

const NavMenu = styled.nav`
  display: flex;
  justify-content: space-around;
  background-color: #333;
  padding: 10px;
  color: #fff;

  a {
    color: inherit;
    text-decoration: none;
    padding: 10px;
    border-bottom: 2px solid transparent;
    transition: border-bottom-color 0.3s, color 0.3s;

    font-size: 16px;
    font-weight: 500;

    &:hover {
      border-bottom-color: #61dafb;
      color: #61dafb;
    }

    &.active {
      border-bottom-color: #61dafb;
      color: #61dafb;
    }
  }
`;
