const { User, Profile, Account, Transaction } = require('../models');
const { hashPassword, comparePassword } = require('../helpers/bcrypt');

class Controller {
  static async home(req, res) {
    try {
      res.render('home.ejs');
    } catch (error) {
      res.send(error);
    }
  }

  static async showLogin(req, res) {
    res.render('login.ejs');
  }

  static async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (user && comparePassword(password, user.password)) {
        req.session.user = { id: user.id, email: user.email, role: user.role };
        res.redirect('/');
      } else {
        res.redirect('/login');
      }
    } catch (error) {
      res.send(error);
    }
  }

  static async showRegister(req, res) {
    res.render('register.ejs');
  }

  static async register(req, res) {
    try {
      const { email, password } = req.body;
      await User.create({ email, password });
      res.redirect('/login');
    } catch (error) {
      res.send(error);
    }
  }

  static async logout(req, res) {
    req.session.destroy();
    res.redirect('/login');
  }

  static async dashboard(req, res) {
    res.render('dashboard.ejs');
  }

  static async showRekening(req, res) {
    try {
      const rekenings = await Account.findAll({ where: { UserId: req.session.user.id } });
      res.render('dashboard-rekening.ejs', { rekenings });
    } catch (error) {
      res.send(error);
    }
  }

  static async addRekeningForm(req, res) {
    res.render('add-account.ejs');
  }

  static async addRekening(req, res) {
    try {
      const { noAccount, amount } = req.body;
      await Account.create({ noAccount, amount, UserId: req.session.user.id });
      res.redirect('/dashboard/rekening');
    } catch (error) {
      res.send(error);
    }
  }

  static async showTransactions(req, res) {
    try {
      const transactions = await Transaction.findAll({
        include: [{ model: User, where: { id: req.session.user.id } }]
      });
      res.render('dashboard-transactions', { transactions });
    } catch (error) {
      res.send(error);
    }
  }

  static async addTransactionForm(req, res) {
    res.render('add-transaction.ejs');
  }

  static async addTransaction(req, res) {
    try {
      const { amount, type } = req.body;
      await Transaction.create({ amount, type });
      res.redirect('/dashboard/transactions');
    } catch (error) {
      res.send(error);
    }
  }

  static async deleteTransaction(req, res) {
    try {
      const { id } = req.params;
      await Transaction.destroy({ where: { id } });
      res.redirect('/dashboard/transactions');
    } catch (error) {
      res.send(error);
    }
  }

  static async accountDetail(req, res) {
    try {
      const profile = await Profile.findOne({ where: { UserId: req.session.user.id } });
      res.render('dashboard-account-detail.ejs', { profile });
    } catch (error) {
      res.send(error);
    }
  }

  static async editProfileForm(req, res) {
    try {
      const profile = await Profile.findOne({ where: { UserId: req.session.user.id } });
      res.render('edit-profile.ejs', { profile });
    } catch (error) {
      res.send(error);
    }
  }

  static async editProfile(req, res) {
    try {
      const { fullname, dateofbirth, address, phonenumber } = req.body;
      await Profile.update({ fullname, dateofbirth, address, phonenumber }, { where: { UserId: req.session.user.id } });
      res.redirect('/dashboard/account');
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = Controller;
