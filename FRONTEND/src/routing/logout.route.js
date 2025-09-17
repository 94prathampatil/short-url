import { createRoute } from "@tanstack/react-router"
import { rootRoute } from "./routeTree"
import Logout from "../pages/Logout" // Create this component

export const logoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/logout",
  component: Logout,
});