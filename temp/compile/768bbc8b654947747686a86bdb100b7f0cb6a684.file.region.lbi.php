<?php /* Smarty version Smarty-3.1.7, created on 2018-05-21 23:34:59
         compiled from "D:/Develop/xampp/htdocs/prj_vr/template\plugins\region.lbi" */ ?>
<?php /*%%SmartyHeaderCode:6869198315b02e723976d78-56643261%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '768bbc8b654947747686a86bdb100b7f0cb6a684' => 
    array (
      0 => 'D:/Develop/xampp/htdocs/prj_vr/template\\plugins\\region.lbi',
      1 => 1526290237,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '6869198315b02e723976d78-56643261',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'maxNode' => 0,
    'i' => 0,
    'regions' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty-3.1.7',
  'unifunc' => 'content_5b02e7239d0b1',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_5b02e7239d0b1')) {function content_5b02e7239d0b1($_smarty_tpl) {?>
<div  id="region_wrap" style="position: relative;display: inline-block;vertical-align: middle;">
	<?php $_smarty_tpl->tpl_vars['i'] = new Smarty_Variable;$_smarty_tpl->tpl_vars['i']->step = 1;$_smarty_tpl->tpl_vars['i']->total = (int)ceil(($_smarty_tpl->tpl_vars['i']->step > 0 ? $_smarty_tpl->tpl_vars['maxNode']->value+1 - (1) : 1-($_smarty_tpl->tpl_vars['maxNode']->value)+1)/abs($_smarty_tpl->tpl_vars['i']->step));
if ($_smarty_tpl->tpl_vars['i']->total > 0){
for ($_smarty_tpl->tpl_vars['i']->value = 1, $_smarty_tpl->tpl_vars['i']->iteration = 1;$_smarty_tpl->tpl_vars['i']->iteration <= $_smarty_tpl->tpl_vars['i']->total;$_smarty_tpl->tpl_vars['i']->value += $_smarty_tpl->tpl_vars['i']->step, $_smarty_tpl->tpl_vars['i']->iteration++){
$_smarty_tpl->tpl_vars['i']->first = $_smarty_tpl->tpl_vars['i']->iteration == 1;$_smarty_tpl->tpl_vars['i']->last = $_smarty_tpl->tpl_vars['i']->iteration == $_smarty_tpl->tpl_vars['i']->total;?>
		<div>
          <select class="form-control" name="region[]" id="region_type_<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
" data-type="<?php echo $_smarty_tpl->tpl_vars['i']->value;?>
">
            <option value="-1">--全部地区--</option>			
          </select>
      </div>
	<?php }} ?>
</div>
<script>
	var maxNode = <?php echo $_smarty_tpl->tpl_vars['maxNode']->value;?>
;
	var regions = <?php echo $_smarty_tpl->tpl_vars['regions']->value;?>
;
	$(function(){
		if (regions&&regions.region_1!=undefined&&regions.region_1!=0) {
			$("#region_wrap select").each(function(){
				var type = $(this).data('type');
				loadRegion(type,type==1?0:regions['region_'+(type-1)],false,regions['region_'+type]);
			});
		}else
			loadRegion(1,0,false);

		
		$("#region_wrap select").change(function(){
			var type = $(this).data('type');
			if (type<maxNode) {
				loadRegion(type+1,$(this).val(),false);
			}
			for(var i = 2; i <=maxNode - type; i++) {
				$("#region_type_"+(type+i)).html('<option value="-1">--全部地区--</option>');
			}
		})
	})
	function loadRegion(type,pid,cover,s){
		if(pid>=0){
			$.post('/region.php',{
			'pid':pid,
			'act':'list'
			},function(res){
				var op = cover?"":'<option value="-1">--全部地区--</option>';
				for(var i=0 ; i<res.length ; i++){
					var r = res[i];
					op+='<option value="'+r.id+'" '+(s==r.id?"selected":"")+'>'+r.name+'</option>';
				}
				$("#region_type_"+type).html(op);

			},'json');
		}
	}
	function getRegions(){
		var regions = {};
		$("#region_wrap select").each(function(){
				var type = $(this).data('type');
				regions['region_'+type] = $(this).val();
		});
		return regions;
	}
</script><?php }} ?>