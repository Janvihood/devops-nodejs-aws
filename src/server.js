const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).json({
        message: "DevOps Node.js application is running!",
        status: "success"
    });
});

app.get("/health", (req, res) => {
    res.status(200).json({
        status: "healthy"
    });
});

app.use((err, req, res, next) => {
    console.error(err.stack);

    res.status(500).json({
        status: "error",
        message: "Internal server error"
    });
});

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
});
