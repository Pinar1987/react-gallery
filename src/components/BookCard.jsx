
const BookCard = ({title, image, price}) => {
    return (
        <div className="book-card">
            <img src={image} alt={title} className="book-image"></img>
            <h3 className="book-title">{title}</h3>
            <p className="book-price">${price}</p>
        </div>
    )
}
export default BookCard