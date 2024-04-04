import styles from "./page.module.css";

export default async function Home() {
  const artData = await fetch("https://collectionapi.metmuseum.org/public/collection/v1/objects/436532")
                              .then((response) => response.json())

  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.title}>Artguessr</h1>
        <div className={styles.content}>
          <div className={styles.artImageContainer}>
            <img
              className={styles.artImage}
              src={artData.primaryImage}
              alt={artData.title}
            />
          </div>
          <p>タイトル: {artData.title}</p>
          <p>制作年: {artData.objectDate}</p>
          <p>作者: {artData.artistDisplayName}</p>
          <p>画像URL: {artData.primaryImage}</p>
        </div>
      </div>
    </main>
  );
}
