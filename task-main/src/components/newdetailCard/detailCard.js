import "./detailCard.css";
import { useParams } from "react-router";

const DetailCard = ({ products }) => {
    const { id } = useParams();
    const product = products.find((product) => product.id === parseInt(id));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="card-detail" >
            <div
                className="product-image"
                style={{
                    background: `url('${product.image}') center/cover no-repeat`,
                }}
            ></div>
            <div className="detail">
                <h1>{product.title}</h1>
                <p>{product.subTitle}</p>
                <p>Price : ${product.price}</p>
            </div>
            
        </div>
    );
};

export default DetailCard;
