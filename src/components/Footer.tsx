import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/g10.png"

export default function Footer() {
  return (
    <div className="mt-20 mx-4 lg:mx-10 bg-white rounded-[30px] p-8 lg:px-12 lg:py-10" style={{ backdropFilter: "blur(75px)" }}>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        <div className="flex flex-col gap-5 max-w-xs">
          <Image src={Logo} alt="Prime Promenade" width={120} height={62} className="object-contain" />
          <p className="text-base text-black/60 leading-relaxed">
            A world-class lifestyle destination uniting fitness, wellness, business, and curated experiences under one iconic roof.
          </p>
          <Image src="/images/461005f0a4b16024c738b9ceeae3cc0efc6a0a94.svg" alt="Social media" width={251} height={26} />
        </div>
        <nav className="flex flex-col gap-3 text-center lg:text-right lg:pt-2 w-full lg:w-auto items-center lg:items-end">
          <Link href="/" className="text-lg font-semibold text-black capitalize hover:opacity-60 transition-opacity">Amenities</Link>
          <Link href="/conference" className="text-lg font-semibold text-black capitalize hover:opacity-60 transition-opacity">Events</Link>
          <Link href="/about" className="text-lg font-semibold text-black capitalize hover:opacity-60 transition-opacity">Experience</Link>
          <Link href="/spa" className="text-lg font-semibold text-black capitalize hover:opacity-60 transition-opacity">Wellness</Link>
          <Link href="/contact" className="text-lg font-semibold text-black capitalize hover:opacity-60 transition-opacity">Contact</Link>
        </nav>
      </div>
      <div className="mt-8 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p className="text-base text-black/60 capitalize">Copyright &copy; 2026 – All Right Reserved</p>
        <div className="flex items-center gap-2">
          <p className="text-base text-black/60 capitalize">designed by :</p>
          <Image src="/images/5e81c1bb41d21ff0f9b202b5848b7c58ea018d41.svg" alt="Designer" width={117} height={35} />
        </div>
      </div>
    </div>
  );
}
