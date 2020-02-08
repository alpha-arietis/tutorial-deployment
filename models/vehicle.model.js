const mongoose = require('mongoose')

const Schema = mongoose.Schema

const vehicleSchema = new Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    numberPlate: { type: String, required: true },
    staff: { type: String, required: false },
    ownedOrLeased: { type: String, required: false },
    cost: { type: Number, required: false },
    leaseExp: { type: Date, required: false },
    regoDue: { type: Date, required: true },
    warrantDue: { type: Date, required: true },
    odometer: { type: Number, required: true },
    odometerDate: { type: Date, required: true }
}, 
{
    timestamps: true
})

const Vehicle = mongoose.model('Vehicle', vehicleSchema)

module.exports = Vehicle