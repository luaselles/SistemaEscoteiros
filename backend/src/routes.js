const { Router } = require('express');
const routes = Router();

const EventCtrl = require('./Controladoras/EventoCtrl');
const ProdutoCtrl = require('./Controladoras/ProdutoCtrl');
const EscoteiroCtrl = require('./Controladoras/EscoteiroCtrl');

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

routes.post('/produto', ProdutoCtrl.gravarProduto);
routes.get('/produto', ProdutoCtrl.listarProdutos);
routes.put('/produto', ProdutoCtrl.alterarProduto);
routes.delete('/produto/:id', ProdutoCtrl.excluirProduto);

routes.post('/escoteiro', EscoteiroCtrl.gravarEscoteiro);
routes.get('/escoteiro', EscoteiroCtrl.listarEscoteiros);
routes.put('/escoteiro', EscoteiroCtrl.alterarEscoteiro);
routes.delete('/escoteiro/:id', EscoteiroCtrl.excluirEscoteiro);

routes.get('/inscreverescoteiro/:id', InscrCtrl.InscreverEscoteiro);
routes.put('/inscreverescoteiro', InscrCtrl.listarPorStatus);

module.exports = routes;