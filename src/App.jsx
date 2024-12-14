import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';

function App() {
  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Navbar />
      
      <main className="flex pt-14">
        <Sidebar />
        <div className="flex-grow flex justify-center sm:ml-[70px] xl:mr-[280px]">
          <Feed />
        </div>
        <Widgets />
      </main>
    </div>
  );
}

export default App;