function setRandomText() {
    var url = 'https://v1.hitokoto.cn/?min_length=5&max_length=100';
    var xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var data = JSON.parse(xhr.responseText);
            var randomTextDiv = document.getElementById('randomTextDiv');
            var randomText = document.getElementById('randomText');
            var textUrl = document.getElementById('textUrl');
            if (textUrl != null){
                randomTextDiv.removeChild(textUrl);
            };
            randomTextDiv.removeChild(randomText);
            var newRandomText = document.createElement('p');
            newRandomText.setAttribute('onclick', 'setRandomText();');
            newRandomText.className = 'fadeEffect';
            newRandomText.id = 'randomText';
            newRandomText.innerText = data.hitokoto;
            var newTextUrl = document.createElement('small');
            newTextUrl.className = 'fadeEffect';
            newTextUrl.innerHTML = '<a href="https://hitokoto.cn/?uuid=' + data.uuid + '">来源：一言</a>';
            newTextUrl.id = 'textUrl';
            randomTextDiv.appendChild(newRandomText);
            randomTextDiv.appendChild(newTextUrl);
            console.log('成功获取了地址为 https://hitokoto.cn/?uuid=' + data.uuid + ' 的文本：' + data.hitokoto);
        };
    };
    xhr.send();
};