class products {

    constructor(dg) {
        this.dg = dg;        
    }

    insertRecord(jsonData, callBack) {

        var sql = "insert into productos (nombre_numero, precio) values (?, ?)"; 

        var params = [];

        params.push(jsonData["nombre_numero"]);  
        params.push(jsonData["precio"]); 

        this.dg.execute(sql, params, callBack);          
    }

    getRecords(resourceId, callBack) {
        console.log("a");
        var sql = "select id, nombre_numero, precio from productos";

        var params = []; 

        if (resourceId != "") {
            sql = sql + " where id = ?";               
            params.push(resourceId);    
        }

        this.dg.query(sql, params, callBack);
    }

    updateRecord(resourceId, jsonData, callBack) {

        var sql = "update productos set nombre_numero = ?, precio = ? where id = ?";

        var params = [];

        params.push(jsonData["nombre_numero"]);  
        params.push(jsonData["precio"]); 
        params.push(resourceId); 

        this.dg.execute(sql, params, callBack);
    }

    deleteRecord(resourceId, callBack) {

        var sql = "delete from productos where id = ?";

        var params = [];

        params.push(resourceId);   

        this.dg.execute(sql, params, callBack);       
    }
}

module.exports = products;
