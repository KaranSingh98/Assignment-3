function validatePassword() {

    let pass = document.getElementById('form').elements["password"].value;

    let val;

    if(pass == 12345678)
        val = true;
    else
        val = false;

    if(!val)
        window.alert("Password is incorrect!");
}
