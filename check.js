// Runs index.html's real selftest logic in node against the real bank,
// plus the one thing a browser cannot check: that every sign file exists on disk.
const fs=require('fs'), path=require('path'), vm=require('vm');
const html=fs.readFileSync('index.html','utf8');
const ctx={console, document:{body:{}}, location:{search:''}};
vm.createContext(ctx);
const run=(code,name)=>vm.runInContext(code,ctx,{filename:name});
run(fs.readFileSync('bank.js','utf8'),'bank.js');
run(fs.readFileSync('signs.js','utf8'),'signs.js');
const grab=(start,end)=>{const a=html.indexOf(start);const b=html.indexOf(end,a);
  if(a<0||b<0)throw new Error('anchor not found: '+start);return html.slice(a,b);};
run(grab("const CATS = {","/* ---------- shell"),'data+helpers');
run(grab("function pool()","function startExam"),'paper');
run(grab("function selftest()","const fromHash"),'selftest');
ctx.document.body.innerHTML='';
ctx.selftest();
const out=ctx.document.body.innerHTML.replace(/<[^>]+>/g,'');
console.log(out);

const missing=vm.runInContext("SIGNS.map(s=>s.img)",ctx)
  .filter(p=>!fs.existsSync(path.join(__dirname,p)));
console.log(missing.length ? 'MISSING ARTWORK: '+missing.join(', ')
                           : `artwork: all ${vm.runInContext("SIGNS.length",ctx)} sign files present on disk`);

// the handbook link is relative, so the PDF must sit beside index.html
const pdf=(html.match(/RES\s*=\s*\{\s*pdf:'([^']+)'/)||[])[1];
const pdfOk=!!pdf && fs.existsSync(path.join(__dirname,pdf));
console.log(pdfOk ? `handbook link: ${pdf} present on disk` : `MISSING HANDBOOK PDF: ${pdf}`);
const stats=vm.runInContext(`(()=>{const c={};BANK.forEach(q=>c[q.c]=(c[q.c]||0)+1);
  return JSON.stringify({total:BANK.length,perCategory:c,carOnly:BANK.filter(q=>q.car).length,quota:QUOTA});})()`,ctx);
console.log(stats);
process.exit(/^PASS/.test(out.trim()) && !missing.length && pdfOk ? 0 : 1);
