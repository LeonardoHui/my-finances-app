import cookie from "cookie";
import { API_URL } from "@/config/index";

export default async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    //Change the API URL and PATH to the third part one
    const api = await fetch(`${API_URL}/api/fakelogin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await api.json();

    if (api.ok) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", data.jwt, {
          httpOnly: true,
          secure: process.env.NODE_ENV !== "development",
          masAge: 60 * 60 * 24 * 7, // 1week
          sameSite: "strict",
          path: "/",
        })
      );

      res.status(200).json(data);
    } else {
      res.status(401).json({ message: "Not Authorized" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} not allowed` });
  }
};
