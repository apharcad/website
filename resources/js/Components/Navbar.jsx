export default function Navbar() {
    return (
        <nav className="bg-white shadow-md p-4 flex justify-between items-center">
            <div className="text-xl font-bold">Apharcad</div>
            <ul className="flex space-x-4">
                <li>
                    <a href="#" className="text-gray-700 hover:text-purple-500">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-700 hover:text-purple-500">
                        Services
                    </a>
                </li>
                <li>
                    <a href="#" className="text-gray-700 hover:text-purple-500">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
