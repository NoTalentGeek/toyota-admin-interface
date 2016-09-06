//Chat logic.
var String_Delimeter = "*!@#^%$&*(*!@#^%$&*(*!@#^%$&*(";
$("#ntg_form_chat_tool").submit(function(_Object_Event){





    _Object_Event.preventDefault();
    var String_MessageNew = $("#ntg_input_chat_tool").val(); //Take the value of the chat input.
    if(String_MessageNew){ //Do simple String validation before sending message to chat server.
        //Sent an SocketIO event with the value of chat input as a "parameter".
        Object_SocketIO_Client.emit(
            "ntg_event_message_sent_to_server",
            String_NameDisplay + String_Delimeter + $("#ntg_input_chat_tool").val()
        );
    }
    $("#ntg_input_chat_tool").val(""); //Empty the send message text input.





    return false;





});





//These codes below happened if this object received message.
Object_SocketIO_Client.on("ntg_event_message_sent_to_server", function(_Object_DataReceived){





    var String_Received = _Object_DataReceived;
    var Array_String_Received = String_Received.split(String_Delimeter);





    //Testing String received, then split it into 2 to prepare right and left chat alignment.
    /*
    console.log("=====TEST SPLIT=====");
    console.log(Array_String_Received[0]);
    console.log(Array_String_Received[1]);
    console.log("=====TEST SPLIT=====");
    */





    //If this user received its own message, that just sent.
    /*
    if(String_NameDisplay == Array_String_Received[0]){
        $("#ntg_ul_chat_message").append($("<li class='list-group-item text-left'><strong>" + Array_String_Received[0] + ":</strong> " + Array_String_Received[1] + "</li>"));
    }
    else if(String_NameDisplay != Array_String_Received[0]){
        $("#ntg_ul_chat_message").append($("<li class='list-group-item text-right'>" + Array_String_Received[1]  + "<strong> :" + Array_String_Received[0] + "</li>"));
    }
    */
    




    //These two lines of codes are for scrolling the chat box to the newest chat received.
    var Object_Element = document.getElementById("ntg_ul_chat_message");
    Object_Element.scrollTop = Object_Element.scrollHeight;





});





setTimeout(Void_AfterAngularLoad, 0);
var String_DivChatBox = "<ul class=' list-group ntg-debug-margin-0 ' > </ul>";
function Void_AfterAngularLoad(){

    Void_ReInitiateUserListButtonChat();

}
function Void_ReInitiateUserListButtonChat(){
    var Array_Object_NTGDivChat = $("#ntg_div_chat_box");
    var Array_Object_NTGDivChatChildren = Array_Object_NTGDivChat.children();
    var Array_Object_NTGULUserChildren = $("#ntg_ul_user").children();
    var Number_NTGDivChatChildrenLength = Array_Object_NTGDivChatChildren.length;
    var Number_NTGULUserChildrenLength = Array_Object_NTGULUserChildren.length;
    for(var Number_I = 0; Number_I < Number_NTGULUserChildrenLength; Number_I ++){
        //Bind click at the <a></a>.
        //Assign object to the clicked <a></a>.
        var Object_AUser = $($(Array_Object_NTGULUserChildren[Number_I]).children()[0]);
        Object_AUser.click(function(){
            //Here I need to add a new chat box.
            //However, I need to add a class of ntg-display-none to all
            //    other chat box.
            //Hence, I need to list all the available chat box first.
            for(var Number_J = 0; Number_J < Number_NTGDivChatChildrenLength; Number_J ++){

                $(Array_Object_NTGDivChatChildren[Number_J]).addClass("ntg-display-none");

            }
            //After all chat box is hidden then try to add the new chat box.
            var Object_NTGDivChat = Array_Object_NTGDivChat.append(String_DivChatBox);
            //Get the newest appened object.
            var Object_ULUser = $($(Object_NTGDivChat).children()[0]);
            //Set the ID.
            var String_AdminName = $("#ntg_div_string_name_display").html();
            var String_UserName = $($($(Object_AUser.children()[0]).children()[1]).children()[0]).html();
            var String_ULUserID = ("ntg_ul_chat_" + String_AdminName + "_" + String_UserName).replace(" ", "");
            //var String_ULUserIDRemoveLineBreak = String_ULUserID.replace(/(\r\n|\n|\r)/gm,"")
            //var String_ULUserIDRemoveWhiteSpace = String_ULUserIDRemoveLineBreak.replace("\\s","");
            Object_ULUser.attr(
                "id",
                String_ULUserID
                    .replace("(", "")
                    .replace(")", "")
                    .replace("@", "")
                    .replace(/ /g,"")
                    .replace(/(\r\n|\n|\r)/gm,"")
                    .replace(/\s+/, "")
                    .split(".").join("")
            );
            console.log(Object_ULUser.attr("id"));
        });
    }
}