function validatePassword() {

    let pass = document.getElementById('form').elements["password"].value;

    let val;

    if(pass == 12345678)
        val = true;
    else
        val = false;

    if(!val)
        window.alert("Password is incorrect!");
    else
        changeHeader();
}

function changeHeader() {

    document.getElementById('header').innerHTML = "Your Information is Correct";
    document.getElementById('header').style.color = "lime";
}
