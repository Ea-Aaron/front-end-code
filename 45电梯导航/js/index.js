$(function () {
    // alert(11);
    // 点击电梯导航的时候，红色背景是从上往下再到指定的li的位置
    // 节流阀 互斥锁
    var flag = true;

    // 当刷新页面的时候，电梯导航有时会消失，打开页面，就渲染一次
    function toogleTool() {
        if ($(document).scrollTop() >= recommendTop) {
            $('.fixedtool').show();
        } else {
            $('.fixedtool').hide();
        }
    };
    toogleTool();

    // 当页面滚动到今日推荐，显示电梯导航
    var recommendTop = $('.recommend').offset().top;
    $(window).scroll(function () {
        toogleTool();

        if (flag) {
            // 当页面滚动到相关内容的时候，电梯导航也需要一起动
            $.each($('.floor .w'), function (i, ele) {
                // 当前页面滚动的距离
                // $(ele).offset().top;
                if ($(document).scrollTop() >= $(ele).offset().top - 100) {
                    $('.fixedtool li').eq(i).addClass('current').siblings().removeClass();
                }
            })
        }
    })

    // 当点击电梯导航，页面跳转到相应的页面
    $('.fixedtool li').click(function () {
        flag = false;
        // 获取点击li的索引号
        // console.log($(this).index());
        var index = $(this).index();
        // 跳转到对应的展示页面
        var floorTop = $('.floor .w').eq(index).offset().top;
        // $(document).scrollTop(floorTop);
        $('body, html').stop().animate({
            scrollTop: floorTop
        }, function () {
            flag = true;
        })

        // 点击电梯导航，当前li变颜色，其他变为白色
        $(this).addClass('current').siblings().removeClass();
    })
})