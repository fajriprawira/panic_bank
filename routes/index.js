const router = require('express').Router();
const Controller = require('../controller/controllers');
const { isAuthenticated } = require('../middleware/auth');

router.get('/', Controller.home);

router.get('/login', Controller.showLogin);
router.post('/login', Controller.login);
router.get('/register', Controller.showRegister);
router.post('/register', Controller.register);
router.get('/logout', Controller.logout);

router.get('/dashboard', isAuthenticated, Controller.dashboard);
router.get('/dashboard/rekening', isAuthenticated, Controller.showRekening);
router.get('/dashboard/rekening/add', isAuthenticated, Controller.addRekeningForm);
router.post('/dashboard/rekening/add', isAuthenticated, Controller.addRekening);
router.get('/dashboard/transactions', isAuthenticated, Controller.showTransactions);
router.get('/dashboard/transactions/add', isAuthenticated, Controller.addTransactionForm);
router.post('/dashboard/transactions/add', isAuthenticated, Controller.addTransaction);
router.post('/dashboard/transactions/:id/delete', isAuthenticated, Controller.deleteTransaction);
router.get('/dashboard/account', isAuthenticated, Controller.accountDetail);
router.get('/dashboard/account/edit', isAuthenticated, Controller.editProfileForm);
router.post('/dashboard/account/edit', isAuthenticated, Controller.editProfile);

module.exports = router;
