
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';

import useGetUser from '../hook/useGetUser';
import RingLoading from '../component/loader/RingLoading';

const CreatorPrivateRoutes = ({children}) => {
    const currentLocation = useLocation().pathname
    const {loader, user} = useContext(AuthContext);
    const [userData, refetch, isLoading] = useGetUser()
    const navigate = useNavigate()
    if(loader || isLoading){
        return <RingLoading></RingLoading>
    }

    if(user && userData?.role === "taskCreator"){

        return children
    }
if(!user){
    navigate('/login')
}

navigate('/forbidden')
    

};

CreatorPrivateRoutes.propTypes = {
    children: PropTypes.node
};

export default CreatorPrivateRoutes;