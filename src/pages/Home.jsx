import React, { useState } from 'react';
import WhatsAppButton from '../components/WhatsAppButton';
import Icon from '../components/Icon';
import HeroSection from '../components/HeroSection';
import SpecialtiesSection from '../components/SpecialtiesSection';
import ValueProposition from '../components/ValueProposition'; // <--- NOVA IMPORTAÇÃO

// Importando logo (ainda usada no rodapé)
import solvBLogo from '../assets/solvB.png';
// Nota: iphoneImg e macbookImg foram removidos daqui pois foram para o componente novo

const Home = () => {
  // Estado para o formulário de orçamento
  const [formData, setFormData] = useState({
    nome: '',
    aparelho: '',
    problema: ''
  });

  // Estado para o modal de compartilhamento (fallback)
  const [showShareModal, setShowShareModal] = useState(false);

  // --- LÓGICA DO FORMULÁRIO WHATSAPP ---
  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const hour = new Date().getHours();
    let greeting = "Olá";
    if (hour < 12) greeting = "Bom dia";
    else if (hour < 18) greeting = "Boa tarde";
    else greeting = "Boa noite";

    const message = `${greeting}! Me chamo *${formData.nome}*. \nGostaria de um orçamento para o aparelho: *${formData.aparelho}*.\n\nDescrição do problema/serviço: ${formData.problema}`;
    window.open(`https://wa.me/5511952924711?text=${encodeURIComponent(message)}`, '_blank');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- LÓGICA DE COMPARTILHAMENTO ---
  const handleShare = async () => {
    const shareData = {
      title: 'SOLVPLACE - Assistência Técnica Delivery',
      text: 'Na hora do problema, escolha quem cuida de verdade. Assistência técnica sem sair de casa!',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Erro ao compartilhar:', err);
      }
    } else {
      setShowShareModal(true);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    alert("Link copiado para a área de transferência!");
    setShowShareModal(false);
  };

  return (
    <div className="font-sans text-slate-600 bg-[#F8FAFC] min-h-screen flex flex-col relative">

      {/* MODAL DE COMPARTILHAMENTO */}
      {showShareModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm relative">
            <button
              onClick={() => setShowShareModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
            <h3 className="text-xl font-bold text-slate-800 mb-4 text-center">Compartilhar SOLVPLACE</h3>
            <div className="grid grid-cols-2 gap-3">
              <a href={`https://api.whatsapp.com/send?text=${encodeURIComponent("Olha essa assistência técnica: " + window.location.href)}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 p-3 bg-green-100 text-green-700 rounded-xl hover:bg-green-200 transition font-bold">WhatsApp</a>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 p-3 bg-blue-100 text-blue-700 rounded-xl hover:bg-blue-200 transition font-bold">Facebook</a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent("Na hora do problema, escolha quem cuida de verdade.")}`} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 p-3 bg-slate-100 text-slate-700 rounded-xl hover:bg-slate-200 transition font-bold">X (Twitter)</a>
              <button onClick={copyToClipboard} className="flex items-center justify-center gap-2 p-3 bg-slate-800 text-white rounded-xl hover:bg-slate-700 transition font-bold">Copiar Link</button>
            </div>
          </div>
        </div>
      )}

      {/* ESTILOS GLOBAIS DE ANIMAÇÃO (Botão WhatsApp) */}
      <style>{`
        @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
        }
        .animate-bounce-slow {
            animation: bounce-slow 2s infinite ease-in-out;
        }
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 1s ease-out forwards;
            animation-delay: 2s;
            opacity: 0;
            animation-fill-mode: forwards;
        }
      `}</style>

      {/* HERO SECTION */}
      <HeroSection onShareClick={handleShare} />

      {/* FEATURES BAR */}
      <section className="relative z-20 px-4 -mt-10 mb-20">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl border border-slate-100 p-6 md:p-10 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          {[
            { title: "Garantia de 90 Dias", desc: "Qualidade assegurada.", icon: <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /> },
            { title: "Delivery Seguro", desc: "Buscamos e entregamos.", icon: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /> },
            { title: "Orçamento Honesto", desc: "Você aprova antes.", icon: <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /> }
          ].map((feat, idx) => (
            <div key={idx} className="flex items-start gap-4 flex-1">
              <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shadow-sm"><Icon path={feat.icon} /></div>
              <div><h3 className="font-bold text-slate-800 text-lg">{feat.title}</h3><p className="text-slate-500 text-sm mt-1">{feat.desc}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROPOSTA DE VALOR (NOVO COMPONENTE) ================= */}
      <ValueProposition />

      {/* ESPECIALIDADES */}
      <SpecialtiesSection />

      {/* COMO FUNCIONA */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Seu aparelho novo em <span className="text-blue-600">4 passos</span></h2>
            <p className="text-slate-500 mt-4">Rápido, prático e confiável.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 border-t-2 border-dashed border-slate-200 z-0"></div>
            {[
              { title: "Contato", desc: "Você preenche o formulário abaixo ou chama no WhatsApp.", icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /> },
              { title: "Delivery", desc: "Buscamos o aparelho no seu endereço.", icon: <path d="M14 16l4-4-4-4M5 8v8a2 2 0 0 0 2 2h7" /> },
              { title: "Diagnóstico", desc: "Avaliamos e você aprova o orçamento.", icon: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /> },
              { title: "Entrega", desc: "Devolvemos seu aparelho 100% pronto.", icon: <path d="M20 6L9 17l-5-5" /> },
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white rounded-2xl shadow-lg border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Icon path={step.icon} className="w-8 h-8" />
                </div>
                <span className="absolute top-0 right-10 bg-slate-900 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-white">{idx + 1}</span>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed px-2">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section id="orcamento-form" className="py-20 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-2xl rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900">Inicie seu atendimento</h2>
            <p className="text-slate-500 mt-2">Preencha os dados e fale com um técnico agora mesmo.</p>
          </div>
          <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Seu Nome</label>
                <input type="text" name="nome" required placeholder="Ex: João Silva" value={formData.nome} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">Aparelho / Modelo</label>
                <input type="text" name="aparelho" required placeholder="Ex: iPhone 11, Notebook Dell..." value={formData.aparelho} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-700">O que está acontecendo?</label>
              <textarea name="problema" required placeholder="Ex: A tela quebrou, não carrega, precisa de limpeza..." rows="4" value={formData.problema} onChange={handleInputChange} className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition bg-white resize-none"></textarea>
            </div>
            <button type="submit" className="w-full py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-lg shadow-green-500/30 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 text-lg">
              <Icon path={<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />} />
              Solicitar Orçamento via WhatsApp
            </button>
            <p className="text-center text-xs text-slate-400">Ao clicar, você será redirecionado para o WhatsApp da SOLVPLACE.</p>
          </form>
        </div>
      </section>

      {/* FOOTER CALL */}
      <section className="py-20 px-4 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-500 opacity-20 blur-[100px]"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <img src={solvBLogo} alt="SOLVPLACE" className="h-10 md:h-14 w-auto object-contain" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Confiança que resolve.<br /><span className="text-blue-400">Qualidade que permanece.</span></h2>
          </div>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">Não deixe seu equipamento parado. Recupere a performance hoje mesmo.</p>
        </div>
      </section>

      {/* BOTÃO WHATSAPP FLUTUANTE */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 animate-fade-in-up">
        {/* Balão de Texto */}
        <div className="bg-white text-slate-800 px-4 py-2 rounded-xl shadow-lg border border-slate-100 animate-bounce-slow origin-right relative">
          <span className="font-bold text-sm">Consulte o técnico</span>
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-white border-b-8 border-b-transparent"></div>
        </div>

        {/* Botão Pulsante */}
        <div className="relative group">
          <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-75"></div>
          <div className="relative transition-transform duration-300 transform group-hover:scale-110">
            <WhatsAppButton />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Home;