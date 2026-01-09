'use client';

import Link from 'next/link';
import Image from 'next/image';
import StarBorder from '@/components/ui/StarBorder';

export default function Header() {
	return (
		<header className="fixed top-0 left-0 w-full z-[9999] bg-black/40 backdrop-blur-xl">
			<nav className="max-w-6xl mx-auto px-6 py-5 flex items-center">
				{/* Logo */}
				<Link href="/" className="flex items-center gap-3">
					<Image
						src="/img/logo-solido-chico-remove.png"
						alt="ZINNIA Code Icon"
						width={40}
						height={40}
						className="object-contain"
					/>
					<Image
						src="/img/ZINNIA-remove.png"
						alt="ZINNIA Code"
						width={120}
						height={50}
						className="object-contain"
					/>
				</Link>

				{/* Menu */}
				<div className="flex gap-6 text-sm ml-auto">
					<StarBorder
						as="a"
						href="#services"
						color="cyan"
						speed="3s"
						className="text-white"
					>
						Services
					</StarBorder>
					<StarBorder
						as="a"
						href="#technologies"
						color="cyan"
						speed="3s"
						className="text-white"
					>
						Technologies
					</StarBorder>
					<StarBorder
						as="a"
						href="#portfolio"
						color="cyan"
						speed="3s"
						className="text-white"
					>
						Portfolio
					</StarBorder>
					<StarBorder
						as="a"
						href="#about"
						color="cyan"
						speed="3s"
						className="text-white"
					>
						About Us
					</StarBorder>
					<StarBorder
						as="a"
						href="#contact"
						color="cyan"
						speed="3s"
						className="text-white"
					>
						Contact
					</StarBorder>
				</div>
			</nav>
		</header>
	);
}
