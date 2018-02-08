const net = require("net");

const server = net.createServer();

// Handle incoming connection
server.on("connection", (conn) => {
    conn.on("data", (data) => {
        console.log("Data is received");
        conn.write(data, () => {
            console.log("Data is echoed");
        });
    });
});

// Setup server
// Async, gak blocking
server.listen(8080, () => {
    console.log("Listening on :8080 ...");
});
