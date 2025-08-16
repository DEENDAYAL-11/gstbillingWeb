import BookDemo from "@/components/BookDemo";
import CEOQuote from "@/components/CEOQuote";
import ContactUsForm from "@/components/ContactUsForm";
import CustomerReviews from "@/components/CustomerReviews";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import HeroBanner from "@/components/HeroBanner";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <div>
       <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>GSTBillBook</title>
      </Head>
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
