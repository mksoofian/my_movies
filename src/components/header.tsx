import { CircleUserRound, Clapperboard, Heart, List } from "lucide-react";
import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-center w-48 p-4 mx-auto bg-gray-100 mt-2 rounded-xl shadow-md">
      <nav>
        <ul className="flex gap-8">
          <li>
            <Link href={`/`}>
              <Clapperboard />
            </Link>
          </li>
          <li>
            <Link href={`/watchlist`}>
              <Heart />
            </Link>
          </li>
          <li>
            <button>
              {/* if loggedin, display user icon, else display login icon */}
              <CircleUserRound />
            </button>
          </li>
        </ul>
      </nav>
      {/* <div>Put a search bar here?</div> */}
    </div>
  );
}

export default Header;
