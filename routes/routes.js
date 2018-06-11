var appRouter = function (app) {
var multiplication = require('./../multiplication.js');

app.get("/", function(req, res) {
	res.status(404).send("Error 404, To use the multiplication service browse to: {server}:{port}/multiplication/{number1}/{number2}");
})
  
app.get("/multiplication/:number1/:number2", function(req,res) {
    var number1 = req.params.number1;
    var number2 = req.params.number2;
    var total = multiplication.multiplication(number1,number2);
    res.send(JSON.stringify(total));
  });
}

module.exports = appRouter;
