import clsx from "clsx"
import { ReactNode } from "react"

export default function Bubble({ children, style }: { children: ReactNode, style: string }) {
	return(
		<section className={clsx("backdrop-blur-sm bg-white/20 h-fit h-fit p-5 rounded-xl hover:transition hover:ease-in-out hover:duration-300 hover:neon-purple", style)}>
			{children}
		</section>
	)
}
