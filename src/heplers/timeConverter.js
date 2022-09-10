import { format, fromUnixTime } from "date-fns";

// function to convert the 24 hrours format to 12 hours format
export const convert24formatTo12Format = (slotsSrray) => {
  return slotsSrray.map((elm) => {
    if (elm > 12) {
      return `${elm - 12} PM `;
    } else {
      return `${elm} AM`;
    }
  });
};

// function to get all the hours time range between two hours
export const getTimeRangeBetweenTwoSlots = (twoslots) => {
  let [lowNumber, highNumber] = twoslots;
  let listOfNumbers = [];
  for (let i = lowNumber; i <= highNumber; i++) {
    listOfNumbers.push(i);
  }
  return convert24formatTo12Format(listOfNumbers);
};

// function to convert unix time stamp to 24 hr format
export const hoursFormat = (unixTimeArr) => {
  const hoursFormat = unixTimeArr.map((element) => {
    return Number(format(fromUnixTime(element), "H"));
  });

  return hoursFormat;
};

export const timeConverter = (timeRange) => {
  return timeRange
    .map((item) => {
      const unixTime = Object.values(item);
      const convertedHours = hoursFormat(unixTime);
      return getTimeRangeBetweenTwoSlots(convertedHours);
    })
    .flat();
};
