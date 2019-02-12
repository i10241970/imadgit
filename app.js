const http = require("http");
const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.header);
  //   process.exit();
  const url = req.url;
  if (url === "/") {
    //   res.setHeader("content-type", "text/html");
    res.write("<html>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="msg"></input><button type="submit">send</button></form></body>'
    );
    res.write("</html>");
    // res.end();
  }
  res.write("<html><body><h1>hello</h1></body></html>");
  res.end();
});
server.listen(3000);
