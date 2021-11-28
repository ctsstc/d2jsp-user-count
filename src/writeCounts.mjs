import fs from "fs";
import { locale } from "./constants.mjs";
import { csvFile } from "./constants.mjs";
import getCounts from "./getCounts.mjs";

const writeCounts = async () => {
  const count = await getCounts();
  const date = new Date();
  const currentDate = date.toLocaleDateString(locale);
  const currentTime = date.toLocaleTimeString(locale);

  console.log(`${count} \t users online at \t ${currentTime}`);

  try {
    // check if counts.csv exists and add Time and Count headers to it
    if (!fs.existsSync(csvFile)) {
      fs.appendFileSync(csvFile, "Date,Time,Count\n");
    }

    // append currentTime and count to counts.csv
    const row = [currentDate, currentTime, count];
    const csv = row.join(",") + "\n";
    fs.appendFileSync(csvFile, csv);
  } catch (err) {
    console.log(err);
  }
};

export default writeCounts;
