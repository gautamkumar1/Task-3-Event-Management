/* eslint-disable react/no-unescaped-entities */

import { motion } from "framer-motion";
import { Link } from "react-router-dom"
import { Mail, Lock,User } from "lucide-react";
import Input from "../sourceComponents/Input";
import { Button } from "../../components/ui/button"

export default function Register() {
    return (

        <div className="flex flex-col min-h-screen justify-center items-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='max-w-md w-full bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden'
            >
                <div>
                    <div className='p-8'>
                        <h2 className='text-3xl font-bold mb-6 text-center bg-gradient-to-r from-green-400 to-emerald-500 text-transparent bg-clip-text'>
                        Create an account
                        </h2>

                        <form>
                            <Input
                                icon={User}
                                type='username'
                                placeholder='Username'
                            />


                            <Input
                                icon={Mail}
                                type='email'
                                placeholder='Enter your email'
                            />

                            <Input
                                icon={Lock}
                                type='password'
                                placeholder='Password'
                            />
                            {/* Forgot password */}
                            {/* <div className='flex items-center mb-6'>
                                <Link to='/forgot-password' className='text-sm text-green-400 hover:underline'>
                                    Forgot password?
                                </Link>
                            </div> */}
                            <div>
                                <Button type="submit" className="w-full">
                                    Register
                                </Button>
                            </div>
                        </form>
                        <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-4 pt-3">
                             <Button className="w-full sm:w-auto">
                               <ChromeIcon className="mr-2 h-5 w-5" />
                          Login with Google
                        </Button>
                           <Button className="w-full sm:w-auto">
                              <FacebookIcon className="mr-2 h-5 w-5" />
                             Login with Facebook
                        </Button>
                  </div>
                    </div>
                    <div className='px-8 py-4 bg-gray-900 bg-opacity-50 flex justify-center'>
                        <p className='text-sm text-gray-400'>
                        Already have an account?
                            <Link to='/login' className='text-green-400 hover:underline'>
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>

    );
}

function ChromeIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="21.17" x2="12" y1="8" y2="8" />
            <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
            <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
        </svg>
    )
}


function FacebookIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
    )
}