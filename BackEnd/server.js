const express =  require(`express`);
const db = require("./src/Database/models");
const cors = require('cors');
const accountRouter = require('./src/Routes/account.routes');
const companyRouter = require('./src/Routes/company.routes');
const productRouter = require('./src/Routes/product.routes');
const loginRouter = require('./src/Routes/login.routes');
const purchaseSaleRouter = require("./src/Routes/purchase_sale.routes")
const serviceRouter = require('./src/Routes/service.routes');

const app = express();
app.use( express.json() );

var corsOptions = {
    origin: ['http://localhost:3000','http://localhost:3001' ], // O domínio permitido
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Métodos permitidos
    credentials: true, // Habilitar o envio de credenciais (por exemplo, cookies)
    optionsSuccessStatus: 204, // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use( cors(corsOptions) );
app.use( loginRouter );
app.use( purchaseSaleRouter );
app.use( serviceRouter );
app.use( accountRouter );
app.use( productRouter );
app.use( companyRouter );

app.listen(3001, () => console.log( "server is running!" ) );