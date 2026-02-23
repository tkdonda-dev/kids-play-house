import React from 'react';

const TeachersSection: React.FC = () => {
  const teachers = [
    {
      name: "Priya Sharma",
      role: "Head Teacher",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBexXpiddoXq2_exb5UiusB4VL_CUmDcef1pLgg-J3lJ3MuSwNoSCSSP4WZykEjbBX4pAgRujBx7B_64Rr8k1oZzBKszPF7XuHcQeAF-KXx4G0QNFL7cbo4BFq6AtHNrECRb9WmxBq0OTvRoO9srVmEfKdH9fqX6JvTZDrWrfI_6dAa2A7l5y_xmiVr3_cH2R9cn676IQFoh2S6291WWqQB39FbMlvi6arQiagFWy8eDNmaI7IrBB-GvPnTvTnrb29LoHFuMSzu6Rcy",
      bg: "bg-soft-orange"
    },
    {
      name: "Rahul Verma",
      role: "Activity Coordinator",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD09HGdFFBPueZfke0TrwFOOkFkMbczyWL2Lovbu1JrdCTiXK_7LqFlCxz-BuRA3HpbLX7TLrh6Mp3rSoQ4PvhzvMk1xZfDAJGOuOcsb37tNANroos123WnI453YZMhoBz2TTGVp29hk3TYTPZUTqSBwcPbniG2kgLaNJ6BHznjYMI2-UISuh2oJ8H_jUqfmnGZ6cWsht5rDDsNCK4N-7_DqMKQjV6QBUwSrjpzuqndX-Xlazq-ef__yOLEj8gd_CoERiH2_f_4-pVl",
      bg: "bg-soft-blue"
    },
    {
      name: "Neha Patel",
      role: "Nursery Educator",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCn_VyMRCgtv4unXTUsH5ZnXQbYdjW_W71kZitzsdVXNM48t4b4FKUvCplPM-1OawSTmII2dOqDoELk8CgWerllX0IE00rKYEpim9bf6P9gQusLGqfgC970_AI7pmDO09xi0JAqbpv2utWDEW0xVMJwknDCJVcOu9IMrntoD8i-dxT_fQPpG8_V6FnLQEY1MTaqR2TBEjMZn_2PbYhR_rw0fzl4izs--OqREi9nGpLqcTNOtitCV8qw71yUaTbwTHYAFBkUlU-U8l2P",
      bg: "bg-soft-green"
    },
    {
      name: "Swati Desai",
      role: "LKG Supervisor",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuChL3Wqw3AZOGeaCcANIC9mNN7TdnLSbpmwuKHnKoUB_UEb9qQp1qwpTkIiw-fDJ8wSqjdh4Aee5ZTCIrgpMDUfllj33Irq_ZWKzjKMUEmeEkU3k9mLy3T27KIMT3nQTXarTok8FDVZYSb_bM8dQE0KIqrq5CJ_Eb8_4lqmlGBlT6_oOXZmuRIZhluf8JZUHHmBW0j9BMZpLLnXQ7-b_6psFoYUEJPSfKEgCzKRE3iww_3rrm08Y7YlOKD5jRVhectlybilVoaW2cFy",
      bg: "bg-soft-orange"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 w-full cloud-divider-top bg-white"></div>

      <div className="container mx-auto px-6 text-center mb-16 relative pt-12">
        <span className="text-primary font-bold tracking-wide">Our Guiding Lights</span>
        <h2 className="text-5xl font-display font-bold mt-2 text-slate-900">
          Meet Our Caring <br />
          <span className="text-slate-900 underline decoration-secondary decoration-4 underline-offset-4">Educators!</span>
        </h2>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teachers.map((t, idx) => (
          <div key={idx} className="bg-white p-4 rounded-4xl text-center shadow-sm hover:shadow-xl transition duration-300">
            <div className={`w-full h-48 rounded-3xl mb-4 overflow-hidden ${t.bg}`}>
              <img
                alt={t.name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                src={t.img}
              />
            </div>
            <h4 className="font-display font-bold text-lg text-slate-900">{t.name}</h4>
            <p className="text-primary text-xs font-bold uppercase mt-1">{t.role}</p>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 w-full cloud-divider"></div>
    </section>
  );
};

export default TeachersSection;