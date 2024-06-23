const User = require('../models/usersModel');

exports.register = async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(400).json(err);
    }
};

exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).json({ message: 'User with the email not found' });
    }
    if (user.password !== req.body.password) {
     return res.status(401).json({ message: 'Invalid password' });
    }
    res.status(200).json(user);
};