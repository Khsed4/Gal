import { Link } from "react-router-dom";
export const MenuListArray2 = [

    {
        title: 'Products',
        classsChange: 'has-mega-menu',        
        content: [
            {
                title: 'Pages',
                content:[
                    
                    {
                        title: 'About Us',
                        to: './about-us',
                    },
                    {
                        title: 'Coming Soon',
                        to: './coming-soon',
                    },
                    {
                        title: 'Team',
                        to: './team',
                    },
                ],
            },
            {
                title: 'Pages',
                content:[
                
                    {
                        title: 'Company History',
                        to: './company-history',
                    },
                    {
                        title: 'Contact Us',
                        to: './contact-us',
                    },
                    {
                        title: 'Error 404',
                        to: './error-404',
                    },
                ],
            },
            {
                title: 'Pages',
                content:[
               
                  
                    {
                        title: 'Gallery Masonry',
                        to: './gallery-masonry',
                    },
                    
                ],
            },
            {
                title: 'Pages',
                content:[
                    
                    
                ],
            },    

        ],
    },
  
    {
        title: 'Shop',
        classsChange: 'sub-menu-down',
        content : [
            {
                title: 'Shop Grid 3',
                to: './shop-grid-3',
            },
            {
                title: 'Product Details',
                to: './product-details',
            },
            {
                title: 'Wishlist',
                to: './shop-wishlist',
            },
            {
                title: 'Checkout',
                to: './shop-checkout',
            },
            {
                title: 'Cart',
                to: './shop-cart',
            },
            {
                title: 'Login',
                to: './login',
            },
        ],
    },
    {
        title: 'About US',
        classsChange: 'sub-menu-down',
        to: './about-us',
    }
]