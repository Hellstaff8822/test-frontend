import Slider from './components/Slider';
import blueBg from './assets/bg.jpg';

function App() {
  return (
    <main className="bg-white min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8">
      <section
        className="w-full mx-auto py-20 rounded-2xl shadow-lg overflow-hidden"
        style={{
          backgroundImage: `url(${blueBg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}>
        <div className="w-full text-center flex flex-col items-center ">
          <h1
            className="font-bold text-[#252B42] mb-10 lg:mb-20 
                       text-3xl sm:text-4xl lg:text-[58px]
                       leading-tight">
            Voices of Success with Sales Fortuna
          </h1>
          <Slider />
        </div>
      </section>
    </main>
  );
}

export default App;
