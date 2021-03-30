const { Router } = require('express');
const router = Router();
const morgan = require('morgan');
const bodyParser = require('body-parser')

const orderRouter = require('./OrderRouter');
const productsRouter = require('./ProductsRouter');
const userRouter  = require('./UserRouter');

router.use(morgan('dev'));

router.use(bodyParser.urlencoded({extended: false})); //APENAS DADOS SIMPLES 
router.use(bodyParser.json()); //JSON É A ENTRADA DO BODY

router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //ORIGEM QUE PERMITE ACESSAR
    res.header(
        'Access-Control-Allow-Header', 
        'Origin, X-Requrested-Width, Content-Type, Accept, Authorization'
    ); // CABEÇALHO QUE VAI ACEITAR

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Alow-Methods', 'PUT, GET, POST,DELETE')
    } // METODOS ACEITOS 

    next();
});

router.use('/order', orderRouter);
router.use('/product', productsRouter);
router.use('/user', userRouter);

//QUANDO NÃO ENCONTRA A ROTA
router.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
})

router.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        error:{
            mensagem: error.message
        }
    })
    // return res.send('Hello World!')
})

module.exports = router;