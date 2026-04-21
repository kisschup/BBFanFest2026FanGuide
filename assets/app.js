/* ══════════════════════════════════════
   CONFIG — แก้ตรงนี้เพียงจุดเดียว
══════════════════════════════════════ */
const GAS_URL = 'https://script.google.com/macros/s/AKfycbyfL4j3sDE7jnavXeXO-e6oS8ZizalvhMSozH75vh2muZwdx8acjAXLGeUwmsJd4PE0Pg/exec';
// วาง URL ที่ได้จาก Google Apps Script "Deploy as Web App" ตรงนี้
// ตัวอย่าง: 'https://script.google.com/macros/s/AKfycb.../exec'

/* ══════════════════════════════════════
   ARTISTS DATA — verified from ThaiTicketMajor
══════════════════════════════════════ */
const ARTISTS = [
  {id:'milk',   name:'มิ้ลค์',   nameEn:'Milk',     full:'พรรษา วอสเบียน',            glPair:'love',    pairTag:'Milk Love',      charTh:'MuvMuv (เมิฟเมิฟ)', charEn:'MuvMuv', color:'#818cf8'},
  {id:'love',   name:'เลิฟ',    nameEn:'Love',     full:'ภัทรานิษฐ์ ลิ้มปติยากร',   glPair:'milk',    pairTag:'Milk Love',      charTh:'MuvMuv (เมิฟเมิฟ)', charEn:'MuvMuv', color:'#c084fc'},
  {id:'namtan', name:'น้ำตาล',  nameEn:'Namtan',   full:'ทิพนารี วีรวัฒโนดม',        glPair:'film',    pairTag:'Namtan Film',    charTh:'Lunar (ลูน่า)',      charEn:'Lunar',  color:'#fb923c'},
  {id:'film',   name:'ฟิล์ม',   nameEn:'Film',     full:'รชานันท์ มหาวรรณ์',         glPair:'namtan',  pairTag:'Namtan Film',    charTh:'Lunar (ลูน่า)',      charEn:'Lunar',  color:'#f472b6'},
  {id:'emi',    name:'เอมี่',    nameEn:'Emi',      full:'ทสร กลิ่นเนียม',             glPair:'bonnie',  pairTag:'Emi Bonnie',     charTh:'Any (เอนี่)',        charEn:'Any',    color:'#38bdf8'},
  {id:'bonnie', name:'บอนนี่',  nameEn:'Bonnie',   full:'ภัทราภัสร์ โบรัชตะสุวรรณ์', glPair:'emi',     pairTag:'Emi Bonnie',     charTh:'Any (เอนี่)',        charEn:'Any',    color:'#fb7185'},
  {id:'view',   name:'วิว',     nameEn:'View',     full:'เบญญาภา จีนประสม',          glPair:'mim',     pairTag:'View Mim',       charTh:null, charEn:null, color:'#34d399'},
  {id:'mim',    name:'มิ้ม',    nameEn:'Mim',      full:'รัตนวดี วงค์ทอง',            glPair:'view',    pairTag:'View Mim',       charTh:null, charEn:null, color:'#f9a8d4'},
  {id:'june',   name:'จูน',     nameEn:'June',     full:'วรรณวิมล เจนอัศวเมธี',      glPair:'munich',  pairTag:'June Mewnich',   charTh:null, charEn:null, color:'#fde68a'},
  {id:'munich', name:'มิวนิค',  nameEn:'Mewnich',  full:'นันท์นภัส เลิศนามเชิดสกุล', glPair:'june',    pairTag:'June Mewnich',   charTh:null, charEn:null, color:'#7dd3fc'},
  {id:'jan',    name:'แจน',     nameEn:'Jan',      full:'พลอยชมพู ศุภทรัพย์',        glPair:'jing',    pairTag:'Jan Jingjing',   charTh:null, charEn:null, color:'#a5f3fc'},
  {id:'jing',   name:'จิงจิง',  nameEn:'Jingjing', full:'จิงจิง ยู',                  glPair:'jan',     pairTag:'Jan Jingjing',   charTh:null, charEn:null, color:'#fdba74'},
  {id:'pan',    name:'ป่าน',    nameEn:'Pahn',     full:'ปทิตตา พรจำเริญรัตน์',      glPair:'fond',    pairTag:'Pahn Fond',      charTh:null, charEn:null, color:'#d8b4fe'},
  {id:'fond',   name:'ฟ้อนด์',  nameEn:'Fond',     full:'ณัฐทิชา จันทรวารีเลขา',     glPair:'pan',     pairTag:'Pahn Fond',      charTh:null, charEn:null, color:'#fca5a5'},
  {id:'krapook',name:'กระปุก', nameEn:'Kapook',   full:'พลอยนิรา หิรัญทวีศิลป์',    glPair:'saisee',  pairTag:'Kapook Ciize',   charTh:null, charEn:null, color:'#6ee7b7'},
  {id:'saisee', name:'ไซซี',   nameEn:'Ciize',    full:'รัตท์ริชา ประภากิติ',        glPair:'krapook', pairTag:'Kapook Ciize',   charTh:null, charEn:null, color:'#fde68a'},
];

const PAIR_HASHTAGS = {
  'Milk Love':'#MilkLove #MuvMuv',
  'Namtan Film':'#NamtanFilm #Lunar',
  'Emi Bonnie':'#EmiBonnie #Any',
  'View Mim':'#ViewMim',
  'June Mewnich':'#JuneMewnich',
  'Jan Jingjing':'#JanJingjing',
  'Pahn Fond':'#PahnFond',
  'Kapook Ciize':'#KapookCiize',
};

const PAIRS = [
  {id:'milklove', tag:'Milk Love', th:'มิ้ลค์×เลิฟ', color:'#a78bfa'},
  {id:'namtanfilm', tag:'Namtan Film', th:'น้ำตาล×ฟิล์ม', color:'#fb923c'},
  {id:'emibonnie', tag:'Emi Bonnie', th:'เอมี่×บอนนี่', color:'#38bdf8'},
  {id:'viewmim', tag:'View Mim', th:'วิว×มิ้ม', color:'#34d399'},
  {id:'junemewnich', tag:'June Mewnich', th:'จูน×มิวนิค', color:'#fde68a'},
  {id:'janjingjing', tag:'Jan Jingjing', th:'แจน×จิงจิง', color:'#fdba74'},
  {id:'pahnfond', tag:'Pahn Fond', th:'ป่าน×ฟ้อนด์', color:'#d8b4fe'},
  {id:'kapookciize', tag:'Kapook Ciize', th:'กระปุก×ไซซี', color:'#6ee7b7'},
];
const PAIR_BY_ID = Object.fromEntries(PAIRS.map(p=>[p.id,p]));
const ARTIST_TO_PAIR = {
  milk:'milklove',love:'milklove',
  namtan:'namtanfilm',film:'namtanfilm',
  emi:'emibonnie',bonnie:'emibonnie',
  view:'viewmim',mim:'viewmim',
  june:'junemewnich',munich:'junemewnich',
  jan:'janjingjing',jing:'janjingjing',
  pan:'pahnfond',fond:'pahnfond',
  krapook:'kapookciize',saisee:'kapookciize',
};

function normalizeFandoms(raw){
  const arr=Array.isArray(raw)?raw:(raw?[raw]:[]);
  const out=[];
  arr.forEach(f=>{
    if(!f)return;
    if(f==='dd'){out.push('dd');return;}
    if(PAIR_BY_ID[f]){out.push(f);return;}
    if(ARTIST_TO_PAIR[f]){out.push(ARTIST_TO_PAIR[f]);return;}
    out.push(f);
  });
  return [...new Set(out)];
}
function fandomName(fid){
  if(fid==='dd') return '💛 DD';
  const p=PAIR_BY_ID[fid];
  if(!p) return fid;
  return lang==='th'?p.th:p.tag;
}
function fandomColor(fid){
  if(fid==='dd') return 'var(--gold)';
  return PAIR_BY_ID[fid]?.color||'var(--lav)';
}

/* ══════════════════════════════════════
   ZONE CONFIG — corrected prices
══════════════════════════════════════ */
const ZONES = {
  A:{subs:['A1','A2','A3','A4'],
     prices:{A1:'5,000',A2:'7,900',A3:'7,900',A4:'5,000'},
     colors:{A1:'#ca8a04',A2:'#dc2626',A3:'#dc2626',A4:'#ca8a04'},
     mainColor:'#dc2626'},
  B:{subs:['B1','B2','B3','B4','B5'],
     prices:{B1:'4,500',B2:'5,900',B3:'5,900',B4:'5,900',B5:'4,500'},
     colors:{B1:'#c026d3',B2:'#16a34a',B3:'#16a34a',B4:'#16a34a',B5:'#c026d3'},
     mainColor:'#16a34a'},
  C:{subs:['C1','C2','C3','C4','C5'],
     prices:{C1:'3,500',C2:'4,500',C3:'4,500',C4:'4,500',C5:'3,500'},
     colors:{C1:'#9333ea',C2:'#c026d3',C3:'#c026d3',C4:'#c026d3',C5:'#9333ea'},
     mainColor:'#9333ea'},
  D:{subs:['D1','D2','D3','D4'],
     prices:{D1:'3,000/2,500',D2:'3,000/2,500',D3:'3,000/2,500',D4:'3,000/2,500'},
     colors:{D1:'#1d4ed8',D2:'#1d4ed8',D3:'#1d4ed8',D4:'#1d4ed8'},
     colorBack:{D1:'#0e7490',D2:'#0e7490',D3:'#0e7490',D4:'#0e7490'},
     mainColor:'#1d4ed8'},
  E:{subs:['E1','E2','E3','E4'],
     prices:{E1:'2,000/1,500',E2:'2,000/1,500',E3:'2,000/1,500',E4:'2,000/1,500'},
     colors:{E1:'#db2777',E2:'#db2777',E3:'#db2777',E4:'#db2777'},
     colorBack:{E1:'#06b6d4',E2:'#06b6d4',E3:'#06b6d4',E4:'#06b6d4'},
     mainColor:'#db2777'},
};

// Seat rows per main zone (reference)
const ZONE_ROWS = {
  A:['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z'],
  B:['BA','BB','BC','BD','BE','BF','BG','BH','BJ','BK','BL','BM','BN','BP','BQ','BR','BS','BT','BU','BV','BW'],
  C:['CA','CB','CC','CD','CE','CF','CG','CH','CJ','CK'],
  D:['DA','DB','DC','DD','DE','DF','DG','DH','DJ','DK','DL','DM'],
  E:['EA','EB','EC','ED','EE','EF','EG','EH','EJ','EK','EL','EM','EN','EP','EQ'],
};

// Exact row list per sub-zone (from user-provided zoomed map)
const SZ_ROWS = {
  A1:['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U'],
  A2:['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T'],
  A3:['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z'],
  A4:['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','U','V','W','X','Y','Z'],
  B1:['BA','BB','BC','BD','BE','BF','BG','BH','BJ','BK','BL','BM','BN','BP','BQ','BR','BS','BT','BU','BV','BW'],
  B2:['BC','BD','BE','BF','BG','BH','BJ','BK','BL','BM','BN','BP','BQ','BR','BS','BT','BU','BV','BW'],
  B3:['BK','BL','BM','BN','BP','BQ','BR','BS','BT','BU','BV','BW'],
  B4:['BJ','BK','BL','BM','BN','BP','BQ','BR','BS','BT','BU','BV','BW'],
  B5:['BF','BG','BH','BJ','BK','BL','BM','BN','BP','BQ','BR','BS','BT','BU','BV','BW'],
  C1:['CA','CB','CC','CD','CE','CF','CG','CH','CJ','CK'],
  C2:['CA','CB','CC','CD','CE','CF','CG','CH','CJ','CK'],
  C3:['CA','CB','CC','CD','CE','CF','CG','CH','CJ','CK'],
  C4:['CA','CB','CC','CD','CE','CF','CG','CH','CJ','CK'],
  C5:['CA','CB','CC','CD','CE','CF','CG','CH','CJ','CK'],
  D1:['DA','DB','DC','DD','DE','DF','DG','DH','DJ','DK','DL','DM'],
  D2:['DA','DB','DC','DD','DE','DF','DG','DH','DJ','DK','DL','DM'],
  D3:['DA','DB','DC','DD','DE','DF','DG','DH','DJ','DK','DL','DM'],
  D4:['DA','DB','DC','DD','DE','DF','DG','DH','DJ','DK','DL','DM'],
  E1:['EA','EB','EC','ED','EE','EF','EG','EH','EJ','EK','EL','EM','EN','EP','EQ'],
  E2:['EA','EB','EC','ED','EE','EF','EG','EH','EJ','EK','EL','EM','EN','EP','EQ'],
  E3:['EA','EB','EC','ED','EE','EF','EG','EH','EJ','EK','EL','EM','EN','EP','EQ'],
  E4:['EA','EB','EC','ED','EE','EF','EG','EH','EJ','EK','EL','EM','EN','EP','EQ'],
};

// Sub-zone seat column ranges
const SZ_RANGE = {
  A1:{r:[1,17]},A2:{r:[18,50]},A3:{r:[52,67]},A4:{r:[68,83]},
  B1:{r:[1,17]},B2:{r:[18,35]},B3:{r:[39,52]},B4:{r:[53,67]},B5:{r:[68,83]},
  C1:{r:[1,17]},C2:{r:[18,37]},C3:{r:[38,52]},C4:{r:[53,67]},C5:{r:[68,83]},
  D1:{r:[1,12]},D2:{r:[13,28]},D3:{r:[45,60]},D4:{r:[61,72]},
  E1:{r:[1,16]},E2:{r:[17,36]},E3:{r:[37,56]},E4:{r:[57,72]},
};

// Exact row->seat window per sub-zone (from user-provided zoomed map)
const SZ_WINDOWS = {
  A1:{A:[14,17],B:[12,17],C:[10,17],D:[8,17],E:[6,17],F:[4,17],G:[2,17],H:[1,17],J:[1,17],K:[1,17],L:[1,17],M:[1,17],N:[1,17],P:[1,17],Q:[1,17],R:[1,17],S:[1,17],T:[1,17],U:[1,17]},
  A2:{A:[18,44],B:[18,46],C:[18,47],D:[18,48],E:[18,49],F:[18,50],G:[18,50],H:[18,50],J:[18,50],K:[18,50],L:[18,50],M:[18,50],N:[18,49],P:[18,48],Q:[18,48],R:[18,38],S:[18,36],T:[18,22]},
  A3:{A:[53,67],B:[54,67],C:[54,67],D:[55,67],E:[55,67],F:[55,67],G:[55,67],H:[55,67],J:[55,67],K:[55,67],L:[55,67],M:[55,67],N:[54,67],P:[54,67],Q:[53,67],R:[52,67],S:[52,67],T:[55,67],U:[56,67],V:[56,67],W:[57,67],X:[58,67],Y:[58,64],Z:[58,61]},
  A4:{A:[68,73],B:[68,75],C:[68,77],D:[68,79],E:[68,81],F:[68,83],G:[68,83],H:[68,83],J:[68,83],K:[68,83],L:[68,83],M:[68,83],N:[68,83],P:[68,83],Q:[68,83],R:[68,83],S:[68,83],T:[68,83],U:[72,83],V:[74,83],W:[77,83],X:[80,83],Y:[80,83],Z:[78,83]},

  B1:{BA:[1,11],BB:[1,9],BC:[1,8],BD:[1,7],BE:[1,9],BF:[1,11],BG:[1,14],BH:[1,17],BJ:[1,17],BK:[1,17],BL:[1,17],BM:[1,17],BN:[1,17],BP:[1,17],BQ:[1,17],BR:[1,17],BS:[1,17],BT:[1,17],BU:[1,17],BV:[1,17],BW:[1,17]},
  B2:{BC:[24,28],BD:[21,28],BE:[19,29],BF:[18,30],BG:[18,30],BH:[18,31],BJ:[18,33],BK:[18,35],BL:[18,34],BM:[18,33],BN:[18,33],BP:[18,32],BQ:[18,32],BR:[18,31],BS:[18,31],BT:[18,31],BU:[18,31],BV:[18,31],BW:[18,31]},
  B3:{BK:[51,52],BL:[50,52],BM:[41,52],BN:[41,52],BP:[40,52],BQ:[40,52],BR:[39,52],BS:[39,52],BT:[39,52],BU:[39,52],BV:[40,52],BW:[41,52]},
  B4:{BJ:[53,67],BK:[53,67],BL:[53,67],BM:[53,67],BN:[53,67],BP:[53,67],BQ:[53,67],BR:[53,67],BS:[53,67],BT:[53,67],BU:[53,67],BV:[53,67],BW:[53,67]},
  B5:{BF:[73,83],BG:[70,83],BH:[68,83],BJ:[68,83],BK:[68,83],BL:[68,83],BM:[68,83],BN:[68,83],BP:[68,83],BQ:[68,83],BR:[68,83],BS:[68,83],BT:[68,83],BU:[68,83],BV:[68,83],BW:[68,83]},

  C1:{CA:[1,17],CB:[1,17],CC:[1,17],CD:[1,17],CE:[1,17],CF:[1,17],CG:[1,17],CH:[1,17],CJ:[1,17],CK:[1,17]},
  C2:{CA:[18,32],CB:[18,33],CC:[18,33],CD:[18,34],CE:[18,35],CF:[18,36],CG:[18,37],CH:[18,37],CJ:[18,37],CK:[18,37]},
  C3:{CA:[43,52],CB:[44,52],CC:[45,52],CD:[46,52],CE:[48,52],CF:[49,52],CG:[49,52],CH:[38,52],CJ:[38,52],CK:[38,52]},
  C4:{CA:[53,67],CB:[53,67],CC:[53,67],CD:[53,67],CE:[53,67],CF:[53,67],CG:[53,67],CH:[53,67],CJ:[53,67],CK:[53,67]},
  C5:{CA:[68,83],CB:[68,83],CC:[68,83],CD:[68,83],CE:[68,83],CF:[68,83],CG:[68,83],CH:[68,83],CJ:[68,83],CK:[68,83]},

  D1:{DA:[1,12],DB:[1,12],DC:[1,12],DD:[1,12],DE:[1,12],DF:[1,12],DG:[1,12],DH:[1,12],DJ:[1,12],DK:[1,12],DL:[1,12],DM:[1,12]},
  D2:{DA:[13,28],DB:[13,28],DC:[13,28],DD:[13,28],DE:[13,28],DF:[13,28],DG:[13,28],DH:[13,28],DJ:[13,28],DK:[13,28],DL:[13,28],DM:[13,28]},
  D3:{DA:[45,60],DB:[45,60],DC:[45,60],DD:[45,60],DE:[45,60],DF:[45,60],DG:[45,60],DH:[45,60],DJ:[45,60],DK:[45,60],DL:[45,60],DM:[45,60]},
  D4:{DA:[61,72],DB:[61,72],DC:[61,72],DD:[61,72],DE:[61,72],DF:[61,72],DG:[61,72],DH:[61,72],DJ:[61,72],DK:[61,72],DL:[61,72],DM:[61,72]},

  E1:{EA:[1,16],EB:[1,16],EC:[1,16],ED:[1,16],EE:[1,16],EF:[1,16],EG:[1,16],EH:[1,16],EJ:[1,16],EK:[1,16],EL:[1,16],EM:[1,16],EN:[1,16],EP:[1,16],EQ:[1,16]},
  E2:{EA:[17,36],EB:[17,36],EC:[17,36],ED:[17,36],EE:[17,36],EF:[17,36],EG:[17,36],EH:[17,36],EJ:[17,36],EK:[17,36],EL:[17,36],EM:[17,36],EN:[17,36],EP:[17,36],EQ:[17,36]},
  E3:{EA:[37,56],EB:[37,56],EC:[37,56],ED:[37,56],EE:[37,56],EF:[37,56],EG:[37,56],EH:[37,56],EJ:[37,56],EK:[37,56],EL:[37,56],EM:[37,56],EN:[37,56],EP:[37,56],EQ:[37,56]},
  E4:{EA:[57,72],EB:[57,72],EC:[57,72],ED:[57,72],EE:[57,72],EF:[57,72],EG:[57,72],EH:[57,72],EJ:[57,72],EK:[57,72],EL:[57,72],EM:[57,72],EN:[57,72],EP:[57,72],EQ:[57,72]},
};

function calcZoneCapacity(zoneId){
  const rows=SZ_ROWS[zoneId]||[];
  let sum=0;
  rows.forEach(r=>{
    const w=SZ_WINDOWS[zoneId]?.[r];
    if(w){sum+=Math.max(0,w[1]-w[0]+1);return;}
    const rg=SZ_RANGE[zoneId]?.r;
    if(rg) sum+=Math.max(0,rg[1]-rg[0]+1);
  });
  return sum;
}

const SUBZONE_CAPACITY=Object.fromEntries(
  Object.keys(SZ_ROWS).map(sz=>[sz,calcZoneCapacity(sz)])
);

function getRowSeatWindow(zoneId,rowName){
  const r=(rowName||'').toUpperCase();
  const w=SZ_WINDOWS[zoneId]?.[r];
  if(w)return{start:w[0],end:w[1],count:w[1]-w[0]+1};
  const rg=SZ_RANGE[zoneId]?.r;
  return rg?{start:rg[0],end:rg[1],count:rg[1]-rg[0]+1}:null;
}

function normalizeRowForZone(mainZone,rowRaw){
  const r=(rowRaw||'').toUpperCase().trim();
  if(mainZone==='A'&&/^A[A-Z]$/.test(r)) return r.slice(1); // backward compatibility: AA->A, AB->B ...
  return r;
}
// All sub-zone price options (for dropdown)
const SZ_PRICES = {
  A1:['5,000'],A2:['7,900'],A3:['7,900'],A4:['5,000'],
  B1:['4,500'],B2:['5,900'],B3:['5,900'],B4:['5,900'],B5:['4,500'],
  C1:['3,500'],C2:['4,500'],C3:['4,500'],C4:['4,500'],C5:['3,500'],
  D1:['3,000','2,500'],D2:['3,000','2,500'],D3:['3,000','2,500'],D4:['3,000','2,500'],
  E1:['2,000','1,500'],E2:['2,000','1,500'],E3:['2,000','1,500'],E4:['2,000','1,500'],
};

/* ══ STARS ══ */
(()=>{const se=document.getElementById('stars');for(let i=0;i<120;i++){const s=document.createElement('div');s.className='star';s.style.left=Math.random()*100+'%';s.style.top=Math.random()*100+'%';const sz=Math.random()<.15?3:2;s.style.width=s.style.height=sz+'px';s.style.setProperty('--d',(2+Math.random()*5)+'s');s.style.setProperty('--dl',(-Math.random()*7)+'s');s.style.setProperty('--b',(0.3+Math.random()*.7).toFixed(2));se.appendChild(s);}})();

/* ══ SETUP BANNER ══ */
if(GAS_URL) document.getElementById('setup-banner').style.display='none';

/* ══ LANG ══ */
let lang='th';
function toggleLang(){
  lang=lang==='th'?'en':'th';
  document.getElementById('lang-btn').textContent=lang==='th'?'EN':'ไทย';
  document.querySelectorAll('[data-th]').forEach(el=>{
    const v=el.dataset[lang]||el.dataset.th;
    if(['OPTION','SPAN','STRONG','SMALL','A','DIV','P'].includes(el.tagName)||!el.children.length)
      el.textContent=v;
  });
  buildHomePage();buildFandomChips();buildDEStrip();buildCensusDayFilter();buildAnalysisFilter();buildLiveCountryOptions();buildLiveFandomChips();renderLiveStreamingSummary();setRegisterTab(registerTab);checkSeatDuplicateRealtime();
  syncLiveData().then(()=>{
    renderLiveStreamingSummary();
    if(document.getElementById('page-analysis')?.classList.contains('active')) renderAnalysis();
  });
  if(document.getElementById('page-census')?.classList.contains('active')) renderCensus();
  if(document.getElementById('page-analysis')?.classList.contains('active')) renderAnalysis();
}

/* ══ NAV ══ */
function goPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  document.querySelectorAll('.nav-tab').forEach(b=>b.classList.toggle('active',b.dataset.page===id));
  if(id==='census')renderCensus();
  if(id==='analysis')renderAnalysis();
  if(id==='register'){
    Promise.all([syncData(true),syncLiveData(true)]).then(()=>{
      setRegisterTab(registerTab);
      checkSeatDuplicateRealtime();
      renderLiveStreamingSummary();
    });
  }
}

/* ══ TOAST ══ */
function toast(msg,dur=3200){const el=document.getElementById('toast');el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),dur)}

function openSeatOverwriteModal(payload){
  const modal=document.getElementById('seat-overwrite-modal');
  if(!modal) return Promise.resolve(false);

  const set=(id,v)=>{const el=document.getElementById(id);if(el) el.textContent=v||'-';};
  const dayLabel=(payload?.day==='13'||payload?.day==='14')?`${payload.day} ${lang==='th'?'มิ.ย.':'Jun'}`:'-';
  set('ow-day',dayLabel);
  set('ow-zone',`${payload?.mainZone||'-'} / ${payload?.subZone||'-'}`);
  set('ow-seat',`${payload?.row||'-'} / ${payload?.seatNum||'-'}`);
  set('ow-price',payload?.price?`${payload.price}฿`:'-');
  set('ow-fandoms',(payload?.fandomNames||[]).join(', ')||'-');
  set('ow-nickname',payload?.nickname||'—');

  const title=document.getElementById('seat-overwrite-title');
  const desc=document.getElementById('seat-overwrite-desc');
  const btnCancel=document.getElementById('ow-cancel');
  const btnConfirm=document.getElementById('ow-confirm');
  const chkOwn=document.getElementById('ow-self-confirm');
  const chkOwnLabel=document.getElementById('ow-self-confirm-label');
  if(title) title.textContent=lang==='th'?'ยืนยันการลงทับข้อมูลที่นั่ง':'Confirm seat overwrite';
  if(desc) desc.textContent=lang==='th'
    ? 'การลงทะเบียนนี้เป็นการลงทับข้อมูลที่มีอยู่ โปรดแน่ใจว่าข้อมูลดังกล่าวเป็นข้อมูลของท่านเอง'
    : 'This submission will overwrite existing seat data. Please make sure this record belongs to you.';
  if(btnCancel) btnCancel.textContent=lang==='th'?'ยกเลิก':'Cancel';
  if(btnConfirm) btnConfirm.textContent=lang==='th'?'ยืนยันลงทับ':'Confirm overwrite';
  if(chkOwnLabel) chkOwnLabel.textContent=lang==='th'
    ? 'ยืนยันว่าเป็นข้อมูลของตนเองและอนุญาตให้ลงทับข้อมูลที่นั่งนี้'
    : 'I confirm this is my own record and allow overwriting this seat entry.';
  if(chkOwn){chkOwn.checked=false;}
  if(btnConfirm){btnConfirm.disabled=true;}

  return new Promise(resolve=>{
    const cleanup=()=>{
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden','true');
      modal.removeEventListener('click',onBackdrop);
      document.removeEventListener('keydown',onEsc);
      btnCancel?.removeEventListener('click',onCancel);
      btnConfirm?.removeEventListener('click',onConfirm);
      chkOwn?.removeEventListener('change',onAgreeChange);
    };
    const close=(ok)=>{cleanup();resolve(ok);};
    const onCancel=()=>close(false);
    const onConfirm=()=>close(true);
    const onAgreeChange=()=>{if(btnConfirm) btnConfirm.disabled=!chkOwn?.checked;};
    const onBackdrop=(ev)=>{if(ev.target===modal) close(false);};
    const onEsc=(ev)=>{if(ev.key==='Escape') close(false);};

    btnCancel?.addEventListener('click',onCancel);
    btnConfirm?.addEventListener('click',onConfirm);
    chkOwn?.addEventListener('change',onAgreeChange);
    modal.addEventListener('click',onBackdrop);
    document.addEventListener('keydown',onEsc);
    modal.classList.add('open');
    modal.setAttribute('aria-hidden','false');
  });
}

/* ══════════════════════════════════════
   HOME PAGE DATA
══════════════════════════════════════ */
const TL={
  th:[
    {t:'08:00 น.',h:'เปิดบูธหน้างาน',d:'จำหน่าย Official Merchandise · เปิดลงทะเบียนรับ Fan Benefit'},
    {t:'08:00–13:30 น.',h:'ลงทะเบียน Photo Session',d:'ผู้มีสิทธิ์ Private/Group Photo ต้องลงทะเบียนในช่วงนี้ · หากไม่ทัน = สละสิทธิ์ (แต่ยังเข้าชมโชว์ได้)'},
    {t:'12:30 น.',h:'เปิดประตู (ผู้มีสิทธิ์ถ่ายรูป)',d:'เข้าฮอลล์เพื่อเตรียมกิจกรรม Group Photo'},
    {t:'13:30 น.',h:'Fan Benefits Group Photo เริ่ม',d:'ถ่ายภาพกับศิลปิน · เสร็จแล้วต้องออกจากฮอลล์ทันที และห้ามทิ้งของไว้ที่นั่ง'},
    {t:'16:00 น.',h:'เปิดประตูทั่วไป',d:'ผู้ชมทุกท่านเข้าฮอลล์ได้'},
    {t:'17:00 น. ✦',h:'SHOWTIME',d:'Blush Blossom Fan Fest 2026 : Midnight Bloom เริ่มต้น!'},
    {t:'หลังโชว์จบ',h:'Hi-Bye Session',d:'สำหรับบัตร 7,900 / 5,900 / 5,000 / 4,500 บาท'},
  ],
  en:[
    {t:'8:00 AM',h:'Merchandise Booth Opens',d:'Official goods on sale · Fan Benefit registration begins'},
    {t:'8:00–1:30 PM',h:'Photo Session Registration',d:'Must register during this window · Late = forfeit slot (can still attend show)'},
    {t:'12:30 PM',h:'Hall Opens (Photo holders)',d:'Enter hall to prepare for Group Photo'},
    {t:'1:30 PM',h:'Fan Benefit Group Photo Starts',d:'Photos with artists · Must exit hall immediately after · Do not leave belongings'},
    {t:'4:00 PM',h:'General Doors Open',d:'All ticket holders may enter'},
    {t:'5:00 PM ✦',h:'SHOWTIME',d:'Blush Blossom Fan Fest 2026 : Midnight Bloom begins!'},
    {t:'After show',h:'Hi-Bye Session',d:'For 7,900 / 5,900 / 5,000 / 4,500 THB tickets'},
  ]
};
const INFO={
  th:[
    {i:'📅',l:'วันจัดงาน',v:'เสาร์ 13 & อาทิตย์ 14 มิ.ย. 2569',s:'2 รอบการแสดง · เวลา 17:00 น.',ac:'var(--gold)'},
    {i:'📍',l:'สถานที่',v:'BITEC LIVE (ไบเทค)',s:'88 ถ.บางนา-ตราด กม.1 กรุงเทพฯ',ac:'var(--lav)'},
    {i:'🎟',l:'ราคาบัตร (In-Venue)',v:'1,500 – 7,900 บาท',s:'ซื้อที่ ThaiTicketMajor เท่านั้น',ac:'var(--rose)'},
    {i:'📡',l:'Live Streaming',v:'TTM LIVE · 1,500 / 1,200 ฿',s:'+Service Fee 30฿/ใบ · สูงสุด 20 ใบ/ออเดอร์',ac:'#06b6d4'},
    {i:'📸',l:'ประกาศ Lucky Fan Benefit',v:'8 มิถุนายน 2569',s:'ทาง GMMTV Social Media',ac:'var(--gold)'},
    {i:'🪪',l:'จำกัดการซื้อ',v:'สูงสุด 4 ใบ/รอบ/บัตรประชาชน',s:'รวม 2 รอบ = สูงสุด 8 ใบ',ac:'var(--lav)'},
  ],
  en:[
    {i:'📅',l:'Date',v:'Sat 13 & Sun 14 June 2026',s:'2 shows · 5:00 PM each',ac:'var(--gold)'},
    {i:'📍',l:'Venue',v:'BITEC LIVE',s:'88 Bangna-Trad Rd. Km.1, Bangkok',ac:'var(--lav)'},
    {i:'🎟',l:'In-Venue Tickets',v:'1,500 – 7,900 THB',s:'ThaiTicketMajor only',ac:'var(--rose)'},
    {i:'📡',l:'Live Streaming',v:'TTM LIVE · 1,500 / 1,200 THB',s:'+30 THB service fee · Max 20/order',ac:'#06b6d4'},
    {i:'📸',l:'Fan Benefit Lucky Draw',v:'8 June 2026',s:'Via GMMTV Social Media',ac:'var(--gold)'},
    {i:'🪪',l:'Purchase Limit',v:'Max 4 tickets/show per ID',s:'Max 8 across both shows',ac:'var(--lav)'},
  ]
};
const BPRICES=['7,900','5,900','5,000','4,500','3,500','3,000','2,500','2,000','1,500'];
const BCOLORS=['#dc2626','#16a34a','#ca8a04','#c026d3','#9333ea','#1d4ed8','#0e7490','#db2777','#06b6d4'];
const BROWS={
  th:[
    {l:'สินค้า Official (Pre-order + ช่องพิเศษ)',v:['✓','✓','✓','—','—','—','—','—','—']},
    {l:'Private Photo 16:1 (*ผู้ที่ได้ Private จะไม่ได้ Group 16:8)',v:['R50','—','—','—','—','—','—','—','—']},
    {l:'Group Photo 16:8',v:['✓','—','—','—','—','—','—','—','—']},
    {l:'Group Photo 16:16',v:['—','✓','—','—','—','—','—','—','—']},
    {l:'Group Photo 16:20',v:['—','—','✓','—','—','—','—','—','—']},
    {l:'Group Photo 16:24',v:['—','—','—','R360','R72','R48','R24','—','—']},
    {l:'Hi-Bye (หลังโชว์)',v:['✓','R300','R200','R100','—','—','—','—','—']},
    {l:'Signed Official Poster',v:['✓','R100','R50','—','—','—','—','—','—']},
    {l:'Official Poster (ทุกคน)',v:['—','✓','✓','✓','✓','✓','✓','✓','✓']},
  ],
  en:[
    {l:'Official Merch (pre-order + special lane)',v:['✓','✓','✓','—','—','—','—','—','—']},
    {l:'Private Photo 16:1 (*Private winners ineligible for Group 16:8)',v:['R50','—','—','—','—','—','—','—','—']},
    {l:'Group Photo 16:8',v:['✓','—','—','—','—','—','—','—','—']},
    {l:'Group Photo 16:16',v:['—','✓','—','—','—','—','—','—','—']},
    {l:'Group Photo 16:20',v:['—','—','✓','—','—','—','—','—','—']},
    {l:'Group Photo 16:24',v:['—','—','—','R360','R72','R48','R24','—','—']},
    {l:'Hi-Bye (post-show)',v:['✓','R300','R200','R100','—','—','—','—','—']},
    {l:'Signed Official Poster',v:['✓','R100','R50','—','—','—','—','—','—']},
    {l:'Official Poster (everyone)',v:['—','✓','✓','✓','✓','✓','✓','✓','✓']},
  ]
};
const RULES={
  th:[
    {i:'🚫',t:'ห้ามถ่ายวิดีโอ / Live',d:'ห้ามบันทึกเสียงหรือถ่ายทอดสดด้วยอุปกรณ์ทุกชนิด · ฝ่าฝืน = เชิญออกทันที + ลบไฟล์ทั้งหมด',no:true},
    {i:'🚫',t:'ห้ามนำอาหาร-เครื่องดื่มเข้าฮอลล์',d:'ทุกชนิด',no:true},
    {i:'🚫',t:'ห้ามชูป้ายระหว่างการแสดง',d:'ทุกขนาด ทุกชนิด (บังผู้ชมด้านหลัง)',no:true},
    {i:'🚫',t:'ห้ามใช้แฟลช',d:'ในการถ่ายภาพทุกกรณี',no:true},
    {i:'🚫',t:'ห้ามเลนส์ซูมยาว',d:'ห้ามเลนส์ระยะ 50-230/70-200/70-300/300-400/600mm · Teleconverter x1.4 x2 · Pro Zoomer · Compact Camera ที่เลนส์ >150mm · เลนส์ถึง 150mm OK',no:true},
    {i:'⏰',t:'ลงทะเบียน Photo ภายใน 08:00–13:30 น.',d:'หากไม่ทัน = สละสิทธิ์ (แต่ยังดูโชว์ได้ปกติ)',no:false},
    {i:'📛',t:'1 ที่นั่ง รับ Fan Benefit ได้ 1 สิทธิ์',d:'สำหรับสิทธิ์ Random เท่านั้น',no:false},
    {i:'🎫',t:'สูงสุด 4 ใบ/รอบ/บัตรประชาชน',d:'รวม 2 รอบ = สูงสุด 8 ใบ',no:false},
    {i:'📷',t:'กล้อง DSLR ใช้ได้',d:'แต่เลนส์ต้องไม่เกิน 150mm เท่านั้น',no:false},
  ],
  en:[
    {i:'🚫',t:'No video/livestream',d:'No recording of any kind · Violators = removed immediately + files deleted',no:true},
    {i:'🚫',t:'No food or drinks inside hall',d:'All types prohibited',no:true},
    {i:'🚫',t:'No signs during show',d:'All types/sizes (blocks other fans\' view)',no:true},
    {i:'🚫',t:'No flash photography',d:'At any time',no:true},
    {i:'🚫',t:'Long zoom lenses prohibited',d:'50-230/70-200/70-300/300-400/600mm · Teleconverters · Pro Zoomer · Compact with >150mm · Up to 150mm OK',no:true},
    {i:'⏰',t:'Register for photo by 1:30 PM',d:'Late = forfeit slot (can still attend show)',no:false},
    {i:'📛',t:'1 ticket = 1 Fan Benefit slot',d:'For randomly allocated benefits only',no:false},
    {i:'🎫',t:'Max 4 tickets/show per ID',d:'Max 8 across both shows',no:false},
    {i:'📷',t:'DSLR cameras allowed',d:'Lens must be 150mm or shorter',no:false},
  ]
};

const LIVE_COUNTRIES=[
  'Thailand','Japan','China','Taiwan','Hong Kong','South Korea','Philippines','Vietnam','Indonesia','Malaysia','Singapore','Myanmar','Cambodia','Laos','India','United States','Canada','Mexico','Brazil','United Kingdom','France','Germany','Australia','New Zealand'
];

function buildHomePage(){
  document.getElementById('tl-wrap').innerHTML=TL[lang].map(t=>`
    <div class="tl-item"><div class="tl-dot"></div>
      <div class="tl-time">${t.t}</div>
      <div class="tl-title">${t.h}</div>
      <div class="tl-desc">${t.d}</div>
    </div>`).join('');
  document.getElementById('info-grid').innerHTML=INFO[lang].map(c=>`
    <div class="info-card" style="--ac:${c.ac}">
      <div class="info-icon">${c.i}</div>
      <div class="info-label">${c.l}</div>
      <div class="info-val">${c.v}</div>
      <div class="info-sub">${c.s}</div>
    </div>`).join('');
  // Benefit table
  const rows=BROWS[lang];
  let th=`<thead><tr><th style="min-width:170px">${lang==='th'?'สิทธิพิเศษ':'Benefit'}</th>`;
  BPRICES.forEach((p,i)=>th+=`<th><span class="pbadge" style="background:${BCOLORS[i]}44;color:${BCOLORS[i]}">${p}</span></th>`);
  th+='</tr></thead>';
  const tb='<tbody>'+rows.map(r=>`<tr><td>${r.l}</td>${r.v.map(v=>{
    if(v==='✓')return`<td><span class="chk">✓</span></td>`;
    if(v==='—')return`<td><span class="crx">—</span></td>`;
    return`<td><span class="rnd">Random<br>${v.replace('R','')}</span></td>`;
  }).join('')}</tr>`).join('')+'</tbody>';
  document.getElementById('btable').innerHTML=th+tb;
  // Rules
  document.getElementById('rules-grid').innerHTML=RULES[lang].map(r=>`
    <div class="rule-card ${r.no?'rule-no':''}">
      <div class="rule-icon">${r.i}</div>
      <div class="rule-text"><strong>${r.t}</strong>${r.d}</div>
    </div>`).join('');
  // Artists
  document.getElementById('artists-grid').innerHTML=ARTISTS.map(a=>{
    const glPairLabel=a.pairTag||'—';
    const pairTags=(PAIR_HASHTAGS[glPairLabel]||'').split(' ').filter(Boolean);
    const tagLinks=pairTags.map(tag=>`<a href="https://x.com/search?q=${encodeURIComponent(tag)}" target="_blank" rel="noopener noreferrer">${tag}</a>`).join('');
    return`<div class="artist-card">
      <div class="aname">${lang==='th'?a.name:a.nameEn}</div>
      <div class="afull">${a.full}</div>
      <div class="agl">GL: ${glPairLabel}</div>
      ${pairTags.length?`<div class="atag">${tagLinks}</div>`:''}
      ${a.charTh?`<div class="achar">${lang==='th'?a.charTh:a.charEn}</div>`:`<div class="anochar">${lang==='th'?'(ยังไม่มี Character)':'(No official char.)'}</div>`}
    </div>`;
  }).join('');
}

/* ══ SUB-ZONE + PRICE SELECTS ══ */
function updateSub(){
  const m=document.getElementById('main-zone').value;
  const ss=document.getElementById('sub-zone');
  const sp=document.getElementById('seat-price');
  const sr=document.getElementById('seat-row');
  const sn=document.getElementById('seat-num');
  ss.innerHTML='';sp.innerHTML='';sr.innerHTML='';sn.innerHTML='';
  const addDash=(el)=>{const ph=document.createElement('option');ph.value='';ph.disabled=true;ph.selected=true;ph.textContent='—';el.appendChild(ph);};
  addDash(ss);addDash(sp);addDash(sr);addDash(sn);
  if(!m){setSeatCheckMessage('','');return;}
  ZONES[m].subs.forEach(z=>{
    const o=document.createElement('option');o.value=z;
    o.textContent=`${z} — ${ZONES[m].prices[z]}฿`;ss.appendChild(o);
  });
  updatePrice();
  updateRowOptions();
  checkSeatDuplicateRealtime();
}
function updatePrice(){
  const sz=document.getElementById('sub-zone').value;
  const sp=document.getElementById('seat-price');sp.innerHTML='';
  const ph=document.createElement('option');
  ph.value='';ph.disabled=true;ph.selected=true;ph.textContent='—';
  sp.appendChild(ph);
  if(!sz)return;
  (SZ_PRICES[sz]||[]).forEach(p=>{const o=document.createElement('option');o.value=p;o.textContent=p+'฿';sp.appendChild(o);});
}

function updateRowOptions(){
  const sz=document.getElementById('sub-zone').value;
  const mz=document.getElementById('main-zone').value;
  const sr=document.getElementById('seat-row');
  const sn=document.getElementById('seat-num');
  sr.innerHTML='';sn.innerHTML='';
  const addDash=(el)=>{const ph=document.createElement('option');ph.value='';ph.disabled=true;ph.selected=true;ph.textContent='—';el.appendChild(ph);};
  addDash(sr);addDash(sn);
  if(!sz||!mz)return;
  const rows=SZ_ROWS[sz]||ZONE_ROWS[mz]||[];
  rows.forEach(r=>{const o=document.createElement('option');o.value=r;o.textContent=r;sr.appendChild(o);});
}

function updateSeatOptions(){
  const sz=document.getElementById('sub-zone').value;
  const row=document.getElementById('seat-row').value;
  const sn=document.getElementById('seat-num');
  sn.innerHTML='';
  const ph=document.createElement('option');
  ph.value='';ph.disabled=true;ph.selected=true;ph.textContent='—';
  sn.appendChild(ph);
  if(!sz||!row)return;
  const win=getRowSeatWindow(sz,row);
  if(!win)return;
  for(let s=win.start;s<=win.end;s++){
    const o=document.createElement('option');
    o.value=String(s);
    o.textContent=s<10?'0'+s:String(s);
    sn.appendChild(o);
  }
}

function setSeatCheckMessage(type,msg){
  const el=document.getElementById('seat-check-msg');
  if(!el)return;
  el.className='seat-check'+(type?` ${type}`:'');
  el.textContent=msg||'';
}

/* ══ FANDOM CHIPS ══ */
function buildFandomChips(){
  const fw=document.getElementById('fandom-wrap');fw.innerHTML='';
  const dd=document.createElement('div');dd.className='fc dd-fc';
  dd.innerHTML=`<input type="checkbox" id="f-dd" value="dd"><label for="f-dd">💛 DD (ได้หมด)</label>`;
  fw.appendChild(dd);
  PAIRS.forEach(p=>{
    const d=document.createElement('div');d.className='fc';
    const lbl=lang==='th'?`${p.th} (${p.tag})`:p.tag;
    d.innerHTML=`<input type="checkbox" id="f-${p.id}" value="${p.id}"><label for="f-${p.id}" style="border-color:${p.color}44">${lbl}</label>`;
    fw.appendChild(d);
  });
}

/* ══ LIVE STREAMING (SEPARATE FORM) ══ */
const LIVE_LOCAL_KEY='bb_live_stream_v1';
let LIVE_DATA_CACHE=(()=>{try{return JSON.parse(localStorage.getItem(LIVE_LOCAL_KEY)||'[]')}catch{return[]}})();
let LIVE_LAST_SYNC_AT=0;

function normalizeLiveEntry(e){
  const day=String(e?.day||'').trim().toLowerCase();
  const safeDay=(day==='13'||day==='14'||day==='both')?day:'';
  const country=normalizeCountryName(e?.country||'');
  const fandoms=normalizeLiveFandoms(
    Array.isArray(e?.fandoms)
      ? e.fandoms
      : (Array.isArray(e?.members)?e.members:(e?.member?[e.member]:[]))
  );
  const twitter=normalizeTwitterHandle(e?.twitter||'');
  return {
    id:Number(e?.id||Date.now()),
    day:safeDay,
    country,
    fandoms,
    twitter,
    ts:String(e?.ts||new Date().toISOString())
  };
}

function dedupeLiveEntries(list){
  const arr=Array.isArray(list)?list:[];
  const map=new Map();
  arr.forEach(raw=>{
    const e=normalizeLiveEntry(raw);
    if(!e.day||!e.country||!e.twitter) return;
    const key=`${e.day}|${e.twitter}`;
    const prev=map.get(key);
    if(!prev){map.set(key,e);return;}
    const tPrev=Date.parse(prev?.ts||'')||0;
    const tCur=Date.parse(e?.ts||'')||0;
    if(tCur>=tPrev) map.set(key,e);
  });
  return [...map.values()];
}

function getLiveData(){
  const clean=dedupeLiveEntries(Array.isArray(LIVE_DATA_CACHE)?LIVE_DATA_CACHE:[]);
  if(clean.length!==((Array.isArray(LIVE_DATA_CACHE)?LIVE_DATA_CACHE:[]).length)){
    LIVE_DATA_CACHE=clean;
    localStorage.setItem(LIVE_LOCAL_KEY,JSON.stringify(LIVE_DATA_CACHE));
  }
  return clean;
}

function saveLiveData(list){
  LIVE_DATA_CACHE=dedupeLiveEntries(Array.isArray(list)?list:[]);
  localStorage.setItem(LIVE_LOCAL_KEY,JSON.stringify(LIVE_DATA_CACHE));
}

async function fetchRemoteLiveData(){
  if(!GAS_URL) return null;
  const url=`${GAS_URL}${GAS_URL.includes('?')?'&':'?'}action=read_live&t=${Date.now()}`;
  const res=await fetch(url,{method:'GET'});
  if(!res.ok) throw new Error(`Live read failed: ${res.status}`);
  const json=await res.json();
  const arr=Array.isArray(json?.data)?json.data:[];
  return dedupeLiveEntries(arr.map(normalizeLiveEntry));
}

async function syncLiveData(force=false){
  const now=Date.now();
  if(!force&&(now-LIVE_LAST_SYNC_AT)<10000&&getLiveData().length) return getLiveData();
  if(GAS_URL){
    try{
      const remote=await fetchRemoteLiveData();
      if(Array.isArray(remote)){
        saveLiveData(remote);
        LIVE_LAST_SYNC_AT=now;
        return remote;
      }
    }catch(err){console.warn('GAS live read error',err)}
  }
  const local=(()=>{try{return JSON.parse(localStorage.getItem(LIVE_LOCAL_KEY)||'[]')}catch{return[]}})();
  LIVE_DATA_CACHE=dedupeLiveEntries(Array.isArray(local)?local.map(normalizeLiveEntry):[]);
  LIVE_LAST_SYNC_AT=now;
  return LIVE_DATA_CACHE;
}

function buildLiveCountryOptions(){
  const sel=document.getElementById('live-country');
  if(!sel) return;
  const cur=sel.value;
  sel.innerHTML=`<option value="" disabled selected>${lang==='th'?'เลือกประเทศ':'Select country'}</option>`+
    LIVE_COUNTRIES.map(c=>`<option value="${c}">${c}</option>`).join('')+
    `<option value="OTHER">${lang==='th'?'Other (พิมพ์อังกฤษ)':'Other (type in English)'}</option>`;
  if(cur&&[...sel.options].some(o=>o.value===cur)) sel.value=cur;
  updateLiveCountryOtherVisibility();
}

function normalizeLiveFandoms(raw){
  return normalizeFandoms(raw).filter(id=>id==='dd'||!!PAIR_BY_ID[id]);
}

function buildLiveFandomChips(){
  const wrap=document.getElementById('live-fandom-wrap');
  if(!wrap) return;
  const selected=new Set(getSelectedLiveFandoms());
  wrap.innerHTML='';

  const dd=document.createElement('div');dd.className='fc dd-fc';
  dd.innerHTML=`<input type="checkbox" id="lf-dd" value="dd"><label for="lf-dd">💛 DD (ได้หมด)</label>`;
  wrap.appendChild(dd);

  PAIRS.forEach(p=>{
    const d=document.createElement('div');d.className='fc';
    const lbl=lang==='th'?`${p.th} (${p.tag})`:p.tag;
    d.innerHTML=`<input type="checkbox" id="lf-${p.id}" value="${p.id}"><label for="lf-${p.id}" style="border-color:${p.color}44">${lbl}</label>`;
    wrap.appendChild(d);
  });

  [...wrap.querySelectorAll('input[type="checkbox"]')].forEach(inp=>{inp.checked=selected.has(inp.value)});
}

function getSelectedLiveFandoms(){
  const wrap=document.getElementById('live-fandom-wrap');
  if(!wrap) return [];
  return normalizeLiveFandoms([...wrap.querySelectorAll('input[type="checkbox"]:checked')].map(i=>i.value));
}

function clearLiveFandomSelection(){
  const wrap=document.getElementById('live-fandom-wrap');
  if(!wrap) return;
  wrap.querySelectorAll('input[type="checkbox"]').forEach(inp=>{inp.checked=false;});
}

function liveFandomName(id){
  return fandomName(id);
}

function liveFandomColor(id){
  return fandomColor(id);
}

function updateLiveCountryOtherVisibility(){
  const sel=document.getElementById('live-country');
  const wrap=document.getElementById('live-country-other-wrap');
  const inp=document.getElementById('live-country-other');
  if(!sel||!wrap||!inp) return;
  const isOther=sel.value==='OTHER';
  wrap.style.display=isOther?'flex':'none';
  if(!isOther) inp.value='';
}

function normalizeCountryName(v){
  return String(v||'').trim().replace(/\s+/g,' ');
}

function isEnglishCountryName(v){
  return /^[A-Za-z][A-Za-z .'-]{1,39}$/.test(String(v||'').trim());
}

function normalizeTwitterHandle(v){
  const raw=String(v||'').trim().replace(/^@+/,'').toLowerCase();
  return raw?`@${raw}`:'';
}

function isValidTwitterHandle(v){
  return /^@[A-Za-z0-9_]{1,15}$/.test(String(v||'').trim());
}

function getLiveDaySet(day){
  if(day==='both') return new Set(['13','14']);
  return new Set([String(day||'')]);
}

function hasLiveTwitterDuplicate(handle,day){
  const targetHandle=normalizeTwitterHandle(handle);
  const targetDays=getLiveDaySet(day);
  return getLiveData().some(e=>{
    if(normalizeTwitterHandle(e?.twitter)!==targetHandle) return false;
    const existingDays=getLiveDaySet(e?.day);
    return [...targetDays].some(d=>existingDays.has(d));
  });
}

function renderLiveStreamingSummary(){
  const box=document.getElementById('live-summary');
  if(!box) return;
  const data=getLiveData();
  if(!data.length){
    box.innerHTML=`<div style="color:rgba(255,255,255,.45);font-size:12px;text-align:center;padding:8px 4px">${lang==='th'?'ยังไม่มีข้อมูล Live Streaming':'No live streaming data yet'}</div>`;
    return;
  }
  const totalQty=data.length;
  const dayCnt={13:0,14:0};
  const countryCnt={};
  const fandomCnt={};
  data.forEach(e=>{
    const day=String(e.day||'both');
    if(day==='13'||day==='both') dayCnt[13]+=1;
    if(day==='14'||day==='both') dayCnt[14]+=1;
    const c=String(e.country||'Unknown');
    countryCnt[c]=(countryCnt[c]||0)+1;
    normalizeLiveFandoms(e.fandoms||[]).forEach(fid=>{fandomCnt[fid]=(fandomCnt[fid]||0)+1;});
  });
  const sorted=Object.entries(countryCnt).sort((a,b)=>b[1]-a[1]).slice(0,8);
  const max=Math.max(...sorted.map(([,v])=>v),1);
  const fanSorted=Object.entries(fandomCnt).sort((a,b)=>b[1]-a[1]).slice(0,6);
  const fanMax=Math.max(...fanSorted.map(([,v])=>v),1);
  box.innerHTML=`
    <div class="live-summary-top">
      <div class="live-mini"><div class="n">${totalQty}</div><div class="l">${lang==='th'?'รวมทั้งหมด':'Total Fans'}</div></div>
      <div class="live-mini"><div class="n">${dayCnt[13]}</div><div class="l">13 Jun</div></div>
      <div class="live-mini"><div class="n">${dayCnt[14]}</div><div class="l">14 Jun</div></div>
    </div>
    ${sorted.map(([c,v])=>`<div class="ana-row"><div class="ana-lbl">${c}</div><div class="bar-bg"><div class="bar-fg" style="width:${v/max*100}%;background:linear-gradient(90deg,#06b6d4,#3b82f6)"></div></div><div class="ana-val">${v} (${Math.round(v/Math.max(totalQty,1)*100)}%)</div></div>`).join('')}
    ${fanSorted.length?`<div style="height:1px;background:rgba(255,255,255,.08);margin:10px 0"></div><div style="font-size:11px;color:rgba(255,255,255,.55);margin-bottom:6px">${lang==='th'?'ด้อม (Live)':'Live fandoms'}</div>${fanSorted.map(([fid,v])=>`<div class="ana-row"><div class="ana-lbl">${liveFandomName(fid)}</div><div class="bar-bg"><div class="bar-fg" style="width:${v/fanMax*100}%;background:${liveFandomColor(fid)};box-shadow:0 0 8px ${liveFandomColor(fid)}"></div></div><div class="ana-val">${v}</div></div>`).join('')}`:''}
  `;
}

async function submitLiveStreamingForm(){
  const day=document.getElementById('live-day')?.value||'';
  const countrySel=document.getElementById('live-country')?.value||'';
  const otherRaw=document.getElementById('live-country-other')?.value||'';
  const fandoms=getSelectedLiveFandoms();
  const twitter=normalizeTwitterHandle(document.getElementById('live-twitter')?.value||'');
  if(!day){toast('❌ '+(lang==='th'?'กรุณาเลือกวัน':'Please select day'));return}
  if(!countrySel){toast('❌ '+(lang==='th'?'กรุณาเลือกประเทศ':'Please select country'));return}
  if(!fandoms.length){toast('❌ '+(lang==='th'?'กรุณาเลือกด้อมอย่างน้อย 1 ด้อม':'Please select at least one fandom'));return}
  let country=countrySel;
  if(countrySel==='OTHER'){
    country=normalizeCountryName(otherRaw);
    if(!isEnglishCountryName(country)){
      toast('❌ '+(lang==='th'?'ประเทศอื่นๆ กรุณาพิมพ์เป็นภาษาอังกฤษ':'Other country must be English text'));
      return;
    }
  }
  if(!isValidTwitterHandle(twitter)){
    toast('❌ '+(lang==='th'?'กรุณาใส่ชื่อทวิตให้ถูกต้อง เช่น @fanclubTH':'Please enter a valid Twitter handle, e.g. @fanclubTH'));
    return;
  }
  await syncLiveData(true);
  if(hasLiveTwitterDuplicate(twitter,day)){
    toast('❌ '+(lang==='th'?'ชื่อทวิตนี้เคยส่งแล้วในวันเดียวกัน':'This Twitter handle was already submitted for the same day.'));
    return;
  }
  const entry={id:Date.now(),day,country,fandoms,twitter,ts:new Date().toISOString()};
  const btn=document.getElementById('live-submit-btn');
  if(btn){btn.disabled=true;btn.textContent='⏳...';}

  let remoteStatus='none';
  let remoteMessage='';
  if(GAS_URL){
    try{
      const res=await fetch(GAS_URL,{
        method:'POST',
        mode:'cors',
        headers:{'Content-Type':'text/plain;charset=utf-8'},
        body:JSON.stringify({...entry,action:'save_live',type:'live'})
      });
      if(!res.ok) throw new Error(`Live write failed: ${res.status}`);
      const json=await res.json();
      remoteStatus=String(json?.status||'').toLowerCase();
      remoteMessage=String(json?.message||'').trim();
      if(remoteStatus==='ok'){
        await syncLiveData(true);
      }
    }catch(err){console.warn('GAS live write error',err)}
  }

  if(remoteStatus==='skipped'){
    if(btn){btn.disabled=false;btn.textContent=lang==='th'?'✦ บันทึก Live Streaming':'✦ Save Live Streaming';}
    toast('❌ '+(lang==='th'?'ชื่อทวิตนี้เคยส่งแล้วในวันเดียวกัน':'This Twitter handle was already submitted for the same day.'));
    return;
  }

  if(remoteStatus!=='ok'){
    saveLiveData([...getLiveData(),entry]);
  }

  renderLiveStreamingSummary();
  if(document.getElementById('page-analysis')?.classList.contains('active')) renderAnalysis();
  document.getElementById('live-day').value='13';
  document.getElementById('live-country').value='';
  document.getElementById('live-country-other').value='';
  clearLiveFandomSelection();
  document.getElementById('live-twitter').value='';
  updateLiveCountryOtherVisibility();
  if(btn){btn.disabled=false;btn.textContent=lang==='th'?'✦ บันทึก Live Streaming':'✦ Save Live Streaming';}
  if(remoteStatus==='ok'){
    toast(lang==='th'?'📡 บันทึก Live ลง Sheets แล้ว':'📡 Live data saved to Sheets');
  }else{
    const reason=remoteMessage?` (${remoteMessage})`:'';
    toast((lang==='th'
      ? `📡 บันทึก Live แบบ Local (fallback) แล้ว · กรุณาเช็กการ Deploy Apps Script${reason}`
      : `📡 Live data saved locally (fallback) · Please verify Apps Script deployment${reason}`));
  }
}

/* ══ D/E STRIP ══ */
function buildDEStrip(){
  ['D','E'].forEach(m=>{
    const el=document.getElementById(`de-${m}-strip`);if(!el)return;
    el.innerHTML=ZONES[m].subs.map(z=>`
      <div class="de-btn" id="deb-${z}" onclick="openZone('${z}')"
        style="background:${ZONES[m].colors[z]}22;border-color:${ZONES[m].colors[z]}55">
        <div class="de-label">${z}</div>
        <div class="de-prices">
          <span style="color:${ZONES[m].colors[z]}">${m==='D'?'3,000':'2,000'}฿</span>
          <span style="color:rgba(255,255,255,.3)"> / </span>
          <span style="color:${ZONES[m].colorBack[z]}">${m==='D'?'2,500':'1,500'}฿</span>
        </div>
        <div class="de-cnt" id="dbc-${z}" style="color:${ZONES[m].colors[z]}">0</div>
      </div>`).join('');
  });
}

/* ══════════════════════════════════════
   STORAGE & GOOGLE SHEETS
══════════════════════════════════════ */
const LOCAL_KEY='bb_v3';
let DATA_CACHE=(()=>{try{return JSON.parse(localStorage.getItem(LOCAL_KEY)||'[]')}catch{return[]}})();
let lastSyncAt=0;

function dedupeEntries(list){
  const arr=Array.isArray(list)?list:[];
  const map=new Map();
  arr.forEach(raw=>{
    const e=normalizeEntry(raw);
    const days=getEntryDays(e).sort().join(',');
    const key=`${days}|${String(e?.subZone||'').toUpperCase()}|${String(e?.row||'').toUpperCase()}|${Number(e?.seatNum||0)}`;
    const prev=map.get(key);
    if(!prev){map.set(key,e);return;}
    const tPrev=Date.parse(prev?.ts||prev?.submittedAt||'')||0;
    const tCur=Date.parse(e?.ts||e?.submittedAt||'')||0;
    if(tCur>=tPrev) map.set(key,e);
  });
  return [...map.values()];
}
function getData(){
  const clean=dedupeEntries(Array.isArray(DATA_CACHE)?DATA_CACHE:[]);
  if(clean.length!==((Array.isArray(DATA_CACHE)?DATA_CACHE:[]).length)){
    DATA_CACHE=clean;
    localStorage.setItem(LOCAL_KEY,JSON.stringify(DATA_CACHE));
  }
  return clean;
}
function saveLocal(d){
  DATA_CACHE=dedupeEntries(Array.isArray(d)?d:[]);
  localStorage.setItem(LOCAL_KEY,JSON.stringify(DATA_CACHE));
}
function normalizeEntry(e){
  const mainZone=String(e?.mainZone||'').toUpperCase();
  return {
    ...e,
    mainZone,
    subZone:String(e?.subZone||'').toUpperCase(),
    row:normalizeRowForZone(mainZone,String(e?.row||'').toUpperCase()),
    seatNum:Number(e?.seatNum||0),
    days:getEntryDays(e)
  };
}
async function fetchRemoteData(){
  if(!GAS_URL)return null;
  const url=`${GAS_URL}${GAS_URL.includes('?')?'&':'?'}action=read&t=${Date.now()}`;
  const res=await fetch(url,{method:'GET'});
  if(!res.ok) throw new Error(`Read failed: ${res.status}`);
  const json=await res.json();
  const arr=Array.isArray(json?.data)?json.data:[];
  return arr.map(normalizeEntry);
}
async function syncData(force=false){
  const now=Date.now();
  if(!force&&(now-lastSyncAt)<10000&&getData().length) return getData();
  if(GAS_URL){
    try{
      const remote=await fetchRemoteData();
      if(Array.isArray(remote)){saveLocal(remote);lastSyncAt=now;return remote;}
    }catch(err){console.warn('GAS read error',err)}
  }
  const local=(()=>{try{return JSON.parse(localStorage.getItem(LOCAL_KEY)||'[]')}catch{return[]}})();
  DATA_CACHE=dedupeEntries(Array.isArray(local)?local.map(normalizeEntry):[]);
  lastSyncAt=now;
  return DATA_CACHE;
}
function isSeatTaken(data,{day,subZone,row,seatNum}){
  return (data||[]).some(e=>
    String(e?.subZone||'').toUpperCase()===String(subZone||'').toUpperCase()&&
    String(e?.row||'').toUpperCase()===String(row||'').toUpperCase()&&
    Number(e?.seatNum||0)===Number(seatNum||0)&&
    getEntryDays(e).includes(String(day||''))
  );
}
async function checkSeatDuplicateRealtime(){
  const day=document.querySelector('.day-opt input:checked')?.value||'';
  const mz=document.getElementById('main-zone').value;
  const sz=document.getElementById('sub-zone').value;
  const row=document.getElementById('seat-row').value;
  const num=document.getElementById('seat-num').value;
  if(!(day&&mz&&sz&&row&&num)){setSeatCheckMessage('','');return false;}
  const seatNum=parseInt(num,10);
  if(!Number.isInteger(seatNum)||seatNum<1){setSeatCheckMessage('','');return false;}
  await syncData();
  const dup=isSeatTaken(getData(),{day,subZone:sz,row,seatNum});
  if(dup){
    setSeatCheckMessage('warn',lang==='th'?'⚠️ ที่นั่งนี้มีคนลงแล้วในวันนี้':'⚠️ Seat already taken for this day');
    return true;
  }
  setSeatCheckMessage('ok',lang==='th'?'✅ ที่นั่งนี้ยังว่าง':'✅ Seat is available');
  return false;
}

async function submitForm(){
  const day=document.querySelector('.day-opt input:checked')?.value||'';
  if(!day){toast('❌ '+(lang==='th'?'กรุณาเลือกวันที่ไป':'Select day'));return}
  const mz=document.getElementById('main-zone').value;
  const sz=document.getElementById('sub-zone').value;
  const pr=document.getElementById('seat-price').value;
  const rowRaw=document.getElementById('seat-row').value.trim().toUpperCase();
  const num=document.getElementById('seat-num').value.trim();
  if(!mz){toast('❌ '+(lang==='th'?'กรุณาเลือกโซน':'Select zone'));return}
  if(!sz){toast('❌ '+(lang==='th'?'กรุณาเลือกโซนย่อย':'Select sub-zone'));return}
  if(!pr){toast('❌ '+(lang==='th'?'กรุณาเลือกราคา':'Select price'));return}
  if(!rowRaw){toast('❌ '+(lang==='th'?'กรุณาเลือกแถว':'Select row'));return}
  if(!num){toast('❌ '+(lang==='th'?'กรุณาเลือกเลขที่นั่ง':'Select seat no.'));return}
  const row=normalizeRowForZone(mz,rowRaw);
  const seatNum=parseInt(num,10);
  if(!Number.isInteger(seatNum)||seatNum<1){toast('❌ '+(lang==='th'?'เลขที่นั่งไม่ถูกต้อง':'Invalid seat number'));return}
  const validRows=SZ_ROWS[sz]||ZONE_ROWS[mz]||[];
  if(!validRows.includes(row)){toast('❌ '+(lang==='th'?'แถวไม่ตรงกับโซนที่เลือก':'Row does not match selected zone'));return}
  const rowWin=getRowSeatWindow(sz,row);
  if(!rowWin){toast('❌ '+(lang==='th'?`แถว ${row} ไม่มีที่นั่งใน ${sz}`:`Row ${row} has no seats in ${sz}`));return}
  if(seatNum<rowWin.start||seatNum>rowWin.end){toast('❌ '+(lang==='th'?`เลขที่นั่งของ ${sz} แถว ${row} ต้องอยู่ระหว่าง ${rowWin.start}-${rowWin.end}`:`Seat number for ${sz} row ${row} must be ${rowWin.start}-${rowWin.end}`));return}
  const fandoms=[...document.querySelectorAll('#fandom-wrap input:checked')].map(c=>c.value);
  if(!fandoms.length){toast('❌ '+(lang==='th'?'กรุณาเลือกคู่/ด้อม':'Select pair/fandom'));return}
  const normalizedFandoms=normalizeFandoms(fandoms);
  const nickname=document.getElementById('nickname').value.trim()||'—';
  await syncData(true);
  let overwrite=false;
  if(isSeatTaken(getData(),{day,subZone:sz,row,seatNum})){
    setSeatCheckMessage('warn',lang==='th'?'⚠️ ที่นั่งนี้ถูกลงทะเบียนแล้วในวันเดียวกัน':'⚠️ This seat is already registered for this day');
    const ok=await openSeatOverwriteModal({
      day,mainZone:mz,subZone:sz,row,seatNum,price:pr,
      fandomNames:normalizedFandoms.map(fid=>fandomName(fid)),
      nickname
    });
    if(!ok){
      toast('❌ '+(lang==='th'?'ยกเลิกการลงทับข้อมูล':'Overwrite cancelled'));
      return;
    }
    overwrite=true;
  }
  const dayStr=day+' มิ.ย.';
  const entry={id:Date.now(),days:[day],dayStr,mainZone:mz,subZone:sz,price:pr,row,seatNum,fandoms:normalizedFandoms,nickname,overwrite,ts:new Date().toISOString()};
  const btn=document.getElementById('submit-btn');btn.disabled=true;btn.textContent='⏳...';
  // Save to Google Sheets
  let remoteStatus='none';
  let remoteMessage='';
  if(GAS_URL){
    try{
      const res=await fetch(GAS_URL,{
        method:'POST',
        mode:'cors',
        headers:{'Content-Type':'text/plain;charset=utf-8'},
        body:JSON.stringify(entry)
      });
      if(!res.ok) throw new Error(`Seat write failed: ${res.status}`);
      const json=await res.json();
      remoteStatus=String(json?.status||'').toLowerCase();
      remoteMessage=String(json?.message||'').trim();
    }catch(e){
      console.warn('GAS cors write error',e);
      // Some deployments reject CORS POST but still accept no-cors writes.
      try{
        await fetch(GAS_URL,{method:'POST',mode:'no-cors',body:JSON.stringify(entry)});
        await syncData(true);
        if(isSeatTaken(getData(),{day,subZone:sz,row,seatNum})){
          remoteStatus='ok';
          remoteMessage='Written via no-cors fallback';
        }
      }catch(e2){
        console.warn('GAS no-cors fallback error',e2);
      }
    }
  }

  if(remoteStatus==='skipped'){
    setSeatCheckMessage('warn',lang==='th'?'⚠️ ที่นั่งนี้ถูกลงทะเบียนแล้วในวันเดียวกัน':'⚠️ This seat is already registered for this day');
    toast('❌ '+(lang==='th'?'ที่นั่งนี้มีคนลงไว้แล้ว (วันเดียวกัน)':'Seat already taken for this day'));
    btn.disabled=false;btn.textContent=lang==='th'?'✦ บันทึก & ส่งข้อมูล':'✦ Save & Submit';
    return;
  }

  const remoteSaved=remoteStatus==='ok'||remoteStatus==='updated';

  // Save local only when remote did not persist
  if(!remoteSaved){
    const data=[...getData(),normalizeEntry(entry)];
    saveLocal(data);
    // Keep recent local state hot to avoid immediate remote overwrite path.
    lastSyncAt=Date.now();
  }else{
    await syncData(true);
  }
  if(remoteStatus==='ok'){
    toast(lang==='th'?'🌸 บันทึกสำเร็จ! (Google Sheets)':'🌸 Saved to Google Sheets');
  }else if(remoteStatus==='updated'){
    toast(lang==='th'?'🌸 ลงทับข้อมูลเดิมสำเร็จ (Google Sheets)':'🌸 Existing seat entry overwritten successfully (Google Sheets)');
  }else{
    const reason=remoteMessage?` (${remoteMessage})`:'';
    toast(lang==='th'
      ? `🌸 บันทึก Local แล้ว · Responses ยังไม่เข้า${reason}`
      : `🌸 Saved locally · Responses sheet not updated${reason}`);
  }
  // Reset
  document.querySelectorAll('.day-opt input,.fc input').forEach(c=>c.checked=false);
  ['nickname'].forEach(id=>document.getElementById(id).value='');
  document.getElementById('main-zone').value='';
  document.getElementById('sub-zone').innerHTML='<option value="" disabled selected>—</option>';
  document.getElementById('seat-price').innerHTML='<option value="" disabled selected>—</option>';
  document.getElementById('seat-row').innerHTML='<option value="" disabled selected>—</option>';
  document.getElementById('seat-num').innerHTML='<option value="" disabled selected>—</option>';
  setSeatCheckMessage('','');
  btn.disabled=false;btn.textContent=lang==='th'?'✦ บันทึก & ส่งข้อมูล':'✦ Save & Submit';
}

/* ══════════════════════════════════════
   CENSUS RENDER
══════════════════════════════════════ */
let curZone=null,curFilter='all';
let censusDayFilter='all';
let analysisDayFilter='all';
let analysisFandomFilter='all';
let registerTab='seat';

function setRegisterTab(tab){
  registerTab=tab;
  const isSeat=tab==='seat';
  document.getElementById('register-tab-seat')?.classList.toggle('on',isSeat);
  document.getElementById('register-tab-live')?.classList.toggle('on',!isSeat);
  document.getElementById('register-pane-seat')?.classList.toggle('active',isSeat);
  document.getElementById('register-pane-live')?.classList.toggle('active',!isSeat);
}

function getEntryDays(entry){
  const out=[];
  const add=(v)=>{const s=String(v||'').trim();if(s==='13'||s==='14')out.push(s)};
  if(Array.isArray(entry?.days)) entry.days.forEach(add);
  else if(entry?.days){
    const parts=String(entry.days).split(/[^0-9]+/).filter(Boolean);
    parts.forEach(add);
  }
  if(!out.length&&entry?.dayStr){
    const m=String(entry.dayStr).match(/13|14/g)||[];
    m.forEach(add);
  }
  return [...new Set(out)];
}

function getCensusFilteredData(){
  const data=getData();
  if(censusDayFilter==='all') return data;
  return data.filter(e=>getEntryDays(e).includes(censusDayFilter));
}

function buildCensusDayFilter(){
  const wrap=document.getElementById('census-day-filter');
  if(!wrap) return;
  wrap.innerHTML=`
    <span class="cdf-lbl">${lang==='th'?'แยกวัน:':'Day Filter:'}</span>
    <button class="cdf-chip ${censusDayFilter==='all'?'on':''}" onclick="setCensusDayFilter('all')">${lang==='th'?'ทั้งหมด':'All'}</button>
    <button class="cdf-chip ${censusDayFilter==='13'?'on':''}" onclick="setCensusDayFilter('13')">13 ${lang==='th'?'มิ.ย.':'Jun'}</button>
    <button class="cdf-chip ${censusDayFilter==='14'?'on':''}" onclick="setCensusDayFilter('14')">14 ${lang==='th'?'มิ.ย.':'Jun'}</button>
    <span class="cdf-note">${censusDayFilter==='all'
      ? (lang==='th'?'โหมดทั้งหมดใช้ดูภาพรวม · ถ้าจะดูคนนั่งใกล้กันให้เลือกวัน':'All mode is for overview · select a day to inspect nearby seats')
      : (lang==='th'?'กำลังดูข้อมูลรายวัน เหมาะสำหรับดูคนนั่งใกล้กัน':'Day view enabled for nearby-seat fandom analysis')}
    </span>
  `;
}

function setCensusDayFilter(day){
  censusDayFilter=day;
  buildCensusDayFilter();
  renderCensus();
}

function getAnalysisFilteredData(){
  let data=getData();
  if(analysisDayFilter!=='all') data=data.filter(e=>getEntryDays(e).includes(analysisDayFilter));
  if(analysisFandomFilter!=='all') data=data.filter(e=>normalizeFandoms(e.fandoms).includes(analysisFandomFilter));
  return data;
}

function getFilteredLiveData(){
  const data=getLiveData();
  if(analysisDayFilter==='all') return data;
  return data.filter(e=>getLiveDaySet(e?.day).has(analysisDayFilter));
}

function buildAnalysisFilter(){
  const wrap=document.getElementById('analysis-filter');
  if(!wrap) return;
  const chips=[{id:'all',label:lang==='th'?'ทุกด้อม':'All fandoms'},{id:'dd',label:'DD'}];
  PAIRS.forEach(p=>chips.push({id:p.id,label:fandomName(p.id)}));
  wrap.innerHTML=`
    <span class="cdf-lbl">${lang==='th'?'วัน:':'Day:'}</span>
    <button class="cdf-chip ${analysisDayFilter==='all'?'on':''}" onclick="setAnalysisDayFilter('all')">${lang==='th'?'ทั้งหมด':'All'}</button>
    <button class="cdf-chip ${analysisDayFilter==='13'?'on':''}" onclick="setAnalysisDayFilter('13')">13 ${lang==='th'?'มิ.ย.':'Jun'}</button>
    <button class="cdf-chip ${analysisDayFilter==='14'?'on':''}" onclick="setAnalysisDayFilter('14')">14 ${lang==='th'?'มิ.ย.':'Jun'}</button>
    <span class="cdf-lbl" style="margin-left:8px">${lang==='th'?'ด้อม:':'Fandom:'}</span>
    ${chips.map(c=>`<button class="cdf-chip ${analysisFandomFilter===c.id?'on':''}" onclick="setAnalysisFandomFilter('${c.id}')">${c.label}</button>`).join('')}
  `;
}

function setAnalysisDayFilter(day){
  analysisDayFilter=day;
  buildAnalysisFilter();
  renderAnalysis();
}

function setAnalysisFandomFilter(fid){
  analysisFandomFilter=fid;
  buildAnalysisFilter();
  renderAnalysis();
}

function resolveEntrySubZone(entry){
  const main=String(entry?.mainZone||'').toUpperCase();
  const explicit=String(entry?.subZone||'').toUpperCase();
  if(explicit) return explicit;
  if(!ZONES[main]) return main;
  const row=normalizeRowForZone(main,String(entry?.row||'').toUpperCase());
  const seatNum=Number(entry?.seatNum||0);
  const hit=ZONES[main].subs.find(sz=>{
    const win=getRowSeatWindow(sz,row);
    return !!(win&&Number.isInteger(seatNum)&&seatNum>=win.start&&seatNum<=win.end);
  });
  return hit||main;
}

function getSideBucket(subZone){
  const main=String(subZone||'')[0];
  const subs=ZONES[main]?.subs||[];
  const idx=subs.indexOf(subZone);
  if(idx<0) return 'unknown';
  const mid=Math.floor(subs.length/2);
  if(subs.length%2===1&&idx===mid) return 'center';
  return idx<subs.length/2?'left':'right';
}

function getDepthBucket(mainZone){
  return ['A','B','C'].includes(mainZone)?'front':'back';
}

async function renderAnalysis(){
  await syncData();
  await syncLiveData();
  buildAnalysisFilter();
  const data=getAnalysisFilteredData();
  const total=data.length;
  const zoneCnt={},subCnt={},fanCnt={},sideCnt={},depthCnt={};
  data.forEach(r=>{
    const mz=String(r.mainZone||'').toUpperCase();
    zoneCnt[mz]=(zoneCnt[mz]||0)+1;
    const sz=resolveEntrySubZone(r);
    subCnt[sz]=(subCnt[sz]||0)+1;
    const side=getSideBucket(sz);
    sideCnt[side]=(sideCnt[side]||0)+1;
    const depth=getDepthBucket(mz);
    depthCnt[depth]=(depthCnt[depth]||0)+1;
    normalizeFandoms(r.fandoms).forEach(f=>{fanCnt[f]=(fanCnt[f]||0)+1});
  });
  const topZone=Object.entries(zoneCnt).sort((a,b)=>b[1]-a[1])[0];
  const topFandom=Object.entries(fanCnt).sort((a,b)=>b[1]-a[1])[0];
  const leftCnt=sideCnt.left||0;
  const rightCnt=sideCnt.right||0;
  const frontCnt=depthCnt.front||0;
  const backCnt=depthCnt.back||0;
  const sideLead=leftCnt===rightCnt
    ? (lang==='th'?'ซ้าย-ขวาเท่ากัน':'Left/Right Tie')
    : (leftCnt>rightCnt
      ? (lang==='th'?'ฝั่งซ้ายมากกว่า':'Left side leads')
      : (lang==='th'?'ฝั่งขวามากกว่า':'Right side leads'));
  const depthLead=frontCnt===backCnt
    ? (lang==='th'?'หน้า-หลังเท่ากัน':'Front/Back Tie')
    : (frontCnt>backCnt
      ? (lang==='th'?'โซนหน้ามากกว่า':'Front zones lead')
      : (lang==='th'?'โซนหลังมากกว่า':'Back zones lead'));
  const seatKeys=new Set(data.map(e=>`${resolveEntrySubZone(e)}|${normalizeRowForZone(e.mainZone,e.row)}|${Number(e.seatNum||0)}|${getEntryDays(e).sort().join(',')}`));
  document.getElementById('analysis-kpis').innerHTML=`
    <div class="analysis-card"><div class="analysis-kpi-n">${total}</div><div class="analysis-kpi-l">${lang==='th'?'รายการหลังกรอง':'Filtered entries'}</div></div>
    <div class="analysis-card"><div class="analysis-kpi-n">${seatKeys.size}</div><div class="analysis-kpi-l">${lang==='th'?'ที่นั่งไม่ซ้ำ':'Unique seats'}</div></div>
    <div class="analysis-card"><div class="analysis-kpi-n">${topZone?('Zone '+topZone[0]):'—'}</div><div class="analysis-kpi-l">${lang==='th'?'โซนหลักนำ':'Leading main zone'}</div></div>
    <div class="analysis-card"><div class="analysis-kpi-n">${topFandom?fandomName(topFandom[0]):'—'}</div><div class="analysis-kpi-l">${lang==='th'?'ด้อมนำ':'Leading fandom'}</div></div>
    <div class="analysis-card"><div class="analysis-kpi-n" style="font-size:16px;line-height:1.3">${sideLead}</div><div class="analysis-kpi-l">${lang==='th'?'เปรียบเทียบซ้าย/ขวา':'Left vs Right'}</div></div>
    <div class="analysis-card"><div class="analysis-kpi-n" style="font-size:16px;line-height:1.3">${depthLead}</div><div class="analysis-kpi-l">${lang==='th'?'เปรียบเทียบหน้า/หลัง':'Front vs Back'}</div></div>
  `;

  const renderRows=(obj,getLabel,getColor,maxCount=10,showPct=false)=>{
    const entries=Object.entries(obj).sort((a,b)=>b[1]-a[1]).slice(0,maxCount);
    const max=Math.max(...entries.map(e=>e[1]),1);
    const sum=Math.max(entries.reduce((acc,[,v])=>acc+v,0),1);
    if(!entries.length) return `<div style="color:rgba(255,255,255,.35);font-size:12px;padding:8px 0">${lang==='th'?'ยังไม่มีข้อมูล':'No data'}</div>`;
    return entries.map(([k,c])=>{
      const pct=Math.round((c/sum)*100);
      const val=showPct?`${c} (${pct}%)`:`${c}`;
      return `<div class="ana-row"><div class="ana-lbl" style="color:${getColor(k)}">${getLabel(k)}</div><div class="bar-bg"><div class="bar-fg" style="width:${c/max*100}%;background:${getColor(k)};box-shadow:0 0 8px ${getColor(k)}"></div></div><div class="ana-val">${val}</div></div>`;
    }).join('');
  };

  document.getElementById('analysis-zone-bars').innerHTML=renderRows(zoneCnt,k=>'Zone '+k,k=>ZONES[k]?.mainColor||'var(--lav)',8);
  document.getElementById('analysis-fandom-bars').innerHTML=renderRows(fanCnt,k=>fandomName(k),k=>fandomColor(k),12);
  document.getElementById('analysis-side-bars').innerHTML=renderRows(
    sideCnt,
    k=>k==='left'?(lang==='th'?'ซ้าย':'Left'):k==='right'?(lang==='th'?'ขวา':'Right'):k==='center'?(lang==='th'?'กลาง':'Center'):(lang==='th'?'ไม่ทราบ':'Unknown'),
    k=>k==='left'?'#60a5fa':k==='right'?'#f472b6':k==='center'?'#c084fc':'#94a3b8',
    4,
    true
  );
  document.getElementById('analysis-depth-bars').innerHTML=renderRows(
    depthCnt,
    k=>k==='front'?(lang==='th'?'หน้า':'Front'):(lang==='th'?'หลัง':'Back'),
    k=>k==='front'?'#f59e0b':'#22d3ee',
    2,
    true
  );
  document.getElementById('analysis-subzone-bars').innerHTML=renderRows(subCnt,k=>k,k=>ZONES[k[0]]?.colors?.[k]||ZONES[k[0]]?.mainColor||'var(--lav)',20);

  const live=getFilteredLiveData();
  const liveKpis=document.getElementById('analysis-live-kpis');
  const liveCountries=document.getElementById('analysis-live-country-bars');
  const liveFandoms=document.getElementById('analysis-live-fandom-bars');
  if(liveKpis&&liveCountries&&liveFandoms){
    if(!live.length){
      liveKpis.innerHTML='';
      liveCountries.innerHTML=`<div style="color:rgba(255,255,255,.35);font-size:12px;padding:8px 0">${lang==='th'?'ยังไม่มีข้อมูล Live Streaming':'No live streaming data'}</div>`;
      liveFandoms.innerHTML=`<div style="color:rgba(255,255,255,.35);font-size:12px;padding:8px 0">${lang==='th'?'ยังไม่มีข้อมูลด้อมใน Live':'No live fandom data'}</div>`;
    }else{
      const liveCountryCnt={}, liveDayCnt={13:0,14:0}, liveFandomCnt={};
      live.forEach(e=>{
        const country=String(e.country||'Unknown');
        liveCountryCnt[country]=(liveCountryCnt[country]||0)+1;
        normalizeLiveFandoms(e?.fandoms||e?.members||[]).forEach(f=>{liveFandomCnt[f]=(liveFandomCnt[f]||0)+1;});
        const day=String(e.day||'both');
        if(day==='13'||day==='both') liveDayCnt[13]+=1;
        if(day==='14'||day==='both') liveDayCnt[14]+=1;
      });
      const topCountry=Object.entries(liveCountryCnt).sort((a,b)=>b[1]-a[1])[0];
      liveKpis.innerHTML=`
        <div class="analysis-card"><div class="analysis-kpi-n">${live.length}</div><div class="analysis-kpi-l">${lang==='th'?'บัญชี Live ที่ตรงฟิลเตอร์วัน':'Live accounts matching day filter'}</div></div>
        <div class="analysis-card"><div class="analysis-kpi-n">${topCountry?topCountry[0]:'—'}</div><div class="analysis-kpi-l">${lang==='th'?'ประเทศนำ':'Top country'}</div></div>
        <div class="analysis-card"><div class="analysis-kpi-n">${liveDayCnt[13]}</div><div class="analysis-kpi-l">13 Jun</div></div>
        <div class="analysis-card"><div class="analysis-kpi-n">${liveDayCnt[14]}</div><div class="analysis-kpi-l">14 Jun</div></div>
      `;
      liveCountries.innerHTML=renderRows(liveCountryCnt,k=>k,()=>'#38bdf8',10,true);
      liveFandoms.innerHTML=renderRows(liveFandomCnt,k=>liveFandomName(k),k=>liveFandomColor(k),12,true);
    }
  }
}

async function renderCensus(){
  await syncData();
  buildCensusDayFilter();
  const data=getCensusFilteredData();
  document.getElementById('total-cnt').textContent=data.length;
  const zoneCnt={},subCnt={},fanCnt={},dayCnt={'13':0,'14':0};
  data.forEach(r=>{
    zoneCnt[r.mainZone]=(zoneCnt[r.mainZone]||0)+1;
    const sz=r.subZone||r.mainZone;subCnt[sz]=(subCnt[sz]||0)+1;
    normalizeFandoms(r.fandoms).forEach(f=>{fanCnt[f]=(fanCnt[f]||0)+1});
    getEntryDays(r).forEach(d=>{if(d in dayCnt)dayCnt[d]++});
  });
  const total=data.length||1;
  const topZ=Object.entries(zoneCnt).sort((a,b)=>b[1]-a[1])[0];
  const topF=Object.entries(fanCnt).sort((a,b)=>b[1]-a[1])[0];
  const ddCnt=fanCnt['dd']||0;
  document.getElementById('census-stats').innerHTML=`
    <div class="stat-card" style="--ac:var(--lav)"><div class="stat-n">${data.length}</div><div class="stat-l">${lang==='th'?'ลงทะเบียนแล้ว':'Registered'}</div></div>
    <div class="stat-card" style="--ac:${topZ?ZONES[topZ[0]]?.mainColor:'var(--pk)'}"><div class="stat-n">${topZ?'Zone '+topZ[0]:'—'}</div><div class="stat-l">${lang==='th'?'โซนยอดนิยม':'Top Zone'}</div><div class="stat-s">${topZ?.[1]||0}${lang==='th'?'คน':' fans'}</div></div>
    <div class="stat-card" style="--ac:var(--rose)"><div class="stat-n">${topF?fandomName(topF[0]):'—'}</div><div class="stat-l">${lang==='th'?'ด้อมมากสุด':'Top Fandom'}</div><div class="stat-s">${topF?.[1]||0}${lang==='th'?'คน':' fans'}</div></div>
    <div class="stat-card" style="--ac:var(--gold)"><div class="stat-n">${ddCnt}</div><div class="stat-l">💛 DD${lang==='th'?'(ได้หมด)':'(All-rounder)'}</div><div class="stat-s">${Math.round(ddCnt/total*100)}%</div></div>
  `;
  // Charts
  const d13=dayCnt['13'],d14=dayCnt['14'];
  document.getElementById('census-charts').innerHTML=`
    <div style="background:var(--card);border:1px solid var(--bdr);border-radius:16px;padding:18px;box-shadow:0 4px 15px rgba(0,0,0,0.1)">
      <div style="font-size:10px;font-weight:800;color:var(--lav);letter-spacing:.1em;text-transform:uppercase;margin-bottom:12px">${lang==='th'?'วันที่ไป':'Attendance'}</div>
      <div class="day-split-wrap">
        <div class="dsb" style="flex:${d13||.01};background:linear-gradient(135deg,#7c3aed,#a855f7)">${d13>0?d13:''}</div>
        <div class="dsb" style="flex:${d14||.01};background:linear-gradient(135deg,#ec4899,#f97316)">${d14>0?d14:''}</div>
      </div>
      <div style="font-size:11px;color:rgba(255,255,255,.5);display:flex;gap:12px;flex-wrap:wrap;margin-top:8px;font-weight:600">
        <span><span style="color:#a855f7">●</span> 13 มิ.ย. (${d13})</span><span><span style="color:#f97316">●</span> 14 มิ.ย. (${d14})</span>
      </div>
    </div>
    <div style="background:var(--card);border:1px solid var(--bdr);border-radius:16px;padding:18px;box-shadow:0 4px 15px rgba(0,0,0,0.1)">
      <div style="font-size:10px;font-weight:800;color:var(--lav);letter-spacing:.1em;text-transform:uppercase;margin-bottom:12px">${lang==='th'?'สัดส่วนโซน':'Zone Split'}</div>
      ${Object.entries(ZONES).map(([k,v])=>{const c=zoneCnt[k]||0;return`<div style="display:grid;grid-template-columns:46px 1fr 28px;align-items:center;gap:8px;margin-bottom:6px"><span style="font-size:10px;color:${v.mainColor};font-weight:800">Zone ${k}</span><div class="bar-bg"><div class="bar-fg" style="background:${v.mainColor};width:${c/total*100}%;box-shadow:0 0 10px ${v.mainColor}"></div></div><span style="font-size:10px;font-weight:800;color:${v.mainColor};text-align:right">${c}</span></div>`;}).join('')}
    </div>
  `;
  // SVG zone count labels
  Object.keys(ZONES).forEach(m=>{
    ZONES[m].subs.forEach(sz=>{
      const el=document.getElementById('sc-'+sz);
      if(el){
        const reg=subCnt[sz]||0;
        const cap=SUBZONE_CAPACITY[sz]||0;
        el.textContent=cap?`${reg}/${cap}`:`${reg}`;
        el.removeAttribute('title');
      }
    });
  });
  // D/E strip counts
  [...ZONES.D.subs,...ZONES.E.subs].forEach(sz=>{
    const el=document.getElementById('dbc-'+sz);
    if(el){
      const reg=subCnt[sz]||0;
      const cap=SUBZONE_CAPACITY[sz]||0;
      el.textContent=cap?`${reg}/${cap}`:`${reg}`;
      el.removeAttribute('title');
    }
  });
  // Fandom bars
  const sortedF=Object.entries(fanCnt).sort((a,b)=>b[1]-a[1]);
  const maxF=Math.max(...sortedF.map(f=>f[1]),1);
  document.getElementById('census-fandoms').innerHTML=sortedF.slice(0,14).map(([id,c])=>{
    const nm=fandomName(id);
    const col=fandomColor(id);
    return`<div class="fan-bar-row"><div class="fan-bar-name">${nm}</div><div class="bar-bg"><div class="bar-fg" style="background:${id==='dd'?'linear-gradient(90deg,var(--gold),#f97316)':'linear-gradient(90deg,'+col+','+col+'88)'};width:${c/maxF*100}%;box-shadow:0 0 8px ${col}"></div></div><div class="fan-cnt">${c}</div></div>`;
  }).join('')||`<div style="color:rgba(255,255,255,.28);font-size:13px;text-align:center;padding:20px 0">${lang==='th'?'ยังไม่มีข้อมูล · ไปลงทะเบียนกันก่อนเลย 🌸':'No data yet · Go register! 🌸'}</div>`;
  
  if(curZone) openZone(curZone);
}

/* ══ ZONE DETAIL ══ */
function entryBelongsToZone(entry,zoneId){
  const main=zoneId[0];
  if(String(entry?.mainZone||'').toUpperCase()!==main) return false;
  const sub=String(entry?.subZone||'').toUpperCase();
  if(sub) return sub===zoneId;
  const row=normalizeRowForZone(main,String(entry?.row||'').toUpperCase());
  const seatNum=Number(entry?.seatNum||0);
  const win=getRowSeatWindow(zoneId,row);
  return !!(win&&Number.isInteger(seatNum)&&seatNum>=win.start&&seatNum<=win.end);
}

function openZone(zoneId){
  curZone=zoneId;curFilter='all';
  const m=zoneId[0];
  const col=ZONES[m].colors[zoneId]||ZONES[m].mainColor;
  const pr=ZONES[m].prices[zoneId]||'';
  const cap=SUBZONE_CAPACITY[zoneId]||0;
  document.querySelectorAll('.zblk').forEach(g=>{g.classList.toggle('sel',g.id==='zb-'+zoneId);g.classList.toggle('dim',g.id!=='zb-'+zoneId&&g.id.startsWith('zb-'))});
  document.querySelectorAll('.de-btn').forEach(b=>b.classList.toggle('sel',b.id==='deb-'+zoneId));
  const data=getCensusFilteredData();
  const entries=data.filter(e=>entryBelongsToZone(e,zoneId));
  const uniqueSeats=new Set(entries.map(e=>`${normalizeRowForZone(m,e.row)}-${Number(e.seatNum||0)}`)).size;
  const det=document.getElementById('zone-detail');
  det.style.borderColor=col+'88';
  det.style.boxShadow=`0 20px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2), 0 0 20px ${col}22`;
  det.classList.add('open');
  det.scrollIntoView({behavior:'smooth',block:'center'});
  document.getElementById('zd-title').textContent=`Zone ${zoneId}`;
  document.getElementById('zd-title').style.color=col;
  document.getElementById('zd-meta').textContent=
    censusDayFilter==='all'
      ? (lang==='th'
          ? `${uniqueSeats}/${cap||'—'} ที่นั่ง · ${entries.length} รายการลงทะเบียน · ${pr}฿`
          : `${uniqueSeats}/${cap||'—'} seats · ${entries.length} registrations · ${pr}฿`)
      : `${entries.length}/${cap||'—'} ${lang==='th'?'คนลงทะเบียน':'registered fans'} · ${pr}฿`;
  const fanIds=[...new Set(entries.flatMap(e=>normalizeFandoms(e.fandoms)))];
  document.getElementById('zd-filter').innerHTML=`
    <span class="filter-label">${lang==='th'?'กรองด้อม:':'Filter:'}</span>
    <button class="fchip on" onclick="filterZone('all',this)">${lang==='th'?'ทั้งหมด':'All'}</button>
    <button class="fchip" onclick="filterZone('dd',this)">💛 DD</button>
    ${fanIds.filter(f=>f!=='dd').map(f=>{const p=PAIR_BY_ID[f];return`<button class="fchip" onclick="filterZone('${f}',this)" style="border-color:${(p?.color||'var(--lav)')}44">${fandomName(f)}</button>`;}).join('')}
  `;
  buildSeatGrid(zoneId,entries,'all');
}
function closeZone(){
  curZone=null;
  document.getElementById('zone-detail').classList.remove('open');
  document.querySelectorAll('.zblk').forEach(g=>{g.classList.remove('sel','dim')});
  document.querySelectorAll('.de-btn').forEach(b=>b.classList.remove('sel'));
}
function filterZone(fid,btn){
  curFilter=fid;
  document.querySelectorAll('#zd-filter .fchip').forEach(b=>b.classList.remove('on','dd-on'));
  btn.classList.add(fid==='dd'?'dd-on':'on');
  const data=getCensusFilteredData();const m=curZone[0];
  const entries=data.filter(e=>entryBelongsToZone(e,curZone));
  buildSeatGrid(curZone,entries,fid);
}
function buildSeatGrid(zoneId,entries,filter){
  const m=zoneId[0];
  const range=SZ_RANGE[zoneId]||{r:[1,20]};
  const [sMin,sMax]=range.r;
  const rows=SZ_ROWS[zoneId]||ZONE_ROWS[m]||[];
  const sMap={};
  entries.forEach(e=>{
    const rr=normalizeRowForZone(m,e.row);
    const k=`${rr}-${e.seatNum}`;
    if(!sMap[k])sMap[k]=[];
    sMap[k].push(e);
  });
  const grid=document.getElementById('seat-grid');grid.innerHTML='';
  rows.forEach((rowName,rowIdx)=>{
    const line=document.createElement('div');line.className='row-line';
    const lbl=document.createElement('div');lbl.className='row-lbl';lbl.textContent=rowName;line.appendChild(lbl);
    const win=getRowSeatWindow(zoneId,rowName);
    for(let s=sMin;s<=sMax;s++){
      const k=`${rowName}-${s}`;const es=sMap[k]||[];
      const btn=document.createElement('div');btn.className='seat';btn.textContent=s<10?'0'+s:s;
      if(!win||s<win.start||s>win.end){
        btn.style.visibility='hidden';
        btn.style.pointerEvents='none';
        btn.textContent='';
        line.appendChild(btn);
        continue;
      }
      let match=es;if(filter!=='all')match=es.filter(e=>normalizeFandoms(e.fandoms).includes(filter));
      if(match.length>0){
        btn.classList.add('taken');
        const by13=match.filter(e=>getEntryDays(e).includes('13'));
        const by14=match.filter(e=>getEntryDays(e).includes('14'));
        const sameDayCollision=by13.length>1||by14.length>1;
        const crossDayOnly=!sameDayCollision&&by13.length>0&&by14.length>0;
        const ff=normalizeFandoms(match[0].fandoms||[]);const isDD=ff.includes('dd')&&ff.length===1;
        if(sameDayCollision){
          btn.style.background='rgba(251,191,36,.28)';
          btn.style.borderColor='#fbbf24';
          btn.style.setProperty('--glow-color','#fbbf24');
        }else if(crossDayOnly){
          btn.style.background='rgba(59,130,246,.22)';
          btn.style.borderColor='#60a5fa';
          btn.style.setProperty('--glow-color','#60a5fa');
        }else if(isDD){btn.classList.add('is-dd')}
        else{
          const mainF=ff.filter(f=>f!=='dd')[0];
          const col=fandomColor(mainF).replace('var(--lav)','#a78bfa');
          btn.style.background=col+'44';
          btn.style.borderColor=col;
          // Set CSS variable for glow effect
          btn.style.setProperty('--glow-color', col);
        }
        const tip=document.createElement('div');tip.className='seat-tip';
        const showDown=rowIdx<Math.ceil(rows.length*0.35);
        if(showDown) tip.classList.add('tip-down');
        if(sameDayCollision){
          tip.classList.add('split-day');
          const renderDayList=(arr)=>{
            if(!arr.length) return `<div class="seat-tip-day-empty">${lang==='th'?'ไม่มีข้อมูล':'No data'}</div>`;
            const lines=arr.slice(0,3).map(e=>{
              const ftxt=normalizeFandoms(e.fandoms||[]).map(f=>fandomName(f)).join(', ');
              return `<div>${e.nickname||'—'} · ${ftxt}</div>`;
            }).join('');
            const more=arr.length>3?`<div>+${arr.length-3} ${lang==='th'?'รายการ':'more'}</div>`:'';
            return `${lines}${more}`;
          };
          tip.innerHTML=`
            <strong>${lang==='th'?'ที่นั่งซ้ำในวันเดียวกัน':'Same seat conflict in the same day'} (${match.length})</strong>
            <div class="seat-tip-days">
              <div class="seat-tip-day">
                <div class="seat-tip-day-hd">13 ${lang==='th'?'มิ.ย.':'Jun'} (${by13.length})</div>
                <div class="seat-tip-day-list">${renderDayList(by13)}</div>
              </div>
              <div class="seat-tip-day">
                <div class="seat-tip-day-hd">14 ${lang==='th'?'มิ.ย.':'Jun'} (${by14.length})</div>
                <div class="seat-tip-day-list">${renderDayList(by14)}</div>
              </div>
            </div>`;
        }else if(crossDayOnly){
          tip.classList.add('split-day');
          const renderDayList=(arr)=>{
            if(!arr.length) return `<div class="seat-tip-day-empty">${lang==='th'?'ไม่มีข้อมูล':'No data'}</div>`;
            const lines=arr.slice(0,3).map(e=>{
              const ftxt=normalizeFandoms(e.fandoms||[]).map(f=>fandomName(f)).join(', ');
              return `<div>${e.nickname||'—'} · ${ftxt}</div>`;
            }).join('');
            const more=arr.length>3?`<div>+${arr.length-3} ${lang==='th'?'รายการ':'more'}</div>`:'';
            return `${lines}${more}`;
          };
          tip.innerHTML=`
            <strong>${lang==='th'?'ที่นั่งนี้มีผู้ลงทะเบียนคนละวัน':'Seat used on different days'}</strong>
            <div class="seat-tip-days">
              <div class="seat-tip-day">
                <div class="seat-tip-day-hd">13 ${lang==='th'?'มิ.ย.':'Jun'} (${by13.length})</div>
                <div class="seat-tip-day-list">${renderDayList(by13)}</div>
              </div>
              <div class="seat-tip-day">
                <div class="seat-tip-day-hd">14 ${lang==='th'?'มิ.ย.':'Jun'} (${by14.length})</div>
                <div class="seat-tip-day-list">${renderDayList(by14)}</div>
              </div>
            </div>`;
        }else{
          const fn=ff.map(f=>fandomName(f)).join(', ');
          const singleDays=[...new Set(getEntryDays(match[0]))].sort().map(d=>`${d} ${lang==='th'?'มิ.ย.':'Jun'}`).join(', ');
          tip.innerHTML=`<strong>${match[0].nickname||'—'}</strong><br>${fn}<br><span style="color:rgba(255,255,255,.4);font-size:9px">${singleDays||''} · ${match[0].price||''}฿</span>`;
        }
        btn.appendChild(tip);
      } else if(es.length>0)btn.classList.add('dimmed');
      line.appendChild(btn);
    }
    grid.appendChild(line);
  });
  // Fan summary
  const fanCnt={};
  (filter==='all'?entries:entries.filter(e=>normalizeFandoms(e.fandoms).includes(filter))).forEach(e=>normalizeFandoms(e.fandoms).forEach(f=>{fanCnt[f]=(fanCnt[f]||0)+1}));
  document.getElementById('fan-sum').innerHTML=`<span style="font-size:11px;color:rgba(255,255,255,.5);margin-right:8px;font-weight:600">${lang==='th'?'ด้อมในโซนนี้:':'Fandoms here:'}</span>`+
    Object.entries(fanCnt).sort((a,b)=>b[1]-a[1]).slice(0,12).map(([id,c])=>{
      const col=fandomColor(id);
      return`<div class="fan-chip" style="border-color:${col}44"><div class="fan-dot" style="background:${col};box-shadow:0 0 5px ${col}"></div><span style="color:rgba(255,255,255,0.8)">${fandomName(id)}</span><strong style="color:${col}">${c}</strong></div>`;
    }).join('');
}

/* ══ INIT ══ */
buildHomePage();
buildFandomChips();
buildDEStrip();
buildLiveCountryOptions();
buildLiveFandomChips();
renderLiveStreamingSummary();
syncData(true);
syncLiveData(true).then(()=>renderLiveStreamingSummary());

// Trigger initial fetch if GAS_URL is set
if(GAS_URL) renderCensus();
