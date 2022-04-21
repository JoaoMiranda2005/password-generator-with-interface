function getPassword() {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+";
    var passwordLength = 16; //Basta Alterar este numero para mudar o nr de caracteres da password
    var pasword = "";

    for (var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        pasword += chars.substring(randomNumber, randomNumber + 1);
    }

    document.getElementById("password").value = pasword;
}
