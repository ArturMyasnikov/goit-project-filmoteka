import { refs } from './refs';
const { MovieTrendContainer } = refs;

export function renderSearchResultMovie(results) {
  renderMarkup(results);
}

function renderMarkup(results, watched, queue) {
  refs.movieContainer.innerHTML = '';

  const markup = results
    .map(
      ({ id, title, vote_average, release_date, genre_ids, poster_path }) =>
        `
<li class="gallery-items films__gallery-item" data-id=${id}>
<a href="#!" class="list-card__link">
<!-- постер -->
  ${
    poster_path
      ? ` <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}"   alt="${title}"
         class="moviе-item__img" 
          loading="lazy" 
   />`
      : `<img src="https://sd.keepcalms.com/i-w600/sorry-poster-is-missing.jpg" alt="${title}" class="moviе-item__img" loading="lazy">`
  }
  
<!-- обгортка інформації під постером -->
<div class="moviе-stats">
    <h2 class="moviе-stats__title" data-id=${id} data-watched=${watched}
         data-queue=${queue}>${title}</h2>
    <div class="moviе-stats__info" >
<!-- список жанрів -->
<p class="moviе-genre">${genre_ids}</p>
<!-- дата виходу та рейтинг -->
<p class="moviе-year">|  ${new Date(release_date).getFullYear()}</p>
<!-- рейтинг -->
<p class="moviе-vote">${vote_average.toFixed(1)}</p>
</div>
    </div>
</a>
</li>`
    )
    .join('');

  refs.movieContainer.insertAdjacentHTML('beforeend', markup);
}
