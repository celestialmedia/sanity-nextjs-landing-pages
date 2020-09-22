export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6a6f4a4142b70113504a4e',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-p77y2s11',
                  apiId: 'e35d7c0c-d257-469a-950a-5dedbdcd24cd'
                },
                {
                  buildHookId: '5f6a6f4a9c4cc20126e696cc',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-95btj8if',
                  apiId: '07113590-37fd-47fe-8160-5b52992a3788'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/celestialmedia/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-95btj8if.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
