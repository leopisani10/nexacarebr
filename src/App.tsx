import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Team } from './components/Team';
import { Pricing } from './components/Pricing';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { SEO } from './components/SEO';
import { StructuredData } from './components/StructuredData';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="NexaCare Brasil | Home Care, Enfermagem e Saúde Integrada"
        description="Home care, enfermagem e equipe multidisciplinar para domicílios, hospitais e ILPIs. Atendimento humanizado, seguro e ágil."
        canonical="https://www.nexacarebr.com.br/"
      />
      <StructuredData />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Pricing />
        <Team />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
