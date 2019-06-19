// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (driver){
    return driver.revenue > revenue
  })
}

function driverNamesWithRevenueOver(drivers, revenue){
  const driversOver=drivers.filter(function (driver){
    return driver.revenue > revenue
  })
  
  return driversOver.map(function (driver){
    return driver.name
  })
}

function exactMatch(drivers, object){
  return drivers.filter(function (driver){
    let matched = false

    for (const key in object) {
      matched = driver[key] === object[key]
    }

    return matched
  })
}


function exactMatchToList(drivers, object){
  const driversOver= drivers.filter(function (driver){
    let matched = false

    for (const key in object) {
      matched = driver[key] === object[key]
    }

    return matched
  })
  
  return driversOver.map(function (driver){
    return driver.name
  })
}



