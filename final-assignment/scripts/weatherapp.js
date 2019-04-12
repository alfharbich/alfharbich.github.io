function getWeather(cityIDs) {
  const wKey = '&APPID=fed59d9de0d6f14c1e4206b85c9d78c3';
  const wURL = 'https://api.openweathermap.org/data/2.5/';
  const wUnits = '&units=imperial';
  const url = wURL + 'group?id=' + cityIDs.join(',') + wUnits + wKey;

  let wRef = 'templeWeatherData';

  if (lsWeather(wRef)) {
    let wObj = lsGet(wRef);
    displayWeather(wObj);
  } else {
    get(url, (wObj) => {
      let date = new Date();
      wObj.rt = date.getTime();
      if (lsTest) {
        lsClear();
        lsSet(wRef, wObj);
      }
      displayWeather(wObj);
    });
  }

  function displayWeather(wData) {
    // Create an Empty List (Array)
    let wList = [];
    // Store Data as Data Objects in the List
    wData.list.forEach((wObj) => {
      wList.push(new Weather(wObj));
    });
    // Sort the List
    wList = sortByLocation(wList);
    for (let i = 0; i < wList.length; i++) {
      let page = $id('page-' + i.toString());
      let nodes = page.childNodes;
      page.insertBefore(wList[i].details(), nodes[2]);
      page.insertBefore(wList[i].summary(), nodes[2]);
    }
  }
}

/* Function lsWeather :: Test
 * Tests for Local Storage Feature
 * Tests for Weather Data in Local Storage
 * Tests whether Weather Data is Current
 * If all of the above, returns True.
 * Otherwise returns false. */

function lsWeather(wRef) {
  // Test :: For Local Storage
  if (!lsTest) {
    return false;
  }
  // Test :: if Data is in Local Storage
  if (!lsGet(wRef)) {
    return false;
  }
  // Get the Data
  let wObj = lsGet(wRef);
  // Test :: if Data is Current (< 30 Minutes Old)
  if (isCurrent(wObj)) {
    // Data is Current
    return true;
  }
  // Data is too Old
  return false;

  function isCurrent(wObj) {
    let now = new Date();
    let then = new Date(wObj.rt);
    if ((now.getTime() - then.getTime()) < 1800000) {
      return true;
    }
    return false;
  }
}