import React from 'react'
import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
	return (
		<Html lang='ru'>
			<Head>
				<link rel='icon' href='/favicon.svg' type='image/svg+xml' />

				<meta name='theme-color' content='#040404' />
				<meta name='msapplication-navbutton-color' content='#643FFE' />
				<meta name='apple-mobile-web-app-status-bar-style' content='#643FFE' />

				<link
					href='https://fonts.googleapis.com/css2?family=Raleway&display=optional'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}

export default Document
