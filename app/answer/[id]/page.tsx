import Link from "next/link";
import styles from "./answer.module.css";

export default async function Page({ params }: { params: { id: string } }) {
  const param_id = Number(params.id)

  const artData = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${param_id}`)
                              .then((response) => response.json())

  // ゴッホの作品
  const arts = [459123,436533,436535,436532,436528,437984,436529,459193,438722,436531,436527,436534,437980,437998,336327,436526,436536,436530,436524,436525,849052,849054,849055,336318,335537,335536,335538,849056,893379]
  const next_id = arts[Math.floor(Math.random() * arts.length)]

  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.title}>{`答えは・・・${artData.objectDate}年`}</h1>
        <div className={styles.content}>
          <div className={styles.artImageContainer}>
            <img
              className={styles.artImage}
              src={artData.primaryImage}
              alt={artData.title}
            />
          </div>
          <div className={styles.answerDetailContainer}>
            <div className={styles.artImageContent}>
              <p className={styles.answerDetailText}>タイトル： {artData.title}</p>
              <p className={styles.answerDetailText}>制作年： {artData.objectDate}年</p>
              <p className={styles.answerDetailText}>作者： {artData.artistDisplayName}</p>
            </div>
            <div className={styles.btn}>
              <Link href={`/question/${next_id}`} className={styles.btnLink}>次の問題に進む</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
