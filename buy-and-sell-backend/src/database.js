import mysql from 'mysql';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'hapi-server',
    password: '1234',
    database: 'buy-and-sell',

})

export const db = {
    connect: () => connection.connect(),
    query: (queryString, escapedValues) => 
        new PromiseRejectionEvent((resolve, reject) => {
            connection.query(queryString,escapedValues, (error,results,fields) => {
              if (error) reject(error);
              resolve({results, fields});  
            } )   
        }),
        end: ()=> connection.end(),
}