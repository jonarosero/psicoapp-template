/* global React */
// ====================================================
// Mock data + utilidades — PsicoApp
// Datos realistas Ecuador + clínicos plausibles
// ====================================================

const TODAY = new Date(2026, 3, 27); // 27-abril-2026
const fmtDate = (d) =>
  d.toLocaleDateString("es-EC", { day: "2-digit", month: "short", year: "numeric" });
const fmtDateLong = (d) =>
  d.toLocaleDateString("es-EC", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
const fmtTime = (d) =>
  d.toLocaleTimeString("es-EC", { hour: "2-digit", minute: "2-digit", hour12: false });
const fmtMoney = (n) =>
  "$" + Number(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const initialsOf = (name) =>
  name.split(" ").filter(Boolean).slice(0, 2).map((s) => s[0]).join("").toUpperCase();

const COLOR_POOL = [
  "linear-gradient(135deg, #b48cf3, #7c4ed1)",
  "linear-gradient(135deg, #f3a8c1, #d96aa1)",
  "linear-gradient(135deg, #8cc8f3, #4e93d1)",
  "linear-gradient(135deg, #f3c98c, #d18e4e)",
  "linear-gradient(135deg, #8cf3c2, #4ed18a)",
  "linear-gradient(135deg, #c9a8f3, #8e6ad9)",
  "linear-gradient(135deg, #f38c8c, #d14e4e)",
  "linear-gradient(135deg, #8cc8a8, #4e9377)",
];
const colorFor = (id) => {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return COLOR_POOL[h % COLOR_POOL.length];
};

// ===== Psicólogos =====
const PSYCHOLOGISTS = [
  { id: "u-mvp", name: "Dra. María Velasco", email: "maria.velasco@psicoapp.ec", role: "ADMIN", title: "Directora Clínica", reg: "PSI-EC-1023" },
  { id: "u-jce", name: "Dr. Javier Cevallos", email: "javier.cevallos@psicoapp.ec", role: "PSYCHOLOGIST", title: "Psicólogo Clínico", reg: "PSI-EC-2841" },
  { id: "u-amr", name: "Dra. Andrea Mora", email: "andrea.mora@psicoapp.ec", role: "PSYCHOLOGIST", title: "Psicóloga Infanto-juvenil", reg: "PSI-EC-3104" },
  { id: "u-rgu", name: "Dr. Ricardo Guerrero", email: "ricardo.guerrero@psicoapp.ec", role: "PSYCHOLOGIST", title: "Psicólogo de Pareja", reg: "PSI-EC-2207" },
];

// ===== Pacientes =====
const PATIENTS = [
  {
    id: "p-001",
    nombres: "Camila Andrea",
    apellidos: "Salazar Vallejo",
    cedula: "1714238902",
    fechaNac: new Date(1992, 5, 14),
    sexo: "FEMALE",
    estadoCivil: "Soltera",
    ocupacion: "Diseñadora gráfica",
    telefono: "+593 99 821 4502",
    email: "camila.salazar@gmail.com",
    direccion: "Av. González Suárez N32-14, Quito",
    contactoEmergencia: "Lucía Vallejo (madre) · +593 98 123 9912",
    motivoConsulta: "Ansiedad anticipatoria laboral, episodios de insomnio recurrente desde hace ~6 meses tras cambio de equipo.",
    diagnostico: "Trastorno de Ansiedad Generalizada (F41.1) — leve a moderado.",
    medicacion: "Sertralina 50mg/día (prescrita por psiquiatra externo)",
    alergias: "Penicilina",
    primaryId: "u-jce",
    collaborators: [{ id: "u-mvp", expira: null }],
    status: "ACTIVE",
    fechaIngreso: new Date(2025, 8, 12),
    fac: { tipoId: "05", id: "1714238902", razonSocial: "Camila Andrea Salazar Vallejo", direccion: "Av. González Suárez N32-14, Quito", email: "camila.salazar@gmail.com" },
  },
  {
    id: "p-002",
    nombres: "Mateo Sebastián",
    apellidos: "Ortega Naranjo",
    cedula: "1709283745",
    fechaNac: new Date(1985, 1, 28),
    sexo: "MALE",
    estadoCivil: "Casado",
    ocupacion: "Ingeniero civil",
    telefono: "+593 99 144 8801",
    email: "mateo.ortega@outlook.com",
    direccion: "Cumbayá, Urb. La Primavera, Calle 4 #122",
    contactoEmergencia: "Paula Naranjo (esposa) · +593 99 887 2103",
    motivoConsulta: "Conflicto de pareja, baja conexión emocional. Asisten ambos cónyuges.",
    diagnostico: "Sin diagnóstico formal — terapia de pareja en curso.",
    medicacion: "—",
    alergias: "—",
    primaryId: "u-rgu",
    collaborators: [],
    status: "ACTIVE",
    fechaIngreso: new Date(2026, 0, 8),
    fac: { tipoId: "05", id: "1709283745", razonSocial: "Mateo Sebastián Ortega Naranjo", direccion: "Cumbayá", email: "mateo.ortega@outlook.com" },
  },
  {
    id: "p-003",
    nombres: "Sofía Valentina",
    apellidos: "Pareja López",
    cedula: "1755332901",
    fechaNac: new Date(2010, 10, 3),
    sexo: "FEMALE",
    estadoCivil: "—",
    ocupacion: "Estudiante (8vo EGB)",
    telefono: "+593 98 200 1144",
    email: "lucia.lopez@gmail.com",
    direccion: "Tumbaco, Conjunto Bosques de la Hacienda",
    contactoEmergencia: "Lucía López (madre) · +593 98 200 1144",
    motivoConsulta: "Bullying escolar y baja autoestima reportados por madre. Síntomas: aislamiento, llanto frecuente.",
    diagnostico: "Trastorno adaptativo con ánimo deprimido (F43.21).",
    medicacion: "—",
    alergias: "Maní",
    primaryId: "u-amr",
    collaborators: [{ id: "u-mvp", expira: null }],
    status: "ACTIVE",
    fechaIngreso: new Date(2025, 11, 2),
    fac: { tipoId: "05", id: "1755332901", razonSocial: "Lucía Mariela López Cárdenas", direccion: "Tumbaco", email: "lucia.lopez@gmail.com" },
  },
  {
    id: "p-004",
    nombres: "Joaquín Andrés",
    apellidos: "Bermúdez Carrión",
    cedula: "1722809371",
    fechaNac: new Date(1978, 7, 19),
    sexo: "MALE",
    estadoCivil: "Divorciado",
    ocupacion: "Médico cardiólogo",
    telefono: "+593 99 401 7700",
    email: "j.bermudez@hcq.ec",
    direccion: "Sector La Carolina, Quito",
    contactoEmergencia: "Tomás Bermúdez (hermano) · +593 99 555 0011",
    motivoConsulta: "Burnout profesional, irritabilidad, dificultad para conciliar el sueño.",
    diagnostico: "Síndrome de desgaste profesional. Episodio depresivo leve (F32.0).",
    medicacion: "—",
    alergias: "—",
    primaryId: "u-jce",
    collaborators: [],
    status: "PAUSED",
    fechaIngreso: new Date(2025, 5, 20),
    fac: { tipoId: "05", id: "1722809371", razonSocial: "Joaquín Andrés Bermúdez Carrión", direccion: "Quito", email: "j.bermudez@hcq.ec" },
  },
  {
    id: "p-005",
    nombres: "Renata",
    apellidos: "Aguirre Salgado",
    cedula: "1718833201",
    fechaNac: new Date(1998, 2, 21),
    sexo: "FEMALE",
    estadoCivil: "Unión libre",
    ocupacion: "Abogada Junior",
    telefono: "+593 99 712 8830",
    email: "renata.aguirre@bufeteandina.ec",
    direccion: "Av. Naciones Unidas, Quito",
    contactoEmergencia: "Daniel Vargas (pareja) · +593 99 100 2233",
    motivoConsulta: "Episodios de pánico tras accidente de tránsito (jul 2025).",
    diagnostico: "TEPT subumbral en remisión parcial.",
    medicacion: "Clonazepam 0.5mg SOS",
    alergias: "AINEs",
    primaryId: "u-mvp",
    collaborators: [{ id: "u-jce", expira: new Date(2026, 6, 1) }],
    status: "ACTIVE",
    fechaIngreso: new Date(2025, 7, 4),
    fac: { tipoId: "05", id: "1718833201", razonSocial: "Renata Aguirre Salgado", direccion: "Quito", email: "renata.aguirre@bufeteandina.ec" },
  },
  {
    id: "p-006",
    nombres: "Tomás",
    apellidos: "Iturralde Vera",
    cedula: "1728801249",
    fechaNac: new Date(2002, 8, 9),
    sexo: "MALE",
    estadoCivil: "Soltero",
    ocupacion: "Estudiante universitario (PUCE)",
    telefono: "+593 98 333 7704",
    email: "tomas.iturralde@gmail.com",
    direccion: "El Bosque, Quito",
    contactoEmergencia: "Verónica Vera (madre) · +593 99 845 1100",
    motivoConsulta: "Procrastinación académica, indecisión vocacional, ánimo bajo.",
    diagnostico: "—",
    medicacion: "—",
    alergias: "—",
    primaryId: "u-amr",
    collaborators: [],
    status: "ACTIVE",
    fechaIngreso: new Date(2026, 2, 14),
    fac: { tipoId: "05", id: "1728801249", razonSocial: "Tomás Iturralde Vera", direccion: "Quito", email: "tomas.iturralde@gmail.com" },
  },
  {
    id: "p-007",
    nombres: "Esteban",
    apellidos: "Carrillo Mantilla",
    cedula: "1701445229",
    fechaNac: new Date(1965, 11, 30),
    sexo: "MALE",
    estadoCivil: "Casado",
    ocupacion: "Jubilado",
    telefono: "+593 99 088 2244",
    email: "esteban.carrillo@yahoo.com",
    direccion: "San Rafael, Valle de los Chillos",
    contactoEmergencia: "Marcela Mantilla (esposa) · +593 99 211 4477",
    motivoConsulta: "Duelo prolongado tras fallecimiento de hermano (oct 2025).",
    diagnostico: "Reacción de duelo prolongado (F43.21).",
    medicacion: "—",
    alergias: "—",
    primaryId: "u-mvp",
    collaborators: [],
    status: "ACTIVE",
    fechaIngreso: new Date(2025, 10, 15),
    fac: { tipoId: "05", id: "1701445229", razonSocial: "Esteban Carrillo Mantilla", direccion: "Valle de los Chillos", email: "esteban.carrillo@yahoo.com" },
  },
  {
    id: "p-008",
    nombres: "Valentina",
    apellidos: "Reyes Espinoza",
    cedula: "1750119828",
    fechaNac: new Date(2015, 4, 12),
    sexo: "FEMALE",
    estadoCivil: "—",
    ocupacion: "Estudiante (4to EGB)",
    telefono: "—",
    email: "—",
    direccion: "Conocoto, Quito",
    contactoEmergencia: "Pedro Reyes (padre) · +593 99 666 1100",
    motivoConsulta: "Conducta disruptiva en aula. Evaluación neuropsicológica solicitada.",
    diagnostico: "TDAH presentación combinada (F90.2) — diagnóstico provisional.",
    medicacion: "Pendiente valoración psiquiátrica",
    alergias: "—",
    primaryId: "u-amr",
    collaborators: [],
    status: "ARCHIVED",
    fechaIngreso: new Date(2024, 9, 1),
    fac: { tipoId: "05", id: "1750119828", razonSocial: "Pedro Reyes Lara", direccion: "Conocoto, Quito", email: "pedro.reyes@hotmail.com" },
  },
];

// ===== Citas (semana 27 abr - 3 may 2026) =====
// helper: cita en día N de la semana actual a hora HH:MM
const sched = (dayOffset, h, m, durationMin = 60) => {
  const d = new Date(TODAY);
  d.setDate(d.getDate() + dayOffset);
  d.setHours(h, m, 0, 0);
  return { startAt: d, durationMin };
};

const APPOINTMENTS = [
  { id: "a-001", patientId: "p-001", ...sched(0, 9, 0),  status: "CONFIRMED", paymentStatus: "PAID",    psychologistIds: ["u-jce"], packageId: "pk-001", location: "Consultorio 2" },
  { id: "a-002", patientId: "p-005", ...sched(0, 11, 0), status: "CONFIRMED", paymentStatus: "PAID",    psychologistIds: ["u-mvp", "u-jce"], packageId: null, paymentId: "pay-005", location: "Consultorio 1" },
  { id: "a-003", patientId: "p-006", ...sched(0, 14, 30), status: "SCHEDULED", paymentStatus: "PENDING", psychologistIds: ["u-amr"], location: "Consultorio 3" },
  { id: "a-004", patientId: "p-002", ...sched(0, 17, 0, 90), status: "CONFIRMED", paymentStatus: "PAID", psychologistIds: ["u-rgu"], packageId: "pk-002", location: "Consultorio 1" },

  { id: "a-005", patientId: "p-003", ...sched(1, 10, 0), status: "CONFIRMED", paymentStatus: "PAID",    psychologistIds: ["u-amr"], packageId: "pk-003", location: "Consultorio 3" },
  { id: "a-006", patientId: "p-007", ...sched(1, 12, 0), status: "SCHEDULED", paymentStatus: "PENDING", psychologistIds: ["u-mvp"], location: "Consultorio 1" },
  { id: "a-007", patientId: "p-001", ...sched(1, 16, 0), status: "SCHEDULED", paymentStatus: "PAID",    psychologistIds: ["u-jce"], packageId: "pk-001", location: "Consultorio 2" },

  { id: "a-008", patientId: "p-005", ...sched(2, 9, 30), status: "CONFIRMED", paymentStatus: "PAID",    psychologistIds: ["u-mvp"], paymentId: "pay-005", location: "Consultorio 1" },
  { id: "a-009", patientId: "p-006", ...sched(2, 14, 0), status: "SCHEDULED", paymentStatus: "PENDING", psychologistIds: ["u-amr"], location: "Consultorio 3" },
  { id: "a-010", patientId: "p-003", ...sched(2, 16, 30), status: "SCHEDULED", paymentStatus: "PAID", psychologistIds: ["u-amr"], packageId: "pk-003", location: "Consultorio 3" },

  { id: "a-011", patientId: "p-002", ...sched(3, 11, 0, 90), status: "CONFIRMED", paymentStatus: "PAID", psychologistIds: ["u-rgu"], packageId: "pk-002", location: "Consultorio 1" },
  { id: "a-012", patientId: "p-007", ...sched(3, 15, 0), status: "SCHEDULED", paymentStatus: "PENDING", psychologistIds: ["u-mvp"], location: "Consultorio 1" },

  { id: "a-013", patientId: "p-001", ...sched(4, 9, 0), status: "SCHEDULED", paymentStatus: "PAID", psychologistIds: ["u-jce"], packageId: "pk-001", location: "Consultorio 2" },
  { id: "a-014", patientId: "p-005", ...sched(4, 12, 0), status: "SCHEDULED", paymentStatus: "PAID", psychologistIds: ["u-mvp"], paymentId: "pay-005", location: "Consultorio 1" },
  { id: "a-015", patientId: "p-006", ...sched(4, 16, 0), status: "SCHEDULED", paymentStatus: "PENDING", psychologistIds: ["u-amr"], location: "Consultorio 3" },

  // Pasadas (lunes pasado)
  { id: "a-090", patientId: "p-001", ...sched(-7, 9, 0), status: "COMPLETED", paymentStatus: "PAID", psychologistIds: ["u-jce"], packageId: "pk-001" },
  { id: "a-091", patientId: "p-001", ...sched(-14, 9, 0), status: "COMPLETED", paymentStatus: "PAID", psychologistIds: ["u-jce"], packageId: "pk-001" },
  { id: "a-092", patientId: "p-001", ...sched(-21, 9, 0), status: "COMPLETED", paymentStatus: "PAID", psychologistIds: ["u-jce"], packageId: "pk-001" },
  { id: "a-093", patientId: "p-001", ...sched(-28, 9, 0), status: "NO_SHOW", paymentStatus: "PAID", psychologistIds: ["u-jce"], packageId: "pk-001" },
];

// ===== Paquetes =====
const PACKAGES = [
  { id: "pk-001", patientId: "p-001", totalSessions: 8, sessionsUsed: 4, pricePerSession: 60, totalPrice: 480, purchasedAt: new Date(2026, 1, 14), expiresAt: new Date(2026, 7, 14), status: "ACTIVE" },
  { id: "pk-002", patientId: "p-002", totalSessions: 6, sessionsUsed: 2, pricePerSession: 90, totalPrice: 540, purchasedAt: new Date(2026, 0, 8),  expiresAt: new Date(2026, 6, 8),  status: "ACTIVE" },
  { id: "pk-003", patientId: "p-003", totalSessions: 10, sessionsUsed: 7, pricePerSession: 50, totalPrice: 500, purchasedAt: new Date(2025, 11, 2), expiresAt: new Date(2026, 5, 2),  status: "ACTIVE" },
  { id: "pk-004", patientId: "p-005", totalSessions: 4, sessionsUsed: 4, pricePerSession: 70, totalPrice: 280, purchasedAt: new Date(2025, 10, 4), expiresAt: new Date(2026, 4, 4),  status: "CONSUMED" },
];

// ===== Pagos =====
const PAYMENTS = [
  { id: "pay-001", patientId: "p-001", packageId: "pk-001", amount: 480, type: "PACKAGE", method: "Transferencia", reference: "TRF-9928301", paidAt: new Date(2026, 1, 14), notes: "Paquete 8 sesiones — 5% descuento aplicado" },
  { id: "pay-002", patientId: "p-002", packageId: "pk-002", amount: 540, type: "PACKAGE", method: "Tarjeta",       reference: "VISA-****4421", paidAt: new Date(2026, 0, 8) },
  { id: "pay-003", patientId: "p-003", packageId: "pk-003", amount: 500, type: "PACKAGE", method: "Efectivo",      paidAt: new Date(2025, 11, 2) },
  { id: "pay-004", patientId: "p-005", packageId: "pk-004", amount: 280, type: "PACKAGE", method: "Transferencia", reference: "TRF-9810022", paidAt: new Date(2025, 10, 4) },
  { id: "pay-005", patientId: "p-005", amount: 70, type: "SINGLE", method: "Tarjeta", reference: "VISA-****1102", paidAt: new Date(2026, 3, 22), notes: "Sesión adicional fuera de paquete" },
  { id: "pay-006", patientId: "p-007", amount: 60, type: "SINGLE", method: "Efectivo", paidAt: new Date(2025, 11, 18) },
  { id: "pay-007", patientId: "p-007", amount: 60, type: "SINGLE", method: "Efectivo", paidAt: new Date(2026, 0, 22) },
];

// ===== Facturas =====
const INVOICES = [
  {
    id: "inv-001", patientId: "p-001", paymentId: "pay-001", secuencial: 142,
    numeroFactura: "001-001-000000142",
    claveAcceso: "1402202601179229834800110010010000001421234567819",
    numeroAutorizacion: "1402202601179229834800110010010000001421234567819",
    fechaAutorizacion: new Date(2026, 1, 14, 10, 23),
    ambiente: "PRODUCTION", status: "AUTHORIZED",
    receptor: { tipoId: "05", id: "1714238902", razonSocial: "Camila Andrea Salazar Vallejo", email: "camila.salazar@gmail.com", direccion: "Av. González Suárez N32-14, Quito" },
    subtotal0: 480, iva: 0, total: 480,
    items: [{ desc: "Paquete 8 sesiones de psicoterapia individual", cant: 1, precio: 480, ivaCodigo: "0", ivaPorc: 0, ivaValor: 0 }],
    emailSent: true,
  },
  {
    id: "inv-002", patientId: "p-002", paymentId: "pay-002", secuencial: 143,
    numeroFactura: "001-001-000000143",
    claveAcceso: "0801202601179229834800110010010000001431234567826",
    numeroAutorizacion: "0801202601179229834800110010010000001431234567826",
    fechaAutorizacion: new Date(2026, 0, 8, 14, 8),
    ambiente: "PRODUCTION", status: "AUTHORIZED",
    receptor: { tipoId: "05", id: "1709283745", razonSocial: "Mateo Sebastián Ortega Naranjo", email: "mateo.ortega@outlook.com", direccion: "Cumbayá" },
    subtotal0: 540, iva: 0, total: 540,
    items: [{ desc: "Paquete 6 sesiones de terapia de pareja", cant: 1, precio: 540, ivaCodigo: "0", ivaPorc: 0, ivaValor: 0 }],
    emailSent: true,
  },
  {
    id: "inv-003", patientId: "p-005", paymentId: "pay-005", secuencial: 144,
    numeroFactura: "001-001-000000144",
    claveAcceso: "2204202601179229834800110010010000001441234567833",
    numeroAutorizacion: null, fechaAutorizacion: null,
    ambiente: "PRODUCTION", status: "SIGNED",
    receptor: { tipoId: "05", id: "1718833201", razonSocial: "Renata Aguirre Salgado", email: "renata.aguirre@bufeteandina.ec", direccion: "Quito" },
    subtotal0: 70, iva: 0, total: 70,
    items: [{ desc: "Sesión individual de psicoterapia", cant: 1, precio: 70, ivaCodigo: "0", ivaPorc: 0, ivaValor: 0 }],
    emailSent: false,
  },
  {
    id: "inv-004", patientId: "p-003", paymentId: "pay-003", secuencial: 138,
    numeroFactura: "001-001-000000138",
    claveAcceso: "0212202501179229834800110010010000001381234567841",
    numeroAutorizacion: "0212202501179229834800110010010000001381234567841",
    fechaAutorizacion: new Date(2025, 11, 2, 16, 12),
    ambiente: "PRODUCTION", status: "AUTHORIZED",
    receptor: { tipoId: "05", id: "1755332901", razonSocial: "Lucía Mariela López Cárdenas", email: "lucia.lopez@gmail.com", direccion: "Tumbaco" },
    subtotal0: 500, iva: 0, total: 500,
    items: [{ desc: "Paquete 10 sesiones psicoterapia infanto-juvenil", cant: 1, precio: 500, ivaCodigo: "0", ivaPorc: 0, ivaValor: 0 }],
    emailSent: true,
  },
  {
    id: "inv-005", patientId: "p-007", paymentId: "pay-007", secuencial: 141,
    numeroFactura: "001-001-000000141",
    claveAcceso: "2201202601179229834800110010010000001411234567859",
    ambiente: "PRODUCTION", status: "REJECTED",
    receptor: { tipoId: "05", id: "1701445229", razonSocial: "Esteban Carrillo Mantilla", email: "esteban.carrillo@yahoo.com", direccion: "Valle de los Chillos" },
    subtotal0: 60, iva: 0, total: 60,
    items: [{ desc: "Sesión de acompañamiento de duelo", cant: 1, precio: 60, ivaCodigo: "0", ivaPorc: 0, ivaValor: 0 }],
    rejectionMessages: "ERROR 65 — IDENTIFICACION DEL RECEPTOR no corresponde al tipo declarado. Validar dígito verificador de la cédula.",
    emailSent: false,
  },
];

// ===== Tareas del paciente =====
const TASKS = [
  { id: "t-001", patientId: "p-001", title: "Diario de pensamientos automáticos", description: "Registrar 3 pensamientos automáticos diarios identificando situación, emoción, intensidad (0–10) y reestructuración.", assignedAt: new Date(2026, 3, 20), dueAt: new Date(2026, 3, 28), status: "IN_PROGRESS", createdById: "u-jce" },
  { id: "t-002", patientId: "p-001", title: "Ejercicio de respiración 4-7-8 (3x/día)", description: "Practicar respiración 4-7-8 al despertar, antes de dormir y en momentos de ansiedad.", assignedAt: new Date(2026, 3, 13), dueAt: null, status: "IN_PROGRESS", createdById: "u-jce" },
  { id: "t-003", patientId: "p-001", title: "Lectura: capítulo 3 — 'El cerebro ansioso'", description: "Leer y subrayar las 3 ideas que más resuenen.", assignedAt: new Date(2026, 3, 6), dueAt: new Date(2026, 3, 20), status: "COMPLETED", createdById: "u-jce" },
  { id: "t-004", patientId: "p-001", title: "Mapa de fortalezas personales", description: "Listar 10 fortalezas y dar un ejemplo concreto reciente para cada una.", assignedAt: new Date(2026, 3, 1), dueAt: new Date(2026, 3, 12), status: "OVERDUE", createdById: "u-jce" },
  { id: "t-005", patientId: "p-001", title: "Higiene del sueño — checklist semanal", description: "Marcar diariamente el cumplimiento de las 7 reglas de higiene del sueño.", assignedAt: new Date(2026, 3, 22), dueAt: new Date(2026, 4, 5), status: "PENDING", createdById: "u-jce" },
];

// ===== Mood logs (Camila) =====
const MOODS = [
  { id: "m-001", patientId: "p-001", level: 4, tags: ["ansiedad", "trabajo"], description: "Reunión con cliente difícil, sentí palpitaciones por la mañana.", loggedAt: new Date(2026, 3, 26, 21, 30) },
  { id: "m-002", patientId: "p-001", level: 6, tags: ["calma", "ejercicio"], description: "Caminé 40 minutos en el parque, me sentí más liviana.", loggedAt: new Date(2026, 3, 25, 19, 0) },
  { id: "m-003", patientId: "p-001", level: 3, tags: ["tristeza", "soledad"], description: "Domingo bajo, extrañé a mi hermana.", loggedAt: new Date(2026, 3, 24, 22, 0) },
  { id: "m-004", patientId: "p-001", level: 7, tags: ["productiva", "calma"], description: "Buen día de trabajo, terminé entregable temprano.", loggedAt: new Date(2026, 3, 23, 18, 30) },
  { id: "m-005", patientId: "p-001", level: 5, tags: ["neutral"], description: "Día normal, sin sobresaltos.", loggedAt: new Date(2026, 3, 22, 20, 15) },
  { id: "m-006", patientId: "p-001", level: 4, tags: ["ansiedad"], description: "Pensamientos en bucle antes de dormir.", loggedAt: new Date(2026, 3, 21, 23, 45) },
  { id: "m-007", patientId: "p-001", level: 6, tags: ["calma", "amistad"], description: "Cena con María, me hizo bien.", loggedAt: new Date(2026, 3, 20, 21, 0) },
];

// ===== Notas de paciente (privadas o no) =====
const PATIENT_NOTES = [
  { id: "n-001", patientId: "p-001", title: "Reflexión post-sesión", content: "Me ayudó pensar que la ansiedad no es lo que soy, sino una respuesta de mi cuerpo. Voy a probar lo del diario de pensamientos esta semana.", isPrivate: false, createdAt: new Date(2026, 3, 20, 14, 30) },
  { id: "n-002", patientId: "p-001", title: "Carta a mi yo pasado", content: "(privada — solo paciente)", isPrivate: true, createdAt: new Date(2026, 3, 18, 22, 10) },
  { id: "n-003", patientId: "p-001", title: "Lo que me dijo mi mamá hoy", content: "Algo que necesito procesar...", isPrivate: false, createdAt: new Date(2026, 3, 14, 19, 0) },
];

// ===== Notas de sesión (psicólogo) =====
const SESSION_NOTES = [
  { id: "sn-001", appointmentId: "a-090", authorId: "u-jce", isPrivate: false, content: "Camila reporta mejoría en sueño (5 noches con >6h). Continúa hipervigilancia laboral. Trabajamos defusión cognitiva con metáfora del río.", createdAt: new Date(2026, 3, 20, 10, 5) },
  { id: "sn-002", appointmentId: "a-091", authorId: "u-jce", isPrivate: false, content: "Sesión centrada en activación conductual. Acuerdo: 2 caminatas/semana de 30min mín. Ánimo medido EVA: 5/10.", createdAt: new Date(2026, 3, 13, 10, 8) },
  { id: "sn-003", appointmentId: "a-091", authorId: "u-jce", isPrivate: true, content: "Hipótesis: rasgo perfeccionista alimenta el TAG. Considerar derivar a evaluación de personalidad si no remite en 6 sesiones.", createdAt: new Date(2026, 3, 13, 10, 30) },
];

// ===== Tests aplicados =====
const TESTS = [
  { id: "ts-001", patientId: "p-001", appliedById: "u-jce", tipo: "Beck Anxiety Inventory (BAI)", puntuacion: 24, interpretacion: "Ansiedad moderada", appliedAt: new Date(2025, 8, 15) },
  { id: "ts-002", patientId: "p-001", appliedById: "u-jce", tipo: "Beck Depression Inventory (BDI-II)", puntuacion: 11, interpretacion: "Depresión mínima", appliedAt: new Date(2025, 8, 15) },
  { id: "ts-003", patientId: "p-001", appliedById: "u-jce", tipo: "GAD-7", puntuacion: 12, interpretacion: "Ansiedad moderada", appliedAt: new Date(2026, 1, 10) },
  { id: "ts-004", patientId: "p-001", appliedById: "u-jce", tipo: "GAD-7", puntuacion: 8, interpretacion: "Ansiedad leve", appliedAt: new Date(2026, 3, 6) },
];

// ===== Datos clínica + SRI =====
const CLINIC = {
  ruc: "1792298348001",
  razonSocial: "PSICOAPP CENTRO DE SALUD MENTAL CIA. LTDA.",
  nombreComercial: "PsicoApp",
  direccionMatriz: "Av. González Suárez N32-14, Quito - Pichincha",
  direccionEstablecimiento: "Av. González Suárez N32-14, Edif. Mirador, Piso 4 - Of. 402",
  codigoEstablecimiento: "001",
  puntoEmision: "001",
  secuencialActual: 145,
  obligadoContabilidad: true,
  contribuyenteEspecial: "—",
  ambiente: "PRODUCTION", // 1 = TEST, 2 = PRODUCTION
};

const CERT = {
  fileName: "BCE_psicoapp_2025.p12",
  subject: "PSICOAPP CENTRO DE SALUD MENTAL CIA. LTDA., RUC: 1792298348001",
  issuer: "BCE - AUTORIDAD DE CERTIFICACIÓN BANCO CENTRAL DEL ECUADOR",
  validFrom: new Date(2025, 5, 12),
  validTo: new Date(2027, 5, 12),
  uploadedAt: new Date(2025, 5, 14),
  active: true,
};

// Exportar al window
Object.assign(window, {
  TODAY, fmtDate, fmtDateLong, fmtTime, fmtMoney, initialsOf, colorFor,
  PSYCHOLOGISTS, PATIENTS, APPOINTMENTS, PACKAGES, PAYMENTS, INVOICES,
  TASKS, MOODS, PATIENT_NOTES, SESSION_NOTES, TESTS, CLINIC, CERT,
});
