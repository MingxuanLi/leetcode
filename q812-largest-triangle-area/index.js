/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    var length = points.length;
    var maxArea = 0;
    for(var i = 0; i < length; i++){
        for(var j = 0; j < length; j++){
            for(var k = 0; k < length; k++){
                maxArea = Math.max(maxArea, getArea(points[i], points[j], points[k]))
            }
        }
    }
    return maxArea;
};

var getArea = function (pointA, pointB, pointC) {
    return 0.5 * Math.abs(pointA[0]*pointB[1] + pointB[0]*pointC[1] + pointC[0]*pointA[1] - pointB[0]*pointA[1] - pointC[0]*pointB[1] - pointA[0]*pointC[1]);
}
