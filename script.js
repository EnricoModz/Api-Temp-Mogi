async function getWeather() {
    //Conectar com a Api
    var resposta = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Mogi%20das%20Cruzes&units=metric&appid=64ed82577ced7f69cb1687f0ce536131');
    //Variavel para consumir o JSO do item temperatura
    var tempCelsious = resposta.data.main.temp;

    //Imprime o valor no frent End com concatenar jquery e dyas cadasd deciamais
    document.getElementById('temperatura').innerHTML = `a temperatura atual de Mogi das Cruzes é: ${tempCelsious.toFixed(2)} °C`;
}

//chamar a função
getWeather()
