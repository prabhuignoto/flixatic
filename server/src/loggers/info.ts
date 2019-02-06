import winston, { transports } from "winston";

export default winston.createLogger({
  level: "info",
  transports: new transports.Console(),
});
