const db = require("../../database.js");

const getStoryById = async (id) => {

    const sql = `
        SELECT
            id,
            story_code,
            feature_id,
            title,
            description,
            acceptance_criteria,
            priority,
            status
        FROM stories
        WHERE id = ?
        LIMIT 1
    `;

    const [rows] = await db.execute(sql, [id]);

    return rows[0];
};


const updateStory = async (id, story) => {

    const sql = `
        UPDATE stories
        SET
            title = ?,
            description = ?,
            priority = ?,
            acceptance_criteria = ?
        WHERE id = ?
    `;

    await db.execute(sql, [
        story.title,
        story.description,
        story.priority,
        JSON.stringify(story.acceptanceCriteria),
        id
    ]);
};


module.exports = {
    getStoryById,
    updateStory
};