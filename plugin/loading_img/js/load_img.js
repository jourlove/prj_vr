$(function(){
	plugins_init_function.push(load_img_init);
    plugins_config_get_function.push(build_load_img);
    $('#loadImgModal').on('show.zui.modal', function (e) {
        chooseMediaResCallBack = changeLoadImg;
    });
})
function load_img_init(){
	data = panoConfig.loading_img;
	if(data&&data.imgPath&&data.bgcolor){
		$('#loadImgModal .modal-body img').attr('src',data.imgPath);
		$("#loadImgModal .modal-body input[name='bgcolor']").val(data.bgcolor);
		if (data.isopen=='0') {
	    	$("#loadImgModal .modal-body input[name='isopen']:first").attr('checked',true);
		}else{
			$("#loadImgModal .modal-body input[name='isopen']:last").attr('checked',true);
		}
	    
	}
}
function open_load_img(){
    $("#loadImgModal").modal('show');
}
function changeLoadImg(data) {
    $(openMediaResObj).parent().prev().find('img').attr("src", data.src);
    $(openMediaResObj).parent().prev().find('img').data("usecustomlogo", 1);
    $('#logoModal .modal-body button:last').show();
}
// function removeLogoImg(){
//     $('#logoModal .modal-body img').attr('src','/plugin/custom_logo/images/custom_logo.png');
//     $('#logoModal .modal-body img').data('usecustomlogo',0);
//     $('#logoModal .modal-body input.form-control').val('');
//     $('#logoModal .modal-body button:last').hide();
// }
function build_load_img(panoConfig){
	var loadObj = {};
	var isopen = $("#loadImgModal .modal-body input[name='isopen']:checked").val();

	loadObj.isopen = isopen;
	loadObj.imgPath = $('#loadImgModal .modal-body img').attr('src');
	loadObj.bgcolor = $("#loadImgModal .modal-body input[name='bgcolor']").val();

	panoConfig.loading_img = loadObj;
}