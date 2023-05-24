import React, { useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { addDays, format } from "date-fns";
import { RiArrowDownSLine, RiCalendarCheckLine } from 'react-icons/ri'

const DateRange = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: "selection",
    },
  ]);

  return (
    <div className="relative flex items-center gap-10">
      <span className=" text-blue-900 font-semibold text-2xl">Pick a date/range:</span>
        <div className=" p-3 border border-white text-lg text-blue-900 font-medium rounded-xl flex items-center gap-5 bg-gray-50 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <RiCalendarCheckLine />
          <div>
          <span>{format(date[0].startDate, 'MM/dd/yyyy')} to </span> 
          <span>{format(date[0].endDate, 'MM/dd/yyyy')}</span>
          </div>
          <RiArrowDownSLine />
        </div>
      {isOpen && <DateRangePicker
        onChange={(item) => setDate([item.selection])}
        showSelectionPreview={true}
        moveRangeOnFirstSelection={false}
        months={2}
        ranges={date}
        direction="horizontal"
        className="absolute top-20 z-10"
      />}
    </div>
  );
};

export default DateRange;
