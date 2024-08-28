function Footer() {
  return (
    <section id="contact">
      <div className="bg-gradient-to-b from-[var(--nav-color)] to-[var(--nav-color)] md:px-24 px-8 py-10">
        <div className="md:flex space-y-8 md:space-y-0 justify-between">
          <div className="flex text-sm flex-col space-y-2">
            <p className="text-[var(--dark)] font-semibold">QUICK LINKS</p>
            <div className="flex gap-4">
              <a
                className="text-[var(--dark)] hover:text-[var(--primary-color)]"
                href="#"
              >
                Home
              </a>
              <a
                className="text-[var(--dark)] hover:text-[var(--primary-color)]"
                href="#"
              >
                About
              </a>
              <a
                className="text-[var(--dark)] hover:text-[var(--primary-color)]"
                href="#"
              >
                Login
              </a>
              <a
                className="text-[var(--dark)] hover:text-[var(--primary-color)]"
                href="#"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex text-sm flex-col space-y-2">
            <p className="text-[var(--dark)] font-semibold">CONTACT</p>
            <div className="flex flex-col gap-4">
              <a
                className="text-[var(--dark)] hover:text-[var(--primary-color)]"
                href="#"
              >
                Address : Golan Height Place Airport Road Abuja, Nigeria
              </a>
              <a
                className="text-[var(--dark)] hover:text-[var(--primary-color)] "
                href="#"
              >
                Email : customerservice@dlawnet.net
              </a>
              <a
                className="text-[var(--light-over-color)] hover:text-[var(--primary-color)] "
                href="#"
              >
                Hotline : +234-805-177-7120
              </a>
            </div>
          </div>

          <div className="py-4">
            <div class="flex items-center">
              <input
                type="email"
                id="Email"
                name="Email"
                placeholder="dlawnet@mslook.io"
                autocomplete="off"
                class="min-h-[50px] max-w-[150px] px-4 text-white text-sm border border-[var(--text-color)] rounded-l-md bg-transparent focus:border-[var(--dark)] focus:outline-none"
              />
              <input
                type="submit"
                value="Subscribe"
                class="min-h-[50px] px-4 py-2 border-none rounded-r-md bg-[var(--text-color)] text-white text-sm cursor-pointer transition-colors ver:bg-[var(--text-color)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
