import Link from 'next/link';
import Head from 'next/head';

//components
import Layout from '../../components/layout';

export default function FirstPost() {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>
			<h1>First Post</h1>
			<h2>
				<Link href="/">
					<a>Back to home</a>
				</Link>

				<Link href="/helloworld/hello-world">
					<a className="jake" target="_blank" rel="noopener">
						Hello World
					</a>
				</Link>
			</h2>
		</Layout>
	);
}
