import User from "../models/user.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id

        const filteredUsers = await User.find({ _id: { $ne: loggedInUserId }}).select("-password")  //not include current login user

        res.status(200).json(filteredUsers);

    } catch ( error) {
        console.log("Error in getUserForSidebar: ", error.message)
        res.status(500).json({error: "Internal server error"});
    }
}