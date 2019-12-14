const Havelsine = require('./havelsine')

const boston = [lat=42.361145, lng= -71.057083]
const newYork = [lat= 40.730610, lng= -73.935242]

const h = new Havelsine
console.log({
    distance: h.getDirectDistance(...boston, ...newYork )
})