import Link from "next/link";
import NavStyles from "./styles/NavStyles";
import User from "../components/User";

const Nav = () => (
  <NavStyles>
    <User>
      {({ data }) => {
        const me = data ? data.me : null;
        if (me) return <p>{me.name}</p>;
        return null;
      }}
    </User>
    <Link href="/items">
      <a>Items</a>
    </Link>
    <Link href="/sell">
      <a>Sell</a>
    </Link>
    <Link href="/signup">
      <a>Sign Up</a>
    </Link>
    <Link href="/orders">
      <a>Orders</a>
    </Link>
    <Link href="/me">
      <a>Me</a>
    </Link>
  </NavStyles>
);

export default Nav;
