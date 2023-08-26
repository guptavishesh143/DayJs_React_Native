import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat.js";
import utc from "dayjs/plugin/utc.js";
import timezone from "dayjs/plugin/timezone.js";
import duration from "dayjs/plugin/duration.js";
import isSameOrBefore from "dayjs/plugin/isSameOrBefore.js"; // For comparison
dayjs.extend(customParseFormat);
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(duration);
dayjs.extend(isSameOrBefore);

const CurrentDate = dayjs().format("YYYY-MM-DD");

// Get the current date in "YYYY-MM-DD" format
export const getCurrentDate = () => {
  return CurrentDate;
};

// Add a specified number of months to the current date
export const AddMonthIntoCurrentDate = (months: number) => {
  return dayjs().add(months, "month");
};

// Convert a date to a Unix timestamp
export const convertToTimeStamp = async (date: any) => {
  return dayjs(date).unix();
};

// Convert a Unix timestamp to a "YYYY-MM-DD" formatted date
export const timeStampToDate = async (timestamp: any) => {
  const parsingTimestamp = parseInt(timestamp);
  return dayjs.unix(parsingTimestamp).format("YYYY-MM-DD");
};

// Check if a given date is the same day as the current date
export const SameDayCheck = async (date: any) => {
  return dayjs().isSame(date, "day");
};

// Calculate the difference between two dates in the specified unit
export const dateDifference = (date1: any, date2: any, unit: string) => {
  return dayjs(date1).diff(date2, unit);
};

// Format a duration in seconds into a human-readable format
export const formatDuration = (durationInSeconds: number) => {
  const durationObj = dayjs.duration(durationInSeconds, "seconds");
  return durationObj.humanize();
};

// Add a specified number of days to a given date
export const addDays = (date: any, days: number) => {
  return dayjs(date).add(days, "day");
};

// Subtract a specified number of days from a given date
export const subtractDays = (date: any, days: number) => {
  return dayjs(date).subtract(days, "day");
};

// Add a specified number of weeks to a given date
export const addWeeks = (date: any, weeks: number) => {
  return dayjs(date).add(weeks, "week");
};

// Subtract a specified number of weeks from a given date
export const subtractWeeks = (date: any, weeks: number) => {
  return dayjs(date).subtract(weeks, "week");
};

// Add a specified number of months to a given date
export const addMonths = (date: any, months: number) => {
  return dayjs(date).add(months, "month");
};

// Subtract a specified number of months from a given date
export const subtractMonths = (date: any, months: number) => {
  return dayjs(date).subtract(months, "month");
};

// Convert a date to the specified timezone and format
export const convertToTimeZone = (date: any, timezone: string) => {
  return dayjs(date).tz(timezone).format("YYYY-MM-DD HH:mm:ss");
};

// Get the day of the week (0-6) from a given date
export const getDayOfWeek = (date: any) => {
  return dayjs(date).day();
};

// Format a date in the specified locale format
export const formatDateInLocale = (date: any, locale: string) => {
  return dayjs(date).locale(locale).format("LL");
};
