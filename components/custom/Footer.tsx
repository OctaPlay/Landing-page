const Footer = () => {
    return (
        <footer className="text-white">
            <div className="mx-auto max-w-7xl overflow-hidden px-6 lg:px-8">
                <nav
                    className="-mb-4 flex justify-center space-x-8 md:space-x-12"
                    aria-label="Footer"
                >
                    <div className="pb-6 sm:pb-0">
                        <a
                            href="/about"
                            className="text-sm leading-6 text-gray-400 hover:text-gray-300 z-10"
                        >
                            About
                        </a>
                    </div>
                    <div className="pb-6 sm:pb-0">
                        <a
                            href="/jobs"
                            className="text-sm leading-6 text-gray-400 hover:text-gray-300 z-10"
                        >
                            Jobs
                        </a>
                    </div>
                    <div className="pb-6 sm:pb-0">
                        <a
                            href="#"
                            className="text-sm leading-6 text-gray-400 hover:text-gray-300 z-10"
                        >
                            Press
                        </a>
                    </div>
                    <div className="pb-6 sm:pb-0">
                        <a
                            href="#"
                            className="text-sm leading-6 text-gray-400 hover:text-gray-300 z-10"
                        >
                            Accessibility
                        </a>
                    </div>
                    <div className="pb-6 sm:pb-0">
                        <a
                            href="/partners"
                            className="text-sm leading-6 text-gray-400 hover:text-gray-300 z-10"
                        >
                            Partners
                        </a>
                    </div>
                </nav>
                <div className="mt-10 flex justify-center space-x-10">
                    <a
                        href="https://discord.gg/qT2342YjRJ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-gray-300 z-10"
                    >
                        <span className="sr-only">Discord</span>
                        <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 50 50"
                            aria-hidden="true"
                        >
                            <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-gray-300 z-10"
                    >
                        <span className="sr-only">Instagram</span>
                        <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <g>
                                <path
                                    fill="currentColor"
                                    d="M 31.5,8.5 C 31.5,9.16667 31.5,9.83333 31.5,10.5C 26.2126,11.1447 21.8793,13.478 18.5,17.5C 20.4602,19.1563 22.4602,20.823 24.5,22.5C 25.4287,23.6888 25.762,25.0222 25.5,26.5C 18.5625,25.8091 12.0625,23.8091 6,20.5C 3.95339,21.6094 1.78672,22.2761 -0.5,22.5C -0.5,21.1667 -0.5,19.8333 -0.5,18.5C 3.30143,14.5268 6.9681,10.3602 10.5,6C 13.4899,5.10258 16.4899,4.26925 19.5,3.5C 20.7388,5.00721 20.4054,6.17388 18.5,7C 22.8629,7.3694 27.1962,7.8694 31.5,8.5 Z"
                                />
                            </g>
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-gray-300 z-10"
                    >
                        <span className="sr-only">GitHub</span>
                        <svg
                            className="h-6 w-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                            />
                        </svg>
                    </a>
                </div>
                <p className="mt-6 mb-8 text-center text-xs leading-5 text-gray-400">
                    &copy; 2024 OctaPlay, Inc. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
export default Footer;
