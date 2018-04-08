
let leftArea = $('#left-area');
let leftSidebar = $('#left-sidebar');
detectSwipe(leftSidebar[0],
    {
        'touch_points': 1,
        'direction': 'left',
        'callback': handleLeftSidebarSwipe,
        'min_distance': 50
    }
);
let leftSidebarTab = $('#left-sidebar-tab');
leftSidebarTab.click((e) => {
    let selectedResult = $(".result-item>input[type=radio]:checked");
    if (selectedResult.length != 0)
        selectedResult[0].checked = false;
});
detectSwipe(leftSidebarTab[0],
    {
        'touch_points': 1,
        'direction': 'left',
        'callback': handleLeftSidebarSwipe,
        'min_distance': 50
    }
);
detectSwipe(leftSidebarTab[0],
    {
        'touch_points': 1,
        'direction': 'right',
        'callback': handleResultsAreaSwipe,
        'min_distance': 50
    }
);
let leftSidebarToggle = $('#left-sidebar-tab-toggle');
leftSidebarToggle.change(toggleLeftSidebar);

let inputsDiv = $('#inputs-area');
let inputVolumeOpt = $("input[name=opt-volume]");
let inputGroupOpt = $("input[name=opt-group]");
let inputGroupOptMultiple = $("#opt-group-multiple");
inputGroupOptMultiple.click((e) => {
    inputGroupSize.focus();
});
let inputGroupSize = $("#input-groupsize");
let inputDistance = $("#input-distance");
let inputLocationOpt = $("input[name=opt-location]");
let inputLocationGPS = $("#opt-location-gps");
let buttonLocationGPS = $("#btn-location-gps");
let buttonLocationGPSStatus = $('#btn-location-gps-status');
buttonLocationGPS.click((e) => {
    inputLocationGPS.click();
    inputLocation.removeClass('valid invalid');
    geocodeStatus.removeClass('active');
    inputLocation.val(userCoords.latitude + ", " + userCoords.longitude);
});
let buttonLocationGPSRight = $('#right-btn-location-status');
let buttonLocationAddress = $("#btn-location-address");
buttonLocationAddress.click((e) => {
    $("#opt-location-address").click();
    geocodeStatus.addClass('active');
    inputLocation.focus();
});
let inputLocation = $("#input-location");
let inputLocationStatus = $("#input-location-status");
inputLocation.focus((e) => {
    inputLocation.select();
});
inputLocation.change(getGeocodeCoords);
let geocodeDone = true;
let geocodeStatus = $('#geocode-location-status');
function getGeocodeCoords(e) {
    toggleGeocodeStatus(false);
    var searchAddr = inputLocation.val();
    if (searchAddr.length > 0) {
        console.log("Geocoding " + searchAddr);
        geocoder.geocode({ 'address': searchAddr }, saveGeocodeCoords);
    }
}
function saveGeocodeCoords(results, status) {
    if (status === 'OK') {
        let geocodedCoords = results[0].geometry.location;
        userAddrCoords = {
            "latitude": geocodedCoords.lat(),
            "longitude": geocodedCoords.lng()
        };
        console.log("Geocode success: " + userAddrCoords.latitude + ", " + userAddrCoords.longitude);
        inputLocation.addClass('valid');
        inputLocation.removeClass('invalid');
        inputLocationStatus.attr('data-error', '');
        toggleGeocodeStatus(true);
    }
    else {
        console.log("Geocode failed because: " + status);
        inputLocation.addClass('invalid');
        inputLocation.removeClass('valid');
        let error_msg = '';
        switch (status) {
            case 'ERROR':
                error_msg = "There was a problem contacting the Google servers. Please try again.";
                break;
            case 'INVALID_REQUEST':
                error_msg = "Geocoding failed due to an error on my part. Please contact the website owner to fix it.";
                break;
            case 'OVER_QUERY_LIMIT':
                error_msg = "Geocoding failed because I am over my quota limits. Please try GPS instead.";
                break;
            case 'REQUEST_DENIED':
                error_msg = "Geocoding failed because this website is unauthorised to use geocoding. Please contact the website owner.";
                break;
            case 'UNKNOWN_ERROR':
                error_msg = "Geocoding failed due to an unknown server error. Seriously. Please try again.";
                break;
            case 'ZERO_RESULTS':
                error_msg = "There are no geocoding results. Please try another address.";
                break;
            default:
                console.log("Uncaught geocode error");
                break;
        }
        inputLocationStatus.attr('data-error', error_msg);
        toggleGeocodeStatus(true, true);
    }
}
function toggleGeocodeStatus(isDone, isError) {
    if (isError) {
        geocodeDone = true;
        geocodeStatus[0].src = 'assets/svg/error_black.svg';
        geocodeStatus.removeClass('working');
        geocodeStatus.addClass('error');
    }
    else if (isDone) {
        geocodeDone = true;
        geocodeStatus[0].src = 'assets/svg/check_black.svg';
        geocodeStatus.removeClass('working error');
    }
    else {
        geocodeDone = false;
        geocodeStatus[0].src = 'assets/svg/cog.svg';
        geocodeStatus.removeClass('error');
        geocodeStatus.addClass('working');
    }
}
let inputAmenitiesOpt = $("input[name=extras]");
let buttonSendQuery = $("#btn-submit-query");
buttonSendQuery.click((e) => {
    hasSubmittedOnce = true;
    submitQuery();
    leftSidebarToggle.click();
});
let hasSubmittedOnce = false;

let detailDiv = $('#result-details');
let detailClose = $('#result-details-close');
detailClose.click(closeDetailPanel);
let detailImageScroller = $('#result-details-images-container');
let ratingsOriginalDiv = $('#result-details-ratings-original');
let ratingsUserDiv = $('#result-details-ratings-user');
let ratingUserToggle = $('#result-details-ratings');
let btnRate = $('#btn-result-details-rating-rate');
btnRate.click((e) => {
    toggleUserRating(true);
});
let btnRateSubmit = $('#btn-result-details-rating-submit');
btnRateSubmit.click(submitUserRating);
let btnRateCancel = $('#btn-result-details-rating-cancel');
btnRateCancel.click(cancelUserRating);

let gMapAPILoaded = false;
let geocoder;
let gMap;
let gMapUserMarker;
let gMapCentered = true;
let gMapDiv = $('#google-map');
let gMapCenterButton;
let gMapCenterButtonIcon;

let resultsDiv = $('#results-area');
detectSwipe(resultsDiv[0],
    {
        'touch_points': 1,
        'direction': 'right',
        'callback': handleResultsAreaSwipe,
        'min_distance': 50
    }
);
let resultsSort = $('#results-sort');
let resultsSortI = M.FormSelect.init(resultsSort, { classes: "chip select-chip" });
resultsSort.change(handleSearchAndSort);
let resultsSearch = $('#results-search');
resultsSearch.change(handleSearchAndSort);
let resultsStatusDiv = $('#results-status');
let resultsStatusText = $('#results-status-text');
resultsStatusDiv.hide();
let resultsCommentsDiv = $('#result-details-comments-container');
let inputResultsComment = $('#input-result-comment');
let btnResultsComment = $('#btn-result-details-comments-comment');
btnResultsComment.click((e) => {
    if (inputResultsComment.val().length != 0) {
        let commentItem = document.createElement("div");
        commentItem.style.padding = "0 0.5rem";
        let commentUser = document.createElement("p");
        let commentText = document.createElement("p");
        commentItem.style.backgroundColor = "#efefef";
        $(commentUser).text("User A");
        $(commentText).text(inputResultsComment.val());
        commentItem.appendChild(commentUser);
        commentItem.appendChild(commentText);
        resultsCommentsDiv.append(commentItem);
        inputResultsComment.val("");
    }
});

let resultsArr = [];
let curResults = [];

let chipSelect = $('.select-chip');
let chipSelectInput = $('.select-chip>input');
let chipSelectPrompt = document.createElement("span");
chipSelectPrompt.innerHTML = "Sort&nbsp;By:";
let chipSelectLabel = document.createElement("label");
chipSelectLabel.style.height = "100%"; //!!
chipSelectInput.wrap(chipSelectLabel);
chipSelectInput.before(chipSelectPrompt);

const transitionEnd = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

const ratingsArr = ["volume", "comfort", "extras"];

let userCoords;
let userAddrCoords;
let geolocationWatchId;
let geolocationSeenFirstError = false;

function handleResultItemClick(evt) {
    updateDetailPanel(evt.currentTarget);
    let radioEl = $(evt.currentTarget).find("input[type='radio']")[0];
    // ! because hasn't processed click yet
    if (!radioEl.checked) panMapToResultItem(evt.currentTarget);
    switchLeftSidebar(evt.currentTarget);
    leftSidebarToggle.prop("checked", false);
    toggleLeftSidebar(false);
    //leftSidebarToggle.click();
}

function panMapToResultItem(resultItem) {
    let resultIdx = Array.prototype.indexOf.call(resultsDiv[0].children, resultItem);
    let result = curResults[resultIdx];
    if (result.mapMarkerPos) {
        gMap.panTo(result.mapMarkerPos);
    }
    toggleMapCentered(false);
}

function handleLeftSidebarSwipe(el, swipeEvent) {
    leftSidebarToggle.prop("checked", true);
    toggleLeftSidebar(true);
}

function handleResultsAreaSwipe(el, swipeEvent) {
    leftSidebarToggle.prop("checked", false);
    toggleLeftSidebar(false);
}

function calcTouchesCenter(touches) {
    let sumX = 0;
    let sumY = 0;
    let num = touches.length;
    for (let i = 0; i < num; ++i) {
        let touch = touches[i];
        sumX += touch.screenX;
        sumY += touch.screenY;
    }
    return {
        x: sumX / num,
        y: sumY / num
    };
}

const swipe_opts_template = {
    "touch_points": 1,
    "direction": "up, down, left, right, horizontal, vertical, any",
    "callback": (el, swipe) => {
        console.log("Detected swipe " + swipe.direction + " on " + JSON.stringify(el));
    },
    "min_distance": "px",
    "max_time": "ms"
};
let swipe_direction_counter = 0;
let SWIPE_DIRECTION_UP = 1 << (swipe_direction_counter++);
let SWIPE_DIRECTION_DOWN = 1 << (swipe_direction_counter++);
let SWIPE_DIRECTION_LEFT = 1 << (swipe_direction_counter++);
let SWIPE_DIRECTION_RIGHT = 1 << (swipe_direction_counter++);
function detectSwipe(el, options) {
    if (!options) throw "In detectSwipe, no options argument given!";
    let swipeEventName = options.touch_points + '-' + options.direction;
    if (!el.swipeEvents) el.swipeEvents = {};
    el.swipeEvents[swipeEventName] = options;
    el.addEventListener('touchstart', (touchEvent) => {
        el.swipeDetect = {
            begX: 0,
            begY: 0,
            endX: 0,
            endY: 0,
            difX: 0,
            difY: 0,
            begTime: 0,
            endTime: 0,
            difTime: 0,
            direction: '',
            directions: []
        };
        if (options.touch_points && touchEvent.touches.length != options.touch_points) return;
        let touchCenter = calcTouchesCenter(touchEvent.touches);
        el.swipeDetect.begX = touchCenter.x;
        el.swipeDetect.begY = touchCenter.y;
        el.swipeDetect.begTime = new Date().getTime();
        //touchEvent.preventDefault();
    });
    el.addEventListener('touchmove', (touchEvent) => {
        //touchEvent.preventDefault();
        /* let touchCenter = calcTouchesCenter(touchEvent.touches);
        el.swipeDetect.endX = touchCenter.x;
        el.swipeDetect.endY = touchCenter.y; */
    });
    el.addEventListener('touchend', (touchEvent) => {
        if (options.touch_points && touchEvent.changedTouches.length != options.touch_points) return;
        let touchCenter = calcTouchesCenter(touchEvent.changedTouches);
        el.swipeDetect.endX = touchCenter.x;
        el.swipeDetect.endY = touchCenter.y;
        el.swipeDetect.difX = el.swipeDetect.endX - el.swipeDetect.begX;
        el.swipeDetect.difY = el.swipeDetect.endY - el.swipeDetect.begY;
        let difX = el.swipeDetect.difX;
        let difY = el.swipeDetect.difY;
        el.swipeDetect.endTime = new Date().getTime();
        el.swipeDetect.difTime = el.swipeDetect.endTime - el.swipeDetect.begTime;
        let difTime = el.swipeDetect.difTime;
        if (options.max_time && difTime > options.max_time) return;
        let detectDirection = options.direction;
        let detectedDirection = '';
        /* console.log("Looking for " + detectDirection + " with min distance " + options.min_distance); */
        let min_distance = 0;
        if (options.min_distance) min_distance = options.min_distance;
        if (Math.abs(difX) >= min_distance) {
            if (difX < 0) {
                el.swipeDetect.directions.push('left');
                detectedDirection = 'left';
            }
            else {
                el.swipeDetect.directions.push('right');
                detectedDirection = 'right';
            }
            if (detectDirection == 'horizontal') el.swipeDetect.direction = 'horizontal';
            else if (detectDirection == detectedDirection) el.swipeDetect.direction = detectedDirection;
        }
        if (Math.abs(difY) >= min_distance) {
            if (difX < 0) {
                el.swipeDetect.directions.push('up');
                detectedDirection = 'up';
            }
            else {
                el.swipeDetect.directions.push('down');
                detectedDirection = 'down';
            }
            if (detectDirection == 'vertical') el.swipeDetect.direction = 'vertical';
            else if (detectDirection == detectedDirection) el.swipeDetect.direction = detectedDirection;
        }
        if (detectDirection == 'any' && detectedDirection != '') el.swipeDetect.direction = 'any';
        /* console.log("Detected direction: " + el.swipeDetect.direction);
        console.log("Touch end handled, calling function: " + (el.swipeDetect.direction != '')); */
        if (el.swipeDetect.direction == detectDirection) options.callback(el, el.swipeDetect);
        //touchEvent.preventDefault();
    });
}

function finishAnimateRatingsOriginal() {
    ratingsOriginalDiv.removeClass("animate-transform");
    if (ratingsOriginalDiv.hasClass("slide-hide")) ratingsOriginalDiv.addClass("hidden");
    ratingsUserDiv.removeClass("hidden");
    ratingsUserDiv.outerWidth();
    ratingsUserDiv.removeClass("slide-hide");
    $(this).off();
}

function finishAnimateRatingsUser() {
    ratingsUserDiv.removeClass("animate-transform");
    if (ratingsUserDiv.hasClass("slide-hide")) ratingsUserDiv.addClass("hidden");
    ratingsOriginalDiv.removeClass("hidden");
    ratingsOriginalDiv.outerWidth();
    ratingsOriginalDiv.removeClass("slide-hide");
    $(this).off();
}

function toggleUserRating(e) {
    ratingsOriginalDiv.addClass("animate-transform");
    ratingsUserDiv.addClass("animate-transform");
    if (e == true || (e.target && e.target.checked)) {
        ratingsOriginalDiv.addClass("slide-hide");
        ratingUserToggle[0].checked = true;
        ratingsOriginalDiv.one(transitionEnd, finishAnimateRatingsOriginal);
        let userId = 0;
        let selectedRadioEl = $('#results-area').find("input[type='radio']:checked");
        let resultItem = selectedRadioEl.parent();
        let resultIdx = Array.prototype.indexOf.call(resultsDiv[0].children, resultItem[0]);
        let result = curResults[resultIdx];
        let ratings = result.ratings.community[userId];
        if (ratings != undefined) {
            for (let i = 0; i < ratingsArr.length; ++i) {
                let ratingName = ratingsArr[i];
                let rating = ratings[ratingName];
                let ratingItemRadio = $("#result-details-ratings-user-" + ratingName + "-" + rating);
                ratingItemRadio[0].checked = true;
            }
        }
    }
    else {
        ratingsUserDiv.addClass("slide-hide");
        ratingUserToggle[0].checked = false;
        ratingsUserDiv.one(transitionEnd, finishAnimateRatingsUser);
        ratingsUserDiv.find("input[type='radio']:checked").each((idx, el) => {
            el.checked = false;
        });
    }
}

function cancelUserRating(e) {
    toggleUserRating(false);
}

function submitUserRating(e) {
    let selectedRadioEl = $('#results-area').find("input[type='radio']:checked");
    if (selectedRadioEl.length != 0) {
        let resultItem = selectedRadioEl.parent();
        let resultIdx = Array.prototype.indexOf.call(resultsDiv[0].children, resultItem[0]);
        let result = curResults[resultIdx];
        console.log(curResults[resultIdx]);
        let userId = 0;
        let userRatings = {};
        for (let i = 0; i < ratingsArr.length; ++i) {
            let ratingName = ratingsArr[i];
            let selectedRadioStar = ratingsUserDiv.find("input[type='radio'][name='result-details-ratings-user-" + ratingName + "']:checked");
            if (selectedRadioStar.length != 0) {
                userRatings[ratingName] = selectedRadioStar.val();
            }
            else {
                userRatings[ratingName] = 1;
            }
        }
        result.ratings.community[userId] = userRatings;
        console.log(curResults[resultIdx]);
        console.log(resultsArr);
        updateDisplayedRating(result);
    }
    toggleUserRating(false);
}

function updateDisplayedRating(result) {
    let userId = 0;
    let ratings = result.ratings.community[userId];
    if (ratings == undefined) ratings = result.ratings.original;
    for (let i = 0; i < ratingsArr.length; ++i) {
        let ratingName = ratingsArr[i];
        let ratingItemStars = $("#result-details-ratings-original-" + ratingName + ">span");
        let n;
        for (n = 0; n < ratings[ratingName]; ++n) {
            ratingItemStars[n].classList.add("checked");
        }
        for (; n < ratingsStarsMax; ++n) {
            ratingItemStars[n].classList.remove("checked");
        }
    }
}

function updateDetailPanel(resultItem) {
    let resultIdx = Array.prototype.indexOf.call(resultsDiv[0].children, resultItem);
    let result = curResults[resultIdx];
    updateDisplayedImages(result);
    $("#result-details-info-name").text(result.name);
    $("#result-details-info-description").text(result.description);
    updateDisplayedRating(result);
}

function updateDisplayedImages(result) {
    detailImageScroller.empty();
    let imagesArr = result.images;
    if (imagesArr && imagesArr.length != 0) {
        imagesArr.map((imageSrc) => {
            let imageItemLi = document.createElement("li");
            imageItemLi.classList.add("result-details-image-li");
            let imageItem = document.createElement("img");
            imageItem.classList.add("result-details-image");
            imageItem.src = imageSrc;
            imageItemLi.appendChild(imageItem);
            detailImageScroller.append(imageItemLi);
        });
    }
}

function switchLeftSidebar(resultItem) {
    let radioEl = resultItem.getElementsByTagName("input")[0];
    radioEl.checked = !radioEl.checked;
    let leftAreaWidth = $('#left-area').width();
    leftArea.css("--slide-panel-width", leftAreaWidth);
    toggleInputsArea(radioEl.checked);
}

function finishAnimateInputsArea() {
    inputsDiv.removeClass("animate-transform");
    if (inputsDiv.hasClass("slide-hide")) inputsDiv.addClass("hidden");
}

function finishAnimateDetailArea() {
    detailDiv.removeClass("animate-transform");
    if (detailDiv.hasClass("slide-hide")) detailDiv.addClass("hidden");
}

function toggleInputsArea(checked) {
    if (checked === undefined) {
        let selectedRadioEl = $('#results-area').find("input[type='radio']:checked");
        if (selectedRadioEl.length != 0) {
            let radioEl = selectedRadioEl[0];
            radioEl.checked = !radioEl.checked;
            checked = radioEl.checked;
        }
    }
    inputsDiv.addClass("animate-transform");
    detailDiv.addClass("animate-transform");
    if (checked) {
        inputsDiv.addClass("slide-hide");
        detailDiv.removeClass("hidden");
        detailDiv.outerWidth();
        detailDiv.removeClass("slide-hide");
    }
    else {
        inputsDiv.removeClass("hidden");
        inputsDiv.outerWidth();
        inputsDiv.removeClass("slide-hide");
        detailDiv.addClass("slide-hide");
    }
    inputsDiv.one(transitionEnd, finishAnimateInputsArea);
    detailDiv.one(transitionEnd, finishAnimateDetailArea);
    if (ratingUserToggle[0].checked) toggleUserRating(false);
}

function closeDetailPanel(evt) {
    if (ratingUserToggle[0].checked) toggleUserRating(false);
    toggleInputsArea();
}

function finishAnimateLeftSidebar(checked) {
    leftArea.removeClass("animate-transform");
}

function toggleLeftSidebar(e) {
    leftArea.addClass("animate-transform");
    if (e == true || (e.target && e.target.checked)) {
        leftArea.addClass("slide-hide");
    }
    else {
        leftArea.removeClass("slide-hide");
    }
    leftArea.one(transitionEnd, finishAnimateLeftSidebar);
}

function handleSearchAndSort() {
    searchSuggestions(curResults);
}
function submitQuery() {
    if (!geocodeDone) {
        alert("Please wait until geocoding is complete.");
        return false;
    }

    let selectedVolumeOpt = inputVolumeOpt.filter(":checked");
    let userVolumeMax = selectedVolumeOpt.val();
    let userVolumeMin = 1;
    if (!userVolumeMax || userVolumeMax > 4) userVolumeMax = "4";
    else if (userVolumeMax < 1) userVolumeMax = "1";
    console.log("User max volume: " + userVolumeMax);

    let selectedGroupOption = inputGroupOpt.filter(":checked");
    let userCapacity = "1";
    if (selectedGroupOption.val() === "myself") userCapacity = "1";
    else {
        userCapacity = inputGroupSize.val();
        if (userCapacity < 1) userCapacity = 1;
    }
    console.log("User capacity: " + userCapacity);

    let userDistance = inputDistance.val();
    if (userDistance < 1) userDistance = 1;
    console.log("User distance: " + userDistance);

    let userLocation;
    let selectedLocationOption = inputLocationOpt.filter(":checked");
    if (selectedLocationOption.val() == "address") {
        userLocation = userAddrCoords;
    }
    else if (selectedLocationOption.val() == "gps") {
        userLocation = getCoords();
    }
    else {
        if (inputLocation.val().length > 0) {
            userLocation = userAddrCoords;
        }
        else if (userCoords != undefined) {
            userLocation = getCoords();
        }
        else {
            inputLocation.addClass('invalid');
            inputLocationStatus.attr('data-error', 'Please select one.');
            return;
        }
    }
    console.log("User search location: " + JSON.stringify(userLocation));

    let userAmenities = [];
    let selectedAmenities = inputAmenitiesOpt.filter(":checked");
    selectedAmenities.each((idx, amenityEl) => userAmenities.push(amenityEl.value));
    console.log("User amenities: " + JSON.stringify(userAmenities));

    let query = {
        "coords": userLocation,
        "distance": userDistance,
        "capacity": userCapacity,
        "volume": {
            "max": userVolumeMax,
            "min": userVolumeMin
        },
        "amenities": userAmenities
    };
    console.log("User query: " + JSON.stringify(query));
    updateSuggestions(query);
}
function getCoords() {
    return {
        "latitude": userCoords.latitude,
        "longitude": userCoords.longitude
    };
}
function saveCoords(position) {
    buttonLocationGPS.removeAttr("disabled");
    let selectedLocationOption = inputLocationOpt.filter(":checked");
    userCoords = position.coords;
    if (selectedLocationOption.length == 0) {
        if (inputLocation.val().length > 0) {
            inputLocationGPS.click();
        }
        else buttonLocationGPS.click();
    }
    let positionStatus = "Position: " + userCoords.latitude + ", " + userCoords.longitude
        + "\nAccuracy: " + userCoords.accuracy + "m";
    // console.log(positionStatus);
    if (!hasSubmittedOnce) submitDefaultQuery(userCoords);
    if (gMapAPILoaded) {
        let gMapPos = new google.maps.LatLng(userCoords.latitude, userCoords.longitude);
        if (!gMapUserMarker) {
            addMapCenterOnUserButton();
            loadGMapsLibraries();
            if (gMapCentered) {
                gMap.setCenter(gMapPos);
                toggleMapCentered(true);
            }
        }
    }
}
function handleGeolocationError(error) {
    if (geolocationSeenFirstError === false) {
        if (error.code === error.PERMISSION_DENIED) {
            let response = confirm("Uh oh, I need permission to get your location.\nOtherwise, the option will be unavailable. Should I keep trying?");
            if (response) watchGeolocation();
            else {
                buttonLocationGPSStatus.removeClass('working');
                buttonLocationGPSStatus[0].src = 'assets/svg/cross.svg';
            }
        }
        else {
            let errorMessage = "";
            switch (error.code) {
                case error.POSITION_UNAVAILABLE:
                    errorMessage = "Uh oh, I couldn't get your location.";
                    break;
                case error.TIMEOUT:
                    errorMessage = "Uh oh, geolocation timed out while getting location.";
                    break;
            }
            errorMessage += "\nI will keep trying but the option will be unavailable until I am successful.";
            alert(errorMessage);
        }
        geolocationSeenFirstError = true;
    }
    console.log("Error " + error.code + ": " + error.message);
}
function watchGeolocation() {
    const geo_options = {
        enableHighAccuracy: true,
        maximumAge: 1000 * 15,
        timeout: 1000 * 60
    };
    buttonLocationGPSStatus.addClass("working");
    geolocationWatchId = navigator.geolocation.watchPosition(saveCoords, handleGeolocationError, geo_options);
}
function initGeolocation() {
    if ("geolocation" in navigator) {
        //buttonLocationGPSStatus.addClass("working");
        // geolocation is available
        watchGeolocation();
    } else {
        // geolocation NOT available
        alert("Geolocation not available. I won't be able to get your coordinates.");
        console.log("Geolocation not available");
        buttonLocationGPSStatus[0].src = 'assets/svg/cross.svg';
    }
}
function toggleMapCentered(willCenter) {
    if (willCenter) {
        gMapCentered = true;
        gMapCenterButtonIcon.removeClass('inactive');
        if (gMapUserMarker) gMap.panTo(gMapUserMarker.getPosition());
    }
    else {
        gMapCentered = false;
        gMapCenterButtonIcon.addClass('inactive');
    }
}
function addMapCenterOnUserButton() {
    let controlDiv = document.createElement('div');
    gMapCenterButton = $(controlDiv);
    controlDiv.index = 1;

    let iconDiv = document.createElement('div');
    iconDiv.classList.add('google-map-centeruser-icon-div');
    controlDiv.appendChild(iconDiv);

    let iconImg = document.createElement('img');
    iconImg.classList.add('google-map-centeruser-icon', 'inactive');
    iconImg.src = 'assets/svg/my_location.svg';
    iconDiv.appendChild(iconImg);
    gMapCenterButtonIcon = $(iconImg);
    gMap.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);

    google.maps.event.addListener(gMap, 'dragstart', (e) => {
        toggleMapCentered(false);
    });

    gMapCenterButton.click((e) => {
        toggleMapCentered(true);
    });
}
function initUserGeomarker() {
    gMapUserMarker = new GeolocationMarker(gMap);
    gMapUserMarker.setCircleOptions({ fillColor: "#b3e5fc" });
}
function initMap() {
    let gMapPos;
    if (userCoords) gMapPos = new google.maps.LatLng(userCoords.latitude, userCoords.longitude);
    else gMapPos = new google.maps.LatLng(0, 0);
    gMap = new google.maps.Map(gMapDiv[0], {
        center: gMapPos,
        zoom: 18
    });
    if (curResults.length > 0) updateResultItemMarkers();
}
function initGeocoder() {
    geocoder = new google.maps.Geocoder();
    if (document.getElementById('opt-location-address').checked && inputLocation.val().length > 0) getGeocodeCoords();
}
function GMapLibrary(src, path, callback) {
    this.src = path + src;
    this.callback = callback;
}
function loadGMapsLibraries() {
    let jsFilePath = 'assets/js/';
    let GMapsLibraries = [
        new GMapLibrary('geolocation-marker.js', jsFilePath, initUserGeomarker)
    ];
    GMapsLibraries.map((GMapLib) => {
        let script = document.createElement('script');
        script.src = GMapLib.src;
        script.async = false;
        script.onload = GMapLib.callback;
        document.body.appendChild(script);
    });
}
function updateResultItemMarkers() {
    curResults.forEach((resultItem) => {
        if (!resultItem.mapMarker) {
            console.log("Updated result with marker " + resultItem.name);
            resultItemAddMapMarker(resultItem);
        }
    });
}
function onGoogleMapsAPILoaded() {
    gMapAPILoaded = true;
    initMap();
    initGeocoder();
    initGeolocation();
}

function submitDefaultQuery(coords) {
    if (!coords) coords = { latitude: "34.6799357", longitude: "-82.8396752" };
    if (gMapAPILoaded && gMapCentered) gMap.setCenter(new google.maps.LatLng(coords.latitude, coords.longitude));
    const sampleQuery = {
        "coords": coords,
        "distance": "50",
        "capacity": "1",
        "volume": {
            "max": "4",
            "min": "1"
        },
        "amenities": []
    };
    updateSuggestions(sampleQuery);
}

$(document).ready((e) => { submitDefaultQuery(); });