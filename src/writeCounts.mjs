import fs from "fs";
import { csvFile } from "./constants.mjs";
import getCounts from "./getCounts.mjs";

const writeCounts = async () => {
  const count = await getCounts();
  const currentTime = new Date().toLocaleString();

  console.log(`${count} \t users online at \t ${currentTime}`);

  try {
    // check if counts.csv exists and add Time and Count headers to it
    if (!fs.existsSync(csvFile)) {
      fs.appendFileSync(csvFile, "Date Time,Count\n");
    }

    // append currentTime and count to counts.csv
    fs.appendFileSync(csvFile, `"${currentTime}",${count}\n`);
  } catch (err) {
    console.log(err);
  }
};

export default writeCounts;
