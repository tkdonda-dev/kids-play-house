import React from 'react';
import { PawPrint, User, Calendar, ArrowRight } from 'lucide-react';

const BlogSection: React.FC = () => {
  const blogs = [
    {
      tag: "Education",
      tagColor: "bg-primary",
      title: "5 Ways To Prepare Your Child For Nursery...",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1KmvORFde7iXvgUIQEA6NuB96mzRXJabJFLa92ia5QyFs3NkaMpKe-yHEY4O3S68oSPpAcx3i2JdCWxePjRtFSxmXUg6Q_tkwLJZ8o_LF4Yvo_2BPnaQ60K6zMfKo8GtWgmNu5CoyDOywSvruww1WpZnRw7CWme1UvtQl14_a2RmL8CPL_IWXmRyTIVl6C3nZSYkm14hUlRI0tHxku8kPNMuPDO8_ryMlftrnEFlmAeHDcUDsqMgAkUBTbqNHgOPgJLXX1xcSwd_Z"
    },
    {
      tag: "Development",
      tagColor: "bg-secondary",
      title: "Understanding The Importance Of Phonics...",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAcMORLw1pg9bB4aBucLGIbTe-QMCL--Sf6yLqNC3eUoOfw5xxd-zYI_inhTIv4qLi_9P7D8hqLIRblIwUjQuKdyWTIbUlGUkVRVDQL7e7Py_e3M-c-JNzdCeHEsADEYeqORyBiiQfQFBdDowB0xuLrGrZpWsh6YB4PENH1awBBFn6elaaPCnD6txfCzmU9yzfBhz5tNXpuvkIxUV_80g-WzS2_3rXxeXHbIAYXHuNghszrcEx0Kq3f4kPR7hlPMKdRcrwJgSxPNiyX"
    },
    {
      tag: "Classroom",
      tagColor: "bg-orange-400",
      title: "How To Build A Healthy Routine For Toddlers...",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB6zmaYc4-CP9sbkECyFIUi_wah5Ye8_2m3Y-xgezZHWpa4KZHPEBY90Vkba2ibWh6aZBRyD52U_MRNGB8iO19Arn-JJPKAHST8yg6oIHtNstUAjaRWJQEXmtKGzyWFG1ZrIan75iGGmY7fYZkQrZXtUBI0JcMvZrl0QukhgIjtYQOgx27aSw_5gn-WfqumtlwMn7c4BLyad3kIf2Akg5-5MaYCmgW6adF7OfKGmjKLsLkFIQ_NqjNO2gfz3KLYfe2StiObdn46844x"
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-16 relative">
        <span className="text-primary font-bold tracking-wide">Parenting Resources</span>
        <h2 className="text-5xl font-display font-bold mt-2 text-slate-900">
          Tips For Early <br />Childhood <span className="text-primary">Parenting!</span>
        </h2>
        <div className="absolute left-10 top-0 opacity-10 hidden lg:block text-slate-900">
          <PawPrint size={160} />
        </div>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {blogs.map((post, idx) => (
          <div key={idx} className="bg-white border border-slate-100 rounded-4xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <div className="relative h-64 overflow-hidden">
              <img
                alt={post.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                src={post.img}
              />
              <div className={`absolute top-4 right-4 ${post.tagColor} text-white px-4 py-1 rounded-full text-xs font-bold uppercase shadow-sm`}>
                {post.tag}
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center text-xs text-slate-500 mb-4 space-x-4">
                <span className="flex items-center hover:text-primary transition cursor-pointer">
                  <User size={14} className="mr-1" /> Dynamiclayers
                </span>
                <span className="flex items-center">
                  <Calendar size={14} className="mr-1" /> August 12, 2024
                </span>
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition cursor-pointer leading-tight">
                {post.title}
              </h3>
              <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                Simple, actionable advice for parents to support their little ones through crucial early development years.
              </p>
              <a href="#" className="text-primary font-bold flex items-center hover:underline group-hover:translate-x-1 transition-transform">
                Read More <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;