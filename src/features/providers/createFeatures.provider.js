const db = require("../../database.js");

const postFeature = async (feature) => {
    const sql = `INSERT INTO features(
                     id,title,description,priority) VALUES(?,?,?,?)`;
    
    await db.execute(sql,[
        feature.id,
        feature.title,
        feature.description,
        feature.priority
    ]);
};

module.exports = {postFeature};