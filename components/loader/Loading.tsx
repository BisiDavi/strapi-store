import React from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./loader.module.css";

const Loading = () => {
    return (
        <div className={styles.loaderContainer}>
            <Head>
                <title>Welcome | Jenjen's Luxury hair & beauty</title>
            </Head>
            <Image
                className={styles.logo}
                src="/logo.jpg"
                height={150}
                width={150}
            />
        </div>
    );
};

export default Loading;
