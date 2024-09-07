import styles from "./page.module.css";
import QuoteView from "./views/quote-view/quote-view";

export default function Root() {
  return (
    <div className={styles.root}>
      <QuoteView />
    </div>
  );
}
