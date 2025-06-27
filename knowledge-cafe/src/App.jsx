import Blogs from './components/Blogs/Blogs';
import Bookmarks from './components/Bookmarks/Bookmarks';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row h-screen w-screen">
        {/* Left: Blogs */}
        <div className="w-full md:w-2/3 p-4 overflow-y-auto">
          <Blogs />
        </div>

        {/* Right: Bookmarks */}
        <div className="w-full md:w-1/3 p-4 bg-gray-50 border-l overflow-y-auto">
          <Bookmarks />
        </div>
      </div>
    </>
  );
}

export default App;
