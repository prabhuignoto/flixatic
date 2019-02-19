import Dotenv from "dotenv";
import Downloader from "./download-flix-data";
import GenImages from "./generateImages";
import LoadTitleDetails from "./load-title-details";
import GetFlixDetails from "./download-flix-details";

Dotenv.config();

async function Main() {
  try {
    await new Promise(Downloader);
    await new Promise(GenImages);
    await new Promise(GetFlixDetails);
  } catch (error) {
    console.log("Failed to process data");
    console.log(error);
  }
}

Main();
