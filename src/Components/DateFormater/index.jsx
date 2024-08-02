import moment from "moment-jalaali";
import PropTypes from "prop-types";

moment.loadPersian({ usePersianDigits: true });

const monthNames = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

const JalaliDateFormatter = ({ date }) => {
  const formatToJalali = (dateStr) => {
    if (!dateStr) return ""; 

    const [jalaliDate, time] = dateStr.split("-");
    const [year, month, day] =jalaliDate.split("/");

  
    const formattedDate = moment(
      `${year}/${month}/${day} ${time}`,
      "jYYYY/jM/jD-HH:mm:ss"
    );

    console.log(
      "Formatted date:",
      formattedDate.format("jYYYY/jM/jD-HH:mm:ss")
    );

      const monthIndex = formattedDate.jMonth();


    const monthName = monthNames[monthIndex] || "ناشناخته"; 
    return `${day} ${monthName} ${year} - ${time}`;
  };

  return <span>{formatToJalali(date)}</span>;
};

JalaliDateFormatter.propTypes = {
  date: PropTypes.string.isRequired,
};

export default JalaliDateFormatter;
