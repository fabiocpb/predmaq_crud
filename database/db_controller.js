const maquinaHelper = require("./db_helpers");

exports.pegarDez = async (req, res) => {
    try{
        const maquinas = await maquinaHelper.pegarMaquinas();
        res.json({data: maquinas, status: "Sucesso!"});
    }catch(err){
        res.status(500).json({ error: err.message});
    }
}

exports.novaMaquina = async (req, res) => {
    try{
        const maquinas = await maquinaHelper.adicionarMaquinas();
        res.json({data: maquinas, status: "Sucesso!"});
    }catch(err){
        res.status(500).json({ error: err.message});
    }
}

exports.atualizarMaquina = async (req, res) => {
    try{
        const maquinas = await maquinaHelper.atualizarMaquinas();
        res.json({data: maquinas, status: "Sucesso!"});
    }catch(err){
        res.status(500).json({ error: err.message});
    }
}

exports.removerMaquina = async (req, res) => {
    try{
        const maquinas = await maquinaHelper.removerMaquina();
        res.json({data: maquinas, status: "Sucesso!"});
    }catch(err){
        res.status(500).json({ error: err.message});
    }
}

exports.removerMaquinas = async (req, res) => {
    try{
        const maquinas = await maquinaHelper.removerMaquinas();
        res.json({data: maquinas, status: "Sucesso!"});
    }catch(err){
        res.status(500).json({ error: err.message});
    }
}