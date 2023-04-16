(async function () {
    const response = await fetch("./film.json");
    const moviess = await response.json();
  
    const btnElem = document.getElementById("searchBtn");
    const listElem = document.getElementById("movie-list");
    const yearValue = document.getElementById("yearValue");
    const gerneValue = document.getElementById("gerneValue");
    const languageValue = document.getElementById("languageValue");
    const ratingValue = document.getElementById("ratingValue");
  
    function displaySearchResults(results) {
      listElem.innerHTML = "";
      results.forEach(function (movies) {
        const li = document.createElement("li");
        const listItem = `
              <img src="${movies.Images}" alt="">
              <h2 class="title">${movies.Title}</h2>
              <div class="description">${movies.Genre}</div>
              <h2 class="title">${movies.Year}</h2>
              <h2 class="title">${movies.Language}</h2>
              <h2 class="title">${movies.Actors}</h2>
          `;
        li.innerHTML = listItem;
        listElem.appendChild(li);
      })
    }
  
    function displayAll() {
      const results = moviess.filter(function (movies) {
        return movies.Title
      });
      displaySearchResults(results);
      }
      displayAll()
  
    function displayMovie() {
      const query = yearValue.value.toLowerCase();
      const query1 = gerneValue.value.toLowerCase();
      const results = moviess.filter(function (movies) {
        return (movies.Genre.toLowerCase().includes(query) || 
          movies.Year.includes(query) )
      });
      console.log(results)
      displaySearchResults(results);
    }
  
    btnElem.addEventListener("click", displayMovie);
  })();