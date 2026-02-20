// 项目的根组件
// app -> index.js -> public/index.html(root) 

import React, { useState } from 'react';
const count =100
const list=[
{
  id:1,
  name:'tom'
}
,
{
  id:2,
  name:'tom1'
},
{
  id:3,
  name:'tom1'
}
]
const islogin=true

const articleType=3 // 1 2 3


function getarticleType(){
  if(articleType===1){
    return 'this is article'
  }else if(articleType===2){
    return 'this is article2'
  }else{
    return 'this is article3'
  }
}
function  message(){
  return 'this is message'
}


const handleClick=(name, e)=>{
  console.log('this is click',name,e)
}
  
// 定义组件
function Button(){
  return <button>this is button</button>
}

// useState实现一个计数器按钮

function App() {
  const [count1, setCount] = useState(0);
  const handleClick1 = () => {
    setCount(count1 + 1);
  };
  // count1:自增变量
  // setCount:更新变量的方法
  return (
    


    <div className="App">
      {/* 渲染列表 */}
      {/* 循环哪个结构就返回哪个结构 */}
      {/* 加上一个独一无二的key */}
      {/* key的作用：react框架的内部使用 提升更新性能的 */}
      {/* 逻辑与运算 */}
      {islogin && <div>this is login</div>} 
      {islogin ? <div>this is login</div>:<div>this is not login</div>} 
      {/* 分支渲染 */}
      {getarticleType()}
      <ul>
        {
          list.map(item=>
            <li key={item.id}>{item.name}</li>)
        }
        </  ul  >
      this is App
       {/*  引号传递字符串*/}
      {'this is message'}
      {/* 识别js变量 */}
      {count}
      {/* 函数调用 */}
      {message()}
      {/*方法调用 */}
       {new Date().getTime()}
       {/* 使用js对象 */}
       <div style={{color:'red'}}>  
         this is div
       </div>
       {/* 调用函数渲染不同的模板 */}
       {getarticleType()}

       {/* 传递自定义参数 */}
       <div>
         <button onClick={(e) => handleClick('jack', e)}>click</button>
       </div>

       {/* 渲染组件 */}
       <Button/>
       <Button></Button>

       {/* useState状态提升 */}
       <div>
         <button onClick={handleClick1}>{count1}</button>
         
       </div>
    </div>
  );
}
export default App;
