import Link from "next/link"

const page = () => {
  return (
    <div>
        <h2 className="text-white text-center text-2xl mt-6">Create an Account</h2>
        <form action="" className="signup rounded-md border border-gray1 p-4 mx-6 mt-12 flex flex-col gap-4 items-center">
            <label htmlFor="">
                <p>Email</p>
                <input required type="email" placeholder="youremail@gmail.com" />
            </label>
            <label htmlFor="">
                <p>Username</p>
                <input required type="text" placeholder="Indigohotdog" />
            </label>
            <label htmlFor="">
                <p>Password</p>
                <input required type="password" placeholder="password" />
            </label>
            <label htmlFor="">
                <p>Confirm Password</p>
                <input required type="password" placeholder="confirm password" />
            </label>

            <button className="bg-darkGreen p-2 text-white w-[200px] rounded-md">Signup</button>

            <p className="text-white">Already have an account? <Link className="text-primary" href={"/auth/login"}>Login</Link></p>
        </form>
    </div>
  )
}

export default page