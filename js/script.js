
var arabic2 = document.getElementById("arabic");
var english2 = document.getElementById("english");
var nohxs = document.getElementById("nohxs");
var contact2 = document.getElementById("contact");
var imagex = document.getElementById("zaidx");
var namewibside = document.getElementById("title");
var  about = document.getElementById("nohcx");




arabic2.onclick = ()=>{
    setLaungage("arabic");
    localStorage.setItem("Lang","arabic");
};
english2.onclick = ()=>{
    setLaungage("english");
    localStorage.setItem("Lang","english");

};
onload = ()=>{
    setLaungage( localStorage.getItem("Lang"));
   
}
function setLaungage(getsetLaungage){
if(getsetLaungage == "arabic"){
    nohxs.innerHTML = "انا مطور برمجيات ";
    contact2.innerHTML = "تواصل معنا";
    imagex.innerHTML = "مرحبا بكم في موقع محمد عبدالفتاح ";
    namewibside.innerHTML = "محمد عبد الفتاح ";
    about.innerHTML = "معلومات عنا ";

}else if (getsetLaungage=="english"){
    nohxs.innerHTML = " I am  a Software Developer";
    contact2.innerHTML = "Contact us";
    imagex.innerHTML = "Welcome to website of Mohammad Abdelfattah";
    namewibside.innerHTML = "Mohammad Abdelfattah";
    about.innerHTML = "About Us"


}
}
