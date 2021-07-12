import Head from 'next/head';
import Image from 'next/image';
import styles from './loader.module.css';

export default function Loading() {
    return (
        <div className={styles.loaderContainer}>
            <Head>
                <title>loading... | Jenjen&#39;s Luxury hair & beauty</title>
            </Head>
            <span className={styles.logoContainer}>
                <Image
                    className={styles.logo}
                    src='/logo.jpg'
                    height={150}
                    width={150}
                    alt='logo'
                />
            </span>
        </div>
    );
}
