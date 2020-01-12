<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes" />
	<meta name="theme-color" content="#0087A8" />
	<meta property="og:title" content="PGNNET">
	<meta property="og:type" content="article">
	<meta property="og:site-name" content="github.com">
	<meta property="og:image" content="https://pgnnet.github.io/image/pgnnet.jpg">
	<meta property="og:image:width" content="1280">
	<meta property="og:image:height" content="1280">
	<meta property="og:description" content="PGNNET - profiles, accounts and more...">
	<meta property="og:url" content="https://pgnnet.github.io">
	<meta property="og:url" content="pgnnet.github.io">
	<link rel="shortcut icon" href="image/2dallitter.png" type="image/x-png" sizes="16x16 24x24 32x32 64x64"/>
	<link href="style.css" rel="stylesheet">
	<script type="application/json" src="data.json"></script>
	<script type="text/javascript">
		let data;
		let popup = false;
		function _(e) {
			return document.getElementById(e);
		}
		function _$(e, n) {
			return document.getElementsByClassName(e)[n];
		}
		(function () {			
			var ajax = new XMLHttpRequest();
			ajax.open("GET", 'data.json', true);
			ajax.responseType = 'json';
			ajax.send();
			ajax.onreadystatechange = function () {
				if(this.readyState == 4 && this.status == 200 ) {
					data = JSON.parse(JSON.stringify(this.response));
					_('info').innerHTML = data['main']['intro'];
				}
			}
		})();
	</script>
	<title>PGNNET | <?php echo date('Y'); ?></title>
</head>
<body>
<div class="navigation">
	<div class="up">
		<a href="/"><svg class="logo navigation-icon logoa" viewBox="0 0 600 543" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 439.581H61.4381C73.4419 439.581 82.5502 443.06 88.7627 450.018C94.9752 456.976 98.0815 465.989 98.0815 477.059C98.0815 484.227 96.5547 490.605 93.5011 496.193C90.4475 501.78 86.0776 506.155 80.3916 509.318C74.8108 512.48 68.2824 514.062 60.8063 514.062H38.6938V541.419H9V439.581ZM54.0146 491.291C58.4371 491.291 61.8066 490.026 64.1231 487.495C66.545 484.86 67.7559 481.381 67.7559 477.059C67.7559 472.42 66.6503 468.836 64.439 466.306C62.3331 463.67 59.1215 462.352 54.8043 462.352H38.6938V491.291H54.0146Z" fill="white"/><path d="M158.458 543C140.452 543 126.658 538.572 117.076 529.717C107.599 520.861 102.861 508.105 102.861 491.449C102.861 474.265 107.757 461.087 117.55 451.916C127.448 442.639 141.768 438 160.511 438C172.62 438 183.15 439.476 192.1 442.428V467.887C183.887 464.83 174.042 463.301 162.564 463.301C152.666 463.301 145.295 465.568 140.452 470.101C135.608 474.529 133.186 481.645 133.186 491.449C133.186 500.515 135.24 507.157 139.346 511.374C143.558 515.59 149.929 517.699 158.458 517.699C163.512 517.699 168.356 517.014 172.989 515.643V500.779H152.772V482.435H197.786V533.67C193.469 536.411 187.993 538.678 181.36 540.47C174.831 542.157 167.197 543 158.458 543Z" fill="white"/><path d="M208.9 439.581H234.172L272.553 493.505V439.581H302.246V541.419H276.817L238.594 487.654V541.419H208.9V439.581Z" fill="white"/><path d="M316.408 439.581H341.68L380.061 493.505V439.581H409.755V541.419H384.325L346.102 487.654V541.419H316.408V439.581Z" fill="white"/><path d="M423.917 439.581H500.994V462.352H453.61V478.956H495.15V502.044H453.61V518.648H500.994V541.419H423.917V439.581Z" fill="white"/><path d="M532.718 461.72H504.13V439.581H591V461.72H562.412V541.419H532.718V461.72Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M30 0C13.4315 0 0 13.4315 0 30V370C0 386.569 13.4315 400 30 400H570C586.569 400 600 386.569 600 370V30C600 13.4315 586.569 0 570 0H30ZM216.133 109.837L198.241 118.783L220.606 129.966L256.389 185.877C254.943 187.163 253.382 188.603 251.698 190.156C237.768 203.007 215.468 223.581 180.35 228.369C141.187 233.71 95.4542 202.352 73 183.64C95.3645 257.443 175.877 315.591 256.389 317.828C302.451 319.107 360.224 289.643 415.052 261.68C456.06 240.766 495.42 220.693 527 214.951C489.793 211.568 441.076 183.887 404.06 162.853C392.126 156.073 381.409 149.983 372.685 145.621C336.901 127.729 280.99 107.601 280.99 107.601C280.99 107.601 272.044 82.9999 247.443 82.9999C222.842 82.9999 216.133 109.837 216.133 109.837Z" fill="white"/></svg><svg class="logo navigation-icon logob" viewBox="0 0 600 399" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M30 0C13.4315 0 0 13.4315 0 30V369C0 385.569 13.4315 399 30 399H570C586.569 399 600 385.569 600 369V30C600 13.4315 586.569 0 570 0H30ZM216.502 108.719L198.69 117.626L220.956 128.759L256.581 184.424C255.141 185.704 253.587 187.138 251.911 188.684C238.042 201.478 215.84 221.961 180.877 226.729C134.341 233.075 91.8239 197.221 76.2344 184.075C75.4139 183.383 74.668 182.754 74 182.197C96.266 255.675 176.424 313.567 256.581 315.793C302.44 317.067 359.959 287.732 414.546 259.893C455.373 239.071 494.559 219.086 526 213.369C488.957 210.002 440.455 182.442 403.602 161.502C391.72 154.751 381.05 148.688 372.365 144.345C336.739 126.532 281.074 106.493 281.074 106.493C281.074 106.493 272.168 81.9999 247.675 81.9999C223.182 81.9999 216.502 108.719 216.502 108.719Z" fill="white"/></svg></a>
		<a class="material-icons" title="message">&#xe0c9;</a>
		<a class="material-icons" title="state">&#xe871;</a>
		<a class="material-icons" title="books">&#xe86e;</a>
	</div>
	<div class="down">
		<a class="material-icons" title="links">&#xe250;</a>
		<a class="material-icons" title="CAP : alt+c">&#xe2bd;</a>
		<a class="material-icons" title="calendar">&#xe8df;</a>
	</div>
</div>

<div class="main">
	<div class="container">
		<div id="personal">
			<div id="image_box">
				<div id="profile_picture"></div>
				<div id="name">
					<p class="bold_font fs18">Shon | @pgnnet</p>
					<p class="thin_font  blue fs16">Software Engineer &amp; Web Developer</p>						
				</div>				
			</div>
			<hr>
			<div id="about" class="fs14">
				<div class="clear">
					<span class="thin_font blue">Education : </span><span class="normal_font" id="edu"><a href="https://korea.edu">Korea University </a></span>
				</div>
				<div class="clear">
					<span class="thin_font blue">Location : </span><span class="normal_font ">Seoul, South Korea</span>
				</div>
				<div class="clear">
					<span class="thin_font blue">Inquires : </span><span class="normal_font "><a href = "mailto:shaytkulov@gmail.com">shaytkulov@nate.com</a></span>
				</div>
				<div class="clear">
					<span class="thin_font blue">Commercial : </span><span class="normal_font "><a href = "https://unittype.com">unittype.com</a></span>
				</div>
			</div>
		</div>
	</div>
	<div class="container">
		<div class="max" id="info"></div>
	</div>
	<div id="icons"></div>
</div>
<div class="flex_r_ct" id="frame">
	<div id="back_click">
	</div>
	<div id="popup" >
		<div class="material-icons" id="exit">&#xe14c;</div>
		<div class="flex_r_cm">
			<div class="flex_c_cb">
				<div class="bold_font fs20">Cloud Access Point</div>
				<div id="atmp_error"></div>
				<div class="flex_r_cm btl">
					<label for="cloud" class="material-icons">&#xe2c2;</label>
					<input class="inputs" id="cloud" type="text">					
				</div>
				<div class="flex_r_cm btl">
					<label for="cloud" class="material-icons">&#xe5da;</label>
					<input class="inputs" id="password" type="password">					
				</div>
				<button class="blue_button" onclick="Redirect()">Redirect</button>
			</div>
		</div>
	</div>	
</div>
<script src="pgnnet.js"></script>
<script src="mini.js"></script>
</body>
</html>