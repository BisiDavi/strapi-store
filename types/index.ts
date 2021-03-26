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
    height?: string;
    styles?: {};
    color?: string;
    asLink?: boolean;
    btnClassName?: string;
}

export interface HamburgerProps {
    className: string;
    btnClick: () => void;
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
