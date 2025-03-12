//header
function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}






//Product js

function changeHeartColor(index) {
    let a = document.getElementsByClassName("Heart");
    if (a[index].value == 0) {
        a[index].style.color = "red";
        a[index].value = 1;
    }
    else {
        a[index].style.color = "black";
        a[index].value = 0;
    }
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
function isNumber(event) {
    var key = event.which || event.keyCode;
    if (key < 48 || key > 57)
        return false;
    return true;
}



