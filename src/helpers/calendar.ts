export interface innerTempType {
  month: string;
  data: string[];
}

interface monthType {
  name: string;
  number: number;
  days: number;
}

export interface dataItem {
  data: string[];
  month: string;
}

export type dateMatrix = [dataItem[], number];

const date = new Date();

const checkLeapYear = (year: number) => {
  return new Date(year, 1, 29).getDate() === 29;
};

const months: monthType[] = [
  {
    name: "January",
    number: 1,
    days: 31,
  },
  {
    name: "February",
    number: 2,
    days: checkLeapYear(date.getFullYear()) ? 29 : 28,
  },
  {
    name: "March",
    number: 3,
    days: 31,
  },
  {
    name: "April",
    number: 4,
    days: 30,
  },
  {
    name: "May",
    number: 5,
    days: 31,
  },
  {
    name: "June",
    number: 6,
    days: 30,
  },
  {
    name: "July",
    number: 7,
    days: 31,
  },
  {
    name: "August",
    number: 8,
    days: 31,
  },
  {
    name: "September",
    number: 9,
    days: 30,
  },
  {
    name: "October",
    number: 10,
    days: 31,
  },
  {
    name: "November",
    number: 11,
    days: 30,
  },
  {
    name: "December",
    number: 12,
    days: 31,
  },
];

export const monthsEng: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthsLocale: string[] = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

export const matchLocaleLang = (month: number) => {
  return monthsLocale[month];
};

const days: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export const years: number[] = [
  date.getFullYear() - 2,
  date.getFullYear() - 1,
  date.getFullYear(),
  date.getFullYear() + 1,
  date.getFullYear() + 2,
  date.getFullYear() + 3,
];

export const daysLocale: string[] = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

const getFirstDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

export const generateDateMatrix = (year: number) => {
  let out: Object[] = [];
  months.forEach((month) => {
    let values: string[] = [];

    Array.from({ length: month.days }, (_, i) => i + 1).forEach((el, i) => {
      values.push(
        `${el}-${
          getFirstDayOfMonth(year, month.number - 1) !== 0
            ? days[(getFirstDayOfMonth(year, month.number - 1) - 1 + i) % 7]
            : days[(days.length - 1 + i) % 7]
        }-${
          getFirstDayOfMonth(year, month.number - 1) === 0
            ? Math.floor((i + 6) / 7)
            : Math.floor(
                (i + getFirstDayOfMonth(year, month.number - 1) - 1) / 7
              )
        }`
      );
    });
    let temp: innerTempType = {
      month: month.name,
      data: values,
    };
    out.push(temp);
  });
  return [out, year] as dateMatrix;
};

export const stringSep = (string: string) => {
  return string.split("-") as string[];
};

export const matchMonthNumber = (month: string): number => {
  return monthsEng.indexOf(month);
};

export const matchDayNumber = (day: string): number => {
  return days.indexOf(day) + 1;
};

export const matchDateToDay = (array: string[]) => {
  const placeholder: number[] = [0, 0, 0, 0, 0, 0, 0];
  const row1: number[] = Array.from(placeholder);
  const row2: number[] = Array.from(placeholder);
  const row3: number[] = Array.from(placeholder);
  const row4: number[] = Array.from(placeholder);
  const row5: number[] = Array.from(placeholder);
  const row6: number[] = Array.from(placeholder);
  const months: number[][] = [row1, row2, row3, row4, row5, row6];

  array.forEach((el) => {
    const data = stringSep(el);
    months[parseInt(data[2])][matchDayNumber(data[1]) - 1] = parseInt(data[0]);
  });

  return months;
};
