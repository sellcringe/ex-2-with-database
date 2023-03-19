const db = require('../db')
const {rows} = require("pg/lib/defaults");

class GanreController {
    async createGanre(req,res){
        const title = req.body;

        const newGanre = await db.query(`INSERT INTO kinopoisk.genre (title) values ($1) RETURNING * `, [title])
        res.send(newGanre.rows[0])
    }
    async getGanres(req, res){
        if(req.params.id){

            const ganre = await db.query(`SELECT * FROM kinopoisk.genre where id = $1`, [req.params.id])
            return res.send(ganre.rows[0])
        }


        const ganres = await db.query(`SELECT * FROM kinopoisk.genre`)
        res.send(ganres.rows)

    }
    async updateGanre(req,res){
        const {title, id} = req.body;
        const newGanre = await  db.query('UPDATE kinopoisk.genre set title = $1 where id = $2 RETURNING *', [title,id])
        res.send(newGanre.rows[0])

    }
    async deleteGanre(req,res){
        if(req.params.id){
            const ganreDelete = await db.query (`DELETE FROM kinopoisk.genre where id = $1`, [req.params.id])
            return  res.send(ganreDelete.rows[0])

        }
        // const id = req.params.id


    }


}
module.exports  = new GanreController();