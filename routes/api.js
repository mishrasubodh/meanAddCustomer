const express = require('express')
const router = express.Router();
const { userSChema,} = require('../model/customer');

// for registration
router.post('/addCustomer', (req, res, next) => {
    userSChema.create(req.body).then((responce) => {
        let obj = {
            'message': 'Registration SuccessFull',
            data: responce
        }
        res.send(obj);
    }).catch(next);

});


//for Single data By id 
router.get('/databyid/:id', (req, res, next) => {
    userSChema.findById(req.params.id).then((userSChema) => {
        console.log(userSChema,"userSChemauserSChemauserSChemauserSChemauserSChemauserSChemauserSChemauserSChema");
        res.send(userSChema);
    }).catch(next);
});

//for get all customer data
    router.get('/allCustomerDAta', (req, res, next) => {
    userSChema.find().then((response) => {
        res.send(response);
    }).catch(next);
});

//for databy id
router.put('/databyid/:id', (req, res, next) => {
    userSChema.findByIdAndUpdate({
        _id: req.params.id
    }, req.body).then((user) => {
        userSChema.findOne({
            _id: req.params.id
        }).then((userSChema) => {
            res.send(userSChema);
        }).catch(next);
    })
});

//delete databy id
router.delete('/removedata/:id', (req, res, next) => {
    const id = req.body._id
    userSChema.findOneAndDelete(req.body._id).then((user) => {
        console.log("resp-->", user)
        if (user !== null) {
            let obj = {
                message: 'data successfuly delete',
                user
            }
            res.status(200).send(obj);
        } else if (user == null) {
            let obj = {
                message: 'data not found',
                // responce
            }
            res.status(200).send(obj);
        }

    }).catch(next)
});





module.exports = router;