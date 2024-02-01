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
    padding: 5px;
  }

  &.active {
    border-bottom: 2px solid #61dafb;
  }
`;
