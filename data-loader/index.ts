import Dotenv from "dotenv";
import Downloader from "./download-flix-data";
import GenImages from "./generateImages";

Dotenv.config();

async function Main() {
  try {
    await new Promise(Downloader);
    await new Promise(GenImages);
  } catch (error) {
    console.log("Failed to process data");
    console.log(error);
  }
}

Main();