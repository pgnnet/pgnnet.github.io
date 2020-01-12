if (!String.prototype.format) {
	String.prototype.format = function() {
		var args = arguments;
		return this.replace(/{(\d+)}/g, function(match, number) { 
			return typeof args[number] != 'undefined' ? args[number]: match;
		});
	};
}
function D(id, from, to) {
	for (var i = from; i < to; i++) {
		var v = "<span class='material-icons'>&#x{0}; - </span>{1}</br>".format(i.toString(16), i.toString(16));
		_(id).insertAdjacentHTML('beforeend', v);
	}
}
var pop = _('popup').style;
var dem = _('frame').style;
window.addEventListener('keydown', (e) => {
	var key = e.keyCode ? e.keyCode : e.which;
	if (key == 67 && e.altKey) {
		if(!popup) {
			openPopup(pop, dem);
			_('cloud').focus();
		}else {
			closePopup(pop, dem);
			_('cloud').blur();
		}
	}
});
function closePopup(a, b) {
	a.opacity = '0';
	b.backgroundColor = 'rgba(255,255,255, 0)';
	a.transform = 'scale(.4)';
	b.zIndex = '-99999';
	a.transition = '.1s';
	popup = false;
}
function openPopup(a, b) {
	a.transition = '.3s';
	a.opacity = '1';
	a.transform = 'scale(1)';
	a.boxShadow = 'rgb(172, 172, 172) 0px 3px 4px -1px';
	b.backgroundColor = 'rgba(200,200,200,.3)';
	b.zIndex = '99999';		
	popup = true;
}
_('exit').addEventListener('click',
	function () {
		closePopup(pop, dem);
	}, true);
_('back_click').addEventListener('click',
	function () {
		closePopup(pop, dem);
	}, true);
_$('material-icons', 0).addEventListener('click',
	function (){
		_('info').innerHTML = data['main']['intro'];
	}, true);
_$('material-icons', 1).addEventListener('click',
	function (){
		_('info').innerHTML = data['main']['post'];
	}, true);
_$('material-icons', 2).addEventListener('click',
	function (){
		_('info').innerHTML = data['main']['book'];
	}, true);
_$('material-icons', 3).addEventListener('click',
	function (){
		_('info').innerHTML = data['main']['link'];
	}, true);
_$('material-icons', 4).addEventListener('click',
	function (){
		openPopup(pop, dem);
		_('cloud').focus();
	}, true);
_$('material-icons', 5).addEventListener('click',
	function (){
		_('info').innerHTML = data['main']['cale'];
	}, true);


_('cloud').addEventListener('focus', 
	function() {
		_('atmp_error').innerHTML="";
	}, true);
_('password').addEventListener('focus',
	function() {
		_('atmp_error').innerHTML="";
	}, true);	
function cv() {
	return _('password').value = "cleared";
}
function Redirect() {
	var a = _('cloud').value;
	var b = _('password').value;
	var init_ca = 'd45d8e4410cb10ffb1083a6124628c9f9774b6139b0a8e7eb1bf8a871978bdb0';
	var init_cb = '22b2f5f52e7d8e27ea7ded8e6dc64f0cd65b0fcb1bfb2f4438c08c5f83b16658';
	var init_db = '31fee014c962568de8e86f0901277f601a258108990b7ede26670f4450995c4f';
	var init_ss = '63b23bb2add002dcb5e02474243bfb39beae5f8cfbc7857dc7156141729b7069';
	var init_se = '7da5a9da2a02252dd00fe8768a8529b88b786108e80760472a189baf53f8c7a5';
	var init_dc = 'dadcafb9ab70887e094c004806ea8c33b7ab7b2d40326e7a8801968ee36dd730';
	var init_ml = 'd3296df42683a8ef94779513c91fc4e07e299010d110fe1129eaefdcb8f18ad7';
	var init_cn = '837846f6fa7596a72b6140c5757efee7e36bb1f8d32cdb974b93639abc0e5a98';
	var init_fn = 'd6eb5c2ef2b665a8159570db7dea30f9354e56eb77480d9e9ac71cb56b357df5';
	var cloud_d = "U2FsdGVkX19RFrCdp1I3JPp4gyZZZailMe8IwuHDJQOUHVQESMMY64hZhe5Ozfz3NkoOll9dPdFYfQYpgsisk3HBythYzlCri21Bd4VmjUiPfmpriIct63Lm8ezno9jl";
	var cloud_m = "U2FsdGVkX1+UKlmB9coAeEfFD+zi3aYZthPdsSzzxfTdAZkY3HkF5heO64nk1fxIDrnHamdGaomCe8fK2r4xWg==";
	var cloud_db = "U2FsdGVkX19ec9ZDl7jSHSCwrxNvU5PYSsKYvElee2NFhi9rj16/Bp+2YeBHnmZBrOlo0Pb/8A4HwjetniwRdBRqgTrOc4+nnEg2+ZT2U4GlPSECfOc2YlYffGDvugrvighoNqmnHblYDEajiqC/EguZogOogPIHaQv5xAplTfo=";
	var cloud_ss = "U2FsdGVkX18gb30GwS7v7aIw99dCpxXv/f2ZjocrcEmEQkxnCcXgGuV6npBs8W2nILvf2h3BO56dEJl7rBWxeMj6yDhyRcnTphX5xAoXxWZLK55OKzCm3V4drPN3bLA+C3XGXu16m1QkqbyBGgbVDev6ZCDQ3mCoc9ziNjUIOQU=";
	var cloud_se = "U2FsdGVkX18eA2SwI/HNIvxTRBw4sdjNMh/lbJq4WEwEl5le31sg+nWHThBwTRgn8aO9C/pexvV8/mCUEYND74TLff8XqMxP5ObPW9K/xLb4j24EDpmzV94Fl1WYQbUmMw2PI6408vjwVIqifz9QjKP3iaStnrn/9XmlbowL5iM=";
	var cloud_dc = "U2FsdGVkX19dwpwUq40YGSUeWkimCkbW+4dWIRmuKxMtKz5Of70/jeQTiCgnylvqE8/IgRi8NnH64TObqNyeOyQLwjhwrPqazRdvytj/3NLcbtlT/1j4E8n0mRNA0+uuleCpd7HuX9e4DY08Qzho1K/LyNOkhFcINF81oFqpqc8=";
	var cloud_ml = "U2FsdGVkX1+/yodfBY20y9SJYVQ6S8CWjs6LiobQXr+dc6ny1xeTE8KAM8RhVkkJZKx1A/kA4t1u8YRoUOFQN2DyKx1Sbnvfn5FXIqBMHenm8im/zMuLfhtQK4g4qxtJY1YG/48RxHlys2luzbLKSotwS7lJCAD8yBhtAgClmjQ=";
	var cloud_cn = "U2FsdGVkX1+UZ/eINFFUXD3A+L4YuwJoOqM34tfuPyJ25wuS2EMJ+XBxGIoJEJO/5iHFMQ74KJ8gF2H4RjcekcVmjN+8nl1j9/NlO4HPyaQwNwY86BfE8SVKg5xTBJZAUWGXeJnGWF1kET8muBPgBL/pzBiupamjBRHmd97S2L4=";
	var cloud_fn = "U2FsdGVkX1+ULDsewk2M2/Gnkk0tn8Eqqv1e5mj7ioYAzLcQZsMeI+LILuOJmbLQiCsx/SHIlCaV3H1XNPcm7iyVFXGS3PriA95gu6HdO/jBLXz/D74ZINEnGLOr49C0g32jb909VnlG381LA9yG+ty5e6Xtc8EY4Pvvy+O7LPA=";
	var c = sha256.hmac(b, a);
	var d = sha256(b);
	var strWindowFeatures = 'height=' + screen.height + ',width=' + screen.width + ',resizable=yes,scrollbars=yes,toolbar=yes,menubar=yes,location=yes';
	if(c == init_ca || c == init_cb  || c == init_db || c == init_ss || c == init_se || c == init_dc || c == init_ml || c == init_cn || c == init_fn){
		switch(d) {
			case '00d8d3f11739d2f3537099982b4674c29fc59a8fda350fca1379613adbb09119' : 
				var load = CryptoJS.AES.decrypt(cloud_m, b);
				var cloudL = load.toString(CryptoJS.enc.Utf8);
				window.open(cloudL, '', strWindowFeatures); cv(); break;
			case 'd90ee9ccf6bea1d2942a7b21319338198dec2a746f8a0d0771621f00da2e0864' : 
				var load = CryptoJS.AES.decrypt(cloud_d, b);
				var cloudL = load.toString(CryptoJS.enc.Utf8);
				window.open(cloudL, '', strWindowFeatures); cv(); break;
			case '3549b0028b75d981cdda2e573e9cb49dedc200185876df299f912b79f69dabd8' :
				var load = CryptoJS.AES.decrypt(cloud_db, b);
				var cloudL = load.toString(CryptoJS.enc.Utf8);
				window.open(cloudL, '', strWindowFeatures); cv(); break;
			case '74c8865bbc5d0e22ca8e1fe9001d6cf91546d6df95051b6f584d9532b689a35d' :
				var load = CryptoJS.AES.decrypt(cloud_ss, b);
				var cloudL = load.toString(CryptoJS.enc.Utf8);
				window.open(cloudL, '', strWindowFeatures); cv(); break;
			case '3d3b39c99d298b64d8b42b7a0c693f9e647210ea1a6ab1161a30ad4c406af477' :
				var load = CryptoJS.AES.decrypt(cloud_se, b);
				var cloudL = load.toString(CryptoJS.enc.Utf8);
				window.open(cloudL, '', strWindowFeatures); cv(); break;
			case 'bd485425fe4a94d9308946560f84f4003ff6fab6cf3594f28d8f14b878e6f0c2' :
				var load = CryptoJS.AES.decrypt(cloud_dc, b);
				var cloudL = load.toString(CryptoJS.enc.Utf8);
				window.open(cloudL, '', strWindowFeatures); cv(); break;
			case '41e636ebb4669eae3b67cb2fe6848a30c5687ac4f5ab27dcfe9d04a8e30b7b30' :
				var load = CryptoJS.AES.decrypt(cloud_ml, b);
				var cloudL = load.toString(CryptoJS.enc.Utf8);
				window.open(cloudL, '', strWindowFeatures); cv(); break;
			case '7716e7a3f7c1257abeb3a8371ba22e202a803d5757fd7e3c223e8e2e02262ab5' :
				var load = CryptoJS.AES.decrypt(cloud_cn, b);
				var cloudL = load.toString(CryptoJS.enc.Utf8);
				window.open(cloudL, '', strWindowFeatures); cv(); break;
			case '474cafb3965647348461d31cd0f6ca0a95e488f4471a059c5f7b8cb1a2b9a45e' :
				var load = CryptoJS.AES.decrypt(cloud_fn, b);
				var cloudL = load.toString(CryptoJS.enc.Utf8);
				window.open(cloudL, '', strWindowFeatures); cv(); break;

			default : d = "fault"; break;
		}
		b.value = "Attempt failed";
	}else {
		_('atmp_error').innerHTML = '<div class="war">Error code : 203</div>';
	}
}	
