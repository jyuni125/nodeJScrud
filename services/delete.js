const connection = require('../database/connections');



module.exports = async (id) => {

    try{
        //create query
        const query = `DELETE FROM `+
                        `user_tbl `+
                    `WHERE `+
                        `id = '${id}'`

        //use query
        await connection(query);
    
        return true;
    }catch(error){
        return false;
    }
}

