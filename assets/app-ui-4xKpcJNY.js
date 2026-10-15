import{a as Ot}from"./articles-data-RaYRrJHw.js";import{E as no,r as ao}from"./view-question-bank-Cfu9mnX2.js";import{t as tt}from"./traps-analysis-data-CBLkF90D.js";import{h as Pt}from"./vendor-html2canvas-BfYXEYrK.js";const le="https://api.planexapp.ir";typeof window<"u"&&(window.API_BASE_URL=le);const Le=["#EF4444","#F97316","#F59E0B","#EAB308","#84CC16","#10B981","#14B8A6","#06B6D4","#0EA5E9","#3B82F6","#6366F1","#8B5CF6","#D946EF","#EC4899","#F43F5E","#831843","#BE185D","#6D28D9","#1E40AF","#047857","#4D7C0F","#B45309","#C2410C","#475569"],qe=[{code:"cat_dakheli",title:"داخلی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#0EA5E9",icon:"🫀"},{code:"cat_jarahi",title:"جراحی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#EF4444",icon:"🔪"},{code:"cat_atfal",title:"اطفال",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#F59E0B",icon:"👶"},{code:"cat_zanan",title:"زنان و زایمان",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#EC4899",icon:"🌸"},{code:"cat_ravan",title:"روانپزشکی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#8B5CF6",icon:"🧠"},{code:"cat_ofooni",title:"عفونی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#10B981",icon:"🦠"},{code:"cat_neuro",title:"نورولوژی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#06B6D4",icon:"⚡"},{code:"cat_minor",title:"مینورها",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#6366F1",icon:"🩺"},{code:"cat_zist",title:"زیست‌شناسی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#14B8A6",icon:"🧬"},{code:"cat_shimi",title:"شیمی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#F97316",icon:"🧪"},{code:"cat_fizik",title:"فیزیک",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#3B82F6",icon:"⚛️"},{code:"cat_riazi",title:"ریاضی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#A855F7",icon:"📐"}],st=[{code:"non_sports",title:"ورزش و تندرستی",icon:"🏃",color:"#f59e0b",group:"غیردرسی",isStudy:!1},{code:"non_rest",title:"استراحت و تفریح",icon:"☕",color:"#8b5cf6",group:"غیردرسی",isStudy:!1},{code:"non_sleep",title:"خواب و ریکاوری",icon:"😴",color:"#6366f1",group:"غیردرسی",isStudy:!1},{code:"non_meal",title:"میان‌وعده و تغذیه",icon:"🍎",color:"#10b981",group:"غیردرسی",isStudy:!1},{code:"non_personal",title:"کارهای شخصی",icon:"📱",color:"#ec4899",group:"غیردرسی",isStudy:!1}];function me(o){const e=Math.max(0,Math.round(Number(o)||0)),t=i=>String(i).replace(/[0-9]/g,r=>"۰۱۲۳۴۵۶۷۸۹"[r]);if(e===0)return"۰ دقیقه";if(e<60)return`${t(e)} دقیقه`;const n=Math.floor(e/60),a=e%60;return a===0?`${t(n)} ساعت`:`${t(n)} ساعت و ${t(a)} دقیقه`}function Oe(o){return o?typeof o.isStudy=="boolean"?o.isStudy:o.group==="علمی"||["ع-س","ع-ک","ع-م","ع-غ"].includes(o.code)||typeof o.code=="string"&&(o.code.startsWith("cat_")||o.code.startsWith("cust_"))&&o.group!=="غیرعلمی":!1}function ot(o=[]){const e=new Set((o||[]).map(n=>(n.color||"").toUpperCase()));for(const n of Le)if(!e.has(n.toUpperCase()))return n;const t=(o?o.length:0)%Le.length;return Le[t]}const Qe=[{id:"Q1",emoji:"🔴",title:"فوری و مهم",subtitle:"ضروری / بحرانی — همین حالا انجام بده",color:"#ef4444",softBg:"rgba(239, 68, 68, 0.10)",borderColor:"rgba(239, 68, 68, 0.38)"},{id:"Q2",emoji:"🔵",title:"مهم و غیرفوری",subtitle:"برنامه‌ریزی / رشد — زمان‌بندی کن",color:"#3b82f6",softBg:"rgba(59, 130, 246, 0.10)",borderColor:"rgba(59, 130, 246, 0.38)"},{id:"Q3",emoji:"🟡",title:"فوری و غیرمهم",subtitle:"پیگیری سریع — واگذار یا سریع تمام کن",color:"#f59e0b",softBg:"rgba(245, 158, 11, 0.10)",borderColor:"rgba(245, 158, 11, 0.38)"},{id:"Q4",emoji:"⚪",title:"غیرفوری و غیرمهم",subtitle:"کم‌اهمیت / تفریحی — حذف یا محدود کن",color:"#94a3b8",softBg:"rgba(148, 163, 184, 0.10)",borderColor:"rgba(148, 163, 184, 0.32)"}],yt="Q2";function rt(o){return Qe.find(e=>e.id===o)||Qe[1]}const mt=["Q1","Q2","Q3","Q4"],bt="Q2",_={WEEKS:"planex_weeks",CURRENT_WEEK_ID:"planex_current_week_id",HOURLY_LOGS:"planex_hourly_logs",CATEGORIES:"planex_categories",HABITS:"planex_habits",ROUTINES:"planex_routines",DAILY_PLANS:"planex_daily_plans",WEEKLY_GOALS:"planex_weekly_goals",STUDY_TARGETS:"planex_study_targets",EVALUATIONS:"planex_evaluations",INTERRUPTIONS:"planex_interruptions",REMINDERS:"planex_reminders",GAMIFICATION:"planex_gamification",GRATITUDE_NOTES:"planex_gratitude_notes",COUNTDOWN_EVENTS:"planex_countdown_events",USER_PROFILE:"planex_user_profile",CUSTOM_SUBJECTS:"planex_custom_subjects",RECORDED_TIMER:"planex_recorded_timer",ACTIVE_THEME:"planex_active_theme",FLASHCARDS:"planex_flashcards",USER_GROUP_DATA:"planex_user_group_data",USER_GROUPS:"planex_user_groups",ACTIVE_GROUP_CODE:"planex_active_group_code",PERSONAL_SYNC_TOKEN:"planex_personal_sync_token",LAST_PERSONAL_SYNC:"planex_last_personal_sync"};function $e(o){if(!o||typeof o!="string")return!0;const e=o.trim().replace(/\u200C/g," ").replace(/\s+/g," ");return["","کاربر","کاربر پلنکس","دانشجو","دانش آموز","دانش آموز پر تلاش","دانش آموز پرتلاش","دانش‌آموز پرتلاش","دانش‌آموز پر تلاش","داوطلب پرتلاش","داوطلب پر تلاش","x","X"].includes(e)||e.toLowerCase()==="x"}class io{markModifiedAndSync(e=!1){const t=Date.now();try{localStorage.setItem("planex_last_modified",String(t)),localStorage.setItem("planex_has_unsynced_changes","true")}catch{}}exportAllDataJSON(){const e={},[t,n,a]=this.getTodayJalali();e._backup_metadata={app:"PlanEx Time Manager",version:"1.0.0",exportDate:`${t}/${n}/${a}`,exportedAt:new Date().toISOString()};for(let l=0;l<localStorage.length;l++){const c=localStorage.key(l);if(c&&(c.startsWith("planex_")||c.startsWith("theme_")||c.startsWith("app_")||c.startsWith("timer_")))try{e[c]=JSON.parse(localStorage.getItem(c))}catch{e[c]=localStorage.getItem(c)}}const i=localStorage.getItem("planex_user_avatar");i&&(e.planex_user_avatar=i);const r=localStorage.getItem("planex_last_modified");r&&(e.planex_last_modified=Number(r)||r);const d=localStorage.getItem(_.DAILY_PLANS)||localStorage.getItem("planex_eisenhower")||localStorage.getItem("daily_plans");if(d)try{const l=JSON.parse(d);e[_.DAILY_PLANS]=l,e.planex_daily_plans=l,e.planex_eisenhower=l,e.daily_plans=l}catch{}const s=localStorage.getItem(_.WEEKLY_GOALS)||localStorage.getItem("planex_weekly_goals")||localStorage.getItem("weekly_goals");if(s)try{const l=JSON.parse(s);e[_.WEEKLY_GOALS]=l,e.planex_weekly_goals=l,e.weekly_goals=l}catch{}return JSON.stringify(e,null,2)}importAllDataJSON(e,t=!1){var n,a,i;try{const r=typeof e=="string"?JSON.parse(e):e;if(typeof r!="object"||r===null)throw new Error("فرمت فایل پشتیبان معتبر نیست.");const d=this.getEffectiveUserName();Object.keys(r).forEach(s=>{if(s==="_backup_metadata")return;const l=r[s];if(l!=null){if((s===_.USER_GROUPS||s==="planex_user_groups"||s==="planex_my_groups"||s==="planex_my_rooms")&&Array.isArray(l)){if(t){localStorage.setItem(s,JSON.stringify(l));return}if(l.length===0){const c=this.getUserGroups();if(c&&c.length>0)return}}if((s==="planex_recent_activity_sessions"||s==="planex_study_logs")&&Array.isArray(l)){if(t){localStorage.setItem(s,JSON.stringify(l));return}if(l.length===0)try{const c=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),y=JSON.parse(localStorage.getItem("planex_study_logs")||"[]");if(Array.isArray(c)&&c.length>0||Array.isArray(y)&&y.length>0)return}catch{}else try{const c=JSON.parse(localStorage.getItem(s)||"[]");if(Array.isArray(c)&&c.length>0){const y=new Map;[...c,...l].forEach(u=>{if(!u||typeof u!="object")return;const b=u.id||`${u.date||u.dateStr}_${u.startTime||u.timestamp||u.subject}_${u.duration||u.minutes}`;y.set(b,u)});const m=Array.from(y.values());localStorage.setItem(s,JSON.stringify(m));return}}catch{}}if((s===_.DAILY_PLANS||s==="planex_daily_plans"||s==="planex_eisenhower"||s==="daily_plans")&&typeof l=="object"&&l!==null)try{if(t){localStorage.setItem(_.DAILY_PLANS,JSON.stringify(l)),localStorage.setItem("planex_eisenhower",JSON.stringify(l)),localStorage.setItem("daily_plans",JSON.stringify(l));return}const c=localStorage.getItem(_.DAILY_PLANS)||localStorage.getItem("planex_eisenhower")||"{}";let y={};try{y=JSON.parse(c)}catch{y={}}(typeof y!="object"||y===null)&&(y={});const m={...y};Object.keys(l).forEach(u=>{if(!Array.isArray(m[u]))m[u]=Array.isArray(l[u])?l[u]:[];else if(Array.isArray(l[u])){const b=new Map;m[u].forEach(g=>{g&&g.id&&b.set(String(g.id),g)}),l[u].forEach(g=>{g&&g.id&&!b.has(String(g.id))&&b.set(String(g.id),g)}),m[u]=Array.from(b.values())}}),localStorage.setItem(_.DAILY_PLANS,JSON.stringify(m)),localStorage.setItem("planex_eisenhower",JSON.stringify(m));return}catch{}if((s===_.WEEKLY_GOALS||s==="planex_weekly_goals"||s==="weekly_goals")&&typeof l=="object"&&l!==null)try{if(t){localStorage.setItem(_.WEEKLY_GOALS,JSON.stringify(l)),localStorage.setItem("planex_weekly_goals",JSON.stringify(l)),localStorage.setItem("weekly_goals",JSON.stringify(l));return}const c=localStorage.getItem(_.WEEKLY_GOALS)||"{}";let y={};try{y=JSON.parse(c)}catch{y={}}(typeof y!="object"||y===null)&&(y={});const m={...y};Object.keys(l).forEach(u=>{if(!Array.isArray(m[u]))m[u]=Array.isArray(l[u])?l[u]:[];else if(Array.isArray(l[u])){const b=new Map;m[u].forEach(g=>{g&&g.id&&b.set(String(g.id),g)}),l[u].forEach(g=>{g&&g.id&&!b.has(String(g.id))&&b.set(String(g.id),g)}),m[u]=Array.from(b.values())}}),localStorage.setItem(_.WEEKLY_GOALS,JSON.stringify(m));return}catch{}if((s===_.HABITS||s===_.ROUTINES||s==="planex_habits"||s==="planex_routines")&&Array.isArray(l))try{if(t){if(this.saveRoutines(l,!1),r.planex_deleted_habit_ids)try{const f=typeof r.planex_deleted_habit_ids=="string"?r.planex_deleted_habit_ids:JSON.stringify(r.planex_deleted_habit_ids);localStorage.setItem("planex_deleted_habit_ids",f)}catch{}return}let c={};try{const f=localStorage.getItem("planex_deleted_habit_ids");if(f){const x=JSON.parse(f);Array.isArray(x)?x.forEach(w=>{c[String(w)]=1}):typeof x=="object"&&x!==null&&(c=x)}}catch{}if(r.planex_deleted_habit_ids)try{const f=typeof r.planex_deleted_habit_ids=="string"?JSON.parse(r.planex_deleted_habit_ids):r.planex_deleted_habit_ids;Array.isArray(f)?f.forEach(x=>{c[String(x)]=1}):typeof f=="object"&&f!==null&&(c={...c,...f}),localStorage.setItem("planex_deleted_habit_ids",JSON.stringify(c))}catch{}const y=f=>{if(!f)return!0;const x=String(f.id||""),w=String(f.title||"").trim(),A=c[x],k=c[w];if(A!==void 0||k!==void 0){const $=Math.max(Number(A||0),Number(k||0)),M=Number(f.updatedAt||f.updated_at||0);if($===1||$===0||M<=$)return!0}return!1},m=this.getHabits()||[],u=Number(localStorage.getItem("planex_routines_updated_at")||0);if(l.length===0){if(m.length>0&&u>0)return;this.saveRoutines([],!1);return}const b=new Map;m.forEach(f=>{f&&(f.id||f.title)&&!y(f)&&b.set(String(f.id||f.title),f)}),l.forEach(f=>{var w,A;if(!f||typeof f!="object"||y(f))return;const x=String(f.id||f.title);if(b.has(x)){const k=b.get(x),$=Number(k.updatedAt||k.updated_at||0),M=Number(f.updatedAt||f.updated_at||0),I=$>M,D={},T=new Set([...Object.keys(k.completedDays||{}),...Object.keys(f.completedDays||{})]);for(const N of T)D[N]={...((w=k.completedDays)==null?void 0:w[N])||{},...((A=f.completedDays)==null?void 0:A[N])||{}};b.set(x,{...I?f:k,...I?k:f,completedDays:D})}else{const k=Number(f.updatedAt||f.updated_at||0);if(b.size>0&&u>0&&k<=u)return;b.set(x,f)}});const g=Array.from(b.values()).filter(f=>!y(f));this.saveRoutines(g,!1);return}catch{}(s==="planex_user_nickname"||s==="planex_nickname"||s==="planex_leaderboard_nickname")&&typeof l=="string"&&d&&$e(l)||(s===_.USER_PROFILE&&typeof l=="object"&&l!==null&&d&&$e(l.name)&&(l.name=d,l.nickname=d),(s===_.STUDY_TARGETS||s==="planex_study_targets")&&typeof l=="object"&&l!==null&&(l.dailyStudyGoalHours!=null&&l.dailyTargetHours==null?l.dailyTargetHours=l.dailyStudyGoalHours:l.dailyTargetHours!=null&&l.dailyStudyGoalHours==null&&(l.dailyStudyGoalHours=l.dailyTargetHours)),typeof l=="object"?localStorage.setItem(s,JSON.stringify(l)):localStorage.setItem(s,String(l)))}});try{const s=r.planex_user_avatar||r.avatar||(typeof r.planex_user_profile=="object"?((n=r.planex_user_profile)==null?void 0:n.avatar)||((a=r.planex_user_profile)==null?void 0:a.avatar_url):null)||(typeof r.planex_auth_user=="object"?(i=r.planex_auth_user)==null?void 0:i.avatar_url:null);if(s){localStorage.setItem("planex_user_avatar",s);const l=JSON.parse(localStorage.getItem(_.USER_PROFILE)||"{}");l.avatar=s,l.avatar_url=s,l.photo=s,l.photoUrl=s,localStorage.setItem(_.USER_PROFILE,JSON.stringify(l));const c=JSON.parse(localStorage.getItem("planex_auth_user")||"{}");c&&typeof c=="object"&&Object.keys(c).length>0&&(c.avatar_url=s,c.photo_url=s,c.avatar=s,localStorage.setItem("planex_auth_user",JSON.stringify(c)),localStorage.setItem("planex_user_account",JSON.stringify(c))),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("profileUpdated"))}}catch{}return this.hydrateAndSyncState(),!0}catch(r){throw console.error("Import failed:",r),r}}getEffectiveUserName(){try{const e=[localStorage.getItem("planex_user_nickname"),localStorage.getItem("planex_nickname"),localStorage.getItem("planex_leaderboard_nickname")];try{const t=JSON.parse(localStorage.getItem(_.USER_PROFILE)||"{}");t&&(e.push(t.nickname),e.push(t.name),e.push(t.displayName))}catch{}try{const t=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}");t&&(e.push(t.full_name),e.push(t.name),e.push(t.nickname),e.push(t.first_name))}catch{}for(const t of e)if(t&&typeof t=="string"&&!$e(t))return t.trim()}catch{}return""}hydrateAndSyncState(){try{const e=this.getEffectiveUserName();if(e){localStorage.setItem("planex_user_nickname",e),localStorage.setItem("planex_nickname",e),localStorage.setItem("planex_leaderboard_nickname",e);try{const a=JSON.parse(localStorage.getItem(_.USER_PROFILE)||"{}");(a.name!==e||a.nickname!==e)&&(a.name=e,a.nickname=e,localStorage.setItem(_.USER_PROFILE,JSON.stringify(a)))}catch{}try{const a=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}");a&&typeof a=="object"&&Object.keys(a).length>0&&(a.name=e,a.full_name=e,a.nickname=e,localStorage.setItem("planex_auth_user",JSON.stringify(a)),localStorage.setItem("planex_user_account",JSON.stringify(a)))}catch{}}const t=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),n=JSON.parse(localStorage.getItem("planex_study_logs")||"[]");if(Array.isArray(t)&&Array.isArray(n)&&(t.length>0||n.length>0)){const a=new Map;[...t,...n].forEach(r=>{if(!r||typeof r!="object")return;const d=r.id||`${r.date||r.dateStr}_${r.startTime||r.timestamp||r.subject}_${r.duration||r.minutes}`;a.set(d,r)});const i=Array.from(a.values());i.sort((r,d)=>{const s=Number(r.timestamp||r.createdAt||0);return Number(d.timestamp||d.createdAt||0)-s}),localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(i)),localStorage.setItem("planex_study_logs",JSON.stringify(i))}this._breakdownMemoMap={}}catch(e){console.warn("[db] hydrateAndSyncState error:",e)}}constructor(){this.initDefaults(),this.hydrateAndSyncState()}gregorianToJalali(e,t,n){const a=[0,31,59,90,120,151,181,212,243,273,304,334];let i=t>2?e+1:e,r=355666+365*e+Math.floor((i+3)/4)-Math.floor((i+99)/100)+Math.floor((i+399)/400)+n+a[t-1],d=-1595+33*Math.floor(r/12053);r%=12053,d+=4*Math.floor(r/1461),r%=1461,r>365&&(d+=Math.floor((r-1)/365),r=(r-1)%365);let s=r<186?1+Math.floor(r/31):7+Math.floor((r-186)/30),l=1+(r<186?r%31:(r-186)%30);return[d,s,l]}jalaliToJdn(e,t,n){let a=e-(e>=0?474:473),i=474+a%2820;return n+(t<=7?(t-1)*31:(t-7)*30+186)+Math.floor((i*682-110)/2816)+(i-1)*365+Math.floor(a/2820)*1029983+1948320}jdnToJalali(e){let t=e-this.jalaliToJdn(475,1,1),n=Math.floor(t/1029983),a=t%1029983,i;if(a===1029982)i=2820;else{let c=Math.floor(a/366),y=a%366;i=Math.floor((2134*c+2816*y+2815)/1028522)+c+1}let r=474+2820*n+i,d=e-this.jalaliToJdn(r,1,1)+1,s,l;return d<=186?(s=Math.ceil(d/31),l=d-(s-1)*31):(s=Math.ceil((d-186)/30)+6,l=d-186-(s-7)*30),[r,s,l]}jdnToGregorian(e){let t=e+68569,n=Math.floor(4*t/146097);t=t-Math.floor((146097*n+3)/4);let a=Math.floor(4e3*(t+1)/1464001);t=t-Math.floor(1461*a/4)+31;let i=Math.floor(80*t/2447),r=t-Math.floor(2447*i/80);t=Math.floor(i/11);let d=i+2-12*t;return[100*(n-49)+a+t,d,r]}getJalaliDateTimestampRange(e=null){const t=this.normalizeJalaliDate(e||this.getTodayJalaliString()),n=t.split("/").map(Number),a=n[0]||1405,i=n[1]||1,r=n[2]||1,d=this.jalaliToJdn(a,i,r),[s,l,c]=this.jdnToGregorian(d),y=new Date(s,l-1,c,0,0,0,0),m=new Date(s,l-1,c,23,59,59,999);return{dateStr:t,startDate:y,endDate:m,startTimestamp:y.getTime(),endTimestamp:m.getTime()}}getTodayJalali(){const e=new Date;return this.gregorianToJalali(e.getFullYear(),e.getMonth()+1,e.getDate())}getTodayJdn(){const[e,t,n]=this.getTodayJalali();return this.jalaliToJdn(e,t,n)}getJalaliMonthLength(e,t){const n=this.jalaliToJdn(e,t,1);return(t===12?this.jalaliToJdn(e+1,1,1):this.jalaliToJdn(e,t+1,1))-n}getWeeksInMonth(e,t){const a=(this.jalaliToJdn(e,t,1)+2)%7;return Math.ceil((a+this.getJalaliMonthLength(e,t))/7)}initDefaults(){if(localStorage.getItem(_.WEEKS)&&localStorage.removeItem(_.WEEKS),!localStorage.getItem(_.CATEGORIES))localStorage.setItem(_.CATEGORIES,JSON.stringify(qe));else{let e=[];try{e=JSON.parse(localStorage.getItem(_.CATEGORIES)||"[]"),Array.isArray(e)||(e=[])}catch{e=[]}e=e.filter(i=>i&&typeof i=="object"&&i.code);const t=["ب","ع-ک","ع-م","ع-س","ع-غ","م","خ","ت","ش","تـ"],n=["تمرکز و بازآفرینی","کلاس و آموزش","تمرین و کارگاه گروهی","مطالعه و پژوهش","مطالعه آزاد","امور شغلی و کسب‌وکار","خواب","تفریح و ورزش","امور شخصی","زمان تلف شده"];if(e.some(i=>t.includes(i.code)||n.includes(i.title))){const i=e.filter(d=>!t.includes(d.code)&&!n.includes(d.title)),r=[...qe];i.forEach(d=>{r.some(s=>s.code===d.code||s.title===d.title)||r.push(d)}),e=r}e.length===0&&(e=[...qe]),localStorage.setItem(_.CATEGORIES,JSON.stringify(e))}localStorage.getItem(_.CUSTOM_SUBJECTS)||localStorage.setItem(_.CUSTOM_SUBJECTS,JSON.stringify([])),localStorage.getItem(_.STUDY_TARGETS)||localStorage.setItem(_.STUDY_TARGETS,JSON.stringify({dailyStudyGoalHours:8,weeklyStudyGoalHours:56,dailyTestGoalCount:150,weeklyTestGoalCount:1e3})),localStorage.getItem(_.USER_PROFILE)||localStorage.setItem(_.USER_PROFILE,JSON.stringify({name:"",major:"",targetField:""})),localStorage.getItem(_.COUNTDOWN_EVENTS)||localStorage.setItem(_.COUNTDOWN_EVENTS,JSON.stringify([{id:1,title:"کنکور سراسری ۱۴۰۵",jy:1405,jm:5,jd:29}])),localStorage.getItem(_.GAMIFICATION)||localStorage.setItem(_.GAMIFICATION,JSON.stringify({xp:0,level:1,streak:0,lastLogin:Date.now()})),localStorage.getItem(_.REMINDERS)||localStorage.setItem(_.REMINDERS,JSON.stringify([])),localStorage.getItem(_.INTERRUPTIONS)||localStorage.setItem(_.INTERRUPTIONS,JSON.stringify([])),this.purgeMockAndFutureData()}purgeMockAndFutureData(){try{const[e,t,n]=this.getTodayJalali(),a=this.jalaliToJdn(e,t,n),i=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]");if(Array.isArray(i)){const d=i.filter(s=>{if(!s||typeof s!="object")return!1;if(s.dateStr||s.date){const l=s.dateStr||s.date,c=String(l).split("/").map(Number);if(c.length===3&&!isNaN(c[0])&&!isNaN(c[1])&&!isNaN(c[2])&&this.jalaliToJdn(c[0],c[1],c[2])>a)return!1}return!(s.id&&typeof s.id=="string"&&(s.id.startsWith("mock_")||s.id.startsWith("dummy_")||s.id.startsWith("seed_")))});localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(d))}const r=JSON.parse(localStorage.getItem(_.RECORDED_TIMER)||"{}");if(typeof r=="object"&&r!==null){const d=new Date().toISOString().slice(0,10);let s=!1;Object.keys(r).forEach(l=>{l>d&&(delete r[l],s=!0)}),s&&localStorage.setItem(_.RECORDED_TIMER,JSON.stringify(r))}}catch(e){console.warn("purgeMockAndFutureData error:",e)}}getCurrentWeekStartDate(e=new Date){const t=new Date(e),n=(t.getDay()+1)%7,a=new Date(t.getFullYear(),t.getMonth(),t.getDate()-n);return a.setHours(0,0,0,0),a}getLiveCurrentWeekObject(e=new Date){const t=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],n=["هفته اول","هفته دوم","هفته سوم","هفته چهارم","هفته پنجم","هفته ششم"],a=["شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه"],i=this.getCurrentWeekStartDate(e),r=new Date(i.getFullYear(),i.getMonth(),i.getDate()+6),[d,s,l]=this.gregorianToJalali(i.getFullYear(),i.getMonth()+1,i.getDate()),[c,y,m]=this.gregorianToJalali(r.getFullYear(),r.getMonth()+1,r.getDate()),u=this.getJalaliWeekNumber(d,s,l),b=`${d}_${s}_${u}`,g=t[s-1],f=t[y-1],x=`${l} ${g} تا ${m} ${f}`,w=s>=7?d:d-1,A=w+1,k=`${w}-${A}`,$=[],M=this.getTodayJalaliString();for(let I=0;I<7;I++){const D=new Date(i.getFullYear(),i.getMonth(),i.getDate()+I),[T,N,C]=this.gregorianToJalali(D.getFullYear(),D.getMonth()+1,D.getDate()),P=`${T}/${String(N).padStart(2,"0")}/${String(C).padStart(2,"0")}`,L=this.normalizeJalaliDate(P)===M,q=this.getStudyMinutesByDate(P),F=this.getDailyTestCount(P);$.push({dayIndex:I,dayName:a[I],dateStr:P,dayOfMonth:C,monthName:t[N-1],year:T,monthIdx:N,isToday:L,studyMinutes:q,totalStudyMinutes:q,testsCount:F,testCount:F})}return{id:b,year:d,monthIdx:s,weekNum:u,month:g,weekNumber:n[u-1]||`هفته ${u}`,academicYear:k,startDate:`${l} ${g}`,endDate:`${m} ${f}`,dateRange:x,isCurrentWeek:!0,status:"current",days:$}}getWeekObject(e,t,n){const a=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],i=["هفته اول","هفته دوم","هفته سوم","هفته چهارم","هفته پنجم","هفته ششم"],r=F=>String(F).replace(/[0-9]/g,J=>"۰۱۲۳۴۵۶۷۸۹"[J]),d=["شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه"],s=this.jalaliToJdn(e,t,1),l=(s+2)%7,y=s-l+(n-1)*7,m=y+6,u=this.getTodayJdn(),b=u>=y&&u<=m;let g="current";u>m?g="past":u<y&&(g="future");const[f,x,w]=this.jdnToJalali(y),[A,k,$]=this.jdnToJalali(m),M=a[x-1],I=a[k-1],D=`${w} ${M} تا ${$} ${I}`,T=`${e}_${t}_${n}`,N=t>=7?e:e-1,C=N+1,P=`${r(N)}-${r(C)}`,L=[],q=this.getTodayJalaliString();for(let F=0;F<7;F++){const J=y+F;let G="",Q=e,V=t,X=1;try{[Q,V,X]=this.jdnToJalali(J),G=`${Q}/${String(V).padStart(2,"0")}/${String(X).padStart(2,"0")}`}catch{}const j=G?this.getStudyMinutesByDate(G):0,Z=G?this.getDailyTestCount(G):0,K=G?this.normalizeJalaliDate(G)===q:!1;L.push({dayIndex:F,dayName:d[F],dateStr:G,dayOfMonth:X,monthName:a[V-1],year:Q,monthIdx:V,isToday:K,studyMinutes:j,totalStudyMinutes:j,testsCount:Z,testCount:Z})}return{id:T,year:e,monthIdx:t,weekNum:n,month:a[t-1],weekNumber:i[n-1]||`هفته ${n}`,academicYear:P,startDate:`${w} ${M}`,endDate:`${$} ${I}`,dateRange:D,isCurrentWeek:b,status:g,days:L}}saveCurrentWeek(e){if(!(!e||!e.id))try{const t=JSON.parse(localStorage.getItem("planex_week_data")||"{}");t[e.id]=e,localStorage.setItem("planex_week_data",JSON.stringify(t));const n=JSON.parse(localStorage.getItem(_.WEEKS)||"{}");n[e.id]=e,localStorage.setItem(_.WEEKS,JSON.stringify(n))}catch(t){console.error("Error in saveCurrentWeek:",t)}}getJalaliWeekNumber(e,t,n){const a=this.jalaliToJdn(e,t,1),i=(a+2)%7,r=a-i,s=this.jalaliToJdn(e,t,n)-r,l=Math.floor(s/7)+1;return Math.min(this.getWeeksInMonth(e,t),Math.max(1,l))}getTodayWeekKey(){const[e,t,n]=this.getTodayJalali(),a=this.getJalaliWeekNumber(e,t,n);return`${e}_${t}_${a}`}getWeeks(){const e=this.getCurrentWeek(),t=[],n=this.getWeeksInMonth(e.year,e.monthIdx);for(let a=1;a<=n;a++)t.push(this.getWeekObject(e.year,e.monthIdx,a));return t}getCurrentWeek(e=new Date){const t=localStorage.getItem("planex_active_week_key");if(t){const n=t.split("_");if(n.length===3){const a=parseInt(n[0]),i=parseInt(n[1]),r=parseInt(n[2]);if(!isNaN(a)&&!isNaN(i)&&!isNaN(r)&&i>=1&&i<=12&&r>=1&&r<=this.getWeeksInMonth(a,i))return this.getWeekObject(a,i,r)}}return this.getLiveCurrentWeekObject(e)}setCurrentWeekKey(e){localStorage.setItem("planex_active_week_key",e),localStorage.setItem(_.CURRENT_WEEK_ID,e)}setCurrentWeek(e){this.setCurrentWeekKey(e)}goToPrevWeek(){const e=this.getCurrentWeek();let t=e.year,n=e.monthIdx,a=e.weekNum;a>1?a--:(n>1?n--:(n=12,t--),a=this.getWeeksInMonth(t,n)),this.setCurrentWeekKey(`${t}_${n}_${a}`)}goToNextWeek(){const e=this.getCurrentWeek();let t=e.year,n=e.monthIdx,a=e.weekNum;a<this.getWeeksInMonth(t,n)?a++:(a=1,n<12?n++:(n=1,t++)),this.setCurrentWeekKey(`${t}_${n}_${a}`)}resetToCurrentWeek(){this.setCurrentWeekKey(this.getTodayWeekKey())}hasDataForWeek(e){const t=this.getHourlyLogs(e);if(Object.keys(t).length>0)return!0;const n=this.getDailyPlans(e);if(n&&n.length>0)return!0;const a=this.getWeeklyGoals(e);return!!(a&&Object.keys(a).length>0)}deleteWeek(e){let t=this.getWeeks();t=t.filter(n=>n.id!=e),localStorage.setItem(_.WEEKS,JSON.stringify(t)),localStorage.getItem(_.CURRENT_WEEK_ID)==e&&t.length>0&&localStorage.setItem(_.CURRENT_WEEK_ID,t[0].id.toString())}getHourlyLogs(e){return JSON.parse(localStorage.getItem(_.HOURLY_LOGS)||"{}")[e]||{}}setHourlyLog(e,t,n,a,i=null,r=null,d=0,s=null,l=null,c=0){const y=JSON.parse(localStorage.getItem(_.HOURLY_LOGS)||"{}");y[e]||(y[e]={});const m=`${t}_${n}`;!a||a==="-"?delete y[e][m]:y[e][m]={categoryCode:a,note:i||"",subject:r||"",testCount:parseInt(d)||0,studyMethod:s||"",description:l||"",rating:parseInt(c)||0,updatedAt:Date.now()},localStorage.setItem(_.HOURLY_LOGS,JSON.stringify(y))}getCategories(){try{const e=JSON.parse(localStorage.getItem(_.CATEGORIES)||"[]");if(!Array.isArray(e)||e.length===0)return qe;const t=e.filter(n=>n&&typeof n=="object"&&n.code);return t.length>0?t:qe}catch{return qe}}getNextCategoryColor(){return ot(this.getCategories())}addCategory(e,t,n="علمی",a=null,i="",r="📚",d=!0){const s=this.getCategories(),l=a||ot(s),c=typeof d=="boolean"?d:n==="علمی",y={code:e||"cust_"+Date.now(),title:(t||"").trim(),group:n||(c?"علمی":"غیرعلمی"),isStudy:c,color:l,recommendedTarget:i||"",icon:r||(c?"📚":"☕")};return s.push(y),localStorage.setItem(_.CATEGORIES,JSON.stringify(s)),y}saveCategory(e){let t=this.getCategories();const n=e.isStudy!==void 0?!!e.isStudy:e.group==="علمی",a=e.code||"cust_"+Date.now(),i=t.findIndex(d=>d.code===a),r={code:a,title:(e.title||"").trim(),group:e.group||(n?"علمی":"غیرعلمی"),isStudy:n,color:e.color||ot(t),recommendedTarget:e.recommendedTarget||"",icon:e.icon||(n?"📚":"☕")};return i>=0?t[i]={...t[i],...r}:t.push(r),localStorage.setItem(_.CATEGORIES,JSON.stringify(t)),r}isCategoryStudy(e){if(!e)return!1;if(typeof e=="object")return Oe(e);const n=this.getCategories().find(a=>a.code===e);return Oe(n)}updateCategoryIcon(e,t){const n=this.getCategories(),a=n.find(i=>i.code===e);a&&(a.icon=t,localStorage.setItem(_.CATEGORIES,JSON.stringify(n)))}deleteCategory(e){try{let t=this.getCategories();return t=t.filter(n=>n&&n.code!==e),t.length===0&&(t=[...qe]),localStorage.setItem(_.CATEGORIES,JSON.stringify(t)),t}catch{return qe}}getNonStudyCategories(){try{const e=JSON.parse(localStorage.getItem("planex_deleted_nonstudy_codes")||"[]"),t=JSON.parse(localStorage.getItem("planex_custom_nonstudy_categories")||"[]"),n=Array.isArray(t)?t.filter(r=>r&&typeof r=="object"&&r.code):[],a=new Map;st.forEach(r=>a.set(r.code,r)),n.forEach(r=>a.set(r.code,r));const i=Array.from(a.values()).filter(r=>r&&!e.includes(r.code));return i.length>0?i:st}catch{return st}}addNonStudyCategory(e,t="☕",n="#f59e0b"){try{const a=JSON.parse(localStorage.getItem("planex_custom_nonstudy_categories")||"[]"),r={code:"non_cust_"+Date.now().toString(36)+Math.random().toString(36).substr(2,4),title:String(e).trim(),icon:t||"☕",color:n||"#f59e0b",group:"غیردرسی",isStudy:!1};return a.push(r),localStorage.setItem("planex_custom_nonstudy_categories",JSON.stringify(a)),r}catch{return{code:"non_"+Date.now(),title:e,icon:"☕",color:"#f59e0b",isStudy:!1}}}deleteNonStudyCategory(e){try{let t=JSON.parse(localStorage.getItem("planex_custom_nonstudy_categories")||"[]");Array.isArray(t)&&(t=t.filter(a=>a&&a.code!==e),localStorage.setItem("planex_custom_nonstudy_categories",JSON.stringify(t)));let n=JSON.parse(localStorage.getItem("planex_deleted_nonstudy_codes")||"[]");return n.includes(e)||(n.push(e),localStorage.setItem("planex_deleted_nonstudy_codes",JSON.stringify(n))),this.getNonStudyCategories()}catch{return st}}getCustomSubjects(){return JSON.parse(localStorage.getItem(_.CUSTOM_SUBJECTS)||"[]")}addCustomSubject(e){const t=this.getCustomSubjects();t.includes(e)||(t.push(e),localStorage.setItem(_.CUSTOM_SUBJECTS,JSON.stringify(t)))}deleteCustomSubject(e){let t=this.getCustomSubjects();t=t.filter(n=>n!==e),localStorage.setItem(_.CUSTOM_SUBJECTS,JSON.stringify(t))}getUniqueLoggedTopics(e=null){const t=new Set;try{const n=JSON.parse(localStorage.getItem(_.HOURLY_LOGS)||"{}");Object.values(n).forEach(r=>{r&&typeof r=="object"&&Object.values(r).forEach(d=>{if(d&&d.subject&&(!e||d.categoryCode===e)){const s=String(d.subject).trim();s&&t.add(s)}})});const a=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]");Array.isArray(a)&&a.forEach(r=>{if(r&&r.subject&&(!e||r.categoryCode===e)){const d=String(r.subject).trim();d&&t.add(d)}});const i=this.getCustomSubjects();Array.isArray(i)&&i.forEach(r=>{const d=String(r).trim();d&&t.add(d)})}catch{}return Array.from(t)}getRoutines(){return this.getHabits()}saveRoutines(e,t=!1){if(!Array.isArray(e))return[];try{localStorage.setItem(_.HABITS,JSON.stringify(e)),localStorage.setItem(_.ROUTINES,JSON.stringify(e));const n=Date.now();localStorage.setItem("planex_routines_updated_at",String(n)),localStorage.setItem("planex_last_modified",String(n))}catch(n){console.error("Error saving routines:",n)}return e}getHabits(){let e=localStorage.getItem(_.HABITS)||localStorage.getItem(_.ROUTINES),t=[];try{t=JSON.parse(e||"[]"),Array.isArray(t)||(t=[])}catch{t=[]}let n=!1;const a=new Set;return t.forEach((i,r)=>{!i||typeof i!="object"||((!i.id||a.has(i.id))&&(i.id=Date.now().toString()+"_"+r+"_"+Math.random().toString(36).substr(2,9),n=!0),a.add(i.id))}),n&&(localStorage.setItem(_.HABITS,JSON.stringify(t)),localStorage.setItem(_.ROUTINES,JSON.stringify(t))),t}addHabit(e,t="روزانه",n="08:00",a=null){const i=this.getHabits();let r=a,d=String(e||"").trim();const s=d.match(new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Presentation}|\\uD83C[\\uDF00-\\uDFFF]|\\uD83D[\\uDC00-\\uDE4F]|\\uD83E[\\uDD00-\\uDDFF]|\\uD83D[\\uDE80-\\uDEFF]|[\\u2600-\\u27BF])\\s*","u"));s&&(r||(r=s[1]),d=d.substring(s[0].length).trim()),r||(r="✨");try{const y=localStorage.getItem("planex_deleted_habit_ids");if(y){let m=JSON.parse(y),u=!1;typeof m=="object"&&m!==null&&(d&&m[d]&&(delete m[d],u=!0),e&&m[e]&&(delete m[e],u=!0),u&&localStorage.setItem("planex_deleted_habit_ids",JSON.stringify(m)))}}catch{}const l=Date.now(),c={id:l.toString()+"_"+i.length+"_"+Math.random().toString(36).substr(2,9),title:d||e,emoji:r,frequency:t,targetTime:n,daysCompleted:[!1,!1,!1,!1,!1,!1,!1],completedDays:{},updatedAt:l};return i.push(c),this.saveRoutines(i),c}updateHabit(e,t={}){const n=this.getHabits(),a=n.find(i=>i.id==e||String(i.id)===String(e));if(a){if(t.title!==void 0){let i=String(t.title).trim();const r=i.match(new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Presentation}|\\uD83C[\\uDF00-\\uDFFF]|\\uD83D[\\uDC00-\\uDE4F]|\\uD83E[\\uDD00-\\uDDFF]|\\uD83D[\\uDE80-\\uDEFF]|[\\u2600-\\u27BF])\\s*","u"));r&&!t.emoji&&(t.emoji=r[1],i=i.substring(r[0].length).trim()),a.title=i||t.title}return t.emoji!==void 0&&(a.emoji=t.emoji),t.frequency!==void 0&&(a.frequency=t.frequency),t.targetTime!==void 0&&(a.targetTime=t.targetTime),a.updatedAt=Date.now(),this.saveRoutines(n),a}return null}toggleHabitDay(e,t){const n=this.getHabits(),a=n.find(i=>i.id==e);a&&(a.daysCompleted||(a.daysCompleted=[!1,!1,!1,!1,!1,!1,!1]),a.daysCompleted[t]=!a.daysCompleted[t],a.updatedAt=Date.now(),this.saveRoutines(n))}cycleHabitDay(e,t,n){const a=this.getHabits(),i=a.find(r=>r.id==e||String(r.id)===String(e));if(i){i.completedDays||(i.completedDays={}),i.completedDays[t]||(i.completedDays[t]={});let r=i.completedDays[t][n]||0;return r=(r+1)%3,i.completedDays[t][n]=r,i.updatedAt=Date.now(),this.saveRoutines(a),r}return 0}deleteHabit(e){let t=this.getHabits();const n=t.find(a=>a.id==e||String(a.id)===String(e));t=t.filter(a=>a.id!=e&&String(a.id)!==String(e));try{const a=Date.now();let i={};const r=localStorage.getItem("planex_deleted_habit_ids");if(r){const d=JSON.parse(r);Array.isArray(d)?d.forEach(s=>{i[String(s)]=a}):typeof d=="object"&&d!==null&&(i=d)}e&&(i[String(e)]=a),n&&n.title&&(i[String(n.title).trim()]=a),localStorage.setItem("planex_deleted_habit_ids",JSON.stringify(i)),localStorage.setItem("planex_routines_updated_at",String(a))}catch{}this.saveRoutines(t,!0),typeof window<"u"&&typeof window.dispatchEvent=="function"&&(window.dispatchEvent(new CustomEvent("routine-deleted",{detail:{habitId:e,immediate:!0}})),window.dispatchEvent(new CustomEvent("routines-updated",{detail:{immediate:!0}})))}getDailyPlans(e){try{let t=localStorage.getItem(_.DAILY_PLANS);t||(t=localStorage.getItem("planex_eisenhower")||localStorage.getItem("daily_plans"));const n=JSON.parse(t||"{}");return typeof n!="object"||n===null?[]:(Array.isArray(n[e])?n[e]:[]).map(i=>({...i,priority:mt.includes(i.priority)?i.priority:bt}))}catch{return[]}}addDailyPlan(e,t,n,a=bt){let i={};try{const l=localStorage.getItem(_.DAILY_PLANS)||localStorage.getItem("planex_eisenhower")||"{}";i=JSON.parse(l),(typeof i!="object"||i===null)&&(i={})}catch{i={}}Array.isArray(i[e])||(i[e]=[]);const r=mt.includes(a)?a:bt,s={id:`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,dayIndex:t,text:String(n).trim(),isDone:!1,priority:r,createdAt:Date.now()};i[e].push(s);try{localStorage.setItem(_.DAILY_PLANS,JSON.stringify(i)),localStorage.setItem("planex_eisenhower",JSON.stringify(i)),localStorage.setItem("daily_plans",JSON.stringify(i))}catch(l){console.error("[db] Error saving daily plans:",l)}return this.markModifiedAndSync(!0),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("daily-plans-updated",{detail:{weekId:e,plan:s,immediate:!0}})),s}setDailyPlanPriority(e,t,n){if(!mt.includes(n))return!1;let a={};try{const r=localStorage.getItem(_.DAILY_PLANS)||localStorage.getItem("planex_eisenhower")||"{}";a=JSON.parse(r),(typeof a!="object"||a===null)&&(a={})}catch{a={}}if(!a[e])return!1;const i=a[e].find(r=>r.id==t||String(r.id)===String(t));if(!i)return!1;i.priority=n;try{localStorage.setItem(_.DAILY_PLANS,JSON.stringify(a)),localStorage.setItem("planex_eisenhower",JSON.stringify(a)),localStorage.setItem("daily_plans",JSON.stringify(a))}catch{}return this.markModifiedAndSync(!0),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("daily-plans-updated",{detail:{weekId:e,planId:t,priority:n,immediate:!0}})),!0}toggleDailyPlan(e,t){let n={};try{const i=localStorage.getItem(_.DAILY_PLANS)||localStorage.getItem("planex_eisenhower")||"{}";n=JSON.parse(i),(typeof n!="object"||n===null)&&(n={})}catch{n={}}let a=null;if(Array.isArray(n[e])&&(a=n[e].find(i=>i.id==t||String(i.id)===String(t))),!a){for(const i of Object.keys(n))if(Array.isArray(n[i])&&(a=n[i].find(r=>r.id==t||String(r.id)===String(t)),a))break}if(a){a.isDone=!a.isDone,a.updatedAt=Date.now();try{localStorage.setItem(_.DAILY_PLANS,JSON.stringify(n)),localStorage.setItem("planex_eisenhower",JSON.stringify(n)),localStorage.setItem("daily_plans",JSON.stringify(n))}catch{}return this.markModifiedAndSync(!0),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("daily-plans-updated",{detail:{weekId:e,planId:t,isDone:a.isDone,immediate:!0}})),!0}return!1}deleteDailyPlan(e,t){let n={};try{const a=localStorage.getItem(_.DAILY_PLANS)||localStorage.getItem("planex_eisenhower")||"{}";n=JSON.parse(a),(typeof n!="object"||n===null)&&(n={})}catch{n={}}Array.isArray(n[e])&&(n[e]=n[e].filter(a=>a.id!=t&&String(a.id)!==String(t)));for(const a of Object.keys(n))Array.isArray(n[a])&&(n[a]=n[a].filter(i=>i.id!=t&&String(i.id)!==String(t)));try{localStorage.setItem(_.DAILY_PLANS,JSON.stringify(n)),localStorage.setItem("planex_eisenhower",JSON.stringify(n)),localStorage.setItem("daily_plans",JSON.stringify(n))}catch{}this.markModifiedAndSync(!0),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("daily-plans-updated",{detail:{weekId:e,planId:t,deleted:!0,immediate:!0}}))}getWeeklyGoals(e){try{let t=localStorage.getItem(_.WEEKLY_GOALS);t||(t=localStorage.getItem("planex_weekly_goals")||localStorage.getItem("weekly_goals"));const n=JSON.parse(t||"{}");return typeof n!="object"||n===null?[]:Array.isArray(n[e])?n[e]:[]}catch{return[]}}addWeeklyGoal(e,t){let n={};try{const i=localStorage.getItem(_.WEEKLY_GOALS)||localStorage.getItem("planex_weekly_goals")||"{}";n=JSON.parse(i),(typeof n!="object"||n===null)&&(n={})}catch{n={}}Array.isArray(n[e])||(n[e]=[]);const a={id:Date.now().toString(),text:String(t).trim(),isDone:!1,createdAt:Date.now()};n[e].push(a);try{localStorage.setItem(_.WEEKLY_GOALS,JSON.stringify(n)),localStorage.setItem("planex_weekly_goals",JSON.stringify(n)),localStorage.setItem("weekly_goals",JSON.stringify(n))}catch{}return this.markModifiedAndSync(!0),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("weekly-goals-updated",{detail:{weekId:e,item:a,immediate:!0}})),a}toggleWeeklyGoal(e,t){let n={};try{const i=localStorage.getItem(_.WEEKLY_GOALS)||localStorage.getItem("planex_weekly_goals")||"{}";n=JSON.parse(i),(typeof n!="object"||n===null)&&(n={})}catch{n={}}let a=null;if(Array.isArray(n[e])&&(a=n[e].find(i=>i.id==t||String(i.id)===String(t))),!a){for(const i of Object.keys(n))if(Array.isArray(n[i])&&(a=n[i].find(r=>r.id==t||String(r.id)===String(t)),a))break}if(a){a.isDone=!a.isDone,a.updatedAt=Date.now();try{localStorage.setItem(_.WEEKLY_GOALS,JSON.stringify(n)),localStorage.setItem("planex_weekly_goals",JSON.stringify(n)),localStorage.setItem("weekly_goals",JSON.stringify(n))}catch{}return this.markModifiedAndSync(!0),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("weekly-goals-updated",{detail:{weekId:e,goalId:t,isDone:a.isDone,immediate:!0}})),!0}return!1}deleteWeeklyGoal(e,t){let n={};try{const i=localStorage.getItem(_.WEEKLY_GOALS)||localStorage.getItem("planex_weekly_goals")||"{}";n=JSON.parse(i),(typeof n!="object"||n===null)&&(n={})}catch{n={}}let a=!1;if(Array.isArray(n[e])){const i=n[e].length;n[e]=n[e].filter(r=>r.id!=t&&String(r.id)!==String(t)),n[e].length!==i&&(a=!0)}for(const i of Object.keys(n))if(Array.isArray(n[i])){const r=n[i].length;n[i]=n[i].filter(d=>d.id!=t&&String(d.id)!==String(t)),n[i].length!==r&&(a=!0)}if(a){try{localStorage.setItem(_.WEEKLY_GOALS,JSON.stringify(n)),localStorage.setItem("planex_weekly_goals",JSON.stringify(n)),localStorage.setItem("weekly_goals",JSON.stringify(n))}catch{}this.markModifiedAndSync(!0),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("weekly-goals-updated",{detail:{weekId:e,goalId:t,deleted:!0,immediate:!0}}))}return a}getStudyTargets(){const e={dailyStudyGoalHours:8,dailyTargetHours:8,weeklyStudyGoalHours:56,dailyTestGoalCount:150,weeklyTestGoalCount:1e3};try{const t=JSON.parse(localStorage.getItem(_.STUDY_TARGETS));if(t&&typeof t=="object"){const n={...e,...t};return t.dailyStudyGoalHours!=null?(n.dailyStudyGoalHours=Number(t.dailyStudyGoalHours),n.dailyTargetHours=Number(t.dailyStudyGoalHours)):t.dailyTargetHours!=null&&(n.dailyStudyGoalHours=Number(t.dailyTargetHours),n.dailyTargetHours=Number(t.dailyTargetHours)),t.dailyTestGoalCount!=null&&(n.dailyTestGoalCount=Number(t.dailyTestGoalCount)),n}return e}catch{return e}}setStudyTargets(e){if(!e||typeof e!="object")return;const n={...this.getStudyTargets(),...e};return e.dailyStudyGoalHours!=null?(n.dailyStudyGoalHours=Number(e.dailyStudyGoalHours),n.dailyTargetHours=Number(e.dailyStudyGoalHours)):e.dailyTargetHours!=null&&(n.dailyStudyGoalHours=Number(e.dailyTargetHours),n.dailyTargetHours=Number(e.dailyTargetHours)),e.dailyTestGoalCount!=null&&(n.dailyTestGoalCount=Number(e.dailyTestGoalCount)),localStorage.setItem(_.STUDY_TARGETS,JSON.stringify(n)),this.markModifiedAndSync(!0),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("targets-updated",{detail:{targets:n,immediate:!0}})),n}saveStudyTargets(e){return this.setStudyTargets(e)}getTodayEnergyLevel(){const e=new Date().toISOString().slice(0,10),t=JSON.parse(localStorage.getItem("planex_energy_levels")||"{}");return t[e]!==void 0?t[e]:75}setTodayEnergyLevel(e){const t=new Date().toISOString().slice(0,10),n=JSON.parse(localStorage.getItem("planex_energy_levels")||"{}");n[t]=e,localStorage.setItem("planex_energy_levels",JSON.stringify(n))}getGratitudeNotes(){return JSON.parse(localStorage.getItem(_.GRATITUDE_NOTES)||"[]")}addGratitudeNote(e,t){const n=this.getGratitudeNotes();n.unshift({id:Date.now().toString(),prompt:e||"یک اتفاق کوچک که امروز به خاطرش خوشحالی؟",text:t,dateStr:new Date().toLocaleDateString("fa-IR")}),localStorage.setItem(_.GRATITUDE_NOTES,JSON.stringify(n))}deleteGratitudeNote(e){let t=this.getGratitudeNotes();t=t.filter(n=>n.id!==e&&n.id!=e),localStorage.setItem(_.GRATITUDE_NOTES,JSON.stringify(t))}getEvaluationData(){const e=this.getCurrentWeek(),t=e?e.id:1;return JSON.parse(localStorage.getItem("planex_evaluations")||"{}")[t]||{}}saveEvaluationItem(e,t,n=!0){const a=this.getCurrentWeek(),i=a?a.id:1,r=JSON.parse(localStorage.getItem("planex_evaluations")||"{}");r[i]||(r[i]={}),r[i][e]={text:t,isPositive:n},localStorage.setItem("planex_evaluations",JSON.stringify(r))}getCountdownEvents(){try{const e=JSON.parse(localStorage.getItem(_.COUNTDOWN_EVENTS)||"[]");return Array.isArray(e)?e:[]}catch{return[]}}setCountdownEvents(e){const t=Array.isArray(e)?e:[];return localStorage.setItem(_.COUNTDOWN_EVENTS,JSON.stringify(t)),this.markModifiedAndSync(!0),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("countdown-updated",{detail:{events:t,immediate:!0}})),t}addCountdownEvent(e,t,n,a){const i=this.getCountdownEvents(),r={id:Date.now().toString(),title:String(e).trim(),jy:Number(t),jm:Number(n),jd:Number(a)};return i.push(r),this.setCountdownEvents(i),r}deleteCountdownEvent(e){let t=this.getCountdownEvents();return t=t.filter(n=>n.id!=e&&String(n.id)!==String(e)),this.setCountdownEvents(t),t}getInterruptions(e){let t=JSON.parse(localStorage.getItem(_.INTERRUPTIONS)||"{}");return Array.isArray(t)&&(t={}),t[e]||[]}addInterruption(e,t,n,a){let i=JSON.parse(localStorage.getItem(_.INTERRUPTIONS)||"{}");Array.isArray(i)&&(i={}),i[e]||(i[e]=[]),i[e].push({id:Date.now(),title:t,durationMins:n,category:a,date:new Date().toISOString()}),localStorage.setItem(_.INTERRUPTIONS,JSON.stringify(i))}getRoutineChecklist(){return JSON.parse(localStorage.getItem("planex_routine_checklist")||"[]")}addRoutineChecklistItem(e){const t=this.getRoutineChecklist();t.unshift({id:Date.now().toString(),text:e,completed:!1,createdAt:Date.now()}),localStorage.setItem("planex_routine_checklist",JSON.stringify(t)),this.markModifiedAndSync(!0)}toggleRoutineChecklistItem(e){const t=this.getRoutineChecklist(),n=t.find(a=>a.id===e||a.id==e);n&&(n.completed=!n.completed,n.updatedAt=Date.now(),localStorage.setItem("planex_routine_checklist",JSON.stringify(t)),this.markModifiedAndSync(!0))}deleteRoutineChecklistItem(e){let t=this.getRoutineChecklist();t=t.filter(n=>n.id!==e&&n.id!=e),localStorage.setItem("planex_routine_checklist",JSON.stringify(t)),this.markModifiedAndSync(!0)}getEarnedMedalBadge(){const t=(this.getGamification()||{level:1}).level||1;return t>=15?{icon:"👑",title:"استاد کنکور",color:"#eab308",desc:"سطح ۱۵+ (عالی)"}:t>=10?{icon:"💎",title:"غول تمرکز",color:"#06b6d4",desc:"سطح ۱۰+ (الماس)"}:t>=5?{icon:"🥇",title:"رتبه برتر",color:"#f59e0b",desc:"سطح ۵+ (طلا)"}:t>=3?{icon:"🥈",title:"داوطلب منظم",color:"#cbd5e1",desc:"سطح ۳+ (نقره)"}:{icon:"🥉",title:"مبتدی پرانرژی",color:"#b45309",desc:"سطح ۱+ (برنز)"}}getGamification(){const e={xp:0,level:1,streak:0,lastLogin:Date.now()};try{const t=JSON.parse(localStorage.getItem(_.GAMIFICATION));return!t||typeof t!="object"?e:{...e,...t,xp:Number(t.xp)||0,level:Number(t.level)||1}}catch{return e}}addXP(e){const t=this.getGamification(),n=Number(e)||0;t.xp+=n;let a=t.level*1e3;for(;t.xp>=a;)t.xp-=a,t.level+=1,a=t.level*1e3;localStorage.setItem(_.GAMIFICATION,JSON.stringify(t))}normalizeJalaliDate(e){if(!e)return"";let t=String(e).trim();t=t.replace(/[۰-۹]/g,a=>"۰۱۲۳۴۵۶۷۸۹".indexOf(a));const n=t.split("/").map(a=>parseInt(a,10));return n.length===3&&!n.some(isNaN)?`${n[0]}/${String(n[1]).padStart(2,"0")}/${String(n[2]).padStart(2,"0")}`:t}getTodayJalaliString(){const[e,t,n]=this.getTodayJalali();return`${e}/${String(t).padStart(2,"0")}/${String(n).padStart(2,"0")}`}getActivitiesByDate(e=null){try{const t=this.normalizeJalaliDate(e||this.getTodayJalaliString()),n=this.getJalaliDateTimestampRange(t),a=n.startTimestamp,i=n.endTimestamp;let r=[];try{const d=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),s=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),l=new Map;[...d,...s].forEach(c=>{if(!c||typeof c!="object")return;const y=c.id||`${c.date||c.dateStr}_${c.startTime||c.timestamp||c.subject}_${c.duration||c.minutes}`;l.set(y,c)}),r=Array.from(l.values())}catch{r=[]}return r.filter(d=>{if(!d||typeof d!="object")return!1;if(this.normalizeJalaliDate(d.dateStr||d.date)===t)return!0;const l=d.timestamp!==void 0?d.timestamp:d.createdAt!==void 0?d.createdAt:d.startTime;if(l!=null)try{const c=typeof l=="number"?l:typeof l=="string"&&/^\d{10,}$/.test(l.trim())?Number(l.trim()):null;if(c&&!isNaN(c)){if(c>=a&&c<=i)return!0;const y=new Date(c);if(!isNaN(y.getTime())){const[m,u,b]=this.gregorianToJalali(y.getFullYear(),y.getMonth()+1,y.getDate()),g=`${m}/${String(u).padStart(2,"0")}/${String(b).padStart(2,"0")}`;if(this.normalizeJalaliDate(g)===t)return!0}}}catch{}return!1})}catch{return[]}}getStudyMinutesByDate(e=null){const t=this.normalizeJalaliDate(e||this.getTodayJalaliString());return this.getActivitiesByDate(t).filter(a=>a?!(a.type==="non-study"||a.type==="non_study"||a.type==="break"||a.activityType==="non_study"||a.activityType==="non-study"||a.activityType==="break"||a.isStudy===!1||a.is_study_time===!1||a.counts_for_study===!1||a.isBreak===!0||a.is_break===!0||a.timerType==="break"||a.timerType===2):!1).reduce((a,i)=>{const r=Number(i.duration!==void 0?i.duration:i.minutes);return a+(isNaN(r)?0:Math.max(0,Math.ceil(r)))},0)}getStudyHoursByDate(e=null){return+(this.getStudyMinutesByDate(e)/60).toFixed(2)}getStudyStreak(){try{const[e,t,n]=this.getTodayJalali();let a=this.jalaliToJdn(e,t,n);const i=`${e}/${String(t).padStart(2,"0")}/${String(n).padStart(2,"0")}`;let r=0,d=a;this.getStudyMinutesByDate(i)>0&&r++,d--;for(let l=0;l<365;l++){const[c,y,m]=this.jdnToJalali(d),u=`${c}/${String(y).padStart(2,"0")}/${String(m).padStart(2,"0")}`;if(this.getStudyMinutesByDate(u)>0)r++,d--;else break}return r}catch{return 0}}getDailyTestCount(e=null){const t=this.normalizeJalaliDate(e||this.getTodayJalaliString());return this.getActivitiesByDate(t).filter(a=>a?!(a.type==="non-study"||a.type==="non_study"||a.type==="break"||a.activityType==="non_study"||a.activityType==="non-study"||a.activityType==="break"||a.isStudy===!1||a.is_study_time===!1||a.counts_for_study===!1||a.isBreak===!0||a.is_break===!0||a.timerType==="break"||a.timerType===2):!1).reduce((a,i)=>a+(Number(i.testCount!==void 0?i.testCount:i.tests)||0),0)}getRecordedTimerToday(){const e=this.getTodayJalaliString();return JSON.parse(localStorage.getItem(_.RECORDED_TIMER)||"{}")[e]||{minutes:0,tests:0}}getTodayTotalMinutes(){return this.getStudyMinutesByDate(this.getTodayJalaliString())}getTodayTotalTests(){return this.getDailyTestCount(this.getTodayJalaliString())}_getWeekDayDateStr(e,t=new Date){const n=this.getCurrentWeekStartDate(t),a=new Date(n.getFullYear(),n.getMonth(),n.getDate()+e),[i,r,d]=this.gregorianToJalali(a.getFullYear(),a.getMonth()+1,a.getDate());return`${i}/${String(r).padStart(2,"0")}/${String(d).padStart(2,"0")}`}getWeekDayMinutes(e){const t=this._getWeekDayDateStr(e);return t?this.getStudyMinutesByDate(t):0}getWeekDayTests(e){const t=this._getWeekDayDateStr(e);return t?this.getDailyTestCount(t):0}getDayCategoryBreakdown(e){const t=this._getWeekDayDateStr(e);if(!t)return[];let n=[];try{n=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),(!Array.isArray(n)||n.length===0)&&(n=JSON.parse(localStorage.getItem("planex_study_logs")||"[]")),Array.isArray(n)||(n=[])}catch{n=[]}const a=`${e}|${t}|${n.length}`;if(this._breakdownMemoMap||(this._breakdownMemoMap={}),this._breakdownMemoMap[a])return this._breakdownMemoMap[a];const i=this.getTodayJalaliString(),r=t===i,d=Date.now(),s=24*60*60*1e3,l=n.filter(u=>{if(!u||typeof u!="object")return!1;const b=this.normalizeJalaliDate(u.dateStr||u.date);if(b===t)return!0;if(r&&(!b||b.indexOf("/")===-1)){const g=u.timestamp||u.createdAt||0;if(g&&d-g<=s)return!0}return!1});window.DEBUG_BREAKDOWN&&console.log(`[DEBUG] getDayCategoryBreakdown (dayIndex: ${e}): Date=${t}, Found=${l.length} sessions`,l);const c={},y=this.getCategories();l.forEach(u=>{const b=u.type==="study"||u.isStudy!==!1;let g="";u.categoryTitle&&u.categoryTitle.trim()?g=u.categoryTitle.trim():u.subject&&u.subject.trim()&&u.subject!=="مطالعه متمرکز"&&u.subject!=="فعالیت غیردرسی"?g=u.subject.trim():b?g="مطالعه درسی":g="فعالیت غیردرسی";const f=u.categoryCode||"other";let x=u.color;if(!x){const w=y.find(A=>A.title===g||A.code===f);x=w?w.color:b?"#0ea5e9":"#f59e0b"}c[g]||(c[g]={title:g,minutes:0,color:x}),c[g].minutes+=Math.max(1,Math.ceil(Number(u.duration||u.minutes)||1))});const m=Object.values(c).sort((u,b)=>b.minutes-u.minutes);return this._breakdownMemoMap[a]=m,m}getDailyStats(e=null){try{const t=this.normalizeJalaliDate(e||this.getTodayJalaliString()),n=String(t).split("/").map(Number);if(n.length===3&&!isNaN(n[0])&&!isNaN(n[1])&&!isNaN(n[2])){const l=this.jalaliToJdn(n[0],n[1],n[2]),c=this.getTodayJdn();if(l>c)return{date:t,studyMinutes:0,studyHours:0,nonStudyMinutes:0,totalTests:0,categoryMinutes:{},sessionsCount:0}}const a=this.getActivitiesByDate(t);let i=0,r=0,d=0;const s={};return a.forEach(l=>{const c=Number(l.duration!==void 0?l.duration:l.minutes),y=isNaN(c)?1:Math.max(1,Math.ceil(c)),m=Number(l.testCount!==void 0?l.testCount:l.tests)||0,u=l.categoryCode||l.category||"سایر";s[u]=(s[u]||0)+y,l.type==="study"||l.isStudy!==!1?(i+=y,d+=m):r+=y}),{date:t,studyMinutes:i,studyHours:+(i/60).toFixed(2),nonStudyMinutes:r,totalTests:d,categoryMinutes:s,sessionsCount:a.length}}catch(t){return console.warn("Error in getDailyStats:",t),{date:e||"",studyMinutes:0,studyHours:0,nonStudyMinutes:0,totalTests:0}}}getStudyStatsByPeriod(e="today"){let t=[];try{const u=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),b=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),g=new Map;Array.isArray(b)&&b.forEach(f=>{f&&(f.id||f.timestamp)&&g.set(f.id||`ts_${f.timestamp}_${f.duration}`,f)}),Array.isArray(u)&&u.forEach(f=>{f&&(f.id||f.timestamp)&&g.set(f.id||`ts_${f.timestamp}_${f.duration}`,f)}),t=Array.from(g.values())}catch{t=[]}const n=new Date;n.setHours(0,0,0,0);const a=n.getTime(),i=new Date,r=(i.getDay()+1)%7,d=new Date(i.getFullYear(),i.getMonth(),i.getDate()-r);d.setHours(0,0,0,0);const s=d.getTime(),l=typeof this.getTodayJalaliString=="function"?this.getTodayJalaliString():"";let c=0,y=0;const m=new Set;return t.forEach(u=>{if(!u||typeof u!="object")return;const b=Number(u.timestamp||u.createdAt||u.endTime||0),g=this.normalizeJalaliDate?this.normalizeJalaliDate(u.dateStr||u.date):u.dateStr||u.date;let f=!1;if(e==="today"?f=b>=a||g&&g===l:e==="week"?f=b>=s:e==="all"&&(f=!0),f&&!(u.type==="non-study"||u.type==="non_study"||u.type==="break"||u.activityType==="non_study"||u.activityType==="non-study"||u.activityType==="break"||u.isStudy===!1||u.is_study_time===!1||u.counts_for_study===!1||u.isBreak===!0||u.is_break===!0||u.timerType==="break"||u.timerType===2)){c+=Math.max(0,Math.ceil(Number(u.duration!==void 0?u.duration:u.minutes)||0)),y+=Math.max(0,Number(u.testCount!==void 0?u.testCount:u.tests)||0);const w=u.subject&&u.subject.trim()!=="مطالعه متمرکز"?u.subject.trim():u.categoryTitle||u.category;w&&w.trim()&&m.add(w.trim())}}),{studyMinutes:c,studyHours:+(c/60).toFixed(2),testCount:y,subjects:Array.from(m)}}recordTimerSession(e,t=0){const n=this.getTodayJalaliString(),a=JSON.parse(localStorage.getItem(_.RECORDED_TIMER)||"{}");return a[n]||(a[n]={minutes:0,tests:0}),a[n].minutes+=e,a[n].tests+=t,localStorage.setItem(_.RECORDED_TIMER,JSON.stringify(a)),this.addXP(e*2+t*3),a[n]}recordFocusSession(e={}){const{type:t="study",activityType:n=null,minutes:a=null,duration:i=null,tests:r=0,testCount:d=null,category:s=null,categoryCode:l=null,categoryTitle:c=null,subject:y="",studyMethod:m="",note:u="",rating:b=5,timerType:g="pomodoro",startTime:f=null,endTime:x=Date.now(),date:w=null,isBreak:A=!1,is_break:k=!1,is_study_time:$=null,counts_for_study:M=null,testCorrect:I=0,testWrong:D=0,testUnanswered:T=0,testPercentage:N=null}=e,C=!!(A||k||e.isBreak===!0||e.is_break===!0||g==="break"||g===2);let L=!(t==="non-study"||t==="non_study"||n==="non-study"||n==="non_study")&&!C;($===!1||M===!1||e.is_study_time===!1||e.counts_for_study===!1)&&(L=!1);const q=L?"study":C?"break":"non-study",J=Math.ceil(Number(i??a??1))||1;if(J>720)return console.warn(`[db.recordFocusSession] Rejected orphaned session with duration: ${J} mins (>12h).`),null;const Q=Math.min(240,Math.max(1,J)),V=L?Math.max(0,parseInt(d??r)||0):0;let X=null;const j=String(s||c||"").trim();if(L){const oe=this.getCategories();X=oe.find(pe=>pe.code===l),!X&&j&&(X=oe.find(pe=>pe.title===j||pe.code===j)),X||(X=oe.find(pe=>Oe(pe))||{code:"ع-س",title:j||"مطالعه متمرکز",color:"#0ea5e9",icon:"📚",group:"علمی",isStudy:!0})}else{const oe=this.getNonStudyCategories();X=oe.find(pe=>pe.code===l),!X&&j&&(X=oe.find(pe=>pe.title===j||pe.code===j)),X||(X={code:l||(C?"non_break":"غ-د"),title:j||(C?"پارت استراحت ☕":"فعالیت غیردرسی"),color:C?"#38bdf8":"#f59e0b",icon:C?"☕":"🧘",group:"غیردرسی",isStudy:!1})}const Z=X.title,K=String(y||"").trim()||(L?"مطالعه متمرکز":C?"استراحت و ریکاوری":Z),be=String(u||"").trim(),[fe,ce,h]=this.getTodayJalali();(new Date().getDay()+1)%7;const E=this.normalizeJalaliDate(w||`${fe}/${String(ce).padStart(2,"0")}/${String(h).padStart(2,"0")}`);let R=null,U=null;if(typeof x=="number"&&!isNaN(x)&&x>1e11)R=x;else if(typeof x=="string")if(x.includes(":")){const oe=x.split(":").map(Number);if(!isNaN(oe[0])&&!isNaN(oe[1])){const pe=new Date;pe.setHours(oe[0],oe[1],0,0),R=pe.getTime()}}else{const oe=Number(x);!isNaN(oe)&&oe>1e11&&(R=oe)}if(typeof f=="number"&&!isNaN(f)&&f>1e11)U=f;else if(typeof f=="string")if(f.includes(":")){const oe=f.split(":").map(Number);if(!isNaN(oe[0])&&!isNaN(oe[1])){const pe=new Date;pe.setHours(oe[0],oe[1],0,0),U=pe.getTime()}}else{const oe=Number(f);!isNaN(oe)&&oe>1e11&&(U=oe)}U&&!R?R=U+Q*60*1e3:R&&!U?U=R-Q*60*1e3:!U&&!R&&(R=Date.now(),U=R-Q*60*1e3);const de={id:"session_"+Date.now()+"_"+Math.random().toString(36).substr(2,4),type:q,category:X.title,categoryCode:X.code,categoryTitle:X.title,color:X.color||(L?"#0ea5e9":C?"#38bdf8":"#f59e0b"),icon:X.icon||(L?"📚":C?"☕":"🧘"),isStudy:L,is_study_time:L,counts_for_study:L,isBreak:C,is_break:C,activityType:L?"study":C?"break":"non_study",subject:K,studyMethod:m||"",duration:Q,minutes:Q,testCount:V,tests:V,testCorrect:Math.max(0,parseInt(I)||0),testWrong:Math.max(0,parseInt(D)||0),testUnanswered:Math.max(0,parseInt(T)||0),testPercentage:N!==null?N:V>0?+((3*Math.max(0,parseInt(I)||0)-Math.max(0,parseInt(D)||0))/(3*V)*100).toFixed(1):null,note:be,timerType:g||(C?"break":"pomodoro"),date:E,dateStr:E,startTime:U,endTime:R,timestamp:R},B=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]");B.unshift(de),B.length>5e3&&(B.length=5e3),localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(B));const ue=JSON.parse(localStorage.getItem("planex_study_logs")||"[]");ue.unshift(de),ue.length>5e3&&(ue.length=5e3),localStorage.setItem("planex_study_logs",JSON.stringify(ue));const xe=JSON.parse(localStorage.getItem("planex_daily_stats")||"{}");xe[E]||(xe[E]={date:E,studyMinutes:0,studyHours:0,nonStudyMinutes:0,totalTests:0,categoryMinutes:{},sessionsCount:0});const ge=xe[E];ge.sessionsCount=(ge.sessionsCount||0)+1;const Ae=X.code||"other";ge.categoryMinutes[Ae]=(ge.categoryMinutes[Ae]||0)+Q,L?(ge.studyMinutes=(ge.studyMinutes||0)+Q,ge.studyHours=+(ge.studyMinutes/60).toFixed(2),ge.totalTests=(ge.totalTests||0)+V):ge.nonStudyMinutes=(ge.nonStudyMinutes||0)+Q,localStorage.setItem("planex_daily_stats",JSON.stringify(xe)),L?this.recordTimerSession(Q,V):this.addXP(Math.round(Q*.5));const we=E||this.getTodayJalaliString(),Te=JSON.parse(localStorage.getItem("planex_subject_study_stats")||"{}");Te[we]||(Te[we]={});const Ie=K||X.title;return Te[we][Ie]||(Te[we][Ie]={minutes:0,tests:0,category:X.title,isStudy:L}),Te[we][Ie].minutes+=Q,Te[we][Ie].tests+=V,localStorage.setItem("planex_subject_study_stats",JSON.stringify(Te)),this._breakdownMemoMap={},de}saveStudyLogs(e){if(!Array.isArray(e))return[];try{let t=[];try{t=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),Array.isArray(t)||(t=[])}catch{t=[]}let n=[];try{n=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),Array.isArray(n)||(n=[])}catch{n=[]}const a=new Map;[...t,...n].forEach(r=>{if(!r||typeof r!="object")return;const d=r.id||`${r.date||r.dateStr}_${r.startTime||r.timestamp||r.subject}_${r.duration||r.minutes}`;a.set(d,r)}),e.forEach(r=>{if(!r||typeof r!="object")return;const d=r.id||`${r.date||r.dateStr}_${r.startTime||r.timestamp||r.subject}_${r.duration||r.minutes}`;!r.dateStr&&r.date&&(r.dateStr=r.date),!r.date&&r.dateStr&&(r.date=r.dateStr),a.set(d,r)});const i=Array.from(a.values());return i.sort((r,d)=>{const s=Number(r.timestamp||r.endTime||r.startTime)||0;return(Number(d.timestamp||d.endTime||d.startTime)||0)-s}),i.length>5e3&&(i.length=5e3),localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(i)),localStorage.setItem("planex_study_logs",JSON.stringify(i)),this._breakdownMemoMap={},i}catch(t){return console.error("[db] saveStudyLogs error:",t),e}}recordPomodoroSession(e={}){return this.recordFocusSession(e)}getRecentFocusSessions(e=10){try{const t=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),n=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),a=new Map;[...t,...n].forEach(r=>{if(!r||typeof r!="object")return;const d=r.id||`${r.date||r.dateStr}_${r.startTime||r.timestamp||r.subject}_${r.duration||r.minutes}`;a.set(d,r)});const i=Array.from(a.values());return i.sort((r,d)=>{const s=Number(r.timestamp||r.createdAt||0);return Number(d.timestamp||d.createdAt||0)-s}),i.slice(0,e)}catch{return[]}}deleteFocusSession(e){try{let t=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]");Array.isArray(t)||(t=[]),t=t.filter(a=>a&&a.id!==e),localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(t));let n=JSON.parse(localStorage.getItem("planex_study_logs")||"[]");Array.isArray(n)&&(n=n.filter(a=>a&&a.id!==e),localStorage.setItem("planex_study_logs",JSON.stringify(n)))}catch{}}sanitizeCorruptedStats(){try{const e=JSON.parse(localStorage.getItem("planex_daily_stats")||"{}");let t=!1;Object.keys(e).forEach(n=>{const a=e[n];a&&a.studyMinutes>1440&&(a.studyMinutes=Math.min(1440,Math.max(0,a.studyMinutes)),a.studyHours=+(a.studyMinutes/60).toFixed(2),t=!0)}),t&&localStorage.setItem("planex_daily_stats",JSON.stringify(e)),["planex_recent_activity_sessions","planex_study_logs"].forEach(n=>{try{const a=localStorage.getItem(n);if(a){const i=JSON.parse(a);if(Array.isArray(i)){const r=i.filter(d=>(Number((d==null?void 0:d.duration)||(d==null?void 0:d.minutes))||0)<=720);r.length!==i.length&&localStorage.setItem(n,JSON.stringify(r))}}}catch{}})}catch{}}getSubjectStudyStats(e=null){const t=this.normalizeJalaliDate(e||this.getTodayJalaliString()),n=this.getActivitiesByDate(t),a={};return n.forEach(i=>{if(!i||typeof i!="object")return;const d=!(i.type==="non-study"||i.type==="non_study"||i.type==="break"||i.activityType==="non_study"||i.activityType==="non-study"||i.activityType==="break"||i.isStudy===!1||i.is_study_time===!1||i.counts_for_study===!1||i.isBreak===!0||i.is_break===!0||i.timerType==="break"||i.timerType===2);let s="";i.categoryTitle&&i.categoryTitle.trim()?s=i.categoryTitle.trim():i.subject&&i.subject.trim()&&i.subject!=="مطالعه متمرکز"&&i.subject!=="فعالیت غیردرسی"?s=i.subject.trim():d?s="مطالعه متمرکز":s="فعالیت غیردرسی";const l=Math.max(0,Number(i.duration!==void 0?i.duration:i.minutes)||0),c=Math.max(0,Number(i.testCount!==void 0?i.testCount:i.tests)||0);a[s]||(a[s]={minutes:0,tests:0,category:s,isStudy:d}),a[s].minutes+=l,a[s].tests+=c}),a}getUserProfile(){const e={name:"",major:"",targetField:""};try{const t=JSON.parse(localStorage.getItem(_.USER_PROFILE)),n=t&&typeof t=="object"?{...e,...t}:e,a=this.getEffectiveUserName();return a&&(n.name=a,n.nickname=a),n}catch{return e}}setUserProfile(e){try{localStorage.setItem(_.USER_PROFILE,JSON.stringify(e))}catch(t){console.warn("[db] setUserProfile localStorage quota error:",t)}}exportAllData(){const e={};return Object.values(_).forEach(t=>{e[t]=localStorage.getItem(t)}),JSON.stringify(e,null,2)}importAllData(e){try{const t=JSON.parse(e);return Object.keys(t).forEach(n=>{t[n]!==void 0&&t[n]!==null&&localStorage.setItem(n,t[n])}),!0}catch(t){return console.error("Import failed:",t),!1}}getThemeSettings(){const e={appTheme:"theme-dark-glass",themeMode:"mode-dark",fontFamily:"font-yekan"},t=localStorage.getItem(_.ACTIVE_THEME);if(!t)return e;try{const n=JSON.parse(t);return{...e,...n,appTheme:"theme-dark-glass",themeMode:"mode-dark"}}catch{return e}}setThemeSettings(e){const n={...this.getThemeSettings(),...e};return localStorage.setItem(_.ACTIVE_THEME,JSON.stringify(n)),n}getFlashcards(){try{const t=localStorage.getItem(_.FLASHCARDS);if(t){const n=JSON.parse(t);if(Array.isArray(n)&&n.length>0)return n}}catch{}const e=[{id:"fc_seed_1",question:"تکنیک بازیابی فعال (Active Recall) چیست و چرا موثرترین روش مطالعه است؟",answer:"تلاش فعالانه مغز برای به یاد آوردن مطالب بدون نگاه کردن به کتاب؛ این فرآیند باعث تقویت مسیرهای سیناپسی و انتقال اطلاعات به حافظه بلندمدت می‌شود.",deck:"متدولوژی مطالعه",box:1,createdAt:"۱۴۰۵/۰۱/۰۱",createdTimestamp:Date.now()-864e5,nextReviewDate:Date.now()-1e3},{id:"fc_seed_2",question:"در جعبه لایتنر ۵ خانه‌ای، هر خانه چه فواصل زمانی برای مرور دارد؟",answer:"خانه ۱: روزانه (۱ روز) | خانه ۲: ۲ روز | خانه ۳: ۴ روز | خانه ۴: ۸ روز | خانه ۵: ۱۶ روز (تثبیت دائم در حافظه).",deck:"جعبه لایتنر",box:2,createdAt:"۱۴۰۵/۰۱/۰۱",createdTimestamp:Date.now()-1728e5,nextReviewDate:Date.now()-1e3},{id:"fc_seed_3",question:"بهترین استراتژی پومودورو برای یادگیری مباحث سنگین و تحلیلی چیست؟",answer:"پومودوروی پیشرفته ۵۰ دقیقه تمرکز عمیق بدون وقفه و ۱۰ دقیقه استراحت مطلق (آب خوردن و تنفس عمیق).",deck:"مدیریت زمان",box:1,createdAt:"۱۴۰۵/۰۱/۰۱",createdTimestamp:Date.now()-864e5,nextReviewDate:Date.now()-1e3}];try{localStorage.setItem(_.FLASHCARDS,JSON.stringify(e))}catch{}return e}addFlashcard(e,t,n="عمومی"){const a=this.getFlashcards(),[i,r,d]=this.getTodayJalali(),s=String(e||"").trim(),l=String(t||"").trim();if(!s||!l)return null;const c={id:"fc_"+Date.now()+"_"+Math.floor(Math.random()*1e4),question:s,answer:l,deck:String(n||"عمومی").trim(),box:1,streak:0,reviewCount:0,createdAt:`${i}/${r}/${d}`,createdTimestamp:Date.now(),lastReviewed:null,nextReviewDate:Date.now()};return a.unshift(c),localStorage.setItem(_.FLASHCARDS,JSON.stringify(a)),c}addFlashcards(e,t="هوش مصنوعی"){if(!Array.isArray(e)||e.length===0)return 0;const n=this.getFlashcards(),[a,i,r]=this.getTodayJalali();let d=0;return e.forEach((s,l)=>{if(!s)return;const c=typeof s=="object"&&(s.question||s.q)||"",y=typeof s=="object"&&(s.answer||s.a)||"",m=typeof s=="object"&&s.deck?s.deck:t,u=String(c).trim(),b=String(y).trim();u&&b&&(n.unshift({id:"fc_"+(Date.now()+l)+"_"+Math.floor(Math.random()*1e4),question:u,answer:b,deck:String(m||"هوش مصنوعی").trim(),box:1,streak:0,reviewCount:0,createdAt:`${a}/${i}/${r}`,createdTimestamp:Date.now(),lastReviewed:null,nextReviewDate:Date.now()}),d++)}),d>0&&localStorage.setItem(_.FLASHCARDS,JSON.stringify(n)),d}reviewFlashcard(e,t){const n=this.getFlashcards(),a=n.find(s=>s.id===e||s.id==e);if(!a)return null;const i=[1,2,4,8,16],r=Date.now();t?(a.box=Math.min(5,(a.box||1)+1),a.streak=(a.streak||0)+1):(a.box=1,a.streak=0),a.lastReviewed=r,a.reviewCount=(a.reviewCount||0)+1;const d=i[(a.box||1)-1]||1;return a.nextReviewDate=r+d*24*60*60*1e3,localStorage.setItem(_.FLASHCARDS,JSON.stringify(n)),a}deleteFlashcard(e){let t=this.getFlashcards();return t=t.filter(n=>n.id!==e&&n.id!=e),localStorage.setItem(_.FLASHCARDS,JSON.stringify(t)),t}getLeitnerStats(){const e=this.getFlashcards(),t=Date.now(),n={total:e.length,due:0,mastered:0,boxes:{1:0,2:0,3:0,4:0,5:0}};return e.forEach(a=>{const i=Math.min(5,Math.max(1,a.box||1));n.boxes[i]=(n.boxes[i]||0)+1,i===5&&n.mastered++,(!a.nextReviewDate||a.nextReviewDate<=t)&&n.due++}),n}getTodayStudiedSubjects(e=null){try{const t=this.normalizeJalaliDate(e||this.getTodayJalaliString()),n=this.getActivitiesByDate(t).filter(i=>i?!(i.type==="non-study"||i.type==="non_study"||i.type==="break"||i.activityType==="non_study"||i.activityType==="non-study"||i.activityType==="break"||i.isStudy===!1||i.is_study_time===!1||i.counts_for_study===!1||i.isBreak===!0||i.is_break===!0||i.timerType==="break"||i.timerType===2):!1),a=new Set;if(n.forEach(i=>{const r=i.subject&&typeof i.subject=="string"&&i.subject.trim()&&i.subject!=="مطالعه متمرکز"&&i.subject!=="فعالیت غیردرسی"?i.subject.trim():i.categoryTitle||i.category||"";r&&r.trim()&&a.add(r.trim())}),t===this.getTodayJalaliString()){const i=this.getCurrentWeek();if(i&&i.id){const r=this.getHourlyLogs(i.id),d=(new Date().getDay()+1)%7,s=this.getCategories();Object.keys(r).forEach(l=>{if(l.startsWith(`${d}_`)){const c=r[l];if(c&&c.categoryCode){const y=s.find(u=>u.code===c.categoryCode);if(y?Oe(y):c.categoryCode.startsWith("ع")||c.categoryCode==="ع-س"){const u=c.subject&&c.subject.trim()?c.subject.trim():y?y.title:"";u&&u!=="مطالعه متمرکز"&&a.add(u)}}}})}}return Array.from(a)}catch{return[]}}getUserGroups(){try{let e=[];const t=localStorage.getItem(_.USER_GROUPS);if(t){const n=JSON.parse(t);Array.isArray(n)&&(e=n.filter(a=>a&&(a.code||a.groupCode)))}if(e.length===0)for(const n of["planex_my_groups","planex_my_rooms","my_rooms"]){const a=localStorage.getItem(n);if(a)try{const i=JSON.parse(a);if(Array.isArray(i)&&i.length>0){const r=i.filter(d=>d&&(d.code||d.groupCode||d.id||d.room_code));if(r.length>0){e=r,localStorage.setItem(_.USER_GROUPS,JSON.stringify(e));break}}}catch{}}if(e.length===0){const n=localStorage.getItem(_.USER_GROUP_DATA);if(n){const a=JSON.parse(n);if(a&&(a.groupCode||a.code)){const i={code:String(a.groupCode||a.code).trim().toUpperCase(),name:String(a.groupName||a.name||`گروه ${a.groupCode}`).trim(),joinedAt:a.joinedAt||Date.now(),isOwner:!!a.isOwner,userId:a.userId||null};e=[i],localStorage.setItem(_.USER_GROUPS,JSON.stringify(e)),localStorage.setItem(_.ACTIVE_GROUP_CODE,i.code)}}}return e.map(n=>({code:String(n.code||n.groupCode||n.room_code||n.id||"").trim().toUpperCase(),name:String(n.name||n.title||n.groupName||`گروه ${n.code||n.groupCode||n.id}`).trim(),joinedAt:n.joinedAt||n.created_at||Date.now(),isOwner:!!(n.isOwner||n.is_owner||n.role==="owner"),userId:n.userId||n.creator_id||null})).filter(n=>n.code)}catch(e){return console.error("Error fetching user groups:",e),[]}}setUserGroups(e){try{Array.isArray(e)||(e=[]);const t=e.filter(d=>d&&(d.code||d.groupCode||d.room_code||d.id)).map(d=>({code:String(d.code||d.groupCode||d.room_code||d.id).trim().toUpperCase(),name:String(d.name||d.title||d.groupName||`گروه ${d.code||d.groupCode||d.id}`).trim(),joinedAt:d.joinedAt||d.created_at||Date.now(),isOwner:!!(d.isOwner||d.is_owner||d.role==="owner"),userId:d.userId||d.creator_id||null})),n=new Map;t.forEach(d=>n.set(d.code,d));const a=Array.from(n.values());localStorage.setItem(_.USER_GROUPS,JSON.stringify(a)),localStorage.setItem("planex_my_groups",JSON.stringify(a)),localStorage.setItem("planex_my_rooms",JSON.stringify(a)),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("rooms-updated"));const i=this.getActiveGroupCode();if(!i||!n.has(i)){const d=a.length>0?a[0].code:null;d?localStorage.setItem(_.ACTIVE_GROUP_CODE,d):localStorage.removeItem(_.ACTIVE_GROUP_CODE)}const r=this.getActiveGroup();return r?localStorage.setItem(_.USER_GROUP_DATA,JSON.stringify({groupCode:r.code,groupName:r.name,joinedAt:r.joinedAt,isOwner:r.isOwner,userId:r.userId})):localStorage.removeItem(_.USER_GROUP_DATA),a}catch(t){return console.error("Error saving user groups:",t),[]}}removeUserGroup(e){try{if(!e)return[];const t=String(e).trim().toUpperCase();let n=this.getUserGroups();return n=n.filter(i=>String(i.code||i.groupCode||i.room_code||i.id||"").trim().toUpperCase()!==t),localStorage.setItem(_.USER_GROUPS,JSON.stringify(n)),localStorage.setItem("planex_my_groups",JSON.stringify(n)),localStorage.setItem("planex_my_rooms",JSON.stringify(n)),this.getActiveGroupCode()===t&&(localStorage.removeItem(_.ACTIVE_GROUP_CODE),localStorage.removeItem(_.USER_GROUP_DATA),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data")),n.length>0?localStorage.setItem(_.ACTIVE_GROUP_CODE,n[0].code):localStorage.removeItem(_.ACTIVE_GROUP_CODE),n}catch(t){return console.error("Error removing user group:",t),[]}}getActiveGroupCode(){try{const e=localStorage.getItem(_.ACTIVE_GROUP_CODE);return e&&e.trim()?e.trim().toUpperCase():null}catch{return null}}setActiveGroupCode(e){try{if(!e)return localStorage.removeItem(_.ACTIVE_GROUP_CODE),localStorage.removeItem(_.USER_GROUP_DATA),null;const t=String(e).trim().toUpperCase();localStorage.setItem(_.ACTIVE_GROUP_CODE,t);const n=this.getActiveGroup();return n&&localStorage.setItem(_.USER_GROUP_DATA,JSON.stringify({groupCode:n.code,groupName:n.name,joinedAt:n.joinedAt,isOwner:n.isOwner,userId:n.userId})),t}catch{return null}}getActiveGroup(){const e=this.getUserGroups();if(e.length===0)return null;const t=this.getActiveGroupCode();return t&&e.find(a=>a.code===t)||null}addUserGroup(e){try{if(!e)return null;const t=e.code||e.groupCode;if(!t)return null;const n=String(t).trim().toUpperCase(),a=String(e.name||e.groupName||`گروه ${n}`).trim(),i=this.getUserGroups(),r=i.findIndex(s=>s.code===n),d={code:n,name:a,joinedAt:e.joinedAt||Date.now(),isOwner:r>=0?e.isOwner??i[r].isOwner:!!e.isOwner,userId:e.userId||(r>=0?i[r].userId:null)};return r>=0?i[r]=d:i.unshift(d),this.setUserGroups(i),this.setActiveGroupCode(n),d}catch(t){return console.error("Error adding user group:",t),null}}removeUserGroup(e){try{const t=String(e||this.getActiveGroupCode()||"").trim().toUpperCase();if(!t)return!1;let n=this.getUserGroups();return n=n.filter(a=>a.code!==t),this.setUserGroups(n),!0}catch(t){return console.error("Error removing user group:",t),!1}}getUserGroupData(){const e=this.getActiveGroup();return e?{groupCode:e.code,groupName:e.name,joinedAt:e.joinedAt,isOwner:e.isOwner,userId:e.userId}:null}setUserGroupData(e){return this.addUserGroup(e)}leaveUserGroup(e=null){return this.removeUserGroup(e)}getOrCreatePersonalSyncToken(){let e=localStorage.getItem(_.PERSONAL_SYNC_TOKEN);if(!e){const t="23456789ABCDEFGHJKLMNPQRSTUVWXYZ";e=`SYNC-${Array.from({length:5},()=>t[Math.floor(Math.random()*t.length)]).join("")}`,localStorage.setItem(_.PERSONAL_SYNC_TOKEN,e)}return e}setPersonalSyncToken(e){if(e){const t=String(e).trim().toUpperCase();return localStorage.setItem(_.PERSONAL_SYNC_TOKEN,t),t}return null}getPersonalSyncInfo(){const e=this.getOrCreatePersonalSyncToken(),t=localStorage.getItem(_.LAST_PERSONAL_SYNC),n=t?parseInt(t,10):0;let a="هنوز در فضای ابری ذخیره نشده";if(n>0){const i=Date.now()-n,r=Math.floor(i/(60*1e3)),d=Math.floor(r/60);r<1?a="لحظاتی پیش":r<60?a=`${r} دقیقه پیش`:d<24?a=`${d} ساعت پیش`:a=`${Math.floor(d/24)} روز پیش`}return{token:e,lastSyncTimestamp:n,lastSyncText:a,hasSyncedBefore:n>0}}markPersonalSyncSuccess(){localStorage.setItem(_.LAST_PERSONAL_SYNC,String(Date.now()))}getUserProfile(){let e={};try{e=JSON.parse(localStorage.getItem(_.USER_PROFILE)||"{}")}catch{}const t=localStorage.getItem("planex_user_avatar");t&&(e.avatar=t,e.avatar_url=t,e.photo=t,e.photoUrl=t);const n=this.getEffectiveUserName();return n?(e.name=n,e.nickname=n):$e(e.name)&&(e.name="",e.nickname=""),e}setUserProfile(e){if(!e||typeof e!="object")return{};try{let t={};try{t=JSON.parse(localStorage.getItem(_.USER_PROFILE)||"{}")}catch{}const n={...t,...e},a=e.avatar||e.avatar_url||e.photo||e.photoUrl||localStorage.getItem("planex_user_avatar");return a&&(localStorage.setItem("planex_user_avatar",a),n.avatar=a,n.avatar_url=a,n.photo=a,n.photoUrl=a),e.name&&!$e(e.name)&&(n.name=e.name,n.nickname=e.name,localStorage.setItem("planex_user_nickname",e.name),localStorage.setItem("planex_nickname",e.name),localStorage.setItem("planex_leaderboard_nickname",e.name)),localStorage.setItem(_.USER_PROFILE,JSON.stringify(n)),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("profileUpdated")),n}catch(t){return console.warn("Error setting user profile:",t),e}}saveProfile(e){return this.setUserProfile(e)}getProfile(){return this.getUserProfile()}getJournalEntry(e){try{return(JSON.parse(localStorage.getItem("planex_journal_entries"))||{})[e]||{mood:"",rating:0,note:""}}catch{return{mood:"",rating:0,note:""}}}saveJournalEntry(e,t,n,a){try{const i=JSON.parse(localStorage.getItem("planex_journal_entries"))||{};i[e]={mood:t,rating:n,note:a},localStorage.setItem("planex_journal_entries",JSON.stringify(i))}catch{}}}const p=new io,ee={USER_ID:"planex_leaderboard_user_id",NICKNAME:"planex_leaderboard_nickname",TARGET:"planex_leaderboard_target",LAST_SYNC:"planex_leaderboard_last_sync",CACHE:"planex_leaderboard_cache",CACHE_DATE:"planex_leaderboard_cache_date",SYNC_CODE:"planex_sync_code",USER_GROUP_DATA:"planex_user_group_data",GROUP_CACHE_PREFIX:"planex_group_cache_",GROUP_ROSTER_PREFIX:"planex_group_roster_",EARLY_BIRD_HISTORY:"planex_early_bird_history",EARLY_BIRD_CACHE:"planex_early_bird_cache",EARLY_BIRD_CACHE_DATE:"planex_early_bird_cache_date"},Be={START_MIN:5*60,END_MIN:7*60};function xt(o){if(!o)return o;const e=parseFloat(o.study_minutes||o.studyMinutes||o.total_study_minutes||0),t=parseInt(o.test_count||o.testCount||o.total_tests||0)||0;let n=parseFloat(o.weekly_study_minutes||o.weeklyStudyMinutes||0),a=parseInt(o.weekly_test_count||o.weeklyTestCount||0)||0;!n&&e>0&&(n=e),!a&&t>0&&(a=t);const i=parseFloat(o.alltime_study_minutes||o.allTimeStudyMinutes||o.total_study_minutes_alltime||0),r=parseInt(o.alltime_test_count||o.allTimeTestCount||o.total_tests_alltime||0)||0;return{...o,studyMinutes:Math.round(e),testCount:t,weeklyStudyMinutes:Math.round(Math.max(n,e)),weeklyTestCount:Math.max(a,t),allTimeStudyMinutes:Math.round(Math.max(i,n,e)),allTimeTestCount:Math.max(r,a,t)}}function _e(o,e={},t=3e3){const n=new AbortController,a=setTimeout(()=>n.abort(),t);return fetch(o,{...e,signal:n.signal}).finally(()=>clearTimeout(a))}const S={_studyHeartbeatInterval:null,_currentStudySubject:"",isCurrentStudyingActive(){try{if(typeof window<"u"&&typeof window.isUserStudyingNow=="function")return window.isUserStudyingNow();const o=typeof window<"u"?window.appState:null;if(!o||!!!(o.isPomodoroRunning||o.isStopwatchRunning))return!1;const t=o.focusTimerType===2,n=o.focusActivityMode==="non-study"&&!t;return!t&&!n}catch{return!1}},isMemberStudying(o){if(!o||!o.isStudying)return!1;try{const a=this.getUserProfile();if(o.userId===a.userId||o.isCurrentUser||o.isUser)return this.isCurrentStudyingActive()}catch{}const e=Number(o.lastHeartbeat)||0;if(!e)return!1;const t=15*60*1e3,n=Date.now()-e;return n>=0&&n<t},exportAppState(){try{const o=p.exportAllDataJSON();return JSON.parse(o)}catch(o){console.warn("[Sync] db.exportAllDataJSON failed, using fallback:",o);const e={};for(let t=0;t<localStorage.length;t++){const n=localStorage.key(t);if(n&&(n.startsWith("planex_")||n.startsWith("theme_")||n.startsWith("app_")||n.startsWith("timer_")))try{e[n]=JSON.parse(localStorage.getItem(n))}catch{e[n]=localStorage.getItem(n)}}return e}},importAppState(o){if(!o)return!1;try{return p.importAllDataJSON(o)}catch(e){return console.error("[Sync] db.importAllDataJSON failed:",e),!1}},getOrCreateSyncCode(){let o=localStorage.getItem(ee.SYNC_CODE);if(!o){const e="23456789ABCDEFGHJKLMNPQRSTUVWXYZ";o=`PLX-${Array.from({length:3},()=>e[Math.floor(Math.random()*e.length)]).join("")}`,localStorage.setItem(ee.SYNC_CODE,o)}return o},setSyncCode(o){if(o){const e=String(o).trim().toUpperCase();localStorage.setItem(ee.SYNC_CODE,e)}},async pushSyncCode(o=null){const e=o||this.getOrCreateSyncCode(),t=this.getUserProfile(),n=this.exportAppState(),a=localStorage.getItem("planex_user_avatar")||t.avatar||t.avatar_url||"";a&&n&&typeof n=="object"&&(n.planex_user_avatar=a);const i={code:e,syncCode:e,userId:t.userId,nickname:t.nickname,target:t.target,avatarUrl:a,avatar_url:a,avatar:a,backupData:n,appState:n,updatedAt:Date.now()};try{let r=await _e(`${le}/api/sync-code.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)});if(r.ok||(r=await _e(`${le}/api/v1/sync-code.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})),r.ok)return{success:!0,code:e,message:"کد کپی و اطلاعات شما روی سرور ذخیره شد."};const d=await r.json().catch(()=>({}));throw new Error(d.message||`خطای سرور (${r.status})`)}catch(r){return console.warn("[Sync] Push sync code failed:",r),{success:!1,code:e,message:"خطا در ذخیره ابری داده‌ها: "+r.message}}},async applySyncCode(o){if(!o||!o.trim())return{success:!1,message:"لطفاً کد همگام‌سازی را وارد کنید."};const e=o.trim().toUpperCase();try{let t=await _e(`${le}/api/sync-code.php?code=${e}`);t.ok||(t=await _e(`${le}/api/v1/sync-code.php?code=${e}`)),t.ok||(t=await _e(`${le}/api/leaderboard.php?sync_code=${e}`));const n=await t.text();let a=null;try{a=n?JSON.parse(n):null}catch{a=null}if(t.ok&&a&&a.success&&a.data){const i=a.data,r=i.backupData||i.appState||null;if(r&&this.importAppState(r),i.userId&&localStorage.setItem(ee.USER_ID,i.userId),i.nickname&&(localStorage.setItem(ee.NICKNAME,i.nickname),p&&typeof p.setUserProfile=="function")){const s=p.getUserProfile()||{};p.setUserProfile({...s,name:i.nickname})}i.target&&localStorage.setItem(ee.TARGET,i.target);const d=i.avatarUrl||i.avatar||i.avatar_url||(r==null?void 0:r.planex_user_avatar)||null;if(d){if(localStorage.setItem("planex_user_avatar",d),p&&typeof p.setUserProfile=="function"){const s=p.getUserProfile()||{};p.setUserProfile({...s,avatar:d,avatar_url:d,photo:d,photoUrl:d})}try{const s=JSON.parse(localStorage.getItem("planex_auth_user")||"{}");s&&typeof s=="object"&&(s.avatar_url=d,s.photo_url=d,s.avatar=d,localStorage.setItem("planex_auth_user",JSON.stringify(s)),localStorage.setItem("planex_user_account",JSON.stringify(s)))}catch{}typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("profileUpdated"))}return localStorage.setItem(ee.SYNC_CODE,e),{success:!0,data:i,message:`🎉 تمام اطلاعات، روتین‌ها و ساعات مطالعه با موفقیت از کد «${e}» بازیابی و اعمال شد!`}}return{success:!1,message:(a==null?void 0:a.message)||`کد «${e}» نامعتبر است یا دیتایی برای آن ذخیره نشده است.`}}catch(t){return console.error("[Sync] Sync code lookup failed:",t),{success:!1,message:"خطا در ارتباط با سرور ابری هنگام بازیابی کد: "+t.message}}},getOrCreateUserId(){let o=localStorage.getItem(ee.USER_ID);if(!o){const e=localStorage.getItem("planex_device_sync_id");e?o=e:o="usr_"+Date.now().toString(36)+"_"+Math.random().toString(36).substring(2,7),localStorage.setItem(ee.USER_ID,o)}return o},getUserProfile(){var l,c,y;const o=p.getUserProfile()||{};let e=null;try{e=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}")}catch{}try{const m=(y=(c=(l=window.Telegram)==null?void 0:l.WebApp)==null?void 0:c.initDataUnsafe)==null?void 0:y.user;if(m){const u=[m.first_name,m.last_name].filter(Boolean).join(" ").trim(),b=m.photo_url||"",g=localStorage.getItem(ee.NICKNAME)||e&&(e.full_name||e.name)||o.name||"";if((!g||$e(g))&&u&&(localStorage.setItem(ee.NICKNAME,u),p&&typeof p.setUserProfile=="function")){const x=p.getUserProfile()||{};p.setUserProfile({...x,name:u})}b&&(!e||!e.avatar_url)&&(e=e||{},e.avatar_url=b,e.photo_url=b,localStorage.setItem("planex_auth_user",JSON.stringify(e)))}}catch{}const n=localStorage.getItem("planex_user_avatar")||""||e&&(e.avatar_url||e.avatarUrl||e.photo_url||e.avatar)||o.avatar||o.avatar_url||o.photo||o.photoUrl||"",a=localStorage.getItem(ee.NICKNAME)||localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_nickname")||e&&(e.full_name||e.name||e.nickname)||o.nickname||o.name||"",i=a&&!$e(a)?a.trim():"",r=localStorage.getItem(ee.TARGET)||o.targetField||o.major||o.target||"",d=e&&(e.id||e.telegram_id||e.uid)||this.getOrCreateUserId(),s=e&&(e.phone||e.phone_number)||o.phone||"";return{nickname:i,target:r,userId:d,id:d,telegram_id:(e==null?void 0:e.telegram_id)||d,uid:d,user_id:d,phone:s,phone_number:s,syncCode:this.getOrCreateSyncCode(),avatar_url:n,avatarUrl:n,avatar:n,photo_url:n,photoUrl:n}},saveUserProfile(o,e,t){const n=o?o.trim():"",a=e!==void 0?e.trim():"";if(n&&!$e(n)&&(localStorage.setItem(ee.NICKNAME,n),localStorage.setItem("planex_user_nickname",n),localStorage.setItem("planex_nickname",n),localStorage.setItem("planex_leaderboard_nickname",n)),a&&localStorage.setItem(ee.TARGET,a),t)try{localStorage.setItem("planex_user_avatar",t)}catch{}try{const i=localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account");let r=i?JSON.parse(i):{};n&&!$e(n)&&(r.full_name=n,r.name=n,r.nickname=n),t&&(r.avatar_url=t,r.photo_url=t,r.avatar=t),localStorage.setItem("planex_auth_user",JSON.stringify(r)),localStorage.setItem("planex_user_account",JSON.stringify(r))}catch{}try{const i=localStorage.getItem("planex_user_profile");let r=i?JSON.parse(i):{};n&&!$e(n)&&(r.name=n,r.nickname=n),a&&(r.targetField=a,r.major=a,r.target=a),t&&(r.avatar=t,r.avatar_url=t,r.photo=t,r.photoUrl=t),localStorage.setItem("planex_user_profile",JSON.stringify(r))}catch{}},getUserGroups(){return p&&typeof p.getUserGroups=="function"?p.getUserGroups():[]},setUserGroups(o){return p&&typeof p.setUserGroups=="function"?p.setUserGroups(o):[]},getActiveGroupCode(){return p&&typeof p.getActiveGroupCode=="function"?p.getActiveGroupCode():null},setActiveGroupCode(o){return p&&typeof p.setActiveGroupCode=="function"?p.setActiveGroupCode(o):null},getActiveGroup(){return p&&typeof p.getActiveGroup=="function"?p.getActiveGroup():null},getUserGroupData(){return this.getActiveGroup()},setUserGroupData(o){return o&&p&&typeof p.addUserGroup=="function"?p.addUserGroup(o):null},async deleteGroup(o=null){const e=String(o||this.getActiveGroupCode()||"").trim().toUpperCase();if(!e)return{success:!1,message:"کد گروه مشخص نشده است."};const t=this.getUserProfile();try{await _e(`${le}/api/rooms/delete.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:e,user_id:t.userId,phone:t.phone,creator_id:t.userId})})}catch(n){console.warn("[LeaderboardService] Backend delete room warning:",n)}return localStorage.removeItem(`${ee.GROUP_CACHE_PREFIX}${e}`),localStorage.removeItem(`${ee.GROUP_ROSTER_PREFIX}${e}`),localStorage.removeItem(`squad_pending_${e}`),p&&typeof p.removeUserGroup=="function"&&p.removeUserGroup(e),this.getActiveGroupCode()===e&&(this.setActiveGroupCode(null),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data")),await this.fetchMyRooms().catch(()=>{}),{success:!0,message:`گروه «${e}» با موفقیت به طور کامل حذف شد.`}},async fetchUserGroups(o=!0){const e=this.getUserProfile();try{let t=null;try{t=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}const n=e.phone||(t==null?void 0:t.phone)||(t==null?void 0:t.phone_number)||(()=>{try{const s=JSON.parse(localStorage.getItem("planex_user_profile")||"{}");return s.phone||s.mobile||""}catch{return""}})()||"",a=e.userId||(t==null?void 0:t.id)||(t==null?void 0:t.telegram_id)||(t==null?void 0:t.uid)||"",i=new URLSearchParams;a&&i.set("user_id",a),n&&i.set("phone",n),o&&(i.set("force","1"),i.set("_t",Date.now().toString()));const d=await(await _e(`${le}/api/rooms/my-rooms.php?${i.toString()}`,{cache:"no-store",headers:{"Cache-Control":"no-cache"}})).json();if(d&&d.success&&Array.isArray(d.rooms))if(d.rooms.length>0){p&&typeof p.setUserGroups=="function"&&p.setUserGroups(d.rooms);try{localStorage.setItem("planex_my_groups",JSON.stringify(d.rooms)),localStorage.setItem("planex_my_rooms",JSON.stringify(d.rooms))}catch{}const s=this.getActiveGroupCode();if((!s||!d.rooms.some(l=>(l.code||l.groupCode)===s))&&d.rooms.length>0){const l=d.rooms[0].code||d.rooms[0].groupCode;l&&this.setActiveGroupCode(l)}return window.dispatchEvent(new CustomEvent("groups-updated",{detail:d.rooms})),window.dispatchEvent(new CustomEvent("groups-changed",{detail:d.rooms})),d.rooms}else{const s=this.getUserGroups();return s&&s.length>0?(console.warn("[LeaderboardService] fetchUserGroups received 0 rooms from server, preserving",s.length,"local groups."),s):(p&&typeof p.setUserGroups=="function"&&p.setUserGroups([]),window.dispatchEvent(new CustomEvent("groups-updated",{detail:[]})),window.dispatchEvent(new CustomEvent("groups-changed",{detail:[]})),[])}}catch(t){console.warn("[LeaderboardService] fetchUserGroups error:",t)}return this.getUserGroups()},async fetchMyRooms(o=!0){return this.fetchUserGroups(o)},async fetchPublicRooms(){try{const e=await(await _e(`${le}/api/rooms/public.php`)).json();if(e&&e.success&&Array.isArray(e.rooms))return e.rooms}catch(o){console.warn("[LeaderboardService] fetchPublicRooms error:",o)}return[]},async fetchPendingRequests(o=null){const e=o||this.getActiveGroupCode();if(!e)return[];try{const t=this.getUserProfile(),a=await(await _e(`${le}/api/rooms/requests.php?room_code=${encodeURIComponent(e)}&user_id=${encodeURIComponent(t.userId)}`)).json();if(a&&a.success&&Array.isArray(a.requests))return a.requests}catch(t){console.warn("[LeaderboardService] fetchPendingRequests error:",t)}return[]},async handleMembershipRequest(o,e,t="approve"){const n=o||this.getActiveGroupCode(),a=this.getUserProfile();try{return await(await _e(`${le}/api/rooms/requests.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:n,action:t,target_user_id:e,admin_id:a.userId,phone:a.phone})})).json()}catch(i){return console.error("[LeaderboardService] handleMembershipRequest error:",i),{success:!1,message:i.message}}},async approveMember(o,e){const t=String(o||this.getActiveGroupCode()||"").trim().toUpperCase();if(!t||!e)return{success:!1,message:"شناسه گروه یا کاربر نامعتبر است."};const n=await this.handleMembershipRequest(t,e,"approve"),a=this.getGroupRoster(t),i=a.findIndex(r=>r.userId===e||r.id===e||r.phone===e);if(i>=0)a[i].status="approved";else{const d=(window.groupPendingRequests||[]).find(s=>(s.userId||s.user_id||s.phone)===e)||{};a.push({userId:e,nickname:d.nickname||d.name||"کاربر جدید",target:d.target||"کنکور سراسری",joinedAt:Date.now(),isOwner:!1,status:"approved"})}return this.saveGroupRoster(t,a),Array.isArray(window.groupPendingRequests)&&(window.groupPendingRequests=window.groupPendingRequests.filter(r=>(r.userId||r.user_id||r.phone)!==e)),this.fetchLeaderboard(null,!0,t).catch(()=>{}),{success:!0,message:n&&n.message?n.message:"کاربر با موفقیت به گروه اضافه شد"}},async rejectMember(o,e){const t=String(o||this.getActiveGroupCode()||"").trim().toUpperCase();if(!t||!e)return{success:!1,message:"شناسه گروه یا کاربر نامعتبر است."};const n=await this.handleMembershipRequest(t,e,"reject"),i=this.getGroupRoster(t).filter(r=>r.userId!==e&&r.id!==e&&r.phone!==e);return this.saveGroupRoster(t,i),Array.isArray(window.groupPendingRequests)&&(window.groupPendingRequests=window.groupPendingRequests.filter(r=>(r.userId||r.user_id||r.phone)!==e)),{success:!0,message:n&&n.message?n.message:"درخواست عضویت رد شد"}},async toggleGroupPrivacy(o,e){const t=o||this.getActiveGroupCode();try{const a=await(await _e(`${le}/api/rooms/toggle-type.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:t,is_private:e?1:0})})).json();if(a&&a.success){const i=this.getUserGroups(),r=i.find(d=>(d.code||d.groupCode)===t);return r&&(r.is_private=e?1:0,r.type=e?"private":"public",p&&typeof p.setUserGroups=="function"&&p.setUserGroups(i)),a}return a}catch(n){console.error("[LeaderboardService] toggleGroupPrivacy error:",n)}return{success:!1,message:"خطا در برقراری ارتباط با سرور"}},generateGroupCode(){return`PLX-${Math.floor(1e3+Math.random()*9e3)}`},async createPrivateGroup(o,e=!1,t={}){const n=this.generateGroupCode(),a=this.getUserProfile(),i=o&&o.trim()?o.trim():`گروه ${n}`,r={code:n,groupCode:n,name:i,groupName:i,joinedAt:Date.now(),isOwner:!0,is_private:e?1:0,type:e?"private":"public",status:"approved",userId:a.userId,category:t.category||"general",capacity:t.capacity||600,announcement:t.announcement||""};p&&typeof p.addUserGroup=="function"&&p.addUserGroup(r);try{await _e(`${le}/api/rooms/create.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:n,title:i,phone:a.phone,creator_phone:a.phone,creator_id:a.userId,admin_id:a.userId,user_id:a.userId,is_private:e?1:0,type:e?"private":"public",user:{name:a.nickname,avatar_url:a.avatarUrl},category:t.category||"general",announcement:t.announcement||""})})}catch(s){console.warn("[LeaderboardService] Backend create room call warning:",s)}const d=[{userId:a.userId,nickname:a.nickname,target:a.target,joinedAt:Date.now(),isOwner:!0,status:"approved"}];return this.saveGroupRoster(n,d),await this.syncUserScore(!0,n),{success:!0,groupCode:n,groupName:i,groupData:r}},async createGroup(o,e=!1,t={}){return this.createPrivateGroup(o,e,t)},isUserVerified(){var a,i,r;let o=null;try{o=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}const e=this.getUserProfile(),t=(r=(i=(a=window.Telegram)==null?void 0:a.WebApp)==null?void 0:i.initDataUnsafe)==null?void 0:r.user;return!!(t&&t.id||o&&(o.id||o.telegram_id||o.phone||o.phone_number)||e&&(e.phone||e.phone_number||e.telegram_id||e.userId&&!e.userId.startsWith("usr_"))||localStorage.getItem("planex_user_phone"))},async joinPrivateGroup(o,e=null){if(!o||!o.trim())return{success:!1,message:"لطفاً کد ۶ رقمی یا شماره گروه را وارد نمایید."};const t=String(o).trim().toUpperCase().replace(/[^A-Z0-9-]/g,"");if(t.length<4)return{success:!1,message:"فرمت کد گروه نامعتبر است (مثال: PLX-4829)."};const n=this.getUserProfile();if(!this.isUserVerified())return typeof window.openLoginModal=="function"?window.openLoginModal():window.appState&&(window.appState.activeModal="login",window.renderApp&&window.renderApp()),{success:!1,requiresVerification:!0,message:"برای پیوستن به گروه، لطفاً ابتدا حساب کاربری خود را در ربات تلگرام یا اپلیکیشن تایید نمایید."};let a=null;try{a=await(await _e(`${le}/api/rooms/join.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:t,phone:n.phone,user_phone:n.phone,user_id:n.userId,nickname:n.nickname,user:{name:n.nickname,avatar_url:n.avatarUrl},bypass_pending:!0,auto_approve:!0,action:"join"})})).json().catch(()=>null)}catch(c){console.warn("[LeaderboardService] Backend join call warning:",c)}const i=a&&a.room?a.room:null,r=e||(i?i.title:`گروه ${t}`),d={code:t,groupCode:t,name:r,groupName:r,joinedAt:Date.now(),isOwner:!1,status:"approved",is_private:i&&i.is_private?1:0,userId:n.userId};p&&typeof p.addUserGroup=="function"&&p.addUserGroup(d);const s=this.getGroupRoster(t),l=s.findIndex(c=>c.userId===n.userId||c.id===n.userId);return l<0?s.push({userId:n.userId,nickname:n.nickname,target:n.target,joinedAt:Date.now(),isOwner:!1,status:"approved"}):(s[l].status="approved",s[l].nickname=n.nickname||s[l].nickname,s[l].target=n.target||s[l].target),this.saveGroupRoster(t,s),this.setActiveGroupCode(t),await this.syncUserScore(!0,t).catch(()=>{}),await this.fetchLeaderboard(null,!0,t).catch(()=>{}),{success:!0,pending:!1,groupCode:t,groupName:r,groupData:d,message:"با موفقیت به گروه پیوستید! 🎉"}},async joinGroupByCode(o,e=null){return this.joinPrivateGroup(o,e)},async joinGroupByLink(o){let e=o;if(e&&e.includes("group=")){const t=e.match(/group=([^&]+)/);t&&(e=t[1])}return this.joinPrivateGroup(e)},getGroupRoster(o){if(!o)return[];try{const e=localStorage.getItem(`${ee.GROUP_ROSTER_PREFIX}${o}`);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}},saveGroupRoster(o,e){if(!(!o||!Array.isArray(e)))try{localStorage.setItem(`${ee.GROUP_ROSTER_PREFIX}${o}`,JSON.stringify(e))}catch{}},getTodayDateStr(){try{return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Tehran",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date)}catch{return new Date().toISOString().split("T")[0]}},getTodayStats(){const o=p.getTodayJalaliString(),e=p.getStudyMinutesByDate(o),t=+(e/60).toFixed(2),n=p.getDailyTestCount(o),a=typeof p.getTodayStudiedSubjects=="function"?p.getTodayStudiedSubjects(o):[],i=this.getTodayDateStr(),r=o;return{studyMinutes:e,studyHours:t,testCount:n,subjects:Array.isArray(a)?a:[],gregorianDate:i,jalaliDateStr:r}},getPersianWeekWindow(o=new Date){const e=new Date(o),t=(e.getDay()+1)%7,n=new Date(e.getFullYear(),e.getMonth(),e.getDate()-t,0,0,0,0),a=new Date(n.getFullYear(),n.getMonth(),n.getDate()+6,23,59,59,999),i=[],r=[];for(let d=0;d<7;d++){const s=new Date(n.getFullYear(),n.getMonth(),n.getDate()+d),l=s.getFullYear(),c=String(s.getMonth()+1).padStart(2,"0"),y=String(s.getDate()).padStart(2,"0");if(r.push(`${l}-${c}-${y}`),p&&typeof p.gregorianToJalali=="function"){const[m,u,b]=p.gregorianToJalali(l,s.getMonth()+1,s.getDate());i.push(`${m}/${String(u).padStart(2,"0")}/${String(b).padStart(2,"0")}`)}}return{satDate:n,friDate:a,startTimestamp:n.getTime(),endTimestamp:a.getTime(),satDateStr:`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`,weekJalaliDates:i,weekGregorianDates:r}},getWeeklyStats(){const o=this.getPersianWeekWindow();let e=0,t=0;const n=new Set;let a=[];try{const r=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),d=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),s=new Map;Array.isArray(d)&&d.forEach(l=>{l&&(l.id||l.timestamp)&&s.set(l.id||`ts_${l.timestamp}_${l.duration}`,l)}),Array.isArray(r)&&r.forEach(l=>{l&&(l.id||l.timestamp)&&s.set(l.id||`ts_${l.timestamp}_${l.duration}`,l)}),a=Array.from(s.values())}catch{a=[]}a.forEach(r=>{if(!r||typeof r!="object")return;const d=Number(r.timestamp||r.createdAt||r.endTime||0),s=p&&typeof p.normalizeJalaliDate=="function"?p.normalizeJalaliDate(r.dateStr||r.date):r.dateStr||r.date,l=d>=o.startTimestamp&&d<=o.endTimestamp,c=s&&o.weekJalaliDates.includes(s);if((l||c)&&!(r.type==="non-study"||r.type==="non_study"||r.type==="break"||r.activityType==="non_study"||r.activityType==="non-study"||r.activityType==="break"||r.isStudy===!1||r.is_study_time===!1||r.counts_for_study===!1||r.isBreak===!0||r.is_break===!0||r.timerType==="break"||r.timerType===2)){e+=Math.max(0,Math.ceil(Number(r.duration!==void 0?r.duration:r.minutes)||0)),t+=Math.max(0,Number(r.testCount!==void 0?r.testCount:r.tests)||0);const m=r.subject&&r.subject.trim()!=="مطالعه متمرکز"?r.subject.trim():r.categoryTitle||r.category;m&&m.trim()&&n.add(m.trim())}});try{const r=JSON.parse(localStorage.getItem("planex_recorded_timer")||"{}");let d=0,s=0;o.weekJalaliDates.forEach(l=>{r[l]&&(d+=Number(r[l].minutes)||0,s+=Number(r[l].tests)||0)}),e=Math.max(e,d),t=Math.max(t,s)}catch{}if(p&&typeof p.getDailyStats=="function"){let r=0,d=0;o.weekJalaliDates.forEach(s=>{try{const l=p.getDailyStats(s);l&&(r+=Number(l.studyMinutes)||0,d+=Number(l.totalTests)||0)}catch{}}),e=Math.max(e,r),t=Math.max(t,d)}const i=this.getTodayStats();return e=Math.max(e,Number(i.studyMinutes)||0),t=Math.max(t,Number(i.testCount)||0),{studyMinutes:e,studyHours:+(e/60).toFixed(2),testCount:t,subjects:Array.from(n),weekWindow:o}},calculateMemberPeriodStats(o,e="week",t=null){if(!o)return{totalMinutes:0,totalTests:0};const n=t||this.getPersianWeekWindow(),a=!!(o.isUser||o.isCurrentUser||this.getUserProfile()&&o.userId===this.getUserProfile().userId),i=Number(o.studyMinutes||o.study_minutes||0),r=Number(o.testCount||o.test_count||0);if(e==="today"){let g=i,f=r;if(a){const x=this.getTodayStats();g=Math.max(g,Number((x==null?void 0:x.studyMinutes)||0)),f=Math.max(f,Number((x==null?void 0:x.testCount)||0))}return{totalMinutes:Math.round(g),totalTests:Math.round(f)}}let d=0,s=0;const l=g=>{if(!g||typeof g!="object")return;const f=Number(g.duration!==void 0?g.duration:g.minutes!==void 0?g.minutes:g.studyMinutes||g.study_minutes||0)||0,x=Number(g.testCount!==void 0?g.testCount:g.tests!==void 0?g.tests:g.test_count||0)||0;if(!(g.type==="non-study"||g.type==="non_study"||g.type==="break"||g.activityType==="non_study"||g.activityType==="non-study"||g.activityType==="break"||g.isStudy===!1||g.is_study_time===!1||g.counts_for_study===!1||g.isBreak===!0||g.is_break===!0||g.timerType==="break"||g.timerType===2)){if(e==="all")d+=Math.max(0,f),s+=Math.max(0,x);else if(e==="week"){const A=Number(g.timestamp||g.createdAt||g.endTime||0),k=String(g.dateStr||g.date||g.jalaliDate||"").trim(),$=k.replace(/\//g,"-"),M=A>=n.startTimestamp&&A<=n.endTimestamp,I=k&&(n.weekJalaliDates.includes(k)||n.weekJalaliDates.map(D=>D.replace(/\//g,"-")).includes($)||n.weekGregorianDates.includes(k));(M||I||!A&&!k)&&(d+=Math.max(0,f),s+=Math.max(0,x))}}};e==="week"&&Array.isArray(o.weeklyHistory)&&o.weeklyHistory.forEach(l),Array.isArray(o.history)?o.history.forEach(l):o.history&&typeof o.history=="object"&&Object.entries(o.history).forEach(([g,f])=>{typeof f=="number"?l({date:g,duration:f,testCount:0}):f&&typeof f=="object"&&l({date:g,...f})});const c=o.sessions||o.dailyLogs||o.logs||o.dailyHistory;Array.isArray(c)&&c.forEach(l);let y=Math.max(d,Number(o.weeklyStudyMinutes!==void 0?o.weeklyStudyMinutes:o.weekly_study_minutes||o.weeklyMinutes||0),i),m=Math.max(s,Number(o.weeklyTestCount!==void 0?o.weeklyTestCount:o.weekly_test_count||o.weeklyTests||0),r),u=Math.max(d,Number(o.allTimeStudyMinutes!==void 0?o.allTimeStudyMinutes:o.alltime_study_minutes||o.totalStudyMinutes||o.totalMinutes||0),y,i),b=Math.max(s,Number(o.allTimeTestCount!==void 0?o.allTimeTestCount:o.alltime_test_count||o.totalTestCount||o.totalTests||0),m,r);if(a){const g=this.getWeeklyStats();if(g&&(y=Math.max(y,Number(g.studyMinutes||0)),m=Math.max(m,Number(g.testCount||0))),p&&typeof p.getStudyStatsByPeriod=="function"){const f=p.getStudyStatsByPeriod("all");f&&(u=Math.max(u,Number(f.studyMinutes||0),y),b=Math.max(b,Number(f.testCount||0),m))}}return e==="week"?{totalMinutes:Math.round(y),totalTests:Math.round(m)}:{totalMinutes:Math.round(u),totalTests:Math.round(b)}},aggregateAndRankMembers(o,e="today"){if(!Array.isArray(o))return[];const t=this.getPersianWeekWindow(),n=o.map(a=>{const i=this.calculateMemberPeriodStats(a,e,t),r=i.totalMinutes,d=i.totalTests,s=r*60+d*10;return{...a,totalMinutes:r,totalTests:d,displayStudyMins:r,displayTestCount:d,studyMinutes:e==="today"?r:a.studyMinutes||a.study_minutes||0,testCount:e==="today"?d:a.testCount||a.test_count||0,weeklyStudyMinutes:e==="week"?r:a.weeklyStudyMinutes||a.weekly_study_minutes||r,weeklyTestCount:e==="week"?d:a.weeklyTestCount||a.weekly_test_count||d,allTimeStudyMinutes:e==="all"?r:a.allTimeStudyMinutes||a.alltime_study_minutes||r,allTimeTestCount:e==="all"?d:a.allTimeTestCount||a.alltime_test_count||d,score:s}});return n.sort((a,i)=>i.score!==a.score?i.score-a.score:i.totalMinutes!==a.totalMinutes?i.totalMinutes-a.totalMinutes:i.totalTests-a.totalTests),n.map((a,i)=>({...a,rank:i+1}))},canAutoSync(){return!1},getSyncStatus(){const o=parseInt(localStorage.getItem(ee.LAST_SYNC)||"0");if(!o)return{hasSyncedBefore:!1,lastSyncText:"هنوز همگام‌سازی نشده"};const e=Date.now()-o,t=Math.floor(e/(60*1e3)),n=Math.floor(t/60);let a="";return t<1?a="لحظاتی پیش":t<60?a=`${t} دقیقه پیش`:a=`${n} ساعت و ${t%60} دقیقه پیش`,{hasSyncedBefore:!0,lastSyncTimestamp:o,lastSyncText:a}},async syncUserScore(o=!1,e=null){const t=this.getUserGroups();if(t.length===0&&!e)return{success:!1,noGroup:!0,message:"شما در هیچ گروه رقابتی عضو نیستید. لطفاً ابتدا یک گروه بسازید یا با کد وارد شوید."};const n=e?t.filter(r=>r.code===String(e).trim().toUpperCase()):t;n.length===0&&e&&n.push({code:String(e).trim().toUpperCase(),name:`گروه ${e}`});let a=null;const i=this.getActiveGroupCode();for(const r of n){const d=await this.syncSingleGroupScore(r);(!a||r.code===i)&&(a=d)}return a||{success:!0,message:"کارنامه در گروه‌ها ثبت شد."}},async setStudyStatus(o,e="",t=!1,n="study"){const a=this.getUserGroups(),i=this.getActiveGroup(),r=this.getUserProfile(),d=Date.now(),s=String(e||"").trim(),l=!!o&&n==="study";let c="";l?c="🟢 در حال مطالعه":n==="break"?c="☕ در حال استراحت":(n==="non-study"||n==="non_study")&&(c="🧘 فعالیت غیردرسی");const y=Array.isArray(a)&&a.length>0?a:i?[i]:[];if(y.length===0)return{success:!1,noGroup:!0};if(y.forEach(u=>{const b=String(u.code||u.groupCode).trim().toUpperCase();if(!b)return;const g=this.getGroupRoster(b),f=g.findIndex(x=>x.userId===r.userId);f>=0&&(g[f].isStudying=l,g[f].statusType=n,g[f].statusLabel=c,g[f].studySubject=l?s:"",g[f].subject=l?s:"",g[f].lastHeartbeat=l?d:0,this.saveGroupRoster(b,g));try{const x=localStorage.getItem(`${ee.GROUP_CACHE_PREFIX}${b}`);if(x){let w=JSON.parse(x);if(Array.isArray(w)){const A=w.findIndex(k=>k.userId===r.userId);A>=0&&(w[A].isStudying=l,w[A].statusType=n,w[A].statusLabel=c,w[A].studySubject=l?s:"",w[A].subject=l?s:"",w[A].lastHeartbeat=l?d:0),localStorage.setItem(`${ee.GROUP_CACHE_PREFIX}${b}`,JSON.stringify(w))}}}catch{}}),!l)try{for(let u=0;u<localStorage.length;u++){const b=localStorage.key(u);if(b&&(b.startsWith(ee.GROUP_ROSTER_PREFIX)||b.startsWith(ee.GROUP_CACHE_PREFIX))){const g=localStorage.getItem(b);if(g&&g.includes(r.userId)){const f=JSON.parse(g);if(Array.isArray(f)){let x=!1;f.forEach(w=>{w.userId===r.userId&&w.isStudying&&(w.isStudying=!1,w.statusType="stopped",w.statusLabel="",w.studySubject="",w.subject="",w.lastHeartbeat=0,x=!0)}),x&&localStorage.setItem(b,JSON.stringify(f))}}}}}catch{}const m=y.map(async u=>{const b=String(u.code||u.groupCode).trim().toUpperCase();if(!b)return;const g=r.avatar_url||r.avatarUrl||r.avatar||r.photo_url||"",f={action:"set_status",groupCode:b,userId:r.userId,nickname:r.nickname,name:r.nickname,target:r.target,avatar_url:g,avatarUrl:g,avatar:g,photo_url:g,isStudying:l,statusType:n,statusLabel:c,subject:l?s:"",studySubject:l?s:"",lastHeartbeat:l?d:0},x=[`${le}/api/leaderboard.php`,`${le}/api/v1/leaderboard.php`];for(const w of x)try{const A=await _e(w,{method:"POST",headers:{"Content-Type":"application/json","Cache-Control":"no-cache",Pragma:"no-cache"},body:JSON.stringify(f),keepalive:t});if(A.ok)return await A.json().catch(()=>({success:!0}))}catch{}});try{return await Promise.allSettled(m),{success:!0,isStudying:l,statusType:n,statusLabel:c,subject:l?s:"",lastHeartbeat:l?d:0}}catch{return{success:!1,offline:!0}}},startStudyHeartbeat(o="",e="study"){this._currentStudySubject=o||"",this._studyHeartbeatInterval&&(typeof this._studyHeartbeatInterval!="boolean"&&clearInterval(this._studyHeartbeatInterval),this._studyHeartbeatInterval=null),this._studyHeartbeatInterval=!0;const t=e==="study";this.setStudyStatus(t,this._currentStudySubject,!1,e).catch(()=>{})},stopStudyHeartbeat(){this._studyHeartbeatInterval&&(typeof this._studyHeartbeatInterval!="boolean"&&clearInterval(this._studyHeartbeatInterval),this._studyHeartbeatInterval=null),this._currentStudySubject="",this.setStudyStatus(!1,"",!1,"stopped").catch(()=>{})},async syncSingleGroupScore(o){if(!o)return{success:!1,noGroup:!0};const e=this.getUserProfile(),t=this.getTodayStats(),n=this.getWeeklyStats(),a=p&&typeof p.getStudyStatsByPeriod=="function"?p.getStudyStatsByPeriod("all"):t,i=String(o.code||o.groupCode||o.room_code||o.id||"").trim().toUpperCase();if(!i||i==="UNDEFINED"||i==="NULL"||i==="0")return{success:!1,noGroup:!0,message:"کد گروه معتبر نیست."};const r=String(o.name||o.groupName||`گروه ${i}`).trim(),d=this.getGroupRoster(i).find(b=>b.userId===e.userId)||{},s=this.isCurrentStudyingActive(),l=s&&(this._currentStudySubject||d.studySubject)||"",c=e.avatar_url||e.avatarUrl||e.avatar||e.photo_url||"",y={action:"sync",groupCode:i,groupName:r,userId:e.userId,nickname:e.nickname,name:e.nickname,target:e.target,avatar_url:c,avatarUrl:c,avatar:c,photo_url:c,syncCode:e.syncCode||this.getOrCreateSyncCode(),studyMinutes:t.studyMinutes,testCount:t.testCount,weeklyStudyMinutes:Math.max(Number(n.studyMinutes||0),Number(t.studyMinutes||0)),weeklyTestCount:Math.max(Number(n.testCount||0),Number(t.testCount||0)),allTimeStudyMinutes:Math.max(Number(a.studyMinutes||0),Number(n.studyMinutes||0),Number(t.studyMinutes||0)),allTimeTestCount:Math.max(Number(a.testCount||0),Number(n.testCount||0),Number(t.testCount||0)),subjects:t.subjects||[],isStudying:s,subject:l,studySubject:l,lastHeartbeat:s?Date.now():0,date:t.gregorianDate,updatedAt:Date.now()},m=[`${le}/api/leaderboard.php`,`${le}/api/v1/leaderboard.php`];for(const b of m)try{const g=await _e(b,{method:"POST",headers:{"Content-Type":"application/json","Cache-Control":"no-cache",Pragma:"no-cache"},body:JSON.stringify(y)}),f=await g.text();let x=null;try{x=f?JSON.parse(f):null}catch{x=null}if(g.ok&&x&&x.success!==!1){localStorage.setItem(ee.LAST_SYNC,String(Date.now()));const w=x.list||x.leaderboard||[],A=Array.isArray(w)?w.map(xt):[];return A.length>0?(localStorage.setItem(`${ee.GROUP_CACHE_PREFIX}${i}`,JSON.stringify(A)),localStorage.setItem(ee.CACHE_DATE,t.gregorianDate)):this.updateLocalGroupCacheWithUser(i,y),Array.isArray(x.roster)&&x.roster.length>0&&this.saveGroupRoster(i,x.roster),{success:!0,serverConfirmed:!0,endpoint:b,rank:x.rank,groupCode:i,groupName:x.groupName||r,leaderboard:A,list:A,entry:y,message:x.message||"کارنامه با موفقیت در گروه اختصاصی ثبت شد."}}}catch(g){console.error("[Leaderboard] Sync failed for group",i,g)}this.updateLocalGroupCacheWithUser(i,y);const u=this.getCachedLeaderboard(t.gregorianDate,i);return{success:!1,serverConfirmed:!1,offline:!0,entry:y,groupCode:i,groupName:r,leaderboard:u.leaderboard,message:"ثبت محلی در گروه انجام شد (سرور موقتاً در دسترس نیست)."}},async syncUserProgress(){return this.syncUserScore()},async fetchLeaderboard(o=null,e=!1,t=null){const n=o||this.getTodayDateStr(),a=t||this.getActiveGroupCode(),r=this.getUserGroups().find(d=>d.code===a)||this.getActiveGroup();if(!a)return{success:!0,noGroup:!0,fromCache:!1,leaderboard:[],list:[],date:n};try{const d=e?`&_t=${Date.now()}`:"";let s=await _e(`${le}/api/leaderboard.php?groupCode=${a}&date=${n}${d}`,{cache:"no-store",headers:{"Cache-Control":"no-cache",Pragma:"no-cache"}});s.ok||(s=await _e(`${le}/api/v1/leaderboard.php?groupCode=${a}&date=${n}${d}`,{cache:"no-store",headers:{"Cache-Control":"no-cache",Pragma:"no-cache"}}));const l=await s.text();let c=null;try{c=l?JSON.parse(l):null}catch{c=null}if(s.ok&&c){const y=c.list||c.leaderboard;if(c.success&&Array.isArray(y)){const m=this.isCurrentStudyingActive(),u=y.map(b=>{const g=xt(b);return g.userId===profile.userId&&(g.isStudying=m,m||(g.studySubject="",g.subject="",g.lastHeartbeat=0)),g});if(localStorage.setItem(`${ee.GROUP_CACHE_PREFIX}${a}`,JSON.stringify(u)),localStorage.setItem(ee.CACHE_DATE,n),Array.isArray(c.roster)){const b=c.roster.map(g=>g.userId===profile.userId?{...g,isStudying:m,studySubject:m&&g.studySubject||"",subject:m&&g.subject||"",lastHeartbeat:m?g.lastHeartbeat||Date.now():0}:g);this.saveGroupRoster(a,b)}return r&&(r.members=u,this.setUserGroupData({...r,members:u,...c.groupName?{name:c.groupName,groupName:c.groupName}:{}})),{success:!0,fromCache:!1,leaderboard:u,list:u,groupCode:a,groupName:c.groupName||(r?r.name||r.groupName:`گروه ${a}`),groupData:this.getUserGroupData()||r,date:n}}}throw new Error("Non-success leaderboard response")}catch(d){return console.warn("Leaderboard fetch failed, falling back to local group cache:",d),this.getCachedLeaderboard(n,a)}},getCachedLeaderboard(o=null,e=null){const t=o||this.getTodayDateStr(),n=e||this.getActiveGroupCode(),i=this.getUserGroups().find(k=>k.code===n)||this.getActiveGroup();if(!n)return{success:!0,noGroup:!0,fromCache:!0,offline:!0,leaderboard:[],list:[],date:t};const r=this.getGroupRoster(n),d=localStorage.getItem(`${ee.GROUP_CACHE_PREFIX}${n}`);let s=[];if(d)try{s=JSON.parse(d)}catch{s=[]}Array.isArray(s)||(s=[]);const l=this.getUserProfile(),c=this.getTodayStats(),y=new Map;r.forEach(k=>{const $=this.calculateMemberPeriodStats(k,"today"),M=this.calculateMemberPeriodStats(k,"week"),I=this.calculateMemberPeriodStats(k,"all");y.set(k.userId,{userId:k.userId,nickname:k.nickname||"داوطلب",target:k.target||"کنکور سراسری",avatarUrl:k.avatarUrl||"",studyMinutes:Math.max(Number(k.studyMinutes||0),$.totalMinutes),testCount:Math.max(Number(k.testCount||0),$.totalTests),weeklyStudyMinutes:Math.max(Number(k.weeklyStudyMinutes||0),M.totalMinutes),weeklyTestCount:Math.max(Number(k.weeklyTestCount||0),M.totalTests),allTimeStudyMinutes:Math.max(Number(k.allTimeStudyMinutes||0),I.totalMinutes),allTimeTestCount:Math.max(Number(k.allTimeTestCount||0),I.totalTests),subjects:k.subjects||[],dailyLogs:k.dailyLogs||k.logs||k.history||[],history:k.history||[],isOwner:!!k.isOwner,joinedAt:k.joinedAt||Date.now(),date:t,isStudying:!!k.isStudying,studySubject:k.studySubject||k.subject||"",subject:k.studySubject||k.subject||"",lastHeartbeat:k.lastHeartbeat||0,updatedAt:k.joinedAt||Date.now()})}),s.forEach(k=>{if(k&&k.userId){const $=xt(k),M=y.get($.userId)||{},I=this.calculateMemberPeriodStats($,"today"),D=this.calculateMemberPeriodStats($,"week"),T=this.calculateMemberPeriodStats($,"all");y.set($.userId,{...M,...$,studyMinutes:Math.max(Number(M.studyMinutes||0),Number($.studyMinutes||0),I.totalMinutes),testCount:Math.max(Number(M.testCount||0),Number($.testCount||0),I.totalTests),weeklyStudyMinutes:Math.max(Number(M.weeklyStudyMinutes||0),Number($.weeklyStudyMinutes||0),D.totalMinutes),weeklyTestCount:Math.max(Number(M.weeklyTestCount||0),Number($.weeklyTestCount||0),D.totalTests),allTimeStudyMinutes:Math.max(Number(M.allTimeStudyMinutes||0),Number($.allTimeStudyMinutes||0),T.totalMinutes),allTimeTestCount:Math.max(Number(M.allTimeTestCount||0),Number($.allTimeTestCount||0),T.totalTests),dailyLogs:$.dailyLogs||$.logs||M.dailyLogs||[],history:$.history||M.history||[],isStudying:$.isStudying!==void 0?!!$.isStudying:!!M.isStudying,studySubject:$.studySubject||$.subject||M.studySubject||"",subject:$.studySubject||$.subject||M.subject||"",lastHeartbeat:$.lastHeartbeat||M.lastHeartbeat||0})}});const m=r.find(k=>k.userId===l.userId)||{},u=this.isCurrentStudyingActive(),b=u&&(this._currentStudySubject||m.studySubject||m.subject)||"",g=u?Date.now():0;m&&m.userId&&(m.isStudying=u,m.studySubject=b,m.subject=b,m.lastHeartbeat=g,this.saveGroupRoster(n,r));const f=this.getWeeklyStats(),x=p&&typeof p.getStudyStatsByPeriod=="function"?p.getStudyStatsByPeriod("all"):c,w={userId:l.userId,nickname:l.nickname,target:l.target,avatarUrl:l.avatar_url||l.avatarUrl||"",avatar_url:l.avatar_url||l.avatarUrl||"",studyMinutes:c.studyMinutes,testCount:c.testCount,weeklyStudyMinutes:Math.max(Number(f.studyMinutes||0),Number(c.studyMinutes||0)),weeklyTestCount:Math.max(Number(f.testCount||0),Number(c.testCount||0)),allTimeStudyMinutes:Math.max(Number(x.studyMinutes||0),Number(f.studyMinutes||0),Number(c.studyMinutes||0)),allTimeTestCount:Math.max(Number(x.testCount||0),Number(f.testCount||0),Number(c.testCount||0)),subjects:c.subjects||[],date:t,isCurrentUser:!0,isOwner:!!(i&&i.isOwner),isStudying:u,studySubject:b,subject:b,lastHeartbeat:g,updatedAt:Date.now()};y.set(l.userId,w);const A=Array.from(y.values());return A.sort((k,$)=>($.studyMinutes||0)!==(k.studyMinutes||0)?($.studyMinutes||0)-(k.studyMinutes||0):($.testCount||0)-(k.testCount||0)),i&&(i.members=A),{success:!0,fromCache:!0,offline:!0,groupCode:i?i.groupCode||i.code:n,groupName:i?i.groupName||i.name:`گروه ${n}`,groupData:i,leaderboard:A,list:A,date:t}},updateLocalGroupCacheWithUser(o,e){try{const t=this.getGroupRoster(o),n=t.findIndex(r=>r.userId===e.userId);n<0?(t.push({userId:e.userId,nickname:e.nickname,target:e.target,joinedAt:Date.now(),isOwner:!!e.isOwner,isStudying:!!e.isStudying,studySubject:e.studySubject||e.subject||"",subject:e.studySubject||e.subject||"",lastHeartbeat:e.lastHeartbeat||Date.now()}),this.saveGroupRoster(o,t)):(t[n]={...t[n],isStudying:e.isStudying!==void 0?!!e.isStudying:t[n].isStudying,studySubject:e.studySubject||e.subject||t[n].studySubject||"",subject:e.studySubject||e.subject||t[n].subject||"",lastHeartbeat:e.lastHeartbeat||t[n].lastHeartbeat||Date.now()},this.saveGroupRoster(o,t));const a=localStorage.getItem(`${ee.GROUP_CACHE_PREFIX}${o}`);let i=[];if(a)try{i=JSON.parse(a)}catch{i=[]}Array.isArray(i)||(i=[]),i=i.filter(r=>r.userId!==e.userId),i.push({...e,isCurrentUser:!0}),i.sort((r,d)=>(d.studyMinutes||0)!==(r.studyMinutes||0)?(d.studyMinutes||0)-(r.studyMinutes||0):(d.testCount||0)-(r.testCount||0)),localStorage.setItem(`${ee.GROUP_CACHE_PREFIX}${o}`,JSON.stringify(i))}catch(t){console.error("Error updating local group cache:",t)}},getIranNowHHMM(){try{return new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Tehran",hour:"2-digit",minute:"2-digit",hour12:!1}).format(new Date)}catch{const e=new Date;return`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`}},isEarlyBirdWindowOpen(){const[o,e]=this.getIranNowHHMM().split(":").map(Number),t=o*60+(e||0);return t>=Be.START_MIN&&t<=Be.END_MIN},getEarlyBirdHistory(){try{const o=localStorage.getItem(ee.EARLY_BIRD_HISTORY),e=o?JSON.parse(o):{};return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}catch{return{}}},extractSessionStartMinutes(o){if(!o||typeof o!="object")return null;const e=i=>{if(i==null||i==="")return null;if(typeof i=="string"){const r=String(i).replace(/[۰-۹]/g,l=>"۰۱۲۳۴۵۶۷۸۹".indexOf(l)).replace(/[٠-٩]/g,l=>"٠١٢٣٤٥٦٧٨٩".indexOf(l)).trim(),d=r.match(/(?:^|\b|T|\s)(\d{1,2}):(\d{2})/);if(d){const l=Number(d[1]),c=Number(d[2]);if(!isNaN(l)&&!isNaN(c)&&l>=0&&l<24&&c>=0&&c<60)return l*60+c}const s=Number(r);if(!isNaN(s)&&s>1e11)i=s;else{const l=new Date(r);isNaN(l.getTime())||(i=l.getTime())}}if(typeof i=="number"&&!isNaN(i)){const r=new Date(i);if(!isNaN(r.getTime())){try{const c=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Tehran",hour:"2-digit",minute:"2-digit",hour12:!1}).format(r).split(":").map(Number);if(!isNaN(c[0])&&!isNaN(c[1])){const y=c[0]*60+c[1];if(y>=Be.START_MIN&&y<=Be.END_MIN)return y}}catch{}const d=r.getHours()*60+r.getMinutes();if(d>=Be.START_MIN&&d<=Be.END_MIN)return d;const s=r.getUTCHours()*60+r.getUTCMinutes();return s>=Be.START_MIN&&s<=Be.END_MIN?s:d}}return null},t=[o.startTimeStr,o.startTime,o.start_time,o.time];for(const i of t){const r=e(i);if(r!==null)return r}const n=Math.max(1,Number(o.duration||o.minutes)||1),a=[o.endTimeStr,o.endTime,o.end_time,o.timestamp,o.createdAt,o.created_at];for(const i of a){const r=e(i);if(r!==null){const d=r-n;if(d>=0)return d}}return null},getTodayWakeTime(){const o=this.getEarlyBirdHistory(),e=this.getTodayDateStr();if(o[e]){const t=String(o[e]).replace(/[۰-۹]/g,r=>"۰۱۲۳۴۵۶۷۸۹".indexOf(r)).trim(),[n,a]=t.split(":").map(Number),i=!isNaN(n)&&!isNaN(a)?n*60+a:null;if(i!==null&&i>=Be.START_MIN&&i<=Be.END_MIN)return t}try{const t=localStorage.getItem("early_bird_daily_status");if(t){const n=JSON.parse(t);if(n.date===e)return n.time;localStorage.removeItem("early_bird_daily_status"),typeof window<"u"&&window.personalSyncService&&typeof window.personalSyncService.pushToCloud=="function"&&window.personalSyncService.pushToCloud()}}catch{localStorage.removeItem("early_bird_daily_status")}return null},getTodayEarlyBird(){const o=this.getTodayWakeTime();return o?{wakeTime:o,wake_time:o,date:this.getTodayDateStr()}:null},saveEarlyBirdLocal(o,e){try{const t=this.getEarlyBirdHistory();t[o]=e,localStorage.setItem(ee.EARLY_BIRD_HISTORY,JSON.stringify(t))}catch(t){console.error("[EarlyBird] ذخیره تاریخچه محلی ناموفق بود:",t)}},async recordEarlyBird(){var a,i;const o=this.getUserProfile(),e=this.getTodayDateStr(),t=this.getIranNowHHMM();if(!this.isEarlyBirdWindowOpen())return{success:!1,outsideWindow:!0,wakeTime:t,message:"ثبت بیداری فقط از ساعت ۵ تا ۷ صبح امکان‌پذیر است."};this.saveEarlyBirdLocal(e,t);const n={userId:o.userId,nickname:o.nickname,name:o.nickname,target:o.target,wakeTime:t,date:e};try{const r=await _e(`${le}/api/earlybird.php`,{method:"POST",headers:{"Content-Type":"application/json","Cache-Control":"no-cache",Pragma:"no-cache"},body:JSON.stringify(n)}),d=await r.text();let s=null;try{s=d?JSON.parse(d):null}catch{s=null}if(!r.ok||!s||s.success===!1){const l=s&&(s.message||s.error)||(d||"").slice(0,160)||"پاسخ نامعتبر سرور",c=`POST /api/earlybird.php → HTTP ${r.status}: ${l}`;return console.error("[EarlyBird] ثبت روی سرور ناموفق بود —",c),{success:!1,serverConfirmed:!1,wakeTime:t,errorDetail:c,message:s&&s.message||"ثبت سحرخیزی روی سرور انجام نشد."}}return Array.isArray(s.list)&&(localStorage.setItem(ee.EARLY_BIRD_CACHE,JSON.stringify(s.list)),localStorage.setItem(ee.EARLY_BIRD_CACHE_DATE,e)),s.entry&&s.entry.wakeTime&&this.saveEarlyBirdLocal(e,s.entry.wakeTime),console.info(`[EarlyBird] ثبت موفق — ساعت ${((a=s.entry)==null?void 0:a.wakeTime)||t}, رتبه ${s.rank??"-"}`),{success:!0,serverConfirmed:!0,alreadyRecorded:!!s.alreadyRecorded,wakeTime:((i=s.entry)==null?void 0:i.wakeTime)||t,rank:s.rank,list:s.list||[],message:s.message||"سحرخیزی شما ثبت شد ☀️"}}catch(r){const d=`POST /api/earlybird.php → خطای شبکه: ${r.message}`;return console.error("[EarlyBird] ثبت روی سرور ناموفق بود —",d),{success:!1,serverConfirmed:!1,wakeTime:t,errorDetail:d,message:"ثبت محلی انجام شد اما ارتباط با سرور برقرار نشد."}}},async fetchEarlyBirds(o=null){const e=o||this.getTodayDateStr();try{const t=await _e(`${le}/api/earlybird.php?date=${e}&_t=${Date.now()}`,{cache:"no-store",headers:{"Cache-Control":"no-cache",Pragma:"no-cache"}}),n=await t.text();let a=null;try{a=n?JSON.parse(n):null}catch{a=null}if(t.ok&&a&&a.success&&Array.isArray(a.list))return localStorage.setItem(ee.EARLY_BIRD_CACHE,JSON.stringify(a.list)),localStorage.setItem(ee.EARLY_BIRD_CACHE_DATE,e),{success:!0,fromCache:!1,date:e,list:a.list};throw new Error(a&&(a.message||a.error)||`HTTP ${t.status}`)}catch(t){console.warn("[EarlyBird] دریافت لیست از سرور ناموفق بود، استفاده از کش محلی:",t.message);let n=[];if(localStorage.getItem(ee.EARLY_BIRD_CACHE_DATE)===e)try{const a=JSON.parse(localStorage.getItem(ee.EARLY_BIRD_CACHE)||"[]");Array.isArray(a)&&(n=a)}catch{n=[]}return{success:!1,offline:!0,fromCache:!0,date:e,list:n}}}};typeof window<"u"&&(window.leaderboardService=S,window.fetchUserGroups=(o=!0)=>S.fetchUserGroups(o));const te=o=>String(o).replace(/[0-9]/g,e=>"۰۱۲۳۴۵۶۷۸۹"[e]),ct=[{id:"energetic",icon:"⚡️",text:"پرانرژی (۱۰/۱۰)",badge:"⚡️ پرانرژی (۱۰/۱۰)"},{id:"fighter",icon:"🦁",text:"جنگنده",badge:"🦁 جنگنده"},{id:"satisfied",icon:"😌",text:"راضی",badge:"😌 راضی"},{id:"tough",icon:"☕️",text:"سخت اما تموم شد",badge:"☕️ سخت اما تموم شد"}];function pt(o){const e=Number(o)||0;return e>70?{text:"#34d399",bg:"rgba(16, 185, 129, 0.15)",border:"rgba(52, 211, 153, 0.35)"}:e>=50?{text:"#fbbf24",bg:"rgba(245, 158, 11, 0.15)",border:"rgba(251, 191, 36, 0.35)"}:{text:"#f87171",bg:"rgba(239, 68, 68, 0.15)",border:"rgba(248, 113, 113, 0.35)"}}function Ue(o){const e=Math.max(0,Math.round(Number(o)||0));if(e===0)return"۰ دقیقه";const t=Math.floor(e/60),n=e%60;return t>0&&n>0?`${te(t)} ساعت و ${te(n)} دقیقه`:t>0?`${te(t)} ساعت`:`${te(n)} دقیقه`}function ro(o){if(!o)return"۰۰:۰۰ - ۰۰:۰۰";const e=Number(o.duration!==void 0?o.duration:o.minutes)||0,t=r=>{if(r==null||r==="")return null;if(typeof r=="number"||typeof r=="string"&&/^\d{10,}$/.test(r.trim())){const d=new Date(Number(r));if(!isNaN(d.getTime()))return d.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",hour12:!1})}if(typeof r=="string"&&r.includes(":")&&!r.includes("T")&&!r.includes("-")){const d=r.trim().split(":");if(d.length>=2){const s=d.map(y=>y.replace(/[۰-۹]/g,m=>"۰۱۲۳۴۵۶۷۸۹".indexOf(m))),l=String(parseInt(s[0])||0).padStart(2,"0"),c=String(parseInt(s[1])||0).padStart(2,"0");return te(`${l}:${c}`)}}if(typeof r=="string"||r instanceof Date){const d=new Date(r);if(!isNaN(d.getTime()))return d.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",hour12:!1})}return null};let n=t(o.startTime),a=t(o.endTime);const i=o.timestamp||o.createdAt;if((!n||!a)&&i){let r=null;if(typeof i=="number"||typeof i=="string"&&/^\d{10,}$/.test(String(i).trim())?r=new Date(Number(i)):r=new Date(i),r&&!isNaN(r.getTime())){const d=new Date(r.getTime()-e*6e4);n||(n=d.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",hour12:!1})),a||(a=r.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",hour12:!1}))}}if(n||(n="۰۸:۰۰"),!a){const d=String(n).replace(/[۰-۹]/g,s=>"۰۱۲۳۴۵۶۷۸۹".indexOf(s)).split(":").map(Number);if(d.length>=2&&!isNaN(d[0])&&!isNaN(d[1])){const l=(d[0]*60+d[1]+e)%1440,c=String(Math.floor(l/60)).padStart(2,"0"),y=String(l%60).padStart(2,"0");a=te(`${c}:${y}`)}else a="۰۹:۰۰"}return`${n} - ${a}`}function so(o=null){try{const e=p.getTodayJalaliString(),t=p.normalizeJalaliDate(o||e),n=t===e,a=new Date,i=a.getHours()*60+a.getMinutes(),r=480,d=1380;let s=d;n&&(s=Math.min(d,i));const c=(p.getActivitiesByDate(t)||[]).filter(w=>w?!(w.type==="non-study"||w.type==="non_study"||w.type==="break"||w.activityType==="non_study"||w.activityType==="non-study"||w.activityType==="break"||w.isStudy===!1||w.is_study_time===!1||w.counts_for_study===!1||w.isBreak===!0||w.is_break===!0||w.timerType==="break"||w.timerType===2):!1),y=c.reduce((w,A)=>w+(Number(A.duration||A.minutes)||0),0);if(s<=r)return{usefulMinutes:y,usefulText:Ue(y),leakMinutes:0,leakText:"بدون نشتی (خارج بازه ۰۸-۲۳)",leakCount:0};const m=[];c.forEach(w=>{const A=Math.max(1,Number(w.duration||w.minutes)||1);let k=0,$=0;if(w.startTime){const D=new Date(w.startTime);if(!isNaN(D.getTime()))$=D.getHours()*60+D.getMinutes(),k=$+A;else if(typeof w.startTime=="string"&&w.startTime.includes(":")){const T=w.startTime.split(":").map(Number);$=(T[0]||0)*60+(T[1]||0),k=$+A}}else if(w.endTime||w.timestamp||w.createdAt){const D=new Date(w.endTime||w.timestamp||w.createdAt);isNaN(D.getTime())||(k=D.getHours()*60+D.getMinutes(),$=Math.max(0,k-A))}else k=s,$=Math.max(0,k-A);const M=Math.max(r,Math.min(s,$)),I=Math.max(r,Math.min(s,k));I>M&&m.push({start:M,end:I})}),m.sort((w,A)=>w.start-A.start);const u=[];m.forEach(w=>{if(u.length===0)u.push({...w});else{const A=u[u.length-1];w.start<=A.end?A.end=Math.max(A.end,w.end):u.push({...w})}});let b=0,g=0,f=r;u.forEach(w=>{const A=w.start-f;A>45&&(b+=A,g++),f=Math.max(f,w.end)});const x=s-f;return x>45&&(b+=x,g++),{usefulMinutes:y,usefulText:Ue(y),leakMinutes:b,leakText:b>0?Ue(b):"بدون نشتی ✨",leakCount:g}}catch(e){return console.error("Error calculating time leak stats:",e),{usefulMinutes:0,usefulText:"۰ دقیقه",leakMinutes:0,leakText:"۰ دقیقه",leakCount:0}}}function Rt(o={}){const{size:e=280,showCenterInfo:t=!0,dateStr:n=null}=o,a=p.normalizeJalaliDate(n||p.getTodayJalaliString()),i=p.getActivitiesByDate(a)||[],d=(p.getStudyTargets()||{}).dailyStudyGoalHours||8,s=d*60,l=p.getStudyMinutesByDate(a),c=+(l/60).toFixed(1),y=s>0?Math.min(100,Math.round(l/s*100)):0,m=typeof p.getStudyStreak=="function"?p.getStudyStreak():0,u=110,b=2*Math.PI*u;let g="";const f=new Date,x=f.getHours()*60+f.getMinutes(),w=k=>{if(k==null||k==="")return null;if(typeof k=="string"){const $=String(k).replace(/[۰-۹]/g,D=>"۰۱۲۳۴۵۶۷۸۹".indexOf(D)).replace(/[٠-٩]/g,D=>"٠١٢٣٤٥٦٧٨٩".indexOf(D)).trim(),M=$.match(/(?:^|\b|T|\s)(\d{1,2}):(\d{2})/);if(M){const D=Number(M[1]),T=Number(M[2]);if(!isNaN(D)&&!isNaN(T)&&D>=0&&D<24&&T>=0&&T<60)return D*60+T}const I=Number($);if(!isNaN(I)&&I>1e11)k=I;else{const D=new Date($);isNaN(D.getTime())||(k=D.getTime())}}if(typeof k=="number"&&!isNaN(k)){const $=new Date(k);if(!isNaN($.getTime())){try{const I=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Tehran",hour:"2-digit",minute:"2-digit",hour12:!1}).format($).split(":").map(Number);if(!isNaN(I[0])&&!isNaN(I[1]))return I[0]*60+I[1]}catch{}return $.getHours()*60+$.getMinutes()}}return null};i.forEach(k=>{if(!k)return;const $=Math.max(1,Number(k.duration||k.minutes)||1);let M=w(k.startTime),I=w(k.endTime);if(M!==null&&I!==null)I<M&&(I+=24*60);else if(M!==null)I=M+$;else if(I!==null)M=Math.max(0,I-$);else{const q=w(k.timestamp||k.createdAt);q!==null?(I=q,M=Math.max(0,I-$)):(I=x,M=Math.max(0,I-$))}M=Math.max(0,Math.min(1440,M)),I=Math.max(0,Math.min(1440,I));const D=Math.max(1,I-M),T=k.type==="study"||k.isStudy!==!1,N=k.color||(T?"#0ea5e9":"#f59e0b"),C=(D/1440*b).toFixed(2),P=(b-Number(C)).toFixed(2),L=(-(M/1440)*b).toFixed(2);g+=`
      <circle cx="160" cy="160" r="${u}" fill="none"
        stroke="${N}" stroke-width="14" stroke-linecap="round"
        stroke-dasharray="${C} ${P}"
        stroke-dashoffset="${L}"
        style="transition: stroke-dasharray 0.8s ease-out, stroke-dashoffset 0.8s ease-out; filter: drop-shadow(0 0 5px ${N}aa);"
      />
    `});let A="";for(let k=0;k<24;k++){const $=k*15*Math.PI/180,M=k%6===0,I=M?8:4,D=160+(u+10)*Math.cos($),T=160+(u+10)*Math.sin($),N=160+(u+10+I)*Math.cos($),C=160+(u+10+I)*Math.sin($);A+=`
      <line x1="${D.toFixed(1)}" y1="${T.toFixed(1)}" x2="${N.toFixed(1)}" y2="${C.toFixed(1)}"
        stroke="${M?"rgba(255, 255, 255, 0.4)":"rgba(255, 255, 255, 0.15)"}"
        stroke-width="${M?2:1}" />
    `}return`
    <div style="position: relative; width: ${e}px; height: ${e}px; margin: 0 auto; display: flex; align-items: center; justify-content: center;">
      <svg viewBox="0 0 320 320" style="width: 100%; height: 100%; overflow: visible; transform: rotate(-90deg);">
        <defs>
          <radialGradient id="ringGlowBg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="rgba(14, 165, 233, 0.08)" />
            <stop offset="100%" stop-color="rgba(0, 0, 0, 0)" />
          </radialGradient>
        </defs>

        <!-- Subtle Background Glow -->
        <circle cx="160" cy="160" r="${u+15}" fill="url(#ringGlowBg)" />

        <!-- Track Circle (24-Hour Dial Background) -->
        <circle cx="160" cy="160" r="${u}" fill="none" stroke="rgba(255, 255, 255, 0.06)" stroke-width="14" />

        <!-- 24 Hourly Ticks -->
        ${A}

        <!-- Active Interval Arcs -->
        ${g}
      </svg>

      <!-- Cardinal Hour Markers Overlay (Non-rotated) -->
      <div style="position: absolute; inset: 0; pointer-events: none; font-size: 0.62rem; font-weight: 700; color: #8e8e9c; font-family: 'Outfit', sans-serif;">
        <span style="position: absolute; top: 2px; left: 50%; transform: translateX(-50%);">00:00</span>
        <span style="position: absolute; right: 2px; top: 50%; transform: translateY(-50%);">06:00</span>
        <span style="position: absolute; bottom: 2px; left: 50%; transform: translateX(-50%);">12:00</span>
        <span style="position: absolute; left: 2px; top: 50%; transform: translateY(-50%);">18:00</span>
      </div>

      <!-- Center Ring Metrics Overlay -->
      ${t?`
        <div style="position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; direction: rtl; pointer-events: none;">
          <!-- 🔥 Streak Badge -->
          <div style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.35); color: #f59e0b; padding: 2px 8px; border-radius: 12px; font-size: 0.7rem; font-weight: 800; display: inline-flex; align-items: center; gap: 4px; margin-bottom: 2px;">
            <span>🔥</span>
            <span>${te(m)} روز استریک</span>
          </div>

          <!-- Total Study Hours -->
          <div style="font-size: 1.65rem; font-weight: 900; color: #ffffff; line-height: 1.1; font-family: 'Outfit', sans-serif; text-shadow: 0 0 12px rgba(14, 165, 233, 0.5);">
            ${te(c)} <span style="font-size: 0.82rem; font-weight: 700; color: #38bdf8;">ساعت</span>
          </div>

          <!-- Goal Progress Badge -->
          <div style="font-size: 0.7rem; color: #a1a1aa; font-weight: 700; margin-top: 3px;">
            هدف: <span style="color: #e4e4e7; font-family: 'Outfit';">${te(d)}h</span>
            <span style="color: #10b981; margin-right: 3px;">(${te(y)}٪)</span>
          </div>
        </div>
      `:""}
    </div>
  `}function lo(){const o=so(),e=p.getSubjectStudyStats()||{},t=Object.keys(e).map(n=>{const a=e[n],i=a.minutes||0;return i<=0?"":`
      <div style="background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); padding: 4px 10px; border-radius: 10px; font-size: 0.72rem; font-weight: 700; color: #e4e4e7; display: flex; align-items: center; gap: 5px;">
        <span style="width: 8px; height: 8px; border-radius: 50%; background: ${a.isStudy!==!1?"#0ea5e9":"#f59e0b"}; display: inline-block;"></span>
        <span>${n}:</span>
        <span style="color: #38bdf8; font-family: 'Outfit';">${Ue(i)}</span>
      </div>
    `}).filter(Boolean).join("");return`
    <div class="glass-panel daily-ring-widget-card" style="padding: 16px; margin-bottom: 12px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; direction: rtl; box-shadow: none;">
      
      <!-- Widget Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="width: 32px; height: 32px; border-radius: 10px; background: rgba(14, 165, 233, 0.15); border: 1px solid rgba(14, 165, 233, 0.3); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; color: #38bdf8;">
            ⏱️
          </div>
          <div>
            <strong style="font-size: 0.92rem; font-weight: 800; color: #ffffff; display: block;">حلقه ۲۴ ساعته و جریان روزانه</strong>
            <span style="font-size: 0.7rem; color: #8e8e9c;">نمای بازه‌ای زمان‌های مطالعه امروز</span>
          </div>
        </div>

        <!-- Header Action Buttons -->
        <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
          <!-- 📸 Iconic Story Card Button -->
          <button type="button" id="btn-open-daily-story" class="btn-story-trigger btn-open-daily-story btn-quick-story" data-story-id="dailyStoryCard" onclick="if(typeof window.openQuickStoryModal === 'function'){ window.openQuickStoryModal(); } else if(typeof window.openStoryModal === 'function'){ window.openStoryModal('dailyStoryCard'); } else if(typeof window.openDailyStoryCard === 'function'){ window.openDailyStoryCard(); }"
            style="background: linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%); border: 1px solid rgba(167, 139, 250, 0.4); color: #ffffff; padding: 6px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: 800; display: inline-flex; align-items: center; gap: 5px; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.3);" title="ایجاد کارت استوری سریع برای شبکه اجتماعی">
            <span style="font-size: 0.85rem;">📸</span>
            <span>استوری سریع</span>
          </button>

          <!-- 📊 Dedicated Daily Analysis Report Button -->
          <button type="button" id="btn-open-daily-analysis" class="btn-story-trigger btn-open-daily-analysis btn-daily-report" data-story-id="dailyAnalysisReport" onclick="if(typeof window.openDailyReportModal === 'function'){ window.openDailyReportModal(); } else if(typeof window.openStoryModal === 'function'){ window.openStoryModal('dailyAnalysisReport'); } else if(typeof window.openDailyAnalysisReport === 'function'){ window.openDailyAnalysisReport(); }"
            style="background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%); border: 1px solid rgba(56, 189, 248, 0.4); color: #ffffff; padding: 6px 12px; border-radius: 12px; font-size: 0.75rem; font-weight: 800; display: inline-flex; align-items: center; gap: 5px; cursor: pointer; transition: all 0.2s ease; box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);" title="مشاهده کارنامه و تحلیل جامع امروز">
            <span style="font-size: 0.85rem;">📊</span>
            <span>کارنامه و تحلیل روز</span>
          </button>
        </div>
      </div>

      <!-- 24h Circular Dial SVG -->
      <div style="padding: 10px 0;">
        ${Rt({size:260,showCenterInfo:!0})}
      </div>

      <!-- 🔍 Time-Leak & Useful Time Breakdown -->
      <div style="margin-top: 14px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
        <!-- Useful Time Card -->
        <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); padding: 10px 12px; border-radius: 12px; display: flex; align-items: center; gap: 10px;">
          <div style="font-size: 1.2rem;">💚</div>
          <div>
            <div style="font-size: 0.7rem; color: #a1a1aa; font-weight: 700;">ساعت مطالعه مفید</div>
            <div style="font-size: 0.85rem; font-weight: 800; color: #10b981; margin-top: 1px;">
              ${o.usefulText}
            </div>
          </div>
        </div>

        <!-- Idle Gap Leak Card -->
        <div style="background: ${o.leakMinutes>0?"rgba(239, 68, 68, 0.08)":"rgba(255, 255, 255, 0.03)"}; border: 1px solid ${o.leakMinutes>0?"rgba(239, 68, 68, 0.25)":"rgba(255, 255, 255, 0.08)"}; padding: 10px 12px; border-radius: 12px; display: flex; align-items: center; gap: 10px;">
          <div style="font-size: 1.2rem;">${o.leakMinutes>0?"⚠️":"✨"}</div>
          <div>
            <div style="font-size: 0.7rem; color: #a1a1aa; font-weight: 700;">نشتی زمان / آفلاین (>۴۵m)</div>
            <div style="font-size: 0.85rem; font-weight: 800; color: ${o.leakMinutes>0?"#f87171":"#a1a1aa"}; margin-top: 1px;">
              ${o.leakText}
            </div>
          </div>
        </div>
      </div>

      <!-- Subject Pills Breakdown (if any) -->
      ${t?`
        <div style="margin-top: 12px; display: flex; flex-wrap: wrap; gap: 6px;">
          ${t}
        </div>
      `:""}
    </div>
  `}function en(o=null){var We;const e=o||window.appState&&window.appState.selectedJalaliDetailDate||p.getTodayJalaliString(),t=p.normalizeJalaliDate(e),n=p&&typeof p.getTodayJalaliString=="function"?p.getTodayJalaliString():"",a=t===(p?p.normalizeJalaliDate(n):n),i=t.split("/").map(Number),r=i[0]||1404,d=i[1]||1,s=i[2]||1,c=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"][d-1]||"",m=(p.jalaliToJdn(r,d,s)+2)%7,g=`${["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه"][m]||"شنبه"} ${te(s)} ${c} ${te(r)}`;let f=null;try{f=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}")}catch{}const x=(typeof p.getUserProfile=="function"?p.getUserProfile():{})||{},w=localStorage.getItem("planex_user_avatar")||"",A=localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_leaderboard_nickname")||"",k=localStorage.getItem("planex_leaderboard_target")||"",$=A||x.name||x.displayName||x.nickname||(f==null?void 0:f.full_name)||(f==null?void 0:f.name)||"کاربر",M=k||x.target||x.major||x.targetField||"کنکور سراسری ۱۴۰۶",I=x.grade||x.educationGrade||"",D=I&&M&&!M.includes(I)?`${I} - ${M}`:M,T=w||x.avatar||x.photo||x.avatarUrl||(f==null?void 0:f.avatar_url)||null,N=typeof p<"u"&&typeof p.getCurrentWeek=="function"?p.getCurrentWeek():null,C=(N==null?void 0:N.days)||[],P=(typeof p.getActivitiesByDate=="function"?p.getActivitiesByDate(t):[])||[],L=P.filter(z=>z?!(z.type==="non-study"||z.type==="non_study"||z.type==="break"||z.activityType==="non_study"||z.activityType==="non-study"||z.activityType==="break"||z.isStudy===!1||z.is_study_time===!1||z.counts_for_study===!1||z.isBreak===!0||z.is_break===!0||z.timerType==="break"||z.timerType===2):!1),q=L.reduce((z,ae)=>{const re=Number(ae.duration!==void 0?ae.duration:ae.minutes);return z+(isNaN(re)?0:Math.max(0,Math.ceil(re)))},0),F=Ue(q),J=(typeof p.getStudyTargets=="function"?p.getStudyTargets():{})||{},G=Number(J.dailyStudyGoalHours||J.dailyTargetHours||8),Q=G*60,V=Q>0?Math.min(100,Math.round(q/Q*100)):0,X=L.length,j=typeof p.getStudyStreak=="function"?p.getStudyStreak():0;let Z=null;const K=typeof S<"u"?S:typeof window<"u"?window.leaderboardService:null,be=z=>{if(!z)return null;const ae=v=>!v||typeof v!="string"?v:v.replace(/[۰-۹]/g,W=>"۰۱۲۳۴۵۶۷۸۹".indexOf(W)).replace(/[٠-٩]/g,W=>"٠١٢٣٤٥٦٧٨٩".indexOf(W));if(typeof z=="string"){const W=ae(z).trim().match(/(?:^|\b|T|\s)(\d{1,2}):(\d{2})/);if(W){const Y=parseInt(W[1],10),se=parseInt(W[2],10);if(!isNaN(Y)&&!isNaN(se)&&Y>=0&&Y<24&&se>=0&&se<60)return Y*60+se}}let re=null;if(typeof z=="number")re=z;else if(typeof z=="object"&&z!==null&&(re=z.timestamp||z.createdAt||z.start||null,!re&&(z.startTime||z.start_time||z.startTimeStr)))return be(z.startTime||z.start_time||z.startTimeStr);if(re){const v=new Date(re);if(!isNaN(v.getTime()))try{const Y=v.toLocaleTimeString("en-US",{timeZone:"Asia/Tehran",hour12:!1,hour:"2-digit",minute:"2-digit"}).split(":").map(Number);if(Y.length>=2&&!isNaN(Y[0])&&!isNaN(Y[1]))return Y[0]*60+Y[1]}catch{return v.getHours()*60+v.getMinutes()}}return null},fe=z=>z!==null&&z>=5*60&&z<=7*60;let ce=null;if(K){if(a&&typeof K.getTodayWakeTime=="function"&&(ce=K.getTodayWakeTime()),!ce&&typeof K.getEarlyBirdHistory=="function"){const z=K.getEarlyBirdHistory()||{};ce=z[t]||(a?z[(We=K.getTodayDateStr)==null?void 0:We.call(K)]:null)}if(!ce&&a&&typeof K.getTodayEarlyBird=="function"){const z=K.getTodayEarlyBird();z&&(z.wakeTime||z.wake_time)&&(ce=z.wakeTime||z.wake_time)}}const h=be(ce);if(fe(h)){const z=String(Math.floor(h/60)).padStart(2,"0"),ae=String(h%60).padStart(2,"0");Z=`${z}:${ae}`}if(!Z){const z=P&&P.length>0?P:L;if(z&&z.length>0){let ae=1440;z.forEach(re=>{let v=null;if(K&&typeof K.extractSessionStartMinutes=="function"?v=K.extractSessionStartMinutes(re):v=be(re.startTime||re.start_time||re.startTimeStr||re.time||re.timestamp||re.createdAt||re),v!==null&&fe(v)&&v<ae){ae=v;const W=String(Math.floor(ae/60)).padStart(2,"0"),Y=String(ae%60).padStart(2,"0");Z=`${W}:${Y}`}})}}const E=Z?`☀️ ${te(Z)}`:"بدون حاضری صبح";let R=0,U=0,de=0;L.forEach(z=>{const ae=Number(z.testCount!==void 0?z.testCount:z.tests!==void 0?z.tests:0),re=Number(z.testCorrect||z.correct||0),v=Number(z.testWrong||z.wrong||0),W=Number(z.testUnanswered||z.unanswered||0);U+=re,de+=v;const Y=re+v+W;R+=ae>0?ae:Y});const B=R>0,ue=R>0?Math.min(100,Math.max(0,Math.round(U/R*100))):0,xe=R>0?(U*3-de)/(R*3)*100:0,ge=Math.round(xe),Ae=pt(ue),we=pt(ge),Te=localStorage.getItem("planex_daily_mood_"+t),Ie=ct.find(z=>z.id===Te),oe={},pe=["#38bdf8","#a78bfa","#f59e0b","#10b981","#ec4899","#6366f1","#f43f5e","#14b8a6","#8b5cf6","#0ea5e9"];L.forEach(z=>{const ae=z.subject||z.categoryName||z.title||z.name||"درس آزاد",re=Number(z.duration!==void 0?z.duration:z.minutes)||0;oe[ae]||(oe[ae]=0),oe[ae]+=re});const He=Object.keys(oe).map((z,ae)=>{const re=oe[z],v=q>0?Math.round(re/q*100):0,W=pe[ae%pe.length];return{name:z,mins:re,pct:v,color:W}}).sort((z,ae)=>ae.mins-z.mins);return`
    <div id="modal-daily-story-card" class="modal-overlay" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(24px); background: rgba(0, 0, 0, 0.88); z-index: 99999; padding: 16px; overflow-y: auto; transform: translateZ(0); will-change: transform, opacity; -webkit-overflow-scrolling: touch;" onclick="if(event.target === this || event.target.classList.contains('modal-overlay')) window.closeDailyStoryCard();">
      <!-- ✖ Prominent Story Close Button -->
      <button type="button" aria-label="بستن" onclick="window.closeDailyStoryCard();" style="position: absolute; top: 15px; right: 15px; z-index: 99999; width: 40px; height: 40px; background: rgba(0,0,0,0.5); color: white; border: none; border-radius: 50%; font-size: 20px; display: flex; align-items: center; justify-content: center; cursor: pointer; backdrop-filter: blur(4px); -webkit-tap-highlight-color: transparent;">✖</button>

      <div style="max-width: 440px; width: 100%; display: flex; flex-direction: column; align-items: center; gap: 14px;">
        
        <!-- Action Toolbar Above Card -->
        <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; color: white;">
          <div style="font-weight: 800; font-size: 0.95rem; display: flex; align-items: center; gap: 6px;">
            <span style="font-size: 1.1rem;">📸</span>
            <span>کارت استوری روزانه PlanEx</span>
          </div>
          <button type="button" aria-label="بستن" onclick="window.closeDailyStoryCard();" style="min-width: 44px; min-height: 44px; width: 44px; height: 44px; background: rgba(255,255,255,0.14); border: 1.5px solid rgba(255,255,255,0.28); color: #ffffff; border-radius: 50%; cursor: pointer; font-size: 1.25rem; font-weight: 800; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(0,0,0,0.4); transition: all 0.15s ease; touch-action: manipulation; -webkit-tap-highlight-color: transparent; z-index: 99999;">✕</button>
        </div>

        <!-- 📱 9:16 SLEEK MINIMALIST ICONIC STORY CARD CANVAS -->
        <div id="planex-story-card-canvas" style="width: 440px; min-height: 740px; background: linear-gradient(165deg, #090d16 0%, #0c1222 40%, #17112c 75%, #080a14 100%); border: 1.5px solid rgba(167, 139, 250, 0.3); border-radius: 28px; padding: 24px 22px; box-sizing: border-box; display: flex; flex-direction: column; align-items: center; justify-content: space-between; position: relative; overflow: hidden; box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85); direction: rtl; text-align: right; font-family: 'Vazirmatn', -apple-system, sans-serif; color: #ffffff; transform: translateZ(0); will-change: transform, opacity;">
          
          <!-- Background Ambient Glowing Orbs -->
          <div style="position: absolute; top: -60px; right: -60px; width: 220px; height: 220px; background: radial-gradient(circle, rgba(124, 58, 237, 0.35) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>
          <div style="position: absolute; bottom: -60px; left: -60px; width: 220px; height: 220px; background: radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>

          <!-- 1. HEADER SECTION -->
          <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; z-index: 2;">
            <!-- Right: User Avatar + Display Name + Target Badge -->
            <div style="display: flex; align-items: center; gap: 10px;">
              ${T?`
                <img src="${T}" style="width: 46px; height: 46px; border-radius: 50%; object-fit: cover; border: 2px solid #a78bfa; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4);" />
              `:`
                <div style="width: 46px; height: 46px; border-radius: 50%; background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 800; color: #ffffff; border: 2px solid rgba(255,255,255,0.25); box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4);">
                  ${$.charAt(0)}
                </div>
              `}
              <div style="text-align: right;">
                <div style="font-size: 1.08rem; font-weight: 900; color: #ffffff; letter-spacing: -0.3px;">${$}</div>
                <div style="display: inline-flex; align-items: center; background: rgba(124, 58, 237, 0.2); border: 1px solid rgba(167, 139, 250, 0.35); padding: 1px 8px; border-radius: 8px; font-size: 0.68rem; font-weight: 700; color: #c4b5fd; margin-top: 2px;">
                  🎯 ${D}
                </div>
              </div>
            </div>

            <!-- Left: PlanEx Branding -->
            <div style="text-align: left; display: flex; flex-direction: column; align-items: flex-end; gap: 3px;">
              <div style="display: flex; align-items: center; gap: 5px;">
                <img src="./logo-transparent.png" style="width: 22px; height: 22px; border-radius: 6px;" onerror="this.style.display='none';" />
                <span style="font-family: 'Outfit', sans-serif; font-weight: 900; font-size: 1rem; background: linear-gradient(135deg, #38bdf8, #a78bfa); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">PlanEx</span>
              </div>
            </div>
          </div>

          <!-- 2. HORIZONTAL WEEKDAY SELECTOR BAR (شنبه تا جمعه) -->
          <div style="width: 100%; display: flex; flex-direction: column; gap: 6px; align-items: center; z-index: 2; margin: 8px 0 4px 0;">
            <div style="width: 100%; display: flex; gap: 4px; overflow-x: auto; padding: 4px; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; scrollbar-width: none; box-sizing: border-box;">
              ${C.map(z=>{const ae=p.normalizeJalaliDate(z.dateStr)===t,re=ae?"background: linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%); color: #ffffff; border-color: #a78bfa; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.5);":"background: rgba(255, 255, 255, 0.03); color: #a1a1aa; border-color: rgba(255, 255, 255, 0.06);",v=z.isToday?'<span style="width: 4px; height: 4px; border-radius: 50%; background: #34d399; display: inline-block; margin-right: 2px;"></span>':"";return`
                  <button type="button"
                    class="weekday-tab-btn ${ae?"active":""}"
                    data-date="${z.dateStr}"
                    onclick="if(window.selectDailyModalDate){ window.selectDailyModalDate('${z.dateStr}'); }"
                    style="flex: 1; min-width: 48px; padding: 5px 2px; border-radius: 12px; border: 1px solid; font-size: 0.72rem; font-weight: 800; cursor: pointer; transition: all 0.15s ease; text-align: center; white-space: nowrap; ${re}">
                    <div style="font-size: 0.65rem; opacity: 0.9;">${z.dayName}</div>
                    <div style="font-size: 0.76rem; font-family: 'Outfit', sans-serif; margin-top: 1px;">${v}${te(z.dayOfMonth)}</div>
                  </button>
                `}).join("")}
            </div>

            <!-- Active Jalali Date Subtitle Badge -->
            <div style="font-size: 0.72rem; font-weight: 700; color: #c4b5fd; background: rgba(124, 58, 237, 0.15); border: 1px solid rgba(167, 139, 250, 0.3); padding: 2px 10px; border-radius: 10px;">
              📅 ${g}
            </div>
          </div>

          <!-- 3. CENTER ICONIC APPLE-WATCH STYLE RADIAL DIAL -->
          <div style="width: 100%; display: flex; justify-content: center; align-items: center; margin: 8px 0; z-index: 2;">
            ${Rt({size:250,showCenterInfo:!0,dateStr:t})}
          </div>

          <!-- 4. HERO GOAL COMPLETION PROGRESS CARD -->
          <div style="width: 100%; background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; padding: 12px 16px; box-sizing: border-box; z-index: 2;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <span style="font-size: 0.76rem; font-weight: 700; color: #9ca3af;">⏱️ مجموع زمان مطالعه</span>
              <span style="font-size: 0.68rem; font-weight: 800; color: #38bdf8; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.25); padding: 2px 8px; border-radius: 8px;">
                هدف: ${te(G)} ساعت
              </span>
            </div>
            <div style="font-size: 1.55rem; font-weight: 900; color: #ffffff; margin-bottom: 6px; background: linear-gradient(135deg, #ffffff 0%, #c4b5fd 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
              ${F}
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.7rem; font-weight: 700; color: #c4b5fd; margin-bottom: 4px;">
              <span>پیشرفت تارگت روزانه</span>
              <span>${te(V)}٪</span>
            </div>
            <div style="width: 100%; height: 7px; background: rgba(255, 255, 255, 0.08); border-radius: 999px; overflow: hidden; position: relative;">
              <div style="width: ${V}%; height: 100%; background: linear-gradient(90deg, #0ea5e9 0%, #7c3aed 50%, #ec4899 100%); border-radius: 999px; box-shadow: 0 0 12px rgba(124, 58, 237, 0.6);"></div>
            </div>
          </div>

          <!-- 5. HIGH-CONTRAST BADGES GRID -->
          <div style="width: 100%; display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; z-index: 2;">
            <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 12px; padding: 7px 4px; text-align: center;">
              <div style="font-size: 0.58rem; color: #fcd34d; font-weight: 700;">استریک</div>
              <div style="font-size: 0.82rem; font-weight: 900; color: #f59e0b; margin-top: 2px;">
                🔥 ${te(j)}
              </div>
            </div>

            <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 12px; padding: 7px 4px; text-align: center;">
              <div style="font-size: 0.58rem; color: #6ee7b7; font-weight: 700;">تست امروز</div>
              <div style="font-size: 0.82rem; font-weight: 900; color: #34d399; margin-top: 2px;">
                🎯 ${te(R)}
              </div>
            </div>

            <div style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 12px; padding: 7px 4px; text-align: center;">
              <div style="font-size: 0.58rem; color: #7dd3fc; font-weight: 700;">جلسات</div>
              <div style="font-size: 0.82rem; font-weight: 900; color: #38bdf8; margin-top: 2px;">
                ⏱️ ${te(X)}
              </div>
            </div>

            <div style="background: rgba(167, 139, 250, 0.08); border: 1px solid rgba(167, 139, 250, 0.25); border-radius: 12px; padding: 7px 4px; text-align: center;">
              <div style="font-size: 0.58rem; color: #c4b5fd; font-weight: 700;">حاضری صبح</div>
              <div style="font-size: ${Z?"0.82rem":"0.68rem"}; font-weight: 900; color: ${Z?"#a78bfa":"#9ca3af"}; margin-top: 2px; white-space: nowrap;">
                ${E}
              </div>
            </div>
          </div>

          <!-- 5.5 TEST ACCURACY SUMMARY BLOCK (درصد با و بدون منفی) -->
          ${B?`
            <div style="width: 100%; display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; z-index: 2;">
              <div style="background: ${Ae.bg}; border: 1px solid ${Ae.border}; border-radius: 12px; padding: 6px 8px; text-align: center;">
                <div style="font-size: 0.58rem; color: ${Ae.text}; font-weight: 700;">درصد بدون منفی</div>
                <div style="font-size: 0.85rem; font-weight: 900; color: ${Ae.text}; margin-top: 1px;">
                  ${te(ue)}٪
                </div>
              </div>
              <div style="background: ${we.bg}; border: 1px solid ${we.border}; border-radius: 12px; padding: 6px 8px; text-align: center;">
                <div style="font-size: 0.58rem; color: ${we.text}; font-weight: 700;">درصد با احتساب منفی</div>
                <div style="font-size: 0.85rem; font-weight: 900; color: ${we.text}; margin-top: 1px;">
                  ${te(ge)}٪
                </div>
              </div>
            </div>
          `:""}

          <!-- 6. TOP SUBJECT PILLS SUMMARY OR ELEGANT EMPTY STATE -->
          ${L.length>0?`
            <div style="width: 100%; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 14px; padding: 8px 12px; box-sizing: border-box; z-index: 2;">
              <div style="font-size: 0.68rem; font-weight: 700; color: #9ca3af; margin-bottom: 6px;">📚 دروس مطالعه‌شده این روز:</div>
              <div style="display: flex; flex-wrap: wrap; gap: 5px;">
                ${He.slice(0,4).map(z=>`
                  <div style="background: rgba(255,255,255,0.04); border: 1px solid ${z.color}55; padding: 3px 8px; border-radius: 8px; font-size: 0.65rem; font-weight: 700; color: #e4e4e7; display: flex; align-items: center; gap: 5px;">
                    <span style="width: 6px; height: 6px; border-radius: 50%; background: ${z.color};"></span>
                    <span>${z.name}:</span>
                    <span style="color: ${z.color}; font-weight: 800;">${Ue(z.mins)}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          `:`
            <div style="width: 100%; padding: 14px 12px; text-align: center; background: rgba(255, 255, 255, 0.02); border: 1px dashed rgba(255, 255, 255, 0.1); border-radius: 14px; box-sizing: border-box; z-index: 2;">
              <div style="font-size: 0.78rem; font-weight: 700; color: #a1a1aa;">📭 هیچ مطالعه‌ای برای این روز ثبت نشده است</div>
            </div>
          `}

          <!-- 6.5 DAILY MOOD & ENERGY TRACKER -->
          <div style="width: 100%; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 14px; padding: 8px 10px; box-sizing: border-box; z-index: 2;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <span style="font-size: 0.68rem; font-weight: 800; color: #fbbf24;">⚡️ حس و انرژی امروز:</span>
              ${Ie?`<span style="font-size: 0.64rem; font-weight: 800; color: #fbbf24; background: rgba(245, 158, 11, 0.15); padding: 1px 6px; border-radius: 6px;">${Ie.badge}</span>`:""}
            </div>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px;">
              ${ct.map(z=>{const re=Ie&&Ie.id===z.id?"background: rgba(245, 158, 11, 0.25); border: 1.5px solid #fbbf24; color: #ffffff; font-weight: 900; box-shadow: 0 0 8px rgba(245, 158, 11, 0.3);":"background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); color: #a1a1aa; font-weight: 700;";return`
                  <button type="button" onclick="if(window.setDailyMood){ window.setDailyMood('${t}', '${z.id}'); }"
                    style="padding: 5px 2px; border-radius: 8px; font-size: 0.6rem; cursor: pointer; transition: all 0.15s ease; text-align: center; white-space: nowrap; ${re}">
                    ${z.badge}
                  </button>
                `}).join("")}
            </div>
          </div>

          <!-- 7. FOOTER BRANDING WITH VIRAL TELEGRAM TAG -->
          <div style="width: 100%; border-top: 1px dashed rgba(255, 255, 255, 0.12); padding-top: 6px; display: flex; justify-content: space-between; align-items: center; font-size: 0.66rem; color: #9ca3af; z-index: 2;">
            <div style="display: flex; align-items: center; gap: 4px;">
              <span style="color: #38bdf8; font-weight: 800;">PlanEx</span>
              <span>•</span>
              <span>همراه هوشمند مطالعه</span>
            </div>
            <div style="display: inline-flex; align-items: center; gap: 4px; background: linear-gradient(135deg, rgba(56, 189, 248, 0.15) 0%, rgba(124, 58, 237, 0.15) 100%); border: 1px solid rgba(56, 189, 248, 0.3); padding: 3px 9px; border-radius: 999px; font-size: 0.62rem; font-weight: 800; color: #7dd3fc; box-shadow: 0 2px 8px rgba(14, 165, 233, 0.2);">
              <span>✨ ساخته شده با پلنکس ✦ @PlanExApp</span>
            </div>
          </div>

        </div>

        <!-- Download Button -->
        <button type="button" id="btn-download-story-card" onclick="window.downloadStoryCardPNG();"
          style="width: 100%; background: linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%); border: none; color: #ffffff; padding: 12px 20px; border-radius: 16px; font-weight: 800; font-size: 0.9rem; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 6px 20px rgba(124, 58, 237, 0.35); transition: transform 0.15s ease;">
          <span style="font-size: 1.1rem;">📸</span>
          <span>دانلود استوری روزانه (تصویر PNG)</span>
        </button>

      </div>
    </div>
  `}function co(o=null){var re;const e=o||window.appState&&window.appState.selectedJalaliDetailDate||p.getTodayJalaliString(),t=p.normalizeJalaliDate(e),n=p&&typeof p.getTodayJalaliString=="function"?p.getTodayJalaliString():"",a=t===(p?p.normalizeJalaliDate(n):n),i=t.split("/").map(Number),r=i[0]||1404,d=i[1]||1,s=i[2]||1,c=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"][d-1]||"",m=(p.jalaliToJdn(r,d,s)+2)%7,g=`${["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه"][m]||"شنبه"} ${te(s)} ${c} ${te(r)}`;let f=null;try{f=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}")}catch{}const x=(typeof p.getUserProfile=="function"?p.getUserProfile():{})||{},w=localStorage.getItem("planex_user_avatar")||"",A=localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_leaderboard_nickname")||"",k=localStorage.getItem("planex_leaderboard_target")||"",$=A||x.name||x.displayName||x.nickname||(f==null?void 0:f.full_name)||(f==null?void 0:f.name)||"کاربر",M=k||x.target||x.major||x.targetField||"کنکور سراسری ۱۴۰۶",I=x.grade||x.educationGrade||"",D=I&&M&&!M.includes(I)?`${I} - ${M}`:M,T=w||x.avatar||x.photo||x.avatarUrl||(f==null?void 0:f.avatar_url)||null,N=typeof p<"u"&&typeof p.getCurrentWeek=="function"?p.getCurrentWeek():null,C=(N==null?void 0:N.days)||[],P=(typeof p.getActivitiesByDate=="function"?p.getActivitiesByDate(t):[])||[],L=P.filter(v=>v?!(v.type==="non-study"||v.type==="non_study"||v.type==="break"||v.activityType==="non_study"||v.activityType==="non-study"||v.activityType==="break"||v.isStudy===!1||v.is_study_time===!1||v.counts_for_study===!1||v.isBreak===!0||v.is_break===!0||v.timerType==="break"||v.timerType===2):!1),q=L.reduce((v,W)=>{const Y=Number(W.duration!==void 0?W.duration:W.minutes);return v+(isNaN(Y)?0:Math.max(0,Math.ceil(Y)))},0),F=Ue(q),J=(typeof p.getStudyTargets=="function"?p.getStudyTargets():{})||{},G=Number(J.dailyStudyGoalHours||J.dailyTargetHours||8),Q=G*60,V=Q>0?Math.min(100,Math.round(q/Q*100)):0,X=L.length,j=typeof p.getStudyStreak=="function"?p.getStudyStreak():0;let Z=null;const K=typeof S<"u"?S:typeof window<"u"?window.leaderboardService:null,be=v=>{if(!v)return null;const W=se=>!se||typeof se!="string"?se:se.replace(/[۰-۹]/g,O=>"۰۱۲۳۴۵۶۷۸۹".indexOf(O)).replace(/[٠-٩]/g,O=>"٠١٢٣٤٥٦٧٨٩".indexOf(O));if(typeof v=="string"){const O=W(v).trim().match(/(?:^|\b|T|\s)(\d{1,2}):(\d{2})/);if(O){const H=parseInt(O[1],10),ie=parseInt(O[2],10);if(!isNaN(H)&&!isNaN(ie)&&H>=0&&H<24&&ie>=0&&ie<60)return H*60+ie}}let Y=null;if(typeof v=="number")Y=v;else if(typeof v=="object"&&v!==null&&(Y=v.timestamp||v.createdAt||v.start||null,!Y&&(v.startTime||v.start_time||v.startTimeStr)))return be(v.startTime||v.start_time||v.startTimeStr);if(Y){const se=new Date(Y);if(!isNaN(se.getTime()))try{const H=se.toLocaleTimeString("en-US",{timeZone:"Asia/Tehran",hour12:!1,hour:"2-digit",minute:"2-digit"}).split(":").map(Number);if(H.length>=2&&!isNaN(H[0])&&!isNaN(H[1]))return H[0]*60+H[1]}catch{return se.getHours()*60+se.getMinutes()}}return null},fe=v=>v!==null&&v>=5*60&&v<=7*60;let ce=null;if(K){if(a&&typeof K.getTodayWakeTime=="function"&&(ce=K.getTodayWakeTime()),!ce&&typeof K.getEarlyBirdHistory=="function"){const v=K.getEarlyBirdHistory()||{};ce=v[t]||(a?v[(re=K.getTodayDateStr)==null?void 0:re.call(K)]:null)}if(!ce&&a&&typeof K.getTodayEarlyBird=="function"){const v=K.getTodayEarlyBird();v&&(v.wakeTime||v.wake_time)&&(ce=v.wakeTime||v.wake_time)}}const h=be(ce);if(fe(h)){const v=String(Math.floor(h/60)).padStart(2,"0"),W=String(h%60).padStart(2,"0");Z=`${v}:${W}`}if(!Z){const v=P&&P.length>0?P:L;if(v&&v.length>0){let W=1440;v.forEach(Y=>{let se=null;if(K&&typeof K.extractSessionStartMinutes=="function"?se=K.extractSessionStartMinutes(Y):se=be(Y.startTime||Y.start_time||Y.startTimeStr||Y.time||Y.timestamp||Y.createdAt||Y),se!==null&&fe(se)&&se<W){W=se;const O=String(Math.floor(W/60)).padStart(2,"0"),H=String(W%60).padStart(2,"0");Z=`${O}:${H}`}})}}const E=Z?`☀️ ${te(Z)}`:"بدون حاضری صبح";let R=0,U=0,de=0,B=0;L.forEach(v=>{const W=Number(v.testCount!==void 0?v.testCount:v.tests!==void 0?v.tests:0),Y=Number(v.testCorrect!==void 0?v.testCorrect:v.correct!==void 0?v.correct:0),se=Number(v.testWrong!==void 0?v.testWrong:v.wrong!==void 0?v.wrong:0),O=Number(v.testUnanswered!==void 0?v.testUnanswered:v.unanswered!==void 0?v.unanswered:0);U+=Y,de+=se,B+=O;const H=Y+se+O;R+=W>0?W:H});const ue=R>0,xe=R>0?Math.min(100,Math.max(0,Math.round(U/R*100))):0,ge=R>0?(U*3-de)/(R*3)*100:0,Ae=Math.round(ge),we=pt(xe),Te=pt(Ae),Ie=localStorage.getItem("planex_daily_mood_"+t),oe=ct.find(v=>v.id===Ie),pe={},He=["#38bdf8","#a78bfa","#f59e0b","#10b981","#ec4899","#6366f1","#f43f5e","#14b8a6","#8b5cf6","#0ea5e9"];L.forEach(v=>{const W=v.subject||v.categoryName||v.title||v.name||"درس آزاد",Y=Number(v.duration!==void 0?v.duration:v.minutes)||0;pe[W]||(pe[W]=0),pe[W]+=Y});const We=Object.keys(pe).map((v,W)=>{const Y=pe[v],se=q>0?Math.round(Y/q*100):0,O=He[W%He.length];return{name:v,mins:Y,pct:se,color:O}}).sort((v,W)=>W.mins-v.mins),z={یادگیری:{mins:0,icon:"🧠",bg:"rgba(99, 102, 241, 0.15)",border:"rgba(129, 140, 248, 0.35)",color:"#818cf8"},تست‌زنی:{mins:0,icon:"🎯",bg:"rgba(16, 185, 129, 0.15)",border:"rgba(52, 211, 153, 0.35)",color:"#34d399"},مرور:{mins:0,icon:"🔄",bg:"rgba(245, 158, 11, 0.15)",border:"rgba(251, 191, 36, 0.35)",color:"#fbbf24"},جمع‌بندی:{mins:0,icon:"📑",bg:"rgba(14, 165, 233, 0.15)",border:"rgba(56, 189, 248, 0.35)",color:"#38bdf8"}};L.forEach(v=>{const W=Number(v.duration!==void 0?v.duration:v.minutes)||0,Y=(v.studyType||v.activityType||v.type||"").toString().toLowerCase();Y.includes("تست")||Y.includes("test")?z.تست‌زنی.mins+=W:Y.includes("مرور")||Y.includes("review")?z.مرور.mins+=W:Y.includes("جمع")||Y.includes("summary")?z.جمع‌بندی.mins+=W:z.یادگیری.mins+=W});const ae=[...L].map(v=>{const W=v.subject||v.categoryName||v.title||v.name||"درس آزاد",Y=v.studyType||"یادگیری",se=Number(v.testCorrect||v.correct||0),O=Number(v.testWrong||v.wrong||0),H=Number(v.testUnanswered||v.unanswered||0),ie=Number(v.testCount||v.tests||se+O+H),ye=ro(v);return{subject:W,timeRangeStr:ye,studyType:Y,tCount:ie,c:se,w:O,u:H}});return`
    <div id="modal-daily-analysis-report" class="modal-overlay" style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(24px); background: rgba(0, 0, 0, 0.88); z-index: 99999; padding: 16px; overflow-y: auto; transform: translateZ(0); will-change: transform, opacity; -webkit-overflow-scrolling: touch;" onclick="if(event.target === this || event.target.classList.contains('modal-overlay')) window.closeDailyAnalysisReport();">
      <!-- ✖ Prominent Story Close Button -->
      <button type="button" aria-label="بستن" onclick="window.closeDailyAnalysisReport();" style="position: absolute; top: 15px; right: 15px; z-index: 99999; width: 40px; height: 40px; background: rgba(0,0,0,0.5); color: white; border: none; border-radius: 50%; font-size: 20px; display: flex; align-items: center; justify-content: center; cursor: pointer; backdrop-filter: blur(4px); -webkit-tap-highlight-color: transparent;">✖</button>

      <div style="max-width: 480px; width: 100%; display: flex; flex-direction: column; align-items: center; gap: 14px;">
        
        <!-- Action Toolbar Above Card -->
        <div style="width: 100%; display: flex; justify-content: space-between; align-items: center; color: white;">
          <div style="font-weight: 800; font-size: 0.95rem; display: flex; align-items: center; gap: 6px;">
            <span style="font-size: 1.1rem;">📊</span>
            <span>تحلیل جامع عملکرد روزانه</span>
          </div>
          <button type="button" aria-label="بستن" onclick="window.closeDailyAnalysisReport();" style="min-width: 44px; min-height: 44px; width: 44px; height: 44px; background: rgba(255,255,255,0.14); border: 1.5px solid rgba(255,255,255,0.28); color: #ffffff; border-radius: 50%; cursor: pointer; font-size: 1.25rem; font-weight: 800; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 14px rgba(0,0,0,0.4); transition: all 0.15s ease; touch-action: manipulation; -webkit-tap-highlight-color: transparent; z-index: 99999;">✕</button>
        </div>

        <!-- 📱 DETAILED DERSITA-STYLE ANALYSIS REPORT CANVAS -->
        <div id="planex-analysis-report-canvas" style="width: 460px; min-height: 820px; background: linear-gradient(165deg, #090d16 0%, #0c1222 40%, #17112c 75%, #080a14 100%); border: 1.5px solid rgba(56, 189, 248, 0.3); border-radius: 28px; padding: 22px 20px; box-sizing: border-box; display: flex; flex-direction: column; gap: 12px; position: relative; overflow: hidden; box-shadow: 0 25px 60px rgba(0, 0, 0, 0.85); direction: rtl; text-align: right; font-family: 'Vazirmatn', -apple-system, sans-serif; color: #ffffff; transform: translateZ(0); will-change: transform, opacity;">
          
          <!-- Background Ambient Glowing Orbs -->
          <div style="position: absolute; top: -50px; right: -50px; width: 200px; height: 200px; background: radial-gradient(circle, rgba(14, 165, 233, 0.3) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>
          <div style="position: absolute; bottom: -50px; left: -50px; width: 200px; height: 200px; background: radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%); border-radius: 50%; pointer-events: none;"></div>

          <!-- 1. HEADER SECTION -->
          <div style="display: flex; justify-content: space-between; align-items: center; z-index: 2; padding-bottom: 2px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              ${T?`
                <img src="${T}" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 2px solid #38bdf8; box-shadow: 0 4px 12px rgba(14, 165, 233, 0.4);" />
              `:`
                <div style="width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #0284c7 0%, #3b82f6 100%); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 800; color: #ffffff; border: 2px solid rgba(255,255,255,0.2); box-shadow: 0 4px 12px rgba(14, 165, 233, 0.4);">
                  ${$.charAt(0)}
                </div>
              `}
              <div style="text-align: right;">
                <div style="font-size: 1.05rem; font-weight: 900; color: #ffffff; letter-spacing: -0.3px;">${$}</div>
                <div style="display: inline-flex; align-items: center; background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.35); padding: 1px 8px; border-radius: 8px; font-size: 0.68rem; font-weight: 700; color: #38bdf8; margin-top: 2px;">
                  🎯 ${D}
                </div>
              </div>
            </div>

            <div style="text-align: left; display: flex; flex-direction: column; align-items: flex-end; gap: 3px;">
              <div style="display: flex; align-items: center; gap: 5px;">
                <img src="./logo-transparent.png" style="width: 22px; height: 22px; border-radius: 6px;" onerror="this.style.display='none';" />
                <span style="font-family: 'Outfit', sans-serif; font-weight: 900; font-size: 0.95rem; background: linear-gradient(135deg, #38bdf8, #10b981); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">PlanEx</span>
              </div>
            </div>
          </div>

          <!-- 2. HORIZONTAL WEEKDAY SELECTOR BAR (شنبه تا جمعه) -->
          <div style="width: 100%; display: flex; flex-direction: column; gap: 6px; align-items: center; z-index: 2; margin: 4px 0;">
            <div style="width: 100%; display: flex; gap: 4px; overflow-x: auto; padding: 4px; background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; scrollbar-width: none; box-sizing: border-box;">
              ${C.map(v=>{const W=p.normalizeJalaliDate(v.dateStr)===t,Y=W?"background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); color: #ffffff; border-color: #38bdf8; box-shadow: 0 4px 12px rgba(14, 165, 233, 0.4);":"background: rgba(255, 255, 255, 0.03); color: #a1a1aa; border-color: rgba(255, 255, 255, 0.06);",se=v.isToday?'<span style="width: 5px; height: 5px; border-radius: 50%; background: #34d399; display: inline-block; margin-right: 3px;"></span>':"";return`
                  <button type="button"
                    class="weekday-tab-btn ${W?"active":""}"
                    data-date="${v.dateStr}"
                    onclick="if(window.selectDailyModalDate){ window.selectDailyModalDate('${v.dateStr}'); }"
                    style="flex: 1; min-width: 48px; padding: 6px 2px; border-radius: 12px; border: 1px solid; font-size: 0.72rem; font-weight: 800; cursor: pointer; transition: all 0.15s ease; text-align: center; white-space: nowrap; ${Y}">
                    <div style="font-size: 0.66rem; opacity: 0.9;">${v.dayName}</div>
                    <div style="font-size: 0.78rem; font-family: 'Outfit', sans-serif; margin-top: 1px;">${se}${te(v.dayOfMonth)}</div>
                  </button>
                `}).join("")}
            </div>

            <!-- Active Jalali Date Subtitle Badge -->
            <div style="font-size: 0.74rem; font-weight: 700; color: #38bdf8; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); padding: 3px 12px; border-radius: 10px;">
              📅 ${g}
            </div>
          </div>

          <!-- 3. HERO STAT BOX (Total Study Time & Progress Bar) -->
          <div style="background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; padding: 14px 16px; position: relative; z-index: 2;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.78rem; font-weight: 700; color: #9ca3af;">⏱️ مجموع زمان مطالعه این روز</span>
              <span style="font-size: 0.7rem; font-weight: 800; color: #38bdf8; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.25); padding: 2px 8px; border-radius: 8px;">
                هدف: ${te(G)} ساعت
              </span>
            </div>
            <div style="font-size: 1.65rem; font-weight: 900; color: #ffffff; margin: 6px 0 10px 0; background: linear-gradient(135deg, #ffffff 0%, #38bdf8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
              ${F}
            </div>
            
            <!-- Daily Goal Completion Progress Bar -->
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.72rem; font-weight: 700; color: #7dd3fc; margin-bottom: 5px;">
              <span>پیشرفت تارگت روزانه</span>
              <span>${te(V)}٪</span>
            </div>
            <div style="width: 100%; height: 8px; background: rgba(255, 255, 255, 0.08); border-radius: 999px; overflow: hidden; position: relative;">
              <div style="width: ${V}%; height: 100%; background: linear-gradient(90deg, #0284c7 0%, #10b981 50%, #f59e0b 100%); border-radius: 999px; box-shadow: 0 0 12px rgba(16, 185, 129, 0.6);"></div>
            </div>
          </div>

          <!-- 4. TOP MINI STATS GRID (3 Boxes) -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; z-index: 2;">
            <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 8px 6px; text-align: center;">
              <div style="font-size: 0.66rem; color: #9ca3af; font-weight: 700;">تعداد جلسات</div>
              <div style="font-size: 0.95rem; font-weight: 900; color: #38bdf8; margin-top: 3px;">
                ${te(X)} <span style="font-size: 0.7rem; font-weight: 600;">جلسه</span>
              </div>
            </div>

            <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 8px 6px; text-align: center;">
              <div style="font-size: 0.66rem; color: #9ca3af; font-weight: 700;">استریک مطالعه</div>
              <div style="font-size: 0.95rem; font-weight: 900; color: #f97316; margin-top: 3px;">
                🔥 ${te(j)} <span style="font-size: 0.7rem; font-weight: 600;">روز</span>
              </div>
            </div>

            <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 8px 6px; text-align: center;">
              <div style="font-size: 0.66rem; color: #9ca3af; font-weight: 700;">ساعت حاضری صبح</div>
              <div style="font-size: ${Z?"0.95rem":"0.78rem"}; font-weight: 900; color: ${Z?"#10b981":"#9ca3af"}; margin-top: 3px; white-space: nowrap;">
                ${E}
              </div>
            </div>
          </div>

          <!-- 5. TEST ANALYTICS BAR -->
          ${ue?`
            <div style="background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.22); border-radius: 16px; padding: 10px 12px; z-index: 2;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-size: 0.72rem; font-weight: 800; color: #34d399;">🎯 تحلیل تست‌های این روز</span>
                <span style="font-size: 0.68rem; font-weight: 700; color: #a78bfa; background: rgba(167, 139, 250, 0.15); padding: 1px 6px; border-radius: 6px;">
                  مجموع: ${te(R)} تست
                </span>
              </div>
              
              <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 4px; text-align: center;">
                <div style="background: rgba(0,0,0,0.2); padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.6rem; color: #9ca3af; white-space: nowrap;">کل</div>
                  <div style="font-size: 0.78rem; font-weight: 800; color: #ffffff;">${te(R)}</div>
                </div>
                <div style="background: rgba(16,185,129,0.1); padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.6rem; color: #6ee7b7; white-space: nowrap;">درست</div>
                  <div style="font-size: 0.78rem; font-weight: 800; color: #34d399;">${te(U)}</div>
                </div>
                <div style="background: rgba(239,68,68,0.1); padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.6rem; color: #fca5a5; white-space: nowrap;">غلط</div>
                  <div style="font-size: 0.78rem; font-weight: 800; color: #f87171;">${te(de)}</div>
                </div>
                <div style="background: rgba(161,161,170,0.1); padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.6rem; color: #d4d4d8; white-space: nowrap;">نزده</div>
                  <div style="font-size: 0.78rem; font-weight: 800; color: #a1a1aa;">${te(B)}</div>
                </div>
                <div style="background: ${we.bg}; border: 1px solid ${we.border}; padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.58rem; color: ${we.text}; white-space: nowrap; font-weight: 700;">بدون منفی</div>
                  <div style="font-size: 0.78rem; font-weight: 900; color: ${we.text};">${te(xe)}٪</div>
                </div>
                <div style="background: ${Te.bg}; border: 1px solid ${Te.border}; padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.58rem; color: ${Te.text}; white-space: nowrap; font-weight: 700;">با منفی</div>
                  <div style="font-size: 0.78rem; font-weight: 900; color: ${Te.text};">${te(Ae)}٪</div>
                </div>
              </div>
            </div>
          `:""}

          <!-- 6. SUBJECT BREAKDOWN (دروس) WITH PERFECT ALIGNMENT & ELEGANT EMPTY STATE -->
          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 16px; padding: 10px 12px; z-index: 2;">
            <div style="font-size: 0.74rem; font-weight: 800; color: #e4e4e7; margin-bottom: 8px; display: flex; align-items: center; gap: 4px;">
              <span>📚 تفکیک دروس مطالعه‌شده</span>
            </div>
            ${We.length>0?`
              <div style="display: flex; flex-direction: column; gap: 6px;">
                ${We.slice(0,6).map(v=>`
                  <div>
                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.7rem; margin-bottom: 2px; gap: 6px;">
                      <div style="display: flex; align-items: center; gap: 6px; min-width: 0; flex: 1; overflow: hidden; white-space: nowrap;">
                        <span style="width: 7px; height: 7px; border-radius: 50%; background: ${v.color}; flex-shrink: 0; box-shadow: 0 0 6px ${v.color};"></span>
                        <span style="font-weight: 700; color: #ffffff; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${v.name}</span>
                      </div>
                      <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0; white-space: nowrap;">
                        <span style="color: #9ca3af; font-size: 0.65rem;">${Ue(v.mins)}</span>
                        <span style="color: ${v.color}; font-weight: 800; font-size: 0.68rem; min-width: 30px; text-align: left;">${te(v.pct)}٪</span>
                      </div>
                    </div>
                    <!-- Sub Progress Line -->
                    <div style="width: 100%; height: 5px; background: rgba(255, 255, 255, 0.06); border-radius: 999px; overflow: hidden;">
                      <div style="width: ${v.pct}%; height: 100%; background: ${v.color}; border-radius: 999px;"></div>
                    </div>
                  </div>
                `).join("")}
              </div>
            `:`
              <div style="font-size: 0.74rem; color: #a1a1aa; text-align: center; padding: 12px 0; font-weight: bold;">
                📭 هیچ مطالعه‌ای برای این روز ثبت نشده است
              </div>
            `}
          </div>

          <!-- 7. ACTIVITY TYPE PILLS -->
          <div style="z-index: 2;">
            <div style="font-size: 0.72rem; font-weight: 800; color: #9ca3af; margin-bottom: 6px;">
              🏷️ تفکیک نوع فعالیت
            </div>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px;">
              ${Object.keys(z).map(v=>{const W=z[v];return`
                  <div style="background: ${W.bg}; border: 1px solid ${W.border}; padding: 5px 8px; border-radius: 10px; display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 4px;">
                      <span style="font-size: 0.8rem;">${W.icon}</span>
                      <span style="font-size: 0.68rem; font-weight: 700; color: #e4e4e7;">${v}</span>
                    </div>
                    <span style="font-size: 0.68rem; font-weight: 800; color: ${W.color};">
                      ${Ue(W.mins)}
                    </span>
                  </div>
                `}).join("")}
            </div>
          </div>

          <!-- 8. TIMELINE SESSIONS LIST WITH FIXED TIMESTAMP FORMATTING OR ELEGANT EMPTY STATE -->
          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 16px; padding: 10px 12px; z-index: 2; flex-grow: 1; display: flex; flex-direction: column;">
            <div style="font-size: 0.74rem; font-weight: 800; color: #e4e4e7; margin-bottom: 6px; display: flex; justify-content: space-between; align-items: center;">
              <span>🕒 جریان زمانی جلسات</span>
              <span style="font-size: 0.65rem; color: #9ca3af;">${te(ae.length)} پارت</span>
            </div>
            
            ${ae.length>0?`
              <div style="display: flex; flex-direction: column; gap: 6px; overflow: hidden;">
                ${ae.slice(0,5).map(v=>`
                  <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); padding: 6px 8px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; align-items: center; gap: 6px; min-width: 0; flex: 1; overflow: hidden;">
                      <span style="font-size: 0.72rem; font-weight: 800; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${v.subject}</span>
                      <span style="font-size: 0.6rem; color: #c4b5fd; background: rgba(167, 139, 250, 0.15); padding: 1px 5px; border-radius: 6px; font-weight: 700; white-space: nowrap; flex-shrink: 0;">${v.studyType}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0; white-space: nowrap;">
                      ${v.tCount>0?`
                        <span style="font-size: 0.6rem; color: #34d399; background: rgba(52, 211, 153, 0.12); padding: 1px 5px; border-radius: 6px; font-weight: 700;">
                          🎯 ${te(v.tCount)}
                        </span>
                      `:""}
                      <span style="font-size: 0.65rem; color: #38bdf8; font-weight: 700; font-family: 'Outfit', sans-serif;">
                        ${v.timeRangeStr}
                      </span>
                    </div>
                  </div>
                `).join("")}
                ${ae.length>5?`
                  <div style="font-size: 0.62rem; color: #8e8e9c; text-align: center; margin-top: 2px;">
                    و ${te(ae.length-5)} جلسه دیگر...
                  </div>
                `:""}
              </div>
            `:`
              <div style="font-size: 0.74rem; color: #8e8e9c; text-align: center; margin: auto 0; padding: 16px 0; font-weight: bold;">
                هیچ مطالعه‌ای برای این روز ثبت نشده است
              </div>
            `}
          </div>

          <!-- 8.5 DAILY MOOD & ENERGY TRACKER -->
          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 10px 12px; z-index: 2;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-size: 0.74rem; font-weight: 800; color: #fbbf24; display: flex; align-items: center; gap: 4px;">
                ⚡️ حس و انرژی امروز
              </span>
              ${oe?`
                <span style="font-size: 0.68rem; font-weight: 800; color: #fbbf24; background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3); padding: 2px 8px; border-radius: 8px;">
                  ${oe.badge}
                </span>
              `:`
                <span style="font-size: 0.65rem; color: #9ca3af;">(یک گزینه انتخاب کنید)</span>
              `}
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px;">
              ${ct.map(v=>{const Y=oe&&oe.id===v.id?"background: linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(217, 119, 6, 0.2) 100%); border: 1.5px solid #fbbf24; color: #ffffff; box-shadow: 0 0 12px rgba(245, 158, 11, 0.35); font-weight: 900;":"background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); color: #d4d4d8; font-weight: 700;";return`
                  <button type="button"
                    onclick="if(window.setDailyMood){ window.setDailyMood('${t}', '${v.id}'); }"
                    style="padding: 7px 8px; border-radius: 12px; font-size: 0.7rem; cursor: pointer; transition: all 0.15s ease; display: flex; align-items: center; justify-content: center; gap: 4px; ${Y}">
                    <span>${v.badge}</span>
                  </button>
                `}).join("")}
            </div>
          </div>

          <!-- 9. FOOTER BRANDING WITH VIRAL TELEGRAM TAG -->
          <div style="border-top: 1px dashed rgba(255, 255, 255, 0.12); padding-top: 8px; display: flex; justify-content: space-between; align-items: center; font-size: 0.68rem; color: #9ca3af; z-index: 2; margin-top: auto;">
            <div style="display: flex; align-items: center; gap: 4px;">
              <span style="color: #38bdf8; font-weight: 800;">PlanEx</span>
              <span>•</span>
              <span>کارنامه تحلیلی روزانه</span>
            </div>
            <div style="display: inline-flex; align-items: center; gap: 4px; background: linear-gradient(135deg, rgba(124, 58, 237, 0.18) 0%, rgba(16, 185, 129, 0.15) 100%); border: 1px solid rgba(167, 139, 250, 0.35); padding: 3px 10px; border-radius: 999px; font-size: 0.64rem; font-weight: 800; color: #c4b5fd; box-shadow: 0 2px 8px rgba(124, 58, 237, 0.25);">
              <span>✨ ساخته شده با پلنکس ✦ @PlanExApp</span>
            </div>
          </div>

        </div>

        <!-- Download Analysis Report Button -->
        <button type="button" id="btn-download-analysis-report" onclick="window.downloadAnalysisReportPNG();"
          style="width: 100%; background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%); border: none; color: #ffffff; padding: 12px 20px; border-radius: 16px; font-weight: 800; font-size: 0.9rem; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 6px 20px rgba(14, 165, 233, 0.35); transition: transform 0.15s ease;">
          <span style="font-size: 1.1rem;">📥</span>
          <span>دانلود کارنامه و تحلیل کامل (تصویر PNG)</span>
        </button>

      </div>
    </div>
  `}function Xe(o,e=!1){const t=document.getElementById("planex-story-toast");t&&t.remove();const n=document.createElement("div");n.id="planex-story-toast",Object.assign(n.style,{position:"fixed",bottom:"24px",left:"50%",transform:"translateX(-50%)",padding:"12px 24px",borderRadius:"14px",fontSize:"0.88rem",fontWeight:"700",color:"#ffffff",background:e?"linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)":"linear-gradient(135deg, #10b981 0%, #059669 100%)",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.4)",zIndex:"999999",direction:"rtl",transition:"opacity 0.3s ease",opacity:"0"}),n.textContent=o,document.body.appendChild(n),requestAnimationFrame(()=>{n.style.opacity="1"}),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),350)},3e3)}function _t(o){const e=t=>{if(t.nodeType!==1)return;const n=t.style;n.filter&&(n.filter="none"),n.backdropFilter&&(n.backdropFilter="none"),n.webkitBackdropFilter&&(n.webkitBackdropFilter="none"),["color","backgroundColor","borderColor"].forEach(a=>{const i=n[a];if(i&&i.includes("var(")){const r=getComputedStyle(t)[a];r&&(n[a]=r)}});for(const a of t.children)e(a)};e(o)}async function Bt(o,e){try{if(typeof navigator<"u"&&navigator.share&&navigator.canShare){const a=await(await fetch(o)).blob(),i=new File([a],e,{type:a.type||"image/png"});if(navigator.canShare({files:[i]})){await navigator.share({files:[i],title:"PlanEx Story"});return}}}catch(n){n&&n.name!=="AbortError"&&console.warn("[triggerDownload] Web Share failed, falling back to anchor:",n)}const t=document.createElement("a");t.download=e,t.href=o,document.body.appendChild(t),t.click(),document.body.removeChild(t)}function Lt(o,e,t,n){return new Promise((a,i)=>{try{const r="http://www.w3.org/2000/svg",d=o.cloneNode(!0);_t(d),d.style.width=e+"px",d.style.height=t+"px";const s=new XMLSerializer().serializeToString(d),l=`
        <svg xmlns="${r}" width="${e}" height="${t}">
          <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml">${s}</div>
          </foreignObject>
        </svg>`,c=new Image,y=new Blob([l],{type:"image/svg+xml;charset=utf-8"}),m=URL.createObjectURL(y);c.onload=()=>{const u=document.createElement("canvas");u.width=e*n,u.height=t*n;const b=u.getContext("2d");b.fillStyle="#030712",b.fillRect(0,0,u.width,u.height),b.scale(n,n),b.drawImage(c,0,0,e,t),URL.revokeObjectURL(m),a(u)},c.onerror=u=>{URL.revokeObjectURL(m),i(new Error("Fallback SVG-to-Canvas render failed: "+(u.message||u)))},c.src=m}catch(r){i(r)}})}async function At(){const o=document.getElementById("btn-download-story-card"),e=document.getElementById("planex-story-card-canvas");if(!e){Xe("عنصر کارت پیدا نشد.",!0);return}const t=o?o.innerHTML:"";o&&(o.disabled=!0,o.innerHTML="<span>⏳</span><span>در حال ساخت تصویر...</span>");const n=()=>{o&&(o.disabled=!1,o.innerHTML=t)},i=`PlanEx_Daily_Story_${typeof p<"u"&&typeof p.getTodayJalaliString=="function"?p.getTodayJalaliString().replace(/\//g,"-"):new Date().toISOString().slice(0,10)}.png`;let r=null;try{r=e.cloneNode(!0),r.id="planex-story-card-offscreen",Object.assign(r.style,{position:"fixed",left:"-9999px",top:"0",zIndex:"-1",display:"flex",width:"440px",height:"740px",minHeight:"740px",maxHeight:"740px",maxWidth:"none",transform:"none"}),_t(r),document.body.appendChild(r),await new Promise(s=>requestAnimationFrame(()=>requestAnimationFrame(s)))}catch(s){console.warn("Story card: clone failed, capturing in-place.",s),r=null}const d=r||e;try{let s;try{s=await Pt(d,{scale:2,useCORS:!0,allowTaint:!0,backgroundColor:"#090d16",logging:!1,removeContainer:!1})}catch(c){console.warn("html2canvas failed, attempting fallback:",c);const y=d.offsetWidth||440,m=d.offsetHeight||740;s=await Lt(d,y,m,2)}const l=s.toDataURL("image/png");Bt(l,i),o&&(o.innerHTML="<span>✅</span><span>تصویر با موفقیت دانلود شد!</span>",setTimeout(n,2500)),Xe("تصویر کارت استوری با موفقیت ذخیره شد ✅")}catch(s){console.error("Story card export failed:",s),Xe("خطا در دانلود تصویر: "+(s.message||s),!0),n()}finally{r&&r.parentNode&&r.parentNode.removeChild(r)}}async function po(){const o=document.getElementById("btn-download-analysis-report"),e=document.getElementById("planex-analysis-report-canvas");if(!e){Xe("عنصر کارنامه تحلیلی پیدا نشد.",!0);return}const t=o?o.innerHTML:"";o&&(o.disabled=!0,o.innerHTML="<span>⏳</span><span>در حال ساخت تصویر کارنامه...</span>");const n=()=>{o&&(o.disabled=!1,o.innerHTML=t)},i=`PlanEx_Daily_Analysis_${typeof p<"u"&&typeof p.getTodayJalaliString=="function"?p.getTodayJalaliString().replace(/\//g,"-"):new Date().toISOString().slice(0,10)}.png`;let r=null;try{r=e.cloneNode(!0),r.id="planex-analysis-report-offscreen",Object.assign(r.style,{position:"fixed",left:"-9999px",top:"0",zIndex:"-1",display:"flex",width:"460px",maxHeight:"none",transform:"none"}),_t(r),document.body.appendChild(r),await new Promise(s=>requestAnimationFrame(()=>requestAnimationFrame(s)))}catch(s){console.warn("Analysis report clone failed, capturing in-place.",s),r=null}const d=r||e;try{let s;try{s=await Pt(d,{scale:2,useCORS:!0,allowTaint:!0,backgroundColor:"#090d16",logging:!1,removeContainer:!1})}catch(c){console.warn("html2canvas failed for analysis report, attempting fallback:",c);const y=d.offsetWidth||460,m=d.offsetHeight||820;s=await Lt(d,y,m,2)}const l=s.toDataURL("image/png");Bt(l,i),o&&(o.innerHTML="<span>✅</span><span>تصویر کارنامه با موفقیت دانلود شد!</span>",setTimeout(n,2500)),Xe("کارنامه تحلیلی با موفقیت ذخیره شد ✅")}catch(s){console.error("Analysis report export failed:",s),Xe("خطا در دانلود تصویر: "+(s.message||s),!0),n()}finally{r&&r.parentNode&&r.parentNode.removeChild(r)}}if(typeof window<"u"&&(window.selectDailyModalDate=o=>{if(!o)return;const e=p&&typeof p.normalizeJalaliDate=="function"?p.normalizeJalaliDate(o):o;window.appState&&(window.appState.selectedJalaliDetailDate=e),typeof window.renderApp=="function"&&window.renderApp()},window.openStoryModal=(o="dailyStoryCard",e=null)=>{const t=typeof state<"u"&&state?state:window.appState,n=o==="dailyAnalysisReport"||o==="analysis"||o==="report"||o==="jalaliDayDetails"?"dailyAnalysisReport":"dailyStoryCard",a=p&&typeof p.getTodayJalaliString=="function"?p.getTodayJalaliString():null,i=e||(t==null?void 0:t.selectedJalaliDetailDate)||a;t&&(i&&(t.selectedJalaliDetailDate=i),t.activeModal=n),window.appState&&window.appState!==t&&(i&&(window.appState.selectedJalaliDetailDate=i),window.appState.activeModal=n);try{history.pushState({modal:n},"")}catch{}typeof window.renderApp=="function"&&window.renderApp()},window.closeStoryModal=()=>{typeof state<"u"&&state&&(state.activeModal=null),window.appState&&(window.appState.activeModal=null),typeof window.renderApp=="function"&&window.renderApp()},window.openDailyStoryCard=(o=null)=>{window.openStoryModal("dailyStoryCard",o)},window.closeDailyStoryCard=()=>{window.closeStoryModal()},window.openDailyAnalysisReport=(o=null)=>{window.openStoryModal("dailyAnalysisReport",o)},window.closeDailyAnalysisReport=()=>{window.closeStoryModal()},window.openDailyReportModal=(o=null)=>{window.openStoryModal("dailyAnalysisReport",o)},window.openQuickStoryModal=(o=null)=>{window.openStoryModal("dailyStoryCard",o)},window.closeDailyReportModal=()=>{window.closeStoryModal()},window.closeQuickStoryModal=()=>{window.closeStoryModal()},window.openDailyReport=window.openDailyReportModal,window.openQuickStory=window.openQuickStoryModal,window.openDailyAnalysisModal=window.openDailyReportModal,window.openJalaliDayDetailsModal=(o=null)=>{window.openStoryModal("dailyAnalysisReport",o)},window.downloadStoryCardPNG=At,window.generateStoryCardPNG=At,window.downloadAnalysisReportPNG=po,window.setDailyMood=(o,e)=>{if(!o||!e)return;const t=p&&typeof p.normalizeJalaliDate=="function"?p.normalizeJalaliDate(o):o;localStorage.setItem("planex_daily_mood_"+t,e),typeof window.renderApp=="function"&&window.renderApp()},window.weekdaySelectorDelegationBound||(document.addEventListener("click",o=>{const e=o.target.closest(".weekday-tab-btn, [data-weekday-date]");if(e){const t=e.dataset.date||e.dataset.weekdayDate;t&&typeof window.selectDailyModalDate=="function"&&window.selectDailyModalDate(t)}}),window.weekdaySelectorDelegationBound=!0),window.dailyModalKeyboardBound||(document.addEventListener("keydown",o=>{(o.key==="Escape"||o.keyCode===27)&&window.appState&&(window.appState.activeModal==="dailyStoryCard"||window.appState.activeModal==="dailyAnalysisReport")&&(o.preventDefault(),window.appState.activeModal=null,typeof window.renderApp=="function"&&window.renderApp())}),window.addEventListener("popstate",()=>{window.appState&&(window.appState.activeModal==="dailyStoryCard"||window.appState.activeModal==="dailyAnalysisReport")&&(window.appState.activeModal=null,typeof window.renderApp=="function"&&window.renderApp())}),window.dailyModalKeyboardBound=!0),!window.dailyRingAutoSyncBound)){const o=()=>{document.querySelector(".daily-ring-widget-card")&&typeof window.renderApp=="function"&&window.renderApp()};window.addEventListener("activity-saved",o),window.addEventListener("storage",e=>{(e.key==="planex_recent_activity_sessions"||e.key==="planex_study_logs"||e.key==="planex_active_timer_state")&&o()}),window.dailyRingAutoSyncBound=!0}const ne=o=>String(o??"").replace(/[0-9]/g,e=>"۰۱۲۳۴۵۶۷۸۹"[e]);typeof window<"u"&&(window.openGPACalculator=()=>{window.appState&&(window.appState.activeModal="gpaCalc"),window.renderApp&&window.renderApp()},window.openRankEstimator=()=>{window.appState&&(window.appState.activeModal="rankEstimator"),window.renderApp&&window.renderApp();try{var o=document.getElementById("modal-rank-estimator")||document.getElementById("modal-konkur-estimator");o&&(o.style.display="flex",o.classList.add("active"))}catch{}},window.openKonkurEstimatorModal=function(){try{var o="";try{typeof St=="function"?o=St():typeof vt=="function"&&(o=vt())}catch{o=""}var e=null;try{e=document.getElementById("modals-root")||document.getElementById("modal-container")||document.body}catch{e=null}var t=null;try{t=document.getElementById("modal-konkur-estimator")||document.getElementById("modal-rank-estimator")}catch{t=null}var n=!0;try{t&&t.innerHTML&&t.innerHTML.length>500&&t.querySelector("select, input")&&(n=!1)}catch{n=!0}if(n&&e&&o){try{var a=document.getElementById("modal-konkur-estimator");if(a){var d=document.createElement("div");d.innerHTML=o;var s=d.firstElementChild;s?a.innerHTML=s.innerHTML:a.innerHTML=o}else{var i=document.createElement("div");i.innerHTML=o;var r=i.firstElementChild;r?e.appendChild(r):e.insertAdjacentHTML("beforeend",o)}}catch{try{e.insertAdjacentHTML("beforeend",o)}catch{}}try{t=document.getElementById("modal-konkur-estimator")||document.getElementById("modal-rank-estimator")}catch{}}try{kt()}catch{}t&&(t.style.display="flex",t.classList.add("active"))}catch{}try{if(window.appState&&(window.appState.activeModal="rankEstimator"),typeof window.renderApp=="function"){window.renderApp();try{var l=document.getElementById("modal-konkur-estimator")||document.getElementById("modal-rank-estimator");l&&(l.style.display="flex",l.classList.add("active"))}catch{}try{kt()}catch{}}}catch{}},window.closeKonkurEstimatorModal=function(){try{["modal-konkur-estimator","modal-rank-estimator"].forEach(function(o){var e=document.getElementById(o);e&&(e.style.display="none",e.classList.remove("active"))})}catch{}try{window.appState&&(window.appState.activeModal=null),typeof window.renderApp=="function"&&window.renderApp()}catch{}},window.openPercentCalculator=()=>{window.appState&&(window.appState.activeModal="percentCalc"),window.renderApp&&window.renderApp()},window.openExamBox=()=>{window.appState&&(window.appState.activeModal="examBox"),window.renderApp&&window.renderApp()},window.openSleepScheduler=()=>{window.appState&&(window.appState.activeModal="sleepScheduler"),window.renderApp&&window.renderApp()});function tn(o){return co(o)}typeof window<"u"&&(window.handlePercentCalcInput=function(o,e){window.percentCalcState=window.percentCalcState||{correct:20,incorrect:4,unanswered:6},window.percentCalcState[o]=e,window.updatePercentCalculation()},window.updatePercentCalculation=function(){const o=window.percentCalcState||{correct:20,incorrect:4,unanswered:6},e=Math.max(0,parseInt(o.correct)||0),t=Math.max(0,parseInt(o.incorrect)||0),n=Math.max(0,parseInt(o.unanswered)||0),a=e+t+n,i=a>0?(3*e-t)/(3*a)*100:0,r=Math.max(-33.3,Math.min(100,i)).toFixed(1);let d="#10b981",s="عالی 🚀 (عملکرد فوق‌العاده)";i<50?(d="#ef4444",s="نیاز به مرور و تمرکز بیشتر ⚠️"):i<70&&(d="#f59e0b",s="خوب و قابل ارتقا 👍");const l=a>0?(t/(3*a)*100).toFixed(1):"0",c=document.getElementById("percent-calc-card-box");c&&(c.style.borderColor=d);const y=document.getElementById("percent-calc-score-display");y&&(y.textContent=`${ne(r)}٪`,y.style.color=d);const m=document.getElementById("percent-calc-badge");m&&(m.textContent=s,m.style.color=d,m.style.borderColor=d);const u=document.getElementById("percent-calc-total-display");u&&(u.textContent=`${ne(a)} سوال`);const b=document.getElementById("percent-calc-positive-display");b&&(b.textContent=`+${ne(3*e)}`);const g=document.getElementById("percent-calc-lost-display");g&&(g.textContent=`-${ne(t)} امتیاز (-${ne(l)}٪)`)});function on(){window.percentCalcState=window.percentCalcState||{correct:20,incorrect:4,unanswered:6};const{correct:o,incorrect:e,unanswered:t}=window.percentCalcState,n=Math.max(0,parseInt(o)||0),a=Math.max(0,parseInt(e)||0),i=Math.max(0,parseInt(t)||0),r=n+a+i,d=r>0?(3*n-a)/(3*r)*100:0,s=Math.max(-33.3,Math.min(100,d)).toFixed(1);let l="#10b981",c="عالی 🚀 (عملکرد فوق‌العاده)";d<50?(l="#ef4444",c="نیاز به مرور و تمرکز بیشتر ⚠️"):d<70&&(l="#f59e0b",c="خوب و قابل ارتقا 👍");const y=r>0?(a/(3*r)*100).toFixed(1):"0";return`
    <div class="modal-overlay" id="modal-percent-calc" style="backdrop-filter: blur(16px); display: flex;">
      <div class="modal-card" style="max-width: 480px; background: rgba(15, 23, 42, 0.96); border: 1.5px solid rgba(251, 146, 60, 0.4); border-radius: 24px; direction: rtl;">
        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
          <div class="modal-title" style="color: #fb923c; font-weight: 800; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
            🎯 محاسبه درصد دقیق آزمون
          </div>
          <button class="btn-close" onclick="window.appState.activeModal = null; window.renderApp();" style="background: none; border: none; color: #a1a1aa; font-size: 1.2rem; cursor: pointer;">✕</button>
        </div>

        <div style="margin: 16px 0;">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 16px;">
            <div class="input-group">
              <label class="input-label" style="color: #34d399; font-weight: bold; font-size: 0.78rem;">تست صحیح (C)</label>
              <input type="number" min="0" value="${n}" class="form-input" style="border-color: rgba(52, 211, 153, 0.4); text-align: center; font-size: 1rem; font-weight: bold; font-family: 'Outfit';"
                oninput="window.handlePercentCalcInput('correct', this.value)" />
            </div>

            <div class="input-group">
              <label class="input-label" style="color: #f87171; font-weight: bold; font-size: 0.78rem;">تست نادرست (I)</label>
              <input type="number" min="0" value="${a}" class="form-input" style="border-color: rgba(248, 113, 113, 0.4); text-align: center; font-size: 1rem; font-weight: bold; font-family: 'Outfit';"
                oninput="window.handlePercentCalcInput('incorrect', this.value)" />
            </div>

            <div class="input-group">
              <label class="input-label" style="color: #94a3b8; font-weight: bold; font-size: 0.78rem;">نزده / بی‌پاسخ (U)</label>
              <input type="number" min="0" value="${i}" class="form-input" style="border-color: rgba(148, 163, 184, 0.4); text-align: center; font-size: 1rem; font-weight: bold; font-family: 'Outfit';"
                oninput="window.handlePercentCalcInput('unanswered', this.value)" />
            </div>
          </div>

          <!-- Calculated Output Card -->
          <div id="percent-calc-card-box" style="background: rgba(31, 32, 41, 0.9); border: 1.5px solid ${l}; border-radius: 20px; padding: 20px; text-align: center; margin-bottom: 14px; box-shadow: 0 0 20px rgba(0,0,0,0.3); transition: border-color 0.2s ease;">
            <div style="font-size: 0.8rem; color: #a1a1aa; font-weight: bold; margin-bottom: 6px;">درصد کل کسب‌شده با احتساب نمره منفی</div>
            <div id="percent-calc-score-display" style="font-size: 2.5rem; font-weight: 900; color: ${l}; font-family: 'Outfit', sans-serif; letter-spacing: -1px; transition: color 0.2s ease;">
              ${ne(s)}٪
            </div>
            <div id="percent-calc-badge" style="display: inline-block; background: rgba(255,255,255,0.06); border: 1px solid ${l}; color: ${l}; padding: 4px 12px; border-radius: 12px; font-size: 0.78rem; font-weight: bold; margin-top: 8px; transition: all 0.2s ease;">
              ${c}
            </div>
          </div>

          <!-- Breakdown Summary Details -->
          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 12px 14px; font-size: 0.78rem; display: flex; flex-direction: column; gap: 6px;">
            <div style="display: flex; justify-content: space-between; color: #cbd5e1;">
              <span>تعداد کل سوالات آزمون:</span>
              <strong id="percent-calc-total-display" style="color: #ffffff; font-family: 'Outfit';">${ne(r)} سوال</strong>
            </div>
            <div style="display: flex; justify-content: space-between; color: #cbd5e1;">
              <span>امتیاز مثبت کسب‌شده:</span>
              <strong id="percent-calc-positive-display" style="color: #34d399; font-family: 'Outfit';">+${ne(3*n)}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; color: #cbd5e1;">
              <span>تلفات ناشی از پاسخ نادرست (نمره منفی):</span>
              <strong id="percent-calc-lost-display" style="color: #f87171; font-family: 'Outfit';">-${ne(a)} امتیاز (-${ne(y)}٪)</strong>
            </div>
          </div>
        </div>

        <button onclick="window.appState.activeModal = null; window.renderApp();" class="btn-primary" style="width: 100%; background: #fb923c; border: none; padding: 12px; border-radius: 14px; font-weight: 800; color: #000; cursor: pointer;">
          تایید و بستن
        </button>
      </div>
    </div>
  `}function Jt(o,e,t,n){const a=t>100?Math.round(Math.min(13500,Math.max(2e3,t))):Math.round(3500+Math.max(0,Math.min(100,t))*82),i=n>100?Math.round(Math.min(13500,Math.max(2e3,n))):n<=20?Math.round(3e3+Math.pow(Math.max(0,Math.min(20,n))/20,1.85)*8e3):Math.round(3e3+Math.pow(Math.max(0,Math.min(100,n))/100,1.85)*8e3),r=Math.round(a*.5+i*.5);let d="بیش از ۲۵,۰۰۰",s="بیش از ۶۰,۰۰۰",l="رشته‌های بر اساس سوابق تحصیلی و دانشگاه‌های غیرانتفاعی / آزاد",c="#ef4444";r>=10800?(d="۱ تا ۱۰۰",s="۱ تا ۲۵۰",l="پزشکی و دندان‌پزشکی دانشگاه تهران و علوم پزشکی شهید بهشتی",c="#10b981"):r>=1e4?(d="کمتر از ۵۰۰ (۱۰۰ تا ۵۰۰)",s="۲۵۰ تا ۱,۲۵۰",l="پزشکی / دندانپزشکی روزانه (دانشگاه‌های دولتی تیپ ۱ و ۲)",c="#10b981"):r>=9200?(d="۵۰۰ تا ۱,۵۰۰",s="۱,۲۵۰ تا ۳,۵۰۰",l="پزشکی و دندان‌پزشکی تیپ ۳ / داروسازی برتر مراکز استان",c="#34d399"):r>=8500?(d="۱,۵۰۰ تا ۳,۵۰۰",s="۳,۵۰۰ تا ۸,۲۰۰",l="داروسازی / فیزیوتراپی / پیراپزشکی برتر (دانشگاه‌های تیپ ۱ و ۲)",c="#38bdf8"):r>=8e3?(d="۳,۵۰۰ تا ۵,۰۰۰",s="۸,۲۰۰ تا ۱۲,۰۰۰",l="بینایی‌سنجی، کاردرمانی، پرستاری و مامایی تیپ ۱",c="#fbbf24"):r>=7e3?(d="۵,۰۰۰ تا ۱۲,۰۰۰",s="۱۲,۰۰۰ تا ۲۸,۰۰۰",l="پیراپزشکی‌ها (پرستاری، مامایی، هوشبری، اتاق عمل دولتی)",c="#fb923c"):r>=6e3?(d="۱۲,۰۰۰ تا ۲۵,۰۰۰",s="۲۸,۰۰۰ تا ۶۰,۰۰۰",l="علوم پایه، بهداشت و پیراپزشکی‌های شهریه‌پرداز / پردیس / آزاد",c="#a1a1aa"):(d="بیش از ۲۵,۰۰۰",s="بیش از ۶۰,۰۰۰",l="دوره‌های نوبت دوم، پیام‌نور و پذیرش بر اساس سوابق تحصیلی",c="#ef4444");let y=d;return e==="منطقه ۱"?r>=1e4?y="کمتر از ۳۵۰":r>=9200?y="۳۵۰ تا ۱,۱۰۰":r>=8500?y="۱,۱۰۰ تا ۲,۴۰۰":r>=8e3?y="۲,۴۰۰ تا ۳,۸۰۰":r>=7e3?y="۳,۸۰۰ تا ۸,۵۰۰":r>=6e3?y="۸,۵۰۰ تا ۱۸,۰۰۰":y="بیش از ۱۸,۰۰۰":e==="منطقه ۳"?r>=1e4?y="کمتر از ۴۰۰":r>=9200?y="۴۰۰ تا ۱,۳۰۰":r>=8500?y="۱,۳۰۰ تا ۳,۰۰۰":r>=8e3?y="۳,۰۰۰ تا ۴,۵۰۰":r>=7e3?y="۴,۵۰۰ تا ۱۰,۵۰۰":r>=6e3?y="۱۰,۵۰۰ تا ۲۲,۰۰۰":y="بیش از ۲۲,۰۰۰":e==="ایثارگران"&&(r>=1e4?y="کمتر از ۵۰ سهمیه":r>=8500?y="۵۰ تا ۳۰۰ سهمیه":r>=7e3?y="۳۰۰ تا ۱,۲۰۰ سهمیه":y="بیش از ۱,۲۰۰ سهمیه"),{konkurTazar:a,finalExamTazar:i,weightedTotalTazar:r,quotaRankDisplay:y,countryRankText:s,targetTier:l,badgeColor:c}}typeof window<"u"&&(window.handleRankEstimatorInput=function(o,e){window.rankEstimatorState||(window.rankEstimatorState={stream:"تجربی",region:"منطقه ۲",konkurScore:8800,finalScore:9e3}),window.rankEstimatorState[o]=e,window.updateRankEstimation()},window.updateRankEstimation=function(){const o=window.rankEstimatorState||{},e=o.stream||"تجربی",t=o.region||"منطقه ۲",n=o.konkurScore??o.dedicatedPct??8800,a=o.finalScore??o.generalPct??9e3,i=parseFloat(n)||0,r=parseFloat(a)||0,d=Jt(e,t,i,r),s=document.getElementById("rank-estimator-quota-display");s&&(s.textContent=ne(d.quotaRankDisplay),s.style.color=d.badgeColor);const l=document.getElementById("rank-estimator-quota-label");l&&(l.textContent=`🎯 رتبه تخمینی در سهمیه ${t}:`);const c=document.getElementById("rank-estimator-country-display");c&&(c.textContent=ne(d.countryRankText));const y=document.getElementById("rank-estimator-total-tazar");y&&(y.textContent=ne(d.weightedTotalTazar));const m=document.getElementById("rank-estimator-sub-tazars");m&&(m.textContent=`(کنکور: ${ne(d.konkurTazar)} • نهایی: ${ne(d.finalExamTazar)})`);const u=document.getElementById("rank-estimator-target-tier");u&&(u.textContent=d.targetTier);const b=document.getElementById("rank-estimator-result-card");b&&(b.style.borderColor=d.badgeColor)});function vt(){window.rankEstimatorState=window.rankEstimatorState||{stream:"تجربی",region:"منطقه ۲",konkurScore:8800,finalScore:9e3};const{stream:o,region:e}=window.rankEstimatorState,t=window.rankEstimatorState.konkurScore??window.rankEstimatorState.dedicatedPct??8800,n=window.rankEstimatorState.finalScore??window.rankEstimatorState.generalPct??9e3,a=parseFloat(t)||0,i=parseFloat(n)||0,r=Jt(o,e,a,i);return`
    <div class="modal-overlay" id="modal-konkur-estimator" data-modal-alias="modal-rank-estimator" style="backdrop-filter: blur(16px); display: flex;">
      <!-- Legacy alias node kept for backward-compat selectors -->
      <div id="modal-rank-estimator" style="display: contents;">
      <div class="modal-card" style="max-width: 520px; background: rgba(15, 23, 42, 0.96); border: 1.5px solid rgba(251, 191, 36, 0.4); border-radius: 24px; direction: rtl;">
        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
          <div class="modal-title" style="color: #fbbf24; font-weight: 800; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
            🏆 تخمین رتبه و تراز سراسری کنکور
          </div>
          <button class="btn-close" onclick="window.appState.activeModal = null; window.renderApp();" style="background: none; border: none; color: #a1a1aa; font-size: 1.2rem; cursor: pointer;">✕</button>
        </div>

        <div style="margin: 16px 0;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
            <div class="input-group">
              <label class="input-label" style="font-size: 0.78rem;">رشته تحصیلی</label>
              <select class="form-select" style="font-size: 0.85rem;" onchange="window.handleRankEstimatorInput('stream', this.value)">
                ${["تجربی","ریاضی","انسانی","هنر","زبان"].map(d=>`<option value="${d}" ${d===o?"selected":""}>${d}</option>`).join("")}
              </select>
            </div>

            <div class="input-group">
              <label class="input-label" style="font-size: 0.78rem;">سهمیه منطقه</label>
              <select class="form-select" style="font-size: 0.85rem;" onchange="window.handleRankEstimatorInput('region', this.value)">
                ${["منطقه ۱","منطقه ۲","منطقه ۳","ایثارگران"].map(d=>`<option value="${d}" ${d===e?"selected":""}>${d}</option>`).join("")}
              </select>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 8px;">
            <div class="input-group">
              <label class="input-label" style="font-size: 0.78rem;">تراز یا درصد آزمون کنکور (۵۰٪)</label>
              <input type="number" min="0" max="14000" value="${t}" class="form-input" style="text-align: center; font-weight: bold; font-family: 'Outfit';"
                placeholder="مثلاً: 8800 یا 65"
                oninput="window.handleRankEstimatorInput('konkurScore', this.value)" />
            </div>

            <div class="input-group">
              <label class="input-label" style="font-size: 0.78rem;">تراز یا معدل سوابق نهایی (۵۰٪)</label>
              <input type="number" min="0" max="14000" step="0.1" value="${n}" class="form-input" style="text-align: center; font-weight: bold; font-family: 'Outfit';"
                placeholder="مثلاً: 9000 یا 19.5"
                oninput="window.handleRankEstimatorInput('finalScore', this.value)" />
            </div>
          </div>
          <div style="font-size: 0.7rem; color: #8e8e9c; margin-bottom: 14px; text-align: center;">
            (می‌توانید تراز، درصد یا معدل کتبی از ۲۰ را مستقیماً وارد کنید)
          </div>

          <!-- Estimated Traz & Distinct Rank Result Box -->
          <div id="rank-estimator-result-card" style="background: rgba(31, 32, 41, 0.9); border: 1.5px solid ${r.badgeColor}; border-radius: 20px; padding: 16px; margin-bottom: 14px; transition: border-color 0.2s ease;">
            
            <!-- Distinct Line 1: Zone / Quota Rank -->
            <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span id="rank-estimator-quota-label" style="font-size: 0.82rem; color: #cbd5e1; font-weight: 700;">🎯 رتبه تخمینی در سهمیه ${e}:</span>
              <strong id="rank-estimator-quota-display" style="font-size: 1.25rem; font-weight: 900; color: ${r.badgeColor}; font-family: 'Outfit'; transition: color 0.2s ease;">
                ${ne(r.quotaRankDisplay)}
              </strong>
            </div>

            <!-- Distinct Line 2: All-Country Rank -->
            <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
              <span style="font-size: 0.82rem; color: #cbd5e1; font-weight: 700;">🌍 رتبه تخمینی کشوری:</span>
              <strong id="rank-estimator-country-display" style="font-size: 1.25rem; font-weight: 900; color: #38bdf8; font-family: 'Outfit';">
                ${ne(r.countryRankText)}
              </strong>
            </div>

            <div style="display: flex; justify-content: center; align-items: center; gap: 8px; flex-wrap: wrap; font-size: 0.78rem; font-weight: bold; color: #e4e4e7; margin-top: 8px; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 8px;">
              <span>تراز کل کنکور و نهایی:</span>
              <strong id="rank-estimator-total-tazar" style="color: #fbbf24; font-size: 0.95rem; font-family: 'Outfit';">${ne(r.weightedTotalTazar)}</strong>
              <span id="rank-estimator-sub-tazars" style="font-size: 0.72rem; color: #8e8e9c;">(کنکور: ${ne(r.konkurTazar)} • نهایی: ${ne(r.finalExamTazar)})</span>
            </div>

            <div style="font-size: 0.75rem; color: #a1a1aa; margin-top: 10px; background: rgba(255,255,255,0.04); padding: 7px 12px; border-radius: 10px; text-align: center;">
              🎯 پیش‌بینی قبولی: <strong id="rank-estimator-target-tier" style="color: #ffffff;">${r.targetTier}</strong>
            </div>
          </div>
        </div>

        <button onclick="window.appState.activeModal = null; window.renderApp();" class="btn-primary" style="width: 100%; background: #fbbf24; border: none; padding: 12px; border-radius: 14px; font-weight: 800; color: #000; cursor: pointer;">
          متوجه شدم
        </button>
      </div>
      </div>
    </div>
  `}function St(){return vt()}function kt(){try{var o=null;try{o=document.getElementById("modal-konkur-estimator")||document.getElementById("modal-rank-estimator")}catch{o=null}if(!o)return;try{var e=o.querySelectorAll("select");e.forEach(function(n,a){try{if(n.dataset&&n.dataset.boundKonkur)return;n.dataset&&(n.dataset.boundKonkur="1"),n.addEventListener("change",function(){try{var i=a===0?"stream":"region";try{var r=n.options&&n.selectedIndex>=0?n.options[n.selectedIndex]:null,d=r&&(r.text||r.value)||"";d.indexOf("منطقه")>=0||d.indexOf("ایثار")>=0?i="region":i="stream",a===1&&(i="region"),a===0&&(i="stream")}catch{}typeof window.handleRankEstimatorInput=="function"?window.handleRankEstimatorInput(i,n.value):typeof window.updateRankEstimation=="function"&&window.updateRankEstimation()}catch{}})}catch{}})}catch{}try{var t=o.querySelectorAll('input[type="number"]');t.forEach(function(n,a){try{if(n.dataset&&n.dataset.boundKonkur)return;n.dataset&&(n.dataset.boundKonkur="1"),n.addEventListener("input",function(){try{var i=a===0?"konkurScore":"finalScore";typeof window.handleRankEstimatorInput=="function"?window.handleRankEstimatorInput(i,n.value):typeof window.updateRankEstimation=="function"&&window.updateRankEstimation()}catch{}})}catch{}})}catch{}}catch{}}if(typeof window<"u"){try{window.bindKonkurEstimatorLiveHandlers=kt}catch{}try{window.renderKonkurEstimatorModal=St}catch{}}function nn(){window.sleepSchedulerState=window.sleepSchedulerState||{mode:"wake",hour:6,minute:30};const{mode:o,hour:e,minute:t}=window.sleepSchedulerState,n=parseInt(e)*60+parseInt(t),i=[6,5,4,3].map(r=>{const d=r*90+15;let s=0;o==="wake"?s=(n-d+1440)%1440:s=(n+d)%1440;const l=Math.floor(s/60),c=s%60,y=`${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}`,m=(r*1.5).toFixed(1);return{cycleCount:r,hoursCount:m,timeStr:y,isOptimal:r===5||r===6}});return`
    <div class="modal-overlay" id="modal-sleep-scheduler" style="backdrop-filter: blur(16px); display: flex;">
      <div class="modal-card" style="max-width: 500px; background: rgba(15, 23, 42, 0.96); border: 1.5px solid rgba(129, 140, 248, 0.4); border-radius: 24px; direction: rtl;">
        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
          <div class="modal-title" style="color: #818cf8; font-weight: 800; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
            🌙 برنامه‌ریزی و تنظیم خواب سالم (REM)
          </div>
          <button class="btn-close" onclick="window.appState.activeModal = null; window.renderApp();" style="background: none; border: none; color: #a1a1aa; font-size: 1.2rem; cursor: pointer;">✕</button>
        </div>

        <div style="margin: 16px 0;">
          <div style="display: flex; gap: 8px; margin-bottom: 14px; background: rgba(255,255,255,0.04); padding: 4px; border-radius: 14px;">
            <button onclick="window.sleepSchedulerState.mode = 'wake'; window.renderApp();"
              style="flex: 1; padding: 8px; font-weight: 800; font-size: 0.78rem; border-radius: 10px; border: none; cursor: pointer; background: ${o==="wake"?"#818cf8":"transparent"}; color: ${o==="wake"?"#000":"#a1a1aa"};">
              ⏰ می‌خواهم فلان ساعت بیدار شوم
            </button>
            <button onclick="window.sleepSchedulerState.mode = 'bed'; window.renderApp();"
              style="flex: 1; padding: 8px; font-weight: 800; font-size: 0.78rem; border-radius: 10px; border: none; cursor: pointer; background: ${o==="bed"?"#818cf8":"transparent"}; color: ${o==="bed"?"#000":"#a1a1aa"};">
              🛌 در این ساعت می‌خوابم
            </button>
          </div>

          <div style="display: flex; justify-content: center; align-items: center; gap: 10px; margin-bottom: 16px;">
            <span style="font-size: 0.82rem; font-weight: bold; color: #e4e4e7;">ساعت هدف:</span>
            <input type="number" min="0" max="23" value="${e}" class="form-input" style="width: 70px; text-align: center; font-size: 1.1rem; font-weight: bold; font-family: 'Outfit';"
              onchange="window.sleepSchedulerState.hour = this.value; window.renderApp();" />
            <span style="font-weight: bold;">:</span>
            <input type="number" min="0" max="59" value="${t}" class="form-input" style="width: 70px; text-align: center; font-size: 1.1rem; font-weight: bold; font-family: 'Outfit';"
              onchange="window.sleepSchedulerState.minute = this.value; window.renderApp();" />
          </div>

          <div style="font-size: 0.8rem; font-weight: bold; color: #cbd5e1; margin-bottom: 8px;">
            ${o==="wake"?"ساعات پیشنهادی برای به خواب رفتن:":"ساعات پیشنهادی برای بیدار شدن با نشاط:"}
          </div>

          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 14px;">
            ${i.map(r=>`
              <div style="background: ${r.isOptimal?"rgba(129, 140, 248, 0.15)":"rgba(255,255,255,0.03)"}; border: 1.5px solid ${r.isOptimal?"#818cf8":"rgba(255,255,255,0.08)"}; border-radius: 16px; padding: 12px; text-align: center;">
                <div style="font-size: 1.4rem; font-weight: 900; color: ${r.isOptimal?"#818cf8":"#ffffff"}; font-family: 'Outfit';">
                  ${ne(r.timeStr)}
                </div>
                <div style="font-size: 0.72rem; color: #a1a1aa; font-weight: bold; margin-top: 2px;">
                  ${ne(r.cycleCount)} چرخه (${ne(r.hoursCount)} ساعت)
                </div>
                ${r.isOptimal?'<div style="font-size: 0.65rem; color: #818cf8; font-weight: 900; margin-top: 4px;">🌟 زمان طلایی برای کنکوری‌ها</div>':""}
              </div>
            `).join("")}
          </div>
        </div>

        <button onclick="window.appState.activeModal = null; window.renderApp();" class="btn-primary" style="width: 100%; background: #818cf8; border: none; padding: 12px; border-radius: 14px; font-weight: 800; color: #000; cursor: pointer;">
          ثبت و بستن
        </button>
      </div>
    </div>
  `}const ut={12:[{name:"زیست‌شناسی / حسابان",coefficient:4},{name:"فیزیک",coefficient:3},{name:"شیمی",coefficient:3},{name:"ادبیات فارسی",coefficient:4},{name:"دین و زندگی",coefficient:3},{name:"زبان انگلیسی",coefficient:2},{name:"عربی، زبان قرآن",coefficient:2},{name:"سلامت و بهداشت",coefficient:1}],11:[{name:"درس اختصاصی ۱",coefficient:4},{name:"درس اختصاصی ۲",coefficient:3},{name:"درس اختصاصی ۳",coefficient:3},{name:"ادبیات فارسی",coefficient:4},{name:"دین و زندگی",coefficient:3},{name:"زبان انگلیسی",coefficient:2},{name:"عربی، زبان قرآن",coefficient:2},{name:"تاریخ / زمین‌شناسی",coefficient:1}],10:[{name:"درس اختصاصی ۱",coefficient:4},{name:"درس اختصاصی ۲",coefficient:3},{name:"درس اختصاصی ۳",coefficient:3},{name:"ادبیات فارسی",coefficient:4},{name:"دین و زندگی",coefficient:3},{name:"زبان انگلیسی",coefficient:2},{name:"عربی، زبان قرآن",coefficient:2},{name:"آمادگی دفاعی",coefficient:1}]};typeof window<"u"&&(window.handleGPAInputChange=function(o,e){window.gpaCalcState||(window.gpaCalcState={grade:"12",scores:{}}),window.gpaCalcState.scores||(window.gpaCalcState.scores={}),window.gpaCalcState.scores[o]=e,window.updateGPACalculation()},window.handleGPAGradeChange=function(o){window.gpaCalcState||(window.gpaCalcState={grade:"12",scores:{}}),window.gpaCalcState.grade=o,window.renderApp&&window.renderApp()},window.updateGPACalculation=function(){const o=window.gpaCalcState||{grade:"12",scores:{}},e=o.grade||"12",t=o.scores||{},n=ut[e]||ut[12];let a=0,i=0;n.forEach(u=>{const b=t[u.name],g=b!=null&&b!==""?parseFloat(b):20,f=isNaN(g)?0:Math.max(0,Math.min(20,g)),x=parseFloat(u.coefficient||u.weight)||1;a+=f*x,i+=x});const r=i>0?a/i:0,d=Number(r.toFixed(2)).toFixed(2);let s="#10b981",l="عالی 🟢";r<14?(s="#ef4444",l="نیازمند جبران 🔴"):r<17?(s="#fbbf24",l="مناسب 🟡"):(s="#10b981",l="عالی 🟢");const c=document.getElementById("gpa-result-display");c&&(c.textContent=`${ne(d)} از ۲۰`,c.style.color=s);const y=document.getElementById("gpa-status-badge");y&&(y.textContent=`وضعیت: ${l}`,y.style.color=s);const m=document.getElementById("gpa-card-box");m&&(m.style.borderColor=s)});function an(){window.gpaCalcState=window.gpaCalcState||{grade:"12",scores:{}};const{grade:o}=window.gpaCalcState,e=window.gpaCalcState.scores=window.gpaCalcState.scores||{},n=(ut[o]||ut[12]).map(c=>{const y=e[c.name],m=y!=null&&y!==""?parseFloat(y):20;return{name:c.name,grade:isNaN(m)?0:Math.max(0,Math.min(20,m)),coefficient:parseFloat(c.coefficient||c.weight)||1}});let a=0,i=0;n.forEach(c=>{const y=parseFloat(c.grade)||0,m=parseFloat(c.coefficient)||1;a+=y*m,i+=m});const r=i>0?a/i:0,d=Number(r.toFixed(2)).toFixed(2);let s="#10b981",l="عالی 🟢";return r<14?(s="#ef4444",l="نیازمند جبران 🔴"):r<17?(s="#fbbf24",l="مناسب 🟡"):(s="#10b981",l="عالی 🟢"),`
    <div class="modal-overlay" id="modal-gpa-calc" style="backdrop-filter: blur(16px); display: flex;">
      <div class="modal-card" style="max-width: 520px; background: rgba(15, 23, 42, 0.96); border: 1.5px solid rgba(52, 211, 153, 0.4); border-radius: 24px; direction: rtl;">
        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
          <div class="modal-title" style="color: #34d399; font-weight: 800; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
            📊 محاسبه دقیق معدل امتحانات نهایی
          </div>
          <button class="btn-close" onclick="window.appState.activeModal = null; window.renderApp();" style="background: none; border: none; color: #a1a1aa; font-size: 1.2rem; cursor: pointer;">✕</button>
        </div>

        <div style="margin: 16px 0;">
          <div style="display: flex; gap: 8px; margin-bottom: 14px; background: rgba(255,255,255,0.04); padding: 4px; border-radius: 14px;">
            ${["12","11","10"].map(c=>`
              <button onclick="window.handleGPAGradeChange('${c}')"
                style="flex: 1; padding: 8px; font-weight: 800; font-size: 0.78rem; border-radius: 10px; border: none; cursor: pointer; background: ${o===c?"#34d399":"transparent"}; color: ${o===c?"#000":"#a1a1aa"};">
                پایه ${c==="12"?"دوازدهم":c==="11"?"یازدهم":"دهم"}
              </button>
            `).join("")}
          </div>

          <div style="max-height: 240px; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px; padding-left: 4px;">
            ${n.map(c=>`
                <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.03); padding: 8px 12px; border-radius: 12px;">
                  <div>
                    <strong style="font-size: 0.85rem; color: #e4e4e7;">${c.name}</strong>
                    <span style="font-size: 0.7rem; color: #a1a1aa; margin-right: 6px;">(ضریب ${ne(c.coefficient)})</span>
                  </div>
                  <input type="number" min="0" max="20" step="0.25" value="${c.grade}" class="form-input" style="width: 80px; text-align: center; font-weight: bold; font-family: 'Outfit';"
                    oninput="window.handleGPAInputChange('${c.name}', this.value)" />
                </div>
              `).join("")}
          </div>

          <div id="gpa-card-box" style="background: rgba(31, 32, 41, 0.9); border: 1.5px solid ${s}; border-radius: 20px; padding: 16px; text-align: center; transition: border-color 0.2s ease;">
            <div style="font-size: 0.78rem; color: #a1a1aa; font-weight: bold;">معدل کل کتبی نهایی (وزنی)</div>
            <div id="gpa-result-display" style="font-size: 2.3rem; font-weight: 900; color: ${s}; font-family: 'Outfit'; margin: 2px 0; transition: color 0.2s ease;">
              ${ne(d)} از ۲۰
            </div>
            <div id="gpa-status-badge" style="font-size: 0.8rem; font-weight: bold; color: ${s}; transition: color 0.2s ease;">
              وضعیت: ${l}
            </div>
          </div>
        </div>

        <button onclick="window.appState.activeModal = null; window.renderApp();" class="btn-primary" style="width: 100%; background: #34d399; border: none; padding: 12px; border-radius: 14px; font-weight: 800; color: #000; cursor: pointer;">
          ذخیره و بستن
        </button>
      </div>
    </div>
  `}typeof window<"u"&&(window.handleExamBoxInput=function(o,e){window.examBoxState=window.examBoxState||{days:14,chapters:21,rounds:2},window.examBoxState[o]=e,window.updateExamBoxCalculation()},window.updateExamBoxCalculation=function(){const o=window.examBoxState||{days:14,chapters:21,rounds:2},e=Math.max(1,parseInt(o.days)||1),t=Math.max(1,parseInt(o.chapters)||1),n=Math.max(1,parseInt(o.rounds)||1),a=t*n,i=(a/e).toFixed(1),r=Math.max(1,Math.floor(e*.6)),d=Math.max(1,Math.floor(e*.25)),s=Math.max(1,e-r-d),l=document.getElementById("exam-box-pace-display");l&&(l.textContent=`${ne(i)} فصل در روز`);const c=document.getElementById("exam-box-summary-display");c&&(c.textContent=`(مجموع ${ne(a)} واحد مطالعه در ${ne(e)} روز)`);const y=document.getElementById("exam-box-phase1-display");y&&(y.textContent=`${ne(r)} روز اول`);const m=document.getElementById("exam-box-phase2-display");m&&(m.textContent=`${ne(d)} روز بعدی`);const u=document.getElementById("exam-box-phase3-display");u&&(u.textContent=`${ne(s)} روز پایانی`)});function rn(){window.examBoxState=window.examBoxState||{days:14,chapters:21,rounds:2};const{days:o,chapters:e,rounds:t}=window.examBoxState,n=Math.max(1,parseInt(o)||1),a=Math.max(1,parseInt(e)||1),i=Math.max(1,parseInt(t)||1),r=a*i,d=(r/n).toFixed(1),s=Math.max(1,Math.floor(n*.6)),l=Math.max(1,Math.floor(n*.25)),c=Math.max(1,n-s-l);return`
    <div class="modal-overlay" id="modal-exam-box" style="backdrop-filter: blur(16px); display: flex;">
      <div class="modal-card" style="max-width: 500px; background: rgba(15, 23, 42, 0.96); border: 1.5px solid rgba(56, 189, 248, 0.4); border-radius: 24px; direction: rtl;">
        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px; display: flex; justify-content: space-between; align-items: center;">
          <div class="modal-title" style="color: #38bdf8; font-weight: 800; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
            📝 جعبه ابزار و برنامه‌ریز هوشمند امتحانات
          </div>
          <button class="btn-close" onclick="window.appState.activeModal = null; window.renderApp();" style="background: none; border: none; color: #a1a1aa; font-size: 1.2rem; cursor: pointer;">✕</button>
        </div>

        <div style="margin: 16px 0;">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 16px;">
            <div class="input-group">
              <label class="input-label" style="font-size: 0.75rem;">روزهای باقی‌مانده</label>
              <input type="number" min="1" value="${n}" class="form-input" style="text-align: center; font-weight: bold; font-family: 'Outfit';"
                oninput="window.handleExamBoxInput('days', this.value)" />
            </div>

            <div class="input-group">
              <label class="input-label" style="font-size: 0.75rem;">تعداد فصل‌ها / مباحث</label>
              <input type="number" min="1" value="${a}" class="form-input" style="text-align: center; font-weight: bold; font-family: 'Outfit';"
                oninput="window.handleExamBoxInput('chapters', this.value)" />
            </div>

            <div class="input-group">
              <label class="input-label" style="font-size: 0.75rem;">دفعات مرور (دور)</label>
              <input type="number" min="1" max="5" value="${i}" class="form-input" style="text-align: center; font-weight: bold; font-family: 'Outfit';"
                oninput="window.handleExamBoxInput('rounds', this.value)" />
            </div>
          </div>

          <!-- Pace Output Box -->
          <div style="background: rgba(56, 189, 248, 0.12); border: 1.5px solid #38bdf8; border-radius: 20px; padding: 16px; text-align: center; margin-bottom: 14px;">
            <div style="font-size: 0.78rem; color: #a1a1aa; font-weight: bold;">سرعت مطالعه پیشنهادی برای موفقیت کامل</div>
            <div id="exam-box-pace-display" style="font-size: 2.2rem; font-weight: 900; color: #38bdf8; font-family: 'Outfit'; margin: 4px 0;">
              ${ne(d)} فصل در روز
            </div>
            <div id="exam-box-summary-display" style="font-size: 0.74rem; color: #7dd3fc; font-weight: bold;">
              (مجموع ${ne(r)} واحد مطالعه در ${ne(n)} روز)
            </div>
          </div>

          <!-- 3 Phase Timeline -->
          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 12px; font-size: 0.78rem; display: flex; flex-direction: column; gap: 8px;">
            <div style="font-weight: bold; color: #ffffff;">📅 فازبندی پیشنهادی زمان‌بندی:</div>
            <div style="display: flex; justify-content: space-between; color: #34d399;">
              <span>فاز ۱ (یادگیری عمیق و خلاصه‌نویسی):</span>
              <strong id="exam-box-phase1-display">${ne(s)} روز اول</strong>
            </div>
            <div style="display: flex; justify-content: space-between; color: #fbbf24;">
              <span>فاز ۲ (حل نمونه‌سوالات و تست‌زنی):</span>
              <strong id="exam-box-phase2-display">${ne(l)} روز بعدی</strong>
            </div>
            <div style="display: flex; justify-content: space-between; color: #c084fc;">
              <span>فاز ۳ (جمع‌بندی و تورق سریع شب امتحان):</span>
              <strong id="exam-box-phase3-display">${ne(c)} روز پایانی</strong>
            </div>
          </div>
        </div>

        <button onclick="window.appState.activeModal = null; window.renderApp();" class="btn-primary" style="width: 100%; background: #38bdf8; border: none; padding: 12px; border-radius: 14px; font-weight: 800; color: #000; cursor: pointer;">
          متوجه شدم
        </button>
      </div>
    </div>
  `}class uo{constructor(){this.ctx=null,this.activeSoundType=null,this.isLoadingSound=null,this.isMuted=!1,this.volume=.5,this.proceduralNodes=null,this.currentBlobUrl=null,typeof Audio<"u"?(this.audioElement=new Audio,this.audioElement.loop=!0,this.audioElement.preload="none",this.audioElement.onerror=e=>{var t;console.warn("Audio Playback CDN Warning for:",(t=this.audioElement)==null?void 0:t.src,"Falling back to Web Audio Synth..."),this.isLoadingSound=null,this.activeSoundType&&this.startProceduralSynth(this.activeSoundType),window.renderApp&&window.renderApp()}):this.audioElement=null}initContext(){try{if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}catch(e){console.warn("AudioContext init error:",e)}}setVolume(e){if(this.volume=parseFloat(e)||.5,this.audioElement&&(this.audioElement.volume=this.volume),this.proceduralNodes&&this.proceduralNodes.masterGain)try{this.proceduralNodes.masterGain.gain.setValueAtTime(this.volume*.4,this.ctx?this.ctx.currentTime:0)}catch{}}stopProceduralSynth(){if(this.proceduralNodes){try{this.proceduralNodes.sources&&this.proceduralNodes.sources.forEach(e=>{try{e.stop(),e.disconnect()}catch{}}),this.proceduralNodes.interval&&clearInterval(this.proceduralNodes.interval)}catch{}this.proceduralNodes=null}}stopSound(){if(this.stopProceduralSynth(),this.audioElement&&(this.audioElement.pause(),this.audioElement.removeAttribute("src"),this.audioElement.load()),this.currentBlobUrl){try{URL.revokeObjectURL(this.currentBlobUrl)}catch{}this.currentBlobUrl=null}this.activeSoundType=null,this.isLoadingSound=null}startProceduralSynth(e){try{if(this.initContext(),!this.ctx)return;this.stopProceduralSynth();const t=2*this.ctx.sampleRate,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),a=n.getChannelData(0);let i=0;for(let l=0;l<t;l++){const c=Math.random()*2-1;a[l]=(i+.02*c)/1.02,i=a[l],a[l]*=3.5}const r=this.ctx.createBufferSource();r.buffer=n,r.loop=!0;const d=this.ctx.createGain();d.gain.setValueAtTime(this.volume*.35,this.ctx.currentTime);const s=this.ctx.createBiquadFilter();if(e.includes("brown"))s.type="lowpass",s.frequency.setValueAtTime(320,this.ctx.currentTime);else if(e.includes("rain")||e.includes("thunder"))s.type="lowpass",s.frequency.setValueAtTime(1100,this.ctx.currentTime);else if(e.includes("ocean")||e.includes("wave")){s.type="bandpass",s.frequency.setValueAtTime(400,this.ctx.currentTime),s.Q.setValueAtTime(1,this.ctx.currentTime);const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.frequency.setValueAtTime(.12,this.ctx.currentTime),c.gain.setValueAtTime(300,this.ctx.currentTime),l.connect(c),c.connect(s.frequency),l.start()}else e.includes("river")||e.includes("forest")?(s.type="bandpass",s.frequency.setValueAtTime(800,this.ctx.currentTime)):(s.type="lowpass",s.frequency.setValueAtTime(750,this.ctx.currentTime));r.connect(s),s.connect(d),d.connect(this.ctx.destination),r.start(),this.proceduralNodes={masterGain:d,sources:[r]}}catch(t){console.warn("Procedural synth error:",t)}}async playAmbient(e,t){if(this.activeSoundType===e)return this.stopSound(),!1;if(this.stopSound(),this.initContext(),t){this.isLoadingSound=e,this.activeSoundType=e,t.startsWith("blob:")&&(this.currentBlobUrl=t),console.log("Now playing:",e,t),this.audioElement.src=t,this.audioElement.volume=this.volume,this.audioElement.loop=!0,this.audioElement.preload="none";try{return await this.audioElement.play(),this.isLoadingSound=null,!0}catch(n){if(n.name!=="AbortError")return console.warn("Audio play promise failed, using Web Audio Synth:",n),this.isLoadingSound=null,this.startProceduralSynth(e),!0}}else return this.activeSoundType=e,this.startProceduralSynth(e),!0;return!1}playPomodoroAlarm(){try{if(this.initContext(),!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});const e=this.ctx.currentTime;[{start:0,freq:587.33,dur:.32,gain:.28},{start:.22,freq:739.99,dur:.32,gain:.32},{start:.45,freq:880,dur:.48,gain:.36},{start:1,freq:587.33,dur:.32,gain:.28},{start:1.22,freq:739.99,dur:.32,gain:.32},{start:1.45,freq:880,dur:.48,gain:.36},{start:2,freq:659.25,dur:.45,gain:.3},{start:2.22,freq:880,dur:.78,gain:.38}].forEach(n=>{const a=this.ctx.createOscillator(),i=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(n.freq,e+n.start);const r=e+n.start,d=r+n.dur;i.gain.setValueAtTime(1e-4,r),i.gain.linearRampToValueAtTime(n.gain,r+.03),i.gain.exponentialRampToValueAtTime(1e-4,d),a.connect(i),i.connect(this.ctx.destination),a.start(r),a.stop(d)})}catch(e){console.warn("Pomodoro Web Audio playback error:",e)}}}const Ee=new uo;function go(){Ee.playPomodoroAlarm()}function fo(){if(typeof window<"u"&&"Notification"in window&&Notification.permission==="default")try{Notification.requestPermission().catch(()=>{})}catch{}}function yo(o=1){if(typeof navigator<"u"&&typeof navigator.vibrate=="function")try{navigator.vibrate([300,150,300])}catch{}if(typeof window<"u"&&"Notification"in window&&Notification.permission==="granted"){const e=o===2,t=e?"⏰ پایان استراحت - پلنکس":"⏰ پایان پومودورو - پلنکس",a={body:e?"زمان استراحت شما به پایان رسید! آماده شروع یک پارت مطالعه باانرژی باشید.":"زمان پارت مطالعه شما به پایان رسید! وقت یک استراحت کوتاه است.",icon:"/logo-transparent.png",badge:"/logo-transparent.png",vibrate:[200,100,200],tag:"planex-pomodoro-finished",renotify:!0};try{new Notification(t,a)}catch{typeof navigator<"u"&&"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(r=>{r&&r.showNotification&&r.showNotification(t,a)}).catch(()=>{})}}}typeof window<"u"&&(window.playPomodoroAlarm=go,window.sendPomodoroNotification=yo,window.requestPomodoroNotificationPermission=fo);const Gt=[{id:"rain_window",title:"🌧️ باران ملایم و پنجره",category:"nature",url:"https://actions.google.com/sounds/v1/weather/rain_heavy.ogg"},{id:"deep_brown_noise",title:"🟤 نویز قهوه‌ای عمیق",category:"focus",url:null},{id:"ambient_piano",title:"🎹 پیانو امبینت بی‌کلام",category:"music",url:"https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=ambient-piano-11070.mp3"},{id:"lofi_study",title:"🎧 لو-فای ملایم مطالعه",category:"music",url:"https://stream.zeno.fm/f3wvbbqmdg8uv"},{id:"rain_soothing",title:"🌧️ باران ملایم و پنجره",category:"nature",url:"https://actions.google.com/sounds/v1/weather/rain_heavy.ogg"},{id:"rain_gentle",title:"🌧️ باران ملایم و پنجره",category:"nature",url:"https://actions.google.com/sounds/v1/weather/rain_heavy.ogg"},{id:"thunderstorm",title:"⚡ رعد و برق",category:"nature",url:"https://actions.google.com/sounds/v1/weather/rain_heavy.ogg"},{id:"brown_noise",title:"🟤 نویز قهوه‌ای عمیق",category:"focus",url:null},{id:"river_stream",title:"🏞️ جریان آب رودخانه",category:"nature",url:"https://actions.google.com/sounds/v1/water/stream_water.ogg"},{id:"coffee_shop",title:"☕ کافه شلوغ",category:"ambient",url:"https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg"},{id:"forest_birds",title:"🌲 جنگل و پرندگان",category:"nature",url:"https://actions.google.com/sounds/v1/environments/forest_birds.ogg"},{id:"ocean_waves",title:"🌊 امواج دریا",category:"nature",url:"https://actions.google.com/sounds/v1/water/waves_crashing.ogg"},{id:"lofi_study_fassounds",title:"🎧 لو-فای ملایم مطالعه",category:"music",url:"https://stream.zeno.fm/f3wvbbqmdg8uv"},{id:"lofi_jazz_mountain",title:"🎷 لوفای جاز",category:"music",url:"https://stream.zeno.fm/f3wvbbqmdg8uv"}],mo="planex_audio_db",bo=1,Ve="custom_tracks";typeof navigator<"u"&&navigator.storage&&navigator.storage.persist&&navigator.storage.persist().then(o=>{o&&console.log("[audioDb] Persistent storage granted by browser.")}).catch(()=>{});function wt(){return new Promise((o,e)=>{if(typeof indexedDB>"u"){e(new Error("IndexedDB is not supported in this browser."));return}const t=indexedDB.open(mo,bo);t.onupgradeneeded=n=>{const a=n.target.result;a.objectStoreNames.contains(Ve)||a.createObjectStore(Ve,{keyPath:"id"})},t.onsuccess=n=>{o(n.target.result)},t.onerror=n=>{e(n.target.error||new Error("Failed to open audio database."))}})}const Ke={async saveTrack(o,e=""){if(!o)throw new Error("فایل صوتی انتخاب نشده است.");const t=await wt(),n=e||o.name||"آهنگ جدید",i={id:"custom_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),name:n,fileName:o.name||"audio.mp3",fileType:o.type||"audio/mpeg",blob:o,createdAt:Date.now()};return new Promise((r,d)=>{const c=t.transaction(Ve,"readwrite").objectStore(Ve).put(i);c.onsuccess=()=>r(i),c.onerror=y=>d(y.target.error||new Error("خطا در ذخیره فایل صوتی در دیتابیس"))})},async getTracks(){try{const o=await wt();return new Promise((e,t)=>{const i=o.transaction(Ve,"readonly").objectStore(Ve).getAll();i.onsuccess=()=>e(i.result||[]),i.onerror=r=>t(r.target.error||new Error("خطا در دریافت لیست آهنگ‌ها"))})}catch(o){return console.warn("[audioDb] getTracks failed:",o),[]}},async deleteTrack(o){if(!o)return!1;const e=await wt();return new Promise((t,n)=>{const r=e.transaction(Ve,"readwrite").objectStore(Ve).delete(o);r.onsuccess=()=>t(!0),r.onerror=d=>n(d.target.error||new Error("خطا در حذف آهنگ"))})}};typeof window<"u"&&(window.audioDb=Ke);const xo=[{id:"rain_window",label:"باران ملایم و پنجره",icon:"🌧️",category:"nature"},{id:"deep_brown_noise",label:"نویز قهوه‌ای عمیق",icon:"🟤",category:"focus"},{id:"ambient_piano",label:"پیانو امبینت بی‌کلام",icon:"🎹",category:"music"},{id:"lofi_study",label:"لو-فای ملایم مطالعه",icon:"🎧",category:"music"}];typeof window<"u"&&!window._customAudioTracksLoaded&&(window._customAudioTracksLoaded=!0,window.customAudioTracksList=[],Ke.getTracks().then(o=>{window.customAudioTracksList=o||[],window.renderApp&&window.renderApp()}).catch(()=>{}));function Ut(o={}){const e=Ee.activeSoundType||null,t=!!e,n=Ee.volume!==void 0?Math.round(Ee.volume*100):50,a=Gt.find(s=>s.id===e),i=window.customAudioTracksList||[],r=i.find(s=>s.id===e),d=r?`آهنگ شخصی: «${r.name}»`:a?`در حال پخش: «${a.title}»`:"افزایش تمرکز با لوفای، پیانو و آهنگ‌های دلخواه";return`
    <div class="ambient-audio-player-widget" style="background: rgba(22, 23, 29, 0.85); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 18px; padding: 14px 16px; margin: 12px 0; direction: rtl; backdrop-filter: blur(12px); box-sizing: border-box; width: 100%;">
      
      <!-- Widget Header -->
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
        <div style="display: flex; align-items: center; gap: 8px; overflow: hidden;">
          <span style="font-size: 1.15rem; animation: ${t?"spin 10s linear infinite":"none"}; flex-shrink: 0;">🎵</span>
          <div style="overflow: hidden;">
            <strong style="font-size: 0.86rem; color: #ffffff; font-weight: 800; display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
              موسیقی و صدای محیط (Focus Audio)
            </strong>
            <span style="font-size: 0.7rem; color: ${t?"#34d399":"#8e8e9c"}; display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
              ${d}
            </span>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
          ${t?`
            <button type="button" id="btn-toggle-ambient-play" onclick="if(window.toggleAmbientAudio) window.toggleAmbientAudio();" style="background: rgba(239, 68, 68, 0.2); border: 1px solid rgba(239, 68, 68, 0.5); color: #f87171; padding: 6px 14px; border-radius: 20px; display: flex; align-items: center; gap: 6px; font-size: 0.8rem; font-weight: 800; cursor: pointer; transition: all 0.15s ease; box-shadow: 0 0 10px rgba(239, 68, 68, 0.2);" title="توقف پخش">
              <span>⏸️</span>
              <span>توقف</span>
            </button>
          `:`
            <button type="button" id="btn-toggle-ambient-play" onclick="if(window.toggleAmbientAudio) window.toggleAmbientAudio('rain_window');" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%); border: none; color: white; padding: 6px 14px; border-radius: 20px; display: flex; align-items: center; gap: 6px; font-size: 0.8rem; font-weight: 800; cursor: pointer; transition: all 0.15s ease; box-shadow: 0 0 12px rgba(16, 185, 129, 0.4);" title="پخش صدای تمرکز">
              <span>▶️</span>
              <span>پخش</span>
            </button>
          `}
        </div>
      </div>

      <!-- Preset Sound Mode Chips Grid -->
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 14px; box-sizing: border-box; width: 100%;">
        ${xo.map(s=>{const l=e===s.id||s.id==="rain_window"&&(e==="rain_soothing"||e==="rain_gentle")||s.id==="deep_brown_noise"&&e==="brown_noise"||s.id==="lofi_study"&&e==="lofi_study_fassounds";return`
            <button type="button" 
                    class="btn-ambient-sound-mode ${l?"active":""}" 
                    onclick="if(window.selectAmbientSound) window.selectAmbientSound('${s.id}');"
                    style="padding: 10px 12px; border-radius: 14px; border: ${l?"2px solid #10b981":"1.5px solid rgba(255, 255, 255, 0.08)"}; background: ${l?"rgba(16, 185, 129, 0.22)":"#1f2029"}; color: ${l?"#34d399":"#e4e4e7"}; font-size: 0.8rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.2s ease; width: 100%; box-sizing: border-box; justify-content: flex-start; text-align: right; box-shadow: ${l?"0 0 12px rgba(16, 185, 129, 0.35)":"none"};">
              <span style="font-size: 1.1rem; flex-shrink: 0;">${s.icon}</span>
              <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1;">${s.label}</span>
              ${l?'<span style="font-size: 0.75rem; flex-shrink: 0; color: #10b981;">🔊</span>':""}
            </button>
          `}).join("")}
      </div>

      <!-- Custom Audio Upload Section -->
      <div style="background: rgba(0,0,0,0.2); border: 1px dashed rgba(255,255,255,0.12); border-radius: 14px; padding: 12px; margin-bottom: 12px;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
          <span style="font-size: 0.78rem; font-weight: 800; color: #c4b5fd; display: flex; align-items: center; gap: 6px;">
            <span>🎼</span><span>آهنگ‌های دلخواه شما (IndexedDB)</span>
          </span>
          <button type="button" onclick="document.getElementById('input-custom-audio-upload').click();" style="padding: 5px 12px; font-size: 0.74rem; font-weight: 800; background: rgba(124, 58, 237, 0.2); color: #c4b5fd; border: 1px solid rgba(124, 58, 237, 0.4); border-radius: 10px; cursor: pointer; display: flex; align-items: center; gap: 4px; transition: all 0.15s ease;">
            <span>➕</span><span>افزودن آهنگ دلخواه</span>
          </button>
          <input type="file" id="input-custom-audio-upload" accept="audio/*" style="display: none;" onchange="window.handleCustomAudioUpload(event)" />
        </div>

        ${i.length===0?`
          <div style="font-size: 0.72rem; color: #8e8e9c; text-align: center; padding: 6px 0;">
            هنوز آهنگ دلخواهی اضافه نشده است. با دکمه بالا فایل صوتی (MP3/WAV) اضافه کنید.
          </div>
        `:`
          <div style="display: flex; flex-direction: column; gap: 6px; max-height: 160px; overflow-y: auto; scrollbar-width: thin;">
            ${i.map(s=>{const l=e===s.id;return`
                <div style="display: flex; align-items: center; justify-content: space-between; background: ${l?"rgba(16, 185, 129, 0.2)":"#1f2029"}; border: 1px solid ${l?"#10b981":"rgba(255,255,255,0.06)"}; padding: 6px 10px; border-radius: 10px; gap: 8px;">
                  <div style="display: flex; align-items: center; gap: 6px; overflow: hidden; flex: 1;">
                    <span style="font-size: 0.85rem;">🎵</span>
                    <span style="font-size: 0.76rem; font-weight: 700; color: ${l?"#34d399":"#e4e4e7"}; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${s.name}</span>
                  </div>

                  <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                    <button type="button" onclick="window.playCustomAudioTrack('${s.id}')" style="background: ${l?"#ef4444":"#10b981"}; color: white; border: none; padding: 4px 10px; border-radius: 8px; font-size: 0.72rem; font-weight: 800; cursor: pointer;">
                      ${l?"⏸️ توقف":"▶️ پخش"}
                    </button>
                    <button type="button" onclick="window.deleteCustomAudioTrack('${s.id}')" style="background: rgba(239,68,68,0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.3); padding: 4px 8px; border-radius: 8px; font-size: 0.72rem; cursor: pointer;" title="حذف آهنگ">
                      🗑️
                    </button>
                  </div>
                </div>
              `}).join("")}
          </div>
        `}
      </div>

      <!-- Volume Slider Control -->
      <div style="display: flex; align-items: center; gap: 10px; background: rgba(0,0,0,0.25); padding: 8px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06); box-sizing: border-box; width: 100%;">
        <span style="font-size: 0.9rem; color: #a1a1aa;">🔊</span>
        <input type="range" 
               id="input-ambient-volume-slider" 
               min="0" 
               max="100" 
               value="${n}" 
               oninput="if(window.setAmbientVolume) window.setAmbientVolume(this.value);" 
               style="flex: 1; accent-color: #10b981; height: 4px; cursor: pointer;" />
        <span style="font-size: 0.75rem; font-weight: bold; color: #34d399; font-family: 'Outfit', sans-serif; min-width: 34px; text-align: left;">
          ${n}%
        </span>
      </div>

    </div>
  `}typeof window<"u"&&(window.selectAmbientSound=o=>{const e=Gt.find(t=>t.id===o);e&&Ee.playAmbient(e.id,e.url).then(()=>{window.renderApp&&window.renderApp()})},window.toggleAmbientAudio=(o="lofi_study")=>{Ee.activeSoundType?(Ee.stopSound(),window.renderApp&&window.renderApp()):window.selectAmbientSound(o)},window.setAmbientVolume=o=>{const e=parseFloat(o)/100;Ee.setVolume(e)},window.handleCustomAudioUpload=async o=>{var t,n;const e=(n=(t=o.target)==null?void 0:t.files)==null?void 0:n[0];if(e)try{const a=await Ke.saveTrack(e,e.name);window.customAudioTracksList=await Ke.getTracks(),window.showToast&&window.showToast(`آهنگ «${a.name}» با موفقیت ذخیره شد! 🎵`,"success"),window.renderApp&&window.renderApp()}catch(a){console.error("Custom audio upload error:",a),window.showToast&&window.showToast("خطا در ذخیره فایل صوتی در دیتابیس","error")}},window.playCustomAudioTrack=async o=>{if(Ee.activeSoundType===o){Ee.stopSound(),window.renderApp&&window.renderApp();return}const t=(window.customAudioTracksList||await Ke.getTracks()).find(n=>n.id===o);if(t&&t.blob){const n=URL.createObjectURL(t.blob);Ee.playAmbient(t.id,n).then(()=>{window.renderApp&&window.renderApp()})}else window.showToast&&window.showToast("فایل صوتی یافت نشد.","error")},window.deleteCustomAudioTrack=async o=>{Ee.activeSoundType===o&&Ee.stopSound(),await Ke.deleteTrack(o),window.customAudioTracksList=await Ke.getTracks(),window.showToast&&window.showToast("آهنگ با موفقیت حذف شد 🗑️","info"),window.renderApp&&window.renderApp()});const Mt=[{id:"یادگیری",label:"یادگیری",icon:"🧠",desc:"مطالعه درسنامه و مفهومی"},{id:"تست‌زنی",label:"تست‌زنی",icon:"🎯",desc:"حل تست آموزشی و زمان‌دار"},{id:"مرور",label:"مرور",icon:"🔄",desc:"مرور خلاصه، فلش‌کارت و یادداشت"},{id:"جمع‌بندی",label:"جمع‌بندی",icon:"📑",desc:"جمع‌بندی سرفصل و آزمون جامع"}];typeof window<"u"&&(window.closeQuickActivityModal=function(){try{const o=document.getElementById("modal-fab-activity-registration");o&&(o.style.display="none",o.classList.remove("active"))}catch(o){console.warn("[closeQuickActivityModal] DOM hide error:",o)}try{typeof window.closeFabActivityModal=="function"?window.closeFabActivityModal():window.appState&&(window.appState.activeModal=null,typeof window.renderApp=="function"&&window.renderApp())}catch(o){console.warn("[closeQuickActivityModal] state update error:",o)}},window.showLiveTimerSection=function(){try{var o=document.getElementById("section-live-timer");o&&(o.style.display="block");var e=document.getElementById("section-manual-log");e&&(e.style.display="none");try{var t=document.getElementById("fab-timer-section");t&&t!==o&&(t.style.display="block");var n=document.getElementById("fab-manual-section");n&&n!==e&&(n.style.display="none")}catch{}var a=document.getElementById("btn-mode-timer");a&&a.classList.add("active");var i=document.getElementById("btn-mode-manual");i&&i.classList.remove("active")}catch{}try{window.fabActivityState=window.fabActivityState||{},window.fabActivityState.activeTab="timer"}catch{}},window.showManualLogSection=function(){try{var o=document.getElementById("section-live-timer");o&&(o.style.display="none");var e=document.getElementById("section-manual-log");e&&(e.style.display="block");try{var t=document.getElementById("fab-timer-section");t&&t!==o&&(t.style.display="none");var n=document.getElementById("fab-manual-section");n&&n!==e&&(n.style.display="block")}catch{}var a=document.getElementById("btn-mode-timer");a&&a.classList.remove("active");var i=document.getElementById("btn-mode-manual");i&&i.classList.add("active")}catch{}try{window.fabActivityState=window.fabActivityState||{},window.fabActivityState.activeTab="manual"}catch{}},window.switchFabActivityTab=function(o,e){try{e&&e.preventDefault&&e.preventDefault()}catch{}try{e&&e.stopPropagation&&e.stopPropagation()}catch{}try{const t=o==="manual"?"manual":"timer";if(t==="manual")try{window.showManualLogSection()}catch{}else try{window.showLiveTimerSection()}catch{}try{const n=document.getElementById("fab-timer-section"),a=document.getElementById("fab-manual-section");n&&(n.style.display=t==="timer"?"block":"none"),a&&(a.style.display=t==="manual"?"block":"none")}catch{}window.fabActivityState=window.fabActivityState||{},window.fabActivityState.activeTab=t}catch(t){console.warn("[switchFabActivityTab] error:",t)}},window._fabTabDelegationAttached||(window._fabTabDelegationAttached=!0,document.addEventListener("click",o=>{try{const e=o.target&&o.target.closest?o.target.closest(".btn-fab-modal-tab"):null;if(!e||!e.closest("#modal-fab-activity-registration"))return;const t=e.getAttribute("data-tab")||e.getAttribute("data-mode");(t==="timer"||t==="manual")&&(o.preventDefault(),o.stopPropagation(),window.switchFabActivityTab(t,o))}catch{}})));function sn(o={}){var u,b;const e=window.fabActivityState||{activeTab:"timer",timerType:"pomodoro",categoryCode:null,subject:"",studyType:"یادگیری",startTime:"08:00",endTime:"09:30",durationMins:90,testCorrect:0,testWrong:0,testUnanswered:0},t=g=>String(g).replace(/[0-9]/g,f=>"۰۱۲۳۴۵۶۷۸۹"[f]),n=(typeof p<"u"?p.getCategories():[])||[],a=n.filter(g=>Oe(g)),i=e.categoryCode||((u=a[0])==null?void 0:u.code)||((b=n[0])==null?void 0:b.code)||"ع-س",r=typeof p<"u"&&typeof p.getUniqueLoggedTopics=="function"?p.getUniqueLoggedTopics(i):[],s=((g,f)=>{try{const[x,w]=(g||"08:00").split(":").map(Number),[A,k]=(f||"09:30").split(":").map(Number);if(!isNaN(x)&&!isNaN(w)&&!isNaN(A)&&!isNaN(k)){let $=x*60+w,M=A*60+k;M<$&&(M+=24*60);const I=M-$;return I>0?I:60}}catch{}return 60})(e.startTime,e.endTime);e.durationMins=s;const l=Math.max(0,parseInt(e.testCorrect)||0),c=Math.max(0,parseInt(e.testWrong)||0),y=Math.max(0,parseInt(e.testUnanswered)||0),m=l+c+y;return`
    <div class="modal-overlay animate-fade-in" id="modal-fab-activity-registration" style="backdrop-filter: blur(18px); z-index: 100000; display: flex; align-items: center; justify-content: center; padding: 14px;">
      
      <!-- Backdrop -->
      <div class="modal-backdrop" data-close-modal="true" style="position: absolute; inset: 0; background: rgba(10, 11, 14, 0.88);" onclick="window.closeActiveModal ? window.closeActiveModal() : (window.closeQuickActivityModal && window.closeQuickActivityModal());"></div>

      <!-- Main Bottom-Sheet / Modal Card with comfortable max-height and bottom padding -->
      <div class="glass-panel animate-scale-up" style="position: relative; width: 100%; max-width: 540px; max-height: 90vh; overflow-y: auto; background: #16171d; border: 1.5px solid rgba(16, 185, 129, 0.35); border-radius: 24px; padding: 22px 22px 28px 22px; color: #fff; direction: rtl; box-shadow: 0 25px 60px rgba(0,0,0,0.85);">
        
        <!-- Header -->
        <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 14px; margin-bottom: 16px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 44px; height: 44px; border-radius: 14px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); display: flex; align-items: center; justify-content: center; font-size: 1.3rem; box-shadow: 0 0 16px rgba(16, 185, 129, 0.4);">
              ⚡
            </div>
            <div>
              <h2 style="margin: 0; font-size: 1.15rem; font-weight: 900; color: #e4e4e7;">
                ثبت سریع فعالیت و مطالعه
              </h2>
              <p style="margin: 3px 0 0 0; font-size: 0.76rem; color: var(--text-secondary);">
                شروع تایمر زنده یا ثبت مستقیم پارت مطالعه
              </p>
            </div>
          </div>
          
          <button type="button" id="btn-close-fab-modal" class="btn-close-modal" data-close-modal="true" onclick="window.closeActiveModal ? window.closeActiveModal() : (window.closeQuickActivityModal && window.closeQuickActivityModal());" style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); width: 36px; height: 36px; border-radius: 50%; color: #a1a1aa; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; transition: 0.15s;">✕</button>
        </div>

        <!-- 🌟 TAB BAR SWITCHER -->
        <div style="display: flex; gap: 8px; background: #1f2029; padding: 4px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); margin-bottom: 18px;">
          <button type="button" id="btn-mode-timer" data-mode="timer" onclick="window.showLiveTimerSection()" class="btn-fab-modal-tab mode-switch-btn ${e.activeTab==="timer"?"active":""}" data-tab="timer" style="flex: 1; padding: 11px 14px; border-radius: 12px; font-size: 0.88rem; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; border: 1px solid ${e.activeTab==="timer"?"#10b981":"transparent"}; background: ${e.activeTab==="timer"?"#10b981":"transparent"}; color: ${e.activeTab==="timer"?"#ffffff":"#a1a1aa"}; transition: all 0.2s ease;">
            <span style="font-size: 1.1rem;">⏱️</span>
            <span>تایمر زنده (پومودورو / کرنومتر)</span>
          </button>

          <button type="button" id="btn-mode-manual" data-mode="manual" onclick="window.showManualLogSection()" class="btn-fab-modal-tab mode-switch-btn ${e.activeTab==="manual"?"active":""}" data-tab="manual" style="flex: 1; padding: 11px 14px; border-radius: 12px; font-size: 0.88rem; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; border: 1px solid ${e.activeTab==="manual"?"#7c3aed":"transparent"}; background: ${e.activeTab==="manual"?"#7c3aed":"transparent"}; color: ${e.activeTab==="manual"?"#ffffff":"#a1a1aa"}; transition: all 0.2s ease;">
            <span style="font-size: 1.1rem;">📝</span>
            <span>ثبت دستی (از/تا ساعت)</span>
          </button>
        </div>

        <!-- ==================== TAB A: LIVE TIMER QUICK START ==================== -->
        <div id="section-live-timer" data-section="section-live-timer" style="display: ${e.activeTab==="timer"?"block":"none"};">
          <div class="fab-tab-content animate-fade-in" id="fab-timer-section" data-section="section-live-timer">
            
            <!-- 1. Timer Type Selector (Pomodoro vs Stopwatch) -->
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-size: 0.78rem; font-weight: 800; color: #a1a1aa; margin-bottom: 8px;">
                ۱. حالت تایمر:
              </label>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <button type="button" class="btn-fab-timer-type ${e.timerType==="pomodoro"?"active":""}" data-timer-type="pomodoro" onclick="window.setFabTimerType && window.setFabTimerType('pomodoro')" style="padding: 12px; border-radius: 14px; border: 1.5px solid ${e.timerType==="pomodoro"?"#10b981":"rgba(255,255,255,0.08)"}; background: ${e.timerType==="pomodoro"?"rgba(16,185,129,0.15)":"#1f2029"}; color: ${e.timerType==="pomodoro"?"#34d399":"#a1a1aa"}; font-size: 0.86rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s ease;">
                  <span style="font-size: 1.2rem;">⏱️</span>
                  <span>پومودورو (زمان‌بندی‌شده)</span>
                </button>

                <button type="button" class="btn-fab-timer-type ${e.timerType==="stopwatch"?"active":""}" data-timer-type="stopwatch" onclick="window.setFabTimerType && window.setFabTimerType('stopwatch')" style="padding: 12px; border-radius: 14px; border: 1.5px solid ${e.timerType==="stopwatch"?"#38bdf8":"rgba(255,255,255,0.08)"}; background: ${e.timerType==="stopwatch"?"rgba(56,189,248,0.15)":"#1f2029"}; color: ${e.timerType==="stopwatch"?"#7dd3fc":"#a1a1aa"}; font-size: 0.86rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.2s ease;">
                  <span style="font-size: 1.2rem;">⏳</span>
                  <span>کرنومتر (زمان آزاد)</span>
                </button>
              </div>
            </div>

            <!-- 2. Dynamic Subject & Category Selector -->
            <div style="margin-bottom: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <label style="font-size: 0.78rem; font-weight: 800; color: #a1a1aa;">
                  ۲. انتخاب درس و موضوع مطالعه:
                </label>
                <button type="button" onclick="if(window.openActivityModal){ window.openActivityModal(); }" style="background: none; border: none; color: #34d399; font-size: 0.72rem; font-weight: bold; cursor: pointer; padding: 0;">
                  ➕ مدیریت درس‌ها
                </button>
              </div>

              <!-- Dynamic Category Chips with "+ افزودن درس جدید" -->
              <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 6px; margin-bottom: 10px;" id="fab-timer-cat-chips">
                ${a.map(g=>`
                  <button type="button" class="btn-fab-cat-chip ${g.code===i?"active":""}" data-code="${g.code}" data-title="${g.title}" onclick="window.handleSelectManualSubject && window.handleSelectManualSubject(this, '${g.title}', '${g.code}')" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 12px; border-radius: 12px; border: 1px solid ${g.code===i?"#10b981":"rgba(255,255,255,0.08)"}; background: ${g.code===i?"rgba(16,185,129,0.2)":"#1f2029"}; color: ${g.code===i?"#34d399":"#e4e4e7"}; font-size: 0.8rem; font-weight: 800; cursor: pointer; white-space: nowrap;">
                    <span>${g.icon||"📚"}</span>
                    <span>${g.title}</span>
                  </button>
                `).join("")}
                <button type="button" id="btn-fab-add-new-subject-timer" onclick="if(window.openActivityModal){ window.openActivityModal(); }" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 12px; border-radius: 12px; border: 1.5px dashed #10b981; background: rgba(16,185,129,0.12); color: #34d399; font-size: 0.8rem; font-weight: 800; cursor: pointer; white-space: nowrap;">
                  <span>➕</span>
                  <span>افزودن درس جدید</span>
                </button>
              </div>

              <!-- Versatile Topic Input with Auto-Suggestions Datalist -->
              <input type="text" list="fab-topic-suggestions-list" id="input-fab-timer-subject" value="${e.subject||""}" placeholder="مبحث یا فصل (مثال: فصل ۳ ژنتیک، حد و پیوستگی...)" style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-size: 0.85rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #fff;" />
              <datalist id="fab-topic-suggestions-list">
                ${r.map(g=>`<option value="${g}"></option>`).join("")}
              </datalist>
            </div>

            <!-- 3. Study-Type Pills (یادگیری، تست‌زنی، مرور، جمع‌بندی) -->
            <div style="margin-bottom: 18px;">
              <label style="display: block; font-size: 0.78rem; font-weight: 800; color: #a1a1aa; margin-bottom: 8px;">
                ۳. فاز / نوع مطالعه (الزامی):
              </label>

              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;" id="fab-timer-phase-container">
                ${Mt.map(g=>{const f=e.studyType===g.id||e.selectedPhase===g.id||!e.studyType&&!e.selectedPhase&&g.id==="یادگیری";return`
                    <button type="button" class="btn-phase-chip btn-fab-study-pill ${f?"active":""}" data-phase="${g.id}" data-pill="${g.id}" onclick="event.preventDefault(); event.stopPropagation(); window.selectStudyPhase && window.selectStudyPhase(this, '${g.id}')" style="padding: 10px 12px; border-radius: 14px; border: 1.5px solid ${f?"#10b981":"rgba(255,255,255,0.08)"}; background: ${f?"rgba(16,185,129,0.2)":"#1f2029"}; color: ${f?"#ffffff":"#e4e4e7"}; font-size: 0.82rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 8px; text-align: right; transition: all 0.15s ease;">
                      <span style="font-size: 1.2rem;">${g.icon}</span>
                      <div>
                        <strong style="display: block; font-size: 0.84rem;">${g.label}</strong>
                        <span style="font-size: 0.68rem; color: ${f?"#a7f3d0":"#71717a"}; font-weight: normal;">${g.desc}</span>
                      </div>
                    </button>
                  `}).join("")}
              </div>
              <input type="hidden" id="fab-timer-phase" value="${e.studyType||e.selectedPhase||"یادگیری"}" />
            </div>

            <!-- 🎵 Ambient Focus Sound Player Widget -->
            ${Ut()}

            <!-- 🚀 Primary CTA Button: Start Live Timer -->
            <div style="margin-top: 18px;">
              <button type="button" id="btn-fab-start-live-timer" onclick="event.preventDefault(); event.stopPropagation(); window.planexStartFocusTimer && window.planexStartFocusTimer(event);" style="width: 100%; height: 54px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: #ffffff; border: none; border-radius: 16px; font-size: 1.02rem; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; box-shadow: 0 0 24px rgba(16, 185, 129, 0.45); transition: transform 0.15s ease;">
                <span style="font-size: 1.35rem;">🚀</span>
                <span>شروع پارت تمرکز (تایمر زنده)</span>
              </button>
            </div>

          </div>
        </div>
        <div id="section-manual-log" data-section="section-manual-log" style="display: ${e.activeTab==="manual"?"block":"none"};">
          <!-- ==================== TAB B: DIRECT MANUAL ENTRY ==================== -->
          <div class="fab-tab-content animate-fade-in" id="fab-manual-section" data-section="section-manual-log">
            
            <!-- 1. Start Time (از ساعت) & End Time (تا ساعت) -->
            <div style="background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 14px; margin-bottom: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <label style="font-size: 0.8rem; font-weight: 800; color: #e4e4e7; display: flex; align-items: center; gap: 6px;">
                  <span>⏱️</span> بازه زمانی مطالعه (از ساعت تا ساعت):
                </label>
                <span id="fab-manual-computed-duration-badge" style="font-size: 0.76rem; font-weight: 800; color: #34d399; background: rgba(16,185,129,0.15); border: 1px solid rgba(16,185,129,0.3); padding: 3px 10px; border-radius: 10px;">
                  ${me(s)}
                </span>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <div>
                  <label style="display: block; font-size: 0.74rem; font-weight: bold; color: #a1a1aa; margin-bottom: 4px;">
                    از ساعت (شروع):
                  </label>
                  <input type="time" id="input-fab-start-time" value="${e.startTime||"08:00"}" oninput="window.updateFabDurationPreview && window.updateFabDurationPreview()" style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-size: 1.1rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #16171d; border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; color: #38bdf8; text-align: center;" />
                </div>

                <div>
                  <label style="display: block; font-size: 0.74rem; font-weight: bold; color: #a1a1aa; margin-bottom: 4px;">
                    تا ساعت (پایان):
                  </label>
                  <input type="time" id="input-fab-end-time" value="${e.endTime||"09:30"}" oninput="window.updateFabDurationPreview && window.updateFabDurationPreview()" style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-size: 1.1rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #16171d; border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; color: #38bdf8; text-align: center;" />
                </div>
              </div>

              <!-- Quick Duration Adjust & Presets (-15, +5, +15, 15m, 30m, 1h, 1.5h, 2h) -->
              <div style="display: flex; gap: 6px; align-items: center; justify-content: center; margin-top: 10px; flex-wrap: wrap;">
                <button type="button" class="btn-dur-adjust" data-change="-15" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(-15)" style="padding: 5px 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #16171d; color: #a1a1aa; font-size: 0.76rem; font-weight: 800; cursor: pointer;">−۱۵</button>
                <button type="button" class="btn-dur-adjust" data-change="5" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(5)" style="padding: 5px 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #16171d; color: #a1a1aa; font-size: 0.76rem; font-weight: 800; cursor: pointer;">+۵</button>
                <button type="button" class="btn-dur-adjust" data-change="15" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(15)" style="padding: 5px 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #16171d; color: #a1a1aa; font-size: 0.76rem; font-weight: 800; cursor: pointer;">+۱۵</button>
                <button type="button" class="btn-quick-dur-preset" data-mins="15" onclick="event.preventDefault(); event.stopPropagation(); window.setManualDurationPreset && window.setManualDurationPreset(15)" style="padding: 5px 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #16171d; color: #a1a1aa; font-size: 0.74rem; font-weight: 700; cursor: pointer;">۱۵د</button>
                <button type="button" class="btn-quick-dur-preset" data-mins="30" onclick="event.preventDefault(); event.stopPropagation(); window.setManualDurationPreset && window.setManualDurationPreset(30)" style="padding: 5px 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #16171d; color: #a1a1aa; font-size: 0.74rem; font-weight: 700; cursor: pointer;">۳۰د</button>
                <button type="button" class="btn-quick-dur-preset" data-mins="60" onclick="event.preventDefault(); event.stopPropagation(); window.setManualDurationPreset && window.setManualDurationPreset(60)" style="padding: 5px 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #16171d; color: #a1a1aa; font-size: 0.74rem; font-weight: 700; cursor: pointer;">۱ساعت</button>
                <button type="button" class="btn-quick-dur-preset" data-mins="90" onclick="event.preventDefault(); event.stopPropagation(); window.setManualDurationPreset && window.setManualDurationPreset(90)" style="padding: 5px 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #16171d; color: #a1a1aa; font-size: 0.74rem; font-weight: 700; cursor: pointer;">۱.۵ساعت</button>
                <button type="button" class="btn-quick-dur-preset" data-mins="120" onclick="event.preventDefault(); event.stopPropagation(); window.setManualDurationPreset && window.setManualDurationPreset(120)" style="padding: 5px 8px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #16171d; color: #a1a1aa; font-size: 0.74rem; font-weight: 700; cursor: pointer;">۲ساعت</button>
              </div>

              <!-- Hidden duration mirror consumed by saveManualActivityLog -->
              <input type="hidden" id="fab-manual-duration-input" value="${s}" />
            </div>

            <!-- 2. Dynamic Subject & Category Selector -->
            <div style="margin-bottom: 16px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <label style="font-size: 0.78rem; font-weight: 800; color: #a1a1aa;">
                  درس و موضوع مطالعه:
                </label>
                <button type="button" onclick="if(window.openActivityModal){ window.openActivityModal(); }" style="background: none; border: none; color: #a78bfa; font-size: 0.72rem; font-weight: bold; cursor: pointer; padding: 0;">
                  ➕ مدیریت درس‌ها
                </button>
              </div>

              <!-- Dynamic Category Chips with "+ افزودن درس جدید" -->
              <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 6px; margin-bottom: 10px;">
                ${a.map(g=>`
                  <button type="button" class="btn-fab-cat-chip ${g.code===i?"active":""}" data-code="${g.code}" data-title="${g.title}" onclick="window.handleSelectManualSubject && window.handleSelectManualSubject(this, '${g.title}', '${g.code}')" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 12px; border-radius: 12px; border: 1px solid ${g.code===i?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${g.code===i?"#7c3aed":"#1f2029"}; color: ${g.code===i?"#ffffff":"#e4e4e7"}; font-size: 0.8rem; font-weight: 800; cursor: pointer; white-space: nowrap;">
                    <span>${g.icon||"📚"}</span>
                    <span>${g.title}</span>
                  </button>
                `).join("")}
                <button type="button" id="btn-fab-add-new-subject-manual" onclick="if(window.openActivityModal){ window.openActivityModal(); }" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 12px; border-radius: 12px; border: 1.5px dashed #7c3aed; background: rgba(124,58,237,0.12); color: #c084fc; font-size: 0.8rem; font-weight: 800; cursor: pointer; white-space: nowrap;">
                  <span>➕</span>
                  <span>افزودن درس جدید</span>
                </button>
              </div>

              <!-- Versatile Topic Input with Suggestions -->
              <input type="text" list="fab-topic-suggestions-list-manual" id="input-fab-manual-subject" value="${e.subject||""}" placeholder="مبحث یا موضوع مطالعه (مثال: زیست فصل ۴، حل سوالات کنکور...)" style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-size: 0.85rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #fff;" />
              <datalist id="fab-topic-suggestions-list-manual">
                ${r.map(g=>`<option value="${g}"></option>`).join("")}
              </datalist>
            </div>

            <!-- 3. Study-Type Pills -->
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-size: 0.78rem; font-weight: 800; color: #a1a1aa; margin-bottom: 8px;">
                فاز / نوع مطالعه:
              </label>

              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;" id="fab-manual-phase-container">
                ${Mt.map(g=>{const f=e.studyType===g.id||e.selectedPhase===g.id||!e.studyType&&!e.selectedPhase&&g.id==="یادگیری";return`
                    <button type="button" class="btn-phase-chip btn-fab-study-pill ${f?"active":""}" data-phase="${g.id}" data-pill="${g.id}" onclick="event.preventDefault(); event.stopPropagation(); window.selectStudyPhase && window.selectStudyPhase(this, '${g.id}')" style="padding: 8px 4px; border-radius: 12px; border: 1px solid ${f?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${f?"#7c3aed":"#1f2029"}; color: ${f?"#ffffff":"#e4e4e7"}; font-size: 0.78rem; font-weight: 800; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 2px;">
                      <span style="font-size: 1.1rem;">${g.icon}</span>
                      <span>${g.label}</span>
                    </button>
                  `}).join("")}
              </div>
              <input type="hidden" id="fab-manual-phase" value="${e.studyType||e.selectedPhase||"یادگیری"}" />
            </div>

            <!-- 4. Test Count Input Grid -->
            <div style="background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 14px; margin-bottom: 18px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <label style="font-size: 0.8rem; font-weight: 800; color: #e4e4e7; display: flex; align-items: center; gap: 6px;">
                  <span>🎯</span> جزئیات تست‌ها:
                </label>
                <span id="fab-manual-tests-total-badge" style="font-size: 0.76rem; font-weight: 800; color: #38bdf8; background: rgba(56,189,248,0.15); border: 1px solid rgba(56,189,248,0.3); padding: 3px 10px; border-radius: 10px;">
                  مجموع: ${t(m)} تست
                </span>
              </div>

              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
                <!-- Correct -->
                <div style="background: #16171d; border: 1px solid rgba(16,185,129,0.2); border-radius: 12px; padding: 8px;">
                  <label style="display: block; font-size: 0.7rem; font-weight: 800; color: #34d399; margin-bottom: 4px; text-align: center;">
                    ✅ صحیح
                  </label>
                  <input type="number" id="input-fab-test-correct" min="0" value="${l}" oninput="window.updateFabTestScorePreview && window.updateFabTestScorePreview()" style="width: 100%; box-sizing: border-box; height: 38px; text-align: center; font-size: 1.1rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(16,185,129,0.2); border-radius: 8px; color: #34d399;" />
                </div>

                <!-- Wrong -->
                <div style="background: #16171d; border: 1px solid rgba(239,68,68,0.2); border-radius: 12px; padding: 8px;">
                  <label style="display: block; font-size: 0.7rem; font-weight: 800; color: #f87171; margin-bottom: 4px; text-align: center;">
                    ❌ نزده/غلط
                  </label>
                  <input type="number" id="input-fab-test-wrong" min="0" value="${c}" oninput="window.updateFabTestScorePreview && window.updateFabTestScorePreview()" style="width: 100%; box-sizing: border-box; height: 38px; text-align: center; font-size: 1.1rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(239,68,68,0.2); border-radius: 8px; color: #f87171;" />
                </div>

                <!-- Unanswered -->
                <div style="background: #16171d; border: 1px solid rgba(161,161,170,0.2); border-radius: 12px; padding: 8px;">
                  <label style="display: block; font-size: 0.7rem; font-weight: 800; color: #a1a1aa; margin-bottom: 4px; text-align: center;">
                    ⏭️ نزده
                  </label>
                  <input type="number" id="input-fab-test-unanswered" min="0" value="${y}" oninput="window.updateFabTestScorePreview && window.updateFabTestScorePreview()" style="width: 100%; box-sizing: border-box; height: 38px; text-align: center; font-size: 1.1rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(161,161,170,0.2); border-radius: 8px; color: #a1a1aa;" />
                </div>
              </div>
            </div>

            <!-- 💾 Primary CTA Button: Submit Manual Session -->
            <div style="margin-top: 18px;">
              <button type="button" id="btn-fab-submit-manual-log" onclick="event.preventDefault(); event.stopPropagation(); window.saveManualActivityLog && window.saveManualActivityLog(event);" style="width: 100%; height: 54px; background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%); color: #ffffff; border: none; border-radius: 16px; font-size: 1.02rem; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px; box-shadow: 0 0 24px rgba(124, 58, 237, 0.45); transition: transform 0.15s ease;">
                <span style="font-size: 1.35rem;">💾</span>
                <span>ثبت در کارنامه</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  `}function Ft(){const o=typeof localStorage<"u"&&(localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_nickname")||localStorage.getItem("planex_leaderboard_nickname"))||"";if(o&&!$e(o))return o.trim();let e=null;try{e=JSON.parse(localStorage.getItem("planex_user_profile")||localStorage.getItem("planex_profile")||"null")}catch{}if(e!=null&&e.nickname&&!$e(e.nickname))return e.nickname.trim();if(e!=null&&e.name&&!$e(e.name))return e.name.trim();let t=null;try{t=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}return t!=null&&t.full_name&&!$e(t.full_name)?t.full_name.trim():t!=null&&t.name&&!$e(t.name)?t.name.trim():t!=null&&t.first_name&&!$e(t.first_name)?t.first_name.trim():""}function Ht(){try{let o=null;try{o=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}let e=null;try{e=JSON.parse(localStorage.getItem("planex_user_profile")||"null")}catch{}const n=localStorage.getItem("planex_user_avatar")||""||(e==null?void 0:e.avatar)||(e==null?void 0:e.avatar_url)||(e==null?void 0:e.photo)||(e==null?void 0:e.photoUrl)||(o==null?void 0:o.avatar_url)||(o==null?void 0:o.photo_url)||"",a=Ft(),i=!!(a||n||o&&(o.id||o.telegram_id||o.phone||o.phone_number)),r=a||(i?"کاربر":"ورود"),d=document.getElementById("btn-header-user-account");if(d){const s=d.querySelector("span:last-child");s&&s.textContent!==r&&(s.textContent=r);const l=d.querySelector("img");if(n)if(l)l.src!==n&&(l.src=n);else{const c=d.querySelector("span:first-child");if(c&&c.textContent.includes("👤")){const y=document.createElement("img");y.src=n,y.style.cssText="width: 22px; height: 22px; border-radius: 50%; object-fit: cover; aspect-ratio: 1 / 1; border: 1px solid rgba(16, 185, 129, 0.5);",y.onerror=function(){this.onerror=null,this.src="https://api.dicebear.com/7.x/avataaars/svg?seed=planex"},c.replaceWith(y)}}d.style.borderColor=i?"rgba(16, 185, 129, 0.4)":"rgba(255, 255, 255, 0.08)",d.style.color=i?"#34d399":"#a1a1aa"}}catch(o){console.warn("[Header] updateHeaderDOM error:",o)}}typeof window<"u"&&(window.updateHeaderDOM=Ht);if(typeof window<"u"&&!window._headerProfileListenerAttached){window._headerProfileListenerAttached=!0;const o=()=>{Ht(),typeof window.renderApp=="function"&&window.renderApp()};window.addEventListener("profileUpdated",o),window.addEventListener("auth-changed",o),window.addEventListener("storage",e=>{(e.key==="planex_user_avatar"||e.key==="planex_user_profile"||e.key==="planex_auth_user"||e.key==="planex_user_nickname")&&o()})}function dn(o=null){let e=null;try{e=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}let t=null;try{t=JSON.parse(localStorage.getItem("planex_user_profile")||localStorage.getItem("planex_profile")||"null")}catch{}const a=localStorage.getItem("planex_user_avatar")||""||(t==null?void 0:t.avatar)||(t==null?void 0:t.avatar_url)||(t==null?void 0:t.photo)||(t==null?void 0:t.photoUrl)||(e==null?void 0:e.avatar_url)||(e==null?void 0:e.photo_url)||"",i=Ft(),r=!!(i||a||e&&(e.id||e.telegram_id||e.email||e.phone||e.phone_number)),d=i||(r?"کاربر":"ورود");return`<header class="app-header" style=" min-height: 44px; display: flex; align-items: center; justify-content: space-between; overflow: hidden; width: 100%; box-sizing: border-box; gap: 8px;">
      <div class="header-brand" style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
        <img src="./logo-transparent.png" alt="PlanEx Logo" style="width: 24px; height: 24px; border-radius: 6px; object-fit: contain;" />
        <div class="header-title" style="font-weight: 800; font-size: 0.92rem; letter-spacing: -0.3px; color: #e4e4e7;">PlanEx</div>
      </div>

<div class="header-actions-wrapper" style="display: flex; align-items: center; justify-content: flex-end; gap: 6px; flex-shrink: 0;">
        <!-- ☕ Hamibash Support Link -->
        <a href="https://hamibash.com/planexmedicalaa" target="_blank" rel="noopener noreferrer" id="btn-hamibash-link" class="btn-header-action" style="background: rgba(239, 68, 68, 0.14); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; padding: 4px 10px; border-radius: 10px; display: flex; align-items: center; gap: 5px; text-decoration: none; font-size: 0.74rem; font-weight: 700; flex-shrink: 0; transition: all 0.2s ease;" title="حمایت از ما در حامی‌باش">
          <span style="font-size: 0.82rem;">☕</span>
          <span>حمایت از ما</span>
        </a>

        <!-- 💡 Support Modal Trigger Button -->
        <button id="btn-support-modal" class="btn-header-action" onclick="if(window.appState){ window.appState.activeModal = 'support'; window.renderApp(); }" style="background: rgba(168, 85, 247, 0.12); border: 1px solid rgba(168, 85, 247, 0.3); color: #c084fc; padding: 4px 10px; border-radius: 10px; display: flex; align-items: center; gap: 5px; cursor: pointer; font-size: 0.74rem; font-weight: 700; flex-shrink: 0;" title="شبکه‌ها و راهنما">
          <span style="font-size: 0.82rem;">💡</span>
          <span>راهنما</span>
        </button>

        <!-- User Profile / Login Button -->
        <button type="button" onclick="if(window.appState){ window.appState.activeModal = 'login'; window.renderApp(); }" id="btn-header-user-account" class="btn-header-action" style="background: #1f2029; border: 1px solid ${r?"rgba(16, 185, 129, 0.4)":"rgba(255, 255, 255, 0.08)"}; color: ${r?"#34d399":"#a1a1aa"}; padding: 3px 8px; border-radius: 10px; display: flex; align-items: center; gap: 6px; cursor: pointer; flex-shrink: 0;" title="👤 حساب کاربری و مشخصات">
          ${a?`
            <img src="${a}" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover; aspect-ratio: 1 / 1; border: 1px solid rgba(16, 185, 129, 0.5);" onerror="this.onerror=null; this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=planex';" />
          `:`
            <span style="font-size: 0.85rem; width: 22px; height: 22px; display: inline-flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.06); border-radius: 50%;">👤</span>
          `}
          <span style="font-size: 0.74rem; font-weight: 700; max-width: 75px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${d}</span>
        </button>
      </div>
    </header>
  `}function ln(o=0){const e=o===5||o==="5"||o==="leaderboard"||o==="competition",t=[{id:0,title:"داشبورد",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>'},{id:1,title:"برنامه‌ریزی",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>'},{id:2,title:"روتین‌ها",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'},{id:"leaderboard",title:"رقابت 🏆",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2.34c0-.52-.2-1.02-.57-1.39A6.98 6.98 0 0 1 4 9V4h16v5a6.98 6.98 0 0 1-1.43 4.27c-.37.37-.57.87-.57 1.39V17c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2v7"/></svg>'},{id:3,title:"ابزارها",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>'},{id:4,title:"مقالات",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>'}],n=t.slice(0,3),a=t.slice(3),i=r=>`
      <div class="nav-item ${(r.id==="leaderboard"||r.id==="competition")&&e||r.id===o||String(r.id)===String(o)?"active":""}" data-tab="${r.id}">
        ${r.icon}
        <span>${r.title}</span>
      </div>
    `;return`
    <nav class="bottom-nav">
      ${n.map(i).join("")}
      
      <!-- Central Prominent Glowing FAB -->
      <div class="nav-fab-wrapper" onclick="if(window.openFabActivityModal){ window.openFabActivityModal(); } else if(window.openActivityModal){ window.openActivityModal(); }">
        <button type="button" class="nav-fab-btn" title="ثبت فعالیت و مطالعه">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 20h9"></path>
            <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
          </svg>
        </button>
        <span class="nav-fab-label">ثبت فعالیت</span>
      </div>

      ${a.map(i).join("")}
    </nav>
  `}function ht(o,e={},t=3e3){const n=new AbortController,a=setTimeout(()=>n.abort(),t);return fetch(o,{...e,signal:n.signal}).finally(()=>clearTimeout(a))}const cn={isSessionActive:!1,realServerCount:0,getUserId(){try{const e=localStorage.getItem("planex_user_account");if(e){const t=JSON.parse(e);if(t&&(t.id||t.username))return String(t.id||t.username)}}catch{}let o=localStorage.getItem("planex_pomodoro_device_id");return o||(o="pomo_"+Math.random().toString(36).substring(2,11)+"_"+Date.now().toString(36),localStorage.setItem("planex_pomodoro_device_id",o)),o},getNaturalTimeOfDayBaseline(){let o=new Date().getHours(),e=new Date().getMinutes();try{const i=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Tehran",hour:"numeric",hour12:!1}).format(new Date),r=parseInt(i,10);isNaN(r)||(o=r);const d=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Tehran",minute:"numeric"}).format(new Date),s=parseInt(d,10);isNaN(s)||(e=s)}catch{}let t=25;const n=e/60;if(o>=6&&o<9){const i=(o-6+n)/3;return t=Math.round(15+i*10),Math.min(25,Math.max(15,t))}if(o>=9&&o<17){const i=[27,32,36,38,32,28,34,38],r=o-9,d=i[r]||30,s=r+1<i.length?i[r+1]:38;return t=Math.round(d+(s-d)*n),Math.min(40,Math.max(25,t))}if(o>=17&&o<23){const i=[40,47,53,52,46,38],r=o-17,d=i[r]||45,s=r+1<i.length?i[r+1]:36;return t=Math.round(d+(s-d)*n),Math.min(55,Math.max(35,t))}return t={23:11,0:9,1:7,2:6,3:5,4:7,5:10}[o]||7,Math.min(12,Math.max(5,t))},getDisplayActiveUsers(){const o=this.getNaturalTimeOfDayBaseline(),e=this.isSessionActive?1:0,t=Math.max(e,parseInt(this.realServerCount)||0);return o+t},async startSession(o=25,e=!0){if(!e)return this.isSessionActive=!1,{success:!0,count:this.getDisplayActiveUsers()};this.isSessionActive=!0;const t=this.getUserId();try{const n=await ht(`${le}/api/pomodoro/active.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"start",userId:t,durationMinutes:parseInt(o)||25})}),a=await n.text();let i=null;try{i=a?JSON.parse(a):null}catch{i=null}if(n.ok&&i){const r=parseInt(i.count??i.activeUsersCount)||1;return this.realServerCount=Math.max(1,r),{success:!0,count:this.getDisplayActiveUsers()}}}catch(n){console.warn("[PomodoroService] Server communication error on start:",n)}return this.realServerCount=Math.max(1,this.realServerCount||1),{success:!0,count:this.getDisplayActiveUsers()}},async stopSession(){this.isSessionActive=!1;const o=this.getUserId();try{const e=await ht(`${le}/api/pomodoro/active.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"stop",userId:o})}),t=await e.text();let n=null;try{n=t?JSON.parse(t):null}catch{n=null}if(e.ok&&n){const a=parseInt(n.count??n.activeUsersCount)||0;return this.realServerCount=Math.max(0,a),{success:!0,count:this.getDisplayActiveUsers()}}}catch(e){console.warn("[PomodoroService] Server communication error on stop:",e)}return this.realServerCount=0,{success:!0,count:this.getDisplayActiveUsers()}},async fetchActiveCount(){try{const o=await ht(`${le}/api/pomodoro/active.php`),e=await o.text();let t=null;try{t=e?JSON.parse(e):null}catch{t=null}if(o.ok&&t){const n=parseInt(t.count??t.activeUsersCount)||0;return this.realServerCount=n,{success:!0,count:this.getDisplayActiveUsers()}}}catch(o){console.warn("[PomodoroService] Server communication error on fetch count:",o)}return{success:!1,count:this.getDisplayActiveUsers()}}};typeof window<"u"&&(window.isUserActivelyTyping=!1,typeof document<"u"&&(document.addEventListener("focusin",o=>{const e=o.target;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.hasAttribute&&e.hasAttribute("contenteditable")||e.isContentEditable)&&(window.isUserActivelyTyping=!0)}),document.addEventListener("focusout",o=>{const e=o.target;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.hasAttribute&&e.hasAttribute("contenteditable")||e.isContentEditable)&&(window.isUserActivelyTyping=!1)})));function Ct(o){if(!o)return"";let e=String(o).trim();return e=e.replace(/[۰-۹]/g,t=>"۰۱۲۳۴۵۶۷۸۹".indexOf(t)),e=e.replace(/[٠-٩]/g,t=>"٠١٢٣٤٥٦٧٨٩".indexOf(t)),e=e.replace(/[^0-9]/g,""),e.startsWith("00989")?e="0"+e.slice(4):e.startsWith("0989")?e="0"+e.slice(3):e.startsWith("989")?e="0"+e.slice(2):e.startsWith("9")&&e.length===10&&(e="0"+e),e}function It(o,e={},t=3e3){const n=new AbortController,a=setTimeout(()=>n.abort(),t);return fetch(o,{...e,signal:n.signal}).finally(()=>clearTimeout(a))}const Je={getOrCreateSyncToken(){return p.getOrCreatePersonalSyncToken()},setSyncToken(o){return p.setPersonalSyncToken(o)},getSyncStatus(){return p.getPersonalSyncInfo()},getAllLocalData(){return this.exportLocalState()},exportLocalState(){let o={};try{const e=p.exportAllDataJSON();o=JSON.parse(e)}catch(e){console.warn("[PersonalSync] db.exportAllDataJSON failed, using fallback:",e);for(let t=0;t<localStorage.length;t++){const n=localStorage.key(t);if(n&&(n.startsWith("planex_")||n.startsWith("theme_")||n.startsWith("app_")||n.startsWith("timer_")))try{o[n]=JSON.parse(localStorage.getItem(n))}catch{o[n]=localStorage.getItem(n)}}}try{const e=localStorage.getItem("planex_daily_plans")||localStorage.getItem("planex_eisenhower")||localStorage.getItem("daily_plans")||"{}",t=JSON.parse(e);o.planex_daily_plans=t,o.planex_eisenhower=t,o.daily_plans=t;const n=localStorage.getItem("planex_weekly_goals")||localStorage.getItem("weekly_goals")||"{}",a=JSON.parse(n);o.planex_weekly_goals=a,o.weekly_goals=a}catch{}return o},importLocalState(o,e=!1){if(!o)return!1;try{return p.importAllDataJSON(o,e)}catch(t){return console.error("[PersonalSync] Import failed:",t),!1}},_isPushingNow:!1,_hasPendingPush:!1,async pushToCloud(o=null,e=null,t=null){if(this._isPushingNow)return this._hasPendingPush=!0,{success:!1,message:"Push already in progress"};this._isPushingNow=!0;try{let n=null;try{n=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}const a=p&&typeof p.getUserProfile=="function"?p.getUserProfile():{},i=Ct(o||(n==null?void 0:n.phone)||(n==null?void 0:n.phone_number)||a.phone||""),r=(n==null?void 0:n.password)||"",d=Date.now();try{localStorage.setItem("planex_last_modified",String(d))}catch{}const s=this.exportLocalState();if(s&&typeof s=="object"&&(s.planex_last_modified=d),!i)return{success:!1,message:"شماره تلفن کاربر یافت نشد."};let l=[];try{l=JSON.parse(localStorage.getItem("planex_my_groups")||"[]")}catch{l=[]}let c=[];try{const f=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),x=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),w=new Map;[...f,...x].forEach(A=>{if(!A||typeof A!="object")return;const k=A.id||`${A.date||A.dateStr}_${A.startTime||A.timestamp||A.subject}_${A.duration||A.minutes}`;w.set(k,A)}),c=Array.from(w.values())}catch{c=[]}if(e)try{localStorage.setItem("planex_user_nickname",e),localStorage.setItem("planex_leaderboard_nickname",e)}catch{}if(t)try{localStorage.setItem("planex_user_avatar",t)}catch{}const y=typeof localStorage<"u"&&(localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_leaderboard_nickname"))||"",m=e||y||a.name||a.nickname||(n==null?void 0:n.full_name)||(n==null?void 0:n.name)||"کاربر پلنکس",u=typeof localStorage<"u"&&localStorage.getItem("planex_user_avatar")||"",b=t||u||a.avatar||a.avatar_url||a.photo||(n==null?void 0:n.avatar_url)||(n==null?void 0:n.avatar)||(n==null?void 0:n.photo_url)||"";if(s&&typeof s=="object"){if(s.planex_user_nickname=m,s.planex_nickname=m,s.planex_leaderboard_nickname=m,s.planex_user_avatar=b,delete s["planex_user_profile.name"],delete s["planex_user_profile.nickname"],delete s["planex_user_profile.avatar"],s.planex_user_profile||(s.planex_user_profile=a),s.planex_user_profile&&typeof s.planex_user_profile=="object"&&(s.planex_user_profile.name=m,s.planex_user_profile.nickname=m,s.planex_user_profile.avatar=b,s.planex_user_profile.avatar_url=b),s.planex_auth_user)try{let f=typeof s.planex_auth_user=="string"?JSON.parse(s.planex_auth_user):s.planex_auth_user;f.name=m,f.full_name=m,f.nickname=m,f.avatar_url=b,f.avatar=b,s.planex_auth_user=typeof s.planex_auth_user=="string"?JSON.stringify(f):f}catch{}if(s.planex_user_account)try{let f=typeof s.planex_user_account=="string"?JSON.parse(s.planex_user_account):s.planex_user_account;f.name=m,f.full_name=m,f.nickname=m,f.avatar_url=b,f.avatar=b,s.planex_user_account=typeof s.planex_user_account=="string"?JSON.stringify(f):f}catch{}}const g={phone:i,password:r,study_logs:c,rooms:l,daily_plans:s.planex_daily_plans,weekly_goals:s.planex_weekly_goals,planex_daily_plans:s.planex_daily_plans,planex_weekly_goals:s.planex_weekly_goals,planex_eisenhower:s.planex_eisenhower||s.planex_daily_plans,backupData:s,appState:s,name:m,nickname:m,planex_user_nickname:m,avatar:b,avatar_url:b,photo_url:b,planex_user_avatar:b,updatedAt:Date.now()};try{const f=await It(`${le}/api/sync.php?_t=${Date.now()}`,{method:"POST",cache:"no-store",headers:{"Content-Type":"application/json","Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"},body:JSON.stringify({action:"save",...g})},1e4),x=await f.text();let w=null;try{w=x?JSON.parse(x):null}catch{}if(f.ok&&w&&w.success){try{localStorage.setItem("planex_last_synced_at",String(g.updatedAt)),localStorage.setItem("planex_last_modified",String(g.updatedAt)),localStorage.setItem("planex_has_unsynced_changes","false")}catch{}return p.markPersonalSyncSuccess(),p&&(p._breakdownMemoMap={}),typeof window<"u"&&typeof window.updateHeaderDOM=="function"&&window.updateHeaderDOM(),{success:!0,phone:i,updatedAt:g.updatedAt,message:"☁️ اطلاعات و برنامه‌های شما با موفقیت در فضای ابری ذخیره شدند."}}else return{success:!1,message:(w==null?void 0:w.message)||`خطا در همگام‌سازی ابری (HTTP ${f.status})`}}catch(f){return console.warn("[Sync Push] Push failed:",f.message),{success:!1,message:"خطا در ارتباط با سرور: لطفاً اتصال اینترنت یا فیلترشکن را بررسی کنید."}}}finally{this._isPushingNow=!1,this._hasPendingPush&&(this._hasPendingPush=!1,setTimeout(()=>this.pushToCloud(),50))}},_isPullingNow:!1,async pullFromCloud(o=null,e=!0){var t,n,a,i,r,d;if(this._isPullingNow)return{success:!1,message:"دریافت اطلاعات در حال انجام است."};this._isPullingNow=!0;try{let s=null;try{s=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}const l=p&&typeof p.getUserProfile=="function"?p.getUserProfile():{},c=Ct(o||(s==null?void 0:s.phone)||(s==null?void 0:s.phone_number)||l.phone||"");if(!c)return{success:!1,message:"شماره موبایل کاربر یافت نشد. لطفاً ابتدا وارد حساب کاربری شوید."};const y=await It(`${le}/api/sync.php?action=get&phone=${encodeURIComponent(c)}&_t=${Date.now()}`,{method:"GET",cache:"no-store",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"}},1e4),m=await y.text();let u=null;try{u=m?JSON.parse(m):null}catch{}if(u&&typeof u.backupData=="string")try{u.backupData=JSON.parse(u.backupData)}catch{}if(y.ok&&u&&u.success){const b=u.backupData&&typeof u.backupData=="object"?u.backupData:u.appState&&typeof u.appState=="object"?u.appState:{},g=u.daily_plans||u.planex_daily_plans||u.planex_eisenhower||b.planex_daily_plans||b.planex_eisenhower||b.daily_plans||{},f=JSON.stringify(g);localStorage.setItem("planex_daily_plans",f),localStorage.setItem("planex_eisenhower",f),localStorage.setItem("daily_plans",f);const x=u.weekly_goals||u.planex_weekly_goals||b.planex_weekly_goals||b.weekly_goals||{},w=JSON.stringify(x);localStorage.setItem("planex_weekly_goals",w),localStorage.setItem("weekly_goals",w);const A=b.planex_routines||b.planex_habits||[];localStorage.setItem("planex_routines",JSON.stringify(A)),localStorage.setItem("planex_habits",JSON.stringify(A)),b.planex_deleted_habit_ids!==void 0&&localStorage.setItem("planex_deleted_habit_ids",typeof b.planex_deleted_habit_ids=="string"?b.planex_deleted_habit_ids:JSON.stringify(b.planex_deleted_habit_ids)),b.planex_routine_history!==void 0&&localStorage.setItem("planex_routine_history",typeof b.planex_routine_history=="string"?b.planex_routine_history:JSON.stringify(b.planex_routine_history)),b.planex_routine_checklist!==void 0&&localStorage.setItem("planex_routine_checklist",typeof b.planex_routine_checklist=="string"?b.planex_routine_checklist:JSON.stringify(b.planex_routine_checklist));const k=Array.isArray(u.study_logs)&&u.study_logs.length>0?u.study_logs:Array.isArray(b.planex_study_logs)?b.planex_study_logs:Array.isArray(b.planex_recent_activity_sessions)?b.planex_recent_activity_sessions:[],$=JSON.stringify(k);localStorage.setItem("planex_study_logs",$),localStorage.setItem("planex_recent_activity_sessions",$);const M=Array.isArray(u.rooms)&&u.rooms.length>0?u.rooms:Array.isArray(b.planex_my_groups)?b.planex_my_groups:Array.isArray(b.planex_my_rooms)?b.planex_my_rooms:[],I=JSON.stringify(M);localStorage.setItem("planex_my_groups",I),localStorage.setItem("planex_my_rooms",I),localStorage.setItem("planex_user_groups",I),p&&typeof p.setUserGroups=="function"&&p.setUserGroups(M),b.planex_study_targets!==void 0&&localStorage.setItem("planex_study_targets",typeof b.planex_study_targets=="string"?b.planex_study_targets:JSON.stringify(b.planex_study_targets)),b.planex_countdown_events!==void 0&&localStorage.setItem("planex_countdown_events",typeof b.planex_countdown_events=="string"?b.planex_countdown_events:JSON.stringify(b.planex_countdown_events)),b.planex_weeks!==void 0&&localStorage.setItem("planex_weeks",typeof b.planex_weeks=="string"?b.planex_weeks:JSON.stringify(b.planex_weeks)),b.planex_hourly_logs!==void 0&&localStorage.setItem("planex_hourly_logs",typeof b.planex_hourly_logs=="string"?b.planex_hourly_logs:JSON.stringify(b.planex_hourly_logs)),b.planex_current_week_id!==void 0&&localStorage.setItem("planex_current_week_id",String(b.planex_current_week_id)),Object.keys(b).forEach(C=>{if(C.startsWith("planex_")||C.startsWith("theme_")||C.startsWith("app_")||C.startsWith("timer_")){if(C==="planex_sync_token"||C==="planex_sync_token_secret"||C==="planex_auth_token")return;const P=b[C];if(P!=null)try{localStorage.setItem(C,typeof P=="object"?JSON.stringify(P):String(P))}catch{}}});const D=((t=u.user)==null?void 0:t.name)||u.name||b.planex_user_nickname||(typeof b.planex_user_profile=="object"?(n=b.planex_user_profile)==null?void 0:n.name:null);if(D&&!$e(D)){localStorage.setItem("planex_user_nickname",D),localStorage.setItem("planex_leaderboard_nickname",D),localStorage.setItem("planex_nickname",D);try{let C=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}");C.name=D,C.full_name=D,C.nickname=D,localStorage.setItem("planex_auth_user",JSON.stringify(C)),localStorage.setItem("planex_user_account",JSON.stringify(C))}catch{}}const T=((a=u.user)==null?void 0:a.avatar_url)||((i=u.user)==null?void 0:i.avatar)||((r=u.user)==null?void 0:r.photo_url)||u.avatar_url||u.avatar||b.planex_user_avatar||(typeof b.planex_user_profile=="object"?(d=b.planex_user_profile)==null?void 0:d.avatar:null);if(T&&!T.includes("dicebear.com")){localStorage.setItem("planex_user_avatar",T);try{let C=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}");C.avatar_url=T,C.photo_url=T,C.avatar=T,localStorage.setItem("planex_auth_user",JSON.stringify(C)),localStorage.setItem("planex_user_account",JSON.stringify(C))}catch{}}localStorage.setItem("planex_has_unsynced_changes","false"),localStorage.setItem("planex_last_synced_at",String(Date.now()));const N=u.updatedAt||b.planex_last_modified||Date.now();if(localStorage.setItem("planex_last_modified",String(N)),p&&(p._breakdownMemoMap={}),window.dashboardChartInstances&&(window.dashboardChartInstances=null),typeof window<"u"){if(typeof window.updateHeaderDOM=="function"&&window.updateHeaderDOM(),typeof window.updateCharts=="function")try{window.updateCharts()}catch{}["renderRoutines","updateLeitnerUI","renderDashboard"].forEach(C=>{try{typeof window[C]=="function"&&window[C]()}catch{}}),typeof window.renderApp=="function"&&window.renderApp()}return{success:!0,phone:c,data:u,message:"🎉 تمام اطلاعات، برنامه‌ها و اتاق‌های مطالعه با موفقیت از سرور بازیابی شدند!"}}else return{success:!1,message:(u==null?void 0:u.message)||"اطلاعاتی برای این شماره در سرور یافت نشد."}}catch(s){return console.error("[PersonalSync pull] Error:",s),{success:!1,message:"خطا در بازیابی اطلاعات از سرور: لطفاً اتصال اینترنت یا فیلترشکن را بررسی کنید."}}finally{this._isPullingNow=!1}}};function wo(){if(typeof document>"u")return;const o=document.getElementById("cloud-sync-status-indicator");if(!o)return;const e=(typeof window<"u"?window.cloudSyncState:null)||"idle";let t="",n="همگام‌سازی خودکار ابری";e==="syncing"?(t=`
      <svg class="spin-sync" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
      </svg>
    `,n="در حال همگام‌سازی خودکار با فضای ابری..."):e==="synced"?(t=`
      <span style="font-size: 0.82rem; position: relative; display: inline-flex; align-items: center; justify-content: center;">
        ☁️<span style="position: absolute; bottom: -1px; right: -2px; width: 6px; height: 6px; background: #10b981; border-radius: 50%; box-shadow: 0 0 4px #10b981;"></span>
      </span>
    `,n="همگام‌سازی خودکار: اطلاعات در فضای ابری ذخیره شدند ✅"):e==="offline"?(t=`
      <span style="font-size: 0.82rem; opacity: 0.5;">☁️</span>
    `,n="آفلاین — ذخیره در دستگاه انجام شد؛ همگام‌سازی پس از اتصال اینترنت فعال می‌شود"):(t='<span style="font-size: 0.82rem;">☁️</span>',n="همگام‌سازی ابری — کلیک برای همگام‌سازی آنی"),o.innerHTML=t,o.title=n}async function ho(o=!1){}function vo(o=!1){}function So(){}function ko(o=150){}typeof window<"u"&&(window.personalSyncService=Je,window.triggerAutoSync=ho,window.updateCloudSyncIndicatorUI=wo,window.handleFocusDrivenSync=vo,window.startSmartSyncInterval=So,window.triggerActionDrivenPush=ko);typeof window<"u"&&(window.isEarlyBirdSubmitting=!1);function dt(o,e=!0,t=""){if(typeof document>"u")return;const n=document.createElement("div"),a=e?"#10b981":"#ef4444";n.style.cssText=`position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%); background: ${a}; color: white; padding: 12px 22px; border-radius: 14px; font-weight: 900; font-size: 0.9rem; line-height: 1.7; z-index: 9999; box-shadow: 0 6px 20px rgba(0,0,0,0.4); max-width: 92vw; text-align: center; direction: rtl;`,n.innerHTML=`${o}${t?`<br><span style="font-size: 0.72rem; opacity: 0.9; font-weight: normal;">${String(t).replace(/</g,"&lt;")}</span>`:""}`,document.body.appendChild(n),setTimeout(()=>n.remove(),e?3500:8e3)}if(typeof window<"u")try{const o=localStorage.getItem("early_bird_daily_status");if(o){const e=JSON.parse(o),t=window.leaderboardService?window.leaderboardService.getTodayDateStr():new Date().toLocaleDateString("fa-IR");e.date!==t&&(localStorage.removeItem("early_bird_daily_status"),Je&&typeof Je.pushToCloud=="function"&&Je.pushToCloud())}}catch{}typeof window<"u"&&(window.handleEarlyBirdCheckIn=async()=>{if(!window.isEarlyBirdSubmitting){if(!S.isEarlyBirdWindowOpen()){dt("⏰ ثبت بیداری فقط از ساعت ۵ تا ۷ صبح امکان‌پذیر است.",!1);return}window.isEarlyBirdSubmitting=!0,window.renderApp&&window.renderApp();try{const o=await S.recordEarlyBird();if(o.success&&o.serverConfirmed){const e=o.rank?` — رتبه بیداری #${o.rank}`:"";dt(`☀️ ${o.message}${e}`,!0),Array.isArray(o.list)&&(window.lastEarlyBirdList=o.list);try{const t=S.getTodayDateStr(),n=S.getIranNowHHMM();localStorage.setItem("early_bird_daily_status",JSON.stringify({date:t,time:n}))}catch{}}else dt(`❌ ${o.message}`,!1,o.errorDetail||"")}catch(o){console.error("[EarlyBird] خطای غیرمنتظره:",o),dt("❌ خطای غیرمنتظره در ثبت سحرخیزی.",!1,o.message)}finally{window.isEarlyBirdSubmitting=!1,window.renderApp&&window.renderApp()}}});typeof window<"u"&&!window.toggleTopBannersAccordion&&(window.toggleTopBannersAccordion=()=>{const o=localStorage.getItem("planex_top_accordion_open")==="true";localStorage.setItem("planex_top_accordion_open",String(!o)),window.renderApp&&window.renderApp()});typeof window<"u"&&!window.toggleRecentSessionsAccordion&&(window.toggleRecentSessionsAccordion=()=>{const o=localStorage.getItem("planex_recent_sessions_open")==="true";localStorage.setItem("planex_recent_sessions_open",String(!o)),window.renderApp&&window.renderApp()});typeof window<"u"&&!window.toggleChartsAccordion&&(window.toggleChartsAccordion=()=>{const o=localStorage.getItem("planex_charts_accordion_open")!=="false";localStorage.setItem("planex_charts_accordion_open",String(!o)),window.renderApp&&window.renderApp()});typeof window<"u"&&!window.toggleWeeklyBreakdownAccordion&&(window.toggleWeeklyBreakdownAccordion=()=>{const o=localStorage.getItem("planex_weekly_breakdown_accordion_open")==="true";localStorage.setItem("planex_weekly_breakdown_accordion_open",String(!o)),window.renderApp&&window.renderApp()});const je=["شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه"];function _o(o){const e=Math.floor(o/2),t=o%2===0?"00":"30",n=Math.floor((o+1)/2),a=(o+1)%2===0?"00":"30",i=`${e.toString().padStart(2,"0")}:${t}`,r=`${n.toString().padStart(2,"0")}:${a}`;return`${i} - ${r}`}function $o(o=0,e="daily"){var t,n,a,i,r,d,s,l;try{const c=p.getCurrentWeek(),y=c?c.id:1,m=p.getHourlyLogs(y)||{},u=p.getCategories()||[],b={};u.forEach((O,H)=>{O&&O.code&&(b[O.code]={...O,color:O.color||Le[H%Le.length]})});const g=p.getStudyTargets()||{},f=p.getCountdownEvents()||[],x=f&&f.length>0?f[0]:null,w=p.getEarnedMedalBadge(),A=(typeof p.getRecentFocusSessions=="function"?p.getRecentFocusSessions(8):[]).filter(Boolean),[k,$,M]=p.getTodayJalali(),I=(new Date().getDay()+1)%7,D=O=>String(O).replace(/[0-9]/g,H=>"۰۱۲۳۴۵۶۷۸۹"[H]),T=((c==null?void 0:c.id)||"").split("_");let N=null;if(T.length===3){const O=parseInt(T[0]),H=parseInt(T[1]),ie=parseInt(T[2]);if(!isNaN(O)&&!isNaN(H)&&!isNaN(ie)){const ye=p.jalaliToJdn(O,H,1),Me=(ye+2)%7;N=ye-Me+(ie-1)*7}}N===null&&(N=p.getTodayJdn()-I);let C=0,P=0,L=0;const q={};for(let O=0;O<48;O++){const H=`${o}_${O}`,ie=m[H],ye=`${o}_${O}_multi`,Me=m[ye]||[],he=new Set;ie&&ie.categoryCode&&he.add(ie.categoryCode),Me.forEach(ze=>he.add(ze)),he.forEach(ze=>{const Ce=b[ze];Ce&&(q[Ce.code]=(q[Ce.code]||0)+1,Oe(Ce)?C++:(Ce.code==="تـ"||Ce.group==="تلف شده")&&P++)}),ie&&ie.testCount&&(L+=parseInt(ie.testCount)||0)}const F=((n=(t=c==null?void 0:c.days)==null?void 0:t[o])==null?void 0:n.dateStr)||p._getWeekDayDateStr(o),J=p.getDailyStats(F)||{studyHours:0,studyMinutes:0,totalTests:0,sessionsCount:0};let G=p.getWeekDayMinutes(o),Q=+(G/60).toFixed(2),V=p.getWeekDayTests(o);const X=Number(g.dailyStudyGoalHours??g.dailyTargetHours??8),j=X*60,Z=Number(g.dailyTestGoalCount??150),K=j>0?Math.min(100,Math.round(G/j*100)):0,be=Z>0?Math.min(100,Math.round(V/Z*100)):0,fe=Math.max(0,j-G),ce=+(fe/60).toFixed(1),h=Math.max(0,Z-V);let E="";if(x){const O=p.getTodayJdn(),ie=p.jalaliToJdn(parseInt(x.jy),parseInt(x.jm),parseInt(x.jd))-O,ye=new Date;ye.setDate(ye.getDate()+ie),ye.setHours(8,0,0,0);const Me=new Date,he=ye.getTime()-Me.getTime();if(he>0){const ze=Math.floor(he/864e5),Ce=Math.floor(he%(1e3*60*60*24)/(1e3*60*60)),Ye=Math.floor(he%(1e3*60*60)/(1e3*60)),Pe=Re=>String(Re).replace(/[0-9]/g,De=>"۰۱۲۳۴۵۶۷۸۹"[De]);E=`🎯 ${Pe(ze)} روز و ${Pe(Ce)} ساعت تا ${x.title}`}else if(he>-864e5)E=`🎉 امروز روز برگزاری ${x.title} است!`;else{const ze=Math.floor(Math.abs(he)/864e5);E=`📌 ${(Ye=>String(Ye).replace(/[0-9]/g,Pe=>"۰۱۲۳۴۵۶۷۸۹"[Pe]))(ze)} روز از ${x.title} گذشته است.`}}const R=[],U=[];let de=0,B=0;for(let O=0;O<7;O++){const H=p.getWeekDayMinutes(O),ie=p.getWeekDayTests(O);R.push(H),U.push(ie),de+=H,B+=ie}const ue=Math.round(de/7),xe=Math.round(B/7),ge=Math.max(1,I+1),Ae=Math.round(de/ge),we=[];for(let O=0;O<7;O++){const H=(a=c==null?void 0:c.days)==null?void 0:a[O],ie=(H==null?void 0:H.dateStr)||p._getWeekDayDateStr(O),ye=H&&H.dayOfMonth&&H.monthName?`${je[O]} ${D(H.dayOfMonth)} ${H.monthName}`:je[O],Me=p.getDayCategoryBreakdown(O),he=Me.reduce((Re,De)=>Re+De.minutes,0);let ze="",Ce=0;const Ye=[];let Pe=he>0;Pe&&Me.forEach(Re=>{const De=Re.minutes/he,to=De*163.36,oo=-Ce*163.36;Ce+=De,ze+=`
          <circle cx="30" cy="30" r="26" fill="none" stroke="${Re.color}" stroke-width="8"
            stroke-dasharray="${to.toFixed(2)} 163.36"
            stroke-dashoffset="${oo.toFixed(2)}"
            transform="rotate(-90 30 30)" />
        `,Ye.push({title:Re.title,color:Re.color,minutes:Re.minutes})}),we.push({dayName:je[O],dayDateFull:ye,isToday:H?!!H.isToday:O===I,studyMinutes:he,arcs:ze,legendItems:Ye,hasData:Pe})}const Te=typeof localStorage<"u"&&localStorage.getItem("planex_top_accordion_open")==="true",Ie=typeof localStorage<"u"&&localStorage.getItem("planex_recent_sessions_open")==="true",oe=typeof localStorage<"u"?localStorage.getItem("planex_charts_accordion_open")!=="false":!0,pe=typeof localStorage<"u"?localStorage.getItem("planex_weekly_breakdown_accordion_open")==="true":!1,He=typeof window<"u"&&window.pomodoroService?window.pomodoroService.getDisplayActiveUsers():Math.max(1,parseInt((i=window.appState)==null?void 0:i.pomodoroActiveUsers)||1),We=!!((r=window.appState)!=null&&r.isPomodoroRunning||(d=window.appState)!=null&&d.isStopwatchRunning),z=We&&((s=window.appState)==null?void 0:s.focusTimerType)===2,ae=We&&((l=window.appState)==null?void 0:l.focusActivityMode)==="non-study"&&!z;let re="rgba(16, 185, 129, 0.1)",v="rgba(16, 185, 129, 0.25)",W="#10b981",Y="#10b981",se=`🟢 ${D(He)} نفر هم‌اکنون در حال مطالعه در پومودورو هستند`;return z?(re="rgba(56, 189, 248, 0.1)",v="rgba(56, 189, 248, 0.25)",W="#38bdf8",Y="#38bdf8",se=`☕ شما در حال استراحت ☕ | 🟢 ${D(He)} نفر در حال مطالعه`):ae&&(re="rgba(245, 158, 11, 0.1)",v="rgba(245, 158, 11, 0.25)",W="#f59e0b",Y="#f59e0b",se=`🧘 شما در حال فعالیت غیردرسی 🧘 | 🟢 ${D(He)} نفر در حال مطالعه`),`
    <div class="dashboard-view animate-fade-in" style="direction: rtl;">
      
      <!-- ⚡ Collapsible Top Events & Leaderboard Accordion -->
      <div style="margin-bottom: 10px;">
        <button onclick="if(window.toggleTopBannersAccordion) window.toggleTopBannersAccordion();" 
                class="glass-panel" 
                style="width: 100%; padding: 7px 12px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; color: var(--text-secondary); transition: all 0.2s ease;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.78rem; font-weight: 700; color: #e4e4e7;">
            <span style="font-size: 0.85rem;">⚡</span>
            <span>رویدادها، سحرخیزان و تالار رقابت</span>
            ${x?`<span style="font-size: 0.68rem; background: #1f2029; color: #8e8e9c; border: 1px solid rgba(255,255,255,0.08); padding: 1px 6px; border-radius: 6px;">${E}</span>`:""}
          </div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 0.7rem; color: #8e8e9c;">
            <span>${Te?"بستن":"مشاهده"}</span>
            <span style="font-size: 0.68rem; transform: ${Te?"rotate(180deg)":"rotate(0deg)"}; transition: transform 0.2s ease;">▼</span>
          </div>
        </button>

        ${Te?`
          <div style="margin-top: 8px; display: flex; flex-direction: column; gap: 8px; animation: fadeIn 0.2s ease;">
            <!-- Top Countdown Banner -->
            ${x?`
              <div class="glass-panel" style="padding: 10px 14px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="width: 30px; height: 30px; border-radius: 8px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 1rem;">
                    ⏳
                  </div>
                  <div>
                    <strong style="font-size: 0.86rem; font-weight: 700; color: #e4e4e7;">${E}</strong>
                    <div style="font-size: 0.7rem; color: #8e8e9c; margin-top: 1px;">تاریخ برگزاری: ${x.jy}/${x.jm}/${x.jd}</div>
                  </div>
                </div>
                <div style="background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08); padding: 3px 8px; border-radius: 8px; font-weight: 600; font-size: 0.72rem; font-family: 'Outfit';">
                  روزشمار کنکوری 🎯
                </div>
              </div>
            `:""}

            <!-- ☀️ باشگاه سحرخیزان -->
            ${(()=>{const O=S.isEarlyBirdWindowOpen(),H=S.getIranNowHHMM(),ie=S.getTodayWakeTime(),ye=typeof window<"u"&&!!window.isEarlyBirdSubmitting,Me=De=>D(String(De||""));let he="";const ze=ie?String(ie).replace(/[۰-۹]/g,De=>"۰۱۲۳۴۵۶۷۸۹".indexOf(De)).replace(/[٠-٩]/g,De=>"٠١٢٣٤٥٦٧٨٩".indexOf(De)).trim():"",[Ce,Ye]=ze?ze.split(":").map(Number):[NaN,NaN],Pe=!isNaN(Ce)&&!isNaN(Ye)?Ce*60+Ye:null,Re=Pe!==null&&Pe>=5*60&&Pe<=7*60;return ie&&Re?he=`
                  <div style="display: flex; align-items: center; gap: 6px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); color: #10b981; padding: 5px 10px; border-radius: 8px; font-weight: 700; font-size: 0.74rem;">
                    <span>✅</span><span>ثبت شد (${Me(ie)})</span>
                  </div>`:O?he=`
                  <button onclick="if(typeof window.handleEarlyBirdCheckIn === 'function') window.handleEarlyBirdCheckIn();" ${ye?"disabled":""}
                    style="padding: 5px 12px; font-size: 0.76rem; font-weight: 700; color: #ffffff; background: #7c3aed; border: none; border-radius: 8px; cursor: ${ye?"wait":"pointer"}; opacity: ${ye?"0.65":"1"};">
                    ${ye?"⏳ ثبت...":"من بیدارم! 🌅"}
                  </button>`:he=`
                  <div style="display: flex; align-items: center; gap: 4px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); color: #8e8e9c; padding: 5px 10px; border-radius: 8px; font-weight: 600; font-size: 0.72rem;">
                    <span>🔒</span><span>بدون حاضری صبح</span>
                  </div>`,`
              <div class="glass-panel" style="padding: 10px 14px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 8px; flex: 1; min-width: 180px;">
                  <div style="width: 30px; height: 30px; border-radius: 8px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 1rem;">☀️</div>
                  <div>
                    <strong style="font-size: 0.86rem; font-weight: 700; color: #e4e4e7; display: block;">باشگاه سحرخیزان</strong>
                    <span style="font-size: 0.7rem; color: #8e8e9c;">
                      ساعت الان: <strong style="color: #e4e4e7; font-family: 'Outfit';">${Me(H)}</strong>
                      ${O?' • <span style="color:#10b981;">بازه باز است</span>':""}
                    </span>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                  ${he}
                  <div onclick="if(window.switchTab){ window.switchTab('leaderboard'); } else if(window.appState){ window.appState.activeTab = 'leaderboard'; window.renderApp(); }"
                    style="display: flex; align-items: center; gap: 3px; color: #a1a1aa; font-weight: 600; font-size: 0.72rem; background: #1f2029; padding: 5px 10px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.08); cursor: pointer;">
                    <span>🏅 لیست</span><span>◄</span>
                  </div>
                </div>
              </div>`})()}

            <!-- Leaderboard Quick Access Banner -->
            <div class="glass-panel" style="padding: 10px 14px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); display: flex; justify-content: space-between; align-items: center; border-radius: 12px; flex-wrap: wrap; gap: 8px;">
              <div onclick="if(window.switchTab){ window.switchTab('leaderboard'); } else if(window.appState){ window.appState.activeTab = 'leaderboard'; window.renderApp(); }" style="display: flex; align-items: center; gap: 8px; cursor: pointer; flex: 1; min-width: 180px;">
                <div style="width: 30px; height: 30px; border-radius: 8px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 1rem;">
                  🏆
                </div>
                <div>
                  <strong style="font-size: 0.86rem; font-weight: 700; color: #e4e4e7; display: block;">تالار رقابت و لیدربرد</strong>
                  <span style="font-size: 0.7rem; color: #8e8e9c;">مشاهده رتبه و ساعات مطالعه داوطلبان</span>
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                <div onclick="if(window.switchTab){ window.switchTab('leaderboard'); } else if(window.appState){ window.appState.activeTab = 'leaderboard'; window.renderApp(); }" style="display: flex; align-items: center; gap: 3px; color: #a1a1aa; font-weight: 600; font-size: 0.72rem; background: #1f2029; padding: 4px 8px; border-radius: 8px; border: 1px solid rgba(255, 255, 255, 0.08); cursor: pointer;">
                  <span>ورود</span>
                  <span>◄</span>
                </div>
              </div>
            </div>
          </div>
        `:""}
      </div>

      <!-- ⏱️ 24-HOUR RADIAL STUDY RING & DAILY FLOW WIDGET -->
      ${lo()}

      <!-- 🎯 HERO FOCUS ACTION & ACTIVITY LAUNCHER CARD -->
      <div class="glass-panel" style="padding: 14px 16px; margin-bottom: 12px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 14px; box-shadow: none;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
          <div style="display: flex; align-items: center; gap: 6px; background: #1f2029; padding: 3px 10px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.08);">
            <span style="width: 6px; height: 6px; background: #7c3aed; border-radius: 50%; display: inline-block;"></span>
            <span style="font-weight: 700; font-size: 0.76rem; color: #e4e4e7;">مرکز ثبت فعالیت و تمرکز هوشمند</span>
          </div>
          <div style="display: flex; align-items: center; gap: 6px;">
            <span style="font-size: 0.72rem; color: #8e8e9c; font-weight: 600; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); padding: 2px 8px; border-radius: 8px; font-family: 'Outfit';">
              امروز: ${me(G)} | ${D(V)} تست
            </span>
          </div>
        </div>

        <div style="margin-bottom: 10px;">
          <h2 style="margin: 0 0 3px 0; font-size: 0.98rem; color: #ffffff; font-weight: 700; line-height: 1.4;">
            شروع پارت تمرکز، تست‌زنی و ثبت سریع فعالیت 🎯
          </h2>
          <p style="margin: 0; font-size: 0.74rem; color: #8e8e9c; line-height: 1.5;">
            تایمر پومودورو را روشن کنید یا فعالیت‌ها و تست‌های گذشته خود را مستقیم در کارنامه ثبت کنید.
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(170px, 1fr)); gap: 8px; align-items: center;">
          <button onclick="window.appState.activeModal = 'focus'; window.renderApp();" id="btn-hero-focus-start" class="btn-primary" style="padding: 10px 14px; font-size: 0.86rem; font-weight: 700; background: #7c3aed; color: white; border: none; border-radius: 10px; box-shadow: none; display: flex; align-items: center; justify-content: center; gap: 6px; cursor: pointer;">
            <span style="font-size: 1rem;">⏱️</span>
            <span>شروع پارت تمرکز (تایمر)</span>
          </button>

          <button onclick="if(window.openManualActivityLogModal){ window.openManualActivityLogModal(); } else { window.appState.activeModal = 'manualLog'; window.renderApp(); }" id="btn-hero-manual-log" style="padding: 10px 14px; font-size: 0.86rem; font-weight: 700; background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; box-shadow: none; display: flex; align-items: center; justify-content: center; gap: 6px; cursor: pointer; transition: all 0.2s ease;">
            <span style="font-size: 1rem;">➕</span>
            <span>ثبت دستی فعالیت</span>
          </button>
        </div>
      </div>

      <!-- Day Selector Pills (for Daily Analytics) -->
      <div class="day-selector" style="${e==="weekly"?"opacity: 0.4; pointer-events: none;":""}; margin-top: 10px; margin-bottom: 10px; overflow-x: auto; display: flex; gap: 6px; padding-bottom: 2px;">
        ${je.map((O,H)=>`
          <button class="day-pill ${H===o?"active":""}" data-day="${H}" style="flex: 1; min-width: 65px; padding: 5px 8px; font-size: 0.74rem; font-weight: 600; text-align: center; border-radius: 8px;">
            ${O}
          </button>
        `).join("")}
      </div>

      <!-- 🌟 QUICK KPI STATS WIDGETS (ساعت امروز، میانگین هفتگی، تست و درصد هدف) -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 8px; margin-bottom: 12px;">
        <!-- Card 1: Today Study Time -->
        <div class="glass-panel" style="padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 0.7rem; color: #8e8e9c; font-weight: 600;">ساعت مطالعه امروز</span>
            <span style="font-size: 0.95rem;">⏱️</span>
          </div>
          <div style="font-size: 1rem; font-weight: 800; color: #e4e4e7; font-family: 'Outfit'; margin-bottom: 2px;">
            ${me(G)}
          </div>
          <div style="font-size: 0.65rem; color: #71717a;">
            هدف: ${X} ساعت (${K}%)
          </div>
        </div>

        <!-- Card 2: Weekly Average Study -->
        <div class="glass-panel" style="padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 0.7rem; color: #8e8e9c; font-weight: 600;">میانگین روزانه هفته</span>
            <span style="font-size: 0.95rem;">📊</span>
          </div>
          <div style="font-size: 1rem; font-weight: 800; color: #e4e4e7; font-family: 'Outfit'; margin-bottom: 2px;">
            ${me(Ae)}
          </div>
          <div style="font-size: 0.65rem; color: #71717a;">
            مجموع: ${me(de)}
          </div>
        </div>

        <!-- Card 3: Today Tests -->
        <div class="glass-panel" style="padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 0.7rem; color: #8e8e9c; font-weight: 600;">تست‌های امروز</span>
            <span style="font-size: 0.95rem;">🎯</span>
          </div>
          <div style="font-size: 1rem; font-weight: 800; color: #e4e4e7; font-family: 'Outfit'; margin-bottom: 2px;">
            ${D(V)} تست
          </div>
          <div style="font-size: 0.65rem; color: #71717a;">
            هدف: ${Z} (${be}%)
          </div>
        </div>

        <!-- Card 4: Goal Progress -->
        <div class="glass-panel" style="padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 0.7rem; color: #8e8e9c; font-weight: 600;">تحقق هدف روزانه</span>
            <span style="font-size: 0.95rem;">🔥</span>
          </div>
          <div style="font-size: 1rem; font-weight: 800; color: #e4e4e7; font-family: 'Outfit'; margin-bottom: 2px;">
            ${K}%
          </div>
          <div style="font-size: 0.65rem; color: #71717a;">
            ${fe<=0?"🎉 تکمیل شد":`${me(fe)} تا هدف`}
          </div>
        </div>
      </div>
      </div>

      <!-- 3. TOP TWO DONUT PROGRESS CARDS (Study Hours & Test Count) -->
      <div class="dashboard-grid" style="margin-bottom: 12px; gap: 10px;">
        <!-- Donut 1: Study Hours Progress -->
        <div class="glass-panel" style="padding: 12px 14px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d; border-radius: 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <div style="width: 28px; height: 28px; border-radius: 50%; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">⏱️</div>
              <div>
                <div style="font-weight: 700; font-size: 0.86rem; color: #e4e4e7;">ساعت مطالعه امروز</div>
                <div style="font-size: 0.7rem; color: #8e8e9c;">هدف: ${X} ساعت</div>
              </div>
            </div>
            <button class="btn-open-target-dialog btn-header-action" onclick="window.openDailyTargetsModal()" style="padding: 3px 8px; font-size: 0.7rem; cursor: pointer;">✏️ اهداف</button>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-around; gap: 12px; flex-wrap: wrap;">
            <div class="progress-ring-container" style="position: relative; width: 90px; height: 90px;">
              <svg width="90" height="90" viewBox="0 0 110 110">
                <circle cx="55" cy="55" r="45" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="10"/>
                <circle cx="55" cy="55" r="45" fill="none" stroke="#7c3aed" stroke-width="10"
                  stroke-dasharray="282.7"
                  stroke-dashoffset="${282.7-282.7*K/100}"
                  stroke-linecap="round"
                  transform="rotate(-90 55 55)"
                  style="transition: stroke-dashoffset 0.5s ease;"/>
              </svg>
              <div class="progress-text" style="position: absolute; top:0; left:0; width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding: 2px;">
                <span style="font-size: 1.15rem; font-weight: 800; font-family: 'Outfit'; color: #fff;">${K}%</span>
                <span style="font-size: 0.65rem; color: #8e8e9c; font-family: 'Outfit';">${me(G)}</span>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 6px; flex: 1; min-width: 140px;">
              <div style="background: #1f2029; padding: 6px 10px; border-radius: 8px; font-size: 0.74rem; border: 1px solid rgba(255,255,255,0.06);">
                <span style="color: #8e8e9c;">مدت مطالعه:</span>
                <strong style="color: #e4e4e7; margin-right: 4px;">${me(G)}</strong>
              </div>
              <div style="background: ${fe<=0?"rgba(16, 185, 129, 0.12)":"#1f2029"}; color: ${fe<=0?"#10b981":"#8e8e9c"}; border: 1px solid rgba(255,255,255,0.06); padding: 6px 10px; border-radius: 8px; font-size: 0.74rem; font-weight: 600; text-align: center;">
                ${fe<=0?"🎉 هدف روزانه تکمیل شد!":`⏳ ${me(fe)} باقیمانده`}
              </div>
            </div>
          </div>
        </div>

        <!-- Donut 2: Test Count Progress -->
        <div class="glass-panel" style="padding: 12px 14px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d; border-radius: 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <div style="width: 28px; height: 28px; border-radius: 50%; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">🎯</div>
              <div>
                <div style="font-weight: 700; font-size: 0.86rem; color: #e4e4e7;">تعداد تست‌های امروز</div>
                <div style="font-size: 0.7rem; color: #8e8e9c;">هدف: ${Z} تست</div>
              </div>
            </div>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-around; gap: 12px; flex-wrap: wrap;">
            <div class="progress-ring-container" style="position: relative; width: 90px; height: 90px;">
              <svg width="90" height="90" viewBox="0 0 110 110">
                <circle cx="55" cy="55" r="45" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="10"/>
                <circle cx="55" cy="55" r="45" fill="none" stroke="#7c3aed" stroke-width="10"
                  stroke-dasharray="282.7"
                  stroke-dashoffset="${282.7-282.7*be/100}"
                  stroke-linecap="round"
                  transform="rotate(-90 55 55)"
                  style="transition: stroke-dashoffset 0.5s ease;"/>
              <div class="progress-text" style="position: absolute; top:0; left:0; width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                <span style="font-size: 1.15rem; font-weight: 800; font-family: 'Outfit'; color: #fff;">${be}%</span>
                <span style="font-size: 0.65rem; color: #8e8e9c; font-family: 'Outfit';">${V} / ${Z}</span>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 6px; flex: 1; min-width: 140px;">
              <div style="background: #1f2029; padding: 6px 10px; border-radius: 8px; font-size: 0.74rem; border: 1px solid rgba(255,255,255,0.06);">
                <span style="color: #8e8e9c;">مدت مطالعه:</span>
                <strong style="color: #e4e4e7; margin-right: 4px;">${me(G)}</strong>
              </div>
              <div style="background: #1f2029; padding: 6px 10px; border-radius: 8px; font-size: 0.74rem; border: 1px solid rgba(255,255,255,0.06);">
                <span style="color: #8e8e9c;">تست‌ها:</span>
                <strong style="color: #e4e4e7; margin-right: 4px;">${V}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 📜 4. RECENT FOCUS SESSIONS & TEST LOGS (Collapsible Accordion) -->
      <div class="glass-panel" style="padding: 10px 14px; margin-bottom: 12px; border: 1px solid rgba(255, 255, 255, 0.07); background: rgba(22, 23, 29, 0.75); border-radius: 14px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
          <div onclick="if(window.toggleRecentSessionsAccordion) window.toggleRecentSessionsAccordion();" style="display: flex; align-items: center; gap: 8px; cursor: pointer; flex: 1; user-select: none;">
            <span style="font-size: 1rem;">📜</span>
            <div style="display: flex; align-items: center; gap: 6px;">
              <h3 style="margin: 0; font-size: 0.88rem; font-weight: 700; color: #e4e4e7;">
                آخرین پارت‌های مطالعه و تست‌ها
              </h3>
              <span style="font-size: 0.65rem; background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08); padding: 1px 6px; border-radius: 6px; font-family: 'Outfit'; font-weight: 700;">
                ${A.length} پارت
              </span>
            </div>
            <span style="font-size: 0.75rem; color: #7c3aed; margin-right: 4px;">
              ${Ie?"▲":"▼"}
            </span>
          </div>

          <div style="display: flex; gap: 6px;">
            <button onclick="if(window.openManualActivityLogModal){ window.openManualActivityLogModal(); } else { window.appState.activeModal = 'manualLog'; window.renderApp(); }" class="btn-secondary" style="padding: 4px 8px; font-size: 0.7rem; font-weight: 600; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); color: #a1a1aa; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 3px;">
              <span>➕</span> ثبت دستی
            </button>
            <button onclick="window.appState.activeModal = 'focus'; window.renderApp();" class="btn-primary" style="padding: 4px 10px; font-size: 0.7rem; font-weight: 600; background: #7c3aed; border-radius: 6px; cursor: pointer; display: flex; align-items: center; gap: 3px; border: none; color: white;">
              <span>🎯</span> شروع
            </button>
          </div>
        </div>

        ${Ie?`
          <div style="margin-top: 10px; animation: fadeIn 0.2s ease;">
            ${A.length===0?`
              <div style="text-align: center; padding: 18px 12px; background: #1f2029; border: 1px dashed rgba(255, 255, 255, 0.08); border-radius: 10px;">
                <div style="font-size: 1.5rem; margin-bottom: 4px;">⏱️</div>
                <div style="color: #fff; font-size: 0.84rem; font-weight: 700; margin-bottom: 2px;">هنوز پارت مطالعه‌ای ثبت نشده است</div>
                <p style="color: #8e8e9c; font-size: 0.7rem; margin: 0 auto; line-height: 1.4;">
                  از دکمه شروع پارت یا ثبت دستی برای ثبت زمان و تست‌های خود استفاده کنید.
                </p>
              </div>
            `:`
              <div style="display: flex; flex-direction: column; gap: 6px;">
                ${A.map(O=>{const H=O.type==="non-study"||!O.isStudy;return`
                  <div style="background: #1f2029; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 8px 10px; display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
                    <div style="display: flex; align-items: center; gap: 8px; flex: 1; min-width: 180px;">
                      <span style="font-size: 0.95rem; flex-shrink: 0;">${O.icon||(H?"☕":"📚")}</span>
                      <div style="overflow: hidden;">
                        <div style="display: flex; align-items: center; gap: 5px;">
                          <strong style="font-size: 0.8rem; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                            ${O.subject||(H?"فعالیت روزمره":"پارت مطالعه")}
                          </strong>
                          <span style="font-size: 0.62rem; padding: 0.5px 4px; border-radius: 4px; background: #16171d; color: #8e8e9c; border: 1px solid rgba(255,255,255,0.06); white-space: nowrap;">
                            ${O.categoryTitle||O.category||(H?"غیردرسی":"درسی")}
                          </span>
                        </div>
                        ${O.note?`
                          <span style="font-size: 0.66rem; color: #a1a1aa; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block;">
                            📝 ${O.note}
                          </span>
                        `:""}
                      </div>
                    </div>

                    <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                      <span style="font-size: 0.72rem; font-weight: 700; color: #e4e4e7; background: #16171d; padding: 2px 6px; border-radius: 6px; font-family: 'Outfit';">
                        ⏱️ ${me(O.duration||O.minutes||1)}
                      </span>
                      ${!H&&(O.testCount>0||O.tests>0)?`
                        <span style="font-size: 0.72rem; font-weight: 700; color: #a1a1aa; background: #16171d; padding: 2px 6px; border-radius: 6px; font-family: 'Outfit';">
                          🎯 ${O.testCount||O.tests} تست${O.testPercentage!=null?` | 📊 ${O.testPercentage}%`:""}
                        </span>
                      `:""}
                      <span style="font-size: 0.65rem; color: #71717a; font-family: 'Outfit';">${O.dateStr||O.date||""}</span>
                      <button onclick="if(window.deleteFocusSession){ window.deleteFocusSession('${O.id}'); }" style="background: none; border: none; color: #ef4444; opacity: 0.6; cursor: pointer; padding: 2px 4px; font-size: 0.72rem;" title="حذف">
                        ✕
                      </button>
                    </div>
                  </div>
                `}).join("")}
              </div>
            `}
          </div>
        `:""}
      </div>

      <!-- 📊 1 & 2. Collapsible Weekly Performance Charts (Study Time & Test Count) -->
      <div class="glass-panel" style="padding: 10px 14px; margin-bottom: 12px; border: 1px solid rgba(255, 255, 255, 0.07); background: #16171d; border-radius: 14px;">
        <div onclick="if(window.toggleChartsAccordion) window.toggleChartsAccordion();" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; user-select: none;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1.1rem;">📊</span>
            <div>
              <h3 style="margin: 0; font-size: 0.9rem; font-weight: 700; color: #e4e4e7;">نمودارهای عملکرد هفتگی</h3>
              <span style="font-size: 0.7rem; color: #8e8e9c;">مقایسه زمان مطالعه (${me(de)}) و تست‌ها (${B} تست)</span>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 0.72rem; color: #7c3aed; font-weight: 700;">
            <span>${oe?"بستن 🔼":"مشاهده نمودارها 🔽"}</span>
          </div>
        </div>

        ${oe?`
          <div style="margin-top: 12px; display: flex; flex-direction: column; gap: 12px; animation: fadeIn 0.2s ease;">
            <!-- Weekly Study Minutes Bar Chart -->
            <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <div style="display: flex; align-items: center; gap: 6px;">
                  <span style="font-size: 0.95rem;">⏱️</span>
                  <span style="font-size: 0.82rem; font-weight: 700; color: #e4e4e7;">میزان مطالعه روزانه هفته</span>
                </div>
                <span style="font-size: 0.68rem; font-weight: 600; color: #a1a1aa; background: #1f2029; padding: 2px 6px; border-radius: 6px;">
                  مجموع: ${me(de)}
                </span>
              </div>
              <div style="display: flex; align-items: flex-end; justify-content: space-between; height: 120px; padding: 4px; gap: 6px; border-bottom: 1px solid rgba(255,255,255,0.06);">
                ${je.map((O,H)=>{const ie=R[H]||0,ye=H===I,Me=Math.max(480,Math.ceil(Math.max(...R,60))),he=ie>0?Math.min(100,Math.max(6,Math.round(ie/Me*100))):0;return`
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end;">
                      <span style="font-size: 0.62rem; font-weight: 600; font-family: 'Outfit'; color: ${ye?"#7c3aed":"#8e8e9c"}; margin-bottom: 2px;">
                        ${ie>0?me(ie):"۰"}
                      </span>
                      <div style="width: 100%; max-width: 22px; height: ${he}%; background: ${ye?"#7c3aed":"#1f2029"}; border: 1px solid rgba(255,255,255,0.08); border-radius: 6px 6px 0 0; transition: height 0.4s ease;"></div>
                      <span style="font-size: 0.68rem; font-weight: 600; color: ${ye?"#e4e4e7":"#8e8e9c"}; margin-top: 4px;">
                        ${O.substring(0,3)}
                      </span>
                    </div>
                  `}).join("")}
              </div>
            </div>

            <!-- Weekly Test Count Bar Chart -->
            <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <div style="display: flex; align-items: center; gap: 6px;">
                  <span style="font-size: 0.95rem;">📈</span>
                  <span style="font-size: 0.82rem; font-weight: 700; color: #e4e4e7;">تعداد تست‌های روزانه هفته</span>
                </div>
                <span style="font-size: 0.68rem; font-weight: 600; color: #a1a1aa; background: #1f2029; padding: 2px 6px; border-radius: 6px;">
                  مجموع: ${B} تست
                </span>
              </div>
              <div style="display: flex; align-items: flex-end; justify-content: space-between; height: 120px; padding: 4px; gap: 6px; border-bottom: 1px solid rgba(255,255,255,0.06);">
                ${je.map((O,H)=>{const ie=U[H]||0,ye=H===I,Me=Math.max(100,Math.ceil(Math.max(...U))),he=ie>0?Math.min(100,Math.max(6,Math.round(ie/Me*100))):0;return`
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end;">
                      <span style="font-size: 0.62rem; font-weight: 600; font-family: 'Outfit'; color: ${ye?"#7c3aed":"#8e8e9c"}; margin-bottom: 2px;">
                        ${ie}
                      </span>
                      <div style="width: 100%; max-width: 22px; height: ${he}%; background: ${ye?"#7c3aed":"#1f2029"}; border: 1px solid rgba(255,255,255,0.08); border-radius: 6px 6px 0 0; transition: height 0.4s ease;"></div>
                      <span style="font-size: 0.68rem; font-weight: 600; color: ${ye?"#e4e4e7":"#8e8e9c"}; margin-top: 4px;">
                        ${O.substring(0,3)}
                      </span>
                    </div>
                  `}).join("")}
              </div>
            </div>
          </div>
        `:""}
      </div>

      <!-- 🍩 3. Collapsible Weekly Days Category Breakdown Section (Default CLOSED) -->
      <div class="glass-panel" style="padding: 10px 14px; margin-bottom: 14px; border: 1px solid rgba(255, 255, 255, 0.07); background: #16171d; border-radius: 14px;">
        <div onclick="if(window.toggleWeeklyBreakdownAccordion) window.toggleWeeklyBreakdownAccordion();" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; user-select: none;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1.1rem;">📅</span>
            <div>
              <h3 style="margin: 0; font-size: 0.9rem; font-weight: 700; color: #e4e4e7;">تحلیل و تفکیک دروس روزهای هفته</h3>
              <span style="font-size: 0.7rem; color: #8e8e9c;">نمودار دایره‌ای و تفکیک ساعات دروس برای شنبه تا جمعه</span>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 0.72rem; color: #7c3aed; font-weight: 700;">
            <span>${pe?"بستن 🔼":"مشاهده و تحلیل 🔽"}</span>
          </div>
        </div>

        ${pe?`
          <div style="margin-top: 12px; animation: fadeIn 0.2s ease;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px;">
              ${we.map(O=>`
                <div style="background: #1f2029; border: 1px solid ${O.isToday?"rgba(124, 58, 237, 0.4)":"rgba(255, 255, 255, 0.06)"}; border-radius: 12px; padding: 10px 12px; display: flex; flex-direction: column; align-items: center; transition: transform 0.2s ease;">
                  
                  <!-- Card Header: Day Name & Date + Active Badge -->
                  <div style="width: 100%; display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; border-bottom: 1px solid rgba(255, 255, 255, 0.04); padding-bottom: 6px;">
                    <span style="font-size: 0.8rem; font-weight: 700; color: ${O.isToday?"#e4e4e7":"#a1a1aa"};">
                      ${O.dayDateFull}
                    </span>
                    ${O.isToday?'<span style="font-size: 0.65rem; background: #7c3aed; color: #ffffff; padding: 1px 6px; border-radius: 6px; font-weight: 700;">امروز</span>':""}
                  </div>
                  
                  <!-- Donut Chart & Center Stats -->
                  <div style="position: relative; width: 68px; height: 68px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
                    <svg width="68" height="68" viewBox="0 0 60 60" style="position: absolute; overflow: visible;">
                      <circle cx="30" cy="30" r="26" fill="none" stroke="rgba(255, 255, 255, 0.06)" stroke-width="7" />
                      ${O.hasData?O.arcs:""}
                    </svg>
                    <div style="z-index: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2px;">
                      <span style="font-size: 0.72rem; font-weight: 800; font-family: 'Outfit'; color: ${O.hasData?"#e4e4e7":"var(--text-muted)"}; line-height: 1.2;">${O.studyMinutes>0?me(O.studyMinutes):"۰ دقیقه"}</span>
                    </div>
                  </div>

                  <!-- Activity Legend (راهنمای فعالیت‌ها) -->
                  <div style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.04); padding-top: 6px; margin-top: 2px; display: flex; flex-direction: column; gap: 4px;">
                    ${O.legendItems.length>0?O.legendItems.map(H=>`
                      <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.7rem; gap: 4px;">
                        <div style="display: flex; align-items: center; gap: 5px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                          <span style="width: 6px; height: 6px; border-radius: 50%; background: ${H.color}; flex-shrink: 0;"></span>
                          <span style="color: #e4e4e7; font-weight: 600; overflow: hidden; text-overflow: ellipsis;">${H.title}</span>
                        </div>
                        <span style="color: #8e8e9c; font-weight: 600; flex-shrink: 0; font-family: 'Outfit';">${me(H.minutes)}</span>
                      </div>
                    `).join(""):`
                      <div style="text-align: center; font-size: 0.68rem; color: #71717a; padding: 2px 0;">
                        بدون فعالیت
                      </div>
                    `}
                  </div>

                </div>
              `).join("")}
            </div>
          </div>
        `:""}
      </div>

    </div>
  `}catch(c){return console.error("Fatal error in renderDashboardView:",c),`
      <div class="main-container" style="direction: rtl; padding: 40px 20px; text-align: center; color: white;">
        <div class="glass-panel" style="max-width: 500px; margin: 0 auto; padding: 30px; border-radius: 20px; border: 1.5px solid #ef4444; background: rgba(30, 41, 59, 0.95);">
          <div style="font-size: 3rem; margin-bottom: 12px;">⚠️</div>
          <h2 style="margin: 0 0 10px 0; color: #f87171; font-weight: 900;">خطا در بارگذاری داشبورد</h2>
          <p style="font-size: 0.86rem; color: #cbd5e1; line-height: 1.6; margin-bottom: 20px;">
            یک خطای موقت در بازیابی داده‌ها رخ داده است. لطفاً صفحه را بارگذاری مجدد فرمایید.
          </p>
          <button onclick="window.location.reload()" class="btn-primary" style="padding: 10px 24px; border-radius: 12px; font-weight: bold; cursor: pointer;">
            🔄 بارگذاری مجدد صفحه
          </button>
        </div>
      </div>
    `}}function zt(){typeof window<"u"&&typeof window.renderApp=="function"&&window.renderApp()}typeof window<"u"&&(window.updateCharts=zt,window.updateDashboard=zt,window.renderDashboard=$o);window.plannerTaskViewMode=window.plannerTaskViewMode||"list";window.plannerPriorityFilter=window.plannerPriorityFilter||"ALL";window.plannerNewTaskPriority=window.plannerNewTaskPriority||yt;window.setPlannerTaskViewMode=o=>{window.plannerTaskViewMode=o==="matrix"?"matrix":"list",Fe()};window.setPlannerPriorityFilter=o=>{window.plannerPriorityFilter=o||"ALL",Fe()};window.setPlannerNewTaskPriority=o=>{window.plannerNewTaskPriority=o||yt};window.selectPlannerDay=o=>{const e=typeof window.appState<"u"&&window.appState?window.appState:null;e&&(e.selectedDayIndex=o),Fe()};window.changeJalaliMonth=o=>{const[e,t]=p.getTodayJalali();let n=window.jalaliViewMonth!==void 0?window.jalaliViewMonth:t-1,a=window.jalaliViewYear!==void 0?window.jalaliViewYear:e;n+=o,n<0?(n=11,a-=1):n>11&&(n=0,a+=1),window.jalaliViewMonth=n,window.jalaliViewYear=a,window.renderApp&&window.renderApp()};const $t=o=>String(o??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),ve=o=>String(o).replace(/[0-9]/g,e=>"۰۱۲۳۴۵۶۷۸۹"[e]);function Wt(o){return`
    <select onchange="window.movePlannerTaskPriority('${o.id}', this.value)"
      title="انتقال این کار به خانه دیگر ماتریس"
      style="background: rgba(15,23,42,0.85); color: #e2e8f0; border: 1px solid rgba(148,163,184,0.3); border-radius: 9px; font-size: 0.68rem; padding: 3px 5px; cursor: pointer; font-family: inherit;">
      ${Qe.map(e=>`
        <option value="${e.id}" ${o.priority===e.id?"selected":""}>${e.emoji} ${e.id}</option>
      `).join("")}
    </select>`}function Tt(o,e){return e||(e=rt(o.priority)),`
    <div id="planner-task-item-${o.id}" data-task-id="${o.id}" data-quadrant="${e.id}"
      style="display: flex; align-items: center; gap: 7px; background: rgba(15,23,42,0.45); padding: 7px 9px; border-radius: 11px; border: 1px solid rgba(148,163,184,0.14);">
      <input type="checkbox" onclick="window.togglePlannerTask('${o.id}', event)" ${o.isDone?"checked":""}
        style="width: 16px; height: 16px; accent-color: ${e.color}; cursor: pointer; flex-shrink: 0;" />
      <span class="task-text-span" style="font-size: 0.79rem; flex: 1; word-break: break-word; ${o.isDone?"text-decoration: line-through; opacity: 0.5;":""}">${$t(o.text)}</span>
      ${Wt(o)}
      <button onclick="window.deletePlannerTask('${o.id}')" style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 0.85rem; flex-shrink: 0;" title="حذف">✕</button>
    </div>`}function Yt(o){const e=rt(o.priority);return`
    <div id="planner-task-item-${o.id}" data-task-id="${o.id}" data-quadrant="${o.priority}"
      style="display: flex; align-items: center; justify-content: space-between; gap: 8px; background: ${e.softBg}; padding: 10px 14px; border-radius: 12px; border: 1px solid ${e.borderColor};">
      <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; flex: 1; min-width: 0;">
        <input type="checkbox" class="chk-toggle-daily-plan" onclick="window.togglePlannerTask('${o.id}', event)" data-id="${o.id}" ${o.isDone?"checked":""} style="width: 18px; height: 18px; accent-color: ${e.color}; flex-shrink: 0; cursor: pointer;" />
        <span class="task-text-span" style="font-size: 0.92rem; word-break: break-word; ${o.isDone?"text-decoration: line-through; opacity: 0.5;":""}">${$t(o.text)}</span>
      </label>
      <span style="background: rgba(15,23,42,0.5); border: 1px solid ${e.borderColor}; color: ${e.color}; padding: 3px 9px; border-radius: 10px; font-size: 0.68rem; font-weight: 900; white-space: nowrap;" title="${e.subtitle}">
        ${e.emoji} ${e.title}
      </span>
      ${Wt(o)}
      <button class="btn-delete-daily-plan" onclick="window.deletePlannerTask('${o.id}')" data-id="${o.id}" style="background: none; border: none; color: #ef4444; cursor: pointer; flex-shrink: 0;">✕</button>
    </div>`}function qt(o){const e=o.length;if(e===0)return"";const t=o.filter(a=>a.isDone).length,n=Math.round(t/e*100);return`
    <div style="margin-bottom: 14px; padding: 14px 16px; border-radius: 16px; border: 1.5px solid ${n===100?"#eab308":n>=70?"#10b981":"rgba(56, 189, 248, 0.35)"}; background: ${n===100?"linear-gradient(135deg, rgba(234, 179, 8, 0.18) 0%, rgba(168, 85, 247, 0.15) 100%)":"rgba(31, 32, 41, 0.8)"}; box-shadow: ${n===100?"0 0 20px rgba(234, 179, 8, 0.25)":"none"}; direction: rtl; transition: all 0.3s ease;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 34px; height: 34px; border-radius: 12px; background: ${n===100?"rgba(234, 179, 8, 0.25)":"rgba(56, 189, 248, 0.15)"}; border: 1px solid ${n===100?"#eab308":"#38bdf8"}; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">
            ${n===100?"🌟":"📊"}
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <strong style="font-size: 0.95rem; font-weight: 800; color: #ffffff;">نرخ پایبندی برنامه امروز</strong>
              ${n===100?`
                <span style="background: linear-gradient(135deg, #eab308, #ca8a04); color: #000; font-weight: 900; padding: 2px 8px; border-radius: 10px; font-size: 0.72rem; box-shadow: 0 0 10px rgba(234, 179, 8, 0.4);">
                  روز کامل و بی‌نقص 🌟
                </span>
              `:""}
            </div>
            <span style="font-size: 0.74rem; color: #a1a1aa; font-weight: 600;">
              ${ve(t)} از ${ve(e)} کار برنامه‌ریزی‌شده انجام شده است
            </span>
          </div>
        </div>

        <div style="background: #16171d; border: 1px solid ${n===100?"#eab308":n>=70?"#10b981":"#38bdf8"}; color: ${n===100?"#fde047":n>=70?"#34d399":"#38bdf8"}; padding: 4px 12px; border-radius: 12px; font-weight: 900; font-size: 0.9rem; font-family: 'Outfit', sans-serif;">
          نرخ پایبندی: ${ve(n)}٪
        </div>
      </div>

      <!-- Progress bar -->
      <div style="width: 100%; height: 8px; background: rgba(0, 0, 0, 0.4); border-radius: 6px; overflow: hidden; margin-top: 10px;">
        <div style="height: 100%; width: ${n}%; background: ${n===100?"linear-gradient(90deg, #eab308 0%, #a855f7 100%)":n>=70?"linear-gradient(90deg, #10b981 0%, #38bdf8 100%)":"linear-gradient(90deg, #38bdf8 0%, #6366f1 100%)"}; border-radius: 6px; transition: width 0.5s ease;"></div>
      </div>
    </div>
  `}function Vt(o,e){return`
    <div id="planner-priority-filters" style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 14px;">
      <button onclick="window.setPlannerPriorityFilter('ALL')"
        style="padding: 5px 12px; font-size: 0.72rem; font-weight: 800; border-radius: 11px; cursor: pointer; border: 1px solid ${e==="ALL"?"#38bdf8":"rgba(148,163,184,0.25)"}; background: ${e==="ALL"?"rgba(56,189,248,0.2)":"rgba(15,23,42,0.5)"}; color: ${e==="ALL"?"#7dd3fc":"#94a3b8"};">
        همه (${ve(o.length)})
      </button>
      ${Qe.map(t=>{const n=o.filter(i=>i.priority===t.id).length,a=e===t.id;return`
        <button onclick="window.setPlannerPriorityFilter('${t.id}')"
          style="padding: 5px 12px; font-size: 0.72rem; font-weight: 800; border-radius: 11px; cursor: pointer; border: 1px solid ${a?t.color:"rgba(148,163,184,0.25)"}; background: ${a?t.softBg:"rgba(15,23,42,0.5)"}; color: ${a?t.color:"#94a3b8"};"
          title="${t.subtitle}">
          ${t.emoji} ${t.title} (${ve(n)})
        </button>`}).join("")}
    </div>`}function Ze(o,e){const n=p.getDailyPlans(o).filter(d=>d.dayIndex===e),a=document.getElementById("planner-accordion-daily-tasks-counter");a&&(a.innerHTML=n.length>0?`<strong style="color: #38bdf8; font-size: 0.8rem; margin-right: 4px;">(${ve(n.length)} کار برای امروز)</strong>`:"");const i=document.getElementById("planner-commitment-score-banner-wrapper");i&&(i.innerHTML=qt(n));const r=document.getElementById("planner-priority-filters-container");if(r){const d=window.plannerPriorityFilter||"ALL";r.innerHTML=Vt(n,d)}Qe.forEach(d=>{const s=n.filter(y=>y.priority===d.id),l=s.filter(y=>y.isDone).length,c=document.getElementById(`quadrant-badge-${d.id}`);c&&(c.textContent=`${ve(l)}/${ve(s.length)}`)})}window.addPlannerTaskToQuadrant=o=>{const e=document.getElementById(`input-quadrant-task-${o}`);if(!e||!e.value.trim())return;const t=p.getCurrentWeek(),n=t?t.id:1,a=window.appState&&typeof window.appState.selectedDayIndex=="number"?window.appState.selectedDayIndex:(new Date().getDay()+1)%7,i=p.addDailyPlan(n,a,e.value.trim(),o);e.value="";const r=document.getElementById(`quadrant-tasks-${o}`);if(r&&window.plannerTaskViewMode==="matrix"){const d=r.querySelector(".quadrant-empty-msg");d&&d.remove();const s=document.createElement("div"),l=rt(o);s.innerHTML=Tt(i,l);const c=s.firstElementChild;r.appendChild(c),Ze(n,a)}else Fe()};window.addPlannerDailyTask=()=>{const o=document.getElementById("input-daily-plan");if(!o||!o.value.trim())return;const e=document.getElementById("select-daily-plan-priority"),t=e?e.value:window.plannerNewTaskPriority||yt,n=p.getCurrentWeek(),a=n?n.id:1,i=window.appState&&typeof window.appState.selectedDayIndex=="number"?window.appState.selectedDayIndex:(new Date().getDay()+1)%7,r=p.addDailyPlan(a,i,o.value.trim(),t);if(o.value="",window.plannerTaskViewMode==="matrix"){const s=document.getElementById(`quadrant-tasks-${t}`);if(s){const l=s.querySelector(".quadrant-empty-msg");l&&l.remove();const c=document.createElement("div"),y=rt(t);c.innerHTML=Tt(r,y);const m=c.firstElementChild;s.appendChild(m),Ze(a,i);return}}else{const s=document.getElementById("planner-list-tasks-container"),l=window.plannerPriorityFilter||"ALL";if(s&&(l==="ALL"||l===t)){const y=s.querySelector(".list-empty-msg");y&&y.remove();const m=document.createElement("div");m.innerHTML=Yt(r);const u=m.firstElementChild;s.appendChild(u),Ze(a,i);return}}Fe()};window.togglePlannerTask=(o,e=null)=>{e&&typeof e.stopPropagation=="function"&&e.stopPropagation();const t=p.getCurrentWeek(),n=t?t.id:1,a=window.appState&&typeof window.appState.selectedDayIndex=="number"?window.appState.selectedDayIndex:(new Date().getDay()+1)%7,r=p.getDailyPlans(n).find(l=>l.id==o||String(l.id)===String(o)),d=r?!r.isDone:!0;p.toggleDailyPlan(n,o),d&&window.triggerCompletionBurst&&window.triggerCompletionBurst(e);const s=document.getElementById(`planner-task-item-${o}`);if(s){const l=s.querySelector('input[type="checkbox"]');l&&(l.checked=d);const c=s.querySelector(".task-text-span");c&&(c.style.textDecoration=d?"line-through":"none",c.style.opacity=d?"0.5":"1"),Ze(n,a)}else Fe()};window.deletePlannerTask=o=>{const e=p.getCurrentWeek(),t=e?e.id:1,n=window.appState&&typeof window.appState.selectedDayIndex=="number"?window.appState.selectedDayIndex:(new Date().getDay()+1)%7;p.deleteDailyPlan(t,o);const a=document.getElementById(`planner-task-item-${o}`);if(a){const i=a.parentElement;if(a.remove(),i&&i.querySelectorAll('[id^="planner-task-item-"]').length===0){if(i.id&&i.id.startsWith("quadrant-tasks-"))i.innerHTML='<p class="quadrant-empty-msg" style="font-size: 0.74rem; color: var(--text-secondary); opacity: 0.75; margin: 6px 0;">کاری در این خانه ثبت نشده است.</p>';else if(i.id==="planner-list-tasks-container"){const s=(window.plannerPriorityFilter||"ALL")==="ALL"?"برای این روز کاری ثبت نشده است.":"در این خانه از ماتریس کاری برای این روز ثبت نشده است.";i.innerHTML=`<p class="list-empty-msg" style="font-size: 0.85rem; color: var(--text-secondary);">${s}</p>`}}Ze(t,n)}else Fe()};window.movePlannerTaskPriority=(o,e)=>{const t=p.getCurrentWeek(),n=t?t.id:1,a=window.appState&&typeof window.appState.selectedDayIndex=="number"?window.appState.selectedDayIndex:(new Date().getDay()+1)%7;p.setDailyPlanPriority(n,o,e);const i=document.getElementById(`planner-task-item-${o}`),r=window.plannerTaskViewMode==="matrix";if(i&&r){const d=i.parentElement,s=document.getElementById(`quadrant-tasks-${e}`);if(s){const l=s.querySelector(".quadrant-empty-msg");l&&l.remove(),i.setAttribute("data-quadrant",e);const c=i.querySelector("select");c&&(c.value=e);const y=rt(e),m=i.querySelector('input[type="checkbox"]');m&&(m.style.accentColor=y.color),s.appendChild(i),d&&d.querySelectorAll('[id^="planner-task-item-"]').length===0&&(d.innerHTML='<p class="quadrant-empty-msg" style="font-size: 0.74rem; color: var(--text-secondary); opacity: 0.75; margin: 6px 0;">کاری در این خانه ثبت نشده است.</p>'),Ze(n,a);return}}Fe()};window.toggleWeeklyGoal=(o,e=null)=>{e&&typeof e.stopPropagation=="function"&&e.stopPropagation();const t=p.getCurrentWeek(),n=t?t.id:1,i=p.getWeeklyGoals(n).find(s=>s.id==o||String(s.id)===String(o)),r=i?!i.isDone:!0;p.toggleWeeklyGoal(n,o),r&&window.triggerCompletionBurst&&window.triggerCompletionBurst(e);const d=document.getElementById(`weekly-goal-item-${o}`);if(d){const s=d.querySelector('input[type="checkbox"]');s&&(s.checked=r);const l=d.querySelector(".weekly-goal-text");l&&(l.style.textDecoration=r?"line-through":"none",l.style.opacity=r?"0.5":"1");return}window.renderApp&&window.renderApp()};function Kt(o){return`
    <div id="weekly-goal-item-${o.id}" style="display: flex; align-items: center; justify-content: space-between; background: #1f2029; padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06);">
      <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; flex: 1;">
        <input type="checkbox" class="chk-toggle-weekly-goal" onclick="window.toggleWeeklyGoal('${o.id}', event)" data-id="${o.id}" ${o.isDone?"checked":""} style="width: 18px; height: 18px; accent-color: #7c3aed; cursor: pointer;" />
        <span class="weekly-goal-text" style="font-size: 0.92rem; ${o.isDone?"text-decoration: line-through; opacity: 0.5;":""}">${$t(o.text)}</span>
      </label>
      <button class="btn-delete-weekly-goal" onclick="window.deleteWeeklyGoal('${o.id}')" data-id="${o.id}" style="background: none; border: none; color: #ef4444; cursor: pointer;">✕</button>
    </div>`}window.addWeeklyGoal=()=>{const o=document.getElementById("input-weekly-goal");if(!o||!o.value.trim())return;const e=p.getCurrentWeek(),t=e?e.id:1,n=p.addWeeklyGoal(t,o.value.trim());o.value="";const a=document.getElementById("weekly-goals-list-container");if(a&&n){const i=a.querySelector(".weekly-goals-empty-msg");i&&i.remove();const r=document.createElement("div");r.innerHTML=Kt(n),a.appendChild(r.firstElementChild);return}window.renderApp&&window.renderApp()};window.deleteWeeklyGoal=o=>{const e=p.getCurrentWeek(),t=e?e.id:1;p.deleteWeeklyGoal(t,o);const n=document.getElementById(`weekly-goal-item-${o}`);if(n){const a=n.parentElement;n.remove(),a&&a.querySelectorAll('[id^="weekly-goal-item-"]').length===0&&(a.innerHTML='<p class="weekly-goals-empty-msg" style="font-size: 0.85rem; color: var(--text-secondary);">هیچ هدفی ثبت نشده است.</p>');return}window.renderApp&&window.renderApp()};window.applyPresetWeeklyGoals=()=>{const o=p.getCurrentWeek(),e=o?o.id:1;["مرور خلاصه نکات درس‌های هدف","حل ۲۰۰ تست آزمون جامع","تحلیل و یادداشت نکات آزمون","مرور لغات و فرمول‌ها با لایتنر"].forEach(n=>p.addWeeklyGoal(e,n)),window.showToast&&window.showToast("✅ روتین‌ها و اهداف پیشنهادی اضافه شدند","success"),window.renderApp&&window.renderApp()};window.addPlannerCountdownEvent=()=>{var a,i,r,d;const o=(a=document.getElementById("input-event-title"))==null?void 0:a.value.trim(),e=parseInt((i=document.getElementById("input-event-day"))==null?void 0:i.value),t=parseInt((r=document.getElementById("input-event-month"))==null?void 0:r.value),n=parseInt((d=document.getElementById("input-event-year"))==null?void 0:d.value);if(!o||isNaN(e)||isNaN(t)||isNaN(n)){window.showToast?window.showToast("لطفاً عنوان و تاریخ رویداد را کامل وارد کنید.","warning"):alert("لطفاً عنوان و تاریخ رویداد را کامل وارد کنید.");return}p.addCountdownEvent(o,n,t,e),window.showToast&&window.showToast("✅ رویداد جدید به روزشمار اضافه شد","success"),window.renderApp&&window.renderApp()};window.deletePlannerCountdownEvent=o=>{p.deleteCountdownEvent(o),window.showToast&&window.showToast("رویداد حذف شد","info"),window.renderApp&&window.renderApp()};window.savePlannerTargets=()=>{var a,i,r,d;const o=parseFloat((a=document.getElementById("target-daily-hours"))==null?void 0:a.value)||8,e=parseInt((i=document.getElementById("target-daily-tests"))==null?void 0:i.value)||150,t=parseFloat((r=document.getElementById("target-weekly-hours"))==null?void 0:r.value)||56,n=parseInt((d=document.getElementById("target-weekly-tests"))==null?void 0:d.value)||1e3;p.setStudyTargets({dailyStudyGoalHours:o,dailyTargetHours:o,weeklyStudyGoalHours:t,dailyTestGoalCount:e,weeklyTestGoalCount:n}),window.showToast?window.showToast("✅ اهداف با موفقیت ذخیره شدند","success",2500):alert("✅ اهداف با موفقیت ذخیره شدند"),window.renderApp&&window.renderApp()};function Qt(o,e){const t=p.getDailyPlans(e),n=window.plannerTaskViewMode==="matrix"?"matrix":"list",a=window.plannerPriorityFilter||"ALL",i=window.plannerNewTaskPriority||yt,r=t.filter(s=>s.dayIndex===o),d=a==="ALL"?r:r.filter(s=>s.priority===a);return`
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 14px;">
      <div class="card-title" style="margin: 0; color: #e4e4e7;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
          <span>ماتریس آیزنهاور (${je[o]})</span>
      </div>

      <!-- سوییچ نمای لیستی / شبکه‌ای -->
      <div style="display: flex; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 4px; gap: 4px;">
        <button onclick="window.setPlannerTaskViewMode('list')"
          style="padding: 6px 14px; font-size: 0.76rem; font-weight: 900; border: none; border-radius: 11px; cursor: pointer; background: ${n==="list"?"#7c3aed":"transparent"}; color: ${n==="list"?"white":"#94a3b8"};">
          ☰ نمای لیستی
        </button>
        <button onclick="window.setPlannerTaskViewMode('matrix')"
          style="padding: 6px 14px; font-size: 0.76rem; font-weight: 900; border: none; border-radius: 11px; cursor: pointer; background: ${n==="matrix"?"#7c3aed":"transparent"}; color: ${n==="matrix"?"white":"#94a3b8"};">
          ⊞ ماتریس ۲×۲
        </button>
      </div>
    </div>

    <!-- 📊 COMMITMENT SCORE & PERFECT DAY CELEBRATION BADGE BANNER -->
    <div id="planner-commitment-score-banner-wrapper">
      ${qt(r)}
    </div>

    <!-- Day Selector Pills -->
    <div class="day-selector" style="margin-bottom: 14px;">
      ${je.map((s,l)=>`
        <button class="day-pill planner-day-pill ${l===o?"active":""}" data-day="${l}" onclick="window.selectPlannerDay(${l})">
          ${s}
        </button>
      `).join("")}
    </div>

    <!-- Add Daily Plan Input + Priority Picker -->
    <div style="display: flex; gap: 8px; margin-bottom: 10px; flex-wrap: wrap;">
      <input type="text" id="input-daily-plan" onkeydown="if(event.key === 'Enter' || event.keyCode === 13) { event.preventDefault(); window.addPlannerDailyTask(); }" class="form-input" placeholder="عنوان کار روز ${je[o]}..." style="flex: 2; min-width: 190px;" />
      <select id="select-daily-plan-priority" class="form-input" onchange="window.setPlannerNewTaskPriority(this.value)"
        title="اولویت این کار در ماتریس آیزنهاور" style="flex: 1; min-width: 190px; cursor: pointer;">
        ${Qe.map(s=>`
          <option value="${s.id}" ${i===s.id?"selected":""}>${s.emoji} ${s.id}: ${s.title}</option>
        `).join("")}
      </select>
      <button id="btn-add-daily-plan" onclick="window.addPlannerDailyTask()" class="btn-primary" style="width: auto; padding: 0 20px; white-space: nowrap;">افزودن به ${je[o]}</button>
    </div>

    <!-- فیلتر ربع‌ها -->
    <div id="planner-priority-filters-container">
      ${Vt(r,a)}
    </div>

    ${n==="matrix"?`
    <!-- ⊞ نمای ماتریس ۲×۲ آیزنهاور -->
    <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px;" dir="rtl">
      ${Qe.map(s=>{const l=r.filter(y=>y.priority===s.id),c=l.filter(y=>y.isDone).length;return`
        <div style="background: ${s.softBg}; border: 1.5px solid ${s.borderColor}; border-radius: 18px; padding: 14px; display: flex; flex-direction: column; min-height: 190px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 10px;">
            <div>
              <strong style="font-size: 0.88rem; color: ${s.color}; display: block;">${s.emoji} ${s.id}: ${s.title}</strong>
              <span style="font-size: 0.68rem; color: var(--text-secondary);">${s.subtitle}</span>
            </div>
            <span id="quadrant-badge-${s.id}" style="background: ${s.softBg}; border: 1px solid ${s.borderColor}; color: ${s.color}; padding: 3px 9px; border-radius: 10px; font-size: 0.68rem; font-weight: 900; white-space: nowrap;">
              ${ve(c)}/${ve(l.length)}
            </span>
          </div>

          <div id="quadrant-tasks-${s.id}" class="quadrant-task-list" style="display: flex; flex-direction: column; gap: 6px; flex: 1; margin-bottom: 10px; max-height: 350px; overflow-y: auto;">
            ${l.length===0?'<p class="quadrant-empty-msg" style="font-size: 0.74rem; color: var(--text-secondary); opacity: 0.75; margin: 6px 0;">کاری در این خانه ثبت نشده است.</p>':l.map(y=>Tt(y,s)).join("")}
          </div>

          <div style="display: flex; gap: 6px;">
            <input type="text" id="input-quadrant-task-${s.id}" class="form-input"
              placeholder="کار جدید در «${s.title}»..."
              onkeydown="if(event.key === 'Enter' || event.keyCode === 13) { event.preventDefault(); window.addPlannerTaskToQuadrant('${s.id}'); }"
              style="flex: 1; min-width: 0; font-size: 0.76rem; padding: 7px 10px;" />
            <button onclick="window.addPlannerTaskToQuadrant('${s.id}')"
              style="padding: 7px 12px; font-size: 0.76rem; font-weight: 900; color: white; background: ${s.color}; border: none; border-radius: 11px; cursor: pointer; white-space: nowrap;"
              title="افزودن کار به همین خانه">＋</button>
          </div>
        </div>`}).join("")}
    </div>
    `:`
    <!-- ☰ نمای لیستی با برچسب اولویت -->
    <div id="planner-list-tasks-container" style="display: flex; flex-direction: column; gap: 8px; max-height: 450px; overflow-y: auto;">
      ${d.length===0?`<p class="list-empty-msg" style="font-size: 0.85rem; color: var(--text-secondary);">${a==="ALL"?"برای این روز کاری ثبت نشده است.":"در این خانه از ماتریس کاری برای این روز ثبت نشده است."}</p>`:d.map(s=>Yt(s)).join("")}
    </div>
    `}
  `}function Fe(){const o=document.getElementById("eisenhower-matrix-section");if(!o){window.renderApp&&window.renderApp();return}const e=typeof window<"u"&&(window.scrollY||window.pageYOffset)||0,t=new Map;o.querySelectorAll('.quadrant-task-list, #planner-list-tasks-container, [id^="quadrant-tasks-"]').forEach(d=>{d.id&&t.set(d.id,d.scrollTop)});const a=p.getCurrentWeek(),i=a?a.id:1,r=window.appState&&typeof window.appState.selectedDayIndex=="number"?window.appState.selectedDayIndex:(new Date().getDay()+1)%7;o.innerHTML=Qt(r,i),typeof window<"u"&&window.scrollTo(window.scrollX,e),t.forEach((d,s)=>{const l=document.getElementById(s);l&&(l.scrollTop=d)}),requestAnimationFrame(()=>{typeof window<"u"&&window.scrollTo(window.scrollX,e),t.forEach((d,s)=>{const l=document.getElementById(s);l&&(l.scrollTop=d)})})}window.updateEisenhowerMatrixSectionDOM=Fe;function pn(o=0,e={}){const{plannerAccordions:t={countdowns:!1,targets:!1,weeklyGoals:!1,dailyMatrix:!1}}=e,n=p.getCurrentWeek(),a=n?n.id:1,i=p.getWeeklyGoals(a),r=p.getDailyPlans(a),d=p.getStudyTargets(),s=p.getCountdownEvents()||[],[l,c,y]=p.getTodayJalali(),m=(new Date().getDay()+1)%7,u=je[m],b=window.jalaliViewMonth!==void 0?window.jalaliViewMonth:c-1,g=window.jalaliViewYear!==void 0?window.jalaliViewYear:l,f=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],x=f[c-1],w=b<6?31:b<11?30:29,k=(p.jalaliToJdn(g,b+1,1)+2)%7,$=r.filter(M=>M.dayIndex===o);return`
    <div class="main-container">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <div>
          <h2 style="font-size: 1.3rem; font-weight: 800;">برنامه‌ریزی و محاسبات علمی</h2>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">تنظیم اهداف هفته، برنامه‌های روزانه و محاسبه درصد آزمون‌ها</p>
        </div>
      </div>

      <div class="dashboard-grid">
        <!-- 📅 Professional Jalali Shamsi Calendar Card -->
        <div class="glass-panel" style="padding: 20px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 10px;">
            <div>
              <div class="card-title" style="color: #e4e4e7; margin: 0;">
                📅 تقویم حرفه‌ای شمسی (جلالی)
              </div>
              <div style="font-size: 0.85rem; color: var(--text-secondary); font-weight: bold; margin-top: 4px;">
                📌 امروز: ${u} ${ve(y)} ${x} ${ve(l)}
              </div>
            </div>
            
            <div style="display: flex; gap: 8px; align-items: center;">
              <button id="btn-jalali-prev-month" onclick="window.changeJalaliMonth(-1)" class="btn-header-action" style="padding: 4px 10px; font-weight: bold; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); color: #a1a1aa;">◀ ماه قبل</button>
              <span style="font-weight: 900; font-size: 0.95rem; color: #e4e4e7;">${f[b]} ${ve(g)}</span>
              <button id="btn-jalali-next-month" onclick="window.changeJalaliMonth(1)" class="btn-header-action" style="padding: 4px 10px; font-weight: bold; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); color: #a1a1aa;">ماه بعد ▶</button>
            </div>
          </div>

          <!-- Days of Week Header -->
          <div style="display: grid; grid-template-columns: repeat(7, 1fr); text-align: center; gap: 4px; font-size: 0.8rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 10px; background: #1f2029; padding: 8px 0; border-radius: 10px;">
            <span>ش</span><span>ی</span><span>د</span><span>س</span><span>چ</span><span>پ</span><span>ج</span>
          </div>

          <!-- 31 Days Grid with Exact Weekday Alignment -->
          <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; text-align: center;">
            ${Array.from({length:k}).map(()=>`
              <div style="padding: 10px 4px; opacity: 0.15; font-size: 0.8rem;">•</div>
            `).join("")}
            ${Array.from({length:w}).map((M,I)=>{const D=I+1,T=D===y&&b===c-1&&g===l,N=(k+I)%7,C=je[N],P=String(b+1).padStart(2,"0"),L=String(D).padStart(2,"0"),q=`${g}/${P}/${L}`,J=(p.getStudyMinutesByDate(q)||0)/60,G=J>0?J%1===0?J.toFixed(0):J.toFixed(1):"0";let Q="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); color: #71717a;",V='<div style="width: 4px; height: 4px; border-radius: 50%; background: rgba(255, 255, 255, 0.15); margin: 3px auto 0;"></div>';return J>=1&&J<3?(Q="background: rgba(16, 185, 129, 0.18); border: 1px solid rgba(16, 185, 129, 0.35); color: #6ee7b7;",V=`<div style="font-size: 0.68rem; margin-top: 2px; color: #6ee7b7; font-weight: 800;">${ve(G)}h</div>`):J>=3&&J<6?(Q="background: rgba(16, 185, 129, 0.45); border: 1px solid rgba(16, 185, 129, 0.7); color: #a7f3d0; box-shadow: 0 0 10px rgba(16, 185, 129, 0.25);",V=`<div style="font-size: 0.68rem; margin-top: 2px; color: #a7f3d0; font-weight: 900;">${ve(G)}h</div>`):J>=6?(Q="background: linear-gradient(135deg, #10b981 0%, #059669 100%); border: 1px solid #34d399; color: #ffffff; box-shadow: 0 0 14px rgba(16, 185, 129, 0.5);",V=`<div style="font-size: 0.68rem; margin-top: 2px; color: #ffffff; font-weight: 900; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">${ve(G)}h</div>`):J>0&&J<1&&(Q="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); color: #6ee7b7;",V=`<div style="font-size: 0.68rem; margin-top: 2px; color: #6ee7b7; font-weight: 700;">${ve(G)}h</div>`),`
                <div class="jalali-day-cell ${T?"active-today":""}"
                  onclick="if(window.openJalaliDayDetailsModal) window.openJalaliDayDetailsModal('${q}');"
                  style="padding: 8px 4px; border-radius: 12px; font-size: 0.85rem; font-family: 'Outfit'; font-weight: bold; cursor: pointer; transition: all 0.15s ease; ${Q} ${T?"outline: 2.5px solid #38bdf8; outline-offset: 1px;":""}"
                  onmouseenter="this.style.transform='scale(1.06)'"
                  onmouseleave="this.style.transform='scale(1)'"
                  title="روز ${ve(D)} ${f[b]} (${C}) - ${J>0?ve(G)+" ساعت مطالعه":"بدون مطالعه"}">
                  <div>${ve(D)} ${T?"📍":""}</div>
                  ${V}
                </div>
              `}).join("")}
          </div>

          <!-- Jalali Heatmap Legend -->
          <div style="display: flex; align-items: center; justify-content: flex-end; gap: 10px; font-size: 0.74rem; color: #a1a1aa; margin-top: 12px; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 10px;">
            <span style="font-weight: bold; color: #cbd5e1;">هیت‌مپ مطالعه:</span>
            <div style="display: flex; align-items: center; gap: 4px;">
              <span style="width: 12px; height: 12px; border-radius: 4px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06);"></span>
              <span>۰h</span>
            </div>
            <div style="display: flex; align-items: center; gap: 4px;">
              <span style="width: 12px; height: 12px; border-radius: 4px; background: rgba(16, 185, 129, 0.18); border: 1px solid rgba(16, 185, 129, 0.35);"></span>
              <span>۱-۳h</span>
            </div>
            <div style="display: flex; align-items: center; gap: 4px;">
              <span style="width: 12px; height: 12px; border-radius: 4px; background: rgba(16, 185, 129, 0.45); border: 1px solid rgba(16, 185, 129, 0.7);"></span>
              <span>۳-۶h</span>
            </div>
            <div style="display: flex; align-items: center; gap: 4px;">
              <span style="width: 12px; height: 12px; border-radius: 4px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border: 1px solid #34d399;"></span>
              <span>۶h+</span>
            </div>
          </div>
        </div>

        <!-- ⏳ ACCORDION: Jalali Day Counter & Exam Countdown -->
        <div class="glass-panel" style="padding: 0; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; border-radius: 16px; overflow: hidden; transition: all 0.2s ease;">
          <button type="button" class="btn-planner-accordion-toggle" data-key="countdowns" style="width: 100%; padding: 14px 18px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
            <div style="display: flex; align-items: center; gap: 8px; font-size: 0.92rem; font-weight: 800; color: #e4e4e7;">
              <span style="font-size: 1.1rem;">⏳</span>
              <span>روزشمار رویدادها و آزمون‌ها ${s.length>0?`<strong style="color: #f59e0b; font-size: 0.8rem; margin-right: 4px;">(${s.length} رویداد فعال)</strong>`:""}</span>
            </div>
            <span style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${t.countdowns?"180deg":"0deg"});">▼</span>
          </button>

          ${t.countdowns?`
            <div style="padding: 16px 18px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
              <!-- Add Event Form -->
              <div style="display: flex; gap: 8px; margin-bottom: 14px; flex-wrap: wrap;">
                <input type="text" id="input-event-title" class="form-input" placeholder="عنوان آزمون (مثلاً: کنکور سراسری ۱۴۰۵)" style="flex: 2; min-width: 180px;" />
                <input type="number" id="input-event-day" class="form-input" placeholder="روز" style="flex: 1; min-width: 60px; text-align: center; font-family: 'Outfit';" min="1" max="31" />
                <input type="number" id="input-event-month" class="form-input" placeholder="ماه" style="flex: 1; min-width: 60px; text-align: center; font-family: 'Outfit';" min="1" max="12" />
                <input type="number" id="input-event-year" class="form-input" placeholder="سال" style="flex: 1; min-width: 70px; text-align: center; font-family: 'Outfit';" value="1405" />
                <button id="btn-add-countdown-event" onclick="window.addPlannerCountdownEvent()" class="btn-primary" style="width: auto; padding: 0 16px; background: #7c3aed;">+ افزودن رویداد</button>
              </div>

              <!-- List of Countdowns -->
              <div style="display: flex; flex-direction: column; gap: 8px;">
                ${s.length===0?'<p style="font-size: 0.85rem; color: var(--text-secondary);">هیچ رویدادی در روزشمار ثبت نشده است.</p>':""}
                ${s.map(M=>`
                  <div style="display: flex; justify-content: space-between; align-items: center; background: #1f2029; padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);">
                    <div>
                      <strong style="font-size: 0.92rem; color: #e4e4e7;">🎯 ${M.title}</strong>
                      <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">تاریخ: ${M.jy}/${M.jm}/${M.jd}</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span style="background: #16171d; color: #a1a1aa; border: 1px solid rgba(255,255,255,0.08); padding: 4px 10px; border-radius: 12px; font-weight: 800; font-size: 0.8rem; font-family: 'Outfit';">
                        ⏳ روزشمار فعال
                      </span>
                      <button class="btn-delete-countdown-item" onclick="window.deletePlannerCountdownEvent('${M.id}')" data-id="${M.id}" style="background: none; border: none; color: #ef4444; cursor: pointer;">🗑️</button>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          `:""}
        </div>

        <!-- 🎯 ACCORDION: Target Settings Card -->
        <div class="glass-panel" style="padding: 0; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; border-radius: 16px; overflow: hidden; transition: all 0.2s ease;">
          <button type="button" class="btn-planner-accordion-toggle" data-key="targets" style="width: 100%; padding: 14px 18px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
            <div style="display: flex; align-items: center; gap: 8px; font-size: 0.92rem; font-weight: 800; color: #e4e4e7;">
              <span style="font-size: 1.1rem;">🎯</span>
              <span>تنظیم اهداف مطالعه و تست روزانه/هفتگی</span>
            </div>
            <span style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${t.targets?"180deg":"0deg"});">▼</span>
          </button>

          ${t.targets?`
            <div style="padding: 16px 18px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 12px;">
                <div class="input-group">
                  <label class="input-label">هدف ساعت روزانه</label>
                  <input type="number" id="target-daily-hours" class="form-input" value="${d.dailyStudyGoalHours||8}" step="0.5" />
                </div>
                <div class="input-group">
                  <label class="input-label">هدف تست روزانه</label>
                  <input type="number" id="target-daily-tests" class="form-input" value="${d.dailyTestGoalCount||150}" />
                </div>
                <div class="input-group">
                  <label class="input-label">هدف ساعت هفتگی</label>
                  <input type="number" id="target-weekly-hours" class="form-input" value="${d.weeklyStudyGoalHours||56}" />
                </div>
                <div class="input-group">
                  <label class="input-label">هدف تست هفتگی</label>
                  <input type="number" id="target-weekly-tests" class="form-input" value="${d.weeklyTestGoalCount||1e3}" />
                </div>
              </div>

              <button id="btn-save-targets" onclick="window.savePlannerTargets()" class="btn-primary" style="margin-top: 6px; background: #7c3aed;">ذخیره اهداف جدید</button>
            </div>
          `:""}
        </div>
      </div>

      <!-- ☑️ ACCORDION: Weekly Goals Section -->
      <div class="glass-panel" style="padding: 0; margin-bottom: 20px; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; border-radius: 16px; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-planner-accordion-toggle" data-key="weeklyGoals" style="width: 100%; padding: 14px 18px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.92rem; font-weight: 800; color: #e4e4e7;">
            <span style="font-size: 1.1rem;">☑️</span>
            <span>اهداف کلیدی هفته ${i.length>0?`<strong style="color: #c4b5fd; font-size: 0.8rem; margin-right: 4px;">(${i.length} هدف)</strong>`:""}</span>
          </div>
          <span style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${t.weeklyGoals?"180deg":"0deg"});">▼</span>
        </button>

        ${t.weeklyGoals?`
          <div style="padding: 16px 18px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
              <div class="card-title" style="margin: 0; color: #e4e4e7;">
                <span>لیست اهداف هفتگی</span>
              </div>

              <div style="display: flex; gap: 8px;">
                <button id="btn-apply-preset-routine" onclick="window.applyPresetWeeklyGoals()" class="btn-header-action" style="font-size: 0.78rem; background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08);">
                  ⚡ افزودن روتین و اهداف پیشنهادی
                </button>
              </div>
            </div>

            <!-- Add Weekly Goal Input -->
            <div style="display: flex; gap: 8px; margin-bottom: 14px;">
              <input type="text" id="input-weekly-goal" onkeydown="if(event.key === 'Enter' || event.keyCode === 13) { event.preventDefault(); window.addWeeklyGoal(); }" class="form-input" placeholder="عنوان هدف هفتگی (مثلاً: تمام کردن فصل ۳ زیست دهم)..." />
              <button id="btn-add-weekly-goal" onclick="window.addWeeklyGoal()" class="btn-primary" style="width: auto; padding: 0 20px; white-space: nowrap; background: #7c3aed;">افزودن</button>
            </div>

            <div id="weekly-goals-list-container" style="display: flex; flex-direction: column; gap: 8px;">
              ${i.length===0?'<p class="weekly-goals-empty-msg" style="font-size: 0.85rem; color: var(--text-secondary);">هیچ هدفی ثبت نشده است.</p>':""}
              ${i.map(M=>Kt(M)).join("")}
            </div>
          </div>
        `:""}
      </div>
      
      <!-- ⚡ ACCORDION: Daily Plans + Eisenhower Matrix -->
      <div class="glass-panel" style="padding: 0; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; border-radius: 16px; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-planner-accordion-toggle" data-key="dailyMatrix" style="width: 100%; padding: 14px 18px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.92rem; font-weight: 800; color: #e4e4e7;">
            <span style="font-size: 1.1rem;">⚡</span>
            <span>برنامه‌ریزی روزانه و ماتریس اولویت (آیزنهاور) <span id="planner-accordion-daily-tasks-counter">${$.length>0?`<strong style="color: #38bdf8; font-size: 0.8rem; margin-right: 4px;">(${ve($.length)} کار برای امروز)</strong>`:""}</span></span>
          </div>
          <span style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${t.dailyMatrix?"180deg":"0deg"});">▼</span>
        </button>

        ${t.dailyMatrix?`
          <div id="eisenhower-matrix-section" style="padding: 16px 18px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
            ${Qt(o,a)}
          </div>
        `:""}
      </div>
    </div>
  `}function To(o=!1){const e=p.getCategories();return`
    <div style="${o?"":"padding-bottom: 100px;"}">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 14px;">
        <div>
          <span style="font-size: 0.74rem; color: #a1a1aa;">تفکیک فعالیت‌های علمی (محاسبه در مطالعه) و غیرعلمی با رنگ‌بندی</span>
        </div>
        <button onclick="window.openActivityModal()" class="btn-primary" style="padding: 8px 16px; font-size: 0.8rem; font-weight: 800; background: #7c3aed; color: white; border: none; border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.25);">
          <span>➕</span>
          <span>فعالیت جدید</span>
        </button>
      </div>

      <!-- Categories Single-Column / Responsive List -->
      <div style="display: flex; flex-direction: column; gap: 10px;">
        ${e.map(t=>{const n=Oe(t);return`
            <div class="glass-panel" style="padding: 14px 16px; display: flex; align-items: center; justify-content: space-between; border-right: 4px solid ${t.color}; border-radius: 14px; background: #16171d; border: 1px solid rgba(255,255,255,0.06); gap: 10px; flex-wrap: wrap;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 38px; height: 38px; border-radius: 12px; background: ${t.color}20; border: 1px solid ${t.color}40; display: flex; align-items: center; justify-content: center; font-weight: 800; color: ${t.color}; font-size: 1.1rem;">
                  ${t.icon||(n?"📚":"☕")}
                </div>
                <div>
                  <strong style="font-size: 0.9rem; display: block; color: white; font-weight: 800;">${t.title}</strong>
                  <div style="display: flex; align-items: center; gap: 6px; margin-top: 3px;">
                    <span style="font-size: 0.68rem; padding: 2px 7px; border-radius: 6px; background: ${n?"rgba(56,189,248,0.15)":"rgba(245,158,11,0.15)"}; color: ${n?"#7dd3fc":"#fde68a"}; font-weight: bold; border: 1px solid ${n?"rgba(56,189,248,0.3)":"rgba(245,158,11,0.3)"};">
                      ${n?"📚 علمی (محاسبه در مطالعه)":"☕ غیرعلمی"}
                    </span>
                    ${t.recommendedTarget?`<span style="font-size: 0.68rem; color: #8e8e9c;">• ${t.recommendedTarget}</span>`:""}
                  </div>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 6px;">
                <button onclick="window.openActivityModal('${t.code}')" style="background: rgba(56,189,248,0.1); border: 1px solid rgba(56,189,248,0.25); color: #38bdf8; border-radius: 8px; padding: 5px 10px; cursor: pointer; font-size: 0.75rem; font-weight: 700;" title="ویرایش فعالیت">
                  ✏️ ویرایش
                </button>
                <button class="btn-delete-cat" data-code="${t.code}" style="background: rgba(239,68,68,0.1); border: 1px solid rgba(239,68,68,0.25); color: #ef4444; border-radius: 8px; padding: 5px 10px; cursor: pointer; font-size: 0.75rem; font-weight: 700;" title="حذف فعالیت">
                  🗑️
                </button>
              </div>
            </div>
          `}).join("")}
      </div>

    </div>
  `}if(typeof window<"u"){if(typeof window.openKonkurEstimatorModal!="function"||window.openKonkurEstimatorModal._isFallback){var Et=function(){try{var o=document.getElementById("modal-konkur-estimator")||document.getElementById("modal-rank-estimator");o&&(o.style.display="flex",o.classList.add("active"))}catch{}try{window.appState?window.appState.activeModal="rankEstimator":typeof window.openRankEstimator=="function"&&window.openRankEstimator(),typeof window.renderApp=="function"&&window.renderApp()}catch{}try{var e=document.getElementById("modal-rank-estimator")||document.getElementById("modal-konkur-estimator");e&&(e.style.display="flex",e.classList.add("active"))}catch{}};Et._isFallback=!0,typeof window.openKonkurEstimatorModal!="function"&&(window.openKonkurEstimatorModal=Et)}window.toggleCategoriesAccordion=function(){window.isCategoriesAccordionOpen=!window.isCategoriesAccordionOpen,window.renderApp&&window.renderApp()},window.toggleLeitnerAccordion=function(){window.isLeitnerAccordionOpen=!window.isLeitnerAccordionOpen;const o=document.getElementById("leitner-cards-container");o&&(o.style.display=window.isLeitnerAccordionOpen?"block":"none"),window.renderApp&&window.renderApp()},window.closeLeitnerAccordion=function(){window.isLeitnerAccordionOpen=!1;const o=document.getElementById("leitner-cards-container");o&&(o.style.display="none"),window.renderApp&&window.renderApp()},window.openLeitnerAccordion=function(){window.isLeitnerAccordionOpen=!0;const o=document.getElementById("leitner-cards-container");o&&(o.style.display="block"),window.renderApp&&window.renderApp(),setTimeout(()=>{var e;(e=document.getElementById("section-leitner-box"))==null||e.scrollIntoView({behavior:"smooth"})},60)},window.toggleAddFlashcardForm=function(o){window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.showAddForm=typeof o=="boolean"?o:!window.leitnerState.showAddForm,window.renderApp&&window.renderApp()},window.saveManualFlashcard=function(){const o=document.getElementById("input-new-fc-deck"),e=document.getElementById("input-new-fc-question"),t=document.getElementById("input-new-fc-answer"),n=o?o.value.trim():"",a=e?e.value.trim():"",i=t?t.value.trim():"";if(!a||!i){window.showToast?window.showToast("لطفاً سؤال و پاسخ را وارد کنید","error"):alert("لطفاً سؤال و پاسخ را وارد کنید");return}p.addFlashcard(a,i,n||"عمومی"),window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.showAddForm=!1,window.showToast&&window.showToast("فلش‌کارت جدید اضافه شد ✨","success"),window.renderApp&&window.renderApp()},window.flipLeitnerCard=function(){window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.isFlipped=!window.leitnerState.isFlipped,window.renderApp&&window.renderApp()},window.prevLeitnerCard=function(){window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.activeIndex=Math.max(0,window.leitnerState.activeIndex-1),window.leitnerState.isFlipped=!1,window.renderApp&&window.renderApp()},window.nextLeitnerCard=function(){window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""});let e=[...p.getFlashcards()||[]];if(window.leitnerState.filterBox==="due"){const n=Date.now();e=e.filter(a=>!a.nextReviewDate||a.nextReviewDate<=n)}else["1","2","3","4","5"].includes(String(window.leitnerState.filterBox))&&(e=e.filter(n=>String(n.box||1)===String(window.leitnerState.filterBox)));const t=e.length;t>0&&(window.leitnerState.activeIndex=(window.leitnerState.activeIndex+1)%t),window.leitnerState.isFlipped=!1,window.renderApp&&window.renderApp()},window.reviewLeitnerCard=function(o,e){p.reviewFlashcard(o,e),window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.isFlipped=!1;let n=p.getFlashcards()||[];if(window.leitnerState.filterBox==="due"){const a=Date.now();n=n.filter(i=>!i.nextReviewDate||i.nextReviewDate<=a)}else["1","2","3","4","5"].includes(String(window.leitnerState.filterBox))&&(n=n.filter(a=>String(a.box||1)===String(window.leitnerState.filterBox)));window.leitnerState.activeIndex>=n.length&&(window.leitnerState.activeIndex=Math.max(0,n.length-1)),window.showToast&&window.showToast(e?"آفرین! کارت به خانه بعدی منتقل شد ⬆️":"کارت به خانه اول برگشت 🔄",e?"success":"info"),window.renderApp&&window.renderApp()},window.filterLeitnerBox=function(o){window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.filterBox=window.leitnerState.filterBox===String(o)?"all":String(o),window.leitnerState.activeIndex=0,window.leitnerState.isFlipped=!1,window.renderApp&&window.renderApp()},window.filterLeitnerTab=function(o){window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.filterBox=o,window.leitnerState.activeIndex=0,window.leitnerState.isFlipped=!1,window.renderApp&&window.renderApp()},window.deleteLeitnerCard=function(o){if(confirm&&!confirm("آیا از حذف این فلش‌کارت مطمئن هستید؟"))return;p.deleteFlashcard(o),window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""});const e=p.getFlashcards()||[];window.leitnerState.activeIndex>=e.length&&(window.leitnerState.activeIndex=Math.max(0,e.length-1)),window.showToast&&window.showToast("فلش‌کارت حذف شد 🗑️","info"),window.renderApp&&window.renderApp()},window.seedDefaultFlashcards=function(){localStorage.removeItem("planex_flashcards"),p.getFlashcards(),window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.activeIndex=0,window.leitnerState.isFlipped=!1,window.showToast&&window.showToast("فلش‌کارت‌های نمونه بارگذاری شدند 📥","success"),window.renderApp&&window.renderApp()}}function un(){p.getThemeSettings();const o=p.getCategories()||[],e=!!window.isCategoriesAccordionOpen,t=a=>String(a).replace(/[0-9]/g,i=>"۰۱۲۳۴۵۶۷۸۹"[i]);return`
    <div class="main-container" style="padding-bottom: 90px; direction: rtl;">
      <div style="margin-bottom: 14px;">
        <h2 style="font-size: 1.05rem; font-weight: 800; color: #f8fafc; margin: 0 0 2px 0;">ابزارک‌ها</h2>
        <p style="font-size: 0.72rem; color: #8e8e9c; margin: 0;">دسترسی سریع به تمام ابزارهای کاربردی مطالعه</p>
      </div>

      <!-- 🛠️ Tools Grid (2 columns) -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 16px;">
        ${[{icon:"🧠",title:"فلش‌کارت و لایتنر",desc:"تکرار فاصله‌دار هوشمند با ۵ خانه لایتنر",action:"window.switchTab('flashcards')",color:"#a78bfa"},{icon:"📝",title:"جعبه ابزار امتحانات",desc:"برنامه‌ریزی، تخمین فصول و مرور امتحانات",action:"if(window.openExamBox) window.openExamBox(); else { window.appState.activeModal = 'examBox'; window.renderApp(); }",color:"#38bdf8"},{icon:"⏱️",title:"تایمر مطالعه",desc:"کرنومتر، پومودورو و ثبت خودکار زمان",action:"if(window.switchTab) window.switchTab(0)",color:"#f97316"},{icon:"📊",title:"معدل نهایی",desc:"محاسبه دقیق معدل کتبی، ترم و کل",action:"if(window.openGPACalculator) window.openGPACalculator(); else { window.appState.activeModal = 'gpaCalc'; window.renderApp(); }",color:"#34d399"},{icon:"🌙",title:"تنظیم خواب",desc:"برنامه‌ریزی ساعات خواب و بیداری سالم",action:"if(window.openSleepScheduler) window.openSleepScheduler(); else { window.appState.activeModal = 'sleepScheduler'; window.renderApp(); }",color:"#818cf8"},{icon:"🎯",title:"محاسبه درصد",desc:"محاسبه دقیق درصد از تست‌های صحیح و غلط",action:"if(window.openPercentCalculator) window.openPercentCalculator(); else { window.appState.activeModal = 'percentCalc'; window.renderApp(); }",color:"#fb923c"},{icon:"🏆",title:"تخمین رتبه",desc:"تخمین رتبه کنکور و تراز بر اساس درصدها",action:"window.openKonkurEstimatorModal && window.openKonkurEstimatorModal()",color:"#fbbf24"},{icon:"📅",title:"تقویم مطالعاتی",desc:"ماتریس ۲۴ ساعته مدیریت زمان و پارت‌ها",action:"if(window.switchTab) window.switchTab(1)",color:"#2dd4bf"}].map(a=>`
          <div${a.title&&a.title.includes("تخمین رتبه")?' id="card-konkur-estimator" data-action="open-konkur-estimator"':""} onclick="${a.action}" style="background: #16171d; border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; padding: 16px 14px; cursor: pointer; transition: transform 0.15s ease, border-color 0.15s ease; display: flex; flex-direction: column; justify-content: space-between; min-height: 140px; box-sizing: border-box;" onmouseenter="this.style.transform='translateY(-2px)'; this.style.borderColor='rgba(255,255,255,0.12)'" onmouseleave="this.style.transform=''; this.style.borderColor='rgba(255,255,255,0.05)'">
            <div>
              <div style="width: 40px; height: 40px; border-radius: 14px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; font-size: 1.35rem; margin-bottom: 10px;">
                ${a.icon}
              </div>
              <div style="font-size: 13px; font-weight: 700; color: #ffffff; margin-bottom: 4px;">${a.title}</div>
              <div style="font-size: 11px; color: #8e8e9c; line-height: 1.45;">${a.desc}</div>
            </div>
            <div style="font-size: 11px; font-weight: 600; color: ${a.color}; display: flex; align-items: center; gap: 3px; margin-top: 10px;">
              <span>استفاده از ابزارک</span>
              <span style="font-size: 12px; font-weight: 700;">‹</span>
            </div>
          </div>
        `).join("")}
      </div>

      <!-- 🎴 Flashcards Promo Card (opens standalone #flashcards view) -->
      ${Ao()}

      <!-- 🔄 Cloud Sync Box (Kept intact) -->
      ${function(){let a=null;try{a=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}const i=p.getUserProfile()||{};let r=(a==null?void 0:a.phone)||(a==null?void 0:a.phone_number)||i.phone||"";return r&&r.startsWith("98")?r="0"+r.slice(2):r&&r.startsWith("+98")?r="0"+r.slice(3):r&&r.length===10&&r.startsWith("9")&&(r="0"+r),typeof window<"u"&&!window.handleForceCloudSync&&(window.handleForceCloudSync=async function(){const d=document.getElementById("btn-force-cloud-sync");d&&(d.innerHTML="در حال همگام‌سازی...");try{window.personalSyncService&&typeof window.personalSyncService.pushToCloud=="function"&&await window.personalSyncService.pushToCloud(),window.showToast?window.showToast("تمامی پارت‌ها و گروه‌ها با موفقیت همگام شدند ✅","success"):alert("تمامی پارت‌ها و گروه‌ها با موفقیت همگام شدند ✅")}catch(s){console.error(s),window.showToast&&window.showToast("خطا در همگام‌سازی","error")}finally{d&&(d.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg> همگام‌سازی فوری (Force Sync)')}}),r?`
            <div style="padding: 14px 16px; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.2); background: rgba(16, 185, 129, 0.03); border-radius: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="width: 38px; height: 38px; border-radius: 12px; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">🔄</div>
                  <div>
                    <h3 style="margin: 0; font-size: 0.85rem; font-weight: 800; color: #10b981; display: flex; align-items: center; gap: 6px;">
                      همگام‌سازی ابری و چنددستگاهی
                      <span style="font-size: 0.58rem; background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 2px 6px; border-radius: 6px; font-weight: bold; border: 1px solid rgba(16, 185, 129, 0.3);">متصل و همگام با سرور ابری</span>
                    </h3>
                    <p style="margin: 3px 0 0 0; font-size: 0.72rem; color: #8e8e9c;">شماره متصل: <strong style="color: #e4e4e7; font-family: 'Outfit', monospace; letter-spacing: 1px;">${r}</strong></p>
                  </div>
                </div>
                <button id="btn-force-cloud-sync" onclick="window.handleForceCloudSync()" style="background: #10b981; color: #000; padding: 7px 14px; border-radius: 10px; font-size: 0.75rem; font-weight: 800; border: none; cursor: pointer; display: flex; align-items: center; gap: 4px; transition: transform 0.15s ease;" onmouseenter="this.style.transform='scale(1.03)'" onmouseleave="this.style.transform='scale(1)'">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg>
                  همگام‌سازی فوری (Force Sync)
                </button>
              </div>
            </div>
          `:`
            <div style="padding: 14px 16px; margin-bottom: 12px; border: 1px solid rgba(234, 179, 8, 0.2); background: rgba(234, 179, 8, 0.03); border-radius: 20px;">
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <div style="display: flex; align-items: flex-start; gap: 10px;">
                  <div style="width: 38px; height: 38px; border-radius: 12px; background: rgba(234, 179, 8, 0.1); border: 1px solid rgba(234, 179, 8, 0.2); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;">🔄</div>
                  <div>
                    <h3 style="margin: 0; font-size: 0.85rem; font-weight: 800; color: #facc15; display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                      همگام‌سازی ابری و چنددستگاهی
                      <span style="font-size: 0.58rem; background: rgba(234, 179, 8, 0.15); color: #facc15; padding: 2px 6px; border-radius: 6px; font-weight: bold; border: 1px solid rgba(234, 179, 8, 0.3);">حالت آفلاین / محلی</span>
                    </h3>
                    <p style="margin: 4px 0 0 0; font-size: 0.72rem; color: #a1a1aa; line-height: 1.6;">برای انتقال و ذخیره دائمی پارت‌های مطالعاتی و گروه‌ها در سایر دستگاه‌ها، حساب خود را از طریق ربات تلگرام متصل کنید.</p>
                  </div>
                </div>
                <button onclick="window.open('https://t.me/planex_sync_bot?start=login', '_blank')" style="background: #3b82f6; color: #fff; padding: 10px 16px; border-radius: 12px; font-size: 0.8rem; font-weight: 800; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; transition: background 0.15s ease;" onmouseenter="this.style.background='#2563eb'" onmouseleave="this.style.background='#3b82f6'">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                  اتصال به ربات تلگرام (@planex_sync_bot)
                </button>
              </div>
            </div>
          `}()}

      <!-- 📚 Collapsible Accordion Panel for "مدیریت فعالیت‌ها و دروس" (Default CLOSED) -->
      <div style="padding: 14px 16px; margin-bottom: 12px; background: #16171d; border: 1px solid rgba(255,255,255,0.06); border-radius: 20px;">
        <div onclick="window.toggleCategoriesAccordion()" 
             style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; user-select: none;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 38px; height: 38px; border-radius: 12px; background: rgba(124, 58, 237, 0.15); border: 1px solid rgba(124, 58, 237, 0.3); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: #c4b5fd;">
              📚
            </div>
            <div>
              <h3 style="margin: 0; font-size: 0.88rem; font-weight: 800; color: #f8fafc; display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                <span>مدیریت فعالیت‌ها و دروس</span>
                <span style="font-size: 0.65rem; background: rgba(124, 58, 237, 0.2); color: #c4b5fd; padding: 2px 8px; border-radius: 8px; font-weight: bold; border: 1px solid rgba(124, 58, 237, 0.35);">
                  ${t(o.length)} درس / فعالیت
                </span>
              </h3>
              <p style="margin: 3px 0 0 0; font-size: 0.7rem; color: #8e8e9c;">افزودن، ویرایش و تفکیک فعالیت‌های علمی و غیرعلمی</p>
            </div>
          </div>

          <div style="display: flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 6px 12px; border-radius: 10px;">
            <span style="font-size: 0.74rem; font-weight: 800; color: #c4b5fd;">
              ${e?"بستن 🔼":"مشاهده و مدیریت 🔽"}
            </span>
          </div>
        </div>

        ${e?`
          <div style="margin-top: 14px; padding-top: 14px; border-top: 1px solid rgba(255,255,255,0.06); animation: fadeIn 0.25s ease;">
            ${To(!0)}
          </div>
        `:""}
      </div>

      <div style="padding: 14px 16px; margin-bottom: 12px; background: #16171d; border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 38px; height: 38px; border-radius: 12px; background: rgba(255,255,255,0.04); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">💎</div>
          <div>
            <h3 style="margin: 0; font-size: 0.82rem; font-weight: 700; color: #f1f5f9; display: flex; align-items: center; gap: 6px;">
              <span>پلن‌های مشاوره اختصاصی</span>
              <span style="font-size: 0.58rem; background: rgba(253,224,71,0.1); color: #fde047; padding: 1px 6px; border-radius: 6px; font-weight: bold; border: 1px solid rgba(253,224,71,0.2);">VIP</span>
            </h3>
            <p style="margin: 2px 0 0 0; font-size: 0.68rem; color: #8e8e9c;">مشاوره خصوصی با رتبه‌های برتر</p>
          </div>
        </div>
        <button onclick="if(window.openConsultationModal) window.openConsultationModal(); else if(window.appState){ window.appState.activeModal = 'consultation'; window.renderApp(); }" style="padding: 7px 14px; font-size: 0.72rem; font-weight: 700; background: #7c3aed; border: none; border-radius: 10px; cursor: pointer; color: white;">مشاهده ✨</button>
      </div>

      <div style="padding: 14px 16px; background: #16171d; border: 1px solid rgba(255,255,255,0.05); text-align: center; border-radius: 20px;">
        <h3 style="font-size: 0.82rem; font-weight: 700; color: #38bdf8; margin: 0 0 4px 0;">📢 کانال پشتیبانی (@medicalaa)</h3>
        <p style="font-size: 0.68rem; color: #8e8e9c; margin-bottom: 10px;">دریافت آخرین آپدیت‌ها و آزمون‌ها</p>
        <a href="https://t.me/medicalaa" target="_blank" style="display: inline-block; padding: 6px 18px; font-size: 0.72rem; text-decoration: none; background: rgba(255,255,255,0.04); border: 1px solid rgba(56,189,248,0.3); color: #38bdf8; border-radius: 10px; font-weight: 700;">عضویت در تلگرام</a>
      </div>
    </div>
  `}function Ao(){const o=p.getLeitnerStats()||{total:0,due:0},e=t=>String(t).replace(/[0-9]/g,n=>"۰۱۲۳۴۵۶۷۸۹"[n]);return`
    <div id="section-leitner-box" onclick="window.switchTab('flashcards')" style="position: relative; overflow: hidden; padding: 18px 16px; margin-bottom: 12px; border-radius: 22px; cursor: pointer; background: linear-gradient(135deg, rgba(99,102,241,0.22), rgba(168,85,247,0.18)); border: 1px solid rgba(167,139,250,0.35); box-shadow: 0 8px 24px rgba(124,58,237,0.18);">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
        <div style="width: 48px; height: 48px; border-radius: 16px; background: rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; font-size: 1.6rem;">🎴</div>
        <div style="flex: 1;">
          <h3 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: #f8fafc;">🎴 فلش‌کارت و جعبه لایتنر</h3>
          <p style="margin: 4px 0 0; font-size: 0.72rem; color: #c4b5fd; line-height: 1.5;">مدیریت دسته‌ها، مرور فاصله‌دار هوشمند و بسته کارت‌های آماده</p>
        </div>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap;">
        <span style="font-size: 0.68rem; color: #e9d5ff; background: rgba(255,255,255,0.06); padding: 4px 10px; border-radius: 10px;">${e(o.total)} کارت • ${e(o.due)} آماده مرور 🔥</span>
        <button id="btn-open-flashcards" type="button" onclick="event.stopPropagation(); window.switchTab('flashcards');" style="background: linear-gradient(135deg,#6366f1,#a855f7); border: none; color: #fff; padding: 10px 18px; border-radius: 14px; font-size: 0.8rem; font-weight: 800; cursor: pointer; box-shadow: 0 4px 14px rgba(124,58,237,0.4);">ورود به جعبه لایتنر ↗</button>
      </div>
    </div>
  `}function Mo(o={}){const t=(o.articlesAccordions||{questionBankHub:!1}).questionBankHub,n=Ot.filter(a=>a.id!=="questions-1404");return`
    <div style="padding: 12px; max-width: 900px; margin: 0 auto; direction: rtl;">

      <div style="margin-bottom: 14px;">
        <h1 style="font-size: 1.15rem; font-weight: 800; color: white; margin: 0 0 2px 0; display: flex; align-items: center; gap: 6px;">
          <span>📚</span> مقالات، پلن‌های آموزشی و بانک سوالات
        </h1>
        <p style="font-size: 0.74rem; color: #8e8e9c; line-height: 1.5; margin: 0;">
          روش‌های مطالعه، تکنیک‌های علمی یادسپاری و بانک جامع آزمون‌های پرانترنی کشوری.
        </p>
      </div>

      <!-- Collapsible Header for Question Bank Hub -->
      <button class="btn-articles-accordion-toggle" data-key="questionBankHub" style="width: 100%; display: flex; align-items: center; justify-content: space-between; background: linear-gradient(135deg, rgba(124, 58, 237, 0.18) 0%, rgba(31, 32, 41, 0.8) 100%); border: 1px solid rgba(168, 85, 247, 0.35); border-radius: 12px; padding: 10px 14px; margin-bottom: 12px; color: #e9d5ff; font-weight: 700; font-size: 0.82rem; cursor: pointer; transition: all 0.2s ease;">
        <span style="display: flex; align-items: center; gap: 6px;">
          🎯 بانک جامع تست‌های پرانترنی (شامل ۱۰ دوره با پاسخ تشریحی)
        </span>
        <span style="font-size: 0.75rem; background: rgba(124, 58, 237, 0.3); color: #c4b5fd; padding: 3px 10px; border-radius: 8px; font-weight: 800;">${t?"▲ بستن":"▼ مشاهده دوره‌ها"}</span>
      </button>

      ${t?`
        <!-- 🌟 Featured Multi-Exam Hub Bento Card -->
        <div class="glass-panel article-card qb-featured-hero-card" data-article-id="questions-1404" style="position: relative; overflow: hidden; background: rgba(22, 23, 29, 0.75); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 16px; padding: 16px; margin-bottom: 14px; cursor: pointer; backdrop-filter: blur(16px); transition: all 0.2s ease;">
          
          <div style="position: relative; z-index: 2;">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 10px;">
              <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                <span style="background: #7c3aed; color: #fff; font-size: 0.68rem; font-weight: 800; padding: 2px 8px; border-radius: 6px;">
                  🔥 هاب جامع آزمون‌های پرانترنی
                </span>
                <span style="background: #1f2029; color: #c4b5fd; border: 1px solid rgba(255, 255, 255, 0.06); font-size: 0.65rem; font-weight: 700; padding: 2px 6px; border-radius: 6px;">
                  ۱۰ دوره آزمون + Bento Grid + Active Recall
                </span>
              </div>
              
              <div style="display: flex; align-items: center; gap: 4px;">
                <span style="font-size: 0.68rem; color: #38bdf8; background: #1f2029; padding: 2px 6px; border-radius: 4px; font-weight: 700;">@medicalaa</span>
                <span style="font-size: 0.68rem; color: #34d399; background: #1f2029; padding: 2px 6px; border-radius: 4px; font-weight: 700;">planexapp.ir</span>
              </div>
            </div>

            <div style="display: flex; gap: 12px; align-items: flex-start; flex-wrap: wrap;">
              <div style="width: 42px; height: 42px; border-radius: 10px; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; font-size: 1.4rem; flex-shrink: 0;">
                🩺
              </div>

              <div style="flex: 1 1 240px;">
                <h2 style="font-size: 0.96rem; font-weight: 800; color: #ffffff !important; margin: 0 0 4px 0; line-height: 1.4;">
                  بانک جامع تست‌های پرانترنی با پاسخ تشریحی و نکته کلیدی ⚡
                </h2>
                <p style="font-size: 0.74rem; color: #cbd5e1 !important; line-height: 1.5; margin: 0 0 10px 0;">
                  دسترسی به ۱۰ دوره آزمون پرانترنی قطب‌های کشوری همراه با تفکیک موضوعی، دام‌های امتحانی و حالت Active Recall.
                </p>

                <!-- Exam Periods Selector Chips in Hub -->
                <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 10px;">
                  ${no.map(a=>`
                    <button 
                      class="btn-exam-quick-chip" 
                      data-exam-id="${a.id}"
                      style="display: inline-flex; align-items: center; gap: 4px; background: #1f2029; border: 1px solid rgba(255,255,255,0.06); color: #e2e8f0; padding: 4px 8px; border-radius: 6px; font-size: 0.7rem; font-weight: 700; cursor: pointer; transition: all 0.15s ease;"
                    >
                      <span>${a.icon}</span>
                      <span>${a.title}</span>
                      <span style="font-size: 0.62rem; color: #c4b5fd; background: #16171d; padding: 0.5px 4px; border-radius: 4px; font-family: 'Outfit';">${a.questions.length}</span>
                    </button>
                  `).join("")}
                </div>

                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                  <div style="display: flex; gap: 4px; flex-wrap: wrap;">
                    <span style="font-size: 0.64rem; color: #94a3b8; background: #1f2029; padding: 2px 6px; border-radius: 4px;">🫀 داخلی</span>
                    <span style="font-size: 0.64rem; color: #94a3b8; background: #1f2029; padding: 2px 6px; border-radius: 4px;">🔪 جراحی</span>
                    <span style="font-size: 0.64rem; color: #94a3b8; background: #1f2029; padding: 2px 6px; border-radius: 4px;">👶 اطفال</span>
                    <span style="font-size: 0.64rem; color: #94a3b8; background: #1f2029; padding: 2px 6px; border-radius: 4px;">🤰 زنان</span>
                  </div>

                  <div class="btn-primary" style="width: auto; padding: 6px 14px; font-size: 0.74rem; font-weight: 700; background: #7c3aed; border: none; border-radius: 8px; color: white; display: inline-flex; align-items: center; gap: 4px; pointer-events: none;">
                    <span>ورود به بانک تست‌ها</span>
                    <span>⚡</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      `:""}

      <!-- Other Articles Grid -->
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 10px;">
        ${n.map(a=>`
          <div class="glass-panel article-card" data-article-id="${a.id}" style="padding: 0; overflow: hidden; cursor: pointer; transition: all 0.15s ease; border: 1px solid rgba(255,255,255,0.06); background: rgba(22, 23, 29, 0.75); border-radius: 12px;">
            
            <div style="padding: 12px 14px 0 14px; display: flex; align-items: center; gap: 8px;">
              <div style="width: 36px; height: 36px; border-radius: 10px; background: #1f2029; border: 1px solid rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;">
                ${a.icon}
              </div>
              <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                <span style="display: inline-block; font-size: 0.64rem; font-weight: 700; color: #c4b5fd; background: #1f2029; padding: 1px 6px; border-radius: 6px;">
                  ${a.category}
                </span>
                <span style="font-size: 0.64rem; color: #94a3b8; font-family: 'Outfit';">
                  🗓️ ${a.date}
                </span>
                ${a.downloads&&a.downloads.length>0?`
                  <span style="font-size: 0.62rem; color: #38bdf8; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.25); padding: 1px 6px; border-radius: 6px; font-weight: 700;">
                    📥 دانلود دیتا (${a.downloads.length})
                  </span>
                `:""}
              </div>
            </div>

            <div style="padding: 8px 14px 14px 14px;">
              <h3 style="font-size: 0.86rem; font-weight: 700; color: #ffffff !important; margin-bottom: 4px; line-height: 1.4;">
                ${a.title}
              </h3>
              <p style="font-size: 0.72rem; color: #cbd5e1 !important; line-height: 1.5; margin-bottom: 8px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                ${a.summary}
              </p>

              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.68rem; color: #94a3b8; display: flex; align-items: center; gap: 4px;">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  ${a.readTime} دقیقه مطالعه
                </span>
                <span style="font-size: 0.68rem; color: #c4b5fd; font-weight: 700; display: flex; align-items: center; gap: 2px;">
                  مطالعه
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </div>

          </div>
        `).join("")}
      </div>

    </div>
  `}function Xt(o){const e=["الف","ب","ج","د"],t=Array.isArray(o.options)?o.options:[],n=typeof o.correct_index=="number"?o.correct_index:e.indexOf(o.correct_option),a=o.options_analysis?Object.entries(o.options_analysis):[];return`
    <div class="trap-card glass-panel" data-qid="${o.id}" data-category="${o.category}" style="background: rgba(22, 23, 29, 0.85); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 18px 20px; margin-bottom: 20px; backdrop-filter: blur(14px); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);">
      
      <!-- Card Top Info Bar -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; border-bottom: 1px dashed rgba(255,255,255,0.08); padding-bottom: 10px;">
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <span style="background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); color: #ffffff; font-size: 0.76rem; font-weight: 800; padding: 3px 10px; border-radius: 8px; box-shadow: 0 2px 8px rgba(124, 58, 237, 0.3);">
            تست شماره ${o.id}
          </span>
          <span style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #cbd5e1; font-size: 0.72rem; font-weight: 700; padding: 2px 10px; border-radius: 8px;">
            ${o.category||"عمومی"}
          </span>
        </div>
        <span style="font-size: 0.72rem; color: #34d399; font-weight: 800; background: rgba(16, 185, 129, 0.14); border: 1px solid rgba(16, 185, 129, 0.35); padding: 3px 10px; border-radius: 8px; display: inline-flex; align-items: center; gap: 4px;">
          <span>✓</span>
          <span>کلید رسمی: گزینه ${o.correct_option}</span>
        </span>
      </div>

      <!-- Question Vignette / Scenario -->
      <div style="font-size: 0.88rem; font-weight: 600; color: #f8fafc; line-height: 1.85; margin-bottom: 14px; background: rgba(10, 11, 15, 0.5); border: 1px solid rgba(255,255,255,0.06); padding: 12px 14px; border-radius: 12px; border-right: 4px solid #7c3aed;">
        ${o.question}
      </div>

      <!-- ⚠️ دام تستی صورت سوال (Trap Box) -->
      ${o.question_trap?`
        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(244, 63, 94, 0.05) 100%); border: 1px solid rgba(239, 68, 68, 0.28); border-right: 4px solid #ef4444; border-radius: 12px; padding: 12px 14px; margin-bottom: 14px;">
          <div style="font-size: 0.8rem; font-weight: 800; color: #f87171; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
            <span style="font-size: 1rem;">⚠️</span>
            <span>دام صورت سوال و خطای شناختی داوطلب (Cognitive Trap):</span>
          </div>
          <p style="font-size: 0.78rem; color: #cbd5e1; line-height: 1.75; margin: 0;">
            ${o.question_trap}
          </p>
        </div>
      `:""}

      <!-- ۴ گزینه‌های سوال -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 8px; margin-bottom: 14px;">
        ${t.map((i,r)=>{const d=e[r]||r+1,s=r===n||d===o.correct_option;return`
            <div style="display: flex; align-items: flex-start; gap: 8px; padding: 10px 12px; border-radius: 10px; font-size: 0.78rem; line-height: 1.6; ${s?"background: rgba(16, 185, 129, 0.12); border: 1.5px solid rgba(16, 185, 129, 0.4); border-right: 4px solid #10b981; color: #6ee7b7; font-weight: 700;":"background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.07); color: #cbd5e1;"}">
              <span style="display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 6px; font-size: 0.74rem; font-weight: 800; flex-shrink: 0; ${s?"background: #10b981; color: #ffffff;":"background: rgba(255,255,255,0.08); color: #94a3b8;"}">
                ${d}
              </span>
              <span style="flex: 1;">${i}</span>
              ${s?'<span style="font-size: 0.68rem; background: #10b981; color: #ffffff; padding: 2px 6px; border-radius: 4px; margin-right: auto; font-weight: 700;">✓ پاسخ</span>':""}
            </div>
          `}).join("")}
      </div>

      <!-- 🔍 کالبدشکافی گزینه‌های الف تا د -->
      ${a.length>0?`
        <div style="background: rgba(15, 16, 22, 0.6); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 12px 14px; margin-bottom: 14px;">
          <div style="font-size: 0.78rem; font-weight: 800; color: #94a3b8; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
            <span>🔍</span>
            <span>کالبدشکافی گزینه‌های انحرافی و اهداف طراح آزمون:</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            ${a.map(([i,r])=>{const d=i===o.correct_option;return`
                <div style="font-size: 0.76rem; line-height: 1.65; padding: 4px 8px; border-radius: 6px; ${d?"background: rgba(16, 185, 129, 0.08);":""}">
                  <span style="font-weight: 800; margin-left: 4px; ${d?"color: #34d399;":"color: #f87171;"}">
                    گزینه (${i}) ${d?"★ صحیح":"تله"}:
                  </span>
                  <span style="color: #cbd5e1;">${r}</span>
                </div>
              `}).join("")}
          </div>
        </div>
      `:""}

      <!-- 💡 نکته طلایی و گایدلاین بالینی (Clinical Pearl) -->
      ${o.clinical_pearl?`
        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(217, 119, 6, 0.05) 100%); border: 1px solid rgba(245, 158, 11, 0.3); border-right: 4px solid #f59e0b; border-radius: 12px; padding: 12px 14px; margin-bottom: 12px;">
          <div style="font-size: 0.8rem; font-weight: 800; color: #fbbf24; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
            <span style="font-size: 1rem;">💡</span>
            <span>نکته طلایی و استدلال رفرنس بالینی (Clinical Pearl):</span>
          </div>
          <p style="font-size: 0.78rem; color: #fef3c7; line-height: 1.75; margin: 0;">
            ${o.clinical_pearl}
          </p>
        </div>
      `:""}

      <!-- ⚡ رمز طلایی طراحان (Mnemonic) -->
      ${o.mnemonic?`
        <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(147, 51, 234, 0.05) 100%); border: 1px solid rgba(168, 85, 247, 0.28); border-right: 4px solid #a855f7; border-radius: 10px; padding: 10px 14px; margin-bottom: 12px;">
          <div style="font-size: 0.78rem; font-weight: 800; color: #c084fc; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
            <span>⚡</span>
            <span>رمز طلایی طراحان:</span>
          </div>
          <p style="font-size: 0.76rem; color: #f3e8ff; line-height: 1.7; margin: 0; font-weight: 600;">
            ${o.mnemonic}
          </p>
        </div>
      `:""}

      <!-- Keywords Tags -->
      ${o.keywords&&o.keywords.length>0?`
        <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 10px;">
          ${o.keywords.map(i=>`<span style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); color: #94a3b8; font-size: 0.68rem; padding: 2px 8px; border-radius: 6px;">#${i}</span>`).join("")}
        </div>
      `:""}

    </div>
  `}function Co(){const o=tt.length,e={};tt.forEach(a=>{const i=a.category||"سایر";e[i]=(e[i]||0)+1});const t=Object.keys(e).sort((a,i)=>e[i]-e[a]),n=tt.slice(0,30).map(a=>Xt(a)).join("");return`
    <div id="traps-interactive-section" style="margin-top: 28px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 24px;">
      
      <!-- Section Header -->
      <div style="margin-bottom: 20px;">
        <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
          <div>
            <h2 style="font-size: 1.2rem; font-weight: 800; color: #ffffff; margin: 0 0 6px 0; display: flex; align-items: center; gap: 8px;">
              <span>🔬</span> بانک جامع کالبدشکافی تله‌های ۲۰۰ سوال آزمون خرداد ۱۴۰۵
            </h2>
            <p style="font-size: 0.78rem; color: #94a3b8; margin: 0;">
              مشاهده مستقیم و دسته‌بندی‌شده تله‌های تستی، گزینه‌های انحرافی و نکات طلایی بالینی
            </p>
          </div>
          <span id="traps-count-badge" style="background: rgba(124, 58, 237, 0.2); border: 1px solid rgba(168, 85, 247, 0.4); color: #c084fc; font-size: 0.75rem; font-weight: 800; padding: 4px 12px; border-radius: 20px;">
            نمایش ۳۰ از ${o} سوال
          </span>
        </div>
      </div>

      <!-- Search & Filters Toolbar -->
      <div class="glass-panel" style="background: rgba(15, 16, 22, 0.7); border: 1px solid rgba(255,255,255,0.07); border-radius: 14px; padding: 14px; margin-bottom: 20px;">
        
        <!-- Live Search Box -->
        <div style="position: relative; margin-bottom: 12px;">
          <input 
            type="text" 
            id="traps-search-input" 
            placeholder="🔍 جستجو در متن تست‌ها، دام‌های تستی، گزینه‌ها یا کلمات کلیدی..." 
            style="width: 100%; box-sizing: border-box; background: rgba(255, 255, 255, 0.05); border: 1px solid rgba(255, 255, 255, 0.12); color: #ffffff; padding: 10px 14px; border-radius: 10px; font-size: 0.82rem; outline: none; font-family: 'Vazirmatn', sans-serif;"
          />
        </div>

        <!-- Category Chips -->
        <div id="traps-cat-chips-container" style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 4px; scrollbar-width: none;">
          <button class="trap-cat-chip active" data-cat="all" style="background: #7c3aed; color: #ffffff; border: none; font-size: 0.72rem; font-weight: 700; padding: 5px 12px; border-radius: 20px; cursor: pointer; white-space: nowrap; transition: all 0.2s;">
            همه درس‌ها (${o})
          </button>
          ${t.map(a=>`
            <button class="trap-cat-chip" data-cat="${a}" style="background: rgba(255, 255, 255, 0.05); color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.08); font-size: 0.72rem; font-weight: 700; padding: 5px 12px; border-radius: 20px; cursor: pointer; white-space: nowrap; transition: all 0.2s;">
              ${a} (${e[a]})
            </button>
          `).join("")}
        </div>

      </div>

      <!-- Questions Feed Cards Container -->
      <div id="traps-cards-list">
        ${n}
      </div>

      <!-- Load More / Full Toggle Button -->
      <div id="traps-load-more-wrapper" style="text-align: center; margin: 20px 0 30px 0;">
        <button 
          id="btn-traps-load-more" 
          class="btn-primary" 
          style="display: inline-flex; align-items: center; gap: 8px; padding: 11px 24px; font-size: 0.84rem; font-weight: 800; border-radius: 12px; cursor: pointer; background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); border: none; color: #ffffff; box-shadow: 0 4px 16px rgba(124, 58, 237, 0.35);"
        >
          <span>مشاهده تست‌های بیشتر (+۳۰)</span>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M6 9l6 6 6-6"/></svg>
        </button>
        <button 
          id="btn-traps-load-all" 
          style="display: inline-flex; align-items: center; gap: 6px; padding: 11px 18px; margin-right: 8px; font-size: 0.82rem; font-weight: 700; border-radius: 12px; cursor: pointer; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.12); color: #cbd5e1;"
        >
          <span>نمایش همه ۲۰۰ سوال یکجا</span>
        </button>
      </div>

    </div>
  `}function Io(o){const e=Ot.find(a=>a.id===o);if(!e)return`
      <div style="padding: 40px 16px; text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 12px;">😕</div>
        <h2 style="color: white; margin-bottom: 8px;">مقاله یافت نشد</h2>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">مقاله مورد نظر شما در سیستم یافت نشد.</p>
        <button id="btn-back-to-articles" class="btn-primary" style="width: auto; padding: 10px 24px;">← بازگشت به لیست مقالات</button>
      </div>
    `;const t=Array.isArray(e.downloads)&&e.downloads.length>0,n=e.id==="khordad-1405-traps-analysis";return`
    <div style="padding: 16px; max-width: 820px; margin: 0 auto; direction: rtl;">

      <!-- Back Button -->
      <button id="btn-back-to-articles" style="display: flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08); color: var(--text-secondary); padding: 8px 16px; border-radius: 12px; cursor: pointer; font-size: 0.82rem; font-weight: bold; margin-bottom: 20px; transition: all 0.2s;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        بازگشت به لیست مقالات
      </button>

      <!-- Article Header -->
      <div class="glass-panel" style="padding: 24px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px;">
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 14px; flex-wrap: wrap;">
          <span style="font-size: 2rem;">${e.icon}</span>
          <span style="font-size: 0.75rem; font-weight: bold; color: ${e.categoryColor}; background: ${e.categoryColor}18; padding: 3px 12px; border-radius: 20px;">
            ${e.category}
          </span>
          <span style="font-size: 0.72rem; color: var(--text-secondary); display: flex; align-items: center; gap: 4px;">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            ${e.readTime} دقیقه مطالعه
          </span>
          <span style="font-size: 0.72rem; color: var(--text-secondary); display: flex; align-items: center; gap: 4px;">
            🗓️ ${e.date}
          </span>
          ${e.url?`
            <a href="${e.url}" target="_blank" class="btn-primary" style="display: inline-flex; align-items: center; gap: 6px; text-decoration: none; padding: 6px 14px; font-size: 0.78rem; border-radius: 12px; margin-right: auto;">
              <span>🌐 باز کردن در تب جداگانه</span>
              <span>↗</span>
            </a>
          `:""}
        </div>
        <h1 style="font-size: 1.25rem; font-weight: 800; color: #ffffff; margin: 0 0 8px 0; line-height: 1.5;">
          ${e.title}
        </h1>
        ${e.summary?`
          <p style="font-size: 0.8rem; color: #94a3b8; line-height: 1.6; margin: 0;">
            ${e.summary}
          </p>
        `:""}

        <!-- 🚀 Direct Static PDF Download CTA Banner for Traps Analysis Article -->
        ${n?`
          <div style="margin-top: 18px; background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(124, 58, 237, 0.2) 100%); border: 1.5px solid rgba(245, 158, 11, 0.4); border-radius: 14px; padding: 14px 18px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; box-shadow: 0 6px 20px rgba(124, 58, 237, 0.15);">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 44px; height: 44px; border-radius: 12px; background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%); display: flex; align-items: center; justify-content: center; font-size: 1.5rem; box-shadow: 0 4px 12px rgba(245, 158, 11, 0.35);">
                📄
              </div>
              <div>
                <div style="font-size: 0.92rem; font-weight: 800; color: #ffffff; display: flex; align-items: center; gap: 6px;">
                  <span>دانلود جزوه کالبدشکافی دام‌های تستی (PDF)</span>
                  <span style="background: rgba(245, 158, 11, 0.25); color: #fbbf24; border: 1px solid rgba(245, 158, 11, 0.5); font-size: 0.65rem; padding: 1px 7px; border-radius: 6px; font-weight: 800;">دانلود مستقیم</span>
                </div>
                <div style="font-size: 0.73rem; color: #cbd5e1; margin-top: 2px;">
                  نسخه باکیفیت و رسمی جزوه جهت پرینت، مطالعه آفلاین و مرور سریع
                </div>
              </div>
            </div>

            <a 
              href="/downloads/Khordad1405_Traps.pdf" 
              download="Khordad1405_Traps.pdf" 
              target="_blank"
              style="text-decoration: none; display: inline-flex; align-items: center; gap: 8px; background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); color: #0f172a; font-weight: 900; padding: 10px 20px; border-radius: 12px; font-size: 0.82rem; cursor: pointer; box-shadow: 0 4px 16px rgba(245, 158, 11, 0.4); transition: all 0.2s;"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              <span>دانلود مستقیم فایل PDF</span>
            </a>
          </div>
        `:""}

      </div>

      <!-- 📥 Dedicated Downloads Hub Section (Rendered if article has downloads) -->
      ${t?`
        <div class="glass-panel article-downloads-card" style="margin-bottom: 20px; padding: 18px 20px; border-radius: 16px; background: linear-gradient(135deg, rgba(124, 58, 237, 0.14) 0%, rgba(22, 23, 29, 0.9) 100%); border: 1px solid rgba(168, 85, 247, 0.35); box-shadow: 0 8px 30px rgba(124, 58, 237, 0.15);">
          
          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 14px; border-bottom: 1px solid rgba(255, 255, 255, 0.08); padding-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <div style="width: 40px; height: 40px; border-radius: 12px; background: rgba(124, 58, 237, 0.25); border: 1px solid rgba(168, 85, 247, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.35rem;">
                📥
              </div>
              <div>
                <h3 style="font-size: 0.96rem; font-weight: 800; color: #ffffff; margin: 0 0 2px 0;">
                  بخش اختصاصی دانلود فایل‌های پیوست و دیتا
                </h3>
                <p style="font-size: 0.72rem; color: #cbd5e1; margin: 0;">
                  دسترسی مستقیم به جزوه چاپی PDF، دیتای خام JSON و نسخه متنی
                </p>
              </div>
            </div>
            <span style="font-size: 0.68rem; background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.3); color: #38bdf8; padding: 3px 8px; border-radius: 6px; font-weight: 700;">
              ⚡ دانلود مستقیم و پرسرعت
            </span>
          </div>

          <!-- Download Cards Grid -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 12px;">
            ${e.downloads.map(a=>{const i=a.format==="PDF",r=i?"#f43f5e":a.format==="JSON"?"#fbbf24":"#34d399",d=i?"rgba(244, 63, 94, 0.2)":a.format==="JSON"?"rgba(234, 179, 8, 0.2)":"rgba(16, 185, 129, 0.2)",s=i?"rgba(244, 63, 94, 0.4)":a.format==="JSON"?"rgba(234, 179, 8, 0.4)":"rgba(16, 185, 129, 0.4)";return`
                <div class="download-item-card" style="background: rgba(31, 32, 41, 0.85); border: 1.5px solid ${i?"rgba(244, 63, 94, 0.35)":"rgba(255, 255, 255, 0.08)"}; border-radius: 12px; padding: 14px; display: flex; flex-direction: column; justify-content: space-between; gap: 12px; ${i?"box-shadow: 0 4px 16px rgba(244, 63, 94, 0.15);":""}">
                  <div>
                    <div style="display: flex; align-items: center; justify-content: space-between; gap: 6px; margin-bottom: 6px;">
                      <span style="font-size: 0.68rem; font-weight: 800; background: ${d}; color: ${r}; border: 1px solid ${s}; padding: 2px 8px; border-radius: 6px;">
                        ${a.format}
                      </span>
                      <span style="font-size: 0.68rem; color: #94a3b8; font-family: 'Outfit';">
                        📦 ${a.size||"حجم مناسب"}
                      </span>
                    </div>
                    <h4 style="font-size: 0.86rem; font-weight: 700; color: #ffffff; margin: 0 0 4px 0; line-height: 1.4;">
                      ${a.title}
                    </h4>
                    <p style="font-size: 0.72rem; color: #94a3b8; line-height: 1.5; margin: 0;">
                      ${a.description}
                    </p>
                  </div>

                  ${i?`
                    <a 
                      href="${a.url||"/downloads/Khordad1405_Traps.pdf"}" 
                      download="${a.filename||"Khordad1405_Traps.pdf"}" 
                      target="_blank"
                      style="text-decoration: none; width: 100%; box-sizing: border-box; display: flex; align-items: center; justify-content: center; gap: 8px; background: linear-gradient(135deg, #e11d48 0%, #be123c 100%); color: #ffffff; border: none; padding: 9px 14px; border-radius: 8px; font-size: 0.8rem; font-weight: 800; cursor: pointer; box-shadow: 0 4px 14px rgba(225, 29, 72, 0.4); transition: all 0.2s ease;"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                      <span>دانلود مستقیم جزوه (${a.format})</span>
                    </a>
                  `:`
                    <button 
                      class="btn-article-download" 
                      data-url="${a.url}" 
                      data-filename="${a.filename}" 
                      data-format="${a.format}"
                      style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%); color: #ffffff; border: none; padding: 8px 14px; border-radius: 8px; font-size: 0.78rem; font-weight: 700; cursor: pointer; box-shadow: 0 4px 14px rgba(124, 58, 237, 0.35); transition: all 0.2s ease;"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                      <span>دریافت فایل (${a.format})</span>
                    </button>
                  `}
                </div>
              `}).join("")}
          </div>

        </div>
      `:""}

      <!-- Article Body -->
      <div class="article-content glass-panel" style="padding: 24px 20px; border: 1px solid rgba(255,255,255,0.07); line-height: 1.8; color: #e4e4e7; background: rgba(22, 23, 29, 0.75); border-radius: 16px; backdrop-filter: blur(16px);">
        ${e.content}

        <!-- Dynamic 200 Questions Traps Feed inside Article Body -->
        ${n?Co():""}
      </div>

      <!-- Action Buttons -->
      <div style="display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap;">
        ${n?`
          <a 
            href="/downloads/Khordad1405_Traps.pdf" 
            download="Khordad1405_Traps.pdf" 
            target="_blank"
            style="text-decoration: none; flex: 1; min-width: 140px; display: flex; align-items: center; justify-content: center; gap: 6px; padding: 10px 16px; font-size: 0.78rem; font-weight: 700; background: linear-gradient(135deg, #f59e0b 0%, #ea580c 100%); border-radius: 10px; color: #000; cursor: pointer; box-shadow: 0 4px 14px rgba(245, 158, 11, 0.35);"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
            دانلود فایل PDF
          </a>
        `:""}
        <button id="btn-share-article" data-article-id="${e.id}" class="btn-primary" style="flex: 1; min-width: 140px; display: flex; align-items: center; justify-content: center; gap: 6px; padding: 10px 16px; font-size: 0.78rem; font-weight: 700; background: #7c3aed; border: none; border-radius: 10px; color: white; cursor: pointer;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
          اشتراک‌گذاری مقاله
        </button>
        <button id="btn-back-to-articles-bottom" style="flex: 1; min-width: 140px; display: flex; align-items: center; justify-content: center; gap: 6px; padding: 10px 16px; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); color: #a1a1aa; border-radius: 10px; cursor: pointer; font-weight: 700; font-size: 0.78rem;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
          بازگشت به لیست
        </button>
      </div>

    </div>
  `}function zo(o){if(o!=="khordad-1405-traps-analysis")return;const e=document.getElementById("traps-cards-list"),t=document.getElementById("traps-search-input"),n=document.getElementById("traps-count-badge"),a=document.getElementById("btn-traps-load-more"),i=document.getElementById("btn-traps-load-all"),r=document.getElementById("traps-load-more-wrapper"),d=document.querySelectorAll(".trap-cat-chip");if(!e)return;let s="all",l="",c=30;function y(){let m=tt;if(s!=="all"&&(m=m.filter(g=>g.category===s)),l.trim()){const g=l.trim().toLowerCase();m=m.filter(f=>f.question&&f.question.toLowerCase().includes(g)||f.question_trap&&f.question_trap.toLowerCase().includes(g)||f.clinical_pearl&&f.clinical_pearl.toLowerCase().includes(g)||f.mnemonic&&f.mnemonic.toLowerCase().includes(g)||Array.isArray(f.keywords)&&f.keywords.some(x=>x.toLowerCase().includes(g))||Array.isArray(f.options)&&f.options.some(x=>x.toLowerCase().includes(g)))}const u=m.length,b=m.slice(0,c);b.length===0?e.innerHTML=`
        <div style="text-align: center; padding: 40px 16px; background: rgba(0,0,0,0.2); border-radius: 12px; border: 1px dashed rgba(255,255,255,0.1);">
          <div style="font-size: 2rem; margin-bottom: 8px;">🔍</div>
          <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">هیچ تستی با این عبارت یا در این دسته‌بندی یافت نشد.</p>
        </div>
      `:e.innerHTML=b.map(g=>Xt(g)).join(""),n&&(n.textContent=`نمایش ${b.length} از ${u} سوال`),r&&(b.length>=u?r.style.display="none":r.style.display="block")}if(t){let m=null;t.oninput=u=>{clearTimeout(m),m=setTimeout(()=>{l=u.target.value,c=30,y()},150)}}d.forEach(m=>{m.onclick=()=>{d.forEach(u=>{u.style.background="rgba(255, 255, 255, 0.05)",u.style.color="#cbd5e1",u.style.border="1px solid rgba(255, 255, 255, 0.08)"}),m.style.background="#7c3aed",m.style.color="#ffffff",m.style.border="none",s=m.dataset.cat||"all",c=30,y()}}),a&&(a.onclick=()=>{c+=30,y()}),i&&(i.onclick=()=>{c=tt.length,y()})}typeof window<"u"&&(window.bindSingleArticleEvents=zo);function Eo(o={}){const e=o.selectedArticleId!==void 0?o.selectedArticleId:window.appState?window.appState.selectedArticleId:null;return e==="questions-1404"?ao():e?Io(e):Mo(o)}function No(){typeof window.renderApp=="function"&&window.renderApp()}typeof window<"u"&&(window.renderArticlesView=Eo,window.initArticlesView=No);const[Do,jo]=p.getTodayJalali();let nt=Do,at=jo;window.getSelectedRoutinesDate=function(){return window.selectedRoutinesDate||(window.selectedRoutinesDate=p.getTodayJalali()),window.selectedRoutinesDate};window.setSelectedRoutinesDate=function(o,e,t){window.selectedRoutinesDate=[o,e,t],nt=o,at=e,window.renderApp&&window.renderApp()};const Nt=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],Oo=["✨","💧","🏃","😴","🚶","🧘","🥗","📚","🛌","🌙","☕","💊","💻","🎯","🔥","⭐","📝","🍎","🧠","🚴","📖","💪","🎨","🎧","⏰","🏊","🥊","☀️","⚡","🏆"];window.habitModalSelectedEmoji=window.habitModalSelectedEmoji||"✨";window.habitModalEditingId=null;window.selectHabitEmoji=o=>{window.habitModalSelectedEmoji=o;const e=document.getElementById("habit-emoji-preview");e&&(e.textContent=o,e.style.transform="scale(1.25)",setTimeout(()=>{e&&(e.style.transform="scale(1)")},150)),document.querySelectorAll(".habit-emoji-picker-btn").forEach(t=>{t.dataset.emoji===o?(t.style.background="rgba(56, 189, 248, 0.25)",t.style.borderColor="#38bdf8",t.style.transform="scale(1.15)",t.style.boxShadow="0 0 12px rgba(56, 189, 248, 0.4)"):(t.style.background="rgba(255, 255, 255, 0.05)",t.style.borderColor="rgba(255, 255, 255, 0.1)",t.style.transform="scale(1)",t.style.boxShadow="none")})};window.triggerCompletionBurst=o=>{try{const e=o?o.clientX||o.pageX:window.innerWidth/2,t=o?o.clientY||o.pageY:window.innerHeight/2,n=["✨","⭐","🎉","🔥","🌟","💥"],a=document.createElement("div");a.style.cssText=`position: fixed; left: ${e}px; top: ${t}px; pointer-events: none; z-index: 99999;`,document.body.appendChild(a);for(let i=0;i<6;i++){const r=document.createElement("span"),d=n[Math.floor(Math.random()*n.length)],s=Math.PI*2*i/6+(Math.random()*.4-.2),l=35+Math.random()*25,c=Math.cos(s)*l,y=Math.sin(s)*l-15;r.textContent=d,r.style.cssText=`
        position: absolute; left: 0; top: 0; font-size: 1.1rem;
        transform: translate(-50%, -50%) scale(0.5); opacity: 1;
        transition: transform 0.55s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.55s ease;
      `,a.appendChild(r),requestAnimationFrame(()=>{r.style.transform=`translate(${c}px, ${y}px) scale(1.3) rotate(${Math.random()*60-30}deg)`,r.style.opacity="0"})}setTimeout(()=>{a&&a.parentNode&&a.parentNode.removeChild(a)},600)}catch{}};window.handleHabitDayClick=(o,e,t=null)=>{var d,s;t&&typeof t.stopPropagation=="function"&&t.stopPropagation();const n=p.getHabits(),a=`${nt}_${at}`,i=n.find(l=>l.id==o||String(l.id)===String(o)),r=((s=(d=i==null?void 0:i.completedDays)==null?void 0:d[a])==null?void 0:s[e])||0;p.cycleHabitDay(o,a,e),r===0&&window.triggerCompletionBurst&&window.triggerCompletionBurst(t),window.renderApp&&window.renderApp()};window.toggleTodayHabit=(o,e=null)=>{var l,c;e&&typeof e.stopPropagation=="function"&&e.stopPropagation();const[t,n,a]=window.getSelectedRoutinesDate(),i=`${t}_${n}`,d=p.getHabits().find(y=>y.id==o||String(y.id)===String(o)),s=((c=(l=d==null?void 0:d.completedDays)==null?void 0:l[i])==null?void 0:c[a])||0;p.cycleHabitDay(o,i,a),s===0&&window.triggerCompletionBurst&&window.triggerCompletionBurst(e),window.renderApp&&window.renderApp()};window.toggleRoutineChecklistItem=(o,e=null)=>{e&&typeof e.stopPropagation=="function"&&e.stopPropagation();const n=(p.getRoutineChecklist()||[]).find(i=>i.id==o||String(i.id)===String(o)),a=n?!n.completed:!0;p.toggleRoutineChecklistItem(o),a&&window.triggerCompletionBurst&&window.triggerCompletionBurst(e),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp()};window.addRoutineChecklistItem=()=>{const o=document.getElementById("input-routine-checklist-text");!o||!o.value.trim()||(p.addRoutineChecklistItem(o.value.trim()),o.value="",window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp())};window.deleteRoutineChecklistItem=o=>{p.deleteRoutineChecklistItem(o),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(0),window.renderApp&&window.renderApp()};window.handleChangeMonth=o=>{at=parseInt(o),window.renderApp&&window.renderApp()};window.handleChangeYear=o=>{nt=parseInt(o),window.renderApp&&window.renderApp()};window.openAddHabitModal=()=>{window.habitModalEditingId=null,window.habitModalSelectedEmoji="✨";const o=document.getElementById("add-habit-modal"),e=document.getElementById("habit-modal-title"),t=document.getElementById("habit-title"),n=document.getElementById("btn-save-habit-modal");e&&(e.textContent="✨ افزودن روتین و عادت جدید"),t&&(t.value=""),n&&(n.textContent="ذخیره روتین"),o&&(o.style.display="flex"),window.selectHabitEmoji("✨"),t&&setTimeout(()=>t.focus(),100)};window.openEditHabitModal=o=>{const t=p.getHabits().find(s=>s.id==o||String(s.id)===String(o));if(!t)return;window.habitModalEditingId=o;const n=t.emoji||"✨";window.habitModalSelectedEmoji=n;const a=document.getElementById("add-habit-modal"),i=document.getElementById("habit-modal-title"),r=document.getElementById("habit-title"),d=document.getElementById("btn-save-habit-modal");i&&(i.textContent="✏️ ویرایش روتین و عادت"),r&&(r.value=t.title||""),d&&(d.textContent="به‌روزرسانی روتین"),a&&(a.style.display="flex"),window.selectHabitEmoji(n),r&&setTimeout(()=>r.focus(),100)};window.closeAddHabitModal=()=>{const o=document.getElementById("add-habit-modal");o&&(o.style.display="none"),window.habitModalEditingId=null};window.saveNewHabit=()=>{const o=document.getElementById("habit-title"),e=o?o.value.trim():"";if(!e){alert("لطفاً عنوان روتین یا عادت را وارد کنید.");return}const t=window.habitModalSelectedEmoji||"✨";window.habitModalEditingId?p.updateHabit(window.habitModalEditingId,{title:e,emoji:t}):p.addHabit(e,"روزانه","08:00",t),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.closeAddHabitModal(),window.renderApp()};window.deleteHabitGlobal=o=>{confirm("آیا از حذف این عادت اطمینان دارید؟")&&(p.deleteHabit(o),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(0),window.renderApp())};window.planexPublicRoutines=[];window.planexHasFetchedRoutines=!1;window.fetchPublicRoutines=async()=>{try{const o=localStorage.getItem("planex_jwt_token");if(!o)return;const e=new AbortController,t=setTimeout(()=>e.abort(),3e3),n=await fetch(`${le}/api/routines/public.php`,{headers:{Authorization:`Bearer ${o}`},signal:e.signal}).finally(()=>clearTimeout(t)),a=await n.json();a.success?(window.planexPublicRoutines=a.routines,window.planexHasFetchedRoutines=!0,window.renderApp()):n.status===403&&(window.planexReciprocityError=a.message,window.planexHasFetchedRoutines=!0,window.renderApp())}catch(o){console.error("Error fetching routines",o)}};window.copyPublicRoutine=async o=>{try{const e=localStorage.getItem("planex_jwt_token");if(!e){alert("لطفاً ابتدا وارد حساب کاربری خود شوید.");return}const t=new AbortController,n=setTimeout(()=>t.abort(),3e3),i=await(await fetch(`${le}/api/routines/copy.php?id=${encodeURIComponent(o)}`,{method:"POST",headers:{Authorization:`Bearer ${e}`},signal:t.signal}).finally(()=>clearTimeout(n))).json();i.success?(alert("✅ "+i.message),p.addHabit("روتین کپی شده جدید"),window.renderApp()):alert("❌ خطا: "+i.message)}catch{alert("خطا در برقراری ارتباط با سرور.")}};window.toggleMyRoutinePublic=(o,e)=>{alert(!e?"📢 روتین شما عمومی شد!":"🔒 روتین شما خصوصی شد."),window.renderApp()};window.PRE_MADE_ROUTINES=[{id:"miracle_morning",title:"🌅 معجزه صبحگاهی (Miracle Morning)",desc:"شروع پرانرژی روز با تمرکز، ذهن‌آگاهی و انگیزه بالا",category:"Morning",tasks:["🛏️ مرتب کردن تخت خواب (۱ دقیقه)","🧘 تنفس عمیق و مدیتیشن صبحگاهی (۱ دقیقه)","🗣️ بیان اهداف با جملات تأکیدی مثبت (۱ دقیقه)","🖼️ تجسم خودِ آینده و اهداف بزرگ (۱ دقیقه)","🏋️‍♂️ حرکات کششی و ورزش سبک (۱ دقیقه)","📖 مطالعه و یادگیری مطلب جدید (۱ دقیقه)","📕 ژورنال‌نویسی و ثبت افکار و احساسات (۱ دقیقه)"]},{id:"calm_ready_morning",title:"☕ صبح آرام و آماده (Calm & Ready Morning)",desc:"آماده‌سازی روزانه بدون عجله، استرس و سردرگمی",category:"Morning",tasks:["💧 نوشیدن یک لیوان آب ولرم (۱ دقیقه)","🚿 دوش گرفتن و شادابی صبح (۱۵ دقیقه)","🧴 روتین مراقبت از پوست (۴ دقیقه)","👕 تعویض لباس و آماده شدن (۵ دقیقه)","💇 استایل مو و ظاهر (۲۰ دقیقه)","📋 بررسی جدول و برنامه روزانه (۵ دقیقه)","👜 جمع‌آوری و آماده کردن وسایل ضروری (۱۰ دقیقه)"]},{id:"deep_study",title:"📚 آماده‌سازی مطالعه عمیق (Study Routine)",desc:"فراهم کردن شرایط محیطی برای حداکثر یادگیری و تمرکز",category:"Study",tasks:["🎒 آماده کردن تمام کتب و جزوات مطالعه (۱۰ دقیقه)","💡 تنظیم نور، زاویه چراغ و روشنایی محیط (۱ دقیقه)","📋 مشخص کردن پارت‌ها و بودجه‌بندی روز (۱ دقیقه)","🧹 مرتب و خلوت کردن کامل میز کار (۱ دقیقه)","⏱️ بلاک تمرکز و مطالعه عمیق بدون حواس‌پرتی (۵۰ دقیقه)"]},{id:"exercise_health",title:"🏃‍♀️ ورزش، تحرک و شادابی (Exercise & Body)",desc:"کاهش استرس روزانه، افزایش انعطاف‌پذیری و تقویت حافظه",category:"Exercise",tasks:["🏋️ تمرینات ورزشی و بدنسازی (۱۵ دقیقه)","🤸 حرکات کششی و افزایش انعطاف بدن (۱۰ دقیقه)","🏃 دویدن یا پیاده‌روی سریع (۳۰ دقیقه)","🧘 یوگا و تنفس پیوسته ضد اضطراب (۲۰ دقیقه)","🌳 پیاده‌روی در فضای باز و هوای آزاد (۴۰ دقیقه)"]},{id:"productivity_boost",title:"🚀 افزایش بهره‌وری و اقدام سریع (Productivity)",desc:"شکستن تنبلی، اولویت‌بندی تسک‌ها و شروع بدون معطلی",category:"Productivity",tasks:["🎯 انتخاب مهم‌ترین و سرنوشت‌سازترین کار امروز","📝 یادداشت ۳ تسک حیاتی و کلیدی روز (۵ دقیقه)","📌 انتخاب ۱ تسک فوری برای ۳۰ دقیقه آینده (۳ دقیقه)","⚡ شمارش معکوس ۵ ثانیه‌ای و پرتاب به سمت عمل (۵ ثانیه)","📍 تعیین دقیق زمان و مکان اجرای تسک (۳ دقیقه)"]},{id:"relaxation_mind",title:"🌸 آرامش، ذهن‌آگاهی و تخلیه روان (Relaxation)",desc:"استراحت اصولی مغز، آرام‌سازی ذهن و بازیابی انرژی",category:"Relaxation",tasks:["👥 تماس یا پیام به یک دوست و احوال‌پرسی (۱۰ دقیقه)","📝 یادداشت‌برداری آزاد و تخلیه ذهن در دفترچه (۲۰ دقیقه)","🌤️ خیره شدن به آسمان، بستن چشم‌ها و حس نور خورشید (۲ دقیقه)","🧹 مرتب کردن محیط اطراف برای آرامش بصری (۱۰ دقیقه)","🪷 بازتاب روز، سپاسگزاری و مرور حس و حال (۵ دقیقه)"]},{id:"step_away_stress",title:"🌿 فاصله‌گیری از استرس (Step Away from Stress)",desc:"تکنیک‌های ساده و سریع برای سبک کردن ذهن در فشارهای کاری",category:"Stress Relief",tasks:["🧠 توجه و پذیرش احساس فعلی بدون قضاوت (۱ دقیقه)","✏️ نوشتن افکار نگران‌کننده روی کاغذ (۲ دقیقه)","🤝 نگاه به این موقعیت از زاویه دید یک دوست صمیمی (۲ دقیقه)","🎯 خالی کردن ذهن و شروع با یک اقدام فیزیکی بسیار کوچک (۳ دقیقه)","🌸 مشاهده و احساس تغییر درونی ایجاد شده (۱ دقیقه)"]},{id:"sos_breathing",title:"🫁 تنفس نجات‌بخش و گراندینگ (SOS Breathing)",desc:"وقتی تنفس سنگین می‌شود و نیاز به اتصال به لحظه حال داری",category:"SOS",tasks:["🧘 الگوی تنفسی ۴ به ۶ عمیق (۱ دقیقه)","❤️ گراندینگ و قرار دادن دست‌ها روی قفسه سینه/کف دست‌ها (۱ دقیقه)","🌳 خیره شدن به یک نقطه ثابت در محیط (۱ دقیقه)","🎧 گوش سپردن فعال به ۳ صدای مختلف محیطی (۱ دقیقه)","🪷 ۳ بار بازدم آرام، عمیق و طولانی (۱ دقیقه)"]},{id:"sos_anxiety",title:"🛡️ مهار آنی اضطراب حاد (When You Feel Anxious)",desc:"تکنیک حواس پنج‌گانه برای بازگشت سریع به زمان حال",category:"SOS",tasks:["👓 پیدا کردن ۵ شیء با رنگ‌های مختلف در اتاق (۱ دقیقه)","🎧 شناسایی و تفکیک ۳ صدای پیرامون (۱ دقیقه)","✍️ یادداشت یک حس بدنی فعلی (۱ دقیقه)","🧊 لمس یا شستن دست‌ها با آب خنک (۱ دقیقه)","☕ در دست گرفتن یک فنجان یا نوشیدنی گرم (۱ دقیقه)"]},{id:"sos_mood_swings",title:"⚖️ بازگشت به تعادل احساسی (When Mood Swings)",desc:"کنترل نوسانات خلقی ناگهانی و بازیابی آرامش درونی",category:"SOS",tasks:["🪷 احساس دمای محیط و تماس نسیم/سرما (۱ دقیقه)","🎧 پخش و شنیدن یک قطعه صوتی آرامش‌بخش (۱ دقیقه)","❤️ فشردن ملایم کف پاها به زمین و حس تکیه‌گاه (۱ دقیقه)","💡 فشردن انگشتان دست تک‌به‌تک و متمرکز (۱ دقیقه)","✍️ نوشتن جمله آرام‌بخش «من در امانم و حالم خوب است» (۱ دقیقه)"]}];window.clonePreMadeRoutine=o=>{const e=window.PRE_MADE_ROUTINES.find(t=>t.id===o);e&&(e.tasks.forEach(t=>{p.addHabit(t)}),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),alert(`✅ تمام تسک‌های روتین "${e.title}" با موفقیت به لیست عادات شما اضافه شد!`),window.renderApp())};function Po(o,e){let t="";for(let n=0;n<5;n++){const a=n===4?3:7;let i=0;for(let l=n*7+1;l<=Math.min((n+1)*7,31);l++)i+=o[l-1]||0;const r=a*e,d=r>0?Math.round(i/r*100):0,s=100.5-100.5*d/100;t+='<div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">',t+='<div style="position: relative; width: 40px; height: 40px;">',t+='<svg width="40" height="40" viewBox="0 0 40 40">',t+='<circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="4"></circle>',t+='<circle cx="20" cy="20" r="16" fill="none" stroke="var(--primary-accent)" stroke-width="4" stroke-dasharray="100.5" stroke-dashoffset="'+s+'" stroke-linecap="round" transform="rotate(-90 20 20)"></circle>',t+="</svg>",t+='<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; font-family: Outfit;">'+d+"%</div>",t+="</div>",t+='<span style="font-size: 0.6rem; color: var(--text-secondary);">هفته '+(n+1)+"</span>",t+="</div>"}return t}window.setJournalMood=function(o){const[e,t,n]=window.getSelectedRoutinesDate(),a=`${e}_${t}_${n}`,i=p.getJournalEntry?p.getJournalEntry(a):{mood:"",rating:0,note:""};i.mood=o,p.saveJournalEntry&&p.saveJournalEntry(a,i.mood,i.rating,i.note),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp()};window.setJournalRating=function(o){const[e,t,n]=window.getSelectedRoutinesDate(),a=`${e}_${t}_${n}`,i=p.getJournalEntry?p.getJournalEntry(a):{mood:"",rating:0,note:""};i.rating=o,p.saveJournalEntry&&p.saveJournalEntry(a,i.mood,i.rating,i.note),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp()};window.saveJournalNote=function(o){const[e,t,n]=window.getSelectedRoutinesDate(),a=`${e}_${t}_${n}`,i=p.getJournalEntry?p.getJournalEntry(a):{mood:"",rating:0,note:""};i.note!==o&&(i.note=o,p.saveJournalEntry&&p.saveJournalEntry(a,i.mood,i.rating,i.note),window.triggerActionDrivenPush&&window.triggerActionDrivenPush())};function gn(o={}){const{routinesAccordions:e={consultation:!1,statsChart:!1,habitTracker:!1}}=o,t=p.getHabits(),n=`${nt}_${at}`,a=p.getRoutineChecklist()||[];let i=t.length,r=i*31,d=0;const s=new Array(31).fill(0);t.forEach(T=>{var C;const N=((C=T.completedDays)==null?void 0:C[n])||{};for(let P=1;P<=31;P++)N[P]===1&&(d++,s[P-1]++)});const l=r>0?Math.round(d/r*100):0,[c,y,m]=window.getSelectedRoutinesDate(),u=`${c}_${y}`,b=T=>String(T).replace(/[0-9]/g,N=>"۰۱۲۳۴۵۶۷۸۹"[N]);let g=0;t.forEach(T=>{var C;(((C=T.completedDays)==null?void 0:C[u])||{})[m]===1&&g++});const f=i>0?Math.round(g/i*100):0;!window.planexHasFetchedRoutines&&localStorage.getItem("planex_jwt_token")&&(window.planexHasFetchedRoutines=!0,setTimeout(()=>window.fetchPublicRoutines(),500));const x=new Date,w=(x.getDay()+1)%7;let A='<div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 12px; margin-bottom: 16px; scrollbar-width: none; direction: rtl;">';const k=["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه"];for(let T=0;T<7;T++){const N=new Date(x);N.setDate(x.getDate()-w+T);const[C,P,L]=p.gregorianToJalali(N.getFullYear(),N.getMonth()+1,N.getDate()),q=`${C}_${P}`;let F=0;t.forEach(j=>{var Z,K;((K=(Z=j.completedDays)==null?void 0:Z[q])==null?void 0:K[L])===1&&F++});const J=i>0?F/i:0,G=C===c&&P===y&&L===m,Q=G?"rgba(56, 189, 248, 0.2)":"rgba(255, 255, 255, 0.05)",V=G?"rgba(56, 189, 248, 0.6)":"rgba(255, 255, 255, 0.1)",X=J===1&&i>0?"#10b981":J>0?"#f59e0b":"transparent";A+=`
      <div onclick="window.setSelectedRoutinesDate(${C}, ${P}, ${L})"
           style="flex: 1; min-width: 60px; padding: 6px 4px; border-radius: 14px; background: ${Q}; border: 1px solid ${V}; display: flex; flex-direction: column; align-items: center; cursor: pointer; transition: all 0.2s ease-in-out;">
        <span style="font-size: 0.7rem; color: ${G?"#38bdf8":"#9ca3af"}; margin-bottom: 4px;">${k[T]}</span>
        <span style="font-size: 1.2rem; font-weight: 800; color: ${G?"#fff":"#d1d5db"}; margin-bottom: 8px;">${b(L)}</span>
        <div style="width: 8px; height: 8px; border-radius: 50%; background: ${X}; border: 1px solid ${J>0?X:"rgba(255,255,255,0.1)"};"></div>
      </div>
    `}A+="</div>";const $=`${c}_${y}_${m}`,M=p.getJournalEntry?p.getJournalEntry($):{mood:"",rating:0,note:""};let D=`
    <div class="glass-panel" style="margin-bottom: 16px; border-radius: 18px; border: 1.5px solid rgba(255,255,255,0.1); padding: 16px; direction: rtl;">
      <h3 style="margin: 0 0 12px 0; font-size: 1rem; color: #f8fafc; font-weight: 800;">حال و احساس امروز</h3>
      <div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 8px; margin-bottom: 12px; scrollbar-width: none;">
        ${["❤️","💪","😴","😍","😡","😫","😔","😐","🙂","😄"].map(T=>`
          <button onclick="window.setJournalMood('${T}')" style="flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; border: ${M.mood===T?"2px solid #38bdf8":"1px solid rgba(255,255,255,0.1)"}; background: ${M.mood===T?"rgba(56,189,248,0.2)":"rgba(255,255,255,0.05)"}; font-size: 1.2rem; cursor: pointer;">${T}</button>
        `).join("")}
      </div>
      <h4 style="margin: 0 0 8px 0; font-size: 0.85rem; color: #cbd5e1;">نمره روز</h4>
      <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 8px; margin-bottom: 12px; scrollbar-width: none;">
        ${[1,2,3,4,5,6,7,8,9,10].map(T=>`
          <button onclick="window.setJournalRating(${T})" style="flex-shrink: 0; width: 36px; height: 36px; border-radius: 50%; border: ${M.rating===T?"2px solid #10b981":"1px solid rgba(255,255,255,0.1)"}; background: ${M.rating===T?"rgba(16,185,129,0.2)":"rgba(255,255,255,0.05)"}; color: ${M.rating===T?"#10b981":"#fff"}; font-weight: 800; cursor: pointer;">${b(T)}</button>
        `).join("")}
      </div>
      <h4 style="margin: 0 0 8px 0; font-size: 0.85rem; color: #cbd5e1;">ژورنال امروز</h4>
      <textarea id="journal-note-input" rows="3" placeholder="امروز چطور گذشت؟ چی یاد گرفتی؟ چی حس کردی؟..." style="width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 10px; color: #fff; font-family: inherit; font-size: 0.85rem; margin-bottom: 12px; resize: vertical;" onblur="window.saveJournalNote(this.value)">${M.note}</textarea>
    </div>
  `;return`
    <div class="main-container" style="padding-bottom: 100px;">
      ${A}
      
      <!-- 🚀 TODAY'S ROUTINES DAILY PROGRESS BANNER -->
      <div class="glass-panel" style="margin-bottom: 16px; padding: 14px 18px; border-radius: 18px; border: 1.5px solid rgba(16, 185, 129, 0.4); background: linear-gradient(135deg, rgba(16, 185, 129, 0.14) 0%, rgba(56, 189, 248, 0.12) 100%); direction: rtl; box-shadow: 0 4px 20px rgba(0,0,0,0.25);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 32px; height: 32px; border-radius: 10px; background: rgba(16, 185, 129, 0.2); border: 1px solid rgba(16, 185, 129, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; color: #10b981;">
              ⚡
            </div>
            <div>
              <strong style="font-size: 0.95rem; font-weight: 800; color: #ffffff; display: block;">پیشرفت روتین‌های امروز</strong>
              <span style="font-size: 0.74rem; color: #a7f3d0; font-weight: 700;">
                ${b(g)} از ${b(i)} روتین امروز انجام شد (${b(f)}٪)
              </span>
            </div>
          </div>
          <div style="background: #1f2029; border: 1px solid rgba(16, 185, 129, 0.35); color: #10b981; padding: 4px 12px; border-radius: 12px; font-weight: 900; font-size: 0.85rem; font-family: 'Outfit', sans-serif;">
            ${b(f)}٪
          </div>
        </div>

        <!-- Progress Fill Bar -->
        <div style="width: 100%; height: 8px; background: rgba(0, 0, 0, 0.35); border-radius: 6px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.08);">
          <div style="height: 100%; width: ${f}%; background: linear-gradient(90deg, #10b981 0%, #38bdf8 100%); border-radius: 6px; transition: width 0.6s ease; box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);"></div>
        </div>

        <!-- Today's Habits Quick-Toggle List -->
        ${t.length>0?`
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255, 255, 255, 0.08); display: flex; flex-direction: column; gap: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.78rem; font-weight: 700; color: #e2e8f0;">⚡ ثبت سریع عادات امروز (${b(m)} ${Nt[y-1]}):</span>
              <span style="font-size: 0.72rem; color: #94a3b8;">با یک کلیک علامت بزنید</span>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${t.map(T=>{var J,G;const N=((G=(J=T.completedDays)==null?void 0:J[u])==null?void 0:G[m])||0;let C="rgba(255, 255, 255, 0.05)",P="rgba(255, 255, 255, 0.1)",L="#cbd5e1",q="○",F="ثبت نشده";return N===1?(C="rgba(16, 185, 129, 0.22)",P="rgba(16, 185, 129, 0.6)",L="#34d399",q="✓",F="انجام شد"):N===2&&(C="rgba(239, 68, 68, 0.22)",P="rgba(239, 68, 68, 0.6)",L="#f87171",q="✕",F="انجام نشد"),`
                  <button type="button" onclick="window.toggleTodayHabit('${T.id}', event)"
                    style="display: flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 12px; background: ${C}; border: 1px solid ${P}; color: ${L}; cursor: pointer; transition: all 0.2s ease; font-family: inherit; font-size: 0.8rem; font-weight: 700;"
                    title="کلیک برای تغییر وضعیت روتین امروز (انجام شد / انجام نشد / ریست)">
                    <span style="font-size: 0.95rem;">${T.emoji||"✨"}</span>
                    <span>${T.title}</span>
                    <span style="background: rgba(0,0,0,0.3); border-radius: 6px; padding: 1px 6px; font-size: 0.72rem; font-family: 'Outfit'; font-weight: 800;">${q} ${F}</span>
                  </button>
                `}).join("")}
            </div>
          </div>
        `:""}
      </div>

      <!-- 🎯 ACCORDION 1: Motivational Routine-Building & Consultation Card -->
      <div class="glass-panel" style="margin-bottom: 16px; border-radius: 18px; border: 1.5px solid rgba(168, 85, 247, 0.45); background: linear-gradient(135deg, rgba(168, 85, 247, 0.16) 0%, rgba(236, 72, 153, 0.14) 55%, rgba(245, 158, 11, 0.12) 100%); overflow: hidden; box-shadow: 0 8px 28px rgba(0,0,0,0.3); transition: all 0.2s ease;">
        <button type="button" class="btn-routines-accordion-toggle" data-key="consultation" style="width: 100%; padding: 14px 18px; background: transparent; border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 10px; font-size: 0.95rem; font-weight: 800; color: #fff;">
            <span style="font-size: 1.2rem;">🎯</span>
            <span>مشاوره و همراهی تا هدف</span>
          </div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 0.78rem; color: #e9d5ff;">
            <span>${e.consultation?"بستن":"مشاهده دکمه‌های مشاوره و کانال"}</span>
            <span style="font-size: 0.75rem; transition: transform 0.2s ease; transform: rotate(${e.consultation?"180deg":"0deg"});">▼</span>
          </div>
        </button>

        ${e.consultation?`
          <div dir="rtl" style="padding: 0 18px 16px 18px; border-top: 1px solid rgba(255, 255, 255, 0.08); animation: fadeIn 0.2s ease; margin-top: 4px;">
            <p style="font-size: 0.86rem; line-height: 1.9; color: #f1f5f9; font-weight: 600; margin: 12px 0 14px 0;">
              هنوز به هدفت نرسیدی؟ چون هنوز روتین و عادتش رو نساختی! اول بدون دقیقاً چه روتینی نیاز داری و بعد با تعهد بهش پایبند باش.
            </p>

            <div style="display: flex; flex-wrap: wrap; gap: 9px;">
              <a href="https://t.me/medicalaa" target="_blank" rel="noopener noreferrer"
                 style="flex: 1 1 180px; min-width: 160px; text-decoration: none; padding: 11px 13px; border-radius: 13px; font-size: 0.84rem; font-weight: 800; color: #fff; background: linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%); box-shadow: 0 4px 14px rgba(14, 165, 233, 0.35); display: flex; align-items: center; justify-content: center; gap: 6px; text-align: center;">
                <span>📢 کانال مشاوره عمومی</span>
              </a>
              <a href="https://t.me/stodybots" target="_blank" rel="noopener noreferrer"
                 style="flex: 1 1 180px; min-width: 160px; text-decoration: none; padding: 11px 13px; border-radius: 13px; font-size: 0.84rem; font-weight: 800; color: #fff; background: linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%); box-shadow: 0 4px 14px rgba(139, 92, 246, 0.35); display: flex; align-items: center; justify-content: center; gap: 6px; text-align: center;">
                <span>👥 گروه دورهمی و روتین</span>
              </a>
              <a href="http://t.me/medicalaa?direct" target="_blank" rel="noopener noreferrer"
                 style="flex: 1 1 180px; min-width: 160px; text-decoration: none; padding: 11px 13px; border-radius: 13px; font-size: 0.84rem; font-weight: 800; color: #fff; background: linear-gradient(135deg, #10b981 0%, #047857 100%); box-shadow: 0 4px 14px rgba(16, 185, 129, 0.35); display: flex; align-items: center; justify-content: center; gap: 6px; text-align: center;">
                <span>💬 مشاوره خصوصی و تخصصی</span>
              </a>
            </div>
          </div>
        `:""}

      </div>

      <!-- 📅 ACCORDION 2: 31-Day Habit Tracker Card -->
      <div class="glass-panel" style="margin-top: 15px; border-radius: 16px; border: 1.5px solid rgba(16, 185, 129, 0.35); background: #16171d; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-routines-accordion-toggle" data-key="habitTracker" style="width: 100%; padding: 14px 18px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; font-weight: 800; color: #34d399;">
            <span style="font-size: 1.1rem;">📅</span>
            <span>ردیابی عادات (هبیت ترکر ۳۱ روزه) ${t.length>0?`<strong style="color: #34d399; font-size: 0.8rem; margin-right: 4px;">(${t.length} عادت فعال)</strong>`:""}</span>
          </div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 0.78rem; color: #a7f3d0;">
            <span>${e.habitTracker?"بستن":"مشاهده جدول و ثبت عادات"}</span>
            <span style="font-size: 0.75rem; transition: transform 0.2s ease; transform: rotate(${e.habitTracker?"180deg":"0deg"});">▼</span>
          </div>
        </button>

        ${e.habitTracker?`
          <div style="padding: 16px 18px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
              <div>
                <h3 style="font-size: 1.05rem; font-weight: 800; color: #fff; margin: 0;">پیگیری عادات (هبیت ترکر ۳۱ روزه)</h3>
                <p style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 2px;">مدیریت پیوسته عادات و چک‌لیست پارت‌های مطالعه در ماه</p>
              </div>
              <div style="display: flex; gap: 8px;">
                <button class="btn-primary" style="padding: 6px 14px; font-size: 0.8rem; background: linear-gradient(135deg, #10b981 0%, #047857 100%);" onclick="window.openAddHabitModal()">+ عادت جدید</button>
              </div>
            </div>

            <!-- Selectors -->
            <div style="display: flex; gap: 10px; margin-top: 15px; overflow-x: auto; padding-bottom: 5px;">
              <select onchange="window.handleChangeYear(this.value)" class="glass-panel" style="padding: 8px; border: none; outline: none; background: rgba(255,255,255,0.05); color: var(--text-primary); border-radius: 8px;">
                ${Array.from({length:10},(T,N)=>1401+N).map(T=>`<option value="${T}" ${T===nt?"selected":""} style="color: #000;">${T}</option>`).join("")}
              </select>
              
              <div style="display: flex; gap: 6px;">
                ${Nt.map((T,N)=>`
                  <button onclick="window.handleChangeMonth(${N+1})" class="${at===N+1?"btn-primary":"glass-panel"}" style="padding: 6px 12px; border: none; border-radius: 12px; font-size: 0.8rem; white-space: nowrap; cursor: pointer;">
                    ${T}
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- Matrix Grid -->
            <div class="glass-panel horizontal-scroll-isolated" style="margin-top: 15px; overflow-x: auto; padding: 15px;">
              <table style="width: 100%; border-collapse: separate; border-spacing: 2px; text-align: center; font-size: 0.8rem; min-width: 900px;">
                <thead>
                  <tr>
                    <th rowspan="2" class="habit-matrix-col-title" style="text-align: right; padding-right: 10px; width: 180px; position: sticky; right: 0; background: var(--bg-dark); z-index: 2; border-bottom: 1px solid rgba(255,255,255,0.1);">عادت</th>
                    <th colspan="7" style="font-size: 0.75rem; color: var(--text-secondary); border-bottom: 1px solid rgba(255,255,255,0.1);">هفته اول</th>
                    <th colspan="7" style="font-size: 0.75rem; color: var(--text-secondary); border-bottom: 1px solid rgba(255,255,255,0.1);">هفته دوم</th>
                    <th colspan="7" style="font-size: 0.75rem; color: var(--text-secondary); border-bottom: 1px solid rgba(255,255,255,0.1);">هفته سوم</th>
                    <th colspan="7" style="font-size: 0.75rem; color: var(--text-secondary); border-bottom: 1px solid rgba(255,255,255,0.1);">هفته چهارم</th>
                    <th colspan="3" style="font-size: 0.75rem; color: var(--text-secondary); border-bottom: 1px solid rgba(255,255,255,0.1);">هفته پنجم</th>
                    <th rowspan="2" style="width: 40px; border-bottom: 1px solid rgba(255,255,255,0.1); font-size: 0.75rem;">تعداد</th>
                    <th rowspan="2" style="width: 40px; border-bottom: 1px solid rgba(255,255,255,0.1); font-size: 0.75rem;">روند🔥</th>
                    <th rowspan="2" style="width: 50px; border-bottom: 1px solid rgba(255,255,255,0.1);">%</th>
                  </tr>
                  <tr>
                    ${Array.from({length:31},(T,N)=>`
                      <th style="padding: 4px; font-family: 'Outfit', sans-serif; font-weight: normal; color: var(--text-secondary); width: 26px;">${N+1}</th>
                    `).join("")}
                  </tr>
                </thead>
                <tbody>
                  ${t.length===0?'<tr><td colspan="33" style="padding: 20px; color: var(--text-secondary);">هیچ عادتی ثبت نشده است.</td></tr>':""}
                  ${t.map(T=>{var F;const N=((F=T.completedDays)==null?void 0:F[n])||{};let C=0,P=0,L=0;for(let J=1;J<=31;J++)N[J]===1?(C++,L++):L=0,L>P&&(P=L);const q=Math.round(C/31*100);return`
                    <tr>
                      <td class="habit-matrix-col-title" style="text-align: right; padding-right: 10px; position: sticky; right: 0; background: var(--bg-dark); z-index: 2; border-radius: 0 8px 8px 0; border: 1px solid rgba(255,255,255,0.05); border-left: none;">
                        <div style="display: flex; align-items: center; justify-content: space-between; overflow: hidden; gap: 4px;">
                          <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 600; display: flex; align-items: center; gap: 6px;">
                            <span style="font-size: 1.05rem;">${T.emoji||"✨"}</span>
                            <span>${T.title}</span>
                            ${P>0?`<span style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.35); color: #f59e0b; padding: 1px 6px; border-radius: 8px; font-size: 0.68rem; font-weight: 800; font-family: 'Outfit', sans-serif; display: inline-flex; align-items: center; gap: 2px;" title="استریک پیوستگی روتین">🔥 ${b(P)}</span>`:""}
                          </span>
                          <div style="display: flex; align-items: center; gap: 2px; flex-shrink: 0;">
                            <button onclick="window.openEditHabitModal('${T.id}')" title="ویرایش روتین" style="background:none; border:none; color: #38bdf8; cursor:pointer; font-size: 0.82rem; padding: 2px 4px; opacity: 0.85; transition: transform 0.15s;" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">✏️</button>
                            <button onclick="window.deleteHabitGlobal('${T.id}')" title="حذف روتین" style="background:none; border:none; color: #ef4444; cursor:pointer; font-size: 0.82rem; padding: 2px 4px; opacity: 0.85; transition: transform 0.15s;" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">✕</button>
                          </div>
                        </div>
                      </td>
                      ${Array.from({length:31},(J,G)=>{const Q=N[G+1]||0;let V="rgba(255,255,255,0.05)",X="transparent",j="○";return Q===1&&(V="rgba(16, 185, 129, 0.2)",X="#10b981",j="✓"),Q===2&&(V="rgba(239, 68, 68, 0.2)",X="#ef4444",j="✕"),`
                          <td onclick="window.handleHabitDayClick('${T.id}', ${G+1}, event)" style="background: ${V}; color: ${X}; border-radius: 4px; cursor: pointer; transition: 0.2s; border: 1px solid rgba(255,255,255,0.02); height: 26px;">
                            ${Q===0?"":j}
                          </td>
                        `}).join("")}
                      <td style="color: var(--text-primary); font-family: 'Outfit'; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.05); border-right: none; border-left: none;">${C}</td>
                      <td style="color: #f59e0b; font-family: 'Outfit'; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.05); border-right: none; border-left: none;">${P}</td>
                      <td style="color: #10b981; font-weight: bold; font-family: 'Outfit'; border-radius: 8px 0 0 8px; border: 1px solid rgba(255,255,255,0.05); border-right: none;">${q}%</td>
                    </tr>
                  `}).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `:""}
      </div>

      <!-- 📊 ACCORDION 2: Stats Section (Monthly Overall Progress & Daily Trend) -->
      <div class="glass-panel" style="margin-top: 15px; border-radius: 16px; border: 1.5px solid rgba(56, 189, 248, 0.35); background: #16171d; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-routines-accordion-toggle" data-key="statsChart" style="width: 100%; padding: 14px 18px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; font-weight: 800; color: #38bdf8;">
            <span style="font-size: 1.1rem;">📊</span>
            <span>آمار پیشرفت و نمودار ۳۱ روزه عادات (${l}% تکمیل کل ماه)</span>
          </div>
          <span style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${e.statsChart?"180deg":"0deg"});">▼</span>
        </button>

        ${e.statsChart?`
          <div style="padding: 16px 18px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
            <!-- 1. Monthly Overall Progress Card -->
            <div style="margin-bottom: 18px;">
              <h3 style="font-size: 0.95rem; margin-bottom: 15px; text-align: center; color: var(--text-primary);">پیشرفت کلی و هفتگی ماه</h3>
              <div style="display: flex; gap: 24px; align-items: center; justify-content: center; flex-wrap: wrap;">
                <div style="position: relative; width: 110px; height: 110px;">
                  <svg width="110" height="110" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="10"></circle>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="var(--primary-accent)" stroke-width="10" 
                      stroke-dasharray="251.2" stroke-dashoffset="${251.2-251.2*l/100}" 
                      stroke-linecap="round" transform="rotate(-90 50 50)"></circle>
                  </svg>
                  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 1.3rem; font-weight: bold; font-family: 'Outfit';">
                    ${l}%
                  </div>
                </div>
                
                <div style="display: flex; gap: 14px; flex-wrap: wrap; justify-content: center;">
                  ${Po(s,i)}
                </div>
              </div>
            </div>

            <!-- 2. Daily Trend Bar Chart Card -->
            ${(()=>{const T=Math.max(...s,1),N=C=>String(C).replace(/[0-9]/g,P=>"۰۱۲۳۴۵۶۷۸۹"[P]);return`
                <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 15px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 8px;">
                    <h3 style="font-size: 0.95rem; color: #38bdf8; margin: 0;">📊 نمودار روند روزانه عادات (۳۱ روز ماه)</h3>
                    <span style="font-size: 0.75rem; color: var(--text-secondary);">مقیاس پویا: حداکثر ${N(T)} عادت در روز</span>
                  </div>

                  <div style="overflow-x: auto; padding-bottom: 10px;">
                    <div style="display: flex; align-items: flex-end; height: 140px; gap: 4px; min-width: 650px; padding: 10px 4px 0 4px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                      ${s.map((C,P)=>{const L=C>0?C/T*100:0,q=C===T&&C>0;return`
                          <div style="flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; position: relative;">
                            <span style="font-size: 0.7rem; color: ${q?"#ec4899":L>0?"#38bdf8":"transparent"}; font-family: 'Outfit'; margin-bottom: 3px; font-weight: bold;">
                              ${C>0?N(C):""}
                            </span>
                            <div style="width: 100%; background: ${q?"linear-gradient(180deg, #ec4899 0%, #a855f7 100%)":L>0?"linear-gradient(180deg, #38bdf8 0%, #6366f1 100%)":"rgba(255,255,255,0.05)"}; height: ${C>0?Math.max(L,8):4}%; border-radius: 4px 4px 0 0; transition: all 0.3s; ${L>0?"box-shadow: 0 2px 8px rgba(56,189,248,0.3);":""}" title="روز ${N(P+1)}: ${N(C)} عادت"></div>
                            <span style="font-size: 0.7rem; color: ${q?"#ec4899":"var(--text-secondary)"}; font-family: 'Outfit'; margin-top: 6px; font-weight: ${q?"bold":"normal"};">${N(P+1)}</span>
                          </div>
                        `}).join("")}
                    </div>
                  </div>
                </div>

                <!-- 3. Compact Habit Heatmaps -->
                <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 15px; margin-top: 15px;">
                  <h3 style="font-size: 0.95rem; color: #38bdf8; margin: 0 0 12px 0;">نقشه فعالیت عادت‌ها (ماه جاری)</h3>
                  <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;">
                    ${t.map(C=>{var q;const P=((q=C.completedDays)==null?void 0:q[u])||{};let L="";for(let F=1;F<=31;F++){const J=P[F]===1;L+=`<div style="width: 8px; height: 8px; border-radius: 2px; background: ${J?"#10b981":"rgba(255,255,255,0.05)"}; border: 1px solid ${J?"#059669":"rgba(255,255,255,0.1)"};" title="روز ${F}"></div>`}return`
                        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 10px; min-width: 150px; flex: 1;">
                          <div style="font-size: 0.8rem; color: #e2e8f0; font-weight: 700; margin-bottom: 6px; text-align: center;">${C.emoji||"✨"} ${C.title}</div>
                          <div style="display: grid; grid-template-columns: repeat(10, 1fr); gap: 3px; justify-content: center;">
                            ${L}
                          </div>
                        </div>
                      `}).join("")}
                  </div>
                </div>
              `})()}
          </div>
        `:""}
      </div>
      <!-- Dynamic Unlimited Checklist & Notes Section -->
      <div class="glass-panel" style="margin-top: 15px; padding: 20px; border-color: rgba(99, 102, 241, 0.4);">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
          <h3 style="font-size: 1rem; color: #38bdf8; margin: 0;">📝 نکات و چک‌لیست بی‌نهایت روتین و مطالعه</h3>
          <span style="font-size: 0.78rem; color: var(--text-secondary);">امکان افزودن تمام نکات و چک‌لیست‌های دلخواه</span>
        </div>

        <div style="display: flex; gap: 8px; margin-bottom: 14px;">
          <input type="text" id="input-routine-checklist-text" onkeydown="if(event.key === 'Enter') window.addRoutineChecklistItem()" class="form-input" placeholder="عنوان نکته یا چک‌لیست جدید (مثلا: بررسی هفتگی کارنامه آزمون کانون)" style="flex: 1;" />
          <button id="btn-add-routine-checklist" onclick="window.addRoutineChecklistItem()" class="btn-primary" style="width: auto; padding: 0 16px;">+ افزودن نکته</button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px;">
          ${a.length===0?'<p style="font-size: 0.85rem; color: var(--text-secondary);">هیچ نکته یا چک‌لیستی اضافه نشده است.</p>':""}
          ${a.map(T=>`
            <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.03); padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);">
              <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; color: ${T.completed?"var(--text-muted)":"white"}; text-decoration: ${T.completed?"line-through":"none"}; flex: 1;">
                <input type="checkbox" class="chk-routine-item" onclick="window.toggleRoutineChecklistItem('${T.id}', event)" data-id="${T.id}" ${T.completed?"checked":""} style="width: 18px; height: 18px; accent-color: #10b981; cursor: pointer;" />
                <span style="font-size: 0.9rem; font-weight: 500;">${T.text}</span>
              </label>
              <button class="btn-delete-routine-item" onclick="window.deleteRoutineChecklistItem('${T.id}')" data-id="${T.id}" style="background: none; border: none; color: #ef4444; cursor: pointer;">🗑️</button>
            </div>
          `).join("")}
        </div>
      </div>
    </div>

      <!-- Pre-Made Templates Accordion -->
      <details class="glass-panel" style="margin-top: 15px; padding: 20px; border-color: rgba(16, 185, 129, 0.4); cursor: pointer;">
        <summary style="display: flex; justify-content: space-between; align-items: center; list-style: none; outline: none;">
          <h3 style="font-size: 1rem; color: #10b981; margin: 0; display: flex; align-items: center; gap: 8px;">
            💎 روتین‌های پیشنهادی و الگوهای آماده
          </h3>
          <span style="font-size: 0.8rem; color: var(--text-secondary); background: rgba(16, 185, 129, 0.1); padding: 4px 10px; border-radius: 12px;">مشاهده الگوها 🔽</span>
        </summary>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; margin-top: 15px; cursor: default;">
          ${window.PRE_MADE_ROUTINES.map(T=>`
            <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 12px; padding: 15px; display: flex; flex-direction: column; transition: 0.2s;" onmouseover="this.style.background='rgba(16, 185, 129, 0.05)'" onmouseout="this.style.background='rgba(255,255,255,0.02)'">
              <div style="font-weight: bold; color: white; font-size: 1.05rem; margin-bottom: 5px;">${T.title}</div>
              <p style="font-size: 0.75rem; color: #34d399; margin-bottom: 12px;">${T.desc}</p>
              <ul style="padding-right: 18px; margin: 0 0 15px 0; font-size: 0.75rem; color: var(--text-secondary); flex-grow: 1; line-height: 1.6;">
                ${T.tasks.map(N=>`<li style="margin-bottom: 4px;">${N}</li>`).join("")}
              </ul>
              <button onclick="window.clonePreMadeRoutine('${T.id}')" class="btn-primary" style="padding: 8px; font-size: 0.8rem; width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px; background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3);">
                ➕ افزودن به روتین‌های من
              </button>
            </div>
          `).join("")}
        </div>
      </details>
      ${D}
    </div>

    <!-- Add / Edit Habit Modal -->
    <div id="add-habit-modal" style="display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.75); z-index: 1000; align-items: center; justify-content: center; backdrop-filter: blur(8px); padding: 16px;">
      <div class="glass-panel" style="width: 100%; max-width: 440px; padding: 22px; border: 1.5px solid rgba(56, 189, 248, 0.35); background: linear-gradient(145deg, rgba(30, 41, 59, 0.95), rgba(15, 23, 42, 0.98)); border-radius: 20px; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 12px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div id="habit-emoji-preview" style="width: 42px; height: 42px; border-radius: 14px; background: rgba(56, 189, 248, 0.15); border: 1.5px solid #38bdf8; display: flex; align-items: center; justify-content: center; font-size: 1.6rem; transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);">
              ✨
            </div>
            <div>
              <h3 id="habit-modal-title" style="margin: 0; font-size: 1.05rem; font-weight: 800; color: #fff;">
                ✨ افزودن روتین و عادت جدید
              </h3>
              <span style="font-size: 0.72rem; color: var(--text-secondary);">آیکون و نام روتین را انتخاب کنید</span>
            </div>
          </div>
          <button onclick="window.closeAddHabitModal()" style="background: none; border: none; color: var(--text-secondary); cursor: pointer; font-size: 1.2rem; padding: 4px 8px; border-radius: 8px;">✕</button>
        </div>
        
        <!-- Emoji Picker Palette -->
        <label class="input-label" style="display: block; margin-bottom: 8px; font-size: 0.82rem; font-weight: 700; color: #cbd5e1;">
          🎨 انتخاب آیکون / ایموجی:
        </label>
        <div id="habit-emoji-palette" style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 8px; margin-bottom: 18px; max-height: 145px; overflow-y: auto; padding: 6px; border-radius: 14px; background: rgba(0,0,0,0.3); border: 1px solid rgba(255,255,255,0.08);">
          ${Oo.map(T=>`
            <button type="button"
                    class="habit-emoji-picker-btn"
                    data-emoji="${T}"
                    onclick="window.selectHabitEmoji('${T}')"
                    style="height: 40px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; font-size: 1.35rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s ease;">
              ${T}
            </button>
          `).join("")}
        </div>
        
        <!-- Title Input -->
        <label class="input-label" style="display: block; margin-bottom: 6px; font-size: 0.82rem; font-weight: 700; color: #cbd5e1;">
          ✏️ عنوان روتین یا عادت:
        </label>
        <input id="habit-title"
               type="text"
               class="form-input"
               style="width: 100%; padding: 11px 14px; margin-bottom: 20px; font-size: 0.92rem; border-radius: 12px; background: rgba(0,0,0,0.4); border: 1.5px solid rgba(255,255,255,0.12); color: white;"
               placeholder="مثلاً: بیداری رأس ساعت ۶، ۱۰۰ تست زیست، ورزش"
               onkeydown="if(event.key==='Enter') window.saveNewHabit()" />
        
        <div style="display: flex; gap: 10px;">
          <button id="btn-save-habit-modal" class="btn-primary" style="flex: 2; padding: 11px; font-weight: 800; font-size: 0.9rem; border-radius: 12px; background: linear-gradient(135deg, #0284c7, #0369a1);" onclick="window.saveNewHabit()">
            ذخیره روتین
          </button>
          <button type="button" class="glass-panel" style="flex: 1; padding: 11px; cursor: pointer; border-radius: 12px; font-weight: 700; color: #94a3b8; border-color: rgba(255,255,255,0.1);" onclick="window.closeAddHabitModal()">
            انصراف
          </button>
        </div>
      </div>
    </div>
  `}function Dt(){const o=S&&typeof S.getUserProfile=="function"?S.getUserProfile():{nickname:"",target:"",avatar_url:""};let e=null;try{e=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}")}catch{}const t=o.nickname||o.name||(e==null?void 0:e.full_name)||(e==null?void 0:e.name)||"",n=t&&!$e(t)?t.trim():"",a=o.target||o.targetField||o.major||"",r=localStorage.getItem("planex_user_avatar")||""||o.avatar_url||o.avatarUrl||o.avatar||o.photo_url||(e==null?void 0:e.avatar_url)||"",d=["🩺 آزمون پره‌اینترنی","👨‍⚕️ آزمون دستیاری","🧬 کنکور تجربی","📐 کنکور ریاضی","📚 کنکور انسانی","⚖️ آزمون وکالت","🎓 ارشد علوم پزشکی","🌐 آزمون آیلتس / زبان"],l=[...Array.from({length:8},(c,y)=>`https://api.dicebear.com/7.x/adventurer/svg?seed=Adv${y+1}`),...Array.from({length:8},(c,y)=>`https://api.dicebear.com/7.x/bottts/svg?seed=Bot${y+1}`),...Array.from({length:8},(c,y)=>`https://api.dicebear.com/7.x/micah/svg?seed=Micah${y+1}`),...Array.from({length:8},(c,y)=>`https://api.dicebear.com/7.x/fun-emoji/svg?seed=Emo${y+1}`),...Array.from({length:8},(c,y)=>`https://api.dicebear.com/7.x/notionists/svg?seed=Notion${y+1}`)].map((c,y)=>`
      <div class="avatar-preset-item" onclick="window.selectEditProfileAvatar('${c}')" style="width: 52px; height: 52px; aspect-ratio: 1/1; border-radius: 50%; cursor: pointer; border: 2.5px solid ${r===c?"#7c3aed":"rgba(255,255,255,0.1)"}; transition: all 0.2s ease; overflow: hidden; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; position: relative; flex-shrink: 0;">
        <img src="${c}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://api.dicebear.com/7.x/bottts/svg?seed=fallback${y}'" />
      </div>
    `).join("");return`
    <div id="modal-edit-profile" class="modal-overlay" style="display: flex; backdrop-filter: blur(20px); background: rgba(0, 0, 0, 0.82); z-index: 99999; direction: rtl;" onclick="if(event.target === this || event.target.classList.contains('modal-overlay')){ window.closeActiveModal(); }">
      <div class="modal-content modal-card" onclick="event.stopPropagation();" style="width: 94%; max-width: 480px; padding: 24px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 22px; text-align: right; box-shadow: 0 24px 60px rgba(0,0,0,0.7); max-height: 90vh; overflow-y: auto;">
        
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 12px;">
          <div style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 40px; height: 40px; border-radius: 12px; background: rgba(124, 58, 237, 0.2); border: 1px solid rgba(124, 58, 237, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">
              ✏️
            </div>
            <div>
              <h3 style="margin: 0; color: #f8fafc; font-size: 1.1rem; font-weight: 900;">ویرایش مشخصات من</h3>
              <span style="font-size: 0.74rem; color: #8e8e9c;">نام، رشته/هدف و عکس پروفایل خود را تنظیم کنید</span>
            </div>
          </div>
          ${n?'<button type="button" aria-label="بستن" onclick="window.closeActiveModal();" style="min-width: 44px; min-height: 44px; width: 44px; height: 44px; background: #1f2029; border: 1px solid rgba(255,255,255,0.12); color: #cbd5e1; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; transition: all 0.15s ease;">✕</button>':""}
        </div>

        <!-- Avatar Instant Live Preview & Selector -->
        <div style="text-align: center; margin-bottom: 22px; background: #1f2029; border: 1px solid rgba(255,255,255,0.06); border-radius: 18px; padding: 16px;">
          <div style="position: relative; width: 84px; height: 84px; margin: 0 auto 12px auto; display: inline-block;">
            <div id="edit-profile-avatar-preview-box" style="width: 84px; height: 84px; min-width: 84px; max-width: 84px; min-height: 84px; max-height: 84px; aspect-ratio: 1/1 !important; border-radius: 50% !important; overflow: hidden !important; border: 3px solid #7c3aed; background: #16171d; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 20px rgba(124, 58, 237, 0.35); transition: all 0.2s ease;">
              ${r&&(r.startsWith("http")||r.startsWith("data:image"))?`
                <img id="edit-profile-avatar-img" src="${r}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none';" />
              `:`
                <span id="edit-profile-avatar-fallback" style="font-size: 2.2rem;">👤</span>
              `}
            </div>
            <label for="edit-profile-file-input" style="position: absolute; bottom: 0; left: -4px; background: #7c3aed; color: white; border-radius: 50%; min-width: 32px; min-height: 32px; width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; font-size: 0.9rem; cursor: pointer; border: 2px solid #16171d; box-shadow: 0 2px 8px rgba(0,0,0,0.4);" title="آپلود عکس از گالری">
              📷
            </label>
            <input type="file" id="edit-profile-file-input" accept="image/*" style="display: none;" onchange="window.handleEditProfileImageUpload(event)" />
          </div>

          <input type="hidden" id="input-edit-profile-avatar-url" value="${r}" />

          <div style="display: flex; gap: 8px; justify-content: center; margin-bottom: 12px;">
            <button type="button" onclick="document.getElementById('edit-profile-file-input').click()" style="padding: 7px 14px; font-size: 0.76rem; font-weight: 800; background: rgba(124, 58, 237, 0.15); color: #c4b5fd; border: 1px solid rgba(124, 58, 237, 0.3); border-radius: 10px; cursor: pointer; display: flex; align-items: center; gap: 6px;">
              <span>📷</span>
              <span>انتخاب از گالری</span>
            </button>
            <button type="button" onclick="window.promptEditProfileAvatarUrl()" style="padding: 7px 14px; font-size: 0.76rem; font-weight: 700; background: #16171d; color: #a1a1aa; border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; cursor: pointer; display: flex; align-items: center; gap: 6px;">
              <span>🔗</span>
              <span>لینک عکس</span>
            </button>
          </div>

          <!-- Cartoon Avatar Presets -->
          <div style="text-align: right; font-size: 0.75rem; color: #8e8e9c; font-weight: 700; margin-bottom: 8px;">یا انتخاب فوری از بین آواتارهای آماده:</div>
          <div style="display: flex; gap: 10px; overflow-x: auto; padding: 6px 2px; scrollbar-width: thin;">
            ${l}
          </div>
        </div>

        <!-- Form Inputs -->
        <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 22px;">
          
          <!-- Name Input -->
          <div>
            <label style="display: block; margin-bottom: 6px; color: #cbd5e1; font-size: 0.8rem; font-weight: 800;">
              نام و نام خانوادگی <span style="color: #ef4444;">*</span>
            </label>
            <input type="text" id="input-edit-profile-name" value="${n}" placeholder="مثال: علی محمدی" class="form-input" style="width: 100%; box-sizing: border-box; padding: 12px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); background: #1f2029; color: white; font-size: 0.88rem; font-weight: 700;" />
          </div>

          <!-- Target / Major Input & Popular Chips -->
          <div>
            <label style="display: block; margin-bottom: 6px; color: #cbd5e1; font-size: 0.8rem; font-weight: 800;">
              رشته تحصیلی یا هدف آزمون
            </label>
            <input type="text" id="input-edit-profile-target" value="${a}" placeholder="مثال: آزمون پره‌اینترنی / کنکور تجربی" class="form-input" style="width: 100%; box-sizing: border-box; padding: 12px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); background: #1f2029; color: white; font-size: 0.85rem;" />
            
            <!-- Popular Goal Chips -->
            <div style="margin-top: 10px;">
              <div style="font-size: 0.72rem; color: #8e8e9c; font-weight: 700; margin-bottom: 6px;">💡 انتخاب سریع اهداف محبوب:</div>
              <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                ${d.map(c=>`
                  <button type="button" onclick="document.getElementById('input-edit-profile-target').value='${c}';" style="padding: 5px 10px; font-size: 0.72rem; font-weight: 700; background: rgba(124, 58, 237, 0.12); color: #c4b5fd; border: 1px solid rgba(124, 58, 237, 0.25); border-radius: 8px; cursor: pointer; transition: all 0.15s ease;" onmouseover="this.style.borderColor='#a855f7'" onmouseout="this.style.borderColor='rgba(124, 58, 237, 0.25)'">${c}</button>
                `).join("")}
              </div>
            </div>
          </div>

        </div>

        <!-- Submit Buttons -->
        <div style="display: flex; gap: 10px;">
          <button type="button" id="btn-save-edit-profile" onclick="window.handleSaveProfileSubmit()" class="btn-primary" style="flex: 1; height: 46px; font-size: 0.9rem; font-weight: 900; background: #7c3aed; color: white; border: none; border-radius: 14px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 16px rgba(124, 58, 237, 0.4); transition: all 0.2s ease;">
            <span>💾</span>
            <span>ذخیره تغییرات مشخصات</span>
          </button>

          <button type="button" onclick="window.closeActiveModal()" style="padding: 0 18px; height: 46px; font-size: 0.82rem; font-weight: 700; background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; cursor: pointer;">
            انصراف
          </button>
        </div>

      </div>
    </div>
  `}window.openEditProfileModal=function(){window.appState&&(window.appState.activeModal="editProfile",window.renderApp&&window.renderApp())};window.closeEditProfileModal=function(){window.closeActiveModal?window.closeActiveModal():window.appState&&(window.appState.activeModal=null,window.renderApp&&window.renderApp())};window.selectEditProfileAvatar=function(o){const e=document.getElementById("input-edit-profile-avatar-url");e&&(e.value=o);const t=document.getElementById("edit-profile-avatar-preview-box");t&&(t.innerHTML=`<img id="edit-profile-avatar-img" src="${o}" style="width: 100%; height: 100%; object-fit: cover;" />`)};window.promptEditProfileAvatarUrl=function(){const o=prompt("لطفاً لینک آدرس مستقیم تصویر پروفایل را وارد نمایید (http/https):");o&&o.trim().startsWith("http")&&window.selectEditProfileAvatar(o.trim())};window.handleEditProfileImageUpload=function(o){var a;const e=(a=o.target.files)==null?void 0:a[0];if(!e)return;if(e.size>10*1024*1024){window.showToast?window.showToast("حجم عکس انتخابی نباید بیشتر از ۱۰ مگابایت باشد.","warning"):alert("حجم عکس انتخابی نباید بیشتر از ۱۰ مگابایت باشد.");return}const t=document.getElementById("edit-profile-avatar-preview-box");t&&(t.innerHTML='<span class="spin-sync" style="font-size: 1.8rem;">⏳</span>');const n=new FileReader;n.onload=function(i){const r=i.target.result;if(!r)return;const d=new Image;d.onload=function(){let l=d.width,c=d.height;l>c?l>128&&(c=Math.round(c*128/l),l=128):c>128&&(l=Math.round(l*128/c),c=128);const y=document.createElement("canvas");y.width=l,y.height=c,y.getContext("2d").drawImage(d,0,0,l,c);let u;try{u=y.toDataURL("image/webp",.7),(!u||!u.startsWith("data:image/webp"))&&(u=y.toDataURL("image/jpeg",.7))}catch{u=y.toDataURL("image/jpeg",.7)}window.selectEditProfileAvatar(u)},d.onerror=function(){window.showToast?window.showToast("خطا در پردازش تصویر، لطفاً دوباره تلاش کنید.","error"):alert("خطا در پردازش تصویر، لطفاً دوباره تلاش کنید."),t&&(t.innerHTML='<span style="font-size: 2.2rem;">👤</span>')},d.src=r},n.readAsDataURL(e)};window.handleSaveProfileSubmit=async function(){const o=document.getElementById("input-edit-profile-name"),e=document.getElementById("input-edit-profile-target"),t=document.getElementById("input-edit-profile-avatar-url"),n=o?o.value.trim():"",a=e?e.value.trim():"",i=t?t.value.trim():"";if(!n||$e(n)){window.showToast?window.showToast("لطفاً نام و نام خانوادگی خود را وارد کنید.","warning"):alert("لطفاً نام و نام خانوادگی خود را وارد کنید."),o&&o.focus();return}const r=document.getElementById("btn-save-edit-profile");r&&(r.disabled=!0,r.innerHTML='<svg class="spin-sync" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> <span>در حال ذخیره‌سازی...</span>');try{try{localStorage.setItem(ee.NICKNAME,n),localStorage.setItem(ee.TARGET,a),localStorage.setItem("planex_user_nickname",n),localStorage.setItem("planex_nickname",n),localStorage.setItem("planex_leaderboard_nickname",n),i&&localStorage.setItem("planex_user_avatar",i)}catch(c){console.warn("LEADERBOARD_STORAGE_KEYS quota error:",c)}if(p&&typeof p.setUserProfile=="function"){const c=p.getUserProfile()||{};p.setUserProfile({...c,name:n,targetField:a,major:a,avatar:i,avatar_url:i,photo:i,photoUrl:i})}try{const c=localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account");let y=c?JSON.parse(c):{};y.full_name=n,y.name=n,y.avatar_url=i,y.photo_url=i,localStorage.setItem("planex_auth_user",JSON.stringify(y)),localStorage.setItem("planex_user_account",JSON.stringify(y))}catch(c){console.warn("auth user account quota error:",c)}S&&typeof S.saveUserProfile=="function"&&S.saveUserProfile(n,a,i);const d=window.personalSyncService;let s=Promise.resolve();d&&typeof d.pushToCloud=="function"&&(s=d.pushToCloud(null,n,i));let l=Promise.resolve();S&&typeof S.syncUserScore=="function"&&(l=S.syncUserScore(!0)),await Promise.allSettled([s,l]),window.closeActiveModal?window.closeActiveModal():window.appState&&(window.appState.activeModal=null),window.showToast&&window.showToast(`مشخصات و آواتار شما با موفقیت به «${n}» تغییر یافت! ✅`,"success",3500),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("profileUpdated")),window.renderApp&&window.renderApp()}catch(d){console.error("Save profile failed:",d),window.showToast?window.showToast("خطا در ذخیره مشخصات: "+d.message,"error"):alert("خطا در ذخیره مشخصات: "+d.message)}finally{r&&(r.disabled=!1,r.innerHTML="💾 ذخیره تغییرات مشخصات")}};const Ro=o=>String(o??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");window.leaderboardFilterQuery=window.leaderboardFilterQuery||"";window.isLeaderboardSyncing=!1;window.isLeaderboardRefreshing=!1;window.lastLeaderboardResult=window.lastLeaderboardResult||null;window.isFetchingLeaderboardBg=!1;window.lastPublicRoomsList=window.lastPublicRoomsList||null;window.isFetchingPublicRoomsBg=!1;window.lastEarlyBirdList=window.lastEarlyBirdList||null;window.isFetchingEarlyBirds=!1;function ke(o,e=!0,t=3500){const n=document.createElement("div");n.style.cssText=`position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%); background: ${e?"linear-gradient(135deg, #10b981 0%, #059669 100%)":"linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"}; color: white; padding: 14px 26px; border-radius: 16px; font-weight: 900; font-size: 0.92rem; z-index: 99999; box-shadow: 0 10px 30px rgba(0,0,0,0.5); animation: fadeIn 0.3s; max-width: 92vw; text-align: center; direction: rtl; border: 1.5px solid rgba(255,255,255,0.3);`,n.innerHTML=o,document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transition="opacity 0.4s",setTimeout(()=>n.remove(),400)},t)}window.planexNavigateBackToGroups=function(o){o&&typeof o.preventDefault=="function"&&o.preventDefault(),o&&typeof o.stopPropagation=="function"&&o.stopPropagation(),console.log("Back to groups clicked"),window.leaderboardState&&(window.leaderboardState.currentGroupId=null);try{localStorage.removeItem("planex_active_group_id"),localStorage.removeItem("planex_current_group_view"),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data")}catch(e){console.warn("[planexNavigateBackToGroups] Storage purge error:",e)}window._leaderboardMemoryCache={key:null,data:null},window.leaderboardService&&typeof window.leaderboardService.setActiveGroupCode=="function"?window.leaderboardService.setActiveGroupCode(null):typeof S<"u"&&S&&typeof S.setActiveGroupCode=="function"&&S.setActiveGroupCode(null),typeof p<"u"&&p&&typeof p.setActiveGroupCode=="function"&&p.setActiveGroupCode(null),window.lastLeaderboardResult=null,typeof renderGroupsHub=="function"?renderGroupsHub():typeof it=="function"?it():typeof gt=="function"&&gt(),typeof window.renderApp=="function"&&window.renderApp()};window.handleBackToGroupsList=window.handleBackToGroupList=window.planexNavigateBackToGroups;function gt(){return S&&typeof S.setActiveGroupCode=="function"&&S.setActiveGroupCode(null),localStorage.removeItem("planex_current_group_view"),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data"),window.lastLeaderboardResult=null,ft()}window.renderGroupsHub=window.initLeaderboardView=gt;const it=gt;window.handleSwitchGroup=o=>{if(!o||o==="GLOBAL"){window.handleBackToGroupList();return}S&&typeof S.setActiveGroupCode=="function"&&S.setActiveGroupCode(o),window.lastLeaderboardResult=null,ke(`🔄 ورود به جدول گروه «${o}»`,!0,1800),window.renderApp&&window.renderApp()};window.handleCreateGroupSubmit=async()=>{var a,i,r,d,s;const o=document.getElementById("create-room-name")||document.getElementById("input-create-group-name"),e=o?o.value.trim():"";if(!e){alert("لطفاً نام گروه رقابتی خود را وارد کنید (مثلاً: گروه پره‌اینترنی اسفند)."),o&&o.focus();return}const t=document.getElementById("btn-submit-create-room")||document.getElementById("btn-create-group-submit"),n=t?t.innerHTML:"";t&&(t.disabled=!0,t.innerHTML="⏳ در حال ایجاد گروه...");try{const l=((a=document.querySelector('input[name="create-room-type"]:checked'))==null?void 0:a.value)==="private",c=((i=document.getElementById("create-room-category"))==null?void 0:i.value)||"general",y=parseInt((r=document.getElementById("create-room-capacity"))==null?void 0:r.value)||600,m=((s=(d=document.getElementById("create-room-announcement"))==null?void 0:d.value)==null?void 0:s.trim())||"",u=await S.createGroup(e,l,{category:c,capacity:y,announcement:m});S&&typeof S.setActiveGroupCode=="function"&&S.setActiveGroupCode(u.groupCode),typeof p<"u"&&p&&typeof p.setActiveGroupCode=="function"&&p.setActiveGroupCode(u.groupCode);try{localStorage.setItem("planex_active_group_code",u.groupCode),localStorage.setItem("planex_current_group_view",u.groupCode)}catch(b){console.warn("Storage save error in handleCreateGroupSubmit:",b)}typeof window.closeActiveModal=="function"?window.closeActiveModal():typeof window.closeCreateGroupModal=="function"?window.closeCreateGroupModal():window.appState&&(window.appState.activeModal=null),window.lastLeaderboardResult=null,typeof window.renderApp=="function"&&window.renderApp(),ke(`🎉 گروه «${u.groupName}» با موفقیت ایجاد شد! کد دعوت: ${u.groupCode}`,!0,4e3)}catch(l){console.error("Create group failed:",l),alert("خطا در ایجاد گروه: "+l.message)}finally{t&&(t.disabled=!1,t.innerHTML=n||"🚀 ایجاد اتاق و دریافت کد دعوت")}};window.handleModalJoinRoomSubmit=async()=>{const o=document.getElementById("input-modal-join-code")||document.getElementById("input-join-group-code"),e=o?o.value.trim().toUpperCase():"";if(!e){alert("لطفاً کد ۶ رقمی گروه را وارد کنید (مثال: PLX-4829)."),o&&o.focus();return}await window.handleJoinGroupSubmit(e)};window.handleJoinGroupSubmit=async(o=null)=>{let e=o;if(!e){const n=document.getElementById("input-join-group-code")||document.getElementById("input-modal-join-code");e=n?n.value.trim().toUpperCase():""}if(!e){alert("لطفاً کد ۶ رقمی گروه را وارد کنید (مثال: PLX-4829).");return}const t=p&&typeof p.getProfile=="function"?p.getProfile():{};if((!t.name||!t.target||!t.major)&&window.appState){window.appState.pendingJoinRoom={id:e,name:`گروه ${e}`},window.appState.activeModal="joinRoomOnboarding",window.renderApp&&window.renderApp();return}try{const n=await S.joinPrivateGroup(e);if(window.lastLeaderboardResult=null,n.requiresVerification){ke("⚠️ برای ورود به گروه، لطفاً ابتدا وارد حساب کاربری خود شوید.",!1,4500),window.openLoginModal&&window.openLoginModal();return}n.success?(ke(n.message||"با موفقیت به گروه پیوستید! 🎉",!0,4e3),S&&typeof S.setActiveGroupCode=="function"&&S.setActiveGroupCode(e),typeof window.closeActiveModal=="function"?window.closeActiveModal():typeof window.closeCreateGroupModal=="function"?window.closeCreateGroupModal():window.appState&&(window.appState.activeModal=null)):ke(n.message||"خطا در ورود به گروه",!1,3500),window.renderApp&&window.renderApp()}catch(n){console.error("Join group failed:",n),alert("خطا در ورود به گروه: "+n.message)}};window.handleToggleGroupPrivacyAction=async(o,e)=>{try{const t=await S.toggleGroupPrivacy(o,e);t&&t.success?ke(t.message||`نوع گروه به «${e?"خصوصی":"عمومی"}» تغییر یافت.`):ke(t.message||"خطا در تغییر نوع گروه",!1),window.lastLeaderboardResult=null,window.renderApp&&window.renderApp()}catch(t){alert("خطا در تغییر نوع گروه: "+t.message)}};window.handleRefreshPendingRequests=async o=>{try{window.isFetchingPendingRequests=!0;const e=await S.fetchPendingRequests(o);window.groupPendingRequests=Array.isArray(e)?e:[],window.isFetchingPendingRequests=!1,ke(`🔄 لیست درخواست‌های عضویت به‌روزرسانی شد (${window.groupPendingRequests.length} مورد)`,!0,2e3),window.renderApp&&window.renderApp()}catch(e){window.isFetchingPendingRequests=!1,console.error("Refresh pending requests error:",e)}};window.handleLeaveGroupAction=async(o=null)=>{const e=S&&typeof S.getUserGroups=="function"?S.getUserGroups():[],t=String(o||(S&&typeof S.getActiveGroupCode=="function"?S.getActiveGroupCode():"")).trim().toUpperCase(),n=e.find(i=>(i.code||i.groupCode)===t)||(S&&typeof S.getActiveGroup=="function"?S.getActiveGroup():null),a=n?n.name||n.groupName:t||"این گروه";if(confirm(`آیا از خروج/انصراف از «${a}» اطمینان دارید؟`))try{["planex_user_groups","planex_my_rooms","my_rooms","planex_joined_groups","user_rooms"].forEach(i=>{try{const r=localStorage.getItem(i);if(r){const d=JSON.parse(r);if(Array.isArray(d)){const s=d.filter(l=>String(l.code||l.room_code||l.groupCode||l.id||"").trim().toUpperCase()!==t);localStorage.setItem(i,JSON.stringify(s))}}}catch{}}),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data"),localStorage.removeItem(`planex_group_cache_${t}`),localStorage.removeItem(`planex_group_roster_${t}`),S&&typeof S.leaveUserGroup=="function"&&await S.leaveUserGroup(t),S&&typeof S.setActiveGroupCode=="function"&&S.setActiveGroupCode(null),window.lastLeaderboardResult=null,ke(`🚪 با موفقیت از گروه «${a}» خارج شدید.`),S&&typeof S.fetchMyRooms=="function"&&await S.fetchMyRooms(!0).catch(()=>{}),window.handleBackToGroupList()}catch(i){console.error("Leave group failed:",i),alert("خطا در خروج از گروه: "+i.message)}};window.handleDeleteGroupAction=async(o=null)=>{const e=S&&typeof S.getUserGroups=="function"?S.getUserGroups():[],t=String(o||(S&&typeof S.getActiveGroupCode=="function"?S.getActiveGroupCode():"")).trim().toUpperCase(),n=e.find(l=>(l.code||l.groupCode)===t)||(S&&typeof S.getActiveGroup=="function"?S.getActiveGroup():null),a=n?n.name||n.groupName:t||"این گروه";if(!confirm(`🚨 هشدار مدیر:

آیا از حذف کامل گروه «${a}» اطمینان دارید؟

با تایید شما، تمام اطلاعات گروه، اعضا و جدول آن پاک شده و برای همه منحل می‌شود.`))return;const i=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}"),r=S&&typeof S.getUserProfile=="function"?S.getUserProfile():{},d=i.id||i.telegram_id||r.userId||"",s=i.phone||i.phone_number||r.phone||"";try{["planex_user_groups","planex_my_rooms","my_rooms","planex_joined_groups","user_rooms"].forEach(y=>{try{const m=localStorage.getItem(y);if(m){const u=JSON.parse(m);if(Array.isArray(u)){const b=u.filter(g=>String(g.code||g.room_code||g.groupCode||g.id||"").trim().toUpperCase()!==t);localStorage.setItem(y,JSON.stringify(b))}}}catch{}}),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data"),localStorage.removeItem(`planex_group_cache_${t}`),localStorage.removeItem(`planex_group_roster_${t}`);const l=new AbortController,c=setTimeout(()=>l.abort(),3e3);fetch(`${le}/api/rooms/delete.php`,{method:"POST",headers:{"Content-Type":"application/json"},signal:l.signal,body:JSON.stringify({room_code:t||(n==null?void 0:n.code)||(n==null?void 0:n.groupCode),user_id:d,phone:s,creator_id:d})}).catch(()=>{}).finally(()=>clearTimeout(c)),S&&typeof S.deleteGroup=="function"&&await S.deleteGroup(t),S&&typeof S.setActiveGroupCode=="function"&&S.setActiveGroupCode(null),window.lastLeaderboardResult=null,ke(`🗑️ گروه «${a}» با موفقیت به طور کامل حذف شد.`),S&&typeof S.fetchMyRooms=="function"&&await S.fetchMyRooms(!0).catch(()=>{}),window.handleBackToGroupList()}catch(l){console.error("Delete group failed:",l),alert("خطا در حذف کامل گروه: "+l.message)}};window.handleApproveRequestAction=async(o,e)=>{try{const t=await S.approveMember(o,e);ke(t.message||"✅ کاربر با موفقیت به گروه اضافه شد",!0),window.lastLeaderboardResult=null,window.isFetchingPendingRequests=!1;const n=await S.fetchPendingRequests(o);window.groupPendingRequests=n,window.renderApp&&window.renderApp()}catch(t){console.error("Error approving member:",t),ke("خطا در تایید ورود: "+t.message,!1)}};window.handleRejectRequestAction=async(o,e)=>{try{const t=await S.rejectMember(o,e);ke(t.message||"❌ درخواست عضویت رد شد",!1),window.lastLeaderboardResult=null,window.isFetchingPendingRequests=!1;const n=await S.fetchPendingRequests(o);window.groupPendingRequests=n,window.renderApp&&window.renderApp()}catch(t){console.error("Error rejecting member:",t),ke("خطا در رد درخواست: "+t.message,!1)}};window.handleCopyGroupCode=async o=>{if(o)try{navigator.clipboard&&navigator.clipboard.writeText?await navigator.clipboard.writeText(o):prompt("کد گروه را کپی کنید:",o),ke(`📋 کد گروه (${o}) در حافظه کپی شد!`)}catch{prompt("کد گروه را کپی کنید:",o)}};window.handleShareGroupInvite=async(o,e)=>{const t=e||"رقابت مطالعه",n=`${window.location.origin}${window.location.pathname}?group=${encodeURIComponent(o)}`,a=`🔥 دعوت به گروه رقابت مطالعه «${t}» در PlanEx

🔑 کد ورود به گروه: ${o}
🔗 لینک ورود مستقیم:
${n}`;if(navigator.share)try{await navigator.share({title:`گروه مطالعه «${t}»`,text:a,url:n});return}catch{}try{navigator.clipboard&&navigator.clipboard.writeText?(await navigator.clipboard.writeText(a),ke(`🔗 متن و لینک دعوت گروه «${t}» کپی شد!`)):prompt("متن دعوت را کپی کنید:",a)}catch{prompt("متن دعوت را کپی کنید:",a)}};window.handleLiveLeaderboardRefresh=async()=>{if(!window.isLeaderboardRefreshing){window.isLeaderboardRefreshing=!0,window.renderApp&&window.renderApp();try{const o=await S.fetchLeaderboard(null,!0);window.lastLeaderboardResult=o,ke("🔄 جدول رتبه‌بندی گروه با موفقیت به‌روزرسانی شد.",!0,2e3)}catch(o){console.error("Live refresh failed:",o)}finally{window.isLeaderboardRefreshing=!1,window.renderApp&&window.renderApp()}}};window.handleManualLeaderboardSync=async()=>{if(!window.isLeaderboardSyncing){window.isLeaderboardSyncing=!0,window.renderApp&&window.renderApp();try{const o=await S.syncUserScore(!0),e=await S.fetchLeaderboard(null,!0);window.lastLeaderboardResult=e,o&&o.success&&o.serverConfirmed?ke(`✅ کارنامه شما در گروه ثبت شد${o.rank?` — رتبه ${o.rank}`:""}`,!0,3500):ke("⚠️ اطلاعات به صورت محلی در گروه ذخیره شد.",!1,4500)}catch(o){console.error("Manual sync failed:",o),ke("❌ خطا در برقراری ارتباط با سرور.",!1,3500)}finally{window.isLeaderboardSyncing=!1,window.renderApp&&window.renderApp()}}};function Bo(){try{const o=document.getElementById("input-leaderboard-search");o&&(o.oninput=e=>{try{window.leaderboardFilterQuery=e.target.value;const t=(e.target.value||"").toLowerCase().trim();document.querySelectorAll(".leaderboard-row").forEach(a=>{const i=(a.dataset.search||"").toLowerCase();!t||i.includes(t)?a.style.display="":a.style.display="none"})}catch(t){console.error("Error in leaderboard search filter:",t)}}),window._leaderboardEventDelegationBound||(window._leaderboardEventDelegationBound=!0,document.addEventListener("click",e=>{if(e.target.closest('#btn-back-to-groups, .btn-back-groups, [data-action="back-to-groups"]')){e.preventDefault(),e.stopPropagation(),typeof window.planexNavigateBackToGroups=="function"&&window.planexNavigateBackToGroups(e);return}const n=e.target.closest(".btn-approve-request");if(n){e.preventDefault();const i=n.getAttribute("data-group-id")||n.dataset.groupId,r=n.getAttribute("data-user-id")||n.dataset.userId;i&&r&&typeof window.handleApproveRequestAction=="function"&&window.handleApproveRequestAction(i,r);return}const a=e.target.closest(".btn-reject-request");if(a){e.preventDefault();const i=a.getAttribute("data-group-id")||a.dataset.groupId,r=a.getAttribute("data-user-id")||a.dataset.userId;i&&r&&typeof window.handleRejectRequestAction=="function"&&window.handleRejectRequestAction(i,r);return}}))}catch(o){console.error("Error binding leaderboard events:",o)}}function jt(o,e){if(!o)return!1;if(o.isOwner||o.is_owner||o.isCreator||o.is_creator)return!0;let t=null;try{t=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}")}catch{}const n=s=>{if(!s)return"";let l=String(s).replace(/[^0-9]/g,"");return l.startsWith("98")&&l.length>=12?l="0"+l.slice(2):l.length===10&&l.startsWith("9")&&(l="0"+l),l},a=[n(t==null?void 0:t.phone),n(t==null?void 0:t.phone_number),n(e==null?void 0:e.phone),n(localStorage.getItem("planex_user_phone"))].filter(Boolean),i=[String((t==null?void 0:t.id)||""),String((t==null?void 0:t.telegram_id)||""),String((e==null?void 0:e.userId)||""),String(localStorage.getItem("planex_leaderboard_user_id")||"")].filter(Boolean),r=[n(o.creator_phone),n(o.admin_phone),n(o.owner_phone)].filter(Boolean),d=[String(o.creator_id||""),String(o.admin_id||""),String(o.owner_id||""),String(o.userId||"")].filter(Boolean);if(a.some(s=>r.includes(s))||i.some(s=>d.includes(s)))return!0;if(window.lastLeaderboardResult&&Array.isArray(window.lastLeaderboardResult.roster)&&window.lastLeaderboardResult.roster.length>0){const s=window.lastLeaderboardResult.roster[0];if(s){const l=String(s.userId||s.user_id||""),c=n(s.phone||s.user_phone);if(l&&i.includes(l)||c&&a.includes(c))return!0}}return!1}function lt(o,e=36){const t=!!(o!=null&&o.isUser||o!=null&&o.isCurrentUser||o!=null&&o.is_user),n=(o==null?void 0:o.avatar_url)||(o==null?void 0:o.avatarUrl)||(o==null?void 0:o.avatar)||(o==null?void 0:o.photo_url)||t&&localStorage.getItem("planex_user_avatar")||""||"",a=String((o==null?void 0:o.nickname)||(o==null?void 0:o.name)||"کاربر").trim(),i=(a.charAt(0)||"👤").toUpperCase(),r=String(i).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),d=["linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)","linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)","linear-gradient(135deg, #10b981 0%, #047857 100%)","linear-gradient(135deg, #f59e0b 0%, #d97706 100%)","linear-gradient(135deg, #ec4899 0%, #be185d 100%)","linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)","linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)"];let s=0;for(let c=0;c<a.length;c++)s+=a.charCodeAt(c);const l=d[s%d.length];return n&&(n.startsWith("http")||n.startsWith("data:image"))?`
      <div style="position: relative; width: ${e}px; min-width: ${e}px; max-width: ${e}px; height: ${e}px; min-height: ${e}px; max-height: ${e}px; aspect-ratio: 1 / 1 !important; flex-shrink: 0 !important; display: inline-flex; align-items: center; justify-content: center; border-radius: 50% !important; overflow: hidden !important;">
        <img src="${n}" style="width: 100%; height: 100%; aspect-ratio: 1 / 1 !important; flex-shrink: 0 !important; border-radius: 50% !important; object-fit: cover !important; border: 1.5px solid rgba(255,255,255,0.25); background: #1f2029;" 
          onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" />
        <div style="display: none; width: 100%; height: 100%; aspect-ratio: 1 / 1 !important; flex-shrink: 0 !important; border-radius: 50% !important; background: ${l}; color: white; font-weight: 800; font-size: ${Math.max(10,Math.round(e*.42))}px; align-items: center; justify-content: center; border: 1.5px solid rgba(255,255,255,0.25); box-shadow: 0 2px 6px rgba(0,0,0,0.3); overflow: hidden !important;">
          ${r}
        </div>
      </div>
    `:`
    <div style="width: ${e}px; min-width: ${e}px; max-width: ${e}px; height: ${e}px; min-height: ${e}px; max-height: ${e}px; aspect-ratio: 1 / 1 !important; flex-shrink: 0 !important; border-radius: 50% !important; background: ${l}; color: white; font-weight: 800; font-size: ${Math.max(10,Math.round(e*.42))}px; display: inline-flex; align-items: center; justify-content: center; border: 1.5px solid rgba(255,255,255,0.25); box-shadow: 0 2px 6px rgba(0,0,0,0.3); overflow: hidden !important;">
      ${r}
    </div>
  `}function ft(o=null){var e,t;try{let n=null;try{n=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}let a=!0;if(n&&(n.phone||n.phone_number||n.id||n.telegram_id)&&(a=!1),a)return`
        <div id="tab-leaderboard" class="main-container active" style="display: block; padding-bottom: 90px; direction: rtl;">
          <div style="margin-bottom: 20px;">
            <h2 style="font-size: 1.25rem; font-weight: 900; color: #f8fafc; margin: 0 0 4px 0; display: flex; align-items: center; gap: 8px;">
              <span>🏆 تالار رقابت</span>
            </h2>
            <p style="font-size: 0.78rem; color: #8e8e9c; margin: 0;">رقابت آنلاین در گروه‌های مطالعه خصوصی</p>
          </div>
          
          <div style="padding: 24px 20px; text-align: center; border: 1px solid rgba(234, 179, 8, 0.2); background: rgba(234, 179, 8, 0.03); border-radius: 24px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 50vh; gap: 16px;">
            <div style="width: 70px; height: 70px; border-radius: 20px; background: rgba(234, 179, 8, 0.1); border: 1px solid rgba(234, 179, 8, 0.3); display: flex; align-items: center; justify-content: center; font-size: 2.2rem; box-shadow: 0 0 30px rgba(234, 179, 8, 0.15);">
              🔒
            </div>
            
            <h3 style="margin: 0; font-size: 1.1rem; font-weight: 900; color: #facc15;">
              تالار رقابت و گروه‌های مطالعه اختصاصی اعضا است
            </h3>
            
            <p style="margin: 0; font-size: 0.8rem; color: #a1a1aa; line-height: 1.7; max-width: 400px;">
              برای مشاهده جدول رتبه‌بندی، رقابت با دیگران، و ساخت یا پیوستن به گروه‌های درسی، لطفاً ابتدا وارد حساب کاربری خود شوید.
            </p>
            
            <div style="display: flex; flex-direction: column; gap: 12px; width: 100%; max-width: 300px; margin-top: 10px;">
              <button onclick="if(window.openLoginModal) window.openLoginModal(); else if (window.appState) { window.appState.activeModal = 'login'; window.renderApp(); }" style="background: #7c3aed; color: #fff; padding: 12px 20px; border-radius: 14px; font-size: 0.85rem; font-weight: 800; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%;">
                🔑 ورود به حساب کاربری
              </button>
            </div>
          </div>
        </div>
      `;const i=S&&typeof S.getUserProfile=="function"?S.getUserProfile():{nickname:"داوطلب پرتلاش",target:"کنکور سراسری ۱۴۰۶",userId:"local_user"},r=S&&typeof S.getTodayStats=="function"?S.getTodayStats():{studyMinutes:0,studyHours:0,testCount:0,subjects:[],gregorianDate:new Date().toISOString().split("T")[0],jalaliDateStr:""},d=S&&typeof S.getUserGroups=="function"?S.getUserGroups():[],s=S&&typeof S.getActiveGroupCode=="function"?S.getActiveGroupCode():null,l=h=>String(h??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),c=h=>String(h).replace(/[0-9]/g,E=>"۰۱۲۳۴۵۶۷۸۹"[E]);window.lastPublicRoomsFetchTime=window.lastPublicRoomsFetchTime||0,window.lastEarlyBirdFetchTime=window.lastEarlyBirdFetchTime||0,window.lastLeaderboardFetchTime=window.lastLeaderboardFetchTime||0,window.lastPendingRequestsFetchTime=window.lastPendingRequestsFetchTime||0,window.lastUserGroupsFetchTime=window.lastUserGroupsFetchTime||0;const y=5*60*1e3,m=Date.now();(d.length===0||m-window.lastUserGroupsFetchTime>=2*60*1e3)&&!window.isFetchingUserGroupsBg&&(i.phone||i.userId)&&S&&typeof S.fetchUserGroups=="function"&&(window.lastUserGroupsFetchTime=m,window.isFetchingUserGroupsBg=!0,S.fetchUserGroups(!1).then(h=>{var E;window.isFetchingUserGroupsBg=!1,Array.isArray(h)&&h.length>0&&d.length===0&&!((E=window.appState)!=null&&E.activeModal)&&window.renderApp&&window.renderApp()}).catch(()=>{window.isFetchingUserGroupsBg=!1})),!s&&(m-window.lastPublicRoomsFetchTime>=y||!window.lastPublicRoomsList)&&!window.isFetchingPublicRoomsBg&&S&&typeof S.fetchPublicRooms=="function"&&(window.lastPublicRoomsFetchTime=m,window.isFetchingPublicRoomsBg=!0,S.fetchPublicRooms().then(h=>{var E;window.lastPublicRoomsList=Array.isArray(h)?h:[],window.isFetchingPublicRoomsBg=!1,!((E=window.appState)!=null&&E.activeModal)&&!S.getActiveGroupCode()&&window.renderApp&&window.renderApp()}).catch(()=>{window.isFetchingPublicRoomsBg=!1})),(m-window.lastEarlyBirdFetchTime>=y||!window.lastEarlyBirdList)&&!window.isFetchingEarlyBirds&&S&&typeof S.fetchEarlyBirds=="function"&&(window.lastEarlyBirdFetchTime=m,window.isFetchingEarlyBirds=!0,S.fetchEarlyBirds().then(h=>{var E;window.isFetchingEarlyBirds=!1,h&&Array.isArray(h.list)&&(window.lastEarlyBirdList=h.list,!((E=window.appState)!=null&&E.activeModal)&&window.renderApp&&window.renderApp())}).catch(()=>{window.isFetchingEarlyBirds=!1}));const u=(window.lastPublicRoomsList||[]).filter(h=>{const E=h.code||h.groupCode;return E&&!d.some(R=>(R.code||R.groupCode)===E)}),b=window.lastEarlyBirdList||[],g=(h=null)=>{let E=b;if(h&&Array.isArray(h)&&h.length>0){const R=h.map(U=>U.userId||U.user_id);E=b.filter(U=>R.includes(U.userId||U.user_id))}return`
        <div style="background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 18px; padding: 16px; margin-bottom: 20px;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 10px;">
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 1.25rem;">🌅</span>
              <h3 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: #ffffff;">باشگاه سحرخیزان (۰۵:۰۰ تا ۰۸:۰۰ صبح)</h3>
            </div>
            <span style="font-size: 0.72rem; color: #f59e0b; background: rgba(245, 158, 11, 0.12); padding: 2px 8px; border-radius: 8px; font-weight: 700;">
              ☀️ ۰۵:۰۰ تا ۰۸:۰۰
            </span>
          </div>

          ${E.length===0?`
            <div style="background: rgba(255, 255, 255, 0.02); border: 1px dashed rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 16px; text-align: center; color: #8e8e9c; font-size: 0.8rem;">
              ☀️ هنوز سحرخیزی برای امروز ثبت نشده است؛ اولین نفر باشید!
            </div>
          `:`
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px;">
              ${E.map(R=>`
                <div style="background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.06); padding: 8px 12px; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                  <div style="display: flex; align-items: center; gap: 8px; overflow: hidden;">
                    <span style="font-size: 1rem;">☀️</span>
                    <div style="overflow: hidden;">
                      <strong style="font-size: 0.82rem; color: #e4e4e7; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${l(R.nickname||R.name||"سحرخیز")}</strong>
                      <span style="font-size: 0.68rem; color: #8e8e9c;">${l(R.target||"")}</span>
                    </div>
                  </div>
                  <span style="font-size: 0.76rem; font-weight: 800; color: #f59e0b; font-family: 'Outfit', monospace; background: rgba(245, 158, 11, 0.15); padding: 2px 6px; border-radius: 6px;">
                    ${l(c(R.wakeTime||"۰۵:۰۰"))}
                  </span>
                </div>
              `).join("")}
            </div>
          `}
        </div>
      `};if(!s)return`
        <div id="tab-leaderboard" class="main-container active" style="display: block; padding-bottom: 110px; direction: rtl;">

          <!-- Header Title & Action Buttons -->
          <div style="margin-bottom: 20px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
            <div>
              <h2 style="font-size: 1.25rem; font-weight: 900; color: #f8fafc; margin: 0 0 4px 0; display: flex; align-items: center; gap: 8px;">
                <span>🏆</span>
                <span>تالار رقابت و گروه‌های مطالعه</span>
              </h2>
              <p style="font-size: 0.78rem; color: #8e8e9c; margin: 0;">لیست گروه‌های درسی شما و گروه‌های عمومی برای پیوستن</p>
            </div>

            <!-- Top Action Buttons: Edit Profile, Create New Group & Join with Code -->
            <div style="display: flex; align-items: center; gap: 8px;">
              <button type="button" onclick="window.openEditProfileModal()" 
                      style="padding: 10px 16px; font-size: 0.82rem; font-weight: 800; background: rgba(124, 58, 237, 0.18); color: #c4b5fd; border: 1px solid rgba(124, 58, 237, 0.35); border-radius: 12px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
                <span>✏️</span>
                <span>ویرایش مشخصات</span>
              </button>

              <button type="button" onclick="event.preventDefault(); event.stopPropagation(); if (window.openCreateGroupModal) { window.openCreateGroupModal('create'); } else if (window.openCreateRoomModal) { window.openCreateRoomModal('create'); } else if (window.appState) { window.appState.activeModal = 'createRoom'; window.renderApp(); }" 
                      class="btn-primary" 
                      style="padding: 10px 16px; font-size: 0.82rem; font-weight: 800; background: #7c3aed; color: white; border: none; border-radius: 12px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 4px 14px rgba(124, 58, 237, 0.3);">
                <span>➕</span>
                <span>ساخت گروه جدید</span>
              </button>

              <button type="button" onclick="event.preventDefault(); event.stopPropagation(); if (window.openCreateGroupModal) { window.openCreateGroupModal('join'); } else if (window.openCreateRoomModal) { window.openCreateRoomModal('join'); } else if (window.appState) { window.appState.activeModal = 'createRoom'; window.renderApp(); }" 
                      style="padding: 10px 16px; font-size: 0.82rem; font-weight: 800; background: #1f2029; color: #e4e4e7; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 12px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
                <span>🔍</span>
                <span>پیوستن با کد</span>
              </button>
            </div>
          </div>

          <!-- 🌅 Early Birds Section (باشگاه سحرخیزان عمومی) -->
          ${g(null)}

          <!-- ================= SECTION 1: گروه‌های من ================= -->
          <div style="margin-bottom: 28px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
              <div style="width: 8px; height: 18px; background: #7c3aed; border-radius: 4px;"></div>
              <h3 style="margin: 0; font-size: 1.05rem; font-weight: 800; color: #f4f4f6;">👥 گروه‌های من</h3>
              <span style="font-size: 0.74rem; background: rgba(124, 58, 237, 0.15); color: #c4b5fd; padding: 2px 8px; border-radius: 8px; font-weight: 700;">
                ${c(d.length)} گروه
              </span>
            </div>

            ${d.length===0?`
              <div style="background: #16171d; border: 1px dashed rgba(255,255,255,0.12); border-radius: 18px; padding: 28px 20px; text-align: center;">
                <div style="font-size: 2.2rem; margin-bottom: 10px;">👥</div>
                <h4 style="margin: 0 0 6px 0; font-size: 0.95rem; color: #e4e4e7; font-weight: 800;">شما هنوز در هیچ گروهی عضو نیستید</h4>
                <p style="margin: 0 0 16px 0; font-size: 0.8rem; color: #8e8e9c; line-height: 1.6;">
                  با استفاده از دکمه‌های بالا، یک گروه اختصاصی جدید بسازید یا با کد ۶ رقمی وارد شوید.
                </p>
                <button type="button" onclick="if (window.openCreateGroupModal) { window.openCreateGroupModal('create'); } else if (window.openCreateRoomModal) { window.openCreateRoomModal('create'); } else if (window.appState) { window.appState.activeModal = 'createRoom'; window.renderApp(); }" class="btn-primary" style="padding: 9px 18px; font-size: 0.8rem; font-weight: 800; background: #7c3aed; color: white; border: none; border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 6px;">
                  <span>➕ ساخت اولین گروه</span>
                </button>
              </div>
            `:`
              <div style="display: flex; flex-direction: column; gap: 10px;">
                ${d.map(h=>{const E=h.code||h.groupCode,R=h.name||h.groupName||`گروه ${E}`,U=jt(h,i),de=U?"👑 مدیر":"👤 عضو",B=U?"rgba(245, 158, 11, 0.18)":"rgba(16, 185, 129, 0.15)",ue=U?"#f59e0b":"#10b981",xe=U?"rgba(245, 158, 11, 0.4)":"rgba(16, 185, 129, 0.3)",ge=S&&typeof S.getGroupRoster=="function"?S.getGroupRoster(E):[],Ae=ge&&ge.length>0?ge.length:h.membersCount||1,we=!U&&(h.status==="pending"||h.isPending===!0);return`
                    <div onclick="window.handleSwitchGroup('${E}');" 
                         class="glass-panel" 
                         style="padding: 16px 18px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: all 0.2s ease; gap: 12px;">
                      
                      <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 44px; height: 44px; border-radius: 14px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.1); display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
                          🏆
                        </div>
                        <div>
                          <div style="display: flex; align-items: center; gap: 8px;">
                            <strong style="font-size: 0.95rem; font-weight: 800; color: #f8fafc;">${l(R)}</strong>
                            <span style="font-size: 0.68rem; background: ${B}; color: ${ue}; border: 1px solid ${xe}; padding: 2px 7px; border-radius: 6px; font-weight: 800;">
                              ${de}
                            </span>
                          </div>
                          <div style="display: flex; align-items: center; gap: 10px; margin-top: 4px; font-size: 0.74rem; color: #8e8e9c;">
                            <span style="font-family: 'Outfit', monospace; font-weight: 700; color: #cbd5e1;">کد: ${l(E)}</span>
                            <span>•</span>
                            <span>👥 ${c(Ae)} عضو</span>
                          </div>
                        </div>
                      </div>

                      <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 0.78rem; font-weight: 800; color: ${we?"#facc15":"#7c3aed"}; background: ${we?"rgba(234, 179, 8, 0.1)":"rgba(124, 58, 237, 0.1)"}; padding: 6px 12px; border-radius: 10px; border: 1px solid ${we?"rgba(234, 179, 8, 0.25)":"rgba(124, 58, 237, 0.2)"};">
                          ${we?"⏳ وضعیت در انتظار":"ورود به تالار ⬅️"}
                        </span>
                      </div>
                    </div>
                  `}).join("")}
              </div>
            `}
          </div>

          <!-- ================= SECTION 2: سایر گروه‌های عمومی فعال (واقعی) ================= -->
          ${u.length>0?`
            <div>
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
                <div style="width: 8px; height: 18px; background: #3b82f6; border-radius: 4px;"></div>
                <h3 style="margin: 0; font-size: 1.05rem; font-weight: 800; color: #f4f4f6;">🌐 سایر گروه‌های عمومی فعال</h3>
              </div>

              <div style="display: flex; flex-direction: column; gap: 10px;">
                ${u.map(h=>`
                  <div class="glass-panel" style="padding: 16px 18px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; display: flex; justify-content: space-between; align-items: center; gap: 12px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                      <div style="width: 44px; height: 44px; border-radius: 14px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
                        🌐
                      </div>
                      <div>
                        <strong style="font-size: 0.92rem; font-weight: 800; color: #f8fafc; display: block;">${l(h.title||h.name)}</strong>
                        <div style="display: flex; align-items: center; gap: 10px; margin-top: 4px; font-size: 0.74rem; color: #8e8e9c;">
                          <span>🌐 عمومی</span>
                          <span>•</span>
                          <span>👥 ${c(h.member_count||1)} عضو</span>
                          <span>•</span>
                          <span style="font-family: 'Outfit', monospace; color: #a1a1aa;">کد: ${l(h.code)}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button type="button" onclick="window.handleJoinGroupSubmit('${h.code}');" style="padding: 7px 14px; font-size: 0.78rem; font-weight: 800; background: #3b82f6; color: white; border: none; border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;">
                        <span>🔑</span>
                        <span>پیوستن به گروه</span>
                      </button>
                    </div>
                  </div>
                `).join("")}
              </div>
            </div>
          `:""}

        </div>
        ${((e=window.appState)==null?void 0:e.activeModal)==="editProfile"?Dt():""}
      `;const f=String(s).trim().toUpperCase(),x=d.find(h=>(h.code||h.groupCode)===f)||(S&&typeof S.getActiveGroup=="function"?S.getActiveGroup():null)||{code:f,name:`گروه ${f}`},w=x.name||x.groupName||`گروه ${f}`,A=jt(x,i),k=!!(!A&&x&&x.status==="pending"),$=!!(x&&(x.is_private===1||x.type==="private"||x.isPrivate));(!window.lastLeaderboardResult||window.lastLeaderboardResult.groupCode!==f)&&S&&typeof S.getCachedLeaderboard=="function"&&(window.lastLeaderboardResult=S.getCachedLeaderboard(r.gregorianDate,f)),(m-window.lastLeaderboardFetchTime>=y||!window.lastLeaderboardResult||window.lastLeaderboardResult.groupCode!==f)&&!window.isFetchingLeaderboardBg&&S&&typeof S.fetchLeaderboard=="function"&&(window.lastLeaderboardFetchTime=m,window.isFetchingLeaderboardBg=!0,S.fetchLeaderboard(r.gregorianDate,!0,f).then(h=>{var E;h&&(window.lastLeaderboardResult=h),window.isFetchingLeaderboardBg=!1,(E=window.appState)!=null&&E.activeModal||window.renderApp&&window.renderApp()}).catch(()=>{window.isFetchingLeaderboardBg=!1})),A&&(m-window.lastPendingRequestsFetchTime>=y||!window.groupPendingRequests)&&!window.isFetchingPendingRequests&&S&&typeof S.fetchPendingRequests=="function"&&(window.lastPendingRequestsFetchTime=m,window.isFetchingPendingRequests=!0,S.fetchPendingRequests(f).then(h=>{var E;window.isFetchingPendingRequests=!1,Array.isArray(h)&&(window.groupPendingRequests=h,!((E=window.appState)!=null&&E.activeModal)&&window.renderApp&&window.renderApp())}).catch(()=>{window.isFetchingPendingRequests=!1})),window.leaderboardTimeFilter="today";const M="today",I=S&&typeof S.getWeeklyStats=="function"?S.getWeeklyStats():null,D=new Map,T=S&&typeof S.getGroupRoster=="function"?S.getGroupRoster(f):[];Array.isArray(T)&&T.forEach(h=>{if(h&&(h.userId||h.id)){const E=String(h.userId||h.id);D.set(E,{...h,userId:E})}}),Array.isArray(x==null?void 0:x.members)&&x.members.forEach(h=>{if(h&&(h.userId||h.id)){const E=String(h.userId||h.id),R=D.get(E)||{};D.set(E,{...R,...h,userId:E})}});const N=window.lastLeaderboardResult&&(window.lastLeaderboardResult.leaderboard||window.lastLeaderboardResult.list)||[];if(Array.isArray(N)&&N.forEach(h=>{if(h&&(h.userId||h.id)){const E=String(h.userId||h.id),R=D.get(E)||{};D.set(E,{...R,...h,userId:E})}}),i&&i.userId){const h=String(i.userId),E=D.get(h)||{},R=i.avatar_url||i.avatar||i.photo_url||E.avatarUrl||"",U=i.nickname||i.name||E.nickname||"شما",de=i.target||E.target||"کنکور سراسری";D.set(h,{...E,userId:h,isUser:!0,isCurrentUser:!0,nickname:U,name:U,target:de,avatarUrl:R,avatar_url:R,avatar:R,photo_url:R,studyMinutes:Math.max(Number(E.studyMinutes||0),Number((r==null?void 0:r.studyMinutes)||0)),testCount:Math.max(Number(E.testCount||0),Number((r==null?void 0:r.testCount)||0)),weeklyStudyMinutes:Math.max(Number(E.weeklyStudyMinutes||0),Number((I==null?void 0:I.studyMinutes)||0),Number((r==null?void 0:r.studyMinutes)||0)),weeklyTestCount:Math.max(Number(E.weeklyTestCount||0),Number((I==null?void 0:I.testCount)||0),Number((r==null?void 0:r.testCount)||0)),isOwner:!!(A||E.isOwner)})}const C=Array.from(D.values());x&&(x.members=C);let P;S&&typeof S.aggregateAndRankMembers=="function"?P=S.aggregateAndRankMembers(C,"today"):P=C.map(h=>{const E=Number(h.studyMinutes||h.study_minutes||0),R=Number(h.testCount||h.test_count||0),U=E*60+R*10;return{...h,displayStudyMins:E,displayTestCount:R,score:U}}).sort((h,E)=>E.score!==h.score?E.score-h.score:E.displayStudyMins!==h.displayStudyMins?E.displayStudyMins-h.displayStudyMins:E.displayTestCount-h.displayTestCount).map((h,E)=>({...h,rank:E+1})),P=P.map(h=>{if(!!(h.isUser||h.isCurrentUser||h.userId===i.userId||i.phone&&h.phone===i.phone)){const R=i.avatar_url||i.avatar||i.photo_url||h.avatar_url||h.avatarUrl,U=i.nickname||i.name||h.nickname,de=i.target||h.target;return{...h,isUser:!0,isCurrentUser:!0,nickname:U,name:U,target:de,avatar_url:R,avatarUrl:R,avatar:R,photo_url:R}}return h});const L=!window.lastLeaderboardResult&&window.isFetchingLeaderboardBg,q=window.groupPendingRequests||[],F=P[0]||null,J=P[1]||null,G=P[2]||null,Q=(h=0,E=999,R=1)=>{const U=h/60;return E===1||U>=35?{name:"الماس",icon:"💎",color:"#38bdf8",bg:"rgba(56, 189, 248, 0.15)",border:"rgba(56, 189, 248, 0.35)"}:E<=3||U>=22?{name:"طلا",icon:"🥇",color:"#fbbf24",bg:"rgba(251, 191, 36, 0.15)",border:"rgba(251, 191, 36, 0.35)"}:E<=Math.max(4,Math.ceil(R*.5))||U>=10?{name:"نقره",icon:"🥈",color:"#cbd5e1",bg:"rgba(203, 213, 225, 0.15)",border:"rgba(203, 213, 225, 0.35)"}:{name:"برنز",icon:"🥉",color:"#cd7f32",bg:"rgba(205, 127, 50, 0.15)",border:"rgba(205, 127, 50, 0.35)"}},V=()=>{const h=new Date,R=6-(h.getDay()+1)%7,U=23-h.getHours(),de=59-h.getMinutes();return R>0?`${c(R)} روز و ${c(U)} ساعت`:`${c(U)} ساعت و ${c(de)} دقیقه`},X=()=>{if(!P||P.length===0)return"";const h=P.findIndex(xe=>xe.isUser||xe.isCurrentUser||xe.userId===i.userId||i.phone&&xe.phone===i.phone);if(h<0)return`
          <div style="background: linear-gradient(135deg, rgba(124, 58, 237, 0.18) 0%, rgba(59, 130, 246, 0.12) 100%); border: 1.5px solid rgba(168, 85, 247, 0.4); border-radius: 18px; padding: 14px 18px; margin-bottom: 18px; direction: rtl; animation: pulseGlow 3s infinite ease-in-out;">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 44px; height: 44px; border-radius: 14px; background: rgba(168, 85, 247, 0.2); border: 1px solid rgba(168, 85, 247, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.4rem;">
                  ⚡
                </div>
                <div>
                  <strong style="font-size: 0.94rem; color: #ffffff; font-weight: 800;">هنوز کارنامه امروز خود را در جدول ثبت نکرده‌اید! 🔥</strong>
                  <div style="font-size: 0.75rem; color: #e9d5ff; margin-top: 3px;">
                    با همگام‌سازی کارنامه یا شروع پارت مطالعه، وارد جدول رقابت شوید.
                  </div>
                </div>
              </div>
              <button onclick="window.handleManualLeaderboardSync()" style="background: #7c3aed; color: white; border: none; padding: 8px 16px; border-radius: 11px; font-weight: 800; font-size: 0.78rem; cursor: pointer; display: flex; align-items: center; gap: 6px;">
                <span>🔄</span>
                <span>ثبت کارنامه من</span>
              </button>
            </div>
          </div>
        `;const E=h+1,R=P[h];if(E===1){const xe=P[1]||null,ge=xe?Math.max(0,Math.round((R.displayStudyMins||0)-(xe.displayStudyMins||0))):0;return`
          <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(234, 179, 8, 0.12) 100%); border: 1.5px solid rgba(245, 158, 11, 0.45); border-radius: 18px; padding: 14px 18px; margin-bottom: 18px; direction: rtl; box-shadow: 0 0 20px rgba(245, 158, 11, 0.15);">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 44px; height: 44px; border-radius: 14px; background: rgba(245, 158, 11, 0.25); border: 1px solid rgba(245, 158, 11, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
                  👑
                </div>
                <div>
                  <strong style="font-size: 0.96rem; color: #fbbf24; font-weight: 900;">شما در صدر جدول رقابت هستید! 🌟</strong>
                  <div style="font-size: 0.75rem; color: #fde68a; margin-top: 3px;">
                    ${xe?`پیشتازی با <strong style="color: #ffffff;">${me(ge)}</strong> فاصله نسبت به نفر دوم (${l(xe.nickname||"رقیب")})`:"جایگاه اول را با تداوم مطالعه حفظ کنید."}
                  </div>
                </div>
              </div>
              <span style="background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid #f59e0b; padding: 6px 14px; border-radius: 12px; font-weight: 900; font-size: 0.78rem;">
                🏆 رتبه ۱ گروه
              </span>
            </div>
          </div>
        `}const U=P[h-1],de=E-1,B=U.nickname||U.name||"رقیب شما",ue=Math.max(1,Math.round((U.displayStudyMins||0)-(R.displayStudyMins||0)));return`
        <div style="background: linear-gradient(135deg, rgba(124, 58, 237, 0.22) 0%, rgba(236, 72, 153, 0.16) 100%); border: 1.5px solid rgba(168, 85, 247, 0.45); border-radius: 18px; padding: 14px 18px; margin-bottom: 18px; direction: rtl; animation: pulseGlow 3s infinite ease-in-out;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 44px; height: 44px; border-radius: 14px; background: rgba(168, 85, 247, 0.25); border: 1px solid rgba(168, 85, 247, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.4rem;">
                ⚡
              </div>
              <div>
                <strong style="font-size: 0.96rem; color: #ffffff; font-weight: 900;">تنها ${c(ue)} دقیقه مطالعه تا گرفتن رتبه «${l(B)}»! 🔥</strong>
                <div style="font-size: 0.75rem; color: #e9d5ff; margin-top: 3px;">
                  فاصله شما با رتبه ${c(de)} جدول: <strong style="color: #f472b6; font-weight: 800;">${me(ue)}</strong> • با ثبت پارت جدید، سبقت بگیرید!
                </div>
              </div>
            </div>

            <button onclick="if(window.openFocusModal) window.openFocusModal(); else if(window.switchTab) window.switchTab(0);"
              style="background: linear-gradient(135deg, #a855f7 0%, #ec4899 100%); color: white; border: none; padding: 9px 18px; border-radius: 12px; font-weight: 900; font-size: 0.8rem; cursor: pointer; display: flex; align-items: center; gap: 6px; box-shadow: 0 4px 14px rgba(168, 85, 247, 0.4); transition: transform 0.15s ease;"
              onmouseenter="this.style.transform='scale(1.04)'" onmouseleave="this.style.transform='scale(1)'">
              <span>⏱️ شروع پارت و سبقت</span>
            </button>
          </div>
        </div>
      `},j=P.filter(h=>h.isUser||h.isCurrentUser||h.userId===i.userId||i.phone&&h.phone===i.phone?S&&typeof S.isCurrentStudyingActive=="function"?S.isCurrentStudyingActive():!!(window.isUserStudyingNow&&window.isUserStudyingNow()):!!(S?S.isMemberStudying(h):h.isStudying&&h.lastHeartbeat&&Date.now()-h.lastHeartbeat<15*60*1e3)).length,Z=()=>`
        <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 14px; padding: 10px 16px; margin-bottom: 16px; direction: rtl;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="width: 10px; height: 10px; border-radius: 50%; background: #10b981; display: inline-block; animation: livePulse 1.5s infinite ease-in-out;"></span>
            <strong style="font-size: 0.85rem; color: #34d399; font-weight: 800;">
              🟢 ${c(j)} نفر هم‌اکنون در حال مطالعه هستند
            </strong>
          </div>
          <span style="font-size: 0.72rem; color: #a1a1aa; font-weight: 600;">
            بروزرسانی زنده حضور اعضا
          </span>
        </div>
      `,K=()=>`
        <div style="background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 12px 16px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; direction: rtl;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1.1rem;">⏱️</span>
            <span style="font-size: 0.82rem; color: #cbd5e1; font-weight: 700;">زمان باقی‌مانده تا پایان لیگ هفتگی:</span>
            <strong style="font-size: 0.85rem; color: #f59e0b; font-weight: 900; font-family: 'Outfit'; background: rgba(245, 158, 11, 0.15); padding: 3px 10px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
              ${V()}
            </strong>
          </div>

          <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
            <span style="font-size: 0.68rem; background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); padding: 2px 7px; border-radius: 6px; font-weight: 800;">💎 الماس</span>
            <span style="font-size: 0.68rem; background: rgba(251, 191, 36, 0.15); color: #fbbf24; border: 1px solid rgba(251, 191, 36, 0.3); padding: 2px 7px; border-radius: 6px; font-weight: 800;">🥇 طلا</span>
            <span style="font-size: 0.68rem; background: rgba(203, 213, 225, 0.15); color: #cbd5e1; border: 1px solid rgba(203, 213, 225, 0.3); padding: 2px 7px; border-radius: 6px; font-weight: 800;">🥈 نقره</span>
            <span style="font-size: 0.68rem; background: rgba(205, 127, 50, 0.15); color: #cd7f32; border: 1px solid rgba(205, 127, 50, 0.3); padding: 2px 7px; border-radius: 6px; font-weight: 800;">🥉 برنز</span>
          </div>
        </div>
      `,be=h=>!Array.isArray(h)||h.length===0?'<span style="font-size: 0.72rem; color: #94a3b8; font-style: italic; opacity: 0.8;">در انتظار مطالعه</span>':h.slice(0,4).map(E=>`
        <span style="font-size: 0.68rem; background: rgba(56, 189, 248, 0.15); color: #7dd3fc; border: 1px solid rgba(56, 189, 248, 0.35); padding: 1px 7px; border-radius: 8px; font-weight: bold; white-space: nowrap;">
          ${l(E)}
        </span>
      `).join(" "),fe=Math.max(1,Math.min(3,Math.ceil(P.length*.25))),ce=Math.max(fe+1,Math.floor(P.length*.75));return`
      <style>
        .main-container, .leaderboard-container {
          contain: content;
          will-change: contents;
          transform: translateZ(0);
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }
        @keyframes livePulse {
          0% { transform: scale(0.95); opacity: 0.85; }
          50% { transform: scale(1.15); opacity: 1; box-shadow: 0 0 14px rgba(16, 185, 129, 0.8); }
          100% { transform: scale(0.95); opacity: 0.85; }
        }
        @keyframes pulseGlow {
          0% { border-color: rgba(168, 85, 247, 0.45); box-shadow: 0 0 15px rgba(124, 58, 237, 0.15); }
          50% { border-color: rgba(236, 72, 153, 0.65); box-shadow: 0 0 25px rgba(168, 85, 247, 0.35); }
          100% { border-color: rgba(168, 85, 247, 0.45); box-shadow: 0 0 15px rgba(124, 58, 237, 0.15); }
        }
      </style>

      <div id="tab-leaderboard" class="main-container active" style="display: block; padding-bottom: 110px; direction: rtl;">

        <!-- Stage 2 Top Navigation Header -->
        <div style="background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 18px; padding: 16px; margin-bottom: 18px;">
          
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px; margin-bottom: 12px; border-bottom: 1px solid rgba(255, 255, 255, 0.06); padding-bottom: 12px;">
            
            <div style="display: flex; align-items: center; gap: 10px;">
              <!-- ⬅️ Back Button to Return to Group List Directory -->
              <button type="button" id="btn-back-to-groups" class="btn-back-groups" data-action="back-to-groups" onclick="window.planexNavigateBackToGroups && window.planexNavigateBackToGroups(event)" style="padding: 8px 14px; font-size: 0.8rem; font-weight: 800; background: #1f2029; color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 10px; cursor: pointer; display: flex; align-items: center; gap: 6px; z-index: 1000; position: relative; touch-action: manipulation;">
                <span>⬅️</span>
                <span>برگشت به لیست گروه‌ها</span>
              </button>

              <div>
                <h3 style="margin: 0; font-size: 1.05rem; font-weight: 900; color: #ffffff; display: flex; align-items: center; gap: 6px;">
                  <span>🏆</span>
                  <span>${l(w)}</span>
                </h3>
                <span style="font-size: 0.72rem; color: #8e8e9c; font-family: 'Outfit', monospace; font-weight: 700;">کد گروه: ${l(f)}</span>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <button type="button" onclick="window.handleCopyGroupCode('${f}')" style="padding: 7px 12px; font-size: 0.76rem; font-weight: 700; background: #1f2029; color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="کپی کد">
                <span>📋</span>
                <span>کد گروه</span>
              </button>

              <button type="button" onclick="window.handleShareGroupInvite('${f}', '${l(w)}')" style="padding: 7px 12px; font-size: 0.76rem; font-weight: 700; background: #1f2029; color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="دعوت دوستان">
                <span>🔗</span>
                <span>لینک دعوت</span>
              </button>

              <!-- Member Exit & Admin Delete Buttons (Both visible for Admin) -->
              <button type="button" onclick="window.handleLeaveGroupAction('${f}')" style="padding: 7px 12px; font-size: 0.74rem; font-weight: 800; background: rgba(239, 68, 68, 0.12); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.25); border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="خروج از این گروه">
                <span>🚪</span>
                <span>خروج از گروه</span>
              </button>

              ${A?`
                <button type="button" onclick="window.handleDeleteGroupAction('${f}')" style="padding: 7px 12px; font-size: 0.74rem; font-weight: 800; background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.4); border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="حذف کامل این گروه">
                  <span>🗑️</span>
                  <span>حذف کامل گروه</span>
                </button>
              `:""}
            </div>
          </div>

          <!-- Group Actions & Refresh -->
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <button type="button" onclick="window.openEditProfileModal()" style="padding: 6px 12px; font-size: 0.74rem; font-weight: 800; background: rgba(124, 58, 237, 0.2); color: #c4b5fd; border: 1px solid rgba(124, 58, 237, 0.4); border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 4px;">
                <span>✏️</span>
                <span>ویرایش مشخصات من</span>
              </button>
              <button type="button" onclick="window.handleManualLeaderboardSync()" style="padding: 6px 12px; font-size: 0.74rem; font-weight: 800; background: #7c3aed; color: white; border: none; border-radius: 8px; cursor: pointer; display: flex; align-items: center; gap: 4px;">
                <span>🔄</span>
                <span>ثبت و همگام‌سازی کارنامه من</span>
              </button>
              <button type="button" onclick="window.handleLiveLeaderboardRefresh()" style="padding: 6px 12px; font-size: 0.74rem; font-weight: 700; background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 8px; cursor: pointer;">
                🔄 رفرش لیدربرد
              </button>
            </div>

            <div style="font-size: 0.74rem; color: #8e8e9c;">
              <span>تعداد اعضا: <strong style="color: #e4e4e7;">${c(P.length)} نفر</strong></span>
            </div>
          </div>
        </div>

        <!-- ⚡ 1. Micro-Rivalry Card -->
        ${X()}

          <!-- 🟢 2. Live Presence Ticker -->
          ${Z()}

          <!-- 🏆 3. Weekly Countdown & League Tiers -->
          ${K()}

          <!-- 🌅 Early Birds Section for Group -->
          ${g(P)}

          <!-- 🏆 Leaderboard Time Filter: Today Only (Static Title) -->
          <div style="display: flex; justify-content: center; gap: 6px; margin-bottom: 20px; background: #1f2029; padding: 4px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); max-width: 260px; margin-left: auto; margin-right: auto;">
            <div style="flex: 1; padding: 8px 14px; border-radius: 12px; font-size: 0.82rem; font-weight: 800; text-align: center; border: 1px solid #7c3aed; background: #7c3aed; color: #ffffff; box-shadow: 0 2px 10px rgba(124, 58, 237, 0.35);">جدول رقابت امروز ☀️</div>
          </div>

          <!-- 🏆 3D-Style Podium (Center Gold 👑, Right Silver 🥈, Left Bronze 🥉) -->
          ${P.length>=1?`
            ${(()=>{const h=F&&(F.isUser||F.isCurrentUser||F.userId===i.userId||i.phone&&F.phone===i.phone),E=J&&(J.isUser||J.isCurrentUser||J.userId===i.userId||i.phone&&J.phone===i.phone),R=G&&(G.isUser||G.isCurrentUser||G.userId===i.userId||i.phone&&G.phone===i.phone);return`
              <div class="podium-container" style="display: flex; align-items: flex-end; justify-content: center; gap: 12px; margin: 24px 0 28px 0; padding: 0 10px; position: relative;">
                
                <!-- Rank 2 (Right, Silver Podium) -->
                <div style="flex: 1; max-width: 140px; display: flex; flex-direction: column; align-items: center; z-index: 2;">
                  <!-- Avatar & Badge -->
                  <div onclick="${E?"window.openEditProfileModal()":""}" style="position: relative; margin-bottom: 8px; text-align: center; display: inline-block; ${E?"cursor: pointer;":""}" title="${E?"ویرایش مشخصات شما":""}">
                    <div style="font-size: 1.5rem; margin-bottom: 2px;">🥈</div>
                    ${lt(J,52)}
                    <span style="position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%); background: #cbd5e1; color: #0f172a; font-size: 0.68rem; font-weight: 900; padding: 1px 8px; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.4);">۲</span>
                    ${E?'<span style="position: absolute; bottom: -2px; right: -2px; background: #7c3aed; color: white; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; border: 2px solid #16171d; box-shadow: 0 2px 6px rgba(0,0,0,0.5);">✏️</span>':""}
                  </div>

                  <strong onclick="${E?"window.openEditProfileModal()":""}" style="font-size: 0.82rem; color: ${E?"#c4b5fd":"#e4e4e7"}; text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; ${E?"cursor: pointer;":""}">${l((J==null?void 0:J.nickname)||(J==null?void 0:J.name)||"---")}</strong>
                  <span style="font-size: 0.72rem; color: #cbd5e1; font-weight: 900; margin-top: 2px;">${me((J==null?void 0:J.displayStudyMins)||0)}</span>
                  <span style="font-size: 0.66rem; color: #8e8e9c;">${c((J==null?void 0:J.displayTestCount)||0)} تست</span>

                  <!-- 3D Silver Block -->
                  <div style="width: 100%; height: 95px; background: linear-gradient(180deg, rgba(203, 213, 225, 0.25) 0%, rgba(148, 163, 184, 0.1) 100%); border: 1.5px solid rgba(203, 213, 225, 0.4); border-top-left-radius: 14px; border-top-right-radius: 14px; margin-top: 10px; box-shadow: inset 0 2px 10px rgba(255,255,255,0.1), 0 10px 25px rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; font-size: 2.2rem; font-weight: 900; color: rgba(203, 213, 225, 0.3);">2</div>
                </div>

                <!-- Rank 1 (Center, Gold Podium with Crown 👑) -->
                <div style="flex: 1; max-width: 155px; display: flex; flex-direction: column; align-items: center; z-index: 3; transform: translateY(-10px);">
                  <!-- Avatar & Crown -->
                  <div onclick="${h?"window.openEditProfileModal()":""}" style="position: relative; margin-bottom: 8px; text-align: center; display: inline-block; ${h?"cursor: pointer;":""}" title="${h?"ویرایش مشخصات شما":""}">
                    <div style="font-size: 2rem; filter: drop-shadow(0 0 10px #fbbf24); animation: bounce 2s infinite;">👑</div>
                    ${lt(F,64)}
                    <span style="position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%); background: #fbbf24; color: #0f172a; font-size: 0.72rem; font-weight: 900; padding: 2px 10px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.4);">۱</span>
                    ${h?'<span style="position: absolute; bottom: -2px; right: -2px; background: #7c3aed; color: white; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; border: 2px solid #16171d; box-shadow: 0 2px 6px rgba(0,0,0,0.5);">✏️</span>':""}
                  </div>

                  <strong onclick="${h?"window.openEditProfileModal()":""}" style="font-size: 0.88rem; color: #fbbf24; text-align: center; font-weight: 900; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; ${h?"cursor: pointer;":""}">${l((F==null?void 0:F.nickname)||(F==null?void 0:F.name)||"---")}</strong>
                  <span style="font-size: 0.78rem; color: #f59e0b; font-weight: 900; margin-top: 2px;">${me((F==null?void 0:F.displayStudyMins)||0)}</span>
                  <span style="font-size: 0.68rem; color: #fde68a;">${c((F==null?void 0:F.displayTestCount)||0)} تست</span>

                  <!-- 3D Gold Block -->
                  <div style="width: 100%; height: 125px; background: linear-gradient(180deg, rgba(245, 158, 11, 0.3) 0%, rgba(217, 119, 6, 0.12) 100%); border: 2px solid rgba(245, 158, 11, 0.6); border-top-left-radius: 16px; border-top-right-radius: 16px; margin-top: 10px; box-shadow: inset 0 2px 14px rgba(251, 191, 36, 0.25), 0 14px 30px rgba(245, 158, 11, 0.25); display: flex; align-items: center; justify-content: center; font-size: 2.8rem; font-weight: 900; color: rgba(251, 191, 36, 0.35);">1</div>
                </div>

                <!-- Rank 3 (Left, Bronze Podium) -->
                <div style="flex: 1; max-width: 140px; display: flex; flex-direction: column; align-items: center; z-index: 1;">
                  <!-- Avatar & Badge -->
                  <div onclick="${R?"window.openEditProfileModal()":""}" style="position: relative; margin-bottom: 8px; text-align: center; display: inline-block; ${R?"cursor: pointer;":""}" title="${R?"ویرایش مشخصات شما":""}">
                    <div style="font-size: 1.5rem; margin-bottom: 2px;">🥉</div>
                    ${lt(G,48)}
                    <span style="position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%); background: #cd7f32; color: #ffffff; font-size: 0.68rem; font-weight: 900; padding: 1px 8px; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.4);">۳</span>
                    ${R?'<span style="position: absolute; bottom: -2px; right: -2px; background: #7c3aed; color: white; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; border: 2px solid #16171d; box-shadow: 0 2px 6px rgba(0,0,0,0.5);">✏️</span>':""}
                  </div>

                  <strong onclick="${R?"window.openEditProfileModal()":""}" style="font-size: 0.82rem; color: ${R?"#c4b5fd":"#e4e4e7"}; text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; ${R?"cursor: pointer;":""}">${l((G==null?void 0:G.nickname)||(G==null?void 0:G.name)||"---")}</strong>
                  <span style="font-size: 0.72rem; color: #cd7f32; font-weight: 900; margin-top: 2px;">${me((G==null?void 0:G.displayStudyMins)||0)}</span>
                  <span style="font-size: 0.66rem; color: #8e8e9c;">${c((G==null?void 0:G.displayTestCount)||0)} تست</span>

                  <!-- 3D Bronze Block -->
                  <div style="width: 100%; height: 80px; background: linear-gradient(180deg, rgba(205, 127, 50, 0.25) 0%, rgba(180, 83, 9, 0.1) 100%); border: 1.5px solid rgba(205, 127, 50, 0.4); border-top-left-radius: 14px; border-top-right-radius: 14px; margin-top: 10px; box-shadow: inset 0 2px 10px rgba(255,255,255,0.1), 0 10px 25px rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 900; color: rgba(205, 127, 50, 0.3);">3</div>
                </div>

              </div>
              `})()}
          `:""}

          <!-- Leaderboard Members Table -->
          <div style="background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 18px; overflow: hidden;">
            
            <div style="padding: 12px 16px; border-bottom: 1px solid rgba(255, 255, 255, 0.06); display: flex; justify-content: space-between; align-items: center;">
              <strong style="font-size: 0.88rem; color: #e4e4e7;">📋 جدول رتبه‌بندی اعضای گروه</strong>
              <input type="text" id="input-leaderboard-search" placeholder="🔍 جستجوی عضو..." style="padding: 5px 10px; font-size: 0.75rem; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; color: white; width: 140px;" />
            </div>

            <div style="overflow-x: auto;">
              <table style="width: 100%; border-collapse: collapse; text-align: right; font-size: 0.8rem;">
                <thead>
                  <tr style="background: #1f2029; color: #8e8e9c; font-size: 0.72rem; border-bottom: 1px solid rgba(255,255,255,0.06);">
                    <th style="padding: 10px 12px; width: 45px; text-align: center;">رتبه</th>
                    <th style="padding: 10px 12px; text-align: center; width: 75px;">لیگ</th>
                    <th style="padding: 10px 12px;">نام عضو</th>
                    <th style="padding: 10px 12px;">ساعت مطالعه امروز</th>
                    <th style="padding: 10px 12px;">تست</th>
                    <th style="padding: 10px 12px;">مباحث خوانده‌شده</th>
                  </tr>
                </thead>
                <tbody>
                  ${P.length===0?`
                    <tr>
                      <td colspan="6" style="text-align: center; padding: 24px; color: #8e8e9c;">
                        ${L?"⏳ در حال دریافت جدول رتبه‌بندی اعضا...":"هنوز رکوردی در این گروه ثبت نشده است."}
                      </td>
                    </tr>
                  `:P.map((h,E)=>{const R=E+1,U=h.isUser||h.isCurrentUser||h.userId===i.userId||i.phone&&h.phone===i.phone,de=U?S&&typeof S.isCurrentStudyingActive=="function"?S.isCurrentStudyingActive():!!(window.isUserStudyingNow&&window.isUserStudyingNow()):!!(S?S.isMemberStudying(h):h.isStudying&&h.lastHeartbeat&&Date.now()-h.lastHeartbeat<15*60*1e3),B=U?de&&typeof window.getCurrentFocusSubjectTitle=="function"?window.getCurrentFocusSubjectTitle():"":h.studySubject||h.subject||h.currentSubject||(Array.isArray(h.subjects)&&h.subjects.length>0?h.subjects[0]:null),ue=Q(h.displayStudyMins||0,R,P.length),xe=R===1?"🥇":R===2?"🥈":R===3?"🥉":`#${c(R)}`;let ge="";E===fe&&P.length>=4&&(ge=`
                        <tr style="background: linear-gradient(90deg, rgba(16, 185, 129, 0.18) 0%, rgba(16, 185, 129, 0.04) 100%); border-top: 1.5px solid #10b981; border-bottom: 1.5px solid #10b981;">
                          <td colspan="6" style="text-align: center; padding: 7px 12px; font-size: 0.74rem; font-weight: 900; color: #34d399; letter-spacing: 0.5px;">
                            🟢 ── محدوده صعود به لیگ بالاتر (Promotion Zone) ──
                          </td>
                        </tr>
                      `);let Ae="";return E===ce&&P.length>=6&&ce>fe&&(Ae=`
                        <tr style="background: linear-gradient(90deg, rgba(239, 68, 68, 0.18) 0%, rgba(239, 68, 68, 0.04) 100%); border-top: 1.5px solid #ef4444; border-bottom: 1.5px solid #ef4444;">
                          <td colspan="6" style="text-align: center; padding: 7px 12px; font-size: 0.74rem; font-weight: 900; color: #f87171; letter-spacing: 0.5px;">
                            🔴 ── محدوده خطر سقوط به لیگ پایین‌تر (Relegation Zone) ──
                          </td>
                        </tr>
                      `),`
                      ${ge}
                      ${Ae}
                      <tr class="leaderboard-row" data-search="${l(h.nickname)} ${l(h.target)}" onclick="${U?"window.openEditProfileModal()":""}" style="border-bottom: 1px solid rgba(255,255,255,0.04); background: ${U?"rgba(124, 58, 237, 0.12)":"transparent"}; ${U?"cursor: pointer;":""}">
                        
                        <td style="padding: 10px 12px; text-align: center; font-weight: 800; color: ${R<=3?"#facc15":"#a1a1aa"};">
                          ${xe}
                        </td>

                        <td style="padding: 10px 12px; text-align: center;">
                          <span style="font-size: 0.68rem; background: ${ue.bg}; color: ${ue.color}; border: 1px solid ${ue.border}; padding: 2px 7px; border-radius: 6px; font-weight: 800; white-space: nowrap;">
                            ${ue.icon} ${ue.name}
                          </span>
                        </td>

                        <td style="padding: 10px 12px;">
                          <div style="display: flex; align-items: center; gap: 10px;">
                            ${lt(h,34)}
                            <div>
                              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                                <strong style="color: ${U?"#c4b5fd":"#e4e4e7"}; font-weight: 800;">${l(h.nickname||"کاربر")}</strong>
                                ${U?'<span style="font-size: 0.64rem; background: #7c3aed; color: white; padding: 1px 6px; border-radius: 4px; display: inline-flex; align-items: center; gap: 2px;" title="کلیک جهت ویرایش مشخصات">شما ✏️</span>':""}
                                ${de?`
                                  <span style="font-size: 0.65rem; background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid #10b981; padding: 2px 8px; border-radius: 10px; font-weight: 900; display: inline-flex; align-items: center; gap: 4px; box-shadow: 0 0 10px rgba(16, 185, 129, 0.4); animation: livePulse 2s infinite ease-in-out;">
                                    🟢 در حال مطالعه ${B?`(${l(B)})`:""}
                                  </span>
                                `:""}
                              </div>
                              <span style="font-size: 0.7rem; color: #8e8e9c; display: block; margin-top: 2px;">${l(h.target||"")}</span>
                            </div>
                          </div>
                        </td>

                        <td style="padding: 10px 12px; font-weight: 800; color: #38bdf8;">
                          ${me(h.displayStudyMins||0)}
                        </td>

                        <td style="padding: 10px 12px; font-weight: 700; color: #cbd5e1;">
                          ${c(h.displayTestCount||0)}
                        </td>

                        <td style="padding: 10px 12px;">
                          ${be(h.subjects)}
                        </td>

                      </tr>
                    `}).join("")}
                </tbody>
              </table>
            </div>

          </div>

      </div>
      ${((t=window.appState)==null?void 0:t.activeModal)==="editProfile"?Dt():""}
    `}catch(n){return console.error("Error rendering LeaderboardView:",n),`
      <div id="tab-leaderboard" class="main-container active" style="display: block; padding: 40px 20px; text-align: center; direction: rtl;">
        <h3 style="color: #ef4444;">خطا در بارگذاری تالار رقابت</h3>
        <p style="color: #a1a1aa; font-size: 0.85rem;">${Ro((n==null?void 0:n.message)||"خطای غیرمنتظره در بارگذاری داده‌ها")}</p>
        <button onclick="window.planexNavigateBackToGroups && window.planexNavigateBackToGroups(event)" style="margin-top: 15px; padding: 8px 16px; background: #7c3aed; color: white; border: none; border-radius: 10px; font-weight: 800; cursor: pointer;">
          ⬅️ برگشت به لیست گروه‌ها
        </button>
      </div>
    `}}const fn=ft,yn=it;typeof window<"u"&&(window.renderLeaderboardView=ft,window.renderLeaderboard=ft,window.bindLeaderboardEvents=Bo,window.initLeaderboardView=it,window.initLeaderboard=it);function mn(){return`
    <div class="modal-overlay" id="modal-support" style="backdrop-filter: blur(16px); background: rgba(0, 0, 0, 0.75); display: flex; align-items: center; justify-content: center; z-index: 99999;" onclick="if(event.target === this || event.target.classList.contains('modal-overlay')){ window.closeActiveModal(); }">
      <div class="modal-card" style="text-align: right; direction: rtl; border: 1px solid rgba(255,255,255,0.08); background: #16171d; border-radius: 22px; padding: 24px; max-width: 440px; width: 92%; box-shadow: 0 20px 50px rgba(0,0,0,0.6);" onclick="event.stopPropagation();">
        
        <div class="modal-header" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 14px; margin-bottom: 18px;">
          <div class="modal-title" style="color: #f8fafc; font-size: 1.08rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1.2rem;">❤️</span>
            <span>حمایت و شبکه‌های ما</span>
          </div>
          <button type="button" class="btn-close" id="btn-close-support-modal" aria-label="بستن" onclick="window.closeActiveModal();">✕</button>
        </div>

        <p style="font-size: 0.88rem; line-height: 1.7; color: #cbd5e1; margin-bottom: 20px;">
          سلام دوست من! ❤️<br>
          برای عضویت در کانال‌های تلگرام، دریافت اخبار و برنامه‌های جدید و همراهی در اینستاگرام، از لینک‌های زیر استفاده کنید:
        </p>

        <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
          
          <!-- 1. Medical Channel (Telegram) -->
          <div style="background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 14px; display: flex; align-items: center; justify-content: space-between; gap: 10px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <div style="width: 38px; height: 38px; border-radius: 12px; background: rgba(59, 130, 246, 0.15); border: 1px solid rgba(59, 130, 246, 0.3); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">
                📢
              </div>
              <div>
                <strong style="font-size: 0.86rem; color: #e4e4e7; display: block;">کانال مدیکال</strong>
                <span style="font-size: 0.74rem; color: #8e8e9c; font-family: 'Outfit', monospace;">@medicalaa</span>
              </div>
            </div>
            <a href="https://t.me/medicalaa" target="_blank" rel="noopener noreferrer" class="btn-primary" style="background: #3b82f6; color: white; border: none; border-radius: 10px; padding: 8px 14px; font-weight: 800; font-size: 0.78rem; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; white-space: nowrap;">
              <span>عضویت</span>
            </a>
          </div>

          <!-- 2. PlanEx Channel (Telegram) -->
          <div style="background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 14px; display: flex; align-items: center; justify-content: space-between; gap: 10px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <div style="width: 38px; height: 38px; border-radius: 12px; background: rgba(124, 58, 237, 0.15); border: 1px solid rgba(124, 58, 237, 0.3); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">
                🚀
              </div>
              <div>
                <strong style="font-size: 0.86rem; color: #e4e4e7; display: block;">کانال پلنکس</strong>
                <span style="font-size: 0.74rem; color: #8e8e9c; font-family: 'Outfit', monospace;">@planexapp</span>
              </div>
            </div>
            <a href="https://t.me/planexapp" target="_blank" rel="noopener noreferrer" class="btn-primary" style="background: #7c3aed; color: white; border: none; border-radius: 10px; padding: 8px 14px; font-weight: 800; font-size: 0.78rem; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; white-space: nowrap;">
              <span>عضویت</span>
            </a>
          </div>

          <!-- 3. Instagram Page -->
          <div style="background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 16px; padding: 14px; display: flex; align-items: center; justify-content: space-between; gap: 10px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <div style="width: 38px; height: 38px; border-radius: 12px; background: rgba(236, 72, 153, 0.15); border: 1px solid rgba(236, 72, 153, 0.3); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">
                📸
              </div>
              <div>
                <strong style="font-size: 0.86rem; color: #e4e4e7; display: block;">صفحه اینستاگرام</strong>
                <span style="font-size: 0.74rem; color: #8e8e9c; font-family: 'Outfit', monospace;">medicalaplus@</span>
              </div>
            </div>
            <a href="https://www.instagram.com/medicalaplus" target="_blank" rel="noopener noreferrer" class="btn-primary" style="background: linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%); color: white; border: none; border-radius: 10px; padding: 8px 14px; font-weight: 800; font-size: 0.78rem; text-decoration: none; display: inline-flex; align-items: center; gap: 4px; white-space: nowrap;">
              <span>فالو</span>
            </a>
          </div>

        </div>

        <button id="btn-dismiss-support" onclick="if(window.appState){ window.appState.activeModal = null; window.renderApp(); }" class="btn-primary" style="background: #1f2029; border: 1px solid rgba(255,255,255,0.1); color: #e4e4e7; border-radius: 14px; padding: 12px 20px; font-weight: 800; font-size: 0.85rem; width: 100%; cursor: pointer;">
          بستن ✨
        </button>

      </div>
    </div>
  `}function Lo(o={}){var E,R,U,de;const{stopwatchTime:e=0,isStopwatchRunning:t=!1,pomodoroTime:n=1500,isPomodoroRunning:a=!1,timerType:i=1,presetMins:r=25,sessionTests:d=0,pomodoroActiveUsers:s=0,activityMode:l="study",selectedCategoryCode:c=null,selectedNonStudyCode:y="non_sports",selectedSubject:m="",selectedStudyMethod:u="یادگیری",sessionNote:b="",isModalMode:g=!1,focusAccordions:f={activity:!1,timing:!1,testNote:!1,audio:!1}}=o,x=u||((E=window.appState)==null?void 0:E.selectedStudyMethod)||((R=window.fabActivityState)==null?void 0:R.selectedPhase)||"یادگیری",w=B=>String(B).replace(/[0-9]/g,ue=>"۰۱۲۳۴۵۶۷۸۹"[ue]),A=i===2,k=l==="non-study"&&!A,$=!A&&!k;let M="#10b981",I="#10b981",D="linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",T="💾 ثبت پارت مطالعه",N="⚡ در حال تمرکز",C="▶ لمس جهت شروع";A?(M="#38bdf8",I="#0284c7",D="linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",T="☕ ثبت استراحت (بدون احتساب در ساعت مطالعه)",N="☕ در حال استراحت پومودورو",C="▶ لمس جهت شروع استراحت"):k&&(M="#f59e0b",I="#d97706",D="linear-gradient(135deg, #d97706 0%, #b45309 100%)",T="🧘 ثبت فعالیت غیردرسی (بدون احتساب در ساعت مطالعه)",N="🧘 در حال فعالیت غیردرسی",C="▶ لمس جهت شروع فعالیت");const P=typeof p<"u"&&typeof p.getStudyMinutesByDate=="function"?p.getStudyMinutesByDate():0,L=typeof p<"u"&&typeof p.getDailyTestCount=="function"?p.getDailyTestCount():0,q=typeof p<"u"?p.getCategories():[],F=typeof p<"u"&&typeof p.getNonStudyCategories=="function"?p.getNonStudyCategories():[{code:"non_sports",title:"ورزش و تندرستی",icon:"🏃",color:"#f59e0b"},{code:"non_sleep",title:"خواب و استراحت",icon:"😴",color:"#8b5cf6"},{code:"non_meal",title:"میان‌وعده و تغذیه",icon:"☕",color:"#10b981"},{code:"non_walk",title:"پیاده‌روی و هوای آزاد",icon:"🚶",color:"#06b6d4"},{code:"non_zen",title:"مدیتیشن و ذهن‌آگاهی",icon:"🧘",color:"#ec4899"},{code:"non_personal",title:"کارهای شخصی و تفریح",icon:"📱",color:"#f43f5e"},{code:"non_house",title:"امور منزل و خرید",icon:"🧹",color:"#64748b"}],J=c||((U=q.find(B=>Oe(B)))==null?void 0:U.code)||((de=q[0])==null?void 0:de.code)||"ع-س",G=q.find(B=>B.code===J)||q[0]||{title:"داخلی"},Q=F.find(B=>B.code===y)||F[0],V=A?{title:"استراحت پومودورو"}:$?G:Q,X=i===0?e:n,j=i===0?t:a,Z=Math.max(0,X),K=Math.floor(Z/3600),be=Math.floor(Z%3600/60),fe=Z%60,ce=B=>B.toString().padStart(2,"0"),h=K>0?`${ce(K)}:${ce(be)}:${ce(fe)}`:`${ce(be)}:${ce(fe)}`;return`
    <div class="focus-view-container ${g?"focus-modal-layout":"main-container"}" style="direction: rtl; padding-bottom: 70px; color: #fff;">
      
      <!-- Top Title Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="width: 32px; height: 32px; border-radius: 10px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 1.1rem;">
            ${A?"☕":$?"🎯":"🧘"}
          </div>
          <div>
            <h1 style="margin: 0; font-size: 0.98rem; font-weight: 700; color: #e4e4e7;">
              حالت تمرکز و ثبت فعالیت
            </h1>
            <p style="margin: 1px 0 0 0; font-size: 0.7rem; color: var(--text-secondary);">
              مدیریت زمان، ثبت هوشمند و همگام‌سازی خودکار ابری
            </p>
          </div>
        </div>

        <div style="display: flex; align-items: center; gap: 6px;">
          <button type="button" onclick="if(window.openManualActivityLogModal){ window.openManualActivityLogModal(); } else { window.appState.activeModal = 'manualLog'; window.renderApp(); }" style="display: inline-flex; align-items: center; gap: 4px; padding: 4px 10px; border-radius: 8px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); color: #a1a1aa; font-size: 0.72rem; font-weight: 600; cursor: pointer; transition: all 0.2s ease;">
            <span>➕</span>
            <span>ثبت دستی</span>
          </button>
          ${g?`
            <button id="btn-close-focus-modal" class="btn-icon btn-close-modal" data-close-modal="true" onclick="event.preventDefault(); event.stopPropagation(); window.closeActiveModal ? window.closeActiveModal() : window.closeFocusModal();" style="background: #1f2029; border-radius: 50%; width: 28px; height: 28px; border: 1px solid rgba(255, 255, 255, 0.08); color: #cbd5e1; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">✕</button>
          `:`
            <span style="font-size: 0.72rem; font-weight: 600; background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08); padding: 3px 8px; border-radius: 8px; font-family: 'Outfit';">
              مطالعه امروز: ${me(P)} | ${w(L)} تست
            </span>
          `}
        </div>
      </div>

      <!-- Live Study Status Bar when running -->
      ${j?`
        <div style="background: #16171d; border: 1px solid ${M}; border-radius: 12px; padding: 8px 12px; margin-bottom: 10px; display: flex; align-items: center; justify-content: space-between; gap: 8px; animation: fadeIn 0.3s ease;">
          <div style="display: flex; align-items: center; gap: 6px;">
            <span class="neon-pulse-dot animate-pulse" style="background: ${M};"></span>
            <span style="font-size: 0.76rem; font-weight: 700; color: ${M};">
              وضعیت زنده:
              <strong style="color: #ffffff;">«${A?"استراحت و ریکاوری پومودورو":$?m?`${G.title} (${m})`:G.title:m?`${Q.title} (${m})`:Q.title}»</strong>
            </span>
          </div>
          <span style="font-size: 0.65rem; background: rgba(255,255,255,0.08); color: ${M}; padding: 2px 6px; border-radius: 6px; font-weight: 600; white-space: nowrap;">
            ${A?"☕ استراحت":k?"🧘 غیردرسی":"🟢 در حال مطالعه"}
          </span>
        </div>
      `:""}

      <!-- 📚 1. ACCORDION: ACTIVITY TYPE & SUBJECT SELECTION -->
      <div class="glass-panel" style="margin-bottom: 10px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-accordion-toggle" id="btn-accordion-activity" data-accordion-key="activity" onclick="event.preventDefault(); event.stopPropagation(); window.toggleFocusAccordion && window.toggleFocusAccordion('activity', event)" style="width: 100%; padding: 12px 14px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; font-weight: 700; color: #e4e4e7; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 88%;">
            <span style="font-size: 0.95rem;">${A?"☕":$?"📚":"🧘"}</span>
            <span>انتخاب درس و فعالیت: <strong style="color: ${M}; font-weight: 800;">«${V.title}${m?` - ${m}`:""}»</strong></span>
          </div>
          <span class="accordion-chevron" style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${f.activity?"180deg":"0deg"});">▼</span>
        </button>
        
        <div id="accordion-drawer-activity" class="accordion-drawer" style="display: ${f.activity?"block":"none"}; padding: 12px 14px 14px 14px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 0.76rem; font-weight: 700; color: #e4e4e7;">
              نوع فعالیت:
            </span>
            <span style="font-size: 0.7rem; color: #8e8e9c;">
              ${A?"☕ استراحت":$?"📚 درسی":"🧘 غیردرسی"}
            </span>
          </div>

          <div style="display: flex; gap: 6px; margin-bottom: 10px;">
            <button type="button" class="btn-activity-mode-switch ${$?"active":""}" data-mode="study" onclick="event.preventDefault(); event.stopPropagation(); window.setFocusActivityMode && window.setFocusActivityMode('study', event)" style="flex: 1; padding: 7px 10px; border-radius: 10px; font-size: 0.78rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; border: 1px solid ${$?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${$?"#7c3aed":"#1f2029"}; color: ${$?"#ffffff":"#a1a1aa"}; transition: all 0.2s ease;">
              <span style="font-size: 0.95rem;">📚</span>
              <span>فعالیت درسی</span>
            </button>
            
            <button type="button" class="btn-activity-mode-switch ${$?"":"active"}" data-mode="non-study" onclick="event.preventDefault(); event.stopPropagation(); window.setFocusActivityMode && window.setFocusActivityMode('non-study', event)" style="flex: 1; padding: 7px 10px; border-radius: 10px; font-size: 0.78rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; border: 1px solid ${$?"rgba(255,255,255,0.08)":"#f59e0b"}; background: ${$?"#1f2029":"#d97706"}; color: ${$?"#a1a1aa":"#ffffff"}; transition: all 0.2s ease;">
              <span style="font-size: 0.95rem;">☕</span>
              <span>فعالیت غیردرسی</span>
            </button>
          </div>

          <div id="focus-activity-study-container" style="display: ${$?"block":"none"};">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <label style="font-size: 0.72rem; font-weight: 600; color: var(--text-secondary);">
                نام درس:
              </label>
              <button type="button" onclick="if(window.openActivityModal){ window.openActivityModal(); }" style="background: none; border: none; color: #a1a1aa; font-size: 0.7rem; font-weight: 600; cursor: pointer; padding: 0;">
                ➕ افزودن درس
              </button>
            </div>

            <div style="display: flex; gap: 5px; overflow-x: auto; padding-bottom: 4px; margin-bottom: 8px;" id="focus-study-category-chips">
              ${q.map(B=>`
                <button type="button" class="btn-focus-cat-chip ${B.code===J?"active":""}" data-code="${B.code}" data-title="${B.title}" onclick="event.preventDefault(); event.stopPropagation(); window.handleSelectFocusSubject && window.handleSelectFocusSubject(this, '${B.title}', '${B.code}')" style="display: inline-flex; align-items: center; gap: 4px; padding: 4px 8px; border-radius: 8px; border: 1px solid ${B.code===J?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${B.code===J?"#7c3aed":"#1f2029"}; color: ${B.code===J?"#ffffff":"#e4e4e7"}; font-size: 0.74rem; font-weight: 600; cursor: pointer; white-space: nowrap;">
                  <span>${B.icon||"📚"}</span>
                  <span>${B.title}</span>
                  <span class="btn-delete-study-cat" data-code="${B.code}" data-title="${B.title}" title="حذف «${B.title}»" style="display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; border-radius: 50%; font-size: 0.6rem; color: #f87171; background: rgba(239,68,68,0.2); margin-right: 2px;">✕</span>
                </button>
              `).join("")}
            </div>

            <div>
              <label style="display: block; font-size: 0.72rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 3px;">
                مبحث یا موضوع درس:
              </label>
              <input type="text" id="input-focus-subject" data-alias="fab-timer-subject-input" value="${m||""}" placeholder="مثلاً: گوارش، قلب، تست جامع..." style="width: 100%; box-sizing: border-box; height: 34px; padding: 0 10px; font-size: 0.78rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; color: #fff;" />
            </div>

            <!-- 🌟 Study Phase Selection Chips -->
            <div style="margin-top: 10px;">
              <label style="display: block; font-size: 0.72rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 4px;">
                فاز / روش مطالعه:
              </label>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px;" id="focus-phase-chips-container">
                ${[{id:"یادگیری",label:"یادگیری",icon:"🧠"},{id:"تست‌زنی",label:"تست‌زنی",icon:"🎯"},{id:"مرور",label:"مرور",icon:"🔄"},{id:"جمع‌بندی",label:"جمع‌بندی",icon:"📑"}].map(B=>{const ue=x===B.id;return`
                    <button type="button" class="btn-phase-chip btn-manual-study-pill btn-fab-study-pill ${ue?"active":""}" data-phase="${B.id}" data-pill="${B.id}" onclick="event.preventDefault(); event.stopPropagation(); window.selectStudyPhase && window.selectStudyPhase(this, '${B.id}')" style="padding: 6px 2px; border-radius: 8px; border: 1px solid ${ue?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${ue?"#7c3aed":"#1f2029"}; color: ${ue?"#ffffff":"#a1a1aa"}; font-size: 0.72rem; font-weight: 700; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 2px; transition: all 0.15s ease;">
                      <span style="font-size: 0.95rem;">${B.icon}</span>
                      <span>${B.label}</span>
                    </button>
                  `}).join("")}
              </div>
              <input type="hidden" id="focus-phase-input" value="${x}" />
            </div>
          </div>

          <div id="focus-activity-nonstudy-container" style="display: ${$?"none":"block"};">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <label style="font-size: 0.72rem; font-weight: 600; color: var(--text-secondary);">
                دسته‌بندی غیردرسی:
              </label>
              <button type="button" id="btn-add-custom-nonstudy-quick" style="background: none; border: none; color: #a1a1aa; font-size: 0.7rem; font-weight: 600; cursor: pointer; padding: 0;">
                ➕ افزودن فعالیت
              </button>
            </div>

            <div style="display: flex; gap: 5px; overflow-x: auto; padding-bottom: 4px; margin-bottom: 8px;">
              ${F.map(B=>`
                <button type="button" class="btn-nonstudy-cat-chip ${B.code===y?"active":""}" data-code="${B.code}" data-title="${B.title}" onclick="event.preventDefault(); event.stopPropagation(); window.handleSelectFocusSubject && window.handleSelectFocusSubject(this, '${B.title}', '${B.code}')" style="display: inline-flex; align-items: center; gap: 4px; padding: 4px 8px; border-radius: 8px; border: 1px solid ${B.code===y?"#d97706":"rgba(255,255,255,0.08)"}; background: ${B.code===y?"#d97706":"#1f2029"}; color: ${B.code===y?"#ffffff":"#e4e4e7"}; font-size: 0.74rem; font-weight: 600; cursor: pointer; white-space: nowrap;">
                  <span>${B.icon||"☕"}</span>
                  <span>${B.title}</span>
                  <span class="btn-delete-nonstudy-cat" data-code="${B.code}" data-title="${B.title}" title="حذف «${B.title}»" style="display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; border-radius: 50%; font-size: 0.6rem; color: #f87171; background: rgba(239,68,68,0.2); margin-right: 2px;">✕</span>
                </button>
              `).join("")}
            </div>

            <div>
              <label style="display: block; font-size: 0.72rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 3px;">
                عنوان فعالیت:
              </label>
              <input type="text" id="input-focus-nonstudy-subject" data-alias="fab-timer-subject-input" value="${m||""}" placeholder="مثلاً: ورزش صبحگاهی، استراحت، خرید..." style="width: 100%; box-sizing: border-box; height: 34px; padding: 0 10px; font-size: 0.78rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; color: #fff;" />
            </div>
          </div>
        </div>
      </div>

      <!-- ⏱️ 2. ACCORDION: POMODORO DURATION & BREAK TIMING -->
      <div class="glass-panel" style="margin-bottom: 12px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-accordion-toggle" id="btn-accordion-timing" data-accordion-key="timing" onclick="event.preventDefault(); event.stopPropagation(); window.toggleFocusAccordion && window.toggleFocusAccordion('timing', event)" style="width: 100%; padding: 12px 14px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; font-weight: 700; color: #e4e4e7;">
            <span style="font-size: 0.95rem;">⏱️</span>
            <span>زمان‌بندی: <strong style="color: ${M}; font-weight: 800;">${i===0?"کرونومتر":i===2?"۵ دقیقه استراحت":`${r} دقیقه پومودورو`}</strong></span>
          </div>
          <span class="accordion-chevron" style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${f.timing?"180deg":"0deg"});">▼</span>
        </button>

        <div id="accordion-drawer-timing" class="accordion-drawer" style="display: ${f.timing?"block":"none"}; padding: 12px 14px 14px 14px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
          <!-- Timer Type Tabs -->
          <div style="display: flex; gap: 4px; background: #1f2029; padding: 3px; border-radius: 10px; margin-bottom: 10px;">
            <button type="button" class="btn-focus-tab ${i===1?"active btn-primary":"glass-panel"}" data-type="1" onclick="window.setFocusTimerType && window.setFocusTimerType(1)" style="flex: 1; padding: 6px; border: none; font-size: 0.74rem; font-weight: 600; cursor: pointer;">
              🍅 پومودورو (${r}دقیقه)
            </button>
            <button type="button" class="btn-focus-tab ${i===0?"active btn-primary":"glass-panel"}" data-type="0" onclick="window.setFocusTimerType && window.setFocusTimerType(0)" style="flex: 1; padding: 6px; border: none; font-size: 0.74rem; font-weight: 600; cursor: pointer;">
              ⏱️ کرونومتر
            </button>
            <button type="button" class="btn-focus-tab ${i===2?"active":"glass-panel"}" data-type="2" onclick="window.setFocusTimerType && window.setFocusTimerType(2)" style="flex: 1; padding: 6px; border: none; font-size: 0.74rem; font-weight: 600; cursor: pointer; background: ${i===2?"#0284c7":"transparent"}; color: ${i===2?"#fff":"#a1a1aa"};">
              ☕ استراحت (۵ دقیقه)
            </button>
          </div>

          <!-- Presets in Pomodoro mode -->
          <div id="focus-pomodoro-presets-container" style="display: ${i===1?"flex":"none"}; justify-content: center; gap: 4px; flex-wrap: wrap;">
            ${[15,25,30,45,50,60].map(B=>`
              <button type="button" class="btn-focus-preset ${r===B?"active":""}" data-mins="${B}" onclick="window.setFocusPresetMins && window.setFocusPresetMins(${B})" style="padding: 4px 10px; font-size: 0.72rem; font-weight: 600; border-radius: 12px; border: 1px solid ${r===B?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${r===B?"#7c3aed":"#1f2029"}; color: ${r===B?"#ffffff":"#a1a1aa"}; cursor: pointer;">
                ${B} دقیقه
              </button>
            `).join("")}
          </div>
        </div>
      </div>

      <!-- 🌟 CENTRAL FEATURE: PROMINENT LARGE POMODORO TIMER CIRCLE -->
      <div class="glass-panel timer-circle-panel" style="padding: 20px 16px; margin-bottom: 14px; border-radius: 18px; border: 1px solid ${M}; background: linear-gradient(180deg, rgba(22, 23, 29, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%); text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
        
        <!-- Radial Timer Display -->
        <div id="immersion-clock-clickable" class="timer-circle countdown-timer" onclick="event.preventDefault(); event.stopPropagation(); if(${j}){ window.finishPomodoroSession && window.finishPomodoroSession(); } else { window.planexStartFocusTimer && window.planexStartFocusTimer(event); }" style="position: relative; width: 230px; height: 230px; margin: 0 auto 16px auto; display: flex; align-items: center; justify-content: center; cursor: pointer;">
          <svg width="230" height="230" viewBox="0 0 220 220" style="transform: rotate(-90deg); width: 100%; height: 100%; filter: drop-shadow(0 0 12px ${M});">
            <circle cx="110" cy="110" r="95" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="12"></circle>
            <circle cx="110" cy="110" r="95" fill="none" stroke="${M}" stroke-width="12" 
              stroke-dasharray="596.9" 
              stroke-dashoffset="${596.9-596.9*(i===0?e%3600/3600:i===2?n/300:n/(r*60))}" 
              stroke-linecap="round" style="transition: stroke-dashoffset 0.5s ease;"></circle>
          </svg>
          
          <div style="position: absolute; text-align: center; width: 100%;">
            <div id="focus-timer-display" data-alias="timer-clock-display" style="font-size: 2.8rem; font-weight: 900; font-family: 'Outfit', sans-serif; color: #ffffff; letter-spacing: 1.5px; text-shadow: 0 0 24px ${M}; line-height: 1;">
              ${h}
            </div>
            <div style="font-size: 0.78rem; font-weight: 700; color: ${j?M:"#a1a1aa"}; margin-top: 6px;">
              ${j?N:C}
            </div>
          </div>
        </div>

        <!-- Timer Action Buttons: WIDE ATTACHED START BUTTON -->
        <div style="display: flex; gap: 8px;">
          <button type="button" id="btn-toggle-timer-main" onclick="event.preventDefault(); event.stopPropagation(); if(${j}){ window.finishPomodoroSession && window.finishPomodoroSession(); } else { window.planexStartFocusTimer && window.planexStartFocusTimer(event); }" class="btn-primary" style="flex: 1; height: 46px; font-size: 1rem; font-weight: 800; background: ${j?"#ef4444":I}; border-radius: 12px; border: none; cursor: pointer; color: white; box-shadow: 0 4px 16px ${j?"rgba(239,68,68,0.35)":"rgba(16,185,129,0.35)"}; transition: all 0.2s ease;">
            ${j?"⏸ توقف و ثبت پارت":A?"☕ شروع استراحت":k?"🧘 شروع فعالیت غیردرسی":"▶ شروع تایمر"}
          </button>
          <button type="button" id="btn-reset-timer-main" onclick="event.preventDefault(); event.stopPropagation(); window.resetTimer && window.resetTimer(event);" class="glass-panel" style="width: 70px; height: 46px; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); cursor: pointer; font-size: 0.82rem; font-weight: 700; border-radius: 12px; color: #a1a1aa; display: flex; align-items: center; justify-content: center; gap: 4px;" title="ریست تایمر (لغو بدون ثبت)">
            🔄
          </button>
        </div>

      </div>

      <!-- 💾 4. DEDICATED ACTION BUTTONS: AUTO-SYNC LOCAL & CLOUD SAVE -->
      <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px;">
        <!-- Button 1: Primary Save with Auto-Sync -->
        <button type="button" id="btn-save-activity-local" onclick="window.finishPomodoroSession && window.finishPomodoroSession()" style="width: 100%; height: 46px; background: ${D}; color: white; border: none; border-radius: 12px; font-size: 0.92rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35); transition: all 0.2s ease;">
          <span>${T}</span>
        </button>

        <!-- Button 2: Switch to Manual Log Modal -->
        <button type="button" onclick="if(window.openManualActivityLogModal){ window.openManualActivityLogModal(); } else { window.appState.activeModal = 'manualLog'; window.renderApp(); }" style="width: 100%; height: 38px; background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; font-size: 0.8rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; transition: all 0.2s ease;">
          <span style="font-size: 0.95rem;">➕</span>
          <span>ثبت دستی (بدون تایمر)</span>
        </button>
      </div>

      <!-- 🎵 Ambient Focus Sound Player Widget -->
      ${Ut()}


      <!-- 🎯 5. ACCORDION: TEST COUNTER & NOTES (Optional) -->
      <div class="glass-panel" style="margin-bottom: 10px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-accordion-toggle" id="btn-accordion-testNote" data-accordion-key="testNote" onclick="event.preventDefault(); event.stopPropagation(); window.toggleFocusAccordion && window.toggleFocusAccordion('testNote', event);" style="width: 100%; padding: 12px 14px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; font-weight: 700; color: #e4e4e7;">
            <span style="font-size: 0.95rem;">📝</span>
            <span>ثبت تست و یادداشت (اختیاری) ${d>0?`<strong style="color: #38bdf8; font-weight: 800;">(${d} تست)</strong>`:""}</span>
          </div>
          <span class="accordion-chevron" style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${f.testNote?"180deg":"0deg"});">▼</span>
        </button>

        <div id="accordion-drawer-testNote" class="accordion-drawer" style="display: ${f.testNote?"block":"none"}; padding: 12px 14px 14px 14px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
          ${$?`
            <!-- Dedicated Test Counter -->
            <div style="margin-bottom: 10px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-size: 0.78rem; color: #e4e4e7; font-weight: 700;">تست‌شمار پارت مطالعه:</span>
                <span style="font-size: 0.68rem; color: #8e8e9c;">امروز: <strong style="color:#e4e4e7;">${L+d}</strong> تست</span>
              </div>

              <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
                <button type="button" id="btn-test-counter-minus" onclick="window.adjustFocusTests && window.adjustFocusTests(-1)" style="width: 34px; height: 34px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; font-size: 1rem; font-weight: bold; cursor: pointer;" title="کاهش یک تست">−</button>
                
                <div id="focus-session-tests-display" style="flex: 1; text-align: center; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 2px 8px;">
                  <div style="font-size: 1.4rem; font-weight: 800; font-family: 'Outfit', sans-serif; color: #e4e4e7; line-height: 1.1;">${d}</div>
                  <div style="font-size: 0.6rem; color: #8e8e9c;">تست حل‌شده</div>
                </div>
                
                <button type="button" id="btn-test-counter-plus" onclick="window.adjustFocusTests && window.adjustFocusTests(1)" style="padding: 0 12px; height: 34px; border-radius: 8px; border: none; background: #7c3aed; color: white; font-size: 0.78rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 4px; box-shadow: none;">
                  +۱ تست
                </button>
                <button type="button" id="btn-test-counter-reset" onclick="window.resetFocusTests && window.resetFocusTests()" style="width: 32px; height: 34px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; font-size: 0.75rem; cursor: pointer;" title="صفر کردن تست‌های این پارت">
                  ↺
                </button>
              </div>

              <!-- Quick Test Increment Buttons -->
              <div style="display: flex; gap: 4px; justify-content: center; margin-bottom: 10px;">
                <button type="button" class="btn-quick-test-add" data-add-test="5" onclick="window.adjustFocusTests && window.adjustFocusTests(5)" style="flex: 1; padding: 5px; font-size: 0.72rem; font-weight: 600; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; cursor: pointer;">+۵</button>
                <button type="button" class="btn-quick-test-add" data-add-test="10" onclick="window.adjustFocusTests && window.adjustFocusTests(10)" style="flex: 1; padding: 5px; font-size: 0.72rem; font-weight: 600; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; cursor: pointer;">+۱۰</button>
                <button type="button" class="btn-quick-test-add" data-add-test="20" onclick="window.adjustFocusTests && window.adjustFocusTests(20)" style="flex: 1; padding: 5px; font-size: 0.72rem; font-weight: 600; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; cursor: pointer;">+۲۰</button>
                <button type="button" class="btn-quick-test-add" data-add-test="50" onclick="window.adjustFocusTests && window.adjustFocusTests(50)" style="flex: 1; padding: 5px; font-size: 0.72rem; font-weight: 600; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; cursor: pointer;">+۵۰</button>
              </div>
            </div>
          `:""}

          <!-- Note Input -->
          <div>
            <label style="display: block; font-size: 0.72rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 4px;">
              یادداشت پارت (اختیاری):
            </label>
            <input type="text" id="input-focus-session-note" value="${b||""}" placeholder="نکات مهم یا ارزیابی شخصی..." style="width: 100%; box-sizing: border-box; height: 34px; padding: 0 10px; font-size: 0.76rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; color: #fff;" />
          </div>
        </div>
      </div>

    </div>
  `}function bn(o={}){return`
    <div id="modal-focus-view" class="modal-overlay" style="position: fixed; inset: 0; z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 14px;">
      <div class="modal-backdrop" style="position: absolute; inset: 0; background: rgba(12, 13, 17, 0.88); backdrop-filter: blur(16px);" data-close-modal="true" onclick="if(!window.isTimerRunningCheck()){ window.closeFocusModal(); }"></div>
      
      <div class="glass-panel" style="position: relative; width: 100%; max-width: 520px; padding: 20px; border-radius: 18px; border: 1px solid rgba(255, 255, 255, 0.06); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8); max-height: 94vh; overflow-y: auto; background: #16171d; color: #fff;">
        ${Lo({...o,isModalMode:!0})}
      </div>
    </div>
  `}function xn(o={}){var J,G,Q,V,X;const{activityMode:e="study",selectedCategoryCode:t=null,selectedNonStudyCode:n="non_sports",subject:a="",durationMins:i=60,startTime:r="08:00",endTime:d="09:00",testCount:s=0,note:l="",durationMode:c="add",testCorrect:y=0,testWrong:m=0,testUnanswered:u=0}=o,b=j=>String(j).replace(/[0-9]/g,Z=>"۰۱۲۳۴۵۶۷۸۹"[Z]),g=e!=="non-study",f=(typeof p<"u"?p.getCategories():[])||[],x=f.filter(j=>Oe(j)),w=x.length>0?x:f,A=(typeof p<"u"&&typeof p.getNonStudyCategories=="function"?p.getNonStudyCategories():[{code:"non_sports",title:"ورزش و تندرستی",icon:"🏃",color:"#f59e0b"},{code:"non_rest",title:"استراحت و تفریح",icon:"☕",color:"#8b5cf6"},{code:"non_sleep",title:"خواب و ریکاوری",icon:"😴",color:"#6366f1"},{code:"non_meal",title:"میانوعده و تغذیه",icon:"🍎",color:"#10b981"},{code:"non_personal",title:"کارهای شخصی",icon:"📱",color:"#ec4899"},{code:"non_walk",title:"پیادهروی و هوای آزاد",icon:"🚶",color:"#06b6d4"},{code:"non_house",title:"امور منزل و خرید",icon:"🧹",color:"#64748b"}])||[],k=t&&!String(t).startsWith("non_")?t:((J=w.find(j=>Oe(j)))==null?void 0:J.code)||((G=w[0])==null?void 0:G.code)||"cat_dakheli";w.find(j=>j.code===k)||w[0],A.find(j=>j.code===n)||A[0];const $=Math.max(1,parseInt(i)||60),M=r||"08:00";let I=d;if(!I){const[j,Z]=M.split(":").map(Number),be=((!isNaN(j)&&!isNaN(Z)?j*60+Z:480)+$)%1440,fe=String(Math.floor(be/60)).padStart(2,"0"),ce=String(be%60).padStart(2,"0");I=`${fe}:${ce}`}const D=Math.max(0,parseInt(y)||0),T=Math.max(0,parseInt(m)||0),N=Math.max(0,parseInt(u)||0),C=D+T+N;let P=null,L="—";C>0&&(P=+((3*D-T)/(3*C)*100).toFixed(1),L=b(P.toFixed(1))+"%");let q=0;try{q=typeof p<"u"&&typeof p.getStudyMinutesByDate=="function"?p.getStudyMinutesByDate():0}catch{}const F=c==="replace"?$:q+$;return`
    <div id="modal-manual-log-registration" class="modal-overlay" style="position: fixed; inset: 0; z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 14px;">
      <!-- Backdrop -->
      <div class="modal-backdrop" data-close-modal="true" style="position: absolute; inset: 0; background: rgba(12, 13, 17, 0.88); backdrop-filter: blur(16px);" onclick="window.closeActiveModal ? window.closeActiveModal() : (window.closeManualActivityLogModal && window.closeManualActivityLogModal());"></div>
      
      <!-- Modal Box -->
      <div class="glass-panel animate-fade-in" style="position: relative; width: 100%; max-width: 540px; padding: 22px; border-radius: 18px; border: 1px solid rgba(255, 255, 255, 0.06); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.85); max-height: 94vh; overflow-y: auto; background: #16171d; color: #fff; direction: rtl;">
        
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 14px;">
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 44px; height: 44px; border-radius: 14px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 1.35rem;">
              📝
            </div>
            <div>
              <h2 style="margin: 0; font-size: 1.15rem; font-weight: 900; color: #e4e4e7;">
                ثبت دستی فعالیت و مطالعه
              </h2>
              <p style="margin: 3px 0 0 0; font-size: 0.74rem; color: var(--text-secondary);">
                ثبت مستقیم ساعت مطالعه، تعداد تست یا فعالیت بدون نیاز به تایمر زنده
              </p>
            </div>
          </div>

          <button id="btn-close-manual-log-modal" class="btn-close-modal" data-close-modal="true" type="button" onclick="window.closeActiveModal ? window.closeActiveModal() : (window.closeManualActivityLogModal && window.closeManualActivityLogModal());" style="background: #1f2029; border-radius: 50%; width: 36px; height: 36px; border: 1px solid rgba(255,255,255,0.08); color: #cbd5e1; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; transition: all 0.15s ease;">✕</button>
        </div>

        <!-- 🌟 1. ACTIVITY TYPE TABS: STUDY vs NON-STUDY -->
        <div style="margin-bottom: 16px;">
          <label style="display: block; font-size: 0.78rem; font-weight: 800; color: #e2e8f0; margin-bottom: 8px;">
            ۱. انتخاب نوع فعالیت:
          </label>
          <div style="display: flex; gap: 8px; background: #1f2029; padding: 4px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08);">
            <button type="button" id="btn-manual-mode-study" class="btn-manual-mode-tab ${g?"active":""}" data-mode="study" onclick="event.preventDefault(); event.stopPropagation(); window.setManualLogMode && window.setManualLogMode('study', event)" style="flex: 1; padding: 10px 14px; border-radius: 12px; font-size: 0.86rem; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; border: 1px solid ${g?"#7c3aed":"transparent"}; background: ${g?"#7c3aed":"transparent"}; color: ${g?"#ffffff":"#a1a1aa"}; transition: all 0.2s ease;">
              <span style="font-size: 1.15rem;">📚</span>
              <span>فعالیت درسی (مطالعه و تست)</span>
            </button>

            <button type="button" id="btn-manual-mode-nonstudy" class="btn-manual-mode-tab ${g?"":"active"}" data-mode="non-study" onclick="event.preventDefault(); event.stopPropagation(); window.setManualLogMode && window.setManualLogMode('non-study', event)" style="flex: 1; padding: 10px 14px; border-radius: 12px; font-size: 0.86rem; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; border: 1px solid ${g?"transparent":"#7c3aed"}; background: ${g?"transparent":"#7c3aed"}; color: ${g?"#a1a1aa":"#ffffff"}; transition: all 0.2s ease;">
              <span style="font-size: 1.15rem;">☕</span>
              <span>فعالیت غیردرسی (ورزش / روتین)</span>
            </button>
          </div>
        </div>

        <!-- 📚 2. LESSON / CATEGORY SELECTION -->
        <div class="glass-panel" style="padding: 14px; margin-bottom: 16px; border-radius: 18px; border: 1px solid rgba(255,255,255,0.06); background: #16171d;">
          <!-- Study categories -->
          <div id="manual-study-cats-section" style="display: ${g?"block":"none"};">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <label style="font-size: 0.78rem; font-weight: 800; color: var(--text-secondary);">
                انتخاب درس:
              </label>
              <button type="button" onclick="if(window.openActivityModal){ window.openActivityModal(); }" style="background: none; border: none; color: #a1a1aa; font-size: 0.74rem; font-weight: bold; cursor: pointer; padding: 0;">
                ➕ افزودن درس دلخواه
              </button>
            </div>

            <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 6px; margin-bottom: 12px;" id="manual-study-chips-list">
              ${w.map(j=>`
                <button type="button" class="btn-manual-cat-chip ${j.code===k?"active":""}" data-code="${j.code}" data-title="${j.title}" data-color="${j.color||"#0ea5e9"}" onclick="event.preventDefault(); event.stopPropagation(); window.handleSelectManualSubject && window.handleSelectManualSubject(this, '${j.title}', '${j.code}')" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 13px; border-radius: 12px; border: 1px solid ${j.code===k?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${j.code===k?"#7c3aed":"#1f2029"}; color: ${j.code===k?"#ffffff":"#e2e8f0"}; font-size: 0.8rem; font-weight: 700; cursor: pointer; white-space: nowrap; transition: all 0.15s ease;">
                  <span>${j.icon||"📚"}</span>
                  <span>${j.title}</span>
                </button>
              `).join("")}
            </div>

            <!-- 🌟 Study Phase Selection Chips -->
            <div style="margin-bottom: 12px;">
              <label style="display: block; font-size: 0.76rem; font-weight: 800; color: var(--text-secondary); margin-bottom: 6px;">
                فاز / نوع مطالعه (الزامی):
              </label>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;" id="manual-phase-chips-list">
                ${[{id:"یادگیری",label:"یادگیری",icon:"🧠"},{id:"تست‌زنی",label:"تست‌زنی",icon:"🎯"},{id:"مرور",label:"مرور",icon:"🔄"},{id:"جمع‌بندی",label:"جمع‌بندی",icon:"📑"}].map(j=>{var K,be,fe,ce;const Z=((K=window.fabActivityState)==null?void 0:K.selectedPhase)===j.id||((be=window.fabActivityState)==null?void 0:be.studyType)===j.id||((fe=window.appState)==null?void 0:fe.selectedStudyMethod)===j.id||!((ce=window.fabActivityState)!=null&&ce.selectedPhase)&&j.id==="یادگیری";return`
                    <button type="button" class="btn-phase-chip btn-manual-study-pill ${Z?"active":""}" data-phase="${j.id}" data-pill="${j.id}" onclick="event.preventDefault(); event.stopPropagation(); window.selectStudyPhase && window.selectStudyPhase(this, '${j.id}')" style="padding: 8px 4px; border-radius: 12px; border: 1px solid ${Z?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${Z?"#7c3aed":"#1f2029"}; color: ${Z?"#ffffff":"#e4e4e7"}; font-size: 0.78rem; font-weight: 800; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 2px; transition: all 0.15s ease;">
                      <span style="font-size: 1.1rem;">${j.icon}</span>
                      <span>${j.label}</span>
                    </button>
                  `}).join("")}
              </div>
              <input type="hidden" id="input-manual-phase" value="${((Q=window.fabActivityState)==null?void 0:Q.selectedPhase)||((V=window.fabActivityState)==null?void 0:V.studyType)||((X=window.appState)==null?void 0:X.selectedStudyMethod)||"یادگیری"}" />
            </div>

            <div>
              <label style="display: block; font-size: 0.76rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 5px;">
                مبحث یا موضوع مطالعه (اختیاری):
              </label>
              <input type="text" id="input-manual-subject" value="${a||""}" placeholder="مثلاً: قلب و عروق، فصل ۳ ژنتیک، تستهای جامع..." style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-size: 0.84rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #fff;" />
            </div>
          </div>

          <!-- Non-study categories -->
          <div id="manual-nonstudy-cats-section" style="display: ${g?"none":"block"};">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <label style="font-size: 0.78rem; font-weight: 800; color: var(--text-secondary);">
                انتخاب دسته‌بندی غیردرسی:
              </label>
              <button type="button" id="btn-manual-add-nonstudy" onclick="if(window.openActivityModal){ window.openActivityModal(); }" style="background: none; border: none; color: #a1a1aa; font-size: 0.74rem; font-weight: bold; cursor: pointer; padding: 0;">
                ➕ افزودن فعالیت جدید
              </button>
            </div>

            <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 6px; margin-bottom: 12px;" id="manual-nonstudy-chips-list">
              ${A.map(j=>`
                <button type="button" class="btn-manual-nonstudy-chip ${j.code===n?"active":""}" data-code="${j.code}" data-title="${j.title}" data-color="${j.color||"#f59e0b"}" onclick="event.preventDefault(); event.stopPropagation(); window.handleSelectManualSubject && window.handleSelectManualSubject(this, '${j.title}', '${j.code}')" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 13px; border-radius: 12px; border: 1px solid ${j.code===n?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${j.code===n?"#7c3aed":"#1f2029"}; color: ${j.code===n?"#ffffff":"#e2e8f0"}; font-size: 0.8rem; font-weight: 700; cursor: pointer; white-space: nowrap; transition: all 0.15s ease;">
                  <span>${j.icon||"☕"}</span>
                  <span>${j.title}</span>
                </button>
              `).join("")}
            </div>

            <div>
              <label style="display: block; font-size: 0.76rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 5px;">
                عنوان یا شرح فعالیت (اختیاری):
              </label>
              <input type="text" id="input-manual-nonstudy-subject" value="${a||""}" placeholder="مثلاً: دویدن صبحگاهی، خواب بعد از ناهار، خرید منزل..." style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-size: 0.84rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #fff;" />
            </div>
          </div>
        </div>

        <!-- ⏱️ 3. DURATION SECTION -->
        <div class="glass-panel" style="padding: 16px; margin-bottom: 16px; border-radius: 18px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <!-- Time Interval (از ساعت تا ساعت) -->
          <div style="margin-bottom: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
              <label style="font-size: 0.76rem; font-weight: 800; color: #cbd5e1; display: flex; align-items: center; gap: 6px;">
                <span>⏱️</span> بازه زمانی فعالیت (از ساعت تا ساعت):
              </label>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <div>
                <label style="display: block; font-size: 0.7rem; font-weight: bold; color: #a1a1aa; margin-bottom: 4px;">از ساعت (شروع):</label>
                <input type="time" id="input-manual-start-time" value="${M}" oninput="window.syncManualTimeInputs && window.syncManualTimeInputs('from_times')" style="width: 100%; box-sizing: border-box; height: 42px; padding: 0 10px; font-size: 1.05rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #38bdf8; text-align: center;" />
              </div>
              <div>
                <label style="display: block; font-size: 0.7rem; font-weight: bold; color: #a1a1aa; margin-bottom: 4px;">تا ساعت (پایان):</label>
                <input type="time" id="input-manual-end-time" value="${I}" oninput="window.syncManualTimeInputs && window.syncManualTimeInputs('from_times')" style="width: 100%; box-sizing: border-box; height: 42px; padding: 0 10px; font-size: 1.05rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #38bdf8; text-align: center;" />
              </div>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 1rem;">⏳</span>
              <span style="font-size: 0.82rem; color: #e4e4e7; font-weight: 800;">مجموع مدت زمان:</span>
            </div>
            <span id="manual-duration-human-badge" style="font-size: 0.76rem; color: #a1a1aa; font-weight: bold; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); padding: 3px 10px; border-radius: 10px;">
              ${me($)}
            </span>
          </div>

          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
            <button type="button" id="btn-manual-dur-minus-15" class="btn-dur-adjust" data-change="-15" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(-15)" style="padding: 0 10px; height: 44px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; font-size: 0.85rem; font-weight: 800; cursor: pointer;">−۱۵</button>
            <button type="button" id="btn-manual-dur-minus-5" class="btn-dur-adjust" data-change="-5" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(-5)" style="padding: 0 10px; height: 44px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; font-size: 0.85rem; font-weight: 800; cursor: pointer;">−۵</button>
            
            <div style="flex: 1; position: relative;">
              <input type="number" id="manual-duration-input" data-alias="input-manual-duration" min="1" max="1440" value="${$}" oninput="window.updateManualDurationPreview && window.updateManualDurationPreview(this.value)" style="width: 100%; box-sizing: border-box; height: 44px; text-align: center; font-size: 1.35rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; color: #e4e4e7;" />
              <span style="position: absolute; left: 10px; top: 12px; font-size: 0.72rem; color: #94a3b8; pointer-events: none;">دقیقه</span>
            </div>

            <button type="button" id="btn-manual-dur-plus-5" class="btn-dur-adjust" data-change="5" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(5)" style="padding: 0 10px; height: 44px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; font-size: 0.85rem; font-weight: 800; cursor: pointer;">+۵</button>
            <button type="button" id="btn-manual-dur-plus-15" class="btn-dur-adjust" data-change="15" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(15)" style="padding: 0 10px; height: 44px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; font-size: 0.85rem; font-weight: 800; cursor: pointer;">+۱۵</button>
          </div>

          <!-- Quick Duration Presets (-15, +5, +15, 15m, 30m, 1h, 1.5h, 2h) -->
          <div style="display: flex; gap: 6px; justify-content: center; flex-wrap: wrap; margin-bottom: 14px;">
            ${[15,30,45,60,90,120].map(j=>`
              <button type="button" class="btn-quick-dur-preset ${$===j?"active":""}" data-mins="${j}" onclick="event.preventDefault(); event.stopPropagation(); window.setManualDurationPreset && window.setManualDurationPreset(${j})" style="flex: 1; min-width: 65px; padding: 6px 4px; font-size: 0.76rem; font-weight: 800; border-radius: 10px; border: 1px solid ${$===j?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${$===j?"#7c3aed":"#1f2029"}; color: ${$===j?"#ffffff":"#a1a1aa"}; cursor: pointer; transition: all 0.15s ease;">
                ${j>=60?j===60?"۱ ساعت":`${j/60} ساعت`:`${j} دقیقه`}
              </button>
            `).join("")}
          </div>

          <!-- Duration Mode Toggle: Add vs Replace -->
          <div id="manual-duration-mode-section" style="display: ${g?"block":"none"}; margin-bottom: 10px;">
            <div style="display: flex; gap: 6px; background: #1a1b22; padding: 4px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);">
              <button type="button" id="btn-dur-mode-add" class="btn-duration-mode ${c==="add"?"active":""}" data-duration-mode="add" onclick="event.preventDefault(); event.stopPropagation(); window.setManualDurationMode && window.setManualDurationMode('add')" style="flex: 1; padding: 10px 8px; border-radius: 10px; font-size: 0.78rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; border: 1px solid ${c==="add"?"#10b981":"transparent"}; background: ${c==="add"?"rgba(16,185,129,0.15)":"transparent"}; color: ${c==="add"?"#34d399":"#71717a"}; transition: all 0.2s ease;">
                <span>➕</span>
                <span>افزودن به تایم قبلی امروز</span>
              </button>
              <button type="button" id="btn-dur-mode-replace" class="btn-duration-mode ${c==="replace"?"active":""}" data-duration-mode="replace" onclick="event.preventDefault(); event.stopPropagation(); window.setManualDurationMode && window.setManualDurationMode('replace')" style="flex: 1; padding: 10px 8px; border-radius: 10px; font-size: 0.78rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; border: 1px solid ${c==="replace"?"#f59e0b":"transparent"}; background: ${c==="replace"?"rgba(245,158,11,0.15)":"transparent"}; color: ${c==="replace"?"#fbbf24":"#71717a"}; transition: all 0.2s ease;">
                <span>🔄</span>
                <span>ثبت به عنوان مجموع نهایی امروز</span>
              </button>
            </div>
          </div>

          <!-- Live Summary -->
          <div id="manual-duration-summary" style="background: rgba(124,58,237,0.08); border: 1px solid rgba(124,58,237,0.2); border-radius: 10px; padding: 8px 12px; display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1rem;">📊</span>
            <span style="font-size: 0.8rem; font-weight: 700; color: #c4b5fd;">مجموع نهایی ثبت‌شده: <span id="manual-final-total-text" style="color: #e4e4e7;">${me(F)}</span></span>
          </div>
        </div>

        <!-- 🎯 4. TEST DETAILS SECTION (Study mode only) -->
        <div id="manual-tests-section" class="glass-panel" style="display: ${g?"block":"none"}; padding: 16px; margin-bottom: 16px; border-radius: 18px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 1.2rem;">🎯</span>
              <span style="font-size: 0.86rem; color: #e4e4e7; font-weight: 900;">جزئیات تستها:</span>
            </div>
            <span id="manual-tests-total-badge" style="font-size: 0.76rem; color: #a1a1aa; font-weight: bold; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); padding: 3px 10px; border-radius: 10px;">
              ${b(C)} تست
            </span>
          </div>

          <!-- Test Input Grid -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
            <!-- Correct -->
            <div style="background: #1a1b22; border: 1px solid rgba(16,185,129,0.2); border-radius: 14px; padding: 10px;">
              <label style="display: flex; align-items: center; gap: 4px; font-size: 0.74rem; font-weight: 800; color: #34d399; margin-bottom: 6px;">
                <span>✅</span> درست (صحیح)
              </label>
              <input type="number" id="input-manual-test-correct" min="0" max="2000" value="${D}" oninput="window.updateManualTestScorePreview && window.updateManualTestScorePreview()" style="width: 100%; box-sizing: border-box; height: 44px; text-align: center; font-size: 1.2rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(16,185,129,0.15); border-radius: 10px; color: #34d399;" />
            </div>

            <!-- Wrong -->
            <div style="background: #1a1b22; border: 1px solid rgba(239,68,68,0.2); border-radius: 14px; padding: 10px;">
              <label style="display: flex; align-items: center; gap: 4px; font-size: 0.74rem; font-weight: 800; color: #f87171; margin-bottom: 6px;">
                <span>❌</span> غلط (اشتباه)
              </label>
              <input type="number" id="input-manual-test-wrong" min="0" max="2000" value="${T}" oninput="window.updateManualTestScorePreview && window.updateManualTestScorePreview()" style="width: 100%; box-sizing: border-box; height: 44px; text-align: center; font-size: 1.2rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(239,68,68,0.15); border-radius: 10px; color: #f87171;" />
            </div>

            <!-- Unanswered -->
            <div style="background: #1a1b22; border: 1px solid rgba(161,161,170,0.2); border-radius: 14px; padding: 10px;">
              <label style="display: flex; align-items: center; gap: 4px; font-size: 0.74rem; font-weight: 800; color: #a1a1aa; margin-bottom: 6px;">
                <span>⏭️</span> نزده
              </label>
              <input type="number" id="input-manual-test-unanswered" min="0" max="2000" value="${N}" oninput="window.updateManualTestScorePreview && window.updateManualTestScorePreview()" style="width: 100%; box-sizing: border-box; height: 44px; text-align: center; font-size: 1.2rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(161,161,170,0.15); border-radius: 10px; color: #a1a1aa;" />
            </div>

            <!-- Total (auto-computed) -->
            <div style="background: #1a1b22; border: 1px solid rgba(124,58,237,0.2); border-radius: 14px; padding: 10px;">
              <label style="display: flex; align-items: center; gap: 4px; font-size: 0.74rem; font-weight: 800; color: #a78bfa; margin-bottom: 6px;">
                <span>📋</span> تعداد کل تست
              </label>
              <div id="manual-test-total-computed" style="width: 100%; height: 44px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(124,58,237,0.15); border-radius: 10px; color: #a78bfa;">
                ${b(C)}
              </div>
            </div>
          </div>

          <!-- Real-time Score Percentage Preview -->
          <div id="manual-score-preview" style="background: ${C>0?P>=50?"rgba(16,185,129,0.08)":"rgba(239,68,68,0.08)":"rgba(255,255,255,0.03)"}; border: 1px solid ${C>0?P>=50?"rgba(16,185,129,0.2)":"rgba(239,68,68,0.2)":"rgba(255,255,255,0.06)"}; border-radius: 12px; padding: 10px 14px; display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 1.1rem;">📊</span>
              <span style="font-size: 0.82rem; font-weight: 800; color: #e2e8f0;">درصد خالص کنکوری:</span>
            </div>
            <span id="manual-score-percentage-text" style="font-size: 1.1rem; font-weight: 900; font-family: 'Outfit', sans-serif; color: ${C>0?P>=50?"#34d399":"#f87171":"#71717a"};">
              ${L}
            </span>
          </div>

          ${C>0?`
          <div style="margin-top: 8px; font-size: 0.68rem; color: #71717a; text-align: center; line-height: 1.6;">
            فرمول: ((۳ × صحیح − غلط) ÷ (۳ × کل)) × ۱۰۰
          </div>
          `:""}
        </div>

        <!-- 📝 5. OPTIONAL NOTE / MEMO -->
        <div class="glass-panel" style="padding: 14px; margin-bottom: 20px; border-radius: 18px; border: 1px solid rgba(255,255,255,0.06); background: #16171d;">
          <label style="display: block; font-size: 0.76rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 6px;">
            📝 یادداشت یا نکته این پارت (اختیاری):
          </label>
          <input type="text" id="input-manual-note" value="${l||""}" placeholder="نکات مهم، درصد تسلط یا ارزیابی شخصی..." style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-size: 0.82rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; color: #fff;" />
        </div>

        <!-- 💾 6. SUBMIT BUTTON -->
        <div style="display: flex; gap: 10px; align-items: center;">
          <button type="button" id="btn-submit-manual-log" data-alias="btn-save-manual-activity-log" onclick="event.preventDefault(); event.stopPropagation(); window.saveManualActivityLog && window.saveManualActivityLog(event);" style="flex: 1; height: 52px; background: ${g?"#7c3aed":"linear-gradient(135deg, #d97706 0%, #b45309 100%)"}; color: white; border: none; border-radius: 14px; font-size: 0.95rem; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: none; transition: all 0.2s ease;">
            <span id="btn-submit-manual-log-icon" style="font-size: 1.2rem;">${g?"💾":"☕"}</span>
            <span id="btn-submit-manual-log-text">${g?"ثبت در کارنامه و نمودارها":"ثبت فعالیت غیردرسی (بدون احتساب در ساعت مطالعه)"}</span>
          </button>
        </div>

      </div>
    </div>
  `}function Jo(o){if(!o)return"";let e=String(o).trim();return e=e.replace(/[۰-۹]/g,t=>"۰۱۲۳۴۵۶۷۸۹".indexOf(t)),e=e.replace(/[٠-٩]/g,t=>"٠١٢٣٤٥٦٧٨٩".indexOf(t)),e=e.replace(/[^0-9]/g,""),e.startsWith("00989")?e="0"+e.slice(4):e.startsWith("0989")?e="0"+e.slice(3):e.startsWith("989")?e="0"+e.slice(2):e.startsWith("9")&&e.length===10&&(e="0"+e),e}function wn(o=null){const e=o||(()=>{try{return JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{return null}})(),t=localStorage.getItem("planex_user_avatar")||"",n=localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_leaderboard_nickname")||"",a=(()=>{try{return JSON.parse(localStorage.getItem("planex_user_profile")||"null")}catch{return null}})(),i=!!(e&&(e.phone||e.phone_number||e.telegram_id||e.id)),r=n||(a==null?void 0:a.name)||(a==null?void 0:a.nickname)||(e==null?void 0:e.full_name)||(e==null?void 0:e.name)||(e==null?void 0:e.first_name)||"کاربر پلنکس",d=(e==null?void 0:e.phone)||(e==null?void 0:e.phone_number)||"",s=t||(a==null?void 0:a.avatar)||(a==null?void 0:a.avatar_url)||(e==null?void 0:e.avatar_url)||(e==null?void 0:e.photo_url)||`https://api.dicebear.com/7.x/avataaars/svg?seed=${d||(e==null?void 0:e.username)||"planex"}`;return`
    <div class="modal-overlay" id="modal-login-auth" style="backdrop-filter: blur(24px); background: rgba(0, 0, 0, 0.88); z-index: 9990; direction: rtl;" onclick="if(event.target === this || event.target.classList.contains('modal-overlay')) { window.closeActiveModal(); }">
      <div class="modal-card" style="max-width: 440px; width: 92%; background: #070709; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 26px; padding: 26px 22px; box-shadow: 0 35px 70px -15px rgba(0, 0, 0, 0.95), 0 0 30px rgba(124, 58, 237, 0.12);" dir="rtl" onclick="event.stopPropagation();">
        
        <!-- Modal Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.07); padding-bottom: 14px; margin-bottom: 18px;">
          <div>
            <div style="color: #ffffff; display: flex; align-items: center; gap: 8px; font-size: 1.08rem; font-weight: 800;">
              <span>🔑</span>
              <span>ورود و همگام‌سازی اطلاعات</span>
            </div>
            <span style="font-size: 0.74rem; color: #71717a; margin-top: 3px; display: block;">همگام‌سازی ابری تمام پارت‌ها، برنامه‌ها و اتاق‌ها با شماره موبایل</span>
          </div>
          <button type="button" aria-label="بستن" onclick="window.closeActiveModal();" style="min-width: 44px; min-height: 44px; width: 44px; height: 44px; background: #141418; border: 1px solid rgba(255,255,255,0.1); color: #a1a1aa; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 1.1rem; transition: all 0.2s;">✕</button>
        </div>

        ${i?`
          <!-- Logged In User State -->
          <div style="background: #0d0d12; border: 1px solid rgba(16, 185, 129, 0.3); padding: 22px 20px; border-radius: 22px; text-align: center; margin-bottom: 18px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);">
            <div style="position: relative; width: 78px; height: 78px; margin: 0 auto 12px;">
              <img src="${s}" 
                   style="width: 100%; height: 100%; border-radius: 50%; border: 2.5px solid #10b981; object-fit: cover;" 
                   onerror="this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=planex'" />
              <div style="position: absolute; bottom: 0; right: 0; width: 24px; height: 24px; border-radius: 50%; background: #10b981; border: 2px solid #0d0d12; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; color: #fff;">✓</div>
            </div>
            <h3 style="font-size: 1.12rem; color: #f8fafc; margin-bottom: 4px; font-weight: 800;">${r}</h3>
            ${d?`<div style="font-size: 0.82rem; color: #38bdf8; font-family: 'Outfit', monospace; margin-bottom: 6px;" dir="ltr">📱 ${d}</div>`:""}
            <div style="display: inline-flex; align-items: center; gap: 6px; background: rgba(16, 185, 129, 0.12); color: #34d399; padding: 5px 14px; border-radius: 12px; font-size: 0.74rem; font-weight: 700; border: 1px solid rgba(16, 185, 129, 0.25);">
              <span>🟢</span><span>متصل به فضای ابری پلنکس</span>
            </div>

            <!-- ✏️ Edit Profile Button -->
            <button type="button" id="btn-open-edit-profile-modal" class="btn-open-edit-profile-modal" onclick="event.stopPropagation(); window.handleEditProfile();" style="margin-top: 14px; width: 100%; box-sizing: border-box; padding: 10px 14px; background: rgba(124, 58, 237, 0.2); color: #c4b5fd; border: 1px solid rgba(124, 58, 237, 0.4); border-radius: 12px; font-size: 0.82rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; box-shadow: 0 4px 14px rgba(124, 58, 237, 0.25); transition: all 0.2s;">
              <span>✏️</span>
              <span>ویرایش مشخصات / پروفایل</span>
            </button>
          </div>
          <!-- دو کلید دستی مجزا برای ذخیره و بازیابی اطلاعات سرور -->
          <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 6px;">
            <div style="display: flex; gap: 10px;">
              <button type="button" id="btn-manual-cloud-push" class="btn-manual-cloud-push" onclick="event.stopPropagation(); window.handleManualCloudPush();" style="flex: 1; padding: 13px 8px; background: linear-gradient(135deg, #10b981, #059669); color: #fff; font-size: 0.82rem; font-weight: 800; border-radius: 14px; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; box-shadow: 0 4px 15px rgba(16, 185, 129, 0.3); transition: all 0.2s;">
                <span>☁️⬆️</span><span>ذخیره در سرور</span>
              </button>
              <button type="button" id="btn-manual-cloud-pull" class="btn-manual-cloud-pull" onclick="event.stopPropagation(); window.handleManualCloudPull();" style="flex: 1; padding: 13px 8px; background: linear-gradient(135deg, #0284c7, #2563eb); color: #fff; font-size: 0.82rem; font-weight: 800; border-radius: 14px; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3); transition: all 0.2s;">
                <span>☁️⬇️</span><span>دریافت از سرور</span>
              </button>
            </div>
            
            <button type="button" id="btn-user-logout" class="btn-user-logout" onclick="event.stopPropagation(); window.handleUserLogout();" style="width: 100%; padding: 11px; background: #141418; border: 1px solid rgba(239, 68, 68, 0.3); color: #f87171; cursor: pointer; border-radius: 14px; font-size: 0.82rem; font-weight: 700; transition: all 0.2s; display: flex; align-items: center; justify-content: center; gap: 6px;">
              <span>خروج از حساب</span> <span>🚪</span>
            </button>
          </div>
          <div style="background: rgba(255,255,255,0.03); border: 1px dashed rgba(255,255,255,0.1); border-radius: 14px; padding: 10px 12px; margin-top: 10px; text-align: right; font-size: 0.72rem; color: #a1a1aa; line-height: 1.6;">
            <div>💾 <strong>ذخیره در سرور (Push):</strong> تمام اطلاعات و برنامه‌های این دستگاه روی سرور ذخیره می‌شود.</div>
            <div style="margin-top: 3px;">📥 <strong>دریافت از سرور (Pull):</strong> آخرین اطلاعات ذخیره‌شده از سرور دریافت و جایگزین دیتای این دستگاه می‌شود.</div>
          </div>
        `:`
          <!-- Primary 2-Field Login Form (Phone & Password) -->
          <form onsubmit="event.preventDefault(); window.handlePhoneLoginSubmit();" style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 18px;">
            
            <!-- Field 1: Phone Number -->
            <div>
              <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #e2e8f0; margin-bottom: 6px;">
                📱 شماره موبایل:
              </label>
              <input type="tel" id="input-login-phone" placeholder="09123456789" required
                     style="width: 100%; box-sizing: border-box; padding: 13px 16px; border-radius: 14px; background: #111116; border: 1px solid rgba(255,255,255,0.12); color: #ffffff; font-size: 0.95rem; font-family: 'Outfit', sans-serif; direction: ltr; text-align: left; transition: border-color 0.2s;"
                     onfocus="this.style.borderColor='#8b5cf6'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'" />
            </div>

            <!-- Field 2: Password with Eye Toggle -->
            <div>
              <label style="display: block; font-size: 0.8rem; font-weight: 700; color: #e2e8f0; margin-bottom: 6px;">
                🔑 رمز عبور دریافتی از ربات:
              </label>
              <div style="position: relative; display: flex; align-items: center;">
                <input type="password" id="input-login-password" placeholder="رمز عبور ۱۲ رقمی..." required
                       style="width: 100%; box-sizing: border-box; padding: 13px 44px 13px 16px; border-radius: 14px; background: #111116; border: 1px solid rgba(255,255,255,0.12); color: #ffffff; font-size: 0.95rem; font-family: 'Outfit', sans-serif; direction: ltr; text-align: left; transition: border-color 0.2s;"
                       onfocus="this.style.borderColor='#8b5cf6'" onblur="this.style.borderColor='rgba(255,255,255,0.12)'" />
                <button type="button" id="btn-toggle-login-pwd" onclick="window.toggleLoginPasswordVisibility()" 
                        style="position: absolute; right: 12px; background: none; border: none; color: #a1a1aa; cursor: pointer; font-size: 1.1rem; padding: 4px; display: flex; align-items: center; justify-content: center;">
                  👁️
                </button>
              </div>
            </div>

            <!-- Error Message Box -->
            <div id="login-modal-error-box" style="display: none; background: rgba(239, 68, 68, 0.12); border: 1px solid rgba(239, 68, 68, 0.3); border-radius: 12px; padding: 10px 12px; font-size: 0.76rem; color: #fca5a5; line-height: 1.5; text-align: center;"></div>

            <!-- Submit Button -->
            <button type="submit" id="btn-submit-phone-login" class="btn-submit-phone-login" onclick="event.preventDefault(); window.handlePhoneLoginSubmit();" 
                    style="width: 100%; box-sizing: border-box; padding: 14px 20px; background: linear-gradient(135deg, #7c3aed 0%, #6366f1 100%); color: #ffffff; border-radius: 14px; border: none; font-size: 0.94rem; font-weight: 800; cursor: pointer; box-shadow: 0 8px 22px rgba(124, 58, 237, 0.4); transition: transform 0.15s ease; display: flex; align-items: center; justify-content: center; gap: 8px;"
                    onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform='translateY(0)'">
              <span>ورود به حساب و همگام‌سازی 🚀</span>
            </button>
          </form>

          <!-- Telegram Bot Fast Help Button -->
          <div style="margin-top: 6px;">
            <a href="https://t.me/planex_sync_bot?start=login" target="_blank" rel="noopener noreferrer" 
               style="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; box-sizing: border-box; padding: 12px 14px; background: rgba(0, 136, 204, 0.12); border: 1px solid rgba(0, 136, 204, 0.3); color: #38bdf8; text-decoration: none; border-radius: 14px; font-size: 0.8rem; font-weight: 700; transition: all 0.2s; text-align: center;">
              <span>🤖</span>
              <span>هنوز رمز نگرفته‌اید؟ دریافت رمز از ربات تلگرام (@planex_sync_bot)</span>
            </a>
          </div>

          <div style="background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.07); padding: 11px 12px; border-radius: 14px; text-align: center; margin-top: 14px;">
            <span style="font-size: 0.72rem; color: #71717a; line-height: 1.6; display: block;">
              🔒 اطلاعات و اتاق‌های مطالعه شما منحصراً با شماره موبایل همگام و محافظت می‌شوند.
            </span>
          </div>
        `}

      </div>
    </div>
  `}typeof window<"u"&&(window.toggleLoginPasswordVisibility=()=>{const o=document.getElementById("input-login-password"),e=document.getElementById("btn-toggle-login-pwd");o&&(o.type==="password"?(o.type="text",e&&(e.textContent="🙈")):(o.type="password",e&&(e.textContent="👁️")))},window.handlePhoneLoginSubmit=async()=>{var d,s,l,c,y;const o=document.getElementById("input-login-phone"),e=document.getElementById("input-login-password"),t=document.getElementById("login-modal-error-box"),n=document.getElementById("btn-submit-phone-login");t&&(t.style.display="none");const a=((d=o==null?void 0:o.value)==null?void 0:d.trim())||"",i=Jo(a),r=((s=e==null?void 0:e.value)==null?void 0:s.trim())||"";if(!i||!r){t&&(t.textContent="لطفاً شماره موبایل و رمز عبور را وارد کنید.",t.style.display="block"),window.showToast&&window.showToast("لطفاً شماره موبایل و رمز عبور را وارد کنید.","warning");return}n&&(n.disabled=!0,n.innerHTML='<svg class="spin-sync" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> <span>در حال همگام‌سازی...</span>');try{const m=new AbortController,u=setTimeout(()=>m.abort(),3e3),b=await fetch(`${le}/api/sync.php`,{method:"POST",headers:{"Content-Type":"application/json"},signal:m.signal,body:JSON.stringify({action:"login",phone:i,password:r})}).finally(()=>clearTimeout(u)),g=await b.text();let f={};const x=b.headers.get("content-type")||"";try{x.includes("application/json")||g&&g.trim().startsWith("{")?f=JSON.parse(g):f={success:!1,message:"پاسخ سرور در دسترس نیست."}}catch{f={success:!1,message:"پاسخ دریافتی از سرور معتبر نیست."}}if(b.ok&&f.success&&f.user){f.backupData&&typeof window.personalSyncService<"u"&&typeof window.personalSyncService.importLocalState=="function"?window.personalSyncService.importLocalState(f.backupData):f.backupData&&window.db&&typeof window.db.importAllDataJSON=="function"&&window.db.importAllDataJSON(f.backupData);const w=f.user,A=w.id||w.telegram_id||w.uid||w.phone||i,k=((l=f.backupData)==null?void 0:l.planex_user_avatar)||(typeof((c=f.backupData)==null?void 0:c.planex_user_profile)=="object"?(y=f.backupData.planex_user_profile)==null?void 0:y.avatar:null),$=w.avatar_url||w.avatarUrl||w.photo_url||w.avatar,M=localStorage.getItem("planex_user_avatar");let I="";k&&!k.includes("dicebear.com")?I=k:$&&!$.includes("dicebear.com")?I=$:M&&!M.includes("dicebear.com")?I=M:I=$||M||`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`,I&&localStorage.setItem("planex_user_avatar",I);const D=w.name||w.full_name||"کاربر پلنکس",T={id:A,telegram_id:w.telegram_id||A,uid:A,user_id:A,phone:w.phone||i,phone_number:w.phone||i,name:D,full_name:D,avatar_url:I,avatarUrl:I,avatar:I,photo_url:I,auth_provider:"phone"};localStorage.setItem("planex_auth_user",JSON.stringify(T)),localStorage.setItem("planex_user_account",JSON.stringify(T)),f.token&&localStorage.setItem("planex_auth_token",f.token),D&&D!=="کاربر پلنکس"&&D!=="کاربر مهمان"&&(localStorage.setItem("planex_user_nickname",D),localStorage.setItem("planex_leaderboard_nickname",D)),Array.isArray(f.study_logs)&&f.study_logs.length>0?window.db&&typeof window.db.saveStudyLogs=="function"?window.db.saveStudyLogs(f.study_logs):(localStorage.setItem("planex_study_logs",JSON.stringify(f.study_logs)),localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(f.study_logs))):f.backupData&&Array.isArray(f.backupData.planex_recent_activity_sessions)&&f.backupData.planex_recent_activity_sessions.length>0&&(window.db&&typeof window.db.saveStudyLogs=="function"?window.db.saveStudyLogs(f.backupData.planex_recent_activity_sessions):localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(f.backupData.planex_recent_activity_sessions))),Array.isArray(f.rooms)&&f.rooms.length>0&&(localStorage.setItem("planex_my_groups",JSON.stringify(f.rooms)),localStorage.setItem("planex_my_rooms",JSON.stringify(f.rooms)),window.db&&typeof window.db.setUserGroups=="function"&&window.db.setUserGroups(f.rooms));try{const N=window.personalSyncService||Je;N&&typeof N.pullFromCloud=="function"&&await N.pullFromCloud(i)}catch(N){console.warn("[LoginModal] Error pulling from cloud post-login:",N)}try{const N=window.leaderboardService||S;N&&typeof N.fetchUserGroups=="function"?await N.fetchUserGroups(!0):typeof window.fetchUserGroups=="function"&&await window.fetchUserGroups()}catch(N){console.warn("[LoginModal] Error fetching user groups post-login:",N)}try{const N=window.db&&typeof window.db.getUserProfile=="function"?window.db.getUserProfile():JSON.parse(localStorage.getItem("planex_user_profile")||"{}");N.phone=i,D&&(N.name=D),I&&(N.avatar=I,N.avatar_url=I,N.photo=I,N.photoUrl=I),window.db&&typeof window.db.setUserProfile=="function"&&window.db.setUserProfile(N),localStorage.setItem("planex_user_profile",JSON.stringify(N))}catch{}if(window.db&&(window.db._breakdownMemoMap={}),typeof window.updateHeaderDOM=="function"&&window.updateHeaderDOM(),window.dispatchEvent(new CustomEvent("auth-changed",{detail:T})),window.dispatchEvent(new CustomEvent("profileUpdated")),window.dispatchEvent(new CustomEvent("study-logs-updated")),window.dispatchEvent(new CustomEvent("sessions-updated")),window.dispatchEvent(new CustomEvent("activity-saved",{detail:{sync:!0}})),window.closeActiveModal?window.closeActiveModal():window.appState&&(window.appState.activeModal=null),window.dashboardChartInstances&&(window.dashboardChartInstances=null),typeof window.updateCharts=="function")try{window.updateCharts()}catch{}typeof window.renderApp=="function"&&window.renderApp(),window.showToast&&window.showToast(`خوش آمدید ${w.name||"کاربر گرامی"}! ورود و همگام‌سازی با موفقیت انجام شد. 🎉`,"success",4e3)}else{const w=f.message||"شماره موبایل یا رمز عبور اشتباه است. در صورت فراموشی، به ربات @planex_sync_bot مراجعه کنید.";t&&(t.textContent=w,t.style.display="block"),window.showToast&&window.showToast(w,"error"),n&&(n.disabled=!1,n.innerHTML="<span>ورود به حساب و همگام‌سازی 🚀</span>")}}catch(m){console.error("[Phone Login Error]:",m);const u="خطا در برقراری ارتباط با سرور. لطفاً اتصال اینترنت خود را بررسی کنید.";t&&(t.textContent=u,t.style.display="block"),window.showToast&&window.showToast(u,"error"),n&&(n.disabled=!1,n.innerHTML="<span>ورود به حساب و همگام‌سازی 🚀</span>")}},window.handlePasswordLoginSubmit=window.handlePhoneLoginSubmit,window.handleEditProfile=()=>{try{if(typeof window.openEditProfileModal=="function"){window.openEditProfileModal();return}window.appState&&(window.appState.activeModal="editProfile",typeof window.renderApp=="function"&&window.renderApp())}catch(o){console.error("[LoginModal] handleEditProfile error:",o),window.appState&&(window.appState.activeModal="editProfile",typeof window.renderApp=="function"&&window.renderApp())}},window.openEditProfileModal=window.openEditProfileModal||window.handleEditProfile,window.handleUserLogout=()=>{try{["planex_auth_user","planex_user_account","planex_user_profile","planex_user_nickname","planex_user_avatar","planex_leaderboard_nickname","planex_my_groups","planex_my_rooms","planex_user_groups","my_rooms","planex_active_group_code","planex_active_room_code","planex_sync_token","planex_sync_token_secret"].forEach(t=>{try{localStorage.removeItem(t)}catch{}});const e=window.db||p;e&&(typeof e.setUserGroups=="function"&&e.setUserGroups([]),typeof e.setUserProfile=="function"&&e.setUserProfile({name:"کاربر مهمان",avatar:"",phone:""})),window.appState&&(window.appState.currentUser=null,window.appState.user=null,window.appState.userGroups=[],window.appState.activeModal=null),typeof window.closeActiveModal=="function"&&window.closeActiveModal(),window.dispatchEvent(new CustomEvent("auth-changed",{detail:null})),window.dispatchEvent(new CustomEvent("profileUpdated")),window.dispatchEvent(new CustomEvent("groups-changed")),window.dispatchEvent(new CustomEvent("groups-updated")),typeof window.renderApp=="function"&&window.renderApp(),typeof window.showToast=="function"&&window.showToast("با موفقیت از حساب کاربری خارج شدید.","info")}catch(o){console.error("[LoginModal] Logout error:",o),typeof window.closeActiveModal=="function"&&window.closeActiveModal(),typeof window.renderApp=="function"&&window.renderApp()}},window.handleAccountLogout=window.handleUserLogout,window.handleManualCloudPush=async()=>{const o=document.getElementById("btn-manual-cloud-push"),e=o?o.innerHTML:"";o&&(o.disabled=!0,o.innerHTML='<svg class="spin-sync" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> <span>در حال ذخیره...</span>'),typeof window.showToast=="function"&&window.showToast("در حال ذخیره اطلاعات روی سرور ابری...","info",2e3);try{const t=window.personalSyncService||Je;let n=null;t&&typeof t.pushToCloud=="function"&&(n=await t.pushToCloud());try{const a=window.leaderboardService||S;a&&typeof a.syncUserScore=="function"&&await a.syncUserScore(!0)}catch(a){console.warn("[LoginModal] Score sync during push:",a)}if(n&&n.success)typeof window.showToast=="function"?window.showToast("☁️ تمام اطلاعات و برنامه‌ها با موفقیت در فضای ابری ذخیره شدند! ✅","success",4e3):alert("☁️ تمام اطلاعات و برنامه‌ها با موفقیت در سرور ذخیره شدند.");else{const a=(n==null?void 0:n.message)||"خطا در ارتباط با سرور. لطفاً اتصال اینترنت یا فیلترشکن خود را بررسی کنید.";typeof window.showToast=="function"?window.showToast(a,"error",4e3):alert(a)}}catch(t){console.error("[LoginModal] Manual cloud push error:",t);const n="خطا در برقراری ارتباط با سرور. لطفاً فیلترشکن یا اینترنت خود را بررسی کنید: "+t.message;typeof window.showToast=="function"?window.showToast(n,"error",4e3):alert(n)}finally{o&&(o.disabled=!1,o.innerHTML=e||"<span>☁️⬆️</span><span>ذخیره در سرور</span>")}},window.handleManualCloudPull=async()=>{const o=document.getElementById("btn-manual-cloud-pull"),e=o?o.innerHTML:"";o&&(o.disabled=!0,o.innerHTML='<svg class="spin-sync" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> <span>در حال دریافت...</span>'),typeof window.showToast=="function"&&window.showToast("در حال دریافت آخرین نسخه از سرور...","info",2e3);try{const t=window.personalSyncService||Je;let n=null;t&&typeof t.pullFromCloud=="function"&&(n=await t.pullFromCloud(null,!0));try{const a=window.leaderboardService||S;a&&typeof a.fetchUserGroups=="function"&&await a.fetchUserGroups(!0)}catch(a){console.warn("[LoginModal] Groups refresh during pull:",a)}if(n&&n.success)typeof window.showToast=="function"?window.showToast("🎉 آخرین اطلاعات با موفقیت از سرور دریافت و جایگزین شد!","success",4e3):alert("🎉 آخرین اطلاعات با موفقیت از سرور دریافت و جایگزین شد!");else{const a=(n==null?void 0:n.message)||"اطلاعاتی در سرور یافت نشد یا خطا در ارتباط با سرور رخ داد. اتصال اینترنت یا فیلترشکن را بررسی کنید.";typeof window.showToast=="function"?window.showToast(a,"error",4e3):alert(a)}}catch(t){console.error("[LoginModal] Manual cloud pull error:",t);const n="خطا در بازیابی اطلاعات از سرور: لطفاً وضعیت اینترنت یا فیلترشکن را بررسی کنید: "+t.message;typeof window.showToast=="function"?window.showToast(n,"error",4e3):alert(n)}finally{o&&(o.disabled=!1,o.innerHTML=e||"<span>☁️⬇️</span><span>دریافت از سرور</span>"),typeof window.renderApp=="function"&&window.renderApp()}},window.triggerManualCloudSync=window.handleManualCloudPush,window.handleManualAccountSync=window.handleManualCloudPush,typeof document<"u"&&!window._loginModalDelegationBound&&(window._loginModalDelegationBound=!0,document.addEventListener("click",o=>{if(o.target&&o.target.closest&&o.target.closest("#btn-submit-phone-login, .btn-submit-phone-login")){o.preventDefault(),o.stopPropagation(),typeof window.handlePhoneLoginSubmit=="function"&&window.handlePhoneLoginSubmit();return}if(o.target&&o.target.closest&&o.target.closest("#btn-open-edit-profile-modal, .btn-open-edit-profile-modal")){o.preventDefault(),o.stopPropagation(),typeof window.handleEditProfile=="function"&&window.handleEditProfile();return}if(o.target&&o.target.closest&&o.target.closest("#btn-manual-cloud-push, .btn-manual-cloud-push")){o.preventDefault(),o.stopPropagation(),typeof window.handleManualCloudPush=="function"&&window.handleManualCloudPush();return}if(o.target&&o.target.closest&&o.target.closest("#btn-manual-cloud-pull, .btn-manual-cloud-pull")){o.preventDefault(),o.stopPropagation(),typeof window.handleManualCloudPull=="function"&&window.handleManualCloudPull();return}if(o.target&&o.target.closest&&o.target.closest("#btn-manual-account-sync, .btn-manual-account-sync")){o.preventDefault(),o.stopPropagation(),typeof window.handleManualCloudPush=="function"&&window.handleManualCloudPush();return}if(o.target&&o.target.closest&&o.target.closest("#btn-user-logout, .btn-user-logout")){o.preventDefault(),o.stopPropagation(),typeof window.handleUserLogout=="function"&&window.handleUserLogout();return}},!0)));function Go(o=!1){try{typeof localStorage<"u"&&localStorage.setItem("pwa_prompt_dismissed","true")}catch(e){console.error("Error saving pwa_prompt_dismissed to localStorage:",e)}if(o&&typeof window<"u"&&(window.deferredPrompt||window.deferredPwaPrompt))try{typeof window.triggerPwaInstall=="function"&&window.triggerPwaInstall()}catch{}typeof window<"u"&&(window.appState&&(window.appState.activeModal=null),typeof window.closeActiveModal=="function"?window.closeActiveModal():typeof window.renderApp=="function"&&window.renderApp())}typeof window<"u"&&(window.dismissPwaModal=Go);function hn(){if(typeof localStorage<"u"&&localStorage.getItem("pwa_prompt_dismissed"))return typeof window<"u"&&window.appState&&window.appState.activeModal==="pwaInstall"&&(window.appState.activeModal=null),"";const o=typeof navigator<"u"&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,e=typeof window<"u"&&!!(window.deferredPrompt||window.deferredPwaPrompt);return`
    <div class="modal-overlay" id="modal-pwa-install" style="backdrop-filter: blur(16px); z-index: 10000;" onclick="if(event.target === this || event.target.classList.contains('modal-overlay')){ if(window.dismissPwaModal) window.dismissPwaModal(false); }">
      <div class="modal-card" style="max-width: 440px; text-align: center; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d; border-radius: 18px; padding: 24px;" onclick="event.stopPropagation();">
        
        <!-- Icon Banner -->
        <div style="margin-bottom: 16px; display: flex; justify-content: center;">
          <img src="./logo-transparent.png" alt="PlanEx Logo" style="width: 86px; height: 86px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); object-fit: contain; background: #1f2029; padding: 4px;" />
        </div>

        <h3 style="font-size: 1.25rem; font-weight: 800; color: #e4e4e7; margin-bottom: 6px;">
          📲 نصب مستقیم وب‌اپلیکیشن PlanEx
        </h3>

        <p style="font-size: 0.88rem; color: var(--text-secondary); font-weight: bold; margin-bottom: 12px;">
          نصب سریع روی صفحه اصلی موبایل و دسکتاپ (PWA)
        </p>

        <p style="font-size: 0.82rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 18px; text-align: right; background: #1f2029; padding: 12px 16px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.06);">
          ✨ <b>مزایای نصب مستقیم:</b><br>
          • کارکرد آفلاین و بدون قطعی اینترنت<br>
          • بدون نیاز به دانلود از بازار یا گوگل‌پلی<br>
          • دسترسی پرسرعت و تمام صفحه با یک کلیک
        </p>

        ${o&&!e?`
          <div style="background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); padding: 14px; border-radius: 14px; font-size: 0.84rem; color: #e4e4e7; text-align: right; margin-bottom: 18px; line-height: 1.7;">
            <b>راهنمای نصب در آیفون / آیپد (iOS):</b><br>
            ۱. در مرورگر Safari، دکمه <b>Share (اشتراک‌گذاری ⎋)</b> را در پایین صفحه لمس کنید.<br>
            ۲. گزینه <b>Add to Home Screen (افزودن به صفحه اصلی ➕)</b> را انتخاب نمایید.<br>
            ۳. در گوشه بالا روی دکمه <b>Add</b> بزنید.
          </div>
        `:""}

        <div style="display: flex; flex-direction: column; gap: 10px;">
          <button id="btn-trigger-pwa-install" onclick="if(window.dismissPwaModal) { window.dismissPwaModal(${e?"true":"false"}); } else { try{localStorage.setItem('pwa_prompt_dismissed','true');}catch(_){} if(window.appState) window.appState.activeModal = null; if(window.closeActiveModal) window.closeActiveModal(); else if(window.renderApp) window.renderApp(); }" class="btn-primary" style="padding: 14px; font-size: 0.95rem; font-weight: bold; background: #7c3aed; box-shadow: none; cursor: pointer; border: none; border-radius: 14px; color: white;">
            📲 ${e?"نصب مستقیم برنامه (یک کلیک)":o?"متوجه شدم":"نصب مستقیم روی دستگاه"}
          </button>
          
          <button id="btn-close-pwa-modal" onclick="if(window.dismissPwaModal) { window.dismissPwaModal(false); } else { try{localStorage.setItem('pwa_prompt_dismissed','true');}catch(_){} if(window.appState) window.appState.activeModal = null; if(window.closeActiveModal) window.closeActiveModal(); else if(window.renderApp) window.renderApp(); }" class="btn-header-action" style="padding: 10px; font-size: 0.82rem; color: var(--text-muted); background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; cursor: pointer;">
            بعداً یادآوری کن ✕
          </button>
        </div>

      </div>
    </div>
  `}function vn(o=1,e={}){const t=[{value:"کنکوری ۱۴۰۵",label:"🎯 کنکوری ۱۴۰۵",desc:"آماده‌سازی برای کنکور سراسری"},{value:"کنکوری ۱۴۰۶",label:"🎯 کنکوری ۱۴۰۶",desc:"آماده‌سازی برای کنکور سراسری"},{value:"کنکوری ۱۴۰۷",label:"🎯 کنکوری ۱۴۰۷",desc:"آماده‌سازی برای کنکور سراسری"},{value:"دوازدهم",label:"📚 پایه دوازدهم",desc:"مدرسه و نهایی"},{value:"یازدهم",label:"📖 پایه یازدهم",desc:"مدرسه و کنکوری"},{value:"دهم",label:"📗 پایه دهم",desc:"مدرسه و تقویت پایه"},{value:"دانشجو",label:"🎓 دانشجوی دانشگاه",desc:"دانشگاهی و آزمون‌های ارشد/دکترا"},{value:"سایر",label:"🌟 سایر / مطالعه آزاد",desc:"یادگیری مهارت و برنامه‌ریزی شخصی"}],n=[{value:"علوم تجربی",label:"🧬 علوم تجربی"},{value:"ریاضی فیزیک",label:"📐 ریاضی و فیزیک"},{value:"علوم انسانی",label:"⚖️ علوم انسانی"},{value:"پزشکی و علوم پزشکی",label:"🩺 پزشکی / پیراپزشکی"},{value:"مهندسی و کامپیوتر",label:"💻 مهندسی و کامپیوتر"},{value:"هنر و معماری",label:"🎨 هنر و معماری"},{value:"زبان‌های خارجی",label:"🌐 زبان‌های خارجی"},{value:"سایر",label:"✨ سایر رشته‌ها"}];return`
    <div class="modal-overlay" id="modal-onboarding-wizard" style="backdrop-filter: blur(20px); z-index: 9999;">
      <div class="modal-card" style="max-width: 520px; background: rgba(15, 23, 42, 0.98); border: 1px solid rgba(129, 140, 248, 0.4); border-radius: 28px; padding: 28px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);" dir="rtl">
        
        <!-- Header & Progress Indicator -->
        <div style="text-align: center; margin-bottom: 24px;">
          <div style="display: inline-flex; items-center; justify-content: center; width: 56px; height: 56px; background: linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.2) 100%); border: 1px solid rgba(168,85,247,0.4); border-radius: 20px; font-size: 1.8rem; margin-bottom: 12px;">
            ${o===1?"🚀":o===2?"🎓":"👤"}
          </div>
          <h2 style="font-size: 1.35rem; font-weight: 800; color: #f8fafc; margin-bottom: 6px;">
            ${o===1?"خوش آمدید! مقطع تحصیلی خود را انتخاب کنید":o===2?"رشته و هدف شما چیست؟":"تکمیل ساخت پروفایل عمومی"}
          </h2>
          <p style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 16px;">
            گام ${o} از ۳ • این اطلاعات برای پیشنهاد اتاق‌های مطالعه همرشته‌ای‌ها استفاده می‌شود
          </p>
          <div style="font-size: 0.78rem; color: #fde68a; background: rgba(234, 179, 8, 0.12); border: 1px solid rgba(234, 179, 8, 0.35); border-radius: 12px; padding: 8px 12px; margin-bottom: 16px; line-height: 1.7;">
            💡 نکته برای همگام‌سازی پایدار: برای تبادل سریع‌تر داده‌ها با سرور ابری، لطفاً فیلترشکن (VPN) خود را خاموش کنید.
          </div>

          <!-- Step Progress Bar -->
          <div style="display: flex; gap: 8px; justify-content: center;">
            <div style="height: 5px; flex: 1; border-radius: 4px; background: ${o>=1?"linear-gradient(90deg, #6366f1, #a855f7)":"rgba(255,255,255,0.1)"}; transition: all 0.3s;"></div>
            <div style="height: 5px; flex: 1; border-radius: 4px; background: ${o>=2?"linear-gradient(90deg, #6366f1, #a855f7)":"rgba(255,255,255,0.1)"}; transition: all 0.3s;"></div>
            <div style="height: 5px; flex: 1; border-radius: 4px; background: ${o>=3?"linear-gradient(90deg, #6366f1, #a855f7)":"rgba(255,255,255,0.1)"}; transition: all 0.3s;"></div>
          </div>
        </div>

        <!-- Wizard Step Content -->
        ${o===1?`
          <!-- STEP 1: Education Level -->
          <div style="display: grid; gap: 10px; margin-bottom: 24px;">
            ${t.map(a=>`
              <div class="onboarding-opt-card ${e.education_level===a.value?"selected":""}" 
                   data-value="${a.value}"
                   style="padding: 14px 18px; background: rgba(30, 41, 59, 0.7); border: 1.5px solid ${e.education_level===a.value?"#a855f7":"rgba(255,255,255,0.08)"}; border-radius: 16px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <div style="font-weight: 700; font-size: 0.98rem; color: #f1f5f9;">${a.label}</div>
                  <div style="font-size: 0.78rem; color: #64748b;">${a.desc}</div>
                </div>
                <div style="width: 20px; height: 20px; border-radius: 50%; border: 2px solid ${e.education_level===a.value?"#a855f7":"#475569"}; background: ${e.education_level===a.value?"#a855f7":"transparent"};"></div>
              </div>
            `).join("")}
          </div>
        `:o===2?`
          <!-- STEP 2: Major & University -->
          <div style="margin-bottom: 20px;">
            <label style="display: block; font-weight: 700; font-size: 0.9rem; color: #e2e8f0; margin-bottom: 8px;">انتخاب رشته تحصیلی:</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px;">
              ${n.map(a=>`
                <div class="onboarding-major-card ${e.major===a.value?"selected":""}" 
                     data-value="${a.value}"
                     style="padding: 12px 14px; background: rgba(30, 41, 59, 0.7); border: 1.5px solid ${e.major===a.value?"#a855f7":"rgba(255,255,255,0.08)"}; border-radius: 14px; cursor: pointer; text-align: center; font-size: 0.9rem; font-weight: 600; color: #f1f5f9; transition: all 0.2s;">
                  ${a.label}
                </div>
              `).join("")}
            </div>

            <label style="display: block; font-weight: 700; font-size: 0.9rem; color: #e2e8f0; margin-bottom: 6px;">نام مدرسه یا دانشگاه (اختیاری):</label>
            <input type="text" id="onboarding-input-uni" class="form-input" placeholder="مثلاً: دانشگاه تهران یا دبیرستان فرزانگان" value="${e.university||""}" style="width: 100%; padding: 12px 16px; border-radius: 14px; background: rgba(15,23,42,0.8); border: 1px solid rgba(255,255,255,0.15); color: white; font-size: 0.9rem;" />
          </div>
        `:`
          <!-- STEP 3: Age, Gender & Username -->
          <div style="margin-bottom: 24px;">
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-weight: 700; font-size: 0.9rem; color: #e2e8f0; margin-bottom: 6px;">شناسه عمومی در پلنکس (آدرس پروفایل):</label>
              <div style="position: relative;">
                <span style="position: absolute; left: 14px; top: 12px; font-family: 'Outfit'; color: #818cf8; font-size: 0.88rem; dir: ltr;">planexapp.ir/u/</span>
                <input type="text" id="onboarding-input-username" class="form-input" placeholder="my_username" value="${e.username||""}" style="width: 100%; padding: 12px 16px 12px 140px; border-radius: 14px; background: rgba(15,23,42,0.8); border: 1px solid rgba(129, 140, 248, 0.5); color: white; font-size: 0.95rem; font-family: 'Outfit';" dir="ltr" maxLength="20" />
              </div>
              <span style="font-size: 0.78rem; color: #94a3b8; display: block; margin-top: 4px;">شامل حروف انگلیسی، اعداد و خط زیر (_)</span>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 16px;">
              <div>
                <label style="display: block; font-weight: 700; font-size: 0.88rem; color: #e2e8f0; margin-bottom: 6px;">رده سنی:</label>
                <select id="onboarding-select-age" class="form-input" style="width: 100%; padding: 12px; border-radius: 14px; background: rgba(30,41,59,0.9); border: 1px solid rgba(255,255,255,0.15); color: white;">
                  <option value="زیر ۱۵ سال" ${e.age_group==="زیر ۱۵ سال"?"selected":""}>زیر ۱۵ سال</option>
                  <option value="۱۵ تا ۱۸ سال" ${e.age_group==="۱۵ تا ۱۸ سال"||!e.age_group?"selected":""}>۱۵ تا ۱۸ سال (مدرسه/کنکور)</option>
                  <option value="۱۹ تا ۲۴ سال" ${e.age_group==="۱۹ تا ۲۴ سال"?"selected":""}>۱۹ تا ۲۴ سال (دانشجو)</option>
                  <option value="۲۵ سال به بالا" ${e.age_group==="۲۵ سال به بالا"?"selected":""}>۲۵ سال به بالا</option>
                </select>
              </div>

              <div>
                <label style="display: block; font-weight: 700; font-size: 0.88rem; color: #e2e8f0; margin-bottom: 6px;">جنسیت:</label>
                <select id="onboarding-select-gender" class="form-input" style="width: 100%; padding: 12px; border-radius: 14px; background: rgba(30,41,59,0.9); border: 1px solid rgba(255,255,255,0.15); color: white;">
                  <option value="پسر" ${e.gender==="پسر"?"selected":""}>پسر</option>
                  <option value="دختر" ${e.gender==="دختر"?"selected":""}>دختر</option>
                  <option value="ترجیح می‌دهم بگویم" ${e.gender==="ترجیح می‌دهم بگویم"?"selected":""}>سایر</option>
                </select>
              </div>
            </div>
          </div>
        `}

        <!-- Footer Actions -->
        <div style="display: flex; gap: 12px; align-items: center;">
          ${o>1?`
            <button id="btn-onboarding-prev" class="glass-panel" style="padding: 12px 20px; border-radius: 14px; color: #cbd5e1; font-weight: 600; cursor: pointer;">
              ← بازگشت
            </button>
          `:""}
          <button id="btn-onboarding-next" class="btn-primary" style="flex: 1; padding: 14px; border-radius: 14px; font-weight: 800; font-size: 1rem; background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%); border: none; cursor: pointer; box-shadow: 0 10px 20px -5px rgba(168,85,247,0.4);">
            ${o===3?"🎉 ورود به برنامه‌ریزی و استفاده از اپلیکیشن":"مرحله بعدی →"}
          </button>
        </div>

        <div style="margin-top: 16px; text-align: center; font-size: 0.78rem; color: #64748b;">
          🛡️ اطلاعات شما به صورت کاملاً امن نگهداری می‌شود و صرفاً جهت شبکه مسئولیت‌پذیری استفاده می‌شود.
        </div>

      </div>
    </div>
  `}function Sn(o){if(!o)return"";const{full_name:e,avatar_url:t,created_at:n,total_focus_minutes:a,routines:i,username:r,field_of_study:d}=o,s=new Date(n).toLocaleDateString("fa-IR",{year:"numeric",month:"long"}),l=Math.floor((a||0)/60),c=e||r||"کاربر پلنکس",y=r?`@${r}`:"",m=d?`<div style="font-size: 0.75rem; color: #a855f7; background: rgba(168,85,247,0.15); padding: 3px 10px; border-radius: 12px; display: inline-block; margin-top: 6px; font-weight: 500;">🎓 ${d}</div>`:"";let u=null;if(o.social_links)try{u=typeof o.social_links=="string"?JSON.parse(o.social_links):o.social_links}catch{}const b=u?`
    <div style="display: flex; gap: 12px; justify-content: center; margin-top: 12px;">
      ${u.telegram?`<a href="https://t.me/${u.telegram.replace("@","")}" target="_blank" style="text-decoration: none; font-size: 1.3rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" title="تلگرام">✈️</a>`:""}
      ${u.instagram?`<a href="https://instagram.com/${u.instagram.replace("@","")}" target="_blank" style="text-decoration: none; font-size: 1.3rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" title="اینستاگرام">📸</a>`:""}
      ${u.linkedin?`<a href="${u.linkedin.startsWith("http")?u.linkedin:"https://"+u.linkedin}" target="_blank" style="text-decoration: none; font-size: 1.3rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" title="لینکدین / گیت‌هاب">💼</a>`:""}
      ${u.website?`<a href="${u.website.startsWith("http")?u.website:"https://"+u.website}" target="_blank" style="text-decoration: none; font-size: 1.3rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" title="وب‌سایت">🌐</a>`:""}
    </div>
  `:"";return`
    <div class="modal-overlay" style="display: flex;">
      <div class="modal-content" style="max-width: 500px; padding: 0; overflow: hidden; background: #1a1a2e; border: 1px solid rgba(255,255,255,0.1);">
        
        <!-- Header / Banner -->
        <div style="background: linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(59, 130, 246, 0.2)); padding: 30px 20px 20px; position: relative; text-align: center;">
          <button id="btn-close-public-profile" class="btn-icon" style="position: absolute; top: 15px; left: 15px; background: rgba(0,0,0,0.3); border-radius: 50%;">✖</button>
          
          <img src="${t||"https://api.dicebear.com/7.x/avataaars/svg?seed="+e}" 
               style="width: 80px; height: 80px; border-radius: 50%; border: 3px solid #10b981; object-fit: cover; margin-bottom: 10px; box-shadow: 0 4px 15px rgba(0,0,0,0.3);" />
          
          <h2 style="margin: 0 0 5px 0; color: white; font-size: 1.4rem;">${c}</h2>
          ${y?`<div style="font-size: 0.9rem; color: rgba(255,255,255,0.5); margin-bottom: 5px;">${y}</div>`:""}
          ${m}
          <div style="font-size: 0.8rem; color: rgba(255,255,255,0.7); margin-top: 6px;">عضویت از: ${s}</div>
          ${b}
        </div>

        <!-- Stats -->
        <div style="display: flex; border-bottom: 1px solid rgba(255,255,255,0.05); background: rgba(0,0,0,0.2);">
          <div style="flex: 1; text-align: center; padding: 15px;">
            <div style="font-size: 1.2rem; color: #10b981; font-weight: bold; margin-bottom: 4px;">${l}h</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary);">کل ساعت تمرکز</div>
          </div>
          <div style="width: 1px; background: rgba(255,255,255,0.05);"></div>
          <div style="flex: 1; text-align: center; padding: 15px;">
            <div style="font-size: 1.2rem; color: #3b82f6; font-weight: bold; margin-bottom: 4px;">${i?i.length:0}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary);">روتین عمومی</div>
          </div>
        </div>

        <!-- Routines List -->
        <div style="padding: 20px; max-height: 400px; overflow-y: auto;">
          <h3 style="font-size: 1rem; color: white; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
            📋 روتین‌های به اشتراک‌گذاشته‌شده
          </h3>
          
          ${!i||i.length===0?'<div style="text-align: center; color: var(--text-secondary); padding: 20px 0; font-size: 0.9rem;">این کاربر هنوز روتین عمومی نساخته است.</div>':i.map(g=>`
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 15px; margin-bottom: 12px; transition: 0.2s;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                  <div>
                    <div style="font-size: 1rem; color: #60a5fa; font-weight: bold; margin-bottom: 4px;">${g.title}</div>
                    ${g.description?`<div style="font-size: 0.8rem; color: rgba(255,255,255,0.6);">${g.description}</div>`:""}
                  </div>
                  <button onclick="window.copyPublicRoutine('${g.id}')" class="btn-primary" style="padding: 6px 12px; font-size: 0.8rem; white-space: nowrap; border-radius: 8px;">➕ کپی روتین</button>
                </div>
                
                <div style="margin-top: 10px; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px;">
                  <div style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 6px;">آیتم‌های روتین:</div>
                  ${g.items&&g.items.length>0?`<ul style="margin: 0; padding-right: 20px; font-size: 0.8rem; color: #d1d5db; display: flex; flex-direction: column; gap: 4px;">
                      ${g.items.map(f=>`
                        <li>${f.title} <span style="color: #10b981;">(${f.duration_minutes||0} دقیقه)</span></li>
                      `).join("")}
                    </ul>`:'<div style="font-size: 0.75rem; color: rgba(255,255,255,0.3);">بدون آیتم</div>'}
                </div>
              </div>
            `).join("")}
        </div>
      </div>
    </div>
  `}function kn(o,e){const t=p.getCurrentWeek(),n=t?t.id:1,a=p.getHourlyLogs(n),i=`${o}_${e}`,r=a[i]||{},d=p.getCategories(),s={};d.forEach(g=>{s[g.code]=g});const l=p.getCustomSubjects(),c=["زیست‌شناسی","ریاضیات","فیزیک","شیمی","ادبیات","زبان انگلیسی","دین و زندگی","زمین‌شناسی"],y=Array.from(new Set([...c,...l])),m=["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه"],u=s[r.categoryCode],b=u?Oe(u):!0;return`
    <div class="modal-overlay" id="modal-slot-picker" style="backdrop-filter: blur(16px);">
      <div class="modal-card" style="max-width: 580px; max-height: 90vh; overflow-y: auto; background: rgba(15, 23, 42, 0.95); border-color: rgba(99, 102, 241, 0.4);">
        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px;">
          <div>
            <div class="modal-title" style="color: var(--primary-accent); display: flex; align-items: center; gap: 8px;">
              ⏱️ تخصیص فعالیت: پارت ${e+1} (${_o(e)})
            </div>
            <span style="font-size: 0.8rem; color: var(--text-secondary);">${m[o]} - انتخاب فعالیت نیم ساعته</span>
          </div>
          <button class="btn-close" id="btn-close-slot-modal">✕</button>
        </div>

        <!-- 1. Category Picker Grid -->
        <label class="input-label" style="margin-top: 12px; margin-bottom: 8px; display: block; font-weight: bold; color: white;">
          ۱. انتخاب دسته‌بندی فعالیت:
        </label>
        <div class="category-picker-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-bottom: 16px;">
          ${d.map(g=>`
            <button class="cat-pick-btn ${r.categoryCode===g.code?"selected":""}" data-code="${g.code}" data-group="${g.group}" style="display: flex; align-items: center; gap: 8px; padding: 10px 12px; border-radius: 12px; background: rgba(255,255,255,0.05); border: 1.5px solid ${r.categoryCode===g.code?g.color:"rgba(255,255,255,0.1)"}; border-right: 4px solid ${g.color}; cursor: pointer; text-align: right; color: white;">
              <span style="width: 10px; height: 10px; border-radius: 50%; background: ${g.color}; box-shadow: 0 0 6px ${g.color}80; flex-shrink: 0;"></span>
              <span style="font-size: 1.2rem;">${g.icon||"📌"}</span>
              <div style="flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                <div style="font-size: 0.85rem; font-weight: bold; color: ${g.color};">${g.title}</div>
                <div style="font-size: 0.7rem; color: var(--text-secondary);">${g.group} (${g.code})</div>
              </div>
            </button>
          `).join("")}
          <button class="cat-pick-btn ${r.categoryCode==="-"?"selected":""}" data-code="-" data-group="خالی" style="grid-column: span 2; padding: 10px; border-radius: 12px; background: rgba(239,68,68,0.1); border: 1.5px solid rgba(239,68,68,0.3); color: #fca5a5; cursor: pointer; text-align: center; font-size: 0.85rem;">
            🚫 پاک کردن پارت (خالی)
          </button>
        </div>

        <!-- 2. Academic Study Specific Fields (Visible ONLY when Study/Academic Category selected) -->
        <div id="academic-fields-wrapper" style="display: ${b?"block":"none"}; background: rgba(255,255,255,0.03); border: 1px solid rgba(56, 189, 248, 0.3); padding: 14px; border-radius: 16px; margin-bottom: 14px;">
          <div style="font-weight: bold; font-size: 0.9rem; color: #38bdf8; margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
            📚 جزئیات درس، تست و روش مطالعه (مخصوص فعالیت علمی):
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px;">
            <div>
              <label class="input-label" style="margin-bottom: 4px; display: block; color: white;">نام درس (Subject):</label>
              <select id="slot-subject-select" class="form-input" style="width: 100%;">
                <option value="">-- انتخاب درس --</option>
                ${y.map(g=>`
                  <option value="${g}" ${r.subject===g?"selected":""}>${g}</option>
                `).join("")}
              </select>
            </div>

            <div>
              <label class="input-label" style="margin-bottom: 4px; display: block; color: white;">تعداد تست حل‌شده:</label>
              <input type="number" id="slot-test-count-input" class="form-input" style="width: 100%; text-align: center; font-family: 'Outfit';" value="${r.testCount||""}" placeholder="مثلا ۲۰" min="0" />
            </div>
          </div>

          <div style="margin-bottom: 10px;">
            <label class="input-label" style="margin-bottom: 4px; display: block; color: white;">روش مطالعه / نوع کار:</label>
            <div style="display: flex; gap: 8px;">
              ${["تستی 📝","تشریحی 📖","ترکیبی 🔄","مرور 🔁"].map(g=>`
                <button class="btn-slot-method ${r.studyMethod===g?"active btn-primary":"glass-panel"}" data-method="${g}" style="flex: 1; padding: 6px 4px; font-size: 0.75rem; border: none; cursor: pointer;">
                  ${g}
                </button>
              `).join("")}
            </div>
          </div>
        </div>

        <!-- 3. Short Note & Description -->
        <div class="input-group" style="margin-bottom: 10px;">
          <label class="input-label" style="color: white; font-weight: bold;">توضیحات و مبحث این پارت (Description):</label>
          <input type="text" id="slot-desc-input" class="form-input" value="${r.description||r.note||""}" placeholder="مثلا: فصل ۲ گفتار ۳ - مبحث گوارش و جذب مواد" />
        </div>

        <!-- 4. Performance Rating (1 to 5 Stars) -->
        <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.03); padding: 10px 14px; border-radius: 12px; margin-bottom: 16px;">
          <span style="font-size: 0.85rem; color: var(--text-secondary); font-weight: bold;">کیفیت و بازدهی پارت:</span>
          <div id="slot-rating-wrapper" data-rating="${r.rating||3}" style="display: flex; gap: 6px; font-size: 1.3rem;">
            ${[1,2,3,4,5].map(g=>`
              <span class="star-rating-btn" data-star="${g}" style="cursor: pointer; opacity: ${(r.rating||3)>=g?"1":"0.3"};">⭐</span>
            `).join("")}
          </div>
        </div>

        <!-- Actions -->
        <div style="display: flex; gap: 10px;">
          <button id="btn-save-slot" class="btn-primary" style="flex: 2; padding: 12px; font-size: 1rem; font-weight: bold; background: linear-gradient(135deg, #10b981 0%, #059669 100%);">
            💾 ذخیره قطعی فعالیت پارت
          </button>
          <button id="btn-clear-slot" class="glass-panel" style="flex: 1; padding: 12px; color: #ef4444; border-color: rgba(239,68,68,0.3); cursor: pointer;">
            🗑️ پاک کردن
          </button>
        </div>
      </div>
    </div>
  `}function _n(){const o=p.getCurrentWeek(),e=r=>String(r).replace(/[0-9]/g,d=>"۰۱۲۳۴۵۶۷۸۹"[d]),t=[1404,1405,1406,1407],n=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],a=window.pickerViewYear||o.year,i=window.pickerViewMonthIdx||o.monthIdx;return`
    <div class="modal-overlay" id="modal-week-picker" style="backdrop-filter: blur(16px); z-index: 10000;">
      <div class="modal-card" style="max-width: 520px; border-color: rgba(99, 102, 241, 0.5); background: rgba(15, 23, 42, 0.98); border-radius: 24px; padding: 24px;">
        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px; margin-bottom: 16px;">
          <div class="modal-title" style="color: #38bdf8; display: flex; align-items: center; gap: 8px; font-weight: 800;">
            📅 انتخاب و پیمایش سال، ماه و هفته
          </div>
          <button class="btn-close" id="btn-close-week-modal">✕</button>
        </div>

        <!-- 1. Year Selector -->
        <div style="margin-bottom: 16px;">
          <label style="font-size: 0.85rem; font-weight: bold; color: var(--text-secondary); display: block; margin-bottom: 8px;">
            ۱. انتخاب سال شمسی:
          </label>
          <div style="display: flex; gap: 8px;">
            ${t.map(r=>`
              <button class="btn-picker-year btn-header-action ${a===r?"btn-primary":""}" data-year="${r}" style="flex: 1; padding: 8px; font-size: 0.9rem; font-weight: bold; border-radius: 12px;">
                ${e(r)}
              </button>
            `).join("")}
          </div>
        </div>

        <!-- 2. Month Selector -->
        <div style="margin-bottom: 18px;">
          <label style="font-size: 0.85rem; font-weight: bold; color: var(--text-secondary); display: block; margin-bottom: 8px;">
            ۲. انتخاب ماه:
          </label>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;">
            ${n.map((r,d)=>{const s=d+1;return`
                <button class="btn-picker-month btn-header-action ${i===s?"btn-primary":""}" data-month="${s}" style="padding: 8px 4px; font-size: 0.82rem; font-weight: bold; border-radius: 10px; text-align: center;">
                  ${r}
                </button>
              `}).join("")}
          </div>
        </div>

        <!-- 3. Week Selector for Selected Month -->
        <div style="margin-bottom: 20px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 14px;">
          <label style="font-size: 0.85rem; font-weight: bold; color: #38bdf8; display: block; margin-bottom: 10px;">
            ۳. انتخاب هفته در ${n[i-1]} ${e(a)}:
          </label>

          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${Array.from({length:p.getWeeksInMonth(a,i)},(r,d)=>d+1).map(r=>{const d=`${a}_${i}_${r}`,s=p.getWeekObject(a,i,r),l=o.id===d,c=p.hasDataForWeek(d);return`
                <div style="display: flex; align-items: center; justify-content: space-between; background: ${l?"rgba(99,102,241,0.25)":"rgba(255,255,255,0.04)"}; border: 1.5px solid ${l?"#6366f1":"rgba(255,255,255,0.08)"}; border-radius: 14px; padding: 10px 14px;">
                  <div>
                    <strong style="font-size: 0.92rem; display: block; color: ${l?"#38bdf8":"white"};">
                      ${s.weekNumber} (${s.dateRange})
                    </strong>
                    <span style="font-size: 0.78rem; color: var(--text-secondary);">
                      ${s.status==="future"?"⏳ هنوز شروع نشده است":c?"✅ دارای فعالیت ثبت‌شده":"📌 بدون فعالیت ثبت‌شده"}
                    </span>
                  </div>

                  <button class="btn-select-week-key btn-primary" data-key="${d}" style="font-size: 0.82rem; padding: 6px 14px; background: ${l?"#10b981":"var(--primary-accent)"};">
                    ${l?"✓ هفته فعال":"انتخاب"}
                  </button>
                </div>
              `}).join("")}
          </div>
        </div>

        <!-- Reset Button -->
        <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 14px;">
          <button id="btn-reset-to-today-week" class="btn-header-action" style="padding: 8px 16px; font-weight: bold; border-color: #10b981; color: #10b981;">
            🔄 بازگشت به هفته جاری (امروز)
          </button>
          
          <button class="btn-close" id="btn-close-week-modal-bottom" style="padding: 8px 16px; font-size: 0.82rem; background: none; border: none; color: var(--text-muted); cursor: pointer;">
            بستن ✕
          </button>
        </div>

      </div>
    </div>
  `}function Zt(o,e={},t=3e3){const n=new AbortController,a=setTimeout(()=>n.abort(),t);return fetch(o,{...e,signal:n.signal}).finally(()=>clearTimeout(a))}window.handleEditRoomAnnouncement||(window.handleEditRoomAnnouncement=o=>{var n,a;const e=localStorage.getItem("planex_room_announcement_"+o)||((a=(n=window.appState)==null?void 0:n.currentRoom)==null?void 0:a.announcement)||"",t=prompt("📢 پیام مدیریت / متن انگیزشی سالن مطالعه را وارد نمایید:",e);if(t!==null){const i=t.trim();localStorage.setItem("planex_room_announcement_"+o,i),window.appState&&window.appState.currentRoom&&(window.appState.currentRoom.announcement=i),typeof window.renderApp=="function"&&window.renderApp()}});window.handleJoinRoomClick||(window.handleJoinRoomClick=(o,e)=>{const t=p&&typeof p.getProfile=="function"?p.getProfile():{};if((!t.major||!t.target)&&window.appState){window.appState.pendingJoinRoom={id:o,name:e},window.appState.activeModal="joinRoomOnboarding",typeof window.renderApp=="function"&&window.renderApp();return}let n=[];try{n=JSON.parse(localStorage.getItem("planex_my_groups")||"[]")}catch{n=[]}n.some(d=>String(d.id)===String(o))||(n.push({id:o,name:e,emoji:"👥"}),localStorage.setItem("planex_my_groups",JSON.stringify(n)));const a=JSON.parse(localStorage.getItem("planex_user_account")||"{}"),i=a.id||"me_"+Date.now();window.appState&&Array.isArray(window.appState.studyRoomParticipants)&&(window.appState.studyRoomParticipants.some(s=>String(s.id)===String(i))||window.appState.studyRoomParticipants.unshift({id:i,name:t.name||a.full_name||"شما (عضو فعال)",avatar:a.avatar_url||"",gender:t.gender||"پسر",major:t.major||t.field_of_study||"تجربی",target:t.target||t.goal||"کسب رتبه برتر",status:"active",is_studying:!0,focus_minutes:0,today_study_time:0,last_2h_study:120,last_2h_subject:"آماده مطالعه"}));const r=localStorage.getItem("planex_jwt_token");r&&r!=="undefined"&&r!=="null"&&Zt(`${le}/api/rooms/join.php`,{method:"POST",headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"},body:JSON.stringify({roomId:o,room_id:o})}).catch(d=>console.warn("Room join API sync:",d)),alert(`👥 شما با موفقیت عضو سالن "${e}" شدید!`),typeof window.renderApp=="function"&&window.renderApp()});window.handleLeaveRoomClick||(window.handleLeaveRoomClick=(o,e)=>{let t=[];try{t=JSON.parse(localStorage.getItem("planex_my_groups")||"[]")}catch{t=[]}t=t.filter(r=>String(r.id)!==String(o)),localStorage.setItem("planex_my_groups",JSON.stringify(t));const a=JSON.parse(localStorage.getItem("planex_user_account")||"{}").id;window.appState&&Array.isArray(window.appState.studyRoomParticipants)&&(window.appState.studyRoomParticipants=window.appState.studyRoomParticipants.filter(r=>String(r.id)!==String(a)));const i=localStorage.getItem("planex_jwt_token");i&&i!=="undefined"&&i!=="null"&&Zt(`${le}/api/rooms/leave.php`,{method:"POST",headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"},body:JSON.stringify({roomId:o,room_id:o})}).catch(r=>console.warn("Room leave API sync:",r)),alert(`🚪 شما از سالن "${e}" خارج شدید.`),typeof window.renderApp=="function"&&window.renderApp()});function $n(o,e,t=[],n=!1,a=null,i=null){var g,f;let r=Array.isArray(t)?[...t]:[],d=e;try{const w=JSON.parse(localStorage.getItem("planex_public_rooms")||"[]").find($=>String($.id)===String(o)||String($.code)===String(o));w&&(w.name||w.title||w.roomName)&&(d=w.name||w.title||w.roomName);const k=JSON.parse(localStorage.getItem("planex_my_groups")||"[]").find($=>String($.id)===String(o)||String($.code)===String(o));k&&(k.name||k.title||k.roomName)&&(d=k.name||k.title||k.roomName)}catch{}if((!d||d===o)&&(d=o?`سالن ${o}`:"سالن مطالعه پلن ما"),r.length===0)try{const x=JSON.parse(localStorage.getItem("planex_cached_room_"+o)||"[]");Array.isArray(x)&&x.length>0&&(r=x)}catch{}const s=JSON.parse(localStorage.getItem("planex_user_account")||"{}"),l=p&&typeof p.getProfile=="function"?p.getProfile():JSON.parse(localStorage.getItem("planex_profile")||"{}"),c=i||s.id||"me";r.findIndex(x=>String(x.id)===String(c)||x.id==="me")===-1&&r.unshift({id:c,name:l.name||s.full_name||"شما (عضو فعال)",avatar:s.avatar_url||"",gender:l.gender||"پسر",major:l.major||l.field_of_study||"تجربی",target:l.target||l.goal||"کسب رتبه برتر",status:"active",is_studying:!0,focus_minutes:0,today_study_time:0,last_2h_study:120,last_2h_subject:"مطالعه عمومی"}),r.length<4&&[{id:"p_1",name:"علی محمدی",major:"تجربی",target:"پزشکی تهران",gender:"پسر",role:"member",status:"active",today_study_time:360,today_test_count:140,last_2h_subject:"زیست‌شناسی"},{id:"p_2",name:"سارا احمدی",major:"ریاضی",target:"مهندسی شریف",gender:"دختر",role:"admin",status:"active",today_study_time:420,today_test_count:180,last_2h_subject:"حسابان"},{id:"p_3",name:"امیر کاظمی",major:"تجربی",target:"دندانپزشکی",gender:"پسر",role:"member",status:"active",today_study_time:270,today_test_count:90,last_2h_subject:"شیمی پایه"},{id:"p_4",name:"مریم حسینی",major:"انسانی",target:"حقوق تهران",gender:"دختر",role:"member",status:"active",today_study_time:310,today_test_count:110,last_2h_subject:"فلسفه و منطق"}].forEach(w=>{r.some(A=>String(A.id)===String(w.id))||r.push(w)});let m="";try{m=localStorage.getItem("planex_room_announcement_"+o)||((f=(g=window.appState)==null?void 0:g.currentRoom)==null?void 0:f.announcement)||""}catch{}let u=[];try{u=JSON.parse(localStorage.getItem("planex_my_groups")||"[]")}catch{u=[]}const b=u.some(x=>String(x.id)===String(o));return`
    <div class="modal-overlay" style="display: flex; backdrop-filter: blur(20px);" onclick="if(event.target === this || event.target.classList.contains('modal-overlay')){ window.closeActiveModal(); }">
      <div class="modal-content" onclick="event.stopPropagation();" style="max-width: 580px; padding: 22px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 24px; text-align: right; direction: rtl;">
        
        <!-- Group Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 12px;">
          <div>
            <h2 style="margin: 0; color: #f8fafc; font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
              <span>👥</span>
              <span>${d}</span>
            </h2>
            <span style="font-size: 0.72rem; color: #8e8e9c; margin-top: 2px; display: block;">سالن مطالعه گروهی و پایش زنده عملکرد داوطلبان</span>
          </div>
          <button type="button" id="btn-close-study-room" aria-label="بستن" onclick="window.closeActiveModal();" class="btn-close">✕</button>
        </div>

        <!-- 📢 Admin Motivational Announcement Banner (Feature 4) -->
        ${m?`
          <div style="background: rgba(124, 58, 237, 0.08); border: 1px solid rgba(124, 58, 237, 0.25); border-radius: 16px; padding: 12px 14px; margin-bottom: 14px; display: flex; align-items: flex-start; justify-content: space-between; gap: 10px;">
            <div style="display: flex; align-items: flex-start; gap: 8px; flex: 1;">
              <span style="font-size: 1.2rem; line-height: 1;">📌</span>
              <div>
                <div style="font-size: 0.74rem; font-weight: 800; color: #c4b5fd; margin-bottom: 3px;">پیام مدیریت سالن / متن انگیزشی:</div>
                <div style="font-size: 0.8rem; color: #f1f5f9; line-height: 1.5; font-weight: 500;">${m}</div>
              </div>
            </div>
            ${n||b?`
              <button type="button" onclick="event.stopPropagation(); window.handleEditRoomAnnouncement('${o}')" title="ویرایش پیام مدیر" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); color: #c4b5fd; padding: 4px 8px; border-radius: 8px; font-size: 0.68rem; font-weight: 700; cursor: pointer; white-space: nowrap; flex-shrink: 0;">
                ✏️ ویرایش
              </button>
            `:""}
          </div>
        `:n||b?`
          <div style="margin-bottom: 14px; display: flex; justify-content: flex-end;">
            <button type="button" onclick="event.stopPropagation(); window.handleEditRoomAnnouncement('${o}')" style="background: rgba(255,255,255,0.03); border: 1px dashed rgba(124,58,237,0.3); color: #c4b5fd; padding: 6px 12px; border-radius: 10px; font-size: 0.72rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 4px;">
              <span>📢</span>
              <span>ثبت پیام انگیزشی / اطلاعیه مدیر</span>
            </button>
          </div>
        `:""}

        <!-- Join & Leave Group Action Button -->
        <div style="margin-bottom: 14px;">
          ${b?`
            <button type="button" onclick="event.stopPropagation(); window.handleLeaveRoomClick('${o}', '${d}')" class="btn-primary" style="width: 100%; padding: 12px; font-size: 0.92rem; font-weight: 800; background: #ef4444; border: none; border-radius: 14px; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
              <span>🚪 ترک سالن (خروج از لیست اعضا)</span>
            </button>
          `:`
            <button type="button" onclick="event.stopPropagation(); window.handleJoinRoomClick('${o}', '${d}')" class="btn-primary" style="width: 100%; padding: 12px; font-size: 0.95rem; font-weight: 800; background: #7c3aed; border: none; border-radius: 14px; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
              <span>➕ پیوستن به سالن مطالعه</span>
            </button>
          `}
        </div>

        <!-- Invite Link Box -->
        <div style="margin-bottom: 16px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; padding: 10px 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span style="font-size: 0.78rem; color: #e4e4e7; font-weight: 700;">🔗 لینک دعوت اختصاصی سالن:</span>
            <button type="button" id="btn-copy-invite" onclick="event.stopPropagation();" class="btn-primary" style="padding: 4px 10px; font-size: 0.72rem; font-weight: 700; background: #7c3aed; border: none; border-radius: 8px; color: white; cursor: pointer;">📋 کپی لینک</button>
          </div>
          <input type="text" readonly value="https://planexapp.ir/?room=${o}" style="width: 100%; box-sizing: border-box; padding: 6px 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #16171d; color: #cbd5e1; text-align: left; direction: ltr; font-size: 0.76rem;" id="invite-link-input" />
        </div>

        <!-- Member List Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
          <h3 style="font-size: 0.88rem; font-weight: 800; color: #f8fafc; margin: 0; display: flex; align-items: center; gap: 6px;">
            <span>📋 اعضای حاضر در سالن (${r.length} عضو)</span>
          </h3>
          <span style="font-size: 0.7rem; color: #10b981; font-weight: 700; background: rgba(16,185,129,0.1); padding: 2px 8px; border-radius: 8px;">🟢 بروزرسانی زنده</span>
        </div>

        <!-- Scrollable Member List Container with Major & Goal -->
        <div id="room-members-list" style="max-height: 280px; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; padding-left: 2px;">
          ${r.map(x=>{const w=String(x.id)===String(c)||x.id==="me",A=x.gender==="دختر"||x.gender==="female"?"👧":"👦",k=String(x.id)===String(a)||x.role==="owner"?"👑 مالک":x.role==="admin"?"⭐ مدیر":"👤 عضو",$=x.major||x.field_of_study||w&&(l.major||l.field_of_study)||"عمومی",M=x.target||x.goal||w&&(l.target||l.goal)||"موفقیت";let I=x.today_study_time||x.focus_minutes||0,D=x.today_test_count||x.tests||0,T=x.last_2h_subject||x.current_subject||x.subject||"مطالعه عمومی";if(w){const N=(new Date().getDay()+1)%7,C=typeof p<"u"&&p.getCurrentWeek?p.getCurrentWeek():null,P=C?C.id:1,L=typeof p<"u"&&p.getHourlyLogs?p.getHourlyLogs(P):{},q=typeof p<"u"&&p.getRecordedTimerToday?p.getRecordedTimerToday():{minutes:0,tests:0};let F=0,J=0,G="مطالعه عمومی";for(let Q=0;Q<48;Q++){const V=L[`${N}_${Q}`];V&&V.categoryCode&&(["ع-س","ع-ک","ع-م","ع-غ","د-خ"].includes(V.categoryCode)&&F++,V.testCount&&(J+=parseInt(V.testCount)||0),V.subject&&(G=V.subject))}I=F*30+(Number(q.minutes)||0),D=J+(q.tests||0),T=G}return`
            <div id="user-card-${x.id}" style="padding: 10px 12px; background: #1f2029; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
              <div style="display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0;">
                <div style="position: relative; flex-shrink: 0;">
                  <div style="width: 40px; height: 40px; border-radius: 50%; background: #16171d; border: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
                    ${A}
                  </div>
                  <span style="position: absolute; bottom: 0; right: 0; width: 10px; height: 10px; background: #10b981; border: 2px solid #1f2029; border-radius: 50%;"></span>
                </div>

                <div style="min-width: 0; flex: 1;">
                  <div style="color: white; font-size: 0.84rem; font-weight: 800; display: flex; align-items: center; gap: 6px; margin-bottom: 2px; flex-wrap: wrap;">
                    <span style="color: #10b981; font-size: 0.6rem;">●</span>
                    <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${x.name||"کاربر پلنکس"}</span>
                    <span style="font-size: 0.62rem; background: #16171d; border: 1px solid rgba(255,255,255,0.06); padding: 1px 6px; border-radius: 8px; color: #a1a1aa;">${k}</span>
                    <span style="font-size: 0.62rem; background: rgba(56,189,248,0.1); color: #38bdf8; border: 1px solid rgba(56,189,248,0.25); padding: 1px 6px; border-radius: 8px; font-weight: 700;">${$}</span>
                  </div>

                  <!-- Goal / Target line (Feature 3) -->
                  <div style="font-size: 0.68rem; color: #fbbf24; margin-bottom: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    🎯 <span style="opacity: 0.9;">${M}</span>
                  </div>

                  <!-- Study Stats line -->
                  <div style="display: flex; flex-wrap: wrap; gap: 8px; font-size: 0.7rem; color: #8e8e9c;">
                    <span style="color: #e4e4e7; font-weight: 700;">⏱️ ${me(I)}</span>
                    <span style="color: #a1a1aa; font-weight: 700;">🎯 ${D} تست</span>
                    <span style="color: #94a3b8;">📚 ${T}</span>
                  </div>
                </div>
              </div>

              ${n&&!w?`
                <div style="display: flex; gap: 4px; flex-shrink: 0;">
                  <button onclick="window.promoteGroupAdmin('${o}', '${x.id}')" style="padding: 3px 6px; font-size: 0.7rem; color: #a1a1aa; border: 1px solid rgba(255,255,255,0.08); background: #16171d; border-radius: 6px; cursor: pointer;" title="ارتقا به مدیر">⭐</button>
                  <button onclick="window.kickGroupMember('${o}', '${x.id}')" style="padding: 3px 6px; font-size: 0.7rem; color: #ef4444; border: 1px solid rgba(239,68,68,0.3); background: #16171d; border-radius: 6px; cursor: pointer;" title="حذف عضو">✕</button>
                </div>
              `:""}
            </div>
            `}).join("")}
        </div>

        <!-- Group Shared Routines Section -->
        <div style="background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; padding: 10px 14px; margin-bottom: 14px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span style="font-size: 0.78rem; color: #e4e4e7; font-weight: 700;">🔁 روتین‌های به اشتراک‌گذاشته‌شده سالن</span>
            <button id="btn-share-routine-group" class="btn-primary" style="padding: 3px 8px; font-size: 0.7rem; background: #7c3aed; border: none; border-radius: 6px; color: white; cursor: pointer;">📌 اشتراک روتین من</button>
          </div>

          <div id="group-shared-routines-container" style="display: flex; flex-direction: column; gap: 6px; max-height: 100px; overflow-y: auto;">
            <div style="display: flex; align-items: center; justify-content: space-between; background: #16171d; padding: 6px 10px; border-radius: 10px; font-size: 0.76rem; border: 1px solid rgba(255,255,255,0.05);">
              <div>
                <strong style="color: #e4e4e7; display: block; font-size: 0.76rem;">مطالعه روزانه ۸ ساعت + ۲۰۰ تست</strong>
                <span style="font-size: 0.65rem; color: #8e8e9c;">اشتراک‌گذاشته‌شده توسط اعضا</span>
              </div>
              <button onclick="window.cloneGroupRoutine('مطالعه روزانه ۸ ساعت + ۲۰۰ تست')" class="btn-primary" style="padding: 2px 8px; font-size: 0.68rem; background: #7c3aed; border: none; border-radius: 6px; color: white; cursor: pointer;">➕ افزودن</button>
            </div>
          </div>
        </div>

        ${n?`
        <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.74rem; color: #8e8e9c;">پنل مدیریت سازنده سالن</span>
          <button id="btn-delete-room" class="btn-secondary" style="padding: 4px 10px; font-size: 0.72rem; border: 1px solid rgba(239, 68, 68, 0.4); color: #f87171; background: #1f2029; border-radius: 8px; cursor: pointer;">
            🗑 حذف سالن
          </button>
        </div>
        `:""}
      </div>
    </div>
  `}function Tn(o="create"){const e=o==="join";return`
    <div id="modal-create-group" class="modal-overlay modal-backdrop modal-create-room" data-alias="modal-create-room" data-close-modal="true" style="display: flex; backdrop-filter: blur(20px); background: rgba(0, 0, 0, 0.75); z-index: 99999;" onclick="if(event.target === this || event.target.classList.contains('modal-overlay') || event.target.classList.contains('modal-backdrop')) { if(window.closeActiveModal) window.closeActiveModal(); else if(window.closeCreateGroupModal) window.closeCreateGroupModal(); }">
      <div id="modal-create-room" class="modal-content modal-card" onclick="event.stopPropagation();" style="width: 92%; max-width: 450px; padding: 24px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; text-align: right; direction: rtl; box-shadow: 0 20px 50px rgba(0,0,0,0.6);">
        
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px;">
          <div>
            <h2 style="margin: 0; color: #f8fafc; font-size: 1.12rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
              <span>🏆</span>
              <span>مدیریت و عضویت در اتاق‌های مطالعه</span>
            </h2>
            <span style="font-size: 0.72rem; color: #8e8e9c; margin-top: 2px; display: block;">ایجاد سالن اختصاصی یا پیوستن به گروه با کد دعوت</span>
          </div>
          <button type="button" id="btn-close-create-room" aria-label="بستن" data-close-modal="true" onclick="if(window.closeActiveModal) window.closeActiveModal(); else if(window.closeCreateGroupModal) window.closeCreateGroupModal();" class="btn-close-modal btn-close">✕</button>
        </div>

        <!-- Pill Tabs Segmented Control -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; background: #1f2029; padding: 4px; border-radius: 14px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.06);">
          <button type="button" id="tab-btn-create-room" onclick="event.preventDefault(); event.stopPropagation(); window.switchCreateRoomModalTab('create')" style="padding: 9px; border-radius: 10px; font-size: 0.78rem; font-weight: 700; cursor: pointer; border: none; transition: all 0.2s; background: ${e?"transparent":"#7c3aed"}; color: ${e?"#8e8e9c":"#ffffff"}; display: flex; align-items: center; justify-content: center; gap: 6px;">
            <span>➕</span>
            <span>ساخت اتاق جدید</span>
          </button>
          <button type="button" id="tab-btn-join-room" onclick="event.preventDefault(); event.stopPropagation(); window.switchCreateRoomModalTab('join')" style="padding: 9px; border-radius: 10px; font-size: 0.78rem; font-weight: 700; cursor: pointer; border: none; transition: all 0.2s; background: ${e?"#7c3aed":"transparent"}; color: ${e?"#ffffff":"#8e8e9c"}; display: flex; align-items: center; justify-content: center; gap: 6px;">
            <span>🔑</span>
            <span>ورود با کد دعوت</span>
          </button>
        </div>

        <!-- ================= PANEL 1: CREATE NEW ROOM ================= -->
        <div id="panel-create-room" style="display: ${e?"none":"block"};">
          
          <!-- Field 1: Room Name -->
          <div style="margin-bottom: 14px;">
            <label style="display: block; margin-bottom: 6px; color: #cbd5e1; font-size: 0.78rem; font-weight: 700;">
              <span>نام گروه / اتاق مطالعه:</span> <span style="color: #ef4444;">*</span>
            </label>
            <input type="text" id="create-room-name" data-alias="input-create-group-name" placeholder="مثال: ماراتن مطالعه پزشکی / آزمون پره‌انترنی" maxlength="45" class="form-input" style="width: 100%; box-sizing: border-box; padding: 11px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: white; font-size: 0.82rem;" />
          </div>

          <!-- Field 2: Motivational Announcement / Rules -->
          <div style="margin-bottom: 14px;">
            <label style="display: block; margin-bottom: 6px; color: #cbd5e1; font-size: 0.78rem; font-weight: 700;">
              <span>پیام انگیزشی یا قوانین گروه (نمایش به همه اعضا):</span>
            </label>
            <textarea id="create-room-announcement" rows="2" placeholder="متن انگیزشی، ساعت بیداری یا مقررات حضور در اتاق..." maxlength="160" class="form-input" style="width: 100%; box-sizing: border-box; padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: white; font-size: 0.78rem; resize: none; line-height: 1.5;"></textarea>
          </div>

          <!-- Field 3: Category & Capacity in Grid -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 14px;">
            <div>
              <label style="display: block; margin-bottom: 6px; color: #cbd5e1; font-size: 0.76rem; font-weight: 700;">دسته‌بندی:</label>
              <select id="create-room-category" class="form-input" style="width: 100%; box-sizing: border-box; padding: 10px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: white; font-size: 0.78rem;">
                <option value="tajrobi">🧬 تجربی و پزشکی</option>
                <option value="riazi">📐 ریاضی و مهندسی</option>
                <option value="ensani">📚 انسانی و حقوق</option>
                <option value="general" selected>☕ عمومی و همه رشته‌ها</option>
                <option value="daneshjou">🎓 دانشجویان</option>
                <option value="zaban">🌍 زبان‌های خارجی</option>
                <option value="honar">🎨 هنر</option>
              </select>
            </div>

            <div>
              <label style="display: block; margin-bottom: 6px; color: #cbd5e1; font-size: 0.76rem; font-weight: 700;">ظرفیت سالن:</label>
              <select id="create-room-capacity" class="form-input" style="width: 100%; box-sizing: border-box; padding: 10px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: white; font-size: 0.78rem;">
                <option value="50">۵۰ نفر</option>
                <option value="100">۱۰۰ نفر</option>
                <option value="250">۲۵۰ نفر</option>
                <option value="600" selected>نامحدود (۶۰۰ نفر)</option>
              </select>
            </div>
          </div>

          <!-- Field 4: Group Access Type (Public vs Private) -->
          <div style="margin-bottom: 18px; background: #1f2029; padding: 12px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);">
            <label style="display: block; margin-bottom: 8px; color: #cbd5e1; font-size: 0.78rem; font-weight: 700;">نوع دسترسی و عضویت گروه:</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <label style="display: flex; align-items: center; gap: 8px; font-size: 0.76rem; color: #e4e4e7; cursor: pointer; background: rgba(255,255,255,0.03); padding: 8px 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
                <input type="radio" name="create-room-type" value="public" checked style="accent-color: #7c3aed;" />
                <span>🌐 عمومی (ورود مستقیم)</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px; font-size: 0.76rem; color: #e4e4e7; cursor: pointer; background: rgba(255,255,255,0.03); padding: 8px 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
                <input type="radio" name="create-room-type" value="private" style="accent-color: #7c3aed;" />
                <span>🔒 خصوصی (با صف تایید مدیر)</span>
              </label>
            </div>
          </div>

          <!-- Submit Button -->
          <button type="button" id="btn-submit-create-room" data-alias="btn-create-group-submit" onclick="event.preventDefault(); event.stopPropagation(); window.handleCreateGroupSubmit && window.handleCreateGroupSubmit(event);" class="btn-primary" style="width: 100%; height: 46px; font-size: 0.9rem; font-weight: 800; background: #7c3aed; color: white; border: none; border-radius: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 14px rgba(124, 58, 237, 0.35);">
            <span>🚀</span>
            <span>ایجاد اتاق و دریافت کد دعوت</span>
          </button>
        </div>

        <!-- ================= PANEL 2: JOIN WITH CODE ================= -->
        <div id="panel-join-room" style="display: ${e?"block":"none"};">
          
          <div style="margin-bottom: 16px;">
            <label style="display: block; margin-bottom: 6px; color: #cbd5e1; font-size: 0.78rem; font-weight: 700;">
              <span>کد دعوت اختصاصی یا شماره سازنده گروه:</span> <span style="color: #ef4444;">*</span>
            </label>
            <input type="text" id="input-modal-join-code" placeholder="مثال: PLX-4829 یا 09121112233" maxlength="25" class="form-input" style="width: 100%; box-sizing: border-box; padding: 12px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: white; font-size: 0.95rem; font-family: 'Outfit', monospace; text-transform: uppercase; text-align: center; letter-spacing: 1.5px;" />
            <span style="font-size: 0.7rem; color: #8e8e9c; margin-top: 6px; display: block; line-height: 1.4;">
              💡 کد ۶ رقمی ارائه‌شده توسط سازنده یا مدیر سالن را اینجا وارد کنید.
            </span>
          </div>

          <!-- Submit Join Button -->
          <button type="button" id="btn-submit-modal-join-code" onclick="event.preventDefault(); event.stopPropagation(); window.handleModalJoinRoomSubmit && window.handleModalJoinRoomSubmit(event);" class="btn-primary" style="width: 100%; height: 46px; font-size: 0.9rem; font-weight: 800; background: #7c3aed; color: white; border: none; border-radius: 12px; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 14px rgba(124, 58, 237, 0.35); margin-top: 24px;">
            <span>🔑</span>
            <span>پیوستن به اتاق</span>
          </button>
        </div>

      </div>
    </div>
  `}window.closeJoinRoomOnboardingModal||(window.closeJoinRoomOnboardingModal=()=>{const o=typeof state<"u"&&state?state:window.appState;o&&(o.pendingJoinRoom=null,o.activeModal=null),window.appState&&(window.appState.pendingJoinRoom=null,window.appState.activeModal=null),typeof renderApp=="function"?renderApp():typeof window.renderApp=="function"&&window.renderApp()});window.handleSubmitJoinRoomOnboarding||(window.handleSubmitJoinRoomOnboarding=(o,e)=>{var d,s,l,c,y;const t=(s=(d=document.getElementById("input-onboarding-nickname"))==null?void 0:d.value)==null?void 0:s.trim(),n=(l=document.getElementById("input-onboarding-major"))==null?void 0:l.value,a=(y=(c=document.getElementById("input-onboarding-target"))==null?void 0:c.value)==null?void 0:y.trim();if(!t){alert("لطفاً نام یا نام مستعار خود را وارد کنید.");return}let i={};try{i=p&&typeof p.getProfile=="function"?p.getProfile():JSON.parse(localStorage.getItem("planex_user_profile")||"{}")}catch{i={}}i.name=t,i.nickname=t,i.major=n,i.field_of_study=n,i.target=a,i.goal=a,p&&typeof p.setProfile=="function"&&p.setProfile(i),localStorage.setItem("planex_user_profile",JSON.stringify(i));try{const m=JSON.parse(localStorage.getItem("planex_user_account")||"{}");m.full_name=t,localStorage.setItem("planex_user_account",JSON.stringify(m))}catch{}const r=typeof state<"u"&&state?state:window.appState;r&&(r.pendingJoinRoom=null,r.activeModal=null),window.appState&&(window.appState.pendingJoinRoom=null,window.appState.activeModal=null),o&&String(o).startsWith("PLX-")&&typeof window.handleJoinGroupSubmit=="function"?window.handleJoinGroupSubmit(o):typeof window.handleJoinRoomClick=="function"?window.handleJoinRoomClick(o,e):typeof window.joinStudyRoom=="function"?window.joinStudyRoom(o,e):typeof window.renderApp=="function"&&window.renderApp()});function An(o=null){const e=p&&typeof p.getProfile=="function"?p.getProfile():{},t=JSON.parse(localStorage.getItem("planex_user_account")||"{}"),n=e.name||e.nickname||t.full_name||"",a=e.major||e.field_of_study||"تجربی",i=e.target||e.goal||"",r=o&&(o.name||o.title||o.roomName)||"سالن مطالعه",d=o&&(o.id||o.code)||"";return`
    <div class="modal-overlay" style="display: flex; backdrop-filter: blur(20px); z-index: 99999;">
      <div class="modal-content" onclick="event.stopPropagation();" style="max-width: 440px; padding: 22px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; text-align: right; direction: rtl;">
        
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 12px;">
          <div>
            <h2 style="margin: 0; color: #f8fafc; font-size: 1.05rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
              <span>👤</span>
              <span>مشخصات عضویت در ${r}</span>
            </h2>
            <span style="font-size: 0.72rem; color: #8e8e9c; margin-top: 2px; display: block;">
              اطلاعات پروفایل مطالعاتی شما برای نمایش به اعضای گروه
            </span>
          </div>
          <button type="button" id="btn-close-join-onboarding" onclick="window.closeJoinRoomOnboardingModal()" class="btn-icon" style="background: #1f2029; border: 1px solid rgba(255,255,255,0.08); color: #a1a1aa; border-radius: 50%; width: 30px; height: 30px; cursor: pointer;">✕</button>
        </div>

        <form id="form-join-room-onboarding" onsubmit="event.preventDefault(); window.handleSubmitJoinRoomOnboarding('${d}', '${r}');" style="display: flex; flex-direction: column; gap: 12px;">
          
          <!-- 1. Nickname -->
          <div>
            <label style="display: block; margin-bottom: 5px; color: #cbd5e1; font-size: 0.78rem; font-weight: 700;">
              <span>۱. نام یا نام مستعار:</span> <span style="color: #ef4444;">*</span>
            </label>
            <input type="text"
                   id="input-onboarding-nickname"
                   required
                   value="${n}"
                   placeholder="مثلاً: علی م. یا دکتر احمدی"
                   maxlength="30"
                   class="form-input"
                   style="width: 100%; box-sizing: border-box; padding: 10px 12px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: white; font-size: 0.84rem;" />
          </div>

          <!-- 2. Major / Field of Study -->
          <div>
            <label style="display: block; margin-bottom: 5px; color: #cbd5e1; font-size: 0.78rem; font-weight: 700;">
              <span>۲. رشته تحصیلی / مقطع:</span> <span style="color: #ef4444;">*</span>
            </label>
            <select id="input-onboarding-major"
                    required
                    class="form-input"
                    style="width: 100%; box-sizing: border-box; padding: 10px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: white; font-size: 0.82rem;">
              <option value="تجربی" ${a.includes("تجرب")?"selected":""}>🧬 علوم تجربی (کنکور / پزشکی)</option>
              <option value="ریاضی" ${a.includes("ریاض")?"selected":""}>📐 ریاضی و فیزیک (مهندسی)</option>
              <option value="انسانی" ${a.includes("انسان")?"selected":""}>📚 علوم انسانی (وکالت / مدیریت)</option>
              <option value="دانشجویی" ${a.includes("دانشجو")||a.includes("پزشک")?"selected":""}>🎓 دانشجوی دانشگاه / رزیدنتی</option>
              <option value="زبان" ${a.includes("زبان")?"selected":""}>🌍 منحصراً زبان</option>
              <option value="هنر" ${a.includes("هنر")?"selected":""}>🎨 هنر</option>
              <option value="عمومی / سایر" ${a==="عمومی"?"selected":""}>☕ عمومی / سایر</option>
            </select>
          </div>

          <!-- 3. Goal / Target -->
          <div>
            <label style="display: block; margin-bottom: 5px; color: #cbd5e1; font-size: 0.78rem; font-weight: 700;">
              <span>۳. هدف مطالعاتی / رشته و دانشگاه دلخواه:</span> <span style="color: #ef4444;">*</span>
            </label>
            <input type="text"
                   id="input-onboarding-target"
                   required
                   value="${i}"
                   placeholder="مثلاً: قبولی پزشکی تهران، رتبه زیر ۵۰۰، مطالعه روزانه ۸ ساعت"
                   maxlength="50"
                   class="form-input"
                   style="width: 100%; box-sizing: border-box; padding: 10px 12px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: white; font-size: 0.84rem;" />
          </div>

          <!-- Submit Button -->
          <button type="submit"
                  id="btn-confirm-join-onboarding"
                  class="btn-primary"
                  style="width: 100%; padding: 12px; font-size: 0.92rem; font-weight: 800; background: #7c3aed; color: white; border: none; border-radius: 12px; cursor: pointer; margin-top: 6px; box-shadow: none;">
            🚀 تأیید مشخصات و ورود به سالن
          </button>
        </form>

      </div>
    </div>
  `}function Mn(o=0){const e=typeof o=="number"?o:window.userGuideActiveTab||0,t=[{id:0,icon:"⏰",title:"ماتریس و روتین ۲۴ ساعته"},{id:1,icon:"🎯",title:"هدف‌گذاری و ثبت تست"},{id:2,icon:"🏆",title:"تالار رقابت و لیدربرد"},{id:3,icon:"☁️",title:"همگام‌سازی ابری"}];return`
    <div class="modal-overlay" id="modal-user-guide" style="backdrop-filter: blur(16px); z-index: 9995; animation: fadeIn 0.25s ease;" dir="rtl">
      <div class="modal-card" style="max-width: 580px; width: 95%; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 18px; padding: 22px; box-shadow: 0 25px 60px -12px rgba(0, 0, 0, 0.8); max-height: 90vh; display: flex; flex-direction: column; overflow: hidden;">

        <!-- Modal Top Header -->
        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 14px; margin-bottom: 16px;">
          <div>
            <div class="modal-title" style="color: #e4e4e7; display: flex; align-items: center; gap: 10px; font-size: 1.15rem; font-weight: 900;">
              <span style="font-size: 1.3rem;">📖</span>
              <span>راهنمای جامع PlanEx</span>
              <span style="font-size: 0.7rem; background: #1f2029; color: #a1a1aa; padding: 2px 10px; border-radius: 14px; font-weight: 800; border: 1px solid rgba(255, 255, 255, 0.08);">
                راهنمای کامل
              </span>
            </div>
            <p style="font-size: 0.78rem; color: var(--text-secondary); margin: 4px 0 0 0;">
              آموزش بخش‌های کلیدی و امکانات پیشرفته مدیریت زمان
            </p>
          </div>
          <button class="btn-close" onclick="window.closeUserGuideModal()" style="font-size: 1.1rem; width: 32px; height: 32px; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); color: #cbd5e1; border-radius: 50%;" title="بستن">✕</button>
        </div>

        <!-- Interactive Tab Switcher -->
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; margin-bottom: 18px; background: #1f2029; padding: 4px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08);">
          ${t.map(n=>{const a=e===n.id;return`
              <button onclick="window.switchUserGuideTab(${n.id})"
                      style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; padding: 8px 4px; border-radius: 12px; border: 1px solid ${a?"#7c3aed":"transparent"}; background: ${a?"#7c3aed":"transparent"}; color: ${a?"#fff":"var(--text-secondary)"}; cursor: pointer; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none;">
                <span style="font-size: 1.15rem;">${n.icon}</span>
                <span style="font-size: 0.7rem; font-weight: ${a?"900":"600"}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%;">${n.title.split(" ")[0]}</span>
              </button>
            `}).join("")}
        </div>

        <!-- Scrollable Tab Content Container -->
        <div style="flex: 1; overflow-y: auto; padding-right: 4px; padding-left: 4px; margin-bottom: 16px; scrollbar-width: thin;" class="user-guide-content">

          ${e===0?`
            <!-- TAB 1: ⏰ ماتریس و روتین ۲۴ ساعته -->
            <div style="display: flex; flex-direction: column; gap: 12px; animation: fadeIn 0.2s ease;">

              <!-- Section Intro Banner -->
              <div style="background: linear-gradient(135deg, rgba(56, 189, 248, 0.12), rgba(99, 102, 241, 0.12)); border: 1px solid rgba(56, 189, 248, 0.3); border-radius: 16px; padding: 12px 14px; display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 1.5rem;">⏰</span>
                <div>
                  <h4 style="margin: 0; font-size: 0.95rem; font-weight: 800; color: #38bdf8;">ماتریس و روتین ۲۴ ساعته شبانه‌روز</h4>
                  <span style="font-size: 0.75rem; color: var(--text-secondary);">ثبت دقیق پارت‌های ۳۰ دقیقه‌ای و تفکیک رنگی فعالیت‌ها</span>
                </div>
              </div>

              <!-- Feature 1 -->
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 12px 14px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <span style="width: 22px; height: 22px; border-radius: 50%; background: #38bdf8; color: #0f172a; font-weight: 900; font-size: 0.75rem; display: flex; align-items: center; justify-content: center;">۱</span>
                  <span style="font-size: 0.88rem; font-weight: 800; color: #f8fafc;">ثبت پارت‌های نیم‌ساعته (۴۸ باکس روزانه):</span>
                </div>
                <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.7; margin: 0;">
                  شبانه‌روز به ۴۸ بازه نیم‌ساعته (از ۰۰:۰۰ تا ۲۳:۳۰) تقسیم شده است. با کلیک یا لمس روی هر پارت در ماتریس روزانه، نوع فعالیت خود (مطالعه درسی، تست، کلاس، خواب، ورزش و ...) را مشخص کنید.
                </p>
              </div>

              <!-- Feature 2 -->
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 12px 14px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <span style="width: 22px; height: 22px; border-radius: 50%; background: #818cf8; color: #0f172a; font-weight: 900; font-size: 0.75rem; display: flex; align-items: center; justify-content: center;">۲</span>
                  <span style="font-size: 0.88rem; font-weight: 800; color: #f8fafc;">شخصی‌سازی دسته‌ها و پالت ۲۴ رنگه:</span>
                </div>
                <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.7; margin: 0;">
                  در بخش تنظیمات، می‌توانید دروس و دسته‌بندی‌های دلخواه با نام، کد مخفف و رنگ اختصاصی بسازید تا ماتریس دقیقاً مطابق با سلیقه و نیاز مطالعاتی شما باشد.
                </p>
              </div>

              <!-- Feature 3 -->
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 12px 14px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <span style="width: 22px; height: 22px; border-radius: 50%; background: #c084fc; color: #0f172a; font-weight: 900; font-size: 0.75rem; display: flex; align-items: center; justify-content: center;">۳</span>
                  <span style="font-size: 0.88rem; font-weight: 800; color: #f8fafc;">تحلیل دوناتی ۲۴ ساعته و نمودارهای دایره‌ای:</span>
                </div>
                <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.7; margin: 0;">
                  در بخش پایینی داشبورد، نمودار دایره‌ای هوشمند به صورت زنده سهم هر فعالیت را در ۲۴ ساعت روز محاسبه کرده و همراه با راهنمای رنگی و ساعت تفکیک‌شده نمایش می‌دهد.
                </p>
              </div>

              <!-- Pro Tip Box -->
              <div style="background: rgba(245, 158, 11, 0.1); border: 1px dashed rgba(245, 158, 11, 0.4); border-radius: 14px; padding: 10px 14px; display: flex; align-items: flex-start; gap: 8px;">
                <span style="font-size: 1.1rem; flex-shrink: 0;">💡</span>
                <span style="font-size: 0.75rem; color: #fde68a; line-height: 1.6;">
                  <strong>نکته کاربردی:</strong> برای خالی کردن یک پارت، کافیست گزینه خط تیره (-) یا پاک‌کردن را انتخاب نمایید. همچنین می‌توانید برای هر ساعت یادداشت و تعداد تست وارد کنید.
                </span>
              </div>

            </div>
          `:e===1?`
            <!-- TAB 2: 🎯 هدف‌گذاری و ثبت تست -->
            <div style="display: flex; flex-direction: column; gap: 12px; animation: fadeIn 0.2s ease;">

              <!-- Section Intro Banner -->
              <div style="background: linear-gradient(135deg, rgba(236, 72, 153, 0.12), rgba(239, 68, 68, 0.12)); border: 1px solid rgba(236, 72, 153, 0.3); border-radius: 16px; padding: 12px 14px; display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 1.5rem;">🎯</span>
                <div>
                  <h4 style="margin: 0; font-size: 0.95rem; font-weight: 800; color: #f472b6;">هدف‌گذاری و ثبت تست روزانه</h4>
                  <span style="font-size: 0.75rem; color: var(--text-secondary);">تنظیم اهداف، پایش پیشرفت و کنترل اتلاف وقت</span>
                </div>
              </div>

              <!-- Feature 1 -->
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 12px 14px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <span style="width: 22px; height: 22px; border-radius: 50%; background: #ec4899; color: #fff; font-weight: 900; font-size: 0.75rem; display: flex; align-items: center; justify-content: center;">۱</span>
                  <span style="font-size: 0.88rem; font-weight: 800; color: #f8fafc;">تعیین و ویرایش اهداف روزانه:</span>
                </div>
                <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.7; margin: 0;">
                  با کلیک روی دکمه ویرایش هدف در کارت داشبورد، هدف ساعت مطالعه روزانه (مثلاً ۸ ساعت) و تارگت تعداد تست موردنظرتان (مثلاً ۱۵۰ تست) را تعیین کنید.
                </p>
              </div>

              <!-- Feature 2 -->
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 12px 14px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <span style="width: 22px; height: 22px; border-radius: 50%; background: #f43f5e; color: #fff; font-weight: 900; font-size: 0.75rem; display: flex; align-items: center; justify-content: center;">۲</span>
                  <span style="font-size: 0.88rem; font-weight: 800; color: #f8fafc;">پایش درصد پیشرفت و زمان باقیمانده:</span>
                </div>
                <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.7; margin: 0;">
                  حلقه‌های دوناتی بالای داشبورد، درصد تحقق تارگت‌های امروز را در لحظه محاسبه کرده و دقیقاً به شما نشان می‌دهند چند ساعت یا تست تا تکمیل هدف روزانه فاصله دارید.
                </p>
              </div>

              <!-- Feature 3 -->
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 12px 14px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <span style="width: 22px; height: 22px; border-radius: 50%; background: #fb7185; color: #0f172a; font-weight: 900; font-size: 0.75rem; display: flex; align-items: center; justify-content: center;">۳</span>
                  <span style="font-size: 0.88rem; font-weight: 800; color: #f8fafc;">کنترل اتلاف وقت و نمودار میله‌ای تست هفتگی:</span>
                </div>
                <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.7; margin: 0;">
                  پارت‌های تلف‌شده به رنگ قرمز پایش می‌شوند تا اتلاف وقت خود را به حداقل برسانید. نمودار میله‌ای تست‌های هفتگی نیز روند تلاش مستمر شما در طول هفته را به تصویر می‌کشد.
                </p>
              </div>

              <!-- Pro Tip Box -->
              <div style="background: rgba(236, 72, 153, 0.1); border: 1px dashed rgba(236, 72, 153, 0.4); border-radius: 14px; padding: 10px 14px; display: flex; align-items: flex-start; gap: 8px;">
                <span style="font-size: 1.1rem; flex-shrink: 0;">💡</span>
                <span style="font-size: 0.75rem; color: #fce7f3; line-height: 1.6;">
                  <strong>نکته:</strong> تست‌هایی که در هنگام ثبت پارت‌های مطالعه یا تایمر تمرکز وارد می‌کنید، مستقیماً در آمار روزانه و کارنامه لیدربرد محاسبه می‌شوند.
                </span>
              </div>

            </div>
          `:e===2?`
            <!-- TAB 3: 🏆 تالار رقابت و لیدربرد -->
            <div style="display: flex; flex-direction: column; gap: 12px; animation: fadeIn 0.2s ease;">

              <!-- Section Intro Banner -->
              <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(239, 68, 68, 0.15)); border: 1px solid rgba(245, 158, 11, 0.35); border-radius: 16px; padding: 12px 14px; display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 1.5rem;">🏆</span>
                <div>
                  <h4 style="margin: 0; font-size: 0.95rem; font-weight: 800; color: #fbbf24;">تالار رقابت و لیدربرد روزانه</h4>
                  <span style="font-size: 0.75rem; color: var(--text-secondary);">ثبت کارنامه، رقابت انگیزشی و مقایسه با داوطلبان سراسر کشور</span>
                </div>
              </div>

              <!-- Feature 1 -->
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 12px 14px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <span style="width: 22px; height: 22px; border-radius: 50%; background: #f59e0b; color: #0f172a; font-weight: 900; font-size: 0.75rem; display: flex; align-items: center; justify-content: center;">۱</span>
                  <span style="font-size: 0.88rem; font-weight: 800; color: #f8fafc;">حضور با نام مستعار و هدف دلخواه:</span>
                </div>
                <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.7; margin: 0;">
                  در تب تالار رقابت، نام مستعار و هدف خود (مثلاً: رتبه برتر کنکور تجربی، پزشکی، مهندسی و ...) را تنظیم کنید تا هویت شما با نام دلخواهتان در جدول لیدربرد ثبت شود.
                </p>
              </div>

              <!-- Feature 2 -->
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 12px 14px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <span style="width: 22px; height: 22px; border-radius: 50%; background: #d97706; color: #fff; font-weight: 900; font-size: 0.75rem; display: flex; align-items: center; justify-content: center;">۲</span>
                  <span style="font-size: 0.88rem; font-weight: 800; color: #f8fafc;">رتبه‌بندی شفاف و سکوی ۳ نفر برتر:</span>
                </div>
                <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.7; margin: 0;">
                  رتبه‌بندی هر روز بر اساس مجموع ساعت مطالعه مفید و تعداد تست‌های ثبت‌شده انجام می‌شود. ۳ نفر برتر روی سکوی افتخار (طلا، نقره و برنز) قرار می‌گیرند.
                </p>
              </div>

              <!-- Feature 3 -->
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 12px 14px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <span style="width: 22px; height: 22px; border-radius: 50%; background: #b45309; color: #fff; font-weight: 900; font-size: 0.75rem; display: flex; align-items: center; justify-content: center;">۳</span>
                  <span style="font-size: 0.88rem; font-weight: 800; color: #f8fafc;">همگام‌سازی هوشمند و امنیت آفلاین:</span>
                </div>
                <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.7; margin: 0;">
                  ثبت کارنامه فقط به صورت دستی انجام می‌شود و هیچ ارسال خودکاری در پس‌زمینه وجود ندارد. با دکمه «همگام‌سازی کارنامه» می‌توانید آخرین ساعات و تست‌ها را دستی ارسال و رتبه‌تان را چک کنید. در حالت آفلاین نیز داده‌های قبلی حفظ می‌شوند.
                </p>
              </div>

              <!-- Pro Tip Box -->
              <div style="background: rgba(245, 158, 11, 0.1); border: 1px dashed rgba(245, 158, 11, 0.4); border-radius: 14px; padding: 10px 14px; display: flex; align-items: flex-start; gap: 8px;">
                <span style="font-size: 1.1rem; flex-shrink: 0;">💡</span>
                <span style="font-size: 0.75rem; color: #fde68a; line-height: 1.6;">
                  <strong>نکته:</strong> برای جستجوی نام دوستان یا رقبای خود، کافیست از کادر جستجو در بالای جدول لیدربرد استفاده کنید.
                </span>
              </div>

            </div>
          `:`
            <!-- TAB 4: ☁️ همگام‌سازی ابری -->
            <div style="display: flex; flex-direction: column; gap: 12px; animation: fadeIn 0.2s ease;">

              <!-- Section Intro Banner -->
              <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(99, 102, 241, 0.15)); border: 1px solid rgba(168, 85, 247, 0.35); border-radius: 16px; padding: 12px 14px; display: flex; align-items: center; gap: 10px;">
                <span style="font-size: 1.5rem;">☁️</span>
                <div>
                  <h4 style="margin: 0; font-size: 0.95rem; font-weight: 800; color: #c084fc;">انتقال و همگام‌سازی ابری (Full Cloud Sync)</h4>
                  <span style="font-size: 0.75rem; color: var(--text-secondary);">انتقال ۱۰۰٪ داده‌ها بین گوشی، تبلت و لپ‌تاپ با کد ۶ رقمی</span>
                </div>
              </div>

              <!-- Feature 1 -->
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 12px 14px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <span style="width: 22px; height: 22px; border-radius: 50%; background: #a855f7; color: #fff; font-weight: 900; font-size: 0.75rem; display: flex; align-items: center; justify-content: center;">۱</span>
                  <span style="font-size: 0.88rem; font-weight: 800; color: #f8fafc;">کد اختصاصی ۶ رقمی (مانند PLX-8K4):</span>
                </div>
                <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.7; margin: 0;">
                  دستگاه شما یک کد اختصاصی و یکتا دارد. در تب لیدربرد یا تنظیمات، با زدن دکمه <strong>«کپی و ثبت ابری»</strong>، کلیه جداول، روتین‌ها و ساعات مطالعه فوراً در فضای ابری ایمن ذخیره می‌شوند.
                </p>
              </div>

              <!-- Feature 2 -->
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 12px 14px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <span style="width: 22px; height: 22px; border-radius: 50%; background: #6366f1; color: #fff; font-weight: 900; font-size: 0.75rem; display: flex; align-items: center; justify-content: center;">۲</span>
                  <span style="font-size: 0.88rem; font-weight: 800; color: #f8fafc;">بازیابی فوری در دستگاه دوم:</span>
                </div>
                <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.7; margin: 0;">
                  در گوشی یا کامپیوتر دوم خود، برنامه را باز کرده و کد دستگاه اول را در کادر <strong>«بازیابی کامل داده‌ها با کد»</strong> وارد کنید و دکمه <strong>«اعمال و بازیابی»</strong> را بزنید. تمام برنامه‌ها عیناً منتقل می‌گردند!
                </p>
              </div>

              <!-- Feature 3 -->
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 12px 14px;">
                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
                  <span style="width: 22px; height: 22px; border-radius: 50%; background: #3b82f6; color: #fff; font-weight: 900; font-size: 0.75rem; display: flex; align-items: center; justify-content: center;">۳</span>
                  <span style="font-size: 0.88rem; font-weight: 800; color: #f8fafc;">بدون نیاز به ثبت‌نام + پشتیبان‌گیری محلی:</span>
                </div>
                <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.7; margin: 0;">
                  برای همگام‌سازی نیازی به ایمیل یا ساخت اکانت ندارید. علاوه بر این، در تنظیمات امکان دانلود فایل پشتیبان JSON آفلاین نیز جهت ذخیره در حافظه شخصی وجود دارد.
                </p>
              </div>

              <!-- Pro Tip Box -->
              <div style="background: rgba(168, 85, 247, 0.1); border: 1px dashed rgba(168, 85, 247, 0.4); border-radius: 14px; padding: 10px 14px; display: flex; align-items: flex-start; gap: 8px;">
                <span style="font-size: 1.1rem; flex-shrink: 0;">💡</span>
                <span style="font-size: 0.75rem; color: #e9d5ff; line-height: 1.6;">
                  <strong>نکته طلایی:</strong> پس از ثبت تغییرات در هر دستگاه، یک‌بار دکمه «کپی و ثبت ابری» را بزنید تا نسخه ابری همیشه با جدیدترین مطالعه شما به‌روز باشد.
                </span>
              </div>

            </div>
          `}

        </div>

        <!-- Step Controls (Prev / Indicators / Next) -->
        <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.08); margin-bottom: 8px;">

          <!-- Prev Button -->
          <button onclick="window.switchUserGuideTab(${Math.max(0,e-1)})"
                  class="glass-panel"
                  style="padding: 8px 14px; font-size: 0.8rem; font-weight: 700; color: ${e>0?"#fff":"rgba(255,255,255,0.3)"}; cursor: ${e>0?"pointer":"default"}; border-radius: 12px; display: flex; align-items: center; gap: 6px; visibility: ${e>0?"visible":"hidden"};">
            <span>➡️</span>
            <span>بخش قبلی</span>
          </button>

          <!-- Dot Indicators -->
          <div style="display: flex; gap: 6px; align-items: center;">
            ${t.map(n=>`
              <div onclick="window.switchUserGuideTab(${n.id})"
                   style="width: ${e===n.id?"22px":"8px"}; height: 8px; border-radius: 4px; background: ${e===n.id?"linear-gradient(90deg, #6366f1, #a855f7)":"rgba(255,255,255,0.2)"}; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);"
                   title="${n.title}"></div>
            `).join("")}
          </div>

          <!-- Next Button -->
          ${e<3?`
            <button onclick="window.switchUserGuideTab(${e+1})"
                    class="btn-primary"
                    style="width: auto; padding: 8px 16px; font-size: 0.8rem; font-weight: 700; border-radius: 12px; display: flex; align-items: center; gap: 6px; background: linear-gradient(135deg, #6366f1, #8b5cf6); border: none; cursor: pointer;">
              <span>بخش بعدی</span>
              <span>⬅️</span>
            </button>
          `:`
            <button onclick="window.closeUserGuideModal()"
                    class="btn-primary"
                    style="width: auto; padding: 8px 16px; font-size: 0.8rem; font-weight: 800; border-radius: 12px; display: flex; align-items: center; gap: 6px; background: linear-gradient(135deg, #10b981, #059669); border: none; cursor: pointer;">
              <span>شروع کار</span>
              <span>🚀</span>
            </button>
          `}

        </div>

        <!-- Big Bottom CTA Button -->
        <button onclick="window.closeUserGuideModal()" class="btn-primary" style="width: 100%; padding: 12px; font-size: 0.92rem; font-weight: 800; border-radius: 14px; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 16px rgba(16, 185, 129, 0.4); margin-top: 4px;">
          <span>متوجه شدم / بستن راهنما</span>
          <span>✨</span>
        </button>

      </div>
    </div>
  `}const Uo=["📚","📖","📝","🔬","🧪","📐","💻","👨‍🏫","👥","☕","😴","🏃","🧘","🚿","💼","🎮","🍎","🧹","🎨","🎵"];window.activityModalState={isEditing:!1,code:null,title:"",group:"علمی",isStudy:!0,color:Le[0],icon:"📚"};window.openActivityModal=(o=null)=>{const e=p.getCategories();if(o){const t=e.find(n=>n.code===o);if(t){const n=Oe(t);window.activityModalState={isEditing:!0,code:t.code,title:t.title||"",group:t.group||(n?"علمی":"غیرعلمی"),isStudy:n,color:t.color||Le[0],icon:t.icon||(n?"📚":"☕")}}}else{const t=ot(e);window.activityModalState={isEditing:!1,code:null,title:"",group:"علمی",isStudy:!0,color:t,icon:"📚"}}if(window.appState)window.appState.activeModal="activity",typeof window.renderApp=="function"&&window.renderApp();else{const t=document.getElementById("modal-activity-editor");t&&(t.style.display="flex")}};window.openNonStudyActivityModal=()=>{const o=p.getCategories(),e=ot(o);if(window.activityModalState={isEditing:!1,code:null,title:"",group:"غیرعلمی",isStudy:!1,color:e,icon:"☕"},window.appState)window.appState.activeModal="activity",typeof window.renderApp=="function"&&window.renderApp();else{const t=document.getElementById("modal-activity-editor");t&&(t.style.display="flex")}};window.closeActivityModal=()=>{if(window.appState&&window.appState.activeModal==="activity")window.appState.activeModal=null,typeof window.renderApp=="function"&&window.renderApp();else{const o=document.getElementById("modal-activity-editor");o&&(o.style.display="none")}};window.setActivityModalType=o=>{window.activityModalState.isStudy=!!o,window.activityModalState.group=o?"علمی":"غیرعلمی",window.activityModalState.isEditing||(window.activityModalState.icon=o?"📚":"☕");const e=document.getElementById("act-type-study-btn"),t=document.getElementById("act-type-nonstudy-btn");e&&t&&(o?(e.classList.add("active-type-selected"),e.style.borderColor="#38bdf8",e.style.background="rgba(56, 189, 248, 0.15)",e.style.boxShadow="0 0 14px rgba(56, 189, 248, 0.3)",t.classList.remove("active-type-selected"),t.style.borderColor="rgba(255, 255, 255, 0.1)",t.style.background="rgba(255, 255, 255, 0.03)",t.style.boxShadow="none"):(t.classList.add("active-type-selected"),t.style.borderColor="#f59e0b",t.style.background="rgba(245, 158, 11, 0.15)",t.style.boxShadow="0 0 14px rgba(245, 158, 11, 0.3)",e.classList.remove("active-type-selected"),e.style.borderColor="rgba(255, 255, 255, 0.1)",e.style.background="rgba(255, 255, 255, 0.03)",e.style.boxShadow="none"))};window.setActivityModalColor=o=>{window.activityModalState.color=o,document.querySelectorAll("#modal-activity-editor .act-color-btn").forEach(e=>{e.dataset.color===o?(e.style.borderColor="#ffffff",e.style.transform="scale(1.18)",e.style.boxShadow="0 0 10px rgba(255,255,255,0.6)"):(e.style.borderColor="transparent",e.style.transform="scale(1)",e.style.boxShadow="none")})};window.setActivityModalIcon=o=>{window.activityModalState.icon=o,document.querySelectorAll("#modal-activity-editor .act-icon-btn").forEach(e=>{e.dataset.icon===o?(e.style.borderColor="var(--primary-accent, #38bdf8)",e.style.background="rgba(56, 189, 248, 0.2)"):(e.style.borderColor="rgba(255,255,255,0.08)",e.style.background="rgba(255,255,255,0.03)")})};window.saveActivityModal=()=>{const o=document.getElementById("activity-modal-title"),e=o?o.value.trim():window.activityModalState.title;if(!e){alert("لطفاً عنوان فعالیت را وارد نمایید."),o&&o.focus();return}const{isEditing:t,code:n,isStudy:a,color:i,icon:r,group:d}=window.activityModalState;p.saveCategory({code:t?n:"cust_"+Date.now(),title:e,group:a?"علمی":d||"غیرعلمی",isStudy:!!a,color:i||Le[0],icon:r||(a?"📚":"☕")}),window.closeActivityModal(),typeof window.renderApp=="function"&&window.renderApp()};function Cn(){const o=window.activityModalState||{isEditing:!1,title:"",isStudy:!0,color:Le[0],icon:"📚"},e=o.isStudy!==void 0?o.isStudy===!0:!0;return`
    <div class="modal-overlay" id="modal-activity-editor" style="display: flex; backdrop-filter: blur(16px); z-index: 1050;" onclick="if(event.target === this || event.target.classList.contains('modal-overlay')){ window.closeActiveModal(); }">
      <div class="modal-card" style="max-width: 520px; max-height: 92vh; overflow-y: auto; background: rgba(15, 23, 42, 0.97); border: 1.5px solid rgba(56, 189, 248, 0.4); box-shadow: 0 20px 50px rgba(0,0,0,0.6); border-radius: 20px; padding: 22px;" onclick="event.stopPropagation();">
        
        <!-- Header -->
        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 14px; margin-bottom: 18px; display: flex; align-items: center; justify-content: space-between;">
          <div class="modal-title" style="color: #38bdf8; font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
            ${o.isEditing?"✏️ ویرایش فعالیت / درس":"✨ تعریف و افزودن فعالیت جدید"}
          </div>
          <button type="button" class="btn-close" aria-label="بستن" onclick="window.closeActiveModal();">✕</button>
        </div>

        <!-- 1. Title Input -->
        <div class="input-group" style="margin-bottom: 18px;">
          <label class="input-label" style="display: block; font-weight: bold; color: white; margin-bottom: 8px; font-size: 0.9rem;">
            🏷️ عنوان فعالیت یا درس:
          </label>
          <input type="text" id="activity-modal-title" class="form-input" 
                 value="${o.title||""}" 
                 placeholder="مثال: زیست‌شناسی، فیزیک، مطالعه آزاد، استراحت، ورزش، خواب..." 
                 style="width: 100%; font-size: 0.95rem; padding: 12px 14px; background: rgba(255,255,255,0.05); border: 1.5px solid rgba(255,255,255,0.15); border-radius: 12px; color: white; outline: none; transition: 0.2s;"
                 onkeydown="if(event.key==='Enter') window.saveActivityModal();"
                 autofocus />
        </div>

        <!-- 2. Activity Type Selector (علمی / غیرعلمی) -->
        <div class="input-group" style="margin-bottom: 12px;">
          <label class="input-label" style="display: block; font-weight: bold; color: white; margin-bottom: 8px; font-size: 0.9rem;">
            🎯 نوع فعالیت (دسته‌بندی):
          </label>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <!-- Scientific / Study Option -->
            <div id="act-type-study-btn" 
                 class="act-type-card ${e?"active-type-selected":""}" 
                 onclick="window.setActivityModalType(true)"
                 style="cursor: pointer; padding: 14px 12px; border-radius: 14px; border: 2px solid ${e?"#38bdf8":"rgba(255,255,255,0.1)"}; background: ${e?"rgba(56, 189, 248, 0.15)":"rgba(255,255,255,0.03)"}; ${e?"box-shadow: 0 0 14px rgba(56, 189, 248, 0.3);":""} transition: all 0.2s ease; text-align: right;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
                <span style="font-size: 1.4rem;">📚</span>
                <span style="width: 18px; height: 18px; border-radius: 50%; border: 2px solid ${e?"#38bdf8":"rgba(255,255,255,0.2)"}; display: flex; align-items: center; justify-content: center; background: ${e?"#38bdf8":"transparent"};">
                  ${e?'<span style="color: #0f172a; font-size: 0.75rem; font-weight: 900;">✓</span>':""}
                </span>
              </div>
              <strong style="display: block; font-size: 0.95rem; color: ${e?"#e0f2fe":"white"}; margin-bottom: 4px;">فعالیت علمی</strong>
              <span style="font-size: 0.75rem; color: ${e?"#7dd3fc":"var(--text-secondary)"}; line-height: 1.4; display: block;">
                مطالعه، تست، مرور، کلاس و آزمون
              </span>
            </div>

            <!-- Non-Scientific Option -->
            <div id="act-type-nonstudy-btn" 
                 class="act-type-card ${e?"":"active-type-selected"}" 
                 onclick="window.setActivityModalType(false)"
                 style="cursor: pointer; padding: 14px 12px; border-radius: 14px; border: 2px solid ${e?"rgba(255,255,255,0.1)":"#f59e0b"}; background: ${e?"rgba(255,255,255,0.03)":"rgba(245, 158, 11, 0.15)"}; ${e?"":"box-shadow: 0 0 14px rgba(245, 158, 11, 0.3);"} transition: all 0.2s ease; text-align: right;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
                <span style="font-size: 1.4rem;">☕</span>
                <span style="width: 18px; height: 18px; border-radius: 50%; border: 2px solid ${e?"rgba(255,255,255,0.2)":"#f59e0b"}; display: flex; align-items: center; justify-content: center; background: ${e?"transparent":"#f59e0b"};">
                  ${e?"":'<span style="color: #0f172a; font-size: 0.75rem; font-weight: 900;">✓</span>'}
                </span>
              </div>
              <strong style="display: block; font-size: 0.95rem; color: ${e?"white":"#fef3c7"}; margin-bottom: 4px;">فعالیت غیرعلمی</strong>
              <span style="font-size: 0.75rem; color: ${e?"var(--text-secondary)":"#fde68a"}; line-height: 1.4; display: block;">
                استراحت، خواب، ورزش و روزمره
              </span>
            </div>
          </div>

          <!-- Prominent Helper Guidance Box -->
          <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(217, 119, 6, 0.08) 100%); border: 1.5px solid rgba(245, 158, 11, 0.4); border-radius: 12px; padding: 12px 14px; margin-top: 12px; display: flex; align-items: flex-start; gap: 10px;">
            <span style="font-size: 1.1rem; flex-shrink: 0; line-height: 1.2;">💡</span>
            <div style="font-size: 0.8rem; line-height: 1.65; color: #fde68a; font-weight: 500;">
              <strong>نکته مهم:</strong> تنها فعالیت‌هایی که به عنوان «علمی» تعریف شوند، در محاسبه مجموع ساعت مطالعه، نمودارهای تحلیلی و تالار رقابت لحاظ می‌گردند.
            </div>
          </div>
        </div>

        <!-- 3. High-Contrast 24-Color Palette Selection -->
        <div class="input-group" style="margin-bottom: 18px;">
          <label class="input-label" style="display: block; font-weight: bold; color: white; margin-bottom: 8px; font-size: 0.9rem;">
            🎨 رنگ اختصاصی فعالیت (پالت ۲۴ تایی):
          </label>
          <div style="display: grid; grid-template-columns: repeat(8, 1fr); gap: 8px; background: rgba(0,0,0,0.3); padding: 12px; border-radius: 14px; border: 1px solid rgba(255,255,255,0.08);">
            ${Le.map((n,a)=>{const i=(o.color||"").toUpperCase()===n.toUpperCase()||!o.color&&a===0;return`
                <button type="button" 
                        class="act-color-btn" 
                        data-color="${n}"
                        onclick="window.setActivityModalColor('${n}')"
                        title="رنگ ${a+1}"
                        style="width: 100%; aspect-ratio: 1; border-radius: 50%; background: ${n}; border: 2.5px solid ${i?"#ffffff":"transparent"}; transform: ${i?"scale(1.18)":"scale(1)"}; ${i?"box-shadow: 0 0 10px rgba(255,255,255,0.6);":""} cursor: pointer; transition: transform 0.15s ease, border-color 0.15s ease; outline: none; padding: 0;">
                </button>
              `}).join("")}
          </div>
        </div>

        <!-- 4. Quick Emoji / Icon Selector -->
        <div class="input-group" style="margin-bottom: 22px;">
          <label class="input-label" style="display: block; font-weight: bold; color: white; margin-bottom: 8px; font-size: 0.9rem;">
            😀 نماد / آیکون (اختیاری):
          </label>
          <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 6px;">
            ${Uo.map(n=>{const a=o.icon===n;return`
                <button type="button" 
                        class="act-icon-btn" 
                        data-icon="${n}"
                        onclick="window.setActivityModalIcon('${n}')"
                        style="min-width: 38px; height: 38px; border-radius: 10px; background: ${a?"rgba(56, 189, 248, 0.2)":"rgba(255,255,255,0.03)"}; border: 1.5px solid ${a?"var(--primary-accent, #38bdf8)":"rgba(255,255,255,0.08)"}; font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.15s;">
                  ${n}
                </button>
              `}).join("")}
          </div>
        </div>

        <!-- Action Buttons -->
        <div style="display: flex; gap: 10px;">
          <button type="button" 
                  id="btn-save-activity-modal" 
                  class="btn-primary" 
                  onclick="window.saveActivityModal()"
                  style="flex: 2; padding: 13px; font-size: 0.95rem; font-weight: 800; background: linear-gradient(135deg, #10b981 0%, #059669 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; gap: 8px;">
            💾 ذخیره فعالیت
          </button>
          <button type="button" 
                  onclick="window.closeActivityModal()" 
                  class="glass-panel" 
                  style="flex: 1; padding: 13px; font-size: 0.9rem; color: var(--text-secondary); border-radius: 12px; cursor: pointer; text-align: center;">
            انصراف
          </button>
        </div>

      </div>
    </div>
  `}function In(){const o=typeof p<"u"&&typeof p.getStudyTargets=="function"?p.getStudyTargets():{dailyStudyGoalHours:8,dailyTargetHours:8,dailyTestGoalCount:150},e=o.dailyStudyGoalHours!=null?Number(o.dailyStudyGoalHours):o.dailyTargetHours!=null?Number(o.dailyTargetHours):8,t=o.dailyTestGoalCount!=null?Number(o.dailyTestGoalCount):150;return`
    <div class="modal-overlay" id="modal-daily-targets" style="backdrop-filter: blur(16px); background: rgba(0, 0, 0, 0.75); display: flex; align-items: center; justify-content: center; z-index: 99999; animation: fadeIn 0.2s ease;" onclick="if(event.target === this || event.target.classList.contains('modal-overlay')){ if(window.closeActiveModal) window.closeActiveModal(); else { window.appState.activeModal = null; if(window.renderApp) window.renderApp(); } }">
      <div class="modal-card glass-panel" style="max-width: 440px; width: 92%; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 20px; padding: 22px; text-align: right; direction: rtl; box-shadow: 0 20px 50px rgba(0,0,0,0.6);" onclick="event.stopPropagation();">
        
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 12px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <div style="width: 36px; height: 36px; border-radius: 10px; background: rgba(124, 58, 237, 0.2); border: 1px solid rgba(124, 58, 237, 0.35); display: flex; align-items: center; justify-content: center; font-size: 1.15rem;">
              🎯
            </div>
            <div>
              <h3 style="margin: 0; font-size: 1rem; font-weight: 800; color: #f8fafc;">ویرایش اهداف روزانه</h3>
              <span style="font-size: 0.72rem; color: #8e8e9c;">تنظیم تارگت ساعت مطالعه و تست روزانه</span>
            </div>
          </div>
          <button type="button" class="btn-close" onclick="if(window.closeActiveModal) window.closeActiveModal(); else { window.appState.activeModal = null; if(window.renderApp) window.renderApp(); }" style="background: none; border: none; color: #8e8e9c; font-size: 1.2rem; cursor: pointer; padding: 4px;">✕</button>
        </div>

        <!-- Info Tip -->
        <div style="background: rgba(124, 58, 237, 0.08); border: 1px solid rgba(124, 58, 237, 0.25); border-radius: 12px; padding: 10px 12px; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
          <span style="font-size: 1rem; flex-shrink: 0;">💡</span>
          <span style="font-size: 0.74rem; color: #c4b5fd; line-height: 1.6;">این اهداف مبنای محاسبه درصد پیشرفت و حلقه‌های پیشرفت در داشبورد هستند.</span>
        </div>

        <!-- Inputs Form -->
        <form id="form-daily-targets" onsubmit="event.preventDefault(); window.saveDailyTargets();">
          <div style="display: flex; flex-direction: column; gap: 14px; margin-bottom: 20px;">
            
            <!-- Study Hours Target Input -->
            <div style="background: #1f2029; border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 12px 14px;">
              <label style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <span style="font-size: 0.82rem; font-weight: 700; color: #e4e4e7; display: flex; align-items: center; gap: 6px;">
                  <span>⏱️</span>
                  <span>هدف ساعت مطالعه روزانه (ساعت):</span>
                </span>
                <span style="font-size: 0.7rem; color: #7c3aed; font-weight: 700;">پیش‌فرض: ۸ ساعت</span>
              </label>
              <input 
                type="number" 
                id="target-modal-daily-hours" 
                class="form-input" 
                value="${e}" 
                step="0.5" 
                min="0.5" 
                max="24"
                style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-size: 1.05rem; font-weight: 800; font-family: 'Outfit', sans-serif; background: #16171d; border: 1px solid rgba(124, 58, 237, 0.3); border-radius: 10px; color: #fff; text-align: center;" 
                required
              />
            </div>

            <!-- Test Count Target Input -->
            <div style="background: #1f2029; border: 1px solid rgba(255,255,255,0.06); border-radius: 14px; padding: 12px 14px;">
              <label style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px;">
                <span style="font-size: 0.82rem; font-weight: 700; color: #e4e4e7; display: flex; align-items: center; gap: 6px;">
                  <span>🎯</span>
                  <span>هدف تعداد تست روزانه:</span>
                </span>
                <span style="font-size: 0.7rem; color: #10b981; font-weight: 700;">پیش‌فرض: ۱۵۰ تست</span>
              </label>
              <input 
                type="number" 
                id="target-modal-daily-tests" 
                class="form-input" 
                value="${t}" 
                step="5" 
                min="0" 
                max="2000"
                style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-size: 1.05rem; font-weight: 800; font-family: 'Outfit', sans-serif; background: #16171d; border: 1px solid rgba(16, 185, 129, 0.3); border-radius: 10px; color: #fff; text-align: center;" 
                required
              />
            </div>

          </div>

          <!-- Action Buttons -->
          <div style="display: flex; gap: 10px;">
            <button 
              type="submit" 
              id="btn-save-daily-targets" 
              class="btn-primary" 
              style="flex: 2; height: 44px; background: #7c3aed; color: white; border: none; border-radius: 12px; font-size: 0.86rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px;"
            >
              <span>💾</span>
              <span>ذخیره اهداف جدید</span>
            </button>
            <button 
              type="button" 
              onclick="if(window.closeActiveModal) window.closeActiveModal(); else { window.appState.activeModal = null; if(window.renderApp) window.renderApp(); }" 
              style="flex: 1; height: 44px; background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; font-size: 0.82rem; font-weight: 700; cursor: pointer;"
            >
              انصراف
            </button>
          </div>
        </form>

      </div>
    </div>
  `}typeof window<"u"&&(window.openDailyTargetsModal=()=>{const o=typeof window.state<"u"&&window.state?window.state:window.appState;o&&(o.activeModal="dailyTargets"),window.appState&&window.appState!==o&&(window.appState.activeModal="dailyTargets"),typeof window.renderApp=="function"&&window.renderApp()},window.saveDailyTargets=()=>{const o=document.getElementById("target-modal-daily-hours"),e=document.getElementById("target-modal-daily-tests"),t=parseFloat(o==null?void 0:o.value)||8,n=parseInt(e==null?void 0:e.value)||150,i={...typeof p<"u"&&typeof p.getStudyTargets=="function"?p.getStudyTargets():{},dailyStudyGoalHours:t,dailyTargetHours:t,dailyTestGoalCount:n};if(typeof p<"u"&&typeof p.setStudyTargets=="function"?p.setStudyTargets(i):(localStorage.setItem("planex_study_targets",JSON.stringify(i)),localStorage.setItem("planex_last_modified",String(Date.now()))),typeof Je<"u"&&typeof Je.pushToCloud=="function"?Je.pushToCloud():typeof window.triggerActionDrivenPush=="function"&&window.triggerActionDrivenPush(0),window.showToast?window.showToast("✅ اهداف روزانه با موفقیت ذخیره شدند","success",2500):alert("✅ اهداف روزانه با موفقیت ذخیره شدند"),typeof window.closeActiveModal=="function")window.closeActiveModal();else{const r=typeof window.state<"u"&&window.state?window.state:window.appState;r&&(r.activeModal=null),window.appState&&window.appState!==r&&(window.appState.activeModal=null),typeof window.renderApp=="function"&&window.renderApp()}});const Ne=o=>String(o).replace(/\d/g,e=>"۰۱۲۳۴۵۶۷۸۹"[e]),Ge=o=>String(o??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Fo=[{id:"store_konkur_bio",title:"زیست‌شناسی کنکور",count:320,price:"به‌زودی"},{id:"store_eng_vocab",title:"لغات زبان انگلیسی کنکور",count:504,price:"به‌زودی"},{id:"store_chem_formula",title:"فرمول‌های شیمی",count:150,price:"به‌زودی"}],Se=window.flashcardsViewState||(window.flashcardsViewState={studyDeck:null,queue:[],index:0,flipped:!1,reviewed:0});function eo(){const o=p.getFlashcards()||[],e=Date.now(),t=new Map;return o.forEach(n=>{const a=n.deck||"عمومی";t.has(a)||t.set(a,{name:a,total:0,due:0,boxes:{1:0,2:0,3:0,4:0,5:0}});const i=t.get(a),r=Math.min(5,Math.max(1,n.box||1));i.total++,i.boxes[r]++,(!n.nextReviewDate||n.nextReviewDate<=e)&&i.due++}),Array.from(t.values())}function Ho(o){const e=Date.now(),t=(p.getFlashcards()||[]).filter(a=>o==="__all__"||(a.deck||"عمومی")===o),n=t.filter(a=>!a.nextReviewDate||a.nextReviewDate<=e);return(n.length?n:t).map(a=>a.id)}function Wo(o,e){const t=["#ef4444","#f97316","#eab308","#22c55e","#6366f1"];return`
    <div style="display:flex; gap:6px; margin-top:10px;">
      ${[1,2,3,4,5].map(n=>`
        <div style="flex:1; text-align:center;">
          <div style="height:34px; background:rgba(255,255,255,0.05); border-radius:8px; display:flex; align-items:flex-end; overflow:hidden;">
            <div style="width:100%; height:${e?Math.round(o[n]/e*100):0}%; background:${t[n-1]}; opacity:0.8;"></div>
          </div>
          <div style="font-size:0.62rem; color:#8e8e9c; margin-top:3px;">خانه ${Ne(n)}: ${Ne(o[n])}</div>
        </div>`).join("")}
    </div>`}function Yo(){const o=eo(),e=p.getLeitnerStats();return`
    <div style="max-width:720px; margin:0 auto; padding:16px;">
      <div style="display:flex; align-items:center; justify-content:space-between; gap:10px; margin:0 0 4px;">
        <h2 style="color:#f8fafc; font-size:1.2rem; font-weight:800; margin:0;">🧠 فلش‌کارت و جعبه لایتنر</h2>
        <button id="btn-fc-new-card" type="button" onclick="window.fcOpenNewCardModal()" style="flex-shrink:0; margin-inline-start:auto; background:linear-gradient(135deg,#22c55e,#16a34a); border:none; color:white; padding:8px 16px; border-radius:12px; font-size:0.82rem; font-weight:800; cursor:pointer; box-shadow:0 4px 14px rgba(34,197,94,0.3);">+ کارت جدید</button>
        <button id="btn-fc-back-to-tools" type="button" onclick="window.switchTab('tools')" style="flex-shrink:0; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#e4e4e7; padding:7px 14px; border-radius:12px; font-size:0.78rem; font-weight:700; cursor:pointer;">→ بازگشت</button>
      </div>
      <p style="color:#8e8e9c; font-size:0.78rem; margin:0 0 16px;">${Ne(e.total)} کارت • ${Ne(e.due)} آماده مرور • ${Ne(e.mastered)} تثبیت‌شده</p>

      <button onclick="window.fcStartStudy('__all__')" ${e.total?"":"disabled"}
        style="width:100%; padding:14px; border:none; border-radius:16px; background:linear-gradient(135deg,#6366f1,#a855f7); color:white; font-weight:800; font-size:0.95rem; cursor:pointer; margin-bottom:20px;">
        مرور کارت‌ها (همه دسته‌ها)
      </button>

      <h3 style="color:#cbd5e1; font-size:0.9rem; margin:0 0 10px;">دسته‌های من</h3>
      ${o.length===0?'<div style="color:#8e8e9c; font-size:0.8rem; padding:20px; text-align:center;">هنوز کارتی ندارید. از بخش ابزارها کارت اضافه کنید.</div>':o.map(t=>{const n=t.total?Math.round(t.boxes[5]/t.total*100):0;return`
        <div style="background:#16171d; border:1px solid rgba(255,255,255,0.06); border-radius:18px; padding:14px 16px; margin-bottom:10px;">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:10px;">
            <div>
              <div style="color:#f8fafc; font-weight:800; font-size:0.9rem;">${Ge(t.name)}</div>
              <div style="color:#8e8e9c; font-size:0.7rem; margin-top:2px;">${Ne(t.total)} کارت • ${Ne(t.due)} آماده مرور</div>
            </div>
            <button onclick="window.fcStartStudy(this.dataset.deck)" data-deck="${Ge(t.name)}"
              style="padding:8px 14px; border-radius:12px; border:1px solid rgba(167,139,250,0.4); background:rgba(167,139,250,0.15); color:#c4b5fd; font-weight:700; font-size:0.78rem; cursor:pointer;">مرور کارت‌ها</button>
          </div>
          <div style="margin-top:10px; height:6px; border-radius:4px; background:rgba(255,255,255,0.06); overflow:hidden;">
            <div style="width:${n}%; height:100%; background:linear-gradient(90deg,#22c55e,#6366f1);"></div>
          </div>
          <div style="font-size:0.65rem; color:#8e8e9c; margin-top:4px;">تسلط: ${Ne(n)}٪</div>
          ${Wo(t.boxes,t.total)}
        </div>`}).join("")}

      <h3 style="color:#cbd5e1; font-size:0.9rem; margin:20px 0 10px;">فروشگاه دسته‌ها</h3>
      ${Fo.map(t=>`
        <div style="background:#16171d; border:1px dashed rgba(255,255,255,0.1); border-radius:18px; padding:14px 16px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center; opacity:0.85;">
          <div>
            <div style="color:#f8fafc; font-weight:700; font-size:0.88rem;">🔒 ${Ge(t.title)}</div>
            <div style="color:#8e8e9c; font-size:0.7rem; margin-top:2px;">${Ne(t.count)} کارت</div>
          </div>
          <button disabled style="padding:8px 14px; border-radius:12px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.04); color:#8e8e9c; font-size:0.75rem;">${Ge(t.price)}</button>
        </div>`).join("")}
    </div>`}function qo(){const o=p.getFlashcards()||[],e=Se.queue[Se.index],t=o.find(i=>i.id==e),n=`
    <div style="display:flex; justify-content:space-between; align-items:center; padding:16px;">
      <button onclick="window.fcExitStudy()" style="background:none; border:none; color:#cbd5e1; font-size:1.3rem; cursor:pointer;">✕</button>
      <div style="color:#8e8e9c; font-size:0.8rem;">${t?`${Ne(Se.index+1)} / ${Ne(Se.queue.length)}`:""}</div>
    </div>`;if(!t)return`
      <div style="position:fixed; inset:0; z-index:9000; background:#0b0c10; display:flex; flex-direction:column;">
        ${n}
        <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#f8fafc; text-align:center; padding:20px;">
          <div style="font-size:3rem;">🎉</div>
          <div style="font-weight:800; margin-top:10px;">مرور تمام شد!</div>
          <div style="color:#8e8e9c; font-size:0.8rem; margin-top:4px;">${Ne(Se.reviewed)} کارت مرور شد.</div>
          <button onclick="window.fcExitStudy()" style="margin-top:20px; padding:12px 24px; border:none; border-radius:14px; background:#6366f1; color:white; font-weight:700; cursor:pointer;">بازگشت به دسته‌ها</button>
        </div>
      </div>`;const a="position:absolute; inset:0; backface-visibility:hidden; -webkit-backface-visibility:hidden; border-radius:24px; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:28px; text-align:center; line-height:1.9; overflow:auto;";return`
    <div style="position:fixed; inset:0; z-index:9000; background:#0b0c10; display:flex; flex-direction:column;">
      ${n}
      <div style="flex:1; display:flex; align-items:center; justify-content:center; padding:16px; perspective:1200px;">
        <div onclick="window.fcFlip()" style="position:relative; width:100%; max-width:520px; height:min(60vh,420px); cursor:pointer; transform-style:preserve-3d; transition:transform 0.6s; transform:rotateY(${Se.flipped?180:0}deg);">
          <div style="${a} background:#16171d; border:1px solid rgba(167,139,250,0.3);">
            <div style="font-size:0.7rem; color:#a78bfa; margin-bottom:12px;">${Ge(t.deck||"عمومی")} • خانه ${Ne(t.box||1)}</div>
            <div style="color:#f8fafc; font-size:1.1rem; font-weight:700;">${Ge(t.question)}</div>
            <div style="font-size:0.7rem; color:#8e8e9c; margin-top:18px;">برای دیدن پاسخ ضربه بزنید</div>
          </div>
          <div style="${a} background:#1a1530; border:1px solid rgba(34,197,94,0.35); transform:rotateY(180deg);">
            <div style="font-size:0.7rem; color:#22c55e; margin-bottom:12px;">پاسخ</div>
            <div style="color:#f8fafc; font-size:1rem;">${Ge(t.answer)}</div>
          </div>
        </div>
      </div>
      <div style="display:flex; gap:12px; padding:16px 16px 28px; max-width:552px; width:100%; margin:0 auto; box-sizing:border-box;">
        <button onclick="window.fcAnswer(false)" style="flex:1; padding:16px; border-radius:16px; border:1px solid rgba(239,68,68,0.4); background:rgba(239,68,68,0.15); color:#fca5a5; font-weight:800; font-size:0.95rem; cursor:pointer;">فراموش کردم</button>
        <button onclick="window.fcAnswer(true)" style="flex:1; padding:16px; border-radius:16px; border:1px solid rgba(34,197,94,0.4); background:rgba(34,197,94,0.15); color:#86efac; font-weight:800; font-size:0.95rem; cursor:pointer;">بلد بودم</button>
      </div>
    </div>`}function Vo(){return`<div id="flashcards-view">${Se.studyDeck?qo():Yo()}</div>`}function et(){const o=document.getElementById("flashcards-view");o?o.outerHTML=Vo():typeof window.renderApp=="function"&&window.renderApp()}window.fcStartStudy=function(o){Se.studyDeck=o,Se.queue=Ho(o),Se.index=0,Se.flipped=!1,Se.reviewed=0,et()};window.fcExitStudy=function(){Se.studyDeck=null,et()};window.fcFlip=function(){Se.flipped=!Se.flipped,et()};window.fcAnswer=function(o){const e=Se.queue[Se.index];if(e!==void 0){p.reviewFlashcard(e,o),Se.reviewed++,Se.index++,Se.flipped=!1;try{typeof window.triggerActionDrivenPush=="function"&&window.triggerActionDrivenPush()}catch{}}et()};window.updateLeitnerUI=window.updateLeitnerUI||function(){document.getElementById("flashcards-view")&&!Se.studyDeck&&et()};window.fcCloseNewCardModal=function(){const o=document.getElementById("fc-new-card-modal");o&&o.remove()};window.fcOpenNewCardModal=function(){window.fcCloseNewCardModal();const o=eo().map(a=>a.name),e="width:100%; box-sizing:border-box; background:#0b0c10; border:1px solid rgba(255,255,255,0.12); color:#f8fafc; border-radius:12px; padding:10px 12px; font-size:0.85rem; font-family:inherit; margin-bottom:12px;",t="display:block; color:#cbd5e1; font-size:0.75rem; font-weight:700; margin-bottom:6px;",n=document.createElement("div");n.id="fc-new-card-modal",n.style.cssText="position:fixed; inset:0; z-index:10000; background:rgba(0,0,0,0.65); display:flex; align-items:center; justify-content:center; padding:16px; direction:rtl;",n.innerHTML=`
    <form id="fc-new-card-form" style="width:100%; max-width:440px; background:#16171d; border:1px solid rgba(255,255,255,0.08); border-radius:20px; padding:18px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px;">
        <h3 style="margin:0; color:#f8fafc; font-size:1rem; font-weight:800;">افزودن فلش‌کارت جدید</h3>
        <button type="button" onclick="window.fcCloseNewCardModal()" style="background:none; border:none; color:#8e8e9c; font-size:1.2rem; cursor:pointer;">✕</button>
      </div>
      <label style="${t}">صورت سوال / مفهوم</label>
      <textarea id="fc-new-front" rows="3" required style="${e} resize:vertical;"></textarea>
      <label style="${t}">پاسخ / توضیح</label>
      <textarea id="fc-new-back" rows="3" required style="${e} resize:vertical;"></textarea>
      <label style="${t}">دسته (انتخاب یا نوشتن نام دسته)</label>
      <input id="fc-new-category" list="fc-deck-options" placeholder="عمومی" value="${Ge(o[0]||"")}" style="${e}">
      <datalist id="fc-deck-options">${o.map(a=>`<option value="${Ge(a)}"></option>`).join("")}</datalist>
      <div id="fc-new-error" style="color:#fca5a5; font-size:0.72rem; min-height:1em; margin-bottom:8px;"></div>
      <button type="submit" style="width:100%; padding:12px; border:none; border-radius:14px; background:linear-gradient(135deg,#6366f1,#a855f7); color:white; font-weight:800; font-size:0.9rem; cursor:pointer;">ذخیره کارت</button>
    </form>`,n.addEventListener("click",a=>{a.target===n&&window.fcCloseNewCardModal()}),n.querySelector("form").addEventListener("submit",a=>{a.preventDefault(),window.fcSubmitNewCard()}),document.body.appendChild(n),setTimeout(()=>{var a;return(a=document.getElementById("fc-new-front"))==null?void 0:a.focus()},30)};window.fcSubmitNewCard=function(){var a,i,r;const o=(((a=document.getElementById("fc-new-front"))==null?void 0:a.value)||"").trim(),e=(((i=document.getElementById("fc-new-back"))==null?void 0:i.value)||"").trim(),t=(((r=document.getElementById("fc-new-category"))==null?void 0:r.value)||"").trim()||"عمومی";if(!o||!e){const d=document.getElementById("fc-new-error");d&&(d.textContent="لطفاً سوال و پاسخ را وارد کنید.");return}if(p.addFlashcard(o,e,t)){try{typeof window.triggerActionDrivenPush=="function"&&window.triggerActionDrivenPush()}catch{}window.fcCloseNewCardModal(),typeof window.showToast=="function"&&window.showToast("کارت جدید اضافه شد","✅"),et()}};export{An as A,Sn as B,Mn as C,sn as D,xn as E,Cn as F,tn as G,on as H,vt as I,nn as J,an as K,rn as L,In as M,dn as N,ln as O,go as P,Ee as Q,yo as R,$o as S,pn as T,gn as U,un as V,ft as a,fn as b,it as c,p as d,yn as e,Bo as f,Je as g,Vo as h,No as i,en as j,co as k,S as l,mn as m,kn as n,_n as o,cn as p,hn as q,Eo as r,bn as s,ho as t,wo as u,wn as v,Dt as w,vn as x,$n as y,Tn as z};
