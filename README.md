# Day.js Utility Functions

This repository provides a collection of utility functions for date and time manipulation using the Day.js library.

## Installation

1. Make sure you have Node.js installed on your machine.

2. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/dayjs-utility-functions.git
Navigate to the repository directory:


cd dayjs-utility-functions
Install dependencies using npm or yarn:


npm install
# or
yarn install
Usage
You can import and use the provided Day.js utility functions as follows:

javascript
Copy code
import {
  getCurrentDate,
  AddMonthIntoCurrentDate,
  convertToTimeStamp,
  timeStampToDate,
  SameDayCheck,
  dateDifference,
  formatDuration,
  addDays,
  subtractDays,
  addWeeks,
  subtractWeeks,
  addMonths,
  subtractMonths,
  convertToTimeZone,
  getDayOfWeek,
  formatDateInLocale,
} from "./path-to-your-utility-functions";

// Example usage:
const currentDate = getCurrentDate();
console.log("Current Date:", currentDate);

const futureDate = AddMonthIntoCurrentDate(2);
console.log("Future Date:", futureDate);

const timestamp = convertToTimeStamp("2023-12-31");
console.log("Timestamp:", timestamp);

// ... More examples for other functions
Functions List:
Here's a brief overview of the available functions:

getCurrentDate: Get the current date in "YYYY-MM-DD" format.
AddMonthIntoCurrentDate: Add a specified number of months to the current date.
convertToTimeStamp: Convert a date to a Unix timestamp.
timeStampToDate: Convert a Unix timestamp to a "YYYY-MM-DD" formatted date.
SameDayCheck: Check if a given date is the same day as the current date.
dateDifference: Calculate the difference between two dates in the specified unit.
formatDuration: Format a duration in seconds into a human-readable format.
addDays, subtractDays: Add/subtract a specified number of days to/from a date.
addWeeks, subtractWeeks: Add/subtract a specified number of weeks to/from a date.
addMonths, subtractMonths: Add/subtract a specified number of months to/from a date.
convertToTimeZone: Convert a date to the specified timezone and format.
getDayOfWeek: Get the day of the week (0-6) from a given date.
formatDateInLocale: Format a date in the specified locale format.
Feel free to explore and utilize these functions in your projects.

License
This project is licensed under the MIT License.

Made with ❤️ and 🕒 by Vishesh Gupta
