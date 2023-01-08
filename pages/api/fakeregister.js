const { jwt } = require("./fakeregister.json");

export default function handler(req, res) {
  if (req.method === "POST") {
    const { username, email, password } = req.body;
    if (username && email && password) {
      res.status(200).json(jwt);
    } else {
      res.status(400).json({ message: "Missing data" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
