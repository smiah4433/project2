const Movies = require('./models/movies')
const Shows = require('./models/shows')
const mongoose = require('mongoose')

///////Name of the Database//////
const mongoURI = 'mongodb://127.0.0.1:27017/movies'
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
  // {
  //   title: "Deadpool",
  //   img: "https://img1.hulu.com/user/v3/artwork/e27cac54-3c3c-425e-b7de-67edc2c9f496?base_image_bucket_name=image_manager&base_image=c508266a-667a-4ef8-b770-bfcaaf6d4fd5&region=US&format=jpeg&size=952x536",
  //   rating: 8.0
  // },
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
  }
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
  }
], (error, data)=>{
    console.log(data)
    db.close()
})
