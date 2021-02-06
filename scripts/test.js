(function hitokoto() {
    var hitokoto = "始终弄不明白，合适和喜欢哪个更重要。";
    var dom = document.querySelector('#hitokoto');
    Array.isArray(dom) ? dom[0].innerText = hitokoto : dom.innerText = hitokoto;
})()