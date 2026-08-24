const db = require("../../database.js");

const checkFeature = async (featureId) => {
     const sql = `
         SELECT id FROM features WHERE id=? LIMIT 1
     `;

     const [rows] = await db.execute(sql,[featureId]);

     return rows[0];
};

module.exports = {checkFeature};