const express = require("express")
const router = express.Router()
const homeControllers = require("../controllers/homeC")

router.get('/',homeControllers.getHomePage);
router.post('/',homeControllers.getWeatherData);

module.exports = router;