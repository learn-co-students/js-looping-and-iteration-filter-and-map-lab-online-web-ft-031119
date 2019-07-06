// Code your solution here:
function driversWithRevenueOver(drivers, value){
  return drivers.filter(function(driver){
    return driver.revenue > value;
  });
}

function driverNamesWithRevenueOver(drivers, value){
  return driversWithRevenueOver(drivers, value).map(function(driver){
    return driver.name;
  });
}

function exactMatch(drivers, query){
  return drivers.filter(function(driver){
    for (const key in query){
      return driver[key] === query[key];
    }
  });
}

function exactMatchToList(drivers, query){
  return exactMatch(drivers, query).map(function(driver){
    return driver.name;
  });
}
