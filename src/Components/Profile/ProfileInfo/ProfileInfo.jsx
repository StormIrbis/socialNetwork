import styles from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img
          src="https://marketinginsidergroup.com/wp-content/uploads/2021/08/iStock-1056779942.jpg"
          alt=""
        />
      </div>
      <div className={styles.descriptionBlock}>ava + description</div>
    </div>
  );
};

export default ProfileInfo;
