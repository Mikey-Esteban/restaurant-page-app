(()=>{"use strict";const e=e=>{const t=document.createElement("DIV");t.classList.add("column","is-6","is-offset-3");const s=document.createElement("DIV");s.classList.add(...e.titleClass),s.textContent="add your slogan here!";const a=document.createElement("BUTTON");a.classList.add(...e.bookBtnClass),a.textContent="Book a table";const n=document.createElement("BUTTON");return n.classList.add(...e.takeoutBtnClass),n.textContent="Order out!",t.append(s,a,n),t},t=t=>{const s=document.querySelector(".main-hero"),a=document.querySelector(".hero-body");a.innerHTML="";const n=document.createElement("DIV");if(n.classList.add("container","has-text-centered"),a.append(n),t.heights&&(s.style.minHeight=t.heights.min,s.style.maxHeight=t.heights.max),t.titleClass){const e=document.createElement("H1");e.className="",e.classList.add("title",...t.titleClass),e.innerText=t.titleText,n.append(e)}if(t.subtitleClass){const e=document.createElement("H2");e.className="",e.classList.add("subtitle",...t.subtitleClass),e.innerText=t.subtitleText,n.append(e)}if(t.sloganCta)if(t.first){const s=e(t.sloganData);a.append(s)}else setTimeout((()=>{const s=document.querySelector(".hero-body");if("Welcome to Veganic Corner"==s.querySelector(".container").querySelector("H1").textContent){const a=e(t.sloganData);s.append(a)}}),13500),n.className="",n.classList.add("container","has-text-centered","slow-show-start"),t.slowStart()},s=()=>{const e=document.querySelector("#content"),t=document.createElement("DIV");t.id="pixel-to-watch",e.append(t),new IntersectionObserver((e=>{const t=document.querySelector("#hero-navbar"),s=document.querySelector("#breadcrumb-navbar");e[0].boundingClientRect.y<0?(t.classList.add("fadeaway-quick"),t.classList.remove("fadein"),t.style.visibility="hidden",s.classList.remove("is-hidden"),s.classList.add("fadein")):(t.style.visibility="visible",t.classList.remove("fadeaway-quick"),t.classList.add("fadein"),s.classList.add("is-hidden"),s.classList.remove("fadein"))})).observe(document.querySelector("#pixel-to-watch"))},a=(e,t)=>{const s=document.createElement("DIV");return s.classList.add("columns","level","chef-bio"),s.append(e,t),s},n=e=>{const t=document.createElement("DIV");return t.classList.add(...e),t},o=(e,t)=>{const s=document.createElement("FIGURE");s.classList.add("image",e);const a=document.createElement("IMG");return a.classList.add("is-rounded"),a.src=t,s.append(a),s},i=(e,t,s,a)=>{const n=document.createElement("DIV");n.classList.add("notification",e);const o=document.createElement("H2");o.classList.add("subtitle","is-capitalized"),o.textContent=t;const i=document.createElement("H1");i.classList.add("title","is-uppercase","is-4"),i.textContent=s;const c=document.createElement("SPAN");return c.textContent=a,n.append(o,i,c),n},c={cta:!0,first:!1,sloganCta:!0,sloganData:{titleClass:["subtitle","is-size-3","has-text-white","is-uppercase","slide-left"],bookBtnClass:["button","is-info","is-outlined","is-capitalize","is-large","mr-4","slide-right"],takeoutBtnClass:["button","is-link","is-outlined","is-capitalize","has-text-white","is-large","slide-right"]},slowStart:()=>{h()},heights:{min:"850px",max:"850px"},titleClass:["has-text-info","has-text-weight-light","is-1","has-text-shadow"],titleText:"Welcome to Veganic Corner",subtitleClass:["has-text-link","has-text-shadow"],subtitleText:"come work, talk, commune.. but most importantly be hungry for delicious healthy eats."},d={sloganCta:!0,sloganData:{titleClass:["subtitle","is-size-3","has-text-white","is-uppercase","fadein"],bookBtnClass:["button","is-info","is-outlined","is-capitalize","is-large","mr-4","fadein"],takeoutBtnClass:["button","is-link","is-outlined","is-capitalize","has-text-white","is-large","fadein"]},first:!0,heights:{min:"800px",max:"850px"}},l={titleClass:["has-text-link","is-4"],titleText:"A Brilliant Menu",subtitleClass:["has-text-link","is-6"],subtitleText:"Paragraph Text. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."},r={items:[{header:"Pick me uppers",description:"We've partnered with blue bottle to bring you all the finest coffee to get you through to happy hour!",item:"Espresso $3.99"},{header:"Time to unwind",description:"Domestic & Imported Beer, over 20 wines, and innovative and fun cocktails.",item:"Gin & Tonic $6.99"}],imgOne:{size:"is-5by4",src:"assets/food/teaser/coffee.jpg"},imgTwo:{size:"is-3by4",src:"assets/food/teaser/cocktail2.jpg"}},m={items:[{header:"Mains",description:"Lisa expertly crafts dishes from local & fresh ingredients to give you that homemade love.",item:"Broccoli Rabe Fettucine $13.99"},{header:"Sweets",description:"Janes' cookies, brownies, cupcakes are second to none!",item:"Brownie A la Mode $5.99"}],imgOne:{size:"is-4by3",src:"assets/food/teaser/pasta.jpg"},imgTwo:{size:"is-3by4",src:"assets/food/teaser/brownie.jpg"}},u={title:"Executive Chef",name:"Lisa Shaw",bio:"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Sit amet, consectetur adipiscing elit",figColClasses:["column","is-3","is-offset-2","level-left"],infoColClasses:["column","is-6","level-right","mr-6"],figSrc:"assets/images/chef.jpg",figRatio:"is-2by3",infoColor:"is-success"},p={title:"Head Pastry Chef",name:"Jane Marshall",bio:"Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem ipsum dolor. Pellentesque risus mi, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum felis venenatis efficitur. Sit amet, consectetur adipiscing elit",figColClasses:["column","is-5","level-right","mr-6"],infoColClasses:["column","is-5","is-offset-1","level-left"],figSrc:"assets/images/chef2.jpg",figRatio:"is-3by2",infoColor:"is-link",reverse:!0},h=()=>{const e=document.querySelector(".slow-show-start"),t=e.querySelector("H1"),s=e.querySelector("H2");setTimeout((()=>{e.classList.add("slow-show-end")}),1e3),setTimeout((()=>{t.classList.add("fadeaway"),s.classList.add("fadeaway")}),1e4)},f=()=>{const e=document.createElement("DIV");e.classList.add("hero-head");const t=document.createElement("NAV");t.classList.add("navbar","is-fixed-top"),t.id="hero-navbar";const s=document.createElement("DIV");s.classList.add("navbar-brand");const a=document.createElement("A");a.classList.add("navbar-item");const n=document.createElement("img");n.src="https://bulma.io/images/bulma-type-white.png",n.alt="Logo",a.append(n);const o=document.createElement("SPAN");o.classList.add("navbar-burger","burger","has-text-white"),o.dataset.target="navbarMenuHeroA";for(let e=0;e<3;e++){const e=document.createElement("SPAN");o.append(e)}s.append(a,o);const i=document.createElement("DIV");i.classList.add("navbar-menu"),i.id="navbarMenuHeroA";const c=document.createElement("DIV");c.classList.add("navbar-end");const d=document.createElement("A");d.classList.add("navbar-item","has-text-white","has-text-weight-bold","is-active","mx-4"),d.id="homeTAB",d.textContent="Home";const l=document.createElement("A");l.classList.add("navbar-item","link-invert","has-text-white","has-text-weight-bold","is-outlined","mx-4"),l.textContent="Menu",l.id="menuTAB";const r=document.createElement("A");return r.classList.add("navbar-item","has-text-white","has-text-weight-bold","is-outlined","mx-4"),r.id="contactTAB",r.textContent="Contact",c.append(d,l,r),i.append(c),t.append(s,i),e.append(t),e},g=e=>{const{size:t,src:s}=e,a=document.createElement("FIGURE");a.classList.add("image",t),e.classes&&a.classList.add(...e.classes),e.id&&(a.id=e.id);const n=document.createElement("IMG");return n.src=s,a.append(n),a},b=e=>{const t=document.createElement("DIV");t.classList.add("columns");const s=document.createElement("DIV");s.classList.add("column","is-one-fifth","aside","is-offset-1");for(let t of e.items){const e=document.createElement("P");e.classList.add("is-size-7","has-text-weight-bold","is-uppercase","mb-2"),e.textContent=t.header;const a=document.createElement("DIV");a.classList.add("is-size-7","mb-2"),a.textContent=t.description;const n=document.createElement("DIV");n.classList.add("is-size-7","has-text-weight-bold","mb-2"),n.textContent=t.item;const o=document.createElement("HR");s.append(e,a,n,o)}const a=document.createElement("DIV");a.classList.add("column","is-two-fifths","aside");const n=g(e.imgOne);a.append(n);const o=document.createElement("DIV");o.classList.add("column","is-one-quarter","aside");const i=g(e.imgTwo);return o.append(i),t.append(s,a,o),t},L=()=>{const e=document.createElement("DIV");e.classList.add("box","menu-teaser-container","mb-0");const t=(e=>{const t=document.createElement("SECTION");if(t.classList.add("hero"),e.class&&t.classList.add(...e.class),e.size&&t.classList.add(e.size),e.heights&&(t.style.minHeight=e.heights.min,t.style.maxHeight=e.heights.max),e.head){const e=f();t.append(e)}const s=document.createElement("DIV");s.classList.add("hero-body");const a=document.createElement("DIV");a.classList.add("container","has-text-centered"),e.slowStart&&a.classList.add("slow-show-start");const n=document.createElement("H1");n.classList.add("title"),e.titleClass&&n.classList.add(...e.titleClass),n.innerText=e.titleText;const o=document.createElement("H2");return o.classList.add("subtitle"),e.subtitleClass&&o.classList.add(...e.subtitleClass),o.innerText=e.subtitleText,e.cta2&&setTimeout((()=>{const e=Cta2();s.append(e)}),13500),a.append(n,o),s.append(a),t.append(s),t})(l),s=document.createElement("SECTION"),a=b(r),n=b(m);return s.append(a,n),e.append(t,s),e},x=e=>{const l=document.querySelector("#content");s(),t(e?c:d);const r=(()=>{const e=document.createElement("DIV");e.classList.add("columns","mt-6");const t=document.createElement("DIV");t.classList.add("column","is-10","is-offset-1"),e.append(t);const s=[u,p];for(let e of s){const s=o(e.figRatio,e.figSrc),c=i(e.infoColor,e.title,e.name,e.bio),d=n(e.figColClasses),l=n(e.infoColClasses);if(d.append(s),l.append(c),e.reverse){const e=a(l,d);t.append(e)}else{const e=a(d,l);t.append(e)}}return e})(),m=L(),h=(()=>{const e=document.createElement("DIV");e.classList.add("box","cta","level");const t=document.createElement("DIV");t.classList.add("level-left");const s=document.createElement("DIV");s.classList.add("column","is-10","is-offset-2"),t.append(s),e.append(t);const a=document.createElement("P");a.classList.add("is-size-6","has-text-weight-bold","is-uppercase","mb-3","has-text-shadow"),a.textContent="Reserve";const n=document.createElement("P");n.classList.add("is-size-5","has-text-weight-bold","is-uppercase","has-text-link","has-text-shadow"),n.textContent="Skip the line";const o=document.createElement("P");o.classList.add("is-size-6","has-text-link","mb-5","has-text-shadow"),o.textContent="Paragraph Text. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.";const i=document.createElement("BUTTON");i.classList.add("button","is-link","is-inverted","is-outlined","is-uppercase"),i.textContent="Reserve Table";const c=document.createElement("P");return c.classList.add("is-size-6","is-italic","has-text-info","has-text-shadow"),c.textContent="You will be redirected to opentable.com to reserve table.",s.append(a,n,o,i,c),e})();l.append(r,m,h)},E={heights:{min:"300px",max:"350px"},titleClass:["has-text-info","has-text-weight-light","is-3","has-text-shadow","fadein","mt-5"],titleText:"Always fresh & local ingredients made everyday",subtitleClass:["has-text-link","has-text-shadow","fadein"],subtitleText:"...and we're sure you've heard about our coffee"},y=["Light Bites","Empty Stomach Quenchers","Sweet Tooth Much?"],C={"Garden Medley Salad":{description:"fresh kale, chickpeas, avocado, topped with a light lemon vinaigrette",price:"$7.99"},"Butternut Squash Soup":{description:"smooth & creamy squash smooth made with cashew cream, spinkled with pumpkin seeds",price:"$5.99"},"Vegan Gnocchi Pesto":{description:"beaufitul potato gnocchi with brocolli rabe and walnuts",price:"$12.99"},"Not Your Moms Fried Chickn":{description:"toasted seasame bun, housemade slaw, 1000 island dressing with in house 'Chickn'",price:"$11.99"},"Turky Burgers":{description:"in house cibatta bread, tomatoes, lettuce, vegan mayonaise",price:"$9.99"},"All Vegan Chocolate Chip Cookie":{description:"with a sprinkle of sea salt to add that delicious kick",price:"2 for $2.99"},"Classic Donut":{description:"all your classic flavors. Glazed, Chocolate Frosting, Powdered",price:"half dozen ($9.99), $2 each"},"Vegan French Toast":{description:"topped with your choice of fruit, made with in house syrup",price:"$7.99"}},v={"Light Bites":["Garden Medley Salad","Butternut Squash Soup"],"Empty Stomach Quenchers":["Vegan Gnocchi Pesto","Not Your Moms Fried Chickn","Turky Burgers"],"Sweet Tooth Much?":["All Vegan Chocolate Chip Cookie","Classic Donut","Vegan French Toast"]},w={"Garden Medley Salad":"assets/food/apps/salad.jpg","Butternut Squash Soup":"assets/food/apps/soup.jpg","Vegan Gnocchi Pesto":"assets/food/mains/pasta.jpg","Not Your Moms Fried Chickn":"assets/food/mains/chickensandwich.jpg","Turky Burgers":"assets/food/mains/turkeyburger.jpg","All Vegan Chocolate Chip Cookie":"assets/food/desserts/cookie.jpg","Classic Donut":"assets/food/desserts/donut.jpg","Vegan French Toast":"assets/food/desserts/frenchtoast.jpg"},T=()=>{const e=document.querySelector("#content");s(),t(E);const a=(()=>{const e=document.createElement("SECTION");e.classList.add("section");const t=document.createElement("DIV");t.classList.add("columns");const s=document.createElement("DIV");s.classList.add("column","is-one-quarter","is-offset-2","menu-food-column");const a=document.createElement("DIV");return a.classList.add("column","auto","img-food-column"),t.append(s,a),e.append(t),e})(),n=(()=>{const e=e=>{setTimeout((()=>{const t=document.querySelector("#food-img");t.src=w[e.target.id],t.classList.add("transitioning-src")}),300)},t=e=>{setTimeout((()=>{const t=document.querySelector("#food-description");t.textContent=C[e.target.id].description,t.classList.add("transitioning-src");const s=document.querySelector("#food-price");s.textContent=C[e.target.id].price,s.classList.add("transitioning-src")}),300)},s=e=>{const t=document.querySelector("#food-img"),s=document.querySelector("#food-description"),a=document.querySelector("#food-price");t.src="",s.textContent="",a.textContent="",t.classList.remove("transitioning-src"),s.classList.remove("transitioning-src"),a.classList.remove("transitioning-src")},a=a=>{const n=document.createElement("UL");n.classList.add("menu-list");for(let o of a){const a=document.createElement("LI"),i=document.createElement("A");i.innerText=o,i.id=o,i.addEventListener("mouseover",e),i.addEventListener("mouseover",t),i.addEventListener("mouseleave",s),a.append(i),n.append(a)}return n};return(()=>{const e=document.createElement("ASIDE");e.classList.add("menu");const t=(e=>{const t=[];for(let s of e){const e=document.createElement("P");e.classList.add("menu-label"),e.innerText=s,t.push(e)}return t})(y);for(let s of t){const t=a(v[s.textContent]);e.append(s,t)}return e})()})(),o=(()=>{const e=document.createElement("DIV");e.classList.add("food-img");const t=document.createElement("FIGURE");t.classList.add("image","is-256x256");const s=document.createElement("IMG");return s.classList.add("is-rounded","is-food"),s.id="food-img",s.src="",t.append(s),e.append(t),e})(),i=(()=>{const e=document.createElement("DIV");e.classList.add("column","has-text-centered"),e.style.maxWidth="256px";const t=document.createElement("H1");t.classList.add("title","has-text-link","has-text-weight-normal","is-size-5"),t.id="food-description";const s=document.createElement("H2");return s.classList.add("subtitle","has-text-link","has-text-weight-bold","is-size-5","is-italic"),s.id="food-price",e.append(t,s),e})(),c=a.querySelector(".menu-food-column"),d=a.querySelector(".img-food-column");c.append(n),d.append(o,i),e.append(a)},S={heights:{min:"300px",max:"350px"},titleClass:["has-text-info","has-text-weight-light","is-3","has-text-shadow","fadein","mt-5"],titleText:"We'd love to here from you!",subtitleClass:["has-text-link","has-text-shadow","fadein"],subtitleText:"stop by or follow along any of our socials :)"},k=[{type:"Twitter",html:"Updates on <a herf='#'>Twitter</a>"},{type:"Facebook",html:"Share on <a href='#'>Facebook</a>"},{type:"Instagram",html:"View our <a href='#'>Instagram</a>"}],I=[{type:"Email",value:"VeganicCorner@gmail.com",icon:"fa-envelope"},{type:"Phone",value:"908-555-1234",icon:"fa-phone-alt"},{type:"Address",value:"55 Cherry Lane",icon:"fa-map-marker-alt"},{type:"Hours",value:["MON-FRI 7am - 10pm","SAT-SUN 8am - 7pm"],icon:"fa-door-open",different:!0}],V=()=>{const e=document.createElement("DIV");e.classList.add("section");const t=document.createElement("DIV");t.classList.add("columns");const s=document.createElement("DIV");s.classList.add("column","is-6","is-offset-3");const a=document.createElement("DIV");a.classList.add("card");const n=(()=>{const e=document.createElement("DIV");e.classList.add("card-content");for(let t of I){const s=document.createElement("DIV");s.classList.add("level");const a=document.createElement("DIV");a.classList.add("level-left");const n=document.createElement("SPAN");n.classList.add("icon","is-small","is-left","mr-2","has-text-success");const o=document.createElement("I");if(o.classList.add("fas",t.icon),n.append(o),a.append(n),t.different){const e=document.createElement("SPAN");e.classList.add("mr-2"),e.innerHTML=`<strong>${t.type}</strong>:`;const s=document.createElement("DIV");for(let e of t.value){const t=document.createElement("P");t.classList.add("is-size-7"),t.innerText=e,s.append(t)}a.append(n,e,s)}else{const e=document.createElement("SPAN");e.innerHTML=`<strong>${t.type}</strong>: ${t.value}`,a.append(n,e)}s.append(a),e.append(s)}return e})(),o=(()=>{const e=document.createElement("FOOTER");e.classList.add("card-footer");for(let t of k){const s=document.createElement("P");s.classList.add("card-footer-item");const a=document.createElement("SPAN");a.innerHTML=t.html,s.append(a),e.append(s)}return e})();return n.append(o),a.append(n),s.append(a),t.append(s),e.append(t),e},D=()=>[document.querySelector("#homeTAB"),document.querySelector("#menuTAB"),document.querySelector("#contactTAB")],q=e=>{for(let t of e)t.id==event.target.id?t.classList.add("is-active"):t.classList.remove("is-active")};document.addEventListener("DOMContentLoaded",(()=>{let e=!0;const a=document.querySelector("BODY"),n=(()=>{const e=document.createElement("DIV");e.classList.add("block","is-hidden"),e.id="breadcrumb-navbar";const t=document.createElement("NAV");t.classList.add("breadcrumb","navbar","is-small","is-fixed-top","is-light","pl-5","pt-2"),t.setAttribute("aria-label","breadcrumbs");const s=document.createElement("UL"),a=[{id:"homeTab",text:"Home"},{id:"menuTab",text:"Menu"},{id:"contactTab",text:"Contact"}];for(let e of a){const t=document.createElement("LI"),a=document.createElement("A");a.setAttribute("href","#"),a.id=e.id,a.textContent=e.text,t.append(a),s.append(t)}return t.append(s),e.append(t),e})(),o=(()=>{const e=document.createElement("SECTION");e.classList.add("hero","is-primary","main-hero","is-info","is-fullheight");const t=f();e.append(t);const s=document.createElement("DIV");return s.classList.add("hero-body"),e.append(s),e})(),i=(()=>{const e=document.createElement("FOOTER");e.classList.add("footer");const t=document.createElement("DIV");t.classList.add("content","has-text-centered");const s=document.createElement("P");return s.innerHTML=['<strong>Site</strong> by <a href="#">Mikey Esteban</a>.'].join(" "),t.append(s),e.append(t),e})(),c=document.querySelector("#content");var d;a.insertBefore(o,c),a.insertBefore(n,o),a.append(i),x(e),s(),d=a=>{if(document.querySelector("#content").innerHTML="","homeTAB"==a.target.id||"homeTab"==a.target.id){x(e);const t=D();q(t)}else if("menuTAB"==a.target.id||"menuTab"==a.target.id){T();const e=D();q(e)}else if("contactTAB"==a.target.id||"contactTab"==a.target.id){(()=>{const e=document.querySelector("#content");s(),t(S);const a=V();e.append(a)})();const e=D();q(e)}},homeTAB.addEventListener("click",d),menuTAB.addEventListener("click",d),contactTAB.addEventListener("click",d),homeTab.addEventListener("click",d),menuTab.addEventListener("click",d),contactTab.addEventListener("click",d),(()=>{const e=Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"),0);e.length>0&&e.forEach((e=>{e.addEventListener("click",(()=>{const t=e.dataset.target,s=document.getElementById(t);e.classList.toggle("is-active"),s.classList.toggle("is-active")}))}))})(),e=!1}))})();