import React from "react";

const Header = function () {
  return (
    <header>
      <div className="container mx-auto px-4 sm:px-0">
        <div className="flex justify-between py-4">
          <div className="logo">Logo</div>
          <nav>
            <ul className="hidden sm:flex justify-between gap-8">
              <li>
                <a href="#">Beranda</a>
              </li>
              <li>
                <a href="#">Kotak Masuk</a>
              </li>
              <li>
                <a href="#">Curhatan</a>
              </li>
            </ul>
          </nav>
          <button className="border-[1px] border-red-400 py-[0.1rem] px-[.5rem] rounded-md">
            Masuk
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
