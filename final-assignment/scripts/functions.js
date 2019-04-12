// (ALL PAGES)

/* TOGGLE ELEMENT
 * ============== */

function toggle(id) {
  if ($id(id).classList.contains('hide')) {
    $id(id).classList.remove('hide');
  } else {
    $id(id).classList.add('hide');
  }
}

/* MENU DISPLAY
 * ============ */

// Menu Display :: Resize Fix
window.onresize = () => {
  displayMenu();
}

// Menu Display Test
function displayMenu() {
  if (window.innerWidth > 480) {
    $id('menu').classList.remove('hide');
  } else {
    $id('menu').classList.add('hide');
  }
}

/* CURRENT DATE
 * ============ */

function currentDate() {
  let date = new Date();
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday', 'Saturday'];
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  let dd = days[date.getDay()];
  let mm = months[date.getMonth()];
  let yy = date.getFullYear();

  let output = "";

  output = dd + ", " + mm + " " + date.getDay() + ", " + yy;

  $id('currentDate').textContent = output;
}

/* SORT ARRAY OF OBJECTS BY :: LOCATION
 * ==================================== */
function sortByLocation(list) {
  // Sort the List Alphabetically
  list.sort((a, b) => {
    let x = a.location.toLowerCase();
    let y = b.location.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
  return list;
}

/* FUNCTION CALLS
 * ============== */

// Output to HTML
window.onload = () => {
  displayMenu();
  currentDate();
}