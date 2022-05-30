import styles from "./Post.module.css";
import avatar from "./../../../../avatar.png";

const Post = (props) => {
  return (
    <div>
      <div className={styles.item}>
        <img src={avatar} alt="" />
        <p>{props.message}</p>
        <p><span>{props.likesCount} </span><span>like</span></p>
      </div>
    </div>
  );
};

export default Post;
