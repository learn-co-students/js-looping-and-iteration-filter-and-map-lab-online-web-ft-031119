// Code your solution here:
function driversWithRevenueOver(drivers, wage){
  return drivers.filter(function(driver){
    return driver.revenue > wage
  });
}

function driverNamesWithRevenueOver(drivers, wage){
  return driversWithRevenueOver(drivers, wage).map(function(driver){
    return driver.name;
  });
}

function exactMatch(drivers, attribute){
  return drivers.filter(function(driver){
    for(const key in attribute){
      return driver[key] === attribute[key];
    }
  });
}

function exactMatchToList(drivers, attribute){
  return exactMatch(drivers, attribute).map(function(driver){
    return driver.name;
  })
}
