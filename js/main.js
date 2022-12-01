/*class Player {
  constructor() {
    this.width = 10;
    this.height = 10;

    this.positionX = 50 - this.width / 2;
    this.postionY = 50 - this.height / 2;

    this.movementAmount = 10;

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
      console.log("new position x axis...." + this.positionX);
      //update CSS for player DOM element
      this.domElement.style.left = this.positionX + "vw";
    }
  }

  moveRight() {
    if (this.positionX < 100 - this.width) {
      this.positionX += this.movementAmount;
      console.log("new position x axis...." + this.positionX);
      this.domElement.style.left = this.positionX + "vw";
    }
  }

  moveUp() {
    if (this.positionY < 100 - this.height) {
      this.positionY += this.movementAmount;
      console.log("new position y axis....." + this.positionY);
      this.domElement.style.bottom = this.postionY + "vh";
    }
  }

  moveDown() {
    if (this.positionY >= 0) {
      this.positionY -= this.movementAmount;
      console.log("new position y axis....." + this.positionY);
      this.domElement.style.bottom = this.postionY - "vh";
    }
  }
}

class Obstacle {
  constructor() {
    this.width = 20;
    this.height = 10;
    this.positionX = 50 - this.width / 2;
    this.positionY = 80;

    this.domElement = null;
    this.createDOMElement();
  }
  createDOMElement() {
    this.domElement = document.createElement("div"); //create the element

    this.domElement.className = "obstacle"; //add or modify content

    this.domElement.style.width = this.width + "vw";
    this.domElement.style.height = this.height + "vh";

    this.domElement.style.bottom = this.postionY + "vh";
    this.domElement.style.left = this.positionX + "vw";

    const boardElement = document.getElementById("board"); // append to the dom; 'parentElm.appendChild()
    boardElement.appendChild(this.domElement);
  }

  moveDown() {
    this.positionY--;
    this.domElement.style.bottom = this.positionY + "vh";

    }
  }

//global scope
const player = new Player();
const obstacles = []; // wil hold all instances of obstacles

document.addEventListener("keydown", function (event) {
  // const key = event.key;
  if (event.key === "ArrowRight") {
    player.moveRight();
  } else if (event.key === "ArrowLeft") {
    player.moveLeft();
  } else if (event.key === "ArrowUp") {
    player.moveUp();
  } else if (event.key === "ArrowDown") {
    player.moveDown();
  }
});

//maybe you could set time



//create obstacles

setInterval(() => {
  const newObstacle = new Obstacle();
  obstacles.push(newObstacle);
}, 2000);

//Move obstacles & detect collision
setInterval(() => {
    obstacles.forEach( (obstacleInstance) => {

        //move current obstacle
        obstacleInstance.moveDown();

        //detect if there's a collision between player and current obstacle
        if (
            player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
            player.positionX + player.width > obstacleInstance.positionX &&
            player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
            player.height + player.positionY > obstacleInstance.positionY
        ) {
            console.log("collision detected!!");
        }
    });
}, 50)*/

class Player {
    constructor() {
        this.width = 10;
        this.height = 10;
        this.positionX = 50 - (this.width /2);
        this.positionY = 0;

        this.domElement = null;
        this.createDomElement();
    }

    createDomElement(){
        // step1: create the element:
        this.domElement = document.createElement('div');

        // step2: add content or modify (ex. innerHTML...)
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.left = this.positionX + "vw";

        //step3: append to the dom: `parentElm.appendChild()`
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElement);
    }

    moveLeft() {
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw";
    }

    moveRight() {
        this.positionX++;
        this.domElement.style.left = this.positionX + "vw";
    }
}

class Obstacle {
    constructor() {
        this.width = 20;
        this.height = 10;
        this.positionX = 50 - (this.width /2);
        this.positionY = 80;

        this.domElement = null;
        this.createDomElement();
    }
    createDomElement(){
        // step1: create the element:
        this.domElement = document.createElement('div');

        // step2: add content or modify (ex. innerHTML...)
        this.domElement.className = "obstacle";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.left = this.positionX + "vw";

        //step3: append to the dom: `parentElm.appendChild()`
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElement);
    }
    moveDown(){
        this.positionY--;
        this.domElement.style.bottom = this.positionY + "vh";
    }
}

//////////////////////////


const player = new Player();
const obstacles = []; //will hold instances of the class Obstacle


//Attach event listeners
document.addEventListener('keydown', function(event) {
    if(event.key === "ArrowRight"){
        player.moveRight();
    }else if(event.key === "ArrowLeft"){
        player.moveLeft();
    }
});


// Create obstacles
setInterval(() => {
    const newObstacle = new Obstacle();
    obstacles.push(newObstacle);
}, 3000);




//Move obstacles & detect collision
setInterval(() => {
    obstacles.forEach( (obstacleInstance) => {

        //move current obstacle
        obstacleInstance.moveDown();

        //detect if there's a collision between player and current obstacle
        if (
            player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
            player.positionX + player.width > obstacleInstance.positionX &&
            player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
            player.height + player.positionY > obstacleInstance.positionY
        ) {
            console.log("collision detected!!");
        }
    });
}, 50)






