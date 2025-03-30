import '../styles/avatar.css';

// 定义 Avatar 组件的 props 类型
interface AvatarProps {
  name: string;
  title: string;
  imageUrl: string;
  size?: 'small' | 'medium' | 'large';
}

/**
 * Avatar 组件 - 显示用户头像、姓名和职位
 * @param props - 组件属性
 * @returns Avatar 组件
 */
function Avatar({ name, title, imageUrl, size = 'medium' }: AvatarProps) {
  return (
    <div className={`avatar avatar-${size}`}>
      <img src={imageUrl} alt={`${name}的头像`} />
      <h2>{name}</h2>
      <p>{title}</p>
    </div>
  );
}

export default Avatar;
