export type MetaProps = {
  title: string
  description: string
}

export type Section = {
  id: string
  title: string
  icon: any
  component: any
  props?: any
}

export type TimelineItem = {
  title: string
  place: string
  description: string
  date: string
}

export type Timeline = {
  timeline: TimelineItem[]
}

export type SectionContainer = {
  id: string
  class?: string
}

export type Link = {
  href: string
}

export type Social = {
  link: string
  name: string
  icon: any
}

export type Hero = {
  imageSrc: string
  imageAlt: string
  badgeText: string
  badgeLink: string
  header: string
  experience: string
  role: string
  location: string
  description: string
}

export type NavItem = {
  title: string
  label: string
  url: string
}

export type Card = {
  href: string
  title: string
  body: string
}

export type TechTag = {
  name: string
  class: string
  icon: any
}

export type TechProject = {
  title: string
  description: string
  link?: string
  github?: string
  image: string
  tags?: TechTag[]
}
