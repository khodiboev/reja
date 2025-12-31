const http = require("http");
// const app = require("./app");
const mongodb = require("mongodb");


let db;
const connectionString = "mongodb+srv://victor:3anrO4dprLkjpOVd@cluster0.gvramfw.mongodb.net/Reja?appName=Cluster0";

mongodb.connect(connectionString, {
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
}, (err, client) => {
    if (err) {
        console.log("MongoDB connection ERROR:", err);
    } else {
        console.log("MongoDB connected SUCCESSFULLY");
        module.exports = client.db();

        const app = require("./app");
        const server = http.createServer(app);
        let PORT = 3000;
        server.listen(PORT, function() {
            console.log(`The server is running succesfully on port: ${PORT}, http://localhost:${PORT}`);
        });
    }
});