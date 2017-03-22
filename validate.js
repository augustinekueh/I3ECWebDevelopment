function namecheck() {
    var name, space, cap, cap1, cap2, cap3, nameL;
    name = register.Name.value;
    nameL = name.length;
    space = name.indexOf(" ");
    cap = name.charAt(0);
    cap2 = name.charAt(space + 1);
    cap1 = cap.toUpperCase();
    cap3 = cap2.toUpperCase();
    if (nameL === 0) {
        document.getElementById("name1").innerHTML = "Please enter your name.";
        return false;
    } else {
        if (space === -1) {
            document.getElementById("name1").innerHTML = "Your full name must contain a space.";
            return false;
        } else {
            if (cap === cap1 && cap2 === cap3) {
                document.getElementById("name1").innerHTML = "Correct.";

            } else {
                document.getElementById("name1").innerHTML = "You must have capital letter in front of your first and last name.";
                return false;
            }
        }
    }






    var pass, pass2, pwl;
    pass = register.Password.value;
    pass2 = register.Password2.value;
    pwl = pass.length;


    if (pwl === 0) {
        document.getElementById("pass1").innerHTML = "Please enter your password.";
        return false;
    } else if (pwl !== 0) {
        if (pwl < 10) {
            document.getElementById("pass1").innerHTML = "Your password must contain at least 10 words.";
            return false;
        } else if (pwl >= 10) {

            if (pass !== pass2) {
                document.getElementById("pass1").innerHTML = "Incorrect. Please reenter your password.";
                return false;
            }
            else if (pass === pass2) {
                document.getElementById("pass1").innerHTML = "Correct.";

            }
        }
    }

    var email, a;
    email = register.Email.value;
    a = email.indexOf("@");
    if (a === -1) {
        document.getElementById("email1").innerHTML = "Please include an '@' in your email address.";
        return false;
    } else {
        document.getElementById("email1").innerHTML = "Correct.";
    }

    var telephone, empty;
    telephone = register.Telephone.value;
    empty = telephone.length;
    if (empty === 0) {
        document.getElementById("tele").innerHTML = "Please enter your phone number";
        return false;
    } else {
        document.getElementById("tele").innerHTML = "Correct.";
    }

    return true;
}




			