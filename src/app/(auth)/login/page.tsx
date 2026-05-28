import LoginForm from "@/features/auth/ui/forms/LoginForm"

const Login = () => {
    return (
        <div className="flex flex-col gap-4">
            <h3 className="text-black font-bold">Войлите</h3>
            <LoginForm />
        </div>
    )
}

export default Login