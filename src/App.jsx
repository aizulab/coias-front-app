import React, { useState, useMemo } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ExplorePrepare from './page/ExplorePrepare';
import './style/style.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Report from './page/Report';
import Header from './component/Header';
import COIAS from './page/COIAS';
import {
  PageContext,
  MousePositionContext,
  StarPositionContext,
} from './component/context';

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const pageValue = useMemo(
    () => ({ currentPage, setCurrentPage }),
    [currentPage],
  );

  const [currentMousePos, setCurrentMousePos] = useState({ x: 0, y: 0 });
  const mouseValue = useMemo(
    () => ({ currentMousePos, setCurrentMousePos }),
    [currentMousePos],
  );

  const [starPos, setStarPos] = useState([]);
  const starValue = useMemo(() => ({ starPos, setStarPos }), [starPos]);
  return (
    <BrowserRouter>
      <Header />
      <PageContext.Provider value={pageValue}>
        <MousePositionContext.Provider value={mouseValue}>
          <StarPositionContext.Provider value={starValue}>
            <Route exact path="/" component={ExplorePrepare} />
            <Route path="/COIAS" component={COIAS} />
            <Route path="/Report" component={Report} />
          </StarPositionContext.Provider>
        </MousePositionContext.Provider>
      </PageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
