export const axiosGet = async ({axios, url, params}) => {
  return await axios.get(url, { params })
}
