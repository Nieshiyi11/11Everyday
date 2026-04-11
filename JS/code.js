function addCodeBlock(){
    //创建代码容器code-container
    //.creatElement() 创建一个新的<div>元素
    //就像C里malloc一块内存 此时还没挂到页面上!!
    const block = document.createElement('div');
    block.className = 'code-block';  //给div加上class 使css对应样式生效
    //插入HTML内容
    block.innerHTML=`
    <div class="code-header">
        <select class="lang-select">
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="csharp">C#</option>
            <option value="javascript">javascript</option>
            <option value="html">HTML</option>
            <option value="css">CSS</option>
        </select>
        <button class="delete-btn" onclick="deleteBlock(this)">❌ 删除</button>
    </div>
    <textarea class="code-input" placeholder="请在此处写入代码..."></textarea>
    `;
    //this指向这个按钮自己 传给deleteBlock()函数用


    //添加到页面
    //getElementById 找到id="codeContainer"的容器
    //appendChild 把刚创建的block添加到容器的末尾
    document.getElementById('codeContainer').appendChild(block);
}
function deleteBlock(btn){
    //btn是删除按钮
    //btn.closest('.code-block')往上找到最近的.code-block祖先元素
    btn.closest('.code-block').remove();
}
