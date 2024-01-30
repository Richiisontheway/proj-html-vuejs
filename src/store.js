import { reactive } from 'vue';

export const store = reactive({
    images: [
    { img: "https://thumbs.dreamstime.com/b/homem-feliz-com-um-sorriso-e-um-polegar-brancos-perfeitos-acima-40905445.jpg",
      name:"MYKE GREG",
      professione:"Web Designer"
    },
    { img: "https://www.105.net/resizer/1000/683/true/1478526436357.jpg--28_semplici_abitudini_che_ti_renderanno_una_persona_piu_felice.jpg?1478526440000",
     name:"ALISHA SELBY",
     professione:"marketing manager"
    },
    { img: "https://www.sapere.it/.imaging/default/dam/icone-sapere/IMMAGINI-VARIE/pillole/giornata-felicita-2/jcr:content.jpg",
     name:"TABATHA FRASER",
     professione:"animation"
    },
    { img: "https://www.perspectiva.gt/wp-content/uploads/feliz3.jpg",
     name:"OCTAVIA SCALA",
     professione:"Frontender developer"
    },
    { img: "https://th.bing.com/th/id/OIP.CrjhYhW_7umyN37gJ4gvgwHaI1?rs=1&pid=ImgDetMain",
     name:"SCOTT PILGRIM",
     professione:"Backend developer"
    },
    { img: "https://th.bing.com/th/id/OIP.rsN53zKLAB8ddDxsWBcgeQHaDd?rs=1&pid=ImgDetMain",
    name:"BARBARA THOMAS",
    professione:"Graphic Designer"
    },
    { img: "https://th.bing.com/th/id/OIP.7VThHu2VS76jFvN5_5gnlgHaEW?rs=1&pid=ImgDetMain",
     name:"photographer",
     professione:"Web Designer"
    },
    { img: "https://th.bing.com/th/id/R.7f364df06a214e76633a8d90a929905f?rik=ap4z367d%2fGKdxQ&pid=ImgRaw&r=0",
     name:"SARA IKA",
     professione:"creative director"
    }, 

    ],

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
        },{
            title:'Layout',
            pages:[
                {
                    page:'Two Columns'
                },{
                    page:'Three Columns'
                },{
                    page:'Three Columns Wide'
                },{
                    page:'Four Columns'
                },{
                    page:'Four Columns Wide'
                },{
                    page:'Five Columns'
                },{
                    page:'Five Columns Wide'
                },{
                    page:'Six Columns Wide'
                },
            ]
        },{
            title:'Hover Tipes',
            pages:[
                {
                    page:'Slide In'
                },{
                    page:'Float'
                },{
                    page:'Overlay'
                },{
                    page:'Zoom'
                },{
                    page:'Shader'
                },{
                    page:'Clip Image'
                },{
                    page:'Singles'
                },
            ]
        },{
            title:'Singles',
            pages:[
                {
                    page:'Split Screen'
                },{
                    page:'Full Width Slider'
                },{
                    page:'Wide Slider'
                },{
                    page:'Big Slider'
                },{
                    page:'Small Slider'
                },{
                    page:'Big Image'
                },{
                    page:'Big Images'
                },{
                    page:'Small Images'
                },{
                    page:'Big Gallery'
                },{
                    page:'Small Gallery'
                },{
                    page:'Masonry'
                },
            ]
        },
    ],
    blog_nav:[
        {
            page:'Right Sidebar'
        },{
            page:'Left Sidebar'
        },{
            page:'Centered'
        },{
            page:'Post Types'
        }
    ],
    shop_nav:[
        {
            page:'Product List'
        },{
            page:'Product Single'
        },{
            page:'Shop Layout'
        },{
            page:'Shop Pages'
        }
    ],
    element_nav:[
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
        },{
            title:'Layout',
            pages:[
                {
                    page:'Two Columns'
                },{
                    page:'Three Columns'
                },{
                    page:'Three Columns Wide'
                },{
                    page:'Four Columns'
                },{
                    page:'Four Columns Wide'
                },{
                    page:'Five Columns'
                },{
                    page:'Five Columns Wide'
                },{
                    page:'Six Columns Wide'
                },
            ]
        },{
            title:'Hover Tipes',
            pages:[
                {
                    page:'Slide In'
                },{
                    page:'Float'
                },{
                    page:'Overlay'
                },{
                    page:'Zoom'
                },{
                    page:'Shader'
                },{
                    page:'Clip Image'
                },{
                    page:'Singles'
                },
            ]
        },{
            title:'Singles',
            pages:[
                {
                    page:'Split Screen'
                },{
                    page:'Full Width Slider'
                },{
                    page:'Wide Slider'
                },{
                    page:'Big Slider'
                },{
                    page:'Small Slider'
                },{
                    page:'Big Image'
                },{
                    page:'Big Images'
                },{
                    page:'Small Images'
                },{
                    page:'Big Gallery'
                },{
                    page:'Small Gallery'
                },{
                    page:'Masonry'
                },
            ]
        },
    ],
});
