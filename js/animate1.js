function animation (target,element) {
    // 解决多次点击就会加快动画的问题 让页面永远至于一个定时器在工作
    if (element.timeId) {
      clearInterval(element.timeId);
      element.timerId = null;
    }
    element.timeId = setInterval(function () {  
        var step = 4;
        // 如果当前位置大于目标位置为了让它往回走我就把step永远改成负数
        if (element.offsetLeft > target) {
            step = - Math.abs(step);
        }
        if (Math.abs( element.offsetLeft - target)   <= Math.abs(step)) {
            clearInterval(element.timeId);
            element.style.left = target + 'px';
            return;
        }
        element.style.left = element.offsetLeft + step + 'px';
    },20);
}
