let appId = '6dd1c3371becd65fd3d634e38ea6e1df'; 
let units = 'Metrics'
let searchMethod;

function getSearchMethod(searchTerm){
    if(searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
    searchMethod = 'zip';
    else 
      searchMethod = 'q';
}

function searchWeather(searchTerm) {
    getSearchMethod(searchTerm);
    fetch(`api.openweathermap.org/data/2.5/weather${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result => {
        return result.json();
    }).then(results => {
        init(result);
    })
}

function init(resultsFromServer){
    switch (resultFromServer.weather[0].main) {
        case 'Clear':
      document.body.style.backgroundImage = 'url("clear.jpg' 
            break;
    
        case 'Clouds':
            document.body.style.backgroundImage = 'url("cloudy.jpg' 
            break;
        case 'Rain':
        case 'Drizzle':
        case 'Mist':
            document.body.style.backgroundImage = 'url("Rain.jpg' 
            break;
        
        case 'Thunderstorm':
            document.body.style.backgroundImage = 'url("storm.jpg' 
            break;
        case 'Snow':
             document.body.style.backgroundImage = 'url("Snow.jpg' 
            break;
        
        default:
            break;
    }

}





document.getElementById('searchBtn').addEventListener('click',() => {
    let searchTerm = document.getElementById('searchInput').ariaValueMax;
    if(searchTerm)
    searchWeather(searchTerm);
})
