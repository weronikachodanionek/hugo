import moment from "moment";
import { API_DATE_FORMAT, DATE_FORMAT } from "./constans";

export const formatData = (date: string): string => {
  return moment.utc(date, API_DATE_FORMAT).format(DATE_FORMAT);
};
