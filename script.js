// AI Command Center State (Traditional Chinese)
const state = {
    currentUser: 'All', // Internal key: 'All', 'Librarian', etc.
    // Display names mapping
    agentDisplayNames: {
        'Librarian': '知識長',
        'Producer': '製作人',
        'CTO': '技術長',
        'Coach': '副教練'
    },
    agents: ['Librarian', 'Producer', 'CTO', 'Coach'],
    tasks: [
        {
            id: '-9113579298198695597',
            title: '階段一：專案初始化與協議建立 (已完成)',
            description: '階段一：專案初始化與協議建立 (已完成)',
            tags: ["System"],
            status: 'success',
            user: 'Librarian',
            timestamp: '已完成'
        },
        {
            id: '2393669087397191351',
            title: '階段二：Axton 影片觀點分析 (已完成)',
            description: '階段二：Axton 影片觀點分析 (已完成)',
            tags: ["System"],
            status: 'success',
            user: 'Librarian',
            timestamp: '已完成'
        },
        {
            id: '-870982574664453572',
            title: '階段三：2026 戰略定錨 (已完成)',
            description: '階段三：2026 戰略定錨 (已完成)',
            tags: ["System"],
            status: 'success',
            user: 'Librarian',
            timestamp: '已完成'
        },
        {
            id: '-5859603692513828761',
            title: '階段四：核心服務模組建置 (已完成 - 模組一、模組二、模組三設計)',
            description: '階段四：核心服務模組建置 (已完成 - 模組一、模組二、模組三設計)',
            tags: ["System"],
            status: 'success',
            user: 'Librarian',
            timestamp: '已完成'
        },
        {
            id: '4685271566937567634',
            title: '階段五：實際案例試跑 (已完成 - 驗證通過，轉入維運)',
            description: '階段五：實際案例試跑 (已完成 - 驗證通過，轉入維運)',
            tags: ["System"],
            status: 'success',
            user: 'Librarian',
            timestamp: '已完成'
        },
        {
            id: '-3580093680470945298',
            title: '階段六：系統視覺化與互動介面 (已完成 - FastAPI Web App)',
            description: '階段六：系統視覺化與互動介面 (已完成 - FastAPI Web App)',
            tags: ["System"],
            status: 'success',
            user: 'Librarian',
            timestamp: '已完成'
        },
        {
            id: '7549490600365783031',
            title: '階段七：全通路整合 (Omnichannel) (已完成)',
            description: '階段七：全通路整合 (Omnichannel) (已完成 - Telegram & LINE 雙棲整合成功)',
            tags: ["System"],
            status: 'success',
            user: 'Librarian',
            timestamp: '已完成'
        },
        {
            id: 'gce-deployment-2026',
            title: 'GCE 雲端 24/7 穩定運行',
            description: 'GCE VM 部署完成，包含每日 03:00 自動備份與 Systemd 自動重啟機制。',
            tags: ["System"],
            status: 'success',
            user: 'CTO',
            timestamp: '已完成'
        },
        {
            id: 'line-rich-menu-2026',
            title: 'LINE 圖文選單 (Rich Menu)',
            description: '部署 6 格大型圖文選單，包含晨間簡報、AI 新聞與系統狀態快速鍵。',
            tags: ["System"],
            status: 'success',
            user: 'Coach',
            timestamp: '已完成'
        },
        {
            id: 'tg-menu-keyboard-2026',
            title: 'Telegram 快捷選單整合',
            description: '完成 Telegram Slash Commands 與常駐 Reply Keyboard 佈置，操作體驗與 LINE 同步。',
            tags: ["System"],
            status: 'success',
            user: 'Coach',
            timestamp: '已完成'
        },
        {
            id: 'dual-model-backup-2026',
            title: '雙模型備援系統',
            description: '整合 Gemini 1.5 Flash 與 GPT-4o 雙模型，確保服務高可用性。',
            tags: ["System"],
            status: 'success',
            user: 'CTO',
            timestamp: '已完成'
        },
        {
            id: 'rag-knowledge-base-idea',
            title: 'Idea: RAG 知識庫擴充',
            description: '匯入 Heptabase 與過往課程逐字稿，建立教練專屬的向量檢索大腦。',
            tags: ["System"],
            status: 'knowledge',
            user: 'Librarian',
            timestamp: '規劃中'
        },
        {
            id: 'voice-interaction-idea',
            title: 'Idea: 語音雙向對話實作',
            description: '整合 Whisper 與 TTS，實現全語音操作阿爪的數位遊牧場景。',
            tags: ["System"],
            status: 'knowledge',
            user: 'Coach',
            timestamp: '規劃中'
        },
        {
            id: '6812751748375113036',
            title: 'New Skill',
            description: 'New Skill: 晨間簡報官 (Morning Briefing) 上線。整合 Google Calendar, Open-Meteo 天氣與科技新聞摘要。',
            tags: ["System"],
            status: 'success',
            user: 'Producer',
            timestamp: '已完成'
        },
        {
            id: '-7747110667759613369',
            title: 'Schedule',
            description: 'Schedule: 每日 07:00 自動發送。',
            tags: ["System"],
            status: 'success',
            user: 'Librarian',
            timestamp: '已完成'
        },
        {
            id: '-6947681998427606347',
            title: 'Manual Trigger',
            description: 'Manual Trigger: `uv run Skills/morning-brief/main.py`',
            tags: ["System"],
            status: 'success',
            user: 'Librarian',
            timestamp: '已完成'
        },
        {
            id: '-8330819997433467940',
            title: 'Format',
            description: 'Format: 純文字 (No Markdown)',
            tags: ["System"],
            status: 'success',
            user: 'Librarian',
            timestamp: '已完成'
        },
        {
            id: '761127559869282915',
            title: 'New Skill',
            description: 'New Skill: 語音筆記整理 (Voice Note) 上線。支援 Telegram 語音訊息自動轉錄與 Heptabase/Markdown 格式整理。',
            tags: ["System"],
            status: 'success',
            user: 'Librarian',
            timestamp: '已完成'
        },
    ]
};

// DOM Elements Mapped to New Columns
const columns = {
    knowledge: document.querySelector('.kanban-column:nth-child(1) .column-body'),
    content: document.querySelector('.kanban-column:nth-child(2) .column-body'),
    devops: document.querySelector('.kanban-column:nth-child(3) .column-body'),
    success: document.querySelector('.kanban-column:nth-child(4) .column-body')
};

// Render Functions
function renderBoard() {
    // Clear all columns
    Object.values(columns).forEach(col => col.innerHTML = '');

    state.tasks.forEach(task => {
        // Filter logic
        if (state.currentUser !== 'All' && task.user !== state.currentUser) return;

        const card = createCardElement(task);

        // Map status to column
        let targetCol = columns[task.status];
        if (targetCol) targetCol.appendChild(card);
    });

    updateStats();
    checkEmptyStates();
    updateFilterButtons();
}

function createCardElement(task) {
    const el = document.createElement('div');
    el.className = 'task-card';
    el.draggable = true;
    el.dataset.id = task.id;

    // Styling based on Tag/Agent
    let dotClass = 'gray';
    let icon = 'ri-file-list-line';
    let tagClass = 'default';

    // Role display Logic
    let roleDisplay = state.agentDisplayNames[task.user] || task.user;

    if (task.user === 'Librarian') { dotClass = 'blue'; icon = 'ri-book-read-line'; tagClass = 'knowledge'; }
    if (task.user === 'Producer') { dotClass = 'purple'; icon = 'ri-quill-pen-line'; tagClass = 'content'; }
    if (task.user === 'CTO') { dotClass = 'red'; icon = 'ri-terminal-box-line'; tagClass = 'devops'; }
    if (task.user === 'Coach') { dotClass = 'orange'; icon = 'ri-user-heart-line'; tagClass = 'success'; }

    el.innerHTML = `
        <div class="card-header">
            <span class="status-dot ${dotClass}"></span>
            <h4>${task.title}</h4>
        </div>
        <p class="description">${task.description}</p>
        <div class="card-footer">
            <span class="tag ${tagClass}"><i class="${icon}"></i> ${roleDisplay}</span>
            <span class="timestamp">${task.timestamp}</span>
        </div>
    `;

    // Drag Events
    el.addEventListener('dragstart', (e) => {
        el.classList.add('dragging');
        e.dataTransfer.setData('text/plain', task.id);
        e.dataTransfer.effectAllowed = 'move';
    });

    el.addEventListener('dragend', () => {
        el.classList.remove('dragging');
    });

    return el;
}

function updateStats() {
    const total = state.tasks.length;
    const knowledgeCount = state.tasks.filter(t => t.status === 'knowledge').length;
    const contentCount = state.tasks.filter(t => t.status === 'content').length;

    // Update Header Counts
    document.querySelectorAll('.column-header .count').forEach((span, index) => {
        let count = 0;
        if (index === 0) count = knowledgeCount;
        if (index === 1) count = contentCount;
        if (index === 2) count = state.tasks.filter(t => t.status === 'devops').length;
        if (index === 3) count = state.tasks.filter(t => t.status === 'success').length;
        span.textContent = count;
    });

    // Update Top Stats
    const statsValues = document.querySelectorAll('.stat-item .value');
    statsValues[0].textContent = total; // This Week
    statsValues[1].textContent = state.tasks.filter(t => t.status === 'knowledge').length; // Inputs
    statsValues[2].textContent = state.tasks.filter(t => t.status === 'content').length; // Outputs

    const completed = state.tasks.filter(t => t.timestamp === '已完成').length;
    const rate = total === 0 ? 0 : Math.round(((completed) / total) * 100);
    document.querySelector('.rate-value').textContent = `${rate}%`;
}

function checkEmptyStates() {
    Object.values(columns).forEach(col => {
        if (col.children.length === 0) {
            col.innerHTML = '<div class="empty-state">系統待命</div>';
        }
    });
}

function updateFilterButtons() {
    const container = document.querySelector('.filters');
    container.innerHTML = ''; // Rebuild

    const allBtn = document.createElement('button');
    allBtn.className = `filter-btn ${state.currentUser === 'All' ? 'active' : ''}`;
    allBtn.textContent = '全系統';
    allBtn.onclick = () => { state.currentUser = 'All'; renderBoard(); };
    container.appendChild(allBtn);

    state.agents.forEach(agent => {
        const btn = document.createElement('button');
        btn.className = `filter-btn ${state.currentUser === agent ? 'active' : ''}`;
        btn.textContent = state.agentDisplayNames[agent]; // Use Chinese Name
        btn.onclick = () => { state.currentUser = agent; renderBoard(); };
        container.appendChild(btn);
    });

    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown';
    dropdown.innerHTML = '所有專案 <i class="ri-arrow-down-s-line"></i>';
    container.appendChild(dropdown);
}

// Drag & Drop Logic
document.querySelectorAll('.kanban-column').forEach(column => {
    column.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const afterElement = getDragAfterElement(column.querySelector('.column-body'), e.clientY);
        const draggable = document.querySelector('.dragging');
        const body = column.querySelector('.column-body');

        const emptyState = body.querySelector('.empty-state');
        if (emptyState) emptyState.remove();

        if (afterElement == null) {
            body.appendChild(draggable);
        } else {
            body.insertBefore(draggable, afterElement);
        }
    });

    column.addEventListener('drop', (e) => {
        e.preventDefault();
        const id = parseInt(e.dataTransfer.getData('text/plain'));
        const task = state.tasks.find(t => t.id === id);

        // Map column title to status
        const colTitle = column.querySelector('.column-header .title').textContent.trim();

        // This mapping must match HTML titles exactly (Traditional Chinese)
        if (colTitle.includes('知識收件匣')) task.status = 'knowledge';
        else if (colTitle.includes('內容工廠')) task.status = 'content';
        else if (colTitle.includes('技術維運')) task.status = 'devops';
        else if (colTitle.includes('客戶成功')) task.status = 'success';

        renderBoard();
    });
});

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.task-card:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Add Task Button
document.querySelector('.btn-primary').addEventListener('click', () => {
    const title = prompt("新增指令標題:");
    if (title) {
        // Simple round-robin or default assignment
        const agent = state.currentUser === 'All' ? 'Librarian' : state.currentUser;

        state.tasks.push({
            id: Date.now(),
            title: title,
            description: "來自指揮中心的直接指令。",
            tags: ["急件"],
            status: "knowledge", // Default to Inbox
            user: agent,
            timestamp: "剛剛"
        });
        renderBoard();
    }
});

// Initialize
renderBoard();
