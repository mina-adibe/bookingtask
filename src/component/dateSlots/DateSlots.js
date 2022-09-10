/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from "prop-types";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import Slots from "../slots/Slots";

const DateSlots = ({ doctorInfo, availableTime }) => {
  console.log(doctorInfo);
  return (
    <div>
      <p className="font-bold">Schedule</p>
      <div className="flex flex-row gap-2 ">
        <Swiper
          slidesPerView={5}
          centeredSlides={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper">
          {doctorInfo?.schedule?.length > 0 &&
            doctorInfo?.schedule?.map((dateSlot) => {
              return (
                <SwiperSlide
                  key={dateSlot.availability.date}
                  onClick={() => availableTime(dateSlot)}>
                  <Slots>
                    <div className="flex flex-col">
                      <p className="font-extrabold">
                        {dateSlot.availability.date.substring(0, 2)}
                      </p>
                      <p>{dateSlot.availability.day.substring(0, 3)}</p>
                    </div>
                  </Slots>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default DateSlots;

DateSlots.propTypes = {
  availableTime: PropTypes.func,
  doctorInfo: PropTypes.object,
};
