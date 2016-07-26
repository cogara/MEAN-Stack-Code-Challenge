var router = require('express').Router();
var Grocery = require('../models/grocery.js');

router.get('/', function(request, response) {
  console.log('In grocery router');
  response.send('hello!');
});

router.get('/list', function(request, response) {
  Grocery.find({}, function(err, list){
    if(err){
      console.log('Error retrieving list', err);
      response.sendStatus(500);
    } else {
      response.send(list);
    }
  });
});

router.post('/add', function(request, response) {
  var name = request.body.name;
  var qty = request.body.qty;

  var addedItem = new Grocery({
    name: name,
    qty: qty
  })
  console.log('addedItem', addedItem);
  addedItem.save(function(err){
    if (err) {
      console.log('Save error', err);
      response.sendStatus(500);
    } else {
      console.log('Save Success!');
      response.sendStatus(200);
    }
  });
});

router.put('/edit/:id', function(request, response){
  var id = request.params.id;
  console.log(request.body);
  var name = request.body.name;
  var qty = request.body.qty;
    Grocery.findById(id, function(err, item) {
    if(err){
      console.log('edit error', err);
      response.sendStatus(500);
    } else {
      if(name) {
        item.name = name;
      }
      if(qty) {
        item.qty = qty;
      }

      item.save(function(err){
        if(err){
          console.log('error saving edit', err);
          response.sendStatus(500);
        } else {
          console.log('Edit Success!');
          response.sendStatus(200);
        }
      })


    }
  })

})

router.delete('/delete/:id', function(request, response){
  var id = request.params.id;
  console.log(id);
  Grocery.findById(id, function(err, item) {
    if(err){
      console.log('Delete Error', err);
      response.sendStatus(500);
    } else {
      item.remove();
      console.log('Remove Success');
      response.sendStatus(200);
    }
  });
});

module.exports = router;
