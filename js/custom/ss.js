var ss = document.getElementsByClassName('card-shuo')[0];
if (ss != undefined) {
    if (GLOBAL_CONFIG_SITE.isPost) {
        console.log("说说隐藏", ss);
        // document.getElementsByClassName('card-shuo')[0].style.display = 'none';
        ss.style.display = 'none';
    } else {
        console.log("说说开启", ss);
        document.getElementsByClassName('card-shuo')[0].style.display = 'block';
    }
}

