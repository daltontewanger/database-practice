const router = require("express").Router();
const User = require("../models/User");

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "error retrieving user" });
  }
});

router.post("/", async (req, res) => {
  try {
    if (!req.body.profilePicture) req.body.profilePicture = undefined;
    const user = await new User(req.body).save();
    res.status(201).json(user);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "error creating user" });
  }
});

// UPDATE a user by ID
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "Error updating user" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json({ message: "user deleted" });
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json({ message: "error deleting user" });
  }
});

module.exports = router;
