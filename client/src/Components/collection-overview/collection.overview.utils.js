function getCombinations(objects, sum) {
    var array=objects.map(elem=>elem.item.width)
    function add(a, b) { return a + b; }

    function fork(i, t) {
        var r = (result[0] || []).reduce(add, 0),
            s = t.reduce(add, 0);
        if (i === array.length || s > sum) {
            if (s <= sum && t.length && r <= s) {
                if (r < s) {
                    result = [];
                }
                result.push(t);
            }
            return;
        }
        fork(i + 1, t.concat([array[i]]));
        fork(i + 1, t);
    }

    var result = [];
    var i=0
    var j=0
    fork(0, []);
   for(i=0;i<result[j].length;i++){ 
       var carIndex = array.indexOf(result[j][i]);
       array.splice(carIndex, 1);
}
    return {result,array};
}