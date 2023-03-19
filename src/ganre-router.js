const Router = require('../FRAMEwrk/Router');
const controller = require('./ganre-controller');
const router = new Router();

router.get('/genre', controller.getGanres)
router.post('/genre',controller.createGanre)
router.put('/genre', controller.updateGanre)
router.delete('/genre', controller.deleteGanre)
module.exports = router