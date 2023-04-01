const { jwt } = require("./login.json");

export default function handler(req, res) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    if (email === "test@email.com" && password === "test") {
      res.status(200).json({ token: jwt });
    } else {
      res.status(401).json({ message: "Not Authorized" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}
