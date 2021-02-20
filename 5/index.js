const resultNode = document.getElementById('result');
const btnNode = document.getElementById('btn');

function useRequest(url, callback) {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', url, true)

    xhr.onload = function () {
        const valueNodeLimit = document.getElementById('limit').value;
        const valueNodePage = document.getElementById('page').value;

        if (((valueNodeLimit <= 10) && (valueNodeLimit >= 1)) && ((valueNodePage <= 10) && (valueNodePage >= 1))) {
            const result = JSON.parse(xhr.response);
            if (callback) {
                callback(result)
            }
        } else if (
            !((valueNodeLimit <= 10) && (valueNodeLimit >= 1)) &&
            !((valueNodePage <= 10) && (valueNodePage >= 1))
        ) {
            resultNode.innerHTML = `<p>Номер страницы и лимит вне диапазона от 1 до 10</p>`
        } else if (
            !((valueNodeLimit <= 10) && (valueNodeLimit >= 1)) &&
            ((valueNodePage <= 10) && (valueNodePage >= 1))
        ) {
            resultNode.innerHTML = `<p>Лимит вне диапазона от 1 до 10</p>`
        } else if (
            !((valueNodePage <= 10) && (valueNodePage >= 1)) &&
            ((valueNodeLimit <= 10) && (valueNodeLimit >= 1))
        ) {
            resultNode.innerHTML = `<p>Номер страницы вне диапазона от 1 до 10</p>`
        }
    }
    //console.log(xhr.onload);

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
    useRequest('https://picsum.photos/v2/list?page=' + document.getElementById('page').value
        + '&limit=' + document.getElementById('limit').value, (json) => {
            displayResult(json)
            localStorage.setItem('storageJSON', JSON.stringify(json));
        });
});

window.addEventListener('load', () => {
    const storage = localStorage.getItem('storageJSON')
    if (storage) {
        displayResult(JSON.parse(storage))
    }
});