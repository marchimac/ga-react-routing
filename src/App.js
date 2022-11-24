import { Route, Routes, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import BookList from './pages/BookList'
import Book from './pages/Book'
import NewBook from './pages/NewBook'
import NotFound from './pages/NotFound'
import BooksLayouts from './pages/layouts/BooksLayouts'
import './css/App.css'

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to='/' style={ ({isActive}) => {
              return isActive ? { fontSize: '25px' } : {}
            }}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/books'>Books</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={ <BooksLayouts />}>
          <Route index element={ <BookList /> } />
          <Route path=':id' element={<Book />} />
          <Route path='new' element={<NewBook />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
