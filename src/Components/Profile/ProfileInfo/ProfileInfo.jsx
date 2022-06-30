import styles from "./ProfileInfo.module.css";
import profileBG from "./../../../assets/images/prifile_bg-01.jpg";
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader />
  }

  return (
    <div>
      <div>
        <img className={styles.profileBg}
          src={profileBG}
          alt=""
        />
      </div>
      <div className={styles.descriptionBlock}>
        <img src={props.profile.photos.large} />     
        ava + description
        </div>
    </div>
  );
};

export default ProfileInfo;
