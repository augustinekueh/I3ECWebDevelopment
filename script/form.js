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


    var id, id1;
    id = register.ID.value;
    id1 = id.length;


    if (id1 !== 9) {
        document.getElementById("miriid1").innerHTML = "Your Miri Id must have 9 numbers.";
        return false;
    } 
            else if (id1 === 9) {
                document.getElementById("miriid1").innerHTML = "Correct.";

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

    

    return true;
}




			