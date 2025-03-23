import { useAuth0 } from "@auth0/auth0-react";
import ContainerTitle from "./Global/ContainerTitle";

const InformationUser = () =>{
    const {user, isAuthenticated} = useAuth0()
    const name = isAuthenticated ? <ContainerTitle text= {user.name} style= "text-white" /> : <ContainerTitle text= "Sin nombre" style= "text-white" />
    const email = user?.email
    const nickName = user?.nickname

    return {name, email, nickName}
}