const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map((journey) => {
    return journey.startLocation;
  });
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => {
    return journey.endLocation;
  });
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => {
    return journey.transport === transport;
  });
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  });
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, distance) => {
    return total += distance.distance;
  }, 0);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const uniqueTransport = [...new Set(this.journeys.transport)];
  const uniqueTransportArray = Array.from(uniqueTransport);
  return uniqueTransportArray



  
  
  
  



  // let uniqueTransport = new Set(this.journeys.trasport)

  // uniqueTransport.has(this.journey)

  // return [...uniqueTransport]  




  // const uniqueTransport = [...new Set(this.journeys.trasport)];
  //   return uniqueTransport;


    
    // const uniqueTransport = new Set(this.journeys.trasport);
    // const uniqueTransportArray = [...uniqueTransport];
    // // const uniqueTransportArray = Array.from(uniqueTransport);
    // return uniqueTransportArray
    


  // const uniqueTransport = new Set(this.journeys.transport);
  // const uniqueTransportArray = [...uniqueTransport];
  // return uniqueTransportArray
  


  // return Array.from(new Set(this.journeys.transport))

  

  // const uniqueTransport = Array.from(new Set(this.journeys.transport));
  // return [...uniqueTransport];
  
  
  
  
  
  
  // return this.journeys.map((journey) => {
  //   return journey.transport;




}

module.exports = Traveller;
