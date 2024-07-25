// 1 - open small window
var smallWindow;
var winOpen = function () {
    smallWindow = open("../point-1-a.html", "", "width=600, height=600");
};

// 1 - scroll to small window the end
var winScroll = function () {
    smallWindow.scrollTo(20, smallWindow.document.body.scrollHeight);
};

// 1 - a
var winClose = function () {
    if (smallWindow) {
        smallWindow.close();
    }
};

// 1 - b
var winTitleWrite = function () {
    if (smallWindow) {
        smallWindow.document.write("<title>Small Window</title>");
    }
};
// the problem is that it deletes the entire content

// 1 - c
var winCreate = function () {
    if (smallWindow) {
        let div = smallWindow.document.createElement("div");
        div.textContent = "Mazen Saad";
        smallWindow.document.body.appendChild(div);
    }
};

// ========================================
// 1 - طريقة تانيه

var smallWindow2;
var winOpen2 = function () {
    smallWindow2 = open("./lab-4-1-a.html", "", "width=600, height=600");
    smallWindow2.onload = function () {
        smallWindow2.scrollTo(0, smallWindow2.document.body.scrollHeight);
    };
    setTimeout(function () {
        smallWindow2.close();
    }, 3000);
};
