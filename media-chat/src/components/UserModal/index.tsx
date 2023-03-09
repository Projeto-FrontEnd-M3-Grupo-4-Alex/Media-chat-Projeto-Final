import userImage from "../../assets/userImage.svg"
import  profileImage from "../../assets/profileImage.svg"
import logoutImage from "../../assets/logoutImage.svg"
import { StyledDiv } from "./style"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { PostsContext } from "../../providers/PostsContext/PostsContext"

export const UserModal= ()=>{
    const { setProfileOpenModal} = useContext(PostsContext)
    return (
        <StyledDiv>
            <div className = "name">
            <h2>User name</h2>
            <img src = {userImage} className = "userImg" alt = "userImage"/>
            </div>
            <div className = "userInfo">
            <div className = "profileDiv">
            <img src = { profileImage} alt = "profileImage"/>
            <Link to = "/profile" >Perfil </Link>
            </div>
            <div className = "logoutDiv">
            <img src = { logoutImage} alt = "logoutImage"/>
            <Link to = "/login">Sair</Link>
            </div>
            </div>
            
        </StyledDiv>
    )
}
    
