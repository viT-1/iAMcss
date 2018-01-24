appendEventHandlers();

var cVpCommon = {
	addAttrValNoDelim: function( o, attr_name,  val ) {
		if ( !o.hasAttribute( attr_name ) ) {
			var attr = document.createAttribute( attr_name );
			attr.value = ''
			o.setAttributeNode( attr );
		}
		
		var re = new RegExp( "(^|\\s)" + val + "(\\s|$)", "g" );
		var attr_val = o.getAttribute( attr_name );
		if ( re.test( attr_val ) ) return;
		
		attr_val = attr_val + val;
		o.setAttribute( attr_name, attr_val );
		
		//ie8 fix
		o.className = o.className;
	}
	
	, removeAttrValNoDelim: function( o, attr_name, val ) {
		if ( !o.hasAttribute( attr_name ) ) return;

		var attr_val = o.getAttribute( attr_name );
		attr_val = attr_val.replace( val, "" );
		o.setAttribute( attr_name, attr_val );
		
		//ie8 fix
		o.className = o.className;
	}
	
	, toggleAttrVal: function( o, attr_name, val_a, val_b ) {
		if ( !o.hasAttribute( attr_name ) ) return;
		
		var attrVal = o.getAttribute( attr_name );
		var is_a = attrVal.indexOf(val_a) > -1;
		var is_b = attrVal.indexOf(val_b) > -1;

		if ( is_a )
			o.setAttribute(attr_name, attrVal.replace(val_a, val_b));
		else
			if ( is_b )
				o.setAttribute(attr_name, attrVal.replace(val_b, val_a));

		if ( !is_a && !is_b )
			this.addAttrValNoDelim( o, attr_name, val_b );
		
		//ie8 fix
		o.className = o.className;
	}
};

window.addEventListener = window.addEventListener || function (e, f) { window.attachEvent('on' + e, f); };

function appendEventHandlers(){
	//На обработку щелчка выбираем только те элементы, которые содержат подсписки
	var placeholder = document.getElementById('wgtBooks');
	var clickFolders = placeholder.querySelectorAll('*[vp-tree__label *= "-sttOpen-"], *[vp-tree__label *= "-sttClose-"]');
	
	function folderOnClick(e){
		var target = e.target ? e.target : e.srcElement; //IE8
		cVpCommon.toggleAttrVal(target, 'vp-tree__label', '-sttOpen-', '-sttClose-');
		
		//ie8 fix
		var sibl = target.nextSibling;
		if (sibl)
			sibl.className = sibl.className;
	}
	
	for (var i = 0; i < clickFolders.length; i++){
		if (clickFolders[i].addEventListener)
			clickFolders[i].addEventListener("click", folderOnClick, false );
		else
			clickFolders[i].attachEvent("onclick", folderOnClick);
	}
	
	function labelOnClick(e){
		var target = e.target ? e.target : e.srcElement; //IE8
		var attrVal = target.getAttribute('vp-tree__label');
		var prevActive = placeholder.querySelector('*[vp-tree__label *= "-sttActive-"]');
		if (prevActive)
			cVpCommon.removeAttrValNoDelim(prevActive, 'vp-tree__label', '-sttActive-');
			
		cVpCommon.addAttrValNoDelim(target, 'vp-tree__label', '-sttActive-');
		
		//ie8 fix
		var sibl = target.nextSibling;
		if (sibl)
			sibl.className = sibl.className;
	}
	
	var clickActiveLabels = placeholder.querySelectorAll('*[vp-tree__label]');
	for (var i = 0; i < clickActiveLabels.length; i++){
		if (clickActiveLabels[i].addEventListener)
			clickActiveLabels[i].addEventListener("click", labelOnClick, false );
		else
			clickActiveLabels[i].attachEvent("onclick", labelOnClick);
	}
}