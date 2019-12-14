### Havelsine formula Js
Formula	x = Δλ ⋅ cos φm
y = Δφ
d = R ⋅ √x² + y²

```javascript
/**  
const x = (λ2-λ1) * Math.cos((φ1+φ2)/2);
const y = (φ2-φ1);
const d = Math.sqrt(x*x + y*y) * R;
*/
const boston = [lat=42.361145, lng= -71.057083]
const newYork = [lat= 40.730610, lng= -73.935242]

const h = new Havelsine
console.log({
    distance: h.getDirectDistance(...boston, ...newYork )
})

```