import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);

const CurrentDate = dayjs().format("YYYY-MM-DD");

export const getCurrentDate = ( ) =>{
  return CurrentDate
}

export const AddMonthIntoCurrentDate = (months: number) =>{
  return dayjs().add(months,"month")
}


export const convertToTimeStamp = async (CurrentDate: any) => {
  return dayjs(CurrentDate).unix(); //
};

export const timeStampToDate = async (Date: any) => {
  const parsingDate = parseInt(Date);
  return dayjs.unix(parsingDate).format("YYYY-MM-DD");
};

export const SameDayCheck = async (date: any) => {
  return dayjs().isSame(date, "days");
};
