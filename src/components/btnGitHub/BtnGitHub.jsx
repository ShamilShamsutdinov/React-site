import git from "../../img/icons/gitHub-black.svg";

const BtnGitHub = () => {
  return (
    <a href="#!" target="_blank" className="btn-outline">
      <img src={git} alt="" />
      GitHub repo
    </a>
  );
};

export default BtnGitHub;
