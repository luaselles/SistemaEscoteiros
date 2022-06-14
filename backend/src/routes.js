const { Router } = require('express');
const routes = Router();

const EventCtrl = require('./Controladoras/EventoCtrl');
const ProdutoCtrl = require('./Controladoras/ProdutoCtrl');
const EscoteiroCtrl = require('./Controladoras/EscoteiroCtrl');
const CaixaeventoCtrl = require('./Controladoras/CaixaeventoCtrl');
const InscrCtrl = require('./Controladoras/InscreverCtrl');
const ReceberMensalidadeCtrl = require('./Controladoras/ReceberMensalidadeCtrl');
const AbrirCaixaCtrl = require('./Controladoras/AbrirCaixaCtrl');
const GerarMensalidadeCtrl = require('./Controladoras/GerarMensalidadesCtrl');
const InscreverCtrl = require('./Controladoras/InscreverCtrl');
const EstornarMensalidadeCtrl = require('./Controladoras/EstornarMensalidadeCtrl');

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

routes.post('/caixaevento', CaixaeventoCtrl.gravarCaixaevento);
routes.get('/caixaevento', CaixaeventoCtrl.listarCaixaevento);
routes.put('/caixaevento', CaixaeventoCtrl.alterarCaixaevento);

routes.post('/produto', ProdutoCtrl.gravarProduto);
routes.get('/produto', ProdutoCtrl.listarProdutos);
routes.put('/produto', ProdutoCtrl.alterarProduto);
routes.delete('/produto/:id', ProdutoCtrl.excluirProduto);

routes.post('/escoteiro', EscoteiroCtrl.gravarEscoteiro);
routes.get('/escoteiro', EscoteiroCtrl.listarEscoteiros);
routes.put('/escoteiro', EscoteiroCtrl.alterarEscoteiro);
routes.delete('/escoteiro/:id', EscoteiroCtrl.excluirEscoteiro);

routes.post('/inscrever', InscrCtrl.InscreverEscoteiro);
routes.get('/inscrever/status/:status', InscrCtrl.listarPorStatus);
routes.get('./inscrevern',InscrCtrl.listarn)
routes.put('./cancelarinscricao/:id', InscrCtrl.cancelarInscricao);

routes.post('/abrirCaixa', AbrirCaixaCtrl.AbrirCaixa);
routes.get('/abrirCaixa', AbrirCaixaCtrl.listarCaixa);
//routes.get('/abrirCaixa', AbrirCaixaCtrl.listarCaixa);

routes.get('/recebermensalidade', ReceberMensalidadeCtrl.listarContas);
routes.post('/recebermensalidade', ReceberMensalidadeCtrl.gravarMensalidade);
routes.put('/recebermensalidade/:id', ReceberMensalidadeCtrl.ReceberMensalidade);
routes.put('/estornarmensalidade/:id', EstornarMensalidadeCtrl.EstornarMensalidade);


routes.post('/gerarmensalidade/:idescoteiro', GerarMensalidadeCtrl.GerarMensalidade);


routes.get('/mensalidade', ReceberMensalidadeCtrl.listarContas);
routes.put('/mensalidade', ReceberMensalidadeCtrl.ReceberMensalidade);

module.exports = routes;