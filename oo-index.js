class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 1000;
  }

  restart() {
    while (eventArea.hasChildNodes()) {
        eventArea.removeChild(eventArea.lastChild);
    }
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("Out on the street, ready to go!"));
    eventArea.prepend(div);
    imageArea.className = 'new';
  }

  attack() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("'ATTAAAAAAAAAK!''"));
    eventArea.prepend(div);
    imageArea.className = 'attack';
  }

  defend() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You put sunglasses on."));
    eventArea.prepend(div);
    imageArea.className = 'defend';
  }

  heal() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You feel refreshed after yoga."));
    eventArea.prepend(div);
    imageArea.className = 'heal';
  }

  breakdance() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("It's really spinning class"));
    eventArea.prepend(div);
    imageArea.className = 'breakdance';
  }

  eatCronut() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("You've gained 1000 health points."));
    eventArea.prepend(div);
    imageArea.className = 'eat';
  }

}

const uni = new Unicorn("Uni", "Taxi Cab Driver");

const eventArea = document.getElementById('event_area')
const imageArea = document.getElementById('image_area')

const restartButton = document.getElementById('restart').addEventListener("click", uni.restart);
const attackButton = document.getElementById('attack').addEventListener("click", uni.attack);
const defendButton = document.getElementById('defend').addEventListener("click", uni.defend);
const healButton = document.getElementById('heal').addEventListener("click", uni.heal);
const breakdanceButton = document.getElementById('breakdance').addEventListener("click", uni.breakdance);
const eatButton = document.getElementById('eat').addEventListener("click", uni.eatCronut);
