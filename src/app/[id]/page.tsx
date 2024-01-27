import classNames from "classnames";
import "github-markdown-css/github-markdown-light.css";
import { getAllPostIds, getPostData } from "../../lib/markdown";
import styles from "./id.module.scss";

export default async function Post(props: { params: { id: string } }) {
  const content = await getPostData(props.params.id);

  return (
    <div className={styles.wrapper}>
      <div
        className={classNames("markdown-body", styles.content)}
        dangerouslySetInnerHTML={{ __html: content.contentHtml }}
      />
    </div>
  );
}

export async function generateStaticParams() {
  const paths = getAllPostIds();

  return paths.map((path) => path.params);
}
