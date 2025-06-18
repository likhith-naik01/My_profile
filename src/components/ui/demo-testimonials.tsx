import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote: "An elegant e-commerce website designed for a premium furniture brand. It blends sleek UI with smooth navigation to promote luxury and boost online sales.",
      name: "ROYAL FURNITURE",
      designation: "E-Commerce Website",
      src: "public/Screenshot1.png",
      link: "https://royal-furniture-ecommerce-web.onrender.com",
    },
    {
      quote: "A modern website developed for a creative media agency. It showcases services, portfolio, and team efficiently, with a bold aesthetic and lightning-fast performance.",
      name: "FLASHCUT MEDIA",
      designation: "Digital Agency Website",
      src: "public/Screenshot2.png",
      link: "https://flashcut-media-v1.vercel.app",
    },
    {
      quote: "An AI-powered waste recycling platform using Gemini API to help users list recyclable items, track eco-contributions, and build infrastructure via community impact.",
      name: "EcoCycleX",
      designation: "Sustainability & Recycling Platform",
      src: "public/Screenshot3.png",
      link: "https://waste-nmithacks25-uuh1.onrender.com/",
    },
    {
      quote: "A digital space for artists to showcase work, grow their presence, and connect with fans. Features portfolio hosting, collaboration, and open-source contributions.",
      name: "ArtistHub",
      designation: "Creative Community Platform",
      src: "public/Screenshot4.png",
      link: "https://github.com/tether007/Hack-2-Intern",
    },
    {
      quote: "A sleek booking solution for barbershops. Enables easy scheduling, stylist selection, and real-time updates to deliver a premium grooming experience.",
      name: "SimuBarber",
      designation: "Barbershop Appointment System",
      src: "public/Screenshot5.png",
      link: "https://lovable.dev/projects/52bddfc8-54e1-4e05-8f42-55368e0a3066",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}

export { AnimatedTestimonialsDemo };