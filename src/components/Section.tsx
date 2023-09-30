import React, { FC, PropsWithChildren } from "react";

const Section: FC<PropsWithChildren<{title: string}>> = ({ title, children }) => {
  return (
    <section style={styles.container}>
      <h4 style={styles.title}>{title}</h4>
      <article style={styles.content}>{children}</article>
    </section>
  );
};

const styles = {
  title: {
    borderRadius: "20px 20px 0px 0px",
    padding: "32px",
    background: "#D0F7FA",
    color: "black",
    fontFamily: "Poppins, sans-serif",
    fontSize: "25px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "114%",
    margin: 0,
  },
  content: {
    padding: "32px",
    background: "white",
    borderRadius: "0px 0px 20px 20px",
  },
  container: {
    maxWidth: 595,
    boxShadow: "3px 3px 14px 0px rgba(190, 190, 190, 0.30)",
    borderRadius: "0px 0px 20px 20px",
    marginBottom: 60,
  },
};

export default Section;
