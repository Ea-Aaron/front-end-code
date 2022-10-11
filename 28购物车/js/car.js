$(function () {
    // 1.全选 全不选功能按钮
    $('.checkall').change(function () {
        // 获取全选按钮的状态值，再将这个值赋值给小复选框
        // console.log($(this).prop('checked'));
        $('.j-checkbox, .checkall').prop('checked', $(this).prop('checked'));
        // 当全选按钮选中的时候，修改所有的商品背景色
        if ($(this).prop('checked')) {
            $('.cart-item').addClass('check-cart-item');
        } else {
            $('.cart-item').removeClass('check-cart-item');
        }
    })

    // 2.如果小复选框的数量小于3，则全选框不选中
    $('.j-checkbox').change(function () {
        // if(被选中的小的复选框的个数 === 3) {
        //     就要选中全选按钮
        // } else {
        //     不要选中全选按钮
        // }
        // :checked 选择器：查找被选中的表单元素
        console.log($('.j-checkbox:checked'));
        // $('.j-checkbox:checked').length 获取被选中元素的数量
        // console.log($('.j-checkbox:checked').length);
        // $('.j-checkbox').length  所有小复选框的个数
        if ($('.j-checkbox:checked').length < $('.j-checkbox').length) {
            $('.checkall').prop('checked', false);
        } else {
            $('.checkall').prop('checked', true);
        }
    })

    // 3.添加商品数量
    // 获取左边 + 按钮
    $('.increment').click(function () {
        // 当点击 + ，文本框里面的值就 +1
        // 获取文本框内得到值
        // console.log($('.itxt').val());
        var val = $(this).siblings('input').val();
        val++;
        $(this).siblings('input').val(val);

        // 商品小计
        // 获取当前商品的单价
        var price = $(this).parents('.p-num').siblings('.p-price').text().substr(1);
        // console.log(price);
        // 带 ￥ 无法参与计算，需要先将符号去掉，用substr()
        // 获取总价按钮
        // 获取的结果不符合要求，保留两位小数，toFixed
        price = (price * val).toFixed(2);
        $(this).parents('.p-num').siblings('.p-sum').text('￥' + price);
        getSum();
    })
    // 获取右边 - 按钮
    $('.decrement').click(function () {
        var val = $(this).siblings('input').val();
        if (val == 1) {
            return false
        } else {
            val--;
            $(this).siblings('input').val(val);
        }
        // 小计
        var price = $(this).parents('.p-num').siblings('.p-price').text().substr(1);
        // console.log(price);
        // 带 ￥ 无法参与计算，需要先将符号去掉，用substr()
        // 获取总价按钮
        $(this).parents('.p-num').siblings('.p-sum').text('￥' + (price * val).toFixed(2));
        getSum();
    })

    // 4.修改文本框内的内容，计算 小计模块
    $('.itxt').change(function () {
        // 获取当前文本框的内容
        // console.log($(this).val());
        // 获取当前商品的单价
        var price = $(this).parents('.p-num').siblings('.p-price').text().substr(1);
        $(this).parents('.p-num').siblings('.p-sum').text('￥' + ($(this).val() * price).toFixed(2));
        getSum();
    })

    // 全局调用一次，页面一刷行就统计一次总件数
    getSum();
    // 5.封装一个总价和总计函数
    function getSum() {
        var count = 0; //总件数
        var money = 0; //总金额
        // 遍历每个文本框，获取到文本框内的值，相加就可以得到总件数
        $('.j-checkbox:checked').parents('.p-checkbox').siblings('.p-num').find('.itxt').each(function (i, ele) {
            count += parseInt($(ele).val());
        })
        // 修改总件数
        $('.amount-sum em').text(count);

        // 遍历每个商品的总价，然后相加，再将获取的值给总金额
        $('.j-checkbox:checked').parents('.p-checkbox').siblings('.p-sum').each(function (i, ele) {
            // 价格是由小数的
            money += parseFloat($(ele).text().substr(1));
        })
        // 修改总价
        $('.price-sum em').text('￥' + money.toFixed(2));
    }

    // 删除商品模块
    // 点击商品后面的删除按钮，删除当前商品
    $('.p-action a').click(function () {
        // console.log($(this).parents('.cart-item'));
        // 删除当前元素的所在的一整行
        $(this).parents('.cart-item').remove();
        getSum();
    })

    // 点击删除选中的商品，删掉选中的所有商品
    $('.remove-batch').click(function () {
        $('.j-checkbox:checked').parents('.cart-item').remove();
        getSum();
    })

    // 清空购物车
    $('.clear-all').click(function () {
        // 点击之后，清空购物车里面的所有元素，不管元素有没有被选中
        $('.cart-item-list').empty();
        getSum();
    })

    // 选中商品添加背景色
    $('.j-checkbox').change(function () {
        $(this).parents('.cart-item').toggleClass('check-cart-item');
        getSum();
    })
})