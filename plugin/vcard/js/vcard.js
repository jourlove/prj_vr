$(function(){
    //向main_edit.js 注册初始化方法
    plugins_init_function.push(vcard_init);
    plugins_config_get_function.push(vcard_get);    
})

function changeVcardLogo(data) {
    $(openMediaResObj).closest('#vcardModal').find('.vcard_logo').attr("src", data.src);   
    
}


function changeVcardLogoForWx(data) {
    $(openMediaResObj).closest('#vcardModal').find('.vcard_wx_logo').attr("src", data.src);    
    
}



function vcard_init(){  
    var data = panoConfig.vcard;  
    if(data!=null){
        $('#vcardModal .modal-body img').attr('src',data.logo);
        $("#vcardModal .wx").val(data.wx);        
        $("#vcardModal .qq").val(data.qq);         
        $("#vcardModal .email").val(data.email);         
        $("#vcardModal .addr").val(data.addr);         
        $("#vcardModal .phone").val(data.phone);         
        $("#vcardModal .company").val(data.company);         
        $("#vcardModal .vcard_logo").attr('src',data.logo);  
        $("#vcardModal .vcard_wx_logo").attr('src',data.wx_logo);  
 
        $("#vcardModal #flag_vcard").attr("checked",(data.flag_vcard||0));  
        $("#vcardModal #flag_vcard").bootstrapSwitch('state',(data.flag_vcard||0)); 
        $('#vcardModal .vcard_logo_btn').click(function(event) {             
                chooseMediaResCallBack = changeVcardLogo;
            
        });        
        
         $('#vcardModal .vcard_wx_logo_btn').click(function(event) {
                chooseMediaResCallBack = changeVcardLogoForWx;
             
        });  
         
    }   
}

 

function vcard_get(panoConfig){   
    var data = {};     
    data.wx = $("#vcardModal .wx").val();   
    data.qq = $("#vcardModal .qq").val();   
    data.email = $("#vcardModal .email").val();   
    data.addr = $("#vcardModal .addr").val();   
    data.phone = $("#vcardModal .phone").val();   
    data.company = $("#vcardModal .company").val();   
    data.flag_vcard =  $("#vcardModal #flag_vcard").prop("checked"); 
    data.logo = $('#vcardModal .modal-body .vcard_logo').attr('src');
    data.wx_logo = $('#vcardModal .modal-body .vcard_wx_logo').attr('src');
    panoConfig.vcard = data;
}
 

function openVcard(){
    $('#vcardModal').modal('show');
}