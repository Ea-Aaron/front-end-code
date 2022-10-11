$(function () {
    // alert(11);

    // 打开页面的时候就渲染一次页面
    load();
    // 1.按下回车（keyCode = 13），把完整数据 存储到本地存储里面
    // 存储数据的格式：var todolist = [{title: 'xxx', done: false}]
    $('#title').on('keydown', function (e) {
        if (e.keyCode == 13) {
            // alert(11);
            if ($(this).val() === '') {
                alert('请输入数据');
            } else {
                // 先获取本地存储的数据
                var local = getData();
                console.log(local);
                // 把local数组进行更新，把最新的数据存储进去
                local.push({ title: $(this).val(), done: false });
                // 再把local数据保存进去
                saveData(local);
                // 把数据渲染出来
                load();
                $(this).val('');
            }
        }
    })

    // 删除数据  点击删除，不是删除a所在的元素，而是删除在本地存储里面的数据
    $('ol,ul').on('click', 'a', function () {
        // alert(11);
        // 获取本地存储的数据
        var data = getData();
        // 修改数据
        // console.log($(this).attr('data-id'));
        // console.log($(this));
        var index = $(this).attr('data-id');
        // data 是数组格式，利用数组方法splice(从第几个元素开始，删掉几个元素)
        data.splice(index, 1);

        // 保存到本地存储
        saveData(data);
        // 渲染页面
        load();
    })

    // 正在进行和已经完成选项操作
    $('ol,ul').on('click', 'input', function () {
        // alert(11);
        // 读取本地存储数据
        var data = getData();
        // 修改数据
        // 因为a绑定了索引号，input跟a是兄弟
        var index = $(this).siblings('a').attr('data-id');
        // console.log(index);
        // data[?].done = ?
        data[index].done = $(this).prop('checked');
        // console.log(data);
        // 保存数据
        saveData(data);
        // 渲染页面
        load();
    })

    // 读取本地存储的数据
    function getData() {
        var data = localStorage.getItem('todolist');
        if (data !== null) {
            return JSON.parse(data);
        } else {
            return [];
        }
    }

    // 保存本地存储的数据
    function saveData(data) {
        localStorage.setItem('todolist', JSON.stringify(data));
    }

    // 渲染加载数据
    function load() {
        // 读取本地存储的数据
        var data = getData();
        // 渲染数据之前，先将ol原本的内容清空
        $('ol,ul').empty();

        var todoCount = 0; //正在进行的个数
        var doneCount = 0; //已经完成的个数
        // 对本地存储的的数据进行遍历
        $.each(data, function (i, e) {
            // console.log(e);
            if (e.done) {
                $('ul').prepend('<li><input type="checkbox" checked><p>' + e.title + '</p><a href="javascript:;" data-id=' + i + ' ></a></li>');
                doneCount++;
            } else {
                $('ol').prepend('<li><input type="checkbox"><p>' + e.title + '</p><a href="javascript:;" data-id=' + i + ' ></a></li>');
                todoCount++;
            }
        })
        $('#todocount').text(todoCount);
        $('#donecount').text(doneCount);
    }
})