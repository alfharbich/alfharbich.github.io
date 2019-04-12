// Temple Data (Temples.html)
function temples() {
  get('json/temples.json', (data) => {
    let list = sortByLocation(data.temples);
    let cityIDs = [];

    for (let i = 0; i < list.length; i++) {
      let tab = make('li');
      let page = make('div');
      cityIDs.push(list[i].id);
      // Populate Tabs
      tab.className = 'tab';
      tab.textContent = list[i].location;
      tab.addEventListener(
        'click',
        (e) => {
          let pages = $all('.page');
          let tabs = $all('.tab');
          pages.forEach((pg) => {
            if (!pg.classList.contains('hide')) {
              pg.classList.add('hide');
            }
          });
          tabs.forEach((t) => {
            if (t.classList.contains('current')) {
              t.classList.remove('current');
            }
          });
          e.target.classList.add('current');
          $id('page-' + i).classList.remove('hide');
        },
        false
      );

      $id('tabs').appendChild(tab);

      page.setAttribute('id', 'page-' + i);
      page.classList.add('grid-2');
      page.classList.add('page');
      page.classList.add('centered');

      // Hide Pages
      if (i > 0) {
        page.classList.add('hide');
      }
      // Populate Tab-Pages
      page.appendChild(makeImg(list[i].img));
      page.appendChild(makeContact(list[i]));
      page.appendChild(makeList('Services', list[i].services));
      page.appendChild(makeList('Temple Closures', list[i].closures));
      page.appendChild(makeSchedule(list[i].schedule));

      $id('pages').appendChild(page);
    }
    // Get Weather Data
    getWeather(cityIDs);
  });
}

// Function Call
temples();

/* TEMPLES.JS DEPENDANCIES 
 * ======================= */

function makeImg(src) {
  let box = make('div');
  let img = make('img');
  img.src = 'images/' + src + '.jpg';
  img.alt = src + ' Temple';
  box.appendChild(img);
  return box;
}

function makeContact(temple) {
  let box = make('div');
  let contact = make('ul');
  let props = ['phone', 'email', 'address'];
  let ali = make('li');
  let heading = temple.location + ' ' + temple.address.state + ' Temple';
  let h3 = make('h3');

  h3.textContent = heading;

  contact.className = 'contact';

  props.forEach((prop) => {
    let li = make('li');
    if (!(prop === 'address')) {
      li.textContent = ucfirst(prop) + ": " + temple[prop];
    } else {
      li.textContent = ucfirst(prop) + ": ";
    }
    contact.appendChild(li);
  });

  ali.appendChild(makeAddr(temple.address));
  contact.appendChild(ali);

  box.appendChild(h3);
  box.appendChild(contact);
  return box;

  function makeAddr(addr) {
    let address = make('ul');

    let line1 = make('li');
    let line2 = make('li');
    let line3 = make('li');

    address.className = 'address';

    line1.textContent = addr.street;
    line2.textContent = addr.city + ', ' + addr.state + ' ' + addr.zip;
    line3.textContent = addr.country;

    address.appendChild(line1);
    address.appendChild(line2);
    address.appendChild(line3);

    return address;
  }
}

function makeSchedule(schedule) {
  let box = make('div');
  let h3 = make('h3');
  let note = make('p');
  let endowments = makeList('Endowment Times', schedule.endowments);
  let baptisms = makeList('Baptism Times', schedule.baptisms);
  let sealings = makeList('Sealing Times', schedule.sealings);

  h3.textContent = "Ordinance Schedule";
  note.textContent = "Call to Schedule Living Ordinances";

  box.appendChild(h3);
  box.appendChild(note);
  box.appendChild(endowments);
  box.appendChild(baptisms);
  box.appendChild(sealings);
  return box;
}

function makeList(legend, arr) {
  let box;
  let ul = make('ul');
  let h4 = make('h4');
  h4.textContent = legend;
  arr.forEach((item) => {
    let li = make('li');
    li.textContent = item;
    ul.appendChild(li);
  });
  box = make('div');
  box.appendChild(h4);
  box.appendChild(ul);
  return box;
}