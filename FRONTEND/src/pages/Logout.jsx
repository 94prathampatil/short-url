import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../store/slice/authSlice";
import { logOutUser } from "../api/user.api";
import { useNavigate } from "@tanstack/react-router"; // or react-router-dom if using that

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(
    () => {
      const performLogout = async () => {
        try {
          await logOutUser(); // ⛔️ Clears cookie on backend
          dispatch(logout()); // 🧠 Clears redux state
          navigate({ to: "/auth" }); // 🚪 Redirect to login
        } catch (err) {
          console.error("Logout failed:", err);
        }
      };

      performLogout();
    },
    [dispatch, navigate]
  );

  return <div className="text-center text-gray-500 mt-8">Logging out...</div>;
};

export default Logout;
