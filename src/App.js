import { Route, Routes, Link, NavLink, useLocation, useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import BookList from './pages/BookList'
import Book from './pages/Book'
import NewBook from './pages/NewBook'
import NotFound from './pages/NotFound'
import BooksLayouts from './pages/layouts/BooksLayouts'
import './css/App.css'

function App() {
  const location = useLocation();
  console.log(location);

  let element = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/books',
      element: <BooksLayouts />,
      children: [
        {
          index: true,
          element: <BookList />
        },
        {
          path: ':id',
          element: <Book />
        },
        {
          path: 'new',
          element: <NewBook />
        }
      ]
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

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
            <NavLink to='/books' state='Hola Mundo!!' >Books</NavLink>
          </li>
        </ul>
      </nav>
      {element}
      {/* <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={ <BooksLayouts />}>
          <Route index element={ <BookList /> } />
          <Route path=':id' element={<Book />} />
          <Route path='new' element={<NewBook />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes> */}
    </>
  );
}

export default App;
