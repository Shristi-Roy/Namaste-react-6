import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
    // It receives a prop called resData, which is an array of restaurant data.
    return (
        resData.map((data) => {
            const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, sla } = data.info;
            const uniqueKey = data.restaurantId;

// not using key (is not acceptable) >>>>>> index as a key >>>>> unique key/id (best practices)

            return (
                <div className='res-card' style={{ backgroundColor: "#f0f0f0" }} key={uniqueKey}>
                    <img
                        className='res-logo'
                        alt='res-logo'
                        src={CDN_URL+ cloudinaryImageId}
                        key={uniqueKey}
                    />
                    <h3>{name}</h3>
                    <h4>{cuisines.join(" , ")}</h4>
                    <h4>{avgRating}</h4>
                    <h4>{costForTwo}</h4>
                    <h4>{sla.deliveryTime} minutes</h4>
                </div>
            );
        })
    );
};

export default RestaurantCard;

