import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Amit Joshi",
      role: "IT Professional",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAyx2w4Noug9Etz0ehk5Ha2FlwkZ5O-GV8JAoacCIe_sSRWgtuY6zOrX_ouxFTRIIAayq-S0oIeJouDY65Ab73ETHyYu7czI36XEDd3tAtFmkVv1C32XK4ZJMl1QojZ3E7n8D3JyzU5vGCRo8tAMmZWwVq4N-pd5hhPVzwuVuA33DXDexxbmvTpjY0IseRy-1e1Ok1xn7caxGbYn7fd2YUSKvoQ642qqqbNzZX44kKdZpvu-CqeqblOjxX7PiXVIck5rw39_w32ocqq",
      bg: "bg-soft-orange"
    },
    {
      name: "Sneha Reddy",
      role: "Doctor",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4ugS0HzWUPVyjI4fNUEkjMNl4E2rCParDU9d7CHrz6bQgemYzHVE7ciO1ezJm_8uhcM35ppYAkrkKyO5JlTOw4EP_uhbz_97xkM-51leqwsgGMTPe1FHUznjTMMxcNcdupzZxfxOubIhyKd51l-f3Ddcf8JtiNbf_EUQYBZX0G5rh4QUJ044oDRambKqcxxrqrNg9ZirK8A33vU_Sbm_PenSJGBQeNNcu8Y7nG-rI_YiB3_HHyJk3zqTBHE1oALfUxbjnw2jxL2PF",
      bg: "bg-soft-blue"
    },
    {
      name: "Kiran Kapoor",
      role: "Businessman",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCEdZnf1HPy3Bp2V5MkVgTgZFVAIyJiJS_R7mbRJ6srFBmknWx6toeNmOc2KMQrRSBGNFeqDVHow_uxtG0t1BvRIXByXvQ9JeJoC9izZeLyhGHuMOcUvCWdypj9bVrRsO0u84pYc2wZq6Ob92nZwL-LMG5iUloz4qBe7uLmO7IEs3d6nijQWLx2tH4Y6Zg4vlZNllmN0f31poFJAtb2SjwPC3_G6CjYG5seR6HLJI2jMZqO4gqlNCtoZL35-vLbmOA8Q4lx_WW_28fP",
      bg: "bg-soft-green"
    }
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 text-center mb-16">
        <span className="text-primary font-bold tracking-wide">Parent Reviews</span>
        <h2 className="text-5xl font-display font-bold mt-2 text-slate-900">
          Real Stories From <br />Our <span className="text-slate-900 underline decoration-primary decoration-4 underline-offset-4">Happy Parents!</span>
        </h2>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {testimonials.map((t, idx) => (
          <div key={idx} className={`${t.bg} p-10 rounded-[3rem] relative group hover:-translate-y-2 transition-transform duration-300`}>
            <div className="flex items-center space-x-4 mb-6">
              <img
                alt={t.name}
                className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                src={t.img}
              />
              <div>
                <h4 className="font-bold text-slate-900">{t.name}</h4>
                <p className="text-xs text-slate-500">{t.role}</p>
              </div>
            </div>
            <p className="text-slate-600 mb-6 italic leading-relaxed">
              "Kid's Play House feels like a second home. The teachers are so caring, and my child's confidence and phonics skills have improved remarkably!"
            </p>
            <div className="flex text-secondary space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" stroke="none" />
              ))}
            </div>
            <div className="absolute bottom-6 right-8 text-slate-900 opacity-10">
              <Quote size={60} fill="currentColor" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;