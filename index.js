const Havelsine = require('./havelsine')


const h = new Havelsine


console.log({
    distance: h.getDirectDistance(42.361145,-71.057083, 40.730610, -73.935242)
})