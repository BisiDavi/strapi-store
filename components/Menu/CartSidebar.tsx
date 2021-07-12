import Link from 'next/link';
import Sidebar from './Sidebar';
import { Button } from '..';
import ShowSidebarCart from '@components/Cart/ShowSidebarCart';
import { EmptyCart } from '../Cart';
import { getTotalAmount } from '@utils/.';
import { useCart, useCurrency } from '@hooks/.';
import styles from '@styles/CartSidebar.module.css';
import { CartSidebarProps } from '../../types';

export default function CartSidebar({
    onClose,
    btnClassName,
    pushRight,
}: CartSidebarProps): JSX.Element {
    const { products } = useCart();
    const { priceExchange, symbol } = useCurrency();

    const cartStyles = pushRight && { marginRight: '0px !important' };
    return (
        <div style={cartStyles} className='div'>
            <Sidebar onClose={onClose} btnClassName={btnClassName} right>
                {products.length > 0 ? (
                    <div className={`content ${styles.sidebarContent}`}>
                        <ShowSidebarCart products={products} />
                        <div className='subtotal'>
                            <h3>Subtotal</h3>
                            <p className={styles.price}>
                                {symbol}
                                {priceExchange(getTotalAmount(products))}
                            </p>
                        </div>
                        <p className='shipping'>
                            Tax included,{' '}
                            <Link href='/policy/delivery-policy' passHref>
                                <a>Shipping</a>
                            </Link>
                            calculated at checkout.
                        </p>
                        <Button
                            text='Proceed'
                            bgColor='black'
                            color='white'
                            btnClassName={styles.checkout}
                            width='30%'
                            height='50px'
                            linkTo='/cart'
                            asLink
                        />
                        <style jsx>{`
                            .subtotal {
                                text-align: center;
                                display: flex;
                                align-items: center;
                                margin: 15px 0px;
                                justify-content: space-evenly;
                            }
                            .subtotal h3 {
                                font-size: 25px;
                            }
                            .subtotal p {
                                font-size: 20px;
                                margin: 0px;
                            }
                            form {
                                display: flex;
                                flex-direction: column;
                            }
                            form label {
                                font-size: 14px;
                                font-weight: bold;
                                margin: 20px 10px;
                                text-align: center;
                            }
                            textarea {
                                overflow: auto;
                                resize: vertical;
                                height: 100px;
                            }
                            .seller-instruction {
                                color: black;
                                margin: auto;
                                display: flex;
                                border: 1px solid #d1d1d1;
                                justify-content: center;
                                padding: 0px 0px 35px 0px;
                                background-color: #f7f7f7;
                            }
                            p {
                                color: black;
                                text-align: center;
                            }
                            p a {
                                color: pink;
                                margin: 0px 5px;
                                text-decoration: underline;
                            }
                            @media (max-width: 500px) {
                                textarea {
                                    margin: 0px 20px;
                                }
                                p.shipping {
                                    margin: 10px 5px;
                                }
                                p.shipping,
                                p.shipping a {
                                    font-size: 14px;
                                    text-decoration: none;
                                }
                            }
                        `}</style>
                    </div>
                ) : (
                    <EmptyCart />
                )}
            </Sidebar>
        </div>
    );
}
