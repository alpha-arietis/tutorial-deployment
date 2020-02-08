const router = require('express').Router()
let Vehicle = require('../models/vehicle.model')

router.route('/').get((req, res) => {
    //res.send('TEST: vehicles list goes here...')
    Vehicle.find()
    .then(vehicles => res.json(vehicles))
    .catch(err => res.status(400).json('Error: ' + err))
})


router.route('/add').post((req, res) => {
    const make = req.body.make
    const model = req.body.model
    const year = Number(req.body.year)
    const numberPlate = req.body.numberPlate.toUpperCase()
    const staff = req.body.staff
    const ownedOrLeased = req.body.ownedOrLeased
    const cost = Number(req.body.cost)
    const leaseExp = Date.parse(req.body.leaseExp)
    const regoDue = Date.parse(req.body.regoDue)
    const warrantDue = Date.parse(req.body.warrantDue)
    const odometer = Number(req.body.odometer)
    const odometerDate = Date.parse(req.body.odometerDate)

    const newVehicle = new Vehicle({
        make,
        model,
        year,
        numberPlate,
        staff,
        ownedOrLeased,
        cost,
        leaseExp,
        regoDue,
        warrantDue,
        odometer,
        odometerDate
    })

    newVehicle.save()
    .then(() => res.json('Vehicle added!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').get((req, res) => {
    Vehicle.findById(req.params.id)
    .then(vehicle => res.json(vehicle)) // see if this works with just RES instead of VEHICLE
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/:id').delete((req, res) => {
    Vehicle.findByIdAndDelete(req.params.id)
    .then(() => res.json('Vehicle deleted!'))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/update/:id').post((req, res) => {
    Vehicle.findById(req.params.id)
    .then(vehicle => {
        vehicle.make = req.body.make
        vehicle.model = req.body.model
        vehicle.year = Number(req.body.year)
        vehicle.numberPlate = req.body.numberPlate.toUpperCase()
        vehicle.staff = req.body.staff
        vehicle.ownedOrLeased = req.body.ownedOrLeased
        vehicle.cost = Number(req.body.cost)
        vehicle.leaseExp = Date.parse(req.body.leaseExp)
        vehicle.regoDue = Date.parse(req.body.regoDue)
        vehicle.warrantDue = Date.parse(req.body.warrantDue)
        vehicle.odometer = Number(req.body.odometer)
        vehicle.odometerDate = Date.parse(req.body.odometerDate)

        vehicle.save()
        .then(() => res.json('Vehicle updated!'))
        .catch(err => res.status(400).json('Error: ' + err))
    })
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router