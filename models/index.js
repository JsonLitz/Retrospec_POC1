var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/Retrospec_POC1");

module.exports.Location = require("./entry.js");
// module.exports.User = require("./user.js");
