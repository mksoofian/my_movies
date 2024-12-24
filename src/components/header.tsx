import { CircleUserRound } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between w-full lg:max-w-5xl p-4 mx-auto bg-gray-100 mt-2 rounded-xl shadow-md">
      <p>My Movies</p>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href={`/`}>Home</Link>
          </li>
          <li>
            <Link href={`/watchlist`}>Watchlist</Link>
          </li>
        </ul>
      </nav>
      {/* <div>Put a search bar here?</div> */}
      <button>
        {/* if loggedin, display user icon, else display login icon */}
        <CircleUserRound />
      </button>
    </div>
  );
}

export default Header;
