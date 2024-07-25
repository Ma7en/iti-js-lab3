function updateTitleWithDateTime() {
    var now = new Date();

    var dateTimeString = now.toLocaleString();

    document.title = dateTimeString;
}

updateTitleWithDateTime();

setInterval(updateTitleWithDateTime, 1000);
