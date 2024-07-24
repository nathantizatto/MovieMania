import React from 'react';
import SwiperList from '../components/Swiperlist';
import '../pages/Home.css'
import Navmain from '../components/Navmain';


const Home = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const apiUrl = process.env.REACT_APP_API;

  return (
    <div>
      <Navmain apiUrl={apiUrl} apiKey={apiKey}/>
    <div className='main'>

        <SwiperList
        apiUrl={`${apiUrl}now_playing`}
        apiKey={apiKey}
        film={"Em exibição nos cinemas"}
      />  

      <SwiperList
        apiUrl={`${apiUrl}top_rated`}
        apiKey={apiKey}
        film={"Melhores avaliações"}
      />

        <SwiperList
        apiUrl={`${apiUrl}upcoming`}
        apiKey={apiKey}
        film={"Lançamentos"}
      />
      
      <SwiperList
        apiUrl={`${apiUrl}popular`}
        apiKey={apiKey}
        film={"Filmes do momento"}
      />
      
      

        
      
    </div>

    <footer className='foot'>
      <h4>2024 | MovieMania</h4>
    </footer>

</div>
  );
};

export default Home;
