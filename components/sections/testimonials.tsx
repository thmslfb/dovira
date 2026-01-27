'use client'

import { ScrollAnimated } from '@/components/animations'
import { Laugh, Quote, Star } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Card, CardContent } from '../ui/card'
import { SectionTitle } from '../ui/section-title'

// Données des témoignages
const testimonials = [
	{
		id: 1,
		name: 'Jordan Girbon',
		role: 'YouTuber',
		avatar:
			'https://yt3.googleusercontent.com/8ODhz1R1OR5zACZ0b8Dg2z2eaQHEaEXp6sAQtwjgFdDw89cVtNUeK8gcyrv-n4ErUWYN8ILs=s160-c-k-c0x00ffffff-no-rj',
		content:
			"Travailler avec Dovira a transformé ma communication vidéo. Il livre toujours des montages percutants dans des délais record. Un vrai professionnel !",
		rating: 5,
		featured: true,
	},
	{
		id: 2,
		name: 'Tomy',
		role: 'YouTuber',
		avatar:
			'https://yt3.googleusercontent.com/4rSXoW6AUEPvWHwyGLNJEO41mweWRdQ4KqFHwbBAYOwIBZJQZkimg558wcz3A2wt8g6xUq9B=s160-c-k-c0x00ffffff-no-rj',
		content:
			"Un monteur réactif et créatif. Chaque vidéo est parfaitement adaptée à mes objectifs marketing. Je recommande les yeux fermés !",
		rating: 5,
	},
	{
		id: 3,
		name: "D'Angelo",
		role: 'YouTuber',
		avatar: '/images/angelo.jpg',
		content:
			'Dovira a sublimé mes vidéos en un temps record. La qualité est toujours au rendez-vous. Je recommande !',
		rating: 5,
	},
	{
		id: 4,
		name: 'Sarah Martinez',
		role: 'Coach en développement personnel',
		avatar: null,
		content:
			'Grâce à Dovira, mes formations en ligne ont un rendu professionnel. Mes clients adorent la qualité des montages.',
		rating: 5,
	},
	{
		id: 5,
		name: 'Alexandre Tech',
		role: 'Entrepreneur Tech Review',
		avatar: null,
		content:
			'Des montages de qualité studio à des prix accessibles. Dovira comprend parfaitement mes besoins techniques.',
		rating: 5,
	},
	{
		id: 6,
		name: 'Marie Claire',
		role: 'Influenceuse Lifestyle',
		avatar: null,
		content:
			'Montages créatifs et soignés qui collent parfaitement à mon univers. Un travail d\'artiste !',
		rating: 5,
	},
]

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
					{/* Mobile & Tablette: Carousel horizontal */}
					<div className="lg:hidden">
						{/* Featured */}
						{testimonials
							.filter((t) => t.featured)
							.map((testimonial) => (
								<Card
									key={testimonial.id}
									className="mb-6 relative bg-[#0f0f0f]/90 backdrop-blur-sm border-[rgb(229,208,255)]/30 hover:shadow-[rgb(229,208,255)]/20 transition-all duration-500 group overflow-hidden p-6"
								>
									<div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,120,255)]/8 via-[#0f0f0f]/50 to-[rgb(160,100,255)]/12 pointer-events-none" />
									<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgb(229,208,255)]/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

									<CardContent className="h-full p-0 relative z-10">
										<div className="flex flex-col h-full justify-between gap-6">
											<div className="space-y-4">
												<div className="p-2.5 rounded-full bg-[rgb(180,120,255)]/30 shadow-lg w-fit">
													<Quote className="size-5 fill-[rgb(180,120,255)] text-[rgb(180,120,255)]" />
												</div>
												<p className="text-lg font-medium text-[#BCBCBC] group-hover:text-white transition-colors duration-300 leading-relaxed">
													{testimonial.content}
												</p>
												<div className="flex items-center gap-1">
													{[...Array(testimonial.rating)].map((_, i) => (
														<Star
															key={i}
															className="size-4 text-[rgb(180,120,255)] fill-[rgb(180,120,255)]"
														/>
													))}
												</div>
											</div>

											<div className="grid grid-cols-[auto_1fr] items-center gap-3">
												<Avatar className="size-12 ring-2 ring-[rgb(229,208,255)]/40 ring-offset-2 ring-offset-[#0f0f0f]">
													{testimonial.avatar ? (
														<AvatarImage
															src={testimonial.avatar}
															alt={testimonial.name}
															height="400"
															width="400"
															loading="lazy"
														/>
													) : null}
													<AvatarFallback className="bg-[rgb(180,120,255)]/20 text-[rgb(180,120,255)] font-semibold">
														{testimonial.name
															.split(' ')
															.map((n) => n[0])
															.join('')}
													</AvatarFallback>
												</Avatar>

												<div>
													<p className="text-sm font-medium text-white">
														{testimonial.name}
													</p>
													<span className="text-[#BCBCBC] block text-sm">
														{testimonial.role}
													</span>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							))}

						{/* Autres avis en carousel */}
						<div 
							className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-9 px-9 md:-mx-13 md:px-13 scrollbar-hide touch-pan-x"
						>
							{testimonials.filter((t) => !t.featured).map((testimonial) => (
										<Card
											key={testimonial.id}
											data-card
											className="flex-shrink-0 w-[85vw] md:w-[70vw] snap-center relative bg-[#0f0f0f]/80 backdrop-blur-sm border-[rgb(229,208,255)]/25 hover:shadow-[rgb(229,208,255)]/10 transition-all duration-300 group overflow-hidden p-6"
										>
											<div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,120,255)]/5 via-[#0f0f0f]/30 to-[rgb(160,100,255)]/5 pointer-events-none" />
											<div className="absolute inset-0 bg-gradient-to-tl from-transparent via-[rgb(229,208,255)]/2 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-350" />

											<CardContent className="h-full p-0 relative z-10">
												<div className="flex flex-col h-full justify-between gap-4">
													<div className="space-y-3">
														<div className="p-1.5 rounded-full bg-[rgb(180,120,255)]/20 shadow-sm w-fit">
															<Quote className="size-3 fill-[rgb(180,120,255)] text-[rgb(180,120,255)]" />
														</div>
														<p className="text-sm text-[#BCBCBC] group-hover:text-white transition-colors duration-300 leading-relaxed">
															{testimonial.content}
														</p>
														<div className="flex items-center gap-1">
															{[...Array(testimonial.rating)].map((_, i) => (
																<Star
																	key={i}
																	className="size-3 text-[rgb(180,120,255)] fill-[rgb(180,120,255)]"
																/>
															))}
														</div>
													</div>

													<div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
														<Avatar className="size-10 ring-2 ring-[rgb(229,208,255)]/30 ring-offset-2 ring-offset-[#0f0f0f]">
															{testimonial.avatar ? (
																<AvatarImage
																	src={testimonial.avatar}
																	alt={testimonial.name}
																	height="400"
																	width="400"
																	loading="lazy"
																/>
															) : null}
															<AvatarFallback className="bg-[rgb(180,120,255)]/15 text-[rgb(180,120,255)] font-semibold text-xs">
																{testimonial.name
																	.split(' ')
																	.map((n) => n[0])
																	.join('')}
															</AvatarFallback>
														</Avatar>
														<div>
															<p className="text-sm font-medium text-white">
																{testimonial.name}
															</p>
															<span className="text-[#BCBCBC] block text-xs">
																{testimonial.role}
															</span>
														</div>
													</div>
												</div>
											</CardContent>
										</Card>
									))}
						</div>
					</div>

					{/* Desktop uniquement: Grid */}
					<div className="hidden lg:grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{/* Témoignage principal (featured) */}
						{testimonials
							.filter((t) => t.featured)
							.map((testimonial) => (
								<Card
									key={testimonial.id}
									className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative bg-[#0f0f0f]/90 backdrop-blur-sm border-[rgb(229,208,255)]/30 hover:shadow-[rgb(229,208,255)]/20 transition-all duration-500 group overflow-hidden p-6"
								>
									<div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,120,255)]/8 via-[#0f0f0f]/50 to-[rgb(160,100,255)]/12 pointer-events-none" />
									<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[rgb(229,208,255)]/5 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

									<CardContent className="h-full p-0 relative z-10">
										<div className="flex flex-col h-full justify-between gap-6">
											<div className="space-y-4">
												<div className="p-2.5 rounded-full bg-[rgb(180,120,255)]/30 shadow-lg w-fit">
													<Quote className="size-5 fill-[rgb(180,120,255)] text-[rgb(180,120,255)]" />
												</div>
												<p className="text-lg font-medium text-[#BCBCBC] group-hover:text-white transition-colors duration-300 leading-relaxed">
													{testimonial.content}
												</p>
												<div className="flex items-center gap-1">
													{[...Array(testimonial.rating)].map((_, i) => (
														<Star
															key={i}
															className="size-4 text-[rgb(180,120,255)] fill-[rgb(180,120,255)]"
														/>
													))}
												</div>
											</div>

											<div className="grid grid-cols-[auto_1fr] items-center gap-3">
												<Avatar className="size-12 ring-2 ring-[rgb(229,208,255)]/40 ring-offset-2 ring-offset-[#0f0f0f]">
													{testimonial.avatar ? (
														<AvatarImage
															src={testimonial.avatar}
															alt={testimonial.name}
															height="400"
															width="400"
															loading="lazy"
														/>
													) : null}
													<AvatarFallback className="bg-[rgb(180,120,255)]/20 text-[rgb(180,120,255)] font-semibold">
														{testimonial.name
															.split(' ')
															.map((n) => n[0])
															.join('')}
													</AvatarFallback>
												</Avatar>

												<div>
													<p className="text-sm font-medium text-white">
														{testimonial.name}
													</p>
													<span className="text-[#BCBCBC] block text-sm">
														{testimonial.role}
													</span>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							))}

						{/* Témoignages secondaires */}
						{testimonials
							.filter((t) => !t.featured)
							.map((testimonial) => (
								<Card
									key={testimonial.id}
									className="relative bg-[#0f0f0f]/80 backdrop-blur-sm border-[rgb(229,208,255)]/25 hover:shadow-[rgb(229,208,255)]/10 transition-all duration-300 group overflow-hidden p-6"
								>
									<div className="absolute inset-0 bg-gradient-to-br from-[rgb(180,120,255)]/5 via-[#0f0f0f]/30 to-[rgb(160,100,255)]/5 pointer-events-none" />
									<div className="absolute inset-0 bg-gradient-to-tl from-transparent via-[rgb(229,208,255)]/2 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-350" />

									<CardContent className="h-full p-0 relative z-10">
										<div className="flex flex-col h-full justify-between gap-4">
											<div className="space-y-3">
												<div className="p-1.5 rounded-full bg-[rgb(180,120,255)]/20 shadow-sm w-fit">
													<Quote className="size-3 fill-[rgb(180,120,255)] text-[rgb(180,120,255)]" />
												</div>
												<p className="text-sm text-[#BCBCBC] group-hover:text-white transition-colors duration-300 leading-relaxed">
													{testimonial.content}
												</p>
												<div className="flex items-center gap-1">
													{[...Array(testimonial.rating)].map((_, i) => (
														<Star
															key={i}
															className="size-3 text-[rgb(180,120,255)] fill-[rgb(180,120,255)]"
														/>
													))}
												</div>
											</div>

											<div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
												<Avatar className="size-10 ring-2 ring-[rgb(229,208,255)]/30 ring-offset-2 ring-offset-[#0f0f0f]">
													{testimonial.avatar ? (
														<AvatarImage
															src={testimonial.avatar}
															alt={testimonial.name}
															height="400"
															width="400"
															loading="lazy"
														/>
													) : null}
													<AvatarFallback className="bg-[rgb(180,120,255)]/15 text-[rgb(180,120,255)] font-semibold text-xs">
														{testimonial.name
															.split(' ')
															.map((n) => n[0])
															.join('')}
													</AvatarFallback>
												</Avatar>
												<div>
													<p className="text-sm font-medium text-white">
														{testimonial.name}
													</p>
													<span className="text-[#BCBCBC] block text-xs">
														{testimonial.role}
													</span>
												</div>
											</div>
										</div>
									</CardContent>
								</Card>
							))}
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
