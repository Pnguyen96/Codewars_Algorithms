function adjacentElementsProduct(inputArray) {

    var max = -1000;
    for(var i = 0; i<= inputArray.length-1; i++)
        {
            var product = inputArray[i]*inputArray[i+1]
            if(product > max)
                {
                    max = product;
                }
        }
    return max;
}