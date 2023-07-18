const cardList = document.querySelector(".card-list");
const searchKey = document.getElementById("searchKey");
const btn = document.getElementById("btn");
const results = document.querySelector(".containersaw");
const randomBtn = document.getElementById('randomBtn')

const getMovies = async (search) => {
  let response = await fetch(
    `http://www.omdbapi.com/?apikey=1f67fc13&s=${search}`
  );
  let data = await response.json();
  let newData = data.Search;

  cardList.innerHTML = findMovie(newData);
   
  let resultAmount = data.totalResults;
  results.innerHTML = ` <div class="result-container">
  <h2>Search results for "${search}"</h2>
  <h2>Total Search Results: ${resultAmount}</h2>
   </div>`;
};

function findMovie(mov) {
  let getMovie = [];

  for (let i = 0; i < 6; i++) {
    getMovie.push(`<div class="card">
        <img 
          src="${mov[i].Poster}"
          alt="Movie 1 Poster"
        />
        <div class="card-content">
          <h2 class="title">${mov[i].Title}</h2>
          <p class="description">Year: ${mov[i].Year}</p>
        </div>
        </div>`);
  }

  return getMovie.join("");
}

btn.onclick = () => {
  console.log(searchKey.value);
  getMovies(searchKey.value);
  searchKey.value = "";
};

function randomNumber(){

  const randomMovieList = ['godfather', 'batman', 'harry', 'batman', ' star wars', 'matrix', 'lion king', 'alien', 'predator', 'toy story', 'avengers', 'disney', 'pacific rim', 'jurassic', 'final destination', 'saw', 'mermaid', 'nemo', 'avatar', 'naruto', 'rambo', 'indiana jones']
    let randomNumber = Math.floor(Math.random() * randomMovieList.length) + 1;
   return randomMovieList[randomNumber]
}



randomBtn.onclick = () => {
  getMovies(randomNumber());

}


