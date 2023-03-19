const Router = require('../FRAMEwrk/Router');
const controller = require('./film_Ganres-controller');
const router = new Router();

router.get('/film/genres', controller.getFilmWithGanres)
router.get('/filmganres', controller.getAllIDFilmGenres)
router.post('/filmganres',controller.createGanreidFilmid)
router.get('/genre/film', controller.getGenreWithFilm)
// router.put('/filmganres', controller.updateGanreFilmID)
router.delete('/filmganres', controller.deleteGenreFilm)
module.exports = router