const db = require('../db')
const {rows} = require("pg/lib/defaults");

class GanreController {
    async createGanreidFilmid(req,res){
        const {filmid, ganreid} = req.body;
        const newFilmGanre = await db.query(`INSERT INTO kinopoisk.ganre_film_id (filmid, ganreid) values ($1, $2) RETURNING * `, [filmid, ganreid])
        res.send(newFilmGanre.rows[0])
    }

    async getFilmWithGanres(req, res){
        const id = req.params.id
        const filmWithGanre  = await db.query(`
        SELECT kinopoisk.genre.title, kinopoisk.film.name, kinopoisk.film.year
        FROM kinopoisk.genre, kinopoisk.film, kinopoisk.ganre_film_id
        WHERE kinopoisk.ganre_film_id.filmid = $1
        AND kinopoisk.genre.id = kinopoisk.ganre_film_id.ganreid 
        AND kinopoisk.film.id = $1
        `, [id])
        res.send(filmWithGanre.rows)


    }
    async getGenreWithFilm(req,res){
        const id = req.params.id;
        const genreWithFilm = await  db.query (`
        SELECT kinopoisk.genre.title, kinopoisk.film.name, kinopoisk.film.year
        FROM kinopoisk.genre, kinopoisk.film, kinopoisk.ganre_film_id
        WHERE kinopoisk.film.id = kinopoisk.ganre_film_id.filmid
        AND kinopoisk.genre.id = $1
        AND kinopoisk.ganre_film_id.ganreid = $1
        `, [id])
        res.send(genreWithFilm.rows)
    }
    async updateGanreFilmID(req,res){
        const {filmid, ganreid} = req.body;
        const newFilm = await  db.query('UPDATE kinopoisk.ganre_film_id set filmid = $1, ganreid = $2 RETURNING *', [filmid, ganreid])
        res.send(newFilm.rows[0])


    }
    async getAllIDFilmGenres(req,res){
        const getFilmGenresID = await db.query(`SELECT * FROM kinopoisk.ganre_film_id`)
        res.send(getFilmGenresID.rows)
    }


    async deleteGenreFilm(req,res) {
        const {filmid, ganreid} = req.body;
        const filmGanreDelete = await db.query (`DELETE FROM kinopoisk.ganre_film_id where filmid = $1 AND ganreid = $2`, [filmid,ganreid]);
        res.send(filmGanreDelete.rows[0])


    }




}
module.exports  = new GanreController();