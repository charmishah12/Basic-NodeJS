const requestHandler = (req, res) => {
  const url = req.url;

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment-1</title></head>");
    res.write(
      "<body><h1>Hey! Here's the Assignment-1 THE BASICS</h1><form action='/create-user' method='POST'><label for='username'>Name:</label><input type='text' id='username' name='username'><button type='submit'>Submit</button></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/create-user") {
   
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody)
      return res.end();
    });

      res.statusCode = 302;
      res.setHeader("Location", "/users");
      res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Assignment-1</title></head>");
    res.write(
      "<body><h1>Hey! Here's the List of Users</h1><ul><li>User-1</li><li>User-2</li><li>User-3</li><li>User-4</li><li>User-5</li></body>"
    );
    res.write("</html>");
    return res.end();
  }
};

exports.handler = requestHandler;
