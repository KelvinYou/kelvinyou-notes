import React from 'react';

interface TotalDaysAgoProps {
  inputDate: string;
}

const calculateTotalDaysAgo = (inputDate: string): string => {
  const currentDate = new Date();
  const inputDateObj = new Date(inputDate);
  
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const timeDiff = currentDate.getTime() - inputDateObj.getTime();
  const totalDaysAgo = Math.floor(timeDiff / millisecondsPerDay);

  type TimeUnit = [number, string];
  const timeUnits: TimeUnit[] = [
    [0, "Today"],
    [1, "Yesterday"],
    [7, "week"],
    [30, "month"],
    [365, "year"]
  ];
  
  for (let i = 0; i < timeUnits.length; i++) {
    const [threshold, unit] = timeUnits[i];
    if (totalDaysAgo <= threshold) {
      if (i < 2) {
        return unit;
      } else {
        const count = Math.ceil(totalDaysAgo / (timeUnits[i - 1][0] as number));
        return count === 1 ? `1 ${unit} ago` : `${count} ${unit}s ago`;
      }
    }
  }

  // Default return statement
  return "More than one year ago";
}


const TotalDaysAgo: React.FC<TotalDaysAgoProps> = ({ inputDate }) => {
  const result = calculateTotalDaysAgo(inputDate);

  return (
    <>
      {result}
    </>
  );
}

export default TotalDaysAgo;
