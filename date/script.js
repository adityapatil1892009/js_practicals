

months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const date = new Date();
const year = date.getFullYear();
const month = months[date.getMonth()];
const day = days[date.getDay()];
const dateValue = date.getDate();
document.getElementsByClassName("text")[0].innerHTML = "<span class='text-1'>Year:   </span>" + year;
document.getElementsByClassName("text")[1].innerHTML = "<span class='text-1'>Month:   </span>" + month;
document.getElementsByClassName("text")[2].innerHTML = "<span class='text-1'>Day:   </span>" + day;
document.getElementsByClassName("text")[3].innerHTML = "<span class='text-1'>Date:   </span>" + dateValue;
document.getElementsByClassName("text")[4].innerHTML = "<span class='text-1'>Time:   </span>" + date.getHours() + ":" + date.getMinutes()+":" + date.getSeconds();