document.getElementById('randomCatButton').addEventListener('click', fetchRandomCat);

function fetchRandomCat() {
    axios.get('https://api.thecatapi.com/v1/images/search')
        .then(response => {
            const imgID = response.data[0];
            const imgUrl = imgID.url;
            const imgWidth = imgID.width;
            const imgHeight = imgID.height;
            displayImage(imgUrl, imgWidth, imgHeight);
        })
        .catch(error => {
            console.error('이미지를 불러오는 도중 오류 발생', error);
        });
}

function displayImage(url, width, height) {
    const imgContainer = document.getElementById('imgContainer');
    imgContainer.innerHTML = `
        <img src="${url}" alt="Random Cat" style="max-width: 100%; height: auto;">
        <p>${width}px X ${height}px </p>
    `;
}
