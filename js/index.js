var sc=getItem();
function getItem(){
	var sc=localStorage.getItem('sc')||'[]';
	return JSON.parse(sc);
}
function setItem(sc){
	localStorage.setItem('sc',JSON.stringify(sc));
}
var weiwan=document.querySelector('.gai');
var wancheng=document.querySelector('.wancheng');
var jinx=document.querySelector('.jinx');
var wanc=document.querySelector('.wanc');
var tianjia=document.querySelector('.form-control');

function update(i,field,val){
	sc[i][field]=val;
	setItem(sc);
	rendan();
}
function shanchu(i){
	sc.splice(i,1);
	setItem(sc);
	rendan();
}
tianjia.onkeydown=function(e){
	if(e.keyCode==13){
		if(this.value==''){
			return;
		}
		tian(this.value);
		this.value='';
	}
};
function tian(t){
	sc.unshift({
		wenzi:t,
		bon:false
	});
	setItem(sc);
	rendan();
}
rendan();
function rendan(){
	var wt='';
	var dt='';
	var wt1='0';
	var dt1='0';
	for(var i=0;i<sc.length;i++){
		if(sc[i].bon==true){
			dt1++;
			dt+='<li>'+
				'<input type="checkbox" checked onclick=update('+i+',"bon",false)>'+
				'<p class="shuru">'+sc[i].wenzi+'</p>'+
				'<a href="#" onclick=shanchu('+i+')>-</a>'+
			'</li>'
		}else{
			wt1++;
			wt+='<li>'+
				'<input type="checkbox" onclick=update('+i+',"bon",true)>'+
				'<p class="shuru" contenteditable="true"  onblur=update('+i+',"wenzi",this.innerHTML)>'+sc[i].wenzi+'</p>'+
				'<a href="#" onclick=shanchu('+i+')>-</a>'+
			'</li>'
		}
	}
	jinx.innerHTML=wt1;
	weiwan.innerHTML=wt;
	wanc.innerHTML=dt1;
	wancheng.innerHTML=dt;
}