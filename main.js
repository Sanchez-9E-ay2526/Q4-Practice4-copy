function setCode() {
    let password = "";

    do {
        password = prompt("Enter a password longer than 8 characters", "");
    } while (password.length < 5);

    window.alert("Entered password: " + password);
}
