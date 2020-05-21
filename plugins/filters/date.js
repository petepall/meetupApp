import Vue from "vue";

export const date = (value) => {
  const date = new Date(value);
  return date.toLocaleString(["en-BE"], {
    timeZone: "Europe/Brussels",
    month: "short",
    day: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
};

Vue.filter("date", date);
