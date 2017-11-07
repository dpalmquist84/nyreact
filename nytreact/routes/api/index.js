const router = require("express").Router();
const articleController = require("./articles");

// Book routes
router.use("/articles", articleController);

module.exports = router;