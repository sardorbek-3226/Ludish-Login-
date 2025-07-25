const About = () => {
    return (
      <div className="max-w-4xl mt-10 mb-10 mx-auto px-4 py-10 italic">
        <h1 className="text-4xl font-bold text-center text-black/60 mb-6">
          About
        </h1>
  
        <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
          <strong>ImageFinder</strong> — bu sizga internetdagi eng sifatli bepul
          suratlarni tezda topishga yordam beruvchi ilova. Biz Unsplash API'dan
          foydalanib, sizga turli mavzulardagi ajoyib rasmlarni taqdim etamiz.
        </p>
  
        <div className="bg-gray-100 p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
             Nimalar qilishingiz mumkin?
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Ixtiyoriy mavzu bo‘yicha rasmlar qidiring</li>
            <li>Unsplash API orqali yuqori sifatdagi suratlarni oling</li>
            <li>Responsive dizayn va oddiy interfeysdan foydalaning</li>
          </ul>
        </div>
  
        <div className="bg-white border border-gray-200 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-2"> Texnologiyalar</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>React & React Router DOM</li>
            <li>Tailwind CSS</li>
            <li>Custom hook: <code>useFetch</code></li>
            <li>Unsplash Developer API</li>
          </ul>
        </div>
  
        <div className="mt-10 text-center">
          <p className="text-gray-600">
            Dasturchi: <strong>Sardor Ibrogimov</strong>  
          </p>
          <div className="flex justify-center gap-4 mt-2 text-black/60">
            <a
              href="https://github.com/sardorbek-3226"
              target="_blank"
              className="hover:underline"
            >
              GitHub
            </a>
            <a
              href="https://t.me/your_telegram_username"
              target="_blank"
              className="hover:underline"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  