import express from "express"
import { nanoid } from "nanoid"
import dotenv from "dotenv"
import connectDB from "./src/config/mongo.config.js"
dotenv.config("./.env")
import shortUrl from "./src/routes/shortUrl.route.js"
import auth_route from "./src/routes/auth.route.js"
import { redirectFromShortURL } from "./src/controller/shortUrl.controller.js"
import { errorHandler } from "./src/utils/errorHandler.js"
import cors from "cors"
import { attachUser } from "./src/utils/attachUser.js"
import cookieParser from "cookie-parser"
import user_route from "./src/routes/user.route.js"

const app = express()

app.use(cors({
    origin: ["http://localhost:5173", "https://short-url-m43o.onrender.com", "https://short-url-m43o.onrender.com"],
    credentials: true,
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(attachUser)
app.use("/api/auth", auth_route)
app.use("/api/create", shortUrl)
app.get("/:id", redirectFromShortURL)
app.use("/api/user", user_route)

app.use(errorHandler)

app.listen(3000, () => {
    connectDB()
    console.log("Server is Running on backend")
})

