const { statements } = require("./statements.json");
const { jwt } = require("./login.json");

export default function handler(req, res) {
  console.log(req.headers["authorization"]);
  console.log(jwt);
  console.log(req.headers["authorization"] === jwt);
  if (req.method === "GET" && req.headers["authorization"] === jwt) {
    res.status(200).json(statements);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
