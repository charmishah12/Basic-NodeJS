const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write(
      "<body><form action='/message' method='post'><input type='text' name='First name'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    res.write("<head><title>Basic - NodeJs</title></head>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Basic - NodeJs</title></head>");
  res.write("<body>Sending a response to the request</body>");
  res.write("</html>");
  res.end();
};

// Way-1: Exporting the function
// module.exports = requestHandler;

//Way-2: Exporting the module with function and some other data as a object
// module.exports = {
//     handler: requestHandler,
//     randomText: 'Checking different types of routes exporting methods'
// }

//Way-3: Exporting the modules with direct key value pairs
// module.exports.handler = requestHandler
// module.exports.randomText = 'Checking different types of routes exporting methods 1'

//Way-4: Direct with the shortcut export the modules
exports.handler = requestHandler 
exports.randomText = 'Checking different types of routes exporting methods 2'