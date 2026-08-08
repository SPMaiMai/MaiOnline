let currentServer = 'INT';
let currentLang = 'en';

const languageOptions = [
    { code: 'en', label: 'English' },
    { code: 'zh-Hans', label: '简体中文' },
    { code: 'zh-Hant', label: '繁體中文' },
    { code: 'ja', label: '日本語' },
    { code: 'ko', label: '한국어' },
    { code: 'th', label: 'ไทย' },
    { code: 'id', label: 'Bahasa Indonesia' },
    { code: 'vi', label: 'Tiếng Việt' },
    { code: 'es', label: 'Español' },
    { code: 'fr', label: 'Français' }
];

const translations = {
    en: {
        languageLabel: 'Language',
        pageTitle: 'MaiOnline - Universal maimai DX Tools',
        gatewayTitle: 'Cross-Sync Gateway',
        tabGlobal: 'Global',
        tabJapan: 'Japan',
        tabChina: 'China',
        aimeLabel: 'SEGA ID',
        aimePlaceholder: 'Your SEGA ID',
        passwordLabel: 'SEGA Password',
        passwordPlaceholder: 'Your SEGA password',
        aimeTip: 'Logs into official maimai DX NET with your SEGA account and loads recent plays.',
        qrLabel: 'WeChat Login QR Code',
        qrPlaceholder: 'Paste SGWCMAID... from WeChat QR',
        proxyLabel: 'China Proxy (required outside CN)',
        proxyPlaceholder: 'http://127.0.0.1:7890',
        qrTip: 'Outside China you must turn on a VPN/proxy that can reach China, then put its local HTTP port here (Clash often uses 7890).',
        connectBtn: 'Connect Profile',
        errorNeedBackend: 'Start the local official sync server first (run start-server.bat).',
        errorTimeout: 'Official sync timed out. Outside China, enable a China-reachable proxy and fill the Proxy field.',
        errorGeneric: 'Could not load player data. Check your input and try again.',
        errorPrivate: 'This profile is private or unavailable.',
        errorNoUser: 'Could not find a player for that credential.',
        emptyTitle: 'No Account Session Verified',
        emptyDesc: 'Sign in with your SEGA ID (Global/Japan) or paste a WeChat login QR string (China) to load official maimai DX data.',
        serverINT: 'INTERNATIONAL SERVER',
        serverJP: 'JAPAN SERVER',
        serverCN: 'CHINA SERVER',
        verificationText: 'Account structural verification complete',
        dxRating: 'DX RATING',
        danRank: 'DAN RANK',
        danValue: '10th Dan',
        metricB35: 'B35 Target Avg',
        metricN15: 'N15 Target Avg',
        metricClear: 'Clear Rate',
        metricSync: 'Sync Status',
        syncStable: 'Stable',
        recentHistory: 'Recent History Charts',
        filterPlaceholder: 'Filter tracks...',
        scoreLabel: 'Score',
        dateJustNow: 'Just Now',
        date10m: '10m ago',
        date1h: '1h ago'
    },
    'zh-Hans': {
        languageLabel: '语言',
        pageTitle: 'MaiOnline - 通用 maimai DX 工具',
        gatewayTitle: '跨服同步网关',
        tabGlobal: '国际服',
        tabJapan: '日服',
        tabChina: '国服',
        aimeLabel: 'SEGA ID',
        aimePlaceholder: '你的 SEGA ID',
        passwordPlaceholder: '你的 SEGA 密码',
        passwordLabel: 'SEGA 密码',
        aimeTip: '使用 SEGA 账号登录官方 maimai DX NET 并读取最近游玩。',
        qrLabel: '微信登录二维码',
        qrPlaceholder: '粘贴微信二维码中的 SGWCMAID...',
        qrTip: '粘贴微信机台登录二维码字符串（以 SGWCMAID 开头）以从官方服务器同步。',
        connectBtn: '连接档案',
        errorNeedBackend: '请先启动本地官方同步服务器（运行 start-server.bat）。',
        errorGeneric: '无法加载玩家数据，请检查输入后重试。',
        errorPrivate: '该档案不可用或已设为私密。',
        errorNoUser: '未找到对应玩家。',
        emptyTitle: '尚未验证账户会话',
        emptyDesc: '使用 SEGA ID（国际/日服）登录，或粘贴微信登录二维码字符串（国服）以加载官方数据。',
        serverINT: '国际服',
        serverJP: '日服',
        serverCN: '国服',
        verificationText: '账户结构验证已完成',
        dxRating: 'DX 分数',
        danRank: '段位',
        danValue: '十段',
        metricB35: 'B35 目标均分',
        metricN15: 'N15 目标均分',
        metricClear: '通关率',
        metricSync: '同步状态',
        syncStable: '已同步',
        recentHistory: '最近游玩记录',
        filterPlaceholder: '筛选曲目...',
        scoreLabel: '分数',
        dateJustNow: '刚刚',
        date10m: '10 分钟前',
        date1h: '1 小时前'
    },
    'zh-Hant': {
        languageLabel: '語言',
        pageTitle: 'MaiOnline - 通用 maimai DX 工具',
        gatewayTitle: '跨服同步閘道',
        tabGlobal: '國際服',
        tabJapan: '日服',
        tabChina: '國服',
        aimeLabel: 'SEGA ID',
        aimePlaceholder: '你的 SEGA ID',
        passwordPlaceholder: '你的 SEGA 密碼',
        passwordLabel: 'SEGA 密碼',
        aimeTip: '使用 SEGA 帳號登入官方 maimai DX NET 並讀取最近遊玩。',
        qrLabel: '微信登入二維碼',
        qrPlaceholder: '貼上微信二維碼中的 SGWCMAID...',
        qrTip: '貼上微信機台登入二維碼字串（以 SGWCMAID 開頭）以從官方伺服器同步。',
        connectBtn: '連接檔案',
        errorNeedBackend: '請先啟動本機官方同步伺服器（執行 start-server.bat）。',
        errorGeneric: '無法載入玩家資料，請檢查輸入後重試。',
        errorPrivate: '此檔案不可用或已設為私密。',
        errorNoUser: '找不到對應玩家。',
        emptyTitle: '尚未驗證帳戶工作階段',
        emptyDesc: '使用 SEGA ID（國際/日服）登入，或貼上微信登入二維碼字串（國服）以載入官方資料。',
        serverINT: '國際服',
        serverJP: '日服',
        serverCN: '國服',
        verificationText: '帳戶結構驗證已完成',
        dxRating: 'DX 分數',
        danRank: '段位',
        danValue: '十段',
        metricB35: 'B35 目標均分',
        metricN15: 'N15 目標均分',
        metricClear: '通關率',
        metricSync: '同步狀態',
        syncStable: '已同步',
        recentHistory: '最近遊玩紀錄',
        filterPlaceholder: '篩選曲目...',
        scoreLabel: '分數',
        dateJustNow: '剛剛',
        date10m: '10 分鐘前',
        date1h: '1 小時前'
    },
    ja: {
        languageLabel: '言語',
        pageTitle: 'MaiOnline - ユニバーサル maimai DX ツール',
        gatewayTitle: 'クロス同期ゲートウェイ',
        tabGlobal: 'グローバル',
        tabJapan: '日本',
        tabChina: '中国',
        aimeLabel: 'SEGA ID',
        aimePlaceholder: 'SEGA ID',
        passwordPlaceholder: 'SEGAパスワード',
        passwordLabel: 'SEGAパスワード',
        aimeTip: 'SEGAアカウントで公式maimai DX NETにログインし、最近のプレーを取得します。',
        qrLabel: 'WeChatログインQRコード',
        qrPlaceholder: 'WeChat QRのSGWCMAID...を貼り付け',
        qrTip: 'WeChatの筐体ログインQR文字列（SGWCMAIDで始まる）を貼り付けて公式サーバーから同期します。',
        connectBtn: 'プロフィール接続',
        errorNeedBackend: '先にローカル同期サーバーを起動してください（start-server.bat）。',
        errorGeneric: 'プレイヤーデータを読み込めませんでした。入力を確認して再試行してください。',
        errorPrivate: 'このプロフィールは非公開か利用できません。',
        errorNoUser: 'プレイヤーが見つかりません。',
        emptyTitle: 'アカウントセッション未確認',
        emptyDesc: 'SEGA ID（グローバル/日本）でログインするか、WeChatログインQR文字列（中国）を貼り付けて公式データを読み込みます。',
        serverINT: 'インターナショナルサーバー',
        serverJP: '日本サーバー',
        serverCN: '中国サーバー',
        verificationText: 'アカウント構造の検証が完了しました',
        dxRating: 'DXレーティング',
        danRank: '段位',
        danValue: '十段',
        metricB35: 'B35目標平均',
        metricN15: 'N15目標平均',
        metricClear: 'クリア率',
        metricSync: '同期ステータス',
        syncStable: '同期済み',
        recentHistory: '最近のプレー履歴',
        filterPlaceholder: '曲を絞り込む...',
        scoreLabel: 'スコア',
        dateJustNow: 'たった今',
        date10m: '10分前',
        date1h: '1時間前'
    },
    ko: {
        languageLabel: '언어',
        pageTitle: 'MaiOnline - 유니버설 maimai DX 도구',
        gatewayTitle: '크로스 동기화 게이트웨이',
        tabGlobal: '글로벌',
        tabJapan: '일본',
        tabChina: '중국',
        aimeLabel: 'Aime 카드 액세스 코드',
        aimePlaceholder: '20자리 카드 번호',
        aimeTip: 'MaiOnline은 이 코드를 SEGA NET 포털의 동적 자동 쿼리에 안전하게 매핑합니다.',
        qrLabel: 'WeChat 로그인 QR 코드',
        qrPlaceholder: 'WeChat 로그인 QR 코드 붙여넣기',
        qrTip: 'MaiOnline은 스캔한 WeChat QR 문자열을 로컬 대시보드 캐시에 직접 읽어들입니다.',
        connectBtn: '프로필 연결',
        errorNeedBackend: '공식 Aime / WeChat 동기화에는 서버가 필요합니다. 어떤 점수 소스를 연결할지 알려주세요.',
        errorGeneric: '플레이어 데이터를 불러오지 못했습니다. 입력을 확인하고 다시 시도하세요.',
        errorPrivate: '이 프로필은 비공개이거나 사용할 수 없습니다.',
        errorNoUser: '플레이어를 찾을 수 없습니다.',
        emptyTitle: '계정 세션이 확인되지 않음',
        emptyDesc: '인증된 Aime 보안 키를 입력하거나 WeChat 로그인 QR 코드 문자열을 자격 증명 패널에 붙여넣어 MaiOnline을 시작하세요.',
        serverINT: '인터내셔널 서버',
        serverJP: '일본 서버',
        serverCN: '중국 서버',
        verificationText: '계정 구조 검증이 완료되었습니다',
        dxRating: 'DX 레이팅',
        danRank: '단수',
        danValue: '10단',
        metricB35: 'B35 목표 평균',
        metricN15: 'N15 목표 평균',
        metricClear: '클리어율',
        metricSync: '동기화 상태',
        syncStable: '안정',
        recentHistory: '최근 플레이 기록',
        filterPlaceholder: '트랙 필터...',
        scoreLabel: '점수',
        dateJustNow: '방금',
        date10m: '10분 전',
        date1h: '1시간 전'
    },
    th: {
        languageLabel: 'ภาษา',
        pageTitle: 'MaiOnline - เครื่องมือ maimai DX สากล',
        gatewayTitle: 'เกตเวย์ซิงค์ข้ามเซิร์ฟเวอร์',
        tabGlobal: 'โกลบอล',
        tabJapan: 'ญี่ปุ่น',
        tabChina: 'จีน',
        aimeLabel: 'รหัสเข้าถึงการ์ด Aime',
        aimePlaceholder: 'หมายเลขการ์ด 20 หลัก',
        aimeTip: 'MaiOnline จะแมปรหัสนี้ไปยังการสอบถามอัตโนมัติแบบไดนามิกบนพอร์ทัล SEGA NET อย่างปลอดภัย',
        qrLabel: 'คิวอาร์โค้ดเข้าสู่ระบบ WeChat',
        qrPlaceholder: 'วางสตริงคิวอาร์โค้ด WeChat',
        qrTip: 'MaiOnline จะอ่านสตริงคิวอาร์ WeChat ที่สแกนเข้าสู่แคชแดชบอร์ดในเครื่องโดยตรง',
        connectBtn: 'เชื่อมต่อโปรไฟล์',
        errorNeedBackend: 'การซิงค์ Aime / WeChat อย่างเป็นทางการต้องใช้เซิร์ฟเวอร์ บอกได้ว่าต้องการแหล่งคะแนนแบบไหน',
        errorGeneric: 'โหลดข้อมูลผู้เล่นไม่ได้ โปรดตรวจอินพุตแล้วลองใหม่',
        errorPrivate: 'โปรไฟล์นี้เป็นส่วนตัวหรือไม่พร้อมใช้งาน',
        errorNoUser: 'ไม่พบผู้เล่น',
        emptyTitle: 'ยังไม่ได้ยืนยันเซสชันบัญชี',
        emptyDesc: 'ใส่คีย์ความปลอดภัย Aime ที่ได้รับอนุญาต หรือวางสตริงคิวอาร์โค้ดเข้าสู่ระบบ WeChat ในแผงจัดการข้อมูลรับรองเพื่อเปิดใช้ MaiOnline',
        serverINT: 'เซิร์ฟเวอร์นานาชาติ',
        serverJP: 'เซิร์ฟเวอร์ญี่ปุ่น',
        serverCN: 'เซิร์ฟเวอร์จีน',
        verificationText: 'การตรวจสอบโครงสร้างบัญชีเสร็จสมบูรณ์',
        dxRating: 'เรตติ้ง DX',
        danRank: 'ระดับดั้ง',
        danValue: 'ดั้งที่ 10',
        metricB35: 'ค่าเฉลี่ยเป้า B35',
        metricN15: 'ค่าเฉลี่ยเป้า N15',
        metricClear: 'อัตราเคลียร์',
        metricSync: 'สถานะซิงค์',
        syncStable: 'เสถียร',
        recentHistory: 'ประวัติการเล่นล่าสุด',
        filterPlaceholder: 'กรองเพลง...',
        scoreLabel: 'คะแนน',
        dateJustNow: 'เมื่อสักครู่',
        date10m: '10 นาทีที่แล้ว',
        date1h: '1 ชั่วโมงที่แล้ว'
    },
    id: {
        languageLabel: 'Bahasa',
        pageTitle: 'MaiOnline - Alat maimai DX Universal',
        gatewayTitle: 'Gateway Sinkronisasi Silang',
        tabGlobal: 'Global',
        tabJapan: 'Jepang',
        tabChina: 'China',
        aimeLabel: 'Kode Akses Kartu Aime',
        aimePlaceholder: 'Nomor kartu 20 digit',
        aimeTip: 'MaiOnline memetakan kode ini ke kueri web otomatis dinamis di portal SEGA NET dengan aman.',
        qrLabel: 'Kode QR Login WeChat',
        qrPlaceholder: 'Tempel kode QR login WeChat',
        qrTip: 'MaiOnline membaca string QR WeChat yang dipindai langsung ke cache dasbor lokal.',
        connectBtn: 'Hubungkan Profil',
        errorNeedBackend: 'Sinkronisasi resmi Aime / WeChat membutuhkan server. Beri tahu sumber skor mana yang ingin dihubungkan.',
        errorGeneric: 'Tidak dapat memuat data pemain. Periksa input dan coba lagi.',
        errorPrivate: 'Profil ini privat atau tidak tersedia.',
        errorNoUser: 'Pemain tidak ditemukan.',
        emptyTitle: 'Sesi Akun Belum Diverifikasi',
        emptyDesc: 'Masukkan kunci keamanan Aime yang sah atau tempel string kode QR login WeChat di panel manajer kredensial untuk mengaktifkan MaiOnline.',
        serverINT: 'SERVER INTERNASIONAL',
        serverJP: 'SERVER JEPANG',
        serverCN: 'SERVER CHINA',
        verificationText: 'Verifikasi struktur akun selesai',
        dxRating: 'RATING DX',
        danRank: 'PERINGKAT DAN',
        danValue: 'Dan ke-10',
        metricB35: 'Rata-rata Target B35',
        metricN15: 'Rata-rata Target N15',
        metricClear: 'Tingkat Clear',
        metricSync: 'Status Sinkron',
        syncStable: 'Stabil',
        recentHistory: 'Riwayat Main Terbaru',
        filterPlaceholder: 'Filter lagu...',
        scoreLabel: 'Skor',
        dateJustNow: 'Baru saja',
        date10m: '10 mnt lalu',
        date1h: '1 jam lalu'
    },
    vi: {
        languageLabel: 'Ngôn ngữ',
        pageTitle: 'MaiOnline - Công cụ maimai DX đa vùng',
        gatewayTitle: 'Cổng đồng bộ liên máy chủ',
        tabGlobal: 'Quốc tế',
        tabJapan: 'Nhật Bản',
        tabChina: 'Trung Quốc',
        aimeLabel: 'Mã truy cập thẻ Aime',
        aimePlaceholder: 'Số thẻ 20 chữ số',
        aimeTip: 'MaiOnline ánh xạ mã này tới các truy vấn web tự động động trên cổng SEGA NET một cách an toàn.',
        qrLabel: 'Mã QR đăng nhập WeChat',
        qrPlaceholder: 'Dán chuỗi mã QR đăng nhập WeChat',
        qrTip: 'MaiOnline đọc chuỗi QR WeChat đã quét trực tiếp vào bộ nhớ đệm bảng điều khiển cục bộ.',
        connectBtn: 'Kết nối hồ sơ',
        errorNeedBackend: 'Đồng bộ Aime / WeChat chính thức cần máy chủ. Hãy cho biết nguồn điểm bạn muốn kết nối.',
        errorGeneric: 'Không tải được dữ liệu người chơi. Kiểm tra lại và thử lại.',
        errorPrivate: 'Hồ sơ này riêng tư hoặc không khả dụng.',
        errorNoUser: 'Không tìm thấy người chơi.',
        emptyTitle: 'Chưa xác minh phiên tài khoản',
        emptyDesc: 'Nhập khóa bảo mật Aime được ủy quyền hoặc dán chuỗi mã QR đăng nhập WeChat trong bảng quản lý thông tin xác thực để kích hoạt MaiOnline.',
        serverINT: 'MÁY CHỦ QUỐC TẾ',
        serverJP: 'MÁY CHỦ NHẬT BẢN',
        serverCN: 'MÁY CHỦ TRUNG QUỐC',
        verificationText: 'Xác minh cấu trúc tài khoản hoàn tất',
        dxRating: 'ĐIỂM DX',
        danRank: 'CẤP DAN',
        danValue: 'Đệ thập đoạn',
        metricB35: 'TB mục tiêu B35',
        metricN15: 'TB mục tiêu N15',
        metricClear: 'Tỷ lệ clear',
        metricSync: 'Trạng thái đồng bộ',
        syncStable: 'Ổn định',
        recentHistory: 'Lịch sử chơi gần đây',
        filterPlaceholder: 'Lọc bài hát...',
        scoreLabel: 'Điểm',
        dateJustNow: 'Vừa xong',
        date10m: '10 phút trước',
        date1h: '1 giờ trước'
    },
    es: {
        languageLabel: 'Idioma',
        pageTitle: 'MaiOnline - Herramientas universales de maimai DX',
        gatewayTitle: 'Puerta de sincronización cruzada',
        tabGlobal: 'Global',
        tabJapan: 'Japón',
        tabChina: 'China',
        aimeLabel: 'Código de acceso de tarjeta Aime',
        aimePlaceholder: 'Número de tarjeta de 20 dígitos',
        aimeTip: 'MaiOnline asigna este código a consultas web automáticas dinámicas en los portales SEGA NET de forma segura.',
        qrLabel: 'Código QR de inicio de WeChat',
        qrPlaceholder: 'Pega el código QR de inicio de WeChat',
        qrTip: 'MaiOnline lee la cadena QR de WeChat escaneada directamente en la caché local del panel.',
        connectBtn: 'Conectar perfil',
        errorNeedBackend: 'La sincronización oficial de Aime / WeChat necesita un servidor. Dime qué fuente de puntuaciones quieres conectar.',
        errorGeneric: 'No se pudieron cargar los datos. Revisa la entrada e inténtalo de nuevo.',
        errorPrivate: 'Este perfil es privado o no está disponible.',
        errorNoUser: 'No se encontró el jugador.',
        emptyTitle: 'Sesión de cuenta no verificada',
        emptyDesc: 'Proporciona una clave de seguridad Aime autorizada o pega una cadena de código QR de inicio de WeChat en el panel de credenciales para activar MaiOnline.',
        serverINT: 'SERVIDOR INTERNACIONAL',
        serverJP: 'SERVIDOR DE JAPÓN',
        serverCN: 'SERVIDOR DE CHINA',
        verificationText: 'Verificación estructural de la cuenta completada',
        dxRating: 'RATING DX',
        danRank: 'RANGO DAN',
        danValue: '10.º Dan',
        metricB35: 'Promedio objetivo B35',
        metricN15: 'Promedio objetivo N15',
        metricClear: 'Tasa de clear',
        metricSync: 'Estado de sync',
        syncStable: 'Estable',
        recentHistory: 'Historial reciente',
        filterPlaceholder: 'Filtrar pistas...',
        scoreLabel: 'Puntuación',
        dateJustNow: 'Ahora mismo',
        date10m: 'Hace 10 min',
        date1h: 'Hace 1 h'
    },
    fr: {
        languageLabel: 'Langue',
        pageTitle: 'MaiOnline - Outils maimai DX universels',
        gatewayTitle: 'Passerelle de synchro croisée',
        tabGlobal: 'Global',
        tabJapan: 'Japon',
        tabChina: 'Chine',
        aimeLabel: "Code d'accès carte Aime",
        aimePlaceholder: 'Numéro de carte à 20 chiffres',
        aimeTip: 'MaiOnline mappe ce code vers des requêtes web automatiques dynamiques sur les portails SEGA NET en toute sécurité.',
        qrLabel: 'QR de connexion WeChat',
        qrPlaceholder: 'Collez le QR de connexion WeChat',
        qrTip: 'MaiOnline lit la chaîne QR WeChat scannée directement dans le cache local du tableau de bord.',
        connectBtn: 'Connecter le profil',
        errorNeedBackend: 'La synchro officielle Aime / WeChat nécessite un serveur. Indiquez quelle source de scores brancher.',
        errorGeneric: 'Impossible de charger les données. Vérifiez la saisie et réessayez.',
        errorPrivate: 'Ce profil est privé ou indisponible.',
        errorNoUser: 'Joueur introuvable.',
        emptyDesc: 'Fournissez une clé de sécurité Aime autorisée ou collez une chaîne QR de connexion WeChat dans le panneau d\'identifiants pour activer MaiOnline.',
        aimeLabel: 'Code d\'accès carte Aime',
        emptyTitle: 'Session de compte non vérifiée',
        emptyDesc: "Fournissez une clé de sécurité Aime autorisée ou collez une chaîne QR de connexion WeChat dans le panneau d'identifiants pour activer MaiOnline.",
        serverINT: 'SERVEUR INTERNATIONAL',
        serverJP: 'SERVEUR JAPON',
        serverCN: 'SERVEUR CHINE',
        verificationText: 'Vérification structurelle du compte terminée',
        dxRating: 'RATING DX',
        danRank: 'RANG DAN',
        danValue: '10e Dan',
        metricB35: 'Moy. cible B35',
        metricN15: 'Moy. cible N15',
        metricClear: 'Taux de clear',
        metricSync: 'État de sync',
        syncStable: 'Stable',
        recentHistory: 'Historique récent',
        filterPlaceholder: 'Filtrer les titres...',
        scoreLabel: 'Score',
        dateJustNow: "À l'instant",
        date10m: 'Il y a 10 min',
        date1h: 'Il y a 1 h'
    }
};

let playsDatabase = [];

const htmlLangMap = {
    en: 'en',
    'zh-Hans': 'zh-CN',
    'zh-Hant': 'zh-TW',
    ja: 'ja',
    ko: 'ko',
    th: 'th',
    id: 'id',
    vi: 'vi',
    es: 'es',
    fr: 'fr'
};

function t(key) {
    const pack = translations[currentLang] || translations.en;
    return pack[key] || translations.en[key] || key;
}

function getLanguageLabel(code) {
    const match = languageOptions.find(option => option.code === code);
    return match ? match.label : 'English';
}

function initLanguageSelect() {
    const menu = document.getElementById('langMenu');
    if (!menu) return;

    menu.innerHTML = '';
    languageOptions.forEach(option => {
        const item = document.createElement('li');
        item.setAttribute('role', 'option');

        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'lang-option';
        button.dataset.lang = option.code;
        button.textContent = option.label;
        button.setAttribute('role', 'option');
        button.onclick = () => switchLanguage(option.code);

        item.appendChild(button);
        menu.appendChild(item);
    });

    updateLanguageSelectUI();
}

function updateLanguageSelectUI() {
    const label = document.getElementById('langSelectLabel');
    if (label) label.textContent = getLanguageLabel(currentLang);

    document.querySelectorAll('.lang-option').forEach(option => {
        option.classList.toggle('active', option.dataset.lang === currentLang);
    });
}

function toggleLangDropdown() {
    const dropdown = document.getElementById('langDropdown');
    const btn = document.getElementById('langSelectBtn');
    const menu = document.getElementById('langMenu');
    if (!dropdown || !btn || !menu) return;

    const isOpen = dropdown.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menu.hidden = !isOpen;
}

function closeLangDropdown() {
    const dropdown = document.getElementById('langDropdown');
    const btn = document.getElementById('langSelectBtn');
    const menu = document.getElementById('langMenu');
    if (!dropdown || !btn || !menu) return;

    dropdown.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
}

function switchLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    currentLang = lang;
    document.documentElement.lang = htmlLangMap[lang] || 'en';

    updateLanguageSelectUI();
    closeLangDropdown();
    applyTranslations();
}

function applyTranslations() {
    document.title = t('pageTitle');

    document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = t(el.getAttribute('data-i18n'));
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
    });

    updateServerLabel();

    const syncEl = document.getElementById('metricSyncVal');
    if (syncEl && playsDatabase.length) {
        syncEl.textContent = t('syncStable');
    }

    if (!document.getElementById('profileState').classList.contains('hidden')) {
        filterSongs();
    }
}

function updateServerLabel() {
    const label = document.getElementById('serverLabel');
    if (!label) return;
    label.textContent = t('server' + currentServer);
}

function switchServer(serverCode, clickedElement) {
    currentServer = serverCode;

    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    if (clickedElement) {
        clickedElement.classList.add('active');
    }

    const aimeGroup = document.getElementById('aimeInputGroup');
    const qrGroup = document.getElementById('qrInputGroup');
    const aimeInput = document.getElementById('aimeCode');
    const passwordInput = document.getElementById('segaPassword');
    const qrInput = document.getElementById('qrString');

    if (serverCode === 'CN') {
        aimeGroup.classList.add('hidden');
        aimeInput.removeAttribute('required');
        if (passwordInput) passwordInput.removeAttribute('required');
        qrGroup.classList.remove('hidden');
        qrInput.setAttribute('required', 'true');
    } else {
        qrGroup.classList.add('hidden');
        qrInput.removeAttribute('required');
        aimeGroup.classList.remove('hidden');
        aimeInput.setAttribute('required', 'true');
        if (passwordInput) passwordInput.setAttribute('required', 'true');
    }

    updateServerLabel();
}

function showAuthError(message) {
    const errorEl = document.getElementById('authError');
    if (!errorEl) return;
    errorEl.textContent = message;
    errorEl.classList.remove('hidden');
}

function clearAuthError() {
    const errorEl = document.getElementById('authError');
    if (!errorEl) return;
    errorEl.textContent = '';
    errorEl.classList.add('hidden');
}

// Local: leave empty / 127.0.0.1. GitHub Pages: set your backend URL, e.g. 'https://api.yourdomain.com'
const API_BASE = (() => {
    if (window.MAIONLINE_API_BASE) return String(window.MAIONLINE_API_BASE).replace(/\/$/, '');
    if (window.location.origin.includes('8787')) return '';
    if (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') {
        return 'http://127.0.0.1:8787';
    }
    return '';
})();

function applyPlayerPayload(data) {
    playsDatabase = Array.isArray(data.charts) ? data.charts : [];

    document.getElementById('playerName').textContent = data.nickname || 'maimaiPlayer';
    document.getElementById('ratingVal').textContent = String(data.rating ?? '-');
    document.getElementById('danValue').textContent = data.dan || '-';
    document.getElementById('metricB35Val').textContent = Number(data.b35Avg || 0).toFixed(2);
    document.getElementById('metricN15Val').textContent = Number(data.n15Avg || 0).toFixed(2);
    document.getElementById('metricClearVal').textContent = `${data.clearRate ?? 0}%`;
    document.getElementById('metricSyncVal').textContent = t('syncStable');

    updateServerLabel();
    document.getElementById('emptyState').classList.add('hidden');
    document.getElementById('profileState').classList.remove('hidden');
    document.getElementById('songFilter').value = '';
    renderSongsList(playsDatabase);
}

async function handleAuth(event) {
    event.preventDefault();
    clearAuthError();

    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');
    const btnSpinner = document.getElementById('btnSpinner');

    const body = { server: currentServer };
    if (currentServer === 'CN') {
        body.credential = document.getElementById('qrString').value.trim();
        const proxyInput = document.getElementById('cnProxy');
        body.proxy = proxyInput ? proxyInput.value.trim() : '';
        if (proxyInput) {
            try { localStorage.setItem('maionline_cn_proxy', body.proxy); } catch (_) {}
        }
        if (!body.credential) {
            showAuthError(t('errorGeneric'));
            return;
        }
        if (!body.proxy) {
            showAuthError(t('errorTimeout'));
            return;
        }
    } else {
        body.segaId = document.getElementById('aimeCode').value.trim();
        body.password = document.getElementById('segaPassword').value;
        if (!body.segaId || !body.password) {
            showAuthError(t('errorGeneric'));
            return;
        }
    }

    submitBtn.disabled = true;
    btnText.classList.add('hidden');
    btnSpinner.classList.remove('hidden');

    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timeoutId = setTimeout(() => {
        if (controller) controller.abort();
    }, 55000);

    try {
        const response = await fetch(`${API_BASE}/api/connect`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
            signal: controller ? controller.signal : undefined
        });

        let payload = null;
        try {
            payload = await response.json();
        } catch (_) {
            payload = null;
        }

        if (!response.ok) {
            const detail = payload && (payload.detail || payload.message);
            throw new Error(typeof detail === 'string' ? detail : (detail && detail.msg) || t('errorGeneric'));
        }

        applyPlayerPayload(payload);
    } catch (error) {
        const message = String(error && error.message ? error.message : '');
        if (error && error.name === 'AbortError') {
            showAuthError(t('errorTimeout'));
        } else if (/Failed to fetch|NetworkError|Load failed/i.test(message)) {
            showAuthError(t('errorNeedBackend'));
        } else {
            showAuthError(message || t('errorGeneric'));
        }
    } finally {
        clearTimeout(timeoutId);
        submitBtn.disabled = false;
        btnText.classList.remove('hidden');
        btnSpinner.classList.add('hidden');
    }
}

function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function renderSongsList(songsArray) {
    const container = document.getElementById('songListContainer');
    container.innerHTML = '';

    songsArray.forEach(song => {
        const isReMaster = /re:?master/i.test(song.difficulty);
        const isMaster = /master/i.test(song.difficulty);
        const colorClass = isReMaster ? 'remaster-color' : (isMaster ? 'master-color' : 'master-color');

        const rowHTML = `
            <div class="song-row">
                <div class="song-meta-left">
                    <div class="difficulty-pill ${colorClass}"></div>
                    <div>
                        <p class="song-title">${escapeHtml(song.title)}</p>
                        <div class="song-tags">
                            <span class="level-tag">${escapeHtml(song.difficulty)} ${escapeHtml(song.level)}</span>
                            <span class="time-tag">${escapeHtml(song.rateText)}${song.type ? ' · ' + escapeHtml(song.type) : ''}</span>
                        </div>
                    </div>
                </div>
                <div class="song-stats-right">
                    <div>
                        <span class="score-label">${t('scoreLabel')} </span>
                        <p class="score-pct">${song.score.toFixed(4)}%</p>
                    </div>
                    <span class="flag-badge ${song.flagClass}">${escapeHtml(song.flagText)}</span>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', rowHTML);
    });
}

function filterSongs() {
    const keyword = document.getElementById('songFilter').value.toLowerCase();
    const filtered = playsDatabase.filter(song => song.title.toLowerCase().includes(keyword));
    renderSongsList(filtered);
}

document.addEventListener('DOMContentLoaded', () => {
    initLanguageSelect();
    switchLanguage(currentLang);

    const proxyInput = document.getElementById('cnProxy');
    if (proxyInput) {
        try {
            const saved = localStorage.getItem('maionline_cn_proxy');
            if (saved) proxyInput.value = saved;
        } catch (_) {}
    }

    document.addEventListener('click', (event) => {
        const dropdown = document.getElementById('langDropdown');
        if (dropdown && !dropdown.contains(event.target)) {
            closeLangDropdown();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeLangDropdown();
    });
});
