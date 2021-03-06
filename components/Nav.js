import Link from "next/link";
import NavStyles from "./styles/NavStyles";
import User from "../components/User";
import Signout from "./Signout";

const Nav = () => (
  <User>
    {({ data }) => {
      const me = data ? data.me : null;
      return (
        <NavStyles>
          <Link href="/items">
            <a>Items</a>
          </Link>
          {me && (
            <>
              <Link href="/sell">
                <a>Sell</a>
              </Link>
              <Link href="/orders">
                <a>Orders</a>
              </Link>
              <Link href="/me">
                <a>Account</a>
              </Link>
              <Signout />
            </>
          )}

          <Link href="/signup">
            <a>Sign In</a>
          </Link>
        </NavStyles>
      );
    }}
  </User>
);

export default Nav;
