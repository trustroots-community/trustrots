import Image from "next/image";
import Link from "next/link";
import bareTree from "../../assets/bare-tree.png";
import styles from "./404.module.scss";

const NotFound = () => (
  <div className={styles.wrapper}>
    <Image src={bareTree} alt="bare tree" className={styles.image} />
    <div className={styles.description}>There is nothing here.</div>
    <div>
      <Link href="/">Return to main page.</Link>
    </div>
  </div>
);

export default NotFound;
