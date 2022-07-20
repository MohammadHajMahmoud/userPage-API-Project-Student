function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
  }
  Handlebars.registerHelper('toProperCase', function (str) { 
     
    return str.charAt(0).toUpperCase() + str.substr(1).toLowerCase();
  
  
});