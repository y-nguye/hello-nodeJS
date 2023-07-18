const express = require("express"); // Lệnh require lấy thư viện trong node_modules
const app = express(); // Hàm có sẵn trong express, sẽ return đối tượng đại diện cho ứng dụng đang viết
const port = 3000; // Chạy website ở cổng nào, ở đây là 3000
const path = require("path");
const morgan = require("morgan");

console.log(__dirname); //C:\Users\Y\iCloudDrive\Documents\Visual Studio Code\JavaScript\NodeJS
app.use(express.static(path.join(__dirname, "public")));

// morgan hiển thị trạng thái gửi
app.use(morgan("combined"));

// Khai báo teamplate engines
app.set("view engine", "pug");
// Khai báo đường dẫn đến mục chứa template
app.set("views", path.join(__dirname, "resources/views"));

// Route để render trang web từ template Pug
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  console.log("XXXXXXXXXXXX", req.query.q); // XXXXXXXXXXXX Hoai Y
  res.render("search");
});

// Route định nghĩa ra lộ trình, điểm truy cập cho website

// Lắng nghe cổng 3000 trên trình duyệt
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// http://localhost:3000
