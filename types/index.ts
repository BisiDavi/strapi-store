import { ResponsiveImageType } from 'react-datocms';

export interface PagecontainerProps {
    children: any;
    title: string | string[];
    product?: boolean;
    metaTags?: any;
    productMetaTags?: any;
    className?: string;
}

export interface DropdownButtonProps {
    content: {
        title: string;
        items: string[];
    };
}

export interface ButtonProps {
    linkTo?: string;
    text: string;
    bgColor?: string;
    width?: string;
    btnClick?: () => void;
    height?: string;
    styles?: {};
    color?: string;
    disabled?: boolean;
    asLink?: boolean;
    btnClassName?: string;
}

export interface HamburgerProps {
    className: string;
    btnClick: () => void;
    right?: boolean;
}

export interface CollectionViewProps {
    collection: Record<'img' | 'name' | 'text' | 'link', string>;
}

export interface IProduct {
    id: string;
    title: string;
    price: number;
    formerPrice?: number;
    image: {
        url: string;
        responsiveImage: ResponsiveImageType;
    };
    slug?: string;
    description?: string;
    wigStatus: string;
}

export interface ProductProps {
    product: IProduct;
}

export interface menuProps {
    name: string;
    link: string;
}

export interface sidebarProps {
    onClose: () => void;
    btnClassName: string;
    right?: boolean;
}

export interface CartSidebarProps extends sidebarProps {
    pushRight?: boolean;
}

export interface ProductpageProps {
    product: any;
    seoData: {};
    otherProducts: any;
}

export interface AllWigsProps {
    products: {
        allProducts: [];
    };
}

export interface HomeProps {
    productData: any;
    seoData: {};
    query: any;
    isConnected: any;
    currencyExchangeRate?: any;
}

export interface shippingAddressProps {
    session: {
        user: {
            email: string;
            name: string;
        };
    };
}

export interface ProductDetailProps {
    product: {
        id: string;
        productQuantity: string;
        title: string;
        price: number;
        image: {
            responsiveImage: ResponsiveImageType;
        };
        description: string;
        formerPrice: string;
    };
}

type shippingMethodType = {
    name: string;
    label: string;
};
export interface shippingMethodArray {
    others: shippingMethodType[];
    nigeria: shippingMethodType[];
}

export interface NotifyProps {
    variant: string;
    text: string;
}

export interface PaypalProps {
    amount: string;
    hasPaid: (payment: boolean) => void;
    checkoutDetails?: any;
    setCheckoutDetails: any;
}

export interface SuccessModalProps {
    modal: boolean;
    onHide: () => void;
    content?: {
        payer: {
            name: {
                given_name;
            };
        };
    };
}

export interface DiscountProps {
    discount: string;
}
