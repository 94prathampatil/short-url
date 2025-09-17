import wrapAsync from "../utils/tryCatchWrapper.js"
import {getAllUrls} from "../dao/user.dao.js"

export const getAllUserUrls = wrapAsync(async (req, res) => {
    const { _id } = req.user
    // console.log(_id.toString())
    const urls = await getAllUrls(_id.toString())
    res.status(200).json({urls})

})