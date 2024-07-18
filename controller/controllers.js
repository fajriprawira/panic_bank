const e = require("express");
const { User, Profile } = require("../models/index")
const { Op } = require("sequelize");
const bscript = require('../helpers/bcript.js');

class Controller {
  static async home(req, res){
    try {
      res.render('Home.ejs')
    } catch (error) {
      res.send(error)
    }
  }

  static async showSAll(req, res){
    try {
      const data = await User.findAll()
      const dataProfile = await Profile.findAll
      // console.log(data)
      res.render('showAll.ejs', { data, dataProfile })

    } catch (error) {
      res.send(error)
    }
  }

//   static async addSAllForm(req, res){
//     try {
//       res.render('addStoreForm.ejs')

//     } catch (error) {
//       res.send(error)
//     }
//   }

//   static async editAllForm(req, res){
//     try {
//       const { name, code, location, category} = req.body
//       const store = await Store.create({ name, code, location, category })
//       // console.log(store)
//       res.redirect('/stores',{store})

//     } catch (error) {
//       res.send(error)
//     }
//   }

//   static async deleteProfile(req, res){
//     const { position } = req.query
    
//     try {
//       let employees ;
//     if(position){
//       employees = await Employee.getEmployeePosition(position)
//     }else{
//       employees = await Employee.findAll({
//         include : Store
//       })
//     }
//     // console.log(employees)
//     res.render('showAllEmployee.ejs', {employees})
    

//     } catch (error) {
//       // console.log(error)
//       res.send(error)
//     }
//   }

//   static async deleteUser(req, res){
//     try {
//       const { storeId } = req.params

//       const data = await Store.findOne({
//         where: {
//           id : storeId
//         },
//         include :Employee
//       })
//       // console.log(data)
//       res.render('detailStoreEmployee.ejs',{data, Helper})

//     } catch (error) {
//       // console.log(error)
//       res.send(error)
//     }
//   }

//   static async AddEmployeeForm(req, res){
//     try {
//       const stores = await Store.findAll();
//       res.render('addEmployee.ejs', { stores });
//     } catch (error) {
//       res.send(error);
//     }
//   }

//   static async AddEmployee(req, res){
//     try {
//       const { firstName, lastName, age, position, salary, StoreId } = req.body;
//       await Employee.create({ firstName, lastName, age, position, salary, StoreId });
//       res.redirect('/employees');
//     } catch (error) {
//       res.send(error);
//     }
//   }

//   static async editEmployeeForm(req, res){
//     try {
//       const { id } = req.params;
//       const employee = await Employee.findByPk(id);
//       const stores = await Store.findAll();
//       res.render('editEmployee.ejs', { employee, stores });
//     } catch (error) {
//       res.send(error);
//     }
//   }

//   static async editEmployee(req, res){
//     try {
//       const { id } = req.params;
//       const { firstName, lastName, age, position, salary, StoreId } = req.body;
//       await Employee.update(
//         { firstName, lastName, age, position, salary, StoreId },
//         { where: { id } }
//       );
//       res.redirect('/employees');
//     } catch (error) {
//       res.send(error);
//     }
//   }

//   static async deleteEmployee(req, res){
//     try {
//       const { id } = req.params;
//       await Employee.destroy({ where: { id } });
//       res.redirect('/employees');
//     } catch (error) {
//       res.send(error);
//     }
//   }

  
}



module.exports = Controller