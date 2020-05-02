const express = require("express");

const app = express();

app.get("/mean", function (req, res) {
  let nums = req.query.nums.split(",");
  try {
  return res.send(res.json({ operation: "mean", value: mean(nums) }));
  } catch {
    return res.send(res.json({operation: "mean", value: "invalid" }))
  }
});

app.get("/median", function (req, res) {
  let nums = req.query.nums.split(",");
  try {
  return res.send(res.json({ operation: "median", value: median(nums) }));
  } catch {
    return res.send(res.json({operation: "median", value: "invalid" }))
  }
});

app.listen(3000, function () {
  console.log("App on port 3000");
});

let mean = nums => {
  let sum = 0;
  nums.forEach(num => {
    if (!isNaN(+num)) {
      console.log("ok")
      sum += +num;
    } else {
      throw(`${num} is not a number`);
    }
  });
  return sum / nums.length;
};

let median = nums => {
  let sortedNums = nums.sort(function(a,b){return b-a});
  return sortedNums[Math.floor(sortedNums.length/2)];
}