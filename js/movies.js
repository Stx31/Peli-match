document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'b266648a8fcfff348b0d51512bc73760'; 
    const categoriesList = document.getElementById('categories-list');
    const moviesList = document.getElementById('movies-list');

    // Función para obtener y mostrar las categorías
    function getCategories() {
        fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=es`)
            .then(response => response.json())
            .then(data => {
                const genres = data.genres;
                genres.forEach(genre => {
                    const listItem = document.createElement('li');
                    const link = document.createElement('a');
                    link.href = '#';
                    link.textContent = genre.name;
                    link.dataset.genreId = genre.id;
                    link.addEventListener('click', (event) => {
                        event.preventDefault();
                        getMoviesByCategory(genre.id);
                    });
                    listItem.appendChild(link);
                    categoriesList.appendChild(listItem);
                });
            });
    }

    // Función para obtener y mostrar las películas por categoría
    function getMoviesByCategory(categoryId) {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${categoryId}&language=es`)
            .then(response => response.json())
            .then(data => {
                moviesList.innerHTML = '';
                const movies = data.results;
                movies.forEach(movie => {
                    const movieItem = document.createElement('div');
                    movieItem.classList.add('movie-item');
                    const movieTitle = document.createElement('h3');
                    movieTitle.textContent = movie.title;
                    const moviePoster = document.createElement('img');
                    moviePoster.src = `https://image.tmdb.org/t/p/w200${movie.poster_path}`;
                    moviePoster.alt = movie.title;
                    movieItem.appendChild(moviePoster);
                    movieItem.appendChild(movieTitle);
                    moviesList.appendChild(movieItem);
                });
            });
    }

    // Inicializa la página obteniendo las categorías
    getCategories();
});
