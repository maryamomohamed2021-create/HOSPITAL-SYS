/**
 * SHIFOCARE - HOSPITAL MANAGEMENT SYSTEM (HMS)
 * Core Application Engine & Data Controller
 * Developed with Enterprise Standards (Vanilla JS, LocalStorage, Chart.js)
 */

// ==========================================================================
// 1. INITIAL MOCK DATA (SEEDS IF LOCALSTORAGE IS EMPTY)
// ==========================================================================

const DEFAULT_DATA = {
    // 1. Patients Table
    patients: [
        {
            id: "PT-1001",
            name: "Axmed Maxamed Nuur",
            ageGender: "42 / Lab (M)",
            bloodGroup: "O+",
            phone: "+252 61 555 4321",
            wardRoom: "Qeybta Guud - Qolka 104",
            doctor: "Dr. Aamina Cilmi (Wadnaha)",
            date: "2026-10-25",
            status: "Jiifa (Admitted)"
        },
        {
            id: "PT-1002",
            name: "Faadumo Jaamac Warsame",
            ageGender: "29 / Dhedig (F)",
            bloodGroup: "A+",
            phone: "+252 61 789 1234",
            wardRoom: "Umusha & Dhallaanka - Qolka 202",
            doctor: "Dr. Maryan Yuusuf (Haweenka)",
            date: "2026-10-27",
            status: "Jiifa (Admitted)"
        },
        {
            id: "PT-1003",
            name: "Cali Cabdullaahi Xasan",
            ageGender: "55 / Lab (M)",
            bloodGroup: "B+",
            phone: "+252 61 234 5678",
            wardRoom: "ICU (Daryeelka Degdeg) - Qolka 01",
            doctor: "Dr. Xasan Geedi (Qalliinka)",
            date: "2026-10-28",
            status: "Degdeg (Emergency)"
        },
        {
            id: "PT-1004",
            name: "Sahra Cumar Cabdi",
            ageGender: "8 / Dhedig (F)",
            bloodGroup: "O-",
            phone: "+252 61 999 8877",
            wardRoom: "Bukaan Socod (OPD)",
            doctor: "Dr. Khalid Axmed (Carruurta)",
            date: "2026-10-29",
            status: "Bukaan Socod (Outpatient)"
        },
        {
            id: "PT-1005",
            name: "Maxamed Ismaaciil Cali",
            ageGender: "34 / Lab (M)",
            bloodGroup: "AB+",
            phone: "+252 61 333 4455",
            wardRoom: "Guriga (Discharged)",
            doctor: "Dr. Farxaan Sheekh (Lafaha)",
            date: "2026-10-22",
            status: "Fasaxan (Discharged)"
        }
    ],

    // 2. Doctors Table
    doctors: [
        {
            id: "DOC-201",
            name: "Dr. Aamina Cilmi Jaamac",
            specialty: "Wadnaha (Cardiology)",
            phone: "+252 61 511 2233",
            email: "aamina.cilmi@shifocare.so",
            room: "Xafiiska 102",
            shift: "Subax (08:00 - 14:00)",
            patientCount: 14,
            status: "Shaqada Jooga (Active)"
        },
        {
            id: "DOC-202",
            name: "Dr. Xasan Geedi Faarax",
            specialty: "Qalliinka Guud (General Surgery)",
            phone: "+252 61 522 3344",
            email: "xasan.geedi@shifocare.so",
            room: "Qolka Qalliinka 3",
            shift: "Habeen (20:00 - 08:00)",
            patientCount: 8,
            status: "Shaqada Jooga (Active)"
        },
        {
            id: "DOC-203",
            name: "Dr. Maryan Yuusuf Shirwac",
            specialty: "Haweenka (Gynecology)",
            phone: "+252 61 533 4455",
            email: "maryan.y@shifocare.so",
            room: "Xafiiska 205",
            shift: "Galab (14:00 - 20:00)",
            patientCount: 19,
            status: "Shaqada Jooga (Active)"
        },
        {
            id: "DOC-204",
            name: "Dr. Khalid Axmed Nuur",
            specialty: "Carruurta (Pediatrics)",
            phone: "+252 61 544 5566",
            email: "khalid.a@shifocare.so",
            room: "Xafiiska 108",
            shift: "Subax (08:00 - 14:00)",
            patientCount: 22,
            status: "Shaqada Jooga (Active)"
        },
        {
            id: "DOC-205",
            name: "Dr. Farxaan Sheekh Ibraahim",
            specialty: "Lafaha (Orthopedics)",
            phone: "+252 61 566 7788",
            email: "farxaan.s@shifocare.so",
            room: "Xafiiska 301",
            shift: "Subax (08:00 - 14:00)",
            patientCount: 11,
            status: "Fasax ku maqan (Leave)"
        }
    ],

    // 3. Appointments Table
    appointments: [
        {
            id: "APT-301",
            patientName: "Nimco Cabdi Cilmi",
            doctor: "Dr. Maryan Yuusuf (Haweenka)",
            department: "Umusha & Haweenka",
            datetime: "2026-10-29 10:30 AM",
            type: "Baaritaan Joogto ah (Routine)",
            fee: "$25",
            status: "La Xaqiijiyay (Confirmed)"
        },
        {
            id: "APT-302",
            patientName: "Daahir Muuse Barre",
            doctor: "Dr. Aamina Cilmi (Wadnaha)",
            department: "Wadnaha (Cardiology)",
            datetime: "2026-10-29 11:15 AM",
            type: "Daba-gal (Follow-up)",
            fee: "$30",
            status: "La Sugayo (Pending)"
        },
        {
            id: "APT-303",
            patientName: "Warsame Cismaan Xaashi",
            doctor: "Dr. Farxaan Sheekh (Lafaha)",
            department: "Lafaha (Orthopedics)",
            datetime: "2026-10-29 02:00 PM",
            type: "La-tashiga Qalliinka",
            fee: "$40",
            status: "La Sugayo (Pending)"
        },
        {
            id: "APT-304",
            patientName: "Hodan Maxamuud Geelle",
            doctor: "Dr. Khalid Axmed (Carruurta)",
            department: "Daryeelka Carruurta",
            datetime: "2026-10-29 09:00 AM",
            type: "Tallaalka & Qandho",
            fee: "$20",
            status: "Dhameystiran (Completed)"
        },
        {
            id: "APT-305",
            patientName: "Cabdirashiid Salaad",
            doctor: "Dr. Xasan Geedi (Qalliinka)",
            department: "Qalliinka Guud",
            datetime: "2026-10-28 04:00 PM",
            type: "Dhaawac & Jeexis",
            fee: "$35",
            status: "La Baajiyay (Cancelled)"
        }
    ],

    // 4. Beds & Wards Table
    beds: [
        {
            id: "BED-01",
            ward: "ICU (Daryeelka Degdeg)",
            floor: "Dabaqa 1-aad",
            type: "Sariir ICU Ventilator leh",
            patient: "Cali Cabdullaahi Xasan",
            nurse: "Kalkaaliso Deeqa Cabdi",
            rate: "$120/maalintii",
            status: "Buuxda (Occupied)"
        },
        {
            id: "BED-02",
            ward: "ICU (Daryeelka Degdeg)",
            floor: "Dabaqa 1-aad",
            type: "Sariir ICU Koronto ah",
            patient: "Bannaan (None)",
            nurse: "Kalkaaliso Deeqa Cabdi",
            rate: "$120/maalintii",
            status: "Bannaan (Available)"
        },
        {
            id: "BED-03",
            ward: "Qeybta Guud (General Ward)",
            floor: "Dabaqa 2-aad",
            type: "Sariir Caadi ah",
            patient: "Axmed Maxamed Nuur",
            nurse: "Kalkaaliso Fartuun Cali",
            rate: "$35/maalintii",
            status: "Buuxda (Occupied)"
        },
        {
            id: "BED-04",
            ward: "Qeybta Guud (General Ward)",
            floor: "Dabaqa 2-aad",
            type: "Sariir Caadi ah",
            patient: "Bannaan (None)",
            nurse: "Kalkaaliso Fartuun Cali",
            rate: "$35/maalintii",
            status: "Bannaan (Available)"
        },
        {
            id: "BED-05",
            ward: "Umusha & Dhallaanka (Maternity)",
            floor: "Dabaqa 2-aad",
            type: "Sariir Umuleed & Sariir Yar",
            patient: "Faadumo Jaamac Warsame",
            nurse: "Kalkaaliso Xaawa Warsame",
            rate: "$50/maalintii",
            status: "Buuxda (Occupied)"
        },
        {
            id: "BED-06",
            ward: "Kala-Go'idda (VIP / Private)",
            floor: "Dabaqa 3-aad",
            type: "Qol Gaar ah VIP",
            patient: "Bannaan (None)",
            nurse: "Kalkaaliso Shamso Nuur",
            rate: "$150/maalintii",
            status: "Bannaan (Available)"
        }
    ],

    // 5. Pharmacy Table
    pharmacy: [
        {
            id: "MED-501",
            name: "Amoxicillin 500mg",
            category: "Antibiotic (Jeermis-dile)",
            manufacturer: "Pfizer / Global Pharma",
            stock: 350,
            price: "$0.50",
            expiry: "2027-08-15",
            status: "Waa Buuxdaa (In Stock)"
        },
        {
            id: "MED-502",
            name: "Paracetamol Infusion 100ml",
            category: "Xanuun Baabi'iye (Analgesic)",
            manufacturer: "B. Braun Medical",
            stock: 24,
            price: "$3.50",
            expiry: "2026-11-20",
            status: "Wuu Yar yahay (Low Stock)"
        },
        {
            id: "MED-503",
            name: "Metformin 850mg",
            category: "Sonkorowga (Antidiabetic)",
            manufacturer: "Novartis Pharma",
            stock: 420,
            price: "$0.40",
            expiry: "2028-01-10",
            status: "Waa Buuxdaa (In Stock)"
        },
        {
            id: "MED-504",
            name: "Ceftriaxone 1g Vial",
            category: "Antibiotic Irbadeed",
            manufacturer: "Roche Healthcare",
            stock: 12,
            price: "$6.00",
            expiry: "2026-12-05",
            status: "Wuu Yar yahay (Low Stock)"
        },
        {
            id: "MED-505",
            name: "Salbutamol Inhaler 100mcg",
            category: "Neefta (Respiratory)",
            manufacturer: "GSK Pharmaceuticals",
            stock: 0,
            price: "$7.50",
            expiry: "2026-09-30",
            status: "Wuu Dhamaaday (Out of Stock)"
        }
    ],

    // 6. Laboratory Table
    laboratory: [
        {
            id: "LAB-601",
            patientName: "Axmed Maxamed Nuur",
            testType: "Complete Blood Count (CBC)",
            doctor: "Dr. Aamina Cilmi",
            technician: "Farxiyo Cismaan (Lab Tech)",
            date: "2026-10-28",
            fee: "$15",
            result: "Caadi (Normal)"
        },
        {
            id: "LAB-602",
            patientName: "Cali Cabdullaahi Xasan",
            testType: "Cardiac Troponin & ECG",
            doctor: "Dr. Xasan Geedi",
            technician: "Axmed Bashiir (Chief Tech)",
            date: "2026-10-28",
            fee: "$45",
            result: "Khatar / Sare (Abnormal)"
        },
        {
            id: "LAB-603",
            patientName: "Sahra Cumar Cabdi",
            testType: "Malaria & Typhoid Panel",
            doctor: "Dr. Khalid Axmed",
            technician: "Farxiyo Cismaan (Lab Tech)",
            date: "2026-10-29",
            fee: "$20",
            result: "La Sugayo (Pending)"
        },
        {
            id: "LAB-604",
            patientName: "Faadumo Jaamac Warsame",
            testType: "Ultrasound (Dhawaaqa Ilmaha)",
            doctor: "Dr. Maryan Yuusuf",
            technician: "Dr. Liibaan (Sonographer)",
            date: "2026-10-27",
            fee: "$35",
            result: "Caadi (Normal)"
        },
        {
            id: "LAB-605",
            patientName: "Maxamed Ismaaciil Cali",
            testType: "Chest X-Ray (Raajada Laabta)",
            doctor: "Dr. Farxaan Sheekh",
            technician: "Axmed Bashiir (Chief Tech)",
            date: "2026-10-22",
            fee: "$30",
            result: "Caadi (Normal)"
        }
    ],

    // 7. Billing & Finance Table
    billing: [
        {
            id: "INV-701",
            patientName: "Cali Cabdullaahi Xasan",
            services: "ICU 2 Maalmood, Qalliin, Daawooyin",
            total: 1250,
            paid: 1250,
            balance: 0,
            method: "EVC Plus / Hormuud",
            date: "2026-10-28",
            status: "Waa La Bixiyay (Paid)"
        },
        {
            id: "INV-702",
            patientName: "Faadumo Jaamac Warsame",
            services: "Dhalmada Caadiga ah & Daryeelka Hooyada",
            total: 380,
            paid: 200,
            balance: 180,
            method: "Kaarka Bangiga (Premier Bank)",
            date: "2026-10-27",
            status: "Qayb baa dhiman (Partial)"
        },
        {
            id: "INV-703",
            patientName: "Axmed Maxamed Nuur",
            services: "Jiifka Qeybta Guud (3 Maalmood) + Baaritaan",
            total: 210,
            paid: 0,
            balance: 210,
            method: "Lama Bixin Wali",
            date: "2026-10-26",
            status: "Lama Bixin (Unpaid)"
        },
        {
            id: "INV-704",
            patientName: "Sahra Cumar Cabdi",
            services: "La-tashiga Dhakhtarka & Tallaal",
            total: 45,
            paid: 45,
            balance: 0,
            method: "E-Dahab / Somtel",
            date: "2026-10-29",
            status: "Waa La Bixiyay (Paid)"
        },
        {
            id: "INV-705",
            patientName: "Maxamed Ismaaciil Cali",
            services: "Raajada Lafaha & Kabid (Plaster cast)",
            total: 160,
            paid: 160,
            balance: 0,
            method: "Kaash (USD Cash)",
            date: "2026-10-22",
            status: "Waa La Bixiyay (Paid)"
        }
    ]
};

// ==========================================================================
// 2. STATE MANAGEMENT
// ==========================================================================
let state = {
    currentView: 'dashboard',
    modalTargetTable: '',
    modalEditIndex: null,
    data: {}
};

// Load data from LocalStorage or seed defaults
function initializeState() {
    const savedData = localStorage.getItem('shifocare_hms_data');
    if (savedData) {
        try {
            state.data = JSON.parse(savedData);
        } catch (e) {
            console.error("Could not parse saved data, loading defaults.", e);
            state.data = JSON.parse(JSON.stringify(DEFAULT_DATA));
        }
    } else {
        state.data = JSON.parse(JSON.stringify(DEFAULT_DATA));
        saveState();
    }
}

function saveState() {
    localStorage.setItem('shifocare_hms_data', JSON.stringify(state.data));
    updateBadges();
    updateKPICounters();
}

// ==========================================================================
// 3. UI INITIALIZATION & EVENT LISTENERS
// ==========================================================================
let patientFlowChartInstance = null;
let bedOccupancyChartInstance = null;

document.addEventListener('DOMContentLoaded', () => {
    initializeState();
    setupNavigation();
    setupHeaderUtilities();
    renderAllTables();
    renderOverviewPanels();
    updateKPICounters();
    updateBadges();
    initDashboardCharts();
    startClock();
});

// Navigation handling
function setupNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            const view = item.getAttribute('data-view');
            switchView(view);

            // Close mobile sidebar if open
            const sidebar = document.getElementById('sidebar');
            if (sidebar.classList.contains('mobile-open')) {
                sidebar.classList.remove('mobile-open');
            }
        });
    });

    // Mobile sidebar toggles
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const sidebar = document.getElementById('sidebar');

    if (menuToggleBtn) {
        menuToggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('mobile-open');
        });
    }

    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener('click', () => {
            sidebar.classList.remove('mobile-open');
        });
    }
}

function switchView(viewName) {
    state.currentView = viewName;

    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.getAttribute('data-view') === viewName) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Update views visibility
    document.querySelectorAll('.view-panel').forEach(panel => {
        panel.classList.remove('active');
    });

    const targetPanel = document.getElementById(`view-${viewName}`);
    if (targetPanel) {
        targetPanel.classList.add('active');
    }

    // Update titles
    updateViewHeader(viewName);

    // If switched back to dashboard, refresh charts
    if (viewName === 'dashboard') {
        renderOverviewPanels();
        refreshCharts();
    }
}

function updateViewHeader(viewName) {
    const titleEl = document.getElementById('currentViewTitle');
    const subTitleEl = document.getElementById('currentViewSubtitle');

    const viewTitles = {
        dashboard: {
            title: "Dashboard-ka Guud ee Isbitaalka",
            sub: "Warbixinta guud ee howlgalka, bukaannada, iyo adeegyada caafimaad"
        },
        patients: {
            title: "1. Diiwaanka Bukaannada (Patients Management)",
            sub: "Maamulka diiwaangelinta, bukaan-jiifka, bukaan-socodka iyo taariikhda caafimaad"
        },
        doctors: {
            title: "2. Dhaqaatiirta & Howlwadeennada (Doctors Directory)",
            sub: "Takhasusyada kala duwan, xafiisyada, jadwalka shaqada iyo xiriirka"
        },
        appointments: {
            title: "3. Jadwalka Ballamaha (Appointments Schedule)",
            sub: "La socodka iyo diiwaangelinta ballamaha bukaanada iyo dhaqaatiirta maanta"
        },
        beds: {
            title: "4. Sariiraha & Qolalka Isbitaalka (Beds & Wards)",
            sub: "Qeybaha ICU, Ward-ka Guud, Umusha, VIP iyo heerka buuxnaanta qolalka"
        },
        pharmacy: {
            title: "5. Farmashiyaha & Daawooyinka (Pharmacy & Drugs)",
            sub: "Kaydka daawooyinka, tirada hadhay, taariikhaha dhicitaanka iyo iibka"
        },
        laboratory: {
            title: "6. Shaybaarka & Baaritaannada (Laboratory & Tests)",
            sub: "Tijaabooyinka dhiigga, raajada, natiijooyinka la sugayo iyo kuwa diyaar ah"
        },
        billing: {
            title: "7. Biilasha & Maaliyadda (Invoicing & Revenue)",
            sub: "Qaansheeyooyinka bukaanada, lacagaha la bixiyay, deynta hadhay iyo habka bixinta"
        }
    };

    if (viewTitles[viewName]) {
        titleEl.textContent = viewTitles[viewName].title;
        subTitleEl.textContent = viewTitles[viewName].sub;
    }
}

// Topbar utilities: Clock, Dark Mode, Print
function setupHeaderUtilities() {
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }

    const printBtn = document.getElementById('printReportBtn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // Check saved theme
    if (localStorage.getItem('shifocare_theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeBtn) themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('shifocare_theme', isDark ? 'dark' : 'light');
    
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
        themeBtn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
    }

    // Update charts theme colors if needed
    refreshCharts();
}

function startClock() {
    const clockEl = document.getElementById('liveClockText');
    function update() {
        const now = new Date();
        const options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
        clockEl.textContent = now.toLocaleDateString('so-SO', options) || now.toLocaleDateString('en-US', options);
    }
    update();
    setInterval(update, 1000);
}

// ==========================================================================
// 4. BADGES & KPI STATS CALCULATIONS
// ==========================================================================
function updateBadges() {
    document.getElementById('badgePatients').textContent = state.data.patients.length;
    document.getElementById('badgeDoctors').textContent = state.data.doctors.length;
    document.getElementById('badgeAppointments').textContent = state.data.appointments.filter(a => a.status.includes('Pending') || a.status.includes('La Sugayo')).length;
    document.getElementById('badgeBeds').textContent = state.data.beds.filter(b => b.status.includes('Available') || b.status.includes('Bannaan')).length;
    document.getElementById('badgePharmacy').textContent = state.data.pharmacy.filter(p => p.status.includes('Low') || p.status.includes('Out') || p.stock < 30).length;
    document.getElementById('badgeLab').textContent = state.data.laboratory.filter(l => l.result.includes('Pending') || l.result.includes('La Sugayo')).length;
    document.getElementById('badgeBilling').textContent = state.data.billing.filter(b => b.status.includes('Unpaid') || b.status.includes('Lama Bixin')).length;
}

function updateKPICounters() {
    // Total Patients
    document.getElementById('kpiTotalPatients').textContent = state.data.patients.length;
    
    // Active Doctors
    const activeDocs = state.data.doctors.filter(d => d.status.includes('Shaqada') || d.status.includes('Active')).length;
    document.getElementById('kpiActiveDoctors').textContent = activeDocs;

    // Today's Appointments
    document.getElementById('kpiTodayAppointments').textContent = state.data.appointments.length;

    // Available Beds
    const availBeds = state.data.beds.filter(b => b.status.includes('Bannaan') || b.status.includes('Available')).length;
    document.getElementById('kpiAvailableBeds').textContent = `${availBeds} / ${state.data.beds.length}`;

    // Low stock items
    const lowStock = state.data.pharmacy.filter(p => p.stock < 30 || p.status.includes('Low') || p.status.includes('Out')).length;
    document.getElementById('kpiLowStockDrugs').textContent = `${lowStock} Daawo`;

    // Total Revenue
    const revenue = state.data.billing.reduce((acc, curr) => acc + Number(curr.paid || 0), 0);
    document.getElementById('kpiTotalRevenue').textContent = `$${revenue.toLocaleString()}`;
}

// ==========================================================================
// 5. RENDERING TABLES
// ==========================================================================

function renderAllTables() {
    renderPatientsTable();
    renderDoctorsTable();
    renderAppointmentsTable();
    renderBedsTable();
    renderPharmacyTable();
    renderLaboratoryTable();
    renderBillingTable();
}

// Helper: Get status badge HTML
function getStatusBadge(status) {
    let styleClass = 'info';
    const s = String(status).toLowerCase();

    if (s.includes('admitted') || s.includes('jiifa') || s.includes('confirmed') || s.includes('xaqiijiyay') || s.includes('in stock') || s.includes('buuxdaa')) {
        styleClass = 'info';
    }
    if (s.includes('completed') || s.includes('dhameystiran') || s.includes('normal') || s.includes('caadi') || s.includes('paid') || s.includes('bixiyay') || s.includes('active') || s.includes('jooga') || s.includes('available') || s.includes('bannaan')) {
        styleClass = 'success';
    }
    if (s.includes('pending') || s.includes('sugayo') || s.includes('partial') || s.includes('qayb') || s.includes('low stock') || s.includes('yar yahay') || s.includes('leave') || s.includes('maqan')) {
        styleClass = 'warning';
    }
    if (s.includes('emergency') || s.includes('degdeg') || s.includes('cancelled') || s.includes('baajiyay') || s.includes('unpaid') || s.includes('lama bixin') || s.includes('abnormal') || s.includes('khatar') || s.includes('out of stock') || s.includes('dhamaaday')) {
        styleClass = 'danger';
    }

    return `<span class="status-pill ${styleClass}"><i class="fa-solid fa-circle-dot"></i> ${status}</span>`;
}

// Table 1: Patients
function renderPatientsTable(filteredList = null) {
    const list = filteredList || state.data.patients;
    const tbody = document.querySelector('#patientsTable tbody');
    if (!tbody) return;

    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="10" style="text-align:center; padding: 24px; color: var(--text-muted);">Wax bukaan ah lagama helin xogta.</td></tr>`;
        return;
    }

    tbody.innerHTML = list.map((item, index) => {
        const actualIndex = state.data.patients.indexOf(item);
        return `
            <tr>
                <td><strong>${item.id}</strong></td>
                <td><span style="font-weight:600;">${item.name}</span></td>
                <td>${item.ageGender}</td>
                <td><span class="status-pill purple" style="font-size:0.7rem;">${item.bloodGroup}</span></td>
                <td>${item.phone}</td>
                <td>${item.wardRoom}</td>
                <td>${item.doctor}</td>
                <td>${item.date}</td>
                <td>${getStatusBadge(item.status)}</td>
                <td class="actions-col">
                    <div class="table-actions">
                        <button class="btn-icon" title="Wax ka bedel" onclick="openEditModal('patients', ${actualIndex})">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button class="btn-icon delete" title="Tirtir" onclick="deleteRecord('patients', ${actualIndex})">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// Table 2: Doctors
function renderDoctorsTable(filteredList = null) {
    const list = filteredList || state.data.doctors;
    const tbody = document.querySelector('#doctorsTable tbody');
    if (!tbody) return;

    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="10" style="text-align:center; padding: 24px; color: var(--text-muted);">Wax dhakhtar ah lagama helin.</td></tr>`;
        return;
    }

    tbody.innerHTML = list.map((item, index) => {
        const actualIndex = state.data.doctors.indexOf(item);
        return `
            <tr>
                <td><strong>${item.id}</strong></td>
                <td>
                    <div style="font-weight:700;">${item.name}</div>
                </td>
                <td><span class="status-pill info">${item.specialty}</span></td>
                <td>${item.phone}</td>
                <td><a href="mailto:${item.email}" style="color:var(--primary); text-decoration:none;">${item.email}</a></td>
                <td>${item.room}</td>
                <td>${item.shift}</td>
                <td><strong>${item.patientCount}</strong> bukaan</td>
                <td>${getStatusBadge(item.status)}</td>
                <td class="actions-col">
                    <div class="table-actions">
                        <button class="btn-icon" title="Wax ka bedel" onclick="openEditModal('doctors', ${actualIndex})">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button class="btn-icon delete" title="Tirtir" onclick="deleteRecord('doctors', ${actualIndex})">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// Table 3: Appointments
function renderAppointmentsTable(filteredList = null) {
    const list = filteredList || state.data.appointments;
    const tbody = document.querySelector('#appointmentsTable tbody');
    if (!tbody) return;

    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding: 24px; color: var(--text-muted);">Wax ballan ah lagama helin.</td></tr>`;
        return;
    }

    tbody.innerHTML = list.map((item, index) => {
        const actualIndex = state.data.appointments.indexOf(item);
        return `
            <tr>
                <td><strong>${item.id}</strong></td>
                <td><strong>${item.patientName}</strong></td>
                <td>${item.doctor}</td>
                <td>${item.department}</td>
                <td><i class="fa-regular fa-clock text-amber"></i> ${item.datetime}</td>
                <td>${item.type}</td>
                <td><strong>${item.fee}</strong></td>
                <td>${getStatusBadge(item.status)}</td>
                <td class="actions-col">
                    <div class="table-actions">
                        <button class="btn-icon" title="Wax ka bedel" onclick="openEditModal('appointments', ${actualIndex})">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button class="btn-icon delete" title="Tirtir" onclick="deleteRecord('appointments', ${actualIndex})">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// Table 4: Beds & Wards
function renderBedsTable(filteredList = null) {
    const list = filteredList || state.data.beds;
    const tbody = document.querySelector('#bedsTable tbody');
    if (!tbody) return;

    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding: 24px; color: var(--text-muted);">Wax sariir ah lagama helin.</td></tr>`;
        return;
    }

    tbody.innerHTML = list.map((item, index) => {
        const actualIndex = state.data.beds.indexOf(item);
        return `
            <tr>
                <td><strong>${item.id}</strong></td>
                <td><span class="status-pill purple">${item.ward}</span></td>
                <td>${item.floor}</td>
                <td>${item.type}</td>
                <td>${item.patient.includes('Bannaan') ? '<em style="color:var(--text-muted)">Bannaan</em>' : `<strong>${item.patient}</strong>`}</td>
                <td>${item.nurse}</td>
                <td>${item.rate}</td>
                <td>${getStatusBadge(item.status)}</td>
                <td class="actions-col">
                    <div class="table-actions">
                        <button class="btn-icon" title="Wax ka bedel" onclick="openEditModal('beds', ${actualIndex})">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button class="btn-icon delete" title="Tirtir" onclick="deleteRecord('beds', ${actualIndex})">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// Table 5: Pharmacy
function renderPharmacyTable(filteredList = null) {
    const list = filteredList || state.data.pharmacy;
    const tbody = document.querySelector('#pharmacyTable tbody');
    if (!tbody) return;

    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding: 24px; color: var(--text-muted);">Wax daawo ah lagama helin.</td></tr>`;
        return;
    }

    tbody.innerHTML = list.map((item, index) => {
        const actualIndex = state.data.pharmacy.indexOf(item);
        return `
            <tr>
                <td><strong>${item.id}</strong></td>
                <td><strong>${item.name}</strong></td>
                <td><span class="status-pill info">${item.category}</span></td>
                <td>${item.manufacturer}</td>
                <td><strong style="${item.stock < 30 ? 'color:var(--status-danger)' : ''}">${item.stock} xabbo</strong></td>
                <td>${item.price}</td>
                <td>${item.expiry}</td>
                <td>${getStatusBadge(item.status)}</td>
                <td class="actions-col">
                    <div class="table-actions">
                        <button class="btn-icon" title="Wax ka bedel" onclick="openEditModal('pharmacy', ${actualIndex})">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button class="btn-icon delete" title="Tirtir" onclick="deleteRecord('pharmacy', ${actualIndex})">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// Table 6: Laboratory
function renderLaboratoryTable(filteredList = null) {
    const list = filteredList || state.data.laboratory;
    const tbody = document.querySelector('#laboratoryTable tbody');
    if (!tbody) return;

    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" style="text-align:center; padding: 24px; color: var(--text-muted);">Wax baaritaan ah lagama helin.</td></tr>`;
        return;
    }

    tbody.innerHTML = list.map((item, index) => {
        const actualIndex = state.data.laboratory.indexOf(item);
        return `
            <tr>
                <td><strong>${item.id}</strong></td>
                <td><strong>${item.patientName}</strong></td>
                <td><span class="status-pill purple">${item.testType}</span></td>
                <td>${item.doctor}</td>
                <td>${item.technician}</td>
                <td>${item.date}</td>
                <td><strong>${item.fee}</strong></td>
                <td>${getStatusBadge(item.result)}</td>
                <td class="actions-col">
                    <div class="table-actions">
                        <button class="btn-icon" title="Wax ka bedel" onclick="openEditModal('laboratory', ${actualIndex})">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button class="btn-icon delete" title="Tirtir" onclick="deleteRecord('laboratory', ${actualIndex})">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// Table 7: Billing
function renderBillingTable(filteredList = null) {
    const list = filteredList || state.data.billing;
    const tbody = document.querySelector('#billingTable tbody');
    if (!tbody) return;

    if (list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="10" style="text-align:center; padding: 24px; color: var(--text-muted);">Wax biilal ah lagama helin.</td></tr>`;
        return;
    }

    tbody.innerHTML = list.map((item, index) => {
        const actualIndex = state.data.billing.indexOf(item);
        return `
            <tr>
                <td><strong>${item.id}</strong></td>
                <td><strong>${item.patientName}</strong></td>
                <td><span title="${item.services}">${item.services.length > 28 ? item.services.substring(0, 28) + '...' : item.services}</span></td>
                <td><strong class="text-teal">$${Number(item.total).toLocaleString()}</strong></td>
                <td class="text-emerald"><strong>$${Number(item.paid).toLocaleString()}</strong></td>
                <td style="${Number(item.balance) > 0 ? 'color:var(--status-danger); font-weight:700;' : ''}">$${Number(item.balance).toLocaleString()}</td>
                <td>${item.method}</td>
                <td>${item.date}</td>
                <td>${getStatusBadge(item.status)}</td>
                <td class="actions-col">
                    <div class="table-actions">
                        <button class="btn-icon" title="Wax ka bedel" onclick="openEditModal('billing', ${actualIndex})">
                            <i class="fa-solid fa-pen-to-square"></i>
                        </button>
                        <button class="btn-icon delete" title="Tirtir" onclick="deleteRecord('billing', ${actualIndex})">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join('');
}

// Overview Mini Tables
function renderOverviewPanels() {
    // Recent patients (take top 4)
    const recentPatientsTbody = document.querySelector('#recentPatientsTable tbody');
    if (recentPatientsTbody) {
        const recents = state.data.patients.slice(0, 4);
        recentPatientsTbody.innerHTML = recents.map(p => `
            <tr>
                <td><strong>${p.name}</strong><br><small style="color:var(--text-muted);">${p.id}</small></td>
                <td>${p.wardRoom.split('-')[0]}</td>
                <td>${p.doctor.split('(')[0]}</td>
                <td>${getStatusBadge(p.status)}</td>
            </tr>
        `).join('');
    }

    // Duty doctors (take top 4)
    const dutyDoctorsTbody = document.querySelector('#dutyDoctorsTable tbody');
    if (dutyDoctorsTbody) {
        const dutyDocs = state.data.doctors.filter(d => d.status.includes('Active') || d.status.includes('Shaqada')).slice(0, 4);
        dutyDoctorsTbody.innerHTML = dutyDocs.map(d => `
            <tr>
                <td><strong>${d.name}</strong></td>
                <td><span class="status-pill info">${d.specialty.split('(')[0]}</span></td>
                <td>${d.room}</td>
                <td><small>${d.shift}</small></td>
            </tr>
        `).join('');
    }
}

// ==========================================================================
// 6. SEARCH & FILTER CONTROLLER
// ==========================================================================

function filterTable(tableType) {
    if (tableType === 'patients') {
        const query = document.getElementById('searchPatients').value.toLowerCase();
        const status = document.getElementById('filterStatusPatients').value;
        const filtered = state.data.patients.filter(item => {
            const matchesQuery = item.name.toLowerCase().includes(query) ||
                                 item.id.toLowerCase().includes(query) ||
                                 item.phone.toLowerCase().includes(query);
            const matchesStatus = status === 'all' || item.status === status;
            return matchesQuery && matchesStatus;
        });
        renderPatientsTable(filtered);
    }
    else if (tableType === 'doctors') {
        const query = document.getElementById('searchDoctors').value.toLowerCase();
        const specialty = document.getElementById('filterSpecialtyDoctors').value;
        const filtered = state.data.doctors.filter(item => {
            const matchesQuery = item.name.toLowerCase().includes(query) ||
                                 item.id.toLowerCase().includes(query) ||
                                 item.room.toLowerCase().includes(query);
            const matchesSpecialty = specialty === 'all' || item.specialty.includes(specialty.split('(')[0].trim());
            return matchesQuery && matchesSpecialty;
        });
        renderDoctorsTable(filtered);
    }
    else if (tableType === 'appointments') {
        const query = document.getElementById('searchAppointments').value.toLowerCase();
        const status = document.getElementById('filterStatusAppointments').value;
        const filtered = state.data.appointments.filter(item => {
            const matchesQuery = item.patientName.toLowerCase().includes(query) ||
                                 item.doctor.toLowerCase().includes(query) ||
                                 item.id.toLowerCase().includes(query);
            const matchesStatus = status === 'all' || item.status === status;
            return matchesQuery && matchesStatus;
        });
        renderAppointmentsTable(filtered);
    }
    else if (tableType === 'beds') {
        const query = document.getElementById('searchBeds').value.toLowerCase();
        const ward = document.getElementById('filterWardBeds').value;
        const filtered = state.data.beds.filter(item => {
            const matchesQuery = item.id.toLowerCase().includes(query) ||
                                 item.ward.toLowerCase().includes(query) ||
                                 item.patient.toLowerCase().includes(query);
            const matchesWard = ward === 'all' || item.ward.includes(ward.split('(')[0].trim());
            return matchesQuery && matchesWard;
        });
        renderBedsTable(filtered);
    }
    else if (tableType === 'pharmacy') {
        const query = document.getElementById('searchPharmacy').value.toLowerCase();
        const status = document.getElementById('filterStockPharmacy').value;
        const filtered = state.data.pharmacy.filter(item => {
            const matchesQuery = item.name.toLowerCase().includes(query) ||
                                 item.category.toLowerCase().includes(query) ||
                                 item.id.toLowerCase().includes(query);
            const matchesStatus = status === 'all' || item.status === status;
            return matchesQuery && matchesStatus;
        });
        renderPharmacyTable(filtered);
    }
    else if (tableType === 'laboratory') {
        const query = document.getElementById('searchLaboratory').value.toLowerCase();
        const result = document.getElementById('filterResultLab').value;
        const filtered = state.data.laboratory.filter(item => {
            const matchesQuery = item.patientName.toLowerCase().includes(query) ||
                                 item.testType.toLowerCase().includes(query) ||
                                 item.id.toLowerCase().includes(query);
            const matchesResult = result === 'all' || item.result === result;
            return matchesQuery && matchesResult;
        });
        renderLaboratoryTable(filtered);
    }
    else if (tableType === 'billing') {
        const query = document.getElementById('searchBilling').value.toLowerCase();
        const status = document.getElementById('filterStatusBilling').value;
        const filtered = state.data.billing.filter(item => {
            const matchesQuery = item.patientName.toLowerCase().includes(query) ||
                                 item.id.toLowerCase().includes(query) ||
                                 item.services.toLowerCase().includes(query);
            const matchesStatus = status === 'all' || item.status === status;
            return matchesQuery && matchesStatus;
        });
        renderBillingTable(filtered);
    }
}

// ==========================================================================
// 7. DYNAMIC CRUD MODAL SYSTEM
// ==========================================================================

const FORM_SCHEMAS = {
    patients: {
        title: "Diiwaangeli Bukaan Cusub",
        editTitle: "Wax ka bedel Bukaanka",
        fields: [
            { id: "id", label: "Patient ID", type: "text", default: () => "PT-" + Math.floor(1000 + Math.random() * 9000), readonly: true },
            { id: "name", label: "Magaca Bukaanka oo Saddexan", type: "text", required: true },
            { id: "ageGender", label: "Da'da & Jinsiga (tusaale: 30 / Lab)", type: "text", required: true },
            { id: "bloodGroup", label: "Kooxda Dhiigga", type: "select", options: ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"] },
            { id: "phone", label: "Telefoonka Bukaanka", type: "text", required: true },
            { id: "wardRoom", label: "Qeybta & Qolka", type: "text", required: true, default: "Qeybta Guud - Qolka 101" },
            { id: "doctor", label: "Dhakhtarka Mas'uulka ah", type: "text", required: true, default: "Dr. Aamina Cilmi" },
            { id: "date", label: "Taariikhda Diiwaangelinta", type: "date", required: true, default: () => new Date().toISOString().split('T')[0] },
            { id: "status", label: "Xaaladda Bukaanka", type: "select", options: ["Jiifa (Admitted)", "Bukaan Socod (Outpatient)", "Fasaxan (Discharged)", "Degdeg (Emergency)"] }
        ]
    },
    doctors: {
        title: "Ku dar Dhakhtar Cusub",
        editTitle: "Wax ka bedel Dhakhtarka",
        fields: [
            { id: "id", label: "Doctor ID", type: "text", default: () => "DOC-" + Math.floor(200 + Math.random() * 800), readonly: true },
            { id: "name", label: "Magaca Dhakhtarka", type: "text", required: true },
            { id: "specialty", label: "Takhasuska (Specialty)", type: "select", options: ["Wadnaha (Cardiology)", "Qalliinka Guud (General Surgery)", "Haweenka (Gynecology)", "Carruurta (Pediatrics)", "Lafaha (Orthopedics)", "Indhaha (Ophthalmology)", "Ilkaha (Dentistry)"] },
            { id: "phone", label: "Telefoonka Xafiiska", type: "text", required: true },
            { id: "email", label: "Email-ka Dhakhtarka", type: "email", required: true },
            { id: "room", label: "Qolka / Xafiiska", type: "text", required: true, default: "Xafiiska 105" },
            { id: "shift", label: "Shift-ka Shaqada", type: "select", options: ["Subax (08:00 - 14:00)", "Galab (14:00 - 20:00)", "Habeen (20:00 - 08:00)", "24 Saac U Diyaar ah (On Call)"] },
            { id: "patientCount", label: "Tirada Bukaanka u Qoran", type: "number", default: 0 },
            { id: "status", label: "Xaaladda Shaqada", type: "select", options: ["Shaqada Jooga (Active)", "Fasax ku maqan (Leave)", "Booqasho Dibadeed"] }
        ]
    },
    appointments: {
        title: "Samee Ballan Cusub",
        editTitle: "Wax ka bedel Ballanta",
        fields: [
            { id: "id", label: "Appointment ID", type: "text", default: () => "APT-" + Math.floor(300 + Math.random() * 700), readonly: true },
            { id: "patientName", label: "Magaca Bukaanka", type: "text", required: true },
            { id: "doctor", label: "Dhakhtarka Ballanta", type: "text", required: true, default: "Dr. Aamina Cilmi" },
            { id: "department", label: "Qeybta Caafimaadka", type: "text", required: true, default: "Wadnaha (Cardiology)" },
            { id: "datetime", label: "Taariikhda & Waqtiga", type: "text", required: true, default: () => new Date().toISOString().split('T')[0] + " 10:00 AM" },
            { id: "type", label: "Nooca Ballanta", type: "select", options: ["Baaritaan Joogto ah (Routine)", "Daba-gal (Follow-up)", "La-tashiga Qalliinka", "Degdeg (Urgent)"] },
            { id: "fee", label: "Qiimaha Ballanta ($)", type: "text", required: true, default: "$25" },
            { id: "status", label: "Xaaladda Ballanta", type: "select", options: ["La Sugayo (Pending)", "La Xaqiijiyay (Confirmed)", "Dhameystiran (Completed)", "La Baajiyay (Cancelled)"] }
        ]
    },
    beds: {
        title: "Ku dar Sariir Cusub",
        editTitle: "Wax ka bedel Sariirta",
        fields: [
            { id: "id", label: "Sariirta No", type: "text", default: () => "BED-" + String(state.data.beds.length + 1).padStart(2, '0') },
            { id: "ward", label: "Qeybta / Ward", type: "select", options: ["ICU (Daryeelka Degdeg)", "Qeybta Guud (General Ward)", "Umusha & Dhallaanka (Maternity)", "Qalliinka (Surgical Ward)", "Kala-Go'idda (VIP / Private)"] },
            { id: "floor", label: "Dabaqa (Floor)", type: "select", options: ["Dabaqa 1-aad", "Dabaqa 2-aad", "Dabaqa 3-aad", "Dhulka Hoose"] },
            { id: "type", label: "Nooca Sariirta", type: "text", required: true, default: "Sariir Caadi ah" },
            { id: "patient", label: "Bukaanka Jiifa (haddii ay buuxdo)", type: "text", default: "Bannaan (None)" },
            { id: "nurse", label: "Kalkalisada Mas'uulka ah", type: "text", required: true, default: "Kalkaaliso Deeqa Cabdi" },
            { id: "rate", label: "Qiimaha Maalintii", type: "text", required: true, default: "$40/maalintii" },
            { id: "status", label: "Xaaladda Sariirta", type: "select", options: ["Bannaan (Available)", "Buuxda (Occupied)", "Dayactir ku socda (Maintenance)"] }
        ]
    },
    pharmacy: {
        title: "Ku dar Daawo Cusub",
        editTitle: "Wax ka bedel Daawada",
        fields: [
            { id: "id", label: "Koodhka Daawada", type: "text", default: () => "MED-" + Math.floor(500 + Math.random() * 500), readonly: true },
            { id: "name", label: "Magaca Daawada & Awoodda", type: "text", required: true, placeholder: "tusaale: Amoxicillin 500mg" },
            { id: "category", label: "Qeybta Daawada", type: "text", required: true, placeholder: "tusaale: Antibiotic" },
            { id: "manufacturer", label: "Shirkadda Sameysay", type: "text", required: true },
            { id: "stock", label: "Tirada Hadhay (Stock)", type: "number", required: true, default: 100 },
            { id: "price", label: "Qiimaha Xabbaddii ($)", type: "text", required: true, default: "$1.50" },
            { id: "expiry", label: "Taariikhda Dhicitaanka", type: "date", required: true, default: "2027-12-31" },
            { id: "status", label: "Xaaladda Kaydka", type: "select", options: ["Waa Buuxdaa (In Stock)", "Wuu Yar yahay (Low Stock)", "Wuu Dhamaaday (Out of Stock)"] }
        ]
    },
    laboratory: {
        title: "Dalbo Baaritaan Cusub",
        editTitle: "Wax ka bedel Baaritaanka",
        fields: [
            { id: "id", label: "Lab Test Code", type: "text", default: () => "LAB-" + Math.floor(600 + Math.random() * 400), readonly: true },
            { id: "patientName", label: "Magaca Bukaanka", type: "text", required: true },
            { id: "testType", label: "Nooca Baaritaanka (Test)", type: "text", required: true, placeholder: "tusaale: CBC, Blood Sugar, X-Ray" },
            { id: "doctor", label: "Dhakhtarka Dalbaday", type: "text", required: true, default: "Dr. Aamina Cilmi" },
            { id: "technician", label: "Farsamo-yaqaanka (Lab Tech)", type: "text", required: true, default: "Farxiyo Cismaan (Lab Tech)" },
            { id: "date", label: "Taariikhda Baaritaanka", type: "date", required: true, default: () => new Date().toISOString().split('T')[0] },
            { id: "fee", label: "Qiimaha Baaritaanka ($)", type: "text", required: true, default: "$20" },
            { id: "result", label: "Natiijada (Result)", type: "select", options: ["La Sugayo (Pending)", "Caadi (Normal)", "Khatar / Sare (Abnormal)"] }
        ]
    },
    billing: {
        title: "Jar Biil Cusub",
        editTitle: "Wax ka bedel Biilka",
        fields: [
            { id: "id", label: "Invoice Number", type: "text", default: () => "INV-" + Math.floor(700 + Math.random() * 300), readonly: true },
            { id: "patientName", label: "Magaca Bukaanka", type: "text", required: true },
            { id: "services", label: "Adeegyada La Bixiyay", type: "textarea", required: true, placeholder: "tusaale: Daawo, Qalliin, Jiif 2 Maalmood" },
            { id: "total", label: "Wadarta Biilka ($)", type: "number", required: true, default: 100 },
            { id: "paid", label: "Lacagta La Bixiyay ($)", type: "number", required: true, default: 100 },
            { id: "balance", label: "Haraaga Dhiman ($)", type: "number", required: true, default: 0 },
            { id: "method", label: "Habka Lacag-bixinta", type: "select", options: ["EVC Plus / Hormuud", "E-Dahab / Somtel", "Kaarka Bangiga (Premier Bank)", "Kaash (USD Cash)", "Lama Bixin Wali"] },
            { id: "date", label: "Taariikhda Biilka", type: "date", required: true, default: () => new Date().toISOString().split('T')[0] },
            { id: "status", label: "Xaaladda Biilka", type: "select", options: ["Waa La Bixiyay (Paid)", "Qayb baa dhiman (Partial)", "Lama Bixin (Unpaid)"] }
        ]
    }
};

function openCreateModal(tableType) {
    state.modalTargetTable = tableType;
    state.modalEditIndex = null;

    const schema = FORM_SCHEMAS[tableType];
    if (!schema) return;

    document.getElementById('modalTitle').textContent = schema.title;
    document.getElementById('modalSubmitBtn').textContent = "Keydi Xogta Cusub";
    
    buildModalFields(schema.fields);
    document.getElementById('genericModal').classList.add('active');
}

function openEditModal(tableType, index) {
    state.modalTargetTable = tableType;
    state.modalEditIndex = index;

    const schema = FORM_SCHEMAS[tableType];
    const itemData = state.data[tableType][index];
    if (!schema || !itemData) return;

    document.getElementById('modalTitle').textContent = schema.editTitle;
    document.getElementById('modalSubmitBtn').textContent = "Cusbooneysii Xogta";

    buildModalFields(schema.fields, itemData);
    document.getElementById('genericModal').classList.add('active');
}

function buildModalFields(fields, currentData = null) {
    const container = document.getElementById('modalDynamicFields');
    container.innerHTML = fields.map(f => {
        let val = '';
        if (currentData) {
            val = currentData[f.id] !== undefined ? currentData[f.id] : '';
        } else if (f.default) {
            val = typeof f.default === 'function' ? f.default() : f.default;
        }

        const isFull = f.type === 'textarea';

        if (f.type === 'select') {
            const optionsHtml = f.options.map(opt => `<option value="${opt}" ${val === opt ? 'selected' : ''}>${opt}</option>`).join('');
            return `
                <div class="form-group ${isFull ? 'full-width' : ''}">
                    <label for="field_${f.id}">${f.label}</label>
                    <select id="field_${f.id}" name="${f.id}" ${f.required ? 'required' : ''}>
                        ${optionsHtml}
                    </select>
                </div>
            `;
        } else if (f.type === 'textarea') {
            return `
                <div class="form-group full-width">
                    <label for="field_${f.id}">${f.label}</label>
                    <textarea id="field_${f.id}" name="${f.id}" rows="3" ${f.required ? 'required' : ''} placeholder="${f.placeholder || ''}">${val}</textarea>
                </div>
            `;
        } else {
            return `
                <div class="form-group ${isFull ? 'full-width' : ''}">
                    <label for="field_${f.id}">${f.label}</label>
                    <input type="${f.type}" id="field_${f.id}" name="${f.id}" value="${val}" ${f.readonly ? 'readonly style="background-color:var(--bg-surface-secondary);"' : ''} ${f.required ? 'required' : ''} placeholder="${f.placeholder || ''}">
                </div>
            `;
        }
    }).join('');
}

function closeGenericModal() {
    document.getElementById('genericModal').classList.remove('active');
}

function handleFormSubmit(e) {
    e.preventDefault();
    const tableType = state.modalTargetTable;
    const schema = FORM_SCHEMAS[tableType];
    if (!schema) return;

    const formData = {};
    schema.fields.forEach(f => {
        const input = document.getElementById(`field_${f.id}`);
        if (input) {
            formData[f.id] = input.value;
        }
    });

    // Special auto calculations for billing table
    if (tableType === 'billing') {
        const total = Number(formData.total) || 0;
        const paid = Number(formData.paid) || 0;
        formData.balance = Math.max(0, total - paid);
        if (formData.balance === 0 && total > 0) {
            formData.status = "Waa La Bixiyay (Paid)";
        } else if (paid > 0 && formData.balance > 0) {
            formData.status = "Qayb baa dhiman (Partial)";
        } else if (paid === 0) {
            formData.status = "Lama Bixin (Unpaid)";
        }
    }

    // Insert or update
    if (state.modalEditIndex !== null) {
        state.data[tableType][state.modalEditIndex] = formData;
        showToast("Xogta si guul leh ayaa loo cusbooneysiiyay!", "success");
    } else {
        state.data[tableType].unshift(formData);
        showToast("Xogta cusub si guul leh ayaa loo keydiyay!", "success");
    }

    saveState();
    refreshCurrentTable(tableType);
    closeGenericModal();
}

function deleteRecord(tableType, index) {
    if (confirm("Ma hubtaa inaad tirtirto xogtan? Talaabadan dib looma noqon karo.")) {
        state.data[tableType].splice(index, 1);
        saveState();
        refreshCurrentTable(tableType);
        showToast("Xogta waa la tirtiray!", "danger");
    }
}

function refreshCurrentTable(tableType) {
    if (tableType === 'patients') renderPatientsTable();
    else if (tableType === 'doctors') renderDoctorsTable();
    else if (tableType === 'appointments') renderAppointmentsTable();
    else if (tableType === 'beds') renderBedsTable();
    else if (tableType === 'pharmacy') renderPharmacyTable();
    else if (tableType === 'laboratory') renderLaboratoryTable();
    else if (tableType === 'billing') renderBillingTable();

    renderOverviewPanels();
    refreshCharts();
}

// ==========================================================================
// 8. TOAST NOTIFICATION
// ==========================================================================
function showToast(message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = '<i class="fa-solid fa-circle-check"></i>';
    if (type === 'danger') icon = '<i class="fa-solid fa-triangle-exclamation"></i>';
    if (type === 'warning') icon = '<i class="fa-solid fa-circle-exclamation"></i>';

    toast.innerHTML = `${icon} <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(10px)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}

// ==========================================================================
// 9. EXPORT TO CSV
// ==========================================================================
function exportTableToCSV(tableType) {
    const list = state.data[tableType];
    if (!list || list.length === 0) {
        showToast("Ma jirto xog loo dhoofin karo CSV!", "warning");
        return;
    }

    const headers = Object.keys(list[0]);
    const csvRows = [];
    csvRows.push(headers.join(','));

    list.forEach(row => {
        const values = headers.map(header => {
            const escaped = ('' + (row[header] || '')).replace(/"/g, '\\"');
            return `"${escaped}"`;
        });
        csvRows.push(values.join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.setAttribute('download', `ShifoCare_${tableType}_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    showToast(`Diiwaanka ${tableType} waxaa loo dhoofiyay CSV!`, "success");
}

// ==========================================================================
// 10. VISUAL ANALYTICS (CHART.JS)
// ==========================================================================
function initDashboardCharts() {
    const ctxFlow = document.getElementById('patientFlowChart');
    const ctxBeds = document.getElementById('bedOccupancyChart');

    if (ctxFlow) {
        patientFlowChartInstance = new Chart(ctxFlow, {
            type: 'line',
            data: {
                labels: ['Sabti', 'Axad', 'Isniin', 'Talaado', 'Arbaco', 'Khamiis', 'Jimco'],
                datasets: [
                    {
                        label: 'Bukaan Socod (OPD)',
                        data: [35, 48, 52, 60, 45, 58, 38],
                        borderColor: '#0284c7',
                        backgroundColor: 'rgba(2, 132, 199, 0.1)',
                        fill: true,
                        tension: 0.38,
                        pointBackgroundColor: '#0284c7'
                    },
                    {
                        label: 'Bukaan Jiif (Admissions)',
                        data: [12, 18, 15, 22, 19, 25, 14],
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.08)',
                        fill: true,
                        tension: 0.38,
                        pointBackgroundColor: '#10b981'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'top', labels: { font: { family: 'Plus Jakarta Sans', weight: 600 } } }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: { color: 'rgba(150, 150, 150, 0.1)' }
                    },
                    x: {
                        grid: { display: false }
                    }
                }
            }
        });
    }

    if (ctxBeds) {
        // Calculate wards
        const wardCounts = {
            'ICU': state.data.beds.filter(b => b.ward.includes('ICU')).length,
            'Qeybta Guud': state.data.beds.filter(b => b.ward.includes('Guud')).length,
            'Umusha': state.data.beds.filter(b => b.ward.includes('Umusha')).length,
            'VIP': state.data.beds.filter(b => b.ward.includes('VIP')).length
        };

        bedOccupancyChartInstance = new Chart(ctxBeds, {
            type: 'doughnut',
            data: {
                labels: ['ICU Degdeg', 'Qeybta Guud', 'Umusha', 'VIP / Gaar'],
                datasets: [{
                    data: [wardCounts['ICU'], wardCounts['Qeybta Guud'], wardCounts['Umusha'], wardCounts['VIP']],
                    backgroundColor: ['#ef4444', '#0284c7', '#8b5cf6', '#10b981'],
                    borderWidth: 2,
                    borderColor: 'var(--bg-surface)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'bottom', labels: { font: { family: 'Plus Jakarta Sans', weight: 600 } } }
                },
                cutout: '68%'
            }
        });
    }
}

function refreshCharts() {
    if (patientFlowChartInstance) {
        patientFlowChartInstance.update();
    }
    if (bedOccupancyChartInstance) {
        const wardCounts = {
            'ICU': state.data.beds.filter(b => b.ward.includes('ICU')).length,
            'Qeybta Guud': state.data.beds.filter(b => b.ward.includes('Guud')).length,
            'Umusha': state.data.beds.filter(b => b.ward.includes('Umusha')).length,
            'VIP': state.data.beds.filter(b => b.ward.includes('VIP')).length
        };
        bedOccupancyChartInstance.data.datasets[0].data = [
            wardCounts['ICU'],
            wardCounts['Qeybta Guud'],
            wardCounts['Umusha'],
            wardCounts['VIP']
        ];
        bedOccupancyChartInstance.update();
    }
}
