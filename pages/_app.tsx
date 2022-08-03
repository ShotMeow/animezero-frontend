import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import NextProgressBar from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<NextProgressBar
				color='#643FFE'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
