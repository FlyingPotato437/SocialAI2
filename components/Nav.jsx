// components/NavBar.js
import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <Link href="/" legacyBehavior>
            <a className="text-white text-3xl font-bold">SocialAI</a>
          </Link>
          <div className="flex items-center">
            <Link href="/Users/senthis/Desktop/GPTexperiments/code-weaver/app/product" legacyBehavior>
              <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Product
              </a>
            </Link>
            <Link href="/signin" legacyBehavior>
              <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Sign In
              </a>
            </Link>
            <Link href="/signout" legacyBehavior>
              <a className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Sign Out
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
