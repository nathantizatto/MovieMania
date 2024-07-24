# MovieMania

MovieMania é um projeto de estudo desenvolvido em React para exibir informações sobre filmes em cartaz, utilizando a API do The Movie Database (TMDb). O site apresenta um destaque do filme mais recente em cartaz, incluindo título, descrição, avaliação e um link para o trailer. O design é responsivo e inclui uma interface atraente com uma logo personalizada.

## Tabela de Conteúdos

- [Instalação](#instalação)
- [Uso](#uso)
- [Componentes](#componentes)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Responsividade](#responsividade)
- [API](#api)
- [Contribuição](#contribuição)
- [Licença](#licença)

## Instalação

Para instalar e executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/movie-mania.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd movie-mania
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API do TMDb:
   ```plaintext
   REACT_APP_API_KEY=your_api_key_here
   ```
5. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

## Uso

Após iniciar o servidor de desenvolvimento, o site estará disponível em `http://localhost:3000`. Você verá a página inicial com o filme em destaque, incluindo título, descrição, avaliação e um botão para assistir o trailer.

## Componentes

A aplicação é altamente componentizada para garantir modularidade e reutilização de código. Os principais componentes são:

- `Navmain.js`: Componente principal que exibe o filme em destaque.
- `HighlightMovie.js`: Componente responsável por buscar e exibir os dados do filme.
- `Swiper.js`: Componente para criar listas de filmes, utilizando a biblioteca Swiper.
- Outros componentes menores para seções específicas do site.

### Navmain.js

O componente `Navmain.js` faz uma requisição à API do TMDb para obter informações sobre o filme em destaque e o trailer correspondente. Ele utiliza hooks do React (`useEffect` e `useState`) para gerenciar o estado e efeitos colaterais.

### HighlightMovie.js

Este componente é responsável por exibir as informações detalhadas do filme, como título, descrição, avaliação e votos.

### Swiper.js

Utilizamos a biblioteca Swiper para criar listas de filmes que podem ser deslizadas horizontalmente. Este componente facilita a visualização de vários filmes de forma interativa e responsiva.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Swiper**: Biblioteca para criação de carrosséis e sliders.
- **TMDb API**: API utilizada para obter dados de filmes, como título, descrição e trailers.
- **CSS**: Utilizado para estilização dos componentes, com enfoque em responsividade.
- **Environment Variables**: Gerenciamento de chaves de API e outras configurações sensíveis.

## Estrutura de Pastas

A estrutura de pastas do projeto é organizada da seguinte forma:

```
movie-mania/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navmain.js
│   │   ├── HighlightMovie.js
│   │   ├── Swiper.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── .env
├── package.json
└── ...
```

## Responsividade

O design do site é totalmente responsivo, garantindo uma experiência de usuário consistente em diferentes dispositivos. Utilizamos media queries no CSS para ajustar o layout e o tamanho dos elementos conforme o tamanho da tela.

### Exemplo de Media Queries

```css
@media (max-width: 768px) {
  .highlight-content h1 {
    font-size: 2rem;
  }

  .highlight-description {
    font-size: 1rem;
  }

  .highlight-rating, .highlight-votes {
    font-size: 0.9rem;
  }

  .highlight-button {
    font-size: 0.9rem;
    padding: 8px 16px;
  }
}

@media (max-width: 480px) {
  .highlight-content h1 {
    font-size: 1.5rem;
  }

  .highlight-description {
    font-size: 0.8rem;
  }

  .highlight-rating, .highlight-votes {
    font-size: 0.8rem;
  }

  .highlight-button {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
}
```

## API

O projeto utiliza a API do TMDb para obter informações sobre filmes. Abaixo estão alguns dos endpoints utilizados:

- **Now Playing Movies**:
  ```bash
  https://api.themoviedb.org/3/movie/now_playing?api_key=your_api_key&language=pt-BR
  ```

- **Movie Videos**:
  ```bash
  https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=your_api_key&language=pt-BR
  ```

### Exemplo de Uso da API

No componente `Navmain.js`, fazemos uma requisição para obter o filme em cartaz e seu trailer:

```jsx
const fetchMovie = async () => {
  try {
    const res = await fetch(`${apiUrl}now_playing?api_key=${apiKey}&language=pt-BR`);
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      const movie = data.results[0];
      setHighlight(movie);
      fetchTrailer(movie.id);
    }
  } catch (error) {
    console.error('Error fetching movie:', error);
  }
};

const fetchTrailer = async (movieId) => {
  try {
    const res = await fetch(`${apiUrl}${movieId}/videos?api_key=${apiKey}&language=pt-BR`);
    const data = await res.json();
    if (data.results && data.results.length > 0) {
      const trailer = data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
      if (trailer) {
        setTrailerUrl(`https://www.youtube.com/watch?v=${trailer.key}`);
      }
    }
  } catch (error) {
    console.error('Error fetching trailer:', error);
  }
};
```

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir com o projeto, por favor siga os passos abaixo:

1. Fork o repositório.
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`).
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`).
4. Push para a branch (`git push origin feature/MinhaFeature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---