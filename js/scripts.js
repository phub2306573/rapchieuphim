//header
function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}






//Product + Cart js

let sectionFilm = {
    "phim_1": {
        "id": "A1",
        "Name": "Na Tra Ma Đồng Giáng Thế",
        "Price": 99,
        "Photo": "/images/phim1.jpg",
        "NgayXem": "07-03-2025"
    },
    "phim_2": {
        "id": "A2",
        "Name": "Nobita's Sky Utopia in Hindi",
        "Price": 95,
        "Photo": "/images/phim2.jpg",
        "NgayXem": "07-03-2025"
    },
    "phim_3": {
        "id": "A3",
        "Name": "Đào, phở và piano",
        "Price": 73,
        "Photo": "/images/phim3.jpg",
        "NgayXem": "07-03-2025"
    },
    "phim_4": {
        "id": "A4",
        "Name": "Nữ Tu Bóng Tối",
        "Price": 85,
        "Photo": "/images/phim4.jpg",
        "NgayXem": "07-03-2025"
    },
    "phim_5": {
        "id": "A5",
        "Name": "Cá Sấu Tử Thần",
        "Price": 79,
        "Photo": "/images/phim5.jpg",
        "NgayXem": "07-03-2025"
    },
    "phim_6": {
        "id": "A6",
        "Name": "Kẻ Ăn Hồn",
        "Price": 79,
        "Photo": "/images/phim6.jpg",
        "NgayXem": "07-03-2025"
    },
    "phim_7": {
        "id": "A7",
        "Name": "Breaking Bad",
        "Price": 150,
        "Photo": "/images/phim7.jpg",
        "NgayXem": "07-03-2025"
    },
    "phim_8": {
        "id": "A8",
        "Name": "Cuộc Đào Tẩu Trên Không",
        "Price": 99,
        "Photo": "/images/phim8.jpg",
        "NgayXem": "07-03-2025"
    },
    "phim_9": {
        "id": "A9",
        "Name": "Shin Cậu Bé Bút Chì",
        "Price": 99,
        "Photo": "/images/phim9.jpg",
        "NgayXem": "07-03-2025"
    },
    "phim_10": {
        "id": "A10",
        "Name": "Quỷ Nhập Tràng",
        "Price": 99,
        "Photo": "/images/phim10.jpg",
        "NgayXem": "07-03-2025"
    },
    "phim_11": {
        "id": "A11",
        "Name": "Nàng Bạch Tuyết",
        "Price": 99,
        "Photo": "/images/phim11.jpg",
        "NgayXem": "07-03-2025"
    },
    "phim_12": {
        "id": "A2",
        "Name": "Venom The Last Dance",
        "Price": 99,
        "Photo": "/images/phim12.jpg",
        "NgayXem": "07-03-2025"
    },
    "phim_13": {
        "id": "A3",
        "Name": "Bộ Phim Về MineCraft",
        "Price": 99,
        "Photo": "/images/phim13.jpg",
        "NgayXem": "07-03-2025"
    },
    "phim_14": {
        "id": "A14",
        "Name": "Phim Xì Trum",
        "Price": 99,
        "Photo": "/images/phim14.jpg",
        "NgayXem": "07-03-2025"
    },
    "phim_15": {
        "id": "A15",
        "Name": "Bí Kiếp Luyện Rồng",
        "Price": 99,
        "Photo": "/images/phim15.jpg",
        "NgayXem": "07-03-2025"
    }
}

let List_Do_An = {
    "BongNgo": {
        "SoLuong": 0,
        "Gia": 50
    },
    "Pepsi": {
        "SoLuong": 0,
        "Gia": 15
    },
    "Combo": {
        "SoLuong": 0,
        "Gia": 59
    }
}



function clearLocalStore() {
    window.localStorage.clear();
}

function Them() {
    alert("Đã thêm vào giỏ hàng");
}

// console.log(sectionFilm["phim_1"]);

function TongTien(){
    let TienFlim = 0;
    let i;
    let SLfilm = document.getElementsByClassName("SLfilm");
    for(i=0;i<localStorage.length;i++){
        let key = localStorage.key(i);
        TienFlim += sectionFilm[key].Price * SLfilm[i].value;
    }
    console.log("Tien FIlm "+TienFlim);
    let Cac_Do_An = document.getElementsByClassName("Mon");
    let Tien_DO_An;
    let a = Cac_Do_An[0].value * 50;
    let b = Cac_Do_An[1].value * 15;
    let c = Cac_Do_An[2].value * 59;
    Tien_DO_An =  a+b+c;
    let TongTien = TienFlim + Tien_DO_An;
    let place = document.getElementById("ThanhTien");
    place.innerHTML = '<h5>Tổng Tiền: '+TongTien+',000 Đồng</h5>'
}


function show_cart(){
    let i = 0;
    console.log("HEllo")
    for (i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let Poster = sectionFilm[key].Photo;
        let Name = sectionFilm[key].Name;
        let NgayXem = sectionFilm[key].NgayXem;
        let Price = sectionFilm[key].Price;
        let tbody = document.getElementById("tbody");
        console.log(tbody);
        let a = document.createElement("tr");
        let thamso = "'" + key + "'";
        console.log(thamso);
        a.innerHTML = '<td><img src="'+Poster+'" alt="" class = "Poster_Cart"></td> <td>'+Name+
        '</td> <td><input type="number" name="" id="" min="1" max="10" value="1" step="1" onchange="TongTien()" class = "SLfilm"></td> <td>'+NgayXem+'</td> <td>'+Price+',000 Đồng'+'</td>'
        +'<td><i class="fa-solid fa-trash" onclick="deleteCart('+thamso+')"></i></td>';
        tbody.appendChild(a);
    }
    TongTien();
}

function deleteCart(ID_film) {
    console.log("Chay");
    if (window.localStorage.getItem(ID_film) != null) {
        window.localStorage.removeItem(ID_film);
        location.reload();
    }
}

function add_cart_mobile(ID_film,index){
    let a = document.getElementsByClassName("NutDatHang");
    if(a[index].name == "0"){
        a[index].name = "1";
        return;
    }
    else{
        add_cart(ID_film);
    }
}

function add_cart(ID_film) {
    if (window.localStorage.getItem(ID_film) == null) {
        window.localStorage.setItem(ID_film, 1);
        Them();
        console.log("da them");
    }
    else {
        console.log("da co");
        alert("Đơn Hàng Đã Có Trong Giỏ Hàng")
    }
}


function TongTien(){
    let TienFlim = 0;
    let i;
    let SLfilm = document.getElementsByClassName("SLfilm");
    for(i=0;i<localStorage.length;i++){
        let key = localStorage.key(i);
        TienFlim += sectionFilm[key].Price * SLfilm[i].value;
    }
    console.log("Tien FIlm "+TienFlim);
    let Cac_Do_An = document.getElementsByClassName("Mon");
    let Tien_DO_An;
    let a = Cac_Do_An[0].value * 50;
    let b = Cac_Do_An[1].value * 15;
    let c = Cac_Do_An[2].value * 59;
    Tien_DO_An =  a+b+c;
    let TongTien = TienFlim + Tien_DO_An;
    let place = document.getElementById("ThanhTien");
    place.innerHTML = '<h5>Tổng Tiền: '+TongTien+',000 Đồng</h5>'
}



function changeHeartColor(obj) {
    if (obj.style.color == "red") obj.style.color = "black";
    else obj.style.color = "red";
}


function selectTypeOfFilm() {
    let a = document.getElementsByClassName("aSectionPhim");
    let i, j;
    for (i = 0; i < a.length; i++) {
        a[i].style.display = "none";
    }
    let b = document.getElementById("The_Loai");
    let c = document.getElementById("thoi_luong");
    let valueOfTheLoai = b.value;
    let valueOfThoiLuong = c.value;
    console.log(valueOfTheLoai);
    console.log(valueOfThoiLuong);
    let count = 0;
    for (i = 0; i < a.length; i++) {
        let temp = a[i].classList;
        let DK_1 = false, DK_2 = false;
        if (valueOfTheLoai === "All") DK_1 = true;
        if (valueOfThoiLuong === "All_thoiluong") DK_2 = true;

        for (j = 0; j < temp.length; j++) {
            if (DK_1 === false) {
                DK_1 = (temp[j] === valueOfTheLoai);
            }
            if (DK_2 === false) {
                DK_2 = (temp[j] === valueOfThoiLuong);
            }
            if (DK_1 && DK_2) {
                a[i].style.display = "";
                count++;
            }
        }

    }
    if (count == 0) {
        alert("Xin Lỗi Phim Theo Yêu Cầu Của Bạn Hiện Đang Không Có");
        for (i = 0; i < a.length; i++) {
            a[i].style.display = "";
        }
    }
}

// Validate 
function isNumber(event) { // ngăn nhập dữ liệu khác số
    var key = event.which || event.keyCode;
    if (key < 48 || key > 57)
        return false;
    return true;
}

function isRequired(option) { //hiện lỗi khi trường bỏ trống
    var target = option.parentElement.querySelector('.error-mess');
    if (option.value.length == 0) {
        option.classList.add('invalid');
        target.innerText = "*Vui lòng nhập trường này!!!";
    }
}
function clearError(option2) { //xóa thông báo lỗi
    var target = option2.parentElement.querySelector('.error-mess');
    option2.classList.remove('invalid');
    target.innerText = " ";
}
function showError(input, mess) { //hiện lỗi (khi submit)
    var target = input.parentElement.querySelector('.error-mess');
    input.classList.add('invalid');
    target.innerText = mess;
}



var inputs = document.querySelectorAll(".need-validate"); //thêm eventListener

inputs.forEach(function (input) {
    input.addEventListener("blur", function () {
        isRequired(this);
    });

    input.addEventListener("focus", function () {
        clearError(this);
    });
});

function formValidate() {
    event.preventDefault(); // Ngăn form gửi đi nếu có lỗi

    var Form = document.querySelector("#frm");
    var Username = document.querySelector("#user-name");
    var Email = document.querySelector("#email");
    var PhoneNumber = document.querySelector("#phone-number");
    var Birthday = document.querySelector("#birth-day");
    var Password = document.querySelector("#password");
    var ConfirmPassword = document.querySelector("#confirm-password");

    var isValid = true; // Để kiểm tra tổng thể

    // Kiểm tra Username
    if (Username.value.length < 3 || Username.value.length > 20) {
        showError(Username, "*Tên tài khoản phải từ 3-20 ký tự.");
        isValid = false;
    } else {
        clearError(Username);
    }

    // Kiểm tra Email
    var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (!emailRegex.test(Email.value)) {
        showError(Email, "*Email không hợp lệ.");
        isValid = false;
    } else {
        clearError(Email);
    }

    // Kiểm tra số điện thoại
    var phoneRegex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    if (!phoneRegex.test(PhoneNumber.value)) {
        showError(PhoneNumber, "*Số điện thoại không hợp lệ");
        isValid = false;
    } else {
        clearError(PhoneNumber);
    }

    // Kiểm tra ngày sinh
    var birthDate = new Date(Birthday.value);
    var today = new Date();
    if (isNaN(birthDate) || birthDate >= today) {
        showError(Birthday, "*Ngày sinh không hợp lệ.");
        isValid = false;
    } else {
        clearError(Birthday);
    }
    // Kiểm tra mật khẩu
    var passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(Password.value)) {
        showError(Password, "*Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường và số.");
        isValid = false;
    } else {
        clearError(Password);
    }

    // Kiểm tra xác nhận mật khẩu
    if (ConfirmPassword.value !== Password.value) {
        showError(ConfirmPassword, "*Mật khẩu xác nhận không khớp.");
        isValid = false;
    } else {
        clearError(ConfirmPassword);
    }

    // Nếu tất cả đều hợp lệ, gửi form
    if (isValid) {
        Form.submit();
    }
}
