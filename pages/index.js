import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.rotating_text_container}>
        <div className={styles.rotating_text_box}>
          <h1>Meet banking that keeps pace with you</h1>
          <div className={styles.rotating_text_tagline} id="toggle-animation">
            <p>Manage your money like you</p>
            <div
              class={`${styles.rotatingText_styles} 
              ${styles.cubespinner} 
              ${styles.animate_flipper}`}
            >
              <div class={styles.face1}>shop for clothes</div>
              <div class={styles.face2}>chat with friends</div>
              <div class={styles.face3}>order food</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
