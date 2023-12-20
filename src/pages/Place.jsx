import { useParams } from "react-router-dom";
import { MdOutlineBedroomParent } from "react-icons/md";
import { MdOutlineBathroom } from "react-icons/md";
import { FaBed } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPlaces } from "../store/slices/placesSlice";
import Api from "../config/Api";
import { notifyError, notifySuccess } from "../components/toastify/toastify";

const DUMMYITEM = {
  name: "Sample Place 1",
  location: "Sample Location 1",
  userId: "65760a26493e1be532dbfb921",
  description: "Sample description",
  numberOfRooms: 3,
  numberOfBathrooms: 2,
  maxGuest: 6,
  pricePerNight: 100,
  latitude: 123.456,
  longitude: 789.012,
  imageLinks: [
    "https://a0.muscache.com/im/pictures/miso/Hosting-31508919/original/f5cd57a3-b42d-4211-a73c-047c6cc2fc13.jpeg?im_w=720",
    "https://a0.muscache.com/im/pictures/c8279a67-2b35-4448-b45d-a45913dae0bd.jpg?im_w=720",
  ],
  reviews: [
    {
      userImg: <FaRegUserCircle className="text-5xl" />,
      userName: "name4",
      review: "loadsaad da ad da dadad",
    },
    {
      userImg: <FaRegUserCircle className="text-5xl" />,
      userName: "name2",
      review: "loadsaad da ad da dadad",
    },
    {
      userImg: <FaRegUserCircle className="text-5xl" />,
      userName: "name3",
      review: "loadsaad da ad da dadad",
    },
  ],
};

function Place() {
  const disaptch=useDispatch()
  const {id} = useParams();

  const items = useSelector((state) => state.places.data);
  const user = useSelector((state) => state.user.data);

  useEffect(()=>{
    disaptch(fetchPlaces())
  },[])
  const place = items.find((ele)=>ele._id == id)
  if (!place) {
    return <p>error</p>;
  }

  function addCheckout(amenity , placeId){
    Api.post("/place_amenity",{amenity , place:placeId})
    .then(()=>{
      console.log("Done");
      notifySuccess("Reserved !! ")
    })
    .catch((err)=>{
      console.log(err.message);
      console.log(err?.response?.data);
      notifyError("Please Login !!")
    })
  }

  const {
    imageLinks: imgs,
    name,
    numberOfRooms,
    numberOfBathrooms,
    maxGuest,
    pricePerNight,
    longitude,
    latitude,
    reviews,
  } = place || DUMMYITEM;
  return (
    <>
      <div className="md:h-[50vh] overflow-hidden">
        {/* <img src={imgs[0]} className="object-cover w-full " /> */}
      </div>
      <div className="m-auto md:flex md:w-[115vh]">
        <div className="info py-14 px-4 md:px-14 flex flex-col">
          <h3 className="text-primary text-3xl font-bold">{name}</h3>

          <hr className="bg-slate-600 border-0 h-[1px] rounded-md my-6" />
          <div className="featrues flex flex-col">
            {/*  */}
            <div className="element flex">
              <FaBed className="text-9xl p-2 basis-32" />
              <div className="ml-4 mt-6">
                <h3 className="font-bold text-primary">
                  longitude x latitude - {longitude} x {latitude}
                </h3>
                <p className="mt-3 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                  accusamus quibusdam voluptatum inventore corporis pariatur
                </p>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="element flex">
              <FaRegBuilding className="text-9xl p-2 basis-32" />
              <div className="ml-4 mt-6">
                <h3 className="font-bold text-primary ">
                  Room in Cottage - {numberOfRooms}
                </h3>
                <p className="mt-3 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                  accusamus quibusdam voluptatum inventore corporis pariatur
                </p>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="element flex">
              <MdOutlineBathroom className="text-9xl p-2 basis-32" />
              <div className="ml-4 mt-6">
                <h3 className="font-bold text-primary">
                  Number Of Bathrooms - {numberOfBathrooms}
                </h3>
                <p className="mt-3 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                  accusamus quibusdam voluptatum inventore corporis pariatur
                </p>
              </div>
            </div>
            {/*  */}
            {/*  */}
            <div className="element flex">
              <MdOutlineBedroomParent className="text-9xl p-2 basis-32" />
              <div className="ml-4 mt-6">
                <h3 className="font-bold text-primary">
                  Maximum Number of guesr - {maxGuest}
                </h3>
                <p className="mt-3 text-sm">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
                  accusamus quibusdam voluptatum inventore corporis pariatur
                </p>
              </div>
            </div>
            <hr className="bg-slate-600 border-0 h-[1px] rounded-md my-6" />
            {/* reviews */}
            <div className="reviews flex flex-col gap-5">
              {/* {reviews.map((review, index) => {
                const { review: rev, userImg, userName } = review;
                return (
                  <div className="flex py-4" key={index}>
                    {userImg}
                    <div className="ml-5">
                      <h4 className="text-primary text-2xl">{userName}</h4>
                      <p>{rev}</p>
                    </div>
                  </div>
                );
              })} */}
            </div>
          </div>
        </div>
        <div className="mt-14 card h-96 basis-[50%] w-[100%] bg-base-300 shadow-xl relative">
          <div className="card-body">
            <h2 className="card-title">price</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              illum quis nulla tenetur itaque asperiores labore repudiandae,
              soluta deleniti quod.
            </p>
            <div className="card-actions flex justify-between">
              <div className="justify-start text-primary text-3xl font-bold">
                {pricePerNight}$
              </div>
              <button className="btn btn-primary" onClick={()=>addCheckout(user._id , place._id)}>Check Out</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Place;
