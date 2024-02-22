// Modules
import { v4 as uuidv4 } from "uuid";
import { useMemo, useState } from "react";

// Helpers
import {
  generateDateMatrix,
  matchLocaleLang,
  daysLocale,
  matchDateToDay,
  monthsLocale,
  years,
} from "../../helpers/calendar";

// Types
import {
  dayStateType,
  monthType,
  monthSelectType,
} from "../../types/calendarTypes";

// Icons
import prev from "../../icons/arrow-prev.svg";
import next from "../../icons/arrow-next.svg";

// Types
import { dataItem, dateMatrix } from "../../helpers/calendar";

// Components
import CalendarCell from "./CalendarCell";

const Calendar = () => {
  // Static
  const date = new Date();
  const today = date.getDate();

  // State
  const [currentYear, setCurrentYear]: monthType = useState(date.getFullYear()); // Ability to change the year
  const [currentMonth, setCurrentMonth]: monthType = useState(date.getMonth()); // Ability to change the month
  const [monthSelect, setMonthSelect]: monthSelectType = useState(false); // Month select controller
  const [yearSelect, setYearSelect]: monthSelectType = useState(false); // Year select controller
  const [selectedDay, setSelectedDay]: dayStateType = useState({
    day: -1,
    month: -1,
  }); // Ability to select a day

  // Memoized

  const data: dateMatrix = useMemo(
    () => generateDateMatrix(currentYear),
    [currentYear]
  ); // For better performance: generateDateMatrix() is a demanding algorithm

  const dataDays: dataItem[] = useMemo(() => data[0], [data]); // Same

  const sorted: number[][] = useMemo(
    () => matchDateToDay(dataDays[currentMonth].data),
    [dataDays, currentMonth]
  ); // For better performance: matchDateToDay() is a demanding algorithm

  // Chain memo reaction when currentYear changes

  return (
    <div className="calendar">
      <div className="calendar-top">
        <div
          className="calendar-prev"
          onClick={() => {
            setCurrentMonth((initial) => {
              if (initial - 1 < 0) {
                return 11;
              } else {
                return initial - 1;
              }
            });
          }}
        >
          <img src={prev} alt="" />
        </div>

        <h4>
          <span
            onClick={() => {
              setMonthSelect((initial) => !initial);
              setYearSelect(false);
              setSelectedDay({ day: -1, month: -1 });
            }}
          >
            {matchLocaleLang(currentMonth)}
          </span>{" "}
          <span
            onClick={() => {
              setYearSelect((initial) => !initial);
              setMonthSelect(false);
              setSelectedDay({ day: -1, month: -1 });
            }}
          >
            {data[1] as number}
          </span>
        </h4>
        <div
          className="calendar-next"
          onClick={() => {
            setCurrentMonth((initial) => {
              if (initial + 1 > 11) {
                return 0;
              } else {
                return initial + 1;
              }
            });
          }}
        >
          <img src={next} alt="" />
        </div>
      </div>
      <div className="calendar-bottom">
        <div
          className={
            monthSelect
              ? "calendar-month-select active"
              : "calendar-month-select"
          }
        >
          {monthsLocale.map((month, i) => {
            return (
              <span
                className={i === currentMonth ? "active" : ""}
                key={uuidv4()}
                onClick={() => {
                  setMonthSelect(false);
                  setCurrentMonth(i);
                }}
              >
                {month}
              </span>
            );
          })}
        </div>
        <div
          className={
            yearSelect
              ? "calendar-month-select calendar-year-select active"
              : "calendar-month-select calendar-year-select"
          }
        >
          {years.map((year) => {
            return (
              <span
                className={year === currentYear ? "active" : ""}
                key={uuidv4()}
                onClick={() => {
                  setYearSelect(false);
                  setCurrentYear(year);
                }}
              >
                {year}
              </span>
            );
          })}
        </div>
        <table className="calendar-table">
          <tbody>
            <tr className="calendar-table-header">
              <th>{daysLocale[0]}</th>
              <th>{daysLocale[1]}</th>
              <th>{daysLocale[2]}</th>
              <th>{daysLocale[3]}</th>
              <th>{daysLocale[4]}</th>
              <th>{daysLocale[5]}</th>
              <th>{daysLocale[6]}</th>
            </tr>
            {sorted
              ? sorted.map((arr) => {
                  if (arr.filter((x) => x === 0).length !== 7) {
                    return (
                      <tr key={uuidv4()}>
                        {arr.map((el) => {
                          if (el !== 0) {
                            if (
                              today === el &&
                              currentMonth === date.getMonth() &&
                              currentYear === date.getFullYear()
                            ) {
                              return (
                                <CalendarCell
                                  key={uuidv4()}
                                  currentMonth={currentMonth}
                                  currentYear={currentYear}
                                  element={el}
                                  selectedDay={selectedDay}
                                  setSelectedDay={setSelectedDay}
                                  givenClassName={
                                    selectedDay.day === el &&
                                    selectedDay.month === currentMonth
                                      ? " active selected"
                                      : " active"
                                  }
                                />
                              );
                            } else {
                              return (
                                <CalendarCell
                                  key={uuidv4()}
                                  currentMonth={currentMonth}
                                  currentYear={currentYear}
                                  element={el}
                                  selectedDay={selectedDay}
                                  setSelectedDay={setSelectedDay}
                                  givenClassName={
                                    selectedDay.day === el &&
                                    selectedDay.month === currentMonth
                                      ? "selected"
                                      : ""
                                  }
                                />
                              );
                            }
                          } else {
                            return <td key={uuidv4()}></td>;
                          }
                        })}
                      </tr>
                    );
                  } else {
                    return "";
                  }
                })
              : ""}
          </tbody>
        </table>
        <button
          type="button"
          className="calendar-return"
          onClick={() => {
            setCurrentMonth(date.getMonth());
            setCurrentYear(date.getFullYear());
          }}
        >
          Сегодня
        </button>
      </div>
    </div>
  );
};

export default Calendar;
