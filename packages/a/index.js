const b = require("b");

(async function () {
  const users = await b();

  console.log(users.map((users) => users.login).join(", "));
})();
