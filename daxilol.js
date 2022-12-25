const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

function login(){
    var submit=document.querySelector(".submit");
    submit.addEventListener("click",function(event){    
		event.preventDefault();
        var email=document.querySelector("#email").value;
        var password=document.querySelector("#password").value;
        if(localStorage.getItem(email)!=null){
            var item=JSON.parse(localStorage.getItem(email));
            if(item.password==password){
				// alert()
                window.location.href="user-panel2.html";
                
                // document.querySelector(".submit").href="www.google.az";
            }
            else{
                alert("Wrong username or password")
            }
        }
        else{
            alert("Wrong username or password")
        }
    })
}
login();
function add_data(){
    var submit=document.querySelector(".create");
    submit.addEventListener("click",function(){
        var usernameInput=document.querySelector("#username").value;
        var emailInput=document.querySelector("#email1").value;
        var passwordInput=document.querySelector("#password1").value;
        var user={
		user:usernameInput,
        email:emailInput,
        password:passwordInput
    }
    localStorage.setItem(emailInput,JSON.stringify(user))
    alert("Account Created");
    document.querySelector("#username").value="";
    document.querySelector("#email1").value="";
    document.querySelector("#password1").value="";
    })
    
}
add_data();
