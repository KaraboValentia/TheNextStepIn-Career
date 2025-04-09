export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-6 py-10">
      <header className="mb-10 text-center">
        <img src="/logo.png" alt="Karabo Valentia | NextStep Careers Logo" className="mx-auto mb-4 w-32" />
        <h1 className="text-4xl font-bold text-blue-900">Karabo Valentia</h1>
        <h2 className="text-2xl font-semibold text-blue-800 mt-1">NextStep Careers</h2>
        <p className="text-lg mt-2 italic">Empowering Your Career Journey</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">About Me</h2>
        <p>
          I'm Karabo Maruping, an award-winning HR professional with over 5 years of experience in recruitment, talent acquisition, and HR support. I help job seekers create impactful CVs, prepare for interviews, and present their best selves to employers.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">My Services</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>CV Creation:</strong> From scratch for all levels of experience</li>
          <li><strong>CV Revamp:</strong> Modern updates and optimization</li>
          <li><strong>LinkedIn Optimization:</strong> Keyword-rich, professional profiles</li>
          <li><strong>Cover Letter Writing:</strong> Custom letters tailored to job roles</li>
          <li><strong>Interview Coaching:</strong> Mock interviews and prep sessions</li>
          <li><strong>Career Coaching:</strong> Strategic guidance and support</li>
          <li><strong>Job Application Help:</strong> Forms, submissions, and follow-ups</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Pricing</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Starter - R350</h3>
            <p>Basic CV creation or revamp</p>
          </div>
          <div className="border rounded-2xl shadow-md p-6 bg-blue-50">
            <h3 className="text-xl font-bold mb-2">Professional - R600 <span className="text-sm text-blue-700">(Most Popular)</span></h3>
            <p>CV + LinkedIn Optimization + Cover Letter</p>
          </div>
          <div className="border rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">Executive - R850</h3>
            <p>Full package + 1 Interview Prep session</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Client Testimonials</h2>
        <div className="space-y-4">
          <blockquote className="border-l-4 pl-4 italic text-gray-600">“Karabo completely transformed my CV. I landed 3 interviews within two weeks!” – Thato, Marketing Professional</blockquote>
          <blockquote className="border-l-4 pl-4 italic text-gray-600">“The interview prep helped me answer confidently. Thank you for your support!” – Nhlanhla, HR Graduate</blockquote>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Why Work With Me?</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Proven recruitment and HR experience in diverse industries</li>
          <li>Awarded for exceptional performance in talent acquisition</li>
          <li>Client-focused approach with personalized service</li>
          <li>Expertise in platforms like LinkedIn, Placement Partner, PNet</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Contact Me</h2>
        <p>Email: <a href="mailto:karabomaruping4@gmail.com" className="text-blue-600 underline">karabomaruping4@gmail.com</a></p>
        <p>Phone: <a href="tel:+27676951953" className="text-blue-600 underline">067 695 1953</a></p>
        <p>WhatsApp: <a href="https://wa.me/27676951953" className="text-blue-600 underline" target="_blank">Chat with me</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/karabo-maruping" className="text-blue-600 underline" target="_blank">karabo-maruping</a></p>
      </section>

      <footer className="text-center text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} Karabo Valentia | NextStep Careers. All rights reserved.
      </footer>
    </main>
  );
}