const Tabs = ({imageName1, imageAlt1, imageName2, imageAlt2, imageName3, imageAlt3, imageName4, imageAlt4,}) => {
    return(
        <section className="flex flex-col items-center justify-center gap-4">
            <div class="xl:hidden">
                <label for="tabs" class="sr-only">Select your country</label>
                <select id="tabs" class="bg-blue-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 px-8 py-4">
                    <option>Automatic Transfer Switch</option>
                    <option>Molded Case Circuit Breaker</option>
                    <option>Universal Circuit Breaker</option>
                    <option>Miniature Circuit Breaker</option>
                </select>
            </div>
            <ul class="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow-sm sm:flex dark:divide-gray-700 dark:text-gray-400">
                <li class="w-full focus-within:z-10">
                    <a href="#" class="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Profile</a>
                </li>
                <li class="w-full focus-within:z-10">
                    <a href="#" class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Dashboard</a>
                </li>
                <li class="w-full focus-within:z-10">
                    <a href="#" class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Settings</a>
                </li>
                <li class="w-full focus-within:z-10">
                    <a href="#" class="inline-block w-full p-4 bg-white border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">Invoice</a>
                </li>
            </ul>

            <div id="tab-asp" className="flex flex-col xl:flex-row items-center gap-12">
                <div className="flex flex-col justify-center items-center">
                    <img src={imageName1} alt={imageAlt1} className="w-1/2"/>
                    <h3 className="font-medium text-xl">ASP Anti-surge Module</h3>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={imageName2} alt={imageAlt2} className="w-1/2"/>
                    <h3 className="font-medium text-xl">SKT1 Series Class PC ATS</h3>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={imageName3} alt={imageAlt3} className="w-1/2"/>
                    <h3 className="font-medium text-xl">SKT2 Series Ultra-thin Class PC ATS</h3>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img src={imageName4} alt={imageAlt4} className="w-1/2"/>
                    <h3 className="font-medium text-xl">ASKQ1 Series Household ATS 16A-63A</h3>
                </div>
            </div>
        </section>
    )
}

export default Tabs;