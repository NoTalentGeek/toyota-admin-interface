//Chat logic.
var String_Delimeter = "*!@#^%$&*(*!@#^%$&*(*!@#^%$&*(";
$("#ntg-form-chat-tool").submit(function(_Object_Event){





    _Object_Event.preventDefault();





    var String_MessageNew = $("#ntg-input-chat-tool").val(); //Take the value of the chat input.
    if(String_MessageNew){ //Do simple string validation before sending message to chat server.
        //Sent an SocketIO event with the value of chat input as a "parameter".
        Object_SocketIO_Client.emit(
            "ntg_event_message_sent_to_server",
            String_NameDisplay + String_Delimeter + $("#ntg-input-chat-tool").val()
        );
    }





    $("#ntg-input-chat-tool").val(""); //Empty the send message text input.





    return false;





});





//These codes below happened if this object received message.
Object_SocketIO_Client.on("ntg_event_message_sent_to_server", function(_Object_DataReceived){





    var String_Received = _Object_DataReceived;





    var Array_String_Received = String_Received.split(String_Delimeter);





    //Testing string received, then split it into 2 to prepare right and left chat alignment.
    /*
    console.log("=====TEST SPLIT=====");
    console.log(Array_String_Received[0]);
    console.log(Array_String_Received[1]);
    console.log("=====TEST SPLIT=====");
    */





    //If this user received its own message, that just sent.
    if(String_NameDisplay == Array_String_Received[0]){
        $("#ntg-ul-chat-message").append($("<li class='list-group-item text-left'><strong>" + Array_String_Received[0] + ":</strong> " + Array_String_Received[1] + "</li>"));
    }
    else if(String_NameDisplay != Array_String_Received[0]){
        $("#ntg-ul-chat-message").append($("<li class='list-group-item text-right'>" + Array_String_Received[1]  + "<strong> :" + Array_String_Received[0] + "</li>"));
    }
    




    //These two lines of codes are for scrolling the chat box to the newest chat received.
    var Object_Element = document.getElementById("ntg-ul-chat-message");
    Object_Element.scrollTop = Object_Element.scrollHeight;





});