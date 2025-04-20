import Hero from './components/layout/Hero';
import BookingForm from './components/forms/BookingForm';
import Features from './components/layout/Features';
import Footer from './components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <BookingForm />
      <Features />
      <Footer />
    </main>
  );
} 