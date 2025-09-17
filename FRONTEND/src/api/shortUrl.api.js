import axiosinstance from "../utils/axioinstance";

export const createShortUrl = async (url, slug) => {
    const { data } = await axiosinstance.post("/api/create", { url, slug });
    return data.shorturl;
}