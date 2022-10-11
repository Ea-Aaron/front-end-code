-- 查询评分大于8的书籍
select * from book where score > 8;

-- 查询评分在(5 - 8)之间的书籍,不包含两边的数
select * from book where score > 5 and score < 8;

-- 查询评分[5 - 8] 之间的书籍,包含两边
select * from book where score between 5 and 8; 

-- 查询分类为 小说文学的书籍
select * from book where cataory = '小说文学';

-- 查询葛亮 和 腾讯动漫 两位作者的书籍
select * from book where author = '葛亮' or author = '腾讯动漫';
SELECT * from book WHERE author in ('葛亮','腾讯动漫');

-- 模糊查询
-- 查询跟国有关的书籍
-- % 匹配任意多个任意字符
-- _ 匹配一个任意字符
SELECT * from book WHERE bookname like '%国%';

-- 匹配内容为空的内容
select * from book where bookname is null;

-- 匹配非空的内容
select * from book where bookname is not null;