(()=>{"use strict";const e=e=>{console.log("Main Hero ran");const t=document.createElement("SECTION");if(t.classList.add("hero"),e.class&&t.classList.add(...e.class),e.size&&t.classList.add(e.size),e.head){const e=(()=>{console.log("Hero Head ran");const e=document.createElement("DIV");e.classList.add("hero-head");const t=document.createElement("NAV");t.classList.add("navbar");const s=document.createElement("DIV");s.classList.add("navbar-brand");const n=document.createElement("A");n.classList.add("navbar-item");const a=document.createElement("img");a.src="https://bulma.io/images/bulma-type-white.png",a.alt="Logo",n.append(a);const o=document.createElement("SPAN");o.classList.add("navbar-burger","burger"),o.dataset.target="navbarMenuHeroA";for(let e=0;e<3;e++){const e=document.createElement("SPAN");o.append(e)}s.append(n,o);const c=document.createElement("DIV");c.classList.add("navbar-menu"),c.id="navbarMenuHeroA";const i=document.createElement("DIV");i.classList.add("navbar-end");const l=document.createElement("A");l.classList.add("navbar-item","is-active"),l.textContent="Home";const d=document.createElement("A");d.classList.add("navbar-item","link-invert","has-text-link","is-outlined"),d.textContent="Menu";const r=document.createElement("A");return r.classList.add("navbar-item","has-text-link","is-outlined"),r.textContent="Contact",i.append(l,d,r),c.append(i),t.append(s,c),e.append(t),e})();t.append(e)}const s=document.createElement("DIV");s.classList.add("hero-body");const n=document.createElement("DIV");n.classList.add("container","has-text-centered");const a=document.createElement("H1");a.classList.add("title"),e.titleClass&&a.classList.add(...e.titleClass),a.innerText=e.titleText;const o=document.createElement("H2");return o.classList.add("subtitle"),e.subtitleClass&&o.classList.add(...e.subtitleClass),o.innerText=e.subtitleText,n.append(a,o),s.append(n),t.append(s),t},t=(e,t)=>{const s=document.createElement("DIV");return s.classList.add("columns","level","chef-bio"),s.append(e,t),s},s=e=>{const t=document.createElement("DIV");return t.classList.add(...e),t},n=(e,t)=>{const s=document.createElement("FIGURE");s.classList.add("image",e);const n=document.createElement("IMG");return n.classList.add("is-rounded"),n.src=t,s.append(n),s},a=(e,t,s,n)=>{const a=document.createElement("DIV");a.classList.add("notification",e);const o=document.createElement("H2");o.classList.add("subtitle","is-capitalized"),o.textContent=t;const c=document.createElement("H1");c.classList.add("title","is-uppercase","is-4"),c.textContent=s;const i=document.createElement("SPAN");return i.textContent=n,a.append(o,c,i),a},o={title:"Executive Chef",name:"Lisa Shaw",bio:"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Sit amet, consectetur adipiscing elit",figColClasses:["column","is-3","is-offset-2","level-left"],infoColClasses:["column","is-6","level-right","mr-6"],figSrc:"assets/chef.jpg",figRatio:"is-2by3",infoColor:"is-success"},c={title:"Head Pastry Chef",name:"Jane Marshall",bio:"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Sit amet, consectetur adipiscing elit",figColClasses:["column","is-5","level-right","mr-6"],infoColClasses:["column","is-5","is-offset-1","level-left"],figSrc:"assets/chef2.jpg",figRatio:"is-3by2",infoColor:"is-link",reverse:!0},i=()=>{const e=document.createElement("DIV");e.classList.add("columns","mt-6");const i=document.createElement("DIV");i.classList.add("column","is-10","is-offset-1"),e.append(i);const l=[o,c];for(let e of l){const o=n(e.figRatio,e.figSrc),c=a(e.infoColor,e.title,e.name,e.bio),l=s(e.figColClasses),d=s(e.infoColClasses);if(l.append(o),d.append(c),e.reverse){const e=t(d,l);i.append(e)}else{const e=t(l,d);i.append(e)}}return e},l=()=>{console.log("Home ran");const t=document.querySelector("#content"),s=e({head:!0,class:["is-primary","main-hero","is-info"],size:"is-large",titleClass:["has-text-info","has-text-weight-light","is-1","slow-show-start"],titleText:"Welcome to Veganic Corner",subtitleClass:["has-text-link","slow-show-start"],subtitleText:"come work, talk, commune.. but most importantly be hungry for delicious healthy eats."}),n=i(),a=(()=>{console.log("Menu Teaser ran");const t=document.createElement("DIV");t.classList.add("box","menu-teaser-container");const s=e({head:!1,class:["has-text-centered"],size:"is-medium",titleClass:["has-text-link","is-4"],titleText:"A Brilliant Menu",subtitleClass:["has-text-link","is-6"],subtitleText:"Paragraph Text. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."});return t.append(s),t})();t.append(s,n,a)},d=["Light Bites","Empty Stomach Quenchers","Sweet Tooth Much?"],r={description:"fdsafdsafdsafdsa",price:7.99},m={"Light Bites":["Garden Medley Salad","Butternut Squash Soup"],"Empty Stomach Quenchers":["Vegan Gnocchi Pesto","Not Your Moms Fried Chickn","Turky Burgers"],"Sweet Tooth Much?":["All Vegan Chocolate Chip Cookie","Classic Donut","Vegan French Toast"]},u={"Garden Medley Salad":"assets/food/apps/salad.jpg","Butternut Squash Soup":"assets/food/apps/soup.jpg","Vegan Gnocchi Pesto":"assets/food/mains/pasta.jpg","Not Your Moms Fried Chickn":"assets/food/mains/chickensandwich.jpg","Turky Burgers":"assets/food/mains/turkeyburger.jpg","All Vegan Chocolate Chip Cookie":"assets/food/desserts/cookie.jpg","Classic Donut":"assets/food/desserts/donut.jpg","Vegan French Toast":"assets/food/desserts/frenchtoast.jpg"},p=()=>{const t=document.querySelector("#content"),s=e({head:!1,class:["is-primary"],size:"",titleClass:["has-text-grey-darker"],titleText:"Always fresh & local ingredients made everyday",subtitleClass:[],subtitleText:"...and we're sure you've heard about our coffee"}),n=(()=>{const e=document.createElement("SECTION");e.classList.add("section","mt-6");const t=document.createElement("DIV");t.classList.add("columns");const s=document.createElement("DIV");s.classList.add("column","is-one-quarter","is-offset-1","menu-food-column");const n=document.createElement("DIV");return n.classList.add("column","auto","img-food-column"),t.append(s,n),e.append(t),e})(),a=(()=>{const e=e=>{setTimeout((()=>{const t=document.querySelector("#food-img");t.src=u[e.target.id],t.classList.add("transitioning-src")}),300)},t=e=>{const t=document.querySelector("#food-img");t.src="",t.classList.remove("transitioning-src")},s=s=>{const n=document.createElement("UL");n.classList.add("menu-list");for(let a of s){const s=document.createElement("LI"),o=document.createElement("A");o.innerText=a,o.id=a,o.addEventListener("mouseover",e),o.addEventListener("mouseleave",t),s.append(o),n.append(s)}return n};return(()=>{const e=document.createElement("ASIDE");e.classList.add("menu");const t=(e=>{const t=[];for(let s of e){const e=document.createElement("P");e.classList.add("menu-label"),e.innerText=s,t.push(e)}return t})(d);for(let n of t){const t=s(m[n.textContent]);e.append(n,t)}return e})()})(),o=(()=>{const e=document.createElement("DIV");e.classList.add("food-img");const t=document.createElement("FIGURE");t.classList.add("image","is-256x256");const s=document.createElement("IMG");return s.classList.add("is-rounded","is-food"),s.id="food-img",s.src="",t.append(s),e.append(t),e})(),c=n.querySelector(".menu-food-column"),i=n.querySelector(".img-food-column");c.append(a);const l=document.createElement("DIV"),p=document.createElement("H1");p.classList.add("title","has-text-link"),p.textContent=r.description;const f=document.createElement("H2");f.classList.add("subtitle","has-text-link"),f.textContent=r.price,l.append(p,f),i.append(o,l),t.append(s,n)},f=[{type:"Email",value:"VeganicCorner@gmail.com",icon:"fa-envelope"},{type:"Phone",value:"908-555-1234",icon:"fa-phone-alt"},{type:"Address",value:"55 Cherry Lane",icon:"fa-map-marker-alt"},{type:"Hours",value:["MON-FRI 7am - 10pm","SAT-SUN 8am - 7pm"],icon:"fa-door-open",different:!0}],h=[{type:"Twitter",html:"Updates on <a herf='#'>Twitter</a>"},{type:"Facebook",html:"Share on <a href='#'>Facebook</a>"},{type:"Instagram",html:"View our <a href='#'>Instagram</a>"}],g=()=>{const e=document.createElement("DIV");e.classList.add("section");const t=document.createElement("DIV");t.classList.add("columns");const s=document.createElement("DIV");s.classList.add("column","is-6","is-offset-3");const n=document.createElement("DIV");n.classList.add("card");const a=(()=>{const e=document.createElement("DIV");e.classList.add("card-content");for(let t of f){const s=document.createElement("DIV");s.classList.add("level");const n=document.createElement("DIV");n.classList.add("level-left");const a=document.createElement("SPAN");a.classList.add("icon","is-small","is-left","mr-2","has-text-success");const o=document.createElement("I");if(o.classList.add("fas",t.icon),a.append(o),n.append(a),t.different){const e=document.createElement("SPAN");e.classList.add("mr-2"),e.innerHTML=`<strong>${t.type}</strong>:`;const s=document.createElement("DIV");for(let e of t.value){const t=document.createElement("P");t.classList.add("is-size-7"),t.innerText=e,s.append(t)}n.append(a,e,s)}else{const e=document.createElement("SPAN");e.innerHTML=`<strong>${t.type}</strong>: ${t.value}`,n.append(a,e)}s.append(n),e.append(s)}return e})(),o=(()=>{const e=document.createElement("FOOTER");e.classList.add("card-footer");for(let t of h){const s=document.createElement("P");s.classList.add("card-footer-item");const n=document.createElement("SPAN");n.innerHTML=t.html,s.append(n),e.append(s)}return e})();return a.append(o),n.append(a),s.append(n),t.append(s),e.append(t),e};document.addEventListener("DOMContentLoaded",(()=>{l();const e=e=>{document.querySelector("#content").innerHTML="","homeTab"==e.target.id?l():"menuTab"==e.target.id?p():"contactTab"==e.target.id&&(()=>{const e=document.querySelector("#content"),t=i(),s=g();e.append(t,s)})()},t=document.querySelector("#homeTab"),s=document.querySelector("#menuTab"),n=document.querySelector("#contactTab");t.addEventListener("click",e),s.addEventListener("click",e),n.addEventListener("click",e)}))})();