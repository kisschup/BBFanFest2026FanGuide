/* ══════════════════════════════════════
   CONFIG — แก้ตรงนี้เพียงจุดเดียว
══════════════════════════════════════ */
const GAS_URL = 'https://script.google.com/macros/s/AKfycbxLohEFkh2R4tbKHjm0_QpUBOOAP2kmITDYd-27cfTITMTYemgeyZboMd_P63EXccgmtA/exec';
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

function shareFandomHashtags(data){
  const ids=resolveShareFandomIds(data);
  const tags=[];
  ids.forEach(fid=>{
    if(fid==='dd'){
      tags.push('#DD');
      return;
    }
    const pair=PAIR_BY_ID[fid];
    if(!pair) return;
    const pairTags=(PAIR_HASHTAGS[pair.tag]||'').split(' ').filter(Boolean);
    if(pairTags.length){
      tags.push(...pairTags);
      return;
    }
    tags.push(`#${pair.tag.replace(/\s+/g,'')}`);
  });
  tags.push('#BBFanFest2026');
  return [...new Set(tags)].join(' ');
}

function getShareDayNoTime(data){
  const byDay=formatShowDateTime(data?.day,{locale:lang,includeYear:true,includeTime:false});
  if(byDay!=='-') return byDay;
  return String(data?.dayStr||'-')
    .replace(/\sเวลา\s.*$/,'')
    .replace(/\sat\s.*$/,'');
}

function buildShareSeatLine(data,{zoneOnly=false}={}){
  const dayLabel=getShareDayNoTime(data);
  if(zoneOnly){
    return lang==='th'
      ? `ไปวันที่ ${dayLabel} | โซน ${data?.subZone||'-'}`
      : `Attending ${dayLabel} | Zone ${data?.subZone||'-'}`;
  }
  return lang==='th'
    ? `ไปวันที่ ${dayLabel} | โซน ${data?.subZone||'-'} แถว ${data?.row||'-'} ที่นั่ง ${data?.seatNum||'-'}`
    : `Attending ${dayLabel} | Zone ${data?.subZone||'-'} Row ${data?.row||'-'} Seat ${data?.seatNum||'-'}`;
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
if(GAS_URL){
  document.getElementById('setup-banner').style.display='none';
  const mpBanner=document.getElementById('setup-banner-mp');
  if(mpBanner) mpBanner.style.display='none';
}

/* ══ LANG ══ */
let lang='th';
function toggleLang(){
  lang=lang==='th'?'en':'th';
  document.getElementById('lang-btn').textContent=lang==='th'?'🇬🇧 ENG':'🇹🇭 ไทย';
  document.querySelectorAll('[data-th]').forEach(el=>{
    const v=el.dataset[lang]||el.dataset.th;
    if(['OPTION','SPAN','STRONG','SMALL','A','P','BUTTON','LABEL'].includes(el.tagName)||!el.children.length)
      el.textContent=v;
  });
  buildHomePage();buildFandomChips();buildDEStrip();buildCensusDayFilter();buildAnalysisFilter();buildLiveCountryOptions();buildLiveFandomChips();renderLiveStreamingSummary();setRegisterTab(registerTab);checkSeatDuplicateRealtime();
  syncLiveData().then(()=>{
    renderLiveStreamingSummary();
    if(document.getElementById('page-analysis')?.classList.contains('active')) renderAnalysis();
  });
  if(document.getElementById('page-census')?.classList.contains('active')) renderCensus();
  if(document.getElementById('page-analysis')?.classList.contains('active')) renderAnalysis();
  if(document.getElementById('page-marketplace')?.classList.contains('active')) renderMarketplaceListings();
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
  if(id==='marketplace'){
    syncMarketplaceData().then(()=>{
      buildMarketplaceSeatMap();
      renderMarketplaceListings();
    });
  }
}

/* ══ TOAST ══ */
function toast(msg,dur=3200){const el=document.getElementById('toast');el.textContent=msg;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),dur)}

function formatShowDateTime(day,{locale=lang,includeYear=true,includeTime=true}={}){
  const d=String(day||'').trim();
  if(d!=='13'&&d!=='14') return '-';
  if(locale==='th'){
    let out=`${d} มิถุนายน${includeYear?' 2569':''}`;
    if(includeTime) out+=' เวลา 17:00 น.';
    return out;
  }
  let out=`June ${d}${includeYear?', 2026':''}`;
  if(includeTime) out+=' at 5:00 PM';
  return out;
}

function openSeatOverwriteModal(payload){
  const modal=document.getElementById('seat-overwrite-modal');
  if(!modal) return Promise.resolve(false);

  const set=(id,v)=>{const el=document.getElementById(id);if(el) el.textContent=v||'-';};
  const dayLabel=formatShowDateTime(payload?.day,{locale:lang,includeYear:true,includeTime:true});
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
   SHARE CARD (CANVAS API)
══════════════════════════════════════ */
function fitLineWithEllipsis(ctx,text,maxWidth){
  let out=String(text||'');
  if(ctx.measureText(out).width<=maxWidth) return out;
  while(out&&ctx.measureText(out+'…').width>maxWidth) out=out.slice(0,-1);
  return (out||'').trimEnd()+'…';
}

function wrapTextByWidth(ctx,text,maxWidth){
  const chars=[...String(text||'')];
  const lines=[];
  let line='';
  chars.forEach(ch=>{
    const test=line+ch;
    if(!line||ctx.measureText(test).width<=maxWidth){
      line=test;
      return;
    }
    lines.push(line.trimEnd());
    line=ch;
  });
  if(line) lines.push(line.trimEnd());
  return lines.filter(Boolean);
}

function drawCenteredMultiline(ctx,text,{x,startY,lineHeight,maxWidth,maxLines=2}){
  const allLines=wrapTextByWidth(ctx,text,maxWidth);
  const truncated=allLines.length>maxLines;
  const lines=allLines.slice(0,maxLines);
  if(truncated&&lines.length){
    lines[lines.length-1]=fitLineWithEllipsis(ctx,lines[lines.length-1],maxWidth);
  }
  lines.forEach((line,idx)=>ctx.fillText(line,x,startY+idx*lineHeight));
  const used=Math.max(lines.length,1);
  return {lines:used,lastY:startY+(used-1)*lineHeight,truncated};
}

const SHARE_DECOR_IMAGE_CANDIDATES=[
  // Put your free Canva export in assets with one of these names.
  'assets/canva-night-flower.png',
  'assets/canva-night-flower.webp',
  'assets/canva-bloom-overlay.png',
];
let shareDecorImageCache=null;
let shareDecorImageResolved=false;

function loadImageSafe(src){
  return new Promise(resolve=>{
    const img=new Image();
    img.onload=()=>resolve(img);
    img.onerror=()=>resolve(null);
    img.src=src;
  });
}

async function getShareDecorImage(){
  if(shareDecorImageResolved) return shareDecorImageCache;
  shareDecorImageResolved=true;
  for(const src of SHARE_DECOR_IMAGE_CANDIDATES){
    const img=await loadImageSafe(src);
    if(img){
      console.log('✅ Image loaded:', src, 'Size:', img.width, 'x', img.height);
      shareDecorImageCache=img;
      break;
    } else {
      console.warn('❌ Failed to load:', src);
    }
  }
  if(!shareDecorImageCache) console.warn('⚠️ No decorative image found in assets');
  return shareDecorImageCache;
}

function drawImageCover(ctx,img,dx,dy,dw,dh){
  const srcW=img.width||1;
  const srcH=img.height||1;
  const srcRatio=srcW/srcH;
  const dstRatio=dw/dh;
  let sx=0,sy=0,sw=srcW,sh=srcH;
  if(srcRatio>dstRatio){
    sw=srcH*dstRatio;
    sx=(srcW-sw)/2;
  }else{
    sh=srcW/dstRatio;
    sy=(srcH-sh)/2;
  }
  ctx.drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh);
}

function hexToRgb(hex){
  const raw=String(hex||'').trim().replace('#','');
  if(!/^[0-9a-fA-F]{6}$/.test(raw)) return {r:168,g:139,b:250};
  return {
    r:parseInt(raw.slice(0,2),16),
    g:parseInt(raw.slice(2,4),16),
    b:parseInt(raw.slice(4,6),16),
  };
}

function rgbaFromHex(hex,a){
  const c=hexToRgb(hex);
  return `rgba(${c.r},${c.g},${c.b},${a})`;
}

function makeSeededRandom(seedText){
  let h=2166136261;
  const src=String(seedText||'BBFanFest2026');
  for(let i=0;i<src.length;i++){
    h^=src.charCodeAt(i);
    h=Math.imul(h,16777619);
  }
  let state=(h>>>0)||1;
  return ()=>{
    state=(Math.imul(state,1664525)+1013904223)>>>0;
    return state/4294967296;
  };
}

function resolveShareFandomIds(data){
  if(Array.isArray(data?.fandomIds)&&data.fandomIds.length){
    return normalizeFandoms(data.fandomIds);
  }
  const names=Array.isArray(data?.fandomNames)?data.fandomNames:[];
  return normalizeFandoms(names.map(name=>{
    const n=String(name||'').trim().toLowerCase();
    const hit=PAIRS.find(p=>p.tag.toLowerCase()===n||p.th.toLowerCase()===n);
    return hit?hit.id:name;
  }));
}

function getShareToneColors(data){
  const ids=resolveShareFandomIds(data).filter(id=>id!=='dd');
  const sub=String(data?.subZone||'').toUpperCase();
  const main=sub.slice(0,1);
  const zoneAccent=(ZONES[main]?.colors?.[sub]||ZONES[main]?.mainColor||'#38bdf8');
  if(!ids.length) return [zoneAccent,'#a78bfa'];
  const primary=PAIR_BY_ID[ids[0]]?.color||'#a78bfa';
  const secondary=PAIR_BY_ID[ids[1]]?.color||zoneAccent;
  return [primary,secondary];
}

function drawShareToneOverlay(ctx,W,H,data){
  const [c1,c2]=getShareToneColors(data);
  const seedKey=[data?.dayStr,data?.subZone,data?.row,data?.seatNum,(data?.fandomIds||[]).join(','),(data?.fandomNames||[]).join(',')].join('|');
  const rand=makeSeededRandom(seedKey);
  ctx.save();

  const tint=ctx.createLinearGradient(0,0,W,H);
  tint.addColorStop(0,rgbaFromHex(c1,0.30));
  tint.addColorStop(0.52,rgbaFromHex(c2,0.22));
  tint.addColorStop(1,'rgba(10,14,30,0.16)');
  ctx.fillStyle=tint;
  ctx.fillRect(0,0,W,H);

  ctx.globalCompositeOperation='screen';
  const glow1=ctx.createRadialGradient(W*(0.22+rand()*0.16),H*(0.2+rand()*0.14),30,W*(0.22+rand()*0.16),H*(0.2+rand()*0.14),420);
  glow1.addColorStop(0,rgbaFromHex(c1,0.36));
  glow1.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=glow1;
  ctx.fillRect(0,0,W,H);

  const glow2=ctx.createRadialGradient(W*(0.62+rand()*0.2),H*(0.62+rand()*0.16),40,W*(0.62+rand()*0.2),H*(0.62+rand()*0.16),440);
  glow2.addColorStop(0,rgbaFromHex(c2,0.30));
  glow2.addColorStop(1,'rgba(0,0,0,0)');
  ctx.fillStyle=glow2;
  ctx.fillRect(0,0,W,H);

  // Seeded diagonal light ribbons to make variations visible at a glance.
  for(let i=0;i<3;i++){
    const left=rand()*W*0.55;
    const top=rand()*H*0.7;
    const width=280+rand()*360;
    const height=90+rand()*170;
    const col=i%2===0?c1:c2;
    const g=ctx.createLinearGradient(left,top,left+width,top+height);
    g.addColorStop(0,rgbaFromHex(col,0.00));
    g.addColorStop(0.5,rgbaFromHex(col,0.18));
    g.addColorStop(1,rgbaFromHex(col,0.00));
    ctx.fillStyle=g;
    ctx.beginPath();
    ctx.moveTo(left,top);
    ctx.lineTo(left+width,top+height*0.12);
    ctx.lineTo(left+width*0.9,top+height);
    ctx.lineTo(left-width*0.12,top+height*0.88);
    ctx.closePath();
    ctx.fill();
  }

  ctx.globalCompositeOperation='source-over';

  // Deterministic bokeh/petal dots so each card has unique texture.
  for(let i=0;i<64;i++){
    const x=rand()*W;
    const y=rand()*H;
    const r=6+rand()*22;
    const useFirst=i%2===0;
    const a=0.055+rand()*0.07;
    ctx.fillStyle=rgbaFromHex(useFirst?c1:c2,a);
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2);
    ctx.fill();
  }

  // Fine grain to break repetition while keeping text legible.
  for(let i=0;i<180;i++){
    const x=rand()*W;
    const y=rand()*H;
    const w=1+Math.floor(rand()*2);
    const h=1+Math.floor(rand()*2);
    const useFirst=rand()>0.5;
    const a=0.03+rand()*0.03;
    ctx.fillStyle=rgbaFromHex(useFirst?c1:c2,a);
    ctx.fillRect(x,y,w,h);
  }
  ctx.restore();
}

function drawMidnightBloomDecor(ctx,W,H,decorImage){
  // If user provides a custom background, do not add generated floral/texture layers.
  if(decorImage){
    ctx.save();
    drawImageCover(ctx,decorImage,26,26,W-52,H-52);
    ctx.restore();
    return;
  }

  const topGlow=ctx.createRadialGradient(W*0.5,H*0.08,30,W*0.5,H*0.08,340);
  topGlow.addColorStop(0,'rgba(95, 223, 255, 0.32)');
  topGlow.addColorStop(1,'rgba(95, 223, 255, 0)');
  ctx.fillStyle=topGlow;
  ctx.fillRect(0,0,W,H);

  const moonGlow=ctx.createRadialGradient(W*0.5,H*0.2,25,W*0.5,H*0.2,210);
  moonGlow.addColorStop(0,'rgba(175,235,255,0.55)');
  moonGlow.addColorStop(0.45,'rgba(111,213,255,0.22)');
  moonGlow.addColorStop(1,'rgba(111,213,255,0)');
  ctx.fillStyle=moonGlow;
  ctx.fillRect(0,0,W,H);

  ctx.save();
  ctx.strokeStyle='rgba(255,215,170,0.12)';
  ctx.lineWidth=16;
  for(const centerX of [170,W/2,W-170]){
    ctx.beginPath();
    ctx.arc(centerX,350,170,Math.PI,0,false);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(centerX,350,125,Math.PI,0,false);
    ctx.stroke();
  }
  ctx.restore();

  const bridgeY=760;
  ctx.save();
  ctx.strokeStyle='rgba(244,213,170,0.42)';
  ctx.lineWidth=10;
  ctx.beginPath();
  ctx.arc(W/2,bridgeY,330,Math.PI*1.08,Math.PI*1.92,false);
  ctx.stroke();
  ctx.strokeStyle='rgba(255,245,230,0.18)';
  ctx.lineWidth=4;
  for(let i=-270;i<=270;i+=54){
    ctx.beginPath();
    ctx.moveTo(W/2+i,bridgeY-10);
    ctx.lineTo(W/2+i,bridgeY-68+Math.abs(i)*0.08);
    ctx.stroke();
  }
  ctx.restore();

  // Fountain / waterfall glow
  for(const sideX of [170,W-170]){
    const water=ctx.createLinearGradient(sideX,940,sideX,1370);
    water.addColorStop(0,'rgba(180,245,255,0.30)');
    water.addColorStop(1,'rgba(180,245,255,0)');
    ctx.strokeStyle=water;
    ctx.lineWidth=18;
    ctx.beginPath();
    ctx.moveTo(sideX,940);
    ctx.bezierCurveTo(sideX-40,1060,sideX+50,1190,sideX-20,1380);
    ctx.stroke();
  }

  // Mist layers near the bottom like the poster
  for(const [y,alpha] of [[1120,0.16],[1230,0.24],[1330,0.2]]){
    const mist=ctx.createRadialGradient(W/2,y,80,W/2,y,500);
    mist.addColorStop(0,`rgba(255,245,255,${alpha})`);
    mist.addColorStop(1,'rgba(255,245,255,0)');
    ctx.fillStyle=mist;
    ctx.fillRect(0,y-180,W,320);
  }

  // Blossom particles biased toward edges
  const petals=['rgba(249,168,212,0.34)','rgba(196,181,253,0.28)','rgba(251,191,36,0.18)','rgba(143,233,255,0.22)'];
  for(let i=0;i<54;i++){
    const edgeBias=Math.random()<0.5?Math.random()*240:W-(Math.random()*240);
    const x=(Math.random()<0.68)?edgeBias:Math.random()*W;
    const y=80+Math.random()*(H-120);
    const w=8+Math.random()*22;
    const h=4+Math.random()*12;
    const r=Math.random()*Math.PI;
    ctx.save();
    ctx.translate(x,y);
    ctx.rotate(r);
    ctx.fillStyle=petals[i%petals.length];
    ctx.beginPath();
    ctx.ellipse(0,0,w,h,0,0,Math.PI*2);
    ctx.fill();
    ctx.restore();
  }

  // Floral clusters bottom corners
  for(const originX of [120,W-120]){
    for(let i=0;i<15;i++){
      const px=originX+(originX<W/2?1:-1)*(Math.random()*190);
      const py=1170+Math.random()*180;
      const size=10+Math.random()*22;
      ctx.fillStyle=i%3===0?'rgba(255,216,230,0.78)':i%3===1?'rgba(244,190,226,0.62)':'rgba(199,167,251,0.58)';
      ctx.beginPath();
      ctx.arc(px,py,size*0.46,0,Math.PI*2);
      ctx.arc(px+size*0.5,py-3,size*0.42,0,Math.PI*2);
      ctx.arc(px+size*0.25,py-size*0.45,size*0.4,0,Math.PI*2);
      ctx.fill();
    }
  }

  // Small sparkles and luxury glyph accents
  ctx.fillStyle='rgba(255,242,210,0.9)';
  ctx.font='38px "Playpen Sans", sans-serif';
  ctx.fillText('✦',130,130);
  ctx.fillText('✦',W-140,142);
  ctx.fillText('❀',152,H-90);
  ctx.fillText('❀',W-170,H-84);
}

let _lastShareData=null;

async function generateShareCard(data,{zoneOnly=false}={}){
  if(data) _lastShareData=data;
  data=data||_lastShareData;
  if(!data) return;
  const canvas=document.getElementById('share-canvas');
  const preview=document.getElementById('share-preview');
  const dlBtn=document.getElementById('share-download-btn');
  if(!canvas||!preview||!dlBtn) return;
  const ctx=canvas.getContext('2d');
  if(!ctx) return;

  // 1080x1440 keeps a clean portrait 3:4 layout for poster-style share cards.
  const W=1080;
  const H=1440;
  canvas.width=W;
  canvas.height=H;

  const gradient=ctx.createLinearGradient(0,0,W,H);
  gradient.addColorStop(0,'#051b2b');
  gradient.addColorStop(0.32,'#0b2c44');
  gradient.addColorStop(0.62,'#1b2349');
  gradient.addColorStop(1,'#190c2f');
  ctx.fillStyle=gradient;
  ctx.fillRect(0,0,W,H);

  const vignette=ctx.createRadialGradient(W/2,H/2,320,W/2,H/2,980);
  vignette.addColorStop(0,'rgba(0,0,0,0)');
  vignette.addColorStop(1,'rgba(1,8,18,0.60)');
  ctx.fillStyle=vignette;
  ctx.fillRect(0,0,W,H);

  const decorImage=await getShareDecorImage();
  drawMidnightBloomDecor(ctx,W,H,decorImage);

  // Darken the whole background area so text pops over detailed artwork.
  ctx.save();
  ctx.fillStyle='rgba(0,0,0,0.30)';
  ctx.fillRect(0,0,W,H);
  ctx.restore();

  drawShareToneOverlay(ctx,W,H,data);

  if(!decorImage){
    ctx.fillStyle='rgba(255,255,255,0.3)';
    for(let i=0;i<60;i++){
      ctx.beginPath();
      ctx.arc(Math.random()*W,Math.random()*H,Math.random()*3,0,Math.PI*2);
      ctx.fill();
    }
  }

  ctx.strokeStyle='rgba(247,217,176,0.9)';
  ctx.lineWidth=9;
  ctx.strokeRect(46,46,W-92,H-92);
  ctx.strokeStyle='rgba(141,225,255,0.22)';
  ctx.lineWidth=2;
  ctx.strokeRect(62,62,W-124,H-124);

  ctx.textAlign='center';
  ctx.shadowBlur=18;
  ctx.shadowColor='rgba(106,228,255,0.32)';

  // ═══ GLAM INVITE CARD ═══
  // "ขอเชิญ" + nickname
  ctx.fillStyle='#f8d7b0';
  ctx.font='500 38px "Playpen Sans Thai", "Noto Sans Thai", sans-serif';
  ctx.fillText(lang==='th'?'ขอเชิญ':'You Are Invited',W/2,160);

  const nicknameOrAccount=data.nickname&&data.nickname!=='—'?data.nickname:'BBFanFest Lover';
  ctx.fillStyle='#fbfbfb';
  ctx.font='700 52px "Playpen Sans Thai", "Noto Sans Thai", sans-serif';
  ctx.shadowBlur=16;
  ctx.shadowColor='rgba(251,168,212,0.35)';
  ctx.fillText(nicknameOrAccount,W/2,250);

  // Decorative line
  ctx.strokeStyle='rgba(247,217,176,0.4)';
  ctx.lineWidth=2;
  ctx.beginPath();
  ctx.moveTo(150,290);
  ctx.lineTo(W-150,290);
  ctx.stroke();

  // "เป็นเกียรติร่วมงาน"
  ctx.fillStyle='#f2d7b0';
  ctx.font='500 40px "Playpen Sans Thai", "Noto Sans Thai", sans-serif';
  ctx.shadowBlur=14;
  ctx.shadowColor='rgba(175,235,255,0.25)';
  ctx.fillText(lang==='th'?'เป็นเกียรติร่วมงาน':'to join us at',W/2,370);

  // EVENT NAME + "Midnight Bloom"
  ctx.fillStyle='#f6d8b5';
  ctx.font='700 58px "Cinzel Decorative", serif';
  ctx.shadowBlur=22;
  ctx.shadowColor='rgba(251,191,36,0.4)';
  ctx.fillText('BLUSH BLOSSOM',W/2,460);
  ctx.fillText('FAN FEST 2026',W/2,530);

  ctx.fillStyle='#fbf4df';
  ctx.font='italic 68px "Cormorant Garamond", serif';
  ctx.shadowBlur=20;
  ctx.shadowColor='rgba(175,235,255,0.35)';
  ctx.fillText('Midnight Bloom',W/2,615);

  // Decorative line
  ctx.strokeStyle='rgba(247,217,176,0.3)';
  ctx.lineWidth=2;
  ctx.beginPath();
  ctx.moveTo(180,650);
  ctx.lineTo(W-180,650);
  ctx.stroke();

  // Seat information
  ctx.fillStyle='#fbfbfb';
  ctx.font='500 38px "Playpen Sans Thai", "Noto Sans Thai", sans-serif';
  ctx.shadowBlur=12;
  ctx.shadowColor='rgba(175,235,255,0.2)';
  ctx.fillText(lang==='th'?`ในวันที่ ${data.dayStr}`:`On ${data.dayStr}`,W/2,720);

  ctx.fillStyle='#f2d7a9';
  ctx.font='600 42px "Playpen Sans Thai", "Noto Sans Thai", sans-serif';
  ctx.shadowBlur=14;
  ctx.shadowColor='rgba(141,225,255,0.28)';
  ctx.fillText(lang==='th'?'ที่นั่งของคุณคือ':'Your Seat',W/2,808);

  ctx.fillStyle='#c4f2ff';
  ctx.font='700 58px "Playpen Sans Thai", "Noto Sans Thai", sans-serif';
  ctx.shadowBlur=18;
  ctx.shadowColor='rgba(111,223,255,0.4)';
  if(zoneOnly){
    ctx.fillText(lang==='th'?`โซน ${data.subZone}`:`Zone ${data.subZone}`,W/2,900);
  }else{
    ctx.fillText(lang==='th'?`โซน ${data.subZone} | แถว ${data.row} | เลขที่ ${data.seatNum}`:`Zone ${data.subZone} | Row ${data.row} | Seat ${data.seatNum}`,W/2,900);
  }

  // Fandom celebration section
  ctx.fillStyle='#fbfbfb';
  ctx.font='500 40px "Playpen Sans Thai", "Noto Sans Thai", sans-serif';
  ctx.shadowBlur=12;
  ctx.shadowColor='rgba(175,235,255,0.2)';
  ctx.fillText(lang==='th'?'มาร่วมชื่นชมความงามของ':"Let's celebrate",W/2,990);

  const fandomTxt=(data.fandomNames||[]).join(', ')||(lang==='th'?'ชื่นชมศิลปินที่รัก':'our beloved artists');
  ctx.fillStyle='#f6d8b5';
  ctx.font='700 36px "Playpen Sans Thai", "Noto Sans Thai", sans-serif';
  ctx.shadowBlur=18;
  ctx.shadowColor='rgba(251,168,212,0.38)';
  const fandomDraw=drawCenteredMultiline(ctx,fandomTxt,{
    x:W/2,
    startY:1060,
    lineHeight:44,
    maxWidth:820,
    maxLines:3,
  });

  // "ไปด้วยกัน"
  ctx.fillStyle='#f8eef9';
  ctx.font='600 48px "Playpen Sans Thai", "Noto Sans Thai", sans-serif';
  ctx.shadowBlur=14;
  ctx.shadowColor='rgba(251,168,212,0.3)';
  const nextY=Math.min(1330,fandomDraw.lastY+78);
  ctx.fillText(lang==='th'?'ไปด้วยกัน ✨':'Together ✨',W/2,nextY);

  // Hashtag
  ctx.fillStyle='#f6d1a1';
  ctx.font='700 58px serif';
  ctx.shadowBlur=16;
  ctx.shadowColor='rgba(251,168,212,0.3)';
  ctx.fillText('#BBFanFest2026',W/2,1364);

  const imgUrl=canvas.toDataURL('image/png');
  preview.src=imgUrl;
  dlBtn.href=imgUrl;
}

async function onSharePrivacyChange(){
  if(!_lastShareData) return;
  const zoneOnly=document.getElementById('share-zone-only')?.checked||false;
  await generateShareCard(null,{zoneOnly});
}

async function openShareModal(data){
  const zoneOnly=document.getElementById('share-zone-only')?.checked||false;
  await generateShareCard(data,{zoneOnly});
  const modal=document.getElementById('share-modal');
  const shareNowBtn=document.getElementById('share-now-btn');
  const xBtn=document.getElementById('share-x-btn');
  if(shareNowBtn){
    const supportsShare=typeof navigator!=='undefined'&&typeof navigator.share==='function';
    shareNowBtn.disabled=!supportsShare;
    shareNowBtn.style.opacity=supportsShare?'1':'0.6';
  }
  if(xBtn){
    // Remove old listeners by cloning
    const xBtnNew=xBtn.cloneNode(true);
    xBtn.parentNode.replaceChild(xBtnNew,xBtn);
    xBtnNew.removeAttribute('href');
    xBtnNew.addEventListener('click',async(e)=>{
      e.preventDefault();
      const currentZoneOnly=document.getElementById('share-zone-only')?.checked||false;
      const hashLine=shareFandomHashtags(data);
      const seatLine=buildShareSeatLine(data,{zoneOnly:currentZoneOnly});
      const tweetText=[
        lang==='th'?'เจอกันในงาน BLUSH BLOSSOM FAN FEST 2026!':'See you at BLUSH BLOSSOM FAN FEST 2026!',
        seatLine,
        hashLine,
      ].filter(Boolean).join('\n');
      const intentUrl=`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
      const canvas=document.getElementById('share-canvas');
      const canUseShare=typeof navigator!=='undefined'&&typeof navigator.share==='function';
      if(canUseShare&&canvas){
        const blob=await new Promise(r=>canvas.toBlob(r,'image/png'));
        if(blob){
          const file=new File([blob],'BBFanFest2026_Seat.png',{type:'image/png'});
          const shareData={files:[file],title:'BLUSH BLOSSOM FAN FEST 2026',text:tweetText};
          const canShareFile=typeof navigator.canShare!=='function'||navigator.canShare({files:[file]});
          if(canShareFile){
            try{ await navigator.share(shareData); return; }catch(err){ if(err?.name==='AbortError') return; }
          }
        }
      }
      window.open(intentUrl,'_blank','noopener,noreferrer');
    });
  }
  if(!modal) return;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
}

async function shareCardNow(){
  const canvas=document.getElementById('share-canvas');
  const dlBtn=document.getElementById('share-download-btn');
  if(!canvas||!dlBtn) return;
  const hashLine=shareFandomHashtags(_lastShareData);

  const fallbackDownload=()=>{
    dlBtn.click();
    toast(lang==='th'
      ? '📥 อุปกรณ์นี้ยังแชร์ไฟล์ภาพตรงไม่ได้ · ดาวน์โหลดรูปให้แล้ว'
      : '📥 Direct image sharing is not available on this device · Download started');
  };

  if(typeof navigator==='undefined'||typeof navigator.share!=='function'){
    fallbackDownload();
    return;
  }

  const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));
  if(!blob){
    fallbackDownload();
    return;
  }

  const file=new File([blob],'BBFanFest2026_Seat.png',{type:'image/png'});
  const shareData={
    files:[file],
    title:'BLUSH BLOSSOM FAN FEST 2026',
    text:[
      lang==='th'?'มาเจอกันในงาน BB FanFest 2026!':'See you at BB FanFest 2026!',
      hashLine,
    ].filter(Boolean).join('\n'),
  };

  if(typeof navigator.canShare==='function'&&!navigator.canShare({files:[file]})){
    fallbackDownload();
    return;
  }

  try{
    await navigator.share(shareData);
  }catch(err){
    if(err?.name==='AbortError') return;
    console.warn('Web Share API failed',err);
    fallbackDownload();
  }
}

function closeShareModal(){
  const modal=document.getElementById('share-modal');
  if(!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}

function randomTokenChars(len){
  const chars='ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
  let out='';
  for(let i=0;i<len;i++) out+=chars.charAt(Math.floor(Math.random()*chars.length));
  return out;
}

function createOwnerKey(){
  return `OWN-${randomTokenChars(20)}`;
}

function createTransferCode(){
  return `TR-${randomTokenChars(10)}`;
}

function formatIsoForDisplay(v){
  const s=String(v||'').trim();
  if(!s) return '-';
  const d=new Date(s);
  if(Number.isNaN(d.getTime())) return s;
  try{
    return d.toLocaleString(lang==='th'?'th-TH':'en-US',{hour12:false});
  }catch(_){
    return d.toISOString();
  }
}

function closeOwnerTransferModal(){
  const modal=document.getElementById('owner-transfer-modal');
  if(!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
}

async function copyOwnerTransferField(id){
  const el=document.getElementById(id);
  if(!el) return;
  const text=String(el.textContent||'').trim();
  if(!text||text==='-') return;
  try{
    await navigator.clipboard.writeText(text);
    toast(lang==='th'?'📋 คัดลอกแล้ว':'📋 Copied');
  }catch(_){
    toast(lang==='th'?'❌ คัดลอกไม่สำเร็จ กรุณาคัดลอกเอง':'❌ Copy failed. Please copy manually');
  }
}

function openOwnerTransferModal({ownerKey,transferCode,transferCodeExpiresAt}={}){
  const modal=document.getElementById('owner-transfer-modal');
  if(!modal) return;
  const ownerEl=document.getElementById('owner-key-value');
  const transferEl=document.getElementById('transfer-code-value');
  const expEl=document.getElementById('transfer-exp-value');
  if(ownerEl) ownerEl.textContent=ownerKey||'-';
  if(transferEl) transferEl.textContent=transferCode||'-';
  if(expEl) expEl.textContent=formatIsoForDisplay(transferCodeExpiresAt);

  const title=document.getElementById('owner-transfer-title');
  const desc=document.getElementById('owner-transfer-desc');
  const warning=document.getElementById('owner-transfer-warning');
  const howto=document.getElementById('owner-transfer-howto');
  const ownerLabel=document.getElementById('owner-key-label');
  const transferLabel=document.getElementById('transfer-code-label');
  const expLabel=document.getElementById('transfer-exp-label');
  const copyOwnerBtn=document.getElementById('copy-owner-btn');
  const copyTransferBtn=document.getElementById('copy-transfer-btn');
  const closeBtn=document.getElementById('owner-transfer-close-btn');

  if(title) title.textContent=lang==='th'?'🔐 Owner Key & Transfer Code':'🔐 Owner Key & Transfer Code';
  if(desc) desc.textContent=lang==='th'
    ? 'บันทึกรหัสนี้ทันที ใช้สำหรับจัดการประกาศขาย/เทรด และยืนยันการโอนที่นั่ง'
    : 'Save these credentials now. They are required to manage listings and confirm seat transfer.';
  if(warning) warning.textContent=lang==='th'
    ? '⚠️ โปรดเก็บรักษาข้อมูลให้ดี ห้ามหาย และห้ามส่งให้คนที่ไม่เกี่ยวข้อง'
    : '⚠️ Keep these credentials safe. Do not lose or share with unrelated people.';
  if(howto) howto.textContent=lang==='th'
    ? 'วิธีใช้: 1) ใช้ Owner Key เพื่อปิด/แก้ไขประกาศ 2) ส่ง Transfer Code ให้ผู้รับสิทธิ์ตอนปิดดีล 3) ผู้รับสิทธิ์ใช้ Transfer Code ตอนลงข้อมูลที่นั่ง'
    : 'How to use: 1) Use Owner Key to close/edit listing. 2) Send Transfer Code to buyer/trade partner after deal. 3) Receiver uses Transfer Code when submitting seat ownership.';
  if(ownerLabel) ownerLabel.textContent=lang==='th'?'Owner Key':'Owner Key';
  if(transferLabel) transferLabel.textContent=lang==='th'?'Transfer Code':'Transfer Code';
  if(expLabel) expLabel.textContent=lang==='th'?'หมดอายุ':'Expires';
  if(copyOwnerBtn) copyOwnerBtn.textContent=lang==='th'?'คัดลอก Owner Key':'Copy Owner Key';
  if(copyTransferBtn) copyTransferBtn.textContent=lang==='th'?'คัดลอก Transfer Code':'Copy Transfer Code';
  if(closeBtn) closeBtn.textContent=lang==='th'?'ปิด':'Close';

  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
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
  const day=document.querySelector('input[name="show-day"]:checked')?.value||'';
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
  const day=document.querySelector('input[name="show-day"]:checked')?.value||'';
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
  const mpTransferCode=(document.getElementById('reg-mp-tc')?.value||'').trim();
  await syncData(true);
  let overwrite=false;
  if(isSeatTaken(getData(),{day,subZone:sz,row,seatNum})){
    if(mpTransferCode){
      // มี TC → ข้ามการถามยืนยัน ให้ backend ตรวจสอบเอง
      overwrite=true;
      setSeatCheckMessage('ok',lang==='th'?'🔑 ใช้ Transfer Code สำหรับลงทะเบียน':'🔑 Using Transfer Code for registration');
    } else {
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
  }
  const dayStr=formatShowDateTime(day,{locale:lang,includeYear:true,includeTime:true});
  const ownerKey=createOwnerKey();
  const transferCode=createTransferCode();
  const transferCodeExpiresAt=new Date(Date.now()+24*60*60*1000).toISOString();
  const entry={id:Date.now(),days:[day],dayStr,mainZone:mz,subZone:sz,price:pr,row,seatNum,fandoms:normalizedFandoms,nickname,overwrite,ownerKey,transferCode,transferCodeExpiresAt,ts:new Date().toISOString(),...(mpTransferCode?{mpTransferCode}:{})};
  const btn=document.getElementById('submit-btn');btn.disabled=true;btn.textContent='⏳...';
  // Save to Google Sheets
  let remoteStatus='none';
  let remoteMessage='';
  let issuedOwnerKey=ownerKey;
  let issuedTransferCode=transferCode;
  let issuedTransferCodeExpiresAt=transferCodeExpiresAt;
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
      issuedOwnerKey=String(json?.ownerKey||issuedOwnerKey);
      issuedTransferCode=String(json?.transferCode||issuedTransferCode);
      issuedTransferCodeExpiresAt=String(json?.transferCodeExpiresAt||issuedTransferCodeExpiresAt);
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

  if(remoteStatus==='error'&&mpTransferCode){
    // TC-specific error — show clearly
    setSeatCheckMessage('warn',`❌ ${remoteMessage||'Transfer Code ไม่ถูกต้องหรือหมดอายุแล้ว'}`);
    toast(`❌ TC Error: ${remoteMessage||'Invalid Transfer Code'}`);
    btn.disabled=false;btn.textContent=lang==='th'?'✦ บันทึก & ส่งข้อมูล':'✦ Save & Submit';
    return;
  }

  if(remoteStatus==='skipped'){
    setSeatCheckMessage('warn',lang==='th'?'⚠️ ที่นั่งนี้ถูกลงทะเบียนแล้วในวันเดียวกัน':'⚠️ This seat is already registered for this day');
    toast('❌ '+(lang==='th'?'ที่นั่งนี้มีคนลงไว้แล้ว (วันเดียวกัน)':'Seat already taken for this day'));
    btn.disabled=false;btn.textContent=lang==='th'?'✦ บันทึก & ส่งข้อมูล':'✦ Save & Submit';
    return;
  }

  const remoteSaved=remoteStatus==='ok'||remoteStatus==='updated';

  // Transfer Code must be verified server-side only; never fall back to local write.
  if(mpTransferCode&&!remoteSaved){
    setSeatCheckMessage('warn',lang==='th'
      ?'❌ ยืนยัน Transfer Code กับเซิร์ฟเวอร์ไม่สำเร็จ กรุณาลองอีกครั้ง'
      :'❌ Could not validate Transfer Code with server. Please try again.');
    toast(lang==='th'
      ?'❌ ไม่สามารถยืนยัน Transfer Code ได้ (ระบบไม่ตอบสนอง)'
      :'❌ Transfer Code validation failed (server unavailable)');
    btn.disabled=false;btn.textContent=lang==='th'?'✦ บันทึก & ส่งข้อมูล':'✦ Save & Submit';
    return;
  }

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

  const fandomNamesForShare=normalizedFandoms.map(fid=>fandomName(fid));
  openShareModal({
    day,
    dayStr,
    subZone:sz,
    row,
    seatNum,
    fandomIds:normalizedFandoms,
    fandomNames:fandomNamesForShare,
    nickname
  });
  openOwnerTransferModal({
    ownerKey:issuedOwnerKey,
    transferCode:issuedTransferCode,
    transferCodeExpiresAt:issuedTransferCodeExpiresAt,
  });

  // Reset
  document.querySelectorAll('.day-opt input,.fc input').forEach(c=>c.checked=false);
  ['nickname','reg-mp-tc'].forEach(id=>{const el=document.getElementById(id);if(el)el.value='';});
  clearMpTCStatus();
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
  ['seat','live','marketplace'].forEach(t=>{
    document.getElementById('register-tab-'+t)?.classList.toggle('on',t===tab);
    document.getElementById('register-pane-'+t)?.classList.toggle('active',t===tab);
  });
  if(tab==='marketplace') buildMpLookingForChips();
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
  // ── Marketplace listing counts on SVG zones ──
  const mktData=getMarketplaceData();
  const mktSubZoneCnt={};
  const mktDayCurrent=censusDayFilter!=='all'?censusDayFilter:null;
  mktData.forEach(l=>{
    if(mktDayCurrent&&String(l.day)!==mktDayCurrent) return;
    const sz=String(l.subZone||'').toUpperCase();
    if(sz) mktSubZoneCnt[sz]=(mktSubZoneCnt[sz]||0)+1;
  });
  Object.keys(ZONES).forEach(m=>{
    ZONES[m].subs.forEach(sz=>{
      const cnt=mktSubZoneCnt[sz]||0;
      const el=document.getElementById('sc-'+sz);
      if(el&&cnt>0){
        const baseText=el.textContent||'';
        el.textContent=baseText+` 🛒${cnt}`;
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
      // ── Marketplace badge ──
      const mktDay=censusDayFilter!=='all'?censusDayFilter:null;
      const mktListing=mktDay?getMarketplaceBadgeForSeat(mktDay,zoneId,rowName,s):null;
      if(mktListing){
        const isResell=mktListing.listingType==='resell';
        const badge=document.createElement('div');
        badge.style.cssText=`position:absolute;top:-6px;right:-4px;font-size:8px;font-weight:900;padding:1px 4px;border-radius:4px;z-index:2;pointer-events:none;${isResell?'background:#ef4444;color:#fff;':'background:#3b82f6;color:#fff;'}`;
        badge.textContent=isResell?(lang==='th'?'ขาย':'SELL'):(lang==='th'?'เทรด':'TRADE');
        btn.style.position='relative';
        btn.appendChild(badge);
        // Marketplace tooltip addition
        const mktTip=document.createElement('div');
        mktTip.style.cssText='position:absolute;bottom:110%;left:50%;transform:translateX(-50%);background:rgba(15,10,40,.97);border:1px solid rgba(244,114,182,.3);border-radius:8px;padding:6px 10px;font-size:10px;white-space:nowrap;color:#fff;z-index:10;pointer-events:none;display:none;line-height:1.6';
        const contactStr=[mktListing.twitter,mktListing.lineId?`LINE:${mktListing.lineId}`:''].filter(Boolean).join(' / ');
        mktTip.innerHTML=`<strong style="color:${isResell?'#f87171':'#60a5fa'}">${isResell?(lang==='th'?'ขายต่อ':'RESELL'):(lang==='th'?'เทรด':'TRADE')}</strong><br>${Number(mktListing.originalPrice||0).toLocaleString()}฿<br>${contactStr}`;
        btn.appendChild(mktTip);
        btn.addEventListener('mouseenter',()=>mktTip.style.display='block');
        btn.addEventListener('mouseleave',()=>mktTip.style.display='none');
      }

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

/* ══════════════════════════════════════
   MARKETPLACE
══════════════════════════════════════ */
const MARKETPLACE_LOCAL_KEY='bb_marketplace_v1';
let MARKETPLACE_CACHE=(()=>{try{return JSON.parse(localStorage.getItem(MARKETPLACE_LOCAL_KEY)||'[]')}catch{return[]}})();
let MARKETPLACE_LAST_SYNC=0;
let mktDayFilter='all';
let mktTypeFilter='all';
let mktZoneFilter='all';

// ─ price table สำหรับล็อคราคา (numeric)
const MP_PRICE_TABLE={
  A1:5000,A2:7900,A3:7900,A4:5000,
  B1:4500,B2:5900,B3:5900,B4:5900,B5:4500,
  C1:3500,C2:4500,C3:4500,C4:4500,C5:3500,
};
const MP_PRICE_DE={
  D1:[3000,2500],D2:[3000,2500],D3:[3000,2500],D4:[3000,2500],
  E1:[2000,1500],E2:[2000,1500],E3:[2000,1500],E4:[2000,1500],
};

function getMpOriginalPrice(subZone){
  if(MP_PRICE_TABLE[subZone]!==undefined) return MP_PRICE_TABLE[subZone];
  return null; // D/E have 2 tiers — requires dropdown
}

function isValidDriveUrl(url){
  return /^https:\/\/(drive|docs)\.google\.com\/.+/.test(String(url||'').trim());
}

function isValidLineId(v){
  return /^[A-Za-z0-9_.\-]{4,20}$/.test(String(v||'').trim());
}

/* ─ Zone/Sub/Price/Row/Seat selectors for marketplace form ─ */
function updateMpSub(){
  const mz=document.getElementById('mp-main-zone').value;
  const sub=document.getElementById('mp-sub-zone');
  sub.innerHTML='<option value="" disabled selected>—</option>';
  (ZONES[mz]?.subs||[]).forEach(sz=>{
    const opt=document.createElement('option');
    opt.value=sz;opt.textContent=sz;
    sub.appendChild(opt);
  });
  document.getElementById('mp-price-text').textContent=lang==='th'?'เลือกโซนย่อยก่อน':'Select sub-zone';
  document.getElementById('mp-price-value').value='';
  document.getElementById('mp-price-tier').style.display='none';
  document.getElementById('mp-row').innerHTML='<option value="" disabled selected>—</option>';
  document.getElementById('mp-seat-num').innerHTML='<option value="" disabled selected>—</option>';
  document.getElementById('mp-seat-check-msg').innerHTML='';
}

function updateMpPrice(){
  const sz=document.getElementById('mp-sub-zone').value;
  if(!sz) return;
  const priceTier=document.getElementById('mp-price-tier');
  const priceText=document.getElementById('mp-price-text');
  const priceVal=document.getElementById('mp-price-value');
  if(MP_PRICE_TABLE[sz]!==undefined){
    const price=MP_PRICE_TABLE[sz];
    priceText.textContent=price.toLocaleString()+'฿';
    priceText.style.color='#a78bfa';
    priceVal.value=price;
    priceTier.style.display='none';
  } else if(MP_PRICE_DE[sz]){
    const tiers=MP_PRICE_DE[sz];
    priceTier.innerHTML=`<option value="" disabled selected>${lang==='th'?'เลือก tier ราคาของคุณ':'Select your price tier'}</option>`
      +tiers.map(p=>`<option value="${p}">${p.toLocaleString()}฿</option>`).join('');
    priceTier.style.display='block';
    priceTier.onchange=()=>{
      priceText.textContent=Number(priceTier.value).toLocaleString()+'฿';
      priceText.style.color='#a78bfa';
      priceVal.value=priceTier.value;
    };
    priceText.textContent=lang==='th'?'เลือก tier ด้านล่าง':'Pick tier below';
    priceText.style.color='rgba(255,255,255,.35)';
    priceVal.value='';
  }
}

function updateMpRowOptions(){
  const mz=document.getElementById('mp-main-zone').value;
  const sz=document.getElementById('mp-sub-zone').value;
  const rowSel=document.getElementById('mp-row');
  rowSel.innerHTML='<option value="" disabled selected>—</option>';
  const rows=SZ_ROWS[sz]||ZONE_ROWS[mz]||[];
  rows.forEach(r=>{
    const opt=document.createElement('option');
    opt.value=r;opt.textContent=r;
    rowSel.appendChild(opt);
  });
  document.getElementById('mp-seat-num').innerHTML='<option value="" disabled selected>—</option>';
}

function updateMpSeatOptions(){
  const mz=document.getElementById('mp-main-zone').value;
  const sz=document.getElementById('mp-sub-zone').value;
  const row=document.getElementById('mp-row').value;
  const seatSel=document.getElementById('mp-seat-num');
  seatSel.innerHTML='<option value="" disabled selected>—</option>';
  if(!row||!sz) return;
  const win=getRowSeatWindow(sz,row);
  if(!win) return;
  for(let s=win.start;s<=win.end;s++){
    const opt=document.createElement('option');
    opt.value=s;opt.textContent=s<10?'0'+s:String(s);
    seatSel.appendChild(opt);
  }
}

function onMpTypeChange(){
  const type=document.querySelector('input[name="mp-type"]:checked')?.value||'';
  const wrap=document.getElementById('mp-looking-for-wrap');
  if(wrap) wrap.style.display=type==='trade'?'block':'none';
}

function buildMpLookingForChips(){
  const wrap=document.getElementById('mp-lf-wrap');
  if(!wrap) return;
  wrap.innerHTML='';
  ['A','B','C','D','E'].forEach(m=>{
    (ZONES[m]?.subs||[]).forEach(sz=>{
      const d=document.createElement('div');d.className='fc';
      d.innerHTML=`<input type="checkbox" id="mp-lf-${sz}" value="${sz}"><label for="mp-lf-${sz}" style="border-color:${ZONES[m].colors[sz]||ZONES[m].mainColor}44">${sz}</label>`;
      wrap.appendChild(d);
    });
  });
}

function getSelectedMpLookingFor(){
  return [...document.querySelectorAll('#mp-lf-wrap input:checked')].map(i=>i.value);
}

/* ─ Marketplace data sync ─ */
function getMarketplaceData(){return Array.isArray(MARKETPLACE_CACHE)?MARKETPLACE_CACHE:[];}
function saveMarketplaceLocal(list){
  MARKETPLACE_CACHE=Array.isArray(list)?list:[];
  localStorage.setItem(MARKETPLACE_LOCAL_KEY,JSON.stringify(MARKETPLACE_CACHE));
}
async function syncMarketplaceData(force=false){
  const now=Date.now();
  if(!force&&(now-MARKETPLACE_LAST_SYNC)<15000&&getMarketplaceData().length) return getMarketplaceData();
  if(GAS_URL){
    try{
      const url=`${GAS_URL}${GAS_URL.includes('?')?'&':'?'}action=read_marketplace&t=${now}`;
      const res=await fetch(url,{method:'GET'});
      if(!res.ok) throw new Error(`MKT read failed: ${res.status}`);
      const json=await res.json();
      const arr=Array.isArray(json?.data)?json.data:[];
      saveMarketplaceLocal(arr);
      MARKETPLACE_LAST_SYNC=now;
      return arr;
    }catch(err){console.warn('Marketplace sync error',err);}
  }
  return getMarketplaceData();
}

function hasDuplicateActiveListingLocal(day,subZone,row,seatNum){
  return getMarketplaceData().some(l=>
    String(l.day)===String(day)&&
    String(l.subZone||'').toUpperCase()===String(subZone||'').toUpperCase()&&
    String(l.row||'').toUpperCase()===String(row||'').toUpperCase()&&
    Number(l.seatNum||0)===Number(seatNum||0)&&
    String(l.status||'active')==='active'
  );
}

/* ─ Submit marketplace listing ─ */
async function submitMarketplaceForm(){
  const listingType=document.querySelector('input[name="mp-type"]:checked')?.value||'';
  if(!listingType){toast('❌ '+(lang==='th'?'เลือกประเภทประกาศก่อน':'Select listing type'));return;}
  const day=document.querySelector('input[name="mp-day"]:checked')?.value||'';
  if(!day){toast('❌ '+(lang==='th'?'เลือกวันที่แสดงก่อน':'Select show day'));return;}
  const mz=document.getElementById('mp-main-zone').value;
  const sz=document.getElementById('mp-sub-zone').value;
  const priceVal=document.getElementById('mp-price-value').value;
  const row=document.getElementById('mp-row').value;
  const seatNumRaw=document.getElementById('mp-seat-num').value;
  const twitter=normalizeTwitterHandle(document.getElementById('mp-twitter').value||'');
  const lineId=(document.getElementById('mp-line-id').value||'').trim();
  const proofUrl=(document.getElementById('mp-proof-url').value||'').trim();
  const note=(document.getElementById('mp-note').value||'').trim();
  const lookingForZones=listingType==='trade'?getSelectedMpLookingFor():[];

  if(!mz){toast('❌ '+(lang==='th'?'เลือกโซนหลัก':'Select zone'));return;}
  if(!sz){toast('❌ '+(lang==='th'?'เลือกโซนย่อย':'Select sub-zone'));return;}
  if(!priceVal){toast('❌ '+(lang==='th'?'กรุณาเลือกราคาบัตร':'Select ticket price'));return;}
  if(!row){toast('❌ '+(lang==='th'?'เลือกแถว':'Select row'));return;}
  const seatNum=parseInt(seatNumRaw,10);
  if(!Number.isInteger(seatNum)||seatNum<1){toast('❌ '+(lang==='th'?'เลือกเลขที่นั่ง':'Select seat number'));return;}
  if(!twitter&&!lineId){toast('❌ '+(lang==='th'?'กรอก Twitter หรือ LINE ID อย่างน้อย 1 ช่อง':'Enter Twitter or LINE ID — at least one required'));return;}
  if(listingType==='trade'&&lookingForZones.length===0){toast('❌ '+(lang==='th'?'กรุณาเลือกโซนที่อยากได้อย่างน้อย 1 โซน':'Please select at least 1 zone you are looking for'));return;}
  if(!proofUrl){toast('❌ '+(lang==='th'?'กรอกลิงก์รูปหลักฐาน':'Enter proof image link'));return;}
  if(!isValidDriveUrl(proofUrl)){toast('❌ '+(lang==='th'?'ลิงก์ต้องเป็น Google Drive เท่านั้น (drive.google.com)':'Link must be a Google Drive URL'));return;}

  const dupMsg=document.getElementById('mp-dup-msg');
  await syncMarketplaceData(true);
  if(hasDuplicateActiveListingLocal(day,sz,row,seatNum)){
    if(dupMsg) dupMsg.innerHTML=`<span class="seat-warn">⚠️ ${lang==='th'?'ที่นั่งนี้มีประกาศ active อยู่แล้วในวันนี้ กรุณาปิดประกาศเดิมก่อน':'This seat already has an active listing for this day. Close the existing listing first.'}</span>`;
    return;
  }
  if(dupMsg) dupMsg.innerHTML='';

  const btn=document.getElementById('mp-submit-btn');
  btn.disabled=true;btn.textContent='⏳...';

  const payload={
    action:'save_marketplace',
    listingType,day,mainZone:mz,subZone:sz,
    row:normalizeRowForZone(mz,row),seatNum,
    originalPrice:Number(priceVal),
    lookingForZones,twitter,lineId,proofDriveUrl:proofUrl,note
  };

  let listingId='',ownerKey='';
  if(GAS_URL){
    try{
      const res=await fetch(GAS_URL,{
        method:'POST',mode:'cors',
        headers:{'Content-Type':'text/plain;charset=utf-8'},
        body:JSON.stringify(payload)
      });
      if(!res.ok) throw new Error(`MKT write failed: ${res.status}`);
      const json=await res.json();
      if(String(json?.status||'').toLowerCase()==='duplicate'){
        if(dupMsg) dupMsg.innerHTML=`<span class="seat-warn">⚠️ ${json.message||'Duplicate listing'}</span>`;
        btn.disabled=false;btn.textContent=lang==='th'?'🛒 ลงประกาศ':'🛒 Post Listing';
        return;
      }
      if(String(json?.status||'').toLowerCase()!=='ok'){
        toast('❌ '+(json?.message||'Error'));
        btn.disabled=false;btn.textContent=lang==='th'?'🛒 ลงประกาศ':'🛒 Post Listing';
        return;
      }
      listingId=String(json?.listingId||'');
      ownerKey=String(json?.ownerKey||'');
      await syncMarketplaceData(true);
    }catch(err){
      console.warn('MKT submit error',err);
      // Local fallback — บันทึก locally ถ้า API fail
      const localEntry={
        listingId:'LOCAL-'+Date.now(),
        createdAt:new Date().toISOString(),
        status:'active',
        listingType,day,mainZone:mz,subZone:sz,
        row:normalizeRowForZone(mz,row),seatNum,
        originalPrice:Number(priceVal),
        lookingForZones,twitter,lineId,
        proofDriveUrl:proofUrl,note
      };
      saveMarketplaceLocal([...getMarketplaceData(),localEntry]);
      buildMarketplaceSeatMap();
      listingId=localEntry.listingId;
      ownerKey='(Local - no API)';
      const reason=err?.message?` (${err.message})`:'';
      toast(lang==='th'
        ?`🛒 บันทึก Local แล้ว · API ไม่ตอบสนอง${reason} · ลอง deploy Apps Script ใหม่`
        :`🛒 Saved locally · API unavailable${reason} · Check Apps Script deployment`);
    }
  } else {
    toast('❌ '+(lang==='th'?'ยังไม่ได้ตั้งค่า Google Apps Script URL — ดู SETUP_GUIDE.md':'Google Apps Script URL not set — see SETUP_GUIDE.md'));
    btn.disabled=false;btn.textContent=lang==='th'?'🛒 ลงประกาศ':'🛒 Post Listing';
    return;
  }

  // Reset form
  document.querySelectorAll('input[name="mp-type"],input[name="mp-day"]').forEach(i=>i.checked=false);
  ['mp-main-zone','mp-sub-zone','mp-row','mp-seat-num'].forEach(id=>{
    const el=document.getElementById(id);
    if(el){el.value='';el.innerHTML='<option value="" disabled selected>—</option>';}
  });
  ['mp-twitter','mp-line-id','mp-proof-url','mp-note'].forEach(id=>{
    const el=document.getElementById(id);if(el) el.value='';
  });
  document.getElementById('mp-price-text').textContent=lang==='th'?'เลือกโซนก่อน':'Select zone first';
  document.getElementById('mp-price-text').style.color='rgba(255,255,255,.35)';
  document.getElementById('mp-price-value').value='';
  document.getElementById('mp-price-tier').style.display='none';
  document.getElementById('mp-looking-for-wrap').style.display='none';
  document.querySelectorAll('#mp-lf-wrap input').forEach(i=>i.checked=false);
  btn.disabled=false;btn.textContent=lang==='th'?'🛒 ลงประกาศ':'🛒 Post Listing';

  openMpSuccessModal(listingId,ownerKey);
  toast(lang==='th'?'🛒 ลงประกาศสำเร็จ!':'🛒 Listing posted!');
}

/* ─ Success modal ─ */
function openMpSuccessModal(listingId,ownerKey){
  const modal=document.getElementById('mp-success-modal');if(!modal)return;
  const lidEl=document.getElementById('mp-success-listing-id');
  const keyEl=document.getElementById('mp-success-owner-key');
  const title=document.getElementById('mp-success-title');
  const desc=document.getElementById('mp-success-desc');
  if(lidEl) lidEl.textContent=listingId||'-';
  if(keyEl) keyEl.textContent=ownerKey||'-';
  if(title) title.textContent=lang==='th'?'🛒 ลงประกาศสำเร็จ!':'🛒 Listing Posted!';
  if(desc) desc.textContent=lang==='th'
    ?'บันทึก Listing ID และ Owner Key ไว้ให้ดี — ใช้สำหรับปิดประกาศเมื่อขาย/เทรดสำเร็จ'
    :'Save your Listing ID and Owner Key — required to close the listing after a successful deal.';
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');
}
function closeMpSuccessModal(){
  const modal=document.getElementById('mp-success-modal');if(!modal)return;
  modal.classList.remove('open');modal.setAttribute('aria-hidden','true');
}
async function copyMpField(id){
  const el=document.getElementById(id);if(!el)return;
  const text=String(el.textContent||'').trim();
  if(!text||text==='-') return;
  try{await navigator.clipboard.writeText(text);toast(lang==='th'?'📋 คัดลอกแล้ว':'📋 Copied');}
  catch(_){toast(lang==='th'?'❌ คัดลอกไม่สำเร็จ':'❌ Copy failed');}
}

/* ─ Marketplace Transfer Code modal (shown to seller after close) ─ */
function openMpTCModal(tc, expiresAt, listingData){
  const modal=document.getElementById('mp-tc-modal');if(!modal)return;
  const tcEl=document.getElementById('mp-tc-value');
  const expEl=document.getElementById('mp-tc-expires');
  const infoEl=document.getElementById('mp-tc-listing-info');
  if(tcEl) tcEl.textContent=tc||'-';
  if(expEl){
    if(expiresAt){
      const d=new Date(expiresAt);
      const diff=Math.round((d.getTime()-Date.now())/3600000);
      const locale=lang==='th'?'th-TH':'en-US';
      expEl.textContent=lang==='th'
        ? `${d.toLocaleString(locale,{dateStyle:'medium',timeStyle:'short'})} (อีก ${diff} ชั่วโมง)`
        : `${d.toLocaleString(locale,{dateStyle:'medium',timeStyle:'short'})} (${diff} hour(s) left)`;
    } else {
      expEl.textContent='-';
    }
  }
  if(infoEl&&listingData){
    const dayLabel=`${listingData.day} ${lang==='th'?'มิ.ย.':'Jun'}`;
    infoEl.innerHTML=lang==='th'
      ? `<strong style="color:rgba(255,255,255,.8)">ที่นั่งที่โอน:</strong> วันที่ ${dayLabel} · โซน <strong style="color:#a78bfa">${listingData.subZone||listingData.mainZone}</strong> · แถว ${listingData.row} · ที่ ${listingData.seatNum} · ${Number(listingData.originalPrice||0).toLocaleString()}฿`
      : `<strong style="color:rgba(255,255,255,.8)">Transferred seat:</strong> Day ${dayLabel} · Zone <strong style="color:#a78bfa">${listingData.subZone||listingData.mainZone}</strong> · Row ${listingData.row} · Seat ${listingData.seatNum} · ${Number(listingData.originalPrice||0).toLocaleString()} THB`;
  } else if(infoEl){
    infoEl.innerHTML='';
  }
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');
}
function closeMpTCModal(){
  const modal=document.getElementById('mp-tc-modal');if(!modal)return;
  modal.classList.remove('open');modal.setAttribute('aria-hidden','true');
}
async function copyMpTCField(id){
  const el=document.getElementById(id);if(!el)return;
  const text=String(el.textContent||'').trim();
  if(!text||text==='-') return;
  try{await navigator.clipboard.writeText(text);toast(lang==='th'?'📋 คัดลอก Transfer Code แล้ว':'📋 Transfer Code copied');}
  catch(_){toast(lang==='th'?'❌ คัดลอกไม่สำเร็จ':'❌ Copy failed');}
}

/* ─ Close listing modal ─ */
function openCloseListingModal(listingId){
  const modal=document.getElementById('close-listing-modal');if(!modal)return;
  const lidInp=document.getElementById('cl-listing-id');
  if(lidInp&&listingId) lidInp.value=listingId;
  const keyInp=document.getElementById('cl-owner-key');
  if(keyInp) keyInp.value='';
  const msg=document.getElementById('cl-status-msg');
  if(msg) msg.innerHTML='';
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');
}
function closeCloseListingModal(){
  const modal=document.getElementById('close-listing-modal');if(!modal)return;
  modal.classList.remove('open');modal.setAttribute('aria-hidden','true');
}
async function submitCloseListing(){
  const listingId=(document.getElementById('cl-listing-id')?.value||'').trim();
  const ownerKey=(document.getElementById('cl-owner-key')?.value||'').trim();
  const msg=document.getElementById('cl-status-msg');
  const btn=document.getElementById('cl-submit-btn');
  if(!listingId){if(msg)msg.innerHTML=`<span class="seat-warn">❌ ${lang==='th'?'กรอก Listing ID':'Enter Listing ID'}</span>`;return;}
  if(!ownerKey){if(msg)msg.innerHTML=`<span class="seat-warn">❌ ${lang==='th'?'กรอก Owner Key':'Enter Owner Key'}</span>`;return;}
  if(!GAS_URL){toast('❌ GAS URL not set');return;}
  btn.disabled=true;btn.textContent='⏳...';
  try{
    const res=await fetch(GAS_URL,{
      method:'POST',mode:'cors',
      headers:{'Content-Type':'text/plain;charset=utf-8'},
      body:JSON.stringify({action:'close_listing',listingId,ownerKey})
    });
    if(!res.ok) throw new Error(`Status ${res.status}`);
    const json=await res.json();
    if(String(json?.status||'').toLowerCase()==='ok'){
      if(msg)msg.innerHTML=`<span class="seat-ok">✅ ${lang==='th'?'ปิดประกาศสำเร็จ':'Listing closed successfully'}</span>`;
      toast(lang==='th'?'✅ ปิดประกาศเรียบร้อย':'✅ Listing closed');
      await syncMarketplaceData(true);
      renderMarketplaceListings();
      // ถ้าได้ Transfer Code กลับมา → เปิด TC modal
      if(json?.transferCode){
        setTimeout(()=>{
          closeCloseListingModal();
          openMpTCModal(json.transferCode, json.transferCodeExpiresAt, json.listingData);
        },400);
      } else {
        setTimeout(closeCloseListingModal,1500);
      }
    } else {
      if(msg)msg.innerHTML=`<span class="seat-warn">❌ ${json?.message||'Error'}</span>`;
    }
  }catch(err){
    if(msg)msg.innerHTML=`<span class="seat-warn">❌ ${err.message||'Error'}</span>`;
  } finally {
    btn.disabled=false;btn.textContent=lang==='th'?'ยืนยันปิดประกาศ':'Confirm Close';
  }
}

/* ─ Filter ─ */
function setMktFilter(key,val){
  if(key==='day'){
    mktDayFilter=val;
    ['all','13','14'].forEach(v=>document.getElementById('mkt-f-day-'+v)?.classList.toggle('on',v===val));
  } else if(key==='type'){
    mktTypeFilter=val;
    ['all','resell','trade'].forEach(v=>document.getElementById('mkt-f-type-'+v)?.classList.toggle('on',v===val));
  } else if(key==='zone'){
    mktZoneFilter=val;
  }
  renderMarketplaceListings();
}

function getFilteredMarketplace(){
  return getMarketplaceData().filter(l=>{
    if(String(l.status||'').toLowerCase()!=='active') return false;
    if(mktDayFilter!=='all'&&String(l.day)!==mktDayFilter) return false;
    if(mktTypeFilter!=='all'&&String(l.listingType)!==mktTypeFilter) return false;
    if(mktZoneFilter!=='all'&&String(l.mainZone||'').toUpperCase()!==mktZoneFilter) return false;
    return true;
  });
}

/* ─ Render public listings ─ */
function renderMarketplaceListings(){
  const wrap=document.getElementById('mkt-listings');if(!wrap)return;
  const total=document.getElementById('mkt-total');
  const data=getFilteredMarketplace();
  if(total) total.textContent=data.length;
  if(!data.length){
    wrap.innerHTML=`<div style="grid-column:1/-1;text-align:center;color:rgba(255,255,255,.35);padding:40px 0;font-size:13px">${lang==='th'?'ไม่มีประกาศที่ตรงกับเงื่อนไข':'No listings match the filter'}</div>`;
    return;
  }
  wrap.innerHTML=data.map(l=>{
    const isResell=l.listingType==='resell';
    const typeBadge=isResell
      ?`<span style="background:rgba(239,68,68,.2);color:#f87171;border:1px solid rgba(239,68,68,.3);border-radius:6px;padding:2px 8px;font-size:11px;font-weight:800">📤 ${lang==='th'?'ขายต่อ':'RESELL'}</span>`
      :`<span style="background:rgba(59,130,246,.2);color:#60a5fa;border:1px solid rgba(59,130,246,.3);border-radius:6px;padding:2px 8px;font-size:11px;font-weight:800">🔄 ${lang==='th'?'เทรด':'TRADE'}</span>`;
    const dayLabel=`${l.day} ${lang==='th'?'มิ.ย.':'Jun'}`;
    const contact=[];
    if(l.twitter) contact.push(`<a href="https://twitter.com/${l.twitter.replace('@','')}" target="_blank" rel="noopener noreferrer" style="color:#60a5fa;text-decoration:none">🐦 ${l.twitter}</a>`);
    if(l.lineId) contact.push(`<span style="color:#4ade80">💬 LINE: ${l.lineId}</span>`);
    const lookingPart=l.listingType==='trade'&&l.lookingForZones?.length
      ?`<div style="margin-top:8px;font-size:11px;color:rgba(255,255,255,.6)"><strong style="color:#fde68a">${lang==='th'?'Looking for:':'Looking for:'}</strong> ${l.lookingForZones.join(', ')}</div>`:'';
    const notePart=l.note?`<div style="margin-top:6px;font-size:11px;color:rgba(255,255,255,.5);font-style:italic">"${l.note}"</div>`:'';
    const timeAgo=formatTimeAgo(l.createdAt);
    const priceColor=isResell?'#f87171':'#60a5fa';
    return `<div style="background:var(--card);border:1px solid var(--bdr);border-radius:16px;padding:16px;box-shadow:0 4px 15px rgba(0,0,0,0.1);display:flex;flex-direction:column;gap:8px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;flex-wrap:wrap">
        ${typeBadge}
        <span style="font-size:11px;color:rgba(255,255,255,.35)">${timeAgo}</span>
      </div>
      <div style="font-size:20px;font-weight:800;color:${priceColor};letter-spacing:.02em">${Number(l.originalPrice||0).toLocaleString()}฿</div>
      <div style="font-size:13px;font-weight:700;color:rgba(255,255,255,.9)">
        📅 ${dayLabel} &nbsp;|&nbsp; Zone <strong style="color:${ZONES[l.mainZone]?.mainColor||'var(--lav)'}">${l.subZone||l.mainZone}</strong> &nbsp;แถว ${l.row} ที่นั่ง ${l.seatNum}
      </div>
      ${lookingPart}
      <div style="font-size:12px;display:flex;flex-direction:column;gap:4px;margin-top:4px">${contact.join('')}</div>
      ${notePart}
      <div style="display:flex;gap:8px;margin-top:8px;flex-wrap:wrap">
        <a href="${l.proofDriveUrl}" target="_blank" rel="noopener noreferrer" style="padding:6px 12px;background:rgba(167,139,250,.12);border:1px solid rgba(167,139,250,.3);border-radius:8px;color:#a78bfa;font-size:11px;font-weight:700;text-decoration:none" data-th="🖼 ดูหลักฐาน" data-en="🖼 View Proof">🖼 ${lang==='th'?'ดูหลักฐาน':'View Proof'}</a>
        <button onclick="openCloseListingModal('${l.listingId}')" style="padding:6px 12px;background:rgba(239,68,68,.1);border:1px solid rgba(239,68,68,.25);border-radius:8px;color:#f87171;font-size:11px;font-weight:700;cursor:pointer;font-family:'Noto Sans Thai',sans-serif" data-th="🔐 ปิดประกาศ" data-en="🔐 Close">🔐 ${lang==='th'?'ปิดประกาศ':'Close'}</button>
      </div>
    </div>`;
  }).join('');
}

function formatTimeAgo(isoStr){
  if(!isoStr) return '';
  const diff=(Date.now()-new Date(isoStr).getTime())/1000;
  if(diff<60) return lang==='th'?'เมื่อกี้':'just now';
  if(diff<3600) return `${Math.floor(diff/60)}${lang==='th'?' นาทีที่แล้ว':' min ago'}`;
  if(diff<86400) return `${Math.floor(diff/3600)}${lang==='th'?' ชั่วโมงที่แล้ว':' hr ago'}`;
  return `${Math.floor(diff/86400)}${lang==='th'?' วันที่แล้ว':' day(s) ago'}`;
}

/* ─ Seat map marketplace badges ─ */
let MARKETPLACE_SEAT_MAP={};

function buildMarketplaceSeatMap(){
  MARKETPLACE_SEAT_MAP={};
  getMarketplaceData().forEach(l=>{
    const key=`${l.day}|${String(l.subZone||'').toUpperCase()}|${String(l.row||'').toUpperCase()}|${Number(l.seatNum||0)}`;
    MARKETPLACE_SEAT_MAP[key]=l;
  });
}

function getMarketplaceBadgeForSeat(day,subZone,row,seatNum){
  if(!day) return null; // when no day filter, don't show badges
  const key=`${day}|${String(subZone||'').toUpperCase()}|${String(row||'').toUpperCase()}|${Number(seatNum||0)}`;
  return MARKETPLACE_SEAT_MAP[key]||null;
}

/* ─ Transfer Code verify (buyer side — ก่อน submit ที่นั่ง) ─ */
function clearMpTCStatus(){
  const s=document.getElementById('reg-mp-tc-status');
  if(s) s.innerHTML='';
}
async function verifyMpTC(){
  const tc=(document.getElementById('reg-mp-tc')?.value||'').trim();
  const statusEl=document.getElementById('reg-mp-tc-status');
  const btn=document.getElementById('reg-mp-tc-btn');
  if(!tc){
    if(statusEl) statusEl.innerHTML=`<span style="color:#f87171">❌ ${lang==='th'?'กรอก Transfer Code ก่อน':'Enter Transfer Code first'}</span>`;
    return;
  }
  if(!GAS_URL){
    if(statusEl) statusEl.innerHTML=`<span style="color:#fde68a">⚠️ ต้องตั้งค่า GAS URL ก่อนตรวจสอบ TC</span>`;
    return;
  }
  if(btn){btn.disabled=true;btn.textContent='⏳...';}
  try{
    const url=`${GAS_URL}${GAS_URL.includes('?')?'&':'?'}action=verify_marketplace_tc&tc=${encodeURIComponent(tc)}&t=${Date.now()}`;
    const res=await fetch(url,{method:'GET'});
    if(!res.ok) throw new Error(`Status ${res.status}`);
    const json=await res.json();
    if(String(json?.status||'').toLowerCase()==='ok'&&json?.listingData){
      const d=json.listingData;
      const dayLabel=`${d.day} ${lang==='th'?'มิ.ย.':'Jun'}`;
      const expStr=d.transferCodeExpiresAt?new Date(d.transferCodeExpiresAt).toLocaleString(lang==='th'?'th-TH':'en-US',{dateStyle:'short',timeStyle:'short'}):'';
      if(statusEl) statusEl.innerHTML=`<span style="color:#4ade80">✅ ${lang==='th'?'TC ถูกต้อง!':'Valid Transfer Code!'}</span> <span style="color:rgba(255,255,255,.7);font-size:11px">Day ${dayLabel} · Zone <strong>${d.subZone||d.mainZone}</strong> ${lang==='th'?'แถว':'Row'} ${d.row} ${lang==='th'?'ที่':'Seat'} ${d.seatNum} · ${Number(d.originalPrice||0).toLocaleString()}฿${expStr?` · ${lang==='th'?'หมดอายุ':'Expires'} ${expStr}`:''}</span>`;
    } else {
      if(statusEl) statusEl.innerHTML=`<span style="color:#f87171">❌ ${json?.message||'Transfer Code ไม่ถูกต้องหรือหมดอายุแล้ว'}</span>`;
    }
  }catch(err){
    if(statusEl) statusEl.innerHTML=`<span style="color:#f87171">❌ ตรวจสอบไม่สำเร็จ: ${err.message||'Error'}</span>`;
  } finally {
    if(btn){btn.disabled=false;btn.textContent=lang==='th'?'🔍 ตรวจสอบ':'Verify';}
  }
}

/* ══════════════════════════════════════
   MARKETPLACE INIT (ต่อท้าย)
══════════════════════════════════════ */
buildMpLookingForChips();
syncMarketplaceData().then(()=>buildMarketplaceSeatMap());

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
