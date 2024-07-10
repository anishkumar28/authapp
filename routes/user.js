const express = require("express");
const router = express.Router();

//import controller
const {login, signup} = require("../controllers/auth");
const {auth, isStudent, isAdmin} = require("../middlewares/auth");


//define API routes
router.post("/login", login);

router.get("/signup", signup);

//testing protected route for single middleware
router.get("/test", auth, (req, res) => {
    res.json({
        success:true,
        message: "Welcome to the protected route for Test",
    });
});

// protected route
router.get("/student", auth, isStudent, (req, res) => {
    res.json({
        success:true,
        message: "Welcome to the protected route for Student"
    });
});

router.get("/admin", auth, isAdmin, (req, res) => {
    res.json({
        success:true,
        message: "Welcome to the protected route for Admih"
    });
});

module.exports = router;
