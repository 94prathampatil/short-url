import { registerUser, loginUser } from "../services/auth.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js"
import { cookieOptions } from "../config/config.js"
import { jsonData } from "../utils/helper.js";

export const register_user = wrapAsync(async (req, res) => {
    const { name, email, password } = req.body
    const {token, user} = await registerUser(name, email, password)
    req.user = user
    res.cookie("Cookie_Value", token, cookieOptions)
    res.status(200).json(jsonData(true, user, "Registration Successfull"));
})

export const login_user = wrapAsync( async (req, res) => {
    const { email, password } = req.body
    const {token, user} = await loginUser(email, password)
    req.user = user
    console.log(user)
    res.cookie("Cookie_Value", token, cookieOptions)
    res.status(200).json(jsonData(true, user, "Logging Successfull"));
})

export const logout_user = wrapAsync( async (req, res) => {
    res.clearCookie("Cookie_Value", cookieOptions)
    res.status(200).json(jsonData(true, null, "Logout Successfull"));
})

export const get_current_user = wrapAsync( async (req, res) => {
    res.status(200).json(jsonData(true, req.user, "User Found"));
})