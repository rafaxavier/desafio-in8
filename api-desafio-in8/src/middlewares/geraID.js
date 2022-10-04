var i = 1;
var geraID = function (req, res, next) {
    
    req.body.id=i;
    i++;

    next();
};

module.exports = geraID;