"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function LandingPage() {
  const [activeUsers, setActiveUsers] = useState(12847)

  useEffect(() => {
    const userTimer = setInterval(() => {
      setActiveUsers((prev) => prev + Math.floor(Math.random() * 5))
    }, 4000)

    return () => clearInterval(userTimer)
  }, [])

  const handleCTA = () => {
    console.log("[v0] CTA clicked - redirecting to offer")
    // window.location.href = 'YOUR_OFFER_URL'
  }

  return (
    <div className="min-h-screen bg-background relative">
      <header className="bg-card border-b border-border relative z-[1000]">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center">
          <a href="#" className="absolute left-1/2 -translate-x-1/2">
            <Image
              src="/logo.webp"
              alt="WinWin Logo"
              width={180}
              height={80}
              className="h-auto w-auto md:w-[220px]"
              priority
            />
          </a>

          <a href="#" className="ml-auto relative overflow-visible group z-10">
            <Button
              size="sm"
              className="relative animate-jackpot-glow text-white font-black text-[8px] md:text-xs px-1 md:px-2 py-0.5 md:py-1 border border-yellow-300/50 hover:scale-105 transition-transform duration-200 overflow-visible"
            >
              <span
                className="absolute -top-1 left-1/4 text-yellow-300 text-[6px] md:text-[8px] animate-star-erupt"
                style={{ animationDelay: "0s" }}
              >
                ✦
              </span>
              <span
                className="absolute -top-1 left-1/2 text-yellow-400 text-[6px] md:text-[8px] animate-star-erupt"
                style={{ animationDelay: "0.3s" }}
              >
                ★
              </span>
              <span
                className="absolute -top-1 left-3/4 text-yellow-300 text-[5px] md:text-[7px] animate-star-erupt"
                style={{ animationDelay: "0.6s" }}
              >
                ✦
              </span>

              <span className="relative z-10 flex items-center gap-0.5 md:gap-1">
                <svg className="w-2 h-2 md:w-3 md:h-3 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="animate-text-shimmer font-black tracking-wide text-[8px] md:text-xs drop-shadow-[0_0_3px_rgba(255,255,255,0.9)]">
                  JOIN!
                </span>
                <svg className="w-2 h-2 md:w-3 md:h-3 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </span>

              <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></span>
            </Button>
          </a>
        </div>
      </header>

      <div className="max-w-7xl mx-auto relative z-[1000]">
        <div className="flex items-center bg-card border-b border-border py-2 px-3 overflow-hidden">
          <div className="flex-shrink-0 bg-primary rounded px-2 py-1 mr-2">
            <svg
              className="w-4 h-4 text-primary-foreground"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z" />
            </svg>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap">
              <span className="text-foreground text-sm font-medium">
                Selamat Datang Di Situs WinWin! Situs Paling Gacor Di Indonesia! 🎰
              </span>
              <span className="text-foreground text-sm font-medium ml-20">
                Selamat Datang Di Situs WinWin! Situs Paling Gacor Di Indonesia! 🎰
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="w-full relative z-[1000] py-0.5 animate-rgb-bar">
        <div className="max-w-4xl mx-auto px-4 flex items-center justify-center">
          <Image
            src="/images/winwinbet-review-logo.webp"
            alt="WinWin"
            width={40}
            height={13}
            className="h-auto w-auto"
            priority
          />
        </div>
      </section>
      {/* </CHANGE> */}

      <section className="w-full bg-card relative z-[1000]">
        <div className="w-full md:max-w-4xl md:mx-auto">
          <a href="#" onClick={handleCTA} className="block w-full cursor-pointer hover:opacity-95 transition-opacity">
            <div className="w-full relative min-h-[280px] sm:min-h-[320px] md:min-h-0 overflow-hidden">
              <Image
                src="/banner.gif"
                alt="WinWin Casino Promotion"
                width={480}
                height={320}
                className="w-full h-full object-cover md:h-auto md:object-contain -mt-[13%]"
                priority
                unoptimized
              />
            </div>
          </a>
        </div>
      </section>

      <div className="p-3 sm:p-4 md:p-6 max-w-4xl mx-auto relative z-[1000]">
        <div className="relative">
          <Button
            onClick={handleCTA}
            size="lg"
            className="w-full h-16 sm:h-20 md:h-24 animate-money-glow hover:opacity-95 text-white font-black text-xl sm:text-3xl md:text-4xl shadow-2xl transition-opacity duration-200 border-2 sm:border-4 border-yellow-200/60 tracking-widest relative overflow-visible"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
              <svg
                className="w-6 h-6 sm:w-9 sm:h-9 md:w-12 md:h-12 animate-pulse"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
              </svg>
              <span className="animate-text-gold-shimmer font-black tracking-widest drop-shadow-[0_2px_8px_rgba(255,255,255,1)] sm:drop-shadow-[0_3px_12px_rgba(255,255,255,1)] text-shadow-lg">
                DAFTAR SEKARANG!
              </span>
              <svg
                className="w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 animate-pulse"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </span>

            <span className="absolute inset-0 rounded-lg bg-gradient-radial from-white/30 via-transparent to-transparent animate-pulse"></span>
          </Button>

          <div className="text-center mt-2 sm:mt-3">
            <p className="text-yellow-400 text-xs sm:text-sm md:text-base font-bold animate-pulse flex items-center justify-center gap-1 sm:gap-2">
              <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-ping"></span>
              <span className="text-yellow-300">🔥 BONUS BESAR MENANTI! DAFTAR SEKARANG! 🔥</span>
              <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-ping"></span>
            </p>
          </div>
        </div>
      </div>

      <section className="py-8 px-4 bg-card relative z-[1000]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-foreground inline-flex items-center gap-2">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-primary animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M12.395 2.553a11.954 11.954 0 0010 0v2a2 2 0 01-4 0v2.197a2 2 0 01-4 0v-2a2 2 0 01-4 0 2 2 0 00-4 0z"
                  clipRule="evenodd"
                />
              </svg>
              HOT! <span className="text-primary">| REKOMENDASI</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-2"></div>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-6 max-w-md md:max-w-3xl mx-auto">
            {[
              {
                img: "https://hbmkw.b-cdn.net/GAME/vs20olympgatesmall.webp",
                alt: "Gates of Olympus",
                colors: ["#ff00ff", "#00ffff", "#00ff00", "#ffcc00"],
              },
              {
                img: "https://hbmkw.b-cdn.net/GAME/mahjong-ways2.jpg",
                alt: "Mahjong Ways 2",
                colors: ["#00ff00", "#ffcc00", "#ff00ff", "#00ffff"],
              },
              {
                img: "https://hbmkw.b-cdn.net/GAME/scatter-hitam.webp",
                alt: "Scatter Hitam",
                colors: ["#ff00ff", "#ffcc00", "#00ff00", "#00ffff"],
              },
            ].map((game, idx) => (
              <div key={idx} className="relative group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg border-2 border-border hover:border-primary transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-neon-pulse"></div>
                  <Image
                    src={game.img || "/placeholder.svg"}
                    alt={game.alt}
                    width={200}
                    height={200}
                    className="w-full h-auto rounded-lg"
                    unoptimized
                  />
                  <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Hot
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                    <div className="text-center">
                      <svg
                        className="w-8 h-8 text-white mx-auto mb-1 animate-bounce"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <svg
                        className="w-6 h-6 text-yellow-400 mx-auto animate-pulse"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-card border-t border-border py-6 mt-8 relative z-[1000]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Situs Terpercaya & Aman</span>
            </div>
            <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Lisensi Resmi
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 010-2z"
                    clipRule="evenodd"
                  />
                </svg>
                SSL Encrypted
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267zM10 15V5a1 1 0 011 1v.092a4.535 4.535 0 011.676.662C13.398 7.235 14 8.009 14 9c0 .99-.602 1.765-1.324 2.246A4.535 4.535 0 0111 11.908V13a1 1 0 01-2 0v-.092a4.535 4.535 0 01-1.676-.662C6.602 11.766 6 10.991 6 10c0-.99.602-1.765 1.324-2.246A4.535 4.535 0 019 7.092V6a1 1 0 011-1z" />
                </svg>
                Proses Cepat
              </span>
            </div>
            <div className="text-xs text-muted-foreground pt-2 border-t border-border max-w-md mx-auto">
              <p className="font-semibold text-foreground mb-1">© 2025 WinWin. All Rights Reserved.</p>
              <p className="leading-relaxed">
                WinWin adalah situs gaming online terpercaya di Indonesia dengan lisensi resmi dan sistem keamanan
                terbaik. Bermain dengan aman dan bertanggung jawab.
              </p>
            </div>
            <div className="flex items-center justify-center gap-3 pt-2">
              <span className="text-xs text-muted-foreground">18+</span>
              <span className="text-xs text-muted-foreground">|</span>
              <span className="text-xs text-muted-foreground">Responsible Gaming</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
