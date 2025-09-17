import { nanoid } from "nanoid"
import jsonwebtoken from "jsonwebtoken"

export const generateNanoId = (len) => {
    return nanoid(len)
}

export const signToken = (payload) => {
    return jsonwebtoken.sign(payload, process.env.JWT_SECRET, {expiresIn: "7d"})
}

export const verifyToken = (token) => {
    const decoded = jsonwebtoken.verify(token, process.env.JWT_SECRET)
    // console.log(decoded.id,"sdflakwe")
    return decoded.id
}

export const jsonData = (success, user, message) => {
    return {success:success, message: message, user: user}
}