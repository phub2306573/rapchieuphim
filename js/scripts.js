//header
function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
}






//Product js

function changeHeartColor(index){
    let a = document.getElementsByClassName("Heart");
    if(a[index].value == 0){
        a[index].style.color = "red";
        a[index].value = 1;
    }
    else{
        a[index].style.color = "black";
        a[index].value = 0;
    }
}


function selectTypeOfFilm(){
    let a = document.getElementsByClassName("aSectionPhim");
    let i,j;
    for(i = 0;i<a.length;i++){
        a[i].style.display = "none";
    }
    let b = document.getElementById("The_Loai");
    let c = document.getElementById("thoi_luong");
    let valueOfTheLoai = b.value;
    let valueOfThoiLuong = c.value;
    console.log(valueOfTheLoai);
    console.log(valueOfThoiLuong);
    let count = 0;
    for(i = 0;i<a.length;i++){
        let temp = a[i].classList;
        let DK_1 = false,DK_2=false;
        if(valueOfTheLoai==="All") DK_1=true;
        if(valueOfThoiLuong==="All_thoiluong") DK_2=true;
        
        for(j=0;j<temp.length;j++){
            if(DK_1===false){
                DK_1 = (temp[j] === valueOfTheLoai);
            }
            if(DK_2===false){
                 DK_2 = (temp[j] === valueOfThoiLuong);
            }
            if(DK_1 && DK_2){
                a[i].style.display = "";
                count++;
            }
        }

    }
    if(count == 0){
        alert("Xin Lỗi Phim Theo Yêu Cầu Của Bạn Hiện Đang Không Có");
        for(i = 0;i<a.length;i++){
            a[i].style.display = "";
        }
    }
}

function change_DivContent(i){
    let div_Content = document.getElementsByClassName("div_Content");
    let td = document.getElementsByTagName("td");
    div_Content[i].style.display = "inline";
    console.log(td[i]);
    td[i].style.width = "300px";
}
function change_imgandcontent(){
    let a = document.getElementById("div_ContentAndImgProduct");
    a.style.width = "100%";
}

function change_Div_Icon(i){
    let div_Icon = document.getElementsByClassName("div_Icon");
    div_Icon[i].style.display = "flex";
    div_Icon[i].style.position = "relative";
    div_Icon[i].style.bottom = "8px";
}

function change_chooseType(){
    let a = document.getElementById("BoLoc");
    a.style.display = "none";
}

function change_imgProduct(i){
    let a = document.getElementsByClassName("img_Product");
    a[i].style.height = "300px";
    a[i].style.width = "280px";
}

function changeFilm_Product(i){
    let a = document.getElementsByClassName("phim_Product");
    let b = document.getElementsByClassName("name_movie");
    b[i].style.display = "inline-block";
    b[i].style.position = "absolute";
    b[i].style.marginLeft = "10px";
    b[i].style.fontSize = "20px";
    a[i].style.width = "100%";
    a[i].style.height = "100%";
    a[i].style.position = "block";
    a[i].style.fontsize = "25px";
}

function MobileGetTicket(index){
    var screenWidth = window.innerWidth;
    if(screenWidth > 600) return;
    let a = document.getElementsByClassName("aSectionPhim");
    let i = 0;
    console.log("ssfsfs");
    for(i=0;i<a.length;i++){
        if(i==index){
            change_DivContent(i);
            change_Div_Icon(i);
            change_chooseType();
            console.log("hello");
            change_imgProduct(i);
            changeFilm_Product(i);
            continue;
        }
        a[i].style.display = "none";
    }
}