import type { MetaFunction } from "@remix-run/node";
import * as styles from "./route.css";

export const meta: MetaFunction = () => {
  return [
    { title: "集合GO" },
    { name: "description", content: "集合場所を決めよう" },
  ];
};

export default function Index() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>集合するなら集合GO</h1>
    </div>
  );
}
