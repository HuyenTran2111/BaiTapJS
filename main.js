//Format VND
var curentFormat = new Intl.NumberFormat('vn-VN');

// BÀI 1

/** Mô hình 3 khối
 * Tính tiền lương nhân viên
 *  
 * Đầu vào
 *  -Tạo biến lương 1 ngày
 *  -Tạo biến số ngày 
 *
 * 
 * Xử lý
 *  - Lương = (lương 1 ngày) * (số ngày làm)
 * 
 * Đầu ra
 * 
 *  - tính lương = ?
 * 
 */


document.getElementById('btntinhLuong').onclick = function () {
    var luong1Ngay = document.getElementById('luong1Ngay').value * 1;
    var soNgayLam = document.getElementById('soNgayLam').value * 1;
    //Xử lý
    var luong = luong1Ngay * soNgayLam;
    //show kết quả
    var result = '';
    result += '<p class="alert alert-danger">Lương: ' + curentFormat.format(luong) + '</p>';
    document.getElementById('footertinhLuong').innerHTML = result;
};

//BÀI 2

/** Mô hình 3 khối
 * Tính giá trị trung bình
 * 
 * Đầu vào
 *  - Tạo biến số 1 
 *  - Tạo biến số 2
 *  - Tạo biến số 3
 *  - Tạo biến số 4
 *  - Tạo biến số 5
 *  
 * 
 * Xử lý
 *  - trung bình cộng = (số 1 + số 2 + số 3 + số 4 + số 5) / 5
 * 
 * Đầu ra
 *  - trung bình cộng = ?
 * 
 */

document.getElementById('btntinhTrungBinh').onclick = function () {
    var so1 = document.getElementById('so1').value * 1;
    var so2 = document.getElementById('so2').value * 1;
    var so3 = document.getElementById('so3').value * 1;
    var so4 = document.getElementById('so4').value * 1;
    var so5 = document.getElementById('so5').value * 1;

    //Xử lý
    var tinhTrungBinh = (so1 + so2 + so3 + so4 + so5) / 5;

    //Show kết quả
    var result = '';
    result += '<p class="alert alert-danger">Trung Bình: ' + tinhTrungBinh + '</p>';
    document.getElementById('footertinhTrungBinh').innerHTML = result;
};

//BÀI 3
/** Mô hình 3 khối
 * Quy đổi tiền
 * 
 * Đầu vào
 *  - Tạo biến số tiền USD
 *  
 * Xử lý
 *  - Quy đổi tiền = số tiền USD * giá 1 USD
 * 
 * Đầu ra
 *  - Quy đổi tiền =?
 * 
 */

document.getElementById('btnquyDoiTien').onclick = function () {
    var soTien = parseFloat(document.getElementById('soTien').value);

    //Xử lý
    var quyDoiTien = soTien * 23500;

    //Show kết quả
    var result = '';
    result += '<p class="alert alert-danger">Số tiền quy đổi: ' + curentFormat.format(quyDoiTien) + '</p>';
    document.getElementById('footerquyDoiTien').innerHTML = result;
};

// BÀI 4
/** Mô hình 3 khối
 * Tính diện tích, chu vi hình chữ nhật
 * 
 * Đầu vào
 *  - Tạo biến chiều dài
 *  - Tạo biến chiều rộng
 * 
 * Xử lý
 *  - Chu vi = (chiều dài + chiều rộng) * 2
 *  - Diện tích = chiều dài * chiều rộng
 * 
 * Đầu ra
 *  - Diện tích = ? ; Chu vi = ?
 * 
 */

document.getElementById('btnTinh').onclick = function () {
    var chieuDai = document.getElementById('chieuDai').value * 1;
    var chieuRong = document.getElementById('chieuRong').value * 1;
    //Xử lý
    var dienTich = (chieuDai * chieuRong)
    var chuVi = (chieuDai + chieuRong) * 2
    //Show kết quả
    var result = '<p class="alert alert-success">Diện tích: ' + dienTich + '</p>';
    result += '<p class="alert alert-danger">Chu vi: ' + chuVi + '</p>';
    document.getElementById('footerTinh').innerHTML = result;
};

// BÀI 5
/**Mô hình 3 khối
 * Tính tổng 2 kí số
 * 
 * Đầu vào
 *  - Tạo biến số
 *số hàng đơn vị + số hàng chục

 * Xử lý
 *  - Tính tổng = số hàng đơn vị + số hàng chục
 * 
 * Show kết quả
 * - Tính tổng = ?
 */

document.getElementById('btntinhTong').onclick = function () {
    var so = document.getElementById('so').value * 1;

    var so1 = so % 10;
    so = parseInt(so / 10);
    var sum = so1 + so;
    //Xử lý

    //var tinhTong =  ;
    //Show kết quả
    var result = '';
    result += '<p class="alert alert-danger">Tính tổng: ' + sum + '</p>';
    document.getElementById('footertinhTong').innerHTML = result;
};