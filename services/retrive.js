const connection = require('../database/connections');



module.exports = async (propertysets) => {

    try{
        //create query
        const query = `SELECT `+
                        `${propertysets} `+
                    `FROM `+
                        `user_tbl`

     
        
        //for retrriving data we need to get the data ofc
        const result = await connection(query);

        return result
    }catch(error){
        return [];
    }
}

