"use client";

import gsap from "gsap";
import styles from "./GsapBasics.module.css";
import { useEffect, useRef } from "react";

export function GsapBasics() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 300,
      y: 200,
      duration: 2,
    });
  }, []);

  return (
    <div className={styles.container}>
      <div ref={boxRef} className={styles.box} />
    </div>
  );
}
