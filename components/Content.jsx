import TopProtocols from '/Users/senthis/Desktop/GPTexperiments/code-weaver/components/TopProtocol.jsx';
import TVLRankings from '/Users/senthis/Desktop/GPTexperiments/code-weaver/components/TVL.jsx';

const MainContent = () => {
  return (
    <main className="flex-1 overflow-y-auto bg-gray-100">
      <div className="p-6">
        {/* Content goes here */}
        <TopProtocols />
        <TVLRankings />
      </div>
    </main>
  );
};

export default MainContent;
