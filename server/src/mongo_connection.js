
var connect = require('mongoose').connect;
(async () => {
    try {
        const db = await connect('mongodb+srv://vanttec-admin:vanttec@vtec.cnsa8.mongodb.net/vanttec_db/?retryWrites=true&w=majority');
        console.log("Atlas DB connected to", db.connection.name);
    } catch (error) {
        console.error(error)
    }
})();