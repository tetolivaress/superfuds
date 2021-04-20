const Http = {}

const headers = new Headers()
headers.append("X-Requested-With", "XMLHttpRequest")
headers.append("Content-Type", "application/json")
headers.append("Access-Control-Allow-Origin", "*")

Http.get = async (url) => {
  try {
    const requestResponse = await fetch(url, { method: 'GET', headers })
    const response = await requestResponse.json()
    return response
  } catch (error) {
    return new Error(error)
  }
}

export default Http