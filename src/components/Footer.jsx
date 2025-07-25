const Footer = () => {
  return (
    <footer className="bg-gray-100 text-center p-6 mt-auto fixed bottom-0 left-0 right-0 shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto gap-4 text-sm text-gray-600">
        <p>
          Made by <strong>Sardor Ibrogimov</strong>
        </p>

        <div className="flex gap-4">
          <a
            href="https://github.com/sardorbek-3226"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            GitHub
          </a>
          <a
            href="https://t.me/your_telegram_username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            Telegram
          </a>
        </div>

        <p>© {new Date().getFullYear()} Yili ishlab chiqarilgan</p>
      </div>
    </footer>
  );
};

export default Footer;
