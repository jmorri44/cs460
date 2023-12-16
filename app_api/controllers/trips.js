const mongoose = require('mongoose');
const Model = mongoose.model('trips');


mongoose.set('useFindAndModify', false);

//Get a list of all the trips

const tripsList = async (req, res) => {
    Model
        .find({}) //Empty filter
        .exec((err, trips) => {
            if(!trips){
                return res
                    .status(404)
                    .json({"message": "trips not found"});
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                return res
                    .status(200)
                    .json(trips);
            }

        });
};

//Add a trip
const tripsAddTrip = async (req, res) => {
    Model.create({
       code: req.body.code,
       name: req.body.name,
       length: req.body.length,
       start: req.body.start,
       resort: req.body.resort,
       perPerson: req.body.perPerson,
       image: req.body.image,
       description: req.body.description 
    },
    (err, trip) => {
        if (err) {
            return res
                .status(400) //400 Code for bad content
                .json(err);
        } else {
            return res
                .status(201) //201 code = created successfully
                .json(trip);
        }
    });

}

//Get a single trip

const tripsFindCode = async (req, res) => {
    Model
        .find({'code': req.params.tripCode})
        .exec((err, trip) => {
            if (!trip){
                return res
                    .status(403)
                    .json({"message": "trip not found"});                   
            } else if (err) {
                return res
                    .status(404)
                    .json(err);
            } else {
                console.log("Found trip " + req.params.tripCode);
                return res
                    .status(202)
                    .json(trip);
            }
        });
};

//Update a trip
const tripsUpdateTrip = async (req, res) => {
    console.log(req.body);
    Model
        .findOneAndUpdate({ 'code': req.params.tripCode }, {
            code: req.body.code,
            name: req.body.name,
            length: req.body.length,
            start: req.body.start,
            resort: req.body.resort,
            perPerson: req.body.perPerson,
            image: req.body.image,
            description: req.body.description
        }, { new: true})
        .then(trip => {
            if(!trip) {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            res.send(trip);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            return res
                .status(500) //500 code for server error
                .json(err);
        });
}

const tripsDeleteTrip = async (req, res) => {
    console.log("deleting trip")
    console.log(req.body);
    Model
        .findOneAndDelete({ 'code': req.params.tripCode },)
        .then(trip => {
            if(!trip) {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            res.send(trip);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res
                    .status(404)
                    .send({
                        message: "Trip not found with code " + req.params.tripCode
                    });
            }
            return res
                .status(500) //500 code for server error
                .json(err);
        });
}


module.exports = {
    tripsList,
    tripsFindCode,
    tripsAddTrip,
    tripsUpdateTrip,
    tripsDeleteTrip
}