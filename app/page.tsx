import Link from "next/link";
import styles from "./top.module.css";

export default async function Home() {
  // ゴッホの作品
  const arts = [459123,436533,436535,436532,436528,437984,436529,459193,438722,436531,436527,436534,437980,437998,336327,436526,436536,436530,436524,436525,849052,849054,849055,336318,335537,335536,335538,849056,893379]
  const next_id = arts[Math.floor(Math.random() * arts.length)]

  return (
    <main>
      <div className={styles.container}>
        <h1 className={styles.title}>Artguessr</h1>
        <div className={styles.content}>
          <h2>Artguessrとは？</h2>
          <p>Artguessrとは、作品から製作年を予想するゲームです。</p>
        </div>
        <div className={styles.btn}>
          <Link href={`/question/${next_id}`} className={styles.btnLink}>問題に進む</Link>
        </div>
      </div>
    </main>
  );
}
