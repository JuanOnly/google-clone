import HeaderOption from "./HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

function HeaderOptions() {
  return (
    <div>
      {/* Left */}
      <div className="flex space-x-6">
        <HeaderOption Icon={SearchIcon} title="All" selected />
        <HeaderOption Icon={PhotographIcon} title="All" selected />
        <HeaderOption Icon={PlayIcon} title="All" selected />
        <HeaderOption Icon={NewspaperIcon} title="All" selected />
        <HeaderOption Icon={MapIcon} title="All" selected />
        <HeaderOption Icon={DotsVerticalIcon} title="All" selected />
      </div>
      {/* Right */}
      <div className="flex space-x-4">
        <p className="link">Setting</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
