const resultsPerPage = 20;
const ratingsStarsMax = 5;

const amenityIconNames = {
    "food and drink": "icon-spoon-knife",
    "outlets": "icon-power-cord",
    "wifi": "icon-connection"
}

function getAmenityOrder() {
    return [
        "food and drink",
        "wifi",
        "outlets"
    ];
}

class ResultItem {
    constructor(item) {
        this.buildingId = Object.keys(item)[0];
        this.building = item[this.buildingId];
        this.name = this.building.name;
        this.description = this.building.description;
        this.images = this.building.images;
        this.amenities = this.building.amenities;
        this.location = this.building.location;
        this.address = this.building.location.address;
        this.distance = this.building.distance;
        this.ratings = this.building.ratings;
        this.ratings.averages = getAllRatingsAverages(this.ratings);
        this.floors = this.building.floors;
        this.rooms = combineFloors(this.floors);
        this.mapMarkerPos;
        this.mapMarker;
        if (gMapAPILoaded) {
            resultItemAddMapMarker(this);
        }
    }
}

function convertToResults(data) {
    return data.reduce((resultsData, buildingObj) => {
        resultsData.push(new ResultItem(buildingObj));
        return resultsData;
    }, []);
}

function km2ImperialFtMi(kmDistance) {
    const imperialDistanceFt = kmDistance * 3280.8;
    const imperialDistanceMi = kmDistance * 0.62137;
    return {
        "feet": imperialDistanceFt,
        "miles": imperialDistanceMi
    };
}

let resultItemCounter = 0;
function addResultItem(result, resultsArea) {
    resultItemCounter++;
    let resultItem = document.createElement("div");
    resultItem.classList.add("result-item", "grey", "lighten-5");

    let radioId = "result-item-radio-" + resultItemCounter;

    let radioEl = document.createElement("input");
    radioEl.id = radioId;
    radioEl.name = "result-item-select";
    radioEl.type = "radio";
    radioEl.className = "hidden";
    resultItem.appendChild(radioEl);

    let labelEl = document.createElement("div");
    //labelEl.htmlFor = radioId;
    resultItem.appendChild(labelEl);

    let distanceSect = document.createElement("div");
    distanceSect.classList.add("result-item-section", "result-item-section-distance");
    labelEl.appendChild(distanceSect);
    let distanceText = document.createElement("p");
    let distanceNum = document.createElement("span");
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

    let vd1 = document.createElement("div");
    vd1.classList.add("vertical-divider");
    labelEl.appendChild(vd1);

    let nameSect = document.createElement("div");
    nameSect.classList.add("result-item-section", "result-item-section-main");
    labelEl.appendChild(nameSect);
    let nameText = document.createElement("p");
    nameText.classList.add("result-item-section-name");
    nameText.innerHTML = result.name;
    nameSect.appendChild(nameText);
    let addrText = document.createElement("p");
    addrText.innerHTML = result.address;
    nameSect.appendChild(addrText);

    let vd2 = document.createElement("div");
    vd2.classList.add("vertical-divider");
    labelEl.appendChild(vd2);

    let amenSect = document.createElement("div");
    amenSect.classList.add("result-item-section", "result-item-section-amenities");
    labelEl.appendChild(amenSect);
    let amenityOrder = getAmenityOrder();
    for (let i = 0; i < amenityOrder.length; ++i) {
        let amenity = amenityOrder[i];
        if (result.amenities[amenity] == 1) {
            let amenEl = document.createElement("div");
            amenEl.classList.add(amenityIconNames[amenity]);
            amenSect.appendChild(amenEl);
        }
    }

    let vd3 = document.createElement("div");
    vd3.classList.add("vertical-divider");
    labelEl.appendChild(vd3);

    let rateSect = document.createElement("div");
    rateSect.classList.add("result-item-section", "result-item-section-rating");
    labelEl.appendChild(rateSect);
    let rateText = document.createElement("div");
    let rateNum = document.createElement("span");
    rateNum.classList.add("result-item-section-rating-number");
    rateNum.innerHTML = result.ratings.averages.overall.toFixed(1);
    rateText.innerHTML = "/" + ratingsStarsMax;
    rateText.insertAdjacentElement("afterbegin", rateNum);
    rateSect.appendChild(rateText);

    resultsArea.append(resultItem);

    resultItem.addEventListener("click", handleResultItemClick);
    if (gMapAPILoaded) {
        if (!result.mapMarker) {
            resultItemAddMapMarker(result);
        }
    }
}

function resultItemAddMapMarker(resultItem) {
    resultItem.mapMarkerPos = new google.maps.LatLng(resultItem.location.coordinates.latitude, resultItem.location.coordinates.longitude);
    resultItem.mapMarker = new google.maps.Marker({
        map: gMap,
        position: resultItem.mapMarkerPos
    });
    resultItem.mapMarker.addListener('click', (e) => {
        let resultIdx = -1;
        for (let i = 0; i < curResults.length && resultIdx == -1; ++i) {
            if (curResults[i].buildingId == resultItem.buildingId) resultIdx = i;
        }
        if (resultIdx != -1) {
            let resultEls = resultsDiv.children("div");
            let resultEl = resultEls.get(resultIdx);
            resultEl.click();
            resultEl.scrollIntoView();
        }
    });
}

function addResultItems(resultsList, resultsArea) {
    for (let i = 0; i < resultsList.length && i < resultsPerPage; ++i) {
        addResultItem(resultsList[i], resultsArea);
    }
}

function combineFloors(floors) {
    let allRooms = [];
    for (let i = 0; i < floors.length; ++i) {
        let floorObj = floors[i];
        const floorName = Object.keys(floorObj)[0];
        let floor = floorObj[floorName];
        let rooms = floor.rooms;
        for (let r = 0; r < rooms.length; ++r) {
            let roomObj = rooms[r];
            const roomId = Object.keys(roomObj)[0];
            let room = roomObj[roomId];
            room.floor = floorName;
            allRooms.push(roomObj);
        }
    }
    return allRooms;
}

function getAverageRating(key, ratingObj, includeOriginal) {
    let sum = 0;
    let n = 0;
    if (includeOriginal) {
        sum += ratingObj.original[key];
        n++;
    }
    for (let i = 0; i < ratingObj.community.length; ++i) {
        const userId = Object.keys(ratingObj)[0];
        const userRatingObj = ratingObj[userId];
        const userRating = userRatingObj[key];
        sum += userRating;
        ++n;
    }
    return sum * 1.0 / n;
}

function getAllRatingsAverages(ratingsObj) {
    let averageRatings = {};
    const keys = Object.keys(ratingsObj.original);
    let overallSum = 0;
    let overallNum = 0;
    for (let i = 0; i < keys.length; ++i) {
        const key = keys[i];
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
        const roomId = Object.keys(roomObj)[0];
        const room = roomObj[roomId];
        return capacity <= room.capacity;
    });
}

function filterBuildingsByCapacity(capacity, data) {
    let reducedData = data.reduce(function (filtered, resultItem) {
        if (resultItem.rooms.length != 0) {
            resultItem.rooms = filterRoomsByCapacity(capacity, resultItem.rooms);
            if (resultItem.rooms.length > 0) filtered.push(resultItem);
        }
        else filtered.push(resultItem);
        return filtered;
    }, []);
    return reducedData;
}

function filterBuildingsByVolumeRating(volumeRange, data) {
    let reducedData = data.reduce(function (filtered, resultItem) {
        if (resultItem.ratings.averages.volume <= volumeRange.max &&
            resultItem.ratings.averages.volume >= volumeRange.min) {
            filtered.push(resultItem);
        }
        return filtered;
    }, []);
    return reducedData;
}

function filterBuildingsByAmenities(amenities, data) {
    return data.filter(resultItem => {
        for (let i = 0; i < amenities.length; ++i) {
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
    let distanceData = getDistanceData(query.coords, data);
    let resultsData = convertToResults(distanceData);
    let resultsDataSorted = sortResultsByDistance(resultsData);
    let filt_distanceData = filterBuildingsByDistance(query.distance, resultsDataSorted);
    let filt_capacityData = filterBuildingsByCapacity(query.capacity, filt_distanceData);
    let filt_volumeData = filterBuildingsByVolumeRating(query.volume, filt_capacityData);
    let filt_amenitiesData = filterBuildingsByAmenities(query.amenities, filt_volumeData);
    let debug_msg = "dD:" + distanceData.length + ">" +
        "rD:" + resultsData.length + ">" +
        "rDS:" + resultsDataSorted.length + ">" +
        "fdD:" + filt_distanceData.length + ">" +
        "fcD:" + filt_capacityData.length + ">" +
        "fvD:" + filt_volumeData.length + ">" +
        "faD:" + filt_amenitiesData.length;
    // console.log(debug_msg);
    return filt_amenitiesData;
}

function deg2Rad(deg) {
    return deg * Math.PI / 180;
}

function calculateDistances(coords, data) {
    return data.map(buildingObj => {
        const buildingId = Object.keys(buildingObj)[0];
        let building = buildingObj[buildingId];
        const lon1 = Number.parseFloat(coords.longitude);
        const lat1 = Number.parseFloat(coords.latitude);
        const lon2 = Number.parseFloat(building.location.coordinates.longitude);
        const lat2 = Number.parseFloat(building.location.coordinates.latitude);
        const lat1R = deg2Rad(lat1);
        const lat2R = deg2Rad(lat2);
        const latDelta = deg2Rad(lat2 - lat1);
        const lonDelta = deg2Rad(lon2 - lon1);
        const earthRadiusKm = 6371;
        const a = Math.sin(latDelta / 2) * Math.sin(latDelta / 2) +
            Math.sin(lonDelta / 2) * Math.sin(lonDelta / 2) * Math.cos(lat1R) * Math.cos(lat2R);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const realDistanceMetric = earthRadiusKm * c;
        const realDistanceImperial = km2ImperialFtMi(realDistanceMetric);
        //building.distance = Math.sqrt(Math.pow(lon1 - lon2, 2) + Math.pow(lat1 - lat2, 2));
        building.distance = realDistanceImperial;
        return buildingObj;
    });
}

function getDistanceData(coords, data) {
    return calculateDistances(coords, data);
}

function sortByDistance(resultItemA, resultItemB) {
    return resultItemA.distance.feet - resultItemB.distance.feet;
}

function sortByAmenities(resultItemA, resultItemB) {
    let Acount = 0;
    let Bcount = 0;
    for (let amenity in resultItemA.amenities) {
        if (resultItemA.amenities[amenity] == 1) Acount++;
    }
    for (let amenity in resultItemB.amenities) {
        if (resultItemB.amenities[amenity] == 1) Bcount++;
    }
    return Bcount - Acount;
}

function sortByRating(resultItemA, resultItemB) {
    return resultItemB.ratings.averages.overall - resultItemA.ratings.averages.overall;
}

function sortResultsByRating(resultsData) {
    return resultsData.sort(sortByRating);
}

function sortResultsByAmenities(resultsData) {
    return resultsData.sort(sortByAmenities);
}

function sortResultsByDistance(resultsData) {
    return resultsData.sort(sortByDistance);
}

function getDBData() {
    return dbData;
}

const queryModel = {
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

function showResultsStatus(show, status, isError) {
    if (show) {
        resultsStatusText.text(status);
        if (isError) resultsStatusDiv.addClass("error");
        else resultsStatusDiv.removeClass("error");
        resultsStatusDiv.show("slow");
    }
    else {
        resultsStatusDiv.removeClass("error");
        resultsStatusDiv.hide("fast");
    }
}

function compareResults(results1, results2) {
    if (results1 === undefined && results2 === undefined) return true;
    if (!results1 || !results2) return false;
    if (results1.length != results2.length) return false;
    for (let i = 0; i < results1.length; ++i) {
        const result1 = results1[i];
        const result2 = results2[i];
        if (result1.buildingId != result2.buildingId) return false;
    }
    return true;
}

//!! test reducers, compare first element before reduce with after for equality
//!! add map center on user position control
//!! add letters matching markers and results
function updateSuggestions(query) {
    const data = getDBData();
    // console.log("Data retrieved: " + data.length);
    let results = searchData(query, data);
    if (results.length == 0) {
        showResultsStatus(true, "No results found, try again with different options.", true);
        return;
    }
    showResultsStatus(false);
    if (compareResults(results, resultsArr)) {
        console.log('No change in results');
        return;
    }
    resultsArr = results;
    console.log("Results found: " + results.length);
    searchSuggestions(resultsArr);
}

function clearCurResultItems() {
    $('#results-area').empty();
    curResults.forEach((resultItem) => {
        resultItem.mapMarker.setMap(null);
    });
    curResults = [];
}

function sortSuggestions(results) {
    let resultsSorted = [];
    const sortType = $('#results-sort').val();
    if (sortType == "amenities") resultsSorted = sortResultsByAmenities(results);
    else if (sortType == "rating") resultsSorted = sortResultsByRating(results);
    else resultsSorted = sortResultsByDistance(results);
    clearCurResultItems();
    curResults = resultsSorted;
    let resultsArea = $('#results-area');
    addResultItems(curResults, resultsArea);
    console.log("Results updated");
}

function searchSuggestions(results) {
    const searchTerm = $('#results-search').val().toLowerCase();
    let searchedResults = results.filter(resultItem => {
        if (resultItem.name.toLowerCase().includes(searchTerm)) return true;
        if (resultItem.description.toLowerCase().includes(searchTerm)) return true;
        for (let amenity in resultItem.amenities) {
            if (amenity.toLowerCase().includes(searchTerm) && resultItem.amenities[amenity] == 1) return true;
        }
        if (resultItem.address.toLowerCase().includes(searchTerm)) return true;
        if (resultItem.distance.feet.toString().includes(searchTerm)) return true;
        if (resultItem.distance.miles.toString().includes(searchTerm)) return true;
        if (resultItem.ratings.averages.overall.toString().includes(searchTerm)) return true;
        return false;
    });
    if (searchedResults.length == 0) {
        showResultsStatus(true, "No results found for search terms. Please try alternative terms.", true);
    }
    else {
        showResultsStatus(false);
        sortSuggestions(searchedResults);
    }
}
