function shapeArea(n) {
    var top = Math.pow(n-1,2); 
    var middle = 2*n-1;
    var bottom = Math.pow(n-1,2);
    var total = top + middle + bottom;
    return total;
}