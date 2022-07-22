document.getElementById('btnTinhGiaiThua').onclick = function () {
    var nhapSo = Number(document.getElementById('nhapSo').value);


    var giaiThua = 1;
    var giaTri = 1;
    while (giaTri <= nhapSo) {
        giaiThua = giaiThua * giaTri;
        giaTri++;
    }
    document.getElementById('ketQua2').innerHTML = giaiThua;
}

document.getElementById('btnTinhN').onclick = function () {
    var x = Number(document.getElementById('nhapSoX').value);
    var n =Number(document.getElementById('nhapSoN').value);
    var sum = 0;
    // khai bao a
    var a = 1;
    var i = 1;//bat dau tu i = 1
    while (i <= n) {//dieu kien ket thuc vong lap i <= n 
        a *= x;//moi lan lap gt tang x lan
        //moi lan lap sum tang len lt 
        sum += a;
        i++;//moi lan lap i tang len 1
    }

    document.getElementById('ketQua3').innerHTML = sum;
}

    var S = 0;
	var i = 0;
	while(S < 10000)
	{
		i++;
		S = S + i;
	}
    document.getElementById('ketQua4').innerHTML = i;


    document.getElementById('btnTinhThe').onclick = function () {
        var x = Number(document.getElementById('nhapThe').value);
       
        var output = '';
        // khai bao a
        var dem = 1;
        
        for (dem <= 10) {//dieu kien ket thuc vong lap i <= n 
            var div='  <div class="alert alert-success mt-2">Hello</div>'
            output +=div;
            dem++
        }
    
        document.getElementById('ketQua5').innerHTML = output;
    }