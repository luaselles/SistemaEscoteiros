const { Router } = require('express');
const routes = Router();

const EventCtrl = require('./Controladoras/EventoCtrl');

const InscrCtrl = require('./Controladoras/InscreverEscoteiroCtrl');

routes.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

routes.post('/evento', EventCtrl.gravarEvento);
routes.get('/evento', EventCtrl.listarEventos);
routes.put('/evento', EventCtrl.alterarEvento);
routes.delete('/evento/:id', EventCtrl.excluirEvento);

routes.get('/inscreverescoteiro', InscrCtrl.listarnaoinscritos);

module.exports = routes;