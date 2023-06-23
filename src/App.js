import React, { useEffect } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./nav/NavBar";
import './index.css';
import './App.css';
import Song from './components/pages/Song';

const App = () => {
  useEffect(() => {
    document.title = "moreminttea x JO1"
  }, []);

  return (
    <div className="App">
      <HashRouter basename="/">
        <Routes>
            <Route exact path='/' element={<NavBar/>}/>
            <Route path='/tropical-night/tiger' element={<Song/>}/>
            <Route path='/tropical-night/comma' element={<Song/>}/>
            <Route path='/tropical-night/trigger' element={<Song/>}/>
            <Route path='/tropical-night/we-good' element={<Song/>}/>
            <Route path='/tropical-night/romance' element={<Song/>}/>
            <Route path='/tropical-night/forever-here' element={<Song/>}/>
            <Route path='/midnight-sun/supercali' element={<Song/>}/>
            <Route path='/midnight-sun/phobia' element={<Song/>}/>
            <Route path='/midnight-sun/sixteen' element={<Song/>}/>
            <Route path='/midnight-sun/rose' element={<Song/>}/>
            <Route path='/kizuna/with-us' element={<Song/>}/>
            <Route path='/kizuna/zero' element={<Song/>}/>
            <Route path='/kizuna/walk-it-like-i-talk-it' element={<Song/>}/>
            <Route path='/kizuna/touch' element={<Song/>}/>
            <Route path='/kizuna/love-and-hate' element={<Song/>}/>
            <Route path='/kizuna/algorithm' element={<Song/>}/>
            <Route path='/kizuna/ryuuseiu' element={<Song/>}/>
            <Route path='/kizuna/move-the-soul' element={<Song/>}/>
            <Route path='/kizuna/dreamer' element={<Song/>}/>
            <Route path='/wandering/bokura-no-kisetsu' element={<Song/>}/>
            <Route path='/wandering/prologue' element={<Song/>}/>
            <Route path='/wandering/never-ending-story' element={<Song/>}/>
            <Route path='/wandering/run-and-go' element={<Song/>}/>
            <Route path='/wandering/we-alright' element={<Song/>}/>
            <Route path='/wandering/oasis' element={<Song/>}/>
            <Route path='/wandering/infinite-city' element={<Song/>}/>
            <Route path='/stranger/real' element={<Song/>}/>
            <Route path='/stranger/freedom' element={<Song/>}/>
            <Route path='/stranger/dreaming-night' element={<Song/>}/>
            <Route path='/stranger/stay' element={<Song/>}/>
            <Route path='/stranger/icarus' element={<Song/>}/>
            <Route path='/stranger/blooming-again' element={<Song/>}/>
            <Route path='/challenger/born-to-be-wild' element={<Song/>}/>
            <Route path='/challenger/speed-of-light' element={<Song/>}/>
            <Route path='/challenger/get-inside-me' element={<Song/>}/>
            <Route path='/challenger/kimi-no-mama' element={<Song/>}/>
            <Route path='/challenger/design' element={<Song/>}/>
            <Route path='/challenger/tsutaerarerunara' element={<Song/>}/>
            <Route path='/the-star/starlight' element={<Song/>}/>
            <Route path='/the-star/shine-a-light' element={<Song/>}/>
            <Route path='/the-star/starlight' element={<Song/>}/>
            <Route path='/the-star/safety-zone' element={<Song/>}/>
            <Route path='/the-star/yancha' element={<Song/>}/>
            <Route path='/the-star/happy-merry-christmas' element={<Song/>}/>
            <Route path='/the-star/monstar' element={<Song/>}/>
            <Route path='/the-star/be-with-you' element={<Song/>}/>
            <Route path='/stargazer/oh-eh-oh' element={<Song/>}/>
            <Route path='/stargazer/so-what' element={<Song/>}/>
            <Route path='/stargazer/kungchikita' element={<Song/>}/>
            <Route path='/stargazer/voice' element={<Song/>}/>
            <Route path='/stargazer/go' element={<Song/>}/>
            <Route path='/stargazer/my-friends' element={<Song/>}/>
            <Route path='/protostar/mugendai' element={<Song/>}/>
            <Route path='/protostar/running' element={<Song/>}/>
            <Route path='/protostar/la-pa-pa-pam' element={<Song/>}/>
            <Route path='/protostar/tsukame' element={<Song/>}/>
            <Route path='/protostar/grandmaster' element={<Song/>}/>
            <Route path='/protostar/young' element={<Song/>}/>
            <Route path='/other/all-hours' element={<Song/>}/>
            <Route path='/other/yolo-konde' element={<Song/>}/>
            <Route path='/other/toberukara' element={<Song/>}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
