import { Clock, Check, Zap, MessageCircle, Star, ArrowRight, Heart, Users, Bell, ChevronDown, FileText, Lock, Mail, X, Sparkles, Camera } from 'lucide-react';
import { useState } from 'react';
export default function Home() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };
  const whatsappLink = "https://wa.me/5511913248919?text=Quero%20come%C3%A7ar%20no%20T%C3%A1%20na%20Hora";
  return <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center shadow-md">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900" style={{
              fontFamily: 'Outfit, sans-serif'
            }}>
                Tá na Hora!
              </span>
            </div>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="px-6 py-2.5 bg-emerald-500 text-white rounded-full font-medium shadow-md hover:bg-emerald-600 hover:shadow-lg transition-all duration-300 flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Começar no WhatsApp</span>
              <span className="sm:hidden">Começar</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-6">
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span className="text-sm font-medium text-emerald-700">Lembretes direto no WhatsApp</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight" style={{
              fontFamily: 'Outfit, sans-serif'
            }}>
                Lembretes de remédio pelo WhatsApp para você nunca mais perder a hora
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Tá na Hora! envia avisos no WhatsApp para o paciente ou responsável, registra se a dose foi tomada e ajuda a manter o tratamento em dia.
              </p>
              
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-emerald-500 text-white rounded-2xl font-semibold text-lg shadow-xl hover:bg-emerald-600 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Começar no WhatsApp
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Grátis para começar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-emerald-600" />
                  <span>Sem instalar app</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-6 shadow-2xl max-w-sm mx-auto">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div className="bg-emerald-500 text-white px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Tá na Hora!</div>
                      <div className="text-xs text-emerald-100">online</div>
                    </div>
                  </div>
                  <div className="p-4 space-y-3 bg-gray-50 min-h-[400px]">
                    <div className="flex justify-start">
                      <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%]">
                        <p className="text-sm text-gray-700">
                          Olá! 👋 Está na hora do seu remédio <strong>Losartana 50mg</strong>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">09:00</p>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-emerald-500 rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm max-w-[85%]">
                        <p className="text-sm text-white">Tomei ✓</p>
                        <p className="text-xs text-emerald-100 mt-1">09:02</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%]">
                        <p className="text-sm text-gray-700">
                          Ótimo! Dose registrada com sucesso 🎉
                        </p>
                        <p className="text-xs text-gray-500 mt-1">09:02</p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%]">
                        <p className="text-sm text-gray-700">
                          Próximo lembrete: <strong>21:00</strong>
                        </p>
                        <p className="text-xs text-gray-500 mt-1">09:02</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Feature Highlight */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-900 via-indigo-900 to-emerald-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/20">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-white">Exclusivo Premium</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Envie a foto da receita e a IA cria os lembretes
              </h2>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Nossa inteligência artificial lê receitas médicas em PDF ou foto e configura todos os lembretes automaticamente. Sem digitação, sem erro.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-white">Reconhece nome do medicamento</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-white">Identifica dosagem e frequência</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-white">Cria lembretes nos horários certos</span>
                </li>
              </ul>
              
              <a href="https://wa.me/5511913248919?text=Ol%C3%A1%2C%20gostaria%20de%20assinar%20o%20premium." target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-900 rounded-2xl font-semibold text-lg shadow-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                Quero usar a IA
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 max-w-sm mx-auto">
                <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
                  <div className="bg-emerald-500 text-white px-4 py-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-semibold">Tá na Hora!</div>
                      <div className="text-xs text-emerald-100">digitando...</div>
                    </div>
                  </div>
                  <div className="p-4 space-y-3 bg-gray-50">
                    <div className="flex justify-end">
                      <div className="bg-emerald-500 rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm max-w-[85%]">
                        <div className="flex items-center gap-2 text-white text-sm mb-2">
                          <Camera className="w-4 h-4" />
                          <span>Foto da receita</span>
                        </div>
                        <div className="bg-emerald-600/50 rounded-lg p-3 text-xs text-emerald-100">
                          📄 receita_dra_maria.jpg
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%]">
                        <div className="flex items-center gap-2 text-purple-600 mb-2">
                          <Sparkles className="w-4 h-4" />
                          <span className="text-sm font-medium">IA lendo receita...</span>
                        </div>
                        <p className="text-sm text-gray-700">
                          Encontrei <strong>3 medicamentos</strong>! Vou criar os lembretes:
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%]">
                        <div className="space-y-2 text-sm text-gray-700">
                          <p>✅ <strong>Losartana 50mg</strong> - 8h e 20h</p>
                          <p>✅ <strong>Metformina 850mg</strong> - 7h, 13h e 19h</p>
                          <p>✅ <strong>AAS 100mg</strong> - 12h</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-gradient-to-r from-purple-100 to-emerald-100 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[85%] border border-purple-200">
                        <p className="text-sm text-gray-700">
                          🎉 <strong>Pronto!</strong> Todos os lembretes configurados automaticamente.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{
            fontFamily: 'Outfit, sans-serif'
          }}>Por que usar Tá na Hora?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cuidar da saúde com tecnologia simples e carinho
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 border border-emerald-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{
              fontFamily: 'Outfit, sans-serif'
            }}>
                Nunca mais esqueça o remédio
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Receba lembretes automáticos no horário certo, todos os dias, sem falhas.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{
              fontFamily: 'Outfit, sans-serif'
            }}>
                Para você ou para quem cuida
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Envie lembretes para o paciente ou para o responsável. Você escolhe.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8 border border-purple-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{
              fontFamily: 'Outfit, sans-serif'
            }}>
                Tudo no WhatsApp
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sem aplicativos complicados. Use o app que você já conhece.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-orange-500 flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{
              fontFamily: 'Outfit, sans-serif'
            }}>
                Histórico de doses tomadas
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Acompanhe se as doses foram tomadas e mantenha tudo organizado.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 border border-pink-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-pink-500 flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{
              fontFamily: 'Outfit, sans-serif'
            }}>
                Perfeito para idosos e crianças
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Ajuda na rotina de quem mais precisa de cuidado e atenção.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 border border-teal-100 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-teal-500 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3" style={{
              fontFamily: 'Outfit, sans-serif'
            }}>
                Inteligência artificial
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nossa IA entende suas respostas e registra tudo automaticamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{
            fontFamily: 'Outfit, sans-serif'
          }}>
              Como funciona?
            </h2>
            <p className="text-xl text-gray-600">
              Simples, rápido e sem complicação
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold text-xl mb-4" style={{
              fontFamily: 'Outfit, sans-serif'
            }}>
                1
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{
              fontFamily: 'Outfit, sans-serif'
            }}>
                Inicie a conversa
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Clique no botão e comece a conversar com Tá na Hora! no WhatsApp.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-xl mb-4" style={{
              fontFamily: 'Outfit, sans-serif'
            }}>
                2
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{
              fontFamily: 'Outfit, sans-serif'
            }}>
                Configure seus remédios
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Informe os medicamentos, horários e quem vai receber os lembretes.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-xl mb-4" style={{
              fontFamily: 'Outfit, sans-serif'
            }}>
                3
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{
              fontFamily: 'Outfit, sans-serif'
            }}>
                Receba os lembretes
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Tá na Hora! envia mensagens nos horários certos perguntando se tomou.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-xl mb-4" style={{
              fontFamily: 'Outfit, sans-serif'
            }}>
                4
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2" style={{
              fontFamily: 'Outfit, sans-serif'
            }}>
                Responda e pronto
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Diga "tomei" ou "esqueci" e nós registramos tudo automaticamente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{
            fontFamily: 'Outfit, sans-serif'
          }}>
              Planos simples e transparentes
            </h2>
            <p className="text-xl text-gray-600">
              Comece grátis e evolua quando precisar
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-gray-200">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{
                fontFamily: 'Outfit, sans-serif'
              }}>
                  Plano Grátis
                </h3>
                <p className="text-gray-600">Perfeito para começar</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900" style={{
                  fontFamily: 'Outfit, sans-serif'
                }}>R$ 0</span>
                  <span className="text-gray-600">/mês</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">Para sempre</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">1 lembrete de medicamento ativo</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Consulta do próximo horário</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Lembretes para cuidadores</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Histórico de medicamentos</span>
                </li>
                <li className="flex items-start gap-3">
                  <X className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-400">Leitura de receita por IA</span>
                </li>
              </ul>
              
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-3 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors">
                Começar no WhatsApp
              </a>
            </div>
            
            {/* Premium Plan */}
            <div className="relative bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-yellow-400 text-yellow-900 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                <Star className="w-4 h-4 fill-current" />
                Mais popular
              </div>
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2" style={{
                fontFamily: 'Outfit, sans-serif'
              }}>
                  Plano Premium
                </h3>
                <p className="text-emerald-50">Para cuidado completo</p>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-white" style={{
                  fontFamily: 'Outfit, sans-serif'
                }}>R$ 9,99</span>
                  <span className="text-emerald-50">/mês</span>
                </div>
                <p className="text-sm text-emerald-100 mt-2">Cancele quando quiser</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white font-medium">Lembretes ilimitados</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white font-medium">Lembretes para várias pessoas (cuidadores)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white font-medium">Histórico de medicamentos por pessoa</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                  <span className="text-white font-medium">Leitura de receita em PDF ou imagem com IA</span>
                </li>
              </ul>
              
              <a href="https://wa.me/5511913248919?text=Ol%C3%A1%2C%20gostaria%20de%20assinar%20o%20premium." target="_blank" rel="noopener noreferrer" className="block w-full text-center px-6 py-3 bg-white text-emerald-600 rounded-xl font-semibold hover:bg-emerald-50 transition-colors shadow-lg">
                Assinar Premium
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{
            fontFamily: 'Outfit, sans-serif'
          }}>
              Perguntas frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Tire suas dúvidas sobre Tá na Hora!
            </p>
          </div>
          
          <div className="space-y-4">
            {[{
            question: "Preciso instalar algum aplicativo?",
            answer: "Não! Tudo acontece no WhatsApp que você já usa. Basta iniciar a conversa com Tá na Hora! e pronto."
          }, {
            question: "Posso cadastrar um familiar para receber os lembretes?",
            answer: "Sim! Você pode configurar para enviar os lembretes para o paciente, para o responsável ou para ambos. É super flexível."
          }, {
            question: "O plano grátis tem limite de tempo?",
            answer: "Não! O plano grátis é para sempre. Você pode usar 1 medicamento com lembretes ilimitados pelo tempo que precisar, sem pagar nada."
          }, {
            question: "Posso cancelar quando quiser?",
            answer: "Claro! Não há fidelidade. Se estiver no plano Premium, pode cancelar a qualquer momento direto pelo WhatsApp."
          }, {
            question: "E se eu trocar de celular ou número?",
            answer: "Basta iniciar a conversa novamente com Tá na Hora! pelo novo número. Você poderá reconfigurar seus medicamentos facilmente."
          }, {
            question: "Como a IA registra se tomei o remédio?",
            answer: "Quando você recebe o lembrete, basta responder com algo como \"tomei\", \"ok\" ou \"esqueci\". Nossa IA entende a resposta e registra automaticamente."
          }, {
            question: "Posso adicionar mais de um medicamento no plano grátis?",
            answer: "O plano grátis permite 1 medicamento. Para cadastrar vários medicamentos, você precisa do plano Premium por R$ 9,99/mês."
          }].map((faq, index) => <div key={index} className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                <button onClick={() => toggleFaq(index)} className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 transition-colors">
                  <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-600 transition-transform flex-shrink-0 ${openFaqIndex === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaqIndex === index && <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>}
              </div>)}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-500 to-emerald-600">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{
          fontFamily: 'Outfit, sans-serif'
        }}>
            Pronto para nunca mais esquecer seus medicamentos?
          </h2>
          <p className="text-xl text-emerald-50 mb-8">
            Comece agora mesmo. É grátis e leva menos de 2 minutos.
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-600 rounded-2xl font-bold text-lg shadow-2xl hover:bg-emerald-50 transition-all duration-300 hover:scale-105">
            Começar no WhatsApp
            <MessageCircle className="w-6 h-6" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white" style={{
                fontFamily: 'Outfit, sans-serif'
              }}>
                  Tá na Hora!
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Lembretes de medicamentos pelo WhatsApp para você nunca mais perder a hora.
              </p>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Links importantes</h3>
              <ul className="space-y-2">
                <li>
                  <a href="https://019bf5d0-471c-7456-b099-1b17391af2e0.mochausercontent.com/TermosDeUso.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Termos de Uso
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Política de Privacidade
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Aviso importante</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tá na Hora! não substitui orientação médica. Em caso de dúvidas sobre seu tratamento, consulte um profissional de saúde.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 Tá na Hora! Todos os direitos reservados.</p>
            <p className="mt-2">Feito com ❤️ para cuidar de quem você ama</p>
          </div>
        </div>
      </footer>
    </div>;
}