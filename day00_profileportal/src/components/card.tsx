import Avatar from './avatar';
import '../styles/card.css';

// 定义 Card 组件的 props 类型
interface CardProps {
  title?: string;
  content?: string;
  avatarProps?: {
    name: string;
    title: string;
    imageUrl: string;
    size?: 'small' | 'medium' | 'large';
  };
  className?: string;
}

/**
 * Card 组件 - 显示带有头像的卡片
 * @param props - 组件属性
 * @returns 卡片组件
 */
function Card({
  title = "Card Title",
  content = "This is a card component.",
  avatarProps = {
    name: "张三",
    title: "前端开发工程师",
    imageUrl: "/src/assets/react.svg",
    size: "medium"
  },
  className = ""
}: CardProps = {}){
  return (
    <div className={`card ${className}`}>
      {avatarProps && (
        <Avatar 
          name={avatarProps.name}
          title={avatarProps.title}
          imageUrl={avatarProps.imageUrl}
          size={avatarProps.size}
        />
      )}
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Card;