import React, { useState, useEffect } from 'react';
import { Phone, AlertTriangle, Pill, Activity, MessageCircle, Ambulance, Scale, ShieldAlert, Clock, User, MapPin, Bone, Users, Droplet, FileWarning, Zap } from 'lucide-react';

const Home = () => {
  // --- DADOS DA CÉLIA ---
  const celiaData = {
    personalInfo: {
      name: "Celia Aparecida Monteiro Vieira",
      birthDate: "04/03/78",
      bloodType: "",
      photo: "https://media.discordapp.net/attachments/1428530964400701541/1462225754476773461/602848482_1587774299336129_3799481317381476382_n.png?ex=696d6b5a&is=696c19da&hm=cab02d8fe72f10380bada9f3460d622cb58e00a73d1470df493fc51ae0851ff3&=&format=webp&quality=lossless",
      religion: "Testemunha de Jeová",
      conditions: [
        "Doença Celíaca (CID10-K90)",
        "Hipotireoidismo",
        "Hérnias Discais Lombares",
        "Espondiloartrose",
        "Artrose Fêmoro-Patelar (Joelho Esq.)",
        "Condromalácia Patelar (Esq.)",
        "Hoffite (Joelho Esq.)"
      ]
    },
    emergencyContacts: [
      { name: "Jose Carlos", relation: "Marido", phone: "5511999999999" },
      { name: "Beatriz Monteiro Vieira", relation: "Filha", phone: "5511888888888" },
      { name: "Leandro Rojo", relation: "Procurador", phone: "551197642927", address: "Rua Desembargador Carneiro Ribeiro, 48" },
      { name: "Admir Bernadino Siqueira", relation: "Procurador Alt.", phone: "55119969428995", address: "Av. Waldemar Frietz, 1062 - Apto 211, Cohab Anchieta" }
    ],
    medicalInfo: {
      allergies: ["Glúten (Grave)", "Paracetamol com Codeína"],
      medications: [
        { name: "Levotiroxina (Hipotireoidismo)", time: "Jejum" },
        { name: "Medicação para Dor", time: "S/N (Evitar Codeína)" }
      ],
      advanceDirective: "TESTEMUNHA DE JEOVÁ: RECUSA ABSOLUTA DE TRANSFUSÃO DE SANGUE (Total ou Componentes Primários). Documento legal em posse dos procuradores.",
      observation: "Paciente com múltiplas patologias ortopédicas e autoimunes. Risco de choque com Glúten/Codeína."
    }
  };

  // --- LÓGICA DE ROTAÇÃO DE INFO ALEATÓRIA ---
  const [alertIndex, setAlertIndex] = useState(0);

  // Lista de alertas críticos que vão ficar passando
  const criticalAlerts = [
    { text: "DOENÇA CELÍACA - ZERO GLÚTEN", color: "bg-orange-500", icon: <AlertTriangle size={16} /> },
    { text: "PROIBIDO TRANSFUSÃO DE SANGUE", color: "bg-red-600", icon: <FileWarning size={16} /> },
    { text: "ALERGIA: PARACETAMOL + CODEÍNA", color: "bg-amber-600", icon: <ShieldAlert size={16} /> },
    { text: "TESTEMUNHA DE JEOVÁ", color: "bg-indigo-600", icon: <Scale size={16} /> },
    { text: "PROBLEMAS ORTOPÉDICOS GRAVES", color: "bg-slate-600", icon: <Bone size={16} /> }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAlertIndex((prev) => (prev + 1) % criticalAlerts.length);
    }, 2500); // Muda a cada 2.5 segundos
    return () => clearInterval(interval);
  }, [criticalAlerts.length]);

  const currentAlert = criticalAlerts[alertIndex];

  // --- FUNÇÕES ---
  const handleCall = (phone) => window.location.href = `tel:+${phone}`;
  const handleWhatsApp = (phone) => {
    const text = `URGENTE: Estou com a Célia Aparecida. Ela pode estar precisando de ajuda. Entre em contato imediatamente.`;
    window.location.href = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans relative overflow-x-hidden pb-32 selection:bg-indigo-100">

      {/* Background Sutil */}
      <div className="fixed inset-0 z-0 opacity-60 pointer-events-none bg-slate-50" style={{
        backgroundImage: `radial-gradient(#e2e8f0 1px, transparent 1px)`,
        backgroundSize: '24px 24px'
      }}></div>

      <style>{`
        @keyframes heartbeat { 0%, 100% { transform: scale(1); } 50% { transform: scale(1.1); } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse-ring { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7); } 70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(239, 68, 68, 0); } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(239, 68, 68, 0); } }
        
        /* ANIMAÇÃO DE ROTAÇÃO PARA O FUNDO DA FOTO */
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-fade-in { animation: fade-in-up 0.6s ease-out forwards; }
        .animate-pulse-slow { animation: pulse-ring 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        
        /* Classe para o gradiente cônico rotativo */
        .rotating-gradient-bg {
          background: conic-gradient(from 0deg, #ef4444, #f59e0b, #8b5cf6, #ec4899, #ef4444);
          animation: spin-slow 4s linear infinite;
          filter: blur(8px);
        }
      `}</style>

      {/* --- 1. HERO SECTION --- */}
      <div className="bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 text-white pt-10 pb-28 px-6 rounded-b-[3.5rem] shadow-2xl relative z-10 overflow-hidden">

        {/* Elementos Decorativos de Fundo */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -mr-16 -mt-16"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500 opacity-10 rounded-full blur-2xl -ml-10 -mb-10"></div>

        <div className="flex flex-col items-center animate-fade-in relative z-20">

          <div className="relative mb-6 group">
            {/* --- FUNDO ROTATIVO QUE MUDA DE COR (Efeito Sirene/Energia) --- */}
            <div className="absolute -inset-3 rounded-full rotating-gradient-bg opacity-80"></div>

            {/* Foto da Célia */}
            <img
              src={celiaData.personalInfo.photo}
              alt="Célia"
              className="w-44 h-44 rounded-full border-[5px] border-white shadow-2xl object-cover relative z-10"
            />

            {/* Ícone de Religião/Alerta */}
            <div className="absolute bottom-2 right-2 bg-white text-indigo-900 p-3 rounded-full shadow-lg z-20 ring-4 ring-indigo-900/40">
              <ShieldAlert size={28} fill="currentColor" className="text-red-600" />
            </div>
          </div>

          <h1 className="text-3xl font-black tracking-tight mb-4 text-center leading-tight drop-shadow-md">
            {celiaData.personalInfo.name}
          </h1>

          {/* --- FLASH DE INFORMAÇÕES ALEATÓRIAS (Auto-play) --- */}
          <div className="h-10 mb-4 flex items-center justify-center w-full max-w-xs">
            <div
              key={alertIndex} // A chave força a recriação da animação
              className={`${currentAlert.color} text-white px-5 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-lg flex items-center gap-2 animate-fade-in transition-all duration-500 border border-white/20`}
            >
              {currentAlert.icon}
              {currentAlert.text}
            </div>
          </div>

          <div className="flex gap-3 mt-2">
            <span className="flex items-center gap-1.5 bg-indigo-950/40 backdrop-blur-md px-4 py-1.5 rounded-xl text-xs font-bold border border-indigo-400/30 text-indigo-100">
              <User size={14} /> {celiaData.personalInfo.birthDate}
            </span>
          </div>
        </div>
      </div>

      <div className="px-5 -mt-16 relative z-20 max-w-lg mx-auto space-y-6">

        {/* --- 2. CARD DE ALERTA: DIRETIVA --- */}
        <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden animate-fade-in border-2 border-red-100 ring-4 ring-red-50 ring-offset-2">
          <div className="bg-red-50 p-6 text-center border-b border-red-100">
            <div className="flex justify-center mb-3">
              <div className="bg-white p-3 rounded-full text-red-600 shadow-sm animate-pulse-slow">
                <FileWarning size={32} />
              </div>
            </div>
            <h2 className="text-red-700 font-black text-lg uppercase tracking-tight leading-none mb-1">
              Diretiva Legal
            </h2>
            <p className="text-red-400 text-[10px] font-bold uppercase tracking-widest mb-4">Atenção Médica</p>

            <div className="bg-white border-l-4 border-red-500 rounded-r-xl p-4 shadow-sm text-left">
              <p className="text-slate-800 font-bold text-sm leading-relaxed">
                "{celiaData.medicalInfo.advanceDirective}"
              </p>
            </div>
          </div>
          <div className="bg-red-600 py-2 text-center">
            <p className="text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2">
              <AlertTriangle size={14} /> Proibido Transfusão
            </p>
          </div>
        </div>

        {/* --- 3. CONTATOS --- */}
        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>

          {/* Família */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4 mb-3 flex items-center gap-2">
              <Users size={14} /> Família (Prioridade)
            </h3>
            <div className="space-y-3">
              {celiaData.emergencyContacts.slice(0, 2).map((contact, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-5 shadow-lg shadow-slate-200/50 border border-slate-100">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">{contact.name}</h4>
                      <span className="inline-block mt-1 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase bg-indigo-50 text-indigo-600">
                        {contact.relation}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => handleCall(contact.phone)} className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 h-12 rounded-2xl font-bold text-sm flex justify-center items-center gap-2 transition-all active:scale-95">
                      <Phone size={18} className="text-indigo-600" /> Ligar
                    </button>
                    <button onClick={() => handleWhatsApp(contact.phone)} className="flex-1 bg-green-500 hover:bg-green-600 text-white h-12 rounded-2xl font-bold text-sm flex justify-center items-center gap-2 shadow-lg shadow-green-500/20 transition-all active:scale-95">
                      <MessageCircle size={18} /> WhatsApp
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Procuradores */}
          <div>
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-4 mb-3 flex items-center gap-2">
              <Scale size={14} /> Representantes Legais
            </h3>
            <div className="space-y-3">
              {celiaData.emergencyContacts.slice(2, 4).map((contact, idx) => (
                <div key={idx} className="bg-white rounded-3xl p-5 shadow-lg shadow-slate-200/50 border border-slate-100">
                  <div className="mb-4">
                    <h4 className="font-bold text-slate-800 text-lg leading-tight">{contact.name}</h4>
                    <span className="inline-block mt-1 mb-2 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase bg-slate-800 text-white">
                      {contact.relation}
                    </span>
                    {contact.address && (
                      <div className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                        <MapPin size={16} className="text-slate-400 shrink-0 mt-0.5" />
                        <p className="text-xs text-slate-600 font-medium leading-snug">{contact.address}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <button onClick={() => handleCall(contact.phone)} className="flex-1 bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 h-12 rounded-2xl font-bold text-sm flex justify-center items-center gap-2 transition-all active:scale-95">
                      <Phone size={18} className="text-indigo-600" /> Ligar
                    </button>
                    <button onClick={() => handleWhatsApp(contact.phone)} className="flex-1 bg-white hover:bg-green-50 text-green-600 border border-green-200 h-12 rounded-2xl font-bold text-sm flex justify-center items-center gap-2 transition-all active:scale-95">
                      <MessageCircle size={18} /> WhatsApp
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* --- 4. INFO MÉDICA --- */}
        <div className="bg-white rounded-[2.5rem] p-6 shadow-xl shadow-slate-200 border border-slate-100 animate-fade-in" style={{ animationDelay: '0.2s' }}>

          <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
            <div className="bg-blue-100 p-2.5 rounded-2xl text-blue-600">
              <Activity size={20} />
            </div>
            <div>
              <h3 className="font-bold text-slate-800 text-lg leading-none">Quadro Clínico</h3>
              <p className="text-xs text-slate-400 mt-1 font-medium">Diagnósticos e Alergias</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* Diagnósticos */}
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3 block">Diagnósticos (CID)</span>
              <div className="flex flex-wrap gap-2">
                {celiaData.personalInfo.conditions.map((cond, i) => (
                  <span key={i} className={`text-xs font-bold px-3 py-2 rounded-xl flex items-center gap-2 border shadow-sm transition-all hover:scale-105 ${cond.includes('Celíaca') ? 'bg-orange-50 text-orange-800 border-orange-200' : 'bg-slate-50 text-slate-700 border-slate-200'}`}>
                    {cond.includes('Celíaca') && <AlertTriangle size={14} className="text-orange-500 shrink-0" />}
                    {(cond.includes('Hérnia') || cond.includes('Artrose') || cond.includes('Hoffite') || cond.includes('Condromalácia') || cond.includes('Espondiloartrose')) ? <Bone size={14} className="text-slate-400 shrink-0" /> : null}
                    {cond}
                  </span>
                ))}
              </div>
            </div>

            {/* Alergias */}
            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100 relative overflow-hidden group">
              <div className="absolute -top-4 -right-4 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Zap size={80} className="text-amber-600" />
              </div>
              <span className="text-[10px] font-bold text-amber-600 uppercase tracking-wider mb-3 block relative z-10">⚠ Alergias & Restrições</span>
              <div className="flex flex-wrap gap-2 relative z-10">
                {celiaData.medicalInfo.allergies.map((alg, i) => (
                  <span key={i} className={`text-xs font-bold px-3 py-2 rounded-xl shadow-sm border flex items-center gap-2 ${alg.includes('Glúten') || alg.includes('Codeína') ? 'bg-red-500 text-white border-red-600' : 'bg-white text-amber-900 border-amber-200'}`}>
                    <AlertTriangle size={12} className="shrink-0" /> {alg}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* --- 5. MEDICAMENTOS --- */}
        <div className="bg-white rounded-[2.5rem] p-6 shadow-xl shadow-slate-200 border border-slate-100 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-teal-100 p-2.5 rounded-2xl text-teal-600">
              <Pill size={20} />
            </div>
            <h3 className="font-bold text-slate-800 text-lg">Uso Contínuo</h3>
          </div>
          <div className="space-y-3">
            {celiaData.medicalInfo.medications.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex flex-col">
                  <span className="font-bold text-slate-700 text-sm">{item.name}</span>
                </div>
                <span className="text-[10px] font-bold bg-white text-teal-600 px-3 py-1.5 rounded-lg flex items-center gap-1 border border-slate-100 shadow-sm shrink-0">
                  <Clock size={12} /> {item.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* --- OBSERVAÇÃO --- */}
        <div className="bg-white border-l-4 border-red-500 p-5 rounded-r-xl shadow-md mx-2 mt-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-slate-800 text-xs font-semibold leading-relaxed">
            <span className="text-red-500 font-black uppercase text-[10px] tracking-widest block mb-1">Observação Clínica</span>
            "{celiaData.medicalInfo.observation}"
          </p>
        </div>

        <div className="text-center pt-8 opacity-50">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">Healer ID System</p>
        </div>

      </div>

      {/* --- BOTÃO FLUTUANTE SOS --- */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="tel:192"
          className="group flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full shadow-red-600/40 shadow-2xl hover:scale-110 transition-transform border-[3px] border-white"
        >
          <Ambulance size={28} className="group-hover:animate-pulse" />
          <span className="absolute -top-2 -right-2 bg-slate-900 text-white text-[10px] font-bold px-2 py-0.5 rounded-full border border-white shadow-sm">SOS</span>
        </a>
      </div>

    </div>
  );
};

export default Home;