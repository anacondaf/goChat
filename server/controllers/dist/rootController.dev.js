"use strict";

var USER_DATA = {
  name: "19521658@gm.uit.edu.vn",
  password: "123"
};

module.exports.authUser = function (req, res) {
  var _req$body$data = req.body.data,
      name = _req$body$data.name,
      password = _req$body$data.password;

  if (name === USER_DATA["name"] && password === USER_DATA["password"]) {
    res.status(200).json({
      message: "ok"
    });
  } else {
    res.json({
      message: "error"
    });
  }
};