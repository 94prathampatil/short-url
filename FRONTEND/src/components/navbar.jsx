import { Link } from "@tanstack/react-router";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { isLoggedIn, user } = useSelector(state => state.auth);

  // console.log(user.user.name)

  return (
    <nav className="bg-white border border-b-black sticky top-0 z-50 shadow-md">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Left - Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-600">
                URL Shortener
              </span>
            </Link>
          </div>

          {/* Right - Auth Buttons */}
          <div className="flex items-center">
            {isLoggedIn
              ? <div className="flex items-center space-x-4">
                  <span className="text-gray-700 text-sm font-medium">
                    Welcome, {user.user.name || "User"}!
                  </span>
                  <Link
                    to="/logout"
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    Logout
                  </Link>
                </div>
              : <Link
                  to="/auth"
                  className="ml-4 px-4 py-2 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Login
                </Link>}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
