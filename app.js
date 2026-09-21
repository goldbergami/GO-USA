(function(){
  const data = window.APP_DATA;
  if(!data){ document.getElementById('app').innerHTML='<div class="day-card"><div class="event">לא נטענו נתוני הטיול.</div></div>'; return; }
  const daysEl=document.getElementById('days');
  const app=document.getElementById('app');
  const dates=data.dates||Object.keys(data.days||{});
  let selected=dates[0];

  function esc(v){return String(v??'').replace(/[&<>\"]/g,s=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\\':'&#39;'}[s]));}
  function mapsUrl(target){return 'https://maps.apple.com/?q='+encodeURIComponent(target||'');}
  function wazeUrl(target){return 'https://www.waze.com/ul?q='+encodeURIComponent(target||'')+'&navigate=yes';}
  async function copyText(text){try{await navigator.clipboard.writeText(text||'');}catch(e){const ta=document.createElement('textarea');ta.value=text||'';document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();} }

  function renderDayButtons(){
    daysEl.innerHTML=dates.map(d=>{const x=data.days[d];return `<button class="day-btn ${d===selected?'active':''}" data-day="${d}">${esc(d.slice(8,10))}/${esc(d.slice(5,7))}</button>`}).join('');
    daysEl.querySelectorAll('[data-day]').forEach(b=>b.onclick=()=>{selected=b.dataset.day;render();window.scrollTo({top:0,behavior:'smooth'});});
  }

  function render(){
    renderDayButtons();
    const day=data.days[selected];
    app.innerHTML=`<section class="day-card">
      <div class="day-head"><div class="date">${esc(day.day)} · ${esc(day.date)}</div><div class="day-title">${esc(day.title)}</div><div class="summary">${esc(day.summary||'')}</div></div>
      <div class="day-actions">
        <button class="action primary" id="dayMaps"> מפות – מסלול היום</button>
        <button class="action" id="dayWaze">🚗 Waze – מסלול היום</button>
      </div>
      ${(day.events||[]).map(renderEvent).join('')}
    </section>`;
    document.getElementById('dayMaps').onclick=()=>openDay('maps');
    document.getElementById('dayWaze').onclick=()=>openDay('waze');
  }

  function renderEvent(e){
    const target=e.nav||e.toAddress||e.to||e.title;
    const addr=e.toAddress||target;
    const cls=(e.status||'').toLowerCase().replace(/[^a-z]+/g,'-');
    return `<article class="event">
      <div class="event-row"><div><div class="event-title">${esc(e.title)}</div><div class="meta">${e.transport?esc(e.transport)+' · ':''}${esc(target)}</div>${e.toAddress?`<div class="meta"><b>כתובת:</b> ${esc(e.toAddress)}</div>`:''}${e.travelTime?`<div class="meta"><b>נסיעה:</b> ${esc(e.travelTime)} · <b>שהייה:</b> ${esc(e.stay||'')}</div>`:''}<span class="status ${cls}">${esc(e.status||e.bookingStatus||'')}</span></div><div class="time">${esc(e.start)}${e.end?`<div style="font-size:12px;color:#8a93a0;font-weight:600;margin-top:2px">עד ${esc(e.end)}</div>`:''}</div></div>
      <div class="meta" style="margin-top:12px">${esc(e.whatToDo||'')}</div>
      ${e.next?`<div class="meta"><b>הבא:</b> ${esc(e.next)}</div>`:''}
      <div class="event-actions"><button class="mini map" data-map="${esc(target)}">📍 מפות</button><button class="mini" data-waze="${esc(target)}">🚗 Waze</button><button class="mini copy" data-copy="${esc(addr)}">העתק כתובת</button></div>
    </article>`;
  }

  function openDay(mode){
    const day=data.days[selected]; const first=(day.events||[]).find(e=>e.nav||e.toAddress||e.to); const target=(first&&(first.nav||first.toAddress||first.to))||day.title;
    window.location.href=mode==='maps'?mapsUrl(target):wazeUrl(target);
  }
  app.addEventListener('click',async ev=>{
    const b=ev.target.closest('button'); if(!b)return;
    if(b.dataset.map) window.location.href=mapsUrl(b.dataset.map);
    if(b.dataset.waze) window.location.href=wazeUrl(b.dataset.waze);
    if(b.dataset.copy){await copyText(b.dataset.copy);b.textContent='✓ הועתק';setTimeout(()=>b.textContent='העתק כתובת',1200);}
  });
  document.getElementById('homeBtn').onclick=()=>{selected=dates[0];render();window.scrollTo({top:0,behavior:'smooth'});};
  render();
})();
