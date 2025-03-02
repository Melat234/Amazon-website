import React from "react";
import { CategoryInfos } from "./CategoryFullInfos";
import CategoryCard from "./CategoryCard";
import styles from "./category.module.css";
function Category() {
  return (
    <section className={styles.category_container}>
      {CategoryInfos?.map((infos) => {
       return <CategoryCard  data={infos} />
})}
    </section>
  );
}

export default Category;
