// 项目的根组件
// app -> index.js -> public/index.html(root) 
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

function  message(){
  return 'this is message'
}
function App() {
  return (
    <div className="App">
      {/* 渲染列表 */}
      {/* 循环哪个结构就返回哪个结构 */}
      {/* 加上一个独一无二的key */}
      {/* key的作用：react框架的内部使用 提升更新性能的 */}
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
    </div>
  );
}

export default App;



