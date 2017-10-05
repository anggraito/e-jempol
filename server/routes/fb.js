let express =require('express');
let router = express.Router();
let  controllerFb = require('../controllers/fbController.js')


router.post('/login', controllerFb.setAccessToken, controllerFb.getDataByToken);

module.exports = router;
