function Card() {
    return (
        <div className="card p-3">
            <img  src="https://cdn.pixabay.com/photo/2017/02/15/10/39/salad-2068220__340.jpg" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  <i className="bi bi-star"></i>
                  Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default Card;