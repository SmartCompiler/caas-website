type sectionsArrayType = [
    'Home',
    'Features',
    'Vision',
    'Contact Us'
] 

export const sectionsTitle:sectionsArrayType = [
    'Home',
    'Features',
    'Vision',
    'Contact Us'
] 

export const companyDetails = {
    tel: '123-456-789',
    email: 'info@mysite.com',
    address: [
        '500 Terry Francios St',
        'Sanfransisco, CA 94158'
    ],
    socials: {
        github: 'https://github.com/SmartCompiler'
    }
} as const

export const medias = {
    icons: {
        gitHub: '/icons/GitHub.svg',
        cloud: '/icons/cloud.svg',
        advises: '/icons/code-advises.svg',
        optimization: '/icons/optimization.svg',
        versability: '/icons/versability.svg'
    },
    landing: '/landing.svg',
    landingCodeDemo: "/demo.gif",
    features: '/features.svg',
    vision: '/Vision.svg'
}

export const StaticMessges =  {
    landing: {
        title: 'Smart Compiler as a Service',
        description: 'Next generation of multi-purpose cloud compilers',
        button: 'LearnMore'
    },
    features: {
        title: 'Let us compile your code with the highest level of optimization',
        description: 'With the architecture of ourcompiler service on cloud ,we apply several optimization passes to the compilation',
        featureItem: [
            {
                title: 'Compile on cloud',
                description: 'Write your code anyewhere, on any platform, and compile it o the cloud with the highest speed',
                name: 'cloud',
                height: 190
            },
            {
                title: 'Smart code advises',
                description: 'Get benefit from our smart advisors for your source code',
                name: 'advises',
                height: 200
            },
            {
                title: 'Versability in Compilation',
                description: 'You don’t need to be worry about the language to be compiled, we provide you a large number of options',
                name: 'versability',
                height: 270
            },
            {
                title: 'Extra optimization phases',
                description: 'We apply extra optimization levels to your code as you wish',
                name: 'optimization',
                height: 200
            }
        ]
    },
    vision: {
        title: 'Micro-architecture aware',
        descripiton: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    }
} as const

