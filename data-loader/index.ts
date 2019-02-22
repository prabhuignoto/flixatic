import Dotenv from "dotenv";
import Downloader from "./download-flix-data";
import GenImages from "./generateImages";
import LoadTitleDetails from "./load-title-details";
import GetFlixDetails from "./download-flix-details";
import UpdateGenres from "./load-generes";

Dotenv.config();

async function Main() {
  try {
    // await new Promise(Downloader);
    // await new Promise(GenImages);
    // await new Promise(GetFlixDetails);
    await new Promise(UpdateGenres);
  } catch (error) {
    console.log("Failed to process data");
    console.log(error);
  }
}

Main();
