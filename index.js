// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver){
    return driver.revenue > revenue;
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  let list = [];
  list = driversWithRevenueOver(drivers, revenue);
  return list.map(function(item) {
    return item.name;
  })
}

function exactMatch(drivers, obj) {
  return drivers.filter(function(driver) {
    return driver[Object.keys(obj)[0]] === Object.values(obj)[0];
  })
}

function exactMatchToList(drivers, obj) {
  let list = [];
  list = exactMatch(drivers, obj);
  return list.map(function(item){
    return item.name;
  })
}
