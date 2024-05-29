import Link from "next/link";
import styles from "./question.module.css";

export default async function Page({ params }: { params: { id: string } }) {
  const param_id = Number(params.id)

  const artData = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${param_id}`)
                              .then((response) => response.json())

  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.title}>いつ製作された作品？</h1>
        <div className={styles.content}>
          <div className={styles.artImageContainer}>
            <img
              className={styles.artImage}
              src={artData.primaryImage}
              alt={artData.title}
            />
          </div>
        </div>
        <div className={styles.btn}>
          <Link href={`/answer/${param_id}`} className={styles.btnLink}>答えに進む</Link>
        </div>
      </div>
    </main>
  );
}
