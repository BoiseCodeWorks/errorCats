import ErrorCat from "../models/ErrorCat.js";


let _api = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/errors"
})



export default class errorCatService {
  constructor() {
    console.log("service created")
  }
  getError(error, draw) {
    _api.get(error.status)
      .then(res => {
        let cat = new ErrorCat(res.data)
        draw(cat)
      })
      .catch(e => {
        // debugger
        let cat = new ErrorCat(error)
        draw(cat)
      })
  }
}