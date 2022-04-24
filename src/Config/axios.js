import axios from "axios"
export default axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/"
})

/*
import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://movie-database-alternative.p.rapidapi.com/',
  params: {s: 'Avengers Endgame', r: 'json', page: '1'},
  headers: {
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com',
    'X-RapidAPI-Key': 'dad25a3713msh4f0c31f24773246p1aba19jsnba016e3a5260'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
*/
//https://imdb8.p.rapidapi.com/auto-complete?q=the%20dark%20knight

/*
import axios from "axios";
export default axios.create({
    baseURL:"https://api.mercadolibre.com/"
})
*/