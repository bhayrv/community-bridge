// frontend/src/components/Login.tsx
import { auth, provider } from '../firebase';
import { signInWithPopup } from "firebase/auth";

export default function Login() {
  const signIn = async () => {
    await signInWithPopup(auth, provider);
  };

  return (
    <button onClick={signIn} className="bg-blue-500 text-white p-2 rounded">
      Sign in with Google
    </button>
  );
}