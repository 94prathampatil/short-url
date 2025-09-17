import { createUser, findUserByEmailByPassword } from "../dao/user.dao.js"
import { ConflictError } from "../utils/errorHandler.js";
import { signToken } from "../utils/helper.js";

export const registerUser = async (name, email, password) => {
    const user = await findUserByEmailByPassword(email);
    if(user)
        throw new ConflictError("User already exists")
    const newUser = await createUser(name, email, password)
    const token = await signToken({ id: newUser._id }) 
    return {token, user}
}   

export const loginUser = async (email, password) => {
    const user = await findUserByEmailByPassword(email);
    if(!user) throw new Error("Login Failed, Invalide Credential")
    const isPasswordValid = await user.comparePassword(password);
    if(!isPasswordValid) throw new Error("Login Failed, Invalid Credential") 
    
    const token = signToken({ id: user._id })
    return {token, user}
}