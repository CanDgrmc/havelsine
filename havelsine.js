const  radius = 6371
class Havelsine {
   
    
    getDirectDistance(lat1,lng1,lat2,lng2){
        const deltaLat = this.degrees_to_radians(lat2 - lat1)
        const deltaLng = this.degrees_to_radians(lng2 - lng1)
        const sindLat = Math.sin(deltaLat/2)
        const sindLng = Math.sin(deltaLng / 2);
    
        const alpha = Math.pow(sindLat,2) + Math.pow(sindLng,2) * Math.cos(this.degrees_to_radians(lat1)) * Math.cos(this.degrees_to_radians(lat2));
        // iki nokta arasındaki açı
        const theta = 2 * Math.atan2(Math.sqrt(alpha), Math.sqrt(1-alpha))
        const dist = radius*theta;
        console.log(`deltaLat : ${deltaLat }`)
        console.log(`deltaLng: ${deltaLng }`)
        console.log(`alpha: ${alpha }`)
        console.log(`theta: ${theta }`)
    
        return dist
    
    }
    
    degrees_to_radians(degrees)
    {
      const pi = Math.PI;
      return degrees * (pi/180);
    }
    
}
module.exports = Havelsine
