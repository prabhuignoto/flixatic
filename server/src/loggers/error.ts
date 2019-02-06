import winston, { transports } from "winston";

export default winston.createLogger({
  level: "error",
  transports: new transports.Console(),
});
