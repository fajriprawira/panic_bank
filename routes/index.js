const router = require('express').Router()
const Controller = require('../controller/controllers')

// // user routes
router.get('/',Controller.home)
// router.get('/user', Controller.showUser)
// router.get('/user/add', Controller.addStoresForm)
// router.post('/user/add', Controller.addStores)

// // Employee routes
// router.get('/employees', Controller.allEmployee)
// router.get('/stores/:storeId', Controller.showStoreEmployee)
// // router.get('/stores/:storeId/employees/add', Controller.AddEmployeeForm)
// // router.post('/stores/:storeId/employees/add', Controller. AddEmployee)
// // router.get('/stores/:storeId/employees/:employeeId/edit', Controller.editEmployeeForm)
// // router.post('/stores/:storeId/employees/:employeeId/edit', Controller.editEmployee)
// // router.get('/stores/:storeId/employees/:employeeId/delete', Controller.deleteEmployee)





module.exports = router