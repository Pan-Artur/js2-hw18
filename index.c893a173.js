(()=>{let e=document.querySelector(".get-movies"),t=document.querySelector(".hide-movies"),o=document.querySelector(".movies-list");e.addEventListener("click",()=>{o.classList.remove("is-hidden")}),t.addEventListener("click",()=>{o.classList.add("is-hidden")})})(),(()=>{let e=document.querySelector(".hide-movies"),t=document.querySelector(".movies-list");e.addEventListener("click",()=>{t.classList.add("is-hidden")})})();const e=e=>{let t=document.querySelector(".movies-list");t.innerHTML="";let o=e.map(({title:e,genre:t,director:o,year:s})=>`<li class="movies-item"><h3 class="movies-title">${e}</h3><p class="movies-genre">${t}</p><p class="movies-director">${o}</p><p class="movies-year">${s}</p></li>`).join("");t.innerHTML=o},t=()=>{let t=[];for(let e of o)t.some(t=>Number(t.id)===Number(e.id))||t.push(e);o.length=0,o.push(...t),e(o)};let o=[];const s=()=>{let e={id:"6",title:"Paddington 2",genre:"Comedy",director:"Paul King",year:2017},s={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=UTF-8"}};fetch(`http://localhost:3000/movies/${e.id}`).then(e=>{if(!e.ok)return fetch("http://localhost:3000/movies",s).then(e=>e.json()).then(e=>{o.push(e),t()}).then(e=>console.log(e))})},i=()=>fetch("http://localhost:3000/movies/1",{method:"PUT",body:JSON.stringify({id:7,title:"Back to the Future",genre:"Fantasy",director:"Robert Zemeckis",year:1985}),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(s=>{let i=o.findIndex(e=>e.id===s.id);-1!==i?o[i]={...o[i],...s}:o.push(s),t(),e(o)}),n=()=>{fetch("http://localhost:3000/movies/5",{method:"PATCH",body:JSON.stringify({title:"The Knight and Day",director:"James Mangold"}),headers:{"Content-Type":"application/json; charset=UTF-8"}}).then(e=>e.json()).then(s=>{console.log(s),t(),e(o)})},h=()=>fetch("http://localhost:3000/movies/2",{method:"DELETE"}).then(e=>e);fetch("http://localhost:3000/movies").then(e=>e.json()).then(e=>{o.length=0,o.push(...e),t()}).then(()=>s()).then(()=>i()).then(()=>n()).then(()=>h());
//# sourceMappingURL=index.c893a173.js.map
