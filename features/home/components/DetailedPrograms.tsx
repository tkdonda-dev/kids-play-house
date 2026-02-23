import React from 'react';
import { ArrowRight } from 'lucide-react';

const DetailedPrograms: React.FC = () => {
  const details = [
    {
      age: "Age 2-3 Year",
      title: "Playgroup Activities",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4zHTAeV1gmhFAuB1-Q9Sjt6akG4FgGtziNlXOZdUshc6mNt4bUEV0eIExp2YdCKGDsdASrZmkrXm4_pwPxzx_DpdAe4ZxeiRtQdtxfS9pDuB0dXDC5-hWGqT3kzFDvjmYu3-Mmi50f39CSRJePDbUK8nMZ1u64IvpBX00A39fP2lZpFUuNKEjqeWlQD5lsmWvlMV5FLT4MUlmBh9X-T1WdNJ6XJ0yr2RcwR3MVBHaSmAuu9gaw3CC3gik8p1l5XhYIqaLUJRm77fh",
      bg: "bg-soft-orange",
      badgeColor: "bg-primary",
      btnColor: "bg-primary",
    },
    {
      age: "Age 3-4 Year",
      title: "Nursery Program",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPTRT9_u6E7zMQmQETVad_9jtkDQ1hM6Yhc86GCrtK4tYFRwM2m64C7HZqcpuaz9VZJtLiZOciyGrGyMNF4D12RHUZcgYogvUy7t8IwJfujBzgF0oytT2jntDDQfXv-uL453nf-0wdHq5ocsuvEfpqpkkR6CqATqrb89fXMG14v6WxCoE-VZlcBxof7VAvtXOrmJRKhehwwy_Pfh4FZBxU77gGefJOH10umecMsHzk372yp_nP1rB-BSRSokffw9lGioBl0pI4hzm0",
      bg: "bg-soft-blue",
      badgeColor: "bg-blue-400",
      btnColor: "bg-blue-400",
    },
    {
      age: "Age 4-6 Year",
      title: "LKG & UKG",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAICfo-XmLQ7cN38NLiZVXTZx9VtM-7yeEZwYbSDibv4fr_HcKylTJDW-cheO7WaTDcjTc91fSdOXY65X_EaaoOpQydpKBFFzu26ufzJiyZtZxJ6E5g1IW3kHycronD91--G8i30BBf0UCJ1lfZR2brZ3Ci_tRZTmtqlJLw7Y53Wu1Djrw4PP4vNfWrD3NBs8krzoKxv0JmxhFbJhaowdLnqa1Bc3Mv5RmblQ7c5UIGgpEMOcUpk4ZNPuO_OXzrLCKbEPcazb1cv_aS",
      bg: "bg-soft-orange",
      badgeColor: "bg-primary",
      btnColor: "bg-primary",
    },
  ];

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 text-center mb-16">
        <span className="text-primary font-bold tracking-wide">Nurturing Every Step</span>
        <h2 className="text-5xl font-display font-bold mt-2 text-slate-900">
          Age-Appropriate Learning <br />For Every <span className="text-primary underline decoration-wavy decoration-2 underline-offset-4">Milestone!</span>
        </h2>
        <div className="mt-8">
          <button className="bg-primary hover:bg-orange-600 text-white px-8 py-3 rounded-full font-bold transition shadow-md">
            View All Programs
          </button>
        </div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {details.map((item, idx) => (
          <div key={idx} className={`${item.bg} rounded-4xl p-8 relative overflow-hidden group hover:shadow-xl transition duration-300`}>
            <div className={`${item.badgeColor} text-white text-xs font-bold px-4 py-1.5 rounded-full absolute top-6 left-6 shadow-sm z-10`}>
              {item.age}
            </div>
            <div className="relative h-48 mb-6 flex items-center justify-center">
              <img
                alt={item.title}
                className="w-full h-full object-contain transform group-hover:scale-110 transition duration-500"
                src={item.img}
              />
            </div>

            <h3 className="text-2xl font-display font-bold mb-3 text-slate-800">{item.title}</h3>
            <p className="text-slate-600 mb-6 text-sm">Comprehensive activities tailored for your child's developmental age group and academic needs.</p>
            <button className={`w-12 h-12 ${item.btnColor} text-white rounded-full flex items-center justify-center transition hover:scale-110 shadow-md`}>
              <ArrowRight size={20} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DetailedPrograms;