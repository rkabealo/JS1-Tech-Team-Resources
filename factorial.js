// Export the method "factorial"
exports.factorial = function (n) {
    var result = 1; 
    for(var i = 1; i <= n; i++){ result *= i; }
    return result;
};