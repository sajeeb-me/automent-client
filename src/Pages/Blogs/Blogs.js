import React from 'react';

const Blogs = () => {
    return (
        <div className='text-left'>
            <section>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    {/* faq header  */}
                    <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <div>
                                <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-cyan-500">
                                    FAQ
                                </p>
                            </div>
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto">
                                <span className="relative inline-block">
                                    <svg
                                        viewBox="0 0 52 24"
                                        fill="currentColor"
                                        className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                                    >
                                        <defs>
                                            <pattern
                                                id="70326c9b-4a0f-429b-9c76-792941e326d5"
                                                x="0"
                                                y="0"
                                                width=".135"
                                                height=".30"
                                            >
                                                <circle cx="1" cy="1" r=".7" />
                                            </pattern>
                                        </defs>
                                        <rect
                                            fill="url(#70326c9b-4a0f-429b-9c76-792941e326d5)"
                                            width="52"
                                            height="24"
                                        />
                                    </svg>
                                    <span className="relative">Let's</span>
                                </span>{' '}
                                discus about most asking four questions.
                            </h2>
                            <p className="text-base opacity-70 md:text-lg">
                                You will get the answers of your four questions below. I tried my level best to give a details answer.
                            </p>
                        </div>
                    </div>
                    {/* questions and answers  */}
                    <div className="max-w-screen-xl sm:mx-auto">
                        <div className="grid grid-cols-1 gap-16 row-gap-8 lg:grid-cols-2">
                            {/* left side  */}
                            <div className="space-y-8">
                                <div>
                                    <p className="mb-4 text-xl font-medium">
                                        1. Difference between Javascript and nodejs
                                    </p>
                                    <div className="opacity-60 font-thin">
                                        Javascript is a scripting programming language which is used to write scripts in website. Which is upgraded version of ECMA script.
                                        <br />
                                        Shortly we can say, NodeJS is a Javascript runtime environment.
                                        <br />
                                        <br />
                                        Javascript can only run in the browser.
                                        <br />
                                        NodeJS helps Javascript to run outside of the browser.
                                        <br />
                                        <br />
                                        Javascript can run in any browser engine.
                                        <br />
                                        Inside of the NodeJS V8 is the Javascript engine that parses and runs Javascript.
                                        <br />
                                        <br />
                                        Javascript is used for frontend development whereas NodeJS is used in server side development.
                                    </div>
                                </div>
                                <div>
                                    <p className="mb-4 text-xl font-medium">
                                        3. Differences between SQL and NoSQL databases.
                                    </p>
                                    <div className="opacity-60 font-thin">
                                        Some differences between SQL and NoSQL databases :
                                        <br />
                                        <br />
                                        <ul className='list-disc space-y-5'>
                                            <li>
                                                SQL is Relational Database Management System (RDBMS), and NoSQL is Non-relational or Distributed Database System.
                                            </li>
                                            <li>
                                                The schemas are predefined for structured query language in SQL database. And, Schemas are dynamic for unstructured data in NoSQL data.
                                            </li>
                                            <li>
                                                For complex queries the best suited database is SQL, whereas
                                                for hierarchical data storage the best suited database is NoSQL
                                            </li>
                                            <li>
                                                SQL databases are vertically scalable and NoSQL databases are horizontally scalable.
                                            </li>
                                            <li>
                                                For multi-row transactions SQL databases are better and for unstructured data like JSON or documents, NoSQL databases are better.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* right side  */}
                            <div className="space-y-8">
                                <div>
                                    <p className="mb-4 text-xl font-medium">
                                        2. When should you use NodeJS and when should you use MongoDB ?
                                    </p>
                                    <div className="opacity-60 font-thin">
                                        <p>
                                            Well, NodeJS and MongoDB are two different process. Here I tried to explain as simpler as possible:
                                        </p>

                                        <ul className="list-disc">
                                            <li className='font-bold mt-5'>NodeJS</li>
                                            <p>
                                                Shortly we can say, NodeJS is a JavaScript runtime environment. It's actually helps JavaScript to run outside of server. It's used in server side development.
                                            </p>

                                            <li className='font-bold mt-5'>MongoDB</li>
                                            <p>
                                                But, MongoDB is NoSQL database which is document oriented. It represents data as of JSON documents. It's used for store data.
                                            </p>

                                            <li className='font-bold mt-5'>Summary</li>
                                            <p>
                                                The summary is MongoDB is a database where we can store data and NodeJS helps us to to connect our client site to database by it's server site.
                                            </p>

                                            <li className='font-bold mt-5'>Example</li>

                                            <p>
                                                Suppose you are building a website and you need a database to store the data or information so here you can use MongoDB but to be connected with MongoDB you need a connector, so here you can use NodeJS which will help your website to run outside of server.
                                            </p>
                                        </ul>
                                    </div>

                                </div>
                                <div>
                                    <p className="mb-4 text-xl font-medium">
                                        4. What is the purpose of JWT and how does it work ?
                                    </p>
                                    <div className="opacity-60 font-thin">
                                        <div>
                                            JWT or Json Web Token is an open standard used to share security information between client site and server site as a JSON object. It is Signed digitally that's why this information can be trusted and verified. To ensure that the claims can't be changed after the token is issued , JWT are signed using a cryptographic algorithm.
                                            <br />
                                            <br />
                                            For Authorization and Information Exchange we can use JWT.
                                            <br />
                                            JWT consist of three parts separated by dots.
                                            <ul className='list-decimal pl-5 mt-2'>
                                                <li>Header</li>
                                                <li>Payload</li>
                                                <li>Signature</li>
                                            </ul>
                                            <br />
                                            <p className='font-bold'>How does JWT work</p>
                                            <p>
                                                When a user successfully logged in by their all information, a JSON Web Token will be returned. And then whenever the user is about to use the protected route , a JWT will send throw Authorization header by user agent. Then, the server protected route will check is this JWT valid or not . If the JWT is valid the server will give the user to access and if not then the user will not able to access and can be logged out.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;