import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from '../pages/main/Main';
import Home from '../pages/home/Home';
import TogetherUpload from '../pages/together/TogetherUpload';
import TogetherEdit from '../pages/together/TogetherEdit';
import Signup from '../pages/signup/Signup';
import MyProfile from '../pages/myprofile/MyProfile';
import FollowingList from '../pages/follow/FollowingList';
import FollowerList from '../pages/follow/FollowerList';
import PostDetail from '../components/postDetail';

export default function MyRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/home" element={<Home />} />
                    <Route
                        path="/togetherUpload"
                        element={<TogetherUpload />}
                    />
                    <Route path="/togetherEdit" element={<TogetherEdit />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/following" element={<FollowingList />} />
                    <Route path="/follower" element={<FollowerList />} />
                    <Route path="/myprofile" element={<MyProfile />} />
                    <Route path="/post/detail/:id" element={<PostDetail />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
