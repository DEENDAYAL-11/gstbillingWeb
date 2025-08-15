import BookDemo from "@/components/BookDemo";
import CEOQuote from "@/components/CEOQuote";
import ContactUsForm from "@/components/ContactUsForm";
import CustomerReviews from "@/components/CustomerReviews";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroBanner/>
      <Features/>
      <CustomerReviews/>
      <CEOQuote/>
      <BookDemo/>
      <ContactUsForm/>
      <Footer/>
    </div>
  );
}
