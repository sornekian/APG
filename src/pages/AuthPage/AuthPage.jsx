import SignUpForm from '../../components/SignUpForm/SignUpForm'

export default function AuthPage({ setUser }) {
    return (
        <main>
            <SignUpForm setUser={setUser} />
        </main>
    )
}