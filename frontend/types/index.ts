export interface PagecontainerProps {
    children: any;
    title: string | string[];
    product?: boolean;
}

export interface ButtonProps {
    linkTo?: string;
    text: string;
    bgColor: string;
    width: string;
    height: string;
    styles: {};
    asLink?: boolean;
}

export interface HamburgerProps {
    className: string;
    btnClick: () => void;
}

export interface CollectionViewProps {
    collection: Record<"img" | "name" | "text", string>;
}

export interface IProduct {
    title: string;
    price: number;
    image: {
        url: string;
    };
    slug?: string;
}

export interface ProductProps {
    product: IProduct;
}
