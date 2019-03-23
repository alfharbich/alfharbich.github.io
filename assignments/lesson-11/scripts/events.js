var eventsSection = document.querySelector(".events");

                var requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
                var request = new XMLHttpRequest();
                request.open("GET", requestURL);
                request.responseType = "json";
                request.send();

                request.onload = function () {
                    var eventInfo = request.response;
                    var townName = document.getElementById("town-name").innerHTML;
                    if (townName === "Preston") {
                    showEventsPreston(eventInfo);

                        }

                    else if (townName ==="Soda Springs") {
                        showEventsSoda(eventInfo);
                    }
                    else if (townName ==="Fish Haven") {
                        showEventsFish(eventInfo);
                    }
                }

function showEventsPreston(eventInfo) {
    var eventDetails = eventInfo["towns"];

    for (i=0; i < eventDetails.length; i++) {
        if (eventDetails[i].name === "Preston") {
            var eventArticle = document.createElement("article");
            var list = document.createElement("ul");
            var townEvents = eventDetails[i].events;

            for (j=0; j < townEvents.length; j++) {
                var eventItem = document.createElement("li");
                eventItem.textContent = townEvents[j];
                eventItem.className = "events-article"
                list.appendChild(eventItem);
            }

            eventArticle.appendChild(list);
            eventsSection.appendChild(eventArticle);
            
        }

    }
}

function showEventsFish(eventInfo) {
    var eventDetails = eventInfo["towns"];

    for (i=0; i < eventDetails.length; i++) {
        if (eventDetails[i].name === "Fish Haven") {
            var eventArticle = document.createElement("article");
            var list = document.createElement("ul");
            var townEvents = eventDetails[i].events;

            for (j=0; j < townEvents.length; j++) {
                var eventItem = document.createElement("li");
                eventItem.textContent = townEvents[j];
                eventItem.className = "events-article"
                list.appendChild(eventItem);
            }

            eventArticle.appendChild(list);
            eventsSection.appendChild(eventArticle);
            
        }

    }
}

function showEventsSoda(eventInfo) {
    var eventDetails = eventInfo["towns"];

    for (i=0; i < eventDetails.length; i++) {
        if (eventDetails[i].name === "Soda Springs") {
            var eventArticle = document.createElement("article");
            var list = document.createElement("ul");
            var townEvents = eventDetails[i].events;

            for (j=0; j < townEvents.length; j++) {
                var eventItem = document.createElement("li");
                eventItem.textContent = townEvents[j];
                eventItem.className = "events-article"
                list.appendChild(eventItem);
            }

            eventArticle.appendChild(list);
            eventsSection.appendChild(eventArticle);
            
        }

    }
}