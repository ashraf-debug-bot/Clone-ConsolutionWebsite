var a=0;
	var b=0;
	var c=0;
	var d=0;
	func1();
	func2();
	func3();
	func4();
	function func1(){
		document.getElementsByClassName('con')[0].innerHTML="<h1>"+a+"</h1>";
		a++;
		if(a<124){
        setTimeout(func1,0000);
	}
	}

	function func2(){
		document.getElementsByClassName('con')[1].innerHTML="<h1>"+b+"</h1>";
		b++;
		if(b<100){
        setTimeout(func2,0000);
	}
	}
	function func3(){
		document.getElementsByClassName('con')[2].innerHTML="<h1>"+c+"</h1>";
		c++;
		if(c<220){
        setTimeout(func3,0000);
	}
	}
	function func4(){
		document.getElementsByClassName('con')[3].innerHTML="<h1>"+d+"</h1>";
		d++;
		if(d<300){
        setTimeout(func4,0000);
	}
	}
