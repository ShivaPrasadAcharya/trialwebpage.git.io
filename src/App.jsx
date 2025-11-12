import React, { useState } from 'react';
import { Github, Code, Zap } from 'lucide-react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Github className="w-16 h-16 text-indigo-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Welcome to Trial Webpage
          </h1>
          <p className="text-xl text-gray-600">
            A simple React app deployed via GitHub Pages
          </p>
        </header>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <Code className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">React Based</h3>
              <p className="text-gray-600">
                Built with React for a modern, interactive experience
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <Github className="w-12 h-12 text-gray-800 mb-4" />
              <h3 className="text-xl font-semibold mb-2">GitHub Pages</h3>
              <p className="text-gray-600">
                Automatically deployed using GitHub Actions
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <Zap className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast & Simple</h3>
              <p className="text-gray-600">
                Lightweight and optimized for performance
              </p>
            </div>
          </div>

          {/* Interactive Counter */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Interactive Counter
            </h2>
            <div className="text-6xl font-bold text-indigo-600 mb-6">
              {count}
            </div>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => setCount(count - 1)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Decrease
              </button>
              <button
                onClick={() => setCount(0)}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Reset
              </button>
              <button
                onClick={() => setCount(count + 1)}
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                Increase
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center mt-16 text-gray-600">
          <p className="mb-2">
            Repository: <span className="font-semibold">trialwebpage</span>
          </p>
          <p>
            Owner: <span className="font-semibold">ShivaPrasadAcharya</span>
          </p>
        </footer>
      </div>
    </div>
  );
}
