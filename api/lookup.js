import data from "../../data/fakeData.json"; // relative path sahi karo

export default function handler(req, res) {
  const { number } = req.query;

  if (!number) {
    return res.status(400).json({ error: "number required" });
  }

  const info = data[number];
  if (!info) {
    return res.status(404).json({ error: "no data" });
  }

  res.status(200).json({ success: true, data: info });
}
