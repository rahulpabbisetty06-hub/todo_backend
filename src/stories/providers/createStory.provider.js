const db = require("../../database.js");

const getNextStoryCode = async () => {
    const sql = `
        SELECT story_code
        FROM stories
        WHERE story_code LIKE 'S-%'
        ORDER BY CAST(SUBSTRING(story_code, 3) AS UNSIGNED) DESC
        LIMIT 1
    `;

    const [rows] = await db.execute(sql);

    if (rows.length === 0) {
        return "S-001";
    }

    const lastCode = rows[0].story_code;

    const lastNumber = parseInt(
        lastCode.substring(2),
        10
    );

    const nextNumber = lastNumber + 1;

    return `S-${String(nextNumber).padStart(3, "0")}`;

};


const createStory = async (story) => {
     const sql = `
        INSERT INTO stories(
           id,story_code,feature_id,title,description,acceptance_criteria,priority,status,order_index
        ) VALUES(?,?,?,?,?,?,?,?,?)
     `;

     await db.execute(sql,[
        story.id,
        story.storyCode,
        story.featureId,
        story.title,
        story.description,
        JSON.stringify(story.acceptanceCriteria),
        story.priority,
        story.status,
        story.orderIndex
     ]);
};

module.exports = {
   getNextStoryCode,
   createStory
}