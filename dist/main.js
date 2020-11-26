(()=>{"use strict";const e=e=>{const t=document.createElement("SECTION");if(t.classList.add("hero"),e.class&&t.classList.add(...e.class),e.size&&t.classList.add(e.size),e.heights&&(t.style.minHeight=e.heights.min,t.style.maxHeight=e.heights.max),console.log("past the min max height section"),e.head){const e=(()=>{console.log("Hero Head ran");const e=document.createElement("DIV");e.classList.add("hero-head");const t=document.createElement("NAV");t.classList.add("navbar","is-fixed-top"),t.id="hero-navbar";const s=document.createElement("DIV");s.classList.add("navbar-brand");const n=document.createElement("A");n.classList.add("navbar-item");const a=document.createElement("img");a.src="https://bulma.io/images/bulma-type-white.png",a.alt="Logo",n.append(a);const o=document.createElement("SPAN");o.classList.add("navbar-burger","burger","has-text-white"),o.dataset.target="navbarMenuHeroA";for(let e=0;e<3;e++){const e=document.createElement("SPAN");o.append(e)}s.append(n,o);const c=document.createElement("DIV");c.classList.add("navbar-menu"),c.id="navbarMenuHeroA";const i=document.createElement("DIV");i.classList.add("navbar-end");const d=document.createElement("A");d.classList.add("navbar-item","is-active"),d.id="homeTAB",d.textContent="Home";const l=document.createElement("A");l.classList.add("navbar-item","link-invert","has-text-link","is-outlined"),l.textContent="Menu",l.id="menuTAB";const r=document.createElement("A");return r.classList.add("navbar-item","has-text-link","is-outlined"),r.id="contactTAB",r.textContent="Contact",i.append(d,l,r),c.append(i),t.append(s,c),e.append(t),e})();t.append(e)}const s=document.createElement("DIV");s.classList.add("hero-body");const n=document.createElement("DIV");n.classList.add("container","has-text-centered"),e.slowStart&&n.classList.add("slow-show-start");const a=document.createElement("H1");a.classList.add("title"),e.titleClass&&a.classList.add(...e.titleClass),a.innerText=e.titleText;const o=document.createElement("H2");return o.classList.add("subtitle"),e.subtitleClass&&o.classList.add(...e.subtitleClass),o.innerText=e.subtitleText,n.append(a,o),s.append(n),t.append(s),t},t=(e,t)=>{const s=document.createElement("DIV");return s.classList.add("columns","level","chef-bio"),s.append(e,t),s},s=e=>{const t=document.createElement("DIV");return t.classList.add(...e),t},n=(e,t)=>{const s=document.createElement("FIGURE");s.classList.add("image",e);const n=document.createElement("IMG");return n.classList.add("is-rounded"),n.src=t,s.append(n),s},a=(e,t,s,n)=>{const a=document.createElement("DIV");a.classList.add("notification",e);const o=document.createElement("H2");o.classList.add("subtitle","is-capitalized"),o.textContent=t;const c=document.createElement("H1");c.classList.add("title","is-uppercase","is-4"),c.textContent=s;const i=document.createElement("SPAN");return i.textContent=n,a.append(o,c,i),a},o={head:!0,cta:!0,slowStart:!0,class:["is-primary","main-hero","is-info"],size:"is-large",heights:{min:"850px",max:"850px"},titleClass:["has-text-info","has-text-weight-light","is-1","has-text-shadow"],titleText:"Welcome to Veganic Corner",subtitleClass:["has-text-link","has-text-shadow"],subtitleText:"come work, talk, commune.. but most importantly be hungry for delicious healthy eats."},c={head:!1,class:["has-text-centered"],size:"",titleClass:["has-text-link","is-4"],titleText:"A Brilliant Menu",subtitleClass:["has-text-link","is-6"],subtitleText:"Paragraph Text. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."},i={items:[{header:"Pick me uppers",description:"We've partnered with blue bottle to bring you all the finest coffee to get you through to happy hour!",item:"Espresso $3.99"},{header:"Time to unwind",description:"Domestic & Imported Beer, over 20 wines, and innovative and fun cocktails.",item:"Gin & Tonic $6.99"}],imgOne:{size:"is-5by4",src:"assets/food/coffee.jpg"},imgTwo:{size:"is-3by4",src:"assets/food/cocktail2.jpg"}},d={items:[{header:"Mains",description:"Lisa expertly crafts dishes from local & fresh ingredients to give you that homemade love.",item:"Broccoli Rabe Fettucine $13.99"},{header:"Sweets",description:"Janes' cookies, brownies, cupcakes are second to none!",item:"Brownie A la Mode $5.99"}],imgOne:{size:"is-4by3",src:"assets/food/pasta.jpg"},imgTwo:{size:"is-3by4",src:"assets/food/brownie.jpg"}},l={title:"Executive Chef",name:"Lisa Shaw",bio:"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Sit amet, consectetur adipiscing elit",figColClasses:["column","is-3","is-offset-2","level-left"],infoColClasses:["column","is-6","level-right","mr-6"],figSrc:"assets/images/chef.jpg",figRatio:"is-2by3",infoColor:"is-success"},r={title:"Head Pastry Chef",name:"Jane Marshall",bio:"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Sit amet, consectetur adipiscing elit",figColClasses:["column","is-5","level-right","mr-6"],infoColClasses:["column","is-5","is-offset-1","level-left"],figSrc:"assets/images/chef2.jpg",figRatio:"is-3by2",infoColor:"is-link",reverse:!0},m=e=>{const{size:t,src:s}=e,n=document.createElement("FIGURE");n.classList.add("image",t),e.classes&&n.classList.add(...e.classes),e.id&&(n.id=e.id);const a=document.createElement("IMG");return a.src=s,n.append(a),n},u=e=>{const t=document.createElement("DIV");t.classList.add("columns");const s=document.createElement("DIV");s.classList.add("column","is-one-fifth","aside","is-offset-1");for(let t of e.items){const e=document.createElement("P");e.classList.add("is-size-7","has-text-weight-bold","is-uppercase","mb-2"),e.textContent=t.header;const n=document.createElement("DIV");n.classList.add("is-size-7","mb-2"),n.textContent=t.description;const a=document.createElement("DIV");a.classList.add("is-size-7","has-text-weight-bold","mb-2"),a.textContent=t.item;const o=document.createElement("HR");s.append(e,n,a,o)}const n=document.createElement("DIV");n.classList.add("column","is-two-fifths","aside");const a=m(e.imgOne);n.append(a);const o=document.createElement("DIV");o.classList.add("column","is-one-quarter","aside");const c=m(e.imgTwo);return o.append(c),t.append(s,n,o),t},p=()=>{const m=document.querySelector("#content"),p=document.createElement("DIV");p.id="pixel-to-watch",console.log(p),m.append(p),new IntersectionObserver((e=>{console.log(e);const t=document.querySelector("#hero-navbar"),s=document.querySelector("#breadcrumb-navbar");e[0].boundingClientRect.y<0?(t.classList.add("fadeaway-quick"),t.classList.remove("fadein"),s.classList.remove("is-hidden"),s.classList.add("fadein")):(t.classList.remove("fadeaway-quick"),t.classList.add("fadein"),s.classList.add("is-hidden"),s.classList.remove("fadein"))})).observe(document.querySelector("#pixel-to-watch"));const h=e(o),f=(()=>{const e=document.createElement("DIV");e.classList.add("columns","mt-6");const o=document.createElement("DIV");o.classList.add("column","is-10","is-offset-1"),e.append(o);const c=[l,r];for(let e of c){const c=n(e.figRatio,e.figSrc),i=a(e.infoColor,e.title,e.name,e.bio),d=s(e.figColClasses),l=s(e.infoColClasses);if(d.append(c),l.append(i),e.reverse){const e=t(l,d);o.append(e)}else{const e=t(d,l);o.append(e)}}return e})(),g=(()=>{const t=document.createElement("DIV");t.classList.add("box","menu-teaser-container","mb-0");const s=e(c),n=document.createElement("SECTION"),a=u(i),o=u(d);return n.append(a,o),t.append(s,n),t})(),L=(()=>{const e=document.createElement("DIV");e.classList.add("box","cta","level");const t=document.createElement("DIV");t.classList.add("level-left");const s=document.createElement("DIV");s.classList.add("column","is-10","is-offset-2"),t.append(s),e.append(t);const n=document.createElement("P");n.classList.add("is-size-6","has-text-weight-bold","is-uppercase","mb-3","has-text-shadow"),n.textContent="Reserve";const a=document.createElement("P");a.classList.add("is-size-5","has-text-weight-bold","is-uppercase","has-text-link","has-text-shadow"),a.textContent="Skip the line";const o=document.createElement("P");o.classList.add("is-size-6","has-text-link","mb-5","has-text-shadow"),o.textContent="Paragraph Text. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.";const c=document.createElement("BUTTON");c.classList.add("button","is-link","is-inverted","is-outlined","is-uppercase"),c.textContent="Reserve Table";const i=document.createElement("P");return i.classList.add("is-size-6","is-italic","has-text-info","has-text-shadow"),i.textContent="You will be redirected to opentable.com to reserve table.",s.append(n,a,o,c,i),e})();m.append(h,f,g,L)},h={head:!0,cta:!1,slowStart:!1,class:["is-primary","main-hero","is-info"],size:"",heights:{min:"300px",max:"350px"},titleClass:["has-text-info","has-text-weight-light","is-1","has-text-shadow"],titleText:"Always fresh & local ingredients made everyday",subtitleClass:["has-text-link","has-text-shadow"],subtitleText:"...and we're sure you've heard about our coffee"},f=["Light Bites","Empty Stomach Quenchers","Sweet Tooth Much?"],g={description:"fdsafdsafdsafdsa",price:7.99},L={"Light Bites":["Garden Medley Salad","Butternut Squash Soup"],"Empty Stomach Quenchers":["Vegan Gnocchi Pesto","Not Your Moms Fried Chickn","Turky Burgers"],"Sweet Tooth Much?":["All Vegan Chocolate Chip Cookie","Classic Donut","Vegan French Toast"]},E={"Garden Medley Salad":"assets/food/apps/salad.jpg","Butternut Squash Soup":"assets/food/apps/soup.jpg","Vegan Gnocchi Pesto":"assets/food/mains/pasta.jpg","Not Your Moms Fried Chickn":"assets/food/mains/chickensandwich.jpg","Turky Burgers":"assets/food/mains/turkeyburger.jpg","All Vegan Chocolate Chip Cookie":"assets/food/desserts/cookie.jpg","Classic Donut":"assets/food/desserts/donut.jpg","Vegan French Toast":"assets/food/desserts/frenchtoast.jpg"},b=()=>{const t=document.querySelector("#content"),s=e(h),n=(()=>{const e=document.createElement("SECTION");e.classList.add("section","mt-6");const t=document.createElement("DIV");t.classList.add("columns");const s=document.createElement("DIV");s.classList.add("column","is-one-quarter","is-offset-1","menu-food-column");const n=document.createElement("DIV");return n.classList.add("column","auto","img-food-column"),t.append(s,n),e.append(t),e})(),a=(()=>{const e=e=>{setTimeout((()=>{const t=document.querySelector("#food-img");t.src=E[e.target.id],t.classList.add("transitioning-src")}),300)},t=e=>{const t=document.querySelector("#food-img");t.src="",t.classList.remove("transitioning-src")},s=s=>{const n=document.createElement("UL");n.classList.add("menu-list");for(let a of s){const s=document.createElement("LI"),o=document.createElement("A");o.innerText=a,o.id=a,o.addEventListener("mouseover",e),o.addEventListener("mouseleave",t),s.append(o),n.append(s)}return n};return(()=>{const e=document.createElement("ASIDE");e.classList.add("menu");const t=(e=>{const t=[];for(let s of e){const e=document.createElement("P");e.classList.add("menu-label"),e.innerText=s,t.push(e)}return t})(f);for(let n of t){const t=s(L[n.textContent]);e.append(n,t)}return e})()})(),o=(()=>{const e=document.createElement("DIV");e.classList.add("food-img");const t=document.createElement("FIGURE");t.classList.add("image","is-256x256");const s=document.createElement("IMG");return s.classList.add("is-rounded","is-food"),s.id="food-img",s.src="",t.append(s),e.append(t),e})(),c=n.querySelector(".menu-food-column"),i=n.querySelector(".img-food-column");c.append(a);const d=document.createElement("DIV"),l=document.createElement("H1");l.classList.add("title","has-text-link"),l.textContent=g.description;const r=document.createElement("H2");r.classList.add("subtitle","has-text-link"),r.textContent=g.price,d.append(l,r),i.append(o,d),t.append(s,n)},x=[{type:"Twitter",html:"Updates on <a herf='#'>Twitter</a>"},{type:"Facebook",html:"Share on <a href='#'>Facebook</a>"},{type:"Instagram",html:"View our <a href='#'>Instagram</a>"}],v=[{type:"Email",value:"VeganicCorner@gmail.com",icon:"fa-envelope"},{type:"Phone",value:"908-555-1234",icon:"fa-phone-alt"},{type:"Address",value:"55 Cherry Lane",icon:"fa-map-marker-alt"},{type:"Hours",value:["MON-FRI 7am - 10pm","SAT-SUN 8am - 7pm"],icon:"fa-door-open",different:!0}],y=()=>{const e=document.createElement("DIV");e.classList.add("section");const t=document.createElement("DIV");t.classList.add("columns");const s=document.createElement("DIV");s.classList.add("column","is-6","is-offset-3");const n=document.createElement("DIV");n.classList.add("card");const a=(()=>{const e=document.createElement("DIV");e.classList.add("card-content");for(let t of v){const s=document.createElement("DIV");s.classList.add("level");const n=document.createElement("DIV");n.classList.add("level-left");const a=document.createElement("SPAN");a.classList.add("icon","is-small","is-left","mr-2","has-text-success");const o=document.createElement("I");if(o.classList.add("fas",t.icon),a.append(o),n.append(a),t.different){const e=document.createElement("SPAN");e.classList.add("mr-2"),e.innerHTML=`<strong>${t.type}</strong>:`;const s=document.createElement("DIV");for(let e of t.value){const t=document.createElement("P");t.classList.add("is-size-7"),t.innerText=e,s.append(t)}n.append(a,e,s)}else{const e=document.createElement("SPAN");e.innerHTML=`<strong>${t.type}</strong>: ${t.value}`,n.append(a,e)}s.append(n),e.append(s)}return e})(),o=(()=>{const e=document.createElement("FOOTER");e.classList.add("card-footer");for(let t of x){const s=document.createElement("P");s.classList.add("card-footer-item");const n=document.createElement("SPAN");n.innerHTML=t.html,s.append(n),e.append(s)}return e})();return a.append(o),n.append(a),s.append(n),t.append(s),e.append(t),e},C=()=>[document.querySelector("#homeTAB"),document.querySelector("#menuTAB"),document.querySelector("#contactTAB")],T=e=>{for(let t of e)t.id==event.target.id?t.classList.add("is-active"):t.classList.remove("is-active")};document.addEventListener("DOMContentLoaded",(()=>{const e=e=>{if(document.querySelector("#content").innerHTML="","homeTAB"==e.target.id){p();const e=C();T(e),t()}else if("menuTAB"==e.target.id){b();const e=C();T(e),t()}else if("contactTAB"==e.target.id){(()=>{const e=document.querySelector("#content"),t=y();e.append(t)})();const e=C();T(e),t()}},t=()=>{homeTAB.addEventListener("click",e),menuTAB.addEventListener("click",e),contactTAB.addEventListener("click",e)},s=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);s.length>0&&s.forEach((e=>{e.addEventListener("click",(()=>{const t=e.dataset.target,s=document.getElementById(t);e.classList.toggle("is-active"),s.classList.toggle("is-active")}))})),p(),C(),t();const n=document.querySelector("BODY"),a=(()=>{const e=document.createElement("FOOTER");e.classList.add("footer");const t=document.createElement("DIV");t.classList.add("content","has-text-centered");const s=document.createElement("P");return s.innerHTML=['<strong>Site</strong> by <a href="#">Mikey Esteban</a>.','The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.','The website content is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY NC SA 4.0</a>.'].join(" "),t.append(s),e.append(t),e})();n.append(a)}))})();