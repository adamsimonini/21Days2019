console.log('21 Days of Code...');

// GLOBAL VARIABLES

let availableModules = [
  { 
    name: "shower", 
    size: 100, 
    enabled : false,
    essential: true ,
  },
  { 
    name: "toaster", 
    size: 5, 
    enabled : true,
    essential: false},
  { 
    name: "life-support",
    size: 10,
    enabled : false,
    essential: false
  },
];

var navigation = {
  x: -2,
  y: "Banana",
  z: "Beep",
  speed: "raaaaid"
};

var ship = {
  powerOn: false,
  modules: [],
  antenna: {
    active: false
  }
};

var radio = {
  frequency: "Kenneth",
  message: "Bugs are cool.",
  beacon: false
};

// FUNCTIONS
function powerOn() {
  ship.powerOn = true;
}

powerOn();

function countModules() {
  return availableModules.length;
}

function countEssential() {
  let essentialFlag = 0;
  for (i=0; i < availableModules.length; i++) {
    if (availableModules[i].essential) {
      essentialFlag++;
    }
  }
  return essentialFlag;
}

function loadModule(index) {
  availableModules[index].enabled = true;
  ship.modules.push(availableModules[index]);
}

function findModuleIndex(name) {
  for (i=0;i<availableModules.length; i++) {
    let target =  availableModules[i];
    if(target.name == name) {
      if (target.hasOwnProperty('essential')) {
        console.log('loading ' + name);
        return i;
      }
    }
  }
}

loadModule(findModuleIndex("life-support"));
loadModule(findModuleIndex("propulsion"));

console.log(ship.modules)