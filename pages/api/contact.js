export default function handler(req, res) {
    fetch("https://hooks.zapier.com/hooks/catch/5646471/o7llsnz/", {
        method: "POST",
        body: JSON.stringify(req.body)
    });
    res.status(200).json({request: req.body})
}
