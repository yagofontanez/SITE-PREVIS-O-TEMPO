const apiKey = 'c3828d0b5a4485ab662cf88ad9997d1d';

function consultarClima() {
  const cidadeInput = document.getElementById('cidade');
  const cidade = cidadeInput.value;

  if (!cidade) {
    alert('Por favor, digite o nome da cidade.');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}`;

  obterDadosClima(apiUrl);
}

async function obterDadosClima(apiUrl) {
  try {
    const resposta = await axios.get(apiUrl);
    const dadosClima = resposta.data;

    
   if( const weatherInfoContainer = document.getElementById('weather-info'); ) {
    weatherInfoContainer.innerHTML = `
      <p>Cidade: ${dadosClima.name}</p>
      <p>Temperatura: ${dadosClima.main.temp}°C</p>
      <p>Condição do tempo: ${dadosClima.weather[0].description}</p>
    `;
  } else { catch (erro) {
    console.error('Erro ao obter dados do clima:', erro.message);
  weatherInfoContainer.innerHTML = `
    <p>Cidade não encontrada</p>`;
  } 
  }

  }
}
