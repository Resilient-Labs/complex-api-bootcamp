//Reset input
document.querySelector("input").value = "";

function getCode(websiteURL){
    fetch(`https://qrtag.net/api/qr_transparent_4.png?url=${websiteURL}`,{
    mode: "no-cors"})
        .then(data => {
            document.querySelector(".codeQR").src = `https://qrtag.net/api/qr_transparent_4.png?url=${websiteURL}`;
            document.querySelector(".codeQR").alt = `QRCODE for website`;
            document.querySelector(".codeLink").href = websiteURL;
        })
};

document.querySelector("button").onclick = () => {
    let website = document.querySelector("input").value;
    let accessKey = "afc6e717b08b0664cda8698c5afbfd05";
    let fullSite = `http://api.screenshotlayer.com/api/capture?access_key=${accessKey}&url=${website}&viewport=1980x1080`

    fetch(fullSite, {mode: "no-cors"})
        .then(data => {
            document.querySelector(".pageImage").src = fullSite
            document.querySelector(".pageImage").alt = website
        })
    getCode(fullSite)
};
