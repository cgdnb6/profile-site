:root{
  --bg: #0b1220;
  --card: rgba(255,255,255,0.06);
  --text: rgba(255,255,255,0.92);
  --muted: rgba(255,255,255,0.65);
  --line: rgba(255,255,255,0.14);
  --brand: #7c5cff;
  --brand2: #20c997;
  --shadow: 0 20px 60px rgba(0,0,0,0.35);
}

:root[data-theme="light"]{
  --bg: #f6f8ff;
  --card: rgba(10, 20, 40, 0.06);
  --text: rgba(10,20,40,0.92);
  --muted: rgba(10,20,40,0.62);
  --line: rgba(10, 20, 40, 0.14);
  --brand: #4c6fff;
  --brand2: #0ca678;
  --shadow: 0 18px 55px rgba(10,20,40,0.12);
}

*{ box-sizing: border-box; }
html{ scroll-behavior: smooth; }
body{
  margin: 0;
  font-family: ui-sans-serif, system-ui, -apple-system, "PingFang SC", "Microsoft YaHei", Arial;
  background: radial-gradient(1200px 700px at 10% 5%, rgba(124,92,255,0.25), transparent 60%),
              radial-gradient(900px 600px at 90% 15%, rgba(32,201,151,0.18), transparent 55%),
              var(--bg);
  color: var(--text);
}

.container{
  width: min(1080px, calc(100% - 40px));
  margin: 0 auto;
}

.header{
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--line);
  background: rgba(0,0,0,0.12);
}
:root[data-theme="light"] .header{ background: rgba(246,248,255,0.75); }

.header__inner{
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 0;
  gap: 18px;
}

.brand{
  display:flex;
  align-items:center;
  gap: 12px;
  min-width: 280px;
}
.brand__avatar{
  width: 42px;
  height: 42px;
  border-radius: 12px;
  display:grid;
  place-items:center;
  font-weight: 800;
  background: linear-gradient(135deg, var(--brand), var(--brand2));
  color: white;
  box-shadow: var(--shadow);
}
.brand__name{ font-weight: 800; letter-spacing: 0.5px; }
.brand__title{ font-size: 12px; color: var(--muted); margin-top: 2px; }

.nav{
  display:flex;
  align-items:center;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: flex-end;
}
.nav a{
  color: var(--muted);
  text-decoration: none;
  font-size: 14px;
  padding: 8px 10px;
  border-radius: 10px;
}
.nav a:hover{
  background: rgba(255,255,255,0.06);
  color: var(--text);
}

.btn{
  border: 1px solid var(--line);
  background: transparent;
  color: var(--text);
  padding: 8px 10px;
  border-radius: 10px;
  cursor: pointer;
}
.btn--ghost:hover{ background: rgba(255,255,255,0.06); }

.hero{
  padding: 34px 0 10px;
}
h1{
  margin: 10px 0 10px;
  font-size: 40px;
  letter-spacing: 0.2px;
}
.highlight{
  background: linear-gradient(135deg, var(--brand), var(--brand2));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.lead{
  margin: 0;
  color: var(--muted);
  font-size: 16px;
  line-height: 1.8;
  max-width: 760px;
}
.chips{
  margin-top: 16px;
  display:flex;
  flex-wrap: wrap;
  gap: 10px;
}
.chip{
  font-size: 13px;
  color: var(--text);
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.06);
  padding: 7px 10px;
  border-radius: 999px;
}

.card{
  margin: 16px 0;
  padding: 18px 18px;
  border: 1px solid var(--line);
  background: var(--card);
  border-radius: 16px;
  box-shadow: var(--shadow);
}
.card h2{ margin: 0 0 10px; }
.card h3{ margin: 10px 0 8px; }
.card ul{ margin: 8px 0 0 18px; color: var(--muted); line-height: 1.9; }
.muted{ color: var(--muted); }

.grid{
  display:grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.timeline{
  display:flex;
  flex-direction: column;
  gap: 14px;
}
.tl-item{
  display:grid;
  grid-template-columns: 170px 1fr;
  gap: 12px;
  padding: 12px;
  border: 1px dashed var(--line);
  border-radius: 14px;
}
.tl-time{ color: var(--muted); font-size: 13px; padding-top: 2px; }
.tl-content h3{ margin: 0 0 6px; font-size: 16px; }

.skills{ display:grid; grid-template-columns: 1fr 1fr; gap: 10px; }
.skills__group{
  padding: 12px;
  border: 1px dashed var(--line);
  border-radius: 14px;
}
.skills__group h4{ margin: 0 0 6px; }
.skills__group p{ margin: 0; color: var(--muted); line-height: 1.8; }

.details{ margin-top: 12px; }
.details summary{ cursor: pointer; color: var(--text); }
.tip{ margin-top: 10px; font-size: 13px; }

.contact{
  display:grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
}
.contact__item{
  padding: 12px;
  border: 1px dashed var(--line);
  border-radius: 14px;
}
.label{ color: var(--muted); font-size: 12px; }
.value{ margin-top: 6px; }
.value a{ color: var(--text); text-decoration: none; border-bottom: 1px dashed var(--line); }
.value a:hover{ border-bottom-color: transparent; }

.footer{
  padding: 18px 0 34px;
  text-align: center;
}

@media (max-width: 900px){
  .grid{ grid-template-columns: 1fr; }
  .tl-item{ grid-template-columns: 1fr; }
  .contact{ grid-template-columns: 1fr; }
  h1{ font-size: 32px; }
}
