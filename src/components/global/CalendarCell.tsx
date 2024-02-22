// Modules
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";

// Helpers
import { matchLocaleLang } from "../../helpers/calendar";
import { checkDate } from "../../helpers/apiRequests";

// Icons
import sharp from "../../icons/sharp.svg";

// Types
import { dayType, dayStateType, monthType } from "../../types/calendarTypes";

// Components
import WhiteLoader from "./WhiteLoader";

interface Props {
  setSelectedDay: dayStateType[1];
  selectedDay: dayType;
  element: number;
  currentMonth: monthType[0];
  currentYear: monthType[0];
  givenClassName: string;
}

export interface dateEventType {
  data: string[];
}

const CalendarCell = ({
  setSelectedDay,
  element,
  selectedDay,
  currentMonth,
  currentYear,
  givenClassName,
}: Props) => {
  const [dateEvent, setDateEvent]: [
    dateEventType,
    React.Dispatch<dateEventType>
  ] = useState({
    data: [""],
  });
  useEffect(() => {
    if (selectedDay.day === element) {
      checkDate(
        setDateEvent,
        `${currentYear}-${
          (currentMonth + 1).toString().length < 2
            ? "0" + (currentMonth + 1)
            : currentMonth + 1
        }-${
          selectedDay.day.toString().length < 2
            ? "0" + selectedDay.day
            : selectedDay.day
        }`
      );
    }
  }, [selectedDay, element, currentMonth, currentYear]);
  return (
    <td
      className={givenClassName}
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        const span = target.innerText;
        setSelectedDay({
          day: parseInt(span),
          month: currentMonth,
        });
      }}
    >
      <span>{element}</span>
      {selectedDay.day === element ? (
        <div className="event">
          <div className="sharp">
            <img src={sharp} alt="" />
          </div>
          <h5>{`${element} ${matchLocaleLang(
            currentMonth
          )} ${currentYear}`}</h5>
          <div>
            {dateEvent.data ? (
              dateEvent.data[0].length !== 0 ? (
                dateEvent.data.map((el) => {
                  return <span key={uuidv4()}>{el}</span>;
                })
              ) : (
                <WhiteLoader className="calendar-spinner" />
              )
            ) : (
              "Нет событий"
            )}
          </div>
        </div>
      ) : (
        ""
      )}
    </td>
  );
};

export default CalendarCell;
