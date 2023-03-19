const PORT = process.env.PORT || 5000;
const Application = require('./FRAMEwrk/Application.js');
const ganreRouter = require('./src/ganre-router');
const userRouter = require('./src/film-router');
const filmganre = require('./src/film_Ganres-router');
const jsonParse = require('./FRAMEwrk/parseJson');
const parseUrl = require('./FRAMEwrk/parseUrl');



const app = new Application();




app.use(jsonParse);
app.use(parseUrl('http://localhost:5000'))
app.addRouter(userRouter)
app.addRouter(ganreRouter)
app.addRouter(filmganre)
app.listen(PORT, () => console.log(`server started on port ${PORT}`))

