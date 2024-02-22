export const dateParser = (input: string, includeYear?: boolean) => {
  const sliced: string[] = input.split("-");
  const year: string = sliced[0];
  const month: string = sliced[1];
  const day: string = sliced[2];
  let parsedMonth = [""];

  if (month === "1" || "01") {
    parsedMonth = ["Jan", "Янв"];
  } else if (month === "2" || "02") {
    parsedMonth = ["Feb", "Фев"];
  } else if (month === "3" || "03") {
    parsedMonth = ["Mar", "Мар"];
  } else if (month === "4" || "04") {
    parsedMonth = ["Apr", "Апр"];
  } else if (month === "5" || "05") {
    parsedMonth = ["May", "Май"];
  } else if (month === "6" || "06") {
    parsedMonth = ["Jun", "Июн"];
  } else if (month === "7" || "07") {
    parsedMonth = ["Jul", "Июл"];
  } else if (month === "8" || "08") {
    parsedMonth = ["Aug", "Авг"];
  } else if (month === "9" || "09") {
    parsedMonth = ["Sep", "Сен"];
  } else if (month === "10") {
    parsedMonth = ["Oct", "Окт"];
  } else if (month === "11") {
    parsedMonth = ["Nov", "Ноя"];
  } else if (month === "12") {
    parsedMonth = ["Dec", "Дек"];
  }

  if (includeYear) {
    return `${day} ${parsedMonth[1]} ${year}`;
  } else {
    return `${day} ${parsedMonth[1]}`;
  }
};

export const splitDate = (input: string) => {
  return input.split(" ")[0];
};
