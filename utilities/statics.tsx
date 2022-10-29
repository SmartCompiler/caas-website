import CommingSoon from "../components/InstallModal/CommingSoon"
import InstallLinux from "../components/InstallModal/InstallLinux"
import { tabButtonTypes } from "../types"

interface routesListType {
    home:'/', 
    roadmap: '/roadmap'
}
export const routesList:routesListType = {
    home: '/',
    roadmap: '/roadmap'
}

export const routesTitle: {[key in keyof typeof routesList]: string} = {
    home: 'Home',
    roadmap: 'Roadmap'
}

type sectionsArrayType = [
    'Features',
    'Vision',
    'Contact Us'
] 

export const sectionsTitle:sectionsArrayType = [
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
    },
    copyright: '@ 2023 SCAAS'
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
    vision: '/Vision.svg',
    statistics: '/statistics.svg',
    sphere: '/sphere.svg'
}

export const modalTabs:{ title: tabButtonTypes, component: JSX.Element}[] = [
    {
        title: 'linux',
        component: <InstallLinux />
    },
    {
        title: 'mac',
        component: <CommingSoon />
    },
    {
        title: 'windows',
        component: <CommingSoon />
    },
    {
        title: 'android',
        component: <CommingSoon />
    },
    {
        title: 'ios',
        component: <CommingSoon />
    },
    {
        title: 'web',
        component: <CommingSoon />
    },
]

export const StaticMessges =  {
    global: {
        copyClipboad: 'copied to your clipboad'
    },
    landing: {
        title: 'Smart Compiler as a Service',
        description: 'Next generation of multi-purpose cloud compilers',
        button: 'Start for free'
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
        descripiton: 'Compilation often takes a long time, especially for large projects or when identifying better optimization options. Currently, compilers are mainly installed on local machines and used as standalone software. Despite the availability of several online compilers, they do not offer an efficient all-in-one package for private account management, command line interface (CLI), code advisors, and optimization techniques. Today, the widespread usage of Software as a Service (SaaS) is ever-growing, and compilers are not an exception. In this paper, we describe a symmetric approach to compilation and how to compile code on distributed systems. Although some improvements in cloud compilers have been made, it is possible to harness the potential of the most-modern technologies and architecture patterns toward designing efficient, in-cloud compilers',
    },
    statistices: {
        title: 'We Take Pride in Our Numbers',
        items: [
            {
                count: 15,
                unit: '',
                title: 'Years of experience'
            },
            {
                count: 10,
                unit: 'K',
                title: 'Business Partners'
            },
            {
                count: 25,
                unit: 'M',
                title: 'Users'
            },
            {
                count: 22,
                unit: '',
                title: 'Countries'
            },
            {
                count: 5,
                unit: '',
                title: 'Industry Awards'
            }
        ]
    }
} as const

export const links = {
    articleLink : 'https://www.mdpi.com/2073-8994/14/9/1818'
}

export const ModalInstallData = {
    linuxInstall: [
        {
          title: 'Step 1: Update and Upgrade the System',
          description: 'To start off, log into your Ubuntu 18.04 system using SSH protocol and update & upgrade system repositories using the following command.',
          code: <div><span className='mr-4'>$</span> apt update -y && apt upgrade -y</div>,
          codeCopy: 'apt update -y && apt upgrade -y'
        },
        {
          title: 'Step 2: install SCAAS',
          description: 'To install SCAAS CLI tool run the following command.',
          code: <div><span className='mr-4'>$</span> sudo apt install scaas</div>,
          codeCopy: 'sudo apt install scaas'
        },
        {
          title: 'Step 3: Ensure everything is ok',
          description: 'to make sure that you installed SCASS properly run the following command.',
          code: (<div className='flex flex-col'>
                    <div><span className='mr-4'>$</span> scaas --version</div>
                     <div><span className='mr-4'>$</span> scaas version 1.0</div> 
                </div>),
          codeCopy: 'scaas --version\
                     scaas version 1.0'
        }
      ]
}

export const roadmapData = [
    {
        title: 'Compiler phase',
        descriptions: [
            'Compile and link',
            'Different levels of Optimization',
            'User account management',
            'Cloud space',
            'public compiler plugin market place',
            'Remote library management',
            'Code advisor',
        ],
        ratioPosition: {
            x: 3.6,
            y: 9.1
        }
    },
    {
        title: 'Programming language',
        descriptions: [
            'Specific Domina Language creation made easy (New compiler frontends)',
            'Introduce your invented language to the world',
            'New way to created specialized compiler plugins',
            'Compiler plugin package management'
        ],
        ratioPosition: {
            x: 1.8,
            y: 8
        }
    },
    {
        title: 'Binary and machine code generation',
        descriptions: [
            'Micro-architecture aware code generators',
            'Generate machine code for the Architecture on your choice'
        ],
        ratioPosition: {
            x: 1.6,
            y: 3.4
        }
    },
    {
        title: 'Compiler intelligent',
        descriptions: [
            'Get the report of your compilation',
            'hold the compilation history',
            'provide intermediate representations',
            'Enable security checks during compile',
            'Apply AI and ML for best code practices',
            'Data science for user attraction and error coding'
        ],
        ratioPosition: {
            x: 1.7,
            y: 2.2
        }
    },
    {
        title: 'Bin container and artifactory',
        descriptions: [
            'Private and public binary repository',
            'binary version control on your local machine',
            'Local version of the engine',
            'Create plugin on partner artifactories'
        ],
        ratioPosition: {
            x: 4,
            y: 2.1
        }
    },
    {
        title: 'Cloud services',
        descriptions: [
            'Create a new online code',
            'Create private code repository',
            'CI/CD as a service on cloud(CDaaS)',
            'Binary as a function(BaaF)'
        ],
        ratioPosition: {
            x: 4.5,
            y: 3
        }
    }
]