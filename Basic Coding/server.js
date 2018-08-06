
const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
 
// connection configurations
const mc = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'kulina-test'
});
 
// connect to database
mc.connect();

// default route
app.get('/', function (req, res) {
    return res.send({ error: true, message: 'hello kulina' })
});

// Retrieve all reviews
app.get('/user_review', function (req, res) {
    mc.query('SELECT * FROM user_review', function (error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'User Review.' });
    });
});


// Add a new review 
app.post('/user_review', function (req, res) {
    
       let review = req.body.review;
       let order_id = req.body.order_id;
       let product_id = req.body.product_id;
       let user_id = req.body.user_id;
       let rating = req.body.rating;
    
       if (!review || !order_id || !product_id || !user_id || !rating) {
           return res.status(400).send({ error:true, message: 'Please fill in again' });
       }
    
       mc.query("INSERT INTO user_review SET ? ", { review: review, order_id:order_id, product_id:product_id, user_id:user_id, rating:rating }, function (error, results, fields) {
           if (error) throw error;
           return res.send({ error: false, data: results, message: 'New review has been inserted.' });
       });
   });

   
//  Delete review
app.delete('/delete_review', function (req, res) {
    
       let id = req.body.id;
    
       if (!id) {
           return res.status(400).send({ error: true, message: 'Please provide id' });
       }
       mc.query('DELETE FROM user_review WHERE id = ?', [id], function (error, results, fields) {
           if (error) throw error;
           return res.send({ error: false, data: results, message: 'Review has been deleted successfully.' });
       });
   }); 
   //  Update review with id
app.put('/update_review', function (req, res) {
    
       let id = req.body.id;
       let review = req.body.review;
    
       if (!id || !review) {
           return res.status(400).send({ error: task, message: 'Please provide review and id' });
       }
    
       mc.query("UPDATE user_review SET review = ? WHERE id = ?", [review, id], function (error, results, fields) {
           if (error) throw error;
           return res.send({ error: false, data: results, message: 'Review has been updated successfully.' });
       });
   });

   app.all("*", function (req, res, next) {
    return res.send('page not found');
    next();
});

// port must be set to 8080 because incoming http requests are routed from port 80 to port 8080
app.listen(8080, function () {
    console.log('Node app is running on port 8080');
});

module.exports = app;