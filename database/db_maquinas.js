const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const maquina = new Schema([]);

module.exports = mongoose.model("maquina", maquina, "maquinas_nodejs");