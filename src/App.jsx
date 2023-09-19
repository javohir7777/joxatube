import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./container/layout";
import Header from "./container/header";
import HomePage from "./pages/HomePage";
import Explore from "./pages/Explore";
import OnePage from "./pages/OnePage";
import ShortsPage from "./pages/ShortsPage";
import SubscriptionsPage from "./pages/SubscriptionsPage";
import LibraryPage from "./pages/LibraryPage";
import HistoryPage from "./pages/HistoryPage";
import VideosPage from "./pages/VideosPage";
import WatchPage from "./pages/WatchPage";
import PopPage from "./pages/PopPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="explore" element={<Explore />} />
          <Route path="shorts" element={<ShortsPage />} />
          <Route path="subscriptions" element={<SubscriptionsPage />} />
          <Route path="library" element={<LibraryPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="videos" element={<VideosPage />} />
          <Route path="watch" element={<WatchPage />} />
          <Route path="pop" element={<PopPage />} />
          <Route path="onePage/:videoId" element={<OnePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
