import { useState } from "react";

export interface CardProps {
    title: string;
    image: string;
    description: string;
    price: number;
    rating: number;
}

function Card({
    title,
    image,
    description,
    price,
    rating,
}: CardProps) {
    const [total, setTotal] = useState(price * 1.17);

    return (
        <div className="card m-3">
            <img src={image} className="card-img-top" alt="" />
            <div className="card-body p-3">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    {description}
                </p>
                <p className="card-text">${total}</p>
                <p className="card-text">
                    rating: {rating}
                    <i className="bi bi-star"></i>
                </p>
                <a href="#" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
    );
}

export default Card;