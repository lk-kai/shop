window.addEventListener('load', function(e) {
    var previewimg = document.querySelector('.preview_img');
    var xt = document.querySelector('.xt');
    var bg = document.querySelector('.bg');
    var bgimg = document.querySelector('.bg-img');
    previewimg.addEventListener('mouseover', function() {
        xt.style.display = 'block'
        bg.style.display = 'block'
    })
    previewimg.addEventListener('mouseout', function() {
        xt.style.display = 'none'
        bg.style.display = 'none'
    })
    previewimg.addEventListener('mousemove', function(e) {
        var x = e.pageX - this.offsetLeft - xt.offsetWidth / 2
        var y = e.pageY - this.offsetTop - xt.offsetHeight / 2
        var maxX = previewimg.offsetWidth - xt.offsetWidth
        var maxY = previewimg.offsetHeight - xt.offsetHeight
            // console.log(x, y);
        if (x <= 0) {
            x = 0
        } else if (x > maxX) {
            x = maxX
        }
        if (y <= 0) {
            y = 0
        } else if (y > maxY) {
            y = maxY
        }
        xt.style.left = x + 'px';
        xt.style.top = y + 'px';
        //大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
        var maxbig = bgimg.offsetWidth - bg.offsetWidth
        var maxbigX = x * maxbig / maxX
        var maxbigY = y * maxbig / maxY
        bgimg.style.left = -maxbigX + 'px'
        bgimg.style.top = -maxbigY + 'px'


    })

});