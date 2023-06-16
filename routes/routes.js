var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
const { pegarDez, novaMaquina, atualizarMaquina, removerMaquina, removerMaquinas} = require("../database/db_controller");

//Carregar 10 máquinas como exemplo.

router.route("/").get(pegarDez);

//Adicionar nova máquina por parâmetros de rota.

router.route("/adicionar/:uid/:prodID/:type/:at/:pt/:rpm/:tor/:tw/:tg/:failure").post(novaMaquina);

//Atualizar o target pelo id da máquina

router.route("/atualizar/:id/:tg").get(atualizarMaquina);

//Remover pelo UID da máquina

router.route("/deletar/:uid").get(removerMaquina);

//Remover várias por tipo de falha

router.route("/deletar_varias/:failure").get(removerMaquinas);

module.exports = router;