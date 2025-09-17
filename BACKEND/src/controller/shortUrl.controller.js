import { generateNanoId } from "../utils/helper.js"
import { createShortUrlWithoutUser, createShortUrlWithUser } from "../services/shortUrl.service.js"
import { getShortUrl } from "../dao/shortUrl.js"
import wrapAsync from "../utils/tryCatchWrapper.js"

export const createShortUrl = wrapAsync(async (req, res) => {
    const data = req.body
    let shortUrl
    // console.log(req.user)
    if(req.user){
        shortUrl = await createShortUrlWithUser(data.url, req.user._id, data.slug)
    }
    else{
        shortUrl = await createShortUrlWithoutUser(data.url)
    }
    res.status(200).json({shorturl : process.env.APP_URL + shortUrl})
})
export const redirectFromShortURL = wrapAsync(async(req, res) => {
    const { id } = req.params
    const url = await getShortUrl(id)
    if(!url)    throw new Error ("Short URL not Found")
    res.redirect(url.full_url)
})

export const createCustomShortUrl = wrapAsync(async (req, res) => {
    const {url, shortUrl} = req.body
    await createShortUrlWithUser(url, shortUrl)
    res.status(200).json({shorturl : shortUrl})
})