"use strict";

//display string in developer tools browser or console
console.log("Loading activities.js");


// start define constants in activities.html element id target(Main section)

//found on line 74 div id main tag activites details card 
const activityDetailRow = document.getElementById("activityDetailRow");

//checkout row line 97 div id 
const paymentDetailRow = document.getElementById("paymentDetailRow");

//found  in main section in html line 61 activity div
const activitySelectionRow = document.getElementById("activitySelectionRow");


//found on line 49 select id
const categorySelect = document.getElementById("categorySelect");

//line 65 activity selection select id
const activitySelect = document.getElementById("activitySelect");

// line 78 activity name card h5 id 
const activityName = document.getElementById("activityName");

//line 80 activity id list span id
const activityId = document.getElementById("activityId");

//line 81 activity description list span id
const activityDesc = document.getElementById("activityDesc");

//line 84 activity location list id
const activityLocation = document.getElementById("activityLocation");

//line 85 activity price list span id
const activityPrice = document.getElementById("activityPrice");

//end define constants in activites.html element id target (main section)


//load activity and category functions and events when browser finish loading
window.onload = function () {
        
    categorySelect.onchange = onCategorySelectChange; //on change event when use select category a change happen
    activitySelect.onchange = onActivitySelectChange; // when user select activity a change happen

    hideActivitySelect(); //execute hide Activity 
    hideActivityDetail(); //execute hide activity details 

};



//function for on change event , when category is selected 
function onCategorySelectChange() {
    //define current category
    let currentCategory = categorySelect.value;

    //if else statement if nothing selected hide activity selection
    if (currentCategory == "") {
        hideActivitySelect(); //execute hide activity selection
    }
    else { //if first statement false show category selected 
        console.log(`The ${currentCategory} value has been selected for Category.`)

        populateActivitySelect(activities, currentCategory); //show category and activity selections

        showActivitySelect(); //execute show activity

    }

    hideActivityDetail(); //execute hide activity details if no activity selected

}


//for of loops 2-37/51

//function to get activites in category 
//using for ..of loop to cycle through all activites in category
function getActivitiesInCategory(fullListOfActivities, category) {//loop through activites in categories
    let result = []; //define result array
    
        //for ...of loop
    for (let thisActivity of fullListOfActivities) { //loop through array of activties
        if (thisActivity.category == category) { //condition activites in category array is equal to category name
            result.push(thisActivity)// result statement matching activities in categories
        }
    }

    return result; //match activty
}



function populateActivitySelect(fullListOfActivities, selectedCategory) {

    activitySelect.innerHTML = "";

    let initialOption = new Option("Please select your activity!", "");
    activitySelect.appendChild(initialOption);

    let activitiesIsCategory = getActivitiesInCategory(fullListOfActivities, selectedCategory);

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

function getActivityById(id) {
    for (let i = 0; i < activities.length; i++) {
        let thisActivity = activities[i];
        if (thisActivity.id == id) {
            return thisActivity;
        }
    }
}


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



/*"use strict";
console.log("Loading activities.js");
// ESAMPLE ACTIVITY:
// category: "Adventures",
// id: "A101",
// name: "Valley Hot Air Balloons",
// description: "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
// location: "121 S. Main Street",
// price: 265.00
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
        //populate Activity List with only activities that belong to this Category.
        populateActivitySelect(activities, currentCategory);
        //Display the Activity Selection area so that an activity can be selected.
        showActivitySelect();
    }
    hideActivityDetail();
}
//ASSIGNMENT TODO:
// Re-write the below function so that it uses a new
// function named getActivitiesInCategory (defined and created below)
// to get an array with only the activities that need to be listed.
// then loop through those activities and list them.
function populateActivitySelect(fullListOfActivities, selectedCategory) {
    // This function should populate the second dropdown with only the
    // activities that exist in the selected category.
    //activitySelect.options.length = 0;
    activitySelect.innerHTML = "";
    let initialOption = new Option("Please select your activity!", "");
    activitySelect.appendChild(initialOption);
    for (let i = 0; i < fullListOfActivities.length; i++) {
        let thisActivity = fullListOfActivities[i];
        if (thisActivity.category == selectedCategory) {
            let theOption = new Option(thisActivity.name, thisActivity.id);
            activitySelect.appendChild(theOption);
            console.log("The new option has been added to the dropdown")
        }
    }
}
function getActivitiesInCategory(fullListOfActivities, category) {
    let result = []
    // todo to the work here to build out result with only the activities that are of the correct category:
    return result;
}
function onActivitySelectChange() {
    // populate all of the fields in the activity detail area with values that pertain
    // to the selected activity
    // get the id of the selected activity:
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
        // Display the activity detail row
        showActivityDetail();
        if (selectedActivity.price > 0) {
            showCheckout();
        }
        else {
            hideCheckout();
        }
    }
}
function getActivityById(id) {
    for (let i = 0; i < activities.length; i++) {
        let thisActivity = activities[i];
        if (thisActivity.id == id) {
            return thisActivity;
        }
    }
}
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
}*/










/*"use strict";

console.log("Loading activities.js");

// ESAMPLE ACTIVITY:
// category: "Adventures", 
// id: "A101", 
// name: "Valley Hot Air Balloons", 
// description: "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.", 
// location: "121 S. Main Street",
// price: 265.00 

const activityDetailRow = document.getElementById("activityDetailRow");
const paymentDetailRow = document.getElementById("paymentDetailRow");
const activitySelectionRow = document.getElementById("activitySelectionRow");

const categorySelect = document.getElementById("categorySelect");
const activitySelect = document.getElementById("activitySelect");

window.onload = function () {

    categorySelect.onchange = onCategorySelectChange;
    activitySelect.onchange = onActivitySelectChange;

    hideActivitySelect();
    hideActivityDetail();
    hideCheckout();
};


function onCategorySelectChange(){
    let currentCategory = categorySelect.value;
    console.log(`The ${currentCategory} value has been selected for Category.`)

    //populate Activity List with only activities that belong to this Category.
    populateActivitySelect(currentCategory);

    //Display the Activity Selection area so that an activity can be selected.
    showActivitySelect();

}


function populateActivitySelect(selectedCategory){
    // This function should populate the second dropdown with only the 
    // activities that exist in the selected category.

    // todo...
}

function onActivitySelectChange(){
    // populate all of the fields in the activity detail area with values that pertain
    // to the selected activity

    // todo ...

    // Display the activity detail row
    showActivityDetail();

    // IF (the cost of this activity is > 0 )
    // THEN showcheckout()
    // otherwise hideCheckout()
}


function hideActivityDetail() {
    activityDetailRow.style.display = 'none';
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
}*/