import Input from "../ui/input";

const Login = () => {
  return (
    <div>
      <form className="py-5 px-6 h-max sm:w-[285px] w-full bg-[#16191c] rounded-lg flex flex-col items-center" >
        <h3 className="text-lg font-semibold text-white text-center mb-1">
          Sign In
        </h3>
        <p className="text-[#a7a6a8] text-[0.93rem] font-medium text-center">
          Login to your account
        </p>
        <Input name="Email" type="email"/>
        <Input name="Password" type="password"/>
       <button type="submit" className="bg-[#2787f5] text-white py-[0.87rem] w-full mt-5 rounded-lg">Sign In</button>
    
      </form>
    </div>
  );
};

export default Login;
