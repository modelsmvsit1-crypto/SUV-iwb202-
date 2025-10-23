// للتحقق من صحة نموذج إضافة التطبيق
function validateForm() {
  const name = document.getElementById("appName").value.trim();
  const company = document.getElementById("companyName").value.trim();
  const website = document.getElementById("website").value.trim();
  const nameRegex = /^[A-Za-z]+$/;
  if (!nameRegex.test(name)) {alert("اسم التطبيق يجب أن يكون أحرف إنجليزية فقط بدون فراغات."); return false;}
  if (!nameRegex.test(company)) {alert("اسم الشركة يجب أن يكون أحرف إنجليزية فقط بدون فراغات."); return false;}
  if (!website.startsWith("http")) {alert("الرجاء إدخال موقع إلكتروني صحيح يبدأ بـ http أو https."); return false;}
  alert("تم إضافة التطبيق بنجاح!");
  window.location.href = "apps.html";
  return false;
}
let applications = [
    {
        name: "ChatGPT",
        company: "OpenAI",
        field: "Education",
        free: "نعم",
        website: "https://chat.openai.com",
        description: "مساعد ذكي للدردشة والإجابة على الأسئلة",
        logo: "media/images/chatgpt.png",
        audio: "media/Audio/ChatGPT-Voice.mp3",
    },

    {
        name: "Grok",
        company: "Midjourney Inc",
        field: "Design",
        free: "نعم",
        website: "https://grok.com/",
        description: "تطبيق لإنشاء الصور باستخدام الذكاء الاصطناعي",
        logo: "media/images/Grok.webp",
        video: "media/Videos/Grok 4.mp4",
       
    },
    
    {
        name: "Grammarly",
        company: "Grammarly Inc",
        field: "Writing",
        free: "نعم",
        website: "https://www.grammarly.com",
        description: "مساعد كتابة يحسن الجمل ويصحح الأخطاء",
        logo: "media/images/grammarly.png",
        video:"media/Videos/Grammarly.mp4",
        
    },
    {
    
        name: "Copilot",
        company: "Microsoft Store",
        field: "Design",
        free: "لا",
        website: "https://copilot.microsoft.com/",
        description: "منشئ صور من النصوص باستخدام الذكاء الاصطناعي",
        logo: "media/images/Copilot.png",
        video:"media/Videos/ Copilot.mp4",
    },
    {
        name: "Google Assistant",
        company: "Google",
        field: "Productivity",
        free: "نعم",
        website: "https://assistant.google.com",
        description: "مساعد شخصي ذكي للمساعدة في المهام اليومية",
        logo: "media/images/Google-Assistant.png",
        video:"media/Videos/GOOGLE ASSISTANT.mp4",
    },
   
    {
        name: "Notion AI",
        company: "Notion",
        field: "Productivity",
        free: "لا",
        website: "https://www.notion.so/product/ai",
        description: "مساعد ذكي مدمج في منصة Notion للمساعدة في الكتابة والتنظيم",
        logo: "media/images/notion.png",
        video:"media/Videos/Notion AI.mp4",
    }
];





$(document).ready(function() {
    initializeApplications();
    setupEventHandlers();
});

function initializeApplications() {
    const storedApps = localStorage.getItem('aiApplications');

    if (storedApps) {
        applications = JSON.parse(storedApps);
    }
    displayApplications();
}

function displayApplications() {
    const tbody = $('#appsTable tbody');
    tbody.empty();

    applications.forEach((app, index) => {
        const row = `
            <tr>
                <td>${app.name}</td>
                <td>${app.company}</td>
                <td>${app.field}</td>
                <td>${app.free}</td>
                <td>
                    <input type="checkbox" class="details-checkbox" data-index="${index}">
                </td>
            </tr>
            <tr class="details-row" id="details-${index}" style="display: none;">
                <td colspan="5">
                    <!-- محتوى التفاصيل -->
                    <div class="app-details">
                <!-- الموقع أولاً -->
                <p style="direction: rtl; text-align: right;"><strong>الموقع الإلكتروني:</strong> 
                    <a href="${app.website}" target="_blank" style="direction:ltr; text-align:left; display:inline-block;">
                     ${app.website}
                     </a>
                 </p>
                <!-- الشرح المختصر -->
                <p style="direction: rtl; text-align: right;"><strong>الوصف:</strong> ${app.description}</p>
                 <!-- flex container بدون direction: rtl -->
                  <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-top:15px;">


                 <!-- الفيديو + الصوت (اليسار) -->
                  <div style="flex:1; display:flex; flex-direction:column; gap:10px; text-align:left;">
                  ${app.video ? `<video controls style="max-width:100%;">
                    <source src="${app.video}" type="video/mp4"> متصفحك لا يدعم الفيديو </video>` : ''}

                  ${app.audio ? `<audio controls style="width:100%;"> 
                    <source src="${app.audio}" type="audio/mp3"> متصفحك لا يدعم الصوت </audio>` : ''}
        </div>

        <!-- اللوجو (اليمين) -->
        <div style="flex:1; text-align:right;">
            <img src="${app.logo}" alt="${app.name}" style="max-width:150px;" 
                 onerror="this.src='https://via.placeholder.com/100x100?text=LOGO'">
        </div>
    </div>
</div>

                </td>
            </tr>
        `;
        tbody.append(row);
    });

    // إظهار/إخفاء التفاصيل
    $('.details-checkbox').on('change', function() {
        const index = $(this).data('index');
        $('#details-' + index).toggle($(this).is(':checked'));
    });
}


// يمكن إضافة أي أحداث إضافية هنا
function setupEventHandlers() {
    // placeholder
}