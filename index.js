function populate(people) {
  var circles = document.getElementsByClassName("circle");
  for (var i = 0; i < circles.length; i++){
    if (!people[i].isIndighted){
      circles.item(i).setAttribute("style", "display: none;")
    }
    else{
      circles.item(i).setAttribute("style", "display: block;")
    }
  }
}

function setIndighted() {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", "assets/people.json", true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        populate(JSON.parse(rawFile.response).people);
      }
  }
  rawFile.send(null);
}

setIndighted();
setInterval(setIndighted, 10000);
