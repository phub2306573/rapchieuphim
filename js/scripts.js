//header
function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}






//Product js

let sectionFilm = {
    "phim_1": {
        "id": "A1",
        "Name": "Na Tra Ma Đồng Giáng Thế",
        "Price": "99k",
        "Photo": "/images/phim1.jpg"
    },
    "phim_2": {
        "id": "A2",
        "Name": "Nobita's Sky Utopia in Hindi",
        "Price": "105k",
        "Photo": "/images/phim2.jpg"
    },
    "phim_3": {
        "id": "A3",
        "Name": "Đào, phở và piano",
        "Price": "99k",
        "Photo": "/images/phim3.jpg"
    },
    "phim_4": {
        "id": "A4",
        "Name": "Nữ Tu Bóng Tối",
        "Price": "99k",
        "Photo": "/images/phim4.jpg"
    },
    "phim_5": {
        "id": "A5",
        "Name": "Cá Sấu Tử Thần",
        "Price": "99k",
        "Photo": "/images/phim5.jpg"
    },
    "phim_6": {
        "id": "A6",
        "Name": "Kẻ Ăn Hồn",
        "Price": "99k",
        "Photo": "/images/phim6.jpg"
    },
    "phim_7": {
        "id": "A7",
        "Name": "Breaking Bad",
        "Price": "99k",
        "Photo": "/images/phim7.jpg"
    },
    "phim_8": {
        "id": "A8",
        "Name": "Cuộc Đào Tẩu Trên Không",
        "Price": "99k",
        "Photo": "/images/phim8.jpg"
    },
    "phim_9": {
        "id": "A9",
        "Name": "Shin Cậu Bé Bút Chì",
        "Price": "99k",
        "Photo": "/images/phim9.jpg"
    },
    "phim_10": {
        "id": "A10",
        "Name": "Quỷ Nhập Tràng",
        "Price": "99k",
        "Photo": "/images/phim10.jpg"
    },
    "phim_11": {
        "id": "A11",
        "Name": "Nàng Bạch Tuyết",
        "Price": "99k",
        "Photo": "/images/phim11.jpg"
    },
    "phim_12": {
        "id": "A2",
        "Name": "Venom The Last Dance",
        "Price": "99k",
        "Photo": "/images/phim12.jpg"
    },
    "phim_13": {
        "id": "A3",
        "Name": "Bộ Phim Về MineCraft",
        "Price": "99k",
        "Photo": "/images/phim13.jpg"
    },
    "phim_14": {
        "id": "A14",
        "Name": "Phim Xì Trum",
        "Price": "99k",
        "Photo": "/images/phim14.jpg"
    },
    "phim_15": {
        "id": "A15",
        "Name": "Bí Kiếp Luyện Rồng",
        "Price": "99k",
        "Photo": "/images/phim15.jpg"
    }
}

for (let i = 0; i < sectionFilm.length; i++) {
    window.localStorage.getItem(i, sectionFilm[i]);
}




console.log(sectionFilm);




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
function isNumber(event) {
    var key = event.which || event.keyCode;
    if (key < 48 || key > 57)
        return false;
    return true;
}

function isRequired(option) {
    var formMess = option.parentElement.querySelector('.error-mess');
    if (option.value.length == 0) {
        formMess.innerText = "*Vui lòng nhập trường này";
    }
    else {
        formMess.innerText = " ";
    }
}



