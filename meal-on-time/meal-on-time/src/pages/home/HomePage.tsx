import Title from "../../components/Title";
import Card, { CardProps } from "../../components/Card";
import { useState } from "react";
import './HomePage.css';

// const data: Array<CardProps> = [];

const data: Array<CardProps> = [
    {
        title: "Greek Salad",
        price: 30.5,
        description: "Great Salad",
        image: "https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220__340.jpg",
        rating: 4,
    },
    {
        title: "Pad Thai",
        price: 42,
        description: "Yumi yumi",
        image: "https://cdn.pixabay.com/photo/2014/11/25/14/55/noodles-545259__340.jpg ",
        rating: 5,
    },
    {
        title: "Fried Chicken",
        price: 98.60,
        description: "I like it",
        image: "https://cdn.pixabay.com/photo/2014/01/24/04/05/fried-chicken-250863__340.jpg",
        rating: 3,
    }
];

function HomePage() {

    // const [count2, setCount2] = useState(1);
    const [displayMode, setDisplayMode] = useState('grid');

    function handleDisplayChange(mode: string) {
        setDisplayMode(mode);
    }

    return (
        <>
            <Title
                text="Order Delivery and Takaway"
            />

            <div className="px-5">
                <button
                    onClick={() => handleDisplayChange('grid')}
                    className="btn btn-light mx-1"
                >
                    <i className="bi bi-grid-3x3-gap-fill"></i>
                </button>
                <button
                    onClick={() => handleDisplayChange('list')}
                    className="btn btn-light mx-1"
                >
                    <i className="bi bi-list-ul"></i>
                </button>
            </div>

            <div className={displayMode}>
                {
                    data.length === 0 && <div>No dishes</div>
                }
                {
                    data.map(cardItem =>
                        <Card
                            title={cardItem.title}
                            image={cardItem.image}
                            description={cardItem.description}
                            price={cardItem.price}
                            rating={cardItem.rating}
                        />
                    )
                }
            </div>
        </>
    );
}

export default HomePage;