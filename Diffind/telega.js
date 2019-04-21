

 


function newHttpRequest(type, func, asset, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if(httpRequest.readyState == 4 && callback)
            callback(JSON.parse(httpRequest.response));
    };
    
    httpRequest.open(type, addr + func, true);
    httpRequest.setRequestHeader("Content-Type", "application/json");
    httpRequest.send(JSON.stringify(asset));
}

function handleUpdates(result) {
    if(result.ok) {
        result.result.forEach(function(msg) {
            console.log("update:\n" + JSON.stringify(msg));
            if(msg.update_id >= offset)
                offset = msg.update_id + 1;
        });
    } else
        console.log("Telegram error " + result.error_code + ":\n" + result.description);
}

function handleResult(result) {
    if(result.ok) 
        console.log("result:\n" + JSON.stringify(result.result));
    else
        console.log("Telegram error " + result.error_code + ":\n" + result.description);
}



var token = "796944203:AAH09-z8doFWQom-OB9DJIPkbgH12nrSAzo", //your telegram bot token from the BotFather

    addr = "https://api.telegram.org/bot"+token+"/",
    offset = 1 // will be overridden by getUpdates
    // chatid = "395488371"; // chat id of the bot chat

function OnStart(first_name, last_name, email, tel, comm, high_school) {
    var name_chats =    ["Dima", "NICK"]
    var some_id_chats = ["395488371", ""]
    for( let i = 0; i < some_id_chats.length; i++){
        var chatid = some_id_chats[i]
        var msg = {"chat_id": chatid, "text": "Имя: " + first_name + "\nФамилия: " + last_name +  "\nПочта: " + email  +  "\nТелефон: " + tel+ "\nКоманда: "+ comm + "\nВУЗ/Школа: " + high_school};

        // newHttpRequest("get", "getUpdates", null, handleUpdates);
        newHttpRequest("post", "sendMessage", msg, handleResult);
    }   
    
}

function sign_in(){
    let first_name = document.getElementById("first_name").value || 0
    let last_name = document.getElementById("last_name").value || 0
    let email = document.getElementById("email").value || 0
    let tel = document.getElementById("tel").value || 0
    let comm = document.getElementById("comm").value || 0 
    let high_school = document.getElementById("high_school").value || 0
   
    if (first_name != 0 && last_name != 0 && email != 0 && comm != 0 && high_school != 0 && tel != 0){
         OnStart(first_name, last_name, email, tel, comm, high_school);
    }
   
    
}





