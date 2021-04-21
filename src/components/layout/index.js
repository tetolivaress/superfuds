import Header from './Header'

const Layout = ({ children }) => (
  <>
    <Header />    
    <div className="mt-24 mx-6">
      {children}
    </div>
  </>
)

export default Layout