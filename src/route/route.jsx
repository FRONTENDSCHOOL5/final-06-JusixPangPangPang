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
import Search from '../components/search';
import UserProfile from '../pages/userprofile/UserProfile';
import UpdateProfile from '../pages/myprofile/UpdateProfile';
import PostUpload from '../pages/postUpload/postUpload';
import Together from '../pages/together/Together'
import TogetherDetail from '../pages/together/TogetherDetail';
import PostModify from '../pages/postUpload/postModify';

export default function MyRouter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/together" element={<Together />} />
                    <Route path="/together/upload" element={<TogetherUpload />} />
                    <Route path="/together/edit/:id" element={<TogetherEdit />} />
                    <Route path="/together/detail/:id" element={<TogetherDetail />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/following" element={<FollowingList />} />
                    <Route path="/follower" element={<FollowerList />} />
                    <Route path="/myprofile" element={<MyProfile />} />
                    <Route path="/myprofile/update" element={<UpdateProfile />} />
                    <Route path="/post/upload" element={<PostUpload />} />
                    <Route path="/post/modify/:id" element={<PostModify />} />
                    <Route path="/post/detail/:id" element={<PostDetail />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/profile/:id" element={<UserProfile />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
