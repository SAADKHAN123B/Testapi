import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const { number } = req.query;

  if (!number) {
    return res.status(400).json({ error: "number required" });
  }

  try {
    // Vercel deploy me bhi api folder ke andar path correct hoga
    const filePath = path.join(process.cwd(), "api", "Data", "Data.json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileData);

    const info = data[number];
    if (!info) {
      return res.status(404).json({ error: "no data" });
    }

    res.status(200).json({ success: true, data: info });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
}
