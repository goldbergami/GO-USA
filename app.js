(function(){
  const data=window.TRIP_DATA||{};
  const app=document.getElementById('app'), shell=document.getElementById('shell'), tabs=document.getElementById('day-tabs');
  const KEY='usa-trip-user-v11';
  const state=load();
  state.extraActivities=Array.isArray(state.extraActivities)?state.extraActivities:[];
  state.feedback=state.feedback||{};
  state.activityStatus=state.activityStatus||{};
  state.viewMode=state.viewMode==='special'?'special':'clean';
  state.filter=state.filter||'all';
  state.screen='days';
  let activeDate=null;

  const baseRows=[...(data.itinerary||[])];
  const themes={
    '17-Sep-2026':{title:'New York • First Night',sub:'Times Square • Broadway • lights',img:'nyc-bg.jpg'},
    '18-Sep-2026':{title:'Manhattan in Full',sub:'Grand Central • SUMMIT • Fifth Avenue • Central Park',img:'nyc-bg.jpg'},
    '19-Sep-2026':{title:'Downtown + Brooklyn',sub:'9/11 • SoHo • Brooklyn Bridge • DUMBO',img:'nyc-bg.jpg'},
    '20-Sep-2026':{title:'The City Moves',sub:'High Line • Chelsea • Hudson Yards',img:'nyc-bg.jpg'},
    '21-Sep-2026':{title:'Last Look at NYC',sub:'Final morning • transfer to Las Vegas',img:'nyc-bg.jpg'},
    '22-Sep-2026':{title:'Welcome to Las Vegas',sub:'Arrival • Strip • first desert night',img:'vegas-bg.jpg'},
    '23-Sep-2026':{title:'Vegas Glow',sub:'Morning option • Sphere at 14:00',img:'vegas-bg.jpg'},
    '24-Sep-2026':{title:'Grand Canyon Day',sub:'Long road • South Rim • sunset',img:'canyon-bg.jpg'},
    '25-Sep-2026':{title:'Page + Horseshoe Bend',sub:'Grand Canyon • Desert View • Page',img:'canyon-bg.jpg'},
    '26-Sep-2026':{title:'Water Day',sub:'Lake Powell • Kayak • Upper Antelope',img:'canyon-bg.jpg'},
    '27-Sep-2026':{title:'Bryce Country',sub:'Hoodoos • main hike • Cedar City',img:'canyon-bg.jpg'},
    '28-Sep-2026':{title:'Outpost X',sub:'Glass Cave Villa • a night outside the ordinary',img:'canyon-bg.jpg'},
    '29-Sep-2026':{title:'Zion',sub:'Canyon Overlook • Springdale',img:'canyon-bg.jpg'},
    '30-Sep-2026':{title:'Into the High Sierra',sub:'Zion → Mammoth • long positioning day',img:'canyon-bg.jpg'},
    '01-Oct-2026':{title:'Yosemite Day',sub:'Tioga • Valley • Tunnel View → Burbank',img:'canyon-bg.jpg'},
    '02-Oct-2026':{title:'Universal',sub:'Full-day rides • studio • CityWalk',img:'vegas-bg.jpg'},
    '03-Oct-2026':{title:'California Finale',sub:'Griffith • Beverly Hills • Santa Monica • LAX',img:'vegas-bg.jpg'},
    '04-Oct-2026':{title:'Homeward Drive',sub:'LAX → Las Vegas • return the car',img:'vegas-bg.jpg'}
  };

  document.getElementById('title').textContent=data.title||'USA Father & Son Trip 2026';
  document.getElementById('subtitle').textContent=data.subtitle||'Ami + Omer';
  document.getElementById('header-control').onclick=()=>showScreen('control');

  function load(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return {}}}
  function save(){localStorage.setItem(KEY,JSON.stringify(state))}
  function esc(v){return String(v??'').replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}
  function dates(){return [...new Set(baseRows.concat(state.extraActivities).map(r=>r&&r.Date).filter(d=>typeof d==='string'&&d.length>0))].sort((a,b)=>dateValue(a)-dateValue(b))}
  function dateValue(d){const p=String(d||'').split('-'); if(p.length!==3)return 0; const months={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11}; return new Date(Number(p[2]),months[p[1]]??0,Number(p[0])).getTime()}
  function dLabel(d){const p=d.split('-'); return `${p[0]}/${p[1]}`}
  function allRows(){return baseRows.concat(state.extraActivities).filter(r=>r&&typeof r==='object'&&typeof r.Date==='string').sort((a,b)=>dateValue(a.Date)-dateValue(b.Date)||timeValue(a['Start time'])-timeValue(b['Start time']))}
  function rows(date){return allRows().filter(r=>r.Date===date)}
  function timeValue(t){const m=String(t||'').match(/(\d{1,2}):(\d{2})/); return m?Number(m[1])*60+Number(m[2]):9999}
  function durationMin(a,b){const x=timeValue(a),y=timeValue(b); if(x>=9999||y>=9999)return null; return y>=x?y-x:(y+1440-x)}
  function formatMin(m){if(m==null)return ''; if(m<60)return `${m} דק'`; const h=Math.floor(m/60), mm=m%60; return mm?`${h} ש' ${mm} דק'`:`${h} ש'`}
  function parseTravel(s){const v=String(s||'').trim(); let m=v.match(/(?:~)?(\d+)\s*:\s*(\d{2})/); if(m)return formatMin(Number(m[1])*60+Number(m[2])); m=v.match(/(\d+)\s*h\s*(\d+)/i); if(m)return formatMin(Number(m[1])*60+Number(m[2])); m=v.match(/(?:~)?(\d+)\s*h/i); if(m)return formatMin(Number(m[1])*60); m=v.match(/(\d+)\s*min/i); if(m)return `${m[1]} דק'`; return v||''}
  function statusOf(r){return state.activityStatus[keyOf(r)]||'pending'}
  function keyOf(r){return r._id||[r.Date,r['Start time'],r['Destination / activity']].join('|')}
  function setStatus(r,s){state.activityStatus[keyOf(r)]=s;save();render()}
  function statusText(s){return s==='done'?'בוצע':s==='cancelled'?'בוטל':'טרם בוצע'}
  function bookingClass(s){const v=String(s||'').toUpperCase(); if(/BOOKED|CONFIRMED|PAID/.test(v))return 'confirmed'; if(/OPTIONAL|RECOMMENDED|CAUTION|CHECK|NEW/.test(v))return 'review'; if(/CANCEL/.test(v))return 'cancelled'; return ''}
  function mapUrls(addr){const q=encodeURIComponent(addr||''); return {g:`https://www.google.com/maps/search/?api=1&query=${q}`,a:`https://maps.apple.com/?address=${q}`,w:`https://www.waze.com/ul?q=${q}&navigate=yes`}}
  function copyAddress(addr){if(navigator.clipboard?.writeText)navigator.clipboard.writeText(addr).then(()=>toast('הכתובת הועתקה')).catch(()=>fallbackCopy(addr));else fallbackCopy(addr)}
  function fallbackCopy(t){const x=document.createElement('textarea');x.value=t;document.body.appendChild(x);x.select();document.execCommand('copy');x.remove();toast('הכתובת הועתקה')}
  function themeFor(date){return themes[date]||themes['22-Sep-2026']}
  function setThemeBackground(t){document.body.style.setProperty('--special-bg',`url(\"${t.img}\")`)}
  function phaseFor(date){const today=new Date(), p=String(date||'').split('-'); const same=p.length===3&&Number(p[0])===today.getDate()&&['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].indexOf(p[1])===today.getMonth()&&Number(p[2])===today.getFullYear(); const h=same?today.getHours():Number(String(rows(date)[0]?.['Start time']||'12:00').split(':')[0]); if(h<7)return 'phase-night'; if(h<11)return 'phase-morning'; if(h>=18)return 'phase-evening'; return ''}
  function modeToggle(){return `<div class="mode-ribbon"><button class="mode-pill ${state.viewMode==='clean'?'active':''}" onclick="setViewMode('clean')">☀️ סולידית</button><button class="mode-pill ${state.viewMode==='special'?'active':''}" onclick="setViewMode('special')">🎨 מיוחדת</button><span class="mode-mini">מחליפים מראה — התוכן נשאר זהה</span></div>`}
  function navButtons(addr){if(!addr)return ''; const u=mapUrls(addr); return `<div class="nav-grid"><a class="nav-btn google" href="${u.g}" target="_blank" rel="noopener">Google Maps</a><a class="nav-btn" href="${u.a}" target="_blank" rel="noopener">Apple Maps</a><button class="nav-btn" onclick='copyAddress(${JSON.stringify(addr)})'>העתק</button><a class="nav-btn" href="${u.w}" target="_blank" rel="noopener">Waze</a></div>`}
  function thumbFor(r){if(r._id)return 'added-later.jpg'; const d=r.Date; if(d.startsWith('17')||d.startsWith('18')||d.startsWith('19')||d.startsWith('20')||d.startsWith('21'))return 'nyc-bg.jpg'; if(d==='22-Sep-2026'||d==='23-Sep-2026'||d==='02-Oct-2026'||d==='03-Oct-2026'||d==='04-Oct-2026')return 'vegas-bg.jpg'; return 'canyon-bg.jpg'}
  function travelLabel(r,prev){
    const raw=String(r['Drive time']||'').trim();
    const parsed=parseTravel(raw);
    const mode=raw && !/^([~]?\d+(?::\d{2}|\s*h(?:\s*\d+)?|\s*min))$/i.test(raw) ? raw : '';
    if(/^~?0(?::00)?$/.test(raw)) return '';
    if(parsed && !mode) return `נסיעה · ${parsed}`;
    if(mode && /^(walk|walking|subway|uber|taxi|car|rideshare|walk \+ ferry|subway \/ walk|subway\/walk)/i.test(mode)) return `הגעה · ${mode}`;
    if(mode) return `הגעה · ${mode}`;
    if(prev && r['Start time']&&prev['End time']){const gap=durationMin(prev['End time'],r['Start time']); if(gap!=null&&gap>0)return `מרווח · ${formatMin(gap)}`;}
    return '';
  }
  function card(r,prev){const st=statusOf(r), dur=durationMin(r['Start time'],r['End time']), travel=travelLabel(r,prev), addr=r['Destination address']||r['Destination / activity'], origin=r['Origin / departure point']||''; const bk=bookingClass(r['Status / action']); const added=!!r._id; return `<article class="activity-card ${added?'added-card':''}"><span class="dot"></span><div class="timebox"><div class="start">${esc(r['Start time'])}</div><div class="duration">${dur!=null?formatMin(dur):'—'}</div>${travel?`<div class="travel">${esc(travel)}</div>`:''}</div><div class="card-body"><div class="activity-head">${state.viewMode==='special'?`<img class="thumb" src="${thumbFor(r)}" alt="">`:''}<div class="activity-main"><h2 class="activity-title">${esc(r['Destination / activity'])}</h2><div class="activity-address">${origin?`מ־${esc(origin)} · `:''}${esc(addr)}</div><div class="chips">${bk?`<span class="chip ${bk}">${esc(r['Status / action'])}</span>`:''}${added?'<span class="chip added">★ נוסף אחרי התכנון</span>':''}</div></div></div>${r['Plan / key stops']?`<div class="card-notes">${esc(r['Plan / key stops'])}</div>`:''}<div class="time-metrics"><span class="metric">⏱ שהייה · ${dur!=null?formatMin(dur):'—'}</span>${travel?`<span class="metric">🚗 ${esc(travel)}</span>`:''}</div>${navButtons(addr)}<div class="card-actions"><button class="action-btn" onclick='openFeedback(${JSON.stringify(keyOf(r))},${JSON.stringify(r['Destination / activity'])})'>📝 פידבק</button><button class="action-btn primary" onclick='openAddActivity(${JSON.stringify(r.Date)},${JSON.stringify(r['End time'])})'>＋ אחרי זה</button></div><div class="status-row"><button class="status done ${st==='done'?'active':''}" onclick='setStatusByKey(${JSON.stringify(keyOf(r))},"done")'>✓ בוצע</button><button class="status pending ${st==='pending'?'active':''}" onclick='setStatusByKey(${JSON.stringify(keyOf(r))},"pending")'>⏳ טרם בוצע</button><button class="status cancelled ${st==='cancelled'?'active':''}" onclick='setStatusByKey(${JSON.stringify(keyOf(r))},"cancelled")'>✕ בוטל</button></div></div></article>`}

  function setStatusByKey(k,s){const r=allRows().find(x=>keyOf(x)===k);if(r)setStatus(r,s)}
  window.setStatusByKey=setStatusByKey;
  window.setViewMode=function(m){state.viewMode=m==='special'?'special':'clean';save();render()};

  function renderTabs(){const ds=dates(); tabs.innerHTML=ds.map(d=>`<button class="day-tab ${activeDate===d?'active':''}" onclick='selectDate(${JSON.stringify(d)})'><small>${esc(new Date(dateValue(d)).toLocaleDateString('en-US',{weekday:'short'}))}</small>${esc(dLabel(d))}</button>`).join('')}
  function selectDate(d){activeDate=d;state.screen='days';render()}
  window.selectDate=selectDate;

  function dayScreen(){if(!activeDate)activeDate=dates()[0]; const rs=rows(activeDate); const t=themeFor(activeDate); setThemeBackground(t); document.body.className=state.viewMode==='special'?'special-shell':'phase-'+phaseFor(activeDate); shell.className=state.viewMode==='special'?'app-shell special-shell':'app-shell'; const filtered=rs.filter(r=>state.filter==='all'||statusOf(r)===state.filter); const counts={all:rs.length,pending:rs.filter(r=>statusOf(r)==='pending').length,done:rs.filter(r=>statusOf(r)==='done').length,cancelled:rs.filter(r=>statusOf(r)==='cancelled').length}; return `<div class="screen-title"><div><h1>${esc(t.title)}</h1><p>${esc(t.sub)}</p></div><span class="mode-mini">${esc(activeDate)}</span></div>${modeToggle()}<section class="day-hero photo" style="background-image:url('${t.img}')"><div class="day-hero-content"><div class="hero-kicker">${esc(activeDate)}</div><div class="hero-title">${esc(t.title)}</div><div class="hero-sub">${esc(t.sub)}</div><div class="hero-facts"><span class="hero-fact">${counts.all} פעילויות</span><span class="hero-fact">${counts.pending} פתוחות</span><span class="hero-fact">${counts.done} בוצעו</span></div></div></section><div class="timeline">${filtered.length?filtered.map((r,i)=>card(r,rs[Math.max(0,rs.indexOf(r)-1)]||null)).join(''):'<div class="empty">אין פעילויות בתצוגה הזאת.</div>'}</div>`}

  function bookingsScreen(){const bs=data.bookings||[];return `<div class="screen-title"><div><h1>הזמנות</h1><p>כל העוגנים והאישורים במקום אחד.</p></div></div><div class="booking-list">${bs.map(b=>`<div class="booking-item"><strong>${esc(b['Reservation'])}</strong><span>${esc(b['Date'])} · ${esc(b['Target time'])}</span><span>${esc(b['Status']||'')}${b['Where / meeting point']?' · '+esc(b['Where / meeting point']):''}</span></div>`).join('')}</div>`}

  function controlScreen(){const ds=dates(); const added=state.extraActivities; return `<div class="screen-title"><div><h1>שליטה</h1><p>הגדרות תצוגה והוספת פעילות — בלי לגעת במסלול המקורי.</p></div></div><div class="control-grid"><section class="panel"><h3>תצוגת האפליקציה</h3><p>בחר מצב אחד לכל האפליקציה. במצב המיוחד לכל יום יש צילום ואווירה משלו.</p><div class="seg2"><button class="choice ${state.viewMode==='clean'?'active':''}" onclick="setViewMode('clean')">☀️ סולידית</button><button class="choice ${state.viewMode==='special'?'active':''}" onclick="setViewMode('special')">🎨 מיוחדת</button></div><div class="small-note">סולידית = נקייה וקריאה. מיוחדת = נועזת, עם צילום ואווירה.</div></section><section class="panel"><h3>הוספת פעילות לפי תאריך</h3><form id="add-form"><div class="field"><label>תאריך</label><select name="date">${ds.map(d=>`<option value="${esc(d)}" ${activeDate===d?'selected':''}>${esc(d)}</option>`).join('')}</select></div><div class="field-row"><div class="field"><label>התחלה</label><input type="time" name="start" required></div><div class="field"><label>סיום</label><input type="time" name="end" required></div></div><div class="field"><label>פעילות</label><input name="title" required placeholder="למשל: קפה / תצפית / ארוחת ערב"></div><div class="field"><label>כתובת</label><input name="address" placeholder="כתובת או שם המקום"></div><div class="field"><label>פרטים</label><textarea name="notes" placeholder="מה עושים, כמה זמן, הזמנה, הערות"></textarea></div><button class="wide-btn" type="submit">＋ הוסף למסלול</button></form></section></div>${added.length?`<section class="panel" style="margin-top:12px"><h3>פעילויות שנוספו אחרי התכנון</h3><div class="booking-list">${added.map(x=>`<div class="booking-item"><strong>★ ${esc(x['Destination / activity'])}</strong><span>${esc(x.Date)} · ${esc(x['Start time'])}–${esc(x['End time'])}</span><span>${esc(x['Destination address']||'')}</span></div>`).join('')}</div></section>`:''}`}

  function reviewScreen(){const rowsWithFeedback=allRows().filter(r=>state.feedback[keyOf(r)]); return `<div class="screen-title"><div><h1>סקירה</h1><p>פידבק אישי על המקומות שכבר חוויתם.</p></div></div>${rowsWithFeedback.length?`<div class="booking-list">${rowsWithFeedback.map(r=>`<div class="review-item"><strong>${esc(r['Destination / activity'])}</strong><div class="stars">★★★★★</div><p>${esc(state.feedback[keyOf(r)])}</p><button class="action-btn review-action" onclick='openFeedback(${JSON.stringify(keyOf(r))},${JSON.stringify(r['Destination / activity'])})'>ערוך פידבק</button></div>`).join('')}</div>`:'<div class="empty">עדיין אין פידבק שמור. אחרי ביקור פתחו את 📝 פידבק בכל פעילות.</div>'}`}

  function bottomFilter(){if(state.screen!=='days')return '';const labels=[['all','הכול'],['pending','טרם בוצע'],['done','בוצע'],['cancelled','בוטל']];return `<div class="bottom-filter"><div class="bottom-filter-inner">${labels.map(([k,l])=>`<button class="filter-btn ${k==='done'?'done':''} ${k==='cancelled'?'cancelled':''} ${state.filter===k?'active':''}" onclick='setFilter(${JSON.stringify(k)})'>${esc(l)}</button>`).join('')}</div></div>`}
  function bottomNav(){const items=[['days','🗓','ימים'],['bookings','▤','הזמנות'],['control','⚙','שליטה'],['review','✦','סקירה']];return `<div class="bottom-nav"><div class="bottom-nav-inner">${items.map(([k,ic,l])=>`<button class="nav-tab ${state.screen===k?'active':''}" onclick='showScreen(${JSON.stringify(k)})'><span>${ic}</span>${l}</button>`).join('')}</div></div>`}
  window.showScreen=function(s){state.screen=s; if(s==='days'&&!activeDate)activeDate=dates()[0]; render()}
  window.setFilter=function(f){state.filter=f;save();render()}

  function openAddActivity(date,after){document.getElementById('activity-modal')?.remove(); document.body.insertAdjacentHTML('beforeend',`<div class="modal-backdrop" id="activity-modal"><div class="modal"><div class="modal-head"><span>הוספת פעילות</span><button class="close" onclick="closeModal()">×</button></div><form id="modal-form"><div class="field"><label>תאריך</label><input type="date" name="date" value="${toInputDate(date)}" required></div><div class="field-row"><div class="field"><label>התחלה</label><input type="time" name="start" value="${esc(after||'')}" required></div><div class="field"><label>סיום</label><input type="time" name="end" value="${suggestEnd(after)}" required></div></div><div class="field"><label>פעילות</label><input name="title" required placeholder="שם הפעילות"></div><div class="field"><label>כתובת</label><input name="address" placeholder="כתובת"></div><div class="field"><label>הערות</label><textarea name="notes" placeholder="פרטים נוספים"></textarea></div><button class="wide-btn" type="submit">שמור פעילות</button></form></div></div>`); document.getElementById('modal-form').addEventListener('submit',saveNewActivity)}
  function saveNewActivity(e){e.preventDefault();const f=new FormData(e.target), date=fromInputDate(f.get('date'));const item={_id:'added-'+Date.now(),Date:date,Day:new Date(dateValue(date)).toLocaleDateString('en-US',{weekday:'short'}),'Start time':f.get('start'),'End time':f.get('end'),'Origin / departure point':'','Origin address':'','Destination / activity':f.get('title'),'Destination address':f.get('address'),'Drive time':'','Drive distance (mi)':'','Buffer / activity time':'','Plan / key stops':f.get('notes'),'Booking required?':'No','Planned direct cost ($)':0,'Status / action':'ADDED LATER','Source / note':'נוסף אחרי התכנון המקורי'};state.extraActivities.push(item);state.activityStatus[keyOf(item)]='pending';save();activeDate=date;state.screen='days';state.filter='all';closeModal();render();toast('הפעילות נוספה לרצף')}
  function toInputDate(d){const p=String(d||'').split('-');return p.length===3?`${p[2]}-${p[1]}-${p[0]}`:''}
  function fromInputDate(v){const p=v.split('-');return `${p[2]}-${p[1]}-${p[0]}`}
  function suggestEnd(s){if(!s)return '';const x=timeValue(s); if(x>=9999)return ''; const y=(x+60)%1440; return String(Math.floor(y/60)).padStart(2,'0')+':'+String(y%60).padStart(2,'0')}
  window.openAddActivity=openAddActivity;
  window.closeModal=function(){document.getElementById('activity-modal')?.remove()}
  function openFeedback(key,title){document.getElementById('feedback-modal')?.remove();const val=state.feedback[key]||'';document.body.insertAdjacentHTML('beforeend',`<div class="modal-backdrop" id="feedback-modal"><div class="modal"><div class="modal-head"><span>פידבק — ${esc(title)}</span><button class="close" onclick="closeFeedback()">×</button></div><div class="field"><label>מה היה? מה אהבתם? מה היית משנה?</label><textarea id="feedback-text" style="min-height:130px" placeholder="כמה מילים מהלב…">${esc(val)}</textarea></div><button class="wide-btn" onclick='saveFeedback(${JSON.stringify(key)})'>שמור פידבק</button></div></div>`)}
  function saveFeedback(key){state.feedback[key]=document.getElementById('feedback-text')?.value.trim()||'';save();closeFeedback();toast('הפידבק נשמר')}
  function closeFeedback(){document.getElementById('feedback-modal')?.remove()}
  window.openFeedback=openFeedback;window.saveFeedback=saveFeedback;window.closeFeedback=closeFeedback;
  function toast(msg){let t=document.getElementById('toast');if(!t){document.body.insertAdjacentHTML('beforeend','<div class="toast" id="toast"></div>');t=document.getElementById('toast')}t.textContent=msg;t.classList.add('show');clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.classList.remove('show'),1700)}

  function render(){renderTabs(); const html=state.screen==='days'?dayScreen():state.screen==='bookings'?bookingsScreen():state.screen==='control'?controlScreen():reviewScreen(); app.innerHTML=html; app.insertAdjacentHTML('beforeend',bottomFilter()+bottomNav()); bindControlForm();}
  function bindControlForm(){const f=document.getElementById('add-form'); if(!f)return; f.addEventListener('submit',saveNewActivity);}
  activeDate=dates()[0]||'17-Sep-2026';
  render();
})();
