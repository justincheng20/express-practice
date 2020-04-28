const express = require("express");

const app = express();

app.get("/mean", function(req, res) {
  let nums = req.query.nums.split(",");
  let sum = 0;
  nums.forEach(num => sum += +num);
  console.log(sum);
  return res.send(res.json({operation: "mean", value: sum/nums.length}));
});

app.listen(3000, function() {
  console.log("App on port 3000");
});