function funTwo(sentence) {
    var spl = sentence.split(" ");
    var maxV = "";
    for (var i = 0; i < spl.length; i++) {
        var c = spl[i];
        if (c.length > maxV.length) {
            maxV = c;
        }
    }
    return maxV;
}
