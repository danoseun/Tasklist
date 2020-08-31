import db from '../backend/database/models';

export const taskObject = {
    async createTask(req, res) {
        try {
            if (!req.body.title) {
                return res.status(400).json({
                    error: 'Please specify title of the tasks'
                })
            }
            const task = await db.Task.create(req.body.title);
            return res.status(201).json({
                task
            })
        } catch (error) {
            return res.status(500).json({
                error: error.message
            })
        }
    },

    async deleteTask(req, res) {
        try {
            const task = await db.Task.destroy({
                where: { id: req.params.id }
            })
            if (task) {
                res.status(204).json({
                    data: 'Task deleted successfully'
                })
            }
        }
        catch (error) {
            return res.status(500).json({
                error: error.message
            })
        }
    },

    async fetcAllTasks(req, res) {
        try {
            const tasks = await db.Task.findAll({ raw: true });
            return res.status(200).json({
                tasks
            })
        } catch (error) {
            return res.status(500).json({
                error: error.message
            });
        }

    }
}