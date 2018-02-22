module.exports = function getZerosCount(number) {
    var count = 0;
    while (number>=5){
        number = Math.trunc(number/5);
        count+=number;
    }
    return count;
};
