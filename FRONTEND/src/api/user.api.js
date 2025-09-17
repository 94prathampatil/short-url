import axiosinstance from "../utils/axioinstance";

export const registerUser = async (name, email, password) => {
    const { data } = await axiosinstance.post("/api/auth/register", { name, email, password });
    return data;
}

export const loginUser = async (email, password) => {
    const { data } = await axiosinstance.post("/api/auth/login", { email, password });
    return data;
}

export const logOutUser = async () => {
    const { data } = await axiosinstance.get("/api/auth/logout");
    return data;
}

export const getCurrentUser = async () => {
    const { data } = await axiosinstance.get("/api/auth/me");
    return data;
}

export const getAllUserUrls = async () => {
    const { data } = await axiosinstance.post("/api/user/urls");
    return data;
}