// inertia/components/Layout.tsx

import { Link } from "@inertiajs/react";

const Layout = ({ children }) => {
  return (
    <main>
      <header>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </header>
      <div>{children}</div>
    </main>
  );
};

export default Layout;
