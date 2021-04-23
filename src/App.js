import Layout from '@components/layout'
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import Loading from '@components/Loading'
import { CSSTransition, TransitionGroup } from "react-transition-group"
import Products from '@components/products'
import Cart from '@components/cart'
import { connect } from 'react-redux'

const App = ({ loading }) => {
  return (
    <>
      <Loading isOpen={loading} />
      <div className="carousel">
        <BrowserRouter>
          <AnimateSwitch />
        </BrowserRouter>
      </div>
    </>
  )
}

const AnimateSwitch = withRouter(({ location }) => (
  <TransitionGroup>
    <Layout>
      <CSSTransition 
        key={location.key} 
        classNames="cart-transition" 
        timeout={400}
      >
        <Route path='/' component={Products} />
      </CSSTransition>
    </Layout>
    <Layout>
      <CSSTransition 
        key={location.key} 
        classNames="cart-transition" 
        timeout={400}
      >
        <Route exact path='/cart' component={Cart} />
      </CSSTransition>
    </Layout>
  </TransitionGroup>
))

const mapStateToProps = ({ loading }) => ({ loading })

export default connect(mapStateToProps)(App)
