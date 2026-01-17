import React from 'react';
import { Phone, AlertTriangle, Pill, Activity, MessageCircle, Ambulance, Scale, ShieldAlert, FileText, Clock, User } from 'lucide-react';

const Home = () => {
  // --- DADOS DA CÉLIA (MANTIDOS) ---
  const celiaData = {
    personalInfo: {
      name: "Célia",
      birthDate: "15/05/1965",
      bloodType: "O+",
      photo: "https://placehold.co/400x400/e2e8f0/ef4444?text=Foto+Celia",
      religion: "Testemunha de Jeová",
      conditions: [
        "Doença Celíaca (Glúten)",
        "Hipertensão Arterial"
      ]
    },
    emergencyContacts: [
      { name: "Carlos", relation: "Marido", phone: "5511999999999" },
      { name: "Beatriz", relation: "Filha", phone: "5511888888888" }
    ],
    medicalInfo: {
      allergies: ["Glúten (Grave)", "Dipirona Sódica", "Sulfa"],
      medications: [
        { name: "exemplo", time: "Manhã/Noite" },
        { name: "exemplo", time: "Suplementação" }
      ],
      insurance: {
        provider: "exemplo",
        number: "000.123.456.789",
        plan: "Especial"
      },
      advanceDirective: "TESTEMUNHA DE JEOVÁ: RECUSA ABSOLUTA DE TRANSFUSÃO DE SANGUE (Total ou Componentes Primários).",
      observation: "Paciente inconsciente: Respeitar diretiva antecipada. Dieta estritamente sem glúten."
    }
  };

  // --- FUNÇÕES AUXILIARES ---
  const handleCall = (phone) => window.location.href = `tel:+${phone}`;

  const handleWhatsApp = (phone) => {
    const text = `URGENTE: Estou com a Célia (Testemunha de Jeová). Ela pode estar inconsciente. Entre em contato imediatamente.`;
    window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative overflow-x-hidden pb-32">

      {/* Background Decorativo */}
      <div className="fixed inset-0 z-0 opacity-40 pointer-events-none" style={{
        backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
        backgroundSize: '20px 20px'
      }}></div>

      <style>{`
        @keyframes heartbeat { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.15); } }
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0% { transform: translateY(0px); } 50% { transform: translateY(-5px); } 100% { transform: translateY(0px); } }
        @keyframes warning-stripe { 
          0% { background-position: 0 0; } 
          100% { background-position: 40px 0; } 
        }
        
        .animate-heartbeat { animation: heartbeat 2s infinite ease-in-out; }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        .animate-float { animation: float 3s infinite ease-in-out; }
        
        /* Efeito de fita de isolamento */
        .warning-stripes {
          background-image: repeating-linear-gradient(
            -45deg,
            rgba(239, 68, 68, 0.1),
            rgba(239, 68, 68, 0.1) 10px,
            rgba(239, 68, 68, 0.2) 10px,
            rgba(239, 68, 68, 0.2) 20px
          );
          background-size: 28px 28px;
          animation: warning-stripe 1s linear infinite;
        }
      `}</style>

      {/* --- 1. HEADER HERO --- */}
      <div className="bg-gradient-to-b from-indigo-900 via-purple-900 to-purple-800 text-white pt-10 pb-20 px-6 rounded-b-[2.5rem] shadow-2xl relative z-10">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="flex flex-col items-center animate-fade-in">
          {/* Foto com Anéis de Status */}
          <div className="relative mb-4 group">
            {/* Anel Pulsante */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-purple-400 to-red-500 rounded-full opacity-70 blur animate-pulse"></div>

            <img
              src={celiaData.personalInfo.photo}
              alt="Célia"
              className="w-36 h-36 rounded-full border-4 border-white shadow-xl object-cover relative z-10"
            />

            <div className="absolute bottom-1 right-1 bg-white text-purple-700 p-2 rounded-full shadow-lg z-20 animate-heartbeat ring-4 ring-purple-900/50">
              <ShieldAlert size={22} fill="currentColor" className="text-red-600" />
            </div>
          </div>

          <h1 className="text-3xl font-black tracking-tight mb-1">{celiaData.personalInfo.name}</h1>
          <p className="text-purple-200 text-sm font-medium mb-4">{celiaData.personalInfo.religion}</p>

          <div className="flex gap-3">
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold border border-white/20 uppercase tracking-wide">
              <Activity size={14} className="text-red-300" /> {celiaData.personalInfo.bloodType}
            </span>
            <span className="flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold border border-white/20 uppercase tracking-wide">
              <User size={14} className="text-blue-300" /> {celiaData.personalInfo.birthDate}
            </span>
          </div>
        </div>
      </div>

      <div className="px-5 -mt-14 relative z-20 max-w-lg mx-auto space-y-6">

        {/* --- 2. DIRETIVA ANTECIPADA (VISUAL DE ALERTA MÁXIMO) --- */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in border-2 border-red-500 transform hover:scale-[1.01] transition-transform">
          {/* Cabeçalho Listrado */}
          <div className="h-3 bg-red-500 warning-stripes w-full"></div>

          <div className="p-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-red-100 p-3 rounded-full text-red-600 ring-4 ring-red-50">
                <Scale size={32} />
              </div>
            </div>

            <h2 className="text-red-700 font-black text-lg uppercase tracking-tight leading-tight mb-3">
              Diretiva de Vontade
            </h2>

            <div className="bg-red-50 border border-red-100 rounded-xl p-4 mb-3">
              <p className="text-slate-900 font-bold text-sm leading-relaxed">
                "{celiaData.medicalInfo.advanceDirective}"
              </p>
            </div>

            <p className="text-[10px] text-red-500 font-bold uppercase tracking-widest bg-red-50/50 inline-block px-3 py-1 rounded-full">
              Documento Legal Válido
            </p>
          </div>
        </div>

        {/* --- 3. CONTATOS (ESTILO CARD DE PERFIL) --- */}
        <div className="space-y-3 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-2 flex items-center gap-2">
            <Phone size={14} /> Contatos Prioritários
          </h3>

          {celiaData.emergencyContacts.map((contact, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-5 shadow-lg border border-slate-100 flex flex-col gap-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-slate-800 text-lg">{contact.name}</h4>
                    <span className="text-[10px] font-bold bg-purple-100 text-purple-700 px-2 py-0.5 rounded uppercase">
                      {contact.relation}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-1">Contato de Emergência</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => handleCall(contact.phone)}
                  className="bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 py-3 rounded-xl font-bold text-sm flex justify-center items-center gap-2 transition-colors active:scale-95"
                >
                  <Phone size={16} className="text-purple-600" /> Ligar
                </button>
                <button
                  onClick={() => handleWhatsApp(contact.phone)}
                  className="bg-green-50 hover:bg-green-100 text-green-700 border border-green-200 py-3 rounded-xl font-bold text-sm flex justify-center items-center gap-2 transition-colors active:scale-95"
                >
                  <MessageCircle size={16} /> WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* --- 4. SAÚDE (GRID VISUAL) --- */}
        <div className="bg-white rounded-2xl shadow-xl p-5 border border-slate-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
            <Activity size={14} /> Quadro Clínico
          </h3>

          <div className="grid grid-cols-1 gap-4">
            {/* Condições */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
              <span className="text-xs font-bold text-slate-400 uppercase mb-2 block">Diagnósticos</span>
              <div className="flex flex-wrap gap-2">
                {celiaData.personalInfo.conditions.map((cond, i) => (
                  <span key={i} className={`text-sm font-bold px-3 py-1.5 rounded-lg flex items-center gap-2 border ${cond.includes('Celíaca') ? 'bg-orange-50 text-orange-700 border-orange-200' : 'bg-white text-slate-700 border-slate-200'}`}>
                    {cond.includes('Celíaca') && <AlertTriangle size={14} className="text-orange-500" />}
                    {cond}
                  </span>
                ))}
              </div>
            </div>

            {/* Alergias - Visual de Aviso */}
            <div className="bg-red-50 rounded-xl p-4 border border-red-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-10">
                <AlertTriangle size={60} className="text-red-500" />
              </div>
              <span className="text-xs font-bold text-red-400 uppercase mb-2 block relative z-10">Alergias & Restrições</span>
              <div className="flex flex-wrap gap-2 relative z-10">
                {celiaData.medicalInfo.allergies.map((alg, i) => (
                  <span key={i} className="bg-white text-red-700 border border-red-200 text-xs font-bold px-3 py-1.5 rounded-md shadow-sm">
                    {alg}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- 5. MEDICAMENTOS & SEGURO (TIMELINE & CARD) --- */}
        <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>

          {/* Medicamentos */}
          <div className="bg-white rounded-2xl shadow-lg p-5 border border-slate-100">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 flex items-center gap-2">
              <Pill size={14} /> Uso Contínuo
            </h3>
            <div className="space-y-3">
              {celiaData.medicalInfo.medications.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                      <Pill size={16} />
                    </div>
                    <span className="font-bold text-slate-700 text-sm">{item.name}</span>
                  </div>
                  <span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded-md flex items-center gap-1 border border-blue-100">
                    <Clock size={10} /> {item.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Cartão do Convênio (Visual Digital) */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-6 shadow-xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -mr-10 -mt-10"></div>

            <div className="flex justify-between items-start mb-6 relative z-10">
              <FileText size={24} className="opacity-80" />
              <span className="font-mono text-sm opacity-70 tracking-widest">HEALTH CARD</span>
            </div>

            <div className="relative z-10">
              <p className="text-[10px] uppercase font-bold text-emerald-100 mb-1">Operadora</p>
              <p className="text-xl font-bold mb-4 tracking-tight">{celiaData.medicalInfo.insurance.provider}</p>

              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] uppercase font-bold text-emerald-100 mb-1">Número da Carteirinha</p>
                  <p className="font-mono text-lg tracking-wider text-white drop-shadow-md">{celiaData.medicalInfo.insurance.number}</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* --- 6. OBSERVAÇÃO FINAL --- */}
        <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-center mx-2">
          <p className="text-amber-800 text-xs italic font-medium leading-relaxed">
            ⚠ "{celiaData.medicalInfo.observation}"
          </p>
        </div>

        <div className="text-center pt-4">
          <p className="text-slate-300 text-[10px] uppercase tracking-[0.3em]">Healer ID System</p>
        </div>

      </div>

      {/* --- BOTÃO FLUTUANTE 192 --- */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="tel:192"
          className="group flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full shadow-red-600/40 shadow-2xl hover:scale-110 transition-transform animate-float border-4 border-white/20"
        >
          <Ambulance size={28} className="group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-2 -right-2 bg-white text-red-600 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">SOS</span>
        </a>
      </div>

    </div>
  );
};

export default Home;