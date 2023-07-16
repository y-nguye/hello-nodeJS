const express = require("express"); // Lệnh require lấy thư viện trong node_modules
const app = express(); // Hàm có sẵn trong express, sẽ return đối tượng đại diện cho ứng dụng đang viết
const port = 3000; // Chạy website ở cổng nào, ở đây là 3000
const morgan = require("morgan");
const path = require("path");

// morgan hiển thị trạng thái gửi
app.use(morgan("combined"));

// Khai báo teamplate engines
app.set("view engine", "pug");
// Khai báo đường dẫn đến mục chứa template
app.set("views", path.join(__dirname, "./src/resources/views"));

// Route để render trang web từ template Pug
app.get("/", (req, res) => {
  res.render("main");
});

// Lắng nghe cổng 3000 trên trình duyệt
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// Truy cập http://localhost:3000
