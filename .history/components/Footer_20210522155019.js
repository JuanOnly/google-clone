import { GlobalIcon } from "@heroicons/react/solid"

function Footer() {
    return (
        <footer className="grid w-full">
            <div className="px-8 py-3">
                <p>Colombia</p>
            </div>
            <div>
                <div>
                    <GlobalIcon className="h-5 mr-1 text-gray-700" /> Carbon neutral since 2007
                </div>
            </div>
        </footer>
    )
}

export default Footer