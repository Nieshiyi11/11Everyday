//异步编程：调用Reddit的api
async function getHotList() { //async 标记这个函数是异步的
  try {//try包裹可能出错的代码  因为调用api 如果网络出现了问题就会出错！！
    //只有async函数里面才能用 await
    //fetch(): 浏览器内置的请求工具 向URL发送GET请求
    //?limit=15：URL参数告诉 Reddit"我只要15条数据"
    //注意！！fetch()返回一个Promise  而不是直接返回数据！！
    //await表示暂停在这里 等服务器响应回来后再继续
    //这里定义的response变量拿到的是一个"响应对象" 包含状态码、头信息等
    //但此时数据还没被解析 还是原始格式
    const response = await fetch('https://www.reddit.com/r/popular/hot.json?limit=15');
    //所以此时就要开始解析数据
    //json()：把响应体里的JSON文本解析成JS对象 并且把解析好的对象存入result变量
    //由于解析也需要时间 所以也是异步（要带上await）
    const result = await response.json();
    //result.data.children:
    //需要根据控制台输出console(result);的结构才能写！!
    //打开F12控制台 点开输出的对象 就能看到数据一层层嵌套的结构 然后根据结构写出取值的路径
    const posts = result.data.children; //posts存储了含有15个Reddit帖子的数组
    //找到.host-list里的<ul>元素
    const ul = document.querySelector('.hot-list');
    //清空<ul>里原来的内容（写的那5条假数据）innerHTML=''相当于把里面所有HTML都删掉
    ul.innerHTML = '';
    //forEach循环遍历数组 对每个元素执行一次函数
    posts.forEach((post, index) => {
      const li = document.createElement('li');  //创建一个<li>元素 但此时还有加在<ul>上去
      li.innerHTML = `<span class="rank">${index + 1}</span>
      <a href="https://reddit.com${post.data.permalink}" target="_blank">${post.data.title}</a>`;
      ul.appendChild(li);  //把创建的<li>加在<ul>上去
    });
  } catch (error) {//如果try里面任何一行出错 就跳到这里
    //error 是错误对象 包含错误信息
    console.error('热搜加载失败：', error);
    //常见的错误：网络断了、URL 错了、JSON 格式不对、数据结构变了
    //用户看不到这个 只有开发者在浏览器里按F12才能看到
  }
}
//调用函数 开始执行
getHotList();
