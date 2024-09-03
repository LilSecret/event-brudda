export const formDateToStr = (date: Date) => {
  return new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "2-digit",
    year: "2-digit",
  });
};

export const getWeekday = (date: string) => {
  const currentDate = new Date(date);
  const options = { weekday: "long" as const };
  return currentDate.toLocaleDateString("en-US", options);
};
