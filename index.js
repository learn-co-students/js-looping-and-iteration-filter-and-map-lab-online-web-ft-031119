function driversWithRevenueOver(drivers,revenue){
  return drivers.filter(function(driver){return driver.revenue > revenue})
}
function driverNamesWithRevenueOver(drivers,revenue) {
  return driversWithRevenueOver(drivers,revenue).map(function(driver){return driver.name})
}
function exactMatch(drivers,ob){
  const key = Object.keys(ob)[0]
  const value = Object.values(ob)[0]
  return drivers.filter(function (driver) {return driver[key] === value})
}
function exactMatchToList(drivers,ob){
  return exactMatch(drivers,ob).map(function(driver){return driver.name})
}
