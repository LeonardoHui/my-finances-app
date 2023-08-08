const { jwt } = require("./login.json");

var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getRandomValues(floor, times) {
  const values = [];
  for (let i = 0; i < times; i++) {
    values.push(Math.random() + floor * (1 + i / 10));
  }
  return {
    month: months[floor],
    value: values,
  };
}

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

  const { query } = req;
  const elements = query?.index?.split(",");
  elements.push("deposits");
  const values = [];
  for (let i = 0; i < 12; i++) {
    var el = getRandomValues(i, elements.length);
    values.push(el);
  }

  res.status(200).json({
    lines: elements,
    values: values,
  });
}
