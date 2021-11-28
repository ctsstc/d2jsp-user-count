import fetch from "node-fetch";
import { site } from "./constants.mjs";

const getCounts = async () => {
  const content = await fetch(site);
  const source = await content.text();

  // <div><b>14,712</b> Users Online</div>
  const reg = /<div><b>(.*)<\/b> Users Online/gm;
  const countText = reg.exec(source)[1];
  const count = countText.replace(/,/g, "");

  return count;
};

export default getCounts;
