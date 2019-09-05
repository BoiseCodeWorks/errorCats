import ErrorCatController from "./components/errorCatController.js";




class App {
  constructor() {
    this.controllers = {
      catController: new ErrorCatController()
    }
  }
}



window["app"] = new App()