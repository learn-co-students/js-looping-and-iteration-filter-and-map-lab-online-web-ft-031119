// Code your solution here:
function  driversWithRevenueOver(drivers, revenue){
  return drivers.filter(d=> d.revenue > revenue);

}

function  driverNamesWithRevenueOver(drivers, revenue){
  const newDrivers= driversWithRevenueOver(drivers, revenue);
    return newDrivers.map(d=> `${d.name}`);
}

function  exactMatch(drivers, object){
  let key = Object.keys(object)[0]
    return drivers.filter(driver => driver[key] === object[key])
  }

function  exactMatchToList(drivers, object){
  const driverList= exactMatch(drivers, object);
  return driverList.map(d=> `${d.name}`);

}
