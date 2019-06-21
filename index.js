// Code your solution here:
function driversWithRevenueOver(drivers, driverRevenue) {
  return drivers.filter( function (driver) {
    return driver.revenue > driverRevenue;
  });
}

function driverNamesWithRevenueOver(drivers, driverRevenue) {
  return driversWithRevenueOver(drivers, driverRevenue)
    .map(function (driver) {
      return driver.name;
    });
}

function exactMatch(drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;

  });
}

function exactMatchToList(drivers, matcher) {
  return exactMatch(drivers, matcher)
  .map(function (driver) {
    return driver.name
  })
}
