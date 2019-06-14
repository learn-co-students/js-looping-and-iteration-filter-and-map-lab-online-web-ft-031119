function  driversWithRevenueOver(drivers, revenue){
	return drivers.filter(function (driver){
		return driver.revenue > revenue 
	});
};

function driverNamesWithRevenueOver(drivers, revenue){
	return driversWithRevenueOver(drivers, revenue).map(function(driver){
		return driver.name;
	});


};

function exactMatch(drivers, matchingObject){
	return drivers.filter(function(driver){
		for (const key in matchingObject) {
		  if(driver[key] === matchingObject[key]){
		  	return driver[key];
		  };
		};
	});

};

function exactMatchToList(drivers, matchingObject){
	return exactMatch(drivers, matchingObject).map(function(driver){
		return driver.name;
	});
};