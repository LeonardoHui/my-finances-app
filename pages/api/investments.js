const {
  investments,
  stock_distribution,
  dividend_yied,
  dividend_paid,
} = require("./investments.json");
const { jwt } = require("./login.json");

export default function handler(req, res) {
  console.log(req.headers["authorization"]);
  console.log(jwt);
  console.log(req.headers["authorization"] === jwt);
  if (req.method === "GET" && req.headers["authorization"] === jwt) {
    res
      .status(200)
      .json({
        investments: investments,
        stock_distribution: stock_distribution,
        dividend_yied: dividend_yied,
        dividend_paid: dividend_paid,
      });
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
