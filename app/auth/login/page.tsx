import Link from "next/link"

const page = () => {
  return (
    <div>
        <h2 className="text-white text-center text-2xl mt-6">Welcome back, Login</h2>
        <form action="" className="login rounded-md border border-gray1 p-4 mx-6 mt-12 flex flex-col gap-4 items-center">
            <label htmlFor="">
                <p>Email</p>
                <input required type="email" placeholder="youremail@gmail.com" />
            </label>
            <label htmlFor="">
                <p>Password</p>
                <input required type="password" placeholder="password" />
            </label>

            <button className="bg-darkGreen p-2 text-white w-[200px] rounded-md">Login</button>

             <p className="text-white">Don't have an account? <Link className="text-primary" href={"/auth/signup"}>Signup</Link></p>
        </form>
    </div>
  )
}

export default page