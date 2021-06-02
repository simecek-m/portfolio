import { ReactComponent as OctoCatIcon } from "assets/octocat.svg";

function SvgIcon({ Icon = OctoCatIcon, className }) {
  return(
    <Icon className={className}/>
  )
}

export default SvgIcon;