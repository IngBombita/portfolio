export default function handler(req, res) {
    fetch(process.env.WEBHOOK_URL, {
        method: "POST",
        body: JSON.stringify(req.body)
    });
    res.status(200).json({request: req.body})
}
