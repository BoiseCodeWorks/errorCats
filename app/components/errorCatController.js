import errorCatService from "./errorCatService.js";

let eCatService = new errorCatService()

function drawCat(cat) {
  // console.log(cat)
  // debugger
  document.getElementById("cats-here").innerHTML =

    `<div class="card" style="width: 18rem;">
        <img src="${cat.img}" class="card-img-top" alt="...">
        
      </div>`
}

export default class ErrorCatController {
  getCat(e) {
    e.preventDefault()
    let form = e.target
    let error = { status: form.statusCode.value }
    eCatService.getError(error, drawCat)
  }
}