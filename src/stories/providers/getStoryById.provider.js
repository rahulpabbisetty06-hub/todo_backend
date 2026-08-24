const db = require("../../database.js");

const getStoryById = async (id) => {
     const sql = `SELECT id,
                         story_code,
                         feature_id,
                         title,
                         description,
                         acceptance_criteria,
                         status 
                    FROM stories WHERE id=? LIMIT 1`;
                
    const [rows] = await db.execute(sql,[id]);

    return rows[0];
}

module.exports = {getStoryById}