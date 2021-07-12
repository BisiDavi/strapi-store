import { IProduct } from "../../types";
import Product from "./Product";

interface productsProps {
    products: IProduct[];
}

const ProductsList: FC<productsProps> = ({ products }): JSX.Element => {
    return (
        <div className="storeProducts">
            <div className="products">
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>

            <style jsx>{`
                .products {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-gap: 35px;
                    padding: 0px 30px;
                    margin: 20px 0px;
                }
                @media (max-width: 768px) {
                    .products {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProductsList;
