import { redirect } from "@tanstack/react-router";
import { getCurrentUser } from "../api/user.api";
import { login } from "../store/slice/authSlice";

export const checkAuth = async ({ context }) => {
    try {
        const { queryClient, store } = context;
        const user = await queryClient.ensureQueryData({
            queryKey: ['currentUser'],
            queryFn: getCurrentUser,
        });
        if (!user) return false;
        store.dispatch(login(user))
        const auth = store.getState().auth;
        if (!auth.isAuthenticated) {
            return false
        }
        return true;
    }
    catch (err) {
        console.log(err)
        return redirect({to:'/auth'})
    }
}