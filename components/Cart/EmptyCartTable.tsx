import Link from 'next/link';
import EmptyCart from './EmptyCart';
import styles from '@styles/cart.module.css';

export default function EmptyCartTable() {
    return (
        <span className={styles.emptycart}>
            <EmptyCart />
            <Link href='/collection/all' passHref>
                <a>View Wigs</a>
            </Link>
        </span>
    );
}
