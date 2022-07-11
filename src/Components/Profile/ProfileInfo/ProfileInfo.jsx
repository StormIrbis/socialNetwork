import styles from "./ProfileInfo.module.css";
import profileBG from "./../../../assets/images/prifile_bg-01.jpg";
import Preloader from "../../Common/Preloader/Preloader";
import noUserPhoto from "../../../assets/images/no_photo.png"
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
        <img src= {props.profile.photos.large != null ? props.profile.photos.large : noUserPhoto} />  
        <p>description</p>
        </div>
    </div>
  );
};

export default ProfileInfo;