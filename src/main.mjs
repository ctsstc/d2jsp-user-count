import { minutes } from "./constants.mjs";
import writeCounts from "./writeCounts.mjs";

writeCounts();
setInterval(writeCounts, 30 * minutes);
