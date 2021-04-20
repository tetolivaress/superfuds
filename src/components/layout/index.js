import Header from './Header'

const Layout = ({ children }) => (
  <>
    <Header />    
    <div className="mt-24">
      {children}
    </div>
  </>
)

export default Layout