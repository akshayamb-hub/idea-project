import LeftPanel from "../components/auth/LeftPanel";
import LoginForm from "../components/auth/LoginForm";

export default function Login({ onSignUpClick }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <LeftPanel />

      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <LoginForm onSignUpClick={onSignUpClick} />
      </div>
    </div>
  );
}