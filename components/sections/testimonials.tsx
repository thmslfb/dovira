'use client'

import { ScrollAnimated } from '@/components/animations'
import { Laugh, Quote, Star } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Card, CardContent, CardHeader } from '../ui/card'
import { SectionTitle } from '../ui/section-title'

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative py-12 md:py-24 overflow-hidden scroll-mt-12"
    >
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-t from-transparent to-[#0a0a0a] pointer-events-none z-20" />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-96 h-96 rounded-full bg-[rgb(180,120,255)]/8 blur-3xl animate-pulse"
          style={{ animationDelay: '0s', animationDuration: '8s' }}
        />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-[rgb(160,100,255)]/6 blur-3xl animate-pulse"
          style={{ animationDelay: '3s', animationDuration: '10s' }}
        />
        <div
          className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[rgb(200,140,255)]/6 blur-3xl animate-pulse"
          style={{ animationDelay: '5s', animationDuration: '7s' }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl flex flex-col gap-12 px-9 lg:px-13 z-10">
        <ScrollAnimated delay={0.1}>
          <SectionTitle level="h2">Ce que disent mes clients</SectionTitle>
        </ScrollAnimated>

        <ScrollAnimated delay={0.2}>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
            <Card className="grid grid-rows-[auto_1fr] gap-6 sm:col-span-2 lg:row-span-2 relative bg-[#0f0f0f]/90 backdrop-blur-sm border-[rgb(229,208,255)]/30 hover:shadow-[rgb(229,208,255)]/20 transition-all duration-500 group overflow-hidden p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,120,255)]/8 via-[#0f0f0f]/50 to-[rgb(160,100,255)]/12 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgb(229,208,255)]/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <CardHeader className="relative z-10 p-0">
                <div className="p-2.5 rounded-full bg-[rgb(180,120,255)]/30 shadow-lg w-fit">
                  <Quote className="size-5 fill-[rgb(180,120,255)] text-[rgb(180,120,255)]" />
                </div>
              </CardHeader>
              <CardContent className="relative z-10 p-0">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p className="text-lg font-medium text-[#BCBCBC] group-hover:text-white transition-colors duration-300">
                    Travailler avec Dovira a transformé notre communication
                    vidéo. Il livre toujours des montages percutants dans des
                    délais record.
                  </p>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <Avatar className="size-12 ring-2 ring-[rgb(229,208,255)]/40 ring-offset-2 ring-offset-[#0f0f0f]">
                      <AvatarImage
                        src="https://yt3.googleusercontent.com/hTNJ4FrWeYuwhhz96V068Z4Nm82brusKZ45P0zfGuHrrAoubXgX3HuSZLHSo9T-x3Yp2xApWJg=s160-c-k-c0x00ffffff-no-rj"
                        alt="Harry JMG"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>{"Harry JMG".split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>

                    <div>
                      <p className="text-sm font-medium text-white">
                        Harry JMG
                      </p>
                      <span className="text-[#BCBCBC] block text-sm">
                        YouTuber
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 relative bg-[#0f0f0f]/85 backdrop-blur-sm border-[rgb(229,208,255)]/25 hover:shadow-[rgb(229,208,255)]/15 transition-all duration-400 group overflow-hidden p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,120,255)]/6 via-[#0f0f0f]/40 to-[rgb(160,100,255)]/8 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-[rgb(229,208,255)]/3 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              <CardContent className="h-full p-0 relative z-10">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <div className="space-y-4">
                    <div className="p-2 rounded-full bg-[rgb(180,120,255)]/25 shadow-md w-fit">
                      <Quote className="size-4 fill-[rgb(180,120,255)] text-[rgb(180,120,255)]" />
                    </div>
                    <p className="text-base font-medium text-[#BCBCBC] group-hover:text-white transition-colors duration-300">
                      Un monteur réactif et créatif. Chaque vidéo est
                      parfaitement adaptée à nos objectifs marketing.
                    </p>
                  </div>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <Avatar className="size-11 ring-2 ring-[rgb(229,208,255)]/35 ring-offset-2 ring-offset-[#0f0f0f]">
                      <AvatarImage
                        src="https://yt3.googleusercontent.com/BoH48ZFsxLUxST5tZQ_dM4eiqn6p56ANAuSQuZVMOQYToqx497l1DyM9qPyUtrbl2yuddPbWWQ=s160-c-k-c0x00ffffff-no-rj"
                        alt="Yann Darwin"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>{"Yann Darwin".split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-white">
                        Yann Darwin
                      </p>
                      <span className="text-[#BCBCBC] block text-sm">
                        YouTuber
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>

            <Card className="relative bg-[#0f0f0f]/80 backdrop-blur-sm border-[rgb(229,208,255)]/20 hover:shadow-[rgb(229,208,255)]/12 transition-all duration-350 group overflow-hidden p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,120,255)]/4 via-[#0f0f0f]/30 to-[rgb(160,100,255)]/6 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-[rgb(229,208,255)]/2 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-350" />

              <CardContent className="h-full p-0 relative z-10">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <div className="space-y-3">
                    <div className="p-1.5 rounded-full bg-[rgb(180,120,255)]/20 shadow-sm w-fit">
                      <Quote className="size-3 fill-[rgb(180,120,255)] text-[rgb(180,120,255)]" />
                    </div>
                    <p className="text-sm text-[#BCBCBC] group-hover:text-white transition-colors duration-300">
                      Dovira a sublimé mes vidéos en un temps record. Je
                      recommande !
                    </p>
                  </div>

                  <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                    <Avatar className="size-10 ring-2 ring-[rgb(229,208,255)]/30 ring-offset-2 ring-offset-[#0f0f0f]">
                      <AvatarImage
                        src="https://yt3.googleusercontent.com/S0quWyDjk8dNQ5KU3CvzFP4Bz3qrz35RMZ4m_TGc-S5redn5-6v662wlO_MRkLjIqmXxyXxFUng=s160-c-k-c0x00ffffff-no-rj"
                        alt="Arthur Mosa"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>{"Arthur Mosa".split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-white">
                        Arthur Mosa
                      </p>
                      <span className="text-[#BCBCBC] block text-sm">
                        YouTuber
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>

            <Card className="card variant-mixed relative bg-[#0f0f0f]/80 backdrop-blur-sm border-[rgb(229,208,255)]/20 hover:shadow-[rgb(229,208,255)]/12 transition-all duration-350 group overflow-hidden p-6">
              <div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,120,255)]/4 via-[#0f0f0f]/30 to-[rgb(160,100,255)]/6 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgb(229,208,255)]/2 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-350" />

              <CardContent className="h-full p-0 relative z-10">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <div className="space-y-3">
                    <div className="p-1.5 rounded-full bg-[rgb(180,120,255)]/20 shadow-sm w-fit">
                      <Quote className="size-3 fill-[rgb(180,120,255)] text-[rgb(180,120,255)]" />
                    </div>
                    <p className="text-sm text-[#BCBCBC] group-hover:text-white transition-colors duration-300">
                      Un service pro, rapide et toujours à l&apos;écoute. Merci
                      !
                    </p>
                  </div>

                  <div className="grid grid-cols-[auto_1fr] gap-3">
                    <Avatar className="size-10 ring-2 ring-[rgb(229,208,255)]/30 ring-offset-2 ring-offset-[#0f0f0f]">
                      <AvatarImage
                        src="https://yt3.googleusercontent.com/tZWUtk7dwsEydZDtOXnk2cxEpZPldvouzlhzTGfDbopC1JsydkCub1WxnRuxrrDqK143cLR2hg=s160-c-k-c0x00ffffff-no-rj"
                        alt="Carolin Arthaud"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>{"Carolin Arthaud".split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-white">
                        Carolin Arthaud
                      </p>
                      <span className="text-[#BCBCBC] block text-sm">
                        Immobilier
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </ScrollAnimated>

        <ScrollAnimated delay={0.2}>
          <div className="flex flex-row gap-0 md:gap-5 items-center">
            <p className="text-sm font-thin text-[#BCBCBC]">
              Plus de 100 clients satisfaits
            </p>
            <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
              <div className="p-3 rounded-full bg-[rgb(180,120,255)]/20">
                <Laugh className="size-5 text-[rgb(180,120,255)]" />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-sm font-medium text-white flex items-center flex-row gap-1">
                  <Star className="size-3 text-[rgb(180,120,255)] fill-[rgb(180,120,255)]" />
                  <Star className="size-3 text-[rgb(180,120,255)] fill-[rgb(180,120,255)]" />
                  <Star className="size-3 text-[rgb(180,120,255)] fill-[rgb(180,120,255)]" />
                  <Star className="size-3 text-[rgb(180,120,255)] fill-[rgb(180,120,255)]" />
                  <Star className="size-3 text-[rgb(180,120,255)] fill-[rgb(180,120,255)]" />
                  <span className="text-sm text-[#878787] ml-1 ">4.9</span>
                </p>
                <span className="text-[#BCBCBC] block font-thin text-sm">
                  Basée sur plus de 100 avis
                </span>
              </div>
            </div>
          </div>
        </ScrollAnimated>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0a0a0a] pointer-events-none z-20" />
    </section>
  )
}
