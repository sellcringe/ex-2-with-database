Доброе время суток!

Для теста используете следуюшие url:
-- localhost:5000/films
   запись нового фильма json{
   "name": "",
   "year": ""
   },
   удаление фильма +"?id=",
   update фильма json{
   "name": "",
   "year": "",
   "id": ""
   },
   все фильмы,
   фильм по ID +"?id="
   
   
-- localhost:5000/genre
   запись новго жанра json{
   ""
   },
   удаление жанра +"?id=",
   update жанра json{
   "title": "",
   "id": ""
   },
   все жанры,
   жанр по ID +"?id="
   
   
-- localhost:5000/film/genres?id=""
   фильм и смежные с ним жанры
   
   
-- localhost:5000/genre/film?id=""
   жанр и смежные с ним фильмы
-- localhost:5000/filmganres
   связи фильм + жаннр,
   новая связь фильм + жанр json{
   "filmid": "",
    "ganreid": ""
   },
   удалить связь фильм + жанр  json{
   "filmid": "",
    "ganreid": ""
   }, 
   (метод update реализовать пока не понял как из за pk колонок) 
