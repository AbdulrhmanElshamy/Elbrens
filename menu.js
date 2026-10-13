// Transcribed from the restaurant's two printed menu pages.
// Prices are EGP; null means the printed menu quotes by weight without a price.
const menuGroups = [
  {id:'meals',name:'الوجبات',photo:'grill',items:[
    ['وجبة فراخ',110,'ربع فرخة + أرز + سلطات + عيش'],
    ['وجبة كفتة',135,'ربع كفتة + أرز + سلطات + عيش'],
    ['البرنس ١',170,'ربع كفتة + مكرونة فرن + أرز + سلطات'],
    ['البرنس ٢',165,'ربع فرخة + ثمن كفتة + أرز + سلطات + عيش'],
    ['البرنس ٣',210,'ربع فرخة + ربع كفتة + أرز + سلطات + عيش'],
    ['البرنس ٤',190,'نصف فرخة + أرز + سلطات + عيش'],
    ['البرنس ٥',265,'نصف فرخة + نصف كفتة + أرز + سلطات + عيش'],
    ['البرنس ٦',310,'نصف كباب + نصف كفتة + ربع فرخة + أرز + عيش'],
    ['البرنس ٧',320,'ربع كباب + نصف كفتة ضاني + أرز + عيش'],
    ['البرنس ٨',370,'ربع كباب + نصف كفتة ضاني + أرز + عيش'],
    ['البرنس ٩',700,'ربع كباب + ربع كفتة + ربع ريش + ربع سجق ضاني + أرز + بطاطس + كوارع + عيش'],
    ['وجبة المزاج',425,'فرد حمام + نصف كباب + نصف طرب + أرز + سلطات + عيش']
  ]},
  {id:'grill',name:'المشويات',photo:'grill',labels:['ربع كيلو','نصف كيلو','٣/٤ كيلو','كيلو'],items:[
    ['ريش ضاني',[280,530,720,1000]],['كباب ضاني',[250,490,700,950]],
    ['كباب مشكل',[200,400,630,770]],['كبدة ضاني',[280,530,720,1000]],
    ['طرب ضاني',[170,320,420,600]],['طرب كندوز',[150,270,370,500]],
    ['كفتة ضاني',[125,270,370,500]],['كفتة كندوز',[115,240,310,450]],
    ['فرخة شيش',[90,165,220,300]],['فرخة شواية',[90,165,220,290]]
  ]},
  {id:'casseroles',name:'الطواجن',photo:'oriental',items:[
    ['طاجن كباب حلة',240],['طاجن بامية باللحمة',230],['طاجن خضار مشكل',230],
    ['طاجن لحمة بالبصل',230],['طاجن بطاطس باللحمة',230],['طاجن عكاوي بالبصل',250],
    ['طاجن ورق عنب بالعكاوي',300],['طاجن ورق عنب بالكوارع',270],
    ['طاجن كبدة إسكندراني',190],['طاجن خضار سادة',30],['طاجن ملوخية',40]
  ]},
  {id:'sandwiches',name:'السندوتشات',photo:'sandwich',items:[
    ['فهيتا لحم / فراخ',90],['برجر لحم جبنة / بيض',85],['شيش طاووق',85],
    ['فراخ بانيه',85],['سندوتش زنجر',85],['حواوشي إسكندراني',95],['باكيت بطاطس',35],
    ['حواوشي بلدي فحم',[40,50]],['كفتة على الفحم',[40,70]],['كبدة إسكندراني',[40,60]]
  ]},
  {id:'mahshi',name:'المحاشي',photo:'oriental',items:[['محشي ورق عنب',60],['محشي ممبار',90]]},
  {id:'pizza',name:'البيتزا',photo:'pizza',labels:['صغير S','وسط M','كبير L'],items:[
    ['بيتزا فور سيزون',[null,170,230]],['بيتزا شيش البرنس',[120,170,200]],
    ['بيتزا بسطرمة تشيز',[120,160,200]],['بيتزا شيكن باربكيو',[110,150,200]],
    ['بيتزا شيكن رانش',[110,150,200]],['بيتزا مارجريتا',[80,110,150]],
    ['بيتزا أطفال',[80,110,160]],['بيتزا سجق',[90,120,170]],['بيتزا لحمة',[100,150,200]],
    ['بيتزا سوسيس',[80,110,160]],['بيتزا كريسبي',[90,120,170]],
    ['بيتزا بسطرمة',[100,150,200]],['بيتزا فراخ حارة',[100,140,180]],
    ['بيتزا فهيتا فراخ',[100,150,200]],['بيتزا زنجر',[90,150,190]],
    ['بيتزا تونة',[null,160,200]],['بيتزا ميكس جبن',[100,150,200]],
    ['بيتزا ميكس فراخ',[110,160,210]],['بيتزا ميكس لحوم',[110,170,220]],
    ['بيتزا جمبري',[null,200,280]]
  ]},
  {id:'plates',name:'أطباق البرنس',photo:'oriental',items:[
    ['طلب بانيه + أرز + بطاطس',180],['طلب شيش + أرز + بطاطس',180],
    ['طلب فهيتا + أرز + بطاطس',180],['فتة موزة ضاني',400],['فتة لحمة بلدي',280],
    ['فتة كوارع + بطاطس',250],['فتة لحمة + فرد حمام',425]
  ]},
  {id:'crepe',name:'الكريب',photo:'crepe',items:[
    ['كريب البرنس',120,'شيش طاووق + جمبري مقلي'],['كريب بطاطس',60],
    ['كريب جبنة موتزاريلا',80],['كريب جبنة رومي',80],['كريب ميكس جبنة',90],
    ['كريب سجق',90],['كريب سوسيس',85],['كريب برجر',95],['كريب كفتة',100],
    ['كريب ميكس لحوم',110],['كريب شاورما فراخ',100],['كريب شيش',100],
    ['كريب فهيتا',100],['كريب بانيه',85],['كريب استربس',100],['كريب ميكس فراخ',110],
    ['كريب سوبر كرانشي',100],['كريب نوتيلا',75],['كريب شوكولاتة موز',90]
  ]},
  {id:'savory-pastry',name:'الفطير الحادق',photo:'pastry',labels:['وسط M','كبير L'],items:[
    ['فطيرة سجق',[140,170]],['فطيرة لحمة',[160,200]],['فطيرة سوسيس',[120,170]],
    ['فطيرة فراخ',[150,190]],['فطيرة بسطرمة',[160,210]],['فطيرة ميكس فراخ',[160,210]],
    ['فطيرة ميكس لحوم',[170,230]],['فطيرة جبنة رومي',[160,190]],
    ['فطيرة جمبري',[200,280]],['فطيرة البرنس',[180,250]],
    ['فطيرة سجق كيري',[170,220]],['فطيرة سجق بسطرمة',[180,230]]
  ]},
  {id:'dessert',name:'فطير حلو',photo:'dessert',items:[
    ['فطيرة سكر سادة',100],['فطيرة بسبوسة وقشطة',125],['فطيرة نوتيلا قشطة',170],
    ['فطيرة لبن سكر',110],['فطيرة نوتيلا',150],['فطيرة لوتس',170]
  ]},
  {id:'syrian',name:'الركن السوري',photo:'sandwich',items:[
    ['ساندوتش شاورما سوري',[90,120]],['وجبة عربي ٦ قطع + بطاطس',140],
    ['وجبة عربي ٩ قطع + بطاطس',190],['فتة شاورما فراخ',140],['فتة شاورما فراخ إكسترا',180]
  ]},
  {id:'pasta',name:'المكرونات',photo:'pasta',items:[
    ['مكرونة فرن بشاميل',40],['مكرونة وايت بانيه فراخ',85],['طاجن مكرونة بالفراخ',75],
    ['طاجن مكرونة باللحمة',85],['طاجن مكرونة بالكبدة',80],['طاجن مكرونة بالسجق',90]
  ]},
  {id:'kitchen',name:'المطبخ',photo:'oriental',items:[
    ['جوز حمام محشي أرز',350],['فرد حمام محشي أرز',175],['طبق أرز أبيض',25],
    ['طبق أرز بسمتي',35],['طبق أرز بالخلطة',45],['طبق أرز بالشعرية',30]
  ]},
  {id:'trays',name:'الصواني',photo:'grill',items:[
    ['صينية اللمة',700],['صينية لحم ضاني',800],['صينية البرنس',1150],
    ['صينية الكيف',1250],['صينية الباشا',1350],['صينية السلطان',1450],['صينية العيلة الكبيرة',1900]
  ]},
  {id:'soups',name:'الشوربة',photo:'oriental',items:[
    ['شوربة لسان عصفور',20],['شوربة فراخ بالكريمة',80],['شوربة خضار',30],['شوربة كوارع',60]
  ]},
  {id:'settlement',name:'التسوية',photo:'grill',items:[
    ['ديك رومي',250],['فخذ بتلو',null],['فخذ ضاني',null],['جوز حمام محشي',100],
    ['فرخة',50],['كيلو كفتة',50],['كيلو لحمة',50],['كيلو حواوشي',70],['كيلو أرز',50]
  ]}
];
const menuPhotos = {
  grill:'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=700&q=80',
  oriental:'https://images.unsplash.com/photo-1598866594230-a7c12756260f?auto=format&fit=crop&w=700&q=80',
  sandwich:'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80',
  pizza:'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80',
  crepe:'https://images.unsplash.com/photo-1618213839049-89f7d3fcdbcd?auto=format&fit=crop&w=700&q=80',
  pastry:'https://images.unsplash.com/photo-1579697096981-41fe1430e6a2?auto=format&fit=crop&w=700&q=80',
  dessert:'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=700&q=80',
  pasta:'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=700&q=80'
};
let nextProductId = 1;
const products = menuGroups.flatMap(group => group.items.map(([name,prices,desc]) => {
  const variants = Array.isArray(prices)
    ? prices.flatMap((price,index) => price === null ? [] : [{label:group.labels?.[index] || `اختيار ${index+1}`,price}])
    : [{label:prices === null ? 'حسب الوزن' : 'الطلب',price:prices}];
  return {id:nextProductId++,name,cat:group.id,badge:group.name,img:menuPhotos[group.photo],variants,
    price:variants[0].price,details:desc || '',desc:desc || (prices === null ? 'السعر حسب الوزن — يتم تأكيده مع المطعم.' :
      variants.length>1 ? variants.map(v=>`${v.label}: ${v.price} ج.م`).join(' • ') : group.id==='settlement' ? 'خدمة تسوية' : group.name)};
}));
const categories = menuGroups.map(g=>[g.id,menuPhotos[g.photo],g.name]);
let activeCat='meals', searchTerm='', cart=[];
let selectedProduct=null, selectedVariant=0, previousFocus=null, toastTimer;
const eg=n=>new Intl.NumberFormat('ar-EG').format(n)+' ج.م';
const number=n=>new Intl.NumberFormat('ar-EG').format(n);
const normalize=s=>s.normalize('NFKD').replace(/[\u064B-\u065F\u0670\u0640]/g,'').replace(/[أإآ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه').toLowerCase();
const priceText=p=>p.price===null?'حسب الوزن':`${p.variants.length>1?'<span class="price-prefix">من</span>':''}${eg(p.price)}`;
function productCard(p) {
  const variants=p.variants.length>1?`<div class="variant-prices">${p.variants.map(v=>`<div class="variant-price"><span>${v.label}</span><strong>${eg(v.price)}</strong></div>`).join('')}</div>`:'';
  return `<article class="product"><div class="product-title">${p.name}</div>${p.details?`<p class="product-desc">${p.details}</p>`:p.price===null?'<p class="product-desc">خدمة تسوية — السعر يتأكد حسب الوزن</p>':''}${variants}<div class="product-footer"><span class="price">${priceText(p)}</span><button class="add" aria-label="أضف ${p.name}" onclick="openProduct(${p.id})">أضف <span aria-hidden="true">+</span></button></div></article>`;
}
function renderCategories() {
  document.getElementById('categories').innerHTML=categories.map(([id,image,name])=>{
    const count=products.filter(p=>p.cat===id).length;
    return `<li><button class="category ${activeCat===id?'active':''}" aria-pressed="${activeCat===id}" onclick="setCategory('${id}')"><span>${name}</span><span class="category-count">${number(count)}</span></button></li>`;
  }).join('');
}
function renderProducts() {
  let list=products.filter(p=>p.cat===activeCat);
  const query=normalize(searchTerm.trim());
  if(query)list=list.filter(p=>normalize(p.name+' '+p.badge+' '+p.details).includes(query));
  const title=categories.find(c=>c[0]===activeCat)[2];
  document.getElementById('menuTitle').innerHTML=`${title} <span>${number(list.length)} صنف</span>`;
  document.getElementById('menuGrid').innerHTML=menuGroups.map(g=>{
    const items=list.filter(p=>p.cat===g.id);
    if(!items.length)return '';
    const note=g.id==='grill'?'اختار الوزن المناسب ليك':g.id==='pizza'||g.id==='savory-pastry'?'كل حجم بسعره':g.id==='settlement'?'خدمة التسوية للأكل الخاص بيك':`${number(items.length)} صنف على مزاجك`;
    return `<section class="menu-group" aria-labelledby="heading-${g.id}"><div class="menu-group-heading"><img class="menu-group-photo" loading="lazy" src="${menuPhotos[g.photo]}" alt=""><div><h3 id="heading-${g.id}">${g.name}</h3><p>${note}</p></div><span class="menu-group-rule" aria-hidden="true"></span></div><div class="group-items">${items.map(productCard).join('')}</div></section>`;
  }).join('')||`<div class="menu-empty"><h3>مش لاقيين الصنف ده في القسم</h3><p>جرّب اسم تاني أو اختار قسم مختلف.</p><button class="primary" onclick="resetMenu()">عرض أصناف القسم</button></div>`;
}
function setCategory(cat) {
  if(!categories.some(c=>c[0]===cat))return;
  activeCat=cat;searchTerm='';document.getElementById('menuSearch').value='';renderCategories();renderProducts();
  const categoryButton=document.querySelector('.category.active');
  categoryButton?.focus({preventScroll:true});
  categoryButton?.scrollIntoView({behavior:motionBehavior(),block:'nearest',inline:'nearest'});
  scrollToMenu();
}
function searchMenu(value) {searchTerm=value;renderProducts();}
function resetMenu() {
  searchTerm='';document.getElementById('menuSearch').value='';
  renderProducts();
}
function motionBehavior(){return window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth';}
function openProduct(id) {
  const p=products.find(x=>x.id===id);if(!p)return;
  previousFocus=document.activeElement;selectedProduct=p;selectedVariant=0;
  document.getElementById('modalContent').innerHTML=`<div class="modal-image"><img src="${p.img}" alt=""><button class="close modal-close" aria-label="إغلاق تفاصيل الصنف" onclick="closeAll()">×</button></div><div class="modal-content"><h3>${p.name}</h3>${p.details?`<p>${p.details}</p>`:p.price===null?'<p>السعر حسب الوزن، وهنأكد السعر معاك على واتساب.</p>':''}${p.variants.length>1?`<span class="option-label">اختار ${p.cat==='grill'?'الوزن':p.cat==='pizza'||p.cat==='savory-pastry'?'الحجم':'الاختيار المناسب'}</span><div class="options">${p.variants.map((v,i)=>`<button class="option ${i===0?'selected':''}" aria-pressed="${i===0}" onclick="selectVariant(${i})">${v.label} — ${eg(v.price)}</button>`).join('')}</div>`:''}<div class="modal-bottom"><b class="price" id="selectedPrice">${p.price===null?'حسب الوزن':eg(p.price)}</b><button class="primary" onclick="addToCart(${p.id},selectedVariant);closeAll()">أضف للسلة</button></div></div>`;
  document.querySelector('.cart-panel').inert=true;
  document.getElementById('productModal').inert=false;
  document.body.classList.remove('cart-open');document.body.classList.add('modal-open');
  document.querySelector('.modal-close').focus({preventScroll:true});
}
function selectVariant(index) {
  if(!selectedProduct?.variants[index])return;
  selectedVariant=index;
  document.querySelectorAll('#modalContent .option').forEach((b,i)=>{b.classList.toggle('selected',i===index);b.setAttribute('aria-pressed',i===index)});
  document.getElementById('selectedPrice').textContent=eg(selectedProduct.variants[index].price);
}
function addToCart(id,variantIndex=0) {
  const p=products.find(x=>x.id===id),v=p?.variants[variantIndex];if(!v)return;
  const key=`${id}-${variantIndex}`,found=cart.find(x=>x.key===key);
  if(found)found.qty++;else cart.push({...p,key,variant:v.label,price:v.price,qty:1});
  renderCart();clearTimeout(toastTimer);
  document.getElementById('cartLive').textContent=`اتضاف ${p.name} للسلة`;
  toastTimer=setTimeout(()=>document.getElementById('cartLive').textContent='',2200);
}
function addOffer(name='صينية البرنس'){const p=products.find(x=>x.name===name);if(p)addToCart(p.id);openCart();}
function changeQty(key,n){const item=cart.find(x=>x.key===key);if(!item)return;item.qty+=n;if(item.qty<1)cart=cart.filter(x=>x.key!==key);renderCart();}
function renderCart() {
  const count=cart.reduce((s,x)=>s+x.qty,0),subtotal=cart.reduce((s,x)=>s+(x.price??0)*x.qty,0);
  const hasUnpriced=cart.some(x=>x.price===null),delivery=count?25:0;
  document.getElementById('cartCount').textContent=number(count);
  document.getElementById('cartItems').innerHTML=count?cart.map(x=>`<div class="cart-item"><div class="cart-item-info"><div class="cart-item-name">${x.name}${x.variants.length>1?` — ${x.variant}`:''}</div><div class="cart-item-price">${x.price===null?'حسب الوزن — يتأكد من المطعم':eg(x.price)}</div></div><div class="quantity"><button aria-label="تقليل كمية ${x.name}" onclick="changeQty('${x.key}',-1)">−</button><span>${number(x.qty)}</span><button aria-label="زيادة كمية ${x.name}" onclick="changeQty('${x.key}',1)">+</button></div></div>`).join(''):'<div class="empty">سلتك لسه فاضية<br>اختار أكلك من المنيو وهنجهّز طلبك.</div>';
  document.getElementById('subtotal').textContent=eg(subtotal)+(hasUnpriced?' + أصناف حسب الوزن':'');
  document.getElementById('delivery').textContent=eg(delivery);
  document.getElementById('total').textContent=eg(subtotal+delivery)+(hasUnpriced?' + تسوية حسب الوزن':'');
  document.getElementById('floatingCart').hidden=!count;
  document.getElementById('floatingCartCount').textContent=number(count);
  document.getElementById('floatingCartPrice').textContent=eg(subtotal)+(hasUnpriced?' + حسب الوزن':'');
  document.querySelector('.checkout').disabled=!count;
}
function openCart() {
  previousFocus=document.activeElement;document.getElementById('productModal').inert=true;
  document.querySelector('.cart-panel').inert=false;
  document.body.classList.remove('modal-open');document.body.classList.add('cart-open');
  document.querySelector('.cart-panel .close').focus({preventScroll:true});
}
function closeAll() {
  document.body.classList.remove('cart-open','modal-open');
  document.getElementById('productModal').inert=true;document.querySelector('.cart-panel').inert=true;
  if(previousFocus?.isConnected)previousFocus.focus({preventScroll:true});
}
function scrollToMenu(){document.getElementById('menu').scrollIntoView({behavior:motionBehavior()});}
function scrollToOffer(){document.getElementById('offer').scrollIntoView({behavior:motionBehavior(),block:'center'});}
function scrollToBranches(){document.getElementById('branches').scrollIntoView({behavior:motionBehavior(),block:'center'});}
function scrollToContact(){document.getElementById('contact').scrollIntoView({behavior:motionBehavior(),block:'center'});}
function checkout() {
  if(!cart.length)return;
  const items=cart.map(x=>`• ${x.name}${x.variants.length>1?` (${x.variant})`:''} × ${x.qty} — ${x.price===null?'السعر حسب الوزن':eg(x.price*x.qty)}`).join('\n');
  const total=cart.reduce((s,x)=>s+(x.price??0)*x.qty,0)+25;
  const message=`أهلاً، أريد طلب:\n${items}\n\nرسوم التوصيل: ${eg(25)}\nالإجمالي: ${eg(total)}${cart.some(x=>x.price===null)?' + سعر الأصناف حسب الوزن (يرجى تأكيده)':''}`;
  window.open(`https://wa.me/201029256588?text=${encodeURIComponent(message)}`,'_blank','noopener');
}
document.addEventListener('keydown',e=>{
  if(e.key==='Escape')closeAll();
  if(e.key!=='Tab')return;
  const panel=document.body.classList.contains('modal-open')?document.getElementById('productModal'):document.body.classList.contains('cart-open')?document.querySelector('.cart-panel'):null;
  if(!panel)return;
  const controls=[...panel.querySelectorAll('button:not(:disabled),a[href],input')];
  const first=controls[0],last=controls.at(-1);
  if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
  else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
});
renderCategories();renderProducts();renderCart();
