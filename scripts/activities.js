
"use strict";

console.log("Loading activities.js");

const activityDetailRow = document.getElementById("activityDetailRow");
const paymentDetailRow = document.getElementById("paymentDetailRow");
const activitySelectionRow = document.getElementById("activitySelectionRow");

const categorySelect = document.getElementById("categorySelect");
const activitySelect = document.getElementById("activitySelect");

const activityName = document.getElementById("activityName");
const activityId = document.getElementById("activityId");
const activityDesc = document.getElementById("activityDesc");
const activityLocation = document.getElementById("activityLocation");
const activityPrice = document.getElementById("activityPrice");

window.onload = function () {

    categorySelect.onchange = onCategorySelectChange;
    activitySelect.onchange = onActivitySelectChange;

    hideActivitySelect();
    hideActivityDetail();

};

function onCategorySelectChange() {
    let currentCategory = categorySelect.value;

    if (currentCategory == "") {
        hideActivitySelect();
    }
    else {
        console.log(`The ${currentCategory} value has been selected for Category.`)

        populateActivitySelect(activities, currentCategory);

        showActivitySelect();

    }

    hideActivityDetail();

}
//for ..of loop Deshonda 
// array value is going to be category
function activitesInCategory(){
    if (arrayValue == activites){
        return true;
        {
        else {
            return false;
        }
        
    }
}


/*
function getActivitiesInCategory(activities) {
    let result = [];

    for (let thisActivity of fullListOfActivities) {
        if (thisActivity.category == category) {
            result.push(thisActivity)
        }
    }

    return result;
}*/





function populateActivitySelect(fullListOfActivities, selectedCategory) {

    activitySelect.innerHTML = "";

    let initialOption = new Option("Please select your activity!", "");
    activitySelect.appendChild(initialOption);

    let activitiesIsCategory = getActivitiesInCategory(fullListOfActivities, selectedCategory);
    // for.. of loop Kevin 
    for (let thisActivity of activitiesIsCategory) {
        let theOption = new Option(thisActivity.name, thisActivity.id);
        activitySelect.appendChild(theOption);
        console.log("The new option has been added to the dropdown")
    }

}


function onActivitySelectChange() {

    let selectedActivityId = activitySelect.value;

    if (selectedActivityId == "") {
        hideActivityDetail();

    }
    else {

        let selectedActivity = getActivityById(selectedActivityId);

        activityName.innerHTML = selectedActivity.name;
        activityId.innerHTML = selectedActivity.id;
        activityDesc.innerHTML = selectedActivity.description;
        activityLocation.innerHTML = selectedActivity.location;
        activityPrice.innerHTML = selectedActivity.price;

        showActivityDetail();

        if (selectedActivity.price > 0) {
            showCheckout();
        }
        else {
            hideCheckout();
        }

    }

}
// for if jamys will work on it 
function getActivityById(id){
    if (id)
}

/* {
    for (let i = 0; i < activities.length; i++) {
        let thisActivity = activities[i];
        if (thisActivity.id == id) {
            return thisActivity;
        }
    }
}
 */




/*function getActivityById(id) {
    for (let i = 0; i < activities.length; i++) {
        let thisActivity = activities[i];
        if (thisActivity.id == id) {
            return thisActivity;
        }
    }
}*/
function getActivity(id, activityId){
    if (activities.id == id ){
        return true;
    }
  else {
        return false;
    }
}

let result = [];
let pleaseId = result.filter(getActivity)

if()
// we want it to return activity id :(
if(getActivity) // im not sure what to do here tbh i just had a major brain fart



function hideActivityDetail() {
    activityDetailRow.style.display = 'none';
    hideCheckout();
}

function showActivityDetail() {
    activityDetailRow.style.display = 'block';
}


function hideCheckout() {
    paymentDetailRow.style.display = 'none';
}

function showCheckout() {
    paymentDetailRow.style.display = 'block';
}

function hideActivitySelect() {
    activitySelectionRow.style.display = "none";
}

function showActivitySelect() {
    activitySelectionRow.style.display = "block";
}