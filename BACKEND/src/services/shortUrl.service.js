import { getCustomeUrl, saveShortUrl } from "../dao/shortUrl.js"
import { generateNanoId } from "../utils/helper.js"

export const createShortUrlWithoutUser = async (url) => {
    const shortUrl = generateNanoId(7) 
    if (!shortUrl) {
        throw new Error("Short URL generation failed")
    }
    await saveShortUrl(shortUrl, url)
    return shortUrl 
}
export const createShortUrlWithUser = async (url, userId, slug=null) => {
    const shortUrl = slug || generateNanoId(7) 
    const exist = await getCustomeUrl(slug)
    if(exist) throw new Error("The Custom Url that you are requesting is already exists")
    
    await saveShortUrl(shortUrl, url, userId)
    return shortUrl
}