const SkillBoxes = ({ name }) => {
  return (
    <div className="bg-gray-200 text-black rounded-sm font-extrabold cursor-default dark:bg-white dark:text-black flex items-center justify-center px-3 py-2">
      <span >{name}</span>
    </div>
  );
};

export default SkillBoxes;
