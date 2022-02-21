import { Icon } from "@iconify/react";
import Logo from "../../assets/logo.png";
import styles from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className={styles.footerContainer}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogoData}>
            <div className={styles.footerLogoImg}>
              <img src={Logo} alt="logo" className={styles.footerLogo} />
            </div>
            <div className={styles.footerLogoInfo}>
              <span> The UX Library </span>
              <br/>
              <span> Community curated design content & discussion </span>
            </div>
          </div>
          <div className={styles.footerSocialMidiaInfo}>
            <div className={styles.footerSocialMidiaItem}>
              <a href="https://www.facebook.com/theuxlibrary">
                <Icon
                  icon="el:facebook"
                  className={styles.footerFacebookIcon}
                />
              </a>
              <span>Facebook</span>
            </div>
            <div className={styles.footerSocialMidiaItem}>
              <a href="https://www.facebook.com/theuxlibrary">
                <Icon
                  icon="fa:twitter-square"
                  className={styles.footerTwitterIcon}
                />
              </a>
              <span>Twitter</span>
            </div>
            <div className={styles.footerOthers}>
              <div className={styles.footerInfo}>
                <span>About</span>
                <span>Contact</span>
                <span>Sign in</span>
              </div>
              <div className={styles.footerCopyright}>
                <span>© 2014 The UX Library</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
