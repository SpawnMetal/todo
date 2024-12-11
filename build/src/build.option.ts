type ProjectType = 'front-end' | 'back-end'

export interface BuilderOptions {
  applicationName: string
  projectType: ProjectType
  pathName: string
  webPageTittle?: string | undefined
  servePort?: number | undefined
}
