window.load = function () {
    var beforeimg = document.getElementById("beforeimg");
    var afterimg = document.getElementById("afterimg");
    beforeimg.src = "https://img.cdn.nesxc.com/blogimg/before.png";
    // beforeimg.src= "img/custom/before.png";
    afterimg.src = "https://img.cdn.nesxc.com/blogimg/after.png";
    console.log("图片加载");
}

//window.load 页面所有元素加载完毕之后在执行