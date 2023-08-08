const { statements, balance } = require("./statements.json");
const { jwt } = require("./login.json");

export default function handler(req, res) {
  if (req.method != "GET") {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
    return;
  }
  if (req.headers["authorization"] != jwt) {
    res.status(401).json({ message: `Not authorized` });
    return;
  }

  res.status(200).json({ statements: statements, balance: balance });
}
