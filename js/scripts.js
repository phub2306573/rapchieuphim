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
        "Price": 99,
        "Photo": "/images/phim1.jpg",
        "NgayXem":"07-03-2025"
    },
    "phim_2": {
        "id": "A2",
        "Name": "Nobita's Sky Utopia in Hindi",
        "Price": "105k",
        "Photo": "/images/phim2.jpg",
        "NgayXem":"07-03-2025"
    },
    "phim_3": {
        "id": "A3",
        "Name": "Đào, phở và piano",
        "Price": 99,
        "Photo": "/images/phim3.jpg",
        "NgayXem":"07-03-2025"
    },
    "phim_4": {
        "id": "A4",
        "Name": "Nữ Tu Bóng Tối",
        "Price": 99,
        "Photo": "/images/phim4.jpg",
        "NgayXem":"07-03-2025"
    },
    "phim_5": {
        "id": "A5",
        "Name": "Cá Sấu Tử Thần",
        "Price": 99,
        "Photo": "/images/phim5.jpg",
        "NgayXem":"07-03-2025"
    },
    "phim_6": {
        "id": "A6",
        "Name": "Kẻ Ăn Hồn",
        "Price": 99,
        "Photo": "/images/phim6.jpg",
        "NgayXem":"07-03-2025"
    },
    "phim_7": {
        "id": "A7",
        "Name": "Breaking Bad",
        "Price": 99,
        "Photo": "/images/phim7.jpg",
        "NgayXem":"07-03-2025"
    },
    "phim_8": {
        "id": "A8",
        "Name": "Cuộc Đào Tẩu Trên Không",
        "Price": 99,
        "Photo": "/images/phim8.jpg",
        "NgayXem":"07-03-2025"
    },
    "phim_9": {
        "id": "A9",
        "Name": "Shin Cậu Bé Bút Chì",
        "Price": 99,
        "Photo": "/images/phim9.jpg",
        "NgayXem":"07-03-2025"
    },
    "phim_10": {
        "id": "A10",
        "Name": "Quỷ Nhập Tràng",
        "Price": 99,
        "Photo": "/images/phim10.jpg",
        "NgayXem":"07-03-2025"
    },
    "phim_11": {
        "id": "A11",
        "Name": "Nàng Bạch Tuyết",
        "Price": 99,
        "Photo": "/images/phim11.jpg",
        "NgayXem":"07-03-2025"
    },
    "phim_12": {
        "id": "A2",
        "Name": "Venom The Last Dance",
        "Price": 99,
        "Photo": "/images/phim12.jpg",
        "NgayXem":"07-03-2025"
    },
    "phim_13": {
        "id": "A3",
        "Name": "Bộ Phim Về MineCraft",
        "Price": 99,
        "Photo": "/images/phim13.jpg",
        "NgayXem":"07-03-2025"
    },
    "phim_14": {
        "id": "A14",
        "Name": "Phim Xì Trum",
        "Price": 99,
        "Photo": "/images/phim14.jpg",
        "NgayXem":"07-03-2025"
    },
    "phim_15": {
        "id": "A15",
        "Name": "Bí Kiếp Luyện Rồng",
        "Price": 99,
        "Photo": "/images/phim15.jpg",
        "NgayXem":"07-03-2025"
    }
}

let List_Do_An = {
    "BongNgo":{
        "SoLuong":0,
        "Gia":50
    },
    "Pepsi":{
        "SoLuong":0,
        "Gia":15
    },
    "Combo":{
        "SoLuong":0,
        "Gia":59
    }
}



function clearLocalStore(){
    window.localStorage.clear();
}

function Them(){
    alert("Da Them Thanh Cong");
}

// console.log(sectionFilm["phim_1"]);

function show_cart(){
    let i = 0;
    console.log("HEllo")
    for(i=0;i<localStorage.length;i++){
        let key = localStorage.key(i);
        let Poster = sectionFilm[key].Photo;
        let Name = sectionFilm[key].Name;
        let NgayXem = sectionFilm[key].NgayXem;
        let Price = sectionFilm[key].Price;
        let table = document.getElementById("table_Cart");
        let a = document.createElement("tr");
        let thamso = "'" + key +"'";
        console.log(thamso);
        a.innerHTML = '<td><img src="'+Poster+'" alt="" class = "Poster_Cart"></td> <td>'+Name+
        '</td> <td><input type="number" name="" id="" min="0" max="10" value="0" step="1"></td> <td>'+NgayXem+'</td> <td>'+Price+'</td>'
        +'<td><i class="fa-solid fa-trash" onclick="deleteCart('+thamso+')"></i></td>';
        table.appendChild(a);
    }
}

function deleteCart(ID_film){
    console.log("Chay");
    if(window.localStorage.getItem(ID_film) != null){
        window.localStorage.removeItem(ID_film);
        location.reload();
    }
}

function add_cart(ID_film){
    Them();
    if(window.localStorage.getItem(ID_film) == null){
        window.localStorage.setItem(ID_film,1);
        console.log("da them");
    }
    else{
        console.log("da co");
    }
}

function SumTien(){
    let a = localStorage.length * 99;
    let temp = document.getElementsByClassName("Mon");
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



