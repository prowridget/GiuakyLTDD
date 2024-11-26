const mongoose = require('mongoose');
require('dotenv').config(); // Đọc file .env để lấy biến môi trường

const connectDB = async () => {
  try {
    // Kết nối tới MongoDB bằng URI từ file .env (nếu có) hoặc localhost mặc định
    const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/databass';
    await mongoose.connect(MONGO_URI); // Không cần các tùy chọn cũ
    console.log('Kết nối thành công đến MongoDB!');
  } catch (err) {
    console.error('Lỗi kết nối MongoDB:', err.message);
    process.exit(1); // Dừng ứng dụng nếu lỗi xảy ra
  }
};

module.exports = connectDB;
