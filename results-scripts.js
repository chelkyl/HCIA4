var resultsPerPage = 10;

var amenitySVGs = {
    "food and drink": '<svg version="1.1" viewBox="0 0 540.201 540.201" preserveAspectRatio="xMinYMin meet" class="svg-content"><g><g><path d="M169.467,194.102v310.136c0,8.086,2.95,15.08,8.862,20.986c5.808,5.809,12.681,8.732,20.6,8.824c7.914-0.092,14.792-3.016,20.606-8.824c5.906-5.906,8.855-12.9,8.855-20.986V194.102c8.862-3.103,42.081-32.711,42.081-42.204V27.161c0-4.033-1.481-7.534-4.431-10.49c-2.956-2.95-6.457-4.431-10.49-4.431c-4.045,0-7.54,1.481-10.49,4.431c-2.956,2.962-4.431,6.457-4.431,10.49v96.99c0,4.045-1.481,7.54-4.431,10.49c-2.956,2.956-6.451,4.425-10.49,4.425c-4.045,0-7.54-1.469-10.49-4.425c-2.95-2.95-4.431-6.451-4.431-10.49v-96.99c0-4.033-1.481-7.534-4.431-10.49c-2.95-2.95-6.45-4.431-10.489-4.431c-4.045,0-7.54,1.481-10.49,4.431c-2.956,2.962-4.431,6.457-4.431,10.49v96.99c0,4.045-1.481,7.54-4.431,10.49c-2.956,2.956-6.451,4.425-10.49,4.425c-4.045,0-7.54-1.469-10.49-4.425c-2.956-2.95-4.431-6.451-4.431-10.49v-96.99c0-4.033-1.475-7.534-4.431-10.49c-2.95-2.95-6.45-4.431-10.49-4.431c-4.045,0-7.54,1.481-10.489,4.431c-2.95,2.962-4.431,6.457-4.431,10.49v124.732C121.266,161.384,160.605,190.993,169.467,194.102z"/><path d="M199.308,534.08c-0.129,0-0.251-0.037-0.38-0.037c-0.128,0-0.245,0.037-0.379,0.037H199.308z"/><path d="M389.848,540.201c-0.129,0-0.25-0.037-0.379-0.037s-0.252,0.037-0.379,0.037H389.848z"/><path d="M326.139,268.588h33.869v241.771c0,8.084,2.949,15.08,8.855,20.984c5.812,5.809,12.686,8.734,20.605,8.826c7.912-0.092,14.791-3.018,20.605-8.826c5.906-5.904,8.861-12.9,8.861-20.984V14.921c0-4.033-1.48-7.534-4.43-10.49C411.549,1.481,408.055,0,404.016,0h-10.723c-20.52,0-38.084,7.308-52.693,21.916c-14.607,14.614-21.914,32.179-21.914,52.693v186.52c0,2.02,0.74,3.77,2.215,5.245C322.369,267.848,324.119,268.588,326.139,268.588z"/></g></g></svg>',
    "outlets": '<svg version="1.1" viewBox="0 0 435.747 435.746" preserveAspectRatio="xMinYMin meet" class="svg-content"><g><path d="M336.387,131.431v172.872c0,14.188-11.504,25.698-25.698,25.698c-14.189,0-25.696-11.51-25.696-25.698v-7.584c-2.287,0.346-4.616,0.579-7.002,0.579h-79.91c-25.802,0-46.72-20.913-46.72-46.72v-10.747h-20.049c-9.086,0-12.742-4.881-14.192-12.142H0v-27.883h117.699c1.758-5.957,5.54-9.812,13.613-9.812h20.049v-4.829c0-25.798,20.917-46.72,46.72-46.72h79.91c2.386,0,4.715,0.241,7.002,0.583v-7.587c0-14.188,11.507-25.697,25.696-25.697C324.883,105.745,336.387,117.242,336.387,131.431z M435.747,169.896c0-10.063-8.165-18.222-18.223-18.222h-73.193v36.443h73.193C427.582,188.118,435.747,179.965,435.747,169.896z M417.524,246.371h-73.193v36.443h73.193c10.058,0,18.223-8.16,18.223-18.223S427.582,246.371,417.524,246.371z"/></g></svg>',
    "wifi": '<svg version="1.1" viewBox="0 0 26 26" preserveAspectRatio="xMinYMin meet" class="svg-content"><g><path d="M25.7,8.3C22.4,5,18,3,13,3S3.5,5,0.3,8.3C0.1,8.5,0,8.7,0,9c0,0.3,0.1,0.5,0.3,0.7l1.4,1.4c0.4,0.4,1,0.4,1.4,0   C5.6,8.6,9.1,7,13,7s7.4,1.6,9.9,4.1c0.4,0.4,1,0.4,1.4,0l1.4-1.4C25.9,9.5,26,9.3,26,9S25.9,8.4,25.7,8.3z"/><path d="m13,11c-2.8,0-5.2,1.1-7,2.9-0.4,0.4-0.4,1 0,1.4l1.4,1.4c0.4,0.4 1,0.4 1.4,0 1.1-1.1 2.6-1.7 4.2-1.7 1.6,0 3.1,0.7 4.2,1.7 0.4,0.4 1,0.4 1.4,0l1.4-1.4c0.4-0.4 0.4-1 0-1.4-1.8-1.8-4.2-2.9-7-2.9z"/><circle cx="13" cy="21" r="2"/></g></svg>'
};

function getAmenityOrder() {
    return [
        "food and drink",
        "wifi",
        "outlets"
    ];
}

class ResultItem {
    constructor(item) {
        this.building = item;
        this.name = this.building.name;
        this.description = this.building.description;
        this.amenities = this.building.amenities;
        this.location = this.building.location;
        this.address = this.building.location.address;
        this.distance = this.building.distance;
        this.ratings = this.building.ratings;
        this.ratings.averages = getAllRatingsAverages(this.ratings);
        this.floors = this.building.floors;
        this.rooms = combineFloors(this.floors);
    }
}

function convertToResults(data) {
    return data.map(building => {
        return new ResultItem(building);
    });
}

function km2ImperialFtMi(kmDistance) {
    var imperialDistanceFt = kmDistance * 3280.8;
    var imperialDistanceMi = kmDistance * 0.62137;
    return {
        "feet": imperialDistanceFt,
        "miles": imperialDistanceMi
    };
}

function addResultItem(result, resultsArea) {
    var resultItem = document.createElement("div");
    resultItem.classList.add("result-item", "grey", "lighten-5");

    var distanceSect = document.createElement("div");
    distanceSect.classList.add("result-item-section", "result-item-section-distance");
    var distanceText = document.createElement("p");
    var distanceNum = document.createElement("span");
    distanceNum.classList.add("result-item-section-distance-number");
    if (result.distance.miles < 0.1) {
        distanceNum.innerHTML = result.distance.feet.toFixed(0);
        distanceText.innerHTML = "ft";
    }
    else {
        distanceNum.innerHTML = result.distance.miles.toFixed(1);
        distanceText.innerHTML = "mi";
    }
    distanceText.insertAdjacentElement("afterbegin", distanceNum);
    distanceSect.appendChild(distanceText);

    var vd1 = document.createElement("div");
    vd1.classList.add("vertical-divider");

    var nameSect = document.createElement("div");
    nameSect.classList.add("result-item-section", "result-item-section-name");
    var nameText = document.createElement("p");
    nameText.innerHTML = result.name;
    var addrText = document.createElement("p");
    addrText.innerHTML = result.address;
    nameSect.appendChild(nameText);
    nameSect.appendChild(addrText);

    var vd2 = document.createElement("div");
    vd2.classList.add("vertical-divider");

    var amenSect = document.createElement("div");
    amenSect.classList.add("result-item-section", "result-item-section-amenities");
    var amenityOrder = getAmenityOrder();
    for (var i = 0; i < amenityOrder.length; ++i) {
        var amenity = amenityOrder[i];
        if (result.amenities[amenity] == 1) {
            var amenEl = document.createElement("div");
            var svgCont = document.createElement("div");
            svgCont.classList.add("svg-container");
            svgCont.innerHTML = amenitySVGs[amenity];
            amenEl.appendChild(svgCont);
            amenSect.appendChild(amenEl);
        }
    }

    var vd3 = document.createElement("div");
    vd3.classList.add("vertical-divider");

    var rateSect = document.createElement("div");
    rateSect.classList.add("result-item-section", "result-item-section-rating");
    var rateText = document.createElement("div");
    var rateNum = document.createElement("span");
    rateNum.classList.add("result-item-section-rating-number");
    rateNum.innerHTML = result.ratings.averages.overall.toFixed(1);
    rateText.innerHTML = "/5&#9733;";
    rateText.insertAdjacentElement("afterbegin", rateNum);
    rateSect.appendChild(rateText);

    resultItem.appendChild(distanceSect);
    resultItem.appendChild(vd1);
    resultItem.appendChild(nameSect);
    resultItem.appendChild(vd2);
    resultItem.appendChild(amenSect);
    resultItem.appendChild(vd3);
    resultItem.appendChild(rateSect);
    resultsArea.append(resultItem);
}

function addResultItems(resultsList, resultsArea) {
    for (var i = 0; i < resultsList.length && i < resultsPerPage; ++i) {
        addResultItem(resultsList[i], resultsArea);
    }
}

function combineFloors(floors) {
    var allRooms = [];
    for (var i = 0; i < floors.length; ++i) {
        var floorObj = floors[i];
        var floorName = Object.keys(floorObj)[0];
        var floor = floorObj[floorName];
        var rooms = floor.rooms;
        for (var r = 0; r < rooms.length; ++r) {
            var roomObj = rooms[r];
            var roomId = Object.keys(roomObj)[0];
            var room = roomObj[roomId];
            room.floor = floorName;
            allRooms.push(roomObj);
        }
    }
    return allRooms;
}

function getAverageRating(key, ratingObj, includeOriginal) {
    var sum = 0;
    var n = 0;
    if (includeOriginal) {
        sum += ratingObj.original[key];
        n++;
    }
    for (var i = 0; i < ratingObj.community.length; ++i) {
        var userId = Object.keys(ratingObj)[0];
        var userRatingObj = ratingObj[userId];
        var userRating = userRatingObj[key];
        sum += userRating;
        ++n;
    }
    return sum * 1.0 / n;
}

function getAllRatingsAverages(ratingsObj) {
    var averageRatings = {};
    var keys = Object.keys(ratingsObj.original);
    var overallSum = 0;
    var overallNum = 0;
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        averageRatings[key] = getAverageRating(key, ratingsObj, true);
        if (key != "volume") {
            overallSum += averageRatings[key];
            overallNum++;
        }
    }
    averageRatings.overall = overallSum / overallNum;
    return averageRatings;
}

function filterBuildingsByDistance(distance, data) {
    return data.filter(resultItem => {
        return resultItem.distance.miles <= distance;
    });
}

function filterRoomsByCapacity(capacity, rooms) {
    return rooms.filter(roomObj => {
        var roomId = Object.keys(roomObj)[0];
        var room = roomObj[roomId];
        return capacity <= room.capacity;
    });
}

function filterBuildingsByCapacity(capacity, data) {
    var reducedData = data.reduce(function (filtered, resultItem) {
        resultItem.rooms = filterRoomsByCapacity(capacity, resultItem.rooms);
        if (resultItem.rooms.length > 0) filtered.push(resultItem);
        return filtered;
    }, []);
    return reducedData;
}

function filterBuildingsByVolumeRating(volumeRange, data) {
    var reducedData = data.reduce(function (filtered, resultItem) {
        if (resultItem.ratings.averages.volume <= volumeRange.max &&
            resultItem.ratings.averages.volume > volumeRange.min) {
            filtered.push(resultItem);
        }
        return filtered;
    }, []);
    return reducedData;
}

function filterBuildingsByAmenities(amenities, data) {
    return data.filter(resultItem => {
        for (var i = 0; i < amenities.length; ++i) {
            if (resultItem.amenities[amenities[i]] != 1) return false;
        }
        return true;
    });
}

function searchData(query, data) {
    /*
    filter order:
    distance
    capacity
    volume rating
    amenities AND
    */
    var distanceData = getDistanceData(query.coords, data);
    var resultsData = convertToResults(distanceData);
    var resultsDataSorted = sortResultsByDistance(resultsData);
    var filt_distanceData = filterBuildingsByDistance(query.distance, resultsDataSorted);
    var filt_capacityData = filterBuildingsByCapacity(query.capacity, filt_distanceData);
    var filt_volumeData = filterBuildingsByVolumeRating(query.volume, filt_capacityData);
    var filt_amenitiesData = filterBuildingsByAmenities(query.amenities, filt_volumeData);
    return filt_amenitiesData;
}

function deg2Rad(deg) {
    return deg * Math.PI / 180;
}

function calculateDistances(coords, data) {
    return data.map(buildingObj => {
        var buildingId = Object.keys(buildingObj)[0];
        var building = buildingObj[buildingId];
        var lon1 = Number.parseFloat(coords.longitude);
        var lat1 = Number.parseFloat(coords.latitude);
        var lon2 = Number.parseFloat(building.location.coordinates.longitude);
        var lat2 = Number.parseFloat(building.location.coordinates.latitude);
        var lat1R = deg2Rad(lat1);
        var lat2R = deg2Rad(lat2);
        var latDelta = deg2Rad(lat2 - lat1);
        var lonDelta = deg2Rad(lon2 - lon1);
        var earthRadiusKm = 6371;
        var a = Math.sin(latDelta / 2) * Math.sin(latDelta / 2) +
            Math.sin(lonDelta / 2) * Math.sin(lonDelta / 2) * Math.cos(lat1R) * Math.cos(lat2R);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var realDistanceMetric = earthRadiusKm * c;
        var realDistanceImperial = km2ImperialFtMi(realDistanceMetric);
        //building.distance = Math.sqrt(Math.pow(lon1 - lon2, 2) + Math.pow(lat1 - lat2, 2));
        building.distance = realDistanceImperial;
        return building;
    });
}

function getDistanceData(coords, data) {
    return calculateDistances(coords, data);
}

function sortByDistance(buildingObjA, buildingObjB) {
    var buildingIdA = Object.keys(buildingObjA)[0];
    var buildingIdB = Object.keys(buildingObjB)[0];
    var buildingA = buildingObjA[buildingIdA];
    var buildingB = buildingObjB[buildingIdB];
    return buildingA.distance.feet - buildingB.distance.feet;
}

function sortResultsByDistance(data) {
    return data.sort(sortByDistance);
}

function getDBData() {
    return dbData;
}

var queryModel = {
    "coords": {
        "longitude": "gps coord",
        "latitude": "gps coord"
    },
    "distance": "5",
    "capacity": "1-inf",
    "volume": {
        "max": "1-4",
        "min": "1-4"
    },
    "amenities": ["amenity names"]
};

function updateSuggestions(query) {
    var data = getDBData();
    console.log("Data retrieved: " + data.length);
    var results = searchData(query, data);
    if (results.length == 0) {
        $('#results-status').addClass("results-status-visible");
        return;
    }
    $('#results-status').removeClass("results-status-visible");
    console.log("Results found: " + results.length);
    var resultsSorted = sortResultsByDistance(results);
    var resultsArea = $('#results-area');
    console.log("Results added");
    addResultItems(results, resultsArea);
}