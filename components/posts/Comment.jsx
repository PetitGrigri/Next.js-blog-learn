import styles from './Comment.module.sass'

export default function Comment ({body, email, id, name}) {
  return (
    <div className={styles.container}>
        <div className={styles.user}>
          <span className={styles.name}>{name}</span> 
          <span className={styles.email}>({email})</span>
        </div>
        <div className={styles.body}>{body}</div>
    </div>
  )
};