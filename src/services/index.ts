import axios from "axios"

export const getDataLength = async (): Promise<number> => {
    const response = await axios.get("https://suitmedia-backend.suitdev.com/api/ideas?page[number]=1&page[size]=100&append[]=small_image&append[]=medium_image&sort=-published_at")
    const data = await response.data
    return data.data.length
}

export const apiTest = async (url: string): Promise<any> => {
    const response = await axios.get(url)
    const data = await response.data
    return data.data
}