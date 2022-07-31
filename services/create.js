const connection = require('../database/connections');



module.exports = async (newUsername,newPassword) => {

    try{
        //create query
        const query = `INSERT INTO `+
                        `user_tbl `+
                        `(id,username,password) `+
                    `VALUES `+
                        `(null, '${newUsername}','${newPassword}')`

        //use query
        await connection(query);
    
        return true;
    }catch(error){
        return false;
    }
}

