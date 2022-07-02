console.log('start')
// 高亮安全处理
hljs.addPlugin({
  'after:highlightElement': ({el}) => {
      el.innerHTML = el.innerHTML.replaceAll(
          /^([\s]*)&lt;&lt;([^:\s]+?)&gt;&gt;([\s]*)$/mg,
          '$1<span class="lp-ref" href="#lp-$2">$2</span>$3'
      );
  }
});
// hljs.highlightAll();
let style = document.querySelector('#style')
let html = document.querySelector('#html')
let string = `
你好，我叫小朱
接下来我演示一下我的前端功底
首先我要准备一个div
<code>
#div1{
  border: 1px solid red;
  width: 200px;
  height: 200px;
} /* 我们把代码块也顺便高亮一下吧 */
</code>
接下来我把 div 变成一个八卦图
注意看好了
首先，把 div 变成一个圆
<code>
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
</code>
八卦是阴阳形成的
一黑一白
<code>
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
</code>
加两个神秘的小球
<code>
#div1::before{
  width: 100px;
  height: 100px;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #000;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
  width: 100px;
  height: 100px;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}
</code>
`
let htmlContent = ""
let styleContent = ""
let flagStyleContent = 0
let dynamicClass = ''
let n = 0

let step =() => {
  console.log('step start')
  window.scrollTo(0, 99999);
  html.scrollTo(0, 99999);
  setTimeout(()=> {
    if (string.substring(n, n + 6) == "<code>") {
      flagStyleContent = 1
      dynamicClass = `dynamic-${n}`
      n += 7
      htmlContent += `<pre class="hljs ${dynamicClass}"><code>`
      step()
    } else if (string.substring(n, n + 7) == "</code>"){
      flagStyleContent = 0
      n += 7
      htmlContent += `</code></pre>`
      html.innerHTML = htmlContent
      dynamic = document.querySelector(`.${dynamicClass}`)
      hljs.highlightElement(dynamic)
      // highlight.js高亮是会改变html元素，需要保存改变
      htmlContent = html.innerHTML
    }

    if (string[n] === '\n' && !flagStyleContent){
      htmlContent += "<br>"
    } else {
      htmlContent += string[n]
    }

    if (flagStyleContent) {
      styleContent += string[n]
      style.innerHTML = styleContent
    }
    
    // console.log(`styleContent: ${styleContent}`)
    // console.log(`htmlContent: ${htmlContent}`)
    html.innerHTML = htmlContent
    if (n < string.length - 1) {
      n += 1
      step()
    }
  }, 1)
}

step()