import { Pagelayout } from '../../containers';
import { displayList } from './delivery-policy';

const returnConditions = [
    'All orders must be returned in the original packaging.',
    'All returns/exchanges must be made within 72 hours of recorded receipt. ',
    'Exchanges are available for products of an equal value. For exchanges of products with a lesser value, customers will be offered store credit. ',
    'Returns/exchanges where the seal holding the hair extension in place has been removed will be refused.',
];
export default function RefundPolicy() {
    return (
        <Pagelayout title='Refund Policy'>
            <>
                <h1 className='text-center my-4'>Our Refund Policy</h1>
                <div className='content px-3 mb-5'>
                    <p>
                        Due to the nature of our products,
                        <b> refunds are prohibited and all sales are final</b>.
                    </p>
                    <div className='conditions'>
                        {displayList(returnConditions)}
                    </div>
                    <div className='note'>
                        <b>Note:</b>
                        <p>
                            Customers will be responsible for the shipping and
                            handling costs of their return/exchange, therefore
                            we strongly advise sending parcels through a tracked
                            courier service, since we will not be liable for any
                            lost items.
                        </p>
                        <p>
                            *Customised orders cannot be returned or exchanged
                            under any circumstance.
                        </p>
                    </div>
                    <div className='cancellation'>
                        <h4>Cancellations</h4>
                        <p>
                            Orders may be cancelled provided that they have not
                            yet been dispatched. If you would like to cancel
                            your order please contact us via email at
                            info@Jenjenluxurywigs.com Please do this as soon as
                            possible in order to ensure your cancellation is
                            successful.
                        </p>
                    </div>
                </div>
                <style jsx>{`
                    .content,
                    h1 {
                        font-family: 'Montserrat', sans-serif;
                    }
                    @media (max-width: 500px) {
                        h1 {
                            font-size: 22px;
                        }
                    }
                `}</style>
            </>
        </Pagelayout>
    );
}
