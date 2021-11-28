import { timeToRefresh } from "./constants.mjs";
import writeCounts from "./writeCounts.mjs";

writeCounts();
setInterval(writeCounts, timeToRefresh);
