const products=[
["Teamspirit",999,"https://i.ibb.co/R4PTq00T/Green-and-Beige-Modern-Casual-Fashion-Poster.jpg"],
["Cherry Kiss Crop Tee",999,"https://i.ibb.co/3mt9mrDN/IMG-0424.jpg"],
["Serve the Lord",1099,"https://i.ibb.co/HMYVKm3/Green-and-Beige-Modern-Casual-Fashion-Poster.jpg"],
["Courtside Terry Shorts",699,"https://i.ibb.co/C5bvGbnd/Green-and-Beige-Modern-Casual-Fashion-Poster.jpg"],
["Aquilux Mosaie",599,"https://i.ibb.co/JWtCwG3r/IMG-0307.jpg"],
["Metropolitan Heritage Tee",599,"https://i.ibb.co/wFCQCfhZ/Green-and-Beige-Modern-Casual-Fashion-Poster.jpg"],  
["New York- Manhattan",599,"https://i.ibb.co/c0d46XP/Green-and-Beige-Modern-Casual-Fashion-Poster-4.jpg"],
["Slow Morning Club",599,"https://i.ibb.co/mCvsmh6m/IMG-0400.jpg"],
];
let cart=[];
const g=document.getElementById("grid");
products.forEach((p,i)=>{
g.innerHTML+=`<div class=card>
<img src="${p[2]}">
<div class=info>
<h3>${p[0]}</h3>
<div class=price>₹${p[1]}</div>
<select id=s${i}><option>S</option><option>M</option><option>L</option><option>XL</option></select>
<button onclick="add(${i})">ADD TO CART</button>
</div></div>`;
});
function add(i){
let s=document.getElementById("s"+i).value;
let f=cart.find(x=>x.n==products[i][0]&&x.s==s);c
if(f)f.q++;else cart.push({n:products[i][0],p:products[i][1],s:s,q:1});
draw();
}
function draw(){
let h="",t=0;
cart.forEach((c,i)=>{t+=c.p*c.q;h+=`<p>${c.n} (${c.s}) × ${c.q} — ₹${c.p*c.q} <a href=# onclick="cart.splice(${i},1);draw()">✕</a></p>`});
items.innerHTML=h||"Cart is empty.";
total.textContent=t;
}
function checkout(){
if(!cart.length)return alert("Cart is empty");
let msg=`*Aquilux Order*%0AName:${n.value}%0APhone:${p.value}%0AAddress:${a.value}%0A%0A`;
let tot=0;
cart.forEach(c=>{msg+=`${c.n} ${c.s} x${c.q} = ₹${c.p*c.q}%0A`;tot+=c.p*c.q});
msg+=`%0ATotal: ₹${tot}`;
window.open("https://wa.me/919558039135?text="+msg,"_blank");
setTimeout(()=>alert("Thank you for your order."),600);
}
