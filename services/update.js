const connection = require('../database/connections');



module.exports = async (id,newUsername,newPassword) => {

    try{
        //create query
        const query = `UPDATE `+
                        `user_tbl `+
                      `SET `+
                        `id='${id}', username='${newUsername}', password='${newPassword}' `+
                      `WHERE `+
                        `id= '${id}'`

        //use query
        await connection(query);
    
        return true;
    }catch(error){
        return false;
    }
}

