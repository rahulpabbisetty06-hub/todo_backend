const db = require("../../database.js");

const checkFeature = async (id) => {
     const sql = `SELECT
            id,
            title,
            description,
            priority,
            status
        FROM features
        WHERE id = ?
        LIMIT 1`;
    
    const [rows] = await db.execute(sql, [id]);

    return rows[0];
};

const putFeature = async (id,data) => {
     const sql = `UPDATE features
        SET
            title = ?,
            description = ?,
            priority = ?
        WHERE id = ?`;
    
    await db.execute(sql, [
        data.title,
        data.description,
        data.priority,
        id
    ]);
};


module.exports = {checkFeature,putFeature};