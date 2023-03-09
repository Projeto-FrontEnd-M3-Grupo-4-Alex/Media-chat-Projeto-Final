import { SearchForm } from "../../components/SearchForm";
import userImage from "../../assets/userImage.svg"
import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext/PostsContext";
import { UserModal } from "../../components/UserModal";
import { StyledUserDiv } from "./style";
import { PostsList } from "../../components/PostsList";
import { PostEditModal } from "../../components/PostEditModal";

export function Dashboard() {
  const { profileOpenModal, setProfileOpenModal, isOpened} = useContext(PostsContext)
  return (
    <>
<StyledUserDiv>
  <SearchForm />
  <div className= "profile">
    <h1>User name</h1>
    <img src = {userImage} onClick = { () => setProfileOpenModal(true)}alt = "userImage"/>
  </div>
  </StyledUserDiv>
  
  { profileOpenModal ? <UserModal/> : null}

  {isOpened && <PostEditModal />}
      <PostsList />
      
</>
  )
}





