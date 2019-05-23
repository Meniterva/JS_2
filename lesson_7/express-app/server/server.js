const express = require('express');
const fs = require('fs');
const cart = require('./cartRouter');
const app = express();

app.use(express.json());
app.use('/', express.static('public'));
app.use('/api/cart', cart);

app.get('/api/products', (req, res) => {
    fs.readFile('server/db/products.json', 'utf8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result: 0, text: err}))
        } else {
            res.send(data)
        }
    })
});
//метод удаления
app.delete('/api/cart', (req, res) => {
    fs.readFile('server/db/userCart.json', 'utf8', (err, data) => {
        if(err){
            res.sendStatus(404, JSON.stringify({result: 0, text: err}))
        } else {
         newCart = cart.delete(JSON.parse(data), req);
        }
    })
})



app.listen(3000, () => console.log('Express started...'));




// app.get()
// app.post()
// app.put()
// app.delete()

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });
// app.get('/api/products/:id', (req, res) => {
//     res.send(req.params.id);
//     //
// })
