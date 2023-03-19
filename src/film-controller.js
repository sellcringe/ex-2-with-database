const db = require('../db')
const {rows} = require("pg/lib/defaults");

class FilmController {

    async createFilm(req, res){
        // console.log(req.body)
        const {name, year} = req.body;
        const newFilm = await db.query(`INSERT INTO kinopoisk.film (name, year) values ($1, $2) RETURNING * `, [name, year])
        // const filmid = await db.query(`INSERT INTO film `)
        // // users.push(user);
        // // res.send(users);
        res.send(newFilm.rows[0])




    }
    async getFilms(req, res){
        if(req.params.id){

            const film = await db.query(`SELECT * FROM kinopoisk.film where id = $1`, [req.params.id])
            return res.send(film.rows[0])
        }


        const films = await db.query(`SELECT * FROM kinopoisk.film`)
        res.send(films.rows)



    }

    async updateFilm(req, res){
        const {name, year, id} = req.body;
        const newFilm = await  db.query('UPDATE kinopoisk.film set name = $1, year = $2 where id = $3 RETURNING *', [name,year, id])
        res.send(newFilm.rows[0])


    }
    async deleteFilm(req, res){
        if(req.params.id){

        }
        // const id = req.params.id
        const filmDelete = await db.query (`DELETE FROM kinopoisk.film where id = $1`, [req.params.id])
        return  res.send(filmDelete.rows[0])

    }
}
module.exports = new FilmController();