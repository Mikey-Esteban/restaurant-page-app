(()=>{"use strict";const e=()=>{console.log("main image ran");const e=document.querySelector("#content"),t=document.createElement("DIV");t.classList.add("block","image-container");const n=document.createElement("DIV");n.classList.add("tag");const{CARD:s}=(()=>{console.log("Twitter Card ran");const e=document.createElement("DIV");e.classList.add("card");const t=document.createElement("DIV");t.classList.add("card-content");const n=document.createElement("DIV");n.classList.add("media");const s=document.createElement("DIV");s.classList.add("media-left");const a=document.createElement("FIGURE");a.classList.add("image","is-48x48");const o=document.createElement("IMG");o.src="https://bulma.io/images/placeholders/96x96.png",o.alt="Placeholder Image",a.append(o),s.append(a);const c=document.createElement("DIV");c.classList.add("media-content");const d=document.createElement("P");d.classList.add("title","is-4"),d.innerText="John Smith";const r=document.createElement("P");r.classList.add("subtitle","is-6"),r.innerText="@johnsmith",c.append(d,r),n.append(s,c);const l=document.createElement("DIV");return l.classList.add("content"),l.innerHTML='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. <a>@bulmaio</a>.<a href="#">#css</a> <a href="#">#responsive</a><br><time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>',t.append(n,l),e.append(t),{CARD:e}})();n.append(s);const a=document.createElement("FIGURE");a.classList.add("image","is-5by4");const o=document.createElement("IMG");o.src="assets/openseating.jpg",a.append(o),t.append(n,a),e.append(t)},t=()=>{(()=>{console.log("hero ran");const e=document.querySelector("#content"),t=document.createElement("SECTION");t.classList.add("hero","is-primary","is-medium");const n=document.createElement("DIV");n.classList.add("hero-body");const s=document.createElement("DIV");s.classList.add("container");const a=document.createElement("H1");a.classList.add("title","has-text-grey-darker"),a.innerText="Welcome to Veganic Corner";const o=document.createElement("H2");o.classList.add("subtitle"),o.innerText="come work, talk, commune.. but most importantly be hungry for delicious healthy eats.",s.append(a,o),n.append(s),t.append(n),e.append(t)})(),e()},n=["Light Bites","Empty Stomach Quenchers","Sweet Tooth Much?"],s={"Light Bites":["Garden Medley Salad","Butternut Squash Soup"],"Empty Stomach Quenchers":["Vegan Bowtie Pesto","Not Your Moms Fried Chickn","Turky Burgers"],"Sweet Tooth Much?":["All Vegan Peanut Butter Cups","Fruit Donuts Galore","Vegan French Toast"]},a={"Garden Medley Salad":"assets/food/apps/salad.jpg","Butternut Squash Soup":"assets/food/apps/soup.jpg","Vegan Bowtie Pesto":"assets/food/mains/pasta.jpg","Not Your Moms Fried Chickn":"assets/food/mains/chickensandwich.jpg","Turky Burgers":"assets/food/mains/turkeyburger.jpg","All Vegan Peanut Butter Cups":"assets/food/desserts/peanutbuttercup.jpg","Fruit Donuts Galore":"assets/food/desserts/donuts.jpg","Vegan French Toast":"assets/food/desserts/frenchtoast.jpg"},o=()=>{const e=document.querySelector("#content"),t=(()=>{const e=document.createElement("SECTION");e.classList.add("hero","is-primary");const t=document.createElement("DIV");t.classList.add("hero-body");const n=document.createElement("DIV");n.classList.add("container");const s=document.createElement("H1");s.classList.add("title","has-text-grey-darker"),s.innerText="Always fresh & local ingredients made everyday";const a=document.createElement("H2");return a.classList.add("subtitle"),a.innerText="...and we're sure you've heard about our coffee",n.append(s,a),t.append(n),e.append(t),e})(),o=(()=>{const e=document.createElement("SECTION");e.classList.add("section","mt-6");const t=document.createElement("DIV");t.classList.add("columns");const n=document.createElement("DIV");n.classList.add("column","is-one-quarter","is-offset-1","menu-food-column");const s=document.createElement("DIV");return s.classList.add("column","auto","img-food-column"),t.append(n,s),e.append(t),e})(),c=(()=>{const e=e=>{document.querySelector("#food-img").src=a[e.target.id]},t=t=>{const n=document.createElement("UL");n.classList.add("menu-list");for(let s of t){const t=document.createElement("LI"),a=document.createElement("A");a.innerText=s,a.id=s,a.addEventListener("click",e),t.append(a),n.append(t)}return n};return(()=>{const e=document.createElement("ASIDE");e.classList.add("menu");const a=(e=>{const t=[];for(let n of e){const e=document.createElement("P");e.classList.add("menu-label"),e.innerText=n,t.push(e)}return t})(n);for(let n of a){const a=t(s[n.textContent]);e.append(n,a)}return e})()})(),d=(()=>{const e=document.createElement("DIV");e.classList.add("food-img");const t=document.createElement("FIGURE");t.classList.add("image","is-256x256");const n=document.createElement("IMG");return n.classList.add("is-rounded","is-food"),n.id="food-img",n.src="",t.append(n),e.append(t),e})(),r=o.querySelector(".menu-food-column"),l=o.querySelector(".img-food-column");r.append(c),l.append(d),e.append(t,o)},c=(e,t)=>{const n=document.createElement("DIV");return n.classList.add("columns","level","chef-bio"),n.append(e,t),n},d=e=>{const t=document.createElement("DIV");return t.classList.add(...e),t},r=(e,t)=>{const n=document.createElement("FIGURE");n.classList.add("image",e);const s=document.createElement("IMG");return s.classList.add("is-rounded"),s.src=t,n.append(s),n},l=(e,t)=>{const n=document.createElement("DIV");return n.classList.add("notification",e),n.innerHTML=t,n},i={bio:"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit",figColClasses:["column","is-3","is-offset-2","level-left"],infoColClasses:["column","is-6","level-right","mr-6"],figSrc:"assets/chef.jpg",figRatio:"is-2by3",infoColor:"is-success"},m={bio:"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Sit amet, consectetur adipiscing elit",figColClasses:["column","is-5","level-right","mr-6"],infoColClasses:["column","is-5","is-offset-1","level-left"],figSrc:"assets/chef2.jpg",figRatio:"is-3by2",infoColor:"is-link",reverse:!0},u=[{type:"Email",value:"VeganicCorner@gmail.com",icon:"fa-envelope"},{type:"Phone",value:"908-555-1234",icon:"fa-phone-alt"},{type:"Address",value:"55 Cherry Lane",icon:"fa-map-marker-alt"},{type:"Hours",value:["MON-FRI 7am - 10pm","SAT-SUN 8am - 7pm"],icon:"fa-door-open",different:!0}],p=[{type:"Twitter",html:"Updates on <a herf='#'>Twitter</a>"},{type:"Facebook",html:"Share on <a href='#'>Facebook</a>"},{type:"Instagram",html:"View our <a href='#'>Instagram</a>"}],f=()=>{const e=document.querySelector("#content"),t=document.createElement("DIV");t.classList.add("section");const n=document.createElement("DIV");n.classList.add("columns");const s=document.createElement("DIV");s.classList.add("column","is-6","is-offset-3"),n.append(s),t.append(n),e.append(t);const a=document.createElement("DIV");a.classList.add("card");const o=document.createElement("DIV");o.classList.add("card-content"),a.append(o),s.append(a);for(let e of u){const t=document.createElement("DIV");t.classList.add("level");const n=document.createElement("DIV");n.classList.add("level-left");const s=document.createElement("SPAN");s.classList.add("icon","is-small","is-left","mr-2","has-text-success");const a=document.createElement("I");if(a.classList.add("fas",e.icon),s.append(a),n.append(s),e.different){const t=document.createElement("SPAN");t.classList.add("mr-2"),t.innerHTML=`<strong>${e.type}</strong>:`;const a=document.createElement("DIV");for(let t of e.value){const e=document.createElement("P");e.classList.add("is-size-7"),e.innerText=t,a.append(e)}n.append(s,t,a)}else{const t=document.createElement("SPAN");t.innerHTML=`<strong>${e.type}</strong>: ${e.value}`,n.append(s,t)}t.append(n),o.append(t)}const c=(()=>{const e=document.createElement("FOOTER");e.classList.add("card-footer");for(let t of p){const n=document.createElement("P");n.classList.add("card-footer-item");const s=document.createElement("SPAN");s.innerHTML=t.html,n.append(s),e.append(n)}return e})();o.append(c)},g=()=>{console.log("contact ran"),(()=>{const e=document.querySelector("#content"),t=document.createElement("DIV");t.classList.add("columns");const n=document.createElement("DIV");n.classList.add("column","is-10","is-offset-1"),t.append(n),e.append(t);const s=[i,m];for(let e of s){const t=r(e.figRatio,e.figSrc),s=l(e.infoColor,e.bio),a=d(e.figColClasses),o=d(e.infoColClasses);if(a.append(t),o.append(s),e.reverse){const e=c(o,a);n.append(e)}else{const e=c(a,o);n.append(e)}}})(),f()};console.log("i ran"),document.addEventListener("DOMContentLoaded",(()=>{t();const e=e=>{document.querySelector("#content").innerHTML="","homeTab"==e.target.id?t():"menuTab"==e.target.id?o():"contactTab"==e.target.id&&g()},n=document.querySelector("#homeTab"),s=document.querySelector("#menuTab"),a=document.querySelector("#contactTab");n.addEventListener("click",e),s.addEventListener("click",e),a.addEventListener("click",e)}))})();