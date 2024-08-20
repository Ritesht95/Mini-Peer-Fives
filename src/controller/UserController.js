import prisma from "../config/db.config.js";

class UserController {

    static async getAllUsers(req, res) {
        try {
            const allUsers = await prisma.user.findMany();
            
            res.json({ message: "Fetched users successfully!", data: allUsers });
        } catch (err) {
            res.status(500).json({ message: err?.message ? err.message : "Something went wrong! Please try again." });
        }
    }

    static async createUser(req, res) {
        try {
            const name = req.body.name;
            const newUser = await prisma.user.create({
                data: {
                    name
                }
            });
            
            res.json({ message: "User created successfully!", data: newUser });
        } catch (err) {
            res.status(500).json({ message: err?.message ? err.message : "Something went wrong! Please try again." });
        }
    }

    static async updateUser(req, res) {
        try {
            const name = req.body.name;
            const userId = req.params.id;
            const updatedUser = await prisma.user.update({
                where: {
                    id: userId
                },
                data: {
                    name
                }
            });
            
            res.json({ message: "User updated successfully!", data: updatedUser });
        } catch (err) {
            res.status(500).json({ message: err?.message ? err.message : "Something went wrong! Please try again." });
        }
    }
}

export default UserController;