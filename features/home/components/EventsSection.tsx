import React from 'react';
import { Trees, MapPin } from 'lucide-react';

const EventsSection: React.FC = () => {
  const events = [
    {
      category: "Celebration",
      catColor: "bg-accent",
      date: "01 JAN",
      price: "$88.00",
      title: "Annual Sports Day",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1KmvORFde7iXvgUIQEA6NuB96mzRXJabJFLa92ia5QyFs3NkaMpKe-yHEY4O3S68oSPpAcx3i2JdCWxePjRtFSxmXUg6Q_tkwLJZ8o_LF4Yvo_2BPnaQ60K6zMfKo8GtWgmNu5CoyDOywSvruww1WpZnRw7CWme1UvtQl14_a2RmL8CPL_IWXmRyTIVl6C3nZSYkm14hUlRI0tHxku8kPNMuPDO8_ryMlftrnEFlmAeHDcUDsqMgAkUBTbqNHgOPgJLXX1xcSwd_Z"
    },
    {
      category: "Festival",
      catColor: "bg-secondary",
      date: "01 JAN",
      price: "$59.00",
      title: "Diwali Festivities",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcMORLw1pg9bB4aBucLGIbTe-QMCL--Sf6yLqNC3eUoOfw5xxd-zYI_inhTIv4qLi_9P7D8hqLIRblIwUjQuKdyWTIbUlGUkVRVDQL7e7Py_e3M-c-JNzdCeHEsADEYeqORyBiiQfQFBdDowB0xuLrGrZpWsh6YB4PENH1awBBFn6elaaPCnD6txfCzmU9yzfBhz5tNXpuvkIxUV_80g-WzS2_3rXxeXHbIAYXHuNghszrcEx0Kq3f4kPR7hlPMKdRcrwJgSxPNiyX"
    },
    {
      category: "Activity",
      catColor: "bg-orange-400",
      date: "01 JAN",
      price: "$49.00",
      title: "Summer Camp",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6zmaYc4-CP9sbkECyFIUi_wah5Ye8_2m3Y-xgezZHWpa4KZHPEBY90Vkba2ibWh6aZBRyD52U_MRNGB8iO19Arn-JJPKAHST8yg6oIHtNstUAjaRWJQEXmtKGzyWFG1ZrIan75iGGmY7fYZkQrZXtUBI0JcMvZrl0QukhgIjtYQOgx27aSw_5gn-WfqumtlwMn7c4BLyad3kIf2Akg5-5MaYCmgW6adF7OfKGmjKLsLkFIQ_NqjNO2gfz3KLYfe2StiObdn46844x"
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-16 relative">
        <span className="text-primary font-bold tracking-wide">Campus Highlights!</span>
        <h2 className="text-5xl font-display font-bold mt-2 text-slate-900">
          Life At <span className="text-primary">Kid's Play House!</span>
        </h2>
        <div className="absolute right-10 top-0 opacity-10 hidden lg:block text-slate-900">
          <Trees size={160} />
        </div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {events.map((evt, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-4xl overflow-hidden group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
            <div className="relative h-64 overflow-hidden">
              <img
                alt={evt.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                src={evt.img}
              />
              <div className={`absolute top-4 right-4 ${evt.catColor} text-white px-4 py-1 rounded-full text-xs font-bold uppercase shadow-sm`}>
                {evt.category}
              </div>
              <div className="absolute bottom-4 left-4 bg-secondary text-white p-2 rounded-xl text-center leading-tight shadow-md">
                <div className="text-lg font-bold">01</div>
                <div className="text-[10px] font-bold">JAN</div>
              </div>
            </div>
            <div className="p-8">
              <span className="text-primary font-bold text-sm block mb-1">Free/Inclusive</span>
              <h3 className="text-2xl font-display font-bold my-3 text-slate-800 group-hover:text-primary transition">{evt.title}</h3>
              <p className="text-slate-600 text-sm mb-4">Experience the joy of our vibrant campus celebrations, engaging activities, and parent-toddler events.</p>
              <div className="flex items-center text-xs text-primary font-bold">
                <MapPin size={14} className="mr-1" />
                Venue: Kid's Play House Campus
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 w-full cloud-divider"></div>
    </section>
  );
};

export default EventsSection;