
// Insira sua chave de API do TMDB
const apiKey = '54b9cff0f48a3f127fa5cd5906bbe251';  // Sua chave da API do TMDB

// Função para buscar dados do filme usando a API TMDB
async function fetchMovieData(movieName) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.results.length > 0) {
      const movie = data.results[0];
      const movieData = {
        title: movie.title,
        posterUrl: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        overview: movie.overview,
        rating: movie.vote_average,
      };

      return movieData;
    } else {
      alert("Filme não encontrado.");
    }
  } catch (error) {
    console.error('Erro ao buscar filme:', error);
  }
}

// Função para gerar o banner
function generateBanner() {
  const movieName = document.getElementById('movieName').value;
  const layout = document.getElementById('layoutSelect').value;
  const logoInput = document.getElementById('logoUpload').files[0];

  if (!movieName || !logoInput) {
    alert("Por favor, insira o nome do filme e a logo.");
    return;
  }

  fetchMovieData(movieName).then(movieData => {
    const logoUrl = URL.createObjectURL(logoInput);
    const canvas = document.getElementById('bannerCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 400;

    // Adicionando fundo do banner
    ctx.fillStyle = '#333';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Adicionando a capa do filme
    const posterImage = new Image();
    posterImage.src = movieData.posterUrl;
    posterImage.onload = () => {
      ctx.drawImage(posterImage, 50, 50, 150, 225);

      // Adicionando a logo
      const logoImage = new Image();
      logoImage.src = logoUrl;
      logoImage.onload = () => {
        ctx.drawImage(logoImage, 650, 50, 100, 100);

        // Adicionando título e sinopse
        ctx.fillStyle = '#fff';
        ctx.font = '20px Arial';
        ctx.fillText(movieData.title, 220, 100);
        ctx.fillText(`Classificação: ${movieData.rating}`, 220, 140);
        ctx.fillText(movieData.overview.slice(0, 100) + '...', 220, 180);

        // Exibindo o banner gerado
        const finalBanner = canvas.toDataURL('image/png');
        document.getElementById('finalBanner').src = finalBanner;
      };
    };
  });
}
