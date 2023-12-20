import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaces } from "../store/slices/placesSlice";
import { Link } from "react-router-dom";

function Items() {
  const disaptch = useDispatch()
  const items = useSelector((state) => state.places.data);
useEffect(()=>{
  disaptch(fetchPlaces())
},[])

if (items &&  !items.length ) {
    return <p>empty array</p>;
  }
  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 gap-y-16 m-auto md:w-[90%]">
      {items.map((item) => {
        const { name, userId , description,imgs , _id} = item;
        return (
          <Link to={`places/${_id}`} className="item" key={userId}>
            <div className="carousel w-full h-full rounded-md">
              {imgs?.map((singleImg, index) => {
                return (
                  <div
                    key={index}
                    id={`${index}`}
                    className="carousel-item relative w-full"
                  >
                    <img
                      src={singleImg}
                      alt={index}
                      className="w-full object-cover "
                    />
                  </div>
                );
              })}
            </div>
            <h3 className="text-primary">{name}</h3>
            <p className="text-primary text-xs leading-6">{description}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default Items;
