const express = require("express"); // Lệnh require lấy thư viện trong node_modules
const app = express(); // Hàm có sẵn trong express, sẽ return đối tượng đại diện cho ứng dụng đang viết
const port = 3000; // Chạy website ở cổng nào, ở đây là 3000
const path = require("path");
const morgan = require("morgan");

console.log(__dirname); //C:\Users\Y\iCloudDrive\Documents\Visual Studio Code\JavaScript\NodeJS
app.use(express.static(path.join(__dirname, "public")));

// Express 4.16 trở lên được tích hợp middleware thông qua hàm urlencoded()
// Sử dụng middleware xử lý dữ liệu form, hàm urlencoded() xử lý form HTML
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Sử dụng middleware xư lý dữ liệu từ code JavaScript (xử lý các trường hợp khác)
app.use(express.json());

// morgan hiển thị trạng thái gửi
app.use(morgan("combined"));

// Khai báo teamplate engines, ta sử dụng pug
app.set("view engine", "pug");
// Khai báo đường dẫn (route) đến mục chứa template
app.set("views", path.join(__dirname, "resources/views"));

// Route định nghĩa ra lộ trình, điểm truy cập cho website
// Route để render trang web từ template Pug
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

// Mặc đinh trình duyệt GET đầu tiên Route này
app.get("/search", (req, res) => {
  res.render("search");
});

// Khi submit thì lại là phương thức POST (Trên file form.pug)
// Một khi đã ở trên route này thì Refresh lại trình duyệt thì vẫn là POST
app.post("/search", (req, res) => {
  // .body chưa tích hợp sẵn middleware nên in ra undefine, cần sử dụng câu lệnh như đã được khai báo ở dòng 11
  console.log(req.body, "🅾️");
  res.render("search");
});
// Muốn trở lại trạng thái GET thì nhấp vào URL rồi nhấn ENTER

// Lắng nghe cổng 3000 trên trình duyệt
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// http://localhost:3000
