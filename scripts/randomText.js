var textArray = [
    '当你觉得不行的时候你就去过马路 那样你就是一个行人了。',
    '情人节那天，有人送金，有人送银，有人送花，我怕没人送我，自己去把这三样都买全了：金银花，可去火了。',
    '不要以为女生所谓的减肥只是嘴上说说而已，她们真的还会，发到微博和朋友圈。',
    '高中的数学没有出现小明了，我就知道那傻子考不上高中。',
    '听说每个中国人平均每天摸150次手机，我笑了，净扯淡，明明就一次，睡醒拿起，睡前放下 ​​​。',
    '恭喜你，又熬过了一天，并且中奖了，再来一天。',
    '人有没有钱是看不出来的，当我们在街上擦肩而过的时候，你绝不会想到我竟然是超级会员。',
    '如果一个女人，她能把你的照片当手机屏幕，可以随时让你翻她的手机，可以把微信跟支付宝的密码都给你，甚至可以把银行卡密码也给你，那你就取她的钱，然后打给我,知道了吗？ ​'
];

function setRandomText() {
    var randomIndex = Math.floor(Math.random() * textArray.length);
    document.getElementById('randomText').innerHTML = textArray[randomIndex];
    console.log('成功获取随机字符串：' + textArray[randomIndex]);
};