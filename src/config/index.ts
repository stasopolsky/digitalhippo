export const PRODUCT_CATEGORIES = [
    {
        label: "UI Kits",
        value:"ui_kits" as const ,
        featured:[
            {
                neme:"Editor picks",
                href:"#",
                imageSrc: "./nav/ui-kits/mixed.jpg",
            },
            {
                neme:"New Arrivals",
                href:"#",
                imageSrc: "./nav/ui-kits/blue.jpg",
            },
            {
                neme:"BestSellers",
                href:"#",
                imageSrc: "./nav/ui-kits/purple.jpg",
            }


        ]
    },
    {
        label: "Icons",
        value:"icons" as const ,
        featured:[
            {
                neme:"Favorite Icon picks",
                href:"#",
                imageSrc: "./nav/icons/picks.jpg",
            },
            {
                neme:"New Arrivals",
                href:"#",
                imageSrc: "./nav/icons/new.jpg",
            },
            {
                neme:"BestSelling Icons",
                href:"#",
                imageSrc: "./nav/icons/bestsellers.jpg",
            }


        ]
    }
]
