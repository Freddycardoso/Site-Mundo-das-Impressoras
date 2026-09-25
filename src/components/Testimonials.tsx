import React from 'react';
import { ContainerScroll } from './ui/container-scroll-animation';
import { Star, MoreVertical, ThumbsUp } from 'lucide-react';

const reviews = [
  {
    name: "Jaqueline Costa Goulart",
    time: "5 meses atrás",
    rating: 5,
    text: "",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    photos: 1,
    reviewsCount: 2,
    localGuide: false,
    response: "Muito obrigado 🤩"
  },
  {
    name: "Sandro Dias Batista",
    time: "7 meses atrás",
    rating: 5,
    text: "Muito Bom. Fui bem atendido. Agora aguardando orçamento da impressora 🖨️",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop&crop=face",
    localGuide: true,
    reviewsCount: 397,
    photos: 9502,
    images: [
      "/reviews/photo1.jpg",
      "/reviews/photo3.jpg",
      "/reviews/photo2.jpg"
    ],
    response: "Muito obrigado\nAgradeço muito sua avaliação"
  },
  {
    name: "SANDRO Dias",
    time: "7 meses atrás",
    rating: 5,
    text: "Muito bem atendido.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    localGuide: true,
    reviewsCount: 133,
    photos: 2243,
    images: [
      "/reviews/photo1.jpg",
      "/reviews/photo2.jpg",
      "/reviews/photo3.jpg"
    ],
    response: "Muito obrigado"
  },
  {
    name: "Tales Teixeira",
    time: "2 anos atrás",
    rating: 5,
    text: "Excelente empresa, indico a todos.",
    avatar: "T",
    avatarBg: "#673AB7",
    reviewsCount: 7,
    localGuide: false,
    response: "Muito obrigado 🤩"
  }
];

export const Testimonials = () => {
  return (
    <section className="relative bg-slate-100 overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="mb-8 px-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight">
              A confiança de quem já <br />
              <span className="text-blue-600">migrou para nós</span>
            </h2>
            <p className="mt-4 text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
              Veja o que os nossos clientes dizem sobre o atendimento, qualidade e agilidade da Mundo das Impressoras.
            </p>
          </div>
        }
      >
        <div className="h-full w-full bg-[#202124] text-[#E8EAED] font-sans flex flex-col md:flex-row overflow-y-auto md:overflow-hidden overflow-x-hidden rounded-2xl">
          
          {/* Sidebar / Top Info */}
          <div className="w-full md:w-[360px] flex-shrink-0 p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#3C4043] flex flex-col bg-[#202124]">
            <h3 className="text-2xl font-medium text-white mb-1">Mundo das Impressoras</h3>
            <p className="text-[#9AA0A6] text-sm mb-6">Av. Comendador Francisco Avelino Maia, 1430 - Centro, Passos - MG, 37904-017, Brasil</p>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl font-normal text-white">4,8</span>
              <div className="flex flex-col gap-1">
                <div className="flex text-[#FBBC04]">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <span className="text-[#9AA0A6] text-sm">26 avaliações ⓘ</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-4 py-1.5 rounded-full bg-[#8AB4F8] text-[#202124] text-sm font-medium">Tudo</span>
              <span className="px-4 py-1.5 rounded-full border border-[#5F6368] text-[#E8EAED] text-sm hover:bg-[#3C4043] cursor-pointer transition-colors">printer cleaning <span className="text-[#9AA0A6] ml-1">2</span></span>
              <span className="px-4 py-1.5 rounded-full border border-[#5F6368] text-[#E8EAED] text-sm hover:bg-[#3C4043] cursor-pointer transition-colors">honesty <span className="text-[#9AA0A6] ml-1">3</span></span>
              <span className="px-4 py-1.5 rounded-full border border-[#5F6368] text-[#E8EAED] text-sm hover:bg-[#3C4043] cursor-pointer transition-colors">company <span className="text-[#9AA0A6] ml-1">2</span></span>
            </div>

            <div className="mt-auto hidden md:block">
              <button className="w-full py-2.5 rounded-full border border-[#5F6368] text-[#8AB4F8] font-medium hover:bg-[#3C4043] transition-colors">
                Avaliar
              </button>
            </div>
          </div>

          {/* Reviews List */}
          <div className="flex-1 overflow-visible md:overflow-y-auto p-0 md:p-4 bg-[#202124]" style={{ scrollbarWidth: 'thin', scrollbarColor: '#5F6368 transparent' }}>
            
            <div className="sticky top-0 bg-[#202124] z-10 px-6 py-4 md:px-4 border-b border-[#3C4043] flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-4">
               <div className="text-sm text-[#9AA0A6]">Ordenar por</div>
               <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 touch-pan-x" style={{ scrollbarWidth: 'none' }}>
                  <button className="px-4 py-1.5 rounded-full border border-[#5F6368] text-[#E8EAED] text-sm whitespace-nowrap hover:bg-[#3C4043] transition-colors">Mais relevantes</button>
                  <button className="px-4 py-1.5 rounded-full bg-[#8AB4F8] text-[#202124] text-sm font-medium whitespace-nowrap">Mais recentes</button>
                  <button className="px-4 py-1.5 rounded-full border border-[#5F6368] text-[#E8EAED] text-sm whitespace-nowrap hover:bg-[#3C4043] transition-colors">Maior classificação</button>
               </div>
            </div>

            <div className="flex flex-col gap-6 px-6 md:px-4 pb-10">
              {reviews.map((review, idx) => (
                <div key={idx} className="pb-6 border-b border-[#3C4043] last:border-0">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex gap-3">
                      {review.avatar.length === 1 ? (
                        <div 
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-lg font-medium"
                          style={{ backgroundColor: review.avatarBg || '#12B5CB' }}
                        >
                          {review.avatar}
                        </div>
                      ) : (
                        <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
                      )}
                      
                      <div className="flex flex-col">
                        <span className="text-[#E8EAED] font-medium leading-tight">{review.name}</span>
                        <div className="text-[#9AA0A6] text-xs mt-1 flex flex-wrap items-center gap-1">
                          {review.localGuide && <span className="text-[#FBBC04] flex items-center gap-1"><Star className="w-3 h-3 fill-current" /> Local Guide ·</span>}
                          {review.reviewsCount && <span>{review.reviewsCount} avaliações</span>}
                          {review.photos && <span>· {review.photos} fotos</span>}
                        </div>
                      </div>
                    </div>
                    <button className="text-[#9AA0A6] hover:text-white p-1 rounded-full hover:bg-[#3C4043] transition-colors"><MoreVertical className="w-5 h-5" /></button>
                  </div>

                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex text-[#FBBC04]">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                    </div>
                    <span className="text-[#9AA0A6] text-sm">{review.time}</span>
                  </div>

                  {review.text && (
                    <p className="text-[#E8EAED] text-sm md:text-base leading-relaxed mb-3">
                      {review.text}
                    </p>
                  )}

                  {review.images && (
                    <div className="flex gap-2 overflow-x-auto pb-2 mb-2 touch-pan-x" style={{ scrollbarWidth: 'none' }}>
                      {review.images.map((img, i) => (
                        <img key={i} src={img} alt="Foto da avaliação" className="h-24 w-auto rounded-lg object-cover border border-[#3C4043]" />
                      ))}
                    </div>
                  )}

                  {review.response && (
                    <div className="mt-4 bg-[#303134] rounded-xl p-4 border border-[#3C4043]">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-[#8AB4F8] flex items-center justify-center">
                          <span className="text-[#202124] text-xs font-bold">M</span>
                        </div>
                        <span className="text-[#E8EAED] text-sm font-medium">Mundo das Impressoras (proprietário)</span>
                        <span className="text-[#9AA0A6] text-xs ml-auto">4 meses atrás</span>
                      </div>
                      <p className="text-[#E8EAED] text-sm pl-8 whitespace-pre-wrap">{review.response}</p>
                    </div>
                  )}

                  <div className="flex items-center gap-4 mt-4 text-[#9AA0A6]">
                    <button className="flex items-center gap-2 text-sm hover:bg-[#3C4043] px-3 py-1.5 rounded-full transition-colors border border-transparent hover:border-[#5F6368]">
                      <ThumbsUp className="w-4 h-4" />
                      Útil
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContainerScroll>
    </section>
  );
};
