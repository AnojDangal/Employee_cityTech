const express = require('express');


const router = express.Router();
const controller = require('./employee.controller');




router.get('/getall', (controller.getAll))
router.post('/register', (controller.RegisterEmployee))


router.delete('/delete/:id', (controller.deleteEmployee))
router.put('/update/:id', (controller.updateEmployee))


module.exports = router;
