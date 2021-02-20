const resultNode = document.getElementById('res');
const btnNode = document.getElementById('btn');

function userRequest(url, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true)

    xhr.onload = function () {
        let value = document.getElementById('elem').value
        if ((value <= 10) && (value >= 1)) {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result);
            }
        } else {
            resultNode.innerHTML = `<p>Число вне диапозона от 1 до 10</p>`
        }
    }

    xhr.send();
}


function displayResult(apiData) {
    let cards = '';

    apiData.forEach(item => {
        const cardBlock = `
            <div class = 'card'>
                <img
                    src = "${item.download_url}"
                    class="card-image" 
                />
                <p>${item.author}</p>
            </div>
        `;
        cards = cards + cardBlock;
    })

    resultNode.innerHTML = cards;
}

btnNode.addEventListener('click', () => {
    userRequest(`https://picsum.photos/v2/list?limit=` + document.getElementById('elem').value, displayResult)
});