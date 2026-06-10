import RegistrationForm from '@/widgets/auth/ui/forms/RegistrationForm'

const Registration = () => {
    return (
        <div className='flex flex-col gap-4'>
            <h3 className='text-black font-bold'>Зарегистрируйтесь</h3>
            <RegistrationForm />
        </div>
    )
}

export default Registration
