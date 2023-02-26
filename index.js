const fetch = require("node-fetch");
const config = require("./config");

const input = process.argv.slice(2).join(" ");

fetch("https://degaucheoudedroite.delemazure.fr/api.php", {
  method: "POST",
  body: JSON.stringify({
    input,
    price: 3,
    key: config.key
  })
})
  .then(response => response.json())
  .then(({data}) => {
    console.log(`${input}, c'est ${data.trim().toLowerCase()}`);
  });
