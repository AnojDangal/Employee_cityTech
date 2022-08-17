const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    employeeName: {
        type: String
    },
    empAddress: {
        type: String
    },
    empDesignation: {
        type: String,
        require: true,

    },
    empSalary: {
        type: Number
    }

})
module.exports = mongoose.model('empData', employeeSchema);