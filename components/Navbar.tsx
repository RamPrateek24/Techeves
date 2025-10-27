
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header 
    // style={{
    //       backgroundColor: "transparent",
    //       backdropFilter: "none",
    //       WebkitBackdropFilter: "none",
    //       boxShadow: "none",
    //     }}
    >
      <nav className="flex items-center justify-between px-8 py-4 bg-transparent text-white">
        <Link href="/" className="logo">
            <Image src="/icons/logo.jpg" alt="LOGO" width={24} height={24} />
            <p>Techeves</p>
        </Link>
        <ul>
            <Link href="/">Home</Link>
            <Link href="/">Events</Link>
            <Link href="/">Create Event</Link>
        </ul>

      </nav>
    </header>
  );
};

export default Navbar;