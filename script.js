

const bg ={};
bg.imageOne;
bg.imageTwo;
bg.immageThree;

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
};

function getThingFromList(list) {
  const thingIndex = list.length;
  const thing = list[getRandomInt(thingIndex)];
  return thing;
};

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function allTogether(x) {
  shuffleArray(x);
  let y = x.pop();
  shuffleArray(x)
  return y;
}

function allTogetherBW(x) {
  shuffleArray(x);
  let y = x.pop();
  shuffleArray(x)
  return y;
}


let bgList = ["img/Thumbnail/bridge.jpg", "img/Thumbnail/building.jpg", "img/Thumbnail/car.jpg", "img/Thumbnail/cat.jpg", "img/Thumbnail/dam.jpg", "img/Thumbnail/duck.jpg", "img/Thumbnail/fountain.jpg", "img/Thumbnail/headshot.jpg", "img/Thumbnail/night.jpg", "img/Thumbnail/simon.jpg", "img/Thumbnail/street.jpg", "img/Thumbnail/trees.jpg", "img/Thumbnail/vegas.jpg", "img/Thumbnail/vegasP.jpg"];
let bgList2 = ["img/Thumbnail/bank.jpg", "img/Thumbnail/clouds.jpg", "img/Thumbnail/fallen.jpg", "img/Thumbnail/pano1.jpg", "img/Thumbnail/pano2.jpg", "img/Thumbnail/roseP.jpg", "img/roseP.jpg"];

let imageOne = allTogether(bgList);
let imageTwo =  allTogether(bgList);
let imageThree =  allTogether(bgList);
let imageFour = allTogetherBW(bgList2);


bg.imageOne = "<div class='test' style='padding:0px;Margin:0px;border:0px;width: 100%;height: 100px;background-image: url("+imageOne+");background-repeat: no-repeat;background-position: center;background-size: cover;display: table;filter: grayscale(.75);'><h3>Portfolio</h3></div>"

bg.imageTwo = "<div class='test'  style='padding:0px;Margin:0px;border:0px;width: 100%;height: 100px;background-image: url("+imageTwo+");background-repeat: no-repeat;background-position: center;background-size: cover;display: table;filter: grayscale(.75);'><h3>About</h3></div>"

bg.imageThree = "<div class='test'  style='padding:0px;Margin:0px;border:0px;width: 100%;height: 100px;background-image: url("+imageThree+");background-repeat: no-repeat;background-position: center;background-size: cover;display: table;filter: grayscale(.75);'><h3>Contact</h3></div>"

bg.imageFour = "<div class='test'  style='padding:0px;Margin:0px;border:0px;width: 100%;height: 100px;background-image: url("+imageFour+");background-repeat: no-repeat;background-position: center;background-size: cover;display: table;filter: grayscale(.75);'><h3>Film</h3></div>"
