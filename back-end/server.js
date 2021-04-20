const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render('./index.html');
  res.send("你好，让你访问/hello这个路径的时候，我会返回这个 ");
  res.end();
})

app.post('/api/find', (request, res) => {
  console.log(request.body);
  if (request.body.name === "qer") {
    res.end("kaohe  bu tong guo");
  }
})

app.listen(2333, () => {
  console.log("http://localhost:2333/hello");
});