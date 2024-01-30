import { reactive } from 'vue';

export const store = reactive({
    home_nav:[
        {
            page: 'Main Home'
        },
        {
            page: 'Floating Portfolio'
        },
        {
            page: 'Portfolio Pinterest'
        },
        {
            page: 'Animated Slider'
        },
        {
            page: 'Portfolio Metro'
        },
        {
            page: 'Portfolio Gallery'
        },
        {
            page: 'Interactive Links'
        },
        {
            page: 'Split Slider Showcase'
        },
        {
            page: 'Portfolio Carousel'
        },
        {
            page: 'Landing'
        },
    ],
    page_nav:[
        {
            page:'About Us'
        },
        {
            page:'About Me'
        },
        {
            page:'What We Offer'
        },
        {
            page:'Working process'
        },
        {
            page:'Our Team'
        },
        {
            page:'Pricing Plans'
        },
        {
            page:'Contact Us'
        },
        {
            page:'Coming Soon'
        },
        {
            page:'404 Error Page'
        },
    ],
    portfolio_nav:[
        {
            title:'Types',
            pages:[
                {
                    page:'Standard'
                },{
                    page:'Gallery'
                },{
                    page:'Gallery Joined'
                },{
                    page:'Masonry'
                },{
                    page:'Masonry Joined'
                },{
                    page:'Pinterest'
                },{
                    page:'Scattered'
                },{
                    page:'Slider'
                },
            ]
        },
    ]
    
});
