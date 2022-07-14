function createCookie(cookieName, cookieValue, daysToExpire) {
    var date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    console.log("value of expire days: " + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie = cookieName + "=" + cookieValue + "; expires = " + date.toGMTString();
}

function accessCookie(cookieName) {
    var name = cookieName + "=";
    var allCookieArray = document.cookie.split(';');
    console.log("value of allCookieArray :" + allCookieArray)
    for (var i = 0; i < allCookieArray.length; i++) {
        var temp = allCookieArray[i].trim();
        if (temp.indexOf(name) == 0)
            console.log("value of temp :" + temp.substring(name.length, temp.length))
        return temp.substring(name.length, temp.length);
    }
    return "";
}

function checkCookie() {
    var user = accessCookie("testCookie");
    console.log("value of user :" + user);
    alert("Welcome Back " + user + "!!!");
}

function createNewCookie() {
    user = prompt("Please enter your name");
    num = prompt("How many days you want to store your name on your computer?");
    if (user != "" && user != null) {
        createCookie("testCookie", user, num);
    }
}