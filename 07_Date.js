let d = new Date();
// 1 second = 1000 millisecond
let newDate = new Date(year, month, date, hour, minute, second)  //put value in number
                    // 0000, 0-11 , 00  , 00  , 00    ,00

let newDate1 = new Date(year-month-date, hour, minute, second)  //put value in number
                    // 0000, 1-12 , 00 , 00  , 00    ,00           

let newDate2 = new Date(month-date-year, hour, minute, second)  //put value in number
                    // 1-12,  00  ,0000, 00  , 00    ,00              
 
// get date and time
d.getFullYear();     // 2025
d.getMonth();        // 6 (July, 0-based)
d.getDate();         // 23
d.getDay();          // 3 (Wednesday, 0 = Sunday)
d.getTime();         // get date by timestamp(millisecond)
d.getHours();        // 18
d.getMinutes();      // 30
d.getSeconds();      // 15
d.getMilliseconds(); // 123

d.toString();        // "Wed Jul 23 2025 18:30:00 GMT+0530 (India Standard Time)"  // date + time
d.toLocaleString();  // "7/23/2025, 6:30:00 PM"                                    // date + time
d.toDateString();    // "Wed Jul 23 2025"    // Only Date
d.toTimeString();    // "18:30:00 GMT+0530"  // Only Time
console.log(d.toISOString());     // "2025-07-23T13:00:00.000Z"     //YYYY-MM-DDTHH:mm:ss.sssZ
// Note: Output is in UTC, not local time. (India is UTC+5:30, so 18:30 local = 13:00 UTC)


// set date and time
d.setFullYear(2030);
d.setMonth(0);        // January
d.setDate(1);
d.setTime(1724323200000); // Set date by timestamp(millisecond)
d.setHours(12);
d.setMinutes(0);

let myTimeStamp = Date.now()
console.log(myTimeStamp);            // value in milliseconds
console.log(newDate.getTime());      // value in milliseconds
console.log(Math.floor(Date.now()/1000));   // millisecond to second


newDate.toLocaleString('default', {
    weekday: "long",
})
