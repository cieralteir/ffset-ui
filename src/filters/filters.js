import Vue from "vue";
import moment from "moment-timezone";

Vue.filter(
  "date",
  (value, format = "DD-MMM-YYYY HH:mm", returnValue = "N/A") => {
    if (!value) return returnValue;
    return moment.tz(value, "Australia/Melbourne").format(format);
  }
);
