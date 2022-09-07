import '@/app/styles/globals.scss'
import NextProgressBar from 'nextjs-progressbar'
import ReduxToastrLib from 'react-redux-toastr'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { persistor, store } from '@/app/store/store'
import { PersistGate } from 'redux-persist/integration/react'
import { AuthProvider } from '@/app/providers/AuthProvider'
import { TypeComponentAuthFields } from '@/app/providers/private-route.interface'

type TypeAppProps = AppProps & TypeComponentAuthFields

export default function MyApp({ Component, pageProps }: TypeAppProps) {
	return (
		<>
			<NextProgressBar
				color='#643FFE'
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
				nonce={'nonce'}
				options={{ easing: 'ease', speed: 500 }}
				showOnShallow={false}
			/>
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<AuthProvider Component={Component}>
						<ReduxToastrLib
							newestOnTop={false}
							preventDuplicates
							progressBar
							closeOnToastrClick
							timeOut={4000}
							transitionIn={'fadeIn'}
							transitionOut={'fadeOut'}
						/>
						<Component {...pageProps} />
					</AuthProvider>
				</PersistGate>
			</Provider>
		</>
	)
}
