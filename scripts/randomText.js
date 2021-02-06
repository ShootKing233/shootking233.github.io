function setRandomText() {
    var url = 'https://v1.hitokoto.cn/?min_length=5&max_length=100';
    var xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var data = JSON.parse(xhr.responseText);
            document.getElementById('randomText').innerText = data.hitokoto;
            document.getElementById('textUrl').innerHTML = '<a href="https://hitokoto.cn/?uuid=' + data.uuid + '">来源：一言</a>';
            console.log('成功获取了地址为 https://hitokoto.cn/?uuid=' + data.uuid + ' 的文本：' + data.hitokoto);
        };
    };
    xhr.send();
};