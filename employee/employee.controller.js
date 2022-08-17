const mongoose = require('mongoose');
const Employee = require('./employee.model');

function RegisterEmployee(req, res) {
    console.log("this is post request")
   
    const emp = new Employee({
        employeeName: req.body.employeeName,
        empAddress: req.body.empAddress,
        empDesignation: req.body.empDesignation,
        empSalary: req.body.empSalary
    });

    emp.save()
        .then((tr) => { res.send(tr+"info registered sucessfully")})
        
        .catch((err) => { res.send(err+"failed to register info") })
}

function getAll(req,res){
    console.log("this is getUsers method")
    Employee.find().sort({_id:-1})
    .then((result)=>{res.send(result)})
    .catch((err)=>{res.send(err)
    }) 
}
function deleteEmployee(req,res,next){
    console.log("inside delete emp")
    
   Employee.findByIdAndDelete(req.params.id)
     .then((vehicle)=>{res.send(vehicle+"deleted sucessfully")})
        .catch((err)=>{res.send(err)})
}
function updateEmployee(req,res,next){
    console.log("inside updation")
    Employee.findByIdAndUpdate(req.params.id, {$set:req.body},{new:true}
        ).then((emp)=>{
            (res.status(200).send(emp+"updated sucessfully"))
        })
        .catch((err)=>{
            const error="error while updating"
            next(error)
            (res.send(err))
        })
    
    }
module.exports = { RegisterEmployee,getAll,deleteEmployee,updateEmployee }


