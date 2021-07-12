import { Pagelayout } from '../../containers';

export default function PrivacyPolicy() {
    return (
        <Pagelayout title='Privacy Policy'>
            <>
                <h1 className='text-center'>Our Privacy Policies</h1>
                <div className='content px-3 my-3 my-lg-5 px-lg-5'>
                    <p>
                        This Policy explains what happens to any personal data
                        that you provide to us, or that we collect from you
                        whilst you visit our site and how we use cookies on this
                        website. We do update this policy from time to time so
                        please do review this policy regularly.
                    </p>
                    <p>
                        {' '}
                        Jenjen Luxury wigs are committed to preserving the
                        privacy of our visitors. Any information provided will
                        be regulated In accordance with the Data Protection Act
                        1998.{' '}
                    </p>
                    <p>
                        {' '}
                        We will not disclose any personal information to any
                        other party without consent and will only use your
                        information for the purposes of transactions made
                        through our website and fraud prevention.
                    </p>
                    <p>
                        {' '}
                        In running and maintaining our website we may collect
                        and process the following data:{' '}
                    </p>
                    <li>
                        Information about your use of our site including details
                        of your visits such as pages viewed and the resources
                        that you access. Such information includes traffic data,
                        location data and other communication data.
                    </li>
                    <li>
                        {' '}
                        Information provided voluntarily by you. For example,
                        when you register for information or make a purchase.
                    </li>
                    <li>
                        {' '}
                        Information that you provide when you communicate with
                        us by any means{' '}
                    </li>
                    <p>
                        Cookies provide information regarding the computer used
                        by a visitor. We may use cookies where appropriate to
                        gather information about your computer in order to
                        assist us in improving our website.
                    </p>
                    <p>
                        {' '}
                        We may gather information about your general internet
                        use by using the cookie. Where used, these cookies are
                        downloaded to your computer and stored on the computer’s
                        hard drive. Such information will not identify you
                        personally; it is statistical data which does not
                        identify any personal details whatsoever.
                    </p>
                    <p>
                        {' '}
                        We use the information that we collect from you to
                        provide our services to you. In addition to this we may
                        use the information for one or more of the following
                        purposes:{' '}
                    </p>
                    <li>
                        {' '}
                        To provide information to you that you request from us
                        relating to our products or services.
                    </li>
                    <li>
                        {' '}
                        To provide information to you relating to other products
                        that may be of interest to you. Such additional
                        information will only be provided where you have
                        consented to receive such information.
                    </li>
                    <li>
                        {' '}
                        To inform you of any changes to our website, services or
                        goods and products.
                    </li>
                    <p>
                        {' '}
                        We will not disclose your personal information to any
                        other party other than in accordance with this Privacy
                        Policy and in the circumstances detailed below:{' '}
                    </p>
                    <li>
                        {' '}
                        In the event that we sell any or all of our business to
                        the buyer.{' '}
                    </li>
                    <li>
                        Where we are legally required by law to disclose your
                        personal information.{' '}
                    </li>
                    <li>
                        To further fraud protection and reduce the risk of
                        fraud.
                    </li>
                </div>
                <style jsx>{`
                    h1.text-center {
                        font-weight: bold;
                    }
                    @media (max-width: 768px) {
                        h1.text-center {
                            font-size: 23px;
                        }
                    }
                `}</style>
            </>
        </Pagelayout>
    );
}
