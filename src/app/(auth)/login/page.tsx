import LoginForm from "@/features/auth/ui/forms/LoginForm"
import Card from '@/features/auth/ui/card/Card'

const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen w-full bg-white text-black">
            <Card>
                <div className="flex flex-col gap-4">
                    <h3>Войлите</h3>
                    <LoginForm />
                </div>
            </Card>
        </div>
    )
}

export default Login