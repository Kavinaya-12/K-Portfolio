import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-white p-8">
      <header className="text-center mb-16">
        <h1 className="text-4xl font-bold">Kavinaya S</h1>
        <p className="text-lg mt-2">Aspiring Software Engineer | Full-Stack Developer</p>
      </header>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">About Me</h2>
        <p className="text-gray-300">
          I'm a pre-final-year ECE student passionate about full-stack development and solving real-world problems through code.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Projects</h2>
        <ul className="grid md:grid-cols-2 gap-6">
          <li className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-xl font-bold">Movie Recommendation System</h3>
            <p className="text-gray-400">JavaFX + MongoDB | Personalized movie suggestions based on user preferences.</p>
          </li>
          <li className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-xl font-bold">E-Commerce Web App</h3>
            <p className="text-gray-400">MERN Stack | Cart, checkout, auth system, deployed with Docker on AWS.</p>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 border-b border-gray-700 pb-2">Contact</h2>
        <p className="text-gray-300">Reach me at <a href="mailto:kavinaya.s2022ece@sece.ac.in" className="text-indigo-400">kavinaya.s2022ece@sece.ac.in</a></p>
      </section>
    </div>
  )
}
