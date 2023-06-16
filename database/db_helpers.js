const maquinaModel = require("./db_maquinas");

exports.pegarMaquinas = async () => {
    return await maquinaModel.find().limit(10);
}

exports.adicionarMaquinas = async () => {

    const novaMaquina = new maquinaModel();

    maquinaModel.UID = req.param.uid;
    maquinaModel.Product_ID = req.param.prodID
    maquinaModel.Type = req.param.type;
    maquinaModel.Air_temperature_[K] = req.param.at;
    maquinaModel.Process_temperature_[K] = req.param.pt;
    maquinaModel.Rotational_speed_[rpm] = req.param.rpm;
    maquinaModel.Torque_[Nm] = req.param.tor;
    maquinaModel.Tool_wear_[min] = req.param.tw;
    maquinaModel.Target = req.param.tg;
    maquinaModel.Failure = req.param.failure;

    return await maquinaModel.insert(novaMaquina);
}

exports.atualizarMaquinas = async () => {
    return await maquinaModel.findByIdAndUpdate(req.param.id, {Target: req.param.tg});
}

exports.removerMaquina = async () => {
    return await maquinaModel.deleteOne({UID: req.param.uid});
}

exports.removerMaquinas = async () => {
    return await maquinaModel.deleteMany({Failure: req.param.failure});
}
