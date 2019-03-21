var main = document.querySelector('main');
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
  var townBuild = request.response;
  townInfo(townBuild);
}

function townInfo(jsonObj) {
  var info = jsonObj['towns'];

  for (var i = 0; i < info.length; i++) {
    if (i === 0 || i === 2 || i === 3 || i === 6) {
      continue;
    }
    var townArticle = document.createElement('div');
    var townName = document.createElement('h5');
    var townMotto = document.createElement('em');
    var yearFounded = document.createElement('p');
    var currentPopulation = document.createElement('p');
    var averageRain = document.createElement('p');
    var townPic = document.createElement('img');

    townName.textContent = info[i].name;
    townMotto.textContent = info[i].motto;
    yearFounded.textContent = 'Year Founded: ' + info[i].yearFounded;
    currentPopulation.textContent = 'Current Population: ' + info[i].currentPopulation;
    averageRain.textContent = 'Average Rainfall: ' + info[i].averageRainfall;

    townArticle.appendChild(townName);
    townArticle.appendChild(townMotto);
    townArticle.appendChild(yearFounded);
    townArticle.appendChild(currentPopulation);
    townArticle.appendChild(averageRain);
    townArticle.appendChild(townPic);

    if (i === 1)
      townPic.src = 'images/hiking-trail-400.jpg'
      townPic.setAttribute('class', 'homepic1');
      townPic.setAttribute('alt', 'Hiking Trail');
    if (i === 4)
      townPic.src = 'images/cloudy-sunset-400.jpg'
      townPic.setAttribute('class', 'homepic2');
      townPic.setAttribute('alt', 'Sunset');
    if (i === 5)
      townPic.src = 'images/rainbow-400.jpg'
      townPic.setAttribute('class', 'homepic3');
      townPic.setAttribute('alt', 'Rainbow');


      main.appendChild(townArticle);
  }
}