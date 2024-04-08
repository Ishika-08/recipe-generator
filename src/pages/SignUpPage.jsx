import { createUserWithEmailAndPassword } from "firebase/auth";
import {useState} from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../Firebase/firebase";

export default function SignUpPage() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = () =>{
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            navigate("/recipe");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
        });
    }

    return (
        <div className='flex justify-center mt-[100px]'>
            <div className="flex flex-col max-w-md p-6 sm:p-10 shadow-lg text-gray-800 rounded-lg">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                    <p className="text-sm text-gray-600">Sign Up to access your account</p>
                </div>
                <form noValidate="" action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" onChange={(e) => handleChange(e)} name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" fdprocessedid="1kqedp" />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-600">Forgot password?</a>
                            </div>
                            <input type="password" onChange={(e) => handleChange(e)} name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800" fdprocessedid="90bql" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="button" onClick = {() => handleSubmit()} className="w-full px-8 py-3 font-semibold rounded-md bg-violet-600 text-gray-50" fdprocessedid="h7ojl6">Sign Up</button>
                        </div>
                        <p className="px-6 text-sm text-center text-gray-600">Already have an account yet?
                            <a rel="noopener noreferrer" className="hover:underline text-violet-600 cursor-pointer" onClick={() => {navigate("/login")}}>Login</a>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
      )
}
