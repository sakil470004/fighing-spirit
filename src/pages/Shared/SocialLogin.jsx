import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";

import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-hot-toast";


const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleLogin()
            .then(result => {
                const loggedInUser = result.user;
                // todo : uncomment it after server build
                // console.log(loggedInUser)
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email,role:'student',img:loggedInUser?.photoURL}
                fetch('https://fighting-spirit-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                        toast.success('Logged By Social Account')
                        navigate(from, { replace: true });
                    })
            })
    }

    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;