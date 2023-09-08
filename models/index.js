const cheerio = require("cheerio");
const { load } = cheerio;

const url =
  "https://www.amazon.com.br/kindle-11geracao-preto/dp/B09SWTG9GF/ref=sr_1_1?keywords=kindle&qid=1694050175&sprefix=kin%2Caps%2C444&sr=8-1&ufe=app_do%3Aamzn1.fos.95de73c3-5dda-43a7-bd1f-63af03b14751";

async function main() {
  console.log(await getPrice());
}

async function getHtml(url) {
  const response = await fetch(url);
  const body = await response.text();

  return body;
}

async function getPrice() {
  const body = await getHtml(url);

  let $ = load(body);
  return $(".a-offscreen")[0].children[0].data;
}

main();

exports.getPrice = getPrice;
