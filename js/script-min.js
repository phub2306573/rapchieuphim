function toggleMenu(){document.querySelector(".navbar").classList.toggle("active")}let sectionFilm={phim_1:{id:"A1",Name:"Na Tra Ma Đồng Gi\xe1ng Thế",Price:99,Photo:"/images/phim1.jpg",NgayXem:"07-03-2025"},phim_2:{id:"A2",Name:"Nobita's Sky Utopia in Hindi",Price:95,Photo:"/images/phim2.jpg",NgayXem:"07-03-2025"},phim_3:{id:"A3",Name:"Đ\xe0o, phở v\xe0 piano",Price:73,Photo:"/images/phim3.jpg",NgayXem:"07-03-2025"},phim_4:{id:"A4",Name:"Nữ Tu B\xf3ng Tối",Price:85,Photo:"/images/phim4.jpg",NgayXem:"07-03-2025"},phim_5:{id:"A5",Name:"C\xe1 Sấu Tử Thần",Price:79,Photo:"/images/phim5.jpg",NgayXem:"07-03-2025"},phim_6:{id:"A6",Name:"Kẻ Ăn Hồn",Price:79,Photo:"/images/phim6.jpg",NgayXem:"07-03-2025"},phim_7:{id:"A7",Name:"Breaking Bad",Price:150,Photo:"/images/phim7.jpg",NgayXem:"07-03-2025"},phim_8:{id:"A8",Name:"Cuộc Đ\xe0o Tẩu Tr\xean Kh\xf4ng",Price:99,Photo:"/images/phim8.jpg",NgayXem:"07-03-2025"},phim_9:{id:"A9",Name:"Shin Cậu B\xe9 B\xfat Ch\xec",Price:99,Photo:"/images/phim9.jpg",NgayXem:"07-03-2025"},phim_10:{id:"A10",Name:"Quỷ Nhập Tr\xe0ng",Price:99,Photo:"/images/phim10.jpg",NgayXem:"07-03-2025"},phim_11:{id:"A11",Name:"N\xe0ng Bạch Tuyết",Price:99,Photo:"/images/phim11.jpg",NgayXem:"07-03-2025"},phim_12:{id:"A2",Name:"Venom The Last Dance",Price:99,Photo:"/images/phim12.jpg",NgayXem:"07-03-2025"},phim_13:{id:"A3",Name:"Bộ Phim Về MineCraft",Price:99,Photo:"/images/phim13.jpg",NgayXem:"07-03-2025"},phim_14:{id:"A14",Name:"Phim X\xec Trum",Price:99,Photo:"/images/phim14.jpg",NgayXem:"07-03-2025"},phim_15:{id:"A15",Name:"B\xed Kiếp Luyện Rồng",Price:99,Photo:"/images/phim15.jpg",NgayXem:"07-03-2025"}},List_Do_An={BongNgo:{SoLuong:0,Gia:50},Pepsi:{SoLuong:0,Gia:15},Combo:{SoLuong:0,Gia:59}};function clearLocalStore(){window.localStorage.clear()}function Them(){alert("Đ\xe3 th\xeam v\xe0o giỏ h\xe0ng")}function show_cart(){let e=0,t=document.getElementById("tbody");for(e=0,t.innerHTML=" ";e<localStorage.length;e++){let o=localStorage.key(e);if("Combo"==o||"Pepsi"==o||"BongNgo"==o)continue;let i=sectionFilm[o].Photo,a=sectionFilm[o].Name,n=sectionFilm[o].NgayXem,r=sectionFilm[o].Price,l=document.createElement("tr"),m="'"+o+"'";l.innerHTML='<td><img src="'+i+'" alt="" class = "Poster_Cart"></td> <td>'+a+'</td> <td><input type="number" name="" id="" min="1" max="10" value="1" step="1" onchange="TongTien()" class = "SLfilm"></td> <td>'+n+"</td> <td>"+r+',000 Đồng</td><td><i class="fa-solid fa-trash" onclick="deleteCart('+m+')"></i></td>',t.appendChild(l)}let g=document.getElementsByClassName("Mon");g[0].value=localStorage.getItem("BongNgo"),g[1].value=localStorage.getItem("Pepsi"),g[2].value=localStorage.getItem("Combo"),TongTien()}function Cap_Nhat_Value_MonAn(e,t){0==e?window.localStorage.setItem("BongNgo",t.value):1==e?window.localStorage.setItem("Pepsi",t.value):window.localStorage.setItem("Combo",t.value),show_cart()}function deleteCart(e){console.log("Chay"),null!=window.localStorage.getItem(e)&&(window.localStorage.removeItem(e),console.log("Da Xoa "+e),show_cart(e))}function add_cart_mobile(e,t){add_cart(e)}function add_cart(e){window.localStorage.setItem("BongNgo",0),window.localStorage.setItem("Pepsi",0),window.localStorage.setItem("Combo",0),null==window.localStorage.getItem(e)?(window.localStorage.setItem(e,1),Them(),console.log("da them")):(console.log("da co"),alert("Phim Đ\xe3 C\xf3 Trong Giỏ H\xe0ng"))}function TongTien(){let e=0,t,o=document.getElementsByClassName("SLfilm");for(t=0;t<localStorage.length;t++){let i=localStorage.key(t),a=0;"Combo"!=i&&"Pepsi"!=i&&"BongNgo"!=i&&(e+=sectionFilm[i].Price*o[a].value,a++)}let n=document.getElementsByClassName("Mon"),r,l=50*n[0].value,m,g=e+(r=l+15*n[1].value+59*n[2].value);document.getElementById("ThanhTien").innerHTML="<h5>Tổng Tiền: "+g+",000 Đồng</h5>"}function dathang(){alert("Đặt h\xe0ng th\xe0nh c\xf4ng")}function changeHeartColor(e){"red"==e.style.color?e.style.color="black":e.style.color="red"}function selectTypeOfFilm(){let e=document.getElementsByClassName("aSectionPhim"),t,o;for(t=0;t<e.length;t++)e[t].style.display="none";let i=document.getElementById("The_Loai"),a=document.getElementById("thoi_luong"),n=i.value,r=a.value;console.log(n),console.log(r);let l=0;for(t=0;t<e.length;t++){let m=e[t].classList,g=!1,h=!1;for("All"===n&&(g=!0),"All_thoiluong"===r&&(h=!0),o=0;o<m.length;o++)!1===g&&(g=m[o]===n),!1===h&&(h=m[o]===r),g&&h&&(e[t].style.display="",l++)}if(0==l)for(alert("Xin Lỗi Phim Theo Y\xeau Cầu Của Bạn Hiện Đang Kh\xf4ng C\xf3"),t=0;t<e.length;t++)e[t].style.display=""}function isNumber(e){var t=e.which||e.keyCode;return!(t<48)&&!(t>57)}function isRequired(e){var t=e.parentElement.querySelector(".error-mess");0==e.value.length&&(e.classList.add("invalid"),t.innerText="*Vui l\xf2ng nhập trường n\xe0y!!!")}function clearError(e){var t=e.parentElement.querySelector(".error-mess");e.classList.remove("invalid"),t.innerText=" "}function showError(e,t){var o=e.parentElement.querySelector(".error-mess");e.classList.add("invalid"),o.innerText=t}var inputs=document.querySelectorAll(".need-validate");function formValidate(){event.preventDefault();var e=document.querySelector("#frm"),t=document.querySelector("#user-name"),o=document.querySelector("#email"),i=document.querySelector("#phone-number"),a=document.querySelector("#birth-day"),n=document.querySelector("#password"),r=document.querySelector("#confirm-password"),l=!0;t.value.length<3||t.value.length>20?(showError(t,"*T\xean t\xe0i khoản phải từ 3-20 k\xfd tự."),l=!1):clearError(t),/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(o.value)?clearError(o):(showError(o,"*Email kh\xf4ng hợp lệ."),l=!1),/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(i.value)?clearError(i):(showError(i,"*Số điện thoại kh\xf4ng hợp lệ"),l=!1);var m=new Date(a.value),g=new Date;isNaN(m)||m>=g?(showError(a,"*Ng\xe0y sinh kh\xf4ng hợp lệ."),l=!1):clearError(a),/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/.test(n.value)?clearError(n):(showError(n,"*Mật khẩu phải c\xf3 \xedt nhất 8 k\xfd tự, bao gồm chữ hoa, chữ thường v\xe0 số."),l=!1),r.value!==n.value?(showError(r,"*Mật khẩu x\xe1c nhận kh\xf4ng khớp."),l=!1):clearError(r),l&&e.submit()}inputs.forEach(function(e){e.addEventListener("blur",function(){isRequired(this)}),e.addEventListener("focus",function(){clearError(this)})});