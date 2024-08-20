import prisma from "../config/db.config.js";

class RewardsController {
    static async givePoints(req, res) {
        try {
            const points = req.body.points;
            const givenById = req.body.userId;
            const givenToId = req.body.receiverId;
            const _giver = await prisma.user.findUnique({
                where: {
                    id: givenById
                }
            });
            const _receiver = await prisma.user.findUnique({
                where: {
                    id: givenToId
                }
            });
            if (!_giver) {
                throw new Error("Current user not found!");
            }

            if (!_receiver) {
                throw new Error("Receiver not found!");
            }

            if (_giver.points < points) {
                throw new Error("Enought points are not available!");
            }

            await prisma.user.update({
                where: {
                    id: _giver.id,
                },
                data: {
                    points: _giver.points - points
                }
            }); 

            await prisma.user.update({
                where: {
                    id: _receiver.id,
                },
                data: {
                    rewards: _receiver.rewards + points
                }
            }); 
            const reward = await prisma.rewardHistory.create({
                data: {
                    points,
                    givenById,
                    givenToId,
                }
            });

            res.json({ message: "P5 points given successfully!"});
        } catch (err) {
            res.status(500).json({ message: err?.message ? err.message : "Something went wrong! Please try again." });
        }
    }

    static async getPointTransactions(req, res) {
        try {
            const userId = req.params.userId;
            const pointsTransaction = await prisma.rewardHistory.findMany({
                where: {
                    givenById: userId
                },
                include: {
                    givenBy: true,
                    givenTo: true
                }
            });

            res.json({ message: "Fetched points transactions successfully!", data: pointsTransaction });
        } catch (err) {
            res.status(500).json({ message: err?.message ? err.message : "Something went wrong! Please try again." });
        }
    }

    static async deletePointTransaction(req, res) {
        try {
            const transactionId = req.params.id;
            const pointsTransaction = await prisma.rewardHistory.findFirst({
                where: {
                    id: transactionId
                }
            });

            const _giver = await prisma.user.findUnique({
                where: {
                    id: givenById
                }
            });
            const _receiver = await prisma.user.findUnique({
                where: {
                    id: givenToId
                }
            });
            if (!_giver) {
                throw new Error("Current user not found!");
            }

            if (!_receiver) {
                throw new Error("Receiver not found!");
            }

            await prisma.user.update({
                where: {
                    id: _giver.id,
                },
                data: {
                    points: _giver.points + points
                }
            }); 

            await prisma.user.update({
                where: {
                    id: _receiver.id,
                },
                data: {
                    rewards: _receiver.rewards - points
                }
            }); 

            res.json({ message: "Deleted points transaction successfully!", data: pointsTransaction });
        } catch (err) {
            res.status(500).json({ message: err?.message ? err.message : "Something went wrong! Please try again." });
        }
    }

    static async getPointTransactions(req, res) {
        try {
            const userId = req.params.userId;
            const pointsTransaction = await prisma.rewardHistory.findMany({
                where: {
                    givenById: userId
                },
                include: {
                    givenBy: true,
                    givenTo: true
                }
            });

            res.json({ message: "Fetched points transactions successfully!", data: pointsTransaction });
        } catch (err) {
            res.status(500).json({ message: err?.message ? err.message : "Something went wrong! Please try again." });
        }
    }
}

export default RewardsController;