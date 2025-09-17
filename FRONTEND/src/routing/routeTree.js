import { createRootRoute } from "@tanstack/react-router";
import RootLayout from "../RootLayout";
import { homePageRoute } from "./homepage.js";
import { authRoute } from "./auth.route.js";
import { dashboardRoute } from "./dashboard.js";
import { logoutRoute } from "./logout.route.js"; 

export const rootRoute = createRootRoute({
    component: RootLayout
})
  

export const routeTree = rootRoute.addChildren([
    homePageRoute,
    authRoute,
    dashboardRoute,
    logoutRoute
])
