const Movies = require('./models/movies')
const Shows = require('./models/shows')
const mongoose = require('mongoose')

///////Name of the Database//////
//local host
// const mongoURI = 'mongodb://127.0.0.1:27017/movies'
//heroku app
const mongoURI = 'mongodb+srv://smiah4433:football0818@cluster0.jcoek.mongodb.net/sitcomcomedy?retryWrites=true&w=majority'
const db = mongoose.connection
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, () => {
    console.log('database connected')

})

Movies.create([
  {
    title: "Just Go With It",
    img: "https://upload.wikimedia.org/wikipedia/en/b/b8/Just_Go_with_It_Poster.jpg",
    rating: 6.4
  },
  {
    title: "Grown Ups",
    img: "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/chameleon/title-movie/230599_GROWN%20UPS%20_2010_1400x2100_English.jpg?itok=Wumkl75R",
    rating: 6.0
  },
  {
    title: "Deadpool",
    img: "https://m.media-amazon.com/images/M/MV5BYzE5MjY1ZDgtMTkyNC00MTMyLThhMjAtZGI5OTE1NzFlZGJjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    rating: 8.0
  },
  {
    title: "A Haunted House",
    img: "https://upload.wikimedia.org/wikipedia/en/0/00/A_Haunted_House_Poster.jpg",
    rating: 5.1
  },
  {

    title: "American Pie",
    img: "https://upload.wikimedia.org/wikipedia/en/c/c8/American_Pie1.jpg",
    rating: 7.0
  },
  {
    title: "Just Go With It",
    img: "https://upload.wikimedia.org/wikipedia/en/b/b8/Just_Go_with_It_Poster.jpg",
    rating: 6.4
  },
  {
    title: "Night School",
    img: "https://m.media-amazon.com/images/M/MV5BNjM0MmVjODEtNzYwZi00OWNkLWFhYzItNmVhNWFmYTg2NDQ3XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
    rating: 5.6
  },
  {
    title:"The Hitman's Bodyguard",
    img: "https://m.media-amazon.com/images/M/MV5BMjQ5NjA2NDg1MV5BMl5BanBnXkFtZTgwMDAzNDc4MjI@._V1_.jpg",
    rating: 7.2
  },
  {
    title:"Ferris Bueller's Day Off",
    img: "https://upload.wikimedia.org/wikipedia/en/9/9b/Ferris_Bueller%27s_Day_Off.jpg",
    rating: 7.8
  },
  {
    title:"21 Jump Street",
    img: "https://m.media-amazon.com/images/M/MV5BNTZjNzRjMTMtZDMzNy00Y2ZjLTg0OTAtZjVhNzYyZmJjOTljXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    rating: 7.2
  },
  {
    title:"The Hangover ",
    img: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    rating: 7.7
  },
  {
    title:"The Pacifier",
    img: "https://upload.wikimedia.org/wikipedia/en/thumb/5/52/Pacifier_poster.jpg/220px-Pacifier_poster.jpg",
    rating: 5.6
  },
  {
    title:"Just Friends",
    img: "https://m.media-amazon.com/images/I/81UP7xTgM2L._SL1500_.jpg",
    rating: 7.2
  },
  {
    title:"Waiting",
    img: "https://images-na.ssl-images-amazon.com/images/I/91GtOz+e4wL._RI_.jpg",
    rating: 6.7
  },
  {
    title:"21 & Over",
    img: "https://m.media-amazon.com/images/M/MV5BMjI0NTExOTI0N15BMl5BanBnXkFtZTcwMDA0ODE3OA@@._V1_.jpg",
    rating: 5.8
  },

], (error, data)=>{
console.log(data)
// db.close()
})

Shows.create([
  {
    title: "How I Met Your Mother",
    img: "https://flxt.tmsimg.com/assets/p185124_b_v9_aj.jpg",
    rating: 8.3
  },
  {
    title: "Shameless",
    img: "https://flxt.tmsimg.com/assets/p8554956_b1t_v9_aa.jpg",
    rating: 8.5
  },
  {
    title: "That 70's Show",
    img: "https://www.tvguide.com/a/img/catalog/provider/1/1/1-10584692868.jpg",
    rating: 8.0
  },
  {
    title: "New Girl",
    img: "https://m.media-amazon.com/images/M/MV5BMjA0MDc1NTk0Ml5BMl5BanBnXkFtZTgwMTk2ODA5NDM@._V1_.jpg",
    rating: 7.7
  },
  {
    title: "Johnny Test",
    img: "https://m.media-amazon.com/images/M/MV5BZDVhZWVkNTUtMTE1OC00YmViLWJlMzYtNTQwYmI3MmQ3OGYzXkEyXkFqcGdeQXVyODk1MjAxNzQ@._V1_.jpg",
    rating: 5.2
  },
  {
    title: "New Girl",
    img: "https://m.media-amazon.com/images/M/MV5BMjA0MDc1NTk0Ml5BMl5BanBnXkFtZTgwMTk2ODA5NDM@._V1_.jpg",
    rating: 7.7
  },
  {
    title: "The Three Stooges",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Three_Stooges_1937.jpg",
    rating: 5.1
  },
  {
    title: "Blue Mountain State",
    img: "https://m.media-amazon.com/images/M/MV5BMjQxOTI0MjcxM15BMl5BanBnXkFtZTcwOTY1MDk5NA@@._V1_.jpg",
    rating: 8.3
  },
  {
    title: "George Lopez",
    img: "https://m.media-amazon.com/images/M/MV5BZGZiZjI2M2QtODRhNy00Y2IyLTlmM2YtYmFmM2FkNjU3ZDM0XkEyXkFqcGdeQXVyNzMzMjU5NDY@._V1_FMjpg_UX1000_.jpg",
    rating: 6.7
  },
  {
    title: "American Dragon: Jake Long",
    img: "https://m.media-amazon.com/images/M/MV5BN2IzMGUzZjEtMDY0Mi00ZTczLTg3ZTktNjc5NDJjZDljNmExXkEyXkFqcGdeQXVyMTA1OTAyOTI@._V1_FMjpg_UX1000_.jpg",
    rating: 6.6
  },
  {
    title: "Phinese And Ferb",
    img: "https://m.media-amazon.com/images/M/MV5BMTc1NjcxNzg4MF5BMl5BanBnXkFtZTgwOTMzNzgyMDE@._V1_.jpg",
    rating: 8.0
  },
  {
    title: "The Office",
    img: "https://m.media-amazon.com/images/I/81NK3yCvMJL._SL1500_.jpg",
    rating: 8.9
  }
], (error, data)=>{
    console.log(data)
    db.close()
})
