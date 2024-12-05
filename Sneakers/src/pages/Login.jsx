import React from 'react';

function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/fond_login.jpg')] ">
      <div className="w-full max-w-md bg-transparent backdrop-blur-md rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-300 text-center mb-4">Bienvenue chez BallerStyle</h2>
        <p className="text-gray-500 text-center mb-6">Connectez-vous pour continuer</p>
        
        <form className="space-y-6">
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Adresse Email</label>
            <input
              id="email"
              type="email"
              required
              placeholder="exemple@mail.com"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          
          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">Mot de passe</label>
            <input
              id="password"
              type="password"
              required
              placeholder="********"
              className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          {/* Remember Me + Forgot Password */}
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" />
              <span className="ml-2 text-sm text-gray-600">Se souvenir de moi</span>
            </label>
            <a href="#" className="text-sm text-gray-800 hover:underline">Mot de passe oublié ?</a>
          </div>
          
          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gray-600 text-white py-3 rounded-lg font-medium hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 transition-all"
          >
            Se connecter
          </button>
        </form>
        
        {/* Divider and Social Login */}
        <div className="mt-6 flex items-center justify-center space-x-4">
          <span className="w-1/4 border-t border-gray-300"></span>
          <span className="text-sm text-gray-600">Ou connectez-vous avec</span>
          <span className="w-1/4 border-t border-gray-300"></span>
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <button className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center hover:bg-blue-600">
            <i className="fab fa-facebook-f"></i>
          </button>
          <button className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600">
            <i className="fab fa-google"></i>
          </button>
          <button className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-900">
            <i className="fab fa-apple"></i>
          </button>
        </div>
        
        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Pas encore de compte ? <a href="/register.jsx" className="text-gray-800 font-medium hover:underline">Inscrivez-vous ici</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
