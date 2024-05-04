interface Props {
  type: string;
  name: string;
}

const Input: React.FC<Props> = ({ type, name }) => {
  return (
    <div className="relative px-[10px] mt-5 pt-5 text-[#a7a6a8] ">
     
      <input
        className=" bg-[#1e2126] px-4 py-[18px] rounded-md outline-none border border-transparent peer"
        type={type}
        name={name}
      />
       <label className=" absolute duration-200 text-sm top-1/2 peer-focus:-translate-y-5 peer-focus:text-xs peer-valid:text-sm  left-6  pointer-events-none peer-valid:-translate-y-5 peer-empty:-translate-y-8">{name}</label>
    </div>
  );
};

export default Input;
