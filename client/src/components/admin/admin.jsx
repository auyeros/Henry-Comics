import React,{useState} from 'react';
import AgregarCategorias from '../categoryAdmin/AgregarCategorias';
import ProductsCrud from '../productAdmin/ProductsCrud';
import Users from '../usersAdmin/users'
import OrderTable from '../ordenes/ordenesAdmin'
import Wishlist from '../wishlistAdmin/wishlist'
//import { BrowserRouter  as Router, Route, Link} from 'react-router-dom';
import './admin.css';

import {TabContent, TabPane, Nav, NavItem, NavLink} from 'reactstrap'
import classnames from 'classnames'

const Admin = ({/*newCat,get,categories,getCat*/}) => {
    
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
      if(activeTab !== tab) setActiveTab(tab)
    }

    return(
        // <Router >
        //     <div class="col d-flex justify-content-left bg-rojo">
        //         <ul class="nav">
        //             <div className="row cPanel-categorias">
        //                 <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
        //                     <Link to = '/admin/category' className="text-decoration-none"><h4>Categorias</h4></Link>
        //                 </a>
        //             </div>
        //             <div className="row cPanel-productos">
        //                 <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
        //                     <Link to = '/admin/product' className="text-decoration-none"><h4>Productos</h4></Link>
        //                 </a>
        //             </div>
        //             <div className="row cPanel-ordenes">
        //                 <a class="nav-link" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
        //                     <Link to = '/admin/ordenes' className="text-decoration-none"><h4>Ordenes</h4></Link>
        //                 </a>
        //             </div>
        //         </ul>
        //     </div>            
        //     <div>
        //         <div>
        //             <Route
        //                 exact path = '/admin/category'
        //                 render = {()=>
        //                     <AgregarCategorias                                                              /> //SE BORRAN LAS PROPS
        //                 }                  /* newCat={newCat} categories={categories} getCat={getCat} */
        //             />
        //         </div>
        //         <div>
        //             <Route
        //                 exact path = '/admin/product'
        //                 render = {()=>
        //                     <ProductsCrud /> 
        //                     // get={get} (exProps)
        //                     //SE BORRAN LAS PROPS
        //                 }
        //             />
        //         </div>
        //         <div>
        //             <Route
        //                 exact path = '/admin/ordenes'
        //                 render = {()=>
        //                     <Orden /> 
        //                     // get={get} (exProps)
        //                     //SE BORRAN LAS PROPS
        //                 }
        //             />
        //         </div>
        //     </div>
        // </Router>
    <div className='admin'>
      <Nav tabs style={{backgroundColor:'#d23d2a'}}>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
            type='button'
          >
            Categorias
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
            type='button'
          >
            Productos
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
            type='button'
          >
            Ordenes
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
            type='button'
          >
            Usuarios
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}
            type='button'
          >
            Wishlist
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <AgregarCategorias/>
        </TabPane>
        <TabPane tabId="2">
          <ProductsCrud/>
        </TabPane>
        <TabPane tabId="3">
          <OrderTable/>
        </TabPane>
        <TabPane tabId="4">
          <Users/>
        </TabPane>
        <TabPane tabId="5">
          <Wishlist />
        </TabPane>
      </TabContent>
    </div>
    )
}

export default Admin;