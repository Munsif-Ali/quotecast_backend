
const User = require('../models/user');

const getAllUsers = async (req, res) => {

    try {
        const users = await User.find().select('-password -refreshToken').lean();
        const userWithId = users.map(user => {
            return {
                id: user._id,
                ...user,
                _id: undefined
            };
        });
        res.status(200).json(userWithId);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }

}

module.exports = { getAllUsers };