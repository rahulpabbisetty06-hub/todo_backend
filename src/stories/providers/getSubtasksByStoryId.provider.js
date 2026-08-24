const db = require("../../database.js");

const getSubtasksByStoryId = async (storyId) => {
    const sql = `SELECT id,
                        subtask_code,
                        story_id,
                        title,
                        description,
                        is_done,
                        order_index
                    FROM subtasks WHERE story_id=?
                    ORDER BY created_at ASC`;

    const [rows] = await db.execute(sql,[storyId]);

    return rows;
}

module.exports = {getSubtasksByStoryId};