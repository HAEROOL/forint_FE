export const checkEmailRegEx = (emailText) => {
    var regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    console.log(regEmail.test(emailText))
    if (regEmail.test(emailText) === true) {
        return true
    }else{
        return false
    }
    
}