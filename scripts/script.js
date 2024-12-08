const $=(selector)=>document.querySelector(selector);

function validation(event){
    const name=$("#s-name").value.trim();
    const email=$("#s-email").value.trim();
    const emailConfirm=$("#s-confirm").value.trim();
    const emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let emailCheck1=emailPattern.test(email);
    let emailCheck2=emailPattern.test(emailConfirm);
    let isValid=true;
    if(name==""){
        $("#s-span-1").innerText="Name is required.";
        isValid=false;
    }else{$("#s-span-1").innerText="*";}

    if(email==""||!emailCheck1){
        $("#s-span-2").innerText="Valid email is required.";
        isValid=false;
    }else{$("#s-span-2").innerText="*";}

    if(emailConfirm==""||!emailCheck2||email!==emailConfirm){
        $("#s-span-3").innerText="The emails do not match.";
        isValid=false;
    }else{
        $("#s-span-3").innerText="*";
    }

    const checkbox1=$("#s-privacy").checked;
    if(!checkbox1){
        $("#s-span-4").innerText="(This is required.)";
        $("#s-span-4").style.marginLeft="auto";
        isValid=false;
    }else{
        $("#s-span-4").innerText="*";
        $("#s-span-4").style.marginLeft="0";
    }

    if(!isValid){
        event.preventDefault();
    }
}

// if the user choose other genre, ask her/him to specify the genre
function userInput(){
    const selectOthers = document.querySelector("#s-genre");
    const userInput = document.querySelector("#s-field-7");

    if (selectOthers && userInput) {
        selectOthers.addEventListener("change", (event) => {
            if (event.target.value == "other") {
                userInput.style.display = "inline-block"; 
            } else {
                userInput.style.display = "none"; 
            }
        });
    } 
}


document.addEventListener("DOMContentLoaded",()=>{
    userInput();

    $("#s-email").addEventListener("paste", () => {
        alert("Please type the email address manually.");
});

$("#s-confirm").addEventListener("paste", () => {
    alert("Please type the email address manually.");
});

$("#s-form").addEventListener("submit",(event)=>{
    validation(event)
});


});

