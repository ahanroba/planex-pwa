import{a as Dt}from"./articles-data-CLaiOG3O.js";import{E as Yt,r as Vt}from"./view-question-bank-Cfu9mnX2.js";import{t as Ke}from"./traps-analysis-data-CBLkF90D.js";import{h as jt}from"./vendor-html2canvas-BfYXEYrK.js";const ue="https://api.planexapp.ir";typeof window<"u"&&(window.API_BASE_URL=ue);const Pe=["#EF4444","#F97316","#F59E0B","#EAB308","#84CC16","#10B981","#14B8A6","#06B6D4","#0EA5E9","#3B82F6","#6366F1","#8B5CF6","#D946EF","#EC4899","#F43F5E","#831843","#BE185D","#6D28D9","#1E40AF","#047857","#4D7C0F","#B45309","#C2410C","#475569"],Ge=[{code:"cat_dakheli",title:"داخلی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#0EA5E9",icon:"🫀"},{code:"cat_jarahi",title:"جراحی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#EF4444",icon:"🔪"},{code:"cat_atfal",title:"اطفال",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#F59E0B",icon:"👶"},{code:"cat_zanan",title:"زنان و زایمان",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#EC4899",icon:"🌸"},{code:"cat_ravan",title:"روانپزشکی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#8B5CF6",icon:"🧠"},{code:"cat_ofooni",title:"عفونی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#10B981",icon:"🦠"},{code:"cat_neuro",title:"نورولوژی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#06B6D4",icon:"⚡"},{code:"cat_minor",title:"مینورها",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#6366F1",icon:"🩺"},{code:"cat_zist",title:"زیست‌شناسی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#14B8A6",icon:"🧬"},{code:"cat_shimi",title:"شیمی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#F97316",icon:"🧪"},{code:"cat_fizik",title:"فیزیک",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#3B82F6",icon:"⚛️"},{code:"cat_riazi",title:"ریاضی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#A855F7",icon:"📐"}],Ze=[{code:"non_sports",title:"ورزش و تندرستی",icon:"🏃",color:"#f59e0b",group:"غیردرسی",isStudy:!1},{code:"non_rest",title:"استراحت و تفریح",icon:"☕",color:"#8b5cf6",group:"غیردرسی",isStudy:!1},{code:"non_sleep",title:"خواب و ریکاوری",icon:"😴",color:"#6366f1",group:"غیردرسی",isStudy:!1},{code:"non_meal",title:"میان‌وعده و تغذیه",icon:"🍎",color:"#10b981",group:"غیردرسی",isStudy:!1},{code:"non_personal",title:"کارهای شخصی",icon:"📱",color:"#ec4899",group:"غیردرسی",isStudy:!1}];function be(o){const e=Math.max(0,Math.round(Number(o)||0)),t=r=>String(r).replace(/[0-9]/g,i=>"۰۱۲۳۴۵۶۷۸۹"[i]);if(e===0)return"۰ دقیقه";if(e<60)return`${t(e)} دقیقه`;const n=Math.floor(e/60),a=e%60;return a===0?`${t(n)} ساعت`:`${t(n)} ساعت و ${t(a)} دقیقه`}function Ee(o){return o?typeof o.isStudy=="boolean"?o.isStudy:o.group==="علمی"||["ع-س","ع-ک","ع-م","ع-غ"].includes(o.code)||typeof o.code=="string"&&(o.code.startsWith("cat_")||o.code.startsWith("cust_"))&&o.group!=="غیرعلمی":!1}function Qe(o=[]){const e=new Set((o||[]).map(n=>(n.color||"").toUpperCase()));for(const n of Pe)if(!e.has(n.toUpperCase()))return n;const t=(o?o.length:0)%Pe.length;return Pe[t]}const Ye=[{id:"Q1",emoji:"🔴",title:"فوری و مهم",subtitle:"ضروری / بحرانی — همین حالا انجام بده",color:"#ef4444",softBg:"rgba(239, 68, 68, 0.10)",borderColor:"rgba(239, 68, 68, 0.38)"},{id:"Q2",emoji:"🔵",title:"مهم و غیرفوری",subtitle:"برنامه‌ریزی / رشد — زمان‌بندی کن",color:"#3b82f6",softBg:"rgba(59, 130, 246, 0.10)",borderColor:"rgba(59, 130, 246, 0.38)"},{id:"Q3",emoji:"🟡",title:"فوری و غیرمهم",subtitle:"پیگیری سریع — واگذار یا سریع تمام کن",color:"#f59e0b",softBg:"rgba(245, 158, 11, 0.10)",borderColor:"rgba(245, 158, 11, 0.38)"},{id:"Q4",emoji:"⚪",title:"غیرفوری و غیرمهم",subtitle:"کم‌اهمیت / تفریحی — حذف یا محدود کن",color:"#94a3b8",softBg:"rgba(148, 163, 184, 0.10)",borderColor:"rgba(148, 163, 184, 0.32)"}],lt="Q2";function qt(o){return Ye.find(e=>e.id===o)||Ye[1]}const ct=["Q1","Q2","Q3","Q4"],pt="Q2",M={WEEKS:"planex_weeks",CURRENT_WEEK_ID:"planex_current_week_id",HOURLY_LOGS:"planex_hourly_logs",CATEGORIES:"planex_categories",HABITS:"planex_habits",DAILY_PLANS:"planex_daily_plans",WEEKLY_GOALS:"planex_weekly_goals",STUDY_TARGETS:"planex_study_targets",EVALUATIONS:"planex_evaluations",INTERRUPTIONS:"planex_interruptions",REMINDERS:"planex_reminders",GAMIFICATION:"planex_gamification",GRATITUDE_NOTES:"planex_gratitude_notes",COUNTDOWN_EVENTS:"planex_countdown_events",USER_PROFILE:"planex_user_profile",CUSTOM_SUBJECTS:"planex_custom_subjects",RECORDED_TIMER:"planex_recorded_timer",ACTIVE_THEME:"planex_active_theme",FLASHCARDS:"planex_flashcards",USER_GROUP_DATA:"planex_user_group_data",USER_GROUPS:"planex_user_groups",ACTIVE_GROUP_CODE:"planex_active_group_code",PERSONAL_SYNC_TOKEN:"planex_personal_sync_token",LAST_PERSONAL_SYNC:"planex_last_personal_sync"};function je(o){if(!o||typeof o!="string")return!0;const e=o.trim().replace(/\u200C/g," ").replace(/\s+/g," ");return e===""||e==="کاربر"||e.toLowerCase()==="x"}class Kt{exportAllDataJSON(){const e={},[t,n,a]=this.getTodayJalali();e._backup_metadata={app:"PlanEx Time Manager",version:"1.0.0",exportDate:`${t}/${n}/${a}`,exportedAt:new Date().toISOString()};for(let i=0;i<localStorage.length;i++){const s=localStorage.key(i);if(s&&(s.startsWith("planex_")||s.startsWith("theme_")||s.startsWith("app_")||s.startsWith("timer_")))try{e[s]=JSON.parse(localStorage.getItem(s))}catch{e[s]=localStorage.getItem(s)}}const r=localStorage.getItem("planex_user_avatar");return r&&(e.planex_user_avatar=r),JSON.stringify(e,null,2)}importAllDataJSON(e){var t,n,a;try{const r=typeof e=="string"?JSON.parse(e):e;if(typeof r!="object"||r===null)throw new Error("فرمت فایل پشتیبان معتبر نیست.");const i=this.getEffectiveUserName();Object.keys(r).forEach(s=>{if(s==="_backup_metadata")return;const d=r[s];if(d!=null){if((s===M.USER_GROUPS||s==="planex_user_groups"||s==="planex_my_groups"||s==="planex_my_rooms")&&Array.isArray(d)&&d.length===0){const l=this.getUserGroups();if(l&&l.length>0)return}if((s==="planex_recent_activity_sessions"||s==="planex_study_logs")&&Array.isArray(d))if(d.length===0)try{const l=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),c=JSON.parse(localStorage.getItem("planex_study_logs")||"[]");if(Array.isArray(l)&&l.length>0||Array.isArray(c)&&c.length>0)return}catch{}else try{const l=JSON.parse(localStorage.getItem(s)||"[]");if(Array.isArray(l)&&l.length>0){const c=new Map;[...l,...d].forEach(b=>{if(!b||typeof b!="object")return;const f=b.id||`${b.date||b.dateStr}_${b.startTime||b.timestamp||b.subject}_${b.duration||b.minutes}`;c.set(f,b)});const g=Array.from(c.values());localStorage.setItem(s,JSON.stringify(g));return}}catch{}(s==="planex_user_nickname"||s==="planex_nickname"||s==="planex_leaderboard_nickname")&&typeof d=="string"&&i&&je(d)||(s===M.USER_PROFILE&&typeof d=="object"&&d!==null&&i&&je(d.name)&&(d.name=i,d.nickname=i),typeof d=="object"?localStorage.setItem(s,JSON.stringify(d)):localStorage.setItem(s,String(d)))}});try{const s=r.planex_user_avatar||r.avatar||(typeof r.planex_user_profile=="object"?((t=r.planex_user_profile)==null?void 0:t.avatar)||((n=r.planex_user_profile)==null?void 0:n.avatar_url):null)||(typeof r.planex_auth_user=="object"?(a=r.planex_auth_user)==null?void 0:a.avatar_url:null);if(s){localStorage.setItem("planex_user_avatar",s);const d=JSON.parse(localStorage.getItem(M.USER_PROFILE)||"{}");d.avatar=s,d.avatar_url=s,d.photo=s,d.photoUrl=s,localStorage.setItem(M.USER_PROFILE,JSON.stringify(d));const l=JSON.parse(localStorage.getItem("planex_auth_user")||"{}");l&&typeof l=="object"&&Object.keys(l).length>0&&(l.avatar_url=s,l.photo_url=s,l.avatar=s,localStorage.setItem("planex_auth_user",JSON.stringify(l)),localStorage.setItem("planex_user_account",JSON.stringify(l))),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("profileUpdated"))}}catch{}return this.hydrateAndSyncState(),!0}catch(r){throw console.error("Import failed:",r),r}}getEffectiveUserName(){try{const e=[localStorage.getItem("planex_user_nickname"),localStorage.getItem("planex_nickname"),localStorage.getItem("planex_leaderboard_nickname")];try{const t=JSON.parse(localStorage.getItem(M.USER_PROFILE)||"{}");t&&(e.push(t.nickname),e.push(t.name),e.push(t.displayName))}catch{}try{const t=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}");t&&(e.push(t.full_name),e.push(t.name),e.push(t.nickname),e.push(t.first_name))}catch{}for(const t of e)if(t&&typeof t=="string"&&!je(t))return t.trim()}catch{}return""}hydrateAndSyncState(){try{const e=this.getEffectiveUserName();if(e){localStorage.setItem("planex_user_nickname",e),localStorage.setItem("planex_nickname",e),localStorage.setItem("planex_leaderboard_nickname",e);try{const a=JSON.parse(localStorage.getItem(M.USER_PROFILE)||"{}");(a.name!==e||a.nickname!==e)&&(a.name=e,a.nickname=e,localStorage.setItem(M.USER_PROFILE,JSON.stringify(a)))}catch{}try{const a=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}");a&&typeof a=="object"&&Object.keys(a).length>0&&(a.name=e,a.full_name=e,a.nickname=e,localStorage.setItem("planex_auth_user",JSON.stringify(a)),localStorage.setItem("planex_user_account",JSON.stringify(a)))}catch{}}const t=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),n=JSON.parse(localStorage.getItem("planex_study_logs")||"[]");if(Array.isArray(t)&&Array.isArray(n)&&(t.length>0||n.length>0)){const a=new Map;[...t,...n].forEach(i=>{if(!i||typeof i!="object")return;const s=i.id||`${i.date||i.dateStr}_${i.startTime||i.timestamp||i.subject}_${i.duration||i.minutes}`;a.set(s,i)});const r=Array.from(a.values());r.sort((i,s)=>{const d=Number(i.timestamp||i.createdAt||0);return Number(s.timestamp||s.createdAt||0)-d}),localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(r)),localStorage.setItem("planex_study_logs",JSON.stringify(r))}this._breakdownMemoMap={}}catch(e){console.warn("[db] hydrateAndSyncState error:",e)}}constructor(){this.initDefaults(),this.hydrateAndSyncState()}gregorianToJalali(e,t,n){const a=[0,31,59,90,120,151,181,212,243,273,304,334];let r=t>2?e+1:e,i=355666+365*e+Math.floor((r+3)/4)-Math.floor((r+99)/100)+Math.floor((r+399)/400)+n+a[t-1],s=-1595+33*Math.floor(i/12053);i%=12053,s+=4*Math.floor(i/1461),i%=1461,i>365&&(s+=Math.floor((i-1)/365),i=(i-1)%365);let d=i<186?1+Math.floor(i/31):7+Math.floor((i-186)/30),l=1+(i<186?i%31:(i-186)%30);return[s,d,l]}jalaliToJdn(e,t,n){let a=e-(e>=0?474:473),r=474+a%2820;return n+(t<=7?(t-1)*31:(t-7)*30+186)+Math.floor((r*682-110)/2816)+(r-1)*365+Math.floor(a/2820)*1029983+1948320}jdnToJalali(e){let t=e-this.jalaliToJdn(475,1,1),n=Math.floor(t/1029983),a=t%1029983,r;if(a===1029982)r=2820;else{let c=Math.floor(a/366),g=a%366;r=Math.floor((2134*c+2816*g+2815)/1028522)+c+1}let i=474+2820*n+r,s=e-this.jalaliToJdn(i,1,1)+1,d,l;return s<=186?(d=Math.ceil(s/31),l=s-(d-1)*31):(d=Math.ceil((s-186)/30)+6,l=s-186-(d-7)*30),[i,d,l]}jdnToGregorian(e){let t=e+68569,n=Math.floor(4*t/146097);t=t-Math.floor((146097*n+3)/4);let a=Math.floor(4e3*(t+1)/1464001);t=t-Math.floor(1461*a/4)+31;let r=Math.floor(80*t/2447),i=t-Math.floor(2447*r/80);t=Math.floor(r/11);let s=r+2-12*t;return[100*(n-49)+a+t,s,i]}getJalaliDateTimestampRange(e=null){const t=this.normalizeJalaliDate(e||this.getTodayJalaliString()),n=t.split("/").map(Number),a=n[0]||1405,r=n[1]||1,i=n[2]||1,s=this.jalaliToJdn(a,r,i),[d,l,c]=this.jdnToGregorian(s),g=new Date(d,l-1,c,0,0,0,0),b=new Date(d,l-1,c,23,59,59,999);return{dateStr:t,startDate:g,endDate:b,startTimestamp:g.getTime(),endTimestamp:b.getTime()}}getTodayJalali(){const e=new Date;return this.gregorianToJalali(e.getFullYear(),e.getMonth()+1,e.getDate())}getTodayJdn(){const[e,t,n]=this.getTodayJalali();return this.jalaliToJdn(e,t,n)}getJalaliMonthLength(e,t){const n=this.jalaliToJdn(e,t,1);return(t===12?this.jalaliToJdn(e+1,1,1):this.jalaliToJdn(e,t+1,1))-n}getWeeksInMonth(e,t){const a=(this.jalaliToJdn(e,t,1)+2)%7;return Math.ceil((a+this.getJalaliMonthLength(e,t))/7)}initDefaults(){if(localStorage.getItem(M.WEEKS)&&localStorage.removeItem(M.WEEKS),!localStorage.getItem(M.CATEGORIES))localStorage.setItem(M.CATEGORIES,JSON.stringify(Ge));else{let e=[];try{e=JSON.parse(localStorage.getItem(M.CATEGORIES)||"[]"),Array.isArray(e)||(e=[])}catch{e=[]}e=e.filter(r=>r&&typeof r=="object"&&r.code);const t=["ب","ع-ک","ع-م","ع-س","ع-غ","م","خ","ت","ش","تـ"],n=["تمرکز و بازآفرینی","کلاس و آموزش","تمرین و کارگاه گروهی","مطالعه و پژوهش","مطالعه آزاد","امور شغلی و کسب‌وکار","خواب","تفریح و ورزش","امور شخصی","زمان تلف شده"];if(e.some(r=>t.includes(r.code)||n.includes(r.title))){const r=e.filter(s=>!t.includes(s.code)&&!n.includes(s.title)),i=[...Ge];r.forEach(s=>{i.some(d=>d.code===s.code||d.title===s.title)||i.push(s)}),e=i}e.length===0&&(e=[...Ge]),localStorage.setItem(M.CATEGORIES,JSON.stringify(e))}if(localStorage.getItem(M.CUSTOM_SUBJECTS)||localStorage.setItem(M.CUSTOM_SUBJECTS,JSON.stringify([])),localStorage.getItem(M.STUDY_TARGETS)||localStorage.setItem(M.STUDY_TARGETS,JSON.stringify({dailyStudyGoalHours:8,weeklyStudyGoalHours:56,dailyTestGoalCount:150,weeklyTestGoalCount:1e3})),localStorage.getItem(M.USER_PROFILE)||localStorage.setItem(M.USER_PROFILE,JSON.stringify({name:"",major:"",targetField:""})),!localStorage.getItem(M.COUNTDOWN_EVENTS))localStorage.setItem(M.COUNTDOWN_EVENTS,JSON.stringify([{id:1,title:"کنکور سراسری ۱۴۰۵",jy:1405,jm:5,jd:29}]));else{let e=JSON.parse(localStorage.getItem(M.COUNTDOWN_EVENTS)),t=!1;e=e.map(n=>n.id===1&&n.jy===1404?(t=!0,{id:1,title:"کنکور سراسری ۱۴۰۵",jy:1405,jm:5,jd:29}):n),t&&localStorage.setItem(M.COUNTDOWN_EVENTS,JSON.stringify(e))}localStorage.getItem(M.GAMIFICATION)||localStorage.setItem(M.GAMIFICATION,JSON.stringify({xp:0,level:1,streak:0,lastLogin:Date.now()})),localStorage.getItem(M.REMINDERS)||localStorage.setItem(M.REMINDERS,JSON.stringify([])),localStorage.getItem(M.INTERRUPTIONS)||localStorage.setItem(M.INTERRUPTIONS,JSON.stringify([])),this.purgeMockAndFutureData()}purgeMockAndFutureData(){try{const[e,t,n]=this.getTodayJalali(),a=this.jalaliToJdn(e,t,n),r=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]");if(Array.isArray(r)){const s=r.filter(d=>{if(!d||typeof d!="object")return!1;if(d.dateStr||d.date){const l=d.dateStr||d.date,c=String(l).split("/").map(Number);if(c.length===3&&!isNaN(c[0])&&!isNaN(c[1])&&!isNaN(c[2])&&this.jalaliToJdn(c[0],c[1],c[2])>a)return!1}return!(d.id&&typeof d.id=="string"&&(d.id.startsWith("mock_")||d.id.startsWith("dummy_")||d.id.startsWith("seed_")))});localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(s))}const i=JSON.parse(localStorage.getItem(M.RECORDED_TIMER)||"{}");if(typeof i=="object"&&i!==null){const s=new Date().toISOString().slice(0,10);let d=!1;Object.keys(i).forEach(l=>{l>s&&(delete i[l],d=!0)}),d&&localStorage.setItem(M.RECORDED_TIMER,JSON.stringify(i))}}catch(e){console.warn("purgeMockAndFutureData error:",e)}}getCurrentWeekStartDate(e=new Date){const t=new Date(e),n=(t.getDay()+1)%7,a=new Date(t.getFullYear(),t.getMonth(),t.getDate()-n);return a.setHours(0,0,0,0),a}getLiveCurrentWeekObject(e=new Date){const t=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],n=["هفته اول","هفته دوم","هفته سوم","هفته چهارم","هفته پنجم","هفته ششم"],a=["شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه"],r=this.getCurrentWeekStartDate(e),i=new Date(r.getFullYear(),r.getMonth(),r.getDate()+6),[s,d,l]=this.gregorianToJalali(r.getFullYear(),r.getMonth()+1,r.getDate()),[c,g,b]=this.gregorianToJalali(i.getFullYear(),i.getMonth()+1,i.getDate()),f=this.getJalaliWeekNumber(s,d,l),k=`${s}_${d}_${f}`,u=t[d-1],x=t[g-1],y=`${l} ${u} تا ${b} ${x}`,h=d>=7?s:s-1,_=h+1,m=`${h}-${_}`,w=[],T=this.getTodayJalaliString();for(let A=0;A<7;A++){const z=new Date(r.getFullYear(),r.getMonth(),r.getDate()+A),[B,D,I]=this.gregorianToJalali(z.getFullYear(),z.getMonth()+1,z.getDate()),P=`${B}/${String(D).padStart(2,"0")}/${String(I).padStart(2,"0")}`,j=this.normalizeJalaliDate(P)===T,C=this.getStudyMinutesByDate(P),J=this.getDailyTestCount(P);w.push({dayIndex:A,dayName:a[A],dateStr:P,dayOfMonth:I,monthName:t[D-1],year:B,monthIdx:D,isToday:j,studyMinutes:C,totalStudyMinutes:C,testsCount:J,testCount:J})}return{id:k,year:s,monthIdx:d,weekNum:f,month:u,weekNumber:n[f-1]||`هفته ${f}`,academicYear:m,startDate:`${l} ${u}`,endDate:`${b} ${x}`,dateRange:y,isCurrentWeek:!0,status:"current",days:w}}getWeekObject(e,t,n){const a=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],r=["هفته اول","هفته دوم","هفته سوم","هفته چهارم","هفته پنجم","هفته ششم"],i=J=>String(J).replace(/[0-9]/g,W=>"۰۱۲۳۴۵۶۷۸۹"[W]),s=["شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه"],d=this.jalaliToJdn(e,t,1),l=(d+2)%7,g=d-l+(n-1)*7,b=g+6,f=this.getTodayJdn(),k=f>=g&&f<=b;let u="current";f>b?u="past":f<g&&(u="future");const[x,y,h]=this.jdnToJalali(g),[_,m,w]=this.jdnToJalali(b),T=a[y-1],A=a[m-1],z=`${h} ${T} تا ${w} ${A}`,B=`${e}_${t}_${n}`,D=t>=7?e:e-1,I=D+1,P=`${i(D)}-${i(I)}`,j=[],C=this.getTodayJalaliString();for(let J=0;J<7;J++){const W=g+J;let G="",K=e,q=t,Z=1;try{[K,q,Z]=this.jdnToJalali(W),G=`${K}/${String(q).padStart(2,"0")}/${String(Z).padStart(2,"0")}`}catch{}const R=G?this.getStudyMinutesByDate(G):0,X=G?this.getDailyTestCount(G):0,Q=G?this.normalizeJalaliDate(G)===C:!1;j.push({dayIndex:J,dayName:s[J],dateStr:G,dayOfMonth:Z,monthName:a[q-1],year:K,monthIdx:q,isToday:Q,studyMinutes:R,totalStudyMinutes:R,testsCount:X,testCount:X})}return{id:B,year:e,monthIdx:t,weekNum:n,month:a[t-1],weekNumber:r[n-1]||`هفته ${n}`,academicYear:P,startDate:`${h} ${T}`,endDate:`${w} ${A}`,dateRange:z,isCurrentWeek:k,status:u,days:j}}saveCurrentWeek(e){if(!(!e||!e.id))try{const t=JSON.parse(localStorage.getItem("planex_week_data")||"{}");t[e.id]=e,localStorage.setItem("planex_week_data",JSON.stringify(t));const n=JSON.parse(localStorage.getItem(M.WEEKS)||"{}");n[e.id]=e,localStorage.setItem(M.WEEKS,JSON.stringify(n))}catch(t){console.error("Error in saveCurrentWeek:",t)}}getJalaliWeekNumber(e,t,n){const a=this.jalaliToJdn(e,t,1),r=(a+2)%7,i=a-r,d=this.jalaliToJdn(e,t,n)-i,l=Math.floor(d/7)+1;return Math.min(this.getWeeksInMonth(e,t),Math.max(1,l))}getTodayWeekKey(){const[e,t,n]=this.getTodayJalali(),a=this.getJalaliWeekNumber(e,t,n);return`${e}_${t}_${a}`}getWeeks(){const e=this.getCurrentWeek(),t=[],n=this.getWeeksInMonth(e.year,e.monthIdx);for(let a=1;a<=n;a++)t.push(this.getWeekObject(e.year,e.monthIdx,a));return t}getCurrentWeek(e=new Date){const t=localStorage.getItem("planex_active_week_key");if(t){const n=t.split("_");if(n.length===3){const a=parseInt(n[0]),r=parseInt(n[1]),i=parseInt(n[2]);if(!isNaN(a)&&!isNaN(r)&&!isNaN(i)&&r>=1&&r<=12&&i>=1&&i<=this.getWeeksInMonth(a,r))return this.getWeekObject(a,r,i)}}return this.getLiveCurrentWeekObject(e)}setCurrentWeekKey(e){localStorage.setItem("planex_active_week_key",e),localStorage.setItem(M.CURRENT_WEEK_ID,e)}setCurrentWeek(e){this.setCurrentWeekKey(e)}goToPrevWeek(){const e=this.getCurrentWeek();let t=e.year,n=e.monthIdx,a=e.weekNum;a>1?a--:(n>1?n--:(n=12,t--),a=this.getWeeksInMonth(t,n)),this.setCurrentWeekKey(`${t}_${n}_${a}`)}goToNextWeek(){const e=this.getCurrentWeek();let t=e.year,n=e.monthIdx,a=e.weekNum;a<this.getWeeksInMonth(t,n)?a++:(a=1,n<12?n++:(n=1,t++)),this.setCurrentWeekKey(`${t}_${n}_${a}`)}resetToCurrentWeek(){this.setCurrentWeekKey(this.getTodayWeekKey())}hasDataForWeek(e){const t=this.getHourlyLogs(e);if(Object.keys(t).length>0)return!0;const n=this.getDailyPlans(e);if(n&&n.length>0)return!0;const a=this.getWeeklyGoals(e);return!!(a&&Object.keys(a).length>0)}deleteWeek(e){let t=this.getWeeks();t=t.filter(n=>n.id!=e),localStorage.setItem(M.WEEKS,JSON.stringify(t)),localStorage.getItem(M.CURRENT_WEEK_ID)==e&&t.length>0&&localStorage.setItem(M.CURRENT_WEEK_ID,t[0].id.toString())}getHourlyLogs(e){return JSON.parse(localStorage.getItem(M.HOURLY_LOGS)||"{}")[e]||{}}setHourlyLog(e,t,n,a,r=null,i=null,s=0,d=null,l=null,c=0){const g=JSON.parse(localStorage.getItem(M.HOURLY_LOGS)||"{}");g[e]||(g[e]={});const b=`${t}_${n}`;!a||a==="-"?delete g[e][b]:g[e][b]={categoryCode:a,note:r||"",subject:i||"",testCount:parseInt(s)||0,studyMethod:d||"",description:l||"",rating:parseInt(c)||0,updatedAt:Date.now()},localStorage.setItem(M.HOURLY_LOGS,JSON.stringify(g))}getCategories(){try{const e=JSON.parse(localStorage.getItem(M.CATEGORIES)||"[]");if(!Array.isArray(e)||e.length===0)return Ge;const t=e.filter(n=>n&&typeof n=="object"&&n.code);return t.length>0?t:Ge}catch{return Ge}}getNextCategoryColor(){return Qe(this.getCategories())}addCategory(e,t,n="علمی",a=null,r="",i="📚",s=!0){const d=this.getCategories(),l=a||Qe(d),c=typeof s=="boolean"?s:n==="علمی",g={code:e||"cust_"+Date.now(),title:(t||"").trim(),group:n||(c?"علمی":"غیرعلمی"),isStudy:c,color:l,recommendedTarget:r||"",icon:i||(c?"📚":"☕")};return d.push(g),localStorage.setItem(M.CATEGORIES,JSON.stringify(d)),g}saveCategory(e){let t=this.getCategories();const n=e.isStudy!==void 0?!!e.isStudy:e.group==="علمی",a=e.code||"cust_"+Date.now(),r=t.findIndex(s=>s.code===a),i={code:a,title:(e.title||"").trim(),group:e.group||(n?"علمی":"غیرعلمی"),isStudy:n,color:e.color||Qe(t),recommendedTarget:e.recommendedTarget||"",icon:e.icon||(n?"📚":"☕")};return r>=0?t[r]={...t[r],...i}:t.push(i),localStorage.setItem(M.CATEGORIES,JSON.stringify(t)),i}isCategoryStudy(e){if(!e)return!1;if(typeof e=="object")return Ee(e);const n=this.getCategories().find(a=>a.code===e);return Ee(n)}updateCategoryIcon(e,t){const n=this.getCategories(),a=n.find(r=>r.code===e);a&&(a.icon=t,localStorage.setItem(M.CATEGORIES,JSON.stringify(n)))}deleteCategory(e){try{let t=this.getCategories();return t=t.filter(n=>n&&n.code!==e),t.length===0&&(t=[...Ge]),localStorage.setItem(M.CATEGORIES,JSON.stringify(t)),t}catch{return Ge}}getNonStudyCategories(){try{const e=JSON.parse(localStorage.getItem("planex_deleted_nonstudy_codes")||"[]"),t=JSON.parse(localStorage.getItem("planex_custom_nonstudy_categories")||"[]"),n=Array.isArray(t)?t.filter(i=>i&&typeof i=="object"&&i.code):[],a=new Map;Ze.forEach(i=>a.set(i.code,i)),n.forEach(i=>a.set(i.code,i));const r=Array.from(a.values()).filter(i=>i&&!e.includes(i.code));return r.length>0?r:Ze}catch{return Ze}}addNonStudyCategory(e,t="☕",n="#f59e0b"){try{const a=JSON.parse(localStorage.getItem("planex_custom_nonstudy_categories")||"[]"),i={code:"non_cust_"+Date.now().toString(36)+Math.random().toString(36).substr(2,4),title:String(e).trim(),icon:t||"☕",color:n||"#f59e0b",group:"غیردرسی",isStudy:!1};return a.push(i),localStorage.setItem("planex_custom_nonstudy_categories",JSON.stringify(a)),i}catch{return{code:"non_"+Date.now(),title:e,icon:"☕",color:"#f59e0b",isStudy:!1}}}deleteNonStudyCategory(e){try{let t=JSON.parse(localStorage.getItem("planex_custom_nonstudy_categories")||"[]");Array.isArray(t)&&(t=t.filter(a=>a&&a.code!==e),localStorage.setItem("planex_custom_nonstudy_categories",JSON.stringify(t)));let n=JSON.parse(localStorage.getItem("planex_deleted_nonstudy_codes")||"[]");return n.includes(e)||(n.push(e),localStorage.setItem("planex_deleted_nonstudy_codes",JSON.stringify(n))),this.getNonStudyCategories()}catch{return Ze}}getCustomSubjects(){return JSON.parse(localStorage.getItem(M.CUSTOM_SUBJECTS)||"[]")}addCustomSubject(e){const t=this.getCustomSubjects();t.includes(e)||(t.push(e),localStorage.setItem(M.CUSTOM_SUBJECTS,JSON.stringify(t)))}deleteCustomSubject(e){let t=this.getCustomSubjects();t=t.filter(n=>n!==e),localStorage.setItem(M.CUSTOM_SUBJECTS,JSON.stringify(t))}getUniqueLoggedTopics(e=null){const t=new Set;try{const n=JSON.parse(localStorage.getItem(M.HOURLY_LOGS)||"{}");Object.values(n).forEach(i=>{i&&typeof i=="object"&&Object.values(i).forEach(s=>{if(s&&s.subject&&(!e||s.categoryCode===e)){const d=String(s.subject).trim();d&&t.add(d)}})});const a=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]");Array.isArray(a)&&a.forEach(i=>{if(i&&i.subject&&(!e||i.categoryCode===e)){const s=String(i.subject).trim();s&&t.add(s)}});const r=this.getCustomSubjects();Array.isArray(r)&&r.forEach(i=>{const s=String(i).trim();s&&t.add(s)})}catch{}return Array.from(t)}getHabits(){let e=JSON.parse(localStorage.getItem(M.HABITS)||"[]"),t=!1;const n=new Set;return e.forEach((a,r)=>{(!a.id||n.has(a.id))&&(a.id=Date.now().toString()+"_"+r+"_"+Math.random().toString(36).substr(2,9),t=!0),n.add(a.id)}),t&&localStorage.setItem(M.HABITS,JSON.stringify(e)),e}addHabit(e,t="روزانه",n="08:00",a=null){const r=this.getHabits();let i=a,s=String(e||"").trim();const d=s.match(new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Presentation}|\\uD83C[\\uDF00-\\uDFFF]|\\uD83D[\\uDC00-\\uDE4F]|\\uD83E[\\uDD00-\\uDDFF]|\\uD83D[\\uDE80-\\uDEFF]|[\\u2600-\\u27BF])\\s*","u"));d&&(i||(i=d[1]),s=s.substring(d[0].length).trim()),i||(i="✨");const l={id:Date.now().toString()+"_"+r.length+"_"+Math.random().toString(36).substr(2,9),title:s||e,emoji:i,frequency:t,targetTime:n,daysCompleted:[!1,!1,!1,!1,!1,!1,!1],completedDays:{}};return r.push(l),localStorage.setItem(M.HABITS,JSON.stringify(r)),l}updateHabit(e,t={}){const n=this.getHabits(),a=n.find(r=>r.id==e||String(r.id)===String(e));if(a){if(t.title!==void 0){let r=String(t.title).trim();const i=r.match(new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Presentation}|\\uD83C[\\uDF00-\\uDFFF]|\\uD83D[\\uDC00-\\uDE4F]|\\uD83E[\\uDD00-\\uDDFF]|\\uD83D[\\uDE80-\\uDEFF]|[\\u2600-\\u27BF])\\s*","u"));i&&!t.emoji&&(t.emoji=i[1],r=r.substring(i[0].length).trim()),a.title=r||t.title}return t.emoji!==void 0&&(a.emoji=t.emoji),t.frequency!==void 0&&(a.frequency=t.frequency),t.targetTime!==void 0&&(a.targetTime=t.targetTime),localStorage.setItem(M.HABITS,JSON.stringify(n)),a}return null}toggleHabitDay(e,t){const n=this.getHabits(),a=n.find(r=>r.id==e);a&&(a.daysCompleted||(a.daysCompleted=[!1,!1,!1,!1,!1,!1,!1]),a.daysCompleted[t]=!a.daysCompleted[t],localStorage.setItem(M.HABITS,JSON.stringify(n)))}cycleHabitDay(e,t,n){const a=this.getHabits(),r=a.find(i=>i.id==e||String(i.id)===String(e));if(r){r.completedDays||(r.completedDays={}),r.completedDays[t]||(r.completedDays[t]={});let i=r.completedDays[t][n]||0;return i=(i+1)%3,r.completedDays[t][n]=i,localStorage.setItem(M.HABITS,JSON.stringify(a)),i}return 0}deleteHabit(e){let t=this.getHabits();t=t.filter(n=>n.id!=e&&String(n.id)!==String(e)),localStorage.setItem(M.HABITS,JSON.stringify(t))}getDailyPlans(e){return(JSON.parse(localStorage.getItem(M.DAILY_PLANS)||"{}")[e]||[]).map(a=>({...a,priority:ct.includes(a.priority)?a.priority:pt}))}addDailyPlan(e,t,n,a=pt){const r=JSON.parse(localStorage.getItem(M.DAILY_PLANS)||"{}");r[e]||(r[e]=[]);const i=ct.includes(a)?a:pt,d={id:`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,dayIndex:t,text:n,isDone:!1,priority:i,createdAt:Date.now()};return r[e].push(d),localStorage.setItem(M.DAILY_PLANS,JSON.stringify(r)),d}setDailyPlanPriority(e,t,n){if(!ct.includes(n))return!1;const a=JSON.parse(localStorage.getItem(M.DAILY_PLANS)||"{}");if(!a[e])return!1;const r=a[e].find(i=>i.id==t);return r?(r.priority=n,localStorage.setItem(M.DAILY_PLANS,JSON.stringify(a)),!0):!1}toggleDailyPlan(e,t){const n=JSON.parse(localStorage.getItem(M.DAILY_PLANS)||"{}");let a=null;if(n[e]&&(a=n[e].find(r=>r.id==t||String(r.id)===String(t))),!a){for(const r of Object.keys(n))if(a=n[r].find(i=>i.id==t||String(i.id)===String(t)),a)break}return a?(a.isDone=!a.isDone,localStorage.setItem(M.DAILY_PLANS,JSON.stringify(n)),!0):!1}deleteDailyPlan(e,t){const n=JSON.parse(localStorage.getItem(M.DAILY_PLANS)||"{}");n[e]&&(n[e]=n[e].filter(a=>a.id!=t&&String(a.id)!==String(t)));for(const a of Object.keys(n))n[a]=n[a].filter(r=>r.id!=t&&String(r.id)!==String(t));localStorage.setItem(M.DAILY_PLANS,JSON.stringify(n))}getWeeklyGoals(e){return JSON.parse(localStorage.getItem(M.WEEKLY_GOALS)||"{}")[e]||[]}addWeeklyGoal(e,t){const n=JSON.parse(localStorage.getItem(M.WEEKLY_GOALS)||"{}");n[e]||(n[e]=[]),n[e].push({id:Date.now(),text:t,isDone:!1}),localStorage.setItem(M.WEEKLY_GOALS,JSON.stringify(n))}toggleWeeklyGoal(e,t){const n=JSON.parse(localStorage.getItem(M.WEEKLY_GOALS)||"{}");let a=null;if(n[e]&&(a=n[e].find(r=>r.id==t||String(r.id)===String(t))),!a){for(const r of Object.keys(n))if(a=n[r].find(i=>i.id==t||String(i.id)===String(t)),a)break}return a?(a.isDone=!a.isDone,localStorage.setItem(M.WEEKLY_GOALS,JSON.stringify(n)),!0):!1}deleteWeeklyGoal(e,t){const n=JSON.parse(localStorage.getItem(M.WEEKLY_GOALS)||"{}");n[e]&&(n[e]=n[e].filter(a=>a.id!=t&&String(a.id)!==String(t)));for(const a of Object.keys(n))n[a]=n[a].filter(r=>r.id!=t&&String(r.id)!==String(t));localStorage.setItem(M.WEEKLY_GOALS,JSON.stringify(n))}getStudyTargets(){const e={dailyStudyGoalHours:8,weeklyStudyGoalHours:56,dailyTestGoalCount:150,weeklyTestGoalCount:1e3};try{const t=JSON.parse(localStorage.getItem(M.STUDY_TARGETS));return t&&typeof t=="object"?{...e,...t}:e}catch{return e}}setStudyTargets(e){localStorage.setItem(M.STUDY_TARGETS,JSON.stringify(e))}saveStudyTargets(e){this.setStudyTargets(e)}getTodayEnergyLevel(){const e=new Date().toISOString().slice(0,10),t=JSON.parse(localStorage.getItem("planex_energy_levels")||"{}");return t[e]!==void 0?t[e]:75}setTodayEnergyLevel(e){const t=new Date().toISOString().slice(0,10),n=JSON.parse(localStorage.getItem("planex_energy_levels")||"{}");n[t]=e,localStorage.setItem("planex_energy_levels",JSON.stringify(n))}getGratitudeNotes(){return JSON.parse(localStorage.getItem(M.GRATITUDE_NOTES)||"[]")}addGratitudeNote(e,t){const n=this.getGratitudeNotes();n.unshift({id:Date.now().toString(),prompt:e||"یک اتفاق کوچک که امروز به خاطرش خوشحالی؟",text:t,dateStr:new Date().toLocaleDateString("fa-IR")}),localStorage.setItem(M.GRATITUDE_NOTES,JSON.stringify(n))}deleteGratitudeNote(e){let t=this.getGratitudeNotes();t=t.filter(n=>n.id!==e&&n.id!=e),localStorage.setItem(M.GRATITUDE_NOTES,JSON.stringify(t))}getEvaluationData(){const e=this.getCurrentWeek(),t=e?e.id:1;return JSON.parse(localStorage.getItem("planex_evaluations")||"{}")[t]||{}}saveEvaluationItem(e,t,n=!0){const a=this.getCurrentWeek(),r=a?a.id:1,i=JSON.parse(localStorage.getItem("planex_evaluations")||"{}");i[r]||(i[r]={}),i[r][e]={text:t,isPositive:n},localStorage.setItem("planex_evaluations",JSON.stringify(i))}getCountdownEvents(){return JSON.parse(localStorage.getItem(M.COUNTDOWN_EVENTS)||"[]")}addCountdownEvent(e,t,n,a){const r=this.getCountdownEvents();r.push({id:Date.now(),title:e,jy:t,jm:n,jd:a}),localStorage.setItem(M.COUNTDOWN_EVENTS,JSON.stringify(r))}deleteCountdownEvent(e){let t=this.getCountdownEvents();t=t.filter(n=>n.id!=e),localStorage.setItem(M.COUNTDOWN_EVENTS,JSON.stringify(t))}getInterruptions(e){let t=JSON.parse(localStorage.getItem(M.INTERRUPTIONS)||"{}");return Array.isArray(t)&&(t={}),t[e]||[]}addInterruption(e,t,n,a){let r=JSON.parse(localStorage.getItem(M.INTERRUPTIONS)||"{}");Array.isArray(r)&&(r={}),r[e]||(r[e]=[]),r[e].push({id:Date.now(),title:t,durationMins:n,category:a,date:new Date().toISOString()}),localStorage.setItem(M.INTERRUPTIONS,JSON.stringify(r))}getRoutineChecklist(){return JSON.parse(localStorage.getItem("planex_routine_checklist")||"[]")}addRoutineChecklistItem(e){const t=this.getRoutineChecklist();t.unshift({id:Date.now().toString(),text:e,completed:!1}),localStorage.setItem("planex_routine_checklist",JSON.stringify(t))}toggleRoutineChecklistItem(e){const t=this.getRoutineChecklist(),n=t.find(a=>a.id===e||a.id==e);n&&(n.completed=!n.completed,localStorage.setItem("planex_routine_checklist",JSON.stringify(t)))}deleteRoutineChecklistItem(e){let t=this.getRoutineChecklist();t=t.filter(n=>n.id!==e&&n.id!=e),localStorage.setItem("planex_routine_checklist",JSON.stringify(t))}getEarnedMedalBadge(){const t=(this.getGamification()||{level:1}).level||1;return t>=15?{icon:"👑",title:"استاد کنکور",color:"#eab308",desc:"سطح ۱۵+ (عالی)"}:t>=10?{icon:"💎",title:"غول تمرکز",color:"#06b6d4",desc:"سطح ۱۰+ (الماس)"}:t>=5?{icon:"🥇",title:"رتبه برتر",color:"#f59e0b",desc:"سطح ۵+ (طلا)"}:t>=3?{icon:"🥈",title:"داوطلب منظم",color:"#cbd5e1",desc:"سطح ۳+ (نقره)"}:{icon:"🥉",title:"مبتدی پرانرژی",color:"#b45309",desc:"سطح ۱+ (برنز)"}}getGamification(){const e={xp:0,level:1,streak:0,lastLogin:Date.now()};try{const t=JSON.parse(localStorage.getItem(M.GAMIFICATION));return!t||typeof t!="object"?e:{...e,...t,xp:Number(t.xp)||0,level:Number(t.level)||1}}catch{return e}}addXP(e){const t=this.getGamification(),n=Number(e)||0;t.xp+=n;let a=t.level*1e3;for(;t.xp>=a;)t.xp-=a,t.level+=1,a=t.level*1e3;localStorage.setItem(M.GAMIFICATION,JSON.stringify(t))}normalizeJalaliDate(e){if(!e)return"";let t=String(e).trim();t=t.replace(/[۰-۹]/g,a=>"۰۱۲۳۴۵۶۷۸۹".indexOf(a));const n=t.split("/").map(a=>parseInt(a,10));return n.length===3&&!n.some(isNaN)?`${n[0]}/${String(n[1]).padStart(2,"0")}/${String(n[2]).padStart(2,"0")}`:t}getTodayJalaliString(){const[e,t,n]=this.getTodayJalali();return`${e}/${String(t).padStart(2,"0")}/${String(n).padStart(2,"0")}`}getActivitiesByDate(e=null){try{const t=this.normalizeJalaliDate(e||this.getTodayJalaliString()),n=this.getJalaliDateTimestampRange(t),a=n.startTimestamp,r=n.endTimestamp;let i=[];try{const s=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),d=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),l=new Map;[...s,...d].forEach(c=>{if(!c||typeof c!="object")return;const g=c.id||`${c.date||c.dateStr}_${c.startTime||c.timestamp||c.subject}_${c.duration||c.minutes}`;l.set(g,c)}),i=Array.from(l.values())}catch{i=[]}return i.filter(s=>{if(!s||typeof s!="object")return!1;if(this.normalizeJalaliDate(s.dateStr||s.date)===t)return!0;const l=s.timestamp!==void 0?s.timestamp:s.createdAt!==void 0?s.createdAt:s.startTime;if(l!=null)try{const c=typeof l=="number"?l:typeof l=="string"&&/^\d{10,}$/.test(l.trim())?Number(l.trim()):null;if(c&&!isNaN(c)){if(c>=a&&c<=r)return!0;const g=new Date(c);if(!isNaN(g.getTime())){const[b,f,k]=this.gregorianToJalali(g.getFullYear(),g.getMonth()+1,g.getDate()),u=`${b}/${String(f).padStart(2,"0")}/${String(k).padStart(2,"0")}`;if(this.normalizeJalaliDate(u)===t)return!0}}}catch{}return!1})}catch{return[]}}getStudyMinutesByDate(e=null){const t=this.normalizeJalaliDate(e||this.getTodayJalaliString());return this.getActivitiesByDate(t).filter(a=>a?!(a.type==="non-study"||a.type==="non_study"||a.type==="break"||a.activityType==="non_study"||a.activityType==="non-study"||a.activityType==="break"||a.isStudy===!1||a.is_study_time===!1||a.counts_for_study===!1||a.isBreak===!0||a.is_break===!0||a.timerType==="break"||a.timerType===2):!1).reduce((a,r)=>{const i=Number(r.duration!==void 0?r.duration:r.minutes);return a+(isNaN(i)?0:Math.max(0,Math.ceil(i)))},0)}getStudyHoursByDate(e=null){return+(this.getStudyMinutesByDate(e)/60).toFixed(2)}getStudyStreak(){try{const[e,t,n]=this.getTodayJalali();let a=this.jalaliToJdn(e,t,n);const r=`${e}/${String(t).padStart(2,"0")}/${String(n).padStart(2,"0")}`;let i=0,s=a;this.getStudyMinutesByDate(r)>0&&i++,s--;for(let l=0;l<365;l++){const[c,g,b]=this.jdnToJalali(s),f=`${c}/${String(g).padStart(2,"0")}/${String(b).padStart(2,"0")}`;if(this.getStudyMinutesByDate(f)>0)i++,s--;else break}return i}catch{return 0}}getDailyTestCount(e=null){const t=this.normalizeJalaliDate(e||this.getTodayJalaliString());return this.getActivitiesByDate(t).filter(a=>a?!(a.type==="non-study"||a.type==="non_study"||a.type==="break"||a.activityType==="non_study"||a.activityType==="non-study"||a.activityType==="break"||a.isStudy===!1||a.is_study_time===!1||a.counts_for_study===!1||a.isBreak===!0||a.is_break===!0||a.timerType==="break"||a.timerType===2):!1).reduce((a,r)=>a+(Number(r.testCount!==void 0?r.testCount:r.tests)||0),0)}getRecordedTimerToday(){const e=this.getTodayJalaliString();return JSON.parse(localStorage.getItem(M.RECORDED_TIMER)||"{}")[e]||{minutes:0,tests:0}}getTodayTotalMinutes(){return this.getStudyMinutesByDate(this.getTodayJalaliString())}getTodayTotalTests(){return this.getDailyTestCount(this.getTodayJalaliString())}_getWeekDayDateStr(e,t=new Date){const n=this.getCurrentWeekStartDate(t),a=new Date(n.getFullYear(),n.getMonth(),n.getDate()+e),[r,i,s]=this.gregorianToJalali(a.getFullYear(),a.getMonth()+1,a.getDate());return`${r}/${String(i).padStart(2,"0")}/${String(s).padStart(2,"0")}`}getWeekDayMinutes(e){const t=this._getWeekDayDateStr(e);return t?this.getStudyMinutesByDate(t):0}getWeekDayTests(e){const t=this._getWeekDayDateStr(e);return t?this.getDailyTestCount(t):0}getDayCategoryBreakdown(e){const t=this._getWeekDayDateStr(e);if(!t)return[];let n=[];try{n=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),(!Array.isArray(n)||n.length===0)&&(n=JSON.parse(localStorage.getItem("planex_study_logs")||"[]")),Array.isArray(n)||(n=[])}catch{n=[]}const a=`${e}|${t}|${n.length}`;if(this._breakdownMemoMap||(this._breakdownMemoMap={}),this._breakdownMemoMap[a])return this._breakdownMemoMap[a];const r=this.getTodayJalaliString(),i=t===r,s=Date.now(),d=24*60*60*1e3,l=n.filter(f=>{if(!f||typeof f!="object")return!1;const k=this.normalizeJalaliDate(f.dateStr||f.date);if(k===t)return!0;if(i&&(!k||k.indexOf("/")===-1)){const u=f.timestamp||f.createdAt||0;if(u&&s-u<=d)return!0}return!1});window.DEBUG_BREAKDOWN&&console.log(`[DEBUG] getDayCategoryBreakdown (dayIndex: ${e}): Date=${t}, Found=${l.length} sessions`,l);const c={},g=this.getCategories();l.forEach(f=>{const k=f.type==="study"||f.isStudy!==!1;let u="";f.categoryTitle&&f.categoryTitle.trim()?u=f.categoryTitle.trim():f.subject&&f.subject.trim()&&f.subject!=="مطالعه متمرکز"&&f.subject!=="فعالیت غیردرسی"?u=f.subject.trim():k?u="مطالعه درسی":u="فعالیت غیردرسی";const x=f.categoryCode||"other";let y=f.color;if(!y){const h=g.find(_=>_.title===u||_.code===x);y=h?h.color:k?"#0ea5e9":"#f59e0b"}c[u]||(c[u]={title:u,minutes:0,color:y}),c[u].minutes+=Math.max(1,Math.ceil(Number(f.duration||f.minutes)||1))});const b=Object.values(c).sort((f,k)=>k.minutes-f.minutes);return this._breakdownMemoMap[a]=b,b}getDailyStats(e=null){try{const t=this.normalizeJalaliDate(e||this.getTodayJalaliString()),n=String(t).split("/").map(Number);if(n.length===3&&!isNaN(n[0])&&!isNaN(n[1])&&!isNaN(n[2])){const l=this.jalaliToJdn(n[0],n[1],n[2]),c=this.getTodayJdn();if(l>c)return{date:t,studyMinutes:0,studyHours:0,nonStudyMinutes:0,totalTests:0,categoryMinutes:{},sessionsCount:0}}const a=this.getActivitiesByDate(t);let r=0,i=0,s=0;const d={};return a.forEach(l=>{const c=Number(l.duration!==void 0?l.duration:l.minutes),g=isNaN(c)?1:Math.max(1,Math.ceil(c)),b=Number(l.testCount!==void 0?l.testCount:l.tests)||0,f=l.categoryCode||l.category||"سایر";d[f]=(d[f]||0)+g,l.type==="study"||l.isStudy!==!1?(r+=g,s+=b):i+=g}),{date:t,studyMinutes:r,studyHours:+(r/60).toFixed(2),nonStudyMinutes:i,totalTests:s,categoryMinutes:d,sessionsCount:a.length}}catch(t){return console.warn("Error in getDailyStats:",t),{date:e||"",studyMinutes:0,studyHours:0,nonStudyMinutes:0,totalTests:0}}}getStudyStatsByPeriod(e="today"){let t=[];try{const f=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),k=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),u=new Map;Array.isArray(k)&&k.forEach(x=>{x&&(x.id||x.timestamp)&&u.set(x.id||`ts_${x.timestamp}_${x.duration}`,x)}),Array.isArray(f)&&f.forEach(x=>{x&&(x.id||x.timestamp)&&u.set(x.id||`ts_${x.timestamp}_${x.duration}`,x)}),t=Array.from(u.values())}catch{t=[]}const n=new Date;n.setHours(0,0,0,0);const a=n.getTime(),r=new Date,i=(r.getDay()+1)%7,s=new Date(r.getFullYear(),r.getMonth(),r.getDate()-i);s.setHours(0,0,0,0);const d=s.getTime(),l=typeof this.getTodayJalaliString=="function"?this.getTodayJalaliString():"";let c=0,g=0;const b=new Set;return t.forEach(f=>{if(!f||typeof f!="object")return;const k=Number(f.timestamp||f.createdAt||f.endTime||0),u=this.normalizeJalaliDate?this.normalizeJalaliDate(f.dateStr||f.date):f.dateStr||f.date;let x=!1;if(e==="today"?x=k>=a||u&&u===l:e==="week"?x=k>=d:e==="all"&&(x=!0),x&&!(f.type==="non-study"||f.type==="non_study"||f.type==="break"||f.activityType==="non_study"||f.activityType==="non-study"||f.activityType==="break"||f.isStudy===!1||f.is_study_time===!1||f.counts_for_study===!1||f.isBreak===!0||f.is_break===!0||f.timerType==="break"||f.timerType===2)){c+=Math.max(0,Math.ceil(Number(f.duration!==void 0?f.duration:f.minutes)||0)),g+=Math.max(0,Number(f.testCount!==void 0?f.testCount:f.tests)||0);const h=f.subject&&f.subject.trim()!=="مطالعه متمرکز"?f.subject.trim():f.categoryTitle||f.category;h&&h.trim()&&b.add(h.trim())}}),{studyMinutes:c,studyHours:+(c/60).toFixed(2),testCount:g,subjects:Array.from(b)}}recordTimerSession(e,t=0){const n=this.getTodayJalaliString(),a=JSON.parse(localStorage.getItem(M.RECORDED_TIMER)||"{}");return a[n]||(a[n]={minutes:0,tests:0}),a[n].minutes+=e,a[n].tests+=t,localStorage.setItem(M.RECORDED_TIMER,JSON.stringify(a)),this.addXP(e*2+t*3),a[n]}recordFocusSession(e={}){const{type:t="study",activityType:n=null,minutes:a=null,duration:r=null,tests:i=0,testCount:s=null,category:d=null,categoryCode:l=null,categoryTitle:c=null,subject:g="",studyMethod:b="",note:f="",rating:k=5,timerType:u="pomodoro",startTime:x=null,endTime:y=Date.now(),date:h=null,isBreak:_=!1,is_break:m=!1,is_study_time:w=null,counts_for_study:T=null,testCorrect:A=0,testWrong:z=0,testUnanswered:B=0,testPercentage:D=null}=e,I=!!(_||m||e.isBreak===!0||e.is_break===!0||u==="break"||u===2);let j=!(t==="non-study"||t==="non_study"||n==="non-study"||n==="non_study")&&!I;(w===!1||T===!1||e.is_study_time===!1||e.counts_for_study===!1)&&(j=!1);const C=j?"study":I?"break":"non-study",W=Math.ceil(Number(r??a??1))||1;if(W>720)return console.warn(`[db.recordFocusSession] Rejected orphaned session with duration: ${W} mins (>12h).`),null;const K=Math.min(240,Math.max(1,W)),q=j?Math.max(0,parseInt(s??i)||0):0;let Z=null;const R=String(d||c||"").trim();if(j){const ne=this.getCategories();Z=ne.find(ge=>ge.code===l),!Z&&R&&(Z=ne.find(ge=>ge.title===R||ge.code===R)),Z||(Z=ne.find(ge=>Ee(ge))||{code:"ع-س",title:R||"مطالعه متمرکز",color:"#0ea5e9",icon:"📚",group:"علمی",isStudy:!0})}else{const ne=this.getNonStudyCategories();Z=ne.find(ge=>ge.code===l),!Z&&R&&(Z=ne.find(ge=>ge.title===R||ge.code===R)),Z||(Z={code:l||(I?"non_break":"غ-د"),title:R||(I?"پارت استراحت ☕":"فعالیت غیردرسی"),color:I?"#38bdf8":"#f59e0b",icon:I?"☕":"🧘",group:"غیردرسی",isStudy:!1})}const X=Z.title,Q=String(g||"").trim()||(j?"مطالعه متمرکز":I?"استراحت و ریکاوری":X),oe=String(f||"").trim(),[ce,ie,v]=this.getTodayJalali();(new Date().getDay()+1)%7;const E=this.normalizeJalaliDate(h||`${ce}/${String(ie).padStart(2,"0")}/${String(v).padStart(2,"0")}`);let L=null,F=null;if(typeof y=="number"&&!isNaN(y)&&y>1e11)L=y;else if(typeof y=="string")if(y.includes(":")){const ne=y.split(":").map(Number);if(!isNaN(ne[0])&&!isNaN(ne[1])){const ge=new Date;ge.setHours(ne[0],ne[1],0,0),L=ge.getTime()}}else{const ne=Number(y);!isNaN(ne)&&ne>1e11&&(L=ne)}if(typeof x=="number"&&!isNaN(x)&&x>1e11)F=x;else if(typeof x=="string")if(x.includes(":")){const ne=x.split(":").map(Number);if(!isNaN(ne[0])&&!isNaN(ne[1])){const ge=new Date;ge.setHours(ne[0],ne[1],0,0),F=ge.getTime()}}else{const ne=Number(x);!isNaN(ne)&&ne>1e11&&(F=ne)}F&&!L?L=F+K*60*1e3:L&&!F?F=L-K*60*1e3:!F&&!L&&(L=Date.now(),F=L-K*60*1e3);const pe={id:"session_"+Date.now()+"_"+Math.random().toString(36).substr(2,4),type:C,category:Z.title,categoryCode:Z.code,categoryTitle:Z.title,color:Z.color||(j?"#0ea5e9":I?"#38bdf8":"#f59e0b"),icon:Z.icon||(j?"📚":I?"☕":"🧘"),isStudy:j,is_study_time:j,counts_for_study:j,isBreak:I,is_break:I,activityType:j?"study":I?"break":"non_study",subject:Q,studyMethod:b||"",duration:K,minutes:K,testCount:q,tests:q,testCorrect:Math.max(0,parseInt(A)||0),testWrong:Math.max(0,parseInt(z)||0),testUnanswered:Math.max(0,parseInt(B)||0),testPercentage:D!==null?D:q>0?+((3*Math.max(0,parseInt(A)||0)-Math.max(0,parseInt(z)||0))/(3*q)*100).toFixed(1):null,note:oe,timerType:u||(I?"break":"pomodoro"),date:E,dateStr:E,startTime:F,endTime:L,timestamp:L},U=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]");U.unshift(pe),U.length>5e3&&(U.length=5e3),localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(U));const fe=JSON.parse(localStorage.getItem("planex_study_logs")||"[]");fe.unshift(pe),fe.length>5e3&&(fe.length=5e3),localStorage.setItem("planex_study_logs",JSON.stringify(fe));const xe=JSON.parse(localStorage.getItem("planex_daily_stats")||"{}");xe[E]||(xe[E]={date:E,studyMinutes:0,studyHours:0,nonStudyMinutes:0,totalTests:0,categoryMinutes:{},sessionsCount:0});const ye=xe[E];ye.sessionsCount=(ye.sessionsCount||0)+1;const _e=Z.code||"other";ye.categoryMinutes[_e]=(ye.categoryMinutes[_e]||0)+K,j?(ye.studyMinutes=(ye.studyMinutes||0)+K,ye.studyHours=+(ye.studyMinutes/60).toFixed(2),ye.totalTests=(ye.totalTests||0)+q):ye.nonStudyMinutes=(ye.nonStudyMinutes||0)+K,localStorage.setItem("planex_daily_stats",JSON.stringify(xe)),j?this.recordTimerSession(K,q):this.addXP(Math.round(K*.5));const we=E||this.getTodayJalaliString(),ke=JSON.parse(localStorage.getItem("planex_subject_study_stats")||"{}");ke[we]||(ke[we]={});const Ae=Q||Z.title;return ke[we][Ae]||(ke[we][Ae]={minutes:0,tests:0,category:Z.title,isStudy:j}),ke[we][Ae].minutes+=K,ke[we][Ae].tests+=q,localStorage.setItem("planex_subject_study_stats",JSON.stringify(ke)),this._breakdownMemoMap={},pe}saveStudyLogs(e){if(!Array.isArray(e))return[];try{let t=[];try{t=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),Array.isArray(t)||(t=[])}catch{t=[]}let n=[];try{n=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),Array.isArray(n)||(n=[])}catch{n=[]}const a=new Map;[...t,...n].forEach(i=>{if(!i||typeof i!="object")return;const s=i.id||`${i.date||i.dateStr}_${i.startTime||i.timestamp||i.subject}_${i.duration||i.minutes}`;a.set(s,i)}),e.forEach(i=>{if(!i||typeof i!="object")return;const s=i.id||`${i.date||i.dateStr}_${i.startTime||i.timestamp||i.subject}_${i.duration||i.minutes}`;!i.dateStr&&i.date&&(i.dateStr=i.date),!i.date&&i.dateStr&&(i.date=i.dateStr),a.set(s,i)});const r=Array.from(a.values());return r.sort((i,s)=>{const d=Number(i.timestamp||i.endTime||i.startTime)||0;return(Number(s.timestamp||s.endTime||s.startTime)||0)-d}),r.length>5e3&&(r.length=5e3),localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(r)),localStorage.setItem("planex_study_logs",JSON.stringify(r)),this._breakdownMemoMap={},r}catch(t){return console.error("[db] saveStudyLogs error:",t),e}}recordPomodoroSession(e={}){return this.recordFocusSession(e)}getRecentFocusSessions(e=10){try{const t=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),n=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),a=new Map;[...t,...n].forEach(i=>{if(!i||typeof i!="object")return;const s=i.id||`${i.date||i.dateStr}_${i.startTime||i.timestamp||i.subject}_${i.duration||i.minutes}`;a.set(s,i)});const r=Array.from(a.values());return r.sort((i,s)=>{const d=Number(i.timestamp||i.createdAt||0);return Number(s.timestamp||s.createdAt||0)-d}),r.slice(0,e)}catch{return[]}}deleteFocusSession(e){try{let t=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]");Array.isArray(t)||(t=[]),t=t.filter(a=>a&&a.id!==e),localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(t));let n=JSON.parse(localStorage.getItem("planex_study_logs")||"[]");Array.isArray(n)&&(n=n.filter(a=>a&&a.id!==e),localStorage.setItem("planex_study_logs",JSON.stringify(n)))}catch{}}sanitizeCorruptedStats(){try{const e=JSON.parse(localStorage.getItem("planex_daily_stats")||"{}");let t=!1;Object.keys(e).forEach(n=>{const a=e[n];a&&a.studyMinutes>1440&&(a.studyMinutes=Math.min(1440,Math.max(0,a.studyMinutes)),a.studyHours=+(a.studyMinutes/60).toFixed(2),t=!0)}),t&&localStorage.setItem("planex_daily_stats",JSON.stringify(e)),["planex_recent_activity_sessions","planex_study_logs"].forEach(n=>{try{const a=localStorage.getItem(n);if(a){const r=JSON.parse(a);if(Array.isArray(r)){const i=r.filter(s=>(Number((s==null?void 0:s.duration)||(s==null?void 0:s.minutes))||0)<=720);i.length!==r.length&&localStorage.setItem(n,JSON.stringify(i))}}}catch{}})}catch{}}getSubjectStudyStats(e=null){const t=this.normalizeJalaliDate(e||this.getTodayJalaliString()),n=this.getActivitiesByDate(t),a={};return n.forEach(r=>{if(!r||typeof r!="object")return;const s=!(r.type==="non-study"||r.type==="non_study"||r.type==="break"||r.activityType==="non_study"||r.activityType==="non-study"||r.activityType==="break"||r.isStudy===!1||r.is_study_time===!1||r.counts_for_study===!1||r.isBreak===!0||r.is_break===!0||r.timerType==="break"||r.timerType===2);let d="";r.categoryTitle&&r.categoryTitle.trim()?d=r.categoryTitle.trim():r.subject&&r.subject.trim()&&r.subject!=="مطالعه متمرکز"&&r.subject!=="فعالیت غیردرسی"?d=r.subject.trim():s?d="مطالعه متمرکز":d="فعالیت غیردرسی";const l=Math.max(0,Number(r.duration!==void 0?r.duration:r.minutes)||0),c=Math.max(0,Number(r.testCount!==void 0?r.testCount:r.tests)||0);a[d]||(a[d]={minutes:0,tests:0,category:d,isStudy:s}),a[d].minutes+=l,a[d].tests+=c}),a}getUserProfile(){const e={name:"",major:"",targetField:""};try{const t=JSON.parse(localStorage.getItem(M.USER_PROFILE)),n=t&&typeof t=="object"?{...e,...t}:e,a=this.getEffectiveUserName();return a&&(n.name=a,n.nickname=a),n}catch{return e}}setUserProfile(e){try{localStorage.setItem(M.USER_PROFILE,JSON.stringify(e))}catch(t){console.warn("[db] setUserProfile localStorage quota error:",t)}}exportAllData(){const e={};return Object.values(M).forEach(t=>{e[t]=localStorage.getItem(t)}),JSON.stringify(e,null,2)}importAllData(e){try{const t=JSON.parse(e);return Object.keys(t).forEach(n=>{t[n]!==void 0&&t[n]!==null&&localStorage.setItem(n,t[n])}),!0}catch(t){return console.error("Import failed:",t),!1}}getThemeSettings(){const e={appTheme:"theme-dark-glass",themeMode:"mode-dark",fontFamily:"font-sahel"},t=localStorage.getItem(M.ACTIVE_THEME);if(!t)return e;try{const n=JSON.parse(t);return{...e,...n,appTheme:"theme-dark-glass",themeMode:"mode-dark"}}catch{return e}}setThemeSettings(e){const n={...this.getThemeSettings(),...e};return localStorage.setItem(M.ACTIVE_THEME,JSON.stringify(n)),n}getFlashcards(){try{const t=localStorage.getItem(M.FLASHCARDS);if(t){const n=JSON.parse(t);if(Array.isArray(n)&&n.length>0)return n}}catch{}const e=[{id:"fc_seed_1",question:"تکنیک بازیابی فعال (Active Recall) چیست و چرا موثرترین روش مطالعه است؟",answer:"تلاش فعالانه مغز برای به یاد آوردن مطالب بدون نگاه کردن به کتاب؛ این فرآیند باعث تقویت مسیرهای سیناپسی و انتقال اطلاعات به حافظه بلندمدت می‌شود.",deck:"متدولوژی مطالعه",box:1,createdAt:"۱۴۰۵/۰۱/۰۱",createdTimestamp:Date.now()-864e5,nextReviewDate:Date.now()-1e3},{id:"fc_seed_2",question:"در جعبه لایتنر ۵ خانه‌ای، هر خانه چه فواصل زمانی برای مرور دارد؟",answer:"خانه ۱: روزانه (۱ روز) | خانه ۲: ۲ روز | خانه ۳: ۴ روز | خانه ۴: ۸ روز | خانه ۵: ۱۶ روز (تثبیت دائم در حافظه).",deck:"جعبه لایتنر",box:2,createdAt:"۱۴۰۵/۰۱/۰۱",createdTimestamp:Date.now()-1728e5,nextReviewDate:Date.now()-1e3},{id:"fc_seed_3",question:"بهترین استراتژی پومودورو برای یادگیری مباحث سنگین و تحلیلی چیست؟",answer:"پومودوروی پیشرفته ۵۰ دقیقه تمرکز عمیق بدون وقفه و ۱۰ دقیقه استراحت مطلق (آب خوردن و تنفس عمیق).",deck:"مدیریت زمان",box:1,createdAt:"۱۴۰۵/۰۱/۰۱",createdTimestamp:Date.now()-864e5,nextReviewDate:Date.now()-1e3}];try{localStorage.setItem(M.FLASHCARDS,JSON.stringify(e))}catch{}return e}addFlashcard(e,t,n="عمومی"){const a=this.getFlashcards(),[r,i,s]=this.getTodayJalali(),d=String(e||"").trim(),l=String(t||"").trim();if(!d||!l)return null;const c={id:"fc_"+Date.now()+"_"+Math.floor(Math.random()*1e4),question:d,answer:l,deck:String(n||"عمومی").trim(),box:1,streak:0,reviewCount:0,createdAt:`${r}/${i}/${s}`,createdTimestamp:Date.now(),lastReviewed:null,nextReviewDate:Date.now()};return a.unshift(c),localStorage.setItem(M.FLASHCARDS,JSON.stringify(a)),c}addFlashcards(e,t="هوش مصنوعی"){if(!Array.isArray(e)||e.length===0)return 0;const n=this.getFlashcards(),[a,r,i]=this.getTodayJalali();let s=0;return e.forEach((d,l)=>{if(!d)return;const c=typeof d=="object"&&(d.question||d.q)||"",g=typeof d=="object"&&(d.answer||d.a)||"",b=typeof d=="object"&&d.deck?d.deck:t,f=String(c).trim(),k=String(g).trim();f&&k&&(n.unshift({id:"fc_"+(Date.now()+l)+"_"+Math.floor(Math.random()*1e4),question:f,answer:k,deck:String(b||"هوش مصنوعی").trim(),box:1,streak:0,reviewCount:0,createdAt:`${a}/${r}/${i}`,createdTimestamp:Date.now(),lastReviewed:null,nextReviewDate:Date.now()}),s++)}),s>0&&localStorage.setItem(M.FLASHCARDS,JSON.stringify(n)),s}reviewFlashcard(e,t){const n=this.getFlashcards(),a=n.find(d=>d.id===e||d.id==e);if(!a)return null;const r=[1,2,4,8,16],i=Date.now();t?(a.box=Math.min(5,(a.box||1)+1),a.streak=(a.streak||0)+1):(a.box=1,a.streak=0),a.lastReviewed=i,a.reviewCount=(a.reviewCount||0)+1;const s=r[(a.box||1)-1]||1;return a.nextReviewDate=i+s*24*60*60*1e3,localStorage.setItem(M.FLASHCARDS,JSON.stringify(n)),a}deleteFlashcard(e){let t=this.getFlashcards();return t=t.filter(n=>n.id!==e&&n.id!=e),localStorage.setItem(M.FLASHCARDS,JSON.stringify(t)),t}getLeitnerStats(){const e=this.getFlashcards(),t=Date.now(),n={total:e.length,due:0,mastered:0,boxes:{1:0,2:0,3:0,4:0,5:0}};return e.forEach(a=>{const r=Math.min(5,Math.max(1,a.box||1));n.boxes[r]=(n.boxes[r]||0)+1,r===5&&n.mastered++,(!a.nextReviewDate||a.nextReviewDate<=t)&&n.due++}),n}getTodayStudiedSubjects(e=null){try{const t=this.normalizeJalaliDate(e||this.getTodayJalaliString()),n=this.getActivitiesByDate(t).filter(r=>r?!(r.type==="non-study"||r.type==="non_study"||r.type==="break"||r.activityType==="non_study"||r.activityType==="non-study"||r.activityType==="break"||r.isStudy===!1||r.is_study_time===!1||r.counts_for_study===!1||r.isBreak===!0||r.is_break===!0||r.timerType==="break"||r.timerType===2):!1),a=new Set;if(n.forEach(r=>{const i=r.subject&&typeof r.subject=="string"&&r.subject.trim()&&r.subject!=="مطالعه متمرکز"&&r.subject!=="فعالیت غیردرسی"?r.subject.trim():r.categoryTitle||r.category||"";i&&i.trim()&&a.add(i.trim())}),t===this.getTodayJalaliString()){const r=this.getCurrentWeek();if(r&&r.id){const i=this.getHourlyLogs(r.id),s=(new Date().getDay()+1)%7,d=this.getCategories();Object.keys(i).forEach(l=>{if(l.startsWith(`${s}_`)){const c=i[l];if(c&&c.categoryCode){const g=d.find(f=>f.code===c.categoryCode);if(g?Ee(g):c.categoryCode.startsWith("ع")||c.categoryCode==="ع-س"){const f=c.subject&&c.subject.trim()?c.subject.trim():g?g.title:"";f&&f!=="مطالعه متمرکز"&&a.add(f)}}}})}}return Array.from(a)}catch{return[]}}getUserGroups(){try{let e=[];const t=localStorage.getItem(M.USER_GROUPS);if(t){const n=JSON.parse(t);Array.isArray(n)&&(e=n.filter(a=>a&&(a.code||a.groupCode)))}if(e.length===0)for(const n of["planex_my_groups","planex_my_rooms","my_rooms"]){const a=localStorage.getItem(n);if(a)try{const r=JSON.parse(a);if(Array.isArray(r)&&r.length>0){const i=r.filter(s=>s&&(s.code||s.groupCode||s.id||s.room_code));if(i.length>0){e=i,localStorage.setItem(M.USER_GROUPS,JSON.stringify(e));break}}}catch{}}if(e.length===0){const n=localStorage.getItem(M.USER_GROUP_DATA);if(n){const a=JSON.parse(n);if(a&&(a.groupCode||a.code)){const r={code:String(a.groupCode||a.code).trim().toUpperCase(),name:String(a.groupName||a.name||`گروه ${a.groupCode}`).trim(),joinedAt:a.joinedAt||Date.now(),isOwner:!!a.isOwner,userId:a.userId||null};e=[r],localStorage.setItem(M.USER_GROUPS,JSON.stringify(e)),localStorage.setItem(M.ACTIVE_GROUP_CODE,r.code)}}}return e.map(n=>({code:String(n.code||n.groupCode||n.room_code||n.id||"").trim().toUpperCase(),name:String(n.name||n.title||n.groupName||`گروه ${n.code||n.groupCode||n.id}`).trim(),joinedAt:n.joinedAt||n.created_at||Date.now(),isOwner:!!(n.isOwner||n.is_owner||n.role==="owner"),userId:n.userId||n.creator_id||null})).filter(n=>n.code)}catch(e){return console.error("Error fetching user groups:",e),[]}}setUserGroups(e){try{Array.isArray(e)||(e=[]);const t=e.filter(s=>s&&(s.code||s.groupCode||s.room_code||s.id)).map(s=>({code:String(s.code||s.groupCode||s.room_code||s.id).trim().toUpperCase(),name:String(s.name||s.title||s.groupName||`گروه ${s.code||s.groupCode||s.id}`).trim(),joinedAt:s.joinedAt||s.created_at||Date.now(),isOwner:!!(s.isOwner||s.is_owner||s.role==="owner"),userId:s.userId||s.creator_id||null})),n=new Map;t.forEach(s=>n.set(s.code,s));const a=Array.from(n.values());localStorage.setItem(M.USER_GROUPS,JSON.stringify(a)),localStorage.setItem("planex_my_groups",JSON.stringify(a)),localStorage.setItem("planex_my_rooms",JSON.stringify(a)),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("rooms-updated"));const r=this.getActiveGroupCode();if(!r||!n.has(r)){const s=a.length>0?a[0].code:null;s?localStorage.setItem(M.ACTIVE_GROUP_CODE,s):localStorage.removeItem(M.ACTIVE_GROUP_CODE)}const i=this.getActiveGroup();return i?localStorage.setItem(M.USER_GROUP_DATA,JSON.stringify({groupCode:i.code,groupName:i.name,joinedAt:i.joinedAt,isOwner:i.isOwner,userId:i.userId})):localStorage.removeItem(M.USER_GROUP_DATA),a}catch(t){return console.error("Error saving user groups:",t),[]}}removeUserGroup(e){try{if(!e)return[];const t=String(e).trim().toUpperCase();let n=this.getUserGroups();return n=n.filter(r=>String(r.code||r.groupCode||r.room_code||r.id||"").trim().toUpperCase()!==t),localStorage.setItem(M.USER_GROUPS,JSON.stringify(n)),localStorage.setItem("planex_my_groups",JSON.stringify(n)),localStorage.setItem("planex_my_rooms",JSON.stringify(n)),this.getActiveGroupCode()===t&&(localStorage.removeItem(M.ACTIVE_GROUP_CODE),localStorage.removeItem(M.USER_GROUP_DATA),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data")),n.length>0?localStorage.setItem(M.ACTIVE_GROUP_CODE,n[0].code):localStorage.removeItem(M.ACTIVE_GROUP_CODE),n}catch(t){return console.error("Error removing user group:",t),[]}}getActiveGroupCode(){try{const e=localStorage.getItem(M.ACTIVE_GROUP_CODE);return e&&e.trim()?e.trim().toUpperCase():null}catch{return null}}setActiveGroupCode(e){try{if(!e)return localStorage.removeItem(M.ACTIVE_GROUP_CODE),localStorage.removeItem(M.USER_GROUP_DATA),null;const t=String(e).trim().toUpperCase();localStorage.setItem(M.ACTIVE_GROUP_CODE,t);const n=this.getActiveGroup();return n&&localStorage.setItem(M.USER_GROUP_DATA,JSON.stringify({groupCode:n.code,groupName:n.name,joinedAt:n.joinedAt,isOwner:n.isOwner,userId:n.userId})),t}catch{return null}}getActiveGroup(){const e=this.getUserGroups();if(e.length===0)return null;const t=this.getActiveGroupCode();return t&&e.find(a=>a.code===t)||null}addUserGroup(e){try{if(!e)return null;const t=e.code||e.groupCode;if(!t)return null;const n=String(t).trim().toUpperCase(),a=String(e.name||e.groupName||`گروه ${n}`).trim(),r=this.getUserGroups(),i=r.findIndex(d=>d.code===n),s={code:n,name:a,joinedAt:e.joinedAt||Date.now(),isOwner:i>=0?e.isOwner??r[i].isOwner:!!e.isOwner,userId:e.userId||(i>=0?r[i].userId:null)};return i>=0?r[i]=s:r.unshift(s),this.setUserGroups(r),this.setActiveGroupCode(n),s}catch(t){return console.error("Error adding user group:",t),null}}removeUserGroup(e){try{const t=String(e||this.getActiveGroupCode()||"").trim().toUpperCase();if(!t)return!1;let n=this.getUserGroups();return n=n.filter(a=>a.code!==t),this.setUserGroups(n),!0}catch(t){return console.error("Error removing user group:",t),!1}}getUserGroupData(){const e=this.getActiveGroup();return e?{groupCode:e.code,groupName:e.name,joinedAt:e.joinedAt,isOwner:e.isOwner,userId:e.userId}:null}setUserGroupData(e){return this.addUserGroup(e)}leaveUserGroup(e=null){return this.removeUserGroup(e)}getOrCreatePersonalSyncToken(){let e=localStorage.getItem(M.PERSONAL_SYNC_TOKEN);if(!e){const t="23456789ABCDEFGHJKLMNPQRSTUVWXYZ";e=`SYNC-${Array.from({length:5},()=>t[Math.floor(Math.random()*t.length)]).join("")}`,localStorage.setItem(M.PERSONAL_SYNC_TOKEN,e)}return e}setPersonalSyncToken(e){if(e){const t=String(e).trim().toUpperCase();return localStorage.setItem(M.PERSONAL_SYNC_TOKEN,t),t}return null}getPersonalSyncInfo(){const e=this.getOrCreatePersonalSyncToken(),t=localStorage.getItem(M.LAST_PERSONAL_SYNC),n=t?parseInt(t,10):0;let a="هنوز در فضای ابری ذخیره نشده";if(n>0){const r=Date.now()-n,i=Math.floor(r/(60*1e3)),s=Math.floor(i/60);i<1?a="لحظاتی پیش":i<60?a=`${i} دقیقه پیش`:s<24?a=`${s} ساعت پیش`:a=`${Math.floor(s/24)} روز پیش`}return{token:e,lastSyncTimestamp:n,lastSyncText:a,hasSyncedBefore:n>0}}markPersonalSyncSuccess(){localStorage.setItem(M.LAST_PERSONAL_SYNC,String(Date.now()))}getUserProfile(){let e={};try{e=JSON.parse(localStorage.getItem(M.USER_PROFILE)||"{}")}catch{}const t=localStorage.getItem("planex_user_avatar");return t&&(e.avatar=t,e.avatar_url=t,e.photo=t,e.photoUrl=t),e}setUserProfile(e){if(!e||typeof e!="object")return{};try{const n={...this.getUserProfile()||{},...e},a=e.avatar||e.avatar_url||e.photo||e.photoUrl||localStorage.getItem("planex_user_avatar");return a&&(localStorage.setItem("planex_user_avatar",a),n.avatar=a,n.avatar_url=a,n.photo=a,n.photoUrl=a),localStorage.setItem(M.USER_PROFILE,JSON.stringify(n)),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("profileUpdated")),n}catch(t){return console.warn("Error setting user profile:",t),e}}saveProfile(e){return this.setUserProfile(e)}getProfile(){return this.getUserProfile()}}const p=new Kt,ee={USER_ID:"planex_leaderboard_user_id",NICKNAME:"planex_leaderboard_nickname",TARGET:"planex_leaderboard_target",LAST_SYNC:"planex_leaderboard_last_sync",CACHE:"planex_leaderboard_cache",CACHE_DATE:"planex_leaderboard_cache_date",SYNC_CODE:"planex_sync_code",USER_GROUP_DATA:"planex_user_group_data",GROUP_CACHE_PREFIX:"planex_group_cache_",GROUP_ROSTER_PREFIX:"planex_group_roster_",EARLY_BIRD_HISTORY:"planex_early_bird_history",EARLY_BIRD_CACHE:"planex_early_bird_cache",EARLY_BIRD_CACHE_DATE:"planex_early_bird_cache_date"},Oe={START_MIN:5*60,END_MIN:7*60};function ut(o){if(!o)return o;const e=parseFloat(o.study_minutes||o.studyMinutes||o.total_study_minutes||0),t=parseInt(o.test_count||o.testCount||o.total_tests||0)||0;let n=parseFloat(o.weekly_study_minutes||o.weeklyStudyMinutes||0),a=parseInt(o.weekly_test_count||o.weeklyTestCount||0)||0;!n&&e>0&&(n=e),!a&&t>0&&(a=t);const r=parseFloat(o.alltime_study_minutes||o.allTimeStudyMinutes||o.total_study_minutes_alltime||0),i=parseInt(o.alltime_test_count||o.allTimeTestCount||o.total_tests_alltime||0)||0;return{...o,studyMinutes:Math.round(e),testCount:t,weeklyStudyMinutes:Math.round(Math.max(n,e)),weeklyTestCount:Math.max(a,t),allTimeStudyMinutes:Math.round(Math.max(r,n,e)),allTimeTestCount:Math.max(i,a,t)}}const $={_studyHeartbeatInterval:null,_currentStudySubject:"",isCurrentStudyingActive(){try{if(typeof window<"u"&&typeof window.isUserStudyingNow=="function")return window.isUserStudyingNow();const o=typeof window<"u"?window.appState:null;if(!o||!!!(o.isPomodoroRunning||o.isStopwatchRunning))return!1;const t=o.focusTimerType===2,n=o.focusActivityMode==="non-study"&&!t;return!t&&!n}catch{return!1}},isMemberStudying(o){if(!o||!o.isStudying)return!1;try{const a=this.getUserProfile();if(o.userId===a.userId||o.isCurrentUser||o.isUser)return this.isCurrentStudyingActive()}catch{}const e=Number(o.lastHeartbeat)||0;if(!e)return!1;const t=15*60*1e3,n=Date.now()-e;return n>=0&&n<t},exportAppState(){try{const o=p.exportAllDataJSON();return JSON.parse(o)}catch(o){console.warn("[Sync] db.exportAllDataJSON failed, using fallback:",o);const e={};for(let t=0;t<localStorage.length;t++){const n=localStorage.key(t);if(n&&(n.startsWith("planex_")||n.startsWith("theme_")||n.startsWith("app_")||n.startsWith("timer_")))try{e[n]=JSON.parse(localStorage.getItem(n))}catch{e[n]=localStorage.getItem(n)}}return e}},importAppState(o){if(!o)return!1;try{return p.importAllDataJSON(o)}catch(e){return console.error("[Sync] db.importAllDataJSON failed:",e),!1}},getOrCreateSyncCode(){let o=localStorage.getItem(ee.SYNC_CODE);if(!o){const e="23456789ABCDEFGHJKLMNPQRSTUVWXYZ";o=`PLX-${Array.from({length:3},()=>e[Math.floor(Math.random()*e.length)]).join("")}`,localStorage.setItem(ee.SYNC_CODE,o)}return o},setSyncCode(o){if(o){const e=String(o).trim().toUpperCase();localStorage.setItem(ee.SYNC_CODE,e)}},async pushSyncCode(o=null){const e=o||this.getOrCreateSyncCode(),t=this.getUserProfile(),n=this.exportAppState(),a=localStorage.getItem("planex_user_avatar")||t.avatar||t.avatar_url||"";a&&n&&typeof n=="object"&&(n.planex_user_avatar=a);const r={code:e,syncCode:e,userId:t.userId,nickname:t.nickname,target:t.target,avatarUrl:a,avatar_url:a,avatar:a,backupData:n,appState:n,updatedAt:Date.now()};try{let i=await fetch(`${ue}/api/sync-code.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});if(i.ok||(i=await fetch(`${ue}/api/v1/sync-code.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)})),i.ok)return{success:!0,code:e,message:"کد کپی و اطلاعات شما روی سرور ذخیره شد."};const s=await i.json().catch(()=>({}));throw new Error(s.message||`خطای سرور (${i.status})`)}catch(i){return console.warn("[Sync] Push sync code failed:",i),{success:!1,code:e,message:"خطا در ذخیره ابری داده‌ها: "+i.message}}},async applySyncCode(o){if(!o||!o.trim())return{success:!1,message:"لطفاً کد همگام‌سازی را وارد کنید."};const e=o.trim().toUpperCase();try{let t=await fetch(`${ue}/api/sync-code.php?code=${e}`);t.ok||(t=await fetch(`${ue}/api/v1/sync-code.php?code=${e}`)),t.ok||(t=await fetch(`${ue}/api/leaderboard.php?sync_code=${e}`));const n=await t.text();let a=null;try{a=n?JSON.parse(n):null}catch{a=null}if(t.ok&&a&&a.success&&a.data){const r=a.data,i=r.backupData||r.appState||null;if(i&&this.importAppState(i),r.userId&&localStorage.setItem(ee.USER_ID,r.userId),r.nickname&&(localStorage.setItem(ee.NICKNAME,r.nickname),p&&typeof p.setUserProfile=="function")){const d=p.getUserProfile()||{};p.setUserProfile({...d,name:r.nickname})}r.target&&localStorage.setItem(ee.TARGET,r.target);const s=r.avatarUrl||r.avatar||r.avatar_url||(i==null?void 0:i.planex_user_avatar)||null;if(s){if(localStorage.setItem("planex_user_avatar",s),p&&typeof p.setUserProfile=="function"){const d=p.getUserProfile()||{};p.setUserProfile({...d,avatar:s,avatar_url:s,photo:s,photoUrl:s})}try{const d=JSON.parse(localStorage.getItem("planex_auth_user")||"{}");d&&typeof d=="object"&&(d.avatar_url=s,d.photo_url=s,d.avatar=s,localStorage.setItem("planex_auth_user",JSON.stringify(d)),localStorage.setItem("planex_user_account",JSON.stringify(d)))}catch{}typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("profileUpdated"))}return localStorage.setItem(ee.SYNC_CODE,e),{success:!0,data:r,message:`🎉 تمام اطلاعات، روتین‌ها و ساعات مطالعه با موفقیت از کد «${e}» بازیابی و اعمال شد!`}}return{success:!1,message:(a==null?void 0:a.message)||`کد «${e}» نامعتبر است یا دیتایی برای آن ذخیره نشده است.`}}catch(t){return console.error("[Sync] Sync code lookup failed:",t),{success:!1,message:"خطا در ارتباط با سرور ابری هنگام بازیابی کد: "+t.message}}},getOrCreateUserId(){let o=localStorage.getItem(ee.USER_ID);if(!o){const e=localStorage.getItem("planex_device_sync_id");e?o=e:o="usr_"+Date.now().toString(36)+"_"+Math.random().toString(36).substring(2,7),localStorage.setItem(ee.USER_ID,o)}return o},getUserProfile(){var d,l,c;const o=p.getUserProfile()||{};let e=null;try{e=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}")}catch{}try{const g=(c=(l=(d=window.Telegram)==null?void 0:d.WebApp)==null?void 0:l.initDataUnsafe)==null?void 0:c.user;if(g){const b=[g.first_name,g.last_name].filter(Boolean).join(" ").trim(),f=g.photo_url||"",k=localStorage.getItem(ee.NICKNAME)||e&&(e.full_name||e.name)||o.name||"";if((!k||k==="دانش‌آموز پرتلاش"||k==="کاربر"||k==="X"||k==="داوطلب پرتلاش")&&b&&(localStorage.setItem(ee.NICKNAME,b),p&&typeof p.setUserProfile=="function")){const x=p.getUserProfile()||{};p.setUserProfile({...x,name:b})}f&&(!e||!e.avatar_url)&&(e=e||{},e.avatar_url=f,e.photo_url=f,localStorage.setItem("planex_auth_user",JSON.stringify(e)))}}catch{}const n=localStorage.getItem("planex_user_avatar")||""||e&&(e.avatar_url||e.avatarUrl||e.photo_url||e.avatar)||o.avatar||o.avatar_url||o.photo||o.photoUrl||"",a=localStorage.getItem(ee.NICKNAME)||e&&(e.full_name||e.name)||o.name||"داوطلب پرتلاش",r=localStorage.getItem(ee.TARGET)||o.targetField||o.major||"کنکور سراسری ۱۴۰۶",i=e&&(e.id||e.telegram_id||e.uid)||this.getOrCreateUserId(),s=e&&(e.phone||e.phone_number)||o.phone||"";return{nickname:a,target:r,userId:i,id:i,telegram_id:(e==null?void 0:e.telegram_id)||i,uid:i,user_id:i,phone:s,phone_number:s,syncCode:this.getOrCreateSyncCode(),avatar_url:n,avatarUrl:n,avatar:n,photo_url:n,photoUrl:n}},saveUserProfile(o,e,t){if(o&&localStorage.setItem(ee.NICKNAME,o.trim()),e!==void 0&&localStorage.setItem(ee.TARGET,e.trim()),t){try{localStorage.setItem("planex_user_avatar",t)}catch{}try{const n=localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account");let a=n?JSON.parse(n):{};a.avatar_url=t,a.photo_url=t,a.avatar=t,localStorage.setItem("planex_auth_user",JSON.stringify(a)),localStorage.setItem("planex_user_account",JSON.stringify(a))}catch{}try{const n=localStorage.getItem("planex_user_profile");let a=n?JSON.parse(n):{};a.avatar=t,a.avatar_url=t,a.photo=t,a.photoUrl=t,o&&(a.name=o),e&&(a.targetField=e,a.major=e),localStorage.setItem("planex_user_profile",JSON.stringify(a))}catch{}}},getUserGroups(){return p&&typeof p.getUserGroups=="function"?p.getUserGroups():[]},setUserGroups(o){return p&&typeof p.setUserGroups=="function"?p.setUserGroups(o):[]},getActiveGroupCode(){return p&&typeof p.getActiveGroupCode=="function"?p.getActiveGroupCode():null},setActiveGroupCode(o){return p&&typeof p.setActiveGroupCode=="function"?p.setActiveGroupCode(o):null},getActiveGroup(){return p&&typeof p.getActiveGroup=="function"?p.getActiveGroup():null},getUserGroupData(){return this.getActiveGroup()},setUserGroupData(o){return o&&p&&typeof p.addUserGroup=="function"?p.addUserGroup(o):null},async deleteGroup(o=null){const e=String(o||this.getActiveGroupCode()||"").trim().toUpperCase();if(!e)return{success:!1,message:"کد گروه مشخص نشده است."};const t=this.getUserProfile();try{await fetch(`${ue}/api/rooms/delete.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:e,user_id:t.userId,phone:t.phone,creator_id:t.userId})})}catch(n){console.warn("[LeaderboardService] Backend delete room warning:",n)}return localStorage.removeItem(`${ee.GROUP_CACHE_PREFIX}${e}`),localStorage.removeItem(`${ee.GROUP_ROSTER_PREFIX}${e}`),localStorage.removeItem(`squad_pending_${e}`),p&&typeof p.removeUserGroup=="function"&&p.removeUserGroup(e),this.getActiveGroupCode()===e&&(this.setActiveGroupCode(null),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data")),await this.fetchMyRooms().catch(()=>{}),{success:!0,message:`گروه «${e}» با موفقیت به طور کامل حذف شد.`}},async fetchUserGroups(o=!0){const e=this.getUserProfile();try{let t=null;try{t=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}const n=e.phone||(t==null?void 0:t.phone)||(t==null?void 0:t.phone_number)||(()=>{try{const d=JSON.parse(localStorage.getItem("planex_user_profile")||"{}");return d.phone||d.mobile||""}catch{return""}})()||"",a=e.userId||(t==null?void 0:t.id)||(t==null?void 0:t.telegram_id)||(t==null?void 0:t.uid)||"",r=new URLSearchParams;a&&r.set("user_id",a),n&&r.set("phone",n),o&&(r.set("force","1"),r.set("_t",Date.now().toString()));const s=await(await fetch(`${ue}/api/rooms/my-rooms.php?${r.toString()}`,{cache:"no-store",headers:{"Cache-Control":"no-cache"}})).json();if(s&&s.success&&Array.isArray(s.rooms))if(s.rooms.length>0){p&&typeof p.setUserGroups=="function"&&p.setUserGroups(s.rooms);try{localStorage.setItem("planex_my_groups",JSON.stringify(s.rooms)),localStorage.setItem("planex_my_rooms",JSON.stringify(s.rooms))}catch{}const d=this.getActiveGroupCode();if((!d||!s.rooms.some(l=>(l.code||l.groupCode)===d))&&s.rooms.length>0){const l=s.rooms[0].code||s.rooms[0].groupCode;l&&this.setActiveGroupCode(l)}return window.dispatchEvent(new CustomEvent("groups-updated",{detail:s.rooms})),window.dispatchEvent(new CustomEvent("groups-changed",{detail:s.rooms})),s.rooms}else{const d=this.getUserGroups();return d&&d.length>0?(console.warn("[LeaderboardService] fetchUserGroups received 0 rooms from server, preserving",d.length,"local groups."),d):(p&&typeof p.setUserGroups=="function"&&p.setUserGroups([]),window.dispatchEvent(new CustomEvent("groups-updated",{detail:[]})),window.dispatchEvent(new CustomEvent("groups-changed",{detail:[]})),[])}}catch(t){console.warn("[LeaderboardService] fetchUserGroups error:",t)}return this.getUserGroups()},async fetchMyRooms(o=!0){return this.fetchUserGroups(o)},async fetchPublicRooms(){try{const e=await(await fetch(`${ue}/api/rooms/public.php`)).json();if(e&&e.success&&Array.isArray(e.rooms))return e.rooms}catch(o){console.warn("[LeaderboardService] fetchPublicRooms error:",o)}return[]},async fetchPendingRequests(o=null){const e=o||this.getActiveGroupCode();if(!e)return[];try{const t=this.getUserProfile(),a=await(await fetch(`${ue}/api/rooms/requests.php?room_code=${encodeURIComponent(e)}&user_id=${encodeURIComponent(t.userId)}`)).json();if(a&&a.success&&Array.isArray(a.requests))return a.requests}catch(t){console.warn("[LeaderboardService] fetchPendingRequests error:",t)}return[]},async handleMembershipRequest(o,e,t="approve"){const n=o||this.getActiveGroupCode(),a=this.getUserProfile();try{return await(await fetch(`${ue}/api/rooms/requests.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:n,action:t,target_user_id:e,admin_id:a.userId,phone:a.phone})})).json()}catch(r){return console.error("[LeaderboardService] handleMembershipRequest error:",r),{success:!1,message:r.message}}},async approveMember(o,e){const t=String(o||this.getActiveGroupCode()||"").trim().toUpperCase();if(!t||!e)return{success:!1,message:"شناسه گروه یا کاربر نامعتبر است."};const n=await this.handleMembershipRequest(t,e,"approve"),a=this.getGroupRoster(t),r=a.findIndex(i=>i.userId===e||i.id===e||i.phone===e);if(r>=0)a[r].status="approved";else{const s=(window.groupPendingRequests||[]).find(d=>(d.userId||d.user_id||d.phone)===e)||{};a.push({userId:e,nickname:s.nickname||s.name||"کاربر جدید",target:s.target||"کنکور سراسری",joinedAt:Date.now(),isOwner:!1,status:"approved"})}return this.saveGroupRoster(t,a),Array.isArray(window.groupPendingRequests)&&(window.groupPendingRequests=window.groupPendingRequests.filter(i=>(i.userId||i.user_id||i.phone)!==e)),this.fetchLeaderboard(null,!0,t).catch(()=>{}),{success:!0,message:n&&n.message?n.message:"کاربر با موفقیت به گروه اضافه شد"}},async rejectMember(o,e){const t=String(o||this.getActiveGroupCode()||"").trim().toUpperCase();if(!t||!e)return{success:!1,message:"شناسه گروه یا کاربر نامعتبر است."};const n=await this.handleMembershipRequest(t,e,"reject"),r=this.getGroupRoster(t).filter(i=>i.userId!==e&&i.id!==e&&i.phone!==e);return this.saveGroupRoster(t,r),Array.isArray(window.groupPendingRequests)&&(window.groupPendingRequests=window.groupPendingRequests.filter(i=>(i.userId||i.user_id||i.phone)!==e)),{success:!0,message:n&&n.message?n.message:"درخواست عضویت رد شد"}},async toggleGroupPrivacy(o,e){const t=o||this.getActiveGroupCode();try{const a=await(await fetch(`${ue}/api/rooms/toggle-type.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:t,is_private:e?1:0})})).json();if(a&&a.success){const r=this.getUserGroups(),i=r.find(s=>(s.code||s.groupCode)===t);return i&&(i.is_private=e?1:0,i.type=e?"private":"public",p&&typeof p.setUserGroups=="function"&&p.setUserGroups(r)),a}return a}catch(n){console.error("[LeaderboardService] toggleGroupPrivacy error:",n)}return{success:!1,message:"خطا در برقراری ارتباط با سرور"}},generateGroupCode(){return`PLX-${Math.floor(1e3+Math.random()*9e3)}`},async createPrivateGroup(o,e=!1,t={}){const n=this.generateGroupCode(),a=this.getUserProfile(),r=o&&o.trim()?o.trim():`گروه ${n}`,i={code:n,groupCode:n,name:r,groupName:r,joinedAt:Date.now(),isOwner:!0,is_private:e?1:0,type:e?"private":"public",status:"approved",userId:a.userId,category:t.category||"general",capacity:t.capacity||600,announcement:t.announcement||""};p&&typeof p.addUserGroup=="function"&&p.addUserGroup(i);try{await fetch(`${ue}/api/rooms/create.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:n,title:r,phone:a.phone,creator_phone:a.phone,creator_id:a.userId,admin_id:a.userId,user_id:a.userId,is_private:e?1:0,type:e?"private":"public",user:{name:a.nickname,avatar_url:a.avatarUrl},category:t.category||"general",announcement:t.announcement||""})})}catch(d){console.warn("[LeaderboardService] Backend create room call warning:",d)}const s=[{userId:a.userId,nickname:a.nickname,target:a.target,joinedAt:Date.now(),isOwner:!0,status:"approved"}];return this.saveGroupRoster(n,s),await this.syncUserScore(!0,n),{success:!0,groupCode:n,groupName:r,groupData:i}},async createGroup(o,e=!1,t={}){return this.createPrivateGroup(o,e,t)},isUserVerified(){var a,r,i;let o=null;try{o=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}const e=this.getUserProfile(),t=(i=(r=(a=window.Telegram)==null?void 0:a.WebApp)==null?void 0:r.initDataUnsafe)==null?void 0:i.user;return!!(t&&t.id||o&&(o.id||o.telegram_id||o.phone||o.phone_number)||e&&(e.phone||e.phone_number||e.telegram_id||e.userId&&!e.userId.startsWith("usr_"))||localStorage.getItem("planex_user_phone"))},async joinPrivateGroup(o,e=null){if(!o||!o.trim())return{success:!1,message:"لطفاً کد ۶ رقمی یا شماره گروه را وارد نمایید."};const t=String(o).trim().toUpperCase().replace(/[^A-Z0-9-]/g,"");if(t.length<4)return{success:!1,message:"فرمت کد گروه نامعتبر است (مثال: PLX-4829)."};const n=this.getUserProfile();if(!this.isUserVerified())return typeof window.openLoginModal=="function"?window.openLoginModal():window.appState&&(window.appState.activeModal="login",window.renderApp&&window.renderApp()),{success:!1,requiresVerification:!0,message:"برای پیوستن به گروه، لطفاً ابتدا حساب کاربری خود را در ربات تلگرام یا اپلیکیشن تایید نمایید."};let a=null;try{a=await(await fetch(`${ue}/api/rooms/join.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:t,phone:n.phone,user_phone:n.phone,user_id:n.userId,nickname:n.nickname,user:{name:n.nickname,avatar_url:n.avatarUrl},bypass_pending:!0,auto_approve:!0,action:"join"})})).json().catch(()=>null)}catch(c){console.warn("[LeaderboardService] Backend join call warning:",c)}const r=a&&a.room?a.room:null,i=e||(r?r.title:`گروه ${t}`),s={code:t,groupCode:t,name:i,groupName:i,joinedAt:Date.now(),isOwner:!1,status:"approved",is_private:r&&r.is_private?1:0,userId:n.userId};p&&typeof p.addUserGroup=="function"&&p.addUserGroup(s);const d=this.getGroupRoster(t),l=d.findIndex(c=>c.userId===n.userId||c.id===n.userId);return l<0?d.push({userId:n.userId,nickname:n.nickname,target:n.target,joinedAt:Date.now(),isOwner:!1,status:"approved"}):(d[l].status="approved",d[l].nickname=n.nickname||d[l].nickname,d[l].target=n.target||d[l].target),this.saveGroupRoster(t,d),this.setActiveGroupCode(t),await this.syncUserScore(!0,t).catch(()=>{}),await this.fetchLeaderboard(null,!0,t).catch(()=>{}),{success:!0,pending:!1,groupCode:t,groupName:i,groupData:s,message:"با موفقیت به گروه پیوستید! 🎉"}},async joinGroupByCode(o,e=null){return this.joinPrivateGroup(o,e)},async joinGroupByLink(o){let e=o;if(e&&e.includes("group=")){const t=e.match(/group=([^&]+)/);t&&(e=t[1])}return this.joinPrivateGroup(e)},getGroupRoster(o){if(!o)return[];try{const e=localStorage.getItem(`${ee.GROUP_ROSTER_PREFIX}${o}`);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}},saveGroupRoster(o,e){if(!(!o||!Array.isArray(e)))try{localStorage.setItem(`${ee.GROUP_ROSTER_PREFIX}${o}`,JSON.stringify(e))}catch{}},getTodayDateStr(){try{return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Tehran",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date)}catch{return new Date().toISOString().split("T")[0]}},getTodayStats(){const o=p.getTodayJalaliString(),e=p.getStudyMinutesByDate(o),t=+(e/60).toFixed(2),n=p.getDailyTestCount(o),a=typeof p.getTodayStudiedSubjects=="function"?p.getTodayStudiedSubjects(o):[],r=this.getTodayDateStr(),i=o;return{studyMinutes:e,studyHours:t,testCount:n,subjects:Array.isArray(a)?a:[],gregorianDate:r,jalaliDateStr:i}},getPersianWeekWindow(o=new Date){const e=new Date(o),t=(e.getDay()+1)%7,n=new Date(e.getFullYear(),e.getMonth(),e.getDate()-t,0,0,0,0),a=new Date(n.getFullYear(),n.getMonth(),n.getDate()+6,23,59,59,999),r=[],i=[];for(let s=0;s<7;s++){const d=new Date(n.getFullYear(),n.getMonth(),n.getDate()+s),l=d.getFullYear(),c=String(d.getMonth()+1).padStart(2,"0"),g=String(d.getDate()).padStart(2,"0");if(i.push(`${l}-${c}-${g}`),p&&typeof p.gregorianToJalali=="function"){const[b,f,k]=p.gregorianToJalali(l,d.getMonth()+1,d.getDate());r.push(`${b}/${String(f).padStart(2,"0")}/${String(k).padStart(2,"0")}`)}}return{satDate:n,friDate:a,startTimestamp:n.getTime(),endTimestamp:a.getTime(),satDateStr:`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`,weekJalaliDates:r,weekGregorianDates:i}},getWeeklyStats(){const o=this.getPersianWeekWindow();let e=0,t=0;const n=new Set;let a=[];try{const i=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),s=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),d=new Map;Array.isArray(s)&&s.forEach(l=>{l&&(l.id||l.timestamp)&&d.set(l.id||`ts_${l.timestamp}_${l.duration}`,l)}),Array.isArray(i)&&i.forEach(l=>{l&&(l.id||l.timestamp)&&d.set(l.id||`ts_${l.timestamp}_${l.duration}`,l)}),a=Array.from(d.values())}catch{a=[]}a.forEach(i=>{if(!i||typeof i!="object")return;const s=Number(i.timestamp||i.createdAt||i.endTime||0),d=p&&typeof p.normalizeJalaliDate=="function"?p.normalizeJalaliDate(i.dateStr||i.date):i.dateStr||i.date,l=s>=o.startTimestamp&&s<=o.endTimestamp,c=d&&o.weekJalaliDates.includes(d);if((l||c)&&!(i.type==="non-study"||i.type==="non_study"||i.type==="break"||i.activityType==="non_study"||i.activityType==="non-study"||i.activityType==="break"||i.isStudy===!1||i.is_study_time===!1||i.counts_for_study===!1||i.isBreak===!0||i.is_break===!0||i.timerType==="break"||i.timerType===2)){e+=Math.max(0,Math.ceil(Number(i.duration!==void 0?i.duration:i.minutes)||0)),t+=Math.max(0,Number(i.testCount!==void 0?i.testCount:i.tests)||0);const b=i.subject&&i.subject.trim()!=="مطالعه متمرکز"?i.subject.trim():i.categoryTitle||i.category;b&&b.trim()&&n.add(b.trim())}});try{const i=JSON.parse(localStorage.getItem("planex_recorded_timer")||"{}");let s=0,d=0;o.weekJalaliDates.forEach(l=>{i[l]&&(s+=Number(i[l].minutes)||0,d+=Number(i[l].tests)||0)}),e=Math.max(e,s),t=Math.max(t,d)}catch{}if(p&&typeof p.getDailyStats=="function"){let i=0,s=0;o.weekJalaliDates.forEach(d=>{try{const l=p.getDailyStats(d);l&&(i+=Number(l.studyMinutes)||0,s+=Number(l.totalTests)||0)}catch{}}),e=Math.max(e,i),t=Math.max(t,s)}const r=this.getTodayStats();return e=Math.max(e,Number(r.studyMinutes)||0),t=Math.max(t,Number(r.testCount)||0),{studyMinutes:e,studyHours:+(e/60).toFixed(2),testCount:t,subjects:Array.from(n),weekWindow:o}},calculateMemberPeriodStats(o,e="week",t=null){if(!o)return{totalMinutes:0,totalTests:0};const n=t||this.getPersianWeekWindow(),a=!!(o.isUser||o.isCurrentUser||this.getUserProfile()&&o.userId===this.getUserProfile().userId),r=Number(o.studyMinutes||o.study_minutes||0),i=Number(o.testCount||o.test_count||0);if(e==="today"){let u=r,x=i;if(a){const y=this.getTodayStats();u=Math.max(u,Number((y==null?void 0:y.studyMinutes)||0)),x=Math.max(x,Number((y==null?void 0:y.testCount)||0))}return{totalMinutes:Math.round(u),totalTests:Math.round(x)}}let s=0,d=0;const l=u=>{if(!u||typeof u!="object")return;const x=Number(u.duration!==void 0?u.duration:u.minutes!==void 0?u.minutes:u.studyMinutes||u.study_minutes||0)||0,y=Number(u.testCount!==void 0?u.testCount:u.tests!==void 0?u.tests:u.test_count||0)||0;if(!(u.type==="non-study"||u.type==="non_study"||u.type==="break"||u.activityType==="non_study"||u.activityType==="non-study"||u.activityType==="break"||u.isStudy===!1||u.is_study_time===!1||u.counts_for_study===!1||u.isBreak===!0||u.is_break===!0||u.timerType==="break"||u.timerType===2)){if(e==="all")s+=Math.max(0,x),d+=Math.max(0,y);else if(e==="week"){const _=Number(u.timestamp||u.createdAt||u.endTime||0),m=String(u.dateStr||u.date||u.jalaliDate||"").trim(),w=m.replace(/\//g,"-"),T=_>=n.startTimestamp&&_<=n.endTimestamp,A=m&&(n.weekJalaliDates.includes(m)||n.weekJalaliDates.map(z=>z.replace(/\//g,"-")).includes(w)||n.weekGregorianDates.includes(m));(T||A||!_&&!m)&&(s+=Math.max(0,x),d+=Math.max(0,y))}}};e==="week"&&Array.isArray(o.weeklyHistory)&&o.weeklyHistory.forEach(l),Array.isArray(o.history)?o.history.forEach(l):o.history&&typeof o.history=="object"&&Object.entries(o.history).forEach(([u,x])=>{typeof x=="number"?l({date:u,duration:x,testCount:0}):x&&typeof x=="object"&&l({date:u,...x})});const c=o.sessions||o.dailyLogs||o.logs||o.dailyHistory;Array.isArray(c)&&c.forEach(l);let g=Math.max(s,Number(o.weeklyStudyMinutes!==void 0?o.weeklyStudyMinutes:o.weekly_study_minutes||o.weeklyMinutes||0),r),b=Math.max(d,Number(o.weeklyTestCount!==void 0?o.weeklyTestCount:o.weekly_test_count||o.weeklyTests||0),i),f=Math.max(s,Number(o.allTimeStudyMinutes!==void 0?o.allTimeStudyMinutes:o.alltime_study_minutes||o.totalStudyMinutes||o.totalMinutes||0),g,r),k=Math.max(d,Number(o.allTimeTestCount!==void 0?o.allTimeTestCount:o.alltime_test_count||o.totalTestCount||o.totalTests||0),b,i);if(a){const u=this.getWeeklyStats();if(u&&(g=Math.max(g,Number(u.studyMinutes||0)),b=Math.max(b,Number(u.testCount||0))),p&&typeof p.getStudyStatsByPeriod=="function"){const x=p.getStudyStatsByPeriod("all");x&&(f=Math.max(f,Number(x.studyMinutes||0),g),k=Math.max(k,Number(x.testCount||0),b))}}return e==="week"?{totalMinutes:Math.round(g),totalTests:Math.round(b)}:{totalMinutes:Math.round(f),totalTests:Math.round(k)}},aggregateAndRankMembers(o,e="today"){if(!Array.isArray(o))return[];const t=this.getPersianWeekWindow(),n=o.map(a=>{const r=this.calculateMemberPeriodStats(a,e,t),i=r.totalMinutes,s=r.totalTests,d=i*60+s*10;return{...a,totalMinutes:i,totalTests:s,displayStudyMins:i,displayTestCount:s,studyMinutes:e==="today"?i:a.studyMinutes||a.study_minutes||0,testCount:e==="today"?s:a.testCount||a.test_count||0,weeklyStudyMinutes:e==="week"?i:a.weeklyStudyMinutes||a.weekly_study_minutes||i,weeklyTestCount:e==="week"?s:a.weeklyTestCount||a.weekly_test_count||s,allTimeStudyMinutes:e==="all"?i:a.allTimeStudyMinutes||a.alltime_study_minutes||i,allTimeTestCount:e==="all"?s:a.allTimeTestCount||a.alltime_test_count||s,score:d}});return n.sort((a,r)=>r.score!==a.score?r.score-a.score:r.totalMinutes!==a.totalMinutes?r.totalMinutes-a.totalMinutes:r.totalTests-a.totalTests),n.map((a,r)=>({...a,rank:r+1}))},canAutoSync(){return!1},getSyncStatus(){const o=parseInt(localStorage.getItem(ee.LAST_SYNC)||"0");if(!o)return{hasSyncedBefore:!1,lastSyncText:"هنوز همگام‌سازی نشده"};const e=Date.now()-o,t=Math.floor(e/(60*1e3)),n=Math.floor(t/60);let a="";return t<1?a="لحظاتی پیش":t<60?a=`${t} دقیقه پیش`:a=`${n} ساعت و ${t%60} دقیقه پیش`,{hasSyncedBefore:!0,lastSyncTimestamp:o,lastSyncText:a}},async syncUserScore(o=!1,e=null){const t=this.getUserGroups();if(t.length===0&&!e)return{success:!1,noGroup:!0,message:"شما در هیچ گروه رقابتی عضو نیستید. لطفاً ابتدا یک گروه بسازید یا با کد وارد شوید."};const n=e?t.filter(i=>i.code===String(e).trim().toUpperCase()):t;n.length===0&&e&&n.push({code:String(e).trim().toUpperCase(),name:`گروه ${e}`});let a=null;const r=this.getActiveGroupCode();for(const i of n){const s=await this.syncSingleGroupScore(i);(!a||i.code===r)&&(a=s)}return a||{success:!0,message:"کارنامه در گروه‌ها ثبت شد."}},async setStudyStatus(o,e="",t=!1,n="study"){const a=this.getUserGroups(),r=this.getActiveGroup(),i=this.getUserProfile(),s=Date.now(),d=String(e||"").trim(),l=!!o&&n==="study";let c="";l?c="🟢 در حال مطالعه":n==="break"?c="☕ در حال استراحت":(n==="non-study"||n==="non_study")&&(c="🧘 فعالیت غیردرسی");const g=Array.isArray(a)&&a.length>0?a:r?[r]:[];if(g.length===0)return{success:!1,noGroup:!0};if(g.forEach(f=>{const k=String(f.code||f.groupCode).trim().toUpperCase();if(!k)return;const u=this.getGroupRoster(k),x=u.findIndex(y=>y.userId===i.userId);x>=0&&(u[x].isStudying=l,u[x].statusType=n,u[x].statusLabel=c,u[x].studySubject=l?d:"",u[x].subject=l?d:"",u[x].lastHeartbeat=l?s:0,this.saveGroupRoster(k,u));try{const y=localStorage.getItem(`${ee.GROUP_CACHE_PREFIX}${k}`);if(y){let h=JSON.parse(y);if(Array.isArray(h)){const _=h.findIndex(m=>m.userId===i.userId);_>=0&&(h[_].isStudying=l,h[_].statusType=n,h[_].statusLabel=c,h[_].studySubject=l?d:"",h[_].subject=l?d:"",h[_].lastHeartbeat=l?s:0),localStorage.setItem(`${ee.GROUP_CACHE_PREFIX}${k}`,JSON.stringify(h))}}}catch{}}),!l)try{for(let f=0;f<localStorage.length;f++){const k=localStorage.key(f);if(k&&(k.startsWith(ee.GROUP_ROSTER_PREFIX)||k.startsWith(ee.GROUP_CACHE_PREFIX))){const u=localStorage.getItem(k);if(u&&u.includes(i.userId)){const x=JSON.parse(u);if(Array.isArray(x)){let y=!1;x.forEach(h=>{h.userId===i.userId&&h.isStudying&&(h.isStudying=!1,h.statusType="stopped",h.statusLabel="",h.studySubject="",h.subject="",h.lastHeartbeat=0,y=!0)}),y&&localStorage.setItem(k,JSON.stringify(x))}}}}}catch{}const b=g.map(async f=>{const k=String(f.code||f.groupCode).trim().toUpperCase();if(!k)return;const u=i.avatar_url||i.avatarUrl||i.avatar||i.photo_url||"",x={action:"set_status",groupCode:k,userId:i.userId,nickname:i.nickname,name:i.nickname,target:i.target,avatar_url:u,avatarUrl:u,avatar:u,photo_url:u,isStudying:l,statusType:n,statusLabel:c,subject:l?d:"",studySubject:l?d:"",lastHeartbeat:l?s:0},y=[`${ue}/api/leaderboard.php`,`${ue}/api/v1/leaderboard.php`];for(const h of y)try{const _=await fetch(h,{method:"POST",headers:{"Content-Type":"application/json","Cache-Control":"no-cache",Pragma:"no-cache"},body:JSON.stringify(x),keepalive:t});if(_.ok)return await _.json().catch(()=>({success:!0}))}catch{}});try{return await Promise.allSettled(b),{success:!0,isStudying:l,statusType:n,statusLabel:c,subject:l?d:"",lastHeartbeat:l?s:0}}catch{return{success:!1,offline:!0}}},startStudyHeartbeat(o="",e="study"){this._currentStudySubject=o||"",this._studyHeartbeatInterval&&(typeof this._studyHeartbeatInterval!="boolean"&&clearInterval(this._studyHeartbeatInterval),this._studyHeartbeatInterval=null),this._studyHeartbeatInterval=!0;const t=e==="study";this.setStudyStatus(t,this._currentStudySubject,!1,e).catch(()=>{})},stopStudyHeartbeat(){this._studyHeartbeatInterval&&(typeof this._studyHeartbeatInterval!="boolean"&&clearInterval(this._studyHeartbeatInterval),this._studyHeartbeatInterval=null),this._currentStudySubject="",this.setStudyStatus(!1,"",!1,"stopped").catch(()=>{})},async syncSingleGroupScore(o){if(!o)return{success:!1,noGroup:!0};const e=this.getUserProfile(),t=this.getTodayStats(),n=this.getWeeklyStats(),a=p&&typeof p.getStudyStatsByPeriod=="function"?p.getStudyStatsByPeriod("all"):t,r=String(o.code||o.groupCode||o.room_code||o.id||"").trim().toUpperCase();if(!r||r==="UNDEFINED"||r==="NULL"||r==="0")return{success:!1,noGroup:!0,message:"کد گروه معتبر نیست."};const i=String(o.name||o.groupName||`گروه ${r}`).trim(),s=this.getGroupRoster(r).find(k=>k.userId===e.userId)||{},d=this.isCurrentStudyingActive(),l=d&&(this._currentStudySubject||s.studySubject)||"",c=e.avatar_url||e.avatarUrl||e.avatar||e.photo_url||"",g={action:"sync",groupCode:r,groupName:i,userId:e.userId,nickname:e.nickname,name:e.nickname,target:e.target,avatar_url:c,avatarUrl:c,avatar:c,photo_url:c,syncCode:e.syncCode||this.getOrCreateSyncCode(),studyMinutes:t.studyMinutes,testCount:t.testCount,weeklyStudyMinutes:Math.max(Number(n.studyMinutes||0),Number(t.studyMinutes||0)),weeklyTestCount:Math.max(Number(n.testCount||0),Number(t.testCount||0)),allTimeStudyMinutes:Math.max(Number(a.studyMinutes||0),Number(n.studyMinutes||0),Number(t.studyMinutes||0)),allTimeTestCount:Math.max(Number(a.testCount||0),Number(n.testCount||0),Number(t.testCount||0)),subjects:t.subjects||[],isStudying:d,subject:l,studySubject:l,lastHeartbeat:d?Date.now():0,date:t.gregorianDate,updatedAt:Date.now()},b=[`${ue}/api/leaderboard.php`,`${ue}/api/v1/leaderboard.php`];for(const k of b)try{const u=await fetch(k,{method:"POST",headers:{"Content-Type":"application/json","Cache-Control":"no-cache",Pragma:"no-cache"},body:JSON.stringify(g)}),x=await u.text();let y=null;try{y=x?JSON.parse(x):null}catch{y=null}if(u.ok&&y&&y.success!==!1){localStorage.setItem(ee.LAST_SYNC,String(Date.now()));const h=y.list||y.leaderboard||[],_=Array.isArray(h)?h.map(ut):[];return _.length>0?(localStorage.setItem(`${ee.GROUP_CACHE_PREFIX}${r}`,JSON.stringify(_)),localStorage.setItem(ee.CACHE_DATE,t.gregorianDate)):this.updateLocalGroupCacheWithUser(r,g),Array.isArray(y.roster)&&y.roster.length>0&&this.saveGroupRoster(r,y.roster),{success:!0,serverConfirmed:!0,endpoint:k,rank:y.rank,groupCode:r,groupName:y.groupName||i,leaderboard:_,list:_,entry:g,message:y.message||"کارنامه با موفقیت در گروه اختصاصی ثبت شد."}}}catch(u){console.error("[Leaderboard] Sync failed for group",r,u)}this.updateLocalGroupCacheWithUser(r,g);const f=this.getCachedLeaderboard(t.gregorianDate,r);return{success:!1,serverConfirmed:!1,offline:!0,entry:g,groupCode:r,groupName:i,leaderboard:f.leaderboard,message:"ثبت محلی در گروه انجام شد (سرور موقتاً در دسترس نیست)."}},async syncUserProgress(){return this.syncUserScore()},async fetchLeaderboard(o=null,e=!1,t=null){const n=o||this.getTodayDateStr(),a=t||this.getActiveGroupCode(),i=this.getUserGroups().find(s=>s.code===a)||this.getActiveGroup();if(!a)return{success:!0,noGroup:!0,fromCache:!1,leaderboard:[],list:[],date:n};try{const s=e?`&_t=${Date.now()}`:"";let d=await fetch(`${ue}/api/leaderboard.php?groupCode=${a}&date=${n}${s}`,{cache:"no-store",headers:{"Cache-Control":"no-cache",Pragma:"no-cache"}});d.ok||(d=await fetch(`${ue}/api/v1/leaderboard.php?groupCode=${a}&date=${n}${s}`,{cache:"no-store",headers:{"Cache-Control":"no-cache",Pragma:"no-cache"}}));const l=await d.text();let c=null;try{c=l?JSON.parse(l):null}catch{c=null}if(d.ok&&c){const g=c.list||c.leaderboard;if(c.success&&Array.isArray(g)){const b=this.isCurrentStudyingActive(),f=g.map(k=>{const u=ut(k);return u.userId===profile.userId&&(u.isStudying=b,b||(u.studySubject="",u.subject="",u.lastHeartbeat=0)),u});if(localStorage.setItem(`${ee.GROUP_CACHE_PREFIX}${a}`,JSON.stringify(f)),localStorage.setItem(ee.CACHE_DATE,n),Array.isArray(c.roster)){const k=c.roster.map(u=>u.userId===profile.userId?{...u,isStudying:b,studySubject:b&&u.studySubject||"",subject:b&&u.subject||"",lastHeartbeat:b?u.lastHeartbeat||Date.now():0}:u);this.saveGroupRoster(a,k)}return i&&(i.members=f,this.setUserGroupData({...i,members:f,...c.groupName?{name:c.groupName,groupName:c.groupName}:{}})),{success:!0,fromCache:!1,leaderboard:f,list:f,groupCode:a,groupName:c.groupName||(i?i.name||i.groupName:`گروه ${a}`),groupData:this.getUserGroupData()||i,date:n}}}throw new Error("Non-success leaderboard response")}catch(s){return console.warn("Leaderboard fetch failed, falling back to local group cache:",s),this.getCachedLeaderboard(n,a)}},getCachedLeaderboard(o=null,e=null){const t=o||this.getTodayDateStr(),n=e||this.getActiveGroupCode(),r=this.getUserGroups().find(m=>m.code===n)||this.getActiveGroup();if(!n)return{success:!0,noGroup:!0,fromCache:!0,offline:!0,leaderboard:[],list:[],date:t};const i=this.getGroupRoster(n),s=localStorage.getItem(`${ee.GROUP_CACHE_PREFIX}${n}`);let d=[];if(s)try{d=JSON.parse(s)}catch{d=[]}Array.isArray(d)||(d=[]);const l=this.getUserProfile(),c=this.getTodayStats(),g=new Map;i.forEach(m=>{const w=this.calculateMemberPeriodStats(m,"today"),T=this.calculateMemberPeriodStats(m,"week"),A=this.calculateMemberPeriodStats(m,"all");g.set(m.userId,{userId:m.userId,nickname:m.nickname||"داوطلب",target:m.target||"کنکور سراسری",avatarUrl:m.avatarUrl||"",studyMinutes:Math.max(Number(m.studyMinutes||0),w.totalMinutes),testCount:Math.max(Number(m.testCount||0),w.totalTests),weeklyStudyMinutes:Math.max(Number(m.weeklyStudyMinutes||0),T.totalMinutes),weeklyTestCount:Math.max(Number(m.weeklyTestCount||0),T.totalTests),allTimeStudyMinutes:Math.max(Number(m.allTimeStudyMinutes||0),A.totalMinutes),allTimeTestCount:Math.max(Number(m.allTimeTestCount||0),A.totalTests),subjects:m.subjects||[],dailyLogs:m.dailyLogs||m.logs||m.history||[],history:m.history||[],isOwner:!!m.isOwner,joinedAt:m.joinedAt||Date.now(),date:t,isStudying:!!m.isStudying,studySubject:m.studySubject||m.subject||"",subject:m.studySubject||m.subject||"",lastHeartbeat:m.lastHeartbeat||0,updatedAt:m.joinedAt||Date.now()})}),d.forEach(m=>{if(m&&m.userId){const w=ut(m),T=g.get(w.userId)||{},A=this.calculateMemberPeriodStats(w,"today"),z=this.calculateMemberPeriodStats(w,"week"),B=this.calculateMemberPeriodStats(w,"all");g.set(w.userId,{...T,...w,studyMinutes:Math.max(Number(T.studyMinutes||0),Number(w.studyMinutes||0),A.totalMinutes),testCount:Math.max(Number(T.testCount||0),Number(w.testCount||0),A.totalTests),weeklyStudyMinutes:Math.max(Number(T.weeklyStudyMinutes||0),Number(w.weeklyStudyMinutes||0),z.totalMinutes),weeklyTestCount:Math.max(Number(T.weeklyTestCount||0),Number(w.weeklyTestCount||0),z.totalTests),allTimeStudyMinutes:Math.max(Number(T.allTimeStudyMinutes||0),Number(w.allTimeStudyMinutes||0),B.totalMinutes),allTimeTestCount:Math.max(Number(T.allTimeTestCount||0),Number(w.allTimeTestCount||0),B.totalTests),dailyLogs:w.dailyLogs||w.logs||T.dailyLogs||[],history:w.history||T.history||[],isStudying:w.isStudying!==void 0?!!w.isStudying:!!T.isStudying,studySubject:w.studySubject||w.subject||T.studySubject||"",subject:w.studySubject||w.subject||T.subject||"",lastHeartbeat:w.lastHeartbeat||T.lastHeartbeat||0})}});const b=i.find(m=>m.userId===l.userId)||{},f=this.isCurrentStudyingActive(),k=f&&(this._currentStudySubject||b.studySubject||b.subject)||"",u=f?Date.now():0;b&&b.userId&&(b.isStudying=f,b.studySubject=k,b.subject=k,b.lastHeartbeat=u,this.saveGroupRoster(n,i));const x=this.getWeeklyStats(),y=p&&typeof p.getStudyStatsByPeriod=="function"?p.getStudyStatsByPeriod("all"):c,h={userId:l.userId,nickname:l.nickname,target:l.target,avatarUrl:l.avatar_url||l.avatarUrl||"",avatar_url:l.avatar_url||l.avatarUrl||"",studyMinutes:c.studyMinutes,testCount:c.testCount,weeklyStudyMinutes:Math.max(Number(x.studyMinutes||0),Number(c.studyMinutes||0)),weeklyTestCount:Math.max(Number(x.testCount||0),Number(c.testCount||0)),allTimeStudyMinutes:Math.max(Number(y.studyMinutes||0),Number(x.studyMinutes||0),Number(c.studyMinutes||0)),allTimeTestCount:Math.max(Number(y.testCount||0),Number(x.testCount||0),Number(c.testCount||0)),subjects:c.subjects||[],date:t,isCurrentUser:!0,isOwner:!!(r&&r.isOwner),isStudying:f,studySubject:k,subject:k,lastHeartbeat:u,updatedAt:Date.now()};g.set(l.userId,h);const _=Array.from(g.values());return _.sort((m,w)=>(w.studyMinutes||0)!==(m.studyMinutes||0)?(w.studyMinutes||0)-(m.studyMinutes||0):(w.testCount||0)-(m.testCount||0)),r&&(r.members=_),{success:!0,fromCache:!0,offline:!0,groupCode:r?r.groupCode||r.code:n,groupName:r?r.groupName||r.name:`گروه ${n}`,groupData:r,leaderboard:_,list:_,date:t}},updateLocalGroupCacheWithUser(o,e){try{const t=this.getGroupRoster(o),n=t.findIndex(i=>i.userId===e.userId);n<0?(t.push({userId:e.userId,nickname:e.nickname,target:e.target,joinedAt:Date.now(),isOwner:!!e.isOwner,isStudying:!!e.isStudying,studySubject:e.studySubject||e.subject||"",subject:e.studySubject||e.subject||"",lastHeartbeat:e.lastHeartbeat||Date.now()}),this.saveGroupRoster(o,t)):(t[n]={...t[n],isStudying:e.isStudying!==void 0?!!e.isStudying:t[n].isStudying,studySubject:e.studySubject||e.subject||t[n].studySubject||"",subject:e.studySubject||e.subject||t[n].subject||"",lastHeartbeat:e.lastHeartbeat||t[n].lastHeartbeat||Date.now()},this.saveGroupRoster(o,t));const a=localStorage.getItem(`${ee.GROUP_CACHE_PREFIX}${o}`);let r=[];if(a)try{r=JSON.parse(a)}catch{r=[]}Array.isArray(r)||(r=[]),r=r.filter(i=>i.userId!==e.userId),r.push({...e,isCurrentUser:!0}),r.sort((i,s)=>(s.studyMinutes||0)!==(i.studyMinutes||0)?(s.studyMinutes||0)-(i.studyMinutes||0):(s.testCount||0)-(i.testCount||0)),localStorage.setItem(`${ee.GROUP_CACHE_PREFIX}${o}`,JSON.stringify(r))}catch(t){console.error("Error updating local group cache:",t)}},getIranNowHHMM(){try{return new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Tehran",hour:"2-digit",minute:"2-digit",hour12:!1}).format(new Date)}catch{const e=new Date;return`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`}},isEarlyBirdWindowOpen(){const[o,e]=this.getIranNowHHMM().split(":").map(Number),t=o*60+(e||0);return t>=Oe.START_MIN&&t<=Oe.END_MIN},getEarlyBirdHistory(){try{const o=localStorage.getItem(ee.EARLY_BIRD_HISTORY),e=o?JSON.parse(o):{};return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}catch{return{}}},extractSessionStartMinutes(o){if(!o||typeof o!="object")return null;const e=r=>{if(r==null||r==="")return null;if(typeof r=="string"){const i=String(r).replace(/[۰-۹]/g,l=>"۰۱۲۳۴۵۶۷۸۹".indexOf(l)).replace(/[٠-٩]/g,l=>"٠١٢٣٤٥٦٧٨٩".indexOf(l)).trim(),s=i.match(/(?:^|\b|T|\s)(\d{1,2}):(\d{2})/);if(s){const l=Number(s[1]),c=Number(s[2]);if(!isNaN(l)&&!isNaN(c)&&l>=0&&l<24&&c>=0&&c<60)return l*60+c}const d=Number(i);if(!isNaN(d)&&d>1e11)r=d;else{const l=new Date(i);isNaN(l.getTime())||(r=l.getTime())}}if(typeof r=="number"&&!isNaN(r)){const i=new Date(r);if(!isNaN(i.getTime())){try{const c=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Tehran",hour:"2-digit",minute:"2-digit",hour12:!1}).format(i).split(":").map(Number);if(!isNaN(c[0])&&!isNaN(c[1])){const g=c[0]*60+c[1];if(g>=Oe.START_MIN&&g<=Oe.END_MIN)return g}}catch{}const s=i.getHours()*60+i.getMinutes();if(s>=Oe.START_MIN&&s<=Oe.END_MIN)return s;const d=i.getUTCHours()*60+i.getUTCMinutes();return d>=Oe.START_MIN&&d<=Oe.END_MIN?d:s}}return null},t=[o.startTimeStr,o.startTime,o.start_time,o.time];for(const r of t){const i=e(r);if(i!==null)return i}const n=Math.max(1,Number(o.duration||o.minutes)||1),a=[o.endTimeStr,o.endTime,o.end_time,o.timestamp,o.createdAt,o.created_at];for(const r of a){const i=e(r);if(i!==null){const s=i-n;if(s>=0)return s}}return null},getTodayWakeTime(){const o=this.getEarlyBirdHistory(),e=this.getTodayDateStr();if(o[e]){const t=String(o[e]).replace(/[۰-۹]/g,i=>"۰۱۲۳۴۵۶۷۸۹".indexOf(i)).trim(),[n,a]=t.split(":").map(Number),r=!isNaN(n)&&!isNaN(a)?n*60+a:null;if(r!==null&&r>=Oe.START_MIN&&r<=Oe.END_MIN)return t}try{const t=localStorage.getItem("early_bird_daily_status");if(t){const n=JSON.parse(t);if(n.date===e)return n.time;localStorage.removeItem("early_bird_daily_status"),typeof window<"u"&&window.personalSyncService&&typeof window.personalSyncService.pushToCloud=="function"&&window.personalSyncService.pushToCloud()}}catch{localStorage.removeItem("early_bird_daily_status")}return null},getTodayEarlyBird(){const o=this.getTodayWakeTime();return o?{wakeTime:o,wake_time:o,date:this.getTodayDateStr()}:null},saveEarlyBirdLocal(o,e){try{const t=this.getEarlyBirdHistory();t[o]=e,localStorage.setItem(ee.EARLY_BIRD_HISTORY,JSON.stringify(t))}catch(t){console.error("[EarlyBird] ذخیره تاریخچه محلی ناموفق بود:",t)}},async recordEarlyBird(){var a,r;const o=this.getUserProfile(),e=this.getTodayDateStr(),t=this.getIranNowHHMM();if(!this.isEarlyBirdWindowOpen())return{success:!1,outsideWindow:!0,wakeTime:t,message:"ثبت بیداری فقط از ساعت ۵ تا ۷ صبح امکان‌پذیر است."};this.saveEarlyBirdLocal(e,t);const n={userId:o.userId,nickname:o.nickname,name:o.nickname,target:o.target,wakeTime:t,date:e};try{const i=await fetch(`${ue}/api/earlybird.php`,{method:"POST",headers:{"Content-Type":"application/json","Cache-Control":"no-cache",Pragma:"no-cache"},body:JSON.stringify(n)}),s=await i.text();let d=null;try{d=s?JSON.parse(s):null}catch{d=null}if(!i.ok||!d||d.success===!1){const l=d&&(d.message||d.error)||(s||"").slice(0,160)||"پاسخ نامعتبر سرور",c=`POST /api/earlybird.php → HTTP ${i.status}: ${l}`;return console.error("[EarlyBird] ثبت روی سرور ناموفق بود —",c),{success:!1,serverConfirmed:!1,wakeTime:t,errorDetail:c,message:d&&d.message||"ثبت سحرخیزی روی سرور انجام نشد."}}return Array.isArray(d.list)&&(localStorage.setItem(ee.EARLY_BIRD_CACHE,JSON.stringify(d.list)),localStorage.setItem(ee.EARLY_BIRD_CACHE_DATE,e)),d.entry&&d.entry.wakeTime&&this.saveEarlyBirdLocal(e,d.entry.wakeTime),console.info(`[EarlyBird] ثبت موفق — ساعت ${((a=d.entry)==null?void 0:a.wakeTime)||t}, رتبه ${d.rank??"-"}`),{success:!0,serverConfirmed:!0,alreadyRecorded:!!d.alreadyRecorded,wakeTime:((r=d.entry)==null?void 0:r.wakeTime)||t,rank:d.rank,list:d.list||[],message:d.message||"سحرخیزی شما ثبت شد ☀️"}}catch(i){const s=`POST /api/earlybird.php → خطای شبکه: ${i.message}`;return console.error("[EarlyBird] ثبت روی سرور ناموفق بود —",s),{success:!1,serverConfirmed:!1,wakeTime:t,errorDetail:s,message:"ثبت محلی انجام شد اما ارتباط با سرور برقرار نشد."}}},async fetchEarlyBirds(o=null){const e=o||this.getTodayDateStr();try{const t=await fetch(`${ue}/api/earlybird.php?date=${e}&_t=${Date.now()}`,{cache:"no-store",headers:{"Cache-Control":"no-cache",Pragma:"no-cache"}}),n=await t.text();let a=null;try{a=n?JSON.parse(n):null}catch{a=null}if(t.ok&&a&&a.success&&Array.isArray(a.list))return localStorage.setItem(ee.EARLY_BIRD_CACHE,JSON.stringify(a.list)),localStorage.setItem(ee.EARLY_BIRD_CACHE_DATE,e),{success:!0,fromCache:!1,date:e,list:a.list};throw new Error(a&&(a.message||a.error)||`HTTP ${t.status}`)}catch(t){console.warn("[EarlyBird] دریافت لیست از سرور ناموفق بود، استفاده از کش محلی:",t.message);let n=[];if(localStorage.getItem(ee.EARLY_BIRD_CACHE_DATE)===e)try{const a=JSON.parse(localStorage.getItem(ee.EARLY_BIRD_CACHE)||"[]");Array.isArray(a)&&(n=a)}catch{n=[]}return{success:!1,offline:!0,fromCache:!0,date:e,list:n}}}};typeof window<"u"&&(window.leaderboardService=$,window.fetchUserGroups=(o=!0)=>$.fetchUserGroups(o));const te=o=>String(o).replace(/[0-9]/g,e=>"۰۱۲۳۴۵۶۷۸۹"[e]),ot=[{id:"energetic",icon:"⚡️",text:"پرانرژی (۱۰/۱۰)",badge:"⚡️ پرانرژی (۱۰/۱۰)"},{id:"fighter",icon:"🦁",text:"جنگنده",badge:"🦁 جنگنده"},{id:"satisfied",icon:"😌",text:"راضی",badge:"😌 راضی"},{id:"tough",icon:"☕️",text:"سخت اما تموم شد",badge:"☕️ سخت اما تموم شد"}];function nt(o){const e=Number(o)||0;return e>70?{text:"#34d399",bg:"rgba(16, 185, 129, 0.15)",border:"rgba(52, 211, 153, 0.35)"}:e>=50?{text:"#fbbf24",bg:"rgba(245, 158, 11, 0.15)",border:"rgba(251, 191, 36, 0.35)"}:{text:"#f87171",bg:"rgba(239, 68, 68, 0.15)",border:"rgba(248, 113, 113, 0.35)"}}function Re(o){const e=Math.max(0,Math.round(Number(o)||0));if(e===0)return"۰ دقیقه";const t=Math.floor(e/60),n=e%60;return t>0&&n>0?`${te(t)} ساعت و ${te(n)} دقیقه`:t>0?`${te(t)} ساعت`:`${te(n)} دقیقه`}function Qt(o){if(!o)return"۰۰:۰۰ - ۰۰:۰۰";const e=Number(o.duration!==void 0?o.duration:o.minutes)||0,t=i=>{if(i==null||i==="")return null;if(typeof i=="number"||typeof i=="string"&&/^\d{10,}$/.test(i.trim())){const s=new Date(Number(i));if(!isNaN(s.getTime()))return s.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",hour12:!1})}if(typeof i=="string"&&i.includes(":")&&!i.includes("T")&&!i.includes("-")){const s=i.trim().split(":");if(s.length>=2){const d=s.map(g=>g.replace(/[۰-۹]/g,b=>"۰۱۲۳۴۵۶۷۸۹".indexOf(b))),l=String(parseInt(d[0])||0).padStart(2,"0"),c=String(parseInt(d[1])||0).padStart(2,"0");return te(`${l}:${c}`)}}if(typeof i=="string"||i instanceof Date){const s=new Date(i);if(!isNaN(s.getTime()))return s.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",hour12:!1})}return null};let n=t(o.startTime),a=t(o.endTime);const r=o.timestamp||o.createdAt;if((!n||!a)&&r){let i=null;if(typeof r=="number"||typeof r=="string"&&/^\d{10,}$/.test(String(r).trim())?i=new Date(Number(r)):i=new Date(r),i&&!isNaN(i.getTime())){const s=new Date(i.getTime()-e*6e4);n||(n=s.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",hour12:!1})),a||(a=i.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",hour12:!1}))}}if(n||(n="۰۸:۰۰"),!a){const s=String(n).replace(/[۰-۹]/g,d=>"۰۱۲۳۴۵۶۷۸۹".indexOf(d)).split(":").map(Number);if(s.length>=2&&!isNaN(s[0])&&!isNaN(s[1])){const l=(s[0]*60+s[1]+e)%1440,c=String(Math.floor(l/60)).padStart(2,"0"),g=String(l%60).padStart(2,"0");a=te(`${c}:${g}`)}else a="۰۹:۰۰"}return`${n} - ${a}`}function Xt(o=null){try{const e=p.getTodayJalaliString(),t=p.normalizeJalaliDate(o||e),n=t===e,a=new Date,r=a.getHours()*60+a.getMinutes(),i=480,s=1380;let d=s;n&&(d=Math.min(s,r));const c=(p.getActivitiesByDate(t)||[]).filter(h=>h?!(h.type==="non-study"||h.type==="non_study"||h.type==="break"||h.activityType==="non_study"||h.activityType==="non-study"||h.activityType==="break"||h.isStudy===!1||h.is_study_time===!1||h.counts_for_study===!1||h.isBreak===!0||h.is_break===!0||h.timerType==="break"||h.timerType===2):!1),g=c.reduce((h,_)=>h+(Number(_.duration||_.minutes)||0),0);if(d<=i)return{usefulMinutes:g,usefulText:Re(g),leakMinutes:0,leakText:"بدون نشتی (خارج بازه ۰۸-۲۳)",leakCount:0};const b=[];c.forEach(h=>{const _=Math.max(1,Number(h.duration||h.minutes)||1);let m=0,w=0;if(h.startTime){const z=new Date(h.startTime);if(!isNaN(z.getTime()))w=z.getHours()*60+z.getMinutes(),m=w+_;else if(typeof h.startTime=="string"&&h.startTime.includes(":")){const B=h.startTime.split(":").map(Number);w=(B[0]||0)*60+(B[1]||0),m=w+_}}else if(h.endTime||h.timestamp||h.createdAt){const z=new Date(h.endTime||h.timestamp||h.createdAt);isNaN(z.getTime())||(m=z.getHours()*60+z.getMinutes(),w=Math.max(0,m-_))}else m=d,w=Math.max(0,m-_);const T=Math.max(i,Math.min(d,w)),A=Math.max(i,Math.min(d,m));A>T&&b.push({start:T,end:A})}),b.sort((h,_)=>h.start-_.start);const f=[];b.forEach(h=>{if(f.length===0)f.push({...h});else{const _=f[f.length-1];h.start<=_.end?_.end=Math.max(_.end,h.end):f.push({...h})}});let k=0,u=0,x=i;f.forEach(h=>{const _=h.start-x;_>45&&(k+=_,u++),x=Math.max(x,h.end)});const y=d-x;return y>45&&(k+=y,u++),{usefulMinutes:g,usefulText:Re(g),leakMinutes:k,leakText:k>0?Re(k):"بدون نشتی ✨",leakCount:u}}catch(e){return console.error("Error calculating time leak stats:",e),{usefulMinutes:0,usefulText:"۰ دقیقه",leakMinutes:0,leakText:"۰ دقیقه",leakCount:0}}}function Ot(o={}){const{size:e=280,showCenterInfo:t=!0,dateStr:n=null}=o,a=p.normalizeJalaliDate(n||p.getTodayJalaliString()),r=p.getActivitiesByDate(a)||[],s=(p.getStudyTargets()||{}).dailyStudyGoalHours||8,d=s*60,l=p.getStudyMinutesByDate(a),c=+(l/60).toFixed(1),g=d>0?Math.min(100,Math.round(l/d*100)):0,b=typeof p.getStudyStreak=="function"?p.getStudyStreak():0,f=110,k=2*Math.PI*f;let u="";const x=new Date,y=x.getHours()*60+x.getMinutes(),h=m=>{if(m==null||m==="")return null;if(typeof m=="string"){const w=String(m).replace(/[۰-۹]/g,z=>"۰۱۲۳۴۵۶۷۸۹".indexOf(z)).replace(/[٠-٩]/g,z=>"٠١٢٣٤٥٦٧٨٩".indexOf(z)).trim(),T=w.match(/(?:^|\b|T|\s)(\d{1,2}):(\d{2})/);if(T){const z=Number(T[1]),B=Number(T[2]);if(!isNaN(z)&&!isNaN(B)&&z>=0&&z<24&&B>=0&&B<60)return z*60+B}const A=Number(w);if(!isNaN(A)&&A>1e11)m=A;else{const z=new Date(w);isNaN(z.getTime())||(m=z.getTime())}}if(typeof m=="number"&&!isNaN(m)){const w=new Date(m);if(!isNaN(w.getTime())){try{const A=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Tehran",hour:"2-digit",minute:"2-digit",hour12:!1}).format(w).split(":").map(Number);if(!isNaN(A[0])&&!isNaN(A[1]))return A[0]*60+A[1]}catch{}return w.getHours()*60+w.getMinutes()}}return null};r.forEach(m=>{if(!m)return;const w=Math.max(1,Number(m.duration||m.minutes)||1);let T=h(m.startTime),A=h(m.endTime);if(T!==null&&A!==null)A<T&&(A+=24*60);else if(T!==null)A=T+w;else if(A!==null)T=Math.max(0,A-w);else{const C=h(m.timestamp||m.createdAt);C!==null?(A=C,T=Math.max(0,A-w)):(A=y,T=Math.max(0,A-w))}T=Math.max(0,Math.min(1440,T)),A=Math.max(0,Math.min(1440,A));const z=Math.max(1,A-T),B=m.type==="study"||m.isStudy!==!1,D=m.color||(B?"#0ea5e9":"#f59e0b"),I=(z/1440*k).toFixed(2),P=(k-Number(I)).toFixed(2),j=(-(T/1440)*k).toFixed(2);u+=`
      <circle cx="160" cy="160" r="${f}" fill="none"
        stroke="${D}" stroke-width="14" stroke-linecap="round"
        stroke-dasharray="${I} ${P}"
        stroke-dashoffset="${j}"
        style="transition: stroke-dasharray 0.8s ease-out, stroke-dashoffset 0.8s ease-out; filter: drop-shadow(0 0 5px ${D}aa);"
      />
    `});let _="";for(let m=0;m<24;m++){const w=m*15*Math.PI/180,T=m%6===0,A=T?8:4,z=160+(f+10)*Math.cos(w),B=160+(f+10)*Math.sin(w),D=160+(f+10+A)*Math.cos(w),I=160+(f+10+A)*Math.sin(w);_+=`
      <line x1="${z.toFixed(1)}" y1="${B.toFixed(1)}" x2="${D.toFixed(1)}" y2="${I.toFixed(1)}"
        stroke="${T?"rgba(255, 255, 255, 0.4)":"rgba(255, 255, 255, 0.15)"}"
        stroke-width="${T?2:1}" />
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
        <circle cx="160" cy="160" r="${f+15}" fill="url(#ringGlowBg)" />

        <!-- Track Circle (24-Hour Dial Background) -->
        <circle cx="160" cy="160" r="${f}" fill="none" stroke="rgba(255, 255, 255, 0.06)" stroke-width="14" />

        <!-- 24 Hourly Ticks -->
        ${_}

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
            <span>${te(b)} روز استریک</span>
          </div>

          <!-- Total Study Hours -->
          <div style="font-size: 1.65rem; font-weight: 900; color: #ffffff; line-height: 1.1; font-family: 'Outfit', sans-serif; text-shadow: 0 0 12px rgba(14, 165, 233, 0.5);">
            ${te(c)} <span style="font-size: 0.82rem; font-weight: 700; color: #38bdf8;">ساعت</span>
          </div>

          <!-- Goal Progress Badge -->
          <div style="font-size: 0.7rem; color: #a1a1aa; font-weight: 700; margin-top: 3px;">
            هدف: <span style="color: #e4e4e7; font-family: 'Outfit';">${te(s)}h</span>
            <span style="color: #10b981; margin-right: 3px;">(${te(g)}٪)</span>
          </div>
        </div>
      `:""}
    </div>
  `}function Zt(){const o=Xt(),e=p.getSubjectStudyStats()||{},t=Object.keys(e).map(n=>{const a=e[n],r=a.minutes||0;return r<=0?"":`
      <div style="background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); padding: 4px 10px; border-radius: 10px; font-size: 0.72rem; font-weight: 700; color: #e4e4e7; display: flex; align-items: center; gap: 5px;">
        <span style="width: 8px; height: 8px; border-radius: 50%; background: ${a.isStudy!==!1?"#0ea5e9":"#f59e0b"}; display: inline-block;"></span>
        <span>${n}:</span>
        <span style="color: #38bdf8; font-family: 'Outfit';">${Re(r)}</span>
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
        ${Ot({size:260,showCenterInfo:!0})}
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
  `}function Po(o=null){var Le;const e=o||window.appState&&window.appState.selectedJalaliDetailDate||p.getTodayJalaliString(),t=p.normalizeJalaliDate(e),n=p&&typeof p.getTodayJalaliString=="function"?p.getTodayJalaliString():"",a=t===(p?p.normalizeJalaliDate(n):n),r=t.split("/").map(Number),i=r[0]||1404,s=r[1]||1,d=r[2]||1,c=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"][s-1]||"",b=(p.jalaliToJdn(i,s,d)+2)%7,u=`${["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه"][b]||"شنبه"} ${te(d)} ${c} ${te(i)}`;let x=null;try{x=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}")}catch{}const y=(typeof p.getUserProfile=="function"?p.getUserProfile():{})||{},h=localStorage.getItem("planex_user_avatar")||"",_=localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_leaderboard_nickname")||"",m=localStorage.getItem("planex_leaderboard_target")||"",w=_||y.name||y.displayName||y.nickname||(x==null?void 0:x.full_name)||(x==null?void 0:x.name)||"کاربر",T=m||y.target||y.major||y.targetField||"کنکور سراسری ۱۴۰۶",A=y.grade||y.educationGrade||"",z=A&&T&&!T.includes(A)?`${A} - ${T}`:T,B=h||y.avatar||y.photo||y.avatarUrl||(x==null?void 0:x.avatar_url)||null,D=typeof p<"u"&&typeof p.getCurrentWeek=="function"?p.getCurrentWeek():null,I=(D==null?void 0:D.days)||[],P=(typeof p.getActivitiesByDate=="function"?p.getActivitiesByDate(t):[])||[],j=P.filter(N=>N?!(N.type==="non-study"||N.type==="non_study"||N.type==="break"||N.activityType==="non_study"||N.activityType==="non-study"||N.activityType==="break"||N.isStudy===!1||N.is_study_time===!1||N.counts_for_study===!1||N.isBreak===!0||N.is_break===!0||N.timerType==="break"||N.timerType===2):!1),C=j.reduce((N,re)=>{const de=Number(re.duration!==void 0?re.duration:re.minutes);return N+(isNaN(de)?0:Math.max(0,Math.ceil(de)))},0),J=Re(C),W=(typeof p.getStudyTargets=="function"?p.getStudyTargets():{})||{},G=Number(W.dailyStudyGoalHours||W.dailyTargetHours||8),K=G*60,q=K>0?Math.min(100,Math.round(C/K*100)):0,Z=j.length,R=typeof p.getStudyStreak=="function"?p.getStudyStreak():0;let X=null;const Q=typeof $<"u"?$:typeof window<"u"?window.leaderboardService:null,oe=N=>{if(!N)return null;const re=S=>!S||typeof S!="string"?S:S.replace(/[۰-۹]/g,Y=>"۰۱۲۳۴۵۶۷۸۹".indexOf(Y)).replace(/[٠-٩]/g,Y=>"٠١٢٣٤٥٦٧٨٩".indexOf(Y));if(typeof N=="string"){const Y=re(N).trim().match(/(?:^|\b|T|\s)(\d{1,2}):(\d{2})/);if(Y){const V=parseInt(Y[1],10),le=parseInt(Y[2],10);if(!isNaN(V)&&!isNaN(le)&&V>=0&&V<24&&le>=0&&le<60)return V*60+le}}let de=null;if(typeof N=="number")de=N;else if(typeof N=="object"&&N!==null&&(de=N.timestamp||N.createdAt||N.start||null,!de&&(N.startTime||N.start_time||N.startTimeStr)))return oe(N.startTime||N.start_time||N.startTimeStr);if(de){const S=new Date(de);if(!isNaN(S.getTime()))try{const V=S.toLocaleTimeString("en-US",{timeZone:"Asia/Tehran",hour12:!1,hour:"2-digit",minute:"2-digit"}).split(":").map(Number);if(V.length>=2&&!isNaN(V[0])&&!isNaN(V[1]))return V[0]*60+V[1]}catch{return S.getHours()*60+S.getMinutes()}}return null},ce=N=>N!==null&&N>=5*60&&N<=7*60;let ie=null;if(Q){if(a&&typeof Q.getTodayWakeTime=="function"&&(ie=Q.getTodayWakeTime()),!ie&&typeof Q.getEarlyBirdHistory=="function"){const N=Q.getEarlyBirdHistory()||{};ie=N[t]||(a?N[(Le=Q.getTodayDateStr)==null?void 0:Le.call(Q)]:null)}if(!ie&&a&&typeof Q.getTodayEarlyBird=="function"){const N=Q.getTodayEarlyBird();N&&(N.wakeTime||N.wake_time)&&(ie=N.wakeTime||N.wake_time)}}const v=oe(ie);if(ce(v)){const N=String(Math.floor(v/60)).padStart(2,"0"),re=String(v%60).padStart(2,"0");X=`${N}:${re}`}if(!X){const N=P&&P.length>0?P:j;if(N&&N.length>0){let re=1440;N.forEach(de=>{let S=null;if(Q&&typeof Q.extractSessionStartMinutes=="function"?S=Q.extractSessionStartMinutes(de):S=oe(de.startTime||de.start_time||de.startTimeStr||de.time||de.timestamp||de.createdAt||de),S!==null&&ce(S)&&S<re){re=S;const Y=String(Math.floor(re/60)).padStart(2,"0"),V=String(re%60).padStart(2,"0");X=`${Y}:${V}`}})}}const E=X?`☀️ ${te(X)}`:"بدون حاضری صبح";let L=0,F=0,pe=0;j.forEach(N=>{const re=Number(N.testCount!==void 0?N.testCount:N.tests!==void 0?N.tests:0),de=Number(N.testCorrect||N.correct||0),S=Number(N.testWrong||N.wrong||0),Y=Number(N.testUnanswered||N.unanswered||0);F+=de,pe+=S;const V=de+S+Y;L+=re>0?re:V});const U=L>0,fe=L>0?Math.min(100,Math.max(0,Math.round(F/L*100))):0,xe=L>0?(F*3-pe)/(L*3)*100:0,ye=Math.round(xe),_e=nt(fe),we=nt(ye),ke=localStorage.getItem("planex_daily_mood_"+t),Ae=ot.find(N=>N.id===ke),ne={},ge=["#38bdf8","#a78bfa","#f59e0b","#10b981","#ec4899","#6366f1","#f43f5e","#14b8a6","#8b5cf6","#0ea5e9"];j.forEach(N=>{const re=N.subject||N.categoryName||N.title||N.name||"درس آزاد",de=Number(N.duration!==void 0?N.duration:N.minutes)||0;ne[re]||(ne[re]=0),ne[re]+=de});const Be=Object.keys(ne).map((N,re)=>{const de=ne[N],S=C>0?Math.round(de/C*100):0,Y=ge[re%ge.length];return{name:N,mins:de,pct:S,color:Y}}).sort((N,re)=>re.mins-N.mins);return`
    <div id="modal-daily-story-card" class="modal-overlay" style="position: relative; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(24px); background: rgba(0, 0, 0, 0.88); z-index: 99999; padding: 16px; overflow-y: auto; transform: translateZ(0); will-change: transform, opacity; -webkit-overflow-scrolling: touch;" onclick="if(event.target === this || event.target.classList.contains('modal-overlay')) window.closeDailyStoryCard();">
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
              ${B?`
                <img src="${B}" style="width: 46px; height: 46px; border-radius: 50%; object-fit: cover; border: 2px solid #a78bfa; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4);" />
              `:`
                <div style="width: 46px; height: 46px; border-radius: 50%; background: linear-gradient(135deg, #7c3aed 0%, #3b82f6 100%); display: flex; align-items: center; justify-content: center; font-size: 1.25rem; font-weight: 800; color: #ffffff; border: 2px solid rgba(255,255,255,0.25); box-shadow: 0 4px 12px rgba(124, 58, 237, 0.4);">
                  ${w.charAt(0)}
                </div>
              `}
              <div style="text-align: right;">
                <div style="font-size: 1.08rem; font-weight: 900; color: #ffffff; letter-spacing: -0.3px;">${w}</div>
                <div style="display: inline-flex; align-items: center; background: rgba(124, 58, 237, 0.2); border: 1px solid rgba(167, 139, 250, 0.35); padding: 1px 8px; border-radius: 8px; font-size: 0.68rem; font-weight: 700; color: #c4b5fd; margin-top: 2px;">
                  🎯 ${z}
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
              ${I.map(N=>{const re=p.normalizeJalaliDate(N.dateStr)===t,de=re?"background: linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%); color: #ffffff; border-color: #a78bfa; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.5);":"background: rgba(255, 255, 255, 0.03); color: #a1a1aa; border-color: rgba(255, 255, 255, 0.06);",S=N.isToday?'<span style="width: 4px; height: 4px; border-radius: 50%; background: #34d399; display: inline-block; margin-right: 2px;"></span>':"";return`
                  <button type="button"
                    class="weekday-tab-btn ${re?"active":""}"
                    data-date="${N.dateStr}"
                    onclick="if(window.selectDailyModalDate){ window.selectDailyModalDate('${N.dateStr}'); }"
                    style="flex: 1; min-width: 48px; padding: 5px 2px; border-radius: 12px; border: 1px solid; font-size: 0.72rem; font-weight: 800; cursor: pointer; transition: all 0.15s ease; text-align: center; white-space: nowrap; ${de}">
                    <div style="font-size: 0.65rem; opacity: 0.9;">${N.dayName}</div>
                    <div style="font-size: 0.76rem; font-family: 'Outfit', sans-serif; margin-top: 1px;">${S}${te(N.dayOfMonth)}</div>
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
            ${Ot({size:250,showCenterInfo:!0,dateStr:t})}
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
              ${J}
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.7rem; font-weight: 700; color: #c4b5fd; margin-bottom: 4px;">
              <span>پیشرفت تارگت روزانه</span>
              <span>${te(q)}٪</span>
            </div>
            <div style="width: 100%; height: 7px; background: rgba(255, 255, 255, 0.08); border-radius: 999px; overflow: hidden; position: relative;">
              <div style="width: ${q}%; height: 100%; background: linear-gradient(90deg, #0ea5e9 0%, #7c3aed 50%, #ec4899 100%); border-radius: 999px; box-shadow: 0 0 12px rgba(124, 58, 237, 0.6);"></div>
            </div>
          </div>

          <!-- 5. HIGH-CONTRAST BADGES GRID -->
          <div style="width: 100%; display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; z-index: 2;">
            <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 12px; padding: 7px 4px; text-align: center;">
              <div style="font-size: 0.58rem; color: #fcd34d; font-weight: 700;">استریک</div>
              <div style="font-size: 0.82rem; font-weight: 900; color: #f59e0b; margin-top: 2px;">
                🔥 ${te(R)}
              </div>
            </div>

            <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 12px; padding: 7px 4px; text-align: center;">
              <div style="font-size: 0.58rem; color: #6ee7b7; font-weight: 700;">تست امروز</div>
              <div style="font-size: 0.82rem; font-weight: 900; color: #34d399; margin-top: 2px;">
                🎯 ${te(L)}
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
              <div style="font-size: ${X?"0.82rem":"0.68rem"}; font-weight: 900; color: ${X?"#a78bfa":"#9ca3af"}; margin-top: 2px; white-space: nowrap;">
                ${E}
              </div>
            </div>
          </div>

          <!-- 5.5 TEST ACCURACY SUMMARY BLOCK (درصد با و بدون منفی) -->
          ${U?`
            <div style="width: 100%; display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; z-index: 2;">
              <div style="background: ${_e.bg}; border: 1px solid ${_e.border}; border-radius: 12px; padding: 6px 8px; text-align: center;">
                <div style="font-size: 0.58rem; color: ${_e.text}; font-weight: 700;">درصد بدون منفی</div>
                <div style="font-size: 0.85rem; font-weight: 900; color: ${_e.text}; margin-top: 1px;">
                  ${te(fe)}٪
                </div>
              </div>
              <div style="background: ${we.bg}; border: 1px solid ${we.border}; border-radius: 12px; padding: 6px 8px; text-align: center;">
                <div style="font-size: 0.58rem; color: ${we.text}; font-weight: 700;">درصد با احتساب منفی</div>
                <div style="font-size: 0.85rem; font-weight: 900; color: ${we.text}; margin-top: 1px;">
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
                ${Be.slice(0,4).map(N=>`
                  <div style="background: rgba(255,255,255,0.04); border: 1px solid ${N.color}55; padding: 3px 8px; border-radius: 8px; font-size: 0.65rem; font-weight: 700; color: #e4e4e7; display: flex; align-items: center; gap: 5px;">
                    <span style="width: 6px; height: 6px; border-radius: 50%; background: ${N.color};"></span>
                    <span>${N.name}:</span>
                    <span style="color: ${N.color}; font-weight: 800;">${Re(N.mins)}</span>
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
              ${Ae?`<span style="font-size: 0.64rem; font-weight: 800; color: #fbbf24; background: rgba(245, 158, 11, 0.15); padding: 1px 6px; border-radius: 6px;">${Ae.badge}</span>`:""}
            </div>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px;">
              ${ot.map(N=>{const de=Ae&&Ae.id===N.id?"background: rgba(245, 158, 11, 0.25); border: 1.5px solid #fbbf24; color: #ffffff; font-weight: 900; box-shadow: 0 0 8px rgba(245, 158, 11, 0.3);":"background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); color: #a1a1aa; font-weight: 700;";return`
                  <button type="button" onclick="if(window.setDailyMood){ window.setDailyMood('${t}', '${N.id}'); }"
                    style="padding: 5px 2px; border-radius: 8px; font-size: 0.6rem; cursor: pointer; transition: all 0.15s ease; text-align: center; white-space: nowrap; ${de}">
                    ${N.badge}
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
  `}function eo(o=null){var de;const e=o||window.appState&&window.appState.selectedJalaliDetailDate||p.getTodayJalaliString(),t=p.normalizeJalaliDate(e),n=p&&typeof p.getTodayJalaliString=="function"?p.getTodayJalaliString():"",a=t===(p?p.normalizeJalaliDate(n):n),r=t.split("/").map(Number),i=r[0]||1404,s=r[1]||1,d=r[2]||1,c=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"][s-1]||"",b=(p.jalaliToJdn(i,s,d)+2)%7,u=`${["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه"][b]||"شنبه"} ${te(d)} ${c} ${te(i)}`;let x=null;try{x=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}")}catch{}const y=(typeof p.getUserProfile=="function"?p.getUserProfile():{})||{},h=localStorage.getItem("planex_user_avatar")||"",_=localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_leaderboard_nickname")||"",m=localStorage.getItem("planex_leaderboard_target")||"",w=_||y.name||y.displayName||y.nickname||(x==null?void 0:x.full_name)||(x==null?void 0:x.name)||"کاربر",T=m||y.target||y.major||y.targetField||"کنکور سراسری ۱۴۰۶",A=y.grade||y.educationGrade||"",z=A&&T&&!T.includes(A)?`${A} - ${T}`:T,B=h||y.avatar||y.photo||y.avatarUrl||(x==null?void 0:x.avatar_url)||null,D=typeof p<"u"&&typeof p.getCurrentWeek=="function"?p.getCurrentWeek():null,I=(D==null?void 0:D.days)||[],P=(typeof p.getActivitiesByDate=="function"?p.getActivitiesByDate(t):[])||[],j=P.filter(S=>S?!(S.type==="non-study"||S.type==="non_study"||S.type==="break"||S.activityType==="non_study"||S.activityType==="non-study"||S.activityType==="break"||S.isStudy===!1||S.is_study_time===!1||S.counts_for_study===!1||S.isBreak===!0||S.is_break===!0||S.timerType==="break"||S.timerType===2):!1),C=j.reduce((S,Y)=>{const V=Number(Y.duration!==void 0?Y.duration:Y.minutes);return S+(isNaN(V)?0:Math.max(0,Math.ceil(V)))},0),J=Re(C),W=(typeof p.getStudyTargets=="function"?p.getStudyTargets():{})||{},G=Number(W.dailyStudyGoalHours||W.dailyTargetHours||8),K=G*60,q=K>0?Math.min(100,Math.round(C/K*100)):0,Z=j.length,R=typeof p.getStudyStreak=="function"?p.getStudyStreak():0;let X=null;const Q=typeof $<"u"?$:typeof window<"u"?window.leaderboardService:null,oe=S=>{if(!S)return null;const Y=le=>!le||typeof le!="string"?le:le.replace(/[۰-۹]/g,O=>"۰۱۲۳۴۵۶۷۸۹".indexOf(O)).replace(/[٠-٩]/g,O=>"٠١٢٣٤٥٦٧٨٩".indexOf(O));if(typeof S=="string"){const O=Y(S).trim().match(/(?:^|\b|T|\s)(\d{1,2}):(\d{2})/);if(O){const H=parseInt(O[1],10),se=parseInt(O[2],10);if(!isNaN(H)&&!isNaN(se)&&H>=0&&H<24&&se>=0&&se<60)return H*60+se}}let V=null;if(typeof S=="number")V=S;else if(typeof S=="object"&&S!==null&&(V=S.timestamp||S.createdAt||S.start||null,!V&&(S.startTime||S.start_time||S.startTimeStr)))return oe(S.startTime||S.start_time||S.startTimeStr);if(V){const le=new Date(V);if(!isNaN(le.getTime()))try{const H=le.toLocaleTimeString("en-US",{timeZone:"Asia/Tehran",hour12:!1,hour:"2-digit",minute:"2-digit"}).split(":").map(Number);if(H.length>=2&&!isNaN(H[0])&&!isNaN(H[1]))return H[0]*60+H[1]}catch{return le.getHours()*60+le.getMinutes()}}return null},ce=S=>S!==null&&S>=5*60&&S<=7*60;let ie=null;if(Q){if(a&&typeof Q.getTodayWakeTime=="function"&&(ie=Q.getTodayWakeTime()),!ie&&typeof Q.getEarlyBirdHistory=="function"){const S=Q.getEarlyBirdHistory()||{};ie=S[t]||(a?S[(de=Q.getTodayDateStr)==null?void 0:de.call(Q)]:null)}if(!ie&&a&&typeof Q.getTodayEarlyBird=="function"){const S=Q.getTodayEarlyBird();S&&(S.wakeTime||S.wake_time)&&(ie=S.wakeTime||S.wake_time)}}const v=oe(ie);if(ce(v)){const S=String(Math.floor(v/60)).padStart(2,"0"),Y=String(v%60).padStart(2,"0");X=`${S}:${Y}`}if(!X){const S=P&&P.length>0?P:j;if(S&&S.length>0){let Y=1440;S.forEach(V=>{let le=null;if(Q&&typeof Q.extractSessionStartMinutes=="function"?le=Q.extractSessionStartMinutes(V):le=oe(V.startTime||V.start_time||V.startTimeStr||V.time||V.timestamp||V.createdAt||V),le!==null&&ce(le)&&le<Y){Y=le;const O=String(Math.floor(Y/60)).padStart(2,"0"),H=String(Y%60).padStart(2,"0");X=`${O}:${H}`}})}}const E=X?`☀️ ${te(X)}`:"بدون حاضری صبح";let L=0,F=0,pe=0,U=0;j.forEach(S=>{const Y=Number(S.testCount!==void 0?S.testCount:S.tests!==void 0?S.tests:0),V=Number(S.testCorrect!==void 0?S.testCorrect:S.correct!==void 0?S.correct:0),le=Number(S.testWrong!==void 0?S.testWrong:S.wrong!==void 0?S.wrong:0),O=Number(S.testUnanswered!==void 0?S.testUnanswered:S.unanswered!==void 0?S.unanswered:0);F+=V,pe+=le,U+=O;const H=V+le+O;L+=Y>0?Y:H});const fe=L>0,xe=L>0?Math.min(100,Math.max(0,Math.round(F/L*100))):0,ye=L>0?(F*3-pe)/(L*3)*100:0,_e=Math.round(ye),we=nt(xe),ke=nt(_e),Ae=localStorage.getItem("planex_daily_mood_"+t),ne=ot.find(S=>S.id===Ae),ge={},Be=["#38bdf8","#a78bfa","#f59e0b","#10b981","#ec4899","#6366f1","#f43f5e","#14b8a6","#8b5cf6","#0ea5e9"];j.forEach(S=>{const Y=S.subject||S.categoryName||S.title||S.name||"درس آزاد",V=Number(S.duration!==void 0?S.duration:S.minutes)||0;ge[Y]||(ge[Y]=0),ge[Y]+=V});const Le=Object.keys(ge).map((S,Y)=>{const V=ge[S],le=C>0?Math.round(V/C*100):0,O=Be[Y%Be.length];return{name:S,mins:V,pct:le,color:O}}).sort((S,Y)=>Y.mins-S.mins),N={یادگیری:{mins:0,icon:"🧠",bg:"rgba(99, 102, 241, 0.15)",border:"rgba(129, 140, 248, 0.35)",color:"#818cf8"},تست‌زنی:{mins:0,icon:"🎯",bg:"rgba(16, 185, 129, 0.15)",border:"rgba(52, 211, 153, 0.35)",color:"#34d399"},مرور:{mins:0,icon:"🔄",bg:"rgba(245, 158, 11, 0.15)",border:"rgba(251, 191, 36, 0.35)",color:"#fbbf24"},جمع‌بندی:{mins:0,icon:"📑",bg:"rgba(14, 165, 233, 0.15)",border:"rgba(56, 189, 248, 0.35)",color:"#38bdf8"}};j.forEach(S=>{const Y=Number(S.duration!==void 0?S.duration:S.minutes)||0,V=(S.studyType||S.activityType||S.type||"").toString().toLowerCase();V.includes("تست")||V.includes("test")?N.تست‌زنی.mins+=Y:V.includes("مرور")||V.includes("review")?N.مرور.mins+=Y:V.includes("جمع")||V.includes("summary")?N.جمع‌بندی.mins+=Y:N.یادگیری.mins+=Y});const re=[...j].map(S=>{const Y=S.subject||S.categoryName||S.title||S.name||"درس آزاد",V=S.studyType||"یادگیری",le=Number(S.testCorrect||S.correct||0),O=Number(S.testWrong||S.wrong||0),H=Number(S.testUnanswered||S.unanswered||0),se=Number(S.testCount||S.tests||le+O+H),me=Qt(S);return{subject:Y,timeRangeStr:me,studyType:V,tCount:se,c:le,w:O,u:H}});return`
    <div id="modal-daily-analysis-report" class="modal-overlay" style="position: relative; display: flex; align-items: center; justify-content: center; backdrop-filter: blur(24px); background: rgba(0, 0, 0, 0.88); z-index: 99999; padding: 16px; overflow-y: auto; transform: translateZ(0); will-change: transform, opacity; -webkit-overflow-scrolling: touch;" onclick="if(event.target === this || event.target.classList.contains('modal-overlay')) window.closeDailyAnalysisReport();">
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
              ${B?`
                <img src="${B}" style="width: 44px; height: 44px; border-radius: 50%; object-fit: cover; border: 2px solid #38bdf8; box-shadow: 0 4px 12px rgba(14, 165, 233, 0.4);" />
              `:`
                <div style="width: 44px; height: 44px; border-radius: 50%; background: linear-gradient(135deg, #0284c7 0%, #3b82f6 100%); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 800; color: #ffffff; border: 2px solid rgba(255,255,255,0.2); box-shadow: 0 4px 12px rgba(14, 165, 233, 0.4);">
                  ${w.charAt(0)}
                </div>
              `}
              <div style="text-align: right;">
                <div style="font-size: 1.05rem; font-weight: 900; color: #ffffff; letter-spacing: -0.3px;">${w}</div>
                <div style="display: inline-flex; align-items: center; background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.35); padding: 1px 8px; border-radius: 8px; font-size: 0.68rem; font-weight: 700; color: #38bdf8; margin-top: 2px;">
                  🎯 ${z}
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
              ${I.map(S=>{const Y=p.normalizeJalaliDate(S.dateStr)===t,V=Y?"background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); color: #ffffff; border-color: #38bdf8; box-shadow: 0 4px 12px rgba(14, 165, 233, 0.4);":"background: rgba(255, 255, 255, 0.03); color: #a1a1aa; border-color: rgba(255, 255, 255, 0.06);",le=S.isToday?'<span style="width: 5px; height: 5px; border-radius: 50%; background: #34d399; display: inline-block; margin-right: 3px;"></span>':"";return`
                  <button type="button"
                    class="weekday-tab-btn ${Y?"active":""}"
                    data-date="${S.dateStr}"
                    onclick="if(window.selectDailyModalDate){ window.selectDailyModalDate('${S.dateStr}'); }"
                    style="flex: 1; min-width: 48px; padding: 6px 2px; border-radius: 12px; border: 1px solid; font-size: 0.72rem; font-weight: 800; cursor: pointer; transition: all 0.15s ease; text-align: center; white-space: nowrap; ${V}">
                    <div style="font-size: 0.66rem; opacity: 0.9;">${S.dayName}</div>
                    <div style="font-size: 0.78rem; font-family: 'Outfit', sans-serif; margin-top: 1px;">${le}${te(S.dayOfMonth)}</div>
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
                هدف: ${te(G)} ساعت
              </span>
            </div>
            <div style="font-size: 1.65rem; font-weight: 900; color: #ffffff; margin: 6px 0 10px 0; background: linear-gradient(135deg, #ffffff 0%, #38bdf8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
              ${J}
            </div>
            
            <!-- Daily Goal Completion Progress Bar -->
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.72rem; font-weight: 700; color: #7dd3fc; margin-bottom: 5px;">
              <span>پیشرفت تارگت روزانه</span>
              <span>${te(q)}٪</span>
            </div>
            <div style="width: 100%; height: 8px; background: rgba(255, 255, 255, 0.08); border-radius: 999px; overflow: hidden; position: relative;">
              <div style="width: ${q}%; height: 100%; background: linear-gradient(90deg, #0284c7 0%, #10b981 50%, #f59e0b 100%); border-radius: 999px; box-shadow: 0 0 12px rgba(16, 185, 129, 0.6);"></div>
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
                🔥 ${te(R)} <span style="font-size: 0.7rem; font-weight: 600;">روز</span>
              </div>
            </div>

            <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 8px 6px; text-align: center;">
              <div style="font-size: 0.66rem; color: #9ca3af; font-weight: 700;">ساعت حاضری صبح</div>
              <div style="font-size: ${X?"0.95rem":"0.78rem"}; font-weight: 900; color: ${X?"#10b981":"#9ca3af"}; margin-top: 3px; white-space: nowrap;">
                ${E}
              </div>
            </div>
          </div>

          <!-- 5. TEST ANALYTICS BAR -->
          ${fe?`
            <div style="background: rgba(16, 185, 129, 0.06); border: 1px solid rgba(16, 185, 129, 0.22); border-radius: 16px; padding: 10px 12px; z-index: 2;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                <span style="font-size: 0.72rem; font-weight: 800; color: #34d399;">🎯 تحلیل تست‌های این روز</span>
                <span style="font-size: 0.68rem; font-weight: 700; color: #a78bfa; background: rgba(167, 139, 250, 0.15); padding: 1px 6px; border-radius: 6px;">
                  مجموع: ${te(L)} تست
                </span>
              </div>
              
              <div style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 4px; text-align: center;">
                <div style="background: rgba(0,0,0,0.2); padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.6rem; color: #9ca3af; white-space: nowrap;">کل</div>
                  <div style="font-size: 0.78rem; font-weight: 800; color: #ffffff;">${te(L)}</div>
                </div>
                <div style="background: rgba(16,185,129,0.1); padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.6rem; color: #6ee7b7; white-space: nowrap;">درست</div>
                  <div style="font-size: 0.78rem; font-weight: 800; color: #34d399;">${te(F)}</div>
                </div>
                <div style="background: rgba(239,68,68,0.1); padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.6rem; color: #fca5a5; white-space: nowrap;">غلط</div>
                  <div style="font-size: 0.78rem; font-weight: 800; color: #f87171;">${te(pe)}</div>
                </div>
                <div style="background: rgba(161,161,170,0.1); padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.6rem; color: #d4d4d8; white-space: nowrap;">نزده</div>
                  <div style="font-size: 0.78rem; font-weight: 800; color: #a1a1aa;">${te(U)}</div>
                </div>
                <div style="background: ${we.bg}; border: 1px solid ${we.border}; padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.58rem; color: ${we.text}; white-space: nowrap; font-weight: 700;">بدون منفی</div>
                  <div style="font-size: 0.78rem; font-weight: 900; color: ${we.text};">${te(xe)}٪</div>
                </div>
                <div style="background: ${ke.bg}; border: 1px solid ${ke.border}; padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.58rem; color: ${ke.text}; white-space: nowrap; font-weight: 700;">با منفی</div>
                  <div style="font-size: 0.78rem; font-weight: 900; color: ${ke.text};">${te(_e)}٪</div>
                </div>
              </div>
            </div>
          `:""}

          <!-- 6. SUBJECT BREAKDOWN (دروس) WITH PERFECT ALIGNMENT & ELEGANT EMPTY STATE -->
          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 16px; padding: 10px 12px; z-index: 2;">
            <div style="font-size: 0.74rem; font-weight: 800; color: #e4e4e7; margin-bottom: 8px; display: flex; align-items: center; gap: 4px;">
              <span>📚 تفکیک دروس مطالعه‌شده</span>
            </div>
            ${Le.length>0?`
              <div style="display: flex; flex-direction: column; gap: 6px;">
                ${Le.slice(0,6).map(S=>`
                  <div>
                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.7rem; margin-bottom: 2px; gap: 6px;">
                      <div style="display: flex; align-items: center; gap: 6px; min-width: 0; flex: 1; overflow: hidden; white-space: nowrap;">
                        <span style="width: 7px; height: 7px; border-radius: 50%; background: ${S.color}; flex-shrink: 0; box-shadow: 0 0 6px ${S.color};"></span>
                        <span style="font-weight: 700; color: #ffffff; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${S.name}</span>
                      </div>
                      <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0; white-space: nowrap;">
                        <span style="color: #9ca3af; font-size: 0.65rem;">${Re(S.mins)}</span>
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
              ${Object.keys(N).map(S=>{const Y=N[S];return`
                  <div style="background: ${Y.bg}; border: 1px solid ${Y.border}; padding: 5px 8px; border-radius: 10px; display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 4px;">
                      <span style="font-size: 0.8rem;">${Y.icon}</span>
                      <span style="font-size: 0.68rem; font-weight: 700; color: #e4e4e7;">${S}</span>
                    </div>
                    <span style="font-size: 0.68rem; font-weight: 800; color: ${Y.color};">
                      ${Re(Y.mins)}
                    </span>
                  </div>
                `}).join("")}
            </div>
          </div>

          <!-- 8. TIMELINE SESSIONS LIST WITH FIXED TIMESTAMP FORMATTING OR ELEGANT EMPTY STATE -->
          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 16px; padding: 10px 12px; z-index: 2; flex-grow: 1; display: flex; flex-direction: column;">
            <div style="font-size: 0.74rem; font-weight: 800; color: #e4e4e7; margin-bottom: 6px; display: flex; justify-content: space-between; align-items: center;">
              <span>🕒 جریان زمانی جلسات</span>
              <span style="font-size: 0.65rem; color: #9ca3af;">${te(re.length)} پارت</span>
            </div>
            
            ${re.length>0?`
              <div style="display: flex; flex-direction: column; gap: 6px; overflow: hidden;">
                ${re.slice(0,5).map(S=>`
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
                ${re.length>5?`
                  <div style="font-size: 0.62rem; color: #8e8e9c; text-align: center; margin-top: 2px;">
                    و ${te(re.length-5)} جلسه دیگر...
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
              ${ne?`
                <span style="font-size: 0.68rem; font-weight: 800; color: #fbbf24; background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.3); padding: 2px 8px; border-radius: 8px;">
                  ${ne.badge}
                </span>
              `:`
                <span style="font-size: 0.65rem; color: #9ca3af;">(یک گزینه انتخاب کنید)</span>
              `}
            </div>
            
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px;">
              ${ot.map(S=>{const V=ne&&ne.id===S.id?"background: linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(217, 119, 6, 0.2) 100%); border: 1.5px solid #fbbf24; color: #ffffff; box-shadow: 0 0 12px rgba(245, 158, 11, 0.35); font-weight: 900;":"background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); color: #d4d4d8; font-weight: 700;";return`
                  <button type="button"
                    onclick="if(window.setDailyMood){ window.setDailyMood('${t}', '${S.id}'); }"
                    style="padding: 7px 8px; border-radius: 12px; font-size: 0.7rem; cursor: pointer; transition: all 0.15s ease; display: flex; align-items: center; justify-content: center; gap: 4px; ${V}">
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
  `}function Ve(o,e=!1){const t=document.getElementById("planex-story-toast");t&&t.remove();const n=document.createElement("div");n.id="planex-story-toast",Object.assign(n.style,{position:"fixed",bottom:"24px",left:"50%",transform:"translateX(-50%)",padding:"12px 24px",borderRadius:"14px",fontSize:"0.88rem",fontWeight:"700",color:"#ffffff",background:e?"linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)":"linear-gradient(135deg, #10b981 0%, #059669 100%)",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.4)",zIndex:"999999",direction:"rtl",transition:"opacity 0.3s ease",opacity:"0"}),n.textContent=o,document.body.appendChild(n),requestAnimationFrame(()=>{n.style.opacity="1"}),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),350)},3e3)}function St(o){const e=t=>{if(t.nodeType!==1)return;const n=t.style;n.filter&&(n.filter="none"),n.backdropFilter&&(n.backdropFilter="none"),n.webkitBackdropFilter&&(n.webkitBackdropFilter="none"),["color","backgroundColor","borderColor"].forEach(a=>{const r=n[a];if(r&&r.includes("var(")){const i=getComputedStyle(t)[a];i&&(n[a]=i)}});for(const a of t.children)e(a)};e(o)}async function Pt(o,e){try{if(typeof navigator<"u"&&navigator.share&&navigator.canShare){const a=await(await fetch(o)).blob(),r=new File([a],e,{type:a.type||"image/png"});if(navigator.canShare({files:[r]})){await navigator.share({files:[r],title:"PlanEx Story"});return}}}catch(n){n&&n.name!=="AbortError"&&console.warn("[triggerDownload] Web Share failed, falling back to anchor:",n)}const t=document.createElement("a");t.download=e,t.href=o,document.body.appendChild(t),t.click(),document.body.removeChild(t)}function Rt(o,e,t,n){return new Promise((a,r)=>{try{const i="http://www.w3.org/2000/svg",s=o.cloneNode(!0);St(s),s.style.width=e+"px",s.style.height=t+"px";const d=new XMLSerializer().serializeToString(s),l=`
        <svg xmlns="${i}" width="${e}" height="${t}">
          <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml">${d}</div>
          </foreignObject>
        </svg>`,c=new Image,g=new Blob([l],{type:"image/svg+xml;charset=utf-8"}),b=URL.createObjectURL(g);c.onload=()=>{const f=document.createElement("canvas");f.width=e*n,f.height=t*n;const k=f.getContext("2d");k.fillStyle="#030712",k.fillRect(0,0,f.width,f.height),k.scale(n,n),k.drawImage(c,0,0,e,t),URL.revokeObjectURL(b),a(f)},c.onerror=f=>{URL.revokeObjectURL(b),r(new Error("Fallback SVG-to-Canvas render failed: "+(f.message||f)))},c.src=b}catch(i){r(i)}})}async function kt(){const o=document.getElementById("btn-download-story-card"),e=document.getElementById("planex-story-card-canvas");if(!e){Ve("عنصر کارت پیدا نشد.",!0);return}const t=o?o.innerHTML:"";o&&(o.disabled=!0,o.innerHTML="<span>⏳</span><span>در حال ساخت تصویر...</span>");const n=()=>{o&&(o.disabled=!1,o.innerHTML=t)},r=`PlanEx_Daily_Story_${typeof p<"u"&&typeof p.getTodayJalaliString=="function"?p.getTodayJalaliString().replace(/\//g,"-"):new Date().toISOString().slice(0,10)}.png`;let i=null;try{i=e.cloneNode(!0),i.id="planex-story-card-offscreen",Object.assign(i.style,{position:"fixed",left:"-9999px",top:"0",zIndex:"-1",display:"flex",width:"440px",height:"740px",minHeight:"740px",maxHeight:"740px",maxWidth:"none",transform:"none"}),St(i),document.body.appendChild(i),await new Promise(d=>requestAnimationFrame(()=>requestAnimationFrame(d)))}catch(d){console.warn("Story card: clone failed, capturing in-place.",d),i=null}const s=i||e;try{let d;try{d=await jt(s,{scale:2,useCORS:!0,allowTaint:!0,backgroundColor:"#090d16",logging:!1,removeContainer:!1})}catch(c){console.warn("html2canvas failed, attempting fallback:",c);const g=s.offsetWidth||440,b=s.offsetHeight||740;d=await Rt(s,g,b,2)}const l=d.toDataURL("image/png");Pt(l,r),o&&(o.innerHTML="<span>✅</span><span>تصویر با موفقیت دانلود شد!</span>",setTimeout(n,2500)),Ve("تصویر کارت استوری با موفقیت ذخیره شد ✅")}catch(d){console.error("Story card export failed:",d),Ve("خطا در دانلود تصویر: "+(d.message||d),!0),n()}finally{i&&i.parentNode&&i.parentNode.removeChild(i)}}async function to(){const o=document.getElementById("btn-download-analysis-report"),e=document.getElementById("planex-analysis-report-canvas");if(!e){Ve("عنصر کارنامه تحلیلی پیدا نشد.",!0);return}const t=o?o.innerHTML:"";o&&(o.disabled=!0,o.innerHTML="<span>⏳</span><span>در حال ساخت تصویر کارنامه...</span>");const n=()=>{o&&(o.disabled=!1,o.innerHTML=t)},r=`PlanEx_Daily_Analysis_${typeof p<"u"&&typeof p.getTodayJalaliString=="function"?p.getTodayJalaliString().replace(/\//g,"-"):new Date().toISOString().slice(0,10)}.png`;let i=null;try{i=e.cloneNode(!0),i.id="planex-analysis-report-offscreen",Object.assign(i.style,{position:"fixed",left:"-9999px",top:"0",zIndex:"-1",display:"flex",width:"460px",maxHeight:"none",transform:"none"}),St(i),document.body.appendChild(i),await new Promise(d=>requestAnimationFrame(()=>requestAnimationFrame(d)))}catch(d){console.warn("Analysis report clone failed, capturing in-place.",d),i=null}const s=i||e;try{let d;try{d=await jt(s,{scale:2,useCORS:!0,allowTaint:!0,backgroundColor:"#090d16",logging:!1,removeContainer:!1})}catch(c){console.warn("html2canvas failed for analysis report, attempting fallback:",c);const g=s.offsetWidth||460,b=s.offsetHeight||820;d=await Rt(s,g,b,2)}const l=d.toDataURL("image/png");Pt(l,r),o&&(o.innerHTML="<span>✅</span><span>تصویر کارنامه با موفقیت دانلود شد!</span>",setTimeout(n,2500)),Ve("کارنامه تحلیلی با موفقیت ذخیره شد ✅")}catch(d){console.error("Analysis report export failed:",d),Ve("خطا در دانلود تصویر: "+(d.message||d),!0),n()}finally{i&&i.parentNode&&i.parentNode.removeChild(i)}}if(typeof window<"u"&&(window.selectDailyModalDate=o=>{if(!o)return;const e=p&&typeof p.normalizeJalaliDate=="function"?p.normalizeJalaliDate(o):o;window.appState&&(window.appState.selectedJalaliDetailDate=e),typeof window.renderApp=="function"&&window.renderApp()},window.openStoryModal=(o="dailyStoryCard",e=null)=>{const t=typeof state<"u"&&state?state:window.appState,n=o==="dailyAnalysisReport"||o==="analysis"||o==="report"||o==="jalaliDayDetails"?"dailyAnalysisReport":"dailyStoryCard",a=p&&typeof p.getTodayJalaliString=="function"?p.getTodayJalaliString():null,r=e||(t==null?void 0:t.selectedJalaliDetailDate)||a;t&&(r&&(t.selectedJalaliDetailDate=r),t.activeModal=n),window.appState&&window.appState!==t&&(r&&(window.appState.selectedJalaliDetailDate=r),window.appState.activeModal=n);try{history.pushState({modal:n},"")}catch{}typeof window.renderApp=="function"&&window.renderApp()},window.closeStoryModal=()=>{typeof state<"u"&&state&&(state.activeModal=null),window.appState&&(window.appState.activeModal=null),typeof window.renderApp=="function"&&window.renderApp()},window.openDailyStoryCard=(o=null)=>{window.openStoryModal("dailyStoryCard",o)},window.closeDailyStoryCard=()=>{window.closeStoryModal()},window.openDailyAnalysisReport=(o=null)=>{window.openStoryModal("dailyAnalysisReport",o)},window.closeDailyAnalysisReport=()=>{window.closeStoryModal()},window.openDailyReportModal=(o=null)=>{window.openStoryModal("dailyAnalysisReport",o)},window.openQuickStoryModal=(o=null)=>{window.openStoryModal("dailyStoryCard",o)},window.closeDailyReportModal=()=>{window.closeStoryModal()},window.closeQuickStoryModal=()=>{window.closeStoryModal()},window.openDailyReport=window.openDailyReportModal,window.openQuickStory=window.openQuickStoryModal,window.openDailyAnalysisModal=window.openDailyReportModal,window.openJalaliDayDetailsModal=(o=null)=>{window.openStoryModal("dailyAnalysisReport",o)},window.downloadStoryCardPNG=kt,window.generateStoryCardPNG=kt,window.downloadAnalysisReportPNG=to,window.setDailyMood=(o,e)=>{if(!o||!e)return;const t=p&&typeof p.normalizeJalaliDate=="function"?p.normalizeJalaliDate(o):o;localStorage.setItem("planex_daily_mood_"+t,e),typeof window.renderApp=="function"&&window.renderApp()},window.weekdaySelectorDelegationBound||(document.addEventListener("click",o=>{const e=o.target.closest(".weekday-tab-btn, [data-weekday-date]");if(e){const t=e.dataset.date||e.dataset.weekdayDate;t&&typeof window.selectDailyModalDate=="function"&&window.selectDailyModalDate(t)}}),window.weekdaySelectorDelegationBound=!0),window.dailyModalKeyboardBound||(document.addEventListener("keydown",o=>{(o.key==="Escape"||o.keyCode===27)&&window.appState&&(window.appState.activeModal==="dailyStoryCard"||window.appState.activeModal==="dailyAnalysisReport")&&(o.preventDefault(),window.appState.activeModal=null,typeof window.renderApp=="function"&&window.renderApp())}),window.addEventListener("popstate",()=>{window.appState&&(window.appState.activeModal==="dailyStoryCard"||window.appState.activeModal==="dailyAnalysisReport")&&(window.appState.activeModal=null,typeof window.renderApp=="function"&&window.renderApp())}),window.dailyModalKeyboardBound=!0),!window.dailyRingAutoSyncBound)){const o=()=>{document.querySelector(".daily-ring-widget-card")&&typeof window.renderApp=="function"&&window.renderApp()};window.addEventListener("activity-saved",o),window.addEventListener("storage",e=>{(e.key==="planex_recent_activity_sessions"||e.key==="planex_study_logs"||e.key==="planex_active_timer_state")&&o()}),window.dailyRingAutoSyncBound=!0}const ae=o=>String(o??"").replace(/[0-9]/g,e=>"۰۱۲۳۴۵۶۷۸۹"[e]);typeof window<"u"&&(window.openGPACalculator=()=>{window.appState&&(window.appState.activeModal="gpaCalc"),window.renderApp&&window.renderApp()},window.openRankEstimator=()=>{window.appState&&(window.appState.activeModal="rankEstimator"),window.renderApp&&window.renderApp();try{var o=document.getElementById("modal-rank-estimator")||document.getElementById("modal-konkur-estimator");o&&(o.style.display="flex",o.classList.add("active"))}catch{}},window.openKonkurEstimatorModal=function(){try{var o="";try{typeof ht=="function"?o=ht():typeof wt=="function"&&(o=wt())}catch{o=""}var e=null;try{e=document.getElementById("modals-root")||document.getElementById("modal-container")||document.body}catch{e=null}var t=null;try{t=document.getElementById("modal-konkur-estimator")||document.getElementById("modal-rank-estimator")}catch{t=null}var n=!0;try{t&&t.innerHTML&&t.innerHTML.length>500&&t.querySelector("select, input")&&(n=!1)}catch{n=!0}if(n&&e&&o){try{var a=document.getElementById("modal-konkur-estimator");if(a){var s=document.createElement("div");s.innerHTML=o;var d=s.firstElementChild;d?a.innerHTML=d.innerHTML:a.innerHTML=o}else{var r=document.createElement("div");r.innerHTML=o;var i=r.firstElementChild;i?e.appendChild(i):e.insertAdjacentHTML("beforeend",o)}}catch{try{e.insertAdjacentHTML("beforeend",o)}catch{}}try{t=document.getElementById("modal-konkur-estimator")||document.getElementById("modal-rank-estimator")}catch{}}try{vt()}catch{}t&&(t.style.display="flex",t.classList.add("active"))}catch{}try{if(window.appState&&(window.appState.activeModal="rankEstimator"),typeof window.renderApp=="function"){window.renderApp();try{var l=document.getElementById("modal-konkur-estimator")||document.getElementById("modal-rank-estimator");l&&(l.style.display="flex",l.classList.add("active"))}catch{}try{vt()}catch{}}}catch{}},window.closeKonkurEstimatorModal=function(){try{["modal-konkur-estimator","modal-rank-estimator"].forEach(function(o){var e=document.getElementById(o);e&&(e.style.display="none",e.classList.remove("active"))})}catch{}try{window.appState&&(window.appState.activeModal=null),typeof window.renderApp=="function"&&window.renderApp()}catch{}},window.openPercentCalculator=()=>{window.appState&&(window.appState.activeModal="percentCalc"),window.renderApp&&window.renderApp()},window.openExamBox=()=>{window.appState&&(window.appState.activeModal="examBox"),window.renderApp&&window.renderApp()},window.openSleepScheduler=()=>{window.appState&&(window.appState.activeModal="sleepScheduler"),window.renderApp&&window.renderApp()});function Ro(o){return eo(o)}typeof window<"u"&&(window.handlePercentCalcInput=function(o,e){window.percentCalcState=window.percentCalcState||{correct:20,incorrect:4,unanswered:6},window.percentCalcState[o]=e,window.updatePercentCalculation()},window.updatePercentCalculation=function(){const o=window.percentCalcState||{correct:20,incorrect:4,unanswered:6},e=Math.max(0,parseInt(o.correct)||0),t=Math.max(0,parseInt(o.incorrect)||0),n=Math.max(0,parseInt(o.unanswered)||0),a=e+t+n,r=a>0?(3*e-t)/(3*a)*100:0,i=Math.max(-33.3,Math.min(100,r)).toFixed(1);let s="#10b981",d="عالی 🚀 (عملکرد فوق‌العاده)";r<50?(s="#ef4444",d="نیاز به مرور و تمرکز بیشتر ⚠️"):r<70&&(s="#f59e0b",d="خوب و قابل ارتقا 👍");const l=a>0?(t/(3*a)*100).toFixed(1):"0",c=document.getElementById("percent-calc-card-box");c&&(c.style.borderColor=s);const g=document.getElementById("percent-calc-score-display");g&&(g.textContent=`${ae(i)}٪`,g.style.color=s);const b=document.getElementById("percent-calc-badge");b&&(b.textContent=d,b.style.color=s,b.style.borderColor=s);const f=document.getElementById("percent-calc-total-display");f&&(f.textContent=`${ae(a)} سوال`);const k=document.getElementById("percent-calc-positive-display");k&&(k.textContent=`+${ae(3*e)}`);const u=document.getElementById("percent-calc-lost-display");u&&(u.textContent=`-${ae(t)} امتیاز (-${ae(l)}٪)`)});function Bo(){window.percentCalcState=window.percentCalcState||{correct:20,incorrect:4,unanswered:6};const{correct:o,incorrect:e,unanswered:t}=window.percentCalcState,n=Math.max(0,parseInt(o)||0),a=Math.max(0,parseInt(e)||0),r=Math.max(0,parseInt(t)||0),i=n+a+r,s=i>0?(3*n-a)/(3*i)*100:0,d=Math.max(-33.3,Math.min(100,s)).toFixed(1);let l="#10b981",c="عالی 🚀 (عملکرد فوق‌العاده)";s<50?(l="#ef4444",c="نیاز به مرور و تمرکز بیشتر ⚠️"):s<70&&(l="#f59e0b",c="خوب و قابل ارتقا 👍");const g=i>0?(a/(3*i)*100).toFixed(1):"0";return`
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
              <input type="number" min="0" value="${r}" class="form-input" style="border-color: rgba(148, 163, 184, 0.4); text-align: center; font-size: 1rem; font-weight: bold; font-family: 'Outfit';"
                oninput="window.handlePercentCalcInput('unanswered', this.value)" />
            </div>
          </div>

          <!-- Calculated Output Card -->
          <div id="percent-calc-card-box" style="background: rgba(31, 32, 41, 0.9); border: 1.5px solid ${l}; border-radius: 20px; padding: 20px; text-align: center; margin-bottom: 14px; box-shadow: 0 0 20px rgba(0,0,0,0.3); transition: border-color 0.2s ease;">
            <div style="font-size: 0.8rem; color: #a1a1aa; font-weight: bold; margin-bottom: 6px;">درصد کل کسب‌شده با احتساب نمره منفی</div>
            <div id="percent-calc-score-display" style="font-size: 2.5rem; font-weight: 900; color: ${l}; font-family: 'Outfit', sans-serif; letter-spacing: -1px; transition: color 0.2s ease;">
              ${ae(d)}٪
            </div>
            <div id="percent-calc-badge" style="display: inline-block; background: rgba(255,255,255,0.06); border: 1px solid ${l}; color: ${l}; padding: 4px 12px; border-radius: 12px; font-size: 0.78rem; font-weight: bold; margin-top: 8px; transition: all 0.2s ease;">
              ${c}
            </div>
          </div>

          <!-- Breakdown Summary Details -->
          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 12px 14px; font-size: 0.78rem; display: flex; flex-direction: column; gap: 6px;">
            <div style="display: flex; justify-content: space-between; color: #cbd5e1;">
              <span>تعداد کل سوالات آزمون:</span>
              <strong id="percent-calc-total-display" style="color: #ffffff; font-family: 'Outfit';">${ae(i)} سوال</strong>
            </div>
            <div style="display: flex; justify-content: space-between; color: #cbd5e1;">
              <span>امتیاز مثبت کسب‌شده:</span>
              <strong id="percent-calc-positive-display" style="color: #34d399; font-family: 'Outfit';">+${ae(3*n)}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; color: #cbd5e1;">
              <span>تلفات ناشی از پاسخ نادرست (نمره منفی):</span>
              <strong id="percent-calc-lost-display" style="color: #f87171; font-family: 'Outfit';">-${ae(a)} امتیاز (-${ae(g)}٪)</strong>
            </div>
          </div>
        </div>

        <button onclick="window.appState.activeModal = null; window.renderApp();" class="btn-primary" style="width: 100%; background: #fb923c; border: none; padding: 12px; border-radius: 14px; font-weight: 800; color: #000; cursor: pointer;">
          تایید و بستن
        </button>
      </div>
    </div>
  `}function Bt(o,e,t,n){const a=t>100?Math.round(Math.min(13500,Math.max(2e3,t))):Math.round(3500+Math.max(0,Math.min(100,t))*82),r=n>100?Math.round(Math.min(13500,Math.max(2e3,n))):n<=20?Math.round(3e3+Math.pow(Math.max(0,Math.min(20,n))/20,1.85)*8e3):Math.round(3e3+Math.pow(Math.max(0,Math.min(100,n))/100,1.85)*8e3),i=Math.round(a*.5+r*.5);let s="بیش از ۲۵,۰۰۰",d="بیش از ۶۰,۰۰۰",l="رشته‌های بر اساس سوابق تحصیلی و دانشگاه‌های غیرانتفاعی / آزاد",c="#ef4444";i>=10800?(s="۱ تا ۱۰۰",d="۱ تا ۲۵۰",l="پزشکی و دندان‌پزشکی دانشگاه تهران و علوم پزشکی شهید بهشتی",c="#10b981"):i>=1e4?(s="کمتر از ۵۰۰ (۱۰۰ تا ۵۰۰)",d="۲۵۰ تا ۱,۲۵۰",l="پزشکی / دندانپزشکی روزانه (دانشگاه‌های دولتی تیپ ۱ و ۲)",c="#10b981"):i>=9200?(s="۵۰۰ تا ۱,۵۰۰",d="۱,۲۵۰ تا ۳,۵۰۰",l="پزشکی و دندان‌پزشکی تیپ ۳ / داروسازی برتر مراکز استان",c="#34d399"):i>=8500?(s="۱,۵۰۰ تا ۳,۵۰۰",d="۳,۵۰۰ تا ۸,۲۰۰",l="داروسازی / فیزیوتراپی / پیراپزشکی برتر (دانشگاه‌های تیپ ۱ و ۲)",c="#38bdf8"):i>=8e3?(s="۳,۵۰۰ تا ۵,۰۰۰",d="۸,۲۰۰ تا ۱۲,۰۰۰",l="بینایی‌سنجی، کاردرمانی، پرستاری و مامایی تیپ ۱",c="#fbbf24"):i>=7e3?(s="۵,۰۰۰ تا ۱۲,۰۰۰",d="۱۲,۰۰۰ تا ۲۸,۰۰۰",l="پیراپزشکی‌ها (پرستاری، مامایی، هوشبری، اتاق عمل دولتی)",c="#fb923c"):i>=6e3?(s="۱۲,۰۰۰ تا ۲۵,۰۰۰",d="۲۸,۰۰۰ تا ۶۰,۰۰۰",l="علوم پایه، بهداشت و پیراپزشکی‌های شهریه‌پرداز / پردیس / آزاد",c="#a1a1aa"):(s="بیش از ۲۵,۰۰۰",d="بیش از ۶۰,۰۰۰",l="دوره‌های نوبت دوم، پیام‌نور و پذیرش بر اساس سوابق تحصیلی",c="#ef4444");let g=s;return e==="منطقه ۱"?i>=1e4?g="کمتر از ۳۵۰":i>=9200?g="۳۵۰ تا ۱,۱۰۰":i>=8500?g="۱,۱۰۰ تا ۲,۴۰۰":i>=8e3?g="۲,۴۰۰ تا ۳,۸۰۰":i>=7e3?g="۳,۸۰۰ تا ۸,۵۰۰":i>=6e3?g="۸,۵۰۰ تا ۱۸,۰۰۰":g="بیش از ۱۸,۰۰۰":e==="منطقه ۳"?i>=1e4?g="کمتر از ۴۰۰":i>=9200?g="۴۰۰ تا ۱,۳۰۰":i>=8500?g="۱,۳۰۰ تا ۳,۰۰۰":i>=8e3?g="۳,۰۰۰ تا ۴,۵۰۰":i>=7e3?g="۴,۵۰۰ تا ۱۰,۵۰۰":i>=6e3?g="۱۰,۵۰۰ تا ۲۲,۰۰۰":g="بیش از ۲۲,۰۰۰":e==="ایثارگران"&&(i>=1e4?g="کمتر از ۵۰ سهمیه":i>=8500?g="۵۰ تا ۳۰۰ سهمیه":i>=7e3?g="۳۰۰ تا ۱,۲۰۰ سهمیه":g="بیش از ۱,۲۰۰ سهمیه"),{konkurTazar:a,finalExamTazar:r,weightedTotalTazar:i,quotaRankDisplay:g,countryRankText:d,targetTier:l,badgeColor:c}}typeof window<"u"&&(window.handleRankEstimatorInput=function(o,e){window.rankEstimatorState||(window.rankEstimatorState={stream:"تجربی",region:"منطقه ۲",konkurScore:8800,finalScore:9e3}),window.rankEstimatorState[o]=e,window.updateRankEstimation()},window.updateRankEstimation=function(){const o=window.rankEstimatorState||{},e=o.stream||"تجربی",t=o.region||"منطقه ۲",n=o.konkurScore??o.dedicatedPct??8800,a=o.finalScore??o.generalPct??9e3,r=parseFloat(n)||0,i=parseFloat(a)||0,s=Bt(e,t,r,i),d=document.getElementById("rank-estimator-quota-display");d&&(d.textContent=ae(s.quotaRankDisplay),d.style.color=s.badgeColor);const l=document.getElementById("rank-estimator-quota-label");l&&(l.textContent=`🎯 رتبه تخمینی در سهمیه ${t}:`);const c=document.getElementById("rank-estimator-country-display");c&&(c.textContent=ae(s.countryRankText));const g=document.getElementById("rank-estimator-total-tazar");g&&(g.textContent=ae(s.weightedTotalTazar));const b=document.getElementById("rank-estimator-sub-tazars");b&&(b.textContent=`(کنکور: ${ae(s.konkurTazar)} • نهایی: ${ae(s.finalExamTazar)})`);const f=document.getElementById("rank-estimator-target-tier");f&&(f.textContent=s.targetTier);const k=document.getElementById("rank-estimator-result-card");k&&(k.style.borderColor=s.badgeColor)});function wt(){window.rankEstimatorState=window.rankEstimatorState||{stream:"تجربی",region:"منطقه ۲",konkurScore:8800,finalScore:9e3};const{stream:o,region:e}=window.rankEstimatorState,t=window.rankEstimatorState.konkurScore??window.rankEstimatorState.dedicatedPct??8800,n=window.rankEstimatorState.finalScore??window.rankEstimatorState.generalPct??9e3,a=parseFloat(t)||0,r=parseFloat(n)||0,i=Bt(o,e,a,r);return`
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
                ${["تجربی","ریاضی","انسانی","هنر","زبان"].map(s=>`<option value="${s}" ${s===o?"selected":""}>${s}</option>`).join("")}
              </select>
            </div>

            <div class="input-group">
              <label class="input-label" style="font-size: 0.78rem;">سهمیه منطقه</label>
              <select class="form-select" style="font-size: 0.85rem;" onchange="window.handleRankEstimatorInput('region', this.value)">
                ${["منطقه ۱","منطقه ۲","منطقه ۳","ایثارگران"].map(s=>`<option value="${s}" ${s===e?"selected":""}>${s}</option>`).join("")}
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
          <div id="rank-estimator-result-card" style="background: rgba(31, 32, 41, 0.9); border: 1.5px solid ${i.badgeColor}; border-radius: 20px; padding: 16px; margin-bottom: 14px; transition: border-color 0.2s ease;">
            
            <!-- Distinct Line 1: Zone / Quota Rank -->
            <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span id="rank-estimator-quota-label" style="font-size: 0.82rem; color: #cbd5e1; font-weight: 700;">🎯 رتبه تخمینی در سهمیه ${e}:</span>
              <strong id="rank-estimator-quota-display" style="font-size: 1.25rem; font-weight: 900; color: ${i.badgeColor}; font-family: 'Outfit'; transition: color 0.2s ease;">
                ${ae(i.quotaRankDisplay)}
              </strong>
            </div>

            <!-- Distinct Line 2: All-Country Rank -->
            <div style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
              <span style="font-size: 0.82rem; color: #cbd5e1; font-weight: 700;">🌍 رتبه تخمینی کشوری:</span>
              <strong id="rank-estimator-country-display" style="font-size: 1.25rem; font-weight: 900; color: #38bdf8; font-family: 'Outfit';">
                ${ae(i.countryRankText)}
              </strong>
            </div>

            <div style="display: flex; justify-content: center; align-items: center; gap: 8px; flex-wrap: wrap; font-size: 0.78rem; font-weight: bold; color: #e4e4e7; margin-top: 8px; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 8px;">
              <span>تراز کل کنکور و نهایی:</span>
              <strong id="rank-estimator-total-tazar" style="color: #fbbf24; font-size: 0.95rem; font-family: 'Outfit';">${ae(i.weightedTotalTazar)}</strong>
              <span id="rank-estimator-sub-tazars" style="font-size: 0.72rem; color: #8e8e9c;">(کنکور: ${ae(i.konkurTazar)} • نهایی: ${ae(i.finalExamTazar)})</span>
            </div>

            <div style="font-size: 0.75rem; color: #a1a1aa; margin-top: 10px; background: rgba(255,255,255,0.04); padding: 7px 12px; border-radius: 10px; text-align: center;">
              🎯 پیش‌بینی قبولی: <strong id="rank-estimator-target-tier" style="color: #ffffff;">${i.targetTier}</strong>
            </div>
          </div>
        </div>

        <button onclick="window.appState.activeModal = null; window.renderApp();" class="btn-primary" style="width: 100%; background: #fbbf24; border: none; padding: 12px; border-radius: 14px; font-weight: 800; color: #000; cursor: pointer;">
          متوجه شدم
        </button>
      </div>
      </div>
    </div>
  `}function ht(){return wt()}function vt(){try{var o=null;try{o=document.getElementById("modal-konkur-estimator")||document.getElementById("modal-rank-estimator")}catch{o=null}if(!o)return;try{var e=o.querySelectorAll("select");e.forEach(function(n,a){try{if(n.dataset&&n.dataset.boundKonkur)return;n.dataset&&(n.dataset.boundKonkur="1"),n.addEventListener("change",function(){try{var r=a===0?"stream":"region";try{var i=n.options&&n.selectedIndex>=0?n.options[n.selectedIndex]:null,s=i&&(i.text||i.value)||"";s.indexOf("منطقه")>=0||s.indexOf("ایثار")>=0?r="region":r="stream",a===1&&(r="region"),a===0&&(r="stream")}catch{}typeof window.handleRankEstimatorInput=="function"?window.handleRankEstimatorInput(r,n.value):typeof window.updateRankEstimation=="function"&&window.updateRankEstimation()}catch{}})}catch{}})}catch{}try{var t=o.querySelectorAll('input[type="number"]');t.forEach(function(n,a){try{if(n.dataset&&n.dataset.boundKonkur)return;n.dataset&&(n.dataset.boundKonkur="1"),n.addEventListener("input",function(){try{var r=a===0?"konkurScore":"finalScore";typeof window.handleRankEstimatorInput=="function"?window.handleRankEstimatorInput(r,n.value):typeof window.updateRankEstimation=="function"&&window.updateRankEstimation()}catch{}})}catch{}})}catch{}}catch{}}if(typeof window<"u"){try{window.bindKonkurEstimatorLiveHandlers=vt}catch{}try{window.renderKonkurEstimatorModal=ht}catch{}}function Lo(){window.sleepSchedulerState=window.sleepSchedulerState||{mode:"wake",hour:6,minute:30};const{mode:o,hour:e,minute:t}=window.sleepSchedulerState,n=parseInt(e)*60+parseInt(t),r=[6,5,4,3].map(i=>{const s=i*90+15;let d=0;o==="wake"?d=(n-s+1440)%1440:d=(n+s)%1440;const l=Math.floor(d/60),c=d%60,g=`${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}`,b=(i*1.5).toFixed(1);return{cycleCount:i,hoursCount:b,timeStr:g,isOptimal:i===5||i===6}});return`
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
            ${r.map(i=>`
              <div style="background: ${i.isOptimal?"rgba(129, 140, 248, 0.15)":"rgba(255,255,255,0.03)"}; border: 1.5px solid ${i.isOptimal?"#818cf8":"rgba(255,255,255,0.08)"}; border-radius: 16px; padding: 12px; text-align: center;">
                <div style="font-size: 1.4rem; font-weight: 900; color: ${i.isOptimal?"#818cf8":"#ffffff"}; font-family: 'Outfit';">
                  ${ae(i.timeStr)}
                </div>
                <div style="font-size: 0.72rem; color: #a1a1aa; font-weight: bold; margin-top: 2px;">
                  ${ae(i.cycleCount)} چرخه (${ae(i.hoursCount)} ساعت)
                </div>
                ${i.isOptimal?'<div style="font-size: 0.65rem; color: #818cf8; font-weight: 900; margin-top: 4px;">🌟 زمان طلایی برای کنکوری‌ها</div>':""}
              </div>
            `).join("")}
          </div>
        </div>

        <button onclick="window.appState.activeModal = null; window.renderApp();" class="btn-primary" style="width: 100%; background: #818cf8; border: none; padding: 12px; border-radius: 14px; font-weight: 800; color: #000; cursor: pointer;">
          ثبت و بستن
        </button>
      </div>
    </div>
  `}const at={12:[{name:"زیست‌شناسی / حسابان",coefficient:4},{name:"فیزیک",coefficient:3},{name:"شیمی",coefficient:3},{name:"ادبیات فارسی",coefficient:4},{name:"دین و زندگی",coefficient:3},{name:"زبان انگلیسی",coefficient:2},{name:"عربی، زبان قرآن",coefficient:2},{name:"سلامت و بهداشت",coefficient:1}],11:[{name:"درس اختصاصی ۱",coefficient:4},{name:"درس اختصاصی ۲",coefficient:3},{name:"درس اختصاصی ۳",coefficient:3},{name:"ادبیات فارسی",coefficient:4},{name:"دین و زندگی",coefficient:3},{name:"زبان انگلیسی",coefficient:2},{name:"عربی، زبان قرآن",coefficient:2},{name:"تاریخ / زمین‌شناسی",coefficient:1}],10:[{name:"درس اختصاصی ۱",coefficient:4},{name:"درس اختصاصی ۲",coefficient:3},{name:"درس اختصاصی ۳",coefficient:3},{name:"ادبیات فارسی",coefficient:4},{name:"دین و زندگی",coefficient:3},{name:"زبان انگلیسی",coefficient:2},{name:"عربی، زبان قرآن",coefficient:2},{name:"آمادگی دفاعی",coefficient:1}]};typeof window<"u"&&(window.handleGPAInputChange=function(o,e){window.gpaCalcState||(window.gpaCalcState={grade:"12",scores:{}}),window.gpaCalcState.scores||(window.gpaCalcState.scores={}),window.gpaCalcState.scores[o]=e,window.updateGPACalculation()},window.handleGPAGradeChange=function(o){window.gpaCalcState||(window.gpaCalcState={grade:"12",scores:{}}),window.gpaCalcState.grade=o,window.renderApp&&window.renderApp()},window.updateGPACalculation=function(){const o=window.gpaCalcState||{grade:"12",scores:{}},e=o.grade||"12",t=o.scores||{},n=at[e]||at[12];let a=0,r=0;n.forEach(f=>{const k=t[f.name],u=k!=null&&k!==""?parseFloat(k):20,x=isNaN(u)?0:Math.max(0,Math.min(20,u)),y=parseFloat(f.coefficient||f.weight)||1;a+=x*y,r+=y});const i=r>0?a/r:0,s=Number(i.toFixed(2)).toFixed(2);let d="#10b981",l="عالی 🟢";i<14?(d="#ef4444",l="نیازمند جبران 🔴"):i<17?(d="#fbbf24",l="مناسب 🟡"):(d="#10b981",l="عالی 🟢");const c=document.getElementById("gpa-result-display");c&&(c.textContent=`${ae(s)} از ۲۰`,c.style.color=d);const g=document.getElementById("gpa-status-badge");g&&(g.textContent=`وضعیت: ${l}`,g.style.color=d);const b=document.getElementById("gpa-card-box");b&&(b.style.borderColor=d)});function Jo(){window.gpaCalcState=window.gpaCalcState||{grade:"12",scores:{}};const{grade:o}=window.gpaCalcState,e=window.gpaCalcState.scores=window.gpaCalcState.scores||{},n=(at[o]||at[12]).map(c=>{const g=e[c.name],b=g!=null&&g!==""?parseFloat(g):20;return{name:c.name,grade:isNaN(b)?0:Math.max(0,Math.min(20,b)),coefficient:parseFloat(c.coefficient||c.weight)||1}});let a=0,r=0;n.forEach(c=>{const g=parseFloat(c.grade)||0,b=parseFloat(c.coefficient)||1;a+=g*b,r+=b});const i=r>0?a/r:0,s=Number(i.toFixed(2)).toFixed(2);let d="#10b981",l="عالی 🟢";return i<14?(d="#ef4444",l="نیازمند جبران 🔴"):i<17?(d="#fbbf24",l="مناسب 🟡"):(d="#10b981",l="عالی 🟢"),`
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
                    <span style="font-size: 0.7rem; color: #a1a1aa; margin-right: 6px;">(ضریب ${ae(c.coefficient)})</span>
                  </div>
                  <input type="number" min="0" max="20" step="0.25" value="${c.grade}" class="form-input" style="width: 80px; text-align: center; font-weight: bold; font-family: 'Outfit';"
                    oninput="window.handleGPAInputChange('${c.name}', this.value)" />
                </div>
              `).join("")}
          </div>

          <div id="gpa-card-box" style="background: rgba(31, 32, 41, 0.9); border: 1.5px solid ${d}; border-radius: 20px; padding: 16px; text-align: center; transition: border-color 0.2s ease;">
            <div style="font-size: 0.78rem; color: #a1a1aa; font-weight: bold;">معدل کل کتبی نهایی (وزنی)</div>
            <div id="gpa-result-display" style="font-size: 2.3rem; font-weight: 900; color: ${d}; font-family: 'Outfit'; margin: 2px 0; transition: color 0.2s ease;">
              ${ae(s)} از ۲۰
            </div>
            <div id="gpa-status-badge" style="font-size: 0.8rem; font-weight: bold; color: ${d}; transition: color 0.2s ease;">
              وضعیت: ${l}
            </div>
          </div>
        </div>

        <button onclick="window.appState.activeModal = null; window.renderApp();" class="btn-primary" style="width: 100%; background: #34d399; border: none; padding: 12px; border-radius: 14px; font-weight: 800; color: #000; cursor: pointer;">
          ذخیره و بستن
        </button>
      </div>
    </div>
  `}typeof window<"u"&&(window.handleExamBoxInput=function(o,e){window.examBoxState=window.examBoxState||{days:14,chapters:21,rounds:2},window.examBoxState[o]=e,window.updateExamBoxCalculation()},window.updateExamBoxCalculation=function(){const o=window.examBoxState||{days:14,chapters:21,rounds:2},e=Math.max(1,parseInt(o.days)||1),t=Math.max(1,parseInt(o.chapters)||1),n=Math.max(1,parseInt(o.rounds)||1),a=t*n,r=(a/e).toFixed(1),i=Math.max(1,Math.floor(e*.6)),s=Math.max(1,Math.floor(e*.25)),d=Math.max(1,e-i-s),l=document.getElementById("exam-box-pace-display");l&&(l.textContent=`${ae(r)} فصل در روز`);const c=document.getElementById("exam-box-summary-display");c&&(c.textContent=`(مجموع ${ae(a)} واحد مطالعه در ${ae(e)} روز)`);const g=document.getElementById("exam-box-phase1-display");g&&(g.textContent=`${ae(i)} روز اول`);const b=document.getElementById("exam-box-phase2-display");b&&(b.textContent=`${ae(s)} روز بعدی`);const f=document.getElementById("exam-box-phase3-display");f&&(f.textContent=`${ae(d)} روز پایانی`)});function Go(){window.examBoxState=window.examBoxState||{days:14,chapters:21,rounds:2};const{days:o,chapters:e,rounds:t}=window.examBoxState,n=Math.max(1,parseInt(o)||1),a=Math.max(1,parseInt(e)||1),r=Math.max(1,parseInt(t)||1),i=a*r,s=(i/n).toFixed(1),d=Math.max(1,Math.floor(n*.6)),l=Math.max(1,Math.floor(n*.25)),c=Math.max(1,n-d-l);return`
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
              <input type="number" min="1" max="5" value="${r}" class="form-input" style="text-align: center; font-weight: bold; font-family: 'Outfit';"
                oninput="window.handleExamBoxInput('rounds', this.value)" />
            </div>
          </div>

          <!-- Pace Output Box -->
          <div style="background: rgba(56, 189, 248, 0.12); border: 1.5px solid #38bdf8; border-radius: 20px; padding: 16px; text-align: center; margin-bottom: 14px;">
            <div style="font-size: 0.78rem; color: #a1a1aa; font-weight: bold;">سرعت مطالعه پیشنهادی برای موفقیت کامل</div>
            <div id="exam-box-pace-display" style="font-size: 2.2rem; font-weight: 900; color: #38bdf8; font-family: 'Outfit'; margin: 4px 0;">
              ${ae(s)} فصل در روز
            </div>
            <div id="exam-box-summary-display" style="font-size: 0.74rem; color: #7dd3fc; font-weight: bold;">
              (مجموع ${ae(i)} واحد مطالعه در ${ae(n)} روز)
            </div>
          </div>

          <!-- 3 Phase Timeline -->
          <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; padding: 12px; font-size: 0.78rem; display: flex; flex-direction: column; gap: 8px;">
            <div style="font-weight: bold; color: #ffffff;">📅 فازبندی پیشنهادی زمان‌بندی:</div>
            <div style="display: flex; justify-content: space-between; color: #34d399;">
              <span>فاز ۱ (یادگیری عمیق و خلاصه‌نویسی):</span>
              <strong id="exam-box-phase1-display">${ae(d)} روز اول</strong>
            </div>
            <div style="display: flex; justify-content: space-between; color: #fbbf24;">
              <span>فاز ۲ (حل نمونه‌سوالات و تست‌زنی):</span>
              <strong id="exam-box-phase2-display">${ae(l)} روز بعدی</strong>
            </div>
            <div style="display: flex; justify-content: space-between; color: #c084fc;">
              <span>فاز ۳ (جمع‌بندی و تورق سریع شب امتحان):</span>
              <strong id="exam-box-phase3-display">${ae(c)} روز پایانی</strong>
            </div>
          </div>
        </div>

        <button onclick="window.appState.activeModal = null; window.renderApp();" class="btn-primary" style="width: 100%; background: #38bdf8; border: none; padding: 12px; border-radius: 14px; font-weight: 800; color: #000; cursor: pointer;">
          متوجه شدم
        </button>
      </div>
    </div>
  `}class oo{constructor(){this.ctx=null,this.activeSoundType=null,this.isLoadingSound=null,this.isMuted=!1,this.volume=.5,this.proceduralNodes=null,this.currentBlobUrl=null,typeof Audio<"u"?(this.audioElement=new Audio,this.audioElement.loop=!0,this.audioElement.preload="none",this.audioElement.onerror=e=>{var t;console.warn("Audio Playback CDN Warning for:",(t=this.audioElement)==null?void 0:t.src,"Falling back to Web Audio Synth..."),this.isLoadingSound=null,this.activeSoundType&&this.startProceduralSynth(this.activeSoundType),window.renderApp&&window.renderApp()}):this.audioElement=null}initContext(){try{if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}catch(e){console.warn("AudioContext init error:",e)}}setVolume(e){if(this.volume=parseFloat(e)||.5,this.audioElement&&(this.audioElement.volume=this.volume),this.proceduralNodes&&this.proceduralNodes.masterGain)try{this.proceduralNodes.masterGain.gain.setValueAtTime(this.volume*.4,this.ctx?this.ctx.currentTime:0)}catch{}}stopProceduralSynth(){if(this.proceduralNodes){try{this.proceduralNodes.sources&&this.proceduralNodes.sources.forEach(e=>{try{e.stop(),e.disconnect()}catch{}}),this.proceduralNodes.interval&&clearInterval(this.proceduralNodes.interval)}catch{}this.proceduralNodes=null}}stopSound(){if(this.stopProceduralSynth(),this.audioElement&&(this.audioElement.pause(),this.audioElement.removeAttribute("src"),this.audioElement.load()),this.currentBlobUrl){try{URL.revokeObjectURL(this.currentBlobUrl)}catch{}this.currentBlobUrl=null}this.activeSoundType=null,this.isLoadingSound=null}startProceduralSynth(e){try{if(this.initContext(),!this.ctx)return;this.stopProceduralSynth();const t=2*this.ctx.sampleRate,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),a=n.getChannelData(0);let r=0;for(let l=0;l<t;l++){const c=Math.random()*2-1;a[l]=(r+.02*c)/1.02,r=a[l],a[l]*=3.5}const i=this.ctx.createBufferSource();i.buffer=n,i.loop=!0;const s=this.ctx.createGain();s.gain.setValueAtTime(this.volume*.35,this.ctx.currentTime);const d=this.ctx.createBiquadFilter();if(e.includes("brown"))d.type="lowpass",d.frequency.setValueAtTime(320,this.ctx.currentTime);else if(e.includes("rain")||e.includes("thunder"))d.type="lowpass",d.frequency.setValueAtTime(1100,this.ctx.currentTime);else if(e.includes("ocean")||e.includes("wave")){d.type="bandpass",d.frequency.setValueAtTime(400,this.ctx.currentTime),d.Q.setValueAtTime(1,this.ctx.currentTime);const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.frequency.setValueAtTime(.12,this.ctx.currentTime),c.gain.setValueAtTime(300,this.ctx.currentTime),l.connect(c),c.connect(d.frequency),l.start()}else e.includes("river")||e.includes("forest")?(d.type="bandpass",d.frequency.setValueAtTime(800,this.ctx.currentTime)):(d.type="lowpass",d.frequency.setValueAtTime(750,this.ctx.currentTime));i.connect(d),d.connect(s),s.connect(this.ctx.destination),i.start(),this.proceduralNodes={masterGain:s,sources:[i]}}catch(t){console.warn("Procedural synth error:",t)}}async playAmbient(e,t){if(this.activeSoundType===e)return this.stopSound(),!1;if(this.stopSound(),this.initContext(),t){this.isLoadingSound=e,this.activeSoundType=e,t.startsWith("blob:")&&(this.currentBlobUrl=t),console.log("Now playing:",e,t),this.audioElement.src=t,this.audioElement.volume=this.volume,this.audioElement.loop=!0,this.audioElement.preload="none";try{return await this.audioElement.play(),this.isLoadingSound=null,!0}catch(n){if(n.name!=="AbortError")return console.warn("Audio play promise failed, using Web Audio Synth:",n),this.isLoadingSound=null,this.startProceduralSynth(e),!0}}else return this.activeSoundType=e,this.startProceduralSynth(e),!0;return!1}playPomodoroAlarm(){try{if(this.initContext(),!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});const e=this.ctx.currentTime;[{start:0,freq:587.33,dur:.32,gain:.28},{start:.22,freq:739.99,dur:.32,gain:.32},{start:.45,freq:880,dur:.48,gain:.36},{start:1,freq:587.33,dur:.32,gain:.28},{start:1.22,freq:739.99,dur:.32,gain:.32},{start:1.45,freq:880,dur:.48,gain:.36},{start:2,freq:659.25,dur:.45,gain:.3},{start:2.22,freq:880,dur:.78,gain:.38}].forEach(n=>{const a=this.ctx.createOscillator(),r=this.ctx.createGain();a.type="sine",a.frequency.setValueAtTime(n.freq,e+n.start);const i=e+n.start,s=i+n.dur;r.gain.setValueAtTime(1e-4,i),r.gain.linearRampToValueAtTime(n.gain,i+.03),r.gain.exponentialRampToValueAtTime(1e-4,s),a.connect(r),r.connect(this.ctx.destination),a.start(i),a.stop(s)})}catch(e){console.warn("Pomodoro Web Audio playback error:",e)}}}const Ce=new oo;function no(){Ce.playPomodoroAlarm()}function ao(){if(typeof window<"u"&&"Notification"in window&&Notification.permission==="default")try{Notification.requestPermission().catch(()=>{})}catch{}}function io(o=1){if(typeof navigator<"u"&&typeof navigator.vibrate=="function")try{navigator.vibrate([300,150,300])}catch{}if(typeof window<"u"&&"Notification"in window&&Notification.permission==="granted"){const e=o===2,t=e?"⏰ پایان استراحت - پلنکس":"⏰ پایان پومودورو - پلنکس",a={body:e?"زمان استراحت شما به پایان رسید! آماده شروع یک پارت مطالعه باانرژی باشید.":"زمان پارت مطالعه شما به پایان رسید! وقت یک استراحت کوتاه است.",icon:"/logo-transparent.png",badge:"/logo-transparent.png",vibrate:[200,100,200],tag:"planex-pomodoro-finished",renotify:!0};try{new Notification(t,a)}catch{typeof navigator<"u"&&"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(i=>{i&&i.showNotification&&i.showNotification(t,a)}).catch(()=>{})}}}typeof window<"u"&&(window.playPomodoroAlarm=no,window.sendPomodoroNotification=io,window.requestPomodoroNotificationPermission=ao);const Lt=[{id:"rain_window",title:"🌧️ باران ملایم و پنجره",category:"nature",url:"https://actions.google.com/sounds/v1/weather/rain_heavy.ogg"},{id:"deep_brown_noise",title:"🟤 نویز قهوه‌ای عمیق",category:"focus",url:null},{id:"ambient_piano",title:"🎹 پیانو امبینت بی‌کلام",category:"music",url:"https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=ambient-piano-11070.mp3"},{id:"lofi_study",title:"🎧 لو-فای ملایم مطالعه",category:"music",url:"https://stream.zeno.fm/f3wvbbqmdg8uv"},{id:"rain_soothing",title:"🌧️ باران ملایم و پنجره",category:"nature",url:"https://actions.google.com/sounds/v1/weather/rain_heavy.ogg"},{id:"rain_gentle",title:"🌧️ باران ملایم و پنجره",category:"nature",url:"https://actions.google.com/sounds/v1/weather/rain_heavy.ogg"},{id:"thunderstorm",title:"⚡ رعد و برق",category:"nature",url:"https://actions.google.com/sounds/v1/weather/rain_heavy.ogg"},{id:"brown_noise",title:"🟤 نویز قهوه‌ای عمیق",category:"focus",url:null},{id:"river_stream",title:"🏞️ جریان آب رودخانه",category:"nature",url:"https://actions.google.com/sounds/v1/water/stream_water.ogg"},{id:"coffee_shop",title:"☕ کافه شلوغ",category:"ambient",url:"https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg"},{id:"forest_birds",title:"🌲 جنگل و پرندگان",category:"nature",url:"https://actions.google.com/sounds/v1/environments/forest_birds.ogg"},{id:"ocean_waves",title:"🌊 امواج دریا",category:"nature",url:"https://actions.google.com/sounds/v1/water/waves_crashing.ogg"},{id:"lofi_study_fassounds",title:"🎧 لو-فای ملایم مطالعه",category:"music",url:"https://stream.zeno.fm/f3wvbbqmdg8uv"},{id:"lofi_jazz_mountain",title:"🎷 لوفای جاز",category:"music",url:"https://stream.zeno.fm/f3wvbbqmdg8uv"}],ro="planex_audio_db",so=1,Ue="custom_tracks";typeof navigator<"u"&&navigator.storage&&navigator.storage.persist&&navigator.storage.persist().then(o=>{o&&console.log("[audioDb] Persistent storage granted by browser.")}).catch(()=>{});function gt(){return new Promise((o,e)=>{if(typeof indexedDB>"u"){e(new Error("IndexedDB is not supported in this browser."));return}const t=indexedDB.open(ro,so);t.onupgradeneeded=n=>{const a=n.target.result;a.objectStoreNames.contains(Ue)||a.createObjectStore(Ue,{keyPath:"id"})},t.onsuccess=n=>{o(n.target.result)},t.onerror=n=>{e(n.target.error||new Error("Failed to open audio database."))}})}const He={async saveTrack(o,e=""){if(!o)throw new Error("فایل صوتی انتخاب نشده است.");const t=await gt(),n=e||o.name||"آهنگ جدید",r={id:"custom_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),name:n,fileName:o.name||"audio.mp3",fileType:o.type||"audio/mpeg",blob:o,createdAt:Date.now()};return new Promise((i,s)=>{const c=t.transaction(Ue,"readwrite").objectStore(Ue).put(r);c.onsuccess=()=>i(r),c.onerror=g=>s(g.target.error||new Error("خطا در ذخیره فایل صوتی در دیتابیس"))})},async getTracks(){try{const o=await gt();return new Promise((e,t)=>{const r=o.transaction(Ue,"readonly").objectStore(Ue).getAll();r.onsuccess=()=>e(r.result||[]),r.onerror=i=>t(i.target.error||new Error("خطا در دریافت لیست آهنگ‌ها"))})}catch(o){return console.warn("[audioDb] getTracks failed:",o),[]}},async deleteTrack(o){if(!o)return!1;const e=await gt();return new Promise((t,n)=>{const i=e.transaction(Ue,"readwrite").objectStore(Ue).delete(o);i.onsuccess=()=>t(!0),i.onerror=s=>n(s.target.error||new Error("خطا در حذف آهنگ"))})}};typeof window<"u"&&(window.audioDb=He);const lo=[{id:"rain_window",label:"باران ملایم و پنجره",icon:"🌧️",category:"nature"},{id:"deep_brown_noise",label:"نویز قهوه‌ای عمیق",icon:"🟤",category:"focus"},{id:"ambient_piano",label:"پیانو امبینت بی‌کلام",icon:"🎹",category:"music"},{id:"lofi_study",label:"لو-فای ملایم مطالعه",icon:"🎧",category:"music"}];typeof window<"u"&&!window._customAudioTracksLoaded&&(window._customAudioTracksLoaded=!0,window.customAudioTracksList=[],He.getTracks().then(o=>{window.customAudioTracksList=o||[],window.renderApp&&window.renderApp()}).catch(()=>{}));function Jt(o={}){const e=Ce.activeSoundType||null,t=!!e,n=Ce.volume!==void 0?Math.round(Ce.volume*100):50,a=Lt.find(d=>d.id===e),r=window.customAudioTracksList||[],i=r.find(d=>d.id===e),s=i?`آهنگ شخصی: «${i.name}»`:a?`در حال پخش: «${a.title}»`:"افزایش تمرکز با لوفای، پیانو و آهنگ‌های دلخواه";return`
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
              ${s}
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
        ${lo.map(d=>{const l=e===d.id||d.id==="rain_window"&&(e==="rain_soothing"||e==="rain_gentle")||d.id==="deep_brown_noise"&&e==="brown_noise"||d.id==="lofi_study"&&e==="lofi_study_fassounds";return`
            <button type="button" 
                    class="btn-ambient-sound-mode ${l?"active":""}" 
                    onclick="if(window.selectAmbientSound) window.selectAmbientSound('${d.id}');"
                    style="padding: 10px 12px; border-radius: 14px; border: ${l?"2px solid #10b981":"1.5px solid rgba(255, 255, 255, 0.08)"}; background: ${l?"rgba(16, 185, 129, 0.22)":"#1f2029"}; color: ${l?"#34d399":"#e4e4e7"}; font-size: 0.8rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 8px; transition: all 0.2s ease; width: 100%; box-sizing: border-box; justify-content: flex-start; text-align: right; box-shadow: ${l?"0 0 12px rgba(16, 185, 129, 0.35)":"none"};">
              <span style="font-size: 1.1rem; flex-shrink: 0;">${d.icon}</span>
              <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; flex: 1;">${d.label}</span>
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

        ${r.length===0?`
          <div style="font-size: 0.72rem; color: #8e8e9c; text-align: center; padding: 6px 0;">
            هنوز آهنگ دلخواهی اضافه نشده است. با دکمه بالا فایل صوتی (MP3/WAV) اضافه کنید.
          </div>
        `:`
          <div style="display: flex; flex-direction: column; gap: 6px; max-height: 160px; overflow-y: auto; scrollbar-width: thin;">
            ${r.map(d=>{const l=e===d.id;return`
                <div style="display: flex; align-items: center; justify-content: space-between; background: ${l?"rgba(16, 185, 129, 0.2)":"#1f2029"}; border: 1px solid ${l?"#10b981":"rgba(255,255,255,0.06)"}; padding: 6px 10px; border-radius: 10px; gap: 8px;">
                  <div style="display: flex; align-items: center; gap: 6px; overflow: hidden; flex: 1;">
                    <span style="font-size: 0.85rem;">🎵</span>
                    <span style="font-size: 0.76rem; font-weight: 700; color: ${l?"#34d399":"#e4e4e7"}; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${d.name}</span>
                  </div>

                  <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                    <button type="button" onclick="window.playCustomAudioTrack('${d.id}')" style="background: ${l?"#ef4444":"#10b981"}; color: white; border: none; padding: 4px 10px; border-radius: 8px; font-size: 0.72rem; font-weight: 800; cursor: pointer;">
                      ${l?"⏸️ توقف":"▶️ پخش"}
                    </button>
                    <button type="button" onclick="window.deleteCustomAudioTrack('${d.id}')" style="background: rgba(239,68,68,0.15); color: #f87171; border: 1px solid rgba(239,68,68,0.3); padding: 4px 8px; border-radius: 8px; font-size: 0.72rem; cursor: pointer;" title="حذف آهنگ">
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
  `}typeof window<"u"&&(window.selectAmbientSound=o=>{const e=Lt.find(t=>t.id===o);e&&Ce.playAmbient(e.id,e.url).then(()=>{window.renderApp&&window.renderApp()})},window.toggleAmbientAudio=(o="lofi_study")=>{Ce.activeSoundType?(Ce.stopSound(),window.renderApp&&window.renderApp()):window.selectAmbientSound(o)},window.setAmbientVolume=o=>{const e=parseFloat(o)/100;Ce.setVolume(e)},window.handleCustomAudioUpload=async o=>{var t,n;const e=(n=(t=o.target)==null?void 0:t.files)==null?void 0:n[0];if(e)try{const a=await He.saveTrack(e,e.name);window.customAudioTracksList=await He.getTracks(),window.showToast&&window.showToast(`آهنگ «${a.name}» با موفقیت ذخیره شد! 🎵`,"success"),window.renderApp&&window.renderApp()}catch(a){console.error("Custom audio upload error:",a),window.showToast&&window.showToast("خطا در ذخیره فایل صوتی در دیتابیس","error")}},window.playCustomAudioTrack=async o=>{if(Ce.activeSoundType===o){Ce.stopSound(),window.renderApp&&window.renderApp();return}const t=(window.customAudioTracksList||await He.getTracks()).find(n=>n.id===o);if(t&&t.blob){const n=URL.createObjectURL(t.blob);Ce.playAmbient(t.id,n).then(()=>{window.renderApp&&window.renderApp()})}else window.showToast&&window.showToast("فایل صوتی یافت نشد.","error")},window.deleteCustomAudioTrack=async o=>{Ce.activeSoundType===o&&Ce.stopSound(),await He.deleteTrack(o),window.customAudioTracksList=await He.getTracks(),window.showToast&&window.showToast("آهنگ با موفقیت حذف شد 🗑️","info"),window.renderApp&&window.renderApp()});const _t=[{id:"یادگیری",label:"یادگیری",icon:"🧠",desc:"مطالعه درسنامه و مفهومی"},{id:"تست‌زنی",label:"تست‌زنی",icon:"🎯",desc:"حل تست آموزشی و زمان‌دار"},{id:"مرور",label:"مرور",icon:"🔄",desc:"مرور خلاصه، فلش‌کارت و یادداشت"},{id:"جمع‌بندی",label:"جمع‌بندی",icon:"📑",desc:"جمع‌بندی سرفصل و آزمون جامع"}];typeof window<"u"&&(window.closeQuickActivityModal=function(){try{const o=document.getElementById("modal-fab-activity-registration");o&&(o.style.display="none",o.classList.remove("active"))}catch(o){console.warn("[closeQuickActivityModal] DOM hide error:",o)}try{typeof window.closeFabActivityModal=="function"?window.closeFabActivityModal():window.appState&&(window.appState.activeModal=null,typeof window.renderApp=="function"&&window.renderApp())}catch(o){console.warn("[closeQuickActivityModal] state update error:",o)}},window.showLiveTimerSection=function(){try{var o=document.getElementById("section-live-timer");o&&(o.style.display="block");var e=document.getElementById("section-manual-log");e&&(e.style.display="none");try{var t=document.getElementById("fab-timer-section");t&&t!==o&&(t.style.display="block");var n=document.getElementById("fab-manual-section");n&&n!==e&&(n.style.display="none")}catch{}var a=document.getElementById("btn-mode-timer");a&&a.classList.add("active");var r=document.getElementById("btn-mode-manual");r&&r.classList.remove("active")}catch{}try{window.fabActivityState=window.fabActivityState||{},window.fabActivityState.activeTab="timer"}catch{}},window.showManualLogSection=function(){try{var o=document.getElementById("section-live-timer");o&&(o.style.display="none");var e=document.getElementById("section-manual-log");e&&(e.style.display="block");try{var t=document.getElementById("fab-timer-section");t&&t!==o&&(t.style.display="none");var n=document.getElementById("fab-manual-section");n&&n!==e&&(n.style.display="block")}catch{}var a=document.getElementById("btn-mode-timer");a&&a.classList.remove("active");var r=document.getElementById("btn-mode-manual");r&&r.classList.add("active")}catch{}try{window.fabActivityState=window.fabActivityState||{},window.fabActivityState.activeTab="manual"}catch{}},window.switchFabActivityTab=function(o,e){try{e&&e.preventDefault&&e.preventDefault()}catch{}try{e&&e.stopPropagation&&e.stopPropagation()}catch{}try{const t=o==="manual"?"manual":"timer";if(t==="manual")try{window.showManualLogSection()}catch{}else try{window.showLiveTimerSection()}catch{}try{const n=document.getElementById("fab-timer-section"),a=document.getElementById("fab-manual-section");n&&(n.style.display=t==="timer"?"block":"none"),a&&(a.style.display=t==="manual"?"block":"none")}catch{}window.fabActivityState=window.fabActivityState||{},window.fabActivityState.activeTab=t}catch(t){console.warn("[switchFabActivityTab] error:",t)}},window._fabTabDelegationAttached||(window._fabTabDelegationAttached=!0,document.addEventListener("click",o=>{try{const e=o.target&&o.target.closest?o.target.closest(".btn-fab-modal-tab"):null;if(!e||!e.closest("#modal-fab-activity-registration"))return;const t=e.getAttribute("data-tab")||e.getAttribute("data-mode");(t==="timer"||t==="manual")&&(o.preventDefault(),o.stopPropagation(),window.switchFabActivityTab(t,o))}catch{}})));function Uo(o={}){var f,k;const e=window.fabActivityState||{activeTab:"timer",timerType:"pomodoro",categoryCode:null,subject:"",studyType:"یادگیری",startTime:"08:00",endTime:"09:30",durationMins:90,testCorrect:0,testWrong:0,testUnanswered:0},t=u=>String(u).replace(/[0-9]/g,x=>"۰۱۲۳۴۵۶۷۸۹"[x]),n=(typeof p<"u"?p.getCategories():[])||[],a=n.filter(u=>Ee(u)),r=e.categoryCode||((f=a[0])==null?void 0:f.code)||((k=n[0])==null?void 0:k.code)||"ع-س",i=typeof p<"u"&&typeof p.getUniqueLoggedTopics=="function"?p.getUniqueLoggedTopics(r):[],d=((u,x)=>{try{const[y,h]=(u||"08:00").split(":").map(Number),[_,m]=(x||"09:30").split(":").map(Number);if(!isNaN(y)&&!isNaN(h)&&!isNaN(_)&&!isNaN(m)){let w=y*60+h,T=_*60+m;T<w&&(T+=24*60);const A=T-w;return A>0?A:60}}catch{}return 60})(e.startTime,e.endTime);e.durationMins=d;const l=Math.max(0,parseInt(e.testCorrect)||0),c=Math.max(0,parseInt(e.testWrong)||0),g=Math.max(0,parseInt(e.testUnanswered)||0),b=l+c+g;return`
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
                ${a.map(u=>`
                  <button type="button" class="btn-fab-cat-chip ${u.code===r?"active":""}" data-code="${u.code}" data-title="${u.title}" onclick="window.handleSelectManualSubject && window.handleSelectManualSubject(this, '${u.title}', '${u.code}')" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 12px; border-radius: 12px; border: 1px solid ${u.code===r?"#10b981":"rgba(255,255,255,0.08)"}; background: ${u.code===r?"rgba(16,185,129,0.2)":"#1f2029"}; color: ${u.code===r?"#34d399":"#e4e4e7"}; font-size: 0.8rem; font-weight: 800; cursor: pointer; white-space: nowrap;">
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
                ${i.map(u=>`<option value="${u}"></option>`).join("")}
              </datalist>
            </div>

            <!-- 3. Study-Type Pills (یادگیری، تست‌زنی، مرور، جمع‌بندی) -->
            <div style="margin-bottom: 18px;">
              <label style="display: block; font-size: 0.78rem; font-weight: 800; color: #a1a1aa; margin-bottom: 8px;">
                ۳. فاز / نوع مطالعه (الزامی):
              </label>

              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;" id="fab-timer-phase-container">
                ${_t.map(u=>{const x=e.studyType===u.id||e.selectedPhase===u.id||!e.studyType&&!e.selectedPhase&&u.id==="یادگیری";return`
                    <button type="button" class="btn-phase-chip btn-fab-study-pill ${x?"active":""}" data-phase="${u.id}" data-pill="${u.id}" onclick="event.preventDefault(); event.stopPropagation(); window.selectStudyPhase && window.selectStudyPhase(this, '${u.id}')" style="padding: 10px 12px; border-radius: 14px; border: 1.5px solid ${x?"#10b981":"rgba(255,255,255,0.08)"}; background: ${x?"rgba(16,185,129,0.2)":"#1f2029"}; color: ${x?"#ffffff":"#e4e4e7"}; font-size: 0.82rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 8px; text-align: right; transition: all 0.15s ease;">
                      <span style="font-size: 1.2rem;">${u.icon}</span>
                      <div>
                        <strong style="display: block; font-size: 0.84rem;">${u.label}</strong>
                        <span style="font-size: 0.68rem; color: ${x?"#a7f3d0":"#71717a"}; font-weight: normal;">${u.desc}</span>
                      </div>
                    </button>
                  `}).join("")}
              </div>
              <input type="hidden" id="fab-timer-phase" value="${e.studyType||e.selectedPhase||"یادگیری"}" />
            </div>

            <!-- 🎵 Ambient Focus Sound Player Widget -->
            ${Jt()}

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
                  ${be(d)}
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
              <input type="hidden" id="fab-manual-duration-input" value="${d}" />
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
                ${a.map(u=>`
                  <button type="button" class="btn-fab-cat-chip ${u.code===r?"active":""}" data-code="${u.code}" data-title="${u.title}" onclick="window.handleSelectManualSubject && window.handleSelectManualSubject(this, '${u.title}', '${u.code}')" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 12px; border-radius: 12px; border: 1px solid ${u.code===r?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${u.code===r?"#7c3aed":"#1f2029"}; color: ${u.code===r?"#ffffff":"#e4e4e7"}; font-size: 0.8rem; font-weight: 800; cursor: pointer; white-space: nowrap;">
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
                ${i.map(u=>`<option value="${u}"></option>`).join("")}
              </datalist>
            </div>

            <!-- 3. Study-Type Pills -->
            <div style="margin-bottom: 16px;">
              <label style="display: block; font-size: 0.78rem; font-weight: 800; color: #a1a1aa; margin-bottom: 8px;">
                فاز / نوع مطالعه:
              </label>

              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;" id="fab-manual-phase-container">
                ${_t.map(u=>{const x=e.studyType===u.id||e.selectedPhase===u.id||!e.studyType&&!e.selectedPhase&&u.id==="یادگیری";return`
                    <button type="button" class="btn-phase-chip btn-fab-study-pill ${x?"active":""}" data-phase="${u.id}" data-pill="${u.id}" onclick="event.preventDefault(); event.stopPropagation(); window.selectStudyPhase && window.selectStudyPhase(this, '${u.id}')" style="padding: 8px 4px; border-radius: 12px; border: 1px solid ${x?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${x?"#7c3aed":"#1f2029"}; color: ${x?"#ffffff":"#e4e4e7"}; font-size: 0.78rem; font-weight: 800; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 2px;">
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
                  مجموع: ${t(b)} تست
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
                  <input type="number" id="input-fab-test-unanswered" min="0" value="${g}" oninput="window.updateFabTestScorePreview && window.updateFabTestScorePreview()" style="width: 100%; box-sizing: border-box; height: 38px; text-align: center; font-size: 1.1rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(161,161,170,0.2); border-radius: 8px; color: #a1a1aa;" />
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
  `}const co=o=>String(o).replace(/[0-9]/g,e=>"۰۱۲۳۴۵۶۷۸۹"[e]);function po(){const o=new Date().getHours();let e=350;o>=6&&o<12?e=480:o>=12&&o<18?e=520:o>=18&&o<23?e=610:o>=23||o<2?e=280:e=120;const t=Math.floor(Math.sin(Date.now()/8e3)*18)+Date.now()%7;return e+t}function Gt(){const o=typeof localStorage<"u"&&(localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_nickname")||localStorage.getItem("planex_leaderboard_nickname"))||"";if(o&&!je(o))return o.trim();let e=null;try{e=JSON.parse(localStorage.getItem("planex_user_profile")||localStorage.getItem("planex_profile")||"null")}catch{}if(e!=null&&e.nickname&&!je(e.nickname))return e.nickname.trim();if(e!=null&&e.name&&!je(e.name))return e.name.trim();let t=null;try{t=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}return t!=null&&t.full_name&&!je(t.full_name)?t.full_name.trim():t!=null&&t.name&&!je(t.name)?t.name.trim():t!=null&&t.first_name&&!je(t.first_name)?t.first_name.trim():""}function Ut(){try{let o=null;try{o=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}let e=null;try{e=JSON.parse(localStorage.getItem("planex_user_profile")||"null")}catch{}const n=localStorage.getItem("planex_user_avatar")||""||(e==null?void 0:e.avatar)||(e==null?void 0:e.avatar_url)||(e==null?void 0:e.photo)||(e==null?void 0:e.photoUrl)||(o==null?void 0:o.avatar_url)||(o==null?void 0:o.photo_url)||"",a=Gt(),r=!!(a||n||o&&(o.id||o.telegram_id||o.phone||o.phone_number)),i=a||(r?"کاربر":"ورود"),s=document.getElementById("btn-header-user-account");if(s){const d=s.querySelector("span:last-child");d&&d.textContent!==i&&(d.textContent=i);const l=s.querySelector("img");if(n)if(l)l.src!==n&&(l.src=n);else{const c=s.querySelector("span:first-child");if(c&&c.textContent.includes("👤")){const g=document.createElement("img");g.src=n,g.style.cssText="width: 22px; height: 22px; border-radius: 50%; object-fit: cover; aspect-ratio: 1 / 1; border: 1px solid rgba(16, 185, 129, 0.5);",g.onerror=function(){this.onerror=null,this.src="https://api.dicebear.com/7.x/avataaars/svg?seed=planex"},c.replaceWith(g)}}s.style.borderColor=r?"rgba(16, 185, 129, 0.4)":"rgba(255, 255, 255, 0.08)",s.style.color=r?"#34d399":"#a1a1aa"}}catch(o){console.warn("[Header] updateHeaderDOM error:",o)}}typeof window<"u"&&(window.updateHeaderDOM=Ut);if(typeof window<"u"&&!window._headerProfileListenerAttached){window._headerProfileListenerAttached=!0;const o=()=>{Ut(),typeof window.renderApp=="function"&&window.renderApp()};window.addEventListener("profileUpdated",o),window.addEventListener("auth-changed",o),window.addEventListener("storage",e=>{(e.key==="planex_user_avatar"||e.key==="planex_user_profile"||e.key==="planex_auth_user"||e.key==="planex_user_nickname")&&o()})}function Fo(o=null){let e=null;try{e=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}let t=null;try{t=JSON.parse(localStorage.getItem("planex_user_profile")||localStorage.getItem("planex_profile")||"null")}catch{}const a=localStorage.getItem("planex_user_avatar")||""||(t==null?void 0:t.avatar)||(t==null?void 0:t.avatar_url)||(t==null?void 0:t.photo)||(t==null?void 0:t.photoUrl)||(e==null?void 0:e.avatar_url)||(e==null?void 0:e.photo_url)||"",r=Gt(),i=!!(r||a||e&&(e.id||e.telegram_id||e.email||e.phone||e.phone_number)),s=r||(i?"کاربر":"ورود"),d=po();return`
    <header class="app-header" style="padding: 6px 12px; min-height: 44px; display: flex; align-items: center; justify-content: space-between; overflow: hidden; width: 100%; box-sizing: border-box; gap: 8px;">
      <div class="header-brand" style="display: flex; align-items: center; gap: 8px; flex-shrink: 0;">
        <img src="./logo-transparent.png" alt="PlanEx Logo" style="width: 24px; height: 24px; border-radius: 6px; object-fit: contain;" />
        <div class="header-title" style="font-weight: 800; font-size: 0.92rem; letter-spacing: -0.3px; color: #e4e4e7;">PlanEx</div>
      </div>

      <!-- Single Sleek Top Live Presence Badge -->
      <div class="header-presence-badge" onclick="if(window.openFabActivityModal) window.openFabActivityModal();" style="display: flex; align-items: center; gap: 6px; background: rgba(16, 185, 129, 0.12); border: 1px solid rgba(16, 185, 129, 0.3); padding: 4px 10px; border-radius: 20px; font-size: 0.72rem; font-weight: 800; color: #34d399; cursor: pointer; white-space: nowrap; transition: all 0.2s ease; overflow: hidden; text-overflow: ellipsis; max-width: 260px;" title="شروع مطالعه با همکاران آنلاین">
        <span style="width: 7px; height: 7px; border-radius: 50%; background: #10b981; flex-shrink: 0; box-shadow: 0 0 10px #10b981; animation: livePulse 1.8s infinite ease-in-out;"></span>
        <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">🟢 ${co(d)} نفر در حال مطالعه با تو هستند</span>
      </div>

      <div class="header-actions-wrapper" style="display: flex; align-items: center; justify-content: flex-end; gap: 6px; flex-shrink: 0;">
        <!-- ☕ Hamibash Support Link -->
        <a href="https://hamibash.com/planexmedicalaa" target="_blank" rel="noopener noreferrer" id="btn-hamibash-link" class="btn-header-action" style="background: rgba(239, 68, 68, 0.14); border: 1px solid rgba(239, 68, 68, 0.35); color: #f87171; padding: 4px 10px; border-radius: 10px; display: flex; align-items: center; gap: 5px; text-decoration: none; font-size: 0.74rem; font-weight: 700; flex-shrink: 0; transition: all 0.2s ease;" title="حمایت از ما در حامی‌باش">
          <span style="font-size: 0.82rem;">☕</span>
          <span>حمایت از ما</span>
        </a>

        <!-- ❤️ Support Modal Trigger Button -->
        <button id="btn-support-modal" class="btn-header-action" onclick="if(window.appState){ window.appState.activeModal = 'support'; window.renderApp(); }" style="background: rgba(168, 85, 247, 0.12); border: 1px solid rgba(168, 85, 247, 0.3); color: #c084fc; padding: 4px 10px; border-radius: 10px; display: flex; align-items: center; gap: 5px; cursor: pointer; font-size: 0.74rem; font-weight: 700; flex-shrink: 0;" title="شبکه‌ها و راهنما">
          <span style="font-size: 0.82rem;">❤️</span>
          <span>راهنما</span>
        </button>

        <!-- User Profile / Login Button -->
        <button type="button" onclick="if(window.appState){ window.appState.activeModal = 'login'; window.renderApp(); }" id="btn-header-user-account" class="btn-header-action" style="background: #1f2029; border: 1px solid ${i?"rgba(16, 185, 129, 0.4)":"rgba(255, 255, 255, 0.08)"}; color: ${i?"#34d399":"#a1a1aa"}; padding: 3px 8px; border-radius: 10px; display: flex; align-items: center; gap: 6px; cursor: pointer; flex-shrink: 0;" title="👤 حساب کاربری و مشخصات">
          ${a?`
            <img src="${a}" style="width: 22px; height: 22px; border-radius: 50%; object-fit: cover; aspect-ratio: 1 / 1; border: 1px solid rgba(16, 185, 129, 0.5);" onerror="this.onerror=null; this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=planex';" />
          `:`
            <span style="font-size: 0.85rem; width: 22px; height: 22px; display: inline-flex; align-items: center; justify-content: center; background: rgba(255,255,255,0.06); border-radius: 50%;">👤</span>
          `}
          <span style="font-size: 0.74rem; font-weight: 700; max-width: 75px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${s}</span>
        </button>
      </div>
    </header>
  `}function Ho(o=0){const e=o===5||o==="5"||o==="leaderboard"||o==="competition",t=[{id:0,title:"داشبورد",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>'},{id:1,title:"برنامه‌ریزی",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>'},{id:2,title:"روتین‌ها",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'},{id:"leaderboard",title:"رقابت 🏆",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2.34c0-.52-.2-1.02-.57-1.39A6.98 6.98 0 0 1 4 9V4h16v5a6.98 6.98 0 0 1-1.43 4.27c-.37.37-.57.87-.57 1.39V17c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2v7"/></svg>'},{id:3,title:"ابزارها",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>'},{id:4,title:"مقالات",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>'}],n=t.slice(0,3),a=t.slice(3),r=i=>`
      <div class="nav-item ${(i.id==="leaderboard"||i.id==="competition")&&e||i.id===o||String(i.id)===String(o)?"active":""}" data-tab="${i.id}">
        ${i.icon}
        <span>${i.title}</span>
      </div>
    `;return`
    <nav class="bottom-nav">
      ${n.map(r).join("")}
      
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

      ${a.map(r).join("")}
    </nav>
  `}const Wo={isSessionActive:!1,realServerCount:0,getUserId(){try{const e=localStorage.getItem("planex_user_account");if(e){const t=JSON.parse(e);if(t&&(t.id||t.username))return String(t.id||t.username)}}catch{}let o=localStorage.getItem("planex_pomodoro_device_id");return o||(o="pomo_"+Math.random().toString(36).substring(2,11)+"_"+Date.now().toString(36),localStorage.setItem("planex_pomodoro_device_id",o)),o},getNaturalTimeOfDayBaseline(){let o=new Date().getHours(),e=new Date().getMinutes();try{const r=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Tehran",hour:"numeric",hour12:!1}).format(new Date),i=parseInt(r,10);isNaN(i)||(o=i);const s=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Tehran",minute:"numeric"}).format(new Date),d=parseInt(s,10);isNaN(d)||(e=d)}catch{}let t=25;const n=e/60;if(o>=6&&o<9){const r=(o-6+n)/3;return t=Math.round(15+r*10),Math.min(25,Math.max(15,t))}if(o>=9&&o<17){const r=[27,32,36,38,32,28,34,38],i=o-9,s=r[i]||30,d=i+1<r.length?r[i+1]:38;return t=Math.round(s+(d-s)*n),Math.min(40,Math.max(25,t))}if(o>=17&&o<23){const r=[40,47,53,52,46,38],i=o-17,s=r[i]||45,d=i+1<r.length?r[i+1]:36;return t=Math.round(s+(d-s)*n),Math.min(55,Math.max(35,t))}return t={23:11,0:9,1:7,2:6,3:5,4:7,5:10}[o]||7,Math.min(12,Math.max(5,t))},getDisplayActiveUsers(){const o=this.getNaturalTimeOfDayBaseline(),e=this.isSessionActive?1:0,t=Math.max(e,parseInt(this.realServerCount)||0);return o+t},async startSession(o=25,e=!0){if(!e)return this.isSessionActive=!1,{success:!0,count:this.getDisplayActiveUsers()};this.isSessionActive=!0;const t=this.getUserId();try{const n=await fetch(`${ue}/api/pomodoro/active.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"start",userId:t,durationMinutes:parseInt(o)||25})}),a=await n.text();let r=null;try{r=a?JSON.parse(a):null}catch{r=null}if(n.ok&&r){const i=parseInt(r.count??r.activeUsersCount)||1;return this.realServerCount=Math.max(1,i),{success:!0,count:this.getDisplayActiveUsers()}}}catch(n){console.warn("[PomodoroService] Server communication error on start:",n)}return this.realServerCount=Math.max(1,this.realServerCount||1),{success:!0,count:this.getDisplayActiveUsers()}},async stopSession(){this.isSessionActive=!1;const o=this.getUserId();try{const e=await fetch(`${ue}/api/pomodoro/active.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"stop",userId:o})}),t=await e.text();let n=null;try{n=t?JSON.parse(t):null}catch{n=null}if(e.ok&&n){const a=parseInt(n.count??n.activeUsersCount)||0;return this.realServerCount=Math.max(0,a),{success:!0,count:this.getDisplayActiveUsers()}}}catch(e){console.warn("[PomodoroService] Server communication error on stop:",e)}return this.realServerCount=0,{success:!0,count:this.getDisplayActiveUsers()}},async fetchActiveCount(){try{const o=await fetch(`${ue}/api/pomodoro/active.php`),e=await o.text();let t=null;try{t=e?JSON.parse(e):null}catch{t=null}if(o.ok&&t){const n=parseInt(t.count??t.activeUsersCount)||0;return this.realServerCount=n,{success:!0,count:this.getDisplayActiveUsers()}}}catch(o){console.warn("[PomodoroService] Server communication error on fetch count:",o)}return{success:!1,count:this.getDisplayActiveUsers()}}};typeof window<"u"&&(window.isUserActivelyTyping=!1,typeof document<"u"&&(document.addEventListener("focusin",o=>{const e=o.target;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.hasAttribute&&e.hasAttribute("contenteditable")||e.isContentEditable)&&(window.isUserActivelyTyping=!0)}),document.addEventListener("focusout",o=>{const e=o.target;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.hasAttribute&&e.hasAttribute("contenteditable")||e.isContentEditable)&&(window.isUserActivelyTyping=!1)})));function $t(o){if(!o)return"";let e=String(o).trim();return e=e.replace(/[۰-۹]/g,t=>"۰۱۲۳۴۵۶۷۸۹".indexOf(t)),e=e.replace(/[٠-٩]/g,t=>"٠١٢٣٤٥٦٧٨٩".indexOf(t)),e=e.replace(/[^0-9]/g,""),e.startsWith("00989")?e="0"+e.slice(4):e.startsWith("0989")?e="0"+e.slice(3):e.startsWith("989")?e="0"+e.slice(2):e.startsWith("9")&&e.length===10&&(e="0"+e),e}const ve={getOrCreateSyncToken(){return p.getOrCreatePersonalSyncToken()},setSyncToken(o){return p.setPersonalSyncToken(o)},getSyncStatus(){return p.getPersonalSyncInfo()},exportLocalState(){try{const o=p.exportAllDataJSON();return JSON.parse(o)}catch(o){console.warn("[PersonalSync] db.exportAllDataJSON failed, using fallback:",o);const e={};for(let t=0;t<localStorage.length;t++){const n=localStorage.key(t);if(n&&(n.startsWith("planex_")||n.startsWith("theme_")||n.startsWith("app_")||n.startsWith("timer_")))try{e[n]=JSON.parse(localStorage.getItem(n))}catch{e[n]=localStorage.getItem(n)}}return e}},importLocalState(o){if(!o)return!1;try{return p.importAllDataJSON(o)}catch(e){return console.error("[PersonalSync] Import failed:",e),!1}},async pushToCloud(o=null,e=null,t=null){var u,x,y,h,_;let n=null;try{n=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}const a=p&&typeof p.getUserProfile=="function"?p.getUserProfile():{},r=$t(o||(n==null?void 0:n.phone)||(n==null?void 0:n.phone_number)||a.phone||""),i=(n==null?void 0:n.password)||"",s=this.exportLocalState();if(!r)return{success:!1,message:"شماره تلفن کاربر یافت نشد."};let d=[];try{d=JSON.parse(localStorage.getItem("planex_my_groups")||"[]")}catch{d=[]}let l=[];try{const m=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),w=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),T=new Map;[...m,...w].forEach(A=>{if(!A||typeof A!="object")return;const z=A.id||`${A.date||A.dateStr}_${A.startTime||A.timestamp||A.subject}_${A.duration||A.minutes}`;T.set(z,A)}),l=Array.from(T.values())}catch{l=[]}if(e)try{localStorage.setItem("planex_user_nickname",e),localStorage.setItem("planex_leaderboard_nickname",e)}catch{}if(t)try{localStorage.setItem("planex_user_avatar",t)}catch{}const c=typeof localStorage<"u"&&(localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_leaderboard_nickname"))||"",g=e||c||a.name||a.nickname||(n==null?void 0:n.full_name)||(n==null?void 0:n.name)||"کاربر پلنکس",b=typeof localStorage<"u"&&localStorage.getItem("planex_user_avatar")||"",f=t||b||a.avatar||a.avatar_url||a.photo||(n==null?void 0:n.avatar_url)||(n==null?void 0:n.avatar)||(n==null?void 0:n.photo_url)||"";if(s&&typeof s=="object"){if(s.planex_user_nickname=g,s.planex_nickname=g,s.planex_leaderboard_nickname=g,s.planex_user_avatar=f,delete s["planex_user_profile.name"],delete s["planex_user_profile.nickname"],delete s["planex_user_profile.avatar"],s.planex_user_profile||(s.planex_user_profile=a),s.planex_user_profile&&typeof s.planex_user_profile=="object"&&(s.planex_user_profile.name=g,s.planex_user_profile.nickname=g,s.planex_user_profile.avatar=f,s.planex_user_profile.avatar_url=f),s.planex_auth_user)try{let m=typeof s.planex_auth_user=="string"?JSON.parse(s.planex_auth_user):s.planex_auth_user;m.name=g,m.full_name=g,m.nickname=g,m.avatar_url=f,m.avatar=f,s.planex_auth_user=typeof s.planex_auth_user=="string"?JSON.stringify(m):m}catch{}if(s.planex_user_account)try{let m=typeof s.planex_user_account=="string"?JSON.parse(s.planex_user_account):s.planex_user_account;m.name=g,m.full_name=g,m.nickname=g,m.avatar_url=f,m.avatar=f,s.planex_user_account=typeof s.planex_user_account=="string"?JSON.stringify(m):m}catch{}}const k={phone:r,password:i,study_logs:l,rooms:d,backupData:s,appState:s,name:g,nickname:g,planex_user_nickname:g,avatar:f,avatar_url:f,photo_url:f,planex_user_avatar:f,updatedAt:Date.now()};try{const m=await fetch(`${ue}/api/sync.php?_t=${Date.now()}`,{method:"POST",cache:"no-store",headers:{"Content-Type":"application/json","Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"},body:JSON.stringify({action:"save",...k})}),w=await m.text();let T=null;try{T=w?JSON.parse(w):null}catch{}if(m.ok&&T&&T.success){T.backupData&&typeof T.backupData=="object"&&this.importLocalState(T.backupData);const A=T.name||((u=T.user)==null?void 0:u.name)||((x=T.backupData)==null?void 0:x.planex_user_nickname)||g,z=T.avatar_url||T.avatar||((y=T.user)==null?void 0:y.avatar_url)||((h=T.user)==null?void 0:h.avatar)||((_=T.backupData)==null?void 0:_.planex_user_avatar)||f,B=z&&!z.includes("dicebear.com")?z:f||z;if(A)try{localStorage.setItem("planex_user_nickname",A),localStorage.setItem("planex_leaderboard_nickname",A),localStorage.setItem("planex_nickname",A);let D=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}");D.name=A,D.full_name=A,D.nickname=A,localStorage.setItem("planex_auth_user",JSON.stringify(D)),localStorage.setItem("planex_user_account",JSON.stringify(D));let I=p&&typeof p.getUserProfile=="function"?p.getUserProfile()||{}:{};I.name=A,I.nickname=A,p&&typeof p.setUserProfile=="function"&&p.setUserProfile(I)}catch{}if(B)try{localStorage.setItem("planex_user_avatar",B);let D=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}");D.avatar_url=B,D.photo_url=B,D.avatar=B,localStorage.setItem("planex_auth_user",JSON.stringify(D)),localStorage.setItem("planex_user_account",JSON.stringify(D));let I=p&&typeof p.getUserProfile=="function"?p.getUserProfile()||{}:{};I.avatar=B,I.avatar_url=B,I.photo=B,I.photoUrl=B,p&&typeof p.setUserProfile=="function"&&p.setUserProfile(I)}catch{}if(p.markPersonalSyncSuccess(),Array.isArray(T.rooms)&&T.rooms.length>0&&(localStorage.setItem("planex_my_groups",JSON.stringify(T.rooms)),localStorage.setItem("planex_my_rooms",JSON.stringify(T.rooms)),p&&typeof p.setUserGroups=="function"&&p.setUserGroups(T.rooms)),Array.isArray(T.study_logs)&&T.study_logs.length>0&&(p&&typeof p.saveStudyLogs=="function"?p.saveStudyLogs(T.study_logs):(localStorage.setItem("planex_study_logs",JSON.stringify(T.study_logs)),localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(T.study_logs)))),p&&(p._breakdownMemoMap={}),typeof window<"u"){if(typeof window.updateHeaderDOM=="function"&&window.updateHeaderDOM(),A){document.querySelectorAll("#btn-header-user-account span:last-child, .user-nickname-display, #profile-display-name-val, .profile-name-text").forEach(I=>{I.tagName==="INPUT"?document.activeElement!==I&&I.value!==A&&(I.value=A):document.activeElement!==I&&I.innerText!==A&&(I.innerText=A)});const D=document.getElementById("profile-display-name");D&&document.activeElement!==D&&D.value!==A&&(D.value=A)}if(B){const D=B.includes("?")?`&t=${Date.now()}`:`?t=${Date.now()}`,I=B.startsWith("http")?`${B}${D}`:B;document.querySelectorAll("#btn-header-user-account img, #main-header-avatar, #main-avatar-preview, .user-avatar-img").forEach(P=>{P&&P.tagName==="IMG"&&P.src!==I&&(P.src=I)})}if(window.dispatchEvent(new CustomEvent("profileUpdated")),window.dispatchEvent(new CustomEvent("auth-changed")),window.dispatchEvent(new CustomEvent("study-logs-updated")),window.dispatchEvent(new CustomEvent("sessions-updated")),window.dispatchEvent(new CustomEvent("activity-saved",{detail:{sync:!0}})),window.dashboardChartInstances&&(window.dashboardChartInstances=null),typeof window.updateCharts=="function"&&window.updateCharts(),typeof window.renderApp=="function"){const D=window.scrollY||0;window.renderApp(),window.scrollTo(0,D)}}return{success:!0,phone:r,updatedAt:Date.now(),message:"☁️ اطلاعات و اتاق‌های مطالعه شما با موفقیت با شماره موبایل همگام‌سازی شد."}}else return{success:!1,message:(T==null?void 0:T.message)||`خطا در همگام‌سازی ابری (HTTP ${m.status})`}}catch(m){return console.error("[Sync Error]",m.name,m.message),alert(`Sync Error: ${m.message}`),{success:!1,message:"خطا در ارتباط با سرور: "+m.message}}},async pullFromCloud(o=null){var a,r,i,s,d,l,c,g,b,f,k,u,x,y;if(typeof document<"u"){const h=document.activeElement;if(h&&(h.tagName==="INPUT"||h.tagName==="TEXTAREA"||h.isContentEditable))return console.log("Sync aborted: User is typing"),{success:!1,message:"همگام‌سازی موقتاً متوقف شد زیرا در حال تایپ هستید."}}let e=null;try{e=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}const t=p&&typeof p.getUserProfile=="function"?p.getUserProfile():{},n=$t(o||(e==null?void 0:e.phone)||(e==null?void 0:e.phone_number)||t.phone||"");if(!n)return{success:!1,message:"شماره موبایل مشخص نیست."};try{const h=await fetch(`${ue}/api/sync.php?action=get&phone=${encodeURIComponent(n)}&_t=${Date.now()}`,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"}}),_=await h.text();let m=null;try{m=_?JSON.parse(_):null}catch{}if(h.ok&&m&&m.success){const w=((a=m.user)==null?void 0:a.name)||m.name||((r=m.backupData)==null?void 0:r.planex_user_nickname)||(typeof((i=m.backupData)==null?void 0:i.planex_user_profile)=="object"?(s=m.backupData.planex_user_profile)==null?void 0:s.name:null)||(typeof((d=m.backupData)==null?void 0:d.planex_user_profile)=="object"?(l=m.backupData.planex_user_profile)==null?void 0:l.nickname:null)||null,T=((c=m.user)==null?void 0:c.avatar_url)||((g=m.user)==null?void 0:g.avatar)||((b=m.user)==null?void 0:b.photo_url)||m.avatar_url||m.avatar||((f=m.backupData)==null?void 0:f.planex_user_avatar)||(typeof((k=m.backupData)==null?void 0:k.planex_user_profile)=="object"?(u=m.backupData.planex_user_profile)==null?void 0:u.avatar:null)||(typeof((x=m.backupData)==null?void 0:x.planex_user_profile)=="object"?(y=m.backupData.planex_user_profile)==null?void 0:y.avatar_url:null)||null,A=typeof localStorage<"u"&&localStorage.getItem("planex_user_avatar")||"",z=T&&!T.includes("dicebear.com")?T:T||A;let B=!1;if(m.backupData&&typeof m.backupData=="object"){const D=C=>{if(C&&C.early_bird_daily_status)try{const J=typeof C.early_bird_daily_status=="string"?JSON.parse(C.early_bird_daily_status):C.early_bird_daily_status,W=window.leaderboardService&&window.leaderboardService.getTodayDateStr?window.leaderboardService.getTodayDateStr():new Date().toLocaleDateString("fa-IR");J.date!==W&&(delete C.early_bird_daily_status,typeof window<"u"&&(window._forceEbWipe=!0))}catch{delete C.early_bird_daily_status,typeof window<"u"&&(window._forceEbWipe=!0)}};D(m.backupData),m.appState&&typeof m.appState=="object"&&D(m.appState),w&&!je(w)&&(m.backupData.planex_user_nickname=w,m.backupData.planex_user_profile||(m.backupData.planex_user_profile={}),m.backupData.planex_user_profile.name=w,m.backupData.planex_user_profile.nickname=w),z&&(m.backupData.planex_user_avatar=z,m.backupData.planex_user_profile||(m.backupData.planex_user_profile={}),m.backupData.planex_user_profile.avatar=z,m.backupData.planex_user_profile.avatar_url=z);const I=C=>{if(!C||typeof C!="object")return C;const J=JSON.parse(JSON.stringify(C)),W=["updatedAt","updated_at","last_sync","lastSync","timestamp","early_bird_daily_status"],G=K=>{if(Array.isArray(K))K.forEach(q=>G(q));else if(K&&typeof K=="object"){for(const q of W)q in K&&delete K[q];for(const q in K)if(Object.prototype.hasOwnProperty.call(K,q))if(typeof K[q]=="string"&&(K[q].startsWith("{")||K[q].startsWith("[")))try{const Z=JSON.parse(K[q]);G(Z),K[q]=JSON.stringify(Z)}catch{}else G(K[q])}};return G(J),J},P=JSON.stringify(I(this.exportLocalState()||{})),j=JSON.stringify(I(m.backupData));P!==j&&(B=!0,this.importLocalState(m.backupData))}if(w&&!je(w))try{localStorage.getItem("planex_user_nickname")!==w&&(B=!0),localStorage.setItem("planex_user_nickname",w),localStorage.setItem("planex_leaderboard_nickname",w),localStorage.setItem("planex_nickname",w);let I=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}");I.name=w,I.full_name=w,I.nickname=w,localStorage.setItem("planex_auth_user",JSON.stringify(I)),localStorage.setItem("planex_user_account",JSON.stringify(I));let P=p&&typeof p.getUserProfile=="function"?p.getUserProfile()||{}:{};P.name=w,P.nickname=w,p&&typeof p.setUserProfile=="function"&&p.setUserProfile(P)}catch(D){console.warn("[PersonalSync] Error updating pulled name:",D)}if(z)try{localStorage.getItem("planex_user_avatar")!==z&&(B=!0),localStorage.setItem("planex_user_avatar",z);let I=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}");I.avatar_url=z,I.photo_url=z,I.avatar=z,localStorage.setItem("planex_auth_user",JSON.stringify(I)),localStorage.setItem("planex_user_account",JSON.stringify(I));let P=p&&typeof p.getUserProfile=="function"?p.getUserProfile()||{}:{};P.avatar=z,P.avatar_url=z,P.photo=z,P.photoUrl=z,p&&typeof p.setUserProfile=="function"&&p.setUserProfile(P)}catch(D){console.warn("[PersonalSync] Error updating pulled avatar:",D)}if(Array.isArray(m.rooms)&&m.rooms.length>0){const D=localStorage.getItem("planex_my_groups")||"[]",I=JSON.stringify(m.rooms);D!==I&&(B=!0,localStorage.setItem("planex_my_groups",I),localStorage.setItem("planex_my_rooms",I),p&&typeof p.setUserGroups=="function"&&p.setUserGroups(m.rooms))}if(Array.isArray(m.study_logs)&&m.study_logs.length>0){const D=localStorage.getItem("planex_study_logs")||"[]",I=JSON.stringify(m.study_logs);D!==I&&(B=!0,p&&typeof p.saveStudyLogs=="function"?p.saveStudyLogs(m.study_logs):(localStorage.setItem("planex_study_logs",I),localStorage.setItem("planex_recent_activity_sessions",I)))}if(p&&B&&(p._breakdownMemoMap={}),p.markPersonalSyncSuccess(),typeof window<"u"){typeof window.updateHeaderDOM=="function"&&window.updateHeaderDOM();const D=w||localStorage.getItem("planex_user_nickname")||"",I=z||localStorage.getItem("planex_user_avatar")||"";if(D){document.querySelectorAll("#btn-header-user-account span:last-child, .user-nickname-display, #profile-display-name-val, .profile-name-text").forEach(j=>{j.tagName==="INPUT"?document.activeElement!==j&&j.value!==D&&(j.value=D):document.activeElement!==j&&j.innerText!==D&&(j.innerText=D)});const P=document.getElementById("profile-display-name");P&&document.activeElement!==P&&P.value!==D&&(P.value=D)}if(I){const P=I.includes("?")?`&t=${Date.now()}`:`?t=${Date.now()}`,j=I.startsWith("http")?`${I}${P}`:I;document.querySelectorAll("#btn-header-user-account img, #main-header-avatar, #main-avatar-preview, .user-avatar-img").forEach(C=>{C&&C.tagName==="IMG"&&C.src!==j&&(C.src=j)})}if(B&&(window.dispatchEvent(new CustomEvent("profileUpdated")),window.dispatchEvent(new CustomEvent("auth-changed")),window.dispatchEvent(new CustomEvent("study-logs-updated")),window.dispatchEvent(new CustomEvent("sessions-updated")),window.dispatchEvent(new CustomEvent("activity-saved",{detail:{sync:!0}})),window.dashboardChartInstances&&(window.dashboardChartInstances=null),typeof window.updateCharts=="function"&&window.updateCharts(),typeof window.renderApp=="function")){const P=window.scrollY||0;window.renderApp(),window.scrollTo(0,P)}typeof window<"u"&&window._forceEbWipe&&(window._forceEbWipe=!1,setTimeout(()=>{typeof ve<"u"&&typeof ve.pushToCloud=="function"&&ve.pushToCloud()},500))}return{success:!0,phone:n,data:m,message:"🎉 تمام اطلاعات، سوابق و اتاق‌های مطالعه با موفقیت بازیابی شدند!"}}else return{success:!1,message:(m==null?void 0:m.message)||"اطلاعاتی برای این شماره در سرور یافت نشد."}}catch(h){return console.error("[Sync Error]",h.name,h.message),alert(`Sync Error: ${h.message}`),{success:!1,message:"خطا در بازیابی اطلاعات: "+h.message}}}};let qe=null,ft=!1;function We(){if(typeof document>"u")return;const o=document.getElementById("cloud-sync-status-indicator");if(!o)return;const e=(typeof window<"u"?window.cloudSyncState:null)||"idle";let t="",n="همگام‌سازی خودکار ابری";e==="syncing"?(t=`
      <svg class="spin-sync" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
      </svg>
    `,n="در حال همگام‌سازی خودکار با فضای ابری..."):e==="synced"?(t=`
      <span style="font-size: 0.82rem; position: relative; display: inline-flex; align-items: center; justify-content: center;">
        ☁️<span style="position: absolute; bottom: -1px; right: -2px; width: 6px; height: 6px; background: #10b981; border-radius: 50%; box-shadow: 0 0 4px #10b981;"></span>
      </span>
    `,n="همگام‌سازی خودکار: اطلاعات در فضای ابری ذخیره شدند ✅"):e==="offline"?(t=`
      <span style="font-size: 0.82rem; opacity: 0.5;">☁️</span>
    `,n="آفلاین — ذخیره در دستگاه انجام شد؛ همگام‌سازی پس از اتصال اینترنت فعال می‌شود"):(t='<span style="font-size: 0.82rem;">☁️</span>',n="همگام‌سازی ابری — کلیک برای همگام‌سازی آنی"),o.innerHTML=t,o.title=n}async function uo(o=!1){if(typeof window>"u"||!o)return;window.cloudSyncState="syncing",We();const e=async()=>{if(!ft){ft=!0;try{if(window.navigator&&!window.navigator.onLine){window.cloudSyncState="offline",We();return}typeof ve<"u"&&typeof ve.pushToCloud=="function"&&await ve.pushToCloud();const t=window.leaderboardService;t&&typeof t.syncUserScore=="function"&&await t.syncUserScore(!0).catch(n=>console.warn("[AutoSync] Squad score sync deferred:",n)),window.cloudSyncState="synced",We(),window.dispatchEvent(new CustomEvent("cloud-sync-complete",{detail:{timestamp:Date.now()}})),setTimeout(()=>{window.cloudSyncState==="synced"&&(window.cloudSyncState="idle",We())},3500)}catch(t){console.warn("[AutoSync] Background sync deferred:",t),window.cloudSyncState="error",We()}finally{ft=!1}}};o?(qe&&clearTimeout(qe),e().catch(t=>console.warn("[AutoSync] Error:",t))):(qe&&clearTimeout(qe),qe=setTimeout(()=>{e().catch(t=>console.warn("[AutoSync] Debounced error:",t))},500))}let Tt=0,yt=null,mt=null;function Fe(o=!1){if(typeof document<"u"){const t=document.activeElement;if(t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable)){console.log("Sync aborted: User is typing");return}}if(typeof document<"u"&&(document.visibilityState!=="visible"||typeof window<"u"&&window.appState&&window.appState.activeModal==="editProfile"))return;const e=Date.now();!o&&e-Tt<2e3||(Tt=e,typeof ve<"u"&&typeof ve.pullFromCloud=="function"&&ve.pullFromCloud().catch(t=>{console.warn("[SmartSync] Focus-driven pull deferred:",t)}))}function At(){typeof window>"u"||(yt&&clearInterval(yt),yt=setInterval(()=>{if(typeof document<"u"){const o=document.activeElement;if(o&&(o.tagName==="INPUT"||o.tagName==="TEXTAREA"||o.isContentEditable)){console.log("Sync aborted: User is typing");return}}window.navigator&&!window.navigator.onLine||typeof window<"u"&&window.appState&&window.appState.activeModal==="editProfile"||typeof ve<"u"&&typeof ve.pullFromCloud=="function"&&ve.pullFromCloud().catch(o=>{console.warn("[SmartSync] Interval-driven pull deferred:",o)})},6e4))}function bt(o=150){typeof window>"u"||(mt&&clearTimeout(mt),mt=setTimeout(()=>{window.navigator&&!window.navigator.onLine||typeof ve<"u"&&typeof ve.pushToCloud=="function"&&ve.pushToCloud().catch(e=>{console.warn("[SmartSync] Action-driven push deferred:",e)})},o))}typeof window<"u"&&(document.readyState==="complete"||document.readyState==="interactive"?setTimeout(()=>Fe(!0),100):(window.addEventListener("DOMContentLoaded",()=>Fe(!0)),window.addEventListener("load",()=>Fe(!0))),window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Fe(!0)}),window.addEventListener("focus",()=>Fe(!0)),window.addEventListener("online",()=>Fe(!0)),At(),["activity-saved","study-logs-updated","sessions-updated","pomodoro-completed","profileUpdated","auth-changed","rooms-updated","groups-updated","room-created","room-joined","room-modified"].forEach(e=>{window.addEventListener(e,()=>{bt(150)})}),window.addEventListener("storage",e=>{e.key&&(e.key==="planex_user_nickname"||e.key==="planex_user_avatar"||e.key==="planex_my_groups"||e.key==="planex_my_rooms"||e.key==="planex_study_logs"||e.key==="planex_recent_activity_sessions")&&bt(200)}),window.personalSyncService=ve,window.triggerAutoSync=uo,window.updateCloudSyncIndicatorUI=We,window.handleFocusDrivenSync=Fe,window.startSmartSyncInterval=At,window.triggerActionDrivenPush=bt);typeof window<"u"&&(window.isEarlyBirdSubmitting=!1);function et(o,e=!0,t=""){if(typeof document>"u")return;const n=document.createElement("div"),a=e?"#10b981":"#ef4444";n.style.cssText=`position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%); background: ${a}; color: white; padding: 12px 22px; border-radius: 14px; font-weight: 900; font-size: 0.9rem; line-height: 1.7; z-index: 9999; box-shadow: 0 6px 20px rgba(0,0,0,0.4); max-width: 92vw; text-align: center; direction: rtl;`,n.innerHTML=`${o}${t?`<br><span style="font-size: 0.72rem; opacity: 0.9; font-weight: normal;">${String(t).replace(/</g,"&lt;")}</span>`:""}`,document.body.appendChild(n),setTimeout(()=>n.remove(),e?3500:8e3)}if(typeof window<"u")try{const o=localStorage.getItem("early_bird_daily_status");if(o){const e=JSON.parse(o),t=window.leaderboardService?window.leaderboardService.getTodayDateStr():new Date().toLocaleDateString("fa-IR");e.date!==t&&(localStorage.removeItem("early_bird_daily_status"),ve&&typeof ve.pushToCloud=="function"&&ve.pushToCloud())}}catch{}typeof window<"u"&&(window.handleEarlyBirdCheckIn=async()=>{if(!window.isEarlyBirdSubmitting){if(!$.isEarlyBirdWindowOpen()){et("⏰ ثبت بیداری فقط از ساعت ۵ تا ۷ صبح امکان‌پذیر است.",!1);return}window.isEarlyBirdSubmitting=!0,window.renderApp&&window.renderApp();try{const o=await $.recordEarlyBird();if(o.success&&o.serverConfirmed){const e=o.rank?` — رتبه بیداری #${o.rank}`:"";et(`☀️ ${o.message}${e}`,!0),Array.isArray(o.list)&&(window.lastEarlyBirdList=o.list);try{const t=$.getTodayDateStr(),n=$.getIranNowHHMM();localStorage.setItem("early_bird_daily_status",JSON.stringify({date:t,time:n}))}catch{}}else et(`❌ ${o.message}`,!1,o.errorDetail||"")}catch(o){console.error("[EarlyBird] خطای غیرمنتظره:",o),et("❌ خطای غیرمنتظره در ثبت سحرخیزی.",!1,o.message)}finally{window.isEarlyBirdSubmitting=!1,window.renderApp&&window.renderApp()}}});typeof window<"u"&&!window.toggleTopBannersAccordion&&(window.toggleTopBannersAccordion=()=>{const o=localStorage.getItem("planex_top_accordion_open")==="true";localStorage.setItem("planex_top_accordion_open",String(!o)),window.renderApp&&window.renderApp()});typeof window<"u"&&!window.toggleRecentSessionsAccordion&&(window.toggleRecentSessionsAccordion=()=>{const o=localStorage.getItem("planex_recent_sessions_open")==="true";localStorage.setItem("planex_recent_sessions_open",String(!o)),window.renderApp&&window.renderApp()});typeof window<"u"&&!window.toggleChartsAccordion&&(window.toggleChartsAccordion=()=>{const o=localStorage.getItem("planex_charts_accordion_open")!=="false";localStorage.setItem("planex_charts_accordion_open",String(!o)),window.renderApp&&window.renderApp()});typeof window<"u"&&!window.toggleWeeklyBreakdownAccordion&&(window.toggleWeeklyBreakdownAccordion=()=>{const o=localStorage.getItem("planex_weekly_breakdown_accordion_open")==="true";localStorage.setItem("planex_weekly_breakdown_accordion_open",String(!o)),window.renderApp&&window.renderApp()});const ze=["شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه"];function go(o){const e=Math.floor(o/2),t=o%2===0?"00":"30",n=Math.floor((o+1)/2),a=(o+1)%2===0?"00":"30",r=`${e.toString().padStart(2,"0")}:${t}`,i=`${n.toString().padStart(2,"0")}:${a}`;return`${r} - ${i}`}function fo(o=0,e="daily"){var t,n,a,r,i,s,d,l;try{const c=p.getCurrentWeek(),g=c?c.id:1,b=p.getHourlyLogs(g)||{},f=p.getCategories()||[],k={};f.forEach((O,H)=>{O&&O.code&&(k[O.code]={...O,color:O.color||Pe[H%Pe.length]})});const u=p.getStudyTargets()||{},x=p.getCountdownEvents()||[],y=x&&x.length>0?x[0]:null,h=p.getEarnedMedalBadge(),_=(typeof p.getRecentFocusSessions=="function"?p.getRecentFocusSessions(8):[]).filter(Boolean),[m,w,T]=p.getTodayJalali(),A=(new Date().getDay()+1)%7,z=O=>String(O).replace(/[0-9]/g,H=>"۰۱۲۳۴۵۶۷۸۹"[H]),B=((c==null?void 0:c.id)||"").split("_");let D=null;if(B.length===3){const O=parseInt(B[0]),H=parseInt(B[1]),se=parseInt(B[2]);if(!isNaN(O)&&!isNaN(H)&&!isNaN(se)){const me=p.jalaliToJdn(O,H,1),$e=(me+2)%7;D=me-$e+(se-1)*7}}D===null&&(D=p.getTodayJdn()-A);let I=0,P=0,j=0;const C={};for(let O=0;O<48;O++){const H=`${o}_${O}`,se=b[H],me=`${o}_${O}_multi`,$e=b[me]||[],he=new Set;se&&se.categoryCode&&he.add(se.categoryCode),$e.forEach(Me=>he.add(Me)),he.forEach(Me=>{const Te=k[Me];Te&&(C[Te.code]=(C[Te.code]||0)+1,Ee(Te)?I++:(Te.code==="تـ"||Te.group==="تلف شده")&&P++)}),se&&se.testCount&&(j+=parseInt(se.testCount)||0)}const J=((n=(t=c==null?void 0:c.days)==null?void 0:t[o])==null?void 0:n.dateStr)||p._getWeekDayDateStr(o),W=p.getDailyStats(J)||{studyHours:0,studyMinutes:0,totalTests:0,sessionsCount:0};let G=p.getWeekDayMinutes(o),K=+(G/60).toFixed(2),q=p.getWeekDayTests(o);const Z=u.dailyStudyGoalHours||8,R=Z*60,X=u.dailyTestGoalCount||150,Q=R>0?Math.min(100,Math.round(G/R*100)):0,oe=X>0?Math.min(100,Math.round(q/X*100)):0,ce=Math.max(0,R-G),ie=+(ce/60).toFixed(1),v=Math.max(0,X-q);let E="";if(y){const O=p.getTodayJdn(),se=p.jalaliToJdn(parseInt(y.jy),parseInt(y.jm),parseInt(y.jd))-O,me=new Date;me.setDate(me.getDate()+se),me.setHours(8,0,0,0);const $e=new Date,he=me.getTime()-$e.getTime();if(he>0){const Me=Math.floor(he/864e5),Te=Math.floor(he%(1e3*60*60*24)/(1e3*60*60)),Je=Math.floor(he%(1e3*60*60)/(1e3*60)),Ne=De=>String(De).replace(/[0-9]/g,Ie=>"۰۱۲۳۴۵۶۷۸۹"[Ie]);E=`🎯 ${Ne(Me)} روز و ${Ne(Te)} ساعت تا ${y.title}`}else if(he>-864e5)E=`🎉 امروز روز برگزاری ${y.title} است!`;else{const Me=Math.floor(Math.abs(he)/864e5);E=`📌 ${(Je=>String(Je).replace(/[0-9]/g,Ne=>"۰۱۲۳۴۵۶۷۸۹"[Ne]))(Me)} روز از ${y.title} گذشته است.`}}const L=[],F=[];let pe=0,U=0;for(let O=0;O<7;O++){const H=p.getWeekDayMinutes(O),se=p.getWeekDayTests(O);L.push(H),F.push(se),pe+=H,U+=se}const fe=Math.round(pe/7),xe=Math.round(U/7),ye=Math.max(1,A+1),_e=Math.round(pe/ye),we=[];for(let O=0;O<7;O++){const H=(a=c==null?void 0:c.days)==null?void 0:a[O],se=(H==null?void 0:H.dateStr)||p._getWeekDayDateStr(O),me=H&&H.dayOfMonth&&H.monthName?`${ze[O]} ${z(H.dayOfMonth)} ${H.monthName}`:ze[O],$e=p.getDayCategoryBreakdown(O),he=$e.reduce((De,Ie)=>De+Ie.minutes,0);let Me="",Te=0;const Je=[];let Ne=he>0;Ne&&$e.forEach(De=>{const Ie=De.minutes/he,Ht=Ie*163.36,Wt=-Te*163.36;Te+=Ie,Me+=`
          <circle cx="30" cy="30" r="26" fill="none" stroke="${De.color}" stroke-width="8"
            stroke-dasharray="${Ht.toFixed(2)} 163.36"
            stroke-dashoffset="${Wt.toFixed(2)}"
            transform="rotate(-90 30 30)" />
        `,Je.push({title:De.title,color:De.color,minutes:De.minutes})}),we.push({dayName:ze[O],dayDateFull:me,isToday:H?!!H.isToday:O===A,studyMinutes:he,arcs:Me,legendItems:Je,hasData:Ne})}const ke=typeof localStorage<"u"&&localStorage.getItem("planex_top_accordion_open")==="true",Ae=typeof localStorage<"u"&&localStorage.getItem("planex_recent_sessions_open")==="true",ne=typeof localStorage<"u"?localStorage.getItem("planex_charts_accordion_open")!=="false":!0,ge=typeof localStorage<"u"?localStorage.getItem("planex_weekly_breakdown_accordion_open")==="true":!1,Be=typeof window<"u"&&window.pomodoroService?window.pomodoroService.getDisplayActiveUsers():Math.max(1,parseInt((r=window.appState)==null?void 0:r.pomodoroActiveUsers)||1),Le=!!((i=window.appState)!=null&&i.isPomodoroRunning||(s=window.appState)!=null&&s.isStopwatchRunning),N=Le&&((d=window.appState)==null?void 0:d.focusTimerType)===2,re=Le&&((l=window.appState)==null?void 0:l.focusActivityMode)==="non-study"&&!N;let de="rgba(16, 185, 129, 0.1)",S="rgba(16, 185, 129, 0.25)",Y="#10b981",V="#10b981",le=`🟢 ${z(Be)} نفر هم‌اکنون در حال مطالعه در پومودورو هستند`;return N?(de="rgba(56, 189, 248, 0.1)",S="rgba(56, 189, 248, 0.25)",Y="#38bdf8",V="#38bdf8",le=`☕ شما در حال استراحت ☕ | 🟢 ${z(Be)} نفر در حال مطالعه`):re&&(de="rgba(245, 158, 11, 0.1)",S="rgba(245, 158, 11, 0.25)",Y="#f59e0b",V="#f59e0b",le=`🧘 شما در حال فعالیت غیردرسی 🧘 | 🟢 ${z(Be)} نفر در حال مطالعه`),`
    <div class="dashboard-view animate-fade-in" style="direction: rtl;">
      
      <!-- ⚡ Collapsible Top Events & Leaderboard Accordion -->
      <div style="margin-bottom: 10px;">
        <button onclick="if(window.toggleTopBannersAccordion) window.toggleTopBannersAccordion();" 
                class="glass-panel" 
                style="width: 100%; padding: 7px 12px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; color: var(--text-secondary); transition: all 0.2s ease;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.78rem; font-weight: 700; color: #e4e4e7;">
            <span style="font-size: 0.85rem;">⚡</span>
            <span>رویدادها، سحرخیزان و تالار رقابت</span>
            ${y?`<span style="font-size: 0.68rem; background: #1f2029; color: #8e8e9c; border: 1px solid rgba(255,255,255,0.08); padding: 1px 6px; border-radius: 6px;">${E}</span>`:""}
          </div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 0.7rem; color: #8e8e9c;">
            <span>${ke?"بستن":"مشاهده"}</span>
            <span style="font-size: 0.68rem; transform: ${ke?"rotate(180deg)":"rotate(0deg)"}; transition: transform 0.2s ease;">▼</span>
          </div>
        </button>

        ${ke?`
          <div style="margin-top: 8px; display: flex; flex-direction: column; gap: 8px; animation: fadeIn 0.2s ease;">
            <!-- Top Countdown Banner -->
            ${y?`
              <div class="glass-panel" style="padding: 10px 14px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="width: 30px; height: 30px; border-radius: 8px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 1rem;">
                    ⏳
                  </div>
                  <div>
                    <strong style="font-size: 0.86rem; font-weight: 700; color: #e4e4e7;">${E}</strong>
                    <div style="font-size: 0.7rem; color: #8e8e9c; margin-top: 1px;">تاریخ برگزاری: ${y.jy}/${y.jm}/${y.jd}</div>
                  </div>
                </div>
                <div style="background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08); padding: 3px 8px; border-radius: 8px; font-weight: 600; font-size: 0.72rem; font-family: 'Outfit';">
                  روزشمار کنکوری 🎯
                </div>
              </div>
            `:""}

            <!-- ☀️ باشگاه سحرخیزان -->
            ${(()=>{const O=$.isEarlyBirdWindowOpen(),H=$.getIranNowHHMM(),se=$.getTodayWakeTime(),me=typeof window<"u"&&!!window.isEarlyBirdSubmitting,$e=Ie=>z(String(Ie||""));let he="";const Me=se?String(se).replace(/[۰-۹]/g,Ie=>"۰۱۲۳۴۵۶۷۸۹".indexOf(Ie)).replace(/[٠-٩]/g,Ie=>"٠١٢٣٤٥٦٧٨٩".indexOf(Ie)).trim():"",[Te,Je]=Me?Me.split(":").map(Number):[NaN,NaN],Ne=!isNaN(Te)&&!isNaN(Je)?Te*60+Je:null,De=Ne!==null&&Ne>=5*60&&Ne<=7*60;return se&&De?he=`
                  <div style="display: flex; align-items: center; gap: 6px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); color: #10b981; padding: 5px 10px; border-radius: 8px; font-weight: 700; font-size: 0.74rem;">
                    <span>✅</span><span>ثبت شد (${$e(se)})</span>
                  </div>`:O?he=`
                  <button onclick="if(typeof window.handleEarlyBirdCheckIn === 'function') window.handleEarlyBirdCheckIn();" ${me?"disabled":""}
                    style="padding: 5px 12px; font-size: 0.76rem; font-weight: 700; color: #ffffff; background: #7c3aed; border: none; border-radius: 8px; cursor: ${me?"wait":"pointer"}; opacity: ${me?"0.65":"1"};">
                    ${me?"⏳ ثبت...":"من بیدارم! 🌅"}
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
                      ساعت الان: <strong style="color: #e4e4e7; font-family: 'Outfit';">${$e(H)}</strong>
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
      ${Zt()}

      <!-- 🎯 HERO FOCUS ACTION & ACTIVITY LAUNCHER CARD -->
      <div class="glass-panel" style="padding: 14px 16px; margin-bottom: 12px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 14px; box-shadow: none;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
          <div style="display: flex; align-items: center; gap: 6px; background: #1f2029; padding: 3px 10px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.08);">
            <span style="width: 6px; height: 6px; background: #7c3aed; border-radius: 50%; display: inline-block;"></span>
            <span style="font-weight: 700; font-size: 0.76rem; color: #e4e4e7;">مرکز ثبت فعالیت و تمرکز هوشمند</span>
          </div>
          <div style="display: flex; align-items: center; gap: 6px;">
            <span style="font-size: 0.72rem; color: #8e8e9c; font-weight: 600; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); padding: 2px 8px; border-radius: 8px; font-family: 'Outfit';">
              امروز: ${be(G)} | ${z(q)} تست
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
        ${ze.map((O,H)=>`
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
            ${be(G)}
          </div>
          <div style="font-size: 0.65rem; color: #71717a;">
            هدف: ${Z} ساعت (${Q}%)
          </div>
        </div>

        <!-- Card 2: Weekly Average Study -->
        <div class="glass-panel" style="padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 0.7rem; color: #8e8e9c; font-weight: 600;">میانگین روزانه هفته</span>
            <span style="font-size: 0.95rem;">📊</span>
          </div>
          <div style="font-size: 1rem; font-weight: 800; color: #e4e4e7; font-family: 'Outfit'; margin-bottom: 2px;">
            ${be(_e)}
          </div>
          <div style="font-size: 0.65rem; color: #71717a;">
            مجموع: ${be(pe)}
          </div>
        </div>

        <!-- Card 3: Today Tests -->
        <div class="glass-panel" style="padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 0.7rem; color: #8e8e9c; font-weight: 600;">تست‌های امروز</span>
            <span style="font-size: 0.95rem;">🎯</span>
          </div>
          <div style="font-size: 1rem; font-weight: 800; color: #e4e4e7; font-family: 'Outfit'; margin-bottom: 2px;">
            ${z(q)} تست
          </div>
          <div style="font-size: 0.65rem; color: #71717a;">
            هدف: ${X} (${oe}%)
          </div>
        </div>

        <!-- Card 4: Goal Progress -->
        <div class="glass-panel" style="padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 0.7rem; color: #8e8e9c; font-weight: 600;">تحقق هدف روزانه</span>
            <span style="font-size: 0.95rem;">🔥</span>
          </div>
          <div style="font-size: 1rem; font-weight: 800; color: #e4e4e7; font-family: 'Outfit'; margin-bottom: 2px;">
            ${Q}%
          </div>
          <div style="font-size: 0.65rem; color: #71717a;">
            ${ce<=0?"🎉 تکمیل شد":`${be(ce)} تا هدف`}
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
            <button class="btn-open-target-dialog btn-header-action" style="padding: 3px 8px; font-size: 0.7rem;">✏️ اهداف</button>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-around; gap: 12px; flex-wrap: wrap;">
            <div class="progress-ring-container" style="position: relative; width: 90px; height: 90px;">
              <svg width="90" height="90" viewBox="0 0 110 110">
                <circle cx="55" cy="55" r="45" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="10"/>
                <circle cx="55" cy="55" r="45" fill="none" stroke="#7c3aed" stroke-width="10"
                  stroke-dasharray="282.7"
                  stroke-dashoffset="${282.7-282.7*Q/100}"
                  stroke-linecap="round"
                  transform="rotate(-90 55 55)"
                  style="transition: stroke-dashoffset 0.5s ease;"/>
              </svg>
              <div class="progress-text" style="position: absolute; top:0; left:0; width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding: 2px;">
                <span style="font-size: 1.15rem; font-weight: 800; font-family: 'Outfit'; color: #fff;">${Q}%</span>
                <span style="font-size: 0.65rem; color: #8e8e9c; font-family: 'Outfit';">${be(G)}</span>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 6px; flex: 1; min-width: 140px;">
              <div style="background: #1f2029; padding: 6px 10px; border-radius: 8px; font-size: 0.74rem; border: 1px solid rgba(255,255,255,0.06);">
                <span style="color: #8e8e9c;">مدت مطالعه:</span>
                <strong style="color: #e4e4e7; margin-right: 4px;">${be(G)}</strong>
              </div>
              <div style="background: ${ce<=0?"rgba(16, 185, 129, 0.12)":"#1f2029"}; color: ${ce<=0?"#10b981":"#8e8e9c"}; border: 1px solid rgba(255,255,255,0.06); padding: 6px 10px; border-radius: 8px; font-size: 0.74rem; font-weight: 600; text-align: center;">
                ${ce<=0?"🎉 هدف روزانه تکمیل شد!":`⏳ ${be(ce)} باقیمانده`}
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
                <div style="font-size: 0.7rem; color: #8e8e9c;">هدف: ${X} تست</div>
              </div>
            </div>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-around; gap: 12px; flex-wrap: wrap;">
            <div class="progress-ring-container" style="position: relative; width: 90px; height: 90px;">
              <svg width="90" height="90" viewBox="0 0 110 110">
                <circle cx="55" cy="55" r="45" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="10"/>
                <circle cx="55" cy="55" r="45" fill="none" stroke="#7c3aed" stroke-width="10"
                  stroke-dasharray="282.7"
                  stroke-dashoffset="${282.7-282.7*oe/100}"
                  stroke-linecap="round"
                  transform="rotate(-90 55 55)"
                  style="transition: stroke-dashoffset 0.5s ease;"/>
              <div class="progress-text" style="position: absolute; top:0; left:0; width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                <span style="font-size: 1.15rem; font-weight: 800; font-family: 'Outfit'; color: #fff;">${oe}%</span>
                <span style="font-size: 0.65rem; color: #8e8e9c; font-family: 'Outfit';">${q} / ${X}</span>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 6px; flex: 1; min-width: 140px;">
              <div style="background: #1f2029; padding: 6px 10px; border-radius: 8px; font-size: 0.74rem; border: 1px solid rgba(255,255,255,0.06);">
                <span style="color: #8e8e9c;">مدت مطالعه:</span>
                <strong style="color: #e4e4e7; margin-right: 4px;">${be(G)}</strong>
              </div>
              <div style="background: #1f2029; padding: 6px 10px; border-radius: 8px; font-size: 0.74rem; border: 1px solid rgba(255,255,255,0.06);">
                <span style="color: #8e8e9c;">تست‌ها:</span>
                <strong style="color: #e4e4e7; margin-right: 4px;">${q}</strong>
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
                ${_.length} پارت
              </span>
            </div>
            <span style="font-size: 0.75rem; color: #7c3aed; margin-right: 4px;">
              ${Ae?"▲":"▼"}
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

        ${Ae?`
          <div style="margin-top: 10px; animation: fadeIn 0.2s ease;">
            ${_.length===0?`
              <div style="text-align: center; padding: 18px 12px; background: #1f2029; border: 1px dashed rgba(255, 255, 255, 0.08); border-radius: 10px;">
                <div style="font-size: 1.5rem; margin-bottom: 4px;">⏱️</div>
                <div style="color: #fff; font-size: 0.84rem; font-weight: 700; margin-bottom: 2px;">هنوز پارت مطالعه‌ای ثبت نشده است</div>
                <p style="color: #8e8e9c; font-size: 0.7rem; margin: 0 auto; line-height: 1.4;">
                  از دکمه شروع پارت یا ثبت دستی برای ثبت زمان و تست‌های خود استفاده کنید.
                </p>
              </div>
            `:`
              <div style="display: flex; flex-direction: column; gap: 6px;">
                ${_.map(O=>{const H=O.type==="non-study"||!O.isStudy;return`
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
                        ⏱️ ${be(O.duration||O.minutes||1)}
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
              <span style="font-size: 0.7rem; color: #8e8e9c;">مقایسه زمان مطالعه (${be(pe)}) و تست‌ها (${U} تست)</span>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 0.72rem; color: #7c3aed; font-weight: 700;">
            <span>${ne?"بستن 🔼":"مشاهده نمودارها 🔽"}</span>
          </div>
        </div>

        ${ne?`
          <div style="margin-top: 12px; display: flex; flex-direction: column; gap: 12px; animation: fadeIn 0.2s ease;">
            <!-- Weekly Study Minutes Bar Chart -->
            <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 12px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                <div style="display: flex; align-items: center; gap: 6px;">
                  <span style="font-size: 0.95rem;">⏱️</span>
                  <span style="font-size: 0.82rem; font-weight: 700; color: #e4e4e7;">میزان مطالعه روزانه هفته</span>
                </div>
                <span style="font-size: 0.68rem; font-weight: 600; color: #a1a1aa; background: #1f2029; padding: 2px 6px; border-radius: 6px;">
                  مجموع: ${be(pe)}
                </span>
              </div>
              <div style="display: flex; align-items: flex-end; justify-content: space-between; height: 120px; padding: 4px; gap: 6px; border-bottom: 1px solid rgba(255,255,255,0.06);">
                ${ze.map((O,H)=>{const se=L[H]||0,me=H===A,$e=Math.max(480,Math.ceil(Math.max(...L,60))),he=se>0?Math.min(100,Math.max(6,Math.round(se/$e*100))):0;return`
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end;">
                      <span style="font-size: 0.62rem; font-weight: 600; font-family: 'Outfit'; color: ${me?"#7c3aed":"#8e8e9c"}; margin-bottom: 2px;">
                        ${se>0?be(se):"۰"}
                      </span>
                      <div style="width: 100%; max-width: 22px; height: ${he}%; background: ${me?"#7c3aed":"#1f2029"}; border: 1px solid rgba(255,255,255,0.08); border-radius: 6px 6px 0 0; transition: height 0.4s ease;"></div>
                      <span style="font-size: 0.68rem; font-weight: 600; color: ${me?"#e4e4e7":"#8e8e9c"}; margin-top: 4px;">
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
                ${ze.map((O,H)=>{const se=F[H]||0,me=H===A,$e=Math.max(100,Math.ceil(Math.max(...F))),he=se>0?Math.min(100,Math.max(6,Math.round(se/$e*100))):0;return`
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end;">
                      <span style="font-size: 0.62rem; font-weight: 600; font-family: 'Outfit'; color: ${me?"#7c3aed":"#8e8e9c"}; margin-bottom: 2px;">
                        ${se}
                      </span>
                      <div style="width: 100%; max-width: 22px; height: ${he}%; background: ${me?"#7c3aed":"#1f2029"}; border: 1px solid rgba(255,255,255,0.08); border-radius: 6px 6px 0 0; transition: height 0.4s ease;"></div>
                      <span style="font-size: 0.68rem; font-weight: 600; color: ${me?"#e4e4e7":"#8e8e9c"}; margin-top: 4px;">
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
                      <span style="font-size: 0.72rem; font-weight: 800; font-family: 'Outfit'; color: ${O.hasData?"#e4e4e7":"var(--text-muted)"}; line-height: 1.2;">${O.studyMinutes>0?be(O.studyMinutes):"۰ دقیقه"}</span>
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
                        <span style="color: #8e8e9c; font-weight: 600; flex-shrink: 0; font-family: 'Outfit';">${be(H.minutes)}</span>
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
    `}}function Mt(){typeof window<"u"&&typeof window.renderApp=="function"&&window.renderApp()}typeof window<"u"&&(window.updateCharts=Mt,window.updateDashboard=Mt,window.renderDashboard=fo);window.plannerTaskViewMode=window.plannerTaskViewMode||"list";window.plannerPriorityFilter=window.plannerPriorityFilter||"ALL";window.plannerNewTaskPriority=window.plannerNewTaskPriority||lt;window.setPlannerTaskViewMode=o=>{window.plannerTaskViewMode=o==="matrix"?"matrix":"list",window.renderApp&&window.renderApp()};window.setPlannerPriorityFilter=o=>{window.plannerPriorityFilter=o||"ALL",window.renderApp&&window.renderApp()};window.setPlannerNewTaskPriority=o=>{window.plannerNewTaskPriority=o||lt,window.renderApp&&window.renderApp()};window.selectPlannerDay=o=>{const e=typeof window.appState<"u"&&window.appState?window.appState:null;e&&(e.selectedDayIndex=o),window.renderApp&&window.renderApp()};window.changeJalaliMonth=o=>{const[e,t]=p.getTodayJalali();let n=window.jalaliViewMonth!==void 0?window.jalaliViewMonth:t-1,a=window.jalaliViewYear!==void 0?window.jalaliViewYear:e;n+=o,n<0?(n=11,a-=1):n>11&&(n=0,a+=1),window.jalaliViewMonth=n,window.jalaliViewYear=a,window.renderApp&&window.renderApp()};window.addPlannerTaskToQuadrant=o=>{const e=document.getElementById(`input-quadrant-task-${o}`);if(!e||!e.value.trim())return;const t=p.getCurrentWeek(),n=t?t.id:1,a=window.appState&&typeof window.appState.selectedDayIndex=="number"?window.appState.selectedDayIndex:(new Date().getDay()+1)%7;p.addDailyPlan(n,a,e.value.trim(),o),e.value="",window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp()};window.addPlannerDailyTask=()=>{const o=document.getElementById("input-daily-plan");if(!o||!o.value.trim())return;const e=document.getElementById("select-daily-plan-priority"),t=e?e.value:window.plannerNewTaskPriority||lt,n=p.getCurrentWeek(),a=n?n.id:1,r=window.appState&&typeof window.appState.selectedDayIndex=="number"?window.appState.selectedDayIndex:(new Date().getDay()+1)%7;p.addDailyPlan(a,r,o.value.trim(),t),o.value="",window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp()};window.togglePlannerTask=(o,e=null)=>{e&&typeof e.stopPropagation=="function"&&e.stopPropagation();const t=p.getCurrentWeek(),n=t?t.id:1,r=p.getDailyPlans(n).find(s=>s.id==o||String(s.id)===String(o)),i=r?!r.isDone:!0;p.toggleDailyPlan(n,o),i&&window.triggerCompletionBurst&&window.triggerCompletionBurst(e),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp()};window.deletePlannerTask=o=>{const e=p.getCurrentWeek(),t=e?e.id:1;p.deleteDailyPlan(t,o),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp()};window.movePlannerTaskPriority=(o,e)=>{const t=p.getCurrentWeek(),n=t?t.id:1;p.setDailyPlanPriority(n,o,e),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp()};window.toggleWeeklyGoal=(o,e=null)=>{e&&typeof e.stopPropagation=="function"&&e.stopPropagation();const t=p.getCurrentWeek(),n=t?t.id:1,r=p.getWeeklyGoals(n).find(s=>s.id==o||String(s.id)===String(o)),i=r?!r.isDone:!0;p.toggleWeeklyGoal(n,o),i&&window.triggerCompletionBurst&&window.triggerCompletionBurst(e),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp()};window.addWeeklyGoal=()=>{const o=document.getElementById("input-weekly-goal");if(!o||!o.value.trim())return;const e=p.getCurrentWeek(),t=e?e.id:1;p.addWeeklyGoal(t,o.value.trim()),o.value="",window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp()};window.deleteWeeklyGoal=o=>{const e=p.getCurrentWeek(),t=e?e.id:1;p.deleteWeeklyGoal(t,o),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp()};window.applyPresetWeeklyGoals=()=>{const o=p.getCurrentWeek(),e=o?o.id:1;["مرور خلاصه نکات درس‌های هدف","حل ۲۰۰ تست آزمون جامع","تحلیل و یادداشت نکات آزمون","مرور لغات و فرمول‌ها با لایتنر"].forEach(n=>p.addWeeklyGoal(e,n)),window.renderApp&&window.renderApp()};window.addPlannerCountdownEvent=()=>{var a,r,i,s;const o=(a=document.getElementById("input-event-title"))==null?void 0:a.value.trim(),e=parseInt((r=document.getElementById("input-event-day"))==null?void 0:r.value),t=parseInt((i=document.getElementById("input-event-month"))==null?void 0:i.value),n=parseInt((s=document.getElementById("input-event-year"))==null?void 0:s.value);if(!o||isNaN(e)||isNaN(t)||isNaN(n)){alert("لطفاً عنوان و تاریخ رویداد را کامل وارد کنید.");return}p.addCountdownEvent(o,n,t,e),window.renderApp&&window.renderApp()};window.deletePlannerCountdownEvent=o=>{p.deleteCountdownEvent(o),window.renderApp&&window.renderApp()};window.savePlannerTargets=()=>{var a,r,i,s;const o=parseFloat((a=document.getElementById("target-daily-hours"))==null?void 0:a.value)||8,e=parseInt((r=document.getElementById("target-daily-tests"))==null?void 0:r.value)||150,t=parseFloat((i=document.getElementById("target-weekly-hours"))==null?void 0:i.value)||56,n=parseInt((s=document.getElementById("target-weekly-tests"))==null?void 0:s.value)||1e3;p.setStudyTargets({dailyStudyGoalHours:o,weeklyStudyGoalHours:t,dailyTestGoalCount:e,weeklyTestGoalCount:n}),window.showToast?window.showToast("✅ اهداف با موفقیت ذخیره شدند","success",2500):alert("✅ اهداف با موفقیت ذخیره شدند"),window.renderApp&&window.renderApp()};const xt=o=>String(o??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");function Ct(o){return`
    <select onchange="window.movePlannerTaskPriority('${o.id}', this.value)"
      title="انتقال این کار به خانه دیگر ماتریس"
      style="background: rgba(15,23,42,0.85); color: #e2e8f0; border: 1px solid rgba(148,163,184,0.3); border-radius: 9px; font-size: 0.68rem; padding: 3px 5px; cursor: pointer; font-family: inherit;">
      ${Ye.map(e=>`
        <option value="${e.id}" ${o.priority===e.id?"selected":""}>${e.emoji} ${e.id}</option>
      `).join("")}
    </select>`}function Yo(o=0,e={}){const{plannerAccordions:t={countdowns:!1,targets:!1,weeklyGoals:!1,dailyMatrix:!1}}=e,n=p.getCurrentWeek(),a=n?n.id:1,r=p.getWeeklyGoals(a),i=p.getDailyPlans(a),s=p.getStudyTargets(),d=p.getCountdownEvents()||[],[l,c,g]=p.getTodayJalali(),b=(new Date().getDay()+1)%7,f=ze[b],k=C=>String(C).replace(/[0-9]/g,J=>"۰۱۲۳۴۵۶۷۸۹"[J]),u=window.jalaliViewMonth!==void 0?window.jalaliViewMonth:c-1,x=window.jalaliViewYear!==void 0?window.jalaliViewYear:l,y=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],h=y[c-1],_=u<6?31:u<11?30:29,w=(p.jalaliToJdn(x,u+1,1)+2)%7,T=window.plannerTaskViewMode==="matrix"?"matrix":"list",A=window.plannerPriorityFilter||"ALL",z=window.plannerNewTaskPriority||lt,B=i.filter(C=>C.dayIndex===o),D=A==="ALL"?B:B.filter(C=>C.priority===A),I=B.length,P=B.filter(C=>C.isDone).length,j=I>0?Math.round(P/I*100):0;return`
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
                📌 امروز: ${f} ${k(g)} ${h} ${k(l)}
              </div>
            </div>
            
            <div style="display: flex; gap: 8px; align-items: center;">
              <button id="btn-jalali-prev-month" onclick="window.changeJalaliMonth(-1)" class="btn-header-action" style="padding: 4px 10px; font-weight: bold; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); color: #a1a1aa;">◀ ماه قبل</button>
              <span style="font-weight: 900; font-size: 0.95rem; color: #e4e4e7;">${y[u]} ${k(x)}</span>
              <button id="btn-jalali-next-month" onclick="window.changeJalaliMonth(1)" class="btn-header-action" style="padding: 4px 10px; font-weight: bold; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); color: #a1a1aa;">ماه بعد ▶</button>
            </div>
          </div>

          <!-- Days of Week Header -->
          <div style="display: grid; grid-template-columns: repeat(7, 1fr); text-align: center; gap: 4px; font-size: 0.8rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 10px; background: #1f2029; padding: 8px 0; border-radius: 10px;">
            <span>ش</span><span>ی</span><span>د</span><span>س</span><span>چ</span><span>پ</span><span>ج</span>
          </div>

          <!-- 31 Days Grid with Exact Weekday Alignment -->
          <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; text-align: center;">
            ${Array.from({length:w}).map(()=>`
              <div style="padding: 10px 4px; opacity: 0.15; font-size: 0.8rem;">•</div>
            `).join("")}
            ${Array.from({length:_}).map((C,J)=>{const W=J+1,G=W===g&&u===c-1&&x===l,K=(w+J)%7,q=ze[K],Z=String(u+1).padStart(2,"0"),R=String(W).padStart(2,"0"),X=`${x}/${Z}/${R}`,oe=(p.getStudyMinutesByDate(X)||0)/60,ce=oe>0?oe%1===0?oe.toFixed(0):oe.toFixed(1):"0";let ie="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); color: #71717a;",v='<div style="width: 4px; height: 4px; border-radius: 50%; background: rgba(255, 255, 255, 0.15); margin: 3px auto 0;"></div>';return oe>=1&&oe<3?(ie="background: rgba(16, 185, 129, 0.18); border: 1px solid rgba(16, 185, 129, 0.35); color: #6ee7b7;",v=`<div style="font-size: 0.68rem; margin-top: 2px; color: #6ee7b7; font-weight: 800;">${k(ce)}h</div>`):oe>=3&&oe<6?(ie="background: rgba(16, 185, 129, 0.45); border: 1px solid rgba(16, 185, 129, 0.7); color: #a7f3d0; box-shadow: 0 0 10px rgba(16, 185, 129, 0.25);",v=`<div style="font-size: 0.68rem; margin-top: 2px; color: #a7f3d0; font-weight: 900;">${k(ce)}h</div>`):oe>=6?(ie="background: linear-gradient(135deg, #10b981 0%, #059669 100%); border: 1px solid #34d399; color: #ffffff; box-shadow: 0 0 14px rgba(16, 185, 129, 0.5);",v=`<div style="font-size: 0.68rem; margin-top: 2px; color: #ffffff; font-weight: 900; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">${k(ce)}h</div>`):oe>0&&oe<1&&(ie="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); color: #6ee7b7;",v=`<div style="font-size: 0.68rem; margin-top: 2px; color: #6ee7b7; font-weight: 700;">${k(ce)}h</div>`),`
                <div class="jalali-day-cell ${G?"active-today":""}"
                  onclick="if(window.openJalaliDayDetailsModal) window.openJalaliDayDetailsModal('${X}');"
                  style="padding: 8px 4px; border-radius: 12px; font-size: 0.85rem; font-family: 'Outfit'; font-weight: bold; cursor: pointer; transition: all 0.15s ease; ${ie} ${G?"outline: 2.5px solid #38bdf8; outline-offset: 1px;":""}"
                  onmouseenter="this.style.transform='scale(1.06)'"
                  onmouseleave="this.style.transform='scale(1)'"
                  title="روز ${k(W)} ${y[u]} (${q}) - ${oe>0?k(ce)+" ساعت مطالعه":"بدون مطالعه"}">
                  <div>${k(W)} ${G?"📍":""}</div>
                  ${v}
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
              <span>روزشمار رویدادها و آزمون‌ها ${d.length>0?`<strong style="color: #f59e0b; font-size: 0.8rem; margin-right: 4px;">(${d.length} رویداد فعال)</strong>`:""}</span>
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
                ${d.length===0?'<p style="font-size: 0.85rem; color: var(--text-secondary);">هیچ رویدادی در روزشمار ثبت نشده است.</p>':""}
                ${d.map(C=>`
                  <div style="display: flex; justify-content: space-between; align-items: center; background: #1f2029; padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);">
                    <div>
                      <strong style="font-size: 0.92rem; color: #e4e4e7;">🎯 ${C.title}</strong>
                      <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">تاریخ: ${C.jy}/${C.jm}/${C.jd}</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span style="background: #16171d; color: #a1a1aa; border: 1px solid rgba(255,255,255,0.08); padding: 4px 10px; border-radius: 12px; font-weight: 800; font-size: 0.8rem; font-family: 'Outfit';">
                        ⏳ روزشمار فعال
                      </span>
                      <button class="btn-delete-countdown-item" onclick="window.deletePlannerCountdownEvent('${C.id}')" data-id="${C.id}" style="background: none; border: none; color: #ef4444; cursor: pointer;">🗑️</button>
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
                  <input type="number" id="target-daily-hours" class="form-input" value="${s.dailyStudyGoalHours||8}" step="0.5" />
                </div>
                <div class="input-group">
                  <label class="input-label">هدف تست روزانه</label>
                  <input type="number" id="target-daily-tests" class="form-input" value="${s.dailyTestGoalCount||150}" />
                </div>
                <div class="input-group">
                  <label class="input-label">هدف ساعت هفتگی</label>
                  <input type="number" id="target-weekly-hours" class="form-input" value="${s.weeklyStudyGoalHours||56}" />
                </div>
                <div class="input-group">
                  <label class="input-label">هدف تست هفتگی</label>
                  <input type="number" id="target-weekly-tests" class="form-input" value="${s.weeklyTestGoalCount||1e3}" />
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
            <span>اهداف کلیدی هفته ${r.length>0?`<strong style="color: #c4b5fd; font-size: 0.8rem; margin-right: 4px;">(${r.length} هدف)</strong>`:""}</span>
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
              <input type="text" id="input-weekly-goal" onkeydown="if(event.key === 'Enter') window.addWeeklyGoal()" class="form-input" placeholder="عنوان هدف هفتگی (مثلاً: تمام کردن فصل ۳ زیست دهم)..." />
              <button id="btn-add-weekly-goal" onclick="window.addWeeklyGoal()" class="btn-primary" style="width: auto; padding: 0 20px; white-space: nowrap; background: #7c3aed;">افزودن</button>
            </div>

            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${r.length===0?'<p style="font-size: 0.85rem; color: var(--text-secondary);">هیچ هدفی ثبت نشده است.</p>':""}
              ${r.map(C=>`
                <div style="display: flex; align-items: center; justify-content: space-between; background: #1f2029; padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06);">
                  <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; flex: 1;">
                    <input type="checkbox" class="chk-toggle-weekly-goal" onclick="window.toggleWeeklyGoal('${C.id}', event)" data-id="${C.id}" ${C.isDone?"checked":""} style="width: 18px; height: 18px; accent-color: #7c3aed; cursor: pointer;" />
                    <span style="font-size: 0.92rem; ${C.isDone?"text-decoration: line-through; opacity: 0.5;":""}">${xt(C.text)}</span>
                  </label>
                  <button class="btn-delete-weekly-goal" onclick="window.deleteWeeklyGoal('${C.id}')" data-id="${C.id}" style="background: none; border: none; color: #ef4444; cursor: pointer;">✕</button>
                </div>
              `).join("")}
            </div>
          </div>
        `:""}
      </div>
      
      <!-- ⚡ ACCORDION: Daily Plans + Eisenhower Matrix -->
      <div class="glass-panel" style="padding: 0; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; border-radius: 16px; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-planner-accordion-toggle" data-key="dailyMatrix" style="width: 100%; padding: 14px 18px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.92rem; font-weight: 800; color: #e4e4e7;">
            <span style="font-size: 1.1rem;">⚡</span>
            <span>برنامه‌ریزی روزانه و ماتریس اولویت (آیزنهاور) ${B.length>0?`<strong style="color: #38bdf8; font-size: 0.8rem; margin-right: 4px;">(${B.length} کار برای امروز)</strong>`:""}</span>
          </div>
          <span style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${t.dailyMatrix?"180deg":"0deg"});">▼</span>
        </button>

        ${t.dailyMatrix?`
          <div style="padding: 16px 18px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px; margin-bottom: 14px;">
              <div class="card-title" style="margin: 0; color: #e4e4e7;">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                  <span>ماتریس آیزنهاور (${ze[o]})</span>
              </div>

              <!-- سوییچ نمای لیستی / شبکه‌ای -->
              <div style="display: flex; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 14px; padding: 4px; gap: 4px;">
                <button onclick="window.setPlannerTaskViewMode('list')"
                  style="padding: 6px 14px; font-size: 0.76rem; font-weight: 900; border: none; border-radius: 11px; cursor: pointer; background: ${T==="list"?"#7c3aed":"transparent"}; color: ${T==="list"?"white":"#94a3b8"};">
                  ☰ نمای لیستی
                </button>
                <button onclick="window.setPlannerTaskViewMode('matrix')"
                  style="padding: 6px 14px; font-size: 0.76rem; font-weight: 900; border: none; border-radius: 11px; cursor: pointer; background: ${T==="matrix"?"#7c3aed":"transparent"}; color: ${T==="matrix"?"white":"#94a3b8"};">
                  ⊞ ماتریس ۲×۲
                </button>
              </div>
            </div>

            <!-- 📊 COMMITMENT SCORE & PERFECT DAY CELEBRATION BADGE BANNER -->
            ${I>0?`
              <div style="margin-bottom: 14px; padding: 14px 16px; border-radius: 16px; border: 1.5px solid ${j===100?"#eab308":j>=70?"#10b981":"rgba(56, 189, 248, 0.35)"}; background: ${j===100?"linear-gradient(135deg, rgba(234, 179, 8, 0.18) 0%, rgba(168, 85, 247, 0.15) 100%)":"rgba(31, 32, 41, 0.8)"}; box-shadow: ${j===100?"0 0 20px rgba(234, 179, 8, 0.25)":"none"}; direction: rtl; transition: all 0.3s ease;">
                <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                  <div style="display: flex; align-items: center; gap: 10px;">
                    <div style="width: 34px; height: 34px; border-radius: 12px; background: ${j===100?"rgba(234, 179, 8, 0.25)":"rgba(56, 189, 248, 0.15)"}; border: 1px solid ${j===100?"#eab308":"#38bdf8"}; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">
                      ${j===100?"🌟":"📊"}
                    </div>
                    <div>
                      <div style="display: flex; align-items: center; gap: 6px;">
                        <strong style="font-size: 0.95rem; font-weight: 800; color: #ffffff;">نرخ پایبندی برنامه امروز</strong>
                        ${j===100?`
                          <span style="background: linear-gradient(135deg, #eab308, #ca8a04); color: #000; font-weight: 900; padding: 2px 8px; border-radius: 10px; font-size: 0.72rem; box-shadow: 0 0 10px rgba(234, 179, 8, 0.4);">
                            روز کامل و بی‌نقص 🌟
                          </span>
                        `:""}
                      </div>
                      <span style="font-size: 0.74rem; color: #a1a1aa; font-weight: 600;">
                        ${k(P)} از ${k(I)} کار برنامه‌ریزی‌شده انجام شده است
                      </span>
                    </div>
                  </div>

                  <div style="background: #16171d; border: 1px solid ${j===100?"#eab308":j>=70?"#10b981":"#38bdf8"}; color: ${j===100?"#fde047":j>=70?"#34d399":"#38bdf8"}; padding: 4px 12px; border-radius: 12px; font-weight: 900; font-size: 0.9rem; font-family: 'Outfit', sans-serif;">
                    نرخ پایبندی: ${k(j)}٪
                  </div>
                </div>

                <!-- Progress bar -->
                <div style="width: 100%; height: 8px; background: rgba(0, 0, 0, 0.4); border-radius: 6px; overflow: hidden; margin-top: 10px;">
                  <div style="height: 100%; width: ${j}%; background: ${j===100?"linear-gradient(90deg, #eab308 0%, #a855f7 100%)":j>=70?"linear-gradient(90deg, #10b981 0%, #38bdf8 100%)":"linear-gradient(90deg, #38bdf8 0%, #6366f1 100%)"}; border-radius: 6px; transition: width 0.5s ease;"></div>
                </div>
              </div>
            `:""}

            <!-- Day Selector Pills -->
            <div class="day-selector" style="margin-bottom: 14px;">
              ${ze.map((C,J)=>`
                <button class="day-pill planner-day-pill ${J===o?"active":""}" data-day="${J}" onclick="window.selectPlannerDay(${J})">
                  ${C}
                </button>
              `).join("")}
            </div>

            <!-- Add Daily Plan Input + Priority Picker -->
            <div style="display: flex; gap: 8px; margin-bottom: 10px; flex-wrap: wrap;">
              <input type="text" id="input-daily-plan" onkeydown="if(event.key === 'Enter') window.addPlannerDailyTask()" class="form-input" placeholder="عنوان کار روز ${ze[o]}..." style="flex: 2; min-width: 190px;" />
              <select id="select-daily-plan-priority" class="form-input" onchange="window.setPlannerNewTaskPriority(this.value)"
                title="اولویت این کار در ماتریس آیزنهاور" style="flex: 1; min-width: 190px; cursor: pointer;">
                ${Ye.map(C=>`
                  <option value="${C.id}" ${z===C.id?"selected":""}>${C.emoji} ${C.id}: ${C.title}</option>
                `).join("")}
              </select>
              <button id="btn-add-daily-plan" onclick="window.addPlannerDailyTask()" class="btn-primary" style="width: auto; padding: 0 20px; white-space: nowrap;">افزودن به ${ze[o]}</button>
            </div>

            <!-- فیلتر ربع‌ها -->
            <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 14px;">
              <button onclick="window.setPlannerPriorityFilter('ALL')"
                style="padding: 5px 12px; font-size: 0.72rem; font-weight: 800; border-radius: 11px; cursor: pointer; border: 1px solid ${A==="ALL"?"#38bdf8":"rgba(148,163,184,0.25)"}; background: ${A==="ALL"?"rgba(56,189,248,0.2)":"rgba(15,23,42,0.5)"}; color: ${A==="ALL"?"#7dd3fc":"#94a3b8"};">
                همه (${k(B.length)})
              </button>
              ${Ye.map(C=>{const J=B.filter(G=>G.priority===C.id).length,W=A===C.id;return`
                <button onclick="window.setPlannerPriorityFilter('${C.id}')"
                  style="padding: 5px 12px; font-size: 0.72rem; font-weight: 800; border-radius: 11px; cursor: pointer; border: 1px solid ${W?C.color:"rgba(148,163,184,0.25)"}; background: ${W?C.softBg:"rgba(15,23,42,0.5)"}; color: ${W?C.color:"#94a3b8"};"
                  title="${C.subtitle}">
                  ${C.emoji} ${C.title} (${k(J)})
                </button>`}).join("")}
            </div>

            ${T==="matrix"?`
            <!-- ⊞ نمای ماتریس ۲×۲ آیزنهاور -->
            <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px;" dir="rtl">
              ${Ye.map(C=>{const J=B.filter(G=>G.priority===C.id),W=J.filter(G=>G.isDone).length;return`
                <div style="background: ${C.softBg}; border: 1.5px solid ${C.borderColor}; border-radius: 18px; padding: 14px; display: flex; flex-direction: column; min-height: 190px;">
                  <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 10px;">
                    <div>
                      <strong style="font-size: 0.88rem; color: ${C.color}; display: block;">${C.emoji} ${C.id}: ${C.title}</strong>
                      <span style="font-size: 0.68rem; color: var(--text-secondary);">${C.subtitle}</span>
                    </div>
                    <span style="background: ${C.softBg}; border: 1px solid ${C.borderColor}; color: ${C.color}; padding: 3px 9px; border-radius: 10px; font-size: 0.68rem; font-weight: 900; white-space: nowrap;">
                      ${k(W)}/${k(J.length)}
                    </span>
                  </div>

                  <div style="display: flex; flex-direction: column; gap: 6px; flex: 1; margin-bottom: 10px;">
                    ${J.length===0?'<p style="font-size: 0.74rem; color: var(--text-secondary); opacity: 0.75; margin: 6px 0;">کاری در این خانه ثبت نشده است.</p>':J.map(G=>`
                        <div style="display: flex; align-items: center; gap: 7px; background: rgba(15,23,42,0.45); padding: 7px 9px; border-radius: 11px; border: 1px solid rgba(148,163,184,0.14);">
                          <input type="checkbox" onclick="window.togglePlannerTask('${G.id}', event)" ${G.isDone?"checked":""}
                            style="width: 16px; height: 16px; accent-color: ${C.color}; cursor: pointer; flex-shrink: 0;" />
                          <span style="font-size: 0.79rem; flex: 1; word-break: break-word; ${G.isDone?"text-decoration: line-through; opacity: 0.5;":""}">${xt(G.text)}</span>
                          ${Ct(G)}
                          <button onclick="window.deletePlannerTask('${G.id}')" style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 0.85rem; flex-shrink: 0;" title="حذف">✕</button>
                        </div>
                      `).join("")}
                  </div>

                  <div style="display: flex; gap: 6px;">
                    <input type="text" id="input-quadrant-task-${C.id}" class="form-input"
                      placeholder="کار جدید در «${C.title}»..."
                      onkeydown="if(event.key === 'Enter') window.addPlannerTaskToQuadrant('${C.id}')"
                      style="flex: 1; min-width: 0; font-size: 0.76rem; padding: 7px 10px;" />
                    <button onclick="window.addPlannerTaskToQuadrant('${C.id}')"
                      style="padding: 7px 12px; font-size: 0.76rem; font-weight: 900; color: white; background: ${C.color}; border: none; border-radius: 11px; cursor: pointer; white-space: nowrap;"
                      title="افزودن کار به همین خانه">＋</button>
                  </div>
                </div>`}).join("")}
            </div>
            `:`
            <!-- ☰ نمای لیستی با برچسب اولویت -->
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${D.length===0?`<p style="font-size: 0.85rem; color: var(--text-secondary);">${A==="ALL"?"برای این روز کاری ثبت نشده است.":"در این خانه از ماتریس کاری برای این روز ثبت نشده است."}</p>`:D.map(C=>{const J=qt(C.priority);return`
                  <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; background: ${J.softBg}; padding: 10px 14px; border-radius: 12px; border: 1px solid ${J.borderColor};">
                    <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; flex: 1; min-width: 0;">
                      <input type="checkbox" class="chk-toggle-daily-plan" onclick="window.togglePlannerTask('${C.id}', event)" data-id="${C.id}" ${C.isDone?"checked":""} style="width: 18px; height: 18px; accent-color: ${J.color}; flex-shrink: 0; cursor: pointer;" />
                      <span style="font-size: 0.92rem; word-break: break-word; ${C.isDone?"text-decoration: line-through; opacity: 0.5;":""}">${xt(C.text)}</span>
                    </label>
                    <span style="background: rgba(15,23,42,0.5); border: 1px solid ${J.borderColor}; color: ${J.color}; padding: 3px 9px; border-radius: 10px; font-size: 0.68rem; font-weight: 900; white-space: nowrap;" title="${J.subtitle}">
                      ${J.emoji} ${J.title}
                    </span>
                    ${Ct(C)}
                    <button class="btn-delete-daily-plan" onclick="window.deletePlannerTask('${C.id}')" data-id="${C.id}" style="background: none; border: none; color: #ef4444; cursor: pointer; flex-shrink: 0;">✕</button>
                  </div>`}).join("")}
            </div>
            `}
          </div>
        `:""}
      </div>
    </div>
  `}function yo(o=!1){const e=p.getCategories();return`
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
        ${e.map(t=>{const n=Ee(t);return`
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
  `}if(typeof window<"u"){if(typeof window.openKonkurEstimatorModal!="function"||window.openKonkurEstimatorModal._isFallback){var It=function(){try{var o=document.getElementById("modal-konkur-estimator")||document.getElementById("modal-rank-estimator");o&&(o.style.display="flex",o.classList.add("active"))}catch{}try{window.appState?window.appState.activeModal="rankEstimator":typeof window.openRankEstimator=="function"&&window.openRankEstimator(),typeof window.renderApp=="function"&&window.renderApp()}catch{}try{var e=document.getElementById("modal-rank-estimator")||document.getElementById("modal-konkur-estimator");e&&(e.style.display="flex",e.classList.add("active"))}catch{}};It._isFallback=!0,typeof window.openKonkurEstimatorModal!="function"&&(window.openKonkurEstimatorModal=It)}window.toggleCategoriesAccordion=function(){window.isCategoriesAccordionOpen=!window.isCategoriesAccordionOpen,window.renderApp&&window.renderApp()},window.toggleLeitnerAccordion=function(){window.isLeitnerAccordionOpen=!window.isLeitnerAccordionOpen;const o=document.getElementById("leitner-cards-container");o&&(o.style.display=window.isLeitnerAccordionOpen?"block":"none"),window.renderApp&&window.renderApp()},window.closeLeitnerAccordion=function(){window.isLeitnerAccordionOpen=!1;const o=document.getElementById("leitner-cards-container");o&&(o.style.display="none"),window.renderApp&&window.renderApp()},window.openLeitnerAccordion=function(){window.isLeitnerAccordionOpen=!0;const o=document.getElementById("leitner-cards-container");o&&(o.style.display="block"),window.renderApp&&window.renderApp(),setTimeout(()=>{var e;(e=document.getElementById("section-leitner-box"))==null||e.scrollIntoView({behavior:"smooth"})},60)}}function Vo(){p.getThemeSettings();const o=p.getCategories()||[],e=!!window.isCategoriesAccordionOpen,t=a=>String(a).replace(/[0-9]/g,r=>"۰۱۲۳۴۵۶۷۸۹"[r]);return`
    <div class="main-container" style="padding-bottom: 90px; direction: rtl;">
      <div style="margin-bottom: 14px;">
        <h2 style="font-size: 1.05rem; font-weight: 800; color: #f8fafc; margin: 0 0 2px 0;">ابزارک‌ها</h2>
        <p style="font-size: 0.72rem; color: #8e8e9c; margin: 0;">دسترسی سریع به تمام ابزارهای کاربردی مطالعه</p>
      </div>

      <!-- 🛠️ Tools Grid (2 columns) -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-bottom: 16px;">
        ${[{icon:"🧠",title:"فلش‌کارت و لایتنر",desc:"تکرار فاصله‌دار هوشمند با ۵ خانه لایتنر",action:"window.openLeitnerAccordion()",color:"#a78bfa"},{icon:"📝",title:"جعبه ابزار امتحانات",desc:"برنامه‌ریزی، تخمین فصول و مرور امتحانات",action:"if(window.openExamBox) window.openExamBox(); else { window.appState.activeModal = 'examBox'; window.renderApp(); }",color:"#38bdf8"},{icon:"⏱️",title:"تایمر مطالعه",desc:"کرنومتر، پومودورو و ثبت خودکار زمان",action:"if(window.switchTab) window.switchTab(0)",color:"#f97316"},{icon:"📊",title:"معدل نهایی",desc:"محاسبه دقیق معدل کتبی، ترم و کل",action:"if(window.openGPACalculator) window.openGPACalculator(); else { window.appState.activeModal = 'gpaCalc'; window.renderApp(); }",color:"#34d399"},{icon:"🌙",title:"تنظیم خواب",desc:"برنامه‌ریزی ساعات خواب و بیداری سالم",action:"if(window.openSleepScheduler) window.openSleepScheduler(); else { window.appState.activeModal = 'sleepScheduler'; window.renderApp(); }",color:"#818cf8"},{icon:"🎯",title:"محاسبه درصد",desc:"محاسبه دقیق درصد از تست‌های صحیح و غلط",action:"if(window.openPercentCalculator) window.openPercentCalculator(); else { window.appState.activeModal = 'percentCalc'; window.renderApp(); }",color:"#fb923c"},{icon:"🏆",title:"تخمین رتبه",desc:"تخمین رتبه کنکور و تراز بر اساس درصدها",action:"window.openKonkurEstimatorModal && window.openKonkurEstimatorModal()",color:"#fbbf24"},{icon:"📅",title:"تقویم مطالعاتی",desc:"ماتریس ۲۴ ساعته مدیریت زمان و پارت‌ها",action:"if(window.switchTab) window.switchTab(1)",color:"#2dd4bf"}].map(a=>`
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

      <!-- 🧠 Collapsible Accordion Panel for Leitner Box -->
      ${mo()}

      <!-- 🔄 Cloud Sync Box (Kept intact) -->
      ${function(){let a=null;try{a=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}const r=p.getUserProfile()||{};let i=(a==null?void 0:a.phone)||(a==null?void 0:a.phone_number)||r.phone||"";return i&&i.startsWith("98")?i="0"+i.slice(2):i&&i.startsWith("+98")?i="0"+i.slice(3):i&&i.length===10&&i.startsWith("9")&&(i="0"+i),typeof window<"u"&&!window.handleForceCloudSync&&(window.handleForceCloudSync=async function(){const s=document.getElementById("btn-force-cloud-sync");s&&(s.innerHTML="در حال همگام‌سازی...");try{window.personalSyncService&&typeof window.personalSyncService.pushToCloud=="function"&&await window.personalSyncService.pushToCloud(),window.showToast?window.showToast("تمامی پارت‌ها و گروه‌ها با موفقیت همگام شدند ✅","success"):alert("تمامی پارت‌ها و گروه‌ها با موفقیت همگام شدند ✅")}catch(d){console.error(d),window.showToast&&window.showToast("خطا در همگام‌سازی","error")}finally{s&&(s.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg> همگام‌سازی فوری (Force Sync)')}}),i?`
            <div style="padding: 14px 16px; margin-bottom: 12px; border: 1px solid rgba(16, 185, 129, 0.2); background: rgba(16, 185, 129, 0.03); border-radius: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="width: 38px; height: 38px; border-radius: 12px; background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); display: flex; align-items: center; justify-content: center; font-size: 1.2rem;">🔄</div>
                  <div>
                    <h3 style="margin: 0; font-size: 0.85rem; font-weight: 800; color: #10b981; display: flex; align-items: center; gap: 6px;">
                      همگام‌سازی ابری و چنددستگاهی
                      <span style="font-size: 0.58rem; background: rgba(16, 185, 129, 0.15); color: #10b981; padding: 2px 6px; border-radius: 6px; font-weight: bold; border: 1px solid rgba(16, 185, 129, 0.3);">متصل و همگام با سرور ابری</span>
                    </h3>
                    <p style="margin: 3px 0 0 0; font-size: 0.72rem; color: #8e8e9c;">شماره متصل: <strong style="color: #e4e4e7; font-family: 'Outfit', monospace; letter-spacing: 1px;">${i}</strong></p>
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
            ${yo(!0)}
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
  `}function mo(){const o=p.getFlashcards()||[],e=p.getLeitnerStats()||{total:0,due:0,mastered:0,boxes:{1:0,2:0,3:0,4:0,5:0}},t=!!window.isLeitnerAccordionOpen,n=c=>String(c).replace(/[0-9]/g,g=>"۰۱۲۳۴۵۶۷۸۹"[g]);let a={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""};typeof window<"u"&&(window.leitnerState||(window.leitnerState=a),a=window.leitnerState);let r=[...o];if(a.filterBox==="due"){const c=Date.now();r=r.filter(g=>!g.nextReviewDate||g.nextReviewDate<=c)}else["1","2","3","4","5"].includes(String(a.filterBox))&&(r=r.filter(c=>String(c.box||1)===String(a.filterBox)));if(a.searchQuery){const c=a.searchQuery.toLowerCase();r=r.filter(g=>g.question&&g.question.toLowerCase().includes(c)||g.answer&&g.answer.toLowerCase().includes(c)||g.deck&&g.deck.toLowerCase().includes(c))}const i=a.filterBox==="due"?r:o;a.activeIndex>=i.length&&i.length>0&&(a.activeIndex=0);const s=i.length>0?i[a.activeIndex]:null,d={1:"#f87171",2:"#fbbf24",3:"#38bdf8",4:"#a78bfa",5:"#34d399"},l={1:"۱ روز",2:"۲ روز",3:"۴ روز",4:"۸ روز",5:"۱۶ روز"};return`
    <div id="section-leitner-box" style="padding: 14px 16px; margin-bottom: 12px; border: 1px solid rgba(255,255,255,0.06); background: #16171d; border-radius: 20px;">
      
      <!-- Accordion Header Bar -->
      <div onclick="window.toggleLeitnerAccordion()" 
           style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; user-select: none;">
        <div style="display: flex; align-items: center; gap: 10px;">
          <div style="width: 38px; height: 38px; border-radius: 12px; background: rgba(167, 139, 250, 0.15); border: 1px solid rgba(167, 139, 250, 0.3); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: #a78bfa;">
            🧠
          </div>
          <div>
            <h3 style="margin: 0; font-size: 0.88rem; font-weight: 800; color: #f8fafc; display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <span>جعبه لایتنر هوشمند</span>
              <span style="font-size: 0.65rem; background: rgba(167, 139, 250, 0.2); color: #a78bfa; padding: 2px 8px; border-radius: 8px; font-weight: bold; border: 1px solid rgba(167, 139, 250, 0.35);">
                ${n(e.total)} کارت (${n(e.due)} آماده مرور 🔥)
              </span>
            </h3>
            <p style="margin: 3px 0 0 0; font-size: 0.7rem; color: #8e8e9c;">مرور فاصله‌دار ابینگهاوس در ۵ خانه هوشمند</p>
          </div>
        </div>

        <button id="btn-toggle-leitner-accordion" type="button" onclick="event.stopPropagation(); window.toggleLeitnerAccordion();" style="display: flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); padding: 6px 12px; border-radius: 10px; cursor: pointer; color: #a78bfa;">
          <span style="font-size: 0.74rem; font-weight: 800; color: #a78bfa;">
            ${t?"بستن ⏏":"مشاهده و مرور 🔽"}
          </span>
        </button>
      </div>

      <!-- Collapsible Body (Flashcards Container) -->
      <div id="leitner-cards-container" style="display: ${t?"block":"none"}; margin-top: 14px; padding-top: 14px; border-top: 1px solid rgba(255,255,255,0.06); animation: fadeIn 0.25s ease;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 12px;">
            <div style="font-size: 0.75rem; color: #a1a1aa; font-weight: 700;">مدیریت فلش‌کارت‌ها و مرور روزانه:</div>
            <div style="display: flex; gap: 6px;">
              <button id="btn-toggle-add-flashcard-form" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); color: #e4e4e7; padding: 5px 10px; border-radius: 10px; font-size: 0.7rem; font-weight: 600; cursor: pointer;">➕ افزودن</button>

            </div>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; margin-bottom: 12px;">
            <div style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 6px 8px; text-align: center;"><div style="font-size: 0.62rem; color: #8e8e9c;">🗂️ کل</div><div style="font-size: 0.95rem; font-weight: 800; color: #fff; font-family: 'Outfit';">${e.total}</div></div>
            <div style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 6px 8px; text-align: center;"><div style="font-size: 0.62rem; color: #fbbf24;">🔥 آماده</div><div style="font-size: 0.95rem; font-weight: 800; color: #fbbf24; font-family: 'Outfit';">${e.due}</div></div>
            <div style="background: rgba(255,255,255,0.03); border-radius: 12px; padding: 6px 8px; text-align: center;"><div style="font-size: 0.62rem; color: #34d399;">🏆 تثبیت</div><div style="font-size: 0.95rem; font-weight: 800; color: #34d399; font-family: 'Outfit';">${e.mastered}</div></div>
          </div>
          <div style="background: rgba(255,255,255,0.03); border-radius: 14px; padding: 8px 10px; margin-bottom: 14px;">
            <div style="font-size: 0.66rem; font-weight: 600; color: #a1a1aa; margin-bottom: 6px;">📦 خانه‌های لایتنر:</div>
            <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 4px;">
              ${[1,2,3,4,5].map(c=>`<div class="btn-filter-leitner-box ${String(a.filterBox)===String(c)?"active":""}" data-box="${c}" style="background: ${String(a.filterBox)===String(c)?"rgba(124,58,237,0.15)":"transparent"}; border: 1px solid ${String(a.filterBox)===String(c)?"rgba(124,58,237,0.4)":"rgba(255,255,255,0.04)"}; border-radius: 10px; padding: 6px 4px; text-align: center; cursor: pointer;"><div style="font-size: 0.6rem; font-weight: 700; color: ${d[c]};">خانه ${c}</div><div style="font-size: 0.88rem; font-weight: 800; color: white; font-family: 'Outfit';">${e.boxes[c]||0}</div><div style="font-size: 0.55rem; color: #71717a;">${l[c]}</div></div>`).join("")}
            </div>
          </div>
          <div id="form-add-flashcard-container" style="display: ${a.showAddForm?"block":"none"}; background: rgba(255,255,255,0.03); border: 1px dashed rgba(124,58,237,0.3); border-radius: 16px; padding: 12px; margin-bottom: 14px;">
            <div style="font-weight: 700; font-size: 0.78rem; color: #c4b5fd; margin-bottom: 8px;">➕ افزودن فلش‌کارت جدید</div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <div><label style="font-size: 0.66rem; color: #8e8e9c; display: block; margin-bottom: 2px;">موضوع:</label><input type="text" id="input-new-fc-deck" placeholder="مثال: زیست‌شناسی..." class="form-input" style="width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 6px 10px; color: white; font-size: 0.75rem;" /></div>
              <div><label style="font-size: 0.66rem; color: #8e8e9c; display: block; margin-bottom: 2px;">❓ سؤال:</label><textarea id="input-new-fc-question" rows="2" placeholder="صورت سؤال..." class="form-input" style="width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 6px 10px; color: white; font-size: 0.75rem; resize: vertical;"></textarea></div>
              <div><label style="font-size: 0.66rem; color: #8e8e9c; display: block; margin-bottom: 2px;">💡 پاسخ:</label><textarea id="input-new-fc-answer" rows="2" placeholder="پاسخ..." class="form-input" style="width: 100%; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 6px 10px; color: white; font-size: 0.75rem; resize: vertical;"></textarea></div>
              <div style="display: flex; gap: 6px; justify-content: flex-end;"><button id="btn-cancel-add-flashcard" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); color: #a1a1aa; padding: 5px 12px; border-radius: 8px; font-size: 0.7rem; cursor: pointer;">انصراف</button><button id="btn-save-manual-flashcard" style="background: #7c3aed; border: none; color: white; padding: 5px 14px; border-radius: 8px; font-size: 0.7rem; font-weight: 700; cursor: pointer;">ذخیره ✨</button></div>
            </div>
          </div>
          <div style="margin-bottom: 14px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <div style="font-weight: 700; font-size: 0.8rem; color: #f1f5f9; display: flex; align-items: center; gap: 6px;"><span>🎯 مرور:</span>${i.length>0?`<span style="font-size: 0.64rem; color: #c4b5fd; background: rgba(255,255,255,0.04); padding: 1px 6px; border-radius: 6px; font-family: 'Outfit'; font-weight: 700;">${a.activeIndex+1} / ${i.length}</span>`:""}</div>
              ${i.length>1?'<div style="display: flex; gap: 4px;"><button id="btn-prev-leitner-card" style="padding: 3px 8px; font-size: 0.68rem; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; color: #a1a1aa; cursor: pointer;">‹</button><button id="btn-next-leitner-card" style="padding: 3px 8px; font-size: 0.68rem; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; color: #a1a1aa; cursor: pointer;">›</button></div>':""}
            </div>
            ${s?`<div id="leitner-active-card" class="leitner-card-flip ${a.isFlipped?"flipped":""}" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 18px; padding: 20px 16px; min-height: 170px; display: flex; flex-direction: column; justify-content: space-between;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;"><span style="font-size: 0.64rem; color: #c4b5fd; background: rgba(255,255,255,0.04); padding: 2px 8px; border-radius: 8px; font-weight: 700;">📚 ${s.deck||"عمومی"}</span><span style="font-size: 0.64rem; color: ${d[s.box||1]}; background: rgba(255,255,255,0.04); padding: 2px 8px; border-radius: 8px; font-weight: 700;">📦 خانه ${s.box||1}</span></div>
              <div style="margin-bottom: 12px; text-align: center; padding: 8px 4px;"><div style="font-size: 0.64rem; color: #8e8e9c; margin-bottom: 4px;">❓</div><div style="font-size: 0.92rem; font-weight: 700; color: #f8fafc; line-height: 1.6;">${s.question}</div></div>
              <div id="leitner-answer-container" style="display: ${a.isFlipped?"block":"none"}; background: rgba(16,185,129,0.06); border: 1px solid rgba(16,185,129,0.2); border-radius: 14px; padding: 10px 12px; margin-bottom: 12px; text-align: center;"><div style="font-size: 0.64rem; color: #34d399; font-weight: 700; margin-bottom: 3px;">💡</div><div style="font-size: 0.84rem; color: #e2e8f0; line-height: 1.5;">${s.answer}</div></div>
              <div style="display: flex; gap: 6px; justify-content: space-between; align-items: center; flex-wrap: wrap;">
                <button id="btn-flip-active-card" style="flex: 1; min-width: 120px; background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); color: #e4e4e7; padding: 8px; border-radius: 10px; font-size: 0.72rem; font-weight: 700; cursor: pointer;">${a.isFlipped?"🙈 پنهان":"👁️ مشاهده پاسخ"}</button>
                ${a.isFlipped?`<div style="display: flex; gap: 6px; flex: 2; min-width: 200px;"><button class="btn-leitner-review-action" data-id="${s.id}" data-correct="false" style="flex: 1; background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.3); color: #f87171; padding: 8px; border-radius: 10px; font-size: 0.7rem; font-weight: 700; cursor: pointer;">❌ مرور</button><button class="btn-leitner-review-action" data-id="${s.id}" data-correct="true" style="flex: 1; background: #7c3aed; border: none; color: white; padding: 8px; border-radius: 10px; font-size: 0.7rem; font-weight: 700; cursor: pointer;">✅ بلد ⬆️</button></div>`:""}
              </div>
            </div>`:'<div style="background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.06); border-radius: 16px; padding: 22px 16px; text-align: center;"><div style="font-size: 1.5rem; margin-bottom: 4px;">🎉</div><div style="font-size: 0.82rem; font-weight: 700; color: #fff; margin-bottom: 2px;">هیچ کارتی وجود ندارد</div><p style="font-size: 0.68rem; color: #8e8e9c; margin-bottom: 10px;">کارت جدید بسازید یا نمونه‌ها را بارگذاری کنید.</p><button id="btn-seed-default-flashcards" style="background: #7c3aed; border: none; color: white; padding: 6px 14px; border-radius: 10px; font-size: 0.7rem; font-weight: 700; cursor: pointer;">📥 بارگذاری</button></div>'}
          </div>
          <div style="border-top: 1px solid rgba(255,255,255,0.04); padding-top: 10px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
              <div style="font-weight: 700; font-size: 0.78rem; color: #cbd5e1;">📚 کارت‌ها (${r.length}):</div>
              <div style="display: flex; gap: 4px;">
                <button class="btn-filter-leitner-tab ${a.filterBox==="all"?"active":""}" data-filter="all" style="padding: 3px 8px; font-size: 0.64rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); background: ${a.filterBox==="all"?"#7c3aed":"rgba(255,255,255,0.04)"}; color: ${a.filterBox==="all"?"#fff":"#8e8e9c"}; font-weight: 600; cursor: pointer;">همه (${o.length})</button>
                <button class="btn-filter-leitner-tab ${a.filterBox==="due"?"active":""}" data-filter="due" style="padding: 3px 8px; font-size: 0.64rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.06); background: ${a.filterBox==="due"?"#7c3aed":"rgba(255,255,255,0.04)"}; color: ${a.filterBox==="due"?"#fff":"#fbbf24"}; font-weight: 600; cursor: pointer;">🔥 (${e.due})</button>
              </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 6px; max-height: 280px; overflow-y: auto;">
              ${r.map(c=>`<div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.04); border-radius: 12px; padding: 8px 10px; display: flex; justify-content: space-between; align-items: flex-start; gap: 8px;"><div style="flex: 1; overflow: hidden;"><div style="display: flex; align-items: center; gap: 6px; margin-bottom: 2px;"><span style="font-size: 0.58rem; color: ${d[c.box||1]}; background: rgba(255,255,255,0.04); padding: 1px 5px; border-radius: 4px; font-weight: 700;">خانه ${c.box||1}</span><span style="font-size: 0.62rem; color: #8e8e9c;">${c.deck||"عمومی"}</span></div><div style="font-size: 0.74rem; font-weight: 700; color: #fff; margin-bottom: 2px; line-height: 1.3;">${c.question}</div><div style="font-size: 0.68rem; color: #a1a1aa; line-height: 1.4; background: rgba(255,255,255,0.02); padding: 4px 8px; border-radius: 8px; margin-top: 2px;">💡 ${c.answer}</div></div><button class="btn-delete-flashcard" data-id="${c.id}" title="حذف" style="background: none; border: none; color: #ef4444; font-size: 0.8rem; cursor: pointer; padding: 2px; opacity: 0.7;">🗑️</button></div>`).join("")}
            </div>
          </div>
          <div style="margin-top: 14px; text-align: center;">
            <button type="button" id="btn-close-leitner" data-action="toggle-leitner" onclick="event.stopPropagation(); if(window.closeLeitnerAccordion) window.closeLeitnerAccordion(); else window.toggleLeitnerAccordion();" style="background: rgba(167, 139, 250, 0.1); border: 1px solid rgba(167, 139, 250, 0.25); color: #c4b5fd; padding: 6px 18px; border-radius: 10px; font-size: 0.72rem; font-weight: 700; cursor: pointer;">
              بستن ⏏
            </button>
          </div>
        </div>

    </div>
  `}function bo(o={}){const t=(o.articlesAccordions||{questionBankHub:!1}).questionBankHub,n=Dt.filter(a=>a.id!=="questions-1404");return`
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
                  ${Yt.map(a=>`
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
  `}function Ft(o){const e=["الف","ب","ج","د"],t=Array.isArray(o.options)?o.options:[],n=typeof o.correct_index=="number"?o.correct_index:e.indexOf(o.correct_option),a=o.options_analysis?Object.entries(o.options_analysis):[];return`
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
        ${t.map((r,i)=>{const s=e[i]||i+1,d=i===n||s===o.correct_option;return`
            <div style="display: flex; align-items: flex-start; gap: 8px; padding: 10px 12px; border-radius: 10px; font-size: 0.78rem; line-height: 1.6; ${d?"background: rgba(16, 185, 129, 0.12); border: 1.5px solid rgba(16, 185, 129, 0.4); border-right: 4px solid #10b981; color: #6ee7b7; font-weight: 700;":"background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.07); color: #cbd5e1;"}">
              <span style="display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 6px; font-size: 0.74rem; font-weight: 800; flex-shrink: 0; ${d?"background: #10b981; color: #ffffff;":"background: rgba(255,255,255,0.08); color: #94a3b8;"}">
                ${s}
              </span>
              <span style="flex: 1;">${r}</span>
              ${d?'<span style="font-size: 0.68rem; background: #10b981; color: #ffffff; padding: 2px 6px; border-radius: 4px; margin-right: auto; font-weight: 700;">✓ پاسخ</span>':""}
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
            ${a.map(([r,i])=>{const s=r===o.correct_option;return`
                <div style="font-size: 0.76rem; line-height: 1.65; padding: 4px 8px; border-radius: 6px; ${s?"background: rgba(16, 185, 129, 0.08);":""}">
                  <span style="font-weight: 800; margin-left: 4px; ${s?"color: #34d399;":"color: #f87171;"}">
                    گزینه (${r}) ${s?"★ صحیح":"تله"}:
                  </span>
                  <span style="color: #cbd5e1;">${i}</span>
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
          ${o.keywords.map(r=>`<span style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); color: #94a3b8; font-size: 0.68rem; padding: 2px 8px; border-radius: 6px;">#${r}</span>`).join("")}
        </div>
      `:""}

    </div>
  `}function xo(){const o=Ke.length,e={};Ke.forEach(a=>{const r=a.category||"سایر";e[r]=(e[r]||0)+1});const t=Object.keys(e).sort((a,r)=>e[r]-e[a]),n=Ke.slice(0,30).map(a=>Ft(a)).join("");return`
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
  `}function wo(o){const e=Dt.find(a=>a.id===o);if(!e)return`
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
            ${e.downloads.map(a=>{const r=a.format==="PDF",i=r?"#f43f5e":a.format==="JSON"?"#fbbf24":"#34d399",s=r?"rgba(244, 63, 94, 0.2)":a.format==="JSON"?"rgba(234, 179, 8, 0.2)":"rgba(16, 185, 129, 0.2)",d=r?"rgba(244, 63, 94, 0.4)":a.format==="JSON"?"rgba(234, 179, 8, 0.4)":"rgba(16, 185, 129, 0.4)";return`
                <div class="download-item-card" style="background: rgba(31, 32, 41, 0.85); border: 1.5px solid ${r?"rgba(244, 63, 94, 0.35)":"rgba(255, 255, 255, 0.08)"}; border-radius: 12px; padding: 14px; display: flex; flex-direction: column; justify-content: space-between; gap: 12px; ${r?"box-shadow: 0 4px 16px rgba(244, 63, 94, 0.15);":""}">
                  <div>
                    <div style="display: flex; align-items: center; justify-content: space-between; gap: 6px; margin-bottom: 6px;">
                      <span style="font-size: 0.68rem; font-weight: 800; background: ${s}; color: ${i}; border: 1px solid ${d}; padding: 2px 8px; border-radius: 6px;">
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

                  ${r?`
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
        ${n?xo():""}
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
  `}function ho(o){if(o!=="khordad-1405-traps-analysis")return;const e=document.getElementById("traps-cards-list"),t=document.getElementById("traps-search-input"),n=document.getElementById("traps-count-badge"),a=document.getElementById("btn-traps-load-more"),r=document.getElementById("btn-traps-load-all"),i=document.getElementById("traps-load-more-wrapper"),s=document.querySelectorAll(".trap-cat-chip");if(!e)return;let d="all",l="",c=30;function g(){let b=Ke;if(d!=="all"&&(b=b.filter(u=>u.category===d)),l.trim()){const u=l.trim().toLowerCase();b=b.filter(x=>x.question&&x.question.toLowerCase().includes(u)||x.question_trap&&x.question_trap.toLowerCase().includes(u)||x.clinical_pearl&&x.clinical_pearl.toLowerCase().includes(u)||x.mnemonic&&x.mnemonic.toLowerCase().includes(u)||Array.isArray(x.keywords)&&x.keywords.some(y=>y.toLowerCase().includes(u))||Array.isArray(x.options)&&x.options.some(y=>y.toLowerCase().includes(u)))}const f=b.length,k=b.slice(0,c);k.length===0?e.innerHTML=`
        <div style="text-align: center; padding: 40px 16px; background: rgba(0,0,0,0.2); border-radius: 12px; border: 1px dashed rgba(255,255,255,0.1);">
          <div style="font-size: 2rem; margin-bottom: 8px;">🔍</div>
          <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">هیچ تستی با این عبارت یا در این دسته‌بندی یافت نشد.</p>
        </div>
      `:e.innerHTML=k.map(u=>Ft(u)).join(""),n&&(n.textContent=`نمایش ${k.length} از ${f} سوال`),i&&(k.length>=f?i.style.display="none":i.style.display="block")}if(t){let b=null;t.oninput=f=>{clearTimeout(b),b=setTimeout(()=>{l=f.target.value,c=30,g()},150)}}s.forEach(b=>{b.onclick=()=>{s.forEach(f=>{f.style.background="rgba(255, 255, 255, 0.05)",f.style.color="#cbd5e1",f.style.border="1px solid rgba(255, 255, 255, 0.08)"}),b.style.background="#7c3aed",b.style.color="#ffffff",b.style.border="none",d=b.dataset.cat||"all",c=30,g()}}),a&&(a.onclick=()=>{c+=30,g()}),r&&(r.onclick=()=>{c=Ke.length,g()})}typeof window<"u"&&(window.bindSingleArticleEvents=ho);function vo(o={}){const e=o.selectedArticleId!==void 0?o.selectedArticleId:window.appState?window.appState.selectedArticleId:null;return e==="questions-1404"?Vt():e?wo(e):bo(o)}function So(){typeof window.renderApp=="function"&&window.renderApp()}typeof window<"u"&&(window.renderArticlesView=vo,window.initArticlesView=So);const[ko,_o]=p.getTodayJalali();let it=ko,rt=_o;const zt=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],$o=["✨","💧","🏃","😴","🚶","🧘","🥗","📚","🛌","🌙","☕","💊","💻","🎯","🔥","⭐","📝","🍎","🧠","🚴","📖","💪","🎨","🎧","⏰","🏊","🥊","☀️","⚡","🏆"];window.habitModalSelectedEmoji=window.habitModalSelectedEmoji||"✨";window.habitModalEditingId=null;window.selectHabitEmoji=o=>{window.habitModalSelectedEmoji=o;const e=document.getElementById("habit-emoji-preview");e&&(e.textContent=o,e.style.transform="scale(1.25)",setTimeout(()=>{e&&(e.style.transform="scale(1)")},150)),document.querySelectorAll(".habit-emoji-picker-btn").forEach(t=>{t.dataset.emoji===o?(t.style.background="rgba(56, 189, 248, 0.25)",t.style.borderColor="#38bdf8",t.style.transform="scale(1.15)",t.style.boxShadow="0 0 12px rgba(56, 189, 248, 0.4)"):(t.style.background="rgba(255, 255, 255, 0.05)",t.style.borderColor="rgba(255, 255, 255, 0.1)",t.style.transform="scale(1)",t.style.boxShadow="none")})};window.triggerCompletionBurst=o=>{try{const e=o?o.clientX||o.pageX:window.innerWidth/2,t=o?o.clientY||o.pageY:window.innerHeight/2,n=["✨","⭐","🎉","🔥","🌟","💥"],a=document.createElement("div");a.style.cssText=`position: fixed; left: ${e}px; top: ${t}px; pointer-events: none; z-index: 99999;`,document.body.appendChild(a);for(let r=0;r<6;r++){const i=document.createElement("span"),s=n[Math.floor(Math.random()*n.length)],d=Math.PI*2*r/6+(Math.random()*.4-.2),l=35+Math.random()*25,c=Math.cos(d)*l,g=Math.sin(d)*l-15;i.textContent=s,i.style.cssText=`
        position: absolute; left: 0; top: 0; font-size: 1.1rem;
        transform: translate(-50%, -50%) scale(0.5); opacity: 1;
        transition: transform 0.55s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.55s ease;
      `,a.appendChild(i),requestAnimationFrame(()=>{i.style.transform=`translate(${c}px, ${g}px) scale(1.3) rotate(${Math.random()*60-30}deg)`,i.style.opacity="0"})}setTimeout(()=>{a&&a.parentNode&&a.parentNode.removeChild(a)},600)}catch{}};window.handleHabitDayClick=(o,e,t=null)=>{var s,d;t&&typeof t.stopPropagation=="function"&&t.stopPropagation();const n=p.getHabits(),a=`${it}_${rt}`,r=n.find(l=>l.id==o||String(l.id)===String(o)),i=((d=(s=r==null?void 0:r.completedDays)==null?void 0:s[a])==null?void 0:d[e])||0;p.cycleHabitDay(o,a,e),i===0&&window.triggerCompletionBurst&&window.triggerCompletionBurst(t),window.renderApp&&window.renderApp()};window.toggleTodayHabit=(o,e=null)=>{var l,c;e&&typeof e.stopPropagation=="function"&&e.stopPropagation();const[t,n,a]=p.getTodayJalali(),r=`${t}_${n}`,s=p.getHabits().find(g=>g.id==o||String(g.id)===String(o)),d=((c=(l=s==null?void 0:s.completedDays)==null?void 0:l[r])==null?void 0:c[a])||0;p.cycleHabitDay(o,r,a),d===0&&window.triggerCompletionBurst&&window.triggerCompletionBurst(e),window.renderApp&&window.renderApp()};window.toggleRoutineChecklistItem=(o,e=null)=>{e&&typeof e.stopPropagation=="function"&&e.stopPropagation();const n=(p.getRoutineChecklist()||[]).find(r=>r.id==o||String(r.id)===String(o)),a=n?!n.completed:!0;p.toggleRoutineChecklistItem(o),a&&window.triggerCompletionBurst&&window.triggerCompletionBurst(e),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp()};window.addRoutineChecklistItem=()=>{const o=document.getElementById("input-routine-checklist-text");!o||!o.value.trim()||(p.addRoutineChecklistItem(o.value.trim()),o.value="",window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp())};window.deleteRoutineChecklistItem=o=>{p.deleteRoutineChecklistItem(o),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp()};window.handleChangeMonth=o=>{rt=parseInt(o),window.renderApp&&window.renderApp()};window.handleChangeYear=o=>{it=parseInt(o),window.renderApp&&window.renderApp()};window.openAddHabitModal=()=>{window.habitModalEditingId=null,window.habitModalSelectedEmoji="✨";const o=document.getElementById("add-habit-modal"),e=document.getElementById("habit-modal-title"),t=document.getElementById("habit-title"),n=document.getElementById("btn-save-habit-modal");e&&(e.textContent="✨ افزودن روتین و عادت جدید"),t&&(t.value=""),n&&(n.textContent="ذخیره روتین"),o&&(o.style.display="flex"),window.selectHabitEmoji("✨"),t&&setTimeout(()=>t.focus(),100)};window.openEditHabitModal=o=>{const t=p.getHabits().find(d=>d.id==o||String(d.id)===String(o));if(!t)return;window.habitModalEditingId=o;const n=t.emoji||"✨";window.habitModalSelectedEmoji=n;const a=document.getElementById("add-habit-modal"),r=document.getElementById("habit-modal-title"),i=document.getElementById("habit-title"),s=document.getElementById("btn-save-habit-modal");r&&(r.textContent="✏️ ویرایش روتین و عادت"),i&&(i.value=t.title||""),s&&(s.textContent="به‌روزرسانی روتین"),a&&(a.style.display="flex"),window.selectHabitEmoji(n),i&&setTimeout(()=>i.focus(),100)};window.closeAddHabitModal=()=>{const o=document.getElementById("add-habit-modal");o&&(o.style.display="none"),window.habitModalEditingId=null};window.saveNewHabit=()=>{const o=document.getElementById("habit-title"),e=o?o.value.trim():"";if(!e){alert("لطفاً عنوان روتین یا عادت را وارد کنید.");return}const t=window.habitModalSelectedEmoji||"✨";window.habitModalEditingId?p.updateHabit(window.habitModalEditingId,{title:e,emoji:t}):p.addHabit(e,"روزانه","08:00",t),window.closeAddHabitModal(),window.renderApp()};window.deleteHabitGlobal=o=>{confirm("آیا از حذف این عادت اطمینان دارید؟")&&(p.deleteHabit(o),window.renderApp())};window.planexPublicRoutines=[];window.planexHasFetchedRoutines=!1;window.fetchPublicRoutines=async()=>{try{const o=localStorage.getItem("planex_jwt_token");if(!o)return;const e=await fetch(`${ue}/api/routines/public.php`,{headers:{Authorization:`Bearer ${o}`}}),t=await e.json();t.success?(window.planexPublicRoutines=t.routines,window.planexHasFetchedRoutines=!0,window.renderApp()):e.status===403&&(window.planexReciprocityError=t.message,window.planexHasFetchedRoutines=!0,window.renderApp())}catch(o){console.error("Error fetching routines",o)}};window.copyPublicRoutine=async o=>{try{const e=localStorage.getItem("planex_jwt_token");if(!e){alert("لطفاً ابتدا وارد حساب کاربری خود شوید.");return}const n=await(await fetch(`${ue}/api/routines/copy.php?id=${encodeURIComponent(o)}`,{method:"POST",headers:{Authorization:`Bearer ${e}`}})).json();n.success?(alert("✅ "+n.message),p.addHabit("روتین کپی شده جدید"),window.renderApp()):alert("❌ خطا: "+n.message)}catch{alert("خطا در برقراری ارتباط با سرور.")}};window.toggleMyRoutinePublic=(o,e)=>{alert(!e?"📢 روتین شما عمومی شد!":"🔒 روتین شما خصوصی شد."),window.renderApp()};window.PRE_MADE_ROUTINES=[{id:"miracle_morning",title:"🌅 معجزه صبحگاهی (Miracle Morning)",desc:"شروع پرانرژی روز با تمرکز، ذهن‌آگاهی و انگیزه بالا",category:"Morning",tasks:["🛏️ مرتب کردن تخت خواب (۱ دقیقه)","🧘 تنفس عمیق و مدیتیشن صبحگاهی (۱ دقیقه)","🗣️ بیان اهداف با جملات تأکیدی مثبت (۱ دقیقه)","🖼️ تجسم خودِ آینده و اهداف بزرگ (۱ دقیقه)","🏋️‍♂️ حرکات کششی و ورزش سبک (۱ دقیقه)","📖 مطالعه و یادگیری مطلب جدید (۱ دقیقه)","📕 ژورنال‌نویسی و ثبت افکار و احساسات (۱ دقیقه)"]},{id:"calm_ready_morning",title:"☕ صبح آرام و آماده (Calm & Ready Morning)",desc:"آماده‌سازی روزانه بدون عجله، استرس و سردرگمی",category:"Morning",tasks:["💧 نوشیدن یک لیوان آب ولرم (۱ دقیقه)","🚿 دوش گرفتن و شادابی صبح (۱۵ دقیقه)","🧴 روتین مراقبت از پوست (۴ دقیقه)","👕 تعویض لباس و آماده شدن (۵ دقیقه)","💇 استایل مو و ظاهر (۲۰ دقیقه)","📋 بررسی جدول و برنامه روزانه (۵ دقیقه)","👜 جمع‌آوری و آماده کردن وسایل ضروری (۱۰ دقیقه)"]},{id:"deep_study",title:"📚 آماده‌سازی مطالعه عمیق (Study Routine)",desc:"فراهم کردن شرایط محیطی برای حداکثر یادگیری و تمرکز",category:"Study",tasks:["🎒 آماده کردن تمام کتب و جزوات مطالعه (۱۰ دقیقه)","💡 تنظیم نور، زاویه چراغ و روشنایی محیط (۱ دقیقه)","📋 مشخص کردن پارت‌ها و بودجه‌بندی روز (۱ دقیقه)","🧹 مرتب و خلوت کردن کامل میز کار (۱ دقیقه)","⏱️ بلاک تمرکز و مطالعه عمیق بدون حواس‌پرتی (۵۰ دقیقه)"]},{id:"exercise_health",title:"🏃‍♀️ ورزش، تحرک و شادابی (Exercise & Body)",desc:"کاهش استرس روزانه، افزایش انعطاف‌پذیری و تقویت حافظه",category:"Exercise",tasks:["🏋️ تمرینات ورزشی و بدنسازی (۱۵ دقیقه)","🤸 حرکات کششی و افزایش انعطاف بدن (۱۰ دقیقه)","🏃 دویدن یا پیاده‌روی سریع (۳۰ دقیقه)","🧘 یوگا و تنفس پیوسته ضد اضطراب (۲۰ دقیقه)","🌳 پیاده‌روی در فضای باز و هوای آزاد (۴۰ دقیقه)"]},{id:"productivity_boost",title:"🚀 افزایش بهره‌وری و اقدام سریع (Productivity)",desc:"شکستن تنبلی، اولویت‌بندی تسک‌ها و شروع بدون معطلی",category:"Productivity",tasks:["🎯 انتخاب مهم‌ترین و سرنوشت‌سازترین کار امروز","📝 یادداشت ۳ تسک حیاتی و کلیدی روز (۵ دقیقه)","📌 انتخاب ۱ تسک فوری برای ۳۰ دقیقه آینده (۳ دقیقه)","⚡ شمارش معکوس ۵ ثانیه‌ای و پرتاب به سمت عمل (۵ ثانیه)","📍 تعیین دقیق زمان و مکان اجرای تسک (۳ دقیقه)"]},{id:"relaxation_mind",title:"🌸 آرامش، ذهن‌آگاهی و تخلیه روان (Relaxation)",desc:"استراحت اصولی مغز، آرام‌سازی ذهن و بازیابی انرژی",category:"Relaxation",tasks:["👥 تماس یا پیام به یک دوست و احوال‌پرسی (۱۰ دقیقه)","📝 یادداشت‌برداری آزاد و تخلیه ذهن در دفترچه (۲۰ دقیقه)","🌤️ خیره شدن به آسمان، بستن چشم‌ها و حس نور خورشید (۲ دقیقه)","🧹 مرتب کردن محیط اطراف برای آرامش بصری (۱۰ دقیقه)","🪷 بازتاب روز، سپاسگزاری و مرور حس و حال (۵ دقیقه)"]},{id:"step_away_stress",title:"🌿 فاصله‌گیری از استرس (Step Away from Stress)",desc:"تکنیک‌های ساده و سریع برای سبک کردن ذهن در فشارهای کاری",category:"Stress Relief",tasks:["🧠 توجه و پذیرش احساس فعلی بدون قضاوت (۱ دقیقه)","✏️ نوشتن افکار نگران‌کننده روی کاغذ (۲ دقیقه)","🤝 نگاه به این موقعیت از زاویه دید یک دوست صمیمی (۲ دقیقه)","🎯 خالی کردن ذهن و شروع با یک اقدام فیزیکی بسیار کوچک (۳ دقیقه)","🌸 مشاهده و احساس تغییر درونی ایجاد شده (۱ دقیقه)"]},{id:"sos_breathing",title:"🫁 تنفس نجات‌بخش و گراندینگ (SOS Breathing)",desc:"وقتی تنفس سنگین می‌شود و نیاز به اتصال به لحظه حال داری",category:"SOS",tasks:["🧘 الگوی تنفسی ۴ به ۶ عمیق (۱ دقیقه)","❤️ گراندینگ و قرار دادن دست‌ها روی قفسه سینه/کف دست‌ها (۱ دقیقه)","🌳 خیره شدن به یک نقطه ثابت در محیط (۱ دقیقه)","🎧 گوش سپردن فعال به ۳ صدای مختلف محیطی (۱ دقیقه)","🪷 ۳ بار بازدم آرام، عمیق و طولانی (۱ دقیقه)"]},{id:"sos_anxiety",title:"🛡️ مهار آنی اضطراب حاد (When You Feel Anxious)",desc:"تکنیک حواس پنج‌گانه برای بازگشت سریع به زمان حال",category:"SOS",tasks:["👓 پیدا کردن ۵ شیء با رنگ‌های مختلف در اتاق (۱ دقیقه)","🎧 شناسایی و تفکیک ۳ صدای پیرامون (۱ دقیقه)","✍️ یادداشت یک حس بدنی فعلی (۱ دقیقه)","🧊 لمس یا شستن دست‌ها با آب خنک (۱ دقیقه)","☕ در دست گرفتن یک فنجان یا نوشیدنی گرم (۱ دقیقه)"]},{id:"sos_mood_swings",title:"⚖️ بازگشت به تعادل احساسی (When Mood Swings)",desc:"کنترل نوسانات خلقی ناگهانی و بازیابی آرامش درونی",category:"SOS",tasks:["🪷 احساس دمای محیط و تماس نسیم/سرما (۱ دقیقه)","🎧 پخش و شنیدن یک قطعه صوتی آرامش‌بخش (۱ دقیقه)","❤️ فشردن ملایم کف پاها به زمین و حس تکیه‌گاه (۱ دقیقه)","💡 فشردن انگشتان دست تک‌به‌تک و متمرکز (۱ دقیقه)","✍️ نوشتن جمله آرام‌بخش «من در امانم و حالم خوب است» (۱ دقیقه)"]}];window.clonePreMadeRoutine=o=>{const e=window.PRE_MADE_ROUTINES.find(t=>t.id===o);e&&(e.tasks.forEach(t=>{p.addHabit(t)}),alert(`✅ تمام تسک‌های روتین "${e.title}" با موفقیت به لیست عادات شما اضافه شد!`),window.renderApp())};function To(o,e){let t="";for(let n=0;n<5;n++){const a=n===4?3:7;let r=0;for(let l=n*7+1;l<=Math.min((n+1)*7,31);l++)r+=o[l-1]||0;const i=a*e,s=i>0?Math.round(r/i*100):0,d=100.5-100.5*s/100;t+='<div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">',t+='<div style="position: relative; width: 40px; height: 40px;">',t+='<svg width="40" height="40" viewBox="0 0 40 40">',t+='<circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="4"></circle>',t+='<circle cx="20" cy="20" r="16" fill="none" stroke="var(--primary-accent)" stroke-width="4" stroke-dasharray="100.5" stroke-dashoffset="'+d+'" stroke-linecap="round" transform="rotate(-90 20 20)"></circle>',t+="</svg>",t+='<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; font-family: Outfit;">'+s+"%</div>",t+="</div>",t+='<span style="font-size: 0.6rem; color: var(--text-secondary);">هفته '+(n+1)+"</span>",t+="</div>"}return t}function qo(o={}){const{routinesAccordions:e={consultation:!1,statsChart:!1,habitTracker:!1}}=o,t=p.getHabits(),n=`${it}_${rt}`,a=p.getRoutineChecklist()||[];let r=t.length,i=r*31,s=0;const d=new Array(31).fill(0);t.forEach(y=>{var _;const h=((_=y.completedDays)==null?void 0:_[n])||{};for(let m=1;m<=31;m++)h[m]===1&&(s++,d[m-1]++)});const l=i>0?Math.round(s/i*100):0,[c,g,b]=p.getTodayJalali(),f=`${c}_${g}`,k=y=>String(y).replace(/[0-9]/g,h=>"۰۱۲۳۴۵۶۷۸۹"[h]);let u=0;t.forEach(y=>{var _;(((_=y.completedDays)==null?void 0:_[f])||{})[b]===1&&u++});const x=r>0?Math.round(u/r*100):0;return!window.planexHasFetchedRoutines&&localStorage.getItem("planex_jwt_token")&&(window.planexHasFetchedRoutines=!0,setTimeout(()=>window.fetchPublicRoutines(),500)),`
    <div class="main-container" style="padding-bottom: 100px;">
      
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
                ${k(u)} از ${k(r)} روتین امروز انجام شد (${k(x)}٪)
              </span>
            </div>
          </div>
          <div style="background: #1f2029; border: 1px solid rgba(16, 185, 129, 0.35); color: #10b981; padding: 4px 12px; border-radius: 12px; font-weight: 900; font-size: 0.85rem; font-family: 'Outfit', sans-serif;">
            ${k(x)}٪
          </div>
        </div>

        <!-- Progress Fill Bar -->
        <div style="width: 100%; height: 8px; background: rgba(0, 0, 0, 0.35); border-radius: 6px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.08);">
          <div style="height: 100%; width: ${x}%; background: linear-gradient(90deg, #10b981 0%, #38bdf8 100%); border-radius: 6px; transition: width 0.6s ease; box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);"></div>
        </div>

        <!-- Today's Habits Quick-Toggle List -->
        ${t.length>0?`
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255, 255, 255, 0.08); display: flex; flex-direction: column; gap: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.78rem; font-weight: 700; color: #e2e8f0;">⚡ ثبت سریع عادات امروز (${k(b)} ${zt[g-1]}):</span>
              <span style="font-size: 0.72rem; color: #94a3b8;">با یک کلیک علامت بزنید</span>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${t.map(y=>{var z,B;const h=((B=(z=y.completedDays)==null?void 0:z[f])==null?void 0:B[b])||0;let _="rgba(255, 255, 255, 0.05)",m="rgba(255, 255, 255, 0.1)",w="#cbd5e1",T="○",A="ثبت نشده";return h===1?(_="rgba(16, 185, 129, 0.22)",m="rgba(16, 185, 129, 0.6)",w="#34d399",T="✓",A="انجام شد"):h===2&&(_="rgba(239, 68, 68, 0.22)",m="rgba(239, 68, 68, 0.6)",w="#f87171",T="✕",A="انجام نشد"),`
                  <button type="button" onclick="window.toggleTodayHabit('${y.id}', event)"
                    style="display: flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 12px; background: ${_}; border: 1px solid ${m}; color: ${w}; cursor: pointer; transition: all 0.2s ease; font-family: inherit; font-size: 0.8rem; font-weight: 700;"
                    title="کلیک برای تغییر وضعیت روتین امروز (انجام شد / انجام نشد / ریست)">
                    <span style="font-size: 0.95rem;">${y.emoji||"✨"}</span>
                    <span>${y.title}</span>
                    <span style="background: rgba(0,0,0,0.3); border-radius: 6px; padding: 1px 6px; font-size: 0.72rem; font-family: 'Outfit'; font-weight: 800;">${T} ${A}</span>
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
                ${Array.from({length:10},(y,h)=>1401+h).map(y=>`<option value="${y}" ${y===it?"selected":""} style="color: #000;">${y}</option>`).join("")}
              </select>
              
              <div style="display: flex; gap: 6px;">
                ${zt.map((y,h)=>`
                  <button onclick="window.handleChangeMonth(${h+1})" class="${rt===h+1?"btn-primary":"glass-panel"}" style="padding: 6px 12px; border: none; border-radius: 12px; font-size: 0.8rem; white-space: nowrap; cursor: pointer;">
                    ${y}
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
                    ${Array.from({length:31},(y,h)=>`
                      <th style="padding: 4px; font-family: 'Outfit', sans-serif; font-weight: normal; color: var(--text-secondary); width: 26px;">${h+1}</th>
                    `).join("")}
                  </tr>
                </thead>
                <tbody>
                  ${t.length===0?'<tr><td colspan="33" style="padding: 20px; color: var(--text-secondary);">هیچ عادتی ثبت نشده است.</td></tr>':""}
                  ${t.map(y=>{var A;const h=((A=y.completedDays)==null?void 0:A[n])||{};let _=0,m=0,w=0;for(let z=1;z<=31;z++)h[z]===1?(_++,w++):w=0,w>m&&(m=w);const T=Math.round(_/31*100);return`
                    <tr>
                      <td class="habit-matrix-col-title" style="text-align: right; padding-right: 10px; position: sticky; right: 0; background: var(--bg-dark); z-index: 2; border-radius: 0 8px 8px 0; border: 1px solid rgba(255,255,255,0.05); border-left: none;">
                        <div style="display: flex; align-items: center; justify-content: space-between; overflow: hidden; gap: 4px;">
                          <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 600; display: flex; align-items: center; gap: 6px;">
                            <span style="font-size: 1.05rem;">${y.emoji||"✨"}</span>
                            <span>${y.title}</span>
                            ${m>0?`<span style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.35); color: #f59e0b; padding: 1px 6px; border-radius: 8px; font-size: 0.68rem; font-weight: 800; font-family: 'Outfit', sans-serif; display: inline-flex; align-items: center; gap: 2px;" title="استریک پیوستگی روتین">🔥 ${k(m)}</span>`:""}
                          </span>
                          <div style="display: flex; align-items: center; gap: 2px; flex-shrink: 0;">
                            <button onclick="window.openEditHabitModal('${y.id}')" title="ویرایش روتین" style="background:none; border:none; color: #38bdf8; cursor:pointer; font-size: 0.82rem; padding: 2px 4px; opacity: 0.85; transition: transform 0.15s;" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">✏️</button>
                            <button onclick="window.deleteHabitGlobal('${y.id}')" title="حذف روتین" style="background:none; border:none; color: #ef4444; cursor:pointer; font-size: 0.82rem; padding: 2px 4px; opacity: 0.85; transition: transform 0.15s;" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">✕</button>
                          </div>
                        </div>
                      </td>
                      ${Array.from({length:31},(z,B)=>{const D=h[B+1]||0;let I="rgba(255,255,255,0.05)",P="transparent",j="○";return D===1&&(I="rgba(16, 185, 129, 0.2)",P="#10b981",j="✓"),D===2&&(I="rgba(239, 68, 68, 0.2)",P="#ef4444",j="✕"),`
                          <td onclick="window.handleHabitDayClick('${y.id}', ${B+1}, event)" style="background: ${I}; color: ${P}; border-radius: 4px; cursor: pointer; transition: 0.2s; border: 1px solid rgba(255,255,255,0.02); height: 26px;">
                            ${D===0?"":j}
                          </td>
                        `}).join("")}
                      <td style="color: var(--text-primary); font-family: 'Outfit'; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.05); border-right: none; border-left: none;">${_}</td>
                      <td style="color: #f59e0b; font-family: 'Outfit'; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.05); border-right: none; border-left: none;">${m}</td>
                      <td style="color: #10b981; font-weight: bold; font-family: 'Outfit'; border-radius: 8px 0 0 8px; border: 1px solid rgba(255,255,255,0.05); border-right: none;">${T}%</td>
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
                  ${To(d,r)}
                </div>
              </div>
            </div>

            <!-- 2. Daily Trend Bar Chart Card -->
            ${(()=>{const y=Math.max(...d,1),h=_=>String(_).replace(/[0-9]/g,m=>"۰۱۲۳۴۵۶۷۸۹"[m]);return`
                <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 15px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 8px;">
                    <h3 style="font-size: 0.95rem; color: #38bdf8; margin: 0;">📊 نمودار روند روزانه عادات (۳۱ روز ماه)</h3>
                    <span style="font-size: 0.75rem; color: var(--text-secondary);">مقیاس پویا: حداکثر ${h(y)} عادت در روز</span>
                  </div>

                  <div style="overflow-x: auto; padding-bottom: 10px;">
                    <div style="display: flex; align-items: flex-end; height: 140px; gap: 4px; min-width: 650px; padding: 10px 4px 0 4px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                      ${d.map((_,m)=>{const w=_>0?_/y*100:0,T=_===y&&_>0;return`
                          <div style="flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; position: relative;">
                            <span style="font-size: 0.7rem; color: ${T?"#ec4899":w>0?"#38bdf8":"transparent"}; font-family: 'Outfit'; margin-bottom: 3px; font-weight: bold;">
                              ${_>0?h(_):""}
                            </span>
                            <div style="width: 100%; background: ${T?"linear-gradient(180deg, #ec4899 0%, #a855f7 100%)":w>0?"linear-gradient(180deg, #38bdf8 0%, #6366f1 100%)":"rgba(255,255,255,0.05)"}; height: ${_>0?Math.max(w,8):4}%; border-radius: 4px 4px 0 0; transition: all 0.3s; ${w>0?"box-shadow: 0 2px 8px rgba(56,189,248,0.3);":""}" title="روز ${h(m+1)}: ${h(_)} عادت"></div>
                            <span style="font-size: 0.7rem; color: ${T?"#ec4899":"var(--text-secondary)"}; font-family: 'Outfit'; margin-top: 6px; font-weight: ${T?"bold":"normal"};">${h(m+1)}</span>
                          </div>
                        `}).join("")}
                    </div>
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
          ${a.map(y=>`
            <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.03); padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);">
              <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; color: ${y.completed?"var(--text-muted)":"white"}; text-decoration: ${y.completed?"line-through":"none"}; flex: 1;">
                <input type="checkbox" class="chk-routine-item" onclick="window.toggleRoutineChecklistItem('${y.id}', event)" data-id="${y.id}" ${y.completed?"checked":""} style="width: 18px; height: 18px; accent-color: #10b981; cursor: pointer;" />
                <span style="font-size: 0.9rem; font-weight: 500;">${y.text}</span>
              </label>
              <button class="btn-delete-routine-item" onclick="window.deleteRoutineChecklistItem('${y.id}')" data-id="${y.id}" style="background: none; border: none; color: #ef4444; cursor: pointer;">🗑️</button>
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
          ${window.PRE_MADE_ROUTINES.map(y=>`
            <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(16, 185, 129, 0.2); border-radius: 12px; padding: 15px; display: flex; flex-direction: column; transition: 0.2s;" onmouseover="this.style.background='rgba(16, 185, 129, 0.05)'" onmouseout="this.style.background='rgba(255,255,255,0.02)'">
              <div style="font-weight: bold; color: white; font-size: 1.05rem; margin-bottom: 5px;">${y.title}</div>
              <p style="font-size: 0.75rem; color: #34d399; margin-bottom: 12px;">${y.desc}</p>
              <ul style="padding-right: 18px; margin: 0 0 15px 0; font-size: 0.75rem; color: var(--text-secondary); flex-grow: 1; line-height: 1.6;">
                ${y.tasks.map(h=>`<li style="margin-bottom: 4px;">${h}</li>`).join("")}
              </ul>
              <button onclick="window.clonePreMadeRoutine('${y.id}')" class="btn-primary" style="padding: 8px; font-size: 0.8rem; width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px; background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3);">
                ➕ افزودن به روتین‌های من
              </button>
            </div>
          `).join("")}
        </div>
      </details>
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
          ${$o.map(y=>`
            <button type="button"
                    class="habit-emoji-picker-btn"
                    data-emoji="${y}"
                    onclick="window.selectHabitEmoji('${y}')"
                    style="height: 40px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; font-size: 1.35rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s ease;">
              ${y}
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
  `}function Et(){const o=$&&typeof $.getUserProfile=="function"?$.getUserProfile():{nickname:"",target:"",avatar_url:""};let e=null;try{e=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}")}catch{}const t=o.nickname||o.name||(e==null?void 0:e.full_name)||(e==null?void 0:e.name)||"",n=o.target||o.targetField||o.major||"",r=localStorage.getItem("planex_user_avatar")||""||o.avatar_url||o.avatarUrl||o.avatar||o.photo_url||(e==null?void 0:e.avatar_url)||"",i=["🩺 آزمون پره‌اینترنی","👨‍⚕️ آزمون دستیاری","🧬 کنکور تجربی","📐 کنکور ریاضی","📚 کنکور انسانی","⚖️ آزمون وکالت","🎓 ارشد علوم پزشکی","🌐 آزمون آیلتس / زبان"],d=[...Array.from({length:8},(l,c)=>`https://api.dicebear.com/7.x/adventurer/svg?seed=Adv${c+1}`),...Array.from({length:8},(l,c)=>`https://api.dicebear.com/7.x/bottts/svg?seed=Bot${c+1}`),...Array.from({length:8},(l,c)=>`https://api.dicebear.com/7.x/micah/svg?seed=Micah${c+1}`),...Array.from({length:8},(l,c)=>`https://api.dicebear.com/7.x/fun-emoji/svg?seed=Emo${c+1}`),...Array.from({length:8},(l,c)=>`https://api.dicebear.com/7.x/notionists/svg?seed=Notion${c+1}`)].map((l,c)=>`
      <div class="avatar-preset-item" onclick="window.selectEditProfileAvatar('${l}')" style="width: 52px; height: 52px; aspect-ratio: 1/1; border-radius: 50%; cursor: pointer; border: 2.5px solid ${r===l?"#7c3aed":"rgba(255,255,255,0.1)"}; transition: all 0.2s ease; overflow: hidden; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; position: relative; flex-shrink: 0;">
        <img src="${l}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://api.dicebear.com/7.x/bottts/svg?seed=fallback${c}'" />
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
          ${t?'<button type="button" aria-label="بستن" onclick="window.closeActiveModal();" style="min-width: 44px; min-height: 44px; width: 44px; height: 44px; background: #1f2029; border: 1px solid rgba(255,255,255,0.12); color: #cbd5e1; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.1rem; transition: all 0.15s ease;">✕</button>':""}
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
            ${d}
          </div>
        </div>

        <!-- Form Inputs -->
        <div style="display: flex; flex-direction: column; gap: 16px; margin-bottom: 22px;">
          
          <!-- Name Input -->
          <div>
            <label style="display: block; margin-bottom: 6px; color: #cbd5e1; font-size: 0.8rem; font-weight: 800;">
              نام و نام خانوادگی <span style="color: #ef4444;">*</span>
            </label>
            <input type="text" id="input-edit-profile-name" value="${t}" placeholder="مثال: علی محمدی" class="form-input" style="width: 100%; box-sizing: border-box; padding: 12px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); background: #1f2029; color: white; font-size: 0.88rem; font-weight: 700;" />
          </div>

          <!-- Target / Major Input & Popular Chips -->
          <div>
            <label style="display: block; margin-bottom: 6px; color: #cbd5e1; font-size: 0.8rem; font-weight: 800;">
              رشته تحصیلی یا هدف آزمون
            </label>
            <input type="text" id="input-edit-profile-target" value="${n}" placeholder="مثال: آزمون پره‌اینترنی / کنکور تجربی" class="form-input" style="width: 100%; box-sizing: border-box; padding: 12px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); background: #1f2029; color: white; font-size: 0.85rem;" />
            
            <!-- Popular Goal Chips -->
            <div style="margin-top: 10px;">
              <div style="font-size: 0.72rem; color: #8e8e9c; font-weight: 700; margin-bottom: 6px;">💡 انتخاب سریع اهداف محبوب:</div>
              <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                ${i.map(l=>`
                  <button type="button" onclick="document.getElementById('input-edit-profile-target').value='${l}';" style="padding: 5px 10px; font-size: 0.72rem; font-weight: 700; background: rgba(124, 58, 237, 0.12); color: #c4b5fd; border: 1px solid rgba(124, 58, 237, 0.25); border-radius: 8px; cursor: pointer; transition: all 0.15s ease;" onmouseover="this.style.borderColor='#a855f7'" onmouseout="this.style.borderColor='rgba(124, 58, 237, 0.25)'">${l}</button>
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
  `}window.openEditProfileModal=function(){window.appState&&(window.appState.activeModal="editProfile",window.renderApp&&window.renderApp())};window.closeEditProfileModal=function(){window.closeActiveModal?window.closeActiveModal():window.appState&&(window.appState.activeModal=null,window.renderApp&&window.renderApp())};window.selectEditProfileAvatar=function(o){const e=document.getElementById("input-edit-profile-avatar-url");e&&(e.value=o);const t=document.getElementById("edit-profile-avatar-preview-box");t&&(t.innerHTML=`<img id="edit-profile-avatar-img" src="${o}" style="width: 100%; height: 100%; object-fit: cover;" />`)};window.promptEditProfileAvatarUrl=function(){const o=prompt("لطفاً لینک آدرس مستقیم تصویر پروفایل را وارد نمایید (http/https):");o&&o.trim().startsWith("http")&&window.selectEditProfileAvatar(o.trim())};window.handleEditProfileImageUpload=function(o){var a;const e=(a=o.target.files)==null?void 0:a[0];if(!e)return;if(e.size>10*1024*1024){window.showToast?window.showToast("حجم عکس انتخابی نباید بیشتر از ۱۰ مگابایت باشد.","warning"):alert("حجم عکس انتخابی نباید بیشتر از ۱۰ مگابایت باشد.");return}const t=document.getElementById("edit-profile-avatar-preview-box");t&&(t.innerHTML='<span class="spin-sync" style="font-size: 1.8rem;">⏳</span>');const n=new FileReader;n.onload=function(r){const i=r.target.result;if(!i)return;const s=new Image;s.onload=function(){let l=s.width,c=s.height;l>c?l>128&&(c=Math.round(c*128/l),l=128):c>128&&(l=Math.round(l*128/c),c=128);const g=document.createElement("canvas");g.width=l,g.height=c,g.getContext("2d").drawImage(s,0,0,l,c);let f;try{f=g.toDataURL("image/webp",.7),(!f||!f.startsWith("data:image/webp"))&&(f=g.toDataURL("image/jpeg",.7))}catch{f=g.toDataURL("image/jpeg",.7)}window.selectEditProfileAvatar(f)},s.onerror=function(){window.showToast?window.showToast("خطا در پردازش تصویر، لطفاً دوباره تلاش کنید.","error"):alert("خطا در پردازش تصویر، لطفاً دوباره تلاش کنید."),t&&(t.innerHTML='<span style="font-size: 2.2rem;">👤</span>')},s.src=i},n.readAsDataURL(e)};window.handleSaveProfileSubmit=async function(){const o=document.getElementById("input-edit-profile-name"),e=document.getElementById("input-edit-profile-target"),t=document.getElementById("input-edit-profile-avatar-url"),n=o?o.value.trim():"",a=e?e.value.trim():"",r=t?t.value.trim():"";if(!n){window.showToast?window.showToast("لطفاً نام و نام خانوادگی خود را وارد کنید.","warning"):alert("لطفاً نام و نام خانوادگی خود را وارد کنید."),o&&o.focus();return}const i=document.getElementById("btn-save-edit-profile");i&&(i.disabled=!0,i.innerHTML='<svg class="spin-sync" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> <span>در حال ذخیره‌سازی...</span>');try{try{localStorage.setItem(ee.NICKNAME,n),localStorage.setItem(ee.TARGET,a),localStorage.setItem("planex_user_nickname",n),localStorage.setItem("planex_nickname",n),localStorage.setItem("planex_leaderboard_nickname",n),r&&localStorage.setItem("planex_user_avatar",r)}catch(c){console.warn("LEADERBOARD_STORAGE_KEYS quota error:",c)}if(p&&typeof p.setUserProfile=="function"){const c=p.getUserProfile()||{};p.setUserProfile({...c,name:n,targetField:a,major:a,avatar:r,avatar_url:r,photo:r,photoUrl:r})}try{const c=localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account");let g=c?JSON.parse(c):{};g.full_name=n,g.name=n,g.avatar_url=r,g.photo_url=r,localStorage.setItem("planex_auth_user",JSON.stringify(g)),localStorage.setItem("planex_user_account",JSON.stringify(g))}catch(c){console.warn("auth user account quota error:",c)}$&&typeof $.saveUserProfile=="function"&&$.saveUserProfile(n,a,r);const s=window.personalSyncService;let d=Promise.resolve();s&&typeof s.pushToCloud=="function"&&(d=s.pushToCloud(null,n,r));let l=Promise.resolve();$&&typeof $.syncUserScore=="function"&&(l=$.syncUserScore(!0)),await Promise.allSettled([d,l]),window.closeActiveModal?window.closeActiveModal():window.appState&&(window.appState.activeModal=null),window.showToast&&window.showToast(`مشخصات و آواتار شما با موفقیت به «${n}» تغییر یافت! ✅`,"success",3500),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("profileUpdated")),window.renderApp&&window.renderApp()}catch(s){console.error("Save profile failed:",s),window.showToast?window.showToast("خطا در ذخیره مشخصات: "+s.message,"error"):alert("خطا در ذخیره مشخصات: "+s.message)}finally{i&&(i.disabled=!1,i.innerHTML="💾 ذخیره تغییرات مشخصات")}};const Ao=o=>String(o??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");window.leaderboardFilterQuery=window.leaderboardFilterQuery||"";window.isLeaderboardSyncing=!1;window.isLeaderboardRefreshing=!1;window.lastLeaderboardResult=window.lastLeaderboardResult||null;window.isFetchingLeaderboardBg=!1;window.lastPublicRoomsList=window.lastPublicRoomsList||null;window.isFetchingPublicRoomsBg=!1;window.lastEarlyBirdList=window.lastEarlyBirdList||null;window.isFetchingEarlyBirds=!1;function Se(o,e=!0,t=3500){const n=document.createElement("div");n.style.cssText=`position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%); background: ${e?"linear-gradient(135deg, #10b981 0%, #059669 100%)":"linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"}; color: white; padding: 14px 26px; border-radius: 16px; font-weight: 900; font-size: 0.92rem; z-index: 99999; box-shadow: 0 10px 30px rgba(0,0,0,0.5); animation: fadeIn 0.3s; max-width: 92vw; text-align: center; direction: rtl; border: 1.5px solid rgba(255,255,255,0.3);`,n.innerHTML=o,document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transition="opacity 0.4s",setTimeout(()=>n.remove(),400)},t)}window.planexNavigateBackToGroups=function(o){o&&typeof o.preventDefault=="function"&&o.preventDefault(),o&&typeof o.stopPropagation=="function"&&o.stopPropagation(),console.log("Back to groups clicked"),window.leaderboardState&&(window.leaderboardState.currentGroupId=null);try{localStorage.removeItem("planex_active_group_id"),localStorage.removeItem("planex_current_group_view"),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data")}catch(e){console.warn("[planexNavigateBackToGroups] Storage purge error:",e)}window._leaderboardMemoryCache={key:null,data:null},window.leaderboardService&&typeof window.leaderboardService.setActiveGroupCode=="function"?window.leaderboardService.setActiveGroupCode(null):typeof $<"u"&&$&&typeof $.setActiveGroupCode=="function"&&$.setActiveGroupCode(null),typeof p<"u"&&p&&typeof p.setActiveGroupCode=="function"&&p.setActiveGroupCode(null),window.lastLeaderboardResult=null,typeof renderGroupsHub=="function"?renderGroupsHub():typeof Xe=="function"?Xe():typeof st=="function"&&st(),typeof window.renderApp=="function"&&window.renderApp()};window.handleBackToGroupsList=window.handleBackToGroupList=window.planexNavigateBackToGroups;function st(){return $&&typeof $.setActiveGroupCode=="function"&&$.setActiveGroupCode(null),localStorage.removeItem("planex_current_group_view"),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data"),window.lastLeaderboardResult=null,dt()}window.renderGroupsHub=window.initLeaderboardView=st;const Xe=st;window.handleSwitchGroup=o=>{if(!o||o==="GLOBAL"){window.handleBackToGroupList();return}$&&typeof $.setActiveGroupCode=="function"&&$.setActiveGroupCode(o),window.lastLeaderboardResult=null,Se(`🔄 ورود به جدول گروه «${o}»`,!0,1800),window.renderApp&&window.renderApp()};window.handleCreateGroupSubmit=async()=>{var a,r,i,s,d;const o=document.getElementById("create-room-name")||document.getElementById("input-create-group-name"),e=o?o.value.trim():"";if(!e){alert("لطفاً نام گروه رقابتی خود را وارد کنید (مثلاً: گروه پره‌اینترنی اسفند)."),o&&o.focus();return}const t=document.getElementById("btn-submit-create-room")||document.getElementById("btn-create-group-submit"),n=t?t.innerHTML:"";t&&(t.disabled=!0,t.innerHTML="⏳ در حال ایجاد گروه...");try{const l=((a=document.querySelector('input[name="create-room-type"]:checked'))==null?void 0:a.value)==="private",c=((r=document.getElementById("create-room-category"))==null?void 0:r.value)||"general",g=parseInt((i=document.getElementById("create-room-capacity"))==null?void 0:i.value)||600,b=((d=(s=document.getElementById("create-room-announcement"))==null?void 0:s.value)==null?void 0:d.trim())||"",f=await $.createGroup(e,l,{category:c,capacity:g,announcement:b});$&&typeof $.setActiveGroupCode=="function"&&$.setActiveGroupCode(f.groupCode),typeof p<"u"&&p&&typeof p.setActiveGroupCode=="function"&&p.setActiveGroupCode(f.groupCode);try{localStorage.setItem("planex_active_group_code",f.groupCode),localStorage.setItem("planex_current_group_view",f.groupCode)}catch(k){console.warn("Storage save error in handleCreateGroupSubmit:",k)}typeof window.closeActiveModal=="function"?window.closeActiveModal():typeof window.closeCreateGroupModal=="function"?window.closeCreateGroupModal():window.appState&&(window.appState.activeModal=null),window.lastLeaderboardResult=null,typeof window.renderApp=="function"&&window.renderApp(),Se(`🎉 گروه «${f.groupName}» با موفقیت ایجاد شد! کد دعوت: ${f.groupCode}`,!0,4e3)}catch(l){console.error("Create group failed:",l),alert("خطا در ایجاد گروه: "+l.message)}finally{t&&(t.disabled=!1,t.innerHTML=n||"🚀 ایجاد اتاق و دریافت کد دعوت")}};window.handleModalJoinRoomSubmit=async()=>{const o=document.getElementById("input-modal-join-code")||document.getElementById("input-join-group-code"),e=o?o.value.trim().toUpperCase():"";if(!e){alert("لطفاً کد ۶ رقمی گروه را وارد کنید (مثال: PLX-4829)."),o&&o.focus();return}await window.handleJoinGroupSubmit(e)};window.handleJoinGroupSubmit=async(o=null)=>{let e=o;if(!e){const n=document.getElementById("input-join-group-code")||document.getElementById("input-modal-join-code");e=n?n.value.trim().toUpperCase():""}if(!e){alert("لطفاً کد ۶ رقمی گروه را وارد کنید (مثال: PLX-4829).");return}const t=p&&typeof p.getProfile=="function"?p.getProfile():{};if((!t.name||!t.target||!t.major)&&window.appState){window.appState.pendingJoinRoom={id:e,name:`گروه ${e}`},window.appState.activeModal="joinRoomOnboarding",window.renderApp&&window.renderApp();return}try{const n=await $.joinPrivateGroup(e);if(window.lastLeaderboardResult=null,n.requiresVerification){Se("⚠️ برای ورود به گروه، لطفاً ابتدا وارد حساب کاربری خود شوید.",!1,4500),window.openLoginModal&&window.openLoginModal();return}n.success?(Se(n.message||"با موفقیت به گروه پیوستید! 🎉",!0,4e3),$&&typeof $.setActiveGroupCode=="function"&&$.setActiveGroupCode(e),typeof window.closeActiveModal=="function"?window.closeActiveModal():typeof window.closeCreateGroupModal=="function"?window.closeCreateGroupModal():window.appState&&(window.appState.activeModal=null)):Se(n.message||"خطا در ورود به گروه",!1,3500),window.renderApp&&window.renderApp()}catch(n){console.error("Join group failed:",n),alert("خطا در ورود به گروه: "+n.message)}};window.handleToggleGroupPrivacyAction=async(o,e)=>{try{const t=await $.toggleGroupPrivacy(o,e);t&&t.success?Se(t.message||`نوع گروه به «${e?"خصوصی":"عمومی"}» تغییر یافت.`):Se(t.message||"خطا در تغییر نوع گروه",!1),window.lastLeaderboardResult=null,window.renderApp&&window.renderApp()}catch(t){alert("خطا در تغییر نوع گروه: "+t.message)}};window.handleRefreshPendingRequests=async o=>{try{window.isFetchingPendingRequests=!0;const e=await $.fetchPendingRequests(o);window.groupPendingRequests=Array.isArray(e)?e:[],window.isFetchingPendingRequests=!1,Se(`🔄 لیست درخواست‌های عضویت به‌روزرسانی شد (${window.groupPendingRequests.length} مورد)`,!0,2e3),window.renderApp&&window.renderApp()}catch(e){window.isFetchingPendingRequests=!1,console.error("Refresh pending requests error:",e)}};window.handleLeaveGroupAction=async(o=null)=>{const e=$&&typeof $.getUserGroups=="function"?$.getUserGroups():[],t=String(o||($&&typeof $.getActiveGroupCode=="function"?$.getActiveGroupCode():"")).trim().toUpperCase(),n=e.find(r=>(r.code||r.groupCode)===t)||($&&typeof $.getActiveGroup=="function"?$.getActiveGroup():null),a=n?n.name||n.groupName:t||"این گروه";if(confirm(`آیا از خروج/انصراف از «${a}» اطمینان دارید؟`))try{["planex_user_groups","planex_my_rooms","my_rooms","planex_joined_groups","user_rooms"].forEach(r=>{try{const i=localStorage.getItem(r);if(i){const s=JSON.parse(i);if(Array.isArray(s)){const d=s.filter(l=>String(l.code||l.room_code||l.groupCode||l.id||"").trim().toUpperCase()!==t);localStorage.setItem(r,JSON.stringify(d))}}}catch{}}),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data"),localStorage.removeItem(`planex_group_cache_${t}`),localStorage.removeItem(`planex_group_roster_${t}`),$&&typeof $.leaveUserGroup=="function"&&await $.leaveUserGroup(t),$&&typeof $.setActiveGroupCode=="function"&&$.setActiveGroupCode(null),window.lastLeaderboardResult=null,Se(`🚪 با موفقیت از گروه «${a}» خارج شدید.`),$&&typeof $.fetchMyRooms=="function"&&await $.fetchMyRooms(!0).catch(()=>{}),window.handleBackToGroupList()}catch(r){console.error("Leave group failed:",r),alert("خطا در خروج از گروه: "+r.message)}};window.handleDeleteGroupAction=async(o=null)=>{const e=$&&typeof $.getUserGroups=="function"?$.getUserGroups():[],t=String(o||($&&typeof $.getActiveGroupCode=="function"?$.getActiveGroupCode():"")).trim().toUpperCase(),n=e.find(l=>(l.code||l.groupCode)===t)||($&&typeof $.getActiveGroup=="function"?$.getActiveGroup():null),a=n?n.name||n.groupName:t||"این گروه";if(!confirm(`🚨 هشدار مدیر:

آیا از حذف کامل گروه «${a}» اطمینان دارید؟

با تایید شما، تمام اطلاعات گروه، اعضا و جدول آن پاک شده و برای همه منحل می‌شود.`))return;const r=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}"),i=$&&typeof $.getUserProfile=="function"?$.getUserProfile():{},s=r.id||r.telegram_id||i.userId||"",d=r.phone||r.phone_number||i.phone||"";try{["planex_user_groups","planex_my_rooms","my_rooms","planex_joined_groups","user_rooms"].forEach(l=>{try{const c=localStorage.getItem(l);if(c){const g=JSON.parse(c);if(Array.isArray(g)){const b=g.filter(f=>String(f.code||f.room_code||f.groupCode||f.id||"").trim().toUpperCase()!==t);localStorage.setItem(l,JSON.stringify(b))}}}catch{}}),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data"),localStorage.removeItem(`planex_group_cache_${t}`),localStorage.removeItem(`planex_group_roster_${t}`),fetch(`${ue}/api/rooms/delete.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:t||(n==null?void 0:n.code)||(n==null?void 0:n.groupCode),user_id:s,phone:d,creator_id:s})}).catch(()=>{}),$&&typeof $.deleteGroup=="function"&&await $.deleteGroup(t),$&&typeof $.setActiveGroupCode=="function"&&$.setActiveGroupCode(null),window.lastLeaderboardResult=null,Se(`🗑️ گروه «${a}» با موفقیت به طور کامل حذف شد.`),$&&typeof $.fetchMyRooms=="function"&&await $.fetchMyRooms(!0).catch(()=>{}),window.handleBackToGroupList()}catch(l){console.error("Delete group failed:",l),alert("خطا در حذف کامل گروه: "+l.message)}};window.handleApproveRequestAction=async(o,e)=>{try{const t=await $.approveMember(o,e);Se(t.message||"✅ کاربر با موفقیت به گروه اضافه شد",!0),window.lastLeaderboardResult=null,window.isFetchingPendingRequests=!1;const n=await $.fetchPendingRequests(o);window.groupPendingRequests=n,window.renderApp&&window.renderApp()}catch(t){console.error("Error approving member:",t),Se("خطا در تایید ورود: "+t.message,!1)}};window.handleRejectRequestAction=async(o,e)=>{try{const t=await $.rejectMember(o,e);Se(t.message||"❌ درخواست عضویت رد شد",!1),window.lastLeaderboardResult=null,window.isFetchingPendingRequests=!1;const n=await $.fetchPendingRequests(o);window.groupPendingRequests=n,window.renderApp&&window.renderApp()}catch(t){console.error("Error rejecting member:",t),Se("خطا در رد درخواست: "+t.message,!1)}};window.handleCopyGroupCode=async o=>{if(o)try{navigator.clipboard&&navigator.clipboard.writeText?await navigator.clipboard.writeText(o):prompt("کد گروه را کپی کنید:",o),Se(`📋 کد گروه (${o}) در حافظه کپی شد!`)}catch{prompt("کد گروه را کپی کنید:",o)}};window.handleShareGroupInvite=async(o,e)=>{const t=e||"رقابت مطالعه",n=`${window.location.origin}${window.location.pathname}?group=${encodeURIComponent(o)}`,a=`🔥 دعوت به گروه رقابت مطالعه «${t}» در PlanEx

🔑 کد ورود به گروه: ${o}
🔗 لینک ورود مستقیم:
${n}`;if(navigator.share)try{await navigator.share({title:`گروه مطالعه «${t}»`,text:a,url:n});return}catch{}try{navigator.clipboard&&navigator.clipboard.writeText?(await navigator.clipboard.writeText(a),Se(`🔗 متن و لینک دعوت گروه «${t}» کپی شد!`)):prompt("متن دعوت را کپی کنید:",a)}catch{prompt("متن دعوت را کپی کنید:",a)}};window.handleLiveLeaderboardRefresh=async()=>{if(!window.isLeaderboardRefreshing){window.isLeaderboardRefreshing=!0,window.renderApp&&window.renderApp();try{const o=await $.fetchLeaderboard(null,!0);window.lastLeaderboardResult=o,Se("🔄 جدول رتبه‌بندی گروه با موفقیت به‌روزرسانی شد.",!0,2e3)}catch(o){console.error("Live refresh failed:",o)}finally{window.isLeaderboardRefreshing=!1,window.renderApp&&window.renderApp()}}};window.handleManualLeaderboardSync=async()=>{if(!window.isLeaderboardSyncing){window.isLeaderboardSyncing=!0,window.renderApp&&window.renderApp();try{const o=await $.syncUserScore(!0),e=await $.fetchLeaderboard(null,!0);window.lastLeaderboardResult=e,o&&o.success&&o.serverConfirmed?Se(`✅ کارنامه شما در گروه ثبت شد${o.rank?` — رتبه ${o.rank}`:""}`,!0,3500):Se("⚠️ اطلاعات به صورت محلی در گروه ذخیره شد.",!1,4500)}catch(o){console.error("Manual sync failed:",o),Se("❌ خطا در برقراری ارتباط با سرور.",!1,3500)}finally{window.isLeaderboardSyncing=!1,window.renderApp&&window.renderApp()}}};function Mo(){try{const o=document.getElementById("input-leaderboard-search");o&&(o.oninput=e=>{try{window.leaderboardFilterQuery=e.target.value;const t=(e.target.value||"").toLowerCase().trim();document.querySelectorAll(".leaderboard-row").forEach(a=>{const r=(a.dataset.search||"").toLowerCase();!t||r.includes(t)?a.style.display="":a.style.display="none"})}catch(t){console.error("Error in leaderboard search filter:",t)}}),window._leaderboardEventDelegationBound||(window._leaderboardEventDelegationBound=!0,document.addEventListener("click",e=>{if(e.target.closest('#btn-back-to-groups, .btn-back-groups, [data-action="back-to-groups"]')){e.preventDefault(),e.stopPropagation(),typeof window.planexNavigateBackToGroups=="function"&&window.planexNavigateBackToGroups(e);return}const n=e.target.closest(".btn-approve-request");if(n){e.preventDefault();const r=n.getAttribute("data-group-id")||n.dataset.groupId,i=n.getAttribute("data-user-id")||n.dataset.userId;r&&i&&typeof window.handleApproveRequestAction=="function"&&window.handleApproveRequestAction(r,i);return}const a=e.target.closest(".btn-reject-request");if(a){e.preventDefault();const r=a.getAttribute("data-group-id")||a.dataset.groupId,i=a.getAttribute("data-user-id")||a.dataset.userId;r&&i&&typeof window.handleRejectRequestAction=="function"&&window.handleRejectRequestAction(r,i);return}}))}catch(o){console.error("Error binding leaderboard events:",o)}}function Nt(o,e){if(!o)return!1;if(o.isOwner||o.is_owner||o.isCreator||o.is_creator)return!0;let t=null;try{t=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}")}catch{}const n=d=>{if(!d)return"";let l=String(d).replace(/[^0-9]/g,"");return l.startsWith("98")&&l.length>=12?l="0"+l.slice(2):l.length===10&&l.startsWith("9")&&(l="0"+l),l},a=[n(t==null?void 0:t.phone),n(t==null?void 0:t.phone_number),n(e==null?void 0:e.phone),n(localStorage.getItem("planex_user_phone"))].filter(Boolean),r=[String((t==null?void 0:t.id)||""),String((t==null?void 0:t.telegram_id)||""),String((e==null?void 0:e.userId)||""),String(localStorage.getItem("planex_leaderboard_user_id")||"")].filter(Boolean),i=[n(o.creator_phone),n(o.admin_phone),n(o.owner_phone)].filter(Boolean),s=[String(o.creator_id||""),String(o.admin_id||""),String(o.owner_id||""),String(o.userId||"")].filter(Boolean);if(a.some(d=>i.includes(d))||r.some(d=>s.includes(d)))return!0;if(window.lastLeaderboardResult&&Array.isArray(window.lastLeaderboardResult.roster)&&window.lastLeaderboardResult.roster.length>0){const d=window.lastLeaderboardResult.roster[0];if(d){const l=String(d.userId||d.user_id||""),c=n(d.phone||d.user_phone);if(l&&r.includes(l)||c&&a.includes(c))return!0}}return!1}function tt(o,e=36){const t=!!(o!=null&&o.isUser||o!=null&&o.isCurrentUser||o!=null&&o.is_user),n=(o==null?void 0:o.avatar_url)||(o==null?void 0:o.avatarUrl)||(o==null?void 0:o.avatar)||(o==null?void 0:o.photo_url)||t&&localStorage.getItem("planex_user_avatar")||""||"",a=String((o==null?void 0:o.nickname)||(o==null?void 0:o.name)||"کاربر").trim(),r=(a.charAt(0)||"👤").toUpperCase(),i=String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),s=["linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)","linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)","linear-gradient(135deg, #10b981 0%, #047857 100%)","linear-gradient(135deg, #f59e0b 0%, #d97706 100%)","linear-gradient(135deg, #ec4899 0%, #be185d 100%)","linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)","linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)"];let d=0;for(let c=0;c<a.length;c++)d+=a.charCodeAt(c);const l=s[d%s.length];return n&&(n.startsWith("http")||n.startsWith("data:image"))?`
      <div style="position: relative; width: ${e}px; min-width: ${e}px; max-width: ${e}px; height: ${e}px; min-height: ${e}px; max-height: ${e}px; aspect-ratio: 1 / 1 !important; flex-shrink: 0 !important; display: inline-flex; align-items: center; justify-content: center; border-radius: 50% !important; overflow: hidden !important;">
        <img src="${n}" style="width: 100%; height: 100%; aspect-ratio: 1 / 1 !important; flex-shrink: 0 !important; border-radius: 50% !important; object-fit: cover !important; border: 1.5px solid rgba(255,255,255,0.25); background: #1f2029;" 
          onerror="this.style.display='none'; if(this.nextElementSibling) this.nextElementSibling.style.display='flex';" />
        <div style="display: none; width: 100%; height: 100%; aspect-ratio: 1 / 1 !important; flex-shrink: 0 !important; border-radius: 50% !important; background: ${l}; color: white; font-weight: 800; font-size: ${Math.max(10,Math.round(e*.42))}px; align-items: center; justify-content: center; border: 1.5px solid rgba(255,255,255,0.25); box-shadow: 0 2px 6px rgba(0,0,0,0.3); overflow: hidden !important;">
          ${i}
        </div>
      </div>
    `:`
    <div style="width: ${e}px; min-width: ${e}px; max-width: ${e}px; height: ${e}px; min-height: ${e}px; max-height: ${e}px; aspect-ratio: 1 / 1 !important; flex-shrink: 0 !important; border-radius: 50% !important; background: ${l}; color: white; font-weight: 800; font-size: ${Math.max(10,Math.round(e*.42))}px; display: inline-flex; align-items: center; justify-content: center; border: 1.5px solid rgba(255,255,255,0.25); box-shadow: 0 2px 6px rgba(0,0,0,0.3); overflow: hidden !important;">
      ${i}
    </div>
  `}function dt(o=null){var e,t;try{let n=null;try{n=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}let a=!0;if(n&&(n.phone||n.phone_number||n.id||n.telegram_id)&&(a=!1),a)return`
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
      `;const r=$&&typeof $.getUserProfile=="function"?$.getUserProfile():{nickname:"داوطلب پرتلاش",target:"کنکور سراسری ۱۴۰۶",userId:"local_user"},i=$&&typeof $.getTodayStats=="function"?$.getTodayStats():{studyMinutes:0,studyHours:0,testCount:0,subjects:[],gregorianDate:new Date().toISOString().split("T")[0],jalaliDateStr:""},s=$&&typeof $.getUserGroups=="function"?$.getUserGroups():[],d=$&&typeof $.getActiveGroupCode=="function"?$.getActiveGroupCode():null,l=v=>String(v??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),c=v=>String(v).replace(/[0-9]/g,E=>"۰۱۲۳۴۵۶۷۸۹"[E]);window.lastPublicRoomsFetchTime=window.lastPublicRoomsFetchTime||0,window.lastEarlyBirdFetchTime=window.lastEarlyBirdFetchTime||0,window.lastLeaderboardFetchTime=window.lastLeaderboardFetchTime||0,window.lastPendingRequestsFetchTime=window.lastPendingRequestsFetchTime||0,window.lastUserGroupsFetchTime=window.lastUserGroupsFetchTime||0;const g=5*60*1e3,b=Date.now();(s.length===0||b-window.lastUserGroupsFetchTime>=2*60*1e3)&&!window.isFetchingUserGroupsBg&&(r.phone||r.userId)&&$&&typeof $.fetchUserGroups=="function"&&(window.lastUserGroupsFetchTime=b,window.isFetchingUserGroupsBg=!0,$.fetchUserGroups(!1).then(v=>{var E;window.isFetchingUserGroupsBg=!1,Array.isArray(v)&&v.length>0&&s.length===0&&!((E=window.appState)!=null&&E.activeModal)&&window.renderApp&&window.renderApp()}).catch(()=>{window.isFetchingUserGroupsBg=!1})),!d&&(b-window.lastPublicRoomsFetchTime>=g||!window.lastPublicRoomsList)&&!window.isFetchingPublicRoomsBg&&$&&typeof $.fetchPublicRooms=="function"&&(window.lastPublicRoomsFetchTime=b,window.isFetchingPublicRoomsBg=!0,$.fetchPublicRooms().then(v=>{var E;window.lastPublicRoomsList=Array.isArray(v)?v:[],window.isFetchingPublicRoomsBg=!1,!((E=window.appState)!=null&&E.activeModal)&&!$.getActiveGroupCode()&&window.renderApp&&window.renderApp()}).catch(()=>{window.isFetchingPublicRoomsBg=!1})),(b-window.lastEarlyBirdFetchTime>=g||!window.lastEarlyBirdList)&&!window.isFetchingEarlyBirds&&$&&typeof $.fetchEarlyBirds=="function"&&(window.lastEarlyBirdFetchTime=b,window.isFetchingEarlyBirds=!0,$.fetchEarlyBirds().then(v=>{var E;window.isFetchingEarlyBirds=!1,v&&Array.isArray(v.list)&&(window.lastEarlyBirdList=v.list,!((E=window.appState)!=null&&E.activeModal)&&window.renderApp&&window.renderApp())}).catch(()=>{window.isFetchingEarlyBirds=!1}));const f=(window.lastPublicRoomsList||[]).filter(v=>{const E=v.code||v.groupCode;return E&&!s.some(L=>(L.code||L.groupCode)===E)}),k=window.lastEarlyBirdList||[],u=(v=null)=>{let E=k;if(v&&Array.isArray(v)&&v.length>0){const L=v.map(F=>F.userId||F.user_id);E=k.filter(F=>L.includes(F.userId||F.user_id))}return`
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
              ${E.map(L=>`
                <div style="background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.06); padding: 8px 12px; border-radius: 12px; display: flex; align-items: center; justify-content: space-between; gap: 8px;">
                  <div style="display: flex; align-items: center; gap: 8px; overflow: hidden;">
                    <span style="font-size: 1rem;">☀️</span>
                    <div style="overflow: hidden;">
                      <strong style="font-size: 0.82rem; color: #e4e4e7; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${l(L.nickname||L.name||"سحرخیز")}</strong>
                      <span style="font-size: 0.68rem; color: #8e8e9c;">${l(L.target||"")}</span>
                    </div>
                  </div>
                  <span style="font-size: 0.76rem; font-weight: 800; color: #f59e0b; font-family: 'Outfit', monospace; background: rgba(245, 158, 11, 0.15); padding: 2px 6px; border-radius: 6px;">
                    ${l(c(L.wakeTime||"۰۵:۰۰"))}
                  </span>
                </div>
              `).join("")}
            </div>
          `}
        </div>
      `};if(!d)return`
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
                ${c(s.length)} گروه
              </span>
            </div>

            ${s.length===0?`
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
                ${s.map(v=>{const E=v.code||v.groupCode,L=v.name||v.groupName||`گروه ${E}`,F=Nt(v,r),pe=F?"👑 مدیر":"👤 عضو",U=F?"rgba(245, 158, 11, 0.18)":"rgba(16, 185, 129, 0.15)",fe=F?"#f59e0b":"#10b981",xe=F?"rgba(245, 158, 11, 0.4)":"rgba(16, 185, 129, 0.3)",ye=$&&typeof $.getGroupRoster=="function"?$.getGroupRoster(E):[],_e=ye&&ye.length>0?ye.length:v.membersCount||1,we=!F&&(v.status==="pending"||v.isPending===!0);return`
                    <div onclick="window.handleSwitchGroup('${E}');" 
                         class="glass-panel" 
                         style="padding: 16px 18px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: all 0.2s ease; gap: 12px;">
                      
                      <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 44px; height: 44px; border-radius: 14px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.1); display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
                          🏆
                        </div>
                        <div>
                          <div style="display: flex; align-items: center; gap: 8px;">
                            <strong style="font-size: 0.95rem; font-weight: 800; color: #f8fafc;">${l(L)}</strong>
                            <span style="font-size: 0.68rem; background: ${U}; color: ${fe}; border: 1px solid ${xe}; padding: 2px 7px; border-radius: 6px; font-weight: 800;">
                              ${pe}
                            </span>
                          </div>
                          <div style="display: flex; align-items: center; gap: 10px; margin-top: 4px; font-size: 0.74rem; color: #8e8e9c;">
                            <span style="font-family: 'Outfit', monospace; font-weight: 700; color: #cbd5e1;">کد: ${l(E)}</span>
                            <span>•</span>
                            <span>👥 ${c(_e)} عضو</span>
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
          ${f.length>0?`
            <div>
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
                <div style="width: 8px; height: 18px; background: #3b82f6; border-radius: 4px;"></div>
                <h3 style="margin: 0; font-size: 1.05rem; font-weight: 800; color: #f4f4f6;">🌐 سایر گروه‌های عمومی فعال</h3>
              </div>

              <div style="display: flex; flex-direction: column; gap: 10px;">
                ${f.map(v=>`
                  <div class="glass-panel" style="padding: 16px 18px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 16px; display: flex; justify-content: space-between; align-items: center; gap: 12px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                      <div style="width: 44px; height: 44px; border-radius: 14px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
                        🌐
                      </div>
                      <div>
                        <strong style="font-size: 0.92rem; font-weight: 800; color: #f8fafc; display: block;">${l(v.title||v.name)}</strong>
                        <div style="display: flex; align-items: center; gap: 10px; margin-top: 4px; font-size: 0.74rem; color: #8e8e9c;">
                          <span>🌐 عمومی</span>
                          <span>•</span>
                          <span>👥 ${c(v.member_count||1)} عضو</span>
                          <span>•</span>
                          <span style="font-family: 'Outfit', monospace; color: #a1a1aa;">کد: ${l(v.code)}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <button type="button" onclick="window.handleJoinGroupSubmit('${v.code}');" style="padding: 7px 14px; font-size: 0.78rem; font-weight: 800; background: #3b82f6; color: white; border: none; border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;">
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
        ${((e=window.appState)==null?void 0:e.activeModal)==="editProfile"?Et():""}
      `;const x=String(d).trim().toUpperCase(),y=s.find(v=>(v.code||v.groupCode)===x)||($&&typeof $.getActiveGroup=="function"?$.getActiveGroup():null)||{code:x,name:`گروه ${x}`},h=y.name||y.groupName||`گروه ${x}`,_=Nt(y,r),m=!!(!_&&y&&y.status==="pending"),w=!!(y&&(y.is_private===1||y.type==="private"||y.isPrivate));(!window.lastLeaderboardResult||window.lastLeaderboardResult.groupCode!==x)&&$&&typeof $.getCachedLeaderboard=="function"&&(window.lastLeaderboardResult=$.getCachedLeaderboard(i.gregorianDate,x)),(b-window.lastLeaderboardFetchTime>=g||!window.lastLeaderboardResult||window.lastLeaderboardResult.groupCode!==x)&&!window.isFetchingLeaderboardBg&&$&&typeof $.fetchLeaderboard=="function"&&(window.lastLeaderboardFetchTime=b,window.isFetchingLeaderboardBg=!0,$.fetchLeaderboard(i.gregorianDate,!0,x).then(v=>{var E;v&&(window.lastLeaderboardResult=v),window.isFetchingLeaderboardBg=!1,(E=window.appState)!=null&&E.activeModal||window.renderApp&&window.renderApp()}).catch(()=>{window.isFetchingLeaderboardBg=!1})),_&&(b-window.lastPendingRequestsFetchTime>=g||!window.groupPendingRequests)&&!window.isFetchingPendingRequests&&$&&typeof $.fetchPendingRequests=="function"&&(window.lastPendingRequestsFetchTime=b,window.isFetchingPendingRequests=!0,$.fetchPendingRequests(x).then(v=>{var E;window.isFetchingPendingRequests=!1,Array.isArray(v)&&(window.groupPendingRequests=v,!((E=window.appState)!=null&&E.activeModal)&&window.renderApp&&window.renderApp())}).catch(()=>{window.isFetchingPendingRequests=!1})),window.leaderboardTimeFilter="today";const T="today",A=$&&typeof $.getWeeklyStats=="function"?$.getWeeklyStats():null,z=new Map,B=$&&typeof $.getGroupRoster=="function"?$.getGroupRoster(x):[];Array.isArray(B)&&B.forEach(v=>{if(v&&(v.userId||v.id)){const E=String(v.userId||v.id);z.set(E,{...v,userId:E})}}),Array.isArray(y==null?void 0:y.members)&&y.members.forEach(v=>{if(v&&(v.userId||v.id)){const E=String(v.userId||v.id),L=z.get(E)||{};z.set(E,{...L,...v,userId:E})}});const D=window.lastLeaderboardResult&&(window.lastLeaderboardResult.leaderboard||window.lastLeaderboardResult.list)||[];if(Array.isArray(D)&&D.forEach(v=>{if(v&&(v.userId||v.id)){const E=String(v.userId||v.id),L=z.get(E)||{};z.set(E,{...L,...v,userId:E})}}),r&&r.userId){const v=String(r.userId),E=z.get(v)||{},L=r.avatar_url||r.avatar||r.photo_url||E.avatarUrl||"",F=r.nickname||r.name||E.nickname||"شما",pe=r.target||E.target||"کنکور سراسری";z.set(v,{...E,userId:v,isUser:!0,isCurrentUser:!0,nickname:F,name:F,target:pe,avatarUrl:L,avatar_url:L,avatar:L,photo_url:L,studyMinutes:Math.max(Number(E.studyMinutes||0),Number((i==null?void 0:i.studyMinutes)||0)),testCount:Math.max(Number(E.testCount||0),Number((i==null?void 0:i.testCount)||0)),weeklyStudyMinutes:Math.max(Number(E.weeklyStudyMinutes||0),Number((A==null?void 0:A.studyMinutes)||0),Number((i==null?void 0:i.studyMinutes)||0)),weeklyTestCount:Math.max(Number(E.weeklyTestCount||0),Number((A==null?void 0:A.testCount)||0),Number((i==null?void 0:i.testCount)||0)),isOwner:!!(_||E.isOwner)})}const I=Array.from(z.values());y&&(y.members=I);let P;$&&typeof $.aggregateAndRankMembers=="function"?P=$.aggregateAndRankMembers(I,"today"):P=I.map(v=>{const E=Number(v.studyMinutes||v.study_minutes||0),L=Number(v.testCount||v.test_count||0),F=E*60+L*10;return{...v,displayStudyMins:E,displayTestCount:L,score:F}}).sort((v,E)=>E.score!==v.score?E.score-v.score:E.displayStudyMins!==v.displayStudyMins?E.displayStudyMins-v.displayStudyMins:E.displayTestCount-v.displayTestCount).map((v,E)=>({...v,rank:E+1})),P=P.map(v=>{if(!!(v.isUser||v.isCurrentUser||v.userId===r.userId||r.phone&&v.phone===r.phone)){const L=r.avatar_url||r.avatar||r.photo_url||v.avatar_url||v.avatarUrl,F=r.nickname||r.name||v.nickname,pe=r.target||v.target;return{...v,isUser:!0,isCurrentUser:!0,nickname:F,name:F,target:pe,avatar_url:L,avatarUrl:L,avatar:L,photo_url:L}}return v});const j=!window.lastLeaderboardResult&&window.isFetchingLeaderboardBg,C=window.groupPendingRequests||[],J=P[0]||null,W=P[1]||null,G=P[2]||null,K=(v=0,E=999,L=1)=>{const F=v/60;return E===1||F>=35?{name:"الماس",icon:"💎",color:"#38bdf8",bg:"rgba(56, 189, 248, 0.15)",border:"rgba(56, 189, 248, 0.35)"}:E<=3||F>=22?{name:"طلا",icon:"🥇",color:"#fbbf24",bg:"rgba(251, 191, 36, 0.15)",border:"rgba(251, 191, 36, 0.35)"}:E<=Math.max(4,Math.ceil(L*.5))||F>=10?{name:"نقره",icon:"🥈",color:"#cbd5e1",bg:"rgba(203, 213, 225, 0.15)",border:"rgba(203, 213, 225, 0.35)"}:{name:"برنز",icon:"🥉",color:"#cd7f32",bg:"rgba(205, 127, 50, 0.15)",border:"rgba(205, 127, 50, 0.35)"}},q=()=>{const v=new Date,L=6-(v.getDay()+1)%7,F=23-v.getHours(),pe=59-v.getMinutes();return L>0?`${c(L)} روز و ${c(F)} ساعت`:`${c(F)} ساعت و ${c(pe)} دقیقه`},Z=()=>{if(!P||P.length===0)return"";const v=P.findIndex(xe=>xe.isUser||xe.isCurrentUser||xe.userId===r.userId||r.phone&&xe.phone===r.phone);if(v<0)return`
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
        `;const E=v+1,L=P[v];if(E===1){const xe=P[1]||null,ye=xe?Math.max(0,Math.round((L.displayStudyMins||0)-(xe.displayStudyMins||0))):0;return`
          <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(234, 179, 8, 0.12) 100%); border: 1.5px solid rgba(245, 158, 11, 0.45); border-radius: 18px; padding: 14px 18px; margin-bottom: 18px; direction: rtl; box-shadow: 0 0 20px rgba(245, 158, 11, 0.15);">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 44px; height: 44px; border-radius: 14px; background: rgba(245, 158, 11, 0.25); border: 1px solid rgba(245, 158, 11, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
                  👑
                </div>
                <div>
                  <strong style="font-size: 0.96rem; color: #fbbf24; font-weight: 900;">شما در صدر جدول رقابت هستید! 🌟</strong>
                  <div style="font-size: 0.75rem; color: #fde68a; margin-top: 3px;">
                    ${xe?`پیشتازی با <strong style="color: #ffffff;">${be(ye)}</strong> فاصله نسبت به نفر دوم (${l(xe.nickname||"رقیب")})`:"جایگاه اول را با تداوم مطالعه حفظ کنید."}
                  </div>
                </div>
              </div>
              <span style="background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid #f59e0b; padding: 6px 14px; border-radius: 12px; font-weight: 900; font-size: 0.78rem;">
                🏆 رتبه ۱ گروه
              </span>
            </div>
          </div>
        `}const F=P[v-1],pe=E-1,U=F.nickname||F.name||"رقیب شما",fe=Math.max(1,Math.round((F.displayStudyMins||0)-(L.displayStudyMins||0)));return`
        <div style="background: linear-gradient(135deg, rgba(124, 58, 237, 0.22) 0%, rgba(236, 72, 153, 0.16) 100%); border: 1.5px solid rgba(168, 85, 247, 0.45); border-radius: 18px; padding: 14px 18px; margin-bottom: 18px; direction: rtl; animation: pulseGlow 3s infinite ease-in-out;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 44px; height: 44px; border-radius: 14px; background: rgba(168, 85, 247, 0.25); border: 1px solid rgba(168, 85, 247, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.4rem;">
                ⚡
              </div>
              <div>
                <strong style="font-size: 0.96rem; color: #ffffff; font-weight: 900;">تنها ${c(fe)} دقیقه مطالعه تا گرفتن رتبه «${l(U)}»! 🔥</strong>
                <div style="font-size: 0.75rem; color: #e9d5ff; margin-top: 3px;">
                  فاصله شما با رتبه ${c(pe)} جدول: <strong style="color: #f472b6; font-weight: 800;">${be(fe)}</strong> • با ثبت پارت جدید، سبقت بگیرید!
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
      `},R=P.filter(v=>v.isUser||v.isCurrentUser||v.userId===r.userId||r.phone&&v.phone===r.phone?$&&typeof $.isCurrentStudyingActive=="function"?$.isCurrentStudyingActive():!!(window.isUserStudyingNow&&window.isUserStudyingNow()):!!($?$.isMemberStudying(v):v.isStudying&&v.lastHeartbeat&&Date.now()-v.lastHeartbeat<15*60*1e3)).length,X=()=>`
        <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 14px; padding: 10px 16px; margin-bottom: 16px; direction: rtl;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="width: 10px; height: 10px; border-radius: 50%; background: #10b981; display: inline-block; animation: livePulse 1.5s infinite ease-in-out;"></span>
            <strong style="font-size: 0.85rem; color: #34d399; font-weight: 800;">
              🟢 ${c(R)} نفر هم‌اکنون در حال مطالعه هستند
            </strong>
          </div>
          <span style="font-size: 0.72rem; color: #a1a1aa; font-weight: 600;">
            بروزرسانی زنده حضور اعضا
          </span>
        </div>
      `,Q=()=>`
        <div style="background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 12px 16px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; direction: rtl;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1.1rem;">⏱️</span>
            <span style="font-size: 0.82rem; color: #cbd5e1; font-weight: 700;">زمان باقی‌مانده تا پایان لیگ هفتگی:</span>
            <strong style="font-size: 0.85rem; color: #f59e0b; font-weight: 900; font-family: 'Outfit'; background: rgba(245, 158, 11, 0.15); padding: 3px 10px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
              ${q()}
            </strong>
          </div>

          <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
            <span style="font-size: 0.68rem; background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); padding: 2px 7px; border-radius: 6px; font-weight: 800;">💎 الماس</span>
            <span style="font-size: 0.68rem; background: rgba(251, 191, 36, 0.15); color: #fbbf24; border: 1px solid rgba(251, 191, 36, 0.3); padding: 2px 7px; border-radius: 6px; font-weight: 800;">🥇 طلا</span>
            <span style="font-size: 0.68rem; background: rgba(203, 213, 225, 0.15); color: #cbd5e1; border: 1px solid rgba(203, 213, 225, 0.3); padding: 2px 7px; border-radius: 6px; font-weight: 800;">🥈 نقره</span>
            <span style="font-size: 0.68rem; background: rgba(205, 127, 50, 0.15); color: #cd7f32; border: 1px solid rgba(205, 127, 50, 0.3); padding: 2px 7px; border-radius: 6px; font-weight: 800;">🥉 برنز</span>
          </div>
        </div>
      `,oe=v=>!Array.isArray(v)||v.length===0?'<span style="font-size: 0.72rem; color: #94a3b8; font-style: italic; opacity: 0.8;">در انتظار مطالعه</span>':v.slice(0,4).map(E=>`
        <span style="font-size: 0.68rem; background: rgba(56, 189, 248, 0.15); color: #7dd3fc; border: 1px solid rgba(56, 189, 248, 0.35); padding: 1px 7px; border-radius: 8px; font-weight: bold; white-space: nowrap;">
          ${l(E)}
        </span>
      `).join(" "),ce=Math.max(1,Math.min(3,Math.ceil(P.length*.25))),ie=Math.max(ce+1,Math.floor(P.length*.75));return`
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
                  <span>${l(h)}</span>
                </h3>
                <span style="font-size: 0.72rem; color: #8e8e9c; font-family: 'Outfit', monospace; font-weight: 700;">کد گروه: ${l(x)}</span>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <button type="button" onclick="window.handleCopyGroupCode('${x}')" style="padding: 7px 12px; font-size: 0.76rem; font-weight: 700; background: #1f2029; color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="کپی کد">
                <span>📋</span>
                <span>کد گروه</span>
              </button>

              <button type="button" onclick="window.handleShareGroupInvite('${x}', '${l(h)}')" style="padding: 7px 12px; font-size: 0.76rem; font-weight: 700; background: #1f2029; color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="دعوت دوستان">
                <span>🔗</span>
                <span>لینک دعوت</span>
              </button>

              <!-- Member Exit & Admin Delete Buttons (Both visible for Admin) -->
              <button type="button" onclick="window.handleLeaveGroupAction('${x}')" style="padding: 7px 12px; font-size: 0.74rem; font-weight: 800; background: rgba(239, 68, 68, 0.12); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.25); border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="خروج از این گروه">
                <span>🚪</span>
                <span>خروج از گروه</span>
              </button>

              ${_?`
                <button type="button" onclick="window.handleDeleteGroupAction('${x}')" style="padding: 7px 12px; font-size: 0.74rem; font-weight: 800; background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.4); border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="حذف کامل این گروه">
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
        ${Z()}

          <!-- 🟢 2. Live Presence Ticker -->
          ${X()}

          <!-- 🏆 3. Weekly Countdown & League Tiers -->
          ${Q()}

          <!-- 🌅 Early Birds Section for Group -->
          ${u(P)}

          <!-- 🏆 Leaderboard Time Filter: Today Only (Static Title) -->
          <div style="display: flex; justify-content: center; gap: 6px; margin-bottom: 20px; background: #1f2029; padding: 4px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); max-width: 260px; margin-left: auto; margin-right: auto;">
            <div style="flex: 1; padding: 8px 14px; border-radius: 12px; font-size: 0.82rem; font-weight: 800; text-align: center; border: 1px solid #7c3aed; background: #7c3aed; color: #ffffff; box-shadow: 0 2px 10px rgba(124, 58, 237, 0.35);">جدول رقابت امروز ☀️</div>
          </div>

          <!-- 🏆 3D-Style Podium (Center Gold 👑, Right Silver 🥈, Left Bronze 🥉) -->
          ${P.length>=1?`
            ${(()=>{const v=J&&(J.isUser||J.isCurrentUser||J.userId===r.userId||r.phone&&J.phone===r.phone),E=W&&(W.isUser||W.isCurrentUser||W.userId===r.userId||r.phone&&W.phone===r.phone),L=G&&(G.isUser||G.isCurrentUser||G.userId===r.userId||r.phone&&G.phone===r.phone);return`
              <div class="podium-container" style="display: flex; align-items: flex-end; justify-content: center; gap: 12px; margin: 24px 0 28px 0; padding: 0 10px; position: relative;">
                
                <!-- Rank 2 (Right, Silver Podium) -->
                <div style="flex: 1; max-width: 140px; display: flex; flex-direction: column; align-items: center; z-index: 2;">
                  <!-- Avatar & Badge -->
                  <div onclick="${E?"window.openEditProfileModal()":""}" style="position: relative; margin-bottom: 8px; text-align: center; display: inline-block; ${E?"cursor: pointer;":""}" title="${E?"ویرایش مشخصات شما":""}">
                    <div style="font-size: 1.5rem; margin-bottom: 2px;">🥈</div>
                    ${tt(W,52)}
                    <span style="position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%); background: #cbd5e1; color: #0f172a; font-size: 0.68rem; font-weight: 900; padding: 1px 8px; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.4);">۲</span>
                    ${E?'<span style="position: absolute; bottom: -2px; right: -2px; background: #7c3aed; color: white; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; border: 2px solid #16171d; box-shadow: 0 2px 6px rgba(0,0,0,0.5);">✏️</span>':""}
                  </div>

                  <strong onclick="${E?"window.openEditProfileModal()":""}" style="font-size: 0.82rem; color: ${E?"#c4b5fd":"#e4e4e7"}; text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; ${E?"cursor: pointer;":""}">${l((W==null?void 0:W.nickname)||(W==null?void 0:W.name)||"---")}</strong>
                  <span style="font-size: 0.72rem; color: #cbd5e1; font-weight: 900; margin-top: 2px;">${be((W==null?void 0:W.displayStudyMins)||0)}</span>
                  <span style="font-size: 0.66rem; color: #8e8e9c;">${c((W==null?void 0:W.displayTestCount)||0)} تست</span>

                  <!-- 3D Silver Block -->
                  <div style="width: 100%; height: 95px; background: linear-gradient(180deg, rgba(203, 213, 225, 0.25) 0%, rgba(148, 163, 184, 0.1) 100%); border: 1.5px solid rgba(203, 213, 225, 0.4); border-top-left-radius: 14px; border-top-right-radius: 14px; margin-top: 10px; box-shadow: inset 0 2px 10px rgba(255,255,255,0.1), 0 10px 25px rgba(0,0,0,0.4); display: flex; align-items: center; justify-content: center; font-size: 2.2rem; font-weight: 900; color: rgba(203, 213, 225, 0.3);">2</div>
                </div>

                <!-- Rank 1 (Center, Gold Podium with Crown 👑) -->
                <div style="flex: 1; max-width: 155px; display: flex; flex-direction: column; align-items: center; z-index: 3; transform: translateY(-10px);">
                  <!-- Avatar & Crown -->
                  <div onclick="${v?"window.openEditProfileModal()":""}" style="position: relative; margin-bottom: 8px; text-align: center; display: inline-block; ${v?"cursor: pointer;":""}" title="${v?"ویرایش مشخصات شما":""}">
                    <div style="font-size: 2rem; filter: drop-shadow(0 0 10px #fbbf24); animation: bounce 2s infinite;">👑</div>
                    ${tt(J,64)}
                    <span style="position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%); background: #fbbf24; color: #0f172a; font-size: 0.72rem; font-weight: 900; padding: 2px 10px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.4);">۱</span>
                    ${v?'<span style="position: absolute; bottom: -2px; right: -2px; background: #7c3aed; color: white; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; border: 2px solid #16171d; box-shadow: 0 2px 6px rgba(0,0,0,0.5);">✏️</span>':""}
                  </div>

                  <strong onclick="${v?"window.openEditProfileModal()":""}" style="font-size: 0.88rem; color: #fbbf24; text-align: center; font-weight: 900; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; ${v?"cursor: pointer;":""}">${l((J==null?void 0:J.nickname)||(J==null?void 0:J.name)||"---")}</strong>
                  <span style="font-size: 0.78rem; color: #f59e0b; font-weight: 900; margin-top: 2px;">${be((J==null?void 0:J.displayStudyMins)||0)}</span>
                  <span style="font-size: 0.68rem; color: #fde68a;">${c((J==null?void 0:J.displayTestCount)||0)} تست</span>

                  <!-- 3D Gold Block -->
                  <div style="width: 100%; height: 125px; background: linear-gradient(180deg, rgba(245, 158, 11, 0.3) 0%, rgba(217, 119, 6, 0.12) 100%); border: 2px solid rgba(245, 158, 11, 0.6); border-top-left-radius: 16px; border-top-right-radius: 16px; margin-top: 10px; box-shadow: inset 0 2px 14px rgba(251, 191, 36, 0.25), 0 14px 30px rgba(245, 158, 11, 0.25); display: flex; align-items: center; justify-content: center; font-size: 2.8rem; font-weight: 900; color: rgba(251, 191, 36, 0.35);">1</div>
                </div>

                <!-- Rank 3 (Left, Bronze Podium) -->
                <div style="flex: 1; max-width: 140px; display: flex; flex-direction: column; align-items: center; z-index: 1;">
                  <!-- Avatar & Badge -->
                  <div onclick="${L?"window.openEditProfileModal()":""}" style="position: relative; margin-bottom: 8px; text-align: center; display: inline-block; ${L?"cursor: pointer;":""}" title="${L?"ویرایش مشخصات شما":""}">
                    <div style="font-size: 1.5rem; margin-bottom: 2px;">🥉</div>
                    ${tt(G,48)}
                    <span style="position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%); background: #cd7f32; color: #ffffff; font-size: 0.68rem; font-weight: 900; padding: 1px 8px; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.4);">۳</span>
                    ${L?'<span style="position: absolute; bottom: -2px; right: -2px; background: #7c3aed; color: white; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; border: 2px solid #16171d; box-shadow: 0 2px 6px rgba(0,0,0,0.5);">✏️</span>':""}
                  </div>

                  <strong onclick="${L?"window.openEditProfileModal()":""}" style="font-size: 0.82rem; color: ${L?"#c4b5fd":"#e4e4e7"}; text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; ${L?"cursor: pointer;":""}">${l((G==null?void 0:G.nickname)||(G==null?void 0:G.name)||"---")}</strong>
                  <span style="font-size: 0.72rem; color: #cd7f32; font-weight: 900; margin-top: 2px;">${be((G==null?void 0:G.displayStudyMins)||0)}</span>
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
                        ${j?"⏳ در حال دریافت جدول رتبه‌بندی اعضا...":"هنوز رکوردی در این گروه ثبت نشده است."}
                      </td>
                    </tr>
                  `:P.map((v,E)=>{const L=E+1,F=v.isUser||v.isCurrentUser||v.userId===r.userId||r.phone&&v.phone===r.phone,pe=F?$&&typeof $.isCurrentStudyingActive=="function"?$.isCurrentStudyingActive():!!(window.isUserStudyingNow&&window.isUserStudyingNow()):!!($?$.isMemberStudying(v):v.isStudying&&v.lastHeartbeat&&Date.now()-v.lastHeartbeat<15*60*1e3),U=F?pe&&typeof window.getCurrentFocusSubjectTitle=="function"?window.getCurrentFocusSubjectTitle():"":v.studySubject||v.subject||v.currentSubject||(Array.isArray(v.subjects)&&v.subjects.length>0?v.subjects[0]:null),fe=K(v.displayStudyMins||0,L,P.length),xe=L===1?"🥇":L===2?"🥈":L===3?"🥉":`#${c(L)}`;let ye="";E===ce&&P.length>=4&&(ye=`
                        <tr style="background: linear-gradient(90deg, rgba(16, 185, 129, 0.18) 0%, rgba(16, 185, 129, 0.04) 100%); border-top: 1.5px solid #10b981; border-bottom: 1.5px solid #10b981;">
                          <td colspan="6" style="text-align: center; padding: 7px 12px; font-size: 0.74rem; font-weight: 900; color: #34d399; letter-spacing: 0.5px;">
                            🟢 ── محدوده صعود به لیگ بالاتر (Promotion Zone) ──
                          </td>
                        </tr>
                      `);let _e="";return E===ie&&P.length>=6&&ie>ce&&(_e=`
                        <tr style="background: linear-gradient(90deg, rgba(239, 68, 68, 0.18) 0%, rgba(239, 68, 68, 0.04) 100%); border-top: 1.5px solid #ef4444; border-bottom: 1.5px solid #ef4444;">
                          <td colspan="6" style="text-align: center; padding: 7px 12px; font-size: 0.74rem; font-weight: 900; color: #f87171; letter-spacing: 0.5px;">
                            🔴 ── محدوده خطر سقوط به لیگ پایین‌تر (Relegation Zone) ──
                          </td>
                        </tr>
                      `),`
                      ${ye}
                      ${_e}
                      <tr class="leaderboard-row" data-search="${l(v.nickname)} ${l(v.target)}" onclick="${F?"window.openEditProfileModal()":""}" style="border-bottom: 1px solid rgba(255,255,255,0.04); background: ${F?"rgba(124, 58, 237, 0.12)":"transparent"}; ${F?"cursor: pointer;":""}">
                        
                        <td style="padding: 10px 12px; text-align: center; font-weight: 800; color: ${L<=3?"#facc15":"#a1a1aa"};">
                          ${xe}
                        </td>

                        <td style="padding: 10px 12px; text-align: center;">
                          <span style="font-size: 0.68rem; background: ${fe.bg}; color: ${fe.color}; border: 1px solid ${fe.border}; padding: 2px 7px; border-radius: 6px; font-weight: 800; white-space: nowrap;">
                            ${fe.icon} ${fe.name}
                          </span>
                        </td>

                        <td style="padding: 10px 12px;">
                          <div style="display: flex; align-items: center; gap: 10px;">
                            ${tt(v,34)}
                            <div>
                              <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                                <strong style="color: ${F?"#c4b5fd":"#e4e4e7"}; font-weight: 800;">${l(v.nickname||"کاربر")}</strong>
                                ${F?'<span style="font-size: 0.64rem; background: #7c3aed; color: white; padding: 1px 6px; border-radius: 4px; display: inline-flex; align-items: center; gap: 2px;" title="کلیک جهت ویرایش مشخصات">شما ✏️</span>':""}
                                ${pe?`
                                  <span style="font-size: 0.65rem; background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid #10b981; padding: 2px 8px; border-radius: 10px; font-weight: 900; display: inline-flex; align-items: center; gap: 4px; box-shadow: 0 0 10px rgba(16, 185, 129, 0.4); animation: livePulse 2s infinite ease-in-out;">
                                    🟢 در حال مطالعه ${U?`(${l(U)})`:""}
                                  </span>
                                `:""}
                              </div>
                              <span style="font-size: 0.7rem; color: #8e8e9c; display: block; margin-top: 2px;">${l(v.target||"")}</span>
                            </div>
                          </div>
                        </td>

                        <td style="padding: 10px 12px; font-weight: 800; color: #38bdf8;">
                          ${be(v.displayStudyMins||0)}
                        </td>

                        <td style="padding: 10px 12px; font-weight: 700; color: #cbd5e1;">
                          ${c(v.displayTestCount||0)}
                        </td>

                        <td style="padding: 10px 12px;">
                          ${oe(v.subjects)}
                        </td>

                      </tr>
                    `}).join("")}
                </tbody>
              </table>
            </div>

          </div>

      </div>
      ${((t=window.appState)==null?void 0:t.activeModal)==="editProfile"?Et():""}
    `}catch(n){return console.error("Error rendering LeaderboardView:",n),`
      <div id="tab-leaderboard" class="main-container active" style="display: block; padding: 40px 20px; text-align: center; direction: rtl;">
        <h3 style="color: #ef4444;">خطا در بارگذاری تالار رقابت</h3>
        <p style="color: #a1a1aa; font-size: 0.85rem;">${Ao((n==null?void 0:n.message)||"خطای غیرمنتظره در بارگذاری داده‌ها")}</p>
        <button onclick="window.planexNavigateBackToGroups && window.planexNavigateBackToGroups(event)" style="margin-top: 15px; padding: 8px 16px; background: #7c3aed; color: white; border: none; border-radius: 10px; font-weight: 800; cursor: pointer;">
          ⬅️ برگشت به لیست گروه‌ها
        </button>
      </div>
    `}}const Ko=dt,Qo=Xe;typeof window<"u"&&(window.renderLeaderboardView=dt,window.renderLeaderboard=dt,window.bindLeaderboardEvents=Mo,window.initLeaderboardView=Xe,window.initLeaderboard=Xe);function Xo(){return`
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
  `}function Co(o={}){var E,L,F,pe;const{stopwatchTime:e=0,isStopwatchRunning:t=!1,pomodoroTime:n=1500,isPomodoroRunning:a=!1,timerType:r=1,presetMins:i=25,sessionTests:s=0,pomodoroActiveUsers:d=0,activityMode:l="study",selectedCategoryCode:c=null,selectedNonStudyCode:g="non_sports",selectedSubject:b="",selectedStudyMethod:f="یادگیری",sessionNote:k="",isModalMode:u=!1,focusAccordions:x={activity:!1,timing:!1,testNote:!1,audio:!1}}=o,y=f||((E=window.appState)==null?void 0:E.selectedStudyMethod)||((L=window.fabActivityState)==null?void 0:L.selectedPhase)||"یادگیری",h=U=>String(U).replace(/[0-9]/g,fe=>"۰۱۲۳۴۵۶۷۸۹"[fe]),_=r===2,m=l==="non-study"&&!_,w=!_&&!m;let T="#10b981",A="#10b981",z="linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",B="💾 ثبت پارت مطالعه",D="⚡ در حال تمرکز",I="▶ لمس جهت شروع";_?(T="#38bdf8",A="#0284c7",z="linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",B="☕ ثبت استراحت (بدون احتساب در ساعت مطالعه)",D="☕ در حال استراحت پومودورو",I="▶ لمس جهت شروع استراحت"):m&&(T="#f59e0b",A="#d97706",z="linear-gradient(135deg, #d97706 0%, #b45309 100%)",B="🧘 ثبت فعالیت غیردرسی (بدون احتساب در ساعت مطالعه)",D="🧘 در حال فعالیت غیردرسی",I="▶ لمس جهت شروع فعالیت");const P=typeof p<"u"&&typeof p.getStudyMinutesByDate=="function"?p.getStudyMinutesByDate():0,j=typeof p<"u"&&typeof p.getDailyTestCount=="function"?p.getDailyTestCount():0,C=typeof p<"u"?p.getCategories():[],J=typeof p<"u"&&typeof p.getNonStudyCategories=="function"?p.getNonStudyCategories():[{code:"non_sports",title:"ورزش و تندرستی",icon:"🏃",color:"#f59e0b"},{code:"non_sleep",title:"خواب و استراحت",icon:"😴",color:"#8b5cf6"},{code:"non_meal",title:"میان‌وعده و تغذیه",icon:"☕",color:"#10b981"},{code:"non_walk",title:"پیاده‌روی و هوای آزاد",icon:"🚶",color:"#06b6d4"},{code:"non_zen",title:"مدیتیشن و ذهن‌آگاهی",icon:"🧘",color:"#ec4899"},{code:"non_personal",title:"کارهای شخصی و تفریح",icon:"📱",color:"#f43f5e"},{code:"non_house",title:"امور منزل و خرید",icon:"🧹",color:"#64748b"}],W=c||((F=C.find(U=>Ee(U)))==null?void 0:F.code)||((pe=C[0])==null?void 0:pe.code)||"ع-س",G=C.find(U=>U.code===W)||C[0]||{title:"داخلی"},K=J.find(U=>U.code===g)||J[0],q=_?{title:"استراحت پومودورو"}:w?G:K,Z=r===0?e:n,R=r===0?t:a,X=Math.max(0,Z),Q=Math.floor(X/3600),oe=Math.floor(X%3600/60),ce=X%60,ie=U=>U.toString().padStart(2,"0"),v=Q>0?`${ie(Q)}:${ie(oe)}:${ie(ce)}`:`${ie(oe)}:${ie(ce)}`;return`
    <div class="focus-view-container ${u?"focus-modal-layout":"main-container"}" style="direction: rtl; padding-bottom: 70px; color: #fff;">
      
      <!-- Top Title Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="width: 32px; height: 32px; border-radius: 10px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 1.1rem;">
            ${_?"☕":w?"🎯":"🧘"}
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
              مطالعه امروز: ${be(P)} | ${h(j)} تست
            </span>
          `}
        </div>
      </div>

      <!-- Live Study Status Bar when running -->
      ${R?`
        <div style="background: #16171d; border: 1px solid ${T}; border-radius: 12px; padding: 8px 12px; margin-bottom: 10px; display: flex; align-items: center; justify-content: space-between; gap: 8px; animation: fadeIn 0.3s ease;">
          <div style="display: flex; align-items: center; gap: 6px;">
            <span class="neon-pulse-dot animate-pulse" style="background: ${T};"></span>
            <span style="font-size: 0.76rem; font-weight: 700; color: ${T};">
              وضعیت زنده:
              <strong style="color: #ffffff;">«${_?"استراحت و ریکاوری پومودورو":w?b?`${G.title} (${b})`:G.title:b?`${K.title} (${b})`:K.title}»</strong>
            </span>
          </div>
          <span style="font-size: 0.65rem; background: rgba(255,255,255,0.08); color: ${T}; padding: 2px 6px; border-radius: 6px; font-weight: 600; white-space: nowrap;">
            ${_?"☕ استراحت":m?"🧘 غیردرسی":"🟢 در حال مطالعه"}
          </span>
        </div>
      `:""}

      <!-- 📚 1. ACCORDION: ACTIVITY TYPE & SUBJECT SELECTION -->
      <div class="glass-panel" style="margin-bottom: 10px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-accordion-toggle" id="btn-accordion-activity" data-accordion-key="activity" onclick="event.preventDefault(); event.stopPropagation(); window.toggleFocusAccordion && window.toggleFocusAccordion('activity', event)" style="width: 100%; padding: 12px 14px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; font-weight: 700; color: #e4e4e7; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 88%;">
            <span style="font-size: 0.95rem;">${_?"☕":w?"📚":"🧘"}</span>
            <span>انتخاب درس و فعالیت: <strong style="color: ${T}; font-weight: 800;">«${q.title}${b?` - ${b}`:""}»</strong></span>
          </div>
          <span class="accordion-chevron" style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${x.activity?"180deg":"0deg"});">▼</span>
        </button>
        
        <div id="accordion-drawer-activity" class="accordion-drawer" style="display: ${x.activity?"block":"none"}; padding: 12px 14px 14px 14px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 0.76rem; font-weight: 700; color: #e4e4e7;">
              نوع فعالیت:
            </span>
            <span style="font-size: 0.7rem; color: #8e8e9c;">
              ${_?"☕ استراحت":w?"📚 درسی":"🧘 غیردرسی"}
            </span>
          </div>

          <div style="display: flex; gap: 6px; margin-bottom: 10px;">
            <button type="button" class="btn-activity-mode-switch ${w?"active":""}" data-mode="study" onclick="event.preventDefault(); event.stopPropagation(); window.setFocusActivityMode && window.setFocusActivityMode('study', event)" style="flex: 1; padding: 7px 10px; border-radius: 10px; font-size: 0.78rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; border: 1px solid ${w?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${w?"#7c3aed":"#1f2029"}; color: ${w?"#ffffff":"#a1a1aa"}; transition: all 0.2s ease;">
              <span style="font-size: 0.95rem;">📚</span>
              <span>فعالیت درسی</span>
            </button>
            
            <button type="button" class="btn-activity-mode-switch ${w?"":"active"}" data-mode="non-study" onclick="event.preventDefault(); event.stopPropagation(); window.setFocusActivityMode && window.setFocusActivityMode('non-study', event)" style="flex: 1; padding: 7px 10px; border-radius: 10px; font-size: 0.78rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; border: 1px solid ${w?"rgba(255,255,255,0.08)":"#f59e0b"}; background: ${w?"#1f2029":"#d97706"}; color: ${w?"#a1a1aa":"#ffffff"}; transition: all 0.2s ease;">
              <span style="font-size: 0.95rem;">☕</span>
              <span>فعالیت غیردرسی</span>
            </button>
          </div>

          <div id="focus-activity-study-container" style="display: ${w?"block":"none"};">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <label style="font-size: 0.72rem; font-weight: 600; color: var(--text-secondary);">
                نام درس:
              </label>
              <button type="button" onclick="if(window.openActivityModal){ window.openActivityModal(); }" style="background: none; border: none; color: #a1a1aa; font-size: 0.7rem; font-weight: 600; cursor: pointer; padding: 0;">
                ➕ افزودن درس
              </button>
            </div>

            <div style="display: flex; gap: 5px; overflow-x: auto; padding-bottom: 4px; margin-bottom: 8px;" id="focus-study-category-chips">
              ${C.map(U=>`
                <button type="button" class="btn-focus-cat-chip ${U.code===W?"active":""}" data-code="${U.code}" data-title="${U.title}" onclick="event.preventDefault(); event.stopPropagation(); window.handleSelectFocusSubject && window.handleSelectFocusSubject(this, '${U.title}', '${U.code}')" style="display: inline-flex; align-items: center; gap: 4px; padding: 4px 8px; border-radius: 8px; border: 1px solid ${U.code===W?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${U.code===W?"#7c3aed":"#1f2029"}; color: ${U.code===W?"#ffffff":"#e4e4e7"}; font-size: 0.74rem; font-weight: 600; cursor: pointer; white-space: nowrap;">
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
              <input type="text" id="input-focus-subject" data-alias="fab-timer-subject-input" value="${b||""}" placeholder="مثلاً: گوارش، قلب، تست جامع..." style="width: 100%; box-sizing: border-box; height: 34px; padding: 0 10px; font-size: 0.78rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; color: #fff;" />
            </div>

            <!-- 🌟 Study Phase Selection Chips -->
            <div style="margin-top: 10px;">
              <label style="display: block; font-size: 0.72rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 4px;">
                فاز / روش مطالعه:
              </label>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px;" id="focus-phase-chips-container">
                ${[{id:"یادگیری",label:"یادگیری",icon:"🧠"},{id:"تست‌زنی",label:"تست‌زنی",icon:"🎯"},{id:"مرور",label:"مرور",icon:"🔄"},{id:"جمع‌بندی",label:"جمع‌بندی",icon:"📑"}].map(U=>{const fe=y===U.id;return`
                    <button type="button" class="btn-phase-chip btn-manual-study-pill btn-fab-study-pill ${fe?"active":""}" data-phase="${U.id}" data-pill="${U.id}" onclick="event.preventDefault(); event.stopPropagation(); window.selectStudyPhase && window.selectStudyPhase(this, '${U.id}')" style="padding: 6px 2px; border-radius: 8px; border: 1px solid ${fe?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${fe?"#7c3aed":"#1f2029"}; color: ${fe?"#ffffff":"#a1a1aa"}; font-size: 0.72rem; font-weight: 700; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 2px; transition: all 0.15s ease;">
                      <span style="font-size: 0.95rem;">${U.icon}</span>
                      <span>${U.label}</span>
                    </button>
                  `}).join("")}
              </div>
              <input type="hidden" id="focus-phase-input" value="${y}" />
            </div>
          </div>

          <div id="focus-activity-nonstudy-container" style="display: ${w?"none":"block"};">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <label style="font-size: 0.72rem; font-weight: 600; color: var(--text-secondary);">
                دسته‌بندی غیردرسی:
              </label>
              <button type="button" id="btn-add-custom-nonstudy-quick" style="background: none; border: none; color: #a1a1aa; font-size: 0.7rem; font-weight: 600; cursor: pointer; padding: 0;">
                ➕ افزودن فعالیت
              </button>
            </div>

            <div style="display: flex; gap: 5px; overflow-x: auto; padding-bottom: 4px; margin-bottom: 8px;">
              ${J.map(U=>`
                <button type="button" class="btn-nonstudy-cat-chip ${U.code===g?"active":""}" data-code="${U.code}" data-title="${U.title}" onclick="event.preventDefault(); event.stopPropagation(); window.handleSelectFocusSubject && window.handleSelectFocusSubject(this, '${U.title}', '${U.code}')" style="display: inline-flex; align-items: center; gap: 4px; padding: 4px 8px; border-radius: 8px; border: 1px solid ${U.code===g?"#d97706":"rgba(255,255,255,0.08)"}; background: ${U.code===g?"#d97706":"#1f2029"}; color: ${U.code===g?"#ffffff":"#e4e4e7"}; font-size: 0.74rem; font-weight: 600; cursor: pointer; white-space: nowrap;">
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
              <input type="text" id="input-focus-nonstudy-subject" data-alias="fab-timer-subject-input" value="${b||""}" placeholder="مثلاً: ورزش صبحگاهی، استراحت، خرید..." style="width: 100%; box-sizing: border-box; height: 34px; padding: 0 10px; font-size: 0.78rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; color: #fff;" />
            </div>
          </div>
        </div>
      </div>

      <!-- ⏱️ 2. ACCORDION: POMODORO DURATION & BREAK TIMING -->
      <div class="glass-panel" style="margin-bottom: 12px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-accordion-toggle" id="btn-accordion-timing" data-accordion-key="timing" onclick="event.preventDefault(); event.stopPropagation(); window.toggleFocusAccordion && window.toggleFocusAccordion('timing', event)" style="width: 100%; padding: 12px 14px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; font-weight: 700; color: #e4e4e7;">
            <span style="font-size: 0.95rem;">⏱️</span>
            <span>زمان‌بندی: <strong style="color: ${T}; font-weight: 800;">${r===0?"کرونومتر":r===2?"۵ دقیقه استراحت":`${i} دقیقه پومودورو`}</strong></span>
          </div>
          <span class="accordion-chevron" style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${x.timing?"180deg":"0deg"});">▼</span>
        </button>

        <div id="accordion-drawer-timing" class="accordion-drawer" style="display: ${x.timing?"block":"none"}; padding: 12px 14px 14px 14px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
          <!-- Timer Type Tabs -->
          <div style="display: flex; gap: 4px; background: #1f2029; padding: 3px; border-radius: 10px; margin-bottom: 10px;">
            <button type="button" class="btn-focus-tab ${r===1?"active btn-primary":"glass-panel"}" data-type="1" onclick="window.setFocusTimerType && window.setFocusTimerType(1)" style="flex: 1; padding: 6px; border: none; font-size: 0.74rem; font-weight: 600; cursor: pointer;">
              🍅 پومودورو (${i}دقیقه)
            </button>
            <button type="button" class="btn-focus-tab ${r===0?"active btn-primary":"glass-panel"}" data-type="0" onclick="window.setFocusTimerType && window.setFocusTimerType(0)" style="flex: 1; padding: 6px; border: none; font-size: 0.74rem; font-weight: 600; cursor: pointer;">
              ⏱️ کرونومتر
            </button>
            <button type="button" class="btn-focus-tab ${r===2?"active":"glass-panel"}" data-type="2" onclick="window.setFocusTimerType && window.setFocusTimerType(2)" style="flex: 1; padding: 6px; border: none; font-size: 0.74rem; font-weight: 600; cursor: pointer; background: ${r===2?"#0284c7":"transparent"}; color: ${r===2?"#fff":"#a1a1aa"};">
              ☕ استراحت (۵ دقیقه)
            </button>
          </div>

          <!-- Presets in Pomodoro mode -->
          <div id="focus-pomodoro-presets-container" style="display: ${r===1?"flex":"none"}; justify-content: center; gap: 4px; flex-wrap: wrap;">
            ${[15,25,30,45,50,60].map(U=>`
              <button type="button" class="btn-focus-preset ${i===U?"active":""}" data-mins="${U}" onclick="window.setFocusPresetMins && window.setFocusPresetMins(${U})" style="padding: 4px 10px; font-size: 0.72rem; font-weight: 600; border-radius: 12px; border: 1px solid ${i===U?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${i===U?"#7c3aed":"#1f2029"}; color: ${i===U?"#ffffff":"#a1a1aa"}; cursor: pointer;">
                ${U} دقیقه
              </button>
            `).join("")}
          </div>
        </div>
      </div>

      <!-- 🌟 CENTRAL FEATURE: PROMINENT LARGE POMODORO TIMER CIRCLE -->
      <div class="glass-panel timer-circle-panel" style="padding: 20px 16px; margin-bottom: 14px; border-radius: 18px; border: 1px solid ${T}; background: linear-gradient(180deg, rgba(22, 23, 29, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%); text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
        
        <!-- Radial Timer Display -->
        <div id="immersion-clock-clickable" class="timer-circle countdown-timer" onclick="event.preventDefault(); event.stopPropagation(); if(${R}){ window.finishPomodoroSession && window.finishPomodoroSession(); } else { window.planexStartFocusTimer && window.planexStartFocusTimer(event); }" style="position: relative; width: 230px; height: 230px; margin: 0 auto 16px auto; display: flex; align-items: center; justify-content: center; cursor: pointer;">
          <svg width="230" height="230" viewBox="0 0 220 220" style="transform: rotate(-90deg); width: 100%; height: 100%; filter: drop-shadow(0 0 12px ${T});">
            <circle cx="110" cy="110" r="95" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="12"></circle>
            <circle cx="110" cy="110" r="95" fill="none" stroke="${T}" stroke-width="12" 
              stroke-dasharray="596.9" 
              stroke-dashoffset="${596.9-596.9*(r===0?e%3600/3600:r===2?n/300:n/(i*60))}" 
              stroke-linecap="round" style="transition: stroke-dashoffset 0.5s ease;"></circle>
          </svg>
          
          <div style="position: absolute; text-align: center; width: 100%;">
            <div id="focus-timer-display" data-alias="timer-clock-display" style="font-size: 2.8rem; font-weight: 900; font-family: 'Outfit', sans-serif; color: #ffffff; letter-spacing: 1.5px; text-shadow: 0 0 24px ${T}; line-height: 1;">
              ${v}
            </div>
            <div style="font-size: 0.78rem; font-weight: 700; color: ${R?T:"#a1a1aa"}; margin-top: 6px;">
              ${R?D:I}
            </div>
          </div>
        </div>

        <!-- Timer Action Buttons: WIDE ATTACHED START BUTTON -->
        <div style="display: flex; gap: 8px;">
          <button type="button" id="btn-toggle-timer-main" onclick="event.preventDefault(); event.stopPropagation(); if(${R}){ window.finishPomodoroSession && window.finishPomodoroSession(); } else { window.planexStartFocusTimer && window.planexStartFocusTimer(event); }" class="btn-primary" style="flex: 1; height: 46px; font-size: 1rem; font-weight: 800; background: ${R?"#ef4444":A}; border-radius: 12px; border: none; cursor: pointer; color: white; box-shadow: 0 4px 16px ${R?"rgba(239,68,68,0.35)":"rgba(16,185,129,0.35)"}; transition: all 0.2s ease;">
            ${R?"⏸ توقف و ثبت پارت":_?"☕ شروع استراحت":m?"🧘 شروع فعالیت غیردرسی":"▶ شروع تایمر"}
          </button>
          <button type="button" id="btn-reset-timer-main" onclick="event.preventDefault(); event.stopPropagation(); window.resetTimer && window.resetTimer(event);" class="glass-panel" style="width: 70px; height: 46px; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); cursor: pointer; font-size: 0.82rem; font-weight: 700; border-radius: 12px; color: #a1a1aa; display: flex; align-items: center; justify-content: center; gap: 4px;" title="ریست تایمر (لغو بدون ثبت)">
            🔄
          </button>
        </div>

      </div>

      <!-- 💾 4. DEDICATED ACTION BUTTONS: AUTO-SYNC LOCAL & CLOUD SAVE -->
      <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px;">
        <!-- Button 1: Primary Save with Auto-Sync -->
        <button type="button" id="btn-save-activity-local" onclick="window.finishPomodoroSession && window.finishPomodoroSession()" style="width: 100%; height: 46px; background: ${z}; color: white; border: none; border-radius: 12px; font-size: 0.92rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35); transition: all 0.2s ease;">
          <span>${B}</span>
        </button>

        <!-- Button 2: Switch to Manual Log Modal -->
        <button type="button" onclick="if(window.openManualActivityLogModal){ window.openManualActivityLogModal(); } else { window.appState.activeModal = 'manualLog'; window.renderApp(); }" style="width: 100%; height: 38px; background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; font-size: 0.8rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; transition: all 0.2s ease;">
          <span style="font-size: 0.95rem;">➕</span>
          <span>ثبت دستی (بدون تایمر)</span>
        </button>
      </div>

      <!-- 🎵 Ambient Focus Sound Player Widget -->
      ${Jt()}


      <!-- 🎯 5. ACCORDION: TEST COUNTER & NOTES (Optional) -->
      <div class="glass-panel" style="margin-bottom: 10px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-accordion-toggle" id="btn-accordion-testNote" data-accordion-key="testNote" onclick="event.preventDefault(); event.stopPropagation(); window.toggleFocusAccordion && window.toggleFocusAccordion('testNote', event);" style="width: 100%; padding: 12px 14px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; font-weight: 700; color: #e4e4e7;">
            <span style="font-size: 0.95rem;">📝</span>
            <span>ثبت تست و یادداشت (اختیاری) ${s>0?`<strong style="color: #38bdf8; font-weight: 800;">(${s} تست)</strong>`:""}</span>
          </div>
          <span class="accordion-chevron" style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${x.testNote?"180deg":"0deg"});">▼</span>
        </button>

        <div id="accordion-drawer-testNote" class="accordion-drawer" style="display: ${x.testNote?"block":"none"}; padding: 12px 14px 14px 14px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
          ${w?`
            <!-- Dedicated Test Counter -->
            <div style="margin-bottom: 10px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-size: 0.78rem; color: #e4e4e7; font-weight: 700;">تست‌شمار پارت مطالعه:</span>
                <span style="font-size: 0.68rem; color: #8e8e9c;">امروز: <strong style="color:#e4e4e7;">${j+s}</strong> تست</span>
              </div>

              <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
                <button type="button" id="btn-test-counter-minus" onclick="window.adjustFocusTests && window.adjustFocusTests(-1)" style="width: 34px; height: 34px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; font-size: 1rem; font-weight: bold; cursor: pointer;" title="کاهش یک تست">−</button>
                
                <div id="focus-session-tests-display" style="flex: 1; text-align: center; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; padding: 2px 8px;">
                  <div style="font-size: 1.4rem; font-weight: 800; font-family: 'Outfit', sans-serif; color: #e4e4e7; line-height: 1.1;">${s}</div>
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
            <input type="text" id="input-focus-session-note" value="${k||""}" placeholder="نکات مهم یا ارزیابی شخصی..." style="width: 100%; box-sizing: border-box; height: 34px; padding: 0 10px; font-size: 0.76rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; color: #fff;" />
          </div>
        </div>
      </div>

    </div>
  `}function Zo(o={}){return`
    <div id="modal-focus-view" class="modal-overlay" style="position: fixed; inset: 0; z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 14px;">
      <div class="modal-backdrop" style="position: absolute; inset: 0; background: rgba(12, 13, 17, 0.88); backdrop-filter: blur(16px);" data-close-modal="true" onclick="if(!window.isTimerRunningCheck()){ window.closeFocusModal(); }"></div>
      
      <div class="glass-panel" style="position: relative; width: 100%; max-width: 520px; padding: 20px; border-radius: 18px; border: 1px solid rgba(255, 255, 255, 0.06); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8); max-height: 94vh; overflow-y: auto; background: #16171d; color: #fff;">
        ${Co({...o,isModalMode:!0})}
      </div>
    </div>
  `}function en(o={}){var W,G,K,q,Z;const{activityMode:e="study",selectedCategoryCode:t=null,selectedNonStudyCode:n="non_sports",subject:a="",durationMins:r=60,startTime:i="08:00",endTime:s="09:00",testCount:d=0,note:l="",durationMode:c="add",testCorrect:g=0,testWrong:b=0,testUnanswered:f=0}=o,k=R=>String(R).replace(/[0-9]/g,X=>"۰۱۲۳۴۵۶۷۸۹"[X]),u=e!=="non-study",x=(typeof p<"u"?p.getCategories():[])||[],y=x.filter(R=>Ee(R)),h=y.length>0?y:x,_=(typeof p<"u"&&typeof p.getNonStudyCategories=="function"?p.getNonStudyCategories():[{code:"non_sports",title:"ورزش و تندرستی",icon:"🏃",color:"#f59e0b"},{code:"non_rest",title:"استراحت و تفریح",icon:"☕",color:"#8b5cf6"},{code:"non_sleep",title:"خواب و ریکاوری",icon:"😴",color:"#6366f1"},{code:"non_meal",title:"میانوعده و تغذیه",icon:"🍎",color:"#10b981"},{code:"non_personal",title:"کارهای شخصی",icon:"📱",color:"#ec4899"},{code:"non_walk",title:"پیادهروی و هوای آزاد",icon:"🚶",color:"#06b6d4"},{code:"non_house",title:"امور منزل و خرید",icon:"🧹",color:"#64748b"}])||[],m=t&&!String(t).startsWith("non_")?t:((W=h.find(R=>Ee(R)))==null?void 0:W.code)||((G=h[0])==null?void 0:G.code)||"cat_dakheli";h.find(R=>R.code===m)||h[0],_.find(R=>R.code===n)||_[0];const w=Math.max(1,parseInt(r)||60),T=i||"08:00";let A=s;if(!A){const[R,X]=T.split(":").map(Number),oe=((!isNaN(R)&&!isNaN(X)?R*60+X:480)+w)%1440,ce=String(Math.floor(oe/60)).padStart(2,"0"),ie=String(oe%60).padStart(2,"0");A=`${ce}:${ie}`}const z=Math.max(0,parseInt(g)||0),B=Math.max(0,parseInt(b)||0),D=Math.max(0,parseInt(f)||0),I=z+B+D;let P=null,j="—";I>0&&(P=+((3*z-B)/(3*I)*100).toFixed(1),j=k(P.toFixed(1))+"%");let C=0;try{C=typeof p<"u"&&typeof p.getStudyMinutesByDate=="function"?p.getStudyMinutesByDate():0}catch{}const J=c==="replace"?w:C+w;return`
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
              ${h.map(R=>`
                <button type="button" class="btn-manual-cat-chip ${R.code===m?"active":""}" data-code="${R.code}" data-title="${R.title}" data-color="${R.color||"#0ea5e9"}" onclick="event.preventDefault(); event.stopPropagation(); window.handleSelectManualSubject && window.handleSelectManualSubject(this, '${R.title}', '${R.code}')" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 13px; border-radius: 12px; border: 1px solid ${R.code===m?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${R.code===m?"#7c3aed":"#1f2029"}; color: ${R.code===m?"#ffffff":"#e2e8f0"}; font-size: 0.8rem; font-weight: 700; cursor: pointer; white-space: nowrap; transition: all 0.15s ease;">
                  <span>${R.icon||"📚"}</span>
                  <span>${R.title}</span>
                </button>
              `).join("")}
            </div>

            <!-- 🌟 Study Phase Selection Chips -->
            <div style="margin-bottom: 12px;">
              <label style="display: block; font-size: 0.76rem; font-weight: 800; color: var(--text-secondary); margin-bottom: 6px;">
                فاز / نوع مطالعه (الزامی):
              </label>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;" id="manual-phase-chips-list">
                ${[{id:"یادگیری",label:"یادگیری",icon:"🧠"},{id:"تست‌زنی",label:"تست‌زنی",icon:"🎯"},{id:"مرور",label:"مرور",icon:"🔄"},{id:"جمع‌بندی",label:"جمع‌بندی",icon:"📑"}].map(R=>{var Q,oe,ce,ie;const X=((Q=window.fabActivityState)==null?void 0:Q.selectedPhase)===R.id||((oe=window.fabActivityState)==null?void 0:oe.studyType)===R.id||((ce=window.appState)==null?void 0:ce.selectedStudyMethod)===R.id||!((ie=window.fabActivityState)!=null&&ie.selectedPhase)&&R.id==="یادگیری";return`
                    <button type="button" class="btn-phase-chip btn-manual-study-pill ${X?"active":""}" data-phase="${R.id}" data-pill="${R.id}" onclick="event.preventDefault(); event.stopPropagation(); window.selectStudyPhase && window.selectStudyPhase(this, '${R.id}')" style="padding: 8px 4px; border-radius: 12px; border: 1px solid ${X?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${X?"#7c3aed":"#1f2029"}; color: ${X?"#ffffff":"#e4e4e7"}; font-size: 0.78rem; font-weight: 800; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 2px; transition: all 0.15s ease;">
                      <span style="font-size: 1.1rem;">${R.icon}</span>
                      <span>${R.label}</span>
                    </button>
                  `}).join("")}
              </div>
              <input type="hidden" id="input-manual-phase" value="${((K=window.fabActivityState)==null?void 0:K.selectedPhase)||((q=window.fabActivityState)==null?void 0:q.studyType)||((Z=window.appState)==null?void 0:Z.selectedStudyMethod)||"یادگیری"}" />
            </div>

            <div>
              <label style="display: block; font-size: 0.76rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 5px;">
                مبحث یا موضوع مطالعه (اختیاری):
              </label>
              <input type="text" id="input-manual-subject" value="${a||""}" placeholder="مثلاً: قلب و عروق، فصل ۳ ژنتیک، تستهای جامع..." style="width: 100%; box-sizing: border-box; height: 44px; padding: 0 12px; font-size: 0.84rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #fff;" />
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
              ${_.map(R=>`
                <button type="button" class="btn-manual-nonstudy-chip ${R.code===n?"active":""}" data-code="${R.code}" data-title="${R.title}" data-color="${R.color||"#f59e0b"}" onclick="event.preventDefault(); event.stopPropagation(); window.handleSelectManualSubject && window.handleSelectManualSubject(this, '${R.title}', '${R.code}')" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 13px; border-radius: 12px; border: 1px solid ${R.code===n?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${R.code===n?"#7c3aed":"#1f2029"}; color: ${R.code===n?"#ffffff":"#e2e8f0"}; font-size: 0.8rem; font-weight: 700; cursor: pointer; white-space: nowrap; transition: all 0.15s ease;">
                  <span>${R.icon||"☕"}</span>
                  <span>${R.title}</span>
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
                <input type="time" id="input-manual-start-time" value="${T}" oninput="window.syncManualTimeInputs && window.syncManualTimeInputs('from_times')" style="width: 100%; box-sizing: border-box; height: 42px; padding: 0 10px; font-size: 1.05rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #38bdf8; text-align: center;" />
              </div>
              <div>
                <label style="display: block; font-size: 0.7rem; font-weight: bold; color: #a1a1aa; margin-bottom: 4px;">تا ساعت (پایان):</label>
                <input type="time" id="input-manual-end-time" value="${A}" oninput="window.syncManualTimeInputs && window.syncManualTimeInputs('from_times')" style="width: 100%; box-sizing: border-box; height: 42px; padding: 0 10px; font-size: 1.05rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #38bdf8; text-align: center;" />
              </div>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 1rem;">⏳</span>
              <span style="font-size: 0.82rem; color: #e4e4e7; font-weight: 800;">مجموع مدت زمان:</span>
            </div>
            <span id="manual-duration-human-badge" style="font-size: 0.76rem; color: #a1a1aa; font-weight: bold; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); padding: 3px 10px; border-radius: 10px;">
              ${be(w)}
            </span>
          </div>

          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
            <button type="button" id="btn-manual-dur-minus-15" class="btn-dur-adjust" data-change="-15" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(-15)" style="padding: 0 10px; height: 44px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; font-size: 0.85rem; font-weight: 800; cursor: pointer;">−۱۵</button>
            <button type="button" id="btn-manual-dur-minus-5" class="btn-dur-adjust" data-change="-5" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(-5)" style="padding: 0 10px; height: 44px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; font-size: 0.85rem; font-weight: 800; cursor: pointer;">−۵</button>
            
            <div style="flex: 1; position: relative;">
              <input type="number" id="manual-duration-input" data-alias="input-manual-duration" min="1" max="1440" value="${w}" oninput="window.updateManualDurationPreview && window.updateManualDurationPreview(this.value)" style="width: 100%; box-sizing: border-box; height: 44px; text-align: center; font-size: 1.35rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; color: #e4e4e7;" />
              <span style="position: absolute; left: 10px; top: 12px; font-size: 0.72rem; color: #94a3b8; pointer-events: none;">دقیقه</span>
            </div>

            <button type="button" id="btn-manual-dur-plus-5" class="btn-dur-adjust" data-change="5" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(5)" style="padding: 0 10px; height: 44px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; font-size: 0.85rem; font-weight: 800; cursor: pointer;">+۵</button>
            <button type="button" id="btn-manual-dur-plus-15" class="btn-dur-adjust" data-change="15" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(15)" style="padding: 0 10px; height: 44px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; font-size: 0.85rem; font-weight: 800; cursor: pointer;">+۱۵</button>
          </div>

          <!-- Quick Duration Presets (-15, +5, +15, 15m, 30m, 1h, 1.5h, 2h) -->
          <div style="display: flex; gap: 6px; justify-content: center; flex-wrap: wrap; margin-bottom: 14px;">
            ${[15,30,45,60,90,120].map(R=>`
              <button type="button" class="btn-quick-dur-preset ${w===R?"active":""}" data-mins="${R}" onclick="event.preventDefault(); event.stopPropagation(); window.setManualDurationPreset && window.setManualDurationPreset(${R})" style="flex: 1; min-width: 65px; padding: 6px 4px; font-size: 0.76rem; font-weight: 800; border-radius: 10px; border: 1px solid ${w===R?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${w===R?"#7c3aed":"#1f2029"}; color: ${w===R?"#ffffff":"#a1a1aa"}; cursor: pointer; transition: all 0.15s ease;">
                ${R>=60?R===60?"۱ ساعت":`${R/60} ساعت`:`${R} دقیقه`}
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
            <span style="font-size: 0.8rem; font-weight: 700; color: #c4b5fd;">مجموع نهایی ثبت‌شده: <span id="manual-final-total-text" style="color: #e4e4e7;">${be(J)}</span></span>
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
              ${k(I)} تست
            </span>
          </div>

          <!-- Test Input Grid -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
            <!-- Correct -->
            <div style="background: #1a1b22; border: 1px solid rgba(16,185,129,0.2); border-radius: 14px; padding: 10px;">
              <label style="display: flex; align-items: center; gap: 4px; font-size: 0.74rem; font-weight: 800; color: #34d399; margin-bottom: 6px;">
                <span>✅</span> درست (صحیح)
              </label>
              <input type="number" id="input-manual-test-correct" min="0" max="2000" value="${z}" oninput="window.updateManualTestScorePreview && window.updateManualTestScorePreview()" style="width: 100%; box-sizing: border-box; height: 44px; text-align: center; font-size: 1.2rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(16,185,129,0.15); border-radius: 10px; color: #34d399;" />
            </div>

            <!-- Wrong -->
            <div style="background: #1a1b22; border: 1px solid rgba(239,68,68,0.2); border-radius: 14px; padding: 10px;">
              <label style="display: flex; align-items: center; gap: 4px; font-size: 0.74rem; font-weight: 800; color: #f87171; margin-bottom: 6px;">
                <span>❌</span> غلط (اشتباه)
              </label>
              <input type="number" id="input-manual-test-wrong" min="0" max="2000" value="${B}" oninput="window.updateManualTestScorePreview && window.updateManualTestScorePreview()" style="width: 100%; box-sizing: border-box; height: 44px; text-align: center; font-size: 1.2rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(239,68,68,0.15); border-radius: 10px; color: #f87171;" />
            </div>

            <!-- Unanswered -->
            <div style="background: #1a1b22; border: 1px solid rgba(161,161,170,0.2); border-radius: 14px; padding: 10px;">
              <label style="display: flex; align-items: center; gap: 4px; font-size: 0.74rem; font-weight: 800; color: #a1a1aa; margin-bottom: 6px;">
                <span>⏭️</span> نزده
              </label>
              <input type="number" id="input-manual-test-unanswered" min="0" max="2000" value="${D}" oninput="window.updateManualTestScorePreview && window.updateManualTestScorePreview()" style="width: 100%; box-sizing: border-box; height: 44px; text-align: center; font-size: 1.2rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(161,161,170,0.15); border-radius: 10px; color: #a1a1aa;" />
            </div>

            <!-- Total (auto-computed) -->
            <div style="background: #1a1b22; border: 1px solid rgba(124,58,237,0.2); border-radius: 14px; padding: 10px;">
              <label style="display: flex; align-items: center; gap: 4px; font-size: 0.74rem; font-weight: 800; color: #a78bfa; margin-bottom: 6px;">
                <span>📋</span> تعداد کل تست
              </label>
              <div id="manual-test-total-computed" style="width: 100%; height: 44px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(124,58,237,0.15); border-radius: 10px; color: #a78bfa;">
                ${k(I)}
              </div>
            </div>
          </div>

          <!-- Real-time Score Percentage Preview -->
          <div id="manual-score-preview" style="background: ${I>0?P>=50?"rgba(16,185,129,0.08)":"rgba(239,68,68,0.08)":"rgba(255,255,255,0.03)"}; border: 1px solid ${I>0?P>=50?"rgba(16,185,129,0.2)":"rgba(239,68,68,0.2)":"rgba(255,255,255,0.06)"}; border-radius: 12px; padding: 10px 14px; display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 1.1rem;">📊</span>
              <span style="font-size: 0.82rem; font-weight: 800; color: #e2e8f0;">درصد خالص کنکوری:</span>
            </div>
            <span id="manual-score-percentage-text" style="font-size: 1.1rem; font-weight: 900; font-family: 'Outfit', sans-serif; color: ${I>0?P>=50?"#34d399":"#f87171":"#71717a"};">
              ${j}
            </span>
          </div>

          ${I>0?`
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
  `}function Io(o){if(!o)return"";let e=String(o).trim();return e=e.replace(/[۰-۹]/g,t=>"۰۱۲۳۴۵۶۷۸۹".indexOf(t)),e=e.replace(/[٠-٩]/g,t=>"٠١٢٣٤٥٦٧٨٩".indexOf(t)),e=e.replace(/[^0-9]/g,""),e.startsWith("00989")?e="0"+e.slice(4):e.startsWith("0989")?e="0"+e.slice(3):e.startsWith("989")?e="0"+e.slice(2):e.startsWith("9")&&e.length===10&&(e="0"+e),e}function tn(o=null){const e=o||(()=>{try{return JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{return null}})(),t=localStorage.getItem("planex_user_avatar")||"",n=localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_leaderboard_nickname")||"",a=(()=>{try{return JSON.parse(localStorage.getItem("planex_user_profile")||"null")}catch{return null}})(),r=!!(e&&(e.phone||e.phone_number||e.telegram_id||e.id)),i=n||(a==null?void 0:a.name)||(a==null?void 0:a.nickname)||(e==null?void 0:e.full_name)||(e==null?void 0:e.name)||(e==null?void 0:e.first_name)||"کاربر پلنکس",s=(e==null?void 0:e.phone)||(e==null?void 0:e.phone_number)||"",d=t||(a==null?void 0:a.avatar)||(a==null?void 0:a.avatar_url)||(e==null?void 0:e.avatar_url)||(e==null?void 0:e.photo_url)||`https://api.dicebear.com/7.x/avataaars/svg?seed=${s||(e==null?void 0:e.username)||"planex"}`;return`
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

        ${r?`
          <!-- Logged In User State -->
          <div style="background: #0d0d12; border: 1px solid rgba(16, 185, 129, 0.3); padding: 22px 20px; border-radius: 22px; text-align: center; margin-bottom: 18px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);">
            <div style="position: relative; width: 78px; height: 78px; margin: 0 auto 12px;">
              <img src="${d}" 
                   style="width: 100%; height: 100%; border-radius: 50%; border: 2.5px solid #10b981; object-fit: cover;" 
                   onerror="this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=planex'" />
              <div style="position: absolute; bottom: 0; right: 0; width: 24px; height: 24px; border-radius: 50%; background: #10b981; border: 2px solid #0d0d12; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; color: #fff;">✓</div>
            </div>
            <h3 style="font-size: 1.12rem; color: #f8fafc; margin-bottom: 4px; font-weight: 800;">${i}</h3>
            ${s?`<div style="font-size: 0.82rem; color: #38bdf8; font-family: 'Outfit', monospace; margin-bottom: 6px;" dir="ltr">📱 ${s}</div>`:""}
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
  `}typeof window<"u"&&(window.toggleLoginPasswordVisibility=()=>{const o=document.getElementById("input-login-password"),e=document.getElementById("btn-toggle-login-pwd");o&&(o.type==="password"?(o.type="text",e&&(e.textContent="🙈")):(o.type="password",e&&(e.textContent="👁️")))},window.handlePhoneLoginSubmit=async()=>{var s,d,l,c,g;const o=document.getElementById("input-login-phone"),e=document.getElementById("input-login-password"),t=document.getElementById("login-modal-error-box"),n=document.getElementById("btn-submit-phone-login");t&&(t.style.display="none");const a=((s=o==null?void 0:o.value)==null?void 0:s.trim())||"",r=Io(a),i=((d=e==null?void 0:e.value)==null?void 0:d.trim())||"";if(!r||!i){t&&(t.textContent="لطفاً شماره موبایل و رمز عبور را وارد کنید.",t.style.display="block"),window.showToast&&window.showToast("لطفاً شماره موبایل و رمز عبور را وارد کنید.","warning");return}n&&(n.disabled=!0,n.innerHTML='<svg class="spin-sync" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> <span>در حال همگام‌سازی...</span>');try{let b=[];try{b=JSON.parse(localStorage.getItem("planex_study_logs")||"[]")}catch{}let f=[];try{f=JSON.parse(localStorage.getItem("planex_my_groups")||"[]")}catch{}const k=typeof window.personalSyncService<"u"&&typeof window.personalSyncService.exportLocalState=="function"?window.personalSyncService.exportLocalState():{};let u={};try{u=p&&typeof p.getUserProfile=="function"?p.getUserProfile():JSON.parse(localStorage.getItem("planex_user_profile")||"{}")}catch{u={}}(!u||typeof u!="object")&&(u={});const x=localStorage.getItem("planex_user_avatar")||u.avatar||u.avatar_url||u.photo||"";x&&k&&typeof k=="object"&&(k.planex_user_avatar=x);const y=await fetch(`${ue}/api/sync.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"login",phone:r,password:i,study_logs:b,rooms:f,backupData:k,name:u.name||u.nickname||"کاربر پلنکس",avatar:x,avatar_url:x,planex_user_avatar:x})}),h=await y.text();let _={};const m=y.headers.get("content-type")||"";try{m.includes("application/json")||h&&h.trim().startsWith("{")?_=JSON.parse(h):_={success:!1,message:"پاسخ سرور در دسترس نیست."}}catch{_={success:!1,message:"پاسخ دریافتی از سرور معتبر نیست."}}if(y.ok&&_.success&&_.user){_.backupData&&typeof window.personalSyncService<"u"&&typeof window.personalSyncService.importLocalState=="function"?window.personalSyncService.importLocalState(_.backupData):_.backupData&&window.db&&typeof window.db.importAllDataJSON=="function"&&window.db.importAllDataJSON(_.backupData);const w=_.user,T=w.id||w.telegram_id||w.uid||w.phone||r,A=((l=_.backupData)==null?void 0:l.planex_user_avatar)||(typeof((c=_.backupData)==null?void 0:c.planex_user_profile)=="object"?(g=_.backupData.planex_user_profile)==null?void 0:g.avatar:null),z=w.avatar_url||w.avatarUrl||w.photo_url||w.avatar,B=localStorage.getItem("planex_user_avatar");let D="";A&&!A.includes("dicebear.com")?D=A:z&&!z.includes("dicebear.com")?D=z:B&&!B.includes("dicebear.com")?D=B:D=z||B||`https://api.dicebear.com/7.x/avataaars/svg?seed=${r}`,D&&localStorage.setItem("planex_user_avatar",D);const I=w.name||w.full_name||"کاربر پلنکس",P={id:T,telegram_id:w.telegram_id||T,uid:T,user_id:T,phone:w.phone||r,phone_number:w.phone||r,name:I,full_name:I,avatar_url:D,avatarUrl:D,avatar:D,photo_url:D,auth_provider:"phone"};localStorage.setItem("planex_auth_user",JSON.stringify(P)),localStorage.setItem("planex_user_account",JSON.stringify(P)),I&&I!=="کاربر پلنکس"&&I!=="کاربر مهمان"&&(localStorage.setItem("planex_user_nickname",I),localStorage.setItem("planex_leaderboard_nickname",I)),Array.isArray(_.study_logs)&&_.study_logs.length>0?window.db&&typeof window.db.saveStudyLogs=="function"?window.db.saveStudyLogs(_.study_logs):(localStorage.setItem("planex_study_logs",JSON.stringify(_.study_logs)),localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(_.study_logs))):_.backupData&&Array.isArray(_.backupData.planex_recent_activity_sessions)&&_.backupData.planex_recent_activity_sessions.length>0&&(window.db&&typeof window.db.saveStudyLogs=="function"?window.db.saveStudyLogs(_.backupData.planex_recent_activity_sessions):localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(_.backupData.planex_recent_activity_sessions))),Array.isArray(_.rooms)&&_.rooms.length>0&&(localStorage.setItem("planex_my_groups",JSON.stringify(_.rooms)),localStorage.setItem("planex_my_rooms",JSON.stringify(_.rooms)),window.db&&typeof window.db.setUserGroups=="function"&&window.db.setUserGroups(_.rooms));try{const j=window.personalSyncService||ve;j&&typeof j.pullFromCloud=="function"&&await j.pullFromCloud(r)}catch(j){console.warn("[LoginModal] Error pulling from cloud post-login:",j)}try{const j=window.leaderboardService||$;j&&typeof j.fetchUserGroups=="function"?await j.fetchUserGroups(!0):typeof window.fetchUserGroups=="function"&&await window.fetchUserGroups()}catch(j){console.warn("[LoginModal] Error fetching user groups post-login:",j)}try{const j=window.db&&typeof window.db.getUserProfile=="function"?window.db.getUserProfile():JSON.parse(localStorage.getItem("planex_user_profile")||"{}");j.phone=r,I&&(j.name=I),D&&(j.avatar=D,j.avatar_url=D,j.photo=D,j.photoUrl=D),window.db&&typeof window.db.setUserProfile=="function"&&window.db.setUserProfile(j),localStorage.setItem("planex_user_profile",JSON.stringify(j))}catch{}if(window.db&&(window.db._breakdownMemoMap={}),typeof window.updateHeaderDOM=="function"&&window.updateHeaderDOM(),window.dispatchEvent(new CustomEvent("auth-changed",{detail:P})),window.dispatchEvent(new CustomEvent("profileUpdated")),window.dispatchEvent(new CustomEvent("study-logs-updated")),window.dispatchEvent(new CustomEvent("sessions-updated")),window.dispatchEvent(new CustomEvent("activity-saved",{detail:{sync:!0}})),window.closeActiveModal?window.closeActiveModal():window.appState&&(window.appState.activeModal=null),window.dashboardChartInstances&&(window.dashboardChartInstances=null),typeof window.updateCharts=="function")try{window.updateCharts()}catch{}typeof window.renderApp=="function"&&window.renderApp(),window.showToast&&window.showToast(`خوش آمدید ${w.name||"کاربر گرامی"}! ورود و همگام‌سازی با موفقیت انجام شد. 🎉`,"success",4e3)}else{const w=_.message||"شماره موبایل یا رمز عبور اشتباه است. در صورت فراموشی، به ربات @planex_sync_bot مراجعه کنید.";t&&(t.textContent=w,t.style.display="block"),window.showToast&&window.showToast(w,"error"),n&&(n.disabled=!1,n.innerHTML="<span>ورود به حساب و همگام‌سازی 🚀</span>")}}catch(b){console.error("[Phone Login Error]:",b);const f="خطا در برقراری ارتباط با سرور. لطفاً اتصال اینترنت خود را بررسی کنید.";t&&(t.textContent=f,t.style.display="block"),window.showToast&&window.showToast(f,"error"),n&&(n.disabled=!1,n.innerHTML="<span>ورود به حساب و همگام‌سازی 🚀</span>")}},window.handlePasswordLoginSubmit=window.handlePhoneLoginSubmit,window.handleEditProfile=()=>{try{if(typeof window.openEditProfileModal=="function"){window.openEditProfileModal();return}window.appState&&(window.appState.activeModal="editProfile",typeof window.renderApp=="function"&&window.renderApp())}catch(o){console.error("[LoginModal] handleEditProfile error:",o),window.appState&&(window.appState.activeModal="editProfile",typeof window.renderApp=="function"&&window.renderApp())}},window.openEditProfileModal=window.openEditProfileModal||window.handleEditProfile,window.handleUserLogout=()=>{try{["planex_auth_user","planex_user_account","planex_user_profile","planex_user_nickname","planex_user_avatar","planex_leaderboard_nickname","planex_my_groups","planex_my_rooms","planex_user_groups","my_rooms","planex_active_group_code","planex_active_room_code","planex_sync_token","planex_sync_token_secret"].forEach(t=>{try{localStorage.removeItem(t)}catch{}});const e=window.db||p;e&&(typeof e.setUserGroups=="function"&&e.setUserGroups([]),typeof e.setUserProfile=="function"&&e.setUserProfile({name:"کاربر مهمان",avatar:"",phone:""})),window.appState&&(window.appState.currentUser=null,window.appState.user=null,window.appState.userGroups=[],window.appState.activeModal=null),typeof window.closeActiveModal=="function"&&window.closeActiveModal(),window.dispatchEvent(new CustomEvent("auth-changed",{detail:null})),window.dispatchEvent(new CustomEvent("profileUpdated")),window.dispatchEvent(new CustomEvent("groups-changed")),window.dispatchEvent(new CustomEvent("groups-updated")),typeof window.renderApp=="function"&&window.renderApp(),typeof window.showToast=="function"&&window.showToast("با موفقیت از حساب کاربری خارج شدید.","info")}catch(o){console.error("[LoginModal] Logout error:",o),typeof window.closeActiveModal=="function"&&window.closeActiveModal(),typeof window.renderApp=="function"&&window.renderApp()}},window.handleAccountLogout=window.handleUserLogout,window.triggerManualCloudSync=async()=>{const o=document.getElementById("btn-manual-account-sync"),e=o?o.innerHTML:"";o&&(o.disabled=!0,o.innerHTML='<svg class="spin-sync" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> <span>در حال همگام‌سازی...</span>'),typeof window.showToast=="function"&&window.showToast("در حال همگام‌سازی با فضای ابری...","info",2e3);try{const t=window.personalSyncService||ve;t&&typeof t.pushToCloud=="function"?await t.pushToCloud():typeof window.triggerAutoSync=="function"&&await window.triggerAutoSync(!0),t&&typeof t.pullFromCloud=="function"&&await t.pullFromCloud();const n=window.leaderboardService||$;try{n&&typeof n.fetchUserGroups=="function"?await n.fetchUserGroups(!0):typeof window.fetchUserGroups=="function"&&await window.fetchUserGroups()}catch(a){console.warn("[LoginModal] Groups refresh during sync:",a)}try{n&&typeof n.syncUserScore=="function"&&await n.syncUserScore(!0)}catch(a){console.warn("[LoginModal] Score sync during sync:",a)}typeof window.showToast=="function"&&window.showToast("همگامسازی با موفقیت انجام شد 🎉","success",3500)}catch(t){console.error("[LoginModal] Manual cloud sync error:",t),typeof window.showToast=="function"&&window.showToast("خطا در همگام‌سازی ابری اطلاعات. لطفاً اینترنت خود را بررسی کنید.","error",3500)}finally{o&&(o.disabled=!1,o.innerHTML=e||"<span>☁️</span><span>همگام‌سازی ابری آنی</span>"),typeof window.renderApp=="function"&&window.renderApp()}},window.handleManualAccountSync=window.triggerManualCloudSync,typeof document<"u"&&!window._loginModalDelegationBound&&(window._loginModalDelegationBound=!0,document.addEventListener("click",o=>{if(o.target&&o.target.closest&&o.target.closest("#btn-submit-phone-login, .btn-submit-phone-login")){o.preventDefault(),o.stopPropagation(),typeof window.handlePhoneLoginSubmit=="function"&&window.handlePhoneLoginSubmit();return}if(o.target&&o.target.closest&&o.target.closest("#btn-open-edit-profile-modal, .btn-open-edit-profile-modal")){o.preventDefault(),o.stopPropagation(),typeof window.handleEditProfile=="function"&&window.handleEditProfile();return}if(o.target&&o.target.closest&&o.target.closest("#btn-manual-account-sync, .btn-manual-account-sync")){o.preventDefault(),o.stopPropagation(),typeof window.triggerManualCloudSync=="function"&&window.triggerManualCloudSync();return}if(o.target&&o.target.closest&&o.target.closest("#btn-user-logout, .btn-user-logout")){o.preventDefault(),o.stopPropagation(),typeof window.handleUserLogout=="function"&&window.handleUserLogout();return}},!0)));function zo(o=!1){try{typeof localStorage<"u"&&localStorage.setItem("pwa_prompt_dismissed","true")}catch(e){console.error("Error saving pwa_prompt_dismissed to localStorage:",e)}if(o&&typeof window<"u"&&(window.deferredPrompt||window.deferredPwaPrompt))try{typeof window.triggerPwaInstall=="function"&&window.triggerPwaInstall()}catch{}typeof window<"u"&&(window.appState&&(window.appState.activeModal=null),typeof window.closeActiveModal=="function"?window.closeActiveModal():typeof window.renderApp=="function"&&window.renderApp())}typeof window<"u"&&(window.dismissPwaModal=zo);function on(){if(typeof localStorage<"u"&&localStorage.getItem("pwa_prompt_dismissed"))return typeof window<"u"&&window.appState&&window.appState.activeModal==="pwaInstall"&&(window.appState.activeModal=null),"";const o=typeof navigator<"u"&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,e=typeof window<"u"&&!!(window.deferredPrompt||window.deferredPwaPrompt);return`
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
  `}function nn(o=1,e={}){const t=[{value:"کنکوری ۱۴۰۵",label:"🎯 کنکوری ۱۴۰۵",desc:"آماده‌سازی برای کنکور سراسری"},{value:"کنکوری ۱۴۰۶",label:"🎯 کنکوری ۱۴۰۶",desc:"آماده‌سازی برای کنکور سراسری"},{value:"کنکوری ۱۴۰۷",label:"🎯 کنکوری ۱۴۰۷",desc:"آماده‌سازی برای کنکور سراسری"},{value:"دوازدهم",label:"📚 پایه دوازدهم",desc:"مدرسه و نهایی"},{value:"یازدهم",label:"📖 پایه یازدهم",desc:"مدرسه و کنکوری"},{value:"دهم",label:"📗 پایه دهم",desc:"مدرسه و تقویت پایه"},{value:"دانشجو",label:"🎓 دانشجوی دانشگاه",desc:"دانشگاهی و آزمون‌های ارشد/دکترا"},{value:"سایر",label:"🌟 سایر / مطالعه آزاد",desc:"یادگیری مهارت و برنامه‌ریزی شخصی"}],n=[{value:"علوم تجربی",label:"🧬 علوم تجربی"},{value:"ریاضی فیزیک",label:"📐 ریاضی و فیزیک"},{value:"علوم انسانی",label:"⚖️ علوم انسانی"},{value:"پزشکی و علوم پزشکی",label:"🩺 پزشکی / پیراپزشکی"},{value:"مهندسی و کامپیوتر",label:"💻 مهندسی و کامپیوتر"},{value:"هنر و معماری",label:"🎨 هنر و معماری"},{value:"زبان‌های خارجی",label:"🌐 زبان‌های خارجی"},{value:"سایر",label:"✨ سایر رشته‌ها"}];return`
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
  `}function an(o){if(!o)return"";const{full_name:e,avatar_url:t,created_at:n,total_focus_minutes:a,routines:r,username:i,field_of_study:s}=o,d=new Date(n).toLocaleDateString("fa-IR",{year:"numeric",month:"long"}),l=Math.floor((a||0)/60),c=e||i||"کاربر پلنکس",g=i?`@${i}`:"",b=s?`<div style="font-size: 0.75rem; color: #a855f7; background: rgba(168,85,247,0.15); padding: 3px 10px; border-radius: 12px; display: inline-block; margin-top: 6px; font-weight: 500;">🎓 ${s}</div>`:"";let f=null;if(o.social_links)try{f=typeof o.social_links=="string"?JSON.parse(o.social_links):o.social_links}catch{}const k=f?`
    <div style="display: flex; gap: 12px; justify-content: center; margin-top: 12px;">
      ${f.telegram?`<a href="https://t.me/${f.telegram.replace("@","")}" target="_blank" style="text-decoration: none; font-size: 1.3rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" title="تلگرام">✈️</a>`:""}
      ${f.instagram?`<a href="https://instagram.com/${f.instagram.replace("@","")}" target="_blank" style="text-decoration: none; font-size: 1.3rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" title="اینستاگرام">📸</a>`:""}
      ${f.linkedin?`<a href="${f.linkedin.startsWith("http")?f.linkedin:"https://"+f.linkedin}" target="_blank" style="text-decoration: none; font-size: 1.3rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" title="لینکدین / گیت‌هاب">💼</a>`:""}
      ${f.website?`<a href="${f.website.startsWith("http")?f.website:"https://"+f.website}" target="_blank" style="text-decoration: none; font-size: 1.3rem; transition: transform 0.2s;" onmouseover="this.style.transform='scale(1.2)'" onmouseout="this.style.transform='scale(1)'" title="وب‌سایت">🌐</a>`:""}
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
          ${g?`<div style="font-size: 0.9rem; color: rgba(255,255,255,0.5); margin-bottom: 5px;">${g}</div>`:""}
          ${b}
          <div style="font-size: 0.8rem; color: rgba(255,255,255,0.7); margin-top: 6px;">عضویت از: ${d}</div>
          ${k}
        </div>

        <!-- Stats -->
        <div style="display: flex; border-bottom: 1px solid rgba(255,255,255,0.05); background: rgba(0,0,0,0.2);">
          <div style="flex: 1; text-align: center; padding: 15px;">
            <div style="font-size: 1.2rem; color: #10b981; font-weight: bold; margin-bottom: 4px;">${l}h</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary);">کل ساعت تمرکز</div>
          </div>
          <div style="width: 1px; background: rgba(255,255,255,0.05);"></div>
          <div style="flex: 1; text-align: center; padding: 15px;">
            <div style="font-size: 1.2rem; color: #3b82f6; font-weight: bold; margin-bottom: 4px;">${r?r.length:0}</div>
            <div style="font-size: 0.75rem; color: var(--text-secondary);">روتین عمومی</div>
          </div>
        </div>

        <!-- Routines List -->
        <div style="padding: 20px; max-height: 400px; overflow-y: auto;">
          <h3 style="font-size: 1rem; color: white; margin-bottom: 15px; display: flex; align-items: center; gap: 8px;">
            📋 روتین‌های به اشتراک‌گذاشته‌شده
          </h3>
          
          ${!r||r.length===0?'<div style="text-align: center; color: var(--text-secondary); padding: 20px 0; font-size: 0.9rem;">این کاربر هنوز روتین عمومی نساخته است.</div>':r.map(u=>`
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
                      ${u.items.map(x=>`
                        <li>${x.title} <span style="color: #10b981;">(${x.duration_minutes||0} دقیقه)</span></li>
                      `).join("")}
                    </ul>`:'<div style="font-size: 0.75rem; color: rgba(255,255,255,0.3);">بدون آیتم</div>'}
                </div>
              </div>
            `).join("")}
        </div>
      </div>
    </div>
  `}function rn(o,e){const t=p.getCurrentWeek(),n=t?t.id:1,a=p.getHourlyLogs(n),r=`${o}_${e}`,i=a[r]||{},s=p.getCategories(),d={};s.forEach(u=>{d[u.code]=u});const l=p.getCustomSubjects(),c=["زیست‌شناسی","ریاضیات","فیزیک","شیمی","ادبیات","زبان انگلیسی","دین و زندگی","زمین‌شناسی"],g=Array.from(new Set([...c,...l])),b=["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه"],f=d[i.categoryCode],k=f?Ee(f):!0;return`
    <div class="modal-overlay" id="modal-slot-picker" style="backdrop-filter: blur(16px);">
      <div class="modal-card" style="max-width: 580px; max-height: 90vh; overflow-y: auto; background: rgba(15, 23, 42, 0.95); border-color: rgba(99, 102, 241, 0.4);">
        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px;">
          <div>
            <div class="modal-title" style="color: var(--primary-accent); display: flex; align-items: center; gap: 8px;">
              ⏱️ تخصیص فعالیت: پارت ${e+1} (${go(e)})
            </div>
            <span style="font-size: 0.8rem; color: var(--text-secondary);">${b[o]} - انتخاب فعالیت نیم ساعته</span>
          </div>
          <button class="btn-close" id="btn-close-slot-modal">✕</button>
        </div>

        <!-- 1. Category Picker Grid -->
        <label class="input-label" style="margin-top: 12px; margin-bottom: 8px; display: block; font-weight: bold; color: white;">
          ۱. انتخاب دسته‌بندی فعالیت:
        </label>
        <div class="category-picker-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-bottom: 16px;">
          ${s.map(u=>`
            <button class="cat-pick-btn ${i.categoryCode===u.code?"selected":""}" data-code="${u.code}" data-group="${u.group}" style="display: flex; align-items: center; gap: 8px; padding: 10px 12px; border-radius: 12px; background: rgba(255,255,255,0.05); border: 1.5px solid ${i.categoryCode===u.code?u.color:"rgba(255,255,255,0.1)"}; border-right: 4px solid ${u.color}; cursor: pointer; text-align: right; color: white;">
              <span style="width: 10px; height: 10px; border-radius: 50%; background: ${u.color}; box-shadow: 0 0 6px ${u.color}80; flex-shrink: 0;"></span>
              <span style="font-size: 1.2rem;">${u.icon||"📌"}</span>
              <div style="flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                <div style="font-size: 0.85rem; font-weight: bold; color: ${u.color};">${u.title}</div>
                <div style="font-size: 0.7rem; color: var(--text-secondary);">${u.group} (${u.code})</div>
              </div>
            </button>
          `).join("")}
          <button class="cat-pick-btn ${i.categoryCode==="-"?"selected":""}" data-code="-" data-group="خالی" style="grid-column: span 2; padding: 10px; border-radius: 12px; background: rgba(239,68,68,0.1); border: 1.5px solid rgba(239,68,68,0.3); color: #fca5a5; cursor: pointer; text-align: center; font-size: 0.85rem;">
            🚫 پاک کردن پارت (خالی)
          </button>
        </div>

        <!-- 2. Academic Study Specific Fields (Visible ONLY when Study/Academic Category selected) -->
        <div id="academic-fields-wrapper" style="display: ${k?"block":"none"}; background: rgba(255,255,255,0.03); border: 1px solid rgba(56, 189, 248, 0.3); padding: 14px; border-radius: 16px; margin-bottom: 14px;">
          <div style="font-weight: bold; font-size: 0.9rem; color: #38bdf8; margin-bottom: 12px; display: flex; align-items: center; gap: 6px;">
            📚 جزئیات درس، تست و روش مطالعه (مخصوص فعالیت علمی):
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 10px;">
            <div>
              <label class="input-label" style="margin-bottom: 4px; display: block; color: white;">نام درس (Subject):</label>
              <select id="slot-subject-select" class="form-input" style="width: 100%;">
                <option value="">-- انتخاب درس --</option>
                ${g.map(u=>`
                  <option value="${u}" ${i.subject===u?"selected":""}>${u}</option>
                `).join("")}
              </select>
            </div>

            <div>
              <label class="input-label" style="margin-bottom: 4px; display: block; color: white;">تعداد تست حل‌شده:</label>
              <input type="number" id="slot-test-count-input" class="form-input" style="width: 100%; text-align: center; font-family: 'Outfit';" value="${i.testCount||""}" placeholder="مثلا ۲۰" min="0" />
            </div>
          </div>

          <div style="margin-bottom: 10px;">
            <label class="input-label" style="margin-bottom: 4px; display: block; color: white;">روش مطالعه / نوع کار:</label>
            <div style="display: flex; gap: 8px;">
              ${["تستی 📝","تشریحی 📖","ترکیبی 🔄","مرور 🔁"].map(u=>`
                <button class="btn-slot-method ${i.studyMethod===u?"active btn-primary":"glass-panel"}" data-method="${u}" style="flex: 1; padding: 6px 4px; font-size: 0.75rem; border: none; cursor: pointer;">
                  ${u}
                </button>
              `).join("")}
            </div>
          </div>
        </div>

        <!-- 3. Short Note & Description -->
        <div class="input-group" style="margin-bottom: 10px;">
          <label class="input-label" style="color: white; font-weight: bold;">توضیحات و مبحث این پارت (Description):</label>
          <input type="text" id="slot-desc-input" class="form-input" value="${i.description||i.note||""}" placeholder="مثلا: فصل ۲ گفتار ۳ - مبحث گوارش و جذب مواد" />
        </div>

        <!-- 4. Performance Rating (1 to 5 Stars) -->
        <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,0.03); padding: 10px 14px; border-radius: 12px; margin-bottom: 16px;">
          <span style="font-size: 0.85rem; color: var(--text-secondary); font-weight: bold;">کیفیت و بازدهی پارت:</span>
          <div id="slot-rating-wrapper" data-rating="${i.rating||3}" style="display: flex; gap: 6px; font-size: 1.3rem;">
            ${[1,2,3,4,5].map(u=>`
              <span class="star-rating-btn" data-star="${u}" style="cursor: pointer; opacity: ${(i.rating||3)>=u?"1":"0.3"};">⭐</span>
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
  `}function sn(){const o=p.getCurrentWeek(),e=i=>String(i).replace(/[0-9]/g,s=>"۰۱۲۳۴۵۶۷۸۹"[s]),t=[1404,1405,1406,1407],n=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],a=window.pickerViewYear||o.year,r=window.pickerViewMonthIdx||o.monthIdx;return`
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
            ${t.map(i=>`
              <button class="btn-picker-year btn-header-action ${a===i?"btn-primary":""}" data-year="${i}" style="flex: 1; padding: 8px; font-size: 0.9rem; font-weight: bold; border-radius: 12px;">
                ${e(i)}
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
            ${n.map((i,s)=>{const d=s+1;return`
                <button class="btn-picker-month btn-header-action ${r===d?"btn-primary":""}" data-month="${d}" style="padding: 8px 4px; font-size: 0.82rem; font-weight: bold; border-radius: 10px; text-align: center;">
                  ${i}
                </button>
              `}).join("")}
          </div>
        </div>

        <!-- 3. Week Selector for Selected Month -->
        <div style="margin-bottom: 20px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 14px;">
          <label style="font-size: 0.85rem; font-weight: bold; color: #38bdf8; display: block; margin-bottom: 10px;">
            ۳. انتخاب هفته در ${n[r-1]} ${e(a)}:
          </label>

          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${Array.from({length:p.getWeeksInMonth(a,r)},(i,s)=>s+1).map(i=>{const s=`${a}_${r}_${i}`,d=p.getWeekObject(a,r,i),l=o.id===s,c=p.hasDataForWeek(s);return`
                <div style="display: flex; align-items: center; justify-content: space-between; background: ${l?"rgba(99,102,241,0.25)":"rgba(255,255,255,0.04)"}; border: 1.5px solid ${l?"#6366f1":"rgba(255,255,255,0.08)"}; border-radius: 14px; padding: 10px 14px;">
                  <div>
                    <strong style="font-size: 0.92rem; display: block; color: ${l?"#38bdf8":"white"};">
                      ${d.weekNumber} (${d.dateRange})
                    </strong>
                    <span style="font-size: 0.78rem; color: var(--text-secondary);">
                      ${d.status==="future"?"⏳ هنوز شروع نشده است":c?"✅ دارای فعالیت ثبت‌شده":"📌 بدون فعالیت ثبت‌شده"}
                    </span>
                  </div>

                  <button class="btn-select-week-key btn-primary" data-key="${s}" style="font-size: 0.82rem; padding: 6px 14px; background: ${l?"#10b981":"var(--primary-accent)"};">
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
  `}window.handleEditRoomAnnouncement||(window.handleEditRoomAnnouncement=o=>{var n,a;const e=localStorage.getItem("planex_room_announcement_"+o)||((a=(n=window.appState)==null?void 0:n.currentRoom)==null?void 0:a.announcement)||"",t=prompt("📢 پیام مدیریت / متن انگیزشی سالن مطالعه را وارد نمایید:",e);if(t!==null){const r=t.trim();localStorage.setItem("planex_room_announcement_"+o,r),window.appState&&window.appState.currentRoom&&(window.appState.currentRoom.announcement=r),typeof window.renderApp=="function"&&window.renderApp()}});window.handleJoinRoomClick||(window.handleJoinRoomClick=(o,e)=>{const t=p&&typeof p.getProfile=="function"?p.getProfile():{};if((!t.major||!t.target)&&window.appState){window.appState.pendingJoinRoom={id:o,name:e},window.appState.activeModal="joinRoomOnboarding",typeof window.renderApp=="function"&&window.renderApp();return}let n=[];try{n=JSON.parse(localStorage.getItem("planex_my_groups")||"[]")}catch{n=[]}n.some(s=>String(s.id)===String(o))||(n.push({id:o,name:e,emoji:"👥"}),localStorage.setItem("planex_my_groups",JSON.stringify(n)));const a=JSON.parse(localStorage.getItem("planex_user_account")||"{}"),r=a.id||"me_"+Date.now();window.appState&&Array.isArray(window.appState.studyRoomParticipants)&&(window.appState.studyRoomParticipants.some(d=>String(d.id)===String(r))||window.appState.studyRoomParticipants.unshift({id:r,name:t.name||a.full_name||"شما (عضو فعال)",avatar:a.avatar_url||"",gender:t.gender||"پسر",major:t.major||t.field_of_study||"تجربی",target:t.target||t.goal||"کسب رتبه برتر",status:"active",is_studying:!0,focus_minutes:0,today_study_time:0,last_2h_study:120,last_2h_subject:"آماده مطالعه"}));const i=localStorage.getItem("planex_jwt_token");i&&i!=="undefined"&&i!=="null"&&fetch(`${ue}/api/rooms/join.php`,{method:"POST",headers:{Authorization:`Bearer ${i}`,"Content-Type":"application/json"},body:JSON.stringify({roomId:o,room_id:o})}).catch(s=>console.warn("Room join API sync:",s)),alert(`👥 شما با موفقیت عضو سالن "${e}" شدید!`),typeof window.renderApp=="function"&&window.renderApp()});window.handleLeaveRoomClick||(window.handleLeaveRoomClick=(o,e)=>{let t=[];try{t=JSON.parse(localStorage.getItem("planex_my_groups")||"[]")}catch{t=[]}t=t.filter(i=>String(i.id)!==String(o)),localStorage.setItem("planex_my_groups",JSON.stringify(t));const a=JSON.parse(localStorage.getItem("planex_user_account")||"{}").id;window.appState&&Array.isArray(window.appState.studyRoomParticipants)&&(window.appState.studyRoomParticipants=window.appState.studyRoomParticipants.filter(i=>String(i.id)!==String(a)));const r=localStorage.getItem("planex_jwt_token");r&&r!=="undefined"&&r!=="null"&&fetch(`${ue}/api/rooms/leave.php`,{method:"POST",headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"},body:JSON.stringify({roomId:o,room_id:o})}).catch(i=>console.warn("Room leave API sync:",i)),alert(`🚪 شما از سالن "${e}" خارج شدید.`),typeof window.renderApp=="function"&&window.renderApp()});function dn(o,e,t=[],n=!1,a=null,r=null){var u,x;let i=Array.isArray(t)?[...t]:[],s=e;try{const h=JSON.parse(localStorage.getItem("planex_public_rooms")||"[]").find(w=>String(w.id)===String(o)||String(w.code)===String(o));h&&(h.name||h.title||h.roomName)&&(s=h.name||h.title||h.roomName);const m=JSON.parse(localStorage.getItem("planex_my_groups")||"[]").find(w=>String(w.id)===String(o)||String(w.code)===String(o));m&&(m.name||m.title||m.roomName)&&(s=m.name||m.title||m.roomName)}catch{}if((!s||s===o)&&(s=o?`سالن ${o}`:"سالن مطالعه پلن ما"),i.length===0)try{const y=JSON.parse(localStorage.getItem("planex_cached_room_"+o)||"[]");Array.isArray(y)&&y.length>0&&(i=y)}catch{}const d=JSON.parse(localStorage.getItem("planex_user_account")||"{}"),l=p&&typeof p.getProfile=="function"?p.getProfile():JSON.parse(localStorage.getItem("planex_profile")||"{}"),c=r||d.id||"me";i.findIndex(y=>String(y.id)===String(c)||y.id==="me")===-1&&i.unshift({id:c,name:l.name||d.full_name||"شما (عضو فعال)",avatar:d.avatar_url||"",gender:l.gender||"پسر",major:l.major||l.field_of_study||"تجربی",target:l.target||l.goal||"کسب رتبه برتر",status:"active",is_studying:!0,focus_minutes:0,today_study_time:0,last_2h_study:120,last_2h_subject:"مطالعه عمومی"}),i.length<4&&[{id:"p_1",name:"علی محمدی",major:"تجربی",target:"پزشکی تهران",gender:"پسر",role:"member",status:"active",today_study_time:360,today_test_count:140,last_2h_subject:"زیست‌شناسی"},{id:"p_2",name:"سارا احمدی",major:"ریاضی",target:"مهندسی شریف",gender:"دختر",role:"admin",status:"active",today_study_time:420,today_test_count:180,last_2h_subject:"حسابان"},{id:"p_3",name:"امیر کاظمی",major:"تجربی",target:"دندانپزشکی",gender:"پسر",role:"member",status:"active",today_study_time:270,today_test_count:90,last_2h_subject:"شیمی پایه"},{id:"p_4",name:"مریم حسینی",major:"انسانی",target:"حقوق تهران",gender:"دختر",role:"member",status:"active",today_study_time:310,today_test_count:110,last_2h_subject:"فلسفه و منطق"}].forEach(h=>{i.some(_=>String(_.id)===String(h.id))||i.push(h)});let b="";try{b=localStorage.getItem("planex_room_announcement_"+o)||((x=(u=window.appState)==null?void 0:u.currentRoom)==null?void 0:x.announcement)||""}catch{}let f=[];try{f=JSON.parse(localStorage.getItem("planex_my_groups")||"[]")}catch{f=[]}const k=f.some(y=>String(y.id)===String(o));return`
    <div class="modal-overlay" style="display: flex; backdrop-filter: blur(20px);" onclick="if(event.target === this || event.target.classList.contains('modal-overlay')){ window.closeActiveModal(); }">
      <div class="modal-content" onclick="event.stopPropagation();" style="max-width: 580px; padding: 22px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 24px; text-align: right; direction: rtl;">
        
        <!-- Group Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 12px;">
          <div>
            <h2 style="margin: 0; color: #f8fafc; font-size: 1.15rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
              <span>👥</span>
              <span>${s}</span>
            </h2>
            <span style="font-size: 0.72rem; color: #8e8e9c; margin-top: 2px; display: block;">سالن مطالعه گروهی و پایش زنده عملکرد داوطلبان</span>
          </div>
          <button type="button" id="btn-close-study-room" aria-label="بستن" onclick="window.closeActiveModal();" class="btn-close">✕</button>
        </div>

        <!-- 📢 Admin Motivational Announcement Banner (Feature 4) -->
        ${b?`
          <div style="background: rgba(124, 58, 237, 0.08); border: 1px solid rgba(124, 58, 237, 0.25); border-radius: 16px; padding: 12px 14px; margin-bottom: 14px; display: flex; align-items: flex-start; justify-content: space-between; gap: 10px;">
            <div style="display: flex; align-items: flex-start; gap: 8px; flex: 1;">
              <span style="font-size: 1.2rem; line-height: 1;">📌</span>
              <div>
                <div style="font-size: 0.74rem; font-weight: 800; color: #c4b5fd; margin-bottom: 3px;">پیام مدیریت سالن / متن انگیزشی:</div>
                <div style="font-size: 0.8rem; color: #f1f5f9; line-height: 1.5; font-weight: 500;">${b}</div>
              </div>
            </div>
            ${n||k?`
              <button type="button" onclick="event.stopPropagation(); window.handleEditRoomAnnouncement('${o}')" title="ویرایش پیام مدیر" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); color: #c4b5fd; padding: 4px 8px; border-radius: 8px; font-size: 0.68rem; font-weight: 700; cursor: pointer; white-space: nowrap; flex-shrink: 0;">
                ✏️ ویرایش
              </button>
            `:""}
          </div>
        `:n||k?`
          <div style="margin-bottom: 14px; display: flex; justify-content: flex-end;">
            <button type="button" onclick="event.stopPropagation(); window.handleEditRoomAnnouncement('${o}')" style="background: rgba(255,255,255,0.03); border: 1px dashed rgba(124,58,237,0.3); color: #c4b5fd; padding: 6px 12px; border-radius: 10px; font-size: 0.72rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 4px;">
              <span>📢</span>
              <span>ثبت پیام انگیزشی / اطلاعیه مدیر</span>
            </button>
          </div>
        `:""}

        <!-- Join & Leave Group Action Button -->
        <div style="margin-bottom: 14px;">
          ${k?`
            <button type="button" onclick="event.stopPropagation(); window.handleLeaveRoomClick('${o}', '${s}')" class="btn-primary" style="width: 100%; padding: 12px; font-size: 0.92rem; font-weight: 800; background: #ef4444; border: none; border-radius: 14px; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
              <span>🚪 ترک سالن (خروج از لیست اعضا)</span>
            </button>
          `:`
            <button type="button" onclick="event.stopPropagation(); window.handleJoinRoomClick('${o}', '${s}')" class="btn-primary" style="width: 100%; padding: 12px; font-size: 0.95rem; font-weight: 800; background: #7c3aed; border: none; border-radius: 14px; color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px;">
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
            <span>📋 اعضای حاضر در سالن (${i.length} عضو)</span>
          </h3>
          <span style="font-size: 0.7rem; color: #10b981; font-weight: 700; background: rgba(16,185,129,0.1); padding: 2px 8px; border-radius: 8px;">🟢 بروزرسانی زنده</span>
        </div>

        <!-- Scrollable Member List Container with Major & Goal -->
        <div id="room-members-list" style="max-height: 280px; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; padding-left: 2px;">
          ${i.map(y=>{const h=String(y.id)===String(c)||y.id==="me",_=y.gender==="دختر"||y.gender==="female"?"👧":"👦",m=String(y.id)===String(a)||y.role==="owner"?"👑 مالک":y.role==="admin"?"⭐ مدیر":"👤 عضو",w=y.major||y.field_of_study||h&&(l.major||l.field_of_study)||"عمومی",T=y.target||y.goal||h&&(l.target||l.goal)||"موفقیت";let A=y.today_study_time||y.focus_minutes||0,z=y.today_test_count||y.tests||0,B=y.last_2h_subject||y.current_subject||y.subject||"مطالعه عمومی";if(h){const D=(new Date().getDay()+1)%7,I=typeof p<"u"&&p.getCurrentWeek?p.getCurrentWeek():null,P=I?I.id:1,j=typeof p<"u"&&p.getHourlyLogs?p.getHourlyLogs(P):{},C=typeof p<"u"&&p.getRecordedTimerToday?p.getRecordedTimerToday():{minutes:0,tests:0};let J=0,W=0,G="مطالعه عمومی";for(let K=0;K<48;K++){const q=j[`${D}_${K}`];q&&q.categoryCode&&(["ع-س","ع-ک","ع-م","ع-غ","د-خ"].includes(q.categoryCode)&&J++,q.testCount&&(W+=parseInt(q.testCount)||0),q.subject&&(G=q.subject))}A=J*30+(Number(C.minutes)||0),z=W+(C.tests||0),B=G}return`
            <div id="user-card-${y.id}" style="padding: 10px 12px; background: #1f2029; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
              <div style="display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0;">
                <div style="position: relative; flex-shrink: 0;">
                  <div style="width: 40px; height: 40px; border-radius: 50%; background: #16171d; border: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
                    ${_}
                  </div>
                  <span style="position: absolute; bottom: 0; right: 0; width: 10px; height: 10px; background: #10b981; border: 2px solid #1f2029; border-radius: 50%;"></span>
                </div>

                <div style="min-width: 0; flex: 1;">
                  <div style="color: white; font-size: 0.84rem; font-weight: 800; display: flex; align-items: center; gap: 6px; margin-bottom: 2px; flex-wrap: wrap;">
                    <span style="color: #10b981; font-size: 0.6rem;">●</span>
                    <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${y.name||"کاربر پلنکس"}</span>
                    <span style="font-size: 0.62rem; background: #16171d; border: 1px solid rgba(255,255,255,0.06); padding: 1px 6px; border-radius: 8px; color: #a1a1aa;">${m}</span>
                    <span style="font-size: 0.62rem; background: rgba(56,189,248,0.1); color: #38bdf8; border: 1px solid rgba(56,189,248,0.25); padding: 1px 6px; border-radius: 8px; font-weight: 700;">${w}</span>
                  </div>

                  <!-- Goal / Target line (Feature 3) -->
                  <div style="font-size: 0.68rem; color: #fbbf24; margin-bottom: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    🎯 <span style="opacity: 0.9;">${T}</span>
                  </div>

                  <!-- Study Stats line -->
                  <div style="display: flex; flex-wrap: wrap; gap: 8px; font-size: 0.7rem; color: #8e8e9c;">
                    <span style="color: #e4e4e7; font-weight: 700;">⏱️ ${be(A)}</span>
                    <span style="color: #a1a1aa; font-weight: 700;">🎯 ${z} تست</span>
                    <span style="color: #94a3b8;">📚 ${B}</span>
                  </div>
                </div>
              </div>

              ${n&&!h?`
                <div style="display: flex; gap: 4px; flex-shrink: 0;">
                  <button onclick="window.promoteGroupAdmin('${o}', '${y.id}')" style="padding: 3px 6px; font-size: 0.7rem; color: #a1a1aa; border: 1px solid rgba(255,255,255,0.08); background: #16171d; border-radius: 6px; cursor: pointer;" title="ارتقا به مدیر">⭐</button>
                  <button onclick="window.kickGroupMember('${o}', '${y.id}')" style="padding: 3px 6px; font-size: 0.7rem; color: #ef4444; border: 1px solid rgba(239,68,68,0.3); background: #16171d; border-radius: 6px; cursor: pointer;" title="حذف عضو">✕</button>
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
  `}function ln(o="create"){const e=o==="join";return`
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
  `}window.closeJoinRoomOnboardingModal||(window.closeJoinRoomOnboardingModal=()=>{const o=typeof state<"u"&&state?state:window.appState;o&&(o.pendingJoinRoom=null,o.activeModal=null),window.appState&&(window.appState.pendingJoinRoom=null,window.appState.activeModal=null),typeof renderApp=="function"?renderApp():typeof window.renderApp=="function"&&window.renderApp()});window.handleSubmitJoinRoomOnboarding||(window.handleSubmitJoinRoomOnboarding=(o,e)=>{var s,d,l,c,g;const t=(d=(s=document.getElementById("input-onboarding-nickname"))==null?void 0:s.value)==null?void 0:d.trim(),n=(l=document.getElementById("input-onboarding-major"))==null?void 0:l.value,a=(g=(c=document.getElementById("input-onboarding-target"))==null?void 0:c.value)==null?void 0:g.trim();if(!t){alert("لطفاً نام یا نام مستعار خود را وارد کنید.");return}let r={};try{r=p&&typeof p.getProfile=="function"?p.getProfile():JSON.parse(localStorage.getItem("planex_user_profile")||"{}")}catch{r={}}r.name=t,r.nickname=t,r.major=n,r.field_of_study=n,r.target=a,r.goal=a,p&&typeof p.setProfile=="function"&&p.setProfile(r),localStorage.setItem("planex_user_profile",JSON.stringify(r));try{const b=JSON.parse(localStorage.getItem("planex_user_account")||"{}");b.full_name=t,localStorage.setItem("planex_user_account",JSON.stringify(b))}catch{}const i=typeof state<"u"&&state?state:window.appState;i&&(i.pendingJoinRoom=null,i.activeModal=null),window.appState&&(window.appState.pendingJoinRoom=null,window.appState.activeModal=null),o&&String(o).startsWith("PLX-")&&typeof window.handleJoinGroupSubmit=="function"?window.handleJoinGroupSubmit(o):typeof window.handleJoinRoomClick=="function"?window.handleJoinRoomClick(o,e):typeof window.joinStudyRoom=="function"?window.joinStudyRoom(o,e):typeof window.renderApp=="function"&&window.renderApp()});function cn(o=null){const e=p&&typeof p.getProfile=="function"?p.getProfile():{},t=JSON.parse(localStorage.getItem("planex_user_account")||"{}"),n=e.name||e.nickname||t.full_name||"",a=e.major||e.field_of_study||"تجربی",r=e.target||e.goal||"",i=o&&(o.name||o.title||o.roomName)||"سالن مطالعه",s=o&&(o.id||o.code)||"";return`
    <div class="modal-overlay" style="display: flex; backdrop-filter: blur(20px); z-index: 99999;">
      <div class="modal-content" onclick="event.stopPropagation();" style="max-width: 440px; padding: 22px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; text-align: right; direction: rtl;">
        
        <!-- Header -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 12px;">
          <div>
            <h2 style="margin: 0; color: #f8fafc; font-size: 1.05rem; font-weight: 800; display: flex; align-items: center; gap: 8px;">
              <span>👤</span>
              <span>مشخصات عضویت در ${i}</span>
            </h2>
            <span style="font-size: 0.72rem; color: #8e8e9c; margin-top: 2px; display: block;">
              اطلاعات پروفایل مطالعاتی شما برای نمایش به اعضای گروه
            </span>
          </div>
          <button type="button" id="btn-close-join-onboarding" onclick="window.closeJoinRoomOnboardingModal()" class="btn-icon" style="background: #1f2029; border: 1px solid rgba(255,255,255,0.08); color: #a1a1aa; border-radius: 50%; width: 30px; height: 30px; cursor: pointer;">✕</button>
        </div>

        <form id="form-join-room-onboarding" onsubmit="event.preventDefault(); window.handleSubmitJoinRoomOnboarding('${s}', '${i}');" style="display: flex; flex-direction: column; gap: 12px;">
          
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
                   value="${r}"
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
  `}function pn(o=0){const e=typeof o=="number"?o:window.userGuideActiveTab||0,t=[{id:0,icon:"⏰",title:"ماتریس و روتین ۲۴ ساعته"},{id:1,icon:"🎯",title:"هدف‌گذاری و ثبت تست"},{id:2,icon:"🏆",title:"تالار رقابت و لیدربرد"},{id:3,icon:"☁️",title:"همگام‌سازی ابری"}];return`
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
  `}const Eo=["📚","📖","📝","🔬","🧪","📐","💻","👨‍🏫","👥","☕","😴","🏃","🧘","🚿","💼","🎮","🍎","🧹","🎨","🎵"];window.activityModalState={isEditing:!1,code:null,title:"",group:"علمی",isStudy:!0,color:Pe[0],icon:"📚"};window.openActivityModal=(o=null)=>{const e=p.getCategories();if(o){const t=e.find(n=>n.code===o);if(t){const n=Ee(t);window.activityModalState={isEditing:!0,code:t.code,title:t.title||"",group:t.group||(n?"علمی":"غیرعلمی"),isStudy:n,color:t.color||Pe[0],icon:t.icon||(n?"📚":"☕")}}}else{const t=Qe(e);window.activityModalState={isEditing:!1,code:null,title:"",group:"علمی",isStudy:!0,color:t,icon:"📚"}}if(window.appState)window.appState.activeModal="activity",typeof window.renderApp=="function"&&window.renderApp();else{const t=document.getElementById("modal-activity-editor");t&&(t.style.display="flex")}};window.openNonStudyActivityModal=()=>{const o=p.getCategories(),e=Qe(o);if(window.activityModalState={isEditing:!1,code:null,title:"",group:"غیرعلمی",isStudy:!1,color:e,icon:"☕"},window.appState)window.appState.activeModal="activity",typeof window.renderApp=="function"&&window.renderApp();else{const t=document.getElementById("modal-activity-editor");t&&(t.style.display="flex")}};window.closeActivityModal=()=>{if(window.appState&&window.appState.activeModal==="activity")window.appState.activeModal=null,typeof window.renderApp=="function"&&window.renderApp();else{const o=document.getElementById("modal-activity-editor");o&&(o.style.display="none")}};window.setActivityModalType=o=>{window.activityModalState.isStudy=!!o,window.activityModalState.group=o?"علمی":"غیرعلمی",window.activityModalState.isEditing||(window.activityModalState.icon=o?"📚":"☕");const e=document.getElementById("act-type-study-btn"),t=document.getElementById("act-type-nonstudy-btn");e&&t&&(o?(e.classList.add("active-type-selected"),e.style.borderColor="#38bdf8",e.style.background="rgba(56, 189, 248, 0.15)",e.style.boxShadow="0 0 14px rgba(56, 189, 248, 0.3)",t.classList.remove("active-type-selected"),t.style.borderColor="rgba(255, 255, 255, 0.1)",t.style.background="rgba(255, 255, 255, 0.03)",t.style.boxShadow="none"):(t.classList.add("active-type-selected"),t.style.borderColor="#f59e0b",t.style.background="rgba(245, 158, 11, 0.15)",t.style.boxShadow="0 0 14px rgba(245, 158, 11, 0.3)",e.classList.remove("active-type-selected"),e.style.borderColor="rgba(255, 255, 255, 0.1)",e.style.background="rgba(255, 255, 255, 0.03)",e.style.boxShadow="none"))};window.setActivityModalColor=o=>{window.activityModalState.color=o,document.querySelectorAll("#modal-activity-editor .act-color-btn").forEach(e=>{e.dataset.color===o?(e.style.borderColor="#ffffff",e.style.transform="scale(1.18)",e.style.boxShadow="0 0 10px rgba(255,255,255,0.6)"):(e.style.borderColor="transparent",e.style.transform="scale(1)",e.style.boxShadow="none")})};window.setActivityModalIcon=o=>{window.activityModalState.icon=o,document.querySelectorAll("#modal-activity-editor .act-icon-btn").forEach(e=>{e.dataset.icon===o?(e.style.borderColor="var(--primary-accent, #38bdf8)",e.style.background="rgba(56, 189, 248, 0.2)"):(e.style.borderColor="rgba(255,255,255,0.08)",e.style.background="rgba(255,255,255,0.03)")})};window.saveActivityModal=()=>{const o=document.getElementById("activity-modal-title"),e=o?o.value.trim():window.activityModalState.title;if(!e){alert("لطفاً عنوان فعالیت را وارد نمایید."),o&&o.focus();return}const{isEditing:t,code:n,isStudy:a,color:r,icon:i,group:s}=window.activityModalState;p.saveCategory({code:t?n:"cust_"+Date.now(),title:e,group:a?"علمی":s||"غیرعلمی",isStudy:!!a,color:r||Pe[0],icon:i||(a?"📚":"☕")}),window.closeActivityModal(),typeof window.renderApp=="function"&&window.renderApp()};function un(){const o=window.activityModalState||{isEditing:!1,title:"",isStudy:!0,color:Pe[0],icon:"📚"},e=o.isStudy!==void 0?o.isStudy===!0:!0;return`
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
            ${Pe.map((n,a)=>{const r=(o.color||"").toUpperCase()===n.toUpperCase()||!o.color&&a===0;return`
                <button type="button" 
                        class="act-color-btn" 
                        data-color="${n}"
                        onclick="window.setActivityModalColor('${n}')"
                        title="رنگ ${a+1}"
                        style="width: 100%; aspect-ratio: 1; border-radius: 50%; background: ${n}; border: 2.5px solid ${r?"#ffffff":"transparent"}; transform: ${r?"scale(1.18)":"scale(1)"}; ${r?"box-shadow: 0 0 10px rgba(255,255,255,0.6);":""} cursor: pointer; transition: transform 0.15s ease, border-color 0.15s ease; outline: none; padding: 0;">
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
            ${Eo.map(n=>{const a=o.icon===n;return`
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
  `}export{an as A,pn as B,Uo as C,en as D,un as E,Ro as F,Bo as G,wt as H,Lo as I,Jo as J,Go as K,Fo as L,Ho as M,no as N,Ce as O,io as P,fo as Q,Yo as R,qo as S,Vo as T,dt as a,Ko as b,Xe as c,p as d,Qo as e,Mo as f,ve as g,Po as h,So as i,eo as j,Xo as k,$ as l,rn as m,sn as n,on as o,Wo as p,Zo as q,vo as r,tn as s,uo as t,We as u,Et as v,nn as w,dn as x,ln as y,cn as z};
