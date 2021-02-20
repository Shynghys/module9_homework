const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
const resultNode = document.getElementById('result');
const btnNode = document.getElementById('btn');

btnNode.onclick = function () {
    const resultNode = document.getElementById('result');

    if ((document.getElementById('width').value <= 300 && document.getElementById('width').value >= 100) &&
        (document.getElementById('height').value <= 300 && document.getElementById('height').value >= 100)) {
        let res = fetch('https://picsum.photos/' + document.getElementById('width').value + '/'
            + document.getElementById('height').value)
            .then((response) => {
                for (let key in response) {
                    resultNode.innerHTML = '<img src="' + response.url + '">';
                }
            })
    } else {
        resultNode.innerHTML = 'одно из чисел вне диапазона от 100 до 300';
    }

}