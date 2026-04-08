import LoginForm from "@/shared/components/auth/ui/LoginForm"

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen w-full">
            <div className="flex flex-col gap-4">
                <h3>Войлите</h3>
                <LoginForm />
            </div>
        </div>
    )
}

export default Login