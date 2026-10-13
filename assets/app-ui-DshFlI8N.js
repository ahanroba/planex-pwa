import{a as Gt}from"./articles-data-CLaiOG3O.js";import{E as lo,r as co}from"./view-question-bank-Cfu9mnX2.js";import{t as nt}from"./traps-analysis-data-CBLkF90D.js";import{h as Ut}from"./vendor-html2canvas-BfYXEYrK.js";const le="https://api.planexapp.ir";typeof window<"u"&&(window.API_BASE_URL=le);const Le=["#EF4444","#F97316","#F59E0B","#EAB308","#84CC16","#10B981","#14B8A6","#06B6D4","#0EA5E9","#3B82F6","#6366F1","#8B5CF6","#D946EF","#EC4899","#F43F5E","#831843","#BE185D","#6D28D9","#1E40AF","#047857","#4D7C0F","#B45309","#C2410C","#475569"],Ye=[{code:"cat_dakheli",title:"داخلی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#0EA5E9",icon:"🫀"},{code:"cat_jarahi",title:"جراحی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#EF4444",icon:"🔪"},{code:"cat_atfal",title:"اطفال",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#F59E0B",icon:"👶"},{code:"cat_zanan",title:"زنان و زایمان",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#EC4899",icon:"🌸"},{code:"cat_ravan",title:"روانپزشکی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#8B5CF6",icon:"🧠"},{code:"cat_ofooni",title:"عفونی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#10B981",icon:"🦠"},{code:"cat_neuro",title:"نورولوژی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#06B6D4",icon:"⚡"},{code:"cat_minor",title:"مینورها",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#6366F1",icon:"🩺"},{code:"cat_zist",title:"زیست‌شناسی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#14B8A6",icon:"🧬"},{code:"cat_shimi",title:"شیمی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#F97316",icon:"🧪"},{code:"cat_fizik",title:"فیزیک",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#3B82F6",icon:"⚛️"},{code:"cat_riazi",title:"ریاضی",group:"علمی",isStudy:!0,recommendedTarget:"",color:"#A855F7",icon:"📐"}],st=[{code:"non_sports",title:"ورزش و تندرستی",icon:"🏃",color:"#f59e0b",group:"غیردرسی",isStudy:!1},{code:"non_rest",title:"استراحت و تفریح",icon:"☕",color:"#8b5cf6",group:"غیردرسی",isStudy:!1},{code:"non_sleep",title:"خواب و ریکاوری",icon:"😴",color:"#6366f1",group:"غیردرسی",isStudy:!1},{code:"non_meal",title:"میان‌وعده و تغذیه",icon:"🍎",color:"#10b981",group:"غیردرسی",isStudy:!1},{code:"non_personal",title:"کارهای شخصی",icon:"📱",color:"#ec4899",group:"غیردرسی",isStudy:!1}];function be(o){const e=Math.max(0,Math.round(Number(o)||0)),t=a=>String(a).replace(/[0-9]/g,r=>"۰۱۲۳۴۵۶۷۸۹"[r]);if(e===0)return"۰ دقیقه";if(e<60)return`${t(e)} دقیقه`;const n=Math.floor(e/60),i=e%60;return i===0?`${t(n)} ساعت`:`${t(n)} ساعت و ${t(i)} دقیقه`}function Pe(o){return o?typeof o.isStudy=="boolean"?o.isStudy:o.group==="علمی"||["ع-س","ع-ک","ع-م","ع-غ"].includes(o.code)||typeof o.code=="string"&&(o.code.startsWith("cat_")||o.code.startsWith("cust_"))&&o.group!=="غیرعلمی":!1}function it(o=[]){const e=new Set((o||[]).map(n=>(n.color||"").toUpperCase()));for(const n of Le)if(!e.has(n.toUpperCase()))return n;const t=(o?o.length:0)%Le.length;return Le[t]}const Qe=[{id:"Q1",emoji:"🔴",title:"فوری و مهم",subtitle:"ضروری / بحرانی — همین حالا انجام بده",color:"#ef4444",softBg:"rgba(239, 68, 68, 0.10)",borderColor:"rgba(239, 68, 68, 0.38)"},{id:"Q2",emoji:"🔵",title:"مهم و غیرفوری",subtitle:"برنامه‌ریزی / رشد — زمان‌بندی کن",color:"#3b82f6",softBg:"rgba(59, 130, 246, 0.10)",borderColor:"rgba(59, 130, 246, 0.38)"},{id:"Q3",emoji:"🟡",title:"فوری و غیرمهم",subtitle:"پیگیری سریع — واگذار یا سریع تمام کن",color:"#f59e0b",softBg:"rgba(245, 158, 11, 0.10)",borderColor:"rgba(245, 158, 11, 0.38)"},{id:"Q4",emoji:"⚪",title:"غیرفوری و غیرمهم",subtitle:"کم‌اهمیت / تفریحی — حذف یا محدود کن",color:"#94a3b8",softBg:"rgba(148, 163, 184, 0.10)",borderColor:"rgba(148, 163, 184, 0.32)"}],bt="Q2";function rt(o){return Qe.find(e=>e.id===o)||Qe[1]}const xt=["Q1","Q2","Q3","Q4"],wt="Q2",$={WEEKS:"planex_weeks",CURRENT_WEEK_ID:"planex_current_week_id",HOURLY_LOGS:"planex_hourly_logs",CATEGORIES:"planex_categories",HABITS:"planex_habits",ROUTINES:"planex_routines",DAILY_PLANS:"planex_daily_plans",WEEKLY_GOALS:"planex_weekly_goals",STUDY_TARGETS:"planex_study_targets",EVALUATIONS:"planex_evaluations",INTERRUPTIONS:"planex_interruptions",REMINDERS:"planex_reminders",GAMIFICATION:"planex_gamification",GRATITUDE_NOTES:"planex_gratitude_notes",COUNTDOWN_EVENTS:"planex_countdown_events",USER_PROFILE:"planex_user_profile",CUSTOM_SUBJECTS:"planex_custom_subjects",RECORDED_TIMER:"planex_recorded_timer",ACTIVE_THEME:"planex_active_theme",FLASHCARDS:"planex_flashcards",USER_GROUP_DATA:"planex_user_group_data",USER_GROUPS:"planex_user_groups",ACTIVE_GROUP_CODE:"planex_active_group_code",PERSONAL_SYNC_TOKEN:"planex_personal_sync_token",LAST_PERSONAL_SYNC:"planex_last_personal_sync"};function _e(o){if(!o||typeof o!="string")return!0;const e=o.trim().replace(/\u200C/g," ").replace(/\s+/g," ");return["","کاربر","کاربر پلنکس","دانشجو","دانش آموز","دانش آموز پر تلاش","دانش آموز پرتلاش","دانش‌آموز پرتلاش","دانش‌آموز پر تلاش","داوطلب پرتلاش","داوطلب پر تلاش","x","X"].includes(e)||e.toLowerCase()==="x"}class po{exportAllDataJSON(){const e={},[t,n,i]=this.getTodayJalali();e._backup_metadata={app:"PlanEx Time Manager",version:"1.0.0",exportDate:`${t}/${n}/${i}`,exportedAt:new Date().toISOString()};for(let r=0;r<localStorage.length;r++){const s=localStorage.key(r);if(s&&(s.startsWith("planex_")||s.startsWith("theme_")||s.startsWith("app_")||s.startsWith("timer_")))try{e[s]=JSON.parse(localStorage.getItem(s))}catch{e[s]=localStorage.getItem(s)}}const a=localStorage.getItem("planex_user_avatar");return a&&(e.planex_user_avatar=a),JSON.stringify(e,null,2)}importAllDataJSON(e){var t,n,i;try{const a=typeof e=="string"?JSON.parse(e):e;if(typeof a!="object"||a===null)throw new Error("فرمت فایل پشتیبان معتبر نیست.");const r=this.getEffectiveUserName();Object.keys(a).forEach(s=>{if(s==="_backup_metadata")return;const d=a[s];if(d!=null){if((s===$.USER_GROUPS||s==="planex_user_groups"||s==="planex_my_groups"||s==="planex_my_rooms")&&Array.isArray(d)&&d.length===0){const l=this.getUserGroups();if(l&&l.length>0)return}if((s==="planex_recent_activity_sessions"||s==="planex_study_logs")&&Array.isArray(d))if(d.length===0)try{const l=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),c=JSON.parse(localStorage.getItem("planex_study_logs")||"[]");if(Array.isArray(l)&&l.length>0||Array.isArray(c)&&c.length>0)return}catch{}else try{const l=JSON.parse(localStorage.getItem(s)||"[]");if(Array.isArray(l)&&l.length>0){const c=new Map;[...l,...d].forEach(y=>{if(!y||typeof y!="object")return;const f=y.id||`${y.date||y.dateStr}_${y.startTime||y.timestamp||y.subject}_${y.duration||y.minutes}`;c.set(f,y)});const g=Array.from(c.values());localStorage.setItem(s,JSON.stringify(g));return}}catch{}if((s===$.HABITS||s===$.ROUTINES||s==="planex_habits"||s==="planex_routines")&&Array.isArray(d))try{let l={};try{const u=localStorage.getItem("planex_deleted_habit_ids");if(u){const m=JSON.parse(u);Array.isArray(m)?m.forEach(b=>{l[String(b)]=1}):typeof m=="object"&&m!==null&&(l=m)}}catch{}if(a.planex_deleted_habit_ids)try{const u=typeof a.planex_deleted_habit_ids=="string"?JSON.parse(a.planex_deleted_habit_ids):a.planex_deleted_habit_ids;Array.isArray(u)?u.forEach(m=>{l[String(m)]=1}):typeof u=="object"&&u!==null&&(l={...l,...u}),localStorage.setItem("planex_deleted_habit_ids",JSON.stringify(l))}catch{}const c=u=>{if(!u)return!0;const m=String(u.id||""),b=String(u.title||"").trim(),S=l[m],I=l[b];if(S!==void 0||I!==void 0){const x=Math.max(Number(S||0),Number(I||0)),k=Number(u.updatedAt||u.updated_at||0);if(x===1||x===0||k<=x)return!0}return!1},g=this.getHabits()||[],y=Number(localStorage.getItem("planex_routines_updated_at")||0);if(d.length===0){if(g.length>0&&y>0)return;this.saveRoutines([],!1);return}const f=new Map;g.forEach(u=>{u&&(u.id||u.title)&&!c(u)&&f.set(String(u.id||u.title),u)}),d.forEach(u=>{if(!u||typeof u!="object"||c(u))return;const m=String(u.id||u.title);if(f.has(m)){const b=f.get(m),S=Number(b.updatedAt||b.updated_at||0),I=Number(u.updatedAt||u.updated_at||0),x=S>I;f.set(m,{...x?u:b,...x?b:u,completedDays:{...u.completedDays||{},...b.completedDays||{}}})}else{const b=Number(u.updatedAt||u.updated_at||0);if(f.size>0&&y>0&&b<=y)return;f.set(m,u)}});const w=Array.from(f.values()).filter(u=>!c(u));this.saveRoutines(w,!1);return}catch{}(s==="planex_user_nickname"||s==="planex_nickname"||s==="planex_leaderboard_nickname")&&typeof d=="string"&&r&&_e(d)||(s===$.USER_PROFILE&&typeof d=="object"&&d!==null&&r&&_e(d.name)&&(d.name=r,d.nickname=r),typeof d=="object"?localStorage.setItem(s,JSON.stringify(d)):localStorage.setItem(s,String(d)))}});try{const s=a.planex_user_avatar||a.avatar||(typeof a.planex_user_profile=="object"?((t=a.planex_user_profile)==null?void 0:t.avatar)||((n=a.planex_user_profile)==null?void 0:n.avatar_url):null)||(typeof a.planex_auth_user=="object"?(i=a.planex_auth_user)==null?void 0:i.avatar_url:null);if(s){localStorage.setItem("planex_user_avatar",s);const d=JSON.parse(localStorage.getItem($.USER_PROFILE)||"{}");d.avatar=s,d.avatar_url=s,d.photo=s,d.photoUrl=s,localStorage.setItem($.USER_PROFILE,JSON.stringify(d));const l=JSON.parse(localStorage.getItem("planex_auth_user")||"{}");l&&typeof l=="object"&&Object.keys(l).length>0&&(l.avatar_url=s,l.photo_url=s,l.avatar=s,localStorage.setItem("planex_auth_user",JSON.stringify(l)),localStorage.setItem("planex_user_account",JSON.stringify(l))),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("profileUpdated"))}}catch{}return this.hydrateAndSyncState(),!0}catch(a){throw console.error("Import failed:",a),a}}getEffectiveUserName(){try{const e=[localStorage.getItem("planex_user_nickname"),localStorage.getItem("planex_nickname"),localStorage.getItem("planex_leaderboard_nickname")];try{const t=JSON.parse(localStorage.getItem($.USER_PROFILE)||"{}");t&&(e.push(t.nickname),e.push(t.name),e.push(t.displayName))}catch{}try{const t=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}");t&&(e.push(t.full_name),e.push(t.name),e.push(t.nickname),e.push(t.first_name))}catch{}for(const t of e)if(t&&typeof t=="string"&&!_e(t))return t.trim()}catch{}return""}hydrateAndSyncState(){try{const e=this.getEffectiveUserName();if(e){localStorage.setItem("planex_user_nickname",e),localStorage.setItem("planex_nickname",e),localStorage.setItem("planex_leaderboard_nickname",e);try{const i=JSON.parse(localStorage.getItem($.USER_PROFILE)||"{}");(i.name!==e||i.nickname!==e)&&(i.name=e,i.nickname=e,localStorage.setItem($.USER_PROFILE,JSON.stringify(i)))}catch{}try{const i=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}");i&&typeof i=="object"&&Object.keys(i).length>0&&(i.name=e,i.full_name=e,i.nickname=e,localStorage.setItem("planex_auth_user",JSON.stringify(i)),localStorage.setItem("planex_user_account",JSON.stringify(i)))}catch{}}const t=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),n=JSON.parse(localStorage.getItem("planex_study_logs")||"[]");if(Array.isArray(t)&&Array.isArray(n)&&(t.length>0||n.length>0)){const i=new Map;[...t,...n].forEach(r=>{if(!r||typeof r!="object")return;const s=r.id||`${r.date||r.dateStr}_${r.startTime||r.timestamp||r.subject}_${r.duration||r.minutes}`;i.set(s,r)});const a=Array.from(i.values());a.sort((r,s)=>{const d=Number(r.timestamp||r.createdAt||0);return Number(s.timestamp||s.createdAt||0)-d}),localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(a)),localStorage.setItem("planex_study_logs",JSON.stringify(a))}this._breakdownMemoMap={}}catch(e){console.warn("[db] hydrateAndSyncState error:",e)}}constructor(){this.initDefaults(),this.hydrateAndSyncState()}gregorianToJalali(e,t,n){const i=[0,31,59,90,120,151,181,212,243,273,304,334];let a=t>2?e+1:e,r=355666+365*e+Math.floor((a+3)/4)-Math.floor((a+99)/100)+Math.floor((a+399)/400)+n+i[t-1],s=-1595+33*Math.floor(r/12053);r%=12053,s+=4*Math.floor(r/1461),r%=1461,r>365&&(s+=Math.floor((r-1)/365),r=(r-1)%365);let d=r<186?1+Math.floor(r/31):7+Math.floor((r-186)/30),l=1+(r<186?r%31:(r-186)%30);return[s,d,l]}jalaliToJdn(e,t,n){let i=e-(e>=0?474:473),a=474+i%2820;return n+(t<=7?(t-1)*31:(t-7)*30+186)+Math.floor((a*682-110)/2816)+(a-1)*365+Math.floor(i/2820)*1029983+1948320}jdnToJalali(e){let t=e-this.jalaliToJdn(475,1,1),n=Math.floor(t/1029983),i=t%1029983,a;if(i===1029982)a=2820;else{let c=Math.floor(i/366),g=i%366;a=Math.floor((2134*c+2816*g+2815)/1028522)+c+1}let r=474+2820*n+a,s=e-this.jalaliToJdn(r,1,1)+1,d,l;return s<=186?(d=Math.ceil(s/31),l=s-(d-1)*31):(d=Math.ceil((s-186)/30)+6,l=s-186-(d-7)*30),[r,d,l]}jdnToGregorian(e){let t=e+68569,n=Math.floor(4*t/146097);t=t-Math.floor((146097*n+3)/4);let i=Math.floor(4e3*(t+1)/1464001);t=t-Math.floor(1461*i/4)+31;let a=Math.floor(80*t/2447),r=t-Math.floor(2447*a/80);t=Math.floor(a/11);let s=a+2-12*t;return[100*(n-49)+i+t,s,r]}getJalaliDateTimestampRange(e=null){const t=this.normalizeJalaliDate(e||this.getTodayJalaliString()),n=t.split("/").map(Number),i=n[0]||1405,a=n[1]||1,r=n[2]||1,s=this.jalaliToJdn(i,a,r),[d,l,c]=this.jdnToGregorian(s),g=new Date(d,l-1,c,0,0,0,0),y=new Date(d,l-1,c,23,59,59,999);return{dateStr:t,startDate:g,endDate:y,startTimestamp:g.getTime(),endTimestamp:y.getTime()}}getTodayJalali(){const e=new Date;return this.gregorianToJalali(e.getFullYear(),e.getMonth()+1,e.getDate())}getTodayJdn(){const[e,t,n]=this.getTodayJalali();return this.jalaliToJdn(e,t,n)}getJalaliMonthLength(e,t){const n=this.jalaliToJdn(e,t,1);return(t===12?this.jalaliToJdn(e+1,1,1):this.jalaliToJdn(e,t+1,1))-n}getWeeksInMonth(e,t){const i=(this.jalaliToJdn(e,t,1)+2)%7;return Math.ceil((i+this.getJalaliMonthLength(e,t))/7)}initDefaults(){if(localStorage.getItem($.WEEKS)&&localStorage.removeItem($.WEEKS),!localStorage.getItem($.CATEGORIES))localStorage.setItem($.CATEGORIES,JSON.stringify(Ye));else{let e=[];try{e=JSON.parse(localStorage.getItem($.CATEGORIES)||"[]"),Array.isArray(e)||(e=[])}catch{e=[]}e=e.filter(a=>a&&typeof a=="object"&&a.code);const t=["ب","ع-ک","ع-م","ع-س","ع-غ","م","خ","ت","ش","تـ"],n=["تمرکز و بازآفرینی","کلاس و آموزش","تمرین و کارگاه گروهی","مطالعه و پژوهش","مطالعه آزاد","امور شغلی و کسب‌وکار","خواب","تفریح و ورزش","امور شخصی","زمان تلف شده"];if(e.some(a=>t.includes(a.code)||n.includes(a.title))){const a=e.filter(s=>!t.includes(s.code)&&!n.includes(s.title)),r=[...Ye];a.forEach(s=>{r.some(d=>d.code===s.code||d.title===s.title)||r.push(s)}),e=r}e.length===0&&(e=[...Ye]),localStorage.setItem($.CATEGORIES,JSON.stringify(e))}if(localStorage.getItem($.CUSTOM_SUBJECTS)||localStorage.setItem($.CUSTOM_SUBJECTS,JSON.stringify([])),localStorage.getItem($.STUDY_TARGETS)||localStorage.setItem($.STUDY_TARGETS,JSON.stringify({dailyStudyGoalHours:8,weeklyStudyGoalHours:56,dailyTestGoalCount:150,weeklyTestGoalCount:1e3})),localStorage.getItem($.USER_PROFILE)||localStorage.setItem($.USER_PROFILE,JSON.stringify({name:"",major:"",targetField:""})),!localStorage.getItem($.COUNTDOWN_EVENTS))localStorage.setItem($.COUNTDOWN_EVENTS,JSON.stringify([{id:1,title:"کنکور سراسری ۱۴۰۵",jy:1405,jm:5,jd:29}]));else{let e=JSON.parse(localStorage.getItem($.COUNTDOWN_EVENTS)),t=!1;e=e.map(n=>n.id===1&&n.jy===1404?(t=!0,{id:1,title:"کنکور سراسری ۱۴۰۵",jy:1405,jm:5,jd:29}):n),t&&localStorage.setItem($.COUNTDOWN_EVENTS,JSON.stringify(e))}localStorage.getItem($.GAMIFICATION)||localStorage.setItem($.GAMIFICATION,JSON.stringify({xp:0,level:1,streak:0,lastLogin:Date.now()})),localStorage.getItem($.REMINDERS)||localStorage.setItem($.REMINDERS,JSON.stringify([])),localStorage.getItem($.INTERRUPTIONS)||localStorage.setItem($.INTERRUPTIONS,JSON.stringify([])),this.purgeMockAndFutureData()}purgeMockAndFutureData(){try{const[e,t,n]=this.getTodayJalali(),i=this.jalaliToJdn(e,t,n),a=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]");if(Array.isArray(a)){const s=a.filter(d=>{if(!d||typeof d!="object")return!1;if(d.dateStr||d.date){const l=d.dateStr||d.date,c=String(l).split("/").map(Number);if(c.length===3&&!isNaN(c[0])&&!isNaN(c[1])&&!isNaN(c[2])&&this.jalaliToJdn(c[0],c[1],c[2])>i)return!1}return!(d.id&&typeof d.id=="string"&&(d.id.startsWith("mock_")||d.id.startsWith("dummy_")||d.id.startsWith("seed_")))});localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(s))}const r=JSON.parse(localStorage.getItem($.RECORDED_TIMER)||"{}");if(typeof r=="object"&&r!==null){const s=new Date().toISOString().slice(0,10);let d=!1;Object.keys(r).forEach(l=>{l>s&&(delete r[l],d=!0)}),d&&localStorage.setItem($.RECORDED_TIMER,JSON.stringify(r))}}catch(e){console.warn("purgeMockAndFutureData error:",e)}}getCurrentWeekStartDate(e=new Date){const t=new Date(e),n=(t.getDay()+1)%7,i=new Date(t.getFullYear(),t.getMonth(),t.getDate()-n);return i.setHours(0,0,0,0),i}getLiveCurrentWeekObject(e=new Date){const t=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],n=["هفته اول","هفته دوم","هفته سوم","هفته چهارم","هفته پنجم","هفته ششم"],i=["شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه"],a=this.getCurrentWeekStartDate(e),r=new Date(a.getFullYear(),a.getMonth(),a.getDate()+6),[s,d,l]=this.gregorianToJalali(a.getFullYear(),a.getMonth()+1,a.getDate()),[c,g,y]=this.gregorianToJalali(r.getFullYear(),r.getMonth()+1,r.getDate()),f=this.getJalaliWeekNumber(s,d,l),w=`${s}_${d}_${f}`,u=t[d-1],m=t[g-1],b=`${l} ${u} تا ${y} ${m}`,S=d>=7?s:s-1,I=S+1,x=`${S}-${I}`,k=[],A=this.getTodayJalaliString();for(let P=0;P<7;P++){const M=new Date(a.getFullYear(),a.getMonth(),a.getDate()+P),[T,O,C]=this.gregorianToJalali(M.getFullYear(),M.getMonth()+1,M.getDate()),z=`${T}/${String(O).padStart(2,"0")}/${String(C).padStart(2,"0")}`,B=this.normalizeJalaliDate(z)===A,U=this.getStudyMinutesByDate(z),F=this.getDailyTestCount(z);k.push({dayIndex:P,dayName:i[P],dateStr:z,dayOfMonth:C,monthName:t[O-1],year:T,monthIdx:O,isToday:B,studyMinutes:U,totalStudyMinutes:U,testsCount:F,testCount:F})}return{id:w,year:s,monthIdx:d,weekNum:f,month:u,weekNumber:n[f-1]||`هفته ${f}`,academicYear:x,startDate:`${l} ${u}`,endDate:`${y} ${m}`,dateRange:b,isCurrentWeek:!0,status:"current",days:k}}getWeekObject(e,t,n){const i=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],a=["هفته اول","هفته دوم","هفته سوم","هفته چهارم","هفته پنجم","هفته ششم"],r=F=>String(F).replace(/[0-9]/g,L=>"۰۱۲۳۴۵۶۷۸۹"[L]),s=["شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه"],d=this.jalaliToJdn(e,t,1),l=(d+2)%7,g=d-l+(n-1)*7,y=g+6,f=this.getTodayJdn(),w=f>=g&&f<=y;let u="current";f>y?u="past":f<g&&(u="future");const[m,b,S]=this.jdnToJalali(g),[I,x,k]=this.jdnToJalali(y),A=i[b-1],P=i[x-1],M=`${S} ${A} تا ${k} ${P}`,T=`${e}_${t}_${n}`,O=t>=7?e:e-1,C=O+1,z=`${r(O)}-${r(C)}`,B=[],U=this.getTodayJalaliString();for(let F=0;F<7;F++){const L=g+F;let J="",Y=e,H=t,Q=1;try{[Y,H,Q]=this.jdnToJalali(L),J=`${Y}/${String(H).padStart(2,"0")}/${String(Q).padStart(2,"0")}`}catch{}const D=J?this.getStudyMinutesByDate(J):0,Z=J?this.getDailyTestCount(J):0,X=J?this.normalizeJalaliDate(J)===U:!1;B.push({dayIndex:F,dayName:s[F],dateStr:J,dayOfMonth:Q,monthName:i[H-1],year:Y,monthIdx:H,isToday:X,studyMinutes:D,totalStudyMinutes:D,testsCount:Z,testCount:Z})}return{id:T,year:e,monthIdx:t,weekNum:n,month:i[t-1],weekNumber:a[n-1]||`هفته ${n}`,academicYear:z,startDate:`${S} ${A}`,endDate:`${k} ${P}`,dateRange:M,isCurrentWeek:w,status:u,days:B}}saveCurrentWeek(e){if(!(!e||!e.id))try{const t=JSON.parse(localStorage.getItem("planex_week_data")||"{}");t[e.id]=e,localStorage.setItem("planex_week_data",JSON.stringify(t));const n=JSON.parse(localStorage.getItem($.WEEKS)||"{}");n[e.id]=e,localStorage.setItem($.WEEKS,JSON.stringify(n))}catch(t){console.error("Error in saveCurrentWeek:",t)}}getJalaliWeekNumber(e,t,n){const i=this.jalaliToJdn(e,t,1),a=(i+2)%7,r=i-a,d=this.jalaliToJdn(e,t,n)-r,l=Math.floor(d/7)+1;return Math.min(this.getWeeksInMonth(e,t),Math.max(1,l))}getTodayWeekKey(){const[e,t,n]=this.getTodayJalali(),i=this.getJalaliWeekNumber(e,t,n);return`${e}_${t}_${i}`}getWeeks(){const e=this.getCurrentWeek(),t=[],n=this.getWeeksInMonth(e.year,e.monthIdx);for(let i=1;i<=n;i++)t.push(this.getWeekObject(e.year,e.monthIdx,i));return t}getCurrentWeek(e=new Date){const t=localStorage.getItem("planex_active_week_key");if(t){const n=t.split("_");if(n.length===3){const i=parseInt(n[0]),a=parseInt(n[1]),r=parseInt(n[2]);if(!isNaN(i)&&!isNaN(a)&&!isNaN(r)&&a>=1&&a<=12&&r>=1&&r<=this.getWeeksInMonth(i,a))return this.getWeekObject(i,a,r)}}return this.getLiveCurrentWeekObject(e)}setCurrentWeekKey(e){localStorage.setItem("planex_active_week_key",e),localStorage.setItem($.CURRENT_WEEK_ID,e)}setCurrentWeek(e){this.setCurrentWeekKey(e)}goToPrevWeek(){const e=this.getCurrentWeek();let t=e.year,n=e.monthIdx,i=e.weekNum;i>1?i--:(n>1?n--:(n=12,t--),i=this.getWeeksInMonth(t,n)),this.setCurrentWeekKey(`${t}_${n}_${i}`)}goToNextWeek(){const e=this.getCurrentWeek();let t=e.year,n=e.monthIdx,i=e.weekNum;i<this.getWeeksInMonth(t,n)?i++:(i=1,n<12?n++:(n=1,t++)),this.setCurrentWeekKey(`${t}_${n}_${i}`)}resetToCurrentWeek(){this.setCurrentWeekKey(this.getTodayWeekKey())}hasDataForWeek(e){const t=this.getHourlyLogs(e);if(Object.keys(t).length>0)return!0;const n=this.getDailyPlans(e);if(n&&n.length>0)return!0;const i=this.getWeeklyGoals(e);return!!(i&&Object.keys(i).length>0)}deleteWeek(e){let t=this.getWeeks();t=t.filter(n=>n.id!=e),localStorage.setItem($.WEEKS,JSON.stringify(t)),localStorage.getItem($.CURRENT_WEEK_ID)==e&&t.length>0&&localStorage.setItem($.CURRENT_WEEK_ID,t[0].id.toString())}getHourlyLogs(e){return JSON.parse(localStorage.getItem($.HOURLY_LOGS)||"{}")[e]||{}}setHourlyLog(e,t,n,i,a=null,r=null,s=0,d=null,l=null,c=0){const g=JSON.parse(localStorage.getItem($.HOURLY_LOGS)||"{}");g[e]||(g[e]={});const y=`${t}_${n}`;!i||i==="-"?delete g[e][y]:g[e][y]={categoryCode:i,note:a||"",subject:r||"",testCount:parseInt(s)||0,studyMethod:d||"",description:l||"",rating:parseInt(c)||0,updatedAt:Date.now()},localStorage.setItem($.HOURLY_LOGS,JSON.stringify(g))}getCategories(){try{const e=JSON.parse(localStorage.getItem($.CATEGORIES)||"[]");if(!Array.isArray(e)||e.length===0)return Ye;const t=e.filter(n=>n&&typeof n=="object"&&n.code);return t.length>0?t:Ye}catch{return Ye}}getNextCategoryColor(){return it(this.getCategories())}addCategory(e,t,n="علمی",i=null,a="",r="📚",s=!0){const d=this.getCategories(),l=i||it(d),c=typeof s=="boolean"?s:n==="علمی",g={code:e||"cust_"+Date.now(),title:(t||"").trim(),group:n||(c?"علمی":"غیرعلمی"),isStudy:c,color:l,recommendedTarget:a||"",icon:r||(c?"📚":"☕")};return d.push(g),localStorage.setItem($.CATEGORIES,JSON.stringify(d)),g}saveCategory(e){let t=this.getCategories();const n=e.isStudy!==void 0?!!e.isStudy:e.group==="علمی",i=e.code||"cust_"+Date.now(),a=t.findIndex(s=>s.code===i),r={code:i,title:(e.title||"").trim(),group:e.group||(n?"علمی":"غیرعلمی"),isStudy:n,color:e.color||it(t),recommendedTarget:e.recommendedTarget||"",icon:e.icon||(n?"📚":"☕")};return a>=0?t[a]={...t[a],...r}:t.push(r),localStorage.setItem($.CATEGORIES,JSON.stringify(t)),r}isCategoryStudy(e){if(!e)return!1;if(typeof e=="object")return Pe(e);const n=this.getCategories().find(i=>i.code===e);return Pe(n)}updateCategoryIcon(e,t){const n=this.getCategories(),i=n.find(a=>a.code===e);i&&(i.icon=t,localStorage.setItem($.CATEGORIES,JSON.stringify(n)))}deleteCategory(e){try{let t=this.getCategories();return t=t.filter(n=>n&&n.code!==e),t.length===0&&(t=[...Ye]),localStorage.setItem($.CATEGORIES,JSON.stringify(t)),t}catch{return Ye}}getNonStudyCategories(){try{const e=JSON.parse(localStorage.getItem("planex_deleted_nonstudy_codes")||"[]"),t=JSON.parse(localStorage.getItem("planex_custom_nonstudy_categories")||"[]"),n=Array.isArray(t)?t.filter(r=>r&&typeof r=="object"&&r.code):[],i=new Map;st.forEach(r=>i.set(r.code,r)),n.forEach(r=>i.set(r.code,r));const a=Array.from(i.values()).filter(r=>r&&!e.includes(r.code));return a.length>0?a:st}catch{return st}}addNonStudyCategory(e,t="☕",n="#f59e0b"){try{const i=JSON.parse(localStorage.getItem("planex_custom_nonstudy_categories")||"[]"),r={code:"non_cust_"+Date.now().toString(36)+Math.random().toString(36).substr(2,4),title:String(e).trim(),icon:t||"☕",color:n||"#f59e0b",group:"غیردرسی",isStudy:!1};return i.push(r),localStorage.setItem("planex_custom_nonstudy_categories",JSON.stringify(i)),r}catch{return{code:"non_"+Date.now(),title:e,icon:"☕",color:"#f59e0b",isStudy:!1}}}deleteNonStudyCategory(e){try{let t=JSON.parse(localStorage.getItem("planex_custom_nonstudy_categories")||"[]");Array.isArray(t)&&(t=t.filter(i=>i&&i.code!==e),localStorage.setItem("planex_custom_nonstudy_categories",JSON.stringify(t)));let n=JSON.parse(localStorage.getItem("planex_deleted_nonstudy_codes")||"[]");return n.includes(e)||(n.push(e),localStorage.setItem("planex_deleted_nonstudy_codes",JSON.stringify(n))),this.getNonStudyCategories()}catch{return st}}getCustomSubjects(){return JSON.parse(localStorage.getItem($.CUSTOM_SUBJECTS)||"[]")}addCustomSubject(e){const t=this.getCustomSubjects();t.includes(e)||(t.push(e),localStorage.setItem($.CUSTOM_SUBJECTS,JSON.stringify(t)))}deleteCustomSubject(e){let t=this.getCustomSubjects();t=t.filter(n=>n!==e),localStorage.setItem($.CUSTOM_SUBJECTS,JSON.stringify(t))}getUniqueLoggedTopics(e=null){const t=new Set;try{const n=JSON.parse(localStorage.getItem($.HOURLY_LOGS)||"{}");Object.values(n).forEach(r=>{r&&typeof r=="object"&&Object.values(r).forEach(s=>{if(s&&s.subject&&(!e||s.categoryCode===e)){const d=String(s.subject).trim();d&&t.add(d)}})});const i=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]");Array.isArray(i)&&i.forEach(r=>{if(r&&r.subject&&(!e||r.categoryCode===e)){const s=String(r.subject).trim();s&&t.add(s)}});const a=this.getCustomSubjects();Array.isArray(a)&&a.forEach(r=>{const s=String(r).trim();s&&t.add(s)})}catch{}return Array.from(t)}getRoutines(){return this.getHabits()}saveRoutines(e,t=!1){if(!Array.isArray(e))return[];try{localStorage.setItem($.HABITS,JSON.stringify(e)),localStorage.setItem($.ROUTINES,JSON.stringify(e)),localStorage.setItem("planex_routines_updated_at",String(Date.now()))}catch(n){console.error("Error saving routines:",n)}return typeof window<"u"&&typeof window.triggerActionDrivenPush=="function"&&window.triggerActionDrivenPush(t?0:150),e}getHabits(){let e=localStorage.getItem($.HABITS)||localStorage.getItem($.ROUTINES),t=[];try{t=JSON.parse(e||"[]"),Array.isArray(t)||(t=[])}catch{t=[]}let n=!1;const i=new Set;return t.forEach((a,r)=>{!a||typeof a!="object"||((!a.id||i.has(a.id))&&(a.id=Date.now().toString()+"_"+r+"_"+Math.random().toString(36).substr(2,9),n=!0),i.add(a.id))}),n&&(localStorage.setItem($.HABITS,JSON.stringify(t)),localStorage.setItem($.ROUTINES,JSON.stringify(t))),t}addHabit(e,t="روزانه",n="08:00",i=null){const a=this.getHabits();let r=i,s=String(e||"").trim();const d=s.match(new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Presentation}|\\uD83C[\\uDF00-\\uDFFF]|\\uD83D[\\uDC00-\\uDE4F]|\\uD83E[\\uDD00-\\uDDFF]|\\uD83D[\\uDE80-\\uDEFF]|[\\u2600-\\u27BF])\\s*","u"));d&&(r||(r=d[1]),s=s.substring(d[0].length).trim()),r||(r="✨");try{const g=localStorage.getItem("planex_deleted_habit_ids");if(g){let y=JSON.parse(g),f=!1;typeof y=="object"&&y!==null&&(s&&y[s]&&(delete y[s],f=!0),e&&y[e]&&(delete y[e],f=!0),f&&localStorage.setItem("planex_deleted_habit_ids",JSON.stringify(y)))}}catch{}const l=Date.now(),c={id:l.toString()+"_"+a.length+"_"+Math.random().toString(36).substr(2,9),title:s||e,emoji:r,frequency:t,targetTime:n,daysCompleted:[!1,!1,!1,!1,!1,!1,!1],completedDays:{},updatedAt:l};return a.push(c),this.saveRoutines(a),c}updateHabit(e,t={}){const n=this.getHabits(),i=n.find(a=>a.id==e||String(a.id)===String(e));if(i){if(t.title!==void 0){let a=String(t.title).trim();const r=a.match(new RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Presentation}|\\uD83C[\\uDF00-\\uDFFF]|\\uD83D[\\uDC00-\\uDE4F]|\\uD83E[\\uDD00-\\uDDFF]|\\uD83D[\\uDE80-\\uDEFF]|[\\u2600-\\u27BF])\\s*","u"));r&&!t.emoji&&(t.emoji=r[1],a=a.substring(r[0].length).trim()),i.title=a||t.title}return t.emoji!==void 0&&(i.emoji=t.emoji),t.frequency!==void 0&&(i.frequency=t.frequency),t.targetTime!==void 0&&(i.targetTime=t.targetTime),i.updatedAt=Date.now(),this.saveRoutines(n),i}return null}toggleHabitDay(e,t){const n=this.getHabits(),i=n.find(a=>a.id==e);i&&(i.daysCompleted||(i.daysCompleted=[!1,!1,!1,!1,!1,!1,!1]),i.daysCompleted[t]=!i.daysCompleted[t],i.updatedAt=Date.now(),this.saveRoutines(n))}cycleHabitDay(e,t,n){const i=this.getHabits(),a=i.find(r=>r.id==e||String(r.id)===String(e));if(a){a.completedDays||(a.completedDays={}),a.completedDays[t]||(a.completedDays[t]={});let r=a.completedDays[t][n]||0;return r=(r+1)%3,a.completedDays[t][n]=r,a.updatedAt=Date.now(),this.saveRoutines(i),r}return 0}deleteHabit(e){let t=this.getHabits();const n=t.find(i=>i.id==e||String(i.id)===String(e));t=t.filter(i=>i.id!=e&&String(i.id)!==String(e));try{const i=Date.now();let a={};const r=localStorage.getItem("planex_deleted_habit_ids");if(r){const s=JSON.parse(r);Array.isArray(s)?s.forEach(d=>{a[String(d)]=i}):typeof s=="object"&&s!==null&&(a=s)}e&&(a[String(e)]=i),n&&n.title&&(a[String(n.title).trim()]=i),localStorage.setItem("planex_deleted_habit_ids",JSON.stringify(a)),localStorage.setItem("planex_routines_updated_at",String(i))}catch{}this.saveRoutines(t,!0),typeof window<"u"&&typeof window.dispatchEvent=="function"&&(window.dispatchEvent(new CustomEvent("routine-deleted",{detail:{habitId:e,immediate:!0}})),window.dispatchEvent(new CustomEvent("routines-updated",{detail:{immediate:!0}})))}getDailyPlans(e){return(JSON.parse(localStorage.getItem($.DAILY_PLANS)||"{}")[e]||[]).map(i=>({...i,priority:xt.includes(i.priority)?i.priority:wt}))}addDailyPlan(e,t,n,i=wt){const a=JSON.parse(localStorage.getItem($.DAILY_PLANS)||"{}");a[e]||(a[e]=[]);const r=xt.includes(i)?i:wt,d={id:`${Date.now()}_${Math.random().toString(36).slice(2,8)}`,dayIndex:t,text:n,isDone:!1,priority:r,createdAt:Date.now()};return a[e].push(d),localStorage.setItem($.DAILY_PLANS,JSON.stringify(a)),d}setDailyPlanPriority(e,t,n){if(!xt.includes(n))return!1;const i=JSON.parse(localStorage.getItem($.DAILY_PLANS)||"{}");if(!i[e])return!1;const a=i[e].find(r=>r.id==t);return a?(a.priority=n,localStorage.setItem($.DAILY_PLANS,JSON.stringify(i)),!0):!1}toggleDailyPlan(e,t){const n=JSON.parse(localStorage.getItem($.DAILY_PLANS)||"{}");let i=null;if(n[e]&&(i=n[e].find(a=>a.id==t||String(a.id)===String(t))),!i){for(const a of Object.keys(n))if(i=n[a].find(r=>r.id==t||String(r.id)===String(t)),i)break}return i?(i.isDone=!i.isDone,localStorage.setItem($.DAILY_PLANS,JSON.stringify(n)),!0):!1}deleteDailyPlan(e,t){const n=JSON.parse(localStorage.getItem($.DAILY_PLANS)||"{}");n[e]&&(n[e]=n[e].filter(i=>i.id!=t&&String(i.id)!==String(t)));for(const i of Object.keys(n))n[i]=n[i].filter(a=>a.id!=t&&String(a.id)!==String(t));localStorage.setItem($.DAILY_PLANS,JSON.stringify(n))}getWeeklyGoals(e){return JSON.parse(localStorage.getItem($.WEEKLY_GOALS)||"{}")[e]||[]}addWeeklyGoal(e,t){const n=JSON.parse(localStorage.getItem($.WEEKLY_GOALS)||"{}");n[e]||(n[e]=[]),n[e].push({id:Date.now(),text:t,isDone:!1}),localStorage.setItem($.WEEKLY_GOALS,JSON.stringify(n))}toggleWeeklyGoal(e,t){const n=JSON.parse(localStorage.getItem($.WEEKLY_GOALS)||"{}");let i=null;if(n[e]&&(i=n[e].find(a=>a.id==t||String(a.id)===String(t))),!i){for(const a of Object.keys(n))if(i=n[a].find(r=>r.id==t||String(r.id)===String(t)),i)break}return i?(i.isDone=!i.isDone,localStorage.setItem($.WEEKLY_GOALS,JSON.stringify(n)),!0):!1}deleteWeeklyGoal(e,t){const n=JSON.parse(localStorage.getItem($.WEEKLY_GOALS)||"{}");n[e]&&(n[e]=n[e].filter(i=>i.id!=t&&String(i.id)!==String(t)));for(const i of Object.keys(n))n[i]=n[i].filter(a=>a.id!=t&&String(a.id)!==String(t));localStorage.setItem($.WEEKLY_GOALS,JSON.stringify(n))}getStudyTargets(){const e={dailyStudyGoalHours:8,weeklyStudyGoalHours:56,dailyTestGoalCount:150,weeklyTestGoalCount:1e3};try{const t=JSON.parse(localStorage.getItem($.STUDY_TARGETS));return t&&typeof t=="object"?{...e,...t}:e}catch{return e}}setStudyTargets(e){localStorage.setItem($.STUDY_TARGETS,JSON.stringify(e))}saveStudyTargets(e){this.setStudyTargets(e)}getTodayEnergyLevel(){const e=new Date().toISOString().slice(0,10),t=JSON.parse(localStorage.getItem("planex_energy_levels")||"{}");return t[e]!==void 0?t[e]:75}setTodayEnergyLevel(e){const t=new Date().toISOString().slice(0,10),n=JSON.parse(localStorage.getItem("planex_energy_levels")||"{}");n[t]=e,localStorage.setItem("planex_energy_levels",JSON.stringify(n))}getGratitudeNotes(){return JSON.parse(localStorage.getItem($.GRATITUDE_NOTES)||"[]")}addGratitudeNote(e,t){const n=this.getGratitudeNotes();n.unshift({id:Date.now().toString(),prompt:e||"یک اتفاق کوچک که امروز به خاطرش خوشحالی؟",text:t,dateStr:new Date().toLocaleDateString("fa-IR")}),localStorage.setItem($.GRATITUDE_NOTES,JSON.stringify(n))}deleteGratitudeNote(e){let t=this.getGratitudeNotes();t=t.filter(n=>n.id!==e&&n.id!=e),localStorage.setItem($.GRATITUDE_NOTES,JSON.stringify(t))}getEvaluationData(){const e=this.getCurrentWeek(),t=e?e.id:1;return JSON.parse(localStorage.getItem("planex_evaluations")||"{}")[t]||{}}saveEvaluationItem(e,t,n=!0){const i=this.getCurrentWeek(),a=i?i.id:1,r=JSON.parse(localStorage.getItem("planex_evaluations")||"{}");r[a]||(r[a]={}),r[a][e]={text:t,isPositive:n},localStorage.setItem("planex_evaluations",JSON.stringify(r))}getCountdownEvents(){return JSON.parse(localStorage.getItem($.COUNTDOWN_EVENTS)||"[]")}addCountdownEvent(e,t,n,i){const a=this.getCountdownEvents();a.push({id:Date.now(),title:e,jy:t,jm:n,jd:i}),localStorage.setItem($.COUNTDOWN_EVENTS,JSON.stringify(a))}deleteCountdownEvent(e){let t=this.getCountdownEvents();t=t.filter(n=>n.id!=e),localStorage.setItem($.COUNTDOWN_EVENTS,JSON.stringify(t))}getInterruptions(e){let t=JSON.parse(localStorage.getItem($.INTERRUPTIONS)||"{}");return Array.isArray(t)&&(t={}),t[e]||[]}addInterruption(e,t,n,i){let a=JSON.parse(localStorage.getItem($.INTERRUPTIONS)||"{}");Array.isArray(a)&&(a={}),a[e]||(a[e]=[]),a[e].push({id:Date.now(),title:t,durationMins:n,category:i,date:new Date().toISOString()}),localStorage.setItem($.INTERRUPTIONS,JSON.stringify(a))}getRoutineChecklist(){return JSON.parse(localStorage.getItem("planex_routine_checklist")||"[]")}addRoutineChecklistItem(e){const t=this.getRoutineChecklist();t.unshift({id:Date.now().toString(),text:e,completed:!1}),localStorage.setItem("planex_routine_checklist",JSON.stringify(t))}toggleRoutineChecklistItem(e){const t=this.getRoutineChecklist(),n=t.find(i=>i.id===e||i.id==e);n&&(n.completed=!n.completed,localStorage.setItem("planex_routine_checklist",JSON.stringify(t)))}deleteRoutineChecklistItem(e){let t=this.getRoutineChecklist();t=t.filter(n=>n.id!==e&&n.id!=e),localStorage.setItem("planex_routine_checklist",JSON.stringify(t)),typeof window<"u"&&typeof window.triggerActionDrivenPush=="function"&&window.triggerActionDrivenPush(0)}getEarnedMedalBadge(){const t=(this.getGamification()||{level:1}).level||1;return t>=15?{icon:"👑",title:"استاد کنکور",color:"#eab308",desc:"سطح ۱۵+ (عالی)"}:t>=10?{icon:"💎",title:"غول تمرکز",color:"#06b6d4",desc:"سطح ۱۰+ (الماس)"}:t>=5?{icon:"🥇",title:"رتبه برتر",color:"#f59e0b",desc:"سطح ۵+ (طلا)"}:t>=3?{icon:"🥈",title:"داوطلب منظم",color:"#cbd5e1",desc:"سطح ۳+ (نقره)"}:{icon:"🥉",title:"مبتدی پرانرژی",color:"#b45309",desc:"سطح ۱+ (برنز)"}}getGamification(){const e={xp:0,level:1,streak:0,lastLogin:Date.now()};try{const t=JSON.parse(localStorage.getItem($.GAMIFICATION));return!t||typeof t!="object"?e:{...e,...t,xp:Number(t.xp)||0,level:Number(t.level)||1}}catch{return e}}addXP(e){const t=this.getGamification(),n=Number(e)||0;t.xp+=n;let i=t.level*1e3;for(;t.xp>=i;)t.xp-=i,t.level+=1,i=t.level*1e3;localStorage.setItem($.GAMIFICATION,JSON.stringify(t))}normalizeJalaliDate(e){if(!e)return"";let t=String(e).trim();t=t.replace(/[۰-۹]/g,i=>"۰۱۲۳۴۵۶۷۸۹".indexOf(i));const n=t.split("/").map(i=>parseInt(i,10));return n.length===3&&!n.some(isNaN)?`${n[0]}/${String(n[1]).padStart(2,"0")}/${String(n[2]).padStart(2,"0")}`:t}getTodayJalaliString(){const[e,t,n]=this.getTodayJalali();return`${e}/${String(t).padStart(2,"0")}/${String(n).padStart(2,"0")}`}getActivitiesByDate(e=null){try{const t=this.normalizeJalaliDate(e||this.getTodayJalaliString()),n=this.getJalaliDateTimestampRange(t),i=n.startTimestamp,a=n.endTimestamp;let r=[];try{const s=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),d=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),l=new Map;[...s,...d].forEach(c=>{if(!c||typeof c!="object")return;const g=c.id||`${c.date||c.dateStr}_${c.startTime||c.timestamp||c.subject}_${c.duration||c.minutes}`;l.set(g,c)}),r=Array.from(l.values())}catch{r=[]}return r.filter(s=>{if(!s||typeof s!="object")return!1;if(this.normalizeJalaliDate(s.dateStr||s.date)===t)return!0;const l=s.timestamp!==void 0?s.timestamp:s.createdAt!==void 0?s.createdAt:s.startTime;if(l!=null)try{const c=typeof l=="number"?l:typeof l=="string"&&/^\d{10,}$/.test(l.trim())?Number(l.trim()):null;if(c&&!isNaN(c)){if(c>=i&&c<=a)return!0;const g=new Date(c);if(!isNaN(g.getTime())){const[y,f,w]=this.gregorianToJalali(g.getFullYear(),g.getMonth()+1,g.getDate()),u=`${y}/${String(f).padStart(2,"0")}/${String(w).padStart(2,"0")}`;if(this.normalizeJalaliDate(u)===t)return!0}}}catch{}return!1})}catch{return[]}}getStudyMinutesByDate(e=null){const t=this.normalizeJalaliDate(e||this.getTodayJalaliString());return this.getActivitiesByDate(t).filter(i=>i?!(i.type==="non-study"||i.type==="non_study"||i.type==="break"||i.activityType==="non_study"||i.activityType==="non-study"||i.activityType==="break"||i.isStudy===!1||i.is_study_time===!1||i.counts_for_study===!1||i.isBreak===!0||i.is_break===!0||i.timerType==="break"||i.timerType===2):!1).reduce((i,a)=>{const r=Number(a.duration!==void 0?a.duration:a.minutes);return i+(isNaN(r)?0:Math.max(0,Math.ceil(r)))},0)}getStudyHoursByDate(e=null){return+(this.getStudyMinutesByDate(e)/60).toFixed(2)}getStudyStreak(){try{const[e,t,n]=this.getTodayJalali();let i=this.jalaliToJdn(e,t,n);const a=`${e}/${String(t).padStart(2,"0")}/${String(n).padStart(2,"0")}`;let r=0,s=i;this.getStudyMinutesByDate(a)>0&&r++,s--;for(let l=0;l<365;l++){const[c,g,y]=this.jdnToJalali(s),f=`${c}/${String(g).padStart(2,"0")}/${String(y).padStart(2,"0")}`;if(this.getStudyMinutesByDate(f)>0)r++,s--;else break}return r}catch{return 0}}getDailyTestCount(e=null){const t=this.normalizeJalaliDate(e||this.getTodayJalaliString());return this.getActivitiesByDate(t).filter(i=>i?!(i.type==="non-study"||i.type==="non_study"||i.type==="break"||i.activityType==="non_study"||i.activityType==="non-study"||i.activityType==="break"||i.isStudy===!1||i.is_study_time===!1||i.counts_for_study===!1||i.isBreak===!0||i.is_break===!0||i.timerType==="break"||i.timerType===2):!1).reduce((i,a)=>i+(Number(a.testCount!==void 0?a.testCount:a.tests)||0),0)}getRecordedTimerToday(){const e=this.getTodayJalaliString();return JSON.parse(localStorage.getItem($.RECORDED_TIMER)||"{}")[e]||{minutes:0,tests:0}}getTodayTotalMinutes(){return this.getStudyMinutesByDate(this.getTodayJalaliString())}getTodayTotalTests(){return this.getDailyTestCount(this.getTodayJalaliString())}_getWeekDayDateStr(e,t=new Date){const n=this.getCurrentWeekStartDate(t),i=new Date(n.getFullYear(),n.getMonth(),n.getDate()+e),[a,r,s]=this.gregorianToJalali(i.getFullYear(),i.getMonth()+1,i.getDate());return`${a}/${String(r).padStart(2,"0")}/${String(s).padStart(2,"0")}`}getWeekDayMinutes(e){const t=this._getWeekDayDateStr(e);return t?this.getStudyMinutesByDate(t):0}getWeekDayTests(e){const t=this._getWeekDayDateStr(e);return t?this.getDailyTestCount(t):0}getDayCategoryBreakdown(e){const t=this._getWeekDayDateStr(e);if(!t)return[];let n=[];try{n=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),(!Array.isArray(n)||n.length===0)&&(n=JSON.parse(localStorage.getItem("planex_study_logs")||"[]")),Array.isArray(n)||(n=[])}catch{n=[]}const i=`${e}|${t}|${n.length}`;if(this._breakdownMemoMap||(this._breakdownMemoMap={}),this._breakdownMemoMap[i])return this._breakdownMemoMap[i];const a=this.getTodayJalaliString(),r=t===a,s=Date.now(),d=24*60*60*1e3,l=n.filter(f=>{if(!f||typeof f!="object")return!1;const w=this.normalizeJalaliDate(f.dateStr||f.date);if(w===t)return!0;if(r&&(!w||w.indexOf("/")===-1)){const u=f.timestamp||f.createdAt||0;if(u&&s-u<=d)return!0}return!1});window.DEBUG_BREAKDOWN&&console.log(`[DEBUG] getDayCategoryBreakdown (dayIndex: ${e}): Date=${t}, Found=${l.length} sessions`,l);const c={},g=this.getCategories();l.forEach(f=>{const w=f.type==="study"||f.isStudy!==!1;let u="";f.categoryTitle&&f.categoryTitle.trim()?u=f.categoryTitle.trim():f.subject&&f.subject.trim()&&f.subject!=="مطالعه متمرکز"&&f.subject!=="فعالیت غیردرسی"?u=f.subject.trim():w?u="مطالعه درسی":u="فعالیت غیردرسی";const m=f.categoryCode||"other";let b=f.color;if(!b){const S=g.find(I=>I.title===u||I.code===m);b=S?S.color:w?"#0ea5e9":"#f59e0b"}c[u]||(c[u]={title:u,minutes:0,color:b}),c[u].minutes+=Math.max(1,Math.ceil(Number(f.duration||f.minutes)||1))});const y=Object.values(c).sort((f,w)=>w.minutes-f.minutes);return this._breakdownMemoMap[i]=y,y}getDailyStats(e=null){try{const t=this.normalizeJalaliDate(e||this.getTodayJalaliString()),n=String(t).split("/").map(Number);if(n.length===3&&!isNaN(n[0])&&!isNaN(n[1])&&!isNaN(n[2])){const l=this.jalaliToJdn(n[0],n[1],n[2]),c=this.getTodayJdn();if(l>c)return{date:t,studyMinutes:0,studyHours:0,nonStudyMinutes:0,totalTests:0,categoryMinutes:{},sessionsCount:0}}const i=this.getActivitiesByDate(t);let a=0,r=0,s=0;const d={};return i.forEach(l=>{const c=Number(l.duration!==void 0?l.duration:l.minutes),g=isNaN(c)?1:Math.max(1,Math.ceil(c)),y=Number(l.testCount!==void 0?l.testCount:l.tests)||0,f=l.categoryCode||l.category||"سایر";d[f]=(d[f]||0)+g,l.type==="study"||l.isStudy!==!1?(a+=g,s+=y):r+=g}),{date:t,studyMinutes:a,studyHours:+(a/60).toFixed(2),nonStudyMinutes:r,totalTests:s,categoryMinutes:d,sessionsCount:i.length}}catch(t){return console.warn("Error in getDailyStats:",t),{date:e||"",studyMinutes:0,studyHours:0,nonStudyMinutes:0,totalTests:0}}}getStudyStatsByPeriod(e="today"){let t=[];try{const f=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),w=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),u=new Map;Array.isArray(w)&&w.forEach(m=>{m&&(m.id||m.timestamp)&&u.set(m.id||`ts_${m.timestamp}_${m.duration}`,m)}),Array.isArray(f)&&f.forEach(m=>{m&&(m.id||m.timestamp)&&u.set(m.id||`ts_${m.timestamp}_${m.duration}`,m)}),t=Array.from(u.values())}catch{t=[]}const n=new Date;n.setHours(0,0,0,0);const i=n.getTime(),a=new Date,r=(a.getDay()+1)%7,s=new Date(a.getFullYear(),a.getMonth(),a.getDate()-r);s.setHours(0,0,0,0);const d=s.getTime(),l=typeof this.getTodayJalaliString=="function"?this.getTodayJalaliString():"";let c=0,g=0;const y=new Set;return t.forEach(f=>{if(!f||typeof f!="object")return;const w=Number(f.timestamp||f.createdAt||f.endTime||0),u=this.normalizeJalaliDate?this.normalizeJalaliDate(f.dateStr||f.date):f.dateStr||f.date;let m=!1;if(e==="today"?m=w>=i||u&&u===l:e==="week"?m=w>=d:e==="all"&&(m=!0),m&&!(f.type==="non-study"||f.type==="non_study"||f.type==="break"||f.activityType==="non_study"||f.activityType==="non-study"||f.activityType==="break"||f.isStudy===!1||f.is_study_time===!1||f.counts_for_study===!1||f.isBreak===!0||f.is_break===!0||f.timerType==="break"||f.timerType===2)){c+=Math.max(0,Math.ceil(Number(f.duration!==void 0?f.duration:f.minutes)||0)),g+=Math.max(0,Number(f.testCount!==void 0?f.testCount:f.tests)||0);const S=f.subject&&f.subject.trim()!=="مطالعه متمرکز"?f.subject.trim():f.categoryTitle||f.category;S&&S.trim()&&y.add(S.trim())}}),{studyMinutes:c,studyHours:+(c/60).toFixed(2),testCount:g,subjects:Array.from(y)}}recordTimerSession(e,t=0){const n=this.getTodayJalaliString(),i=JSON.parse(localStorage.getItem($.RECORDED_TIMER)||"{}");return i[n]||(i[n]={minutes:0,tests:0}),i[n].minutes+=e,i[n].tests+=t,localStorage.setItem($.RECORDED_TIMER,JSON.stringify(i)),this.addXP(e*2+t*3),i[n]}recordFocusSession(e={}){const{type:t="study",activityType:n=null,minutes:i=null,duration:a=null,tests:r=0,testCount:s=null,category:d=null,categoryCode:l=null,categoryTitle:c=null,subject:g="",studyMethod:y="",note:f="",rating:w=5,timerType:u="pomodoro",startTime:m=null,endTime:b=Date.now(),date:S=null,isBreak:I=!1,is_break:x=!1,is_study_time:k=null,counts_for_study:A=null,testCorrect:P=0,testWrong:M=0,testUnanswered:T=0,testPercentage:O=null}=e,C=!!(I||x||e.isBreak===!0||e.is_break===!0||u==="break"||u===2);let B=!(t==="non-study"||t==="non_study"||n==="non-study"||n==="non_study")&&!C;(k===!1||A===!1||e.is_study_time===!1||e.counts_for_study===!1)&&(B=!1);const U=B?"study":C?"break":"non-study",L=Math.ceil(Number(a??i??1))||1;if(L>720)return console.warn(`[db.recordFocusSession] Rejected orphaned session with duration: ${L} mins (>12h).`),null;const Y=Math.min(240,Math.max(1,L)),H=B?Math.max(0,parseInt(s??r)||0):0;let Q=null;const D=String(d||c||"").trim();if(B){const oe=this.getCategories();Q=oe.find(pe=>pe.code===l),!Q&&D&&(Q=oe.find(pe=>pe.title===D||pe.code===D)),Q||(Q=oe.find(pe=>Pe(pe))||{code:"ع-س",title:D||"مطالعه متمرکز",color:"#0ea5e9",icon:"📚",group:"علمی",isStudy:!0})}else{const oe=this.getNonStudyCategories();Q=oe.find(pe=>pe.code===l),!Q&&D&&(Q=oe.find(pe=>pe.title===D||pe.code===D)),Q||(Q={code:l||(C?"non_break":"غ-د"),title:D||(C?"پارت استراحت ☕":"فعالیت غیردرسی"),color:C?"#38bdf8":"#f59e0b",icon:C?"☕":"🧘",group:"غیردرسی",isStudy:!1})}const Z=Q.title,X=String(g||"").trim()||(B?"مطالعه متمرکز":C?"استراحت و ریکاوری":Z),xe=String(f||"").trim(),[ye,ce,h]=this.getTodayJalali();(new Date().getDay()+1)%7;const N=this.normalizeJalaliDate(S||`${ye}/${String(ce).padStart(2,"0")}/${String(h).padStart(2,"0")}`);let R=null,W=null;if(typeof b=="number"&&!isNaN(b)&&b>1e11)R=b;else if(typeof b=="string")if(b.includes(":")){const oe=b.split(":").map(Number);if(!isNaN(oe[0])&&!isNaN(oe[1])){const pe=new Date;pe.setHours(oe[0],oe[1],0,0),R=pe.getTime()}}else{const oe=Number(b);!isNaN(oe)&&oe>1e11&&(R=oe)}if(typeof m=="number"&&!isNaN(m)&&m>1e11)W=m;else if(typeof m=="string")if(m.includes(":")){const oe=m.split(":").map(Number);if(!isNaN(oe[0])&&!isNaN(oe[1])){const pe=new Date;pe.setHours(oe[0],oe[1],0,0),W=pe.getTime()}}else{const oe=Number(m);!isNaN(oe)&&oe>1e11&&(W=oe)}W&&!R?R=W+Y*60*1e3:R&&!W?W=R-Y*60*1e3:!W&&!R&&(R=Date.now(),W=R-Y*60*1e3);const de={id:"session_"+Date.now()+"_"+Math.random().toString(36).substr(2,4),type:U,category:Q.title,categoryCode:Q.code,categoryTitle:Q.title,color:Q.color||(B?"#0ea5e9":C?"#38bdf8":"#f59e0b"),icon:Q.icon||(B?"📚":C?"☕":"🧘"),isStudy:B,is_study_time:B,counts_for_study:B,isBreak:C,is_break:C,activityType:B?"study":C?"break":"non_study",subject:X,studyMethod:y||"",duration:Y,minutes:Y,testCount:H,tests:H,testCorrect:Math.max(0,parseInt(P)||0),testWrong:Math.max(0,parseInt(M)||0),testUnanswered:Math.max(0,parseInt(T)||0),testPercentage:O!==null?O:H>0?+((3*Math.max(0,parseInt(P)||0)-Math.max(0,parseInt(M)||0))/(3*H)*100).toFixed(1):null,note:xe,timerType:u||(C?"break":"pomodoro"),date:N,dateStr:N,startTime:W,endTime:R,timestamp:R},G=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]");G.unshift(de),G.length>5e3&&(G.length=5e3),localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(G));const ue=JSON.parse(localStorage.getItem("planex_study_logs")||"[]");ue.unshift(de),ue.length>5e3&&(ue.length=5e3),localStorage.setItem("planex_study_logs",JSON.stringify(ue));const we=JSON.parse(localStorage.getItem("planex_daily_stats")||"{}");we[N]||(we[N]={date:N,studyMinutes:0,studyHours:0,nonStudyMinutes:0,totalTests:0,categoryMinutes:{},sessionsCount:0});const ge=we[N];ge.sessionsCount=(ge.sessionsCount||0)+1;const Ae=Q.code||"other";ge.categoryMinutes[Ae]=(ge.categoryMinutes[Ae]||0)+Y,B?(ge.studyMinutes=(ge.studyMinutes||0)+Y,ge.studyHours=+(ge.studyMinutes/60).toFixed(2),ge.totalTests=(ge.totalTests||0)+H):ge.nonStudyMinutes=(ge.nonStudyMinutes||0)+Y,localStorage.setItem("planex_daily_stats",JSON.stringify(we)),B?this.recordTimerSession(Y,H):this.addXP(Math.round(Y*.5));const he=N||this.getTodayJalaliString(),Te=JSON.parse(localStorage.getItem("planex_subject_study_stats")||"{}");Te[he]||(Te[he]={});const Ie=X||Q.title;return Te[he][Ie]||(Te[he][Ie]={minutes:0,tests:0,category:Q.title,isStudy:B}),Te[he][Ie].minutes+=Y,Te[he][Ie].tests+=H,localStorage.setItem("planex_subject_study_stats",JSON.stringify(Te)),this._breakdownMemoMap={},de}saveStudyLogs(e){if(!Array.isArray(e))return[];try{let t=[];try{t=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),Array.isArray(t)||(t=[])}catch{t=[]}let n=[];try{n=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),Array.isArray(n)||(n=[])}catch{n=[]}const i=new Map;[...t,...n].forEach(r=>{if(!r||typeof r!="object")return;const s=r.id||`${r.date||r.dateStr}_${r.startTime||r.timestamp||r.subject}_${r.duration||r.minutes}`;i.set(s,r)}),e.forEach(r=>{if(!r||typeof r!="object")return;const s=r.id||`${r.date||r.dateStr}_${r.startTime||r.timestamp||r.subject}_${r.duration||r.minutes}`;!r.dateStr&&r.date&&(r.dateStr=r.date),!r.date&&r.dateStr&&(r.date=r.dateStr),i.set(s,r)});const a=Array.from(i.values());return a.sort((r,s)=>{const d=Number(r.timestamp||r.endTime||r.startTime)||0;return(Number(s.timestamp||s.endTime||s.startTime)||0)-d}),a.length>5e3&&(a.length=5e3),localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(a)),localStorage.setItem("planex_study_logs",JSON.stringify(a)),this._breakdownMemoMap={},a}catch(t){return console.error("[db] saveStudyLogs error:",t),e}}recordPomodoroSession(e={}){return this.recordFocusSession(e)}getRecentFocusSessions(e=10){try{const t=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),n=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),i=new Map;[...t,...n].forEach(r=>{if(!r||typeof r!="object")return;const s=r.id||`${r.date||r.dateStr}_${r.startTime||r.timestamp||r.subject}_${r.duration||r.minutes}`;i.set(s,r)});const a=Array.from(i.values());return a.sort((r,s)=>{const d=Number(r.timestamp||r.createdAt||0);return Number(s.timestamp||s.createdAt||0)-d}),a.slice(0,e)}catch{return[]}}deleteFocusSession(e){try{let t=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]");Array.isArray(t)||(t=[]),t=t.filter(i=>i&&i.id!==e),localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(t));let n=JSON.parse(localStorage.getItem("planex_study_logs")||"[]");Array.isArray(n)&&(n=n.filter(i=>i&&i.id!==e),localStorage.setItem("planex_study_logs",JSON.stringify(n)))}catch{}}sanitizeCorruptedStats(){try{const e=JSON.parse(localStorage.getItem("planex_daily_stats")||"{}");let t=!1;Object.keys(e).forEach(n=>{const i=e[n];i&&i.studyMinutes>1440&&(i.studyMinutes=Math.min(1440,Math.max(0,i.studyMinutes)),i.studyHours=+(i.studyMinutes/60).toFixed(2),t=!0)}),t&&localStorage.setItem("planex_daily_stats",JSON.stringify(e)),["planex_recent_activity_sessions","planex_study_logs"].forEach(n=>{try{const i=localStorage.getItem(n);if(i){const a=JSON.parse(i);if(Array.isArray(a)){const r=a.filter(s=>(Number((s==null?void 0:s.duration)||(s==null?void 0:s.minutes))||0)<=720);r.length!==a.length&&localStorage.setItem(n,JSON.stringify(r))}}}catch{}})}catch{}}getSubjectStudyStats(e=null){const t=this.normalizeJalaliDate(e||this.getTodayJalaliString()),n=this.getActivitiesByDate(t),i={};return n.forEach(a=>{if(!a||typeof a!="object")return;const s=!(a.type==="non-study"||a.type==="non_study"||a.type==="break"||a.activityType==="non_study"||a.activityType==="non-study"||a.activityType==="break"||a.isStudy===!1||a.is_study_time===!1||a.counts_for_study===!1||a.isBreak===!0||a.is_break===!0||a.timerType==="break"||a.timerType===2);let d="";a.categoryTitle&&a.categoryTitle.trim()?d=a.categoryTitle.trim():a.subject&&a.subject.trim()&&a.subject!=="مطالعه متمرکز"&&a.subject!=="فعالیت غیردرسی"?d=a.subject.trim():s?d="مطالعه متمرکز":d="فعالیت غیردرسی";const l=Math.max(0,Number(a.duration!==void 0?a.duration:a.minutes)||0),c=Math.max(0,Number(a.testCount!==void 0?a.testCount:a.tests)||0);i[d]||(i[d]={minutes:0,tests:0,category:d,isStudy:s}),i[d].minutes+=l,i[d].tests+=c}),i}getUserProfile(){const e={name:"",major:"",targetField:""};try{const t=JSON.parse(localStorage.getItem($.USER_PROFILE)),n=t&&typeof t=="object"?{...e,...t}:e,i=this.getEffectiveUserName();return i&&(n.name=i,n.nickname=i),n}catch{return e}}setUserProfile(e){try{localStorage.setItem($.USER_PROFILE,JSON.stringify(e))}catch(t){console.warn("[db] setUserProfile localStorage quota error:",t)}}exportAllData(){const e={};return Object.values($).forEach(t=>{e[t]=localStorage.getItem(t)}),JSON.stringify(e,null,2)}importAllData(e){try{const t=JSON.parse(e);return Object.keys(t).forEach(n=>{t[n]!==void 0&&t[n]!==null&&localStorage.setItem(n,t[n])}),!0}catch(t){return console.error("Import failed:",t),!1}}getThemeSettings(){const e={appTheme:"theme-dark-glass",themeMode:"mode-dark",fontFamily:"font-sahel"},t=localStorage.getItem($.ACTIVE_THEME);if(!t)return e;try{const n=JSON.parse(t);return{...e,...n,appTheme:"theme-dark-glass",themeMode:"mode-dark"}}catch{return e}}setThemeSettings(e){const n={...this.getThemeSettings(),...e};return localStorage.setItem($.ACTIVE_THEME,JSON.stringify(n)),n}getFlashcards(){try{const t=localStorage.getItem($.FLASHCARDS);if(t){const n=JSON.parse(t);if(Array.isArray(n)&&n.length>0)return n}}catch{}const e=[{id:"fc_seed_1",question:"تکنیک بازیابی فعال (Active Recall) چیست و چرا موثرترین روش مطالعه است؟",answer:"تلاش فعالانه مغز برای به یاد آوردن مطالب بدون نگاه کردن به کتاب؛ این فرآیند باعث تقویت مسیرهای سیناپسی و انتقال اطلاعات به حافظه بلندمدت می‌شود.",deck:"متدولوژی مطالعه",box:1,createdAt:"۱۴۰۵/۰۱/۰۱",createdTimestamp:Date.now()-864e5,nextReviewDate:Date.now()-1e3},{id:"fc_seed_2",question:"در جعبه لایتنر ۵ خانه‌ای، هر خانه چه فواصل زمانی برای مرور دارد؟",answer:"خانه ۱: روزانه (۱ روز) | خانه ۲: ۲ روز | خانه ۳: ۴ روز | خانه ۴: ۸ روز | خانه ۵: ۱۶ روز (تثبیت دائم در حافظه).",deck:"جعبه لایتنر",box:2,createdAt:"۱۴۰۵/۰۱/۰۱",createdTimestamp:Date.now()-1728e5,nextReviewDate:Date.now()-1e3},{id:"fc_seed_3",question:"بهترین استراتژی پومودورو برای یادگیری مباحث سنگین و تحلیلی چیست؟",answer:"پومودوروی پیشرفته ۵۰ دقیقه تمرکز عمیق بدون وقفه و ۱۰ دقیقه استراحت مطلق (آب خوردن و تنفس عمیق).",deck:"مدیریت زمان",box:1,createdAt:"۱۴۰۵/۰۱/۰۱",createdTimestamp:Date.now()-864e5,nextReviewDate:Date.now()-1e3}];try{localStorage.setItem($.FLASHCARDS,JSON.stringify(e))}catch{}return e}addFlashcard(e,t,n="عمومی"){const i=this.getFlashcards(),[a,r,s]=this.getTodayJalali(),d=String(e||"").trim(),l=String(t||"").trim();if(!d||!l)return null;const c={id:"fc_"+Date.now()+"_"+Math.floor(Math.random()*1e4),question:d,answer:l,deck:String(n||"عمومی").trim(),box:1,streak:0,reviewCount:0,createdAt:`${a}/${r}/${s}`,createdTimestamp:Date.now(),lastReviewed:null,nextReviewDate:Date.now()};return i.unshift(c),localStorage.setItem($.FLASHCARDS,JSON.stringify(i)),c}addFlashcards(e,t="هوش مصنوعی"){if(!Array.isArray(e)||e.length===0)return 0;const n=this.getFlashcards(),[i,a,r]=this.getTodayJalali();let s=0;return e.forEach((d,l)=>{if(!d)return;const c=typeof d=="object"&&(d.question||d.q)||"",g=typeof d=="object"&&(d.answer||d.a)||"",y=typeof d=="object"&&d.deck?d.deck:t,f=String(c).trim(),w=String(g).trim();f&&w&&(n.unshift({id:"fc_"+(Date.now()+l)+"_"+Math.floor(Math.random()*1e4),question:f,answer:w,deck:String(y||"هوش مصنوعی").trim(),box:1,streak:0,reviewCount:0,createdAt:`${i}/${a}/${r}`,createdTimestamp:Date.now(),lastReviewed:null,nextReviewDate:Date.now()}),s++)}),s>0&&localStorage.setItem($.FLASHCARDS,JSON.stringify(n)),s}reviewFlashcard(e,t){const n=this.getFlashcards(),i=n.find(d=>d.id===e||d.id==e);if(!i)return null;const a=[1,2,4,8,16],r=Date.now();t?(i.box=Math.min(5,(i.box||1)+1),i.streak=(i.streak||0)+1):(i.box=1,i.streak=0),i.lastReviewed=r,i.reviewCount=(i.reviewCount||0)+1;const s=a[(i.box||1)-1]||1;return i.nextReviewDate=r+s*24*60*60*1e3,localStorage.setItem($.FLASHCARDS,JSON.stringify(n)),i}deleteFlashcard(e){let t=this.getFlashcards();return t=t.filter(n=>n.id!==e&&n.id!=e),localStorage.setItem($.FLASHCARDS,JSON.stringify(t)),t}getLeitnerStats(){const e=this.getFlashcards(),t=Date.now(),n={total:e.length,due:0,mastered:0,boxes:{1:0,2:0,3:0,4:0,5:0}};return e.forEach(i=>{const a=Math.min(5,Math.max(1,i.box||1));n.boxes[a]=(n.boxes[a]||0)+1,a===5&&n.mastered++,(!i.nextReviewDate||i.nextReviewDate<=t)&&n.due++}),n}getTodayStudiedSubjects(e=null){try{const t=this.normalizeJalaliDate(e||this.getTodayJalaliString()),n=this.getActivitiesByDate(t).filter(a=>a?!(a.type==="non-study"||a.type==="non_study"||a.type==="break"||a.activityType==="non_study"||a.activityType==="non-study"||a.activityType==="break"||a.isStudy===!1||a.is_study_time===!1||a.counts_for_study===!1||a.isBreak===!0||a.is_break===!0||a.timerType==="break"||a.timerType===2):!1),i=new Set;if(n.forEach(a=>{const r=a.subject&&typeof a.subject=="string"&&a.subject.trim()&&a.subject!=="مطالعه متمرکز"&&a.subject!=="فعالیت غیردرسی"?a.subject.trim():a.categoryTitle||a.category||"";r&&r.trim()&&i.add(r.trim())}),t===this.getTodayJalaliString()){const a=this.getCurrentWeek();if(a&&a.id){const r=this.getHourlyLogs(a.id),s=(new Date().getDay()+1)%7,d=this.getCategories();Object.keys(r).forEach(l=>{if(l.startsWith(`${s}_`)){const c=r[l];if(c&&c.categoryCode){const g=d.find(f=>f.code===c.categoryCode);if(g?Pe(g):c.categoryCode.startsWith("ع")||c.categoryCode==="ع-س"){const f=c.subject&&c.subject.trim()?c.subject.trim():g?g.title:"";f&&f!=="مطالعه متمرکز"&&i.add(f)}}}})}}return Array.from(i)}catch{return[]}}getUserGroups(){try{let e=[];const t=localStorage.getItem($.USER_GROUPS);if(t){const n=JSON.parse(t);Array.isArray(n)&&(e=n.filter(i=>i&&(i.code||i.groupCode)))}if(e.length===0)for(const n of["planex_my_groups","planex_my_rooms","my_rooms"]){const i=localStorage.getItem(n);if(i)try{const a=JSON.parse(i);if(Array.isArray(a)&&a.length>0){const r=a.filter(s=>s&&(s.code||s.groupCode||s.id||s.room_code));if(r.length>0){e=r,localStorage.setItem($.USER_GROUPS,JSON.stringify(e));break}}}catch{}}if(e.length===0){const n=localStorage.getItem($.USER_GROUP_DATA);if(n){const i=JSON.parse(n);if(i&&(i.groupCode||i.code)){const a={code:String(i.groupCode||i.code).trim().toUpperCase(),name:String(i.groupName||i.name||`گروه ${i.groupCode}`).trim(),joinedAt:i.joinedAt||Date.now(),isOwner:!!i.isOwner,userId:i.userId||null};e=[a],localStorage.setItem($.USER_GROUPS,JSON.stringify(e)),localStorage.setItem($.ACTIVE_GROUP_CODE,a.code)}}}return e.map(n=>({code:String(n.code||n.groupCode||n.room_code||n.id||"").trim().toUpperCase(),name:String(n.name||n.title||n.groupName||`گروه ${n.code||n.groupCode||n.id}`).trim(),joinedAt:n.joinedAt||n.created_at||Date.now(),isOwner:!!(n.isOwner||n.is_owner||n.role==="owner"),userId:n.userId||n.creator_id||null})).filter(n=>n.code)}catch(e){return console.error("Error fetching user groups:",e),[]}}setUserGroups(e){try{Array.isArray(e)||(e=[]);const t=e.filter(s=>s&&(s.code||s.groupCode||s.room_code||s.id)).map(s=>({code:String(s.code||s.groupCode||s.room_code||s.id).trim().toUpperCase(),name:String(s.name||s.title||s.groupName||`گروه ${s.code||s.groupCode||s.id}`).trim(),joinedAt:s.joinedAt||s.created_at||Date.now(),isOwner:!!(s.isOwner||s.is_owner||s.role==="owner"),userId:s.userId||s.creator_id||null})),n=new Map;t.forEach(s=>n.set(s.code,s));const i=Array.from(n.values());localStorage.setItem($.USER_GROUPS,JSON.stringify(i)),localStorage.setItem("planex_my_groups",JSON.stringify(i)),localStorage.setItem("planex_my_rooms",JSON.stringify(i)),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("rooms-updated"));const a=this.getActiveGroupCode();if(!a||!n.has(a)){const s=i.length>0?i[0].code:null;s?localStorage.setItem($.ACTIVE_GROUP_CODE,s):localStorage.removeItem($.ACTIVE_GROUP_CODE)}const r=this.getActiveGroup();return r?localStorage.setItem($.USER_GROUP_DATA,JSON.stringify({groupCode:r.code,groupName:r.name,joinedAt:r.joinedAt,isOwner:r.isOwner,userId:r.userId})):localStorage.removeItem($.USER_GROUP_DATA),i}catch(t){return console.error("Error saving user groups:",t),[]}}removeUserGroup(e){try{if(!e)return[];const t=String(e).trim().toUpperCase();let n=this.getUserGroups();return n=n.filter(a=>String(a.code||a.groupCode||a.room_code||a.id||"").trim().toUpperCase()!==t),localStorage.setItem($.USER_GROUPS,JSON.stringify(n)),localStorage.setItem("planex_my_groups",JSON.stringify(n)),localStorage.setItem("planex_my_rooms",JSON.stringify(n)),this.getActiveGroupCode()===t&&(localStorage.removeItem($.ACTIVE_GROUP_CODE),localStorage.removeItem($.USER_GROUP_DATA),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data")),n.length>0?localStorage.setItem($.ACTIVE_GROUP_CODE,n[0].code):localStorage.removeItem($.ACTIVE_GROUP_CODE),n}catch(t){return console.error("Error removing user group:",t),[]}}getActiveGroupCode(){try{const e=localStorage.getItem($.ACTIVE_GROUP_CODE);return e&&e.trim()?e.trim().toUpperCase():null}catch{return null}}setActiveGroupCode(e){try{if(!e)return localStorage.removeItem($.ACTIVE_GROUP_CODE),localStorage.removeItem($.USER_GROUP_DATA),null;const t=String(e).trim().toUpperCase();localStorage.setItem($.ACTIVE_GROUP_CODE,t);const n=this.getActiveGroup();return n&&localStorage.setItem($.USER_GROUP_DATA,JSON.stringify({groupCode:n.code,groupName:n.name,joinedAt:n.joinedAt,isOwner:n.isOwner,userId:n.userId})),t}catch{return null}}getActiveGroup(){const e=this.getUserGroups();if(e.length===0)return null;const t=this.getActiveGroupCode();return t&&e.find(i=>i.code===t)||null}addUserGroup(e){try{if(!e)return null;const t=e.code||e.groupCode;if(!t)return null;const n=String(t).trim().toUpperCase(),i=String(e.name||e.groupName||`گروه ${n}`).trim(),a=this.getUserGroups(),r=a.findIndex(d=>d.code===n),s={code:n,name:i,joinedAt:e.joinedAt||Date.now(),isOwner:r>=0?e.isOwner??a[r].isOwner:!!e.isOwner,userId:e.userId||(r>=0?a[r].userId:null)};return r>=0?a[r]=s:a.unshift(s),this.setUserGroups(a),this.setActiveGroupCode(n),s}catch(t){return console.error("Error adding user group:",t),null}}removeUserGroup(e){try{const t=String(e||this.getActiveGroupCode()||"").trim().toUpperCase();if(!t)return!1;let n=this.getUserGroups();return n=n.filter(i=>i.code!==t),this.setUserGroups(n),!0}catch(t){return console.error("Error removing user group:",t),!1}}getUserGroupData(){const e=this.getActiveGroup();return e?{groupCode:e.code,groupName:e.name,joinedAt:e.joinedAt,isOwner:e.isOwner,userId:e.userId}:null}setUserGroupData(e){return this.addUserGroup(e)}leaveUserGroup(e=null){return this.removeUserGroup(e)}getOrCreatePersonalSyncToken(){let e=localStorage.getItem($.PERSONAL_SYNC_TOKEN);if(!e){const t="23456789ABCDEFGHJKLMNPQRSTUVWXYZ";e=`SYNC-${Array.from({length:5},()=>t[Math.floor(Math.random()*t.length)]).join("")}`,localStorage.setItem($.PERSONAL_SYNC_TOKEN,e)}return e}setPersonalSyncToken(e){if(e){const t=String(e).trim().toUpperCase();return localStorage.setItem($.PERSONAL_SYNC_TOKEN,t),t}return null}getPersonalSyncInfo(){const e=this.getOrCreatePersonalSyncToken(),t=localStorage.getItem($.LAST_PERSONAL_SYNC),n=t?parseInt(t,10):0;let i="هنوز در فضای ابری ذخیره نشده";if(n>0){const a=Date.now()-n,r=Math.floor(a/(60*1e3)),s=Math.floor(r/60);r<1?i="لحظاتی پیش":r<60?i=`${r} دقیقه پیش`:s<24?i=`${s} ساعت پیش`:i=`${Math.floor(s/24)} روز پیش`}return{token:e,lastSyncTimestamp:n,lastSyncText:i,hasSyncedBefore:n>0}}markPersonalSyncSuccess(){localStorage.setItem($.LAST_PERSONAL_SYNC,String(Date.now()))}getUserProfile(){let e={};try{e=JSON.parse(localStorage.getItem($.USER_PROFILE)||"{}")}catch{}const t=localStorage.getItem("planex_user_avatar");t&&(e.avatar=t,e.avatar_url=t,e.photo=t,e.photoUrl=t);const n=this.getEffectiveUserName();return n?(e.name=n,e.nickname=n):_e(e.name)&&(e.name="",e.nickname=""),e}setUserProfile(e){if(!e||typeof e!="object")return{};try{let t={};try{t=JSON.parse(localStorage.getItem($.USER_PROFILE)||"{}")}catch{}const n={...t,...e},i=e.avatar||e.avatar_url||e.photo||e.photoUrl||localStorage.getItem("planex_user_avatar");return i&&(localStorage.setItem("planex_user_avatar",i),n.avatar=i,n.avatar_url=i,n.photo=i,n.photoUrl=i),e.name&&!_e(e.name)&&(n.name=e.name,n.nickname=e.name,localStorage.setItem("planex_user_nickname",e.name),localStorage.setItem("planex_nickname",e.name),localStorage.setItem("planex_leaderboard_nickname",e.name)),localStorage.setItem($.USER_PROFILE,JSON.stringify(n)),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("profileUpdated")),n}catch(t){return console.warn("Error setting user profile:",t),e}}saveProfile(e){return this.setUserProfile(e)}getProfile(){return this.getUserProfile()}getJournalEntry(e){try{return(JSON.parse(localStorage.getItem("planex_journal_entries"))||{})[e]||{mood:"",rating:0,note:""}}catch{return{mood:"",rating:0,note:""}}}saveJournalEntry(e,t,n,i){try{const a=JSON.parse(localStorage.getItem("planex_journal_entries"))||{};a[e]={mood:t,rating:n,note:i},localStorage.setItem("planex_journal_entries",JSON.stringify(a))}catch{}}}const p=new po,ee={USER_ID:"planex_leaderboard_user_id",NICKNAME:"planex_leaderboard_nickname",TARGET:"planex_leaderboard_target",LAST_SYNC:"planex_leaderboard_last_sync",CACHE:"planex_leaderboard_cache",CACHE_DATE:"planex_leaderboard_cache_date",SYNC_CODE:"planex_sync_code",USER_GROUP_DATA:"planex_user_group_data",GROUP_CACHE_PREFIX:"planex_group_cache_",GROUP_ROSTER_PREFIX:"planex_group_roster_",EARLY_BIRD_HISTORY:"planex_early_bird_history",EARLY_BIRD_CACHE:"planex_early_bird_cache",EARLY_BIRD_CACHE_DATE:"planex_early_bird_cache_date"},Be={START_MIN:5*60,END_MIN:7*60};function ht(o){if(!o)return o;const e=parseFloat(o.study_minutes||o.studyMinutes||o.total_study_minutes||0),t=parseInt(o.test_count||o.testCount||o.total_tests||0)||0;let n=parseFloat(o.weekly_study_minutes||o.weeklyStudyMinutes||0),i=parseInt(o.weekly_test_count||o.weeklyTestCount||0)||0;!n&&e>0&&(n=e),!i&&t>0&&(i=t);const a=parseFloat(o.alltime_study_minutes||o.allTimeStudyMinutes||o.total_study_minutes_alltime||0),r=parseInt(o.alltime_test_count||o.allTimeTestCount||o.total_tests_alltime||0)||0;return{...o,studyMinutes:Math.round(e),testCount:t,weeklyStudyMinutes:Math.round(Math.max(n,e)),weeklyTestCount:Math.max(i,t),allTimeStudyMinutes:Math.round(Math.max(a,n,e)),allTimeTestCount:Math.max(r,i,t)}}const _={_studyHeartbeatInterval:null,_currentStudySubject:"",isCurrentStudyingActive(){try{if(typeof window<"u"&&typeof window.isUserStudyingNow=="function")return window.isUserStudyingNow();const o=typeof window<"u"?window.appState:null;if(!o||!!!(o.isPomodoroRunning||o.isStopwatchRunning))return!1;const t=o.focusTimerType===2,n=o.focusActivityMode==="non-study"&&!t;return!t&&!n}catch{return!1}},isMemberStudying(o){if(!o||!o.isStudying)return!1;try{const i=this.getUserProfile();if(o.userId===i.userId||o.isCurrentUser||o.isUser)return this.isCurrentStudyingActive()}catch{}const e=Number(o.lastHeartbeat)||0;if(!e)return!1;const t=15*60*1e3,n=Date.now()-e;return n>=0&&n<t},exportAppState(){try{const o=p.exportAllDataJSON();return JSON.parse(o)}catch(o){console.warn("[Sync] db.exportAllDataJSON failed, using fallback:",o);const e={};for(let t=0;t<localStorage.length;t++){const n=localStorage.key(t);if(n&&(n.startsWith("planex_")||n.startsWith("theme_")||n.startsWith("app_")||n.startsWith("timer_")))try{e[n]=JSON.parse(localStorage.getItem(n))}catch{e[n]=localStorage.getItem(n)}}return e}},importAppState(o){if(!o)return!1;try{return p.importAllDataJSON(o)}catch(e){return console.error("[Sync] db.importAllDataJSON failed:",e),!1}},getOrCreateSyncCode(){let o=localStorage.getItem(ee.SYNC_CODE);if(!o){const e="23456789ABCDEFGHJKLMNPQRSTUVWXYZ";o=`PLX-${Array.from({length:3},()=>e[Math.floor(Math.random()*e.length)]).join("")}`,localStorage.setItem(ee.SYNC_CODE,o)}return o},setSyncCode(o){if(o){const e=String(o).trim().toUpperCase();localStorage.setItem(ee.SYNC_CODE,e)}},async pushSyncCode(o=null){const e=o||this.getOrCreateSyncCode(),t=this.getUserProfile(),n=this.exportAppState(),i=localStorage.getItem("planex_user_avatar")||t.avatar||t.avatar_url||"";i&&n&&typeof n=="object"&&(n.planex_user_avatar=i);const a={code:e,syncCode:e,userId:t.userId,nickname:t.nickname,target:t.target,avatarUrl:i,avatar_url:i,avatar:i,backupData:n,appState:n,updatedAt:Date.now()};try{let r=await fetch(`${le}/api/sync-code.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(r.ok||(r=await fetch(`${le}/api/v1/sync-code.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)})),r.ok)return{success:!0,code:e,message:"کد کپی و اطلاعات شما روی سرور ذخیره شد."};const s=await r.json().catch(()=>({}));throw new Error(s.message||`خطای سرور (${r.status})`)}catch(r){return console.warn("[Sync] Push sync code failed:",r),{success:!1,code:e,message:"خطا در ذخیره ابری داده‌ها: "+r.message}}},async applySyncCode(o){if(!o||!o.trim())return{success:!1,message:"لطفاً کد همگام‌سازی را وارد کنید."};const e=o.trim().toUpperCase();try{let t=await fetch(`${le}/api/sync-code.php?code=${e}`);t.ok||(t=await fetch(`${le}/api/v1/sync-code.php?code=${e}`)),t.ok||(t=await fetch(`${le}/api/leaderboard.php?sync_code=${e}`));const n=await t.text();let i=null;try{i=n?JSON.parse(n):null}catch{i=null}if(t.ok&&i&&i.success&&i.data){const a=i.data,r=a.backupData||a.appState||null;if(r&&this.importAppState(r),a.userId&&localStorage.setItem(ee.USER_ID,a.userId),a.nickname&&(localStorage.setItem(ee.NICKNAME,a.nickname),p&&typeof p.setUserProfile=="function")){const d=p.getUserProfile()||{};p.setUserProfile({...d,name:a.nickname})}a.target&&localStorage.setItem(ee.TARGET,a.target);const s=a.avatarUrl||a.avatar||a.avatar_url||(r==null?void 0:r.planex_user_avatar)||null;if(s){if(localStorage.setItem("planex_user_avatar",s),p&&typeof p.setUserProfile=="function"){const d=p.getUserProfile()||{};p.setUserProfile({...d,avatar:s,avatar_url:s,photo:s,photoUrl:s})}try{const d=JSON.parse(localStorage.getItem("planex_auth_user")||"{}");d&&typeof d=="object"&&(d.avatar_url=s,d.photo_url=s,d.avatar=s,localStorage.setItem("planex_auth_user",JSON.stringify(d)),localStorage.setItem("planex_user_account",JSON.stringify(d)))}catch{}typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("profileUpdated"))}return localStorage.setItem(ee.SYNC_CODE,e),{success:!0,data:a,message:`🎉 تمام اطلاعات، روتین‌ها و ساعات مطالعه با موفقیت از کد «${e}» بازیابی و اعمال شد!`}}return{success:!1,message:(i==null?void 0:i.message)||`کد «${e}» نامعتبر است یا دیتایی برای آن ذخیره نشده است.`}}catch(t){return console.error("[Sync] Sync code lookup failed:",t),{success:!1,message:"خطا در ارتباط با سرور ابری هنگام بازیابی کد: "+t.message}}},getOrCreateUserId(){let o=localStorage.getItem(ee.USER_ID);if(!o){const e=localStorage.getItem("planex_device_sync_id");e?o=e:o="usr_"+Date.now().toString(36)+"_"+Math.random().toString(36).substring(2,7),localStorage.setItem(ee.USER_ID,o)}return o},getUserProfile(){var l,c,g;const o=p.getUserProfile()||{};let e=null;try{e=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}")}catch{}try{const y=(g=(c=(l=window.Telegram)==null?void 0:l.WebApp)==null?void 0:c.initDataUnsafe)==null?void 0:g.user;if(y){const f=[y.first_name,y.last_name].filter(Boolean).join(" ").trim(),w=y.photo_url||"",u=localStorage.getItem(ee.NICKNAME)||e&&(e.full_name||e.name)||o.name||"";if((!u||_e(u))&&f&&(localStorage.setItem(ee.NICKNAME,f),p&&typeof p.setUserProfile=="function")){const b=p.getUserProfile()||{};p.setUserProfile({...b,name:f})}w&&(!e||!e.avatar_url)&&(e=e||{},e.avatar_url=w,e.photo_url=w,localStorage.setItem("planex_auth_user",JSON.stringify(e)))}}catch{}const n=localStorage.getItem("planex_user_avatar")||""||e&&(e.avatar_url||e.avatarUrl||e.photo_url||e.avatar)||o.avatar||o.avatar_url||o.photo||o.photoUrl||"",i=localStorage.getItem(ee.NICKNAME)||localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_nickname")||e&&(e.full_name||e.name||e.nickname)||o.nickname||o.name||"",a=i&&!_e(i)?i.trim():"",r=localStorage.getItem(ee.TARGET)||o.targetField||o.major||o.target||"",s=e&&(e.id||e.telegram_id||e.uid)||this.getOrCreateUserId(),d=e&&(e.phone||e.phone_number)||o.phone||"";return{nickname:a,target:r,userId:s,id:s,telegram_id:(e==null?void 0:e.telegram_id)||s,uid:s,user_id:s,phone:d,phone_number:d,syncCode:this.getOrCreateSyncCode(),avatar_url:n,avatarUrl:n,avatar:n,photo_url:n,photoUrl:n}},saveUserProfile(o,e,t){const n=o?o.trim():"",i=e!==void 0?e.trim():"";if(n&&!_e(n)&&(localStorage.setItem(ee.NICKNAME,n),localStorage.setItem("planex_user_nickname",n),localStorage.setItem("planex_nickname",n),localStorage.setItem("planex_leaderboard_nickname",n)),i&&localStorage.setItem(ee.TARGET,i),t)try{localStorage.setItem("planex_user_avatar",t)}catch{}try{const a=localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account");let r=a?JSON.parse(a):{};n&&!_e(n)&&(r.full_name=n,r.name=n,r.nickname=n),t&&(r.avatar_url=t,r.photo_url=t,r.avatar=t),localStorage.setItem("planex_auth_user",JSON.stringify(r)),localStorage.setItem("planex_user_account",JSON.stringify(r))}catch{}try{const a=localStorage.getItem("planex_user_profile");let r=a?JSON.parse(a):{};n&&!_e(n)&&(r.name=n,r.nickname=n),i&&(r.targetField=i,r.major=i,r.target=i),t&&(r.avatar=t,r.avatar_url=t,r.photo=t,r.photoUrl=t),localStorage.setItem("planex_user_profile",JSON.stringify(r))}catch{}},getUserGroups(){return p&&typeof p.getUserGroups=="function"?p.getUserGroups():[]},setUserGroups(o){return p&&typeof p.setUserGroups=="function"?p.setUserGroups(o):[]},getActiveGroupCode(){return p&&typeof p.getActiveGroupCode=="function"?p.getActiveGroupCode():null},setActiveGroupCode(o){return p&&typeof p.setActiveGroupCode=="function"?p.setActiveGroupCode(o):null},getActiveGroup(){return p&&typeof p.getActiveGroup=="function"?p.getActiveGroup():null},getUserGroupData(){return this.getActiveGroup()},setUserGroupData(o){return o&&p&&typeof p.addUserGroup=="function"?p.addUserGroup(o):null},async deleteGroup(o=null){const e=String(o||this.getActiveGroupCode()||"").trim().toUpperCase();if(!e)return{success:!1,message:"کد گروه مشخص نشده است."};const t=this.getUserProfile();try{await fetch(`${le}/api/rooms/delete.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:e,user_id:t.userId,phone:t.phone,creator_id:t.userId})})}catch(n){console.warn("[LeaderboardService] Backend delete room warning:",n)}return localStorage.removeItem(`${ee.GROUP_CACHE_PREFIX}${e}`),localStorage.removeItem(`${ee.GROUP_ROSTER_PREFIX}${e}`),localStorage.removeItem(`squad_pending_${e}`),p&&typeof p.removeUserGroup=="function"&&p.removeUserGroup(e),this.getActiveGroupCode()===e&&(this.setActiveGroupCode(null),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data")),await this.fetchMyRooms().catch(()=>{}),{success:!0,message:`گروه «${e}» با موفقیت به طور کامل حذف شد.`}},async fetchUserGroups(o=!0){const e=this.getUserProfile();try{let t=null;try{t=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}const n=e.phone||(t==null?void 0:t.phone)||(t==null?void 0:t.phone_number)||(()=>{try{const d=JSON.parse(localStorage.getItem("planex_user_profile")||"{}");return d.phone||d.mobile||""}catch{return""}})()||"",i=e.userId||(t==null?void 0:t.id)||(t==null?void 0:t.telegram_id)||(t==null?void 0:t.uid)||"",a=new URLSearchParams;i&&a.set("user_id",i),n&&a.set("phone",n),o&&(a.set("force","1"),a.set("_t",Date.now().toString()));const s=await(await fetch(`${le}/api/rooms/my-rooms.php?${a.toString()}`,{cache:"no-store",headers:{"Cache-Control":"no-cache"}})).json();if(s&&s.success&&Array.isArray(s.rooms))if(s.rooms.length>0){p&&typeof p.setUserGroups=="function"&&p.setUserGroups(s.rooms);try{localStorage.setItem("planex_my_groups",JSON.stringify(s.rooms)),localStorage.setItem("planex_my_rooms",JSON.stringify(s.rooms))}catch{}const d=this.getActiveGroupCode();if((!d||!s.rooms.some(l=>(l.code||l.groupCode)===d))&&s.rooms.length>0){const l=s.rooms[0].code||s.rooms[0].groupCode;l&&this.setActiveGroupCode(l)}return window.dispatchEvent(new CustomEvent("groups-updated",{detail:s.rooms})),window.dispatchEvent(new CustomEvent("groups-changed",{detail:s.rooms})),s.rooms}else{const d=this.getUserGroups();return d&&d.length>0?(console.warn("[LeaderboardService] fetchUserGroups received 0 rooms from server, preserving",d.length,"local groups."),d):(p&&typeof p.setUserGroups=="function"&&p.setUserGroups([]),window.dispatchEvent(new CustomEvent("groups-updated",{detail:[]})),window.dispatchEvent(new CustomEvent("groups-changed",{detail:[]})),[])}}catch(t){console.warn("[LeaderboardService] fetchUserGroups error:",t)}return this.getUserGroups()},async fetchMyRooms(o=!0){return this.fetchUserGroups(o)},async fetchPublicRooms(){try{const e=await(await fetch(`${le}/api/rooms/public.php`)).json();if(e&&e.success&&Array.isArray(e.rooms))return e.rooms}catch(o){console.warn("[LeaderboardService] fetchPublicRooms error:",o)}return[]},async fetchPendingRequests(o=null){const e=o||this.getActiveGroupCode();if(!e)return[];try{const t=this.getUserProfile(),i=await(await fetch(`${le}/api/rooms/requests.php?room_code=${encodeURIComponent(e)}&user_id=${encodeURIComponent(t.userId)}`)).json();if(i&&i.success&&Array.isArray(i.requests))return i.requests}catch(t){console.warn("[LeaderboardService] fetchPendingRequests error:",t)}return[]},async handleMembershipRequest(o,e,t="approve"){const n=o||this.getActiveGroupCode(),i=this.getUserProfile();try{return await(await fetch(`${le}/api/rooms/requests.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:n,action:t,target_user_id:e,admin_id:i.userId,phone:i.phone})})).json()}catch(a){return console.error("[LeaderboardService] handleMembershipRequest error:",a),{success:!1,message:a.message}}},async approveMember(o,e){const t=String(o||this.getActiveGroupCode()||"").trim().toUpperCase();if(!t||!e)return{success:!1,message:"شناسه گروه یا کاربر نامعتبر است."};const n=await this.handleMembershipRequest(t,e,"approve"),i=this.getGroupRoster(t),a=i.findIndex(r=>r.userId===e||r.id===e||r.phone===e);if(a>=0)i[a].status="approved";else{const s=(window.groupPendingRequests||[]).find(d=>(d.userId||d.user_id||d.phone)===e)||{};i.push({userId:e,nickname:s.nickname||s.name||"کاربر جدید",target:s.target||"کنکور سراسری",joinedAt:Date.now(),isOwner:!1,status:"approved"})}return this.saveGroupRoster(t,i),Array.isArray(window.groupPendingRequests)&&(window.groupPendingRequests=window.groupPendingRequests.filter(r=>(r.userId||r.user_id||r.phone)!==e)),this.fetchLeaderboard(null,!0,t).catch(()=>{}),{success:!0,message:n&&n.message?n.message:"کاربر با موفقیت به گروه اضافه شد"}},async rejectMember(o,e){const t=String(o||this.getActiveGroupCode()||"").trim().toUpperCase();if(!t||!e)return{success:!1,message:"شناسه گروه یا کاربر نامعتبر است."};const n=await this.handleMembershipRequest(t,e,"reject"),a=this.getGroupRoster(t).filter(r=>r.userId!==e&&r.id!==e&&r.phone!==e);return this.saveGroupRoster(t,a),Array.isArray(window.groupPendingRequests)&&(window.groupPendingRequests=window.groupPendingRequests.filter(r=>(r.userId||r.user_id||r.phone)!==e)),{success:!0,message:n&&n.message?n.message:"درخواست عضویت رد شد"}},async toggleGroupPrivacy(o,e){const t=o||this.getActiveGroupCode();try{const i=await(await fetch(`${le}/api/rooms/toggle-type.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:t,is_private:e?1:0})})).json();if(i&&i.success){const a=this.getUserGroups(),r=a.find(s=>(s.code||s.groupCode)===t);return r&&(r.is_private=e?1:0,r.type=e?"private":"public",p&&typeof p.setUserGroups=="function"&&p.setUserGroups(a)),i}return i}catch(n){console.error("[LeaderboardService] toggleGroupPrivacy error:",n)}return{success:!1,message:"خطا در برقراری ارتباط با سرور"}},generateGroupCode(){return`PLX-${Math.floor(1e3+Math.random()*9e3)}`},async createPrivateGroup(o,e=!1,t={}){const n=this.generateGroupCode(),i=this.getUserProfile(),a=o&&o.trim()?o.trim():`گروه ${n}`,r={code:n,groupCode:n,name:a,groupName:a,joinedAt:Date.now(),isOwner:!0,is_private:e?1:0,type:e?"private":"public",status:"approved",userId:i.userId,category:t.category||"general",capacity:t.capacity||600,announcement:t.announcement||""};p&&typeof p.addUserGroup=="function"&&p.addUserGroup(r);try{await fetch(`${le}/api/rooms/create.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:n,title:a,phone:i.phone,creator_phone:i.phone,creator_id:i.userId,admin_id:i.userId,user_id:i.userId,is_private:e?1:0,type:e?"private":"public",user:{name:i.nickname,avatar_url:i.avatarUrl},category:t.category||"general",announcement:t.announcement||""})})}catch(d){console.warn("[LeaderboardService] Backend create room call warning:",d)}const s=[{userId:i.userId,nickname:i.nickname,target:i.target,joinedAt:Date.now(),isOwner:!0,status:"approved"}];return this.saveGroupRoster(n,s),await this.syncUserScore(!0,n),{success:!0,groupCode:n,groupName:a,groupData:r}},async createGroup(o,e=!1,t={}){return this.createPrivateGroup(o,e,t)},isUserVerified(){var i,a,r;let o=null;try{o=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}const e=this.getUserProfile(),t=(r=(a=(i=window.Telegram)==null?void 0:i.WebApp)==null?void 0:a.initDataUnsafe)==null?void 0:r.user;return!!(t&&t.id||o&&(o.id||o.telegram_id||o.phone||o.phone_number)||e&&(e.phone||e.phone_number||e.telegram_id||e.userId&&!e.userId.startsWith("usr_"))||localStorage.getItem("planex_user_phone"))},async joinPrivateGroup(o,e=null){if(!o||!o.trim())return{success:!1,message:"لطفاً کد ۶ رقمی یا شماره گروه را وارد نمایید."};const t=String(o).trim().toUpperCase().replace(/[^A-Z0-9-]/g,"");if(t.length<4)return{success:!1,message:"فرمت کد گروه نامعتبر است (مثال: PLX-4829)."};const n=this.getUserProfile();if(!this.isUserVerified())return typeof window.openLoginModal=="function"?window.openLoginModal():window.appState&&(window.appState.activeModal="login",window.renderApp&&window.renderApp()),{success:!1,requiresVerification:!0,message:"برای پیوستن به گروه، لطفاً ابتدا حساب کاربری خود را در ربات تلگرام یا اپلیکیشن تایید نمایید."};let i=null;try{i=await(await fetch(`${le}/api/rooms/join.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:t,phone:n.phone,user_phone:n.phone,user_id:n.userId,nickname:n.nickname,user:{name:n.nickname,avatar_url:n.avatarUrl},bypass_pending:!0,auto_approve:!0,action:"join"})})).json().catch(()=>null)}catch(c){console.warn("[LeaderboardService] Backend join call warning:",c)}const a=i&&i.room?i.room:null,r=e||(a?a.title:`گروه ${t}`),s={code:t,groupCode:t,name:r,groupName:r,joinedAt:Date.now(),isOwner:!1,status:"approved",is_private:a&&a.is_private?1:0,userId:n.userId};p&&typeof p.addUserGroup=="function"&&p.addUserGroup(s);const d=this.getGroupRoster(t),l=d.findIndex(c=>c.userId===n.userId||c.id===n.userId);return l<0?d.push({userId:n.userId,nickname:n.nickname,target:n.target,joinedAt:Date.now(),isOwner:!1,status:"approved"}):(d[l].status="approved",d[l].nickname=n.nickname||d[l].nickname,d[l].target=n.target||d[l].target),this.saveGroupRoster(t,d),this.setActiveGroupCode(t),await this.syncUserScore(!0,t).catch(()=>{}),await this.fetchLeaderboard(null,!0,t).catch(()=>{}),{success:!0,pending:!1,groupCode:t,groupName:r,groupData:s,message:"با موفقیت به گروه پیوستید! 🎉"}},async joinGroupByCode(o,e=null){return this.joinPrivateGroup(o,e)},async joinGroupByLink(o){let e=o;if(e&&e.includes("group=")){const t=e.match(/group=([^&]+)/);t&&(e=t[1])}return this.joinPrivateGroup(e)},getGroupRoster(o){if(!o)return[];try{const e=localStorage.getItem(`${ee.GROUP_ROSTER_PREFIX}${o}`);if(!e)return[];const t=JSON.parse(e);return Array.isArray(t)?t:[]}catch{return[]}},saveGroupRoster(o,e){if(!(!o||!Array.isArray(e)))try{localStorage.setItem(`${ee.GROUP_ROSTER_PREFIX}${o}`,JSON.stringify(e))}catch{}},getTodayDateStr(){try{return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Tehran",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date)}catch{return new Date().toISOString().split("T")[0]}},getTodayStats(){const o=p.getTodayJalaliString(),e=p.getStudyMinutesByDate(o),t=+(e/60).toFixed(2),n=p.getDailyTestCount(o),i=typeof p.getTodayStudiedSubjects=="function"?p.getTodayStudiedSubjects(o):[],a=this.getTodayDateStr(),r=o;return{studyMinutes:e,studyHours:t,testCount:n,subjects:Array.isArray(i)?i:[],gregorianDate:a,jalaliDateStr:r}},getPersianWeekWindow(o=new Date){const e=new Date(o),t=(e.getDay()+1)%7,n=new Date(e.getFullYear(),e.getMonth(),e.getDate()-t,0,0,0,0),i=new Date(n.getFullYear(),n.getMonth(),n.getDate()+6,23,59,59,999),a=[],r=[];for(let s=0;s<7;s++){const d=new Date(n.getFullYear(),n.getMonth(),n.getDate()+s),l=d.getFullYear(),c=String(d.getMonth()+1).padStart(2,"0"),g=String(d.getDate()).padStart(2,"0");if(r.push(`${l}-${c}-${g}`),p&&typeof p.gregorianToJalali=="function"){const[y,f,w]=p.gregorianToJalali(l,d.getMonth()+1,d.getDate());a.push(`${y}/${String(f).padStart(2,"0")}/${String(w).padStart(2,"0")}`)}}return{satDate:n,friDate:i,startTimestamp:n.getTime(),endTimestamp:i.getTime(),satDateStr:`${n.getFullYear()}-${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`,weekJalaliDates:a,weekGregorianDates:r}},getWeeklyStats(){const o=this.getPersianWeekWindow();let e=0,t=0;const n=new Set;let i=[];try{const r=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),s=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),d=new Map;Array.isArray(s)&&s.forEach(l=>{l&&(l.id||l.timestamp)&&d.set(l.id||`ts_${l.timestamp}_${l.duration}`,l)}),Array.isArray(r)&&r.forEach(l=>{l&&(l.id||l.timestamp)&&d.set(l.id||`ts_${l.timestamp}_${l.duration}`,l)}),i=Array.from(d.values())}catch{i=[]}i.forEach(r=>{if(!r||typeof r!="object")return;const s=Number(r.timestamp||r.createdAt||r.endTime||0),d=p&&typeof p.normalizeJalaliDate=="function"?p.normalizeJalaliDate(r.dateStr||r.date):r.dateStr||r.date,l=s>=o.startTimestamp&&s<=o.endTimestamp,c=d&&o.weekJalaliDates.includes(d);if((l||c)&&!(r.type==="non-study"||r.type==="non_study"||r.type==="break"||r.activityType==="non_study"||r.activityType==="non-study"||r.activityType==="break"||r.isStudy===!1||r.is_study_time===!1||r.counts_for_study===!1||r.isBreak===!0||r.is_break===!0||r.timerType==="break"||r.timerType===2)){e+=Math.max(0,Math.ceil(Number(r.duration!==void 0?r.duration:r.minutes)||0)),t+=Math.max(0,Number(r.testCount!==void 0?r.testCount:r.tests)||0);const y=r.subject&&r.subject.trim()!=="مطالعه متمرکز"?r.subject.trim():r.categoryTitle||r.category;y&&y.trim()&&n.add(y.trim())}});try{const r=JSON.parse(localStorage.getItem("planex_recorded_timer")||"{}");let s=0,d=0;o.weekJalaliDates.forEach(l=>{r[l]&&(s+=Number(r[l].minutes)||0,d+=Number(r[l].tests)||0)}),e=Math.max(e,s),t=Math.max(t,d)}catch{}if(p&&typeof p.getDailyStats=="function"){let r=0,s=0;o.weekJalaliDates.forEach(d=>{try{const l=p.getDailyStats(d);l&&(r+=Number(l.studyMinutes)||0,s+=Number(l.totalTests)||0)}catch{}}),e=Math.max(e,r),t=Math.max(t,s)}const a=this.getTodayStats();return e=Math.max(e,Number(a.studyMinutes)||0),t=Math.max(t,Number(a.testCount)||0),{studyMinutes:e,studyHours:+(e/60).toFixed(2),testCount:t,subjects:Array.from(n),weekWindow:o}},calculateMemberPeriodStats(o,e="week",t=null){if(!o)return{totalMinutes:0,totalTests:0};const n=t||this.getPersianWeekWindow(),i=!!(o.isUser||o.isCurrentUser||this.getUserProfile()&&o.userId===this.getUserProfile().userId),a=Number(o.studyMinutes||o.study_minutes||0),r=Number(o.testCount||o.test_count||0);if(e==="today"){let u=a,m=r;if(i){const b=this.getTodayStats();u=Math.max(u,Number((b==null?void 0:b.studyMinutes)||0)),m=Math.max(m,Number((b==null?void 0:b.testCount)||0))}return{totalMinutes:Math.round(u),totalTests:Math.round(m)}}let s=0,d=0;const l=u=>{if(!u||typeof u!="object")return;const m=Number(u.duration!==void 0?u.duration:u.minutes!==void 0?u.minutes:u.studyMinutes||u.study_minutes||0)||0,b=Number(u.testCount!==void 0?u.testCount:u.tests!==void 0?u.tests:u.test_count||0)||0;if(!(u.type==="non-study"||u.type==="non_study"||u.type==="break"||u.activityType==="non_study"||u.activityType==="non-study"||u.activityType==="break"||u.isStudy===!1||u.is_study_time===!1||u.counts_for_study===!1||u.isBreak===!0||u.is_break===!0||u.timerType==="break"||u.timerType===2)){if(e==="all")s+=Math.max(0,m),d+=Math.max(0,b);else if(e==="week"){const I=Number(u.timestamp||u.createdAt||u.endTime||0),x=String(u.dateStr||u.date||u.jalaliDate||"").trim(),k=x.replace(/\//g,"-"),A=I>=n.startTimestamp&&I<=n.endTimestamp,P=x&&(n.weekJalaliDates.includes(x)||n.weekJalaliDates.map(M=>M.replace(/\//g,"-")).includes(k)||n.weekGregorianDates.includes(x));(A||P||!I&&!x)&&(s+=Math.max(0,m),d+=Math.max(0,b))}}};e==="week"&&Array.isArray(o.weeklyHistory)&&o.weeklyHistory.forEach(l),Array.isArray(o.history)?o.history.forEach(l):o.history&&typeof o.history=="object"&&Object.entries(o.history).forEach(([u,m])=>{typeof m=="number"?l({date:u,duration:m,testCount:0}):m&&typeof m=="object"&&l({date:u,...m})});const c=o.sessions||o.dailyLogs||o.logs||o.dailyHistory;Array.isArray(c)&&c.forEach(l);let g=Math.max(s,Number(o.weeklyStudyMinutes!==void 0?o.weeklyStudyMinutes:o.weekly_study_minutes||o.weeklyMinutes||0),a),y=Math.max(d,Number(o.weeklyTestCount!==void 0?o.weeklyTestCount:o.weekly_test_count||o.weeklyTests||0),r),f=Math.max(s,Number(o.allTimeStudyMinutes!==void 0?o.allTimeStudyMinutes:o.alltime_study_minutes||o.totalStudyMinutes||o.totalMinutes||0),g,a),w=Math.max(d,Number(o.allTimeTestCount!==void 0?o.allTimeTestCount:o.alltime_test_count||o.totalTestCount||o.totalTests||0),y,r);if(i){const u=this.getWeeklyStats();if(u&&(g=Math.max(g,Number(u.studyMinutes||0)),y=Math.max(y,Number(u.testCount||0))),p&&typeof p.getStudyStatsByPeriod=="function"){const m=p.getStudyStatsByPeriod("all");m&&(f=Math.max(f,Number(m.studyMinutes||0),g),w=Math.max(w,Number(m.testCount||0),y))}}return e==="week"?{totalMinutes:Math.round(g),totalTests:Math.round(y)}:{totalMinutes:Math.round(f),totalTests:Math.round(w)}},aggregateAndRankMembers(o,e="today"){if(!Array.isArray(o))return[];const t=this.getPersianWeekWindow(),n=o.map(i=>{const a=this.calculateMemberPeriodStats(i,e,t),r=a.totalMinutes,s=a.totalTests,d=r*60+s*10;return{...i,totalMinutes:r,totalTests:s,displayStudyMins:r,displayTestCount:s,studyMinutes:e==="today"?r:i.studyMinutes||i.study_minutes||0,testCount:e==="today"?s:i.testCount||i.test_count||0,weeklyStudyMinutes:e==="week"?r:i.weeklyStudyMinutes||i.weekly_study_minutes||r,weeklyTestCount:e==="week"?s:i.weeklyTestCount||i.weekly_test_count||s,allTimeStudyMinutes:e==="all"?r:i.allTimeStudyMinutes||i.alltime_study_minutes||r,allTimeTestCount:e==="all"?s:i.allTimeTestCount||i.alltime_test_count||s,score:d}});return n.sort((i,a)=>a.score!==i.score?a.score-i.score:a.totalMinutes!==i.totalMinutes?a.totalMinutes-i.totalMinutes:a.totalTests-i.totalTests),n.map((i,a)=>({...i,rank:a+1}))},canAutoSync(){return!1},getSyncStatus(){const o=parseInt(localStorage.getItem(ee.LAST_SYNC)||"0");if(!o)return{hasSyncedBefore:!1,lastSyncText:"هنوز همگام‌سازی نشده"};const e=Date.now()-o,t=Math.floor(e/(60*1e3)),n=Math.floor(t/60);let i="";return t<1?i="لحظاتی پیش":t<60?i=`${t} دقیقه پیش`:i=`${n} ساعت و ${t%60} دقیقه پیش`,{hasSyncedBefore:!0,lastSyncTimestamp:o,lastSyncText:i}},async syncUserScore(o=!1,e=null){const t=this.getUserGroups();if(t.length===0&&!e)return{success:!1,noGroup:!0,message:"شما در هیچ گروه رقابتی عضو نیستید. لطفاً ابتدا یک گروه بسازید یا با کد وارد شوید."};const n=e?t.filter(r=>r.code===String(e).trim().toUpperCase()):t;n.length===0&&e&&n.push({code:String(e).trim().toUpperCase(),name:`گروه ${e}`});let i=null;const a=this.getActiveGroupCode();for(const r of n){const s=await this.syncSingleGroupScore(r);(!i||r.code===a)&&(i=s)}return i||{success:!0,message:"کارنامه در گروه‌ها ثبت شد."}},async setStudyStatus(o,e="",t=!1,n="study"){const i=this.getUserGroups(),a=this.getActiveGroup(),r=this.getUserProfile(),s=Date.now(),d=String(e||"").trim(),l=!!o&&n==="study";let c="";l?c="🟢 در حال مطالعه":n==="break"?c="☕ در حال استراحت":(n==="non-study"||n==="non_study")&&(c="🧘 فعالیت غیردرسی");const g=Array.isArray(i)&&i.length>0?i:a?[a]:[];if(g.length===0)return{success:!1,noGroup:!0};if(g.forEach(f=>{const w=String(f.code||f.groupCode).trim().toUpperCase();if(!w)return;const u=this.getGroupRoster(w),m=u.findIndex(b=>b.userId===r.userId);m>=0&&(u[m].isStudying=l,u[m].statusType=n,u[m].statusLabel=c,u[m].studySubject=l?d:"",u[m].subject=l?d:"",u[m].lastHeartbeat=l?s:0,this.saveGroupRoster(w,u));try{const b=localStorage.getItem(`${ee.GROUP_CACHE_PREFIX}${w}`);if(b){let S=JSON.parse(b);if(Array.isArray(S)){const I=S.findIndex(x=>x.userId===r.userId);I>=0&&(S[I].isStudying=l,S[I].statusType=n,S[I].statusLabel=c,S[I].studySubject=l?d:"",S[I].subject=l?d:"",S[I].lastHeartbeat=l?s:0),localStorage.setItem(`${ee.GROUP_CACHE_PREFIX}${w}`,JSON.stringify(S))}}}catch{}}),!l)try{for(let f=0;f<localStorage.length;f++){const w=localStorage.key(f);if(w&&(w.startsWith(ee.GROUP_ROSTER_PREFIX)||w.startsWith(ee.GROUP_CACHE_PREFIX))){const u=localStorage.getItem(w);if(u&&u.includes(r.userId)){const m=JSON.parse(u);if(Array.isArray(m)){let b=!1;m.forEach(S=>{S.userId===r.userId&&S.isStudying&&(S.isStudying=!1,S.statusType="stopped",S.statusLabel="",S.studySubject="",S.subject="",S.lastHeartbeat=0,b=!0)}),b&&localStorage.setItem(w,JSON.stringify(m))}}}}}catch{}const y=g.map(async f=>{const w=String(f.code||f.groupCode).trim().toUpperCase();if(!w)return;const u=r.avatar_url||r.avatarUrl||r.avatar||r.photo_url||"",m={action:"set_status",groupCode:w,userId:r.userId,nickname:r.nickname,name:r.nickname,target:r.target,avatar_url:u,avatarUrl:u,avatar:u,photo_url:u,isStudying:l,statusType:n,statusLabel:c,subject:l?d:"",studySubject:l?d:"",lastHeartbeat:l?s:0},b=[`${le}/api/leaderboard.php`,`${le}/api/v1/leaderboard.php`];for(const S of b)try{const I=await fetch(S,{method:"POST",headers:{"Content-Type":"application/json","Cache-Control":"no-cache",Pragma:"no-cache"},body:JSON.stringify(m),keepalive:t});if(I.ok)return await I.json().catch(()=>({success:!0}))}catch{}});try{return await Promise.allSettled(y),{success:!0,isStudying:l,statusType:n,statusLabel:c,subject:l?d:"",lastHeartbeat:l?s:0}}catch{return{success:!1,offline:!0}}},startStudyHeartbeat(o="",e="study"){this._currentStudySubject=o||"",this._studyHeartbeatInterval&&(typeof this._studyHeartbeatInterval!="boolean"&&clearInterval(this._studyHeartbeatInterval),this._studyHeartbeatInterval=null),this._studyHeartbeatInterval=!0;const t=e==="study";this.setStudyStatus(t,this._currentStudySubject,!1,e).catch(()=>{})},stopStudyHeartbeat(){this._studyHeartbeatInterval&&(typeof this._studyHeartbeatInterval!="boolean"&&clearInterval(this._studyHeartbeatInterval),this._studyHeartbeatInterval=null),this._currentStudySubject="",this.setStudyStatus(!1,"",!1,"stopped").catch(()=>{})},async syncSingleGroupScore(o){if(!o)return{success:!1,noGroup:!0};const e=this.getUserProfile(),t=this.getTodayStats(),n=this.getWeeklyStats(),i=p&&typeof p.getStudyStatsByPeriod=="function"?p.getStudyStatsByPeriod("all"):t,a=String(o.code||o.groupCode||o.room_code||o.id||"").trim().toUpperCase();if(!a||a==="UNDEFINED"||a==="NULL"||a==="0")return{success:!1,noGroup:!0,message:"کد گروه معتبر نیست."};const r=String(o.name||o.groupName||`گروه ${a}`).trim(),s=this.getGroupRoster(a).find(w=>w.userId===e.userId)||{},d=this.isCurrentStudyingActive(),l=d&&(this._currentStudySubject||s.studySubject)||"",c=e.avatar_url||e.avatarUrl||e.avatar||e.photo_url||"",g={action:"sync",groupCode:a,groupName:r,userId:e.userId,nickname:e.nickname,name:e.nickname,target:e.target,avatar_url:c,avatarUrl:c,avatar:c,photo_url:c,syncCode:e.syncCode||this.getOrCreateSyncCode(),studyMinutes:t.studyMinutes,testCount:t.testCount,weeklyStudyMinutes:Math.max(Number(n.studyMinutes||0),Number(t.studyMinutes||0)),weeklyTestCount:Math.max(Number(n.testCount||0),Number(t.testCount||0)),allTimeStudyMinutes:Math.max(Number(i.studyMinutes||0),Number(n.studyMinutes||0),Number(t.studyMinutes||0)),allTimeTestCount:Math.max(Number(i.testCount||0),Number(n.testCount||0),Number(t.testCount||0)),subjects:t.subjects||[],isStudying:d,subject:l,studySubject:l,lastHeartbeat:d?Date.now():0,date:t.gregorianDate,updatedAt:Date.now()},y=[`${le}/api/leaderboard.php`,`${le}/api/v1/leaderboard.php`];for(const w of y)try{const u=await fetch(w,{method:"POST",headers:{"Content-Type":"application/json","Cache-Control":"no-cache",Pragma:"no-cache"},body:JSON.stringify(g)}),m=await u.text();let b=null;try{b=m?JSON.parse(m):null}catch{b=null}if(u.ok&&b&&b.success!==!1){localStorage.setItem(ee.LAST_SYNC,String(Date.now()));const S=b.list||b.leaderboard||[],I=Array.isArray(S)?S.map(ht):[];return I.length>0?(localStorage.setItem(`${ee.GROUP_CACHE_PREFIX}${a}`,JSON.stringify(I)),localStorage.setItem(ee.CACHE_DATE,t.gregorianDate)):this.updateLocalGroupCacheWithUser(a,g),Array.isArray(b.roster)&&b.roster.length>0&&this.saveGroupRoster(a,b.roster),{success:!0,serverConfirmed:!0,endpoint:w,rank:b.rank,groupCode:a,groupName:b.groupName||r,leaderboard:I,list:I,entry:g,message:b.message||"کارنامه با موفقیت در گروه اختصاصی ثبت شد."}}}catch(u){console.error("[Leaderboard] Sync failed for group",a,u)}this.updateLocalGroupCacheWithUser(a,g);const f=this.getCachedLeaderboard(t.gregorianDate,a);return{success:!1,serverConfirmed:!1,offline:!0,entry:g,groupCode:a,groupName:r,leaderboard:f.leaderboard,message:"ثبت محلی در گروه انجام شد (سرور موقتاً در دسترس نیست)."}},async syncUserProgress(){return this.syncUserScore()},async fetchLeaderboard(o=null,e=!1,t=null){const n=o||this.getTodayDateStr(),i=t||this.getActiveGroupCode(),r=this.getUserGroups().find(s=>s.code===i)||this.getActiveGroup();if(!i)return{success:!0,noGroup:!0,fromCache:!1,leaderboard:[],list:[],date:n};try{const s=e?`&_t=${Date.now()}`:"";let d=await fetch(`${le}/api/leaderboard.php?groupCode=${i}&date=${n}${s}`,{cache:"no-store",headers:{"Cache-Control":"no-cache",Pragma:"no-cache"}});d.ok||(d=await fetch(`${le}/api/v1/leaderboard.php?groupCode=${i}&date=${n}${s}`,{cache:"no-store",headers:{"Cache-Control":"no-cache",Pragma:"no-cache"}}));const l=await d.text();let c=null;try{c=l?JSON.parse(l):null}catch{c=null}if(d.ok&&c){const g=c.list||c.leaderboard;if(c.success&&Array.isArray(g)){const y=this.isCurrentStudyingActive(),f=g.map(w=>{const u=ht(w);return u.userId===profile.userId&&(u.isStudying=y,y||(u.studySubject="",u.subject="",u.lastHeartbeat=0)),u});if(localStorage.setItem(`${ee.GROUP_CACHE_PREFIX}${i}`,JSON.stringify(f)),localStorage.setItem(ee.CACHE_DATE,n),Array.isArray(c.roster)){const w=c.roster.map(u=>u.userId===profile.userId?{...u,isStudying:y,studySubject:y&&u.studySubject||"",subject:y&&u.subject||"",lastHeartbeat:y?u.lastHeartbeat||Date.now():0}:u);this.saveGroupRoster(i,w)}return r&&(r.members=f,this.setUserGroupData({...r,members:f,...c.groupName?{name:c.groupName,groupName:c.groupName}:{}})),{success:!0,fromCache:!1,leaderboard:f,list:f,groupCode:i,groupName:c.groupName||(r?r.name||r.groupName:`گروه ${i}`),groupData:this.getUserGroupData()||r,date:n}}}throw new Error("Non-success leaderboard response")}catch(s){return console.warn("Leaderboard fetch failed, falling back to local group cache:",s),this.getCachedLeaderboard(n,i)}},getCachedLeaderboard(o=null,e=null){const t=o||this.getTodayDateStr(),n=e||this.getActiveGroupCode(),a=this.getUserGroups().find(x=>x.code===n)||this.getActiveGroup();if(!n)return{success:!0,noGroup:!0,fromCache:!0,offline:!0,leaderboard:[],list:[],date:t};const r=this.getGroupRoster(n),s=localStorage.getItem(`${ee.GROUP_CACHE_PREFIX}${n}`);let d=[];if(s)try{d=JSON.parse(s)}catch{d=[]}Array.isArray(d)||(d=[]);const l=this.getUserProfile(),c=this.getTodayStats(),g=new Map;r.forEach(x=>{const k=this.calculateMemberPeriodStats(x,"today"),A=this.calculateMemberPeriodStats(x,"week"),P=this.calculateMemberPeriodStats(x,"all");g.set(x.userId,{userId:x.userId,nickname:x.nickname||"داوطلب",target:x.target||"کنکور سراسری",avatarUrl:x.avatarUrl||"",studyMinutes:Math.max(Number(x.studyMinutes||0),k.totalMinutes),testCount:Math.max(Number(x.testCount||0),k.totalTests),weeklyStudyMinutes:Math.max(Number(x.weeklyStudyMinutes||0),A.totalMinutes),weeklyTestCount:Math.max(Number(x.weeklyTestCount||0),A.totalTests),allTimeStudyMinutes:Math.max(Number(x.allTimeStudyMinutes||0),P.totalMinutes),allTimeTestCount:Math.max(Number(x.allTimeTestCount||0),P.totalTests),subjects:x.subjects||[],dailyLogs:x.dailyLogs||x.logs||x.history||[],history:x.history||[],isOwner:!!x.isOwner,joinedAt:x.joinedAt||Date.now(),date:t,isStudying:!!x.isStudying,studySubject:x.studySubject||x.subject||"",subject:x.studySubject||x.subject||"",lastHeartbeat:x.lastHeartbeat||0,updatedAt:x.joinedAt||Date.now()})}),d.forEach(x=>{if(x&&x.userId){const k=ht(x),A=g.get(k.userId)||{},P=this.calculateMemberPeriodStats(k,"today"),M=this.calculateMemberPeriodStats(k,"week"),T=this.calculateMemberPeriodStats(k,"all");g.set(k.userId,{...A,...k,studyMinutes:Math.max(Number(A.studyMinutes||0),Number(k.studyMinutes||0),P.totalMinutes),testCount:Math.max(Number(A.testCount||0),Number(k.testCount||0),P.totalTests),weeklyStudyMinutes:Math.max(Number(A.weeklyStudyMinutes||0),Number(k.weeklyStudyMinutes||0),M.totalMinutes),weeklyTestCount:Math.max(Number(A.weeklyTestCount||0),Number(k.weeklyTestCount||0),M.totalTests),allTimeStudyMinutes:Math.max(Number(A.allTimeStudyMinutes||0),Number(k.allTimeStudyMinutes||0),T.totalMinutes),allTimeTestCount:Math.max(Number(A.allTimeTestCount||0),Number(k.allTimeTestCount||0),T.totalTests),dailyLogs:k.dailyLogs||k.logs||A.dailyLogs||[],history:k.history||A.history||[],isStudying:k.isStudying!==void 0?!!k.isStudying:!!A.isStudying,studySubject:k.studySubject||k.subject||A.studySubject||"",subject:k.studySubject||k.subject||A.subject||"",lastHeartbeat:k.lastHeartbeat||A.lastHeartbeat||0})}});const y=r.find(x=>x.userId===l.userId)||{},f=this.isCurrentStudyingActive(),w=f&&(this._currentStudySubject||y.studySubject||y.subject)||"",u=f?Date.now():0;y&&y.userId&&(y.isStudying=f,y.studySubject=w,y.subject=w,y.lastHeartbeat=u,this.saveGroupRoster(n,r));const m=this.getWeeklyStats(),b=p&&typeof p.getStudyStatsByPeriod=="function"?p.getStudyStatsByPeriod("all"):c,S={userId:l.userId,nickname:l.nickname,target:l.target,avatarUrl:l.avatar_url||l.avatarUrl||"",avatar_url:l.avatar_url||l.avatarUrl||"",studyMinutes:c.studyMinutes,testCount:c.testCount,weeklyStudyMinutes:Math.max(Number(m.studyMinutes||0),Number(c.studyMinutes||0)),weeklyTestCount:Math.max(Number(m.testCount||0),Number(c.testCount||0)),allTimeStudyMinutes:Math.max(Number(b.studyMinutes||0),Number(m.studyMinutes||0),Number(c.studyMinutes||0)),allTimeTestCount:Math.max(Number(b.testCount||0),Number(m.testCount||0),Number(c.testCount||0)),subjects:c.subjects||[],date:t,isCurrentUser:!0,isOwner:!!(a&&a.isOwner),isStudying:f,studySubject:w,subject:w,lastHeartbeat:u,updatedAt:Date.now()};g.set(l.userId,S);const I=Array.from(g.values());return I.sort((x,k)=>(k.studyMinutes||0)!==(x.studyMinutes||0)?(k.studyMinutes||0)-(x.studyMinutes||0):(k.testCount||0)-(x.testCount||0)),a&&(a.members=I),{success:!0,fromCache:!0,offline:!0,groupCode:a?a.groupCode||a.code:n,groupName:a?a.groupName||a.name:`گروه ${n}`,groupData:a,leaderboard:I,list:I,date:t}},updateLocalGroupCacheWithUser(o,e){try{const t=this.getGroupRoster(o),n=t.findIndex(r=>r.userId===e.userId);n<0?(t.push({userId:e.userId,nickname:e.nickname,target:e.target,joinedAt:Date.now(),isOwner:!!e.isOwner,isStudying:!!e.isStudying,studySubject:e.studySubject||e.subject||"",subject:e.studySubject||e.subject||"",lastHeartbeat:e.lastHeartbeat||Date.now()}),this.saveGroupRoster(o,t)):(t[n]={...t[n],isStudying:e.isStudying!==void 0?!!e.isStudying:t[n].isStudying,studySubject:e.studySubject||e.subject||t[n].studySubject||"",subject:e.studySubject||e.subject||t[n].subject||"",lastHeartbeat:e.lastHeartbeat||t[n].lastHeartbeat||Date.now()},this.saveGroupRoster(o,t));const i=localStorage.getItem(`${ee.GROUP_CACHE_PREFIX}${o}`);let a=[];if(i)try{a=JSON.parse(i)}catch{a=[]}Array.isArray(a)||(a=[]),a=a.filter(r=>r.userId!==e.userId),a.push({...e,isCurrentUser:!0}),a.sort((r,s)=>(s.studyMinutes||0)!==(r.studyMinutes||0)?(s.studyMinutes||0)-(r.studyMinutes||0):(s.testCount||0)-(r.testCount||0)),localStorage.setItem(`${ee.GROUP_CACHE_PREFIX}${o}`,JSON.stringify(a))}catch(t){console.error("Error updating local group cache:",t)}},getIranNowHHMM(){try{return new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Tehran",hour:"2-digit",minute:"2-digit",hour12:!1}).format(new Date)}catch{const e=new Date;return`${String(e.getHours()).padStart(2,"0")}:${String(e.getMinutes()).padStart(2,"0")}`}},isEarlyBirdWindowOpen(){const[o,e]=this.getIranNowHHMM().split(":").map(Number),t=o*60+(e||0);return t>=Be.START_MIN&&t<=Be.END_MIN},getEarlyBirdHistory(){try{const o=localStorage.getItem(ee.EARLY_BIRD_HISTORY),e=o?JSON.parse(o):{};return e&&typeof e=="object"&&!Array.isArray(e)?e:{}}catch{return{}}},extractSessionStartMinutes(o){if(!o||typeof o!="object")return null;const e=a=>{if(a==null||a==="")return null;if(typeof a=="string"){const r=String(a).replace(/[۰-۹]/g,l=>"۰۱۲۳۴۵۶۷۸۹".indexOf(l)).replace(/[٠-٩]/g,l=>"٠١٢٣٤٥٦٧٨٩".indexOf(l)).trim(),s=r.match(/(?:^|\b|T|\s)(\d{1,2}):(\d{2})/);if(s){const l=Number(s[1]),c=Number(s[2]);if(!isNaN(l)&&!isNaN(c)&&l>=0&&l<24&&c>=0&&c<60)return l*60+c}const d=Number(r);if(!isNaN(d)&&d>1e11)a=d;else{const l=new Date(r);isNaN(l.getTime())||(a=l.getTime())}}if(typeof a=="number"&&!isNaN(a)){const r=new Date(a);if(!isNaN(r.getTime())){try{const c=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Tehran",hour:"2-digit",minute:"2-digit",hour12:!1}).format(r).split(":").map(Number);if(!isNaN(c[0])&&!isNaN(c[1])){const g=c[0]*60+c[1];if(g>=Be.START_MIN&&g<=Be.END_MIN)return g}}catch{}const s=r.getHours()*60+r.getMinutes();if(s>=Be.START_MIN&&s<=Be.END_MIN)return s;const d=r.getUTCHours()*60+r.getUTCMinutes();return d>=Be.START_MIN&&d<=Be.END_MIN?d:s}}return null},t=[o.startTimeStr,o.startTime,o.start_time,o.time];for(const a of t){const r=e(a);if(r!==null)return r}const n=Math.max(1,Number(o.duration||o.minutes)||1),i=[o.endTimeStr,o.endTime,o.end_time,o.timestamp,o.createdAt,o.created_at];for(const a of i){const r=e(a);if(r!==null){const s=r-n;if(s>=0)return s}}return null},getTodayWakeTime(){const o=this.getEarlyBirdHistory(),e=this.getTodayDateStr();if(o[e]){const t=String(o[e]).replace(/[۰-۹]/g,r=>"۰۱۲۳۴۵۶۷۸۹".indexOf(r)).trim(),[n,i]=t.split(":").map(Number),a=!isNaN(n)&&!isNaN(i)?n*60+i:null;if(a!==null&&a>=Be.START_MIN&&a<=Be.END_MIN)return t}try{const t=localStorage.getItem("early_bird_daily_status");if(t){const n=JSON.parse(t);if(n.date===e)return n.time;localStorage.removeItem("early_bird_daily_status"),typeof window<"u"&&window.personalSyncService&&typeof window.personalSyncService.pushToCloud=="function"&&window.personalSyncService.pushToCloud()}}catch{localStorage.removeItem("early_bird_daily_status")}return null},getTodayEarlyBird(){const o=this.getTodayWakeTime();return o?{wakeTime:o,wake_time:o,date:this.getTodayDateStr()}:null},saveEarlyBirdLocal(o,e){try{const t=this.getEarlyBirdHistory();t[o]=e,localStorage.setItem(ee.EARLY_BIRD_HISTORY,JSON.stringify(t))}catch(t){console.error("[EarlyBird] ذخیره تاریخچه محلی ناموفق بود:",t)}},async recordEarlyBird(){var i,a;const o=this.getUserProfile(),e=this.getTodayDateStr(),t=this.getIranNowHHMM();if(!this.isEarlyBirdWindowOpen())return{success:!1,outsideWindow:!0,wakeTime:t,message:"ثبت بیداری فقط از ساعت ۵ تا ۷ صبح امکان‌پذیر است."};this.saveEarlyBirdLocal(e,t);const n={userId:o.userId,nickname:o.nickname,name:o.nickname,target:o.target,wakeTime:t,date:e};try{const r=await fetch(`${le}/api/earlybird.php`,{method:"POST",headers:{"Content-Type":"application/json","Cache-Control":"no-cache",Pragma:"no-cache"},body:JSON.stringify(n)}),s=await r.text();let d=null;try{d=s?JSON.parse(s):null}catch{d=null}if(!r.ok||!d||d.success===!1){const l=d&&(d.message||d.error)||(s||"").slice(0,160)||"پاسخ نامعتبر سرور",c=`POST /api/earlybird.php → HTTP ${r.status}: ${l}`;return console.error("[EarlyBird] ثبت روی سرور ناموفق بود —",c),{success:!1,serverConfirmed:!1,wakeTime:t,errorDetail:c,message:d&&d.message||"ثبت سحرخیزی روی سرور انجام نشد."}}return Array.isArray(d.list)&&(localStorage.setItem(ee.EARLY_BIRD_CACHE,JSON.stringify(d.list)),localStorage.setItem(ee.EARLY_BIRD_CACHE_DATE,e)),d.entry&&d.entry.wakeTime&&this.saveEarlyBirdLocal(e,d.entry.wakeTime),console.info(`[EarlyBird] ثبت موفق — ساعت ${((i=d.entry)==null?void 0:i.wakeTime)||t}, رتبه ${d.rank??"-"}`),{success:!0,serverConfirmed:!0,alreadyRecorded:!!d.alreadyRecorded,wakeTime:((a=d.entry)==null?void 0:a.wakeTime)||t,rank:d.rank,list:d.list||[],message:d.message||"سحرخیزی شما ثبت شد ☀️"}}catch(r){const s=`POST /api/earlybird.php → خطای شبکه: ${r.message}`;return console.error("[EarlyBird] ثبت روی سرور ناموفق بود —",s),{success:!1,serverConfirmed:!1,wakeTime:t,errorDetail:s,message:"ثبت محلی انجام شد اما ارتباط با سرور برقرار نشد."}}},async fetchEarlyBirds(o=null){const e=o||this.getTodayDateStr();try{const t=await fetch(`${le}/api/earlybird.php?date=${e}&_t=${Date.now()}`,{cache:"no-store",headers:{"Cache-Control":"no-cache",Pragma:"no-cache"}}),n=await t.text();let i=null;try{i=n?JSON.parse(n):null}catch{i=null}if(t.ok&&i&&i.success&&Array.isArray(i.list))return localStorage.setItem(ee.EARLY_BIRD_CACHE,JSON.stringify(i.list)),localStorage.setItem(ee.EARLY_BIRD_CACHE_DATE,e),{success:!0,fromCache:!1,date:e,list:i.list};throw new Error(i&&(i.message||i.error)||`HTTP ${t.status}`)}catch(t){console.warn("[EarlyBird] دریافت لیست از سرور ناموفق بود، استفاده از کش محلی:",t.message);let n=[];if(localStorage.getItem(ee.EARLY_BIRD_CACHE_DATE)===e)try{const i=JSON.parse(localStorage.getItem(ee.EARLY_BIRD_CACHE)||"[]");Array.isArray(i)&&(n=i)}catch{n=[]}return{success:!1,offline:!0,fromCache:!0,date:e,list:n}}}};typeof window<"u"&&(window.leaderboardService=_,window.fetchUserGroups=(o=!0)=>_.fetchUserGroups(o));const te=o=>String(o).replace(/[0-9]/g,e=>"۰۱۲۳۴۵۶۷۸۹"[e]),ct=[{id:"energetic",icon:"⚡️",text:"پرانرژی (۱۰/۱۰)",badge:"⚡️ پرانرژی (۱۰/۱۰)"},{id:"fighter",icon:"🦁",text:"جنگنده",badge:"🦁 جنگنده"},{id:"satisfied",icon:"😌",text:"راضی",badge:"😌 راضی"},{id:"tough",icon:"☕️",text:"سخت اما تموم شد",badge:"☕️ سخت اما تموم شد"}];function pt(o){const e=Number(o)||0;return e>70?{text:"#34d399",bg:"rgba(16, 185, 129, 0.15)",border:"rgba(52, 211, 153, 0.35)"}:e>=50?{text:"#fbbf24",bg:"rgba(245, 158, 11, 0.15)",border:"rgba(251, 191, 36, 0.35)"}:{text:"#f87171",bg:"rgba(239, 68, 68, 0.15)",border:"rgba(248, 113, 113, 0.35)"}}function Ge(o){const e=Math.max(0,Math.round(Number(o)||0));if(e===0)return"۰ دقیقه";const t=Math.floor(e/60),n=e%60;return t>0&&n>0?`${te(t)} ساعت و ${te(n)} دقیقه`:t>0?`${te(t)} ساعت`:`${te(n)} دقیقه`}function uo(o){if(!o)return"۰۰:۰۰ - ۰۰:۰۰";const e=Number(o.duration!==void 0?o.duration:o.minutes)||0,t=r=>{if(r==null||r==="")return null;if(typeof r=="number"||typeof r=="string"&&/^\d{10,}$/.test(r.trim())){const s=new Date(Number(r));if(!isNaN(s.getTime()))return s.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",hour12:!1})}if(typeof r=="string"&&r.includes(":")&&!r.includes("T")&&!r.includes("-")){const s=r.trim().split(":");if(s.length>=2){const d=s.map(g=>g.replace(/[۰-۹]/g,y=>"۰۱۲۳۴۵۶۷۸۹".indexOf(y))),l=String(parseInt(d[0])||0).padStart(2,"0"),c=String(parseInt(d[1])||0).padStart(2,"0");return te(`${l}:${c}`)}}if(typeof r=="string"||r instanceof Date){const s=new Date(r);if(!isNaN(s.getTime()))return s.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",hour12:!1})}return null};let n=t(o.startTime),i=t(o.endTime);const a=o.timestamp||o.createdAt;if((!n||!i)&&a){let r=null;if(typeof a=="number"||typeof a=="string"&&/^\d{10,}$/.test(String(a).trim())?r=new Date(Number(a)):r=new Date(a),r&&!isNaN(r.getTime())){const s=new Date(r.getTime()-e*6e4);n||(n=s.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",hour12:!1})),i||(i=r.toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",hour12:!1}))}}if(n||(n="۰۸:۰۰"),!i){const s=String(n).replace(/[۰-۹]/g,d=>"۰۱۲۳۴۵۶۷۸۹".indexOf(d)).split(":").map(Number);if(s.length>=2&&!isNaN(s[0])&&!isNaN(s[1])){const l=(s[0]*60+s[1]+e)%1440,c=String(Math.floor(l/60)).padStart(2,"0"),g=String(l%60).padStart(2,"0");i=te(`${c}:${g}`)}else i="۰۹:۰۰"}return`${n} - ${i}`}function go(o=null){try{const e=p.getTodayJalaliString(),t=p.normalizeJalaliDate(o||e),n=t===e,i=new Date,a=i.getHours()*60+i.getMinutes(),r=480,s=1380;let d=s;n&&(d=Math.min(s,a));const c=(p.getActivitiesByDate(t)||[]).filter(S=>S?!(S.type==="non-study"||S.type==="non_study"||S.type==="break"||S.activityType==="non_study"||S.activityType==="non-study"||S.activityType==="break"||S.isStudy===!1||S.is_study_time===!1||S.counts_for_study===!1||S.isBreak===!0||S.is_break===!0||S.timerType==="break"||S.timerType===2):!1),g=c.reduce((S,I)=>S+(Number(I.duration||I.minutes)||0),0);if(d<=r)return{usefulMinutes:g,usefulText:Ge(g),leakMinutes:0,leakText:"بدون نشتی (خارج بازه ۰۸-۲۳)",leakCount:0};const y=[];c.forEach(S=>{const I=Math.max(1,Number(S.duration||S.minutes)||1);let x=0,k=0;if(S.startTime){const M=new Date(S.startTime);if(!isNaN(M.getTime()))k=M.getHours()*60+M.getMinutes(),x=k+I;else if(typeof S.startTime=="string"&&S.startTime.includes(":")){const T=S.startTime.split(":").map(Number);k=(T[0]||0)*60+(T[1]||0),x=k+I}}else if(S.endTime||S.timestamp||S.createdAt){const M=new Date(S.endTime||S.timestamp||S.createdAt);isNaN(M.getTime())||(x=M.getHours()*60+M.getMinutes(),k=Math.max(0,x-I))}else x=d,k=Math.max(0,x-I);const A=Math.max(r,Math.min(d,k)),P=Math.max(r,Math.min(d,x));P>A&&y.push({start:A,end:P})}),y.sort((S,I)=>S.start-I.start);const f=[];y.forEach(S=>{if(f.length===0)f.push({...S});else{const I=f[f.length-1];S.start<=I.end?I.end=Math.max(I.end,S.end):f.push({...S})}});let w=0,u=0,m=r;f.forEach(S=>{const I=S.start-m;I>45&&(w+=I,u++),m=Math.max(m,S.end)});const b=d-m;return b>45&&(w+=b,u++),{usefulMinutes:g,usefulText:Ge(g),leakMinutes:w,leakText:w>0?Ge(w):"بدون نشتی ✨",leakCount:u}}catch(e){return console.error("Error calculating time leak stats:",e),{usefulMinutes:0,usefulText:"۰ دقیقه",leakMinutes:0,leakText:"۰ دقیقه",leakCount:0}}}function Ft(o={}){const{size:e=280,showCenterInfo:t=!0,dateStr:n=null}=o,i=p.normalizeJalaliDate(n||p.getTodayJalaliString()),a=p.getActivitiesByDate(i)||[],s=(p.getStudyTargets()||{}).dailyStudyGoalHours||8,d=s*60,l=p.getStudyMinutesByDate(i),c=+(l/60).toFixed(1),g=d>0?Math.min(100,Math.round(l/d*100)):0,y=typeof p.getStudyStreak=="function"?p.getStudyStreak():0,f=110,w=2*Math.PI*f;let u="";const m=new Date,b=m.getHours()*60+m.getMinutes(),S=x=>{if(x==null||x==="")return null;if(typeof x=="string"){const k=String(x).replace(/[۰-۹]/g,M=>"۰۱۲۳۴۵۶۷۸۹".indexOf(M)).replace(/[٠-٩]/g,M=>"٠١٢٣٤٥٦٧٨٩".indexOf(M)).trim(),A=k.match(/(?:^|\b|T|\s)(\d{1,2}):(\d{2})/);if(A){const M=Number(A[1]),T=Number(A[2]);if(!isNaN(M)&&!isNaN(T)&&M>=0&&M<24&&T>=0&&T<60)return M*60+T}const P=Number(k);if(!isNaN(P)&&P>1e11)x=P;else{const M=new Date(k);isNaN(M.getTime())||(x=M.getTime())}}if(typeof x=="number"&&!isNaN(x)){const k=new Date(x);if(!isNaN(k.getTime())){try{const P=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Tehran",hour:"2-digit",minute:"2-digit",hour12:!1}).format(k).split(":").map(Number);if(!isNaN(P[0])&&!isNaN(P[1]))return P[0]*60+P[1]}catch{}return k.getHours()*60+k.getMinutes()}}return null};a.forEach(x=>{if(!x)return;const k=Math.max(1,Number(x.duration||x.minutes)||1);let A=S(x.startTime),P=S(x.endTime);if(A!==null&&P!==null)P<A&&(P+=24*60);else if(A!==null)P=A+k;else if(P!==null)A=Math.max(0,P-k);else{const U=S(x.timestamp||x.createdAt);U!==null?(P=U,A=Math.max(0,P-k)):(P=b,A=Math.max(0,P-k))}A=Math.max(0,Math.min(1440,A)),P=Math.max(0,Math.min(1440,P));const M=Math.max(1,P-A),T=x.type==="study"||x.isStudy!==!1,O=x.color||(T?"#0ea5e9":"#f59e0b"),C=(M/1440*w).toFixed(2),z=(w-Number(C)).toFixed(2),B=(-(A/1440)*w).toFixed(2);u+=`
      <circle cx="160" cy="160" r="${f}" fill="none"
        stroke="${O}" stroke-width="14" stroke-linecap="round"
        stroke-dasharray="${C} ${z}"
        stroke-dashoffset="${B}"
        style="transition: stroke-dasharray 0.8s ease-out, stroke-dashoffset 0.8s ease-out; filter: drop-shadow(0 0 5px ${O}aa);"
      />
    `});let I="";for(let x=0;x<24;x++){const k=x*15*Math.PI/180,A=x%6===0,P=A?8:4,M=160+(f+10)*Math.cos(k),T=160+(f+10)*Math.sin(k),O=160+(f+10+P)*Math.cos(k),C=160+(f+10+P)*Math.sin(k);I+=`
      <line x1="${M.toFixed(1)}" y1="${T.toFixed(1)}" x2="${O.toFixed(1)}" y2="${C.toFixed(1)}"
        stroke="${A?"rgba(255, 255, 255, 0.4)":"rgba(255, 255, 255, 0.15)"}"
        stroke-width="${A?2:1}" />
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
        ${I}

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
            <span>${te(y)} روز استریک</span>
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
  `}function fo(){const o=go(),e=p.getSubjectStudyStats()||{},t=Object.keys(e).map(n=>{const i=e[n],a=i.minutes||0;return a<=0?"":`
      <div style="background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); padding: 4px 10px; border-radius: 10px; font-size: 0.72rem; font-weight: 700; color: #e4e4e7; display: flex; align-items: center; gap: 5px;">
        <span style="width: 8px; height: 8px; border-radius: 50%; background: ${i.isStudy!==!1?"#0ea5e9":"#f59e0b"}; display: inline-block;"></span>
        <span>${n}:</span>
        <span style="color: #38bdf8; font-family: 'Outfit';">${Ge(a)}</span>
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
        ${Ft({size:260,showCenterInfo:!0})}
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
  `}function tn(o=null){var He;const e=o||window.appState&&window.appState.selectedJalaliDetailDate||p.getTodayJalaliString(),t=p.normalizeJalaliDate(e),n=p&&typeof p.getTodayJalaliString=="function"?p.getTodayJalaliString():"",i=t===(p?p.normalizeJalaliDate(n):n),a=t.split("/").map(Number),r=a[0]||1404,s=a[1]||1,d=a[2]||1,c=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"][s-1]||"",y=(p.jalaliToJdn(r,s,d)+2)%7,u=`${["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه"][y]||"شنبه"} ${te(d)} ${c} ${te(r)}`;let m=null;try{m=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}")}catch{}const b=(typeof p.getUserProfile=="function"?p.getUserProfile():{})||{},S=localStorage.getItem("planex_user_avatar")||"",I=localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_leaderboard_nickname")||"",x=localStorage.getItem("planex_leaderboard_target")||"",k=I||b.name||b.displayName||b.nickname||(m==null?void 0:m.full_name)||(m==null?void 0:m.name)||"کاربر",A=x||b.target||b.major||b.targetField||"کنکور سراسری ۱۴۰۶",P=b.grade||b.educationGrade||"",M=P&&A&&!A.includes(P)?`${P} - ${A}`:A,T=S||b.avatar||b.photo||b.avatarUrl||(m==null?void 0:m.avatar_url)||null,O=typeof p<"u"&&typeof p.getCurrentWeek=="function"?p.getCurrentWeek():null,C=(O==null?void 0:O.days)||[],z=(typeof p.getActivitiesByDate=="function"?p.getActivitiesByDate(t):[])||[],B=z.filter(E=>E?!(E.type==="non-study"||E.type==="non_study"||E.type==="break"||E.activityType==="non_study"||E.activityType==="non-study"||E.activityType==="break"||E.isStudy===!1||E.is_study_time===!1||E.counts_for_study===!1||E.isBreak===!0||E.is_break===!0||E.timerType==="break"||E.timerType===2):!1),U=B.reduce((E,ie)=>{const re=Number(ie.duration!==void 0?ie.duration:ie.minutes);return E+(isNaN(re)?0:Math.max(0,Math.ceil(re)))},0),F=Ge(U),L=(typeof p.getStudyTargets=="function"?p.getStudyTargets():{})||{},J=Number(L.dailyStudyGoalHours||L.dailyTargetHours||8),Y=J*60,H=Y>0?Math.min(100,Math.round(U/Y*100)):0,Q=B.length,D=typeof p.getStudyStreak=="function"?p.getStudyStreak():0;let Z=null;const X=typeof _<"u"?_:typeof window<"u"?window.leaderboardService:null,xe=E=>{if(!E)return null;const ie=v=>!v||typeof v!="string"?v:v.replace(/[۰-۹]/g,V=>"۰۱۲۳۴۵۶۷۸۹".indexOf(V)).replace(/[٠-٩]/g,V=>"٠١٢٣٤٥٦٧٨٩".indexOf(V));if(typeof E=="string"){const V=ie(E).trim().match(/(?:^|\b|T|\s)(\d{1,2}):(\d{2})/);if(V){const K=parseInt(V[1],10),se=parseInt(V[2],10);if(!isNaN(K)&&!isNaN(se)&&K>=0&&K<24&&se>=0&&se<60)return K*60+se}}let re=null;if(typeof E=="number")re=E;else if(typeof E=="object"&&E!==null&&(re=E.timestamp||E.createdAt||E.start||null,!re&&(E.startTime||E.start_time||E.startTimeStr)))return xe(E.startTime||E.start_time||E.startTimeStr);if(re){const v=new Date(re);if(!isNaN(v.getTime()))try{const K=v.toLocaleTimeString("en-US",{timeZone:"Asia/Tehran",hour12:!1,hour:"2-digit",minute:"2-digit"}).split(":").map(Number);if(K.length>=2&&!isNaN(K[0])&&!isNaN(K[1]))return K[0]*60+K[1]}catch{return v.getHours()*60+v.getMinutes()}}return null},ye=E=>E!==null&&E>=5*60&&E<=7*60;let ce=null;if(X){if(i&&typeof X.getTodayWakeTime=="function"&&(ce=X.getTodayWakeTime()),!ce&&typeof X.getEarlyBirdHistory=="function"){const E=X.getEarlyBirdHistory()||{};ce=E[t]||(i?E[(He=X.getTodayDateStr)==null?void 0:He.call(X)]:null)}if(!ce&&i&&typeof X.getTodayEarlyBird=="function"){const E=X.getTodayEarlyBird();E&&(E.wakeTime||E.wake_time)&&(ce=E.wakeTime||E.wake_time)}}const h=xe(ce);if(ye(h)){const E=String(Math.floor(h/60)).padStart(2,"0"),ie=String(h%60).padStart(2,"0");Z=`${E}:${ie}`}if(!Z){const E=z&&z.length>0?z:B;if(E&&E.length>0){let ie=1440;E.forEach(re=>{let v=null;if(X&&typeof X.extractSessionStartMinutes=="function"?v=X.extractSessionStartMinutes(re):v=xe(re.startTime||re.start_time||re.startTimeStr||re.time||re.timestamp||re.createdAt||re),v!==null&&ye(v)&&v<ie){ie=v;const V=String(Math.floor(ie/60)).padStart(2,"0"),K=String(ie%60).padStart(2,"0");Z=`${V}:${K}`}})}}const N=Z?`☀️ ${te(Z)}`:"بدون حاضری صبح";let R=0,W=0,de=0;B.forEach(E=>{const ie=Number(E.testCount!==void 0?E.testCount:E.tests!==void 0?E.tests:0),re=Number(E.testCorrect||E.correct||0),v=Number(E.testWrong||E.wrong||0),V=Number(E.testUnanswered||E.unanswered||0);W+=re,de+=v;const K=re+v+V;R+=ie>0?ie:K});const G=R>0,ue=R>0?Math.min(100,Math.max(0,Math.round(W/R*100))):0,we=R>0?(W*3-de)/(R*3)*100:0,ge=Math.round(we),Ae=pt(ue),he=pt(ge),Te=localStorage.getItem("planex_daily_mood_"+t),Ie=ct.find(E=>E.id===Te),oe={},pe=["#38bdf8","#a78bfa","#f59e0b","#10b981","#ec4899","#6366f1","#f43f5e","#14b8a6","#8b5cf6","#0ea5e9"];B.forEach(E=>{const ie=E.subject||E.categoryName||E.title||E.name||"درس آزاد",re=Number(E.duration!==void 0?E.duration:E.minutes)||0;oe[ie]||(oe[ie]=0),oe[ie]+=re});const Fe=Object.keys(oe).map((E,ie)=>{const re=oe[E],v=U>0?Math.round(re/U*100):0,V=pe[ie%pe.length];return{name:E,mins:re,pct:v,color:V}}).sort((E,ie)=>ie.mins-E.mins);return`
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
                  ${k.charAt(0)}
                </div>
              `}
              <div style="text-align: right;">
                <div style="font-size: 1.08rem; font-weight: 900; color: #ffffff; letter-spacing: -0.3px;">${k}</div>
                <div style="display: inline-flex; align-items: center; background: rgba(124, 58, 237, 0.2); border: 1px solid rgba(167, 139, 250, 0.35); padding: 1px 8px; border-radius: 8px; font-size: 0.68rem; font-weight: 700; color: #c4b5fd; margin-top: 2px;">
                  🎯 ${M}
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
              ${C.map(E=>{const ie=p.normalizeJalaliDate(E.dateStr)===t,re=ie?"background: linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%); color: #ffffff; border-color: #a78bfa; box-shadow: 0 4px 12px rgba(124, 58, 237, 0.5);":"background: rgba(255, 255, 255, 0.03); color: #a1a1aa; border-color: rgba(255, 255, 255, 0.06);",v=E.isToday?'<span style="width: 4px; height: 4px; border-radius: 50%; background: #34d399; display: inline-block; margin-right: 2px;"></span>':"";return`
                  <button type="button"
                    class="weekday-tab-btn ${ie?"active":""}"
                    data-date="${E.dateStr}"
                    onclick="if(window.selectDailyModalDate){ window.selectDailyModalDate('${E.dateStr}'); }"
                    style="flex: 1; min-width: 48px; padding: 5px 2px; border-radius: 12px; border: 1px solid; font-size: 0.72rem; font-weight: 800; cursor: pointer; transition: all 0.15s ease; text-align: center; white-space: nowrap; ${re}">
                    <div style="font-size: 0.65rem; opacity: 0.9;">${E.dayName}</div>
                    <div style="font-size: 0.76rem; font-family: 'Outfit', sans-serif; margin-top: 1px;">${v}${te(E.dayOfMonth)}</div>
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
            ${Ft({size:250,showCenterInfo:!0,dateStr:t})}
          </div>

          <!-- 4. HERO GOAL COMPLETION PROGRESS CARD -->
          <div style="width: 100%; background: linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.02) 100%); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px; padding: 12px 16px; box-sizing: border-box; z-index: 2;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <span style="font-size: 0.76rem; font-weight: 700; color: #9ca3af;">⏱️ مجموع زمان مطالعه</span>
              <span style="font-size: 0.68rem; font-weight: 800; color: #38bdf8; background: rgba(56, 189, 248, 0.12); border: 1px solid rgba(56, 189, 248, 0.25); padding: 2px 8px; border-radius: 8px;">
                هدف: ${te(J)} ساعت
              </span>
            </div>
            <div style="font-size: 1.55rem; font-weight: 900; color: #ffffff; margin-bottom: 6px; background: linear-gradient(135deg, #ffffff 0%, #c4b5fd 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
              ${F}
            </div>
            
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.7rem; font-weight: 700; color: #c4b5fd; margin-bottom: 4px;">
              <span>پیشرفت تارگت روزانه</span>
              <span>${te(H)}٪</span>
            </div>
            <div style="width: 100%; height: 7px; background: rgba(255, 255, 255, 0.08); border-radius: 999px; overflow: hidden; position: relative;">
              <div style="width: ${H}%; height: 100%; background: linear-gradient(90deg, #0ea5e9 0%, #7c3aed 50%, #ec4899 100%); border-radius: 999px; box-shadow: 0 0 12px rgba(124, 58, 237, 0.6);"></div>
            </div>
          </div>

          <!-- 5. HIGH-CONTRAST BADGES GRID -->
          <div style="width: 100%; display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px; z-index: 2;">
            <div style="background: rgba(245, 158, 11, 0.08); border: 1px solid rgba(245, 158, 11, 0.25); border-radius: 12px; padding: 7px 4px; text-align: center;">
              <div style="font-size: 0.58rem; color: #fcd34d; font-weight: 700;">استریک</div>
              <div style="font-size: 0.82rem; font-weight: 900; color: #f59e0b; margin-top: 2px;">
                🔥 ${te(D)}
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
                ⏱️ ${te(Q)}
              </div>
            </div>

            <div style="background: rgba(167, 139, 250, 0.08); border: 1px solid rgba(167, 139, 250, 0.25); border-radius: 12px; padding: 7px 4px; text-align: center;">
              <div style="font-size: 0.58rem; color: #c4b5fd; font-weight: 700;">حاضری صبح</div>
              <div style="font-size: ${Z?"0.82rem":"0.68rem"}; font-weight: 900; color: ${Z?"#a78bfa":"#9ca3af"}; margin-top: 2px; white-space: nowrap;">
                ${N}
              </div>
            </div>
          </div>

          <!-- 5.5 TEST ACCURACY SUMMARY BLOCK (درصد با و بدون منفی) -->
          ${G?`
            <div style="width: 100%; display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; z-index: 2;">
              <div style="background: ${Ae.bg}; border: 1px solid ${Ae.border}; border-radius: 12px; padding: 6px 8px; text-align: center;">
                <div style="font-size: 0.58rem; color: ${Ae.text}; font-weight: 700;">درصد بدون منفی</div>
                <div style="font-size: 0.85rem; font-weight: 900; color: ${Ae.text}; margin-top: 1px;">
                  ${te(ue)}٪
                </div>
              </div>
              <div style="background: ${he.bg}; border: 1px solid ${he.border}; border-radius: 12px; padding: 6px 8px; text-align: center;">
                <div style="font-size: 0.58rem; color: ${he.text}; font-weight: 700;">درصد با احتساب منفی</div>
                <div style="font-size: 0.85rem; font-weight: 900; color: ${he.text}; margin-top: 1px;">
                  ${te(ge)}٪
                </div>
              </div>
            </div>
          `:""}

          <!-- 6. TOP SUBJECT PILLS SUMMARY OR ELEGANT EMPTY STATE -->
          ${B.length>0?`
            <div style="width: 100%; background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 14px; padding: 8px 12px; box-sizing: border-box; z-index: 2;">
              <div style="font-size: 0.68rem; font-weight: 700; color: #9ca3af; margin-bottom: 6px;">📚 دروس مطالعه‌شده این روز:</div>
              <div style="display: flex; flex-wrap: wrap; gap: 5px;">
                ${Fe.slice(0,4).map(E=>`
                  <div style="background: rgba(255,255,255,0.04); border: 1px solid ${E.color}55; padding: 3px 8px; border-radius: 8px; font-size: 0.65rem; font-weight: 700; color: #e4e4e7; display: flex; align-items: center; gap: 5px;">
                    <span style="width: 6px; height: 6px; border-radius: 50%; background: ${E.color};"></span>
                    <span>${E.name}:</span>
                    <span style="color: ${E.color}; font-weight: 800;">${Ge(E.mins)}</span>
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
              ${ct.map(E=>{const re=Ie&&Ie.id===E.id?"background: rgba(245, 158, 11, 0.25); border: 1.5px solid #fbbf24; color: #ffffff; font-weight: 900; box-shadow: 0 0 8px rgba(245, 158, 11, 0.3);":"background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); color: #a1a1aa; font-weight: 700;";return`
                  <button type="button" onclick="if(window.setDailyMood){ window.setDailyMood('${t}', '${E.id}'); }"
                    style="padding: 5px 2px; border-radius: 8px; font-size: 0.6rem; cursor: pointer; transition: all 0.15s ease; text-align: center; white-space: nowrap; ${re}">
                    ${E.badge}
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
  `}function yo(o=null){var re;const e=o||window.appState&&window.appState.selectedJalaliDetailDate||p.getTodayJalaliString(),t=p.normalizeJalaliDate(e),n=p&&typeof p.getTodayJalaliString=="function"?p.getTodayJalaliString():"",i=t===(p?p.normalizeJalaliDate(n):n),a=t.split("/").map(Number),r=a[0]||1404,s=a[1]||1,d=a[2]||1,c=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"][s-1]||"",y=(p.jalaliToJdn(r,s,d)+2)%7,u=`${["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه"][y]||"شنبه"} ${te(d)} ${c} ${te(r)}`;let m=null;try{m=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}")}catch{}const b=(typeof p.getUserProfile=="function"?p.getUserProfile():{})||{},S=localStorage.getItem("planex_user_avatar")||"",I=localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_leaderboard_nickname")||"",x=localStorage.getItem("planex_leaderboard_target")||"",k=I||b.name||b.displayName||b.nickname||(m==null?void 0:m.full_name)||(m==null?void 0:m.name)||"کاربر",A=x||b.target||b.major||b.targetField||"کنکور سراسری ۱۴۰۶",P=b.grade||b.educationGrade||"",M=P&&A&&!A.includes(P)?`${P} - ${A}`:A,T=S||b.avatar||b.photo||b.avatarUrl||(m==null?void 0:m.avatar_url)||null,O=typeof p<"u"&&typeof p.getCurrentWeek=="function"?p.getCurrentWeek():null,C=(O==null?void 0:O.days)||[],z=(typeof p.getActivitiesByDate=="function"?p.getActivitiesByDate(t):[])||[],B=z.filter(v=>v?!(v.type==="non-study"||v.type==="non_study"||v.type==="break"||v.activityType==="non_study"||v.activityType==="non-study"||v.activityType==="break"||v.isStudy===!1||v.is_study_time===!1||v.counts_for_study===!1||v.isBreak===!0||v.is_break===!0||v.timerType==="break"||v.timerType===2):!1),U=B.reduce((v,V)=>{const K=Number(V.duration!==void 0?V.duration:V.minutes);return v+(isNaN(K)?0:Math.max(0,Math.ceil(K)))},0),F=Ge(U),L=(typeof p.getStudyTargets=="function"?p.getStudyTargets():{})||{},J=Number(L.dailyStudyGoalHours||L.dailyTargetHours||8),Y=J*60,H=Y>0?Math.min(100,Math.round(U/Y*100)):0,Q=B.length,D=typeof p.getStudyStreak=="function"?p.getStudyStreak():0;let Z=null;const X=typeof _<"u"?_:typeof window<"u"?window.leaderboardService:null,xe=v=>{if(!v)return null;const V=se=>!se||typeof se!="string"?se:se.replace(/[۰-۹]/g,j=>"۰۱۲۳۴۵۶۷۸۹".indexOf(j)).replace(/[٠-٩]/g,j=>"٠١٢٣٤٥٦٧٨٩".indexOf(j));if(typeof v=="string"){const j=V(v).trim().match(/(?:^|\b|T|\s)(\d{1,2}):(\d{2})/);if(j){const q=parseInt(j[1],10),ae=parseInt(j[2],10);if(!isNaN(q)&&!isNaN(ae)&&q>=0&&q<24&&ae>=0&&ae<60)return q*60+ae}}let K=null;if(typeof v=="number")K=v;else if(typeof v=="object"&&v!==null&&(K=v.timestamp||v.createdAt||v.start||null,!K&&(v.startTime||v.start_time||v.startTimeStr)))return xe(v.startTime||v.start_time||v.startTimeStr);if(K){const se=new Date(K);if(!isNaN(se.getTime()))try{const q=se.toLocaleTimeString("en-US",{timeZone:"Asia/Tehran",hour12:!1,hour:"2-digit",minute:"2-digit"}).split(":").map(Number);if(q.length>=2&&!isNaN(q[0])&&!isNaN(q[1]))return q[0]*60+q[1]}catch{return se.getHours()*60+se.getMinutes()}}return null},ye=v=>v!==null&&v>=5*60&&v<=7*60;let ce=null;if(X){if(i&&typeof X.getTodayWakeTime=="function"&&(ce=X.getTodayWakeTime()),!ce&&typeof X.getEarlyBirdHistory=="function"){const v=X.getEarlyBirdHistory()||{};ce=v[t]||(i?v[(re=X.getTodayDateStr)==null?void 0:re.call(X)]:null)}if(!ce&&i&&typeof X.getTodayEarlyBird=="function"){const v=X.getTodayEarlyBird();v&&(v.wakeTime||v.wake_time)&&(ce=v.wakeTime||v.wake_time)}}const h=xe(ce);if(ye(h)){const v=String(Math.floor(h/60)).padStart(2,"0"),V=String(h%60).padStart(2,"0");Z=`${v}:${V}`}if(!Z){const v=z&&z.length>0?z:B;if(v&&v.length>0){let V=1440;v.forEach(K=>{let se=null;if(X&&typeof X.extractSessionStartMinutes=="function"?se=X.extractSessionStartMinutes(K):se=xe(K.startTime||K.start_time||K.startTimeStr||K.time||K.timestamp||K.createdAt||K),se!==null&&ye(se)&&se<V){V=se;const j=String(Math.floor(V/60)).padStart(2,"0"),q=String(V%60).padStart(2,"0");Z=`${j}:${q}`}})}}const N=Z?`☀️ ${te(Z)}`:"بدون حاضری صبح";let R=0,W=0,de=0,G=0;B.forEach(v=>{const V=Number(v.testCount!==void 0?v.testCount:v.tests!==void 0?v.tests:0),K=Number(v.testCorrect!==void 0?v.testCorrect:v.correct!==void 0?v.correct:0),se=Number(v.testWrong!==void 0?v.testWrong:v.wrong!==void 0?v.wrong:0),j=Number(v.testUnanswered!==void 0?v.testUnanswered:v.unanswered!==void 0?v.unanswered:0);W+=K,de+=se,G+=j;const q=K+se+j;R+=V>0?V:q});const ue=R>0,we=R>0?Math.min(100,Math.max(0,Math.round(W/R*100))):0,ge=R>0?(W*3-de)/(R*3)*100:0,Ae=Math.round(ge),he=pt(we),Te=pt(Ae),Ie=localStorage.getItem("planex_daily_mood_"+t),oe=ct.find(v=>v.id===Ie),pe={},Fe=["#38bdf8","#a78bfa","#f59e0b","#10b981","#ec4899","#6366f1","#f43f5e","#14b8a6","#8b5cf6","#0ea5e9"];B.forEach(v=>{const V=v.subject||v.categoryName||v.title||v.name||"درس آزاد",K=Number(v.duration!==void 0?v.duration:v.minutes)||0;pe[V]||(pe[V]=0),pe[V]+=K});const He=Object.keys(pe).map((v,V)=>{const K=pe[v],se=U>0?Math.round(K/U*100):0,j=Fe[V%Fe.length];return{name:v,mins:K,pct:se,color:j}}).sort((v,V)=>V.mins-v.mins),E={یادگیری:{mins:0,icon:"🧠",bg:"rgba(99, 102, 241, 0.15)",border:"rgba(129, 140, 248, 0.35)",color:"#818cf8"},تست‌زنی:{mins:0,icon:"🎯",bg:"rgba(16, 185, 129, 0.15)",border:"rgba(52, 211, 153, 0.35)",color:"#34d399"},مرور:{mins:0,icon:"🔄",bg:"rgba(245, 158, 11, 0.15)",border:"rgba(251, 191, 36, 0.35)",color:"#fbbf24"},جمع‌بندی:{mins:0,icon:"📑",bg:"rgba(14, 165, 233, 0.15)",border:"rgba(56, 189, 248, 0.35)",color:"#38bdf8"}};B.forEach(v=>{const V=Number(v.duration!==void 0?v.duration:v.minutes)||0,K=(v.studyType||v.activityType||v.type||"").toString().toLowerCase();K.includes("تست")||K.includes("test")?E.تست‌زنی.mins+=V:K.includes("مرور")||K.includes("review")?E.مرور.mins+=V:K.includes("جمع")||K.includes("summary")?E.جمع‌بندی.mins+=V:E.یادگیری.mins+=V});const ie=[...B].map(v=>{const V=v.subject||v.categoryName||v.title||v.name||"درس آزاد",K=v.studyType||"یادگیری",se=Number(v.testCorrect||v.correct||0),j=Number(v.testWrong||v.wrong||0),q=Number(v.testUnanswered||v.unanswered||0),ae=Number(v.testCount||v.tests||se+j+q),me=uo(v);return{subject:V,timeRangeStr:me,studyType:K,tCount:ae,c:se,w:j,u:q}});return`
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
                  ${k.charAt(0)}
                </div>
              `}
              <div style="text-align: right;">
                <div style="font-size: 1.05rem; font-weight: 900; color: #ffffff; letter-spacing: -0.3px;">${k}</div>
                <div style="display: inline-flex; align-items: center; background: rgba(56, 189, 248, 0.15); border: 1px solid rgba(56, 189, 248, 0.35); padding: 1px 8px; border-radius: 8px; font-size: 0.68rem; font-weight: 700; color: #38bdf8; margin-top: 2px;">
                  🎯 ${M}
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
              ${C.map(v=>{const V=p.normalizeJalaliDate(v.dateStr)===t,K=V?"background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); color: #ffffff; border-color: #38bdf8; box-shadow: 0 4px 12px rgba(14, 165, 233, 0.4);":"background: rgba(255, 255, 255, 0.03); color: #a1a1aa; border-color: rgba(255, 255, 255, 0.06);",se=v.isToday?'<span style="width: 5px; height: 5px; border-radius: 50%; background: #34d399; display: inline-block; margin-right: 3px;"></span>':"";return`
                  <button type="button"
                    class="weekday-tab-btn ${V?"active":""}"
                    data-date="${v.dateStr}"
                    onclick="if(window.selectDailyModalDate){ window.selectDailyModalDate('${v.dateStr}'); }"
                    style="flex: 1; min-width: 48px; padding: 6px 2px; border-radius: 12px; border: 1px solid; font-size: 0.72rem; font-weight: 800; cursor: pointer; transition: all 0.15s ease; text-align: center; white-space: nowrap; ${K}">
                    <div style="font-size: 0.66rem; opacity: 0.9;">${v.dayName}</div>
                    <div style="font-size: 0.78rem; font-family: 'Outfit', sans-serif; margin-top: 1px;">${se}${te(v.dayOfMonth)}</div>
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
                هدف: ${te(J)} ساعت
              </span>
            </div>
            <div style="font-size: 1.65rem; font-weight: 900; color: #ffffff; margin: 6px 0 10px 0; background: linear-gradient(135deg, #ffffff 0%, #38bdf8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
              ${F}
            </div>
            
            <!-- Daily Goal Completion Progress Bar -->
            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.72rem; font-weight: 700; color: #7dd3fc; margin-bottom: 5px;">
              <span>پیشرفت تارگت روزانه</span>
              <span>${te(H)}٪</span>
            </div>
            <div style="width: 100%; height: 8px; background: rgba(255, 255, 255, 0.08); border-radius: 999px; overflow: hidden; position: relative;">
              <div style="width: ${H}%; height: 100%; background: linear-gradient(90deg, #0284c7 0%, #10b981 50%, #f59e0b 100%); border-radius: 999px; box-shadow: 0 0 12px rgba(16, 185, 129, 0.6);"></div>
            </div>
          </div>

          <!-- 4. TOP MINI STATS GRID (3 Boxes) -->
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; z-index: 2;">
            <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 8px 6px; text-align: center;">
              <div style="font-size: 0.66rem; color: #9ca3af; font-weight: 700;">تعداد جلسات</div>
              <div style="font-size: 0.95rem; font-weight: 900; color: #38bdf8; margin-top: 3px;">
                ${te(Q)} <span style="font-size: 0.7rem; font-weight: 600;">جلسه</span>
              </div>
            </div>

            <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 8px 6px; text-align: center;">
              <div style="font-size: 0.66rem; color: #9ca3af; font-weight: 700;">استریک مطالعه</div>
              <div style="font-size: 0.95rem; font-weight: 900; color: #f97316; margin-top: 3px;">
                🔥 ${te(D)} <span style="font-size: 0.7rem; font-weight: 600;">روز</span>
              </div>
            </div>

            <div style="background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 8px 6px; text-align: center;">
              <div style="font-size: 0.66rem; color: #9ca3af; font-weight: 700;">ساعت حاضری صبح</div>
              <div style="font-size: ${Z?"0.95rem":"0.78rem"}; font-weight: 900; color: ${Z?"#10b981":"#9ca3af"}; margin-top: 3px; white-space: nowrap;">
                ${N}
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
                  <div style="font-size: 0.78rem; font-weight: 800; color: #34d399;">${te(W)}</div>
                </div>
                <div style="background: rgba(239,68,68,0.1); padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.6rem; color: #fca5a5; white-space: nowrap;">غلط</div>
                  <div style="font-size: 0.78rem; font-weight: 800; color: #f87171;">${te(de)}</div>
                </div>
                <div style="background: rgba(161,161,170,0.1); padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.6rem; color: #d4d4d8; white-space: nowrap;">نزده</div>
                  <div style="font-size: 0.78rem; font-weight: 800; color: #a1a1aa;">${te(G)}</div>
                </div>
                <div style="background: ${he.bg}; border: 1px solid ${he.border}; padding: 4px 2px; border-radius: 8px;">
                  <div style="font-size: 0.58rem; color: ${he.text}; white-space: nowrap; font-weight: 700;">بدون منفی</div>
                  <div style="font-size: 0.78rem; font-weight: 900; color: ${he.text};">${te(we)}٪</div>
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
            ${He.length>0?`
              <div style="display: flex; flex-direction: column; gap: 6px;">
                ${He.slice(0,6).map(v=>`
                  <div>
                    <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.7rem; margin-bottom: 2px; gap: 6px;">
                      <div style="display: flex; align-items: center; gap: 6px; min-width: 0; flex: 1; overflow: hidden; white-space: nowrap;">
                        <span style="width: 7px; height: 7px; border-radius: 50%; background: ${v.color}; flex-shrink: 0; box-shadow: 0 0 6px ${v.color};"></span>
                        <span style="font-weight: 700; color: #ffffff; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${v.name}</span>
                      </div>
                      <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0; white-space: nowrap;">
                        <span style="color: #9ca3af; font-size: 0.65rem;">${Ge(v.mins)}</span>
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
              ${Object.keys(E).map(v=>{const V=E[v];return`
                  <div style="background: ${V.bg}; border: 1px solid ${V.border}; padding: 5px 8px; border-radius: 10px; display: flex; align-items: center; justify-content: space-between;">
                    <div style="display: flex; align-items: center; gap: 4px;">
                      <span style="font-size: 0.8rem;">${V.icon}</span>
                      <span style="font-size: 0.68rem; font-weight: 700; color: #e4e4e7;">${v}</span>
                    </div>
                    <span style="font-size: 0.68rem; font-weight: 800; color: ${V.color};">
                      ${Ge(V.mins)}
                    </span>
                  </div>
                `}).join("")}
            </div>
          </div>

          <!-- 8. TIMELINE SESSIONS LIST WITH FIXED TIMESTAMP FORMATTING OR ELEGANT EMPTY STATE -->
          <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.07); border-radius: 16px; padding: 10px 12px; z-index: 2; flex-grow: 1; display: flex; flex-direction: column;">
            <div style="font-size: 0.74rem; font-weight: 800; color: #e4e4e7; margin-bottom: 6px; display: flex; justify-content: space-between; align-items: center;">
              <span>🕒 جریان زمانی جلسات</span>
              <span style="font-size: 0.65rem; color: #9ca3af;">${te(ie.length)} پارت</span>
            </div>
            
            ${ie.length>0?`
              <div style="display: flex; flex-direction: column; gap: 6px; overflow: hidden;">
                ${ie.slice(0,5).map(v=>`
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
                ${ie.length>5?`
                  <div style="font-size: 0.62rem; color: #8e8e9c; text-align: center; margin-top: 2px;">
                    و ${te(ie.length-5)} جلسه دیگر...
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
              ${ct.map(v=>{const K=oe&&oe.id===v.id?"background: linear-gradient(135deg, rgba(245, 158, 11, 0.25) 0%, rgba(217, 119, 6, 0.2) 100%); border: 1.5px solid #fbbf24; color: #ffffff; box-shadow: 0 0 12px rgba(245, 158, 11, 0.35); font-weight: 900;":"background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); color: #d4d4d8; font-weight: 700;";return`
                  <button type="button"
                    onclick="if(window.setDailyMood){ window.setDailyMood('${t}', '${v.id}'); }"
                    style="padding: 7px 8px; border-radius: 12px; font-size: 0.7rem; cursor: pointer; transition: all 0.15s ease; display: flex; align-items: center; justify-content: center; gap: 4px; ${K}">
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
  `}function Ze(o,e=!1){const t=document.getElementById("planex-story-toast");t&&t.remove();const n=document.createElement("div");n.id="planex-story-toast",Object.assign(n.style,{position:"fixed",bottom:"24px",left:"50%",transform:"translateX(-50%)",padding:"12px 24px",borderRadius:"14px",fontSize:"0.88rem",fontWeight:"700",color:"#ffffff",background:e?"linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)":"linear-gradient(135deg, #10b981 0%, #059669 100%)",boxShadow:"0 8px 24px rgba(0, 0, 0, 0.4)",zIndex:"999999",direction:"rtl",transition:"opacity 0.3s ease",opacity:"0"}),n.textContent=o,document.body.appendChild(n),requestAnimationFrame(()=>{n.style.opacity="1"}),setTimeout(()=>{n.style.opacity="0",setTimeout(()=>n.remove(),350)},3e3)}function Ct(o){const e=t=>{if(t.nodeType!==1)return;const n=t.style;n.filter&&(n.filter="none"),n.backdropFilter&&(n.backdropFilter="none"),n.webkitBackdropFilter&&(n.webkitBackdropFilter="none"),["color","backgroundColor","borderColor"].forEach(i=>{const a=n[i];if(a&&a.includes("var(")){const r=getComputedStyle(t)[i];r&&(n[i]=r)}});for(const i of t.children)e(i)};e(o)}async function Ht(o,e){try{if(typeof navigator<"u"&&navigator.share&&navigator.canShare){const i=await(await fetch(o)).blob(),a=new File([i],e,{type:i.type||"image/png"});if(navigator.canShare({files:[a]})){await navigator.share({files:[a],title:"PlanEx Story"});return}}}catch(n){n&&n.name!=="AbortError"&&console.warn("[triggerDownload] Web Share failed, falling back to anchor:",n)}const t=document.createElement("a");t.download=e,t.href=o,document.body.appendChild(t),t.click(),document.body.removeChild(t)}function Wt(o,e,t,n){return new Promise((i,a)=>{try{const r="http://www.w3.org/2000/svg",s=o.cloneNode(!0);Ct(s),s.style.width=e+"px",s.style.height=t+"px";const d=new XMLSerializer().serializeToString(s),l=`
        <svg xmlns="${r}" width="${e}" height="${t}">
          <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml">${d}</div>
          </foreignObject>
        </svg>`,c=new Image,g=new Blob([l],{type:"image/svg+xml;charset=utf-8"}),y=URL.createObjectURL(g);c.onload=()=>{const f=document.createElement("canvas");f.width=e*n,f.height=t*n;const w=f.getContext("2d");w.fillStyle="#030712",w.fillRect(0,0,f.width,f.height),w.scale(n,n),w.drawImage(c,0,0,e,t),URL.revokeObjectURL(y),i(f)},c.onerror=f=>{URL.revokeObjectURL(y),a(new Error("Fallback SVG-to-Canvas render failed: "+(f.message||f)))},c.src=y}catch(r){a(r)}})}async function Et(){const o=document.getElementById("btn-download-story-card"),e=document.getElementById("planex-story-card-canvas");if(!e){Ze("عنصر کارت پیدا نشد.",!0);return}const t=o?o.innerHTML:"";o&&(o.disabled=!0,o.innerHTML="<span>⏳</span><span>در حال ساخت تصویر...</span>");const n=()=>{o&&(o.disabled=!1,o.innerHTML=t)},a=`PlanEx_Daily_Story_${typeof p<"u"&&typeof p.getTodayJalaliString=="function"?p.getTodayJalaliString().replace(/\//g,"-"):new Date().toISOString().slice(0,10)}.png`;let r=null;try{r=e.cloneNode(!0),r.id="planex-story-card-offscreen",Object.assign(r.style,{position:"fixed",left:"-9999px",top:"0",zIndex:"-1",display:"flex",width:"440px",height:"740px",minHeight:"740px",maxHeight:"740px",maxWidth:"none",transform:"none"}),Ct(r),document.body.appendChild(r),await new Promise(d=>requestAnimationFrame(()=>requestAnimationFrame(d)))}catch(d){console.warn("Story card: clone failed, capturing in-place.",d),r=null}const s=r||e;try{let d;try{d=await Ut(s,{scale:2,useCORS:!0,allowTaint:!0,backgroundColor:"#090d16",logging:!1,removeContainer:!1})}catch(c){console.warn("html2canvas failed, attempting fallback:",c);const g=s.offsetWidth||440,y=s.offsetHeight||740;d=await Wt(s,g,y,2)}const l=d.toDataURL("image/png");Ht(l,a),o&&(o.innerHTML="<span>✅</span><span>تصویر با موفقیت دانلود شد!</span>",setTimeout(n,2500)),Ze("تصویر کارت استوری با موفقیت ذخیره شد ✅")}catch(d){console.error("Story card export failed:",d),Ze("خطا در دانلود تصویر: "+(d.message||d),!0),n()}finally{r&&r.parentNode&&r.parentNode.removeChild(r)}}async function mo(){const o=document.getElementById("btn-download-analysis-report"),e=document.getElementById("planex-analysis-report-canvas");if(!e){Ze("عنصر کارنامه تحلیلی پیدا نشد.",!0);return}const t=o?o.innerHTML:"";o&&(o.disabled=!0,o.innerHTML="<span>⏳</span><span>در حال ساخت تصویر کارنامه...</span>");const n=()=>{o&&(o.disabled=!1,o.innerHTML=t)},a=`PlanEx_Daily_Analysis_${typeof p<"u"&&typeof p.getTodayJalaliString=="function"?p.getTodayJalaliString().replace(/\//g,"-"):new Date().toISOString().slice(0,10)}.png`;let r=null;try{r=e.cloneNode(!0),r.id="planex-analysis-report-offscreen",Object.assign(r.style,{position:"fixed",left:"-9999px",top:"0",zIndex:"-1",display:"flex",width:"460px",maxHeight:"none",transform:"none"}),Ct(r),document.body.appendChild(r),await new Promise(d=>requestAnimationFrame(()=>requestAnimationFrame(d)))}catch(d){console.warn("Analysis report clone failed, capturing in-place.",d),r=null}const s=r||e;try{let d;try{d=await Ut(s,{scale:2,useCORS:!0,allowTaint:!0,backgroundColor:"#090d16",logging:!1,removeContainer:!1})}catch(c){console.warn("html2canvas failed for analysis report, attempting fallback:",c);const g=s.offsetWidth||460,y=s.offsetHeight||820;d=await Wt(s,g,y,2)}const l=d.toDataURL("image/png");Ht(l,a),o&&(o.innerHTML="<span>✅</span><span>تصویر کارنامه با موفقیت دانلود شد!</span>",setTimeout(n,2500)),Ze("کارنامه تحلیلی با موفقیت ذخیره شد ✅")}catch(d){console.error("Analysis report export failed:",d),Ze("خطا در دانلود تصویر: "+(d.message||d),!0),n()}finally{r&&r.parentNode&&r.parentNode.removeChild(r)}}if(typeof window<"u"&&(window.selectDailyModalDate=o=>{if(!o)return;const e=p&&typeof p.normalizeJalaliDate=="function"?p.normalizeJalaliDate(o):o;window.appState&&(window.appState.selectedJalaliDetailDate=e),typeof window.renderApp=="function"&&window.renderApp()},window.openStoryModal=(o="dailyStoryCard",e=null)=>{const t=typeof state<"u"&&state?state:window.appState,n=o==="dailyAnalysisReport"||o==="analysis"||o==="report"||o==="jalaliDayDetails"?"dailyAnalysisReport":"dailyStoryCard",i=p&&typeof p.getTodayJalaliString=="function"?p.getTodayJalaliString():null,a=e||(t==null?void 0:t.selectedJalaliDetailDate)||i;t&&(a&&(t.selectedJalaliDetailDate=a),t.activeModal=n),window.appState&&window.appState!==t&&(a&&(window.appState.selectedJalaliDetailDate=a),window.appState.activeModal=n);try{history.pushState({modal:n},"")}catch{}typeof window.renderApp=="function"&&window.renderApp()},window.closeStoryModal=()=>{typeof state<"u"&&state&&(state.activeModal=null),window.appState&&(window.appState.activeModal=null),typeof window.renderApp=="function"&&window.renderApp()},window.openDailyStoryCard=(o=null)=>{window.openStoryModal("dailyStoryCard",o)},window.closeDailyStoryCard=()=>{window.closeStoryModal()},window.openDailyAnalysisReport=(o=null)=>{window.openStoryModal("dailyAnalysisReport",o)},window.closeDailyAnalysisReport=()=>{window.closeStoryModal()},window.openDailyReportModal=(o=null)=>{window.openStoryModal("dailyAnalysisReport",o)},window.openQuickStoryModal=(o=null)=>{window.openStoryModal("dailyStoryCard",o)},window.closeDailyReportModal=()=>{window.closeStoryModal()},window.closeQuickStoryModal=()=>{window.closeStoryModal()},window.openDailyReport=window.openDailyReportModal,window.openQuickStory=window.openQuickStoryModal,window.openDailyAnalysisModal=window.openDailyReportModal,window.openJalaliDayDetailsModal=(o=null)=>{window.openStoryModal("dailyAnalysisReport",o)},window.downloadStoryCardPNG=Et,window.generateStoryCardPNG=Et,window.downloadAnalysisReportPNG=mo,window.setDailyMood=(o,e)=>{if(!o||!e)return;const t=p&&typeof p.normalizeJalaliDate=="function"?p.normalizeJalaliDate(o):o;localStorage.setItem("planex_daily_mood_"+t,e),typeof window.renderApp=="function"&&window.renderApp()},window.weekdaySelectorDelegationBound||(document.addEventListener("click",o=>{const e=o.target.closest(".weekday-tab-btn, [data-weekday-date]");if(e){const t=e.dataset.date||e.dataset.weekdayDate;t&&typeof window.selectDailyModalDate=="function"&&window.selectDailyModalDate(t)}}),window.weekdaySelectorDelegationBound=!0),window.dailyModalKeyboardBound||(document.addEventListener("keydown",o=>{(o.key==="Escape"||o.keyCode===27)&&window.appState&&(window.appState.activeModal==="dailyStoryCard"||window.appState.activeModal==="dailyAnalysisReport")&&(o.preventDefault(),window.appState.activeModal=null,typeof window.renderApp=="function"&&window.renderApp())}),window.addEventListener("popstate",()=>{window.appState&&(window.appState.activeModal==="dailyStoryCard"||window.appState.activeModal==="dailyAnalysisReport")&&(window.appState.activeModal=null,typeof window.renderApp=="function"&&window.renderApp())}),window.dailyModalKeyboardBound=!0),!window.dailyRingAutoSyncBound)){const o=()=>{document.querySelector(".daily-ring-widget-card")&&typeof window.renderApp=="function"&&window.renderApp()};window.addEventListener("activity-saved",o),window.addEventListener("storage",e=>{(e.key==="planex_recent_activity_sessions"||e.key==="planex_study_logs"||e.key==="planex_active_timer_state")&&o()}),window.dailyRingAutoSyncBound=!0}const ne=o=>String(o??"").replace(/[0-9]/g,e=>"۰۱۲۳۴۵۶۷۸۹"[e]);typeof window<"u"&&(window.openGPACalculator=()=>{window.appState&&(window.appState.activeModal="gpaCalc"),window.renderApp&&window.renderApp()},window.openRankEstimator=()=>{window.appState&&(window.appState.activeModal="rankEstimator"),window.renderApp&&window.renderApp();try{var o=document.getElementById("modal-rank-estimator")||document.getElementById("modal-konkur-estimator");o&&(o.style.display="flex",o.classList.add("active"))}catch{}},window.openKonkurEstimatorModal=function(){try{var o="";try{typeof At=="function"?o=At():typeof Tt=="function"&&(o=Tt())}catch{o=""}var e=null;try{e=document.getElementById("modals-root")||document.getElementById("modal-container")||document.body}catch{e=null}var t=null;try{t=document.getElementById("modal-konkur-estimator")||document.getElementById("modal-rank-estimator")}catch{t=null}var n=!0;try{t&&t.innerHTML&&t.innerHTML.length>500&&t.querySelector("select, input")&&(n=!1)}catch{n=!0}if(n&&e&&o){try{var i=document.getElementById("modal-konkur-estimator");if(i){var s=document.createElement("div");s.innerHTML=o;var d=s.firstElementChild;d?i.innerHTML=d.innerHTML:i.innerHTML=o}else{var a=document.createElement("div");a.innerHTML=o;var r=a.firstElementChild;r?e.appendChild(r):e.insertAdjacentHTML("beforeend",o)}}catch{try{e.insertAdjacentHTML("beforeend",o)}catch{}}try{t=document.getElementById("modal-konkur-estimator")||document.getElementById("modal-rank-estimator")}catch{}}try{Mt()}catch{}t&&(t.style.display="flex",t.classList.add("active"))}catch{}try{if(window.appState&&(window.appState.activeModal="rankEstimator"),typeof window.renderApp=="function"){window.renderApp();try{var l=document.getElementById("modal-konkur-estimator")||document.getElementById("modal-rank-estimator");l&&(l.style.display="flex",l.classList.add("active"))}catch{}try{Mt()}catch{}}}catch{}},window.closeKonkurEstimatorModal=function(){try{["modal-konkur-estimator","modal-rank-estimator"].forEach(function(o){var e=document.getElementById(o);e&&(e.style.display="none",e.classList.remove("active"))})}catch{}try{window.appState&&(window.appState.activeModal=null),typeof window.renderApp=="function"&&window.renderApp()}catch{}},window.openPercentCalculator=()=>{window.appState&&(window.appState.activeModal="percentCalc"),window.renderApp&&window.renderApp()},window.openExamBox=()=>{window.appState&&(window.appState.activeModal="examBox"),window.renderApp&&window.renderApp()},window.openSleepScheduler=()=>{window.appState&&(window.appState.activeModal="sleepScheduler"),window.renderApp&&window.renderApp()});function on(o){return yo(o)}typeof window<"u"&&(window.handlePercentCalcInput=function(o,e){window.percentCalcState=window.percentCalcState||{correct:20,incorrect:4,unanswered:6},window.percentCalcState[o]=e,window.updatePercentCalculation()},window.updatePercentCalculation=function(){const o=window.percentCalcState||{correct:20,incorrect:4,unanswered:6},e=Math.max(0,parseInt(o.correct)||0),t=Math.max(0,parseInt(o.incorrect)||0),n=Math.max(0,parseInt(o.unanswered)||0),i=e+t+n,a=i>0?(3*e-t)/(3*i)*100:0,r=Math.max(-33.3,Math.min(100,a)).toFixed(1);let s="#10b981",d="عالی 🚀 (عملکرد فوق‌العاده)";a<50?(s="#ef4444",d="نیاز به مرور و تمرکز بیشتر ⚠️"):a<70&&(s="#f59e0b",d="خوب و قابل ارتقا 👍");const l=i>0?(t/(3*i)*100).toFixed(1):"0",c=document.getElementById("percent-calc-card-box");c&&(c.style.borderColor=s);const g=document.getElementById("percent-calc-score-display");g&&(g.textContent=`${ne(r)}٪`,g.style.color=s);const y=document.getElementById("percent-calc-badge");y&&(y.textContent=d,y.style.color=s,y.style.borderColor=s);const f=document.getElementById("percent-calc-total-display");f&&(f.textContent=`${ne(i)} سوال`);const w=document.getElementById("percent-calc-positive-display");w&&(w.textContent=`+${ne(3*e)}`);const u=document.getElementById("percent-calc-lost-display");u&&(u.textContent=`-${ne(t)} امتیاز (-${ne(l)}٪)`)});function nn(){window.percentCalcState=window.percentCalcState||{correct:20,incorrect:4,unanswered:6};const{correct:o,incorrect:e,unanswered:t}=window.percentCalcState,n=Math.max(0,parseInt(o)||0),i=Math.max(0,parseInt(e)||0),a=Math.max(0,parseInt(t)||0),r=n+i+a,s=r>0?(3*n-i)/(3*r)*100:0,d=Math.max(-33.3,Math.min(100,s)).toFixed(1);let l="#10b981",c="عالی 🚀 (عملکرد فوق‌العاده)";s<50?(l="#ef4444",c="نیاز به مرور و تمرکز بیشتر ⚠️"):s<70&&(l="#f59e0b",c="خوب و قابل ارتقا 👍");const g=r>0?(i/(3*r)*100).toFixed(1):"0";return`
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
              ${ne(d)}٪
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
              <strong id="percent-calc-lost-display" style="color: #f87171; font-family: 'Outfit';">-${ne(i)} امتیاز (-${ne(g)}٪)</strong>
            </div>
          </div>
        </div>

        <button onclick="window.appState.activeModal = null; window.renderApp();" class="btn-primary" style="width: 100%; background: #fb923c; border: none; padding: 12px; border-radius: 14px; font-weight: 800; color: #000; cursor: pointer;">
          تایید و بستن
        </button>
      </div>
    </div>
  `}function Yt(o,e,t,n){const i=t>100?Math.round(Math.min(13500,Math.max(2e3,t))):Math.round(3500+Math.max(0,Math.min(100,t))*82),a=n>100?Math.round(Math.min(13500,Math.max(2e3,n))):n<=20?Math.round(3e3+Math.pow(Math.max(0,Math.min(20,n))/20,1.85)*8e3):Math.round(3e3+Math.pow(Math.max(0,Math.min(100,n))/100,1.85)*8e3),r=Math.round(i*.5+a*.5);let s="بیش از ۲۵,۰۰۰",d="بیش از ۶۰,۰۰۰",l="رشته‌های بر اساس سوابق تحصیلی و دانشگاه‌های غیرانتفاعی / آزاد",c="#ef4444";r>=10800?(s="۱ تا ۱۰۰",d="۱ تا ۲۵۰",l="پزشکی و دندان‌پزشکی دانشگاه تهران و علوم پزشکی شهید بهشتی",c="#10b981"):r>=1e4?(s="کمتر از ۵۰۰ (۱۰۰ تا ۵۰۰)",d="۲۵۰ تا ۱,۲۵۰",l="پزشکی / دندانپزشکی روزانه (دانشگاه‌های دولتی تیپ ۱ و ۲)",c="#10b981"):r>=9200?(s="۵۰۰ تا ۱,۵۰۰",d="۱,۲۵۰ تا ۳,۵۰۰",l="پزشکی و دندان‌پزشکی تیپ ۳ / داروسازی برتر مراکز استان",c="#34d399"):r>=8500?(s="۱,۵۰۰ تا ۳,۵۰۰",d="۳,۵۰۰ تا ۸,۲۰۰",l="داروسازی / فیزیوتراپی / پیراپزشکی برتر (دانشگاه‌های تیپ ۱ و ۲)",c="#38bdf8"):r>=8e3?(s="۳,۵۰۰ تا ۵,۰۰۰",d="۸,۲۰۰ تا ۱۲,۰۰۰",l="بینایی‌سنجی، کاردرمانی، پرستاری و مامایی تیپ ۱",c="#fbbf24"):r>=7e3?(s="۵,۰۰۰ تا ۱۲,۰۰۰",d="۱۲,۰۰۰ تا ۲۸,۰۰۰",l="پیراپزشکی‌ها (پرستاری، مامایی، هوشبری، اتاق عمل دولتی)",c="#fb923c"):r>=6e3?(s="۱۲,۰۰۰ تا ۲۵,۰۰۰",d="۲۸,۰۰۰ تا ۶۰,۰۰۰",l="علوم پایه، بهداشت و پیراپزشکی‌های شهریه‌پرداز / پردیس / آزاد",c="#a1a1aa"):(s="بیش از ۲۵,۰۰۰",d="بیش از ۶۰,۰۰۰",l="دوره‌های نوبت دوم، پیام‌نور و پذیرش بر اساس سوابق تحصیلی",c="#ef4444");let g=s;return e==="منطقه ۱"?r>=1e4?g="کمتر از ۳۵۰":r>=9200?g="۳۵۰ تا ۱,۱۰۰":r>=8500?g="۱,۱۰۰ تا ۲,۴۰۰":r>=8e3?g="۲,۴۰۰ تا ۳,۸۰۰":r>=7e3?g="۳,۸۰۰ تا ۸,۵۰۰":r>=6e3?g="۸,۵۰۰ تا ۱۸,۰۰۰":g="بیش از ۱۸,۰۰۰":e==="منطقه ۳"?r>=1e4?g="کمتر از ۴۰۰":r>=9200?g="۴۰۰ تا ۱,۳۰۰":r>=8500?g="۱,۳۰۰ تا ۳,۰۰۰":r>=8e3?g="۳,۰۰۰ تا ۴,۵۰۰":r>=7e3?g="۴,۵۰۰ تا ۱۰,۵۰۰":r>=6e3?g="۱۰,۵۰۰ تا ۲۲,۰۰۰":g="بیش از ۲۲,۰۰۰":e==="ایثارگران"&&(r>=1e4?g="کمتر از ۵۰ سهمیه":r>=8500?g="۵۰ تا ۳۰۰ سهمیه":r>=7e3?g="۳۰۰ تا ۱,۲۰۰ سهمیه":g="بیش از ۱,۲۰۰ سهمیه"),{konkurTazar:i,finalExamTazar:a,weightedTotalTazar:r,quotaRankDisplay:g,countryRankText:d,targetTier:l,badgeColor:c}}typeof window<"u"&&(window.handleRankEstimatorInput=function(o,e){window.rankEstimatorState||(window.rankEstimatorState={stream:"تجربی",region:"منطقه ۲",konkurScore:8800,finalScore:9e3}),window.rankEstimatorState[o]=e,window.updateRankEstimation()},window.updateRankEstimation=function(){const o=window.rankEstimatorState||{},e=o.stream||"تجربی",t=o.region||"منطقه ۲",n=o.konkurScore??o.dedicatedPct??8800,i=o.finalScore??o.generalPct??9e3,a=parseFloat(n)||0,r=parseFloat(i)||0,s=Yt(e,t,a,r),d=document.getElementById("rank-estimator-quota-display");d&&(d.textContent=ne(s.quotaRankDisplay),d.style.color=s.badgeColor);const l=document.getElementById("rank-estimator-quota-label");l&&(l.textContent=`🎯 رتبه تخمینی در سهمیه ${t}:`);const c=document.getElementById("rank-estimator-country-display");c&&(c.textContent=ne(s.countryRankText));const g=document.getElementById("rank-estimator-total-tazar");g&&(g.textContent=ne(s.weightedTotalTazar));const y=document.getElementById("rank-estimator-sub-tazars");y&&(y.textContent=`(کنکور: ${ne(s.konkurTazar)} • نهایی: ${ne(s.finalExamTazar)})`);const f=document.getElementById("rank-estimator-target-tier");f&&(f.textContent=s.targetTier);const w=document.getElementById("rank-estimator-result-card");w&&(w.style.borderColor=s.badgeColor)});function Tt(){window.rankEstimatorState=window.rankEstimatorState||{stream:"تجربی",region:"منطقه ۲",konkurScore:8800,finalScore:9e3};const{stream:o,region:e}=window.rankEstimatorState,t=window.rankEstimatorState.konkurScore??window.rankEstimatorState.dedicatedPct??8800,n=window.rankEstimatorState.finalScore??window.rankEstimatorState.generalPct??9e3,i=parseFloat(t)||0,a=parseFloat(n)||0,r=Yt(o,e,i,a);return`
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
  `}function At(){return Tt()}function Mt(){try{var o=null;try{o=document.getElementById("modal-konkur-estimator")||document.getElementById("modal-rank-estimator")}catch{o=null}if(!o)return;try{var e=o.querySelectorAll("select");e.forEach(function(n,i){try{if(n.dataset&&n.dataset.boundKonkur)return;n.dataset&&(n.dataset.boundKonkur="1"),n.addEventListener("change",function(){try{var a=i===0?"stream":"region";try{var r=n.options&&n.selectedIndex>=0?n.options[n.selectedIndex]:null,s=r&&(r.text||r.value)||"";s.indexOf("منطقه")>=0||s.indexOf("ایثار")>=0?a="region":a="stream",i===1&&(a="region"),i===0&&(a="stream")}catch{}typeof window.handleRankEstimatorInput=="function"?window.handleRankEstimatorInput(a,n.value):typeof window.updateRankEstimation=="function"&&window.updateRankEstimation()}catch{}})}catch{}})}catch{}try{var t=o.querySelectorAll('input[type="number"]');t.forEach(function(n,i){try{if(n.dataset&&n.dataset.boundKonkur)return;n.dataset&&(n.dataset.boundKonkur="1"),n.addEventListener("input",function(){try{var a=i===0?"konkurScore":"finalScore";typeof window.handleRankEstimatorInput=="function"?window.handleRankEstimatorInput(a,n.value):typeof window.updateRankEstimation=="function"&&window.updateRankEstimation()}catch{}})}catch{}})}catch{}}catch{}}if(typeof window<"u"){try{window.bindKonkurEstimatorLiveHandlers=Mt}catch{}try{window.renderKonkurEstimatorModal=At}catch{}}function an(){window.sleepSchedulerState=window.sleepSchedulerState||{mode:"wake",hour:6,minute:30};const{mode:o,hour:e,minute:t}=window.sleepSchedulerState,n=parseInt(e)*60+parseInt(t),a=[6,5,4,3].map(r=>{const s=r*90+15;let d=0;o==="wake"?d=(n-s+1440)%1440:d=(n+s)%1440;const l=Math.floor(d/60),c=d%60,g=`${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}`,y=(r*1.5).toFixed(1);return{cycleCount:r,hoursCount:y,timeStr:g,isOptimal:r===5||r===6}});return`
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
  `}const ut={12:[{name:"زیست‌شناسی / حسابان",coefficient:4},{name:"فیزیک",coefficient:3},{name:"شیمی",coefficient:3},{name:"ادبیات فارسی",coefficient:4},{name:"دین و زندگی",coefficient:3},{name:"زبان انگلیسی",coefficient:2},{name:"عربی، زبان قرآن",coefficient:2},{name:"سلامت و بهداشت",coefficient:1}],11:[{name:"درس اختصاصی ۱",coefficient:4},{name:"درس اختصاصی ۲",coefficient:3},{name:"درس اختصاصی ۳",coefficient:3},{name:"ادبیات فارسی",coefficient:4},{name:"دین و زندگی",coefficient:3},{name:"زبان انگلیسی",coefficient:2},{name:"عربی، زبان قرآن",coefficient:2},{name:"تاریخ / زمین‌شناسی",coefficient:1}],10:[{name:"درس اختصاصی ۱",coefficient:4},{name:"درس اختصاصی ۲",coefficient:3},{name:"درس اختصاصی ۳",coefficient:3},{name:"ادبیات فارسی",coefficient:4},{name:"دین و زندگی",coefficient:3},{name:"زبان انگلیسی",coefficient:2},{name:"عربی، زبان قرآن",coefficient:2},{name:"آمادگی دفاعی",coefficient:1}]};typeof window<"u"&&(window.handleGPAInputChange=function(o,e){window.gpaCalcState||(window.gpaCalcState={grade:"12",scores:{}}),window.gpaCalcState.scores||(window.gpaCalcState.scores={}),window.gpaCalcState.scores[o]=e,window.updateGPACalculation()},window.handleGPAGradeChange=function(o){window.gpaCalcState||(window.gpaCalcState={grade:"12",scores:{}}),window.gpaCalcState.grade=o,window.renderApp&&window.renderApp()},window.updateGPACalculation=function(){const o=window.gpaCalcState||{grade:"12",scores:{}},e=o.grade||"12",t=o.scores||{},n=ut[e]||ut[12];let i=0,a=0;n.forEach(f=>{const w=t[f.name],u=w!=null&&w!==""?parseFloat(w):20,m=isNaN(u)?0:Math.max(0,Math.min(20,u)),b=parseFloat(f.coefficient||f.weight)||1;i+=m*b,a+=b});const r=a>0?i/a:0,s=Number(r.toFixed(2)).toFixed(2);let d="#10b981",l="عالی 🟢";r<14?(d="#ef4444",l="نیازمند جبران 🔴"):r<17?(d="#fbbf24",l="مناسب 🟡"):(d="#10b981",l="عالی 🟢");const c=document.getElementById("gpa-result-display");c&&(c.textContent=`${ne(s)} از ۲۰`,c.style.color=d);const g=document.getElementById("gpa-status-badge");g&&(g.textContent=`وضعیت: ${l}`,g.style.color=d);const y=document.getElementById("gpa-card-box");y&&(y.style.borderColor=d)});function rn(){window.gpaCalcState=window.gpaCalcState||{grade:"12",scores:{}};const{grade:o}=window.gpaCalcState,e=window.gpaCalcState.scores=window.gpaCalcState.scores||{},n=(ut[o]||ut[12]).map(c=>{const g=e[c.name],y=g!=null&&g!==""?parseFloat(g):20;return{name:c.name,grade:isNaN(y)?0:Math.max(0,Math.min(20,y)),coefficient:parseFloat(c.coefficient||c.weight)||1}});let i=0,a=0;n.forEach(c=>{const g=parseFloat(c.grade)||0,y=parseFloat(c.coefficient)||1;i+=g*y,a+=y});const r=a>0?i/a:0,s=Number(r.toFixed(2)).toFixed(2);let d="#10b981",l="عالی 🟢";return r<14?(d="#ef4444",l="نیازمند جبران 🔴"):r<17?(d="#fbbf24",l="مناسب 🟡"):(d="#10b981",l="عالی 🟢"),`
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

          <div id="gpa-card-box" style="background: rgba(31, 32, 41, 0.9); border: 1.5px solid ${d}; border-radius: 20px; padding: 16px; text-align: center; transition: border-color 0.2s ease;">
            <div style="font-size: 0.78rem; color: #a1a1aa; font-weight: bold;">معدل کل کتبی نهایی (وزنی)</div>
            <div id="gpa-result-display" style="font-size: 2.3rem; font-weight: 900; color: ${d}; font-family: 'Outfit'; margin: 2px 0; transition: color 0.2s ease;">
              ${ne(s)} از ۲۰
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
  `}typeof window<"u"&&(window.handleExamBoxInput=function(o,e){window.examBoxState=window.examBoxState||{days:14,chapters:21,rounds:2},window.examBoxState[o]=e,window.updateExamBoxCalculation()},window.updateExamBoxCalculation=function(){const o=window.examBoxState||{days:14,chapters:21,rounds:2},e=Math.max(1,parseInt(o.days)||1),t=Math.max(1,parseInt(o.chapters)||1),n=Math.max(1,parseInt(o.rounds)||1),i=t*n,a=(i/e).toFixed(1),r=Math.max(1,Math.floor(e*.6)),s=Math.max(1,Math.floor(e*.25)),d=Math.max(1,e-r-s),l=document.getElementById("exam-box-pace-display");l&&(l.textContent=`${ne(a)} فصل در روز`);const c=document.getElementById("exam-box-summary-display");c&&(c.textContent=`(مجموع ${ne(i)} واحد مطالعه در ${ne(e)} روز)`);const g=document.getElementById("exam-box-phase1-display");g&&(g.textContent=`${ne(r)} روز اول`);const y=document.getElementById("exam-box-phase2-display");y&&(y.textContent=`${ne(s)} روز بعدی`);const f=document.getElementById("exam-box-phase3-display");f&&(f.textContent=`${ne(d)} روز پایانی`)});function sn(){window.examBoxState=window.examBoxState||{days:14,chapters:21,rounds:2};const{days:o,chapters:e,rounds:t}=window.examBoxState,n=Math.max(1,parseInt(o)||1),i=Math.max(1,parseInt(e)||1),a=Math.max(1,parseInt(t)||1),r=i*a,s=(r/n).toFixed(1),d=Math.max(1,Math.floor(n*.6)),l=Math.max(1,Math.floor(n*.25)),c=Math.max(1,n-d-l);return`
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
              ${ne(s)} فصل در روز
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
              <strong id="exam-box-phase1-display">${ne(d)} روز اول</strong>
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
  `}class bo{constructor(){this.ctx=null,this.activeSoundType=null,this.isLoadingSound=null,this.isMuted=!1,this.volume=.5,this.proceduralNodes=null,this.currentBlobUrl=null,typeof Audio<"u"?(this.audioElement=new Audio,this.audioElement.loop=!0,this.audioElement.preload="none",this.audioElement.onerror=e=>{var t;console.warn("Audio Playback CDN Warning for:",(t=this.audioElement)==null?void 0:t.src,"Falling back to Web Audio Synth..."),this.isLoadingSound=null,this.activeSoundType&&this.startProceduralSynth(this.activeSoundType),window.renderApp&&window.renderApp()}):this.audioElement=null}initContext(){try{if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}catch(e){console.warn("AudioContext init error:",e)}}setVolume(e){if(this.volume=parseFloat(e)||.5,this.audioElement&&(this.audioElement.volume=this.volume),this.proceduralNodes&&this.proceduralNodes.masterGain)try{this.proceduralNodes.masterGain.gain.setValueAtTime(this.volume*.4,this.ctx?this.ctx.currentTime:0)}catch{}}stopProceduralSynth(){if(this.proceduralNodes){try{this.proceduralNodes.sources&&this.proceduralNodes.sources.forEach(e=>{try{e.stop(),e.disconnect()}catch{}}),this.proceduralNodes.interval&&clearInterval(this.proceduralNodes.interval)}catch{}this.proceduralNodes=null}}stopSound(){if(this.stopProceduralSynth(),this.audioElement&&(this.audioElement.pause(),this.audioElement.removeAttribute("src"),this.audioElement.load()),this.currentBlobUrl){try{URL.revokeObjectURL(this.currentBlobUrl)}catch{}this.currentBlobUrl=null}this.activeSoundType=null,this.isLoadingSound=null}startProceduralSynth(e){try{if(this.initContext(),!this.ctx)return;this.stopProceduralSynth();const t=2*this.ctx.sampleRate,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),i=n.getChannelData(0);let a=0;for(let l=0;l<t;l++){const c=Math.random()*2-1;i[l]=(a+.02*c)/1.02,a=i[l],i[l]*=3.5}const r=this.ctx.createBufferSource();r.buffer=n,r.loop=!0;const s=this.ctx.createGain();s.gain.setValueAtTime(this.volume*.35,this.ctx.currentTime);const d=this.ctx.createBiquadFilter();if(e.includes("brown"))d.type="lowpass",d.frequency.setValueAtTime(320,this.ctx.currentTime);else if(e.includes("rain")||e.includes("thunder"))d.type="lowpass",d.frequency.setValueAtTime(1100,this.ctx.currentTime);else if(e.includes("ocean")||e.includes("wave")){d.type="bandpass",d.frequency.setValueAtTime(400,this.ctx.currentTime),d.Q.setValueAtTime(1,this.ctx.currentTime);const l=this.ctx.createOscillator(),c=this.ctx.createGain();l.frequency.setValueAtTime(.12,this.ctx.currentTime),c.gain.setValueAtTime(300,this.ctx.currentTime),l.connect(c),c.connect(d.frequency),l.start()}else e.includes("river")||e.includes("forest")?(d.type="bandpass",d.frequency.setValueAtTime(800,this.ctx.currentTime)):(d.type="lowpass",d.frequency.setValueAtTime(750,this.ctx.currentTime));r.connect(d),d.connect(s),s.connect(this.ctx.destination),r.start(),this.proceduralNodes={masterGain:s,sources:[r]}}catch(t){console.warn("Procedural synth error:",t)}}async playAmbient(e,t){if(this.activeSoundType===e)return this.stopSound(),!1;if(this.stopSound(),this.initContext(),t){this.isLoadingSound=e,this.activeSoundType=e,t.startsWith("blob:")&&(this.currentBlobUrl=t),console.log("Now playing:",e,t),this.audioElement.src=t,this.audioElement.volume=this.volume,this.audioElement.loop=!0,this.audioElement.preload="none";try{return await this.audioElement.play(),this.isLoadingSound=null,!0}catch(n){if(n.name!=="AbortError")return console.warn("Audio play promise failed, using Web Audio Synth:",n),this.isLoadingSound=null,this.startProceduralSynth(e),!0}}else return this.activeSoundType=e,this.startProceduralSynth(e),!0;return!1}playPomodoroAlarm(){try{if(this.initContext(),!this.ctx)return;this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{});const e=this.ctx.currentTime;[{start:0,freq:587.33,dur:.32,gain:.28},{start:.22,freq:739.99,dur:.32,gain:.32},{start:.45,freq:880,dur:.48,gain:.36},{start:1,freq:587.33,dur:.32,gain:.28},{start:1.22,freq:739.99,dur:.32,gain:.32},{start:1.45,freq:880,dur:.48,gain:.36},{start:2,freq:659.25,dur:.45,gain:.3},{start:2.22,freq:880,dur:.78,gain:.38}].forEach(n=>{const i=this.ctx.createOscillator(),a=this.ctx.createGain();i.type="sine",i.frequency.setValueAtTime(n.freq,e+n.start);const r=e+n.start,s=r+n.dur;a.gain.setValueAtTime(1e-4,r),a.gain.linearRampToValueAtTime(n.gain,r+.03),a.gain.exponentialRampToValueAtTime(1e-4,s),i.connect(a),a.connect(this.ctx.destination),i.start(r),i.stop(s)})}catch(e){console.warn("Pomodoro Web Audio playback error:",e)}}}const Ee=new bo;function xo(){Ee.playPomodoroAlarm()}function wo(){if(typeof window<"u"&&"Notification"in window&&Notification.permission==="default")try{Notification.requestPermission().catch(()=>{})}catch{}}function ho(o=1){if(typeof navigator<"u"&&typeof navigator.vibrate=="function")try{navigator.vibrate([300,150,300])}catch{}if(typeof window<"u"&&"Notification"in window&&Notification.permission==="granted"){const e=o===2,t=e?"⏰ پایان استراحت - پلنکس":"⏰ پایان پومودورو - پلنکس",i={body:e?"زمان استراحت شما به پایان رسید! آماده شروع یک پارت مطالعه باانرژی باشید.":"زمان پارت مطالعه شما به پایان رسید! وقت یک استراحت کوتاه است.",icon:"/logo-transparent.png",badge:"/logo-transparent.png",vibrate:[200,100,200],tag:"planex-pomodoro-finished",renotify:!0};try{new Notification(t,i)}catch{typeof navigator<"u"&&"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(r=>{r&&r.showNotification&&r.showNotification(t,i)}).catch(()=>{})}}}typeof window<"u"&&(window.playPomodoroAlarm=xo,window.sendPomodoroNotification=ho,window.requestPomodoroNotificationPermission=wo);const qt=[{id:"rain_window",title:"🌧️ باران ملایم و پنجره",category:"nature",url:"https://actions.google.com/sounds/v1/weather/rain_heavy.ogg"},{id:"deep_brown_noise",title:"🟤 نویز قهوه‌ای عمیق",category:"focus",url:null},{id:"ambient_piano",title:"🎹 پیانو امبینت بی‌کلام",category:"music",url:"https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=ambient-piano-11070.mp3"},{id:"lofi_study",title:"🎧 لو-فای ملایم مطالعه",category:"music",url:"https://stream.zeno.fm/f3wvbbqmdg8uv"},{id:"rain_soothing",title:"🌧️ باران ملایم و پنجره",category:"nature",url:"https://actions.google.com/sounds/v1/weather/rain_heavy.ogg"},{id:"rain_gentle",title:"🌧️ باران ملایم و پنجره",category:"nature",url:"https://actions.google.com/sounds/v1/weather/rain_heavy.ogg"},{id:"thunderstorm",title:"⚡ رعد و برق",category:"nature",url:"https://actions.google.com/sounds/v1/weather/rain_heavy.ogg"},{id:"brown_noise",title:"🟤 نویز قهوه‌ای عمیق",category:"focus",url:null},{id:"river_stream",title:"🏞️ جریان آب رودخانه",category:"nature",url:"https://actions.google.com/sounds/v1/water/stream_water.ogg"},{id:"coffee_shop",title:"☕ کافه شلوغ",category:"ambient",url:"https://actions.google.com/sounds/v1/ambiences/coffee_shop.ogg"},{id:"forest_birds",title:"🌲 جنگل و پرندگان",category:"nature",url:"https://actions.google.com/sounds/v1/environments/forest_birds.ogg"},{id:"ocean_waves",title:"🌊 امواج دریا",category:"nature",url:"https://actions.google.com/sounds/v1/water/waves_crashing.ogg"},{id:"lofi_study_fassounds",title:"🎧 لو-فای ملایم مطالعه",category:"music",url:"https://stream.zeno.fm/f3wvbbqmdg8uv"},{id:"lofi_jazz_mountain",title:"🎷 لوفای جاز",category:"music",url:"https://stream.zeno.fm/f3wvbbqmdg8uv"}],vo="planex_audio_db",So=1,qe="custom_tracks";typeof navigator<"u"&&navigator.storage&&navigator.storage.persist&&navigator.storage.persist().then(o=>{o&&console.log("[audioDb] Persistent storage granted by browser.")}).catch(()=>{});function vt(){return new Promise((o,e)=>{if(typeof indexedDB>"u"){e(new Error("IndexedDB is not supported in this browser."));return}const t=indexedDB.open(vo,So);t.onupgradeneeded=n=>{const i=n.target.result;i.objectStoreNames.contains(qe)||i.createObjectStore(qe,{keyPath:"id"})},t.onsuccess=n=>{o(n.target.result)},t.onerror=n=>{e(n.target.error||new Error("Failed to open audio database."))}})}const Ke={async saveTrack(o,e=""){if(!o)throw new Error("فایل صوتی انتخاب نشده است.");const t=await vt(),n=e||o.name||"آهنگ جدید",a={id:"custom_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),name:n,fileName:o.name||"audio.mp3",fileType:o.type||"audio/mpeg",blob:o,createdAt:Date.now()};return new Promise((r,s)=>{const c=t.transaction(qe,"readwrite").objectStore(qe).put(a);c.onsuccess=()=>r(a),c.onerror=g=>s(g.target.error||new Error("خطا در ذخیره فایل صوتی در دیتابیس"))})},async getTracks(){try{const o=await vt();return new Promise((e,t)=>{const a=o.transaction(qe,"readonly").objectStore(qe).getAll();a.onsuccess=()=>e(a.result||[]),a.onerror=r=>t(r.target.error||new Error("خطا در دریافت لیست آهنگ‌ها"))})}catch(o){return console.warn("[audioDb] getTracks failed:",o),[]}},async deleteTrack(o){if(!o)return!1;const e=await vt();return new Promise((t,n)=>{const r=e.transaction(qe,"readwrite").objectStore(qe).delete(o);r.onsuccess=()=>t(!0),r.onerror=s=>n(s.target.error||new Error("خطا در حذف آهنگ"))})}};typeof window<"u"&&(window.audioDb=Ke);const ko=[{id:"rain_window",label:"باران ملایم و پنجره",icon:"🌧️",category:"nature"},{id:"deep_brown_noise",label:"نویز قهوه‌ای عمیق",icon:"🟤",category:"focus"},{id:"ambient_piano",label:"پیانو امبینت بی‌کلام",icon:"🎹",category:"music"},{id:"lofi_study",label:"لو-فای ملایم مطالعه",icon:"🎧",category:"music"}];typeof window<"u"&&!window._customAudioTracksLoaded&&(window._customAudioTracksLoaded=!0,window.customAudioTracksList=[],Ke.getTracks().then(o=>{window.customAudioTracksList=o||[],window.renderApp&&window.renderApp()}).catch(()=>{}));function Vt(o={}){const e=Ee.activeSoundType||null,t=!!e,n=Ee.volume!==void 0?Math.round(Ee.volume*100):50,i=qt.find(d=>d.id===e),a=window.customAudioTracksList||[],r=a.find(d=>d.id===e),s=r?`آهنگ شخصی: «${r.name}»`:i?`در حال پخش: «${i.title}»`:"افزایش تمرکز با لوفای، پیانو و آهنگ‌های دلخواه";return`
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
        ${ko.map(d=>{const l=e===d.id||d.id==="rain_window"&&(e==="rain_soothing"||e==="rain_gentle")||d.id==="deep_brown_noise"&&e==="brown_noise"||d.id==="lofi_study"&&e==="lofi_study_fassounds";return`
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

        ${a.length===0?`
          <div style="font-size: 0.72rem; color: #8e8e9c; text-align: center; padding: 6px 0;">
            هنوز آهنگ دلخواهی اضافه نشده است. با دکمه بالا فایل صوتی (MP3/WAV) اضافه کنید.
          </div>
        `:`
          <div style="display: flex; flex-direction: column; gap: 6px; max-height: 160px; overflow-y: auto; scrollbar-width: thin;">
            ${a.map(d=>{const l=e===d.id;return`
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
  `}typeof window<"u"&&(window.selectAmbientSound=o=>{const e=qt.find(t=>t.id===o);e&&Ee.playAmbient(e.id,e.url).then(()=>{window.renderApp&&window.renderApp()})},window.toggleAmbientAudio=(o="lofi_study")=>{Ee.activeSoundType?(Ee.stopSound(),window.renderApp&&window.renderApp()):window.selectAmbientSound(o)},window.setAmbientVolume=o=>{const e=parseFloat(o)/100;Ee.setVolume(e)},window.handleCustomAudioUpload=async o=>{var t,n;const e=(n=(t=o.target)==null?void 0:t.files)==null?void 0:n[0];if(e)try{const i=await Ke.saveTrack(e,e.name);window.customAudioTracksList=await Ke.getTracks(),window.showToast&&window.showToast(`آهنگ «${i.name}» با موفقیت ذخیره شد! 🎵`,"success"),window.renderApp&&window.renderApp()}catch(i){console.error("Custom audio upload error:",i),window.showToast&&window.showToast("خطا در ذخیره فایل صوتی در دیتابیس","error")}},window.playCustomAudioTrack=async o=>{if(Ee.activeSoundType===o){Ee.stopSound(),window.renderApp&&window.renderApp();return}const t=(window.customAudioTracksList||await Ke.getTracks()).find(n=>n.id===o);if(t&&t.blob){const n=URL.createObjectURL(t.blob);Ee.playAmbient(t.id,n).then(()=>{window.renderApp&&window.renderApp()})}else window.showToast&&window.showToast("فایل صوتی یافت نشد.","error")},window.deleteCustomAudioTrack=async o=>{Ee.activeSoundType===o&&Ee.stopSound(),await Ke.deleteTrack(o),window.customAudioTracksList=await Ke.getTracks(),window.showToast&&window.showToast("آهنگ با موفقیت حذف شد 🗑️","info"),window.renderApp&&window.renderApp()});const Nt=[{id:"یادگیری",label:"یادگیری",icon:"🧠",desc:"مطالعه درسنامه و مفهومی"},{id:"تست‌زنی",label:"تست‌زنی",icon:"🎯",desc:"حل تست آموزشی و زمان‌دار"},{id:"مرور",label:"مرور",icon:"🔄",desc:"مرور خلاصه، فلش‌کارت و یادداشت"},{id:"جمع‌بندی",label:"جمع‌بندی",icon:"📑",desc:"جمع‌بندی سرفصل و آزمون جامع"}];typeof window<"u"&&(window.closeQuickActivityModal=function(){try{const o=document.getElementById("modal-fab-activity-registration");o&&(o.style.display="none",o.classList.remove("active"))}catch(o){console.warn("[closeQuickActivityModal] DOM hide error:",o)}try{typeof window.closeFabActivityModal=="function"?window.closeFabActivityModal():window.appState&&(window.appState.activeModal=null,typeof window.renderApp=="function"&&window.renderApp())}catch(o){console.warn("[closeQuickActivityModal] state update error:",o)}},window.showLiveTimerSection=function(){try{var o=document.getElementById("section-live-timer");o&&(o.style.display="block");var e=document.getElementById("section-manual-log");e&&(e.style.display="none");try{var t=document.getElementById("fab-timer-section");t&&t!==o&&(t.style.display="block");var n=document.getElementById("fab-manual-section");n&&n!==e&&(n.style.display="none")}catch{}var i=document.getElementById("btn-mode-timer");i&&i.classList.add("active");var a=document.getElementById("btn-mode-manual");a&&a.classList.remove("active")}catch{}try{window.fabActivityState=window.fabActivityState||{},window.fabActivityState.activeTab="timer"}catch{}},window.showManualLogSection=function(){try{var o=document.getElementById("section-live-timer");o&&(o.style.display="none");var e=document.getElementById("section-manual-log");e&&(e.style.display="block");try{var t=document.getElementById("fab-timer-section");t&&t!==o&&(t.style.display="none");var n=document.getElementById("fab-manual-section");n&&n!==e&&(n.style.display="block")}catch{}var i=document.getElementById("btn-mode-timer");i&&i.classList.remove("active");var a=document.getElementById("btn-mode-manual");a&&a.classList.add("active")}catch{}try{window.fabActivityState=window.fabActivityState||{},window.fabActivityState.activeTab="manual"}catch{}},window.switchFabActivityTab=function(o,e){try{e&&e.preventDefault&&e.preventDefault()}catch{}try{e&&e.stopPropagation&&e.stopPropagation()}catch{}try{const t=o==="manual"?"manual":"timer";if(t==="manual")try{window.showManualLogSection()}catch{}else try{window.showLiveTimerSection()}catch{}try{const n=document.getElementById("fab-timer-section"),i=document.getElementById("fab-manual-section");n&&(n.style.display=t==="timer"?"block":"none"),i&&(i.style.display=t==="manual"?"block":"none")}catch{}window.fabActivityState=window.fabActivityState||{},window.fabActivityState.activeTab=t}catch(t){console.warn("[switchFabActivityTab] error:",t)}},window._fabTabDelegationAttached||(window._fabTabDelegationAttached=!0,document.addEventListener("click",o=>{try{const e=o.target&&o.target.closest?o.target.closest(".btn-fab-modal-tab"):null;if(!e||!e.closest("#modal-fab-activity-registration"))return;const t=e.getAttribute("data-tab")||e.getAttribute("data-mode");(t==="timer"||t==="manual")&&(o.preventDefault(),o.stopPropagation(),window.switchFabActivityTab(t,o))}catch{}})));function dn(o={}){var f,w;const e=window.fabActivityState||{activeTab:"timer",timerType:"pomodoro",categoryCode:null,subject:"",studyType:"یادگیری",startTime:"08:00",endTime:"09:30",durationMins:90,testCorrect:0,testWrong:0,testUnanswered:0},t=u=>String(u).replace(/[0-9]/g,m=>"۰۱۲۳۴۵۶۷۸۹"[m]),n=(typeof p<"u"?p.getCategories():[])||[],i=n.filter(u=>Pe(u)),a=e.categoryCode||((f=i[0])==null?void 0:f.code)||((w=n[0])==null?void 0:w.code)||"ع-س",r=typeof p<"u"&&typeof p.getUniqueLoggedTopics=="function"?p.getUniqueLoggedTopics(a):[],d=((u,m)=>{try{const[b,S]=(u||"08:00").split(":").map(Number),[I,x]=(m||"09:30").split(":").map(Number);if(!isNaN(b)&&!isNaN(S)&&!isNaN(I)&&!isNaN(x)){let k=b*60+S,A=I*60+x;A<k&&(A+=24*60);const P=A-k;return P>0?P:60}}catch{}return 60})(e.startTime,e.endTime);e.durationMins=d;const l=Math.max(0,parseInt(e.testCorrect)||0),c=Math.max(0,parseInt(e.testWrong)||0),g=Math.max(0,parseInt(e.testUnanswered)||0),y=l+c+g;return`
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
                ${Nt.map(u=>{const m=e.studyType===u.id||e.selectedPhase===u.id||!e.studyType&&!e.selectedPhase&&u.id==="یادگیری";return`
                    <button type="button" class="btn-phase-chip btn-fab-study-pill ${m?"active":""}" data-phase="${u.id}" data-pill="${u.id}" onclick="event.preventDefault(); event.stopPropagation(); window.selectStudyPhase && window.selectStudyPhase(this, '${u.id}')" style="padding: 10px 12px; border-radius: 14px; border: 1.5px solid ${m?"#10b981":"rgba(255,255,255,0.08)"}; background: ${m?"rgba(16,185,129,0.2)":"#1f2029"}; color: ${m?"#ffffff":"#e4e4e7"}; font-size: 0.82rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; gap: 8px; text-align: right; transition: all 0.15s ease;">
                      <span style="font-size: 1.2rem;">${u.icon}</span>
                      <div>
                        <strong style="display: block; font-size: 0.84rem;">${u.label}</strong>
                        <span style="font-size: 0.68rem; color: ${m?"#a7f3d0":"#71717a"}; font-weight: normal;">${u.desc}</span>
                      </div>
                    </button>
                  `}).join("")}
              </div>
              <input type="hidden" id="fab-timer-phase" value="${e.studyType||e.selectedPhase||"یادگیری"}" />
            </div>

            <!-- 🎵 Ambient Focus Sound Player Widget -->
            ${Vt()}

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
                ${Nt.map(u=>{const m=e.studyType===u.id||e.selectedPhase===u.id||!e.studyType&&!e.selectedPhase&&u.id==="یادگیری";return`
                    <button type="button" class="btn-phase-chip btn-fab-study-pill ${m?"active":""}" data-phase="${u.id}" data-pill="${u.id}" onclick="event.preventDefault(); event.stopPropagation(); window.selectStudyPhase && window.selectStudyPhase(this, '${u.id}')" style="padding: 8px 4px; border-radius: 12px; border: 1px solid ${m?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${m?"#7c3aed":"#1f2029"}; color: ${m?"#ffffff":"#e4e4e7"}; font-size: 0.78rem; font-weight: 800; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 2px;">
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
                  مجموع: ${t(y)} تست
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
  `}function Kt(){const o=typeof localStorage<"u"&&(localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_nickname")||localStorage.getItem("planex_leaderboard_nickname"))||"";if(o&&!_e(o))return o.trim();let e=null;try{e=JSON.parse(localStorage.getItem("planex_user_profile")||localStorage.getItem("planex_profile")||"null")}catch{}if(e!=null&&e.nickname&&!_e(e.nickname))return e.nickname.trim();if(e!=null&&e.name&&!_e(e.name))return e.name.trim();let t=null;try{t=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}return t!=null&&t.full_name&&!_e(t.full_name)?t.full_name.trim():t!=null&&t.name&&!_e(t.name)?t.name.trim():t!=null&&t.first_name&&!_e(t.first_name)?t.first_name.trim():""}function Qt(){try{let o=null;try{o=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}let e=null;try{e=JSON.parse(localStorage.getItem("planex_user_profile")||"null")}catch{}const n=localStorage.getItem("planex_user_avatar")||""||(e==null?void 0:e.avatar)||(e==null?void 0:e.avatar_url)||(e==null?void 0:e.photo)||(e==null?void 0:e.photoUrl)||(o==null?void 0:o.avatar_url)||(o==null?void 0:o.photo_url)||"",i=Kt(),a=!!(i||n||o&&(o.id||o.telegram_id||o.phone||o.phone_number)),r=i||(a?"کاربر":"ورود"),s=document.getElementById("btn-header-user-account");if(s){const d=s.querySelector("span:last-child");d&&d.textContent!==r&&(d.textContent=r);const l=s.querySelector("img");if(n)if(l)l.src!==n&&(l.src=n);else{const c=s.querySelector("span:first-child");if(c&&c.textContent.includes("👤")){const g=document.createElement("img");g.src=n,g.style.cssText="width: 22px; height: 22px; border-radius: 50%; object-fit: cover; aspect-ratio: 1 / 1; border: 1px solid rgba(16, 185, 129, 0.5);",g.onerror=function(){this.onerror=null,this.src="https://api.dicebear.com/7.x/avataaars/svg?seed=planex"},c.replaceWith(g)}}s.style.borderColor=a?"rgba(16, 185, 129, 0.4)":"rgba(255, 255, 255, 0.08)",s.style.color=a?"#34d399":"#a1a1aa"}}catch(o){console.warn("[Header] updateHeaderDOM error:",o)}}typeof window<"u"&&(window.updateHeaderDOM=Qt);if(typeof window<"u"&&!window._headerProfileListenerAttached){window._headerProfileListenerAttached=!0;const o=()=>{Qt(),typeof window.renderApp=="function"&&window.renderApp()};window.addEventListener("profileUpdated",o),window.addEventListener("auth-changed",o),window.addEventListener("storage",e=>{(e.key==="planex_user_avatar"||e.key==="planex_user_profile"||e.key==="planex_auth_user"||e.key==="planex_user_nickname")&&o()})}function ln(o=null){let e=null;try{e=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}let t=null;try{t=JSON.parse(localStorage.getItem("planex_user_profile")||localStorage.getItem("planex_profile")||"null")}catch{}const i=localStorage.getItem("planex_user_avatar")||""||(t==null?void 0:t.avatar)||(t==null?void 0:t.avatar_url)||(t==null?void 0:t.photo)||(t==null?void 0:t.photoUrl)||(e==null?void 0:e.avatar_url)||(e==null?void 0:e.photo_url)||"",a=Kt(),r=!!(a||i||e&&(e.id||e.telegram_id||e.email||e.phone||e.phone_number)),s=a||(r?"کاربر":"ورود");return`<header class="app-header" style=" min-height: 44px; display: flex; align-items: center; justify-content: space-between; overflow: hidden; width: 100%; box-sizing: border-box; gap: 8px;">
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
          <span style="font-size: 0.74rem; font-weight: 700; max-width: 75px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${s}</span>
        </button>
      </div>
    </header>
  `}function cn(o=0){const e=o===5||o==="5"||o==="leaderboard"||o==="competition",t=[{id:0,title:"داشبورد",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>'},{id:1,title:"برنامه‌ریزی",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>'},{id:2,title:"روتین‌ها",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>'},{id:"leaderboard",title:"رقابت 🏆",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1v-2.34c0-.52-.2-1.02-.57-1.39A6.98 6.98 0 0 1 4 9V4h16v5a6.98 6.98 0 0 1-1.43 4.27c-.37.37-.57.87-.57 1.39V17c0 .55-.45 1-1 1h-2c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2v7"/></svg>'},{id:3,title:"ابزارها",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>'},{id:4,title:"مقالات",icon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>'}],n=t.slice(0,3),i=t.slice(3),a=r=>`
      <div class="nav-item ${(r.id==="leaderboard"||r.id==="competition")&&e||r.id===o||String(r.id)===String(o)?"active":""}" data-tab="${r.id}">
        ${r.icon}
        <span>${r.title}</span>
      </div>
    `;return`
    <nav class="bottom-nav">
      ${n.map(a).join("")}
      
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
  `}const pn={isSessionActive:!1,realServerCount:0,getUserId(){try{const e=localStorage.getItem("planex_user_account");if(e){const t=JSON.parse(e);if(t&&(t.id||t.username))return String(t.id||t.username)}}catch{}let o=localStorage.getItem("planex_pomodoro_device_id");return o||(o="pomo_"+Math.random().toString(36).substring(2,11)+"_"+Date.now().toString(36),localStorage.setItem("planex_pomodoro_device_id",o)),o},getNaturalTimeOfDayBaseline(){let o=new Date().getHours(),e=new Date().getMinutes();try{const a=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Tehran",hour:"numeric",hour12:!1}).format(new Date),r=parseInt(a,10);isNaN(r)||(o=r);const s=new Intl.DateTimeFormat("en-US",{timeZone:"Asia/Tehran",minute:"numeric"}).format(new Date),d=parseInt(s,10);isNaN(d)||(e=d)}catch{}let t=25;const n=e/60;if(o>=6&&o<9){const a=(o-6+n)/3;return t=Math.round(15+a*10),Math.min(25,Math.max(15,t))}if(o>=9&&o<17){const a=[27,32,36,38,32,28,34,38],r=o-9,s=a[r]||30,d=r+1<a.length?a[r+1]:38;return t=Math.round(s+(d-s)*n),Math.min(40,Math.max(25,t))}if(o>=17&&o<23){const a=[40,47,53,52,46,38],r=o-17,s=a[r]||45,d=r+1<a.length?a[r+1]:36;return t=Math.round(s+(d-s)*n),Math.min(55,Math.max(35,t))}return t={23:11,0:9,1:7,2:6,3:5,4:7,5:10}[o]||7,Math.min(12,Math.max(5,t))},getDisplayActiveUsers(){const o=this.getNaturalTimeOfDayBaseline(),e=this.isSessionActive?1:0,t=Math.max(e,parseInt(this.realServerCount)||0);return o+t},async startSession(o=25,e=!0){if(!e)return this.isSessionActive=!1,{success:!0,count:this.getDisplayActiveUsers()};this.isSessionActive=!0;const t=this.getUserId();try{const n=await fetch(`${le}/api/pomodoro/active.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"start",userId:t,durationMinutes:parseInt(o)||25})}),i=await n.text();let a=null;try{a=i?JSON.parse(i):null}catch{a=null}if(n.ok&&a){const r=parseInt(a.count??a.activeUsersCount)||1;return this.realServerCount=Math.max(1,r),{success:!0,count:this.getDisplayActiveUsers()}}}catch(n){console.warn("[PomodoroService] Server communication error on start:",n)}return this.realServerCount=Math.max(1,this.realServerCount||1),{success:!0,count:this.getDisplayActiveUsers()}},async stopSession(){this.isSessionActive=!1;const o=this.getUserId();try{const e=await fetch(`${le}/api/pomodoro/active.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"stop",userId:o})}),t=await e.text();let n=null;try{n=t?JSON.parse(t):null}catch{n=null}if(e.ok&&n){const i=parseInt(n.count??n.activeUsersCount)||0;return this.realServerCount=Math.max(0,i),{success:!0,count:this.getDisplayActiveUsers()}}}catch(e){console.warn("[PomodoroService] Server communication error on stop:",e)}return this.realServerCount=0,{success:!0,count:this.getDisplayActiveUsers()}},async fetchActiveCount(){try{const o=await fetch(`${le}/api/pomodoro/active.php`),e=await o.text();let t=null;try{t=e?JSON.parse(e):null}catch{t=null}if(o.ok&&t){const n=parseInt(t.count??t.activeUsersCount)||0;return this.realServerCount=n,{success:!0,count:this.getDisplayActiveUsers()}}}catch(o){console.warn("[PomodoroService] Server communication error on fetch count:",o)}return{success:!1,count:this.getDisplayActiveUsers()}}};typeof window<"u"&&(window.isUserActivelyTyping=!1,typeof document<"u"&&(document.addEventListener("focusin",o=>{const e=o.target;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.hasAttribute&&e.hasAttribute("contenteditable")||e.isContentEditable)&&(window.isUserActivelyTyping=!0)}),document.addEventListener("focusout",o=>{const e=o.target;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.hasAttribute&&e.hasAttribute("contenteditable")||e.isContentEditable)&&(window.isUserActivelyTyping=!1)})));function Dt(o){if(!o)return"";let e=String(o).trim();return e=e.replace(/[۰-۹]/g,t=>"۰۱۲۳۴۵۶۷۸۹".indexOf(t)),e=e.replace(/[٠-٩]/g,t=>"٠١٢٣٤٥٦٧٨٩".indexOf(t)),e=e.replace(/[^0-9]/g,""),e.startsWith("00989")?e="0"+e.slice(4):e.startsWith("0989")?e="0"+e.slice(3):e.startsWith("989")?e="0"+e.slice(2):e.startsWith("9")&&e.length===10&&(e="0"+e),e}const fe={getOrCreateSyncToken(){return p.getOrCreatePersonalSyncToken()},setSyncToken(o){return p.setPersonalSyncToken(o)},getSyncStatus(){return p.getPersonalSyncInfo()},exportLocalState(){try{const o=p.exportAllDataJSON();return JSON.parse(o)}catch(o){console.warn("[PersonalSync] db.exportAllDataJSON failed, using fallback:",o);const e={};for(let t=0;t<localStorage.length;t++){const n=localStorage.key(t);if(n&&(n.startsWith("planex_")||n.startsWith("theme_")||n.startsWith("app_")||n.startsWith("timer_")))try{e[n]=JSON.parse(localStorage.getItem(n))}catch{e[n]=localStorage.getItem(n)}}return e}},importLocalState(o){if(!o)return!1;try{return p.importAllDataJSON(o)}catch(e){return console.error("[PersonalSync] Import failed:",e),!1}},_isPushingNow:!1,_hasPendingPush:!1,async pushToCloud(o=null,e=null,t=null){if(this._isPushingNow)return this._hasPendingPush=!0,{success:!1,message:"Push already in progress"};this._isPushingNow=!0;try{let n=null;try{n=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}const i=p&&typeof p.getUserProfile=="function"?p.getUserProfile():{},a=Dt(o||(n==null?void 0:n.phone)||(n==null?void 0:n.phone_number)||i.phone||""),r=(n==null?void 0:n.password)||"",s=this.exportLocalState();if(!a)return{success:!1,message:"شماره تلفن کاربر یافت نشد."};let d=[];try{d=JSON.parse(localStorage.getItem("planex_my_groups")||"[]")}catch{d=[]}let l=[];try{const u=JSON.parse(localStorage.getItem("planex_recent_activity_sessions")||"[]"),m=JSON.parse(localStorage.getItem("planex_study_logs")||"[]"),b=new Map;[...u,...m].forEach(S=>{if(!S||typeof S!="object")return;const I=S.id||`${S.date||S.dateStr}_${S.startTime||S.timestamp||S.subject}_${S.duration||S.minutes}`;b.set(I,S)}),l=Array.from(b.values())}catch{l=[]}if(e)try{localStorage.setItem("planex_user_nickname",e),localStorage.setItem("planex_leaderboard_nickname",e)}catch{}if(t)try{localStorage.setItem("planex_user_avatar",t)}catch{}const c=typeof localStorage<"u"&&(localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_leaderboard_nickname"))||"",g=e||c||i.name||i.nickname||(n==null?void 0:n.full_name)||(n==null?void 0:n.name)||"کاربر پلنکس",y=typeof localStorage<"u"&&localStorage.getItem("planex_user_avatar")||"",f=t||y||i.avatar||i.avatar_url||i.photo||(n==null?void 0:n.avatar_url)||(n==null?void 0:n.avatar)||(n==null?void 0:n.photo_url)||"";if(s&&typeof s=="object"){if(s.planex_user_nickname=g,s.planex_nickname=g,s.planex_leaderboard_nickname=g,s.planex_user_avatar=f,delete s["planex_user_profile.name"],delete s["planex_user_profile.nickname"],delete s["planex_user_profile.avatar"],s.planex_user_profile||(s.planex_user_profile=i),s.planex_user_profile&&typeof s.planex_user_profile=="object"&&(s.planex_user_profile.name=g,s.planex_user_profile.nickname=g,s.planex_user_profile.avatar=f,s.planex_user_profile.avatar_url=f),s.planex_auth_user)try{let u=typeof s.planex_auth_user=="string"?JSON.parse(s.planex_auth_user):s.planex_auth_user;u.name=g,u.full_name=g,u.nickname=g,u.avatar_url=f,u.avatar=f,s.planex_auth_user=typeof s.planex_auth_user=="string"?JSON.stringify(u):u}catch{}if(s.planex_user_account)try{let u=typeof s.planex_user_account=="string"?JSON.parse(s.planex_user_account):s.planex_user_account;u.name=g,u.full_name=g,u.nickname=g,u.avatar_url=f,u.avatar=f,s.planex_user_account=typeof s.planex_user_account=="string"?JSON.stringify(u):u}catch{}}const w={phone:a,password:r,study_logs:l,rooms:d,backupData:s,appState:s,name:g,nickname:g,planex_user_nickname:g,avatar:f,avatar_url:f,photo_url:f,planex_user_avatar:f,updatedAt:Date.now()};try{const u=await fetch(`${le}/api/sync.php?_t=${Date.now()}`,{method:"POST",cache:"no-store",headers:{"Content-Type":"application/json","Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"},body:JSON.stringify({action:"save",...w})}),m=await u.text();let b=null;try{b=m?JSON.parse(m):null}catch{}return u.ok&&b&&b.success?(p.markPersonalSyncSuccess(),p&&(p._breakdownMemoMap={}),typeof window<"u"&&typeof window.updateHeaderDOM=="function"&&window.updateHeaderDOM(),{success:!0,phone:a,updatedAt:Date.now(),message:"☁️ اطلاعات و اتاق‌های مطالعه شما با موفقیت با شماره موبایل همگام‌سازی شد."}):{success:!1,message:(b==null?void 0:b.message)||`خطا در همگام‌سازی ابری (HTTP ${u.status})`}}catch(u){return console.warn("[Sync Push] Background push deferred:",u.message),{success:!1,message:"خطا در ارتباط با سرور: "+u.message}}}finally{this._isPushingNow=!1,this._hasPendingPush&&(this._hasPendingPush=!1,setTimeout(()=>this.pushToCloud(),50))}},_isPullingNow:!1,async pullFromCloud(o=null){var e,t,n,i,a,r,s,d,l,c,g,y,f,w;if(this._isPullingNow)return{success:!1,message:"Pull already in progress"};if(this._isPushingNow||this._hasPendingPush)return{success:!1,message:"همگام‌سازی ابری به تعویق افتاد: تغییرات محلی در حال ذخیره‌سازی ابری هستند."};this._isPullingNow=!0;try{if(typeof document<"u"){const S=document.activeElement;if(S&&(S.tagName==="INPUT"||S.tagName==="TEXTAREA"||S.isContentEditable))return console.log("Sync aborted: User is typing"),{success:!1,message:"همگام‌سازی موقتاً متوقف شد زیرا در حال تایپ هستید."}}let u=null;try{u=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}const m=p&&typeof p.getUserProfile=="function"?p.getUserProfile():{},b=Dt(o||(u==null?void 0:u.phone)||(u==null?void 0:u.phone_number)||m.phone||"");if(!b)return{success:!1,message:"شماره موبایل مشخص نیست."};try{const S=await fetch(`${le}/api/sync.php?action=get&phone=${encodeURIComponent(b)}&_t=${Date.now()}`,{cache:"no-store",headers:{"Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"}}),I=await S.text();let x=null;try{x=I?JSON.parse(I):null}catch{}if(x&&typeof x.backupData=="string")try{x.backupData=JSON.parse(x.backupData)}catch{}if(S.ok&&x&&x.success){const k=((e=x.user)==null?void 0:e.name)||x.name||((t=x.backupData)==null?void 0:t.planex_user_nickname)||(typeof((n=x.backupData)==null?void 0:n.planex_user_profile)=="object"?(i=x.backupData.planex_user_profile)==null?void 0:i.name:null)||(typeof((a=x.backupData)==null?void 0:a.planex_user_profile)=="object"?(r=x.backupData.planex_user_profile)==null?void 0:r.nickname:null)||null,A=((s=x.user)==null?void 0:s.avatar_url)||((d=x.user)==null?void 0:d.avatar)||((l=x.user)==null?void 0:l.photo_url)||x.avatar_url||x.avatar||((c=x.backupData)==null?void 0:c.planex_user_avatar)||(typeof((g=x.backupData)==null?void 0:g.planex_user_profile)=="object"?(y=x.backupData.planex_user_profile)==null?void 0:y.avatar:null)||(typeof((f=x.backupData)==null?void 0:f.planex_user_profile)=="object"?(w=x.backupData.planex_user_profile)==null?void 0:w.avatar_url:null)||null,P=typeof localStorage<"u"&&localStorage.getItem("planex_user_avatar")||"",M=A&&!A.includes("dicebear.com")?A:A||P;let T=!1;if(x.backupData&&typeof x.backupData=="object"){const O=U=>{if(U&&U.early_bird_daily_status)try{const F=typeof U.early_bird_daily_status=="string"?JSON.parse(U.early_bird_daily_status):U.early_bird_daily_status,L=window.leaderboardService&&window.leaderboardService.getTodayDateStr?window.leaderboardService.getTodayDateStr():new Date().toLocaleDateString("fa-IR");F.date!==L&&(delete U.early_bird_daily_status,typeof window<"u"&&(window._forceEbWipe=!0))}catch{delete U.early_bird_daily_status,typeof window<"u"&&(window._forceEbWipe=!0)}};O(x.backupData),x.appState&&typeof x.appState=="object"&&O(x.appState),k&&!_e(k)&&(x.backupData.planex_user_nickname=k,x.backupData.planex_user_profile||(x.backupData.planex_user_profile={}),x.backupData.planex_user_profile.name=k,x.backupData.planex_user_profile.nickname=k),M&&(x.backupData.planex_user_avatar=M,x.backupData.planex_user_profile||(x.backupData.planex_user_profile={}),x.backupData.planex_user_profile.avatar=M,x.backupData.planex_user_profile.avatar_url=M);const C=U=>{if(!U||typeof U!="object")return U;const F=JSON.parse(JSON.stringify(U)),L=["updatedAt","updated_at","last_sync","lastSync","timestamp","early_bird_daily_status","planex_routines_updated_at"],J=Y=>{if(Array.isArray(Y))Y.forEach(H=>J(H));else if(Y&&typeof Y=="object"){for(const H of L)H in Y&&delete Y[H];for(const H in Y)if(Object.prototype.hasOwnProperty.call(Y,H))if(typeof Y[H]=="string"&&(Y[H].startsWith("{")||Y[H].startsWith("[")))try{const Q=JSON.parse(Y[H]);J(Q),Y[H]=JSON.stringify(Q)}catch{}else J(Y[H])}};return J(F),F},z=JSON.stringify(C(this.exportLocalState()||{})),B=JSON.stringify(C(x.backupData));z!==B&&(T=!0,this.importLocalState(x.backupData))}if(k&&!_e(k))try{localStorage.getItem("planex_user_nickname")!==k&&(T=!0),localStorage.setItem("planex_user_nickname",k),localStorage.setItem("planex_leaderboard_nickname",k),localStorage.setItem("planex_nickname",k);let C=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}");C.name=k,C.full_name=k,C.nickname=k,localStorage.setItem("planex_auth_user",JSON.stringify(C)),localStorage.setItem("planex_user_account",JSON.stringify(C));let z=p&&typeof p.getUserProfile=="function"?p.getUserProfile()||{}:{};z.name=k,z.nickname=k,p&&typeof p.setUserProfile=="function"&&p.setUserProfile(z)}catch(O){console.warn("[PersonalSync] Error updating pulled name:",O)}if(M)try{localStorage.getItem("planex_user_avatar")!==M&&(T=!0),localStorage.setItem("planex_user_avatar",M);let C=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}");C.avatar_url=M,C.photo_url=M,C.avatar=M,localStorage.setItem("planex_auth_user",JSON.stringify(C)),localStorage.setItem("planex_user_account",JSON.stringify(C));let z=p&&typeof p.getUserProfile=="function"?p.getUserProfile()||{}:{};z.avatar=M,z.avatar_url=M,z.photo=M,z.photoUrl=M,p&&typeof p.setUserProfile=="function"&&p.setUserProfile(z)}catch(O){console.warn("[PersonalSync] Error updating pulled avatar:",O)}if(Array.isArray(x.rooms)&&x.rooms.length>0){const O=localStorage.getItem("planex_my_groups")||"[]",C=JSON.stringify(x.rooms);O!==C&&(T=!0,localStorage.setItem("planex_my_groups",C),localStorage.setItem("planex_my_rooms",C),p&&typeof p.setUserGroups=="function"&&p.setUserGroups(x.rooms))}if(Array.isArray(x.study_logs)&&x.study_logs.length>0){const O=localStorage.getItem("planex_study_logs")||"[]",C=JSON.stringify(x.study_logs);O!==C&&(T=!0,p&&typeof p.saveStudyLogs=="function"?p.saveStudyLogs(x.study_logs):(localStorage.setItem("planex_study_logs",C),localStorage.setItem("planex_recent_activity_sessions",C)))}if(p&&T&&(p._breakdownMemoMap={}),p.markPersonalSyncSuccess(),typeof window<"u"){typeof window.updateHeaderDOM=="function"&&window.updateHeaderDOM();const O=k||localStorage.getItem("planex_user_nickname")||"",C=M||localStorage.getItem("planex_user_avatar")||"";if(O){document.querySelectorAll("#btn-header-user-account span:last-child, .user-nickname-display, #profile-display-name-val, .profile-name-text").forEach(B=>{B.tagName==="INPUT"?document.activeElement!==B&&B.value!==O&&(B.value=O):document.activeElement!==B&&B.innerText!==O&&(B.innerText=O)});const z=document.getElementById("profile-display-name");z&&document.activeElement!==z&&z.value!==O&&(z.value=O)}if(C){const z=C.includes("?")?`&t=${Date.now()}`:`?t=${Date.now()}`,B=C.startsWith("http")?`${C}${z}`:C;document.querySelectorAll("#btn-header-user-account img, #main-header-avatar, #main-avatar-preview, .user-avatar-img").forEach(U=>{U&&U.tagName==="IMG"&&U.src!==B&&(U.src=B)})}T&&(window.dashboardChartInstances&&(window.dashboardChartInstances=null),typeof window.updateCharts=="function"&&window.updateCharts(),["renderRoutines","updateLeitnerUI","renderDashboard"].forEach(z=>{try{typeof window[z]=="function"&&window[z]()}catch{}})),typeof window<"u"&&window._forceEbWipe&&(window._forceEbWipe=!1,setTimeout(()=>{typeof fe<"u"&&typeof fe.pushToCloud=="function"&&fe.pushToCloud()},500))}return{success:!0,phone:b,data:x,message:"🎉 تمام اطلاعات، سوابق و اتاق‌های مطالعه با موفقیت بازیابی شدند!"}}else return{success:!1,message:(x==null?void 0:x.message)||"اطلاعاتی برای این شماره در سرور یافت نشد."}}catch(S){return console.warn("[Sync Pull] Background pull deferred:",S.message),{success:!1,message:"خطا در بازیابی اطلاعات: "+S.message}}}finally{this._isPullingNow=!1}}};let ot=null,St=!1;function Xe(){if(typeof document>"u")return;const o=document.getElementById("cloud-sync-status-indicator");if(!o)return;const e=(typeof window<"u"?window.cloudSyncState:null)||"idle";let t="",n="همگام‌سازی خودکار ابری";e==="syncing"?(t=`
      <svg class="spin-sync" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
      </svg>
    `,n="در حال همگام‌سازی خودکار با فضای ابری..."):e==="synced"?(t=`
      <span style="font-size: 0.82rem; position: relative; display: inline-flex; align-items: center; justify-content: center;">
        ☁️<span style="position: absolute; bottom: -1px; right: -2px; width: 6px; height: 6px; background: #10b981; border-radius: 50%; box-shadow: 0 0 4px #10b981;"></span>
      </span>
    `,n="همگام‌سازی خودکار: اطلاعات در فضای ابری ذخیره شدند ✅"):e==="offline"?(t=`
      <span style="font-size: 0.82rem; opacity: 0.5;">☁️</span>
    `,n="آفلاین — ذخیره در دستگاه انجام شد؛ همگام‌سازی پس از اتصال اینترنت فعال می‌شود"):(t='<span style="font-size: 0.82rem;">☁️</span>',n="همگام‌سازی ابری — کلیک برای همگام‌سازی آنی"),o.innerHTML=t,o.title=n}async function _o(o=!1){if(typeof window>"u"||!o)return;window.cloudSyncState="syncing",Xe();const e=async()=>{if(!St){St=!0;try{if(window.navigator&&!window.navigator.onLine){window.cloudSyncState="offline",Xe();return}typeof fe<"u"&&typeof fe.pushToCloud=="function"&&await fe.pushToCloud();const t=window.leaderboardService;t&&typeof t.syncUserScore=="function"&&await t.syncUserScore(!0).catch(n=>console.warn("[AutoSync] Squad score sync deferred:",n)),window.cloudSyncState="synced",Xe(),window.dispatchEvent(new CustomEvent("cloud-sync-complete",{detail:{timestamp:Date.now()}})),setTimeout(()=>{window.cloudSyncState==="synced"&&(window.cloudSyncState="idle",Xe())},3500)}catch(t){console.warn("[AutoSync] Background sync deferred:",t),window.cloudSyncState="error",Xe()}finally{St=!1}}};o?(ot&&clearTimeout(ot),e().catch(t=>console.warn("[AutoSync] Error:",t))):(ot&&clearTimeout(ot),ot=setTimeout(()=>{e().catch(t=>console.warn("[AutoSync] Debounced error:",t))},500))}let jt=0,kt=null,_t=null;function Ve(o=!1){if(fe._isPushingNow||fe._hasPendingPush)return;if(typeof document<"u"){const t=document.activeElement;if(t&&(t.tagName==="INPUT"||t.tagName==="TEXTAREA"||t.isContentEditable)){console.log("Sync aborted: User is typing");return}}if(typeof document<"u"&&(document.visibilityState!=="visible"||typeof window<"u"&&window.appState&&window.appState.activeModal==="editProfile"))return;const e=Date.now();!o&&e-jt<2e3||(jt=e,typeof fe<"u"&&typeof fe.pullFromCloud=="function"&&fe.pullFromCloud().catch(t=>{console.warn("[SmartSync] Focus-driven pull deferred:",t)}))}function Pt(){typeof window>"u"||(kt&&clearInterval(kt),kt=setInterval(()=>{if(!(fe._isPushingNow||fe._hasPendingPush)){if(typeof document<"u"){const o=document.activeElement;if(o&&(o.tagName==="INPUT"||o.tagName==="TEXTAREA"||o.isContentEditable)){console.log("Sync aborted: User is typing");return}}window.navigator&&!window.navigator.onLine||typeof window<"u"&&window.appState&&window.appState.activeModal==="editProfile"||typeof fe<"u"&&typeof fe.pullFromCloud=="function"&&fe.pullFromCloud().catch(o=>{console.warn("[SmartSync] Interval-driven pull deferred:",o)})}},6e4))}function $t(o=150){if(!(typeof window>"u")){if(_t&&clearTimeout(_t),o<=0){if(window.navigator&&!window.navigator.onLine)return;typeof fe<"u"&&typeof fe.pushToCloud=="function"&&fe.pushToCloud().catch(e=>{console.warn("[SmartSync] Action-driven immediate push deferred:",e)});return}_t=setTimeout(()=>{window.navigator&&!window.navigator.onLine||typeof fe<"u"&&typeof fe.pushToCloud=="function"&&fe.pushToCloud().catch(e=>{console.warn("[SmartSync] Action-driven push deferred:",e)})},o)}}typeof window<"u"&&(document.readyState==="complete"||document.readyState==="interactive"?setTimeout(()=>Ve(!0),100):(window.addEventListener("DOMContentLoaded",()=>Ve(!0)),window.addEventListener("load",()=>Ve(!0))),window.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"&&Ve(!0)}),window.addEventListener("focus",()=>Ve(!0)),window.addEventListener("online",()=>Ve(!0)),Pt(),["activity-saved","study-logs-updated","sessions-updated","pomodoro-completed","profileUpdated","auth-changed","rooms-updated","groups-updated","room-created","room-joined","room-modified","routines-updated","routine-deleted","habits-updated"].forEach(e=>{window.addEventListener(e,t=>{var i;const n=e==="routine-deleted"||(i=t==null?void 0:t.detail)!=null&&i.immediate?0:150;$t(n)})}),window.addEventListener("storage",e=>{e.key&&(e.key==="planex_user_nickname"||e.key==="planex_user_avatar"||e.key==="planex_my_groups"||e.key==="planex_my_rooms"||e.key==="planex_study_logs"||e.key==="planex_recent_activity_sessions"||e.key==="planex_habits"||e.key==="planex_routines"||e.key==="planex_deleted_habit_ids")&&$t(200)}),window.personalSyncService=fe,window.triggerAutoSync=_o,window.updateCloudSyncIndicatorUI=Xe,window.handleFocusDrivenSync=Ve,window.startSmartSyncInterval=Pt,window.triggerActionDrivenPush=$t);typeof window<"u"&&(window.isEarlyBirdSubmitting=!1);function dt(o,e=!0,t=""){if(typeof document>"u")return;const n=document.createElement("div"),i=e?"#10b981":"#ef4444";n.style.cssText=`position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%); background: ${i}; color: white; padding: 12px 22px; border-radius: 14px; font-weight: 900; font-size: 0.9rem; line-height: 1.7; z-index: 9999; box-shadow: 0 6px 20px rgba(0,0,0,0.4); max-width: 92vw; text-align: center; direction: rtl;`,n.innerHTML=`${o}${t?`<br><span style="font-size: 0.72rem; opacity: 0.9; font-weight: normal;">${String(t).replace(/</g,"&lt;")}</span>`:""}`,document.body.appendChild(n),setTimeout(()=>n.remove(),e?3500:8e3)}if(typeof window<"u")try{const o=localStorage.getItem("early_bird_daily_status");if(o){const e=JSON.parse(o),t=window.leaderboardService?window.leaderboardService.getTodayDateStr():new Date().toLocaleDateString("fa-IR");e.date!==t&&(localStorage.removeItem("early_bird_daily_status"),fe&&typeof fe.pushToCloud=="function"&&fe.pushToCloud())}}catch{}typeof window<"u"&&(window.handleEarlyBirdCheckIn=async()=>{if(!window.isEarlyBirdSubmitting){if(!_.isEarlyBirdWindowOpen()){dt("⏰ ثبت بیداری فقط از ساعت ۵ تا ۷ صبح امکان‌پذیر است.",!1);return}window.isEarlyBirdSubmitting=!0,window.renderApp&&window.renderApp();try{const o=await _.recordEarlyBird();if(o.success&&o.serverConfirmed){const e=o.rank?` — رتبه بیداری #${o.rank}`:"";dt(`☀️ ${o.message}${e}`,!0),Array.isArray(o.list)&&(window.lastEarlyBirdList=o.list);try{const t=_.getTodayDateStr(),n=_.getIranNowHHMM();localStorage.setItem("early_bird_daily_status",JSON.stringify({date:t,time:n}))}catch{}}else dt(`❌ ${o.message}`,!1,o.errorDetail||"")}catch(o){console.error("[EarlyBird] خطای غیرمنتظره:",o),dt("❌ خطای غیرمنتظره در ثبت سحرخیزی.",!1,o.message)}finally{window.isEarlyBirdSubmitting=!1,window.renderApp&&window.renderApp()}}});typeof window<"u"&&!window.toggleTopBannersAccordion&&(window.toggleTopBannersAccordion=()=>{const o=localStorage.getItem("planex_top_accordion_open")==="true";localStorage.setItem("planex_top_accordion_open",String(!o)),window.renderApp&&window.renderApp()});typeof window<"u"&&!window.toggleRecentSessionsAccordion&&(window.toggleRecentSessionsAccordion=()=>{const o=localStorage.getItem("planex_recent_sessions_open")==="true";localStorage.setItem("planex_recent_sessions_open",String(!o)),window.renderApp&&window.renderApp()});typeof window<"u"&&!window.toggleChartsAccordion&&(window.toggleChartsAccordion=()=>{const o=localStorage.getItem("planex_charts_accordion_open")!=="false";localStorage.setItem("planex_charts_accordion_open",String(!o)),window.renderApp&&window.renderApp()});typeof window<"u"&&!window.toggleWeeklyBreakdownAccordion&&(window.toggleWeeklyBreakdownAccordion=()=>{const o=localStorage.getItem("planex_weekly_breakdown_accordion_open")==="true";localStorage.setItem("planex_weekly_breakdown_accordion_open",String(!o)),window.renderApp&&window.renderApp()});const je=["شنبه","یکشنبه","دوشنبه","سه شنبه","چهارشنبه","پنج شنبه","جمعه"];function $o(o){const e=Math.floor(o/2),t=o%2===0?"00":"30",n=Math.floor((o+1)/2),i=(o+1)%2===0?"00":"30",a=`${e.toString().padStart(2,"0")}:${t}`,r=`${n.toString().padStart(2,"0")}:${i}`;return`${a} - ${r}`}function To(o=0,e="daily"){var t,n,i,a,r,s,d,l;try{const c=p.getCurrentWeek(),g=c?c.id:1,y=p.getHourlyLogs(g)||{},f=p.getCategories()||[],w={};f.forEach((j,q)=>{j&&j.code&&(w[j.code]={...j,color:j.color||Le[q%Le.length]})});const u=p.getStudyTargets()||{},m=p.getCountdownEvents()||[],b=m&&m.length>0?m[0]:null,S=p.getEarnedMedalBadge(),I=(typeof p.getRecentFocusSessions=="function"?p.getRecentFocusSessions(8):[]).filter(Boolean),[x,k,A]=p.getTodayJalali(),P=(new Date().getDay()+1)%7,M=j=>String(j).replace(/[0-9]/g,q=>"۰۱۲۳۴۵۶۷۸۹"[q]),T=((c==null?void 0:c.id)||"").split("_");let O=null;if(T.length===3){const j=parseInt(T[0]),q=parseInt(T[1]),ae=parseInt(T[2]);if(!isNaN(j)&&!isNaN(q)&&!isNaN(ae)){const me=p.jalaliToJdn(j,q,1),Me=(me+2)%7;O=me-Me+(ae-1)*7}}O===null&&(O=p.getTodayJdn()-P);let C=0,z=0,B=0;const U={};for(let j=0;j<48;j++){const q=`${o}_${j}`,ae=y[q],me=`${o}_${j}_multi`,Me=y[me]||[],ve=new Set;ae&&ae.categoryCode&&ve.add(ae.categoryCode),Me.forEach(ze=>ve.add(ze)),ve.forEach(ze=>{const Ce=w[ze];Ce&&(U[Ce.code]=(U[Ce.code]||0)+1,Pe(Ce)?C++:(Ce.code==="تـ"||Ce.group==="تلف شده")&&z++)}),ae&&ae.testCount&&(B+=parseInt(ae.testCount)||0)}const F=((n=(t=c==null?void 0:c.days)==null?void 0:t[o])==null?void 0:n.dateStr)||p._getWeekDayDateStr(o),L=p.getDailyStats(F)||{studyHours:0,studyMinutes:0,totalTests:0,sessionsCount:0};let J=p.getWeekDayMinutes(o),Y=+(J/60).toFixed(2),H=p.getWeekDayTests(o);const Q=u.dailyStudyGoalHours||8,D=Q*60,Z=u.dailyTestGoalCount||150,X=D>0?Math.min(100,Math.round(J/D*100)):0,xe=Z>0?Math.min(100,Math.round(H/Z*100)):0,ye=Math.max(0,D-J),ce=+(ye/60).toFixed(1),h=Math.max(0,Z-H);let N="";if(b){const j=p.getTodayJdn(),ae=p.jalaliToJdn(parseInt(b.jy),parseInt(b.jm),parseInt(b.jd))-j,me=new Date;me.setDate(me.getDate()+ae),me.setHours(8,0,0,0);const Me=new Date,ve=me.getTime()-Me.getTime();if(ve>0){const ze=Math.floor(ve/864e5),Ce=Math.floor(ve%(1e3*60*60*24)/(1e3*60*60)),We=Math.floor(ve%(1e3*60*60)/(1e3*60)),Oe=Re=>String(Re).replace(/[0-9]/g,De=>"۰۱۲۳۴۵۶۷۸۹"[De]);N=`🎯 ${Oe(ze)} روز و ${Oe(Ce)} ساعت تا ${b.title}`}else if(ve>-864e5)N=`🎉 امروز روز برگزاری ${b.title} است!`;else{const ze=Math.floor(Math.abs(ve)/864e5);N=`📌 ${(We=>String(We).replace(/[0-9]/g,Oe=>"۰۱۲۳۴۵۶۷۸۹"[Oe]))(ze)} روز از ${b.title} گذشته است.`}}const R=[],W=[];let de=0,G=0;for(let j=0;j<7;j++){const q=p.getWeekDayMinutes(j),ae=p.getWeekDayTests(j);R.push(q),W.push(ae),de+=q,G+=ae}const ue=Math.round(de/7),we=Math.round(G/7),ge=Math.max(1,P+1),Ae=Math.round(de/ge),he=[];for(let j=0;j<7;j++){const q=(i=c==null?void 0:c.days)==null?void 0:i[j],ae=(q==null?void 0:q.dateStr)||p._getWeekDayDateStr(j),me=q&&q.dayOfMonth&&q.monthName?`${je[j]} ${M(q.dayOfMonth)} ${q.monthName}`:je[j],Me=p.getDayCategoryBreakdown(j),ve=Me.reduce((Re,De)=>Re+De.minutes,0);let ze="",Ce=0;const We=[];let Oe=ve>0;Oe&&Me.forEach(Re=>{const De=Re.minutes/ve,ro=De*163.36,so=-Ce*163.36;Ce+=De,ze+=`
          <circle cx="30" cy="30" r="26" fill="none" stroke="${Re.color}" stroke-width="8"
            stroke-dasharray="${ro.toFixed(2)} 163.36"
            stroke-dashoffset="${so.toFixed(2)}"
            transform="rotate(-90 30 30)" />
        `,We.push({title:Re.title,color:Re.color,minutes:Re.minutes})}),he.push({dayName:je[j],dayDateFull:me,isToday:q?!!q.isToday:j===P,studyMinutes:ve,arcs:ze,legendItems:We,hasData:Oe})}const Te=typeof localStorage<"u"&&localStorage.getItem("planex_top_accordion_open")==="true",Ie=typeof localStorage<"u"&&localStorage.getItem("planex_recent_sessions_open")==="true",oe=typeof localStorage<"u"?localStorage.getItem("planex_charts_accordion_open")!=="false":!0,pe=typeof localStorage<"u"?localStorage.getItem("planex_weekly_breakdown_accordion_open")==="true":!1,Fe=typeof window<"u"&&window.pomodoroService?window.pomodoroService.getDisplayActiveUsers():Math.max(1,parseInt((a=window.appState)==null?void 0:a.pomodoroActiveUsers)||1),He=!!((r=window.appState)!=null&&r.isPomodoroRunning||(s=window.appState)!=null&&s.isStopwatchRunning),E=He&&((d=window.appState)==null?void 0:d.focusTimerType)===2,ie=He&&((l=window.appState)==null?void 0:l.focusActivityMode)==="non-study"&&!E;let re="rgba(16, 185, 129, 0.1)",v="rgba(16, 185, 129, 0.25)",V="#10b981",K="#10b981",se=`🟢 ${M(Fe)} نفر هم‌اکنون در حال مطالعه در پومودورو هستند`;return E?(re="rgba(56, 189, 248, 0.1)",v="rgba(56, 189, 248, 0.25)",V="#38bdf8",K="#38bdf8",se=`☕ شما در حال استراحت ☕ | 🟢 ${M(Fe)} نفر در حال مطالعه`):ie&&(re="rgba(245, 158, 11, 0.1)",v="rgba(245, 158, 11, 0.25)",V="#f59e0b",K="#f59e0b",se=`🧘 شما در حال فعالیت غیردرسی 🧘 | 🟢 ${M(Fe)} نفر در حال مطالعه`),`
    <div class="dashboard-view animate-fade-in" style="direction: rtl;">
      
      <!-- ⚡ Collapsible Top Events & Leaderboard Accordion -->
      <div style="margin-bottom: 10px;">
        <button onclick="if(window.toggleTopBannersAccordion) window.toggleTopBannersAccordion();" 
                class="glass-panel" 
                style="width: 100%; padding: 7px 12px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; color: var(--text-secondary); transition: all 0.2s ease;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.78rem; font-weight: 700; color: #e4e4e7;">
            <span style="font-size: 0.85rem;">⚡</span>
            <span>رویدادها، سحرخیزان و تالار رقابت</span>
            ${b?`<span style="font-size: 0.68rem; background: #1f2029; color: #8e8e9c; border: 1px solid rgba(255,255,255,0.08); padding: 1px 6px; border-radius: 6px;">${N}</span>`:""}
          </div>
          <div style="display: flex; align-items: center; gap: 6px; font-size: 0.7rem; color: #8e8e9c;">
            <span>${Te?"بستن":"مشاهده"}</span>
            <span style="font-size: 0.68rem; transform: ${Te?"rotate(180deg)":"rotate(0deg)"}; transition: transform 0.2s ease;">▼</span>
          </div>
        </button>

        ${Te?`
          <div style="margin-top: 8px; display: flex; flex-direction: column; gap: 8px; animation: fadeIn 0.2s ease;">
            <!-- Top Countdown Banner -->
            ${b?`
              <div class="glass-panel" style="padding: 10px 14px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 12px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px;">
                <div style="display: flex; align-items: center; gap: 10px;">
                  <div style="width: 30px; height: 30px; border-radius: 8px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 1rem;">
                    ⏳
                  </div>
                  <div>
                    <strong style="font-size: 0.86rem; font-weight: 700; color: #e4e4e7;">${N}</strong>
                    <div style="font-size: 0.7rem; color: #8e8e9c; margin-top: 1px;">تاریخ برگزاری: ${b.jy}/${b.jm}/${b.jd}</div>
                  </div>
                </div>
                <div style="background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08); padding: 3px 8px; border-radius: 8px; font-weight: 600; font-size: 0.72rem; font-family: 'Outfit';">
                  روزشمار کنکوری 🎯
                </div>
              </div>
            `:""}

            <!-- ☀️ باشگاه سحرخیزان -->
            ${(()=>{const j=_.isEarlyBirdWindowOpen(),q=_.getIranNowHHMM(),ae=_.getTodayWakeTime(),me=typeof window<"u"&&!!window.isEarlyBirdSubmitting,Me=De=>M(String(De||""));let ve="";const ze=ae?String(ae).replace(/[۰-۹]/g,De=>"۰۱۲۳۴۵۶۷۸۹".indexOf(De)).replace(/[٠-٩]/g,De=>"٠١٢٣٤٥٦٧٨٩".indexOf(De)).trim():"",[Ce,We]=ze?ze.split(":").map(Number):[NaN,NaN],Oe=!isNaN(Ce)&&!isNaN(We)?Ce*60+We:null,Re=Oe!==null&&Oe>=5*60&&Oe<=7*60;return ae&&Re?ve=`
                  <div style="display: flex; align-items: center; gap: 6px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); color: #10b981; padding: 5px 10px; border-radius: 8px; font-weight: 700; font-size: 0.74rem;">
                    <span>✅</span><span>ثبت شد (${Me(ae)})</span>
                  </div>`:j?ve=`
                  <button onclick="if(typeof window.handleEarlyBirdCheckIn === 'function') window.handleEarlyBirdCheckIn();" ${me?"disabled":""}
                    style="padding: 5px 12px; font-size: 0.76rem; font-weight: 700; color: #ffffff; background: #7c3aed; border: none; border-radius: 8px; cursor: ${me?"wait":"pointer"}; opacity: ${me?"0.65":"1"};">
                    ${me?"⏳ ثبت...":"من بیدارم! 🌅"}
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
                      ساعت الان: <strong style="color: #e4e4e7; font-family: 'Outfit';">${Me(q)}</strong>
                      ${j?' • <span style="color:#10b981;">بازه باز است</span>':""}
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
      ${fo()}

      <!-- 🎯 HERO FOCUS ACTION & ACTIVITY LAUNCHER CARD -->
      <div class="glass-panel" style="padding: 14px 16px; margin-bottom: 12px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.06); border-radius: 14px; box-shadow: none;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
          <div style="display: flex; align-items: center; gap: 6px; background: #1f2029; padding: 3px 10px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.08);">
            <span style="width: 6px; height: 6px; background: #7c3aed; border-radius: 50%; display: inline-block;"></span>
            <span style="font-weight: 700; font-size: 0.76rem; color: #e4e4e7;">مرکز ثبت فعالیت و تمرکز هوشمند</span>
          </div>
          <div style="display: flex; align-items: center; gap: 6px;">
            <span style="font-size: 0.72rem; color: #8e8e9c; font-weight: 600; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); padding: 2px 8px; border-radius: 8px; font-family: 'Outfit';">
              امروز: ${be(J)} | ${M(H)} تست
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
        ${je.map((j,q)=>`
          <button class="day-pill ${q===o?"active":""}" data-day="${q}" style="flex: 1; min-width: 65px; padding: 5px 8px; font-size: 0.74rem; font-weight: 600; text-align: center; border-radius: 8px;">
            ${j}
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
            ${be(J)}
          </div>
          <div style="font-size: 0.65rem; color: #71717a;">
            هدف: ${Q} ساعت (${X}%)
          </div>
        </div>

        <!-- Card 2: Weekly Average Study -->
        <div class="glass-panel" style="padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 0.7rem; color: #8e8e9c; font-weight: 600;">میانگین روزانه هفته</span>
            <span style="font-size: 0.95rem;">📊</span>
          </div>
          <div style="font-size: 1rem; font-weight: 800; color: #e4e4e7; font-family: 'Outfit'; margin-bottom: 2px;">
            ${be(Ae)}
          </div>
          <div style="font-size: 0.65rem; color: #71717a;">
            مجموع: ${be(de)}
          </div>
        </div>

        <!-- Card 3: Today Tests -->
        <div class="glass-panel" style="padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 0.7rem; color: #8e8e9c; font-weight: 600;">تست‌های امروز</span>
            <span style="font-size: 0.95rem;">🎯</span>
          </div>
          <div style="font-size: 1rem; font-weight: 800; color: #e4e4e7; font-family: 'Outfit'; margin-bottom: 2px;">
            ${M(H)} تست
          </div>
          <div style="font-size: 0.65rem; color: #71717a;">
            هدف: ${Z} (${xe}%)
          </div>
        </div>

        <!-- Card 4: Goal Progress -->
        <div class="glass-panel" style="padding: 10px 12px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06); background: #16171d;">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px;">
            <span style="font-size: 0.7rem; color: #8e8e9c; font-weight: 600;">تحقق هدف روزانه</span>
            <span style="font-size: 0.95rem;">🔥</span>
          </div>
          <div style="font-size: 1rem; font-weight: 800; color: #e4e4e7; font-family: 'Outfit'; margin-bottom: 2px;">
            ${X}%
          </div>
          <div style="font-size: 0.65rem; color: #71717a;">
            ${ye<=0?"🎉 تکمیل شد":`${be(ye)} تا هدف`}
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
                <div style="font-size: 0.7rem; color: #8e8e9c;">هدف: ${Q} ساعت</div>
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
                  stroke-dashoffset="${282.7-282.7*X/100}"
                  stroke-linecap="round"
                  transform="rotate(-90 55 55)"
                  style="transition: stroke-dashoffset 0.5s ease;"/>
              </svg>
              <div class="progress-text" style="position: absolute; top:0; left:0; width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding: 2px;">
                <span style="font-size: 1.15rem; font-weight: 800; font-family: 'Outfit'; color: #fff;">${X}%</span>
                <span style="font-size: 0.65rem; color: #8e8e9c; font-family: 'Outfit';">${be(J)}</span>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 6px; flex: 1; min-width: 140px;">
              <div style="background: #1f2029; padding: 6px 10px; border-radius: 8px; font-size: 0.74rem; border: 1px solid rgba(255,255,255,0.06);">
                <span style="color: #8e8e9c;">مدت مطالعه:</span>
                <strong style="color: #e4e4e7; margin-right: 4px;">${be(J)}</strong>
              </div>
              <div style="background: ${ye<=0?"rgba(16, 185, 129, 0.12)":"#1f2029"}; color: ${ye<=0?"#10b981":"#8e8e9c"}; border: 1px solid rgba(255,255,255,0.06); padding: 6px 10px; border-radius: 8px; font-size: 0.74rem; font-weight: 600; text-align: center;">
                ${ye<=0?"🎉 هدف روزانه تکمیل شد!":`⏳ ${be(ye)} باقیمانده`}
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
                  stroke-dashoffset="${282.7-282.7*xe/100}"
                  stroke-linecap="round"
                  transform="rotate(-90 55 55)"
                  style="transition: stroke-dashoffset 0.5s ease;"/>
              <div class="progress-text" style="position: absolute; top:0; left:0; width:100%; height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center;">
                <span style="font-size: 1.15rem; font-weight: 800; font-family: 'Outfit'; color: #fff;">${xe}%</span>
                <span style="font-size: 0.65rem; color: #8e8e9c; font-family: 'Outfit';">${H} / ${Z}</span>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 6px; flex: 1; min-width: 140px;">
              <div style="background: #1f2029; padding: 6px 10px; border-radius: 8px; font-size: 0.74rem; border: 1px solid rgba(255,255,255,0.06);">
                <span style="color: #8e8e9c;">مدت مطالعه:</span>
                <strong style="color: #e4e4e7; margin-right: 4px;">${be(J)}</strong>
              </div>
              <div style="background: #1f2029; padding: 6px 10px; border-radius: 8px; font-size: 0.74rem; border: 1px solid rgba(255,255,255,0.06);">
                <span style="color: #8e8e9c;">تست‌ها:</span>
                <strong style="color: #e4e4e7; margin-right: 4px;">${H}</strong>
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
                ${I.length} پارت
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
            ${I.length===0?`
              <div style="text-align: center; padding: 18px 12px; background: #1f2029; border: 1px dashed rgba(255, 255, 255, 0.08); border-radius: 10px;">
                <div style="font-size: 1.5rem; margin-bottom: 4px;">⏱️</div>
                <div style="color: #fff; font-size: 0.84rem; font-weight: 700; margin-bottom: 2px;">هنوز پارت مطالعه‌ای ثبت نشده است</div>
                <p style="color: #8e8e9c; font-size: 0.7rem; margin: 0 auto; line-height: 1.4;">
                  از دکمه شروع پارت یا ثبت دستی برای ثبت زمان و تست‌های خود استفاده کنید.
                </p>
              </div>
            `:`
              <div style="display: flex; flex-direction: column; gap: 6px;">
                ${I.map(j=>{const q=j.type==="non-study"||!j.isStudy;return`
                  <div style="background: #1f2029; border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 8px 10px; display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap;">
                    <div style="display: flex; align-items: center; gap: 8px; flex: 1; min-width: 180px;">
                      <span style="font-size: 0.95rem; flex-shrink: 0;">${j.icon||(q?"☕":"📚")}</span>
                      <div style="overflow: hidden;">
                        <div style="display: flex; align-items: center; gap: 5px;">
                          <strong style="font-size: 0.8rem; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                            ${j.subject||(q?"فعالیت روزمره":"پارت مطالعه")}
                          </strong>
                          <span style="font-size: 0.62rem; padding: 0.5px 4px; border-radius: 4px; background: #16171d; color: #8e8e9c; border: 1px solid rgba(255,255,255,0.06); white-space: nowrap;">
                            ${j.categoryTitle||j.category||(q?"غیردرسی":"درسی")}
                          </span>
                        </div>
                        ${j.note?`
                          <span style="font-size: 0.66rem; color: #a1a1aa; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: block;">
                            📝 ${j.note}
                          </span>
                        `:""}
                      </div>
                    </div>

                    <div style="display: flex; align-items: center; gap: 6px; flex-shrink: 0;">
                      <span style="font-size: 0.72rem; font-weight: 700; color: #e4e4e7; background: #16171d; padding: 2px 6px; border-radius: 6px; font-family: 'Outfit';">
                        ⏱️ ${be(j.duration||j.minutes||1)}
                      </span>
                      ${!q&&(j.testCount>0||j.tests>0)?`
                        <span style="font-size: 0.72rem; font-weight: 700; color: #a1a1aa; background: #16171d; padding: 2px 6px; border-radius: 6px; font-family: 'Outfit';">
                          🎯 ${j.testCount||j.tests} تست${j.testPercentage!=null?` | 📊 ${j.testPercentage}%`:""}
                        </span>
                      `:""}
                      <span style="font-size: 0.65rem; color: #71717a; font-family: 'Outfit';">${j.dateStr||j.date||""}</span>
                      <button onclick="if(window.deleteFocusSession){ window.deleteFocusSession('${j.id}'); }" style="background: none; border: none; color: #ef4444; opacity: 0.6; cursor: pointer; padding: 2px 4px; font-size: 0.72rem;" title="حذف">
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
              <span style="font-size: 0.7rem; color: #8e8e9c;">مقایسه زمان مطالعه (${be(de)}) و تست‌ها (${G} تست)</span>
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
                  مجموع: ${be(de)}
                </span>
              </div>
              <div style="display: flex; align-items: flex-end; justify-content: space-between; height: 120px; padding: 4px; gap: 6px; border-bottom: 1px solid rgba(255,255,255,0.06);">
                ${je.map((j,q)=>{const ae=R[q]||0,me=q===P,Me=Math.max(480,Math.ceil(Math.max(...R,60))),ve=ae>0?Math.min(100,Math.max(6,Math.round(ae/Me*100))):0;return`
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end;">
                      <span style="font-size: 0.62rem; font-weight: 600; font-family: 'Outfit'; color: ${me?"#7c3aed":"#8e8e9c"}; margin-bottom: 2px;">
                        ${ae>0?be(ae):"۰"}
                      </span>
                      <div style="width: 100%; max-width: 22px; height: ${ve}%; background: ${me?"#7c3aed":"#1f2029"}; border: 1px solid rgba(255,255,255,0.08); border-radius: 6px 6px 0 0; transition: height 0.4s ease;"></div>
                      <span style="font-size: 0.68rem; font-weight: 600; color: ${me?"#e4e4e7":"#8e8e9c"}; margin-top: 4px;">
                        ${j.substring(0,3)}
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
                  مجموع: ${G} تست
                </span>
              </div>
              <div style="display: flex; align-items: flex-end; justify-content: space-between; height: 120px; padding: 4px; gap: 6px; border-bottom: 1px solid rgba(255,255,255,0.06);">
                ${je.map((j,q)=>{const ae=W[q]||0,me=q===P,Me=Math.max(100,Math.ceil(Math.max(...W))),ve=ae>0?Math.min(100,Math.max(6,Math.round(ae/Me*100))):0;return`
                    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end;">
                      <span style="font-size: 0.62rem; font-weight: 600; font-family: 'Outfit'; color: ${me?"#7c3aed":"#8e8e9c"}; margin-bottom: 2px;">
                        ${ae}
                      </span>
                      <div style="width: 100%; max-width: 22px; height: ${ve}%; background: ${me?"#7c3aed":"#1f2029"}; border: 1px solid rgba(255,255,255,0.08); border-radius: 6px 6px 0 0; transition: height 0.4s ease;"></div>
                      <span style="font-size: 0.68rem; font-weight: 600; color: ${me?"#e4e4e7":"#8e8e9c"}; margin-top: 4px;">
                        ${j.substring(0,3)}
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
              ${he.map(j=>`
                <div style="background: #1f2029; border: 1px solid ${j.isToday?"rgba(124, 58, 237, 0.4)":"rgba(255, 255, 255, 0.06)"}; border-radius: 12px; padding: 10px 12px; display: flex; flex-direction: column; align-items: center; transition: transform 0.2s ease;">
                  
                  <!-- Card Header: Day Name & Date + Active Badge -->
                  <div style="width: 100%; display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; border-bottom: 1px solid rgba(255, 255, 255, 0.04); padding-bottom: 6px;">
                    <span style="font-size: 0.8rem; font-weight: 700; color: ${j.isToday?"#e4e4e7":"#a1a1aa"};">
                      ${j.dayDateFull}
                    </span>
                    ${j.isToday?'<span style="font-size: 0.65rem; background: #7c3aed; color: #ffffff; padding: 1px 6px; border-radius: 6px; font-weight: 700;">امروز</span>':""}
                  </div>
                  
                  <!-- Donut Chart & Center Stats -->
                  <div style="position: relative; width: 68px; height: 68px; display: flex; align-items: center; justify-content: center; margin-bottom: 8px;">
                    <svg width="68" height="68" viewBox="0 0 60 60" style="position: absolute; overflow: visible;">
                      <circle cx="30" cy="30" r="26" fill="none" stroke="rgba(255, 255, 255, 0.06)" stroke-width="7" />
                      ${j.hasData?j.arcs:""}
                    </svg>
                    <div style="z-index: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 2px;">
                      <span style="font-size: 0.72rem; font-weight: 800; font-family: 'Outfit'; color: ${j.hasData?"#e4e4e7":"var(--text-muted)"}; line-height: 1.2;">${j.studyMinutes>0?be(j.studyMinutes):"۰ دقیقه"}</span>
                    </div>
                  </div>

                  <!-- Activity Legend (راهنمای فعالیت‌ها) -->
                  <div style="width: 100%; border-top: 1px solid rgba(255, 255, 255, 0.04); padding-top: 6px; margin-top: 2px; display: flex; flex-direction: column; gap: 4px;">
                    ${j.legendItems.length>0?j.legendItems.map(q=>`
                      <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.7rem; gap: 4px;">
                        <div style="display: flex; align-items: center; gap: 5px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                          <span style="width: 6px; height: 6px; border-radius: 50%; background: ${q.color}; flex-shrink: 0;"></span>
                          <span style="color: #e4e4e7; font-weight: 600; overflow: hidden; text-overflow: ellipsis;">${q.title}</span>
                        </div>
                        <span style="color: #8e8e9c; font-weight: 600; flex-shrink: 0; font-family: 'Outfit';">${be(q.minutes)}</span>
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
    `}}function Ot(){typeof window<"u"&&typeof window.renderApp=="function"&&window.renderApp()}typeof window<"u"&&(window.updateCharts=Ot,window.updateDashboard=Ot,window.renderDashboard=To);window.plannerTaskViewMode=window.plannerTaskViewMode||"list";window.plannerPriorityFilter=window.plannerPriorityFilter||"ALL";window.plannerNewTaskPriority=window.plannerNewTaskPriority||bt;window.setPlannerTaskViewMode=o=>{window.plannerTaskViewMode=o==="matrix"?"matrix":"list",Ue()};window.setPlannerPriorityFilter=o=>{window.plannerPriorityFilter=o||"ALL",Ue()};window.setPlannerNewTaskPriority=o=>{window.plannerNewTaskPriority=o||bt};window.selectPlannerDay=o=>{const e=typeof window.appState<"u"&&window.appState?window.appState:null;e&&(e.selectedDayIndex=o),Ue()};window.changeJalaliMonth=o=>{const[e,t]=p.getTodayJalali();let n=window.jalaliViewMonth!==void 0?window.jalaliViewMonth:t-1,i=window.jalaliViewYear!==void 0?window.jalaliViewYear:e;n+=o,n<0?(n=11,i-=1):n>11&&(n=0,i+=1),window.jalaliViewMonth=n,window.jalaliViewYear=i,window.renderApp&&window.renderApp()};const It=o=>String(o??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),Se=o=>String(o).replace(/[0-9]/g,e=>"۰۱۲۳۴۵۶۷۸۹"[e]);function Xt(o){return`
    <select onchange="window.movePlannerTaskPriority('${o.id}', this.value)"
      title="انتقال این کار به خانه دیگر ماتریس"
      style="background: rgba(15,23,42,0.85); color: #e2e8f0; border: 1px solid rgba(148,163,184,0.3); border-radius: 9px; font-size: 0.68rem; padding: 3px 5px; cursor: pointer; font-family: inherit;">
      ${Qe.map(e=>`
        <option value="${e.id}" ${o.priority===e.id?"selected":""}>${e.emoji} ${e.id}</option>
      `).join("")}
    </select>`}function zt(o,e){return e||(e=rt(o.priority)),`
    <div id="planner-task-item-${o.id}" data-task-id="${o.id}" data-quadrant="${e.id}"
      style="display: flex; align-items: center; gap: 7px; background: rgba(15,23,42,0.45); padding: 7px 9px; border-radius: 11px; border: 1px solid rgba(148,163,184,0.14);">
      <input type="checkbox" onclick="window.togglePlannerTask('${o.id}', event)" ${o.isDone?"checked":""}
        style="width: 16px; height: 16px; accent-color: ${e.color}; cursor: pointer; flex-shrink: 0;" />
      <span class="task-text-span" style="font-size: 0.79rem; flex: 1; word-break: break-word; ${o.isDone?"text-decoration: line-through; opacity: 0.5;":""}">${It(o.text)}</span>
      ${Xt(o)}
      <button onclick="window.deletePlannerTask('${o.id}')" style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 0.85rem; flex-shrink: 0;" title="حذف">✕</button>
    </div>`}function Zt(o){const e=rt(o.priority);return`
    <div id="planner-task-item-${o.id}" data-task-id="${o.id}" data-quadrant="${o.priority}"
      style="display: flex; align-items: center; justify-content: space-between; gap: 8px; background: ${e.softBg}; padding: 10px 14px; border-radius: 12px; border: 1px solid ${e.borderColor};">
      <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; flex: 1; min-width: 0;">
        <input type="checkbox" class="chk-toggle-daily-plan" onclick="window.togglePlannerTask('${o.id}', event)" data-id="${o.id}" ${o.isDone?"checked":""} style="width: 18px; height: 18px; accent-color: ${e.color}; flex-shrink: 0; cursor: pointer;" />
        <span class="task-text-span" style="font-size: 0.92rem; word-break: break-word; ${o.isDone?"text-decoration: line-through; opacity: 0.5;":""}">${It(o.text)}</span>
      </label>
      <span style="background: rgba(15,23,42,0.5); border: 1px solid ${e.borderColor}; color: ${e.color}; padding: 3px 9px; border-radius: 10px; font-size: 0.68rem; font-weight: 900; white-space: nowrap;" title="${e.subtitle}">
        ${e.emoji} ${e.title}
      </span>
      ${Xt(o)}
      <button class="btn-delete-daily-plan" onclick="window.deletePlannerTask('${o.id}')" data-id="${o.id}" style="background: none; border: none; color: #ef4444; cursor: pointer; flex-shrink: 0;">✕</button>
    </div>`}function eo(o){const e=o.length;if(e===0)return"";const t=o.filter(i=>i.isDone).length,n=Math.round(t/e*100);return`
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
              ${Se(t)} از ${Se(e)} کار برنامه‌ریزی‌شده انجام شده است
            </span>
          </div>
        </div>

        <div style="background: #16171d; border: 1px solid ${n===100?"#eab308":n>=70?"#10b981":"#38bdf8"}; color: ${n===100?"#fde047":n>=70?"#34d399":"#38bdf8"}; padding: 4px 12px; border-radius: 12px; font-weight: 900; font-size: 0.9rem; font-family: 'Outfit', sans-serif;">
          نرخ پایبندی: ${Se(n)}٪
        </div>
      </div>

      <!-- Progress bar -->
      <div style="width: 100%; height: 8px; background: rgba(0, 0, 0, 0.4); border-radius: 6px; overflow: hidden; margin-top: 10px;">
        <div style="height: 100%; width: ${n}%; background: ${n===100?"linear-gradient(90deg, #eab308 0%, #a855f7 100%)":n>=70?"linear-gradient(90deg, #10b981 0%, #38bdf8 100%)":"linear-gradient(90deg, #38bdf8 0%, #6366f1 100%)"}; border-radius: 6px; transition: width 0.5s ease;"></div>
      </div>
    </div>
  `}function to(o,e){return`
    <div id="planner-priority-filters" style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 14px;">
      <button onclick="window.setPlannerPriorityFilter('ALL')"
        style="padding: 5px 12px; font-size: 0.72rem; font-weight: 800; border-radius: 11px; cursor: pointer; border: 1px solid ${e==="ALL"?"#38bdf8":"rgba(148,163,184,0.25)"}; background: ${e==="ALL"?"rgba(56,189,248,0.2)":"rgba(15,23,42,0.5)"}; color: ${e==="ALL"?"#7dd3fc":"#94a3b8"};">
        همه (${Se(o.length)})
      </button>
      ${Qe.map(t=>{const n=o.filter(a=>a.priority===t.id).length,i=e===t.id;return`
        <button onclick="window.setPlannerPriorityFilter('${t.id}')"
          style="padding: 5px 12px; font-size: 0.72rem; font-weight: 800; border-radius: 11px; cursor: pointer; border: 1px solid ${i?t.color:"rgba(148,163,184,0.25)"}; background: ${i?t.softBg:"rgba(15,23,42,0.5)"}; color: ${i?t.color:"#94a3b8"};"
          title="${t.subtitle}">
          ${t.emoji} ${t.title} (${Se(n)})
        </button>`}).join("")}
    </div>`}function et(o,e){const n=p.getDailyPlans(o).filter(s=>s.dayIndex===e),i=document.getElementById("planner-accordion-daily-tasks-counter");i&&(i.innerHTML=n.length>0?`<strong style="color: #38bdf8; font-size: 0.8rem; margin-right: 4px;">(${Se(n.length)} کار برای امروز)</strong>`:"");const a=document.getElementById("planner-commitment-score-banner-wrapper");a&&(a.innerHTML=eo(n));const r=document.getElementById("planner-priority-filters-container");if(r){const s=window.plannerPriorityFilter||"ALL";r.innerHTML=to(n,s)}Qe.forEach(s=>{const d=n.filter(g=>g.priority===s.id),l=d.filter(g=>g.isDone).length,c=document.getElementById(`quadrant-badge-${s.id}`);c&&(c.textContent=`${Se(l)}/${Se(d.length)}`)})}window.addPlannerTaskToQuadrant=o=>{const e=document.getElementById(`input-quadrant-task-${o}`);if(!e||!e.value.trim())return;const t=p.getCurrentWeek(),n=t?t.id:1,i=window.appState&&typeof window.appState.selectedDayIndex=="number"?window.appState.selectedDayIndex:(new Date().getDay()+1)%7,a=p.addDailyPlan(n,i,e.value.trim(),o);e.value="",window.triggerActionDrivenPush&&window.triggerActionDrivenPush();const r=document.getElementById(`quadrant-tasks-${o}`);if(r&&window.plannerTaskViewMode==="matrix"){const s=r.querySelector(".quadrant-empty-msg");s&&s.remove();const d=document.createElement("div"),l=rt(o);d.innerHTML=zt(a,l);const c=d.firstElementChild;r.appendChild(c),et(n,i)}else Ue()};window.addPlannerDailyTask=()=>{const o=document.getElementById("input-daily-plan");if(!o||!o.value.trim())return;const e=document.getElementById("select-daily-plan-priority"),t=e?e.value:window.plannerNewTaskPriority||bt,n=p.getCurrentWeek(),i=n?n.id:1,a=window.appState&&typeof window.appState.selectedDayIndex=="number"?window.appState.selectedDayIndex:(new Date().getDay()+1)%7,r=p.addDailyPlan(i,a,o.value.trim(),t);if(o.value="",window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.plannerTaskViewMode==="matrix"){const d=document.getElementById(`quadrant-tasks-${t}`);if(d){const l=d.querySelector(".quadrant-empty-msg");l&&l.remove();const c=document.createElement("div"),g=rt(t);c.innerHTML=zt(r,g);const y=c.firstElementChild;d.appendChild(y),et(i,a);return}}else{const d=document.getElementById("planner-list-tasks-container"),l=window.plannerPriorityFilter||"ALL";if(d&&(l==="ALL"||l===t)){const g=d.querySelector(".list-empty-msg");g&&g.remove();const y=document.createElement("div");y.innerHTML=Zt(r);const f=y.firstElementChild;d.appendChild(f),et(i,a);return}}Ue()};window.togglePlannerTask=(o,e=null)=>{e&&typeof e.stopPropagation=="function"&&e.stopPropagation();const t=p.getCurrentWeek(),n=t?t.id:1,i=window.appState&&typeof window.appState.selectedDayIndex=="number"?window.appState.selectedDayIndex:(new Date().getDay()+1)%7,r=p.getDailyPlans(n).find(l=>l.id==o||String(l.id)===String(o)),s=r?!r.isDone:!0;p.toggleDailyPlan(n,o),s&&window.triggerCompletionBurst&&window.triggerCompletionBurst(e),window.triggerActionDrivenPush&&window.triggerActionDrivenPush();const d=document.getElementById(`planner-task-item-${o}`);if(d){const l=d.querySelector('input[type="checkbox"]');l&&(l.checked=s);const c=d.querySelector(".task-text-span");c&&(c.style.textDecoration=s?"line-through":"none",c.style.opacity=s?"0.5":"1"),et(n,i)}else Ue()};window.deletePlannerTask=o=>{const e=p.getCurrentWeek(),t=e?e.id:1,n=window.appState&&typeof window.appState.selectedDayIndex=="number"?window.appState.selectedDayIndex:(new Date().getDay()+1)%7;p.deleteDailyPlan(t,o),window.triggerActionDrivenPush&&window.triggerActionDrivenPush();const i=document.getElementById(`planner-task-item-${o}`);if(i){const a=i.parentElement;if(i.remove(),a&&a.querySelectorAll('[id^="planner-task-item-"]').length===0){if(a.id&&a.id.startsWith("quadrant-tasks-"))a.innerHTML='<p class="quadrant-empty-msg" style="font-size: 0.74rem; color: var(--text-secondary); opacity: 0.75; margin: 6px 0;">کاری در این خانه ثبت نشده است.</p>';else if(a.id==="planner-list-tasks-container"){const d=(window.plannerPriorityFilter||"ALL")==="ALL"?"برای این روز کاری ثبت نشده است.":"در این خانه از ماتریس کاری برای این روز ثبت نشده است.";a.innerHTML=`<p class="list-empty-msg" style="font-size: 0.85rem; color: var(--text-secondary);">${d}</p>`}}et(t,n)}else Ue()};window.movePlannerTaskPriority=(o,e)=>{const t=p.getCurrentWeek(),n=t?t.id:1,i=window.appState&&typeof window.appState.selectedDayIndex=="number"?window.appState.selectedDayIndex:(new Date().getDay()+1)%7;p.setDailyPlanPriority(n,o,e),window.triggerActionDrivenPush&&window.triggerActionDrivenPush();const a=document.getElementById(`planner-task-item-${o}`),r=window.plannerTaskViewMode==="matrix";if(a&&r){const s=a.parentElement,d=document.getElementById(`quadrant-tasks-${e}`);if(d){const l=d.querySelector(".quadrant-empty-msg");l&&l.remove(),a.setAttribute("data-quadrant",e);const c=a.querySelector("select");c&&(c.value=e);const g=rt(e),y=a.querySelector('input[type="checkbox"]');y&&(y.style.accentColor=g.color),d.appendChild(a),s&&s.querySelectorAll('[id^="planner-task-item-"]').length===0&&(s.innerHTML='<p class="quadrant-empty-msg" style="font-size: 0.74rem; color: var(--text-secondary); opacity: 0.75; margin: 6px 0;">کاری در این خانه ثبت نشده است.</p>'),et(n,i);return}}Ue()};window.toggleWeeklyGoal=(o,e=null)=>{e&&typeof e.stopPropagation=="function"&&e.stopPropagation();const t=p.getCurrentWeek(),n=t?t.id:1,a=p.getWeeklyGoals(n).find(d=>d.id==o||String(d.id)===String(o)),r=a?!a.isDone:!0;p.toggleWeeklyGoal(n,o),r&&window.triggerCompletionBurst&&window.triggerCompletionBurst(e),window.triggerActionDrivenPush&&window.triggerActionDrivenPush();const s=document.getElementById(`weekly-goal-item-${o}`);if(s){const d=s.querySelector('input[type="checkbox"]');d&&(d.checked=r);const l=s.querySelector(".weekly-goal-text");l&&(l.style.textDecoration=r?"line-through":"none",l.style.opacity=r?"0.5":"1");return}window.renderApp&&window.renderApp()};function oo(o){return`
    <div id="weekly-goal-item-${o.id}" style="display: flex; align-items: center; justify-content: space-between; background: #1f2029; padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.06);">
      <label style="display: flex; align-items: center; gap: 10px; cursor: pointer; flex: 1;">
        <input type="checkbox" class="chk-toggle-weekly-goal" onclick="window.toggleWeeklyGoal('${o.id}', event)" data-id="${o.id}" ${o.isDone?"checked":""} style="width: 18px; height: 18px; accent-color: #7c3aed; cursor: pointer;" />
        <span class="weekly-goal-text" style="font-size: 0.92rem; ${o.isDone?"text-decoration: line-through; opacity: 0.5;":""}">${It(o.text)}</span>
      </label>
      <button class="btn-delete-weekly-goal" onclick="window.deleteWeeklyGoal('${o.id}')" data-id="${o.id}" style="background: none; border: none; color: #ef4444; cursor: pointer;">✕</button>
    </div>`}window.addWeeklyGoal=()=>{const o=document.getElementById("input-weekly-goal");if(!o||!o.value.trim())return;const e=p.getCurrentWeek(),t=e?e.id:1,n=p.addWeeklyGoal(t,o.value.trim());o.value="",window.triggerActionDrivenPush&&window.triggerActionDrivenPush();const i=document.getElementById("weekly-goals-list-container");if(i){const a=i.querySelector(".weekly-goals-empty-msg");a&&a.remove();const r=document.createElement("div");r.innerHTML=oo(n),i.appendChild(r.firstElementChild);return}window.renderApp&&window.renderApp()};window.deleteWeeklyGoal=o=>{const e=p.getCurrentWeek(),t=e?e.id:1;p.deleteWeeklyGoal(t,o),window.triggerActionDrivenPush&&window.triggerActionDrivenPush();const n=document.getElementById(`weekly-goal-item-${o}`);if(n){const i=n.parentElement;n.remove(),i&&i.querySelectorAll('[id^="weekly-goal-item-"]').length===0&&(i.innerHTML='<p class="weekly-goals-empty-msg" style="font-size: 0.85rem; color: var(--text-secondary);">هیچ هدفی ثبت نشده است.</p>');return}window.renderApp&&window.renderApp()};window.applyPresetWeeklyGoals=()=>{const o=p.getCurrentWeek(),e=o?o.id:1;["مرور خلاصه نکات درس‌های هدف","حل ۲۰۰ تست آزمون جامع","تحلیل و یادداشت نکات آزمون","مرور لغات و فرمول‌ها با لایتنر"].forEach(n=>p.addWeeklyGoal(e,n)),window.renderApp&&window.renderApp()};window.addPlannerCountdownEvent=()=>{var i,a,r,s;const o=(i=document.getElementById("input-event-title"))==null?void 0:i.value.trim(),e=parseInt((a=document.getElementById("input-event-day"))==null?void 0:a.value),t=parseInt((r=document.getElementById("input-event-month"))==null?void 0:r.value),n=parseInt((s=document.getElementById("input-event-year"))==null?void 0:s.value);if(!o||isNaN(e)||isNaN(t)||isNaN(n)){alert("لطفاً عنوان و تاریخ رویداد را کامل وارد کنید.");return}p.addCountdownEvent(o,n,t,e),window.renderApp&&window.renderApp()};window.deletePlannerCountdownEvent=o=>{p.deleteCountdownEvent(o),window.renderApp&&window.renderApp()};window.savePlannerTargets=()=>{var i,a,r,s;const o=parseFloat((i=document.getElementById("target-daily-hours"))==null?void 0:i.value)||8,e=parseInt((a=document.getElementById("target-daily-tests"))==null?void 0:a.value)||150,t=parseFloat((r=document.getElementById("target-weekly-hours"))==null?void 0:r.value)||56,n=parseInt((s=document.getElementById("target-weekly-tests"))==null?void 0:s.value)||1e3;p.setStudyTargets({dailyStudyGoalHours:o,weeklyStudyGoalHours:t,dailyTestGoalCount:e,weeklyTestGoalCount:n}),window.showToast?window.showToast("✅ اهداف با موفقیت ذخیره شدند","success",2500):alert("✅ اهداف با موفقیت ذخیره شدند"),window.renderApp&&window.renderApp()};function no(o,e){const t=p.getDailyPlans(e),n=window.plannerTaskViewMode==="matrix"?"matrix":"list",i=window.plannerPriorityFilter||"ALL",a=window.plannerNewTaskPriority||bt,r=t.filter(d=>d.dayIndex===o),s=i==="ALL"?r:r.filter(d=>d.priority===i);return`
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
      ${eo(r)}
    </div>

    <!-- Day Selector Pills -->
    <div class="day-selector" style="margin-bottom: 14px;">
      ${je.map((d,l)=>`
        <button class="day-pill planner-day-pill ${l===o?"active":""}" data-day="${l}" onclick="window.selectPlannerDay(${l})">
          ${d}
        </button>
      `).join("")}
    </div>

    <!-- Add Daily Plan Input + Priority Picker -->
    <div style="display: flex; gap: 8px; margin-bottom: 10px; flex-wrap: wrap;">
      <input type="text" id="input-daily-plan" onkeydown="if(event.key === 'Enter') window.addPlannerDailyTask()" class="form-input" placeholder="عنوان کار روز ${je[o]}..." style="flex: 2; min-width: 190px;" />
      <select id="select-daily-plan-priority" class="form-input" onchange="window.setPlannerNewTaskPriority(this.value)"
        title="اولویت این کار در ماتریس آیزنهاور" style="flex: 1; min-width: 190px; cursor: pointer;">
        ${Qe.map(d=>`
          <option value="${d.id}" ${a===d.id?"selected":""}>${d.emoji} ${d.id}: ${d.title}</option>
        `).join("")}
      </select>
      <button id="btn-add-daily-plan" onclick="window.addPlannerDailyTask()" class="btn-primary" style="width: auto; padding: 0 20px; white-space: nowrap;">افزودن به ${je[o]}</button>
    </div>

    <!-- فیلتر ربع‌ها -->
    <div id="planner-priority-filters-container">
      ${to(r,i)}
    </div>

    ${n==="matrix"?`
    <!-- ⊞ نمای ماتریس ۲×۲ آیزنهاور -->
    <div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px;" dir="rtl">
      ${Qe.map(d=>{const l=r.filter(g=>g.priority===d.id),c=l.filter(g=>g.isDone).length;return`
        <div style="background: ${d.softBg}; border: 1.5px solid ${d.borderColor}; border-radius: 18px; padding: 14px; display: flex; flex-direction: column; min-height: 190px;">
          <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 8px; margin-bottom: 10px;">
            <div>
              <strong style="font-size: 0.88rem; color: ${d.color}; display: block;">${d.emoji} ${d.id}: ${d.title}</strong>
              <span style="font-size: 0.68rem; color: var(--text-secondary);">${d.subtitle}</span>
            </div>
            <span id="quadrant-badge-${d.id}" style="background: ${d.softBg}; border: 1px solid ${d.borderColor}; color: ${d.color}; padding: 3px 9px; border-radius: 10px; font-size: 0.68rem; font-weight: 900; white-space: nowrap;">
              ${Se(c)}/${Se(l.length)}
            </span>
          </div>

          <div id="quadrant-tasks-${d.id}" class="quadrant-task-list" style="display: flex; flex-direction: column; gap: 6px; flex: 1; margin-bottom: 10px; max-height: 350px; overflow-y: auto;">
            ${l.length===0?'<p class="quadrant-empty-msg" style="font-size: 0.74rem; color: var(--text-secondary); opacity: 0.75; margin: 6px 0;">کاری در این خانه ثبت نشده است.</p>':l.map(g=>zt(g,d)).join("")}
          </div>

          <div style="display: flex; gap: 6px;">
            <input type="text" id="input-quadrant-task-${d.id}" class="form-input"
              placeholder="کار جدید در «${d.title}»..."
              onkeydown="if(event.key === 'Enter') window.addPlannerTaskToQuadrant('${d.id}')"
              style="flex: 1; min-width: 0; font-size: 0.76rem; padding: 7px 10px;" />
            <button onclick="window.addPlannerTaskToQuadrant('${d.id}')"
              style="padding: 7px 12px; font-size: 0.76rem; font-weight: 900; color: white; background: ${d.color}; border: none; border-radius: 11px; cursor: pointer; white-space: nowrap;"
              title="افزودن کار به همین خانه">＋</button>
          </div>
        </div>`}).join("")}
    </div>
    `:`
    <!-- ☰ نمای لیستی با برچسب اولویت -->
    <div id="planner-list-tasks-container" style="display: flex; flex-direction: column; gap: 8px; max-height: 450px; overflow-y: auto;">
      ${s.length===0?`<p class="list-empty-msg" style="font-size: 0.85rem; color: var(--text-secondary);">${i==="ALL"?"برای این روز کاری ثبت نشده است.":"در این خانه از ماتریس کاری برای این روز ثبت نشده است."}</p>`:s.map(d=>Zt(d)).join("")}
    </div>
    `}
  `}function Ue(){const o=document.getElementById("eisenhower-matrix-section");if(!o){window.renderApp&&window.renderApp();return}const e=typeof window<"u"&&(window.scrollY||window.pageYOffset)||0,t=new Map;o.querySelectorAll('.quadrant-task-list, #planner-list-tasks-container, [id^="quadrant-tasks-"]').forEach(s=>{s.id&&t.set(s.id,s.scrollTop)});const i=p.getCurrentWeek(),a=i?i.id:1,r=window.appState&&typeof window.appState.selectedDayIndex=="number"?window.appState.selectedDayIndex:(new Date().getDay()+1)%7;o.innerHTML=no(r,a),typeof window<"u"&&window.scrollTo(window.scrollX,e),t.forEach((s,d)=>{const l=document.getElementById(d);l&&(l.scrollTop=s)}),requestAnimationFrame(()=>{typeof window<"u"&&window.scrollTo(window.scrollX,e),t.forEach((s,d)=>{const l=document.getElementById(d);l&&(l.scrollTop=s)})})}window.updateEisenhowerMatrixSectionDOM=Ue;function un(o=0,e={}){const{plannerAccordions:t={countdowns:!1,targets:!1,weeklyGoals:!1,dailyMatrix:!1}}=e,n=p.getCurrentWeek(),i=n?n.id:1,a=p.getWeeklyGoals(i),r=p.getDailyPlans(i),s=p.getStudyTargets(),d=p.getCountdownEvents()||[],[l,c,g]=p.getTodayJalali(),y=(new Date().getDay()+1)%7,f=je[y],w=window.jalaliViewMonth!==void 0?window.jalaliViewMonth:c-1,u=window.jalaliViewYear!==void 0?window.jalaliViewYear:l,m=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],b=m[c-1],S=w<6?31:w<11?30:29,x=(p.jalaliToJdn(u,w+1,1)+2)%7,k=r.filter(A=>A.dayIndex===o);return`
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
                📌 امروز: ${f} ${Se(g)} ${b} ${Se(l)}
              </div>
            </div>
            
            <div style="display: flex; gap: 8px; align-items: center;">
              <button id="btn-jalali-prev-month" onclick="window.changeJalaliMonth(-1)" class="btn-header-action" style="padding: 4px 10px; font-weight: bold; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); color: #a1a1aa;">◀ ماه قبل</button>
              <span style="font-weight: 900; font-size: 0.95rem; color: #e4e4e7;">${m[w]} ${Se(u)}</span>
              <button id="btn-jalali-next-month" onclick="window.changeJalaliMonth(1)" class="btn-header-action" style="padding: 4px 10px; font-weight: bold; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); color: #a1a1aa;">ماه بعد ▶</button>
            </div>
          </div>

          <!-- Days of Week Header -->
          <div style="display: grid; grid-template-columns: repeat(7, 1fr); text-align: center; gap: 4px; font-size: 0.8rem; font-weight: bold; color: var(--text-secondary); margin-bottom: 10px; background: #1f2029; padding: 8px 0; border-radius: 10px;">
            <span>ش</span><span>ی</span><span>د</span><span>س</span><span>چ</span><span>پ</span><span>ج</span>
          </div>

          <!-- 31 Days Grid with Exact Weekday Alignment -->
          <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; text-align: center;">
            ${Array.from({length:x}).map(()=>`
              <div style="padding: 10px 4px; opacity: 0.15; font-size: 0.8rem;">•</div>
            `).join("")}
            ${Array.from({length:S}).map((A,P)=>{const M=P+1,T=M===g&&w===c-1&&u===l,O=(x+P)%7,C=je[O],z=String(w+1).padStart(2,"0"),B=String(M).padStart(2,"0"),U=`${u}/${z}/${B}`,L=(p.getStudyMinutesByDate(U)||0)/60,J=L>0?L%1===0?L.toFixed(0):L.toFixed(1):"0";let Y="background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.06); color: #71717a;",H='<div style="width: 4px; height: 4px; border-radius: 50%; background: rgba(255, 255, 255, 0.15); margin: 3px auto 0;"></div>';return L>=1&&L<3?(Y="background: rgba(16, 185, 129, 0.18); border: 1px solid rgba(16, 185, 129, 0.35); color: #6ee7b7;",H=`<div style="font-size: 0.68rem; margin-top: 2px; color: #6ee7b7; font-weight: 800;">${Se(J)}h</div>`):L>=3&&L<6?(Y="background: rgba(16, 185, 129, 0.45); border: 1px solid rgba(16, 185, 129, 0.7); color: #a7f3d0; box-shadow: 0 0 10px rgba(16, 185, 129, 0.25);",H=`<div style="font-size: 0.68rem; margin-top: 2px; color: #a7f3d0; font-weight: 900;">${Se(J)}h</div>`):L>=6?(Y="background: linear-gradient(135deg, #10b981 0%, #059669 100%); border: 1px solid #34d399; color: #ffffff; box-shadow: 0 0 14px rgba(16, 185, 129, 0.5);",H=`<div style="font-size: 0.68rem; margin-top: 2px; color: #ffffff; font-weight: 900; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">${Se(J)}h</div>`):L>0&&L<1&&(Y="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); color: #6ee7b7;",H=`<div style="font-size: 0.68rem; margin-top: 2px; color: #6ee7b7; font-weight: 700;">${Se(J)}h</div>`),`
                <div class="jalali-day-cell ${T?"active-today":""}"
                  onclick="if(window.openJalaliDayDetailsModal) window.openJalaliDayDetailsModal('${U}');"
                  style="padding: 8px 4px; border-radius: 12px; font-size: 0.85rem; font-family: 'Outfit'; font-weight: bold; cursor: pointer; transition: all 0.15s ease; ${Y} ${T?"outline: 2.5px solid #38bdf8; outline-offset: 1px;":""}"
                  onmouseenter="this.style.transform='scale(1.06)'"
                  onmouseleave="this.style.transform='scale(1)'"
                  title="روز ${Se(M)} ${m[w]} (${C}) - ${L>0?Se(J)+" ساعت مطالعه":"بدون مطالعه"}">
                  <div>${Se(M)} ${T?"📍":""}</div>
                  ${H}
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
                ${d.map(A=>`
                  <div style="display: flex; justify-content: space-between; align-items: center; background: #1f2029; padding: 10px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06);">
                    <div>
                      <strong style="font-size: 0.92rem; color: #e4e4e7;">🎯 ${A.title}</strong>
                      <div style="font-size: 0.78rem; color: var(--text-secondary); margin-top: 2px;">تاریخ: ${A.jy}/${A.jm}/${A.jd}</div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 10px;">
                      <span style="background: #16171d; color: #a1a1aa; border: 1px solid rgba(255,255,255,0.08); padding: 4px 10px; border-radius: 12px; font-weight: 800; font-size: 0.8rem; font-family: 'Outfit';">
                        ⏳ روزشمار فعال
                      </span>
                      <button class="btn-delete-countdown-item" onclick="window.deletePlannerCountdownEvent('${A.id}')" data-id="${A.id}" style="background: none; border: none; color: #ef4444; cursor: pointer;">🗑️</button>
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
              <input type="text" id="input-weekly-goal" onkeydown="if(event.key === 'Enter') window.addWeeklyGoal()" class="form-input" placeholder="عنوان هدف هفتگی (مثلاً: تمام کردن فصل ۳ زیست دهم)..." />
              <button id="btn-add-weekly-goal" onclick="window.addWeeklyGoal()" class="btn-primary" style="width: auto; padding: 0 20px; white-space: nowrap; background: #7c3aed;">افزودن</button>
            </div>

            <div id="weekly-goals-list-container" style="display: flex; flex-direction: column; gap: 8px;">
              ${a.length===0?'<p class="weekly-goals-empty-msg" style="font-size: 0.85rem; color: var(--text-secondary);">هیچ هدفی ثبت نشده است.</p>':""}
              ${a.map(A=>oo(A)).join("")}
            </div>
          </div>
        `:""}
      </div>
      
      <!-- ⚡ ACCORDION: Daily Plans + Eisenhower Matrix -->
      <div class="glass-panel" style="padding: 0; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; border-radius: 16px; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-planner-accordion-toggle" data-key="dailyMatrix" style="width: 100%; padding: 14px 18px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.92rem; font-weight: 800; color: #e4e4e7;">
            <span style="font-size: 1.1rem;">⚡</span>
            <span>برنامه‌ریزی روزانه و ماتریس اولویت (آیزنهاور) <span id="planner-accordion-daily-tasks-counter">${k.length>0?`<strong style="color: #38bdf8; font-size: 0.8rem; margin-right: 4px;">(${Se(k.length)} کار برای امروز)</strong>`:""}</span></span>
          </div>
          <span style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${t.dailyMatrix?"180deg":"0deg"});">▼</span>
        </button>

        ${t.dailyMatrix?`
          <div id="eisenhower-matrix-section" style="padding: 16px 18px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
            ${no(o,i)}
          </div>
        `:""}
      </div>
    </div>
  `}function Ao(o=!1){const e=p.getCategories();return`
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
        ${e.map(t=>{const n=Pe(t);return`
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
  `}if(typeof window<"u"){if(typeof window.openKonkurEstimatorModal!="function"||window.openKonkurEstimatorModal._isFallback){var Rt=function(){try{var o=document.getElementById("modal-konkur-estimator")||document.getElementById("modal-rank-estimator");o&&(o.style.display="flex",o.classList.add("active"))}catch{}try{window.appState?window.appState.activeModal="rankEstimator":typeof window.openRankEstimator=="function"&&window.openRankEstimator(),typeof window.renderApp=="function"&&window.renderApp()}catch{}try{var e=document.getElementById("modal-rank-estimator")||document.getElementById("modal-konkur-estimator");e&&(e.style.display="flex",e.classList.add("active"))}catch{}};Rt._isFallback=!0,typeof window.openKonkurEstimatorModal!="function"&&(window.openKonkurEstimatorModal=Rt)}window.toggleCategoriesAccordion=function(){window.isCategoriesAccordionOpen=!window.isCategoriesAccordionOpen,window.renderApp&&window.renderApp()},window.toggleLeitnerAccordion=function(){window.isLeitnerAccordionOpen=!window.isLeitnerAccordionOpen;const o=document.getElementById("leitner-cards-container");o&&(o.style.display=window.isLeitnerAccordionOpen?"block":"none"),window.renderApp&&window.renderApp()},window.closeLeitnerAccordion=function(){window.isLeitnerAccordionOpen=!1;const o=document.getElementById("leitner-cards-container");o&&(o.style.display="none"),window.renderApp&&window.renderApp()},window.openLeitnerAccordion=function(){window.isLeitnerAccordionOpen=!0;const o=document.getElementById("leitner-cards-container");o&&(o.style.display="block"),window.renderApp&&window.renderApp(),setTimeout(()=>{var e;(e=document.getElementById("section-leitner-box"))==null||e.scrollIntoView({behavior:"smooth"})},60)},window.toggleAddFlashcardForm=function(o){window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.showAddForm=typeof o=="boolean"?o:!window.leitnerState.showAddForm,window.renderApp&&window.renderApp()},window.saveManualFlashcard=function(){const o=document.getElementById("input-new-fc-deck"),e=document.getElementById("input-new-fc-question"),t=document.getElementById("input-new-fc-answer"),n=o?o.value.trim():"",i=e?e.value.trim():"",a=t?t.value.trim():"";if(!i||!a){window.showToast?window.showToast("لطفاً سؤال و پاسخ را وارد کنید","error"):alert("لطفاً سؤال و پاسخ را وارد کنید");return}p.addFlashcard(i,a,n||"عمومی"),window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.showAddForm=!1,window.showToast&&window.showToast("فلش‌کارت جدید اضافه شد ✨","success"),window.renderApp&&window.renderApp()},window.flipLeitnerCard=function(){window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.isFlipped=!window.leitnerState.isFlipped,window.renderApp&&window.renderApp()},window.prevLeitnerCard=function(){window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.activeIndex=Math.max(0,window.leitnerState.activeIndex-1),window.leitnerState.isFlipped=!1,window.renderApp&&window.renderApp()},window.nextLeitnerCard=function(){window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""});let e=[...p.getFlashcards()||[]];if(window.leitnerState.filterBox==="due"){const n=Date.now();e=e.filter(i=>!i.nextReviewDate||i.nextReviewDate<=n)}else["1","2","3","4","5"].includes(String(window.leitnerState.filterBox))&&(e=e.filter(n=>String(n.box||1)===String(window.leitnerState.filterBox)));const t=e.length;t>0&&(window.leitnerState.activeIndex=(window.leitnerState.activeIndex+1)%t),window.leitnerState.isFlipped=!1,window.renderApp&&window.renderApp()},window.reviewLeitnerCard=function(o,e){p.reviewFlashcard(o,e),window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.isFlipped=!1;let n=p.getFlashcards()||[];if(window.leitnerState.filterBox==="due"){const i=Date.now();n=n.filter(a=>!a.nextReviewDate||a.nextReviewDate<=i)}else["1","2","3","4","5"].includes(String(window.leitnerState.filterBox))&&(n=n.filter(i=>String(i.box||1)===String(window.leitnerState.filterBox)));window.leitnerState.activeIndex>=n.length&&(window.leitnerState.activeIndex=Math.max(0,n.length-1)),window.showToast&&window.showToast(e?"آفرین! کارت به خانه بعدی منتقل شد ⬆️":"کارت به خانه اول برگشت 🔄",e?"success":"info"),window.renderApp&&window.renderApp()},window.filterLeitnerBox=function(o){window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.filterBox=window.leitnerState.filterBox===String(o)?"all":String(o),window.leitnerState.activeIndex=0,window.leitnerState.isFlipped=!1,window.renderApp&&window.renderApp()},window.filterLeitnerTab=function(o){window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.filterBox=o,window.leitnerState.activeIndex=0,window.leitnerState.isFlipped=!1,window.renderApp&&window.renderApp()},window.deleteLeitnerCard=function(o){if(confirm&&!confirm("آیا از حذف این فلش‌کارت مطمئن هستید؟"))return;p.deleteFlashcard(o),window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""});const e=p.getFlashcards()||[];window.leitnerState.activeIndex>=e.length&&(window.leitnerState.activeIndex=Math.max(0,e.length-1)),window.showToast&&window.showToast("فلش‌کارت حذف شد 🗑️","info"),window.renderApp&&window.renderApp()},window.seedDefaultFlashcards=function(){localStorage.removeItem("planex_flashcards"),p.getFlashcards(),window.leitnerState||(window.leitnerState={activeIndex:0,isFlipped:!1,filterBox:"all",showAddForm:!1,showManagerList:!1,searchQuery:""}),window.leitnerState.activeIndex=0,window.leitnerState.isFlipped=!1,window.showToast&&window.showToast("فلش‌کارت‌های نمونه بارگذاری شدند 📥","success"),window.renderApp&&window.renderApp()}}function gn(){p.getThemeSettings();const o=p.getCategories()||[],e=!!window.isCategoriesAccordionOpen,t=i=>String(i).replace(/[0-9]/g,a=>"۰۱۲۳۴۵۶۷۸۹"[a]);return`
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
      ${Mo()}

      <!-- 🔄 Cloud Sync Box (Kept intact) -->
      ${function(){let i=null;try{i=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}const a=p.getUserProfile()||{};let r=(i==null?void 0:i.phone)||(i==null?void 0:i.phone_number)||a.phone||"";return r&&r.startsWith("98")?r="0"+r.slice(2):r&&r.startsWith("+98")?r="0"+r.slice(3):r&&r.length===10&&r.startsWith("9")&&(r="0"+r),typeof window<"u"&&!window.handleForceCloudSync&&(window.handleForceCloudSync=async function(){const s=document.getElementById("btn-force-cloud-sync");s&&(s.innerHTML="در حال همگام‌سازی...");try{window.personalSyncService&&typeof window.personalSyncService.pushToCloud=="function"&&await window.personalSyncService.pushToCloud(),window.showToast?window.showToast("تمامی پارت‌ها و گروه‌ها با موفقیت همگام شدند ✅","success"):alert("تمامی پارت‌ها و گروه‌ها با موفقیت همگام شدند ✅")}catch(d){console.error(d),window.showToast&&window.showToast("خطا در همگام‌سازی","error")}finally{s&&(s.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/></svg> همگام‌سازی فوری (Force Sync)')}}),r?`
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
            ${Ao(!0)}
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
  `}function Mo(){const o=p.getLeitnerStats()||{total:0,due:0},e=t=>String(t).replace(/[0-9]/g,n=>"۰۱۲۳۴۵۶۷۸۹"[n]);return`
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
  `}function Co(o={}){const t=(o.articlesAccordions||{questionBankHub:!1}).questionBankHub,n=Gt.filter(i=>i.id!=="questions-1404");return`
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
                  ${lo.map(i=>`
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
        ${n.map(i=>`
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
  `}function io(o){const e=["الف","ب","ج","د"],t=Array.isArray(o.options)?o.options:[],n=typeof o.correct_index=="number"?o.correct_index:e.indexOf(o.correct_option),i=o.options_analysis?Object.entries(o.options_analysis):[];return`
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
        ${t.map((a,r)=>{const s=e[r]||r+1,d=r===n||s===o.correct_option;return`
            <div style="display: flex; align-items: flex-start; gap: 8px; padding: 10px 12px; border-radius: 10px; font-size: 0.78rem; line-height: 1.6; ${d?"background: rgba(16, 185, 129, 0.12); border: 1.5px solid rgba(16, 185, 129, 0.4); border-right: 4px solid #10b981; color: #6ee7b7; font-weight: 700;":"background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.07); color: #cbd5e1;"}">
              <span style="display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 6px; font-size: 0.74rem; font-weight: 800; flex-shrink: 0; ${d?"background: #10b981; color: #ffffff;":"background: rgba(255,255,255,0.08); color: #94a3b8;"}">
                ${s}
              </span>
              <span style="flex: 1;">${a}</span>
              ${d?'<span style="font-size: 0.68rem; background: #10b981; color: #ffffff; padding: 2px 6px; border-radius: 4px; margin-right: auto; font-weight: 700;">✓ پاسخ</span>':""}
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
            ${i.map(([a,r])=>{const s=a===o.correct_option;return`
                <div style="font-size: 0.76rem; line-height: 1.65; padding: 4px 8px; border-radius: 6px; ${s?"background: rgba(16, 185, 129, 0.08);":""}">
                  <span style="font-weight: 800; margin-left: 4px; ${s?"color: #34d399;":"color: #f87171;"}">
                    گزینه (${a}) ${s?"★ صحیح":"تله"}:
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
          ${o.keywords.map(a=>`<span style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.07); color: #94a3b8; font-size: 0.68rem; padding: 2px 8px; border-radius: 6px;">#${a}</span>`).join("")}
        </div>
      `:""}

    </div>
  `}function Io(){const o=nt.length,e={};nt.forEach(i=>{const a=i.category||"سایر";e[a]=(e[a]||0)+1});const t=Object.keys(e).sort((i,a)=>e[a]-e[i]),n=nt.slice(0,30).map(i=>io(i)).join("");return`
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
          ${t.map(i=>`
            <button class="trap-cat-chip" data-cat="${i}" style="background: rgba(255, 255, 255, 0.05); color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.08); font-size: 0.72rem; font-weight: 700; padding: 5px 12px; border-radius: 20px; cursor: pointer; white-space: nowrap; transition: all 0.2s;">
              ${i} (${e[i]})
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
  `}function zo(o){const e=Gt.find(i=>i.id===o);if(!e)return`
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
            ${e.downloads.map(i=>{const a=i.format==="PDF",r=a?"#f43f5e":i.format==="JSON"?"#fbbf24":"#34d399",s=a?"rgba(244, 63, 94, 0.2)":i.format==="JSON"?"rgba(234, 179, 8, 0.2)":"rgba(16, 185, 129, 0.2)",d=a?"rgba(244, 63, 94, 0.4)":i.format==="JSON"?"rgba(234, 179, 8, 0.4)":"rgba(16, 185, 129, 0.4)";return`
                <div class="download-item-card" style="background: rgba(31, 32, 41, 0.85); border: 1.5px solid ${a?"rgba(244, 63, 94, 0.35)":"rgba(255, 255, 255, 0.08)"}; border-radius: 12px; padding: 14px; display: flex; flex-direction: column; justify-content: space-between; gap: 12px; ${a?"box-shadow: 0 4px 16px rgba(244, 63, 94, 0.15);":""}">
                  <div>
                    <div style="display: flex; align-items: center; justify-content: space-between; gap: 6px; margin-bottom: 6px;">
                      <span style="font-size: 0.68rem; font-weight: 800; background: ${s}; color: ${r}; border: 1px solid ${d}; padding: 2px 8px; border-radius: 6px;">
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
        ${n?Io():""}
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
  `}function Eo(o){if(o!=="khordad-1405-traps-analysis")return;const e=document.getElementById("traps-cards-list"),t=document.getElementById("traps-search-input"),n=document.getElementById("traps-count-badge"),i=document.getElementById("btn-traps-load-more"),a=document.getElementById("btn-traps-load-all"),r=document.getElementById("traps-load-more-wrapper"),s=document.querySelectorAll(".trap-cat-chip");if(!e)return;let d="all",l="",c=30;function g(){let y=nt;if(d!=="all"&&(y=y.filter(u=>u.category===d)),l.trim()){const u=l.trim().toLowerCase();y=y.filter(m=>m.question&&m.question.toLowerCase().includes(u)||m.question_trap&&m.question_trap.toLowerCase().includes(u)||m.clinical_pearl&&m.clinical_pearl.toLowerCase().includes(u)||m.mnemonic&&m.mnemonic.toLowerCase().includes(u)||Array.isArray(m.keywords)&&m.keywords.some(b=>b.toLowerCase().includes(u))||Array.isArray(m.options)&&m.options.some(b=>b.toLowerCase().includes(u)))}const f=y.length,w=y.slice(0,c);w.length===0?e.innerHTML=`
        <div style="text-align: center; padding: 40px 16px; background: rgba(0,0,0,0.2); border-radius: 12px; border: 1px dashed rgba(255,255,255,0.1);">
          <div style="font-size: 2rem; margin-bottom: 8px;">🔍</div>
          <p style="color: #94a3b8; font-size: 0.85rem; margin: 0;">هیچ تستی با این عبارت یا در این دسته‌بندی یافت نشد.</p>
        </div>
      `:e.innerHTML=w.map(u=>io(u)).join(""),n&&(n.textContent=`نمایش ${w.length} از ${f} سوال`),r&&(w.length>=f?r.style.display="none":r.style.display="block")}if(t){let y=null;t.oninput=f=>{clearTimeout(y),y=setTimeout(()=>{l=f.target.value,c=30,g()},150)}}s.forEach(y=>{y.onclick=()=>{s.forEach(f=>{f.style.background="rgba(255, 255, 255, 0.05)",f.style.color="#cbd5e1",f.style.border="1px solid rgba(255, 255, 255, 0.08)"}),y.style.background="#7c3aed",y.style.color="#ffffff",y.style.border="none",d=y.dataset.cat||"all",c=30,g()}}),i&&(i.onclick=()=>{c+=30,g()}),a&&(a.onclick=()=>{c=nt.length,g()})}typeof window<"u"&&(window.bindSingleArticleEvents=Eo);function No(o={}){const e=o.selectedArticleId!==void 0?o.selectedArticleId:window.appState?window.appState.selectedArticleId:null;return e==="questions-1404"?co():e?zo(e):Co(o)}function Do(){typeof window.renderApp=="function"&&window.renderApp()}typeof window<"u"&&(window.renderArticlesView=No,window.initArticlesView=Do);const[jo,Po]=p.getTodayJalali();let gt=jo,ft=Po;window.getSelectedRoutinesDate=function(){return window.selectedRoutinesDate||(window.selectedRoutinesDate=p.getTodayJalali()),window.selectedRoutinesDate};window.setSelectedRoutinesDate=function(o,e,t){window.selectedRoutinesDate=[o,e,t],window.renderApp&&window.renderApp()};const Bt=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],Oo=["✨","💧","🏃","😴","🚶","🧘","🥗","📚","🛌","🌙","☕","💊","💻","🎯","🔥","⭐","📝","🍎","🧠","🚴","📖","💪","🎨","🎧","⏰","🏊","🥊","☀️","⚡","🏆"];window.habitModalSelectedEmoji=window.habitModalSelectedEmoji||"✨";window.habitModalEditingId=null;window.selectHabitEmoji=o=>{window.habitModalSelectedEmoji=o;const e=document.getElementById("habit-emoji-preview");e&&(e.textContent=o,e.style.transform="scale(1.25)",setTimeout(()=>{e&&(e.style.transform="scale(1)")},150)),document.querySelectorAll(".habit-emoji-picker-btn").forEach(t=>{t.dataset.emoji===o?(t.style.background="rgba(56, 189, 248, 0.25)",t.style.borderColor="#38bdf8",t.style.transform="scale(1.15)",t.style.boxShadow="0 0 12px rgba(56, 189, 248, 0.4)"):(t.style.background="rgba(255, 255, 255, 0.05)",t.style.borderColor="rgba(255, 255, 255, 0.1)",t.style.transform="scale(1)",t.style.boxShadow="none")})};window.triggerCompletionBurst=o=>{try{const e=o?o.clientX||o.pageX:window.innerWidth/2,t=o?o.clientY||o.pageY:window.innerHeight/2,n=["✨","⭐","🎉","🔥","🌟","💥"],i=document.createElement("div");i.style.cssText=`position: fixed; left: ${e}px; top: ${t}px; pointer-events: none; z-index: 99999;`,document.body.appendChild(i);for(let a=0;a<6;a++){const r=document.createElement("span"),s=n[Math.floor(Math.random()*n.length)],d=Math.PI*2*a/6+(Math.random()*.4-.2),l=35+Math.random()*25,c=Math.cos(d)*l,g=Math.sin(d)*l-15;r.textContent=s,r.style.cssText=`
        position: absolute; left: 0; top: 0; font-size: 1.1rem;
        transform: translate(-50%, -50%) scale(0.5); opacity: 1;
        transition: transform 0.55s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.55s ease;
      `,i.appendChild(r),requestAnimationFrame(()=>{r.style.transform=`translate(${c}px, ${g}px) scale(1.3) rotate(${Math.random()*60-30}deg)`,r.style.opacity="0"})}setTimeout(()=>{i&&i.parentNode&&i.parentNode.removeChild(i)},600)}catch{}};window.handleHabitDayClick=(o,e,t=null)=>{var s,d;t&&typeof t.stopPropagation=="function"&&t.stopPropagation();const n=p.getHabits(),i=`${gt}_${ft}`,a=n.find(l=>l.id==o||String(l.id)===String(o)),r=((d=(s=a==null?void 0:a.completedDays)==null?void 0:s[i])==null?void 0:d[e])||0;p.cycleHabitDay(o,i,e),r===0&&window.triggerCompletionBurst&&window.triggerCompletionBurst(t),window.renderApp&&window.renderApp()};window.toggleTodayHabit=(o,e=null)=>{var l,c;e&&typeof e.stopPropagation=="function"&&e.stopPropagation();const[t,n,i]=window.getSelectedRoutinesDate(),a=`${t}_${n}`,s=p.getHabits().find(g=>g.id==o||String(g.id)===String(o)),d=((c=(l=s==null?void 0:s.completedDays)==null?void 0:l[a])==null?void 0:c[i])||0;p.cycleHabitDay(o,a,i),d===0&&window.triggerCompletionBurst&&window.triggerCompletionBurst(e),window.renderApp&&window.renderApp()};window.toggleRoutineChecklistItem=(o,e=null)=>{e&&typeof e.stopPropagation=="function"&&e.stopPropagation();const n=(p.getRoutineChecklist()||[]).find(a=>a.id==o||String(a.id)===String(o)),i=n?!n.completed:!0;p.toggleRoutineChecklistItem(o),i&&window.triggerCompletionBurst&&window.triggerCompletionBurst(e),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp()};window.addRoutineChecklistItem=()=>{const o=document.getElementById("input-routine-checklist-text");!o||!o.value.trim()||(p.addRoutineChecklistItem(o.value.trim()),o.value="",window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp())};window.deleteRoutineChecklistItem=o=>{p.deleteRoutineChecklistItem(o),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(0),window.renderApp&&window.renderApp()};window.handleChangeMonth=o=>{ft=parseInt(o),window.renderApp&&window.renderApp()};window.handleChangeYear=o=>{gt=parseInt(o),window.renderApp&&window.renderApp()};window.openAddHabitModal=()=>{window.habitModalEditingId=null,window.habitModalSelectedEmoji="✨";const o=document.getElementById("add-habit-modal"),e=document.getElementById("habit-modal-title"),t=document.getElementById("habit-title"),n=document.getElementById("btn-save-habit-modal");e&&(e.textContent="✨ افزودن روتین و عادت جدید"),t&&(t.value=""),n&&(n.textContent="ذخیره روتین"),o&&(o.style.display="flex"),window.selectHabitEmoji("✨"),t&&setTimeout(()=>t.focus(),100)};window.openEditHabitModal=o=>{const t=p.getHabits().find(d=>d.id==o||String(d.id)===String(o));if(!t)return;window.habitModalEditingId=o;const n=t.emoji||"✨";window.habitModalSelectedEmoji=n;const i=document.getElementById("add-habit-modal"),a=document.getElementById("habit-modal-title"),r=document.getElementById("habit-title"),s=document.getElementById("btn-save-habit-modal");a&&(a.textContent="✏️ ویرایش روتین و عادت"),r&&(r.value=t.title||""),s&&(s.textContent="به‌روزرسانی روتین"),i&&(i.style.display="flex"),window.selectHabitEmoji(n),r&&setTimeout(()=>r.focus(),100)};window.closeAddHabitModal=()=>{const o=document.getElementById("add-habit-modal");o&&(o.style.display="none"),window.habitModalEditingId=null};window.saveNewHabit=()=>{const o=document.getElementById("habit-title"),e=o?o.value.trim():"";if(!e){alert("لطفاً عنوان روتین یا عادت را وارد کنید.");return}const t=window.habitModalSelectedEmoji||"✨";window.habitModalEditingId?p.updateHabit(window.habitModalEditingId,{title:e,emoji:t}):p.addHabit(e,"روزانه","08:00",t),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.closeAddHabitModal(),window.renderApp()};window.deleteHabitGlobal=o=>{confirm("آیا از حذف این عادت اطمینان دارید؟")&&(p.deleteHabit(o),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(0),window.renderApp())};window.planexPublicRoutines=[];window.planexHasFetchedRoutines=!1;window.fetchPublicRoutines=async()=>{try{const o=localStorage.getItem("planex_jwt_token");if(!o)return;const e=await fetch(`${le}/api/routines/public.php`,{headers:{Authorization:`Bearer ${o}`}}),t=await e.json();t.success?(window.planexPublicRoutines=t.routines,window.planexHasFetchedRoutines=!0,window.renderApp()):e.status===403&&(window.planexReciprocityError=t.message,window.planexHasFetchedRoutines=!0,window.renderApp())}catch(o){console.error("Error fetching routines",o)}};window.copyPublicRoutine=async o=>{try{const e=localStorage.getItem("planex_jwt_token");if(!e){alert("لطفاً ابتدا وارد حساب کاربری خود شوید.");return}const n=await(await fetch(`${le}/api/routines/copy.php?id=${encodeURIComponent(o)}`,{method:"POST",headers:{Authorization:`Bearer ${e}`}})).json();n.success?(alert("✅ "+n.message),p.addHabit("روتین کپی شده جدید"),window.renderApp()):alert("❌ خطا: "+n.message)}catch{alert("خطا در برقراری ارتباط با سرور.")}};window.toggleMyRoutinePublic=(o,e)=>{alert(!e?"📢 روتین شما عمومی شد!":"🔒 روتین شما خصوصی شد."),window.renderApp()};window.PRE_MADE_ROUTINES=[{id:"miracle_morning",title:"🌅 معجزه صبحگاهی (Miracle Morning)",desc:"شروع پرانرژی روز با تمرکز، ذهن‌آگاهی و انگیزه بالا",category:"Morning",tasks:["🛏️ مرتب کردن تخت خواب (۱ دقیقه)","🧘 تنفس عمیق و مدیتیشن صبحگاهی (۱ دقیقه)","🗣️ بیان اهداف با جملات تأکیدی مثبت (۱ دقیقه)","🖼️ تجسم خودِ آینده و اهداف بزرگ (۱ دقیقه)","🏋️‍♂️ حرکات کششی و ورزش سبک (۱ دقیقه)","📖 مطالعه و یادگیری مطلب جدید (۱ دقیقه)","📕 ژورنال‌نویسی و ثبت افکار و احساسات (۱ دقیقه)"]},{id:"calm_ready_morning",title:"☕ صبح آرام و آماده (Calm & Ready Morning)",desc:"آماده‌سازی روزانه بدون عجله، استرس و سردرگمی",category:"Morning",tasks:["💧 نوشیدن یک لیوان آب ولرم (۱ دقیقه)","🚿 دوش گرفتن و شادابی صبح (۱۵ دقیقه)","🧴 روتین مراقبت از پوست (۴ دقیقه)","👕 تعویض لباس و آماده شدن (۵ دقیقه)","💇 استایل مو و ظاهر (۲۰ دقیقه)","📋 بررسی جدول و برنامه روزانه (۵ دقیقه)","👜 جمع‌آوری و آماده کردن وسایل ضروری (۱۰ دقیقه)"]},{id:"deep_study",title:"📚 آماده‌سازی مطالعه عمیق (Study Routine)",desc:"فراهم کردن شرایط محیطی برای حداکثر یادگیری و تمرکز",category:"Study",tasks:["🎒 آماده کردن تمام کتب و جزوات مطالعه (۱۰ دقیقه)","💡 تنظیم نور، زاویه چراغ و روشنایی محیط (۱ دقیقه)","📋 مشخص کردن پارت‌ها و بودجه‌بندی روز (۱ دقیقه)","🧹 مرتب و خلوت کردن کامل میز کار (۱ دقیقه)","⏱️ بلاک تمرکز و مطالعه عمیق بدون حواس‌پرتی (۵۰ دقیقه)"]},{id:"exercise_health",title:"🏃‍♀️ ورزش، تحرک و شادابی (Exercise & Body)",desc:"کاهش استرس روزانه، افزایش انعطاف‌پذیری و تقویت حافظه",category:"Exercise",tasks:["🏋️ تمرینات ورزشی و بدنسازی (۱۵ دقیقه)","🤸 حرکات کششی و افزایش انعطاف بدن (۱۰ دقیقه)","🏃 دویدن یا پیاده‌روی سریع (۳۰ دقیقه)","🧘 یوگا و تنفس پیوسته ضد اضطراب (۲۰ دقیقه)","🌳 پیاده‌روی در فضای باز و هوای آزاد (۴۰ دقیقه)"]},{id:"productivity_boost",title:"🚀 افزایش بهره‌وری و اقدام سریع (Productivity)",desc:"شکستن تنبلی، اولویت‌بندی تسک‌ها و شروع بدون معطلی",category:"Productivity",tasks:["🎯 انتخاب مهم‌ترین و سرنوشت‌سازترین کار امروز","📝 یادداشت ۳ تسک حیاتی و کلیدی روز (۵ دقیقه)","📌 انتخاب ۱ تسک فوری برای ۳۰ دقیقه آینده (۳ دقیقه)","⚡ شمارش معکوس ۵ ثانیه‌ای و پرتاب به سمت عمل (۵ ثانیه)","📍 تعیین دقیق زمان و مکان اجرای تسک (۳ دقیقه)"]},{id:"relaxation_mind",title:"🌸 آرامش، ذهن‌آگاهی و تخلیه روان (Relaxation)",desc:"استراحت اصولی مغز، آرام‌سازی ذهن و بازیابی انرژی",category:"Relaxation",tasks:["👥 تماس یا پیام به یک دوست و احوال‌پرسی (۱۰ دقیقه)","📝 یادداشت‌برداری آزاد و تخلیه ذهن در دفترچه (۲۰ دقیقه)","🌤️ خیره شدن به آسمان، بستن چشم‌ها و حس نور خورشید (۲ دقیقه)","🧹 مرتب کردن محیط اطراف برای آرامش بصری (۱۰ دقیقه)","🪷 بازتاب روز، سپاسگزاری و مرور حس و حال (۵ دقیقه)"]},{id:"step_away_stress",title:"🌿 فاصله‌گیری از استرس (Step Away from Stress)",desc:"تکنیک‌های ساده و سریع برای سبک کردن ذهن در فشارهای کاری",category:"Stress Relief",tasks:["🧠 توجه و پذیرش احساس فعلی بدون قضاوت (۱ دقیقه)","✏️ نوشتن افکار نگران‌کننده روی کاغذ (۲ دقیقه)","🤝 نگاه به این موقعیت از زاویه دید یک دوست صمیمی (۲ دقیقه)","🎯 خالی کردن ذهن و شروع با یک اقدام فیزیکی بسیار کوچک (۳ دقیقه)","🌸 مشاهده و احساس تغییر درونی ایجاد شده (۱ دقیقه)"]},{id:"sos_breathing",title:"🫁 تنفس نجات‌بخش و گراندینگ (SOS Breathing)",desc:"وقتی تنفس سنگین می‌شود و نیاز به اتصال به لحظه حال داری",category:"SOS",tasks:["🧘 الگوی تنفسی ۴ به ۶ عمیق (۱ دقیقه)","❤️ گراندینگ و قرار دادن دست‌ها روی قفسه سینه/کف دست‌ها (۱ دقیقه)","🌳 خیره شدن به یک نقطه ثابت در محیط (۱ دقیقه)","🎧 گوش سپردن فعال به ۳ صدای مختلف محیطی (۱ دقیقه)","🪷 ۳ بار بازدم آرام، عمیق و طولانی (۱ دقیقه)"]},{id:"sos_anxiety",title:"🛡️ مهار آنی اضطراب حاد (When You Feel Anxious)",desc:"تکنیک حواس پنج‌گانه برای بازگشت سریع به زمان حال",category:"SOS",tasks:["👓 پیدا کردن ۵ شیء با رنگ‌های مختلف در اتاق (۱ دقیقه)","🎧 شناسایی و تفکیک ۳ صدای پیرامون (۱ دقیقه)","✍️ یادداشت یک حس بدنی فعلی (۱ دقیقه)","🧊 لمس یا شستن دست‌ها با آب خنک (۱ دقیقه)","☕ در دست گرفتن یک فنجان یا نوشیدنی گرم (۱ دقیقه)"]},{id:"sos_mood_swings",title:"⚖️ بازگشت به تعادل احساسی (When Mood Swings)",desc:"کنترل نوسانات خلقی ناگهانی و بازیابی آرامش درونی",category:"SOS",tasks:["🪷 احساس دمای محیط و تماس نسیم/سرما (۱ دقیقه)","🎧 پخش و شنیدن یک قطعه صوتی آرامش‌بخش (۱ دقیقه)","❤️ فشردن ملایم کف پاها به زمین و حس تکیه‌گاه (۱ دقیقه)","💡 فشردن انگشتان دست تک‌به‌تک و متمرکز (۱ دقیقه)","✍️ نوشتن جمله آرام‌بخش «من در امانم و حالم خوب است» (۱ دقیقه)"]}];window.clonePreMadeRoutine=o=>{const e=window.PRE_MADE_ROUTINES.find(t=>t.id===o);e&&(e.tasks.forEach(t=>{p.addHabit(t)}),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),alert(`✅ تمام تسک‌های روتین "${e.title}" با موفقیت به لیست عادات شما اضافه شد!`),window.renderApp())};function Ro(o,e){let t="";for(let n=0;n<5;n++){const i=n===4?3:7;let a=0;for(let l=n*7+1;l<=Math.min((n+1)*7,31);l++)a+=o[l-1]||0;const r=i*e,s=r>0?Math.round(a/r*100):0,d=100.5-100.5*s/100;t+='<div style="display: flex; flex-direction: column; align-items: center; gap: 5px;">',t+='<div style="position: relative; width: 40px; height: 40px;">',t+='<svg width="40" height="40" viewBox="0 0 40 40">',t+='<circle cx="20" cy="20" r="16" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="4"></circle>',t+='<circle cx="20" cy="20" r="16" fill="none" stroke="var(--primary-accent)" stroke-width="4" stroke-dasharray="100.5" stroke-dashoffset="'+d+'" stroke-linecap="round" transform="rotate(-90 20 20)"></circle>',t+="</svg>",t+='<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; font-family: Outfit;">'+s+"%</div>",t+="</div>",t+='<span style="font-size: 0.6rem; color: var(--text-secondary);">هفته '+(n+1)+"</span>",t+="</div>"}return t}window.setJournalMood=function(o){const[e,t,n]=window.getSelectedRoutinesDate(),i=`${e}_${t}_${n}`,a=p.getJournalEntry?p.getJournalEntry(i):{mood:"",rating:0,note:""};a.mood=o,p.saveJournalEntry&&p.saveJournalEntry(i,a.mood,a.rating,a.note),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp()};window.setJournalRating=function(o){const[e,t,n]=window.getSelectedRoutinesDate(),i=`${e}_${t}_${n}`,a=p.getJournalEntry?p.getJournalEntry(i):{mood:"",rating:0,note:""};a.rating=o,p.saveJournalEntry&&p.saveJournalEntry(i,a.mood,a.rating,a.note),window.triggerActionDrivenPush&&window.triggerActionDrivenPush(),window.renderApp&&window.renderApp()};window.saveJournalNote=function(o){const[e,t,n]=window.getSelectedRoutinesDate(),i=`${e}_${t}_${n}`,a=p.getJournalEntry?p.getJournalEntry(i):{mood:"",rating:0,note:""};a.note!==o&&(a.note=o,p.saveJournalEntry&&p.saveJournalEntry(i,a.mood,a.rating,a.note),window.triggerActionDrivenPush&&window.triggerActionDrivenPush())};function fn(o={}){const{routinesAccordions:e={consultation:!1,statsChart:!1,habitTracker:!1}}=o,t=p.getHabits(),n=`${gt}_${ft}`,i=p.getRoutineChecklist()||[];let a=t.length,r=a*31,s=0;const d=new Array(31).fill(0);t.forEach(T=>{var C;const O=((C=T.completedDays)==null?void 0:C[n])||{};for(let z=1;z<=31;z++)O[z]===1&&(s++,d[z-1]++)});const l=r>0?Math.round(s/r*100):0,[c,g,y]=window.getSelectedRoutinesDate(),f=`${c}_${g}`,w=T=>String(T).replace(/[0-9]/g,O=>"۰۱۲۳۴۵۶۷۸۹"[O]);let u=0;t.forEach(T=>{var C;(((C=T.completedDays)==null?void 0:C[f])||{})[y]===1&&u++});const m=a>0?Math.round(u/a*100):0;!window.planexHasFetchedRoutines&&localStorage.getItem("planex_jwt_token")&&(window.planexHasFetchedRoutines=!0,setTimeout(()=>window.fetchPublicRoutines(),500));const b=new Date,S=(b.getDay()+1)%7;let I='<div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 12px; margin-bottom: 16px; scrollbar-width: none; direction: rtl;">';const x=["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه"];for(let T=0;T<7;T++){const O=new Date(b);O.setDate(b.getDate()-S+T);const[C,z,B]=p.gregorianToJalali(O.getFullYear(),O.getMonth()+1,O.getDate()),U=`${C}_${z}`;let F=0;t.forEach(D=>{var Z,X;((X=(Z=D.completedDays)==null?void 0:Z[U])==null?void 0:X[B])===1&&F++});const L=a>0?F/a:0,J=C===c&&z===g&&B===y,Y=J?"rgba(56, 189, 248, 0.2)":"rgba(255, 255, 255, 0.05)",H=J?"rgba(56, 189, 248, 0.6)":"rgba(255, 255, 255, 0.1)",Q=L===1&&a>0?"#10b981":L>0?"#f59e0b":"transparent";I+=`
      <div onclick="window.setSelectedRoutinesDate(${C}, ${z}, ${B})"
           style="flex: 1; min-width: 60px; padding: 6px 4px; border-radius: 14px; background: ${Y}; border: 1px solid ${H}; display: flex; flex-direction: column; align-items: center; cursor: pointer; transition: all 0.2s ease-in-out;">
        <span style="font-size: 0.7rem; color: ${J?"#38bdf8":"#9ca3af"}; margin-bottom: 4px;">${x[T]}</span>
        <span style="font-size: 1.2rem; font-weight: 800; color: ${J?"#fff":"#d1d5db"}; margin-bottom: 8px;">${w(B)}</span>
        <div style="width: 8px; height: 8px; border-radius: 50%; background: ${Q}; border: 1px solid ${L>0?Q:"rgba(255,255,255,0.1)"};"></div>
      </div>
    `}I+="</div>";const k=`${c}_${g}_${y}`,A=p.getJournalEntry?p.getJournalEntry(k):{mood:"",rating:0,note:""};let M=`
    <div class="glass-panel" style="margin-bottom: 16px; border-radius: 18px; border: 1.5px solid rgba(255,255,255,0.1); padding: 16px; direction: rtl;">
      <h3 style="margin: 0 0 12px 0; font-size: 1rem; color: #f8fafc; font-weight: 800;">حال و احساس امروز</h3>
      <div style="display: flex; gap: 8px; overflow-x: auto; padding-bottom: 8px; margin-bottom: 12px; scrollbar-width: none;">
        ${["❤️","💪","😴","😍","😡","😫","😔","😐","🙂","😄"].map(T=>`
          <button onclick="window.setJournalMood('${T}')" style="flex-shrink: 0; width: 40px; height: 40px; border-radius: 50%; border: ${A.mood===T?"2px solid #38bdf8":"1px solid rgba(255,255,255,0.1)"}; background: ${A.mood===T?"rgba(56,189,248,0.2)":"rgba(255,255,255,0.05)"}; font-size: 1.2rem; cursor: pointer;">${T}</button>
        `).join("")}
      </div>
      <h4 style="margin: 0 0 8px 0; font-size: 0.85rem; color: #cbd5e1;">نمره روز</h4>
      <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 8px; margin-bottom: 12px; scrollbar-width: none;">
        ${[1,2,3,4,5,6,7,8,9,10].map(T=>`
          <button onclick="window.setJournalRating(${T})" style="flex-shrink: 0; width: 36px; height: 36px; border-radius: 50%; border: ${A.rating===T?"2px solid #10b981":"1px solid rgba(255,255,255,0.1)"}; background: ${A.rating===T?"rgba(16,185,129,0.2)":"rgba(255,255,255,0.05)"}; color: ${A.rating===T?"#10b981":"#fff"}; font-weight: 800; cursor: pointer;">${w(T)}</button>
        `).join("")}
      </div>
      <h4 style="margin: 0 0 8px 0; font-size: 0.85rem; color: #cbd5e1;">ژورنال امروز</h4>
      <textarea id="journal-note-input" rows="3" placeholder="امروز چطور گذشت؟ چی یاد گرفتی؟ چی حس کردی؟..." style="width: 100%; box-sizing: border-box; background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 10px; color: #fff; font-family: inherit; font-size: 0.85rem; margin-bottom: 12px; resize: vertical;" onblur="window.saveJournalNote(this.value)">${A.note}</textarea>
    </div>
  `;return`
    <div class="main-container" style="padding-bottom: 100px;">
      ${I}
      
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
                ${w(u)} از ${w(a)} روتین امروز انجام شد (${w(m)}٪)
              </span>
            </div>
          </div>
          <div style="background: #1f2029; border: 1px solid rgba(16, 185, 129, 0.35); color: #10b981; padding: 4px 12px; border-radius: 12px; font-weight: 900; font-size: 0.85rem; font-family: 'Outfit', sans-serif;">
            ${w(m)}٪
          </div>
        </div>

        <!-- Progress Fill Bar -->
        <div style="width: 100%; height: 8px; background: rgba(0, 0, 0, 0.35); border-radius: 6px; overflow: hidden; border: 1px solid rgba(255, 255, 255, 0.08);">
          <div style="height: 100%; width: ${m}%; background: linear-gradient(90deg, #10b981 0%, #38bdf8 100%); border-radius: 6px; transition: width 0.6s ease; box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);"></div>
        </div>

        <!-- Today's Habits Quick-Toggle List -->
        ${t.length>0?`
          <div style="margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255, 255, 255, 0.08); display: flex; flex-direction: column; gap: 8px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.78rem; font-weight: 700; color: #e2e8f0;">⚡ ثبت سریع عادات امروز (${w(y)} ${Bt[g-1]}):</span>
              <span style="font-size: 0.72rem; color: #94a3b8;">با یک کلیک علامت بزنید</span>
            </div>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              ${t.map(T=>{var L,J;const O=((J=(L=T.completedDays)==null?void 0:L[f])==null?void 0:J[y])||0;let C="rgba(255, 255, 255, 0.05)",z="rgba(255, 255, 255, 0.1)",B="#cbd5e1",U="○",F="ثبت نشده";return O===1?(C="rgba(16, 185, 129, 0.22)",z="rgba(16, 185, 129, 0.6)",B="#34d399",U="✓",F="انجام شد"):O===2&&(C="rgba(239, 68, 68, 0.22)",z="rgba(239, 68, 68, 0.6)",B="#f87171",U="✕",F="انجام نشد"),`
                  <button type="button" onclick="window.toggleTodayHabit('${T.id}', event)"
                    style="display: flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 12px; background: ${C}; border: 1px solid ${z}; color: ${B}; cursor: pointer; transition: all 0.2s ease; font-family: inherit; font-size: 0.8rem; font-weight: 700;"
                    title="کلیک برای تغییر وضعیت روتین امروز (انجام شد / انجام نشد / ریست)">
                    <span style="font-size: 0.95rem;">${T.emoji||"✨"}</span>
                    <span>${T.title}</span>
                    <span style="background: rgba(0,0,0,0.3); border-radius: 6px; padding: 1px 6px; font-size: 0.72rem; font-family: 'Outfit'; font-weight: 800;">${U} ${F}</span>
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
                ${Array.from({length:10},(T,O)=>1401+O).map(T=>`<option value="${T}" ${T===gt?"selected":""} style="color: #000;">${T}</option>`).join("")}
              </select>
              
              <div style="display: flex; gap: 6px;">
                ${Bt.map((T,O)=>`
                  <button onclick="window.handleChangeMonth(${O+1})" class="${ft===O+1?"btn-primary":"glass-panel"}" style="padding: 6px 12px; border: none; border-radius: 12px; font-size: 0.8rem; white-space: nowrap; cursor: pointer;">
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
                    ${Array.from({length:31},(T,O)=>`
                      <th style="padding: 4px; font-family: 'Outfit', sans-serif; font-weight: normal; color: var(--text-secondary); width: 26px;">${O+1}</th>
                    `).join("")}
                  </tr>
                </thead>
                <tbody>
                  ${t.length===0?'<tr><td colspan="33" style="padding: 20px; color: var(--text-secondary);">هیچ عادتی ثبت نشده است.</td></tr>':""}
                  ${t.map(T=>{var F;const O=((F=T.completedDays)==null?void 0:F[n])||{};let C=0,z=0,B=0;for(let L=1;L<=31;L++)O[L]===1?(C++,B++):B=0,B>z&&(z=B);const U=Math.round(C/31*100);return`
                    <tr>
                      <td class="habit-matrix-col-title" style="text-align: right; padding-right: 10px; position: sticky; right: 0; background: var(--bg-dark); z-index: 2; border-radius: 0 8px 8px 0; border: 1px solid rgba(255,255,255,0.05); border-left: none;">
                        <div style="display: flex; align-items: center; justify-content: space-between; overflow: hidden; gap: 4px;">
                          <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-weight: 600; display: flex; align-items: center; gap: 6px;">
                            <span style="font-size: 1.05rem;">${T.emoji||"✨"}</span>
                            <span>${T.title}</span>
                            ${z>0?`<span style="background: rgba(245, 158, 11, 0.15); border: 1px solid rgba(245, 158, 11, 0.35); color: #f59e0b; padding: 1px 6px; border-radius: 8px; font-size: 0.68rem; font-weight: 800; font-family: 'Outfit', sans-serif; display: inline-flex; align-items: center; gap: 2px;" title="استریک پیوستگی روتین">🔥 ${w(z)}</span>`:""}
                          </span>
                          <div style="display: flex; align-items: center; gap: 2px; flex-shrink: 0;">
                            <button onclick="window.openEditHabitModal('${T.id}')" title="ویرایش روتین" style="background:none; border:none; color: #38bdf8; cursor:pointer; font-size: 0.82rem; padding: 2px 4px; opacity: 0.85; transition: transform 0.15s;" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">✏️</button>
                            <button onclick="window.deleteHabitGlobal('${T.id}')" title="حذف روتین" style="background:none; border:none; color: #ef4444; cursor:pointer; font-size: 0.82rem; padding: 2px 4px; opacity: 0.85; transition: transform 0.15s;" onmouseover="this.style.transform='scale(1.15)'" onmouseout="this.style.transform='scale(1)'">✕</button>
                          </div>
                        </div>
                      </td>
                      ${Array.from({length:31},(L,J)=>{const Y=O[J+1]||0;let H="rgba(255,255,255,0.05)",Q="transparent",D="○";return Y===1&&(H="rgba(16, 185, 129, 0.2)",Q="#10b981",D="✓"),Y===2&&(H="rgba(239, 68, 68, 0.2)",Q="#ef4444",D="✕"),`
                          <td onclick="window.handleHabitDayClick('${T.id}', ${J+1}, event)" style="background: ${H}; color: ${Q}; border-radius: 4px; cursor: pointer; transition: 0.2s; border: 1px solid rgba(255,255,255,0.02); height: 26px;">
                            ${Y===0?"":D}
                          </td>
                        `}).join("")}
                      <td style="color: var(--text-primary); font-family: 'Outfit'; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.05); border-right: none; border-left: none;">${C}</td>
                      <td style="color: #f59e0b; font-family: 'Outfit'; font-size: 0.85rem; border: 1px solid rgba(255,255,255,0.05); border-right: none; border-left: none;">${z}</td>
                      <td style="color: #10b981; font-weight: bold; font-family: 'Outfit'; border-radius: 8px 0 0 8px; border: 1px solid rgba(255,255,255,0.05); border-right: none;">${U}%</td>
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
                  ${Ro(d,a)}
                </div>
              </div>
            </div>

            <!-- 2. Daily Trend Bar Chart Card -->
            ${(()=>{const T=Math.max(...d,1),O=C=>String(C).replace(/[0-9]/g,z=>"۰۱۲۳۴۵۶۷۸۹"[z]);return`
                <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 15px;">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; flex-wrap: wrap; gap: 8px;">
                    <h3 style="font-size: 0.95rem; color: #38bdf8; margin: 0;">📊 نمودار روند روزانه عادات (۳۱ روز ماه)</h3>
                    <span style="font-size: 0.75rem; color: var(--text-secondary);">مقیاس پویا: حداکثر ${O(T)} عادت در روز</span>
                  </div>

                  <div style="overflow-x: auto; padding-bottom: 10px;">
                    <div style="display: flex; align-items: flex-end; height: 140px; gap: 4px; min-width: 650px; padding: 10px 4px 0 4px; border-bottom: 1px solid rgba(255,255,255,0.1);">
                      ${d.map((C,z)=>{const B=C>0?C/T*100:0,U=C===T&&C>0;return`
                          <div style="flex: 1; display: flex; flex-direction: column; align-items: center; height: 100%; justify-content: flex-end; position: relative;">
                            <span style="font-size: 0.7rem; color: ${U?"#ec4899":B>0?"#38bdf8":"transparent"}; font-family: 'Outfit'; margin-bottom: 3px; font-weight: bold;">
                              ${C>0?O(C):""}
                            </span>
                            <div style="width: 100%; background: ${U?"linear-gradient(180deg, #ec4899 0%, #a855f7 100%)":B>0?"linear-gradient(180deg, #38bdf8 0%, #6366f1 100%)":"rgba(255,255,255,0.05)"}; height: ${C>0?Math.max(B,8):4}%; border-radius: 4px 4px 0 0; transition: all 0.3s; ${B>0?"box-shadow: 0 2px 8px rgba(56,189,248,0.3);":""}" title="روز ${O(z+1)}: ${O(C)} عادت"></div>
                            <span style="font-size: 0.7rem; color: ${U?"#ec4899":"var(--text-secondary)"}; font-family: 'Outfit'; margin-top: 6px; font-weight: ${U?"bold":"normal"};">${O(z+1)}</span>
                          </div>
                        `}).join("")}
                    </div>
                  </div>
                </div>

                <!-- 3. Compact Habit Heatmaps -->
                <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 15px; margin-top: 15px;">
                  <h3 style="font-size: 0.95rem; color: #38bdf8; margin: 0 0 12px 0;">نقشه فعالیت عادت‌ها (ماه جاری)</h3>
                  <div style="display: flex; flex-wrap: wrap; gap: 12px; justify-content: center;">
                    ${t.map(C=>{var U;const z=((U=C.completedDays)==null?void 0:U[f])||{};let B="";for(let F=1;F<=31;F++){const L=z[F]===1;B+=`<div style="width: 8px; height: 8px; border-radius: 2px; background: ${L?"#10b981":"rgba(255,255,255,0.05)"}; border: 1px solid ${L?"#059669":"rgba(255,255,255,0.1)"};" title="روز ${F}"></div>`}return`
                        <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 10px; padding: 10px; min-width: 150px; flex: 1;">
                          <div style="font-size: 0.8rem; color: #e2e8f0; font-weight: 700; margin-bottom: 6px; text-align: center;">${C.emoji||"✨"} ${C.title}</div>
                          <div style="display: grid; grid-template-columns: repeat(10, 1fr); gap: 3px; justify-content: center;">
                            ${B}
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
          ${i.map(T=>`
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
                ${T.tasks.map(O=>`<li style="margin-bottom: 4px;">${O}</li>`).join("")}
              </ul>
              <button onclick="window.clonePreMadeRoutine('${T.id}')" class="btn-primary" style="padding: 8px; font-size: 0.8rem; width: 100%; display: flex; align-items: center; justify-content: center; gap: 6px; background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.3);">
                ➕ افزودن به روتین‌های من
              </button>
            </div>
          `).join("")}
        </div>
      </details>
      ${M}
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
  `}function Lt(){const o=_&&typeof _.getUserProfile=="function"?_.getUserProfile():{nickname:"",target:"",avatar_url:""};let e=null;try{e=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}")}catch{}const t=o.nickname||o.name||(e==null?void 0:e.full_name)||(e==null?void 0:e.name)||"",n=t&&!_e(t)?t.trim():"",i=o.target||o.targetField||o.major||"",r=localStorage.getItem("planex_user_avatar")||""||o.avatar_url||o.avatarUrl||o.avatar||o.photo_url||(e==null?void 0:e.avatar_url)||"",s=["🩺 آزمون پره‌اینترنی","👨‍⚕️ آزمون دستیاری","🧬 کنکور تجربی","📐 کنکور ریاضی","📚 کنکور انسانی","⚖️ آزمون وکالت","🎓 ارشد علوم پزشکی","🌐 آزمون آیلتس / زبان"],l=[...Array.from({length:8},(c,g)=>`https://api.dicebear.com/7.x/adventurer/svg?seed=Adv${g+1}`),...Array.from({length:8},(c,g)=>`https://api.dicebear.com/7.x/bottts/svg?seed=Bot${g+1}`),...Array.from({length:8},(c,g)=>`https://api.dicebear.com/7.x/micah/svg?seed=Micah${g+1}`),...Array.from({length:8},(c,g)=>`https://api.dicebear.com/7.x/fun-emoji/svg?seed=Emo${g+1}`),...Array.from({length:8},(c,g)=>`https://api.dicebear.com/7.x/notionists/svg?seed=Notion${g+1}`)].map((c,g)=>`
      <div class="avatar-preset-item" onclick="window.selectEditProfileAvatar('${c}')" style="width: 52px; height: 52px; aspect-ratio: 1/1; border-radius: 50%; cursor: pointer; border: 2.5px solid ${r===c?"#7c3aed":"rgba(255,255,255,0.1)"}; transition: all 0.2s ease; overflow: hidden; background: rgba(255,255,255,0.05); display: flex; align-items: center; justify-content: center; position: relative; flex-shrink: 0;">
        <img src="${c}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='https://api.dicebear.com/7.x/bottts/svg?seed=fallback${g}'" />
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
            <input type="text" id="input-edit-profile-target" value="${i}" placeholder="مثال: آزمون پره‌اینترنی / کنکور تجربی" class="form-input" style="width: 100%; box-sizing: border-box; padding: 12px 14px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); background: #1f2029; color: white; font-size: 0.85rem;" />
            
            <!-- Popular Goal Chips -->
            <div style="margin-top: 10px;">
              <div style="font-size: 0.72rem; color: #8e8e9c; font-weight: 700; margin-bottom: 6px;">💡 انتخاب سریع اهداف محبوب:</div>
              <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                ${s.map(c=>`
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
  `}window.openEditProfileModal=function(){window.appState&&(window.appState.activeModal="editProfile",window.renderApp&&window.renderApp())};window.closeEditProfileModal=function(){window.closeActiveModal?window.closeActiveModal():window.appState&&(window.appState.activeModal=null,window.renderApp&&window.renderApp())};window.selectEditProfileAvatar=function(o){const e=document.getElementById("input-edit-profile-avatar-url");e&&(e.value=o);const t=document.getElementById("edit-profile-avatar-preview-box");t&&(t.innerHTML=`<img id="edit-profile-avatar-img" src="${o}" style="width: 100%; height: 100%; object-fit: cover;" />`)};window.promptEditProfileAvatarUrl=function(){const o=prompt("لطفاً لینک آدرس مستقیم تصویر پروفایل را وارد نمایید (http/https):");o&&o.trim().startsWith("http")&&window.selectEditProfileAvatar(o.trim())};window.handleEditProfileImageUpload=function(o){var i;const e=(i=o.target.files)==null?void 0:i[0];if(!e)return;if(e.size>10*1024*1024){window.showToast?window.showToast("حجم عکس انتخابی نباید بیشتر از ۱۰ مگابایت باشد.","warning"):alert("حجم عکس انتخابی نباید بیشتر از ۱۰ مگابایت باشد.");return}const t=document.getElementById("edit-profile-avatar-preview-box");t&&(t.innerHTML='<span class="spin-sync" style="font-size: 1.8rem;">⏳</span>');const n=new FileReader;n.onload=function(a){const r=a.target.result;if(!r)return;const s=new Image;s.onload=function(){let l=s.width,c=s.height;l>c?l>128&&(c=Math.round(c*128/l),l=128):c>128&&(l=Math.round(l*128/c),c=128);const g=document.createElement("canvas");g.width=l,g.height=c,g.getContext("2d").drawImage(s,0,0,l,c);let f;try{f=g.toDataURL("image/webp",.7),(!f||!f.startsWith("data:image/webp"))&&(f=g.toDataURL("image/jpeg",.7))}catch{f=g.toDataURL("image/jpeg",.7)}window.selectEditProfileAvatar(f)},s.onerror=function(){window.showToast?window.showToast("خطا در پردازش تصویر، لطفاً دوباره تلاش کنید.","error"):alert("خطا در پردازش تصویر، لطفاً دوباره تلاش کنید."),t&&(t.innerHTML='<span style="font-size: 2.2rem;">👤</span>')},s.src=r},n.readAsDataURL(e)};window.handleSaveProfileSubmit=async function(){const o=document.getElementById("input-edit-profile-name"),e=document.getElementById("input-edit-profile-target"),t=document.getElementById("input-edit-profile-avatar-url"),n=o?o.value.trim():"",i=e?e.value.trim():"",a=t?t.value.trim():"";if(!n||_e(n)){window.showToast?window.showToast("لطفاً نام و نام خانوادگی خود را وارد کنید.","warning"):alert("لطفاً نام و نام خانوادگی خود را وارد کنید."),o&&o.focus();return}const r=document.getElementById("btn-save-edit-profile");r&&(r.disabled=!0,r.innerHTML='<svg class="spin-sync" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> <span>در حال ذخیره‌سازی...</span>');try{try{localStorage.setItem(ee.NICKNAME,n),localStorage.setItem(ee.TARGET,i),localStorage.setItem("planex_user_nickname",n),localStorage.setItem("planex_nickname",n),localStorage.setItem("planex_leaderboard_nickname",n),a&&localStorage.setItem("planex_user_avatar",a)}catch(c){console.warn("LEADERBOARD_STORAGE_KEYS quota error:",c)}if(p&&typeof p.setUserProfile=="function"){const c=p.getUserProfile()||{};p.setUserProfile({...c,name:n,targetField:i,major:i,avatar:a,avatar_url:a,photo:a,photoUrl:a})}try{const c=localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account");let g=c?JSON.parse(c):{};g.full_name=n,g.name=n,g.avatar_url=a,g.photo_url=a,localStorage.setItem("planex_auth_user",JSON.stringify(g)),localStorage.setItem("planex_user_account",JSON.stringify(g))}catch(c){console.warn("auth user account quota error:",c)}_&&typeof _.saveUserProfile=="function"&&_.saveUserProfile(n,i,a);const s=window.personalSyncService;let d=Promise.resolve();s&&typeof s.pushToCloud=="function"&&(d=s.pushToCloud(null,n,a));let l=Promise.resolve();_&&typeof _.syncUserScore=="function"&&(l=_.syncUserScore(!0)),await Promise.allSettled([d,l]),window.closeActiveModal?window.closeActiveModal():window.appState&&(window.appState.activeModal=null),window.showToast&&window.showToast(`مشخصات و آواتار شما با موفقیت به «${n}» تغییر یافت! ✅`,"success",3500),typeof window<"u"&&typeof window.dispatchEvent=="function"&&window.dispatchEvent(new CustomEvent("profileUpdated")),window.renderApp&&window.renderApp()}catch(s){console.error("Save profile failed:",s),window.showToast?window.showToast("خطا در ذخیره مشخصات: "+s.message,"error"):alert("خطا در ذخیره مشخصات: "+s.message)}finally{r&&(r.disabled=!1,r.innerHTML="💾 ذخیره تغییرات مشخصات")}};const Bo=o=>String(o??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");window.leaderboardFilterQuery=window.leaderboardFilterQuery||"";window.isLeaderboardSyncing=!1;window.isLeaderboardRefreshing=!1;window.lastLeaderboardResult=window.lastLeaderboardResult||null;window.isFetchingLeaderboardBg=!1;window.lastPublicRoomsList=window.lastPublicRoomsList||null;window.isFetchingPublicRoomsBg=!1;window.lastEarlyBirdList=window.lastEarlyBirdList||null;window.isFetchingEarlyBirds=!1;function $e(o,e=!0,t=3500){const n=document.createElement("div");n.style.cssText=`position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%); background: ${e?"linear-gradient(135deg, #10b981 0%, #059669 100%)":"linear-gradient(135deg, #ef4444 0%, #dc2626 100%)"}; color: white; padding: 14px 26px; border-radius: 16px; font-weight: 900; font-size: 0.92rem; z-index: 99999; box-shadow: 0 10px 30px rgba(0,0,0,0.5); animation: fadeIn 0.3s; max-width: 92vw; text-align: center; direction: rtl; border: 1.5px solid rgba(255,255,255,0.3);`,n.innerHTML=o,document.body.appendChild(n),setTimeout(()=>{n.style.opacity="0",n.style.transition="opacity 0.4s",setTimeout(()=>n.remove(),400)},t)}window.planexNavigateBackToGroups=function(o){o&&typeof o.preventDefault=="function"&&o.preventDefault(),o&&typeof o.stopPropagation=="function"&&o.stopPropagation(),console.log("Back to groups clicked"),window.leaderboardState&&(window.leaderboardState.currentGroupId=null);try{localStorage.removeItem("planex_active_group_id"),localStorage.removeItem("planex_current_group_view"),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data")}catch(e){console.warn("[planexNavigateBackToGroups] Storage purge error:",e)}window._leaderboardMemoryCache={key:null,data:null},window.leaderboardService&&typeof window.leaderboardService.setActiveGroupCode=="function"?window.leaderboardService.setActiveGroupCode(null):typeof _<"u"&&_&&typeof _.setActiveGroupCode=="function"&&_.setActiveGroupCode(null),typeof p<"u"&&p&&typeof p.setActiveGroupCode=="function"&&p.setActiveGroupCode(null),window.lastLeaderboardResult=null,typeof renderGroupsHub=="function"?renderGroupsHub():typeof at=="function"?at():typeof yt=="function"&&yt(),typeof window.renderApp=="function"&&window.renderApp()};window.handleBackToGroupsList=window.handleBackToGroupList=window.planexNavigateBackToGroups;function yt(){return _&&typeof _.setActiveGroupCode=="function"&&_.setActiveGroupCode(null),localStorage.removeItem("planex_current_group_view"),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data"),window.lastLeaderboardResult=null,mt()}window.renderGroupsHub=window.initLeaderboardView=yt;const at=yt;window.handleSwitchGroup=o=>{if(!o||o==="GLOBAL"){window.handleBackToGroupList();return}_&&typeof _.setActiveGroupCode=="function"&&_.setActiveGroupCode(o),window.lastLeaderboardResult=null,$e(`🔄 ورود به جدول گروه «${o}»`,!0,1800),window.renderApp&&window.renderApp()};window.handleCreateGroupSubmit=async()=>{var i,a,r,s,d;const o=document.getElementById("create-room-name")||document.getElementById("input-create-group-name"),e=o?o.value.trim():"";if(!e){alert("لطفاً نام گروه رقابتی خود را وارد کنید (مثلاً: گروه پره‌اینترنی اسفند)."),o&&o.focus();return}const t=document.getElementById("btn-submit-create-room")||document.getElementById("btn-create-group-submit"),n=t?t.innerHTML:"";t&&(t.disabled=!0,t.innerHTML="⏳ در حال ایجاد گروه...");try{const l=((i=document.querySelector('input[name="create-room-type"]:checked'))==null?void 0:i.value)==="private",c=((a=document.getElementById("create-room-category"))==null?void 0:a.value)||"general",g=parseInt((r=document.getElementById("create-room-capacity"))==null?void 0:r.value)||600,y=((d=(s=document.getElementById("create-room-announcement"))==null?void 0:s.value)==null?void 0:d.trim())||"",f=await _.createGroup(e,l,{category:c,capacity:g,announcement:y});_&&typeof _.setActiveGroupCode=="function"&&_.setActiveGroupCode(f.groupCode),typeof p<"u"&&p&&typeof p.setActiveGroupCode=="function"&&p.setActiveGroupCode(f.groupCode);try{localStorage.setItem("planex_active_group_code",f.groupCode),localStorage.setItem("planex_current_group_view",f.groupCode)}catch(w){console.warn("Storage save error in handleCreateGroupSubmit:",w)}typeof window.closeActiveModal=="function"?window.closeActiveModal():typeof window.closeCreateGroupModal=="function"?window.closeCreateGroupModal():window.appState&&(window.appState.activeModal=null),window.lastLeaderboardResult=null,typeof window.renderApp=="function"&&window.renderApp(),$e(`🎉 گروه «${f.groupName}» با موفقیت ایجاد شد! کد دعوت: ${f.groupCode}`,!0,4e3)}catch(l){console.error("Create group failed:",l),alert("خطا در ایجاد گروه: "+l.message)}finally{t&&(t.disabled=!1,t.innerHTML=n||"🚀 ایجاد اتاق و دریافت کد دعوت")}};window.handleModalJoinRoomSubmit=async()=>{const o=document.getElementById("input-modal-join-code")||document.getElementById("input-join-group-code"),e=o?o.value.trim().toUpperCase():"";if(!e){alert("لطفاً کد ۶ رقمی گروه را وارد کنید (مثال: PLX-4829)."),o&&o.focus();return}await window.handleJoinGroupSubmit(e)};window.handleJoinGroupSubmit=async(o=null)=>{let e=o;if(!e){const n=document.getElementById("input-join-group-code")||document.getElementById("input-modal-join-code");e=n?n.value.trim().toUpperCase():""}if(!e){alert("لطفاً کد ۶ رقمی گروه را وارد کنید (مثال: PLX-4829).");return}const t=p&&typeof p.getProfile=="function"?p.getProfile():{};if((!t.name||!t.target||!t.major)&&window.appState){window.appState.pendingJoinRoom={id:e,name:`گروه ${e}`},window.appState.activeModal="joinRoomOnboarding",window.renderApp&&window.renderApp();return}try{const n=await _.joinPrivateGroup(e);if(window.lastLeaderboardResult=null,n.requiresVerification){$e("⚠️ برای ورود به گروه، لطفاً ابتدا وارد حساب کاربری خود شوید.",!1,4500),window.openLoginModal&&window.openLoginModal();return}n.success?($e(n.message||"با موفقیت به گروه پیوستید! 🎉",!0,4e3),_&&typeof _.setActiveGroupCode=="function"&&_.setActiveGroupCode(e),typeof window.closeActiveModal=="function"?window.closeActiveModal():typeof window.closeCreateGroupModal=="function"?window.closeCreateGroupModal():window.appState&&(window.appState.activeModal=null)):$e(n.message||"خطا در ورود به گروه",!1,3500),window.renderApp&&window.renderApp()}catch(n){console.error("Join group failed:",n),alert("خطا در ورود به گروه: "+n.message)}};window.handleToggleGroupPrivacyAction=async(o,e)=>{try{const t=await _.toggleGroupPrivacy(o,e);t&&t.success?$e(t.message||`نوع گروه به «${e?"خصوصی":"عمومی"}» تغییر یافت.`):$e(t.message||"خطا در تغییر نوع گروه",!1),window.lastLeaderboardResult=null,window.renderApp&&window.renderApp()}catch(t){alert("خطا در تغییر نوع گروه: "+t.message)}};window.handleRefreshPendingRequests=async o=>{try{window.isFetchingPendingRequests=!0;const e=await _.fetchPendingRequests(o);window.groupPendingRequests=Array.isArray(e)?e:[],window.isFetchingPendingRequests=!1,$e(`🔄 لیست درخواست‌های عضویت به‌روزرسانی شد (${window.groupPendingRequests.length} مورد)`,!0,2e3),window.renderApp&&window.renderApp()}catch(e){window.isFetchingPendingRequests=!1,console.error("Refresh pending requests error:",e)}};window.handleLeaveGroupAction=async(o=null)=>{const e=_&&typeof _.getUserGroups=="function"?_.getUserGroups():[],t=String(o||(_&&typeof _.getActiveGroupCode=="function"?_.getActiveGroupCode():"")).trim().toUpperCase(),n=e.find(a=>(a.code||a.groupCode)===t)||(_&&typeof _.getActiveGroup=="function"?_.getActiveGroup():null),i=n?n.name||n.groupName:t||"این گروه";if(confirm(`آیا از خروج/انصراف از «${i}» اطمینان دارید؟`))try{["planex_user_groups","planex_my_rooms","my_rooms","planex_joined_groups","user_rooms"].forEach(a=>{try{const r=localStorage.getItem(a);if(r){const s=JSON.parse(r);if(Array.isArray(s)){const d=s.filter(l=>String(l.code||l.room_code||l.groupCode||l.id||"").trim().toUpperCase()!==t);localStorage.setItem(a,JSON.stringify(d))}}}catch{}}),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data"),localStorage.removeItem(`planex_group_cache_${t}`),localStorage.removeItem(`planex_group_roster_${t}`),_&&typeof _.leaveUserGroup=="function"&&await _.leaveUserGroup(t),_&&typeof _.setActiveGroupCode=="function"&&_.setActiveGroupCode(null),window.lastLeaderboardResult=null,$e(`🚪 با موفقیت از گروه «${i}» خارج شدید.`),_&&typeof _.fetchMyRooms=="function"&&await _.fetchMyRooms(!0).catch(()=>{}),window.handleBackToGroupList()}catch(a){console.error("Leave group failed:",a),alert("خطا در خروج از گروه: "+a.message)}};window.handleDeleteGroupAction=async(o=null)=>{const e=_&&typeof _.getUserGroups=="function"?_.getUserGroups():[],t=String(o||(_&&typeof _.getActiveGroupCode=="function"?_.getActiveGroupCode():"")).trim().toUpperCase(),n=e.find(l=>(l.code||l.groupCode)===t)||(_&&typeof _.getActiveGroup=="function"?_.getActiveGroup():null),i=n?n.name||n.groupName:t||"این گروه";if(!confirm(`🚨 هشدار مدیر:

آیا از حذف کامل گروه «${i}» اطمینان دارید؟

با تایید شما، تمام اطلاعات گروه، اعضا و جدول آن پاک شده و برای همه منحل می‌شود.`))return;const a=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}"),r=_&&typeof _.getUserProfile=="function"?_.getUserProfile():{},s=a.id||a.telegram_id||r.userId||"",d=a.phone||a.phone_number||r.phone||"";try{["planex_user_groups","planex_my_rooms","my_rooms","planex_joined_groups","user_rooms"].forEach(l=>{try{const c=localStorage.getItem(l);if(c){const g=JSON.parse(c);if(Array.isArray(g)){const y=g.filter(f=>String(f.code||f.room_code||f.groupCode||f.id||"").trim().toUpperCase()!==t);localStorage.setItem(l,JSON.stringify(y))}}}catch{}}),localStorage.removeItem("planex_active_group_code"),localStorage.removeItem("active_room"),localStorage.removeItem("planex_active_room"),localStorage.removeItem("planex_user_group_data"),localStorage.removeItem(`planex_group_cache_${t}`),localStorage.removeItem(`planex_group_roster_${t}`),fetch(`${le}/api/rooms/delete.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({room_code:t||(n==null?void 0:n.code)||(n==null?void 0:n.groupCode),user_id:s,phone:d,creator_id:s})}).catch(()=>{}),_&&typeof _.deleteGroup=="function"&&await _.deleteGroup(t),_&&typeof _.setActiveGroupCode=="function"&&_.setActiveGroupCode(null),window.lastLeaderboardResult=null,$e(`🗑️ گروه «${i}» با موفقیت به طور کامل حذف شد.`),_&&typeof _.fetchMyRooms=="function"&&await _.fetchMyRooms(!0).catch(()=>{}),window.handleBackToGroupList()}catch(l){console.error("Delete group failed:",l),alert("خطا در حذف کامل گروه: "+l.message)}};window.handleApproveRequestAction=async(o,e)=>{try{const t=await _.approveMember(o,e);$e(t.message||"✅ کاربر با موفقیت به گروه اضافه شد",!0),window.lastLeaderboardResult=null,window.isFetchingPendingRequests=!1;const n=await _.fetchPendingRequests(o);window.groupPendingRequests=n,window.renderApp&&window.renderApp()}catch(t){console.error("Error approving member:",t),$e("خطا در تایید ورود: "+t.message,!1)}};window.handleRejectRequestAction=async(o,e)=>{try{const t=await _.rejectMember(o,e);$e(t.message||"❌ درخواست عضویت رد شد",!1),window.lastLeaderboardResult=null,window.isFetchingPendingRequests=!1;const n=await _.fetchPendingRequests(o);window.groupPendingRequests=n,window.renderApp&&window.renderApp()}catch(t){console.error("Error rejecting member:",t),$e("خطا در رد درخواست: "+t.message,!1)}};window.handleCopyGroupCode=async o=>{if(o)try{navigator.clipboard&&navigator.clipboard.writeText?await navigator.clipboard.writeText(o):prompt("کد گروه را کپی کنید:",o),$e(`📋 کد گروه (${o}) در حافظه کپی شد!`)}catch{prompt("کد گروه را کپی کنید:",o)}};window.handleShareGroupInvite=async(o,e)=>{const t=e||"رقابت مطالعه",n=`${window.location.origin}${window.location.pathname}?group=${encodeURIComponent(o)}`,i=`🔥 دعوت به گروه رقابت مطالعه «${t}» در PlanEx

🔑 کد ورود به گروه: ${o}
🔗 لینک ورود مستقیم:
${n}`;if(navigator.share)try{await navigator.share({title:`گروه مطالعه «${t}»`,text:i,url:n});return}catch{}try{navigator.clipboard&&navigator.clipboard.writeText?(await navigator.clipboard.writeText(i),$e(`🔗 متن و لینک دعوت گروه «${t}» کپی شد!`)):prompt("متن دعوت را کپی کنید:",i)}catch{prompt("متن دعوت را کپی کنید:",i)}};window.handleLiveLeaderboardRefresh=async()=>{if(!window.isLeaderboardRefreshing){window.isLeaderboardRefreshing=!0,window.renderApp&&window.renderApp();try{const o=await _.fetchLeaderboard(null,!0);window.lastLeaderboardResult=o,$e("🔄 جدول رتبه‌بندی گروه با موفقیت به‌روزرسانی شد.",!0,2e3)}catch(o){console.error("Live refresh failed:",o)}finally{window.isLeaderboardRefreshing=!1,window.renderApp&&window.renderApp()}}};window.handleManualLeaderboardSync=async()=>{if(!window.isLeaderboardSyncing){window.isLeaderboardSyncing=!0,window.renderApp&&window.renderApp();try{const o=await _.syncUserScore(!0),e=await _.fetchLeaderboard(null,!0);window.lastLeaderboardResult=e,o&&o.success&&o.serverConfirmed?$e(`✅ کارنامه شما در گروه ثبت شد${o.rank?` — رتبه ${o.rank}`:""}`,!0,3500):$e("⚠️ اطلاعات به صورت محلی در گروه ذخیره شد.",!1,4500)}catch(o){console.error("Manual sync failed:",o),$e("❌ خطا در برقراری ارتباط با سرور.",!1,3500)}finally{window.isLeaderboardSyncing=!1,window.renderApp&&window.renderApp()}}};function Lo(){try{const o=document.getElementById("input-leaderboard-search");o&&(o.oninput=e=>{try{window.leaderboardFilterQuery=e.target.value;const t=(e.target.value||"").toLowerCase().trim();document.querySelectorAll(".leaderboard-row").forEach(i=>{const a=(i.dataset.search||"").toLowerCase();!t||a.includes(t)?i.style.display="":i.style.display="none"})}catch(t){console.error("Error in leaderboard search filter:",t)}}),window._leaderboardEventDelegationBound||(window._leaderboardEventDelegationBound=!0,document.addEventListener("click",e=>{if(e.target.closest('#btn-back-to-groups, .btn-back-groups, [data-action="back-to-groups"]')){e.preventDefault(),e.stopPropagation(),typeof window.planexNavigateBackToGroups=="function"&&window.planexNavigateBackToGroups(e);return}const n=e.target.closest(".btn-approve-request");if(n){e.preventDefault();const a=n.getAttribute("data-group-id")||n.dataset.groupId,r=n.getAttribute("data-user-id")||n.dataset.userId;a&&r&&typeof window.handleApproveRequestAction=="function"&&window.handleApproveRequestAction(a,r);return}const i=e.target.closest(".btn-reject-request");if(i){e.preventDefault();const a=i.getAttribute("data-group-id")||i.dataset.groupId,r=i.getAttribute("data-user-id")||i.dataset.userId;a&&r&&typeof window.handleRejectRequestAction=="function"&&window.handleRejectRequestAction(a,r);return}}))}catch(o){console.error("Error binding leaderboard events:",o)}}function Jt(o,e){if(!o)return!1;if(o.isOwner||o.is_owner||o.isCreator||o.is_creator)return!0;let t=null;try{t=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"{}")}catch{}const n=d=>{if(!d)return"";let l=String(d).replace(/[^0-9]/g,"");return l.startsWith("98")&&l.length>=12?l="0"+l.slice(2):l.length===10&&l.startsWith("9")&&(l="0"+l),l},i=[n(t==null?void 0:t.phone),n(t==null?void 0:t.phone_number),n(e==null?void 0:e.phone),n(localStorage.getItem("planex_user_phone"))].filter(Boolean),a=[String((t==null?void 0:t.id)||""),String((t==null?void 0:t.telegram_id)||""),String((e==null?void 0:e.userId)||""),String(localStorage.getItem("planex_leaderboard_user_id")||"")].filter(Boolean),r=[n(o.creator_phone),n(o.admin_phone),n(o.owner_phone)].filter(Boolean),s=[String(o.creator_id||""),String(o.admin_id||""),String(o.owner_id||""),String(o.userId||"")].filter(Boolean);if(i.some(d=>r.includes(d))||a.some(d=>s.includes(d)))return!0;if(window.lastLeaderboardResult&&Array.isArray(window.lastLeaderboardResult.roster)&&window.lastLeaderboardResult.roster.length>0){const d=window.lastLeaderboardResult.roster[0];if(d){const l=String(d.userId||d.user_id||""),c=n(d.phone||d.user_phone);if(l&&a.includes(l)||c&&i.includes(c))return!0}}return!1}function lt(o,e=36){const t=!!(o!=null&&o.isUser||o!=null&&o.isCurrentUser||o!=null&&o.is_user),n=(o==null?void 0:o.avatar_url)||(o==null?void 0:o.avatarUrl)||(o==null?void 0:o.avatar)||(o==null?void 0:o.photo_url)||t&&localStorage.getItem("planex_user_avatar")||""||"",i=String((o==null?void 0:o.nickname)||(o==null?void 0:o.name)||"کاربر").trim(),a=(i.charAt(0)||"👤").toUpperCase(),r=String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),s=["linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)","linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)","linear-gradient(135deg, #10b981 0%, #047857 100%)","linear-gradient(135deg, #f59e0b 0%, #d97706 100%)","linear-gradient(135deg, #ec4899 0%, #be185d 100%)","linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)","linear-gradient(135deg, #06b6d4 0%, #0e7490 100%)"];let d=0;for(let c=0;c<i.length;c++)d+=i.charCodeAt(c);const l=s[d%s.length];return n&&(n.startsWith("http")||n.startsWith("data:image"))?`
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
  `}function mt(o=null){var e,t;try{let n=null;try{n=JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{}let i=!0;if(n&&(n.phone||n.phone_number||n.id||n.telegram_id)&&(i=!1),i)return`
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
      `;const a=_&&typeof _.getUserProfile=="function"?_.getUserProfile():{nickname:"داوطلب پرتلاش",target:"کنکور سراسری ۱۴۰۶",userId:"local_user"},r=_&&typeof _.getTodayStats=="function"?_.getTodayStats():{studyMinutes:0,studyHours:0,testCount:0,subjects:[],gregorianDate:new Date().toISOString().split("T")[0],jalaliDateStr:""},s=_&&typeof _.getUserGroups=="function"?_.getUserGroups():[],d=_&&typeof _.getActiveGroupCode=="function"?_.getActiveGroupCode():null,l=h=>String(h??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),c=h=>String(h).replace(/[0-9]/g,N=>"۰۱۲۳۴۵۶۷۸۹"[N]);window.lastPublicRoomsFetchTime=window.lastPublicRoomsFetchTime||0,window.lastEarlyBirdFetchTime=window.lastEarlyBirdFetchTime||0,window.lastLeaderboardFetchTime=window.lastLeaderboardFetchTime||0,window.lastPendingRequestsFetchTime=window.lastPendingRequestsFetchTime||0,window.lastUserGroupsFetchTime=window.lastUserGroupsFetchTime||0;const g=5*60*1e3,y=Date.now();(s.length===0||y-window.lastUserGroupsFetchTime>=2*60*1e3)&&!window.isFetchingUserGroupsBg&&(a.phone||a.userId)&&_&&typeof _.fetchUserGroups=="function"&&(window.lastUserGroupsFetchTime=y,window.isFetchingUserGroupsBg=!0,_.fetchUserGroups(!1).then(h=>{var N;window.isFetchingUserGroupsBg=!1,Array.isArray(h)&&h.length>0&&s.length===0&&!((N=window.appState)!=null&&N.activeModal)&&window.renderApp&&window.renderApp()}).catch(()=>{window.isFetchingUserGroupsBg=!1})),!d&&(y-window.lastPublicRoomsFetchTime>=g||!window.lastPublicRoomsList)&&!window.isFetchingPublicRoomsBg&&_&&typeof _.fetchPublicRooms=="function"&&(window.lastPublicRoomsFetchTime=y,window.isFetchingPublicRoomsBg=!0,_.fetchPublicRooms().then(h=>{var N;window.lastPublicRoomsList=Array.isArray(h)?h:[],window.isFetchingPublicRoomsBg=!1,!((N=window.appState)!=null&&N.activeModal)&&!_.getActiveGroupCode()&&window.renderApp&&window.renderApp()}).catch(()=>{window.isFetchingPublicRoomsBg=!1})),(y-window.lastEarlyBirdFetchTime>=g||!window.lastEarlyBirdList)&&!window.isFetchingEarlyBirds&&_&&typeof _.fetchEarlyBirds=="function"&&(window.lastEarlyBirdFetchTime=y,window.isFetchingEarlyBirds=!0,_.fetchEarlyBirds().then(h=>{var N;window.isFetchingEarlyBirds=!1,h&&Array.isArray(h.list)&&(window.lastEarlyBirdList=h.list,!((N=window.appState)!=null&&N.activeModal)&&window.renderApp&&window.renderApp())}).catch(()=>{window.isFetchingEarlyBirds=!1}));const f=(window.lastPublicRoomsList||[]).filter(h=>{const N=h.code||h.groupCode;return N&&!s.some(R=>(R.code||R.groupCode)===N)}),w=window.lastEarlyBirdList||[],u=(h=null)=>{let N=w;if(h&&Array.isArray(h)&&h.length>0){const R=h.map(W=>W.userId||W.user_id);N=w.filter(W=>R.includes(W.userId||W.user_id))}return`
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

          ${N.length===0?`
            <div style="background: rgba(255, 255, 255, 0.02); border: 1px dashed rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 16px; text-align: center; color: #8e8e9c; font-size: 0.8rem;">
              ☀️ هنوز سحرخیزی برای امروز ثبت نشده است؛ اولین نفر باشید!
            </div>
          `:`
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 10px;">
              ${N.map(R=>`
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
                ${s.map(h=>{const N=h.code||h.groupCode,R=h.name||h.groupName||`گروه ${N}`,W=Jt(h,a),de=W?"👑 مدیر":"👤 عضو",G=W?"rgba(245, 158, 11, 0.18)":"rgba(16, 185, 129, 0.15)",ue=W?"#f59e0b":"#10b981",we=W?"rgba(245, 158, 11, 0.4)":"rgba(16, 185, 129, 0.3)",ge=_&&typeof _.getGroupRoster=="function"?_.getGroupRoster(N):[],Ae=ge&&ge.length>0?ge.length:h.membersCount||1,he=!W&&(h.status==="pending"||h.isPending===!0);return`
                    <div onclick="window.handleSwitchGroup('${N}');" 
                         class="glass-panel" 
                         style="padding: 16px 18px; background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: all 0.2s ease; gap: 12px;">
                      
                      <div style="display: flex; align-items: center; gap: 12px;">
                        <div style="width: 44px; height: 44px; border-radius: 14px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.1); display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
                          🏆
                        </div>
                        <div>
                          <div style="display: flex; align-items: center; gap: 8px;">
                            <strong style="font-size: 0.95rem; font-weight: 800; color: #f8fafc;">${l(R)}</strong>
                            <span style="font-size: 0.68rem; background: ${G}; color: ${ue}; border: 1px solid ${we}; padding: 2px 7px; border-radius: 6px; font-weight: 800;">
                              ${de}
                            </span>
                          </div>
                          <div style="display: flex; align-items: center; gap: 10px; margin-top: 4px; font-size: 0.74rem; color: #8e8e9c;">
                            <span style="font-family: 'Outfit', monospace; font-weight: 700; color: #cbd5e1;">کد: ${l(N)}</span>
                            <span>•</span>
                            <span>👥 ${c(Ae)} عضو</span>
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
          ${f.length>0?`
            <div>
              <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 14px;">
                <div style="width: 8px; height: 18px; background: #3b82f6; border-radius: 4px;"></div>
                <h3 style="margin: 0; font-size: 1.05rem; font-weight: 800; color: #f4f4f6;">🌐 سایر گروه‌های عمومی فعال</h3>
              </div>

              <div style="display: flex; flex-direction: column; gap: 10px;">
                ${f.map(h=>`
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
        ${((e=window.appState)==null?void 0:e.activeModal)==="editProfile"?Lt():""}
      `;const m=String(d).trim().toUpperCase(),b=s.find(h=>(h.code||h.groupCode)===m)||(_&&typeof _.getActiveGroup=="function"?_.getActiveGroup():null)||{code:m,name:`گروه ${m}`},S=b.name||b.groupName||`گروه ${m}`,I=Jt(b,a),x=!!(!I&&b&&b.status==="pending"),k=!!(b&&(b.is_private===1||b.type==="private"||b.isPrivate));(!window.lastLeaderboardResult||window.lastLeaderboardResult.groupCode!==m)&&_&&typeof _.getCachedLeaderboard=="function"&&(window.lastLeaderboardResult=_.getCachedLeaderboard(r.gregorianDate,m)),(y-window.lastLeaderboardFetchTime>=g||!window.lastLeaderboardResult||window.lastLeaderboardResult.groupCode!==m)&&!window.isFetchingLeaderboardBg&&_&&typeof _.fetchLeaderboard=="function"&&(window.lastLeaderboardFetchTime=y,window.isFetchingLeaderboardBg=!0,_.fetchLeaderboard(r.gregorianDate,!0,m).then(h=>{var N;h&&(window.lastLeaderboardResult=h),window.isFetchingLeaderboardBg=!1,(N=window.appState)!=null&&N.activeModal||window.renderApp&&window.renderApp()}).catch(()=>{window.isFetchingLeaderboardBg=!1})),I&&(y-window.lastPendingRequestsFetchTime>=g||!window.groupPendingRequests)&&!window.isFetchingPendingRequests&&_&&typeof _.fetchPendingRequests=="function"&&(window.lastPendingRequestsFetchTime=y,window.isFetchingPendingRequests=!0,_.fetchPendingRequests(m).then(h=>{var N;window.isFetchingPendingRequests=!1,Array.isArray(h)&&(window.groupPendingRequests=h,!((N=window.appState)!=null&&N.activeModal)&&window.renderApp&&window.renderApp())}).catch(()=>{window.isFetchingPendingRequests=!1})),window.leaderboardTimeFilter="today";const A="today",P=_&&typeof _.getWeeklyStats=="function"?_.getWeeklyStats():null,M=new Map,T=_&&typeof _.getGroupRoster=="function"?_.getGroupRoster(m):[];Array.isArray(T)&&T.forEach(h=>{if(h&&(h.userId||h.id)){const N=String(h.userId||h.id);M.set(N,{...h,userId:N})}}),Array.isArray(b==null?void 0:b.members)&&b.members.forEach(h=>{if(h&&(h.userId||h.id)){const N=String(h.userId||h.id),R=M.get(N)||{};M.set(N,{...R,...h,userId:N})}});const O=window.lastLeaderboardResult&&(window.lastLeaderboardResult.leaderboard||window.lastLeaderboardResult.list)||[];if(Array.isArray(O)&&O.forEach(h=>{if(h&&(h.userId||h.id)){const N=String(h.userId||h.id),R=M.get(N)||{};M.set(N,{...R,...h,userId:N})}}),a&&a.userId){const h=String(a.userId),N=M.get(h)||{},R=a.avatar_url||a.avatar||a.photo_url||N.avatarUrl||"",W=a.nickname||a.name||N.nickname||"شما",de=a.target||N.target||"کنکور سراسری";M.set(h,{...N,userId:h,isUser:!0,isCurrentUser:!0,nickname:W,name:W,target:de,avatarUrl:R,avatar_url:R,avatar:R,photo_url:R,studyMinutes:Math.max(Number(N.studyMinutes||0),Number((r==null?void 0:r.studyMinutes)||0)),testCount:Math.max(Number(N.testCount||0),Number((r==null?void 0:r.testCount)||0)),weeklyStudyMinutes:Math.max(Number(N.weeklyStudyMinutes||0),Number((P==null?void 0:P.studyMinutes)||0),Number((r==null?void 0:r.studyMinutes)||0)),weeklyTestCount:Math.max(Number(N.weeklyTestCount||0),Number((P==null?void 0:P.testCount)||0),Number((r==null?void 0:r.testCount)||0)),isOwner:!!(I||N.isOwner)})}const C=Array.from(M.values());b&&(b.members=C);let z;_&&typeof _.aggregateAndRankMembers=="function"?z=_.aggregateAndRankMembers(C,"today"):z=C.map(h=>{const N=Number(h.studyMinutes||h.study_minutes||0),R=Number(h.testCount||h.test_count||0),W=N*60+R*10;return{...h,displayStudyMins:N,displayTestCount:R,score:W}}).sort((h,N)=>N.score!==h.score?N.score-h.score:N.displayStudyMins!==h.displayStudyMins?N.displayStudyMins-h.displayStudyMins:N.displayTestCount-h.displayTestCount).map((h,N)=>({...h,rank:N+1})),z=z.map(h=>{if(!!(h.isUser||h.isCurrentUser||h.userId===a.userId||a.phone&&h.phone===a.phone)){const R=a.avatar_url||a.avatar||a.photo_url||h.avatar_url||h.avatarUrl,W=a.nickname||a.name||h.nickname,de=a.target||h.target;return{...h,isUser:!0,isCurrentUser:!0,nickname:W,name:W,target:de,avatar_url:R,avatarUrl:R,avatar:R,photo_url:R}}return h});const B=!window.lastLeaderboardResult&&window.isFetchingLeaderboardBg,U=window.groupPendingRequests||[],F=z[0]||null,L=z[1]||null,J=z[2]||null,Y=(h=0,N=999,R=1)=>{const W=h/60;return N===1||W>=35?{name:"الماس",icon:"💎",color:"#38bdf8",bg:"rgba(56, 189, 248, 0.15)",border:"rgba(56, 189, 248, 0.35)"}:N<=3||W>=22?{name:"طلا",icon:"🥇",color:"#fbbf24",bg:"rgba(251, 191, 36, 0.15)",border:"rgba(251, 191, 36, 0.35)"}:N<=Math.max(4,Math.ceil(R*.5))||W>=10?{name:"نقره",icon:"🥈",color:"#cbd5e1",bg:"rgba(203, 213, 225, 0.15)",border:"rgba(203, 213, 225, 0.35)"}:{name:"برنز",icon:"🥉",color:"#cd7f32",bg:"rgba(205, 127, 50, 0.15)",border:"rgba(205, 127, 50, 0.35)"}},H=()=>{const h=new Date,R=6-(h.getDay()+1)%7,W=23-h.getHours(),de=59-h.getMinutes();return R>0?`${c(R)} روز و ${c(W)} ساعت`:`${c(W)} ساعت و ${c(de)} دقیقه`},Q=()=>{if(!z||z.length===0)return"";const h=z.findIndex(we=>we.isUser||we.isCurrentUser||we.userId===a.userId||a.phone&&we.phone===a.phone);if(h<0)return`
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
        `;const N=h+1,R=z[h];if(N===1){const we=z[1]||null,ge=we?Math.max(0,Math.round((R.displayStudyMins||0)-(we.displayStudyMins||0))):0;return`
          <div style="background: linear-gradient(135deg, rgba(245, 158, 11, 0.2) 0%, rgba(234, 179, 8, 0.12) 100%); border: 1.5px solid rgba(245, 158, 11, 0.45); border-radius: 18px; padding: 14px 18px; margin-bottom: 18px; direction: rtl; box-shadow: 0 0 20px rgba(245, 158, 11, 0.15);">
            <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
              <div style="display: flex; align-items: center; gap: 12px;">
                <div style="width: 44px; height: 44px; border-radius: 14px; background: rgba(245, 158, 11, 0.25); border: 1px solid rgba(245, 158, 11, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
                  👑
                </div>
                <div>
                  <strong style="font-size: 0.96rem; color: #fbbf24; font-weight: 900;">شما در صدر جدول رقابت هستید! 🌟</strong>
                  <div style="font-size: 0.75rem; color: #fde68a; margin-top: 3px;">
                    ${we?`پیشتازی با <strong style="color: #ffffff;">${be(ge)}</strong> فاصله نسبت به نفر دوم (${l(we.nickname||"رقیب")})`:"جایگاه اول را با تداوم مطالعه حفظ کنید."}
                  </div>
                </div>
              </div>
              <span style="background: rgba(245, 158, 11, 0.2); color: #fbbf24; border: 1px solid #f59e0b; padding: 6px 14px; border-radius: 12px; font-weight: 900; font-size: 0.78rem;">
                🏆 رتبه ۱ گروه
              </span>
            </div>
          </div>
        `}const W=z[h-1],de=N-1,G=W.nickname||W.name||"رقیب شما",ue=Math.max(1,Math.round((W.displayStudyMins||0)-(R.displayStudyMins||0)));return`
        <div style="background: linear-gradient(135deg, rgba(124, 58, 237, 0.22) 0%, rgba(236, 72, 153, 0.16) 100%); border: 1.5px solid rgba(168, 85, 247, 0.45); border-radius: 18px; padding: 14px 18px; margin-bottom: 18px; direction: rtl; animation: pulseGlow 3s infinite ease-in-out;">
          <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="width: 44px; height: 44px; border-radius: 14px; background: rgba(168, 85, 247, 0.25); border: 1px solid rgba(168, 85, 247, 0.4); display: flex; align-items: center; justify-content: center; font-size: 1.4rem;">
                ⚡
              </div>
              <div>
                <strong style="font-size: 0.96rem; color: #ffffff; font-weight: 900;">تنها ${c(ue)} دقیقه مطالعه تا گرفتن رتبه «${l(G)}»! 🔥</strong>
                <div style="font-size: 0.75rem; color: #e9d5ff; margin-top: 3px;">
                  فاصله شما با رتبه ${c(de)} جدول: <strong style="color: #f472b6; font-weight: 800;">${be(ue)}</strong> • با ثبت پارت جدید، سبقت بگیرید!
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
      `},D=z.filter(h=>h.isUser||h.isCurrentUser||h.userId===a.userId||a.phone&&h.phone===a.phone?_&&typeof _.isCurrentStudyingActive=="function"?_.isCurrentStudyingActive():!!(window.isUserStudyingNow&&window.isUserStudyingNow()):!!(_?_.isMemberStudying(h):h.isStudying&&h.lastHeartbeat&&Date.now()-h.lastHeartbeat<15*60*1e3)).length,Z=()=>`
        <div style="display: flex; align-items: center; justify-content: space-between; background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: 14px; padding: 10px 16px; margin-bottom: 16px; direction: rtl;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="width: 10px; height: 10px; border-radius: 50%; background: #10b981; display: inline-block; animation: livePulse 1.5s infinite ease-in-out;"></span>
            <strong style="font-size: 0.85rem; color: #34d399; font-weight: 800;">
              🟢 ${c(D)} نفر هم‌اکنون در حال مطالعه هستند
            </strong>
          </div>
          <span style="font-size: 0.72rem; color: #a1a1aa; font-weight: 600;">
            بروزرسانی زنده حضور اعضا
          </span>
        </div>
      `,X=()=>`
        <div style="background: #16171d; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 14px; padding: 12px 16px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 8px; direction: rtl;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 1.1rem;">⏱️</span>
            <span style="font-size: 0.82rem; color: #cbd5e1; font-weight: 700;">زمان باقی‌مانده تا پایان لیگ هفتگی:</span>
            <strong style="font-size: 0.85rem; color: #f59e0b; font-weight: 900; font-family: 'Outfit'; background: rgba(245, 158, 11, 0.15); padding: 3px 10px; border-radius: 8px; border: 1px solid rgba(245, 158, 11, 0.3);">
              ${H()}
            </strong>
          </div>

          <div style="display: flex; gap: 6px; align-items: center; flex-wrap: wrap;">
            <span style="font-size: 0.68rem; background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3); padding: 2px 7px; border-radius: 6px; font-weight: 800;">💎 الماس</span>
            <span style="font-size: 0.68rem; background: rgba(251, 191, 36, 0.15); color: #fbbf24; border: 1px solid rgba(251, 191, 36, 0.3); padding: 2px 7px; border-radius: 6px; font-weight: 800;">🥇 طلا</span>
            <span style="font-size: 0.68rem; background: rgba(203, 213, 225, 0.15); color: #cbd5e1; border: 1px solid rgba(203, 213, 225, 0.3); padding: 2px 7px; border-radius: 6px; font-weight: 800;">🥈 نقره</span>
            <span style="font-size: 0.68rem; background: rgba(205, 127, 50, 0.15); color: #cd7f32; border: 1px solid rgba(205, 127, 50, 0.3); padding: 2px 7px; border-radius: 6px; font-weight: 800;">🥉 برنز</span>
          </div>
        </div>
      `,xe=h=>!Array.isArray(h)||h.length===0?'<span style="font-size: 0.72rem; color: #94a3b8; font-style: italic; opacity: 0.8;">در انتظار مطالعه</span>':h.slice(0,4).map(N=>`
        <span style="font-size: 0.68rem; background: rgba(56, 189, 248, 0.15); color: #7dd3fc; border: 1px solid rgba(56, 189, 248, 0.35); padding: 1px 7px; border-radius: 8px; font-weight: bold; white-space: nowrap;">
          ${l(N)}
        </span>
      `).join(" "),ye=Math.max(1,Math.min(3,Math.ceil(z.length*.25))),ce=Math.max(ye+1,Math.floor(z.length*.75));return`
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
                  <span>${l(S)}</span>
                </h3>
                <span style="font-size: 0.72rem; color: #8e8e9c; font-family: 'Outfit', monospace; font-weight: 700;">کد گروه: ${l(m)}</span>
              </div>
            </div>

            <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
              <button type="button" onclick="window.handleCopyGroupCode('${m}')" style="padding: 7px 12px; font-size: 0.76rem; font-weight: 700; background: #1f2029; color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="کپی کد">
                <span>📋</span>
                <span>کد گروه</span>
              </button>

              <button type="button" onclick="window.handleShareGroupInvite('${m}', '${l(S)}')" style="padding: 7px 12px; font-size: 0.76rem; font-weight: 700; background: #1f2029; color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="دعوت دوستان">
                <span>🔗</span>
                <span>لینک دعوت</span>
              </button>

              <!-- Member Exit & Admin Delete Buttons (Both visible for Admin) -->
              <button type="button" onclick="window.handleLeaveGroupAction('${m}')" style="padding: 7px 12px; font-size: 0.74rem; font-weight: 800; background: rgba(239, 68, 68, 0.12); color: #f87171; border: 1px solid rgba(239, 68, 68, 0.25); border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="خروج از این گروه">
                <span>🚪</span>
                <span>خروج از گروه</span>
              </button>

              ${I?`
                <button type="button" onclick="window.handleDeleteGroupAction('${m}')" style="padding: 7px 12px; font-size: 0.74rem; font-weight: 800; background: rgba(239, 68, 68, 0.2); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.4); border-radius: 10px; cursor: pointer; display: inline-flex; align-items: center; gap: 4px;" title="حذف کامل این گروه">
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
              <span>تعداد اعضا: <strong style="color: #e4e4e7;">${c(z.length)} نفر</strong></span>
            </div>
          </div>
        </div>

        <!-- ⚡ 1. Micro-Rivalry Card -->
        ${Q()}

          <!-- 🟢 2. Live Presence Ticker -->
          ${Z()}

          <!-- 🏆 3. Weekly Countdown & League Tiers -->
          ${X()}

          <!-- 🌅 Early Birds Section for Group -->
          ${u(z)}

          <!-- 🏆 Leaderboard Time Filter: Today Only (Static Title) -->
          <div style="display: flex; justify-content: center; gap: 6px; margin-bottom: 20px; background: #1f2029; padding: 4px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.08); max-width: 260px; margin-left: auto; margin-right: auto;">
            <div style="flex: 1; padding: 8px 14px; border-radius: 12px; font-size: 0.82rem; font-weight: 800; text-align: center; border: 1px solid #7c3aed; background: #7c3aed; color: #ffffff; box-shadow: 0 2px 10px rgba(124, 58, 237, 0.35);">جدول رقابت امروز ☀️</div>
          </div>

          <!-- 🏆 3D-Style Podium (Center Gold 👑, Right Silver 🥈, Left Bronze 🥉) -->
          ${z.length>=1?`
            ${(()=>{const h=F&&(F.isUser||F.isCurrentUser||F.userId===a.userId||a.phone&&F.phone===a.phone),N=L&&(L.isUser||L.isCurrentUser||L.userId===a.userId||a.phone&&L.phone===a.phone),R=J&&(J.isUser||J.isCurrentUser||J.userId===a.userId||a.phone&&J.phone===a.phone);return`
              <div class="podium-container" style="display: flex; align-items: flex-end; justify-content: center; gap: 12px; margin: 24px 0 28px 0; padding: 0 10px; position: relative;">
                
                <!-- Rank 2 (Right, Silver Podium) -->
                <div style="flex: 1; max-width: 140px; display: flex; flex-direction: column; align-items: center; z-index: 2;">
                  <!-- Avatar & Badge -->
                  <div onclick="${N?"window.openEditProfileModal()":""}" style="position: relative; margin-bottom: 8px; text-align: center; display: inline-block; ${N?"cursor: pointer;":""}" title="${N?"ویرایش مشخصات شما":""}">
                    <div style="font-size: 1.5rem; margin-bottom: 2px;">🥈</div>
                    ${lt(L,52)}
                    <span style="position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%); background: #cbd5e1; color: #0f172a; font-size: 0.68rem; font-weight: 900; padding: 1px 8px; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.4);">۲</span>
                    ${N?'<span style="position: absolute; bottom: -2px; right: -2px; background: #7c3aed; color: white; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; border: 2px solid #16171d; box-shadow: 0 2px 6px rgba(0,0,0,0.5);">✏️</span>':""}
                  </div>

                  <strong onclick="${N?"window.openEditProfileModal()":""}" style="font-size: 0.82rem; color: ${N?"#c4b5fd":"#e4e4e7"}; text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; ${N?"cursor: pointer;":""}">${l((L==null?void 0:L.nickname)||(L==null?void 0:L.name)||"---")}</strong>
                  <span style="font-size: 0.72rem; color: #cbd5e1; font-weight: 900; margin-top: 2px;">${be((L==null?void 0:L.displayStudyMins)||0)}</span>
                  <span style="font-size: 0.66rem; color: #8e8e9c;">${c((L==null?void 0:L.displayTestCount)||0)} تست</span>

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
                  <span style="font-size: 0.78rem; color: #f59e0b; font-weight: 900; margin-top: 2px;">${be((F==null?void 0:F.displayStudyMins)||0)}</span>
                  <span style="font-size: 0.68rem; color: #fde68a;">${c((F==null?void 0:F.displayTestCount)||0)} تست</span>

                  <!-- 3D Gold Block -->
                  <div style="width: 100%; height: 125px; background: linear-gradient(180deg, rgba(245, 158, 11, 0.3) 0%, rgba(217, 119, 6, 0.12) 100%); border: 2px solid rgba(245, 158, 11, 0.6); border-top-left-radius: 16px; border-top-right-radius: 16px; margin-top: 10px; box-shadow: inset 0 2px 14px rgba(251, 191, 36, 0.25), 0 14px 30px rgba(245, 158, 11, 0.25); display: flex; align-items: center; justify-content: center; font-size: 2.8rem; font-weight: 900; color: rgba(251, 191, 36, 0.35);">1</div>
                </div>

                <!-- Rank 3 (Left, Bronze Podium) -->
                <div style="flex: 1; max-width: 140px; display: flex; flex-direction: column; align-items: center; z-index: 1;">
                  <!-- Avatar & Badge -->
                  <div onclick="${R?"window.openEditProfileModal()":""}" style="position: relative; margin-bottom: 8px; text-align: center; display: inline-block; ${R?"cursor: pointer;":""}" title="${R?"ویرایش مشخصات شما":""}">
                    <div style="font-size: 1.5rem; margin-bottom: 2px;">🥉</div>
                    ${lt(J,48)}
                    <span style="position: absolute; bottom: -6px; left: 50%; transform: translateX(-50%); background: #cd7f32; color: #ffffff; font-size: 0.68rem; font-weight: 900; padding: 1px 8px; border-radius: 10px; box-shadow: 0 2px 6px rgba(0,0,0,0.4);">۳</span>
                    ${R?'<span style="position: absolute; bottom: -2px; right: -2px; background: #7c3aed; color: white; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.6rem; border: 2px solid #16171d; box-shadow: 0 2px 6px rgba(0,0,0,0.5);">✏️</span>':""}
                  </div>

                  <strong onclick="${R?"window.openEditProfileModal()":""}" style="font-size: 0.82rem; color: ${R?"#c4b5fd":"#e4e4e7"}; text-align: center; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 100%; ${R?"cursor: pointer;":""}">${l((J==null?void 0:J.nickname)||(J==null?void 0:J.name)||"---")}</strong>
                  <span style="font-size: 0.72rem; color: #cd7f32; font-weight: 900; margin-top: 2px;">${be((J==null?void 0:J.displayStudyMins)||0)}</span>
                  <span style="font-size: 0.66rem; color: #8e8e9c;">${c((J==null?void 0:J.displayTestCount)||0)} تست</span>

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
                  ${z.length===0?`
                    <tr>
                      <td colspan="6" style="text-align: center; padding: 24px; color: #8e8e9c;">
                        ${B?"⏳ در حال دریافت جدول رتبه‌بندی اعضا...":"هنوز رکوردی در این گروه ثبت نشده است."}
                      </td>
                    </tr>
                  `:z.map((h,N)=>{const R=N+1,W=h.isUser||h.isCurrentUser||h.userId===a.userId||a.phone&&h.phone===a.phone,de=W?_&&typeof _.isCurrentStudyingActive=="function"?_.isCurrentStudyingActive():!!(window.isUserStudyingNow&&window.isUserStudyingNow()):!!(_?_.isMemberStudying(h):h.isStudying&&h.lastHeartbeat&&Date.now()-h.lastHeartbeat<15*60*1e3),G=W?de&&typeof window.getCurrentFocusSubjectTitle=="function"?window.getCurrentFocusSubjectTitle():"":h.studySubject||h.subject||h.currentSubject||(Array.isArray(h.subjects)&&h.subjects.length>0?h.subjects[0]:null),ue=Y(h.displayStudyMins||0,R,z.length),we=R===1?"🥇":R===2?"🥈":R===3?"🥉":`#${c(R)}`;let ge="";N===ye&&z.length>=4&&(ge=`
                        <tr style="background: linear-gradient(90deg, rgba(16, 185, 129, 0.18) 0%, rgba(16, 185, 129, 0.04) 100%); border-top: 1.5px solid #10b981; border-bottom: 1.5px solid #10b981;">
                          <td colspan="6" style="text-align: center; padding: 7px 12px; font-size: 0.74rem; font-weight: 900; color: #34d399; letter-spacing: 0.5px;">
                            🟢 ── محدوده صعود به لیگ بالاتر (Promotion Zone) ──
                          </td>
                        </tr>
                      `);let Ae="";return N===ce&&z.length>=6&&ce>ye&&(Ae=`
                        <tr style="background: linear-gradient(90deg, rgba(239, 68, 68, 0.18) 0%, rgba(239, 68, 68, 0.04) 100%); border-top: 1.5px solid #ef4444; border-bottom: 1.5px solid #ef4444;">
                          <td colspan="6" style="text-align: center; padding: 7px 12px; font-size: 0.74rem; font-weight: 900; color: #f87171; letter-spacing: 0.5px;">
                            🔴 ── محدوده خطر سقوط به لیگ پایین‌تر (Relegation Zone) ──
                          </td>
                        </tr>
                      `),`
                      ${ge}
                      ${Ae}
                      <tr class="leaderboard-row" data-search="${l(h.nickname)} ${l(h.target)}" onclick="${W?"window.openEditProfileModal()":""}" style="border-bottom: 1px solid rgba(255,255,255,0.04); background: ${W?"rgba(124, 58, 237, 0.12)":"transparent"}; ${W?"cursor: pointer;":""}">
                        
                        <td style="padding: 10px 12px; text-align: center; font-weight: 800; color: ${R<=3?"#facc15":"#a1a1aa"};">
                          ${we}
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
                                <strong style="color: ${W?"#c4b5fd":"#e4e4e7"}; font-weight: 800;">${l(h.nickname||"کاربر")}</strong>
                                ${W?'<span style="font-size: 0.64rem; background: #7c3aed; color: white; padding: 1px 6px; border-radius: 4px; display: inline-flex; align-items: center; gap: 2px;" title="کلیک جهت ویرایش مشخصات">شما ✏️</span>':""}
                                ${de?`
                                  <span style="font-size: 0.65rem; background: rgba(16, 185, 129, 0.2); color: #34d399; border: 1px solid #10b981; padding: 2px 8px; border-radius: 10px; font-weight: 900; display: inline-flex; align-items: center; gap: 4px; box-shadow: 0 0 10px rgba(16, 185, 129, 0.4); animation: livePulse 2s infinite ease-in-out;">
                                    🟢 در حال مطالعه ${G?`(${l(G)})`:""}
                                  </span>
                                `:""}
                              </div>
                              <span style="font-size: 0.7rem; color: #8e8e9c; display: block; margin-top: 2px;">${l(h.target||"")}</span>
                            </div>
                          </div>
                        </td>

                        <td style="padding: 10px 12px; font-weight: 800; color: #38bdf8;">
                          ${be(h.displayStudyMins||0)}
                        </td>

                        <td style="padding: 10px 12px; font-weight: 700; color: #cbd5e1;">
                          ${c(h.displayTestCount||0)}
                        </td>

                        <td style="padding: 10px 12px;">
                          ${xe(h.subjects)}
                        </td>

                      </tr>
                    `}).join("")}
                </tbody>
              </table>
            </div>

          </div>

      </div>
      ${((t=window.appState)==null?void 0:t.activeModal)==="editProfile"?Lt():""}
    `}catch(n){return console.error("Error rendering LeaderboardView:",n),`
      <div id="tab-leaderboard" class="main-container active" style="display: block; padding: 40px 20px; text-align: center; direction: rtl;">
        <h3 style="color: #ef4444;">خطا در بارگذاری تالار رقابت</h3>
        <p style="color: #a1a1aa; font-size: 0.85rem;">${Bo((n==null?void 0:n.message)||"خطای غیرمنتظره در بارگذاری داده‌ها")}</p>
        <button onclick="window.planexNavigateBackToGroups && window.planexNavigateBackToGroups(event)" style="margin-top: 15px; padding: 8px 16px; background: #7c3aed; color: white; border: none; border-radius: 10px; font-weight: 800; cursor: pointer;">
          ⬅️ برگشت به لیست گروه‌ها
        </button>
      </div>
    `}}const yn=mt,mn=at;typeof window<"u"&&(window.renderLeaderboardView=mt,window.renderLeaderboard=mt,window.bindLeaderboardEvents=Lo,window.initLeaderboardView=at,window.initLeaderboard=at);function bn(){return`
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
  `}function Jo(o={}){var N,R,W,de;const{stopwatchTime:e=0,isStopwatchRunning:t=!1,pomodoroTime:n=1500,isPomodoroRunning:i=!1,timerType:a=1,presetMins:r=25,sessionTests:s=0,pomodoroActiveUsers:d=0,activityMode:l="study",selectedCategoryCode:c=null,selectedNonStudyCode:g="non_sports",selectedSubject:y="",selectedStudyMethod:f="یادگیری",sessionNote:w="",isModalMode:u=!1,focusAccordions:m={activity:!1,timing:!1,testNote:!1,audio:!1}}=o,b=f||((N=window.appState)==null?void 0:N.selectedStudyMethod)||((R=window.fabActivityState)==null?void 0:R.selectedPhase)||"یادگیری",S=G=>String(G).replace(/[0-9]/g,ue=>"۰۱۲۳۴۵۶۷۸۹"[ue]),I=a===2,x=l==="non-study"&&!I,k=!I&&!x;let A="#10b981",P="#10b981",M="linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",T="💾 ثبت پارت مطالعه",O="⚡ در حال تمرکز",C="▶ لمس جهت شروع";I?(A="#38bdf8",P="#0284c7",M="linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",T="☕ ثبت استراحت (بدون احتساب در ساعت مطالعه)",O="☕ در حال استراحت پومودورو",C="▶ لمس جهت شروع استراحت"):x&&(A="#f59e0b",P="#d97706",M="linear-gradient(135deg, #d97706 0%, #b45309 100%)",T="🧘 ثبت فعالیت غیردرسی (بدون احتساب در ساعت مطالعه)",O="🧘 در حال فعالیت غیردرسی",C="▶ لمس جهت شروع فعالیت");const z=typeof p<"u"&&typeof p.getStudyMinutesByDate=="function"?p.getStudyMinutesByDate():0,B=typeof p<"u"&&typeof p.getDailyTestCount=="function"?p.getDailyTestCount():0,U=typeof p<"u"?p.getCategories():[],F=typeof p<"u"&&typeof p.getNonStudyCategories=="function"?p.getNonStudyCategories():[{code:"non_sports",title:"ورزش و تندرستی",icon:"🏃",color:"#f59e0b"},{code:"non_sleep",title:"خواب و استراحت",icon:"😴",color:"#8b5cf6"},{code:"non_meal",title:"میان‌وعده و تغذیه",icon:"☕",color:"#10b981"},{code:"non_walk",title:"پیاده‌روی و هوای آزاد",icon:"🚶",color:"#06b6d4"},{code:"non_zen",title:"مدیتیشن و ذهن‌آگاهی",icon:"🧘",color:"#ec4899"},{code:"non_personal",title:"کارهای شخصی و تفریح",icon:"📱",color:"#f43f5e"},{code:"non_house",title:"امور منزل و خرید",icon:"🧹",color:"#64748b"}],L=c||((W=U.find(G=>Pe(G)))==null?void 0:W.code)||((de=U[0])==null?void 0:de.code)||"ع-س",J=U.find(G=>G.code===L)||U[0]||{title:"داخلی"},Y=F.find(G=>G.code===g)||F[0],H=I?{title:"استراحت پومودورو"}:k?J:Y,Q=a===0?e:n,D=a===0?t:i,Z=Math.max(0,Q),X=Math.floor(Z/3600),xe=Math.floor(Z%3600/60),ye=Z%60,ce=G=>G.toString().padStart(2,"0"),h=X>0?`${ce(X)}:${ce(xe)}:${ce(ye)}`:`${ce(xe)}:${ce(ye)}`;return`
    <div class="focus-view-container ${u?"focus-modal-layout":"main-container"}" style="direction: rtl; padding-bottom: 70px; color: #fff;">
      
      <!-- Top Title Header -->
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="width: 32px; height: 32px; border-radius: 10px; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); display: flex; align-items: center; justify-content: center; font-size: 1.1rem;">
            ${I?"☕":k?"🎯":"🧘"}
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
              مطالعه امروز: ${be(z)} | ${S(B)} تست
            </span>
          `}
        </div>
      </div>

      <!-- Live Study Status Bar when running -->
      ${D?`
        <div style="background: #16171d; border: 1px solid ${A}; border-radius: 12px; padding: 8px 12px; margin-bottom: 10px; display: flex; align-items: center; justify-content: space-between; gap: 8px; animation: fadeIn 0.3s ease;">
          <div style="display: flex; align-items: center; gap: 6px;">
            <span class="neon-pulse-dot animate-pulse" style="background: ${A};"></span>
            <span style="font-size: 0.76rem; font-weight: 700; color: ${A};">
              وضعیت زنده:
              <strong style="color: #ffffff;">«${I?"استراحت و ریکاوری پومودورو":k?y?`${J.title} (${y})`:J.title:y?`${Y.title} (${y})`:Y.title}»</strong>
            </span>
          </div>
          <span style="font-size: 0.65rem; background: rgba(255,255,255,0.08); color: ${A}; padding: 2px 6px; border-radius: 6px; font-weight: 600; white-space: nowrap;">
            ${I?"☕ استراحت":x?"🧘 غیردرسی":"🟢 در حال مطالعه"}
          </span>
        </div>
      `:""}

      <!-- 📚 1. ACCORDION: ACTIVITY TYPE & SUBJECT SELECTION -->
      <div class="glass-panel" style="margin-bottom: 10px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-accordion-toggle" id="btn-accordion-activity" data-accordion-key="activity" onclick="event.preventDefault(); event.stopPropagation(); window.toggleFocusAccordion && window.toggleFocusAccordion('activity', event)" style="width: 100%; padding: 12px 14px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; font-weight: 700; color: #e4e4e7; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 88%;">
            <span style="font-size: 0.95rem;">${I?"☕":k?"📚":"🧘"}</span>
            <span>انتخاب درس و فعالیت: <strong style="color: ${A}; font-weight: 800;">«${H.title}${y?` - ${y}`:""}»</strong></span>
          </div>
          <span class="accordion-chevron" style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${m.activity?"180deg":"0deg"});">▼</span>
        </button>
        
        <div id="accordion-drawer-activity" class="accordion-drawer" style="display: ${m.activity?"block":"none"}; padding: 12px 14px 14px 14px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 0.76rem; font-weight: 700; color: #e4e4e7;">
              نوع فعالیت:
            </span>
            <span style="font-size: 0.7rem; color: #8e8e9c;">
              ${I?"☕ استراحت":k?"📚 درسی":"🧘 غیردرسی"}
            </span>
          </div>

          <div style="display: flex; gap: 6px; margin-bottom: 10px;">
            <button type="button" class="btn-activity-mode-switch ${k?"active":""}" data-mode="study" onclick="event.preventDefault(); event.stopPropagation(); window.setFocusActivityMode && window.setFocusActivityMode('study', event)" style="flex: 1; padding: 7px 10px; border-radius: 10px; font-size: 0.78rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; border: 1px solid ${k?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${k?"#7c3aed":"#1f2029"}; color: ${k?"#ffffff":"#a1a1aa"}; transition: all 0.2s ease;">
              <span style="font-size: 0.95rem;">📚</span>
              <span>فعالیت درسی</span>
            </button>
            
            <button type="button" class="btn-activity-mode-switch ${k?"":"active"}" data-mode="non-study" onclick="event.preventDefault(); event.stopPropagation(); window.setFocusActivityMode && window.setFocusActivityMode('non-study', event)" style="flex: 1; padding: 7px 10px; border-radius: 10px; font-size: 0.78rem; font-weight: 700; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; border: 1px solid ${k?"rgba(255,255,255,0.08)":"#f59e0b"}; background: ${k?"#1f2029":"#d97706"}; color: ${k?"#a1a1aa":"#ffffff"}; transition: all 0.2s ease;">
              <span style="font-size: 0.95rem;">☕</span>
              <span>فعالیت غیردرسی</span>
            </button>
          </div>

          <div id="focus-activity-study-container" style="display: ${k?"block":"none"};">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <label style="font-size: 0.72rem; font-weight: 600; color: var(--text-secondary);">
                نام درس:
              </label>
              <button type="button" onclick="if(window.openActivityModal){ window.openActivityModal(); }" style="background: none; border: none; color: #a1a1aa; font-size: 0.7rem; font-weight: 600; cursor: pointer; padding: 0;">
                ➕ افزودن درس
              </button>
            </div>

            <div style="display: flex; gap: 5px; overflow-x: auto; padding-bottom: 4px; margin-bottom: 8px;" id="focus-study-category-chips">
              ${U.map(G=>`
                <button type="button" class="btn-focus-cat-chip ${G.code===L?"active":""}" data-code="${G.code}" data-title="${G.title}" onclick="event.preventDefault(); event.stopPropagation(); window.handleSelectFocusSubject && window.handleSelectFocusSubject(this, '${G.title}', '${G.code}')" style="display: inline-flex; align-items: center; gap: 4px; padding: 4px 8px; border-radius: 8px; border: 1px solid ${G.code===L?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${G.code===L?"#7c3aed":"#1f2029"}; color: ${G.code===L?"#ffffff":"#e4e4e7"}; font-size: 0.74rem; font-weight: 600; cursor: pointer; white-space: nowrap;">
                  <span>${G.icon||"📚"}</span>
                  <span>${G.title}</span>
                  <span class="btn-delete-study-cat" data-code="${G.code}" data-title="${G.title}" title="حذف «${G.title}»" style="display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; border-radius: 50%; font-size: 0.6rem; color: #f87171; background: rgba(239,68,68,0.2); margin-right: 2px;">✕</span>
                </button>
              `).join("")}
            </div>

            <div>
              <label style="display: block; font-size: 0.72rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 3px;">
                مبحث یا موضوع درس:
              </label>
              <input type="text" id="input-focus-subject" data-alias="fab-timer-subject-input" value="${y||""}" placeholder="مثلاً: گوارش، قلب، تست جامع..." style="width: 100%; box-sizing: border-box; height: 34px; padding: 0 10px; font-size: 0.78rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; color: #fff;" />
            </div>

            <!-- 🌟 Study Phase Selection Chips -->
            <div style="margin-top: 10px;">
              <label style="display: block; font-size: 0.72rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 4px;">
                فاز / روش مطالعه:
              </label>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 4px;" id="focus-phase-chips-container">
                ${[{id:"یادگیری",label:"یادگیری",icon:"🧠"},{id:"تست‌زنی",label:"تست‌زنی",icon:"🎯"},{id:"مرور",label:"مرور",icon:"🔄"},{id:"جمع‌بندی",label:"جمع‌بندی",icon:"📑"}].map(G=>{const ue=b===G.id;return`
                    <button type="button" class="btn-phase-chip btn-manual-study-pill btn-fab-study-pill ${ue?"active":""}" data-phase="${G.id}" data-pill="${G.id}" onclick="event.preventDefault(); event.stopPropagation(); window.selectStudyPhase && window.selectStudyPhase(this, '${G.id}')" style="padding: 6px 2px; border-radius: 8px; border: 1px solid ${ue?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${ue?"#7c3aed":"#1f2029"}; color: ${ue?"#ffffff":"#a1a1aa"}; font-size: 0.72rem; font-weight: 700; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 2px; transition: all 0.15s ease;">
                      <span style="font-size: 0.95rem;">${G.icon}</span>
                      <span>${G.label}</span>
                    </button>
                  `}).join("")}
              </div>
              <input type="hidden" id="focus-phase-input" value="${b}" />
            </div>
          </div>

          <div id="focus-activity-nonstudy-container" style="display: ${k?"none":"block"};">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <label style="font-size: 0.72rem; font-weight: 600; color: var(--text-secondary);">
                دسته‌بندی غیردرسی:
              </label>
              <button type="button" id="btn-add-custom-nonstudy-quick" style="background: none; border: none; color: #a1a1aa; font-size: 0.7rem; font-weight: 600; cursor: pointer; padding: 0;">
                ➕ افزودن فعالیت
              </button>
            </div>

            <div style="display: flex; gap: 5px; overflow-x: auto; padding-bottom: 4px; margin-bottom: 8px;">
              ${F.map(G=>`
                <button type="button" class="btn-nonstudy-cat-chip ${G.code===g?"active":""}" data-code="${G.code}" data-title="${G.title}" onclick="event.preventDefault(); event.stopPropagation(); window.handleSelectFocusSubject && window.handleSelectFocusSubject(this, '${G.title}', '${G.code}')" style="display: inline-flex; align-items: center; gap: 4px; padding: 4px 8px; border-radius: 8px; border: 1px solid ${G.code===g?"#d97706":"rgba(255,255,255,0.08)"}; background: ${G.code===g?"#d97706":"#1f2029"}; color: ${G.code===g?"#ffffff":"#e4e4e7"}; font-size: 0.74rem; font-weight: 600; cursor: pointer; white-space: nowrap;">
                  <span>${G.icon||"☕"}</span>
                  <span>${G.title}</span>
                  <span class="btn-delete-nonstudy-cat" data-code="${G.code}" data-title="${G.title}" title="حذف «${G.title}»" style="display: inline-flex; align-items: center; justify-content: center; width: 14px; height: 14px; border-radius: 50%; font-size: 0.6rem; color: #f87171; background: rgba(239,68,68,0.2); margin-right: 2px;">✕</span>
                </button>
              `).join("")}
            </div>

            <div>
              <label style="display: block; font-size: 0.72rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 3px;">
                عنوان فعالیت:
              </label>
              <input type="text" id="input-focus-nonstudy-subject" data-alias="fab-timer-subject-input" value="${y||""}" placeholder="مثلاً: ورزش صبحگاهی، استراحت، خرید..." style="width: 100%; box-sizing: border-box; height: 34px; padding: 0 10px; font-size: 0.78rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; color: #fff;" />
            </div>
          </div>
        </div>
      </div>

      <!-- ⏱️ 2. ACCORDION: POMODORO DURATION & BREAK TIMING -->
      <div class="glass-panel" style="margin-bottom: 12px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-accordion-toggle" id="btn-accordion-timing" data-accordion-key="timing" onclick="event.preventDefault(); event.stopPropagation(); window.toggleFocusAccordion && window.toggleFocusAccordion('timing', event)" style="width: 100%; padding: 12px 14px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; font-weight: 700; color: #e4e4e7;">
            <span style="font-size: 0.95rem;">⏱️</span>
            <span>زمان‌بندی: <strong style="color: ${A}; font-weight: 800;">${a===0?"کرونومتر":a===2?"۵ دقیقه استراحت":`${r} دقیقه پومودورو`}</strong></span>
          </div>
          <span class="accordion-chevron" style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${m.timing?"180deg":"0deg"});">▼</span>
        </button>

        <div id="accordion-drawer-timing" class="accordion-drawer" style="display: ${m.timing?"block":"none"}; padding: 12px 14px 14px 14px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
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
            ${[15,25,30,45,50,60].map(G=>`
              <button type="button" class="btn-focus-preset ${r===G?"active":""}" data-mins="${G}" onclick="window.setFocusPresetMins && window.setFocusPresetMins(${G})" style="padding: 4px 10px; font-size: 0.72rem; font-weight: 600; border-radius: 12px; border: 1px solid ${r===G?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${r===G?"#7c3aed":"#1f2029"}; color: ${r===G?"#ffffff":"#a1a1aa"}; cursor: pointer;">
                ${G} دقیقه
              </button>
            `).join("")}
          </div>
        </div>
      </div>

      <!-- 🌟 CENTRAL FEATURE: PROMINENT LARGE POMODORO TIMER CIRCLE -->
      <div class="glass-panel timer-circle-panel" style="padding: 20px 16px; margin-bottom: 14px; border-radius: 18px; border: 1px solid ${A}; background: linear-gradient(180deg, rgba(22, 23, 29, 0.95) 0%, rgba(15, 23, 42, 0.9) 100%); text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.4);">
        
        <!-- Radial Timer Display -->
        <div id="immersion-clock-clickable" class="timer-circle countdown-timer" onclick="event.preventDefault(); event.stopPropagation(); if(${D}){ window.finishPomodoroSession && window.finishPomodoroSession(); } else { window.planexStartFocusTimer && window.planexStartFocusTimer(event); }" style="position: relative; width: 230px; height: 230px; margin: 0 auto 16px auto; display: flex; align-items: center; justify-content: center; cursor: pointer;">
          <svg width="230" height="230" viewBox="0 0 220 220" style="transform: rotate(-90deg); width: 100%; height: 100%; filter: drop-shadow(0 0 12px ${A});">
            <circle cx="110" cy="110" r="95" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="12"></circle>
            <circle cx="110" cy="110" r="95" fill="none" stroke="${A}" stroke-width="12" 
              stroke-dasharray="596.9" 
              stroke-dashoffset="${596.9-596.9*(a===0?e%3600/3600:a===2?n/300:n/(r*60))}" 
              stroke-linecap="round" style="transition: stroke-dashoffset 0.5s ease;"></circle>
          </svg>
          
          <div style="position: absolute; text-align: center; width: 100%;">
            <div id="focus-timer-display" data-alias="timer-clock-display" style="font-size: 2.8rem; font-weight: 900; font-family: 'Outfit', sans-serif; color: #ffffff; letter-spacing: 1.5px; text-shadow: 0 0 24px ${A}; line-height: 1;">
              ${h}
            </div>
            <div style="font-size: 0.78rem; font-weight: 700; color: ${D?A:"#a1a1aa"}; margin-top: 6px;">
              ${D?O:C}
            </div>
          </div>
        </div>

        <!-- Timer Action Buttons: WIDE ATTACHED START BUTTON -->
        <div style="display: flex; gap: 8px;">
          <button type="button" id="btn-toggle-timer-main" onclick="event.preventDefault(); event.stopPropagation(); if(${D}){ window.finishPomodoroSession && window.finishPomodoroSession(); } else { window.planexStartFocusTimer && window.planexStartFocusTimer(event); }" class="btn-primary" style="flex: 1; height: 46px; font-size: 1rem; font-weight: 800; background: ${D?"#ef4444":P}; border-radius: 12px; border: none; cursor: pointer; color: white; box-shadow: 0 4px 16px ${D?"rgba(239,68,68,0.35)":"rgba(16,185,129,0.35)"}; transition: all 0.2s ease;">
            ${D?"⏸ توقف و ثبت پارت":I?"☕ شروع استراحت":x?"🧘 شروع فعالیت غیردرسی":"▶ شروع تایمر"}
          </button>
          <button type="button" id="btn-reset-timer-main" onclick="event.preventDefault(); event.stopPropagation(); window.resetTimer && window.resetTimer(event);" class="glass-panel" style="width: 70px; height: 46px; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); cursor: pointer; font-size: 0.82rem; font-weight: 700; border-radius: 12px; color: #a1a1aa; display: flex; align-items: center; justify-content: center; gap: 4px;" title="ریست تایمر (لغو بدون ثبت)">
            🔄
          </button>
        </div>

      </div>

      <!-- 💾 4. DEDICATED ACTION BUTTONS: AUTO-SYNC LOCAL & CLOUD SAVE -->
      <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 14px;">
        <!-- Button 1: Primary Save with Auto-Sync -->
        <button type="button" id="btn-save-activity-local" onclick="window.finishPomodoroSession && window.finishPomodoroSession()" style="width: 100%; height: 46px; background: ${M}; color: white; border: none; border-radius: 12px; font-size: 0.92rem; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.35); transition: all 0.2s ease;">
          <span>${T}</span>
        </button>

        <!-- Button 2: Switch to Manual Log Modal -->
        <button type="button" onclick="if(window.openManualActivityLogModal){ window.openManualActivityLogModal(); } else { window.appState.activeModal = 'manualLog'; window.renderApp(); }" style="width: 100%; height: 38px; background: #1f2029; color: #a1a1aa; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 10px; font-size: 0.8rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; transition: all 0.2s ease;">
          <span style="font-size: 0.95rem;">➕</span>
          <span>ثبت دستی (بدون تایمر)</span>
        </button>
      </div>

      <!-- 🎵 Ambient Focus Sound Player Widget -->
      ${Vt()}


      <!-- 🎯 5. ACCORDION: TEST COUNTER & NOTES (Optional) -->
      <div class="glass-panel" style="margin-bottom: 10px; border-radius: 14px; border: 1px solid rgba(255, 255, 255, 0.08); background: #16171d; overflow: hidden; transition: all 0.2s ease;">
        <button type="button" class="btn-accordion-toggle" id="btn-accordion-testNote" data-accordion-key="testNote" onclick="event.preventDefault(); event.stopPropagation(); window.toggleFocusAccordion && window.toggleFocusAccordion('testNote', event);" style="width: 100%; padding: 12px 14px; background: rgba(255,255,255,0.02); border: none; color: #fff; display: flex; justify-content: space-between; align-items: center; cursor: pointer; text-align: right; font-family: inherit;">
          <div style="display: flex; align-items: center; gap: 8px; font-size: 0.82rem; font-weight: 700; color: #e4e4e7;">
            <span style="font-size: 0.95rem;">📝</span>
            <span>ثبت تست و یادداشت (اختیاری) ${s>0?`<strong style="color: #38bdf8; font-weight: 800;">(${s} تست)</strong>`:""}</span>
          </div>
          <span class="accordion-chevron" style="font-size: 0.75rem; color: #a1a1aa; transition: transform 0.2s ease; transform: rotate(${m.testNote?"180deg":"0deg"});">▼</span>
        </button>

        <div id="accordion-drawer-testNote" class="accordion-drawer" style="display: ${m.testNote?"block":"none"}; padding: 12px 14px 14px 14px; border-top: 1px solid rgba(255, 255, 255, 0.06); animation: fadeIn 0.2s ease;">
          ${k?`
            <!-- Dedicated Test Counter -->
            <div style="margin-bottom: 10px;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="font-size: 0.78rem; color: #e4e4e7; font-weight: 700;">تست‌شمار پارت مطالعه:</span>
                <span style="font-size: 0.68rem; color: #8e8e9c;">امروز: <strong style="color:#e4e4e7;">${B+s}</strong> تست</span>
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
            <input type="text" id="input-focus-session-note" value="${w||""}" placeholder="نکات مهم یا ارزیابی شخصی..." style="width: 100%; box-sizing: border-box; height: 34px; padding: 0 10px; font-size: 0.76rem; font-family: inherit; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; color: #fff;" />
          </div>
        </div>
      </div>

    </div>
  `}function xn(o={}){return`
    <div id="modal-focus-view" class="modal-overlay" style="position: fixed; inset: 0; z-index: 9999; display: flex; align-items: center; justify-content: center; padding: 14px;">
      <div class="modal-backdrop" style="position: absolute; inset: 0; background: rgba(12, 13, 17, 0.88); backdrop-filter: blur(16px);" data-close-modal="true" onclick="if(!window.isTimerRunningCheck()){ window.closeFocusModal(); }"></div>
      
      <div class="glass-panel" style="position: relative; width: 100%; max-width: 520px; padding: 20px; border-radius: 18px; border: 1px solid rgba(255, 255, 255, 0.06); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8); max-height: 94vh; overflow-y: auto; background: #16171d; color: #fff;">
        ${Jo({...o,isModalMode:!0})}
      </div>
    </div>
  `}function wn(o={}){var L,J,Y,H,Q;const{activityMode:e="study",selectedCategoryCode:t=null,selectedNonStudyCode:n="non_sports",subject:i="",durationMins:a=60,startTime:r="08:00",endTime:s="09:00",testCount:d=0,note:l="",durationMode:c="add",testCorrect:g=0,testWrong:y=0,testUnanswered:f=0}=o,w=D=>String(D).replace(/[0-9]/g,Z=>"۰۱۲۳۴۵۶۷۸۹"[Z]),u=e!=="non-study",m=(typeof p<"u"?p.getCategories():[])||[],b=m.filter(D=>Pe(D)),S=b.length>0?b:m,I=(typeof p<"u"&&typeof p.getNonStudyCategories=="function"?p.getNonStudyCategories():[{code:"non_sports",title:"ورزش و تندرستی",icon:"🏃",color:"#f59e0b"},{code:"non_rest",title:"استراحت و تفریح",icon:"☕",color:"#8b5cf6"},{code:"non_sleep",title:"خواب و ریکاوری",icon:"😴",color:"#6366f1"},{code:"non_meal",title:"میانوعده و تغذیه",icon:"🍎",color:"#10b981"},{code:"non_personal",title:"کارهای شخصی",icon:"📱",color:"#ec4899"},{code:"non_walk",title:"پیادهروی و هوای آزاد",icon:"🚶",color:"#06b6d4"},{code:"non_house",title:"امور منزل و خرید",icon:"🧹",color:"#64748b"}])||[],x=t&&!String(t).startsWith("non_")?t:((L=S.find(D=>Pe(D)))==null?void 0:L.code)||((J=S[0])==null?void 0:J.code)||"cat_dakheli";S.find(D=>D.code===x)||S[0],I.find(D=>D.code===n)||I[0];const k=Math.max(1,parseInt(a)||60),A=r||"08:00";let P=s;if(!P){const[D,Z]=A.split(":").map(Number),xe=((!isNaN(D)&&!isNaN(Z)?D*60+Z:480)+k)%1440,ye=String(Math.floor(xe/60)).padStart(2,"0"),ce=String(xe%60).padStart(2,"0");P=`${ye}:${ce}`}const M=Math.max(0,parseInt(g)||0),T=Math.max(0,parseInt(y)||0),O=Math.max(0,parseInt(f)||0),C=M+T+O;let z=null,B="—";C>0&&(z=+((3*M-T)/(3*C)*100).toFixed(1),B=w(z.toFixed(1))+"%");let U=0;try{U=typeof p<"u"&&typeof p.getStudyMinutesByDate=="function"?p.getStudyMinutesByDate():0}catch{}const F=c==="replace"?k:U+k;return`
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
              ${S.map(D=>`
                <button type="button" class="btn-manual-cat-chip ${D.code===x?"active":""}" data-code="${D.code}" data-title="${D.title}" data-color="${D.color||"#0ea5e9"}" onclick="event.preventDefault(); event.stopPropagation(); window.handleSelectManualSubject && window.handleSelectManualSubject(this, '${D.title}', '${D.code}')" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 13px; border-radius: 12px; border: 1px solid ${D.code===x?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${D.code===x?"#7c3aed":"#1f2029"}; color: ${D.code===x?"#ffffff":"#e2e8f0"}; font-size: 0.8rem; font-weight: 700; cursor: pointer; white-space: nowrap; transition: all 0.15s ease;">
                  <span>${D.icon||"📚"}</span>
                  <span>${D.title}</span>
                </button>
              `).join("")}
            </div>

            <!-- 🌟 Study Phase Selection Chips -->
            <div style="margin-bottom: 12px;">
              <label style="display: block; font-size: 0.76rem; font-weight: 800; color: var(--text-secondary); margin-bottom: 6px;">
                فاز / نوع مطالعه (الزامی):
              </label>
              <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 6px;" id="manual-phase-chips-list">
                ${[{id:"یادگیری",label:"یادگیری",icon:"🧠"},{id:"تست‌زنی",label:"تست‌زنی",icon:"🎯"},{id:"مرور",label:"مرور",icon:"🔄"},{id:"جمع‌بندی",label:"جمع‌بندی",icon:"📑"}].map(D=>{var X,xe,ye,ce;const Z=((X=window.fabActivityState)==null?void 0:X.selectedPhase)===D.id||((xe=window.fabActivityState)==null?void 0:xe.studyType)===D.id||((ye=window.appState)==null?void 0:ye.selectedStudyMethod)===D.id||!((ce=window.fabActivityState)!=null&&ce.selectedPhase)&&D.id==="یادگیری";return`
                    <button type="button" class="btn-phase-chip btn-manual-study-pill ${Z?"active":""}" data-phase="${D.id}" data-pill="${D.id}" onclick="event.preventDefault(); event.stopPropagation(); window.selectStudyPhase && window.selectStudyPhase(this, '${D.id}')" style="padding: 8px 4px; border-radius: 12px; border: 1px solid ${Z?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${Z?"#7c3aed":"#1f2029"}; color: ${Z?"#ffffff":"#e4e4e7"}; font-size: 0.78rem; font-weight: 800; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 2px; transition: all 0.15s ease;">
                      <span style="font-size: 1.1rem;">${D.icon}</span>
                      <span>${D.label}</span>
                    </button>
                  `}).join("")}
              </div>
              <input type="hidden" id="input-manual-phase" value="${((Y=window.fabActivityState)==null?void 0:Y.selectedPhase)||((H=window.fabActivityState)==null?void 0:H.studyType)||((Q=window.appState)==null?void 0:Q.selectedStudyMethod)||"یادگیری"}" />
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
              ${I.map(D=>`
                <button type="button" class="btn-manual-nonstudy-chip ${D.code===n?"active":""}" data-code="${D.code}" data-title="${D.title}" data-color="${D.color||"#f59e0b"}" onclick="event.preventDefault(); event.stopPropagation(); window.handleSelectManualSubject && window.handleSelectManualSubject(this, '${D.title}', '${D.code}')" style="display: inline-flex; align-items: center; gap: 6px; padding: 7px 13px; border-radius: 12px; border: 1px solid ${D.code===n?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${D.code===n?"#7c3aed":"#1f2029"}; color: ${D.code===n?"#ffffff":"#e2e8f0"}; font-size: 0.8rem; font-weight: 700; cursor: pointer; white-space: nowrap; transition: all 0.15s ease;">
                  <span>${D.icon||"☕"}</span>
                  <span>${D.title}</span>
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
                <input type="time" id="input-manual-start-time" value="${A}" oninput="window.syncManualTimeInputs && window.syncManualTimeInputs('from_times')" style="width: 100%; box-sizing: border-box; height: 42px; padding: 0 10px; font-size: 1.05rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #38bdf8; text-align: center;" />
              </div>
              <div>
                <label style="display: block; font-size: 0.7rem; font-weight: bold; color: #a1a1aa; margin-bottom: 4px;">تا ساعت (پایان):</label>
                <input type="time" id="input-manual-end-time" value="${P}" oninput="window.syncManualTimeInputs && window.syncManualTimeInputs('from_times')" style="width: 100%; box-sizing: border-box; height: 42px; padding: 0 10px; font-size: 1.05rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #38bdf8; text-align: center;" />
              </div>
            </div>
          </div>

          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 1rem;">⏳</span>
              <span style="font-size: 0.82rem; color: #e4e4e7; font-weight: 800;">مجموع مدت زمان:</span>
            </div>
            <span id="manual-duration-human-badge" style="font-size: 0.76rem; color: #a1a1aa; font-weight: bold; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); padding: 3px 10px; border-radius: 10px;">
              ${be(k)}
            </span>
          </div>

          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
            <button type="button" id="btn-manual-dur-minus-15" class="btn-dur-adjust" data-change="-15" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(-15)" style="padding: 0 10px; height: 44px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; font-size: 0.85rem; font-weight: 800; cursor: pointer;">−۱۵</button>
            <button type="button" id="btn-manual-dur-minus-5" class="btn-dur-adjust" data-change="-5" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(-5)" style="padding: 0 10px; height: 44px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; font-size: 0.85rem; font-weight: 800; cursor: pointer;">−۵</button>
            
            <div style="flex: 1; position: relative;">
              <input type="number" id="manual-duration-input" data-alias="input-manual-duration" min="1" max="1440" value="${k}" oninput="window.updateManualDurationPreview && window.updateManualDurationPreview(this.value)" style="width: 100%; box-sizing: border-box; height: 44px; text-align: center; font-size: 1.35rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; color: #e4e4e7;" />
              <span style="position: absolute; left: 10px; top: 12px; font-size: 0.72rem; color: #94a3b8; pointer-events: none;">دقیقه</span>
            </div>

            <button type="button" id="btn-manual-dur-plus-5" class="btn-dur-adjust" data-change="5" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(5)" style="padding: 0 10px; height: 44px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; font-size: 0.85rem; font-weight: 800; cursor: pointer;">+۵</button>
            <button type="button" id="btn-manual-dur-plus-15" class="btn-dur-adjust" data-change="15" onclick="event.preventDefault(); event.stopPropagation(); window.adjustManualDuration && window.adjustManualDuration(15)" style="padding: 0 10px; height: 44px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: #1f2029; color: #a1a1aa; font-size: 0.85rem; font-weight: 800; cursor: pointer;">+۱۵</button>
          </div>

          <!-- Quick Duration Presets (-15, +5, +15, 15m, 30m, 1h, 1.5h, 2h) -->
          <div style="display: flex; gap: 6px; justify-content: center; flex-wrap: wrap; margin-bottom: 14px;">
            ${[15,30,45,60,90,120].map(D=>`
              <button type="button" class="btn-quick-dur-preset ${k===D?"active":""}" data-mins="${D}" onclick="event.preventDefault(); event.stopPropagation(); window.setManualDurationPreset && window.setManualDurationPreset(${D})" style="flex: 1; min-width: 65px; padding: 6px 4px; font-size: 0.76rem; font-weight: 800; border-radius: 10px; border: 1px solid ${k===D?"#7c3aed":"rgba(255,255,255,0.08)"}; background: ${k===D?"#7c3aed":"#1f2029"}; color: ${k===D?"#ffffff":"#a1a1aa"}; cursor: pointer; transition: all 0.15s ease;">
                ${D>=60?D===60?"۱ ساعت":`${D/60} ساعت`:`${D} دقیقه`}
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
            <span style="font-size: 0.8rem; font-weight: 700; color: #c4b5fd;">مجموع نهایی ثبت‌شده: <span id="manual-final-total-text" style="color: #e4e4e7;">${be(F)}</span></span>
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
              ${w(C)} تست
            </span>
          </div>

          <!-- Test Input Grid -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
            <!-- Correct -->
            <div style="background: #1a1b22; border: 1px solid rgba(16,185,129,0.2); border-radius: 14px; padding: 10px;">
              <label style="display: flex; align-items: center; gap: 4px; font-size: 0.74rem; font-weight: 800; color: #34d399; margin-bottom: 6px;">
                <span>✅</span> درست (صحیح)
              </label>
              <input type="number" id="input-manual-test-correct" min="0" max="2000" value="${M}" oninput="window.updateManualTestScorePreview && window.updateManualTestScorePreview()" style="width: 100%; box-sizing: border-box; height: 44px; text-align: center; font-size: 1.2rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(16,185,129,0.15); border-radius: 10px; color: #34d399;" />
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
              <input type="number" id="input-manual-test-unanswered" min="0" max="2000" value="${O}" oninput="window.updateManualTestScorePreview && window.updateManualTestScorePreview()" style="width: 100%; box-sizing: border-box; height: 44px; text-align: center; font-size: 1.2rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(161,161,170,0.15); border-radius: 10px; color: #a1a1aa;" />
            </div>

            <!-- Total (auto-computed) -->
            <div style="background: #1a1b22; border: 1px solid rgba(124,58,237,0.2); border-radius: 14px; padding: 10px;">
              <label style="display: flex; align-items: center; gap: 4px; font-size: 0.74rem; font-weight: 800; color: #a78bfa; margin-bottom: 6px;">
                <span>📋</span> تعداد کل تست
              </label>
              <div id="manual-test-total-computed" style="width: 100%; height: 44px; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; font-weight: 900; font-family: 'Outfit', sans-serif; background: #1f2029; border: 1px solid rgba(124,58,237,0.15); border-radius: 10px; color: #a78bfa;">
                ${w(C)}
              </div>
            </div>
          </div>

          <!-- Real-time Score Percentage Preview -->
          <div id="manual-score-preview" style="background: ${C>0?z>=50?"rgba(16,185,129,0.08)":"rgba(239,68,68,0.08)":"rgba(255,255,255,0.03)"}; border: 1px solid ${C>0?z>=50?"rgba(16,185,129,0.2)":"rgba(239,68,68,0.2)":"rgba(255,255,255,0.06)"}; border-radius: 12px; padding: 10px 14px; display: flex; align-items: center; justify-content: space-between;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 1.1rem;">📊</span>
              <span style="font-size: 0.82rem; font-weight: 800; color: #e2e8f0;">درصد خالص کنکوری:</span>
            </div>
            <span id="manual-score-percentage-text" style="font-size: 1.1rem; font-weight: 900; font-family: 'Outfit', sans-serif; color: ${C>0?z>=50?"#34d399":"#f87171":"#71717a"};">
              ${B}
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
          <button type="button" id="btn-submit-manual-log" data-alias="btn-save-manual-activity-log" onclick="event.preventDefault(); event.stopPropagation(); window.saveManualActivityLog && window.saveManualActivityLog(event);" style="flex: 1; height: 52px; background: ${u?"#7c3aed":"linear-gradient(135deg, #d97706 0%, #b45309 100%)"}; color: white; border: none; border-radius: 14px; font-size: 0.95rem; font-weight: 900; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 8px; box-shadow: none; transition: all 0.2s ease;">
            <span id="btn-submit-manual-log-icon" style="font-size: 1.2rem;">${u?"💾":"☕"}</span>
            <span id="btn-submit-manual-log-text">${u?"ثبت در کارنامه و نمودارها":"ثبت فعالیت غیردرسی (بدون احتساب در ساعت مطالعه)"}</span>
          </button>
        </div>

      </div>
    </div>
  `}function Go(o){if(!o)return"";let e=String(o).trim();return e=e.replace(/[۰-۹]/g,t=>"۰۱۲۳۴۵۶۷۸۹".indexOf(t)),e=e.replace(/[٠-٩]/g,t=>"٠١٢٣٤٥٦٧٨٩".indexOf(t)),e=e.replace(/[^0-9]/g,""),e.startsWith("00989")?e="0"+e.slice(4):e.startsWith("0989")?e="0"+e.slice(3):e.startsWith("989")?e="0"+e.slice(2):e.startsWith("9")&&e.length===10&&(e="0"+e),e}function hn(o=null){const e=o||(()=>{try{return JSON.parse(localStorage.getItem("planex_auth_user")||localStorage.getItem("planex_user_account")||"null")}catch{return null}})(),t=localStorage.getItem("planex_user_avatar")||"",n=localStorage.getItem("planex_user_nickname")||localStorage.getItem("planex_leaderboard_nickname")||"",i=(()=>{try{return JSON.parse(localStorage.getItem("planex_user_profile")||"null")}catch{return null}})(),a=!!(e&&(e.phone||e.phone_number||e.telegram_id||e.id)),r=n||(i==null?void 0:i.name)||(i==null?void 0:i.nickname)||(e==null?void 0:e.full_name)||(e==null?void 0:e.name)||(e==null?void 0:e.first_name)||"کاربر پلنکس",s=(e==null?void 0:e.phone)||(e==null?void 0:e.phone_number)||"",d=t||(i==null?void 0:i.avatar)||(i==null?void 0:i.avatar_url)||(e==null?void 0:e.avatar_url)||(e==null?void 0:e.photo_url)||`https://api.dicebear.com/7.x/avataaars/svg?seed=${s||(e==null?void 0:e.username)||"planex"}`;return`
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
              <img src="${d}" 
                   style="width: 100%; height: 100%; border-radius: 50%; border: 2.5px solid #10b981; object-fit: cover;" 
                   onerror="this.src='https://api.dicebear.com/7.x/avataaars/svg?seed=planex'" />
              <div style="position: absolute; bottom: 0; right: 0; width: 24px; height: 24px; border-radius: 50%; background: #10b981; border: 2px solid #0d0d12; display: flex; align-items: center; justify-content: center; font-size: 0.65rem; color: #fff;">✓</div>
            </div>
            <h3 style="font-size: 1.12rem; color: #f8fafc; margin-bottom: 4px; font-weight: 800;">${r}</h3>
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
  `}typeof window<"u"&&(window.toggleLoginPasswordVisibility=()=>{const o=document.getElementById("input-login-password"),e=document.getElementById("btn-toggle-login-pwd");o&&(o.type==="password"?(o.type="text",e&&(e.textContent="🙈")):(o.type="password",e&&(e.textContent="👁️")))},window.handlePhoneLoginSubmit=async()=>{var s,d,l,c,g;const o=document.getElementById("input-login-phone"),e=document.getElementById("input-login-password"),t=document.getElementById("login-modal-error-box"),n=document.getElementById("btn-submit-phone-login");t&&(t.style.display="none");const i=((s=o==null?void 0:o.value)==null?void 0:s.trim())||"",a=Go(i),r=((d=e==null?void 0:e.value)==null?void 0:d.trim())||"";if(!a||!r){t&&(t.textContent="لطفاً شماره موبایل و رمز عبور را وارد کنید.",t.style.display="block"),window.showToast&&window.showToast("لطفاً شماره موبایل و رمز عبور را وارد کنید.","warning");return}n&&(n.disabled=!0,n.innerHTML='<svg class="spin-sync" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> <span>در حال همگام‌سازی...</span>');try{const y=await fetch(`${le}/api/sync.php`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"login",phone:a,password:r})}),f=await y.text();let w={};const u=y.headers.get("content-type")||"";try{u.includes("application/json")||f&&f.trim().startsWith("{")?w=JSON.parse(f):w={success:!1,message:"پاسخ سرور در دسترس نیست."}}catch{w={success:!1,message:"پاسخ دریافتی از سرور معتبر نیست."}}if(y.ok&&w.success&&w.user){w.backupData&&typeof window.personalSyncService<"u"&&typeof window.personalSyncService.importLocalState=="function"?window.personalSyncService.importLocalState(w.backupData):w.backupData&&window.db&&typeof window.db.importAllDataJSON=="function"&&window.db.importAllDataJSON(w.backupData);const m=w.user,b=m.id||m.telegram_id||m.uid||m.phone||a,S=((l=w.backupData)==null?void 0:l.planex_user_avatar)||(typeof((c=w.backupData)==null?void 0:c.planex_user_profile)=="object"?(g=w.backupData.planex_user_profile)==null?void 0:g.avatar:null),I=m.avatar_url||m.avatarUrl||m.photo_url||m.avatar,x=localStorage.getItem("planex_user_avatar");let k="";S&&!S.includes("dicebear.com")?k=S:I&&!I.includes("dicebear.com")?k=I:x&&!x.includes("dicebear.com")?k=x:k=I||x||`https://api.dicebear.com/7.x/avataaars/svg?seed=${a}`,k&&localStorage.setItem("planex_user_avatar",k);const A=m.name||m.full_name||"کاربر پلنکس",P={id:b,telegram_id:m.telegram_id||b,uid:b,user_id:b,phone:m.phone||a,phone_number:m.phone||a,name:A,full_name:A,avatar_url:k,avatarUrl:k,avatar:k,photo_url:k,auth_provider:"phone"};localStorage.setItem("planex_auth_user",JSON.stringify(P)),localStorage.setItem("planex_user_account",JSON.stringify(P)),w.token&&localStorage.setItem("planex_auth_token",w.token),A&&A!=="کاربر پلنکس"&&A!=="کاربر مهمان"&&(localStorage.setItem("planex_user_nickname",A),localStorage.setItem("planex_leaderboard_nickname",A)),Array.isArray(w.study_logs)&&w.study_logs.length>0?window.db&&typeof window.db.saveStudyLogs=="function"?window.db.saveStudyLogs(w.study_logs):(localStorage.setItem("planex_study_logs",JSON.stringify(w.study_logs)),localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(w.study_logs))):w.backupData&&Array.isArray(w.backupData.planex_recent_activity_sessions)&&w.backupData.planex_recent_activity_sessions.length>0&&(window.db&&typeof window.db.saveStudyLogs=="function"?window.db.saveStudyLogs(w.backupData.planex_recent_activity_sessions):localStorage.setItem("planex_recent_activity_sessions",JSON.stringify(w.backupData.planex_recent_activity_sessions))),Array.isArray(w.rooms)&&w.rooms.length>0&&(localStorage.setItem("planex_my_groups",JSON.stringify(w.rooms)),localStorage.setItem("planex_my_rooms",JSON.stringify(w.rooms)),window.db&&typeof window.db.setUserGroups=="function"&&window.db.setUserGroups(w.rooms));try{const M=window.personalSyncService||fe;M&&typeof M.pullFromCloud=="function"&&await M.pullFromCloud(a)}catch(M){console.warn("[LoginModal] Error pulling from cloud post-login:",M)}try{const M=window.leaderboardService||_;M&&typeof M.fetchUserGroups=="function"?await M.fetchUserGroups(!0):typeof window.fetchUserGroups=="function"&&await window.fetchUserGroups()}catch(M){console.warn("[LoginModal] Error fetching user groups post-login:",M)}try{const M=window.db&&typeof window.db.getUserProfile=="function"?window.db.getUserProfile():JSON.parse(localStorage.getItem("planex_user_profile")||"{}");M.phone=a,A&&(M.name=A),k&&(M.avatar=k,M.avatar_url=k,M.photo=k,M.photoUrl=k),window.db&&typeof window.db.setUserProfile=="function"&&window.db.setUserProfile(M),localStorage.setItem("planex_user_profile",JSON.stringify(M))}catch{}if(window.db&&(window.db._breakdownMemoMap={}),typeof window.updateHeaderDOM=="function"&&window.updateHeaderDOM(),window.dispatchEvent(new CustomEvent("auth-changed",{detail:P})),window.dispatchEvent(new CustomEvent("profileUpdated")),window.dispatchEvent(new CustomEvent("study-logs-updated")),window.dispatchEvent(new CustomEvent("sessions-updated")),window.dispatchEvent(new CustomEvent("activity-saved",{detail:{sync:!0}})),window.closeActiveModal?window.closeActiveModal():window.appState&&(window.appState.activeModal=null),window.dashboardChartInstances&&(window.dashboardChartInstances=null),typeof window.updateCharts=="function")try{window.updateCharts()}catch{}typeof window.renderApp=="function"&&window.renderApp(),window.showToast&&window.showToast(`خوش آمدید ${m.name||"کاربر گرامی"}! ورود و همگام‌سازی با موفقیت انجام شد. 🎉`,"success",4e3)}else{const m=w.message||"شماره موبایل یا رمز عبور اشتباه است. در صورت فراموشی، به ربات @planex_sync_bot مراجعه کنید.";t&&(t.textContent=m,t.style.display="block"),window.showToast&&window.showToast(m,"error"),n&&(n.disabled=!1,n.innerHTML="<span>ورود به حساب و همگام‌سازی 🚀</span>")}}catch(y){console.error("[Phone Login Error]:",y);const f="خطا در برقراری ارتباط با سرور. لطفاً اتصال اینترنت خود را بررسی کنید.";t&&(t.textContent=f,t.style.display="block"),window.showToast&&window.showToast(f,"error"),n&&(n.disabled=!1,n.innerHTML="<span>ورود به حساب و همگام‌سازی 🚀</span>")}},window.handlePasswordLoginSubmit=window.handlePhoneLoginSubmit,window.handleEditProfile=()=>{try{if(typeof window.openEditProfileModal=="function"){window.openEditProfileModal();return}window.appState&&(window.appState.activeModal="editProfile",typeof window.renderApp=="function"&&window.renderApp())}catch(o){console.error("[LoginModal] handleEditProfile error:",o),window.appState&&(window.appState.activeModal="editProfile",typeof window.renderApp=="function"&&window.renderApp())}},window.openEditProfileModal=window.openEditProfileModal||window.handleEditProfile,window.handleUserLogout=()=>{try{["planex_auth_user","planex_user_account","planex_user_profile","planex_user_nickname","planex_user_avatar","planex_leaderboard_nickname","planex_my_groups","planex_my_rooms","planex_user_groups","my_rooms","planex_active_group_code","planex_active_room_code","planex_sync_token","planex_sync_token_secret"].forEach(t=>{try{localStorage.removeItem(t)}catch{}});const e=window.db||p;e&&(typeof e.setUserGroups=="function"&&e.setUserGroups([]),typeof e.setUserProfile=="function"&&e.setUserProfile({name:"کاربر مهمان",avatar:"",phone:""})),window.appState&&(window.appState.currentUser=null,window.appState.user=null,window.appState.userGroups=[],window.appState.activeModal=null),typeof window.closeActiveModal=="function"&&window.closeActiveModal(),window.dispatchEvent(new CustomEvent("auth-changed",{detail:null})),window.dispatchEvent(new CustomEvent("profileUpdated")),window.dispatchEvent(new CustomEvent("groups-changed")),window.dispatchEvent(new CustomEvent("groups-updated")),typeof window.renderApp=="function"&&window.renderApp(),typeof window.showToast=="function"&&window.showToast("با موفقیت از حساب کاربری خارج شدید.","info")}catch(o){console.error("[LoginModal] Logout error:",o),typeof window.closeActiveModal=="function"&&window.closeActiveModal(),typeof window.renderApp=="function"&&window.renderApp()}},window.handleAccountLogout=window.handleUserLogout,window.triggerManualCloudSync=async()=>{const o=document.getElementById("btn-manual-account-sync"),e=o?o.innerHTML:"";o&&(o.disabled=!0,o.innerHTML='<svg class="spin-sync" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg> <span>در حال همگام‌سازی...</span>'),typeof window.showToast=="function"&&window.showToast("در حال همگام‌سازی با فضای ابری...","info",2e3);try{const t=window.personalSyncService||fe;t&&typeof t.pushToCloud=="function"?await t.pushToCloud():typeof window.triggerAutoSync=="function"&&await window.triggerAutoSync(!0),t&&typeof t.pullFromCloud=="function"&&await t.pullFromCloud();const n=window.leaderboardService||_;try{n&&typeof n.fetchUserGroups=="function"?await n.fetchUserGroups(!0):typeof window.fetchUserGroups=="function"&&await window.fetchUserGroups()}catch(i){console.warn("[LoginModal] Groups refresh during sync:",i)}try{n&&typeof n.syncUserScore=="function"&&await n.syncUserScore(!0)}catch(i){console.warn("[LoginModal] Score sync during sync:",i)}typeof window.showToast=="function"&&window.showToast("همگامسازی با موفقیت انجام شد 🎉","success",3500)}catch(t){console.error("[LoginModal] Manual cloud sync error:",t),typeof window.showToast=="function"&&window.showToast("خطا در همگام‌سازی ابری اطلاعات. لطفاً اینترنت خود را بررسی کنید.","error",3500)}finally{o&&(o.disabled=!1,o.innerHTML=e||"<span>☁️</span><span>همگام‌سازی ابری آنی</span>"),typeof window.renderApp=="function"&&window.renderApp()}},window.handleManualAccountSync=window.triggerManualCloudSync,typeof document<"u"&&!window._loginModalDelegationBound&&(window._loginModalDelegationBound=!0,document.addEventListener("click",o=>{if(o.target&&o.target.closest&&o.target.closest("#btn-submit-phone-login, .btn-submit-phone-login")){o.preventDefault(),o.stopPropagation(),typeof window.handlePhoneLoginSubmit=="function"&&window.handlePhoneLoginSubmit();return}if(o.target&&o.target.closest&&o.target.closest("#btn-open-edit-profile-modal, .btn-open-edit-profile-modal")){o.preventDefault(),o.stopPropagation(),typeof window.handleEditProfile=="function"&&window.handleEditProfile();return}if(o.target&&o.target.closest&&o.target.closest("#btn-manual-account-sync, .btn-manual-account-sync")){o.preventDefault(),o.stopPropagation(),typeof window.triggerManualCloudSync=="function"&&window.triggerManualCloudSync();return}if(o.target&&o.target.closest&&o.target.closest("#btn-user-logout, .btn-user-logout")){o.preventDefault(),o.stopPropagation(),typeof window.handleUserLogout=="function"&&window.handleUserLogout();return}},!0)));function Uo(o=!1){try{typeof localStorage<"u"&&localStorage.setItem("pwa_prompt_dismissed","true")}catch(e){console.error("Error saving pwa_prompt_dismissed to localStorage:",e)}if(o&&typeof window<"u"&&(window.deferredPrompt||window.deferredPwaPrompt))try{typeof window.triggerPwaInstall=="function"&&window.triggerPwaInstall()}catch{}typeof window<"u"&&(window.appState&&(window.appState.activeModal=null),typeof window.closeActiveModal=="function"?window.closeActiveModal():typeof window.renderApp=="function"&&window.renderApp())}typeof window<"u"&&(window.dismissPwaModal=Uo);function vn(){if(typeof localStorage<"u"&&localStorage.getItem("pwa_prompt_dismissed"))return typeof window<"u"&&window.appState&&window.appState.activeModal==="pwaInstall"&&(window.appState.activeModal=null),"";const o=typeof navigator<"u"&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,e=typeof window<"u"&&!!(window.deferredPrompt||window.deferredPwaPrompt);return`
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
  `}function Sn(o=1,e={}){const t=[{value:"کنکوری ۱۴۰۵",label:"🎯 کنکوری ۱۴۰۵",desc:"آماده‌سازی برای کنکور سراسری"},{value:"کنکوری ۱۴۰۶",label:"🎯 کنکوری ۱۴۰۶",desc:"آماده‌سازی برای کنکور سراسری"},{value:"کنکوری ۱۴۰۷",label:"🎯 کنکوری ۱۴۰۷",desc:"آماده‌سازی برای کنکور سراسری"},{value:"دوازدهم",label:"📚 پایه دوازدهم",desc:"مدرسه و نهایی"},{value:"یازدهم",label:"📖 پایه یازدهم",desc:"مدرسه و کنکوری"},{value:"دهم",label:"📗 پایه دهم",desc:"مدرسه و تقویت پایه"},{value:"دانشجو",label:"🎓 دانشجوی دانشگاه",desc:"دانشگاهی و آزمون‌های ارشد/دکترا"},{value:"سایر",label:"🌟 سایر / مطالعه آزاد",desc:"یادگیری مهارت و برنامه‌ریزی شخصی"}],n=[{value:"علوم تجربی",label:"🧬 علوم تجربی"},{value:"ریاضی فیزیک",label:"📐 ریاضی و فیزیک"},{value:"علوم انسانی",label:"⚖️ علوم انسانی"},{value:"پزشکی و علوم پزشکی",label:"🩺 پزشکی / پیراپزشکی"},{value:"مهندسی و کامپیوتر",label:"💻 مهندسی و کامپیوتر"},{value:"هنر و معماری",label:"🎨 هنر و معماری"},{value:"زبان‌های خارجی",label:"🌐 زبان‌های خارجی"},{value:"سایر",label:"✨ سایر رشته‌ها"}];return`
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
        `:o===2?`
          <!-- STEP 2: Major & University -->
          <div style="margin-bottom: 20px;">
            <label style="display: block; font-weight: 700; font-size: 0.9rem; color: #e2e8f0; margin-bottom: 8px;">انتخاب رشته تحصیلی:</label>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 16px;">
              ${n.map(i=>`
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
  `}function kn(o){if(!o)return"";const{full_name:e,avatar_url:t,created_at:n,total_focus_minutes:i,routines:a,username:r,field_of_study:s}=o,d=new Date(n).toLocaleDateString("fa-IR",{year:"numeric",month:"long"}),l=Math.floor((i||0)/60),c=e||r||"کاربر پلنکس",g=r?`@${r}`:"",y=s?`<div style="font-size: 0.75rem; color: #a855f7; background: rgba(168,85,247,0.15); padding: 3px 10px; border-radius: 12px; display: inline-block; margin-top: 6px; font-weight: 500;">🎓 ${s}</div>`:"";let f=null;if(o.social_links)try{f=typeof o.social_links=="string"?JSON.parse(o.social_links):o.social_links}catch{}const w=f?`
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
          ${y}
          <div style="font-size: 0.8rem; color: rgba(255,255,255,0.7); margin-top: 6px;">عضویت از: ${d}</div>
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
                      ${u.items.map(m=>`
                        <li>${m.title} <span style="color: #10b981;">(${m.duration_minutes||0} دقیقه)</span></li>
                      `).join("")}
                    </ul>`:'<div style="font-size: 0.75rem; color: rgba(255,255,255,0.3);">بدون آیتم</div>'}
                </div>
              </div>
            `).join("")}
        </div>
      </div>
    </div>
  `}function _n(o,e){const t=p.getCurrentWeek(),n=t?t.id:1,i=p.getHourlyLogs(n),a=`${o}_${e}`,r=i[a]||{},s=p.getCategories(),d={};s.forEach(u=>{d[u.code]=u});const l=p.getCustomSubjects(),c=["زیست‌شناسی","ریاضیات","فیزیک","شیمی","ادبیات","زبان انگلیسی","دین و زندگی","زمین‌شناسی"],g=Array.from(new Set([...c,...l])),y=["شنبه","یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنج‌شنبه","جمعه"],f=d[r.categoryCode],w=f?Pe(f):!0;return`
    <div class="modal-overlay" id="modal-slot-picker" style="backdrop-filter: blur(16px);">
      <div class="modal-card" style="max-width: 580px; max-height: 90vh; overflow-y: auto; background: rgba(15, 23, 42, 0.95); border-color: rgba(99, 102, 241, 0.4);">
        <div class="modal-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px;">
          <div>
            <div class="modal-title" style="color: var(--primary-accent); display: flex; align-items: center; gap: 8px;">
              ⏱️ تخصیص فعالیت: پارت ${e+1} (${$o(e)})
            </div>
            <span style="font-size: 0.8rem; color: var(--text-secondary);">${y[o]} - انتخاب فعالیت نیم ساعته</span>
          </div>
          <button class="btn-close" id="btn-close-slot-modal">✕</button>
        </div>

        <!-- 1. Category Picker Grid -->
        <label class="input-label" style="margin-top: 12px; margin-bottom: 8px; display: block; font-weight: bold; color: white;">
          ۱. انتخاب دسته‌بندی فعالیت:
        </label>
        <div class="category-picker-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin-bottom: 16px;">
          ${s.map(u=>`
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
                ${g.map(u=>`
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
  `}function $n(){const o=p.getCurrentWeek(),e=r=>String(r).replace(/[0-9]/g,s=>"۰۱۲۳۴۵۶۷۸۹"[s]),t=[1404,1405,1406,1407],n=["فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر","دی","بهمن","اسفند"],i=window.pickerViewYear||o.year,a=window.pickerViewMonthIdx||o.monthIdx;return`
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
            ${n.map((r,s)=>{const d=s+1;return`
                <button class="btn-picker-month btn-header-action ${a===d?"btn-primary":""}" data-month="${d}" style="padding: 8px 4px; font-size: 0.82rem; font-weight: bold; border-radius: 10px; text-align: center;">
                  ${r}
                </button>
              `}).join("")}
          </div>
        </div>

        <!-- 3. Week Selector for Selected Month -->
        <div style="margin-bottom: 20px; border-top: 1px solid rgba(255,255,255,0.08); padding-top: 14px;">
          <label style="font-size: 0.85rem; font-weight: bold; color: #38bdf8; display: block; margin-bottom: 10px;">
            ۳. انتخاب هفته در ${n[a-1]} ${e(i)}:
          </label>

          <div style="display: flex; flex-direction: column; gap: 8px;">
            ${Array.from({length:p.getWeeksInMonth(i,a)},(r,s)=>s+1).map(r=>{const s=`${i}_${a}_${r}`,d=p.getWeekObject(i,a,r),l=o.id===s,c=p.hasDataForWeek(s);return`
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
  `}window.handleEditRoomAnnouncement||(window.handleEditRoomAnnouncement=o=>{var n,i;const e=localStorage.getItem("planex_room_announcement_"+o)||((i=(n=window.appState)==null?void 0:n.currentRoom)==null?void 0:i.announcement)||"",t=prompt("📢 پیام مدیریت / متن انگیزشی سالن مطالعه را وارد نمایید:",e);if(t!==null){const a=t.trim();localStorage.setItem("planex_room_announcement_"+o,a),window.appState&&window.appState.currentRoom&&(window.appState.currentRoom.announcement=a),typeof window.renderApp=="function"&&window.renderApp()}});window.handleJoinRoomClick||(window.handleJoinRoomClick=(o,e)=>{const t=p&&typeof p.getProfile=="function"?p.getProfile():{};if((!t.major||!t.target)&&window.appState){window.appState.pendingJoinRoom={id:o,name:e},window.appState.activeModal="joinRoomOnboarding",typeof window.renderApp=="function"&&window.renderApp();return}let n=[];try{n=JSON.parse(localStorage.getItem("planex_my_groups")||"[]")}catch{n=[]}n.some(s=>String(s.id)===String(o))||(n.push({id:o,name:e,emoji:"👥"}),localStorage.setItem("planex_my_groups",JSON.stringify(n)));const i=JSON.parse(localStorage.getItem("planex_user_account")||"{}"),a=i.id||"me_"+Date.now();window.appState&&Array.isArray(window.appState.studyRoomParticipants)&&(window.appState.studyRoomParticipants.some(d=>String(d.id)===String(a))||window.appState.studyRoomParticipants.unshift({id:a,name:t.name||i.full_name||"شما (عضو فعال)",avatar:i.avatar_url||"",gender:t.gender||"پسر",major:t.major||t.field_of_study||"تجربی",target:t.target||t.goal||"کسب رتبه برتر",status:"active",is_studying:!0,focus_minutes:0,today_study_time:0,last_2h_study:120,last_2h_subject:"آماده مطالعه"}));const r=localStorage.getItem("planex_jwt_token");r&&r!=="undefined"&&r!=="null"&&fetch(`${le}/api/rooms/join.php`,{method:"POST",headers:{Authorization:`Bearer ${r}`,"Content-Type":"application/json"},body:JSON.stringify({roomId:o,room_id:o})}).catch(s=>console.warn("Room join API sync:",s)),alert(`👥 شما با موفقیت عضو سالن "${e}" شدید!`),typeof window.renderApp=="function"&&window.renderApp()});window.handleLeaveRoomClick||(window.handleLeaveRoomClick=(o,e)=>{let t=[];try{t=JSON.parse(localStorage.getItem("planex_my_groups")||"[]")}catch{t=[]}t=t.filter(r=>String(r.id)!==String(o)),localStorage.setItem("planex_my_groups",JSON.stringify(t));const i=JSON.parse(localStorage.getItem("planex_user_account")||"{}").id;window.appState&&Array.isArray(window.appState.studyRoomParticipants)&&(window.appState.studyRoomParticipants=window.appState.studyRoomParticipants.filter(r=>String(r.id)!==String(i)));const a=localStorage.getItem("planex_jwt_token");a&&a!=="undefined"&&a!=="null"&&fetch(`${le}/api/rooms/leave.php`,{method:"POST",headers:{Authorization:`Bearer ${a}`,"Content-Type":"application/json"},body:JSON.stringify({roomId:o,room_id:o})}).catch(r=>console.warn("Room leave API sync:",r)),alert(`🚪 شما از سالن "${e}" خارج شدید.`),typeof window.renderApp=="function"&&window.renderApp()});function Tn(o,e,t=[],n=!1,i=null,a=null){var u,m;let r=Array.isArray(t)?[...t]:[],s=e;try{const S=JSON.parse(localStorage.getItem("planex_public_rooms")||"[]").find(k=>String(k.id)===String(o)||String(k.code)===String(o));S&&(S.name||S.title||S.roomName)&&(s=S.name||S.title||S.roomName);const x=JSON.parse(localStorage.getItem("planex_my_groups")||"[]").find(k=>String(k.id)===String(o)||String(k.code)===String(o));x&&(x.name||x.title||x.roomName)&&(s=x.name||x.title||x.roomName)}catch{}if((!s||s===o)&&(s=o?`سالن ${o}`:"سالن مطالعه پلن ما"),r.length===0)try{const b=JSON.parse(localStorage.getItem("planex_cached_room_"+o)||"[]");Array.isArray(b)&&b.length>0&&(r=b)}catch{}const d=JSON.parse(localStorage.getItem("planex_user_account")||"{}"),l=p&&typeof p.getProfile=="function"?p.getProfile():JSON.parse(localStorage.getItem("planex_profile")||"{}"),c=a||d.id||"me";r.findIndex(b=>String(b.id)===String(c)||b.id==="me")===-1&&r.unshift({id:c,name:l.name||d.full_name||"شما (عضو فعال)",avatar:d.avatar_url||"",gender:l.gender||"پسر",major:l.major||l.field_of_study||"تجربی",target:l.target||l.goal||"کسب رتبه برتر",status:"active",is_studying:!0,focus_minutes:0,today_study_time:0,last_2h_study:120,last_2h_subject:"مطالعه عمومی"}),r.length<4&&[{id:"p_1",name:"علی محمدی",major:"تجربی",target:"پزشکی تهران",gender:"پسر",role:"member",status:"active",today_study_time:360,today_test_count:140,last_2h_subject:"زیست‌شناسی"},{id:"p_2",name:"سارا احمدی",major:"ریاضی",target:"مهندسی شریف",gender:"دختر",role:"admin",status:"active",today_study_time:420,today_test_count:180,last_2h_subject:"حسابان"},{id:"p_3",name:"امیر کاظمی",major:"تجربی",target:"دندانپزشکی",gender:"پسر",role:"member",status:"active",today_study_time:270,today_test_count:90,last_2h_subject:"شیمی پایه"},{id:"p_4",name:"مریم حسینی",major:"انسانی",target:"حقوق تهران",gender:"دختر",role:"member",status:"active",today_study_time:310,today_test_count:110,last_2h_subject:"فلسفه و منطق"}].forEach(S=>{r.some(I=>String(I.id)===String(S.id))||r.push(S)});let y="";try{y=localStorage.getItem("planex_room_announcement_"+o)||((m=(u=window.appState)==null?void 0:u.currentRoom)==null?void 0:m.announcement)||""}catch{}let f=[];try{f=JSON.parse(localStorage.getItem("planex_my_groups")||"[]")}catch{f=[]}const w=f.some(b=>String(b.id)===String(o));return`
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
        ${y?`
          <div style="background: rgba(124, 58, 237, 0.08); border: 1px solid rgba(124, 58, 237, 0.25); border-radius: 16px; padding: 12px 14px; margin-bottom: 14px; display: flex; align-items: flex-start; justify-content: space-between; gap: 10px;">
            <div style="display: flex; align-items: flex-start; gap: 8px; flex: 1;">
              <span style="font-size: 1.2rem; line-height: 1;">📌</span>
              <div>
                <div style="font-size: 0.74rem; font-weight: 800; color: #c4b5fd; margin-bottom: 3px;">پیام مدیریت سالن / متن انگیزشی:</div>
                <div style="font-size: 0.8rem; color: #f1f5f9; line-height: 1.5; font-weight: 500;">${y}</div>
              </div>
            </div>
            ${n||w?`
              <button type="button" onclick="event.stopPropagation(); window.handleEditRoomAnnouncement('${o}')" title="ویرایش پیام مدیر" style="background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); color: #c4b5fd; padding: 4px 8px; border-radius: 8px; font-size: 0.68rem; font-weight: 700; cursor: pointer; white-space: nowrap; flex-shrink: 0;">
                ✏️ ویرایش
              </button>
            `:""}
          </div>
        `:n||w?`
          <div style="margin-bottom: 14px; display: flex; justify-content: flex-end;">
            <button type="button" onclick="event.stopPropagation(); window.handleEditRoomAnnouncement('${o}')" style="background: rgba(255,255,255,0.03); border: 1px dashed rgba(124,58,237,0.3); color: #c4b5fd; padding: 6px 12px; border-radius: 10px; font-size: 0.72rem; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 4px;">
              <span>📢</span>
              <span>ثبت پیام انگیزشی / اطلاعیه مدیر</span>
            </button>
          </div>
        `:""}

        <!-- Join & Leave Group Action Button -->
        <div style="margin-bottom: 14px;">
          ${w?`
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
            <span>📋 اعضای حاضر در سالن (${r.length} عضو)</span>
          </h3>
          <span style="font-size: 0.7rem; color: #10b981; font-weight: 700; background: rgba(16,185,129,0.1); padding: 2px 8px; border-radius: 8px;">🟢 بروزرسانی زنده</span>
        </div>

        <!-- Scrollable Member List Container with Major & Goal -->
        <div id="room-members-list" style="max-height: 280px; overflow-y: auto; display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; padding-left: 2px;">
          ${r.map(b=>{const S=String(b.id)===String(c)||b.id==="me",I=b.gender==="دختر"||b.gender==="female"?"👧":"👦",x=String(b.id)===String(i)||b.role==="owner"?"👑 مالک":b.role==="admin"?"⭐ مدیر":"👤 عضو",k=b.major||b.field_of_study||S&&(l.major||l.field_of_study)||"عمومی",A=b.target||b.goal||S&&(l.target||l.goal)||"موفقیت";let P=b.today_study_time||b.focus_minutes||0,M=b.today_test_count||b.tests||0,T=b.last_2h_subject||b.current_subject||b.subject||"مطالعه عمومی";if(S){const O=(new Date().getDay()+1)%7,C=typeof p<"u"&&p.getCurrentWeek?p.getCurrentWeek():null,z=C?C.id:1,B=typeof p<"u"&&p.getHourlyLogs?p.getHourlyLogs(z):{},U=typeof p<"u"&&p.getRecordedTimerToday?p.getRecordedTimerToday():{minutes:0,tests:0};let F=0,L=0,J="مطالعه عمومی";for(let Y=0;Y<48;Y++){const H=B[`${O}_${Y}`];H&&H.categoryCode&&(["ع-س","ع-ک","ع-م","ع-غ","د-خ"].includes(H.categoryCode)&&F++,H.testCount&&(L+=parseInt(H.testCount)||0),H.subject&&(J=H.subject))}P=F*30+(Number(U.minutes)||0),M=L+(U.tests||0),T=J}return`
            <div id="user-card-${b.id}" style="padding: 10px 12px; background: #1f2029; border: 1px solid rgba(255,255,255,0.06); border-radius: 16px; display: flex; justify-content: space-between; align-items: center; gap: 8px;">
              <div style="display: flex; align-items: center; gap: 10px; flex: 1; min-width: 0;">
                <div style="position: relative; flex-shrink: 0;">
                  <div style="width: 40px; height: 40px; border-radius: 50%; background: #16171d; border: 1px solid rgba(255,255,255,0.08); display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
                    ${I}
                  </div>
                  <span style="position: absolute; bottom: 0; right: 0; width: 10px; height: 10px; background: #10b981; border: 2px solid #1f2029; border-radius: 50%;"></span>
                </div>

                <div style="min-width: 0; flex: 1;">
                  <div style="color: white; font-size: 0.84rem; font-weight: 800; display: flex; align-items: center; gap: 6px; margin-bottom: 2px; flex-wrap: wrap;">
                    <span style="color: #10b981; font-size: 0.6rem;">●</span>
                    <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${b.name||"کاربر پلنکس"}</span>
                    <span style="font-size: 0.62rem; background: #16171d; border: 1px solid rgba(255,255,255,0.06); padding: 1px 6px; border-radius: 8px; color: #a1a1aa;">${x}</span>
                    <span style="font-size: 0.62rem; background: rgba(56,189,248,0.1); color: #38bdf8; border: 1px solid rgba(56,189,248,0.25); padding: 1px 6px; border-radius: 8px; font-weight: 700;">${k}</span>
                  </div>

                  <!-- Goal / Target line (Feature 3) -->
                  <div style="font-size: 0.68rem; color: #fbbf24; margin-bottom: 3px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                    🎯 <span style="opacity: 0.9;">${A}</span>
                  </div>

                  <!-- Study Stats line -->
                  <div style="display: flex; flex-wrap: wrap; gap: 8px; font-size: 0.7rem; color: #8e8e9c;">
                    <span style="color: #e4e4e7; font-weight: 700;">⏱️ ${be(P)}</span>
                    <span style="color: #a1a1aa; font-weight: 700;">🎯 ${M} تست</span>
                    <span style="color: #94a3b8;">📚 ${T}</span>
                  </div>
                </div>
              </div>

              ${n&&!S?`
                <div style="display: flex; gap: 4px; flex-shrink: 0;">
                  <button onclick="window.promoteGroupAdmin('${o}', '${b.id}')" style="padding: 3px 6px; font-size: 0.7rem; color: #a1a1aa; border: 1px solid rgba(255,255,255,0.08); background: #16171d; border-radius: 6px; cursor: pointer;" title="ارتقا به مدیر">⭐</button>
                  <button onclick="window.kickGroupMember('${o}', '${b.id}')" style="padding: 3px 6px; font-size: 0.7rem; color: #ef4444; border: 1px solid rgba(239,68,68,0.3); background: #16171d; border-radius: 6px; cursor: pointer;" title="حذف عضو">✕</button>
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
  `}function An(o="create"){const e=o==="join";return`
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
  `}window.closeJoinRoomOnboardingModal||(window.closeJoinRoomOnboardingModal=()=>{const o=typeof state<"u"&&state?state:window.appState;o&&(o.pendingJoinRoom=null,o.activeModal=null),window.appState&&(window.appState.pendingJoinRoom=null,window.appState.activeModal=null),typeof renderApp=="function"?renderApp():typeof window.renderApp=="function"&&window.renderApp()});window.handleSubmitJoinRoomOnboarding||(window.handleSubmitJoinRoomOnboarding=(o,e)=>{var s,d,l,c,g;const t=(d=(s=document.getElementById("input-onboarding-nickname"))==null?void 0:s.value)==null?void 0:d.trim(),n=(l=document.getElementById("input-onboarding-major"))==null?void 0:l.value,i=(g=(c=document.getElementById("input-onboarding-target"))==null?void 0:c.value)==null?void 0:g.trim();if(!t){alert("لطفاً نام یا نام مستعار خود را وارد کنید.");return}let a={};try{a=p&&typeof p.getProfile=="function"?p.getProfile():JSON.parse(localStorage.getItem("planex_user_profile")||"{}")}catch{a={}}a.name=t,a.nickname=t,a.major=n,a.field_of_study=n,a.target=i,a.goal=i,p&&typeof p.setProfile=="function"&&p.setProfile(a),localStorage.setItem("planex_user_profile",JSON.stringify(a));try{const y=JSON.parse(localStorage.getItem("planex_user_account")||"{}");y.full_name=t,localStorage.setItem("planex_user_account",JSON.stringify(y))}catch{}const r=typeof state<"u"&&state?state:window.appState;r&&(r.pendingJoinRoom=null,r.activeModal=null),window.appState&&(window.appState.pendingJoinRoom=null,window.appState.activeModal=null),o&&String(o).startsWith("PLX-")&&typeof window.handleJoinGroupSubmit=="function"?window.handleJoinGroupSubmit(o):typeof window.handleJoinRoomClick=="function"?window.handleJoinRoomClick(o,e):typeof window.joinStudyRoom=="function"?window.joinStudyRoom(o,e):typeof window.renderApp=="function"&&window.renderApp()});function Mn(o=null){const e=p&&typeof p.getProfile=="function"?p.getProfile():{},t=JSON.parse(localStorage.getItem("planex_user_account")||"{}"),n=e.name||e.nickname||t.full_name||"",i=e.major||e.field_of_study||"تجربی",a=e.target||e.goal||"",r=o&&(o.name||o.title||o.roomName)||"سالن مطالعه",s=o&&(o.id||o.code)||"";return`
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

        <form id="form-join-room-onboarding" onsubmit="event.preventDefault(); window.handleSubmitJoinRoomOnboarding('${s}', '${r}');" style="display: flex; flex-direction: column; gap: 12px;">
          
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
  `}function Cn(o=0){const e=typeof o=="number"?o:window.userGuideActiveTab||0,t=[{id:0,icon:"⏰",title:"ماتریس و روتین ۲۴ ساعته"},{id:1,icon:"🎯",title:"هدف‌گذاری و ثبت تست"},{id:2,icon:"🏆",title:"تالار رقابت و لیدربرد"},{id:3,icon:"☁️",title:"همگام‌سازی ابری"}];return`
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
          ${t.map(n=>{const i=e===n.id;return`
              <button onclick="window.switchUserGuideTab(${n.id})"
                      style="display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 4px; padding: 8px 4px; border-radius: 12px; border: 1px solid ${i?"#7c3aed":"transparent"}; background: ${i?"#7c3aed":"transparent"}; color: ${i?"#fff":"var(--text-secondary)"}; cursor: pointer; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: none;">
                <span style="font-size: 1.15rem;">${n.icon}</span>
                <span style="font-size: 0.7rem; font-weight: ${i?"900":"600"}; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 100%;">${n.title.split(" ")[0]}</span>
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
  `}const Fo=["📚","📖","📝","🔬","🧪","📐","💻","👨‍🏫","👥","☕","😴","🏃","🧘","🚿","💼","🎮","🍎","🧹","🎨","🎵"];window.activityModalState={isEditing:!1,code:null,title:"",group:"علمی",isStudy:!0,color:Le[0],icon:"📚"};window.openActivityModal=(o=null)=>{const e=p.getCategories();if(o){const t=e.find(n=>n.code===o);if(t){const n=Pe(t);window.activityModalState={isEditing:!0,code:t.code,title:t.title||"",group:t.group||(n?"علمی":"غیرعلمی"),isStudy:n,color:t.color||Le[0],icon:t.icon||(n?"📚":"☕")}}}else{const t=it(e);window.activityModalState={isEditing:!1,code:null,title:"",group:"علمی",isStudy:!0,color:t,icon:"📚"}}if(window.appState)window.appState.activeModal="activity",typeof window.renderApp=="function"&&window.renderApp();else{const t=document.getElementById("modal-activity-editor");t&&(t.style.display="flex")}};window.openNonStudyActivityModal=()=>{const o=p.getCategories(),e=it(o);if(window.activityModalState={isEditing:!1,code:null,title:"",group:"غیرعلمی",isStudy:!1,color:e,icon:"☕"},window.appState)window.appState.activeModal="activity",typeof window.renderApp=="function"&&window.renderApp();else{const t=document.getElementById("modal-activity-editor");t&&(t.style.display="flex")}};window.closeActivityModal=()=>{if(window.appState&&window.appState.activeModal==="activity")window.appState.activeModal=null,typeof window.renderApp=="function"&&window.renderApp();else{const o=document.getElementById("modal-activity-editor");o&&(o.style.display="none")}};window.setActivityModalType=o=>{window.activityModalState.isStudy=!!o,window.activityModalState.group=o?"علمی":"غیرعلمی",window.activityModalState.isEditing||(window.activityModalState.icon=o?"📚":"☕");const e=document.getElementById("act-type-study-btn"),t=document.getElementById("act-type-nonstudy-btn");e&&t&&(o?(e.classList.add("active-type-selected"),e.style.borderColor="#38bdf8",e.style.background="rgba(56, 189, 248, 0.15)",e.style.boxShadow="0 0 14px rgba(56, 189, 248, 0.3)",t.classList.remove("active-type-selected"),t.style.borderColor="rgba(255, 255, 255, 0.1)",t.style.background="rgba(255, 255, 255, 0.03)",t.style.boxShadow="none"):(t.classList.add("active-type-selected"),t.style.borderColor="#f59e0b",t.style.background="rgba(245, 158, 11, 0.15)",t.style.boxShadow="0 0 14px rgba(245, 158, 11, 0.3)",e.classList.remove("active-type-selected"),e.style.borderColor="rgba(255, 255, 255, 0.1)",e.style.background="rgba(255, 255, 255, 0.03)",e.style.boxShadow="none"))};window.setActivityModalColor=o=>{window.activityModalState.color=o,document.querySelectorAll("#modal-activity-editor .act-color-btn").forEach(e=>{e.dataset.color===o?(e.style.borderColor="#ffffff",e.style.transform="scale(1.18)",e.style.boxShadow="0 0 10px rgba(255,255,255,0.6)"):(e.style.borderColor="transparent",e.style.transform="scale(1)",e.style.boxShadow="none")})};window.setActivityModalIcon=o=>{window.activityModalState.icon=o,document.querySelectorAll("#modal-activity-editor .act-icon-btn").forEach(e=>{e.dataset.icon===o?(e.style.borderColor="var(--primary-accent, #38bdf8)",e.style.background="rgba(56, 189, 248, 0.2)"):(e.style.borderColor="rgba(255,255,255,0.08)",e.style.background="rgba(255,255,255,0.03)")})};window.saveActivityModal=()=>{const o=document.getElementById("activity-modal-title"),e=o?o.value.trim():window.activityModalState.title;if(!e){alert("لطفاً عنوان فعالیت را وارد نمایید."),o&&o.focus();return}const{isEditing:t,code:n,isStudy:i,color:a,icon:r,group:s}=window.activityModalState;p.saveCategory({code:t?n:"cust_"+Date.now(),title:e,group:i?"علمی":s||"غیرعلمی",isStudy:!!i,color:a||Le[0],icon:r||(i?"📚":"☕")}),window.closeActivityModal(),typeof window.renderApp=="function"&&window.renderApp()};function In(){const o=window.activityModalState||{isEditing:!1,title:"",isStudy:!0,color:Le[0],icon:"📚"},e=o.isStudy!==void 0?o.isStudy===!0:!0;return`
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
            ${Le.map((n,i)=>{const a=(o.color||"").toUpperCase()===n.toUpperCase()||!o.color&&i===0;return`
                <button type="button" 
                        class="act-color-btn" 
                        data-color="${n}"
                        onclick="window.setActivityModalColor('${n}')"
                        title="رنگ ${i+1}"
                        style="width: 100%; aspect-ratio: 1; border-radius: 50%; background: ${n}; border: 2.5px solid ${a?"#ffffff":"transparent"}; transform: ${a?"scale(1.18)":"scale(1)"}; ${a?"box-shadow: 0 0 10px rgba(255,255,255,0.6);":""} cursor: pointer; transition: transform 0.15s ease, border-color 0.15s ease; outline: none; padding: 0;">
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
            ${Fo.map(n=>{const i=o.icon===n;return`
                <button type="button" 
                        class="act-icon-btn" 
                        data-icon="${n}"
                        onclick="window.setActivityModalIcon('${n}')"
                        style="min-width: 38px; height: 38px; border-radius: 10px; background: ${i?"rgba(56, 189, 248, 0.2)":"rgba(255,255,255,0.03)"}; border: 1.5px solid ${i?"var(--primary-accent, #38bdf8)":"rgba(255,255,255,0.08)"}; font-size: 1.2rem; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.15s;">
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
  `}const Ne=o=>String(o).replace(/\d/g,e=>"۰۱۲۳۴۵۶۷۸۹"[e]),Je=o=>String(o??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Ho=[{id:"store_konkur_bio",title:"زیست‌شناسی کنکور",count:320,price:"به‌زودی"},{id:"store_eng_vocab",title:"لغات زبان انگلیسی کنکور",count:504,price:"به‌زودی"},{id:"store_chem_formula",title:"فرمول‌های شیمی",count:150,price:"به‌زودی"}],ke=window.flashcardsViewState||(window.flashcardsViewState={studyDeck:null,queue:[],index:0,flipped:!1,reviewed:0});function ao(){const o=p.getFlashcards()||[],e=Date.now(),t=new Map;return o.forEach(n=>{const i=n.deck||"عمومی";t.has(i)||t.set(i,{name:i,total:0,due:0,boxes:{1:0,2:0,3:0,4:0,5:0}});const a=t.get(i),r=Math.min(5,Math.max(1,n.box||1));a.total++,a.boxes[r]++,(!n.nextReviewDate||n.nextReviewDate<=e)&&a.due++}),Array.from(t.values())}function Wo(o){const e=Date.now(),t=(p.getFlashcards()||[]).filter(i=>o==="__all__"||(i.deck||"عمومی")===o),n=t.filter(i=>!i.nextReviewDate||i.nextReviewDate<=e);return(n.length?n:t).map(i=>i.id)}function Yo(o,e){const t=["#ef4444","#f97316","#eab308","#22c55e","#6366f1"];return`
    <div style="display:flex; gap:6px; margin-top:10px;">
      ${[1,2,3,4,5].map(n=>`
        <div style="flex:1; text-align:center;">
          <div style="height:34px; background:rgba(255,255,255,0.05); border-radius:8px; display:flex; align-items:flex-end; overflow:hidden;">
            <div style="width:100%; height:${e?Math.round(o[n]/e*100):0}%; background:${t[n-1]}; opacity:0.8;"></div>
          </div>
          <div style="font-size:0.62rem; color:#8e8e9c; margin-top:3px;">خانه ${Ne(n)}: ${Ne(o[n])}</div>
        </div>`).join("")}
    </div>`}function qo(){const o=ao(),e=p.getLeitnerStats();return`
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
              <div style="color:#f8fafc; font-weight:800; font-size:0.9rem;">${Je(t.name)}</div>
              <div style="color:#8e8e9c; font-size:0.7rem; margin-top:2px;">${Ne(t.total)} کارت • ${Ne(t.due)} آماده مرور</div>
            </div>
            <button onclick="window.fcStartStudy(this.dataset.deck)" data-deck="${Je(t.name)}"
              style="padding:8px 14px; border-radius:12px; border:1px solid rgba(167,139,250,0.4); background:rgba(167,139,250,0.15); color:#c4b5fd; font-weight:700; font-size:0.78rem; cursor:pointer;">مرور کارت‌ها</button>
          </div>
          <div style="margin-top:10px; height:6px; border-radius:4px; background:rgba(255,255,255,0.06); overflow:hidden;">
            <div style="width:${n}%; height:100%; background:linear-gradient(90deg,#22c55e,#6366f1);"></div>
          </div>
          <div style="font-size:0.65rem; color:#8e8e9c; margin-top:4px;">تسلط: ${Ne(n)}٪</div>
          ${Yo(t.boxes,t.total)}
        </div>`}).join("")}

      <h3 style="color:#cbd5e1; font-size:0.9rem; margin:20px 0 10px;">فروشگاه دسته‌ها</h3>
      ${Ho.map(t=>`
        <div style="background:#16171d; border:1px dashed rgba(255,255,255,0.1); border-radius:18px; padding:14px 16px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center; opacity:0.85;">
          <div>
            <div style="color:#f8fafc; font-weight:700; font-size:0.88rem;">🔒 ${Je(t.title)}</div>
            <div style="color:#8e8e9c; font-size:0.7rem; margin-top:2px;">${Ne(t.count)} کارت</div>
          </div>
          <button disabled style="padding:8px 14px; border-radius:12px; border:1px solid rgba(255,255,255,0.1); background:rgba(255,255,255,0.04); color:#8e8e9c; font-size:0.75rem;">${Je(t.price)}</button>
        </div>`).join("")}
    </div>`}function Vo(){const o=p.getFlashcards()||[],e=ke.queue[ke.index],t=o.find(a=>a.id==e),n=`
    <div style="display:flex; justify-content:space-between; align-items:center; padding:16px;">
      <button onclick="window.fcExitStudy()" style="background:none; border:none; color:#cbd5e1; font-size:1.3rem; cursor:pointer;">✕</button>
      <div style="color:#8e8e9c; font-size:0.8rem;">${t?`${Ne(ke.index+1)} / ${Ne(ke.queue.length)}`:""}</div>
    </div>`;if(!t)return`
      <div style="position:fixed; inset:0; z-index:9000; background:#0b0c10; display:flex; flex-direction:column;">
        ${n}
        <div style="flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; color:#f8fafc; text-align:center; padding:20px;">
          <div style="font-size:3rem;">🎉</div>
          <div style="font-weight:800; margin-top:10px;">مرور تمام شد!</div>
          <div style="color:#8e8e9c; font-size:0.8rem; margin-top:4px;">${Ne(ke.reviewed)} کارت مرور شد.</div>
          <button onclick="window.fcExitStudy()" style="margin-top:20px; padding:12px 24px; border:none; border-radius:14px; background:#6366f1; color:white; font-weight:700; cursor:pointer;">بازگشت به دسته‌ها</button>
        </div>
      </div>`;const i="position:absolute; inset:0; backface-visibility:hidden; -webkit-backface-visibility:hidden; border-radius:24px; display:flex; flex-direction:column; align-items:center; justify-content:center; padding:28px; text-align:center; line-height:1.9; overflow:auto;";return`
    <div style="position:fixed; inset:0; z-index:9000; background:#0b0c10; display:flex; flex-direction:column;">
      ${n}
      <div style="flex:1; display:flex; align-items:center; justify-content:center; padding:16px; perspective:1200px;">
        <div onclick="window.fcFlip()" style="position:relative; width:100%; max-width:520px; height:min(60vh,420px); cursor:pointer; transform-style:preserve-3d; transition:transform 0.6s; transform:rotateY(${ke.flipped?180:0}deg);">
          <div style="${i} background:#16171d; border:1px solid rgba(167,139,250,0.3);">
            <div style="font-size:0.7rem; color:#a78bfa; margin-bottom:12px;">${Je(t.deck||"عمومی")} • خانه ${Ne(t.box||1)}</div>
            <div style="color:#f8fafc; font-size:1.1rem; font-weight:700;">${Je(t.question)}</div>
            <div style="font-size:0.7rem; color:#8e8e9c; margin-top:18px;">برای دیدن پاسخ ضربه بزنید</div>
          </div>
          <div style="${i} background:#1a1530; border:1px solid rgba(34,197,94,0.35); transform:rotateY(180deg);">
            <div style="font-size:0.7rem; color:#22c55e; margin-bottom:12px;">پاسخ</div>
            <div style="color:#f8fafc; font-size:1rem;">${Je(t.answer)}</div>
          </div>
        </div>
      </div>
      <div style="display:flex; gap:12px; padding:16px 16px 28px; max-width:552px; width:100%; margin:0 auto; box-sizing:border-box;">
        <button onclick="window.fcAnswer(false)" style="flex:1; padding:16px; border-radius:16px; border:1px solid rgba(239,68,68,0.4); background:rgba(239,68,68,0.15); color:#fca5a5; font-weight:800; font-size:0.95rem; cursor:pointer;">فراموش کردم</button>
        <button onclick="window.fcAnswer(true)" style="flex:1; padding:16px; border-radius:16px; border:1px solid rgba(34,197,94,0.4); background:rgba(34,197,94,0.15); color:#86efac; font-weight:800; font-size:0.95rem; cursor:pointer;">بلد بودم</button>
      </div>
    </div>`}function Ko(){return`<div id="flashcards-view">${ke.studyDeck?Vo():qo()}</div>`}function tt(){const o=document.getElementById("flashcards-view");o?o.outerHTML=Ko():typeof window.renderApp=="function"&&window.renderApp()}window.fcStartStudy=function(o){ke.studyDeck=o,ke.queue=Wo(o),ke.index=0,ke.flipped=!1,ke.reviewed=0,tt()};window.fcExitStudy=function(){ke.studyDeck=null,tt()};window.fcFlip=function(){ke.flipped=!ke.flipped,tt()};window.fcAnswer=function(o){const e=ke.queue[ke.index];if(e!==void 0){p.reviewFlashcard(e,o),ke.reviewed++,ke.index++,ke.flipped=!1;try{typeof window.triggerActionDrivenPush=="function"&&window.triggerActionDrivenPush()}catch{}}tt()};window.updateLeitnerUI=window.updateLeitnerUI||function(){document.getElementById("flashcards-view")&&!ke.studyDeck&&tt()};window.fcCloseNewCardModal=function(){const o=document.getElementById("fc-new-card-modal");o&&o.remove()};window.fcOpenNewCardModal=function(){window.fcCloseNewCardModal();const o=ao().map(i=>i.name),e="width:100%; box-sizing:border-box; background:#0b0c10; border:1px solid rgba(255,255,255,0.12); color:#f8fafc; border-radius:12px; padding:10px 12px; font-size:0.85rem; font-family:inherit; margin-bottom:12px;",t="display:block; color:#cbd5e1; font-size:0.75rem; font-weight:700; margin-bottom:6px;",n=document.createElement("div");n.id="fc-new-card-modal",n.style.cssText="position:fixed; inset:0; z-index:10000; background:rgba(0,0,0,0.65); display:flex; align-items:center; justify-content:center; padding:16px; direction:rtl;",n.innerHTML=`
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
      <input id="fc-new-category" list="fc-deck-options" placeholder="عمومی" value="${Je(o[0]||"")}" style="${e}">
      <datalist id="fc-deck-options">${o.map(i=>`<option value="${Je(i)}"></option>`).join("")}</datalist>
      <div id="fc-new-error" style="color:#fca5a5; font-size:0.72rem; min-height:1em; margin-bottom:8px;"></div>
      <button type="submit" style="width:100%; padding:12px; border:none; border-radius:14px; background:linear-gradient(135deg,#6366f1,#a855f7); color:white; font-weight:800; font-size:0.9rem; cursor:pointer;">ذخیره کارت</button>
    </form>`,n.addEventListener("click",i=>{i.target===n&&window.fcCloseNewCardModal()}),n.querySelector("form").addEventListener("submit",i=>{i.preventDefault(),window.fcSubmitNewCard()}),document.body.appendChild(n),setTimeout(()=>{var i;return(i=document.getElementById("fc-new-front"))==null?void 0:i.focus()},30)};window.fcSubmitNewCard=function(){var i,a,r;const o=(((i=document.getElementById("fc-new-front"))==null?void 0:i.value)||"").trim(),e=(((a=document.getElementById("fc-new-back"))==null?void 0:a.value)||"").trim(),t=(((r=document.getElementById("fc-new-category"))==null?void 0:r.value)||"").trim()||"عمومی";if(!o||!e){const s=document.getElementById("fc-new-error");s&&(s.textContent="لطفاً سوال و پاسخ را وارد کنید.");return}if(p.addFlashcard(o,e,t)){try{typeof window.triggerActionDrivenPush=="function"&&window.triggerActionDrivenPush()}catch{}window.fcCloseNewCardModal(),typeof window.showToast=="function"&&window.showToast("کارت جدید اضافه شد","✅"),tt()}};export{Mn as A,kn as B,Cn as C,dn as D,wn as E,In as F,on as G,nn as H,Tt as I,an as J,rn as K,sn as L,ln as M,cn as N,xo as O,Ee as P,ho as Q,To as R,un as S,fn as T,gn as U,mt as a,yn as b,at as c,p as d,mn as e,Lo as f,fe as g,Ko as h,Do as i,tn as j,yo as k,_ as l,bn as m,_n as n,$n as o,pn as p,vn as q,No as r,xn as s,_o as t,Xe as u,hn as v,Lt as w,Sn as x,Tn as y,An as z};
