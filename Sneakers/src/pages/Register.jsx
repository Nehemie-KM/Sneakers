import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/fond_register.jpg')]">
    <div className="w-full max-w-md bg-transparent backdrop-blur-md rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-300 text-center mb-4">Rejoignez BallerStyle</h2>
      <p className="text-gray-500 text-center mb-6">Créez votre compte pour commencer</p>
  
      <form className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300">Nom Complet</label>
          <input
            id="name"
            type="text"
            required
            placeholder="Votre nom complet"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
  
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
  
        {/* Confirm Password Field */}
        <div>
          <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-300">Confirmer le mot de passe</label>
          <input
            id="confirm-password"
            type="password"
            required
            placeholder="********"
            className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-700 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
  
        {/* Terms and Conditions */}
        <div className="flex items-center">
          <input type="checkbox" className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded" required />
          <label className="ml-2 text-sm text-gray-600">
            J'accepte les <a href="/terms" className="text-gray-800 hover:underline">termes et conditions</a>.
          </label>
        </div>
  
        {/* Register Button */}
        <button
          type="submit"
          className="w-full bg-gray-600 text-white py-3 rounded-lg font-medium hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 transition-all"
        >
          S'inscrire
        </button>
      </form>
  
      {/* Divider and Social Register */}
      <div className="mt-6 flex items-center justify-center space-x-4">
        <span className="w-1/4 border-t border-gray-300"></span>
        <span className="text-sm text-gray-600">Ou inscrivez-vous avec</span>
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
  
      {/* Login Link */}
      <p className="mt-6 text-center text-sm text-gray-600">
        Vous avez déjà un compte ? <a href="/login" className="text-gray-800 font-medium hover:underline">Connectez-vous ici</a>
      </p>
    </div>
  </div>
  
  );
};

export default Register;