import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './loader.module.css';

const Loading = () => {
    return (
        <div className={styles.loaderContainer}>
            <Head>
                <title>loading... | Jenjen's Luxury hair & beauty</title>
            </Head>
            <span className={styles.logoContainer}>
                <Image
                    className={styles.logo}
                    src='/logo.jpg'
                    height={150}
                    width={150}
                />
            </span>
        </div>
    );
};

export default Loading;
