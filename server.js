// express loading
const express = require('express');
// express에서 실행되는 것을 app이라고 상수화
const app = express();
// server.js에서 route를 만들고 상수화
// require(경로)에서 productsRoute, ordersRoute라고 상수화
const productsRoute = require('./api/routes/products');
const ordersRoute = require('./api/routes/orders');

app.use('/products', productsRoute);
app.use('/orders', ordersRoute);

// port는 3000번
const port = 3000;
// app중의 .listen모듈을 실행, server가 실행되면 console.log를 통해 server started..라는 string이 print
app.listen(port, console.log('server started..'));