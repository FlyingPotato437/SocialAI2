import Head from 'next/head';
import Sidebar from '/Users/senthis/Desktop/GPTexperiments/code-weaver/components/Sidebar.jsx';
import Header from '/Users/senthis/Desktop/GPTexperiments/code-weaver/components/Header.jsx';
import MainContent from '/Users/senthis/Desktop/GPTexperiments/code-weaver/components/Content.jsx';

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Head>
        <title>Dashboard</title>
      </Head>
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}
