// ==========================
// 1
// var nameA;
// var age;

// function showInfo() {
//     // location
//     console.log("1)", window.location);
//     // location search
//     console.log("2)", window.location.search);

//     // url
//     console.log("4) new url", new URLSearchParams());
//     var urlParams = new URLSearchParams(window.location.search);
//     console.log("urlParams:", urlParams);

//     //
//     if (urlParams) {
//         nameA = urlParams.get("username");
//         age = urlParams.get("age");
//     }

//     // show inof in console
//     console.log("Name:", nameA);
//     console.log("Age:", age);
// }

// ==========================
// 2
var nameA;
var age;

function showInfo() {
    // split
    var locSearch = window.location.search.slice(1).split("&");

    // loop
    for (var i = 0; i < locSearch.length; i++) {
        var spl = locSearch[i].split("=");
        if (spl[0] === "username") {
            nameA = spl[1];
        } else if (spl[0] === "age") {
            age = spl[1];
        }
    }

    // show inof in console
    console.log("Name:", nameA);
    console.log("Age:", age);
}
