var findMinArrowShots = function(points) {
  if (points.length === 0) return 0;
  points.sort((a, b) => a[1] - b[1]);
  let cnt = 1;
  let resArr = [points[0]];
  console.log('resArr init',resArr);
  let curr, last;
  for (let i = 1; i < points.length; i++) {
    curr = points[i];
    console.log('curr',curr);
    last = resArr[resArr.length - 1];
    console.log('last',last);

    if (curr[0] > last[1]) {
      resArr.push(curr);
      cnt++;
    }
  }
  return cnt;
};


findMinArrowShots([[1,2],[3,4],[5,6],[7,8]])
