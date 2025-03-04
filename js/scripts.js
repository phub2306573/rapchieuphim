//Product js

function changeHeartColor(index){
    let a = document.getElementsByClassName("Heart");
    a[index].style.color = "red";
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
            }
        }

    }
}