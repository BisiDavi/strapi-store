import { ResponsiveImageType } from "react-datocms";

export interface PagecontainerProps {
    children: any;
    title: string | string[];
    product?: boolean;
    metaTags?: any;
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
    asLink?: boolean;
    btnClassName?: string;
}

export interface HamburgerProps {
    className: string;
    btnClick: () => void;
    right?: boolean;
}

export interface CollectionViewProps {
    collection: Record<"img" | "name" | "text", string>;
}

export interface IProduct {
    id: string;
    title: string;
    price: number;
    image: {
        url: string;
        responsiveImage: ResponsiveImageType;
    };
    slug?: string;
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
}
