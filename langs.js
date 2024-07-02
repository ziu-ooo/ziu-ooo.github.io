function loadScript(src) {
    var script = document.createElement('script');
    script.src = src;
    script.type = 'text/javascript';
    document.head.appendChild(script);
}

loadScript('./static/langs/zh_cn.js');
loadScript('./static/langs/zh_tw.js');
loadScript('./static/langs/en.js');
