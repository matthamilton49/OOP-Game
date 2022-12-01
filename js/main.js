class Player {
  constructor() {
    this.width = 10;
    this.height = 10;

    this.positionX = 50 - this.width / 2;
    this.postionY = 0;

    this.movementAmount = 5;

    this.domElement = null;
    this.createDOMElement();
  }

  createDOMElement() {
    this.domElement = document.createElement("div"); //create the element

    this.domElement.id = "player"; //add or modify content

    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";

    this.domElement.style.bottom = this.postionY + "vh";
    this.domElement.style.left = this.positionX + "vw";

    const boardElement = document.getElementById("board"); // append to the dom; 'parentElm.appendChild()
    boardElement.appendChild(this.domElement);
  }

  moveLeft() {
    if (this.positionX > 0) {
      this.positionX -= this.movementAmount;
      console.log("new position...." + this.positionX);
      //update CSS for player DOM element
      this.domElement.style.left = this.positionX + "vw";
    }
  }

  moveRight() {
    if (this.positionX < 100 - this.width) {
      this.positionX += this.movementAmount;
      console.log("new position...." + this.positionX);
      this.domElement.style.left = this.positionX + "vw";
    }
  }
}

const player = new Player();

document.addEventListener("keydown", function (event) {
  // const key = event.key;
  if (event.key === "ArrowRight") {
    player.moveRight();
  } else if (event.key === "ArrowLeft") {
    player.moveLeft();
  }
});
