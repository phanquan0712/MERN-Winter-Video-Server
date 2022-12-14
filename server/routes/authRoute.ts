import express from 'express';
import authCtrl from '../controllers/authCtrl';
import { validRegister } from '../middleware/validRegister';
import auth from '../middleware/auth';


const router = express.Router();
router.post('/register',validRegister, authCtrl.register);
router.post('/active', authCtrl.activeAccount);
router.post('/login', authCtrl.login);
router.get('/logout', auth,  authCtrl.logout);
router.get('/refresh_token', authCtrl.refreshToken);
router.post('/google_login', authCtrl.googleLogin);
router.post('/facebook_login', authCtrl.facebookLogin);
router.post('/login_sms', authCtrl.loginSms);
router.post('/verify_sms', authCtrl.verifySms);

export default router;