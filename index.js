
// Code your solution here:
function driversWithRevenueOver(driverList, mark) {
  return driverList.filter(driver => driver.revenue > mark
  );
}

function driverNamesWithRevenueOver(driverList, mark) {
  return driverList.filter(driver => driver.revenue > mark)
    .map(driver => driver.name);
}

function exactMatch(driverList, criteria) {
  return driverList.filter(driver => {
    let matches = false;

    for (const key in criteria) {
      matches = driver[key] === criteria[key];
    }

    return matches;

    // if (criteria.name) {
    //   return driver.name === criteria.name
    // }
    // if (criteria.revenue) {
    //   return driver.revenue === criteria.revenue
    // }
  })
}

function exactMatchToList(driverList, criteria) {
  return exactMatch(driverList, criteria)
    .map(driver => driver.name)
}

  // return driverList.filter(driver => {
  //   if (driver.name === criteria.name) {
  //     return driver
  //   } else if (driver.revenue === criteria.revenue) {
  //     return driver
  //   }
  // }).map(driver => driver.name);

