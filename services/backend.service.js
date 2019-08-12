export const axiosGet = async ({ axios, url, params }) => {
  return await axios.get(url, { params })
}

export const axiosPost = async ({ axios, url, params}) => {
  return await axios.post(url, { params })
}