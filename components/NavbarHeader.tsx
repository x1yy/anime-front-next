import Link from 'next/link';

import { Navbar } from 'rbxhotfix';

const NavbarHeader = () => (
  <Navbar>
    <Navbar.Brand>
      <Link href='/'>
        <Navbar.Item>
        id-anime
        </Navbar.Item>
      </Link>
    </Navbar.Brand>
  </Navbar>
)

export default NavbarHeader;
