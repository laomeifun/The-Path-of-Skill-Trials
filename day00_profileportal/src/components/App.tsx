import '../styles/App.css'


import Card from './card';

function App() {
  return (
    <div className="app-container">
      <Card 
        title="个人信息卡片" 
        content="这是一个示例卡片，展示了用户信息。" 
        avatarProps={{
          name: "李四",
          title: "产品经理",
          imageUrl: "/src/assets/react.svg",
          size: "large"
        }}
      />
      <Card 
        title="个人信息卡片" 
        content="这是一个示例卡片，展示了用户信息。" 
        avatarProps={{
          name: "张三",
          title: "前端开发工程师",
          imageUrl: "/src/assets/react.svg",
          size: "large"
        }}
      />
    </div>
  );
}

export default App;
