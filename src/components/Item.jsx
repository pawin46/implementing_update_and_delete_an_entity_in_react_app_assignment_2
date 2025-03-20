import "react";
import PropTypes from "prop-types";
//` eslint-disable-next-line react/prop-types
const Item = ({ item, onDelete }) => {
    return (
        <div className="item">
            <div className="item-details">
                <h3>{item.name}</h3>
                <p>Status: {item.status}</p>
            </div>
            <button 
                className="delete-button"
                onClick={() => onDelete(item.id)}
            >
                Delete
            </button>
        </div>
    );
};
Item.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default Item;