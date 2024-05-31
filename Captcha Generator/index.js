const captchaTextBox = document.querySelector(".captcha input");
const refreshButton = document.querySelector(".refresh");
const captchaInputBox = document.querySelector(".enter input");
const message = document.querySelector(".message");
const submitButton = document.querySelector(".checkCaptcha");

let captchaText = null;

// Function of Generate the Captcha
const generateCaptcha = () => {
    const randomString = Math.random().toString(36).substring(2,7);
    const randomStringArray = randomString.split("");
    const changeString = randomStringArray.map((char => Math.random() > 0.5 ? char.toUpperCase() : char));
    captchaText = changeString.join("   ")
    captchaTextBox.value = captchaText;
    console.log(captchaText);
};

// Function of Refresh Button
const refresh = () => {
    generateCaptcha();
    captchaInputBox.value = "";
    captchaValidate();
}
const captchaValidate = () => {
    submitButton.classList.toggle("disabled",!captchaInputBox.value);

    if(captchaInputBox.value === "") message.classList.remove("active");

}

// Function of Submit Button
const submit = () => {
    captchaText  = captchaText.split("")
    .filter((char) => char !== " ")
    .join("");

    message.classList.add("active");
    if(captchaInputBox.value === captchaText){
        message.innerText = "Entered captcha is correct"
        message.style.color = "#826afb"
    }else{
        message.innerText = "Entered captcha is not correct";
        message.style.color = "#FF2525"
    }
}


refreshButton.addEventListener("click",refresh);
captchaInputBox.addEventListener("keyup",captchaValidate);
submitButton.addEventListener("click",submit);


generateCaptcha();