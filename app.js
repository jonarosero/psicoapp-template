
(function () {
  const root = document.getElementById('root');

  const ICONS = {
    search:'<circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path>',
    bell:'<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>',
    settings:'<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1.08-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9c.34.66.94 1 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
    home:'<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><path d="M9 22V12h6v10"></path>',
    users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
    user:'<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
    calendar:'<rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path>',
    card:'<rect width="20" height="14" x="2" y="5" rx="2"></rect><path d="M2 10h20"></path>',
    list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"></path>',
    receipt:'<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 6v2m0 8v2"></path>',
    key:'<circle cx="7.5" cy="15.5" r="5.5"></circle><path d="m21 2-9.6 9.6"></path><path d="m15.5 7.5 3 3L22 7l-3-3"></path>',
    plus:'<path d="M12 5v14M5 12h14"></path>',
    filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
    more:'<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
    check:'<path d="M20 6 9 17l-5-5"></path>',
    x:'<path d="M18 6 6 18M6 6l12 12"></path>',
    arrL:'<path d="m15 18-6-6 6-6"></path>',
    arrR:'<path d="m9 18 6-6-6-6"></path>',
    download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
    upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
    edit:'<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4z"></path>',
    mail:'<rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-10 5L2 7"></path>',
    phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.18 4.18 2 2 0 0 1 4.16 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.91.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"></path>',
    pin:'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
    clock:'<circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path>',
    briefcase:'<rect width="20" height="14" x="2" y="7" rx="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
    brain:'<path d="M12 4.5a2.5 2.5 0 0 0-5 0v.34a3 3 0 0 0-2 2.83v.5a3 3 0 0 0-2 2.83 3 3 0 0 0 2 2.83v.5a3 3 0 0 0 2 2.83v.34a2.5 2.5 0 0 0 5 0z"></path><path d="M12 4.5a2.5 2.5 0 0 1 5 0v.34a3 3 0 0 1 2 2.83v.5a3 3 0 0 1 2 2.83 3 3 0 0 1-2 2.83v.5a3 3 0 0 1-2 2.83v.34a2.5 2.5 0 0 1-5 0z"></path>',
    book:'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
    alert:'<path d="M12 9v4m0 4h.01"></path><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
    info:'<circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4M12 8h.01"></path>',
    check2:'<circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path>',
    package:'<path d="M16.5 9.4 7.55 4.24"></path><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',
    fileText:'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line>',
    trending:'<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline>',
    building:'<rect width="16" height="20" x="4" y="2" rx="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"></path>',
    shieldCheck:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path>',
    lock:'<rect x="3" y="11" width="18" height="11" rx="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
    logout:'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
    image:'<rect x="3" y="3" width="18" height="18" rx="2"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-5-5L5 21"></path>',
    signal:'<path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path>',
    wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',
    battery:'<rect x="2" y="7" width="18" height="10" rx="2"></rect><line x1="22" y1="11" x2="22" y2="13"></line><rect x="4" y="9" width="13" height="6" fill="currentColor" stroke="none"></rect>'
  };

  const NAV_BY_ROLE = {
    PSYCHOLOGIST: [
      { group: 'Trabajo', items: [
        { id: 'dashboard', label: 'Dashboard', icon: 'home' },
        { id: 'agenda', label: 'Agenda', icon: 'calendar', badge: '3' },
        { id: 'pacientes', label: 'Pacientes', icon: 'users' },
      ]},
      { group: 'Finanzas', items: [
        { id: 'pagos', label: 'Pagos & Paquetes', icon: 'card' },
        { id: 'facturacion', label: 'Facturación SRI', icon: 'receipt' },
      ]},
      { group: 'Cuenta', items: [
        { id: 'perfil', label: 'Mi perfil', icon: 'user' },
      ]},
    ],
    ADMIN: [
      { group: 'Clínica', items: [
        { id: 'dashboard', label: 'Dashboard', icon: 'home' },
        { id: 'agenda', label: 'Agenda', icon: 'calendar' },
        { id: 'pacientes', label: 'Pacientes', icon: 'users' },
      ]},
      { group: 'Finanzas', items: [
        { id: 'pagos', label: 'Pagos & Paquetes', icon: 'card' },
        { id: 'facturacion', label: 'Facturación SRI', icon: 'receipt' },
      ]},
      { group: 'Administración', items: [
        { id: 'admin-psicologos', label: 'Psicólogos', icon: 'users' },
        { id: 'admin-accesos', label: 'Accesos', icon: 'key' },
        { id: 'admin-clinica', label: 'Datos clínica', icon: 'building' },
        { id: 'admin-certificado', label: 'Certificado SRI', icon: 'shieldCheck' },
      ]},
    ],
    PATIENT: [],
  };

  const TITLE_BY_ROUTE = {
    dashboard: ['Dashboard', 'Resumen del día y de tus pacientes'],
    agenda: ['Agenda', 'Vista semanal · multi-psicólogo'],
    pacientes: ['Pacientes', 'Listado completo y filtros'],
    'paciente-detalle': ['Pacientes', 'Ficha del paciente'],
    pagos: ['Pagos & Paquetes', 'Cuadre y registro de pagos'],
    facturacion: ['Facturación SRI', 'Comprobantes electrónicos'],
    perfil: ['Mi perfil', 'Datos profesionales'],
    'admin-psicologos': ['Psicólogos', 'Gestión de profesionales'],
    'admin-accesos': ['Accesos', 'Auditoría de permisos'],
    'admin-clinica': ['Datos clínica', 'Configuración fiscal'],
    'admin-certificado': ['Certificado SRI', 'Firma electrónica'],
    'patient-portal': ['Portal del paciente', 'Experiencia móvil'],
  };

  const state = {
    role: localStorage.getItem('psicoapp_role') || 'PSYCHOLOGIST',
    lastDesktopRole: localStorage.getItem('psicoapp_last_desktop_role') || 'PSYCHOLOGIST',
    toast: null,
    patientsQuery: '',
    patientsStatus: 'ALL',
    patientsPsychologist: 'all',
  };

  function icon(name, size = 18, className = '', style = '') {
    const body = ICONS[name] || '<circle cx="12" cy="12" r="9"></circle>';
    const styleAttr = style ? ` style="${style}"` : '';
    const classAttr = className ? ` class="${className}"` : '';
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"${classAttr}${styleAttr}>${body}</svg>`;
  }

  function escapeHtml(v) {
    return String(v ?? '').replace(/[&<>"]/g, function (s) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[s] || s;
    });
  }

  function currentUser() {
    if (state.role === 'ADMIN') return PSYCHOLOGISTS[0];
    if (state.role === 'PSYCHOLOGIST') return PSYCHOLOGISTS[1];
    return { id: 'u-pat', name: 'Camila Salazar', email: 'camila.salazar@gmail.com', role: 'PATIENT', patientId: 'p-001', title: 'Paciente' };
  }

  function ROLE_LABEL(role) {
    return { ADMIN: 'Administrador', PSYCHOLOGIST: 'Psicólogo', PATIENT: 'Paciente' }[role] || role;
  }

  function patientById(id) { return PATIENTS.find(p => p.id === id); }
  function psychologistById(id) { return PSYCHOLOGISTS.find(p => p.id === id); }
  function packageByPatient(id) { return PACKAGES.find(p => p.patientId === id && p.status === 'ACTIVE'); }
  function appointmentsFor(patientId) { return APPOINTMENTS.filter(a => a.patientId === patientId).sort((a,b) => b.startAt - a.startAt); }
  function invoiceStatusMeta(status) {
    return {
      AUTHORIZED: ['chip-success', 'Autorizada'],
      SIGNED: ['chip-info', 'Firmada'],
      REJECTED: ['chip-danger', 'Rechazada'],
      DRAFT: ['chip-neutral', 'Borrador'],
    }[status] || ['chip-neutral', status];
  }
  function patientStatusMeta(status) {
    return {
      ACTIVE: ['chip-success', 'Activo'],
      PAUSED: ['chip-warning', 'En pausa'],
      ARCHIVED: ['chip-neutral', 'Archivado'],
    }[status] || ['chip-neutral', status];
  }
  function appointmentStatusMeta(status) {
    return {
      SCHEDULED: ['chip-info', 'Programada'],
      CONFIRMED: ['chip-primary', 'Confirmada'],
      COMPLETED: ['chip-success', 'Realizada'],
      NO_SHOW: ['chip-danger', 'No asistió'],
    }[status] || ['chip-neutral', status];
  }
  function taskStatusMeta(status) {
    return {
      PENDING: ['chip-neutral', 'Pendiente'],
      IN_PROGRESS: ['chip-info', 'En progreso'],
      COMPLETED: ['chip-success', 'Completada'],
      OVERDUE: ['chip-danger', 'Vencida'],
    }[status] || ['chip-neutral', status];
  }
  function ageOf(dob) {
    const a = TODAY.getFullYear() - dob.getFullYear();
    const m = TODAY.getMonth() - dob.getMonth();
    return (m < 0 || (m === 0 && TODAY.getDate() < dob.getDate())) ? a - 1 : a;
  }

  function saveRole() {
    localStorage.setItem('psicoapp_role', state.role);
    localStorage.setItem('psicoapp_last_desktop_role', state.lastDesktopRole);
  }

  function parseHash() {
    const raw = (location.hash || '').replace(/^#/, '');
    if (!raw) return state.role === 'PATIENT' ? { name: 'patient-portal', tab: 'home' } : { name: 'dashboard' };
    const [path, qstr = ''] = raw.split('?');
    const params = new URLSearchParams(qstr);
    if (path.startsWith('paciente/')) return { name: 'paciente-detalle', patientId: path.split('/')[1], tab: params.get('tab') || 'perfil' };
    if (path.startsWith('patient/')) return { name: 'patient-portal', tab: path.split('/')[1] || 'home' };
    return { name: path || 'dashboard' };
  }

  function routeToHash(route) {
    if (route.name === 'paciente-detalle') return `paciente/${route.patientId}?tab=${encodeURIComponent(route.tab || 'perfil')}`;
    if (route.name === 'patient-portal') return `patient/${route.tab || 'home'}`;
    return route.name;
  }

  function navigate(route, replace) {
    const next = '#' + routeToHash(route);
    if (replace) location.replace(next); else location.hash = next;
  }

  function ensureValidRoute() {
    const route = parseHash();
    if (state.role === 'PATIENT' && route.name !== 'patient-portal') {
      navigate({ name: 'patient-portal', tab: 'home' }, true);
      return parseHash();
    }
    if (state.role !== 'PATIENT' && route.name === 'patient-portal') {
      navigate({ name: 'dashboard' }, true);
      return parseHash();
    }
    return route;
  }

  function setRole(role) {
    if (role !== 'PATIENT') state.lastDesktopRole = role;
    if (role === 'PATIENT' && state.role !== 'PATIENT') state.lastDesktopRole = state.role || state.lastDesktopRole || 'PSYCHOLOGIST';
    state.role = role;
    saveRole();
    if (role === 'PATIENT') navigate({ name: 'patient-portal', tab: 'home' });
    else navigate({ name: 'dashboard' });
  }

  function showToast(msg, kind = 'success') {
    state.toast = { msg, kind, id: Date.now() };
    render();
    clearTimeout(showToast._timer);
    showToast._timer = setTimeout(() => {
      state.toast = null;
      render();
    }, 2500);
  }

  function renderToast() {
    const t = state.toast;
    if (!t) return '';
    const colors = {
      success: ['var(--success-bg)', 'var(--success)', 'check2'],
      error: ['var(--danger-bg)', 'var(--danger)', 'alert'],
      info: ['var(--info-bg)', 'var(--info)', 'info'],
    };
    const meta = colors[t.kind] || colors.info;
    return `<div class="app-toast"><div style="width:28px;height:28px;border-radius:8px;background:${meta[0]};color:${meta[1]};display:grid;place-items:center;">${icon(meta[2],16)}</div><div style="font-size:13px;font-weight:500;">${escapeHtml(t.msg)}</div></div>`;
  }

  function renderSidebar(route) {
    const user = currentUser();
    const groups = NAV_BY_ROLE[state.role] || [];
    return `<aside class="sidebar">
      <div class="sidebar-brand"><div class="brand-mark">Pa</div><div>PsicoApp</div></div>
      <div class="role-switcher" title="Cambiar rol (prototipo offline)">
        <div class="role-dot"></div>
        <select id="role-switcher">
          <option value="ADMIN" ${state.role === 'ADMIN' ? 'selected' : ''}>Administrador</option>
          <option value="PSYCHOLOGIST" ${state.role === 'PSYCHOLOGIST' ? 'selected' : ''}>Psicólogo</option>
          <option value="PATIENT" ${state.role === 'PATIENT' ? 'selected' : ''}>Paciente (portal mobile)</option>
        </select>
      </div>
      <div style="overflow:auto;flex:1;">
        ${groups.map(g => `<div class="nav-group"><div class="nav-label">${g.group}</div>${g.items.map(it => {
            const active = route.name === it.id || route.name.startsWith(it.id + '-') || (it.id === 'pacientes' && route.name === 'paciente-detalle');
            return `<div class="nav-item ${active ? 'active' : ''}" data-nav="${it.id}">${icon(it.icon, 18, 'nav-icon')}<span>${it.label}</span>${it.badge ? `<span class="nav-badge">${it.badge}</span>` : ''}</div>`;
          }).join('')}</div>`).join('')}
      </div>
      <div class="sidebar-footer">
        <div class="avatar" style="background:${colorFor(user.id)}">${initialsOf(user.name)}</div>
        <div class="user-info"><div class="user-name">${escapeHtml(user.name)}</div><div class="user-role">${ROLE_LABEL(user.role)}</div></div>
        <button class="icon-btn" data-action="logout" title="Cerrar sesión">${icon('logout',16)}</button>
      </div>
    </aside>`;
  }

  function renderTopbar(route) {
    const meta = TITLE_BY_ROUTE[route.name] || ['', ''];
    return `<header class="topbar">
      <div class="crumbs"><span>PsicoApp</span>${icon('arrR',12)}<span class="crumb-active">${meta[0]}</span>${meta[1] ? `${icon('arrR',12)}<span class="muted">${meta[1]}</span>` : ''}</div>
      <div class="topbar-actions">
        <div class="search-input">${icon('search',15)}<span>Buscar paciente, factura...</span><kbd>⌘K</kbd></div>
        <button class="icon-btn" title="Notificaciones">${icon('bell',17)}<span class="ping"></span></button>
        <button class="icon-btn" title="Configuración">${icon('settings',17)}</button>
      </div>
    </header>`;
  }

  function shell(route, content) {
    return `<div class="app">${renderSidebar(route)}${renderTopbar(route)}<main class="main">${content}</main></div>${renderToast()}`;
  }

  function statCard(label, value, iconName, delta, tone) {
    return `<div class="stat clickable"><div class="stat-label"><div class="stat-icon">${icon(iconName,15)}</div>${label}</div><div class="stat-value">${value}</div><div class="stat-delta ${tone || ''}">${delta || ''}</div></div>`;
  }

  function dashboardPage() {
    const user = currentUser();
    const todayStart = new Date(TODAY); todayStart.setHours(0,0,0,0);
    const todayEnd = new Date(TODAY); todayEnd.setHours(23,59,59,999);
    const appointments = APPOINTMENTS.filter(a => a.startAt >= todayStart && a.startAt <= todayEnd)
      .filter(a => state.role === 'ADMIN' || a.psychologistIds.includes(user.id))
      .sort((a,b) => a.startAt - b.startAt);

    const patientIds = state.role === 'ADMIN'
      ? PATIENTS.map(p => p.id)
      : PATIENTS.filter(p => p.primaryId === user.id || p.collaborators.some(c => c.id === user.id)).map(p => p.id);
    const activePatients = PATIENTS.filter(p => patientIds.includes(p.id) && p.status === 'ACTIVE');
    const activePackages = PACKAGES.filter(p => p.status === 'ACTIVE' && patientIds.includes(p.patientId));
    const outstanding = INVOICES.filter(i => i.status !== 'AUTHORIZED').length;

    return `<div>
      <div class="page-head">
        <div>
          <h1 class="page-title">Buen día, ${escapeHtml(user.name.split(' ').slice(0,2).join(' '))} 👋</h1>
          <p class="page-sub">Hoy es ${TODAY.toLocaleDateString('es-EC', { weekday: 'long', day: 'numeric', month: 'long' })} · Tienes ${appointments.length} citas programadas.</p>
        </div>
        <div class="row"><button class="btn btn-bordered" data-action="export-agenda">${icon('download',15)} Exportar agenda</button><button class="btn btn-primary" data-nav="agenda">${icon('plus',15)} Nueva cita</button></div>
      </div>

      <div class="stat-grid">
        ${statCard('Citas hoy', appointments.length, 'calendar', `${appointments.filter(a => a.status === 'CONFIRMED').length} confirmadas`) }
        ${statCard('Pacientes activos', activePatients.length, 'users', `+2 este mes`, 'up') }
        ${statCard('Paquetes activos', activePackages.length, 'package', `${activePackages.reduce((acc, p) => acc + (p.totalSessions - p.sessionsUsed), 0)} sesiones por consumir`) }
        ${statCard('Por cobrar (mes)', fmtMoney(180), 'card', `${outstanding} pendientes`, 'down') }
      </div>

      <div class="page-grid-2" style="margin-top:16px;">
        <div class="card">
          <div class="card-head">${icon('calendar',16)}<div style="flex:1"><h3 class="card-title">Próximas citas de hoy</h3><p class="card-sub">Lo que viene en las próximas horas</p></div><button class="btn btn-ghost btn-sm" data-nav="agenda">Ver agenda ${icon('arrR',13)}</button></div>
          <div>
            ${appointments.length ? appointments.map((a, i) => {
              const pat = patientById(a.patientId);
              const psis = a.psychologistIds.map(psychologistById).filter(Boolean);
              return `<div style="padding:14px 20px;display:flex;align-items:center;gap:14px;border-top:${i ? '1px solid var(--border)' : 'none'};" data-patient="${pat.id}">
                <div style="text-align:center;min-width:56px;"><div style="font-weight:600;font-size:15px;">${fmtTime(a.startAt)}</div><div class="xs muted">${a.durationMin} min</div></div>
                <div style="width:1px;height:36px;background:var(--border);"></div>
                <div class="avatar" style="background:${colorFor(pat.id)}">${initialsOf(`${pat.nombres} ${pat.apellidos}`)}</div>
                <div style="flex:1;min-width:0;"><div class="bold truncate">${escapeHtml(pat.nombres)} ${escapeHtml(pat.apellidos)}</div><div class="xs muted truncate">${escapeHtml(pat.motivoConsulta.slice(0,70))}…</div></div>
                <div class="row" style="gap:6px;">${psis.length > 1 ? `<span class="chip chip-info">${icon('users',11)} Co-terapia</span>` : ''}${a.paymentStatus === 'PAID' ? `<span class="chip chip-success">Pagado</span>` : `<span class="chip chip-warning">Pendiente</span>`}<span class="chip chip-neutral">${escapeHtml(a.location || 'Consultorio')}</span></div>
              </div>`;
            }).join('') : `<div class="empty"><div class="empty-icon">${icon('calendar',20)}</div><div>No tienes citas programadas hoy</div></div>`}
          </div>
        </div>

        <div class="stack-16">
          <div class="card">
            <div class="card-head">${icon('alert',16)}<h3 class="card-title">Atención requerida</h3></div>
            <div class="card-body" style="padding-top:0;">
              ${[
                { ic: 'alert', color: 'var(--danger)', bg: 'var(--danger-bg)', t: '1 factura rechazada por SRI', d: 'Esteban Carrillo · 22-ene · Error 65' },
                { ic: 'clock', color: 'var(--warning)', bg: 'var(--warning-bg)', t: '3 pagos pendientes esta semana', d: 'Tomás I., Mateo O., Sofía P.' },
                { ic: 'package', color: 'var(--info)', bg: 'var(--info-bg)', t: 'Paquete por agotar', d: 'Sofía Pareja — 3 de 10 sesiones restantes' },
              ].map((x, i) => `<div style="display:flex;gap:10px;padding:12px 0;border-top:${i ? '1px solid var(--border)' : 'none'};"><div style="width:28px;height:28px;border-radius:8px;background:${x.bg};color:${x.color};display:grid;place-items:center;flex-shrink:0;">${icon(x.ic,14)}</div><div><div class="bold sm">${x.t}</div><div class="xs muted">${x.d}</div></div></div>`).join('')}
            </div>
          </div>
          <div class="card">
            <div class="card-head">${icon('trending',16)}<h3 class="card-title">Esta semana</h3></div>
            <div class="card-body">
              ${sparkChart([3,4,2,5,0,1,0])}
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:16px;padding-top:16px;border-top:1px solid var(--border);">
                <div><div class="xs muted">Sesiones realizadas</div><div class="bold" style="font-size:20px;">14<span class="xs muted" style="font-weight:400;"> / 18 prog.</span></div></div>
                <div><div class="xs muted">Tasa asistencia</div><div class="bold" style="font-size:20px;color:var(--success);">92%</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  }

  function sparkChart(values) {
    const max = Math.max(...values, 1);
    return `<div><div style="display:flex;align-items:flex-end;gap:8px;height:80px;">${values.map((v, i) => `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;"><div style="width:100%;height:${(v / max) * 100}%;background:${i === 0 ? 'var(--primary-500)' : 'var(--primary-200)'};border-radius:4px;min-height:${v ? 4 : 0}px;"></div><div class="xs muted">${['L','M','X','J','V','S','D'][i]}</div></div>`).join('')}</div></div>`;
  }

  function agendaPage() {
    const user = currentUser();
    const route = parseHash();
    state.agendaWeekOffset = state.agendaWeekOffset || 0;
    const d = new Date(TODAY);
    d.setDate(d.getDate() + state.agendaWeekOffset * 7);
    const day = d.getDay() || 7;
    d.setDate(d.getDate() - day + 1);
    d.setHours(0,0,0,0);
    const weekStart = d;
    const days = Array.from({ length: 7 }, (_, i) => {
      const dayDate = new Date(weekStart);
      dayDate.setDate(weekStart.getDate() + i);
      return dayDate;
    });
    const appts = APPOINTMENTS.filter(a => state.role === 'ADMIN' || a.psychologistIds.includes(user.id));
    const visible = appts.filter(a => a.startAt >= weekStart && a.startAt < new Date(weekStart.getTime() + 7 * 86400000));
    const hours = Array.from({ length: 11 }, (_, i) => i + 8);

    return `<div>
      <div class="page-head">
        <div><h1 class="page-title">Agenda</h1><p class="page-sub">Semana del ${fmtDate(weekStart)} al ${fmtDate(days[6])}</p></div>
        <div class="row"><button class="btn btn-bordered" data-week="-1">${icon('arrL',14)} Semana anterior</button><button class="btn btn-bordered" data-week="0">Hoy</button><button class="btn btn-bordered" data-week="1">Semana siguiente ${icon('arrR',14)}</button></div>
      </div>

      <div class="card" style="margin-bottom:16px;">
        <div style="padding:14px;display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
          <div class="chip chip-info"><span class="legend-dot" style="background:var(--primary-500);"></span>Confirmadas</div>
          <div class="chip chip-success"><span class="legend-dot" style="background:var(--success);"></span>Pagadas</div>
          <div class="chip chip-warning"><span class="legend-dot" style="background:var(--warning);"></span>Pendientes</div>
          <div class="hero-note">Vista estática offline con navegación por hash. No depende de React ni de red.</div>
        </div>
      </div>

      <div class="cal-wrap">
        <div class="cal-toolbar"><div class="bold">Semana ${state.agendaWeekOffset === 0 ? 'actual' : state.agendaWeekOffset > 0 ? '+' + state.agendaWeekOffset : state.agendaWeekOffset}</div><div class="muted sm">${visible.length} citas visibles</div><div style="margin-left:auto;" class="inline-actions"><button class="btn btn-primary btn-sm" data-action="new-appointment">${icon('plus',13)} Nueva cita</button><button class="btn btn-bordered btn-sm" data-action="export-agenda">${icon('download',13)} Exportar</button></div></div>
        <div class="cal-grid">
          <div class="cal-head"><div class="cal-cell-head"></div>${days.map(day => `<div class="cal-cell-head ${day.toDateString() === TODAY.toDateString() ? 'today' : ''}">${day.toLocaleDateString('es-EC', { weekday: 'short' })}<span class="cal-day-num">${day.getDate()}</span></div>`).join('')}</div>
          ${hours.map(hour => `<div class="cal-row"><div class="cal-time">${String(hour).padStart(2,'0')}:00</div>${days.map(day => renderAgendaCell(day, hour, visible)).join('')}</div>`).join('')}
        </div>
      </div>

      <div class="card" style="margin-top:16px;">
        <div class="card-head">${icon('list',16)}<h3 class="card-title">Resumen semanal</h3></div>
        <table class="table"><thead><tr><th>Día</th><th>Citas</th><th>Pacientes</th><th>Pagos</th></tr></thead><tbody>${days.map(day => {
          const items = visible.filter(a => sameDay(a.startAt, day));
          const paid = items.filter(a => a.paymentStatus === 'PAID').length;
          return `<tr><td class="bold sm">${day.toLocaleDateString('es-EC', { weekday: 'long', day: '2-digit', month: 'short' })}</td><td>${items.length}</td><td class="sm">${items.map(a => `${patientById(a.patientId).nombres.split(' ')[0]} ${patientById(a.patientId).apellidos.split(' ')[0]}`).join(', ') || '—'}</td><td>${paid}/${items.length || 0} pagadas</td></tr>`;
        }).join('')}</tbody></table>
      </div>
    </div>`;
  }

  function sameDay(a, b) {
    return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
  }

  function renderAgendaCell(day, hour, appointments) {
    const items = appointments.filter(a => sameDay(a.startAt, day) && a.startAt.getHours() === hour)
      .sort((a,b) => a.startAt - b.startAt);
    return `<div class="cal-cell">${items.map(a => {
      const patient = patientById(a.patientId);
      const tone = a.paymentStatus === 'PAID' ? 'green' : a.status === 'CONFIRMED' ? '' : 'amber';
      const minutes = a.startAt.getMinutes();
      const top = Math.round((minutes / 60) * 44) + 4;
      const height = Math.max(26, Math.round((a.durationMin / 60) * 44));
      return `<div class="cal-event ${tone}" style="top:${top}px;height:${height}px;" data-patient="${patient.id}"><div class="cal-event-title">${fmtTime(a.startAt)} · ${escapeHtml(patient.nombres.split(' ')[0])}</div><div class="cal-event-meta">${escapeHtml(a.location || 'Consultorio')} · ${a.paymentStatus === 'PAID' ? 'Pagado' : 'Pendiente'}</div></div>`;
    }).join('')}</div>`;
  }

  function patientsPage() {
    const list = PATIENTS
      .filter(p => state.patientsStatus === 'ALL' || p.status === state.patientsStatus)
      .filter(p => state.patientsPsychologist === 'all' || p.primaryId === state.patientsPsychologist || p.collaborators.some(c => c.id === state.patientsPsychologist))
      .filter(p => {
        if (!state.patientsQuery) return true;
        const s = `${p.nombres} ${p.apellidos} ${p.cedula}`.toLowerCase();
        return s.includes(state.patientsQuery.toLowerCase());
      });

    return `<div>
      <div class="page-head"><div><h1 class="page-title">Pacientes</h1><p class="page-sub">${list.length} de ${PATIENTS.length} pacientes</p></div><div class="row"><button class="btn btn-bordered" data-action="export-patients">${icon('download',15)} Exportar</button><button class="btn btn-primary" data-action="new-patient">${icon('plus',15)} Nuevo paciente</button></div></div>
      <div class="card" style="margin-bottom:16px;"><div style="padding:14px;display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
        <div class="search-input" style="flex:1;min-width:240px;">${icon('search',15)}<input id="patients-query" style="background:transparent;border:none;outline:none;flex:1;color:var(--text);" placeholder="Buscar por nombre o cédula..." value="${escapeHtml(state.patientsQuery)}"></div>
        <select class="select" id="patients-status" style="width:auto;"><option value="ALL">Todos los estados</option><option value="ACTIVE">Activos</option><option value="PAUSED">En pausa</option><option value="ARCHIVED">Archivados</option></select>
        <select class="select" id="patients-psychologist" style="width:auto;"><option value="all">Todos los psicólogos</option>${PSYCHOLOGISTS.map(p => `<option value="${p.id}">${escapeHtml(p.name)}</option>`).join('')}</select>
      </div></div>
      <div class="card"><table class="table"><thead><tr><th>Paciente</th><th>Edad</th><th>Psicólogo primario</th><th>Colaboradores</th><th>Sesiones</th><th>Estado</th><th></th></tr></thead><tbody>${list.map(p => {
        const primary = psychologistById(p.primaryId);
        const pkg = packageByPatient(p.id);
        const status = patientStatusMeta(p.status);
        return `<tr data-patient="${p.id}"><td><div class="cell-user"><div class="avatar" style="background:${colorFor(p.id)}">${initialsOf(`${p.nombres} ${p.apellidos}`)}</div><div><div class="cell-user-name">${escapeHtml(p.nombres)} ${escapeHtml(p.apellidos)}</div><div class="cell-user-sub mono">${escapeHtml(p.cedula)}</div></div></div></td><td>${ageOf(p.fechaNac)} años</td><td>${escapeHtml(primary ? primary.name : '—')}</td><td>${p.collaborators.length ? `<div style="display:flex;">${p.collaborators.map(c => { const u = psychologistById(c.id); return `<div class="avatar" title="${escapeHtml(u ? u.name : c.id)}" style="background:${u ? colorFor(u.id) : colorFor(c.id)};width:26px;height:26px;font-size:10px;margin-right:-6px;border:2px solid var(--surface);">${u ? initialsOf(u.name) : '?'}</div>`; }).join('')}</div>` : '<span class="muted xs">—</span>'}</td><td>${pkg ? `<div><div class="bold sm">${pkg.totalSessions - pkg.sessionsUsed} restantes</div><div class="progress" style="width:80px;margin-top:3px;"><div style="width:${(pkg.sessionsUsed / pkg.totalSessions) * 100}%"></div></div></div>` : '<span class="muted xs">Sin paquete</span>'}</td><td><span class="chip ${status[0]}"><span class="chip-dot"></span>${status[1]}</span></td><td><button class="icon-btn">${icon('more',16)}</button></td></tr>`;
      }).join('')}</tbody></table></div>
    </div>`;
  }

  function patientDetailPage(route) {
    const patient = patientById(route.patientId);
    if (!patient) return '<div class="muted">Paciente no encontrado.</div>';
    const primary = psychologistById(patient.primaryId);
    const pkg = packageByPatient(patient.id);
    const sessions = appointmentsFor(patient.id);
    const tasks = TASKS.filter(t => t.patientId === patient.id);
    const invoices = INVOICES.filter(i => i.patientId === patient.id);
    const status = patientStatusMeta(patient.status);
    const tabs = [
      ['perfil', 'Perfil', 'user'],
      ['sesiones', 'Sesiones', 'calendar'],
      ['tareas', 'Tareas', 'check2'],
      ['tests', 'Tests', 'brain'],
      ['biografia', 'Biografía', 'book'],
      ['notas', 'Notas', 'fileText'],
      ['pagos', 'Pagos', 'card'],
      ['facturacion', 'Facturación', 'receipt'],
      ['accesos', 'Accesos', 'key'],
    ];
    return `<div>
      <div class="page-head" style="margin-bottom:12px;"><button class="btn btn-ghost btn-sm" data-nav="pacientes">${icon('arrL',14)} Volver a pacientes</button></div>
      <div class="profile-header">
        <div class="avatar avatar-xl" style="background:${colorFor(patient.id)}">${initialsOf(`${patient.nombres} ${patient.apellidos}`)}</div>
        <div style="flex:1;min-width:0;">
          <div class="row" style="gap:10px;flex-wrap:wrap;"><h1 class="page-title" style="margin:0;">${escapeHtml(patient.nombres)} ${escapeHtml(patient.apellidos)}</h1><span class="chip ${status[0]}"><span class="chip-dot"></span>${status[1]}</span>${pkg ? `<span class="chip chip-info">${icon('package',11)} ${pkg.totalSessions - pkg.sessionsUsed} sesiones restantes</span>` : ''}</div>
          <div class="row muted sm" style="margin-top:8px;gap:14px;flex-wrap:wrap;"><span>${icon('user',12)} ${escapeHtml(primary ? primary.name : 'Sin asignar')}</span><span>${icon('calendar',12)} Ingreso ${fmtDate(patient.fechaIngreso)}</span><span>${icon('briefcase',12)} ${escapeHtml(patient.ocupacion || '—')}</span><span>${icon('mail',12)} ${escapeHtml(patient.email || '—')}</span></div>
        </div>
        <div class="profile-actions"><button class="btn btn-bordered btn-sm" data-action="share-profile">${icon('download',13)} Exportar ficha</button><button class="btn btn-primary btn-sm" data-action="edit-patient">${icon('edit',13)} Editar</button></div>
      </div>
      <div class="tabs">${tabs.map(([id, label, ic]) => `<div class="tab ${route.tab === id ? 'active' : ''}" data-patient-tab="${id}" data-patient-id="${patient.id}">${icon(ic,14)} ${label}</div>`).join('')}</div>
      <div style="margin-top:16px;">${renderPatientTab(route.tab, patient, { primary, pkg, sessions, tasks, invoices })}</div>
    </div>`;
  }

  function renderPatientTab(tab, patient, ctx) {
    switch (tab) {
      case 'perfil': return renderPatientProfile(patient, ctx);
      case 'sesiones': return renderPatientSessions(patient, ctx);
      case 'tareas': return renderPatientTasks(patient);
      case 'tests': return renderPatientTests(patient);
      case 'biografia': return renderPatientBiography(patient);
      case 'notas': return renderPatientNotes(patient);
      case 'pagos': return renderPatientPayments(patient, ctx.pkg);
      case 'facturacion': return renderPatientInvoices(patient);
      case 'accesos': return renderPatientAccess(patient, ctx.primary);
      default: return renderPatientProfile(patient, ctx);
    }
  }

  function renderPatientProfile(patient, ctx) {
    return `<div class="page-grid-2"><div class="stack-16"><div class="card"><div class="card-head">${icon('user',16)}<h3 class="card-title">Datos personales</h3></div><div class="card-body"><div class="dl">
      ${dl('Nombres', patient.nombres)}${dl('Apellidos', patient.apellidos)}${dl('Cédula', patient.cedula, true)}${dl('Edad', ageOf(patient.fechaNac) + ' años')}${dl('Fecha de nacimiento', fmtDate(patient.fechaNac))}${dl('Sexo', patient.sexo === 'FEMALE' ? 'Femenino' : patient.sexo === 'MALE' ? 'Masculino' : patient.sexo)}${dl('Estado civil', patient.estadoCivil)}${dl('Ocupación', patient.ocupacion)}${dl('Teléfono', patient.telefono)}${dl('Correo', patient.email)}${dl('Dirección', patient.direccion)}${dl('Contacto de emergencia', patient.contactoEmergencia)}
    </div></div></div>
    <div class="card"><div class="card-head">${icon('brain',16)}<h3 class="card-title">Historia clínica resumida</h3></div><div class="card-body"><div class="detail-list"><div class="detail-item"><div style="width:28px;height:28px;border-radius:8px;background:var(--info-bg);color:var(--info);display:grid;place-items:center;">${icon('info',14)}</div><div><div class="bold sm">Motivo de consulta</div><div class="sm muted">${escapeHtml(patient.motivoConsulta)}</div></div></div><div class="detail-item"><div style="width:28px;height:28px;border-radius:8px;background:var(--primary-100);color:var(--primary-600);display:grid;place-items:center;">${icon('fileText',14)}</div><div><div class="bold sm">Diagnóstico</div><div class="sm muted">${escapeHtml(patient.diagnostico || '—')}</div></div></div><div class="detail-item"><div style="width:28px;height:28px;border-radius:8px;background:var(--warning-bg);color:var(--warning);display:grid;place-items:center;">${icon('alert',14)}</div><div><div class="bold sm">Alergias y medicación</div><div class="sm muted">Alergias: ${escapeHtml(patient.alergias || '—')} · Medicación: ${escapeHtml(patient.medicacion || '—')}</div></div></div></div></div></div></div>
    <div class="stack-16"><div class="card"><div class="card-head">${icon('package',16)}<h3 class="card-title">Seguimiento</h3></div><div class="card-body">${ctx.pkg ? `<div class="metric-big">${ctx.pkg.totalSessions - ctx.pkg.sessionsUsed}</div><div class="muted sm">sesiones disponibles del paquete activo</div><div class="progress" style="margin-top:12px;"><div style="width:${(ctx.pkg.sessionsUsed / ctx.pkg.totalSessions) * 100}%"></div></div><div class="xs muted" style="margin-top:6px;">${ctx.pkg.sessionsUsed} usadas de ${ctx.pkg.totalSessions}</div>` : `<div class="metric-big">0</div><div class="muted sm">sin paquete activo</div>`}</div></div>
    <div class="card"><div class="card-head">${icon('calendar',16)}<h3 class="card-title">Actividad reciente</h3></div><div class="card-body"><ul class="list-clean">${appointmentsFor(patient.id).slice(0,4).map(a => `<li><div class="bold sm">${fmtDate(a.startAt)} · ${fmtTime(a.startAt)}</div><div class="xs muted">${escapeHtml(a.location || 'Consultorio')} · ${a.paymentStatus === 'PAID' ? 'Pago al día' : 'Pago pendiente'}</div></li>`).join('')}</ul></div></div>
    </div></div>`;
  }

  function dl(label, value, mono) {
    return `<div class="dl-row"><div class="dl-label">${label}</div><div class="dl-value${mono ? ' mono' : ''}">${escapeHtml(value || '—')}</div></div>`;
  }

  function renderPatientSessions(patient) {
    const sessions = appointmentsFor(patient.id);
    return `<div class="card"><div class="card-head">${icon('calendar',16)}<h3 class="card-title">Historial de sesiones</h3><button class="btn btn-primary btn-sm" style="margin-left:auto;" data-action="new-session">${icon('plus',13)} Registrar sesión</button></div><table class="table"><thead><tr><th>Fecha</th><th>Estado</th><th>Pago</th><th>Duración</th><th>Ubicación</th><th>Nota</th></tr></thead><tbody>${sessions.map(s => {
      const note = SESSION_NOTES.find(n => n.appointmentId === s.id && !n.isPrivate);
      const st = appointmentStatusMeta(s.status);
      return `<tr><td class="sm"><div class="bold sm">${fmtDate(s.startAt)}</div><div class="xs muted">${fmtTime(s.startAt)}</div></td><td><span class="chip ${st[0]}">${st[1]}</span></td><td>${s.paymentStatus === 'PAID' ? '<span class="chip chip-success">Pagado</span>' : '<span class="chip chip-warning">Pendiente</span>'}</td><td>${s.durationMin} min</td><td>${escapeHtml(s.location || 'Consultorio')}</td><td class="sm muted">${escapeHtml(note ? note.content : '—')}</td></tr>`;
    }).join('')}</tbody></table></div>`;
  }

  function renderPatientTasks(patient) {
    const tasks = TASKS.filter(t => t.patientId === patient.id);
    return `<div class="card"><div class="card-head">${icon('check2',16)}<h3 class="card-title">Tareas asignadas</h3><button class="btn btn-primary btn-sm" style="margin-left:auto;" data-action="assign-task">${icon('plus',13)} Asignar tarea</button></div><div>${tasks.map((t, i) => { const st = taskStatusMeta(t.status); return `<div style="padding:16px 20px;border-top:${i ? '1px solid var(--border)' : 'none'};"><div class="row between" style="margin-bottom:6px;"><div class="bold">${escapeHtml(t.title)}</div><span class="chip ${st[0]}">${st[1]}</span></div><div class="muted sm" style="margin-bottom:8px;">${escapeHtml(t.description)}</div><div class="row xs muted" style="gap:14px;"><span>${icon('calendar',11)} Asignada ${fmtDate(t.assignedAt)}</span>${t.dueAt ? `<span>${icon('clock',11)} Entrega ${fmtDate(t.dueAt)}</span>` : ''}</div></div>`; }).join('')}</div></div>`;
  }

  function renderPatientTests(patient) {
    const tests = TESTS.filter(t => t.patientId === patient.id);
    const gad7 = tests.filter(t => t.tipo === 'GAD-7');
    return `<div class="stack-16"><div class="card"><div class="card-head">${icon('brain',16)}<h3 class="card-title">Tests aplicados</h3><button class="btn btn-primary btn-sm" style="margin-left:auto;" data-action="apply-test">${icon('plus',13)} Aplicar test</button></div><table class="table"><thead><tr><th>Fecha</th><th>Test</th><th>Puntuación</th><th>Interpretación</th></tr></thead><tbody>${tests.map(t => `<tr><td class="sm">${fmtDate(t.appliedAt)}</td><td class="bold sm">${escapeHtml(t.tipo)}</td><td><span class="chip chip-primary">${t.puntuacion}</span></td><td class="sm">${escapeHtml(t.interpretacion)}</td></tr>`).join('')}</tbody></table></div><div class="card"><div class="card-head">${icon('trending',16)}<h3 class="card-title">Evolución GAD-7</h3></div><div class="card-body"><div class="muted sm" style="margin-bottom:8px;">Ansiedad — descenso en los últimos controles</div><div style="display:flex;align-items:flex-end;gap:14px;height:100px;padding:0 20px;">${gad7.map(t => `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;"><div class="xs bold">${t.puntuacion}</div><div style="width:40px;height:${(t.puntuacion / 21) * 100}%;background:var(--primary-500);border-radius:6px;min-height:8px;"></div><div class="xs muted">${fmtDate(t.appliedAt)}</div></div>`).join('')}</div></div></div></div>`;
  }

  function renderPatientBiography(patient) {
    const bio = `Camila proviene de una familia nuclear en Quito. Es la hija mayor de tres hermanos. Reporta una infancia estable, con vínculos afectivos cálidos pero exigentes (padre médico, madre docente).\n\nAdolescencia marcada por alto rendimiento académico y autoexigencia elevada. Primer episodio ansioso identificable hacia los 16 años, durante exámenes de bachillerato.\n\nEstudió Diseño Gráfico en la PUCE. El cambio de equipo en septiembre de 2025 coincide con el resurgir de los síntomas que motivan la consulta.\n\nVive sola desde 2021 y mantiene una red de apoyo funcional.`;
    return `<div class="card"><div class="card-head">${icon('book',16)}<h3 class="card-title">Biografía clínica</h3><button class="btn btn-bordered btn-sm" style="margin-left:auto;" data-action="edit-bio">${icon('edit',13)} Editar</button></div><div class="card-body"><div style="font-size:14px;line-height:1.7;white-space:pre-wrap;color:var(--text);">${escapeHtml(bio)}</div></div></div>`;
  }

  function renderPatientNotes(patient) {
    const notes = PATIENT_NOTES.filter(n => n.patientId === patient.id);
    return `<div class="stack-12"><div class="row between"><div class="muted sm">Notas escritas por el paciente desde su portal.</div><button class="btn btn-bordered btn-sm" data-action="add-note">${icon('plus',13)} Añadir nota clínica</button></div>${notes.map(n => `<div class="card"><div class="card-body"><div class="row between" style="margin-bottom:8px;"><div class="bold">${escapeHtml(n.title || 'Sin título')}</div><div class="row xs muted" style="gap:8px;">${n.isPrivate ? `<span class="chip chip-neutral">Privada</span>` : ''}<span>${fmtDate(n.createdAt)}</span></div></div><div class="sm" style="line-height:1.6;${n.isPrivate ? 'font-style:italic;color:var(--text-soft);' : ''}">${escapeHtml(n.isPrivate ? 'Esta nota es privada — solo el paciente puede verla.' : n.content)}</div></div></div>`).join('')}</div>`;
  }

  function renderPatientPayments(patient, pkg) {
    const pays = PAYMENTS.filter(p => p.patientId === patient.id);
    return `<div class="stack-16"><div class="kpi-grid-3">${statCard('Total cobrado', fmtMoney(pays.reduce((acc,p) => acc + p.amount, 0)), 'card', `${pays.length} pagos registrados`)}${statCard('Sesiones disponibles', pkg ? pkg.totalSessions - pkg.sessionsUsed : 0, 'package', pkg ? `Paquete de ${pkg.totalSessions} sesiones` : 'Sin paquete activo')}${statCard('Pendiente de pago', fmtMoney(0), 'alert', 'Todas las sesiones al día')}</div><div class="card"><div class="card-head">${icon('card',16)}<h3 class="card-title">Historial de pagos</h3><button class="btn btn-primary btn-sm" style="margin-left:auto;" data-action="register-payment">${icon('plus',13)} Registrar pago</button></div><table class="table"><thead><tr><th>Fecha</th><th>Tipo</th><th>Método</th><th>Referencia</th><th style="text-align:right">Monto</th></tr></thead><tbody>${pays.map(p => `<tr><td class="sm">${fmtDate(p.paidAt)}</td><td>${p.type === 'PACKAGE' ? 'Paquete' : 'Sesión individual'}</td><td>${escapeHtml(p.method || '—')}</td><td class="mono sm">${escapeHtml(p.reference || '—')}</td><td style="text-align:right" class="bold">${fmtMoney(p.amount)}</td></tr>`).join('')}</tbody></table></div></div>`;
  }

  function renderPatientInvoices(patient) {
    const invoices = INVOICES.filter(i => i.patientId === patient.id);
    return `<div class="card"><div class="card-head">${icon('receipt',16)}<h3 class="card-title">Facturación del paciente</h3><button class="btn btn-primary btn-sm" style="margin-left:auto;" data-action="issue-invoice">${icon('plus',13)} Emitir factura</button></div><table class="table"><thead><tr><th>Factura</th><th>Fecha</th><th>Estado</th><th>Correo</th><th style="text-align:right">Total</th></tr></thead><tbody>${invoices.map(inv => { const st = invoiceStatusMeta(inv.status); return `<tr><td class="mono sm">${escapeHtml(inv.numeroFactura)}</td><td>${inv.fechaAutorizacion ? fmtDate(inv.fechaAutorizacion) : 'Pendiente'}</td><td><span class="chip ${st[0]}">${st[1]}</span></td><td>${inv.emailSent ? '<span class="chip chip-success">Enviado</span>' : '<span class="chip chip-warning">Pendiente</span>'}</td><td style="text-align:right" class="bold">${fmtMoney(inv.total)}</td></tr>`; }).join('')}</tbody></table></div>`;
  }

  function renderPatientAccess(patient, primary) {
    return `<div class="page-grid-2"><div class="card"><div class="card-head">${icon('key',16)}<h3 class="card-title">Profesionales con acceso</h3></div><div class="card-body"><div class="detail-list"><div class="detail-item"><div class="avatar" style="background:${colorFor(primary.id)}">${initialsOf(primary.name)}</div><div><div class="bold sm">${escapeHtml(primary.name)}</div><div class="xs muted">Psicólogo primario</div></div></div>${patient.collaborators.map(c => { const u = psychologistById(c.id); return `<div class="detail-item"><div class="avatar" style="background:${colorFor(u.id)}">${initialsOf(u.name)}</div><div><div class="bold sm">${escapeHtml(u.name)}</div><div class="xs muted">Colaborador ${c.expira ? '· expira ' + fmtDate(c.expira) : 'sin vencimiento'}</div></div></div>`; }).join('') || '<div class="muted sm">No hay colaboradores adicionales.</div>'}</div></div></div><div class="card"><div class="card-head">${icon('lock',16)}<h3 class="card-title">Trazabilidad</h3></div><div class="card-body"><ul class="list-clean"><li><div class="bold sm">Último acceso</div><div class="xs muted">Hoy · 08:52 · ${escapeHtml(primary.name)}</div></li><li><div class="bold sm">Cambios recientes</div><div class="xs muted">Actualización de nota clínica hace 4 días</div></li><li><div class="bold sm">Compartición</div><div class="xs muted">Solo profesionales autorizados visualizan la ficha completa.</div></li></ul></div></div></div>`;
  }

  function paymentsPage() {
    const totalPayments = PAYMENTS.reduce((acc, p) => acc + p.amount, 0);
    const activePackages = PACKAGES.filter(p => p.status === 'ACTIVE');
    return `<div class="stack-16"><div class="page-head"><div><h1 class="page-title">Pagos & Paquetes</h1><p class="page-sub">Control de cobros, paquetes activos y sesiones consumidas</p></div><div class="row"><button class="btn btn-bordered" data-action="export-payments">${icon('download',15)} Exportar</button><button class="btn btn-primary" data-action="register-payment">${icon('plus',15)} Registrar pago</button></div></div><div class="kpi-grid-3">${statCard('Cobrado acumulado', fmtMoney(totalPayments), 'card', `${PAYMENTS.length} pagos`)}${statCard('Paquetes activos', activePackages.length, 'package', `${activePackages.reduce((acc,p) => acc + (p.totalSessions - p.sessionsUsed), 0)} sesiones disponibles`)}${statCard('Pendientes de esta semana', '3', 'alert', 'Seguimiento sugerido')}</div><div class="page-grid-2"><div class="card"><div class="card-head">${icon('package',16)}<h3 class="card-title">Paquetes</h3></div><table class="table"><thead><tr><th>Paciente</th><th>Plan</th><th>Vigencia</th><th>Uso</th><th>Total</th></tr></thead><tbody>${PACKAGES.map(pkg => { const p = patientById(pkg.patientId); return `<tr data-patient="${p.id}"><td class="bold sm">${escapeHtml(p.nombres)} ${escapeHtml(p.apellidos)}</td><td>${pkg.totalSessions} sesiones</td><td>${fmtDate(pkg.purchasedAt)} → ${fmtDate(pkg.expiresAt)}</td><td><div class="bold sm">${pkg.sessionsUsed}/${pkg.totalSessions}</div><div class="progress" style="width:120px;margin-top:4px;"><div style="width:${(pkg.sessionsUsed / pkg.totalSessions) * 100}%"></div></div></td><td>${fmtMoney(pkg.totalPrice)}</td></tr>`; }).join('')}</tbody></table></div><div class="card"><div class="card-head">${icon('card',16)}<h3 class="card-title">Pagos recientes</h3></div><table class="table"><thead><tr><th>Fecha</th><th>Paciente</th><th>Método</th><th>Tipo</th><th style="text-align:right">Monto</th></tr></thead><tbody>${PAYMENTS.slice().sort((a,b) => b.paidAt - a.paidAt).map(p => { const pat = patientById(p.patientId); return `<tr data-patient="${pat.id}"><td>${fmtDate(p.paidAt)}</td><td class="bold sm">${escapeHtml(pat.nombres)} ${escapeHtml(pat.apellidos)}</td><td>${escapeHtml(p.method || '—')}</td><td>${p.type === 'PACKAGE' ? 'Paquete' : 'Sesión'}</td><td style="text-align:right" class="bold">${fmtMoney(p.amount)}</td></tr>`; }).join('')}</tbody></table></div></div></div>`;
  }

  function invoicesPage() {
    const authorized = INVOICES.filter(i => i.status === 'AUTHORIZED');
    const signed = INVOICES.filter(i => i.status === 'SIGNED');
    const rejected = INVOICES.filter(i => i.status === 'REJECTED');
    return `<div class="stack-16"><div class="page-head"><div><h1 class="page-title">Facturación SRI</h1><p class="page-sub">Comprobantes electrónicos emitidos desde la clínica</p></div><div class="row"><button class="btn btn-bordered" data-action="export-invoices">${icon('download',15)} Exportar XML/PDF</button><button class="btn btn-primary" data-action="issue-invoice">${icon('plus',15)} Nueva factura</button></div></div><div class="kpi-grid-3">${statCard('Autorizadas', authorized.length, 'receipt', `${fmtMoney(authorized.reduce((acc, i) => acc + i.total, 0))}`)}${statCard('Firmadas pendientes', signed.length, 'shieldCheck', 'Esperando autorización')}${statCard('Rechazadas', rejected.length, 'alert', rejected.length ? 'Revisar errores SRI' : 'Sin novedades', rejected.length ? 'down' : '')}</div><div class="card"><div class="card-head">${icon('receipt',16)}<h3 class="card-title">Listado de facturas</h3></div><table class="table"><thead><tr><th>Factura</th><th>Paciente</th><th>Estado</th><th>Correo</th><th>Autorización</th><th style="text-align:right">Total</th></tr></thead><tbody>${INVOICES.slice().sort((a,b) => b.secuencial - a.secuencial).map(inv => { const p = patientById(inv.patientId); const st = invoiceStatusMeta(inv.status); return `<tr data-patient="${p.id}"><td><div class="bold sm mono">${escapeHtml(inv.numeroFactura)}</div><div class="xs muted mono">${escapeHtml(inv.claveAcceso)}</div></td><td>${escapeHtml(p.nombres)} ${escapeHtml(p.apellidos)}</td><td><span class="chip ${st[0]}">${st[1]}</span>${inv.status === 'REJECTED' ? `<div class="xs muted" style="margin-top:4px;max-width:320px;">${escapeHtml(inv.rejectionMessages || '')}</div>` : ''}</td><td>${inv.emailSent ? '<span class="chip chip-success">Enviado</span>' : '<span class="chip chip-warning">Pendiente</span>'}</td><td>${inv.numeroAutorizacion ? `<span class="mono xs">${escapeHtml(inv.numeroAutorizacion.slice(0,20))}…</span>` : '<span class="xs muted">Pendiente</span>'}</td><td style="text-align:right" class="bold">${fmtMoney(inv.total)}</td></tr>`; }).join('')}</tbody></table></div></div>`;
  }

  function profilePage() {
    const user = currentUser();
    return `<div style="max-width:820px;"><div class="page-head"><div><h1 class="page-title">Mi perfil</h1><p class="page-sub">Datos profesionales y preferencias</p></div><button class="btn btn-primary" data-action="save-profile">${icon('check',15)} Guardar</button></div><div class="card" style="margin-bottom:16px;"><div class="card-body" style="padding:24px;display:flex;gap:20px;align-items:center;"><div class="avatar avatar-xl" style="background:${colorFor(user.id)}">${initialsOf(user.name)}</div><div style="flex:1;"><h2 style="margin:0;font-size:18px;">${escapeHtml(user.name)}</h2><div class="muted sm">${escapeHtml(user.title || 'Profesional')}</div><div class="muted xs mono">${escapeHtml(user.email || '')}</div></div><button class="btn btn-bordered btn-sm" data-action="change-photo">${icon('image',13)} Cambiar foto</button></div></div><div class="card"><div class="card-head">${icon('user',16)}<h3 class="card-title">Datos profesionales</h3></div><div class="card-body"><div class="info-grid"><div class="field"><label class="label">Nombres</label><input class="input" value="${escapeHtml(user.name.split(' ').slice(0,2).join(' '))}"></div><div class="field"><label class="label">Apellidos</label><input class="input" value="${escapeHtml(user.name.split(' ').slice(2).join(' '))}"></div><div class="field"><label class="label">Registro</label><input class="input" value="${escapeHtml(user.reg || 'PSI-EC-0000')}"></div><div class="field"><label class="label">Cargo</label><input class="input" value="${escapeHtml(user.title || '')}"></div><div class="field" style="grid-column:span 2;"><label class="label">Bio breve</label><textarea class="textarea">Psicólogo clínico con enfoque cognitivo-conductual y trabajo colaborativo. Atiende adolescentes y adultos en modalidad presencial y online.</textarea></div></div></div></div></div>`;
  }

  function adminPsychologistsPage() {
    return `<div class="stack-16"><div class="page-head"><div><h1 class="page-title">Psicólogos</h1><p class="page-sub">Gestión del staff clínico y su disponibilidad</p></div><button class="btn btn-primary" data-action="new-psychologist">${icon('plus',15)} Agregar profesional</button></div><div class="page-grid-3">${PSYCHOLOGISTS.map(p => `<div class="card"><div class="card-body"><div class="row" style="gap:12px;margin-bottom:10px;"><div class="avatar avatar-lg" style="background:${colorFor(p.id)}">${initialsOf(p.name)}</div><div><div class="bold">${escapeHtml(p.name)}</div><div class="sm muted">${escapeHtml(p.title || p.role)}</div><div class="xs mono muted">${escapeHtml(p.reg || '')}</div></div></div><div class="surface-note"><div class="xs muted">Correo</div><div class="bold sm">${escapeHtml(p.email)}</div></div><div class="surface-note" style="margin-top:10px;"><div class="xs muted">Agenda estimada</div><div class="bold sm">${APPOINTMENTS.filter(a => a.psychologistIds.includes(p.id)).length} citas cargadas</div></div></div></div>`).join('')}</div></div>`;
  }

  function adminAccessPage() {
    const rows = [
      ['Directora Clínica', 'Dashboard, Agenda, Pacientes, Finanzas, Administración', 'Total'],
      ['Psicólogo Clínico', 'Dashboard, Agenda, Pacientes, Pagos, Facturación', 'Clínico + cobros'],
      ['Recepción', 'Agenda, Pacientes, Pagos', 'Sin notas clínicas privadas'],
      ['Contabilidad', 'Pagos, Facturación SRI', 'Sin acceso clínico'],
    ];
    return `<div class="stack-16"><div class="page-head"><div><h1 class="page-title">Accesos</h1><p class="page-sub">Matriz resumida de visibilidad y permisos</p></div><button class="btn btn-primary" data-action="export-access">${icon('download',15)} Exportar matriz</button></div><div class="card"><div class="card-head">${icon('key',16)}<h3 class="card-title">Perfiles base</h3></div><table class="table"><thead><tr><th>Perfil</th><th>Módulos</th><th>Alcance</th></tr></thead><tbody>${rows.map(r => `<tr><td class="bold sm">${r[0]}</td><td>${r[1]}</td><td>${r[2]}</td></tr>`).join('')}</tbody></table></div><div class="card"><div class="card-head">${icon('lock',16)}<h3 class="card-title">Auditoría rápida</h3></div><div class="card-body"><ul class="list-clean"><li><div class="bold sm">Último cambio de permisos</div><div class="xs muted">Hace 2 días · María Velasco</div></li><li><div class="bold sm">Intentos fallidos recientes</div><div class="xs muted">0 eventos críticos</div></li><li><div class="bold sm">Recomendación</div><div class="xs muted">Revisar accesos temporales de co-terapia antes del cierre de mes.</div></li></ul></div></div></div>`;
  }

  function adminClinicPage() {
    return `<div style="max-width:980px;" class="stack-16"><div class="page-head"><div><h1 class="page-title">Datos de la clínica</h1><p class="page-sub">Configuración fiscal y comercial usada en la facturación</p></div><button class="btn btn-primary" data-action="save-clinic">${icon('check',15)} Guardar cambios</button></div><div class="kpi-grid-3">${statCard('RUC', escapeHtml(CLINIC.ruc), 'building', 'Configurado')}${statCard('Ambiente', CLINIC.ambiente === 'PRODUCTION' ? 'Producción' : 'Pruebas', 'shieldCheck', 'SRI activo')}${statCard('Próxima factura', `001-001-${String(CLINIC.secuencialActual).padStart(9, '0')}`, 'receipt', 'Secuencial actual')}</div><div class="card"><div class="card-head">${icon('building',16)}<h3 class="card-title">Información fiscal</h3></div><div class="card-body"><div class="info-grid">${dl('Razón social', CLINIC.razonSocial)}${dl('Nombre comercial', CLINIC.nombreComercial)}${dl('RUC', CLINIC.ruc, true)}${dl('Establecimiento', CLINIC.codigoEstablecimiento)}${dl('Punto de emisión', CLINIC.puntoEmision)}${dl('Obligado a contabilidad', CLINIC.obligadoContabilidad ? 'Sí' : 'No')}${dl('Dirección matriz', CLINIC.direccionMatriz)}${dl('Dirección establecimiento', CLINIC.direccionEstablecimiento)}</div></div></div><div class="card"><div class="card-head">${icon('image',16)}<h3 class="card-title">Branding del RIDE</h3></div><div class="card-body"><div class="page-grid-2"><div style="border:2px dashed var(--border);border-radius:var(--r);padding:24px;text-align:center;background:var(--surface-2);">${icon('image',28,'', 'color:var(--text-muted);margin-bottom:8px;')}<div class="sm bold">Subir logo</div><div class="xs muted">PNG/SVG · modo offline</div></div><div class="field"><label class="label">Mensaje pie de RIDE</label><textarea class="textarea" rows="5">Gracias por confiar en nosotros. Para soporte: facturas@psicoapp.ec / +593 2 123 4567</textarea></div></div></div></div></div>`;
  }

  function adminCertPage() {
    const daysLeft = Math.round((CERT.validTo - TODAY) / 86400000);
    return `<div style="max-width:920px;" class="stack-16"><div class="page-head"><div><h1 class="page-title">Certificado SRI · Firma electrónica</h1><p class="page-sub">Certificado .p12 usado para firmar comprobantes</p></div><button class="btn btn-primary" data-action="renew-cert">${icon('upload',15)} Renovar certificado</button></div><div class="card"><div class="card-body" style="padding:24px;"><div class="row" style="gap:16px;align-items:flex-start;"><div style="width:64px;height:64px;border-radius:14px;background:linear-gradient(135deg, var(--success-bg), var(--primary-100));display:grid;place-items:center;color:var(--success);">${icon('shieldCheck',28)}</div><div style="flex:1;"><div class="row" style="gap:10px;"><h3 style="margin:0;font-size:18px;">${escapeHtml(CERT.fileName)}</h3><span class="chip chip-success"><span class="chip-dot"></span>Vigente</span></div><div class="muted xs mono" style="margin-top:4px;">${escapeHtml(CERT.subject)}</div><div class="info-grid-4" style="margin-top:18px;">${kv('Emisor', CERT.issuer)}${kv('Válido desde', fmtDate(CERT.validFrom))}${kv('Vence', fmtDate(CERT.validTo), `${daysLeft} días`)}${kv('Algoritmo', 'RSA 2048 · SHA-256')}</div></div></div></div></div><div class="card"><div class="card-head">${icon('lock',16)}<h3 class="card-title">Seguridad</h3></div><div class="card-body"><div class="surface-note">El .p12 se usa solo de forma simulada dentro de esta versión estática offline. No hay llamadas a red ni dependencias externas.</div><div class="info-grid-3" style="margin-top:18px;">${kv('Hash MD5', 'd4e9...a812')}${kv('Última firma', 'hace 12 minutos')}${kv('Firmas este mes', '148 facturas')}</div></div></div></div>`;
  }

  function kv(label, value, extra) {
    return `<div><div class="xs muted" style="text-transform:uppercase;letter-spacing:0.04em;">${label}</div><div class="bold sm" style="margin-top:4px;">${escapeHtml(value)}</div>${extra ? `<div class="xs" style="color:var(--success);margin-top:2px;">${escapeHtml(extra)}</div>` : ''}</div>`;
  }

  function patientPortalPage(route) {
    const patient = patientById(currentUser().patientId) || PATIENTS[0];
    const next = APPOINTMENTS.filter(a => a.patientId === patient.id && a.startAt > TODAY).sort((a,b) => a.startAt - b.startAt)[0];
    const myTasks = TASKS.filter(t => t.patientId === patient.id);
    const myNotes = PATIENT_NOTES.filter(n => n.patientId === patient.id);
    const moodBars = [3,3,4,3,4,4,5];

    let body = '';
    if (route.tab === 'home') {
      body = `<div style="padding:8px 22px 24px;"><div style="margin-bottom:18px;"><div class="xs muted">Buen día,</div><div style="font-size:24px;font-weight:600;letter-spacing:-0.02em;">Camila 🌱</div></div><div class="card" style="margin-bottom:14px;background:linear-gradient(135deg, var(--primary-50), var(--surface));border-color:var(--primary-100);"><div class="card-body" style="padding:16px;"><div class="bold sm" style="margin-bottom:4px;">¿Cómo te sientes hoy?</div><div class="xs muted" style="margin-bottom:12px;">Tu registro diario ayuda a tu psicólogo.</div><div style="display:flex;justify-content:space-between;gap:4px;">${[[1,'😣','Mal'],[2,'😕','Bajo'],[3,'😐','Neutro'],[4,'🙂','Bien'],[5,'😊','Genial']].map(([v,e,l]) => `<button data-action="mood-${v}" style="flex:1;padding:10px 0;background:var(--surface);border:1.5px solid var(--border);border-radius:12px;display:flex;flex-direction:column;align-items:center;gap:3px;"><div style="font-size:22px;">${e}</div><div style="font-size:9px;color:var(--text-muted);font-weight:500;">${l}</div></button>`).join('')}</div></div></div><div class="card" style="margin-bottom:14px;"><div class="card-body" style="padding:14px;"><div class="row between" style="margin-bottom:10px;"><div class="bold sm">Tu semana</div><span class="xs" style="color:var(--success);">↗ Mejorando</span></div><div style="display:flex;gap:4px;align-items:flex-end;height:60px;">${moodBars.map((v,i) => `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;"><div style="width:100%;height:${(v/5)*100}%;background:linear-gradient(180deg, var(--primary-400), var(--primary-600));border-radius:4px;min-height:10px;"></div><div style="font-size:9px;color:var(--text-muted);">${['L','M','X','J','V','S','D'][i]}</div></div>`).join('')}</div></div></div>${next ? `<div class="card" style="margin-bottom:14px;background:var(--primary-600);color:white;border-color:var(--primary-600);"><div class="card-body" style="padding:16px;"><div style="font-size:11px;opacity:0.85;text-transform:uppercase;letter-spacing:0.05em;font-weight:600;">Próxima sesión</div><div style="font-size:18px;font-weight:600;margin-top:4px;">${next.startAt.toLocaleDateString('es-EC', { weekday: 'long', day: 'numeric', month: 'long' })}</div><div style="font-size:14px;opacity:0.9;margin-top:2px;">${fmtTime(next.startAt)} · ${escapeHtml(next.location || 'Consultorio')}</div><div style="display:flex;gap:8px;margin-top:14px;"><button class="btn btn-bordered btn-sm" style="flex:1;background:rgba(255,255,255,0.16);color:white;border-color:rgba(255,255,255,0.28);" data-action="confirm-session">Confirmar</button><button class="btn btn-sm" style="flex:1;background:white;color:var(--primary-700);border:none;" data-action="view-session">Ver detalles</button></div></div></div>` : ''}<div style="margin-bottom:14px;"><div class="row between" style="margin-bottom:10px;"><div class="bold sm">Mis tareas pendientes</div><span class="xs muted">${myTasks.filter(t => t.status !== 'COMPLETED').length}</span></div>${myTasks.filter(t => t.status !== 'COMPLETED').slice(0,3).map(t => `<div class="card" style="margin-bottom:8px;"><div class="card-body" style="padding:14px;"><div class="row" style="gap:10px;"><div style="width:22px;height:22px;border:2px solid var(--border);border-radius:6px;flex-shrink:0;margin-top:1px;"></div><div style="flex:1;"><div class="bold sm">${escapeHtml(t.title)}</div><div class="xs muted" style="margin-top:2px;">${escapeHtml(t.description)}</div>${t.dueAt ? `<div style="margin-top:6px;font-size:11px;color:var(--warning);display:flex;align-items:center;gap:4px;">${icon('clock',11)} Entrega ${fmtDate(t.dueAt)}</div>` : ''}</div></div></div></div>`).join('')}</div></div>`;
    } else if (route.tab === 'tareas') {
      body = `<div style="padding:8px 22px 24px;"><div style="margin-bottom:18px;"><div style="font-size:22px;font-weight:600;letter-spacing:-0.02em;">Mis tareas</div><div class="xs muted">Asignadas por tu psicólogo</div></div>${myTasks.map(t => { const st = taskStatusMeta(t.status); return `<div class="card" style="margin-bottom:10px;"><div class="card-body" style="padding:14px;"><div class="row between" style="margin-bottom:6px;"><span class="chip ${st[0]}" style="font-size:10px;">${st[1]}</span><span class="xs muted">${fmtDate(t.assignedAt)}</span></div><div class="bold sm">${escapeHtml(t.title)}</div><div class="xs muted" style="margin-top:4px;line-height:1.5;">${escapeHtml(t.description)}</div>${t.status !== 'COMPLETED' ? `<button class="btn btn-primary btn-sm" style="margin-top:10px;width:100%;justify-content:center;" data-action="task-done">${icon('check',12)} Marcar como hecha</button>` : ''}</div></div>`; }).join('')}</div>`;
    } else if (route.tab === 'biografia') {
      body = `<div style="padding:8px 22px 24px;"><div style="margin-bottom:18px;"><div style="font-size:22px;font-weight:600;letter-spacing:-0.02em;">Mi historia</div><div class="xs muted">Lo que tu psicólogo conoce de ti</div></div><div style="padding:12px;background:var(--info-bg);border-radius:10px;margin-bottom:14px;font-size:11.5px;display:flex;gap:8px;line-height:1.5;">${icon('info',14, '', 'color:var(--info);flex-shrink:0;margin-top:1px;')}<span>Puedes editar tu biografía cuando quieras. Esta versión offline la mantiene como demostración estática.</span></div><div class="card"><div class="card-body" style="padding:16px;"><div class="row between" style="margin-bottom:10px;"><div class="bold sm">Mi vida hasta hoy</div><button class="btn btn-flat btn-sm" data-action="edit-my-bio">${icon('edit',12)} Editar</button></div><div style="font-size:13px;line-height:1.7;color:var(--text);white-space:pre-wrap;">Soy la mayor de tres hermanos. Crecí en Quito en una familia muy unida pero también exigente. Mi papá es médico y mi mamá docente.\n\nEn el colegio fui buena estudiante y muy autoexigente. En bachillerato sentí por primera vez que la ansiedad me sobrepasaba.\n\nHoy estoy aprendiendo a bajar el ritmo y a cuidarme mejor.</div></div></div></div>`;
    } else {
      body = `<div style="padding:8px 22px 24px;"><div class="row between" style="margin-bottom:14px;"><div><div style="font-size:22px;font-weight:600;letter-spacing:-0.02em;">Mis notas</div><div class="xs muted">Tu espacio personal</div></div><button class="btn btn-primary btn-sm" data-action="new-my-note">${icon('plus',12)}</button></div>${myNotes.map(n => `<div class="card" style="margin-bottom:10px;"><div class="card-body" style="padding:14px;"><div class="row between" style="margin-bottom:8px;"><div class="bold sm">${escapeHtml(n.title || 'Sin título')}</div><div class="row xs muted" style="gap:8px;">${n.isPrivate ? `<span class="chip chip-neutral">Privada</span>` : ''}<span>${fmtDate(n.createdAt)}</span></div></div><div class="xs muted" style="line-height:1.6;">${escapeHtml(n.content)}</div></div></div>`).join('')}</div>`;
    }

    return `<div class="portal-shell"><div class="phone-frame"><button class="phone-side-return" type="button" data-action="exit-mobile-dashboard" aria-label="Volver al dashboard">${icon('home',16)}<span>Dashboard</span></button><div class="phone-notch"></div><div class="phone-screen"><div class="phone-status"><span>9:41</span><span style="display:flex;gap:6px;align-items:center;">${icon('signal',13)}${icon('wifi',13)}${icon('battery',15)}</span></div><div class="mobile-scroll">${body}</div><div class="phone-tabs">${[['home','home','Inicio'],['tareas','check2','Tareas'],['biografia','book','Mi historia'],['notas','fileText','Notas']].map(([id, ic, label]) => `<button class="phone-tab ${route.tab === id ? 'active' : ''}" data-portal-tab="${id}">${icon(ic,20)}<span style="font-size:10px;font-weight:500;">${label}</span></button>`).join('')}</div></div></div></div>${renderToast()}`;
  }

  function renderRoute(route) {
    if (state.role === 'PATIENT') return patientPortalPage(route);
    switch (route.name) {
      case 'dashboard': return shell(route, dashboardPage());
      case 'agenda': return shell(route, agendaPage());
      case 'pacientes': return shell(route, patientsPage());
      case 'paciente-detalle': return shell(route, patientDetailPage(route));
      case 'pagos': return shell(route, paymentsPage());
      case 'facturacion': return shell(route, invoicesPage());
      case 'perfil': return shell(route, profilePage());
      case 'admin-psicologos': return shell(route, adminPsychologistsPage());
      case 'admin-accesos': return shell(route, adminAccessPage());
      case 'admin-clinica': return shell(route, adminClinicPage());
      case 'admin-certificado': return shell(route, adminCertPage());
      default: return shell({ name: 'dashboard' }, dashboardPage());
    }
  }

  function bindInteractiveControls() {
    const roleSelect = document.getElementById('role-switcher');
    if (roleSelect) roleSelect.addEventListener('change', e => setRole(e.target.value));
    const q = document.getElementById('patients-query');
    const st = document.getElementById('patients-status');
    const ps = document.getElementById('patients-psychologist');
    if (q) q.value = state.patientsQuery;
    if (st) st.value = state.patientsStatus;
    if (ps) ps.value = state.patientsPsychologist;
    if (q) q.addEventListener('input', e => { state.patientsQuery = e.target.value; render(); });
    if (st) st.addEventListener('change', e => { state.patientsStatus = e.target.value; render(); });
    if (ps) ps.addEventListener('change', e => { state.patientsPsychologist = e.target.value; render(); });
  }

  document.addEventListener('click', function (e) {
    const nav = e.target.closest('[data-nav]');
    if (nav) {
      const name = nav.getAttribute('data-nav');
      if (name === 'pacientes') navigate({ name: 'pacientes' });
      else navigate({ name });
      return;
    }
    const patientRow = e.target.closest('[data-patient]');
    if (patientRow && !e.target.closest('button')) {
      navigate({ name: 'paciente-detalle', patientId: patientRow.getAttribute('data-patient'), tab: 'perfil' });
      return;
    }
    const patientTab = e.target.closest('[data-patient-tab]');
    if (patientTab) {
      navigate({ name: 'paciente-detalle', patientId: patientTab.getAttribute('data-patient-id'), tab: patientTab.getAttribute('data-patient-tab') });
      return;
    }
    const portalTab = e.target.closest('[data-portal-tab]');
    if (portalTab) {
      navigate({ name: 'patient-portal', tab: portalTab.getAttribute('data-portal-tab') });
      return;
    }
    const week = e.target.closest('[data-week]');
    if (week) {
      const delta = Number(week.getAttribute('data-week'));
      if (delta === 0) state.agendaWeekOffset = 0; else state.agendaWeekOffset += delta;
      render();
      return;
    }
    const action = e.target.closest('[data-action]');
    if (action) {
      const name = action.getAttribute('data-action');
      if (name === 'exit-mobile-dashboard') {
        setRole(state.lastDesktopRole || 'PSYCHOLOGIST');
        return;
      }
      const messages = {
        logout: ['Versión estática offline: no hay cierre de sesión real.', 'info'],
        'export-agenda': ['Agenda exportada en modo demostración.', 'success'],
        'new-appointment': ['Formulario de nueva cita disponible en la versión funcional.', 'info'],
        'new-patient': ['Alta de paciente simulada.', 'success'],
        'export-patients': ['Listado exportado en modo demostración.', 'success'],
        'share-profile': ['Ficha lista para exportación.', 'success'],
        'edit-patient': ['Edición habilitada como demostración.', 'info'],
        'new-session': ['Registro de sesión simulado.', 'info'],
        'assign-task': ['Asignación de tarea simulada.', 'success'],
        'apply-test': ['Aplicación de test simulada.', 'success'],
        'edit-bio': ['Edición de biografía simulada.', 'info'],
        'add-note': ['Nueva nota clínica simulada.', 'success'],
        'register-payment': ['Registro de pago simulado.', 'success'],
        'issue-invoice': ['Emisión de factura simulada.', 'success'],
        'save-profile': ['Perfil actualizado.', 'success'],
        'change-photo': ['Cambio de foto disponible en la app completa.', 'info'],
        'new-psychologist': ['Alta de profesional simulada.', 'success'],
        'export-access': ['Matriz exportada.', 'success'],
        'save-clinic': ['Datos fiscales guardados.', 'success'],
        'renew-cert': ['Renovación de certificado simulada.', 'success'],
        'export-payments': ['Reporte de pagos exportado.', 'success'],
        'export-invoices': ['Comprobantes listos para descarga.', 'success'],
        'task-done': ['Tarea marcada como completada (demo).', 'success'],
        'confirm-session': ['Sesión confirmada (demo).', 'success'],
        'view-session': ['Detalle de sesión disponible en la app completa.', 'info'],
        'edit-my-bio': ['Edición personal simulada.', 'info'],
        'new-my-note': ['Nueva nota personal simulada.', 'success'],
      };
      const meta = messages[name] || ['Acción ejecutada en modo demostración.', 'info'];
      showToast(meta[0], meta[1]);
      return;
    }
  });

  window.addEventListener('hashchange', render);

  function render() {
    const route = ensureValidRoute();
    root.innerHTML = renderRoute(route);
    bindInteractiveControls();
  }

  render();
})();
