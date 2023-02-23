import mongoose from "mongoose";
import config from "config";
import log from "../logger";

function connect() {
  const dbUri = config.get("dbUri") as string;
  mongoose.set("strictQuery", true);
  return mongoose
    .connect(dbUri, {})
    .then(() => {
      log.info("database connected");
    })
    .catch((error) => {
      log.error("db error", error);
      process.exit(1);
    });
}

export default connect;
