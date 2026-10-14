import{a as Ht}from"./articles-data-RaYRrJHw.js";import{E as go,r as fo}from"./view-question-bank-Cfu9mnX2.js";import{t as it}from"./traps-analysis-data-CBLkF90D.js";import{h as Wt}from"./vendor-html2canvas-BfYXEYrK.js";const ce="https://api.planexapp.ir";typeof window<"u"&&(window.API_BASE_URL=ce);const Je=["#EF4444","#F97316","#F59E0B","#EAB308","#84CC16","#10B981","#14B8A6","#06B6D4","#0EA5E9","#3B82F6","#6366F1","#8B5CF6","#D946EF","#EC4899","#F43F5E","#831843","#BE185D","#6D28D9","#1E40AF","#047857","#4D7C0F","#B45309","#C2410C","#475569"],qe=[{code:"cat_dakheli",title:"داخلی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#0EA5E9",icon:"🫀"},{code:"cat_jarahi",title:"جراحی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#EF4444",icon:"🔪"},{code:"cat_atfal",title:"اطفال",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#F59E0B",icon:"👶"},{code:"cat_zanan",title:"زنان و زایمان",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#EC4899",icon:"🌸"},{code:"cat_ravan",title:"روانپزشکی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#8B5CF6",icon:"🧠"},{code:"cat_ofooni",title:"عفونی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#10B981",icon:"🦠"},{code:"cat_neuro",title:"نورولوژی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#06B6D4",icon:"⚡"},{code:"cat_minor",title:"مینورها",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#6366F1",icon:"🩺"},{code:"cat_zist",title:"زیست‌شناسی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#14B8A6",icon:"🧬"},{code:"cat_shimi",title:"شیمی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#F97316",icon:"🧪"},{code:"cat_fizik",title:"فیزیک",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#3B82F6",icon:"⚛️"},{code:"cat_riazi",title:"ریاضی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#A855F7",icon:"📐"}],ct=[{code:"non_sports",title:"ورزش و تندرستی",icon:"🏃",color:"#f59e0b",group:"غیردرسی",isStudy:!1},{code:"non_rest",title:"استراحت و تفریح",icon:"☕",color:"#8b5cf6",group:"غیردرسی",isStudy:!1},{code:"non_sleep",title:"خواب و ریکاوری",icon:"😴",color:"#6366f1",group:"غیردرسی",isStudy:!1},{code:"non_meal",title:"میان‌وعده و تغذیه",icon:"🍎",color:"#10b981",group:"غیردرسی",isStudy:!1},{code:"non_personal",title:"کارهای شخصی",icon:"📱",color:"#ec4899",group:"غیردرسی",isStudy:!1}];function xe(n){const e=Math.max(0,Math.round(Number(n)||0)),t=a=>String(a).replace(/[0-9]/g,r=>"۰۱۲۳۴۵۶۷۸۹"[r]);if(e===0)return"۰ دقیقه";if(e<60)return`${t(e)} دقیقه`;const o=Math.floor(e/60),i=e%60;return i===0?`${t(o)} ساعت`:`${t(o)} ساعت و ${t(i)} دقیقه`}function Oe(n){return n?typeof n.isStudy=="boolean"?n.isStudy:n.group==="علمی"||["ع-س","ع-ک","ع-م","ع-غ"].includes(n.code)||typeof n.code=="string"&&(n.code.startsWith("cat_")||n.code.startsWith("cust_"))&&n.group!=="غیرعلمی":!1}function at(n=[]){const e=new Set((n||[]).map(o=>(o.color||"").toUpperCase()));for(const o of Je)if(!e.has(o.toUpperCase()))return o;const t=(n?n.length:0)%Je.length;return Je[t]}const Qe=[{id:"Q1",emoji:"🔴",title:"فوری و مهم",subtitle:"ضروری / بحرانی — همین حالا انجام بده",color:"#ef4444",softBg:"rgba(239, 68, 68, 0.10)",borderColor:"rgba(239, 68, 68, 0.38)"},{id:"Q2",emoji:"🔵",title:"مهم و غیرفوری",subtitle:"برنامه‌ریزی / رشد — زمان‌بندی کن",color:"#3b82f6",softBg:"rgba(59, 130, 246, 0.10)",borderColor:"rgba(59, 130, 246, 0.38)"},{id:"Q3",emoji:"🟡",title:"فوری و غیرمهم",subtitle:"پیگیری سریع — واگذار یا سریع تمام کن",color:"#f59e0b",softBg:"rgba(245, 158, 11, 0.10)",borderColor:"rgba(245, 158, 11, 0.38)"},{id:"Q4",emoji:"⚪",title:"غیرفوری و غیرمهم",subtitle:"کم‌اهمیت / تفریحی — حذف یا محدود کن",color:"#94a3b8",softBg:"rgba(148, 163, 184, 0.10)",borderColor:"rgba(148, 163, 184, 0.32)"}],xt="Q2";function lt(n){return Qe.find(e=>e.id===n)||Qe[1]}const wt=["Q1","Q2","Q3","Q4"],ht="Q2",$={WEEKS:"planex_weeks",CURRENT_WEEK_ID:"planex_current_week_id",HOURLY_LOGS:"planex_hourly_logs",CATEGORIES:"planex_categories",HABITS:"planex_habits",ROUTINES:"planex_routines",DAILY_PLANS:"planex_daily_plans",WEEKLY_GOALS:"planex_weekly_goals",STUDY_TARGETS:"planex_study_targets",EVALUATIONS:"planex_evaluations",INTERRUPTIONS:"planex_interruptions",REMINDERS:"planex_reminders",GAMIFICATION:"planex_gamification",GRATITUDE_NOTES:"planex_gratitude_notes",COUNTDOWN_EVENTS:"planex_countdown_events",USER_PROFILE:"planex_user_profile",CUSTOM_SUBJECTS:"planex_custom_subjects",RECORDED_TIMER:"planex_recorded_timer",ACTIVE_THEME:"planex_active_theme",FLASHCARDS:"planex_flashcards",USER_GROUP_DATA:"planex_user_group_data",USER_GROUPS:"planex_user_groups",ACTIVE_GROUP_CODE:"planex_active_group_code",PERSONAL_SYNC_TOKEN:"planex_personal_sync_token",LAST_PERSONAL_SYNC:"planex_last_personal_sync"};function _e(n){if(!n||typeof n!="string")return!0;const e=n.trim().replace(/\u200C/g," ").replace(/\s+/g," ");return["","کاربر","کاربر پلنکس","دانشجو","دانش آموز","دانش آموز پر تلاش","دانش آموز پرتلاش","دانش‌آموز پرتلاش","دانش‌آموز پر تلاش","داوطلب پرتلاش","داوطلب پر تلاش","x","X"].includes(e)||e.toLowerCase()==="x"}class yo{markModifiedAndSync(e=!1){const t=Date.now();try{localStorage.setItem("planex_last_modified",String(t)),localStorage.setItem("planex_has_unsynced_changes","true")}catch{}typeof window<"u"&&typeof window.triggerActionDrivenPush=="function"&&window.triggerActionDrivenPush(e?0:150)}exportAllDataJSON(){const e={},[t,o,i]=this.getTodayJalali();e._backup_metadata={app:"PlanEx Time Manager",version:"1.0.0",exportDate:`${t}/${o}/${i}`,exportedAt:new Date().toISOString()};for(let l=0;l<localStorage.length;l++){const c=localStorage.key(l);if(c&&(c.startsWith("planex_")||c.startsWith("theme_")||c.startsWith("app_")||c.startsWith("timer_")))try{e[c]=JSON.parse(localStorage.getItem(c))}catch{e[c]=localStorage.getItem(c)}}const a=localStorage.getItem("planex_user_avatar");a&&(e.planex_user_avatar=a);const r=localStorage.getItem("planex_last_modified");r&&(e.planex_last_modified=Number(r)||r);const d=localStorage.getItem($.DAILY_PLANS)||localStorage.getItem("planex_eisenhower")||localStorage.getItem("daily_plans");if(d)try{const l=JSON.parse(d);e[$.DAILY_PLANS]=l,e.planex_daily_plans=l,e.planex_eisenhower=l,e.daily_plans=l}catch{}const s=localStorage.getItem($.WEEKLY_GOALS)||localStorage.getItem("planex_weekly_goals")||localStorage.getItem("weekly_goals");if(s)try{const l=JSON.parse(s);e[$.WEEKLY_GOALS]=l,e.planex_weekly_goals=l,e.weekly_goals=l}catch{}return JSON.stringify(e,null,2)}importAllDataJSON(e,t=!1){var o,i,a;try{const r=typeof e=="string"?JSON.parse(e):e;if(typeof r!="object"||r===null)throw new Error("فرمت فایل پشتیبان معتبر نیست.");const d=this.getEffectiveUserName();Object.keys(r).forEach(s=>{if(s==="_backup_metadata")return;const l=r[s];if(l!=null){if((s===$.USER_GROUPS||s==="planex_user_groups"||s==="planex_my_groups"||s==="planex_my_rooms")&&Array.isArray(l)&&l.length===0){const c=this.getUserGroups();if(c&&c.length>0)return}if((s==="planex_recent_activity_sessions"||s==="planex_study_logs")&&Array.isArray(l))if(l.length===0)try{const c=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),f=JSON.parse(localStorage.getItem("planex_study_logs")||"[]");if(Array.isArray(c)&&c.length>0||Array.isArray(f)&&f.length>0)return}catch{}else try{const c=JSON.parse(localStorage.getItem(s)||"[]");if(Array.isArray(c)&&c.length>0){const f=new Map;[...c,...l].forEach(y=>{if(!y||typeof y!="object")return;const w=y.id||`${y.date||y.dateStr}_${y.startTime||y.timestamp||y.subject}_${y.duration||y.minutes}`;f.set(w,y)});const m=Array.from(f.values());localStorage.setItem(s,JSON.stringify(m));return}}catch{}if((s===$.DAILY_PLANS||s==="planex_daily_plans"||s==="planex_eisenhower"||s==="daily_plans")&&typeof l=="object"&&l!==null)try{if(t){localStorage.setItem($.DAILY_PLANS,JSON.stringify(l)),localStorage.setItem("planex_eisenhower",JSON.stringify(l));return}const c=localStorage.getItem($.DAILY_PLANS)||localStorage.getItem("planex_eisenhower")||"{}";let f={};try{f=JSON.parse(c)}catch{f={}}(typeof f!="object"||f===null)&&(f={});const m={...f};Object.keys(l).forEach(y=>{if(!Array.isArray(m[y]))m[y]=Array.isArray(l[y])?l[y]:[];else if(Array.isArray(l[y])){const w=new Map;m[y].forEach(u=>{u&&u.id&&w.set(String(u.id),u)}),l[y].forEach(u=>{u&&u.id&&!w.has(String(u.id))&&w.set(String(u.id),u)}),m[y]=Array.from(w.values())}}),localStorage.setItem($.DAILY_PLANS,JSON.stringify(m)),localStorage.setItem("planex_eisenhower",JSON.stringify(m));return}catch{}if((s===$.WEEKLY_GOALS||s==="planex_weekly_goals"||s==="weekly_goals")&&typeof l=="object"&&l!==null)try{if(t){localStorage.setItem($.WEEKLY_GOALS,JSON.stringify(l));return}const c=localStorage.getItem($.WEEKLY_GOALS)||"{}";let f={};try{f=JSON.parse(c)}catch{f={}}(typeof f!="object"||f===null)&&(f={});const m={...f};Object.keys(l).forEach(y=>{if(!Array.isArray(m[y]))m[y]=Array.isArray(l[y])?l[y]:[];else if(Array.isArray(l[y])){const w=new Map;m[y].forEach(u=>{u&&u.id&&w.set(String(u.id),u)}),l[y].forEach(u=>{u&&u.id&&!w.has(String(u.id))&&w.set(String(u.id),u)}),m[y]=Array.from(w.values())}}),localStorage.setItem($.WEEKLY_GOALS,JSON.stringify(m));return}catch{}if((s===$.HABITS||s===$.ROUTINES||s==="planex_habits"||s==="planex_routines")&&Array.isArray(l))try{if(t){if(this.saveRoutines(l,!1),r.planex_deleted_habit_ids)try{const g=typeof r.planex_deleted_habit_ids=="string"?r.planex_deleted_habit_ids:JSON.stringify(r.planex_deleted_habit_ids);localStorage.setItem("planex_deleted_habit_ids",g)}catch{}return}let c={};try{const g=localStorage.getItem("planex_deleted_habit_ids");if(g){const b=JSON.parse(g);Array.isArray(b)?b.forEach(v=>{c[String(v)]=1}):typeof b=="object"&&b!==null&&(c=b)}}catch{}if(r.planex_deleted_habit_ids)try{const g=typeof r.planex_deleted_habit_ids=="string"?JSON.parse(r.planex_deleted_habit_ids):r.planex_deleted_habit_ids;Array.isArray(g)?g.forEach(b=>{c[String(b)]=1}):typeof g=="object"&&g!==null&&(c={...c,...g}),localStorage.setItem("planex_deleted_habit_ids",JSON.stringify(c))}catch{}const f=g=>{if(!g)return!0;const b=String(g.id||""),v=String(g.title||"").trim(),A=c[b],k=c[v];if(A!==void 0||k!==void 0){const T=Math.max(Number(A||0),Number(k||0)),x=Number(g.updatedAt||g.updated_at||0);if(T===1||T===0||x<=T)return!0}return!1},m=this.getHabits()||[],y=Number(localStorage.getItem("planex_routines_updated_at")||0);if(l.length===0){if(m.length>0&&y>0)return;this.saveRoutines([],!1);return}const w=new Map;m.forEach(g=>{g&&(g.id||g.title)&&!f(g)&&w.set(String(g.id||g.title),g)}),l.forEach(g=>{var v,A;if(!g||typeof g!="object"||f(g))return;const b=String(g.id||g.title);if(w.has(b)){const k=w.get(b),T=Number(k.updatedAt||k.updated_at||0),x=Number(g.updatedAt||g.updated_at||0),M=T>x,P={},C=new Set([...Object.keys(k.completedDays||{}),...Object.keys(g.completedDays||{})]);for(const I of C)P[I]={...((v=k.completedDays)==null?void 0:v[I])||{},...((A=g.completedDays)==null?void 0:A[I])||{}};w.set(b,{...M?g:k,...M?k:g,completedDays:P})}else{const k=Number(g.updatedAt||g.updated_at||0);if(w.size>0&&y>0&&k<=y)return;w.set(b,g)}});const u=Array.from(w.values()).filter(g=>!f(g));this.saveRoutines(u,!1);return}catch{}(s==="planex_user_nickname"||s==="planex_nickname"||s==="planex_leaderboard_nickname")&&typeof l=="string"&&d&&_e(l)||(s===$.USER_PROFILE&&typeof l=="object"&&l!==null&&d&&_e(l.name)&&(l.name=d,l.nickname=d),(s===$.STUDY_TARGETS||s==="planex_study_targets")&&typeof l=="object"&&l!==null&&(l.dailyStudyGoalHours!=null&&l.dailyTargetHours==null?l.dailyTargetHours=l.dailyStudyGoalHours:l.dailyTargetHours!=null&&l.dailyStudyGoalHours==null&&(l.dailyStudyGoalHours=l.dailyTargetHours)),typeof l=="object"?localStorage.setItem(s,JSON.stringify(l)):localStorage.setItem(s,String(l)))}});try{const s=r.planex_user_avatar||r.avatar||(typeof r.planex_user_profile=="object"?((o=r.planex_user_profile)==null?void 0:o.avatar)||((i=r.planex_user_profile)==null?void 0:i.avatar_url):null)||(typeof r.planex_auth_user=="object"?(a=r.planex_auth_user)==null?void 0:a.avatar_url:null);if(s){localStorage.setItem("planex_user_avatar",s);const l=JSON.parse(localStorage.getItem($.USER_PROFILE)||"{}");l.avatar=s,l.avatar_url=s,l.photo=s,l.photoUrl=s,localStorage.setItem($.USER_PROFILE,JSON.stringify(l));const c=JSON.parse(localStorage.getItem("planex_auth_user")||"{}");c&&typeof c=="object"&&Object.keys(c).length>0&&(c.avatar_url=s,c.photo_url=s,c.avatar=s,localStorage.setItem("planex_auth_user",JSON.stringify(c)),localStorage.setItem("planex_user_account",JSON.stringify(c))),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("profileUpdated"))}}catch{}return this.hydrateAndSyncState(),!0}catch(r){throw console.error("Import failed:",r),r}}getEffectiveUserName(){try{const e=[localStorage.getItem("planex_user_nickname"),localStorage.getItem("planex_nickname"),localStorage.getItem("planex_leaderboard_nickname")];try{const t=JSON.parse(localStorage.getItem($.USER_PROFILE)||"{}");t&&(e.push(t.nickname),e.push(t.name),e.push(t.displayName))}catch{}try{const t=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}");t&&(e.push(t.full_name),e.push(t.name),e.push(t.nickname),e.push(t.first_name))}catch{}for(const t of e)if(t&&typeof t=="string"&&!_e(t))return t.trim()}catch{}return""}hydrateAndSyncState(){try{const e=this.getEffectiveUserName();if(e){localStorage.setItem("planex_user_nickname",e),localStorage.setItem("planex_nickname",e),localStorage.setItem("planex_leaderboard_nickname",e);try{const i=JSON.parse(localStorage.getItem($.USER_PROFILE)||"{}");(i.name!==e||i.nickname!==e)&&(i.name=e,i.nickname=e,localStorage.setItem($.USER_PROFILE,JSON.stringify(i)))}catch{}try{const i=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}");i&&typeof i=="object"&&Object.keys(i).length>0&&(i.name=e,i.full_name=e,i.nickname=e,localStorage.setItem("planex_auth_user",JSON.stringify(i)),localStorage.setItem("planex_user_account",JSON.stringify(i)))}catch{}}const t=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),o=JSON.parse(localStorage.getItem("planex_study_logs")||"[]");if(Array.isArray(t)&&Array.isArray(o)&&(t.length>0||o.length>0)){const i=new Map;[...t,...o].forEach(r=>{if(!r||typeof r!="object")return;const d=r.id||`${r.date||r.dateStr}_${r.startTime||r.timestamp||r.subject}_${r.duration||r.minutes}`;i.set(d,r)});const a=Array.from(i.values());a.sort((r,d)=>{const s=Number(r.timestamp||r.createdAt||0);return Number(d.timestamp||d.createdAt||0)-s}),localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(a)),localStorage.setItem("planex_study_logs",JSON.stringify(a))}this._breakdownMemoMap={}}catch(e){console.warn("[db] hydrateAndSyncState error:",e)}}constructor(){this.initDefaults(),this.hydrateAndSyncState()}gregorianToJalali(e,t,o){const i=[0,31,59,90,120,151,181,212,243,273,304,334];let a=t>2?e+1:e,r=355666+365*e+Math.floor((a+3)/4)-Math.floor((a+99)/100)+Math.floor((a+399)/400)+o+i[t-1],d=-1595+33*Math.floor(r/12053);r%=12053,d+=4*Math.floor(r/1461),r%=1461,r>365&&(d+=Math.floor((r-1)/365),r=(r-1)%365);let s=r<186?1+Math.floor(r/31):7+Math.floor((r-186)/30),l=1+(r<186?r%31:(r-186)%30);return[d,s,l]}jalaliToJdn(e,t,o){let i=e-(e>=0?474:473),a=474+i%2820;return o+(t<=7?(t-1)*31:(t-7)*30+186)+Math.floor((a*682-110)/2816)+(a-1)*365+Math.floor(i/2820)*1029983+1948320}jdnToJalali(e){let t=e-this.jalaliToJdn(475,1,1),o=Math.floor(t/1029983),i=t%1029983,a;if(i===1029982)a=2820;else{let c=Math.floor(i/366),f=i%366;a=Math.floor((2134*c+2816*f+2815)/1028522)+c+1}let r=474+2820*o+a,d=e-this.jalaliToJdn(r,1,1)+1,s,l;return d<=186?(s=Math.ceil(d/31),l=d-(s-1)*31):(s=Math.ceil((d-186)/30)+6,l=d-186-(s-7)*30),[r,s,l]}jdnToGregorian(e){let t=e+68569,o=Math.floor(4*t/146097);t=t-Math.floor((146097*o+3)/4);let i=Math.floor(4e3*(t+1)/1464001);t=t-Math.floor(1461*i/4)+31;let a=Math.floor(80*t/2447),r=t-Math.floor(2447*a/80);t=Math.floor(a/11);let d=a+2-12*t;return[100*(o-49)+i+t,d,r]}getJalaliDateTimestampRange(e=null){const t=this.normalizeJalaliDate(e||this.getTodayJalaliString()),o=t.split("/").map(Number),i=o[0]||1405,a=o[1]||1,r=o[2]||1,d=this.jalaliToJdn(i,a,r),[s,l,c]=this.jdnToGregorian(d),f=new Date(s,l-1,c,0,0,0,0),m=new Date(s,l-1,c,23,59,59,999);return{dateStr:t,startDate:f,endDate:m,startTimestamp:f.getTime(),endTimestamp:m.getTime()}}getTodayJalali(){const e=new Date;return this.gregorianToJalali(e.getFullYear(),e.getMonth()+1,e.getDate())}getTodayJdn(){const[e,t,o]=this.getTodayJalali();return this.jalaliToJdn(e,t,o)}getJalaliMonthLength(e,t){const o=this.jalaliToJdn(e,t,1);return(t===12?this.jalaliToJdn(e+1,1,1):this.jalaliToJdn(e,t+1,1))-o}getWeeksInMonth(e,t){const i=(this.jalaliToJdn(e,t,1)+2)%7;return Math.ceil((i+this.getJalaliMonthLength(e,t))/7)}initDefaults(){if(localStorage.getItem($.WEEKS)&&localStorage.removeItem($.WEEKS),!localStorage.getItem($.CATEGORIES))localStorage.setItem($.CATEGORIES,JSON.stringify(qe));else{let e=[];try{e=JSON.parse(localStorage.getItem($.CATEGORIES)||"[]"),Array.isArray(e)||(e=[])}catch{e=[]}e=e.filter(a=>a&&typeof a=="object"&&a.code);const t=["ب","ع-ک","ع-م","ع-س","ع-غ","م","خ","ت","ش","تـ"],o=["تمرکز و بازآفرینی","کلاس و آموزش","تمرین و کارگاه گروهی","مطالعه و پژوهش","مطالعه آزاد","امور شغلی و کسب‌وکار","خواب","تفریح و ورزش","امور شخصی","زمان تلف شده"];if(e.some(a=>t.includes(a.code)||o.includes(a.title))){const a=e.filter(d=>!t.includes(d.code)&&!o.includes(d.title)),r=[...qe];a.forEach(d=>{r.some(s=>s.code===d.code||s.title===d.title)||r.push(d)}),e=r}e.length===0&&(e=[...qe]),localStorage.setItem($.CATEGORIES,JSON.stringify(e))}localStorage.getItem($.CUSTOM_SUBJECTS)||localStorage.setItem($.CUSTOM_SUBJECTS,JSON.stringify([])),localStorage.getItem($.STUDY_TARGETS)||localStorage.setItem($.STUDY_TARGETS,JSON.stringify({dailyStudyGoalHours:8,weeklyStudyGoalHours:56,dailyTestGoalCount:150,weeklyTestGoalCount:1e3})),localStorage.getItem($.USER_PROFILE)||localStorage.setItem($.USER_PROFILE,JSON.stringify({name:"",major:"",targetField:""})),localStorage.getItem($.COUNTDOWN_EVENTS)||localStorage.setItem($.COUNTDOWN_EVENTS,JSON.stringify([{id:1,title:"کنکور سراسری ۱۴۰۵",jy:1405,jm:5,jd:29}])),localStorage.getItem($.GAMIFICATION)||localStorage.setItem($.GAMIFICATION,JSON.stringify({xp:0,level:1,streak:0,lastLogin:Date.now()})),localStorage.getItem($.REMINDERS)||localStorage.setItem($.REMINDERS,JSON.stringify([])),localStorage.getItem($.INTERRUPTIONS)||localStorage.setItem($.INTERRUPTIONS,JSON.stringify([])),this.purgeMockAndFutureData()}purgeMockAndFutureData(){try{const[e,t,o]=this.getTodayJalali(),i=this.jalaliToJdn(e,t,o),a=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]");if(Array.isArray(a)){const d=a.filter(s=>{if(!s||typeof s!="object")return!1;if(s.dateStr||s.date){const l=s.dateStr||s.date,c=String(l).split("/").map(Number);if(c.length===3&&!isNaN(c[0])&&!isNaN(c[1])&&!isNaN(c[2])&&this.jalaliToJdn(c[0],c[1],c[2])>i)return!1}return!(s.id&&typeof s.id=="string"&&(s.id.startsWith("mock_")||s.id.startsWith("dummy_")||s.id.startsWith("seed_")))});localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(d))}const r=JSON.parse(localStorage.getItem($.RECORDED_TIMER)||"{}");if(typeof r=="object"&&r!==null){const d=new Date().toISOString().slice(0,10);let s=!1;Object.keys(r).forEach(l=>{l>d&&(delete r[l],s=!0)}),s&&localStorage.setItem($.RECORDED_TIMER,JSON.stringify(r))}}catch(e){console.warn("purgeMockAndFutureData error:",e)}}getCurrentWeekStartDate(e=new Date){const t=new Date(e),o=(t.getDay()+1)%7,i=new Date(t.getFullYear(),t.getMonth(),t.getDate()-o);return i.setHours(0,0,0,0),i}getLiveCurrentWeekObject(e=new Date){const t=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],o=["هفته اول","هفته دوم","هفته سوم","هفته چهارم","هفته پنجم","هفته ششم"],i=["شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه"],a=this.getCurrentWeekStartDate(e),r=new Date(a.getFullYear(),a.getMonth(),a.getDate()+6),[d,s,l]=this.gregorianToJalali(a.getFullYear(),a.getMonth()+1,a.getDate()),[c,f,m]=this.gregorianToJalali(r.getFullYear(),r.getMonth()+1,r.getDate()),y=this.getJalaliWeekNumber(d,s,l),w=`${d}_${s}_${y}`,u=t[s-1],g=t[f-1],b=`${l} ${u} تا ${m} ${g}`,v=s>=7?d:d-1,A=v+1,k=`${v}-${A}`,T=[],x=this.getTodayJalaliString();for(let M=0;M<7;M++){const P=new Date(a.getFullYear(),a.getMonth(),a.getDate()+M),[C,I,R]=this.gregorianToJalali(P.getFullYear(),P.getMonth()+1,P.getDate()),E=`${C}/${String(I).padStart(2,"0")}/${String(R).padStart(2,"0")}`,j=this.normalizeJalaliDate(E)===x,J=this.getStudyMinutesByDate(E),G=this.getDailyTestCount(E);T.push({dayIndex:M,dayName:i[M],dateStr:E,dayOfMonth:R,monthName:t[I-1],year:C,monthIdx:I,isToday:j,studyMinutes:J,totalStudyMinutes:J,testsCount:G,testCount:G})}return{id:w,year:d,monthIdx:s,weekNum:y,month:u,weekNumber:o[y-1]||`هفته ${y}`,academicYear:k,startDate:`${l} ${u}`,endDate:`${m} ${g}`,dateRange:b,isCurrentWeek:!0,status:"current",days:T}}getWeekObject(e,t,o){const i=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],a=["هفته اول","هفته دوم","هفته سوم","هفته چهارم","هفته پنجم","هفته ششم"],r=G=>String(G).replace(/[0-9]/g,L=>"۰۱۲۳۴۵۶۷۸۹"[L]),d=["شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه"],s=this.jalaliToJdn(e,t,1),l=(s+2)%7,f=s-l+(o-1)*7,m=f+6,y=this.getTodayJdn(),w=y>=f&&y<=m;let u="current";y>m?u="past":y<f&&(u="future");const[g,b,v]=this.jdnToJalali(f),[A,k,T]=this.jdnToJalali(m),x=i[b-1],M=i[k-1],P=`${v} ${x} تا ${T} ${M}`,C=`${e}_${t}_${o}`,I=t>=7?e:e-1,R=I+1,E=`${r(I)}-${r(R)}`,j=[],J=this.getTodayJalaliString();for(let G=0;G<7;G++){const L=f+G;let F="",Y=e,Q=t,Z=1;try{[Y,Q,Z]=this.jdnToJalali(L),F=`${Y}/${String(Q).padStart(2,"0")}/${String(Z).padStart(2,"0")}`}catch{}const N=F?this.getStudyMinutesByDate(F):0,q=F?this.getDailyTestCount(F):0,W=F?this.normalizeJalaliDate(F)===J:!1;j.push({dayIndex:G,dayName:d[G],dateStr:F,dayOfMonth:Z,monthName:i[Q-1],year:Y,monthIdx:Q,isToday:W,studyMinutes:N,totalStudyMinutes:N,testsCount:q,testCount:q})}return{id:C,year:e,monthIdx:t,weekNum:o,month:i[t-1],weekNumber:a[o-1]||`هفته ${o}`,academicYear:E,startDate:`${v} ${x}`,endDate:`${T} ${M}`,dateRange:P,isCurrentWeek:w,status:u,days:j}}saveCurrentWeek(e){if(!(!e||!e.id))try{const t=JSON.parse(localStorage.getItem("planex_week_data")||"{}");t[e.id]=e,localStorage.setItem("planex_week_data",JSON.stringify(t));const o=JSON.parse(localStorage.getItem($.WEEKS)||"{}");o[e.id]=e,localStorage.setItem($.WEEKS,JSON.stringify(o))}catch(t){console.error("Error in saveCurrentWeek:",t)}}getJalaliWeekNumber(e,t,o){const i=this.jalaliToJdn(e,t,1),a=(i+2)%7,r=i-a,s=this.jalaliToJdn(e,t,o)-r,l=Math.floor(s/7)+1;return Math.min(this.getWeeksInMonth(e,t),Math.max(1,l))}getTodayWeekKey(){const[e,t,o]=this.getTodayJalali(),i=this.getJalaliWeekNumber(e,t,o);return`${e}_${t}_${i}`}getWeeks(){const e=this.getCurrentWeek(),t=[],o=this.getWeeksInMonth(e.year,e.monthIdx);for(let i=1;i<=o;i++)t.push(this.getWeekObject(e.year,e.monthIdx,i));return t}getCurrentWeek(e=new Date){const t=localStorage.getItem("planex_active_week_key");if(t){const o=t.split("_");if(o.length===3){const i=parseInt(o[0]),a=parseInt(o[1]),r=parseInt(o[2]);if(!isNaN(i)&&!isNaN(a)&&!isNaN(r)&&a>=1&&a<=12&&r>=1&&r<=this.getWeeksInMonth(i,a))return this.getWeekObject(i,a,r)}}return this.getLiveCurrentWeekObject(e)}setCurrentWeekKey(e){localStorage.setItem("planex_active_week_key",e),localStorage.setItem($.CURRENT_WEEK_ID,e)}setCurrentWeek(e){this.setCurrentWeekKey(e)}goToPrevWeek(){const e=this.getCurrentWeek();let t=e.year,o=e.monthIdx,i=e.weekNum;i>1?i--:(o>1?o--:(o=12,t--),i=this.getWeeksInMonth(t,o)),this.setCurrentWeekKey(`${t}_${o}_${i}`)}goToNextWeek(){const e=this.getCurrentWeek();let t=e.year,o=e.monthIdx,i=e.weekNum;i<this.getWeeksInMonth(t,o)?i++:(i=1,o<12?o++:(o=1,t++)),this.setCurrentWeekKey(`${t}_${o}_${i}`)}resetToCurrentWeek(){this.setCurrentWeekKey(this.getTodayWeekKey())}hasDataForWeek(e){const t=this.getHourlyLogs(e);if(Object.keys(t).length>0)return!0;const o=this.getDailyPlans(e);if(o&&o.length>0)return!0;const i=this.getWeeklyGoals(e);return!!(i&&Object.keys(i).length>0)}deleteWeek(e){let t=this.getWeeks();t=t.filter(o=>o.id!=e),localStorage.setItem($.WEEKS,JSON.stringify(t)),localStorage.getItem($.CURRENT_WEEK_ID)==e&&t.length>0&&localStorage.setItem($.CURRENT_WEEK_ID,t[0].id.toString())}getHourlyLogs(e){return JSON.parse(localStorage.getItem($.HOURLY_LOGS)||"{}")[e]||{}}setHourlyLog(e,t,o,i,a=null,r=null,d=0,s=null,l=null,c=0){const f=JSON.parse(localStorage.getItem($.HOURLY_LOGS)||"{}");f[e]||(f[e]={});const m=`${t}_${o}`;!i||i==="-"?delete f[e][m]:f[e][m]={categoryCode:i,note:a||"",subject:r||"",testCount:parseInt(d)||0,studyMethod:s||"",description:l||"",rating:parseInt(c)||0,updatedAt:Date.now()},localStorage.setItem($.HOURLY_LOGS,JSON.stringify(f))}getCategories(){try{const e=JSON.parse(localStorage.getItem($.CATEGORIES)||"[]");if(!Array.isArray(e)||e.length===0)return qe;const t=e.filter(o=>o&&typeof o=="object"&&o.code);return t.length>0?t:qe}catch{return qe}}getNextCategoryColor(){return at(this.getCategories())}addCategory(e,t,o="علمی",i=null,a="",r="📚",d=!0){const s=this.getCategories(),l=i||at(s),c=typeof d=="boolean"?d:o==="علمی",f={code:e||"cust_"+Date.now(),title:(t||"").trim(),group:o||(c?"علمی":"غیرعلمی"),isStudy:c,color:l,recommendedTarget:a||"",icon:r||(c?"📚":"☕")};return s.push(f),localStorage.setItem($.CATEGORIES,JSON.stringify(s)),f}saveCategory(e){let t=this.getCategories();const o=e.isStudy!==void 0?!!e.isStudy:e.group==="علمی",i=e.code||"cust_"+Date.now(),a=t.findIndex(d=>d.code===i),r={code:i,title:(e.title||"").trim(),group:e.group||(o?"علمی":"غیرعلمی"),isStudy:o,color:e.color||at(t),recommendedTarget:e.recommendedTarget||"",icon:e.icon||(o?"📚":"☕")};return a>=0?t[a]={...t[a],...r}:t.push(r),localStorage.setItem($.CATEGORIES,JSON.stringify(t)),r}isCategoryStudy(e){if(!e)return!1;if(typeof e=="object")return Oe(e);const o=this.getCategories().find(i=>i.code===e);return Oe(o)}updateCategoryIcon(e,t){const o=this.getCategories(),i=o.find(a=>a.code===e);i&&(i.icon=t,localStorage.setItem($.CATEGORIES,JSON.stringify(o)))}deleteCategory(e){try{let t=this.getCategories();return t=t.filter(o=>o&&o.code!==e),t.length===0&&(t=[...qe]),localStorage.setItem($.CATEGORIES,JSON.stringify(t)),t}catch{return qe}}getNonStudyCategories(){try{const e=JSON.parse(localStorage.getItem("planex_deleted_nonstudy_codes")||"[]"),t=JSON.parse(localStorage.getItem("planex_custom_nonstudy_categories")||"[]"),o=Array.isArray(t)?t.filter(r=>r&&typeof r=="object"&&r.code):[],i=new Map;ct.forEach(r=>i.set(r.code,r)),o.forEach(r=>i.set(r.code,r));const a=Array.from(i.values()).filter(r=>r&&!e.includes(r.code));return a.length>0?a:ct}catch{return ct}}addNonStudyCategory(e,t="☕",o="#f59e0b"){try{const i=JSON.parse(localStorage.getItem("planex_custom_nonstudy_categories")||"[]"),r={code:"non_cust_"+Date.now().toString(36)+Math.random().toString(36).substr(2,4),title:String(e).trim(),icon:t||"☕",color:o||"#f59e0b",group:"غیردرسی",isStudy:!1};return i.push(r),localStorage.setItem("planex_custom_nonstudy_categories",JSON.stringify(i)),r}catch{return{code:"non_"+Date.now(),title:e,icon:"☕",color:"#f59e0b",isStudy:!1}}}deleteNonStudyCategory(e){try{let t=JSON.parse(localStorage.getItem("planex_custom_nonstudy_categories")||"[]");Array.isArray(t)&&(t=t.filter(i=>i&&i.code!==e),localStorage.setItem("planex_custom_nonstudy_categories",JSON.stringify(t)));let o=JSON.parse(localStorage.getItem("planex_deleted_nonstudy_codes")||"[]");return o.includes(e)||(o.push(e),localStorage.setItem("planex_deleted_nonstudy_codes",JSON.stringify(o))),this.getNonStudyCategories()}catch{return ct}}getCustomSubjects(){return JSON.parse(localStorage.getItem($.CUSTOM_SUBJECTS)||"[]")}addCustomSubject(e){const t=this.getCustomSubjects();t.includes(e)||(t.push(e),localStorage.setItem($.CUSTOM_SUBJECTS,JSON.stringify(t)))}deleteCustomSubject(e){let t=this.getCustomSubjects();t=t.filter(o=>o!==e),localStorage.setItem($.CUSTOM_SUBJECTS,JSON.stringify(t))}getUniqueLoggedTopics(e=null){const t=new Set;try{const o=JSON.parse(localStorage.getItem($.HOURLY_LOGS)||"{}");Object.values(o).forEach(r=>{r&&typeof r=="object"&&Object.values(r).forEach(d=>{if(d&&d.subject&&(!e||d.categoryCode===e)){const s=String(d.subject).trim();s&&t.add(s)}})});const i=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]");Array.isArray(i)&&i.forEach(r=>{if(r&&r.subject&&(!e||r.categoryCode===e)){const d=String(r.subject).trim();d&&t.add(d)}});const a=this.getCustomSubjects();Array.isArray(a)&&a.forEach(r=>{const d=String(r).trim();d&&t.add(d)})}catch{}return Array.from(t)}getRoutines(){return this.getHabits()}saveRoutines(e,t=!1){if(!Array.isArray(e))return[];try{localStorage.setItem($.HABITS,JSON.stringify(e)),localStorage.setItem($.ROUTINES,JSON.stringify(e));const o=Date.now();localStorage.setItem("planex_routines_updated_at",String(o)),localStorage.setItem("planex_last_modified",String(o))}catch(o){console.error("Error saving routines:",o)}return typeof window<"u"&&typeof window.triggerActionDrivenPush=="function"&&window.triggerActionDrivenPush(t?0:150),e}getHabits(){let e=localStorage.getItem($.HABITS)||localStorage.getItem($.ROUTINES),t=[];try{t=JSON.parse(e||"[]"),Array.isArray(t)||(t=[])}catch{t=[]}let o=!1;const i=new Set;return t.forEach((a,r)=>{!a||typeof a!="object"||((!a.id||i.has(a.id))&&(a.id=Date.now().toString()+"_"+r+"_"+Math.random().toString(36).substr(2,9),o=!0),i.add(a.id))}),o&&(localStorage.setItem($.HABITS,JSON.stringify(t)),localStorage.setItem($.ROUTINES,JSON.stringify(t))),t}addHabit(e,t="روزانه",o="08:00",i=null){const a=this.getHabits();let r=i,d=String(e||"").trim();const s=d.match(new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Presentation}|\\uD83C[\\uDF00-\\uDFFF]|\\uD83D[\\uDC00-\\uDE4F]|\\uD83E[\\uDD00-\\uDDFF]|\\uD83D[\\uDE80-\\uDEFF]|[\\u2600-\\u27BF])\\s*","u"));s&&(r||(r=s[1]),d=d.substring(s[0].length).trim()),r||(r="✨");try{const f=localStorage.getItem("planex_deleted_habit_ids");if(f){let m=JSON.parse(f),y=!1;typeof m=="object"&&m!==null&&(d&&m[d]&&(delete m[d],y=!0),e&&m[e]&&(delete m[e],y=!0),y&&localStorage.setItem("planex_deleted_habit_ids",JSON.stringify(m)))}}catch{}const l=Date.now(),c={id:l.toString()+"_"+a.length+"_"+Math.random().toString(36).substr(2,9),title:d||e,emoji:r,frequency:t,targetTime:o,daysCompleted:[!1,!1,!1,!1,!1,!1,!1],completedDays:{},updatedAt:l};return a.push(c),this.saveRoutines(a),c}updateHabit(e,t={}){const o=this.getHabits(),i=o.find(a=>a.id==e||String(a.id)===String(e));if(i){if(t.title!==void 0){let a=String(t.title).trim();const r=a.match(new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Presentation}|\\uD83C[\\uDF00-\\uDFFF]|\\uD83D[\\uDC00-\\uDE4F]|\\uD83E[\\uDD00-\\uDDFF]|\\uD83D[\\uDE80-\\uDEFF]|[\\u2600-\\u27BF])\\s*","u"));r&&!t.emoji&&(t.emoji=r[1],a=a.substring(r[0].length).trim()),i.title=a||t.title}return t.emoji!==void 0&&(i.emoji=t.emoji),t.frequency!==void 0&&(i.frequency=t.frequency),t.targetTime!==void 0&&(i.targetTime=t.targetTime),i.updatedAt=Date.now(),this.saveRoutines(o),i}return null}toggleHabitDay(e,t){const o=this.getHabits(),i=o.find(a=>a.id==e);i&&(i.daysCompleted||(i.daysCompleted=[!1,!1,!1,!1,!1,!1,!1]),i.daysCompleted[t]=!i.daysCompleted[t],i.updatedAt=Date.now(),this.saveRoutines(o))}cycleHabitDay(e,t,o){const i=this.getHabits(),a=i.find(r=>r.id==e||String(r.id)===String(e));if(a){a.completedDays||(a.completedDays={}),a.completedDays[t]||(a.completedDays[t]={});let r=a.completedDays[t][o]||0;return r=(r+1)%3,a.completedDays[t][o]=r,a.updatedAt=Date.now(),this.saveRoutines(i),r}return 0}deleteHabit(e){let t=this.getHabits();const o=t.find(i=>i.id==e||String(i.id)===String(e));t=t.filter(i=>i.id!=e&&String(i.id)!==String(e));try{const i=Date.now();let a={};const r=localStorage.getItem("planex_deleted_habit_ids");if(r){const d=JSON.parse(r);Array.isArray(d)?d.forEach(s=>{a[String(s)]=i}):typeof d=="object"&&d!==null&&(a=d)}e&&(a[String(e)]=i),o&&o.title&&(a[String(o.title).trim()]=i),localStorage.setItem("planex_deleted_habit_ids",JSON.stringify(a)),localStorage.setItem("planex_routines_updated_at",String(i))}catch{}this.saveRoutines(t,!0),typeof window<"u"&&typeof window.dispatchEvent=="function"&&(window.dispatchEvent(new CustomEvent("routine-deleted",{detail:{habitId:e,immediate:!0}})),window.dispatchEvent(new CustomEvent("routines-updated",{detail:{immediate:!0}})))}getDailyPlans(e){try{let t=localStorage.getItem($.DAILY_PLANS);t||(t=localStorage.getItem("planex_eisenhower")||localStorage.getItem("daily_plans"));const o=JSON.parse(t||"{}");return typeof o!="object"||o===null?[]:(Array.isArray(o[e])?o[e]:[]).map(a=>({...a,priority:wt.includes(a.priority)?a.priority:ht}))}catch{return[]}}addDailyPlan(e,t,o,i=ht){let a={};try{const l=localStorage.getItem($.DAILY_PLANS)||localStorage.getItem("planex_eisenhower")||"{}";a=JSON.parse(l),(typeof a!="object"||a===null)&&(a={})}catch{a={}}Array.isArray(a[e])||(a[e]=[]);const r=wt.includes(i)?i:ht,s={id:`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,dayIndex:t,text:String(o).trim(),isDone:!1,priority:r,createdAt:Date.now()};a[e].push(s);try{localStorage.setItem($.DAILY_PLANS,JSON.stringify(a)),localStorage.setItem("planex_eisenhower",JSON.stringify(a)),localStorage.setItem("daily_plans",JSON.stringify(a))}catch(l){console.error("[db] Error saving daily plans:",l)}return this.markModifiedAndSync(!0),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("daily-plans-updated",{detail:{weekId:e,plan:s,immediate:!0}})),s}setDailyPlanPriority(e,t,o){if(!wt.includes(o))return!1;let i={};try{const r=localStorage.getItem($.DAILY_PLANS)||localStorage.getItem("planex_eisenhower")||"{}";i=JSON.parse(r),(typeof i!="object"||i===null)&&(i={})}catch{i={}}if(!i[e])return!1;const a=i[e].find(r=>r.id==t||String(r.id)===String(t));if(!a)return!1;a.priority=o;try{localStorage.setItem($.DAILY_PLANS,JSON.stringify(i)),localStorage.setItem("planex_eisenhower",JSON.stringify(i)),localStorage.setItem("daily_plans",JSON.stringify(i))}catch{}return this.markModifiedAndSync(!0),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("daily-plans-updated",{detail:{weekId:e,planId:t,priority:o,immediate:!0}})),!0}toggleDailyPlan(e,t){let o={};try{const a=localStorage.getItem($.DAILY_PLANS)||localStorage.getItem("planex_eisenhower")||"{}";o=JSON.parse(a),(typeof o!="object"||o===null)&&(o={})}catch{o={}}let i=null;if(Array.isArray(o[e])&&(i=o[e].find(a=>a.id==t||String(a.id)===String(t))),!i){for(const a of Object.keys(o))if(Array.isArray(o[a])&&(i=o[a].find(r=>r.id==t||String(r.id)===String(t)),i))break}if(i){i.isDone=!i.isDone,i.updatedAt=Date.now();try{localStorage.setItem($.DAILY_PLANS,JSON.stringify(o)),localStorage.setItem("planex_eisenhower",JSON.stringify(o)),localStorage.setItem("daily_plans",JSON.stringify(o))}catch{}return this.markModifiedAndSync(!0),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("daily-plans-updated",{detail:{weekId:e,planId:t,isDone:i.isDone,immediate:!0}})),!0}return!1}deleteDailyPlan(e,t){let o={};try{const i=localStorage.getItem($.DAILY_PLANS)||localStorage.getItem("planex_eisenhower")||"{}";o=JSON.parse(i),(typeof o!="object"||o===null)&&(o={})}catch{o={}}Array.isArray(o[e])&&(o[e]=o[e].filter(i=>i.id!=t&&String(i.id)!==String(t)));for(const i of Object.keys(o))Array.isArray(o[i])&&(o[i]=o[i].filter(a=>a.id!=t&&String(a.id)!==String(t)));try{localStorage.setItem($.DAILY_PLANS,JSON.stringify(o)),localStorage.setItem("planex_eisenhower",JSON.stringify(o)),localStorage.setItem("daily_plans",JSON.stringify(o))}catch{}this.markModifiedAndSync(!0),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("daily-plans-updated",{detail:{weekId:e,planId:t,deleted:!0,immediate:!0}}))}getWeeklyGoals(e){try{let t=localStorage.getItem($.WEEKLY_GOALS);t||(t=localStorage.getItem("planex_weekly_goals")||localStorage.getItem("weekly_goals"));const o=JSON.parse(t||"{}");return typeof o!="object"||o===null?[]:Array.isArray(o[e])?o[e]:[]}catch{return[]}}addWeeklyGoal(e,t){let o={};try{const a=localStorage.getItem($.WEEKLY_GOALS)||localStorage.getItem("planex_weekly_goals")||"{}";o=JSON.parse(a),(typeof o!="object"||o===null)&&(o={})}catch{o={}}Array.isArray(o[e])||(o[e]=[]);const i={id:Date.now().toString(),text:String(t).trim(),isDone:!1,createdAt:Date.now()};o[e].push(i);try{localStorage.setItem($.WEEKLY_GOALS,JSON.stringify(o)),localStorage.setItem("planex_weekly_goals",JSON.stringify(o)),localStorage.setItem("weekly_goals",JSON.stringify(o))}catch{}return this.markModifiedAndSync(!0),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("weekly-goals-updated",{detail:{weekId:e,item:i,immediate:!0}})),i}toggleWeeklyGoal(e,t){let o={};try{const a=localStorage.getItem($.WEEKLY_GOALS)||localStorage.getItem("planex_weekly_goals")||"{}";o=JSON.parse(a),(typeof o!="object"||o===null)&&(o={})}catch{o={}}let i=null;if(Array.isArray(o[e])&&(i=o[e].find(a=>a.id==t||String(a.id)===String(t))),!i){for(const a of Object.keys(o))if(Array.isArray(o[a])&&(i=o[a].find(r=>r.id==t||String(r.id)===String(t)),i))break}if(i){i.isDone=!i.isDone,i.updatedAt=Date.now();try{localStorage.setItem($.WEEKLY_GOALS,JSON.stringify(o)),localStorage.setItem("planex_weekly_goals",JSON.stringify(o)),localStorage.setItem("weekly_goals",JSON.stringify(o))}catch{}return this.markModifiedAndSync(!0),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("weekly-goals-updated",{detail:{weekId:e,goalId:t,isDone:i.isDone,immediate:!0}})),!0}return!1}deleteWeeklyGoal(e,t){let o={};try{const a=localStorage.getItem($.WEEKLY_GOALS)||localStorage.getItem("planex_weekly_goals")||"{}";o=JSON.parse(a),(typeof o!="object"||o===null)&&(o={})}catch{o={}}let i=!1;if(Array.isArray(o[e])){const a=o[e].length;o[e]=o[e].filter(r=>r.id!=t&&String(r.id)!==String(t)),o[e].length!==a&&(i=!0)}for(const a of Object.keys(o))if(Array.isArray(o[a])){const r=o[a].length;o[a]=o[a].filter(d=>d.id!=t&&String(d.id)!==String(t)),o[a].length!==r&&(i=!0)}if(i){try{localStorage.setItem($.WEEKLY_GOALS,JSON.stringify(o)),localStorage.setItem("planex_weekly_goals",JSON.stringify(o)),localStorage.setItem("weekly_goals",JSON.stringify(o))}catch{}this.markModifiedAndSync(!0),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("weekly-goals-updated",{detail:{weekId:e,goalId:t,deleted:!0,immediate:!0}}))}return i}getStudyTargets(){const e={dailyStudyGoalHours:8,dailyTargetHours:8,weeklyStudyGoalHours:56,dailyTestGoalCount:150,weeklyTestGoalCount:1e3};try{const t=JSON.parse(localStorage.getItem($.STUDY_TARGETS));if(t&&typeof t=="object"){const o={...e,...t};return t.dailyStudyGoalHours!=null?(o.dailyStudyGoalHours=Number(t.dailyStudyGoalHours),o.dailyTargetHours=Number(t.dailyStudyGoalHours)):t.dailyTargetHours!=null&&(o.dailyStudyGoalHours=Number(t.dailyTargetHours),o.dailyTargetHours=Number(t.dailyTargetHours)),t.dailyTestGoalCount!=null&&(o.dailyTestGoalCount=Number(t.dailyTestGoalCount)),o}return e}catch{return e}}setStudyTargets(e){if(!e||typeof e!="object")return;const o={...this.getStudyTargets(),...e};return e.dailyStudyGoalHours!=null?(o.dailyStudyGoalHours=Number(e.dailyStudyGoalHours),o.dailyTargetHours=Number(e.dailyStudyGoalHours)):e.dailyTargetHours!=null&&(o.dailyStudyGoalHours=Number(e.dailyTargetHours),o.dailyTargetHours=Number(e.dailyTargetHours)),e.dailyTestGoalCount!=null&&(o.dailyTestGoalCount=Number(e.dailyTestGoalCount)),localStorage.setItem($.STUDY_TARGETS,JSON.stringify(o)),this.markModifiedAndSync(!0),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("targets-updated",{detail:{targets:o,immediate:!0}})),o}saveStudyTargets(e){return this.setStudyTargets(e)}getTodayEnergyLevel(){const e=new Date().toISOString().slice(0,10),t=JSON.parse(localStorage.getItem("planex_energy_levels")||"{}");return t[e]!==void 0?t[e]:75}setTodayEnergyLevel(e){const t=new Date().toISOString().slice(0,10),o=JSON.parse(localStorage.getItem("planex_energy_levels")||"{}");o[t]=e,localStorage.setItem("planex_energy_levels",JSON.stringify(o))}getGratitudeNotes(){return JSON.parse(localStorage.getItem($.GRATITUDE_NOTES)||"[]")}addGratitudeNote(e,t){const o=this.getGratitudeNotes();o.unshift({id:Date.now().toString(),prompt:e||"یک اتفاق کوچک که امروز به خاطرش خوشحالی؟",text:t,dateStr:new Date().toLocaleDateString("fa-IR")}),localStorage.setItem($.GRATITUDE_NOTES,JSON.stringify(o))}deleteGratitudeNote(e){let t=this.getGratitudeNotes();t=t.filter(o=>o.id!==e&&o.id!=e),localStorage.setItem($.GRATITUDE_NOTES,JSON.stringify(t))}getEvaluationData(){const e=this.getCurrentWeek(),t=e?e.id:1;return JSON.parse(localStorage.getItem("planex_evaluations")||"{}")[t]||{}}saveEvaluationItem(e,t,o=!0){const i=this.getCurrentWeek(),a=i?i.id:1,r=JSON.parse(localStorage.getItem("planex_evaluations")||"{}");r[a]||(r[a]={}),r[a][e]={text:t,isPositive:o},localStorage.setItem("planex_evaluations",JSON.stringify(r))}getCountdownEvents(){try{const e=JSON.parse(localStorage.getItem($.COUNTDOWN_EVENTS)||"[]");return Array.isArray(e)?e:[]}catch{return[]}}setCountdownEvents(e){const t=Array.isArray(e)?e:[];return localStorage.setItem($.COUNTDOWN_EVENTS,JSON.stringify(t)),this.markModifiedAndSync(!0),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("countdown-updated",{detail:{events:t,immediate:!0}})),t}addCountdownEvent(e,t,o,i){const a=this.getCountdownEvents(),r={id:Date.now().toString(),title:String(e).trim(),jy:Number(t),jm:Number(o),jd:Number(i)};return a.push(r),this.setCountdownEvents(a),r}deleteCountdownEvent(e){let t=this.getCountdownEvents();return t=t.filter(o=>o.id!=e&&String(o.id)!==String(e)),this.setCountdownEvents(t),t}getInterruptions(e){let t=JSON.parse(localStorage.getItem($.INTERRUPTIONS)||"{}");return Array.isArray(t)&&(t={}),t[e]||[]}addInterruption(e,t,o,i){let a=JSON.parse(localStorage.getItem($.INTERRUPTIONS)||"{}");Array.isArray(a)&&(a={}),a[e]||(a[e]=[]),a[e].push({id:Date.now(),title:t,durationMins:o,category:i,date:new Date().toISOString()}),localStorage.setItem($.INTERRUPTIONS,JSON.stringify(a))}getRoutineChecklist(){return JSON.parse(localStorage.getItem("planex_routine_checklist")||"[]")}addRoutineChecklistItem(e){const t=this.getRoutineChecklist();t.unshift({id:Date.now().toString(),text:e,completed:!1,createdAt:Date.now()}),localStorage.setItem("planex_routine_checklist",JSON.stringify(t)),this.markModifiedAndSync(!0)}toggleRoutineChecklistItem(e){const t=this.getRoutineChecklist(),o=t.find(i=>i.id===e||i.id==e);o&&(o.completed=!o.completed,o.updatedAt=Date.now(),localStorage.setItem("planex_routine_checklist",JSON.stringify(t)),this.markModifiedAndSync(!0))}deleteRoutineChecklistItem(e){let t=this.getRoutineChecklist();t=t.filter(o=>o.id!==e&&o.id!=e),localStorage.setItem("planex_routine_checklist",JSON.stringify(t)),this.markModifiedAndSync(!0),typeof window<"u"&&typeof window.triggerActionDrivenPush=="function"&&window.triggerActionDrivenPush(0)}getEarnedMedalBadge(){const t=(this.getGamification()||{level:1}).level||1;return t>=15?{icon:"👑",title:"استاد کنکور",color:"#eab308",desc:"سطح ۱۵+ (عالی)"}:t>=10?{icon:"💎",title:"غول تمرکز",color:"#06b6d4",desc:"سطح ۱۰+ (الماس)"}:t>=5?{icon:"🥇",title:"رتبه برتر",color:"#f59e0b",desc:"سطح ۵+ (طلا)"}:t>=3?{icon:"🥈",title:"داوطلب منظم",color:"#cbd5e1",desc:"سطح ۳+ (نقره)"}:{icon:"🥉",title:"مبتدی پرانرژی",color:"#b45309",desc:"سطح ۱+ (برنز)"}}getGamification(){const e={xp:0,level:1,streak:0,lastLogin:Date.now()};try{const t=JSON.parse(localStorage.getItem($.GAMIFICATION));return!t||typeof t!="object"?e:{...e,...t,xp:Number(t.xp)||0,level:Number(t.level)||1}}catch{return e}}addXP(e){const t=this.getGamification(),o=Number(e)||0;t.xp+=o;let i=t.level*1e3;for(;t.xp>=i;)t.xp-=i,t.level+=1,i=t.level*1e3;localStorage.setItem($.GAMIFICATION,JSON.stringify(t))}normalizeJalaliDate(e){if(!e)return"";let t=String(e).trim();t=t.replace(/[۰-۹]/g,i=>"۰۱۲۳۴۵۶۷۸۹".indexOf(i));const o=t.split("/").map(i=>parseInt(i,10));return o.length===3&&!o.some(isNaN)?`${o[0]}/${String(o[1]).padStart(2,"0")}/${String(o[2]).padStart(2,"0")}`:t}getTodayJalaliString(){const[e,t,o]=this.getTodayJalali();return`${e}/${String(t).padStart(2,"0")}/${String(o).padStart(2,"0")}`}getActivitiesByDate(e=null){try{const t=this.normalizeJalaliDate(e||this.getTodayJalaliString()),o=this.getJalaliDateTimestampRange(t),i=o.startTimestamp,a=o.endTimestamp;let r=[];try{const d=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),s=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),l=new Map;[...d,...s].forEach(c=>{if(!c||typeof c!="object")return;const f=c.id||`${c.date||c.dateStr}_${c.startTime||c.timestamp||c.subject}_${c.duration||c.minutes}`;l.set(f,c)}),r=Array.from(l.values())}catch{r=[]}return r.filter(d=>{if(!d||typeof d!="object")return!1;if(this.normalizeJalaliDate(d.dateStr||d.date)===t)return!0;const l=d.timestamp!==void 0?d.timestamp:d.createdAt!==void 0?d.createdAt:d.startTime;if(l!=null)try{const c=typeof l=="number"?l:typeof l=="string"&&/^\d{10,}$/.test(l.trim())?Number(l.trim()):null;if(c&&!isNaN(c)){if(c>=i&&c<=a)return!0;const f=new Date(c);if(!isNaN(f.getTime())){const[m,y,w]=this.gregorianToJalali(f.getFullYear(),f.getMonth()+1,f.getDate()),u=`${m}/${String(y).padStart(2,"0")}/${String(w).padStart(2,"0")}`;if(this.normalizeJalaliDate(u)===t)return!0}}}catch{}return!1})}catch{return[]}}getStudyMinutesByDate(e=null){const t=this.normalizeJalaliDate(e||this.getTodayJalaliString());return this.getActivitiesByDate(t).filter(i=>i?!(i.type==="non-study"||i.type==="non_study"||i.type==="break"||i.activityType==="non_study"||i.activityType==="non-study"||i.activityType==="break"||i.isStudy===!1||i.is_study_time===!1||i.counts_for_study===!1||i.isBreak===!0||i.is_break===!0||i.timerType==="break"||i.timerType===2):!1).reduce((i,a)=>{const r=Number(a.duration!==void 0?a.duration:a.minutes);return i+(isNaN(r)?0:Math.max(0,Math.ceil(r)))},0)}getStudyHoursByDate(e=null){return+(this.getStudyMinutesByDate(e)/60).toFixed(2)}getStudyStreak(){try{const[e,t,o]=this.getTodayJalali();let i=this.jalaliToJdn(e,t,o);const a=`${e}/${String(t).padStart(2,"0")}/${String(o).padStart(2,"0")}`;let r=0,d=i;this.getStudyMinutesByDate(a)>0&&r++,d--;for(let l=0;l<365;l++){const[c,f,m]=this.jdnToJalali(d),y=`${c}/${String(f).padStart(2,"0")}/${String(m).padStart(2,"0")}`;if(this.getStudyMinutesByDate(y)>0)r++,d--;else break}return r}catch{return 0}}getDailyTestCount(e=null){const t=this.normalizeJalaliDate(e||this.getTodayJalaliString());return this.getActivitiesByDate(t).filter(i=>i?!(i.type==="non-study"||i.type==="non_study"||i.type==="break"||i.activityType==="non_study"||i.activityType==="non-study"||i.activityType==="break"||i.isStudy===!1||i.is_study_time===!1||i.counts_for_study===!1||i.isBreak===!0||i.is_break===!0||i.timerType==="break"||i.timerType===2):!1).reduce((i,a)=>i+(Number(a.testCount!==void 0?a.testCount:a.tests)||0),0)}getRecordedTimerToday(){const e=this.getTodayJalaliString();return JSON.parse(localStorage.getItem($.RECORDED_TIMER)||"{}")[e]||{minutes:0,tests:0}}getTodayTotalMinutes(){return this.getStudyMinutesByDate(this.getTodayJalaliString())}getTodayTotalTests(){return this.getDailyTestCount(this.getTodayJalaliString())}_getWeekDayDateStr(e,t=new Date){const o=this.getCurrentWeekStartDate(t),i=new Date(o.getFullYear(),o.getMonth(),o.getDate()+e),[a,r,d]=this.gregorianToJalali(i.getFullYear(),i.getMonth()+1,i.getDate());return`${a}/${String(r).padStart(2,"0")}/${String(d).padStart(2,"0")}`}getWeekDayMinutes(e){const t=this._getWeekDayDateStr(e);return t?this.getStudyMinutesByDate(t):0}getWeekDayTests(e){const t=this._getWeekDayDateStr(e);return t?this.getDailyTestCount(t):0}getDayCategoryBreakdown(e){const t=this._getWeekDayDateStr(e);if(!t)return[];let o=[];try{o=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),(!Array.isArray(o)||o.length===0)&&(o=JSON.parse(localStorage.getItem("planex_study_logs")||"[]")),Array.isArray(o)||(o=[])}catch{o=[]}const i=`${e}|${t}|${o.length}`;if(this._breakdownMemoMap||(this._breakdownMemoMap={}),this._breakdownMemoMap[i])return this._breakdownMemoMap[i];const a=this.getTodayJalaliString(),r=t===a,d=Date.now(),s=24*60*60*1e3,l=o.filter(y=>{if(!y||typeof y!="object")return!1;const w=this.normalizeJalaliDate(y.dateStr||y.date);if(w===t)return!0;if(r&&(!w||w.indexOf("/")===-1)){const u=y.timestamp||y.createdAt||0;if(u&&d-u<=s)return!0}return!1});window.DEBUG_BREAKDOWN&&console.log(`[DEBUG] getDayCategoryBreakdown (dayIndex: ${e}): Date=${t}, Found=${l.length} sessions`,l);const c={},f=this.getCategories();l.forEach(y=>{const w=y.type==="study"||y.isStudy!==!1;let u="";y.categoryTitle&&y.categoryTitle.trim()?u=y.categoryTitle.trim():y.subject&&y.subject.trim()&&y.subject!=="مطالعه متمرکز"&&y.subject!=="فعالیت غیردرسی"?u=y.subject.trim():w?u="مطالعه درسی":u="فعالیت غیردرسی";const g=y.categoryCode||"other";let b=y.color;if(!b){const v=f.find(A=>A.title===u||A.code===g);b=v?v.color:w?"#0ea5e9":"#f59e0b"}c[u]||(c[u]={title:u,minutes:0,color:b}),c[u].minutes+=Math.max(1,Math.ceil(Number(y.duration||y.minutes)||1))});const m=Object.values(c).sort((y,w)=>w.minutes-y.minutes);return this._breakdownMemoMap[i]=m,m}getDailyStats(e=null){try{const t=this.normalizeJalaliDate(e||this.getTodayJalaliString()),o=String(t).split("/").map(Number);if(o.length===3&&!isNaN(o[0])&&!isNaN(o[1])&&!isNaN(o[2])){const l=this.jalaliToJdn(o[0],o[1],o[2]),c=this.getTodayJdn();if(l>c)return{date:t,studyMinutes:0,studyHours:0,nonStudyMinutes:0,totalTests:0,categoryMinutes:{},sessionsCount:0}}const i=this.getActivitiesByDate(t);let a=0,r=0,d=0;const s={};return i.forEach(l=>{const c=Number(l.duration!==void 0?l.duration:l.minutes),f=isNaN(c)?1:Math.max(1,Math.ceil(c)),m=Number(l.testCount!==void 0?l.testCount:l.tests)||0,y=l.categoryCode||l.category||"سایر";s[y]=(s[y]||0)+f,l.type==="study"||l.isStudy!==!1?(a+=f,d+=m):r+=f}),{date:t,studyMinutes:a,studyHours:+(a/60).toFixed(2),nonStudyMinutes:r,totalTests:d,categoryMinutes:s,sessionsCount:i.length}}catch(t){return console.warn("Error in getDailyStats:",t),{date:e||"",studyMinutes:0,studyHours:0,nonStudyMinutes:0,totalTests:0}}}getStudyStatsByPeriod(e="today"){let t=[];try{const y=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),w=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),u=new Map;Array.isArray(w)&&w.forEach(g=>{g&&(g.id||g.timestamp)&&u.set(g.id||`ts_${g.timestamp}_${g.duration}`,g)}),Array.isArray(y)&&y.forEach(g=>{g&&(g.id||g.timestamp)&&u.set(g.id||`ts_${g.timestamp}_${g.duration}`,g)}),t=Array.from(u.values())}catch{t=[]}const o=new Date;o.setHours(0,0,0,0);const i=o.getTime(),a=new Date,r=(a.getDay()+1)%7,d=new Date(a.getFullYear(),a.getMonth(),a.getDate()-r);d.setHours(0,0,0,0);const s=d.getTime(),l=typeof this.getTodayJalaliString=="function"?this.getTodayJalaliString():"";let c=0,f=0;const m=new Set;return t.forEach(y=>{if(!y||typeof y!="object")return;const w=Number(y.timestamp||y.createdAt||y.endTime||0),u=this.normalizeJalaliDate?this.normalizeJalaliDate(y.dateStr||y.date):y.dateStr||y.date;let g=!1;if(e==="today"?g=w>=i||u&&u===l:e==="week"?g=w>=s:e==="all"&&(g=!0),g&&!(y.type==="non-study"||y.type==="non_study"||y.type==="break"||y.activityType==="non_study"||y.activityType==="non-study"||y.activityType==="break"||y.isStudy===!1||y.is_study_time===!1||y.counts_for_study===!1||y.isBreak===!0||y.is_break===!0||y.timerType==="break"||y.timerType===2)){c+=Math.max(0,Math.ceil(Number(y.duration!==void 0?y.duration:y.minutes)||0)),f+=Math.max(0,Number(y.testCount!==void 0?y.testCount:y.tests)||0);const v=y.subject&&y.subject.trim()!=="مطالعه متمرکز"?y.subject.trim():y.categoryTitle||y.category;v&&v.trim()&&m.add(v.trim())}}),{studyMinutes:c,studyHours:+(c/60).toFixed(2),testCount:f,subjects:Array.from(m)}}recordTimerSession(e,t=0){const o=this.getTodayJalaliString(),i=JSON.parse(localStorage.getItem($.RECORDED_TIMER)||"{}");return i[o]||(i[o]={minutes:0,tests:0}),i[o].minutes+=e,i[o].tests+=t,localStorage.setItem($.RECORDED_TIMER,JSON.stringify(i)),this.addXP(e*2+t*3),i[o]}recordFocusSession(e={}){const{type:t="study",activityType:o=null,minutes:i=null,duration:a=null,tests:r=0,testCount:d=null,category:s=null,categoryCode:l=null,categoryTitle:c=null,subject:f="",studyMethod:m="",note:y="",rating:w=5,timerType:u="pomodoro",startTime:g=null,endTime:b=Date.now(),date:v=null,isBreak:A=!1,is_break:k=!1,is_study_time:T=null,counts_for_study:x=null,testCorrect:M=0,testWrong:P=0,testUnanswered:C=0,testPercentage:I=null}=e,R=!!(A||k||e.isBreak===!0||e.is_break===!0||u==="break"||u===2);let j=!(t==="non-study"||t==="non_study"||o==="non-study"||o==="non_study")&&!R;(T===!1||x===!1||e.is_study_time===!1||e.counts_for_study===!1)&&(j=!1);const J=j?"study":R?"break":"non-study",L=Math.ceil(Number(a??i??1))||1;if(L>720)return console.warn(`[db.recordFocusSession] Rejected orphaned session with duration: ${L} mins (>12h).`),null;const Y=Math.min(240,Math.max(1,L)),Q=j?Math.max(0,parseInt(d??r)||0):0;let Z=null;const N=String(s||c||"").trim();if(j){const oe=this.getCategories();Z=oe.find(ge=>ge.code===l),!Z&&N&&(Z=oe.find(ge=>ge.title===N||ge.code===N)),Z||(Z=oe.find(ge=>Oe(ge))||{code:"ع-س",title:N||"مطالعه متمرکز",color:"#0ea5e9",icon:"📚",group:"علمی",isStudy:!0})}else{const oe=this.getNonStudyCategories();Z=oe.find(ge=>ge.code===l),!Z&&N&&(Z=oe.find(ge=>ge.title===N||ge.code===N)),Z||(Z={code:l||(R?"non_break":"غ-د"),title:N||(R?"پارت استراحت ☕":"فعالیت غیردرسی"),color:R?"#38bdf8":"#f59e0b",icon:R?"☕":"🧘",group:"غیردرسی",isStudy:!1})}const q=Z.title,W=String(f||"").trim()||(j?"مطالعه متمرکز":R?"استراحت و ریکاوری":q),ue=String(y||"").trim(),[me,pe,h]=this.getTodayJalali();(new Date().getDay()+1)%7;const D=this.normalizeJalaliDate(v||`${me}/${String(pe).padStart(2,"0")}/${String(h).padStart(2,"0")}`);let B=null,H=null;if(typeof b=="number"&&!isNaN(b)&&b>1e11)B=b;else if(typeof b=="string")if(b.includes(":")){const oe=b.split(":").map(Number);if(!isNaN(oe[0])&&!isNaN(oe[1])){const ge=new Date;ge.setHours(oe[0],oe[1],0,0),B=ge.getTime()}}else{const oe=Number(b);!isNaN(oe)&&oe>1e11&&(B=oe)}if(typeof g=="number"&&!isNaN(g)&&g>1e11)H=g;else if(typeof g=="string")if(g.includes(":")){const oe=g.split(":").map(Number);if(!isNaN(oe[0])&&!isNaN(oe[1])){const ge=new Date;ge.setHours(oe[0],oe[1],0,0),H=ge.getTime()}}else{const oe=Number(g);!isNaN(oe)&&oe>1e11&&(H=oe)}H&&!B?B=H+Y*60*1e3:B&&!H?H=B-Y*60*1e3:!H&&!B&&(B=Date.now(),H=B-Y*60*1e3);const le={id:"session_"+Date.now()+"_"+Math.random().toString(36).substr(2,4),type:J,category:Z.title,categoryCode:Z.code,categoryTitle:Z.title,color:Z.color||(j?"#0ea5e9":R?"#38bdf8":"#f59e0b"),icon:Z.icon||(j?"📚":R?"☕":"🧘"),isStudy:j,is_study_time:j,counts_for_study:j,isBreak:R,is_break:R,activityType:j?"study":R?"break":"non_study",subject:W,studyMethod:m||"",duration:Y,minutes:Y,testCount:Q,tests:Q,testCorrect:Math.max(0,parseInt(M)||0),testWrong:Math.max(0,parseInt(P)||0),testUnanswered:Math.max(0,parseInt(C)||0),testPercentage:I!==null?I:Q>0?+((3*Math.max(0,parseInt(M)||0)-Math.max(0,parseInt(P)||0))/(3*Q)*100).toFixed(1):null,note:ue,timerType:u||(R?"break":"pomodoro"),date:D,dateStr:D,startTime:H,endTime:B,timestamp:B},U=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]");U.unshift(le),U.length>5e3&&(U.length=5e3),localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(U));const fe=JSON.parse(localStorage.getItem("planex_study_logs")||"[]");fe.unshift(le),fe.length>5e3&&(fe.length=5e3),localStorage.setItem("planex_study_logs",JSON.stringify(fe));const we=JSON.parse(localStorage.getItem("planex_daily_stats")||"{}");we[D]||(we[D]={date:D,studyMinutes:0,studyHours:0,nonStudyMinutes:0,totalTests:0,categoryMinutes:{},sessionsCount:0});const ye=we[D];ye.sessionsCount=(ye.sessionsCount||0)+1;const Me=Z.code||"other";ye.categoryMinutes[Me]=(ye.categoryMinutes[Me]||0)+Y,j?(ye.studyMinutes=(ye.studyMinutes||0)+Y,ye.studyHours=+(ye.studyMinutes/60).toFixed(2),ye.totalTests=(ye.totalTests||0)+Q):ye.nonStudyMinutes=(ye.nonStudyMinutes||0)+Y,localStorage.setItem("planex_daily_stats",JSON.stringify(we)),j?this.recordTimerSession(Y,Q):this.addXP(Math.round(Y*.5));const he=D||this.getTodayJalaliString(),Ae=JSON.parse(localStorage.getItem("planex_subject_study_stats")||"{}");Ae[he]||(Ae[he]={});const ze=W||Z.title;return Ae[he][ze]||(Ae[he][ze]={minutes:0,tests:0,category:Z.title,isStudy:j}),Ae[he][ze].minutes+=Y,Ae[he][ze].tests+=Q,localStorage.setItem("planex_subject_study_stats",JSON.stringify(Ae)),this._breakdownMemoMap={},le}saveStudyLogs(e){if(!Array.isArray(e))return[];try{let t=[];try{t=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),Array.isArray(t)||(t=[])}catch{t=[]}let o=[];try{o=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),Array.isArray(o)||(o=[])}catch{o=[]}const i=new Map;[...t,...o].forEach(r=>{if(!r||typeof r!="object")return;const d=r.id||`${r.date||r.dateStr}_${r.startTime||r.timestamp||r.subject}_${r.duration||r.minutes}`;i.set(d,r)}),e.forEach(r=>{if(!r||typeof r!="object")return;const d=r.id||`${r.date||r.dateStr}_${r.startTime||r.timestamp||r.subject}_${r.duration||r.minutes}`;!r.dateStr&&r.date&&(r.dateStr=r.date),!r.date&&r.dateStr&&(r.date=r.dateStr),i.set(d,r)});const a=Array.from(i.values());return a.sort((r,d)=>{const s=Number(r.timestamp||r.endTime||r.startTime)||0;return(Number(d.timestamp||d.endTime||d.startTime)||0)-s}),a.length>5e3&&(a.length=5e3),localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(a)),localStorage.setItem("planex_study_logs",JSON.stringify(a)),this._breakdownMemoMap={},a}catch(t){return console.error("[db] saveStudyLogs error:",t),e}}recordPomodoroSession(e={}){return this.recordFocusSession(e)}getRecentFocusSessions(e=10){try{const t=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),o=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),i=new Map;[...t,...o].forEach(r=>{if(!r||typeof r!="object")return;const d=r.id||`${r.date||r.dateStr}_${r.startTime||r.timestamp||r.subject}_${r.duration||r.minutes}`;i.set(d,r)});const a=Array.from(i.values());return a.sort((r,d)=>{const s=Number(r.timestamp||r.createdAt||0);return Number(d.timestamp||d.createdAt||0)-s}),a.slice(0,e)}catch{return[]}}deleteFocusSession(e){try{let t=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]");Array.isArray(t)||(t=[]),t=t.filter(i=>i&&i.id!==e),localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(t));let o=JSON.parse(localStorage.getItem("planex_study_logs")||"[]");Array.isArray(o)&&(o=o.filter(i=>i&&i.id!==e),localStorage.setItem("planex_study_logs",JSON.stringify(o)))}catch{}}sanitizeCorruptedStats(){try{const e=JSON.parse(localStorage.getItem("planex_daily_stats")||"{}");let t=!1;Object.keys(e).forEach(o=>{const i=e[o];i&&i.studyMinutes>1440&&(i.studyMinutes=Math.min(1440,Math.max(0,i.studyMinutes)),i.studyHours=+(i.studyMinutes/60).toFixed(2),t=!0)}),t&&localStorage.setItem("planex_daily_stats",JSON.stringify(e)),["planex_recent_activity_sessions","planex_study_logs"].forEach(o=>{try{const i=localStorage.getItem(o);if(i){const a=JSON.parse(i);if(Array.isArray(a)){const r=a.filter(d=>(Number((d==null?void 0:d.duration)||(d==null?void 0:d.minutes))||0)<=720);r.length!==a.length&&localStorage.setItem(o,JSON.stringify(r))}}}catch{}})}catch{}}getSubjectStudyStats(e=null){const t=this.normalizeJalaliDate(e||this.getTodayJalaliString()),o=this.getActivitiesByDate(t),i={};return o.forEach(a=>{if(!a||typeof a!="object")return;const d=!(a.type==="non-study"||a.type==="non_study"||a.type==="break"||a.activityType==="non_study"||a.activityType==="non-study"||a.activityType==="break"||a.isStudy===!1||a.is_study_time===!1||a.counts_for_study===!1||a.isBreak===!0||a.is_break===!0||a.timerType==="break"||a.timerType===2);let s="";a.categoryTitle&&a.categoryTitle.trim()?s=a.categoryTitle.trim():a.subject&&a.subject.trim()&&a.subject!=="مطالعه متمرکز"&&a.subject!=="فعالیت غیردرسی"?s=a.subject.trim():d?s="مطالعه متمرکز":s="فعالیت غیردرسی";const l=Math.max(0,Number(a.duration!==void 0?a.duration:a.minutes)||0),c=Math.max(0,Number(a.testCount!==void 0?a.testCount:a.tests)||0);i[s]||(i[s]={minutes:0,tests:0,category:s,isStudy:d}),i[s].minutes+=l,i[s].tests+=c}),i}getUserProfile(){const e={name:"",major:"",targetField:""};try{const t=JSON.parse(localStorage.getItem($.USER_PROFILE)),o=t&&typeof t=="object"?{...e,...t}:e,i=this.getEffectiveUserName();return i&&(o.name=i,o.nickname=i),o}catch{return e}}setUserProfile(e){try{localStorage.setItem($.USER_PROFILE,JSON.stringify(e))}catch(t){console.warn("[db] setUserProfile localStorage quota error:",t)}}exportAllData(){const e={};return Object.values($).forEach(t=>{e[t]=localStorage.getItem(t)}),JSON.stringify(e,null,2)}importAllData(e){try{const t=JSON.parse(e);return Object.keys(t).forEach(o=>{t[o]!==void 0&&t[o]!==null&&localStorage.setItem(o,t[o])}),!0}catch(t){return console.error("Import failed:",t),!1}}getThemeSettings(){const e={appTheme:"theme-dark-glass",themeMode:"mode-dark",fontFamily:"font-yekan"},t=localStorage.getItem($.ACTIVE_THEME);if(!t)return e;try{const o=JSON.parse(t);return{...e,...o,appTheme:"theme-dark-glass",themeMode:"mode-dark"}}catch{return e}}setThemeSettings(e){const o={...this.getThemeSettings(),...e};return localStorage.setItem($.ACTIVE_THEME,JSON.stringify(o)),o}getFlashcards(){try{const t=localStorage.getItem($.FLASHCARDS);if(t){const o=JSON.parse(t);if(Array.isArray(o)&&o.length>0)return o}}catch{}const e=[{id:"fc_seed_1",question:"تکنیک بازیابی فعال (Active Recall) چیست و چرا موثرترین روش مطالعه است؟",answer:"تلاش فعالانه مغز برای به یاد آوردن مطالب بدون نگاه کردن به کتاب؛ این فرآیند باعث تقویت مسیرهای سیناپسی و انتقال اطلاعات به حافظه بلندمدت می‌شود.",deck:"متدولوژی مطالعه",box:1,createdAt:"۱۴۰۵/۰۱/۰۱",createdTimestamp:Date.now()-864e5,nextReviewDate:Date.now()-1e3},{id:"fc_seed_2",question:"در جعبه لایتنر ۵ خانه‌ای، هر خانه چه فواصل زمانی برای مرور دارد؟",answer:"خانه ۱: روزانه (۱ روز) | خانه ۲: ۲ روز | خانه ۳: ۴ روز | خانه ۴: ۸ روز | خانه ۵: ۱۶ روز (تثبیت دائم در حافظه).",deck:"جعبه لایتنر",box:2,createdAt:"۱۴۰۵/۰۱/۰۱",createdTimestamp:Date.now()-1728e5,nextReviewDate:Date.now()-1e3},{id:"fc_seed_3",question:"بهترین استراتژی پومودورو برای یادگیری مباحث سنگین و تحلیلی چیست؟",answer:"پومودوروی پیشرفته ۵۰ دقیقه تمرکز عمیق بدون وقفه و ۱۰ دقیقه استراحت مطلق (آب خوردن و تنفس عمیق).",deck:"مدیریت زمان",box:1,createdAt:"۱۴۰۵/۰۱/۰۱",createdTimestamp:Date.now()-864e5,nextReviewDate:Date.now()-1e3}];try{localStorage.setItem($.FLASHCARDS,JSON.stringify(e))}catch{}return e}addFlashcard(e,t,o="عمومی"){const i=this.getFlashcards(),[a,r,d]=this.getTodayJalali(),s=String(e||"").trim(),l=String(t||"").trim();if(!s||!l)return null;const c={id:"fc_"+Date.now()+"_"+Math.floor(Math.random()*1e4),question:s,answer:l,deck:String(o||"عمومی").trim(),box:1,streak:0,reviewCount:0,createdAt:`${a}/${r}/${d}`,createdTimestamp:Date.now(),lastReviewed:null,nextReviewDate:Date.now()};return i.unshift(c),localStorage.setItem($.FLASHCARDS,JSON.stringify(i)),c}addFlashcards(e,t="هوش مصنوعی"){if(!Array.isArray(e)||e.length===0)return 0;const o=this.getFlashcards(),[i,a,r]=this.getTodayJalali();let d=0;return e.forEach((s,l)=>{if(!s)return;const c=typeof s=="object"&&(s.question||s.q)||"",f=typeof s=="object"&&(s.answer||s.a)||"",m=typeof s=="object"&&s.deck?s.deck:t,y=String(c).trim(),w=String(f).trim();y&&w&&(o.unshift({id:"fc_"+(Date.now()+l)+"_"+Math.floor(Math.random()*1e4),question:y,answer:w,deck:String(m||"هوش مصنوعی").trim(),box:1,streak:0,reviewCount:0,createdAt:`${i}/${a}/${r}`,createdTimestamp:Date.now(),lastReviewed:null,nextReviewDate:Date.now()}),d++)}),d>0&&localStorage.setItem($.FLASHCARDS,JSON.stringify(o)),d}reviewFlashcard(e,t){const o=this.getFlashcards(),i=o.find(s=>s.id===e||s.id==e);if(!i)return null;const a=[1,2,4,8,16],r=Date.now();t?(i.box=Math.min(5,(i.box||1)+1),i.streak=(i.streak||0)+1):(i.box=1,i.streak=0),i.lastReviewed=r,i.reviewCount=(i.reviewCount||0)+1;const d=a[(i.box||1)-1]||1;return i.nextReviewDate=r+d*24*60*60*1e3,localStorage.setItem($.FLASHCARDS,JSON.stringify(o)),i}deleteFlashcard(e){let t=this.getFlashcards();return t=t.filter(o=>o.id!==e&&o.id!=e),localStorage.setItem($.FLASHCARDS,JSON.stringify(t)),t}getLeitnerStats(){const e=this.getFlashcards(),t=Date.now(),o={total:e.length,due:0,mastered:0,boxes:{1:0,2:0,3:0,4:0,5:0}};return e.forEach(i=>{const a=Math.min(5,Math.max(1,i.box||1));o.boxes[a]=(o.boxes[a]||0)+1,a===5&&o.mastered++,(!i.nextReviewDate||i.nextReviewDate<=t)&&o.due++}),o}getTodayStudiedSubjects(e=null){try{const t=this.normalizeJalaliDate(e||this.getTodayJalaliString()),o=this.getActivitiesByDate(t).filter(a=>a?!(a.type==="non-study"||a.type==="non_study"||a.type==="break"||a.activityType==="non_study"||a.activityType==="non-study"||a.activityType==="break"||a.isStudy===!1||a.is_study_time===!1||a.counts_for_study===!1||a.isBreak===!0||a.is_break===!0||a.timerType==="break"||a.timerType===2):!1),i=new Set;if(o.forEach(a=>{const r=a.subject&&typeof a.subject=="string"&&a.subject.trim()&&a.subject!=="مطالعه متمرکز"&&a.subject!=="فعالیت غیردرسی"?a.subject.trim():a.categoryTitle||a.category||"";r&&r.trim()&&i.add(r.trim())}),t===this.getTodayJalaliString()){const a=this.getCurrentWeek();if(a&&a.id){const r=this.getHourlyLogs(a.id),d=(new Date().getDay()+1)%7,s=this.getCategories();Object.keys(r).forEach(l=>{if(l.startsWith(`${d}_`)){const c=r[l];if(c&&c.categoryCode){const f=s.find(y=>y.code===c.categoryCode);if(f?Oe(f):c.categoryCode.startsWith("ع")||c.categoryCode==="ع-س"){const y=c.subject&&c.subject.trim()?c.subject.trim():f?f.title:"";y&&y!=="مطالعه متمرکز"&&i.add(y)}}}})}}return Array.from(i)}catch{return[]}}getUserGroups(){try{let e=[];const t=localStorage.getItem($.USER_GROUPS);if(t){const o=JSON.parse(t);Array.isArray(o)&&(e=o.filter(i=>i&&(i.code||i.groupCode)))}if(e.length===0)for(const o of["planex_my_groups","planex_my_rooms","my_rooms"]){const i=localStorage.getItem(o);if(i)try{const a=JSON.parse(i);if(Array.isArray(a)&&a.length>0){const r=a.filter(d=>d&&(d.code||d.groupCode||d.id||d.room_code));if(r.length>0){e=r,localStorage.setItem($.USER_GROUPS,JSON.stringify(e));break}}}catch{}}if(e.length===0){const o=localStorage.getItem($.USER_GROUP_DATA);if(o){const i=JSON.parse(o);if(i&&(i.groupCode||i.code)){const a={code:String(i.groupCode||i.code).trim().toUpperCase(),name:String(i.groupName||i.name||`گروه ${i.groupCode}`).trim(),joinedAt:i.joinedAt||Date.now(),isOwner:!!i.isOwner,userId:i.userId||null};e=[a],localStorage.setItem($.USER_GROUPS,JSON.stringify(e)),localStorage.setItem($.ACTIVE_GROUP_CODE,a.code)}}}return e.map(o=>({code:String(o.code||o.groupCode||o.room_code||o.id||"").trim().toUpperCase(),name:String(o.name||o.title||o.groupName||`گروه ${o.code||o.groupCode||o.id}`).trim(),joinedAt:o.joinedAt||o.created_at||Date.now(),isOwner:!!(o.isOwner||o.is_owner||o.role==="owner"),userId:o.userId||o.creator_id||null})).filter(o=>o.code)}catch(e){return console.error("Error fetching user groups:",e),[]}}setUserGroups(e){try{Array.isArray(e)||(e=[]);const t=e.filter(d=>d&&(d.code||d.groupCode||d.room_code||d.id)).map(d=>({code:String(d.code||d.groupCode||d.room_code||d.id).trim().toUpperCase(),name:String(d.name||d.title||d.groupName||`گروه ${d.code||d.groupCode||d.id}`).trim(),joinedAt:d.joinedAt||d.created_at||Date.now(),isOwner:!!(d.isOwner||d.is_owner||d.role==="owner"),userId:d.userId||d.creator_id||null})),o=new Map;t.forEach(d=>o.set(d.code,d));const i=Array.from(o.values());localStorage.setItem($.USER_GROUPS,JSON.stringify(i)),localStorage.setItem("planex_my_groups",JSON.stringify(i)),localStorage.setItem("planex_my_rooms",JSON.stringify(i)),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("rooms-updated"));const a=this.getActiveGroupCode();if(!a||!o.has(a)){const d=i.length>0?i[0].code:null;d?localStorage.setItem($.ACTIVE_GROUP_CODE,d):localStorage.removeItem($.ACTIVE_GROUP_CODE)}const r=this.getActiveGroup();return r?localStorage.setItem($.USER_GROUP_DATA,JSON.stringify({groupCode:r.code,groupName:r.name,joinedAt:r.joinedAt,isOwner:r.isOwner,userId:r.userId})):localStorage.removeItem($.USER_GROUP_DATA),i}catch(t){return console.error("Error saving user groups:",t),[]}}removeUserGroup(e){try{if(!e)return[];const t=String(e).trim().toUpperCase();let o=this.getUserGroups();return o=o.filter(a=>String(a.code||a.groupCode||a.room_code||a.id||"").trim().toUpperCase()!==t),localStorage.setItem($.USER_GROUPS,JSON.stringify(o)),localStorage.setItem("planex_my_groups",JSON.stringify(o)),localStorage.setItem("planex_my_rooms",JSON.stringify(o)),this.getActiveGroupCode()===t&&(localStorage.removeItem($.ACTIVE_GROUP_CODE),localStorage.removeItem($.USER_GROUP_DATA),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data")),o.length>0?localStorage.setItem($.ACTIVE_GROUP_CODE,o[0].code):localStorage.removeItem($.ACTIVE_GROUP_CODE),o}catch(t){return console.error("Error removing user group:",t),[]}}getActiveGroupCode(){try{const e=localStorage.getItem($.ACTIVE_GROUP_CODE);return e&&e.trim()?e.trim().toUpperCase():null}catch{return null}}setActiveGroupCode(e){try{if(!e)return localStorage.removeItem($.ACTIVE_GROUP_CODE),localStorage.removeItem($.USER_GROUP_DATA),null;const t=String(e).trim().toUpperCase();localStorage.setItem($.ACTIVE_GROUP_CODE,t);const o=this.getActiveGroup();return o&&localStorage.setItem($.USER_GROUP_DATA,JSON.stringify({groupCode:o.code,groupName:o.name,joinedAt:o.joinedAt,isOwner:o.isOwner,userId:o.userId})),t}catch{return null}}getActiveGroup(){const e=this.getUserGroups();if(e.length===0)return null;const t=this.getActiveGroupCode();return t&&e.find(i=>i.code===t)||null}addUserGroup(e){try{if(!e)return null;const t=e.code||e.groupCode;if(!t)return null;const o=String(t).trim().toUpperCase(),i=String(e.name||e.groupName||`گروه ${o}`).trim(),a=this.getUserGroups(),r=a.findIndex(s=>s.code===o),d={code:o,name:i,joinedAt:e.joinedAt||Date.now(),isOwner:r>=0?e.isOwner??a[r].isOwner:!!e.isOwner,userId:e.userId||(r>=0?a[r].userId:null)};return r>=0?a[r]=d:a.unshift(d),this.setUserGroups(a),this.setActiveGroupCode(o),d}catch(t){return console.error("Error adding user group:",t),null}}removeUserGroup(e){try{const t=String(e||this.getActiveGroupCode()||"").trim().toUpperCase();if(!t)return!1;let o=this.getUserGroups();return o=o.filter(i=>i.code!==t),this.setUserGroups(o),!0}catch(t){return console.error("Error removing user group:",t),!1}}getUserGroupData(){const e=this.getActiveGroup();return e?{groupCode:e.code,groupName:e.name,joinedAt:e.joinedAt,isOwner:e.isOwner,userId:e.userId}:null}setUserGroupData(e){return this.addUserGroup(e)}leaveUserGroup(e=null){return this.removeUserGroup(e)}getOrCreatePersonalSyncToken(){let e=localStorage.getItem($.PERSONAL_SYNC_TOKEN);if(!e){const t="23456789ABCDEFGHJKLMNPQRSTUVWXYZ";e=`SYNC-${Array.from({length:5},()=>t[Math.floor(Math.random()*t.length)]).join("")}`,localStorage.setItem($.PERSONAL_SYNC_TOKEN,e)}return e}setPersonalSyncToken(e){if(e){const t=String(e).trim().toUpperCase();return localStorage.setItem($.PERSONAL_SYNC_TOKEN,t),t}return null}getPersonalSyncInfo(){const e=this.getOrCreatePersonalSyncToken(),t=localStorage.getItem($.LAST_PERSONAL_SYNC),o=t?parseInt(t,10):0;let i="هنوز در فضای ابری ذخیره نشده";if(o>0){const a=Date.now()-o,r=Math.floor(a/(60*1e3)),d=Math.floor(r/60);r<1?i="لحظاتی پیش":r<60?i=`${r} دقیقه پیش`:d<24?i=`${d} ساعت پیش`:i=`${Math.floor(d/24)} روز پیش`}return{token:e,lastSyncTimestamp:o,lastSyncText:i,hasSyncedBefore:o>0}}markPersonalSyncSuccess(){localStorage.setItem($.LAST_PERSONAL_SYNC,String(Date.now()))}getUserProfile(){let e={};try{e=JSON.parse(localStorage.getItem($.USER_PROFILE)||"{}")}catch{}const t=localStorage.getItem("planex_user_avatar");t&&(e.avatar=t,e.avatar_url=t,e.photo=t,e.photoUrl=t);const o=this.getEffectiveUserName();return o?(e.name=o,e.nickname=o):_e(e.name)&&(e.name="",e.nickname=""),e}setUserProfile(e){if(!e||typeof e!="object")return{};try{let t={};try{t=JSON.parse(localStorage.getItem($.USER_PROFILE)||"{}")}catch{}const o={...t,...e},i=e.avatar||e.avatar_url||e.photo||e.photoUrl||localStorage.getItem("planex_user_avatar");return i&&(localStorage.setItem("planex_user_avatar",i),o.avatar=i,o.avatar_url=i,o.photo=i,o.photoUrl=i),e.name&&!_e(e.name)&&(o.name=e.name,o.nickname=e.name,localStorage.setItem("planex_user_nickname",e.name),localStorage.setItem("planex_nickname",e.name),localStorage.setItem("planex_leaderboard_nickname",e.name)),localStorage.setItem($.USER_PROFILE,JSON.stringify(o)),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("profileUpdated")),o}catch(t){return console.warn("Error setting user profile:",t),e}}saveProfile(e){return this.setUserProfile(e)}getProfile(){return this.getUserProfile()}getJournalEntry(e){try{return(JSON.parse(localStorage.getItem("planex_journal_entries"))||{})[e]||{mood:"",rating:0,note:""}}catch{return{mood:"",rating:0,note:""}}}saveJournalEntry(e,t,o,i){try{const a=JSON.parse(localStorage.getItem("planex_journal_entries"))||{};a[e]={mood:t,rating:o,note:i},localStorage.setItem("planex_journal_entries",JSON.stringify(a))}catch{}}}const p=new yo,ee={USER_ID:"planex_leaderboard_user_id",NICKNAME:"planex_leaderboard_nickname",TARGET:"planex_leaderboard_target",LAST_SYNC:"planex_leaderboard_last_sync",CACHE:"planex_leaderboard_cache",CACHE_DATE:"planex_leaderboard_cache_date",SYNC_CODE:"planex_sync_code",USER_GROUP_DATA:"planex_user_group_data",GROUP_CACHE_PREFIX:"planex_group_cache_",GROUP_ROSTER_PREFIX:"planex_group_roster_",EARLY_BIRD_HISTORY:"planex_early_bird_history",EARLY_BIRD_CACHE:"planex_early_bird_cache",EARLY_BIRD_CACHE_DATE:"planex_early_bird_cache_date"},Le={START_MIN:5*60,END_MIN:7*60};function vt(n){if(!n)return n;const e=parseFloat(n.study_minutes||n.studyMinutes||n.total_study_minutes||0),t=parseInt(n.test_count||n.testCount||n.total_tests||0)||0;let o=parseFloat(n.weekly_study_minutes||n.weeklyStudyMinutes||0),i=parseInt(n.weekly_test_count||n.weeklyTestCount||0)||0;!o&&e>0&&(o=e),!i&&t>0&&(i=t);const a=parseFloat(n.alltime_study_minutes||n.allTimeStudyMinutes||n.total_study_minutes_alltime||0),r=parseInt(n.alltime_test_count||n.allTimeTestCount||n.total_tests_alltime||0)||0;return{...n,studyMinutes:Math.round(e),testCount:t,weeklyStudyMinutes:Math.round(Math.max(o,e)),weeklyTestCount:Math.max(i,t),allTimeStudyMinutes:Math.round(Math.max(a,o,e)),allTimeTestCount:Math.max(r,i,t)}}function Te(n,e={},t=3e3){const o=new AbortController,i=setTimeout(()=>o.abort(),t);return fetch(n,{...e,signal:o.signal}).finally(()=>clearTimeout(i))}const _={_studyHeartbeatInterval:null,_currentStudySubject:"",isCurrentStudyingActive(){try{if(typeof window<"u"&&typeof window.isUserStudyingNow=="function")return window.isUserStudyingNow();const n=typeof window<"u"?window.appState:null;if(!n||!!!(n.isPomodoroRunning||n.isStopwatchRunning))return!1;const t=n.focusTimerType===2,o=n.focusActivityMode==="non-study"&&!t;return!t&&!o}catch{return!1}},isMemberStudying(n){if(!n||!n.isStudying)return!1;try{const i=this.getUserProfile();if(n.userId===i.userId||n.isCurrentUser||n.isUser)return this.isCurrentStudyingActive()}catch{}const e=Number(n.lastHeartbeat)||0;if(!e)return!1;const t=15*60*1e3,o=Date.now()-e;return o>=0&&o<t},exportAppState(){try{const n=p.exportAllDataJSON();return JSON.parse(n)}catch(n){console.warn("[Sync] db.exportAllDataJSON failed, using fallback:",n);const e={};for(let t=0;t<localStorage.length;t++){const o=localStorage.key(t);if(o&&(o.startsWith("planex_")||o.startsWith("theme_")||o.startsWith("app_")||o.startsWith("timer_")))try{e[o]=JSON.parse(localStorage.getItem(o))}catch{e[o]=localStorage.getItem(o)}}return e}},importAppState(n){if(!n)return!1;try{return p.importAllDataJSON(n)}catch(e){return console.error("[Sync] db.importAllDataJSON failed:",e),!1}},getOrCreateSyncCode(){let n=localStorage.getItem(ee.SYNC_CODE);if(!n){const e="23456789ABCDEFGHJKLMNPQRSTUVWXYZ";n=`PLX-${Array.from({length:3},()=>e[Math.floor(Math.random()*e.length)]).join("")}`,localStorage.setItem(ee.SYNC_CODE,n)}return n},setSyncCode(n){if(n){const e=String(n).trim().toUpperCase();localStorage.setItem(ee.SYNC_CODE,e)}},async pushSyncCode(n=null){const e=n||this.getOrCreateSyncCode(),t=this.getUserProfile(),o=this.exportAppState(),i=localStorage.getItem("planex_user_avatar")||t.avatar||t.avatar_url||"";i&&o&&typeof o=="object"&&(o.planex_user_avatar=i);const a={code:e,syncCode:e,userId:t.userId,nickname:t.nickname,target:t.target,avatarUrl:i,avatar_url:i,avatar:i,backupData:o,appState:o,updatedAt:Date.now()};try{let r=await Te(`${ce}/api/sync-code.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(r.ok||(r=await Te(`${ce}/api/v1/sync-code.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})),r.ok)return{success:!0,code:e,message:"کد کپی و اطلاعات شما روی سرور ذخیره شد."};const d=await r.json().catch(()=>({}));throw new Error(d.message||`خطای سرور (${r.status})`)}catch(r){return console.warn("[Sync] Push sync code failed:",r),{success:!1,code:e,message:"خطا در ذخیره ابری داده‌ها: "+r.message}}},async applySyncCode(n){if(!n||!n.trim())return{success:!1,message:"لطفاً کد همگام‌سازی را وارد کنید."};const e=n.trim().toUpperCase();try{let t=await Te(`${ce}/api/sync-code.php?code=${e}`);t.ok||(t=await Te(`${ce}/api/v1/sync-code.php?code=${e}`)),t.ok||(t=await Te(`${ce}/api/leaderboard.php?sync_code=${e}`));const o=await t.text();let i=null;try{i=o?JSON.parse(o):null}catch{i=null}if(t.ok&&i&&i.success&&i.data){const a=i.data,r=a.backupData||a.appState||null;if(r&&this.importAppState(r),a.userId&&localStorage.setItem(ee.USER_ID,a.userId),a.nickname&&(localStorage.setItem(ee.NICKNAME,a.nickname),p&&typeof p.setUserProfile=="function")){const s=p.getUserProfile()||{};p.setUserProfile({...s,name:a.nickname})}a.target&&localStorage.setItem(ee.TARGET,a.target);const d=a.avatarUrl||a.avatar||a.avatar_url||(r==null?void 0:r.planex_user_avatar)||null;if(d){if(localStorage.setItem("planex_user_avatar",d),p&&typeof p.setUserProfile=="function"){const s=p.getUserProfile()||{};p.setUserProfile({...s,avatar:d,avatar_url:d,photo:d,photoUrl:d})}try{const s=JSON.parse(localStorage.getItem("planex_auth_user")||"{}");s&&typeof s=="object"&&(s.avatar_url=d,s.photo_url=d,s.avatar=d,localStorage.setItem("planex_auth_user",JSON.stringify(s)),localStorage.setItem("planex_user_account",JSON.stringify(s)))}catch{}typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("profileUpdated"))}return localStorage.setItem(ee.SYNC_CODE,e),{success:!0,data:a,message:`🎉 تمام اطلاعات، روتین‌ها و ساعات مطالعه با موفقیت از کد «${e}» بازیابی و اعمال شد!`}}return{success:!1,message:(i==null?void 0:i.message)||`کد «${e}» نامعتبر است یا دیتایی برای آن ذخیره نشده است.`}}catch(t){return console.error("[Sync] Sync code lookup failed:",t),{success:!1,message:"خطا در ارتباط با سرور ابری هنگام بازیابی کد: "+t.message}}},getOrCreateUserId(){let n=localStorage.getItem(ee.USER_ID);if(!n){const e=localStorage.getItem("planex_device_sync_id");e?n=e:n="usr_"+Date.now().toString(36)+"_"+Math.random().toString(36).substring(2,7),localStorage.setItem(ee.USER_ID,n)}return n},getUserProfile(){var l,c,f;const n=p.getUserProfile()||{};let e=null;try{e=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}")}catch{}try{const m=(f=(c=(l=window.Telegram)==null?void 0:l.WebApp)==null?void 0:c.initDataUnsafe)==null?void 0:f.user;if(m){const y=[m.first_name,m.last_name].filter(Boolean).join(" ").trim(),w=m.photo_url||"",u=localStorage.getItem(ee.NICKNAME)||e&&(e.full_name||e.name)||n.name||"";if((!u||_e(u))&&y&&(localStorage.setItem(ee.NICKNAME,y),p&&typeof p.setUserProfile=="function")){const b=p.getUserProfile()||{};p.setUserProfile({...b,name:y})}w&&(!e||!e.avatar_url)&&(e=e||{},e.avatar_url=w,e.photo_url=w,localStorage.setItem("planex_auth_user",JSON.stringify(e)))}}catch{}const o=localStorage.getItem("planex_user_avatar")||""||e&&(e.avatar_url||e.avatarUrl||e.photo_url||e.avatar)||n.avatar||n.avatar_url||n.photo||n.photoUrl||"",i=localStorage.getItem(ee.NICKNAME)||localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_nickname")||e&&(e.full_name||e.name||e.nickname)||n.nickname||n.name||"",a=i&&!_e(i)?i.trim():"",r=localStorage.getItem(ee.TARGET)||n.targetField||n.major||n.target||"",d=e&&(e.id||e.telegram_id||e.uid)||this.getOrCreateUserId(),s=e&&(e.phone||e.phone_number)||n.phone||"";return{nickname:a,target:r,userId:d,id:d,telegram_id:(e==null?void 0:e.telegram_id)||d,uid:d,user_id:d,phone:s,phone_number:s,syncCode:this.getOrCreateSyncCode(),avatar_url:o,avatarUrl:o,avatar:o,photo_url:o,photoUrl:o}},saveUserProfile(n,e,t){const o=n?n.trim():"",i=e!==void 0?e.trim():"";if(o&&!_e(o)&&(localStorage.setItem(ee.NICKNAME,o),localStorage.setItem("planex_user_nickname",o),localStorage.setItem("planex_nickname",o),localStorage.setItem("planex_leaderboard_nickname",o)),i&&localStorage.setItem(ee.TARGET,i),t)try{localStorage.setItem("planex_user_avatar",t)}catch{}try{const a=localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account");let r=a?JSON.parse(a):{};o&&!_e(o)&&(r.full_name=o,r.name=o,r.nickname=o),t&&(r.avatar_url=t,r.photo_url=t,r.avatar=t),localStorage.setItem("planex_auth_user",JSON.stringify(r)),localStorage.setItem("planex_user_account",JSON.stringify(r))}catch{}try{const a=localStorage.getItem("planex_user_profile");let r=a?JSON.parse(a):{};o&&!_e(o)&&(r.name=o,r.nickname=o),i&&(r.targetField=i,r.major=i,r.target=i),t&&(r.avatar=t,r.avatar_url=t,r.photo=t,r.photoUrl=t),localStorage.setItem("planex_user_profile",JSON.stringify(r))}catch{}},getUserGroups(){return p&&typeof p.getUserGroups=="function"?p.getUserGroups():[]},setUserGroups(n){return p&&typeof p.setUserGroups=="function"?p.setUserGroups(n):[]},getActiveGroupCode(){return p&&typeof p.getActiveGroupCode=="function"?p.getActiveGroupCode():null},setActiveGroupCode(n){return p&&typeof p.setActiveGroupCode=="function"?p.setActiveGroupCode(n):null},getActiveGroup(){return p&&typeof p.getActiveGroup=="function"?p.getActiveGroup():null},getUserGroupData(){return this.getActiveGroup()},setUserGroupData(n){return n&&p&&typeof p.addUserGroup=="function"?p.addUserGroup(n):null},async deleteGroup(n=null){const e=String(n||this.getActiveGroupCode()||"").trim().toUpperCase();if(!e)return{success:!1,message:"کد گروه مشخص نشده است."};const t=this.getUserProfile();try{await Te(`${ce}/api/rooms/delete.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:e,user_id:t.userId,phone:t.phone,creator_id:t.userId})})}catch(o){console.warn("[LeaderboardService] Backend delete room warning:",o)}return localStorage.removeItem(`${ee.GROUP_CACHE_PREFIX}${e}`),localStorage.removeItem(`${ee.GROUP_ROSTER_PREFIX}${e}`),localStorage.removeItem(`squad_pending_${e}`),p&&typeof p.removeUserGroup=="function"&&p.removeUserGroup(e),this.getActiveGroupCode()===e&&(this.setActiveGroupCode(null),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data")),await this.fetchMyRooms().catch(()=>{}),{success:!0,message:`گروه «${e}» با موفقیت به طور کامل حذف شد.`}},async fetchUserGroups(n=!0){const e=this.getUserProfile();try{let t=null;try{t=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}const o=e.phone||(t==null?void 0:t.phone)||(t==null?void 0:t.phone_number)||(()=>{try{const s=JSON.parse(localStorage.getItem("planex_user_profile")||"{}");return s.phone||s.mobile||""}catch{return""}})()||"",i=e.userId||(t==null?void 0:t.id)||(t==null?void 0:t.telegram_id)||(t==null?void 0:t.uid)||"",a=new URLSearchParams;i&&a.set("user_id",i),o&&a.set("phone",o),n&&(a.set("force","1"),a.set("_t",Date.now().toString()));const d=await(await Te(`${ce}/api/rooms/my-rooms.php?${a.toString()}`,{cache:"no-store",headers:{"Cache-Control":"no-cache"}})).json();if(d&&d.success&&Array.isArray(d.rooms))if(d.rooms.length>0){p&&typeof p.setUserGroups=="function"&&p.setUserGroups(d.rooms);try{localStorage.setItem("planex_my_groups",JSON.stringify(d.rooms)),localStorage.setItem("planex_my_rooms",JSON.stringify(d.rooms))}catch{}const s=this.getActiveGroupCode();if((!s||!d.rooms.some(l=>(l.code||l.groupCode)===s))&&d.rooms.length>0){const l=d.rooms[0].code||d.rooms[0].groupCode;l&&this.setActiveGroupCode(l)}return window.dispatchEvent(new CustomEvent("groups-updated",{detail:d.rooms})),window.dispatchEvent(new CustomEvent("groups-changed",{detail:d.rooms})),d.rooms}else{const s=this.getUserGroups();return s&&s.length>0?(console.warn("[LeaderboardService] fetchUserGroups received 0 rooms from server, preserving",s.length,"local groups."),s):(p&&typeof p.setUserGroups=="function"&&p.setUserGroups([]),window.dispatchEvent(new CustomEvent("groups-updated",{detail:[]})),window.dispatchEvent(new CustomEvent("groups-changed",{detail:[]})),[])}}catch(t){console.warn("[LeaderboardService] fetchUserGroups error:",t)}return this.getUserGroups()},async fetchMyRooms(n=!0){return this.fetchUserGroups(n)},async fetchPublicRooms(){try{const e=await(await Te(`${ce}/api/rooms/public.php`)).json();if(e&&e.success&&Array.isArray(e.rooms))return e.rooms}catch(n){console.warn("[LeaderboardService] fetchPublicRooms error:",n)}return[]},async fetchPendingRequests(n=null){const e=n||this.getActiveGroupCode();if(!e)return[];try{const t=this.getUserProfile(),i=await(await Te(`${ce}/api/rooms/requests.php?room_code=${encodeURIComponent(e)}&user_id=${encodeURIComponent(t.userId)}`)).json();if(i&&i.success&&Array.isArray(i.requests))return i.requests}catch(t){console.warn("[LeaderboardService] fetchPendingRequests error:",t)}return[]},async handleMembershipRequest(n,e,t="approve"){const o=n||this.getActiveGroupCode(),i=this.getUserProfile();try{return await(await Te(`${ce}/api/rooms/requests.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:o,action:t,target_user_id:e,admin_id:i.userId,phone:i.phone})})).json()}catch(a){return console.error("[LeaderboardService] handleMembershipRequest error:",a),{success:!1,message:a.message}}},async approveMember(n,e){const t=String(n||this.getActiveGroupCode()||"").trim().toUpperCase();if(!t||!e)return{success:!1,message:"شناسه گروه یا کاربر نامعتبر است."};const o=await this.handleMembershipRequest(t,e,"approve"),i=this.getGroupRoster(t),a=i.findIndex(r=>r.userId===e||r.id===e||r.phone===e);if(a>=0)i[a].status="approved";else{const d=(window.groupPendingRequests||[]).find(s=>(s.userId||s.user_id||s.phone)===e)||{};i.push({userId:e,nickname:d.nickname||d.name||"کاربر جدید",target:d.target||"کنکور سراسری",joinedAt:Date.now(),isOwner:!1,status:"approved"})}return this.saveGroupRoster(t,i),Array.isArray(window.groupPendingRequests)&&(window.groupPendingRequests=window.groupPendingRequests.filter(r=>(r.userId||r.user_id||r.phone)!==e)),this.fetchLeaderboard(null,!0,t).catch(()=>{}),{success:!0,message:o&&o.message?o.message:"کاربر با موفقیت به گروه اضافه شد"}},async rejectMember(n,e){const t=String(n||this.getActiveGroupCode()||"").trim().toUpperCase();if(!t||!e)return{success:!1,message:"شناسه گروه یا کاربر نامعتبر است."};const o=await this.handleMembershipRequest(t,e,"reject"),a=this.getGroupRoster(t).filter(r=>r.userId!==e&&r.id!==e&&r.phone!==e);return this.saveGroupRoster(t,a),Array.isArray(window.groupPendingRequests)&&(window.groupPendingRequests=window.groupPendingRequests.filter(r=>(r.userId||r.user_id||r.phone)!==e)),{success:!0,message:o&&o.message?o.message:"درخواست عضویت رد شد"}},async toggleGroupPrivacy(n,e){const t=n||this.getActiveGroupCode();try{const i=await(await Te(`${ce}/api/rooms/toggle-type.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:t,is_private:e?1:0})})).json();if(i&&i.success){const a=this.getUserGroups(),r=a.find(d=>(d.code||d.groupCode)===t);return r&&(r.is_private=e?1:0,r.type=e?"private":"public",p&&typeof p.setUserGroups=="function"&&p.setUserGroups(a)),i}return i}catch(o){console.error("[LeaderboardService] toggleGroupPrivacy error:",o)}return{success:!1,message:"خطا در برقراری ارتباط با سرور"}},generateGroupCode(){return`PLX-${Math.floor(1e3+Math.random()*9e3)}`},async createPrivateGroup(n,e=!1,t={}){const o=this.generateGroupCode(),i=this.getUserProfile(),a=n&&n.trim()?n.trim():`گروه ${o}`,r={code:o,groupCode:o,name:a,groupName:a,joinedAt:Date.now(),isOwner:!0,is_private:e?1:0,type:e?"private":"public",status:"approved",userId:i.userId,category:t.category||"general",capacity:t.capacity||600,announcement:t.announcement||""};p&&typeof p.addUserGroup=="function"&&p.addUserGroup(r);try{await Te(`${ce}/api/rooms/create.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:o,title:a,phone:i.phone,creator_phone:i.phone,creator_id:i.userId,admin_id:i.userId,user_id:i.userId,is_private:e?1:0,type:e?"private":"public",user:{name:i.nickname,avatar_url:i.avatarUrl},category:t.category||"general",announcement:t.announcement||""})})}catch(s){console.warn("[LeaderboardService] Backend create room call warning:",s)}const d=[{userId:i.userId,nickname:i.nickname,target:i.target,joinedAt:Date.now(),isOwner:!0,status:"approved"}];return this.saveGroupRoster(o,d),await this.syncUserScore(!0,o),{success:!0,groupCode:o,groupName:a,groupData:r}},async createGroup(n,e=!1,t={}){return this.createPrivateGroup(n,e,t)},isUserVerified(){var i,a,r;let n=null;try{n=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}const e=this.getUserProfile(),t=(r=(a=(i=window.Telegram)==null?void 0:i.WebApp)==null?void 0:a.initDataUnsafe)==null?void 0:r.user;return!!(t&&t.id||n&&(n.id||n.telegram_id||n.phone||n.phone_number)||e&&(e.phone||e.phone_number||e.telegram_id||e.userId&&!e.userId.startsWith("usr_"))||localStorage.getItem("planex_user_phone"))},async joinPrivateGroup(n,e=null){if(!n||!n.trim())return{success:!1,message:"لطفاً کد ۶ رقمی یا شماره گروه را وارد نمایید."};const t=String(n).trim().toUpperCase().replace(/[^A-Z0-9-]/g,"");if(t.length<4)return{success:!1,message:"فرمت کد گروه نامعتبر است (مثال: PLX-4829)."};const o=this.getUserProfile();if(!this.isUserVerified())return typeof window.openLoginModal=="function"?window.openLoginModal():window.appState&&(window.appState.activeModal="login",window.renderApp&&window.renderApp()),{success:!1,requiresVerification:!0,message:"برای پیوستن به گروه، لطفاً ابتدا حساب کاربری خود را در ربات تلگرام یا اپلیکیشن تایید نمایید."};let i=null;try{i=await(await Te(`${ce}/api/rooms/join.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:t,phone:o.phone,user_phone:o.phone,user_id:o.userId,nickname:o.nickname,user:{name:o.nickname,avatar_url:o.avatarUrl},bypass_pending:!0,auto_approve:!0,action:"join"})})).json().catch(()=>null)}catch(c){console.warn("[LeaderboardService] Backend join call warning:",c)}const a=i&&i.room?i.room:null,r=e||(a?a.title:`گروه ${t}`),d={code:t,groupCode:t,name:r,groupName:r,joinedAt:Date.now(),isOwner:!1,status:"approved",is_private:a&&a.is_private?1:0,userId:o.userId};p&&typeof p.addUserGroup=="function"&&p.addUserGroup(d);const s=this.getGroupRoster(t),l=s.findIndex(c=>c.userId===o.userId||c.id===o.userId);return l<0?s.push({userId:o.userId,nickname:o.nickname,target:o.target,joinedAt:Date.now(),isOwner:!1,status:"approved"}):(s[l].status="approved",s[l].nickname=o.nickname||s[l].nickname,s[l].target=o.target||s[l].target),this.saveGroupRoster(t,s),this.setActiveGroupCode(t),await this.syncUserScore(!0,t).catch(()=>{}),await this.fetchLeaderboard(null,!0,t).catch(()=>{}),{success:!0,pending:!1,groupCode:t,groupName:r,groupData:d,message:"با موفقیت به گروه پیوستید! 🎉"}},async joinGroupByCode(n,e=null){return this.joinPrivateGroup(n,e)},async joinGroupByLink(n){let e=n;if(e&&e.includes("group=")){const t=e.match(/group=([^&]+)/);t&&(e=t[1])}return this.joinPrivateGroup(e)},getGroupRoster(n){if(!n)return[];try{const e=localStorage.getItem(`${ee.GROUP_ROSTER_PREFIX}${n}`);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}},saveGroupRoster(n,e){if(!(!n||!Array.isArray(e)))try{localStorage.setItem(`${ee.GROUP_ROSTER_PREFIX}${n}`,JSON.stringify(e))}catch{}},getTodayDateStr(){try{return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Tehran",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date)}catch{return new Date().toISOString().split("T")[0]}},getTodayStats(){const n=p.getTodayJalaliString(),e=p.getStudyMinutesByDate(n),t=+(e/60).toFixed(2),o=p.getDailyTestCount(n),i=typeof p.getTodayStudiedSubjects=="function"?p.getTodayStudiedSubjects(n):[],a=this.getTodayDateStr(),r=n;return{studyMinutes:e,studyHours:t,testCount:o,subjects:Array.isArray(i)?i:[],gregorianDate:a,jalaliDateStr:r}},getPersianWeekWindow(n=new Date){const e=new Date(n),t=(e.getDay()+1)%7,o=new Date(e.getFullYear(),e.getMonth(),e.getDate()-t,0,0,0,0),i=new Date(o.getFullYear(),o.getMonth(),o.getDate()+6,23,59,59,999),a=[],r=[];for(let d=0;d<7;d++){const s=new Date(o.getFullYear(),o.getMonth(),o.getDate()+d),l=s.getFullYear(),c=String(s.getMonth()+1).padStart(2,"0"),f=String(s.getDate()).padStart(2,"0");if(r.push(`${l}-${c}-${f}`),p&&typeof p.gregorianToJalali=="function"){const[m,y,w]=p.gregorianToJalali(l,s.getMonth()+1,s.getDate());a.push(`${m}/${String(y).padStart(2,"0")}/${String(w).padStart(2,"0")}`)}}return{satDate:o,friDate:i,startTimestamp:o.getTime(),endTimestamp:i.getTime(),satDateStr:`${o.getFullYear()}-${String(o.getMonth()+1).padStart(2,"0")}-${String(o.getDate()).padStart(2,"0")}`,weekJalaliDates:a,weekGregorianDates:r}},getWeeklyStats(){const n=this.getPersianWeekWindow();let e=0,t=0;const o=new Set;let i=[];try{const r=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),d=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),s=new Map;Array.isArray(d)&&d.forEach(l=>{l&&(l.id||l.timestamp)&&s.set(l.id||`ts_${l.timestamp}_${l.duration}`,l)}),Array.isArray(r)&&r.forEach(l=>{l&&(l.id||l.timestamp)&&s.set(l.id||`ts_${l.timestamp}_${l.duration}`,l)}),i=Array.from(s.values())}catch{i=[]}i.forEach(r=>{if(!r||typeof r!="object")return;const d=Number(r.timestamp||r.createdAt||r.endTime||0),s=p&&typeof p.normalizeJalaliDate=="function"?p.normalizeJalaliDate(r.dateStr||r.date):r.dateStr||r.date,l=d>=n.startTimestamp&&d<=n.endTimestamp,c=s&&n.weekJalaliDates.includes(s);if((l||c)&&!(r.type==="non-study"||r.type==="non_study"||r.type==="break"||r.activityType==="non_study"||r.activityType==="non-study"||r.activityType==="break"||r.isStudy===!1||r.is_study_time===!1||r.counts_for_study===!1||r.isBreak===!0||r.is_break===!0||r.timerType==="break"||r.timerType===2)){e+=Math.max(0,Math.ceil(Number(r.duration!==void 0?r.duration:r.minutes)||0)),t+=Math.max(0,Number(r.testCount!==void 0?r.testCount:r.tests)||0);const m=r.subject&&r.subject.trim()!=="مطالعه متمرکز"?r.subject.trim():r.categoryTitle||r.category;m&&m.trim()&&o.add(m.trim())}});try{const r=JSON.parse(localStorage.getItem("planex_recorded_timer")||"{}");let d=0,s=0;n.weekJalaliDates.forEach(l=>{r[l]&&(d+=Number(r[l].minutes)||0,s+=Number(r[l].tests)||0)}),e=Math.max(e,d),t=Math.max(t,s)}catch{}if(p&&typeof p.getDailyStats=="function"){let r=0,d=0;n.weekJalaliDates.forEach(s=>{try{const l=p.getDailyStats(s);l&&(r+=Number(l.studyMinutes)||0,d+=Number(l.totalTests)||0)}catch{}}),e=Math.max(e,r),t=Math.max(t,d)}const a=this.getTodayStats();return e=Math.max(e,Number(a.studyMinutes)||0),t=Math.max(t,Number(a.testCount)||0),{studyMinutes:e,studyHours:+(e/60).toFixed(2),testCount:t,subjects:Array.from(o),weekWindow:n}},calculateMemberPeriodStats(n,e="week",t=null){if(!n)return{totalMinutes:0,totalTests:0};const o=t||this.getPersianWeekWindow(),i=!!(n.isUser||n.isCurrentUser||this.getUserProfile()&&n.userId===this.getUserProfile().userId),a=Number(n.studyMinutes||n.study_minutes||0),r=Number(n.testCount||n.test_count||0);if(e==="today"){let u=a,g=r;if(i){const b=this.getTodayStats();u=Math.max(u,Number((b==null?void 0:b.studyMinutes)||0)),g=Math.max(g,Number((b==null?void 0:b.testCount)||0))}return{totalMinutes:Math.round(u),totalTests:Math.round(g)}}let d=0,s=0;const l=u=>{if(!u||typeof u!="object")return;const g=Number(u.duration!==void 0?u.duration:u.minutes!==void 0?u.minutes:u.studyMinutes||u.study_minutes||0)||0,b=Number(u.testCount!==void 0?u.testCount:u.tests!==void 0?u.tests:u.test_count||0)||0;if(!(u.type==="non-study"||u.type==="non_study"||u.type==="break"||u.activityType==="non_study"||u.activityType==="non-study"||u.activityType==="break"||u.isStudy===!1||u.is_study_time===!1||u.counts_for_study===!1||u.isBreak===!0||u.is_break===!0||u.timerType==="break"||u.timerType===2)){if(e==="all")d+=Math.max(0,g),s+=Math.max(0,b);else if(e==="week"){const A=Number(u.timestamp||u.createdAt||u.endTime||0),k=String(u.dateStr||u.date||u.jalaliDate||"").trim(),T=k.replace(/\//g,"-"),x=A>=o.startTimestamp&&A<=o.endTimestamp,M=k&&(o.weekJalaliDates.includes(k)||o.weekJalaliDates.map(P=>P.replace(/\//g,"-")).includes(T)||o.weekGregorianDates.includes(k));(x||M||!A&&!k)&&(d+=Math.max(0,g),s+=Math.max(0,b))}}};e==="week"&&Array.isArray(n.weeklyHistory)&&n.weeklyHistory.forEach(l),Array.isArray(n.history)?n.history.forEach(l):n.history&&typeof n.history=="object"&&Object.entries(n.history).forEach(([u,g])=>{typeof g=="number"?l({date:u,duration:g,testCount:0}):g&&typeof g=="object"&&l({date:u,...g})});const c=n.sessions||n.dailyLogs||n.logs||n.dailyHistory;Array.isArray(c)&&c.forEach(l);let f=Math.max(d,Number(n.weeklyStudyMinutes!==void 0?n.weeklyStudyMinutes:n.weekly_study_minutes||n.weeklyMinutes||0),a),m=Math.max(s,Number(n.weeklyTestCount!==void 0?n.weeklyTestCount:n.weekly_test_count||n.weeklyTests||0),r),y=Math.max(d,Number(n.allTimeStudyMinutes!==void 0?n.allTimeStudyMinutes:n.alltime_study_minutes||n.totalStudyMinutes||n.totalMinutes||0),f,a),w=Math.max(s,Number(n.allTimeTestCount!==void 0?n.allTimeTestCount:n.alltime_test_count||n.totalTestCount||n.totalTests||0),m,r);if(i){const u=this.getWeeklyStats();if(u&&(f=Math.max(f,Number(u.studyMinutes||0)),m=Math.max(m,Number(u.testCount||0))),p&&typeof p.getStudyStatsByPeriod=="function"){const g=p.getStudyStatsByPeriod("all");g&&(y=Math.max(y,Number(g.studyMinutes||0),f),w=Math.max(w,Number(g.testCount||0),m))}}return e==="week"?{totalMinutes:Math.round(f),totalTests:Math.round(m)}:{totalMinutes:Math.round(y),totalTests:Math.round(w)}},aggregateAndRankMembers(n,e="today"){if(!Array.isArray(n))return[];const t=this.getPersianWeekWindow(),o=n.map(i=>{const a=this.calculateMemberPeriodStats(i,e,t),r=a.totalMinutes,d=a.totalTests,s=r*60+d*10;return{...i,totalMinutes:r,totalTests:d,displayStudyMins:r,displayTestCount:d,studyMinutes:e==="today"?r:i.studyMinutes||i.study_minutes||0,testCount:e==="today"?d:i.testCount||i.test_count||0,weeklyStudyMinutes:e==="week"?r:i.weeklyStudyMinutes||i.weekly_study_minutes||r,weeklyTestCount:e==="week"?d:i.weeklyTestCount||i.weekly_test_count||d,allTimeStudyMinutes:e==="all"?r:i.allTimeStudyMinutes||i.alltime_study_minutes||r,allTimeTestCount:e==="all"?d:i.allTimeTestCount||i.alltime_test_count||d,score:s}});return o.sort((i,a)=>a.score!==i.score?a.score-i.score:a.totalMinutes!==i.totalMinutes?a.totalMinutes-i.totalMinutes:a.totalTests-i.totalTests),o.map((i,a)=>({...i,rank:a+1}))},canAutoSync(){return!1},getSyncStatus(){const n=parseInt(localStorage.getItem(ee.LAST_SYNC)||"0");if(!n)return{hasSyncedBefore:!1,lastSyncText:"هنوز همگام‌سازی نشده"};const e=Date.now()-n,t=Math.floor(e/(60*1e3)),o=Math.floor(t/60);let i="";return t<1?i="لحظاتی پیش":t<60?i=`${t} دقیقه پیش`:i=`${o} ساعت و ${t%60} دقیقه پیش`,{hasSyncedBefore:!0,lastSyncTimestamp:n,lastSyncText:i}},async syncUserScore(n=!1,e=null){const t=this.getUserGroups();if(t.length===0&&!e)return{success:!1,noGroup:!0,message:"شما در هیچ گروه رقابتی عضو نیستید. لطفاً ابتدا یک گروه بسازید یا با کد وارد شوید."};const o=e?t.filter(r=>r.code===String(e).trim().toUpperCase()):t;o.length===0&&e&&o.push({code:String(e).trim().toUpperCase(),name:`گروه ${e}`});let i=null;const a=this.getActiveGroupCode();for(const r of o){const d=await this.syncSingleGroupScore(r);(!i||r.code===a)&&(i=d)}return i||{success:!0,message:"کارنامه در گروه‌ها ثبت شد."}},async setStudyStatus(n,e="",t=!1,o="study"){const i=this.getUserGroups(),a=this.getActiveGroup(),r=this.getUserProfile(),d=Date.now(),s=String(e||"").trim(),l=!!n&&o==="study";let c="";l?c="🟢 در حال مطالعه":o==="break"?c="☕ در حال استراحت":(o==="non-study"||o==="non_study")&&(c="🧘 فعالیت غیردرسی");const f=Array.isArray(i)&&i.length>0?i:a?[a]:[];if(f.length===0)return{success:!1,noGroup:!0};if(f.forEach(y=>{const w=String(y.code||y.groupCode).trim().toUpperCase();if(!w)return;const u=this.getGroupRoster(w),g=u.findIndex(b=>b.userId===r.userId);g>=0&&(u[g].isStudying=l,u[g].statusType=o,u[g].statusLabel=c,u[g].studySubject=l?s:"",u[g].subject=l?s:"",u[g].lastHeartbeat=l?d:0,this.saveGroupRoster(w,u));try{const b=localStorage.getItem(`${ee.GROUP_CACHE_PREFIX}${w}`);if(b){let v=JSON.parse(b);if(Array.isArray(v)){const A=v.findIndex(k=>k.userId===r.userId);A>=0&&(v[A].isStudying=l,v[A].statusType=o,v[A].statusLabel=c,v[A].studySubject=l?s:"",v[A].subject=l?s:"",v[A].lastHeartbeat=l?d:0),localStorage.setItem(`${ee.GROUP_CACHE_PREFIX}${w}`,JSON.stringify(v))}}}catch{}}),!l)try{for(let y=0;y<localStorage.length;y++){const w=localStorage.key(y);if(w&&(w.startsWith(ee.GROUP_ROSTER_PREFIX)||w.startsWith(ee.GROUP_CACHE_PREFIX))){const u=localStorage.getItem(w);if(u&&u.includes(r.userId)){const g=JSON.parse(u);if(Array.isArray(g)){let b=!1;g.forEach(v=>{v.userId===r.userId&&v.isStudying&&(v.isStudying=!1,v.statusType="stopped",v.statusLabel="",v.studySubject="",v.subject="",v.lastHeartbeat=0,b=!0)}),b&&localStorage.setItem(w,JSON.stringify(g))}}}}}catch{}const m=f.map(async y=>{const w=String(y.code||y.groupCode).trim().toUpperCase();if(!w)return;const u=r.avatar_url||r.avatarUrl||r.avatar||r.photo_url||"",g={action:"set_status",groupCode:w,userId:r.userId,nickname:r.nickname,name:r.nickname,target:r.target,avatar_url:u,avatarUrl:u,avatar:u,photo_url:u,isStudying:l,statusType:o,statusLabel:c,subject:l?s:"",studySubject:l?s:"",lastHeartbeat:l?d:0},b=[`${ce}/api/leaderboard.php`,`${ce}/api/v1/leaderboard.php`];for(const v of b)try{const A=await Te(v,{method:"POST",headers:{"Content-Type":"application/json","Cache-Control":"no-cache",Pragma:"no-cache"},body:JSON.stringify(g),keepalive:t});if(A.ok)return await A.json().catch(()=>({success:!0}))}catch{}});try{return await Promise.allSettled(m),{success:!0,isStudying:l,statusType:o,statusLabel:c,subject:l?s:"",lastHeartbeat:l?d:0}}catch{return{success:!1,offline:!0}}},startStudyHeartbeat(n="",e="study"){this._currentStudySubject=n||"",this._studyHeartbeatInterval&&(typeof this._studyHeartbeatInterval!="boolean"&&clearInterval(this._studyHeartbeatInterval),this._studyHeartbeatInterval=null),this._studyHeartbeatInterval=!0;const t=e==="study";this.setStudyStatus(t,this._currentStudySubject,!1,e).catch(()=>{})},stopStudyHeartbeat(){this._studyHeartbeatInterval&&(typeof this._studyHeartbeatInterval!="boolean"&&clearInterval(this._studyHeartbeatInterval),this._studyHeartbeatInterval=null),this._currentStudySubject="",this.setStudyStatus(!1,"",!1,"stopped").catch(()=>{})},async syncSingleGroupScore(n){if(!n)return{success:!1,noGroup:!0};const e=this.getUserProfile(),t=this.getTodayStats(),o=this.getWeeklyStats(),i=p&&typeof p.getStudyStatsByPeriod=="function"?p.getStudyStatsByPeriod("all"):t,a=String(n.code||n.groupCode||n.room_code||n.id||"").trim().toUpperCase();if(!a||a==="UNDEFINED"||a==="NULL"||a==="0")return{success:!1,noGroup:!0,message:"کد گروه معتبر نیست."};const r=String(n.name||n.groupName||`گروه ${a}`).trim(),d=this.getGroupRoster(a).find(w=>w.userId===e.userId)||{},s=this.isCurrentStudyingActive(),l=s&&(this._currentStudySubject||d.studySubject)||"",c=e.avatar_url||e.avatarUrl||e.avatar||e.photo_url||"",f={action:"sync",groupCode:a,groupName:r,userId:e.userId,nickname:e.nickname,name:e.nickname,target:e.target,avatar_url:c,avatarUrl:c,avatar:c,photo_url:c,syncCode:e.syncCode||this.getOrCreateSyncCode(),studyMinutes:t.studyMinutes,testCount:t.testCount,weeklyStudyMinutes:Math.max(Number(o.studyMinutes||0),Number(t.studyMinutes||0)),weeklyTestCount:Math.max(Number(o.testCount||0),Number(t.testCount||0)),allTimeStudyMinutes:Math.max(Number(i.studyMinutes||0),Number(o.studyMinutes||0),Number(t.studyMinutes||0)),allTimeTestCount:Math.max(Number(i.testCount||0),Number(o.testCount||0),Number(t.testCount||0)),subjects:t.subjects||[],isStudying:s,subject:l,studySubject:l,lastHeartbeat:s?Date.now():0,date:t.gregorianDate,updatedAt:Date.now()},m=[`${ce}/api/leaderboard.php`,`${ce}/api/v1/leaderboard.php`];for(const w of m)try{const u=await Te(w,{method:"POST",headers:{"Content-Type":"application/json","Cache-Control":"no-cache",Pragma:"no-cache"},body:JSON.stringify(f)}),g=await u.text();let b=null;try{b=g?JSON.parse(g):null}catch{b=null}if(u.ok&&b&&b.success!==!1){localStorage.setItem(ee.LAST_SYNC,String(Date.now()));const v=b.list||b.leaderboard||[],A=Array.isArray(v)?v.map(vt):[];return A.length>0?(localStorage.setItem(`${ee.GROUP_CACHE_PREFIX}${a}`,JSON.stringify(A)),localStorage.setItem(ee.CACHE_DATE,t.gregorianDate)):this.updateLocalGroupCacheWithUser(a,f),Array.isArray(b.roster)&&b.roster.length>0&&this.saveGroupRoster(a,b.roster),{success:!0,serverConfirmed:!0,endpoint:w,rank:b.rank,groupCode:a,groupName:b.groupName||r,leaderboard:A,list:A,entry:f,message:b.message||"کارنامه با موفقیت در گروه اختصاصی ثبت شد."}}}catch(u){console.error("[Leaderboard] Sync failed for group",a,u)}this.updateLocalGroupCacheWithUser(a,f);const y=this.getCachedLeaderboard(t.gregorianDate,a);return{success:!1,serverConfirmed:!1,offline:!0,entry:f,groupCode:a,groupName:r,leaderboard:y.leaderboard,message:"ثبت محلی در گروه انجام شد (سرور موقتاً در دسترس نیست)."}},async syncUserProgress(){return this.syncUserScore()},async fetchLeaderboard(n=null,e=!1,t=null){const o=n||this.getTodayDateStr(),i=t||this.getActiveGroupCode(),r=this.getUserGroups().find(d=>d.code===i)||this.getActiveGroup();if(!i)return{success:!0,noGroup:!0,fromCache:!1,leaderboard:[],list:[],date:o};try{const d=e?`&_t=${Date.now()}`:"";let s=await Te(`${ce}/api/leaderboard.php?groupCode=${i}&date=${o}${d}`,{cache:"no-store",headers:{"Cache-Control":"no-cache",Pragma:"no-cache"}});s.ok||(s=await Te(`${ce}/api/v1/leaderboard.php?groupCode=${i}&date=${o}${d}`,{cache:"no-store",headers:{"Cache-Control":"no-cache",Pragma:"no-cache"}}));const l=await s.text();let c=null;try{c=l?JSON.parse(l):null}catch{c=null}if(s.ok&&c){const f=c.list||c.leaderboard;if(c.success&&Array.isArray(f)){const m=this.isCurrentStudyingActive(),y=f.map(w=>{const u=vt(w);return u.userId===profile.userId&&(u.isStudying=m,m||(u.studySubject="",u.subject="",u.lastHeartbeat=0)),u});if(localStorage.setItem(`${ee.GROUP_CACHE_PREFIX}${i}`,JSON.stringify(y)),localStorage.setItem(ee.CACHE_DATE,o),Array.isArray(c.roster)){const w=c.roster.map(u=>u.userId===profile.userId?{...u,isStudying:m,studySubject:m&&u.studySubject||"",subject:m&&u.subject||"",lastHeartbeat:m?u.lastHeartbeat||Date.now():0}:u);this.saveGroupRoster(i,w)}return r&&(r.members=y,this.setUserGroupData({...r,members:y,...c.groupName?{name:c.groupName,groupName:c.groupName}:{}})),{success:!0,fromCache:!1,leaderboard:y,list:y,groupCode:i,groupName:c.groupName||(r?r.name||r.groupName:`گروه ${i}`),groupData:this.getUserGroupData()||r,date:o}}}throw new Error("Non-success leaderboard response")}catch(d){return console.warn("Leaderboard fetch failed, falling back to local group cache:",d),this.getCachedLeaderboard(o,i)}},getCachedLeaderboard(n=null,e=null){const t=n||this.getTodayDateStr(),o=e||this.getActiveGroupCode(),a=this.getUserGroups().find(k=>k.code===o)||this.getActiveGroup();if(!o)return{success:!0,noGroup:!0,fromCache:!0,offline:!0,leaderboard:[],list:[],date:t};const r=this.getGroupRoster(o),d=localStorage.getItem(`${ee.GROUP_CACHE_PREFIX}${o}`);let s=[];if(d)try{s=JSON.parse(d)}catch{s=[]}Array.isArray(s)||(s=[]);const l=this.getUserProfile(),c=this.getTodayStats(),f=new Map;r.forEach(k=>{const T=this.calculateMemberPeriodStats(k,"today"),x=this.calculateMemberPeriodStats(k,"week"),M=this.calculateMemberPeriodStats(k,"all");f.set(k.userId,{userId:k.userId,nickname:k.nickname||"داوطلب",target:k.target||"کنکور سراسری",avatarUrl:k.avatarUrl||"",studyMinutes:Math.max(Number(k.studyMinutes||0),T.totalMinutes),testCount:Math.max(Number(k.testCount||0),T.totalTests),weeklyStudyMinutes:Math.max(Number(k.weeklyStudyMinutes||0),x.totalMinutes),weeklyTestCount:Math.max(Number(k.weeklyTestCount||0),x.totalTests),allTimeStudyMinutes:Math.max(Number(k.allTimeStudyMinutes||0),M.totalMinutes),allTimeTestCount:Math.max(Number(k.allTimeTestCount||0),M.totalTests),subjects:k.subjects||[],dailyLogs:k.dailyLogs||k.logs||k.history||[],history:k.history||[],isOwner:!!k.isOwner,joinedAt:k.joinedAt||Date.now(),date:t,isStudying:!!k.isStudying,studySubject:k.studySubject||k.subject||"",subject:k.studySubject||k.subject||"",lastHeartbeat:k.lastHeartbeat||0,updatedAt:k.joinedAt||Date.now()})}),s.forEach(k=>{if(k&&k.userId){const T=vt(k),x=f.get(T.userId)||{},M=this.calculateMemberPeriodStats(T,"today"),P=this.calculateMemberPeriodStats(T,"week"),C=this.calculateMemberPeriodStats(T,"all");f.set(T.userId,{...x,...T,studyMinutes:Math.max(Number(x.studyMinutes||0),Number(T.studyMinutes||0),M.totalMinutes),testCount:Math.max(Number(x.testCount||0),Number(T.testCount||0),M.totalTests),weeklyStudyMinutes:Math.max(Number(x.weeklyStudyMinutes||0),Number(T.weeklyStudyMinutes||0),P.totalMinutes),weeklyTestCount:Math.max(Number(x.weeklyTestCount||0),Number(T.weeklyTestCount||0),P.totalTests),allTimeStudyMinutes:Math.max(Number(x.allTimeStudyMinutes||0),Number(T.allTimeStudyMinutes||0),C.totalMinutes),allTimeTestCount:Math.max(Number(x.allTimeTestCount||0),Number(T.allTimeTestCount||0),C.totalTests),dailyLogs:T.dailyLogs||T.logs||x.dailyLogs||[],history:T.history||x.history||[],isStudying:T.isStudying!==void 0?!!T.isStudying:!!x.isStudying,studySubject:T.studySubject||T.subject||x.studySubject||"",subject:T.studySubject||T.subject||x.subject||"",lastHeartbeat:T.lastHeartbeat||x.lastHeartbeat||0})}});const m=r.find(k=>k.userId===l.userId)||{},y=this.isCurrentStudyingActive(),w=y&&(this._currentStudySubject||m.studySubject||m.subject)||"",u=y?Date.now():0;m&&m.userId&&(m.isStudying=y,m.studySubject=w,m.subject=w,m.lastHeartbeat=u,this.saveGroupRoster(o,r));const g=this.getWeeklyStats(),b=p&&typeof p.getStudyStatsByPeriod=="function"?p.getStudyStatsByPeriod("all"):c,v={userId:l.userId,nickname:l.nickname,target:l.target,avatarUrl:l.avatar_url||l.avatarUrl||"",avatar_url:l.avatar_url||l.avatarUrl||"",studyMinutes:c.studyMinutes,testCount:c.testCount,weeklyStudyMinutes:Math.max(Number(g.studyMinutes||0),Number(c.studyMinutes||0)),weeklyTestCount:Math.max(Number(g.testCount||0),Number(c.testCount||0)),allTimeStudyMinutes:Math.max(Number(b.studyMinutes||0),Number(g.studyMinutes||0),Number(c.studyMinutes||0)),allTimeTestCount:Math.max(Number(b.testCount||0),Number(g.testCount||0),Number(c.testCount||0)),subjects:c.subjects||[],date:t,isCurrentUser:!0,isOwner:!!(a&&a.isOwner),isStudying:y,studySubject:w,subject:w,lastHeartbeat:u,updatedAt:Date.now()};f.set(l.userId,v);const A=Array.from(f.values());return A.sort((k,T)=>(T.studyMinutes||0)!==(k.studyMinutes||0)?(T.studyMinutes||0)-(k.studyMinutes||0):(T.testCount||0)-(k.testCount||0)),a&&(a.members=A),{success:!0,fromCache:!0,offline:!0,groupCode:a?a.groupCode||a.code:o,groupName:a?a.groupName||a.name:`گروه ${o}`,groupData:a,leaderboard:A,list:A,date:t}},updateLocalGroupCacheWithUser(n,e){try{const t=this.getGroupRoster(n),o=t.findIndex(r=>r.userId===e.userId);o<0?(t.push({userId:e.userId,nickname:e.nickname,target:e.target,joinedAt:Date.now(),isOwner:!!e.isOwner,isStudying:!!e.isStudying,studySubject:e.studySubject||e.subject||"",subject:e.studySubject||e.subject||"",lastHeartbeat:e.lastHeartbeat||Date.now()}),this.saveGroupRoster(n,t)):(t[o]={...t[o],isStudying:e.isStudying!==void 0?!!e.isStudying:t[o].isStudying,studySubject:e.studySubject||e.subject||t[o].studySubject||"",subject:e.studySubject||e.subject||t[o].subject||"",lastHeartbeat:e.lastHeartbeat||t[o].lastHeartbeat||Date.now()},this.saveGroupRoster(n,t));const i=localStorage.getItem(`${ee.GROUP_CACHE_PREFIX}${n}`);let a=[];if(i)try{a=JSON.parse(i)}catch{a=[]}Array.isArray(a)||(a=[]),a=a.filter(r=>r.userId!==e.userId),a.push({...e,isCurrentUser:!0}),a.sort((r,d)=>(d.studyMinutes||0)!==(r.studyMinutes||0)?(d.studyMinutes||0)-(r.studyMinutes||0):(d.testCount||0)-(r.testCount||0)),localStorage.setItem(`${ee.GROUP_CACHE_PREFIX}${n}`,JSON.stringify(a))}catch(t){console.error("Error updating local group cache:",t)}},getIranNowHHMM(){try{return new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Tehran",hour:"2-digit",minute:"2-digit",hour12:!1}).format(new Date)}catch{const e=new Date;return`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`}},isEarlyBirdWindowOpen(){const[n,e]=this.getIranNowHHMM().split(":").map(Number),t=n*60+(e||0);return t>=Le.START_MIN&&t<=Le.END_MIN},getEarlyBirdHistory(){try{const n=localStorage.getItem(ee.EARLY_BIRD_HISTORY),e=n?JSON.parse(n):{};return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}catch{return{}}},extractSessionStartMinutes(n){if(!n||typeof n!="object")return null;const e=a=>{if(a==null||a==="")return null;if(typeof a=="string"){const r=String(a).replace(/[۰-۹]/g,l=>"۰۱۲۳۴۵۶۷۸۹".indexOf(l)).replace(/[٠-٩]/g,l=>"٠١٢٣٤٥٦٧٨٩".indexOf(l)).trim(),d=r.match(/(?:^|\b|T|\s)(\d{1,2}):(\d{2})/);if(d){const l=Number(d[1]),c=Number(d[2]);if(!isNaN(l)&&!isNaN(c)&&l>=0&&l<24&&c>=0&&c<60)return l*60+c}const s=Number(r);if(!isNaN(s)&&s>1e11)a=s;else{const l=new Date(r);isNaN(l.getTime())||(a=l.getTime())}}if(typeof a=="number"&&!isNaN(a)){const r=new Date(a);if(!isNaN(r.getTime())){try{const c=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Tehran",hour:"2-digit",minute:"2-digit",hour12:!1}).format(r).split(":").map(Number);if(!isNaN(c[0])&&!isNaN(c[1])){const f=c[0]*60+c[1];if(f>=Le.START_MIN&&f<=Le.END_MIN)return f}}catch{}const d=r.getHours()*60+r.getMinutes();if(d>=Le.START_MIN&&d<=Le.END_MIN)return d;const s=r.getUTCHours()*60+r.getUTCMinutes();return s>=Le.START_MIN&&s<=Le.END_MIN?s:d}}return null},t=[n.startTimeStr,n.startTime,n.start_time,n.time];for(const a of t){const r=e(a);if(r!==null)return r}const o=Math.max(1,Number(n.duration||n.minutes)||1),i=[n.endTimeStr,n.endTime,n.end_time,n.timestamp,n.createdAt,n.created_at];for(const a of i){const r=e(a);if(r!==null){const d=r-o;if(d>=0)return d}}return null},getTodayWakeTime(){const n=this.getEarlyBirdHistory(),e=this.getTodayDateStr();if(n[e]){const t=String(n[e]).replace(/[۰-۹]/g,r=>"۰۱۲۳۴۵۶۷۸۹".indexOf(r)).trim(),[o,i]=t.split(":").map(Number),a=!isNaN(o)&&!isNaN(i)?o*60+i:null;if(a!==null&&a>=Le.START_MIN&&a<=Le.END_MIN)return t}try{const t=localStorage.getItem("early_bird_daily_status");if(t){const o=JSON.parse(t);if(o.date===e)return o.time;localStorage.removeItem("early_bird_daily_status"),typeof window<"u"&&window.personalSyncService&&typeof window.personalSyncService.pushToCloud=="function"&&window.personalSyncService.pushToCloud()}}catch{localStorage.removeItem("early_bird_daily_status")}return null},getTodayEarlyBird(){const n=this.getTodayWakeTime();return n?{wakeTime:n,wake_time:n,date:this.getTodayDateStr()}:null},saveEarlyBirdLocal(n,e){try{const t=this.getEarlyBirdHistory();t[n]=e,localStorage.setItem(ee.EARLY_BIRD_HISTORY,JSON.stringify(t))}catch(t){console.error("[EarlyBird] ذخیره تاریخچه محلی ناموفق بود:",t)}},async recordEarlyBird(){var i,a;const n=this.getUserProfile(),e=this.getTodayDateStr(),t=this.getIranNowHHMM();if(!this.isEarlyBirdWindowOpen())return{success:!1,outsideWindow:!0,wakeTime:t,message:"ثبت بیداری فقط از ساعت ۵ تا ۷ صبح امکان‌پذیر است."};this.saveEarlyBirdLocal(e,t);const o={userId:n.userId,nickname:n.nickname,name:n.nickname,target:n.target,wakeTime:t,date:e};try{const r=await Te(`${ce}/api/earlybird.php`,{method:"POST",headers:{"Content-Type":"application/json","Cache-Control":"no-cache",Pragma:"no-cache"},body:JSON.stringify(o)}),d=await r.text();let s=null;try{s=d?JSON.parse(d):null}catch{s=null}if(!r.ok||!s||s.success===!1){const l=s&&(s.message||s.error)||(d||"").slice(0,160)||"پاسخ نامعتبر سرور",c=`POST /api/earlybird.php → HTTP ${r.status}: ${l}`;return console.error("[EarlyBird] ثبت روی سرور ناموفق بود —",c),{success:!1,serverConfirmed:!1,wakeTime:t,errorDetail:c,message:s&&s.message||"ثبت سحرخیزی روی سرور انجام نشد."}}return Array.isArray(s.list)&&(localStorage.setItem(ee.EARLY_BIRD_CACHE,JSON.stringify(s.list)),localStorage.setItem(ee.EARLY_BIRD_CACHE_DATE,e)),s.entry&&s.entry.wakeTime&&this.saveEarlyBirdLocal(e,s.entry.wakeTime),console.info(`[EarlyBird] ثبت موفق — ساعت ${((i=s.entry)==null?void 0:i.wakeTime)||t}, رتبه ${s.rank??"-"}`),{success:!0,serverConfirmed:!0,alreadyRecorded:!!s.alreadyRecorded,wakeTime:((a=s.entry)==null?void 0:a.wakeTime)||t,rank:s.rank,list:s.list||[],message:s.message||"سحرخیزی شما ثبت شد ☀️"}}catch(r){const d=`POST /api/earlybird.php → خطای شبکه: ${r.message}`;return console.error("[EarlyBird] ثبت روی سرور ناموفق بود —",d),{success:!1,serverConfirmed:!1,wakeTime:t,errorDetail:d,message:"ثبت محلی انجام شد اما ارتباط با سرور برقرار نشد."}}},async fetchEarlyBirds(n=null){const e=n||this.getTodayDateStr();try{const t=await Te(`${ce}/api/earlybird.php?date=${e}&_t=${Date.now()}`,{cache:"no-store",headers:{"Cache-Control":"no-cache",Pragma:"no-cache"}}),o=await t.text();let i=null;try{i=o?JSON.parse(o):null}catch{i=null}if(t.ok&&i&&i.success&&Array.isArray(i.list))return localStorage.setItem(ee.EARLY_BIRD_CACHE,JSON.stringify(i.list)),localStorage.setItem(ee.EARLY_BIRD_CACHE_DATE,e),{success:!0,fromCache:!1,date:e,list:i.list};throw new Error(i&&(i.message||i.error)||`HTTP ${t.status}`)}catch(t){console.warn("[EarlyBird] دریافت لیست از سرور ناموفق بود، استفاده از کش محلی:",t.message);let o=[];if(localStorage.getItem(ee.EARLY_BIRD_CACHE_DATE)===e)try{const i=JSON.parse(localStorage.getItem(ee.EARLY_BIRD_CACHE)||"[]");Array.isArray(i)&&(o=i)}catch{o=[]}return{success:!1,offline:!0,fromCache:!0,date:e,list:o}}}};typeof window<"u"&&(window.leaderboardService=_,window.fetchUserGroups=(n=!0)=>_.fetchUserGroups(n));const te=n=>String(n).replace(/[0-9]/g,e=>"۰۱۲۳۴۵۶۷۸۹"[e]),gt=[{id:"energetic",icon:"⚡️",text:"پرانرژی (۱۰/۱۰)",badge:"⚡️ پرانرژی (۱۰/۱۰)"},{id:"fighter",icon:"🦁",text:"جنگنده",badge:"🦁 جنگنده"},{id:"satisfied",icon:"😌",text:"راضی",badge:"😌 راضی"},{id:"tough",icon:"☕️",text:"سخت اما تموم شد",badge:"☕️ سخت اما تموم شد"}];function ft(n){const e=Number(n)||0;return e>70?{text:"#34d399",bg:"rgba(16, 185, 129, 0.15)",border:"rgba(52, 211, 153, 0.35)"}:e>=50?{text:"#fbbf24",bg:"rgba(245, 158, 11, 0.15)",border:"rgba(251, 191, 36, 0.35)"}:{text:"#f87171",bg:"rgba(239, 68, 68, 0.15)",border:"rgba(248, 113, 113, 0.35)"}}function Ue(n){const e=Math.max(0,Math.round(Number(n)||0));if(e===0)return"۰ دقیقه";const t=Math.floor(e/60),o=e%60;return t>0&&o>0?`${te(t)} ساعت و ${te(o)} دقیقه`:t>0?`${te(t)} ساعت`:`${te(o)} دقیقه`}function mo(n){if(!n)return"۰۰:۰۰ - ۰۰:۰۰";const e=Number(n.duration!==void 0?n.duration:n.minutes)||0,t=r=>{if(r==null||r==="")return null;if(typeof r=="number"||typeof r=="string"&&/^\d{10,}$/.test(r.trim())){const d=new Date(Number(r));if(!isNaN(d.getTime()))return d.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",hour12:!1})}if(typeof r=="string"&&r.includes(":")&&!r.includes("T")&&!r.includes("-")){const d=r.trim().split(":");if(d.length>=2){const s=d.map(f=>f.replace(/[۰-۹]/g,m=>"۰۱۲۳۴۵۶۷۸۹".indexOf(m))),l=String(parseInt(s[0])||0).padStart(2,"0"),c=String(parseInt(s[1])||0).padStart(2,"0");return te(`${l}:${c}`)}}if(typeof r=="string"||r instanceof Date){const d=new Date(r);if(!isNaN(d.getTime()))return d.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",hour12:!1})}return null};let o=t(n.startTime),i=t(n.endTime);const a=n.timestamp||n.createdAt;if((!o||!i)&&a){let r=null;if(typeof a=="number"||typeof a=="string"&&/^\d{10,}$/.test(String(a).trim())?r=new Date(Number(a)):r=new Date(a),r&&!isNaN(r.getTime())){const d=new Date(r.getTime()-e*6e4);o||(o=d.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",hour12:!1})),i||(i=r.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",hour12:!1}))}}if(o||(o="۰۸:۰۰"),!i){const d=String(o).replace(/[۰-۹]/g,s=>"۰۱۲۳۴۵۶۷۸۹".indexOf(s)).split(":").map(Number);if(d.length>=2&&!isNaN(d[0])&&!isNaN(d[1])){const l=(d[0]*60+d[1]+e)%1440,c=String(Math.floor(l/60)).padStart(2,"0"),f=String(l%60).padStart(2,"0");i=te(`${c}:${f}`)}else i="۰۹:۰۰"}return`${o} - ${i}`}function bo(n=null){try{const e=p.getTodayJalaliString(),t=p.normalizeJalaliDate(n||e),o=t===e,i=new Date,a=i.getHours()*60+i.getMinutes(),r=480,d=1380;let s=d;o&&(s=Math.min(d,a));const c=(p.getActivitiesByDate(t)||[]).filter(v=>v?!(v.type==="non-study"||v.type==="non_study"||v.type==="break"||v.activityType==="non_study"||v.activityType==="non-study"||v.activityType==="break"||v.isStudy===!1||v.is_study_time===!1||v.counts_for_study===!1||v.isBreak===!0||v.is_break===!0||v.timerType==="break"||v.timerType===2):!1),f=c.reduce((v,A)=>v+(Number(A.duration||A.minutes)||0),0);if(s<=r)return{usefulMinutes:f,usefulText:Ue(f),leakMinutes:0,leakText:"بدون نشتی (خارج بازه ۰۸-۲۳)",leakCount:0};const m=[];c.forEach(v=>{const A=Math.max(1,Number(v.duration||v.minutes)||1);let k=0,T=0;if(v.startTime){const P=new Date(v.startTime);if(!isNaN(P.getTime()))T=P.getHours()*60+P.getMinutes(),k=T+A;else if(typeof v.startTime=="string"&&v.startTime.includes(":")){const C=v.startTime.split(":").map(Number);T=(C[0]||0)*60+(C[1]||0),k=T+A}}else if(v.endTime||v.timestamp||v.createdAt){const P=new Date(v.endTime||v.timestamp||v.createdAt);isNaN(P.getTime())||(k=P.getHours()*60+P.getMinutes(),T=Math.max(0,k-A))}else k=s,T=Math.max(0,k-A);const x=Math.max(r,Math.min(s,T)),M=Math.max(r,Math.min(s,k));M>x&&m.push({start:x,end:M})}),m.sort((v,A)=>v.start-A.start);const y=[];m.forEach(v=>{if(y.length===0)y.push({...v});else{const A=y[y.length-1];v.start<=A.end?A.end=Math.max(A.end,v.end):y.push({...v})}});let w=0,u=0,g=r;y.forEach(v=>{const A=v.start-g;A>45&&(w+=A,u++),g=Math.max(g,v.end)});const b=s-g;return b>45&&(w+=b,u++),{usefulMinutes:f,usefulText:Ue(f),leakMinutes:w,leakText:w>0?Ue(w):"بدون نشتی ✨",leakCount:u}}catch(e){return console.error("Error calculating time leak stats:",e),{usefulMinutes:0,usefulText:"۰ دقیقه",leakMinutes:0,leakText:"۰ دقیقه",leakCount:0}}}function Yt(n={}){const{size:e=280,showCenterInfo:t=!0,dateStr:o=null}=n,i=p.normalizeJalaliDate(o||p.getTodayJalaliString()),a=p.getActivitiesByDate(i)||[],d=(p.getStudyTargets()||{}).dailyStudyGoalHours||8,s=d*60,l=p.getStudyMinutesByDate(i),c=+(l/60).toFixed(1),f=s>0?Math.min(100,Math.round(l/s*100)):0,m=typeof p.getStudyStreak=="function"?p.getStudyStreak():0,y=110,w=2*Math.PI*y;let u="";const g=new Date,b=g.getHours()*60+g.getMinutes(),v=k=>{if(k==null||k==="")return null;if(typeof k=="string"){const T=String(k).replace(/[۰-۹]/g,P=>"۰۱۲۳۴۵۶۷۸۹".indexOf(P)).replace(/[٠-٩]/g,P=>"٠١٢٣٤٥٦٧٨٩".indexOf(P)).trim(),x=T.match(/(?:^|\b|T|\s)(\d{1,2}):(\d{2})/);if(x){const P=Number(x[1]),C=Number(x[2]);if(!isNaN(P)&&!isNaN(C)&&P>=0&&P<24&&C>=0&&C<60)return P*60+C}const M=Number(T);if(!isNaN(M)&&M>1e11)k=M;else{const P=new Date(T);isNaN(P.getTime())||(k=P.getTime())}}if(typeof k=="number"&&!isNaN(k)){const T=new Date(k);if(!isNaN(T.getTime())){try{const M=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Tehran",hour:"2-digit",minute:"2-digit",hour12:!1}).format(T).split(":").map(Number);if(!isNaN(M[0])&&!isNaN(M[1]))return M[0]*60+M[1]}catch{}return T.getHours()*60+T.getMinutes()}}return null};a.forEach(k=>{if(!k)return;const T=Math.max(1,Number(k.duration||k.minutes)||1);let x=v(k.startTime),M=v(k.endTime);if(x!==null&&M!==null)M<x&&(M+=24*60);else if(x!==null)M=x+T;else if(M!==null)x=Math.max(0,M-T);else{const J=v(k.timestamp||k.createdAt);J!==null?(M=J,x=Math.max(0,M-T)):(M=b,x=Math.max(0,M-T))}x=Math.max(0,Math.min(1440,x)),M=Math.max(0,Math.min(1440,M));const P=Math.max(1,M-x),C=k.type==="study"||k.isStudy!==!1,I=k.color||(C?"#0ea5e9":"#f59e0b"),R=(P/1440*w).toFixed(2),E=(w-Number(R)).toFixed(2),j=(-(x/1440)*w).toFixed(2);u+=`
      <circle cx="160" cy="160" r="${y}" fill="none"
        stroke="${I}" stroke-width="14" stroke-linecap="round"
        stroke-dasharray="${R} ${E}"
        stroke-dashoffset="${j}"
        style="transition: stroke-dasharray 0.8s ease-out, stroke-dashoffset 0.8s ease-out; filter: drop-shadow(0 0 5px ${I}aa);"
      />
    `});let A="";for(let k=0;k<24;k++){const T=k*15*Math.PI/180,x=k%6===0,M=x?8:4,P=160+(y+10)*Math.cos(T),C=160+(y+10)*Math.sin(T),I=160+(y+10+M)*Math.cos(T),R=160+(y+10+M)*Math.sin(T);A+=`
      <line x1="${P.toFixed(1)}" y1="${C.toFixed(1)}" x2="${I.toFixed(1)}" y2="${R.toFixed(1)}"
        stroke="${x?"rgba(255, 255, 255, 0.4)":"rgba(255, 255, 255, 0.15)"}"
        stroke-width="${x?2:1}" />
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
        <circle cx="160" cy="160" r="${y+15}" fill="url(#ringGlowBg)" />

        <!-- Track Circle (24-Hour Dial Background) -->
        <circle cx="160" cy="160" r="${y}" fill="none" stroke="rgba(255, 255, 255, 0.06)" stroke-width="14" />

        <!-- 24 Hourly Ticks -->
        ${A}

        <!-- Active Interval Arcs -->
        ${u}
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
            <span style="color: #10b981; margin-right: 3px;">(${te(f)}٪)</span>
          </div>
        </div>
      `:""}
    </div>
  `}function xo(){const n=bo(),e=p.getSubjectStudyStats()||{},t=Object.keys(e).map(o=>{const i=e[o],a=i.minutes||0;return a<=0?"":`
      <div style="background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); padding: 4px 10px; border-radius: 10px; font-size: 0.72rem; font-weight: 700; color: #e4e4e7; display: flex; align-items: center; gap: 5px;">
        <span style="width: 8px; height: 8px; border-radius: 50%; background: ${i.isStudy!==!1?"#0ea5e9":"#f59e0b"}; display: inline-block;"></span>
        <span>${o}:</span>
        <span style="color: #38bdf8; font-family: 'Outfit';">${Ue(a)}</span>
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
        ${Yt({size:260,showCenterInfo:!0})}
      </div>

      <!-- 🔍 Time-Leak & Useful Time Breakdown -->
      <div style="margin-top: 14px; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
        <!-- Useful Time Card -->
        <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); padding: 10px 12px; border-radius: 12px; display: flex; align-items: center; gap: 10px;">
          <div style="font-size: 1.2rem;">💚</div>
          <div>
            <div style="font-size: 0.7rem; color: #a1a1aa; font-weight: 700;">ساعت مطالعه مفید</div>
            <div style="font-size: 0.85rem; font-weight: 800; color: #10b981; margin-top: 1px;">
              ${n.usefulText}
            </div>
          </div>
        </div>

        <!-- Idle Gap Leak Card -->
        <div style="background: ${n.leakMinutes>0?"rgba(239, 68, 68, 0.08)":"rgba(255, 255, 255, 0.03)"}; border: 1px solid ${n.leakMinutes>0?"rgba(239, 68, 68, 0.25)":"rgba(255, 255, 255, 0.08)"}; padding: 10px 12px; border-radius: 12px; display: flex; align-items: center; gap: 10px;">
          <div style="font-size: 1.2rem;">${n.leakMinutes>0?"⚠️":"✨"}</div>
          <div>
            <div style="font-size: 0.7rem; color: #a1a1aa; font-weight: 700;">نشتی زمان / آفلاین (>۴۵m)</div>
            <div style="font-size: 0.85rem; font-weight: 800; color: ${n.leakMinutes>0?"#f87171":"#a1a1aa"}; margin-top: 1px;">
              ${n.leakText}
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
  `}function rn(n=null){var We;const e=n||window.appState&&window.appState.selectedJalaliDetailDate||p.getTodayJalaliString(),t=p.normalizeJalaliDate(e),o=p&&typeof p.getTodayJalaliString=="function"?p.getTodayJalaliString():"",i=t===(p?p.normalizeJalaliDate(o):o),a=t.split("/").map(Number),r=a[0]||1404,d=a[1]||1,s=a[2]||1,c=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"][d-1]||"",m=(p.jalaliToJdn(r,d,s)+2)%7,u=`${["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه"][m]||"شنبه"} ${te(s)} ${c} ${te(r)}`;let g=null;try{g=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}")}catch{}const b=(typeof p.getUserProfile=="function"?p.getUserProfile():{})||{},v=localStorage.getItem("planex_user_avatar")||"",A=localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_leaderboard_nickname")||"",k=localStorage.getItem("planex_leaderboard_target")||"",T=A||b.name||b.displayName||b.nickname||(g==null?void 0:g.full_name)||(g==null?void 0:g.name)||"کاربر",x=k||b.target||b.major||b.targetField||"کنکور سراسری ۱۴۰۶",M=b.grade||b.educationGrade||"",P=M&&x&&!x.includes(M)?`${M} - ${x}`:x,C=v||b.avatar||b.photo||b.avatarUrl||(g==null?void 0:g.avatar_url)||null,I=typeof p<"u"&&typeof p.getCurrentWeek=="function"?p.getCurrentWeek():null,R=(I==null?void 0:I.days)||[],E=(typeof p.getActivitiesByDate=="function"?p.getActivitiesByDate(t):[])||[],j=E.filter(z=>z?!(z.type==="non-study"||z.type==="non_study"||z.type==="break"||z.activityType==="non_study"||z.activityType==="non-study"||z.activityType==="break"||z.isStudy===!1||z.is_study_time===!1||z.counts_for_study===!1||z.isBreak===!0||z.is_break===!0||z.timerType==="break"||z.timerType===2):!1),J=j.reduce((z,ae)=>{const se=Number(ae.duration!==void 0?ae.duration:ae.minutes);return z+(isNaN(se)?0:Math.max(0,Math.ceil(se)))},0),G=Ue(J),L=(typeof p.getStudyTargets=="function"?p.getStudyTargets():{})||{},F=Number(L.dailyStudyGoalHours||L.dailyTargetHours||8),Y=F*60,Q=Y>0?Math.min(100,Math.round(J/Y*100)):0,Z=j.length,N=typeof p.getStudyStreak=="function"?p.getStudyStreak():0;let q=null;const W=typeof _<"u"?_:typeof window<"u"?window.leaderboardService:null,ue=z=>{if(!z)return null;const ae=S=>!S||typeof S!="string"?S:S.replace(/[۰-۹]/g,K=>"۰۱۲۳۴۵۶۷۸۹".indexOf(K)).replace(/[٠-٩]/g,K=>"٠١٢٣٤٥٦٧٨٩".indexOf(K));if(typeof z=="string"){const K=ae(z).trim().match(/(?:^|\b|T|\s)(\d{1,2}):(\d{2})/);if(K){const X=parseInt(K[1],10),de=parseInt(K[2],10);if(!isNaN(X)&&!isNaN(de)&&X>=0&&X<24&&de>=0&&de<60)return X*60+de}}let se=null;if(typeof z=="number")se=z;else if(typeof z=="object"&&z!==null&&(se=z.timestamp||z.createdAt||z.start||null,!se&&(z.startTime||z.start_time||z.startTimeStr)))return ue(z.startTime||z.start_time||z.startTimeStr);if(se){const S=new Date(se);if(!isNaN(S.getTime()))try{const X=S.toLocaleTimeString("en-US",{timeZone:"Asia/Tehran",hour12:!1,hour:"2-digit",minute:"2-digit"}).split(":").map(Number);if(X.length>=2&&!isNaN(X[0])&&!isNaN(X[1]))return X[0]*60+X[1]}catch{return S.getHours()*60+S.getMinutes()}}return null},me=z=>z!==null&&z>=5*60&&z<=7*60;let pe=null;if(W){if(i&&typeof W.getTodayWakeTime=="function"&&(pe=W.getTodayWakeTime()),!pe&&typeof W.getEarlyBirdHistory=="function"){const z=W.getEarlyBirdHistory()||{};pe=z[t]||(i?z[(We=W.getTodayDateStr)==null?void 0:We.call(W)]:null)}if(!pe&&i&&typeof W.getTodayEarlyBird=="function"){const z=W.getTodayEarlyBird();z&&(z.wakeTime||z.wake_time)&&(pe=z.wakeTime||z.wake_time)}}const h=ue(pe);if(me(h)){const z=String(Math.floor(h/60)).padStart(2,"0"),ae=String(h%60).padStart(2,"0");q=`${z}:${ae}`}if(!q){const z=E&&E.length>0?E:j;if(z&&z.length>0){let ae=1440;z.forEach(se=>{let S=null;if(W&&typeof W.extractSessionStartMinutes=="function"?S=W.extractSessionStartMinutes(se):S=ue(se.startTime||se.start_time||se.startTimeStr||se.time||se.timestamp||se.createdAt||se),S!==null&&me(S)&&S<ae){ae=S;const K=String(Math.floor(ae/60)).padStart(2,"0"),X=String(ae%60).padStart(2,"0");q=`${K}:${X}`}})}}const D=q?`☀️ ${te(q)}`:"بدون حاضری صبح";let B=0,H=0,le=0;j.forEach(z=>{const ae=Number(z.testCount!==void 0?z.testCount:z.tests!==void 0?z.tests:0),se=Number(z.testCorrect||z.correct||0),S=Number(z.testWrong||z.wrong||0),K=Number(z.testUnanswered||z.unanswered||0);H+=se,le+=S;const X=se+S+K;B+=ae>0?ae:X});const U=B>0,fe=B>0?Math.min(100,Math.max(0,Math.round(H/B*100))):0,we=B>0?(H*3-le)/(B*3)*100:0,ye=Math.round(we),Me=ft(fe),he=ft(ye),Ae=localStorage.getItem("planex_daily_mood_"+t),ze=gt.find(z=>z.id===Ae),oe={},ge=["#38bdf8","#a78bfa","#f59e0b","#10b981","#ec4899","#6366f1","#f43f5e","#14b8a6","#8b5cf6","#0ea5e9"];j.forEach(z=>{const ae=z.subject||z.categoryName||z.title||z.name||"درس آزاد",se=Number(z.duration!==void 0?z.duration:z.minutes)||0;oe[ae]||(oe[ae]=0),oe[ae]+=se});const He=Object.keys(oe).map((z,ae)=>{const se=oe[z],S=J>0?Math.round(se/J*100):0,K=ge[ae%ge.length];return{name:z,mins:se,pct:S,color:K}}).sort((z,ae)=>ae.mins-z.mins);return`
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
              ${C?`
                <img src="${C}" style="width: 46px; height: 46px; border-radius: 50%; object-fit: cover; border: 2px solid #a78bfa; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4);" />
              `:`
                <div style="width: 46px; height: 46px; border-radius: 50%; background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 800; color: #ffffff; border: 2px solid rgba(255,255,255,0.25); box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4);">
                  ${T.charAt(0)}
                </div>
              `}
              <div style="text-align: right;">
                <div style="font-size: 1.08rem; font-weight: 900; color: #ffffff; letter-spacing: -0.3px;">${T}</div>
                <div style="display: inline-flex; align-items: center; background: rgba(124, 58, 237, 0.2); border: 1px solid rgba(167, 139, 250, 0.35); padding: 1px 8px; border-radius: 8px; font-size: 0.68rem; font-weight: 700; color: #c4b5fd; margin-top: 2px;">
                  🎯 ${P}
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
              ${R.map(z=>{const ae=p.normalizeJalaliDate(z.dateStr)===t,se=ae?"background: linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%); color: #ffffff; border-color: #a78bfa; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.5);":"background: rgba(255, 255, 255, 0.03); color: #a1a1aa; border-color: rgba(255, 255, 255, 0.06);",S=z.isToday?'<span style="width: 4px; height: 4px; border-radius: 50%; background: #34d399; display: inline-block; margin-right: 2px;"></span>':"";return`
                  <button type="button"
                    class="weekday-tab-btn ${ae?"active":""}"
                    data-date="${z.dateStr}"
                    onclick="if(window.selectDailyModalDate){ window.selectDailyModalDate('${z.dateStr}'); }"
                    style="flex: 1; min-width: 48px; padding: 5px 2px; border-radius: 12px; border: 1px solid; font-size: 0.72rem; font-weight: 800; cursor: pointer; transition: all 0.15s ease; text-align: center; white-space: nowrap; ${se}">
                    <div style="font-size: 0.65rem; opacity: 0.9;">${z.dayName}</div>
                    <div style="font-size: 0.76rem; font-family: 'Outfit', sans-serif; margin-top: 1px;">${S}${te(z.dayOfMonth)}</div>
                  </button>
                `}).join("")}
            </div>

            <!-- Active Jalali Date Subtitle Badge -->
            <div style="font-size: 0.72rem; font-weight: 700; color: #c4b5fd; background: rgba(124, 58, 237, 0.15); border: 1px solid rgba(167, 139, 250, 0.3); padding: 2px 10px; border-radius: 10px;">
              📅 ${u}
            </div>
          </div>

          <!-- 3. CENTER ICONIC APPLE-WATCH STYLE RADIAL DIAL -->
          <div style="width: 100%; display: flex; justify-content: center; align-items: center; margin: 8px 0; z-index: 2;">
            ${Yt({size:250,showCenterInfo:!0,dateStr:t})}
          </div>

          <!-- 4. HERO GOAL COMPLETION PROGRESS CARD -->
          <div style="width: 100%; background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; padding: 12px 16px; box-sizing: border-box; z-index: 2;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <span style="font-size: 0.76rem; font-weight: 700; color: #9ca3af;">⏱️ مجموع زمان مطالعه</span>
              <span style="font-size: 0.68rem; font-weight: 800; color: #38bdf8; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.25); padding: 2px 8px; border-radius: 8px;">
                هدف: ${te(F)} ساعت
              </span>
            </div>
            <div style="font-size: 1.55rem; font-weight: 900; color: #ffffff; margin-bottom: 6px; background: linear-gradient(135deg, #ffffff 0%, #c4b5fd 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
              ${G}
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.7rem; font-weight: 700; color: #c4b5fd; margin-bottom: 4px;">
              <span>پیشرفت تارگت روزانه</span>
              <span>${te(Q)}٪</span>
            </div>
            <div style="width: 100%; height: 7px; background: rgba(255, 255, 255, 0.08); border-radius: 999px; overflow: hidden; position: relative;">
              <div style="width: ${Q}%; height: 100%; background: linear-gradient(90deg, #0ea5e9 0%, #7c3aed 50%, #ec4899 100%); border-radius: 999px; box-shadow: 0 0 12px rgba(124, 58, 237, 0.6);"></div>
            </div>
          </div>

          <!-- 5. HIGH-CONTRAST BADGES GRID -->
          <div style="width: 100%; display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; z-index: 2;">
            <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 12px; padding: 7px 4px; text-align: center;">
              <div style="font-size: 0.58rem; color: #fcd34d; font-weight: 700;">استریک</div>
              <div style="font-size: 0.82rem; font-weight: 900; color: #f59e0b; margin-top: 2px;">
                🔥 ${te(N)}
              </div>
            </div>

            <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 12px; padding: 7px 4px; text-align: center;">
              <div style="font-size: 0.58rem; color: #6ee7b7; font-weight: 700;">تست امروز</div>
              <div style="font-size: 0.82rem; font-weight: 900; color: #34d399; margin-top: 2px;">
                🎯 ${te(B)}
              </div>
            </div>

            <div style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.25); border-radius: 12px; padding: 7px 4px; text-align: center;">
              <div style="font-size: 0.58rem; color: #7dd3fc; font-weight: 700;">جلسات</div>
              <div style="font-size: 0.82rem; font-weight: 900; color: #38bdf8; margin-top: 2px;">
                ⏱️ ${te(Z)}
              </div>
            </div>

            <div style="background: rgba(167, 139, 250, 0.08); border: 1px solid rgba(167, 139, 250, 0.25); border-radius: 12px; padding: 7px 4px; text-align: center;">
              <div style="font-size: 0.58rem; color: #c4b5fd; font-weight: 700;">حاضری صبح</div>
              <div style="font-size: ${q?"0.82rem":"0.68rem"}; font-weight: 900; color: ${q?"#a78bfa":"#9ca3af"}; margin-top: 2px; white-space: nowrap;">
                ${D}
              </div>
            </div>
          </div>

          <!-- 5.5 TEST ACCURACY SUMMARY BLOCK (درصد با و بدون منفی) -->
          ${U?`
            <div style="width: 100%; display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; z-index: 2;">
              <div style="background: ${Me.bg}; border: 1px solid ${Me.border}; border-radius: 12px; padding: 6px 8px; text-align: center;">
                <div style="font-size: 0.58rem; color: ${Me.text}; font-weight: 700;">درصد بدون منفی</div>
                <div style="font-size: 0.85rem; font-weight: 900; color: ${Me.text}; margin-top: 1px;">
                  ${te(fe)}٪
                </div>
              </div>
              <div style="background: ${he.bg}; border: 1px solid ${he.border}; border-radius: 12px; padding: 6px 8px; text-align: center;">
                <div style="font-size: 0.58rem; color: ${he.text}; font-weight: 700;">درصد با احتساب منفی</div>
                <div style="font-size: 0.85rem; font-weight: 900; color: ${he.text}; margin-top: 1px;">
                  ${te(ye)}٪
                </div>
              </div>
            </div>
          `:""}

          <!-- 6. TOP SUBJECT PILLS SUMMARY OR ELEGANT EMPTY STATE -->
          ${j.length>0?`
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
              ${ze?`<span style="font-size: 0.64rem; font-weight: 800; color: #fbbf24; background: rgba(245, 158, 11, 0.15); padding: 1px 6px; border-radius: 6px;">${ze.badge}</span>`:""}
            </div>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px;">
              ${gt.map(z=>{const se=ze&&ze.id===z.id?"background: rgba(245, 158, 11, 0.25); border: 1.5px solid #fbbf24; color: #ffffff; font-weight: 900; box-shadow: 0 0 8px rgba(245, 158, 11, 0.3);":"background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); color: #a1a1aa; font-weight: 700;";return`
                  <button type="button" onclick="if(window.setDailyMood){ window.setDailyMood('${t}', '${z.id}'); }"
                    style="padding: 5px 2px; border-radius: 8px; font-size: 0.6rem; cursor: pointer; transition: all 0.15s ease; text-align: center; white-space: nowrap; ${se}">
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
  `}function wo(n=null){var se;const e=n||window.appState&&window.appState.selectedJalaliDetailDate||p.getTodayJalaliString(),t=p.normalizeJalaliDate(e),o=p&&typeof p.getTodayJalaliString=="function"?p.getTodayJalaliString():"",i=t===(p?p.normalizeJalaliDate(o):o),a=t.split("/").map(Number),r=a[0]||1404,d=a[1]||1,s=a[2]||1,c=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"][d-1]||"",m=(p.jalaliToJdn(r,d,s)+2)%7,u=`${["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه"][m]||"شنبه"} ${te(s)} ${c} ${te(r)}`;let g=null;try{g=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}")}catch{}const b=(typeof p.getUserProfile=="function"?p.getUserProfile():{})||{},v=localStorage.getItem("planex_user_avatar")||"",A=localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_leaderboard_nickname")||"",k=localStorage.getItem("planex_leaderboard_target")||"",T=A||b.name||b.displayName||b.nickname||(g==null?void 0:g.full_name)||(g==null?void 0:g.name)||"کاربر",x=k||b.target||b.major||b.targetField||"کنکور سراسری ۱۴۰۶",M=b.grade||b.educationGrade||"",P=M&&x&&!x.includes(M)?`${M} - ${x}`:x,C=v||b.avatar||b.photo||b.avatarUrl||(g==null?void 0:g.avatar_url)||null,I=typeof p<"u"&&typeof p.getCurrentWeek=="function"?p.getCurrentWeek():null,R=(I==null?void 0:I.days)||[],E=(typeof p.getActivitiesByDate=="function"?p.getActivitiesByDate(t):[])||[],j=E.filter(S=>S?!(S.type==="non-study"||S.type==="non_study"||S.type==="break"||S.activityType==="non_study"||S.activityType==="non-study"||S.activityType==="break"||S.isStudy===!1||S.is_study_time===!1||S.counts_for_study===!1||S.isBreak===!0||S.is_break===!0||S.timerType==="break"||S.timerType===2):!1),J=j.reduce((S,K)=>{const X=Number(K.duration!==void 0?K.duration:K.minutes);return S+(isNaN(X)?0:Math.max(0,Math.ceil(X)))},0),G=Ue(J),L=(typeof p.getStudyTargets=="function"?p.getStudyTargets():{})||{},F=Number(L.dailyStudyGoalHours||L.dailyTargetHours||8),Y=F*60,Q=Y>0?Math.min(100,Math.round(J/Y*100)):0,Z=j.length,N=typeof p.getStudyStreak=="function"?p.getStudyStreak():0;let q=null;const W=typeof _<"u"?_:typeof window<"u"?window.leaderboardService:null,ue=S=>{if(!S)return null;const K=de=>!de||typeof de!="string"?de:de.replace(/[۰-۹]/g,O=>"۰۱۲۳۴۵۶۷۸۹".indexOf(O)).replace(/[٠-٩]/g,O=>"٠١٢٣٤٥٦٧٨٩".indexOf(O));if(typeof S=="string"){const O=K(S).trim().match(/(?:^|\b|T|\s)(\d{1,2}):(\d{2})/);if(O){const V=parseInt(O[1],10),re=parseInt(O[2],10);if(!isNaN(V)&&!isNaN(re)&&V>=0&&V<24&&re>=0&&re<60)return V*60+re}}let X=null;if(typeof S=="number")X=S;else if(typeof S=="object"&&S!==null&&(X=S.timestamp||S.createdAt||S.start||null,!X&&(S.startTime||S.start_time||S.startTimeStr)))return ue(S.startTime||S.start_time||S.startTimeStr);if(X){const de=new Date(X);if(!isNaN(de.getTime()))try{const V=de.toLocaleTimeString("en-US",{timeZone:"Asia/Tehran",hour12:!1,hour:"2-digit",minute:"2-digit"}).split(":").map(Number);if(V.length>=2&&!isNaN(V[0])&&!isNaN(V[1]))return V[0]*60+V[1]}catch{return de.getHours()*60+de.getMinutes()}}return null},me=S=>S!==null&&S>=5*60&&S<=7*60;let pe=null;if(W){if(i&&typeof W.getTodayWakeTime=="function"&&(pe=W.getTodayWakeTime()),!pe&&typeof W.getEarlyBirdHistory=="function"){const S=W.getEarlyBirdHistory()||{};pe=S[t]||(i?S[(se=W.getTodayDateStr)==null?void 0:se.call(W)]:null)}if(!pe&&i&&typeof W.getTodayEarlyBird=="function"){const S=W.getTodayEarlyBird();S&&(S.wakeTime||S.wake_time)&&(pe=S.wakeTime||S.wake_time)}}const h=ue(pe);if(me(h)){const S=String(Math.floor(h/60)).padStart(2,"0"),K=String(h%60).padStart(2,"0");q=`${S}:${K}`}if(!q){const S=E&&E.length>0?E:j;if(S&&S.length>0){let K=1440;S.forEach(X=>{let de=null;if(W&&typeof W.extractSessionStartMinutes=="function"?de=W.extractSessionStartMinutes(X):de=ue(X.startTime||X.start_time||X.startTimeStr||X.time||X.timestamp||X.createdAt||X),de!==null&&me(de)&&de<K){K=de;const O=String(Math.floor(K/60)).padStart(2,"0"),V=String(K%60).padStart(2,"0");q=`${O}:${V}`}})}}const D=q?`☀️ ${te(q)}`:"بدون حاضری صبح";let B=0,H=0,le=0,U=0;j.forEach(S=>{const K=Number(S.testCount!==void 0?S.testCount:S.tests!==void 0?S.tests:0),X=Number(S.testCorrect!==void 0?S.testCorrect:S.correct!==void 0?S.correct:0),de=Number(S.testWrong!==void 0?S.testWrong:S.wrong!==void 0?S.wrong:0),O=Number(S.testUnanswered!==void 0?S.testUnanswered:S.unanswered!==void 0?S.unanswered:0);H+=X,le+=de,U+=O;const V=X+de+O;B+=K>0?K:V});const fe=B>0,we=B>0?Math.min(100,Math.max(0,Math.round(H/B*100))):0,ye=B>0?(H*3-le)/(B*3)*100:0,Me=Math.round(ye),he=ft(we),Ae=ft(Me),ze=localStorage.getItem("planex_daily_mood_"+t),oe=gt.find(S=>S.id===ze),ge={},He=["#38bdf8","#a78bfa","#f59e0b","#10b981","#ec4899","#6366f1","#f43f5e","#14b8a6","#8b5cf6","#0ea5e9"];j.forEach(S=>{const K=S.subject||S.categoryName||S.title||S.name||"درس آزاد",X=Number(S.duration!==void 0?S.duration:S.minutes)||0;ge[K]||(ge[K]=0),ge[K]+=X});const We=Object.keys(ge).map((S,K)=>{const X=ge[S],de=J>0?Math.round(X/J*100):0,O=He[K%He.length];return{name:S,mins:X,pct:de,color:O}}).sort((S,K)=>K.mins-S.mins),z={یادگیری:{mins:0,icon:"🧠",bg:"rgba(99, 102, 241, 0.15)",border:"rgba(129, 140, 248, 0.35)",color:"#818cf8"},تست‌زنی:{mins:0,icon:"🎯",bg:"rgba(16, 185, 129, 0.15)",border:"rgba(52, 211, 153, 0.35)",color:"#34d399"},مرور:{mins:0,icon:"🔄",bg:"rgba(245, 158, 11, 0.15)",border:"rgba(251, 191, 36, 0.35)",color:"#fbbf24"},جمع‌بندی:{mins:0,icon:"📑",bg:"rgba(14, 165, 233, 0.15)",border:"rgba(56, 189, 248, 0.35)",color:"#38bdf8"}};j.forEach(S=>{const K=Number(S.duration!==void 0?S.duration:S.minutes)||0,X=(S.studyType||S.activityType||S.type||"").toString().toLowerCase();X.includes("تست")||X.includes("test")?z.تست‌زنی.mins+=K:X.includes("مرور")||X.includes("review")?z.مرور.mins+=K:X.includes("جمع")||X.includes("summary")?z.جمع‌بندی.mins+=K:z.یادگیری.mins+=K});const ae=[...j].map(S=>{const K=S.subject||S.categoryName||S.title||S.name||"درس آزاد",X=S.studyType||"یادگیری",de=Number(S.testCorrect||S.correct||0),O=Number(S.testWrong||S.wrong||0),V=Number(S.testUnanswered||S.unanswered||0),re=Number(S.testCount||S.tests||de+O+V),be=mo(S);return{subject:K,timeRangeStr:be,studyType:X,tCount:re,c:de,w:O,u:V}});return`
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
              ${C?`
                <img src="${C}" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 2px solid #38bdf8; box-shadow: 0 4px 12px rgba(14, 165, 233, 0.4);" />
              `:`
                <div style="width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #0284c7 0%, #3b82f6 100%); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 800; color: #ffffff; border: 2px solid rgba(255,255,255,0.2); box-shadow: 0 4px 12px rgba(14, 165, 233, 0.4);">
                  ${T.charAt(0)}
                </div>
              `}
              <div style="text-align: right;">
                <div style="font-size: 1.05rem; font-weight: 900; color: #ffffff; letter-spacing: -0.3px;">${T}</div>
                <div style="display: inline-flex; align-items: center; background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.35); padding: 1px 8px; border-radius: 8px; font-size: 0.68rem; font-weight: 700; color: #38bdf8; margin-top: 2px;">
                  🎯 ${P}
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
              ${R.map(S=>{const K=p.normalizeJalaliDate(S.dateStr)===t,X=K?"background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); color: #ffffff; border-color: #38bdf8; box-shadow: 0 4px 12px rgba(14, 165, 233, 0.4);":"background: rgba(255, 255, 255, 0.03); color: #a1a1aa; border-color: rgba(255, 255, 255, 0.06);",de=S.isToday?'<span style="width: 5px; height: 5px; border-radius: 50%; background: #34d399; display: inline-block; margin-right: 3px;"></span>':"";return`
                  <button type="button"
                    class="weekday-tab-btn ${K?"active":""}"
                    data-date="${S.dateStr}"
                    onclick="if(window.selectDailyModalDate){ window.selectDailyModalDate('${S.dateStr}'); }"
                    style="flex: 1; min-width: 48px; padding: 6px 2px; border-radius: 12px; border: 1px solid; font-size: 0.72rem; font-weight: 800; cursor: pointer; transition: all 0.15s ease; text-align: center; white-space: nowrap; ${X}">
                    <div style="font-size: 0.66rem; opacity: 0.9;">${S.dayName}</div>
                    <div style="font-size: 0.78rem; font-family: 'Outfit', sans-serif; margin-top: 1px;">${de}${te(S.dayOfMonth)}</div>
                  </button>
                `}).join("")}
            </div>

            <!-- Active Jalali Date Subtitle Badge -->
            <div style="font-size: 0.74rem; font-weight: 700; color: #38bdf8; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.25); padding: 3px 12px; border-radius: 10px;">
              📅 ${u}
            </div>
          </div>

          <!-- 3. HERO STAT BOX (Total Study Time & Progress Bar) -->
          <div style="background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; padding: 14px 16px; position: relative; z-index: 2;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.78rem; font-weight: 700; color: #9ca3af;">⏱️ مجموع زمان مطالعه این روز</span>
              <span style="font-size: 0.7rem; font-weight: 800; color: #38bdf8; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.25); padding: 2px 8px; border-radius: 8px;">
                هدف: ${te(F)} ساعت
              </span>
            </div>
            <div style="font-size: 1.65rem; font-weight: 900; color: #ffffff; margin: 6px 0 10px 0; background: linear-gradient(135deg, #ffffff 0%, #38bdf8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
              ${G}
            </div>
            
            <!-- Daily Goal Completion Progress Bar -->
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.72rem; font-weight: 700; color: #7dd3fc; margin-bottom: 5px;">
              <span>پیشرفت تارگت روزانه</span>
              <span>${te(Q)}٪</span>
            </div>
            <div style="width: 100%; height: 8px; background: rgba(255, 255, 255, 0.08); border-radius: 999px; overflow: hidden; position: relative;">
              <div style="width: ${Q}%; height: 100%; background: linear-gradient(90deg, #0284c7 0%, #10b981 50%, #f59e0b 100%); border-radius: 999px; box-shadow: 0 0 12px rgba(16, 185, 129, 0.6);"></div>
            </div>
          </div>

          <!-- 4. TOP MINI STATS GRID (3 Boxes) -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; z-index: 2;">
            <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 8px 6px; text-align: center;">
              <div style="font-size: 0.66rem; color: #9ca3af; font-weight: 700;">تعداد جلسات</div>
              <div style="font-size: 0.95rem; font-weight: 900; color: #38bdf8; margin-top: 3px;">
                ${te(Z)} <span style="font-size: 0.7rem; font-weight: 600;">جلسه</span>
              </div>
            </div>

            <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 8px 6px; text-align: center;">
              <div style="font-size: 0.66rem; color: #9ca3af; font-weight: 700;">استریک مطالعه</div>
              <div style="font-size: 0.95rem; font-weight: 900; color: #f97316; margin-top: 3px;">
                🔥 ${te(N)} <span style="font-size: 0.7rem; font-weight: 600;">روز</span>
              </div>
            </div>

            <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 8px 6px; text-align: center;">
              <div style="font-size: 0.66rem; color: #9ca3af; font-weight: 700;">ساعت حاضری صبح</div>
              <div style="font-size: ${q?"0.95rem":"0.78rem"}; font-weight: 900; color: ${q?"#10b981":"#9ca3af"}; margin-top: 3px; white-space: nowrap;">
                ${D}
              </div>
            </div>
          </div>

          <!-- 5. TEST ANALYTICS BAR -->
          ${fe?`
            <div style="background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.22); border-radius: 16px; padding: 10px 12px; z-index: 2;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-size: 0.72rem; font-weight: 800; color: #34d399;">🎯 تحلیل تست‌های این روز</span>
                <span style="font-size: 0.68rem; font-weight: 700; color: #a78bfa; background: rgba(167, 139, 250, 0.15); padding: 1px 6px; border-radius: 6px;">
                  مجموع: ${te(B)} تست
                </span>
              </div>
              
              <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 4px; text-align: center;">
                <div style="background: rgba(0,0,0,0.2); padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.6rem; color: #9ca3af; white-space: nowrap;">کل</div>
                  <div style="font-size: 0.78rem; font-weight: 800; color: #ffffff;">${te(B)}</div>
                </div>
                <div style="background: rgba(16,185,129,0.1); padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.6rem; color: #6ee7b7; white-space: nowrap;">درست</div>
                  <div style="font-size: 0.78rem; font-weight: 800; color: #34d399;">${te(H)}</div>
                </div>
                <div style="background: rgba(239,68,68,0.1); padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.6rem; color: #fca5a5; white-space: nowrap;">غلط</div>
                  <div style="font-size: 0.78rem; font-weight: 800; color: #f87171;">${te(le)}</div>
                </div>
                <div style="background: rgba(161,161,170,0.1); padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.6rem; color: #d4d4d8; white-space: nowrap;">نزده</div>
                  <div style="font-size: 0.78rem; font-weight: 800; color: #a1a1aa;">${te(U)}</div>
                </div>
                <div style="background: ${he.bg}; border: 1px solid ${he.border}; padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.58rem; color: ${he.text}; white-space: nowrap; font-weight: 700;">بدون منفی</div>
                  <div style="font-size: 0.78rem; font-weight: 900; color: ${he.text};">${te(we)}٪</div>
                </div>
                <div style="background: ${Ae.bg}; border: 1px solid ${Ae.border}; padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.58rem; color: ${Ae.text}; white-space: nowrap; font-weight: 700;">با منفی</div>
                  <div style="font-size: 0.78rem; font-weight: 900; color: ${Ae.text};">${te(Me)}٪</div>
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
                ${We.slice(0,6).map(S=>`
                  <div>
                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.7rem; margin-bottom: 2px; gap: 6px;">
                      <div style="display: flex; align-items: center; gap: 6px; min-width: 0; flex: 1; overflow: hidden; white-space: nowrap;">
                        <span style="width: 7px; height: 7px; border-radius: 50%; background: ${S.color}; flex-shrink: 0; box-shadow: 0 0 6px ${S.color};"></span>
                        <span style="font-weight: 700; color: #ffffff; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${S.name}</span>
                      </div>
                      <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0; white-space: nowrap;">
                        <span style="color: #9ca3af; font-size: 0.65rem;">${Ue(S.mins)}</span>
                        <span style="color: ${S.color}; font-weight: 800; font-size: 0.68rem; min-width: 30px; text-align: left;">${te(S.pct)}٪</span>
                      </div>
                    </div>
                    <!-- Sub Progress Line -->
                    <div style="width: 100%; height: 5px; background: rgba(255, 255, 255, 0.06); border-radius: 999px; overflow: hidden;">
                      <div style="width: ${S.pct}%; height: 100%; background: ${S.color}; border-radius: 999px;"></div>
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
              ${Object.keys(z).map(S=>{const K=z[S];return`
                  <div style="background: ${K.bg}; border: 1px solid ${K.border}; padding: 5px 8px; border-radius: 10px; display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 4px;">
                      <span style="font-size: 0.8rem;">${K.icon}</span>
                      <span style="font-size: 0.68rem; font-weight: 700; color: #e4e4e7;">${S}</span>
                    </div>
                    <span style="font-size: 0.68rem; font-weight: 800; color: ${K.color};">
                      ${Ue(K.mins)}
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
                ${ae.slice(0,5).map(S=>`
                  <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); padding: 6px 8px; border-radius: 10px; display: flex; justify-content: space-between; align-items: center;">
                    <div style="display: flex; align-items: center; gap: 6px; min-width: 0; flex: 1; overflow: hidden;">
                      <span style="font-size: 0.72rem; font-weight: 800; color: #ffffff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${S.subject}</span>
                      <span style="font-size: 0.6rem; color: #c4b5fd; background: rgba(167, 139, 250, 0.15); padding: 1px 5px; border-radius: 6px; font-weight: 700; white-space: nowrap; flex-shrink: 0;">${S.studyType}</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0; white-space: nowrap;">
                      ${S.tCount>0?`
                        <span style="font-size: 0.6rem; color: #34d399; background: rgba(52, 211, 153, 0.12); padding: 1px 5px; border-radius: 6px; font-weight: 700;">
                          🎯 ${te(S.tCount)}
                        </span>
                      `:""}
                      <span style="font-size: 0.65rem; color: #38bdf8; font-weight: 700; font-family: 'Outfit', sans-serif;">
                        ${S.timeRangeStr}
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
              ${gt.map(S=>{const X=oe&&oe.id===S.id?"background: linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(217, 119, 6, 0.2) 100%); border: 1.5px solid #fbbf24; color: #ffffff; box-shadow: 0 0 12px rgba(245, 158, 11, 0.35); font-weight: 900;":"background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); color: #d4d4d8; font-weight: 700;";return`
                  <button type="button"
                    onclick="if(window.setDailyMood){ window.setDailyMood('${t}', '${S.id}'); }"
                    style="padding: 7px 8px; border-radius: 12px; font-size: 0.7rem; cursor: pointer; transition: all 0.15s ease; display: flex; align-items: center; justify-content: center; gap: 4px; ${X}">
                    <span>${S.badge}</span>
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
  `}function et(n,e=!1){const t=document.getElementById("planex-story-toast");t&&t.remove();const o=document.createElement("div");o.id="planex-story-toast",Object.assign(o.style,{position:"fixed",bottom:"24px",left:"50%",transform:"translateX(-50%)",padding:"12px 24px",borderRadius:"14px",fontSize:"0.88rem",fontWeight:"700",color:"#ffffff",background:e?"linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)":"linear-gradient(135deg, #10b981 0%, #059669 100%)",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.4)",zIndex:"999999",direction:"rtl",transition:"opacity 0.3s ease",opacity:"0"}),o.textContent=n,document.body.appendChild(o),requestAnimationFrame(()=>{o.style.opacity="1"}),setTimeout(()=>{o.style.opacity="0",setTimeout(()=>o.remove(),350)},3e3)}function zt(n){const e=t=>{if(t.nodeType!==1)return;const o=t.style;o.filter&&(o.filter="none"),o.backdropFilter&&(o.backdropFilter="none"),o.webkitBackdropFilter&&(o.webkitBackdropFilter="none"),["color","backgroundColor","borderColor"].forEach(i=>{const a=o[i];if(a&&a.includes("var(")){const r=getComputedStyle(t)[i];r&&(o[i]=r)}});for(const i of t.children)e(i)};e(n)}async function qt(n,e){try{if(typeof navigator<"u"&&navigator.share&&navigator.canShare){const i=await(await fetch(n)).blob(),a=new File([i],e,{type:i.type||"image/png"});if(navigator.canShare({files:[a]})){await navigator.share({files:[a],title:"PlanEx Story"});return}}}catch(o){o&&o.name!=="AbortError"&&console.warn("[triggerDownload] Web Share failed, falling back to anchor:",o)}const t=document.createElement("a");t.download=e,t.href=n,document.body.appendChild(t),t.click(),document.body.removeChild(t)}function Vt(n,e,t,o){return new Promise((i,a)=>{try{const r="http://www.w3.org/2000/svg",d=n.cloneNode(!0);zt(d),d.style.width=e+"px",d.style.height=t+"px";const s=new XMLSerializer().serializeToString(d),l=`
        <svg xmlns="${r}" width="${e}" height="${t}">
          <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml">${s}</div>
          </foreignObject>
        </svg>`,c=new Image,f=new Blob([l],{type:"image/svg+xml;charset=utf-8"}),m=URL.createObjectURL(f);c.onload=()=>{const y=document.createElement("canvas");y.width=e*o,y.height=t*o;const w=y.getContext("2d");w.fillStyle="#030712",w.fillRect(0,0,y.width,y.height),w.scale(o,o),w.drawImage(c,0,0,e,t),URL.revokeObjectURL(m),i(y)},c.onerror=y=>{URL.revokeObjectURL(m),a(new Error("Fallback SVG-to-Canvas render failed: "+(y.message||y)))},c.src=m}catch(r){a(r)}})}async function Nt(){const n=document.getElementById("btn-download-story-card"),e=document.getElementById("planex-story-card-canvas");if(!e){et("عنصر کارت پیدا نشد.",!0);return}const t=n?n.innerHTML:"";n&&(n.disabled=!0,n.innerHTML="<span>⏳</span><span>در حال ساخت تصویر...</span>");const o=()=>{n&&(n.disabled=!1,n.innerHTML=t)},a=`PlanEx_Daily_Story_${typeof p<"u"&&typeof p.getTodayJalaliString=="function"?p.getTodayJalaliString().replace(/\//g,"-"):new Date().toISOString().slice(0,10)}.png`;let r=null;try{r=e.cloneNode(!0),r.id="planex-story-card-offscreen",Object.assign(r.style,{position:"fixed",left:"-9999px",top:"0",zIndex:"-1",display:"flex",width:"440px",height:"740px",minHeight:"740px",maxHeight:"740px",maxWidth:"none",transform:"none"}),zt(r),document.body.appendChild(r),await new Promise(s=>requestAnimationFrame(()=>requestAnimationFrame(s)))}catch(s){console.warn("Story card: clone failed, capturing in-place.",s),r=null}const d=r||e;try{let s;try{s=await Wt(d,{scale:2,useCORS:!0,allowTaint:!0,backgroundColor:"#090d16",logging:!1,removeContainer:!1})}catch(c){console.warn("html2canvas failed, attempting fallback:",c);const f=d.offsetWidth||440,m=d.offsetHeight||740;s=await Vt(d,f,m,2)}const l=s.toDataURL("image/png");qt(l,a),n&&(n.innerHTML="<span>✅</span><span>تصویر با موفقیت دانلود شد!</span>",setTimeout(o,2500)),et("تصویر کارت استوری با موفقیت ذخیره شد ✅")}catch(s){console.error("Story card export failed:",s),et("خطا در دانلود تصویر: "+(s.message||s),!0),o()}finally{r&&r.parentNode&&r.parentNode.removeChild(r)}}async function ho(){const n=document.getElementById("btn-download-analysis-report"),e=document.getElementById("planex-analysis-report-canvas");if(!e){et("عنصر کارنامه تحلیلی پیدا نشد.",!0);return}const t=n?n.innerHTML:"";n&&(n.disabled=!0,n.innerHTML="<span>⏳</span><span>در حال ساخت تصویر کارنامه...</span>");const o=()=>{n&&(n.disabled=!1,n.innerHTML=t)},a=`PlanEx_Daily_Analysis_${typeof p<"u"&&typeof p.getTodayJalaliString=="function"?p.getTodayJalaliString().replace(/\//g,"-"):new Date().toISOString().slice(0,10)}.png`;let r=null;try{r=e.cloneNode(!0),r.id="planex-analysis-report-offscreen",Object.assign(r.style,{position:"fixed",left:"-9999px",top:"0",zIndex:"-1",display:"flex",width:"460px",maxHeight:"none",transform:"none"}),zt(r),document.body.appendChild(r),await new Promise(s=>requestAnimationFrame(()=>requestAnimationFrame(s)))}catch(s){console.warn("Analysis report clone failed, capturing in-place.",s),r=null}const d=r||e;try{let s;try{s=await Wt(d,{scale:2,useCORS:!0,allowTaint:!0,backgroundColor:"#090d16",logging:!1,removeContainer:!1})}catch(c){console.warn("html2canvas failed for analysis report, attempting fallback:",c);const f=d.offsetWidth||460,m=d.offsetHeight||820;s=await Vt(d,f,m,2)}const l=s.toDataURL("image/png");qt(l,a),n&&(n.innerHTML="<span>✅</span><span>تصویر کارنامه با موفقیت دانلود شد!</span>",setTimeout(o,2500)),et("کارنامه تحلیلی با موفقیت ذخیره شد ✅")}catch(s){console.error("Analysis report export failed:",s),et("خطا در دانلود تصویر: "+(s.message||s),!0),o()}finally{r&&r.parentNode&&r.parentNode.removeChild(r)}}if(typeof window<"u"&&(window.selectDailyModalDate=n=>{if(!n)return;const e=p&&typeof p.normalizeJalaliDate=="function"?p.normalizeJalaliDate(n):n;window.appState&&(window.appState.selectedJalaliDetailDate=e),typeof window.renderApp=="function"&&window.renderApp()},window.openStoryModal=(n="dailyStoryCard",e=null)=>{const t=typeof state<"u"&&state?state:window.appState,o=n==="dailyAnalysisReport"||n==="analysis"||n==="report"||n==="jalaliDayDetails"?"dailyAnalysisReport":"dailyStoryCard",i=p&&typeof p.getTodayJalaliString=="function"?p.getTodayJalaliString():null,a=e||(t==null?void 0:t.selectedJalaliDetailDate)||i;t&&(a&&(t.selectedJalaliDetailDate=a),t.activeModal=o),window.appState&&window.appState!==t&&(a&&(window.appState.selectedJalaliDetailDate=a),window.appState.activeModal=o);try{history.pushState({modal:o},"")}catch{}typeof window.renderApp=="function"&&window.renderApp()},window.closeStoryModal=()=>{typeof state<"u"&&state&&(state.activeModal=null),window.appState&&(window.appState.activeModal=null),typeof window.renderApp=="function"&&window.renderApp()},window.openDailyStoryCard=(n=null)=>{window.openStoryModal("dailyStoryCard",n)},window.closeDailyStoryCard=()=>{window.closeStoryModal()},window.openDailyAnalysisReport=(n=null)=>{window.openStoryModal("dailyAnalysisReport",n)},window.closeDailyAnalysisReport=()=>{window.closeStoryModal()},window.openDailyReportModal=(n=null)=>{window.openStoryModal("dailyAnalysisReport",n)},window.openQuickStoryModal=(n=null)=>{window.openStoryModal("dailyStoryCard",n)},window.closeDailyReportModal=()=>{window.closeStoryModal()},window.closeQuickStoryModal=()=>{window.closeStoryModal()},window.openDailyReport=window.openDailyReportModal,window.openQuickStory=window.openQuickStoryModal,window.openDailyAnalysisModal=window.openDailyReportModal,window.openJalaliDayDetailsModal=(n=null)=>{window.openStoryModal("dailyAnalysisReport",n)},window.downloadStoryCardPNG=Nt,window.generateStoryCardPNG=Nt,window.downloadAnalysisReportPNG=ho,window.setDailyMood=(n,e)=>{if(!n||!e)return;const t=p&&typeof p.normalizeJalaliDate=="function"?p.normalizeJalaliDate(n):n;localStorage.setItem("planex_daily_mood_"+t,e),typeof window.renderApp=="function"&&window.renderApp()},window.weekdaySelectorDelegationBound||(document.addEventListener("click",n=>{const e=n.target.closest(".weekday-tab-btn, [data-weekday-date]");if(e){const t=e.dataset.date||e.dataset.weekdayDate;t&&typeof window.selectDailyModalDate=="function"&&window.selectDailyModalDate(t)}}),window.weekdaySelectorDelegationBound=!0),window.dailyModalKeyboardBound||(document.addEventListener("keydown",n=>{(n.key==="Escape"||n.keyCode===27)&&window.appState&&(window.appState.activeModal==="dailyStoryCard"||window.appState.activeModal==="dailyAnalysisReport")&&(n.preventDefault(),window.appState.activeModal=null,typeof window.renderApp=="function"&&window.renderApp())}),window.addEventListener("popstate",()=>{window.appState&&(window.appState.activeModal==="dailyStoryCard"||window.appState.activeModal==="dailyAnalysisReport")&&(window.appState.activeModal=null,typeof window.renderApp=="function"&&window.renderApp())}),window.dailyModalKeyboardBound=!0),!window.dailyRingAutoSyncBound)){const n=()=>{document.querySelector(".daily-ring-widget-card")&&typeof window.renderApp=="function"&&window.renderApp()};window.addEventListener("activity-saved",n),window.addEventListener("storage",e=>{(e.key==="planex_recent_activity_sessions"||e.key==="planex_study_logs"||e.key==="planex_active_timer_state")&&n()}),window.dailyRingAutoSyncBound=!0}const ne=n=>String(n??"").replace(/[0-9]/g,e=>"۰۱۲۳۴۵۶۷۸۹"[e]);typeof window<"u"&&(window.openGPACalculator=()=>{window.appState&&(window.appState.activeModal="gpaCalc"),window.renderApp&&window.renderApp()},window.openRankEstimator=()=>{window.appState&&(window.appState.activeModal="rankEstimator"),window.renderApp&&window.renderApp();try{var n=document.getElementById("modal-rank-estimator")||document.getElementById("modal-konkur-estimator");n&&(n.style.display="flex",n.classList.add("active"))}catch{}},window.openKonkurEstimatorModal=function(){try{var n="";try{typeof Ct=="function"?n=Ct():typeof Mt=="function"&&(n=Mt())}catch{n=""}var e=null;try{e=document.getElementById("modals-root")||document.getElementById("modal-container")||document.body}catch{e=null}var t=null;try{t=document.getElementById("modal-konkur-estimator")||document.getElementById("modal-rank-estimator")}catch{t=null}var o=!0;try{t&&t.innerHTML&&t.innerHTML.length>500&&t.querySelector("select, input")&&(o=!1)}catch{o=!0}if(o&&e&&n){try{var i=document.getElementById("modal-konkur-estimator");if(i){var d=document.createElement("div");d.innerHTML=n;var s=d.firstElementChild;s?i.innerHTML=s.innerHTML:i.innerHTML=n}else{var a=document.createElement("div");a.innerHTML=n;var r=a.firstElementChild;r?e.appendChild(r):e.insertAdjacentHTML("beforeend",n)}}catch{try{e.insertAdjacentHTML("beforeend",n)}catch{}}try{t=document.getElementById("modal-konkur-estimator")||document.getElementById("modal-rank-estimator")}catch{}}try{It()}catch{}t&&(t.style.display="flex",t.classList.add("active"))}catch{}try{if(window.appState&&(window.appState.activeModal="rankEstimator"),typeof window.renderApp=="function"){window.renderApp();try{var l=document.getElementById("modal-konkur-estimator")||document.getElementById("modal-rank-estimator");l&&(l.style.display="flex",l.classList.add("active"))}catch{}try{It()}catch{}}}catch{}},window.closeKonkurEstimatorModal=function(){try{["modal-konkur-estimator","modal-rank-estimator"].forEach(function(n){var e=document.getElementById(n);e&&(e.style.display="none",e.classList.remove("active"))})}catch{}try{window.appState&&(window.appState.activeModal=null),typeof window.renderApp=="function"&&window.renderApp()}catch{}},window.openPercentCalculator=()=>{window.appState&&(window.appState.activeModal="percentCalc"),window.renderApp&&window.renderApp()},window.openExamBox=()=>{window.appState&&(window.appState.activeModal="examBox"),window.renderApp&&window.renderApp()},window.openSleepScheduler=()=>{window.appState&&(window.appState.activeModal="sleepScheduler"),window.renderApp&&window.renderApp()});function sn(n){return wo(n)}typeof window<"u"&&(window.handlePercentCalcInput=function(n,e){window.percentCalcState=window.percentCalcState||{correct:20,incorrect:4,unanswered:6},window.percentCalcState[n]=e,window.updatePercentCalculation()},window.updatePercentCalculation=function(){const n=window.percentCalcState||{correct:20,incorrect:4,unanswered:6},e=Math.max(0,parseInt(n.correct)||0),t=Math.max(0,parseInt(n.incorrect)||0),o=Math.max(0,parseInt(n.unanswered)||0),i=e+t+o,a=i>0?(3*e-t)/(3*i)*100:0,r=Math.max(-33.3,Math.min(100,a)).toFixed(1);let d="#10b981",s="عالی 🚀 (عملکرد فوق‌العاده)";a<50?(d="#ef4444",s="نیاز به مرور و تمرکز بیشتر ⚠️"):a<70&&(d="#f59e0b",s="خوب و قابل ارتقا 👍");const l=i>0?(t/(3*i)*100).toFixed(1):"0",c=document.getElementById("percent-calc-card-box");c&&(c.style.borderColor=d);const f=document.getElementById("percent-calc-score-display");f&&(f.textContent=`${ne(r)}٪`,f.style.color=d);const m=document.getElementById("percent-calc-badge");m&&(m.textContent=s,m.style.color=d,m.style.borderColor=d);const y=document.getElementById("percent-calc-total-display");y&&(y.textContent=`${ne(i)} سوال`);const w=document.getElementById("percent-calc-positive-display");w&&(w.textContent=`+${ne(3*e)}`);const u=document.getElementById("percent-calc-lost-display");u&&(u.textContent=`-${ne(t)} امتیاز (-${ne(l)}٪)`)});function dn(){window.percentCalcState=window.percentCalcState||{correct:20,incorrect:4,unanswered:6};const{correct:n,incorrect:e,unanswered:t}=window.percentCalcState,o=Math.max(0,parseInt(n)||0),i=Math.max(0,parseInt(e)||0),a=Math.max(0,parseInt(t)||0),r=o+i+a,d=r>0?(3*o-i)/(3*r)*100:0,s=Math.max(-33.3,Math.min(100,d)).toFixed(1);let l="#10b981",c="عالی 🚀 (عملکرد فوق‌العاده)";d<50?(l="#ef4444",c="نیاز به مرور و تمرکز بیشتر ⚠️"):d<70&&(l="#f59e0b",c="خوب و قابل ارتقا 👍");const f=r>0?(i/(3*r)*100).toFixed(1):"0";return`
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
              <input type="number" min="0" value="${o}" class="form-input" style="border-color: rgba(52, 211, 153, 0.4); text-align: center; font-size: 1rem; font-weight: bold; font-family: 'Outfit';"
                oninput="window.handlePercentCalcInput('correct', this.value)" />
            </div>

            <div class="input-group">
              <label class="input-label" style="color: #f87171; font-weight: bold; font-size: 0.78rem;">تست نادرست (I)</label>
              <input type="number" min="0" value="${i}" class="form-input" style="border-color: rgba(248, 113, 113, 0.4); text-align: center; font-size: 1rem; font-weight: bold; font-family: 'Outfit';"
                oninput="window.handlePercentCalcInput('incorrect', this.value)" />
            </div>

            <div class="input-group">
              <label class="input-label" style="color: #94a3b8; font-weight: bold; font-size: 0.78rem;">نزده / بی‌پاسخ (U)</label>
              <input type="number" min="0" value="${a}" class="form-input" style="border-color: rgba(148, 163, 184, 0.4); text-align: center; font-size: 1rem; font-weight: bold; font-family: 'Outfit';"
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
              <strong id="percent-calc-positive-display" style="color: #34d399; font-family: 'Outfit';">+${ne(3*o)}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; color: #cbd5e1;">
              <span>تلفات ناشی از پاسخ نادرست (نمره منفی):</span>
              <strong id="percent-calc-lost-display" style="color: #f87171; font-family: 'Outfit';">-${ne(i)} امتیاز (-${ne(f)}٪)</strong>
            </div>
          </div>
        </div>

        <button onclick="window.appState.activeModal = null; window.renderApp();" class="btn-primary" style="width: 100%; background: #fb923c; border: none; padding: 12px; border-radius: 14px; font-weight: 800; color: #000; cursor: pointer;">
          تایید و بستن
        </button>
      </div>
    </div>
  `}function Kt(n,e,t,o){const i=t>100?Math.round(Math.min(13500,Math.max(2e3,t))):Math.round(3500+Math.max(0,Math.min(100,t))*82),a=o>100?Math.round(Math.min(13500,Math.max(2e3,o))):o<=20?Math.round(3e3+Math.pow(Math.max(0,Math.min(20,o))/20,1.85)*8e3):Math.round(3e3+Math.pow(Math.max(0,Math.min(100,o))/100,1.85)*8e3),r=Math.round(i*.5+a*.5);let d="بیش از ۲۵,۰۰۰",s="بیش از ۶۰,۰۰۰",l="رشته‌های بر اساس سوابق تحصیلی و دانشگاه‌های غیرانتفاعی / آزاد",c="#ef4444";r>=10800?(d="۱ تا ۱۰۰",s="۱ تا ۲۵۰",l="پزشکی و دندان‌پزشکی دانشگاه تهران و علوم پزشکی شهید بهشتی",c="#10b981"):r>=1e4?(d="کمتر از ۵۰۰ (۱۰۰ تا ۵۰۰)",s="۲۵۰ تا ۱,۲۵۰",l="پزشکی / دندانپزشکی روزانه (دانشگاه‌های دولتی تیپ ۱ و ۲)",c="#10b981"):r>=9200?(d="۵۰۰ تا ۱,۵۰۰",s="۱,۲۵۰ تا ۳,۵۰۰",l="پزشکی و دندان‌پزشکی تیپ ۳ / داروسازی برتر مراکز استان",c="#34d399"):r>=8500?(d="۱,۵۰۰ تا ۳,۵۰۰",s="۳,۵۰۰ تا ۸,۲۰۰",l="داروسازی / فیزیوتراپی / پیراپزشکی برتر (دانشگاه‌های تیپ ۱ و ۲)",c="#38bdf8"):r>=8e3?(d="۳,۵۰۰ تا ۵,۰۰۰",s="۸,۲۰۰ تا ۱۲,۰۰۰",l="بینایی‌سنجی، کاردرمانی، پرستاری و مامایی تیپ ۱",c="#fbbf24"):r>=7e3?(d="۵,۰۰۰ تا ۱۲,۰۰۰",s="۱۲,۰۰۰ تا ۲۸,۰۰۰",l="پیراپزشکی‌ها (پرستاری، مامایی، هوشبری، اتاق عمل دولتی)",c="#fb923c"):r>=6e3?(d="۱۲,۰۰۰ تا ۲۵,۰۰۰",s="۲۸,۰۰۰ تا ۶۰,۰۰۰",l="علوم پایه، بهداشت و پیراپزشکی‌های شهریه‌پرداز / پردیس / آزاد",c="#a1a1aa"):(d="بیش از ۲۵,۰۰۰",s="بیش از ۶۰,۰۰۰",l="دوره‌های نوبت دوم، پیام‌نور و پذیرش بر اساس سوابق تحصیلی",c="#ef4444");let f=d;return e==="منطقه ۱"?r>=1e4?f="کمتر از ۳۵۰":r>=9200?f="۳۵۰ تا ۱,۱۰۰":r>=8500?f="۱,۱۰۰ تا ۲,۴۰۰":r>=8e3?f="۲,۴۰۰ تا ۳,۸۰۰":r>=7e3?f="۳,۸۰۰ تا ۸,۵۰۰":r>=6e3?f="۸,۵۰۰ تا ۱۸,۰۰۰":f="بیش از ۱۸,۰۰۰":e==="منطقه ۳"?r>=1e4?f="کمتر از ۴۰۰":r>=9200?f="۴۰۰ تا ۱,۳۰۰":r>=8500?f="۱,۳۰۰ تا ۳,۰۰۰":r>=8e3?f="۳,۰۰۰ تا ۴,۵۰۰":r>=7e3?f="۴,۵۰۰ تا ۱۰,۵۰۰":r>=6e3?f="۱۰,۵۰۰ تا ۲۲,۰۰۰":f="بیش از ۲۲,۰۰۰":e==="ایثارگران"&&(r>=1e4?f="کمتر از ۵۰ سهمیه":r>=8500?f="۵۰ تا ۳۰۰ سهمیه":r>=7e3?f="۳۰۰ تا ۱,۲۰۰ سهمیه":f="بیش از ۱,۲۰۰ سهمیه"),{konkurTazar:i,finalExamTazar:a,weightedTotalTazar:r,quotaRankDisplay:f,countryRankText:s,targetTier:l,badgeColor:c}}typeof window<"u"&&(window.handleRankEstimatorInput=function(n,e){window.rankEstimatorState||(window.rankEstimatorState={stream:"تجربی",region:"منطقه ۲",konkurScore:8800,finalScore:9e3}),window.rankEstimatorState[n]=e,window.updateRankEstimation()},window.updateRankEstimation=function(){const n=window.rankEstimatorState||{},e=n.stream||"تجربی",t=n.region||"منطقه ۲",o=n.konkurScore??n.dedicatedPct??8800,i=n.finalScore??n.generalPct??9e3,a=parseFloat(o)||0,r=parseFloat(i)||0,d=Kt(e,t,a,r),s=document.getElementById("rank-estimator-quota-display");s&&(s.textContent=ne(d.quotaRankDisplay),s.style.color=d.badgeColor);const l=document.getElementById("rank-estimator-quota-label");l&&(l.textContent=`🎯 رتبه تخمینی در سهمیه ${t}:`);const c=document.getElementById("rank-estimator-country-display");c&&(c.textContent=ne(d.countryRankText));const f=document.getElementById("rank-estimator-total-tazar");f&&(f.textContent=ne(d.weightedTotalTazar));const m=document.getElementById("rank-estimator-sub-tazars");m&&(m.textContent=`(کنکور: ${ne(d.konkurTazar)} • نهایی: ${ne(d.finalExamTazar)})`);const y=document.getElementById("rank-estimator-target-tier");y&&(y.textContent=d.targetTier);const w=document.getElementById("rank-estimator-result-card");w&&(w.style.borderColor=d.badgeColor)});function Mt(){window.rankEstimatorState=window.rankEstimatorState||{stream:"تجربی",region:"منطقه ۲",konkurScore:8800,finalScore:9e3};const{stream:n,region:e}=window.rankEstimatorState,t=window.rankEstimatorState.konkurScore??window.rankEstimatorState.dedicatedPct??8800,o=window.rankEstimatorState.finalScore??window.rankEstimatorState.generalPct??9e3,i=parseFloat(t)||0,a=parseFloat(o)||0,r=Kt(n,e,i,a);return`
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
                ${["تجربی","ریاضی","انسانی","هنر","زبان"].map(d=>`<option value="${d}" ${d===n?"selected":""}>${d}</option>`).join("")}
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
              <input type="number" min="0" max="14000" step="0.1" value="${o}" class="form-input" style="text-align: center; font-weight: bold; font-family: 'Outfit';"
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
  `}function Ct(){return Mt()}function It(){try{var n=null;try{n=document.getElementById("modal-konkur-estimator")||document.getElementById("modal-rank-estimator")}catch{n=null}if(!n)return;try{var e=n.querySelectorAll("select");e.forEach(function(o,i){try{if(o.dataset&&o.dataset.boundKonkur)return;o.dataset&&(o.dataset.boundKonkur="1"),o.addEventListener("change",function(){try{var a=i===0?"stream":"region";try{var r=o.options&&o.selectedIndex>=0?o.options[o.selectedIndex]:null,d=r&&(r.text||r.value)||"";d.indexOf("منطقه")>=0||d.indexOf("ایثار")>=0?a="region":a="stream",i===1&&(a="region"),i===0&&(a="stream")}catch{}typeof window.handleRankEstimatorInput=="function"?window.handleRankEstimatorInput(a,o.value):typeof window.updateRankEstimation=="function"&&window.updateRankEstimation()}catch{}})}catch{}})}catch{}try{var t=n.querySelectorAll('input[type="number"]');t.forEach(function(o,i){try{if(o.dataset&&o.dataset.boundKonkur)return;o.dataset&&(o.dataset.boundKonkur="1"),o.addEventListener("input",function(){try{var a=i===0?"konkurScore":"finalScore";typeof window.handleRankEstimatorInput=="function"?window.handleRankEstimatorInput(a,o.value):typeof window.updateRankEstimation=="function"&&window.updateRankEstimation()}catch{}})}catch{}})}catch{}}catch{}}if(typeof window<"u"){try{window.bindKonkurEstimatorLiveHandlers=It}catch{}try{window.renderKonkurEstimatorModal=Ct}catch{}}function ln(){window.sleepSchedulerState=window.sleepSchedulerState||{mode:"wake",hour:6,minute:30};const{mode:n,hour:e,minute:t}=window.sleepSchedulerState,o=parseInt(e)*60+parseInt(t),a=[6,5,4,3].map(r=>{const d=r*90+15;let s=0;n==="wake"?s=(o-d+1440)%1440:s=(o+d)%1440;const l=Math.floor(s/60),c=s%60,f=`${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}`,m=(r*1.5).toFixed(1);return{cycleCount:r,hoursCount:m,timeStr:f,isOptimal:r===5||r===6}});return`
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
              style="flex: 1; padding: 8px; font-weight: 800; font-size: 0.78rem; border-radius: 10px; border: none; cursor: pointer; background: ${n==="wake"?"#818cf8":"transparent"}; color: ${n==="wake"?"#000":"#a1a1aa"};">
              ⏰ می‌خواهم فلان ساعت بیدار شوم
            </button>
            <button onclick="window.sleepSchedulerState.mode = 'bed'; window.renderApp();"
              style="flex: 1; padding: 8px; font-weight: 800; font-size: 0.78rem; border-radius: 10px; border: none; cursor: pointer; background: ${n==="bed"?"#818cf8":"transparent"}; color: ${n==="bed"?"#000":"#a1a1aa"};">
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
            ${n==="wake"?"ساعات پیشنهادی برای به خواب رفتن:":"ساعات پیشنهادی برای بیدار شدن با نشاط:"}
          </div>

          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-bottom: 14px;">
            ${a.map(r=>`
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
  `}const yt={12:[{name:"زیست‌شناسی / حسابان",coefficient:4},{name:"فیزیک",coefficient:3},{name:"شیمی",coefficient:3},{name:"ادبیات فارسی",coefficient:4},{name:"دین و زندگی",coefficient:3},{name:"زبان انگلیسی",coefficient:2},{name:"عربی، زبان قرآن",coefficient:2},{name:"سلامت و بهداشت",coefficient:1}],11:[{name:"درس اختصاصی ۱",coefficient:4},{name:"درس اختصاصی ۲",coefficient:3},{name:"درس اختصاصی ۳",coefficient:3},{name:"ادبیات فارسی",coefficient:4},{name:"دین و زندگی",coefficient:3},{name:"زبان انگلیسی",coefficient:2},{name:"عربی، زبان قرآن",coefficient:2},{name:"تاریخ / زمین‌شناسی",coefficient:1}],10:[{name:"درس اختصاصی ۱",coefficient:4},{name:"درس اختصاصی ۲",coefficient:3},{name:"درس اختصاصی ۳",coefficient:3},{name:"ادبیات فارسی",coefficient:4},{name:"دین و زندگی",coefficient:3},{name:"زبان انگلیسی",coefficient:2},{name:"عربی، زبان قرآن",coefficient:2},{name:"آمادگی دفاعی",coefficient:1}]};typeof window<"u"&&(window.handleGPAInputChange=function(n,e){window.gpaCalcState||(window.gpaCalcState={grade:"12",scores:{}}),window.gpaCalcState.scores||(window.gpaCalcState.scores={}),window.gpaCalcState.scores[n]=e,window.updateGPACalculation()},window.handleGPAGradeChange=function(n){window.gpaCalcState||(window.gpaCalcState={grade:"12",scores:{}}),window.gpaCalcState.grade=n,window.renderApp&&window.renderApp()},window.updateGPACalculation=function(){const n=window.gpaCalcState||{grade:"12",scores:{}},e=n.grade||"12",t=n.scores||{},o=yt[e]||yt[12];let i=0,a=0;o.forEach(y=>{const w=t[y.name],u=w!=null&&w!==""?parseFloat(w):20,g=isNaN(u)?0:Math.max(0,Math.min(20,u)),b=parseFloat(y.coefficient||y.weight)||1;i+=g*b,a+=b});const r=a>0?i/a:0,d=Number(r.toFixed(2)).toFixed(2);let s="#10b981",l="عالی 🟢";r<14?(s="#ef4444",l="نیازمند جبران 🔴"):r<17?(s="#fbbf24",l="مناسب 🟡"):(s="#10b981",l="عالی 🟢");const c=document.getElementById("gpa-result-display");c&&(c.textContent=`${ne(d)} از ۲۰`,c.style.color=s);const f=document.getElementById("gpa-status-badge");f&&(f.textContent=`وضعیت: ${l}`,f.style.color=s);const m=document.getElementById("gpa-card-box");m&&(m.style.borderColor=s)});function cn(){window.gpaCalcState=window.gpaCalcState||{grade:"12",scores:{}};const{grade:n}=window.gpaCalcState,e=window.gpaCalcState.scores=window.gpaCalcState.scores||{},o=(yt[n]||yt[12]).map(c=>{const f=e[c.name],m=f!=null&&f!==""?parseFloat(f):20;return{name:c.name,grade:isNaN(m)?0:Math.max(0,Math.min(20,m)),coefficient:parseFloat(c.coefficient||c.weight)||1}});let i=0,a=0;o.forEach(c=>{const f=parseFloat(c.grade)||0,m=parseFloat(c.coefficient)||1;i+=f*m,a+=m});const r=a>0?i/a:0,d=Number(r.toFixed(2)).toFixed(2);let s="#10b981",l="عالی 🟢";return r<14?(s="#ef4444",l="نیازمند جبران 🔴"):r<17?(s="#fbbf24",l="مناسب 🟡"):(s="#10b981",l="عالی 🟢"),`
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
                style="flex: 1; padding: 8px; font-weight: 800; font-size: 0.78rem; border-radius: 10px; border: none; cursor: pointer; background: ${n===c?"#34d399":"transparent"}; color: ${n===c?"#000":"#a1a1aa"};">
                پایه ${c==="12"?"دوازدهم":c==="11"?"یازدهم":"دهم"}
              </button>
            `).join("")}
          </div>

          <div style="max-height: 240px; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px; padding-left: 4px;">
            ${o.map(c=>`
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
  `}typeof window<"u"&&(window.handleExamBoxInput=function(n,e){window.examBoxState=window.examBoxState||{days:14,chapters:21,rounds:2},window.examBoxState[n]=e,window.updateExamBoxCalculation()},window.updateExamBoxCalculation=function(){const n=window.examBoxState||{days:14,chapters:21,rounds:2},e=Math.max(1,parseInt(n.days)||1),t=Math.max(1,parseInt(n.chapters)||1),o=Math.max(1,parseInt(n.rounds)||1),i=t*o,a=(i/e).toFixed(1),r=Math.max(1,Math.floor(e*.6)),d=Math.max(1,Math.floor(e*.25)),s=Math.max(1,e-r-d),l=document.getElementById("exam-box-pace-display");l&&(l.textContent=`${ne(a)} فصل در روز`);const c=document.getElementById("exam-box-summary-display");c&&(c.textContent=`(مجموع ${ne(i)} واحد مطالعه در ${ne(e)} روز)`);const f=document.getElementById("exam-box-phase1-display");f&&(f.textContent=`${ne(r)} روز اول`);const m=document.getElementById("exam-box-phase2-display");m&&(m.textContent=`${ne(d)} روز بعدی`);const y=document.getElementById("exam-box-phase3-display");y&&(y.textContent=`${ne(s)} روز پایانی`)});function pn(){window.examBoxState=window.examBoxState||{days:14,chapters:21,rounds:2};const{days:n,chapters:e,rounds:t}=window.examBoxState,o=Math.max(1,parseInt(n)||1),i=Math.max(1,parseInt(e)||1),a=Math.max(1,parseInt(t)||1),r=i*a,d=(r/o).toFixed(1),s=Math.max(1,Math.floor(o*.6)),l=Math.max(1,Math.floor(o*.25)),c=Math.max(1,o-s-l);return`
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
              <input type="number" min="1" value="${o}" class="form-input" style="text-align: center; font-weight: bold; font-family: 'Outfit';"
                oninput="window.handleExamBoxInput('days', this.value)" />
            </div>

            <div class="input-group">
              <label class="input-label" style="font-size: 0.75rem;">تعداد فصل‌ها / مباحث</label>
              <input type="number" min="1" value="${i}" class="form-input" style="text-align: center; font-weight: bold; font-family: 'Outfit';"
                oninput="window.handleExamBoxInput('chapters', this.value)" />
            </div>

            <div class="input-group">
              <label class="input-label" style="font-size: 0.75rem;">دفعات مرور (دور)</label>
              <input type="number" min="1" max="5" value="${a}" class="form-input" style="text-align: center; font-weight: bold; font-family: 'Outfit';"
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
              (مجموع ${ne(r)} واحد مطالعه در ${ne(o)} روز)
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
  `}class vo{constructor(){this.ctx=null,this.activeSoundType=null,this.isLoadingSound=null,this.isMuted=!1,this.volume=.5,this.proceduralNodes=null,this.currentBlobUrl=null,typeof Audio<"u"?(this.audioElement=new Audio,this.audioElement.loop=!0,this.audioElement.preload="none",this.audioElement.onerror=e=>{var t;console.warn("Audio Playback CDN Warning for:",(t=this.audioElement)==null?void 0:t.src,"Falling back to Web Audio Synth..."),this.isLoadingSound=null,this.activeSoundType&&this.startProceduralSynth(this.activeSoundType),window.renderApp&&window.renderApp()}):this.audioElement=null}initContext(){try{if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}catch(e){console.warn("AudioContext init error:",e)}}setVolume(e){if(this.volume=parseFloat(e)||.5,this.audioElement&&(this.audioElement.volume=this.volume),this.proceduralNodes&&this.proceduralNodes.masterGain)try{this.proceduralNodes.masterGain.gain.setValueAtTime(this.volume*.4,this.ctx?this.ctx.currentTime:0)}catch{}}stopProceduralSynth(){if(this.proceduralNodes){try{this.proceduralNodes.sources&&this.proceduralNodes.sources.forEach(e=>{try{e.stop(),e.disconnect()}catch{}}),this.proceduralNodes.interval&&clearInterval(this.proceduralNodes.interval)}catch{}this.proceduralNodes=null}}stopSound(){if(this.stopProceduralSynth(),this.audioElement&&(this.audioElement.pause(),this.audioElement.removeAttribute("src"),this.audioElement.load()),this.currentBlobUrl){try{URL.revokeObjectURL(this.currentBlobUrl)}catch{}this.currentBlobUrl=null}this.activeSoundType=null,this.isLoadingSound=null}startProceduralSynth(e){try{if(this.initContext(),!this.ctx)return;this.stopProceduralSynth();const t=2*this.ctx.sampleRate,o=this.ctx.createBuffer(1,t,this.ctx.sampleRate),i=o.getChannelData(0);let a=0;for(let l=0;l<t;l++){const c=Math.random()*2-1;i[l]=(a+.02*c)/1.02,a=i[l],i[l]*=3.5}const r=this.ctx.createBufferSource();r.buffer=o,r.loop=!0;const d=this.ctx.createGain();d.gain.setValueAtTime(this.volume*.35,this.ctx.currentTime);const s=this.ctx.createBiquadFilter();if(e.includes("brown"))s.type="lowpass",s.frequency.setValueAtTime(320,this.ctx.currentTime);else if(e.includes("rain")||e.includes("thunder"))s.type="lowpass",s.frequency.setValueAtTime(1100,this.ctx.currentTime);else if(e.includes("ocean")||e.includes("wave")){s.type="bandpass",s.frequency.setValueAtTime(400,this.ctx.currentTime),s.Q.setValueAtTime(1,this.ctx.currentTime);const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.frequency.setValueAtTime(.12,this.ctx.currentTime),c.gain.setValueAtTime(300,this.ctx.currentTime),l.connect(c),c.connect(s.frequency),l.start()}else e.includes("river")||e.includes("forest")?(s.type="bandpass",s.frequency.setValueAtTime(800,this.ctx.currentTime)):(s.type="lowpass",s.frequency.setValueAtTime(750,this.ctx.currentTime));r.connect(s),s.connect(d),d.connect(this.ctx.destination),r.start(),this.proceduralNodes={masterGain:d,sources:[r]}}catch(t){console.warn("Procedural synth error:",t)}}async playAmbient(e,t){if(this.activeSoundType===e)return this.stopSound(),!1;if(this.stopSound(),this.initContext(),t){this.isLoadingSound=e,this.activeSoundType=e,t.startsWith("blob:")&&(this.currentBlobUrl=t),console.log("Now playing:",e,t),this.audioElement.src=t,this.audioElement.volume=this.volume,this.audioElement.loop=!0,this.audioElement.preload="none";try{return await this.audioElement.play(),this.isLoadingSound=null,!0}catch(o){if(o.name!=="AbortError")return console.warn("Audio play promise failed, using Web Audio Synth:",o),this.isLoadingSound=null,this.startProceduralSynth(e),!0}}else return this.activeSoundType=e,this.startProceduralSynth(e),!0;return!1}playPomodoroAlarm(){try{if(this.initContext(),!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});const e=this.ctx.currentTime;[{start:0,freq:587.33,dur:.32,gain:.28},{start:.22,freq:739.99,dur:.32,gain:.32},{start:.45,freq:880,dur:.48,gain:.36},{start:1,freq:587.33,dur:.32,gain:.28},{start:1.22,freq:739.99,dur:.32,gain:.32},{start:1.45,freq:880,dur:.48,gain:.36},{start:2,freq:659.25,dur:.45,gain:.3},{start:2.22,freq:880,dur:.78,gain:.38}].forEach(o=>{const i=this.ctx.createOscillator(),a=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(o.freq,e+o.start);const r=e+o.start,d=r+o.dur;a.gain.setValueAtTime(1e-4,r),a.gain.linearRampToValueAtTime(o.gain,r+.03),a.gain.exponentialRampToValueAtTime(1e-4,d),i.connect(a),a.connect(this.ctx.destination),i.start(r),i.stop(d)})}catch(e){console.warn("Pomodoro Web Audio playback error:",e)}}}const De=new vo;function So(){De.playPomodoroAlarm()}function ko(){if(typeof window<"u"&&"Notification"in window&&Notification.permission==="default")try{Notification.requestPermission().catch(()=>{})}catch{}}function _o(n=1){if(typeof navigator<"u"&&typeof navigator.vibrate=="function")try{navigator.vibrate([300,150,300])}catch{}if(typeof window<"u"&&"Notification"in window&&Notification.permission==="granted"){const e=n===2,t=e?"⏰ پایان استراحت - پلنکس":"⏰ پایان پومودورو - پلنکس",i={body:e?"زمان استراحت شما به پایان رسید! آماده شروع یک پارت مطالعه باانرژی باشید.":"زمان پارت مطالعه شما به پایان رسید! وقت یک استراحت کوتاه است.",icon:"/logo-transparent.png",badge:"/logo-transparent.png",vibrate:[200,100,200],tag:"planex-pomodoro-finished",renotify:!0};try{new Notification(t,i)}catch{typeof navigator<"u"&&"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(r=>{r&&r.showNotification&&r.showNotification(t,i)}).catch(()=>{})}}}typeof window<"u"&&(window.playPomodoroAlarm=So,window.sendPomodoroNotification=_o,window.requestPomodoroNotificationPermission=ko);const Qt=[{id:"rain_window",title:"🌧️ باران ملایم و پنجره",category:"nature",url:"https://actions.google.com/sounds/v1/weather/rain_heavy.ogg"},{id:"deep_brown_noise",title:"🟤 نویز قهوه‌ای عمیق",category:"focus",url:null},{id:"ambient_piano",title:"🎹 پیانو امبینت بی‌کلام",category:"music",url:"https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=ambient-piano-11070.mp3"},{id:"lofi_study",title:"🎧 لو-فای ملایم مطالعه",category:"music",url:"https://stream.zeno.fm/f3wvbbqmdg8uv"},{id:"rain_soothing",title:"🌧️ باران ملایم و پنجره",category:"nature",url:"https://actions.google.com/sounds/v1/weather/rain_heavy.ogg"},{id:"rain_gentle",title:"🌧️ باران ملایم و پنجره",category:"nature",url:"https://actions.google.com/sounds/v1/weather/rain_heavy.ogg"},{id:"thunderstorm",title:"⚡ رعد و برق",category:"nature",url:"https://actions.google.com/sounds/v1/weather/rain_heavy.ogg"},{id:"brown_noise",title:"🟤 نویز قهوه‌ای عمیق",category:"focus",url:null},{id:"river_stream",title:"🏞️ جریان آب رودخانه",category:"nature",url:"https://actions.google.com/sounds/v1/water/stream_water.ogg"},{id:"coffee_shop",title:"☕ کافه شلوغ",category:"ambient",url:"https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg"},{id:"forest_birds",title:"🌲 جنگل و پرندگان",category:"nature",url:"https://actions.google.com/sounds/v1/environments/forest_birds.ogg"},{id:"ocean_waves",title:"🌊 امواج دریا",category:"nature",url:"https://actions.google.com/sounds/v1/water/waves_crashing.ogg"},{id:"lofi_study_fassounds",title:"🎧 لو-فای ملایم مطالعه",category:"music",url:"https://stream.zeno.fm/f3wvbbqmdg8uv"},{id:"lofi_jazz_mountain",title:"🎷 لوفای جاز",category:"music",url:"https://stream.zeno.fm/f3wvbbqmdg8uv"}],$o="planex_audio_db",To=1,Ve="custom_tracks";typeof navigator<"u"&&navigator.storage&&navigator.storage.persist&&navigator.storage.persist().then(n=>{n&&console.log("[audioDb] Persistent storage granted by browser.")}).catch(()=>{});function St(){return new Promise((n,e)=>{if(typeof indexedDB>"u"){e(new Error("IndexedDB is not supported in this browser."));return}const t=indexedDB.open($o,To);t.onupgradeneeded=o=>{const i=o.target.result;i.objectStoreNames.contains(Ve)||i.createObjectStore(Ve,{keyPath:"id"})},t.onsuccess=o=>{n(o.target.result)},t.onerror=o=>{e(o.target.error||new Error("Failed to open audio database."))}})}const Ke={async saveTrack(n,e=""){if(!n)throw new Error("فایل صوتی انتخاب نشده است.");const t=await St(),o=e||n.name||"آهنگ جدید",a={id:"custom_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),name:o,fileName:n.name||"audio.mp3",fileType:n.type||"audio/mpeg",blob:n,createdAt:Date.now()};return new Promise((r,d)=>{const c=t.transaction(Ve,"readwrite").objectStore(Ve).put(a);c.onsuccess=()=>r(a),c.onerror=f=>d(f.target.error||new Error("خطا در ذخیره فایل صوتی در دیتابیس"))})},async getTracks(){try{const n=await St();return new Promise((e,t)=>{const a=n.transaction(Ve,"readonly").objectStore(Ve).getAll();a.onsuccess=()=>e(a.result||[]),a.onerror=r=>t(r.target.error||new Error("خطا در دریافت لیست آهنگ‌ها"))})}catch(n){return console.warn("[audioDb] getTracks failed:",n),[]}},async deleteTrack(n){if(!n)return!1;const e=await St();return new Promise((t,o)=>{const r=e.transaction(Ve,"readwrite").objectStore(Ve).delete(n);r.onsuccess=()=>t(!0),r.onerror=d=>o(d.target.error||new Error("خطا در حذف آهنگ"))})}};typeof window<"u"&&(window.audioDb=Ke);const Ao=[{id:"rain_window",label:"باران ملایم و پنجره",icon:"🌧️",category:"nature"},{id:"deep_brown_noise",label:"نویز قهوه‌ای عمیق",icon:"🟤",category:"focus"},{id:"ambient_piano",label:"پیانو امبینت بی‌کلام",icon:"🎹",category:"music"},{id:"lofi_study",label:"لو-فای ملایم مطالعه",icon:"🎧",category:"music"}];typeof window<"u"&&!window._customAudioTracksLoaded&&(window._customAudioTracksLoaded=!0,window.customAudioTracksList=[],Ke.getTracks().then(n=>{window.customAudioTracksList=n||[],window.renderApp&&window.renderApp()}).catch(()=>{}));function Xt(n={}){const e=De.activeSoundType||null,t=!!e,o=De.volume!==void 0?Math.round(De.volume*100):50,i=Qt.find(s=>s.id===e),a=window.customAudioTracksList||[],r=a.find(s=>s.id===e),d=r?`آهنگ شخصی: «${r.name}»`:i?`در حال پخش: «${i.title}»`:"افزایش تمرکز با لوفای، پیانو و آهنگ‌های دلخواه";return`
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
        ${Ao.map(s=>{const l=e===s.id||s.id==="rain_window"&&(e==="rain_soothing"||e==="rain_gentle")||s.id==="deep_brown_noise"&&e==="brown_noise"||s.id==="lofi_study"&&e==="lofi_study_fassounds";return`
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

        ${a.length===0?`
          <div style="font-size: 0.72rem; color: #8e8e9c; text-align: center; padding: 6px 0;">
            هنوز آهنگ دلخواهی اضافه نشده است. با دکمه بالا فایل صوتی (MP3/WAV) اضافه کنید.
          </div>
        `:`
          <div style="display: flex; flex-direction: column; gap: 6px; max-height: 160px; overflow-y: auto; scrollbar-width: thin;">
            ${a.map(s=>{const l=e===s.id;return`
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
               value="${o}" 
               oninput="if(window.setAmbientVolume) window.setAmbientVolume(this.value);" 
               style="flex: 1; accent-color: #10b981; height: 4px; cursor: pointer;" />
        <span style="font-size: 0.75rem; font-weight: bold; color: #34d399; font-family: 'Outfit', sans-serif; min-width: 34px; text-align: left;">
          ${o}%
        </span>
      </div>

    </div>
  `}typeof window<"u"&&(window.selectAmbientSound=n=>{const e=Qt.find(t=>t.id===n);e&&De.playAmbient(e.id,e.url).then(()=>{window.renderApp&&window.renderApp()})},window.toggleAmbientAudio=(n="lofi_study")=>{De.activeSoundType?(De.stopSound(),window.renderApp&&window.renderApp()):window.selectAmbientSound(n)},window.setAmbientVolume=n=>{const e=parseFloat(n)/100;De.setVolume(e)},window.handleCustomAudioUpload=async n=>{var t,o;const e=(o=(t=n.target)==null?void 0:t.files)==null?void 0:o[0];if(e)try{const i=await Ke.saveTrack(e,e.name);window.customAudioTracksList=await Ke.getTracks(),window.showToast&&window.showToast(`آهنگ «${i.name}» با موفقیت ذخیره شد! 🎵`,"success"),window.renderApp&&window.renderApp()}catch(i){console.error("Custom audio upload error:",i),window.showToast&&window.showToast("خطا در ذخیره فایل صوتی در دیتابیس","error")}},window.playCustomAudioTrack=async n=>{if(De.activeSoundType===n){De.stopSound(),window.renderApp&&window.renderApp();return}const t=(window.customAudioTracksList||await Ke.getTracks()).find(o=>o.id===n);if(t&&t.blob){const o=URL.createObjectURL(t.blob);De.playAmbient(t.id,o).then(()=>{window.renderApp&&window.renderApp()})}else window.showToast&&window.showToast("فایل صوتی یافت نشد.","error")},window.deleteCustomAudioTrack=async n=>{De.activeSoundType===n&&De.stopSound(),await Ke.deleteTrack(n),window.customAudioTracksList=await Ke.getTracks(),window.showToast&&window.showToast("آهنگ با موفقیت حذف شد 🗑️","info"),window.renderApp&&window.renderApp()});const jt=[{id:"یادگیری",label:"یادگیری",icon:"🧠",desc:"مطالعه درسنامه و مفهومی"},{id:"تست‌زنی",label:"تست‌زنی",icon:"🎯",desc:"حل تست آموزشی و زمان‌دار"},{id:"مرور",label:"مرور",icon:"🔄",desc:"مرور خلاصه، فلش‌کارت و یادداشت"},{id:"جمع‌بندی",label:"جمع‌بندی",icon:"📑",desc:"جمع‌بندی سرفصل و آزمون جامع"}];typeof window<"u"&&(window.closeQuickActivityModal=function(){try{const n=document.getElementById("modal-fab-activity-registration");n&&(n.style.display="none",n.classList.remove("active"))}catch(n){console.warn("[closeQuickActivityModal] DOM hide error:",n)}try{typeof window.closeFabActivityModal=="function"?window.closeFabActivityModal():window.appState&&(window.appState.activeModal=null,typeof window.renderApp=="function"&&window.renderApp())}catch(n){console.warn("[closeQuickActivityModal] state update error:",n)}},window.showLiveTimerSection=function(){try{var n=document.getElementById("section-live-timer");n&&(n.style.display="block");var e=document.getElementById("section-manual-log");e&&(e.style.display="none");try{var t=document.getElementById("fab-timer-section");t&&t!==n&&(t.style.display="block");var o=document.getElementById("fab-manual-section");o&&o!==e&&(o.style.display="none")}catch{}var i=document.getElementById("btn-mode-timer");i&&i.classList.add("active");var a=document.getElementById("btn-mode-manual");a&&a.classList.remove("active")}catch{}try{window.fabActivityState=window.fabActivityState||{},window.fabActivityState.activeTab="timer"}catch{}},window.showManualLogSection=function(){try{var n=document.getElementById("section-live-timer");n&&(n.style.display="none");var e=document.getElementById("section-manual-log");e&&(e.style.display="block");try{var t=document.getElementById("fab-timer-section");t&&t!==n&&(t.style.display="none");var o=document.getElementById("fab-manual-section");o&&o!==e&&(o.style.display="block")}catch{}var i=document.getElementById("btn-mode-timer");i&&i.classList.remove("active");var a=document.getElementById("btn-mode-manual");a&&a.classList.add("active")}catch{}try{window.fabActivityState=window.fabActivityState||{},window.fabActivityState.activeTab="manual"}catch{}},window.switchFabActivityTab=function(n,e){try{e&&e.preventDefault&&e.preventDefault()}catch{}try{e&&e.stopPropagation&&e.stopPropagation()}catch{}try{const t=n==="manual"?"manual":"timer";if(t==="manual")try{window.showManualLogSection()}catch{}else try{window.showLiveTimerSection()}catch{}try{const o=document.getElementById("fab-timer-section"),i=document.getElementById("fab-manual-section");o&&(o.style.display=t==="timer"?"block":"none"),i&&(i.style.display=t==="manual"?"block":"none")}catch{}window.fabActivityState=window.fabActivityState||{},window.fabActivityState.activeTab=t}catch(t){console.warn("[switchFabActivityTab] error:",t)}},window._fabTabDelegationAttached||(window._fabTabDelegationAttached=!0,document.addEventListener("click",n=>{try{const e=n.target&&n.target.closest?n.target.closest(".btn-fab-modal-tab"):null;if(!e||!e.closest("#modal-fab-activity-registration"))return;const t=e.getAttribute("data-tab")||e.getAttribute("data-mode");(t==="timer"||t==="manual")&&(n.preventDefault(),n.stopPropagation(),window.switchFabActivityTab(t,n))}catch{}})));function un(n={}){var y,w;const e=window.fabActivityState||{activeTab:"timer",timerType:"pomodoro",categoryCode:null,subject:"",studyType:"یادگیری",startTime:"08:00",endTime:"09:30",durationMins:90,testCorrect:0,testWrong:0,testUnanswered:0},t=u=>String(u).replace(/[0-9]/g,g=>"۰۱۲۳۴۵۶۷۸۹"[g]),o=(typeof p<"u"?p.getCategories():[])||[],i=o.filter(u=>Oe(u)),a=e.categoryCode||((y=i[0])==null?void 0:y.code)||((w=o[0])==null?void 0:w.code)||"ع-س",r=typeof p<"u"&&typeof p.getUniqueLoggedTopics=="function"?p.getUniqueLoggedTopics(a):[],s=((u,g)=>{try{const[b,v]=(u||"08:00").split(":").map(Number),[A,k]=(g||"09:30").split(":").map(Number);if(!isNaN(b)&&!isNaN(v)&&!isNaN(A)&&!isNaN(k)){let T=b*60+v,x=A*60+k;x<T&&(x+=24*60);const M=x-T;return M>0?M:60}}catch{}return 60})(e.startTime,e.endTime);e.durationMins=s;const l=Math.max(0,parseInt(e.testCorrect)||0),c=Math.max(0,parseInt(e.testWrong)||0),f=Math.max(0,parseInt(e.testUnanswered)||0),m=l+c+f;return`
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
                ${i.map(u=>`
                  <button type="button" class="btn-fab-cat-chip ${u.code===a?"active":""}" data-code="${u.code}" data-title="${u.title}" onclick="window.handleSelectManualSubject && window.handleSelectManualSubject(this, '${u.title}', '${u.code}')" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 12px; border-radius: 12px; border: 1px solid ${u.code===a?"#10b981":"rgba(255,255,255,0.08)"}; background: ${u.code===a?"rgba(16,185,129,0.2)":"#1f2029"}; color: ${u.code===a?"#34d399":"#e4e4e7"}; font-size: 0.8rem; font-weight: 800; cursor: pointer; white-space: nowrap;">
                    <span>${u.icon||"📚"}</span>
                    <span>${u.title}</span>
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
                ${r.map(u=>`<option value="${u}"></option>`).join("")}
              </datalist>
            </div>

            <!-- 3. Study-Type Pills (یادگیری، تست‌زنی، مرور، جمع‌بندی) -->
            <div style="margin-bottom: 18px;">
              <label style="display: block; font-size: 0.78rem; font-weight: 800; color: #a1a1aa; margin-bottom: 8px;">
                ۳. فاز / نوع مطالعه (الزامی):
              </label>

              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;" id="fab-timer-phase-container">
                ${jt.map(u=>{const g=e.studyType===u.id||e.selectedPhase===u.id||!e.studyType&&!e.selectedPhase&&u.id==="یادگیری";return`
                    <button type="button" class="btn-phase-chip btn-fab-study-pill ${g?"active":""}" data-phase="${u.id}" data-pill="${u.id}" onclick="event.preventDefault(); event.stopPropagation(); window.selectStudyPhase && window.selectStudyPhase(this, '${u.id}')" style="padding: 10px 12px; border-radius: 14px; border: 1.5px solid ${g?"#10b981":"rgba(255,255,255,0.08)"}; background: ${g?"rgba(16,185,129,0.2)":"#1f2029"}; color: ${g?"#ffffff":"#e4e4e7"}; font-size: 0.82rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 8px; text-align: right; transition: all 0.15s ease;">
                      <span style="font-size: 1.2rem;">${u.icon}</span>
                      <div>
                        <strong style="display: block; font-size: 0.84rem;">${u.label}</strong>
                        <span style="font-size: 0.68rem; color: ${g?"#a7f3d0":"#71717a"}; font-weight: normal;">${u.desc}</span>
                      </div>
                    </button>
                  `}).join("")}
              </div>
              <input type="hidden" id="fab-timer-phase" value="${e.studyType||e.selectedPhase||"یادگیری"}" />
            </div>

            <!-- 🎵 Ambient Focus Sound Player Widget -->
            ${Xt()}

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
                  ${xe(s)}
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
                ${i.map(u=>`
                  <button type="button" class="btn-fab-cat-chip ${u.code===a?"active":""}" data-code="${u.code}" data-title="${u.title}" onclick="window.handleSelectManualSubject && window.handleSelectManualSubject(this, '${u.title}', '${u.code}')" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 12px; border-radius: 12px; border: 1px solid ${u.code===a?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${u.code===a?"#7c3aed":"#1f2029"}; color: ${u.code===a?"#ffffff":"#e4e4e7"}; font-size: 0.8rem; font-weight: 800; cursor: pointer; white-space: nowrap;">
                    <span>${u.icon||"📚"}</span>
                    <span>${u.title}</span>
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
                ${r.map(u=>`<option value="${u}"></option>`).join("")}
              </datalist>
            </div>

            <!-- 3. Study-Type Pills -->
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-size: 0.78rem; font-weight: 800; color: #a1a1aa; margin-bottom: 8px;">
                فاز / نوع مطالعه:
              </label>

              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;" id="fab-manual-phase-container">
                ${jt.map(u=>{const g=e.studyType===u.id||e.selectedPhase===u.id||!e.studyType&&!e.selectedPhase&&u.id==="یادگیری";return`
                    <button type="button" class="btn-phase-chip btn-fab-study-pill ${g?"active":""}" data-phase="${u.id}" data-pill="${u.id}" onclick="event.preventDefault(); event.stopPropagation(); window.selectStudyPhase && window.selectStudyPhase(this, '${u.id}')" style="padding: 8px 4px; border-radius: 12px; border: 1px solid ${g?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${g?"#7c3aed":"#1f2029"}; color: ${g?"#ffffff":"#e4e4e7"}; font-size: 0.78rem; font-weight: 800; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 2px;">
                      <span style="font-size: 1.1rem;">${u.icon}</span>
                      <span>${u.label}</span>
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
                  <input type="number" id="input-fab-test-unanswered" min="0" value="${f}" oninput="window.updateFabTestScorePreview && window.updateFabTestScorePreview()" style="width: 100%; box-sizing: border-box; height: 38px; text-align: center; font-size: 1.1rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(161,161,170,0.2); border-radius: 8px; color: #a1a1aa;" />
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
  `}function Zt(){const n=typeof localStorage<"u"&&(localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_nickname")||localStorage.getItem("planex_leaderboard_nickname"))||"";if(n&&!_e(n))return n.trim();let e=null;try{e=JSON.parse(localStorage.getItem("planex_user_profile")||localStorage.getItem("planex_profile")||"null")}catch{}if(e!=null&&e.nickname&&!_e(e.nickname))return e.nickname.trim();if(e!=null&&e.name&&!_e(e.name))return e.name.trim();let t=null;try{t=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}return t!=null&&t.full_name&&!_e(t.full_name)?t.full_name.trim():t!=null&&t.name&&!_e(t.name)?t.name.trim():t!=null&&t.first_name&&!_e(t.first_name)?t.first_name.trim():""}function eo(){try{let n=null;try{n=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}let e=null;try{e=JSON.parse(localStorage.getItem("planex_user_profile")||"null")}catch{}const o=localStorage.getItem("planex_user_avatar")||""||(e==null?void 0:e.avatar)||(e==null?void 0:e.avatar_url)||(e==null?void 0:e.photo)||(e==null?void 0:e.photoUrl)||(n==null?void 0:n.avatar_url)||(n==null?void 0:n.photo_url)||"",i=Zt(),a=!!(i||o||n&&(n.id||n.telegram_id||n.phone||n.phone_number)),r=i||(a?"کاربر":"ورود"),d=document.getElementById("btn-header-user-account");if(d){const s=d.querySelector("span:last-child");s&&s.textContent!==r&&(s.textContent=r);const l=d.querySelector("img");if(o)if(l)l.src!==o&&(l.src=o);else{const c=d.querySelector("span:first-child");if(c&&c.textContent.includes("👤")){const f=document.createElement("img");f.src=o,f.style.cssText="width: 22px; height: 22px; border-radius: 50%; object-fit: cover; aspect-ratio: 1 / 1; border: 1px solid rgba(16, 185, 129, 0.5);",f.onerror=function(){this.onerror=null,this.src="https://api.dicebear.com/7.x/avataaars/svg?seed=planex"},c.replaceWith(f)}}d.style.borderColor=a?"rgba(16, 185, 129, 0.4)":"rgba(255, 255, 255, 0.08)",d.style.color=a?"#34d399":"#a1a1aa"}}catch(n){console.warn("[Header] updateHeaderDOM error:",n)}}typeof window<"u"&&(window.updateHeaderDOM=eo);if(typeof window<"u"&&!window._headerProfileListenerAttached){window._headerProfileListenerAttached=!0;const n=()=>{eo(),typeof window.renderApp=="function"&&window.renderApp()};window.addEventListener("profileUpdated",n),window.addEventListener("auth-changed",n),window.addEventListener("storage",e=>{(e.key==="planex_user_avatar"||e.key==="planex_user_profile"||e.key==="planex_auth_user"||e.key==="planex_user_nickname")&&n()})}function gn(n=null){let e=null;try{e=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}let t=null;try{t=JSON.parse(localStorage.getItem("planex_user_profile")||localStorage.getItem("planex_profile")||"null")}catch{}const i=localStorage.getItem("planex_user_avatar")||""||(t==null?void 0:t.avatar)||(t==null?void 0:t.avatar_url)||(t==null?void 0:t.photo)||(t==null?void 0:t.photoUrl)||(e==null?void 0:e.avatar_url)||(e==null?void 0:e.photo_url)||"",a=Zt(),r=!!(a||i||e&&(e.id||e.telegram_id||e.email||e.phone||e.phone_number)),d=a||(r?"کاربر":"ورود");return`<header class="app-header" style=" min-height: 44px; display: flex; align-items: center; justify-content: space-between; overflow: hidden; width: 100%; box-sizing: border-box; gap: 8px;">
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
          ${i?`
            <img src="${i}" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover; aspect-ratio: 1 / 1; border: 1px solid rgba(16, 185, 129, 0.5);" onerror="this.onerror=null; this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=planex';" />
          `:`
            <span style="font-size: 0.85rem; width: 22px; height: 22px; display: inline-flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.06); border-radius: 50%;">👤</span>
          `}
          <span style="font-size: 0.74rem; font-weight: 700; max-width: 75px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${d}</span>
        </button>
      </div>
    </header>
  `}function fn(n=0){const e=n===5||n==="5"||n==="leaderboard"||n==="competition",t=[{id:0,title:"داشبورد",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>'},{id:1,title:"برنامه‌ریزی",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>'},{id:2,title:"روتین‌ها",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'},{id:"leaderboard",title:"رقابت 🏆",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2.34c0-.52-.2-1.02-.57-1.39A6.98 6.98 0 0 1 4 9V4h16v5a6.98 6.98 0 0 1-1.43 4.27c-.37.37-.57.87-.57 1.39V17c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2v7"/></svg>'},{id:3,title:"ابزارها",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>'},{id:4,title:"مقالات",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>'}],o=t.slice(0,3),i=t.slice(3),a=r=>`
      <div class="nav-item ${(r.id==="leaderboard"||r.id==="competition")&&e||r.id===n||String(r.id)===String(n)?"active":""}" data-tab="${r.id}">
        ${r.icon}
        <span>${r.title}</span>
      </div>
    `;return`
    <nav class="bottom-nav">
      ${o.map(a).join("")}
      
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

      ${i.map(a).join("")}
    </nav>
  `}function kt(n,e={},t=3e3){const o=new AbortController,i=setTimeout(()=>o.abort(),t);return fetch(n,{...e,signal:o.signal}).finally(()=>clearTimeout(i))}const yn={isSessionActive:!1,realServerCount:0,getUserId(){try{const e=localStorage.getItem("planex_user_account");if(e){const t=JSON.parse(e);if(t&&(t.id||t.username))return String(t.id||t.username)}}catch{}let n=localStorage.getItem("planex_pomodoro_device_id");return n||(n="pomo_"+Math.random().toString(36).substring(2,11)+"_"+Date.now().toString(36),localStorage.setItem("planex_pomodoro_device_id",n)),n},getNaturalTimeOfDayBaseline(){let n=new Date().getHours(),e=new Date().getMinutes();try{const a=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Tehran",hour:"numeric",hour12:!1}).format(new Date),r=parseInt(a,10);isNaN(r)||(n=r);const d=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Tehran",minute:"numeric"}).format(new Date),s=parseInt(d,10);isNaN(s)||(e=s)}catch{}let t=25;const o=e/60;if(n>=6&&n<9){const a=(n-6+o)/3;return t=Math.round(15+a*10),Math.min(25,Math.max(15,t))}if(n>=9&&n<17){const a=[27,32,36,38,32,28,34,38],r=n-9,d=a[r]||30,s=r+1<a.length?a[r+1]:38;return t=Math.round(d+(s-d)*o),Math.min(40,Math.max(25,t))}if(n>=17&&n<23){const a=[40,47,53,52,46,38],r=n-17,d=a[r]||45,s=r+1<a.length?a[r+1]:36;return t=Math.round(d+(s-d)*o),Math.min(55,Math.max(35,t))}return t={23:11,0:9,1:7,2:6,3:5,4:7,5:10}[n]||7,Math.min(12,Math.max(5,t))},getDisplayActiveUsers(){const n=this.getNaturalTimeOfDayBaseline(),e=this.isSessionActive?1:0,t=Math.max(e,parseInt(this.realServerCount)||0);return n+t},async startSession(n=25,e=!0){if(!e)return this.isSessionActive=!1,{success:!0,count:this.getDisplayActiveUsers()};this.isSessionActive=!0;const t=this.getUserId();try{const o=await kt(`${ce}/api/pomodoro/active.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"start",userId:t,durationMinutes:parseInt(n)||25})}),i=await o.text();let a=null;try{a=i?JSON.parse(i):null}catch{a=null}if(o.ok&&a){const r=parseInt(a.count??a.activeUsersCount)||1;return this.realServerCount=Math.max(1,r),{success:!0,count:this.getDisplayActiveUsers()}}}catch(o){console.warn("[PomodoroService] Server communication error on start:",o)}return this.realServerCount=Math.max(1,this.realServerCount||1),{success:!0,count:this.getDisplayActiveUsers()}},async stopSession(){this.isSessionActive=!1;const n=this.getUserId();try{const e=await kt(`${ce}/api/pomodoro/active.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"stop",userId:n})}),t=await e.text();let o=null;try{o=t?JSON.parse(t):null}catch{o=null}if(e.ok&&o){const i=parseInt(o.count??o.activeUsersCount)||0;return this.realServerCount=Math.max(0,i),{success:!0,count:this.getDisplayActiveUsers()}}}catch(e){console.warn("[PomodoroService] Server communication error on stop:",e)}return this.realServerCount=0,{success:!0,count:this.getDisplayActiveUsers()}},async fetchActiveCount(){try{const n=await kt(`${ce}/api/pomodoro/active.php`),e=await n.text();let t=null;try{t=e?JSON.parse(e):null}catch{t=null}if(n.ok&&t){const o=parseInt(t.count??t.activeUsersCount)||0;return this.realServerCount=o,{success:!0,count:this.getDisplayActiveUsers()}}}catch(n){console.warn("[PomodoroService] Server communication error on fetch count:",n)}return{success:!1,count:this.getDisplayActiveUsers()}}};typeof window<"u"&&(window.isUserActivelyTyping=!1,typeof document<"u"&&(document.addEventListener("focusin",n=>{const e=n.target;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.hasAttribute&&e.hasAttribute("contenteditable")||e.isContentEditable)&&(window.isUserActivelyTyping=!0)}),document.addEventListener("focusout",n=>{const e=n.target;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.hasAttribute&&e.hasAttribute("contenteditable")||e.isContentEditable)&&(window.isUserActivelyTyping=!1)})));function Pt(n){if(!n)return"";let e=String(n).trim();return e=e.replace(/[۰-۹]/g,t=>"۰۱۲۳۴۵۶۷۸۹".indexOf(t)),e=e.replace(/[٠-٩]/g,t=>"٠١٢٣٤٥٦٧٨٩".indexOf(t)),e=e.replace(/[^0-9]/g,""),e.startsWith("00989")?e="0"+e.slice(4):e.startsWith("0989")?e="0"+e.slice(3):e.startsWith("989")?e="0"+e.slice(2):e.startsWith("9")&&e.length===10&&(e="0"+e),e}function Ot(n,e={},t=3e3){const o=new AbortController,i=setTimeout(()=>o.abort(),t);return fetch(n,{...e,signal:o.signal}).finally(()=>clearTimeout(i))}const ie={getOrCreateSyncToken(){return p.getOrCreatePersonalSyncToken()},setSyncToken(n){return p.setPersonalSyncToken(n)},getSyncStatus(){return p.getPersonalSyncInfo()},getAllLocalData(){return this.exportLocalState()},exportLocalState(){let n={};try{const e=p.exportAllDataJSON();n=JSON.parse(e)}catch(e){console.warn("[PersonalSync] db.exportAllDataJSON failed, using fallback:",e);for(let t=0;t<localStorage.length;t++){const o=localStorage.key(t);if(o&&(o.startsWith("planex_")||o.startsWith("theme_")||o.startsWith("app_")||o.startsWith("timer_")))try{n[o]=JSON.parse(localStorage.getItem(o))}catch{n[o]=localStorage.getItem(o)}}}try{const e=localStorage.getItem("planex_daily_plans")||localStorage.getItem("planex_eisenhower")||localStorage.getItem("daily_plans")||"{}",t=JSON.parse(e);n.planex_daily_plans=t,n.planex_eisenhower=t,n.daily_plans=t;const o=localStorage.getItem("planex_weekly_goals")||localStorage.getItem("weekly_goals")||"{}",i=JSON.parse(o);n.planex_weekly_goals=i,n.weekly_goals=i}catch{}return n},importLocalState(n,e=!1){if(!n)return!1;try{return p.importAllDataJSON(n,e)}catch(t){return console.error("[PersonalSync] Import failed:",t),!1}},_isPushingNow:!1,_hasPendingPush:!1,async pushToCloud(n=null,e=null,t=null){if(this._isPushingNow)return this._hasPendingPush=!0,{success:!1,message:"Push already in progress"};this._isPushingNow=!0;try{let o=null;try{o=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}const i=p&&typeof p.getUserProfile=="function"?p.getUserProfile():{},a=Pt(n||(o==null?void 0:o.phone)||(o==null?void 0:o.phone_number)||i.phone||""),r=(o==null?void 0:o.password)||"",d=Date.now();try{localStorage.setItem("planex_last_modified",String(d))}catch{}const s=this.exportLocalState();if(s&&typeof s=="object"&&(s.planex_last_modified=d),!a)return{success:!1,message:"شماره تلفن کاربر یافت نشد."};let l=[];try{l=JSON.parse(localStorage.getItem("planex_my_groups")||"[]")}catch{l=[]}let c=[];try{const g=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),b=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),v=new Map;[...g,...b].forEach(A=>{if(!A||typeof A!="object")return;const k=A.id||`${A.date||A.dateStr}_${A.startTime||A.timestamp||A.subject}_${A.duration||A.minutes}`;v.set(k,A)}),c=Array.from(v.values())}catch{c=[]}if(e)try{localStorage.setItem("planex_user_nickname",e),localStorage.setItem("planex_leaderboard_nickname",e)}catch{}if(t)try{localStorage.setItem("planex_user_avatar",t)}catch{}const f=typeof localStorage<"u"&&(localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_leaderboard_nickname"))||"",m=e||f||i.name||i.nickname||(o==null?void 0:o.full_name)||(o==null?void 0:o.name)||"کاربر پلنکس",y=typeof localStorage<"u"&&localStorage.getItem("planex_user_avatar")||"",w=t||y||i.avatar||i.avatar_url||i.photo||(o==null?void 0:o.avatar_url)||(o==null?void 0:o.avatar)||(o==null?void 0:o.photo_url)||"";if(s&&typeof s=="object"){if(s.planex_user_nickname=m,s.planex_nickname=m,s.planex_leaderboard_nickname=m,s.planex_user_avatar=w,delete s["planex_user_profile.name"],delete s["planex_user_profile.nickname"],delete s["planex_user_profile.avatar"],s.planex_user_profile||(s.planex_user_profile=i),s.planex_user_profile&&typeof s.planex_user_profile=="object"&&(s.planex_user_profile.name=m,s.planex_user_profile.nickname=m,s.planex_user_profile.avatar=w,s.planex_user_profile.avatar_url=w),s.planex_auth_user)try{let g=typeof s.planex_auth_user=="string"?JSON.parse(s.planex_auth_user):s.planex_auth_user;g.name=m,g.full_name=m,g.nickname=m,g.avatar_url=w,g.avatar=w,s.planex_auth_user=typeof s.planex_auth_user=="string"?JSON.stringify(g):g}catch{}if(s.planex_user_account)try{let g=typeof s.planex_user_account=="string"?JSON.parse(s.planex_user_account):s.planex_user_account;g.name=m,g.full_name=m,g.nickname=m,g.avatar_url=w,g.avatar=w,s.planex_user_account=typeof s.planex_user_account=="string"?JSON.stringify(g):g}catch{}}const u={phone:a,password:r,study_logs:c,rooms:l,daily_plans:s.planex_daily_plans,weekly_goals:s.planex_weekly_goals,planex_daily_plans:s.planex_daily_plans,planex_weekly_goals:s.planex_weekly_goals,planex_eisenhower:s.planex_eisenhower||s.planex_daily_plans,backupData:s,appState:s,name:m,nickname:m,planex_user_nickname:m,avatar:w,avatar_url:w,photo_url:w,planex_user_avatar:w,updatedAt:Date.now()};try{const g=await Ot(`${ce}/api/sync.php?_t=${Date.now()}`,{method:"POST",cache:"no-store",headers:{"Content-Type":"application/json","Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"},body:JSON.stringify({action:"save",...u})},3e3),b=await g.text();let v=null;try{v=b?JSON.parse(b):null}catch{}if(g.ok&&v&&v.success){try{localStorage.setItem("planex_last_synced_at",String(u.updatedAt)),this._hasPendingPush||localStorage.setItem("planex_has_unsynced_changes","false")}catch{}return p.markPersonalSyncSuccess(),p&&(p._breakdownMemoMap={}),typeof window<"u"&&typeof window.updateHeaderDOM=="function"&&window.updateHeaderDOM(),{success:!0,phone:a,updatedAt:u.updatedAt,message:"☁️ اطلاعات و اتاق‌های مطالعه شما با موفقیت با شماره موبایل همگام‌سازی شد."}}else return{success:!1,message:(v==null?void 0:v.message)||`خطا در همگام‌سازی ابری (HTTP ${g.status})`}}catch(g){return console.warn("[Sync Push] Background push deferred:",g.message),{success:!1,message:"خطا در ارتباط با سرور: "+g.message}}}finally{this._isPushingNow=!1,this._hasPendingPush&&(this._hasPendingPush=!1,setTimeout(()=>this.pushToCloud(),50))}},_isPullingNow:!1,async pullFromCloud(n=null){var e,t,o,i,a,r,d,s,l,c,f,m,y,w,u,g;if(this._isPullingNow)return{success:!1,message:"Pull already in progress"};if(this._isPushingNow||this._hasPendingPush)return{success:!1,message:"همگام‌سازی ابری به تعویق افتاد: تغییرات محلی در حال ذخیره‌سازی ابری هستند."};this._isPullingNow=!0;try{if(typeof document<"u"){const k=document.activeElement;if(k&&(k.tagName==="INPUT"||k.tagName==="TEXTAREA"||k.isContentEditable))return console.log("Sync aborted: User is typing"),{success:!1,message:"همگام‌سازی موقتاً متوقف شد زیرا در حال تایپ هستید."}}let b=null;try{b=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}const v=p&&typeof p.getUserProfile=="function"?p.getUserProfile():{},A=Pt(n||(b==null?void 0:b.phone)||(b==null?void 0:b.phone_number)||v.phone||"");if(!A)return{success:!1,message:"شماره موبایل مشخص نیست."};try{const k=await Ot(`${ce}/api/sync.php?action=get&phone=${encodeURIComponent(A)}&_t=${Date.now()}`,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"}},3e3),T=await k.text();let x=null;try{x=T?JSON.parse(T):null}catch{}if(x&&typeof x.backupData=="string")try{x.backupData=JSON.parse(x.backupData)}catch{}if(k.ok&&x&&x.success){const M=((e=x.user)==null?void 0:e.name)||x.name||((t=x.backupData)==null?void 0:t.planex_user_nickname)||(typeof((o=x.backupData)==null?void 0:o.planex_user_profile)=="object"?(i=x.backupData.planex_user_profile)==null?void 0:i.name:null)||(typeof((a=x.backupData)==null?void 0:a.planex_user_profile)=="object"?(r=x.backupData.planex_user_profile)==null?void 0:r.nickname:null)||null,P=((d=x.user)==null?void 0:d.avatar_url)||((s=x.user)==null?void 0:s.avatar)||((l=x.user)==null?void 0:l.photo_url)||x.avatar_url||x.avatar||((c=x.backupData)==null?void 0:c.planex_user_avatar)||(typeof((f=x.backupData)==null?void 0:f.planex_user_profile)=="object"?(m=x.backupData.planex_user_profile)==null?void 0:m.avatar:null)||(typeof((y=x.backupData)==null?void 0:y.planex_user_profile)=="object"?(w=x.backupData.planex_user_profile)==null?void 0:w.avatar_url:null)||null,C=typeof localStorage<"u"&&localStorage.getItem("planex_user_avatar")||"",I=P&&!P.includes("dicebear.com")?P:P||C;let R=!1;if(x.backupData&&typeof x.backupData=="object"){const E=Y=>{if(Y&&Y.early_bird_daily_status)try{const Q=typeof Y.early_bird_daily_status=="string"?JSON.parse(Y.early_bird_daily_status):Y.early_bird_daily_status,Z=window.leaderboardService&&window.leaderboardService.getTodayDateStr?window.leaderboardService.getTodayDateStr():new Date().toLocaleDateString("fa-IR");Q.date!==Z&&(delete Y.early_bird_daily_status,typeof window<"u"&&(window._forceEbWipe=!0))}catch{delete Y.early_bird_daily_status,typeof window<"u"&&(window._forceEbWipe=!0)}};E(x.backupData),x.appState&&typeof x.appState=="object"&&E(x.appState),M&&!_e(M)&&(x.backupData.planex_user_nickname=M,x.backupData.planex_user_profile||(x.backupData.planex_user_profile={}),x.backupData.planex_user_profile.name=M,x.backupData.planex_user_profile.nickname=M),I&&(x.backupData.planex_user_avatar=I,x.backupData.planex_user_profile||(x.backupData.planex_user_profile={}),x.backupData.planex_user_profile.avatar=I,x.backupData.planex_user_profile.avatar_url=I);const j=Y=>{if(!Y||typeof Y!="object")return Y;const Q=JSON.parse(JSON.stringify(Y)),Z=["updatedAt","updated_at","last_sync","lastSync","timestamp","early_bird_daily_status","planex_routines_updated_at"],N=q=>{if(Array.isArray(q))q.forEach(W=>N(W));else if(q&&typeof q=="object"){for(const W of Z)W in q&&delete q[W];for(const W in q)if(Object.prototype.hasOwnProperty.call(q,W))if(typeof q[W]=="string"&&(q[W].startsWith("{")||q[W].startsWith("[")))try{const ue=JSON.parse(q[W]);N(ue),q[W]=JSON.stringify(ue)}catch{}else N(q[W])}};return N(Q),Q},J=localStorage.getItem("planex_has_unsynced_changes")==="true",G=Number(localStorage.getItem("planex_last_modified")||0),L=Number(x.updatedAt||((u=x.backupData)==null?void 0:u.planex_last_modified)||((g=x.backupData)==null?void 0:g.updatedAt)||0);if(x.daily_plans&&!x.backupData.planex_daily_plans&&(x.backupData.planex_daily_plans=x.daily_plans),x.weekly_goals&&!x.backupData.planex_weekly_goals&&(x.backupData.planex_weekly_goals=x.weekly_goals),x.planex_daily_plans&&!x.backupData.planex_daily_plans&&(x.backupData.planex_daily_plans=x.planex_daily_plans),x.planex_weekly_goals&&!x.backupData.planex_weekly_goals&&(x.backupData.planex_weekly_goals=x.planex_weekly_goals),x.planex_eisenhower&&!x.backupData.planex_daily_plans&&(x.backupData.planex_daily_plans=x.planex_eisenhower),J||G>L&&L>0||G>0&&L===0)return console.log(`[PersonalSync] Protecting local data (hasUnsyncedChanges=${J}, localModified=${G}, serverModified=${L}). Pushing local state to cloud...`),this._isPullingNow=!1,await this.pushToCloud(A),{success:!0,phone:A,pushed:!0,message:"☁️ تغییرات جدید این دستگاه در فضای ابری ذخیره شدند."};const F=L>G&&!J;if(F&&(R=!0,this.importLocalState(x.backupData,F),L>0))try{localStorage.setItem("planex_last_modified",String(L))}catch{}}if(M&&!_e(M))try{localStorage.getItem("planex_user_nickname")!==M&&(R=!0),localStorage.setItem("planex_user_nickname",M),localStorage.setItem("planex_leaderboard_nickname",M),localStorage.setItem("planex_nickname",M);let j=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}");j.name=M,j.full_name=M,j.nickname=M,localStorage.setItem("planex_auth_user",JSON.stringify(j)),localStorage.setItem("planex_user_account",JSON.stringify(j));let J=p&&typeof p.getUserProfile=="function"?p.getUserProfile()||{}:{};J.name=M,J.nickname=M,p&&typeof p.setUserProfile=="function"&&p.setUserProfile(J)}catch(E){console.warn("[PersonalSync] Error updating pulled name:",E)}if(I)try{localStorage.getItem("planex_user_avatar")!==I&&(R=!0),localStorage.setItem("planex_user_avatar",I);let j=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}");j.avatar_url=I,j.photo_url=I,j.avatar=I,localStorage.setItem("planex_auth_user",JSON.stringify(j)),localStorage.setItem("planex_user_account",JSON.stringify(j));let J=p&&typeof p.getUserProfile=="function"?p.getUserProfile()||{}:{};J.avatar=I,J.avatar_url=I,J.photo=I,J.photoUrl=I,p&&typeof p.setUserProfile=="function"&&p.setUserProfile(J)}catch(E){console.warn("[PersonalSync] Error updating pulled avatar:",E)}if(Array.isArray(x.rooms)&&x.rooms.length>0){const E=localStorage.getItem("planex_my_groups")||"[]",j=JSON.stringify(x.rooms);E!==j&&(R=!0,localStorage.setItem("planex_my_groups",j),localStorage.setItem("planex_my_rooms",j),p&&typeof p.setUserGroups=="function"&&p.setUserGroups(x.rooms))}if(Array.isArray(x.study_logs)&&x.study_logs.length>0){const E=localStorage.getItem("planex_study_logs")||"[]",j=JSON.stringify(x.study_logs);E!==j&&(R=!0,p&&typeof p.saveStudyLogs=="function"?p.saveStudyLogs(x.study_logs):(localStorage.setItem("planex_study_logs",j),localStorage.setItem("planex_recent_activity_sessions",j)))}if(p&&R&&(p._breakdownMemoMap={}),p.markPersonalSyncSuccess(),typeof window<"u"){typeof window.updateHeaderDOM=="function"&&window.updateHeaderDOM();const E=M||localStorage.getItem("planex_user_nickname")||"",j=I||localStorage.getItem("planex_user_avatar")||"";if(E){document.querySelectorAll("#btn-header-user-account span:last-child, .user-nickname-display, #profile-display-name-val, .profile-name-text").forEach(G=>{G.tagName==="INPUT"?document.activeElement!==G&&G.value!==E&&(G.value=E):document.activeElement!==G&&G.innerText!==E&&(G.innerText=E)});const J=document.getElementById("profile-display-name");J&&document.activeElement!==J&&J.value!==E&&(J.value=E)}if(j){const J=j.includes("?")?`&t=${Date.now()}`:`?t=${Date.now()}`,G=j.startsWith("http")?`${j}${J}`:j;document.querySelectorAll("#btn-header-user-account img, #main-header-avatar, #main-avatar-preview, .user-avatar-img").forEach(L=>{L&&L.tagName==="IMG"&&L.src!==G&&(L.src=G)})}R&&(window.dashboardChartInstances&&(window.dashboardChartInstances=null),typeof window.updateCharts=="function"&&window.updateCharts(),["renderRoutines","updateLeitnerUI","renderDashboard"].forEach(J=>{try{typeof window[J]=="function"&&window[J]()}catch{}}),typeof window.renderApp=="function"&&window.renderApp()),typeof window<"u"&&window._forceEbWipe&&(window._forceEbWipe=!1,setTimeout(()=>{typeof ie<"u"&&typeof ie.pushToCloud=="function"&&ie.pushToCloud()},500))}return{success:!0,phone:A,data:x,message:"🎉 تمام اطلاعات، سوابق و اتاق‌های مطالعه با موفقیت بازیابی شدند!"}}else return{success:!1,message:(x==null?void 0:x.message)||"اطلاعاتی برای این شماره در سرور یافت نشد."}}catch(k){return console.warn("[Sync Pull] Background pull deferred:",k.message),{success:!1,message:"خطا در بازیابی اطلاعات: "+k.message}}}finally{this._isPullingNow=!1}}};let nt=null,_t=!1;function Ze(){if(typeof document>"u")return;const n=document.getElementById("cloud-sync-status-indicator");if(!n)return;const e=(typeof window<"u"?window.cloudSyncState:null)||"idle";let t="",o="همگام‌سازی خودکار ابری";e==="syncing"?(t=`
      <svg class="spin-sync" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
      </svg>
    `,o="در حال همگام‌سازی خودکار با فضای ابری..."):e==="synced"?(t=`
      <span style="font-size: 0.82rem; position: relative; display: inline-flex; align-items: center; justify-content: center;">
        ☁️<span style="position: absolute; bottom: -1px; right: -2px; width: 6px; height: 6px; background: #10b981; border-radius: 50%; box-shadow: 0 0 4px #10b981;"></span>
      </span>
    `,o="همگام‌سازی خودکار: اطلاعات در فضای ابری ذخیره شدند ✅"):e==="offline"?(t=`
      <span style="font-size: 0.82rem; opacity: 0.5;">☁️</span>
    `,o="آفلاین — ذخیره در دستگاه انجام شد؛ همگام‌سازی پس از اتصال اینترنت فعال می‌شود"):(t='<span style="font-size: 0.82rem;">☁️</span>',o="همگام‌سازی ابری — کلیک برای همگام‌سازی آنی"),n.innerHTML=t,n.title=o}async function Mo(n=!1){if(typeof window>"u"||!n)return;window.cloudSyncState="syncing",Ze();const e=async()=>{if(!_t){_t=!0;try{if(window.navigator&&!window.navigator.onLine){window.cloudSyncState="offline",Ze();return}typeof ie<"u"&&typeof ie.pushToCloud=="function"&&await ie.pushToCloud();const t=window.leaderboardService;t&&typeof t.syncUserScore=="function"&&await t.syncUserScore(!0).catch(o=>console.warn("[AutoSync] Squad score sync deferred:",o)),window.cloudSyncState="synced",Ze(),window.dispatchEvent(new CustomEvent("cloud-sync-complete",{detail:{timestamp:Date.now()}})),setTimeout(()=>{window.cloudSyncState==="synced"&&(window.cloudSyncState="idle",Ze())},3500)}catch(t){console.warn("[AutoSync] Background sync deferred:",t),window.cloudSyncState="error",Ze()}finally{_t=!1}}};n?(nt&&clearTimeout(nt),e().catch(t=>console.warn("[AutoSync] Error:",t))):(nt&&clearTimeout(nt),nt=setTimeout(()=>{e().catch(t=>console.warn("[AutoSync] Debounced error:",t))},500))}let Rt=0,$t=null,Tt=null;function Xe(n=!1){if(ie._isPushingNow||ie._hasPendingPush)return;if(typeof localStorage<"u"&&localStorage.getItem("planex_has_unsynced_changes")==="true"){typeof ie<"u"&&typeof ie.pushToCloud=="function"&&ie.pushToCloud().catch(o=>{console.warn("[SmartSync] Focus-driven push deferred:",o)});return}if(typeof document<"u"){const o=document.activeElement;if(o&&(o.tagName==="INPUT"||o.tagName==="TEXTAREA"||o.isContentEditable)){console.log("Sync aborted: User is typing");return}}if(typeof document<"u"&&(document.visibilityState!=="visible"||typeof window<"u"&&window.appState&&window.appState.activeModal==="editProfile"))return;const t=Date.now();!n&&t-Rt<2e3||(Rt=t,typeof ie<"u"&&typeof ie.pullFromCloud=="function"&&ie.pullFromCloud().catch(o=>{console.warn("[SmartSync] Focus-driven pull deferred:",o)}))}function Bt(){typeof window>"u"||($t&&clearInterval($t),$t=setInterval(()=>{if(ie._isPushingNow||ie._hasPendingPush)return;if(typeof localStorage<"u"&&localStorage.getItem("planex_has_unsynced_changes")==="true"){typeof ie<"u"&&typeof ie.pushToCloud=="function"&&ie.pushToCloud().catch(e=>{console.warn("[SmartSync] Interval-driven push deferred:",e)});return}if(typeof document<"u"){const e=document.activeElement;if(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.isContentEditable)){console.log("Sync aborted: User is typing");return}}window.navigator&&!window.navigator.onLine||typeof window<"u"&&window.appState&&window.appState.activeModal==="editProfile"||typeof ie<"u"&&typeof ie.pullFromCloud=="function"&&ie.pullFromCloud().catch(e=>{console.warn("[SmartSync] Interval-driven pull deferred:",e)})},6e4))}function At(n=150){if(!(typeof window>"u")){if(Tt&&clearTimeout(Tt),n<=0){if(window.navigator&&!window.navigator.onLine)return;typeof ie<"u"&&typeof ie.pushToCloud=="function"&&ie.pushToCloud().catch(e=>{console.warn("[SmartSync] Action-driven immediate push deferred:",e)});return}Tt=setTimeout(()=>{window.navigator&&!window.navigator.onLine||typeof ie<"u"&&typeof ie.pushToCloud=="function"&&ie.pushToCloud().catch(e=>{console.warn("[SmartSync] Action-driven push deferred:",e)})},n)}}typeof window<"u"&&(document.readyState==="complete"||document.readyState==="interactive"?setTimeout(()=>Xe(!0),1e3):window.addEventListener("load",()=>setTimeout(()=>Xe(!0),1e3)),window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Xe(!0)}),window.addEventListener("focus",()=>Xe(!0)),window.addEventListener("online",()=>Xe(!0)),Bt(),["activity-saved","study-logs-updated","sessions-updated","pomodoro-completed","profileUpdated","auth-changed","rooms-updated","groups-updated","room-created","room-joined","room-modified","routines-updated","routine-deleted","habits-updated","targets-updated","countdown-updated","weekly-goals-updated","daily-plans-updated"].forEach(e=>{window.addEventListener(e,t=>{var i;const o=e==="routine-deleted"||e==="targets-updated"||e==="countdown-updated"||(i=t==null?void 0:t.detail)!=null&&i.immediate?0:150;At(o)})}),window.addEventListener("storage",e=>{e.key&&(e.key==="planex_user_nickname"||e.key==="planex_user_avatar"||e.key==="planex_my_groups"||e.key==="planex_my_rooms"||e.key==="planex_study_logs"||e.key==="planex_recent_activity_sessions"||e.key==="planex_habits"||e.key==="planex_routines"||e.key==="planex_deleted_habit_ids"||e.key==="planex_study_targets"||e.key==="planex_countdown_events"||e.key==="planex_weekly_goals"||e.key==="planex_daily_plans"||e.key==="planex_routine_checklist"||e.key==="planex_last_modified")&&At(200)}),window.personalSyncService=ie,window.triggerAutoSync=Mo,window.updateCloudSyncIndicatorUI=Ze,window.handleFocusDrivenSync=Xe,window.startSmartSyncInterval=Bt,window.triggerActionDrivenPush=At);typeof window<"u"&&(window.isEarlyBirdSubmitting=!1);function pt(n,e=!0,t=""){if(typeof document>"u")return;const o=document.createElement("div"),i=e?"#10b981":"#ef4444";o.style.cssText=`position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%); background: ${i}; color: white; padding: 12px 22px; border-radius: 14px; font-weight: 900; font-size: 0.9rem; line-height: 1.7; z-index: 9999; box-shadow: 0 6px 20px rgba(0,0,0,0.4); max-width: 92vw; text-align: center; direction: rtl;`,o.innerHTML=`${n}${t?`<br><span style="font-size: 0.72rem; opacity: 0.9; font-weight: normal;">${String(t).replace(/</g,"&lt;")}</span>`:""}`,document.body.appendChild(o),setTimeout(()=>o.remove(),e?3500:8e3)}if(typeof window<"u")try{const n=localStorage.getItem("early_bird_daily_status");if(n){const e=JSON.parse(n),t=window.leaderboardService?window.leaderboardService.getTodayDateStr():new Date().toLocaleDateString("fa-IR");e.date!==t&&(localStorage.removeItem("early_bird_daily_status"),ie&&typeof ie.pushToCloud=="function"&&ie.pushToCloud())}}catch{}typeof window<"u"&&(window.handleEarlyBirdCheckIn=async()=>{if(!window.isEarlyBirdSubmitting){if(!_.isEarlyBirdWindowOpen()){pt("⏰ ثبت بیداری فقط از ساعت ۵ تا ۷ صبح امکان‌پذیر است.",!1);return}window.isEarlyBirdSubmitting=!0,window.renderApp&&window.renderApp();try{const n=await _.recordEarlyBird();if(n.success&&n.serverConfirmed){const e=n.rank?` — رتبه بیداری #${n.rank}`:"";pt(`☀️ ${n.message}${e}`,!0),Array.isArray(n.list)&&(window.lastEarlyBirdList=n.list);try{const t=_.getTodayDateStr(),o=_.getIranNowHHMM();localStorage.setItem("early_bird_daily_status",JSON.stringify({date:t,time:o}))}catch{}}else pt(`❌ ${n.message}`,!1,n.errorDetail||"")}catch(n){console.error("[EarlyBird] خطای غیرمنتظره:",n),pt("❌ خطای غیرمنتظره در ثبت سحرخیزی.",!1,n.message)}finally{window.isEarlyBirdSubmitting=!1,window.renderApp&&window.renderApp()}}});typeof window<"u"&&!window.toggleTopBannersAccordion&&(window.toggleTopBannersAccordion=()=>{const n=localStorage.getItem("planex_top_accordion_open")==="true";localStorage.setItem("planex_top_accordion_open",String(!n)),window.renderApp&&window.renderApp()});typeof window<"u"&&!window.toggleRecentSessionsAccordion&&(window.toggleRecentSessionsAccordion=()=>{const n=localStorage.getItem("planex_recent_sessions_open")==="true";localStorage.setItem("planex_recent_sessions_open",String(!n)),window.renderApp&&window.renderApp()});typeof window<"u"&&!window.toggleChartsAccordion&&(window.toggleChartsAccordion=()=>{const n=localStorage.getItem("planex_charts_accordion_open")!=="false";localStorage.setItem("planex_charts_accordion_open",String(!n)),window.renderApp&&window.renderApp()});typeof window<"u"&&!window.toggleWeeklyBreakdownAccordion&&(window.toggleWeeklyBreakdownAccordion=()=>{const n=localStorage.getItem("planex_weekly_breakdown_accordion_open")==="true";localStorage.setItem("planex_weekly_breakdown_accordion_open",String(!n)),window.renderApp&&window.renderApp()});const Pe=["شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه"];function Co(n){const e=Math.floor(n/2),t=n%2===0?"00":"30",o=Math.floor((n+1)/2),i=(n+1)%2===0?"00":"30",a=`${e.toString().padStart(2,"0")}:${t}`,r=`${o.toString().padStart(2,"0")}:${i}`;return`${a} - ${r}`}function Io(n=0,e="daily"){var t,o,i,a,r,d,s,l;try{const c=p.getCurrentWeek(),f=c?c.id:1,m=p.getHourlyLogs(f)||{},y=p.getCategories()||[],w={};y.forEach((O,V)=>{O&&O.code&&(w[O.code]={...O,color:O.color||Je[V%Je.length]})});const u=p.getStudyTargets()||{},g=p.getCountdownEvents()||[],b=g&&g.length>0?g[0]:null,v=p.getEarnedMedalBadge(),A=(typeof p.getRecentFocusSessions=="function"?p.getRecentFocusSessions(8):[]).filter(Boolean),[k,T,x]=p.getTodayJalali(),M=(new Date().getDay()+1)%7,P=O=>String(O).replace(/[0-9]/g,V=>"۰۱۲۳۴۵۶۷۸۹"[V]),C=((c==null?void 0:c.id)||"").split("_");let I=null;if(C.length===3){const O=parseInt(C[0]),V=parseInt(C[1]),re=parseInt(C[2]);if(!isNaN(O)&&!isNaN(V)&&!isNaN(re)){const be=p.jalaliToJdn(O,V,1),Ce=(be+2)%7;I=be-Ce+(re-1)*7}}I===null&&(I=p.getTodayJdn()-M);let R=0,E=0,j=0;const J={};for(let O=0;O<48;O++){const V=`${n}_${O}`,re=m[V],be=`${n}_${O}_multi`,Ce=m[be]||[],ve=new Set;re&&re.categoryCode&&ve.add(re.categoryCode),Ce.forEach(Ee=>ve.add(Ee)),ve.forEach(Ee=>{const Ie=w[Ee];Ie&&(J[Ie.code]=(J[Ie.code]||0)+1,Oe(Ie)?R++:(Ie.code==="تـ"||Ie.group==="تلف شده")&&E++)}),re&&re.testCount&&(j+=parseInt(re.testCount)||0)}const G=((o=(t=c==null?void 0:c.days)==null?void 0:t[n])==null?void 0:o.dateStr)||p._getWeekDayDateStr(n),L=p.getDailyStats(G)||{studyHours:0,studyMinutes:0,totalTests:0,sessionsCount:0};let F=p.getWeekDayMinutes(n),Y=+(F/60).toFixed(2),Q=p.getWeekDayTests(n);const Z=Number(u.dailyStudyGoalHours??u.dailyTargetHours??8),N=Z*60,q=Number(u.dailyTestGoalCount??150),W=N>0?Math.min(100,Math.round(F/N*100)):0,ue=q>0?Math.min(100,Math.round(Q/q*100)):0,me=Math.max(0,N-F),pe=+(me/60).toFixed(1),h=Math.max(0,q-Q);let D="";if(b){const O=p.getTodayJdn(),re=p.jalaliToJdn(parseInt(b.jy),parseInt(b.jm),parseInt(b.jd))-O,be=new Date;be.setDate(be.getDate()+re),be.setHours(8,0,0,0);const Ce=new Date,ve=be.getTime()-Ce.getTime();if(ve>0){const Ee=Math.floor(ve/864e5),Ie=Math.floor(ve%(1e3*60*60*24)/(1e3*60*60)),Ye=Math.floor(ve%(1e3*60*60)/(1e3*60)),Re=Be=>String(Be).replace(/[0-9]/g,je=>"۰۱۲۳۴۵۶۷۸۹"[je]);D=`🎯 ${Re(Ee)} روز و ${Re(Ie)} ساعت تا ${b.title}`}else if(ve>-864e5)D=`🎉 امروز روز برگزاری ${b.title} است!`;else{const Ee=Math.floor(Math.abs(ve)/864e5);D=`📌 ${(Ye=>String(Ye).replace(/[0-9]/g,Re=>"۰۱۲۳۴۵۶۷۸۹"[Re]))(Ee)} روز از ${b.title} گذشته است.`}}const B=[],H=[];let le=0,U=0;for(let O=0;O<7;O++){const V=p.getWeekDayMinutes(O),re=p.getWeekDayTests(O);B.push(V),H.push(re),le+=V,U+=re}const fe=Math.round(le/7),we=Math.round(U/7),ye=Math.max(1,M+1),Me=Math.round(le/ye),he=[];for(let O=0;O<7;O++){const V=(i=c==null?void 0:c.days)==null?void 0:i[O],re=(V==null?void 0:V.dateStr)||p._getWeekDayDateStr(O),be=V&&V.dayOfMonth&&V.monthName?`${Pe[O]} ${P(V.dayOfMonth)} ${V.monthName}`:Pe[O],Ce=p.getDayCategoryBreakdown(O),ve=Ce.reduce((Be,je)=>Be+je.minutes,0);let Ee="",Ie=0;const Ye=[];let Re=ve>0;Re&&Ce.forEach(Be=>{const je=Be.minutes/ve,po=je*163.36,uo=-Ie*163.36;Ie+=je,Ee+=`
          <circle cx="30" cy="30" r="26" fill="none" stroke="${Be.color}" stroke-width="8"
            stroke-dasharray="${po.toFixed(2)} 163.36"
            stroke-dashoffset="${uo.toFixed(2)}"
            transform="rotate(-90 30 30)" />
        `,Ye.push({title:Be.title,color:Be.color,minutes:Be.minutes})}),he.push({dayName:Pe[O],dayDateFull:be,isToday:V?!!V.isToday:O===M,studyMinutes:ve,arcs:Ee,legendItems:Ye,hasData:Re})}const Ae=typeof localStorage<"u"&&localStorage.getItem("planex_top_accordion_open")==="true",ze=typeof localStorage<"u"&&localStorage.getItem("planex_recent_sessions_open")==="true",oe=typeof localStorage<"u"?localStorage.getItem("planex_charts_accordion_open")!=="false":!0,ge=typeof localStorage<"u"?localStorage.getItem("planex_weekly_breakdown_accordion_open")==="true":!1,He=typeof window<"u"&&window.pomodoroService?window.pomodoroService.getDisplayActiveUsers():Math.max(1,parseInt((a=window.appState)==null?void 0:a.pomodoroActiveUsers)||1),We=!!((r=window.appState)!=null&&r.isPomodoroRunning||(d=window.appState)!=null&&d.isStopwatchRunning),z=We&&((s=window.appState)==null?void 0:s.focusTimerType)===2,ae=We&&((l=window.appState)==null?void 0:l.focusActivityMode)==="non-study"&&!z;let se="rgba(16, 185, 129, 0.1)",S="rgba(16, 185, 129, 0.25)",K="#10b981",X="#10b981",de=`🟢 ${P(He)} نفر هم‌اکنون در حال مطالعه در پومودورو هستند`;return z?(se="rgba(56, 189, 248, 0.1)",S="rgba(56, 189, 248, 0.25)",K="#38bdf8",X="#38bdf8",de=`☕ شما در حال استراحت ☕ | 🟢 ${P(He)} نفر در حال مطالعه`):ae&&(se="rgba(245, 158, 11, 0.1)",S="rgba(245, 158, 11, 0.25)",K="#f59e0b",X="#f59e0b",de=`🧘 شما در حال فعالیت غیردرسی 🧘 | 🟢 ${P(He)} نفر در حال مطالعه`),`
    <div class="dashboard-view animate-fade-in" style="direction: rtl;">
      
      <!-- ⚡ Collapsible Top Events & Leaderboard Accordion -->
      <div style="margin-bottom: 10px;">
        <button onclick="if(window.toggleTopBannersAccordion) window.toggleTopBannersAccordion();" 
                class="glass-panel" 
                style="width: 100%; padding: 7px 12px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; color: var(--text-secondary); transition: all 0.2s ease;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.78rem; font-weight: 700; color: #e4e4e7;">
            <span style="font-size: 0.85rem;">⚡</span>
            <span>رویدادها، سحرخیزان و تالار رقابت</span>
            ${b?`<span style="font-size: 0.68rem; background: #1f2029; color: #8e8e9c; border: 1px solid rgba(255,255,255,0.08); padding: 1px 6px; border-radius: 6px;">${D}</span>`:""}
          </div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 0.7rem; color: #8e8e9c;">
            <span>${Ae?"بستن":"مشاهده"}</span>
            <span style="font-size: 0.68rem; transform: ${Ae?"rotate(180deg)":"rotate(0deg)"}; transition: transform 0.2s ease;">▼</span>
          </div>
        </button>

        ${Ae?`
          <div style="margin-top: 8px; display: flex; flex-direction: column; gap: 8px; animation: fadeIn 0.2s ease;">
            <!-- Top Countdown Banner -->
            ${b?`
              <div class="glass-panel" style="padding: 10px 14px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="width: 30px; height: 30px; border-radius: 8px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 1rem;">
                    ⏳
                  </div>
                  <div>
                    <strong style="font-size: 0.86rem; font-weight: 700; color: #e4e4e7;">${D}</strong>
                    <div style="font-size: 0.7rem; color: #8e8e9c; margin-top: 1px;">تاریخ برگزاری: ${b.jy}/${b.jm}/${b.jd}</div>
                  </div>
                </div>
                <div style="background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08); padding: 3px 8px; border-radius: 8px; font-weight: 600; font-size: 0.72rem; font-family: 'Outfit';">
                  روزشمار کنکوری 🎯
                </div>
              </div>
            `:""}

            <!-- ☀️ باشگاه سحرخیزان -->
            ${(()=>{const O=_.isEarlyBirdWindowOpen(),V=_.getIranNowHHMM(),re=_.getTodayWakeTime(),be=typeof window<"u"&&!!window.isEarlyBirdSubmitting,Ce=je=>P(String(je||""));let ve="";const Ee=re?String(re).replace(/[۰-۹]/g,je=>"۰۱۲۳۴۵۶۷۸۹".indexOf(je)).replace(/[٠-٩]/g,je=>"٠١٢٣٤٥٦٧٨٩".indexOf(je)).trim():"",[Ie,Ye]=Ee?Ee.split(":").map(Number):[NaN,NaN],Re=!isNaN(Ie)&&!isNaN(Ye)?Ie*60+Ye:null,Be=Re!==null&&Re>=5*60&&Re<=7*60;return re&&Be?ve=`
                  <div style="display: flex; align-items: center; gap: 6px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); color: #10b981; padding: 5px 10px; border-radius: 8px; font-weight: 700; font-size: 0.74rem;">
                    <span>✅</span><span>ثبت شد (${Ce(re)})</span>
                  </div>`:O?ve=`
                  <button onclick="if(typeof window.handleEarlyBirdCheckIn === 'function') window.handleEarlyBirdCheckIn();" ${be?"disabled":""}
                    style="padding: 5px 12px; font-size: 0.76rem; font-weight: 700; color: #ffffff; background: #7c3aed; border: none; border-radius: 8px; cursor: ${be?"wait":"pointer"}; opacity: ${be?"0.65":"1"};">
                    ${be?"⏳ ثبت...":"من بیدارم! 🌅"}
                  </button>`:ve=`
                  <div style="display: flex; align-items: center; gap: 4px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); color: #8e8e9c; padding: 5px 10px; border-radius: 8px; font-weight: 600; font-size: 0.72rem;">
                    <span>🔒</span><span>بدون حاضری صبح</span>
                  </div>`,`
              <div class="glass-panel" style="padding: 10px 14px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 8px; flex: 1; min-width: 180px;">
                  <div style="width: 30px; height: 30px; border-radius: 8px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 1rem;">☀️</div>
                  <div>
                    <strong style="font-size: 0.86rem; font-weight: 700; color: #e4e4e7; display: block;">باشگاه سحرخیزان</strong>
                    <span style="font-size: 0.7rem; color: #8e8e9c;">
                      ساعت الان: <strong style="color: #e4e4e7; font-family: 'Outfit';">${Ce(V)}</strong>
                      ${O?' • <span style="color:#10b981;">بازه باز است</span>':""}
                    </span>
                  </div>
                </div>
                <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                  ${ve}
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
      ${xo()}

      <!-- 🎯 HERO FOCUS ACTION & ACTIVITY LAUNCHER CARD -->
      <div class="glass-panel" style="padding: 14px 16px; margin-bottom: 12px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 14px; box-shadow: none;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
          <div style="display: flex; align-items: center; gap: 6px; background: #1f2029; padding: 3px 10px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.08);">
            <span style="width: 6px; height: 6px; background: #7c3aed; border-radius: 50%; display: inline-block;"></span>
            <span style="font-weight: 700; font-size: 0.76rem; color: #e4e4e7;">مرکز ثبت فعالیت و تمرکز هوشمند</span>
          </div>
          <div style="display: flex; align-items: center; gap: 6px;">
            <span style="font-size: 0.72rem; color: #8e8e9c; font-weight: 600; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); padding: 2px 8px; border-radius: 8px; font-family: 'Outfit';">
              امروز: ${xe(F)} | ${P(Q)} تست
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
        ${Pe.map((O,V)=>`
          <button class="day-pill ${V===n?"active":""}" data-day="${V}" style="flex: 1; min-width: 65px; padding: 5px 8px; font-size: 0.74rem; font-weight: 600; text-align: center; border-radius: 8px;">
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
            ${xe(F)}
          </div>
          <div style="font-size: 0.65rem; color: #71717a;">
            هدف: ${Z} ساعت (${W}%)
          </div>
        </div>

        <!-- Card 2: Weekly Average Study -->
        <div class="glass-panel" style="padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 0.7rem; color: #8e8e9c; font-weight: 600;">میانگین روزانه هفته</span>
            <span style="font-size: 0.95rem;">📊</span>
          </div>
          <div style="font-size: 1rem; font-weight: 800; color: #e4e4e7; font-family: 'Outfit'; margin-bottom: 2px;">
            ${xe(Me)}
          </div>
          <div style="font-size: 0.65rem; color: #71717a;">
            مجموع: ${xe(le)}
          </div>
        </div>

        <!-- Card 3: Today Tests -->
        <div class="glass-panel" style="padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 0.7rem; color: #8e8e9c; font-weight: 600;">تست‌های امروز</span>
            <span style="font-size: 0.95rem;">🎯</span>
          </div>
          <div style="font-size: 1rem; font-weight: 800; color: #e4e4e7; font-family: 'Outfit'; margin-bottom: 2px;">
            ${P(Q)} تست
          </div>
          <div style="font-size: 0.65rem; color: #71717a;">
            هدف: ${q} (${ue}%)
          </div>
        </div>

        <!-- Card 4: Goal Progress -->
        <div class="glass-panel" style="padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 0.7rem; color: #8e8e9c; font-weight: 600;">تحقق هدف روزانه</span>
            <span style="font-size: 0.95rem;">🔥</span>
          </div>
          <div style="font-size: 1rem; font-weight: 800; color: #e4e4e7; font-family: 'Outfit'; margin-bottom: 2px;">
            ${W}%
          </div>
          <div style="font-size: 0.65rem; color: #71717a;">
            ${me<=0?"🎉 تکمیل شد":`${xe(me)} تا هدف`}
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
                <div style="font-size: 0.7rem; color: #8e8e9c;">هدف: ${Z} ساعت</div>
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
                  stroke-dashoffset="${282.7-282.7*W/100}"
                  stroke-linecap="round"
                  transform="rotate(-90 55 55)"
                  style="transition: stroke-dashoffset 0.5s ease;"/>
              </svg>
              <div class="progress-text" style="position: absolute; top:0; left:0; width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding: 2px;">
                <span style="font-size: 1.15rem; font-weight: 800; font-family: 'Outfit'; color: #fff;">${W}%</span>
                <span style="font-size: 0.65rem; color: #8e8e9c; font-family: 'Outfit';">${xe(F)}</span>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 6px; flex: 1; min-width: 140px;">
              <div style="background: #1f2029; padding: 6px 10px; border-radius: 8px; font-size: 0.74rem; border: 1px solid rgba(255,255,255,0.06);">
                <span style="color: #8e8e9c;">مدت مطالعه:</span>
                <strong style="color: #e4e4e7; margin-right: 4px;">${xe(F)}</strong>
              </div>
              <div style="background: ${me<=0?"rgba(16, 185, 129, 0.12)":"#1f2029"}; color: ${me<=0?"#10b981":"#8e8e9c"}; border: 1px solid rgba(255,255,255,0.06); padding: 6px 10px; border-radius: 8px; font-size: 0.74rem; font-weight: 600; text-align: center;">
                ${me<=0?"🎉 هدف روزانه تکمیل شد!":`⏳ ${xe(me)} باقیمانده`}
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
                <div style="font-size: 0.7rem; color: #8e8e9c;">هدف: ${q} تست</div>
              </div>
            </div>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-around; gap: 12px; flex-wrap: wrap;">
            <div class="progress-ring-container" style="position: relative; width: 90px; height: 90px;">
              <svg width="90" height="90" viewBox="0 0 110 110">
                <circle cx="55" cy="55" r="45" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="10"/>
                <circle cx="55" cy="55" r="45" fill="none" stroke="#7c3aed" stroke-width="10"
                  stroke-dasharray="282.7"
                  stroke-dashoffset="${282.7-282.7*ue/100}"
                  stroke-linecap="round"
                  transform="rotate(-90 55 55)"
                  style="transition: stroke-dashoffset 0.5s ease;"/>
              <div class="progress-text" style="position: absolute; top:0; left:0; width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                <span style="font-size: 1.15rem; font-weight: 800; font-family: 'Outfit'; color: #fff;">${ue}%</span>
                <span style="font-size: 0.65rem; color: #8e8e9c; font-family: 'Outfit';">${Q} / ${q}</span>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 6px; flex: 1; min-width: 140px;">
              <div style="background: #1f2029; padding: 6px 10px; border-radius: 8px; font-size: 0.74rem; border: 1px solid rgba(255,255,255,0.06);">
                <span style="color: #8e8e9c;">مدت مطالعه:</span>
                <strong style="color: #e4e4e7; margin-right: 4px;">${xe(F)}</strong>
              </div>
              <div style="background: #1f2029; padding: 6px 10px; border-radius: 8px; font-size: 0.74rem; border: 1px solid rgba(255,255,255,0.06);">
                <span style="color: #8e8e9c;">تست‌ها:</span>
                <strong style="color: #e4e4e7; margin-right: 4px;">${Q}</strong>
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
              ${ze?"▲":"▼"}
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

        ${ze?`
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
                ${A.map(O=>{const V=O.type==="non-study"||!O.isStudy;return`
                  <div style="background: #1f2029; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 8px 10px; display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
                    <div style="display: flex; align-items: center; gap: 8px; flex: 1; min-width: 180px;">
                      <span style="font-size: 0.95rem; flex-shrink: 0;">${O.icon||(V?"☕":"📚")}</span>
                      <div style="overflow: hidden;">
                        <div style="display: flex; align-items: center; gap: 5px;">
                          <strong style="font-size: 0.8rem; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                            ${O.subject||(V?"فعالیت روزمره":"پارت مطالعه")}
                          </strong>
                          <span style="font-size: 0.62rem; padding: 0.5px 4px; border-radius: 4px; background: #16171d; color: #8e8e9c; border: 1px solid rgba(255,255,255,0.06); white-space: nowrap;">
                            ${O.categoryTitle||O.category||(V?"غیردرسی":"درسی")}
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
                        ⏱️ ${xe(O.duration||O.minutes||1)}
                      </span>
                      ${!V&&(O.testCount>0||O.tests>0)?`
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
              <span style="font-size: 0.7rem; color: #8e8e9c;">مقایسه زمان مطالعه (${xe(le)}) و تست‌ها (${U} تست)</span>
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
                  مجموع: ${xe(le)}
                </span>
              </div>
              <div style="display: flex; align-items: flex-end; justify-content: space-between; height: 120px; padding: 4px; gap: 6px; border-bottom: 1px solid rgba(255,255,255,0.06);">
                ${Pe.map((O,V)=>{const re=B[V]||0,be=V===M,Ce=Math.max(480,Math.ceil(Math.max(...B,60))),ve=re>0?Math.min(100,Math.max(6,Math.round(re/Ce*100))):0;return`
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end;">
                      <span style="font-size: 0.62rem; font-weight: 600; font-family: 'Outfit'; color: ${be?"#7c3aed":"#8e8e9c"}; margin-bottom: 2px;">
                        ${re>0?xe(re):"۰"}
                      </span>
                      <div style="width: 100%; max-width: 22px; height: ${ve}%; background: ${be?"#7c3aed":"#1f2029"}; border: 1px solid rgba(255,255,255,0.08); border-radius: 6px 6px 0 0; transition: height 0.4s ease;"></div>
                      <span style="font-size: 0.68rem; font-weight: 600; color: ${be?"#e4e4e7":"#8e8e9c"}; margin-top: 4px;">
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
                  مجموع: ${U} تست
                </span>
              </div>
              <div style="display: flex; align-items: flex-end; justify-content: space-between; height: 120px; padding: 4px; gap: 6px; border-bottom: 1px solid rgba(255,255,255,0.06);">
                ${Pe.map((O,V)=>{const re=H[V]||0,be=V===M,Ce=Math.max(100,Math.ceil(Math.max(...H))),ve=re>0?Math.min(100,Math.max(6,Math.round(re/Ce*100))):0;return`
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end;">
                      <span style="font-size: 0.62rem; font-weight: 600; font-family: 'Outfit'; color: ${be?"#7c3aed":"#8e8e9c"}; margin-bottom: 2px;">
                        ${re}
                      </span>
                      <div style="width: 100%; max-width: 22px; height: ${ve}%; background: ${be?"#7c3aed":"#1f2029"}; border: 1px solid rgba(255,255,255,0.08); border-radius: 6px 6px 0 0; transition: height 0.4s ease;"></div>
                      <span style="font-size: 0.68rem; font-weight: 600; color: ${be?"#e4e4e7":"#8e8e9c"}; margin-top: 4px;">
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
            <span>${ge?"بستن 🔼":"مشاهده و تحلیل 🔽"}</span>
          </div>
        </div>

        ${ge?`
          <div style="margin-top: 12px; animation: fadeIn 0.2s ease;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 8px;">
              ${he.map(O=>`
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
                      <span style="font-size: 0.72rem; font-weight: 800; font-family: 'Outfit'; color: ${O.hasData?"#e4e4e7":"var(--text-muted)"}; line-height: 1.2;">${O.studyMinutes>0?xe(O.studyMinutes):"۰ دقیقه"}</span>
                    </div>
                  </div>

                  <!-- Activity Legend (راهنمای فعالیت‌ها) -->
                  <div style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.04); padding-top: 6px; margin-top: 2px; display: flex; flex-direction: column; gap: 4px;">
                    ${O.legendItems.length>0?O.legendItems.map(V=>`
                      <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.7rem; gap: 4px;">
                        <div style="display: flex; align-items: center; gap: 5px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                          <span style="width: 6px; height: 6px; border-radius: 50%; background: ${V.color}; flex-shrink: 0;"></span>
                          <span style="color: #e4e4e7; font-weight: 600; overflow: hidden; text-overflow: ellipsis;">${V.title}</span>
                        </div>
                        <span style="color: #8e8e9c; font-weight: 600; flex-shrink: 0; font-family: 'Outfit';">${xe(V.minutes)}</span>
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
    `}}function Lt(){typeof window<"u"&&typeof window.renderApp=="function"&&window.renderApp()}typeof window<"u"&&(window.updateCharts=Lt,window.updateDashboard=Lt,window.renderDashboard=Io);window.plannerTaskViewMode=window.plannerTaskViewMode||"list";window.plannerPriorityFilter=window.plannerPriorityFilter||"ALL";window.plannerNewTaskPriority=window.plannerNewTaskPriority||xt;window.setPlannerTaskViewMode=n=>{window.plannerTaskViewMode=n==="matrix"?"matrix":"list",Fe()};window.setPlannerPriorityFilter=n=>{window.plannerPriorityFilter=n||"ALL",Fe()};window.setPlannerNewTaskPriority=n=>{window.plannerNewTaskPriority=n||xt};window.selectPlannerDay=n=>{const e=typeof window.appState<"u"&&window.appState?window.appState:null;e&&(e.selectedDayIndex=n),Fe()};window.changeJalaliMonth=n=>{const[e,t]=p.getTodayJalali();let o=window.jalaliViewMonth!==void 0?window.jalaliViewMonth:t-1,i=window.jalaliViewYear!==void 0?window.jalaliViewYear:e;o+=n,o<0?(o=11,i-=1):o>11&&(o=0,i+=1),window.jalaliViewMonth=o,window.jalaliViewYear=i,window.renderApp&&window.renderApp()};const Et=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Se=n=>String(n).replace(/[0-9]/g,e=>"۰۱۲۳۴۵۶۷۸۹"[e]);function to(n){return`
    <select onchange="window.movePlannerTaskPriority('${n.id}', this.value)"
      title="انتقال این کار به خانه دیگر ماتریس"
      style="background: rgba(15,23,42,0.85); color: #e2e8f0; border: 1px solid rgba(148,163,184,0.3); border-radius: 9px; font-size: 0.68rem; padding: 3px 5px; cursor: pointer; font-family: inherit;">
      ${Qe.map(e=>`
        <option value="${e.id}" ${n.priority===e.id?"selected":""}>${e.emoji} ${e.id}</option>
      `).join("")}
    </select>`}function Dt(n,e){return e||(e=lt(n.priority)),`
    <div id="planner-task-item-${n.id}" data-task-id="${n.id}" data-quadrant="${e.id}"
      style="display: flex; align-items: center; gap: 7px; background: rgba(15,23,42,0.45); padding: 7px 9px; border-radius: 11px; border: 1px solid rgba(148,163,184,0.14);">
      <input type="checkbox" onclick="window.togglePlannerTask('${n.id}', event)" ${n.isDone?"checked":""}
        style="width: 16px; height: 16px; accent-color: ${e.color}; cursor: pointer; flex-shrink: 0;" />
      <span class="task-text-span" style="font-size: 0.79rem; flex: 1; word-break: break-word; ${n.isDone?"text-decoration: line-through; opacity: 0.5;":""}">${Et(n.text)}</span>
      ${to(n)}
      <button onclick="window.deletePlannerTask('${n.id}')" style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 0.85rem; flex-shrink: 0;" title="حذف">✕</button>
    </div>`}function oo(n){const e=lt(n.priority);return`
    <div id="planner-task-item-${n.id}" data-task-id="${n.id}" data-quadrant="${n.priority}"
      style="display: flex; align-items: center; justify-content: space-between; gap: 8px; background: ${e.softBg}; padding: 10px 14px; border-radius: 12px; border: 1px solid ${e.borderColor};">
      <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; flex: 1; min-width: 0;">
        <input type="checkbox" class="chk-toggle-daily-plan" onclick="window.togglePlannerTask('${n.id}', event)" data-id="${n.id}" ${n.isDone?"checked":""} style="width: 18px; height: 18px; accent-color: ${e.color}; flex-shrink: 0; cursor: pointer;" />
        <span class="task-text-span" style="font-size: 0.92rem; word-break: break-word; ${n.isDone?"text-decoration: line-through; opacity: 0.5;":""}">${Et(n.text)}</span>
      </label>
      <span style="background: rgba(15,23,42,0.5); border: 1px solid ${e.borderColor}; color: ${e.color}; padding: 3px 9px; border-radius: 10px; font-size: 0.68rem; font-weight: 900; white-space: nowrap;" title="${e.subtitle}">
        ${e.emoji} ${e.title}
      </span>
      ${to(n)}
      <button class="btn-delete-daily-plan" onclick="window.deletePlannerTask('${n.id}')" data-id="${n.id}" style="background: none; border: none; color: #ef4444; cursor: pointer; flex-shrink: 0;">✕</button>
    </div>`}function no(n){const e=n.length;if(e===0)return"";const t=n.filter(i=>i.isDone).length,o=Math.round(t/e*100);return`
    <div style="margin-bottom: 14px; padding: 14px 16px; border-radius: 16px; border: 1.5px solid ${o===100?"#eab308":o>=70?"#10b981":"rgba(56, 189, 248, 0.35)"}; background: ${o===100?"linear-gradient(135deg, rgba(234, 179, 8, 0.18) 0%, rgba(168, 85, 247, 0.15) 100%)":"rgba(31, 32, 41, 0.8)"}; box-shadow: ${o===100?"0 0 20px rgba(234, 179, 8, 0.25)":"none"}; direction: rtl; transition: all 0.3s ease;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 34px; height: 34px; border-radius: 12px; background: ${o===100?"rgba(234, 179, 8, 0.25)":"rgba(56, 189, 248, 0.15)"}; border: 1px solid ${o===100?"#eab308":"#38bdf8"}; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">
            ${o===100?"🌟":"📊"}
          </div>
          <div>
            <div style="display: flex; align-items: center; gap: 6px;">
              <strong style="font-size: 0.95rem; font-weight: 800; color: #ffffff;">نرخ پایبندی برنامه امروز</strong>
              ${o===100?`
                <span style="background: linear-gradient(135deg, #eab308, #ca8a04); color: #000; font-weight: 900; padding: 2px 8px; border-radius: 10px; font-size: 0.72rem; box-shadow: 0 0 10px rgba(234, 179, 8, 0.4);">
                  روز کامل و بی‌نقص 🌟
                </span>
              `:""}
            </div>
            <span style="font-size: 0.74rem; color: #a1a1aa; font-weight: 600;">
              ${Se(t)} از ${Se(e)} کار برنامه‌ریزی‌شده انجام شده است
            </span>
          </div>
        </div>

        <div style="background: #16171d; border: 1px solid ${o===100?"#eab308":o>=70?"#10b981":"#38bdf8"}; color: ${o===100?"#fde047":o>=70?"#34d399":"#38bdf8"}; padding: 4px 12px; border-radius: 12px; font-weight: 900; font-size: 0.9rem; font-family: 'Outfit', sans-serif;">
          نرخ پایبندی: ${Se(o)}٪
        </div>
      </div>

      <!-- Progress bar -->
      <div style="width: 100%; height: 8px; background: rgba(0, 0, 0, 0.4); border-radius: 6px; overflow: hidden; margin-top: 10px;">
        <div style="height: 100%; width: ${o}%; background: ${o===100?"linear-gradient(90deg, #eab308 0%, #a855f7 100%)":o>=70?"linear-gradient(90deg, #10b981 0%, #38bdf8 100%)":"linear-gradient(90deg, #38bdf8 0%, #6366f1 100%)"}; border-radius: 6px; transition: width 0.5s ease;"></div>
      </div>
    </div>
  `}function io(n,e){return`
    <div id="planner-priority-filters" style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 14px;">
      <button onclick="window.setPlannerPriorityFilter('ALL')"
        style="padding: 5px 12px; font-size: 0.72rem; font-weight: 800; border-radius: 11px; cursor: pointer; border: 1px solid ${e==="ALL"?"#38bdf8":"rgba(148,163,184,0.25)"}; background: ${e==="ALL"?"rgba(56,189,248,0.2)":"rgba(15,23,42,0.5)"}; color: ${e==="ALL"?"#7dd3fc":"#94a3b8"};">
        همه (${Se(n.length)})
      </button>
      ${Qe.map(t=>{const o=n.filter(a=>a.priority===t.id).length,i=e===t.id;return`
        <button onclick="window.setPlannerPriorityFilter('${t.id}')"
          style="padding: 5px 12px; font-size: 0.72rem; font-weight: 800; border-radius: 11px; cursor: pointer; border: 1px solid ${i?t.color:"rgba(148,163,184,0.25)"}; background: ${i?t.softBg:"rgba(15,23,42,0.5)"}; color: ${i?t.color:"#94a3b8"};"
          title="${t.subtitle}">
          ${t.emoji} ${t.title} (${Se(o)})
        </button>`}).join("")}
    </div>`}function tt(n,e){const o=p.getDailyPlans(n).filter(d=>d.dayIndex===e),i=document.getElementById("planner-accordion-daily-tasks-counter");i&&(i.innerHTML=o.length>0?`<strong style="color: #38bdf8; font-size: 0.8rem; margin-right: 4px;">(${Se(o.length)} کار برای امروز)</strong>`:"");const a=document.getElementById("planner-commitment-score-banner-wrapper");a&&(a.innerHTML=no(o));const r=document.getElementById("planner-priority-filters-container");if(r){const d=window.plannerPriorityFilter||"ALL";r.innerHTML=io(o,d)}Qe.forEach(d=>{const s=o.filter(f=>f.priority===d.id),l=s.filter(f=>f.isDone).length,c=document.getElementById(`quadrant-badge-${d.id}`);c&&(c.textContent=`${Se(l)}/${Se(s.length)}`)})}window.addPlannerTaskToQuadrant=n=>{const e=document.getElementById(`input-quadrant-task-${n}`);if(!e||!e.value.trim())return;const t=p.getCurrentWeek(),o=t?t.id:1,i=window.appState&&typeof window.appState.selectedDayIndex=="number"?window.appState.selectedDayIndex:(new Date().getDay()+1)%7,a=p.addDailyPlan(o,i,e.value.trim(),n);e.value="",window.triggerActionDrivenPush&&window.triggerActionDrivenPush();const r=document.getElementById(`quadrant-tasks-${n}`);if(r&&window.plannerTaskViewMode==="matrix"){const d=r.querySelector(".quadrant-empty-msg");d&&d.remove();const s=document.createElement("div"),l=lt(n);s.innerHTML=Dt(a,l);const c=s.firstElementChild;r.appendChild(c),tt(o,i)}else Fe()};window.addPlannerDailyTask=()=>{const n=document.getElementById("input-daily-plan");if(!n||!n.value.trim())return;const e=document.getElementById("select-daily-plan-priority"),t=e?e.value:window.plannerNewTaskPriority||xt,o=p.getCurrentWeek(),i=o?o.id:1,a=window.appState&&typeof window.appState.selectedDayIndex=="number"?window.appState.selectedDayIndex:(new Date().getDay()+1)%7,r=p.addDailyPlan(i,a,n.value.trim(),t);if(n.value="",window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.plannerTaskViewMode==="matrix"){const s=document.getElementById(`quadrant-tasks-${t}`);if(s){const l=s.querySelector(".quadrant-empty-msg");l&&l.remove();const c=document.createElement("div"),f=lt(t);c.innerHTML=Dt(r,f);const m=c.firstElementChild;s.appendChild(m),tt(i,a);return}}else{const s=document.getElementById("planner-list-tasks-container"),l=window.plannerPriorityFilter||"ALL";if(s&&(l==="ALL"||l===t)){const f=s.querySelector(".list-empty-msg");f&&f.remove();const m=document.createElement("div");m.innerHTML=oo(r);const y=m.firstElementChild;s.appendChild(y),tt(i,a);return}}Fe()};window.togglePlannerTask=(n,e=null)=>{e&&typeof e.stopPropagation=="function"&&e.stopPropagation();const t=p.getCurrentWeek(),o=t?t.id:1,i=window.appState&&typeof window.appState.selectedDayIndex=="number"?window.appState.selectedDayIndex:(new Date().getDay()+1)%7,r=p.getDailyPlans(o).find(l=>l.id==n||String(l.id)===String(n)),d=r?!r.isDone:!0;p.toggleDailyPlan(o,n),d&&window.triggerCompletionBurst&&window.triggerCompletionBurst(e),window.triggerActionDrivenPush&&window.triggerActionDrivenPush();const s=document.getElementById(`planner-task-item-${n}`);if(s){const l=s.querySelector('input[type="checkbox"]');l&&(l.checked=d);const c=s.querySelector(".task-text-span");c&&(c.style.textDecoration=d?"line-through":"none",c.style.opacity=d?"0.5":"1"),tt(o,i)}else Fe()};window.deletePlannerTask=n=>{const e=p.getCurrentWeek(),t=e?e.id:1,o=window.appState&&typeof window.appState.selectedDayIndex=="number"?window.appState.selectedDayIndex:(new Date().getDay()+1)%7;p.deleteDailyPlan(t,n),window.triggerActionDrivenPush&&window.triggerActionDrivenPush();const i=document.getElementById(`planner-task-item-${n}`);if(i){const a=i.parentElement;if(i.remove(),a&&a.querySelectorAll('[id^="planner-task-item-"]').length===0){if(a.id&&a.id.startsWith("quadrant-tasks-"))a.innerHTML='<p class="quadrant-empty-msg" style="font-size: 0.74rem; color: var(--text-secondary); opacity: 0.75; margin: 6px 0;">کاری در این خانه ثبت نشده است.</p>';else if(a.id==="planner-list-tasks-container"){const s=(window.plannerPriorityFilter||"ALL")==="ALL"?"برای این روز کاری ثبت نشده است.":"در این خانه از ماتریس کاری برای این روز ثبت نشده است.";a.innerHTML=`<p class="list-empty-msg" style="font-size: 0.85rem; color: var(--text-secondary);">${s}</p>`}}tt(t,o)}else Fe()};window.movePlannerTaskPriority=(n,e)=>{const t=p.getCurrentWeek(),o=t?t.id:1,i=window.appState&&typeof window.appState.selectedDayIndex=="number"?window.appState.selectedDayIndex:(new Date().getDay()+1)%7;p.setDailyPlanPriority(o,n,e),window.triggerActionDrivenPush&&window.triggerActionDrivenPush();const a=document.getElementById(`planner-task-item-${n}`),r=window.plannerTaskViewMode==="matrix";if(a&&r){const d=a.parentElement,s=document.getElementById(`quadrant-tasks-${e}`);if(s){const l=s.querySelector(".quadrant-empty-msg");l&&l.remove(),a.setAttribute("data-quadrant",e);const c=a.querySelector("select");c&&(c.value=e);const f=lt(e),m=a.querySelector('input[type="checkbox"]');m&&(m.style.accentColor=f.color),s.appendChild(a),d&&d.querySelectorAll('[id^="planner-task-item-"]').length===0&&(d.innerHTML='<p class="quadrant-empty-msg" style="font-size: 0.74rem; color: var(--text-secondary); opacity: 0.75; margin: 6px 0;">کاری در این خانه ثبت نشده است.</p>'),tt(o,i);return}}Fe()};window.toggleWeeklyGoal=(n,e=null)=>{e&&typeof e.stopPropagation=="function"&&e.stopPropagation();const t=p.getCurrentWeek(),o=t?t.id:1,a=p.getWeeklyGoals(o).find(s=>s.id==n||String(s.id)===String(n)),r=a?!a.isDone:!0;p.toggleWeeklyGoal(o,n),r&&window.triggerCompletionBurst&&window.triggerCompletionBurst(e),window.triggerActionDrivenPush&&window.triggerActionDrivenPush();const d=document.getElementById(`weekly-goal-item-${n}`);if(d){const s=d.querySelector('input[type="checkbox"]');s&&(s.checked=r);const l=d.querySelector(".weekly-goal-text");l&&(l.style.textDecoration=r?"line-through":"none",l.style.opacity=r?"0.5":"1");return}window.renderApp&&window.renderApp()};function ao(n){return`
    <div id="weekly-goal-item-${n.id}" style="display: flex; align-items: center; justify-content: space-between; background: #1f2029; padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06);">
      <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; flex: 1;">
        <input type="checkbox" class="chk-toggle-weekly-goal" onclick="window.toggleWeeklyGoal('${n.id}', event)" data-id="${n.id}" ${n.isDone?"checked":""} style="width: 18px; height: 18px; accent-color: #7c3aed; cursor: pointer;" />
        <span class="weekly-goal-text" style="font-size: 0.92rem; ${n.isDone?"text-decoration: line-through; opacity: 0.5;":""}">${Et(n.text)}</span>
      </label>
      <button class="btn-delete-weekly-goal" onclick="window.deleteWeeklyGoal('${n.id}')" data-id="${n.id}" style="background: none; border: none; color: #ef4444; cursor: pointer;">✕</button>
    </div>`}window.addWeeklyGoal=()=>{const n=document.getElementById("input-weekly-goal");if(!n||!n.value.trim())return;const e=p.getCurrentWeek(),t=e?e.id:1,o=p.addWeeklyGoal(t,n.value.trim());n.value="",window.triggerActionDrivenPush&&window.triggerActionDrivenPush();const i=document.getElementById("weekly-goals-list-container");if(i&&o){const a=i.querySelector(".weekly-goals-empty-msg");a&&a.remove();const r=document.createElement("div");r.innerHTML=ao(o),i.appendChild(r.firstElementChild);return}window.renderApp&&window.renderApp()};window.deleteWeeklyGoal=n=>{const e=p.getCurrentWeek(),t=e?e.id:1;p.deleteWeeklyGoal(t,n),window.triggerActionDrivenPush&&window.triggerActionDrivenPush();const o=document.getElementById(`weekly-goal-item-${n}`);if(o){const i=o.parentElement;o.remove(),i&&i.querySelectorAll('[id^="weekly-goal-item-"]').length===0&&(i.innerHTML='<p class="weekly-goals-empty-msg" style="font-size: 0.85rem; color: var(--text-secondary);">هیچ هدفی ثبت نشده است.</p>');return}window.renderApp&&window.renderApp()};window.applyPresetWeeklyGoals=()=>{const n=p.getCurrentWeek(),e=n?n.id:1;["مرور خلاصه نکات درس‌های هدف","حل ۲۰۰ تست آزمون جامع","تحلیل و یادداشت نکات آزمون","مرور لغات و فرمول‌ها با لایتنر"].forEach(o=>p.addWeeklyGoal(e,o)),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.showToast&&window.showToast("✅ روتین‌ها و اهداف پیشنهادی اضافه شدند","success"),window.renderApp&&window.renderApp()};window.addPlannerCountdownEvent=()=>{var i,a,r,d;const n=(i=document.getElementById("input-event-title"))==null?void 0:i.value.trim(),e=parseInt((a=document.getElementById("input-event-day"))==null?void 0:a.value),t=parseInt((r=document.getElementById("input-event-month"))==null?void 0:r.value),o=parseInt((d=document.getElementById("input-event-year"))==null?void 0:d.value);if(!n||isNaN(e)||isNaN(t)||isNaN(o)){window.showToast?window.showToast("لطفاً عنوان و تاریخ رویداد را کامل وارد کنید.","warning"):alert("لطفاً عنوان و تاریخ رویداد را کامل وارد کنید.");return}p.addCountdownEvent(n,o,t,e),window.showToast&&window.showToast("✅ رویداد جدید به روزشمار اضافه شد","success"),window.renderApp&&window.renderApp()};window.deletePlannerCountdownEvent=n=>{p.deleteCountdownEvent(n),window.showToast&&window.showToast("رویداد حذف شد","info"),window.renderApp&&window.renderApp()};window.savePlannerTargets=()=>{var i,a,r,d;const n=parseFloat((i=document.getElementById("target-daily-hours"))==null?void 0:i.value)||8,e=parseInt((a=document.getElementById("target-daily-tests"))==null?void 0:a.value)||150,t=parseFloat((r=document.getElementById("target-weekly-hours"))==null?void 0:r.value)||56,o=parseInt((d=document.getElementById("target-weekly-tests"))==null?void 0:d.value)||1e3;p.setStudyTargets({dailyStudyGoalHours:n,dailyTargetHours:n,weeklyStudyGoalHours:t,dailyTestGoalCount:e,weeklyTestGoalCount:o}),window.showToast?window.showToast("✅ اهداف با موفقیت ذخیره شدند","success",2500):alert("✅ اهداف با موفقیت ذخیره شدند"),window.renderApp&&window.renderApp()};function ro(n,e){const t=p.getDailyPlans(e),o=window.plannerTaskViewMode==="matrix"?"matrix":"list",i=window.plannerPriorityFilter||"ALL",a=window.plannerNewTaskPriority||xt,r=t.filter(s=>s.dayIndex===n),d=i==="ALL"?r:r.filter(s=>s.priority===i);return`
    <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 14px;">
      <div class="card-title" style="margin: 0; color: #e4e4e7;">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
          <span>ماتریس آیزنهاور (${Pe[n]})</span>
      </div>

      <!-- سوییچ نمای لیستی / شبکه‌ای -->
      <div style="display: flex; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 4px; gap: 4px;">
        <button onclick="window.setPlannerTaskViewMode('list')"
          style="padding: 6px 14px; font-size: 0.76rem; font-weight: 900; border: none; border-radius: 11px; cursor: pointer; background: ${o==="list"?"#7c3aed":"transparent"}; color: ${o==="list"?"white":"#94a3b8"};">
          ☰ نمای لیستی
        </button>
        <button onclick="window.setPlannerTaskViewMode('matrix')"
          style="padding: 6px 14px; font-size: 0.76rem; font-weight: 900; border: none; border-radius: 11px; cursor: pointer; background: ${o==="matrix"?"#7c3aed":"transparent"}; color: ${o==="matrix"?"white":"#94a3b8"};">
          ⊞ ماتریس ۲×۲
        </button>
      </div>
    </div>

    <!-- 📊 COMMITMENT SCORE & PERFECT DAY CELEBRATION BADGE BANNER -->
    <div id="planner-commitment-score-banner-wrapper">
      ${no(r)}
    </div>

    <!-- Day Selector Pills -->
    <div class="day-selector" style="margin-bottom: 14px;">
      ${Pe.map((s,l)=>`
        <button class="day-pill planner-day-pill ${l===n?"active":""}" data-day="${l}" onclick="window.selectPlannerDay(${l})">
          ${s}
        </button>
      `).join("")}
    </div>

    <!-- Add Daily Plan Input + Priority Picker -->
    <div style="display: flex; gap: 8px; margin-bottom: 10px; flex-wrap: wrap;">
      <input type="text" id="input-daily-plan" onkeydown="if(event.key === 'Enter' || event.keyCode === 13) { event.preventDefault(); window.addPlannerDailyTask(); }" class="form-input" placeholder="عنوان کار روز ${Pe[n]}..." style="flex: 2; min-width: 190px;" />
      <select id="select-daily-plan-priority" class="form-input" onchange="window.setPlannerNewTaskPriority(this.value)"
        title="اولویت این کار در ماتریس آیزنهاور" style="flex: 1; min-width: 190px; cursor: pointer;">
        ${Qe.map(s=>`
          <option value="${s.id}" ${a===s.id?"selected":""}>${s.emoji} ${s.id}: ${s.title}</option>
        `).join("")}
      </select>
      <button id="btn-add-daily-plan" onclick="window.addPlannerDailyTask()" class="btn-primary" style="width: auto; padding: 0 20px; white-space: nowrap;">افزودن به ${Pe[n]}</button>
    </div>

    <!-- فیلتر ربع‌ها -->
    <div id="planner-priority-filters-container">
      ${io(r,i)}
    </div>

    ${o==="matrix"?`
    <!-- ⊞ نمای ماتریس ۲×۲ آیزنهاور -->
    <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px;" dir="rtl">
      ${Qe.map(s=>{const l=r.filter(f=>f.priority===s.id),c=l.filter(f=>f.isDone).length;return`
        <div style="background: ${s.softBg}; border: 1.5px solid ${s.borderColor}; border-radius: 18px; padding: 14px; display: flex; flex-direction: column; min-height: 190px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 10px;">
            <div>
              <strong style="font-size: 0.88rem; color: ${s.color}; display: block;">${s.emoji} ${s.id}: ${s.title}</strong>
              <span style="font-size: 0.68rem; color: var(--text-secondary);">${s.subtitle}</span>
            </div>
            <span id="quadrant-badge-${s.id}" style="background: ${s.softBg}; border: 1px solid ${s.borderColor}; color: ${s.color}; padding: 3px 9px; border-radius: 10px; font-size: 0.68rem; font-weight: 900; white-space: nowrap;">
              ${Se(c)}/${Se(l.length)}
            </span>
          </div>

          <div id="quadrant-tasks-${s.id}" class="quadrant-task-list" style="display: flex; flex-direction: column; gap: 6px; flex: 1; margin-bottom: 10px; max-height: 350px; overflow-y: auto;">
            ${l.length===0?'<p class="quadrant-empty-msg" style="font-size: 0.74rem; color: var(--text-secondary); opacity: 0.75; margin: 6px 0;">کاری در این خانه ثبت نشده است.</p>':l.map(f=>Dt(f,s)).join("")}
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
      ${d.length===0?`<p class="list-empty-msg" style="font-size: 0.85rem; color: var(--text-secondary);">${i==="ALL"?"برای این روز کاری ثبت نشده است.":"در این خانه از ماتریس کاری برای این روز ثبت نشده است."}</p>`:d.map(s=>oo(s)).join("")}
    </div>
    `}
  `}function Fe(){const n=document.getElementById("eisenhower-matrix-section");if(!n){window.renderApp&&window.renderApp();return}const e=typeof window<"u"&&(window.scrollY||window.pageYOffset)||0,t=new Map;n.querySelectorAll('.quadrant-task-list, #planner-list-tasks-container, [id^="quadrant-tasks-"]').forEach(d=>{d.id&&t.set(d.id,d.scrollTop)});const i=p.getCurrentWeek(),a=i?i.id:1,r=window.appState&&typeof window.appState.selectedDayIndex=="number"?window.appState.selectedDayIndex:(new Date().getDay()+1)%7;n.innerHTML=ro(r,a),typeof window<"u"&&window.scrollTo(window.scrollX,e),t.forEach((d,s)=>{const l=document.getElementById(s);l&&(l.scrollTop=d)}),requestAnimationFrame(()=>{typeof window<"u"&&window.scrollTo(window.scrollX,e),t.forEach((d,s)=>{const l=document.getElementById(s);l&&(l.scrollTop=d)})})}window.updateEisenhowerMatrixSectionDOM=Fe;function mn(n=0,e={}){const{plannerAccordions:t={countdowns:!1,targets:!1,weeklyGoals:!1,dailyMatrix:!1}}=e,o=p.getCurrentWeek(),i=o?o.id:1,a=p.getWeeklyGoals(i),r=p.getDailyPlans(i),d=p.getStudyTargets(),s=p.getCountdownEvents()||[],[l,c,f]=p.getTodayJalali(),m=(new Date().getDay()+1)%7,y=Pe[m],w=window.jalaliViewMonth!==void 0?window.jalaliViewMonth:c-1,u=window.jalaliViewYear!==void 0?window.jalaliViewYear:l,g=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],b=g[c-1],v=w<6?31:w<11?30:29,k=(p.jalaliToJdn(u,w+1,1)+2)%7,T=r.filter(x=>x.dayIndex===n);return`
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
                📌 امروز: ${y} ${Se(f)} ${b} ${Se(l)}
              </div>
            </div>
            
            <div style="display: flex; gap: 8px; align-items: center;">
              <button id="btn-jalali-prev-month" onclick="window.changeJalaliMonth(-1)" class="btn-header-action" style="padding: 4px 10px; font-weight: bold; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); color: #a1a1aa;">◀ ماه قبل</button>
              <span style="font-weight: 900; font-size: 0.95rem; color: #e4e4e7;">${g[w]} ${Se(u)}</span>
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
            ${Array.from({length:v}).map((x,M)=>{const P=M+1,C=P===f&&w===c-1&&u===l,I=(k+M)%7,R=Pe[I],E=String(w+1).padStart(2,"0"),j=String(P).padStart(2,"0"),J=`${u}/${E}/${j}`,L=(p.getStudyMinutesByDate(J)||0)/60,F=L>0?L%1===0?L.toFixed(0):L.toFixed(1):"0";let Y="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); color: #71717a;",Q='<div style="width: 4px; height: 4px; border-radius: 50%; background: rgba(255, 255, 255, 0.15); margin: 3px auto 0;"></div>';return L>=1&&L<3?(Y="background: rgba(16, 185, 129, 0.18); border: 1px solid rgba(16, 185, 129, 0.35); color: #6ee7b7;",Q=`<div style="font-size: 0.68rem; margin-top: 2px; color: #6ee7b7; font-weight: 800;">${Se(F)}h</div>`):L>=3&&L<6?(Y="background: rgba(16, 185, 129, 0.45); border: 1px solid rgba(16, 185, 129, 0.7); color: #a7f3d0; box-shadow: 0 0 10px rgba(16, 185, 129, 0.25);",Q=`<div style="font-size: 0.68rem; margin-top: 2px; color: #a7f3d0; font-weight: 900;">${Se(F)}h</div>`):L>=6?(Y="background: linear-gradient(135deg, #10b981 0%, #059669 100%); border: 1px solid #34d399; color: #ffffff; box-shadow: 0 0 14px rgba(16, 185, 129, 0.5);",Q=`<div style="font-size: 0.68rem; margin-top: 2px; color: #ffffff; font-weight: 900; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">${Se(F)}h</div>`):L>0&&L<1&&(Y="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); color: #6ee7b7;",Q=`<div style="font-size: 0.68rem; margin-top: 2px; color: #6ee7b7; font-weight: 700;">${Se(F)}h</div>`),`
                <div class="jalali-day-cell ${C?"active-today":""}"
                  onclick="if(window.openJalaliDayDetailsModal) window.openJalaliDayDetailsModal('${J}');"
                  style="padding: 8px 4px; border-radius: 12px; font-size: 0.85rem; font-family: 'Outfit'; font-weight: bold; cursor: pointer; transition: all 0.15s ease; ${Y} ${C?"outline: 2.5px solid #38bdf8; outline-offset: 1px;":""}"
                  onmouseenter="this.style.transform='scale(1.06)'"
                  onmouseleave="this.style.transform='scale(1)'"
                  title="روز ${Se(P)} ${g[w]} (${R}) - ${L>0?Se(F)+" ساعت مطالعه":"بدون مطالعه"}">
                  <div>${Se(P)} ${C?"📍":""}</div>
                  ${Q}
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
                ${s.map(x=>`
                  <div style="display: flex; justify-content: space-between; align-items: center; background: #1f2029; padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);">
                    <div>
                      <strong style="font-size: 0.92rem; color: #e4e4e7;">🎯 ${x.title}</strong>
                      <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">تاریخ: ${x.jy}/${x.jm}/${x.jd}</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span style="background: #16171d; color: #a1a1aa; border: 1px solid rgba(255,255,255,0.08); padding: 4px 10px; border-radius: 12px; font-weight: 800; font-size: 0.8rem; font-family: 'Outfit';">
                        ⏳ روزشمار فعال
                      </span>
                      <button class="btn-delete-countdown-item" onclick="window.deletePlannerCountdownEvent('${x.id}')" data-id="${x.id}" style="background: none; border: none; color: #ef4444; cursor: pointer;">🗑️</button>
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
            <span>اهداف کلیدی هفته ${a.length>0?`<strong style="color: #c4b5fd; font-size: 0.8rem; margin-right: 4px;">(${a.length} هدف)</strong>`:""}</span>
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
              ${a.length===0?'<p class="weekly-goals-empty-msg" style="font-size: 0.85rem; color: var(--text-secondary);">هیچ هدفی ثبت نشده است.</p>':""}
              ${a.map(x=>ao(x)).join("")}
            </div>
          </div>
        `:""}
      </div>
      
      <!-- ⚡ ACCORDION: Daily Plans + Eisenhower Matrix -->
      <div class="glass-panel" style="padding: 0; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; border-radius: 16px; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-planner-accordion-toggle" data-key="dailyMatrix" style="width: 100%; padding: 14px 18px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.92rem; font-weight: 800; color: #e4e4e7;">
            <span style="font-size: 1.1rem;">⚡</span>
            <span>برنامه‌ریزی روزانه و ماتریس اولویت (آیزنهاور) <span id="planner-accordion-daily-tasks-counter">${T.length>0?`<strong style="color: #38bdf8; font-size: 0.8rem; margin-right: 4px;">(${Se(T.length)} کار برای امروز)</strong>`:""}</span></span>
          </div>
          <span style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${t.dailyMatrix?"180deg":"0deg"});">▼</span>
        </button>

        ${t.dailyMatrix?`
          <div id="eisenhower-matrix-section" style="padding: 16px 18px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
            ${ro(n,i)}
          </div>
        `:""}
      </div>
    </div>
  `}function zo(n=!1){const e=p.getCategories();return`
    <div style="${n?"":"padding-bottom: 100px;"}">
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
        ${e.map(t=>{const o=Oe(t);return`
            <div class="glass-panel" style="padding: 14px 16px; display: flex; align-items: center; justify-content: space-between; border-right: 4px solid ${t.color}; border-radius: 14px; background: #16171d; border: 1px solid rgba(255,255,255,0.06); gap: 10px; flex-wrap: wrap;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 38px; height: 38px; border-radius: 12px; background: ${t.color}20; border: 1px solid ${t.color}40; display: flex; align-items: center; justify-content: center; font-weight: 800; color: ${t.color}; font-size: 1.1rem;">
                  ${t.icon||(o?"📚":"☕")}
                </div>
                <div>
                  <strong style="font-size: 0.9rem; display: block; color: white; font-weight: 800;">${t.title}</strong>
                  <div style="display: flex; align-items: center; gap: 6px; margin-top: 3px;">
                    <span style="font-size: 0.68rem; padding: 2px 7px; border-radius: 6px; background: ${o?"rgba(56,189,248,0.15)":"rgba(245,158,11,0.15)"}; color: ${o?"#7dd3fc":"#fde68a"}; font-weight: bold; border: 1px solid ${o?"rgba(56,189,248,0.3)":"rgba(245,158,11,0.3)"};">
                      ${o?"📚 علمی (محاسبه در مطالعه)":"☕ غیرعلمی"}
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
  `}if(typeof window<"u"){if(typeof window.openKonkurEstimatorModal!="function"||window.openKonkurEstimatorModal._isFallback){var Jt=function(){try{var n=document.getElementById("modal-konkur-estimator")||document.getElementById("modal-rank-estimator");n&&(n.style.display="flex",n.classList.add("active"))}catch{}try{window.appState?window.appState.activeModal="rankEstimator":typeof window.openRankEstimator=="function"&&window.openRankEstimator(),typeof window.renderApp=="function"&&window.renderApp()}catch{}try{var e=document.getElementById("modal-rank-estimator")||document.getElementById("modal-konkur-estimator");e&&(e.style.display="flex",e.classList.add("active"))}catch{}};Jt._isFallback=!0,typeof window.openKonkurEstimatorModal!="function"&&(window.openKonkurEstimatorModal=Jt)}window.toggleCategoriesAccordion=function(){window.isCategoriesAccordionOpen=!window.isCategoriesAccordionOpen,window.renderApp&&window.renderApp()},window.toggleLeitnerAccordion=function(){window.isLeitnerAccordionOpen=!window.isLeitnerAccordionOpen;const n=document.getElementById("leitner-cards-container");n&&(n.style.display=window.isLeitnerAccordionOpen?"block":"none"),window.renderApp&&window.renderApp()},window.closeLeitnerAccordion=function(){window.isLeitnerAccordionOpen=!1;const n=document.getElementById("leitner-cards-container");n&&(n.style.display="none"),window.renderApp&&window.renderApp()},window.openLeitnerAccordion=function(){window.isLeitnerAccordionOpen=!0;const n=document.getElementById("leitner-cards-container");n&&(n.style.display="block"),window.renderApp&&window.renderApp(),setTimeout(()=>{var e;(e=document.getElementById("section-leitner-box"))==null||e.scrollIntoView({behavior:"smooth"})},60)},window.toggleAddFlashcardForm=function(n){window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.showAddForm=typeof n=="boolean"?n:!window.leitnerState.showAddForm,window.renderApp&&window.renderApp()},window.saveManualFlashcard=function(){const n=document.getElementById("input-new-fc-deck"),e=document.getElementById("input-new-fc-question"),t=document.getElementById("input-new-fc-answer"),o=n?n.value.trim():"",i=e?e.value.trim():"",a=t?t.value.trim():"";if(!i||!a){window.showToast?window.showToast("لطفاً سؤال و پاسخ را وارد کنید","error"):alert("لطفاً سؤال و پاسخ را وارد کنید");return}p.addFlashcard(i,a,o||"عمومی"),window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.showAddForm=!1,window.showToast&&window.showToast("فلش‌کارت جدید اضافه شد ✨","success"),window.renderApp&&window.renderApp()},window.flipLeitnerCard=function(){window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.isFlipped=!window.leitnerState.isFlipped,window.renderApp&&window.renderApp()},window.prevLeitnerCard=function(){window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.activeIndex=Math.max(0,window.leitnerState.activeIndex-1),window.leitnerState.isFlipped=!1,window.renderApp&&window.renderApp()},window.nextLeitnerCard=function(){window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""});let e=[...p.getFlashcards()||[]];if(window.leitnerState.filterBox==="due"){const o=Date.now();e=e.filter(i=>!i.nextReviewDate||i.nextReviewDate<=o)}else["1","2","3","4","5"].includes(String(window.leitnerState.filterBox))&&(e=e.filter(o=>String(o.box||1)===String(window.leitnerState.filterBox)));const t=e.length;t>0&&(window.leitnerState.activeIndex=(window.leitnerState.activeIndex+1)%t),window.leitnerState.isFlipped=!1,window.renderApp&&window.renderApp()},window.reviewLeitnerCard=function(n,e){p.reviewFlashcard(n,e),window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.isFlipped=!1;let o=p.getFlashcards()||[];if(window.leitnerState.filterBox==="due"){const i=Date.now();o=o.filter(a=>!a.nextReviewDate||a.nextReviewDate<=i)}else["1","2","3","4","5"].includes(String(window.leitnerState.filterBox))&&(o=o.filter(i=>String(i.box||1)===String(window.leitnerState.filterBox)));window.leitnerState.activeIndex>=o.length&&(window.leitnerState.activeIndex=Math.max(0,o.length-1)),window.showToast&&window.showToast(e?"آفرین! کارت به خانه بعدی منتقل شد ⬆️":"کارت به خانه اول برگشت 🔄",e?"success":"info"),window.renderApp&&window.renderApp()},window.filterLeitnerBox=function(n){window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.filterBox=window.leitnerState.filterBox===String(n)?"all":String(n),window.leitnerState.activeIndex=0,window.leitnerState.isFlipped=!1,window.renderApp&&window.renderApp()},window.filterLeitnerTab=function(n){window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.filterBox=n,window.leitnerState.activeIndex=0,window.leitnerState.isFlipped=!1,window.renderApp&&window.renderApp()},window.deleteLeitnerCard=function(n){if(confirm&&!confirm("آیا از حذف این فلش‌کارت مطمئن هستید؟"))return;p.deleteFlashcard(n),window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""});const e=p.getFlashcards()||[];window.leitnerState.activeIndex>=e.length&&(window.leitnerState.activeIndex=Math.max(0,e.length-1)),window.showToast&&window.showToast("فلش‌کارت حذف شد 🗑️","info"),window.renderApp&&window.renderApp()},window.seedDefaultFlashcards=function(){localStorage.removeItem("planex_flashcards"),p.getFlashcards(),window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.activeIndex=0,window.leitnerState.isFlipped=!1,window.showToast&&window.showToast("فلش‌کارت‌های نمونه بارگذاری شدند 📥","success"),window.renderApp&&window.renderApp()}}function bn(){p.getThemeSettings();const n=p.getCategories()||[],e=!!window.isCategoriesAccordionOpen,t=i=>String(i).replace(/[0-9]/g,a=>"۰۱۲۳۴۵۶۷۸۹"[a]);return`
    <div class="main-container" style="padding-bottom: 90px; direction: rtl;">
      <div style="margin-bottom: 14px;">
        <h2 style="font-size: 1.05rem; font-weight: 800; color: #f8fafc; margin: 0 0 2px 0;">ابزارک‌ها</h2>
        <p style="font-size: 0.72rem; color: #8e8e9c; margin: 0;">دسترسی سریع به تمام ابزارهای کاربردی مطالعه</p>
      </div>

      <!-- 🛠️ Tools Grid (2 columns) -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 16px;">
        ${[{icon:"🧠",title:"فلش‌کارت و لایتنر",desc:"تکرار فاصله‌دار هوشمند با ۵ خانه لایتنر",action:"window.switchTab('flashcards')",color:"#a78bfa"},{icon:"📝",title:"جعبه ابزار امتحانات",desc:"برنامه‌ریزی، تخمین فصول و مرور امتحانات",action:"if(window.openExamBox) window.openExamBox(); else { window.appState.activeModal = 'examBox'; window.renderApp(); }",color:"#38bdf8"},{icon:"⏱️",title:"تایمر مطالعه",desc:"کرنومتر، پومودورو و ثبت خودکار زمان",action:"if(window.switchTab) window.switchTab(0)",color:"#f97316"},{icon:"📊",title:"معدل نهایی",desc:"محاسبه دقیق معدل کتبی، ترم و کل",action:"if(window.openGPACalculator) window.openGPACalculator(); else { window.appState.activeModal = 'gpaCalc'; window.renderApp(); }",color:"#34d399"},{icon:"🌙",title:"تنظیم خواب",desc:"برنامه‌ریزی ساعات خواب و بیداری سالم",action:"if(window.openSleepScheduler) window.openSleepScheduler(); else { window.appState.activeModal = 'sleepScheduler'; window.renderApp(); }",color:"#818cf8"},{icon:"🎯",title:"محاسبه درصد",desc:"محاسبه دقیق درصد از تست‌های صحیح و غلط",action:"if(window.openPercentCalculator) window.openPercentCalculator(); else { window.appState.activeModal = 'percentCalc'; window.renderApp(); }",color:"#fb923c"},{icon:"🏆",title:"تخمین رتبه",desc:"تخمین رتبه کنکور و تراز بر اساس درصدها",action:"window.openKonkurEstimatorModal && window.openKonkurEstimatorModal()",color:"#fbbf24"},{icon:"📅",title:"تقویم مطالعاتی",desc:"ماتریس ۲۴ ساعته مدیریت زمان و پارت‌ها",action:"if(window.switchTab) window.switchTab(1)",color:"#2dd4bf"}].map(i=>`
          <div${i.title&&i.title.includes("تخمین رتبه")?' id="card-konkur-estimator" data-action="open-konkur-estimator"':""} onclick="${i.action}" style="background: #16171d; border: 1px solid rgba(255,255,255,0.05); border-radius: 20px; padding: 16px 14px; cursor: pointer; transition: transform 0.15s ease, border-color 0.15s ease; display: flex; flex-direction: column; justify-content: space-between; min-height: 140px; box-sizing: border-box;" onmouseenter="this.style.transform='translateY(-2px)'; this.style.borderColor='rgba(255,255,255,0.12)'" onmouseleave="this.style.transform=''; this.style.borderColor='rgba(255,255,255,0.05)'">
            <div>
              <div style="width: 40px; height: 40px; border-radius: 14px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; font-size: 1.35rem; margin-bottom: 10px;">
                ${i.icon}
              </div>
              <div style="font-size: 13px; font-weight: 700; color: #ffffff; margin-bottom: 4px;">${i.title}</div>
              <div style="font-size: 11px; color: #8e8e9c; line-height: 1.45;">${i.desc}</div>
            </div>
            <div style="font-size: 11px; font-weight: 600; color: ${i.color}; display: flex; align-items: center; gap: 3px; margin-top: 10px;">
              <span>استفاده از ابزارک</span>
              <span style="font-size: 12px; font-weight: 700;">‹</span>
            </div>
          </div>
        `).join("")}
      </div>

      <!-- 🎴 Flashcards Promo Card (opens standalone #flashcards view) -->
      ${Eo()}

      <!-- 🔄 Cloud Sync Box (Kept intact) -->
      ${function(){let i=null;try{i=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}const a=p.getUserProfile()||{};let r=(i==null?void 0:i.phone)||(i==null?void 0:i.phone_number)||a.phone||"";return r&&r.startsWith("98")?r="0"+r.slice(2):r&&r.startsWith("+98")?r="0"+r.slice(3):r&&r.length===10&&r.startsWith("9")&&(r="0"+r),typeof window<"u"&&!window.handleForceCloudSync&&(window.handleForceCloudSync=async function(){const d=document.getElementById("btn-force-cloud-sync");d&&(d.innerHTML="در حال همگام‌سازی...");try{window.personalSyncService&&typeof window.personalSyncService.pushToCloud=="function"&&await window.personalSyncService.pushToCloud(),window.showToast?window.showToast("تمامی پارت‌ها و گروه‌ها با موفقیت همگام شدند ✅","success"):alert("تمامی پارت‌ها و گروه‌ها با موفقیت همگام شدند ✅")}catch(s){console.error(s),window.showToast&&window.showToast("خطا در همگام‌سازی","error")}finally{d&&(d.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg> همگام‌سازی فوری (Force Sync)')}}),r?`
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
                  ${t(n.length)} درس / فعالیت
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
            ${zo(!0)}
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
  `}function Eo(){const n=p.getLeitnerStats()||{total:0,due:0},e=t=>String(t).replace(/[0-9]/g,o=>"۰۱۲۳۴۵۶۷۸۹"[o]);return`
    <div id="section-leitner-box" onclick="window.switchTab('flashcards')" style="position: relative; overflow: hidden; padding: 18px 16px; margin-bottom: 12px; border-radius: 22px; cursor: pointer; background: linear-gradient(135deg, rgba(99,102,241,0.22), rgba(168,85,247,0.18)); border: 1px solid rgba(167,139,250,0.35); box-shadow: 0 8px 24px rgba(124,58,237,0.18);">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 12px;">
        <div style="width: 48px; height: 48px; border-radius: 16px; background: rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; font-size: 1.6rem;">🎴</div>
        <div style="flex: 1;">
          <h3 style="margin: 0; font-size: 0.98rem; font-weight: 800; color: #f8fafc;">🎴 فلش‌کارت و جعبه لایتنر</h3>
          <p style="margin: 4px 0 0; font-size: 0.72rem; color: #c4b5fd; line-height: 1.5;">مدیریت دسته‌ها، مرور فاصله‌دار هوشمند و بسته کارت‌های آماده</p>
        </div>
      </div>
      <div style="display: flex; align-items: center; justify-content: space-between; gap: 10px; flex-wrap: wrap;">
        <span style="font-size: 0.68rem; color: #e9d5ff; background: rgba(255,255,255,0.06); padding: 4px 10px; border-radius: 10px;">${e(n.total)} کارت • ${e(n.due)} آماده مرور 🔥</span>
        <button id="btn-open-flashcards" type="button" onclick="event.stopPropagation(); window.switchTab('flashcards');" style="background: linear-gradient(135deg,#6366f1,#a855f7); border: none; color: #fff; padding: 10px 18px; border-radius: 14px; font-size: 0.8rem; font-weight: 800; cursor: pointer; box-shadow: 0 4px 14px rgba(124,58,237,0.4);">ورود به جعبه لایتنر ↗</button>
      </div>
    </div>
  `}function Do(n={}){const t=(n.articlesAccordions||{questionBankHub:!1}).questionBankHub,o=Ht.filter(i=>i.id!=="questions-1404");return`
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
                  ${go.map(i=>`
                    <button 
                      class="btn-exam-quick-chip" 
                      data-exam-id="${i.id}"
                      style="display: inline-flex; align-items: center; gap: 4px; background: #1f2029; border: 1px solid rgba(255,255,255,0.06); color: #e2e8f0; padding: 4px 8px; border-radius: 6px; font-size: 0.7rem; font-weight: 700; cursor: pointer; transition: all 0.15s ease;"
                    >
                      <span>${i.icon}</span>
                      <span>${i.title}</span>
                      <span style="font-size: 0.62rem; color: #c4b5fd; background: #16171d; padding: 0.5px 4px; border-radius: 4px; font-family: 'Outfit';">${i.questions.length}</span>
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
        ${o.map(i=>`
          <div class="glass-panel article-card" data-article-id="${i.id}" style="padding: 0; overflow: hidden; cursor: pointer; transition: all 0.15s ease; border: 1px solid rgba(255,255,255,0.06); background: rgba(22, 23, 29, 0.75); border-radius: 12px;">
            
            <div style="padding: 12px 14px 0 14px; display: flex; align-items: center; gap: 8px;">
              <div style="width: 36px; height: 36px; border-radius: 10px; background: #1f2029; border: 1px solid rgba(255,255,255,0.06); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0;">
                ${i.icon}
              </div>
              <div style="display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                <span style="display: inline-block; font-size: 0.64rem; font-weight: 700; color: #c4b5fd; background: #1f2029; padding: 1px 6px; border-radius: 6px;">
                  ${i.category}
                </span>
                <span style="font-size: 0.64rem; color: #94a3b8; font-family: 'Outfit';">
                  🗓️ ${i.date}
                </span>
                ${i.downloads&&i.downloads.length>0?`
                  <span style="font-size: 0.62rem; color: #38bdf8; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.25); padding: 1px 6px; border-radius: 6px; font-weight: 700;">
                    📥 دانلود دیتا (${i.downloads.length})
                  </span>
                `:""}
              </div>
            </div>

            <div style="padding: 8px 14px 14px 14px;">
              <h3 style="font-size: 0.86rem; font-weight: 700; color: #ffffff !important; margin-bottom: 4px; line-height: 1.4;">
                ${i.title}
              </h3>
              <p style="font-size: 0.72rem; color: #cbd5e1 !important; line-height: 1.5; margin-bottom: 8px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                ${i.summary}
              </p>

              <div style="display: flex; justify-content: space-between; align-items: center;">
                <span style="font-size: 0.68rem; color: #94a3b8; display: flex; align-items: center; gap: 4px;">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  ${i.readTime} دقیقه مطالعه
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
  `}function so(n){const e=["الف","ب","ج","د"],t=Array.isArray(n.options)?n.options:[],o=typeof n.correct_index=="number"?n.correct_index:e.indexOf(n.correct_option),i=n.options_analysis?Object.entries(n.options_analysis):[];return`
    <div class="trap-card glass-panel" data-qid="${n.id}" data-category="${n.category}" style="background: rgba(22, 23, 29, 0.85); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 18px 20px; margin-bottom: 20px; backdrop-filter: blur(14px); box-shadow: 0 4px 20px rgba(0, 0, 0, 0.25);">
      
      <!-- Card Top Info Bar -->
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-bottom: 12px; border-bottom: 1px dashed rgba(255,255,255,0.08); padding-bottom: 10px;">
        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
          <span style="background: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%); color: #ffffff; font-size: 0.76rem; font-weight: 800; padding: 3px 10px; border-radius: 8px; box-shadow: 0 2px 8px rgba(124, 58, 237, 0.3);">
            تست شماره ${n.id}
          </span>
          <span style="background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); color: #cbd5e1; font-size: 0.72rem; font-weight: 700; padding: 2px 10px; border-radius: 8px;">
            ${n.category||"عمومی"}
          </span>
        </div>
        <span style="font-size: 0.72rem; color: #34d399; font-weight: 800; background: rgba(16, 185, 129, 0.14); border: 1px solid rgba(16, 185, 129, 0.35); padding: 3px 10px; border-radius: 8px; display: inline-flex; align-items: center; gap: 4px;">
          <span>✓</span>
          <span>کلید رسمی: گزینه ${n.correct_option}</span>
        </span>
      </div>

      <!-- Question Vignette / Scenario -->
      <div style="font-size: 0.88rem; font-weight: 600; color: #f8fafc; line-height: 1.85; margin-bottom: 14px; background: rgba(10, 11, 15, 0.5); border: 1px solid rgba(255,255,255,0.06); padding: 12px 14px; border-radius: 12px; border-right: 4px solid #7c3aed;">
        ${n.question}
      </div>

      <!-- ⚠️ دام تستی صورت سوال (Trap Box) -->
      ${n.question_trap?`
        <div style="background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(244, 63, 94, 0.05) 100%); border: 1px solid rgba(239, 68, 68, 0.28); border-right: 4px solid #ef4444; border-radius: 12px; padding: 12px 14px; margin-bottom: 14px;">
          <div style="font-size: 0.8rem; font-weight: 800; color: #f87171; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
            <span style="font-size: 1rem;">⚠️</span>
            <span>دام صورت سوال و خطای شناختی داوطلب (Cognitive Trap):</span>
          </div>
          <p style="font-size: 0.78rem; color: #cbd5e1; line-height: 1.75; margin: 0;">
            ${n.question_trap}
          </p>
        </div>
      `:""}

      <!-- ۴ گزینه‌های سوال -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 8px; margin-bottom: 14px;">
        ${t.map((a,r)=>{const d=e[r]||r+1,s=r===o||d===n.correct_option;return`
            <div style="display: flex; align-items: flex-start; gap: 8px; padding: 10px 12px; border-radius: 10px; font-size: 0.78rem; line-height: 1.6; ${s?"background: rgba(16, 185, 129, 0.12); border: 1.5px solid rgba(16, 185, 129, 0.4); border-right: 4px solid #10b981; color: #6ee7b7; font-weight: 700;":"background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.07); color: #cbd5e1;"}">
              <span style="display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 6px; font-size: 0.74rem; font-weight: 800; flex-shrink: 0; ${s?"background: #10b981; color: #ffffff;":"background: rgba(255,255,255,0.08); color: #94a3b8;"}">
                ${d}
              </span>
              <span style="flex: 1;">${a}</span>
              ${s?'<span style="font-size: 0.68rem; background: #10b981; color: #ffffff; padding: 2px 6px; border-radius: 4px; margin-right: auto; font-weight: 700;">✓ پاسخ</span>':""}
            </div>
          `}).join("")}
      </div>

      <!-- 🔍 کالبدشکافی گزینه‌های الف تا د -->
      ${i.length>0?`
        <div style="background: rgba(15, 16, 22, 0.6); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 12px 14px; margin-bottom: 14px;">
          <div style="font-size: 0.78rem; font-weight: 800; color: #94a3b8; margin-bottom: 8px; display: flex; align-items: center; gap: 6px;">
            <span>🔍</span>
            <span>کالبدشکافی گزینه‌های انحرافی و اهداف طراح آزمون:</span>
          </div>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            ${i.map(([a,r])=>{const d=a===n.correct_option;return`
                <div style="font-size: 0.76rem; line-height: 1.65; padding: 4px 8px; border-radius: 6px; ${d?"background: rgba(16, 185, 129, 0.08);":""}">
                  <span style="font-weight: 800; margin-left: 4px; ${d?"color: #34d399;":"color: #f87171;"}">
                    گزینه (${a}) ${d?"★ صحیح":"تله"}:
                  </span>
                  <span style="color: #cbd5e1;">${r}</span>
                </div>
              `}).join("")}
          </div>
        </div>
      `:""}

      <!-- 💡 نکته طلایی و گایدلاین بالینی (Clinical Pearl) -->
      ${n.clinical_pearl?`
        <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(217, 119, 6, 0.05) 100%); border: 1px solid rgba(245, 158, 11, 0.3); border-right: 4px solid #f59e0b; border-radius: 12px; padding: 12px 14px; margin-bottom: 12px;">
          <div style="font-size: 0.8rem; font-weight: 800; color: #fbbf24; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
            <span style="font-size: 1rem;">💡</span>
            <span>نکته طلایی و استدلال رفرنس بالینی (Clinical Pearl):</span>
          </div>
          <p style="font-size: 0.78rem; color: #fef3c7; line-height: 1.75; margin: 0;">
            ${n.clinical_pearl}
          </p>
        </div>
      `:""}

      <!-- ⚡ رمز طلایی طراحان (Mnemonic) -->
      ${n.mnemonic?`
        <div style="background: linear-gradient(135deg, rgba(168, 85, 247, 0.1) 0%, rgba(147, 51, 234, 0.05) 100%); border: 1px solid rgba(168, 85, 247, 0.28); border-right: 4px solid #a855f7; border-radius: 10px; padding: 10px 14px; margin-bottom: 12px;">
          <div style="font-size: 0.78rem; font-weight: 800; color: #c084fc; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
            <span>⚡</span>
            <span>رمز طلایی طراحان:</span>
          </div>
          <p style="font-size: 0.76rem; color: #f3e8ff; line-height: 1.7; margin: 0; font-weight: 600;">
            ${n.mnemonic}
          </p>
        </div>
      `:""}

      <!-- Keywords Tags -->
      ${n.keywords&&n.keywords.length>0?`
        <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-top: 10px;">
          ${n.keywords.map(a=>`<span style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); color: #94a3b8; font-size: 0.68rem; padding: 2px 8px; border-radius: 6px;">#${a}</span>`).join("")}
        </div>
      `:""}

    </div>
  `}function No(){const n=it.length,e={};it.forEach(i=>{const a=i.category||"سایر";e[a]=(e[a]||0)+1});const t=Object.keys(e).sort((i,a)=>e[a]-e[i]),o=it.slice(0,30).map(i=>so(i)).join("");return`
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
            نمایش ۳۰ از ${n} سوال
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
            همه درس‌ها (${n})
          </button>
          ${t.map(i=>`
            <button class="trap-cat-chip" data-cat="${i}" style="background: rgba(255, 255, 255, 0.05); color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.08); font-size: 0.72rem; font-weight: 700; padding: 5px 12px; border-radius: 20px; cursor: pointer; white-space: nowrap; transition: all 0.2s;">
              ${i} (${e[i]})
            </button>
          `).join("")}
        </div>

      </div>

      <!-- Questions Feed Cards Container -->
      <div id="traps-cards-list">
        ${o}
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
  `}function jo(n){const e=Ht.find(i=>i.id===n);if(!e)return`
      <div style="padding: 40px 16px; text-align: center;">
        <div style="font-size: 3rem; margin-bottom: 12px;">😕</div>
        <h2 style="color: white; margin-bottom: 8px;">مقاله یافت نشد</h2>
        <p style="color: var(--text-secondary); margin-bottom: 20px;">مقاله مورد نظر شما در سیستم یافت نشد.</p>
        <button id="btn-back-to-articles" class="btn-primary" style="width: auto; padding: 10px 24px;">← بازگشت به لیست مقالات</button>
      </div>
    `;const t=Array.isArray(e.downloads)&&e.downloads.length>0,o=e.id==="khordad-1405-traps-analysis";return`
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
        ${o?`
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
            ${e.downloads.map(i=>{const a=i.format==="PDF",r=a?"#f43f5e":i.format==="JSON"?"#fbbf24":"#34d399",d=a?"rgba(244, 63, 94, 0.2)":i.format==="JSON"?"rgba(234, 179, 8, 0.2)":"rgba(16, 185, 129, 0.2)",s=a?"rgba(244, 63, 94, 0.4)":i.format==="JSON"?"rgba(234, 179, 8, 0.4)":"rgba(16, 185, 129, 0.4)";return`
                <div class="download-item-card" style="background: rgba(31, 32, 41, 0.85); border: 1.5px solid ${a?"rgba(244, 63, 94, 0.35)":"rgba(255, 255, 255, 0.08)"}; border-radius: 12px; padding: 14px; display: flex; flex-direction: column; justify-content: space-between; gap: 12px; ${a?"box-shadow: 0 4px 16px rgba(244, 63, 94, 0.15);":""}">
                  <div>
                    <div style="display: flex; align-items: center; justify-content: space-between; gap: 6px; margin-bottom: 6px;">
                      <span style="font-size: 0.68rem; font-weight: 800; background: ${d}; color: ${r}; border: 1px solid ${s}; padding: 2px 8px; border-radius: 6px;">
                        ${i.format}
                      </span>
                      <span style="font-size: 0.68rem; color: #94a3b8; font-family: 'Outfit';">
                        📦 ${i.size||"حجم مناسب"}
                      </span>
                    </div>
                    <h4 style="font-size: 0.86rem; font-weight: 700; color: #ffffff; margin: 0 0 4px 0; line-height: 1.4;">
                      ${i.title}
                    </h4>
                    <p style="font-size: 0.72rem; color: #94a3b8; line-height: 1.5; margin: 0;">
                      ${i.description}
                    </p>
                  </div>

                  ${a?`
                    <a 
                      href="${i.url||"/downloads/Khordad1405_Traps.pdf"}" 
                      download="${i.filename||"Khordad1405_Traps.pdf"}" 
                      target="_blank"
                      style="text-decoration: none; width: 100%; box-sizing: border-box; display: flex; align-items: center; justify-content: center; gap: 8px; background: linear-gradient(135deg, #e11d48 0%, #be123c 100%); color: #ffffff; border: none; padding: 9px 14px; border-radius: 8px; font-size: 0.8rem; font-weight: 800; cursor: pointer; box-shadow: 0 4px 14px rgba(225, 29, 72, 0.4); transition: all 0.2s ease;"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                      <span>دانلود مستقیم جزوه (${i.format})</span>
                    </a>
                  `:`
                    <button 
                      class="btn-article-download" 
                      data-url="${i.url}" 
                      data-filename="${i.filename}" 
                      data-format="${i.format}"
                      style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%); color: #ffffff; border: none; padding: 8px 14px; border-radius: 8px; font-size: 0.78rem; font-weight: 700; cursor: pointer; box-shadow: 0 4px 14px rgba(124, 58, 237, 0.35); transition: all 0.2s ease;"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
                      <span>دریافت فایل (${i.format})</span>
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
        ${o?No():""}
      </div>

      <!-- Action Buttons -->
      <div style="display: flex; gap: 8px; margin-top: 16px; flex-wrap: wrap;">
        ${o?`
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
  `}function Po(n){if(n!=="khordad-1405-traps-analysis")return;const e=document.getElementById("traps-cards-list"),t=document.getElementById("traps-search-input"),o=document.getElementById("traps-count-badge"),i=document.getElementById("btn-traps-load-more"),a=document.getElementById("btn-traps-load-all"),r=document.getElementById("traps-load-more-wrapper"),d=document.querySelectorAll(".trap-cat-chip");if(!e)return;let s="all",l="",c=30;function f(){let m=it;if(s!=="all"&&(m=m.filter(u=>u.category===s)),l.trim()){const u=l.trim().toLowerCase();m=m.filter(g=>g.question&&g.question.toLowerCase().includes(u)||g.question_trap&&g.question_trap.toLowerCase().includes(u)||g.clinical_pearl&&g.clinical_pearl.toLowerCase().includes(u)||g.mnemonic&&g.mnemonic.toLowerCase().includes(u)||Array.isArray(g.keywords)&&g.keywords.some(b=>b.toLowerCase().includes(u))||Array.isArray(g.options)&&g.options.some(b=>b.toLowerCase().includes(u)))}const y=m.length,w=m.slice(0,c);w.length===0?e.innerHTML=`
        <div style="text-align: center; padding: 40px 16px; background: rgba(0,0,0,0.2); border-radius: 12px; border: 1px dashed rgba(255,255,255,0.1);">
          <div style="font-size: 2rem; margin-bottom: 8px;">🔍</div>
          <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">هیچ تستی با این عبارت یا در این دسته‌بندی یافت نشد.</p>
        </div>
      `:e.innerHTML=w.map(u=>so(u)).join(""),o&&(o.textContent=`نمایش ${w.length} از ${y} سوال`),r&&(w.length>=y?r.style.display="none":r.style.display="block")}if(t){let m=null;t.oninput=y=>{clearTimeout(m),m=setTimeout(()=>{l=y.target.value,c=30,f()},150)}}d.forEach(m=>{m.onclick=()=>{d.forEach(y=>{y.style.background="rgba(255, 255, 255, 0.05)",y.style.color="#cbd5e1",y.style.border="1px solid rgba(255, 255, 255, 0.08)"}),m.style.background="#7c3aed",m.style.color="#ffffff",m.style.border="none",s=m.dataset.cat||"all",c=30,f()}}),i&&(i.onclick=()=>{c+=30,f()}),a&&(a.onclick=()=>{c=it.length,f()})}typeof window<"u"&&(window.bindSingleArticleEvents=Po);function Oo(n={}){const e=n.selectedArticleId!==void 0?n.selectedArticleId:window.appState?window.appState.selectedArticleId:null;return e==="questions-1404"?fo():e?jo(e):Do(n)}function Ro(){typeof window.renderApp=="function"&&window.renderApp()}typeof window<"u"&&(window.renderArticlesView=Oo,window.initArticlesView=Ro);const[Bo,Lo]=p.getTodayJalali();let rt=Bo,st=Lo;window.getSelectedRoutinesDate=function(){return window.selectedRoutinesDate||(window.selectedRoutinesDate=p.getTodayJalali()),window.selectedRoutinesDate};window.setSelectedRoutinesDate=function(n,e,t){window.selectedRoutinesDate=[n,e,t],rt=n,st=e,window.renderApp&&window.renderApp()};const Gt=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],Jo=["✨","💧","🏃","😴","🚶","🧘","🥗","📚","🛌","🌙","☕","💊","💻","🎯","🔥","⭐","📝","🍎","🧠","🚴","📖","💪","🎨","🎧","⏰","🏊","🥊","☀️","⚡","🏆"];window.habitModalSelectedEmoji=window.habitModalSelectedEmoji||"✨";window.habitModalEditingId=null;window.selectHabitEmoji=n=>{window.habitModalSelectedEmoji=n;const e=document.getElementById("habit-emoji-preview");e&&(e.textContent=n,e.style.transform="scale(1.25)",setTimeout(()=>{e&&(e.style.transform="scale(1)")},150)),document.querySelectorAll(".habit-emoji-picker-btn").forEach(t=>{t.dataset.emoji===n?(t.style.background="rgba(56, 189, 248, 0.25)",t.style.borderColor="#38bdf8",t.style.transform="scale(1.15)",t.style.boxShadow="0 0 12px rgba(56, 189, 248, 0.4)"):(t.style.background="rgba(255, 255, 255, 0.05)",t.style.borderColor="rgba(255, 255, 255, 0.1)",t.style.transform="scale(1)",t.style.boxShadow="none")})};window.triggerCompletionBurst=n=>{try{const e=n?n.clientX||n.pageX:window.innerWidth/2,t=n?n.clientY||n.pageY:window.innerHeight/2,o=["✨","⭐","🎉","🔥","🌟","💥"],i=document.createElement("div");i.style.cssText=`position: fixed; left: ${e}px; top: ${t}px; pointer-events: none; z-index: 99999;`,document.body.appendChild(i);for(let a=0;a<6;a++){const r=document.createElement("span"),d=o[Math.floor(Math.random()*o.length)],s=Math.PI*2*a/6+(Math.random()*.4-.2),l=35+Math.random()*25,c=Math.cos(s)*l,f=Math.sin(s)*l-15;r.textContent=d,r.style.cssText=`
        position: absolute; left: 0; top: 0; font-size: 1.1rem;
        transform: translate(-50%, -50%) scale(0.5); opacity: 1;
        transition: transform 0.55s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.55s ease;
      `,i.appendChild(r),requestAnimationFrame(()=>{r.style.transform=`translate(${c}px, ${f}px) scale(1.3) rotate(${Math.random()*60-30}deg)`,r.style.opacity="0"})}setTimeout(()=>{i&&i.parentNode&&i.parentNode.removeChild(i)},600)}catch{}};window.handleHabitDayClick=(n,e,t=null)=>{var d,s;t&&typeof t.stopPropagation=="function"&&t.stopPropagation();const o=p.getHabits(),i=`${rt}_${st}`,a=o.find(l=>l.id==n||String(l.id)===String(n)),r=((s=(d=a==null?void 0:a.completedDays)==null?void 0:d[i])==null?void 0:s[e])||0;p.cycleHabitDay(n,i,e),r===0&&window.triggerCompletionBurst&&window.triggerCompletionBurst(t),window.renderApp&&window.renderApp()};window.toggleTodayHabit=(n,e=null)=>{var l,c;e&&typeof e.stopPropagation=="function"&&e.stopPropagation();const[t,o,i]=window.getSelectedRoutinesDate(),a=`${t}_${o}`,d=p.getHabits().find(f=>f.id==n||String(f.id)===String(n)),s=((c=(l=d==null?void 0:d.completedDays)==null?void 0:l[a])==null?void 0:c[i])||0;p.cycleHabitDay(n,a,i),s===0&&window.triggerCompletionBurst&&window.triggerCompletionBurst(e),window.renderApp&&window.renderApp()};window.toggleRoutineChecklistItem=(n,e=null)=>{e&&typeof e.stopPropagation=="function"&&e.stopPropagation();const o=(p.getRoutineChecklist()||[]).find(a=>a.id==n||String(a.id)===String(n)),i=o?!o.completed:!0;p.toggleRoutineChecklistItem(n),i&&window.triggerCompletionBurst&&window.triggerCompletionBurst(e),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp()};window.addRoutineChecklistItem=()=>{const n=document.getElementById("input-routine-checklist-text");!n||!n.value.trim()||(p.addRoutineChecklistItem(n.value.trim()),n.value="",window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp())};window.deleteRoutineChecklistItem=n=>{p.deleteRoutineChecklistItem(n),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(0),window.renderApp&&window.renderApp()};window.handleChangeMonth=n=>{st=parseInt(n),window.renderApp&&window.renderApp()};window.handleChangeYear=n=>{rt=parseInt(n),window.renderApp&&window.renderApp()};window.openAddHabitModal=()=>{window.habitModalEditingId=null,window.habitModalSelectedEmoji="✨";const n=document.getElementById("add-habit-modal"),e=document.getElementById("habit-modal-title"),t=document.getElementById("habit-title"),o=document.getElementById("btn-save-habit-modal");e&&(e.textContent="✨ افزودن روتین و عادت جدید"),t&&(t.value=""),o&&(o.textContent="ذخیره روتین"),n&&(n.style.display="flex"),window.selectHabitEmoji("✨"),t&&setTimeout(()=>t.focus(),100)};window.openEditHabitModal=n=>{const t=p.getHabits().find(s=>s.id==n||String(s.id)===String(n));if(!t)return;window.habitModalEditingId=n;const o=t.emoji||"✨";window.habitModalSelectedEmoji=o;const i=document.getElementById("add-habit-modal"),a=document.getElementById("habit-modal-title"),r=document.getElementById("habit-title"),d=document.getElementById("btn-save-habit-modal");a&&(a.textContent="✏️ ویرایش روتین و عادت"),r&&(r.value=t.title||""),d&&(d.textContent="به‌روزرسانی روتین"),i&&(i.style.display="flex"),window.selectHabitEmoji(o),r&&setTimeout(()=>r.focus(),100)};window.closeAddHabitModal=()=>{const n=document.getElementById("add-habit-modal");n&&(n.style.display="none"),window.habitModalEditingId=null};window.saveNewHabit=()=>{const n=document.getElementById("habit-title"),e=n?n.value.trim():"";if(!e){alert("لطفاً عنوان روتین یا عادت را وارد کنید.");return}const t=window.habitModalSelectedEmoji||"✨";window.habitModalEditingId?p.updateHabit(window.habitModalEditingId,{title:e,emoji:t}):p.addHabit(e,"روزانه","08:00",t),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.closeAddHabitModal(),window.renderApp()};window.deleteHabitGlobal=n=>{confirm("آیا از حذف این عادت اطمینان دارید؟")&&(p.deleteHabit(n),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(0),window.renderApp())};window.planexPublicRoutines=[];window.planexHasFetchedRoutines=!1;window.fetchPublicRoutines=async()=>{try{const n=localStorage.getItem("planex_jwt_token");if(!n)return;const e=new AbortController,t=setTimeout(()=>e.abort(),3e3),o=await fetch(`${ce}/api/routines/public.php`,{headers:{Authorization:`Bearer ${n}`},signal:e.signal}).finally(()=>clearTimeout(t)),i=await o.json();i.success?(window.planexPublicRoutines=i.routines,window.planexHasFetchedRoutines=!0,window.renderApp()):o.status===403&&(window.planexReciprocityError=i.message,window.planexHasFetchedRoutines=!0,window.renderApp())}catch(n){console.error("Error fetching routines",n)}};window.copyPublicRoutine=async n=>{try{const e=localStorage.getItem("planex_jwt_token");if(!e){alert("لطفاً ابتدا وارد حساب کاربری خود شوید.");return}const t=new AbortController,o=setTimeout(()=>t.abort(),3e3),a=await(await fetch(`${ce}/api/routines/copy.php?id=${encodeURIComponent(n)}`,{method:"POST",headers:{Authorization:`Bearer ${e}`},signal:t.signal}).finally(()=>clearTimeout(o))).json();a.success?(alert("✅ "+a.message),p.addHabit("روتین کپی شده جدید"),window.renderApp()):alert("❌ خطا: "+a.message)}catch{alert("خطا در برقراری ارتباط با سرور.")}};window.toggleMyRoutinePublic=(n,e)=>{alert(!e?"📢 روتین شما عمومی شد!":"🔒 روتین شما خصوصی شد."),window.renderApp()};window.PRE_MADE_ROUTINES=[{id:"miracle_morning",title:"🌅 معجزه صبحگاهی (Miracle Morning)",desc:"شروع پرانرژی روز با تمرکز، ذهن‌آگاهی و انگیزه بالا",category:"Morning",tasks:["🛏️ مرتب کردن تخت خواب (۱ دقیقه)","🧘 تنفس عمیق و مدیتیشن صبحگاهی (۱ دقیقه)","🗣️ بیان اهداف با جملات تأکیدی مثبت (۱ دقیقه)","🖼️ تجسم خودِ آینده و اهداف بزرگ (۱ دقیقه)","🏋️‍♂️ حرکات کششی و ورزش سبک (۱ دقیقه)","📖 مطالعه و یادگیری مطلب جدید (۱ دقیقه)","📕 ژورنال‌نویسی و ثبت افکار و احساسات (۱ دقیقه)"]},{id:"calm_ready_morning",title:"☕ صبح آرام و آماده (Calm & Ready Morning)",desc:"آماده‌سازی روزانه بدون عجله، استرس و سردرگمی",category:"Morning",tasks:["💧 نوشیدن یک لیوان آب ولرم (۱ دقیقه)","🚿 دوش گرفتن و شادابی صبح (۱۵ دقیقه)","🧴 روتین مراقبت از پوست (۴ دقیقه)","👕 تعویض لباس و آماده شدن (۵ دقیقه)","💇 استایل مو و ظاهر (۲۰ دقیقه)","📋 بررسی جدول و برنامه روزانه (۵ دقیقه)","👜 جمع‌آوری و آماده کردن وسایل ضروری (۱۰ دقیقه)"]},{id:"deep_study",title:"📚 آماده‌سازی مطالعه عمیق (Study Routine)",desc:"فراهم کردن شرایط محیطی برای حداکثر یادگیری و تمرکز",category:"Study",tasks:["🎒 آماده کردن تمام کتب و جزوات مطالعه (۱۰ دقیقه)","💡 تنظیم نور، زاویه چراغ و روشنایی محیط (۱ دقیقه)","📋 مشخص کردن پارت‌ها و بودجه‌بندی روز (۱ دقیقه)","🧹 مرتب و خلوت کردن کامل میز کار (۱ دقیقه)","⏱️ بلاک تمرکز و مطالعه عمیق بدون حواس‌پرتی (۵۰ دقیقه)"]},{id:"exercise_health",title:"🏃‍♀️ ورزش، تحرک و شادابی (Exercise & Body)",desc:"کاهش استرس روزانه، افزایش انعطاف‌پذیری و تقویت حافظه",category:"Exercise",tasks:["🏋️ تمرینات ورزشی و بدنسازی (۱۵ دقیقه)","🤸 حرکات کششی و افزایش انعطاف بدن (۱۰ دقیقه)","🏃 دویدن یا پیاده‌روی سریع (۳۰ دقیقه)","🧘 یوگا و تنفس پیوسته ضد اضطراب (۲۰ دقیقه)","🌳 پیاده‌روی در فضای باز و هوای آزاد (۴۰ دقیقه)"]},{id:"productivity_boost",title:"🚀 افزایش بهره‌وری و اقدام سریع (Productivity)",desc:"شکستن تنبلی، اولویت‌بندی تسک‌ها و شروع بدون معطلی",category:"Productivity",tasks:["🎯 انتخاب مهم‌ترین و سرنوشت‌سازترین کار امروز","📝 یادداشت ۳ تسک حیاتی و کلیدی روز (۵ دقیقه)","📌 انتخاب ۱ تسک فوری برای ۳۰ دقیقه آینده (۳ دقیقه)","⚡ شمارش معکوس ۵ ثانیه‌ای و پرتاب به سمت عمل (۵ ثانیه)","📍 تعیین دقیق زمان و مکان اجرای تسک (۳ دقیقه)"]},{id:"relaxation_mind",title:"🌸 آرامش، ذهن‌آگاهی و تخلیه روان (Relaxation)",desc:"استراحت اصولی مغز، آرام‌سازی ذهن و بازیابی انرژی",category:"Relaxation",tasks:["👥 تماس یا پیام به یک دوست و احوال‌پرسی (۱۰ دقیقه)","📝 یادداشت‌برداری آزاد و تخلیه ذهن در دفترچه (۲۰ دقیقه)","🌤️ خیره شدن به آسمان، بستن چشم‌ها و حس نور خورشید (۲ دقیقه)","🧹 مرتب کردن محیط اطراف برای آرامش بصری (۱۰ دقیقه)","🪷 بازتاب روز، سپاسگزاری و مرور حس و حال (۵ دقیقه)"]},{id:"step_away_stress",title:"🌿 فاصله‌گیری از استرس (Step Away from Stress)",desc:"تکنیک‌های ساده و سریع برای سبک کردن ذهن در فشارهای کاری",category:"Stress Relief",tasks:["🧠 توجه و پذیرش احساس فعلی بدون قضاوت (۱ دقیقه)","✏️ نوشتن افکار نگران‌کننده روی کاغذ (۲ دقیقه)","🤝 نگاه به این موقعیت از زاویه دید یک دوست صمیمی (۲ دقیقه)","🎯 خالی کردن ذهن و شروع با یک اقدام فیزیکی بسیار کوچک (۳ دقیقه)","🌸 مشاهده و احساس تغییر درونی ایجاد شده (۱ دقیقه)"]},{id:"sos_breathing",title:"🫁 تنفس نجات‌بخش و گراندینگ (SOS Breathing)",desc:"وقتی تنفس سنگین می‌شود و نیاز به اتصال به لحظه حال داری",category:"SOS",tasks:["🧘 الگوی تنفسی ۴ به ۶ عمیق (۱ دقیقه)","❤️ گراندینگ و قرار دادن دست‌ها روی قفسه سینه/کف دست‌ها (۱ دقیقه)","🌳 خیره شدن به یک نقطه ثابت در محیط (۱ دقیقه)","🎧 گوش سپردن فعال به ۳ صدای مختلف محیطی (۱ دقیقه)","🪷 ۳ بار بازدم آرام، عمیق و طولانی (۱ دقیقه)"]},{id:"sos_anxiety",title:"🛡️ مهار آنی اضطراب حاد (When You Feel Anxious)",desc:"تکنیک حواس پنج‌گانه برای بازگشت سریع به زمان حال",category:"SOS",tasks:["👓 پیدا کردن ۵ شیء با رنگ‌های مختلف در اتاق (۱ دقیقه)","🎧 شناسایی و تفکیک ۳ صدای پیرامون (۱ دقیقه)","✍️ یادداشت یک حس بدنی فعلی (۱ دقیقه)","🧊 لمس یا شستن دست‌ها با آب خنک (۱ دقیقه)","☕ در دست گرفتن یک فنجان یا نوشیدنی گرم (۱ دقیقه)"]},{id:"sos_mood_swings",title:"⚖️ بازگشت به تعادل احساسی (When Mood Swings)",desc:"کنترل نوسانات خلقی ناگهانی و بازیابی آرامش درونی",category:"SOS",tasks:["🪷 احساس دمای محیط و تماس نسیم/سرما (۱ دقیقه)","🎧 پخش و شنیدن یک قطعه صوتی آرامش‌بخش (۱ دقیقه)","❤️ فشردن ملایم کف پاها به زمین و حس تکیه‌گاه (۱ دقیقه)","💡 فشردن انگشتان دست تک‌به‌تک و متمرکز (۱ دقیقه)","✍️ نوشتن جمله آرام‌بخش «من در امانم و حالم خوب است» (۱ دقیقه)"]}];window.clonePreMadeRoutine=n=>{const e=window.PRE_MADE_ROUTINES.find(t=>t.id===n);e&&(e.tasks.forEach(t=>{p.addHabit(t)}),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),alert(`✅ تمام تسک‌های روتین "${e.title}" با موفقیت به لیست عادات شما اضافه شد!`),window.renderApp())};function Go(n,e){let t="";for(let o=0;o<5;o++){const i=o===4?3:7;let a=0;for(let l=o*7+1;l<=Math.min((o+1)*7,31);l++)a+=n[l-1]||0;const r=i*e,d=r>0?Math.round(a/r*100):0,s=100.5-100.5*d/100;t+='<div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">',t+='<div style="position: relative; width: 40px; height: 40px;">',t+='<svg width="40" height="40" viewBox="0 0 40 40">',t+='<circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="4"></circle>',t+='<circle cx="20" cy="20" r="16" fill="none" stroke="var(--primary-accent)" stroke-width="4" stroke-dasharray="100.5" stroke-dashoffset="'+s+'" stroke-linecap="round" transform="rotate(-90 20 20)"></circle>',t+="</svg>",t+='<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; font-family: Outfit;">'+d+"%</div>",t+="</div>",t+='<span style="font-size: 0.6rem; color: var(--text-secondary);">هفته '+(o+1)+"</span>",t+="</div>"}return t}window.setJournalMood=function(n){const[e,t,o]=window.getSelectedRoutinesDate(),i=`${e}_${t}_${o}`,a=p.getJournalEntry?p.getJournalEntry(i):{mood:"",rating:0,note:""};a.mood=n,p.saveJournalEntry&&p.saveJournalEntry(i,a.mood,a.rating,a.note),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp()};window.setJournalRating=function(n){const[e,t,o]=window.getSelectedRoutinesDate(),i=`${e}_${t}_${o}`,a=p.getJournalEntry?p.getJournalEntry(i):{mood:"",rating:0,note:""};a.rating=n,p.saveJournalEntry&&p.saveJournalEntry(i,a.mood,a.rating,a.note),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp()};window.saveJournalNote=function(n){const[e,t,o]=window.getSelectedRoutinesDate(),i=`${e}_${t}_${o}`,a=p.getJournalEntry?p.getJournalEntry(i):{mood:"",rating:0,note:""};a.note!==n&&(a.note=n,p.saveJournalEntry&&p.saveJournalEntry(i,a.mood,a.rating,a.note),window.triggerActionDrivenPush&&window.triggerActionDrivenPush())};function xn(n={}){const{routinesAccordions:e={consultation:!1,statsChart:!1,habitTracker:!1}}=n,t=p.getHabits(),o=`${rt}_${st}`,i=p.getRoutineChecklist()||[];let a=t.length,r=a*31,d=0;const s=new Array(31).fill(0);t.forEach(C=>{var R;const I=((R=C.completedDays)==null?void 0:R[o])||{};for(let E=1;E<=31;E++)I[E]===1&&(d++,s[E-1]++)});const l=r>0?Math.round(d/r*100):0,[c,f,m]=window.getSelectedRoutinesDate(),y=`${c}_${f}`,w=C=>String(C).replace(/[0-9]/g,I=>"۰۱۲۳۴۵۶۷۸۹"[I]);let u=0;t.forEach(C=>{var R;(((R=C.completedDays)==null?void 0:R[y])||{})[m]===1&&u++});const g=a>0?Math.round(u/a*100):0;!window.planexHasFetchedRoutines&&localStorage.getItem("planex_jwt_token")&&(window.planexHasFetchedRoutines=!0,setTimeout(()=>window.fetchPublicRoutines(),500));const b=new Date,v=(b.getDay()+1)%7;let A='<div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 12px; margin-bottom: 16px; scrollbar-width: none; direction: rtl;">';const k=["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه"];for(let C=0;C<7;C++){const I=new Date(b);I.setDate(b.getDate()-v+C);const[R,E,j]=p.gregorianToJalali(I.getFullYear(),I.getMonth()+1,I.getDate()),J=`${R}_${E}`;let G=0;t.forEach(N=>{var q,W;((W=(q=N.completedDays)==null?void 0:q[J])==null?void 0:W[j])===1&&G++});const L=a>0?G/a:0,F=R===c&&E===f&&j===m,Y=F?"rgba(56, 189, 248, 0.2)":"rgba(255, 255, 255, 0.05)",Q=F?"rgba(56, 189, 248, 0.6)":"rgba(255, 255, 255, 0.1)",Z=L===1&&a>0?"#10b981":L>0?"#f59e0b":"transparent";A+=`
      <div onclick="window.setSelectedRoutinesDate(${R}, ${E}, ${j})"
           style="flex: 1; min-width: 60px; padding: 6px 4px; border-radius: 14px; background: ${Y}; border: 1px solid ${Q}; display: flex; flex-direction: column; align-items: center; cursor: pointer; transition: all 0.2s ease-in-out;">
        <span style="font-size: 0.7rem; color: ${F?"#38bdf8":"#9ca3af"}; margin-bottom: 4px;">${k[C]}</span>
        <span style="font-size: 1.2rem; font-weight: 800; color: ${F?"#fff":"#d1d5db"}; margin-bottom: 8px;">${w(j)}</span>
        <div style="width: 8px; height: 8px; border-radius: 50%; background: ${Z}; border: 1px solid ${L>0?Z:"rgba(255,255,255,0.1)"};"></div>
      </div>
    `}A+="</div>";const T=`${c}_${f}_${m}`,x=p.getJournalEntry?p.getJournalEntry(T):{mood:"",rating:0,note:""};let P=`
    <div class="glass-panel" style="margin-bottom: 16px; border-radius: 18px; border: 1.5px solid rgba(255,255,255,0.1); padding: 16px; direction: rtl;">
      <h3 style="margin: 0 0 12px 0; font-size: 1rem; color: #f8fafc; font-weight: 800;">حال و احساس امروز</h3>
      <div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 8px; margin-bottom: 12px; scrollbar-width: none;">
        ${["❤️","💪","😴","😍","😡","😫","😔","😐","🙂","😄"].map(C=>`
          <button onclick="window.setJournalMood('${C}')" style="flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; border: ${x.mood===C?"2px solid #38bdf8":"1px solid rgba(255,255,255,0.1)"}; background: ${x.mood===C?"rgba(56,189,248,0.2)":"rgba(255,255,255,0.05)"}; font-size: 1.2rem; cursor: pointer;">${C}</button>
        `).join("")}
      </div>
      <h4 style="margin: 0 0 8px 0; font-size: 0.85rem; color: #cbd5e1;">نمره روز</h4>
      <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 8px; margin-bottom: 12px; scrollbar-width: none;">
        ${[1,2,3,4,5,6,7,8,9,10].map(C=>`
          <button onclick="window.setJournalRating(${C})" style="flex-shrink: 0; width: 36px; height: 36px; border-radius: 50%; border: ${x.rating===C?"2px solid #10b981":"1px solid rgba(255,255,255,0.1)"}; background: ${x.rating===C?"rgba(16,185,129,0.2)":"rgba(255,255,255,0.05)"}; color: ${x.rating===C?"#10b981":"#fff"}; font-weight: 800; cursor: pointer;">${w(C)}</button>
        `).join("")}
      </div>
      <h4 style="margin: 0 0 8px 0; font-size: 0.85rem; color: #cbd5e1;">ژورنال امروز</h4>
      <textarea id="journal-note-input" rows="3" placeholder="امروز چطور گذشت؟ چی یاد گرفتی؟ چی حس کردی؟..." style="width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 10px; color: #fff; font-family: inherit; font-size: 0.85rem; margin-bottom: 12px; resize: vertical;" onblur="window.saveJournalNote(this.value)">${x.note}</textarea>
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
                ${w(u)} از ${w(a)} روتین امروز انجام شد (${w(g)}٪)
              </span>
            </div>
          </div>
          <div style="background: #1f2029; border: 1px solid rgba(16, 185, 129, 0.35); color: #10b981; padding: 4px 12px; border-radius: 12px; font-weight: 900; font-size: 0.85rem; font-family: 'Outfit', sans-serif;">
            ${w(g)}٪
          </div>
        </div>

        <!-- Progress Fill Bar -->
        <div style="width: 100%; height: 8px; background: rgba(0, 0, 0, 0.35); border-radius: 6px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.08);">
          <div style="height: 100%; width: ${g}%; background: linear-gradient(90deg, #10b981 0%, #38bdf8 100%); border-radius: 6px; transition: width 0.6s ease; box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);"></div>
        </div>

        <!-- Today's Habits Quick-Toggle List -->
        ${t.length>0?`
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255, 255, 255, 0.08); display: flex; flex-direction: column; gap: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.78rem; font-weight: 700; color: #e2e8f0;">⚡ ثبت سریع عادات امروز (${w(m)} ${Gt[f-1]}):</span>
              <span style="font-size: 0.72rem; color: #94a3b8;">با یک کلیک علامت بزنید</span>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${t.map(C=>{var L,F;const I=((F=(L=C.completedDays)==null?void 0:L[y])==null?void 0:F[m])||0;let R="rgba(255, 255, 255, 0.05)",E="rgba(255, 255, 255, 0.1)",j="#cbd5e1",J="○",G="ثبت نشده";return I===1?(R="rgba(16, 185, 129, 0.22)",E="rgba(16, 185, 129, 0.6)",j="#34d399",J="✓",G="انجام شد"):I===2&&(R="rgba(239, 68, 68, 0.22)",E="rgba(239, 68, 68, 0.6)",j="#f87171",J="✕",G="انجام نشد"),`
                  <button type="button" onclick="window.toggleTodayHabit('${C.id}', event)"
                    style="display: flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 12px; background: ${R}; border: 1px solid ${E}; color: ${j}; cursor: pointer; transition: all 0.2s ease; font-family: inherit; font-size: 0.8rem; font-weight: 700;"
                    title="کلیک برای تغییر وضعیت روتین امروز (انجام شد / انجام نشد / ریست)">
                    <span style="font-size: 0.95rem;">${C.emoji||"✨"}</span>
                    <span>${C.title}</span>
                    <span style="background: rgba(0,0,0,0.3); border-radius: 6px; padding: 1px 6px; font-size: 0.72rem; font-family: 'Outfit'; font-weight: 800;">${J} ${G}</span>
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
                ${Array.from({length:10},(C,I)=>1401+I).map(C=>`<option value="${C}" ${C===rt?"selected":""} style="color: #000;">${C}</option>`).join("")}
              </select>
              
              <div style="display: flex; gap: 6px;">
                ${Gt.map((C,I)=>`
                  <button onclick="window.handleChangeMonth(${I+1})" class="${st===I+1?"btn-primary":"glass-panel"}" style="padding: 6px 12px; border: none; border-radius: 12px; font-size: 0.8rem; white-space: nowrap; cursor: pointer;">
                    ${C}
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
                    ${Array.from({length:31},(C,I)=>`
                      <th style="padding: 4px; font-family: 'Outfit', sans-serif; font-weight: normal; color: var(--text-secondary); width: 26px;">${I+1}</th>
                    `).join("")}
                  </tr>
                </thead>
                <tbody>
                  ${t.length===0?'<tr><td colspan="33" style="padding: 20px; color: var(--text-secondary);">هیچ عادتی ثبت نشده است.</td></tr>':""}
                  ${t.map(C=>{var G;const I=((G=C.completedDays)==null?void 0:G[o])||{};let R=0,E=0,j=0;for(let L=1;L<=31;L++)I[L]===1?(R++,j++):j=0,j>E&&(E=j);const J=Math.round(R/31*100);return`
                    <tr>
                      <td class="habit-matrix-col-title" style="text-align: right; padding-right: 10px; position: sticky; right: 0; background: var(--bg-dark); z-index: 2; border-radius: 0 8px 8px 0; border: 1px solid rgba(255,255,255,0.05); border-left: none;">
                        <div style="display: flex; align-items: center; justify-content: space-between; overflow: hidden; gap: 4px;">
                          <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 600; display: flex; align-items: center; gap: 6px;">
                            <span style="font-size: 1.05rem;">${C.emoji||"✨"}</span>
                            <span>${C.title}</span>
                            ${E>0?`<span style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.35); color: #f59e0b; padding: 1px 6px; border-radius: 8px; font-size: 0.68rem; font-weight: 800; font-family: 'Outfit', sans-serif; display: inline-flex; align-items: center; gap: 2px;" title="استریک پیوستگی روتین">🔥 ${w(E)}</span>`:""}
                          </span>
                          <div style="display: flex; align-items: center; gap: 2px; flex-shrink: 0;">
                            <button onclick="window.openEditHabitModal('${C.id}')" title="ویرایش روتین" style="background:none; border:none; color: #38bdf8; cursor:pointer; font-size: 0.82rem; padding: 2px 4px; opacity: 0.85; transition: transform 0.15s;" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">✏️</button>
                            <button onclick="window.deleteHabitGlobal('${C.id}')" title="حذف روتین" style="background:none; border:none; color: #ef4444; cursor:pointer; font-size: 0.82rem; padding: 2px 4px; opacity: 0.85; transition: transform 0.15s;" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">✕</button>
                          </div>
                        </div>
                      </td>
                      ${Array.from({length:31},(L,F)=>{const Y=I[F+1]||0;let Q="rgba(255,255,255,0.05)",Z="transparent",N="○";return Y===1&&(Q="rgba(16, 185, 129, 0.2)",Z="#10b981",N="✓"),Y===2&&(Q="rgba(239, 68, 68, 0.2)",Z="#ef4444",N="✕"),`
                          <td onclick="window.handleHabitDayClick('${C.id}', ${F+1}, event)" style="background: ${Q}; color: ${Z}; border-radius: 4px; cursor: pointer; transition: 0.2s; border: 1px solid rgba(255,255,255,0.02); height: 26px;">
                            ${Y===0?"":N}
                          </td>
                        `}).join("")}
                      <td style="color: var(--text-primary); font-family: 'Outfit'; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.05); border-right: none; border-left: none;">${R}</td>
                      <td style="color: #f59e0b; font-family: 'Outfit'; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.05); border-right: none; border-left: none;">${E}</td>
                      <td style="color: #10b981; font-weight: bold; font-family: 'Outfit'; border-radius: 8px 0 0 8px; border: 1px solid rgba(255,255,255,0.05); border-right: none;">${J}%</td>
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
                  ${Go(s,a)}
                </div>
              </div>
            </div>

            <!-- 2. Daily Trend Bar Chart Card -->
            ${(()=>{const C=Math.max(...s,1),I=R=>String(R).replace(/[0-9]/g,E=>"۰۱۲۳۴۵۶۷۸۹"[E]);return`
                <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 15px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 8px;">
                    <h3 style="font-size: 0.95rem; color: #38bdf8; margin: 0;">📊 نمودار روند روزانه عادات (۳۱ روز ماه)</h3>
                    <span style="font-size: 0.75rem; color: var(--text-secondary);">مقیاس پویا: حداکثر ${I(C)} عادت در روز</span>
                  </div>

                  <div style="overflow-x: auto; padding-bottom: 10px;">
                    <div style="display: flex; align-items: flex-end; height: 140px; gap: 4px; min-width: 650px; padding: 10px 4px 0 4px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                      ${s.map((R,E)=>{const j=R>0?R/C*100:0,J=R===C&&R>0;return`
                          <div style="flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; position: relative;">
                            <span style="font-size: 0.7rem; color: ${J?"#ec4899":j>0?"#38bdf8":"transparent"}; font-family: 'Outfit'; margin-bottom: 3px; font-weight: bold;">
                              ${R>0?I(R):""}
                            </span>
                            <div style="width: 100%; background: ${J?"linear-gradient(180deg, #ec4899 0%, #a855f7 100%)":j>0?"linear-gradient(180deg, #38bdf8 0%, #6366f1 100%)":"rgba(255,255,255,0.05)"}; height: ${R>0?Math.max(j,8):4}%; border-radius: 4px 4px 0 0; transition: all 0.3s; ${j>0?"box-shadow: 0 2px 8px rgba(56,189,248,0.3);":""}" title="روز ${I(E+1)}: ${I(R)} عادت"></div>
                            <span style="font-size: 0.7rem; color: ${J?"#ec4899":"var(--text-secondary)"}; font-family: 'Outfit'; margin-top: 6px; font-weight: ${J?"bold":"normal"};">${I(E+1)}</span>
                          </div>
                        `}).join("")}
                    </div>
                  </div>
                </div>

                <!-- 3. Compact Habit Heatmaps -->
                <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 15px; margin-top: 15px;">
                  <h3 style="font-size: 0.95rem; color: #38bdf8; margin: 0 0 12px 0;">نقشه فعالیت عادت‌ها (ماه جاری)</h3>
                  <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;">
                    ${t.map(R=>{var J;const E=((J=R.completedDays)==null?void 0:J[y])||{};let j="";for(let G=1;G<=31;G++){const L=E[G]===1;j+=`<div style="width: 8px; height: 8px; border-radius: 2px; background: ${L?"#10b981":"rgba(255,255,255,0.05)"}; border: 1px solid ${L?"#059669":"rgba(255,255,255,0.1)"};" title="روز ${G}"></div>`}return`
                        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 10px; min-width: 150px; flex: 1;">
                          <div style="font-size: 0.8rem; color: #e2e8f0; font-weight: 700; margin-bottom: 6px; text-align: center;">${R.emoji||"✨"} ${R.title}</div>
                          <div style="display: grid; grid-template-columns: repeat(10, 1fr); gap: 3px; justify-content: center;">
                            ${j}
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
          ${i.length===0?'<p style="font-size: 0.85rem; color: var(--text-secondary);">هیچ نکته یا چک‌لیستی اضافه نشده است.</p>':""}
          ${i.map(C=>`
            <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.03); padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);">
              <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; color: ${C.completed?"var(--text-muted)":"white"}; text-decoration: ${C.completed?"line-through":"none"}; flex: 1;">
                <input type="checkbox" class="chk-routine-item" onclick="window.toggleRoutineChecklistItem('${C.id}', event)" data-id="${C.id}" ${C.completed?"checked":""} style="width: 18px; height: 18px; accent-color: #10b981; cursor: pointer;" />
                <span style="font-size: 0.9rem; font-weight: 500;">${C.text}</span>
              </label>
              <button class="btn-delete-routine-item" onclick="window.deleteRoutineChecklistItem('${C.id}')" data-id="${C.id}" style="background: none; border: none; color: #ef4444; cursor: pointer;">🗑️</button>
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
          ${window.PRE_MADE_ROUTINES.map(C=>`
            <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 12px; padding: 15px; display: flex; flex-direction: column; transition: 0.2s;" onmouseover="this.style.background='rgba(16, 185, 129, 0.05)'" onmouseout="this.style.background='rgba(255,255,255,0.02)'">
              <div style="font-weight: bold; color: white; font-size: 1.05rem; margin-bottom: 5px;">${C.title}</div>
              <p style="font-size: 0.75rem; color: #34d399; margin-bottom: 12px;">${C.desc}</p>
              <ul style="padding-right: 18px; margin: 0 0 15px 0; font-size: 0.75rem; color: var(--text-secondary); flex-grow: 1; line-height: 1.6;">
                ${C.tasks.map(I=>`<li style="margin-bottom: 4px;">${I}</li>`).join("")}
              </ul>
              <button onclick="window.clonePreMadeRoutine('${C.id}')" class="btn-primary" style="padding: 8px; font-size: 0.8rem; width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px; background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3);">
                ➕ افزودن به روتین‌های من
              </button>
            </div>
          `).join("")}
        </div>
      </details>
      ${P}
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
          ${Jo.map(C=>`
            <button type="button"
                    class="habit-emoji-picker-btn"
                    data-emoji="${C}"
                    onclick="window.selectHabitEmoji('${C}')"
                    style="height: 40px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; font-size: 1.35rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s ease;">
              ${C}
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
  `}function Ut(){const n=_&&typeof _.getUserProfile=="function"?_.getUserProfile():{nickname:"",target:"",avatar_url:""};let e=null;try{e=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}")}catch{}const t=n.nickname||n.name||(e==null?void 0:e.full_name)||(e==null?void 0:e.name)||"",o=t&&!_e(t)?t.trim():"",i=n.target||n.targetField||n.major||"",r=localStorage.getItem("planex_user_avatar")||""||n.avatar_url||n.avatarUrl||n.avatar||n.photo_url||(e==null?void 0:e.avatar_url)||"",d=["🩺 آزمون پره‌اینترنی","👨‍⚕️ آزمون دستیاری","🧬 کنکور تجربی","📐 کنکور ریاضی","📚 کنکور انسانی","⚖️ آزمون وکالت","🎓 ارشد علوم پزشکی","🌐 آزمون آیلتس / زبان"],l=[...Array.from({length:8},(c,f)=>`https://api.dicebear.com/7.x/adventurer/svg?seed=Adv${f+1}`),...Array.from({length:8},(c,f)=>`https://api.dicebear.com/7.x/bottts/svg?seed=Bot${f+1}`),...Array.from({length:8},(c,f)=>`https://api.dicebear.com/7.x/micah/svg?seed=Micah${f+1}`),...Array.from({length:8},(c,f)=>`https://api.dicebear.com/7.x/fun-emoji/svg?seed=Emo${f+1}`),...Array.from({length:8},(c,f)=>`https://api.dicebear.com/7.x/notionists/svg?seed=Notion${f+1}`)].map((c,f)=>`
      <div class="avatar-preset-item" onclick="window.selectEditProfileAvatar('${c}')" style="width: 52px; height: 52px; aspect-ratio: 1/1; border-radius: 50%; cursor: pointer; border: 2.5px solid ${r===c?"#7c3aed":"rgba(255,255,255,0.1)"}; transition: all 0.2s ease; overflow: hidden; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; position: relative; flex-shrink: 0;">
        <img src="${c}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://api.dicebear.com/7.x/bottts/svg?seed=fallback${f}'" />
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
          ${o?'<button type="button" aria-label="بستن" onclick="window.closeActiveModal();" style="min-width: 44px; min-height: 44px; width: 44px; height: 44px; background: #1f2029; border: 1px solid rgba(255,255,255,0.12); color: #cbd5e1; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; transition: all 0.15s ease;">✕</button>':""}
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
            <input type="text" id="input-edit-profile-name" value="${o}" placeholder="مثال: علی محمدی" class="form-input" style="width: 100%; box-sizing: border-box; padding: 12px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); background: #1f2029; color: white; font-size: 0.88rem; font-weight: 700;" />
          </div>

          <!-- Target / Major Input & Popular Chips -->
          <div>
            <label style="display: block; margin-bottom: 6px; color: #cbd5e1; font-size: 0.8rem; font-weight: 800;">
              رشته تحصیلی یا هدف آزمون
            </label>
            <input type="text" id="input-edit-profile-target" value="${i}" placeholder="مثال: آزمون پره‌اینترنی / کنکور تجربی" class="form-input" style="width: 100%; box-sizing: border-box; padding: 12px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); background: #1f2029; color: white; font-size: 0.85rem;" />
            
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
  `}window.openEditProfileModal=function(){window.appState&&(window.appState.activeModal="editProfile",window.renderApp&&window.renderApp())};window.closeEditProfileModal=function(){window.closeActiveModal?window.closeActiveModal():window.appState&&(window.appState.activeModal=null,window.renderApp&&window.renderApp())};window.selectEditProfileAvatar=function(n){const e=document.getElementById("input-edit-profile-avatar-url");e&&(e.value=n);const t=document.getElementById("edit-profile-avatar-preview-box");t&&(t.innerHTML=`<img id="edit-profile-avatar-img" src="${n}" style="width: 100%; height: 100%; object-fit: cover;" />`)};window.promptEditProfileAvatarUrl=function(){const n=prompt("لطفاً لینک آدرس مستقیم تصویر پروفایل را وارد نمایید (http/https):");n&&n.trim().startsWith("http")&&window.selectEditProfileAvatar(n.trim())};window.handleEditProfileImageUpload=function(n){var i;const e=(i=n.target.files)==null?void 0:i[0];if(!e)return;if(e.size>10*1024*1024){window.showToast?window.showToast("حجم عکس انتخابی نباید بیشتر از ۱۰ مگابایت باشد.","warning"):alert("حجم عکس انتخابی نباید بیشتر از ۱۰ مگابایت باشد.");return}const t=document.getElementById("edit-profile-avatar-preview-box");t&&(t.innerHTML='<span class="spin-sync" style="font-size: 1.8rem;">⏳</span>');const o=new FileReader;o.onload=function(a){const r=a.target.result;if(!r)return;const d=new Image;d.onload=function(){let l=d.width,c=d.height;l>c?l>128&&(c=Math.round(c*128/l),l=128):c>128&&(l=Math.round(l*128/c),c=128);const f=document.createElement("canvas");f.width=l,f.height=c,f.getContext("2d").drawImage(d,0,0,l,c);let y;try{y=f.toDataURL("image/webp",.7),(!y||!y.startsWith("data:image/webp"))&&(y=f.toDataURL("image/jpeg",.7))}catch{y=f.toDataURL("image/jpeg",.7)}window.selectEditProfileAvatar(y)},d.onerror=function(){window.showToast?window.showToast("خطا در پردازش تصویر، لطفاً دوباره تلاش کنید.","error"):alert("خطا در پردازش تصویر، لطفاً دوباره تلاش کنید."),t&&(t.innerHTML='<span style="font-size: 2.2rem;">👤</span>')},d.src=r},o.readAsDataURL(e)};window.handleSaveProfileSubmit=async function(){const n=document.getElementById("input-edit-profile-name"),e=document.getElementById("input-edit-profile-target"),t=document.getElementById("input-edit-profile-avatar-url"),o=n?n.value.trim():"",i=e?e.value.trim():"",a=t?t.value.trim():"";if(!o||_e(o)){window.showToast?window.showToast("لطفاً نام و نام خانوادگی خود را وارد کنید.","warning"):alert("لطفاً نام و نام خانوادگی خود را وارد کنید."),n&&n.focus();return}const r=document.getElementById("btn-save-edit-profile");r&&(r.disabled=!0,r.innerHTML='<svg class="spin-sync" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> <span>در حال ذخیره‌سازی...</span>');try{try{localStorage.setItem(ee.NICKNAME,o),localStorage.setItem(ee.TARGET,i),localStorage.setItem("planex_user_nickname",o),localStorage.setItem("planex_nickname",o),localStorage.setItem("planex_leaderboard_nickname",o),a&&localStorage.setItem("planex_user_avatar",a)}catch(c){console.warn("LEADERBOARD_STORAGE_KEYS quota error:",c)}if(p&&typeof p.setUserProfile=="function"){const c=p.getUserProfile()||{};p.setUserProfile({...c,name:o,targetField:i,major:i,avatar:a,avatar_url:a,photo:a,photoUrl:a})}try{const c=localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account");let f=c?JSON.parse(c):{};f.full_name=o,f.name=o,f.avatar_url=a,f.photo_url=a,localStorage.setItem("planex_auth_user",JSON.stringify(f)),localStorage.setItem("planex_user_account",JSON.stringify(f))}catch(c){console.warn("auth user account quota error:",c)}_&&typeof _.saveUserProfile=="function"&&_.saveUserProfile(o,i,a);const d=window.personalSyncService;let s=Promise.resolve();d&&typeof d.pushToCloud=="function"&&(s=d.pushToCloud(null,o,a));let l=Promise.resolve();_&&typeof _.syncUserScore=="function"&&(l=_.syncUserScore(!0)),await Promise.allSettled([s,l]),window.closeActiveModal?window.closeActiveModal():window.appState&&(window.appState.activeModal=null),window.showToast&&window.showToast(`مشخصات و آواتار شما با موفقیت به «${o}» تغییر یافت! ✅`,"success",3500),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("profileUpdated")),window.renderApp&&window.renderApp()}catch(d){console.error("Save profile failed:",d),window.showToast?window.showToast("خطا در ذخیره مشخصات: "+d.message,"error"):alert("خطا در ذخیره مشخصات: "+d.message)}finally{r&&(r.disabled=!1,r.innerHTML="💾 ذخیره تغییرات مشخصات")}};const Uo=n=>String(n??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");window.leaderboardFilterQuery=window.leaderboardFilterQuery||"";window.isLeaderboardSyncing=!1;window.isLeaderboardRefreshing=!1;window.lastLeaderboardResult=window.lastLeaderboardResult||null;window.isFetchingLeaderboardBg=!1;window.lastPublicRoomsList=window.lastPublicRoomsList||null;window.isFetchingPublicRoomsBg=!1;window.lastEarlyBirdList=window.lastEarlyBirdList||null;window.isFetchingEarlyBirds=!1;function $e(n,e=!0,t=3500){const o=document.createElement("div");o.style.cssText=`position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%); background: ${e?"linear-gradient(135deg, #10b981 0%, #059669 100%)":"linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"}; color: white; padding: 14px 26px; border-radius: 16px; font-weight: 900; font-size: 0.92rem; z-index: 99999; box-shadow: 0 10px 30px rgba(0,0,0,0.5); animation: fadeIn 0.3s; max-width: 92vw; text-align: center; direction: rtl; border: 1.5px solid rgba(255,255,255,0.3);`,o.innerHTML=n,document.body.appendChild(o),setTimeout(()=>{o.style.opacity="0",o.style.transition="opacity 0.4s",setTimeout(()=>o.remove(),400)},t)}window.planexNavigateBackToGroups=function(n){n&&typeof n.preventDefault=="function"&&n.preventDefault(),n&&typeof n.stopPropagation=="function"&&n.stopPropagation(),console.log("Back to groups clicked"),window.leaderboardState&&(window.leaderboardState.currentGroupId=null);try{localStorage.removeItem("planex_active_group_id"),localStorage.removeItem("planex_current_group_view"),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data")}catch(e){console.warn("[planexNavigateBackToGroups] Storage purge error:",e)}window._leaderboardMemoryCache={key:null,data:null},window.leaderboardService&&typeof window.leaderboardService.setActiveGroupCode=="function"?window.leaderboardService.setActiveGroupCode(null):typeof _<"u"&&_&&typeof _.setActiveGroupCode=="function"&&_.setActiveGroupCode(null),typeof p<"u"&&p&&typeof p.setActiveGroupCode=="function"&&p.setActiveGroupCode(null),window.lastLeaderboardResult=null,typeof renderGroupsHub=="function"?renderGroupsHub():typeof dt=="function"?dt():typeof mt=="function"&&mt(),typeof window.renderApp=="function"&&window.renderApp()};window.handleBackToGroupsList=window.handleBackToGroupList=window.planexNavigateBackToGroups;function mt(){return _&&typeof _.setActiveGroupCode=="function"&&_.setActiveGroupCode(null),localStorage.removeItem("planex_current_group_view"),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data"),window.lastLeaderboardResult=null,bt()}window.renderGroupsHub=window.initLeaderboardView=mt;const dt=mt;window.handleSwitchGroup=n=>{if(!n||n==="GLOBAL"){window.handleBackToGroupList();return}_&&typeof _.setActiveGroupCode=="function"&&_.setActiveGroupCode(n),window.lastLeaderboardResult=null,$e(`🔄 ورود به جدول گروه «${n}»`,!0,1800),window.renderApp&&window.renderApp()};window.handleCreateGroupSubmit=async()=>{var i,a,r,d,s;const n=document.getElementById("create-room-name")||document.getElementById("input-create-group-name"),e=n?n.value.trim():"";if(!e){alert("لطفاً نام گروه رقابتی خود را وارد کنید (مثلاً: گروه پره‌اینترنی اسفند)."),n&&n.focus();return}const t=document.getElementById("btn-submit-create-room")||document.getElementById("btn-create-group-submit"),o=t?t.innerHTML:"";t&&(t.disabled=!0,t.innerHTML="⏳ در حال ایجاد گروه...");try{const l=((i=document.querySelector('input[name="create-room-type"]:checked'))==null?void 0:i.value)==="private",c=((a=document.getElementById("create-room-category"))==null?void 0:a.value)||"general",f=parseInt((r=document.getElementById("create-room-capacity"))==null?void 0:r.value)||600,m=((s=(d=document.getElementById("create-room-announcement"))==null?void 0:d.value)==null?void 0:s.trim())||"",y=await _.createGroup(e,l,{category:c,capacity:f,announcement:m});_&&typeof _.setActiveGroupCode=="function"&&_.setActiveGroupCode(y.groupCode),typeof p<"u"&&p&&typeof p.setActiveGroupCode=="function"&&p.setActiveGroupCode(y.groupCode);try{localStorage.setItem("planex_active_group_code",y.groupCode),localStorage.setItem("planex_current_group_view",y.groupCode)}catch(w){console.warn("Storage save error in handleCreateGroupSubmit:",w)}typeof window.closeActiveModal=="function"?window.closeActiveModal():typeof window.closeCreateGroupModal=="function"?window.closeCreateGroupModal():window.appState&&(window.appState.activeModal=null),window.lastLeaderboardResult=null,typeof window.renderApp=="function"&&window.renderApp(),$e(`🎉 گروه «${y.groupName}» با موفقیت ایجاد شد! کد دعوت: ${y.groupCode}`,!0,4e3)}catch(l){console.error("Create group failed:",l),alert("خطا در ایجاد گروه: "+l.message)}finally{t&&(t.disabled=!1,t.innerHTML=o||"🚀 ایجاد اتاق و دریافت کد دعوت")}};window.handleModalJoinRoomSubmit=async()=>{const n=document.getElementById("input-modal-join-code")||document.getElementById("input-join-group-code"),e=n?n.value.trim().toUpperCase():"";if(!e){alert("لطفاً کد ۶ رقمی گروه را وارد کنید (مثال: PLX-4829)."),n&&n.focus();return}await window.handleJoinGroupSubmit(e)};window.handleJoinGroupSubmit=async(n=null)=>{let e=n;if(!e){const o=document.getElementById("input-join-group-code")||document.getElementById("input-modal-join-code");e=o?o.value.trim().toUpperCase():""}if(!e){alert("لطفاً کد ۶ رقمی گروه را وارد کنید (مثال: PLX-4829).");return}const t=p&&typeof p.getProfile=="function"?p.getProfile():{};if((!t.name||!t.target||!t.major)&&window.appState){window.appState.pendingJoinRoom={id:e,name:`گروه ${e}`},window.appState.activeModal="joinRoomOnboarding",window.renderApp&&window.renderApp();return}try{const o=await _.joinPrivateGroup(e);if(window.lastLeaderboardResult=null,o.requiresVerification){$e("⚠️ برای ورود به گروه، لطفاً ابتدا وارد حساب کاربری خود شوید.",!1,4500),window.openLoginModal&&window.openLoginModal();return}o.success?($e(o.message||"با موفقیت به گروه پیوستید! 🎉",!0,4e3),_&&typeof _.setActiveGroupCode=="function"&&_.setActiveGroupCode(e),typeof window.closeActiveModal=="function"?window.closeActiveModal():typeof window.closeCreateGroupModal=="function"?window.closeCreateGroupModal():window.appState&&(window.appState.activeModal=null)):$e(o.message||"خطا در ورود به گروه",!1,3500),window.renderApp&&window.renderApp()}catch(o){console.error("Join group failed:",o),alert("خطا در ورود به گروه: "+o.message)}};window.handleToggleGroupPrivacyAction=async(n,e)=>{try{const t=await _.toggleGroupPrivacy(n,e);t&&t.success?$e(t.message||`نوع گروه به «${e?"خصوصی":"عمومی"}» تغییر یافت.`):$e(t.message||"خطا در تغییر نوع گروه",!1),window.lastLeaderboardResult=null,window.renderApp&&window.renderApp()}catch(t){alert("خطا در تغییر نوع گروه: "+t.message)}};window.handleRefreshPendingRequests=async n=>{try{window.isFetchingPendingRequests=!0;const e=await _.fetchPendingRequests(n);window.groupPendingRequests=Array.isArray(e)?e:[],window.isFetchingPendingRequests=!1,$e(`🔄 لیست درخواست‌های عضویت به‌روزرسانی شد (${window.groupPendingRequests.length} مورد)`,!0,2e3),window.renderApp&&window.renderApp()}catch(e){window.isFetchingPendingRequests=!1,console.error("Refresh pending requests error:",e)}};window.handleLeaveGroupAction=async(n=null)=>{const e=_&&typeof _.getUserGroups=="function"?_.getUserGroups():[],t=String(n||(_&&typeof _.getActiveGroupCode=="function"?_.getActiveGroupCode():"")).trim().toUpperCase(),o=e.find(a=>(a.code||a.groupCode)===t)||(_&&typeof _.getActiveGroup=="function"?_.getActiveGroup():null),i=o?o.name||o.groupName:t||"این گروه";if(confirm(`آیا از خروج/انصراف از «${i}» اطمینان دارید؟`))try{["planex_user_groups","planex_my_rooms","my_rooms","planex_joined_groups","user_rooms"].forEach(a=>{try{const r=localStorage.getItem(a);if(r){const d=JSON.parse(r);if(Array.isArray(d)){const s=d.filter(l=>String(l.code||l.room_code||l.groupCode||l.id||"").trim().toUpperCase()!==t);localStorage.setItem(a,JSON.stringify(s))}}}catch{}}),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data"),localStorage.removeItem(`planex_group_cache_${t}`),localStorage.removeItem(`planex_group_roster_${t}`),_&&typeof _.leaveUserGroup=="function"&&await _.leaveUserGroup(t),_&&typeof _.setActiveGroupCode=="function"&&_.setActiveGroupCode(null),window.lastLeaderboardResult=null,$e(`🚪 با موفقیت از گروه «${i}» خارج شدید.`),_&&typeof _.fetchMyRooms=="function"&&await _.fetchMyRooms(!0).catch(()=>{}),window.handleBackToGroupList()}catch(a){console.error("Leave group failed:",a),alert("خطا در خروج از گروه: "+a.message)}};window.handleDeleteGroupAction=async(n=null)=>{const e=_&&typeof _.getUserGroups=="function"?_.getUserGroups():[],t=String(n||(_&&typeof _.getActiveGroupCode=="function"?_.getActiveGroupCode():"")).trim().toUpperCase(),o=e.find(l=>(l.code||l.groupCode)===t)||(_&&typeof _.getActiveGroup=="function"?_.getActiveGroup():null),i=o?o.name||o.groupName:t||"این گروه";if(!confirm(`🚨 هشدار مدیر:

آیا از حذف کامل گروه «${i}» اطمینان دارید؟

با تایید شما، تمام اطلاعات گروه، اعضا و جدول آن پاک شده و برای همه منحل می‌شود.`))return;const a=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}"),r=_&&typeof _.getUserProfile=="function"?_.getUserProfile():{},d=a.id||a.telegram_id||r.userId||"",s=a.phone||a.phone_number||r.phone||"";try{["planex_user_groups","planex_my_rooms","my_rooms","planex_joined_groups","user_rooms"].forEach(f=>{try{const m=localStorage.getItem(f);if(m){const y=JSON.parse(m);if(Array.isArray(y)){const w=y.filter(u=>String(u.code||u.room_code||u.groupCode||u.id||"").trim().toUpperCase()!==t);localStorage.setItem(f,JSON.stringify(w))}}}catch{}}),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data"),localStorage.removeItem(`planex_group_cache_${t}`),localStorage.removeItem(`planex_group_roster_${t}`);const l=new AbortController,c=setTimeout(()=>l.abort(),3e3);fetch(`${ce}/api/rooms/delete.php`,{method:"POST",headers:{"Content-Type":"application/json"},signal:l.signal,body:JSON.stringify({room_code:t||(o==null?void 0:o.code)||(o==null?void 0:o.groupCode),user_id:d,phone:s,creator_id:d})}).catch(()=>{}).finally(()=>clearTimeout(c)),_&&typeof _.deleteGroup=="function"&&await _.deleteGroup(t),_&&typeof _.setActiveGroupCode=="function"&&_.setActiveGroupCode(null),window.lastLeaderboardResult=null,$e(`🗑️ گروه «${i}» با موفقیت به طور کامل حذف شد.`),_&&typeof _.fetchMyRooms=="function"&&await _.fetchMyRooms(!0).catch(()=>{}),window.handleBackToGroupList()}catch(l){console.error("Delete group failed:",l),alert("خطا در حذف کامل گروه: "+l.message)}};window.handleApproveRequestAction=async(n,e)=>{try{const t=await _.approveMember(n,e);$e(t.message||"✅ کاربر با موفقیت به گروه اضافه شد",!0),window.lastLeaderboardResult=null,window.isFetchingPendingRequests=!1;const o=await _.fetchPendingRequests(n);window.groupPendingRequests=o,window.renderApp&&window.renderApp()}catch(t){console.error("Error approving member:",t),$e("خطا در تایید ورود: "+t.message,!1)}};window.handleRejectRequestAction=async(n,e)=>{try{const t=await _.rejectMember(n,e);$e(t.message||"❌ درخواست عضویت رد شد",!1),window.lastLeaderboardResult=null,window.isFetchingPendingRequests=!1;const o=await _.fetchPendingRequests(n);window.groupPendingRequests=o,window.renderApp&&window.renderApp()}catch(t){console.error("Error rejecting member:",t),$e("خطا در رد درخواست: "+t.message,!1)}};window.handleCopyGroupCode=async n=>{if(n)try{navigator.clipboard&&navigator.clipboard.writeText?await navigator.clipboard.writeText(n):prompt("کد گروه را کپی کنید:",n),$e(`📋 کد گروه (${n}) در حافظه کپی شد!`)}catch{prompt("کد گروه را کپی کنید:",n)}};window.handleShareGroupInvite=async(n,e)=>{const t=e||"رقابت مطالعه",o=`${window.location.origin}${window.location.pathname}?group=${encodeURIComponent(n)}`,i=`🔥 دعوت به گروه رقابت مطالعه «${t}» در PlanEx

🔑 کد ورود به گروه: ${n}
🔗 لینک ورود مستقیم:
${o}`;if(navigator.share)try{await navigator.share({title:`گروه مطالعه «${t}»`,text:i,url:o});return}catch{}try{navigator.clipboard&&navigator.clipboard.writeText?(await navigator.clipboard.writeText(i),$e(`🔗 متن و لینک دعوت گروه «${t}» کپی شد!`)):prompt("متن دعوت را کپی کنید:",i)}catch{prompt("متن دعوت را کپی کنید:",i)}};window.handleLiveLeaderboardRefresh=async()=>{if(!window.isLeaderboardRefreshing){window.isLeaderboardRefreshing=!0,window.renderApp&&window.renderApp();try{const n=await _.fetchLeaderboard(null,!0);window.lastLeaderboardResult=n,$e("🔄 جدول رتبه‌بندی گروه با موفقیت به‌روزرسانی شد.",!0,2e3)}catch(n){console.error("Live refresh failed:",n)}finally{window.isLeaderboardRefreshing=!1,window.renderApp&&window.renderApp()}}};window.handleManualLeaderboardSync=async()=>{if(!window.isLeaderboardSyncing){window.isLeaderboardSyncing=!0,window.renderApp&&window.renderApp();try{const n=await _.syncUserScore(!0),e=await _.fetchLeaderboard(null,!0);window.lastLeaderboardResult=e,n&&n.success&&n.serverConfirmed?$e(`✅ کارنامه شما در گروه ثبت شد${n.rank?` — رتبه ${n.rank}`:""}`,!0,3500):$e("⚠️ اطلاعات به صورت محلی در گروه ذخیره شد.",!1,4500)}catch(n){console.error("Manual sync failed:",n),$e("❌ خطا در برقراری ارتباط با سرور.",!1,3500)}finally{window.isLeaderboardSyncing=!1,window.renderApp&&window.renderApp()}}};function Fo(){try{const n=document.getElementById("input-leaderboard-search");n&&(n.oninput=e=>{try{window.leaderboardFilterQuery=e.target.value;const t=(e.target.value||"").toLowerCase().trim();document.querySelectorAll(".leaderboard-row").forEach(i=>{const a=(i.dataset.search||"").toLowerCase();!t||a.includes(t)?i.style.display="":i.style.display="none"})}catch(t){console.error("Error in leaderboard search filter:",t)}}),window._leaderboardEventDelegationBound||(window._leaderboardEventDelegationBound=!0,document.addEventListener("click",e=>{if(e.target.closest('#btn-back-to-groups, .btn-back-groups, [data-action="back-to-groups"]')){e.preventDefault(),e.stopPropagation(),typeof window.planexNavigateBackToGroups=="function"&&window.planexNavigateBackToGroups(e);return}const o=e.target.closest(".btn-approve-request");if(o){e.preventDefault();const a=o.getAttribute("data-group-id")||o.dataset.groupId,r=o.getAttribute("data-user-id")||o.dataset.userId;a&&r&&typeof window.handleApproveRequestAction=="function"&&window.handleApproveRequestAction(a,r);return}const i=e.target.closest(".btn-reject-request");if(i){e.preventDefault();const a=i.getAttribute("data-group-id")||i.dataset.groupId,r=i.getAttribute("data-user-id")||i.dataset.userId;a&&r&&typeof window.handleRejectRequestAction=="function"&&window.handleRejectRequestAction(a,r);return}}))}catch(n){console.error("Error binding leaderboard events:",n)}}function Ft(n,e){if(!n)return!1;if(n.isOwner||n.is_owner||n.isCreator||n.is_creator)return!0;let t=null;try{t=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}")}catch{}const o=s=>{if(!s)return"";let l=String(s).replace(/[^0-9]/g,"");return l.startsWith("98")&&l.length>=12?l="0"+l.slice(2):l.length===10&&l.startsWith("9")&&(l="0"+l),l},i=[o(t==null?void 0:t.phone),o(t==null?void 0:t.phone_number),o(e==null?void 0:e.phone),o(localStorage.getItem("planex_user_phone"))].filter(Boolean),a=[String((t==null?void 0:t.id)||""),String((t==null?void 0:t.telegram_id)||""),String((e==null?void 0:e.userId)||""),String(localStorage.getItem("planex_leaderboard_user_id")||"")].filter(Boolean),r=[o(n.creator_phone),o(n.admin_phone),o(n.owner_phone)].filter(Boolean),d=[String(n.creator_id||""),String(n.admin_id||""),String(n.owner_id||""),String(n.userId||"")].filter(Boolean);if(i.some(s=>r.includes(s))||a.some(s=>d.includes(s)))return!0;if(window.lastLeaderboardResult&&Array.isArray(window.lastLeaderboardResult.roster)&&window.lastLeaderboardResult.roster.length>0){const s=window.lastLeaderboardResult.roster[0];if(s){const l=String(s.userId||s.user_id||""),c=o(s.phone||s.user_phone);if(l&&a.includes(l)||c&&i.includes(c))return!0}}return!1}function ut(n,e=36){const t=!!(n!=null&&n.isUser||n!=null&&n.isCurrentUser||n!=null&&n.is_user),o=(n==null?void 0:n.avatar_url)||(n==null?void 0:n.avatarUrl)||(n==null?void 0:n.avatar)||(n==null?void 0:n.photo_url)||t&&localStorage.getItem("planex_user_avatar")||""||"",i=String((n==null?void 0:n.nickname)||(n==null?void 0:n.name)||"کاربر").trim(),a=(i.charAt(0)||"👤").toUpperCase(),r=String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),d=["linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)","linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)","linear-gradient(135deg, #10b981 0%, #047857 100%)","linear-gradient(135deg, #f59e0b 0%, #d97706 100%)","linear-gradient(135deg, #ec4899 0%, #be185d 100%)","linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)","linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)"];let s=0;for(let c=0;c<i.length;c++)s+=i.charCodeAt(c);const l=d[s%d.length];return o&&(o.startsWith("http")||o.startsWith("data:image"))?`
      <div style="position: relative; width: ${e}px; min-width: ${e}px; max-width: ${e}px; height: ${e}px; min-height: ${e}px; max-height: ${e}px; aspect-ratio: 1 / 1 !important; flex-shrink: 0 !important; display: inline-flex; align-items: center; justify-content: center; border-radius: 50% !important; overflow: hidden !important;">
        <img src="${o}" style="width: 100%; height: 100%; aspect-ratio: 1 / 1 !important; flex-shrink: 0 !important; border-radius: 50% !important; object-fit: cover !important; border: 1.5px solid rgba(255,255,255,0.25); background: #1f2029;" 
          onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" />
        <div style="display: none; width: 100%; height: 100%; aspect-ratio: 1 / 1 !important; flex-shrink: 0 !important; border-radius: 50% !important; background: ${l}; color: white; font-weight: 800; font-size: ${Math.max(10,Math.round(e*.42))}px; align-items: center; justify-content: center; border: 1.5px solid rgba(255,255,255,0.25); box-shadow: 0 2px 6px rgba(0,0,0,0.3); overflow: hidden !important;">
          ${r}
        </div>
      </div>
    `:`
    <div style="width: ${e}px; min-width: ${e}px; max-width: ${e}px; height: ${e}px; min-height: ${e}px; max-height: ${e}px; aspect-ratio: 1 / 1 !important; flex-shrink: 0 !important; border-radius: 50% !important; background: ${l}; color: white; font-weight: 800; font-size: ${Math.max(10,Math.round(e*.42))}px; display: inline-flex; align-items: center; justify-content: center; border: 1.5px solid rgba(255,255,255,0.25); box-shadow: 0 2px 6px rgba(0,0,0,0.3); overflow: hidden !important;">
      ${r}
    </div>
  `}function bt(n=null){var e,t;try{let o=null;try{o=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}let i=!0;if(o&&(o.phone||o.phone_number||o.id||o.telegram_id)&&(i=!1),i)return`
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
      `;const a=_&&typeof _.getUserProfile=="function"?_.getUserProfile():{nickname:"داوطلب پرتلاش",target:"کنکور سراسری ۱۴۰۶",userId:"local_user"},r=_&&typeof _.getTodayStats=="function"?_.getTodayStats():{studyMinutes:0,studyHours:0,testCount:0,subjects:[],gregorianDate:new Date().toISOString().split("T")[0],jalaliDateStr:""},d=_&&typeof _.getUserGroups=="function"?_.getUserGroups():[],s=_&&typeof _.getActiveGroupCode=="function"?_.getActiveGroupCode():null,l=h=>String(h??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),c=h=>String(h).replace(/[0-9]/g,D=>"۰۱۲۳۴۵۶۷۸۹"[D]);window.lastPublicRoomsFetchTime=window.lastPublicRoomsFetchTime||0,window.lastEarlyBirdFetchTime=window.lastEarlyBirdFetchTime||0,window.lastLeaderboardFetchTime=window.lastLeaderboardFetchTime||0,window.lastPendingRequestsFetchTime=window.lastPendingRequestsFetchTime||0,window.lastUserGroupsFetchTime=window.lastUserGroupsFetchTime||0;const f=5*60*1e3,m=Date.now();(d.length===0||m-window.lastUserGroupsFetchTime>=2*60*1e3)&&!window.isFetchingUserGroupsBg&&(a.phone||a.userId)&&_&&typeof _.fetchUserGroups=="function"&&(window.lastUserGroupsFetchTime=m,window.isFetchingUserGroupsBg=!0,_.fetchUserGroups(!1).then(h=>{var D;window.isFetchingUserGroupsBg=!1,Array.isArray(h)&&h.length>0&&d.length===0&&!((D=window.appState)!=null&&D.activeModal)&&window.renderApp&&window.renderApp()}).catch(()=>{window.isFetchingUserGroupsBg=!1})),!s&&(m-window.lastPublicRoomsFetchTime>=f||!window.lastPublicRoomsList)&&!window.isFetchingPublicRoomsBg&&_&&typeof _.fetchPublicRooms=="function"&&(window.lastPublicRoomsFetchTime=m,window.isFetchingPublicRoomsBg=!0,_.fetchPublicRooms().then(h=>{var D;window.lastPublicRoomsList=Array.isArray(h)?h:[],window.isFetchingPublicRoomsBg=!1,!((D=window.appState)!=null&&D.activeModal)&&!_.getActiveGroupCode()&&window.renderApp&&window.renderApp()}).catch(()=>{window.isFetchingPublicRoomsBg=!1})),(m-window.lastEarlyBirdFetchTime>=f||!window.lastEarlyBirdList)&&!window.isFetchingEarlyBirds&&_&&typeof _.fetchEarlyBirds=="function"&&(window.lastEarlyBirdFetchTime=m,window.isFetchingEarlyBirds=!0,_.fetchEarlyBirds().then(h=>{var D;window.isFetchingEarlyBirds=!1,h&&Array.isArray(h.list)&&(window.lastEarlyBirdList=h.list,!((D=window.appState)!=null&&D.activeModal)&&window.renderApp&&window.renderApp())}).catch(()=>{window.isFetchingEarlyBirds=!1}));const y=(window.lastPublicRoomsList||[]).filter(h=>{const D=h.code||h.groupCode;return D&&!d.some(B=>(B.code||B.groupCode)===D)}),w=window.lastEarlyBirdList||[],u=(h=null)=>{let D=w;if(h&&Array.isArray(h)&&h.length>0){const B=h.map(H=>H.userId||H.user_id);D=w.filter(H=>B.includes(H.userId||H.user_id))}return`
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

          ${D.length===0?`
            <div style="background: rgba(255, 255, 255, 0.02); border: 1px dashed rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 16px; text-align: center; color: #8e8e9c; font-size: 0.8rem;">
              ☀️ هنوز سحرخیزی برای امروز ثبت نشده است؛ اولین نفر باشید!
            </div>
          `:`
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px;">
              ${D.map(B=>`
                <div style="background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.06); padding: 8px 12px; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                  <div style="display: flex; align-items: center; gap: 8px; overflow: hidden;">
                    <span style="font-size: 1rem;">☀️</span>
                    <div style="overflow: hidden;">
                      <strong style="font-size: 0.82rem; color: #e4e4e7; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${l(B.nickname||B.name||"سحرخیز")}</strong>
                      <span style="font-size: 0.68rem; color: #8e8e9c;">${l(B.target||"")}</span>
                    </div>
                  </div>
                  <span style="font-size: 0.76rem; font-weight: 800; color: #f59e0b; font-family: 'Outfit', monospace; background: rgba(245, 158, 11, 0.15); padding: 2px 6px; border-radius: 6px;">
                    ${l(c(B.wakeTime||"۰۵:۰۰"))}
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
          ${u(null)}

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
                ${d.map(h=>{const D=h.code||h.groupCode,B=h.name||h.groupName||`گروه ${D}`,H=Ft(h,a),le=H?"👑 مدیر":"👤 عضو",U=H?"rgba(245, 158, 11, 0.18)":"rgba(16, 185, 129, 0.15)",fe=H?"#f59e0b":"#10b981",we=H?"rgba(245, 158, 11, 0.4)":"rgba(16, 185, 129, 0.3)",ye=_&&typeof _.getGroupRoster=="function"?_.getGroupRoster(D):[],Me=ye&&ye.length>0?ye.length:h.membersCount||1,he=!H&&(h.status==="pending"||h.isPending===!0);return`
                    <div onclick="window.handleSwitchGroup('${D}');" 
                         class="glass-panel" 
                         style="padding: 16px 18px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: all 0.2s ease; gap: 12px;">
                      
                      <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 44px; height: 44px; border-radius: 14px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.1); display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
                          🏆
                        </div>
                        <div>
                          <div style="display: flex; align-items: center; gap: 8px;">
                            <strong style="font-size: 0.95rem; font-weight: 800; color: #f8fafc;">${l(B)}</strong>
                            <span style="font-size: 0.68rem; background: ${U}; color: ${fe}; border: 1px solid ${we}; padding: 2px 7px; border-radius: 6px; font-weight: 800;">
                              ${le}
                            </span>
                          </div>
                          <div style="display: flex; align-items: center; gap: 10px; margin-top: 4px; font-size: 0.74rem; color: #8e8e9c;">
                            <span style="font-family: 'Outfit', monospace; font-weight: 700; color: #cbd5e1;">کد: ${l(D)}</span>
                            <span>•</span>
                            <span>👥 ${c(Me)} عضو</span>
                          </div>
                        </div>
                      </div>

                      <div style="display: flex; align-items: center; gap: 8px;">
                        <span style="font-size: 0.78rem; font-weight: 800; color: ${he?"#facc15":"#7c3aed"}; background: ${he?"rgba(234, 179, 8, 0.1)":"rgba(124, 58, 237, 0.1)"}; padding: 6px 12px; border-radius: 10px; border: 1px solid ${he?"rgba(234, 179, 8, 0.25)":"rgba(124, 58, 237, 0.2)"};">
                          ${he?"⏳ وضعیت در انتظار":"ورود به تالار ⬅️"}
                        </span>
                      </div>
                    </div>
                  `}).join("")}
              </div>
            `}
          </div>

          <!-- ================= SECTION 2: سایر گروه‌های عمومی فعال (واقعی) ================= -->
          ${y.length>0?`
            <div>
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
                <div style="width: 8px; height: 18px; background: #3b82f6; border-radius: 4px;"></div>
                <h3 style="margin: 0; font-size: 1.05rem; font-weight: 800; color: #f4f4f6;">🌐 سایر گروه‌های عمومی فعال</h3>
              </div>

              <div style="display: flex; flex-direction: column; gap: 10px;">
                ${y.map(h=>`
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
        ${((e=window.appState)==null?void 0:e.activeModal)==="editProfile"?Ut():""}
      `;const g=String(s).trim().toUpperCase(),b=d.find(h=>(h.code||h.groupCode)===g)||(_&&typeof _.getActiveGroup=="function"?_.getActiveGroup():null)||{code:g,name:`گروه ${g}`},v=b.name||b.groupName||`گروه ${g}`,A=Ft(b,a),k=!!(!A&&b&&b.status==="pending"),T=!!(b&&(b.is_private===1||b.type==="private"||b.isPrivate));(!window.lastLeaderboardResult||window.lastLeaderboardResult.groupCode!==g)&&_&&typeof _.getCachedLeaderboard=="function"&&(window.lastLeaderboardResult=_.getCachedLeaderboard(r.gregorianDate,g)),(m-window.lastLeaderboardFetchTime>=f||!window.lastLeaderboardResult||window.lastLeaderboardResult.groupCode!==g)&&!window.isFetchingLeaderboardBg&&_&&typeof _.fetchLeaderboard=="function"&&(window.lastLeaderboardFetchTime=m,window.isFetchingLeaderboardBg=!0,_.fetchLeaderboard(r.gregorianDate,!0,g).then(h=>{var D;h&&(window.lastLeaderboardResult=h),window.isFetchingLeaderboardBg=!1,(D=window.appState)!=null&&D.activeModal||window.renderApp&&window.renderApp()}).catch(()=>{window.isFetchingLeaderboardBg=!1})),A&&(m-window.lastPendingRequestsFetchTime>=f||!window.groupPendingRequests)&&!window.isFetchingPendingRequests&&_&&typeof _.fetchPendingRequests=="function"&&(window.lastPendingRequestsFetchTime=m,window.isFetchingPendingRequests=!0,_.fetchPendingRequests(g).then(h=>{var D;window.isFetchingPendingRequests=!1,Array.isArray(h)&&(window.groupPendingRequests=h,!((D=window.appState)!=null&&D.activeModal)&&window.renderApp&&window.renderApp())}).catch(()=>{window.isFetchingPendingRequests=!1})),window.leaderboardTimeFilter="today";const x="today",M=_&&typeof _.getWeeklyStats=="function"?_.getWeeklyStats():null,P=new Map,C=_&&typeof _.getGroupRoster=="function"?_.getGroupRoster(g):[];Array.isArray(C)&&C.forEach(h=>{if(h&&(h.userId||h.id)){const D=String(h.userId||h.id);P.set(D,{...h,userId:D})}}),Array.isArray(b==null?void 0:b.members)&&b.members.forEach(h=>{if(h&&(h.userId||h.id)){const D=String(h.userId||h.id),B=P.get(D)||{};P.set(D,{...B,...h,userId:D})}});const I=window.lastLeaderboardResult&&(window.lastLeaderboardResult.leaderboard||window.lastLeaderboardResult.list)||[];if(Array.isArray(I)&&I.forEach(h=>{if(h&&(h.userId||h.id)){const D=String(h.userId||h.id),B=P.get(D)||{};P.set(D,{...B,...h,userId:D})}}),a&&a.userId){const h=String(a.userId),D=P.get(h)||{},B=a.avatar_url||a.avatar||a.photo_url||D.avatarUrl||"",H=a.nickname||a.name||D.nickname||"شما",le=a.target||D.target||"کنکور سراسری";P.set(h,{...D,userId:h,isUser:!0,isCurrentUser:!0,nickname:H,name:H,target:le,avatarUrl:B,avatar_url:B,avatar:B,photo_url:B,studyMinutes:Math.max(Number(D.studyMinutes||0),Number((r==null?void 0:r.studyMinutes)||0)),testCount:Math.max(Number(D.testCount||0),Number((r==null?void 0:r.testCount)||0)),weeklyStudyMinutes:Math.max(Number(D.weeklyStudyMinutes||0),Number((M==null?void 0:M.studyMinutes)||0),Number((r==null?void 0:r.studyMinutes)||0)),weeklyTestCount:Math.max(Number(D.weeklyTestCount||0),Number((M==null?void 0:M.testCount)||0),Number((r==null?void 0:r.testCount)||0)),isOwner:!!(A||D.isOwner)})}const R=Array.from(P.values());b&&(b.members=R);let E;_&&typeof _.aggregateAndRankMembers=="function"?E=_.aggregateAndRankMembers(R,"today"):E=R.map(h=>{const D=Number(h.studyMinutes||h.study_minutes||0),B=Number(h.testCount||h.test_count||0),H=D*60+B*10;return{...h,displayStudyMins:D,displayTestCount:B,score:H}}).sort((h,D)=>D.score!==h.score?D.score-h.score:D.displayStudyMins!==h.displayStudyMins?D.displayStudyMins-h.displayStudyMins:D.displayTestCount-h.displayTestCount).map((h,D)=>({...h,rank:D+1})),E=E.map(h=>{if(!!(h.isUser||h.isCurrentUser||h.userId===a.userId||a.phone&&h.phone===a.phone)){const B=a.avatar_url||a.avatar||a.photo_url||h.avatar_url||h.avatarUrl,H=a.nickname||a.name||h.nickname,le=a.target||h.target;return{...h,isUser:!0,isCurrentUser:!0,nickname:H,name:H,target:le,avatar_url:B,avatarUrl:B,avatar:B,photo_url:B}}return h});const j=!window.lastLeaderboardResult&&window.isFetchingLeaderboardBg,J=window.groupPendingRequests||[],G=E[0]||null,L=E[1]||null,F=E[2]||null,Y=(h=0,D=999,B=1)=>{const H=h/60;return D===1||H>=35?{name:"الماس",icon:"💎",color:"#38bdf8",bg:"rgba(56, 189, 248, 0.15)",border:"rgba(56, 189, 248, 0.35)"}:D<=3||H>=22?{name:"طلا",icon:"🥇",color:"#fbbf24",bg:"rgba(251, 191, 36, 0.15)",border:"rgba(251, 191, 36, 0.35)"}:D<=Math.max(4,Math.ceil(B*.5))||H>=10?{name:"نقره",icon:"🥈",color:"#cbd5e1",bg:"rgba(203, 213, 225, 0.15)",border:"rgba(203, 213, 225, 0.35)"}:{name:"برنز",icon:"🥉",color:"#cd7f32",bg:"rgba(205, 127, 50, 0.15)",border:"rgba(205, 127, 50, 0.35)"}},Q=()=>{const h=new Date,B=6-(h.getDay()+1)%7,H=23-h.getHours(),le=59-h.getMinutes();return B>0?`${c(B)} روز و ${c(H)} ساعت`:`${c(H)} ساعت و ${c(le)} دقیقه`},Z=()=>{if(!E||E.length===0)return"";const h=E.findIndex(we=>we.isUser||we.isCurrentUser||we.userId===a.userId||a.phone&&we.phone===a.phone);if(h<0)return`
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
        `;const D=h+1,B=E[h];if(D===1){const we=E[1]||null,ye=we?Math.max(0,Math.round((B.displayStudyMins||0)-(we.displayStudyMins||0))):0;return`
          <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(234, 179, 8, 0.12) 100%); border: 1.5px solid rgba(245, 158, 11, 0.45); border-radius: 18px; padding: 14px 18px; margin-bottom: 18px; direction: rtl; box-shadow: 0 0 20px rgba(245, 158, 11, 0.15);">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 44px; height: 44px; border-radius: 14px; background: rgba(245, 158, 11, 0.25); border: 1px solid rgba(245, 158, 11, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
                  👑
                </div>
                <div>
                  <strong style="font-size: 0.96rem; color: #fbbf24; font-weight: 900;">شما در صدر جدول رقابت هستید! 🌟</strong>
                  <div style="font-size: 0.75rem; color: #fde68a; margin-top: 3px;">
                    ${we?`پیشتازی با <strong style="color: #ffffff;">${xe(ye)}</strong> فاصله نسبت به نفر دوم (${l(we.nickname||"رقیب")})`:"جایگاه اول را با تداوم مطالعه حفظ کنید."}
                  </div>
                </div>
              </div>
              <span style="background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid #f59e0b; padding: 6px 14px; border-radius: 12px; font-weight: 900; font-size: 0.78rem;">
                🏆 رتبه ۱ گروه
              </span>
            </div>
          </div>
        `}const H=E[h-1],le=D-1,U=H.nickname||H.name||"رقیب شما",fe=Math.max(1,Math.round((H.displayStudyMins||0)-(B.displayStudyMins||0)));return`
        <div style="background: linear-gradient(135deg, rgba(124, 58, 237, 0.22) 0%, rgba(236, 72, 153, 0.16) 100%); border: 1.5px solid rgba(168, 85, 247, 0.45); border-radius: 18px; padding: 14px 18px; margin-bottom: 18px; direction: rtl; animation: pulseGlow 3s infinite ease-in-out;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 44px; height: 44px; border-radius: 14px; background: rgba(168, 85, 247, 0.25); border: 1px solid rgba(168, 85, 247, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.4rem;">
                ⚡
              </div>
              <div>
                <strong style="font-size: 0.96rem; color: #ffffff; font-weight: 900;">تنها ${c(fe)} دقیقه مطالعه تا گرفتن رتبه «${l(U)}»! 🔥</strong>
                <div style="font-size: 0.75rem; color: #e9d5ff; margin-top: 3px;">
                  فاصله شما با رتبه ${c(le)} جدول: <strong style="color: #f472b6; font-weight: 800;">${xe(fe)}</strong> • با ثبت پارت جدید، سبقت بگیرید!
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
      `},N=E.filter(h=>h.isUser||h.isCurrentUser||h.userId===a.userId||a.phone&&h.phone===a.phone?_&&typeof _.isCurrentStudyingActive=="function"?_.isCurrentStudyingActive():!!(window.isUserStudyingNow&&window.isUserStudyingNow()):!!(_?_.isMemberStudying(h):h.isStudying&&h.lastHeartbeat&&Date.now()-h.lastHeartbeat<15*60*1e3)).length,q=()=>`
        <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 14px; padding: 10px 16px; margin-bottom: 16px; direction: rtl;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="width: 10px; height: 10px; border-radius: 50%; background: #10b981; display: inline-block; animation: livePulse 1.5s infinite ease-in-out;"></span>
            <strong style="font-size: 0.85rem; color: #34d399; font-weight: 800;">
              🟢 ${c(N)} نفر هم‌اکنون در حال مطالعه هستند
            </strong>
          </div>
          <span style="font-size: 0.72rem; color: #a1a1aa; font-weight: 600;">
            بروزرسانی زنده حضور اعضا
          </span>
        </div>
      `,W=()=>`
        <div style="background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 12px 16px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; direction: rtl;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1.1rem;">⏱️</span>
            <span style="font-size: 0.82rem; color: #cbd5e1; font-weight: 700;">زمان باقی‌مانده تا پایان لیگ هفتگی:</span>
            <strong style="font-size: 0.85rem; color: #f59e0b; font-weight: 900; font-family: 'Outfit'; background: rgba(245, 158, 11, 0.15); padding: 3px 10px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
              ${Q()}
            </strong>
          </div>

          <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
            <span style="font-size: 0.68rem; background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); padding: 2px 7px; border-radius: 6px; font-weight: 800;">💎 الماس</span>
            <span style="font-size: 0.68rem; background: rgba(251, 191, 36, 0.15); color: #fbbf24; border: 1px solid rgba(251, 191, 36, 0.3); padding: 2px 7px; border-radius: 6px; font-weight: 800;">🥇 طلا</span>
            <span style="font-size: 0.68rem; background: rgba(203, 213, 225, 0.15); color: #cbd5e1; border: 1px solid rgba(203, 213, 225, 0.3); padding: 2px 7px; border-radius: 6px; font-weight: 800;">🥈 نقره</span>
            <span style="font-size: 0.68rem; background: rgba(205, 127, 50, 0.15); color: #cd7f32; border: 1px solid rgba(205, 127, 50, 0.3); padding: 2px 7px; border-radius: 6px; font-weight: 800;">🥉 برنز</span>
          </div>
        </div>
      `,ue=h=>!Array.isArray(h)||h.length===0?'<span style="font-size: 0.72rem; color: #94a3b8; font-style: italic; opacity: 0.8;">در انتظار مطالعه</span>':h.slice(0,4).map(D=>`
        <span style="font-size: 0.68rem; background: rgba(56, 189, 248, 0.15); color: #7dd3fc; border: 1px solid rgba(56, 189, 248, 0.35); padding: 1px 7px; border-radius: 8px; font-weight: bold; white-space: nowrap;">
          ${l(D)}
        </span>
      `).join(" "),me=Math.max(1,Math.min(3,Math.ceil(E.length*.25))),pe=Math.max(me+1,Math.floor(E.length*.75));return`
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
                  <span>${l(v)}</span>
                </h3>
                <span style="font-size: 0.72rem; color: #8e8e9c; font-family: 'Outfit', monospace; font-weight: 700;">کد گروه: ${l(g)}</span>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <button type="button" onclick="window.handleCopyGroupCode('${g}')" style="padding: 7px 12px; font-size: 0.76rem; font-weight: 700; background: #1f2029; color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="کپی کد">
                <span>📋</span>
                <span>کد گروه</span>
              </button>

              <button type="button" onclick="window.handleShareGroupInvite('${g}', '${l(v)}')" style="padding: 7px 12px; font-size: 0.76rem; font-weight: 700; background: #1f2029; color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="دعوت دوستان">
                <span>🔗</span>
                <span>لینک دعوت</span>
              </button>

              <!-- Member Exit & Admin Delete Buttons (Both visible for Admin) -->
              <button type="button" onclick="window.handleLeaveGroupAction('${g}')" style="padding: 7px 12px; font-size: 0.74rem; font-weight: 800; background: rgba(239, 68, 68, 0.12); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.25); border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="خروج از این گروه">
                <span>🚪</span>
                <span>خروج از گروه</span>
              </button>

              ${A?`
                <button type="button" onclick="window.handleDeleteGroupAction('${g}')" style="padding: 7px 12px; font-size: 0.74rem; font-weight: 800; background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.4); border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="حذف کامل این گروه">
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
              <span>تعداد اعضا: <strong style="color: #e4e4e7;">${c(E.length)} نفر</strong></span>
            </div>
          </div>
        </div>

        <!-- ⚡ 1. Micro-Rivalry Card -->
        ${Z()}

          <!-- 🟢 2. Live Presence Ticker -->
          ${q()}

          <!-- 🏆 3. Weekly Countdown & League Tiers -->
          ${W()}

          <!-- 🌅 Early Birds Section for Group -->
          ${u(E)}

          <!-- 🏆 Leaderboard Time Filter: Today Only (Static Title) -->
          <div style="display: flex; justify-content: center; gap: 6px; margin-bottom: 20px; background: #1f2029; padding: 4px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); max-width: 260px; margin-left: auto; margin-right: auto;">
            <div style="flex: 1; padding: 8px 14px; border-radius: 12px; font-size: 0.82rem; font-weight: 800; text-align: center; border: 1px solid #7c3aed; background: #7c3aed; color: #ffffff; box-shadow: 0 2px 10px rgba(124, 58, 237, 0.35);">جدول رقابت امروز ☀️</div>
          </div>

          <!-- 🏆 3D-Style Podium (Center Gold 👑, Right Silver 🥈, Left Bronze 🥉) -->
          ${E.length>=1?`
            ${(()=>{const h=G&&(G.isUser||G.isCurrentUser||G.userId===a.userId||a.phone&&G.phone===a.phone),D=L&&(L.isUser||L.isCurrentUser||L.userId===a.userId||a.phone&&L.phone===a.phone),B=F&&(F.isUser||F.isCurrentUser||F.userId===a.userId||a.phone&&F.phone===a.phone);return`
              <div class="podium-container" style="display: flex; align-items: flex-end; justify-content: center; gap: 12px; margin: 24px 0 28px 0; padding: 0 10px; position: relative;">
                
                <!-- Rank 2 (Right, Silver Podium) -->
                <div style="flex: 1; max-width: 140px; display: flex; flex-direction: column; align-items: center; z-index: 2;">
                  <!-- Avatar & Badge -->
                  <div onclick="${D?"window.openEditProfileModal()":""}" style="position: relative; margin-bottom: 8px; text-align: center; display: inline-block; ${D?"cursor: pointer;":""}" title="${D?"ویرایش مشخصات شما":""}">
                    <div style="font-size: 1.5rem; margin-bottom: 2px;">🥈</div>
                    ${ut(L,52)}
                    <span style="position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%); background: #cbd5e1; color: #0f172a; font-size: 0.68rem; font-weight: 900; padding: 1px 8px; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.4);">۲</span>
                    ${D?'<span style="position: absolute; bottom: -2px; right: -2px; background: #7c3aed; color: white; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; border: 2px solid #16171d; box-shadow: 0 2px 6px rgba(0,0,0,0.5);">✏️</span>':""}
                  </div>

                  <strong onclick="${D?"window.openEditProfileModal()":""}" style="font-size: 0.82rem; color: ${D?"#c4b5fd":"#e4e4e7"}; text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; ${D?"cursor: pointer;":""}">${l((L==null?void 0:L.nickname)||(L==null?void 0:L.name)||"---")}</strong>
                  <span style="font-size: 0.72rem; color: #cbd5e1; font-weight: 900; margin-top: 2px;">${xe((L==null?void 0:L.displayStudyMins)||0)}</span>
                  <span style="font-size: 0.66rem; color: #8e8e9c;">${c((L==null?void 0:L.displayTestCount)||0)} تست</span>

                  <!-- 3D Silver Block -->
                  <div style="width: 100%; height: 95px; background: linear-gradient(180deg, rgba(203, 213, 225, 0.25) 0%, rgba(148, 163, 184, 0.1) 100%); border: 1.5px solid rgba(203, 213, 225, 0.4); border-top-left-radius: 14px; border-top-right-radius: 14px; margin-top: 10px; box-shadow: inset 0 2px 10px rgba(255,255,255,0.1), 0 10px 25px rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; font-size: 2.2rem; font-weight: 900; color: rgba(203, 213, 225, 0.3);">2</div>
                </div>

                <!-- Rank 1 (Center, Gold Podium with Crown 👑) -->
                <div style="flex: 1; max-width: 155px; display: flex; flex-direction: column; align-items: center; z-index: 3; transform: translateY(-10px);">
                  <!-- Avatar & Crown -->
                  <div onclick="${h?"window.openEditProfileModal()":""}" style="position: relative; margin-bottom: 8px; text-align: center; display: inline-block; ${h?"cursor: pointer;":""}" title="${h?"ویرایش مشخصات شما":""}">
                    <div style="font-size: 2rem; filter: drop-shadow(0 0 10px #fbbf24); animation: bounce 2s infinite;">👑</div>
                    ${ut(G,64)}
                    <span style="position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%); background: #fbbf24; color: #0f172a; font-size: 0.72rem; font-weight: 900; padding: 2px 10px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.4);">۱</span>
                    ${h?'<span style="position: absolute; bottom: -2px; right: -2px; background: #7c3aed; color: white; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; border: 2px solid #16171d; box-shadow: 0 2px 6px rgba(0,0,0,0.5);">✏️</span>':""}
                  </div>

                  <strong onclick="${h?"window.openEditProfileModal()":""}" style="font-size: 0.88rem; color: #fbbf24; text-align: center; font-weight: 900; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; ${h?"cursor: pointer;":""}">${l((G==null?void 0:G.nickname)||(G==null?void 0:G.name)||"---")}</strong>
                  <span style="font-size: 0.78rem; color: #f59e0b; font-weight: 900; margin-top: 2px;">${xe((G==null?void 0:G.displayStudyMins)||0)}</span>
                  <span style="font-size: 0.68rem; color: #fde68a;">${c((G==null?void 0:G.displayTestCount)||0)} تست</span>

                  <!-- 3D Gold Block -->
                  <div style="width: 100%; height: 125px; background: linear-gradient(180deg, rgba(245, 158, 11, 0.3) 0%, rgba(217, 119, 6, 0.12) 100%); border: 2px solid rgba(245, 158, 11, 0.6); border-top-left-radius: 16px; border-top-right-radius: 16px; margin-top: 10px; box-shadow: inset 0 2px 14px rgba(251, 191, 36, 0.25), 0 14px 30px rgba(245, 158, 11, 0.25); display: flex; align-items: center; justify-content: center; font-size: 2.8rem; font-weight: 900; color: rgba(251, 191, 36, 0.35);">1</div>
                </div>

                <!-- Rank 3 (Left, Bronze Podium) -->
                <div style="flex: 1; max-width: 140px; display: flex; flex-direction: column; align-items: center; z-index: 1;">
                  <!-- Avatar & Badge -->
                  <div onclick="${B?"window.openEditProfileModal()":""}" style="position: relative; margin-bottom: 8px; text-align: center; display: inline-block; ${B?"cursor: pointer;":""}" title="${B?"ویرایش مشخصات شما":""}">
                    <div style="font-size: 1.5rem; margin-bottom: 2px;">🥉</div>
                    ${ut(F,48)}
                    <span style="position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%); background: #cd7f32; color: #ffffff; font-size: 0.68rem; font-weight: 900; padding: 1px 8px; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.4);">۳</span>
                    ${B?'<span style="position: absolute; bottom: -2px; right: -2px; background: #7c3aed; color: white; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; border: 2px solid #16171d; box-shadow: 0 2px 6px rgba(0,0,0,0.5);">✏️</span>':""}
                  </div>

                  <strong onclick="${B?"window.openEditProfileModal()":""}" style="font-size: 0.82rem; color: ${B?"#c4b5fd":"#e4e4e7"}; text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; ${B?"cursor: pointer;":""}">${l((F==null?void 0:F.nickname)||(F==null?void 0:F.name)||"---")}</strong>
                  <span style="font-size: 0.72rem; color: #cd7f32; font-weight: 900; margin-top: 2px;">${xe((F==null?void 0:F.displayStudyMins)||0)}</span>
                  <span style="font-size: 0.66rem; color: #8e8e9c;">${c((F==null?void 0:F.displayTestCount)||0)} تست</span>

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
                  ${E.length===0?`
                    <tr>
                      <td colspan="6" style="text-align: center; padding: 24px; color: #8e8e9c;">
                        ${j?"⏳ در حال دریافت جدول رتبه‌بندی اعضا...":"هنوز رکوردی در این گروه ثبت نشده است."}
                      </td>
                    </tr>
                  `:E.map((h,D)=>{const B=D+1,H=h.isUser||h.isCurrentUser||h.userId===a.userId||a.phone&&h.phone===a.phone,le=H?_&&typeof _.isCurrentStudyingActive=="function"?_.isCurrentStudyingActive():!!(window.isUserStudyingNow&&window.isUserStudyingNow()):!!(_?_.isMemberStudying(h):h.isStudying&&h.lastHeartbeat&&Date.now()-h.lastHeartbeat<15*60*1e3),U=H?le&&typeof window.getCurrentFocusSubjectTitle=="function"?window.getCurrentFocusSubjectTitle():"":h.studySubject||h.subject||h.currentSubject||(Array.isArray(h.subjects)&&h.subjects.length>0?h.subjects[0]:null),fe=Y(h.displayStudyMins||0,B,E.length),we=B===1?"🥇":B===2?"🥈":B===3?"🥉":`#${c(B)}`;let ye="";D===me&&E.length>=4&&(ye=`
                        <tr style="background: linear-gradient(90deg, rgba(16, 185, 129, 0.18) 0%, rgba(16, 185, 129, 0.04) 100%); border-top: 1.5px solid #10b981; border-bottom: 1.5px solid #10b981;">
                          <td colspan="6" style="text-align: center; padding: 7px 12px; font-size: 0.74rem; font-weight: 900; color: #34d399; letter-spacing: 0.5px;">
                            🟢 ── محدوده صعود به لیگ بالاتر (Promotion Zone) ──
                          </td>
                        </tr>
                      `);let Me="";return D===pe&&E.length>=6&&pe>me&&(Me=`
                        <tr style="background: linear-gradient(90deg, rgba(239, 68, 68, 0.18) 0%, rgba(239, 68, 68, 0.04) 100%); border-top: 1.5px solid #ef4444; border-bottom: 1.5px solid #ef4444;">
                          <td colspan="6" style="text-align: center; padding: 7px 12px; font-size: 0.74rem; font-weight: 900; color: #f87171; letter-spacing: 0.5px;">
                            🔴 ── محدوده خطر سقوط به لیگ پایین‌تر (Relegation Zone) ──
                          </td>
                        </tr>
                      `),`
                      ${ye}
                      ${Me}
                      <tr class="leaderboard-row" data-search="${l(h.nickname)} ${l(h.target)}" onclick="${H?"window.openEditProfileModal()":""}" style="border-bottom: 1px solid rgba(255,255,255,0.04); background: ${H?"rgba(124, 58, 237, 0.12)":"transparent"}; ${H?"cursor: pointer;":""}">
                        
                        <td style="padding: 10px 12px; text-align: center; font-weight: 800; color: ${B<=3?"#facc15":"#a1a1aa"};">
                          ${we}
                        </td>

                        <td style="padding: 10px 12px; text-align: center;">
                          <span style="font-size: 0.68rem; background: ${fe.bg}; color: ${fe.color}; border: 1px solid ${fe.border}; padding: 2px 7px; border-radius: 6px; font-weight: 800; white-space: nowrap;">
                            ${fe.icon} ${fe.name}
                          </span>
                        </td>

                        <td style="padding: 10px 12px;">
                          <div style="display: flex; align-items: center; gap: 10px;">
                            ${ut(h,34)}
                            <div>
                              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                                <strong style="color: ${H?"#c4b5fd":"#e4e4e7"}; font-weight: 800;">${l(h.nickname||"کاربر")}</strong>
                                ${H?'<span style="font-size: 0.64rem; background: #7c3aed; color: white; padding: 1px 6px; border-radius: 4px; display: inline-flex; align-items: center; gap: 2px;" title="کلیک جهت ویرایش مشخصات">شما ✏️</span>':""}
                                ${le?`
                                  <span style="font-size: 0.65rem; background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid #10b981; padding: 2px 8px; border-radius: 10px; font-weight: 900; display: inline-flex; align-items: center; gap: 4px; box-shadow: 0 0 10px rgba(16, 185, 129, 0.4); animation: livePulse 2s infinite ease-in-out;">
                                    🟢 در حال مطالعه ${U?`(${l(U)})`:""}
                                  </span>
                                `:""}
                              </div>
                              <span style="font-size: 0.7rem; color: #8e8e9c; display: block; margin-top: 2px;">${l(h.target||"")}</span>
                            </div>
                          </div>
                        </td>

                        <td style="padding: 10px 12px; font-weight: 800; color: #38bdf8;">
                          ${xe(h.displayStudyMins||0)}
                        </td>

                        <td style="padding: 10px 12px; font-weight: 700; color: #cbd5e1;">
                          ${c(h.displayTestCount||0)}
                        </td>

                        <td style="padding: 10px 12px;">
                          ${ue(h.subjects)}
                        </td>

                      </tr>
                    `}).join("")}
                </tbody>
              </table>
            </div>

          </div>

      </div>
      ${((t=window.appState)==null?void 0:t.activeModal)==="editProfile"?Ut():""}
    `}catch(o){return console.error("Error rendering LeaderboardView:",o),`
      <div id="tab-leaderboard" class="main-container active" style="display: block; padding: 40px 20px; text-align: center; direction: rtl;">
        <h3 style="color: #ef4444;">خطا در بارگذاری تالار رقابت</h3>
        <p style="color: #a1a1aa; font-size: 0.85rem;">${Uo((o==null?void 0:o.message)||"خطای غیرمنتظره در بارگذاری داده‌ها")}</p>
        <button onclick="window.planexNavigateBackToGroups && window.planexNavigateBackToGroups(event)" style="margin-top: 15px; padding: 8px 16px; background: #7c3aed; color: white; border: none; border-radius: 10px; font-weight: 800; cursor: pointer;">
          ⬅️ برگشت به لیست گروه‌ها
        </button>
      </div>
    `}}const wn=bt,hn=dt;typeof window<"u"&&(window.renderLeaderboardView=bt,window.renderLeaderboard=bt,window.bindLeaderboardEvents=Fo,window.initLeaderboardView=dt,window.initLeaderboard=dt);function vn(){return`
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
  `}function Ho(n={}){var D,B,H,le;const{stopwatchTime:e=0,isStopwatchRunning:t=!1,pomodoroTime:o=1500,isPomodoroRunning:i=!1,timerType:a=1,presetMins:r=25,sessionTests:d=0,pomodoroActiveUsers:s=0,activityMode:l="study",selectedCategoryCode:c=null,selectedNonStudyCode:f="non_sports",selectedSubject:m="",selectedStudyMethod:y="یادگیری",sessionNote:w="",isModalMode:u=!1,focusAccordions:g={activity:!1,timing:!1,testNote:!1,audio:!1}}=n,b=y||((D=window.appState)==null?void 0:D.selectedStudyMethod)||((B=window.fabActivityState)==null?void 0:B.selectedPhase)||"یادگیری",v=U=>String(U).replace(/[0-9]/g,fe=>"۰۱۲۳۴۵۶۷۸۹"[fe]),A=a===2,k=l==="non-study"&&!A,T=!A&&!k;let x="#10b981",M="#10b981",P="linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",C="💾 ثبت پارت مطالعه",I="⚡ در حال تمرکز",R="▶ لمس جهت شروع";A?(x="#38bdf8",M="#0284c7",P="linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",C="☕ ثبت استراحت (بدون احتساب در ساعت مطالعه)",I="☕ در حال استراحت پومودورو",R="▶ لمس جهت شروع استراحت"):k&&(x="#f59e0b",M="#d97706",P="linear-gradient(135deg, #d97706 0%, #b45309 100%)",C="🧘 ثبت فعالیت غیردرسی (بدون احتساب در ساعت مطالعه)",I="🧘 در حال فعالیت غیردرسی",R="▶ لمس جهت شروع فعالیت");const E=typeof p<"u"&&typeof p.getStudyMinutesByDate=="function"?p.getStudyMinutesByDate():0,j=typeof p<"u"&&typeof p.getDailyTestCount=="function"?p.getDailyTestCount():0,J=typeof p<"u"?p.getCategories():[],G=typeof p<"u"&&typeof p.getNonStudyCategories=="function"?p.getNonStudyCategories():[{code:"non_sports",title:"ورزش و تندرستی",icon:"🏃",color:"#f59e0b"},{code:"non_sleep",title:"خواب و استراحت",icon:"😴",color:"#8b5cf6"},{code:"non_meal",title:"میان‌وعده و تغذیه",icon:"☕",color:"#10b981"},{code:"non_walk",title:"پیاده‌روی و هوای آزاد",icon:"🚶",color:"#06b6d4"},{code:"non_zen",title:"مدیتیشن و ذهن‌آگاهی",icon:"🧘",color:"#ec4899"},{code:"non_personal",title:"کارهای شخصی و تفریح",icon:"📱",color:"#f43f5e"},{code:"non_house",title:"امور منزل و خرید",icon:"🧹",color:"#64748b"}],L=c||((H=J.find(U=>Oe(U)))==null?void 0:H.code)||((le=J[0])==null?void 0:le.code)||"ع-س",F=J.find(U=>U.code===L)||J[0]||{title:"داخلی"},Y=G.find(U=>U.code===f)||G[0],Q=A?{title:"استراحت پومودورو"}:T?F:Y,Z=a===0?e:o,N=a===0?t:i,q=Math.max(0,Z),W=Math.floor(q/3600),ue=Math.floor(q%3600/60),me=q%60,pe=U=>U.toString().padStart(2,"0"),h=W>0?`${pe(W)}:${pe(ue)}:${pe(me)}`:`${pe(ue)}:${pe(me)}`;return`
    <div class="focus-view-container ${u?"focus-modal-layout":"main-container"}" style="direction: rtl; padding-bottom: 70px; color: #fff;">
      
      <!-- Top Title Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="width: 32px; height: 32px; border-radius: 10px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 1.1rem;">
            ${A?"☕":T?"🎯":"🧘"}
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
          ${u?`
            <button id="btn-close-focus-modal" class="btn-icon btn-close-modal" data-close-modal="true" onclick="event.preventDefault(); event.stopPropagation(); window.closeActiveModal ? window.closeActiveModal() : window.closeFocusModal();" style="background: #1f2029; border-radius: 50%; width: 28px; height: 28px; border: 1px solid rgba(255, 255, 255, 0.08); color: #cbd5e1; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 0.9rem;">✕</button>
          `:`
            <span style="font-size: 0.72rem; font-weight: 600; background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08); padding: 3px 8px; border-radius: 8px; font-family: 'Outfit';">
              مطالعه امروز: ${xe(E)} | ${v(j)} تست
            </span>
          `}
        </div>
      </div>

      <!-- Live Study Status Bar when running -->
      ${N?`
        <div style="background: #16171d; border: 1px solid ${x}; border-radius: 12px; padding: 8px 12px; margin-bottom: 10px; display: flex; align-items: center; justify-content: space-between; gap: 8px; animation: fadeIn 0.3s ease;">
          <div style="display: flex; align-items: center; gap: 6px;">
            <span class="neon-pulse-dot animate-pulse" style="background: ${x};"></span>
            <span style="font-size: 0.76rem; font-weight: 700; color: ${x};">
              وضعیت زنده:
              <strong style="color: #ffffff;">«${A?"استراحت و ریکاوری پومودورو":T?m?`${F.title} (${m})`:F.title:m?`${Y.title} (${m})`:Y.title}»</strong>
            </span>
          </div>
          <span style="font-size: 0.65rem; background: rgba(255,255,255,0.08); color: ${x}; padding: 2px 6px; border-radius: 6px; font-weight: 600; white-space: nowrap;">
            ${A?"☕ استراحت":k?"🧘 غیردرسی":"🟢 در حال مطالعه"}
          </span>
        </div>
      `:""}

      <!-- 📚 1. ACCORDION: ACTIVITY TYPE & SUBJECT SELECTION -->
      <div class="glass-panel" style="margin-bottom: 10px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-accordion-toggle" id="btn-accordion-activity" data-accordion-key="activity" onclick="event.preventDefault(); event.stopPropagation(); window.toggleFocusAccordion && window.toggleFocusAccordion('activity', event)" style="width: 100%; padding: 12px 14px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; font-weight: 700; color: #e4e4e7; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 88%;">
            <span style="font-size: 0.95rem;">${A?"☕":T?"📚":"🧘"}</span>
            <span>انتخاب درس و فعالیت: <strong style="color: ${x}; font-weight: 800;">«${Q.title}${m?` - ${m}`:""}»</strong></span>
          </div>
          <span class="accordion-chevron" style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${g.activity?"180deg":"0deg"});">▼</span>
        </button>
        
        <div id="accordion-drawer-activity" class="accordion-drawer" style="display: ${g.activity?"block":"none"}; padding: 12px 14px 14px 14px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 0.76rem; font-weight: 700; color: #e4e4e7;">
              نوع فعالیت:
            </span>
            <span style="font-size: 0.7rem; color: #8e8e9c;">
              ${A?"☕ استراحت":T?"📚 درسی":"🧘 غیردرسی"}
            </span>
          </div>

          <div style="display: flex; gap: 6px; margin-bottom: 10px;">
            <button type="button" class="btn-activity-mode-switch ${T?"active":""}" data-mode="study" onclick="event.preventDefault(); event.stopPropagation(); window.setFocusActivityMode && window.setFocusActivityMode('study', event)" style="flex: 1; padding: 7px 10px; border-radius: 10px; font-size: 0.78rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; border: 1px solid ${T?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${T?"#7c3aed":"#1f2029"}; color: ${T?"#ffffff":"#a1a1aa"}; transition: all 0.2s ease;">
              <span style="font-size: 0.95rem;">📚</span>
              <span>فعالیت درسی</span>
            </button>
            
            <button type="button" class="btn-activity-mode-switch ${T?"":"active"}" data-mode="non-study" onclick="event.preventDefault(); event.stopPropagation(); window.setFocusActivityMode && window.setFocusActivityMode('non-study', event)" style="flex: 1; padding: 7px 10px; border-radius: 10px; font-size: 0.78rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; border: 1px solid ${T?"rgba(255,255,255,0.08)":"#f59e0b"}; background: ${T?"#1f2029":"#d97706"}; color: ${T?"#a1a1aa":"#ffffff"}; transition: all 0.2s ease;">
              <span style="font-size: 0.95rem;">☕</span>
              <span>فعالیت غیردرسی</span>
            </button>
          </div>

          <div id="focus-activity-study-container" style="display: ${T?"block":"none"};">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <label style="font-size: 0.72rem; font-weight: 600; color: var(--text-secondary);">
                نام درس:
              </label>
              <button type="button" onclick="if(window.openActivityModal){ window.openActivityModal(); }" style="background: none; border: none; color: #a1a1aa; font-size: 0.7rem; font-weight: 600; cursor: pointer; padding: 0;">
                ➕ افزودن درس
              </button>
            </div>

            <div style="display: flex; gap: 5px; overflow-x: auto; padding-bottom: 4px; margin-bottom: 8px;" id="focus-study-category-chips">
              ${J.map(U=>`
                <button type="button" class="btn-focus-cat-chip ${U.code===L?"active":""}" data-code="${U.code}" data-title="${U.title}" onclick="event.preventDefault(); event.stopPropagation(); window.handleSelectFocusSubject && window.handleSelectFocusSubject(this, '${U.title}', '${U.code}')" style="display: inline-flex; align-items: center; gap: 4px; padding: 4px 8px; border-radius: 8px; border: 1px solid ${U.code===L?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${U.code===L?"#7c3aed":"#1f2029"}; color: ${U.code===L?"#ffffff":"#e4e4e7"}; font-size: 0.74rem; font-weight: 600; cursor: pointer; white-space: nowrap;">
                  <span>${U.icon||"📚"}</span>
                  <span>${U.title}</span>
                  <span class="btn-delete-study-cat" data-code="${U.code}" data-title="${U.title}" title="حذف «${U.title}»" style="display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; border-radius: 50%; font-size: 0.6rem; color: #f87171; background: rgba(239,68,68,0.2); margin-right: 2px;">✕</span>
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
                ${[{id:"یادگیری",label:"یادگیری",icon:"🧠"},{id:"تست‌زنی",label:"تست‌زنی",icon:"🎯"},{id:"مرور",label:"مرور",icon:"🔄"},{id:"جمع‌بندی",label:"جمع‌بندی",icon:"📑"}].map(U=>{const fe=b===U.id;return`
                    <button type="button" class="btn-phase-chip btn-manual-study-pill btn-fab-study-pill ${fe?"active":""}" data-phase="${U.id}" data-pill="${U.id}" onclick="event.preventDefault(); event.stopPropagation(); window.selectStudyPhase && window.selectStudyPhase(this, '${U.id}')" style="padding: 6px 2px; border-radius: 8px; border: 1px solid ${fe?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${fe?"#7c3aed":"#1f2029"}; color: ${fe?"#ffffff":"#a1a1aa"}; font-size: 0.72rem; font-weight: 700; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 2px; transition: all 0.15s ease;">
                      <span style="font-size: 0.95rem;">${U.icon}</span>
                      <span>${U.label}</span>
                    </button>
                  `}).join("")}
              </div>
              <input type="hidden" id="focus-phase-input" value="${b}" />
            </div>
          </div>

          <div id="focus-activity-nonstudy-container" style="display: ${T?"none":"block"};">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <label style="font-size: 0.72rem; font-weight: 600; color: var(--text-secondary);">
                دسته‌بندی غیردرسی:
              </label>
              <button type="button" id="btn-add-custom-nonstudy-quick" style="background: none; border: none; color: #a1a1aa; font-size: 0.7rem; font-weight: 600; cursor: pointer; padding: 0;">
                ➕ افزودن فعالیت
              </button>
            </div>

            <div style="display: flex; gap: 5px; overflow-x: auto; padding-bottom: 4px; margin-bottom: 8px;">
              ${G.map(U=>`
                <button type="button" class="btn-nonstudy-cat-chip ${U.code===f?"active":""}" data-code="${U.code}" data-title="${U.title}" onclick="event.preventDefault(); event.stopPropagation(); window.handleSelectFocusSubject && window.handleSelectFocusSubject(this, '${U.title}', '${U.code}')" style="display: inline-flex; align-items: center; gap: 4px; padding: 4px 8px; border-radius: 8px; border: 1px solid ${U.code===f?"#d97706":"rgba(255,255,255,0.08)"}; background: ${U.code===f?"#d97706":"#1f2029"}; color: ${U.code===f?"#ffffff":"#e4e4e7"}; font-size: 0.74rem; font-weight: 600; cursor: pointer; white-space: nowrap;">
                  <span>${U.icon||"☕"}</span>
                  <span>${U.title}</span>
                  <span class="btn-delete-nonstudy-cat" data-code="${U.code}" data-title="${U.title}" title="حذف «${U.title}»" style="display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; border-radius: 50%; font-size: 0.6rem; color: #f87171; background: rgba(239,68,68,0.2); margin-right: 2px;">✕</span>
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
            <span>زمان‌بندی: <strong style="color: ${x}; font-weight: 800;">${a===0?"کرونومتر":a===2?"۵ دقیقه استراحت":`${r} دقیقه پومودورو`}</strong></span>
          </div>
          <span class="accordion-chevron" style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${g.timing?"180deg":"0deg"});">▼</span>
        </button>

        <div id="accordion-drawer-timing" class="accordion-drawer" style="display: ${g.timing?"block":"none"}; padding: 12px 14px 14px 14px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
          <!-- Timer Type Tabs -->
          <div style="display: flex; gap: 4px; background: #1f2029; padding: 3px; border-radius: 10px; margin-bottom: 10px;">
            <button type="button" class="btn-focus-tab ${a===1?"active btn-primary":"glass-panel"}" data-type="1" onclick="window.setFocusTimerType && window.setFocusTimerType(1)" style="flex: 1; padding: 6px; border: none; font-size: 0.74rem; font-weight: 600; cursor: pointer;">
              🍅 پومودورو (${r}دقیقه)
            </button>
            <button type="button" class="btn-focus-tab ${a===0?"active btn-primary":"glass-panel"}" data-type="0" onclick="window.setFocusTimerType && window.setFocusTimerType(0)" style="flex: 1; padding: 6px; border: none; font-size: 0.74rem; font-weight: 600; cursor: pointer;">
              ⏱️ کرونومتر
            </button>
            <button type="button" class="btn-focus-tab ${a===2?"active":"glass-panel"}" data-type="2" onclick="window.setFocusTimerType && window.setFocusTimerType(2)" style="flex: 1; padding: 6px; border: none; font-size: 0.74rem; font-weight: 600; cursor: pointer; background: ${a===2?"#0284c7":"transparent"}; color: ${a===2?"#fff":"#a1a1aa"};">
              ☕ استراحت (۵ دقیقه)
            </button>
          </div>

          <!-- Presets in Pomodoro mode -->
          <div id="focus-pomodoro-presets-container" style="display: ${a===1?"flex":"none"}; justify-content: center; gap: 4px; flex-wrap: wrap;">
            ${[15,25,30,45,50,60].map(U=>`
              <button type="button" class="btn-focus-preset ${r===U?"active":""}" data-mins="${U}" onclick="window.setFocusPresetMins && window.setFocusPresetMins(${U})" style="padding: 4px 10px; font-size: 0.72rem; font-weight: 600; border-radius: 12px; border: 1px solid ${r===U?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${r===U?"#7c3aed":"#1f2029"}; color: ${r===U?"#ffffff":"#a1a1aa"}; cursor: pointer;">
                ${U} دقیقه
              </button>
            `).join("")}
          </div>
        </div>
      </div>

      <!-- 🌟 CENTRAL FEATURE: PROMINENT LARGE POMODORO TIMER CIRCLE -->
      <div class="glass-panel timer-circle-panel" style="padding: 20px 16px; margin-bottom: 14px; border-radius: 18px; border: 1px solid ${x}; background: linear-gradient(180deg, rgba(22, 23, 29, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%); text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
        
        <!-- Radial Timer Display -->
        <div id="immersion-clock-clickable" class="timer-circle countdown-timer" onclick="event.preventDefault(); event.stopPropagation(); if(${N}){ window.finishPomodoroSession && window.finishPomodoroSession(); } else { window.planexStartFocusTimer && window.planexStartFocusTimer(event); }" style="position: relative; width: 230px; height: 230px; margin: 0 auto 16px auto; display: flex; align-items: center; justify-content: center; cursor: pointer;">
          <svg width="230" height="230" viewBox="0 0 220 220" style="transform: rotate(-90deg); width: 100%; height: 100%; filter: drop-shadow(0 0 12px ${x});">
            <circle cx="110" cy="110" r="95" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="12"></circle>
            <circle cx="110" cy="110" r="95" fill="none" stroke="${x}" stroke-width="12" 
              stroke-dasharray="596.9" 
              stroke-dashoffset="${596.9-596.9*(a===0?e%3600/3600:a===2?o/300:o/(r*60))}" 
              stroke-linecap="round" style="transition: stroke-dashoffset 0.5s ease;"></circle>
          </svg>
          
          <div style="position: absolute; text-align: center; width: 100%;">
            <div id="focus-timer-display" data-alias="timer-clock-display" style="font-size: 2.8rem; font-weight: 900; font-family: 'Outfit', sans-serif; color: #ffffff; letter-spacing: 1.5px; text-shadow: 0 0 24px ${x}; line-height: 1;">
              ${h}
            </div>
            <div style="font-size: 0.78rem; font-weight: 700; color: ${N?x:"#a1a1aa"}; margin-top: 6px;">
              ${N?I:R}
            </div>
          </div>
        </div>

        <!-- Timer Action Buttons: WIDE ATTACHED START BUTTON -->
        <div style="display: flex; gap: 8px;">
          <button type="button" id="btn-toggle-timer-main" onclick="event.preventDefault(); event.stopPropagation(); if(${N}){ window.finishPomodoroSession && window.finishPomodoroSession(); } else { window.planexStartFocusTimer && window.planexStartFocusTimer(event); }" class="btn-primary" style="flex: 1; height: 46px; font-size: 1rem; font-weight: 800; background: ${N?"#ef4444":M}; border-radius: 12px; border: none; cursor: pointer; color: white; box-shadow: 0 4px 16px ${N?"rgba(239,68,68,0.35)":"rgba(16,185,129,0.35)"}; transition: all 0.2s ease;">
            ${N?"⏸ توقف و ثبت پارت":A?"☕ شروع استراحت":k?"🧘 شروع فعالیت غیردرسی":"▶ شروع تایمر"}
          </button>
          <button type="button" id="btn-reset-timer-main" onclick="event.preventDefault(); event.stopPropagation(); window.resetTimer && window.resetTimer(event);" class="glass-panel" style="width: 70px; height: 46px; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); cursor: pointer; font-size: 0.82rem; font-weight: 700; border-radius: 12px; color: #a1a1aa; display: flex; align-items: center; justify-content: center; gap: 4px;" title="ریست تایمر (لغو بدون ثبت)">
            🔄
          </button>
        </div>

      </div>

      <!-- 💾 4. DEDICATED ACTION BUTTONS: AUTO-SYNC LOCAL & CLOUD SAVE -->
      <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px;">
        <!-- Button 1: Primary Save with Auto-Sync -->
        <button type="button" id="btn-save-activity-local" onclick="window.finishPomodoroSession && window.finishPomodoroSession()" style="width: 100%; height: 46px; background: ${P}; color: white; border: none; border-radius: 12px; font-size: 0.92rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35); transition: all 0.2s ease;">
          <span>${C}</span>
        </button>

        <!-- Button 2: Switch to Manual Log Modal -->
        <button type="button" onclick="if(window.openManualActivityLogModal){ window.openManualActivityLogModal(); } else { window.appState.activeModal = 'manualLog'; window.renderApp(); }" style="width: 100%; height: 38px; background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; font-size: 0.8rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; transition: all 0.2s ease;">
          <span style="font-size: 0.95rem;">➕</span>
          <span>ثبت دستی (بدون تایمر)</span>
        </button>
      </div>

      <!-- 🎵 Ambient Focus Sound Player Widget -->
      ${Xt()}


      <!-- 🎯 5. ACCORDION: TEST COUNTER & NOTES (Optional) -->
      <div class="glass-panel" style="margin-bottom: 10px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-accordion-toggle" id="btn-accordion-testNote" data-accordion-key="testNote" onclick="event.preventDefault(); event.stopPropagation(); window.toggleFocusAccordion && window.toggleFocusAccordion('testNote', event);" style="width: 100%; padding: 12px 14px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; font-weight: 700; color: #e4e4e7;">
            <span style="font-size: 0.95rem;">📝</span>
            <span>ثبت تست و یادداشت (اختیاری) ${d>0?`<strong style="color: #38bdf8; font-weight: 800;">(${d} تست)</strong>`:""}</span>
          </div>
          <span class="accordion-chevron" style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${g.testNote?"180deg":"0deg"});">▼</span>
        </button>

        <div id="accordion-drawer-testNote" class="accordion-drawer" style="display: ${g.testNote?"block":"none"}; padding: 12px 14px 14px 14px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
          ${T?`
            <!-- Dedicated Test Counter -->
            <div style="margin-bottom: 10px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-size: 0.78rem; color: #e4e4e7; font-weight: 700;">تست‌شمار پارت مطالعه:</span>
                <span style="font-size: 0.68rem; color: #8e8e9c;">امروز: <strong style="color:#e4e4e7;">${j+d}</strong> تست</span>
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
            <input type="text" id="input-focus-session-note" value="${w||""}" placeholder="نکات مهم یا ارزیابی شخصی..." style="width: 100%; box-sizing: border-box; height: 34px; padding: 0 10px; font-size: 0.76rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; color: #fff;" />
          </div>
        </div>
      </div>

    </div>
  `}function Sn(n={}){return`
    <div id="modal-focus-view" class="modal-overlay" style="position: fixed; inset: 0; z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 14px;">
      <div class="modal-backdrop" style="position: absolute; inset: 0; background: rgba(12, 13, 17, 0.88); backdrop-filter: blur(16px);" data-close-modal="true" onclick="if(!window.isTimerRunningCheck()){ window.closeFocusModal(); }"></div>
      
      <div class="glass-panel" style="position: relative; width: 100%; max-width: 520px; padding: 20px; border-radius: 18px; border: 1px solid rgba(255, 255, 255, 0.06); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8); max-height: 94vh; overflow-y: auto; background: #16171d; color: #fff;">
        ${Ho({...n,isModalMode:!0})}
      </div>
    </div>
  `}function kn(n={}){var L,F,Y,Q,Z;const{activityMode:e="study",selectedCategoryCode:t=null,selectedNonStudyCode:o="non_sports",subject:i="",durationMins:a=60,startTime:r="08:00",endTime:d="09:00",testCount:s=0,note:l="",durationMode:c="add",testCorrect:f=0,testWrong:m=0,testUnanswered:y=0}=n,w=N=>String(N).replace(/[0-9]/g,q=>"۰۱۲۳۴۵۶۷۸۹"[q]),u=e!=="non-study",g=(typeof p<"u"?p.getCategories():[])||[],b=g.filter(N=>Oe(N)),v=b.length>0?b:g,A=(typeof p<"u"&&typeof p.getNonStudyCategories=="function"?p.getNonStudyCategories():[{code:"non_sports",title:"ورزش و تندرستی",icon:"🏃",color:"#f59e0b"},{code:"non_rest",title:"استراحت و تفریح",icon:"☕",color:"#8b5cf6"},{code:"non_sleep",title:"خواب و ریکاوری",icon:"😴",color:"#6366f1"},{code:"non_meal",title:"میانوعده و تغذیه",icon:"🍎",color:"#10b981"},{code:"non_personal",title:"کارهای شخصی",icon:"📱",color:"#ec4899"},{code:"non_walk",title:"پیادهروی و هوای آزاد",icon:"🚶",color:"#06b6d4"},{code:"non_house",title:"امور منزل و خرید",icon:"🧹",color:"#64748b"}])||[],k=t&&!String(t).startsWith("non_")?t:((L=v.find(N=>Oe(N)))==null?void 0:L.code)||((F=v[0])==null?void 0:F.code)||"cat_dakheli";v.find(N=>N.code===k)||v[0],A.find(N=>N.code===o)||A[0];const T=Math.max(1,parseInt(a)||60),x=r||"08:00";let M=d;if(!M){const[N,q]=x.split(":").map(Number),ue=((!isNaN(N)&&!isNaN(q)?N*60+q:480)+T)%1440,me=String(Math.floor(ue/60)).padStart(2,"0"),pe=String(ue%60).padStart(2,"0");M=`${me}:${pe}`}const P=Math.max(0,parseInt(f)||0),C=Math.max(0,parseInt(m)||0),I=Math.max(0,parseInt(y)||0),R=P+C+I;let E=null,j="—";R>0&&(E=+((3*P-C)/(3*R)*100).toFixed(1),j=w(E.toFixed(1))+"%");let J=0;try{J=typeof p<"u"&&typeof p.getStudyMinutesByDate=="function"?p.getStudyMinutesByDate():0}catch{}const G=c==="replace"?T:J+T;return`
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
            <button type="button" id="btn-manual-mode-study" class="btn-manual-mode-tab ${u?"active":""}" data-mode="study" onclick="event.preventDefault(); event.stopPropagation(); window.setManualLogMode && window.setManualLogMode('study', event)" style="flex: 1; padding: 10px 14px; border-radius: 12px; font-size: 0.86rem; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; border: 1px solid ${u?"#7c3aed":"transparent"}; background: ${u?"#7c3aed":"transparent"}; color: ${u?"#ffffff":"#a1a1aa"}; transition: all 0.2s ease;">
              <span style="font-size: 1.15rem;">📚</span>
              <span>فعالیت درسی (مطالعه و تست)</span>
            </button>

            <button type="button" id="btn-manual-mode-nonstudy" class="btn-manual-mode-tab ${u?"":"active"}" data-mode="non-study" onclick="event.preventDefault(); event.stopPropagation(); window.setManualLogMode && window.setManualLogMode('non-study', event)" style="flex: 1; padding: 10px 14px; border-radius: 12px; font-size: 0.86rem; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; border: 1px solid ${u?"transparent":"#7c3aed"}; background: ${u?"transparent":"#7c3aed"}; color: ${u?"#a1a1aa":"#ffffff"}; transition: all 0.2s ease;">
              <span style="font-size: 1.15rem;">☕</span>
              <span>فعالیت غیردرسی (ورزش / روتین)</span>
            </button>
          </div>
        </div>

        <!-- 📚 2. LESSON / CATEGORY SELECTION -->
        <div class="glass-panel" style="padding: 14px; margin-bottom: 16px; border-radius: 18px; border: 1px solid rgba(255,255,255,0.06); background: #16171d;">
          <!-- Study categories -->
          <div id="manual-study-cats-section" style="display: ${u?"block":"none"};">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <label style="font-size: 0.78rem; font-weight: 800; color: var(--text-secondary);">
                انتخاب درس:
              </label>
              <button type="button" onclick="if(window.openActivityModal){ window.openActivityModal(); }" style="background: none; border: none; color: #a1a1aa; font-size: 0.74rem; font-weight: bold; cursor: pointer; padding: 0;">
                ➕ افزودن درس دلخواه
              </button>
            </div>

            <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 6px; margin-bottom: 12px;" id="manual-study-chips-list">
              ${v.map(N=>`
                <button type="button" class="btn-manual-cat-chip ${N.code===k?"active":""}" data-code="${N.code}" data-title="${N.title}" data-color="${N.color||"#0ea5e9"}" onclick="event.preventDefault(); event.stopPropagation(); window.handleSelectManualSubject && window.handleSelectManualSubject(this, '${N.title}', '${N.code}')" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 13px; border-radius: 12px; border: 1px solid ${N.code===k?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${N.code===k?"#7c3aed":"#1f2029"}; color: ${N.code===k?"#ffffff":"#e2e8f0"}; font-size: 0.8rem; font-weight: 700; cursor: pointer; white-space: nowrap; transition: all 0.15s ease;">
                  <span>${N.icon||"📚"}</span>
                  <span>${N.title}</span>
                </button>
              `).join("")}
            </div>

            <!-- 🌟 Study Phase Selection Chips -->
            <div style="margin-bottom: 12px;">
              <label style="display: block; font-size: 0.76rem; font-weight: 800; color: var(--text-secondary); margin-bottom: 6px;">
                فاز / نوع مطالعه (الزامی):
              </label>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;" id="manual-phase-chips-list">
                ${[{id:"یادگیری",label:"یادگیری",icon:"🧠"},{id:"تست‌زنی",label:"تست‌زنی",icon:"🎯"},{id:"مرور",label:"مرور",icon:"🔄"},{id:"جمع‌بندی",label:"جمع‌بندی",icon:"📑"}].map(N=>{var W,ue,me,pe;const q=((W=window.fabActivityState)==null?void 0:W.selectedPhase)===N.id||((ue=window.fabActivityState)==null?void 0:ue.studyType)===N.id||((me=window.appState)==null?void 0:me.selectedStudyMethod)===N.id||!((pe=window.fabActivityState)!=null&&pe.selectedPhase)&&N.id==="یادگیری";return`
                    <button type="button" class="btn-phase-chip btn-manual-study-pill ${q?"active":""}" data-phase="${N.id}" data-pill="${N.id}" onclick="event.preventDefault(); event.stopPropagation(); window.selectStudyPhase && window.selectStudyPhase(this, '${N.id}')" style="padding: 8px 4px; border-radius: 12px; border: 1px solid ${q?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${q?"#7c3aed":"#1f2029"}; color: ${q?"#ffffff":"#e4e4e7"}; font-size: 0.78rem; font-weight: 800; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 2px; transition: all 0.15s ease;">
                      <span style="font-size: 1.1rem;">${N.icon}</span>
                      <span>${N.label}</span>
                    </button>
                  `}).join("")}
              </div>
              <input type="hidden" id="input-manual-phase" value="${((Y=window.fabActivityState)==null?void 0:Y.selectedPhase)||((Q=window.fabActivityState)==null?void 0:Q.studyType)||((Z=window.appState)==null?void 0:Z.selectedStudyMethod)||"یادگیری"}" />
            </div>

            <div>
              <label style="display: block; font-size: 0.76rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 5px;">
                مبحث یا موضوع مطالعه (اختیاری):
              </label>
              <input type="text" id="input-manual-subject" value="${i||""}" placeholder="مثلاً: قلب و عروق، فصل ۳ ژنتیک، تستهای جامع..." style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-size: 0.84rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #fff;" />
            </div>
          </div>

          <!-- Non-study categories -->
          <div id="manual-nonstudy-cats-section" style="display: ${u?"none":"block"};">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <label style="font-size: 0.78rem; font-weight: 800; color: var(--text-secondary);">
                انتخاب دسته‌بندی غیردرسی:
              </label>
              <button type="button" id="btn-manual-add-nonstudy" onclick="if(window.openActivityModal){ window.openActivityModal(); }" style="background: none; border: none; color: #a1a1aa; font-size: 0.74rem; font-weight: bold; cursor: pointer; padding: 0;">
                ➕ افزودن فعالیت جدید
              </button>
            </div>

            <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 6px; margin-bottom: 12px;" id="manual-nonstudy-chips-list">
              ${A.map(N=>`
                <button type="button" class="btn-manual-nonstudy-chip ${N.code===o?"active":""}" data-code="${N.code}" data-title="${N.title}" data-color="${N.color||"#f59e0b"}" onclick="event.preventDefault(); event.stopPropagation(); window.handleSelectManualSubject && window.handleSelectManualSubject(this, '${N.title}', '${N.code}')" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 13px; border-radius: 12px; border: 1px solid ${N.code===o?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${N.code===o?"#7c3aed":"#1f2029"}; color: ${N.code===o?"#ffffff":"#e2e8f0"}; font-size: 0.8rem; font-weight: 700; cursor: pointer; white-space: nowrap; transition: all 0.15s ease;">
                  <span>${N.icon||"☕"}</span>
                  <span>${N.title}</span>
                </button>
              `).join("")}
            </div>

            <div>
              <label style="display: block; font-size: 0.76rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 5px;">
                عنوان یا شرح فعالیت (اختیاری):
              </label>
              <input type="text" id="input-manual-nonstudy-subject" value="${i||""}" placeholder="مثلاً: دویدن صبحگاهی، خواب بعد از ناهار، خرید منزل..." style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-size: 0.84rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #fff;" />
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
                <input type="time" id="input-manual-start-time" value="${x}" oninput="window.syncManualTimeInputs && window.syncManualTimeInputs('from_times')" style="width: 100%; box-sizing: border-box; height: 42px; padding: 0 10px; font-size: 1.05rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #38bdf8; text-align: center;" />
              </div>
              <div>
                <label style="display: block; font-size: 0.7rem; font-weight: bold; color: #a1a1aa; margin-bottom: 4px;">تا ساعت (پایان):</label>
                <input type="time" id="input-manual-end-time" value="${M}" oninput="window.syncManualTimeInputs && window.syncManualTimeInputs('from_times')" style="width: 100%; box-sizing: border-box; height: 42px; padding: 0 10px; font-size: 1.05rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #38bdf8; text-align: center;" />
              </div>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 1rem;">⏳</span>
              <span style="font-size: 0.82rem; color: #e4e4e7; font-weight: 800;">مجموع مدت زمان:</span>
            </div>
            <span id="manual-duration-human-badge" style="font-size: 0.76rem; color: #a1a1aa; font-weight: bold; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); padding: 3px 10px; border-radius: 10px;">
              ${xe(T)}
            </span>
          </div>

          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
            <button type="button" id="btn-manual-dur-minus-15" class="btn-dur-adjust" data-change="-15" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(-15)" style="padding: 0 10px; height: 44px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; font-size: 0.85rem; font-weight: 800; cursor: pointer;">−۱۵</button>
            <button type="button" id="btn-manual-dur-minus-5" class="btn-dur-adjust" data-change="-5" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(-5)" style="padding: 0 10px; height: 44px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; font-size: 0.85rem; font-weight: 800; cursor: pointer;">−۵</button>
            
            <div style="flex: 1; position: relative;">
              <input type="number" id="manual-duration-input" data-alias="input-manual-duration" min="1" max="1440" value="${T}" oninput="window.updateManualDurationPreview && window.updateManualDurationPreview(this.value)" style="width: 100%; box-sizing: border-box; height: 44px; text-align: center; font-size: 1.35rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; color: #e4e4e7;" />
              <span style="position: absolute; left: 10px; top: 12px; font-size: 0.72rem; color: #94a3b8; pointer-events: none;">دقیقه</span>
            </div>

            <button type="button" id="btn-manual-dur-plus-5" class="btn-dur-adjust" data-change="5" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(5)" style="padding: 0 10px; height: 44px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; font-size: 0.85rem; font-weight: 800; cursor: pointer;">+۵</button>
            <button type="button" id="btn-manual-dur-plus-15" class="btn-dur-adjust" data-change="15" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(15)" style="padding: 0 10px; height: 44px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; font-size: 0.85rem; font-weight: 800; cursor: pointer;">+۱۵</button>
          </div>

          <!-- Quick Duration Presets (-15, +5, +15, 15m, 30m, 1h, 1.5h, 2h) -->
          <div style="display: flex; gap: 6px; justify-content: center; flex-wrap: wrap; margin-bottom: 14px;">
            ${[15,30,45,60,90,120].map(N=>`
              <button type="button" class="btn-quick-dur-preset ${T===N?"active":""}" data-mins="${N}" onclick="event.preventDefault(); event.stopPropagation(); window.setManualDurationPreset && window.setManualDurationPreset(${N})" style="flex: 1; min-width: 65px; padding: 6px 4px; font-size: 0.76rem; font-weight: 800; border-radius: 10px; border: 1px solid ${T===N?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${T===N?"#7c3aed":"#1f2029"}; color: ${T===N?"#ffffff":"#a1a1aa"}; cursor: pointer; transition: all 0.15s ease;">
                ${N>=60?N===60?"۱ ساعت":`${N/60} ساعت`:`${N} دقیقه`}
              </button>
            `).join("")}
          </div>

          <!-- Duration Mode Toggle: Add vs Replace -->
          <div id="manual-duration-mode-section" style="display: ${u?"block":"none"}; margin-bottom: 10px;">
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
            <span style="font-size: 0.8rem; font-weight: 700; color: #c4b5fd;">مجموع نهایی ثبت‌شده: <span id="manual-final-total-text" style="color: #e4e4e7;">${xe(G)}</span></span>
          </div>
        </div>

        <!-- 🎯 4. TEST DETAILS SECTION (Study mode only) -->
        <div id="manual-tests-section" class="glass-panel" style="display: ${u?"block":"none"}; padding: 16px; margin-bottom: 16px; border-radius: 18px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 1.2rem;">🎯</span>
              <span style="font-size: 0.86rem; color: #e4e4e7; font-weight: 900;">جزئیات تستها:</span>
            </div>
            <span id="manual-tests-total-badge" style="font-size: 0.76rem; color: #a1a1aa; font-weight: bold; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); padding: 3px 10px; border-radius: 10px;">
              ${w(R)} تست
            </span>
          </div>

          <!-- Test Input Grid -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
            <!-- Correct -->
            <div style="background: #1a1b22; border: 1px solid rgba(16,185,129,0.2); border-radius: 14px; padding: 10px;">
              <label style="display: flex; align-items: center; gap: 4px; font-size: 0.74rem; font-weight: 800; color: #34d399; margin-bottom: 6px;">
                <span>✅</span> درست (صحیح)
              </label>
              <input type="number" id="input-manual-test-correct" min="0" max="2000" value="${P}" oninput="window.updateManualTestScorePreview && window.updateManualTestScorePreview()" style="width: 100%; box-sizing: border-box; height: 44px; text-align: center; font-size: 1.2rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(16,185,129,0.15); border-radius: 10px; color: #34d399;" />
            </div>

            <!-- Wrong -->
            <div style="background: #1a1b22; border: 1px solid rgba(239,68,68,0.2); border-radius: 14px; padding: 10px;">
              <label style="display: flex; align-items: center; gap: 4px; font-size: 0.74rem; font-weight: 800; color: #f87171; margin-bottom: 6px;">
                <span>❌</span> غلط (اشتباه)
              </label>
              <input type="number" id="input-manual-test-wrong" min="0" max="2000" value="${C}" oninput="window.updateManualTestScorePreview && window.updateManualTestScorePreview()" style="width: 100%; box-sizing: border-box; height: 44px; text-align: center; font-size: 1.2rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(239,68,68,0.15); border-radius: 10px; color: #f87171;" />
            </div>

            <!-- Unanswered -->
            <div style="background: #1a1b22; border: 1px solid rgba(161,161,170,0.2); border-radius: 14px; padding: 10px;">
              <label style="display: flex; align-items: center; gap: 4px; font-size: 0.74rem; font-weight: 800; color: #a1a1aa; margin-bottom: 6px;">
                <span>⏭️</span> نزده
              </label>
              <input type="number" id="input-manual-test-unanswered" min="0" max="2000" value="${I}" oninput="window.updateManualTestScorePreview && window.updateManualTestScorePreview()" style="width: 100%; box-sizing: border-box; height: 44px; text-align: center; font-size: 1.2rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(161,161,170,0.15); border-radius: 10px; color: #a1a1aa;" />
            </div>

            <!-- Total (auto-computed) -->
            <div style="background: #1a1b22; border: 1px solid rgba(124,58,237,0.2); border-radius: 14px; padding: 10px;">
              <label style="display: flex; align-items: center; gap: 4px; font-size: 0.74rem; font-weight: 800; color: #a78bfa; margin-bottom: 6px;">
                <span>📋</span> تعداد کل تست
              </label>
              <div id="manual-test-total-computed" style="width: 100%; height: 44px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(124,58,237,0.15); border-radius: 10px; color: #a78bfa;">
                ${w(R)}
              </div>
            </div>
          </div>

          <!-- Real-time Score Percentage Preview -->
          <div id="manual-score-preview" style="background: ${R>0?E>=50?"rgba(16,185,129,0.08)":"rgba(239,68,68,0.08)":"rgba(255,255,255,0.03)"}; border: 1px solid ${R>0?E>=50?"rgba(16,185,129,0.2)":"rgba(239,68,68,0.2)":"rgba(255,255,255,0.06)"}; border-radius: 12px; padding: 10px 14px; display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 1.1rem;">📊</span>
              <span style="font-size: 0.82rem; font-weight: 800; color: #e2e8f0;">درصد خالص کنکوری:</span>
            </div>
            <span id="manual-score-percentage-text" style="font-size: 1.1rem; font-weight: 900; font-family: 'Outfit', sans-serif; color: ${R>0?E>=50?"#34d399":"#f87171":"#71717a"};">
              ${j}
            </span>
          </div>

          ${R>0?`
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
          <button type="button" id="btn-submit-manual-log" data-alias="btn-save-manual-activity-log" onclick="event.preventDefault(); event.stopPropagation(); window.saveManualActivityLog && window.saveManualActivityLog(event);" style="flex: 1; height: 52px; background: ${u?"#7c3aed":"linear-gradient(135deg, #d97706 0%, #b45309 100%)"}; color: white; border: none; border-radius: 14px; font-size: 0.95rem; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: none; transition: all 0.2s ease;">
            <span id="btn-submit-manual-log-icon" style="font-size: 1.2rem;">${u?"💾":"☕"}</span>
            <span id="btn-submit-manual-log-text">${u?"ثبت در کارنامه و نمودارها":"ثبت فعالیت غیردرسی (بدون احتساب در ساعت مطالعه)"}</span>
          </button>
        </div>

      </div>
    </div>
  `}function Wo(n){if(!n)return"";let e=String(n).trim();return e=e.replace(/[۰-۹]/g,t=>"۰۱۲۳۴۵۶۷۸۹".indexOf(t)),e=e.replace(/[٠-٩]/g,t=>"٠١٢٣٤٥٦٧٨٩".indexOf(t)),e=e.replace(/[^0-9]/g,""),e.startsWith("00989")?e="0"+e.slice(4):e.startsWith("0989")?e="0"+e.slice(3):e.startsWith("989")?e="0"+e.slice(2):e.startsWith("9")&&e.length===10&&(e="0"+e),e}function _n(n=null){const e=n||(()=>{try{return JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{return null}})(),t=localStorage.getItem("planex_user_avatar")||"",o=localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_leaderboard_nickname")||"",i=(()=>{try{return JSON.parse(localStorage.getItem("planex_user_profile")||"null")}catch{return null}})(),a=!!(e&&(e.phone||e.phone_number||e.telegram_id||e.id)),r=o||(i==null?void 0:i.name)||(i==null?void 0:i.nickname)||(e==null?void 0:e.full_name)||(e==null?void 0:e.name)||(e==null?void 0:e.first_name)||"کاربر پلنکس",d=(e==null?void 0:e.phone)||(e==null?void 0:e.phone_number)||"",s=t||(i==null?void 0:i.avatar)||(i==null?void 0:i.avatar_url)||(e==null?void 0:e.avatar_url)||(e==null?void 0:e.photo_url)||`https://api.dicebear.com/7.x/avataaars/svg?seed=${d||(e==null?void 0:e.username)||"planex"}`;return`
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

        ${a?`
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
          <div style="display: flex; gap: 10px;">
            <button type="button" id="btn-manual-account-sync" class="btn-manual-account-sync" onclick="event.stopPropagation(); window.triggerManualCloudSync();" style="flex: 2; padding: 13px; background: linear-gradient(135deg, #7c3aed, #6366f1); color: #fff; font-size: 0.85rem; font-weight: 800; border-radius: 14px; border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 15px rgba(124, 58, 237, 0.35); transition: all 0.2s;">
              <span>☁️</span><span>همگام‌سازی ابری آنی</span>
            </button>
            <button type="button" id="btn-user-logout" class="btn-user-logout" onclick="event.stopPropagation(); window.handleUserLogout();" style="flex: 1; padding: 13px; background: #141418; border: 1px solid rgba(239, 68, 68, 0.3); color: #f87171; cursor: pointer; border-radius: 14px; font-size: 0.82rem; font-weight: 700; transition: all 0.2s;">
              خروج 🚪
            </button>
          </div>
          <p class="text-xs text-gray-400 mt-2 text-center" style="font-size: 10px; opacity: 0.8;">قبل از همگامسازی اطلاعات این دستگاه روی دستگاه دیگرتان این کلید را بزنید تا اطلاعات در اون دستگاه همگام شود</p>
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
  `}typeof window<"u"&&(window.toggleLoginPasswordVisibility=()=>{const n=document.getElementById("input-login-password"),e=document.getElementById("btn-toggle-login-pwd");n&&(n.type==="password"?(n.type="text",e&&(e.textContent="🙈")):(n.type="password",e&&(e.textContent="👁️")))},window.handlePhoneLoginSubmit=async()=>{var d,s,l,c,f;const n=document.getElementById("input-login-phone"),e=document.getElementById("input-login-password"),t=document.getElementById("login-modal-error-box"),o=document.getElementById("btn-submit-phone-login");t&&(t.style.display="none");const i=((d=n==null?void 0:n.value)==null?void 0:d.trim())||"",a=Wo(i),r=((s=e==null?void 0:e.value)==null?void 0:s.trim())||"";if(!a||!r){t&&(t.textContent="لطفاً شماره موبایل و رمز عبور را وارد کنید.",t.style.display="block"),window.showToast&&window.showToast("لطفاً شماره موبایل و رمز عبور را وارد کنید.","warning");return}o&&(o.disabled=!0,o.innerHTML='<svg class="spin-sync" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> <span>در حال همگام‌سازی...</span>');try{const m=new AbortController,y=setTimeout(()=>m.abort(),3e3),w=await fetch(`${ce}/api/sync.php`,{method:"POST",headers:{"Content-Type":"application/json"},signal:m.signal,body:JSON.stringify({action:"login",phone:a,password:r})}).finally(()=>clearTimeout(y)),u=await w.text();let g={};const b=w.headers.get("content-type")||"";try{b.includes("application/json")||u&&u.trim().startsWith("{")?g=JSON.parse(u):g={success:!1,message:"پاسخ سرور در دسترس نیست."}}catch{g={success:!1,message:"پاسخ دریافتی از سرور معتبر نیست."}}if(w.ok&&g.success&&g.user){g.backupData&&typeof window.personalSyncService<"u"&&typeof window.personalSyncService.importLocalState=="function"?window.personalSyncService.importLocalState(g.backupData):g.backupData&&window.db&&typeof window.db.importAllDataJSON=="function"&&window.db.importAllDataJSON(g.backupData);const v=g.user,A=v.id||v.telegram_id||v.uid||v.phone||a,k=((l=g.backupData)==null?void 0:l.planex_user_avatar)||(typeof((c=g.backupData)==null?void 0:c.planex_user_profile)=="object"?(f=g.backupData.planex_user_profile)==null?void 0:f.avatar:null),T=v.avatar_url||v.avatarUrl||v.photo_url||v.avatar,x=localStorage.getItem("planex_user_avatar");let M="";k&&!k.includes("dicebear.com")?M=k:T&&!T.includes("dicebear.com")?M=T:x&&!x.includes("dicebear.com")?M=x:M=T||x||`https://api.dicebear.com/7.x/avataaars/svg?seed=${a}`,M&&localStorage.setItem("planex_user_avatar",M);const P=v.name||v.full_name||"کاربر پلنکس",C={id:A,telegram_id:v.telegram_id||A,uid:A,user_id:A,phone:v.phone||a,phone_number:v.phone||a,name:P,full_name:P,avatar_url:M,avatarUrl:M,avatar:M,photo_url:M,auth_provider:"phone"};localStorage.setItem("planex_auth_user",JSON.stringify(C)),localStorage.setItem("planex_user_account",JSON.stringify(C)),g.token&&localStorage.setItem("planex_auth_token",g.token),P&&P!=="کاربر پلنکس"&&P!=="کاربر مهمان"&&(localStorage.setItem("planex_user_nickname",P),localStorage.setItem("planex_leaderboard_nickname",P)),Array.isArray(g.study_logs)&&g.study_logs.length>0?window.db&&typeof window.db.saveStudyLogs=="function"?window.db.saveStudyLogs(g.study_logs):(localStorage.setItem("planex_study_logs",JSON.stringify(g.study_logs)),localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(g.study_logs))):g.backupData&&Array.isArray(g.backupData.planex_recent_activity_sessions)&&g.backupData.planex_recent_activity_sessions.length>0&&(window.db&&typeof window.db.saveStudyLogs=="function"?window.db.saveStudyLogs(g.backupData.planex_recent_activity_sessions):localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(g.backupData.planex_recent_activity_sessions))),Array.isArray(g.rooms)&&g.rooms.length>0&&(localStorage.setItem("planex_my_groups",JSON.stringify(g.rooms)),localStorage.setItem("planex_my_rooms",JSON.stringify(g.rooms)),window.db&&typeof window.db.setUserGroups=="function"&&window.db.setUserGroups(g.rooms));try{const I=window.personalSyncService||ie;I&&typeof I.pullFromCloud=="function"&&await I.pullFromCloud(a)}catch(I){console.warn("[LoginModal] Error pulling from cloud post-login:",I)}try{const I=window.leaderboardService||_;I&&typeof I.fetchUserGroups=="function"?await I.fetchUserGroups(!0):typeof window.fetchUserGroups=="function"&&await window.fetchUserGroups()}catch(I){console.warn("[LoginModal] Error fetching user groups post-login:",I)}try{const I=window.db&&typeof window.db.getUserProfile=="function"?window.db.getUserProfile():JSON.parse(localStorage.getItem("planex_user_profile")||"{}");I.phone=a,P&&(I.name=P),M&&(I.avatar=M,I.avatar_url=M,I.photo=M,I.photoUrl=M),window.db&&typeof window.db.setUserProfile=="function"&&window.db.setUserProfile(I),localStorage.setItem("planex_user_profile",JSON.stringify(I))}catch{}if(window.db&&(window.db._breakdownMemoMap={}),typeof window.updateHeaderDOM=="function"&&window.updateHeaderDOM(),window.dispatchEvent(new CustomEvent("auth-changed",{detail:C})),window.dispatchEvent(new CustomEvent("profileUpdated")),window.dispatchEvent(new CustomEvent("study-logs-updated")),window.dispatchEvent(new CustomEvent("sessions-updated")),window.dispatchEvent(new CustomEvent("activity-saved",{detail:{sync:!0}})),window.closeActiveModal?window.closeActiveModal():window.appState&&(window.appState.activeModal=null),window.dashboardChartInstances&&(window.dashboardChartInstances=null),typeof window.updateCharts=="function")try{window.updateCharts()}catch{}typeof window.renderApp=="function"&&window.renderApp(),window.showToast&&window.showToast(`خوش آمدید ${v.name||"کاربر گرامی"}! ورود و همگام‌سازی با موفقیت انجام شد. 🎉`,"success",4e3)}else{const v=g.message||"شماره موبایل یا رمز عبور اشتباه است. در صورت فراموشی، به ربات @planex_sync_bot مراجعه کنید.";t&&(t.textContent=v,t.style.display="block"),window.showToast&&window.showToast(v,"error"),o&&(o.disabled=!1,o.innerHTML="<span>ورود به حساب و همگام‌سازی 🚀</span>")}}catch(m){console.error("[Phone Login Error]:",m);const y="خطا در برقراری ارتباط با سرور. لطفاً اتصال اینترنت خود را بررسی کنید.";t&&(t.textContent=y,t.style.display="block"),window.showToast&&window.showToast(y,"error"),o&&(o.disabled=!1,o.innerHTML="<span>ورود به حساب و همگام‌سازی 🚀</span>")}},window.handlePasswordLoginSubmit=window.handlePhoneLoginSubmit,window.handleEditProfile=()=>{try{if(typeof window.openEditProfileModal=="function"){window.openEditProfileModal();return}window.appState&&(window.appState.activeModal="editProfile",typeof window.renderApp=="function"&&window.renderApp())}catch(n){console.error("[LoginModal] handleEditProfile error:",n),window.appState&&(window.appState.activeModal="editProfile",typeof window.renderApp=="function"&&window.renderApp())}},window.openEditProfileModal=window.openEditProfileModal||window.handleEditProfile,window.handleUserLogout=()=>{try{["planex_auth_user","planex_user_account","planex_user_profile","planex_user_nickname","planex_user_avatar","planex_leaderboard_nickname","planex_my_groups","planex_my_rooms","planex_user_groups","my_rooms","planex_active_group_code","planex_active_room_code","planex_sync_token","planex_sync_token_secret"].forEach(t=>{try{localStorage.removeItem(t)}catch{}});const e=window.db||p;e&&(typeof e.setUserGroups=="function"&&e.setUserGroups([]),typeof e.setUserProfile=="function"&&e.setUserProfile({name:"کاربر مهمان",avatar:"",phone:""})),window.appState&&(window.appState.currentUser=null,window.appState.user=null,window.appState.userGroups=[],window.appState.activeModal=null),typeof window.closeActiveModal=="function"&&window.closeActiveModal(),window.dispatchEvent(new CustomEvent("auth-changed",{detail:null})),window.dispatchEvent(new CustomEvent("profileUpdated")),window.dispatchEvent(new CustomEvent("groups-changed")),window.dispatchEvent(new CustomEvent("groups-updated")),typeof window.renderApp=="function"&&window.renderApp(),typeof window.showToast=="function"&&window.showToast("با موفقیت از حساب کاربری خارج شدید.","info")}catch(n){console.error("[LoginModal] Logout error:",n),typeof window.closeActiveModal=="function"&&window.closeActiveModal(),typeof window.renderApp=="function"&&window.renderApp()}},window.handleAccountLogout=window.handleUserLogout,window.triggerManualCloudSync=async()=>{const n=document.getElementById("btn-manual-account-sync"),e=n?n.innerHTML:"";n&&(n.disabled=!0,n.innerHTML='<svg class="spin-sync" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> <span>در حال همگام‌سازی...</span>'),typeof window.showToast=="function"&&window.showToast("در حال همگام‌سازی با فضای ابری...","info",2e3);try{const t=window.personalSyncService||ie;t&&typeof t.pullFromCloud=="function"&&await t.pullFromCloud(null,!0);const o=window.leaderboardService||_;try{o&&typeof o.fetchUserGroups=="function"?await o.fetchUserGroups(!0):typeof window.fetchUserGroups=="function"&&await window.fetchUserGroups()}catch(i){console.warn("[LoginModal] Groups refresh during sync:",i)}try{o&&typeof o.syncUserScore=="function"&&await o.syncUserScore(!0)}catch(i){console.warn("[LoginModal] Score sync during sync:",i)}typeof window.showToast=="function"&&window.showToast("همگامسازی با موفقیت انجام شد 🎉","success",3500)}catch(t){console.error("[LoginModal] Manual cloud sync error:",t),typeof window.showToast=="function"&&window.showToast("خطا در همگام‌سازی ابری اطلاعات. لطفاً اینترنت خود را بررسی کنید.","error",3500)}finally{n&&(n.disabled=!1,n.innerHTML=e||"<span>☁️</span><span>همگام‌سازی ابری آنی</span>"),typeof window.renderApp=="function"&&window.renderApp()}},window.handleManualAccountSync=window.triggerManualCloudSync,typeof document<"u"&&!window._loginModalDelegationBound&&(window._loginModalDelegationBound=!0,document.addEventListener("click",n=>{if(n.target&&n.target.closest&&n.target.closest("#btn-submit-phone-login, .btn-submit-phone-login")){n.preventDefault(),n.stopPropagation(),typeof window.handlePhoneLoginSubmit=="function"&&window.handlePhoneLoginSubmit();return}if(n.target&&n.target.closest&&n.target.closest("#btn-open-edit-profile-modal, .btn-open-edit-profile-modal")){n.preventDefault(),n.stopPropagation(),typeof window.handleEditProfile=="function"&&window.handleEditProfile();return}if(n.target&&n.target.closest&&n.target.closest("#btn-manual-account-sync, .btn-manual-account-sync")){n.preventDefault(),n.stopPropagation(),typeof window.triggerManualCloudSync=="function"&&window.triggerManualCloudSync();return}if(n.target&&n.target.closest&&n.target.closest("#btn-user-logout, .btn-user-logout")){n.preventDefault(),n.stopPropagation(),typeof window.handleUserLogout=="function"&&window.handleUserLogout();return}},!0)));function Yo(n=!1){try{typeof localStorage<"u"&&localStorage.setItem("pwa_prompt_dismissed","true")}catch(e){console.error("Error saving pwa_prompt_dismissed to localStorage:",e)}if(n&&typeof window<"u"&&(window.deferredPrompt||window.deferredPwaPrompt))try{typeof window.triggerPwaInstall=="function"&&window.triggerPwaInstall()}catch{}typeof window<"u"&&(window.appState&&(window.appState.activeModal=null),typeof window.closeActiveModal=="function"?window.closeActiveModal():typeof window.renderApp=="function"&&window.renderApp())}typeof window<"u"&&(window.dismissPwaModal=Yo);function $n(){if(typeof localStorage<"u"&&localStorage.getItem("pwa_prompt_dismissed"))return typeof window<"u"&&window.appState&&window.appState.activeModal==="pwaInstall"&&(window.appState.activeModal=null),"";const n=typeof navigator<"u"&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,e=typeof window<"u"&&!!(window.deferredPrompt||window.deferredPwaPrompt);return`
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

        ${n&&!e?`
          <div style="background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); padding: 14px; border-radius: 14px; font-size: 0.84rem; color: #e4e4e7; text-align: right; margin-bottom: 18px; line-height: 1.7;">
            <b>راهنمای نصب در آیفون / آیپد (iOS):</b><br>
            ۱. در مرورگر Safari، دکمه <b>Share (اشتراک‌گذاری ⎋)</b> را در پایین صفحه لمس کنید.<br>
            ۲. گزینه <b>Add to Home Screen (افزودن به صفحه اصلی ➕)</b> را انتخاب نمایید.<br>
            ۳. در گوشه بالا روی دکمه <b>Add</b> بزنید.
          </div>
        `:""}

        <div style="display: flex; flex-direction: column; gap: 10px;">
          <button id="btn-trigger-pwa-install" onclick="if(window.dismissPwaModal) { window.dismissPwaModal(${e?"true":"false"}); } else { try{localStorage.setItem('pwa_prompt_dismissed','true');}catch(_){} if(window.appState) window.appState.activeModal = null; if(window.closeActiveModal) window.closeActiveModal(); else if(window.renderApp) window.renderApp(); }" class="btn-primary" style="padding: 14px; font-size: 0.95rem; font-weight: bold; background: #7c3aed; box-shadow: none; cursor: pointer; border: none; border-radius: 14px; color: white;">
            📲 ${e?"نصب مستقیم برنامه (یک کلیک)":n?"متوجه شدم":"نصب مستقیم روی دستگاه"}
          </button>
          
          <button id="btn-close-pwa-modal" onclick="if(window.dismissPwaModal) { window.dismissPwaModal(false); } else { try{localStorage.setItem('pwa_prompt_dismissed','true');}catch(_){} if(window.appState) window.appState.activeModal = null; if(window.closeActiveModal) window.closeActiveModal(); else if(window.renderApp) window.renderApp(); }" class="btn-header-action" style="padding: 10px; font-size: 0.82rem; color: var(--text-muted); background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; cursor: pointer;">
            بعداً یادآوری کن ✕
          </button>
        </div>

      </div>
    </div>
  `}function Tn(n=1,e={}){const t=[{value:"کنکوری ۱۴۰۵",label:"🎯 کنکوری ۱۴۰۵",desc:"آماده‌سازی برای کنکور سراسری"},{value:"کنکوری ۱۴۰۶",label:"🎯 کنکوری ۱۴۰۶",desc:"آماده‌سازی برای کنکور سراسری"},{value:"کنکوری ۱۴۰۷",label:"🎯 کنکوری ۱۴۰۷",desc:"آماده‌سازی برای کنکور سراسری"},{value:"دوازدهم",label:"📚 پایه دوازدهم",desc:"مدرسه و نهایی"},{value:"یازدهم",label:"📖 پایه یازدهم",desc:"مدرسه و کنکوری"},{value:"دهم",label:"📗 پایه دهم",desc:"مدرسه و تقویت پایه"},{value:"دانشجو",label:"🎓 دانشجوی دانشگاه",desc:"دانشگاهی و آزمون‌های ارشد/دکترا"},{value:"سایر",label:"🌟 سایر / مطالعه آزاد",desc:"یادگیری مهارت و برنامه‌ریزی شخصی"}],o=[{value:"علوم تجربی",label:"🧬 علوم تجربی"},{value:"ریاضی فیزیک",label:"📐 ریاضی و فیزیک"},{value:"علوم انسانی",label:"⚖️ علوم انسانی"},{value:"پزشکی و علوم پزشکی",label:"🩺 پزشکی / پیراپزشکی"},{value:"مهندسی و کامپیوتر",label:"💻 مهندسی و کامپیوتر"},{value:"هنر و معماری",label:"🎨 هنر و معماری"},{value:"زبان‌های خارجی",label:"🌐 زبان‌های خارجی"},{value:"سایر",label:"✨ سایر رشته‌ها"}];return`
    <div class="modal-overlay" id="modal-onboarding-wizard" style="backdrop-filter: blur(20px); z-index: 9999;">
      <div class="modal-card" style="max-width: 520px; background: rgba(15, 23, 42, 0.98); border: 1px solid rgba(129, 140, 248, 0.4); border-radius: 28px; padding: 28px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7);" dir="rtl">
        
        <!-- Header & Progress Indicator -->
        <div style="text-align: center; margin-bottom: 24px;">
          <div style="display: inline-flex; items-center; justify-content: center; width: 56px; height: 56px; background: linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(168,85,247,0.2) 100%); border: 1px solid rgba(168,85,247,0.4); border-radius: 20px; font-size: 1.8rem; margin-bottom: 12px;">
            ${n===1?"🚀":n===2?"🎓":"👤"}
          </div>
          <h2 style="font-size: 1.35rem; font-weight: 800; color: #f8fafc; margin-bottom: 6px;">
            ${n===1?"خوش آمدید! مقطع تحصیلی خود را انتخاب کنید":n===2?"رشته و هدف شما چیست؟":"تکمیل ساخت پروفایل عمومی"}
          </h2>
          <p style="font-size: 0.85rem; color: #94a3b8; margin-bottom: 16px;">
            گام ${n} از ۳ • این اطلاعات برای پیشنهاد اتاق‌های مطالعه همرشته‌ای‌ها استفاده می‌شود
          </p>
          <div style="font-size: 0.78rem; color: #fde68a; background: rgba(234, 179, 8, 0.12); border: 1px solid rgba(234, 179, 8, 0.35); border-radius: 12px; padding: 8px 12px; margin-bottom: 16px; line-height: 1.7;">
            💡 نکته برای همگام‌سازی پایدار: برای تبادل سریع‌تر داده‌ها با سرور ابری، لطفاً فیلترشکن (VPN) خود را خاموش کنید.
          </div>

          <!-- Step Progress Bar -->
          <div style="display: flex; gap: 8px; justify-content: center;">
            <div style="height: 5px; flex: 1; border-radius: 4px; background: ${n>=1?"linear-gradient(90deg, #6366f1, #a855f7)":"rgba(255,255,255,0.1)"}; transition: all 0.3s;"></div>
            <div style="height: 5px; flex: 1; border-radius: 4px; background: ${n>=2?"linear-gradient(90deg, #6366f1, #a855f7)":"rgba(255,255,255,0.1)"}; transition: all 0.3s;"></div>
            <div style="height: 5px; flex: 1; border-radius: 4px; background: ${n>=3?"linear-gradient(90deg, #6366f1, #a855f7)":"rgba(255,255,255,0.1)"}; transition: all 0.3s;"></div>
          </div>
        </div>

        <!-- Wizard Step Content -->
        ${n===1?`
          <!-- STEP 1: Education Level -->
          <div style="display: grid; gap: 10px; margin-bottom: 24px;">
            ${t.map(i=>`
              <div class="onboarding-opt-card ${e.education_level===i.value?"selected":""}" 
                   data-value="${i.value}"
                   style="padding: 14px 18px; background: rgba(30, 41, 59, 0.7); border: 1.5px solid ${e.education_level===i.value?"#a855f7":"rgba(255,255,255,0.08)"}; border-radius: 16px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; justify-content: space-between;">
                <div>
                  <div style="font-weight: 700; font-size: 0.98rem; color: #f1f5f9;">${i.label}</div>
                  <div style="font-size: 0.78rem; color: #64748b;">${i.desc}</div>
                </div>
                <div style="width: 20px; height: 20px; border-radius: 50%; border: 2px solid ${e.education_level===i.value?"#a855f7":"#475569"}; background: ${e.education_level===i.value?"#a855f7":"transparent"};"></div>
              </div>
            `).join("")}
          </div>
        `:n===2?`
          <!-- STEP 2: Major & University -->
          <div style="margin-bottom: 20px;">
            <label style="display: block; font-weight: 700; font-size: 0.9rem; color: #e2e8f0; margin-bottom: 8px;">انتخاب رشته تحصیلی:</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px;">
              ${o.map(i=>`
                <div class="onboarding-major-card ${e.major===i.value?"selected":""}" 
                     data-value="${i.value}"
                     style="padding: 12px 14px; background: rgba(30, 41, 59, 0.7); border: 1.5px solid ${e.major===i.value?"#a855f7":"rgba(255,255,255,0.08)"}; border-radius: 14px; cursor: pointer; text-align: center; font-size: 0.9rem; font-weight: 600; color: #f1f5f9; transition: all 0.2s;">
                  ${i.label}
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
          ${n>1?`
            <button id="btn-onboarding-prev" class="glass-panel" style="padding: 12px 20px; border-radius: 14px; color: #cbd5e1; font-weight: 600; cursor: pointer;">
              ← بازگشت
            </button>
          `:""}
          <button id="btn-onboarding-next" class="btn-primary" style="flex: 1; padding: 14px; border-radius: 14px; font-weight: 800; font-size: 1rem; background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%); border: none; cursor: pointer; box-shadow: 0 10px 20px -5px rgba(168,85,247,0.4);">
            ${n===3?"🎉 ورود به برنامه‌ریزی و استفاده از اپلیکیشن":"مرحله بعدی →"}
          </button>
        </div>

        <div style="margin-top: 16px; text-align: center; font-size: 0.78rem; color: #64748b;">
          🛡️ اطلاعات شما به صورت کاملاً امن نگهداری می‌شود و صرفاً جهت شبکه مسئولیت‌پذیری استفاده می‌شود.
        </div>

      </div>
    </div>
  `}function An(n){if(!n)return"";const{full_name:e,avatar_url:t,created_at:o,total_focus_minutes:i,routines:a,username:r,field_of_study:d}=n,s=new Date(o).toLocaleDateString("fa-IR",{year:"numeric",month:"long"}),l=Math.floor((i||0)/60),c=e||r||"کاربر پلنکس",f=r?`@${r}`:"",m=d?`<div style="font-size: 0.75rem; color: #a855f7; background: rgba(168,85,247,0.15); padding: 3px 10px; border-radius: 12px; display: inline-block; margin-top: 6px; font-weight: 500;">🎓 ${d}</div>`:"";let y=null;if(n.social_links)try{y=typeof n.social_links=="string"?JSON.parse(n.social_links):n.social_links}catch{}const w=y?`
    <div style="display: flex; gap: 12px; justify-content: center; margin-top: 12px;">
      ${y.telegram?`<a href="https://t.me/${y.telegram.replace("@","")}" target="_blank" style="text-decoration: none; font-size: 1.3rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" title="تلگرام">✈️</a>`:""}
      ${y.instagram?`<a href="https://instagram.com/${y.instagram.replace("@","")}" target="_blank" style="text-decoration: none; font-size: 1.3rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" title="اینستاگرام">📸</a>`:""}
      ${y.linkedin?`<a href="${y.linkedin.startsWith("http")?y.linkedin:"https://"+y.linkedin}" target="_blank" style="text-decoration: none; font-size: 1.3rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" title="لینکدین / گیت‌هاب">💼</a>`:""}
      ${y.website?`<a href="${y.website.startsWith("http")?y.website:"https://"+y.website}" target="_blank" style="text-decoration: none; font-size: 1.3rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" title="وب‌سایت">🌐</a>`:""}
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
          ${f?`<div style="font-size: 0.9rem; color: rgba(255,255,255,0.5); margin-bottom: 5px;">${f}</div>`:""}
          ${m}
          <div style="font-size: 0.8rem; color: rgba(255,255,255,0.7); margin-top: 6px;">عضویت از: ${s}</div>
          ${w}
        </div>

        <!-- Stats -->
        <div style="display: flex; border-bottom: 1px solid rgba(255,255,255,0.05); background: rgba(0,0,0,0.2);">
          <div style="flex: 1; text-align: center; padding: 15px;">
            <div style="font-size: 1.2rem; color: #10b981; font-weight: bold; margin-bottom: 4px;">${l}h</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary);">کل ساعت تمرکز</div>
          </div>
          <div style="width: 1px; background: rgba(255,255,255,0.05);"></div>
          <div style="flex: 1; text-align: center; padding: 15px;">
            <div style="font-size: 1.2rem; color: #3b82f6; font-weight: bold; margin-bottom: 4px;">${a?a.length:0}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary);">روتین عمومی</div>
          </div>
        </div>

        <!-- Routines List -->
        <div style="padding: 20px; max-height: 400px; overflow-y: auto;">
          <h3 style="font-size: 1rem; color: white; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
            📋 روتین‌های به اشتراک‌گذاشته‌شده
          </h3>
          
          ${!a||a.length===0?'<div style="text-align: center; color: var(--text-secondary); padding: 20px 0; font-size: 0.9rem;">این کاربر هنوز روتین عمومی نساخته است.</div>':a.map(u=>`
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 15px; margin-bottom: 12px; transition: 0.2s;">
                <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 8px;">
                  <div>
                    <div style="font-size: 1rem; color: #60a5fa; font-weight: bold; margin-bottom: 4px;">${u.title}</div>
                    ${u.description?`<div style="font-size: 0.8rem; color: rgba(255,255,255,0.6);">${u.description}</div>`:""}
                  </div>
                  <button onclick="window.copyPublicRoutine('${u.id}')" class="btn-primary" style="padding: 6px 12px; font-size: 0.8rem; white-space: nowrap; border-radius: 8px;">➕ کپی روتین</button>
                </div>
                
                <div style="margin-top: 10px; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 8px;">
                  <div style="font-size: 0.75rem; color: var(--text-secondary); margin-bottom: 6px;">آیتم‌های روتین:</div>
                  ${u.items&&u.items.length>0?`<ul style="margin: 0; padding-right: 20px; font-size: 0.8rem; color: #d1d5db; display: flex; flex-direction: column; gap: 4px;">
                      ${u.items.map(g=>`
                        <li>${g.title} <span style="color: #10b981;">(${g.duration_minutes||0} دقیقه)</span></li>
                      `).join("")}
                    </ul>`:'<div style="font-size: 0.75rem; color: rgba(255,255,255,0.3);">بدون آیتم</div>'}
                </div>
              </div>
            `).join("")}
        </div>
      </div>
    </div>
  `}function Mn(n,e){const t=p.getCurrentWeek(),o=t?t.id:1,i=p.getHourlyLogs(o),a=`${n}_${e}`,r=i[a]||{},d=p.getCategories(),s={};d.forEach(u=>{s[u.code]=u});const l=p.getCustomSubjects(),c=["زیست‌شناسی","ریاضیات","فیزیک","شیمی","ادبیات","زبان انگلیسی","دین و زندگی","زمین‌شناسی"],f=Array.from(new Set([...c,...l])),m=["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه"],y=s[r.categoryCode],w=y?Oe(y):!0;return`
    <div class="modal-overlay" id="modal-slot-picker" style="backdrop-filter: blur(16px);">
      <div class="modal-card" style="max-width: 580px; max-height: 90vh; overflow-y: auto; background: rgba(15, 23, 42, 0.95); border-color: rgba(99, 102, 241, 0.4);">
        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px;">
          <div>
            <div class="modal-title" style="color: var(--primary-accent); display: flex; align-items: center; gap: 8px;">
              ⏱️ تخصیص فعالیت: پارت ${e+1} (${Co(e)})
            </div>
            <span style="font-size: 0.8rem; color: var(--text-secondary);">${m[n]} - انتخاب فعالیت نیم ساعته</span>
          </div>
          <button class="btn-close" id="btn-close-slot-modal">✕</button>
        </div>

        <!-- 1. Category Picker Grid -->
        <label class="input-label" style="margin-top: 12px; margin-bottom: 8px; display: block; font-weight: bold; color: white;">
          ۱. انتخاب دسته‌بندی فعالیت:
        </label>
        <div class="category-picker-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-bottom: 16px;">
          ${d.map(u=>`
            <button class="cat-pick-btn ${r.categoryCode===u.code?"selected":""}" data-code="${u.code}" data-group="${u.group}" style="display: flex; align-items: center; gap: 8px; padding: 10px 12px; border-radius: 12px; background: rgba(255,255,255,0.05); border: 1.5px solid ${r.categoryCode===u.code?u.color:"rgba(255,255,255,0.1)"}; border-right: 4px solid ${u.color}; cursor: pointer; text-align: right; color: white;">
              <span style="width: 10px; height: 10px; border-radius: 50%; background: ${u.color}; box-shadow: 0 0 6px ${u.color}80; flex-shrink: 0;"></span>
              <span style="font-size: 1.2rem;">${u.icon||"📌"}</span>
              <div style="flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                <div style="font-size: 0.85rem; font-weight: bold; color: ${u.color};">${u.title}</div>
                <div style="font-size: 0.7rem; color: var(--text-secondary);">${u.group} (${u.code})</div>
              </div>
            </button>
          `).join("")}
          <button class="cat-pick-btn ${r.categoryCode==="-"?"selected":""}" data-code="-" data-group="خالی" style="grid-column: span 2; padding: 10px; border-radius: 12px; background: rgba(239,68,68,0.1); border: 1.5px solid rgba(239,68,68,0.3); color: #fca5a5; cursor: pointer; text-align: center; font-size: 0.85rem;">
            🚫 پاک کردن پارت (خالی)
          </button>
        </div>

        <!-- 2. Academic Study Specific Fields (Visible ONLY when Study/Academic Category selected) -->
        <div id="academic-fields-wrapper" style="display: ${w?"block":"none"}; background: rgba(255,255,255,0.03); border: 1px solid rgba(56, 189, 248, 0.3); padding: 14px; border-radius: 16px; margin-bottom: 14px;">
          <div style="font-weight: bold; font-size: 0.9rem; color: #38bdf8; margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
            📚 جزئیات درس، تست و روش مطالعه (مخصوص فعالیت علمی):
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px;">
            <div>
              <label class="input-label" style="margin-bottom: 4px; display: block; color: white;">نام درس (Subject):</label>
              <select id="slot-subject-select" class="form-input" style="width: 100%;">
                <option value="">-- انتخاب درس --</option>
                ${f.map(u=>`
                  <option value="${u}" ${r.subject===u?"selected":""}>${u}</option>
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
              ${["تستی 📝","تشریحی 📖","ترکیبی 🔄","مرور 🔁"].map(u=>`
                <button class="btn-slot-method ${r.studyMethod===u?"active btn-primary":"glass-panel"}" data-method="${u}" style="flex: 1; padding: 6px 4px; font-size: 0.75rem; border: none; cursor: pointer;">
                  ${u}
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
            ${[1,2,3,4,5].map(u=>`
              <span class="star-rating-btn" data-star="${u}" style="cursor: pointer; opacity: ${(r.rating||3)>=u?"1":"0.3"};">⭐</span>
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
  `}function Cn(){const n=p.getCurrentWeek(),e=r=>String(r).replace(/[0-9]/g,d=>"۰۱۲۳۴۵۶۷۸۹"[d]),t=[1404,1405,1406,1407],o=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],i=window.pickerViewYear||n.year,a=window.pickerViewMonthIdx||n.monthIdx;return`
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
              <button class="btn-picker-year btn-header-action ${i===r?"btn-primary":""}" data-year="${r}" style="flex: 1; padding: 8px; font-size: 0.9rem; font-weight: bold; border-radius: 12px;">
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
            ${o.map((r,d)=>{const s=d+1;return`
                <button class="btn-picker-month btn-header-action ${a===s?"btn-primary":""}" data-month="${s}" style="padding: 8px 4px; font-size: 0.82rem; font-weight: bold; border-radius: 10px; text-align: center;">
                  ${r}
                </button>
              `}).join("")}
          </div>
        </div>

        <!-- 3. Week Selector for Selected Month -->
        <div style="margin-bottom: 20px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 14px;">
          <label style="font-size: 0.85rem; font-weight: bold; color: #38bdf8; display: block; margin-bottom: 10px;">
            ۳. انتخاب هفته در ${o[a-1]} ${e(i)}:
          </label>

          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${Array.from({length:p.getWeeksInMonth(i,a)},(r,d)=>d+1).map(r=>{const d=`${i}_${a}_${r}`,s=p.getWeekObject(i,a,r),l=n.id===d,c=p.hasDataForWeek(d);return`
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
  `}function lo(n,e={},t=3e3){const o=new AbortController,i=setTimeout(()=>o.abort(),t);return fetch(n,{...e,signal:o.signal}).finally(()=>clearTimeout(i))}window.handleEditRoomAnnouncement||(window.handleEditRoomAnnouncement=n=>{var o,i;const e=localStorage.getItem("planex_room_announcement_"+n)||((i=(o=window.appState)==null?void 0:o.currentRoom)==null?void 0:i.announcement)||"",t=prompt("📢 پیام مدیریت / متن انگیزشی سالن مطالعه را وارد نمایید:",e);if(t!==null){const a=t.trim();localStorage.setItem("planex_room_announcement_"+n,a),window.appState&&window.appState.currentRoom&&(window.appState.currentRoom.announcement=a),typeof window.renderApp=="function"&&window.renderApp()}});window.handleJoinRoomClick||(window.handleJoinRoomClick=(n,e)=>{const t=p&&typeof p.getProfile=="function"?p.getProfile():{};if((!t.major||!t.target)&&window.appState){window.appState.pendingJoinRoom={id:n,name:e},window.appState.activeModal="joinRoomOnboarding",typeof window.renderApp=="function"&&window.renderApp();return}let o=[];try{o=JSON.parse(localStorage.getItem("planex_my_groups")||"[]")}catch{o=[]}o.some(d=>String(d.id)===String(n))||(o.push({id:n,name:e,emoji:"👥"}),localStorage.setItem("planex_my_groups",JSON.stringify(o)));const i=JSON.parse(localStorage.getItem("planex_user_account")||"{}"),a=i.id||"me_"+Date.now();window.appState&&Array.isArray(window.appState.studyRoomParticipants)&&(window.appState.studyRoomParticipants.some(s=>String(s.id)===String(a))||window.appState.studyRoomParticipants.unshift({id:a,name:t.name||i.full_name||"شما (عضو فعال)",avatar:i.avatar_url||"",gender:t.gender||"پسر",major:t.major||t.field_of_study||"تجربی",target:t.target||t.goal||"کسب رتبه برتر",status:"active",is_studying:!0,focus_minutes:0,today_study_time:0,last_2h_study:120,last_2h_subject:"آماده مطالعه"}));const r=localStorage.getItem("planex_jwt_token");r&&r!=="undefined"&&r!=="null"&&lo(`${ce}/api/rooms/join.php`,{method:"POST",headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"},body:JSON.stringify({roomId:n,room_id:n})}).catch(d=>console.warn("Room join API sync:",d)),alert(`👥 شما با موفقیت عضو سالن "${e}" شدید!`),typeof window.renderApp=="function"&&window.renderApp()});window.handleLeaveRoomClick||(window.handleLeaveRoomClick=(n,e)=>{let t=[];try{t=JSON.parse(localStorage.getItem("planex_my_groups")||"[]")}catch{t=[]}t=t.filter(r=>String(r.id)!==String(n)),localStorage.setItem("planex_my_groups",JSON.stringify(t));const i=JSON.parse(localStorage.getItem("planex_user_account")||"{}").id;window.appState&&Array.isArray(window.appState.studyRoomParticipants)&&(window.appState.studyRoomParticipants=window.appState.studyRoomParticipants.filter(r=>String(r.id)!==String(i)));const a=localStorage.getItem("planex_jwt_token");a&&a!=="undefined"&&a!=="null"&&lo(`${ce}/api/rooms/leave.php`,{method:"POST",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify({roomId:n,room_id:n})}).catch(r=>console.warn("Room leave API sync:",r)),alert(`🚪 شما از سالن "${e}" خارج شدید.`),typeof window.renderApp=="function"&&window.renderApp()});function In(n,e,t=[],o=!1,i=null,a=null){var u,g;let r=Array.isArray(t)?[...t]:[],d=e;try{const v=JSON.parse(localStorage.getItem("planex_public_rooms")||"[]").find(T=>String(T.id)===String(n)||String(T.code)===String(n));v&&(v.name||v.title||v.roomName)&&(d=v.name||v.title||v.roomName);const k=JSON.parse(localStorage.getItem("planex_my_groups")||"[]").find(T=>String(T.id)===String(n)||String(T.code)===String(n));k&&(k.name||k.title||k.roomName)&&(d=k.name||k.title||k.roomName)}catch{}if((!d||d===n)&&(d=n?`سالن ${n}`:"سالن مطالعه پلن ما"),r.length===0)try{const b=JSON.parse(localStorage.getItem("planex_cached_room_"+n)||"[]");Array.isArray(b)&&b.length>0&&(r=b)}catch{}const s=JSON.parse(localStorage.getItem("planex_user_account")||"{}"),l=p&&typeof p.getProfile=="function"?p.getProfile():JSON.parse(localStorage.getItem("planex_profile")||"{}"),c=a||s.id||"me";r.findIndex(b=>String(b.id)===String(c)||b.id==="me")===-1&&r.unshift({id:c,name:l.name||s.full_name||"شما (عضو فعال)",avatar:s.avatar_url||"",gender:l.gender||"پسر",major:l.major||l.field_of_study||"تجربی",target:l.target||l.goal||"کسب رتبه برتر",status:"active",is_studying:!0,focus_minutes:0,today_study_time:0,last_2h_study:120,last_2h_subject:"مطالعه عمومی"}),r.length<4&&[{id:"p_1",name:"علی محمدی",major:"تجربی",target:"پزشکی تهران",gender:"پسر",role:"member",status:"active",today_study_time:360,today_test_count:140,last_2h_subject:"زیست‌شناسی"},{id:"p_2",name:"سارا احمدی",major:"ریاضی",target:"مهندسی شریف",gender:"دختر",role:"admin",status:"active",today_study_time:420,today_test_count:180,last_2h_subject:"حسابان"},{id:"p_3",name:"امیر کاظمی",major:"تجربی",target:"دندانپزشکی",gender:"پسر",role:"member",status:"active",today_study_time:270,today_test_count:90,last_2h_subject:"شیمی پایه"},{id:"p_4",name:"مریم حسینی",major:"انسانی",target:"حقوق تهران",gender:"دختر",role:"member",status:"active",today_study_time:310,today_test_count:110,last_2h_subject:"فلسفه و منطق"}].forEach(v=>{r.some(A=>String(A.id)===String(v.id))||r.push(v)});let m="";try{m=localStorage.getItem("planex_room_announcement_"+n)||((g=(u=window.appState)==null?void 0:u.currentRoom)==null?void 0:g.announcement)||""}catch{}let y=[];try{y=JSON.parse(localStorage.getItem("planex_my_groups")||"[]")}catch{y=[]}const w=y.some(b=>String(b.id)===String(n));return`
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
            ${o||w?`
              <button type="button" onclick="event.stopPropagation(); window.handleEditRoomAnnouncement('${n}')" title="ویرایش پیام مدیر" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); color: #c4b5fd; padding: 4px 8px; border-radius: 8px; font-size: 0.68rem; font-weight: 700; cursor: pointer; white-space: nowrap; flex-shrink: 0;">
                ✏️ ویرایش
              </button>
            `:""}
          </div>
        `:o||w?`
          <div style="margin-bottom: 14px; display: flex; justify-content: flex-end;">
            <button type="button" onclick="event.stopPropagation(); window.handleEditRoomAnnouncement('${n}')" style="background: rgba(255,255,255,0.03); border: 1px dashed rgba(124,58,237,0.3); color: #c4b5fd; padding: 6px 12px; border-radius: 10px; font-size: 0.72rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 4px;">
              <span>📢</span>
              <span>ثبت پیام انگیزشی / اطلاعیه مدیر</span>
            </button>
          </div>
        `:""}

        <!-- Join & Leave Group Action Button -->
        <div style="margin-bottom: 14px;">
          ${w?`
            <button type="button" onclick="event.stopPropagation(); window.handleLeaveRoomClick('${n}', '${d}')" class="btn-primary" style="width: 100%; padding: 12px; font-size: 0.92rem; font-weight: 800; background: #ef4444; border: none; border-radius: 14px; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
              <span>🚪 ترک سالن (خروج از لیست اعضا)</span>
            </button>
          `:`
            <button type="button" onclick="event.stopPropagation(); window.handleJoinRoomClick('${n}', '${d}')" class="btn-primary" style="width: 100%; padding: 12px; font-size: 0.95rem; font-weight: 800; background: #7c3aed; border: none; border-radius: 14px; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
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
          <input type="text" readonly value="https://planexapp.ir/?room=${n}" style="width: 100%; box-sizing: border-box; padding: 6px 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #16171d; color: #cbd5e1; text-align: left; direction: ltr; font-size: 0.76rem;" id="invite-link-input" />
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
          ${r.map(b=>{const v=String(b.id)===String(c)||b.id==="me",A=b.gender==="دختر"||b.gender==="female"?"👧":"👦",k=String(b.id)===String(i)||b.role==="owner"?"👑 مالک":b.role==="admin"?"⭐ مدیر":"👤 عضو",T=b.major||b.field_of_study||v&&(l.major||l.field_of_study)||"عمومی",x=b.target||b.goal||v&&(l.target||l.goal)||"موفقیت";let M=b.today_study_time||b.focus_minutes||0,P=b.today_test_count||b.tests||0,C=b.last_2h_subject||b.current_subject||b.subject||"مطالعه عمومی";if(v){const I=(new Date().getDay()+1)%7,R=typeof p<"u"&&p.getCurrentWeek?p.getCurrentWeek():null,E=R?R.id:1,j=typeof p<"u"&&p.getHourlyLogs?p.getHourlyLogs(E):{},J=typeof p<"u"&&p.getRecordedTimerToday?p.getRecordedTimerToday():{minutes:0,tests:0};let G=0,L=0,F="مطالعه عمومی";for(let Y=0;Y<48;Y++){const Q=j[`${I}_${Y}`];Q&&Q.categoryCode&&(["ع-س","ع-ک","ع-م","ع-غ","د-خ"].includes(Q.categoryCode)&&G++,Q.testCount&&(L+=parseInt(Q.testCount)||0),Q.subject&&(F=Q.subject))}M=G*30+(Number(J.minutes)||0),P=L+(J.tests||0),C=F}return`
            <div id="user-card-${b.id}" style="padding: 10px 12px; background: #1f2029; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
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
                    <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${b.name||"کاربر پلنکس"}</span>
                    <span style="font-size: 0.62rem; background: #16171d; border: 1px solid rgba(255,255,255,0.06); padding: 1px 6px; border-radius: 8px; color: #a1a1aa;">${k}</span>
                    <span style="font-size: 0.62rem; background: rgba(56,189,248,0.1); color: #38bdf8; border: 1px solid rgba(56,189,248,0.25); padding: 1px 6px; border-radius: 8px; font-weight: 700;">${T}</span>
                  </div>

                  <!-- Goal / Target line (Feature 3) -->
                  <div style="font-size: 0.68rem; color: #fbbf24; margin-bottom: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    🎯 <span style="opacity: 0.9;">${x}</span>
                  </div>

                  <!-- Study Stats line -->
                  <div style="display: flex; flex-wrap: wrap; gap: 8px; font-size: 0.7rem; color: #8e8e9c;">
                    <span style="color: #e4e4e7; font-weight: 700;">⏱️ ${xe(M)}</span>
                    <span style="color: #a1a1aa; font-weight: 700;">🎯 ${P} تست</span>
                    <span style="color: #94a3b8;">📚 ${C}</span>
                  </div>
                </div>
              </div>

              ${o&&!v?`
                <div style="display: flex; gap: 4px; flex-shrink: 0;">
                  <button onclick="window.promoteGroupAdmin('${n}', '${b.id}')" style="padding: 3px 6px; font-size: 0.7rem; color: #a1a1aa; border: 1px solid rgba(255,255,255,0.08); background: #16171d; border-radius: 6px; cursor: pointer;" title="ارتقا به مدیر">⭐</button>
                  <button onclick="window.kickGroupMember('${n}', '${b.id}')" style="padding: 3px 6px; font-size: 0.7rem; color: #ef4444; border: 1px solid rgba(239,68,68,0.3); background: #16171d; border-radius: 6px; cursor: pointer;" title="حذف عضو">✕</button>
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

        ${o?`
        <div style="margin-top: 10px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.06); display: flex; justify-content: space-between; align-items: center;">
          <span style="font-size: 0.74rem; color: #8e8e9c;">پنل مدیریت سازنده سالن</span>
          <button id="btn-delete-room" class="btn-secondary" style="padding: 4px 10px; font-size: 0.72rem; border: 1px solid rgba(239, 68, 68, 0.4); color: #f87171; background: #1f2029; border-radius: 8px; cursor: pointer;">
            🗑 حذف سالن
          </button>
        </div>
        `:""}
      </div>
    </div>
  `}function zn(n="create"){const e=n==="join";return`
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
  `}window.closeJoinRoomOnboardingModal||(window.closeJoinRoomOnboardingModal=()=>{const n=typeof state<"u"&&state?state:window.appState;n&&(n.pendingJoinRoom=null,n.activeModal=null),window.appState&&(window.appState.pendingJoinRoom=null,window.appState.activeModal=null),typeof renderApp=="function"?renderApp():typeof window.renderApp=="function"&&window.renderApp()});window.handleSubmitJoinRoomOnboarding||(window.handleSubmitJoinRoomOnboarding=(n,e)=>{var d,s,l,c,f;const t=(s=(d=document.getElementById("input-onboarding-nickname"))==null?void 0:d.value)==null?void 0:s.trim(),o=(l=document.getElementById("input-onboarding-major"))==null?void 0:l.value,i=(f=(c=document.getElementById("input-onboarding-target"))==null?void 0:c.value)==null?void 0:f.trim();if(!t){alert("لطفاً نام یا نام مستعار خود را وارد کنید.");return}let a={};try{a=p&&typeof p.getProfile=="function"?p.getProfile():JSON.parse(localStorage.getItem("planex_user_profile")||"{}")}catch{a={}}a.name=t,a.nickname=t,a.major=o,a.field_of_study=o,a.target=i,a.goal=i,p&&typeof p.setProfile=="function"&&p.setProfile(a),localStorage.setItem("planex_user_profile",JSON.stringify(a));try{const m=JSON.parse(localStorage.getItem("planex_user_account")||"{}");m.full_name=t,localStorage.setItem("planex_user_account",JSON.stringify(m))}catch{}const r=typeof state<"u"&&state?state:window.appState;r&&(r.pendingJoinRoom=null,r.activeModal=null),window.appState&&(window.appState.pendingJoinRoom=null,window.appState.activeModal=null),n&&String(n).startsWith("PLX-")&&typeof window.handleJoinGroupSubmit=="function"?window.handleJoinGroupSubmit(n):typeof window.handleJoinRoomClick=="function"?window.handleJoinRoomClick(n,e):typeof window.joinStudyRoom=="function"?window.joinStudyRoom(n,e):typeof window.renderApp=="function"&&window.renderApp()});function En(n=null){const e=p&&typeof p.getProfile=="function"?p.getProfile():{},t=JSON.parse(localStorage.getItem("planex_user_account")||"{}"),o=e.name||e.nickname||t.full_name||"",i=e.major||e.field_of_study||"تجربی",a=e.target||e.goal||"",r=n&&(n.name||n.title||n.roomName)||"سالن مطالعه",d=n&&(n.id||n.code)||"";return`
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
                   value="${o}"
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
              <option value="تجربی" ${i.includes("تجرب")?"selected":""}>🧬 علوم تجربی (کنکور / پزشکی)</option>
              <option value="ریاضی" ${i.includes("ریاض")?"selected":""}>📐 ریاضی و فیزیک (مهندسی)</option>
              <option value="انسانی" ${i.includes("انسان")?"selected":""}>📚 علوم انسانی (وکالت / مدیریت)</option>
              <option value="دانشجویی" ${i.includes("دانشجو")||i.includes("پزشک")?"selected":""}>🎓 دانشجوی دانشگاه / رزیدنتی</option>
              <option value="زبان" ${i.includes("زبان")?"selected":""}>🌍 منحصراً زبان</option>
              <option value="هنر" ${i.includes("هنر")?"selected":""}>🎨 هنر</option>
              <option value="عمومی / سایر" ${i==="عمومی"?"selected":""}>☕ عمومی / سایر</option>
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
                   value="${a}"
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
  `}function Dn(n=0){const e=typeof n=="number"?n:window.userGuideActiveTab||0,t=[{id:0,icon:"⏰",title:"ماتریس و روتین ۲۴ ساعته"},{id:1,icon:"🎯",title:"هدف‌گذاری و ثبت تست"},{id:2,icon:"🏆",title:"تالار رقابت و لیدربرد"},{id:3,icon:"☁️",title:"همگام‌سازی ابری"}];return`
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
          ${t.map(o=>{const i=e===o.id;return`
              <button onclick="window.switchUserGuideTab(${o.id})"
                      style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; padding: 8px 4px; border-radius: 12px; border: 1px solid ${i?"#7c3aed":"transparent"}; background: ${i?"#7c3aed":"transparent"}; color: ${i?"#fff":"var(--text-secondary)"}; cursor: pointer; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none;">
                <span style="font-size: 1.15rem;">${o.icon}</span>
                <span style="font-size: 0.7rem; font-weight: ${i?"900":"600"}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%;">${o.title.split(" ")[0]}</span>
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
            ${t.map(o=>`
              <div onclick="window.switchUserGuideTab(${o.id})"
                   style="width: ${e===o.id?"22px":"8px"}; height: 8px; border-radius: 4px; background: ${e===o.id?"linear-gradient(90deg, #6366f1, #a855f7)":"rgba(255,255,255,0.2)"}; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);"
                   title="${o.title}"></div>
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
  `}const qo=["📚","📖","📝","🔬","🧪","📐","💻","👨‍🏫","👥","☕","😴","🏃","🧘","🚿","💼","🎮","🍎","🧹","🎨","🎵"];window.activityModalState={isEditing:!1,code:null,title:"",group:"علمی",isStudy:!0,color:Je[0],icon:"📚"};window.openActivityModal=(n=null)=>{const e=p.getCategories();if(n){const t=e.find(o=>o.code===n);if(t){const o=Oe(t);window.activityModalState={isEditing:!0,code:t.code,title:t.title||"",group:t.group||(o?"علمی":"غیرعلمی"),isStudy:o,color:t.color||Je[0],icon:t.icon||(o?"📚":"☕")}}}else{const t=at(e);window.activityModalState={isEditing:!1,code:null,title:"",group:"علمی",isStudy:!0,color:t,icon:"📚"}}if(window.appState)window.appState.activeModal="activity",typeof window.renderApp=="function"&&window.renderApp();else{const t=document.getElementById("modal-activity-editor");t&&(t.style.display="flex")}};window.openNonStudyActivityModal=()=>{const n=p.getCategories(),e=at(n);if(window.activityModalState={isEditing:!1,code:null,title:"",group:"غیرعلمی",isStudy:!1,color:e,icon:"☕"},window.appState)window.appState.activeModal="activity",typeof window.renderApp=="function"&&window.renderApp();else{const t=document.getElementById("modal-activity-editor");t&&(t.style.display="flex")}};window.closeActivityModal=()=>{if(window.appState&&window.appState.activeModal==="activity")window.appState.activeModal=null,typeof window.renderApp=="function"&&window.renderApp();else{const n=document.getElementById("modal-activity-editor");n&&(n.style.display="none")}};window.setActivityModalType=n=>{window.activityModalState.isStudy=!!n,window.activityModalState.group=n?"علمی":"غیرعلمی",window.activityModalState.isEditing||(window.activityModalState.icon=n?"📚":"☕");const e=document.getElementById("act-type-study-btn"),t=document.getElementById("act-type-nonstudy-btn");e&&t&&(n?(e.classList.add("active-type-selected"),e.style.borderColor="#38bdf8",e.style.background="rgba(56, 189, 248, 0.15)",e.style.boxShadow="0 0 14px rgba(56, 189, 248, 0.3)",t.classList.remove("active-type-selected"),t.style.borderColor="rgba(255, 255, 255, 0.1)",t.style.background="rgba(255, 255, 255, 0.03)",t.style.boxShadow="none"):(t.classList.add("active-type-selected"),t.style.borderColor="#f59e0b",t.style.background="rgba(245, 158, 11, 0.15)",t.style.boxShadow="0 0 14px rgba(245, 158, 11, 0.3)",e.classList.remove("active-type-selected"),e.style.borderColor="rgba(255, 255, 255, 0.1)",e.style.background="rgba(255, 255, 255, 0.03)",e.style.boxShadow="none"))};window.setActivityModalColor=n=>{window.activityModalState.color=n,document.querySelectorAll("#modal-activity-editor .act-color-btn").forEach(e=>{e.dataset.color===n?(e.style.borderColor="#ffffff",e.style.transform="scale(1.18)",e.style.boxShadow="0 0 10px rgba(255,255,255,0.6)"):(e.style.borderColor="transparent",e.style.transform="scale(1)",e.style.boxShadow="none")})};window.setActivityModalIcon=n=>{window.activityModalState.icon=n,document.querySelectorAll("#modal-activity-editor .act-icon-btn").forEach(e=>{e.dataset.icon===n?(e.style.borderColor="var(--primary-accent, #38bdf8)",e.style.background="rgba(56, 189, 248, 0.2)"):(e.style.borderColor="rgba(255,255,255,0.08)",e.style.background="rgba(255,255,255,0.03)")})};window.saveActivityModal=()=>{const n=document.getElementById("activity-modal-title"),e=n?n.value.trim():window.activityModalState.title;if(!e){alert("لطفاً عنوان فعالیت را وارد نمایید."),n&&n.focus();return}const{isEditing:t,code:o,isStudy:i,color:a,icon:r,group:d}=window.activityModalState;p.saveCategory({code:t?o:"cust_"+Date.now(),title:e,group:i?"علمی":d||"غیرعلمی",isStudy:!!i,color:a||Je[0],icon:r||(i?"📚":"☕")}),window.closeActivityModal(),typeof window.renderApp=="function"&&window.renderApp()};function Nn(){const n=window.activityModalState||{isEditing:!1,title:"",isStudy:!0,color:Je[0],icon:"📚"},e=n.isStudy!==void 0?n.isStudy===!0:!0;return`
    <div class="modal-overlay" id="modal-activity-editor" style="display: flex; backdrop-filter: blur(16px); z-index: 1050;" onclick="if(event.target === this || event.target.classList.contains('modal-overlay')){ window.closeActiveModal(); }">
      <div class="modal-card" style="max-width: 520px; max-height: 92vh; overflow-y: auto; background: rgba(15, 23, 42, 0.97); border: 1.5px solid rgba(56, 189, 248, 0.4); box-shadow: 0 20px 50px rgba(0,0,0,0.6); border-radius: 20px; padding: 22px;" onclick="event.stopPropagation();">
        
        <!-- Header -->
        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 14px; margin-bottom: 18px; display: flex; align-items: center; justify-content: space-between;">
          <div class="modal-title" style="color: #38bdf8; font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
            ${n.isEditing?"✏️ ویرایش فعالیت / درس":"✨ تعریف و افزودن فعالیت جدید"}
          </div>
          <button type="button" class="btn-close" aria-label="بستن" onclick="window.closeActiveModal();">✕</button>
        </div>

        <!-- 1. Title Input -->
        <div class="input-group" style="margin-bottom: 18px;">
          <label class="input-label" style="display: block; font-weight: bold; color: white; margin-bottom: 8px; font-size: 0.9rem;">
            🏷️ عنوان فعالیت یا درس:
          </label>
          <input type="text" id="activity-modal-title" class="form-input" 
                 value="${n.title||""}" 
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
            ${Je.map((o,i)=>{const a=(n.color||"").toUpperCase()===o.toUpperCase()||!n.color&&i===0;return`
                <button type="button" 
                        class="act-color-btn" 
                        data-color="${o}"
                        onclick="window.setActivityModalColor('${o}')"
                        title="رنگ ${i+1}"
                        style="width: 100%; aspect-ratio: 1; border-radius: 50%; background: ${o}; border: 2.5px solid ${a?"#ffffff":"transparent"}; transform: ${a?"scale(1.18)":"scale(1)"}; ${a?"box-shadow: 0 0 10px rgba(255,255,255,0.6);":""} cursor: pointer; transition: transform 0.15s ease, border-color 0.15s ease; outline: none; padding: 0;">
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
            ${qo.map(o=>{const i=n.icon===o;return`
                <button type="button" 
                        class="act-icon-btn" 
                        data-icon="${o}"
                        onclick="window.setActivityModalIcon('${o}')"
                        style="min-width: 38px; height: 38px; border-radius: 10px; background: ${i?"rgba(56, 189, 248, 0.2)":"rgba(255,255,255,0.03)"}; border: 1.5px solid ${i?"var(--primary-accent, #38bdf8)":"rgba(255,255,255,0.08)"}; font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.15s;">
                  ${o}
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
  `}function jn(){const n=typeof p<"u"&&typeof p.getStudyTargets=="function"?p.getStudyTargets():{dailyStudyGoalHours:8,dailyTargetHours:8,dailyTestGoalCount:150},e=n.dailyStudyGoalHours!=null?Number(n.dailyStudyGoalHours):n.dailyTargetHours!=null?Number(n.dailyTargetHours):8,t=n.dailyTestGoalCount!=null?Number(n.dailyTestGoalCount):150;return`
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
  `}typeof window<"u"&&(window.openDailyTargetsModal=()=>{const n=typeof window.state<"u"&&window.state?window.state:window.appState;n&&(n.activeModal="dailyTargets"),window.appState&&window.appState!==n&&(window.appState.activeModal="dailyTargets"),typeof window.renderApp=="function"&&window.renderApp()},window.saveDailyTargets=()=>{const n=document.getElementById("target-modal-daily-hours"),e=document.getElementById("target-modal-daily-tests"),t=parseFloat(n==null?void 0:n.value)||8,o=parseInt(e==null?void 0:e.value)||150,a={...typeof p<"u"&&typeof p.getStudyTargets=="function"?p.getStudyTargets():{},dailyStudyGoalHours:t,dailyTargetHours:t,dailyTestGoalCount:o};if(typeof p<"u"&&typeof p.setStudyTargets=="function"?p.setStudyTargets(a):(localStorage.setItem("planex_study_targets",JSON.stringify(a)),localStorage.setItem("planex_last_modified",String(Date.now()))),typeof ie<"u"&&typeof ie.pushToCloud=="function"?ie.pushToCloud():typeof window.triggerActionDrivenPush=="function"&&window.triggerActionDrivenPush(0),window.showToast?window.showToast("✅ اهداف روزانه با موفقیت ذخیره شدند","success",2500):alert("✅ اهداف روزانه با موفقیت ذخیره شدند"),typeof window.closeActiveModal=="function")window.closeActiveModal();else{const r=typeof window.state<"u"&&window.state?window.state:window.appState;r&&(r.activeModal=null),window.appState&&window.appState!==r&&(window.appState.activeModal=null),typeof window.renderApp=="function"&&window.renderApp()}});const Ne=n=>String(n).replace(/\d/g,e=>"۰۱۲۳۴۵۶۷۸۹"[e]),Ge=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Vo=[{id:"store_konkur_bio",title:"زیست‌شناسی کنکور",count:320,price:"به‌زودی"},{id:"store_eng_vocab",title:"لغات زبان انگلیسی کنکور",count:504,price:"به‌زودی"},{id:"store_chem_formula",title:"فرمول‌های شیمی",count:150,price:"به‌زودی"}],ke=window.flashcardsViewState||(window.flashcardsViewState={studyDeck:null,queue:[],index:0,flipped:!1,reviewed:0});function co(){const n=p.getFlashcards()||[],e=Date.now(),t=new Map;return n.forEach(o=>{const i=o.deck||"عمومی";t.has(i)||t.set(i,{name:i,total:0,due:0,boxes:{1:0,2:0,3:0,4:0,5:0}});const a=t.get(i),r=Math.min(5,Math.max(1,o.box||1));a.total++,a.boxes[r]++,(!o.nextReviewDate||o.nextReviewDate<=e)&&a.due++}),Array.from(t.values())}function Ko(n){const e=Date.now(),t=(p.getFlashcards()||[]).filter(i=>n==="__all__"||(i.deck||"عمومی")===n),o=t.filter(i=>!i.nextReviewDate||i.nextReviewDate<=e);return(o.length?o:t).map(i=>i.id)}function Qo(n,e){const t=["#ef4444","#f97316","#eab308","#22c55e","#6366f1"];return`
    <div style="display:flex; gap:6px; margin-top:10px;">
      ${[1,2,3,4,5].map(o=>`
        <div style="flex:1; text-align:center;">
          <div style="height:34px; background:rgba(255,255,255,0.05); border-radius:8px; display:flex; align-items:flex-end; overflow:hidden;">
            <div style="width:100%; height:${e?Math.round(n[o]/e*100):0}%; background:${t[o-1]}; opacity:0.8;"></div>
          </div>
          <div style="font-size:0.62rem; color:#8e8e9c; margin-top:3px;">خانه ${Ne(o)}: ${Ne(n[o])}</div>
        </div>`).join("")}
    </div>`}function Xo(){const n=co(),e=p.getLeitnerStats();return`
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
      ${n.length===0?'<div style="color:#8e8e9c; font-size:0.8rem; padding:20px; text-align:center;">هنوز کارتی ندارید. از بخش ابزارها کارت اضافه کنید.</div>':n.map(t=>{const o=t.total?Math.round(t.boxes[5]/t.total*100):0;return`
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
            <div style="width:${o}%; height:100%; background:linear-gradient(90deg,#22c55e,#6366f1);"></div>
          </div>
          <div style="font-size:0.65rem; color:#8e8e9c; margin-top:4px;">تسلط: ${Ne(o)}٪</div>
          ${Qo(t.boxes,t.total)}
        </div>`}).join("")}

      <h3 style="color:#cbd5e1; font-size:0.9rem; margin:20px 0 10px;">فروشگاه دسته‌ها</h3>
      ${Vo.map(t=>`
        <div style="background:#16171d; border:1px dashed rgba(255,255,255,0.1); border-radius:18px; padding:14px 16px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center; opacity:0.85;">
          <div>
            <div style="color:#f8fafc; font-weight:700; font-size:0.88rem;">🔒 ${Ge(t.title)}</div>
            <div style="color:#8e8e9c; font-size:0.7rem; margin-top:2px;">${Ne(t.count)} کارت</div>
          </div>
          <button disabled style="padding:8px 14px; border-radius:12px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.04); color:#8e8e9c; font-size:0.75rem;">${Ge(t.price)}</button>
        </div>`).join("")}
    </div>`}function Zo(){const n=p.getFlashcards()||[],e=ke.queue[ke.index],t=n.find(a=>a.id==e),o=`
    <div style="display:flex; justify-content:space-between; align-items:center; padding:16px;">
      <button onclick="window.fcExitStudy()" style="background:none; border:none; color:#cbd5e1; font-size:1.3rem; cursor:pointer;">✕</button>
      <div style="color:#8e8e9c; font-size:0.8rem;">${t?`${Ne(ke.index+1)} / ${Ne(ke.queue.length)}`:""}</div>
    </div>`;if(!t)return`
      <div style="position:fixed; inset:0; z-index:9000; background:#0b0c10; display:flex; flex-direction:column;">
        ${o}
        <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#f8fafc; text-align:center; padding:20px;">
          <div style="font-size:3rem;">🎉</div>
          <div style="font-weight:800; margin-top:10px;">مرور تمام شد!</div>
          <div style="color:#8e8e9c; font-size:0.8rem; margin-top:4px;">${Ne(ke.reviewed)} کارت مرور شد.</div>
          <button onclick="window.fcExitStudy()" style="margin-top:20px; padding:12px 24px; border:none; border-radius:14px; background:#6366f1; color:white; font-weight:700; cursor:pointer;">بازگشت به دسته‌ها</button>
        </div>
      </div>`;const i="position:absolute; inset:0; backface-visibility:hidden; -webkit-backface-visibility:hidden; border-radius:24px; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:28px; text-align:center; line-height:1.9; overflow:auto;";return`
    <div style="position:fixed; inset:0; z-index:9000; background:#0b0c10; display:flex; flex-direction:column;">
      ${o}
      <div style="flex:1; display:flex; align-items:center; justify-content:center; padding:16px; perspective:1200px;">
        <div onclick="window.fcFlip()" style="position:relative; width:100%; max-width:520px; height:min(60vh,420px); cursor:pointer; transform-style:preserve-3d; transition:transform 0.6s; transform:rotateY(${ke.flipped?180:0}deg);">
          <div style="${i} background:#16171d; border:1px solid rgba(167,139,250,0.3);">
            <div style="font-size:0.7rem; color:#a78bfa; margin-bottom:12px;">${Ge(t.deck||"عمومی")} • خانه ${Ne(t.box||1)}</div>
            <div style="color:#f8fafc; font-size:1.1rem; font-weight:700;">${Ge(t.question)}</div>
            <div style="font-size:0.7rem; color:#8e8e9c; margin-top:18px;">برای دیدن پاسخ ضربه بزنید</div>
          </div>
          <div style="${i} background:#1a1530; border:1px solid rgba(34,197,94,0.35); transform:rotateY(180deg);">
            <div style="font-size:0.7rem; color:#22c55e; margin-bottom:12px;">پاسخ</div>
            <div style="color:#f8fafc; font-size:1rem;">${Ge(t.answer)}</div>
          </div>
        </div>
      </div>
      <div style="display:flex; gap:12px; padding:16px 16px 28px; max-width:552px; width:100%; margin:0 auto; box-sizing:border-box;">
        <button onclick="window.fcAnswer(false)" style="flex:1; padding:16px; border-radius:16px; border:1px solid rgba(239,68,68,0.4); background:rgba(239,68,68,0.15); color:#fca5a5; font-weight:800; font-size:0.95rem; cursor:pointer;">فراموش کردم</button>
        <button onclick="window.fcAnswer(true)" style="flex:1; padding:16px; border-radius:16px; border:1px solid rgba(34,197,94,0.4); background:rgba(34,197,94,0.15); color:#86efac; font-weight:800; font-size:0.95rem; cursor:pointer;">بلد بودم</button>
      </div>
    </div>`}function en(){return`<div id="flashcards-view">${ke.studyDeck?Zo():Xo()}</div>`}function ot(){const n=document.getElementById("flashcards-view");n?n.outerHTML=en():typeof window.renderApp=="function"&&window.renderApp()}window.fcStartStudy=function(n){ke.studyDeck=n,ke.queue=Ko(n),ke.index=0,ke.flipped=!1,ke.reviewed=0,ot()};window.fcExitStudy=function(){ke.studyDeck=null,ot()};window.fcFlip=function(){ke.flipped=!ke.flipped,ot()};window.fcAnswer=function(n){const e=ke.queue[ke.index];if(e!==void 0){p.reviewFlashcard(e,n),ke.reviewed++,ke.index++,ke.flipped=!1;try{typeof window.triggerActionDrivenPush=="function"&&window.triggerActionDrivenPush()}catch{}}ot()};window.updateLeitnerUI=window.updateLeitnerUI||function(){document.getElementById("flashcards-view")&&!ke.studyDeck&&ot()};window.fcCloseNewCardModal=function(){const n=document.getElementById("fc-new-card-modal");n&&n.remove()};window.fcOpenNewCardModal=function(){window.fcCloseNewCardModal();const n=co().map(i=>i.name),e="width:100%; box-sizing:border-box; background:#0b0c10; border:1px solid rgba(255,255,255,0.12); color:#f8fafc; border-radius:12px; padding:10px 12px; font-size:0.85rem; font-family:inherit; margin-bottom:12px;",t="display:block; color:#cbd5e1; font-size:0.75rem; font-weight:700; margin-bottom:6px;",o=document.createElement("div");o.id="fc-new-card-modal",o.style.cssText="position:fixed; inset:0; z-index:10000; background:rgba(0,0,0,0.65); display:flex; align-items:center; justify-content:center; padding:16px; direction:rtl;",o.innerHTML=`
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
      <input id="fc-new-category" list="fc-deck-options" placeholder="عمومی" value="${Ge(n[0]||"")}" style="${e}">
      <datalist id="fc-deck-options">${n.map(i=>`<option value="${Ge(i)}"></option>`).join("")}</datalist>
      <div id="fc-new-error" style="color:#fca5a5; font-size:0.72rem; min-height:1em; margin-bottom:8px;"></div>
      <button type="submit" style="width:100%; padding:12px; border:none; border-radius:14px; background:linear-gradient(135deg,#6366f1,#a855f7); color:white; font-weight:800; font-size:0.9rem; cursor:pointer;">ذخیره کارت</button>
    </form>`,o.addEventListener("click",i=>{i.target===o&&window.fcCloseNewCardModal()}),o.querySelector("form").addEventListener("submit",i=>{i.preventDefault(),window.fcSubmitNewCard()}),document.body.appendChild(o),setTimeout(()=>{var i;return(i=document.getElementById("fc-new-front"))==null?void 0:i.focus()},30)};window.fcSubmitNewCard=function(){var i,a,r;const n=(((i=document.getElementById("fc-new-front"))==null?void 0:i.value)||"").trim(),e=(((a=document.getElementById("fc-new-back"))==null?void 0:a.value)||"").trim(),t=(((r=document.getElementById("fc-new-category"))==null?void 0:r.value)||"").trim()||"عمومی";if(!n||!e){const d=document.getElementById("fc-new-error");d&&(d.textContent="لطفاً سوال و پاسخ را وارد کنید.");return}if(p.addFlashcard(n,e,t)){try{typeof window.triggerActionDrivenPush=="function"&&window.triggerActionDrivenPush()}catch{}window.fcCloseNewCardModal(),typeof window.showToast=="function"&&window.showToast("کارت جدید اضافه شد","✅"),ot()}};export{En as A,An as B,Dn as C,un as D,kn as E,Nn as F,sn as G,dn as H,Mt as I,ln as J,cn as K,pn as L,jn as M,gn as N,fn as O,So as P,De as Q,_o as R,Io as S,mn as T,xn as U,bn as V,bt as a,wn as b,dt as c,p as d,hn as e,Fo as f,ie as g,en as h,Ro as i,rn as j,wo as k,_ as l,vn as m,Mn as n,Cn as o,yn as p,$n as q,Oo as r,Sn as s,Mo as t,Ze as u,_n as v,Ut as w,Tn as x,In as y,zn as z};
