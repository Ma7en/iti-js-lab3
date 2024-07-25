function funOne(fullName) {
     var arrayE = [];
    var spl = fullName.split(" ");
     for (var i = 0; i < spl.length; i++) {
        var chr = spl[i][0].toUpperCase() + spl[i].slice(1);
         arrayE.push(chr);
    }
    return arrayE.join(" ");
}
