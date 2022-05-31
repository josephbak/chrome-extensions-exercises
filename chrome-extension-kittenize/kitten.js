console.log('Kittens of the world, unite as one!');

let filenames = [
    "cat0.jpeg",
    "cat1.jpeg",
    "cat2.jpeg",
    "cat3.jpeg",
    "cat4.jpeg"
];

let imgs = document.getElementsByTagName('img');

for (imgElt of imgs) {
    let r = Math.floor(Math.random() * filenames.length);
    let file = 'kittens/' + filenames[r];
    let url = chrome.runtime.getURL(file);
    imgElt.src = url;
    console.log(url);
}