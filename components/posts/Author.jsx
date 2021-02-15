import { articleConsummerHook } from "../../store/provider/ArticleProvider"
import styles from "./Author.module.sass";

export default function Author() {
  const [{author}] = articleConsummerHook();
  const {loading, error, data:{ name, email }} = author;

  return loading === false && error === false ? (
    <address className={styles.container}>
      This article is writen by {name}
      <a href={`mailto:${email}`} className={styles.email}>{email}</a>
    </address>

  ) : null;
}